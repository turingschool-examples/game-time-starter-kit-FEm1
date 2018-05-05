import GamePiece from './gamePiece';

class Segment {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 5;
    this.dy = 1;
    this.radius = 30;
  }
}

export default Segment;