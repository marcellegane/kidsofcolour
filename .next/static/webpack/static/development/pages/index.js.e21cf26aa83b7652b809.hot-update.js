webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Luna/components/globals/GlobalStyle/index.style.js":
/*!************************************************************!*\
  !*** ./Luna/components/globals/GlobalStyle/index.style.js ***!
  \************************************************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../.. */ "./Luna/index.js");


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t*,\n\t*:before,\n\t*:after {\n\t\tbox-sizing: border-box;\n\t\tmargin: 0;\n\t}\n\n\thtml {\n\t\tfont-size: ", ";\n\t}\n\n\tbody {\n\t\tfont-family: ", ";\n\t\tfont-size: ", ";\n\t\tcolor: ", ";\n\t\tbackground-color: ", ";\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), Object(___WEBPACK_IMPORTED_MODULE_2__["pxToEm"])(___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.size.base), ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.family.primary, Object(___WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.size.base), ___WEBPACK_IMPORTED_MODULE_2__["Luna"].color.primary.base, ___WEBPACK_IMPORTED_MODULE_2__["Luna"].color.light);


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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font */ "./Luna/config/font.js");
/* harmony import */ var _utilities_conversion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/conversion */ "./Luna/utilities/conversion.js");



var TextStyles = {
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
var XXXLarge = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-family:", ";font-weight:", ";font-size:", ";line-height:", ";"], _font__WEBPACK_IMPORTED_MODULE_1__["Font"].family.primary, _font__WEBPACK_IMPORTED_MODULE_1__["Font"].weight.medium, Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(TextStyles.xxxlarge.size), TextStyles.xxxlarge.lineHeight / TextStyles.xxxlarge.size);
var XXLarge = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-family:", ";font-weight:", ";font-size:", ";line-height:", ";"], _font__WEBPACK_IMPORTED_MODULE_1__["Font"].family.primary, _font__WEBPACK_IMPORTED_MODULE_1__["Font"].weight.normal, Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(TextStyles.xxlarge.size), TextStyles.xxlarge.lineHeight / TextStyles.xxlarge.size);
var XLarge = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-family:", ";font-weight:", ";font-size:", ";line-height:", ";"], _font__WEBPACK_IMPORTED_MODULE_1__["Font"].family.primary, _font__WEBPACK_IMPORTED_MODULE_1__["Font"].weight.normal, Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(TextStyles.xlarge.size), TextStyles.xlarge.lineHeight / TextStyles.xlarge.size);
var Large = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-family:", ";font-weight:", ";font-size:", ";line-height:", ";"], _font__WEBPACK_IMPORTED_MODULE_1__["Font"].family.primary, _font__WEBPACK_IMPORTED_MODULE_1__["Font"].weight.normal, Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(TextStyles.large.size), TextStyles.large.lineHeight / TextStyles.large.size);
var Medium = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-family:", ";font-weight:", ";font-size:", ";line-height:", ";"], _font__WEBPACK_IMPORTED_MODULE_1__["Font"].family.primary, _font__WEBPACK_IMPORTED_MODULE_1__["Font"].weight.normal, Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(TextStyles.medium.size), TextStyles.medium.lineHeight / TextStyles.medium.size);
var Small = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-family:", ";font-weight:", ";font-size:", ";line-height:", ";"], _font__WEBPACK_IMPORTED_MODULE_1__["Font"].family.primary, _font__WEBPACK_IMPORTED_MODULE_1__["Font"].weight.normal, Object(_utilities_conversion__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(TextStyles.small.size), TextStyles.small.lineHeight / TextStyles.small.size);
var TextStyle = {
  XXXLarge: XXXLarge,
  XXLarge: XXLarge,
  XLarge: XLarge,
  Large: Large,
  Medium: Medium,
  Small: Small
};


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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./Luna/index.js");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts */ "./Luna/layouts/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./Luna/components/index.js");
/* harmony import */ var _svgs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../svgs */ "./Luna/svgs/index.js");
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.style */ "./Luna/styleguide/index.style.js");
var _jsxFileName = "/Users/marcellegane/dev/kidsofcolour/Luna/styleguide/index.js",
    _this2 = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function renderColorBlocks(colorObject) {
  var _this = this;

  return Object.keys(colorObject).map(function (name) {
    return __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorSwatchBlock"], {
      key: name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }
    }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorSwatch"], {
      backgroundColor: colorObject[name],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Small"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    }, name), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Small"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, colorObject[name]));
  });
}

var ThisStyleGuide = function ThisStyleGuide(_ref) {
  var children = _ref.children;
  return __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["StyleGuide"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 3
    }
  }, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["StyleguideTitle"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Colours"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["XLarge"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "Primary"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorSwatchRow"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, renderColorBlocks(___WEBPACK_IMPORTED_MODULE_2__["Luna"].color.primary)), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["XLarge"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Secondary"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorSwatchRow"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, renderColorBlocks(___WEBPACK_IMPORTED_MODULE_2__["Luna"].color.secondary)), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["XLarge"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Grey"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorSwatchRow"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, renderColorBlocks(___WEBPACK_IMPORTED_MODULE_2__["Luna"].color.grey)), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["StyleguideTitle"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "Font Styles"), __jsx("div", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Medium"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "# XXXLarge"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["XXXLarge"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.family.primary, ", ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.weight.normal, ",", ' ', ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.xxxlarge.size, " /", ' ', ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.xxxlarge.lineHeight)), __jsx("div", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Medium"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "# XXLarge"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["XXLarge"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.family.primary, ", ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.weight.normal, ",", ' ', ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.xxlarge.size, " /", ' ', ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.xxlarge.lineHeight)), __jsx("div", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Medium"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, "# XLarge"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["XLarge"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.family.primary, ", ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.weight.normal, ",", ' ', ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.xlarge.size, " / ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.xlarge.lineHeight)), __jsx("div", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Medium"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, "# Large"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Large"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.family.primary, ", ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.weight.normal, ",", ' ', ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.large.size, " / ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.large.lineHeight)), __jsx("div", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Medium"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, "# Medium"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Medium"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.family.primary, ", ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.weight.normal, ",", ' ', ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.medium.size, " / ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.medium.lineHeight)), __jsx("div", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Small"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, "# Small"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Small"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.family.primary, ", ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].font.weight.normal, ",", ' ', ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.small.size, " / ", ___WEBPACK_IMPORTED_MODULE_2__["Luna"].TextStyles.small.lineHeight)), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["StyleguideTitle"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, "Grid"), __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
    small: 6,
    medium: 4,
    large: 3,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorBlock"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  })), __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
    small: 6,
    medium: 4,
    large: 3,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorBlock"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  })), __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
    small: 6,
    medium: 4,
    large: 3,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorBlock"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  })), __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
    small: 6,
    medium: 4,
    large: 3,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorBlock"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  })), __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
    small: 6,
    medium: 4,
    large: 3,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorBlock"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  })), __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
    small: 6,
    medium: 4,
    large: 6,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorBlock"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  })), __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
    small: 6,
    medium: 4,
    large: 3,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["ColorBlock"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }))), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["StyleguideTitle"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, "Components"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["StyleguideTitle"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, "Inputs"), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["StyleguideTitle"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, "Icons"), __jsx(_svgs__WEBPACK_IMPORTED_MODULE_5__["IconBin"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }), __jsx(_svgs__WEBPACK_IMPORTED_MODULE_5__["IconPlus"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["StyleguideTitle"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, "Molecules"), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["AccordionTitle"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, "Accordion"), __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
    medium: "6",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Accordion"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
    label: "AccordionItem 1",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Medium"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore, distinctio magnam vitae, sapiente maxime neque dolores alias repellat, consequuntur assumenda facilis. Dolores natus alias dicta iste illum necessitatibus consequuntur!")), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
    label: "AccordionItem 2",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Medium"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore, distinctio magnam vitae, sapiente maxime neque dolores alias repellat, consequuntur assumenda facilis. Dolores natus alias dicta iste illum necessitatibus consequuntur!")), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
    label: "AccordionItem 3",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_6__["Medium"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore, distinctio magnam vitae, sapiente maxime neque dolores alias repellat, consequuntur assumenda facilis. Dolores natus alias dicta iste illum necessitatibus consequuntur!"))))), children)));
};

ThisStyleGuide.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};


/***/ })

})
//# sourceMappingURL=index.js.e21cf26aa83b7652b809.hot-update.js.map