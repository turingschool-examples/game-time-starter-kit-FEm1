import Centipede from '../lib/centipede';
import Exterminator from '../lib/exterminator';
import Obstacle from '../lib/Obstacle';
const canvas = document.querySelector('#game');
const c = canvas.getContext('2d');
const centipede = new Centipede();
const exterminator = new Exterminator(440, 560, 30, 10, 10);
const obstacle = new Obstacle();

import collision from '../lib/Collision'

centipede.populate(c);
obstacle.populate(c);


const animate = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  exterminator.populate(c);
  centipede.move(c);
  collision.bulletCentipedeCollision(exterminator, centipede, obstacle);
  exterminator.moveBullets(c);
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

window.addEventListener('keyup', function (keycode) {
  exterminator.move(keycode);
});
