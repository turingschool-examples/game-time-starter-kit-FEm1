class Frogger {
  constructor(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }

  draw(context) {
    context.fillRect(this.x, this.y, this.height, this.width);
    return this;
  }

  moveUp() {
    this.y -= 10;
    return this;
  }

  moveDown() {
    this.y += 10;
    return this;
  }
 
}

module.exports = Frogger;