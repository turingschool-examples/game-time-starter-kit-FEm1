import GamePiece from './gamePiece';
import Keyboard from './Keyboard'

class Exterminator extends GamePiece {
  constructor(x, y, radius, dx = 2, dy, height, width) {
    super(x, y, radius, dx, dy);
    this.height = 100;
    this.width = 100;
  }

  move(string) { 
      console.log(string);

    if (string === 'left' && this.x >= 60) {
      this.x -= this.dx
    } else if (string === 'right' && this.x <= 940) {
      this.x += this.dx
    } else if (string === 'up' && this.y >= 60) {
      this.y -= this.dy
    } else if (string === 'down' && this.y <= 540) {
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