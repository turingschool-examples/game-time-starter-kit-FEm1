import GamePiece from './gamePiece';

class Exterminator extends GamePiece {
  constructor(x, y, height, width) {
    super(x, y);
    this.height = 100;
    this.width = 100;
  }
  draw(c) {
    let x = 100;
    let y = 200;
    const exterminator = new Exterminator(x, y);

    c.beginPath();
    c.rect(exterminator.x, exterminator.y, exterminator.height, exterminator.width);
    c.fill();
  }
}

export default Exterminator;