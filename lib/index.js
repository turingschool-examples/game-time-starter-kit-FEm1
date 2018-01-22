var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

context.fillStyle = "rgba(0, 255, 0, 1)";

var x = 50;
var y = 50;

context.fillRect(x, y, 10, 10);

function gameLoop () {

  // is block x less than the border
  if (x < canvas.width - 10) {

    // erase previous animation frame
    context.clearRect(0, 0, canvas.width, canvas.height); 

    // move block
    x = x + 1;
    context.fillRect(x, y, 10, 10);
  }

  // draw next animation frame
  requestAnimationFrame(gameLoop);  
}

// draw first animation frame
requestAnimationFrame(gameLoop);
