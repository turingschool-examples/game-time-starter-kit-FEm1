var Frogger = require('./Frogger.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var frogger = new Frogger(125, 425, 50, 50)

frogger.draw(context);

window.addEventListener('keyup', function() {
  console.log(event.key);
  if(event.key === 'ArrowUp') {
    context.clearRect(0, 0, 50, 50);
    frogger.draw(context).moveUp();
  }
  if(event.key === 'ArrowDown'){
    context.clearRect(0, 0, 50, 50);
    frogger.draw(context).moveDown();
  }
})

function gameLoop() {
  context.clearRect(0,0,canvas.width, canvas.height);
  frogger.draw(context);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

// window.addEventListener("keydown", disableScroll);

// function disableScroll(e) {
//    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
//         e.preventDefault();
//     }
// }

