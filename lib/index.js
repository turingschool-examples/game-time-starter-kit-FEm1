let style = require('./style.css');
let Game = require('./game.js');
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let game = new Game(canvas, context);
let startButton = document.getElementById('play-game');
let resetButton = document.getElementById('reset-game');
let image = document.getElementById('source');
// let toadImage = document.getElementById('toadSource');

var sourceX = 53;
var sourceY = 480;
var sourceWidth = 54;
var sourceHeight = 52;

var destinationX = 0;
var destinationY = 575;
var destinationWidth = sourceWidth;
var destinationHeight = sourceHeight;

document.addEventListener('keydown', evalInput);
startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);

context.font = '24px "Press Start 2P"';
context.fillStyle = 'white';
context.fillText('Press Start Game to begin', 225, 400);

context.font = '56px "Press Start 2P"';
context.fillStyle = '#21DE00';

context.save();
context.shadowColor = '#FF00F7'
context.shadowOffsetX = -3;
context.shadowOffsetY = 0;
context.fillText('Toader', 325, 300);

context.shadowColor = '#FFFF00'
context.shadowOffsetX = 0;
context.shadowOffsetY = 3;
context.fillText('Toader', 325, 300);
context.restore();

destinationY = 325;

for (var i = 0; i < 19; i++) {
  context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destinationX + 54 * i, 525, destinationWidth, destinationHeight)
}

var BottomRight = {
  sourceX: 1440,
  sourceY: 800,
  sourceWidth: 23,
  sourceHeight: 23,
}

var BottomLeft = {
  sourceX: 1337,
  sourceY: 800,
  sourceWidth: 23,
  sourceHeight: 23,
}

var Left = {
  sourceX: 1440,
  sourceY: 747,
  sourceWidth: 23,
  sourceHeight: 26,
}

var Right = {
  sourceX: 1337,
  sourceY: 747,
  sourceWidth: 23,
  sourceHeight: 26,
}

var TopRight = {
  sourceX: 1333,
  sourceY: 693,
  sourceWidth: 27,
  sourceHeight: 27,
}

var TopLeft = {
  sourceX: 1387,
  sourceY: 693,
  sourceWidth: 26,
  sourceHeight: 27,
}

var TopCenter = {
  sourceX: 1440,
  sourceY: 693,
  sourceWidth: 27,
  sourceHeight: 24,
}

var Center = {
  sourceX: 1388,
  sourceY: 747,
  sourceWidth: 25,
  sourceHeight: 26,
}

destinationX = 120;
destinationY = 2;
destinationWidth = Center.sourceWidth;
destinationHeight = Center.sourceHeight;


drawBlock(BottomRight, 17, 55, 5);
drawBlock(BottomLeft, 101, 55, 5);
drawBlock(Left, 17, 29, 5);
drawBlock(Right, 101, 29, 5);
drawBlock(TopLeft, 17, 2, 5);
drawBlock(TopCenter, 43, 2, 5); //left house roof
drawBlock(TopCenter, 70, 2, 5); //right house roof
drawBlock(TopCenter, -10, 54, 5);
drawBlock(TopCenter, 178, 54, 5);
drawBlock(TopCenter, 151, 54, 5);
drawBlock(TopCenter, 124, 54, 5);
drawBlock(Center, -8, 28, 5);
drawBlock(Center, 182, 28, 4);
drawBlock(Center, 157, 28, 4);
drawBlock(Center, 132, 28, 5);
drawBlock(Center, 120, 28, 5);
drawBlock(Center, 122, 2, 5);
drawBlock(Center, 145, 2, 5);
drawBlock(Center, 170, 2, 5);
drawBlock(Center, -20, 2, 5);
drawBlock(Center, 5, 2, 5);
drawBlock(TopRight, 97, 2, 5);


function drawBlock(Block, startX, startY, counter) {
  for (i = 0; i < counter; i++) {
    context.drawImage(image, Block.sourceX, Block.sourceY, Block.sourceWidth,
      Block.sourceHeight, startX + (215 * i), startY, Block.sourceWidth, Block.sourceHeight)
  }
}

function startGame() {
  game.buildLevel(game.level.currentLevel);
  requestAnimationFrame(function gameLoop() {
    game.drawBackground();
    game.drawGamePieces();
    game.score.drawScore(context);
    game.collisionDetection();
    game.toad.drawToad(context);
    game.checkForWin();
    requestAnimationFrame(gameLoop);
  })
}

function resetGame() {
  game.level.currentLevel = 1;
  game.score.current = 0;
  startGame();
}

function evalInput(event) {
  event.preventDefault();
  if (event.keyCode === 37) {
    game.toad.moveToad('left', canvas);
  } else if (event.keyCode === 38) {
    game.toad.moveToad('up', canvas);
  } else if (event.keyCode === 39) {
    game.toad.moveToad('right', canvas);
  } else if (event.keyCode === 40) {
    game.toad.moveToad('down', canvas);
  } else if (event.keyCode === 72){
    game.winLevel();
  }
}
