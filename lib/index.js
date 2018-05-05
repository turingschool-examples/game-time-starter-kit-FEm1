import Centipede from '../lib/centipede';
import Exterminator from '../lib/exterminator';
import Segment from '../lib/Segment.js'
import Game from '../lib/game'
const canvas = document.querySelector('#game');
const c = canvas.getContext('2d');
const centipede = new Centipede(0,0);
import Mushroom from '../lib/Mushroom';

centipede.populate(c);


const animate = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  centipede.move(c);
  requestAnimationFrame(animate);
};

animate();
