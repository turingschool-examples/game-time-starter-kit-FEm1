let Game = require('./game.js');
let Snake = require('./snake.js');
// let newGame = new Game(context);
let Block = require('./block.js')
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let game = new Game(context);

game.initialize();

document.addEventListener('keydown', game.gameLoop);






 