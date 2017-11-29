var GamePiece = require('./GamePiece.js');
var Obstacle = require('./Obstacle.js');
var Frogger = require('./Frogger.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var obstacleArray = [];
var carArray = [];

var frogger = new Frogger(140, 465, 30, 30);
var y = 200;
var x = 0

for(var i = 0; i < 2; i++){
  carArray.push(new Obstacle(x, 430, 30, 30));
  x += 150;
}

window.addEventListener('keyup', function(event) {
  frogger.draw(context).move(event);
})

function gameLoop() {
  context.clearRect(0,0,canvas.width, canvas.height);
  frogger.draw(context);
  carArray.forEach(function(car){
    car.draw(context).scroll();
    car.reset(canvas.width);
  });
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);


