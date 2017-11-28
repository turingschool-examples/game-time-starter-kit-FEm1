var GamePiece = require('./GamePiece.js');
var Obstacle = require('./Obstacle.js');
var Frogger = require('./Frogger.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var obstacleArray = [];

var frogger = new Frogger(140, 475, 20, 20);
var x = 0;
var y = 200;

for(var i = 0; i < 3; i++){
  obstacleArray.push(new Obstacle(x, 400, 20, 20));
  x += 75;
}

window.addEventListener('keyup', function(event) {
  frogger.draw(context).move(event)
})

function gameLoop() {
  context.clearRect(0,0,canvas.width, canvas.height);
  frogger.draw(context);
  obstacleArray.forEach(function(obstacle){
    obstacle.draw(context).scroll();
    obstacle.reset(canvas.width);
  });
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);


