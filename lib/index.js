var Block = require('./Block.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var block1 = new Block(50, 50, 10, 10);
var block2 = new Block(150, 150, 10, 10);

var blocks = [ block1, block2 ];

var oldTime = Date.now();
var fps = 160;
var second = 1000;

function gameLoop () {
  var duration = Date.now() - oldTime;

  if (duration > second / fps) {
    oldTime = Date.now();

    blocks.forEach( function (block) {

      // is block x less than the border
      if (block.x < canvas.width - 10) {
        block.erase(context).move().draw(context);
      }  

    } )  
  }

  // draw next animation frame
  requestAnimationFrame(gameLoop);  
}

// draw first animation frame
requestAnimationFrame(gameLoop);

canvas.addEventListener('click', function (event) {
  var block = new Block(event.offsetX, event.offsetY, 10, 10);
  
  blocks.push(block);
});