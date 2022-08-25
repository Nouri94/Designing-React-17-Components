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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Session(param) {\n    var title = param.title, room = param.room;\n    // const [title, room] = props instead of that we send them as params (This is called destructuring)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 5,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 4,\n        columnNumber: 9\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    var sessions = param.sessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, sessions[0]), void 0, false, {\n            fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    var id = param.id, first = param.first, last = param.last;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_c2 = SpeakerImage;\nfunction SpeakerDemographics(param) {\n    var first = param.first, last = param.last, bio = param.bio, company = param.company, twitterHandle = param.twitterHandle, favorite = param.favorite;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 42,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_c3 = SpeakerDemographics;\nfunction Speaker(param) {\n    var speaker = param.speaker;\n    var id = speaker.id, first = speaker.first, last = speaker.last, sessions = speaker.sessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, speaker), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n}\n_c4 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerDemographics\");\n$RefreshReg$(_c4, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRO0lBQ2pDLHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNMLFNBQVMsRUFBQywyREFBMkQ7OzBCQUN0RSw4REFBQ0ssS0FBRztnQkFBQ0wsU0FBUyxFQUFDLDJCQUEyQjs7a0NBQ3RDLDhEQUFDTSxZQUFZO3dCQUFDQyxFQUFFLEVBQUVBLEVBQUU7d0JBQUVDLEtBQUssRUFBRUEsS0FBSzt3QkFBRUMsSUFBSSxFQUFFQSxJQUFJOzs7Ozs0QkFBSTtrQ0FDbEQsOERBQUNLLG1CQUFtQixxRkFBS1EsT0FBTzs7Ozs0QkFBSTs7Ozs7O29CQUNsQzswQkFDTiw4REFBQ25CLFFBQVE7Z0JBQUNDLFFBQVEsRUFBRUEsUUFBUTs7Ozs7b0JBQWE7Ozs7OztZQUN2QyxDQUNSO0NBQ0w7QUFYUWlCLE1BQUFBLE9BQU87QUFhaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzPzI5MmQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU2Vzc2lvbih7IHRpdGxlLCByb29tIH0pIHtcclxuICAgIC8vIGNvbnN0IFt0aXRsZSwgcm9vbV0gPSBwcm9wcyBpbnN0ZWFkIG9mIHRoYXQgd2Ugc2VuZCB0aGVtIGFzIHBhcmFtcyAoVGhpcyBpcyBjYWxsZWQgZGVzdHJ1Y3R1cmluZylcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiPlxyXG4gICAgICAgICAgICB7dGl0bGV9PHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlc3Npb25zKHsgc2Vzc2lvbnMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxyXG4gICAgICAgICAgICA8U2Vzc2lvbiB7Li4uc2Vzc2lvbnNbMF19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTcGVha2VySW1hZ2UoeyBpZCwgZmlyc3QsIGxhc3QgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJEZW1vZ3JhcGhpY3MoeyBmaXJzdCwgbGFzdCwgYmlvLCBjb21wYW55LCB0d2l0dGVySGFuZGxlLCBmYXZvcml0ZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZpcnN0fSB7bGFzdH1cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtiaW99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsIGQtZmxleCBmbGV4LXJvdyBtdC00XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU3BlYWtlcih7IHNwZWFrZXIgfSkge1xyXG4gICAgY29uc3QgeyBpZCwgZmlyc3QsIGxhc3QsIHNlc3Npb25zIH0gPSBzcGVha2VyO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cclxuICAgICAgICAgICAgICAgIDxTcGVha2VySW1hZ2UgaWQ9e2lkfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8U3BlYWtlckRlbW9ncmFwaGljcyB7Li4uc3BlYWtlcn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTZXNzaW9ucyBzZXNzaW9ucz17c2Vzc2lvbnN9PjwvU2Vzc2lvbnM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyOyJdLCJuYW1lcyI6WyJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwic3BhbiIsImNsYXNzTmFtZSIsInN0cm9uZyIsIm5hbWUiLCJTZXNzaW9ucyIsInNlc3Npb25zIiwiZGl2IiwiU3BlYWtlckltYWdlIiwiaWQiLCJmaXJzdCIsImxhc3QiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImFsdCIsIlNwZWFrZXJEZW1vZ3JhcGhpY3MiLCJiaW8iLCJjb21wYW55IiwidHdpdHRlckhhbmRsZSIsImZhdm9yaXRlIiwiaDMiLCJwIiwiU3BlYWtlciIsInNwZWFrZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ })

});