var assert = require('chai').assert;
const { expect } = require('chai');
var Toad = require('../lib/toad.js');
var Game = require('../lib/game.js');
var Score = require('../lib/score.js');
var Timer = require('../lib/timer.js');
var Level = require('../lib/level.js');
var {Obstacle, Auto, Tractor, SlowCar, Semi, FastCar, Snake} = require('../lib/obstacle.js');
var {Platform, Turtle, Crocodile} = require('../lib/platform.js');

describe('Toad', function() {
  var myToad;
  var toadScore;
  var game;
  var autoArray;
  var riverArray;

  beforeEach(function() {
    var timer = new Timer();
    var score = new Score();
    var level = new Level(67, score, timer);
    toadScore = new Score();
    myToad = new Toad(475, 662.5, 'safe', {}, toadScore, timer, level);
  })

  it('should be a function', () => {
    assert.isFunction(Toad);
  })

  it('should be an instance of a Toad', () => {
    expect(myToad).to.be.an.instanceOf(Toad)
  })

  it('should have an x coordinate', () => {
    expect(myToad.xCoordinate).to.equal(475);
  })

  it('should have a y coordinate', () => {
    expect(myToad.yCoordinate).to.equal(662.5);
  })

  it('should have a height', () => {
    expect(myToad.height).to.equal(50);
  })

  it('should have a width', () => {
    expect(myToad.width).to.equal(50);
  })

  it('should have a velocity', () => {
    expect(myToad.velocity).to.equal(0);
  })

  it('should have a status', () => {
    expect(myToad.status).to.equal('safe');
  })

  it('should have a counter', () => {
    expect(myToad.counter).to.equal(50);
  })

  it('should have a margin', () => {
    expect(myToad.margin).to.equal(7);
  })

  it('Should start with toad row max = 750', function() {
    assert.equal(myToad.toadMaxRow, 750);
  })

  it('Should decrease toad row max when advancing to a new row', function() {
    assert.equal(myToad.toadMaxRow, 750);
    myToad.yCoordinate -= 50;
    myToad.toadMove();
    assert.equal(myToad.toadMaxRow, 612.5);
  })

  it('Should reset the Toad position', function() {
    myToad.yCoordinate = 500;
    myToad.respawnToad();
    assert.equal(myToad.yCoordinate, 662.5);
  })

  it('Should die upon collision with car or river', function() {
    autoArray = [new Tractor(0, 614.5, 67, 50, 2, 4, 4)];
    riverArray = [new Turtle(200, 550, 67, 3, 6, 0)];

    myToad.collisionDetection(autoArray, riverArray);
    assert.equal(myToad.status, 'safe');

    myToad.xCoordinate = 0;
    myToad.yCoordinate = 612.5;

    myToad.collisionDetection(autoArray, riverArray);
    assert.equal(myToad.status, 'dead');

    myToad.xCoordinate = 750;
    myToad.yCoordinate = 800;

    myToad.status = 'safe';

    myToad.yCoordinate = 548;
    myToad.xCoordinate = 200;

    myToad.collisionDetection(autoArray, riverArray);
    assert.equal(myToad.status, 'safe');
  })


})
