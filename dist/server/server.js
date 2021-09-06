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
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n    var list = []; // return the list of modules as css string\n    list.toString = function toString() {\n        return this.map(function (item) {\n            var content = cssWithMappingToString(item, useSourceMap);\n            if (item[2]) {\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n            }\n            return content;\n        }).join('');\n    }; // import a list of modules into the list\n    // eslint-disable-next-line func-names\n    list.i = function (modules, mediaQuery, dedupe) {\n        if (typeof modules === 'string') {\n            // eslint-disable-next-line no-param-reassign\n            modules = [[null, modules, '']];\n        }\n        var alreadyImportedModules = {};\n        if (dedupe) {\n            for (var i = 0; i < this.length; i++) {\n                // eslint-disable-next-line prefer-destructuring\n                var id = this[i][0];\n                if (id != null) {\n                    alreadyImportedModules[id] = true;\n                }\n            }\n        }\n        for (var _i = 0; _i < modules.length; _i++) {\n            var item = [].concat(modules[_i]);\n            if (dedupe && alreadyImportedModules[item[0]]) {\n                // eslint-disable-next-line no-continue\n                continue;\n            }\n            if (mediaQuery) {\n                if (!item[2]) {\n                    item[2] = mediaQuery;\n                }\n                else {\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n                }\n            }\n            list.push(item);\n        }\n    };\n    return list;\n};\nfunction cssWithMappingToString(item, useSourceMap) {\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n    var cssMapping = item[3];\n    if (!cssMapping) {\n        return content;\n    }\n    if (useSourceMap && typeof btoa === 'function') {\n        var sourceMapping = toComment(cssMapping);\n        var sourceURLs = cssMapping.sources.map(function (source) {\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n        });\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n    }\n    return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    return \"/*# \".concat(data, \" */\");\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nvar indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>Reddit</title>\\n</head>\\n<body>\\n    <div id=\\\"reactRoot\\\">\" + content + \"</div>\\n    <script src=\\\"/static/client.js\\\"></script>\\n</body>\\n</html>\\n\"; };\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar App_1 = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.tsx\");\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nvar app = express_1.default();\napp.use('/static', express_1.default.static('./dist/client'));\napp.get('/', function (req, res) {\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\n});\napp.listen(3000, function () {\n    console.log('Server started on http://localhost:3000');\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/App.tsx":
/*!****************************!*\
  !*** ./src/shared/App.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AppComponent = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./main.global.css */ \"./src/shared/main.global.css\");\n// import { hot } from \"react-hot-loader/root\";\nvar app_css_1 = __importDefault(__webpack_require__(/*! ./app.css */ \"./src/shared/app.css\"));\nvar react_2 = __webpack_require__(/*! react */ \"react\");\nvar validityRules = {\n    name: {\n        regexp: /^[A-Za-zА-Яа-яёЁ]+$/i,\n        notice: 'Только русские/английские буквы, без пробелов',\n    },\n    email: {\n        regexp: /^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)$/,\n        notice: 'Введите email в формате xxxx@xxxx.xx',\n    },\n    tel: {\n        regexp: /^[0-9]{11}$/,\n        notice: 'Введите телефон в формате 89991234567',\n    },\n    date: {\n        regexp: /^[0-9]{4}\\-[0-9]{2}\\-[0-9]{2}$/,\n        notice: 'Введите дату в формате ДД.ММ.ГГГГ',\n    },\n    checkbox: {\n        regexp: /[]/,\n        notice: 'Вы должны согласиться на обработку персональных данных',\n    },\n};\nfunction checkValidityAndSubmit(e) {\n    var form = e.target;\n    var notices = form.getElementsByTagName('span');\n    var inputs = form.getElementsByTagName('input');\n    var checkboxInput;\n    var checkboxNotice;\n    for (var i = 0; i < inputs.length; i++) {\n        if (inputs[i].name == \"checkbox\") {\n            checkboxInput = inputs[i];\n            var checkboxLabel = checkboxInput.closest('label');\n            checkboxNotice = checkboxLabel === null || checkboxLabel === void 0 ? void 0 : checkboxLabel.getElementsByTagName('span')[0];\n        }\n    }\n    for (var i = 0; i < notices.length; i++) {\n        if (notices[i].textContent !== \"\" || inputs[i].value == \"\" || !(checkboxInput === null || checkboxInput === void 0 ? void 0 : checkboxInput.checked)) {\n            e.preventDefault();\n            if (inputs[i].value == \"\") {\n                notices[i].textContent = \"Заполните пустое поле\";\n            }\n            if (!(checkboxInput === null || checkboxInput === void 0 ? void 0 : checkboxInput.checked)) {\n                if (checkboxNotice != undefined) {\n                    checkboxNotice.textContent = \"\" + validityRules.checkbox.notice;\n                }\n            }\n        }\n    }\n}\nfunction checkInputValidity(e) {\n    var input = e.target;\n    var inputName = input.name;\n    var label = input.closest('label');\n    var notice = label === null || label === void 0 ? void 0 : label.getElementsByTagName('span')[0];\n    if (notice != undefined) {\n        if (inputName === \"checkbox\" && !input.checked) {\n            return \"\" + validityRules[inputName].notice;\n        }\n        if (inputName === \"checkbox\" && input.checked) {\n            return '';\n        }\n        else if (input.value.match(validityRules[inputName].regexp) != null) {\n            return '';\n        }\n        else {\n            return \"\" + validityRules[inputName].notice;\n        }\n    }\n    return '';\n}\nfunction InputComponent(props) {\n    var _a = react_2.useState(\"\"), validNotice = _a[0], setValidNotice = _a[1];\n    return (react_1.default.createElement(\"label\", { className: app_css_1.default[props.labelClass] },\n        props.labelText,\n        react_1.default.createElement(\"input\", { className: app_css_1.default[props.inputClass], name: props.name, type: props.type, onChange: function (e) { setValidNotice(checkInputValidity(e)); }, autoComplete: \"off\" }),\n        react_1.default.createElement(\"span\", { className: app_css_1.default[props.validityNoticeClass] }, validNotice)));\n}\nfunction CheckboxComponent(props) {\n    var _a = react_2.useState(\"\"), validNotice = _a[0], setValidNotice = _a[1];\n    return (react_1.default.createElement(\"label\", { className: [app_css_1.default[props.labelClass], app_css_1.default[props.labelCheckBoxClass]].join(' ') },\n        react_1.default.createElement(\"p\", { className: app_css_1.default[props.CheckboxTextClass] }, props.checkboxText),\n        react_1.default.createElement(\"input\", { className: app_css_1.default[props.input], name: props.name, type: props.type, onChange: function (e) { setValidNotice(checkInputValidity(e)); } }),\n        react_1.default.createElement(\"span\", { className: app_css_1.default[props.validityNoticeClass] }, validNotice)));\n}\nfunction AppComponent() {\n    return (react_1.default.createElement(\"form\", { className: app_css_1.default.form, action: \"https://jsonplaceholder.typicode.com/posts\", method: \"POST\", onSubmit: function (e) { return checkValidityAndSubmit(e); } },\n        react_1.default.createElement(\"fieldset\", null,\n            react_1.default.createElement(\"legend\", null, \"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u0412\\u0430\\u0448\\u0438 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0435\"),\n            react_1.default.createElement(InputComponent, { labelClass: \"label\", inputClass: \"input\", validityNoticeClass: \"validityNotice\", type: \"text\", name: \"name\", labelText: \"SERGEY\" }),\n            react_1.default.createElement(InputComponent, { labelClass: \"label\", inputClass: \"input\", validityNoticeClass: \"validityNotice\", type: \"email\", name: \"email\", labelText: \"Email\" }),\n            react_1.default.createElement(InputComponent, { labelClass: \"label\", inputClass: \"input\", validityNoticeClass: \"validityNotice\", type: \"tel\", name: \"tel\", labelText: \"\\u0422\\u0435\\u043B\\u0435\\u0444\\u043E\\u043D\" }),\n            react_1.default.createElement(InputComponent, { labelClass: \"label\", inputClass: \"input\", validityNoticeClass: \"validityNotice\", type: \"date\", name: \"date\", labelText: \"\\u0414\\u0430\\u0442\\u0430\" }),\n            react_1.default.createElement(CheckboxComponent, { labelClass: \"label\", labelCheckBoxClass: \"labelCheckbox\", CheckboxTextClass: \"agrText\", checkboxText: \"\\u042F \\u0441\\u043E\\u0433\\u043B\\u0430\\u0441\\u0435\\u043D \\u043D\\u0430 \\u043E\\u0431\\u0440\\u0430\\u0431\\u043E\\u0442\\u043A\\u0443 \\u043F\\u0435\\u0440\\u0441\\u043E\\u043D\\u0430\\u043B\\u044C\\u043D\\u044B\\u0445 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0445\", inputClass: \"input\", validityNoticeClass: \"validityNotice\", type: \"checkbox\", name: \"checkbox\" }),\n            react_1.default.createElement(\"input\", { className: app_css_1.default.submitBtn, type: \"submit\", value: \"\\u041E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C\" }))));\n}\nexports.AppComponent = AppComponent;\n// export const App = hot(AppComponent);\n\n\n//# sourceURL=webpack:///./src/shared/App.tsx?");

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

/***/ })

/******/ });