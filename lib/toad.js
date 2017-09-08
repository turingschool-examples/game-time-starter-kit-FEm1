const Sprite = require('./Sprite.js');
const toadImage = document.getElementById('toadSource');
const deathImage = document.getElementById('death-image');
const ToadLAnimation = [new Sprite(302, 62, 37, 37), new Sprite(382, 64, 37, 30), new Sprite(457, 60, 35, 38)];
const ToadUAnimation = [new Sprite(62, 62, 37, 38), new Sprite(145, 62, 30, 35), new Sprite(221, 60, 37, 32)];
const ToadRAnimation = [new Sprite(302, 12, 37, 37), new Sprite(382, 14, 37, 30), new Sprite(457, 10, 35, 38)];
const ToadDAnimation = [new Sprite(62, 12, 37, 38), new Sprite(145, 12, 30, 35), new Sprite(221, 10, 37, 32)];
const deathAni = [new Sprite(110, 6, 56, 56), new Sprite(190, 6, 56, 56),
  new Sprite(270, 6, 56, 56), new Sprite(5, 6, 56, 56)]

class Toad {
  constructor (x = 475, y = 662.5, status = 'safe', homes, score, timer, level, image) {
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.width = 37;//50;
    this.height = 37;//50;
    this.status = status;
    this.counter = 50;
    this.homes = homes;
    this.margin = 7;
    this.velocity = 0;
    this.score = score;
    this.timer = timer;
    this.level = level;
    this.toadMaxRow = 750;
    this.image = image;
    this.animationFrameTick = 0;
    this.ToadSprite = ToadUAnimation[2];
    this.ToadDirection = ToadUAnimation;
    this.changeDirX = 0;
    this.changeDirY = 0;
    this.toadStopped = true;
    this.toadRenderX = this.xCoordinate;
    this.toadRenderY = this.yCoordinate;
    this.respawnMove = false;

  }

  drawToad (context) {
    if (this.timer.timeRemaining <= 0 && this.status == 'safe') {
      this.status = 'dead';
      // this.level.death();
    }
    if (this.status === 'safe') {
      this.xCoordinate += this.velocity;
      this.toadRenderX += this.velocity;
      this.drawThatToad(this.ToadDirection, context);
      // context.fillStyle = 'lightgreen';
      // context.fillRect(this.xCoordinate, this.yCoordinate, this.width, this.height);
    }
    if (this.status === 'home') {
      this.xCoordinate = 488.5;
      this.yCoordinate = 669.5;
      this.velocity = 0;
    }

    if (this.status === 'dead') {
      this.timer.timerRunning = false;
      this.animationFrameTick ++;
      switch (this.animationFrameTick) {
      case 1:
        this.ToadSprite = deathAni[0];
        break;
      case 6:
        this.ToadSprite = deathAni[1];
        break;
      case 11:
        this.ToadSprite = deathAni[2];
        break;
      case 16:
        this.ToadSprite = deathAni[3];
        break;
      case 76:
        this.animationFrameTick = 0;
        this.level.death();
        // this.respawnToad();
        // this.level.respawnToad = true;
        break;
      }
      context.drawImage(deathImage, this.ToadSprite.sourceX, this.ToadSprite.sourceY,
        this.ToadSprite.sourceWidth, this.ToadSprite.sourceHeight, this.toadRenderX - 7, this.toadRenderY - 7,
        this.ToadSprite.sourceWidth, this.ToadSprite.sourceHeight);
      // this.counter--;
      // if (this.counter > 0) {
      //   context.fillStyle = 'lightgreen';
      //   context.fillRect(this.xCoordinate, this.yCoordinate, this.width, this.counter);
      // }
      // if (this.counter < -30) {
      //   this.respawnToad();
      // }
    }
  }
  moveToad (direction, canvas) {
    if (this.status === 'safe') {
      if (direction === 'left' && this.xCoordinate > 67) {
        if (this.toadStopped) {
          this.ToadDirection = ToadLAnimation;
          this.changeDirX = -67;
          this.toadStopped = false;
        }
        // this.xCoordinate = this.xCoordinate - 67;
      }
      if (direction === 'right' && this.xCoordinate < canvas.width - 67) {
        if (this.toadStopped) {
          this.ToadDirection = ToadRAnimation;
          this.changeDirX = 67;
          this.toadStopped = false;
        }
        // this.xCoordinate = this.xCoordinate + 67;
      }
      if (direction === 'up') {
        if (this.yCoordinate > 187.5) {
          if (this.toadStopped) {
            this.ToadDirection = ToadUAnimation;
            this.changeDirY = -50;
            this.toadStopped = false;
            this.toadMove();
          }
          // this.yCoordinate = this.yCoordinate - 50;
          // this.toadMove();
        } else {
          let inHome = this.level.homes.filter(function(home) {
            return (this.xCoordinate > home.xCoordinate - this.margin && this.xCoordinate + this.width  < home.xCoordinate + home.width + this.margin)
          }, this)

          if (inHome.length && !inHome[0].hasToad) {
            inHome[0].safe();
            this.timer.timerRunning = false;
            this.timer.updateLastTime();
            this.status = 'home'
            this.level.homeSafe = true;
            // this.respawnToad();
          }
        }
      }
      if (direction === 'down' && this.yCoordinate < 662.5) {
        if (this.toadStopped) {
          this.ToadDirection = ToadDAnimation;
          this.changeDirY = 50;
          this.toadStopped = false;
        }
        // this.yCoordinate = this.yCoordinate + 50;
      }
    }
  }
  respawnToad() {
    if (!this.level.gameOver && this.level.run) {
      this.xCoordinate = 488.5;
      this.yCoordinate = 669.5;
      this.toadRenderX = this.xCoordinate;
      this.toadRenderY = this.yCoordinate;
      this.changeDirY = 0;
      this.changeDirX = 0;
      this.ToadDirection = ToadUAnimation;
      this.ToadSprite = this.ToadDirection[2];
      this.toadStopped = true;
      this.animationFrameTick = 0;
      this.counter = 50;
      this.velocity = 0;
      this.status = 'safe'
      this.toadMaxRow = 750;
      this.level.respawnToad = false;
      this.timer.timeRemaining = 60;
      this.respawnMove = false;
    }
  }
  toadMove() {
    if (this.yCoordinate < this.toadMaxRow) {
      this.toadMaxRow = this.yCoordinate;
      this.score.addScore(10);
    }
  }

  collisionDetection(autos, river) {
    if (this.status == 'safe') {
      autos.forEach(function(car) {
        if ((this.yCoordinate - 5 == car.yCoordinate) &&
      ((this.xCoordinate < car.xCoordinate + car.width && this.xCoordinate > car.xCoordinate) ||
      (this.xCoordinate + this.width > car.xCoordinate && this.xCoordinate + this.width < car.xCoordinate + car.width))) {
          this.status = 'dead';
        }
      }, this);
      let onRiverPlatform = river.filter(function(platform) {
        if (platform.constructor.name == 'Turtle') {
          return !platform.submerged &&
          this.yCoordinate - 5 == platform.yCoordinate &&
          this.xCoordinate > platform.xCoordinate - this.margin &&
          this.xCoordinate + this.width < platform.xCoordinate + platform.width + this.margin
        } else if (platform.constructor.name == 'Platform') {
          return (this.yCoordinate - 5 == platform.yCoordinate) &&
            this.xCoordinate > platform.xCoordinate - this.margin &&
            this.xCoordinate + this.width < platform.xCoordinate + platform.width + this.margin
        }
      }, this)

      if (onRiverPlatform.length > 0) {
        this.velocity = onRiverPlatform[0].velocity;
      }
      if (!onRiverPlatform.length) {
        this.velocity = 0;
      }
      if (onRiverPlatform.length == 0 && this.yCoordinate < 412.5) {
        this.status = 'dead';
      }
    }
  }

  animateThatToad(ToadDirection) {
    switch (this.animationFrameTick) {
    case 0:
      this.ToadSprite = ToadDirection[2];
      break;
    case 2:
      this.ToadSprite = ToadDirection[1];
      this.toadRenderX += this.changeDirX * (.25);
      this.toadRenderY += this.changeDirY * (.25);
      break;
    case 4:
      this.ToadSprite = ToadDirection[0];
      this.toadRenderX += this.changeDirX * (.25);
      this.toadRenderY += this.changeDirY * (.25);
      break;
    case 6:
      this.xCoordinate += this.changeDirX;
      this.yCoordinate += this.changeDirY;
      this.ToadSprite = ToadDirection[0];
      this.toadRenderX += this.changeDirX * (.25);
      this.toadRenderY += this.changeDirY * (.25);
      break;
    case 8:
      this.ToadSprite = ToadDirection[2];
      this.toadRenderX += this.changeDirX * (.25);
      this.toadRenderY += this.changeDirY * (.25);
      this.animationFrameTick = 0;
      this.toadStopped = true;
      this.changeDirX = 0;
      this.changeDirY = 0;
      break;
    }
    this.animationFrameTick++;
  }

  drawThatToad(ToadDirection, context) {
    if (!this.toadStopped) {
    // ToadSprite = animateThatToad(ToadDirection);
      this.animateThatToad(ToadDirection);
    }
    context.drawImage(toadImage, this.ToadSprite.sourceX, this.ToadSprite.sourceY,
      this.ToadSprite.sourceWidth, this.ToadSprite.sourceHeight, this.toadRenderX,
      this.toadRenderY, this.ToadSprite.sourceWidth, this.ToadSprite.sourceHeight);
  }

  // evalInput(event) {
  //   event.preventDefault();
  //   console.log(this);
  //   if (!this.respawnMove) {
  //     console.log('woo');
  //     this.respawnMove = true;
  //     this.timer.timerRunning = true;
  //   }
  //   if (this.toadStopped) {
  //     if (event.keyCode === 37) {
  //       this.ToadDirection = ToadLAnimation;
  //       this.changeDirX = -67;
  //       this.toadStopped = false;
  //     } else if (event.keyCode === 38) {
  //       this.ToadDirection = ToadUAnimation;
  //       this.changeDirY = -50;
  //       this.toadStopped = false;
  //     } else if (event.keyCode === 39) {
  //       this.ToadDirection = ToadRAnimation;
  //       this.changeDirX = 67;
  //       this.toadStopped = false;
  //     } else if (event.keyCode === 40) {
  //       this.ToadDirection = ToadDAnimation;
  //       this.changeDirY = 50;
  //       this.toadStopped = false;
  //     // } else if (event.keyCode === 72) {
  //     //   game.winLevel();
  //     }
  //   }
  // }
// if (this.toadStopped) {
//   this.ToadDirection = ToadLAnimation;
//   this.changeDirX = -67;
//   this.toadStopped = false;
// }

}

module.exports = Toad;
