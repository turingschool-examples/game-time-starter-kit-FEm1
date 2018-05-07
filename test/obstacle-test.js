const { expect } = require('chai');

import Obstacle from '../lib/obstacle.js';

describe('Obstacle', () => {
  let obstacle;

  beforeEach(() => obstacle = new Obstacle);

  it('should have an empty array', () => {
    expect(obstacle.mushroomArray).to.deep.equal([]);
  })
})