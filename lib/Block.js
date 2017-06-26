// Block.js
class Block {
  constructor (x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw (context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);  // x, y, width, height
  }

  move ( direction ) {
    this.x += direction.x;
  }
}

module.exports = Block;
