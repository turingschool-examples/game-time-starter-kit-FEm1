const { expect } = require('chai');
const Exterminator = require('../lib/exterminator.js');

describe('Exterminator', () => {
  let exterminator;
  
  beforeEach(() => exterminator = new Exterminator);

  it('should exist', () => expect(exterminator).to.exist);
  it('should have a height and width', () => {
    expect(exterminator.height).to.equal(10);
    expect(exterminator.width).to.equal(10);
  });
})