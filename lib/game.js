require('./game.css');
var Block = require('./Block.js');
var DiagonalBlock = require('./DiagonalBlock.js');

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

var block1 = new Block(50, 50, 10, 10, 'blue');
var block2 = new Block(150, 150, 10, 10, 'green');
var block3 = new DiagonalBlock(10, 120, 10, 10, 'red');

var blocks = [
  block1,
  block2,
  block3
];

var direction = {
  x: 1,
  y: 1
}

function gameLoop () {

  context.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < blocks.length; i++) {

    blocks[i].draw(context);

    if (blocks[i].x <= canvas.width - 10) {
      blocks[i].move( direction );
    }
  }


  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

window.addEventListener('click', function ( event ) {
  console.log(event);
  // change direction
  direction = {
    x: -direction.x,
    y: -direction.y
  }
});
