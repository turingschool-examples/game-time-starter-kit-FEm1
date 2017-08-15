class Toad {
  constructor (x = 475, y = 575) {
    this.xCoord = x;
    this.yCoord = y;
  }
  drawToad (context){
    context.fillStyle = 'lightgreen';
    context.fillRect(this.xCoord, this.yCoord, 50, 50);
  }
}

module.exports = Toad;
