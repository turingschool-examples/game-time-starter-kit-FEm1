class GamePiece {
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
}

module.exports = GamePiece;