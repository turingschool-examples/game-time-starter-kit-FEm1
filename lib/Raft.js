var GamePiece = require('./GamePiece.js')

class Raft extends Obstacle {
  constructor(x, y, height, width) {
    super(x, y, height, width);
  }
}

module.exports = Obstacle;