import Centipede from '../lib/centipede';
import Exterminator from '../lib/exterminator';
import Obstacle from '../lib/Obstacle';
// import Segment from '../lib/Segment.js'
// import Game from '../lib/game'
const canvas = document.querySelector('#game');
const c = canvas.getContext('2d');
const centipede = new Centipede(0, 0);
const exterminator = new Exterminator(440, 560, 30, 10, 10);
const obstacle = new Obstacle(0, 0, 0, 0, 0);
import collision from '../lib/Collision'


centipede.populate(c);
obstacle.populate(c);
// exterminator.moveBullets(c, centipede);




const animate = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  exterminator.populate(c);
  centipede.move(c);
  collision.bulletCentipedeCollision(exterminator, centipede);
  exterminator.moveBullets(c);
  obstacle.persist(c);
  requestAnimationFrame(animate);
};

animate();



// move exterminator left
// key code left
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
