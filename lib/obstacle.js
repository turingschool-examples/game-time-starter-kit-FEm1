class Obstacle {
  constructor(x, y, width, velocity, gap, offset, color) {
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.width = width;
    this.height = 46;
    this.velocity = velocity;
    this.gap = gap;
    this.offset = offset;
    this.color = color;
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
