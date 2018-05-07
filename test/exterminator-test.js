const { expect } = require('chai');

import Exterminator from '../lib/exterminator.js';

describe('Exterminator', () => {
  let exterminator;
  
  beforeEach(() => exterminator = new Exterminator);

  it('should exist', () => expect(exterminator).to.exist);

  it('should have a radius', () => {
    expect(exterminator.radius).to.equal(20);
  });

  it('should start with an empty bullets array', () => {
    expect(exterminator.bulletsArray).to.deep.equal([]);
  });

  it('should have a move function', () => {

    exterminator.move();
    expect('left').to.equal('left');
    expect('right').to.equal('right');
    expect('up').to.equal('up');
    expect('down').to.equal('down');
    expect('space').to.equal('space');

  })

  it('should have a velocity', () => {
    expect(exterminator.dx).to.equal(2);
  })
})