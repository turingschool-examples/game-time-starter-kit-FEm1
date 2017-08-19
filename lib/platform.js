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
  move(){
    this.xCoordinate += this.velocity;
  }
  draw(canvas, context){ //included canvas to avoid hard-coding width
    this.move();
    if (this.velocity > 0 && this.xCoordinate > canvas.width + this.offset){
      this.xCoordinate = -this.width;
    }
    else if (this.velocity < 0 && this.xCoordinate < 0 - this.width - this.offset){
      this.xCoordinate = canvas.width;
    }
    context.fillStyle = 'brown';
    context.fillRect(this.xCoordinate, this.yCoordinate, this.width, this.height);
  }
}
class Turtle extends Platform {
  constructor(x, y, width, velocity, gap, offset, disappears){
    super(x, y, width, velocity, gap, offset)
    this.disappears = disappears;
    this.submerged = false;
    this.timer = 0;
  }
  draw(canvas, context){
    let fill = 'magenta'
    this.move();
    if (this.velocity > 0 && this.xCoordinate > canvas.width + this.offset){
      this.xCoordinate = -this.width;
    }
    else if (this.velocity < 0 && this.xCoordinate < 0 - this.width - this.offset){
      this.xCoordinate = canvas.width;
    }
    if (this.disappears){
      this.timer++;
      if (this.timer > 90){
        fill = 'purple';
      }
      if (this.timer > 120){
        fill = 'darkblue';
        this.submerged = true;
      }
      if (this.timer > 150){
        fill = 'blue';
      }
      if (this.timer > 180){
        fill = 'darkblue';
      }
      if (this.timer > 210){
        fill = 'purple';
        this.submerged = false;
      }
      if (this.timer > 240){
        fill = 'magenta';
        this.timer = 0;
      }
    }
    context.fillStyle = fill;
    context.fillRect(this.xCoordinate, this.yCoordinate, this.width, this.height);
  }
}

class Crocodile extends Platform {
  constructor(x, y, width, velocity){
    super(x, y, width, velocity)
    this.mouthOpen = false;
  }
}

module.exports = {Platform, Turtle, Crocodile};
