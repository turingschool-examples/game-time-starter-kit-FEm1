class Exterminator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.height = 100;
    this.width = 100;
  };
  draw(c) {
    c.beginPath();
    c.rect(this.x, this.y, this.height, this.width);
    c.fill();
  }
};


module.exports = Exterminator;