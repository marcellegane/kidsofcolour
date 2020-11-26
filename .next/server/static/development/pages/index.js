module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Luna/components/globals/GlobalStyle/index.style.js":
/*!************************************************************!*\
  !*** ./Luna/components/globals/GlobalStyle/index.style.js ***!
  \************************************************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../.. */ "./Luna/index.js");


const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
	*,
	*:before,
	*:after {
		box-sizing: border-box;
		margin: 0;
	}

	@font-face {
		font-family: 'A Love of Thunder';
		src: url('/fonts/a_love_of_thunder-webfont.woff2') format('woff2'),
				url('/fonts/a_love_of_thunder-webfont.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}

	html {
		font-size: ${Object(___WEBPACK_IMPORTED_MODULE_1__["pxToEm"])(___WEBPACK_IMPORTED_MODULE_1__["Luna"].font.size.base)};
	}

	body {
		font-family: ${___WEBPACK_IMPORTED_MODULE_1__["Luna"].font.family.primary};
		font-size: ${Object(___WEBPACK_IMPORTED_MODULE_1__["pxToRem"])(___WEBPACK_IMPORTED_MODULE_1__["Luna"].font.size.base)};
		color: ${___WEBPACK_IMPORTED_MODULE_1__["Luna"].color.primary.base};
		background-color: ${___WEBPACK_IMPORTED_MODULE_1__["Luna"].color.light};
	}
`;


/***/ }),

/***/ "./Luna/components/globals/Main/index.style.js":
/*!*****************************************************!*\
  !*** ./Luna/components/globals/Main/index.style.js ***!
  \*****************************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Main = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({
  displayName: "indexstyle__Main",
  componentId: "s2tblz-0"
})([""]);


/***/ }),

/***/ "./Luna/config/color.js":
/*!******************************!*\
  !*** ./Luna/config/color.js ***!
  \******************************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
const Color = {
  primary: {
    base: '#F2BF28',
    dark: '#001F2E',
    light: '#F6EDD0',
    lightest: '#D9E0E4'
  },
  secondary: {
    base: '#FF916F',
    dark: '#B3664E',
    light: '#FFBDA9',
    lightest: '#FFF4F0'
  },
  grey: {
    base: '#666666',
    dark: '#111111',
    light: '#B7B7B7',
    lightest: '#F2F2F2'
  },
  success: {
    foreground: '#5BB978',
    background: '#EEF8F1'
  },
  error: {
    foreground: '#FDE6EA',
    background: '#A33B4C'
  },
  light: '#FFFFFF',
  dark: '#1E1E1E'
};


/***/ }),

/***/ "./Luna/config/font.js":
/*!*****************************!*\
  !*** ./Luna/config/font.js ***!
  \*****************************/
/*! exports provided: Font */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Font", function() { return Font; });
const family = {
  primary: 'Source Sans Pro, sans-serif',
  secondary: 'A Love of Thunder, sans-serif'
};
const weight = {
  normal: 400,
  medium: 500,
  bold: 700
};
const size = {
  base: 16
};
const Font = {
  family,
  weight,
  size
};


/***/ }),

/***/ "./Luna/config/index.js":
/*!******************************!*\
  !*** ./Luna/config/index.js ***!
  \******************************/
/*! exports provided: Luna */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Luna", function() { return Luna; });
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./Luna/config/color.js");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font */ "./Luna/config/font.js");
/* harmony import */ var _textStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textStyle */ "./Luna/config/textStyle.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout */ "./Luna/config/layout.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Luna = {
  color: _objectSpread({}, _color__WEBPACK_IMPORTED_MODULE_0__["Color"]),
  font: _objectSpread({}, _font__WEBPACK_IMPORTED_MODULE_1__["Font"]),
  TextStyle: _objectSpread({}, _textStyle__WEBPACK_IMPORTED_MODULE_2__["TextStyle"]),
  TextStyles: _objectSpread({}, _textStyle__WEBPACK_IMPORTED_MODULE_2__["TextStyles"]),
  layout: _objectSpread({}, _layout__WEBPACK_IMPORTED_MODULE_3__["Layout"])
};


/***/ }),

/***/ "./Luna/config/layout.js":
/*!*******************************!*\
  !*** ./Luna/config/layout.js ***!
  \*******************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
const maxWidth = 1280;
const breakpoints = {
  xxsmall: 375,
  xsmall: 480,
  small: 640,
  medium: 768,
  large: 960,
  xlarge: 1024,
  xxlarge: 1260,
  maxWidth,
  xxxlarge: 1800
};
const grid = {
  unit: 16,
  columnsTotal: 12,
  gutter: 8
};
const zIndex = {
  negative: -1,
  default: 1
};
const Layout = {
  breakpoints,
  grid,
  maxWidth,
  zIndex
};


/***/ }),

/***/ "./Luna/config/textStyle.js":
/*!**********************************!*\
  !*** ./Luna/config/textStyle.js ***!
  \**********************************/
/*! exports provided: TextStyles, TextStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextStyles", function() { return TextStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextStyle", function() { return TextStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font */ "./Luna/config/font.js");
/* harmony import */ var _utilities_conversion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/conversion */ "./Luna/utilities/conversion.js");



const TextStyles = {
  xxxlarge: {
    size: 40,
    lineHeight: 56
  },
  xxlarge: {
    size: 32,
    lineHeight: 48
  },
  xlarge: {
    size: 24,
    lineHeight: 36
  },
  large: {
    size: 20,
    lineHeight: 32
  },
  medium: {
    size: 16,
    lineHeight: 24
  },
  small: {
    size: 12,
    lineHeight: 20
  }
};
const XXXLarge = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-family:", ";font-weight:", ";font-size:", ";line-height:", ";"], _font__WEBPACK_IMPORTED_MODULE_1__["Font"].family.primary, _font__WEBPACK_IMPORTED_MODULE_1__["Font"].weight.medium, Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(TextStyles.xxxlarge.size), TextStyles.xxxlarge.lineHeight / TextStyles.xxxlarge.size);
const XXLarge = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-family:", ";font-weight:", ";font-size:", ";line-height:", ";"], _font__WEBPACK_IMPORTED_MODULE_1__["Font"].family.primary, _font__WEBPACK_IMPORTED_MODULE_1__["Font"].weight.normal, Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(TextStyles.xxlarge.size), TextStyles.xxlarge.lineHeight / TextStyles.xxlarge.size);
const XLarge = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-family:", ";font-weight:", ";font-size:", ";line-height:", ";"], _font__WEBPACK_IMPORTED_MODULE_1__["Font"].family.primary, _font__WEBPACK_IMPORTED_MODULE_1__["Font"].weight.normal, Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(TextStyles.xlarge.size), TextStyles.xlarge.lineHeight / TextStyles.xlarge.size);
const Large = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-family:", ";font-weight:", ";font-size:", ";line-height:", ";"], _font__WEBPACK_IMPORTED_MODULE_1__["Font"].family.primary, _font__WEBPACK_IMPORTED_MODULE_1__["Font"].weight.normal, Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(TextStyles.large.size), TextStyles.large.lineHeight / TextStyles.large.size);
const Medium = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-family:", ";font-weight:", ";font-size:", ";line-height:", ";"], _font__WEBPACK_IMPORTED_MODULE_1__["Font"].family.primary, _font__WEBPACK_IMPORTED_MODULE_1__["Font"].weight.normal, Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(TextStyles.medium.size), TextStyles.medium.lineHeight / TextStyles.medium.size);
const Small = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-family:", ";font-weight:", ";font-size:", ";line-height:", ";"], _font__WEBPACK_IMPORTED_MODULE_1__["Font"].family.primary, _font__WEBPACK_IMPORTED_MODULE_1__["Font"].weight.normal, Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(TextStyles.small.size), TextStyles.small.lineHeight / TextStyles.small.size);
const TextStyle = {
  XXXLarge,
  XXLarge,
  XLarge,
  Large,
  Medium,
  Small
};


/***/ }),

/***/ "./Luna/index.js":
/*!***********************!*\
  !*** ./Luna/index.js ***!
  \***********************/
/*! exports provided: Luna, pxToRem, pxToEm, gridUnitsToRem, getCommaSeparatedNumber, LunaMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./Luna/config/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Luna", function() { return _config__WEBPACK_IMPORTED_MODULE_0__["Luna"]; });

/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./Luna/utilities/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pxToRem", function() { return _utilities__WEBPACK_IMPORTED_MODULE_1__["pxToRem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pxToEm", function() { return _utilities__WEBPACK_IMPORTED_MODULE_1__["pxToEm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridUnitsToRem", function() { return _utilities__WEBPACK_IMPORTED_MODULE_1__["gridUnitsToRem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCommaSeparatedNumber", function() { return _utilities__WEBPACK_IMPORTED_MODULE_1__["getCommaSeparatedNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LunaMedia", function() { return _utilities__WEBPACK_IMPORTED_MODULE_1__["LunaMedia"]; });




/***/ }),

/***/ "./Luna/layouts/Container/index.js":
/*!*****************************************!*\
  !*** ./Luna/layouts/Container/index.js ***!
  \*****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/layout */ "./Luna/config/layout.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities */ "./Luna/utilities/index.js");



const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Container",
  componentId: "sc-1xk5blt-0"
})(["max-width:", ";margin-left:auto;margin-right:auto;padding-left:", ";padding-right:", ";"], Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(_config_layout__WEBPACK_IMPORTED_MODULE_1__["Layout"].maxWidth), Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["gridUnitsToRem"])(), Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["gridUnitsToRem"])());


/***/ }),

/***/ "./Luna/utilities/conversion.js":
/*!**************************************!*\
  !*** ./Luna/utilities/conversion.js ***!
  \**************************************/
/*! exports provided: pxToRem, pxToEm, gridUnitsToRem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pxToRem", function() { return pxToRem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pxToEm", function() { return pxToEm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridUnitsToRem", function() { return gridUnitsToRem; });
/* harmony import */ var _config_font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/font */ "./Luna/config/font.js");
/* harmony import */ var _config_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/layout */ "./Luna/config/layout.js");



function pxToRem(pixelValue) {
  return `${pixelValue / _config_font__WEBPACK_IMPORTED_MODULE_0__["Font"].size.base}rem`;
}

function pxToEm(pixelValue, pixelBase = 16) {
  return `${pixelValue / pixelBase}em`;
}

function gridUnitsToRem(unitValue = 1) {
  return pxToRem(unitValue * _config_layout__WEBPACK_IMPORTED_MODULE_1__["Layout"].grid.unit);
}



/***/ }),

/***/ "./Luna/utilities/formatting.js":
/*!**************************************!*\
  !*** ./Luna/utilities/formatting.js ***!
  \**************************************/
/*! exports provided: getCommaSeparatedNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommaSeparatedNumber", function() { return getCommaSeparatedNumber; });
function getCommaSeparatedNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}



/***/ }),

/***/ "./Luna/utilities/index.js":
/*!*********************************!*\
  !*** ./Luna/utilities/index.js ***!
  \*********************************/
/*! exports provided: pxToRem, pxToEm, gridUnitsToRem, getCommaSeparatedNumber, LunaMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./Luna/utilities/conversion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pxToRem", function() { return _conversion__WEBPACK_IMPORTED_MODULE_0__["pxToRem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pxToEm", function() { return _conversion__WEBPACK_IMPORTED_MODULE_0__["pxToEm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridUnitsToRem", function() { return _conversion__WEBPACK_IMPORTED_MODULE_0__["gridUnitsToRem"]; });

/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatting */ "./Luna/utilities/formatting.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCommaSeparatedNumber", function() { return _formatting__WEBPACK_IMPORTED_MODULE_1__["getCommaSeparatedNumber"]; });

/* harmony import */ var _mediaQueries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mediaQueries */ "./Luna/utilities/mediaQueries.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LunaMedia", function() { return _mediaQueries__WEBPACK_IMPORTED_MODULE_2__["LunaMedia"]; });





/***/ }),

/***/ "./Luna/utilities/mediaQueries.js":
/*!****************************************!*\
  !*** ./Luna/utilities/mediaQueries.js ***!
  \****************************************/
/*! exports provided: LunaMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LunaMedia", function() { return LunaMedia; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/layout */ "./Luna/config/layout.js");
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conversion */ "./Luna/utilities/conversion.js");



/* Example usage:
 ${LunaMedia.above('medium')`
    background-color: black;
  `}
*/

const getSizeFromBreakpoint = (breakpointValue, breakpoints = {}) => {
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue];
  }

  if (parseInt(breakpointValue, 10)) {
    return breakpointValue;
  }

  console.error('No valid breakpoint or size specified for media.');
  return '0';
};
/**
 * Media query generator
 * @param {Object} breakpoints - Map labels to breakpoint Layout.breakpoint
 * @return {Object} - Media generators for each breakpoint
 */


const generateMedia = breakpoints => {
  const below = breakpoint => (...args) => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media (max-width:", "){", "}"], Object(_conversion__WEBPACK_IMPORTED_MODULE_2__["pxToEm"])(getSizeFromBreakpoint(breakpoint, breakpoints) - 1), Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(...args));

  const above = breakpoint => (...args) => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media (min-width:", "){", "}"], Object(_conversion__WEBPACK_IMPORTED_MODULE_2__["pxToEm"])(getSizeFromBreakpoint(breakpoint, breakpoints)), Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(...args));

  const between = (firstBreakpoint, secondBreakpoint) => (...args) => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media (min-width:", ") and (max-width:", "){", "}"], Object(_conversion__WEBPACK_IMPORTED_MODULE_2__["pxToEm"])(getSizeFromBreakpoint(firstBreakpoint, breakpoints)), Object(_conversion__WEBPACK_IMPORTED_MODULE_2__["pxToEm"])(getSizeFromBreakpoint(secondBreakpoint, breakpoints) - 1), Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(...args));

  return Object.assign({
    below,
    above,
    between
  });
};
/**
 * Media object with default breakpoints
 * @return {object} - Media generators for each size
 */


const LunaMedia = generateMedia(_config_layout__WEBPACK_IMPORTED_MODULE_1__["Layout"].breakpoints);


/***/ }),

/***/ "./components/globals/DocumentHead/index.js":
/*!**************************************************!*\
  !*** ./components/globals/DocumentHead/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/marcellegane/dev/kidsofcolour/components/globals/DocumentHead/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DocumentHead = ({
  siteUrl,
  socialImage,
  title,
  description
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}, title), __jsx("meta", {
  charSet: "UTF-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "description",
  content: description,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "/favicons/apple-touch-icon.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "/favicons/favicon-32x32.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "/favicons/favicon-16x16.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "manifest",
  href: "/favicons/site.webmanifest",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "mask-icon",
  href: "/favicons/safari-pinned-tab.svg",
  color: "#5bbad5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "shortcut icon",
  href: "/favicons/favicon.ico",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "msapplication-TileColor",
  content: "#da532c",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "msapplication-config",
  content: "/favicons/browserconfig.xml",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "theme-color",
  content: "#ffffff",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:site",
  content: "@kidsofcolourhq",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:title",
  content: title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:description",
  content: description,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:creator",
  content: "@roxylegane",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:image",
  content: socialImage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:title",
  content: title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:type",
  content: "website",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:url",
  content: siteUrl,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:image",
  content: socialImage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:description",
  content: description,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:site_name",
  content: title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 7
  }
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400",
  rel: "stylesheet",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 7
  }
})));

DocumentHead.propTypes = {
  siteUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  socialImage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
DocumentHead.defaultProps = {
  siteUrl: 'http://kidsofcolour.com',
  socialImage: 'http://kidsofcolour.com/images/social.png',
  title: 'Kids of Colour',
  description: 'A platform for kids of colour to explore their experiences of race, identity and culture in modern Britain'
};
/* harmony default export */ __webpack_exports__["default"] = (DocumentHead);

/***/ }),

/***/ "./components/molecules/Menu/index.js":
/*!********************************************!*\
  !*** ./components/molecules/Menu/index.js ***!
  \********************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return ThisMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.style */ "./components/molecules/Menu/index.style.js");
var _jsxFileName = "/Users/marcellegane/dev/kidsofcolour/components/molecules/Menu/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ThisMenu = () => __jsx(_index_style__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 24
  }
}, "Menu");

ThisMenu.propTypes = {};
ThisMenu.defaultProps = {};


/***/ }),

/***/ "./components/molecules/Menu/index.style.js":
/*!**************************************************!*\
  !*** ./components/molecules/Menu/index.style.js ***!
  \**************************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Menu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "indexstyle__Menu",
  componentId: "mouwh3-0"
})([""]);


/***/ }),

/***/ "./components/organisms/Header/index.js":
/*!**********************************************!*\
  !*** ./components/organisms/Header/index.js ***!
  \**********************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return ThisHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.style */ "./components/organisms/Header/index.style.js");
/* harmony import */ var _molecules_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/Menu */ "./components/molecules/Menu/index.js");
/* harmony import */ var _Luna_layouts_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Luna/layouts/Container */ "./Luna/layouts/Container/index.js");
var _jsxFileName = "/Users/marcellegane/dev/kidsofcolour/components/organisms/Header/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ThisHeader = () => __jsx(_index_style__WEBPACK_IMPORTED_MODULE_2__["Header"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, __jsx(_Luna_layouts_Container__WEBPACK_IMPORTED_MODULE_4__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, __jsx("nav", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}, __jsx(_molecules_Menu__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}))));

ThisHeader.propTypes = {};
ThisHeader.defaultProps = {};


/***/ }),

/***/ "./components/organisms/Header/index.style.js":
/*!****************************************************!*\
  !*** ./components/organisms/Header/index.style.js ***!
  \****************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Luna__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Luna */ "./Luna/index.js");


const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "indexstyle__Header",
  componentId: "sc-1l8urqs-0"
})(["padding-top:", ";padding-bottom:", ";", ""], Object(_Luna__WEBPACK_IMPORTED_MODULE_1__["gridUnitsToRem"])(), Object(_Luna__WEBPACK_IMPORTED_MODULE_1__["gridUnitsToRem"])(), _Luna__WEBPACK_IMPORTED_MODULE_1__["LunaMedia"].above('medium')`
    padding-top: ${Object(_Luna__WEBPACK_IMPORTED_MODULE_1__["gridUnitsToRem"])(2)};
    padding-bottom: ${Object(_Luna__WEBPACK_IMPORTED_MODULE_1__["gridUnitsToRem"])(2)};
  `);


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_globals_DocumentHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/globals/DocumentHead */ "./components/globals/DocumentHead/index.js");
/* harmony import */ var _Luna_components_globals_GlobalStyle_index_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Luna/components/globals/GlobalStyle/index.style */ "./Luna/components/globals/GlobalStyle/index.style.js");
/* harmony import */ var _Luna_components_globals_Main_index_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Luna/components/globals/Main/index.style */ "./Luna/components/globals/Main/index.style.js");
/* harmony import */ var _components_organisms_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/organisms/Header */ "./components/organisms/Header/index.js");
var _jsxFileName = "/Users/marcellegane/dev/kidsofcolour/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Index = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_globals_DocumentHead__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}), __jsx(_Luna_components_globals_GlobalStyle_index_style__WEBPACK_IMPORTED_MODULE_2__["GlobalStyle"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}), __jsx(_components_organisms_Header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}), __jsx(_Luna_components_globals_Main_index_style__WEBPACK_IMPORTED_MODULE_3__["Main"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/marcellegane/dev/kidsofcolour/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map