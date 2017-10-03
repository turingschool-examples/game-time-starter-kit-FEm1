const Bird = require('./Bird.js');
const Column = require('./Column.js');

module.exports = class Game {
	constructor(context, width, height) {
		const birdX = width / 2;
		const birdY = height / 2;

		this.bird = new Bird(birdX, birdY, 30, 30);
		this.column = new Column(width - 100, birdY, 100, height, 'green');

		this.width = width;
		this.height = height;
		this.context = context;
	}

	gameLoop() {
		this.context.clearRect(0, 0, this.width, this.height)
		this.bird.draw(this.context);
		this.bird.move();

		this.column.draw(this.context);
		this.column.move();

		// continue animating
		requestAnimationFrame(this.gameLoop.bind(this))		
	}

	startGame() {
		// starting animation
		requestAnimationFrame(this.gameLoop.bind(this))
	}

	keyPressed() {
		this.bird.fly();
	}
}