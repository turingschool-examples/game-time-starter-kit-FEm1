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


})
