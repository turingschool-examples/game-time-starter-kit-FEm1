import Centipede from '../lib/Centipede';
import Exterminator from '../lib/Exterminator';
import Obstacle from '../lib/Obstacle';
import collision from '../lib/Collision';

const centipede = new Centipede();
const exterminator = new Exterminator(440, 560, 30, 10, 10);
const obstacle = new Obstacle();

const canvas = document.querySelector('#game');
const c = canvas.getContext('2d');

centipede.populate();
obstacle.populate();
obstacle.draw(c);

const animate = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  exterminator.draw(c);
  centipede.move();
  centipede.draw(c)
  collision.bulletCentipedeCollision(exterminator, centipede, obstacle);
  exterminator.moveBullets();
  exterminator.drawBullets(c)
  obstacle.persist(c);

  requestAnimationFrame(animate);
};

animate();

window.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
  case 37:
    exterminator.move('left')
    break;
  case 39:
    exterminator.move('right')
    break;
  case 38:
    exterminator.move('up')
    break;
  case 40:
    exterminator.move('down')
    break;
  case 32:
    exterminator.populateBullets(c, 'space')
    break;
  }
});

