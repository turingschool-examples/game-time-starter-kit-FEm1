var assert = require('chai').assert;
var {Obstacle, Auto, Tractor, SlowCar, Semi, FastCar, Snake} = require('../lib/obstacle.js');


describe('Obstacle', function() {
  var myObstacle;

  beforeEach(function() {
    myObstacle = new Obstacle(670, 500, 67, -10, 67, 67)
  })

  it('should create an object', function() {
    assert.isObject(myObstacle);
  })

  it('should move', function() {
    assert.equal(myObstacle.xCoordinate, 670);
    assert.equal(myObstacle.yCoordinate, 500);
    let targetx = myObstacle.xCoordinate + myObstacle.velocity;
    myObstacle.moveObstacle();
    assert.equal(myObstacle.xCoordinate, targetx);
    assert.equal(myObstacle.yCoordinate, 500);
  })
})
