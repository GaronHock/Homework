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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nclass Clock {\n    constructor() {\n        // 1. Create a Date object.\n        const currentTime = new Date();\n\n        // 2. Store the hour, minute, and second.\n        this.hours = currentTime.getHours();\n        this.minutes = currentTime.getMinutes();\n        this.seconds = currentTime.getSeconds();\n\n        // 3. Call printTime.\n        this.printTime();\n\n        // 4. Schedule the tick at 1 second intervals.\n        setInterval(this._tick.bind(this), 1000);\n    }\n\n    printTime() {\n        // Format the time in HH:MM:SS\n        const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n        // Use console.log to print it.\n        console.log(timeString);\n        return timeString;\n    }\n\n    _tick() {\n        // 1. Increment the time by one second.\n        this._incrementSeconds();\n\n        // 2. Call printTime.\n        //this.printTime();\n        clockElement.innerHTML = \"\";\n        Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(this.printTime(), clockElement);\n    }\n\n    _incrementSeconds() {\n        // 1. Increment the time by one second.\n        this.seconds += 1;\n        if (this.seconds === 60) {\n            this.seconds = 0;\n            this._incrementMinutes();\n        }\n    }\n\n    _incrementMinutes() {\n        this.minutes += 1;\n        if (this.minutes === 60) {\n            this.minutes = 0;\n            this._incrementHours();\n        }\n    }\n\n    _incrementHours() {\n        this.hours = (this.hours + 1) % 24;\n    }\n}\nconst clockElement = document.getElementById(\"clock\");\nconst clock = new Clock();\n\n// let text = clock.printTime();\n// export const htmlGenerator = (string, htmlElement) => {\n    \n//     string = document.createElement(\"p\");\n//     let stringContent = document.createTextNode(text);\n//     string.appendChild(stringContent);\n//     htmlElement.appendChild(string);\n// };\n\n// htmlGenerator(text, clockElement);\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const ul = document.getElementsByClassName('drop-down-dog-list')[0];\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\n\nconst dogLinkCreator = function(){\n  const array = [];\n  Object.keys(dogs).forEach(key => {\n    let anchor = document.createElement(\"a\");\n    anchor.innerHTML = key;\n    anchor.setAttribute(\"href\", dogs[key]);\n    let li = document.createElement(\"li\");\n    let classname = li.className = (\"dogs-link\");\n    li.appendChild(anchor);\n    array.push(li);\n  });\n  return array;\n}\n\nconst attachDogLinks = function(){\n  const dogLinks = dogLinkCreator();\n  for(let i = 0; i < dogLinks.length; i++){\n    ul.appendChild(dogLinks[i]);\n  }\n  \n}\n\nattachDogLinks();\n\nconst showNav = (e) =>{\n  const showLi = document.querySelector(\".drop-down-dog-list\");\n    showLi.className = \"drop-down-dog-list\";\n}\n\nconst removeNav = (e) =>{\n  const notShowLi = document.querySelector(\".drop-down-dog-list\");\n  notShowLi.className = \"drop-down-dog-list hidden\"\n}\n\nconst showUlOnMouseEnter = document.querySelector(\".drop-down-dog-nav\");\nshowUlOnMouseEnter.addEventListener(\"mouseenter\", showNav);\n\nconst removeUlOnMouseLeave = document.querySelector(\".drop-down-dog-nav\");\nremoveUlOnMouseLeave.addEventListener(\"mouseleave\", removeNav);\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const toDo = JSON.parse(window.localStorage.getItem(\"todo\"))|| [];\n\nconst ourToDoUl = document.querySelector(\".todos\");\nconst ourToDoForm = document.querySelector(\".add-todo-form\");\nconst ourInput = document.getElementById('to-do-input')\nconst ourSubmit = document.getElementById(\"submit-id\")\n\n\nconst addToDo = (e) =>{\n    e.preventDefault();\n    const toDoValue = ourInput.value;\n    ourInput.value = \"\";\n    toDo.push({toDoValue, done: false})\n    window.localStorage.setItem(\"todo\", JSON.stringify(toDo));\n    populateUl();\n}\n\nconst populateUl = function(){\n    for(let i = 0; i < toDo.length; i++){\n        const newListLi = document.createElement(\"li\");\n        const newLabel = document.createElement(\"label\");\n        newLabel.textContent = toDo[i].toDoValue;\n        const newCheckBox = document.createElement('input');\n        newCheckBox.type = 'checkbox';\n        if(toDo[i].done){\n            newCheckBox.setAttribute(\"checked\", \"\");\n        }\n        newListLi.appendChild(newCheckBox);\n        newListLi.append(newLabel);\n        ourToDoUl.appendChild(newListLi);\n    }\n}\nwindow.addToDo = addToDo;\nwindow.toDo = toDo;\n// const addOurToDoToOurUl = document.querySelector(\"\")\nourToDoForm.addEventListener(\"submit\", addToDo);\npopulateUl();\n\n\n\n\n\nourToDoUl.addEventListener(\"click\", function (e) {\n    if(e.target.nodeName !== \"INPUT\"){\n        return;\n    }\n})\n\n\n// for (var count in check_value) {\n//     var newCheckBox = document.createElement('input');\n//     newCheckBox.type = 'checkbox';\n//     newCheckBox.id = 'ptworkinfo' + count; // need unique Ids!\n//     newCheckBox.value = check_value[count] + '<br/>';\n\n//     parentElement.appendChild(newCheckBox);\n// }\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n\n  \n   let paragraph = document.createElement(\"p\");\n   let paragraphContent = document.createTextNode(string);\n   paragraph.appendChild(paragraphContent);\n    const html = htmlElement.appendChild(paragraph);\n};\n\nhtmlGenerator(\"I <3 vanilla DOM Manipulation\", partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });