class Block {
  constructor(x, y, width = 10, height = 10) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = width;
  }
  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }
  move(){
    this.x++;
    return this;
  }
}

module.exports = Block;