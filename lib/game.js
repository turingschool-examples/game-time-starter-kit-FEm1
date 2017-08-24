const Toad = require('./toad.js');
const Home = require('./home.js');
const Score = require('./score.js')
const Level = require('./level.js')
const {Platform, Turtle, Crocodile} = require('./platform.js');
const {Obstacle, Auto, Tractor, SlowCar, Semi, FastCar, Snake} = require('./obstacle.js');

class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.squareHeight = 50;
    this.squareWidth = 67;
    this.turtles = [];
    this.logs = [];
    this.autos = [];
    this.river = [];
    this.level = new Level(this.squareWidth);
    this.homes = this.buildHomes();
    this.score = new Score();
    this.toad = new Toad(475, 662.5, 'safe', this.homes, this.score)
  }

  buildLevel() {
    this.autos = this.level.buildRoadLevel();
    this.river = this.level.buildRiverLevel();
  }

  drawGamePieces() {
    this.autos.forEach(function(auto) {
      auto.drawObstacle(this.canvas, this.context);
    }, this)
    this.river.forEach(function(platform) {
      platform.draw(this.canvas, this.context);
    }, this)
    this.homes.forEach(function(home) {
      home.draw(this.canvas, this.context);
    }, this)
  }

  drawBackground() {
    this.context.fillStyle = 'gray';
    this.context.fillRect(0, 662.5, this.canvas.width, 87.5);
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 462.5, this.canvas.width, 200);
    this.context.fillStyle = 'green';
    this.context.fillRect(0, 412.5, this.canvas.width, 50);
    this.context.fillStyle = '#000047';
    this.context.fillRect(0, 0, this.canvas.width, 412.5);
  }

  buildHomes() {
    let homeYcoord = 112.5;
    let startXcoord = this.squareWidth - 2.5;
    let gap = this.squareWidth * 2;
    let numberOfHomes = 5;
    let buildHomeArray = [];

    for (let i = 0; i < numberOfHomes; i++) {
      buildHomeArray.push(new Home(startXcoord + (this.squareWidth + gap) * i, homeYcoord, this.squareWidth, this.squareHeight));
    }
    return buildHomeArray;
  }

  collisionDetection() {
    this.autos.forEach(function(car) {
      if ((this.toad.yCoordinate + 2 == car.yCoordinate) &&
      ((this.toad.xCoordinate < car.xCoordinate + car.width && this.toad.xCoordinate > car.xCoordinate) ||
      (this.toad.xCoordinate + this.toad.width > car.xCoordinate && this.toad.xCoordinate + this.toad.width < car.xCoordinate + car.width))) {
        this.toad.status = 'dead';
      }
    }, this);
    let onRiverPlatform = this.river.filter(function(platform) {
      if (platform.constructor.name == 'Turtle') {
        return !platform.submerged &&
        this.toad.yCoordinate + 2 == platform.yCoordinate &&
        this.toad.xCoordinate > platform.xCoordinate - this.toad.margin &&
        this.toad.xCoordinate + this.toad.width < platform.xCoordinate + platform.width + this.toad.margin
      } else if (platform.constructor.name == 'Platform') {
        return (this.toad.yCoordinate + 2 == platform.yCoordinate) &&
          this.toad.xCoordinate > platform.xCoordinate - this.toad.margin &&
          this.toad.xCoordinate + this.toad.width < platform.xCoordinate + platform.width + this.toad.margin
      }
    }, this)

    if (onRiverPlatform.length > 0) {
      this.toad.velocity = onRiverPlatform[0].velocity;
    }
    if (!onRiverPlatform.length) {
      this.toad.velocity = 0;
    }
    if (onRiverPlatform.length == 0 && this.toad.yCoordinate < 412.5) {
      this.toad.status = 'dead';
    }
  }

}

module.exports = Game;
