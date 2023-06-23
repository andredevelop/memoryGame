document.addEventListener('DOMContentLoaded', ()=>{
	//carregamento dos cards
	const cardArray = [

	{
		name: 'ganhou',
		img: 'images/ganhou.png'
	},
	{
		name: 'ganhou',
		img: 'images/ganhou.png'
	},
	
	{
		name: 'direita',
		img: 'images/direita.png'
	},
	{
		name: 'direita',
		img: 'images/direita.png'
	},

	{
		name: 'tras',
		img: 'images/tras.png'
	},
	{
		name: 'tras',
		img: 'images/tras.png'
	},

	{
		name: 'correndo',
		img: 'images/correndo.png'
	},
	{
		name: 'correndo',
		img: 'images/correndo.png'
	},

	{
		name: 'pulo',
		img: 'images/pulo.png'
	},
	{
		name: 'pulo',
		img: 'images/pulo.png'
	},

	{
		name: 'esquerda',
		img: 'images/esquerda.png'
	},
	{
		name: 'esquerda',
		img: 'images/esquerda.png'
	}

	];
	cardArray.sort(()=> 0.5 - Math.random());
//final do array

	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');

	var cardsEscolhidos = [];
	var cardsEscolhidosId = [];
	var pares = [];

	//criando tela
	function createBoard(){
		for(var i = 0; i < cardArray.length; i++){
			var card = document.createElement('img');
			card.setAttribute('src','images/card.png');//mesma face ao entrar no jogo
			card.setAttribute('data-Id',i);//distribui as imagens conforme id
			card.addEventListener('click',flipCard);//ao clicar vira carta
			grid.appendChild(card);//adiciona card na tela da grid
		}
	}

	//conferir pares
	function conferir(){
		var cards = document.querySelectorAll('img');
		const optionOneId = cardsEscolhidosId[0];
		const optionTwoId = cardsEscolhidosId[1];

		//se clicar duas vezes no mesmo card
		if(optionOneId == optionTwoId){
			cards[optionOneId].setAttribute('src','images/card.png');
			cards[optionTwoId].setAttribute('src','images/card.png');
			alert('Você clicou na mesma imagem');
		}
		//formando par
		else if(cardsEscolhidos[0] == cardsEscolhidos[1]){
			alert('Você conseguiu um par');
			cards[optionOneId].setAttribute('src','images/white.png');
			cards[optionTwoId].setAttribute('src','images/white.png');
			cards[optionOneId].removeEventListener('click',flipCard);
			cards[optionTwoId].removeEventListener('click',flipCard);
			pares.push(cardsEscolhidos);
		}//não formou par
		else{
			cards[optionOneId].setAttribute('src','images/card.png');
			cards[optionTwoId].setAttribute('src','images/card.png');
			alert('Você não achou o outro par. Jogue de novo! :D');
		}
		cardsEscolhidos = [];
		cardsEscolhidosId = [];
		resultDisplay.textContent = pares.length;

		if(pares.length == cardArray.length/2){
			resultDisplay.textContent = 'Parabens, você encontrou todos os pares!';
		}
	}

	//virar cartas
	function flipCard(){
		var cardId = this.getAttribute('data-Id');
		cardsEscolhidos.push(cardArray[cardId].name);
		cardsEscolhidosId.push(cardId);
		this.setAttribute('src',cardArray[cardId].img);
		if(cardsEscolhidos.length == 2){
			setTimeout(conferir,500);
		}
	}

	createBoard();
})