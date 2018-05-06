import GamePiece from './gamePiece';

class Mushroom extends GamePiece {
  constructor(x, y, radius, dx, dy) { 
    super(x, y, radius, dx, dy)
    this.x = x
    this.y = y 
    this.radius = 15;
  }
}

export default Mushroom;