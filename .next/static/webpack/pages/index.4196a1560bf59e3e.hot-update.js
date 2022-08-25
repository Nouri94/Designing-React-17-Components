"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ \"./SpeakerData.js\");\n\nvar _this = undefined;\n\n\nfunction Session(param) {\n    var title = param.title, room = param.room;\n    // const [title, room] = props instead of that we send them as params (This is called destructuring)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    var sessions = param.sessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, sessions[0]), void 0, false, {\n            fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Sessions;\nvar IndexPage = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function(speaker) {\n                var id = speaker.id, bio = speaker.bio, first = speaker.first, last = speaker.last, favorite = speaker.favorite, twitterHandle = speaker.twitterHandle, company = speaker.company, sessions = speaker.sessions;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card card-height p-4 mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                                    id: id,\n                                    first: first,\n                                    last: last\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"speaker-info\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-flex justify-content-between mb-3\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-truncate w-200\",\n                                                children: [\n                                                    first,\n                                                    \" \",\n                                                    last\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n                                                lineNumber: 32,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    bio,\n                                                    \" \",\n                                                    company,\n                                                    \" \",\n                                                    twitterHandle,\n                                                    \" \",\n                                                    favorite\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                            sessions: sessions\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n                            lineNumber: 43,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, id, true, {\n                    fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n                    lineNumber: 27,\n                    columnNumber: 29\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, _this);\n};\n_c2 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNBOzs7QUFBc0M7QUFFdEMsU0FBU0MsT0FBTyxDQUFDLEtBQWUsRUFBRTtRQUFmQyxLQUFLLEdBQVAsS0FBZSxDQUFiQSxLQUFLLEVBQUVDLElBQUksR0FBYixLQUFlLENBQU5BLElBQUk7SUFDMUIsb0dBQW9HO0lBQ3BHLHFCQUNJLDhEQUFDQyxNQUFJO1FBQUNDLFNBQVMsRUFBQyxlQUFlOztZQUMxQkgsS0FBSzswQkFBQyw4REFBQ0ksUUFBTTs7b0JBQUMsUUFBTTtvQkFBQ0gsSUFBSSxDQUFDSSxJQUFJOzs7Ozs7b0JBQVU7Ozs7OztZQUN0QyxDQUNUO0NBQ0w7QUFQUU4sS0FBQUEsT0FBTztBQVNoQixTQUFTTyxRQUFRLENBQUMsS0FBVSxFQUFFO1FBQVosUUFBUyxHQUFULEtBQVUsQ0FBVEMsUUFBUTtJQUN2QixxQkFDSSw4REFBQ0MsS0FBRztRQUFDTCxTQUFTLEVBQUMsdUJBQXVCO2tCQUNsQyw0RUFBQ0osT0FBTyxxRkFBS1EsUUFBUSxDQUFDLENBQUMsQ0FBQzs7OztnQkFBSTs7Ozs7WUFDMUIsQ0FDUjtDQUNMO0FBTlFELE1BQUFBLFFBQVE7QUFPakIsSUFBTUcsU0FBUyxHQUFHLFdBQU07SUFFcEIscUJBQ0ksOERBQUNELEtBQUc7UUFBQ0wsU0FBUyxFQUFDLHlCQUF5QjtrQkFDcEMsNEVBQUNLLEtBQUc7WUFBQ0wsU0FBUyxFQUFDLEtBQUs7c0JBQ2ZMLGtEQUFRLENBQUMsU0FBVWEsT0FBTyxFQUFFO2dCQUN6QixJQUFRQyxFQUFFLEdBQW9FRCxPQUFPLENBQTdFQyxFQUFFLEVBQUVDLEdBQUcsR0FBK0RGLE9BQU8sQ0FBekVFLEdBQUcsRUFBRUMsS0FBSyxHQUF3REgsT0FBTyxDQUFwRUcsS0FBSyxFQUFFQyxJQUFJLEdBQWtESixPQUFPLENBQTdESSxJQUFJLEVBQUVDLFFBQVEsR0FBd0NMLE9BQU8sQ0FBdkRLLFFBQVEsRUFBRUMsYUFBYSxHQUF5Qk4sT0FBTyxDQUE3Q00sYUFBYSxFQUFFQyxPQUFPLEdBQWdCUCxPQUFPLENBQTlCTyxPQUFPLEVBQUVYLFFBQVEsR0FBTUksT0FBTyxDQUFyQkosUUFBUTtnQkFDeEUscUJBQVEsOERBQUNDLEtBQUc7b0JBQVVMLFNBQVMsRUFBQywyREFBMkQ7O3NDQUN2Riw4REFBQ0ssS0FBRzs0QkFBQ0wsU0FBUyxFQUFDLDJCQUEyQjs7OENBQ3RDLDhEQUFDZ0IsWUFBWTtvQ0FBQ1AsRUFBRSxFQUFFQSxFQUFFO29DQUFFRSxLQUFLLEVBQUVBLEtBQUs7b0NBQUVDLElBQUksRUFBRUEsSUFBSTs7Ozs7d0NBQUk7OENBQ2xELDhEQUFDUCxLQUFHO29DQUFDTCxTQUFTLEVBQUMsY0FBYzs7c0RBQ3pCLDhEQUFDSyxLQUFHOzRDQUFDTCxTQUFTLEVBQUMscUNBQXFDO3NEQUNoRCw0RUFBQ2lCLElBQUU7Z0RBQUNqQixTQUFTLEVBQUMscUJBQXFCOztvREFDOUJXLEtBQUs7b0RBQUMsR0FBQztvREFBQ0MsSUFBSTs7Ozs7O29EQUNaOzs7OztnREFDSDtzREFDTiw4REFBQ1AsS0FBRztzREFDQSw0RUFBQ2EsR0FBQzs7b0RBQ0dSLEdBQUc7b0RBQUMsR0FBQztvREFBQ0ssT0FBTztvREFBQyxHQUFDO29EQUFDRCxhQUFhO29EQUFDLEdBQUM7b0RBQUNELFFBQVE7Ozs7OztvREFDekM7Ozs7O2dEQUNGOzs7Ozs7d0NBQ0o7Ozs7OztnQ0FDSjtzQ0FDTiw4REFBQ1YsUUFBUTs0QkFBQ0MsUUFBUSxFQUFFQSxRQUFROzs7OztnQ0FBYTs7bUJBaEIzQkssRUFBRTs7Ozt3QkFpQmQsQ0FBRTthQUNYLENBQUM7Ozs7O2lCQUNBOzs7OzthQUNKLENBQ1I7Q0FDTDtBQTdCS0gsTUFBQUEsU0FBUztBQStCZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLi9TcGVha2VyRGF0YSc7XHJcblxyXG5mdW5jdGlvbiBTZXNzaW9uKHsgdGl0bGUsIHJvb20gfSkge1xyXG4gICAgLy8gY29uc3QgW3RpdGxlLCByb29tXSA9IHByb3BzIGluc3RlYWQgb2YgdGhhdCB3ZSBzZW5kIHRoZW0gYXMgcGFyYW1zIChUaGlzIGlzIGNhbGxlZCBkZXN0cnVjdHVyaW5nKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XHJcbiAgICAgICAgICAgIHt0aXRsZX08c3Ryb25nPlJvb206IHtyb29tLm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU2Vzc2lvbnMoe3Nlc3Npb25zfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxyXG4gICAgICAgICAgICA8U2Vzc2lvbiB7Li4uc2Vzc2lvbnNbMF19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgaWQsIGJpbywgZmlyc3QsIGxhc3QsIGZhdm9yaXRlLCB0d2l0dGVySGFuZGxlLCBjb21wYW55LCBzZXNzaW9ucywgfSA9IHNwZWFrZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGtleT17aWR9IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVha2VySW1hZ2UgaWQ9e2lkfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmlvfSB7Y29tcGFueX0ge3R3aXR0ZXJIYW5kbGV9IHtmYXZvcml0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2Vzc2lvbnMgc2Vzc2lvbnM9e3Nlc3Npb25zfT48L1Nlc3Npb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pik7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7Il0sIm5hbWVzIjpbImRhdGEiLCJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwic3BhbiIsImNsYXNzTmFtZSIsInN0cm9uZyIsIm5hbWUiLCJTZXNzaW9ucyIsInNlc3Npb25zIiwiZGl2IiwiSW5kZXhQYWdlIiwibWFwIiwic3BlYWtlciIsImlkIiwiYmlvIiwiZmlyc3QiLCJsYXN0IiwiZmF2b3JpdGUiLCJ0d2l0dGVySGFuZGxlIiwiY29tcGFueSIsIlNwZWFrZXJJbWFnZSIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});