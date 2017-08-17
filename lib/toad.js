class Toad {
  constructor (x = 475, y = 575, status = 'safe') {
    this.xCoord = x;
    this.yCoord = y;
    this.width = 50;
    this.height = 50;
    this.status = status;
    this.counter = 50;
  }
  drawToad (context) {
    if (this.status === 'safe') {
      context.fillStyle = 'lightgreen';
      context.fillRect(this.xCoord, this.yCoord, this.width, this.height);
    }
    if (this.status === 'dead') {
      this.counter--;
      if (this.counter > 0) {
        context.fillStyle = 'lightgreen';
        context.fillRect(this.xCoord, this.yCoord, this.width, this.counter);
      }
      if (this.counter < -30) {
        this.xCoord = 475;
        this.yCoord = 575;
        this.counter = 50;
        this.status = 'safe'
      }
    }
  }
  moveToad (direction, canvas) {
    if (this.status === 'safe') {
      if (direction === 'left' && this.xCoord > 67) {
        this.xCoord = this.xCoord - 67;
      }
      if (direction === 'right' && this.xCoord < canvas.width - 67) {
        this.xCoord = this.xCoord + 67;
      }
      if (direction === 'up' && this.yCoord > 50) {
        this.yCoord = this.yCoord - 50;
      }
      if (direction === 'down' && this.yCoord < 575) {
        this.yCoord = this.yCoord + 50;
      }
    }
  }
}

module.exports = Toad;
