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
    this.gameOn = false;
    this.animation;
  }

  initialize(){
    this.snake.createSnake();
  }
  
  targetDetection() {
      if (this.snake.head.x  === this.target.x &&
          this.snake.head.y === this.target.y){
        console.log("nonmomom")
          this.eatTarget();
       }
      if (this.snake.head.x + 10 > 500 || this.snake.head.x < 0 ||
        this.snake.head.y + 10 > 500 || this.snake.head.y < 0) {
        this.gameOver()
      }
      for (let i = 0; i < this.snake.body.length -1; i++) {
        if (this.snake.head.x === this.snake.body[i].x && this.snake.head.y === this.snake.body[i].y) {
          this.gameOver();
        }
      }
    }

    eatTarget() {
      this.target.x = Math.floor(Math.random() * 49) * 10;
      this.target.y = Math.floor(Math.random() * 49) * 10;
      this.snake.growSnake();
    }
    
    gameLoop () {
      if (this.gameOn) {
        this.animation = window.setTimeout(() => {     
        this.context.clearRect(0, 0, 500, 500)
        this.target.draw(this.context);
        this.snake.moveSnake();
        this.targetDetection();
        window.requestAnimationFrame(this.gameLoop);
      }, 70);
    }
  }
  gameOver() {
     this.gameOn = false; 
     console.log("endGame ran")
  }
}
module.exports = Game;

