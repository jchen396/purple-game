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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Socket */ \"./components/Socket.tsx\");\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ChatBox = function(param) {\n    var queryId = param.queryId;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), message = ref[0], setMessage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), messageBoxes = ref1[0], setMessageBoxes = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(_Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n        setMessageBoxes(function(prevState) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(prevState).concat([\n                \"Room Code: [ \".concat(queryId, \" ]\"), \n            ]);\n        });\n        _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].emit(\"join\", queryId);\n        _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(\"connect\", function() {});\n        _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(\"join\", function(id) {\n            setMessageBoxes(function(prevState) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(prevState).concat([\n                    \"User \".concat(id, \" has joined the game.\"), \n                ]);\n            });\n        });\n        _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(\"disconnect\", function() {\n            _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].emit(\"leave\");\n        });\n        _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(\"leave\", function(id) {\n            setMessageBoxes(function(prevState) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(prevState).concat([\n                    \"User \".concat(id, \" has disconnect.\"), \n                ]);\n            });\n        });\n        _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(\"message\", function(msg) {\n            setMessageBoxes(function(prevState) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(prevState).concat([\n                    msg\n                ]);\n            });\n        });\n        return function() {\n            _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].off(\"connect\");\n            _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].off(\"message\");\n            _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].off(\"disconnect\");\n        };\n    }, []);\n    var changeMessageHandler = function(e) {\n        setMessage(e.target.value);\n    };\n    var sendMessage = function(e) {\n        e.preventDefault();\n        var newMessage = \"\".concat(_Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].id, \": \").concat(message);\n        _Socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].emit(\"message\", newMessage);\n        setMessageBoxes(function(prevState) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(prevState).concat([\n                newMessage\n            ]);\n        });\n        ref2.current.value = \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative sm:w-full md:w-1/4 sm:h-4/5 h-3/4 bg-neutral-800 rounded flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 m-4 w-full h-5/6 rounded flex flex-col-reverse justify-start items-start overflow-auto bg-stone-900\",\n                children: messageBoxes.slice(0).reverse().map(function(msg, key) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2 mt-6 bg-stone-800 text-stone-50 rounded\",\n                        children: msg\n                    }, key, false, {\n                        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 8\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n                lineNumber: 58,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"absolute my-6 m-2 flex justify-center items-center w-full self-end\",\n                onSubmit: function(e) {\n                    return sendMessage(e);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"chatInput\",\n                        ref: ref2,\n                        placeholder: \"Enter a message...\",\n                        className: \"p-2 pb-6 rounded w-3/4 bg-stone-900 text-stone-50\",\n                        onChange: function(e) {\n                            return changeMessageHandler(e);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        form: \"chatInput\",\n                        type: \"submit\",\n                        className: \"mx-2 p-4 rounded bg-emerald-600 flex justify-center items-center\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n                lineNumber: 74,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n        lineNumber: 57,\n        columnNumber: 3\n    }, _this);\n};\n_s(ChatBox, \"qQQ7LnOzKZ4LqWnaHpPgYeMRfbY=\");\n_c = ChatBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBox);\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhdEJveC50c3g/NWFiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzb2NrZXQgZnJvbSBcIi4vU29ja2V0XCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG5cdHF1ZXJ5SWQ6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG59XHJcblxyXG5jb25zdCBDaGF0Qm94OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBxdWVyeUlkIH0pID0+IHtcclxuXHRjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbbWVzc2FnZUJveGVzLCBzZXRNZXNzYWdlQm94ZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuXHRjb25zdCByZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhzb2NrZXQpO1xyXG5cdFx0c2V0TWVzc2FnZUJveGVzKChwcmV2U3RhdGU6IGFueSkgPT4gW1xyXG5cdFx0XHQuLi5wcmV2U3RhdGUsXHJcblx0XHRcdGBSb29tIENvZGU6IFsgJHtxdWVyeUlkfSBdYCxcclxuXHRcdF0pO1xyXG5cdFx0c29ja2V0LmVtaXQoXCJqb2luXCIsIHF1ZXJ5SWQpO1xyXG5cdFx0c29ja2V0Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7fSk7XHJcblx0XHRzb2NrZXQub24oXCJqb2luXCIsIChpZCkgPT4ge1xyXG5cdFx0XHRzZXRNZXNzYWdlQm94ZXMoKHByZXZTdGF0ZTogYW55KSA9PiBbXHJcblx0XHRcdFx0Li4ucHJldlN0YXRlLFxyXG5cdFx0XHRcdGBVc2VyICR7aWR9IGhhcyBqb2luZWQgdGhlIGdhbWUuYCxcclxuXHRcdFx0XSk7XHJcblx0XHR9KTtcclxuXHRcdHNvY2tldC5vbihcImRpc2Nvbm5lY3RcIiwgKCkgPT4ge1xyXG5cdFx0XHRzb2NrZXQuZW1pdChcImxlYXZlXCIpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0c29ja2V0Lm9uKFwibGVhdmVcIiwgKGlkKSA9PiB7XHJcblx0XHRcdHNldE1lc3NhZ2VCb3hlcygocHJldlN0YXRlOiBhbnkpID0+IFtcclxuXHRcdFx0XHQuLi5wcmV2U3RhdGUsXHJcblx0XHRcdFx0YFVzZXIgJHtpZH0gaGFzIGRpc2Nvbm5lY3QuYCxcclxuXHRcdFx0XSk7XHJcblx0XHR9KTtcclxuXHRcdHNvY2tldC5vbihcIm1lc3NhZ2VcIiwgKG1zZykgPT4ge1xyXG5cdFx0XHRzZXRNZXNzYWdlQm94ZXMoKHByZXZTdGF0ZSkgPT4gWy4uLnByZXZTdGF0ZSwgbXNnXSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdHNvY2tldC5vZmYoXCJjb25uZWN0XCIpO1xyXG5cdFx0XHRzb2NrZXQub2ZmKFwibWVzc2FnZVwiKTtcclxuXHRcdFx0c29ja2V0Lm9mZihcImRpc2Nvbm5lY3RcIik7XHJcblx0XHR9O1xyXG5cdH0sIFtdKTtcclxuXHRjb25zdCBjaGFuZ2VNZXNzYWdlSGFuZGxlciA9IChlOiBhbnkpID0+IHtcclxuXHRcdHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpO1xyXG5cdH07XHJcblx0Y29uc3Qgc2VuZE1lc3NhZ2UgPSAoZTogYW55KSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRsZXQgbmV3TWVzc2FnZSA9IGAke3NvY2tldC5pZH06ICR7bWVzc2FnZX1gO1xyXG5cdFx0c29ja2V0LmVtaXQoXCJtZXNzYWdlXCIsIG5ld01lc3NhZ2UpO1xyXG5cdFx0c2V0TWVzc2FnZUJveGVzKChwcmV2U3RhdGUpID0+IFsuLi5wcmV2U3RhdGUsIG5ld01lc3NhZ2VdKTtcclxuXHRcdHJlZi5jdXJyZW50IS52YWx1ZSA9IFwiXCI7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc206dy1mdWxsIG1kOnctMS80IHNtOmgtNC81IGgtMy80IGJnLW5ldXRyYWwtODAwIHJvdW5kZWQgZmxleFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtNCBtLTQgdy1mdWxsIGgtNS82IHJvdW5kZWQgZmxleCBmbGV4LWNvbC1yZXZlcnNlIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgb3ZlcmZsb3ctYXV0byBiZy1zdG9uZS05MDBcIj5cclxuXHRcdFx0XHR7bWVzc2FnZUJveGVzXHJcblx0XHRcdFx0XHQuc2xpY2UoMClcclxuXHRcdFx0XHRcdC5yZXZlcnNlKClcclxuXHRcdFx0XHRcdC5tYXAoKG1zZywga2V5KSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtrZXl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwLTIgbXQtNiBiZy1zdG9uZS04MDAgdGV4dC1zdG9uZS01MCByb3VuZGVkXCJcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7bXNnfVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0fSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGZvcm1cclxuXHRcdFx0XHRjbGFzc05hbWU9XCJhYnNvbHV0ZSBteS02IG0tMiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgc2VsZi1lbmRcIlxyXG5cdFx0XHRcdG9uU3VibWl0PXsoZSkgPT4gc2VuZE1lc3NhZ2UoZSl9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdGlkPVwiY2hhdElucHV0XCJcclxuXHRcdFx0XHRcdHJlZj17cmVmfVxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbnRlciBhIG1lc3NhZ2UuLi5cIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicC0yIHBiLTYgcm91bmRlZCB3LTMvNCBiZy1zdG9uZS05MDAgdGV4dC1zdG9uZS01MFwiXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IGNoYW5nZU1lc3NhZ2VIYW5kbGVyKGUpfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0Zm9ybT1cImNoYXRJbnB1dFwiXHJcblx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm14LTIgcC00IHJvdW5kZWQgYmctZW1lcmFsZC02MDAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdFNlbmRcclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRCb3g7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic29ja2V0IiwiQ2hhdEJveCIsInF1ZXJ5SWQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1lc3NhZ2VCb3hlcyIsInNldE1lc3NhZ2VCb3hlcyIsInJlZiIsImNvbnNvbGUiLCJsb2ciLCJwcmV2U3RhdGUiLCJlbWl0Iiwib24iLCJpZCIsIm1zZyIsIm9mZiIsImNoYW5nZU1lc3NhZ2VIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VuZE1lc3NhZ2UiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld01lc3NhZ2UiLCJjdXJyZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwic2xpY2UiLCJyZXZlcnNlIiwibWFwIiwia2V5IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ChatBox.tsx\n"));

/***/ })

});