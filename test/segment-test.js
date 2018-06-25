const { expect } = require('chai');

import Segment from '../lib/Segment';

describe('Segment', () => {
  let segment;

  beforeEach(() => segment = new Segment)

  it('should have a radius', () => {
    expect(segment.radius).to.equal(30); 
   })
  it('should have an x velocity', () => {
    expect(segment.dx).to.equal(5); 
   })
  it('should have a y velocity', () => {
    expect(segment.dy).to.equal(1); 
   })
})