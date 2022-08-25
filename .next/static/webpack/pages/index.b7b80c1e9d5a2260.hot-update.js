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

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Session(param) {\n    var title = param.title, room = param.room;\n    // const [title, room] = props instead of that we send them as params (This is called destructuring)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 5,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 4,\n        columnNumber: 9\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    var sessions = param.sessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, sessions[0]), void 0, false, {\n            fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    var id = param.id, first = param.first, last = param.last;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_c2 = SpeakerImage;\nfunction SpeakerDemographics(param) {\n    var first = param.first, last = param.last, bio = param.bio, company = param.company, twitterHandle = param.twitterHandle, favorite = param.favorite;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 42,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 46,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 50,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_c3 = SpeakerDemographics;\nfunction Speaker(param) {\n    var speaker = param.speaker;\n    var id = speaker.id, first = speaker.first, last = speaker.last, sessions = speaker.sessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, speaker), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, this);\n}\n_c4 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerDemographics\");\n$RefreshReg$(_c4, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hCOzs7Ozs7NEJBQ0o7Ozs7OztvQkFFUjs7Ozs7O1lBQ0osQ0FDUjtDQUNMO0FBM0JRRixNQUFBQSxtQkFBbUI7QUE2QjVCLFNBQVNTLE9BQU8sQ0FBQyxLQUFXLEVBQUU7UUFBYixPQUFTLEdBQVQsS0FBVyxDQUFUQyxPQUFPO0lBQ3RCLElBQVFqQixFQUFFLEdBQTRCaUIsT0FBTyxDQUFyQ2pCLEVBQUUsRUFBRUMsS0FBSyxHQUFxQmdCLE9BQU8sQ0FBakNoQixLQUFLLEVBQUVDLElBQUksR0FBZWUsT0FBTyxDQUExQmYsSUFBSSxFQUFFTCxRQUFRLEdBQUtvQixPQUFPLENBQXBCcEIsUUFBUTtJQUNqQyxxQkFDSSw4REFBQ0MsS0FBRztRQUFDTCxTQUFTLEVBQUMsMkRBQTJEOzswQkFDdEUsOERBQUNLLEtBQUc7Z0JBQUNMLFNBQVMsRUFBQywyQkFBMkI7O2tDQUN0Qyw4REFBQ00sWUFBWTt3QkFBQ0MsRUFBRSxFQUFFQSxFQUFFO3dCQUFFQyxLQUFLLEVBQUVBLEtBQUs7d0JBQUVDLElBQUksRUFBRUEsSUFBSTs7Ozs7NEJBQUk7a0NBQ2xELDhEQUFDSyxtQkFBbUIscUZBQUtVLE9BQU87Ozs7NEJBQUk7Ozs7OztvQkFDbEM7MEJBQ04sOERBQUNyQixRQUFRO2dCQUFDQyxRQUFRLEVBQUVBLFFBQVE7Ozs7O29CQUFhOzs7Ozs7WUFDdkMsQ0FDUjtDQUNMO0FBWFFtQixNQUFBQSxPQUFPO0FBYWhCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcz8yOTJkIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFNlc3Npb24oeyB0aXRsZSwgcm9vbSB9KSB7XHJcbiAgICAvLyBjb25zdCBbdGl0bGUsIHJvb21dID0gcHJvcHMgaW5zdGVhZCBvZiB0aGF0IHdlIHNlbmQgdGhlbSBhcyBwYXJhbXMgKFRoaXMgaXMgY2FsbGVkIGRlc3RydWN0dXJpbmcpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cclxuICAgICAgICAgICAge3RpdGxlfTxzdHJvbmc+Um9vbToge3Jvb20ubmFtZX08L3N0cm9uZz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTZXNzaW9ucyh7IHNlc3Npb25zIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cclxuICAgICAgICAgICAgPFNlc3Npb24gey4uLnNlc3Npb25zWzBdfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU3BlYWtlckltYWdlKHsgaWQsIGZpcnN0LCBsYXN0IH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBTcGVha2VyRGVtb2dyYXBoaWNzKHsgZmlyc3QsIGxhc3QsIGJpbywgY29tcGFueSwgdHdpdHRlckhhbmRsZSwgZmF2b3JpdGUgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICB7YmlvfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbCBkLWZsZXggZmxleC1yb3cgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5Db21wYW55PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57Y29tcGFueX08L2g2PiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+Q29tcGFueTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+e2NvbXBhbnl9PC9oNj4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTcGVha2VyKHsgc3BlYWtlciB9KSB7XHJcbiAgICBjb25zdCB7IGlkLCBmaXJzdCwgbGFzdCwgc2Vzc2lvbnMgfSA9IHNwZWFrZXI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPFNwZWFrZXJJbWFnZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gLz5cclxuICAgICAgICAgICAgICAgIDxTcGVha2VyRGVtb2dyYXBoaWNzIHsuLi5zcGVha2VyfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFNlc3Npb25zIHNlc3Npb25zPXtzZXNzaW9uc30+PC9TZXNzaW9ucz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXI7Il0sIm5hbWVzIjpbIlNlc3Npb24iLCJ0aXRsZSIsInJvb20iLCJzcGFuIiwiY2xhc3NOYW1lIiwic3Ryb25nIiwibmFtZSIsIlNlc3Npb25zIiwic2Vzc2lvbnMiLCJkaXYiLCJTcGVha2VySW1hZ2UiLCJpZCIsImZpcnN0IiwibGFzdCIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwiU3BlYWtlckRlbW9ncmFwaGljcyIsImJpbyIsImNvbXBhbnkiLCJ0d2l0dGVySGFuZGxlIiwiZmF2b3JpdGUiLCJoMyIsInAiLCJoNSIsImg2IiwiU3BlYWtlciIsInNwZWFrZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ })

});