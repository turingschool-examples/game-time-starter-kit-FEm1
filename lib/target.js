let Block = require('./block.js');

class Target extends Block {
  constructor(x, y, width, height) {
    super(width, height);
    this.x = Math.floor(Math.random() * 49) * 10
    this.y = Math.floor(Math.random() * 49) * 10
  }
}

module.exports = Target;