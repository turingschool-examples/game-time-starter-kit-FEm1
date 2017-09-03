const Sprite = require('./Sprite.js');
const sprImage = document.getElementById('source');
const shortLogImage = new Sprite(1663, 1023, 140, 34);
const mediumLogImage = new Sprite(1557, 1611, 193, 33);
const longLogImage = new Sprite(1397, 1717, 300, 33);

const turtleSub1 = new Sprite(1397, 1824, 33, 33);
const turtleSub2 = new Sprite(1790, 487, 47, 43);
const turtle1 = new Sprite(1443, 493, 44, 30);
const turtle2 = new Sprite(1520, 490, 50, 37);
const turtle3 = new Sprite(1600, 490, 50, 37);


class Platform {
  constructor(x, y, width, velocity, gap, offset) {
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.height = 46;
    this.width = width;
    this.velocity = velocity;
    this.gap = gap;
    this.offset = offset;
  }
  move() {
    this.xCoordinate += this.velocity;
  }
  draw (canvas, context) { //included canvas to avoid hard-coding width
    this.move();
    if (this.velocity > 0 && this.xCoordinate > canvas.width + this.offset) {
      this.xCoordinate = -this.width;
    } else if (this.velocity < 0 && this.xCoordinate < 0 - this.width - this.offset) {
      this.xCoordinate = canvas.width;
    }
    context.fillStyle = '#000047';
    context.fillRect(this.xCoordinate, this.yCoordinate, this.width, this.height);
    if (this.width < 268) {
      context.drawImage(sprImage, shortLogImage.sourceX, shortLogImage.sourceY, shortLogImage.sourceWidth, shortLogImage.sourceHeight,
        this.xCoordinate, this.yCoordinate, this.width, this.height);
    } else if (this.width < 469) {
      context.drawImage(sprImage, mediumLogImage.sourceX, mediumLogImage.sourceY, mediumLogImage.sourceWidth, mediumLogImage.sourceHeight,
        this.xCoordinate, this.yCoordinate, this.width, this.height);
    } else {
      context.drawImage(sprImage, longLogImage.sourceX, longLogImage.sourceY, longLogImage.sourceWidth, longLogImage.sourceHeight,
        this.xCoordinate, this.yCoordinate, this.width, this.height);
    }
  }
}
class Turtle extends Platform {
  constructor(x, y, width, velocity, gap, offset, disappears) {
    super(x, y, width, velocity, gap, offset)
    this.disappears = disappears;
    this.submerged = false;
    this.timer = 0;
  }
  draw(canvas, context) {
    let image = turtle1;

    this.move();
    if (this.velocity > 0 && this.xCoordinate > canvas.width + this.offset) {
      this.xCoordinate = -this.width;
    } else if (this.velocity < 0 && this.xCoordinate < 0 - this.width - this.offset) {
      this.xCoordinate = canvas.width;
    }
    if (this.disappears) {
      this.timer++;
      if (this.timer > 90) {
        image = turtleSub1;
      }
      if (this.timer > 120) {
        image = turtleSub2;
        this.submerged = true;
      }
      if (this.timer > 150) {
        image = {};
      }
      if (this.timer > 180) {
        image = turtleSub2;
      }
      if (this.timer > 210) {
        image = turtleSub1;
        this.submerged = false;
      }
      if (this.timer > 240) {
        image = turtle1;
        this.timer = 0;
      }
    }
    context.fillStyle = '#000047';
    context.fillRect(this.xCoordinate, this.yCoordinate, this.width, this.height);
    for (let i = 0; i < ((this.width / 50) - 1); i++) {
      context.drawImage(sprImage, image.sourceX, image.sourceY, image.sourceWidth, image.sourceHeight,
        this.xCoordinate + (i * (55)), this.yCoordinate, 50, 46);
    }
  }
}

class Crocodile extends Platform {
  constructor(x, y, width, velocity) {
    super(x, y, width, velocity)
    this.mouthOpen = false;
  }
}

module.exports = {Platform, Turtle, Crocodile};
