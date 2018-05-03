const Centipede = require('../lib/centipede');
const canvas = document.querySelector('#game');
const c = canvas.getContext('2d');
let centipedeArray = []

canvas.height = window.innerHeight;
canvas.width = 1200;

const centipedeBody = () => {
  let x = -50;
  let y = 30;

  for (let i = 0; i < 10; i++) {
    x += 75;
    const centipede = new Centipede(x, y);

    centipede.draw(c);
    centipedeArray.push(centipede);
  }
}

centipedeBody();

const animate = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);

  centipedeArray.map(segment => {

    segment.draw(c)
    segment.x += segment.dx

    if (segment.x + segment.radius > 1275) {
      segment.y += segment.radius - 10;
      segment.dx -= 2;
    } else if (segment.x - segment.radius < -75) {
      segment.y += segment.radius - 10;
      segment.dx += 2;
    }
  })


  requestAnimationFrame(animate);
};

animate();

module.exports = Centipede;