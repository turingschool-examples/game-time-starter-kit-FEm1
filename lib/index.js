let style = require('./style.css');
const Toad = require('./toad.js');

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

drawBackground();
var newToad = new Toad();
newToad.drawToad(context);




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
