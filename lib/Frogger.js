var GamePiece = require('./GamePiece.js')

class Frogger extends GamePiece {
  constructor(x, y, height, width) {
    super(x, y, height, width)
  }

  moveUp() {
    this.y -= 25;
    return this;
  }

  moveDown() {
    this.y += 25;
    return this;
  }

   moveLeft() {
    this.x -= 20;
    return this;
  }

  moveRight() {
    this.x += 20;
    return this;
  } 
}

module.exports = Frogger;