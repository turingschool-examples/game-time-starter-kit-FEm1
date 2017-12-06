class GamePiece {
  constructor(x, y, width, height, imageSrc) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.image = new Image()
    this.image.src = imageSrc;
  }
  
  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    return this;
  }
}

module.exports = GamePiece;