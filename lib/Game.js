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
    this.blocks.forEach( block => {
      block.draw(this.ctx);
      block.move();
    })
  }

  handleKeyPress(e) {
    this.blocks.push(new GamePiece(e.keyCode * 2, e.keyCode * 2, 10, 10, 'green'))
  }

  togglePause() {
    this.paused = !this.paused;
  }
}