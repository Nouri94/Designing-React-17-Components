"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./pages/speakers.js":
/*!***************************!*\
  !*** ./pages/speakers.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Speakers = function(param) {\n    var speakers = param.speakers;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: speakers.map(function(param) {\n            var imageSrc = param.imageSrc, name = param.name;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"images/\".concat(imageSrc, \".jpg\"),\n                alt: name\n            }, imageSrc, false, {\n                fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\speakers.js\",\n                lineNumber: 8,\n                columnNumber: 20\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\speakers.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, _this);\n};\n_c = Speakers;\nfunction withData(Component) {\n    var speakers = [\n        {\n            imageSrc: \"speaker-1124\",\n            name: \"Nouri Issaki\"\n        },\n        {\n            imageSrc: \"speaker-1530\",\n            name: \"Nouri Issaki2\"\n        },\n        {\n            imageSrc: \"speaker-10803\",\n            name: \"Nouri Issaki3\"\n        }, \n    ];\n    return function() {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            speakers: speakers\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\speakers.js\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, this);\n    };\n}\nvar EnhancedSpeakerData = withData(Speakers);\n_c1 = EnhancedSpeakerData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EnhancedSpeakerData);\nvar _c, _c1;\n$RefreshReg$(_c, \"Speakers\");\n$RefreshReg$(_c1, \"EnhancedSpeakerData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zcGVha2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUEwQjtBQUUxQixJQUFNQyxRQUFRLEdBQUcsZ0JBQWdCO1FBQWRDLFFBQVEsU0FBUkEsUUFBUTtJQUV2QixxQkFDSSw4REFBQ0MsS0FBRztrQkFDQ0QsUUFBUSxDQUFDRSxHQUFHLENBQUMsZ0JBQXFCO2dCQUFuQkMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLElBQUksU0FBSkEsSUFBSTtZQUM5QixxQkFBTyw4REFBQ0MsS0FBRztnQkFBQ0MsR0FBRyxFQUFFLFNBQVEsQ0FBVyxNQUFJLENBQWJILFFBQVEsRUFBQyxNQUFJLENBQUM7Z0JBQUVJLEdBQUcsRUFBRUgsSUFBSTtlQUFPRCxRQUFROzs7O3FCQUFJO1NBQ3RFLENBQUM7Ozs7O2FBQ0EsQ0FDUjtDQUNMO0FBVEtKLEtBQUFBLFFBQVE7QUFVZCxTQUFTUyxRQUFRLENBQUNDLFNBQVMsRUFBQztJQUN4QixJQUFNVCxRQUFRLEdBQUc7UUFDYjtZQUFDRyxRQUFRLEVBQUcsY0FBYztZQUFFQyxJQUFJLEVBQUUsY0FBYztTQUFDO1FBQ2pEO1lBQUNELFFBQVEsRUFBRyxjQUFjO1lBQUVDLElBQUksRUFBRSxlQUFlO1NBQUM7UUFDbEQ7WUFBQ0QsUUFBUSxFQUFHLGVBQWU7WUFBRUMsSUFBSSxFQUFFLGVBQWU7U0FBQztLQUN0RDtJQUNELE9BQU8sV0FBVTtzQkFDYiw4REFBQ0ssU0FBUztZQUFDVCxRQUFRLEVBQUVBLFFBQVE7Ozs7O2dCQUFjO0tBQzlDLENBQUM7Q0FDTDtBQUVELElBQU1VLG1CQUFtQixHQUFHRixRQUFRLENBQUNULFFBQVEsQ0FBQzs7QUFDOUMsK0RBQWVXLG1CQUFtQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NwZWFrZXJzLmpzP2UwNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU3BlYWtlcnMgPSAoe3NwZWFrZXJzfSkgPT4geyBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtzcGVha2Vycy5tYXAoKHtpbWFnZVNyYywgbmFtZX0pID0+e1xyXG4gICAgICAgICAgICByZXR1cm4gPGltZyBzcmM9e2BpbWFnZXMvJHtpbWFnZVNyY30uanBnYH0gYWx0PXtuYW1lfSBrZXk9e2ltYWdlU3JjfSAvPlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuZnVuY3Rpb24gd2l0aERhdGEoQ29tcG9uZW50KXtcclxuICAgIGNvbnN0IHNwZWFrZXJzID0gW1xyXG4gICAgICAgIHtpbWFnZVNyYyA6IFwic3BlYWtlci0xMTI0XCIsIG5hbWU6IFwiTm91cmkgSXNzYWtpXCJ9LFxyXG4gICAgICAgIHtpbWFnZVNyYyA6IFwic3BlYWtlci0xNTMwXCIsIG5hbWU6IFwiTm91cmkgSXNzYWtpMlwifSxcclxuICAgICAgICB7aW1hZ2VTcmMgOiBcInNwZWFrZXItMTA4MDNcIiwgbmFtZTogXCJOb3VyaSBJc3Nha2kzXCJ9LFxyXG4gICAgXTtcclxuICAgIHJldHVybiBmdW5jdGlvbigpe1xyXG4gICAgICAgIDxDb21wb25lbnQgc3BlYWtlcnM9e3NwZWFrZXJzfT48L0NvbXBvbmVudD5cclxuICAgIH07XHJcbn1cclxuXHJcbmNvbnN0IEVuaGFuY2VkU3BlYWtlckRhdGEgPSB3aXRoRGF0YShTcGVha2Vycyk7XHJcbmV4cG9ydCBkZWZhdWx0IEVuaGFuY2VkU3BlYWtlckRhdGE7Il0sIm5hbWVzIjpbIlJlYWN0IiwiU3BlYWtlcnMiLCJzcGVha2VycyIsImRpdiIsIm1hcCIsImltYWdlU3JjIiwibmFtZSIsImltZyIsInNyYyIsImFsdCIsIndpdGhEYXRhIiwiQ29tcG9uZW50IiwiRW5oYW5jZWRTcGVha2VyRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/speakers.js\n"));

/***/ })

});