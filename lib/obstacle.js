class Obstacle {
  constructor(x, y, width, height, velocity) {
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.width = width;
    this.height = height;
    this.velocity = velocity;
  }
  drawObstacle (context){
    context.fillStyle = 'red';
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
  constructor(x, y, width, height, velocity) {
    super(x, y, width, height, velocity);
  }
}

class Tractor extends Auto {
  constructor(x, y, width, height, velocity) {
    super(x, y, width, height, velocity);
  }
}

class SlowCar extends Auto {
  constructor(x, y, width, height, velocity) {
    super(x, y, width, height, velocity);
  }
}

class SportsCar extends Auto {
  constructor(x, y, width, height, velocity) {
    super(x, y, width, height, velocity);
  }
}

class FastCar extends Auto {
  constructor(x, y, width, height, velocity) {
    super(x, y, width, height, velocity);
  }
}

module.exports = {Obstacle, Auto, Tractor, SlowCar, SportsCar, FastCar, Snake};
