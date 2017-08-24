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
  let toadLog = game.logs.filter(function(log) {
    return (game.toad.yCoordinate + 2 == log.yCoordinate) &&
      game.toad.xCoordinate > log.xCoordinate - game.toad.margin &&
      game.toad.xCoordinate + game.toad.width < log.xCoordinate + log.width + game.toad.margin
  }, game.toad);
  let turtleLog = game.turtles.filter(function(turtle) {
    return !turtle.submerged &&
    game.toad.yCoordinate + 2 == turtle.yCoordinate &&
    game.toad.xCoordinate > turtle.xCoordinate - game.toad.margin &&
    game.toad.xCoordinate + game.toad.width < turtle.xCoordinate + turtle.width + game.toad.margin
  }, game.toad)

  if (toadLog.length) {
    game.toad.velocity = toadLog[0].velocity;
  }
  if (turtleLog.length) {
    game.toad.velocity = turtleLog[0].velocity;
  }
  if (!toadLog.length && !turtleLog.length) {
    game.toad.velocity = 0;
  }
  if (!toadLog.length && !turtleLog.length && game.toad.yCoordinate < 412.5) {
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
