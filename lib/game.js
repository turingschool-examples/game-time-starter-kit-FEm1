const Toad = require('./toad.js');
const Home = require('./home.js');
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
    this.tractors = [];
    this.slowCars = [];
    this.fastCars = [];
    this.semis = [];
    this.homes = this.buildHomes();
    this.toad = new Toad(475, 575, 'safe', this.homes)
  }

  buildLevel() {
    this.tractors = this.buildRoadRow(Tractor, 527, this.squareWidth, -2, this.squareWidth * 4, 4, this.squareWidth * 4);
    this.slowCars = this.buildRoadRow(SlowCar, 477, this.squareWidth * 2, 1, this.squareWidth * 5, 3, this.squareWidth * 4);
    this.fastCars = this.buildRoadRow(FastCar, 427, this.squareWidth * 2, 3, this.squareWidth * 3, 4, this.squareWidth * 3);
    this.semis = this.buildRoadRow(Semi, 377, this.squareWidth * 5, -3, this.squareWidth * 3, 3, this.squareWidth * 4);
    this.turtles = this.buildRiverRow(Turtle, 277, this.squareWidth * 3, -2, this.squareWidth * 3, 6, this.squareWidth * 0);
    this.logs = this.buildRiverRow (Platform, 227, this.squareWidth * 3, 3, this.squareWidth * 2, 4, this.squareWidth * 2);
    this.logs = this.logs.concat(this.buildRiverRow (Platform, 177, this.squareWidth * 7, 4, this.squareWidth * 3, 3, this.squareWidth * 8));
    this.turtles = this.turtles.concat(this.buildRiverRow(Turtle, 127, this.squareWidth * 4, -3, this.squareWidth * 2, 6, this.squareWidth * 17));
    this.logs = this.logs.concat(this.buildRiverRow (Platform, 77, this.squareWidth * 4, 2, this.squareWidth * 3, 3, this.squareWidth * 2));
  }

  drawGamePieces() {
    this.tractors.forEach(function(tractor) {
      tractor.drawObstacle(this.canvas, this.context, 'yellow');
    }, this)
    this.slowCars.forEach(function(slowCar) {
      slowCar.drawObstacle(this.canvas, this.context, 'pink');
    }, this)
    this.fastCars.forEach(function(fastCar) {
      fastCar.drawObstacle(this.canvas, this.context, 'red');
    }, this)
    this.semis.forEach(function(semi) {
      semi.drawObstacle(this.canvas, this.context, 'orange');
    }, this)
    this.turtles.forEach(function(turtle) {
      turtle.draw(this.canvas, this.context);
    }, this)
    this.logs.forEach(function(platform) {
      platform.draw(this.canvas, this.context);
    }, this)
    this.homes.forEach(function(home) {
      home.draw(this.canvas, this.context);
    }, this)
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

  buildRoadRow(vehicleType, yCoord, carLength, speed, gap, numCars, offset) {
    let Type = vehicleType;
    let vehicleYCoord = yCoord;
    let vehicleLength = carLength;
    let vehicleSpeed = speed;
    let vehicleGap = gap;
    let numVehicles = numCars;
    let rowOffset = offset;
    let roadArray = [];

    for (let i = 0; i < numVehicles; i++) {
      roadArray.push(new Type((vehicleLength + vehicleGap) * i, vehicleYCoord, vehicleLength, vehicleSpeed, vehicleGap, rowOffset));
    }
    return roadArray;
  }

  buildRiverRow (PlatformType, yCoord, platformLength, platformSpeed, platformGap, numPlatforms, platformOffset) {
    let riverArray = [];

    for (let i = 0; i < numPlatforms; i++) {
      if (PlatformType === Turtle) {
        riverArray.push(new PlatformType((platformLength + platformGap) * i, yCoord, platformLength, platformSpeed, platformGap, platformOffset,
        i % 3 === 0 ? true : false));
      } else {
        riverArray.push(new PlatformType((platformLength + platformGap) * i, yCoord, platformLength, platformSpeed, platformGap, platformOffset))
      }

    }
    return riverArray;
  }

  buildHomes() {
    let homeYcoord = 25;
    let startXcoord = this.squareWidth - 2.5;
    let gap = this.squareWidth * 2;
    let numberOfHomes = 5;
    let buildHomeArray = [];

    for (let i = 0; i < numberOfHomes; i++) {
      buildHomeArray.push(new Home(startXcoord + (this.squareWidth + gap) * i, homeYcoord, this.squareWidth, this.squareHeight));
    }
    return buildHomeArray;
  }
}

module.exports = Game;
