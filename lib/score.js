class Score {
  constructor () {
    this.current = 0;
    //how tf do i access local storage?? JSON.parse(localStorage.getItem('highscore')) ||
    this.high = 0;
    this.toadMaxRow = 0;
  }

  addScore(points) {
    this.current += points;
    console.log(this.current);
    if (this.current >= 100000) {
      this.current -= 99999;
    }
    if (this.current > this.high) {
      this.high = this.current;
    }
  }

  resetToad() {
    this.toadMaxRow = 0;
  }

}

module.exports = Score;
