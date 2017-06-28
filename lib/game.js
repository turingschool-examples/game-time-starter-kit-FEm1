var Player = require('./Player.js');
const canvas = document.getElementById('canvas-element');
const context = canvas.getContext('2d');

var player1 = new Player(1, (canvas.height/2 - 5), 10, 10, 'blue', 'none');
var player2 = new Player(canvas.width - 11, (canvas.height/2 - 5), 10, 10, 'red', 'none');
var playerArray = [
  player1,
  player2
]

function gameLoop() {

  for (let i = 0; i < playerArray.length; i++) {
    playerArray[i].draw(context)

    player1.moveRight()
    player1.moveLeft()
    player1.moveUp()
    player1.moveDown()
    player2.moveRight()
    player2.moveLeft()
    player2.moveUp()
    player2.moveDown()
    borderCheck(i);
  }

  requestAnimationFrame(gameLoop)
}

(function gameLoad() {
  document.addEventListener('keydown', player1.handleKeyP1.bind(player1));
  document.addEventListener('keydown', player2.handleKeyP2.bind(player2));
  startRound();
})()

function borderCheck() {
  //look for collision on border
  if (player1.x === canvas.width - 10 ||
      player1.x === 0 ||
      player1.y === canvas.height - 10 ||
      player1.y === 0 || player2.x === canvas.width - 10 ||
      player2.x === 0 ||
      player2.y === canvas.height - 10 ||
      player2.y === 0) {
    roundEnd();
  }
}

function trailCheck() {
  //look for collision w/ trail
}

function roundEnd() {
  //stop movement of both players
  player1.isStopped = true;
  player2.isStopped = true;
  player1.stopMovement();
  player2.stopMovement();
}

function displayRoundWinner() {

}

function newRound() {
  //put players back in initial position
}

function startCountdown() {
  //start countdown
}

function startRound() {
  player1.isStopped = false;
  player2.isStopped = false;
  player1.direction = 'right';
  player2.direction = 'left'
}

requestAnimationFrame(gameLoop)
