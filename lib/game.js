let Block = require('./block.js');
let Snake = require('./snake.js');


class Game {
  constructor(context) {
    this.gameLoop = this.gameLoop.bind(this);
    this.block = new Block(100, 100);
    this.context = context;
    this.snake = new Snake(this.context);
  }
  initialize(){
    this.snake.createSnake();
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

