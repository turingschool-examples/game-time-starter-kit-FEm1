var assert = require('chai').assert;
var {Obstacle, Auto, Tractor, SlowCar, Semi, FastCar, Snake} = require('../lib/obstacle.js');


describe('Obstacle', function() {
  var myObstacle;

  beforeEach(function() {
    myObstacle = new Obstacle(0, 0, 67, 1, 67, 67)
  })

  it('should create an object', function() {
    assert.isObject(myObstacle);
  })

  it('should move', function() {
    assert.equal(myObstacle.xCoordinate)
    myObstacle.moveObstacle();
  })
})
