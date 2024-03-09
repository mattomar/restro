/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   creatAboutPage: () => (/* binding */ creatAboutPage),\n/* harmony export */   setHTMLContent: () => (/* binding */ setHTMLContent)\n/* harmony export */ });\nfunction setHTMLContent(html) {\n    const contentDiv = document.getElementById(\"content\")\n    contentDiv.innerHTML = html\n}\n\n\nfunction creatAboutPage(){\n    const aboutContent =\n    `\n    <div class=\"about\">\n    <div class=\"about-title\"><b>About Us</b></div>\n    <div class=\"about-description\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, error. Magnam\n      veritatis incidunt excepturi? Nisi quaerat facilis molestiae, totam fugit libero blanditiis accusantium, fuga\n      minus minima iste ex. Iste perferendis repudiandae cum in, vitae consectetur sint temporibus commodi ipsum,\n      doloribus atque ab corrupti praesentium possimus libero! Reprehenderit quod consequuntur rem quidem veritatis ab\n      nobis architecto pariatur, deleniti placeat, porro autem perferendis iure. Aliquid, officia? Porro illo iure rerum\n      quam laboriosam laborum ratione deserunt odio magni quidem accusamus minima voluptas facere enim, quaerat debitis\n      ut. Obcaecati debitis culpa nemo? Dicta cumque, inventore officiis doloremque eius odit nam? Beatae accusantium\n      placeat sequi! fugiat quia.</div>\n  </div>`\n\n    setHTMLContent(aboutContent)\n}\n\n//# sourceURL=webpack://restro/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage),\n/* harmony export */   setHTMLContent: () => (/* binding */ setHTMLContent)\n/* harmony export */ });\nfunction setHTMLContent(html) {\n    const contentDiv = document.getElementById(\"content\")\n    contentDiv.innerHTML = html\n}\n\n\nfunction createHomePage() {\n    const homeContent =\n        `  <div class=\"home-content\">\n    <div class=\"home-text\"><span class=\"welcome\"> welcome to <b>Pizza For You</b></span><br> <span class=\"hero-content\">\n        the savory world of\n        authentic Italian flavors at\n        Bella Pizzeria. From our crispy<br> thin crusts to our mouthwatering toppings, each slice promises a culinary\n        journey<br>\n        straight to Italy. Treat yourself to our specialty pizzas, expertly crafted to tantalize<br> your taste buds.\n        From the\n        robust flavors of our Meat Lover's to the refreshing zest<br> of our Veggie Delight, each specialty pizza is a\n        masterpiece of flavor and texture.</span></div>\n    <div class=\"img-contain\">\n      <img src=\"/assets/imgs/pizza-hero.png\" alt=\"a picture of a pizza\" class=\"hero-image\">\n    </div>\n`\n\nsetHTMLContent(homeContent)\n}\n\n//# sourceURL=webpack://restro/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () =>\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHomePage)()\n);\n\n\ndocument.addEventListener('DOMContentLoaded',() =>{\n    const homeTab = document.getElementById('home-tab')\n    homeTab.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_0__.createHomePage)\n})\n\n\n;\n\ndocument.addEventListener('DOMContentLoaded',() =>{\n    const menuTab = document.getElementById('menu-tab')\n    menuTab.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_1__.createMenuPage)\n})\n\n\n\n;\n\ndocument.addEventListener('DOMContentLoaded',() =>{\n    const aboutTab = document.getElementById('about-tab')\n    aboutTab.addEventListener('click', _about__WEBPACK_IMPORTED_MODULE_2__.creatAboutPage)\n})\n\n//# sourceURL=webpack://restro/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage),\n/* harmony export */   setHTMLContent: () => (/* binding */ setHTMLContent)\n/* harmony export */ });\nfunction setHTMLContent(html) {\n    const contentDiv = document.getElementById(\"content\")\n    contentDiv.innerHTML = html\n}\n\n\nfunction createMenuPage() {\n    const MenuContent =\n    `\n    <div class=\"card-container\">\n    <div class=\"card\">\n      <div class=\"card-flex-container\">\n        <img src=\"/assets/imgs/pizza-hero.png\" alt=\"pizza photo in the menu\" class=\"menu-pic\">\n        <h2>Lorem, ipsum dolor.</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consectetur.</p>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-flex-container\">\n        <img src=\"/assets/imgs/pizza-hero.png\" alt=\"pizza photo in the menu\" class=\"menu-pic\">\n        <h2>Lorem, ipsum dolor.</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consectetur.</p>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-flex-container\">\n        <img src=\"/assets/imgs/pizza-hero.png\" alt=\"pizza photo in the menu\" class=\"menu-pic\">\n        <h2>Lorem, ipsum dolor.</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consectetur.</p>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-flex-container\">\n        <img src=\"/assets/imgs/pizza-hero.png\" alt=\"pizza photo in the menu\" class=\"menu-pic\">\n        <h2>Lorem, ipsum dolor.</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consectetur.</p>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-flex-container\">\n        <img src=\"/assets/imgs/pizza-hero.png\" alt=\"pizza photo in the menu\" class=\"menu-pic\">\n        <h2>Lorem, ipsum dolor.</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consectetur.</p>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-flex-container\">\n        <img src=\"/assets/imgs/pizza-hero.png\" alt=\"pizza photo in the menu\" class=\"menu-pic\">\n        <h2>Lorem, ipsum dolor.</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consectetur.</p>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-flex-container\">\n        <img src=\"/assets/imgs/pizza-hero.png\" alt=\"pizza photo in the menu\" class=\"menu-pic\">\n        <h2>Lorem, ipsum dolor.</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consectetur.</p>\n      </div>\n    </div>\n  </div>`\nsetHTMLContent(MenuContent)\n}\n\n//# sourceURL=webpack://restro/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;