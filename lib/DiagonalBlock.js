var Block = require('./Block.js');

class DiagonalBlock extends Block {
  constructor (x, y, width, height, color) {
    super(x, y, width, height, color);
  }

  move ( direction ) {
    super.move( direction );
    this.y += direction.y;
  }
}

module.exports = DiagonalBlock;
