let style = require('./style.css');
const Toad = require('./toad.js');
const {Platform, Turtle, Crocodile} = require('./platform.js')

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var newToad = new Toad();


requestAnimationFrame(function gameLoop(){
  drawBackground();
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
