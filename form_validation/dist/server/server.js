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
/******/ 	return __webpack_require__(__webpack_require__.s = "./cfg/webpack.client.config.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cfg/webpack.client.config.js":
/*!**************************************!*\
  !*** ./cfg/webpack.client.config.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\n// const { HotModuleReplacementPlugin } = require('webpack');\r\n// const { CleanWebpackPlugin } = require('clean-webpack-plugin');\r\nvar NODE_ENV = \"development\";\r\nvar IS_DEV = NODE_ENV === 'development';\r\nvar IS_PROD = NODE_ENV === 'produciton';\r\nvar GLOBAL_CSS_REGEXP = /\\.global\\.css$/;\r\nfunction setupDevtool() {\r\n    if (IS_DEV) {\r\n        return 'eval';\r\n    }\r\n    if (IS_PROD) {\r\n        return false;\r\n    }\r\n}\r\nmodule.exports = {\r\n    resolve: {\r\n        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],\r\n        // alias: {\r\n        //     'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',\r\n        // }\r\n    },\r\n    mode: NODE_ENV ? NODE_ENV : 'development',\r\n    entry: [\r\n        path.resolve(__dirname, '../src/client/index.jsx'),\r\n        // 'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',\r\n    ],\r\n    output: {\r\n        path: path.resolve(__dirname, '../../docs'),\r\n        filename: 'index.js',\r\n        // publicPath: '/static/'\r\n    },\r\n    module: {\r\n        rules: [\r\n            {\r\n                test: /\\.[tj]sx?$/,\r\n                use: ['ts-loader'],\r\n            },\r\n            {\r\n                test: /\\.css?$/,\r\n                use: [\r\n                    'style-loader', {\r\n                        loader: 'css-loader',\r\n                        options: {\r\n                            modules: {\r\n                                mode: 'local',\r\n                                localIdentName: '[name]__[local]--[hash:base64:6]',\r\n                            },\r\n                        }\r\n                    },\r\n                ],\r\n                exclude: GLOBAL_CSS_REGEXP,\r\n            },\r\n            {\r\n                test: GLOBAL_CSS_REGEXP,\r\n                use: ['style-loader', 'css-loader'],\r\n            },\r\n            {\r\n                test: /\\.(png|jpg|gif|svg)$/i,\r\n                use: [\r\n                    {\r\n                        loader: 'file-loader',\r\n                        options: {\r\n                            limit: false,\r\n                        }\r\n                    }\r\n                ],\r\n            },\r\n        ],\r\n    },\r\n    // devtool: setupDevtool(),\r\n    // plugins: IS_DEV ? [\r\n    //     new CleanWebpackPlugin(),\r\n    //     new HotModuleReplacementPlugin(),\r\n    // ] : [],\r\n};\r\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./cfg/webpack.client.config.js?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });