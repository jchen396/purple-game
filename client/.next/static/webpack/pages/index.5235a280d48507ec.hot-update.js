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

/***/ "./components/ChatBox.tsx":
/*!********************************!*\
  !*** ./components/ChatBox.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Socket */ \"./components/Socket.tsx\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ChatBox = function() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(\"connect\", function() {\n            console.log(_Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].id);\n        });\n        return function() {\n            _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].off(\"connect\");\n        };\n    });\n    var sendMessage = function(e) {\n        console.log(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:p-10 p-8 sm:w-full md:w-1/4 sm:h-4/5 h-3/4 bg-stone-800 rounded flex justify-center items-end\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                placeholder: \"Enter a message...\",\n                type: \"text\",\n                className: \"p-2 pb-5 w-full rounded\",\n                onSubmit: function(e) {\n                    return sendMessage(e);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n                lineNumber: 18,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"mx-2 p-3 rounded bg-slate-200 flex justify-center items-center\",\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, _this);\n};\n_s(ChatBox, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = ChatBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBox);\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYXRCb3gudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUF5QztBQUNYOztBQUU5QixJQUFNRyxPQUFPLEdBQUcsV0FBTTs7SUFDckJGLGdEQUFTLENBQUMsV0FBTTtRQUNmQyxrREFBUyxDQUFDLFNBQVMsRUFBRSxXQUFNO1lBQzFCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osa0RBQVMsQ0FBQyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQztRQUNILE9BQU8sV0FBTTtZQUNaQSxtREFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3RCLENBQUM7S0FDRixDQUFDLENBQUM7SUFDSCxJQUFNTyxXQUFXLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQzFCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO0tBQzVCO0lBQ0QscUJBQ0MsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGtHQUFrRzs7MEJBQ2hILDhEQUFDQyxPQUFLO2dCQUNMQyxXQUFXLEVBQUMsb0JBQW9CO2dCQUNoQ0MsSUFBSSxFQUFDLE1BQU07Z0JBQ1hILFNBQVMsRUFBQyx5QkFBeUI7Z0JBQ25DSSxRQUFRLEVBQUUsU0FBQ1IsQ0FBQzsyQkFBS0QsV0FBVyxDQUFDQyxDQUFDLENBQUM7aUJBQUE7Ozs7O3FCQUM5QjswQkFDRiw4REFBQ1MsUUFBTTtnQkFBQ0wsU0FBUyxFQUFDLGdFQUFnRTswQkFBQyxNQUVuRjs7Ozs7cUJBQVM7Ozs7OzthQUNKLENBQ0w7Q0FDRjtHQXpCS1gsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBMkJiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0Qm94LnRzeD81YWI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHNvY2tldCBmcm9tIFwiLi9Tb2NrZXRcIjtcclxuXHJcbmNvbnN0IENoYXRCb3ggPSAoKSA9PiB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNvY2tldC5vbihcImNvbm5lY3RcIiwgKCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhzb2NrZXQuaWQpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHRzb2NrZXQub2ZmKFwiY29ubmVjdFwiKTtcclxuXHRcdH07XHJcblx0fSk7XHJcblx0Y29uc3Qgc2VuZE1lc3NhZ2UgPSAoZSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG5cdH07XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwic206cC0xMCBwLTggc206dy1mdWxsIG1kOnctMS80IHNtOmgtNC81IGgtMy80IGJnLXN0b25lLTgwMCByb3VuZGVkIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtZW5kXCI+XHJcblx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBtZXNzYWdlLi4uXCJcclxuXHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwicC0yIHBiLTUgdy1mdWxsIHJvdW5kZWRcIlxyXG5cdFx0XHRcdG9uU3VibWl0PXsoZSkgPT4gc2VuZE1lc3NhZ2UoZSl9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwibXgtMiBwLTMgcm91bmRlZCBiZy1zbGF0ZS0yMDAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuXHRcdFx0XHRTZW5kXHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRCb3g7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInNvY2tldCIsIkNoYXRCb3giLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIm9mZiIsInNlbmRNZXNzYWdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJvblN1Ym1pdCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ChatBox.tsx\n"));

/***/ })

});