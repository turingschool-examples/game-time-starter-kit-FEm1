var Obstacle = require('./Obstacle.js');
var Bubble = require('./Bubble.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var carArrayRight = [];
var carArrayLeft = [];

const bubble = new Bubble(140, 465, 30, 30);
var x = 0;

function makeObstacleArray(x = 0, y, w, h, img) {
  let array = [];

  for (var i = 0; i < 2; i++) {
    array.push(new Obstacle(x, y, w, h, img));
    x += 150;
  }

  return array;
}

carArrayRight.push( 
  ...makeObstacleArray(0, 430, 30, 30, 'images/scissors.svg'), 
  ...makeObstacleArray(0, 360, 30, 30, 'images/ax.svg'),
  ...makeObstacleArray(0, 290, 30, 30, 'images/needle.svg'),
  ...makeObstacleArray(0, 185, 70, 30, 'images/wand.svg'),
  ...makeObstacleArray(0, 115, 70, 30, 'images/wand.svg'),
);

carArrayLeft.push( ...makeObstacleArray(canvas.width, 395, 30, 30, 'images/blade.svg') );
carArrayLeft.push( ...makeObstacleArray(canvas.width, 325, 30, 30, 'images/star.svg') );
carArrayLeft.push( ...makeObstacleArray(canvas.width, 220, 30, 30, 'images/bubble-pile.svg') );
carArrayLeft.push( ...makeObstacleArray(canvas.width, 150, 30, 30, 'images/bubble-pile.svg') );
carArrayLeft.push( ...makeObstacleArray(canvas.width, 80, 30, 30, 'images/bubble-pile.svg') );

window.addEventListener('keyup', function(event) {
  bubble.draw(context).move(event);
});

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  carArrayRight.forEach(function(car) {  
    car.draw(context).scrollRight();
    car.resetRight(canvas.width);

    bubble.collisionDetect(car);

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
  bubble.setScore(context);
  bubble.win();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);


