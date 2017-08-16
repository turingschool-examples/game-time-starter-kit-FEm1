let style = require('./style.css');
const Toad = require('./toad.js');
const {Platform, Turtle, Crocodile} = require('./platform.js')

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var newToad = new Toad();
let r2yCoord = 227
let r2LogLength = 201;
let r2Gap = 100.5
let r2Speed = 2;
let r2NumberOfLogs = 5;
let newPlatform = [];
for(let i=0; i < r2NumberOfLogs; i++){
  let xPos = -(r2LogLength*(i+1))
  newPlatform.push(new Platform(0+(r2LogLength+r2Gap)*i, r2yCoord, r2LogLength, r2Speed, r2Gap))
}
// var newPlatform = [new Platform(-r2LogLength, r2yCoord, r2LogLength, r2Speed, r2Gap), new Platform(-((2*r2LogLength) + r2Gap), r2yCoord, r2LogLength, r2Speed, r2Gap)];

requestAnimationFrame(function gameLoop(){
  drawBackground();
  // newPlatform.move();
  // newPlatform.draw(canvas, context);
  newPlatform.forEach(function(platform){
    platform.draw(canvas, context);
  })
  newToad.drawToad(context);
  requestAnimationFrame(gameLoop);
})

document.addEventListener('keyup', evalInput);

// functions

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
