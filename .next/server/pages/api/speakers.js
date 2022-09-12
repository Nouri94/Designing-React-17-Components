"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/speakers";
exports.ids = ["pages/api/speakers"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(api)/./pages/api/speakers/index.js":
/*!*************************************!*\
  !*** ./pages/api/speakers/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n//import {data} from '../../../SpeakerData';\n\n\nconst { promisify  } = __webpack_require__(/*! util */ \"util\");\nconst readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));\nconst delay = (ms)=>new Promise((resolve)=>{\n        setTimeout(resolve, ms);\n    });\nasync function handler(req, res) {\n    //res.status(200).send(JSON.stringify(data, null, 2));\n    const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(\"./\", \"db.json\");\n    try {\n        const readFileData = await readFile(jsonFile);\n        await delay(1000);\n        const speakers = JSON.parse(readFileData).speakers;\n        if (speakers) {\n            res.setHeader(\"Content-Type\", \"application/json\");\n            res.status(200).send(JSON.stringify(speakers, null, 2));\n            console.log(\"Get api/speakers status:200\");\n        }\n    } catch (e) {\n        console.log(\"spi/speakers error\", e);\n        res.status(404).send(\"File not found on server\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3BlYWtlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw0Q0FBNEM7QUFDcEI7QUFDSjtBQUNwQixNQUFNLEVBQUNFLFNBQVMsR0FBQyxHQUFHQyxtQkFBTyxDQUFDLGtCQUFNLENBQUM7QUFDbkMsTUFBTUMsUUFBUSxHQUFHRixTQUFTLENBQUNELG9EQUFXLENBQUM7QUFDdkMsTUFBTUksS0FBSyxHQUFHLENBQUNDLEVBQUUsR0FBSyxJQUFJQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxHQUFLO1FBQUNDLFVBQVUsQ0FBQ0QsT0FBTyxFQUFDRixFQUFFLENBQUM7S0FBQyxDQUFDO0FBR3pELGVBQWVJLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUM7SUFDM0Msc0RBQXNEO0lBQ3RELE1BQU1DLFFBQVEsR0FBR2IsbURBQVksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO0lBQzlDLElBQUc7UUFDQyxNQUFNYyxZQUFZLEdBQUcsTUFBTVYsUUFBUSxDQUFDUyxRQUFRLENBQUM7UUFDN0MsTUFBTVIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE1BQU1VLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILFlBQVksQ0FBQyxDQUFDQyxRQUFRO1FBQ2xELElBQUdBLFFBQVEsRUFBQztZQUNSSCxHQUFHLENBQUNNLFNBQVMsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUNsRE4sR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0osSUFBSSxDQUFDSyxTQUFTLENBQUNOLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RE8sT0FBTyxDQUFDQyxHQUFHLENBQUMsNkJBQTZCLENBQUM7U0FDN0M7S0FFSixDQUNELE9BQU1DLENBQUMsRUFBQztRQUNKRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRUMsQ0FBQyxDQUFDO1FBQ3BDWixHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7S0FDcEQ7Q0FFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2VtcHR5Ly4vcGFnZXMvYXBpL3NwZWFrZXJzL2luZGV4LmpzPzdkOWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQge2RhdGF9IGZyb20gJy4uLy4uLy4uL1NwZWFrZXJEYXRhJztcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5jb25zdCB7cHJvbWlzaWZ5fSA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xyXG5jb25zdCByZWFkRmlsZSA9IHByb21pc2lmeShmcy5yZWFkRmlsZSk7XHJcbmNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge3NldFRpbWVvdXQocmVzb2x2ZSxtcyl9KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKXtcclxuICAgIC8vcmVzLnN0YXR1cygyMDApLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMikpO1xyXG4gICAgY29uc3QganNvbkZpbGUgPSBwYXRoLnJlc29sdmUoXCIuL1wiLCBcImRiLmpzb25cIilcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZWFkRmlsZURhdGEgPSBhd2FpdCByZWFkRmlsZShqc29uRmlsZSk7XHJcbiAgICAgICAgYXdhaXQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgY29uc3Qgc3BlYWtlcnMgPSBKU09OLnBhcnNlKHJlYWRGaWxlRGF0YSkuc3BlYWtlcnM7XHJcbiAgICAgICAgaWYoc3BlYWtlcnMpe1xyXG4gICAgICAgICAgICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoSlNPTi5zdHJpbmdpZnkoc3BlYWtlcnMsIG51bGwsIDIpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJHZXQgYXBpL3NwZWFrZXJzIHN0YXR1czoyMDBcIilcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzcGkvc3BlYWtlcnMgZXJyb3JcIiwgZSlcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZChcIkZpbGUgbm90IGZvdW5kIG9uIHNlcnZlclwiKTtcclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOlsicGF0aCIsImZzIiwicHJvbWlzaWZ5IiwicmVxdWlyZSIsInJlYWRGaWxlIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJqc29uRmlsZSIsInJlYWRGaWxlRGF0YSIsInNwZWFrZXJzIiwiSlNPTiIsInBhcnNlIiwic2V0SGVhZGVyIiwic3RhdHVzIiwic2VuZCIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/speakers/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/speakers/index.js"));
module.exports = __webpack_exports__;

})();