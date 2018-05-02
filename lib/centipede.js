class Centipede {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 30;
    this.height = 25;
    this.width = 25;
  }

  draw(c) {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fill();
    return this;
  }

  erase(c) {
    c.clearRect(this.x - this.radius, this.y - this.radius,
      this.radius * 2, this.radius * 2)
    return this
  }

  move() {
    this.x++
    return this
  }
}

module.exports = Centipede;