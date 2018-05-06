import GamePiece from './gamePiece';

class Exterminator extends GamePiece {
  constructor(x, y, radius, dx = 2, dy) {
    super(x, y, radius, dx, dy);
    this.height = 100;
    this.width = 100;
  }

  move(string) { 

    if (string === 'left' && this.x >= 60) {
      this.x -= this.dx
    } else if (string === 'right' && this.x <= 940) {
      this.x += this.dx
    } else if (string === 'up' && this.y >= 450) {
      this.y -= this.dy
    } else if (string === 'down' && this.y <= 560) {
      this.y += this.dy
    }
  }

  populate(c) {
    // const exterminator = new Exterminator(440, 560, 30, 2, 0);

    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fill();
  }
}

export default Exterminator;