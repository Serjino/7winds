webpackHotUpdate("main",{

/***/ "./src/shared/LoadFile/LoadFile.tsx":
/*!******************************************!*\
  !*** ./src/shared/LoadFile/LoadFile.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.LoadFile = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar loadfile_css_1 = __importDefault(__webpack_require__(/*! ./loadfile.css */ \"./src/shared/LoadFile/loadfile.css\"));\r\nfunction LoadFile() {\r\n    function Component(_a) {\r\n        var CreateFileList = _a.CreateFileList;\r\n        var filesArr = [];\r\n        function fileListToBlobArr(e) {\r\n            var _a;\r\n            var filesFromInput = e.target.files;\r\n            if (filesFromInput != undefined) {\r\n                for (var i = 0; i < (filesFromInput === null || filesFromInput === void 0 ? void 0 : filesFromInput.length); i++) {\r\n                    console.log(filesFromInput === null || filesFromInput === void 0 ? void 0 : filesFromInput.item(i));\r\n                    var BLOB = new Blob([\"\" + (filesFromInput === null || filesFromInput === void 0 ? void 0 : filesFromInput.item(i))], { type: \"\" + ((_a = filesFromInput === null || filesFromInput === void 0 ? void 0 : filesFromInput.item(i)) === null || _a === void 0 ? void 0 : _a.type) });\r\n                    filesArr.push(BLOB);\r\n                }\r\n                CreateFileList(filesArr);\r\n            }\r\n            return [];\r\n        }\r\n        return (react_1.default.createElement(\"div\", { className: loadfile_css_1.default.inputWrapper },\r\n            react_1.default.createElement(\"input\", { className: loadfile_css_1.default.chooseFileBtn, id: \"input\", type: \"file\", multiple: true, name: \"files[]\", accept: \"image\", onChange: function (e) { return fileListToBlobArr(e); } }),\r\n            react_1.default.createElement(\"span\", { className: loadfile_css_1.default.chooseFileText },\r\n                react_1.default.createElement(\"svg\", { className: loadfile_css_1.default.downloadIcon, width: \"21\", height: \"20\", viewBox: \"0 0 31 30\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M15.5 24.1304L24.1603 9.13043L6.83975 9.13043L15.5 24.1304ZM14 6.55671e-08L14 10.6304L17 10.6304L17 -6.55671e-08L14 6.55671e-08Z\", fill: \"white\" }),\r\n                    react_1.default.createElement(\"line\", { x1: \"2\", y1: \"20.2173\", x2: \"2\", y2: \"29.9999\", stroke: \"white\", strokeWidth: \"4\" }),\r\n                    react_1.default.createElement(\"line\", { x1: \"29\", y1: \"30\", x2: \"29\", y2: \"20.2174\", stroke: \"white\", strokeWidth: \"4\" }),\r\n                    react_1.default.createElement(\"line\", { y1: \"28\", x2: \"31\", y2: \"28\", stroke: \"white\", strokeWidth: \"4\" })),\r\n                \"\\u0412\\u044B\\u0431\\u0435\\u0440\\u0435\\u0442\\u0435 \\u0444\\u0430\\u0439\\u043B\")));\r\n    }\r\n    return (react_1.default.createElement(\"form\", { className: loadfile_css_1.default.uploadForm },\r\n        react_1.default.createElement(\"fieldset\", { className: loadfile_css_1.default.fieldSet },\r\n            react_1.default.createElement(\"legend\", { className: loadfile_css_1.default.legend }),\r\n            react_1.default.createElement(Component, { CreateFileList: function (v) { console.log(v); } }),\r\n            react_1.default.createElement(\"div\", null))));\r\n}\r\nexports.LoadFile = LoadFile;\r\n\n\n//# sourceURL=webpack:///./src/shared/LoadFile/LoadFile.tsx?");

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