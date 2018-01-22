var Block = require('./Block.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var block1 = new Block(50, 50, 10, 10);
var block2 = new Block(150, 150, 10, 10);

function gameLoop () {

  // is block x less than the border
  if (block1.x < canvas.width - 10) {

    // erase previous animation frame
    context.clearRect(0, 0, canvas.width, canvas.height); 

    // move blocks
    block1.x++;
    block2.y++;

    block1.draw(context).move();
    block2.draw(context).move();
  }

  // draw next animation frame
  requestAnimationFrame(gameLoop);  
}

// draw first animation frame
requestAnimationFrame(gameLoop);
