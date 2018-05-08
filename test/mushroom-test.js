const { expect } = require('chai');

import Mushroom from '../lib/Mushroom.js';

describe('Mushroom', () => {
  let mushroom;

  beforeEach(() => mushroom = new Mushroom)

  it('should have a radius', () => {
    expect(mushroom.radius).to.equal(15);
  })


}) 