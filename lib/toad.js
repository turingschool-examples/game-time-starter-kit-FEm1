class Toad {
  constructor (x = 475, y = 662.5, status = 'safe', homes, score) {
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.width = 50;
    this.height = 50;
    this.status = status;
    this.counter = 50;
    this.homes = homes;
    this.margin = 7;
    this.velocity = 0;
    this.score = score;
    this.toadMaxRow = 750;
  }
  drawToad (context) {
    if (this.status === 'safe') {
      this.xCoordinate += this.velocity;
      context.fillStyle = 'lightgreen';
      context.fillRect(this.xCoordinate, this.yCoordinate, this.width, this.height);
    }
    if (this.status === 'dead') {
      this.counter--;
      if (this.counter > 0) {
        context.fillStyle = 'lightgreen';
        context.fillRect(this.xCoordinate, this.yCoordinate, this.width, this.counter);
      }
      if (this.counter < -30) {
        this.respawnToad();
      }
    }
  }
  moveToad (direction, canvas) {
    if (this.status === 'safe') {
      if (direction === 'left' && this.xCoordinate > 67) {
        this.xCoordinate = this.xCoordinate - 67;
      }
      if (direction === 'right' && this.xCoordinate < canvas.width - 67) {
        this.xCoordinate = this.xCoordinate + 67;
      }
      if (direction === 'up') {
        if (this.yCoordinate > 187.5) {
          this.yCoordinate = this.yCoordinate - 50;
          this.toadMove();
        } else {
          let inHome = this.homes.filter(function(home) {
            return (this.xCoordinate > home.xCoordinate - this.margin && this.xCoordinate + this.width  < home.xCoordinate + home.width + this.margin)
          }, this)

          if (inHome.length && !inHome[0].hasToad) {
            // debugger; //use this debugger to test margin
            inHome[0].safe();
            this.respawnToad();
          }
        }
      }
      if (direction === 'down' && this.yCoordinate < 662.5) {
        this.yCoordinate = this.yCoordinate + 50;
      }
    }
  }
  respawnToad() {
    this.xCoordinate = 475;
    this.yCoordinate = 662.5;
    this.counter = 50;
    this.velocity = 0;
    this.status = 'safe'
    this.toadMaxRow = 750;
  }
  toadMove() {
    // console.log(`yCoord: ${this.yCoordinate}, ToadMax: ${this.toadMaxRow}`);
    if (this.yCoordinate < this.toadMaxRow) {
      this.toadMaxRow = this.yCoordinate;
      this.score.addScore(10);
    }
  }
}

module.exports = Toad;
