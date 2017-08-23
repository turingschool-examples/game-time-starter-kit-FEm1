class Level {
  constructor() {
    this.lives = 5;
    this.timeRemaining = 60;
    this.currentLevel = 1;
    this.gameOver = false;
    this.frameTick = 0;
  }

  death() {
    if (this.lives === 0) {
      this.gameOver = true;
    } else {
      this.lives --;
    }
  }

  drawTimer() {
    if (this.timeRemaining === 0) {
      this.death();
      return
    }
    this.frameTick++;
    if (this.frameTick === 15){
      this.timeRemaining -= .25;
    }
    //draw timer
  }


}

module.exports = Level;
