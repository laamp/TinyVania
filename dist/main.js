/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/entity.js":
/*!**************************!*\
  !*** ./src/js/entity.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Entity {\n  constructor({ size, pos, vel }) {\n    this.size = size;\n    this.pos = pos;\n    this.vel = vel;\n  }\n\n  render(ctx) {\n    ctx.fillStyle = \"blue\";\n    ctx.fillRect(\n      this.pos.x,\n      this.pos.y,\n      this.size.w,\n      this.size.h\n    );\n  }\n\n  move() {\n    this.pos.x += 10;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Entity);\n\n\n//# sourceURL=webpack:///./src/js/entity.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n\n\nclass Game {\n  constructor({ DIM_X, DIM_Y, canvasCtx }) {\n    this.DIM_X = DIM_X;\n    this.DIM_Y = DIM_Y;\n    this.canvasCtx = canvasCtx;\n\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      size: { w: 45, h: 100 },\n      pos: { x: 15, y: 15 },\n      vel: { x: 0, y: 0 }\n    });\n\n    this.render = this.render.bind(this);\n    this.physics = this.physics.bind(this);\n  }\n\n  physics() {\n    this.player.move();\n  }\n\n  render() {\n    this.canvasCtx.clearRect(\n      0, 0,\n      this.DIM_X,\n      this.DIM_Y\n    );\n\n    this.player.render(this.canvasCtx);\n    this.physics();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: WINDOW_WIDTH, WINDOW_HEIGHT, userController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WINDOW_WIDTH\", function() { return WINDOW_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WINDOW_HEIGHT\", function() { return WINDOW_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userController\", function() { return userController; });\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ \"./src/js/entity.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/js/game.js\");\n//top level game management file\n\n\n\n\nwindow.Entity = _entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; //TESTING\nwindow.Player = _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; //TESTING\nwindow.Game = _game__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; //TESTING\n\n//constants\nconst WINDOW_WIDTH = 640;\nconst WINDOW_HEIGHT = 480;\n\n//control variables\nconst userController = {\n  left: false,\n  right: false,\n  up: false,\n  down: false\n};\n\n//gets the canvas and grabs its context for rendering\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"game\");\n  canvas.width = WINDOW_WIDTH;\n  canvas.height = WINDOW_HEIGHT;\n  const canvasCtx = canvas.getContext(\"2d\");\n\n  const game = new _game__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    DIM_X: WINDOW_WIDTH,\n    DIM_Y: WINDOW_HEIGHT,\n    canvasCtx\n  });\n\n  const Start = () => {\n    setInterval(game.render, 60);\n  };\n\n  const bindKeyHandlers = () => {\n    window.onkeydown = e => {\n      if (e.key === \"a\") userController.left = true;\n      if (e.key === \"d\") userController.right = true;\n      if (e.key === \"w\") userController.up = true;\n      if (e.key === \"s\") userController.down = true;\n    };\n\n    window.onkeyup = e => {\n      if (e.key === \"a\") userController.left = false;\n      if (e.key === \"d\") userController.right = false;\n      if (e.key === \"w\") userController.up = false;\n      if (e.key === \"s\") userController.down = false;\n    };\n  };\n  bindKeyHandlers();\n\n  window.Start = Start; //TESTING\n  window.canvasCtx = canvasCtx; //TESTING\n});\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ \"./src/js/entity.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n\n\n\nconst movAmt = 10;\n\nclass Player extends _entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(startVals) {\n    super(startVals);\n  }\n\n  move() {\n    if (_index__WEBPACK_IMPORTED_MODULE_1__[\"userController\"].right) this.pos.x += movAmt;\n    if (_index__WEBPACK_IMPORTED_MODULE_1__[\"userController\"].left) this.pos.x -= movAmt;\n    if (_index__WEBPACK_IMPORTED_MODULE_1__[\"userController\"].up) this.pos.y -= movAmt;\n    if (_index__WEBPACK_IMPORTED_MODULE_1__[\"userController\"].down) this.pos.y += movAmt;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n\n//# sourceURL=webpack:///./src/js/player.js?");

/***/ })

/******/ });