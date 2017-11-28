var GamePiece = require('./GamePiece.js')

class Frogger extends GamePiece {
  constructor(x, y, height, width) {
    super(x, y, height, width)
  }
  move(event) {
    if(event.key === 'ArrowUp') {
      this.y -= 25;
    }
    if(event.key === 'ArrowDown'){
      this.y += 25;
    } 
    if(event.key === 'ArrowLeft') {
      this.x -= 20;
    }
    if(event.key === 'ArrowRight'){
      this.x += 20;
    }
  }
}

module.exports = Frogger;