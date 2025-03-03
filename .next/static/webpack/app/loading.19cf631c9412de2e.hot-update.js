"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/loading",{

/***/ "(app-pages-browser)/./app/loading.tsx":
/*!*************************!*\
  !*** ./app/loading.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Loading)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction Loading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                className: \"w-16 h-16 border-[6px] border-blue-500 border-t-transparent rounded-full\",\n                animate: {\n                    rotate: 360\n                },\n                transition: {\n                    repeat: Infinity,\n                    duration: 1,\n                    ease: \"linear\"\n                }\n            }, void 0, false, {\n                fileName: \"/workspaces/loja-e-lar/app/loading.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.p, {\n                className: \"mt-4 text-lg font-semibold text-gray-700\",\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                transition: {\n                    duration: 0.8,\n                    repeat: Infinity,\n                    repeatType: \"reverse\"\n                },\n                children: \"Carregando...\"\n            }, void 0, false, {\n                fileName: \"/workspaces/loja-e-lar/app/loading.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/loja-e-lar/app/loading.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Loading;\nvar _c;\n$RefreshReg$(_c, \"Loading\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2FkaW5nLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3VDO0FBRXhCLFNBQVNDO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFFYiw4REFBQ0gsaURBQU1BLENBQUNFLEdBQUc7Z0JBQ1RDLFdBQVU7Z0JBQ1ZDLFNBQVM7b0JBQUVDLFFBQVE7Z0JBQUk7Z0JBQ3ZCQyxZQUFZO29CQUFFQyxRQUFRQztvQkFBVUMsVUFBVTtvQkFBR0MsTUFBTTtnQkFBUzs7Ozs7OzBCQUk5RCw4REFBQ1YsaURBQU1BLENBQUNXLENBQUM7Z0JBQ1BSLFdBQVU7Z0JBQ1ZTLFNBQVM7b0JBQUVDLFNBQVM7Z0JBQUU7Z0JBQ3RCVCxTQUFTO29CQUFFUyxTQUFTO2dCQUFFO2dCQUN0QlAsWUFBWTtvQkFBRUcsVUFBVTtvQkFBS0YsUUFBUUM7b0JBQVVNLFlBQVk7Z0JBQVU7MEJBQ3RFOzs7Ozs7Ozs7Ozs7QUFLUDtLQXJCd0JiIiwic291cmNlcyI6WyIvd29ya3NwYWNlcy9sb2phLWUtbGFyL2FwcC9sb2FkaW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctd2hpdGVcIj5cbiAgICAgIHsvKiBBbmltYcOnw6NvIGRvIFNwaW5uZXIgKi99XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgYm9yZGVyLVs2cHhdIGJvcmRlci1ibHVlLTUwMCBib3JkZXItdC10cmFuc3BhcmVudCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICBhbmltYXRlPXt7IHJvdGF0ZTogMzYwIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgcmVwZWF0OiBJbmZpbml0eSwgZHVyYXRpb246IDEsIGVhc2U6IFwibGluZWFyXCIgfX1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiBUZXh0byBhbmltYWRvICovfVxuICAgICAgPG1vdGlvbi5wXG4gICAgICAgIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDBcIlxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCwgcmVwZWF0OiBJbmZpbml0eSwgcmVwZWF0VHlwZTogXCJyZXZlcnNlXCIgfX1cbiAgICAgID5cbiAgICAgICAgQ2FycmVnYW5kby4uLlxuICAgICAgPC9tb3Rpb24ucD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkxvYWRpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJhbmltYXRlIiwicm90YXRlIiwidHJhbnNpdGlvbiIsInJlcGVhdCIsIkluZmluaXR5IiwiZHVyYXRpb24iLCJlYXNlIiwicCIsImluaXRpYWwiLCJvcGFjaXR5IiwicmVwZWF0VHlwZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/loading.tsx\n"));

/***/ })

});