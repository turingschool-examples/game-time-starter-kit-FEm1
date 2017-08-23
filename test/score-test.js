var assert = require('chai').assert;
var Score = require('../lib/score.js');

describe('Score', function() {
  var myScore;
  beforeEach(function() {
    myScore = new Score();
    // var
  })

  it('Should be an object', function(){
    assert.equal(typeof(myScore), 'object');
  })

  it('Should start with score = 0', function() {
    assert.equal(myScore.current, 0);
  })

  it('Should have a high score', function() {
    assert.notEqual(myScore.high, 'null')
  })

  it('Should start with toad row max = 0', function() {
    assert.equal(myScore.toadMaxRow, 0);
  })

  it('Should add 10 points when toad reaches new row', function() {
    assert.equal(myScore.current, 0);
    myScore.toadMove(10);
    assert.equal(myScore.current, 10);
    myScore.toadMove(0);
    myScore.toadMove(10);
    assert.equal(myScore.current, 10);
  })

  it('Should set high = current if current score > high score', function() {
    myScore.high = 10;
    assert(myScore.high > myScore.current);
    myScore.toadMove(10);
    myScore.toadMove(20);
    assert.equal(myScore.high, myScore.current);
  })

  it('Should reset the Toad position', function() {
    myScore.toadMove(10);
    assert.equal(myScore.toadMaxRow, 10);
    myScore.resetToad();
    assert.equal(myScore.toadMaxRow, 0);
  })

})
