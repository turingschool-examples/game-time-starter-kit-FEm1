const Sprite = require('./Sprite.js');

// move to index.js
const sprImage = document.getElementById('source');

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
    // move out of drawObstacle
    this.moveObstacle();
    
    // if obstacle is moving right
    if (
      this.velocity > 0 && 
      this.xCoordinate > canvas.width + this.offset
    ) {
      
      this.xCoordinate = -this.width;

    // if obstacle is moving left
    } else if (
      this.velocity < 0 && 
      this.xCoordinate < 0 - this.width - this.offset
    ) {

      this.xCoordinate = canvas.width;
    }

    context.fillStyle = this.color;
    context.fillRect(this.xCoordinate, this.yCoordinate, this.width, this.height);

    this.drawImage(context);
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
}

class Auto extends Obstacle {
  constructor(x, y, width, height, velocity, gap, offset) {
    super(x, y, width, height, velocity, gap, offset);
  }

  drawImage(context) {
    context.drawImage(
      sprImage, 
      this.image.sourceX, 
      this.image.sourceY, 
      this.image.sourceWidth, 
      this.image.sourceHeight,
      this.xCoordinate, 
      this.yCoordinate, 
      this.width, 
      this.height
    )
  }
}

class Tractor extends Auto {
  constructor(x, y, width, height, velocity, gap, offset) {
    super(x, y, width, height, velocity, gap, offset);
    this.image = new Sprite(138, 1127, 45, 40);
  }
}

class SlowCar extends Auto {
  constructor(x, y, width, height, velocity, gap, offset) {
    super(x, y, width, height, velocity, gap, offset);
    this.image = new Sprite(350, 1130, 50, 33);
  }
}

class Semi extends Auto {
  constructor(x, y, width, height, velocity, gap, offset) {
    super(x, y, width, height, velocity, gap, offset);
    this.image = new Sprite(223, 1130, 90, 33);
  }
}

class FastCar extends Auto {
  constructor(x, y, width, height, velocity, gap, offset) {
    super(x, y, width, height, velocity, gap, offset);
    this.image = new Sprite(57, 1123, 50, 47);
  }
}

module.exports = {Obstacle, Auto, Tractor, SlowCar, Semi, FastCar, Snake};
