let Block = require('./block.js');

class Snake {
  constructor(context) {
    this.createSnake = this.createSnake.bind(this);
    this.body = [];
    this.context = context;
    this.direction = 'r'
  }

  createSnake() {
    for (let x = 100; x < 150; x += 10) {
      var block = new Block(x, 250);
      this.body.push(block);
    }
    console.log(this.body);
    this.body.forEach((block) => block.draw(this.context)) 
  }

  moveSnake() {
    let tail = this.body.shift();
    let head = this.body[this.body.length - 1];

    if (this.direction === 'd') {
      tail.x = head.x;
      tail.y = head.y + 10;
    } else if (this.direction === 'u') {
      tail.x = head.x;
      tail.y = head.y - 10;
    } else if (this.direction === 'r') {
      tail.x = head.x + 10;
      tail.y = head.y;
    } else if (this.direction === 'l') {
      tail.x = head.x - 10;
      tail.y = head.y;
    }


    this.body.push(tail);
    this.body.forEach((block) => block.draw(this.context)) 
  }
}




module.exports = Snake;