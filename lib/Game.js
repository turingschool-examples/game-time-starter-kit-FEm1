const GamePiece = require('./GamePiece');

module.exports = class Game {
  constructor(ctx) {
    this.paused = false;
    this.gameOver = false;
    this.ctx = ctx;

    this.blocks = [
      new GamePiece(50, 50, 10, 10, 'green')
    ];
  }

  animate() {
    const canvas = this.ctx.canvas;

    this.blocks.forEach( block => {

      if (block.isCollidingWithWall(canvas.width, canvas.height)) {
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

  handleKeyPress(e) {
    this.blocks.push(new GamePiece(e.keyCode * 2, e.keyCode * 2, 10, 10, 'green'))
  }

  togglePause() {
    this.paused = !this.paused;
  }
}