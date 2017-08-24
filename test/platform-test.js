const { expect } = require('chai');
const { assert } = require('chai');
const {Platform, Turtle, Crocodile} = require('../lib/platform.js');

describe('Platform test', () => {

  let platform;
  let squareWidth = 50;

  beforeEach(() => {
    platform = new Platform(227, squareWidth * 3, 3, squareWidth * 2, 4, squareWidth * 2);

  })

  it('should be a function', () => {
    assert.isFunction(Platform);
  })

  it('should be an instance of a Player', () => {
    expect(platform).to.be.an.instanceOf(Platform)
  })

  it('should have an x coordinate', () => {
    expect(platform.xCoordinate).to.equal(227);
  })

  it('should have a y coordinate', () => {
    expect(platform.yCoordinate).to.equal(150);
  })

  it('should have a height', () => {
    expect(platform.height).to.equal(46);
  })

  it('should have a width', () => {
    expect(platform.width).to.equal(3);
  })

  it('should have a velocity', () => {
    expect(platform.velocity).to.equal(100);
  })

  it('should have a gap', () => {
    expect(platform.gap).to.equal(4);
  })

  it('should have an offset', () => {
    expect(platform.offset).to.equal(100);
  })

  it('should move', () => {
    expect(platform.xCoordinate).to.equal(227);
    platform.move();
    expect(platform.xCoordinate).to.equal(327);
  })

})

describe('Turtle test', () => {

  let turtle;
  let squareWidth = 50;

  beforeEach(() => {
    turtle = new Turtle(277, squareWidth * 3, squareWidth * 3, -2, 6, squareWidth * 0);
  })

  it('should be a function', () => {
    assert.isFunction(Turtle);
  })

  it('should be an instance of a Turtle', () => {
    expect(turtle).to.be.an.instanceOf(Turtle)
  })

  it('should have an x coordinate', () => {
    expect(turtle.xCoordinate).to.equal(277);
  })

  it('should have a y coordinate', () => {
    expect(turtle.yCoordinate).to.equal(150);
  })

  it('should have a height', () => {
    expect(turtle.height).to.equal(46);
  })

  it('should have a width', () => {
    expect(turtle.width).to.equal(150);
  })

  it('should have a velocity', () => {
    expect(turtle.velocity).to.equal(-2);
  })

  it('should have a gap', () => {
    expect(turtle.gap).to.equal(6);
  })

  it('should have an offset', () => {
    expect(turtle.offset).to.equal(0);
  })

  it('should have a timer', () => {
    expect(turtle.timer).to.equal(0);
  })

  it('should move', () => {
    expect(turtle.xCoordinate).to.equal(277);
    turtle.move();
    expect(turtle.xCoordinate).to.equal(275);
  })

})
