class Toad {
  constructor (x = 475, y = 575) {
    this.xCoord = x;
    this.yCoord = y;
  }
  drawToad (context){
    context.fillStyle = 'lightgreen';
    context.fillRect(this.xCoord, this.yCoord, 50, 50);
  }
  moveToad (direction) {
    if (direction === 'left') {
      this.xCoord = this.xCoord - 67;
    }
    if (direction === 'right') {
      this.xCoord = this.xCoord + 67;
    }
    if (direction === 'up') {
      this.yCoord = this.yCoord - 50;
    }
    if (direction === 'down') {
      this.yCoord = this.yCoord + 50;
    }
  }
}

module.exports = Toad;
