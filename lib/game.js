let Block = require('./block.js');
let Snake = require('./snake.js');
let Target = require('./target.js');


class Game {
  constructor(context) {
    this.gameLoop = this.gameLoop.bind(this);
    this.block = new Block(100, 100);
    this.context = context;
    this.snake = new Snake(this.context);
    this.target = new Target();
  }
  initialize(){
    this.snake.createSnake();
    this.target.draw(this.context);
  }

  drawTarget() {

  }

  gameLoop () {
    window.setTimeout(() => {     
      this.context.clearRect(0, 0, 500, 500)
      this.snake.moveSnake()
      window.requestAnimationFrame(this.gameLoop);
    }, 50);
  }
}
module.exports = Game;

