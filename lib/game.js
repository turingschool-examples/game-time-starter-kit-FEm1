const Toad = require('./toad.js');
const Home = require('./home.js');
const {Platform, Turtle, Crocodile} = require('./platform.js');
const {Obstacle, Auto, Tractor, SlowCar, Semi, FastCar, Snake} = require('./obstacle.js');

class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.squareHeight = 50;
    this.squareWidth = 50;
    this.turtles = [];
    this.log = [];
    this.tractors = [];
    this.slowCars = [];
    this.fastCars = [];
    this.semis = [];
    this.homes = [];
    this.toad = new Toad(475, 575, 'safe', this.homes)
  }

  drawBackground() {
    this.context.fillStyle = 'gray';
    this.context.fillRect(0, 575, this.canvas.width, 175);

    this.context.fillStyle = 'black';
    this.context.fillRect(0, 375, this.canvas.width, 200);

    this.context.fillRect(0, 0, this.canvas.width, 75);

    this.context.fillStyle = 'green';
    this.context.fillRect(0, 325, this.canvas.width, 50);

    this.context.fillStyle = 'blue';
    this.context.fillRect(0, 75, this.canvas.width, 250);

    this.context.fillStyle = 'green';
    this.context.fillRect(20, 25, this.canvas.width - 40, 50);

    this.context.fillStyle = 'lightblue';
    this.context.fillRect(20, 0, this.canvas.width - 40, 25);
  }

}

module.exports = Game;
