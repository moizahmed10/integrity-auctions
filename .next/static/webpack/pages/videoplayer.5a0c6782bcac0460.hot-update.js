"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/videoplayer",{

/***/ "./components/PageRenderer.js":
/*!************************************!*\
  !*** ./components/PageRenderer.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PageRenderer = (param)=>{\n    let { sections } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            border: \"1px solid white\",\n            borderRadius: \"8px\",\n            background: \"white\",\n            minWidth: \"800px\",\n            padding: \"40px\"\n        },\n        children: sections.map((section, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            fontSize: section.headingFontSize || 24,\n                            color: \"black\"\n                        },\n                        children: section.heading\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\moiza\\\\Downloads\\\\Integrity-auctions\\\\Integrity-auctions\\\\components\\\\PageRenderer.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: section.descriptionFontSize || 16,\n                            color: \"black\"\n                        },\n                        children: section.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\moiza\\\\Downloads\\\\Integrity-auctions\\\\Integrity-auctions\\\\components\\\\PageRenderer.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\moiza\\\\Downloads\\\\Integrity-auctions\\\\Integrity-auctions\\\\components\\\\PageRenderer.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\moiza\\\\Downloads\\\\Integrity-auctions\\\\Integrity-auctions\\\\components\\\\PageRenderer.js\",\n        lineNumber: 2,\n        columnNumber: 3\n    }, undefined);\n};\n_c = PageRenderer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageRenderer);\nvar _c;\n$RefreshReg$(_c, \"PageRenderer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VSZW5kZXJlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsZUFBZTtRQUFDLEVBQUVDLFFBQVEsRUFBRTt5QkFDaEMsOERBQUNDO1FBQ0NDLE9BQU87WUFDTEMsUUFBUTtZQUNSQyxjQUFjO1lBQ2RDLFlBQVk7WUFDWkMsVUFBVTtZQUNWQyxTQUFTO1FBQ1g7a0JBRUNQLFNBQVNRLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUNUOztrQ0FDQyw4REFBQ1U7d0JBQUdULE9BQU87NEJBQUVVLFVBQVVILFFBQVFJLGVBQWUsSUFBSTs0QkFBSUMsT0FBTzt3QkFBUTtrQ0FDbEVMLFFBQVFNLE9BQU87Ozs7OztrQ0FFbEIsOERBQUNDO3dCQUNDZCxPQUFPOzRCQUNMVSxVQUFVSCxRQUFRUSxtQkFBbUIsSUFBSTs0QkFDekNILE9BQU87d0JBQ1Q7a0NBRUNMLFFBQVFTLFdBQVc7Ozs7Ozs7ZUFWZFI7Ozs7Ozs7Ozs7O0tBWFZYO0FBNEJOLGlFQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXG1vaXphXFxEb3dubG9hZHNcXEludGVncml0eS1hdWN0aW9uc1xcSW50ZWdyaXR5LWF1Y3Rpb25zXFxjb21wb25lbnRzXFxQYWdlUmVuZGVyZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUGFnZVJlbmRlcmVyID0gKHsgc2VjdGlvbnMgfSkgPT4gKFxuICA8ZGl2XG4gICAgc3R5bGU9e3tcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgd2hpdGVcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcbiAgICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcbiAgICAgIG1pbldpZHRoOiBcIjgwMHB4XCIsXG4gICAgICBwYWRkaW5nOiBcIjQwcHhcIixcbiAgICB9fVxuICA+XG4gICAge3NlY3Rpb25zLm1hcCgoc2VjdGlvbiwgaW5kZXgpID0+IChcbiAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgIDxoMSBzdHlsZT17eyBmb250U2l6ZTogc2VjdGlvbi5oZWFkaW5nRm9udFNpemUgfHwgMjQsIGNvbG9yOiBcImJsYWNrXCIgfX0+XG4gICAgICAgICAge3NlY3Rpb24uaGVhZGluZ31cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHBcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6IHNlY3Rpb24uZGVzY3JpcHRpb25Gb250U2l6ZSB8fCAxNixcbiAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtzZWN0aW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApKX1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlUmVuZGVyZXI7XG4iXSwibmFtZXMiOlsiUGFnZVJlbmRlcmVyIiwic2VjdGlvbnMiLCJkaXYiLCJzdHlsZSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJtaW5XaWR0aCIsInBhZGRpbmciLCJtYXAiLCJzZWN0aW9uIiwiaW5kZXgiLCJoMSIsImZvbnRTaXplIiwiaGVhZGluZ0ZvbnRTaXplIiwiY29sb3IiLCJoZWFkaW5nIiwicCIsImRlc2NyaXB0aW9uRm9udFNpemUiLCJkZXNjcmlwdGlvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PageRenderer.js\n"));

/***/ })

});