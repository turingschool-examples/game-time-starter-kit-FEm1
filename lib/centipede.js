import Segment from './Segment';

class Centipede {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 5;
    this.dy = 1;
    this.radius = 30;
    this.centipedeArray = []
  }

  populate(c) {

    let x = -20;
    let y = 30;

    for (let i = 0; i < 10; i++) {
      x += 60;
      const segment = new Segment(x, y);

      this.centipedeArray.push(segment);

      c.beginPath();
      c.arc(segment.x, segment.y, segment.radius, 0, Math.PI * 2, false);
      // c.rect(this.x, this.y, this.width, this.height);
      c.fill();
    }
  }

  move(c) {

    this.centipedeArray.forEach(segment => {

      segment.x += segment.dx

      c.beginPath();
      c.arc(segment.x, segment.y, segment.radius, 0, Math.PI * 2, false);
      c.fill();
    
      if (segment.x + segment.radius > 1000) {
        segment.y += segment.radius * 2;
        segment.dx = -segment.dx;
      } else if (segment.x - segment.radius < 0) {
        segment.y += segment.radius * 2;
        segment.dx = -segment.dx;
      }
    })
  }
}

export default Centipede;