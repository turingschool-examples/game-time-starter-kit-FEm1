class Player {
  constructor(x, y, width, height, color, direction) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.direction = direction;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  // Player 1
  handleKeyP1(e) {
    var keyCode = e.keyCode;
    var keyboard = {

      '83'() {
        if (this.direction !== 'up') {
          this.direction = 'down'
        }
      },
      '65'() {
        if (this.direction !== 'right') {
          this.direction = 'left'
        }
      },
      '68'() {
        if (this.direction !== 'left') {
          this.direction = 'right'
        }
      },
      '87'() {
        if (this.direction !== 'down') {
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
        if (this.direction !== 'right') {
          this.direction = 'left'
        }
      },
      '39'() {
        if (this.direction !== 'left') {
          this.direction = 'right'
        }
      },
      '38'() {
        if (this.direction !== 'down') {
          this.direction = 'up'
        }
      },

      '40'() {
        if (this.direction !== 'up') {
          this.direction = 'down'
        }
      }
    }

    if (keyboard[ keyCode ]) {
      keyboard[ keyCode ].call(this);
    }
  }

  moveUp() {
    if (this.direction === 'up') {
      this.y -= 1
    }
  }

  moveDown() {
    if (this.direction === 'down') {
      this.y += 1
    }
  }

  moveLeft() {
    if (this.direction === 'left') {
      this.x -= 1
    }
  }

  moveRight() {
    if (this.direction === 'right') {
      this.x += 1
    }
  }
}

module.exports = Player;
