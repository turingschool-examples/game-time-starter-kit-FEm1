var Player = require('./Player.js');
var TrailElement = require('./TrailElement.js')

const canvas = document.getElementById('canvas-element');
const context = canvas.getContext('2d');
var countdownDisplay = document.getElementById('countdown-display')

var player1 = new Player(0, (canvas.height/2 - 5), 10, 10, '#FFDD33', 'none');
var player2 = new Player(canvas.width - 10, (canvas.height/2 - 5), 10, 10, 'red', 'none');

var gridAmount = canvas.height / 30


var isGameOver = false
var isGamePaused = false
var gameStart = true
var fps

var trailArray = []


var playerArray = [
  player1,
  player2
]

function drawGrid () {

  for (let i = 0; i <= canvas.height; i += gridAmount) {
    context.moveTo(0, i)
    context.lineTo(canvas.width, i)
  }
  for (let i = 0; i <= canvas.width; i += gridAmount) {
    context.moveTo(i, 0)
    context.lineTo(i, canvas.height)
  }

  context.strokeStyle = 'cyan';
  context.stroke();
}

drawGrid();




function gameLoop() {

  fps = 10


  for (let i = 0; i < playerArray.length; i++) {
    playerArray[i].draw(context)
  }

  if (gameStart === true) {
    if (isGameOver === false && isGamePaused === false) {
      setTimeout(function() {
        var trailelementP1 = new TrailElement(player1.x, player1.y)

        var trailelementP2 = new TrailElement(player2.x, player2.y)

        trailArray.push(trailelementP1)
        trailArray.push(trailelementP2)


        player1.moveRight()
        player1.moveLeft()
        player1.moveUp()
        player1.moveDown()
        player2.moveRight()
        player2.moveLeft()
        player2.moveUp()
        player2.moveDown()
        trailCheck();
        borderCheck();

        requestAnimationFrame(gameLoop)
      }, 1000 / fps)
    }
  }
}


(function gameLoad() {
  canvas.focus()
  document.addEventListener('keydown', player1.handleKeyP1.bind(player1));
  document.addEventListener('keydown', player2.handleKeyP2.bind(player2));
  resetPlayer1();
  resetPlayer2();
  gameStart = true
})()

requestAnimationFrame(gameLoop);


function borderCheck() {
  //look for collision on border
  if (player1.x > canvas.width - 10 ||
    player1.x < 0 ||
    player1.y > canvas.height - 10 ||
    player1.y < 0) {
    player1.collided = true;
    roundEnd();
  } if (
    (player2.x > canvas.width - 10) ||
    player2.x < 0 ||
    player2.y > canvas.height - 10 ||
    player2.y < 0) {
    player2.collided = true;
    roundEnd();
  }
}

function trailCheck() {
  var {x: x1, y: y1} = player1
  var {x: x2, y: y2} = player2
  var collision = []

//if player 2 runs into player 1 trail
  trailArray.forEach(function(trailObj) {

    if (x2 + 5 <= trailObj.x || x2 >= trailObj.x + 5
      || y2 + 5 <= trailObj.y || y2 >= trailObj.y + 5) {
      return true
    } else {
      player2.collided = true;
      collision.push(trailObj)
    }
  })

//if player 1 runs into player 1 trail
  trailArray.forEach(function(trailObj) {

    if (x1 + 5 <= trailObj.x || x1 >= trailObj.x + 5
      || y1 + 5 <= trailObj.y || y1 >= trailObj.y + 5) {
      return true
    } else {
      player1.collided = true;
      collision.push(trailObj)
    }
  })

  if (collision.length > 0) {
    roundEnd();
  }
}

function roundEnd() {
  //stop movement of both players
  // player1.isStopped = true;
  // player2.isStopped = true;
  // player1.stopMovement();
  // player2.stopMovement();
  displayRoundWinner();
  isGamePaused = true
}

function displayRoundWinner() {
  if (player1.collided === true && player2.collided === true) {
    alert('You idiots ran into each other')
  } else if (player1.collided === true) {
    alert('Player 2 Wins this Round')
  } else if (player2.collided === true) {
    alert('Player 1 Wins this Round')
  }
  clearBoard();
  resetPlayer1();
  resetPlayer2();
  trailArray = []
  countdown();
}

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    pauseGame()
    // clearBoard();
    // resetPlayer1();
    // resetPlayer2();
    // trailArray = []
    // console.log('p1', player1.x, player1.y);
    // console.log(trailArray);
  }
})


function resetPlayer1() {
  player1.isStopped = false;
  player1.direction = 'right';
  player1.collided = false;
  player1.x = 0
  player1.y = (canvas.height/2 - 5)
}

function resetPlayer2() {
  player2.isStopped = false;
  player2.direction = 'left';
  player2.collided = false;
  player2.x = canvas.width - 10
  player2.y = (canvas.height/2 - 5)
}

function clearBoard() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
}


function countdown() {
  // console.log('countdown start')
  isGamePaused = true
  let i = 3
  //counter keeps track of what round is being played
  var int = setInterval(function() {
    countdownDisplay.textContent = i
    i--
    if (i < 0) {
      countdownDisplay.textContent = 'GO!'
      isGamePaused = false
      clearInterval(int)
      requestAnimationFrame(gameLoop)
    }
  }, 1000);
}

function pauseGame() {
  isGamePaused = !isGamePaused

  if (isGamePaused === true) {
    //show paused text
    //pause sound
    console.log('paused')
  } else {
    //hide paused text
    //play sound
    requestAnimationFrame(gameLoop)
  }
}
