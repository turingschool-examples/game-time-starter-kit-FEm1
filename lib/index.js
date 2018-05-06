let Game = require('./game.js');
let Snake = require('./snake.js');
// let newGame = new Game(context);
let Block = require('./block.js')
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let game = new Game(context);
let score = document.getElementById('score');


game.initialize();

document.addEventListener('keydown', keyHandler);

// document.addEventListener('keydown', snake.updateDirection)

function keyHandler(e){
  e.preventDefault();  
  switch(e.keyCode){
    case 38:
      if (game.snake.direction !== 'down') {
        game.snake.direction = 'up';
      }
      break;
    case 40:
      if (game.snake.direction !== 'up') {
        game.snake.direction = 'down';
      }
      break;
    case 39:
      if (game.snake.direction !== 'left') {
        game.snake.direction = 'right';
      }
      break;
    case 37:
      if (game.snake.direction !== 'right') {
        game.snake.direction = 'left';
      }
      break;
    case 32:
      if (!game.gameOver){
        game.gameOn = !game.gameOn;
        game.gameLoop();
      } else {
        context.clearRect(0, 0, 500, 500)
        document.getElementById('score').innerText = 0;
        game = new Game(context);
        game.initialize()
      } 
      break;
  }
}


 