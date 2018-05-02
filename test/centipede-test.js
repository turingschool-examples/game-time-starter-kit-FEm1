const { expect } = require('chai');
const Centipede = require('../lib/centipede.js');

describe('Centipede',() => {
  let centipede;

  beforeEach(() => centipede = new Centipede);

  it('should exist', () => expect(centipede).to.exist);
  it('should have a height and width', () => {
    expect(centipede.height).to.equal(25);
    expect(centipede.width).to.equal(25);
  });
  it('should move', () => expect(centipede.move()).to.equal(true));  
});

  