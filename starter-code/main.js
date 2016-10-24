var cardOne = "queen";

var cardTwo = "king";

var cardThree = "king";

var cardFour = "queen";

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];



function createCards(){
	var board = document.getElementById('game-board');
	
	for(var i = 0; i < cards.length; i++){
		var newCard = board.appendChild(document.createElement('div')).className = 'card';
		var existingCard  = document.getElementsByClassName('card')[i]
		existingCard.setAttribute('data-card', cards[i]);
		existingCard.addEventListener('click', isTwoCards);
	}
}


function isMatch(cardsInPlay){
	var resettingCards = document.getElementsByClassName('card')
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log(cardsInPlay[0] === cardsInPlay[1]);
		console.log(cardsInPlay);

		alert("It's a match!")
		for(var i = 0; i < 4; i++){
			resettingCards[i].innerHTML = null;
		}
		
		
	} else {
		alert("Sorry Try Again.")
		for(var i = 0; i < 4; i++){
			resettingCards[i].innerHTML = null;
		}
		
	}

}



function isTwoCards(){
	
if(this.getAttribute('data-card') === 'king'){
	this.innerHTML = '<img src="my_king.png" alt="King of Spades" />';
} else {
	this.innerHTML = '<img src="my_queen.png" alt="Queen of Spades" />';
}

cardsInPlay.push(this.getAttribute('data-card'));
	


if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    
    cardsInPlay = [];
  }


}


createCards(); 


