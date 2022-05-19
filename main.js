/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/animation.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/animation.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".animate {\r\n  animation-duration: 0.5s;\r\n  animation-name: animate-fade;\r\n  animation-delay: 0s;\r\n  animation-fill-mode: backwards;\r\n}\r\n\r\n@keyframes animate-fade {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.animate.pop {\r\n  animation-name: animate-pop;\r\n  animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);\r\n}\r\n\r\n@keyframes animate-pop {\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale(0.8, 0.8);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    transform: scale(1, 1);\r\n  }\r\n}\r\n\r\n.center > .description {\r\n  animation-delay: 0.5s;\r\n}\r\n/* list */\r\n.list li:nth-child(1) {\r\n  animation-delay: 0.5s;\r\n}\r\n.list li:nth-child(2) {\r\n  animation-delay: 0.7s;\r\n}\r\n.list li:nth-child(3) {\r\n  animation-delay: 0.9s;\r\n}\r\n.list li:nth-child(4) {\r\n  animation-delay: 1.1s;\r\n}\r\n\r\n/* dish */\r\n\r\n.dishes .dish:nth-child(1) {\r\n  animation-delay: 0.5s;\r\n}\r\n.dishes .dish:nth-child(2) {\r\n  animation-delay: 0.8s;\r\n}\r\n.dishes .dish:nth-child(3) {\r\n  animation-delay: 1.1s;\r\n}\r\n.dishes .dish:nth-child(4) {\r\n  animation-delay: 1.4s;\r\n}\r\n.dishes .dish:nth-child(5) {\r\n  animation-delay: 1.7s;\r\n}\r\n.dishes .dish:nth-child(6) {\r\n  animation-delay: 2s;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/animation.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4BAA4B;EAC5B,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,2BAA2B;EAC3B,+DAA+D;AACjE;;AAEA;EACE;IACE,UAAU;IACV,0BAA0B;EAC5B;;EAEA;IACE,UAAU;IACV,sBAAsB;EACxB;AACF;;AAEA;EACE,qBAAqB;AACvB;AACA,SAAS;AACT;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;;AAEA,SAAS;;AAET;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,mBAAmB;AACrB","sourcesContent":[".animate {\r\n  animation-duration: 0.5s;\r\n  animation-name: animate-fade;\r\n  animation-delay: 0s;\r\n  animation-fill-mode: backwards;\r\n}\r\n\r\n@keyframes animate-fade {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.animate.pop {\r\n  animation-name: animate-pop;\r\n  animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);\r\n}\r\n\r\n@keyframes animate-pop {\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale(0.8, 0.8);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    transform: scale(1, 1);\r\n  }\r\n}\r\n\r\n.center > .description {\r\n  animation-delay: 0.5s;\r\n}\r\n/* list */\r\n.list li:nth-child(1) {\r\n  animation-delay: 0.5s;\r\n}\r\n.list li:nth-child(2) {\r\n  animation-delay: 0.7s;\r\n}\r\n.list li:nth-child(3) {\r\n  animation-delay: 0.9s;\r\n}\r\n.list li:nth-child(4) {\r\n  animation-delay: 1.1s;\r\n}\r\n\r\n/* dish */\r\n\r\n.dishes .dish:nth-child(1) {\r\n  animation-delay: 0.5s;\r\n}\r\n.dishes .dish:nth-child(2) {\r\n  animation-delay: 0.8s;\r\n}\r\n.dishes .dish:nth-child(3) {\r\n  animation-delay: 1.1s;\r\n}\r\n.dishes .dish:nth-child(4) {\r\n  animation-delay: 1.4s;\r\n}\r\n.dishes .dish:nth-child(5) {\r\n  animation-delay: 1.7s;\r\n}\r\n.dishes .dish:nth-child(6) {\r\n  animation-delay: 2s;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/home.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".greeting span {\r\n    color: var(--accent-color);\r\n  }\r\n  .greeting::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 2px;\r\n    width: 50%;\r\n    background-color: var(--accent-color);\r\n  }\r\n  \r\n  .center.content.home {\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-left: 15vw;\r\n    margin-right: 15vw;\r\n    justify-content: space-around;\r\n    gap: 20px;\r\n  }\r\n  \r\n  .description {\r\n    height:  calc(3rem * 5);\r\n    width: 500px;\r\n    align-self: baseline;\r\n    padding: 10px;\r\n  \r\n    text-align: justify;\r\n    font-size: 1.8rem;\r\n    font-weight:200;\r\n  \r\n    background-color: rgba(0, 0, 0, 0.1);\r\n    color: rgb(255, 255, 255);\r\n    backdrop-filter: blur(3px);\r\n    outline: 1px solid rgba(255, 255, 255, 0.1);\r\n    border-radius: 10px;\r\n  }\r\n  .description > p  >span{\r\n    font-size: 2rem;\r\n    font-weight: 400;\r\n    color: var(--accent-color);\r\n  }\r\n  ul {\r\n    text-align: left;\r\n  \r\n    font-size: 3rem;\r\n    font-weight: 500;\r\n    list-style-type: square;\r\n    list-style-position: inside;\r\n  \r\n    color: white;\r\n    text-shadow: 1px 1px 3px var(--accent-color);\r\n  }", "",{"version":3,"sources":["webpack://./src/css/home.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;EAC5B;EACA;IACE,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,qCAAqC;EACvC;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,6BAA6B;IAC7B,SAAS;EACX;;EAEA;IACE,uBAAuB;IACvB,YAAY;IACZ,oBAAoB;IACpB,aAAa;;IAEb,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;;IAEf,oCAAoC;IACpC,yBAAyB;IACzB,0BAA0B;IAC1B,2CAA2C;IAC3C,mBAAmB;EACrB;EACA;IACE,eAAe;IACf,gBAAgB;IAChB,0BAA0B;EAC5B;EACA;IACE,gBAAgB;;IAEhB,eAAe;IACf,gBAAgB;IAChB,uBAAuB;IACvB,2BAA2B;;IAE3B,YAAY;IACZ,4CAA4C;EAC9C","sourcesContent":[".greeting span {\r\n    color: var(--accent-color);\r\n  }\r\n  .greeting::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 2px;\r\n    width: 50%;\r\n    background-color: var(--accent-color);\r\n  }\r\n  \r\n  .center.content.home {\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-left: 15vw;\r\n    margin-right: 15vw;\r\n    justify-content: space-around;\r\n    gap: 20px;\r\n  }\r\n  \r\n  .description {\r\n    height:  calc(3rem * 5);\r\n    width: 500px;\r\n    align-self: baseline;\r\n    padding: 10px;\r\n  \r\n    text-align: justify;\r\n    font-size: 1.8rem;\r\n    font-weight:200;\r\n  \r\n    background-color: rgba(0, 0, 0, 0.1);\r\n    color: rgb(255, 255, 255);\r\n    backdrop-filter: blur(3px);\r\n    outline: 1px solid rgba(255, 255, 255, 0.1);\r\n    border-radius: 10px;\r\n  }\r\n  .description > p  >span{\r\n    font-size: 2rem;\r\n    font-weight: 400;\r\n    color: var(--accent-color);\r\n  }\r\n  ul {\r\n    text-align: left;\r\n  \r\n    font-size: 3rem;\r\n    font-weight: 500;\r\n    list-style-type: square;\r\n    list-style-position: inside;\r\n  \r\n    color: white;\r\n    text-shadow: 1px 1px 3px var(--accent-color);\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/menu.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".center.content.dishes{\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    gap: 30px;\r\n\r\n}\r\n\r\n.dish{\r\n    color: white;\r\n    width: 500px;\r\n    height:auto;\r\n\r\n    display: flex;\r\n    gap: 20px;\r\n   margin: 10px;\r\n}\r\n.dish > img {\r\n    height: 200px;\r\n    width: auto;\r\n    background-size: auto;\r\n\r\n    border: 1px solid white;\r\n    border-radius: 5px;\r\n    filter: sepia(.4) opacity(.9) drop-shadow(0 0 0 var(--accent-color));\r\n\r\ntransition: transform .2s;\r\n\r\n    \r\n}\r\n.dish > img:hover{\r\ntransform: scale(1.2);\r\n}\r\n.dish-description{\r\nheight: 150px;\r\nwidth: auto;\r\nmax-width: 250px;\r\n}\r\n\r\n.dish-description > h3 {\r\n    font-size: 2rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/menu.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,2BAA2B;IAC3B,kCAAkC;IAClC,SAAS;;AAEb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,WAAW;;IAEX,aAAa;IACb,SAAS;GACV,YAAY;AACf;AACA;IACI,aAAa;IACb,WAAW;IACX,qBAAqB;;IAErB,uBAAuB;IACvB,kBAAkB;IAClB,oEAAoE;;AAExE,yBAAyB;;;AAGzB;AACA;AACA,qBAAqB;AACrB;AACA;AACA,aAAa;AACb,WAAW;AACX,gBAAgB;AAChB;;AAEA;IACI,eAAe;AACnB","sourcesContent":[".center.content.dishes{\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    gap: 30px;\r\n\r\n}\r\n\r\n.dish{\r\n    color: white;\r\n    width: 500px;\r\n    height:auto;\r\n\r\n    display: flex;\r\n    gap: 20px;\r\n   margin: 10px;\r\n}\r\n.dish > img {\r\n    height: 200px;\r\n    width: auto;\r\n    background-size: auto;\r\n\r\n    border: 1px solid white;\r\n    border-radius: 5px;\r\n    filter: sepia(.4) opacity(.9) drop-shadow(0 0 0 var(--accent-color));\r\n\r\ntransition: transform .2s;\r\n\r\n    \r\n}\r\n.dish > img:hover{\r\ntransform: scale(1.2);\r\n}\r\n.dish-description{\r\nheight: 150px;\r\nwidth: auto;\r\nmax-width: 250px;\r\n}\r\n\r\n.dish-description > h3 {\r\n    font-size: 2rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n:root {\r\n  --accent-hue: 6;\r\n  --accent-color: hsl(var(--accent-hue), 93%, 71%);\r\n}\r\nbody {\r\n  background-color: rgb(47, 47, 47);\r\n  height: 100vh;\r\n  width: 100vw;\r\n  overflow: hidden;\r\n}\r\n.none {\r\n  display: none;\r\n}\r\n.background {\r\n  z-index: -1;\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  filter: brightness(0.3);\r\n}\r\nheader {\r\n  height: 4rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  align-items: center;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n\r\n  font-size: 1.5em;\r\n\r\n  color: white;\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n  outline: 1px solid rgba(255, 255, 255, 0.5);\r\n  backdrop-filter: blur(3px);\r\n}\r\n\r\n.back::after {\r\n  content: \" page\";\r\n}\r\n.back::before {\r\n  content: \"to \";\r\n  font-size: 0.8rem;\r\n}\r\n.back,\r\n.phone,\r\n.mail,\r\n.adress {\r\n  transition: color 0.2s;\r\n}\r\n.back:hover,\r\n.phone:hover,\r\n.mail:hover,\r\n.adress:hover {\r\n  color: hsl(var(--accent-hue), 93%, 71%);\r\n  cursor: pointer;\r\n}\r\n.contacts {\r\n  text-align: right;\r\n}\r\n.main.content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  color: white;\r\n}\r\n\r\n.top.content {\r\n  margin: 50px;\r\n}\r\n\r\n.greeting {\r\n  text-shadow: 1px 1px 3px black;\r\n  font-size: 1.5rem;\r\n  display: flex;\r\n  align-items: flex-end;\r\n  justify-content: center;\r\n}\r\n.greeting > h1 {\r\n  font-weight: 600;\r\n  color: white;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA;EACE,UAAU;EACV,SAAS;EACT,oCAAoC;AACtC;AACA;EACE,eAAe;EACf,gDAAgD;AAClD;AACA;EACE,iCAAiC;EACjC,aAAa;EACb,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,aAAa;AACf;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;;EAEnB,gBAAgB;;EAEhB,YAAY;EACZ,0CAA0C;EAC1C,2CAA2C;EAC3C,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,cAAc;EACd,iBAAiB;AACnB;AACA;;;;EAIE,sBAAsB;AACxB;AACA;;;;EAIE,uCAAuC;EACvC,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,8BAA8B;EAC9B,iBAAiB;EACjB,aAAa;EACb,qBAAqB;EACrB,uBAAuB;AACzB;AACA;EACE,gBAAgB;EAChB,YAAY;AACd","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap\");\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n:root {\r\n  --accent-hue: 6;\r\n  --accent-color: hsl(var(--accent-hue), 93%, 71%);\r\n}\r\nbody {\r\n  background-color: rgb(47, 47, 47);\r\n  height: 100vh;\r\n  width: 100vw;\r\n  overflow: hidden;\r\n}\r\n.none {\r\n  display: none;\r\n}\r\n.background {\r\n  z-index: -1;\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  filter: brightness(0.3);\r\n}\r\nheader {\r\n  height: 4rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  align-items: center;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n\r\n  font-size: 1.5em;\r\n\r\n  color: white;\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n  outline: 1px solid rgba(255, 255, 255, 0.5);\r\n  backdrop-filter: blur(3px);\r\n}\r\n\r\n.back::after {\r\n  content: \" page\";\r\n}\r\n.back::before {\r\n  content: \"to \";\r\n  font-size: 0.8rem;\r\n}\r\n.back,\r\n.phone,\r\n.mail,\r\n.adress {\r\n  transition: color 0.2s;\r\n}\r\n.back:hover,\r\n.phone:hover,\r\n.mail:hover,\r\n.adress:hover {\r\n  color: hsl(var(--accent-hue), 93%, 71%);\r\n  cursor: pointer;\r\n}\r\n.contacts {\r\n  text-align: right;\r\n}\r\n.main.content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  color: white;\r\n}\r\n\r\n.top.content {\r\n  margin: 50px;\r\n}\r\n\r\n.greeting {\r\n  text-shadow: 1px 1px 3px black;\r\n  font-size: 1.5rem;\r\n  display: flex;\r\n  align-items: flex-end;\r\n  justify-content: center;\r\n}\r\n.greeting > h1 {\r\n  font-weight: 600;\r\n  color: white;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/animation.css":
/*!*******************************!*\
  !*** ./src/css/animation.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./animation.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/animation.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/home.css":
/*!**************************!*\
  !*** ./src/css/home.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateHomePage)
/* harmony export */ });
/* harmony import */ var _img_mainView_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/mainView.jpg */ "./src/img/mainView.jpg");


function CreateHomePage() {
  const bgImage = document.querySelector(".background.img");
  bgImage.setAttribute("src", _img_mainView_jpg__WEBPACK_IMPORTED_MODULE_0__);
  //top
  const back = document.querySelector(".back");

  const top = document.querySelector(".top");
  const greeting = document.createElement("div");
  const greetingHeader = document.createElement("h1");

  greeting.classify("greeting");

  back.innerHTML = "Menu";
  greetingHeader.innerHTML =
    "Welcome to " + "<span>Seashell</span>" + " restaurant";

  greeting.appendChild(greetingHeader);
  top.appendChild(greeting);
  document.body.appendChild(top);
  //center
  const center = document.querySelector(".center");
  const description = document.createElement("div");
  const paragraph = document.createElement("p");
  const list = document.createElement("ul");

  description.classify("description");
  list.classify("list");

  center.classList.remove("dishes");
  center.classList.add("home");

  paragraph.innerHTML =
    "<span>S</span>avor a flavor at Seashell, a brand-new restaurant in Saint-Louis. Whether you’re in the mood for something spicy or sweet, we’ve got a huge range of authentic cuisine available on our menu—all cooked to perfection.";

  list.innerHTML =
   `<li class="animate pop">Seafood</li>
    <li class="animate pop">Asian cuisine</li>
    <li class="animate pop">Italian cuisine</li>
    <li class="animate pop">Variety of drinks</li>`;

  description.appendChild(paragraph);
  center.appendChild(description);
  center.appendChild(list);
  document.body.appendChild(center);

  //   return greeting;
}

/* <div class="greeting">
<h1>Welcome to <span>Seashell</span> restaurant</h1>
</div> */

// <div class="description ">
//                 <p>Savor a flavor at Seashell, a brand-new restaurant in Saint-Louis. Whether you’re in the mood for
//                     something spicy or sweet, we’ve got a huge range of authentic cuisine available on our menu—all
//                     cooked to perfection. We’re excited to bring something new to our community and can’t wait to share
//                     our unique recipes.</p>

//             </div>
//             <ul class="list">
//                 <li class="animate pop">Seafood</li>
//                 <li class="animate pop">Asian cuisine</li>
//                 <li class="animate pop">Italian cuisine</li>
//                 <li class="animate pop">Variety of drinks</li>
//             </ul>


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateHomePage)
/* harmony export */ });
/* harmony import */ var _img_menuView_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/menuView.jpg */ "./src/img/menuView.jpg");


function CreateHomePage() {
  const bgImage = document.querySelector(".background.img");
  const back = document.querySelector(".back")
  bgImage.setAttribute("src", _img_menuView_jpg__WEBPACK_IMPORTED_MODULE_0__);
  //top
  const top = document.querySelector(".top");
  const greeting = document.createElement("div");
  const greetingHeader = document.createElement("h1");

  greeting.classify("greeting");


  back.innerHTML = "Home";
  greetingHeader.innerHTML = "Menu";

  greeting.appendChild(greetingHeader);
  top.appendChild(greeting);
  document.body.appendChild(top);
  //center
  const center = document.querySelector(".center");
  center.classList.remove("home");
  center.classList.add("dishes");
//create new dish with parametrs
  function createDish(name, classList = "", src, description) {
    const dish = document.createElement("div");
    dish.classify("dish");
    dish.classList.add(classList);

    const dishDescription = document.createElement("div");
    dishDescription.classify("dish-description");

    const img = document.createElement("img");
    img.setAttribute("src", src);
    const title = document.createElement("h3");
    title.innerHTML = name;

    const par = document.createElement("p");
    par.innerHTML = description;

    dishDescription.appendChild(title);
    dishDescription.appendChild(par);

    dish.appendChild(img);
    dish.appendChild(dishDescription);

    center.appendChild(dish);
  }

  //add dishes

  createDish(
    "Fish steak",
    "Fish",
    "https://images.unsplash.com/photo-1597692493640-b70139c9e4ed",
    "Fish steak in white sause coocked on grill. Served with lemon."
  );

  createDish(
    "Shrimps on grill",
    "shrimp",
    "https://images.unsplash.com/photo-1514944288352-fffac99f0bdf",
    "Shrimp cooked in batter, grilled. Served with lemon."
  );

  createDish(
    "Shrimp Pasta",
    "shrimp-pasta",
    "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
    "This Creamy Shrimp Pasta! It’s ultra classic: juicy, savory shrimp and chewy pasta swimming in a creamy sauce."
  );

  createDish(
    "Pizza with seafood",
    "seafood-pizza",
    "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e",
    "Bored with the same old “cardboard” pizza? Well, you’ll enjoy making this herbed shrimp and scallop treat."
  );

  createDish(
    "Chinese Noodle Soup",
    "noodle-soup",
    "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
    "This Chinese Noodle Soup makes has an aromatic broth that’s packed with noodles and Asian flavor."
  );

  createDish(
    "Wok-cooked Vegetables with Seafood",
    "noodle-soup",
    "https://images.unsplash.com/photo-1585863481734-ff56631d441c",
    "This Wok-cooked Vegetables & Nuts with Seafood has light and tangy taste."
  );

  document.body.appendChild(center);
}


/***/ }),

/***/ "./src/img/mainView.jpg":
/*!******************************!*\
  !*** ./src/img/mainView.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eca087cc456001c5af0f.jpg";

/***/ }),

/***/ "./src/img/menuView.jpg":
/*!******************************!*\
  !*** ./src/img/menuView.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed1d046c6318172d5f77.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/home.css */ "./src/css/home.css");
/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/menu.css */ "./src/css/menu.css");
/* harmony import */ var _css_animation_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/animation.css */ "./src/css/animation.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
//hotspot
if (false) {} else {
  console.log("\n - - - INJECTED WITHOUT HOT MODULE - - -");
}








Object.prototype.classify = function (className) {
  this.classList.add(className);
  this.classList.add("animate");
  this.classList.add("pop");
};

function clearDom() {
  let top = document.querySelector(".top");
  let center = document.querySelector(".center");
  top.innerHTML = "";
  center.innerHTML = "";
}
const back = document.querySelector(".back");

// main code

back.addEventListener("click", (e) => {
  clearDom();
  if (e.target.textContent == "Home") {
    (0,_home_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  } else {
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  }
});

(0,_home_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBLElBQUksS0FBVSxFQUFFLEVBR2YsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUN5QjtBQUNEO0FBQ0E7QUFDSztBQUNVO0FBQ0E7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQWM7QUFDbEIsSUFBSTtBQUNKLElBQUksb0RBQWM7QUFDbEI7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvREFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1wcm9qZWN0Ly4vc3JjL2Nzcy9hbmltYXRpb24uY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1wcm9qZWN0Ly4vc3JjL2Nzcy9ob21lLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC8uL3NyYy9jc3MvbWVudS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3QvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC8uL3NyYy9jc3MvYW5pbWF0aW9uLmNzcz8wZmE4Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1wcm9qZWN0Ly4vc3JjL2Nzcy9ob21lLmNzcz8wODQ1Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1wcm9qZWN0Ly4vc3JjL2Nzcy9tZW51LmNzcz9kZGVjIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1wcm9qZWN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1wcm9qZWN0Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3QvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYW5pbWF0ZSB7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxyXFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZS1mYWRlO1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJhY2t3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhbmltYXRlLWZhZGUge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5hbmltYXRlLnBvcCB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZS1wb3A7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNiwgMC41MywgMC43NCwgMS40OCk7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYW5pbWF0ZS1wb3Age1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCwgMC44KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2VudGVyID4gLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMC41cztcXHJcXG59XFxyXFxuLyogbGlzdCAqL1xcclxcbi5saXN0IGxpOm50aC1jaGlsZCgxKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XFxyXFxufVxcclxcbi5saXN0IGxpOm50aC1jaGlsZCgyKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDAuN3M7XFxyXFxufVxcclxcbi5saXN0IGxpOm50aC1jaGlsZCgzKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDAuOXM7XFxyXFxufVxcclxcbi5saXN0IGxpOm50aC1jaGlsZCg0KSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDEuMXM7XFxyXFxufVxcclxcblxcclxcbi8qIGRpc2ggKi9cXHJcXG5cXHJcXG4uZGlzaGVzIC5kaXNoOm50aC1jaGlsZCgxKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XFxyXFxufVxcclxcbi5kaXNoZXMgLmRpc2g6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMC44cztcXHJcXG59XFxyXFxuLmRpc2hlcyAuZGlzaDpudGgtY2hpbGQoMykge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjFzO1xcclxcbn1cXHJcXG4uZGlzaGVzIC5kaXNoOm50aC1jaGlsZCg0KSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDEuNHM7XFxyXFxufVxcclxcbi5kaXNoZXMgLmRpc2g6bnRoLWNoaWxkKDUpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMS43cztcXHJcXG59XFxyXFxuLmRpc2hlcyAuZGlzaDpudGgtY2hpbGQoNikge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9hbmltYXRpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLCtEQUErRDtBQUNqRTs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixzQkFBc0I7RUFDeEI7QUFDRjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBLFNBQVM7QUFDVDtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYW5pbWF0ZSB7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxyXFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZS1mYWRlO1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJhY2t3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhbmltYXRlLWZhZGUge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5hbmltYXRlLnBvcCB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZS1wb3A7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNiwgMC41MywgMC43NCwgMS40OCk7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYW5pbWF0ZS1wb3Age1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCwgMC44KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2VudGVyID4gLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMC41cztcXHJcXG59XFxyXFxuLyogbGlzdCAqL1xcclxcbi5saXN0IGxpOm50aC1jaGlsZCgxKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XFxyXFxufVxcclxcbi5saXN0IGxpOm50aC1jaGlsZCgyKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDAuN3M7XFxyXFxufVxcclxcbi5saXN0IGxpOm50aC1jaGlsZCgzKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDAuOXM7XFxyXFxufVxcclxcbi5saXN0IGxpOm50aC1jaGlsZCg0KSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDEuMXM7XFxyXFxufVxcclxcblxcclxcbi8qIGRpc2ggKi9cXHJcXG5cXHJcXG4uZGlzaGVzIC5kaXNoOm50aC1jaGlsZCgxKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XFxyXFxufVxcclxcbi5kaXNoZXMgLmRpc2g6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMC44cztcXHJcXG59XFxyXFxuLmRpc2hlcyAuZGlzaDpudGgtY2hpbGQoMykge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjFzO1xcclxcbn1cXHJcXG4uZGlzaGVzIC5kaXNoOm50aC1jaGlsZCg0KSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDEuNHM7XFxyXFxufVxcclxcbi5kaXNoZXMgLmRpc2g6bnRoLWNoaWxkKDUpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMS43cztcXHJcXG59XFxyXFxuLmRpc2hlcyAuZGlzaDpudGgtY2hpbGQoNikge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdyZWV0aW5nIHNwYW4ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5ncmVldGluZzo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNlbnRlci5jb250ZW50LmhvbWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTV2dztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXZ3O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVzY3JpcHRpb24ge1xcclxcbiAgICBoZWlnaHQ6ICBjYWxjKDNyZW0gKiA1KTtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gIFxcclxcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6MjAwO1xcclxcbiAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB9XFxyXFxuICAuZGVzY3JpcHRpb24gPiBwICA+c3BhbntcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIHVsIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIFxcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xcclxcbiAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XFxyXFxuICBcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzcHggdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixhQUFhOztJQUViLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTs7SUFFZixvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsZ0JBQWdCOztJQUVoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QiwyQkFBMkI7O0lBRTNCLFlBQVk7SUFDWiw0Q0FBNEM7RUFDOUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdyZWV0aW5nIHNwYW4ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5ncmVldGluZzo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNlbnRlci5jb250ZW50LmhvbWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTV2dztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXZ3O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVzY3JpcHRpb24ge1xcclxcbiAgICBoZWlnaHQ6ICBjYWxjKDNyZW0gKiA1KTtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gIFxcclxcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6MjAwO1xcclxcbiAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB9XFxyXFxuICAuZGVzY3JpcHRpb24gPiBwICA+c3BhbntcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIHVsIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIFxcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xcclxcbiAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XFxyXFxuICBcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzcHggdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY2VudGVyLmNvbnRlbnQuZGlzaGVze1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmRpc2h7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBoZWlnaHQ6YXV0bztcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuLmRpc2ggPiBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xcclxcblxcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmaWx0ZXI6IHNlcGlhKC40KSBvcGFjaXR5KC45KSBkcm9wLXNoYWRvdygwIDAgMCB2YXIoLS1hY2NlbnQtY29sb3IpKTtcXHJcXG5cXHJcXG50cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xcclxcblxcclxcbiAgICBcXHJcXG59XFxyXFxuLmRpc2ggPiBpbWc6aG92ZXJ7XFxyXFxudHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG4uZGlzaC1kZXNjcmlwdGlvbntcXHJcXG5oZWlnaHQ6IDE1MHB4O1xcclxcbndpZHRoOiBhdXRvO1xcclxcbm1heC13aWR0aDogMjUwcHg7XFxyXFxufVxcclxcblxcclxcbi5kaXNoLWRlc2NyaXB0aW9uID4gaDMge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGtDQUFrQztJQUNsQyxTQUFTOztBQUViOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXOztJQUVYLGFBQWE7SUFDYixTQUFTO0dBQ1YsWUFBWTtBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHFCQUFxQjs7SUFFckIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixvRUFBb0U7O0FBRXhFLHlCQUF5Qjs7O0FBR3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsZ0JBQWdCO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2VudGVyLmNvbnRlbnQuZGlzaGVze1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmRpc2h7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBoZWlnaHQ6YXV0bztcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuLmRpc2ggPiBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xcclxcblxcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmaWx0ZXI6IHNlcGlhKC40KSBvcGFjaXR5KC45KSBkcm9wLXNoYWRvdygwIDAgMCB2YXIoLS1hY2NlbnQtY29sb3IpKTtcXHJcXG5cXHJcXG50cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xcclxcblxcclxcbiAgICBcXHJcXG59XFxyXFxuLmRpc2ggPiBpbWc6aG92ZXJ7XFxyXFxudHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG4uZGlzaC1kZXNjcmlwdGlvbntcXHJcXG5oZWlnaHQ6IDE1MHB4O1xcclxcbndpZHRoOiBhdXRvO1xcclxcbm1heC13aWR0aDogMjUwcHg7XFxyXFxufVxcclxcblxcclxcbi5kaXNoLWRlc2NyaXB0aW9uID4gaDMge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbjpyb290IHtcXHJcXG4gIC0tYWNjZW50LWh1ZTogNjtcXHJcXG4gIC0tYWNjZW50LWNvbG9yOiBoc2wodmFyKC0tYWNjZW50LWh1ZSksIDkzJSwgNzElKTtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDQ3LCA0Nyk7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuLm5vbmUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmJhY2tncm91bmQge1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuMyk7XFxyXFxufVxcclxcbmhlYWRlciB7XFxyXFxuICBoZWlnaHQ6IDRyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG5cXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2s6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCIgcGFnZVxcXCI7XFxyXFxufVxcclxcbi5iYWNrOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcInRvIFxcXCI7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuLmJhY2ssXFxyXFxuLnBob25lLFxcclxcbi5tYWlsLFxcclxcbi5hZHJlc3Mge1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcXHJcXG59XFxyXFxuLmJhY2s6aG92ZXIsXFxyXFxuLnBob25lOmhvdmVyLFxcclxcbi5tYWlsOmhvdmVyLFxcclxcbi5hZHJlc3M6aG92ZXIge1xcclxcbiAgY29sb3I6IGhzbCh2YXIoLS1hY2NlbnQtaHVlKSwgOTMlLCA3MSUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uY29udGFjdHMge1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcbi5tYWluLmNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi50b3AuY29udGVudCB7XFxyXFxuICBtYXJnaW46IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5ncmVldGluZyB7XFxyXFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzcHggYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmdyZWV0aW5nID4gaDEge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdEQUFnRDtBQUNsRDtBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1COztFQUVuQixnQkFBZ0I7O0VBRWhCLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsMkNBQTJDO0VBQzNDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBOzs7O0VBSUUsc0JBQXNCO0FBQ3hCO0FBQ0E7Ozs7RUFJRSx1Q0FBdUM7RUFDdkMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuOnJvb3Qge1xcclxcbiAgLS1hY2NlbnQtaHVlOiA2O1xcclxcbiAgLS1hY2NlbnQtY29sb3I6IGhzbCh2YXIoLS1hY2NlbnQtaHVlKSwgOTMlLCA3MSUpO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NywgNDcsIDQ3KTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4ubm9uZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4uYmFja2dyb3VuZCB7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC4zKTtcXHJcXG59XFxyXFxuaGVhZGVyIHtcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcblxcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFjazo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIiBwYWdlXFxcIjtcXHJcXG59XFxyXFxuLmJhY2s6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwidG8gXFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbn1cXHJcXG4uYmFjayxcXHJcXG4ucGhvbmUsXFxyXFxuLm1haWwsXFxyXFxuLmFkcmVzcyB7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xcclxcbn1cXHJcXG4uYmFjazpob3ZlcixcXHJcXG4ucGhvbmU6aG92ZXIsXFxyXFxuLm1haWw6aG92ZXIsXFxyXFxuLmFkcmVzczpob3ZlciB7XFxyXFxuICBjb2xvcjogaHNsKHZhcigtLWFjY2VudC1odWUpLCA5MyUsIDcxJSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5jb250YWN0cyB7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuLm1haW4uY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC5jb250ZW50IHtcXHJcXG4gIG1hcmdpbjogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyZWV0aW5nIHtcXHJcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uZ3JlZXRpbmcgPiBoMSB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdGlvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdGlvbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaW1hZ2UgZnJvbSBcIi4vaW1nL21haW5WaWV3LmpwZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlSG9tZVBhZ2UoKSB7XHJcbiAgY29uc3QgYmdJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja2dyb3VuZC5pbWdcIik7XHJcbiAgYmdJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1hZ2UpO1xyXG4gIC8vdG9wXHJcbiAgY29uc3QgYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja1wiKTtcclxuXHJcbiAgY29uc3QgdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3BcIik7XHJcbiAgY29uc3QgZ3JlZXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGdyZWV0aW5nSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG5cclxuICBncmVldGluZy5jbGFzc2lmeShcImdyZWV0aW5nXCIpO1xyXG5cclxuICBiYWNrLmlubmVySFRNTCA9IFwiTWVudVwiO1xyXG4gIGdyZWV0aW5nSGVhZGVyLmlubmVySFRNTCA9XHJcbiAgICBcIldlbGNvbWUgdG8gXCIgKyBcIjxzcGFuPlNlYXNoZWxsPC9zcGFuPlwiICsgXCIgcmVzdGF1cmFudFwiO1xyXG5cclxuICBncmVldGluZy5hcHBlbmRDaGlsZChncmVldGluZ0hlYWRlcik7XHJcbiAgdG9wLmFwcGVuZENoaWxkKGdyZWV0aW5nKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvcCk7XHJcbiAgLy9jZW50ZXJcclxuICBjb25zdCBjZW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbnRlclwiKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHJcbiAgZGVzY3JpcHRpb24uY2xhc3NpZnkoXCJkZXNjcmlwdGlvblwiKTtcclxuICBsaXN0LmNsYXNzaWZ5KFwibGlzdFwiKTtcclxuXHJcbiAgY2VudGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNoZXNcIik7XHJcbiAgY2VudGVyLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xyXG5cclxuICBwYXJhZ3JhcGguaW5uZXJIVE1MID1cclxuICAgIFwiPHNwYW4+Uzwvc3Bhbj5hdm9yIGEgZmxhdm9yIGF0IFNlYXNoZWxsLCBhIGJyYW5kLW5ldyByZXN0YXVyYW50IGluIFNhaW50LUxvdWlzLiBXaGV0aGVyIHlvdeKAmXJlIGluIHRoZSBtb29kIGZvciBzb21ldGhpbmcgc3BpY3kgb3Igc3dlZXQsIHdl4oCZdmUgZ290IGEgaHVnZSByYW5nZSBvZiBhdXRoZW50aWMgY3Vpc2luZSBhdmFpbGFibGUgb24gb3VyIG1lbnXigJRhbGwgY29va2VkIHRvIHBlcmZlY3Rpb24uXCI7XHJcblxyXG4gIGxpc3QuaW5uZXJIVE1MID1cclxuICAgYDxsaSBjbGFzcz1cImFuaW1hdGUgcG9wXCI+U2VhZm9vZDwvbGk+XHJcbiAgICA8bGkgY2xhc3M9XCJhbmltYXRlIHBvcFwiPkFzaWFuIGN1aXNpbmU8L2xpPlxyXG4gICAgPGxpIGNsYXNzPVwiYW5pbWF0ZSBwb3BcIj5JdGFsaWFuIGN1aXNpbmU8L2xpPlxyXG4gICAgPGxpIGNsYXNzPVwiYW5pbWF0ZSBwb3BcIj5WYXJpZXR5IG9mIGRyaW5rczwvbGk+YDtcclxuXHJcbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcclxuICBjZW50ZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gIGNlbnRlci5hcHBlbmRDaGlsZChsaXN0KTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNlbnRlcik7XHJcblxyXG4gIC8vICAgcmV0dXJuIGdyZWV0aW5nO1xyXG59XHJcblxyXG4vKiA8ZGl2IGNsYXNzPVwiZ3JlZXRpbmdcIj5cclxuPGgxPldlbGNvbWUgdG8gPHNwYW4+U2Vhc2hlbGw8L3NwYW4+IHJlc3RhdXJhbnQ8L2gxPlxyXG48L2Rpdj4gKi9cclxuXHJcbi8vIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbiBcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxwPlNhdm9yIGEgZmxhdm9yIGF0IFNlYXNoZWxsLCBhIGJyYW5kLW5ldyByZXN0YXVyYW50IGluIFNhaW50LUxvdWlzLiBXaGV0aGVyIHlvdeKAmXJlIGluIHRoZSBtb29kIGZvclxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHNvbWV0aGluZyBzcGljeSBvciBzd2VldCwgd2XigJl2ZSBnb3QgYSBodWdlIHJhbmdlIG9mIGF1dGhlbnRpYyBjdWlzaW5lIGF2YWlsYWJsZSBvbiBvdXIgbWVudeKAlGFsbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvb2tlZCB0byBwZXJmZWN0aW9uLiBXZeKAmXJlIGV4Y2l0ZWQgdG8gYnJpbmcgc29tZXRoaW5nIG5ldyB0byBvdXIgY29tbXVuaXR5IGFuZCBjYW7igJl0IHdhaXQgdG8gc2hhcmVcclxuLy8gICAgICAgICAgICAgICAgICAgICBvdXIgdW5pcXVlIHJlY2lwZXMuPC9wPlxyXG5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3RcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFuaW1hdGUgcG9wXCI+U2VhZm9vZDwvbGk+XHJcbi8vICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhbmltYXRlIHBvcFwiPkFzaWFuIGN1aXNpbmU8L2xpPlxyXG4vLyAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYW5pbWF0ZSBwb3BcIj5JdGFsaWFuIGN1aXNpbmU8L2xpPlxyXG4vLyAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYW5pbWF0ZSBwb3BcIj5WYXJpZXR5IG9mIGRyaW5rczwvbGk+XHJcbi8vICAgICAgICAgICAgIDwvdWw+XHJcbiIsImltcG9ydCBpbWFnZSBmcm9tIFwiLi9pbWcvbWVudVZpZXcuanBnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVIb21lUGFnZSgpIHtcclxuICBjb25zdCBiZ0ltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrZ3JvdW5kLmltZ1wiKTtcclxuICBjb25zdCBiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrXCIpXHJcbiAgYmdJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1hZ2UpO1xyXG4gIC8vdG9wXHJcbiAgY29uc3QgdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3BcIik7XHJcbiAgY29uc3QgZ3JlZXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGdyZWV0aW5nSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG5cclxuICBncmVldGluZy5jbGFzc2lmeShcImdyZWV0aW5nXCIpO1xyXG5cclxuXHJcbiAgYmFjay5pbm5lckhUTUwgPSBcIkhvbWVcIjtcclxuICBncmVldGluZ0hlYWRlci5pbm5lckhUTUwgPSBcIk1lbnVcIjtcclxuXHJcbiAgZ3JlZXRpbmcuYXBwZW5kQ2hpbGQoZ3JlZXRpbmdIZWFkZXIpO1xyXG4gIHRvcC5hcHBlbmRDaGlsZChncmVldGluZyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b3ApO1xyXG4gIC8vY2VudGVyXHJcbiAgY29uc3QgY2VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jZW50ZXJcIik7XHJcbiAgY2VudGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJob21lXCIpO1xyXG4gIGNlbnRlci5jbGFzc0xpc3QuYWRkKFwiZGlzaGVzXCIpO1xyXG4vL2NyZWF0ZSBuZXcgZGlzaCB3aXRoIHBhcmFtZXRyc1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZURpc2gobmFtZSwgY2xhc3NMaXN0ID0gXCJcIiwgc3JjLCBkZXNjcmlwdGlvbikge1xyXG4gICAgY29uc3QgZGlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXNoLmNsYXNzaWZ5KFwiZGlzaFwiKTtcclxuICAgIGRpc2guY2xhc3NMaXN0LmFkZChjbGFzc0xpc3QpO1xyXG5cclxuICAgIGNvbnN0IGRpc2hEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXNoRGVzY3JpcHRpb24uY2xhc3NpZnkoXCJkaXNoLWRlc2NyaXB0aW9uXCIpO1xyXG5cclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHNyYyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IG5hbWU7XHJcblxyXG4gICAgY29uc3QgcGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwYXIuaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XHJcblxyXG4gICAgZGlzaERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGRpc2hEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwYXIpO1xyXG5cclxuICAgIGRpc2guYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIGRpc2guYXBwZW5kQ2hpbGQoZGlzaERlc2NyaXB0aW9uKTtcclxuXHJcbiAgICBjZW50ZXIuYXBwZW5kQ2hpbGQoZGlzaCk7XHJcbiAgfVxyXG5cclxuICAvL2FkZCBkaXNoZXNcclxuXHJcbiAgY3JlYXRlRGlzaChcclxuICAgIFwiRmlzaCBzdGVha1wiLFxyXG4gICAgXCJGaXNoXCIsXHJcbiAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTk3NjkyNDkzNjQwLWI3MDEzOWM5ZTRlZFwiLFxyXG4gICAgXCJGaXNoIHN0ZWFrIGluIHdoaXRlIHNhdXNlIGNvb2NrZWQgb24gZ3JpbGwuIFNlcnZlZCB3aXRoIGxlbW9uLlwiXHJcbiAgKTtcclxuXHJcbiAgY3JlYXRlRGlzaChcclxuICAgIFwiU2hyaW1wcyBvbiBncmlsbFwiLFxyXG4gICAgXCJzaHJpbXBcIixcclxuICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTQ5NDQyODgzNTItZmZmYWM5OWYwYmRmXCIsXHJcbiAgICBcIlNocmltcCBjb29rZWQgaW4gYmF0dGVyLCBncmlsbGVkLiBTZXJ2ZWQgd2l0aCBsZW1vbi5cIlxyXG4gICk7XHJcblxyXG4gIGNyZWF0ZURpc2goXHJcbiAgICBcIlNocmltcCBQYXN0YVwiLFxyXG4gICAgXCJzaHJpbXAtcGFzdGFcIixcclxuICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NjMzNzk5MjY4OTgtMDVmNDU3NWE0NWQ4XCIsXHJcbiAgICBcIlRoaXMgQ3JlYW15IFNocmltcCBQYXN0YSEgSXTigJlzIHVsdHJhIGNsYXNzaWM6IGp1aWN5LCBzYXZvcnkgc2hyaW1wIGFuZCBjaGV3eSBwYXN0YSBzd2ltbWluZyBpbiBhIGNyZWFteSBzYXVjZS5cIlxyXG4gICk7XHJcblxyXG4gIGNyZWF0ZURpc2goXHJcbiAgICBcIlBpenphIHdpdGggc2VhZm9vZFwiLFxyXG4gICAgXCJzZWFmb29kLXBpenphXCIsXHJcbiAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTkzNTYwNzA4OTIwLTYxZGQ5OGM0NmE0ZVwiLFxyXG4gICAgXCJCb3JlZCB3aXRoIHRoZSBzYW1lIG9sZCDigJxjYXJkYm9hcmTigJ0gcGl6emE/IFdlbGwsIHlvdeKAmWxsIGVuam95IG1ha2luZyB0aGlzIGhlcmJlZCBzaHJpbXAgYW5kIHNjYWxsb3AgdHJlYXQuXCJcclxuICApO1xyXG5cclxuICBjcmVhdGVEaXNoKFxyXG4gICAgXCJDaGluZXNlIE5vb2RsZSBTb3VwXCIsXHJcbiAgICBcIm5vb2RsZS1zb3VwXCIsXHJcbiAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTY5NzE4MjEyMTY1LTNhODI3OGQ1ZjYyNFwiLFxyXG4gICAgXCJUaGlzIENoaW5lc2UgTm9vZGxlIFNvdXAgbWFrZXMgaGFzIGFuIGFyb21hdGljIGJyb3RoIHRoYXTigJlzIHBhY2tlZCB3aXRoIG5vb2RsZXMgYW5kIEFzaWFuIGZsYXZvci5cIlxyXG4gICk7XHJcblxyXG4gIGNyZWF0ZURpc2goXHJcbiAgICBcIldvay1jb29rZWQgVmVnZXRhYmxlcyB3aXRoIFNlYWZvb2RcIixcclxuICAgIFwibm9vZGxlLXNvdXBcIixcclxuICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODU4NjM0ODE3MzQtZmY1NjYzMWQ0NDFjXCIsXHJcbiAgICBcIlRoaXMgV29rLWNvb2tlZCBWZWdldGFibGVzICYgTnV0cyB3aXRoIFNlYWZvb2QgaGFzIGxpZ2h0IGFuZCB0YW5neSB0YXN0ZS5cIlxyXG4gICk7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2VudGVyKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vaG90c3BvdFxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbiAgY29uc29sZS5sb2coXCJcXG4gLSAtIC0gSU5KRUNURUQgV0lUSCBIT1QgTU9EVUxFIC0gLSAtXCIpO1xyXG59IGVsc2Uge1xyXG4gIGNvbnNvbGUubG9nKFwiXFxuIC0gLSAtIElOSkVDVEVEIFdJVEhPVVQgSE9UIE1PRFVMRSAtIC0gLVwiKTtcclxufVxyXG5cclxuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4vY3NzL2hvbWUuY3NzXCI7XHJcbmltcG9ydCBcIi4vY3NzL21lbnUuY3NzXCI7XHJcbmltcG9ydCBcIi4vY3NzL2FuaW1hdGlvbi5jc3NcIjtcclxuaW1wb3J0IENyZWF0ZUhvbWVQYWdlIGZyb20gXCIuL2hvbWUuanNcIjtcclxuaW1wb3J0IENyZWF0ZU1lbnVQYWdlIGZyb20gXCIuL21lbnUuanNcIjtcclxuXHJcbk9iamVjdC5wcm90b3R5cGUuY2xhc3NpZnkgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZVwiKTtcclxuICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJwb3BcIik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbGVhckRvbSgpIHtcclxuICBsZXQgdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3BcIik7XHJcbiAgbGV0IGNlbnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2VudGVyXCIpO1xyXG4gIHRvcC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGNlbnRlci5pbm5lckhUTUwgPSBcIlwiO1xyXG59XHJcbmNvbnN0IGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2tcIik7XHJcblxyXG4vLyBtYWluIGNvZGVcclxuXHJcbmJhY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgY2xlYXJEb20oKTtcclxuICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT0gXCJIb21lXCIpIHtcclxuICAgIENyZWF0ZUhvbWVQYWdlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIENyZWF0ZU1lbnVQYWdlKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbkNyZWF0ZUhvbWVQYWdlKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==