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

/***/ "./components/PlayerList.tsx":
/*!***********************************!*\
  !*** ./components/PlayerList.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar PlayerList = function(param) {\n    var userList = param.userList, userTurn = param.userTurn;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-3 sm:w-full bg-neutral-800 h-1/5 rounded-2xl flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \" text-stone-50 text-2xl\",\n                children: \"Users List: \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\PlayerList.tsx\",\n                lineNumber: 11,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 w-full h-4/5 rounded-2xl flex flex-col justify-start items-center overflow-auto bg-stone-900\",\n                children: userList === null || userList === void 0 ? void 0 : userList.map(function(user) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: user.id == userTurn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex space-between text-xl px-20 text-stone-50 bg-purple-400 rounded-2xl \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\",\n                                    children: user.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\PlayerList.tsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 9\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\",\n                                    children: user.score\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\PlayerList.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 9\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\PlayerList.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 8\n                        }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl text-stone-50\",\n                            children: [\n                                user.name,\n                                user.score\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\PlayerList.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 8\n                        }, _this1)\n                    }, user.id, false, {\n                        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\PlayerList.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 6\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\PlayerList.tsx\",\n                lineNumber: 12,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\PlayerList.tsx\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, _this);\n};\n_c = PlayerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerList);\nvar _c;\n$RefreshReg$(_c, \"PlayerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BsYXllckxpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQTBCO0FBTzFCLElBQU1DLFVBQVUsR0FBb0IsZ0JBQTRCO1FBQXpCQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsUUFBUSxTQUFSQSxRQUFROztJQUN4RCxxQkFDQyw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsMkVBQTRFOzswQkFDMUYsOERBQUNDLElBQUU7Z0JBQUNELFNBQVMsRUFBQyx5QkFBeUI7MEJBQUMsY0FBWTs7Ozs7cUJBQUs7MEJBQ3pELDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsa0dBQWtHOzBCQUMvR0gsUUFBUSxhQUFSQSxRQUFRLFdBQUssR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxRQUFRLENBQUVLLEdBQUcsQ0FBQyxTQUFDQyxJQUFTO3lDQUN4Qiw4REFBQ0osS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLEVBQUU7a0NBQ2ZHLElBQUksQ0FBQ0MsRUFBRSxJQUFJTixRQUFRLGlCQUNuQiw4REFBQ0MsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLDJFQUEyRTs7OENBQ3pGLDhEQUFDSyxNQUFJO29DQUFDTCxTQUFTLEVBQUMsRUFBRTs4Q0FBRUcsSUFBSSxDQUFDRyxJQUFJOzs7OzswQ0FBUTs4Q0FDckMsOERBQUNELE1BQUk7b0NBQUNMLFNBQVMsRUFBQyxFQUFFOzhDQUFFRyxJQUFJLENBQUNJLEtBQUs7Ozs7OzBDQUFROzs7Ozs7a0NBQ2pDLGlCQUVOLDhEQUFDQyxHQUFDOzRCQUFDUixTQUFTLEVBQUMsdUJBQXVCOztnQ0FDbENHLElBQUksQ0FBQ0csSUFBSTtnQ0FDVEgsSUFBSSxDQUFDSSxLQUFLOzs7Ozs7a0NBQ1I7dUJBVmlCSixJQUFJLENBQUNDLEVBQUU7Ozs7OEJBWXhCO2lCQUNOLENBQUM7Ozs7O3FCQUNHOzs7Ozs7YUFDRCxDQUNMO0NBQ0Y7QUF2QktSLEtBQUFBLFVBQVU7QUF5QmhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QbGF5ZXJMaXN0LnRzeD84ZjlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcblx0dXNlckxpc3Q6IHt9W107XHJcblx0dXNlclR1cm4/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFBsYXllckxpc3Q6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHVzZXJMaXN0LCB1c2VyVHVybiB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicC0zIHNtOnctZnVsbCBiZy1uZXV0cmFsLTgwMCBoLTEvNSByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtY29sICBpdGVtcy1jZW50ZXJcIj5cclxuXHRcdFx0PGgxIGNsYXNzTmFtZT1cIiB0ZXh0LXN0b25lLTUwIHRleHQtMnhsXCI+VXNlcnMgTGlzdDogPC9oMT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTQgdy1mdWxsIGgtNC81IHJvdW5kZWQtMnhsIGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgb3ZlcmZsb3ctYXV0byBiZy1zdG9uZS05MDBcIj5cclxuXHRcdFx0XHR7dXNlckxpc3Q/Lm1hcCgodXNlcjogYW55KSA9PiAoXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiIGtleT17dXNlci5pZH0+XHJcblx0XHRcdFx0XHRcdHt1c2VyLmlkID09IHVzZXJUdXJuID8gKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS1iZXR3ZWVuIHRleHQteGwgcHgtMjAgdGV4dC1zdG9uZS01MCBiZy1wdXJwbGUtNDAwIHJvdW5kZWQtMnhsIFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiXCI+e3VzZXIubmFtZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJcIj57dXNlci5zY29yZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LXN0b25lLTUwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7dXNlci5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0e3VzZXIuc2NvcmV9XHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllckxpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBsYXllckxpc3QiLCJ1c2VyTGlzdCIsInVzZXJUdXJuIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJ1c2VyIiwiaWQiLCJzcGFuIiwibmFtZSIsInNjb3JlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PlayerList.tsx\n"));

/***/ })

});