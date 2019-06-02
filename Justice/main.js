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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates_title_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/title/title */ "./src/templates/title/title.js");
/* harmony import */ var _templates_modules_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/modules/modules */ "./src/templates/modules/modules.js");
/* harmony import */ var _templates_fonts_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/fonts/fonts */ "./src/templates/fonts/fonts.js");
/* harmony import */ var _templates_grid_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/grid/grid */ "./src/templates/grid/grid.js");
/* harmony import */ var _templates_pages_pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/pages/pages */ "./src/templates/pages/pages.js");
/* harmony import */ var _templates_adaptive_adaptive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/adaptive/adaptive */ "./src/templates/adaptive/adaptive.js");







document.addEventListener('DOMContentLoaded', function (event) {
  var title = new _templates_title_title__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var titleShowImage = title.showImage();
  var titleInfo = title.titleInfo();
  var modules = new _templates_modules_modules__WEBPACK_IMPORTED_MODULE_2__["default"]();
  var modulesShowInfo = modules.showInfo();
  var modulesShowItems = modules.showItems();
  var fonts = new _templates_fonts_fonts__WEBPACK_IMPORTED_MODULE_3__["default"]();
  var fontsShowInfo = fonts.showInfo();
  var grid = new _templates_grid_grid__WEBPACK_IMPORTED_MODULE_4__["default"]();
  var gridShowInfo = grid.showInfo();
  var gridShowDevices = grid.showDevices();
  var pages = new _templates_pages_pages__WEBPACK_IMPORTED_MODULE_5__["default"]();
  var pagesShowInfo = pages.showInfo();
  var pagesShowItems = pages.showItems();
  var adaptive = new _templates_adaptive_adaptive__WEBPACK_IMPORTED_MODULE_6__["default"]();
  var adaptiveShowInfo = adaptive.showInfo();
  var adaptiveShowPhones = adaptive.showPhones();
  var adaptiveShowCards = adaptive.showCards();
  window.addEventListener('scroll', function (event) {
    var scroll = window.pageYOffset;
    titleShowImage(scroll);
    titleInfo(scroll);
    modulesShowInfo(scroll);
    modulesShowItems(scroll);
    fontsShowInfo(scroll);
    gridShowInfo(scroll);
    gridShowDevices(scroll);
    pagesShowInfo(scroll);
    pagesShowItems(scroll);
    adaptiveShowInfo(scroll);
    adaptiveShowPhones(scroll);
    adaptiveShowCards(scroll);
  });
});

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/templates/adaptive/adaptive.js":
/*!********************************************!*\
  !*** ./src/templates/adaptive/adaptive.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Adaptive; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Adaptive =
/*#__PURE__*/
function () {
  function Adaptive() {
    _classCallCheck(this, Adaptive);

    this.info = document.querySelector('.js-adaptiveTitle');
    this.phones = _toConsumableArray(document.querySelectorAll('.js-adaptivePhone'));
    this.cards = _toConsumableArray(document.querySelectorAll('.js-adaptiveItem'));
  }

  _createClass(Adaptive, [{
    key: "showInfo",
    value: function showInfo() {
      return function (scroll) {
        var screenHeight = window.innerHeight;
        var top = this.info.getBoundingClientRect().top;
        var position = scroll + top - screenHeight * .6;

        if (position < scroll) {
          this.info.classList.add('active');
        } else {
          this.info.classList.remove('active');
        }
      }.bind(this);
    }
  }, {
    key: "showPhones",
    value: function showPhones() {
      return function (scroll) {
        var parent = document.querySelector('.js-adaptivePhoneParent');
        var screenHeight = window.innerHeight;
        var top = parent.getBoundingClientRect().top;
        var position = scroll + top - screenHeight / 5;

        if (position < scroll) {
          parent.classList.add('active');
        } else {
          parent.classList.remove('active');
        }
      }.bind(this);
    }
  }, {
    key: "showCards",
    value: function showCards() {
      return function (scroll) {
        this.cards.forEach(function (item) {
          var screenHeight = window.innerHeight;
          var top = item.getBoundingClientRect().top;
          var position = scroll + top - screenHeight * .5;

          if (position < scroll) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }.bind(this);
    }
  }]);

  return Adaptive;
}();



/***/ }),

/***/ "./src/templates/fonts/fonts.js":
/*!**************************************!*\
  !*** ./src/templates/fonts/fonts.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fonts; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Fonts =
/*#__PURE__*/
function () {
  function Fonts() {
    _classCallCheck(this, Fonts);

    this.info = document.querySelector('.js-fonts');
  }

  _createClass(Fonts, [{
    key: "showInfo",
    value: function showInfo() {
      return function (scroll) {
        var screenHeight = window.innerHeight;
        var top = this.info.getBoundingClientRect().top;
        var position = scroll + top - screenHeight / 2;

        if (position < scroll) {
          this.info.classList.add('active');
        } else {
          this.info.classList.remove('active');
        }
      }.bind(this);
    }
  }]);

  return Fonts;
}();



/***/ }),

/***/ "./src/templates/grid/grid.js":
/*!************************************!*\
  !*** ./src/templates/grid/grid.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grid; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Grid =
/*#__PURE__*/
function () {
  function Grid() {
    _classCallCheck(this, Grid);

    this.info = document.querySelector('.js-gridInfo');
    this.devices = document.querySelector('.js-gridDevices');
  }

  _createClass(Grid, [{
    key: "showInfo",
    value: function showInfo() {
      return function (scroll) {
        var screenHeight = window.innerHeight;
        var top = this.info.getBoundingClientRect().top;
        var position = scroll + top - screenHeight / 1.5;

        if (position < scroll) {
          this.info.classList.add('active');
        } else {
          this.info.classList.remove('active');
        }
      }.bind(this);
    }
  }, {
    key: "showDevices",
    value: function showDevices() {
      return function (scroll) {
        var screenHeight = window.innerHeight;
        var top = this.devices.getBoundingClientRect().top;
        var position = scroll + top - screenHeight / 2;

        if (position < scroll) {
          this.devices.classList.add('active');
        } else {
          this.devices.classList.remove('active');
        }
      }.bind(this);
    }
  }]);

  return Grid;
}();



/***/ }),

/***/ "./src/templates/modules/modules.js":
/*!******************************************!*\
  !*** ./src/templates/modules/modules.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modules; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modules =
/*#__PURE__*/
function () {
  function Modules() {
    _classCallCheck(this, Modules);

    this.info = document.querySelector('.js-modulesTitle');
    this.items = _toConsumableArray(document.querySelectorAll('.js-modulesItem'));
  }

  _createClass(Modules, [{
    key: "showInfo",
    value: function showInfo() {
      return function (scroll) {
        var screenHeight = window.innerHeight;
        var top = this.info.getBoundingClientRect().top;
        var position = scroll + top - screenHeight / 1.5;

        if (position < scroll) {
          this.info.classList.add('active');
        } else {
          this.info.classList.remove('active');
        }
      }.bind(this);
    }
  }, {
    key: "showItems",
    value: function showItems() {
      return function (scroll) {
        this.items.forEach(function (item) {
          var screenHeight = window.innerHeight;
          var top = item.getBoundingClientRect().top;
          var position = scroll + top - screenHeight * .6;

          if (position < scroll) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }.bind(this);
    }
  }]);

  return Modules;
}();



/***/ }),

/***/ "./src/templates/pages/pages.js":
/*!**************************************!*\
  !*** ./src/templates/pages/pages.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pages; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pages =
/*#__PURE__*/
function () {
  function Pages() {
    _classCallCheck(this, Pages);

    this.info = document.querySelector('.js-pagesTitle');
    this.items = _toConsumableArray(document.querySelectorAll('.js-pagesItem'));
  }

  _createClass(Pages, [{
    key: "showInfo",
    value: function showInfo() {
      return function (scroll) {
        var screenHeight = window.innerHeight;
        var top = this.info.getBoundingClientRect().top;
        var position = scroll + top - screenHeight / 1.5;

        if (position < scroll) {
          this.info.classList.add('active');
        } else {
          this.info.classList.remove('active');
        }
      }.bind(this);
    }
  }, {
    key: "showItems",
    value: function showItems() {
      return function (scroll) {
        this.items.forEach(function (item) {
          var screenHeight = window.innerHeight;
          var top = item.getBoundingClientRect().top;
          var position = scroll + top - screenHeight;

          if (position < scroll) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }.bind(this);
    }
  }]);

  return Pages;
}();



/***/ }),

/***/ "./src/templates/title/title.js":
/*!**************************************!*\
  !*** ./src/templates/title/title.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Title; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Title =
/*#__PURE__*/
function () {
  function Title() {
    _classCallCheck(this, Title);

    this.image = document.querySelector('.js-titleImage');
    this.info = document.querySelector('.js-titleInfo');
  }

  _createClass(Title, [{
    key: "showImage",
    value: function showImage() {
      return function (scroll) {
        var screenHeight = window.innerHeight;
        var top = this.image.getBoundingClientRect().top;
        var position = scroll + top - screenHeight * 20;

        if (position < scroll) {
          this.image.classList.add('active');
        } else {
          this.image.classList.remove('active');
        }
      }.bind(this);
    }
  }, {
    key: "titleInfo",
    value: function titleInfo() {
      return function (scroll) {
        var screenHeight = window.innerHeight;
        var top = this.info.getBoundingClientRect().top;
        var position = scroll + top - screenHeight;

        if (position < scroll) {
          this.info.classList.add('active');
        } else {
          this.info.classList.remove('active');
        }
      }.bind(this);
    }
  }]);

  return Title;
}();



/***/ })

/******/ });
//# sourceMappingURL=main.js.map