var GamePiece = require('./GamePiece.js')

class Obstacle extends GamePiece {
  constructor(x, y, height, width, imageSrc) {
    super(x, y, height, width, imageSrc);
    this.image = new Image();
    this.image.src = imageSrc;
  }

  scrollRight() {
    this.x += .5;
    return this;
  }

  scrollLeft() {
    this.x -= .5;
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