var assert = require('chai').assert;
var {Obstacle, Auto, Tractor, SlowCar, Semi, FastCar, Snake} = require('../lib/obstacle.js');


describe('Obstacle & subclasses', function() {
  // var myObstacle;
  var myObstacleArray = [];

  beforeEach(function() {
    // myObstacle = new Obstacle(670, 500, 67, -10, 67, 67)
    myObstacleArray = [
      new Obstacle(670, 500, 67, -10, 67, 67),
      new Auto(670, 500, 67, -10, 67, 67),
      new Tractor(670, 500, 67, -10, 67, 67),
      new SlowCar(670, 500, 67, -10, 67, 67),
      new Semi(670, 500, 67, -10, 67, 67),
      new FastCar(670, 500, 67, -10, 67, 67),
      new Snake(670, 500, 67, -10, 67, 67)]
  })

  it('should create an object', function() {
    myObstacleArray.forEach(function(myObstacle) {
      assert.isObject(myObstacle);
    })
  })

  it('should move', function() {
    myObstacleArray.forEach(function(myObstacle) {
      let targetx = myObstacle.xCoordinate + myObstacle.velocity;

      assert.equal(myObstacle.xCoordinate, 670);
      assert.equal(myObstacle.yCoordinate, 500);
      myObstacle.moveObstacle();
      assert.equal(myObstacle.xCoordinate, targetx);
      assert.equal(myObstacle.yCoordinate, 500);
    })
  })
})
