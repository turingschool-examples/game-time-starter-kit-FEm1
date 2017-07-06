const Player = require('./Player.js');
const TrailElement = require('./TrailElement.js')
const soundFx = require('./soundFx.js')
const GameArea = require('./GameArea.js')

const canvas = document.getElementById('canvas-element');
const context = canvas.getContext('2d');
const canvasOverlay = document.getElementById('canvas-overlay')
const contextOverlay = canvasOverlay.getContext('2d')

var player1 = new Player(0, (canvas.height / 2 - 5), 10, 10, '#FFDD33', 'none');
var player2 = new Player(canvas.width - 10, (canvas.height / 2 - 5), 10, 10, 'red', 'none');
let gridLines
const $canvasOverlay = $('#canvas-overlay')


var isGameOver = false
var isGamePaused = false
var gameStart = false
var trailArray = []
var countdownFinish = false
var newGameState = true


var playerArray = [
  player1,
  player2
]

function gameLoop() {
  var fps = 10;

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
        player1.move();
        player2.move();
        trailCheck();
        borderCheck();
        requestAnimationFrame(gameLoop)
      }, 1000 / fps)
    }
  }
}

(function gameLoad() {
  resetGrid()
  canvas.focus();
  displayNewGameText()
  document.addEventListener('keydown', player1.handleKeyP1.bind(player1));
  document.addEventListener('keydown', player2.handleKeyP2.bind(player2));
  resetPlayer1();
  resetPlayer2();
})()

gameLoop()


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
  countdownFinish = false;
  player1.isStopped = true;
  player2.isStopped = true;
  player1.stopMovement();
  player2.stopMovement();
  isGamePaused = true
  resetGrid();
  displayRoundWinner();
}

function displayRoundWinner() {
  if (player1.collided === true && player2.collided === true) {
    roundWinnerText('Nobody')
  } else if (player1.collided === true) {
    roundWinnerText('Player 2')
  } else if (player2.collided === true) {
    roundWinnerText('Player 1')
  }
  checkGameOver();
  if (isGameOver === false) {
    updateLifeCounter();
    resetPlayer1();
    resetPlayer2();
    trailArray = []
    countdown();
  }
}

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 80 && countdownFinish === true) {
    pauseGame()
  }
})

function updateLifeCounter() {

  //if players collide with each other and both players are not at 0
  if (player1.collided === true && player2.collided === true && player1.lives !== 0 && player2.lives !== 0) {
    player1.removeLife()
    player2.removeLife()
    console.log('player1: ', player1.lives, 'player2 ', player2.lives)
  } else if (player1.lives === 0 || player2.lives === 0) {
    checkGameOver()
    console.log('player1: ', player1.lives, 'player2 ', player2.lives)
  } else if (player1.collided === true && player1.lives !== 0) {
    player1.removeLife();
    console.log('player1: ', player1.lives, 'player2 ', player2.lives)
  } else if (player2.collided === true && player2.lives !== 0) {
    player2.removeLife();
    console.log('player1: ', player1.lives, 'player2 ', player2.lives)
  }
}

//if a player reaches 0 and then loses the next round, the next alert that comes up is both players at 3

function resetLives() {
  player1.lives = 3;
  player2.lives = 3;
}

function displayLives() {
  return `Player 1: ${player1.lives}\nPlayer 2: ${player2.lives}`
}

function resetPlayer1() {
  player1.isStopped = false;
  player1.direction = 'right';
  player1.collided = false;
  player1.x = 0
  player1.y = (canvas.height / 2 - 5)
}

function resetPlayer2() {
  player2.isStopped = false;
  player2.direction = 'left';
  player2.collided = false;
  player2.x = canvas.width - 10
  player2.y = (canvas.height / 2 - 5)
}

function countdown() {
  // console.log('countdown start')
  newGameState = false
  isGamePaused = true
  showCanvasOverlay()
  let i = 3
  contextOverlay.strokeStyle = 'cyan';
  contextOverlay.font = '100px Tr2n';

  //counter keeps track of what round is being played
  var int = setInterval(function() {
    contextOverlay.strokeText(`${i}`, canvasOverlay.width/2 - 20, canvasOverlay.height/2)
    i--
    setInterval(function() {
      clearOverlay()
    }, 1290)
    if (i < 0) {
      contextOverlay.strokeText(`GO!`, canvasOverlay.width/2 - 40, canvasOverlay.height/2 - 40)
      isGamePaused = false
      countdownFinish = true;
      hideCanvasOverlay()
      gameLoop()
      clearInterval(int)
    }
  }, 1300);
}

function pauseGame() {
  isGamePaused = !isGamePaused

  if (isGamePaused === true) {
    //show paused text
    //pause sound
    console.log('paused')
  } else {
    console.log("unpaused");
    //hide paused text
    //play sound
    gameLoop()
  }
}

function resetGrid () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  gridLines = new GameArea(510, 500, canvas, context, 17)
  gridLines.drawGrid();
}

function checkGameOver() {

  if (player1.lives === 0) {
    gameOverText('Player 2')
    isGameOver = true
  } else if (player2.lives === 0) {
    gameOverText('Player 1')
    isGameOver = true
  } else if (player1.lives === 0 && player2.lives === 0) {
    gameOverText('Nobody')
    isGameOver = true
  }
  // setTimeout(function() {
  //   resetGame()
  // }, 5000)
}

function resetGame() {
  isGameOver = true
  gameStart = false
  resetPlayer1();
  resetPlayer2();
  resetLives();
  clearOverlay()
  showCanvasOverlay()
  displayNewGameText()
  // newGameState = true
}

function hideCanvasOverlay() {
  $canvasOverlay.hide()
  clearOverlay()
}

function showCanvasOverlay() {
  $canvasOverlay.show()
}


document.addEventListener('keydown', function(e) {
  if (e.keyCode === 13 && newGameState) {
    e.preventDefault()
    clearOverlay()
    countdown();
    gameStart = true;
  }
})

function clearOverlay() {
  contextOverlay.clearRect(0, 0, canvasOverlay.width, canvasOverlay.height)
}

function displayNewGameText() {
  contextOverlay.strokeStyle = 'cyan';
  contextOverlay.font = '40px Tr2n';
  contextOverlay.strokeText('Hit Enter', canvasOverlay.width/2 - 110, canvasOverlay.height/2 - 72)
  contextOverlay.strokeText('To Enter The Grid', 30, canvasOverlay.height/2 + 30)
}

function countdownText() {
  contextOverlay.strokeStyle = 'cyan';
  contextOverlay.font = '80px Tr2n';
  contextOverlay.strokeText('3', canvasOverlay.width/2 - 110, canvasOverlay.height/2 - 72)
}

function gameOverText(winner) {
  clearOverlay()
  contextOverlay.strokeStyle = 'cyan';
  contextOverlay.font = '50px Tr2n';
  contextOverlay.strokeText('GAME OVER', canvasOverlay.width/2 - 200, canvasOverlay.height/2 - 72)
  contextOverlay.strokeText(`${winner} Wins!`, canvasOverlay.width/2 - 200, canvasOverlay.height/2 + 30)
}

function roundWinnerText(winner) {
  showCanvasOverlay()
  contextOverlay.strokeStyle = 'cyan';
  contextOverlay.font = '40px Tr2n';
  contextOverlay.strokeText(winner, canvasOverlay.width/2 - 130, canvasOverlay.height/2 - 72)
  contextOverlay.strokeText(`Wins Round`, canvasOverlay.width/2 - 150, canvasOverlay.height/2 + 30)
}
