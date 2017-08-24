class Timer {
  constructor() {
    this.timeRemaining = 60;
    this.frameTick = 0;
    this.timerRunning = true;
  }


  drawTimer(context) {
    this.frameTick++;
    if (this.frameTick >= 2 && this.timerRunning) {
      this.timeRemaining -= .1;
      this.frameTick = 0;
    }
    context.fillStyle = 'yellow';
    context.font = '24px, "Press Start 2P"'
    context.fillText("TIME", 900, 750)
    if (this.timeRemaining > 0) {
      context.fillStyle = '#21de00';
      context.fillRect(890 - this.timeRemaining * 10, 725, this.timeRemaining * 10, 25)
    }
  }
}


module.exports = Timer;
