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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Asteroid(options){\n    options.color = \"green\";\n    options.radius = 25;\n    options.vel = util.randomVec(2);\n    MovingObject.call(this, options);\n}\nwindow.Asteroid = Asteroid;\n\n\nutil.inherit(MovingObject,Asteroid)\n\nmodule.exports = Asteroid;\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\n\nDIM_X = 0;\nDIM_Y = 0;\nNUM_ASTEROIDS = 10;\n\nfunction Game() {\n\n    this.dim_x = DIM_X;\n    this.dim_y = DIM_Y;\n    this.num_asteroids = NUM_ASTEROIDS;\n    this.asteroids = [];\n\n}\n\nGame.prototype.addAsteroids = function(){\n    for (let i = 0; i < this.num_asteroids; i++)\n        this.asteroids.push(new Asteroid({ pos: this.randomPosition() }))\n}\n\nGame.prototype.randomPosition = function() {\n    return [Math.floor(Math.random() * 800), Math.floor(Math.random() * 600)];\n}\n\nwindow.Game = Game;\nmodule.exports = Game;\n\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working!\")\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\nconst util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\nconst mo = new MovingObject({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 25,\n    color: \"#00FF00\"\n});\n\nconst myAsteroid = new Asteroid({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 25,\n    color: \"#00FF00\"\n})\n\nwindow.MovingObject = MovingObject;\nwindow.mo = mo;\n//window.myAsteroid = myAsteroid;\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n    var canvas = document.getElementById('canvas');\n    console.log(mo); \n    var ctx = canvas.getContext('2d');\n    window.ctx = ctx;\n    ctx.fillStyle = \"green\";\n    const game = new Game;\n    game.addAsteroids;\n\n\n    // for (let i = 0; i<game.asteroids.length; i++){\n    //     game.asteroids[i].draw(ctx);\n    // }\n    // run(ctx);\n    \n});\n\n// function run(ctx){\n//     ctx.clearRect(0, 0, 800, 600);\n//     mo.move();\n//     mo.draw(ctx);\n//     setTimeout(run.bind(this, ctx), 100);\n// }\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst inherits = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\nfunction MovingObject(options){\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\n\n\nMovingObject.prototype.draw = function (ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI,\n        false\n    );\n\n    ctx.fill();\n};\n\nMovingObject.prototype.move = function(){\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n}\n \nMovingObject.prototype.makeSound = function(){\n    console.log(\"hello\")\n}\nmodule.exports = MovingObject;\n\n// var canvas = document.getElementById('canvas');\n// var c = canvas.getContext('2d');\n// c.fillStyle = \"red\";\n// c.fillRect(100, 100, 400, 300); \n\n\n// var canvas = document.getElementById('myCanvas');\n// var context = canvas.getContext('2d');\n// var centerX = canvas.width / 2;\n// var centerY = canvas.height / 2;\n// var radius = 70;\n\n// context.beginPath();\n// context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);\n// context.fillStyle = 'green';\n// context.fill();\n// context.lineWidth = 5;\n// context.strokeStyle = '#003300';\n// context.stroke();\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const util = { \n    inherit(parent, child){\n        function Surrogate() { };\n        Surrogate.prototype = parent.prototype;\n        child.prototype = new Surrogate();\n        child.prototype.constructor = child;\n    },\n   \n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n   \n};\n\n\n\n// const inherit = function (parent, child ) {\n//     function Surrogate() { };\n//     Surrogate.prototype = parent.prototype;\n//     child.prototype = new Surrogate();\n//     child.prototype.constructor = child;\n// };\n\nmodule.exports = util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });