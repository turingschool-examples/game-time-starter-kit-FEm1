const Game = require('./Game');

// get canvas and context
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

const game = new Game(ctx);

// set up game loop
function gameLoop () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  game.animate();

  window.requestAnimationFrame(gameLoop)
}

window.requestAnimationFrame(gameLoop)

// set up event listeners
document.addEventListener('keydown', function(e) {
  game.handleKeyPress(e);
});