var GamePiece = require('./GamePiece.js')


class Bubble extends GamePiece {
  constructor(x, y, height, width) {
    super(x, y, height, width)
    this.alive = true;
    this.lives = 3;
    this.score = 0;
  }

   respawn() {
    this.alive = true;
     if(this.lives != 0) {
      this.y = 465;
    }
    else{
      console.log("game over");
    }
    return this;
  }

  move(event) {
    if (event.key === 'ArrowUp' && this.y > 0 + this.height) {
      this.y -= 35;
      this.score += 10;
      console.log(this.score);
      return this;
    }
    if (event.key === 'ArrowDown' && this.y <  475- this.height + 5) {
      this.y += 35;
      return this;
    } 
    if (event.key === 'ArrowLeft' && this.x > 0) {
      this.x -= 20;
      return this;
    }
    if (event.key === 'ArrowRight' && this.x < 300 - (this.width + 10)) {
      this.x += 20;
      return this;
    }
    else{
      return this;
    }
  }

  draw(context, imageSrc){
    context.drawImage(imageSrc, this.x, this.y, this.height, this.width);
    return this;
  }

  collisionDetect(obstacle) {
    if(this.alive === true) {
      if (this.x < obstacle.x + obstacle.width &&
          this.x + this.width > obstacle.x && 
          this.y < obstacle.y + obstacle.height &&
          this.height + this.y > obstacle.y) {
            this.alive = false;
            this.y = 600;
            this.lives--;
            return this;
        }
      else{
        return this;
      }
    }
  }
}

module.exports = Bubble;
