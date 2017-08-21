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
  //
  // buildRiver1() {
  //   let r1yCoord = 277;
  //   let r1TurtleLength = this.squareWidth * 3;
  //   let r1Gap = this.squareWidth * 3;
  //   let r1Speed = -2;
  //   let r1NumberOfTurtles = 6;
  //   let r1offset = this.squareWidth * 0;
  //   let buildRiver1Array = [];
  //
  //   for (let i = 0; i < r1NumberOfTurtles; i++) {
  //     buildRiver1Array.push(new Turtle((r1TurtleLength + r1Gap) * i, r1yCoord, r1TurtleLength, r1Speed, r1Gap, r1offset, i % 3 === 0 ? true : false));
  //   }
  //   return buildRiver1Array;
  // }

  // buildRiver2() {
  //   let r2yCoord = 227;
  //   let r2LogLength = this.squareWidth * 3;
  //   let r2Gap = this.squareWidth * 2;
  //   let r2Speed = 3;
  //   let r2NumberOfLogs = 4;
  //   let r2offset = this.squareWidth * 2
  //   let buildRiver2Array = [];
  //
  //   for (let i = 0; i < r2NumberOfLogs; i++) {
  //     buildRiver2Array.push(new Platform((r2LogLength + r2Gap) * i, r2yCoord, r2LogLength, r2Speed, r2Gap, r2offset));
  //   }
  //   return buildRiver2Array;
  // }
  //
  // buildRiver3() {
  //   let r3yCoord = 177
  //   let r3LogLength = this.squareWidth * 7;
  //   let r3Gap = this.squareWidth * 3;
  //   let r3Speed = 4;
  //   let r3NumberOfLogs = 3;
  //   let r3offset = this.squareWidth * 8;
  //   let buildRiver3Array = [];
  //
  //   for (let i = 0; i < r3NumberOfLogs; i++) {
  //     buildRiver3Array.push(new Platform((r3LogLength + r3Gap) * i, r3yCoord, r3LogLength, r3Speed, r3Gap, r3offset));
  //   }
  //   return buildRiver3Array;
  // }
  //
  // buildRiver4() {
  //   let r4yCoord = 127;
  //   let r4TurtleLength = this.squareWidth * 4;
  //   let r4Gap = this.squareWidth * 2;
  //   let r4Speed = -3;
  //   let r4NumberOfTurtles = 6;
  //   let r4offset = this.squareWidth * 17; //11
  //   let buildRiver4Array = [];
  //
  //   for (let i = 0; i < r4NumberOfTurtles; i++) {
  //     buildRiver4Array.push(new Turtle((r4TurtleLength + r4Gap) * i, r4yCoord, r4TurtleLength, r4Speed, r4Gap, r4offset, i % 3 === 0 ? true : false));
  //   }
  //   return buildRiver4Array;
  // }
  //
  // buildRiver5() {
  //   let r5yCoord = 77
  //   let r5LogLength = this.squareWidth * 4;
  //   let r5Gap = this.squareWidth * 3;
  //   let r5Speed = 2;
  //   let r5NumberOfLogs = 3;
  //   let r5offset = this.squareWidth * 2;
  //   let buildRiver5Array = [];
  //
  //   for (let i = 0; i < r5NumberOfLogs; i++) {
  //     buildRiver5Array.push(new Platform((r5LogLength + r5Gap) * i, r5yCoord, r5LogLength, r5Speed, r5Gap, r5offset));
  //   }
  //   return buildRiver5Array;
  // }

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
