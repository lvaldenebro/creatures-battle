'use strict';
//variables
const button = document.querySelector('.js-play-button');
const userSelect = document.querySelector('.js-user-select');
const winnerText = document.querySelector('.js-winner');
const userContainer = document.querySelector('.js-user-container');
const machineContainer = document.querySelector('.js-machine-container');
const resetButton = document.querySelector('.js-reset-button');

let userPlayPoints;
let machinePlayPoints = computerPlayPoints();
let userCount = 0;
let machineCount = 0;
let clickCount = 0;

//General code, not related with the event
winnerText.innerHTML = 'Comienza la batalla';

//functions

function handleReset() {
	userCount = 0;
	machineCount = 0;
	printGlobalResult();
	winnerText.innerHTML = '';
	alternateGame();
}

function alternateGame() {
	resetButton.classList.toggle('hidden');
	button.classList.toggle('hidden');
}

function compareFinalWinner() {
	if (userCount > machineCount) {
		winnerText.innerHTML = '¡Ha ganado el Ejército del Bien!';
		alternateGame();
	} else {
		winnerText.innerHTML = '¡Ha ganado el Ejército del Mal!';
		alternateGame();
	}
}

function endGame() {
	if (clickCount === 10) {
		compareFinalWinner();
	};
}

function printGlobalResult() {
	userContainer.innerHTML = userCount;
	machineContainer.innerHTML = machineCount;
}

function compareRoundWinner() {
	if (userPlayPoints === machinePlayPoints) {
		winnerText.innerHTML = 'Empate.';
	}
	else if (userPlayPoints > machinePlayPoints){
		userCount += 1;
		printGlobalResult();
		winnerText.innerHTML = 'Ha ganado el Ejército del Bien! Enhorabuena.';
	}
	else {
		machineCount += 1;
		printGlobalResult();
		winnerText.innerHTML = 'Ha ganado el Ejército del Mal! Vuelve a intentarlo.';
	}
}

function computerPlayPoints() {
	const computerPlayPoints = getRandomNumber(5);

	let result = 0;
	if (computerPlayPoints === 1 || computerPlayPoints === 2 || computerPlayPoints === 3) {
		result = 2;
	} else if (computerPlayPoints === 4) {
		result = 3;
	} else {
		result = 5;
	}
	return result;
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
  	if (userSelect.value !== 'default') {
		clickCount += 1;                                    
		userPlayPoints = userPlay(userSelect.value);
		// machinePlayPoints = getRandomNumber(6);
		compareRoundWinner();
		endGame();
	}

} 
//events
button.addEventListener('click', handleClick);
resetButton.addEventListener('click', handleReset);