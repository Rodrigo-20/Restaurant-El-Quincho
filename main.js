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

/***/ "./node_modules/dom-create-element/index.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-create-element/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n`dom-create-element`\n\nvar create = require('dom-create-element');\n\nvar el = create({\n  selector: 'div',\n  styles: 'preloader',\n  html: '<span>Text</span>'\n});\n*/\n\nmodule.exports = create;\n\nfunction create(opt) {\n\n\topt = opt || {};\n\t\n\tvar el = document.createElement(opt.selector);\n\t\n\tif(opt.attr) for(var index in opt.attr)\n\t\topt.attr.hasOwnProperty(index) && el.setAttribute(index, opt.attr[index]);\n\t\n\t\"a\" == opt.selector && opt.link && (\n\t\tel.href = opt.link,\n\t\topt.target && el.setAttribute(\"target\", opt.target)\n\t);\n\n\t\"img\" == opt.selector && opt.src && (\n\t\tel.src = opt.src,\n\t\topt.lazyload && (\n\t\t\tel.style.opacity = 0,\n\t\t\tel.onload = function(){\n\t\t\t\tel.style.opacity = 1;\n\t\t\t}\n\t\t)\n\t);\n\n\topt.id && (el.id = opt.id);\n\topt.styles && (el.className = opt.styles);\n\n\topt.html && (el.innerHTML = opt.html);\n\tif (!Array.isArray(opt.children)){\n\topt.children && (el.appendChild(opt.children));\n\t}\n\telse {\n\t\topt.children.forEach(child => {\n\t\t\tel.appendChild(child);\n\t\t});\n\t}\n\treturn el;\n};\n\n//# sourceURL=webpack:///./node_modules/dom-create-element/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dom_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-create-element */ \"./node_modules/dom-create-element/index.js\");\n/* harmony import */ var dom_create_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dom_create_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nfunction loadDrinkPage() {\n  while (_index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].firstChild) {\n    _index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].removeChild(_index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].firstChild);\n  }\n  Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"checkTab\"])();\n\n  /*const drinkTab = document.querySelector('#drink');\ndrinkTab.style['border-bottom']='none';\nconsole.log(drinkTab);*/\n  const item1 = dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n    selector: \"div\",\n    styles: \"menu-item\",\n    children: [\n      dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n        selector: \"div\",\n        styles: \"item-description\",\n        children: [\n          dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n            selector: \"h2\",\n            html: \"Salta beer\",\n          }),\n          dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n            selector: \"p\",\n            html: `Try this tradional lagger from Salta's city `,\n          }),\n        ],\n      }),\n      dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n        selector: \"img\",\n        styles: \"img-box\",\n        src: \"../images/salta.jpg\",\n      }),\n    ],\n  });\n  const item2 = dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n    selector: \"div\",\n    styles: \"menu-item\",\n    children: [\n      dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n        selector: \"div\",\n        styles: \"item-description\",\n        children: [\n          dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n            selector: \"h2\",\n            html: \"Malbec Elementos\",\n          }),\n          dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n            selector: \"p\",\n            html: `This Argentinian red isn’t what you’d expect. It tastes great served chilled and zings with acidity (and sometimes spritz) which does wonders to cut through all that sausage-y fat and those caramelized onions on the side. `,\n          }),\n        ],\n      }),\n      dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n        selector: \"img\",\n        styles: \"img-box\",\n        src: \"../images/malbec.jpg\",\n      }),\n    ],\n  });\n  _index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].appendChild(item1);\n  _index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].appendChild(item2);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadDrinkPage);\n\n\n//# sourceURL=webpack:///./src/drinkPage.js?");

/***/ }),

/***/ "./src/foodPage.js":
/*!*************************!*\
  !*** ./src/foodPage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dom_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-create-element */ \"./node_modules/dom-create-element/index.js\");\n/* harmony import */ var dom_create_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dom_create_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nfunction loadFoodPage(){\n\nwhile(_index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].firstChild){\n    _index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].removeChild(_index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].firstChild);\n}   \nObject(_index__WEBPACK_IMPORTED_MODULE_1__[\"checkTab\"])();\nconst item1 = dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n    selector : 'div',styles:'menu-item',\n    children:[\n        dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n        selector:'div',styles:'item-description',\n        children:\n            [dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector:'h2',html:'Choripan'\n            }),\n            dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector:'p',html:`It's consider to be one of the most traditional sandwiches from Argentina and one of the <br> most teasteful pieces of meat that you ever gonna try ` \n            })]}),\n        dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector:'img',\n                styles:'img-box',\n                src:'../images/chori_resize.jpg',\n                \n            })]\n    \n});\nconst item2 = dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n    selector : 'div',styles:'menu-item',\n    children:[\n        dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n        selector:'div',styles:'item-description',\n        children:\n            [dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector:'h2',html:'Costillar a la estaca'\n            }),\n            dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector:'p',html:`It's consider to be one of the most traditional sandwiches from Argentina and one of the most teasteful pieces of meat that you ever gonna try ` \n            })]}),\n        dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector:'img',\n                styles:'img-box',\n                src:'../images/costillar.jpg',\n                \n            })]\n    \n});\nconst item3 = dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n    selector : 'div',styles:'menu-item',\n    children:[\n        dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n        selector:'div',styles:'item-description',\n        children:\n            [dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector:'h2',html:'Empanadas'\n            }),\n            dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector:'p',html:`It's consider to be one of the most traditional sandwiches from Argentina and one of the most teasteful pieces of meat that you ever gonna try ` \n            })]}),\n        dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n                selector:'img',\n                styles:'img-box',\n                src:'../images/empanadas.jpg',\n                \n            })]\n    \n});\n_index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].appendChild(item1);\n_index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].appendChild(item2);\n_index__WEBPACK_IMPORTED_MODULE_1__[\"showMenu\"].appendChild(item3);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadFoodPage);\n\n\n\n//# sourceURL=webpack:///./src/foodPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: showMenu, tabs, checkTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showMenu\", function() { return showMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tabs\", function() { return tabs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkTab\", function() { return checkTab; });\n/* harmony import */ var dom_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-create-element */ \"./node_modules/dom-create-element/index.js\");\n/* harmony import */ var dom_create_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dom_create_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _drinkPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drinkPage */ \"./src/drinkPage.js\");\n/* harmony import */ var _foodPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foodPage */ \"./src/foodPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n\n\n\n\nconst container = document.querySelector(\"#content\");\n\nconst tittle = dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n  selector: \"h1\",\n  id: \"tittle\",\n  html: \"El Quincho\",\n});\n\nconst menuContainer = dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n  selector: \"div\",\n  id: \"menuCont\",\n});\n\nconst tabNav = dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n  selector: \"div\",\n  id: \"tabNav\",\n  children: [\n    dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n      selector: \"div\",\n      id: \"food\",\n      styles: \"tab\",\n    }),\n    dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n      selector: \"div\",\n      id: \"drink\",\n      styles: \"tab\",\n    }),\n    dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n      selector: \"div\",\n      id: \"contact\",\n      styles: \"tab\",\n    }),\n  ],\n});\nconst showMenu = dom_create_element__WEBPACK_IMPORTED_MODULE_0___default()({\n  selector: \"div\",\n  id: \"menu\",\n});\n\ncontainer.appendChild(tittle);\nmenuContainer.appendChild(tabNav);\nmenuContainer.appendChild(showMenu);\ncontainer.appendChild(menuContainer);\n\nconst food = document.querySelector(\"#food\");\nconst drink = document.querySelector(\"#drink\");\nconst contact = document.querySelector(\"#contact\");\n\nfunction createButtonandLabel(parent, id, value, cond = false) {\n  const radio = document.createElement(\"input\");\n  radio.setAttribute(\"type\", \"radio\");\n  radio.setAttribute(\"id\", id);\n  radio.setAttribute(\"name\", \"tab\");\n  radio.setAttribute(\"value\", value);\n  radio.checked = cond;\n  const labl = document.createElement(\"label\");\n  labl.setAttribute(\"for\", id);\n  labl.innerHTML = value;\n  parent.appendChild(radio);\n  parent.appendChild(labl);\n}\n\ncreateButtonandLabel(food, \"foodTab\", \"Food\", true);\ncreateButtonandLabel(drink, \"drinkTab\", \"Drink\");\ncreateButtonandLabel(contact, \"contactTab\", \"Contact\");\n\nconst tabs = document.querySelectorAll(\"input\");\nfunction checkTab() {\n  tabs.forEach((tab) => {\n    tab.checked\n      ? tab.parentNode.classList.add(\"tab-click\")\n      : tab.parentNode.classList.remove(\"tab-click\");\n  });\n}\ncheckTab();\nObject(_foodPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nfood.addEventListener(\"click\", _foodPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\ndrink.addEventListener(\"click\", _drinkPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\ncontact.addEventListener(\"click\", _contactPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });