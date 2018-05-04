class Centipede {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 5;
    this.dy = 1;
    this.radius = 30;
  }

  draw(c) {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // c.rect(this.x, this.y, this.width, this.height);
    c.fill();

      
  }

  erase(c) {
    c.beginPath()
    c.clearRect(this.x - (this.radius + 2), this.y - this.radius, this.radius * 2, this.radius * 2)
    c.closePath()
    return this
  }
}

module.exports = Centipede;