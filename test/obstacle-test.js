const { expect } = require('chai');

import Obstacle from '../lib/obstacle.js';
import Mushroom from '../lib/Mushroom.js';

describe('Obstacle', () => {
  let obstacle;

  beforeEach(() => obstacle = new Obstacle(10, 10));

  it('should have an empty array', () => {
    expect(obstacle.mushroomArray).to.deep.equal([]);
  })
  it('should have an x and y coordinate', () => {
    expect(obstacle.x).to.equal(10);
    expect(obstacle.y).to.equal(10);
  }) 
  it('should disappear when hit by bullet', () => {

  })

  it('should detect collision with centipede', () => {

  })

});