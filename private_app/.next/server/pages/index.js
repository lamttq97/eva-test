/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris_build_esm_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris/build/esm/styles.css */ \"./node_modules/@shopify/polaris/build/esm/styles.css\");\n/* harmony import */ var _shopify_polaris_build_esm_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_build_esm_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Index = ()=>{\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [rows, setRow] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const toggleActive = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>setActive((active)=>!active), []);\n    const addThemeFile = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{\n        fetch(`/v1/theme`, {\n            method: \"POST\"\n        }).then((res)=>res.json()).then((resp)=>{\n            toggleActive();\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetch(`/v1/comment`).then((res)=>res.json()).then((resp)=>{\n            const newA = resp.map((data)=>{\n                return [\n                    data.userName,\n                    data.product.replace(/-/g, \" \").charAt(0).toUpperCase() + data.product.replace(/-/g, \" \").slice(1),\n                    data.content\n                ];\n            });\n            setRow(newA);\n        });\n    }, []);\n    const toastMarkup = active ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__.Toast, {\n        content: \"Message sent\",\n        onDismiss: toggleActive\n    }, void 0, false, {\n        fileName: \"D:\\\\code\\\\thomas\\\\eva-test\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 50,\n        columnNumber: 7\n    }, undefined) : null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__.Frame, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__.Page, {\n                title: \"Comments\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__.Layout, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__.Layout.Section, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    primary: true,\n                                    onClick: addThemeFile,\n                                    children: \"Import section to Main Theme\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\code\\\\thomas\\\\eva-test\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 29\n                                }, undefined),\n                                toastMarkup\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\code\\\\thomas\\\\eva-test\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__.Layout.Section, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__.DataTable, {\n                                columnContentTypes: [\n                                    \"text\",\n                                    \"text\",\n                                    \"text\"\n                                ],\n                                headings: [\n                                    \"User Name\",\n                                    \"Product\",\n                                    \"Comment\"\n                                ],\n                                rows: rows\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\thomas\\\\eva-test\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\code\\\\thomas\\\\eva-test\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\code\\\\thomas\\\\eva-test\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\code\\\\thomas\\\\eva-test\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 56,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\code\\\\thomas\\\\eva-test\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 55,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBTzBCO0FBQ3FCO0FBQ2lCO0FBVWhFLE1BQU1VLFFBQVEsSUFBTTtJQUVoQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQVUsS0FBSztJQUNuRCxNQUFNLENBQUNJLE1BQU1DLE9BQU8sR0FBR0wsK0NBQVFBLENBQWlCLEVBQUU7SUFFbEQsTUFBTU0sZUFBZVIsa0RBQVdBLENBQUMsSUFBTUssVUFBVSxDQUFDRCxTQUFXLENBQUNBLFNBQVMsRUFBRTtJQUV6RSxNQUFNSyxlQUFlVCxrREFBV0EsQ0FBQyxJQUFNO1FBQ25DVSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDZkMsUUFBUTtRQUNaLEdBQUdDLElBQUksQ0FBQ0MsQ0FBQUEsTUFBUUEsSUFBSUMsSUFBSSxJQUFJRixJQUFJLENBQUNHLENBQUFBLE9BQVE7WUFDckNQO1FBQ0o7SUFDSixHQUFFLEVBQUU7SUFFSlAsZ0RBQVNBLENBQUMsSUFBTTtRQUNaUyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUVFLElBQUksQ0FBQ0MsQ0FBQUEsTUFBUUEsSUFBSUMsSUFBSSxJQUFJRixJQUFJLENBQUUsQ0FBQ0csT0FBcUI7WUFDdEUsTUFBTUMsT0FBT0QsS0FBS0UsR0FBRyxDQUFDLENBQUNDLE9BQW1DO2dCQUN0RCxPQUFPO29CQUNIQSxLQUFLQyxRQUFRO29CQUNiRCxLQUFLRSxPQUFPLENBQUNDLE9BQU8sQ0FBQyxNQUFNLEtBQUtDLE1BQU0sQ0FBQyxHQUFHQyxXQUFXLEtBQUtMLEtBQUtFLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sS0FBS0csS0FBSyxDQUFDO29CQUNoR04sS0FBS08sT0FBTztpQkFDZjtZQUNMO1lBQ0FsQixPQUFPUztRQUNYO0lBQ0osR0FBRyxFQUFFO0lBR0wsTUFBTVUsY0FBY3RCLHVCQUNsQiw4REFBQ04sbURBQUtBO1FBQUMyQixTQUFRO1FBQWVFLFdBQVduQjs7Ozs7b0JBQ3ZDLElBQUk7SUFFUixxQkFDSTtrQkFDSSw0RUFBQ1osbURBQUtBO3NCQUNGLDRFQUFDSCxrREFBSUE7Z0JBQUNtQyxPQUFNOzBCQUNSLDRFQUFDbEMsb0RBQU1BOztzQ0FDSCw4REFBQ0EsNERBQWM7OzhDQUNYLDhEQUFDQyxvREFBTUE7b0NBQUNtQyxPQUFPO29DQUFDQyxTQUFTdEI7OENBQWM7Ozs7OztnQ0FDdENpQjs7Ozs7OztzQ0FFTCw4REFBQ2hDLDREQUFjO3NDQUNYLDRFQUFDRyx1REFBU0E7Z0NBQ05tQyxvQkFBb0I7b0NBQ2hCO29DQUNBO29DQUNBO2lDQUNIO2dDQUNEQyxVQUFVO29DQUNOO29DQUNBO29DQUNBO2lDQUNIO2dDQUNEM0IsTUFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdEM7QUFJQSxpRUFBZUgsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dob2xlc2FsZS1iYWxhbmNlLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxyXG4gICAgUGFnZSxcclxuICAgIExheW91dCxcclxuICAgIEJ1dHRvbixcclxuICAgIEZyYW1lLFxyXG4gICAgRGF0YVRhYmxlLFxyXG4gICAgVG9hc3RcclxufSBmcm9tIFwiQHNob3BpZnkvcG9sYXJpc1wiO1xyXG5pbXBvcnQgJ0BzaG9waWZ5L3BvbGFyaXMvYnVpbGQvZXNtL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIENvbW1lbnQge1xyXG4gICAgcHJvZHVjdDogc3RyaW5nO1xyXG4gICAgdXNlck5hbWU6IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxufVxyXG50eXBlIFRhYmxlRGF0YSA9IHN0cmluZyB8IG51bWJlciB8IFJlYWN0LlJlYWN0Tm9kZVxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlPEJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtyb3dzLCBzZXRSb3ddID0gdXNlU3RhdGU8IFRhYmxlRGF0YVtdW10+KFtdKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVBY3RpdmUgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRBY3RpdmUoKGFjdGl2ZSkgPT4gIWFjdGl2ZSksIFtdKTtcclxuXHJcbiAgICBjb25zdCBhZGRUaGVtZUZpbGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYC92MS90aGVtZWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4gIHJlcy5qc29uKCkpLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZUFjdGl2ZSgpXHJcbiAgICAgICAgfSlcclxuICAgIH0sW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChgL3YxL2NvbW1lbnRgKS50aGVuKHJlcyA9PiAgcmVzLmpzb24oKSkudGhlbiggKHJlc3AgOiBDb21tZW50W10pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3QSA9IHJlc3AubWFwKChkYXRhIDogQ29tbWVudCkgOiBBcnJheTxzdHJpbmc+ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS51c2VyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnByb2R1Y3QucmVwbGFjZSgvLS9nLCAnICcpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZGF0YS5wcm9kdWN0LnJlcGxhY2UoLy0vZywgJyAnKS5zbGljZSgxKSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvbnRlbnRcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc2V0Um93KG5ld0EpXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICBcclxuICAgIGNvbnN0IHRvYXN0TWFya3VwID0gYWN0aXZlID8gKFxyXG4gICAgICA8VG9hc3QgY29udGVudD1cIk1lc3NhZ2Ugc2VudFwiIG9uRGlzbWlzcz17dG9nZ2xlQWN0aXZlfSAvPlxyXG4gICAgKSA6IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8RnJhbWUgPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2UgdGl0bGU9XCJDb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBvbkNsaWNrPXthZGRUaGVtZUZpbGV9PkltcG9ydCBzZWN0aW9uIHRvIE1haW4gVGhlbWU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2FzdE1hcmt1cH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5Db250ZW50VHlwZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmdzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdVc2VyIE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUHJvZHVjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb21tZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9e3Jvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgICA8L0ZyYW1lPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwibmFtZXMiOlsiUGFnZSIsIkxheW91dCIsIkJ1dHRvbiIsIkZyYW1lIiwiRGF0YVRhYmxlIiwiVG9hc3QiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbmRleCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInJvd3MiLCJzZXRSb3ciLCJ0b2dnbGVBY3RpdmUiLCJhZGRUaGVtZUZpbGUiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzcCIsIm5ld0EiLCJtYXAiLCJkYXRhIiwidXNlck5hbWUiLCJwcm9kdWN0IiwicmVwbGFjZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjb250ZW50IiwidG9hc3RNYXJrdXAiLCJvbkRpc21pc3MiLCJ0aXRsZSIsIlNlY3Rpb24iLCJwcmltYXJ5Iiwib25DbGljayIsImNvbHVtbkNvbnRlbnRUeXBlcyIsImhlYWRpbmdzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./node_modules/@shopify/polaris/build/esm/styles.css":
/*!************************************************************!*\
  !*** ./node_modules/@shopify/polaris/build/esm/styles.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@shopify/polaris");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();