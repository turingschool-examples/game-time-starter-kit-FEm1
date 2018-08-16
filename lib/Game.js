const Block = require('./Block');

module.exports = class Game {
  constructor(ctx, height, width) {
    this.ctx = ctx;
    this.height = height;
    this.width = width;
    this.paused = false;
    this.gameOver = false;

    this.blocks = [
      new Block(50, 50, 10, 10, 'red', 'black')
    ];
  }

  // draw one frame of our game
  animate() {
    this.blocks.forEach( block => {

      if (block.isCollidingWithWall(this.width, this.height)) {
        this.endGame();  

      } else {
        block.move();
      }
      
      block.draw(this.ctx);
    })
  }

  endGame() {
    this.gameOver = true;
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  handleKeyPress(e) {
    const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowRight') {
      direction.dx = 1;

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -1;

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;

    } else if (e.key === 'ArrowUp') {
      direction.dy = -1;
    } 

    this.blocks.forEach( block => block.changeDirection(direction) );
  }

}