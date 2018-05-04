const Centipede = require('../lib/centipede');
const Exterminator = require('../lib/exterminator');
const canvas = document.querySelector('#game');
const c = canvas.getContext('2d');
let centipedeArray = []

canvas.height = 600;
canvas.width = 1000;

const centipedeBody = () => {
  let x = -30;
  let y = 30;

  for (let i = 0; i < 10; i++) {
    x += 75;
    const centipede = new Centipede(x, y);

    centipede.draw(c);
    centipedeArray.push(centipede);
  }
}

const exterminatorBody = () => {
  let x = 100;
  let y = 200;
  const exterminator = new Exterminator(x, y);

  exterminator.draw(c);
}

exterminatorBody();

centipedeBody();

const animate = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  exterminatorBody();
  centipedeArray.map(segment => {

    segment.draw(c)
   
    segment.x += segment.dx

    if (segment.x + segment.radius > 1000) {
      segment.y += segment.radius - 10;
      segment.dx -= 2;
    } else if (segment.x - segment.radius < 0) {
      segment.y += segment.radius - 10;
      segment.dx += 2;
    }
  })
  requestAnimationFrame(animate);
};

animate();

module.exports = Centipede;