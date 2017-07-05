class Player {
  constructor(x, y, width, height, color, direction) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.direction = direction;
    this.isStopped = true;
    this.collided = false;
    this.lives = 3
  }

  draw(context) {
    context.fillStyle = this.color;
    context.shadowBlur = 10;
    context.shadowColor = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  // Player 1
  handleKeyP1(e) {
    var keyCode = e.keyCode;
    var keyboard = {

      '83'() {
        if (this.direction !== 'up' &&
            this.direction !== 'none') {
          this.direction = 'down'
        }
      },
      '65'() {
        if (this.direction !== 'right' &&
            this.direction !== 'none') {
          this.direction = 'left'
        }
      },
      '68'() {
        if (this.direction !== 'left' &&
            this.direction !== 'none') {
          this.direction = 'right'
        }
      },
      '87'() {
        if (this.direction !== 'down' &&
            this.direction !== 'none') {
          this.direction = 'up'
        }
      }
    }

    if (keyboard[ keyCode ]) {
      keyboard[ keyCode ].call(this);
    }
  }

  //Player2
  handleKeyP2(e) {
    var keyCode = e.keyCode;
    var keyboard = {

      '37'() {
        if (this.direction !== 'right' &&
            this.direction !== 'none') {
          this.direction = 'left'
        }
      },
      '39'() {
        if (this.direction !== 'left' &&
            this.direction !== 'none') {
          this.direction = 'right'
        }
      },
      '38'() {
        if (this.direction !== 'down' &&
            this.direction !== 'none') {
          this.direction = 'up'
        }
      },

      '40'() {
        if (this.direction !== 'up' &&
            this.direction !== 'none') {
          this.direction = 'down'
        }
      }
    }

    if (keyboard[ keyCode ]) {
      keyboard[ keyCode ].call(this);
    }
  }

  move() {
    switch (this.direction) {
    case 'up':
      this.y -= 10;
      break
    case 'down':
      this.y += 10;
      break
    case 'left':
      this.x -= 10;
      break
    case 'right':
      this.x += 10;
      break
    }
  }

  stopMovement() {
    if (this.isStopped === true) {
      this.direction = 'none'
    }
  }

  removeLife() {
    if (this.collided === true) {
      this.lives -= 1
    }
  }
}

module.exports = Player;
