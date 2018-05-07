const { expect } = require('chai');

import Centipede from '../lib/centipede.js';

describe('Centipede', () => {
  let centipede;

  beforeEach(() => centipede = new Centipede);

  it('should exist', () => expect(centipede).to.exist);

  it('should have a height and width', () => {
    expect(centipede.radius).to.equal(30);
  });

  it('should have a x velocity', () => {
    expect(centipede.dx).to.equal(5);  
  });

  it('should have an empty array', () => {
    expect(centipede.centipedeArray).to.deep.equal([]);
  });

  it('should have a segment detection array of 0', () => {
    expect(centipede.segmentDetectionArray).to.equal(0);
  })



})

  