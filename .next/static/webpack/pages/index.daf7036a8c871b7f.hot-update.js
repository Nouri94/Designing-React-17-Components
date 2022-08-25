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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ \"./SpeakerData.js\");\n\nvar _this = undefined;\n\n\nfunction Session(param) {\n    var title = param.title, room = param.room;\n    // const [title, room] = props instead of that we send them as params (This is called destructuring)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    var sessions = param.sessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, sessions[0]), void 0, false, {\n            fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Sessions;\nvar IndexPage = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function(speaker) {\n                var id = speaker.id, bio = speaker.bio, first = speaker.first, last = speaker.last, favorite = speaker.favorite, twitterHandle = speaker.twitterHandle, company = speaker.company, sessions = speaker.sessions;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card card-height p-4 mt-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"speaker-info\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-flex justify-content-between mb-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-truncate w-200\",\n                                            children: [\n                                                first,\n                                                \" \",\n                                                last\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                bio,\n                                                \" \",\n                                                company,\n                                                \" \",\n                                                twitterHandle,\n                                                \" \",\n                                                favorite\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n                                lineNumber: 30,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                            sessions: sessions\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n                            lineNumber: 43,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, id, true, {\n                    fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n                    lineNumber: 27,\n                    columnNumber: 29\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\pages\\\\index.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, _this);\n};\n_c2 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNBOzs7QUFBc0M7QUFFdEMsU0FBU0MsT0FBTyxDQUFDLEtBQWUsRUFBRTtRQUFmQyxLQUFLLEdBQVAsS0FBZSxDQUFiQSxLQUFLLEVBQUVDLElBQUksR0FBYixLQUFlLENBQU5BLElBQUk7SUFDMUIsb0dBQW9HO0lBQ3BHLHFCQUNJLDhEQUFDQyxNQUFJO1FBQUNDLFNBQVMsRUFBQyxlQUFlOztZQUMxQkgsS0FBSzswQkFBQyw4REFBQ0ksUUFBTTs7b0JBQUMsUUFBTTtvQkFBQ0gsSUFBSSxDQUFDSSxJQUFJOzs7Ozs7b0JBQVU7Ozs7OztZQUN0QyxDQUNUO0NBQ0w7QUFQUU4sS0FBQUEsT0FBTztBQVNoQixTQUFTTyxRQUFRLENBQUMsS0FBVSxFQUFFO1FBQVosUUFBUyxHQUFULEtBQVUsQ0FBVEMsUUFBUTtJQUN2QixxQkFDSSw4REFBQ0MsS0FBRztRQUFDTCxTQUFTLEVBQUMsdUJBQXVCO2tCQUNsQyw0RUFBQ0osT0FBTyxxRkFBS1EsUUFBUSxDQUFDLENBQUMsQ0FBQzs7OztnQkFBSTs7Ozs7WUFDMUIsQ0FDUjtDQUNMO0FBTlFELE1BQUFBLFFBQVE7QUFPakIsSUFBTUcsU0FBUyxHQUFHLFdBQU07SUFFcEIscUJBQ0ksOERBQUNELEtBQUc7UUFBQ0wsU0FBUyxFQUFDLHlCQUF5QjtrQkFDcEMsNEVBQUNLLEtBQUc7WUFBQ0wsU0FBUyxFQUFDLEtBQUs7c0JBQ2ZMLGtEQUFRLENBQUMsU0FBVWEsT0FBTyxFQUFFO2dCQUN6QixJQUFRQyxFQUFFLEdBQW9FRCxPQUFPLENBQTdFQyxFQUFFLEVBQUVDLEdBQUcsR0FBK0RGLE9BQU8sQ0FBekVFLEdBQUcsRUFBRUMsS0FBSyxHQUF3REgsT0FBTyxDQUFwRUcsS0FBSyxFQUFFQyxJQUFJLEdBQWtESixPQUFPLENBQTdESSxJQUFJLEVBQUVDLFFBQVEsR0FBd0NMLE9BQU8sQ0FBdkRLLFFBQVEsRUFBRUMsYUFBYSxHQUF5Qk4sT0FBTyxDQUE3Q00sYUFBYSxFQUFFQyxPQUFPLEdBQWdCUCxPQUFPLENBQTlCTyxPQUFPLEVBQUVYLFFBQVEsR0FBTUksT0FBTyxDQUFyQkosUUFBUTtnQkFDeEUscUJBQVEsOERBQUNDLEtBQUc7b0JBQVVMLFNBQVMsRUFBQywyREFBMkQ7O3NDQUN2Riw4REFBQ0ssS0FBRzs0QkFBQ0wsU0FBUyxFQUFDLDJCQUEyQjtzQ0FFdEMsNEVBQUNLLEtBQUc7Z0NBQUNMLFNBQVMsRUFBQyxjQUFjOztrREFDekIsOERBQUNLLEtBQUc7d0NBQUNMLFNBQVMsRUFBQyxxQ0FBcUM7a0RBQ2hELDRFQUFDZ0IsSUFBRTs0Q0FBQ2hCLFNBQVMsRUFBQyxxQkFBcUI7O2dEQUM5QlcsS0FBSztnREFBQyxHQUFDO2dEQUFDQyxJQUFJOzs7Ozs7Z0RBQ1o7Ozs7OzRDQUNIO2tEQUNOLDhEQUFDUCxLQUFHO2tEQUNBLDRFQUFDWSxHQUFDOztnREFDR1AsR0FBRztnREFBQyxHQUFDO2dEQUFDSyxPQUFPO2dEQUFDLEdBQUM7Z0RBQUNELGFBQWE7Z0RBQUMsR0FBQztnREFBQ0QsUUFBUTs7Ozs7O2dEQUN6Qzs7Ozs7NENBQ0Y7Ozs7OztvQ0FDSjs7Ozs7Z0NBQ0o7c0NBQ04sOERBQUNWLFFBQVE7NEJBQUNDLFFBQVEsRUFBRUEsUUFBUTs7Ozs7Z0NBQWE7O21CQWhCM0JLLEVBQUU7Ozs7d0JBaUJkLENBQUU7YUFDWCxDQUFDOzs7OztpQkFDQTs7Ozs7YUFDSixDQUNSO0NBQ0w7QUE3QktILE1BQUFBLFNBQVM7QUErQmYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vU3BlYWtlckRhdGEnO1xyXG5cclxuZnVuY3Rpb24gU2Vzc2lvbih7IHRpdGxlLCByb29tIH0pIHtcclxuICAgIC8vIGNvbnN0IFt0aXRsZSwgcm9vbV0gPSBwcm9wcyBpbnN0ZWFkIG9mIHRoYXQgd2Ugc2VuZCB0aGVtIGFzIHBhcmFtcyAoVGhpcyBpcyBjYWxsZWQgZGVzdHJ1Y3R1cmluZylcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiPlxyXG4gICAgICAgICAgICB7dGl0bGV9PHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlc3Npb25zKHtzZXNzaW9uc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cclxuICAgICAgICAgICAgPFNlc3Npb24gey4uLnNlc3Npb25zWzBdfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGlkLCBiaW8sIGZpcnN0LCBsYXN0LCBmYXZvcml0ZSwgdHdpdHRlckhhbmRsZSwgY29tcGFueSwgc2Vzc2lvbnMsIH0gPSBzcGVha2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBrZXk9e2lkfSBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpcnN0fSB7bGFzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiaW99IHtjb21wYW55fSB7dHdpdHRlckhhbmRsZX0ge2Zhdm9yaXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXNzaW9ucyBzZXNzaW9ucz17c2Vzc2lvbnN9PjwvU2Vzc2lvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTsiXSwibmFtZXMiOlsiZGF0YSIsIlNlc3Npb24iLCJ0aXRsZSIsInJvb20iLCJzcGFuIiwiY2xhc3NOYW1lIiwic3Ryb25nIiwibmFtZSIsIlNlc3Npb25zIiwic2Vzc2lvbnMiLCJkaXYiLCJJbmRleFBhZ2UiLCJtYXAiLCJzcGVha2VyIiwiaWQiLCJiaW8iLCJmaXJzdCIsImxhc3QiLCJmYXZvcml0ZSIsInR3aXR0ZXJIYW5kbGUiLCJjb21wYW55IiwiaDMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});