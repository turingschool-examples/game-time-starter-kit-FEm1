class Platform {
  constructor(x, y, width, velocity, gap) {
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.height = 46;
    this.width = width;
    this.velocity = velocity;
    this.gap = gap;
  }
  move(){
    this.xCoordinate += this.velocity;
  }
  draw(canvas, context){ //included canvas to avoid hard-coding width
    this.move();
    if (this.velocity > 0 && this.xCoordinate - this.width - this.gap > canvas.width){
      this.xCoordinate = -this.width;
    }
    else if (this.velocity < 0 && this.xCoordinate < 0 - this.width){
      this.xCoordinate = canvas.width + this.gap;
    }
    context.fillStyle = 'brown';
    context.fillRect(this.xCoordinate, this.yCoordinate, this.width, this.height);
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
