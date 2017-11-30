var GamePiece = require('./GamePiece.js')

class Obstacle extends GamePiece {
  constructor(x, y, height, width) {
    super(x, y, height, width);
  }

  scroll() {
    this.x += 1;
    return this;
  }

  reset(canvasWidth) {
    if (this.x === canvasWidth) {
      this.x = 0;
    }
  }
}

module.exports = Obstacle;