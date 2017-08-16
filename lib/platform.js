class Platform {
  constructor(x, y, width, velocity) {
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.width = width;
    this.velocity = velocity;
  }
  move(){
    this.xCoordinate += this.velocity;
  }
}
class Turtle extends Platform {
  constructor(x, y, width, velocity, disappears){
    super(x, y, width, velocity)
    this.disappears = disappears;
    this.submerged = false;
  }
}

class Crocodile extends Platform {
  constructor(x, y, width, velocity){
    super(x, y, width, velocity)
    this.mouthOpen = false;
  }
}

module.exports = {Platform, Turtle, Crocodile};
