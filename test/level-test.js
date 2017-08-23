var assert = require('chai').assert;
var Level = require('../lib/level.js');
var Toad = require('../lib/toad.js');

describe('Level', function() {
  var myLevel;

  beforeEach(function() {
    myLevel = new Level();
  })

  it('Should create an Object', function() {
    assert.equal(typeof(myLevel), 'object')
  })

  it('Should start with 5 lives', function() {
    assert.equal(myLevel.lives, 5);
  })

  it('Should have 60 seconds on the timer', function() {
    assert.equal(myLevel.timeRemaining, 60);
  })

  it('Should start at Level 1', function() {
    assert.equal(myLevel.currentLevel, 1);
  })
})
