webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Luna/layouts/Container/index.js":
/*!*****************************************!*\
  !*** ./Luna/layouts/Container/index.js ***!
  \*****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _config_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/layout */ "./Luna/config/layout.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities */ "./Luna/utilities/index.js");



var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Container",
  componentId: "sc-1xk5blt-0"
})(["max-width:", ";margin-left:auto;margin-right:auto;padding-left:", ";padding-right:", ";"], Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(_config_layout__WEBPACK_IMPORTED_MODULE_1__["Layout"].maxWidth), Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["gridUnitsToRem"])(), Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["gridUnitsToRem"])());


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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.style */ "./components/molecules/Menu/index.style.js");
var _this = undefined,
    _jsxFileName = "/Users/marcellegane/dev/kidsofcolour/components/molecules/Menu/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ThisMenu = function ThisMenu() {
  return __jsx(_index_style__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 24
    }
  }, "Menu");
};

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Menu = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.style */ "./components/organisms/Header/index.style.js");
/* harmony import */ var _molecules_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/Menu */ "./components/molecules/Menu/index.js");
/* harmony import */ var _Luna_layouts_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Luna/layouts/Container */ "./Luna/layouts/Container/index.js");
var _this = undefined,
    _jsxFileName = "/Users/marcellegane/dev/kidsofcolour/components/organisms/Header/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var ThisHeader = function ThisHeader() {
  return __jsx(_index_style__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx(_Luna_layouts_Container__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("nav", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_molecules_Menu__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }))));
};

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
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Luna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Luna */ "./Luna/index.js");


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding-top: ", ";\n    padding-bottom: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "indexstyle__Header",
  componentId: "sc-1l8urqs-0"
})(["padding-top:", ";padding-bottom:", ";", ""], Object(_Luna__WEBPACK_IMPORTED_MODULE_2__["gridUnitsToRem"])(), Object(_Luna__WEBPACK_IMPORTED_MODULE_2__["gridUnitsToRem"])(), _Luna__WEBPACK_IMPORTED_MODULE_2__["LunaMedia"].above('medium')(_templateObject(), Object(_Luna__WEBPACK_IMPORTED_MODULE_2__["gridUnitsToRem"])(2), Object(_Luna__WEBPACK_IMPORTED_MODULE_2__["gridUnitsToRem"])(2)));


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_globals_DocumentHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/globals/DocumentHead */ "./components/globals/DocumentHead/index.js");
/* harmony import */ var _Luna_components_globals_GlobalStyle_index_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Luna/components/globals/GlobalStyle/index.style */ "./Luna/components/globals/GlobalStyle/index.style.js");
/* harmony import */ var _Luna_components_globals_Main_index_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Luna/components/globals/Main/index.style */ "./Luna/components/globals/Main/index.style.js");
/* harmony import */ var _components_organisms_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/organisms/Header */ "./components/organisms/Header/index.js");
var _this = undefined,
    _jsxFileName = "/Users/marcellegane/dev/kidsofcolour/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Index = function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_globals_DocumentHead__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }), __jsx(_Luna_components_globals_GlobalStyle_index_style__WEBPACK_IMPORTED_MODULE_2__["GlobalStyle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), __jsx(_components_organisms_Header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }), __jsx(_Luna_components_globals_Main_index_style__WEBPACK_IMPORTED_MODULE_3__["Main"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.7b483130ac5442cde10a.hot-update.js.map