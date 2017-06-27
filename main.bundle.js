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
	const canvas = document.getElementById('canvas-element');
	const context = canvas.getContext('2d');
	var gameSize = { x: canvas.width, y: canvas.height };
	var player1 = new Player(50, 50, 10, 10, 'blue');
	var player2 = new Player(300, 300, 10, 10, 'red');
	var playerArray = [player1, player2];

	var direction = {
	  x: 1,
	  y: 0
	};

	function gameLoop() {

	  for (var i = 0; i < playerArray.length; i++) {
	    playerArray[i].draw(context);
	    playerArray[i].moveRight(direction);
	    playerArray[i].moveLeft(direction);
	    playerArray[i].moveUp(direction);
	    playerArray[i].moveDown(direction);
	  }

	  requestAnimationFrame(gameLoop);
	}

	window.addEventListener('keydown', function (e) {
	  if (e.keyCode === 37) {
	    player1.movingUp = false;
	    player1.movingDown = false;
	    player1.movingRight = false;
	    player1.movingLeft = true;
	    direction = {
	      x: 1,
	      y: 0
	    };
	  } else if (e.keyCode === 39) {
	    player1.movingUp = false;
	    player1.movingDown = false;
	    player1.movingRight = true;
	    player1.movingLeft = false;
	    direction = {
	      x: 1,
	      y: 0
	    };
	  } else if (e.keyCode === 38) {
	    player1.movingUp = true;
	    player1.movingDown = false;
	    player1.movingRight = false;
	    player1.movingLeft = false;

	    direction = {
	      x: 0,
	      y: 1
	    };
	  } else if (e.keyCode === 40) {
	    player1.movingUp = false;
	    player1.movingDown = true;
	    player1.movingRight = false;
	    player1.movingLeft = false;

	    direction = {
	      x: 0,
	      y: 1
	    };
	  }
	});

	requestAnimationFrame(gameLoop);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	class Player {
	  constructor(x, y, width, height, color) {
	    this.x = x;
	    this.y = y;
	    this.width = width;
	    this.height = height;
	    this.color = color;
	    this.movingRight = true;
	    this.movingLeft = false;
	    this.movingUp = false;
	    this.movingDown = false;
	  }

	  draw(context) {
	    context.fillStyle = this.color;
	    context.fillRect(this.x, this.y, this.width, this.height);
	  }

	  moveUp(direction) {
	    if (this.movingUp === true) {
	      this.y -= direction.y;
	      console.log('up');
	    }
	  }

	  moveDown(direction) {
	    if (this.movingDown === true) {
	      this.y += direction.y;
	      console.log('down');
	    }
	  }

	  moveLeft(direction) {
	    if (this.movingLeft === true) {
	      this.x -= direction.x;
	      console.log('left');
	    }
	  }

	  moveRight(direction) {
	    if (this.movingRight === true) {
	      this.x += direction.x;
	    }
	  }
	}

	module.exports = Player;

/***/ })
/******/ ]);