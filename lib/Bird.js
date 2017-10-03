const GamePiece = require('./GamePiece.js');

module.exports = class Bird extends GamePiece{
	constructor(x, y, w, h) {
		super(x, y, w, h);
	}

	move() {
		this.y++;
	}

	fly() {
		this.y -= 10;
	}
}