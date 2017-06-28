class Player {
  constructor(x, y, width, height, color, directionRight, directionLeft) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.movingRight = directionRight;
    this.movingLeft = directionLeft;
    this.movingUp = false;
    this.movingDown = false;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  moveUp(direction) {
    if (this.movingUp === true) {
      this.y -= direction.y
    }
  }

  moveDown(direction) {
    if (this.movingDown === true) {
      this.y += direction.y
    }
  }

  moveLeft(direction) {
    if (this.movingLeft === true) {
      this.x -= direction.x
    }
  }

  moveRight(direction) {
    if (this.movingRight === true) {
      this.x += direction.x
    }
  }
}

module.exports = Player;
