let Block = require('./block.js');
// let Index = require('./index.js');
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
    this.context.clearRect(0, 0, 500, 500)
    this.snake.moveSnake()

    // this.block.draw(this.context);
    // this.block.move();
    
    window.requestAnimationFrame(this.gameLoop)
  }
}
//window.requestAnimationFrame(gameLoop);
module.exports = Game;

// [100, 250],[110, 250], [120, 250], [130, 250]