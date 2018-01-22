class Block {
  constructor (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.dx = 1.5;
    this.dy = 1.5;
  }

  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  move() {
    this.x = Math.floor(this.x + this.dx);
    this.y = Math.floor(this.y + this.dy);
    return this;
  }

  erase(ctx) {
    ctx.clearRect(this.x, this.y, this.width, this.height);
    return this;
  }
}

module.exports = Block;
