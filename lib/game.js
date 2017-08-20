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
    this.homes = [];
    this.toad = new Toad(475, 575, 'safe', this.homes)
  }

  buildLevel() {
    this.tractors = this.tractors.concat(this.buildRoad1());
    this.slowCars = this.slowCars.concat(this.buildRoad2());
    this.fastCars = this.fastCars.concat(this.buildRoad3());
    this.semis = this.semis.concat(this.buildRoad4());
    this.turtles = this.turtles.concat(this.buildRiver1());
    this.logs = this.logs.concat(this.buildRiver2());
    this.logs = this.logs.concat(this.buildRiver3());
    this.turtles = this.turtles.concat(this.buildRiver4());
    this.logs = this.logs.concat(this.buildRiver5());
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
  buildRoad1() {
    let r1yCoord = 527;
    let r1CarLength = this.squareWidth;
    let r1Gap = this.squareWidth * 4;
    let r1Speed = -2;
    let r1NumberOfCars = 4;
    let r1offset = this.squareWidth * 4;
    let buildRoad1Array = [];

    for (let i = 0; i < r1NumberOfCars; i++) {
      buildRoad1Array.push(new Tractor((r1CarLength + r1Gap) * i, r1yCoord, r1CarLength, r1Speed, r1Gap, r1offset));
    }
    return buildRoad1Array;
  }

  buildRoad2() {
    let r2yCoord = 477;
    let r2CarLength = this.squareWidth * 2;
    let r2Gap = this.squareWidth * 5;
    let r2Speed = 1;
    let r2NumberOfCars = 3;
    let r2offset = this.squareWidth * 4;
    let buildRoad2Array = [];

    for (let i = 0; i < r2NumberOfCars; i++) {
      buildRoad2Array.push(new SlowCar((r2CarLength + r2Gap) * i, r2yCoord, r2CarLength, r2Speed, r2Gap, r2offset));
    }
    return buildRoad2Array;
  }

  buildRoad3() {
    let r3yCoord = 427;
    let r3CarLength = this.squareWidth * 2;
    let r3Gap = this.squareWidth * 3;
    let r3Speed = 3;
    let r3NumberOfCars = 4;
    let r3offset = this.squareWidth * 3;
    let buildRoad3Array = [];

    for (let i = 0; i < r3NumberOfCars; i++) {
      buildRoad3Array.push(new FastCar((r3CarLength + r3Gap) * i, r3yCoord, r3CarLength, r3Speed, r3Gap, r3offset));
    }
    return buildRoad3Array;
  }

  buildRoad4() {
    let r4yCoord = 377;
    let r4CarLength = this.squareWidth * 5;
    let r4Gap = this.squareWidth * 3;
    let r4Speed = -3;
    let r4NumberOfCars = 3;
    let r4offset = this.squareWidth * 4;
    let buildRoad4Array = [];

    for (let i = 0; i < r4NumberOfCars; i++) {
      buildRoad4Array.push(new Semi((r4CarLength + r4Gap) * i, r4yCoord, r4CarLength, r4Speed, r4Gap, r4offset));
    }
    return buildRoad4Array;
  }
  buildRiver1() {
    let r1yCoord = 277;
    let r1TurtleLength = this.squareWidth * 3;
    let r1Gap = this.squareWidth * 3;
    let r1Speed = -2;
    let r1NumberOfTurtles = 6;
    let r1offset = this.squareWidth * 0;
    let buildRiver1Array = [];

    for (let i = 0; i < r1NumberOfTurtles; i++) {
      buildRiver1Array.push(new Turtle((r1TurtleLength + r1Gap) * i, r1yCoord, r1TurtleLength, r1Speed, r1Gap, r1offset, i % 3 === 0 ? true : false));
    }
    return buildRiver1Array;
  }

  buildRiver2() {
    let r2yCoord = 227;
    let r2LogLength = this.squareWidth * 3;
    let r2Gap = this.squareWidth * 2;
    let r2Speed = 3;
    let r2NumberOfLogs = 4;
    let r2offset = this.squareWidth * 2
    let buildRiver2Array = [];

    for (let i = 0; i < r2NumberOfLogs; i++) {
      buildRiver2Array.push(new Platform((r2LogLength + r2Gap) * i, r2yCoord, r2LogLength, r2Speed, r2Gap, r2offset));
    }
    return buildRiver2Array;
  }

  buildRiver3() {
    let r3yCoord = 177
    let r3LogLength = this.squareWidth * 7;
    let r3Gap = this.squareWidth * 3;
    let r3Speed = 4;
    let r3NumberOfLogs = 3;
    let r3offset = this.squareWidth * 8;
    let buildRiver3Array = [];

    for (let i = 0; i < r3NumberOfLogs; i++) {
      buildRiver3Array.push(new Platform((r3LogLength + r3Gap) * i, r3yCoord, r3LogLength, r3Speed, r3Gap, r3offset));
    }
    return buildRiver3Array;
  }

  buildRiver4() {
    let r4yCoord = 127;
    let r4TurtleLength = this.squareWidth * 4;
    let r4Gap = this.squareWidth * 2;
    let r4Speed = -3;
    let r4NumberOfTurtles = 6;
    let r4offset = this.squareWidth * 17; //11
    let buildRiver4Array = [];

    for (let i = 0; i < r4NumberOfTurtles; i++) {
      buildRiver4Array.push(new Turtle((r4TurtleLength + r4Gap) * i, r4yCoord, r4TurtleLength, r4Speed, r4Gap, r4offset, i % 3 === 0 ? true : false));
    }
    return buildRiver4Array;
  }

  buildRiver5() {
    let r5yCoord = 77
    let r5LogLength = this.squareWidth * 4;
    let r5Gap = this.squareWidth * 3;
    let r5Speed = 2;
    let r5NumberOfLogs = 3;
    let r5offset = this.squareWidth * 2;
    let buildRiver5Array = [];

    for (let i = 0; i < r5NumberOfLogs; i++) {
      buildRiver5Array.push(new Platform((r5LogLength + r5Gap) * i, r5yCoord, r5LogLength, r5Speed, r5Gap, r5offset));
    }
    return buildRiver5Array;
  }

}

module.exports = Game;
