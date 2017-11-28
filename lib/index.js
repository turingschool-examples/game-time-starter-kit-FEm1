var GamePiece = require('./GamePiece.js');
var Obstacle = require('./Obstacle.js');
var Frogger = require('./Frogger.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var carArray1 = [];
var carArray2 = [];
var carArray3 = [];
var carArray4 = [];
var obstacleArray = [carArray1, carArray2, carArray3, carArray4];

var frogger = new Frogger(140, 475, 30, 30);
var y = 200;
var x = Math.floor(Math.random() * 40);

for(var i = 0; i < 3; i++){
  carArray1.push(new Obstacle(x, 440, 30, 30));
  x += 75;
}

window.addEventListener('keyup', function(event) {
  frogger.draw(context).move(event)
})

function gameLoop() {
  context.clearRect(0,0,canvas.width, canvas.height);
  frogger.draw(context);
  carArray1.forEach(function(car){
    car.draw(context).scroll();
    car.reset(canvas.width);
  });
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);


