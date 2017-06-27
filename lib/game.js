var Player = require('./Player.js');
const canvas = document.getElementById('canvas-element');
const context = canvas.getContext('2d');
var gameSize = {x: canvas.width, y: canvas.height};
var player1 = new Player(50, 50, 10, 10, 'blue');
var player2 = new Player(300, 300, 10, 10, 'red');
var playerArray = [
  player1,
  player2
]

var direction = {
  x: 1,
  y: 0
}

function gameLoop() {

  for (var i = 0; i < playerArray.length; i++) {
    playerArray[i].draw(context)
    playerArray[i].moveRight(direction)
    playerArray[i].moveLeft(direction)
    playerArray[i].moveUp(direction)
    playerArray[i].moveDown(direction)
  }

  requestAnimationFrame(gameLoop)
}

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 37) {
    player1.movingUp = false;
    player1.movingDown = false;
    player1.movingRight = false;
    player1.movingLeft = true;
    direction = {
      x: 1,
      y: 0
    }
  } else if (e.keyCode === 39) {
    player1.movingUp = false;
    player1.movingDown = false;
    player1.movingRight = true;
    player1.movingLeft = false;
    direction = {
      x: 1,
      y: 0
    }
  } else if (e.keyCode === 38) {
    player1.movingUp = true;
    player1.movingDown = false;
    player1.movingRight = false;
    player1.movingLeft = false;

    direction = {
      x: 0,
      y: 1
    }
  } else if (e.keyCode === 40) {
    player1.movingUp = false;
    player1.movingDown = true;
    player1.movingRight = false;
    player1.movingLeft = false;

    direction = {
      x: 0,
      y: 1
    }
  }
})


requestAnimationFrame(gameLoop)
