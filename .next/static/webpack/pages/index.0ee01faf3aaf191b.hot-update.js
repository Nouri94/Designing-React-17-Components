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

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRequestDelay */ \"./src/hooks/useRequestDelay.js\");\n/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ \"./src/contexts/SpeakerFilterContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SpeakersList() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_4__.SpeakerFilterContext), eventYear = ref.eventYear, searchQuery = ref.searchQuery;\n    var ref1 = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(2000, _SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data), speakersData = ref1.data, requestStatus = ref1.requestStatus, error = ref1.error, updateRecord = ref1.updateRecord;\n    if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.FAILURE) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-danger\",\n        children: [\n            \"ERROR: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                children: [\n                    \"Loading Speaker Data failed \",\n                    error\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\SpeakersList.js\",\n                lineNumber: 14,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n    //if (requestStatus === REQUEST_STATUS.SUCCESS)   return <div>Loading...</div>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakersData.filter(function(speaker) {\n                return speaker.first.toLowerCase().includes(searchQuery) || speaker.last.toLowerCase().includes(searchQuery);\n            }).filter(function(speaker) {\n                return speaker.sessions.find(function(session) {\n                    return session.eventYear === eventYear;\n                });\n            }).map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    speaker: speaker,\n                    onFavoriteToggle: function(doneCallback) {\n                        updateRecord((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, speaker), {\n                            favorite: !speaker.favorite\n                        }), doneCallback);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 35,\n                    columnNumber: 25\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nissaki\\\\Downloads\\\\Empty\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 20,\n        columnNumber: 13\n    }, this);\n}\n_s(SpeakersList, \"wpZ8Vd4agXbsa3IQy13EMYh4Htw=\", false, function() {\n    return [\n        _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUErQjtBQUNTO0FBQ2tDO0FBQ0Y7QUFDckM7QUFFbkMsU0FBU00sWUFBWSxHQUFHOztJQUNwQixJQUFtQ0QsR0FBZ0MsR0FBaENBLGlEQUFVLENBQUNELGdGQUFvQixDQUFDLEVBQTNERyxTQUFTLEdBQWtCRixHQUFnQyxDQUEzREUsU0FBUyxFQUFFQyxXQUFXLEdBQUtILEdBQWdDLENBQWhERyxXQUFXO0lBQzlCLElBQ01OLElBQTJCLEdBQTNCQSxrRUFBZSxDQUFDLElBQUksRUFBRUQsOENBQUksQ0FBQyxFQUR6QkEsWUFBa0IsR0FDcEJDLElBQTJCLENBRHpCRCxJQUFJLEVBQWdCUyxhQUFhLEdBQ25DUixJQUEyQixDQURMUSxhQUFhLEVBQUVDLEtBQUssR0FDMUNULElBQTJCLENBRFVTLEtBQUssRUFBRUMsWUFBWSxHQUN4RFYsSUFBMkIsQ0FEaUJVLFlBQVk7SUFHOUQsSUFBSUYsYUFBYSxLQUFLUCwwRUFBc0IsRUFBRSxxQkFDMUMsOERBQUNXLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGFBQWE7O1lBQUMsU0FDbEI7MEJBQUEsOERBQUNDLEdBQUM7O29CQUFDLDhCQUE0QjtvQkFBQ0wsS0FBSzs7Ozs7O29CQUFLOzs7Ozs7WUFDL0MsQ0FDVDtJQUVELDhFQUE4RTtJQUU5RSxxQkFBUSw4REFBQ0csS0FBRztRQUFDQyxTQUFTLEVBQUMseUJBQXlCO2tCQUM1Qyw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsS0FBSztzQkFDZk4sWUFBWSxDQUFDUSxNQUFNLENBQUMsU0FBVUMsT0FBTyxFQUFFO2dCQUNwQyxPQUNJQSxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxFQUFFLENBQUNDLFFBQVEsQ0FBQ2IsV0FBVyxDQUFDLElBQ2pEVSxPQUFPLENBQUNJLElBQUksQ0FBQ0YsV0FBVyxFQUFFLENBQUNDLFFBQVEsQ0FBQ2IsV0FBVyxDQUFDLENBQ2xEO2FBQ0wsQ0FBQyxDQUNHUyxNQUFNLENBQUMsU0FBVUMsT0FBTyxFQUFFO2dCQUN2QixPQUFPQSxPQUFPLENBQUNLLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLFNBQUNDLE9BQU8sRUFBSztvQkFDdEMsT0FBT0EsT0FBTyxDQUFDbEIsU0FBUyxLQUFLQSxTQUFTLENBQUM7aUJBQzFDLENBQUMsQ0FBQzthQUNOLENBQUMsQ0FDRG1CLEdBQUcsQ0FBQyxTQUFVUixPQUFPLEVBQUU7Z0JBQ3BCLHFCQUNJLDhEQUFDbEIsZ0RBQU87b0JBQ0prQixPQUFPLEVBQUVBLE9BQU87b0JBQ2hCUyxnQkFBZ0IsRUFBRSxTQUFDQyxZQUFZLEVBQUs7d0JBQ2hDaEIsWUFBWSxDQUFDLHdLQUFLTSxPQUFPOzRCQUFFVyxRQUFRLEVBQUUsQ0FBQ1gsT0FBTyxDQUFDVyxRQUFROzBCQUFHLEVBQUVELFlBQVksQ0FBQyxDQUFDO3FCQUM1RTttQkFKU1YsT0FBTyxDQUFDWSxFQUFFOzs7O3dCQUlmLENBQ1g7YUFDTCxDQUFDOzs7OztnQkFDSjs7Ozs7WUFDSixDQUFFO0NBQ1g7R0FyQ1F4QixZQUFZOztRQUdYSiw4REFBZTs7O0FBSGhCSSxLQUFBQSxZQUFZO0FBdUNyQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcz8yYTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2VyIGZyb20gJy4vU3BlYWtlcidcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4uLy4uL1NwZWFrZXJEYXRhJ1xyXG5pbXBvcnQgdXNlUmVxdWVzdERlbGF5LCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSAnLi4vaG9va3MvdXNlUmVxdWVzdERlbGF5J1xyXG5pbXBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1NwZWFrZXJGaWx0ZXJDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJzTGlzdCgpIHtcclxuICAgIGNvbnN0IHsgZXZlbnRZZWFyLCBzZWFyY2hRdWVyeSB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHNwZWFrZXJzRGF0YSwgcmVxdWVzdFN0YXR1cywgZXJyb3IsIHVwZGF0ZVJlY29yZCB9XHJcbiAgICAgICAgPSB1c2VSZXF1ZXN0RGVsYXkoMjAwMCwgZGF0YSlcclxuXHJcbiAgICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSkgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPlxyXG4gICAgICAgICAgICBFUlJPUjogPGI+TG9hZGluZyBTcGVha2VyIERhdGEgZmFpbGVkIHtlcnJvcn08L2I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG4gICAgLy9pZiAocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUykgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcblxyXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAge3NwZWFrZXJzRGF0YS5maWx0ZXIoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlci5maXJzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXIubGFzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3BlYWtlci5zZXNzaW9ucy5maW5kKChzZXNzaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXNzaW9uLmV2ZW50WWVhciA9PT0gZXZlbnRZZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlciBrZXk9e3NwZWFrZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KGRvbmVDYWxsYmFjaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJlY29yZCh7IC4uLnNwZWFrZXIsIGZhdm9yaXRlOiAhc3BlYWtlci5mYXZvcml0ZSwgfSwgZG9uZUNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNMaXN0OyJdLCJuYW1lcyI6WyJTcGVha2VyIiwiZGF0YSIsInVzZVJlcXVlc3REZWxheSIsIlJFUVVFU1RfU1RBVFVTIiwiU3BlYWtlckZpbHRlckNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU3BlYWtlcnNMaXN0IiwiZXZlbnRZZWFyIiwic2VhcmNoUXVlcnkiLCJzcGVha2Vyc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJ1cGRhdGVSZWNvcmQiLCJGQUlMVVJFIiwiZGl2IiwiY2xhc3NOYW1lIiwiYiIsImZpbHRlciIsInNwZWFrZXIiLCJmaXJzdCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJsYXN0Iiwic2Vzc2lvbnMiLCJmaW5kIiwic2Vzc2lvbiIsIm1hcCIsIm9uRmF2b3JpdGVUb2dnbGUiLCJkb25lQ2FsbGJhY2siLCJmYXZvcml0ZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n"));

/***/ })

});