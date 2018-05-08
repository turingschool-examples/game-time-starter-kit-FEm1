import GamePiece from './GamePiece';
import Mushroom from './Mushroom';

class Obstacle extends GamePiece {
  constructor(x, y, radius, dx, dy) {
    super(x, y, radius, dx, dy)
    this.mushroomArray = [];

  }

  populate() {

    for (let i = 0; i < 5; i++) {
      let x = Math.floor((Math.random() * 800) + 100);
      let y = Math.floor((Math.random() * 400) + 150);
      const mushroom = new Mushroom(x, y);
      
      this.mushroomArray.push(mushroom);
    }
  }
  
  draw(c) {
    this.mushroomArray.forEach(mushroom => {
      
      c.beginPath()
      c.arc(mushroom.x, mushroom.y, mushroom.radius, 0, Math.PI * 2, false);
      c.fill()
      c.closePath();
    })
  }

  persistArray(c) {
    this.mushroomArray.forEach(mushroom => {
      c.beginPath();
      c.arc(mushroom.x, mushroom.y, mushroom.radius, 0, Math.PI * 2, false);
      c.fill();
      c.closePath();
    })
  }
}
export default Obstacle;