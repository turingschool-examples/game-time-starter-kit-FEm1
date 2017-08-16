class Home{
  constructor(x, y, squareWidth, squareHeight){
    this.hasToad = false;
    this.hasBonus = false;
    this.hasMonster = false;
    this.xCoord = x;
    this.yCoord = y;
    this.width = squareWidth;
    this.height = squareHeight;
  }
  draw(canvas, context){
    context.fillStyle = 'black';
    context.fillRect(this.xCoord, this.yCoord, this.width, this.height)
  }
}

module.exports = Home;
