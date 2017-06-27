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
	const player1 = new Player(50, 50, 10, 10, 'blue');
	const player2 = new Player(300, 300, 10, 10, 'red');
	var playerArray = [player1, player2];

	function gameLoop() {

	  for (var i = 0; i < playerArray.length; i++) {
	    playerArray[i].draw(context);
	  }

	  requestAnimationFrame(gameLoop);
	}
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
	  }

	  draw(context) {
	    context.fillStyle = this.color;
	    context.fillRect(this.x, this.y, this.width, this.height);
	  }
	}

/***/ })
/******/ ]);