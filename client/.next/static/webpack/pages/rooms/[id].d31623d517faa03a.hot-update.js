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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Result = function(param) {\n    var showResult = param.showResult, winner = param.winner, winWord = param.winWord, resetHandler = param.resetHandler, playerName = param.playerName, wordOptions = param.wordOptions;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \" \",\n            showResult && playerName === winner ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-1/4 w-1/2 h-1/4 bg-neutral-700 rounded-2xl flex flex-col justify-center items-center gap-y-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-stone-50 text-2xl\",\n                        children: [\n                            winner,\n                            \" has won with the word\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-purple-400\",\n                                children: winWord\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\Result.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\Result.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex justify-center items-center\",\n                        children: wordOptions.map(function(nextWord, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return resetHandler();\n                                },\n                                className: \"p-4 px-8 bg-emerald-600 hover:bg-emerald-400 rounded-full\",\n                                children: nextWord[0]\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\Result.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 8\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\Result.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 6\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\Result.tsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, _this) : showResult && playerName !== winner ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-1/4 w-1/2 h-1/4 bg-neutral-700 rounded-2xl flex flex-col justify-center items-center gap-y-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-stone-50 text-2xl\",\n                        children: [\n                            winner,\n                            \" has won with the word\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-purple-400\",\n                                children: winWord\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\Result.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\Result.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-1/2 h-1/5 bg-stone-600 hover:bg-stone-400 rounded-full \",\n                        children: \"Waiting for new word . . .\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\Result.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 6\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\Result.tsx\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, _this) : null\n        ]\n    }, void 0, true);\n};\n_c = Result;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Result);\nvar _c;\n$RefreshReg$(_c, \"Result\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jlc3VsdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBMEI7QUFXMUIsSUFBTUMsTUFBTSxHQUFvQixnQkFPMUI7UUFOTEMsVUFBVSxTQUFWQSxVQUFVLEVBQ1ZDLE1BQU0sU0FBTkEsTUFBTSxFQUNOQyxPQUFPLFNBQVBBLE9BQU8sRUFDUEMsWUFBWSxTQUFaQSxZQUFZLEVBQ1pDLFVBQVUsU0FBVkEsVUFBVSxFQUNWQyxXQUFXLFNBQVhBLFdBQVc7O0lBRVgscUJBQ0M7O1lBQ0UsR0FBRztZQUNITCxVQUFVLElBQUlJLFVBQVUsS0FBS0gsTUFBTSxpQkFDbkMsOERBQUNLLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyw2R0FBNkc7O2tDQUMzSCw4REFBQ0MsSUFBRTt3QkFBQ0QsU0FBUyxFQUFDLHdCQUF3Qjs7NEJBQ3BDTixNQUFNOzRCQUFDLHdCQUFzQjs0QkFBQyxHQUFHOzBDQUNsQyw4REFBQ1EsTUFBSTtnQ0FBQ0YsU0FBUyxFQUFDLGlCQUFpQjswQ0FBRUwsT0FBTzs7Ozs7cUNBQVE7Ozs7Ozs2QkFDOUM7a0NBQ0wsOERBQUNJLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyx5Q0FBeUM7a0NBQ3RERixXQUFXLENBQUNLLEdBQUcsQ0FBQyxTQUFDQyxRQUFnQixFQUFFQyxHQUFXO2lEQUM5Qyw4REFBQ0MsUUFBTTtnQ0FFTkMsT0FBTyxFQUFFOzJDQUFNWCxZQUFZLEVBQUU7aUNBQUE7Z0NBQzdCSSxTQUFTLEVBQUMsMkRBQTJEOzBDQUVwRUksUUFBUSxDQUFDLENBQUMsQ0FBQzsrQkFKUEMsR0FBRzs7OztzQ0FLQTt5QkFDVCxDQUFDOzs7Ozs2QkFDRzs7Ozs7O3FCQUNELEdBQ0haLFVBQVUsSUFBSUksVUFBVSxLQUFLSCxNQUFNLGlCQUN0Qyw4REFBQ0ssS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDZHQUE2Rzs7a0NBQzNILDhEQUFDQyxJQUFFO3dCQUFDRCxTQUFTLEVBQUMsd0JBQXdCOzs0QkFDcENOLE1BQU07NEJBQUMsd0JBQXNCOzRCQUFDLEdBQUc7MENBQ2xDLDhEQUFDUSxNQUFJO2dDQUFDRixTQUFTLEVBQUMsaUJBQWlCOzBDQUFFTCxPQUFPOzs7OztxQ0FBUTs7Ozs7OzZCQUM5QztrQ0FDTCw4REFBQ1csUUFBTTt3QkFBQ04sU0FBUyxFQUFDLDJEQUEyRDtrQ0FBQyw0QkFFOUU7Ozs7OzZCQUFTOzs7Ozs7cUJBQ0osR0FDSCxJQUFJOztvQkFDTixDQUNGO0NBQ0Y7QUExQ0tSLEtBQUFBLE1BQU07QUE0Q1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Jlc3VsdC50c3g/MTBlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG5cdHNob3dSZXN1bHQ6IGJvb2xlYW47XHJcblx0d2lubmVyOiBzdHJpbmc7XHJcblx0d2luV29yZDogc3RyaW5nO1xyXG5cdHJlc2V0SGFuZGxlcjogRnVuY3Rpb247XHJcblx0cGxheWVyTmFtZTogc3RyaW5nO1xyXG5cdHdvcmRPcHRpb25zOiBzdHJpbmdbXTtcclxufVxyXG5cclxuY29uc3QgUmVzdWx0OiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG5cdHNob3dSZXN1bHQsXHJcblx0d2lubmVyLFxyXG5cdHdpbldvcmQsXHJcblx0cmVzZXRIYW5kbGVyLFxyXG5cdHBsYXllck5hbWUsXHJcblx0d29yZE9wdGlvbnMsXHJcbn0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e1wiIFwifVxyXG5cdFx0XHR7c2hvd1Jlc3VsdCAmJiBwbGF5ZXJOYW1lID09PSB3aW5uZXIgPyAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0xLzQgdy0xLzIgaC0xLzQgYmctbmV1dHJhbC03MDAgcm91bmRlZC0yeGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLXktNlwiPlxyXG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAgdGV4dC0yeGxcIj5cclxuXHRcdFx0XHRcdFx0e3dpbm5lcn0gaGFzIHdvbiB3aXRoIHRoZSB3b3Jke1wiIFwifVxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXB1cnBsZS00MDBcIj57d2luV29yZH08L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0e3dvcmRPcHRpb25zLm1hcCgobmV4dFdvcmQ6IHN0cmluZywga2V5OiBudW1iZXIpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9e2tleX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJlc2V0SGFuZGxlcigpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicC00IHB4LTggYmctZW1lcmFsZC02MDAgaG92ZXI6YmctZW1lcmFsZC00MDAgcm91bmRlZC1mdWxsXCJcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7bmV4dFdvcmRbMF19XHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCkgOiBzaG93UmVzdWx0ICYmIHBsYXllck5hbWUgIT09IHdpbm5lciA/IChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTEvNCB3LTEvMiBoLTEvNCBiZy1uZXV0cmFsLTcwMCByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAteS02XCI+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MCB0ZXh0LTJ4bFwiPlxyXG5cdFx0XHRcdFx0XHR7d2lubmVyfSBoYXMgd29uIHdpdGggdGhlIHdvcmR7XCIgXCJ9XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHVycGxlLTQwMFwiPnt3aW5Xb3JkfTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInctMS8yIGgtMS81IGJnLXN0b25lLTYwMCBob3ZlcjpiZy1zdG9uZS00MDAgcm91bmRlZC1mdWxsIFwiPlxyXG5cdFx0XHRcdFx0XHRXYWl0aW5nIGZvciBuZXcgd29yZCAuIC4gLlxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCkgOiBudWxsfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VsdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVzdWx0Iiwic2hvd1Jlc3VsdCIsIndpbm5lciIsIndpbldvcmQiLCJyZXNldEhhbmRsZXIiLCJwbGF5ZXJOYW1lIiwid29yZE9wdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJtYXAiLCJuZXh0V29yZCIsImtleSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Result.tsx\n"));

/***/ })

});