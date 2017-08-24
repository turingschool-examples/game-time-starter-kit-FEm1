class Score {
  constructor () {
    this.current = 0;
    //how tf do i access local storage?? JSON.parse(localStorage.getItem('highscore')) ||
    this.high = 0;
    this.toadMaxRow = 0;
  }

  addScore(points) {
    this.current += points;
    if (this.current >= 100000) {
      this.current -= 99999;
    }
    if (this.current > this.high) {
      this.high = this.current;
    }
  }

  drawScore(context) {
    context.font = '24px "Press Start 2P"';
    context.fillStyle = 'white';
    context.fillText("1-UP", 160, 28);
    context.fillText("HI-SCORE", 410, 28);

    let scoreArray = this.current.toString().split("");
    let highScoreArray = this.high.toString().split("")

    while (scoreArray.length < 5) {
      scoreArray.unshift('0');
    }
    while (highScoreArray.length < 5) {
      highScoreArray.unshift('0');
    }
    scoreArray = scoreArray.join("");
    highScoreArray = highScoreArray.join("");

    context.fillStyle = 'red';
    context.fillText
    context.fillText(scoreArray, 140, 56)
    context.fillText(highScoreArray, 450, 56)
  }
}

module.exports = Score;
