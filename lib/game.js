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
  }
  
  targetDetection() {
      if (this.snake.head.x > this.target.x - 10 &&
          this.snake.head.x < this.target.x && 
          this.snake.head.y === this.target.y){
          this.eatTarget();
      } else if (this.snake.head.x < this.target.x + 10 &&
          this.snake.head.x > this.target.x &&
          this.snake.head.y === this.target.y) {
          this.eatTarget();
      } else if (this.snake.head.x === this.target.x &&
        this.snake.head.y < this.target.y - 10 &&
        this.snake.head.y > this.target.y) {
          this.eatTarget()
      } else if (this.snake.head.x === this.target.x &&
        this.snake.head.y > this.target.y + 10 &&
        this.snake.head.y < this.target.y) {
          this.eatTarget()
      }
    }

    eatTarget() {
      this.target.x = Math.floor(Math.random() * 49) * 10;
      this.target.y = Math.floor(Math.random() * 49) * 10;
      this.snake.growSnake();
    }
    
    gameLoop () {
      window.setTimeout(() => {     
      this.context.clearRect(0, 0, 500, 500)
      this.target.draw(this.context);
      this.snake.moveSnake();
      this.targetDetection();
      window.requestAnimationFrame(this.gameLoop);
    }, 70);
  }
}
module.exports = Game;

