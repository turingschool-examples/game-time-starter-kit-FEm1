var GamePiece = require('./GamePiece.js')

class Obstacle extends GamePiece {
  constructor(x, y, height, width) {
    super(x, y, height, width);
  }

  scrollRight() {
    this.x += 1;
    return this;
  }

  scrollLeft() {
    this.x -=1;
    return this;
  }

  resetRight(canvasWidth) {
    if (this.x === canvasWidth) {
      this.x = 0;
    }
  }

  resetLeft(canvas) {
    if (this.x === 0) {
      this.x = canvas.width
    }
  }
}

module.exports = Obstacle;