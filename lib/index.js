var Obstacle = require('./Obstacle.js');
var Bubbble = require('./Bubble.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var carArrayRight = [];
var carArrayLeft = [];

const bubble = new Bubble(140, 465, 30, 30);
var x = 0;
bubbleImg = new Image();
bubbleImg.src = 'images/frog.png';

for (var i = 0; i < 2; i++) {
  carArrayRight.push(new Obstacle(x, 430, 30, 30));
  x += 150;
}

x = canvas.width;
for (var i = 0; i < 2; i++) {
  carArrayLeft.push(new Obstacle(x, 230, 30, 30));
  x += 150;
}

x = 0;
for (var i = 0; i < 2; i++) {
  carArrayRight.push(new Obstacle(x, 30, 30, 30));
  x += 150;
}

window.addEventListener('keyup', function(event) {
  bubble.draw(context, bubbleImg).move(event);
});

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  carArrayRight.forEach(function(car) {  
    car.draw(context).scrollRight();
    car.resetRight(canvas.width);
    bubble.collisionDetect(car);
    if(!bubble.alive){
      var thisContext = bubble;
      setTimeout(function() {
        thisContext.respawn();
      }, 500)
    }
  });
  carArrayLeft.forEach(function(car) {  
    car.draw(context).scrollLeft();
    car.resetLeft(canvas);
    bubble.collisionDetect(car);
    if(!bubble.alive){
      var thisContext = bubble;
      setTimeout(function() {
        thisContext.respawn();
      }, 500)
    }
  });
  bubble.draw(context,bubbleImg)
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);


