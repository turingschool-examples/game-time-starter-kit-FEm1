let Block = require('./block.js');

class Snake {
  constructor(context) {
    this.createSnake = this.createSnake.bind(this);
    this.body = [];
    this.context = context;
    this.direction = 'right';
    this.head = null;
  }

  createSnake() {
    for (let x = 100; x < 150; x += 10) {
      var block = new Block(x, 250);
      this.body.push(block);
    }
    this.body.forEach((block) => block.draw(this.context)) 
  }

  moveSnake() {
    let tail = this.body.shift();
    this.head = this.body[this.body.length - 1];
    
    if (this.direction === 'down') {
      tail.x = this.head.x;
      tail.y = this.head.y + 10;
    } else if (this.direction === 'up') {
      tail.x = this.head.x;
      tail.y = this.head.y - 10;
    } else if (this.direction === 'right') {
      tail.x = this.head.x + 10;
      tail.y = this.head.y;
    } else if (this.direction === 'left') {
      tail.x = this.head.x - 10;
      tail.y = this.head.y;
    }
    this.body.push(tail);
    this.body.forEach((block) => block.draw(this.context)) 
  }

    growSnake() {
      let oldTail = this.body[0];
      let x;
      let y;
      if (this.direction === 'down') {
        x = oldTail.x;
        y = oldTail.y - 10;
      } else if (this.direction === 'up') {
        x = oldTail.x;
        y = oldTail.y + 10;
      } else if (this.direction === 'right') {
        x = oldTail.x - 10;
        y = oldTail.y;
      } else if (this.direction === 'left') {
        x = oldTail.x + 10;
        y = oldTail.y;
      }
      let newTail = new Block(x, y);
      this.body.unshift(newTail);
    }
}




module.exports = Snake;