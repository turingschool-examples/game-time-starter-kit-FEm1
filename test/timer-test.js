var assert = require('chai').assert;
var Timer = require('../lib/timer.js');

describe('Timer', function() {
  var myTimer;

  beforeEach(function() {
    myTimer = new Timer();
  })


  it('Should have 60 seconds on the timer', function() {
    assert.equal(myTimer.timeRemaining, 60);
  })

  it('Should decrease timer by .1 seconds every 2 frames', function() {
    assert.equal(myTimer.timeRemaining, 60);
    for (let i = 0; i < 2; i++) {
      myTimer.drawTimer();
    }
    assert.equal(myTimer.timeRemaining, 59.9);
  })

})
