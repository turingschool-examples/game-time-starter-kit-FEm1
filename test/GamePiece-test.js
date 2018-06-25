var { assert } = require('chai');
var GamePiece = require('../lib/GamePiece.js');

describe('GamePiece', function() {

  it('should receive props', function() {
    var gamePiece = new GamePiece(50, 50, 20, 20, 'green');

    assert.equal(gamePiece.x, 50);
    assert.equal(gamePiece.y, 50);
    assert.equal(gamePiece.height, 20);
    assert.equal(gamePiece.width, 20);
    assert.equal(gamePiece.color, 'green');
  });

  it('should collide with other gamepieces when they overlap', function  () {
    var gamePiece1 = new GamePiece(50, 50, 20, 20, 'green');
    var gamePiece2 = new GamePiece(60, 50, 20, 20, 'green');

    assert.isTrue(gamePiece1.isCollidingWith(gamePiece2));
  })

  it('should not collide with other gamepieces when they do not overlap', function  () {
    var gamePiece1 = new GamePiece(50, 50, 20, 20, 'green');
    var gamePiece2 = new GamePiece(75, 50, 20, 20, 'green');

    assert.isFalse(gamePiece1.isCollidingWith(gamePiece2));
  })
})