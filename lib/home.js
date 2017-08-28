class Home {
  constructor(x, y, squareWidth, squareHeight, timer, score, image) {
    this.hasToad = false;
    this.hasBonus = false;
    this.hasMonster = false;
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.width = squareWidth;
    this.height = squareHeight;
    this.color = '#000047' //'black'
    this.timer = timer;
    this.score = score;
    this.image = image;
    this.winkTimer = 0;
    this.toadSafe1 = {
      sourceX: 1627,
      sourceY: 587,
      sourceWidth: 53,
      sourceHeight: 53,
    }
    this.toadSafe2 = {
      sourceX: 1706,
      sourceY: 587,
      sourceWidth: 53,
      sourceHeight: 53,
    }
  }
  draw(canvas, context) {
    if (this.hasToad) {
      context.drawImage(this.image, this.toadSafe1.sourceX, this.toadSafe1.sourceY, this.toadSafe1.sourceWidth, this.toadSafe1.sourceHeight, this.xCoordinate + 7, this.yCoordinate, this.toadSafe1.sourceWidth, this.toadSafe1.sourceHeight)
    } else {
      context.fillStyle = this.color;
      context.fillRect(this.xCoordinate, this.yCoordinate, this.width, this.height)
    }
  }
  safe() {
    this.score.addScore(50 + (10 * Math.floor(this.timer.timeRemaining * 2)))
    this.color = 'lightgreen';
    this.hasToad = true;
  }
}

module.exports = Home;
