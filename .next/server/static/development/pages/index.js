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

/***/ "./Luna/components/atoms/index.js":
/*!****************************************!*\
  !*** ./Luna/components/atoms/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

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

/***/ "./Luna/components/globals/index.js":
/*!******************************************!*\
  !*** ./Luna/components/globals/index.js ***!
  \******************************************/
/*! exports provided: GlobalStyle, Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GlobalStyle_index_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalStyle/index.style */ "./Luna/components/globals/GlobalStyle/index.style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return _GlobalStyle_index_style__WEBPACK_IMPORTED_MODULE_0__["GlobalStyle"]; });

/* harmony import */ var _Main_index_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main/index.style */ "./Luna/components/globals/Main/index.style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return _Main_index_style__WEBPACK_IMPORTED_MODULE_1__["Main"]; });




/***/ }),

/***/ "./Luna/components/index.js":
/*!**********************************!*\
  !*** ./Luna/components/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atoms */ "./Luna/components/atoms/index.js");
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_atoms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _atoms__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _atoms__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ "./Luna/components/globals/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return _globals__WEBPACK_IMPORTED_MODULE_1__["Main"]; });

/* harmony import */ var _molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./molecules */ "./Luna/components/molecules/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return _molecules__WEBPACK_IMPORTED_MODULE_2__["Accordion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionTitle", function() { return _molecules__WEBPACK_IMPORTED_MODULE_2__["AccordionTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return _molecules__WEBPACK_IMPORTED_MODULE_2__["AccordionItem"]; });





/***/ }),

/***/ "./Luna/components/molecules/Accordion/index.style.js":
/*!************************************************************!*\
  !*** ./Luna/components/molecules/Accordion/index.style.js ***!
  \************************************************************/
/*! exports provided: Accordion, AccordionTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionTitle", function() { return AccordionTitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../.. */ "./Luna/index.js");


const Accordion = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "indexstyle__Accordion",
  componentId: "sc-17bma17-0"
})([""]);
const AccordionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "indexstyle__AccordionTitle",
  componentId: "sc-17bma17-1"
})(["", " color:", ";font-weight:", ";+ ", "{margin-top:", ";}"], ___WEBPACK_IMPORTED_MODULE_1__["Luna"].TextStyle.Large, ___WEBPACK_IMPORTED_MODULE_1__["Luna"].color.primary.base, ___WEBPACK_IMPORTED_MODULE_1__["Luna"].font.weight.bold, Accordion, Object(___WEBPACK_IMPORTED_MODULE_1__["gridUnitsToRem"])(1.5));


/***/ }),

/***/ "./Luna/components/molecules/AccordionItem/index.js":
/*!**********************************************************!*\
  !*** ./Luna/components/molecules/AccordionItem/index.js ***!
  \**********************************************************/
/*! exports provided: AccordionItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return ThisAccordionItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.style */ "./Luna/components/molecules/AccordionItem/index.style.js");
/* harmony import */ var _svgs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../svgs */ "./Luna/svgs/index.js");
var _jsxFileName = "/Users/marcellegane/dev/kidsofcolour/Luna/components/molecules/AccordionItem/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ThisAccordionItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen
    };
    this.contentRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.contentInnerRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.handleItemToggle = this.handleItemToggle.bind(this);
  }

  componentDidMount() {
    const {
      isOpen
    } = this.state;

    if (isOpen) {
      this.contentRef.current.style.display = 'block';
      this.contentInnerRef.current.style.opacity = 1;
    }
  }

  handleItemToggle() {
    const {
      isOpen
    } = this.state;
    const content = this.contentRef.current;
    const contentInner = this.contentInnerRef.current;

    if (isOpen) {
      const tl = gsap__WEBPACK_IMPORTED_MODULE_2___default.a.timeline({
        onComplete: () => {
          content.style.display = 'none';
          content.style.height = '';
        }
      });
      tl.to(content, {
        duration: 0.3,
        height: 0,
        ease: 'power3.out'
      }).to(contentInner, {
        duration: 0.1,
        opacity: 0
      }, 0);
    } else {
      content.style.display = 'block';
      const contentHeight = content.offsetHeight;
      content.style.height = 0;
      const tl = gsap__WEBPACK_IMPORTED_MODULE_2___default.a.timeline({
        onComplete: () => {
          content.style.height = '';
        }
      });
      tl.to(content, {
        duration: 0.3,
        height: contentHeight,
        ease: 'power3.out'
      }).fromTo(contentInner, {
        duration: 0.15,
        opacity: 0
      }, {
        opacity: 1,
        delay: 0.05,
        ease: 'power2.out'
      }, 0.1);
    }

    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const {
      children,
      label
    } = this.props;
    const {
      isOpen
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children && label && __jsx(_index_style__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"], {
      "data-test": "accordion-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }
    }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_3__["AccordionItemHeader"], {
      isOpen: isOpen,
      onClick: this.handleItemToggle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }
    }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_3__["AccordionItemLabel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 15
      }
    }, label), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_3__["AccordionItemIcon"], {
      isOpen: isOpen,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 15
      }
    }, __jsx(_svgs__WEBPACK_IMPORTED_MODULE_4__["IconPlus"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    }))), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_3__["AccordionItemMain"], {
      ref: this.contentRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }
    }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_3__["AccordionItemContent"], {
      ref: this.contentInnerRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 15
      }
    }, children))));
  }

}

_defineProperty(ThisAccordionItem, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
});

_defineProperty(ThisAccordionItem, "defaultProps", {
  isOpen: false
});



/***/ }),

/***/ "./Luna/components/molecules/AccordionItem/index.style.js":
/*!****************************************************************!*\
  !*** ./Luna/components/molecules/AccordionItem/index.style.js ***!
  \****************************************************************/
/*! exports provided: AccordionItem, AccordionItemHeader, AccordionItemLabel, AccordionItemIcon, AccordionItemMain, AccordionItemContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemHeader", function() { return AccordionItemHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemLabel", function() { return AccordionItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemIcon", function() { return AccordionItemIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemMain", function() { return AccordionItemMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemContent", function() { return AccordionItemContent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../.. */ "./Luna/index.js");


const AccordionItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "indexstyle__AccordionItem",
  componentId: "sc-12e6yqi-0"
})(["& + &{margin-top:", ";}"], Object(___WEBPACK_IMPORTED_MODULE_1__["gridUnitsToRem"])(1.5));
const AccordionItemHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "indexstyle__AccordionItemHeader",
  componentId: "sc-12e6yqi-1"
})(["display:flex;align-items:center;justify-content:space-between;width:100%;padding-top:", ";padding-right:", ";padding-bottom:", ";padding-left:0;border:none;border-bottom:", " solid ", ";background:transparent;:hover,:focus,:active{outline:none;cursor:pointer;color:", ";}color:", ";"], Object(___WEBPACK_IMPORTED_MODULE_1__["gridUnitsToRem"])(), Object(___WEBPACK_IMPORTED_MODULE_1__["gridUnitsToRem"])(0.5), Object(___WEBPACK_IMPORTED_MODULE_1__["gridUnitsToRem"])(), Object(___WEBPACK_IMPORTED_MODULE_1__["pxToRem"])(1), ___WEBPACK_IMPORTED_MODULE_1__["Luna"].color.primary.base, ___WEBPACK_IMPORTED_MODULE_1__["Luna"].color.primary.base, ___WEBPACK_IMPORTED_MODULE_1__["Luna"].color.primary.base);
const AccordionItemLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "indexstyle__AccordionItemLabel",
  componentId: "sc-12e6yqi-2"
})(["margin-right:", ";", " color:currentColor;transition:color 0.3s ease;"], Object(___WEBPACK_IMPORTED_MODULE_1__["gridUnitsToRem"])(), ___WEBPACK_IMPORTED_MODULE_1__["Luna"].TextStyle.Large);
const AccordionItemIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "indexstyle__AccordionItemIcon",
  componentId: "sc-12e6yqi-3"
})(["transform:", ";transition:transform 0.3s ease;"], props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)');
const AccordionItemMain = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "indexstyle__AccordionItemMain",
  componentId: "sc-12e6yqi-4"
})(["display:none;overflow:hidden;"]);
const AccordionItemContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "indexstyle__AccordionItemContent",
  componentId: "sc-12e6yqi-5"
})(["padding-top:", ";opacity:0;"], Object(___WEBPACK_IMPORTED_MODULE_1__["gridUnitsToRem"])());


/***/ }),

/***/ "./Luna/components/molecules/index.js":
/*!********************************************!*\
  !*** ./Luna/components/molecules/index.js ***!
  \********************************************/
/*! exports provided: Accordion, AccordionTitle, AccordionItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Accordion_index_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accordion/index.style */ "./Luna/components/molecules/Accordion/index.style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return _Accordion_index_style__WEBPACK_IMPORTED_MODULE_0__["Accordion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionTitle", function() { return _Accordion_index_style__WEBPACK_IMPORTED_MODULE_0__["AccordionTitle"]; });

/* harmony import */ var _AccordionItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccordionItem */ "./Luna/components/molecules/AccordionItem/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return _AccordionItem__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"]; });




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
    base: '#003149',
    dark: '#001F2E',
    light: '#6A8897',
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
  dark: '#111111'
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

/***/ "./Luna/layouts/Grid/Grid.js":
/*!***********************************!*\
  !*** ./Luna/layouts/Grid/Grid.js ***!
  \***********************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return ThisGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid.style */ "./Luna/layouts/Grid/Grid.style.js");
var _jsxFileName = "/Users/marcellegane/dev/kidsofcolour/Luna/layouts/Grid/Grid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const ThisGrid = (_ref) => {
  let props = Object.assign({}, _ref);
  const {
    children
  } = props;
  return __jsx(_Grid_style__WEBPACK_IMPORTED_MODULE_2__["Grid"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }), __jsx(_Grid_style__WEBPACK_IMPORTED_MODULE_2__["GridMain"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), children));
};

ThisGrid.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  overflow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  gutters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  justify: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  align: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
ThisGrid.defaultProps = {
  overflow: 'hidden',
  gutters: true,
  direction: 'row',
  justify: 'flex-start',
  align: 'flex-start'
};


/***/ }),

/***/ "./Luna/layouts/Grid/Grid.style.js":
/*!*****************************************!*\
  !*** ./Luna/layouts/Grid/Grid.style.js ***!
  \*****************************************/
/*! exports provided: Grid, GridMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridMain", function() { return GridMain; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/layout */ "./Luna/config/layout.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities */ "./Luna/utilities/index.js");



const Grid = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Gridstyle__Grid",
  componentId: "abtn4g-0"
})(["overflow:", ";"], props => props.overflow);
const GridMain = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Gridstyle__GridMain",
  componentId: "abtn4g-1"
})(["display:flex;flex-wrap:wrap;flex-direction:", ";justify-content:", ";align-items:", ";", ""], props => props.direction, props => props.justify, props => props.align, props => {
  if (props.gutters) {
    return `
        margin-top: ${Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(-_config_layout__WEBPACK_IMPORTED_MODULE_1__["Layout"].grid.gutter * 2)};
        margin-left: ${Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(-_config_layout__WEBPACK_IMPORTED_MODULE_1__["Layout"].grid.gutter)};
        margin-right: ${Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(-_config_layout__WEBPACK_IMPORTED_MODULE_1__["Layout"].grid.gutter)};
      `;
  }
});


/***/ }),

/***/ "./Luna/layouts/Grid/GridItem.js":
/*!***************************************!*\
  !*** ./Luna/layouts/Grid/GridItem.js ***!
  \***************************************/
/*! exports provided: GridItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridItem", function() { return ThisGridItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GridItem_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridItem.style */ "./Luna/layouts/Grid/GridItem.style.js");
var _jsxFileName = "/Users/marcellegane/dev/kidsofcolour/Luna/layouts/Grid/GridItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ThisGridItem = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(_GridItem_style__WEBPACK_IMPORTED_MODULE_2__["GridItem"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }), children);
};

ThisGridItem.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  gutters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
ThisGridItem.defaultProps = {
  gutters: true
};


/***/ }),

/***/ "./Luna/layouts/Grid/GridItem.style.js":
/*!*********************************************!*\
  !*** ./Luna/layouts/Grid/GridItem.style.js ***!
  \*********************************************/
/*! exports provided: GridItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridItem", function() { return GridItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/layout */ "./Luna/config/layout.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities */ "./Luna/utilities/index.js");



const {
  breakpoints,
  grid
} = _config_layout__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const {
  columnsTotal
} = grid;
const defaultGutter = grid.gutter;

const getGridItemWidth = (includeGutters, columnSpan) => `width: ${includeGutters ? `calc(${columnSpan / columnsTotal * 100}% - ${Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(defaultGutter * 2)})` : `${columnSpan / columnsTotal * 100}%`};`;

const getGridMargin = includeGutters => `margin: ${includeGutters ? `${Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(defaultGutter * 2)} ${Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(defaultGutter)} 0` : `0`};`;

const getGridItemOffset = (includeGutters, columnSpan) => `margin-left: ${includeGutters ? `calc(${columnSpan / columnsTotal * 100}% + ${Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(defaultGutter)})` : `${columnSpan / columnsTotal * 100}%`};`;

const GridItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridItemstyle__GridItem",
  componentId: "sc-1b5xv2k-0"
})(["", ""], props => {
  const {
    gutters
  } = props;
  const defaultStyles = `
      ${getGridItemWidth(gutters, columnsTotal)}
      ${getGridMargin(gutters)}
    `;
  const columnSpanStyles = Object.keys(breakpoints).reduce((string, breakpoint) => {
    if (props[breakpoint]) {
      return `${string}
            @media only screen and (min-width: ${Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["pxToEm"])(breakpoints[breakpoint] + 1)}) {
              ${getGridItemWidth(gutters, props[breakpoint])}
              ${getGridMargin(gutters)}
            }
          `;
    }

    return string;
  }, ``);
  const offsetStyles = Object.keys(breakpoints).reduce((string, breakpoint) => {
    if (props[`offset-${breakpoint}`]) {
      return `${string}
            @media only screen and (min-width: ${Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["pxToEm"])(breakpoints[breakpoint] + 1)}) {
              ${getGridItemOffset(gutters, props[`offset-${breakpoint}`])}
            }
          `;
    }

    return string;
  }, ``);
  const orderStyles = Object.keys(breakpoints).reduce((string, breakpoint) => {
    if (props[`order-${breakpoint}`]) {
      return `${string}
        @media only screen and (min-width: ${Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["pxToEm"])(breakpoints[breakpoint] + 1)}) {
          order: ${props[`order-${breakpoint}`]};
        }
      `;
    }

    return string;
  }, ``);
  return `
      ${defaultStyles}
      ${columnSpanStyles}
      ${offsetStyles}
      ${orderStyles}
    `;
});


/***/ }),

/***/ "./Luna/layouts/Grid/index.js":
/*!************************************!*\
  !*** ./Luna/layouts/Grid/index.js ***!
  \************************************/
/*! exports provided: Grid, GridItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid */ "./Luna/layouts/Grid/Grid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _Grid__WEBPACK_IMPORTED_MODULE_0__["Grid"]; });

/* harmony import */ var _GridItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridItem */ "./Luna/layouts/Grid/GridItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridItem", function() { return _GridItem__WEBPACK_IMPORTED_MODULE_1__["GridItem"]; });




/***/ }),

/***/ "./Luna/layouts/Stack/index.js":
/*!*************************************!*\
  !*** ./Luna/layouts/Stack/index.js ***!
  \*************************************/
/*! exports provided: Stack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return ThisStack; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.style */ "./Luna/layouts/Stack/index.style.js");
var _jsxFileName = "/Users/marcellegane/dev/kidsofcolour/Luna/layouts/Stack/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ThisStack = ({
  children,
  stackMultiplier
}) => __jsx(_index_style__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
  stackMultiplier: stackMultiplier,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, children);

ThisStack.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  stackMultiplier: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
ThisStack.defaultProps = {
  stackMultiplier: 1
};


/***/ }),

/***/ "./Luna/layouts/Stack/index.style.js":
/*!*******************************************!*\
  !*** ./Luna/layouts/Stack/index.style.js ***!
  \*******************************************/
/*! exports provided: Stack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_conversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/conversion */ "./Luna/utilities/conversion.js");


const Stack = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "indexstyle__Stack",
  componentId: "sc-1w2x9t4-0"
})(["width:100%;> * + *{margin-top:", ";}"], props => `${Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_1__["gridUnitsToRem"])(props.stackMultiplier)}`);


/***/ }),

/***/ "./Luna/layouts/index.js":
/*!*******************************!*\
  !*** ./Luna/layouts/index.js ***!
  \*******************************/
/*! exports provided: Container, Grid, GridItem, Stack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ "./Luna/layouts/Container/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _Container__WEBPACK_IMPORTED_MODULE_0__["Container"]; });

/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid */ "./Luna/layouts/Grid/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _Grid__WEBPACK_IMPORTED_MODULE_1__["Grid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridItem", function() { return _Grid__WEBPACK_IMPORTED_MODULE_1__["GridItem"]; });

/* harmony import */ var _Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stack */ "./Luna/layouts/Stack/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return _Stack__WEBPACK_IMPORTED_MODULE_2__["Stack"]; });





/***/ }),

/***/ "./Luna/styleguide/index.js":
/*!**********************************!*\
  !*** ./Luna/styleguide/index.js ***!
  \**********************************/
/*! exports provided: Styleguide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Styleguide", function() { return ThisStyleGuide; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./Luna/index.js");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts */ "./Luna/layouts/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./Luna/components/index.js");
/* harmony import */ var _svgs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../svgs */ "./Luna/svgs/index.js");
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.style */ "./Luna/styleguide/index.style.js");
var _jsxFileName = "/Users/marcellegane/dev/kidsofcolour/Luna/styleguide/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function renderColorBlocks(colorObject) {
  return Object.keys(colorObject).map(name => __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorSwatchBlock"], {
    key: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorSwatch"], {
    backgroundColor: colorObject[name],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Small"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, name), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Small"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, colorObject[name])));
}

const ThisStyleGuide = ({
  children
}) => __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["StyleGuide"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }
}, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }
}, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }
}, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["StyleguideTitle"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }
}, "Colours"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["XLarge"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }
}, "Primary"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorSwatchRow"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }
}, renderColorBlocks(___WEBPACK_IMPORTED_MODULE_2__["Luna"].color.primary)), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["XLarge"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }
}, "Secondary"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorSwatchRow"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }
}, renderColorBlocks(___WEBPACK_IMPORTED_MODULE_2__["Luna"].color.secondary)), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["XLarge"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }
}, "Grey"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorSwatchRow"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }
}, renderColorBlocks(___WEBPACK_IMPORTED_MODULE_2__["Luna"].color.grey)), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["StyleguideTitle"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }
}, "Font Styles"), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }
}, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Medium"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 11
  }
}, "# XXXLarge"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["XXXLarge"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 11
  }
}, ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.family.primary, ", ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.weight.normal, ",", ' ', ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.xxxlarge.size, " /", ' ', ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.xxxlarge.lineHeight)), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }
}, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Medium"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 11
  }
}, "# XXLarge"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["XXLarge"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 11
  }
}, ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.family.primary, ", ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.weight.normal, ",", ' ', ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.xxlarge.size, " /", ' ', ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.xxlarge.lineHeight)), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 9
  }
}, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Medium"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 11
  }
}, "# XLarge"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["XLarge"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 11
  }
}, ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.family.primary, ", ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.weight.normal, ",", ' ', ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.xlarge.size, " / ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.xlarge.lineHeight)), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 9
  }
}, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Medium"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 11
  }
}, "# Large"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Large"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 11
  }
}, ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.family.primary, ", ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.weight.normal, ",", ' ', ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.large.size, " / ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.large.lineHeight)), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 9
  }
}, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Medium"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 11
  }
}, "# Medium"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Medium"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 11
  }
}, ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.family.primary, ", ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.weight.normal, ",", ' ', ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.medium.size, " / ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.medium.lineHeight)), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 9
  }
}, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Small"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 11
  }
}, "# Small"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Small"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 11
  }
}, ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.family.primary, ", ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.weight.normal, ",", ' ', ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.small.size, " / ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.small.lineHeight)), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["StyleguideTitle"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 9
  }
}, "Grid"), __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 9
  }
}, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
  small: 6,
  medium: 4,
  large: 3,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 11
  }
}, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorBlock"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 13
  }
})), __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
  small: 6,
  medium: 4,
  large: 3,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 11
  }
}, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorBlock"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 13
  }
})), __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
  small: 6,
  medium: 4,
  large: 3,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 11
  }
}, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorBlock"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 13
  }
})), __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
  small: 6,
  medium: 4,
  large: 3,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 11
  }
}, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorBlock"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 13
  }
})), __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
  small: 6,
  medium: 4,
  large: 3,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 11
  }
}, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorBlock"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 13
  }
})), __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
  small: 6,
  medium: 4,
  large: 6,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 11
  }
}, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorBlock"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 13
  }
})), __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
  small: 6,
  medium: 4,
  large: 3,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 11
  }
}, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorBlock"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 13
  }
}))), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["StyleguideTitle"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 9
  }
}, "Components"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["StyleguideTitle"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 9
  }
}, "Inputs"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["StyleguideTitle"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 9
  }
}, "Icons"), __jsx(_svgs__WEBPACK_IMPORTED_MODULE_5__["IconBin"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 9
  }
}), __jsx(_svgs__WEBPACK_IMPORTED_MODULE_5__["IconPlus"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 9
  }
}), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["StyleguideTitle"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 9
  }
}, "Molecules"), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["AccordionTitle"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 9
  }
}, "Accordion"), __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 9
  }
}, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
  medium: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 11
  }
}, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Accordion"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 13
  }
}, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
  label: "AccordionItem 1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 138,
    columnNumber: 15
  }
}, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Medium"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 17
  }
}, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore, distinctio magnam vitae, sapiente maxime neque dolores alias repellat, consequuntur assumenda facilis. Dolores natus alias dicta iste illum necessitatibus consequuntur!")), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
  label: "AccordionItem 2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 15
  }
}, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Medium"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 17
  }
}, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore, distinctio magnam vitae, sapiente maxime neque dolores alias repellat, consequuntur assumenda facilis. Dolores natus alias dicta iste illum necessitatibus consequuntur!")), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
  label: "AccordionItem 3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154,
    columnNumber: 15
  }
}, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Medium"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 17
  }
}, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore, distinctio magnam vitae, sapiente maxime neque dolores alias repellat, consequuntur assumenda facilis. Dolores natus alias dicta iste illum necessitatibus consequuntur!"))))), children)));

ThisStyleGuide.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};


/***/ }),

/***/ "./Luna/styleguide/index.style.js":
/*!****************************************!*\
  !*** ./Luna/styleguide/index.style.js ***!
  \****************************************/
/*! exports provided: StyleGuide, StyleguideTitle, XXXLarge, XXLarge, XLarge, Large, Medium, Small, ColorSwatch, ColorSwatchRow, ColorSwatchBlock, ColorBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleGuide", function() { return StyleGuide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleguideTitle", function() { return StyleguideTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XXXLarge", function() { return XXXLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XXLarge", function() { return XXLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XLarge", function() { return XLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Large", function() { return Large; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Medium", function() { return Medium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Small", function() { return Small; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSwatch", function() { return ColorSwatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSwatchRow", function() { return ColorSwatchRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSwatchBlock", function() { return ColorSwatchBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorBlock", function() { return ColorBlock; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_textStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/textStyle */ "./Luna/config/textStyle.js");
/* harmony import */ var _config_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/layout */ "./Luna/config/layout.js");
/* harmony import */ var _utilities_conversion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/conversion */ "./Luna/utilities/conversion.js");
/* harmony import */ var _config_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/color */ "./Luna/config/color.js");
/* harmony import */ var _config_font__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/font */ "./Luna/config/font.js");






const StyleguideTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "indexstyle__StyleguideTitle",
  componentId: "sc-110i98r-0"
})(["", " font-weight:", ";"], _config_textStyle__WEBPACK_IMPORTED_MODULE_1__["TextStyle"].XXXLarge, _config_font__WEBPACK_IMPORTED_MODULE_5__["Font"].weight.bold);
const StyleGuide = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "indexstyle__StyleGuide",
  componentId: "sc-110i98r-1"
})(["padding-top:", ";padding-bottom:", ";margin-bottom:", ";"], Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_3__["gridUnitsToRem"])(2), Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_3__["gridUnitsToRem"])(2), Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_3__["gridUnitsToRem"])(3));
const XXXLarge = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "indexstyle__XXXLarge",
  componentId: "sc-110i98r-2"
})(["", ""], _config_textStyle__WEBPACK_IMPORTED_MODULE_1__["TextStyle"].XXXLarge);
const XXLarge = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "indexstyle__XXLarge",
  componentId: "sc-110i98r-3"
})(["", ""], _config_textStyle__WEBPACK_IMPORTED_MODULE_1__["TextStyle"].XXLarge);
const XLarge = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "indexstyle__XLarge",
  componentId: "sc-110i98r-4"
})(["", ""], _config_textStyle__WEBPACK_IMPORTED_MODULE_1__["TextStyle"].Xlarge);
const Large = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "indexstyle__Large",
  componentId: "sc-110i98r-5"
})(["", ""], _config_textStyle__WEBPACK_IMPORTED_MODULE_1__["TextStyle"].Large);
const Medium = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "indexstyle__Medium",
  componentId: "sc-110i98r-6"
})(["", ""], _config_textStyle__WEBPACK_IMPORTED_MODULE_1__["TextStyle"].Medium);
const Small = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "indexstyle__Small",
  componentId: "sc-110i98r-7"
})(["", ""], _config_textStyle__WEBPACK_IMPORTED_MODULE_1__["TextStyle"].Small);
const ColorSwatchRow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "indexstyle__ColorSwatchRow",
  componentId: "sc-110i98r-8"
})(["display:flex;flex-wrap:wrap;margin-left:", ";margin-right:", ";"], Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_3__["gridUnitsToRem"])(-0.5), Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_3__["gridUnitsToRem"])(-0.5));
const ColorSwatchBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "indexstyle__ColorSwatchBlock",
  componentId: "sc-110i98r-9"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;max-width:", ";margin:", ";text-align:center;"], Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_3__["pxToRem"])(100), Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_3__["gridUnitsToRem"])(0.5));
const ColorSwatch = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "indexstyle__ColorSwatch",
  componentId: "sc-110i98r-10"
})(["display:flex;flex-direction:column;width:100%;margin-bottom:", ";background-color:", ";border-width:", ";border-style:solid;border-color:", ";&:before{content:'';display:block;width:100%;height:0;padding-bottom:100%;}"], Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_3__["gridUnitsToRem"])(0.5), props => props.backgroundColor, Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_3__["pxToRem"])(2), props => props.borderColor ? props.borderColor : props.backgroundColor);
const ColorBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "indexstyle__ColorBlock",
  componentId: "sc-110i98r-11"
})(["padding:", ";background-color:", ";&:before{content:'';display:block;width:100%;height:0;padding-bottom:40%;}"], Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_3__["gridUnitsToRem"])(), _config_color__WEBPACK_IMPORTED_MODULE_4__["Color"].grey.light);


/***/ }),

/***/ "./Luna/svgs/icons/IconBin/index.js":
/*!******************************************!*\
  !*** ./Luna/svgs/icons/IconBin/index.js ***!
  \******************************************/
/*! exports provided: IconBin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBin", function() { return IconBin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/marcellegane/dev/kidsofcolour/Luna/svgs/icons/IconBin/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const IconBin = props => {
  const {
    width,
    height,
    fill,
    responsive
  } = props;
  const svgAttributes = responsive ? {} : {
    width,
    height
  };
  return __jsx("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, svgAttributes, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), __jsx("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M9.54 0c.236 0 .471.121.623.33l.79 1.145h4.29c.404 0 .74.347.757.763 0 .417-.336.764-.74.764h-.64l-1.278 11.02C13.208 15.15 12.282 16 11.172 16H4.828c-1.11 0-2.036-.85-2.17-1.978l-1.28-11.02H.74c-.404 0-.74-.347-.74-.764 0-.416.336-.763.74-.763h4.291L5.821.33A.737.737 0 016.445 0zm3.583 3.003H2.877l1.261 10.83a.702.702 0 00.69.641h6.343a.701.701 0 00.69-.642l1.262-10.829zM5.956 4.548a.77.77 0 01.791.711l.471 6.977a.765.765 0 01-.69.815h-.05c-.388 0-.707-.312-.74-.711l-.472-6.977a.765.765 0 01.69-.815zm4.071-.018c.404.034.724.4.69.815l-.471 6.977c-.034.4-.353.712-.74.712h-.05c-.421-.018-.724-.382-.69-.816l.47-6.976a.768.768 0 01.791-.712z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
};

IconBin.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  responsive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
IconBin.defaultProps = {
  width: 16,
  height: 16,
  fill: 'currentColor',
  responsive: false
};


/***/ }),

/***/ "./Luna/svgs/icons/IconPlus/index.js":
/*!*******************************************!*\
  !*** ./Luna/svgs/icons/IconPlus/index.js ***!
  \*******************************************/
/*! exports provided: IconPlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconPlus", function() { return IconPlus; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/marcellegane/dev/kidsofcolour/Luna/svgs/icons/IconPlus/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const IconPlus = props => {
  const {
    width,
    height,
    fill,
    responsive
  } = props;
  const svgAttributes = responsive ? {} : {
    width,
    height
  };
  return __jsx("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 14"
  }, svgAttributes, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), __jsx("path", {
    fill: "none",
    stroke: fill,
    strokeWidth: "2",
    d: "M7 0v14M0 7h14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
};

IconPlus.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  responsive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
IconPlus.defaultProps = {
  width: 14,
  height: 14,
  fill: 'currentColor',
  responsive: false
};


/***/ }),

/***/ "./Luna/svgs/icons/index.js":
/*!**********************************!*\
  !*** ./Luna/svgs/icons/index.js ***!
  \**********************************/
/*! exports provided: IconBin, IconPlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconBin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconBin */ "./Luna/svgs/icons/IconBin/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconBin", function() { return _IconBin__WEBPACK_IMPORTED_MODULE_0__["IconBin"]; });

/* harmony import */ var _IconPlus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconPlus */ "./Luna/svgs/icons/IconPlus/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconPlus", function() { return _IconPlus__WEBPACK_IMPORTED_MODULE_1__["IconPlus"]; });




/***/ }),

/***/ "./Luna/svgs/index.js":
/*!****************************!*\
  !*** ./Luna/svgs/index.js ***!
  \****************************/
/*! exports provided: IconBin, IconPlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ "./Luna/svgs/icons/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconBin", function() { return _icons__WEBPACK_IMPORTED_MODULE_0__["IconBin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconPlus", function() { return _icons__WEBPACK_IMPORTED_MODULE_0__["IconPlus"]; });



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
/* harmony import */ var _Luna_styleguide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Luna/styleguide */ "./Luna/styleguide/index.js");
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
}), __jsx(_Luna_components_globals_Main_index_style__WEBPACK_IMPORTED_MODULE_3__["Main"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, __jsx(_Luna_styleguide__WEBPACK_IMPORTED_MODULE_4__["Styleguide"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
})));

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

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gsap");

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