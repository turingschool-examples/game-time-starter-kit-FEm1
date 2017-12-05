var Obstacle = require('./Obstacle.js');
var Bubble = require('./Bubble.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var carArrayRight = [];
var carArrayLeft = [];

const bubble = new Bubble(140, 465, 30, 30);
var x = 0;

for (var i = 0; i < 2; i++) {
  carArrayRight.push(new Obstacle(x, 430, 30, 30, 'images/scissors.svg'));
  x += 150;
}

x = canvas.width;
for (var i = 0; i < 2; i++) {
  carArrayLeft.push(new Obstacle(x, 395, 30, 30, 'images/blade.svg'));
  x += 150;
}

x = 0;
for (var i = 0; i < 2; i++) {
  carArrayRight.push(new Obstacle(x, 360, 30, 30, 'images/ax.svg'));
  x += 150;
}

x = canvas.width;
for (var i = 0; i < 2; i++) {
  carArrayLeft.push(new Obstacle(x, 325, 30, 30, 'images/star.svg'));
  x += 150;
}

x = 0;
for (var i = 0; i < 2; i++) {
  carArrayRight.push(new Obstacle(x, 290, 30, 30, 'images/needle.svg'));
  x += 150;
}

x = canvas.width;
for (var i = 0; i < 2; i++) {
  carArrayLeft.push(new Obstacle(x, 220, 70, 30, 'images/bubble-pile.svg'));
  x += 150;
}

x = 0;
for (var i = 0; i < 2; i++) {
  carArrayRight.push(new Obstacle(x, 185, 70, 30, 'images/wand.svg'));
  x += 150;
}

x = canvas.width;
for (var i = 0; i < 2; i++) {
  carArrayLeft.push(new Obstacle(x, 150, 70, 30, 'images/bubble-pile.svg'));
  x += 150;
}

x = 0;
for (var i = 0; i < 2; i++) {
  carArrayRight.push(new Obstacle(x, 115, 70, 30, 'images/wand.svg'));
  x += 150;
}

x = canvas.width;
for (var i = 0; i < 2; i++) {
  carArrayLeft.push(new Obstacle(x, 80, 30, 30, 'images/bubble-pile.svg'));
  x += 150;
}

window.addEventListener('keyup', function(event) {
  bubble.draw(context).move(event);
});

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  carArrayRight.forEach(function(car) {  
    car.draw(context).scrollRight();
    car.resetRight(canvas.width);

    bubble.collisionDetect(car);
    bubble.floatDetect(car);

    if(!bubble.alive) {
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

    if(!bubble.alive) {
      var thisContext = bubble;
      setTimeout(function() {
        thisContext.respawn();
      }, 500)
    }
  });

  bubble.draw(context).float();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);


