"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["fibonacci_pkg_index_js"],{

/***/ "../fibonacci/pkg/index.js":
/*!*********************************!*\
  !*** ../fibonacci/pkg/index.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),\n/* harmony export */   fib: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.fib)\n/* harmony export */ });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_bg.wasm */ \"../fibonacci/pkg/index_bg.wasm\");\n/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.js */ \"../fibonacci/pkg/index_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n(0,_index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://webpack/../fibonacci/pkg/index.js?");

/***/ }),

/***/ "../fibonacci/pkg/index_bg.js":
/*!************************************!*\
  !*** ../fibonacci/pkg/index_bg.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),\n/* harmony export */   fib: () => (/* binding */ fib)\n/* harmony export */ });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\n/**\n* @param {number} n\n* @returns {number}\n*/\nfunction fib(n) {\n    _assertNum(n);\n    const ret = wasm.fib(n);\n    return ret >>> 0;\n}\n\n\n\n//# sourceURL=webpack://webpack/../fibonacci/pkg/index_bg.js?");

/***/ }),

/***/ "../fibonacci/pkg/index_bg.wasm":
/*!**************************************!*\
  !*** ../fibonacci/pkg/index_bg.wasm ***!
  \**************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.v(exports, module.id, \"fcb3ce190298aa19c6af\");\n\n//# sourceURL=webpack://webpack/../fibonacci/pkg/index_bg.wasm?");

/***/ })

}]);