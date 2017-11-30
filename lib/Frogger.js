var GamePiece = require('./GamePiece.js')

class Frogger extends GamePiece {
  constructor(x, y, height, width) {
    super(x, y, height, width)
    this.alive = true;
    this.lives = 3;
  }

  move(event) {
    if (event.key === 'ArrowUp') {
      this.y -= 35;
    }
    if (event.key === 'ArrowDown') {
      this.y += 35;
    } 
    if (event.key === 'ArrowLeft') {
      this.x -= 20;
    }
    if (event.key === 'ArrowRight') {
      this.x += 20;
    }
  }
}

module.exports = Frogger;