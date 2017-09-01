const Sprite = require('./Sprite.js');
const sprImage = document.getElementById('source');
const slowCarImage = new Sprite(350, 1130, 50, 33);
const fastCarImage = new Sprite(57, 1123, 50, 47);
const tractorImage = new Sprite(138, 1127, 45, 40);
const semiImage = new Sprite(223, 1130, 90, 33);


class Obstacle {
  constructor(x, y, width, velocity, gap, offset, color, image) {
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.width = width;
    this.height = 46;
    this.velocity = velocity;
    this.gap = gap;
    this.offset = offset;
    this.color = color;
    this.image = image;
  }
  drawObstacle(canvas, context) {
    this.moveObstacle();
    if (this.velocity > 0 && this.xCoordinate > canvas.width + this.offset) {
      this.xCoordinate = -this.width;
    } else if (this.velocity < 0 && this.xCoordinate < 0 - this.width - this.offset) {
      this.xCoordinate = canvas.width;
    }
    context.fillStyle = this.color;
    context.fillRect(this.xCoordinate, this.yCoordinate, this.width, this.height);
    if (this.constructor.name == 'SlowCar') {
      context.drawImage(sprImage, slowCarImage.sourceX, slowCarImage.sourceY, slowCarImage.sourceWidth, slowCarImage.sourceHeight,
        this.xCoordinate, this.yCoordinate, this.width, this.height)
    } else if (this.constructor.name == 'FastCar') {
      context.drawImage(sprImage, fastCarImage.sourceX, fastCarImage.sourceY, fastCarImage.sourceWidth, fastCarImage.sourceHeight,
        this.xCoordinate, this.yCoordinate, this.width, this.height)
    } else if (this.constructor.name == 'Tractor') {
      context.drawImage(sprImage, tractorImage.sourceX, tractorImage.sourceY, tractorImage.sourceWidth, tractorImage.sourceHeight,
        this.xCoordinate, this.yCoordinate, this.width, this.height)
    } else if (this.constructor.name == 'Semi') {
      context.drawImage(sprImage, semiImage.sourceX, semiImage.sourceY, semiImage.sourceWidth, semiImage.sourceHeight,
        this.xCoordinate, this.yCoordinate, this.width, this.height)
    }
  }
  moveObstacle() {
    this.xCoordinate += this.velocity;
  }
}

class Snake extends Obstacle {
  constructor(x, y, width, height, velocity, isOnLog) {
    super(x, y, width, height, velocity);
    this.isOnLog = isOnLog;
  }
  moveObstacleOnLog() {
    // determine if snake is on log
    // if yes
      // move snake in x direction
      // detect edge of log
      // turn around at log's edge
    //if no
      // call moveObstacle
  }
}

class Auto extends Obstacle {
  constructor(x, y, width, height, velocity, gap, offset) {
    super(x, y, width, height, velocity, gap, offset);
  }
}

class Tractor extends Auto {
  constructor(x, y, width, height, velocity, gap, offset) {
    super(x, y, width, height, velocity, gap, offset);
  }
}

class SlowCar extends Auto {
  constructor(x, y, width, height, velocity, gap, offset) {
    super(x, y, width, height, velocity, gap, offset);
  }
}

class Semi extends Auto {
  constructor(x, y, width, height, velocity, gap, offset) {
    super(x, y, width, height, velocity, gap, offset);
  }
}

class FastCar extends Auto {
  constructor(x, y, width, height, velocity, gap, offset) {
    super(x, y, width, height, velocity, gap, offset);
  }
}

module.exports = {Obstacle, Auto, Tractor, SlowCar, Semi, FastCar, Snake};
