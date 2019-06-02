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
/* harmony import */ var _templates_changeBgImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/changeBgImage */ "./src/templates/changeBgImage.js");
/* harmony import */ var _templates_header_translatingText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/header/translatingText */ "./src/templates/header/translatingText.js");
/* harmony import */ var _templates_header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/header/header */ "./src/templates/header/header.js");
/* harmony import */ var _templates_info_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/info/info */ "./src/templates/info/info.js");





document.addEventListener('DOMContentLoaded', function (event) {
  var headerAnimations = new _templates_header_header__WEBPACK_IMPORTED_MODULE_3__["default"]();
  var headerBluring = headerAnimations.bluring();
  var headerColoring = headerAnimations.coloring();
  var headerPlaying = headerAnimations.playing();
  headerAnimations.setTitleElHeight();
  var textAnimation = new _templates_header_translatingText__WEBPACK_IMPORTED_MODULE_2__["default"]();
  var textTransforming = textAnimation.translating();
  var imageBgAnimation = new _templates_changeBgImage__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var changingBgImage = imageBgAnimation.changingImage();
  var infoAnimations = new _templates_info_info__WEBPACK_IMPORTED_MODULE_4__["default"]();
  var infoPlaying = infoAnimations.playing();
  var infoFading = infoAnimations.fading();
  var infoColoring = infoAnimations.coloring();
  window.addEventListener('scroll', function (event) {
    var scroll = window.pageYOffset;
    changingBgImage(scroll);
    headerBluring(scroll);
    headerColoring(scroll);
    headerPlaying(scroll);
    textTransforming(scroll);
    infoPlaying(scroll);
    infoFading(scroll);
    infoColoring(scroll);
  }, {
    passive: true
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

/***/ "./src/templates/changeBgImage.js":
/*!****************************************!*\
  !*** ./src/templates/changeBgImage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageBgAnimation; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageBgAnimation =
/*#__PURE__*/
function () {
  function ImageBgAnimation() {
    _classCallCheck(this, ImageBgAnimation);

    this.infoEl = document.querySelector('.js-sectionInfo');
    this.infoImage = this.infoEl.querySelector('.js-animationImage');
  }

  _createClass(ImageBgAnimation, [{
    key: "changingImage",
    value: function changingImage() {
      var checkPoint = document.querySelector('.js-sectionMedia');
      return function (scroll) {
        var screenHeight = window.innerHeight;
        var top = checkPoint.getBoundingClientRect().top;
        var position = scroll + top - screenHeight * .001;

        if (position < scroll) {
          this.infoImage.classList.add('active');
        } else {
          this.infoImage.classList.remove('active');
        }
      }.bind(this);
    }
  }]);

  return ImageBgAnimation;
}();



/***/ }),

/***/ "./src/templates/header/header.js":
/*!****************************************!*\
  !*** ./src/templates/header/header.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderAnimations; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HeaderAnimations =
/*#__PURE__*/
function () {
  function HeaderAnimations() {
    _classCallCheck(this, HeaderAnimations);

    this.parentEl = document.querySelector('.js-sectionHeader');
    this.bgColor = this.parentEl.querySelector('.js-animationColor');
    this.bgImage = this.parentEl.querySelector('.js-animationImage');
    this.video = document.querySelector('#videoNav');
  }

  _createClass(HeaderAnimations, [{
    key: "setTitleElHeight",
    value: function setTitleElHeight() {
      var el = document.querySelector('.js-titleEl');
      var screenHeight = window.innerHeight;

      if (document.querySelector('#layout-header') && document.querySelector('#layout-navigation')) {
        var header = document.querySelector('#layout-header');
        var headerHeight = header.getBoundingClientRect().height;
        var navigation = document.querySelector('#layout-navigation');
        var navigationHeight = navigation.getBoundingClientRect().height;
        var height = headerHeight + navigationHeight;
        el.style.height = screenHeight - height + 'px';
      } else {
        el.style.height = screenHeight - 133 + 'px';
      }
    }
  }, {
    key: "bluring",
    value: function bluring() {
      var checkPoint = this.parentEl.querySelector('.js-firstStep');
      return function (scroll) {
        var screenHeight = window.innerHeight;
        var top = checkPoint.getBoundingClientRect().top;
        var position = scroll + top - screenHeight * .6;

        if (position < scroll) {
          this.bgImage.classList.add('active');
        } else {
          this.bgImage.classList.remove('active');
        }
      }.bind(this);
    }
  }, {
    key: "coloring",
    value: function coloring() {
      var checkPoint = this.parentEl.querySelector('.js-secondStep');
      return function (scroll) {
        var screenHeight = window.innerHeight;
        var top = checkPoint.getBoundingClientRect().top;
        var position = scroll + top - screenHeight * .6;

        if (position < scroll) {
          this.bgColor.classList.add('active');
        } else {
          this.bgColor.classList.remove('active');
        }
      }.bind(this);
    }
  }, {
    key: "playing",
    value: function playing() {
      var checkPoint = this.parentEl.querySelector('.js-secondStep');
      return function (scroll) {
        var screenHeight = window.innerHeight;
        var top = checkPoint.getBoundingClientRect().top;
        var position = scroll + top - screenHeight * .4;

        if (position < scroll) {
          if (this.video.readyState >= 3) {
            this.video.play();
          }
        } else {
          this.video.pause();
        }
      }.bind(this);
    }
  }]);

  return HeaderAnimations;
}();



/***/ }),

/***/ "./src/templates/header/translatingText.js":
/*!*************************************************!*\
  !*** ./src/templates/header/translatingText.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextAnimation; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TextAnimation =
/*#__PURE__*/
function () {
  function TextAnimation() {
    _classCallCheck(this, TextAnimation);

    this.parentEl = document.querySelector('.js-sectionHeader');
    this.description = this.parentEl.querySelector('.js-description');
    this.descriptionEl = this.parentEl.querySelector('.js-descriptionBox');
  }

  _createClass(TextAnimation, [{
    key: "translating",
    value: function translating() {
      var emptyEl = this.parentEl.querySelector('.sectionHeader__empty');
      return function (scroll) {
        var screenHeight = window.innerHeight;

        var _emptyEl$getBoundingC = emptyEl.getBoundingClientRect(),
            height = _emptyEl$getBoundingC.height;

        var startPosition = scroll + this.description.getBoundingClientRect().top - screenHeight * .4;
        var endPosition = startPosition + height;
        var progress = (scroll - startPosition) / (endPosition - startPosition);

        if (scroll < startPosition) {
          this.descriptionEl.style.transform = "translateY(0px)";
        } else if (scroll < endPosition) {
          this.descriptionEl.style.transform = "translateY(".concat(height * progress, "px)");
        }
      }.bind(this);
    }
  }]);

  return TextAnimation;
}();



/***/ }),

/***/ "./src/templates/info/info.js":
/*!************************************!*\
  !*** ./src/templates/info/info.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnimationInfoBg; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AnimationInfoBg =
/*#__PURE__*/
function () {
  function AnimationInfoBg() {
    _classCallCheck(this, AnimationInfoBg);

    this.parentEl = document.querySelector('.js-sectionInfo');
    this.bgColor = this.parentEl.querySelector('.js-animationColor');
    this.browser = this.parentEl.querySelector('.js-browser');
    this.video = document.querySelector('#videoHeader');
  }

  _createClass(AnimationInfoBg, [{
    key: "playing",
    value: function playing() {
      var checkPoint = this.parentEl.querySelector('.js-firstStep');
      return function (scroll) {
        var screenHeight = window.innerHeight;
        var top = checkPoint.getBoundingClientRect().top;
        var position = scroll + top - screenHeight * .4;

        if (position < scroll) {
          if (this.video.readyState >= 3) {
            this.video.play();
          }
        } else {
          this.video.pause();
        }
      }.bind(this);
    }
  }, {
    key: "fading",
    value: function fading() {
      var checkPoint = this.parentEl.querySelector('.js-secondStep');
      return function (scroll) {
        var screenHeight = window.innerHeight;
        var top = checkPoint.getBoundingClientRect().top;
        var position = scroll + top - screenHeight * .4;

        if (position < scroll) {
          setTimeout(function () {
            this.browser.classList.add('active');
          }.bind(this), 300);
        } else {
          this.browser.classList.remove('active');
        }
      }.bind(this);
    }
  }, {
    key: "coloring",
    value: function coloring() {
      var checkPointFirst = this.parentEl.querySelector('.js-secondStep');
      var checkPointSecond = this.parentEl.querySelector('.js-thirdStep');
      return function (scroll) {
        var screenHeight = window.innerHeight;
        var topFirst = checkPointFirst.getBoundingClientRect().top;
        var topSecond = checkPointSecond.getBoundingClientRect().top;
        var positionFirst = scroll + topFirst - screenHeight * .8;
        var positionSecond = scroll + topSecond - screenHeight * .8;

        if (positionFirst < scroll) {
          this.bgColor.classList.add('activeFirst');
        } else {
          this.bgColor.classList.remove('activeFirst');
        }

        if (positionSecond < scroll) {
          this.bgColor.classList.add('activeSecond');
        } else {
          this.bgColor.classList.remove('activeSecond');
        }
      }.bind(this);
    }
  }]);

  return AnimationInfoBg;
}();



/***/ })

/******/ });
//# sourceMappingURL=main.js.map