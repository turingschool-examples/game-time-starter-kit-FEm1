const GamePiece = require('./gamePiece')

class Exterminator extends GamePiece {
  constructor(x, y, height, width) {
    super(x, y);
    this.height = 100;
    this.width = 100;
  };
  draw(c) {
    c.beginPath();
    c.rect(this.x, this.y, this.height, this.width);
    c.fill();
  }
};


module.exports = Exterminator;