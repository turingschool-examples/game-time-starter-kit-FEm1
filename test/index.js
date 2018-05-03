const { expect } = require('chai');
const index = require('../lib/index');
const block = require('../lib/block.js');
const snake = require('../lib/snake.js');
const target = require('../lib/target.js')

describe('Block', () => {

  let block = new Block();

  it('has a height and width of 15 pixels', () => {
    expect(block.width).to.equal(15);
    expect(block.height).to.equal(15);
  })
})


// describe('Head', () => {
//   let head = new Head();

// })