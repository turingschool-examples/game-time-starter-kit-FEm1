import GamePiece from './gamePiece';
import BulletPieces from './BulletPieces';

class Exterminator extends GamePiece {
  constructor(x, y, radius, dx = 2, dy) {
    super(x, y, radius, dx, dy);
    this.height = 100;
    this.width = 100;
    this.bulletsArray = [];
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
  populateBullets(c) {
    for (let i = 0; i < 5; i++) {
      const bulletPieces = new BulletPieces(10, 10);

      bulletPieces.x = this.x;
      bulletPieces.y = this.y;

      c.beginPath();
      c.arc(bulletPieces.x, bulletPieces.y, bulletPieces.radius, 0, Math.PI * 2, false);
      c.fill();
      this.bulletsArray.push(bulletPieces);
    }
  }

  moveBullets(c) {
    this.bulletsArray.forEach(bullet => {

      bullet.y -= 5;

      console.log(bullet);

      c.beginPath();
      c.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2, false);
      c.fill();
    });
  }
}

export default Exterminator;