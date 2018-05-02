const Centipede = require('../lib/centipede');
const canvas = document.querySelector('#game');
const c = canvas.getContext('2d');
let centipedeArray = []

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const centipedeBody = () => {
  let x = -20;
  let y = 30;

  for (let i = 0; i < 10; i++) {
    x += 62;
    const centipede = new Centipede(x, y);
    centipede.draw(c);
    centipedeArray.push(centipede);
  }
}

centipedeBody();

const animate = () => {
  
  centipedeArray.forEach(segment => {
    segment.erase(c).move().draw(c)
  })
  requestAnimationFrame(animate);
};

animate();

module.exports = Centipede;