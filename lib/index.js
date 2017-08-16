let style = require('./style.css');
const Toad = require('./toad.js');
const {Platform, Turtle, Crocodile} = require('./platform.js');
const {Obstacle, Auto, Tractor, SlowCar, SportsCar, FastCar, Snake} = require('./obstacle.js');

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var newToad = new Toad();
let squareHeight = 50;
let squareWidth = 67;
let logs = []
logs = logs.concat(buildRiver2());
logs = logs.concat(buildRiver3());
logs = logs.concat(buildRiver5());

requestAnimationFrame(function gameLoop(){
  drawBackground();
  logs.forEach(function(platform){
    platform.draw(canvas, context);
  })
  newToad.drawToad(context);
  requestAnimationFrame(gameLoop);
})

document.addEventListener('keyup', evalInput);

// functions

function buildRiver2(){
  let r2yCoord = 227;
  let r2LogLength = squareWidth * 3;
  let r2Gap = squareWidth * 2;
  let r2Speed = 2;
  let r2NumberOfLogs = 4;
  let r2offset = squareWidth * 2
  let buildRiver2Array = [];
  for(let i=0; i < r2NumberOfLogs; i++){
    buildRiver2Array.push(new Platform((r2LogLength+r2Gap)*i, r2yCoord, r2LogLength, r2Speed, r2Gap, r2offset));
  }
  return buildRiver2Array;
}

function buildRiver3(){
  let r3yCoord = 177
  let r3LogLength = squareWidth * 7;
  let r3Gap = squareWidth * 3;
  let r3Speed = 4;
  let r3NumberOfLogs = 3;
  let r3offset = squareWidth * 8;
  let buildRiver3Array = [];
  for(let i=0; i < r3NumberOfLogs; i++){
    buildRiver3Array.push(new Platform((r3LogLength+r3Gap)*i, r3yCoord, r3LogLength, r3Speed, r3Gap, r3offset));
  }
  return buildRiver3Array;
}

function buildRiver5(){
  let r5yCoord = 77
  let r5LogLength = squareWidth * 4;
  let r5Gap = squareWidth * 3;
  let r5Speed = -3;
  let r5NumberOfLogs = 3;
  let r5offset = squareWidth * 2;
  let buildRiver5Array = [];
  for(let i=0; i < r5NumberOfLogs; i++){
    buildRiver5Array.push(new Platform((r5LogLength+r5Gap)*i, r5yCoord, r5LogLength, r5Speed, r5Gap, r5offset));
  }
  return buildRiver5Array;
}

function evalInput(event) {
  event.preventDefault();
  if(event.keyCode === 37){
    newToad.moveToad('left');
  }
  else if(event.keyCode === 38){
    newToad.moveToad('up');
  }
  else if(event.keyCode === 39){
    newToad.moveToad('right');
  }
  else if(event.keyCode === 40){
    newToad.moveToad('down');
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
  context.fillRect(20, 25, canvas.width-40, 50);

  context.fillStyle = 'lightblue';
  context.fillRect(20, 0, canvas.width-40, 25);
}
