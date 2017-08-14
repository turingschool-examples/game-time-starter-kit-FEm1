const Block = require('./Block.js');
const style = require('./style.css');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

context.fillStyle = "rgba(0, 255, 0, 1)";

var blockCount = 45;
var blocks = []

for (var i = 0; i < blockCount; i++) {
  blocks.push( new Block(20 * i, 20, 10, 10) )
}

function gameLoop () {

  // clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < blocks.length; i++) {
    // blocks[i].y += i + 1,
    blocks[i].move(i);
    blocks[i].draw(context);
  }

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

canvas.addEventListener('click', function (event) {
  blocks.push( new Block( event.clientX, event.clientY, 10, 10 ) );
});
