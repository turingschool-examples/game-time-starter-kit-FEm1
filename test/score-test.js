var assert = require('chai').assert;
var Score = require('../lib/score.js');

describe('Score', function() {
  var myScore;

  beforeEach(function() {
    myScore = new Score();
    // var
  })

  it('Should be an object', function() {
    assert.equal(typeof(myScore), 'object');
  })

  it('Should start with score = 0', function() {
    assert.equal(myScore.current, 0);
  })

  it('Should have a high score', function() {
    assert.notEqual(myScore.high, 'null')
  })

  it('Should add points', function() {
    assert.equal(myScore.current, 0);
    myScore.addScore(50);
    assert.equal(myScore.current, 50);
  })

  it('Should not overflow 5 digits', function() {
    myScore.addScore(99999);
    assert.equal(myScore.current, 99999);
    myScore.addScore(10);
    assert.equal(myScore.current, 10)
  })

  it('Should save the high score', function() {
    assert.equal(myScore.current, 0);
    assert.equal(myScore.high, 0);
    myScore.addScore(100);
    assert.equal(myScore.current, 100);
    assert.equal(myScore.high, 100);
    myScore.current = 0;
    assert.equal(myScore.current, 0);
    assert.equal(myScore.high, 100);
  })

})
