var assert = require('chai').assert;
var Level = require('../lib/level.js');

describe('Level', function() {
  var myLevel;

  beforeEach(function() {
    myLevel = new Level();
  })

  it('Should create an Object', function() {
    assert.equal(typeof(myLevel), 'object')
  })

  it('Should start with 4 extra lives', function() {
    assert.equal(myLevel.lives, 4);
  })

  it('Should start at Level 1', function() {
    assert.equal(myLevel.currentLevel, 1);
  })

  it('Should decrease lives when Toad dies', function() {
    assert.equal(myLevel.lives, 4);
    myLevel.death();
    assert.equal(myLevel.lives, 3);
  })

  it('Should be "Game Over" if death at 0 lives', function() {
    assert.equal(myLevel.lives, 4);
    for (let i = 0; i < 5; i++) {
      myLevel.death();
    }
    assert.equal(myLevel.lives, 0);
    myLevel.death();
    assert.equal(myLevel.gameOver, true);
  })

  it('Should increase the level', function() {
    assert.equal(myLevel.currentLevel, 1);
    myLevel.next();
    assert.equal(myLevel.currentLevel, 2);
  })

  it('Should add 1 life', function() {
    assert.equal(myLevel.lives, 4);
    myLevel.addLife();
    assert.equal(myLevel.lives, 5);
  })
})
