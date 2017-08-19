let style = require('./style.css');
const Toad = require('./toad.js');
const Home = require('./home.js');
const {Platform, Turtle, Crocodile} = require('./platform.js');
const {Obstacle, Auto, Tractor, SlowCar, Semi, FastCar, Snake} = require('./obstacle.js');

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

let squareHeight = 50;
let squareWidth = 67;
let turtles = [];
let logs = [];

turtles = turtles.concat(buildRiver1());
turtles = turtles.concat(buildRiver4());
logs = logs.concat(buildRiver2());
logs = logs.concat(buildRiver3());
logs = logs.concat(buildRiver5());

let tractors = [];
let slowCars = [];
let fastCars = [];
let semis = [];

tractors = tractors.concat(buildRoad1());
slowCars = slowCars.concat(buildRoad2());
fastCars = fastCars.concat(buildRoad3());
semis = semis.concat(buildRoad4());

let homes = buildHomes();
let newToad = new Toad(475, 575, 'safe', homes);

requestAnimationFrame(function gameLoop() {
  drawBackground();
  turtles.forEach(function(turtle) {
    turtle.draw(canvas, context);
  })
  logs.forEach(function(platform) {
    platform.draw(canvas, context);
  })
  tractors.forEach(function(tractor) {
    tractor.drawObstacle(canvas, context, 'yellow');
  })
  slowCars.forEach(function(slowCar) {
    slowCar.drawObstacle(canvas, context, 'pink');
  })
  fastCars.forEach(function(fastCar) {
    fastCar.drawObstacle(canvas, context, 'red');
  })
  semis.forEach(function(semi) {
    semi.drawObstacle(canvas, context, 'orange');
  })
  homes.forEach(function(home) {
    home.draw(canvas, context);
  })
  collisionDetection();
  newToad.drawToad(context);
  requestAnimationFrame(gameLoop);
})

document.addEventListener('keyup', evalInput);

// functions

function buildRoad1() {
  let r1yCoord = 527;
  let r1CarLength = squareWidth;
  let r1Gap = squareWidth * 4;
  let r1Speed = -2;
  let r1NumberOfCars = 4;
  let r1offset = squareWidth * 4;
  let buildRoad1Array = [];

  for (let i = 0; i < r1NumberOfCars; i++) {
    buildRoad1Array.push(new Tractor((r1CarLength + r1Gap) * i, r1yCoord, r1CarLength, r1Speed, r1Gap, r1offset));
  }
  return buildRoad1Array;
}

function buildRoad2() {
  let r2yCoord = 477;
  let r2CarLength = squareWidth * 2;
  let r2Gap = squareWidth * 5;
  let r2Speed = 1;
  let r2NumberOfCars = 3;
  let r2offset = squareWidth * 4;
  let buildRoad2Array = [];

  for (let i = 0; i < r2NumberOfCars; i++) {
    buildRoad2Array.push(new SlowCar((r2CarLength + r2Gap) * i, r2yCoord, r2CarLength, r2Speed, r2Gap, r2offset));
  }
  return buildRoad2Array;
}

function buildRoad3() {
  let r3yCoord = 427;
  let r3CarLength = squareWidth * 2;
  let r3Gap = squareWidth * 3;
  let r3Speed = 3;
  let r3NumberOfCars = 4;
  let r3offset = squareWidth * 3;
  let buildRoad3Array = [];

  for (let i = 0; i < r3NumberOfCars; i++) {
    buildRoad3Array.push(new FastCar((r3CarLength + r3Gap) * i, r3yCoord, r3CarLength, r3Speed, r3Gap, r3offset));
  }
  return buildRoad3Array;
}

function buildRoad4() {
  let r4yCoord = 377;
  let r4CarLength = squareWidth * 5;
  let r4Gap = squareWidth * 3;
  let r4Speed = -3;
  let r4NumberOfCars = 3;
  let r4offset = squareWidth * 4;
  let buildRoad4Array = [];

  for (let i = 0; i < r4NumberOfCars; i++) {
    buildRoad4Array.push(new Semi((r4CarLength + r4Gap) * i, r4yCoord, r4CarLength, r4Speed, r4Gap, r4offset));
  }
  return buildRoad4Array;
}

function buildRiver1() {
  let r1yCoord = 277;
  let r1TurtleLength = squareWidth * 3;
  let r1Gap = squareWidth * 3;
  let r1Speed = -2;
  let r1NumberOfTurtles = 6;
  let r1offset = 0;
  let buildRiver1Array = [];

  for (let i = 0; i < r1NumberOfTurtles; i++) {
    buildRiver1Array.push(new Turtle((r1TurtleLength + r1Gap) * i, r1yCoord, r1TurtleLength, r1Speed, r1Gap, r1offset, i % 3 === 0 ? true : false));
  }
  return buildRiver1Array;
}

function buildRiver2() {
  let r2yCoord = 227;
  let r2LogLength = squareWidth * 3;
  let r2Gap = squareWidth * 2;
  let r2Speed = 3;
  let r2NumberOfLogs = 4;
  let r2offset = squareWidth * 2
  let buildRiver2Array = [];

  for (let i = 0; i < r2NumberOfLogs; i++) {
    buildRiver2Array.push(new Platform((r2LogLength + r2Gap) * i, r2yCoord, r2LogLength, r2Speed, r2Gap, r2offset));
  }
  return buildRiver2Array;
}

function buildRiver3() {
  let r3yCoord = 177
  let r3LogLength = squareWidth * 7;
  let r3Gap = squareWidth * 3;
  let r3Speed = 4;
  let r3NumberOfLogs = 3;
  let r3offset = squareWidth * 8;
  let buildRiver3Array = [];

  for (let i = 0; i < r3NumberOfLogs; i++) {
    buildRiver3Array.push(new Platform((r3LogLength + r3Gap) * i, r3yCoord, r3LogLength, r3Speed, r3Gap, r3offset));
  }
  return buildRiver3Array;
}

function buildRiver4() {
  let r4yCoord = 127;
  let r4TurtleLength = squareWidth * 4;
  let r4Gap = squareWidth * 2;
  let r4Speed = -3;
  let r4NumberOfTurtles = 6;
  let r4offset = squareWidth * 17; //11
  let buildRiver4Array = [];

  for (let i = 0; i < r4NumberOfTurtles; i++) {
    buildRiver4Array.push(new Turtle((r4TurtleLength + r4Gap) * i, r4yCoord, r4TurtleLength, r4Speed, r4Gap, r4offset, i % 3 === 0 ? true : false));
  }
  return buildRiver4Array;
}

function buildRiver5() {
  let r5yCoord = 77
  let r5LogLength = squareWidth * 4;
  let r5Gap = squareWidth * 3;
  let r5Speed = 2;
  let r5NumberOfLogs = 3;
  let r5offset = squareWidth * 2;
  let buildRiver5Array = [];

  for (let i = 0; i < r5NumberOfLogs; i++) {
    buildRiver5Array.push(new Platform((r5LogLength + r5Gap) * i, r5yCoord, r5LogLength, r5Speed, r5Gap, r5offset));
  }
  return buildRiver5Array;
}

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

// let tractors = [];
// let slowCars = [];
// let fastCars = [];
// let semis = [];

function collisionDetection() {
  let testArray = tractors.concat(slowCars).concat(fastCars).concat(semis);

  // console.log(testArray);
  // tractors.forEach(function(car)  {
  testArray.forEach(function(car) {


  // toad disappears immediately on row
  //  if((newToad.yCoord+2 == car.yCoordinate) && (newToad.xCoord < car.xCoordinate+car.width) || (newToad.xCoord+newToad.width > car.xCoordinate)) {


  // MDN implementation: never collides/diappears
  //  if(newToad.xCoord < car.xCoordinate + car.width &&
  //  newToad.xCoord + newToad.xCoord > car.xCoordinate &&
  //  newToad.yCoord < car.yCoordinate + car.height &&
  //  newToad.height + newToad.yCoord > car.yCoordinate) {

    // test car row 1
    // disappears, when hit, but not at the right time
    if ((newToad.yCoord + 2 == car.yCoordinate) && ((newToad.xCoord < car.xCoordinate + car.width && newToad.xCoord > car.xCoordinate) || (newToad.xCoord + newToad.width > car.xCoordinate && newToad.xCoord + newToad.width < car.xCoordinate + car.width))) {
      newToad.status = 'dead';
    // console.log('toad is dead');
    }
  });
}

function evalInput(event) {
  event.preventDefault();
  if (event.keyCode === 37) {
    newToad.moveToad('left', canvas);
  }
  else if (event.keyCode === 38) {
    newToad.moveToad('up', canvas);
  }
  else if (event.keyCode === 39) {
    newToad.moveToad('right', canvas);
  }
  else if (event.keyCode === 40) {
    newToad.moveToad('down', canvas);
  }
}

function drawBackground () {
  context.fillStyle = 'gray';
  context.fillRect(0, 575, canvas.width, 175);

  context.fillStyle = 'black';
  context.fillRect(0, 375, canvas.width, 200);

  context.fillRect(0, 0, canvas.width, 75);

  context.fillStyle = 'green';
  context.fillRect(0, 325, canvas.width, 50);

  context.fillStyle = 'blue';
  context.fillRect(0, 75, canvas.width, 250);

  context.fillStyle = 'green';
  context.fillRect(20, 25, canvas.width - 40, 50);

  context.fillStyle = 'lightblue';
  context.fillRect(20, 0, canvas.width - 40, 25);
}
