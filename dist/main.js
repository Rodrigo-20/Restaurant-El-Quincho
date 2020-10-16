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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\\n#content{\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    width: 100%;\\n    min-height: 100vh;\\n    padding-bottom:50px ;\\n    background-image: url('https://img3.stockfresh.com/files/a/andrei_/m/89/8413624_stock-vector-red-checkered-texture-restaurant-seamless-pattern-kitchen-tablecloth-background-plaid-wallpaper.jpg');\\n}\\n\\n#tittle{\\n    text-align: center;\\n    display:block ;\\n    width: 100%;\\n    font-size: 50px;\\n    background-color: #f3f3f3;\\n    padding-bottom: 20px;\\n}\\n#menuCont{\\n    display: flex;\\n    width: 80%;\\n    \\n    flex-direction: column;\\n    border: 1px solid black;\\n    background-color: #fff;\\n} \\n\\n#tabNav{\\n    width: 100%;\\n    height: 50px;\\n    display: grid;\\n    cursor: pointer;\\n    grid-template-columns: repeat(3,1fr);\\n    background-color: white;\\n    text-align: center;\\n    font-size: 30px;\\n    font-family: Geneva;\\n}\\n#menu {\\n    display: flex;\\n    width: 100%;\\n    height: 100%;\\n    flex-direction: column;\\n    background-color: rgba(216, 220, 210, 0.8);\\n    \\n}\\n.menu-item:nth-of-type(even) {\\n    flex-direction: row-reverse;\\n\\n}\\n.menu-item:nth-of-type(even) h2{\\n    text-align: right;\\n    \\n}\\n.menu-item:nth-of-type(even) .item-description{\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-end;\\n    text-align: right;\\n    text-justify: auto;\\n}\\n.tab{\\n    border-bottom: 1px solid black;\\n    transition: all 0.5s;    \\n    padding-top: 10px;\\n    \\n}\\n\\n.menu-item{\\n    width: 100%;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n    margin: 50px auto;\\n    background-color: #f3f3f3;\\n    box-shadow: 0px 5px 25px rgba(0, 0, 0, .25);\\n    \\n} \\n.img-box{\\n    /*justify-self: flex-end;*/\\n    padding: 0px 20px;\\n    \\n    \\n}\\n.item-description{\\n    width: 100%;\\n    font-size: 1.4em;\\n    /*justify-self: flex-start;*/\\n}\\n.item-description h2{\\n    padding: 10px 15px;\\n    width: 90%;\\n    color: #fff;\\n    background-color: rgb(0, 0, 0);\\n}\\np{\\n    margin:0px 10px;\\n}\\ninput{\\n    display: none;\\n    \\n}\\nlabel{\\n    display: flex;\\n    cursor: pointer;\\n    flex-grow: 1; \\n    justify-content: center;\\n    \\n}\\n.tab-click{\\n    border-bottom: none;\\n    border-left: 1px solid black;\\n    border-right: 1px solid black;\\n    background-color: rgba(216, 220, 210, 0.8);\\n    font-size: 32px;\\n    box-shadow: 5px 0 5px rgba(0, 0, 0, .25);\\n    font-weight: 500;\\n}\\n.contactPage{\\n    height: 80vh;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content:space-between;\\n}\\n\\n.contactInfo{\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    font-size: 1.4em;\\n    line-height: 40px;\\n    padding-top: 20px;\\n}\\n\\n.icon{\\n    display: flex;\\n    font-size: 46px;\\n    padding-bottom: 20px;\\n    \\n}\\n#signa{\\n    font-size: 20px;\\n    align-self: center;\\n}\\na{\\n    text-decoration: none;\\n    color: black;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/dom-create-element/index.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-create-element/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n`dom-create-element`\n\nvar create = require('dom-create-element');\n\nvar el = create({\n  selector: 'div',\n  styles: 'preloader',\n  html: '<span>Text</span>'\n});\n*/\n\nmodule.exports = create;\n\nfunction create(opt) {\n\n\topt = opt || {};\n\t\n\tvar el = document.createElement(opt.selector);\n\t\n\tif(opt.attr) for(var index in opt.attr)\n\t\topt.attr.hasOwnProperty(index) && el.setAttribute(index, opt.attr[index]);\n\t\n\t\"a\" == opt.selector && opt.link && (\n\t\tel.href = opt.link,\n\t\topt.target && el.setAttribute(\"target\", opt.target)\n\t);\n\n\t\"img\" == opt.selector && opt.src && (\n\t\tel.src = opt.src,\n\t\topt.lazyload && (\n\t\t\tel.style.opacity = 0,\n\t\t\tel.onload = function(){\n\t\t\t\tel.style.opacity = 1;\n\t\t\t}\n\t\t)\n\t);\n\n\topt.id && (el.id = opt.id);\n\topt.styles && (el.className = opt.styles);\n\n\topt.html && (el.innerHTML = opt.html);\n\tif (!Array.isArray(opt.children)){\n\topt.children && (el.appendChild(opt.children));\n\t}\n\telse {\n\t\topt.children.forEach(child => {\n\t\t\tel.appendChild(child);\n\t\t});\n\t}\n\treturn el;\n};\n\n//# sourceURL=webpack:///./node_modules/dom-create-element/index.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dom_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-create-element */ \"./node_modules/dom-create-element/index.js\");\n/* harmony import */ var dom_create_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dom_create_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nfunction loadContactPage() {\n\n    while (_index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].firstChild) {\n        _index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].removeChild(_index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].firstChild);\n    }\n    Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"checkTab\"])();\n    const contactPage = dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n        selector: 'div',\n        styles: 'contactPage'\n    });\n    const item1 = dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n        selector: 'div',\n        styles: \"contactInfo\",\n        children: [\n            dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector: 'p',\n                html: 'Adress: Av Belgrano 1984, Salta, Argentina'\n            }),\n            dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector: 'p',\n                html: 'Tel: 03874220908'\n            }),\n            dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector: 'p',\n                html: 'Mail: elquincho@gmail.com'\n            })\n        ]\n    });\n    const item2 = dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n        selector: 'div',\n        styles: 'icon',\n        children: [\n            dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector: 'p',\n                id: 'signa',\n                html: 'By Rodrigo '\n            }),\n            dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector: 'a',\n                link: 'https://github.com/Rodrigo-20',\n                target: '_blank',\n                children: dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                    selector: 'i',\n                    styles: 'fa fa-github',\n                })\n            })]\n    });\n    contactPage.appendChild(item1);\n    contactPage.appendChild(item2);\n    _index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].appendChild(contactPage);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadContactPage);\n\n//# sourceURL=webpack:///./src/contactPage.js?");

/***/ }),

/***/ "./src/drinkPage.js":
/*!**************************!*\
  !*** ./src/drinkPage.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dom_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-create-element */ \"./node_modules/dom-create-element/index.js\");\n/* harmony import */ var dom_create_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dom_create_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _images_malbec_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/malbec.jpg */ \"./src/images/malbec.jpg\");\n/* harmony import */ var _images_salta_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/salta.jpg */ \"./src/images/salta.jpg\");\n\n\n\n\n\nfunction loadDrinkPage() {\n  while (_index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].firstChild) {\n    _index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].removeChild(_index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].firstChild);\n  }\n  Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"checkTab\"])();\n\n  /*const drinkTab = document.querySelector('#drink');\ndrinkTab.style['border-bottom']='none';\nconsole.log(drinkTab);*/\n  const item1 = dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n    selector: \"div\",\n    styles: \"menu-item\",\n    children: [\n      dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n        selector: \"div\",\n        styles: \"item-description\",\n        children: [\n          dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n            selector: \"h2\",\n            html: \"Salta beer\",\n          }),\n          dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n            selector: \"p\",\n            html: `Try this tradional lagger from Salta's city `,\n          }),\n        ],\n      }),\n      dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n        selector: \"img\",\n        styles: \"img-box\",\n        src: _images_malbec_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      }),\n    ],\n  });\n  const item2 = dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n    selector: \"div\",\n    styles: \"menu-item\",\n    children: [\n      dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n        selector: \"div\",\n        styles: \"item-description\",\n        children: [\n          dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n            selector: \"h2\",\n            html: \"Malbec Elementos\",\n          }),\n          dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n            selector: \"p\",\n            html: `This Argentinian red isn’t what you’d expect. It tastes great served chilled and zings with acidity (and sometimes spritz) which does wonders to cut through all that sausage-y fat and those caramelized onions on the side. `,\n          }),\n        ],\n      }),\n      dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n        selector: \"img\",\n        styles: \"img-box\",\n        src: _images_salta_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      }),\n    ],\n  });\n  _index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].appendChild(item1);\n  _index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].appendChild(item2);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadDrinkPage);\n\n\n//# sourceURL=webpack:///./src/drinkPage.js?");

/***/ }),

/***/ "./src/foodPage.js":
/*!*************************!*\
  !*** ./src/foodPage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dom_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-create-element */ \"./node_modules/dom-create-element/index.js\");\n/* harmony import */ var dom_create_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dom_create_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _images_chori_resize_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/chori_resize.jpg */ \"./src/images/chori_resize.jpg\");\n/* harmony import */ var _images_costillar_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/costillar.jpg */ \"./src/images/costillar.jpg\");\n/* harmony import */ var _images_empanadas_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/empanadas.jpg */ \"./src/images/empanadas.jpg\");\n\n\n\n\n\nfunction loadFoodPage() {\n\n    while (_index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].firstChild) {\n        _index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].removeChild(_index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].firstChild);\n    }\n    Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"checkTab\"])();\n    const item1 = dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n        selector: 'div', styles: 'menu-item',\n        children: [\n            dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector: 'div', styles: 'item-description',\n                children:\n                    [dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                        selector: 'h2', html: 'Choripan'\n                    }),\n                    dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                        selector: 'p', html: `It's consider to be one of the most traditional sandwiches from Argentina and one of the <br> most teasteful pieces of meat that you ever gonna try `\n                    })]\n            }),\n            dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector: 'img',\n                styles: 'img-box',\n                src: _images_chori_resize_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n\n            })]\n\n    });\n    const item2 = dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n        selector: 'div', styles: 'menu-item',\n        children: [\n            dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector: 'div', styles: 'item-description',\n                children:\n                    [dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                        selector: 'h2', html: 'Costillar a la estaca'\n                    }),\n                    dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                        selector: 'p', html: `Tasteful ribs cooked in a slow manner (5 hours at least). Great to share with family and friends `\n                    })]\n            }),\n            dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector: 'img',\n                styles: 'img-box',\n                src: _images_costillar_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n\n            })]\n\n    });\n    const item3 = dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n        selector: 'div', styles: 'menu-item',\n        children: [\n            dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector: 'div', styles: 'item-description',\n                children:\n                    [dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                        selector: 'h2', html: 'Empanadas'\n                    }),\n                    dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                        selector: 'p', html: `A mix of meat, potato, egg, and much more wrap inside a delicious dough. It's one of the most traditional meals from the north of Argentina `\n                    })]\n            }),\n            dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector: 'img',\n                styles: 'img-box',\n                src: _images_empanadas_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n\n            })]\n\n    });\n    _index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].appendChild(item1);\n    _index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].appendChild(item2);\n    _index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].appendChild(item3);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadFoodPage);\n\n\n\n//# sourceURL=webpack:///./src/foodPage.js?");

/***/ }),

/***/ "./src/images/chori_resize.jpg":
/*!*************************************!*\
  !*** ./src/images/chori_resize.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fb1e1956e19d8cd1bc1dd7330ec636f8.jpg\");\n\n//# sourceURL=webpack:///./src/images/chori_resize.jpg?");

/***/ }),

/***/ "./src/images/costillar.jpg":
/*!**********************************!*\
  !*** ./src/images/costillar.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"5dcaf87353bafa319e7592bc6394fe4e.jpg\");\n\n//# sourceURL=webpack:///./src/images/costillar.jpg?");

/***/ }),

/***/ "./src/images/empanadas.jpg":
/*!**********************************!*\
  !*** ./src/images/empanadas.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4c6eec983534b406730fd48858691950.jpg\");\n\n//# sourceURL=webpack:///./src/images/empanadas.jpg?");

/***/ }),

/***/ "./src/images/malbec.jpg":
/*!*******************************!*\
  !*** ./src/images/malbec.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f5d289e3773a53e2d5130156f7958cc9.jpg\");\n\n//# sourceURL=webpack:///./src/images/malbec.jpg?");

/***/ }),

/***/ "./src/images/salta.jpg":
/*!******************************!*\
  !*** ./src/images/salta.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"cb12fc9354004d0f4f7f0da37469b27e.jpg\");\n\n//# sourceURL=webpack:///./src/images/salta.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: showMenu, tabs, checkTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showMenu\", function() { return showMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tabs\", function() { return tabs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkTab\", function() { return checkTab; });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var dom_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-create-element */ \"./node_modules/dom-create-element/index.js\");\n/* harmony import */ var dom_create_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dom_create_element__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _drinkPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drinkPage */ \"./src/drinkPage.js\");\n/* harmony import */ var _foodPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foodPage */ \"./src/foodPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n\n\n\n\n\nconst container = document.querySelector(\"#content\");\n\nconst tittle = dom_create_element__WEBPACK_IMPORTED_MODULE_1___default()({\n  selector: \"h1\",\n  id: \"tittle\",\n  html: \"El Quincho\",\n});\n\nconst menuContainer = dom_create_element__WEBPACK_IMPORTED_MODULE_1___default()({\n  selector: \"div\",\n  id: \"menuCont\",\n});\n\nconst tabNav = dom_create_element__WEBPACK_IMPORTED_MODULE_1___default()({\n  selector: \"div\",\n  id: \"tabNav\",\n  children: [\n    dom_create_element__WEBPACK_IMPORTED_MODULE_1___default()({\n      selector: \"div\",\n      id: \"food\",\n      styles: \"tab\",\n    }),\n    dom_create_element__WEBPACK_IMPORTED_MODULE_1___default()({\n      selector: \"div\",\n      id: \"drink\",\n      styles: \"tab\",\n    }),\n    dom_create_element__WEBPACK_IMPORTED_MODULE_1___default()({\n      selector: \"div\",\n      id: \"contact\",\n      styles: \"tab\",\n    }),\n  ],\n});\nconst showMenu = dom_create_element__WEBPACK_IMPORTED_MODULE_1___default()({\n  selector: \"div\",\n  id: \"menu\",\n});\n\ncontainer.appendChild(tittle);\nmenuContainer.appendChild(tabNav);\nmenuContainer.appendChild(showMenu);\ncontainer.appendChild(menuContainer);\n\nconst food = document.querySelector(\"#food\");\nconst drink = document.querySelector(\"#drink\");\nconst contact = document.querySelector(\"#contact\");\n\nfunction createButtonandLabel(parent, id, value, cond = false) {\n  const radio = document.createElement(\"input\");\n  radio.setAttribute(\"type\", \"radio\");\n  radio.setAttribute(\"id\", id);\n  radio.setAttribute(\"name\", \"tab\");\n  radio.setAttribute(\"value\", value);\n  radio.checked = cond;\n  const labl = document.createElement(\"label\");\n  labl.setAttribute(\"for\", id);\n  labl.innerHTML = value;\n  parent.appendChild(radio);\n  parent.appendChild(labl);\n}\n\ncreateButtonandLabel(food, \"foodTab\", \"Food\", true);\ncreateButtonandLabel(drink, \"drinkTab\", \"Drink\");\ncreateButtonandLabel(contact, \"contactTab\", \"Contact\");\n\nconst tabs = document.querySelectorAll(\"input\");\nfunction checkTab() {\n  tabs.forEach((tab) => {\n    tab.checked\n      ? tab.parentNode.classList.add(\"tab-click\")\n      : tab.parentNode.classList.remove(\"tab-click\");\n  });\n}\ncheckTab();\nObject(_foodPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nfood.addEventListener(\"click\", _foodPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\ndrink.addEventListener(\"click\", _drinkPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\ncontact.addEventListener(\"click\", _contactPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });