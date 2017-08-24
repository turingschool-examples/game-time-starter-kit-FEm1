class Home {
  constructor(x, y, squareWidth, squareHeight, timer, score) {
    this.hasToad = false;
    this.hasBonus = false;
    this.hasMonster = false;
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.width = squareWidth;
    this.height = squareHeight;
    this.color = 'black'
    this.timer = timer;
    this.score = score;
  }
  draw(canvas, context) {
    context.fillStyle = this.color;
    context.fillRect(this.xCoordinate, this.yCoordinate, this.width, this.height)
  }
  safe() {
    console.log("home Safe!");
    this.score.addScore(50 + (10 * Math.floor(this.timer.timeRemaining * 2)))
    this.color = 'lightgreen';
    this.hasToad = true;
  }
}

module.exports = Home;
