// handle html interactions
// button clicks
// starting a new game
const Game = require('./Game.js');

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const game = new Game(context, canvas.width, canvas.height);

window.addEventListener('keydown', function (event) {
	game.keyPressed();
});

game.startGame()
