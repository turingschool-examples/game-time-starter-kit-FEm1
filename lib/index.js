var GamePiece = require('./GamePiece.js');

var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');

var firstBlock = new GamePiece(50, 50, 10, 10, 'rgb(200, 0, 0)');
var secondBlock = new GamePiece(155, 59, 10, 10, 'rgb(0, 200, 0)');

var isGameOver = false;

var blocks = [
  firstBlock, 
  secondBlock
];

function animate() {
  blocks.forEach(function (block, i) {
    block.draw(context);
    block.move();

    blocks.forEach(function (block2, j) {
      if (i !== j && block.isCollidingWith(block2)) {
        isGameOver = true;
      }
    })
  });
}

function gameLoop () {
  context.clearRect(0, 0, canvas.width, canvas.height); 

  if (isGameOver) {
    // do some end game stuff

  } else {
    animate();
  }

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

canvas.addEventListener('click', function (event) {
  var block = new GamePiece(event.layerX, event.layerY, 10, 10, 'rgb(0, 0, 200)', -1);
  blocks.push(block)
});
