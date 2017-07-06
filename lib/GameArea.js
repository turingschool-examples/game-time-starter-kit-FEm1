class GameArea {
  constructor(height, width, canvas, context, gridSpacing) {
    this.height = height;
    this.width = width;
    this.canvas = canvas;
    this.context = context;
    this.gridAmount = height / gridSpacing;
  }

  drawGrid () {
    this.context.beginPath()
    for (let i = 0; i <= this.height; i += this.gridAmount) {
      this.context.moveTo(0, i)
      this.context.lineTo(this.width, i)
    }
    for (let i = 0; i <= this.width; i += this.gridAmount) {
      this.context.moveTo(i, 0)
      this.context.lineTo(i, this.height)
    }
    this.context.strokeStyle = 'cyan';
    this.context.stroke();
  }

  clearBoard() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

module.exports = GameArea
