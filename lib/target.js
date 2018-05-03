let Block = require('./block.js');

class Target extends Block {
  constructor(x, y, width, height) {
    super (width, height);
    this.x = Math.floor(Math.random() * 51) * 10
    this.y = Math.floor(Math.random() * 51) * 10
    console.log(this.x)
  }
}

module.exports = Target;