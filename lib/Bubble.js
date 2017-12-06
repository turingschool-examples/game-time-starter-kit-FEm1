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
    this.floatCount = 0;
    this.collidedObject = null;
  }

  respawn() {
     if(this.lives != 0) {
      this.alive = true;
      this.y = 465;
    }
    else {
      console.log("game over");
    }
    return this;
  }

  move(event) {
    console.log(this.collidedObject)
    if (event.key === 'ArrowUp' && this.y > 0 + this.height) {
      this.y -= 35;
      this.collidedObject = null;
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
      this.collidedObject = null;
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

  collisionDetect(obstacle, direction) {
    if (this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x && 
      this.y < obstacle.y + obstacle.height &&
      this.height + this.y > obstacle.y) {
        this.collided = true;
        this.floatDetect(obstacle, direction);
        this.collisionDie(obstacle);
        this.collidedObject = obstacle;
        console.log(this.collidedObject)
        return this;
    }
    else if(this.y < 250 && this.collidedObject == obstacle) {
      this.die();
    }
  }

  collisionDie(obstacle) {
    if (this.collided === true && this.y > 250) {
      this.die();
      this.collided = false;
    }
    return this;
  }
  
  floatDetect(obstacle, direction) {
    if(this.collided === true && this.y < 250) {
      console.log('I am colliding and I am alive')
      this.float(direction);
      this.collided = false;
      return this;
    }
  }

  float(direction) {
    if (this.y < 250 && this.x > -20) {
      if(direction === 'left') {
      this.x -= .5;
      this.collided = false;
    }
    else if(direction === 'right') {
      this.x += .5;
      this.collided = false;
    }
    else {
      this.die()
    }
    return this;
  }
}

  setScore(context) {
    context.font = '16px serif';
    context.fillStyle = 'white';
    context.fillText('Score: ' + this.score, 0, 272);
    if(this.y < this.highestY) {
        this.highestY = this.y;
        this.score += 10;
        context.fillText('Score: ' + this.score, 0, 272);
      }
    let highScore = JSON.parse(localStorage.getItem('high-score'));
    if(this.score > highScore) {
      console.log(this.score);
      localStorage.setItem('high-score', this.score)
    }
  }

  die() {    
    this.alive = false;
    this.collidedObject = null;
    this.y = 600;
    this.x = 140;
    this.lives--;
    return this;
  }

  win(context) {
    if (this.y <=45) {
      // pop up that says 'You Win'
    }
  }
}

module.exports = Bubble;
