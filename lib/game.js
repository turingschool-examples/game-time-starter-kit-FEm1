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
    // this.river = this.buildRiverRow(Turtle, 364.5, this.squareWidth * 3, -2, this.squareWidth * 3, 6, this.squareWidth * 0);
    // this.river = this.river.concat(this.buildRiverRow (Platform, 314.5, this.squareWidth * 3, 3, this.squareWidth * 2, 4, this.squareWidth * 2));
    // this.river = this.river.concat(this.buildRiverRow (Platform, 264.5, this.squareWidth * 7, 4, this.squareWidth * 3, 3, this.squareWidth * 8));
    // this.river = this.river.concat(this.buildRiverRow(Turtle, 214.5, this.squareWidth * 4, -3, this.squareWidth * 2, 6, this.squareWidth * 17));
    // this.river = this.river.concat(this.buildRiverRow (Platform, 164.5, this.squareWidth * 4, 2, this.squareWidth * 3, 3, this.squareWidth * 2));
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

  buildRiverRow (PlatformType, yCoordinate, platformLength, platformSpeed, platformGap, numPlatforms, platformOffset) {
    let riverArray = [];

    for (let i = 0; i < numPlatforms; i++) {
      if (PlatformType === Turtle) {
        riverArray.push(new PlatformType((platformLength + platformGap) * i, yCoordinate, platformLength, platformSpeed, platformGap, platformOffset,
        i % 3 === 0 ? true : false));
      } else {
        riverArray.push(new PlatformType((platformLength + platformGap) * i, yCoordinate, platformLength, platformSpeed, platformGap, platformOffset))
      }

    }
    return riverArray;
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
}

module.exports = Game;
