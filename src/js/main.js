'use strict';
//variables
const button = document.querySelector('.js-play-button');
const userSelect = document.querySelector('.js-user-select');
const winnerText = document.querySelector('.js-winner');

let userPlayPoints;
let machinePlayPoints;

//General code, not related with the event
winnerText.innerHTML = "Comienza la batalla";

//functions

function compareWinner() {
	if (userPlayPoints === machinePlayPoints) {
		winnerText.innerHTML = "Empate.";
	}
	else if (userPlayPoints > machinePlayPoints){
		winnerText.innerHTML = "Ha ganado el Ejército del Bien! Enhorabuena.";
	}
	else {
		winnerText.innerHTML = "Ha ganado el Ejército del Mal! Vuelve a intentarlo.";
	}
}

function getRandomNumber(max) {
	return Math.ceil(Math.random() * max);
}

function userPlay(input) {
	switch (input) {
		case 'hairy':
			return 1;
		case 'southern':
			return 2;
		case 'dwarf':
			return 3;
		case 'numenorean':
			return 4;
		case 'elf':
			return 5;
	}
}

function handleClick(event) {
  event.preventDefault();
	userPlayPoints = userPlay(userSelect.value);
	machinePlayPoints = getRandomNumber(6);
	compareWinner();
	console.log(userPlayPoints);
	console.log(machinePlayPoints);
} 
//events
button.addEventListener('click', handleClick);