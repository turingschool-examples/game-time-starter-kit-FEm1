let style = require('./style.css');
let Game = require('./game.js');
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let game = new Game(canvas, context);

document.addEventListener('keydown', evalInput);
game.buildLevel(game.level.currentLevel);

requestAnimationFrame(function gameLoop() {
  game.drawBackground();
  game.drawGamePieces();
  game.collisionDetection();
  game.toad.drawToad(context);
  game.checkForWin();
  requestAnimationFrame(gameLoop);
})

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
