var GamePiece = require('./GamePiece.js');
var Obstacle = require('./Obstacle.js');
var Frogger = require('./Frogger.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var obstacleArray = [];

var frogger = new Frogger(140, 475, 20, 20);
var x = 0;
var y = 200;

for(var i = 0; i < 5; i++){
obstacleArray.push(new Obstacle(x, 200, 20, 20));
x += 50;
}

console.log(obstacleArray);

window.addEventListener('keyup', function() {
  console.log(event.key);
  if(event.key === 'ArrowUp') {
    frogger.draw(context).moveUp();
  }
  if(event.key === 'ArrowDown'){
    frogger.draw(context).moveDown();
  } 
  if(event.key === 'ArrowLeft') {
    frogger.draw(context).moveLeft();
  }
  if(event.key === 'ArrowRight'){
    frogger.draw(context).moveRight();
  }
})

function gameLoop() {
  context.clearRect(0,0,canvas.width, canvas.height);
  frogger.draw(context);
  obstacleArray.forEach(function(obstacle){
    obstacle.draw(context).scroll();
  });
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

window.addEventListener("keydown", disableScroll);

function disableScroll(e) {
   if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}

