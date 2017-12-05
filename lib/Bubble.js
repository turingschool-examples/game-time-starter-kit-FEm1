var GamePiece = require('./GamePiece.js')


class Bubble extends GamePiece {
  constructor(x, y, height, width) {
    super(...arguments);
    this.alive = true;
    this.lives = 3;
    this.score = 0;
    this.image.src = 'images/bubble.svg';
    this.highestY = this.y;
    this.collided = false;
  }

   respawn() {
    this.alive = true;
     if(this.lives != 0) {
      this.y = 465;
    }
    else {
      console.log("game over");
    }
    return this;
  }

  move(event) {
    console.log(this.collided)
    if (event.key === 'ArrowUp' && this.y > 0 + this.height) {
      this.y -= 35;
      if(this.y < this.highestY){
        this.highestY = this.y;
        this.score += 10;
      }
      console.log(this.highestY);
      console.log(this.score);
      return this;
    }
    if (event.key === 'ArrowDown' && this.y < 475 - this.height + 5) {
      this.y += 35;
      return this;
    } 
    if (event.key === 'ArrowLeft' && this.x > (0 + 20)) {
      this.x -= 20;
      return this;
    }
    if (event.key === 'ArrowRight' && this.x < 275 - this.width) {
      this.x += 20;
      return this;
    }
    else {
      return this;
    }
  }


  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.height, this.width)
    return this;
  }

  float() {
    this.x -= .5;
    return this;

    if(this.x < -20) {
      this.respawn();
      this.x = 140;
      return this;
    }
  }

  collisionDetect(obstacle) {
  if (this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x && 
      this.y < obstacle.y + obstacle.height &&
      this.height + this.y > obstacle.y) {
        this.collided = true;
    }
  }
  
  floatDetect(obstacle) {
      if (this.collided === true && this.y < 250) {
        this.float();
        return this;
      }
      else if (this.collided === false && this.y < 250) {
        console.log('i am dying')
        this.die();
      }
  }

  die() {    
    this.alive = false;
    this.y = 600;
    this.lives--;
    return this;
  }
}

module.exports = Bubble;
