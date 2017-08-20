let style = require('./style.css');
const Toad = require('./toad.js');
const Home = require('./home.js');
const {Platform, Turtle, Crocodile} = require('./platform.js');
const {Obstacle, Auto, Tractor, SlowCar, Semi, FastCar, Snake} = require('./obstacle.js');
let Game = require('./game.js');

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

let game = new Game(canvas, context);

let squareHeight = 50;
let squareWidth = 67;
let homes = buildHomes();

game.buildLevel();
// let newToad = new Toad(475, 575, 'safe', homes);

requestAnimationFrame(function gameLoop() {
  game.drawBackground();
  game.drawGamePieces();
  homes.forEach(function(home) {
    home.draw(canvas, context);
  })
  collisionDetection();
  game.toad.drawToad(context);
  requestAnimationFrame(gameLoop);
})

document.addEventListener('keyup', evalInput);

// functions

function buildHomes() {
  let homeYcoord = 25;
  let startXcoord = squareWidth - 2.5;
  let gap = squareWidth * 2;
  let numberOfHomes = 5;
  let buildHomeArray = [];

  for (let i = 0; i < numberOfHomes; i++) {
    buildHomeArray.push(new Home(startXcoord + (squareWidth + gap) * i, homeYcoord, squareWidth, squareHeight));
  }
  return buildHomeArray;
}

function collisionDetection() {
  let testArray = game.tractors.concat(game.slowCars).concat(game.fastCars).concat(game.semis);

  testArray.forEach(function(car) {
    if ((game.toad.yCoord + 2 == car.yCoordinate) &&
    ((game.toad.xCoord < car.xCoordinate + car.width && game.toad.xCoord > car.xCoordinate) ||
    (game.toad.xCoord + game.toad.width > car.xCoordinate && game.toad.xCoord + game.toad.width < car.xCoordinate + car.width))) {
      game.toad.status = 'dead';
    }
  });
  let toadLog = game.logs.filter(function(log) {
    return (game.toad.yCoord + 2 == log.yCoordinate) &&
      game.toad.xCoord > log.xCoordinate - game.toad.margin &&
      game.toad.xCoord + game.toad.width < log.xCoordinate + log.width + game.toad.margin
  }, game.toad);
  let turtleLog = game.turtles.filter(function(turtle) {
    return !turtle.submerged &&
    game.toad.yCoord + 2 == turtle.yCoordinate &&
    game.toad.xCoord > turtle.xCoordinate - game.toad.margin &&
    game.toad.xCoord + game.toad.width < turtle.xCoordinate + turtle.width + game.toad.margin
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
  if (!toadLog.length && !turtleLog.length && game.toad.yCoord < 325) {
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
