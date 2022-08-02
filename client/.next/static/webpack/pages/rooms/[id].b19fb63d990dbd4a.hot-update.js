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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PlayerList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerList */ \"./components/PlayerList.tsx\");\n/* harmony import */ var _Socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Socket */ \"./components/Socket.tsx\");\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ChatBox = function(param) {\n    var roomCode = param.roomCode, userName = param.userName;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), userList = ref[0], setUserList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), userTurn = ref1[0], setUserTurn = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), message = ref2[0], setMessage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), messageBoxes = ref3[0], setMessageBoxes = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setMessageBoxes(function(prevState) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(prevState).concat([\n                \"Room Code: [ \".concat(roomCode, \" ]\"), \n            ]);\n        });\n        _Socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"].emit(\"join\", roomCode, userName);\n        _Socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"].on(\"connect\", function() {});\n        _Socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"].on(\"join\", function(user, listOfUsers) {\n            setMessageBoxes(function(prevState) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(prevState).concat([\n                    \"User \".concat(user, \" has joined the game.\"), \n                ]);\n            });\n            setUserList(listOfUsers);\n        });\n        _Socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"].on(\"disconnect\", function() {\n            _Socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"].emit(\"leave\", userList);\n        });\n        _Socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"].on(\"leave\", function(user, listOfUsers) {\n            setMessageBoxes(function(prevState) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(prevState).concat([\n                    \"User \".concat(user, \" has disconnect.\"), \n                ]);\n            });\n            setUserList(listOfUsers);\n        });\n        _Socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"].on(\"message\", function(msg) {\n            setMessageBoxes(function(prevState) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(prevState).concat([\n                    msg\n                ]);\n            });\n        });\n        _Socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"].on(\"turn\", function(userId) {\n            setUserTurn(userId);\n        });\n        return function() {\n            _Socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"].off(\"connect\");\n            _Socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"].off(\"join\");\n            _Socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"].off(\"leave\");\n            _Socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"].off(\"message\");\n            _Socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"].off(\"turn\");\n            _Socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"].off(\"disconnect\");\n        };\n    }, []);\n    var changeMessageHandler = function(e) {\n        setMessage(e.target.value);\n    };\n    var sendMessage = function(e) {\n        e.preventDefault();\n        var newMessage = \"\".concat(userName, \": \").concat(message);\n        _Socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"].emit(\"message\", newMessage);\n        setMessageBoxes(function(prevState) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(prevState).concat([\n                newMessage\n            ]);\n        });\n        ref4.current.value = \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-y-10 sm:w-full md:w-1/4 sm:h-4/5 h-3/4 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayerList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                userList: userList,\n                userTurn: userTurn\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n                lineNumber: 69,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative h-4/5 bg-neutral-800 rounded-2xl flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4 m-4 w-full h-5/6 rounded-2xl flex flex-col-reverse justify-start items-start overflow-y-scroll break-all overflow-wrap bg-stone-900\",\n                        children: messageBoxes.slice(0).reverse().map(function(msg, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-2 mt-6 bg-stone-800 text-stone-50 rounded-2xl\",\n                                children: msg\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 9\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"chatInput\",\n                        className: \"absolute mb-4 flex justify-center items-center w-full self-end\",\n                        onSubmit: function(e) {\n                            return sendMessage(e);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ref: ref4,\n                                placeholder: \"Enter a message...\",\n                                className: \"p-2 pb-6 rounded-2xl w-3/4 bg-stone-900 text-stone-50\",\n                                onChange: function(e) {\n                                    return changeMessageHandler(e);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                form: \"chatInput\",\n                                type: \"submit\",\n                                className: \"mx-2 p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-400 flex justify-center items-center\",\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n                lineNumber: 71,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ecuoj\\\\Desktop\\\\Program\\\\PROJECTS\\\\purple-game\\\\purple-game\\\\client\\\\components\\\\ChatBox.tsx\",\n        lineNumber: 68,\n        columnNumber: 3\n    }, _this);\n};\n_s(ChatBox, \"SEqI1NIKMFR7/BR8QXuvW5gaNsk=\");\n_c = ChatBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBox);\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxFQUFLOzRCQUNsQixxQkFDQyw4REFBQ0wsS0FBRztnQ0FFSEMsU0FBUyxFQUFDLGlEQUFpRDswQ0FFMURaLEdBQUc7K0JBSENnQixHQUFHOzs7O3NDQUlILENBQ0w7eUJBQ0YsQ0FBQzs7Ozs7NkJBQ0U7a0NBRU4sOERBQUNDLE1BQUk7d0JBQ0pDLEVBQUUsRUFBQyxXQUFXO3dCQUNkTixTQUFTLEVBQUMsZ0VBQWdFO3dCQUMxRU8sUUFBUSxFQUFFLFNBQUNmLENBQUM7bUNBQUtHLFdBQVcsQ0FBQ0gsQ0FBQyxDQUFDO3lCQUFBOzswQ0FFL0IsOERBQUNnQixPQUFLO2dDQUNMMUIsR0FBRyxFQUFFQSxJQUFHO2dDQUNSMkIsV0FBVyxFQUFDLG9CQUFvQjtnQ0FDaENULFNBQVMsRUFBQyx1REFBdUQ7Z0NBQ2pFVSxRQUFRLEVBQUUsU0FBQ2xCLENBQUM7MkNBQUtELG9CQUFvQixDQUFDQyxDQUFDLENBQUM7aUNBQUE7Ozs7O3FDQUN2QzswQ0FDRiw4REFBQ21CLFFBQU07Z0NBQ05OLElBQUksRUFBQyxXQUFXO2dDQUNoQk8sSUFBSSxFQUFDLFFBQVE7Z0NBQ2JaLFNBQVMsRUFBQywyRkFBMkY7MENBQ3JHLE1BRUQ7Ozs7O3FDQUFTOzs7Ozs7NkJBQ0g7Ozs7OztxQkFDRjs7Ozs7O2FBQ0QsQ0FDTDtDQUNGO0dBcEdLN0IsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBc0diLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0Qm94LnRzeD81YWI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBsYXllckxpc3QgZnJvbSBcIi4vUGxheWVyTGlzdFwiO1xyXG5pbXBvcnQgc29ja2V0IGZyb20gXCIuL1NvY2tldFwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuXHRyb29tQ29kZTogc3RyaW5nIHwgc3RyaW5nW107XHJcblx0dXNlck5hbWU6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG59XHJcblxyXG5jb25zdCBDaGF0Qm94OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyByb29tQ29kZSwgdXNlck5hbWUgfSkgPT4ge1xyXG5cdGNvbnN0IFt1c2VyTGlzdCwgc2V0VXNlckxpc3RdID0gdXNlU3RhdGU8b2JqZWN0W10+KFtdKTtcclxuXHRjb25zdCBbdXNlclR1cm4sIHNldFVzZXJUdXJuXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcclxuXHRjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cdGNvbnN0IFttZXNzYWdlQm94ZXMsIHNldE1lc3NhZ2VCb3hlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG5cdGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldE1lc3NhZ2VCb3hlcygocHJldlN0YXRlOiBhbnkpID0+IFtcclxuXHRcdFx0Li4ucHJldlN0YXRlLFxyXG5cdFx0XHRgUm9vbSBDb2RlOiBbICR7cm9vbUNvZGV9IF1gLFxyXG5cdFx0XSk7XHJcblx0XHRzb2NrZXQuZW1pdChcImpvaW5cIiwgcm9vbUNvZGUsIHVzZXJOYW1lKTtcclxuXHRcdHNvY2tldC5vbihcImNvbm5lY3RcIiwgKCkgPT4ge30pO1xyXG5cdFx0c29ja2V0Lm9uKFwiam9pblwiLCAodXNlcjogc3RyaW5nLCBsaXN0T2ZVc2Vyczogb2JqZWN0W10pID0+IHtcclxuXHRcdFx0c2V0TWVzc2FnZUJveGVzKChwcmV2U3RhdGU6IHN0cmluZ1tdKSA9PiBbXHJcblx0XHRcdFx0Li4ucHJldlN0YXRlLFxyXG5cdFx0XHRcdGBVc2VyICR7dXNlcn0gaGFzIGpvaW5lZCB0aGUgZ2FtZS5gLFxyXG5cdFx0XHRdKTtcclxuXHRcdFx0c2V0VXNlckxpc3QobGlzdE9mVXNlcnMpO1xyXG5cdFx0fSk7XHJcblx0XHRzb2NrZXQub24oXCJkaXNjb25uZWN0XCIsICgpID0+IHtcclxuXHRcdFx0c29ja2V0LmVtaXQoXCJsZWF2ZVwiLCB1c2VyTGlzdCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRzb2NrZXQub24oXCJsZWF2ZVwiLCAodXNlcjogc3RyaW5nLCBsaXN0T2ZVc2Vyczogb2JqZWN0W10pID0+IHtcclxuXHRcdFx0c2V0TWVzc2FnZUJveGVzKChwcmV2U3RhdGU6IGFueSkgPT4gW1xyXG5cdFx0XHRcdC4uLnByZXZTdGF0ZSxcclxuXHRcdFx0XHRgVXNlciAke3VzZXJ9IGhhcyBkaXNjb25uZWN0LmAsXHJcblx0XHRcdF0pO1xyXG5cdFx0XHRzZXRVc2VyTGlzdChsaXN0T2ZVc2Vycyk7XHJcblx0XHR9KTtcclxuXHRcdHNvY2tldC5vbihcIm1lc3NhZ2VcIiwgKG1zZykgPT4ge1xyXG5cdFx0XHRzZXRNZXNzYWdlQm94ZXMoKHByZXZTdGF0ZSkgPT4gWy4uLnByZXZTdGF0ZSwgbXNnXSk7XHJcblx0XHR9KTtcclxuXHRcdHNvY2tldC5vbihcInR1cm5cIiwgKHVzZXJJZDogc3RyaW5nKSA9PiB7XHJcblx0XHRcdHNldFVzZXJUdXJuKHVzZXJJZCk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdHNvY2tldC5vZmYoXCJjb25uZWN0XCIpO1xyXG5cdFx0XHRzb2NrZXQub2ZmKFwiam9pblwiKTtcclxuXHRcdFx0c29ja2V0Lm9mZihcImxlYXZlXCIpO1xyXG5cdFx0XHRzb2NrZXQub2ZmKFwibWVzc2FnZVwiKTtcclxuXHRcdFx0c29ja2V0Lm9mZihcInR1cm5cIik7XHJcblx0XHRcdHNvY2tldC5vZmYoXCJkaXNjb25uZWN0XCIpO1xyXG5cdFx0fTtcclxuXHR9LCBbXSk7XHJcblx0Y29uc3QgY2hhbmdlTWVzc2FnZUhhbmRsZXIgPSAoZTogYW55KSA9PiB7XHJcblx0XHRzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKTtcclxuXHR9O1xyXG5cdGNvbnN0IHNlbmRNZXNzYWdlID0gKGU6IGFueSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IG5ld01lc3NhZ2UgPSBgJHt1c2VyTmFtZX06ICR7bWVzc2FnZX1gO1xyXG5cdFx0c29ja2V0LmVtaXQoXCJtZXNzYWdlXCIsIG5ld01lc3NhZ2UpO1xyXG5cdFx0c2V0TWVzc2FnZUJveGVzKChwcmV2U3RhdGUpID0+IFsuLi5wcmV2U3RhdGUsIG5ld01lc3NhZ2VdKTtcclxuXHRcdHJlZi5jdXJyZW50IS52YWx1ZSA9IFwiXCI7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAteS0xMCBzbTp3LWZ1bGwgbWQ6dy0xLzQgc206aC00LzUgaC0zLzQgXCI+XHJcblx0XHRcdDxQbGF5ZXJMaXN0IHVzZXJMaXN0PXt1c2VyTGlzdH0gdXNlclR1cm49e3VzZXJUdXJufSAvPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTQvNSBiZy1uZXV0cmFsLTgwMCByb3VuZGVkLTJ4bCBmbGV4XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTQgbS00IHctZnVsbCBoLTUvNiByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtY29sLXJldmVyc2UganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCBvdmVyZmxvdy15LXNjcm9sbCBicmVhay1hbGwgb3ZlcmZsb3ctd3JhcCBiZy1zdG9uZS05MDBcIj5cclxuXHRcdFx0XHRcdHttZXNzYWdlQm94ZXNcclxuXHRcdFx0XHRcdFx0LnNsaWNlKDApXHJcblx0XHRcdFx0XHRcdC5yZXZlcnNlKClcclxuXHRcdFx0XHRcdFx0Lm1hcCgobXNnLCBrZXkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2tleX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicC0yIG10LTYgYmctc3RvbmUtODAwIHRleHQtc3RvbmUtNTAgcm91bmRlZC0yeGxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bXNnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxmb3JtXHJcblx0XHRcdFx0XHRpZD1cImNoYXRJbnB1dFwiXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJhYnNvbHV0ZSBtYi00IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBzZWxmLWVuZFwiXHJcblx0XHRcdFx0XHRvblN1Ym1pdD17KGUpID0+IHNlbmRNZXNzYWdlKGUpfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRyZWY9e3JlZn1cclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbnRlciBhIG1lc3NhZ2UuLi5cIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwLTIgcGItNiByb3VuZGVkLTJ4bCB3LTMvNCBiZy1zdG9uZS05MDAgdGV4dC1zdG9uZS01MFwiXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlTWVzc2FnZUhhbmRsZXIoZSl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRmb3JtPVwiY2hhdElucHV0XCJcclxuXHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm14LTIgcC00IHJvdW5kZWQtMnhsIGJnLWVtZXJhbGQtNjAwIGhvdmVyOmJnLWVtZXJhbGQtNDAwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0U2VuZFxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0Qm94O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlBsYXllckxpc3QiLCJzb2NrZXQiLCJDaGF0Qm94Iiwicm9vbUNvZGUiLCJ1c2VyTmFtZSIsInVzZXJMaXN0Iiwic2V0VXNlckxpc3QiLCJ1c2VyVHVybiIsInNldFVzZXJUdXJuIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlQm94ZXMiLCJzZXRNZXNzYWdlQm94ZXMiLCJyZWYiLCJwcmV2U3RhdGUiLCJlbWl0Iiwib24iLCJ1c2VyIiwibGlzdE9mVXNlcnMiLCJtc2ciLCJ1c2VySWQiLCJvZmYiLCJjaGFuZ2VNZXNzYWdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmRNZXNzYWdlIiwicHJldmVudERlZmF1bHQiLCJuZXdNZXNzYWdlIiwiY3VycmVudCIsImRpdiIsImNsYXNzTmFtZSIsInNsaWNlIiwicmV2ZXJzZSIsIm1hcCIsImtleSIsImZvcm0iLCJpZCIsIm9uU3VibWl0IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ChatBox.tsx\n"));

/***/ })

});