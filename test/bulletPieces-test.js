const { expect } = require('chai');

import BulletPieces from '../lib/BulletPieces.js';

describe('BulletPieces', () => {
  let bulletPieces;

  beforeEach(() => bulletPieces = new BulletPieces)

  it('should have a radius', () => {
    expect(bulletPieces.radius).to.equal(5);
  })

  it('should have a velocity', () => {
    expect(bulletPieces.dy).to.equal(5);
  })
}) 