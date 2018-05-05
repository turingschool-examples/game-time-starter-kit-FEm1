import Centipede from '../lib/centipede';
import Exterminator from '../lib/exterminator';
import Segment from '../lib/Segment.js'
import Game from '../lib/game'
import Keyboard from '../lib/Keyboard';
const canvas = document.querySelector('#game');
const c = canvas.getContext('2d');
const centipede = new Centipede(0, 0);
const exterminator = new Exterminator(440, 560, 30, 10, 10);
const keyboard = new Keyboard();

import Mushroom from '../lib/Mushroom';

centipede.populate(c);



const animate = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  exterminator.populate(c);
  centipede.move(c);
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
    exterminator.move('space')
    break;



  }
});

window.addEventListener('keyup', function (keycode) {
  exterminator.move(keycode);
});
