import GamePiece from './gamePiece';
import Mushroom from './Mushroom';

class Obstacle extends GamePiece {
  constructor(x, y, radius, dx, dy) {
    super(x, y, radius, dx, dy)
    this.mushroomArray = [];

  }

  populate(c) {

    for (let i = 0; i < 20; i++) {
      let x = Math.floor((Math.random() * 1000) + 1);
      let y = Math.floor((Math.random() * 500) + 100);

      const mushroom = new Mushroom(x, y);

      this.mushroomArray.push(mushroom);


      c.beginPath()
      c.arc(mushroom.x, mushroom.y, mushroom.radius, 0, Math.PI * 2, false);
      c.fill()
    }
  }

  persist(c) {
    this.mushroomArray.forEach(mushroom => {
      c.beginPath();
      c.arc(mushroom.x, mushroom.y, mushroom.radius, 0, Math.PI * 2, false);
      c.fill();
    })
  }
}
export default Obstacle;