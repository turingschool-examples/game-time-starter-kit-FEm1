class Home {
  constructor(x, y, squareWidth, squareHeight) {
    this.hasToad = false;
    this.hasBonus = false;
    this.hasMonster = false;
    this.xCoord = x;
    this.yCoord = y;
    this.width = squareWidth;
    this.height = squareHeight;
    this.color = 'black'
  }
  draw(canvas, context) {
    context.fillStyle = this.color;
    context.fillRect(this.xCoord, this.yCoord, this.width, this.height)
  }
  safe() {
    console.log("home Safe!");
    this.color = 'lightgreen';
    this.hasToad = true;
  }
}

module.exports = Home;
