let Game = require('./game.js');
let Snake = require('./snake.js');
// let newGame = new Game(context);
let Block = require('./block.js')
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let game = new Game(context);

game.initialize();

document.addEventListener('keydown', keyHandler);

// document.addEventListener('keydown', snake.updateDirection)

function keyHandler(e){
  console.log(e.keyCode)
  switch(e.keyCode){
    case 38:
    game.snake.direction = 'u';
    break;
    case 40:
    game.snake.direction = 'd';
    break;
    case 39:
    game.snake.direction = 'r';
    break;
    case 37:
    game.snake.direction = 'l'
    break;
    case 32:
    game.gameLoop()
  }
}


 