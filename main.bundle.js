/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	
	document.write(__webpack_require__(1));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var Player = __webpack_require__(2);
	var TrailElement = __webpack_require__(3);
	// sound-class
	// var soundFx = require('./soundFx.js')

	const canvas = document.getElementById('canvas-element');
	const context = canvas.getContext('2d');
	var countdownDisplay = document.getElementById('countdown-display');

	var player1 = new Player(0, canvas.height / 2 - 5, 10, 10, '#FFDD33', 'none');
	var player2 = new Player(canvas.width - 10, canvas.height / 2 - 5, 10, 10, 'red', 'none');

	// sound-class

	var isGameOver = false;
	var isGamePaused = false;
	var gameStart = true;
	var fps;
	var trailArray = [];

	var playerArray = [player1, player2];

	function drawGrid() {

	  for (let i = 0; i <= canvas.height; i += 30) {
	    context.moveTo(0, i);
	    context.lineTo(canvas.width, i);
	  }
	  for (let i = 0; i <= canvas.width; i += 30) {
	    context.moveTo(i, 0);
	    context.lineTo(i, canvas.height);
	  }

	  context.strokeStyle = 'cyan';
	  context.stroke();
	}

	drawGrid();

	function gameLoop() {
	  life - counter;
	  var fps = 15;
	  countdown - round;
	  fps = 10;
	  var fps = 10;

	  for (let i = 0; i < playerArray.length; i++) {
	    playerArray[i].draw(context);
	  }

	  if (gameStart === true) {
	    if (isGameOver === false && isGamePaused === false) {
	      setTimeout(function () {
	        var trailelementP1 = new TrailElement(player1.x, player1.y);

	        var trailelementP2 = new TrailElement(player2.x, player2.y);

	        trailArray.push(trailelementP1);
	        trailArray.push(trailelementP2);

	        player1.moveRight();
	        player1.moveLeft();
	        player1.moveUp();
	        player1.moveDown();
	        player2.moveRight();
	        player2.moveLeft();
	        player2.moveUp();
	        player2.moveDown();
	        trailCheck();
	        borderCheck();

	        requestAnimationFrame(gameLoop);
	      }, 1000 / fps);
	    }
	  }
	}

	(function gameLoad() {
	  canvas.focus();
	  document.addEventListener('keydown', player1.handleKeyP1.bind(player1));
	  document.addEventListener('keydown', player2.handleKeyP2.bind(player2));
	  resetPlayer1();
	  resetPlayer2();
	  gameStart = true;
	})();

	requestAnimationFrame(gameLoop);

	function borderCheck() {
	  //look for collision on border
	  if (player1.x > canvas.width - 10 || player1.x < 0 || player1.y > canvas.height - 10 || player1.y < 0) {
	    player1.collided = true;
	    roundEnd();
	  }if (player2.x > canvas.width - 10 || player2.x < 0 || player2.y > canvas.height - 10 || player2.y < 0) {
	    player2.collided = true;
	    roundEnd();
	  }
	}

	function trailCheck() {
	  var { x: x1, y: y1 } = player1;
	  var { x: x2, y: y2 } = player2;
	  var collision = [];

	  //if player 2 runs into player 1 trail
	  trailArray.forEach(function (trailObj) {

	    if (x2 + 5 <= trailObj.x || x2 >= trailObj.x + 5 || y2 + 5 <= trailObj.y || y2 >= trailObj.y + 5) {
	      return true;
	    } else {
	      player2.collided = true;
	      collision.push(trailObj);
	    }
	  });

	  //if player 1 runs into player 1 trail
	  trailArray.forEach(function (trailObj) {

	    if (x1 + 5 <= trailObj.x || x1 >= trailObj.x + 5 || y1 + 5 <= trailObj.y || y1 >= trailObj.y + 5) {
	      return true;
	    } else {
	      player1.collided = true;
	      collision.push(trailObj);
	    }
	  });

	  if (collision.length > 0) {
	    roundEnd();
	  }
	}

	function roundEnd() {
	  //stop movement of both players
	  // player1.isStopped = true;
	  // player2.isStopped = true;
	  // player1.stopMovement();
	  // player2.stopMovement();
	  displayRoundWinner();
	  isGamePaused = true;
	}

	function displayRoundWinner() {
	  if (player1.collided === true && player2.collided === true) {
	    alert('You idiots ran into each other');
	  } else if (player1.collided === true) {
	    alert('Player 2 Wins this Round');
	  } else if (player2.collided === true) {
	    alert('Player 1 Wins this Round');
	  }
	  updateLifeCounter();
	  alert(displayLives());
	  clearBoard();
	  resetPlayer1();
	  resetPlayer2();
	  trailArray = [];
	  countdown();
	}

	document.addEventListener('keydown', function (e) {
	  if (e.keyCode === 13) {
	    pauseGame();
	    // clearBoard();
	    // resetPlayer1();
	    // resetPlayer2();
	    // trailArray = []
	    // console.log('p1', player1.x, player1.y);
	    // console.log(trailArray);
	  }
	});

	life - counter;
	function updateLifeCounter() {

	  //if players collide with each other and both players are not at 0
	  if (player1.collided === true && player2.collided === true && player1.lives !== 0 && player2.lives !== 0) {
	    player1.removeLife();
	    player2.removeLife();
	  }
	  //if either player is at 0
	  else if (player1.lives === 0 || player2.lives === 0) {
	      console.log('game over');
	      resetLives();
	    }
	    //if player 1 collides with player 2
	    else if (player1.collided === true && player1.lives !== 0) {
	        player1.removeLife();
	        console.log('player 1 loses, ', player1.lives);
	      }
	      //if player2 collides with player1
	      else if (player2.collided === true && player2.lives !== 0) {
	          player2.removeLife();
	          console.log('player 2 loses, ', player2.lives);
	        }
	}

	//if a player reaches 0 and then loses the next round, the next alert that comes up is both players at 3

	function resetLives() {
	  player1.lives = 3;
	  player2.lives = 3;
	}

	function displayLives() {
	  return `Player 1: ${player1.lives}\nPlayer 2: ${player2.lives}`;
	}

	function startCountdown() {
	  //start countdown
	}

	function resetPlayer1() {
	  player1.isStopped = false;
	  player1.direction = 'right';
	  player1.collided = false;
	  player1.x = 0;
	  player1.y = canvas.height / 2 - 5;
	}

	function resetPlayer2() {
	  player2.isStopped = false;
	  player2.direction = 'left';
	  player2.collided = false;
	  player2.x = canvas.width - 10;
	  player2.y = canvas.height / 2 - 5;
	}

	function clearBoard() {
	  context.clearRect(0, 0, canvas.width, canvas.height);
	  drawGrid();
	}

	function countdown() {
	  // console.log('countdown start')
	  isGamePaused = true;
	  let i = 3;
	  //counter keeps track of what round is being played
	  var int = setInterval(function () {
	    countdownDisplay.textContent = i;
	    i--;
	    if (i < 0) {
	      countdownDisplay.textContent = 'GO!';
	      isGamePaused = false;
	      clearInterval(int);
	      requestAnimationFrame(gameLoop);
	    }
	  }, 1000);
	}

	function pauseGame() {
	  isGamePaused = !isGamePaused;

	  if (isGamePaused === true) {
	    //show paused text
	    //pause sound
	    console.log('paused');
	  } else {
	    //hide paused text
	    //play sound
	    requestAnimationFrame(gameLoop);
	  }
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	class Player {
	  constructor(x, y, width, height, color, direction) {
	    this.x = x;
	    this.y = y;
	    this.width = width;
	    this.height = height;
	    this.color = color;
	    this.direction = direction;
	    this.isStopped = true;
	    this.collided = false;
	    this.lives = 3;
	  }

	  draw(context) {
	    var gradient = context.createLinearGradient(this.x, this.y, this.x + this.width, this.y + this.height);

	    // gradient.addColorStop(0, this.color);
	    // gradient.addColorStop(1, "#faf100");
	    context.fillStyle = this.color;
	    context.shadowBlur = 10;
	    context.shadowColor = this.color;
	    context.fillRect(this.x, this.y, this.width, this.height);
	  }

	  // Player 1
	  handleKeyP1(e) {
	    var keyCode = e.keyCode;
	    var keyboard = {

	      '83'() {
	        if (this.direction !== 'up' && this.direction !== 'none') {
	          this.direction = 'down';
	        }
	      },
	      '65'() {
	        if (this.direction !== 'right' && this.direction !== 'none') {
	          this.direction = 'left';
	        }
	      },
	      '68'() {
	        if (this.direction !== 'left' && this.direction !== 'none') {
	          this.direction = 'right';
	        }
	      },
	      '87'() {
	        if (this.direction !== 'down' && this.direction !== 'none') {
	          this.direction = 'up';
	        }
	      }
	    };

	    if (keyboard[keyCode]) {
	      keyboard[keyCode].call(this);
	    }
	  }

	  //Player2
	  handleKeyP2(e) {
	    var keyCode = e.keyCode;
	    var keyboard = {

	      '37'() {
	        if (this.direction !== 'right' && this.direction !== 'none') {
	          this.direction = 'left';
	        }
	      },
	      '39'() {
	        if (this.direction !== 'left' && this.direction !== 'none') {
	          this.direction = 'right';
	        }
	      },
	      '38'() {
	        if (this.direction !== 'down' && this.direction !== 'none') {
	          this.direction = 'up';
	        }
	      },

	      '40'() {
	        if (this.direction !== 'up' && this.direction !== 'none') {
	          this.direction = 'down';
	        }
	      }
	    };

	    if (keyboard[keyCode]) {
	      keyboard[keyCode].call(this);
	    }
	  }

	  moveUp() {
	    if (this.direction === 'up') {
	      this.y -= 10;
	    }
	  }

	  moveDown() {
	    if (this.direction === 'down') {
	      this.y += 10;
	    }
	  }

	  moveLeft() {
	    if (this.direction === 'left') {
	      this.x -= 10;
	    }
	  }

	  moveRight() {
	    if (this.direction === 'right') {
	      this.x += 10;
	    }
	  }

	  stopMovement() {
	    if (this.isStopped === true) {
	      this.direction = 'none';
	    }
	  }

	  removeLife() {
	    if (this.collided === true) {
	      this.lives -= 1;
	    }
	  }
	}

	module.exports = Player;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var Player = __webpack_require__(2);

	module.exports = class TrailElement extends Player {
	  constructor(x, y) {
	    super(x, y);
	  }
	};

/***/ })
/******/ ]);