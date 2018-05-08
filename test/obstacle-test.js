const { expect } = require('chai');

import Obstacle from '../lib/obstacle.js';
import Mushroom from '../lib/Mushroom.js';

describe('Obstacle', () => {
  let obstacle;

  beforeEach(() => obstacle = new Obstacle);

  it('should have an empty array', () => {
    expect(obstacle.mushroomArray).to.deep.equal([]);
  })
  it('should have an x and y coordinate', () => {

  }) 
  it('should disappear when hit by bullet', () => {

  })

  it('should detect collision with centipede', () => {

  })

});