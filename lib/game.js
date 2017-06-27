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
    borderCheck(i);
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

function borderCheck(i) {
  //look for collision on border
  if (playerArray[i].x === canvas.width - 10 ||
      playerArray[i].x === 0 ||
      playerArray[i].y === canvas.height - 10 ||
      playerArray[i].y === 0) {
        roundEnd();
  }
}

function trailCheck() {
  //look for collision w/ trail
}

function roundEnd() {
  //stop movement of both players
  //set direction.x and direction.y to 0
  direction = {
    x: 0,
    y: 0
  }
}

function displayRoundWinner() {

}

function newRound() {
  //put players back in initial position
}

function startCountdown() {
  //start countdown
}

// if (blocks[i].x <= canvas.width - 10) {
  //     blocks[i].moveX( direction )}
  //     if (blocks[2].y <= canvas.height - 10){
  //       blocks[2].moveY( direction)
  //     }if (blocks[i].x === canvas.width - 10) {
  //     blocks[i].changeXDirection();
  //   } if (blocks[i].x === 0) {
  //     blocks[i].changeXDirection();
  //   } if (blocks[2].y === canvas.height - 10) {
  //     blocks[2].changeYDirection();
  //   } if (blocks[2].y === 0) {
  //     blocks[2].changeYDirection();
  // }


requestAnimationFrame(gameLoop)
