webpackHotUpdate("main",{

/***/ "./src/shared/LoadFile/LoadFile.tsx":
/*!******************************************!*\
  !*** ./src/shared/LoadFile/LoadFile.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.LoadFile = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar loadfile_css_1 = __importDefault(__webpack_require__(/*! ./loadfile.css */ \"./src/shared/LoadFile/loadfile.css\"));\r\nfunction LoadFile() {\r\n    function Component(_a) {\r\n        var ShowS = _a.ShowS;\r\n        ShowS;\r\n        return (react_1.default.createElement(\"input\", { id: \"input\", type: \"file\", multiple: true, name: \"files[]\", accept: \"image\", onChange: function (e) { return upload(e); } }, ShowS = function (e) { return upload(e); }));\r\n    }\r\n    return (react_1.default.createElement(\"form\", { className: loadfile_css_1.default.uploadForm },\r\n        react_1.default.createElement(\"fieldset\", null,\r\n            react_1.default.createElement(\"legend\", null, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u0435 \\u0412\\u0430\\u0448\\u0438 \\u0444\\u0430\\u0439\\u043B\\u044B\"),\r\n            react_1.default.createElement(Component, { ShowS: upload(e) }),\r\n            react_1.default.createElement(\"div\", null))));\r\n}\r\nexports.LoadFile = LoadFile;\r\nfunction upload(e) {\r\n    var _a;\r\n    var filesFromInput = e.target.files;\r\n    if (filesFromInput != undefined) {\r\n        var filesArr = [];\r\n        for (var i = 0; i < (filesFromInput === null || filesFromInput === void 0 ? void 0 : filesFromInput.length); i++) {\r\n            console.log(filesFromInput === null || filesFromInput === void 0 ? void 0 : filesFromInput.item(i));\r\n            var BLOB = new Blob([\"\" + (filesFromInput === null || filesFromInput === void 0 ? void 0 : filesFromInput.item(i))], { type: \"\" + ((_a = filesFromInput === null || filesFromInput === void 0 ? void 0 : filesFromInput.item(i)) === null || _a === void 0 ? void 0 : _a.type) });\r\n            filesArr.push(BLOB);\r\n        }\r\n        return filesArr;\r\n    }\r\n    return [];\r\n}\r\n\n\n//# sourceURL=webpack:///./src/shared/LoadFile/LoadFile.tsx?");

/***/ }),

/***/ "./src/shared/LoadFile/index.ts":
/*!**************************************!*\
  !*** ./src/shared/LoadFile/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./LoadFile */ \"./src/shared/LoadFile/LoadFile.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/LoadFile/index.ts?");

/***/ })

})