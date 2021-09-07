webpackHotUpdate("main",{

/***/ "./src/shared/Table/Table.tsx":
/*!************************************!*\
  !*** ./src/shared/Table/Table.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Table = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction Table() {\r\n    function getRndData() {\r\n        function genNum() {\r\n            return Math.floor(Math.random() * (30 + 1));\r\n        }\r\n        var arr = [];\r\n        for (; arr.length < 5;) {\r\n            var num = genNum();\r\n            if (arr.includes(num))\r\n                continue;\r\n            arr.push(num);\r\n        }\r\n        var value = arr.map(function (num) { return ({ day: num, value: num + 'i' }); });\r\n        console.log(value);\r\n        return value;\r\n    }\r\n    var DATA = [\r\n        { day: 4, value: '4i' },\r\n        { day: 30, value: '30i' },\r\n        { day: 18, value: '18i' },\r\n        { day: 19, value: '19i' },\r\n        { day: 28, value: '28i' }\r\n    ];\r\n    function sortedDayList(someData) {\r\n        var daysFromFunc = someData.map(function (el) { return el.day; });\r\n        var daysOutputArr = [];\r\n        for (var i = 0; i <= 30; i++) {\r\n            var newDate = {\r\n                day: i,\r\n                value: null,\r\n            };\r\n            for (var ii = 0; ii < daysFromFunc.length; ii++) {\r\n                if (daysFromFunc[ii] == i) {\r\n                    newDate.value = \"\" + (i + 'i');\r\n                }\r\n            }\r\n            daysOutputArr.push(newDate);\r\n        }\r\n        console.log(daysOutputArr);\r\n    }\r\n    sortedDayList(getRndData());\r\n    var array = [\r\n        { state: 'created', count: 834 },\r\n        { state: 'deleted', count: 400 },\r\n        { state: 'updated', count: 24 }\r\n    ];\r\n    var outArr = array.map(function (el) {\r\n        var newKeyValue = Object.values(el);\r\n        console.log(newKeyValue);\r\n        var keyValue = {\r\n            a: newKeyValue[1]\r\n        };\r\n        console.log(a);\r\n    });\r\n    console.log(outArr);\r\n    return (react_1.default.createElement(\"div\", null));\r\n}\r\nexports.Table = Table;\r\n\n\n//# sourceURL=webpack:///./src/shared/Table/Table.tsx?");

/***/ }),

/***/ "./src/shared/Table/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Table/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Table */ \"./src/shared/Table/Table.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Table/index.ts?");

/***/ })

})