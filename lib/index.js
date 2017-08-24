let style = require('./style.css');
let Game = require('./game.js');
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let game = new Game(canvas, context);

document.addEventListener('keydown', evalInput);
game.buildLevel();

requestAnimationFrame(function gameLoop() {
  game.drawBackground();
  game.drawGamePieces();
  collisionDetection();
  game.toad.drawToad(context);
  requestAnimationFrame(gameLoop);
})

// functions

function collisionDetection() {
  game.autos.forEach(function(car) {
    if ((game.toad.yCoordinate + 2 == car.yCoordinate) &&
    ((game.toad.xCoordinate < car.xCoordinate + car.width && game.toad.xCoordinate > car.xCoordinate) ||
    (game.toad.xCoordinate + game.toad.width > car.xCoordinate && game.toad.xCoordinate + game.toad.width < car.xCoordinate + car.width))) {
      game.toad.status = 'dead';
    }
  });
  let onRiverPlatform = game.river.filter(function(platform) {
    // console.log(platform.constructor.name);
    if (platform.constructor.name == 'Turtle') {
      return !platform.submerged &&
      game.toad.yCoordinate + 2 == platform.yCoordinate &&
      game.toad.xCoordinate > platform.xCoordinate - game.toad.margin &&
      game.toad.xCoordinate + game.toad.width < platform.xCoordinate + platform.width + game.toad.margin
    } else if (platform.constructor.name == 'Platform') {
      return (game.toad.yCoordinate + 2 == platform.yCoordinate) &&
        game.toad.xCoordinate > platform.xCoordinate - game.toad.margin &&
        game.toad.xCoordinate + game.toad.width < platform.xCoordinate + platform.width + game.toad.margin
    }
  }, game.toad)

  if (onRiverPlatform.length > 0) {
    game.toad.velocity = onRiverPlatform[0].velocity;
  }
  if (!onRiverPlatform.length) {
    game.toad.velocity = 0;
  }
  if (onRiverPlatform.length == 0 && game.toad.yCoordinate < 412.5) {
    game.toad.status = 'dead';
  }

}

function evalInput(event) {
  event.preventDefault();
  if (event.keyCode === 37) {
    game.toad.moveToad('left', canvas);
  } else if (event.keyCode === 38) {
    game.toad.moveToad('up', canvas);
  } else if (event.keyCode === 39) {
    game.toad.moveToad('right', canvas);
  } else if (event.keyCode === 40) {
    game.toad.moveToad('down', canvas);
  }
}
