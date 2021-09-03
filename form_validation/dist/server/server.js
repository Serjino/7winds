/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>Reddit</title>\\n</head>\\n<body>\\n    <div id=\\\"reactRoot\\\">\" + content + \"</div>\\n    <script src=\\\"/static/client.js\\\"></script>\\n</body>\\n</html>\\n\"; };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar App_1 = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar app = express_1.default();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/', function (req, res) {\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Server started on http://localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/App.tsx":
/*!****************************!*\
  !*** ./src/shared/App.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/shared/main.global.css\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar app_css_1 = __importDefault(__webpack_require__(/*! ./app.css */ \"./src/shared/app.css\"));\r\nvar validityRules = {\r\n    name: {\r\n        regexp: /^[A-Za-zА-Яа-яёЁ]+$/i,\r\n        notice: 'Только русские/английские буквы, без пробелов',\r\n    },\r\n    email: {\r\n        regexp: /^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)$/,\r\n        notice: 'Введите email в формате xxxx@xxxx.xx',\r\n    },\r\n    tel: {\r\n        regexp: /^[0-9]{11}$/,\r\n        notice: 'Введите телефон в формате 89991234567',\r\n    },\r\n    date: {\r\n        regexp: /^[0-9]{4}\\-[0-9]{2}\\-[0-9]{2}$/,\r\n        notice: 'Введите дату в формате ДД.ММ.ГГГГ',\r\n    },\r\n    checkbox: {\r\n        regexp: /[]/,\r\n        notice: 'Вы должны согласиться на обработку персональных данных',\r\n    },\r\n};\r\nfunction submitForm(e) {\r\n    var form = e.target;\r\n    var notices = form.getElementsByTagName('span');\r\n    var inputs = form.getElementsByTagName('input');\r\n    var checkboxInput;\r\n    var checkboxNotice;\r\n    for (var i = 0; i < inputs.length; i++) {\r\n        if (inputs[i].name == \"checkbox\") {\r\n            checkboxInput = inputs[i];\r\n            var checkboxLabel = checkboxInput.closest('label');\r\n            checkboxNotice = checkboxLabel === null || checkboxLabel === void 0 ? void 0 : checkboxLabel.getElementsByTagName('span')[0];\r\n        }\r\n    }\r\n    for (var i = 0; i < notices.length; i++) {\r\n        if (notices[i].textContent !== \"\" || inputs[i].value == \"\" || !(checkboxInput === null || checkboxInput === void 0 ? void 0 : checkboxInput.checked)) {\r\n            e.preventDefault();\r\n            if (inputs[i].value == \"\") {\r\n                notices[i].textContent = \"Заполните пустое поле\";\r\n            }\r\n            if (!(checkboxInput === null || checkboxInput === void 0 ? void 0 : checkboxInput.checked)) {\r\n                if (checkboxNotice != undefined) {\r\n                    checkboxNotice.textContent = \"\" + validityRules.checkbox.notice;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\nfunction checkInputValidity(e) {\r\n    var input = e.target;\r\n    var inputName = input.name;\r\n    var label = input.closest('label');\r\n    console.log(inputName);\r\n    if (inputName === \"checkbox\" && !input.checked) {\r\n        if (label != null) {\r\n            label.getElementsByTagName('span')[0].textContent = \"\" + validityRules[inputName].notice;\r\n        }\r\n        return;\r\n    }\r\n    if (inputName === \"checkbox\" && input.checked) {\r\n        if (label != null) {\r\n            label.getElementsByTagName('span')[0].textContent = \"\";\r\n        }\r\n        return;\r\n    }\r\n    else if (input.value.match(validityRules[inputName].regexp) != null) {\r\n        console.log('Correct');\r\n        if (label != null) {\r\n            label.getElementsByTagName('span')[0].textContent = \"\";\r\n        }\r\n    }\r\n    else {\r\n        console.log('Wrong');\r\n        if (label != null) {\r\n            label.getElementsByTagName('span')[0].textContent = \"\" + validityRules[inputName].notice;\r\n        }\r\n    }\r\n}\r\nfunction AppComponent() {\r\n    return (react_1.default.createElement(\"form\", { className: app_css_1.default.form, action: \"https://jsonplaceholder.typicode.com/posts\", method: \"POST\", onSubmit: function (e) { return submitForm(e); } },\r\n        react_1.default.createElement(\"fieldset\", null,\r\n            react_1.default.createElement(\"legend\", null, \"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u0412\\u0430\\u0448\\u0438 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0435\"),\r\n            react_1.default.createElement(\"label\", { className: app_css_1.default.label },\r\n                \"\\u0418\\u043C\\u044F\",\r\n                react_1.default.createElement(\"input\", { className: app_css_1.default.input, name: \"name\", type: \"text\", onChange: function (e) { checkInputValidity(e); }, autoComplete: \"off\" }),\r\n                react_1.default.createElement(\"span\", { className: app_css_1.default.validityNotice })),\r\n            react_1.default.createElement(\"label\", { className: app_css_1.default.label },\r\n                \"Email\",\r\n                react_1.default.createElement(\"input\", { className: app_css_1.default.input, name: \"email\", type: \"email\", onChange: function (e) { checkInputValidity(e); }, autoComplete: \"off\" }),\r\n                react_1.default.createElement(\"span\", { className: app_css_1.default.validityNotice })),\r\n            react_1.default.createElement(\"label\", { className: app_css_1.default.label },\r\n                \"\\u0422\\u0435\\u043B\\u0435\\u0444\\u043E\\u043D\",\r\n                react_1.default.createElement(\"input\", { className: app_css_1.default.input, name: \"tel\", type: \"tel\", onChange: function (e) { checkInputValidity(e); }, autoComplete: \"off\" }),\r\n                react_1.default.createElement(\"span\", { className: app_css_1.default.validityNotice })),\r\n            react_1.default.createElement(\"label\", { className: app_css_1.default.label },\r\n                \"\\u0414\\u0430\\u0442\\u0430\",\r\n                react_1.default.createElement(\"input\", { className: app_css_1.default.input, name: \"date\", type: \"date\", onChange: function (e) { checkInputValidity(e); }, autoComplete: \"off\" }),\r\n                react_1.default.createElement(\"span\", { className: app_css_1.default.validityNotice })),\r\n            react_1.default.createElement(\"label\", { className: [app_css_1.default.label, app_css_1.default.labelCheckbox].join(' ') },\r\n                react_1.default.createElement(\"p\", { className: app_css_1.default.agrText }, \"\\u042F \\u0441\\u043E\\u0433\\u043B\\u0430\\u0441\\u0435\\u043D \\u043D\\u0430 \\u043E\\u0431\\u0440\\u0430\\u0431\\u043E\\u0442\\u043A\\u0443 \\u043F\\u0435\\u0440\\u0441\\u043E\\u043D\\u0430\\u043B\\u044C\\u043D\\u044B\\u0445 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0445\"),\r\n                react_1.default.createElement(\"input\", { className: [app_css_1.default.input, app_css_1.default.inputCheckbox].join(' '), name: \"checkbox\", type: \"checkbox\", onChange: function (e) { checkInputValidity(e); } }),\r\n                react_1.default.createElement(\"span\", { className: [app_css_1.default.validityNotice, app_css_1.default.validityNoticeCkeckbox].join(' ') })),\r\n            react_1.default.createElement(\"input\", { className: app_css_1.default.submitBtn, type: \"submit\", value: \"\\u041E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C\" }))));\r\n}\r\nexports.App = root_1.hot(AppComponent);\r\n\n\n//# sourceURL=webpack:///./src/shared/App.tsx?");

/***/ }),

/***/ "./src/shared/app.css":
/*!****************************!*\
  !*** ./src/shared/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"app__form--32cjja\",\n\t\"validityNotice\": \"app__validityNotice--zTBAHj\",\n\t\"label\": \"app__label--uFVn9s\",\n\t\"labelCheckbox\": \"app__labelCheckbox--3vXL8y\",\n\t\"input\": \"app__input--3ryR82\",\n\t\"agrText\": \"app__agrText--1VMq9f\",\n\t\"submitBtn\": \"app__submitBtn--2DGDIZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/app.css?");

/***/ }),

/***/ "./src/shared/main.global.css":
/*!************************************!*\
  !*** ./src/shared/main.global.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \"body {\\n    padding: 0;\\n    margin: 0;\\n    font-size: 14px;\\n    line-height: 16px;\\n    font-family: 'Roboto', serif;\\n}\\n\\n* {\\n    box-sizing: border-box;\\n    -webkit-font-smoothing: antialiased;\\n    -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n    margin: 0;\\n    padding: 0;\\n    list-style: none;\\n}\\n\\na {\\n    text-decoration: none;\\n}\\n\\nh2 {\\n    margin: 0px;\\n    padding: 0px;\\n}\\n\\nbutton {\\n    outline: none;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/main.global.css?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ })

/******/ });