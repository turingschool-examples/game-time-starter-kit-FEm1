const Toad = require('./toad.js');
const Score = require('./score.js');
const Level = require('./level.js');
const Timer = require('./timer.js');

class Game {
  constructor(canvas, context, image) {
    this.canvas = canvas;
    this.context = context;
    this.squareHeight = 50;
    this.squareWidth = 67;
    this.autos = [];
    this.river = [];
    this.image = image;
    this.score = new Score();
    this.timer = new Timer();
    this.level = new Level(this.squareWidth, this.score, this.timer);
    this.toad = new Toad(475, 662.5, 'safe', this.homes, this.score, this.timer, this.level)
  }

  checkForWin() {
    let emptyHomes = this.level.homes.filter(function(home) {
      return !home.hasToad;
    })

    if (emptyHomes.length == 0) {
      this.score.addScore(1000);
      this.level.next();
      this.level.homes = this.level.buildHomes();
      this.buildLevel(this.level.currentLevel);
    }
  }

  winLevel() {
    this.level.homes.forEach(function(home) {
      home.hasToad = true;
    })
  }

  buildLevel(level) {
    this.autos = this.level.buildRoadLevel(level);
    this.river = this.level.buildRiverLevel(level);
  }

  drawGamePieces() {
    this.autos.forEach(function(auto) {
      auto.drawObstacle(this.canvas, this.context);
    }, this)
    this.river.forEach(function(platform) {
      platform.draw(this.canvas, this.context);
    }, this)
    this.level.homes.forEach(function(home) {
      home.draw(this.canvas, this.context);
    }, this)
  }

  drawBackground() {
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 662.5, this.canvas.width, 87.5);
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 462.5, this.canvas.width, 200);
    this.context.fillStyle = '#000047';
    this.context.fillRect(0, 0, this.canvas.width, 412.5);
    var sourceX = 53;
    var sourceY = 480;
    var sourceWidth = 54;
    var sourceHeight = 52;

    var destinationX = 0;
    var destinationY = 410;
    var destinationWidth = sourceWidth;
    var destinationHeight = sourceHeight;

    for (let i = 0; i < 19; i++) {
      this.context.drawImage(this.image, sourceX, sourceY,
        sourceWidth, sourceHeight, destinationX + 54 * i,
        destinationY, destinationWidth, destinationHeight)
    }
    destinationY = 662.5;

    for (let i = 0; i < 19; i++) {
      this.context.drawImage(this.image, sourceX, sourceY,
        sourceWidth, sourceHeight, destinationX + 54 * i,
        destinationY, destinationWidth, destinationHeight)
    }

    var BottomRight = {
      sourceX: 1440,
      sourceY: 800,
      sourceWidth: 23,
      sourceHeight: 23,
    }

    var BottomLeft = {
      sourceX: 1337,
      sourceY: 800,
      sourceWidth: 23,
      sourceHeight: 23,
    }

    var Left = {
      sourceX: 1440,
      sourceY: 747,
      sourceWidth: 23,
      sourceHeight: 26,
    }

    var Right = {
      sourceX: 1337,
      sourceY: 747,
      sourceWidth: 23,
      sourceHeight: 26,
    }

    var TopRight = {
      sourceX: 1333,
      sourceY: 693,
      sourceWidth: 27,
      sourceHeight: 27,
    }

    var TopLeft = {
      sourceX: 1387,
      sourceY: 693,
      sourceWidth: 26,
      sourceHeight: 27,
    }

    var TopCenter = {
      sourceX: 1440,
      sourceY: 693,
      sourceWidth: 27,
      sourceHeight: 24,
    }

    var Center = {
      sourceX: 1388,
      sourceY: 747,
      sourceWidth: 25,
      sourceHeight: 26,
    }

    this.drawBlock(BottomRight, 17, 143, 5);
    this.drawBlock(BottomLeft, 101, 143, 5);
    this.drawBlock(Left, 17, 117, 5);
    this.drawBlock(Right, 101, 117, 5);
    this.drawBlock(TopLeft, 17, 90, 5);
    this.drawBlock(TopCenter, 43, 90, 5); //left house roof
    this.drawBlock(TopCenter, 70, 90, 5); //right house roof
    this.drawBlock(TopCenter, -10, 142, 5);
    this.drawBlock(TopCenter, 178, 142, 5);
    this.drawBlock(TopCenter, 151, 142, 5);
    this.drawBlock(TopCenter, 124, 142, 5);
    this.drawBlock(Center, -8, 116, 5);
    this.drawBlock(Center, 182, 116, 4);
    this.drawBlock(Center, 157, 116, 4);
    this.drawBlock(Center, 132, 116, 5);
    this.drawBlock(Center, 120, 116, 5);
    this.drawBlock(Center, 122, 90, 5);
    this.drawBlock(Center, 145, 90, 5);
    this.drawBlock(Center, 170, 90, 5);
    this.drawBlock(Center, -20, 90, 5);
    this.drawBlock(Center, 5, 90, 5);
    this.drawBlock(TopRight, 97, 90, 5);
  }

  drawLevel() {
    this.score.drawScore(this.context);
    this.timer.drawTimer(this.context);
    this.level.drawLives(this.context)
  }

  drawBlock(Block, startX, startY, counter) {
    for (let i = 0; i < counter; i++) {
      this.context.drawImage(this.image, Block.sourceX, Block.sourceY, Block.sourceWidth,
        Block.sourceHeight, startX + (215 * i), startY, Block.sourceWidth, Block.sourceHeight)
    }
  }

  // collisionDetection() {
  //   if (this.toad.status == 'safe') {
  //     this.autos.forEach(function(car) {
  //       if ((this.toad.yCoordinate + 2 == car.yCoordinate) &&
  //       ((this.toad.xCoordinate < car.xCoordinate + car.width && this.toad.xCoordinate > car.xCoordinate) ||
  //       (this.toad.xCoordinate + this.toad.width > car.xCoordinate && this.toad.xCoordinate + this.toad.width < car.xCoordinate + car.width))) {
  //         this.toad.status = 'dead';
  //         this.level.death();
  //       }
  //     }, this);
  //     let onRiverPlatform = this.river.filter(function(platform) {
  //       if (platform.constructor.name == 'Turtle') {
  //         return !platform.submerged &&
  //         this.toad.yCoordinate + 2 == platform.yCoordinate &&
  //         this.toad.xCoordinate > platform.xCoordinate - this.toad.margin &&
  //         this.toad.xCoordinate + this.toad.width < platform.xCoordinate + platform.width + this.toad.margin
  //       } else if (platform.constructor.name == 'Platform') {
  //         return (this.toad.yCoordinate + 2 == platform.yCoordinate) &&
  //           this.toad.xCoordinate > platform.xCoordinate - this.toad.margin &&
  //           this.toad.xCoordinate + this.toad.width < platform.xCoordinate + platform.width + this.toad.margin
  //       }
  //     }, this)
  //
  //     if (onRiverPlatform.length > 0) {
  //       this.toad.velocity = onRiverPlatform[0].velocity;
  //     }
  //     if (!onRiverPlatform.length) {
  //       this.toad.velocity = 0;
  //     }
  //     if (onRiverPlatform.length == 0 && this.toad.yCoordinate < 412.5) {
  //       this.toad.status = 'dead';
  //       this.level.death();
  //     }
  //   }
  // }

}

module.exports = Game;
