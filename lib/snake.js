let Block = require('./block.js');

class Snake {
  constructor(context) {
    this.createSnake = this.createSnake.bind(this);
    this.body = [];
    this.context = context;
  }
  createSnake() {
    for (let x = 100; x < 150; x += 10) {
      var block = new Block(x, 250);
      this.body.push(block);
    }
    console.log(this.body);
    this.body.forEach((block) => block.draw(this.context)) 
  }
  moveSnake(direction) {
    console.log(this.body)
    let tail = this.body.shift();
    let head = this.body[this.body.length-1];
    tail.x = head.x + 10;
    this.body.push(tail);
    this.body.forEach((block) => block.draw(this.context)) 
  }
}




module.exports = Snake;