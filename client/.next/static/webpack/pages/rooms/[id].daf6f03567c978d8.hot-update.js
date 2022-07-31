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

/***/ "./components/ChatBox.tsx":
/*!********************************!*\
  !*** ./components/ChatBox.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Socket */ \"./components/Socket.tsx\");\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ChatBox = function(param) {\n    var queryId = param.queryId;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), message = ref[0], setMessage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), messageBoxes = ref1[0], setMessageBoxes = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setMessageBoxes(function(prevState) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(prevState).concat([\n                \"Room Code: [ \".concat(queryId, \" ]\"), \n            ]);\n        });\n        _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].emit(\"join\");\n        _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(\"connect\", function() {});\n        _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(\"join\", function(id) {\n            setMessageBoxes(function(prevState) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(prevState).concat([\n                    \"User \".concat(id, \" has joined the game.\"), \n                ]);\n            });\n        });\n        _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(\"disconnect\", function() {\n            _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].emit(\"leave\");\n        });\n        _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(\"leave\", function(id) {\n            setMessageBoxes(function(prevState) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(prevState).concat([\n                    \"User \".concat(id, \" has disconnect.\"), \n                ]);\n            });\n        });\n        _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(\"message\", function(msg) {\n            setMessageBoxes(function(prevState) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(prevState).concat([\n                    msg\n                ]);\n            });\n        });\n        return function() {\n            _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].off(\"connect\");\n            _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].off(\"message\");\n            _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].off(\"disconnect\");\n        };\n    }, []);\n    var changeMessageHandler = function(e) {\n        setMessage(e.target.value);\n    };\n    var sendMessage = function(e) {\n        e.preventDefault();\n        var newMessage = \"\".concat(_Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].id, \": \").concat(message);\n        _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].emit(\"message\", newMessage);\n        setMessageBoxes(function(prevState) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(prevState).concat([\n                newMessage\n            ]);\n        });\n        ref2.current.value = \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative sm:w-full md:w-1/4 sm:h-4/5 h-3/4 bg-neutral-800 rounded flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 m-4 w-full h-5/6 rounded flex flex-col-reverse justify-start items-start overflow-auto bg-stone-900\",\n                children: messageBoxes.slice(0).reverse().map(function(msg) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2 mt-6 bg-stone-800 text-stone-50 rounded\",\n                        children: msg\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 8\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n                lineNumber: 57,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"absolute my-6 m-2 flex justify-center items-center w-full self-end\",\n                onSubmit: function(e) {\n                    return sendMessage(e);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"chatInput\",\n                        ref: ref2,\n                        placeholder: \"Enter a message...\",\n                        className: \"p-2 pb-6 rounded w-3/4 bg-stone-900 text-stone-50\",\n                        onChange: function(e) {\n                            return changeMessageHandler(e);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        form: \"chatInput\",\n                        type: \"submit\",\n                        className: \"mx-2 p-4 rounded bg-emerald-600 flex justify-center items-center\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n                lineNumber: 70,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n        lineNumber: 56,\n        columnNumber: 3\n    }, _this);\n};\n_s(ChatBox, \"qQQ7LnOzKZ4LqWnaHpPgYeMRfbY=\");\n_c = ChatBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBox);\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUVKLEtBQUssR0FBRyxFQUFFLENBQUM7S0FDeEI7SUFFRCxxQkFDQyw4REFBQ0ssS0FBRztRQUFDQyxTQUFTLEVBQUMsd0VBQXdFOzswQkFDdEYsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx5R0FBeUc7MEJBQ3RIbEIsWUFBWSxDQUNYbUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNSQyxPQUFPLEVBQUUsQ0FDVEMsR0FBRyxDQUFDLFNBQUNkLEdBQUcsRUFBSztvQkFDYixxQkFDQyw4REFBQ1UsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDZDQUE2QztrQ0FDMURYLEdBQUc7Ozs7OzhCQUNDLENBQ0w7aUJBQ0YsQ0FBQzs7Ozs7cUJBQ0U7MEJBRU4sOERBQUNlLE1BQUk7Z0JBQ0pKLFNBQVMsRUFBQyxvRUFBb0U7Z0JBQzlFSyxRQUFRLEVBQUUsU0FBQ2IsQ0FBQzsyQkFBS0csV0FBVyxDQUFDSCxDQUFDLENBQUM7aUJBQUE7O2tDQUUvQiw4REFBQ2MsT0FBSzt3QkFDTGxCLEVBQUUsRUFBQyxXQUFXO3dCQUNkSixHQUFHLEVBQUVBLElBQUc7d0JBQ1J1QixXQUFXLEVBQUMsb0JBQW9CO3dCQUNoQ1AsU0FBUyxFQUFDLG1EQUFtRDt3QkFDN0RRLFFBQVEsRUFBRSxTQUFDaEIsQ0FBQzttQ0FBS0Qsb0JBQW9CLENBQUNDLENBQUMsQ0FBQzt5QkFBQTs7Ozs7NkJBQ3ZDO2tDQUNGLDhEQUFDaUIsUUFBTTt3QkFDTkwsSUFBSSxFQUFDLFdBQVc7d0JBQ2hCTSxJQUFJLEVBQUMsUUFBUTt3QkFDYlYsU0FBUyxFQUFDLGtFQUFrRTtrQ0FDNUUsTUFFRDs7Ozs7NkJBQVM7Ozs7OztxQkFDSDs7Ozs7O2FBQ0YsQ0FDTDtDQUNGO0dBbkZLdEIsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBcUZiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0Qm94LnRzeD81YWI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHNvY2tldCBmcm9tIFwiLi9Tb2NrZXRcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcblx0cXVlcnlJZDogc3RyaW5nIHwgc3RyaW5nW107XHJcbn1cclxuXHJcbmNvbnN0IENoYXRCb3g6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHF1ZXJ5SWQgfSkgPT4ge1xyXG5cdGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFttZXNzYWdlQm94ZXMsIHNldE1lc3NhZ2VCb3hlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG5cdGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldE1lc3NhZ2VCb3hlcygocHJldlN0YXRlOiBhbnkpID0+IFtcclxuXHRcdFx0Li4ucHJldlN0YXRlLFxyXG5cdFx0XHRgUm9vbSBDb2RlOiBbICR7cXVlcnlJZH0gXWAsXHJcblx0XHRdKTtcclxuXHRcdHNvY2tldC5lbWl0KFwiam9pblwiKTtcclxuXHRcdHNvY2tldC5vbihcImNvbm5lY3RcIiwgKCkgPT4ge30pO1xyXG5cdFx0c29ja2V0Lm9uKFwiam9pblwiLCAoaWQpID0+IHtcclxuXHRcdFx0c2V0TWVzc2FnZUJveGVzKChwcmV2U3RhdGU6IGFueSkgPT4gW1xyXG5cdFx0XHRcdC4uLnByZXZTdGF0ZSxcclxuXHRcdFx0XHRgVXNlciAke2lkfSBoYXMgam9pbmVkIHRoZSBnYW1lLmAsXHJcblx0XHRcdF0pO1xyXG5cdFx0fSk7XHJcblx0XHRzb2NrZXQub24oXCJkaXNjb25uZWN0XCIsICgpID0+IHtcclxuXHRcdFx0c29ja2V0LmVtaXQoXCJsZWF2ZVwiKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHNvY2tldC5vbihcImxlYXZlXCIsIChpZCkgPT4ge1xyXG5cdFx0XHRzZXRNZXNzYWdlQm94ZXMoKHByZXZTdGF0ZTogYW55KSA9PiBbXHJcblx0XHRcdFx0Li4ucHJldlN0YXRlLFxyXG5cdFx0XHRcdGBVc2VyICR7aWR9IGhhcyBkaXNjb25uZWN0LmAsXHJcblx0XHRcdF0pO1xyXG5cdFx0fSk7XHJcblx0XHRzb2NrZXQub24oXCJtZXNzYWdlXCIsIChtc2cpID0+IHtcclxuXHRcdFx0c2V0TWVzc2FnZUJveGVzKChwcmV2U3RhdGUpID0+IFsuLi5wcmV2U3RhdGUsIG1zZ10pO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHRzb2NrZXQub2ZmKFwiY29ubmVjdFwiKTtcclxuXHRcdFx0c29ja2V0Lm9mZihcIm1lc3NhZ2VcIik7XHJcblx0XHRcdHNvY2tldC5vZmYoXCJkaXNjb25uZWN0XCIpO1xyXG5cdFx0fTtcclxuXHR9LCBbXSk7XHJcblx0Y29uc3QgY2hhbmdlTWVzc2FnZUhhbmRsZXIgPSAoZTogYW55KSA9PiB7XHJcblx0XHRzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKTtcclxuXHR9O1xyXG5cdGNvbnN0IHNlbmRNZXNzYWdlID0gKGU6IGFueSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IG5ld01lc3NhZ2UgPSBgJHtzb2NrZXQuaWR9OiAke21lc3NhZ2V9YDtcclxuXHRcdHNvY2tldC5lbWl0KFwibWVzc2FnZVwiLCBuZXdNZXNzYWdlKTtcclxuXHRcdHNldE1lc3NhZ2VCb3hlcygocHJldlN0YXRlKSA9PiBbLi4ucHJldlN0YXRlLCBuZXdNZXNzYWdlXSk7XHJcblx0XHRyZWYuY3VycmVudCEudmFsdWUgPSBcIlwiO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNtOnctZnVsbCBtZDp3LTEvNCBzbTpoLTQvNSBoLTMvNCBiZy1uZXV0cmFsLTgwMCByb3VuZGVkIGZsZXhcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTQgbS00IHctZnVsbCBoLTUvNiByb3VuZGVkIGZsZXggZmxleC1jb2wtcmV2ZXJzZSBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IG92ZXJmbG93LWF1dG8gYmctc3RvbmUtOTAwXCI+XHJcblx0XHRcdFx0e21lc3NhZ2VCb3hlc1xyXG5cdFx0XHRcdFx0LnNsaWNlKDApXHJcblx0XHRcdFx0XHQucmV2ZXJzZSgpXHJcblx0XHRcdFx0XHQubWFwKChtc2cpID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtMiBtdC02IGJnLXN0b25lLTgwMCB0ZXh0LXN0b25lLTUwIHJvdW5kZWRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdHttc2d9XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8Zm9ybVxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIG15LTYgbS0yIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBzZWxmLWVuZFwiXHJcblx0XHRcdFx0b25TdWJtaXQ9eyhlKSA9PiBzZW5kTWVzc2FnZShlKX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0aWQ9XCJjaGF0SW5wdXRcIlxyXG5cdFx0XHRcdFx0cmVmPXtyZWZ9XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVudGVyIGEgbWVzc2FnZS4uLlwiXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJwLTIgcGItNiByb3VuZGVkIHctMy80IGJnLXN0b25lLTkwMCB0ZXh0LXN0b25lLTUwXCJcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlTWVzc2FnZUhhbmRsZXIoZSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRmb3JtPVwiY2hhdElucHV0XCJcclxuXHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibXgtMiBwLTQgcm91bmRlZCBiZy1lbWVyYWxkLTYwMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0U2VuZFxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEJveDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJzb2NrZXQiLCJDaGF0Qm94IiwicXVlcnlJZCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZUJveGVzIiwic2V0TWVzc2FnZUJveGVzIiwicmVmIiwicHJldlN0YXRlIiwiZW1pdCIsIm9uIiwiaWQiLCJtc2ciLCJvZmYiLCJjaGFuZ2VNZXNzYWdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmRNZXNzYWdlIiwicHJldmVudERlZmF1bHQiLCJuZXdNZXNzYWdlIiwiY3VycmVudCIsImRpdiIsImNsYXNzTmFtZSIsInNsaWNlIiwicmV2ZXJzZSIsIm1hcCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ChatBox.tsx\n"));

/***/ })

});