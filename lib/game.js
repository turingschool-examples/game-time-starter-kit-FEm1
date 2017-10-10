const Toad = require('./toad.js');
const Score = require('./score.js');
const Level = require('./level.js');
const Timer = require('./timer.js');
const Sprite = require('./Sprite.js');

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
    this.level = new Level(this.squareWidth, this.score, this.timer, this.image, this.context);
    this.toad = new Toad(488.5, 669.5, 'safe', this.homes, this.score, this.timer, this.level, this.image);
  }

  checkForWin() {
    let emptyHomes = this.level.homes.filter(function(home) {
      return !home.hasToad;
    })

    if (emptyHomes.length == 0) {
      if (this.level.run) {
        this.score.addScore(1000);
        this.level.run = false;
      }
      //draw level up
      this.context.font = '24px "Press Start 2P"';
      this.context.fillStyle = 'red';
      this.context.fillText('Level Complete!!', 225, 400);


      this.level.waitTick();
      if (this.level.run) {
        this.level.next();
        this.level.homes = this.level.buildHomes();
        this.buildLevel(this.level.currentLevel);
      }
    }
  }

  winLevel() {
    this.level.homes.forEach(function(home) {
      home.hasToad = true;
    })
  }

  buildLevel() {
    // should not need to pass in this.level.currentLevel
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
    this.level.homes.forEach(function(home) {
      home.draw(this.canvas, this.context);
    }, this)
  }

  drawPurpleRow(yCoord, sprite) {
    for (let i = 0; i < 19; i++) {
      this.context.drawImage(this.image, sprite.sourceX, sprite.sourceY,
        sprite.sourceWidth, sprite.sourceHeight, 54 * i,
        yCoord, sprite.sourceWidth, sprite.sourceHeight)
    }
  }

  drawBackground() {
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 662.5, this.canvas.width, 87.5);
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 462.5, this.canvas.width, 200);
    this.context.fillStyle = '#000047';
    this.context.fillRect(0, 0, this.canvas.width, 412.5);

    const purpleSquare = new Sprite(53, 480, 54, 52);

    const BottomRight = new Sprite(1440, 800, 23, 23)

    const BottomLeft = new Sprite(1337, 800, 23, 23)

    const Left = new Sprite(1440, 747, 23, 26)

    const Right = new Sprite(1337, 747, 23, 26);

    const TopRight = new Sprite(1333, 693, 27, 27);

    const TopLeft = new Sprite(1387, 693, 26, 27)

    const TopCenter = new Sprite(1440, 693, 27, 24);

    const Center = new Sprite(1388, 747, 25, 26);

    this.drawPurpleRow(410, purpleSquare)
    this.drawPurpleRow(662.5, purpleSquare)

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
    this.level.drawLives(this.context);
    this.level.drawVictory(this.context);
  }

  drawBlock(Block, startX, startY, counter) {
    for (let i = 0; i < counter; i++) {
      this.context.drawImage(this.image, Block.sourceX, Block.sourceY, Block.sourceWidth,
        Block.sourceHeight, startX + (215 * i), startY, Block.sourceWidth, Block.sourceHeight)
    }
  }
}

module.exports = Game;
