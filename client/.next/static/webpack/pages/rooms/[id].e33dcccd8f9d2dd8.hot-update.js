"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/rooms/[id]",{

/***/ "./components/Result.tsx":
/*!*******************************!*\
  !*** ./components/Result.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Result = function(param) {\n    var showResult = param.showResult, winner = param.winner, winWord = param.winWord, resetHandler = param.resetHandler, playerName = param.playerName, wordOptions = param.wordOptions;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \" \",\n            showResult && playerName === winner ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-1/4 w-1/2 h-1/4 bg-neutral-700 rounded-2xl flex flex-col justify-center items-center gap-y-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-stone-50 text-2xl\",\n                        children: [\n                            winner,\n                            \" has won with the word\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-purple-400\",\n                                children: winWord\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\Result.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\Result.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Choose next word: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\Result.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex justify-center items-center\",\n                        children: wordOptions.map(function(nextWord, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return resetHandler();\n                                },\n                                className: \"p-2 px-8 mx-4 bg-emerald-600 hover:bg-emerald-400 rounded\",\n                                children: nextWord[0].toUpperCase()\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\Result.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 8\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\Result.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 6\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\Result.tsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, _this) : showResult && playerName !== winner ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-1/4 w-1/2 h-1/4 bg-neutral-700 rounded-2xl flex flex-col justify-center items-center gap-y-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-stone-50 text-2xl\",\n                        children: [\n                            winner,\n                            \" has won with the word\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-purple-400\",\n                                children: winWord\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\Result.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\Result.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-1/2 h-1/5 bg-stone-600 hover:bg-stone-400 rounded-full \",\n                        children: \"Waiting for new word . . .\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\Result.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 6\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\Result.tsx\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, _this) : null\n        ]\n    }, void 0, true);\n};\n_c = Result;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Result);\nvar _c;\n$RefreshReg$(_c, \"Result\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jlc3VsdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBMEI7QUFXMUIsSUFBTUMsTUFBTSxHQUFvQixnQkFPMUI7UUFOTEMsVUFBVSxTQUFWQSxVQUFVLEVBQ1ZDLE1BQU0sU0FBTkEsTUFBTSxFQUNOQyxPQUFPLFNBQVBBLE9BQU8sRUFDUEMsWUFBWSxTQUFaQSxZQUFZLEVBQ1pDLFVBQVUsU0FBVkEsVUFBVSxFQUNWQyxXQUFXLFNBQVhBLFdBQVc7O0lBRVgscUJBQ0M7O1lBQ0UsR0FBRztZQUNITCxVQUFVLElBQUlJLFVBQVUsS0FBS0gsTUFBTSxpQkFDbkMsOERBQUNLLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyw2R0FBNkc7O2tDQUMzSCw4REFBQ0MsSUFBRTt3QkFBQ0QsU0FBUyxFQUFDLHdCQUF3Qjs7NEJBQ3BDTixNQUFNOzRCQUFDLHdCQUFzQjs0QkFBQyxHQUFHOzBDQUNsQyw4REFBQ1EsTUFBSTtnQ0FBQ0YsU0FBUyxFQUFDLGlCQUFpQjswQ0FBRUwsT0FBTzs7Ozs7cUNBQVE7Ozs7Ozs2QkFDOUM7a0NBQ0wsOERBQUNRLEdBQUM7a0NBQUMsb0JBQWtCOzs7Ozs2QkFBSTtrQ0FDekIsOERBQUNKLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyx5Q0FBeUM7a0NBQ3RERixXQUFXLENBQUNNLEdBQUcsQ0FBQyxTQUFDQyxRQUFnQixFQUFFQyxHQUFXO2lEQUM5Qyw4REFBQ0MsUUFBTTtnQ0FFTkMsT0FBTyxFQUFFOzJDQUFNWixZQUFZLEVBQUU7aUNBQUE7Z0NBQzdCSSxTQUFTLEVBQUMsMkRBQTJEOzBDQUVwRUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDSSxXQUFXLEVBQUU7K0JBSnJCSCxHQUFHOzs7O3NDQUtBO3lCQUNULENBQUM7Ozs7OzZCQUNHOzs7Ozs7cUJBQ0QsR0FDSGIsVUFBVSxJQUFJSSxVQUFVLEtBQUtILE1BQU0saUJBQ3RDLDhEQUFDSyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsNkdBQTZHOztrQ0FDM0gsOERBQUNDLElBQUU7d0JBQUNELFNBQVMsRUFBQyx3QkFBd0I7OzRCQUNwQ04sTUFBTTs0QkFBQyx3QkFBc0I7NEJBQUMsR0FBRzswQ0FDbEMsOERBQUNRLE1BQUk7Z0NBQUNGLFNBQVMsRUFBQyxpQkFBaUI7MENBQUVMLE9BQU87Ozs7O3FDQUFROzs7Ozs7NkJBQzlDO2tDQUNMLDhEQUFDWSxRQUFNO3dCQUFDUCxTQUFTLEVBQUMsMkRBQTJEO2tDQUFDLDRCQUU5RTs7Ozs7NkJBQVM7Ozs7OztxQkFDSixHQUNILElBQUk7O29CQUNOLENBQ0Y7Q0FDRjtBQTNDS1IsS0FBQUEsTUFBTTtBQTZDWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVzdWx0LnRzeD8xMGU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcblx0c2hvd1Jlc3VsdDogYm9vbGVhbjtcclxuXHR3aW5uZXI6IHN0cmluZztcclxuXHR3aW5Xb3JkOiBzdHJpbmc7XHJcblx0cmVzZXRIYW5kbGVyOiBGdW5jdGlvbjtcclxuXHRwbGF5ZXJOYW1lOiBzdHJpbmc7XHJcblx0d29yZE9wdGlvbnM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5jb25zdCBSZXN1bHQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcblx0c2hvd1Jlc3VsdCxcclxuXHR3aW5uZXIsXHJcblx0d2luV29yZCxcclxuXHRyZXNldEhhbmRsZXIsXHJcblx0cGxheWVyTmFtZSxcclxuXHR3b3JkT3B0aW9ucyxcclxufSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7XCIgXCJ9XHJcblx0XHRcdHtzaG93UmVzdWx0ICYmIHBsYXllck5hbWUgPT09IHdpbm5lciA/IChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTEvNCB3LTEvMiBoLTEvNCBiZy1uZXV0cmFsLTcwMCByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAteS02XCI+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MCB0ZXh0LTJ4bFwiPlxyXG5cdFx0XHRcdFx0XHR7d2lubmVyfSBoYXMgd29uIHdpdGggdGhlIHdvcmR7XCIgXCJ9XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHVycGxlLTQwMFwiPnt3aW5Xb3JkfTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHQ8cD5DaG9vc2UgbmV4dCB3b3JkOiA8L3A+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHR7d29yZE9wdGlvbnMubWFwKChuZXh0V29yZDogc3RyaW5nLCBrZXk6IG51bWJlcikgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGtleT17a2V5fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcmVzZXRIYW5kbGVyKCl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwLTIgcHgtOCBteC00IGJnLWVtZXJhbGQtNjAwIGhvdmVyOmJnLWVtZXJhbGQtNDAwIHJvdW5kZWRcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHtuZXh0V29yZFswXS50b1VwcGVyQ2FzZSgpfVxyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpIDogc2hvd1Jlc3VsdCAmJiBwbGF5ZXJOYW1lICE9PSB3aW5uZXIgPyAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0xLzQgdy0xLzIgaC0xLzQgYmctbmV1dHJhbC03MDAgcm91bmRlZC0yeGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLXktNlwiPlxyXG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAgdGV4dC0yeGxcIj5cclxuXHRcdFx0XHRcdFx0e3dpbm5lcn0gaGFzIHdvbiB3aXRoIHRoZSB3b3Jke1wiIFwifVxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXB1cnBsZS00MDBcIj57d2luV29yZH08L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTEvMiBoLTEvNSBiZy1zdG9uZS02MDAgaG92ZXI6Ymctc3RvbmUtNDAwIHJvdW5kZWQtZnVsbCBcIj5cclxuXHRcdFx0XHRcdFx0V2FpdGluZyBmb3IgbmV3IHdvcmQgLiAuIC5cclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpIDogbnVsbH1cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN1bHQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlc3VsdCIsInNob3dSZXN1bHQiLCJ3aW5uZXIiLCJ3aW5Xb3JkIiwicmVzZXRIYW5kbGVyIiwicGxheWVyTmFtZSIsIndvcmRPcHRpb25zIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwicCIsIm1hcCIsIm5leHRXb3JkIiwia2V5IiwiYnV0dG9uIiwib25DbGljayIsInRvVXBwZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Result.tsx\n"));

/***/ })

});