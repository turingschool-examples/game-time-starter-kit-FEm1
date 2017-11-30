var Obstacle = require('./Obstacle.js');
var Frogger = require('./Frogger.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var obstacleArray = [];
var carArray = [];

var frogger = new Frogger(140, 465, 30, 30);
var x = 0;

for (var i = 0; i < 2; i++) {
  carArray.push(new Obstacle(x, 430, 30, 30));
  x += 150;
}


window.addEventListener('keyup', function(event) {
  frogger.draw(context).move(event);
});

function respawn(frogger) {
  frogger.y = 465;
  frogger.alive = true;
}

function collisionDetect(obstacle) {
  if (frogger.x < obstacle.x + obstacle.width &&
      frogger.x + frogger.width > obstacle.x && 
      frogger.y < obstacle.y + obstacle.height &&
      frogger.height + frogger.y > obstacle.y) {
        console.log("collision!!!")
        window.setInterval(respawn(frogger), 5000);
    }
}

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frogger.draw(context);
  carArray.forEach(function(car) {   
    collisionDetect(car);
    car.draw(context).scroll();
    car.reset(canvas.width);
  });
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);


