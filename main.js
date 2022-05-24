/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/api/getBaseStats.js":
/*!*********************************!*\
  !*** ./src/api/getBaseStats.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getBaseStats () {
  const rawBaseStats = await fetch('https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/base_stats.h')
  const textBaseStats = await rawBaseStats.text()

  return textBaseStats
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBaseStats);


/***/ }),

/***/ "./src/api/getEggMovesLearnsets.js":
/*!*****************************************!*\
  !*** ./src/api/getEggMovesLearnsets.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getEggMovesLearnsets () {
  const rawEggMoves = await fetch('https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/egg_moves.h')
  const textEggMoves = await rawEggMoves.text()

  return textEggMoves
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getEggMovesLearnsets);


/***/ }),

/***/ "./src/api/getEvolution.js":
/*!*********************************!*\
  !*** ./src/api/getEvolution.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getEvolution () {
  const rawEvolution = await fetch('https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/evolution.h')
  const textEvolution = await rawEvolution.text()

  return textEvolution
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getEvolution);


/***/ }),

/***/ "./src/api/getForms.js":
/*!*****************************!*\
  !*** ./src/api/getForms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getForms () {
  const rawForms = await fetch('https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/form_species_tables.h')
  const textForms = await rawForms.text()

  return textForms
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getForms);


/***/ }),

/***/ "./src/api/getLevelUpLearnsets.js":
/*!****************************************!*\
  !*** ./src/api/getLevelUpLearnsets.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getLevelUpLearnsets () {
  const rawLevelUpLearnsets = await fetch('https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/level_up_learnsets.h')
  const textLevelUpLearnsets = await rawLevelUpLearnsets.text()

  return textLevelUpLearnsets
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLevelUpLearnsets);


/***/ }),

/***/ "./src/api/getLevelUpLearnsetsPointers.js":
/*!************************************************!*\
  !*** ./src/api/getLevelUpLearnsetsPointers.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getLevelUpLearnsetsPointers () {
  const rawLevelUpLearnsetsPointers = await fetch('https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/level_up_learnset_pointers.h')
  const textLevelUpLearnsetsPointers = await rawLevelUpLearnsetsPointers.text()

  return textLevelUpLearnsetsPointers
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLevelUpLearnsetsPointers);


/***/ }),

/***/ "./src/api/getSpecies.js":
/*!*******************************!*\
  !*** ./src/api/getSpecies.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getSpecies () {
  const rawSpecies = await fetch('https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/include/constants/species.h')
  const textSpecies = await rawSpecies.text()

  return textSpecies
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSpecies);


/***/ }),

/***/ "./src/api/getTMHMLearnsets.js":
/*!*************************************!*\
  !*** ./src/api/getTMHMLearnsets.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getTMHMLearnsets () {
  const rawTMHMLearnsets = await fetch('https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/tmhm_learnsets.h')
  const textTMHMLearnsets = await rawTMHMLearnsets.text()

  return textTMHMLearnsets
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTMHMLearnsets);


/***/ }),

/***/ "./src/helpers/altFormsLearnsets.js":
/*!******************************************!*\
  !*** ./src/helpers/altFormsLearnsets.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function altFormsLearnsets (pokemon, input, output) {
  for (const species of Object.keys(pokemon)) {
    if (pokemon[species][input].length >= 2) {
      for (let j = 0; j < pokemon[species][input].length; j++) {
        const targetSpecies = pokemon[species][input][j]

        if (pokemon[targetSpecies][output].length <= 0) { pokemon[targetSpecies][output] = pokemon[species][output] }
      }
    }
  }
  return pokemon
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (altFormsLearnsets);


/***/ }),

/***/ "./src/helpers/buildPokemonObj.js":
/*!****************************************!*\
  !*** ./src/helpers/buildPokemonObj.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_getSpecies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/getSpecies */ "./src/api/getSpecies.js");
/* harmony import */ var _regexSpecies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regexSpecies */ "./src/helpers/regexSpecies.js");
/* harmony import */ var _initializePokemonObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initializePokemonObj */ "./src/helpers/initializePokemonObj.js");
/* harmony import */ var _api_getEvolution__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/getEvolution */ "./src/api/getEvolution.js");
/* harmony import */ var _regexEvolution__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./regexEvolution */ "./src/helpers/regexEvolution.js");
/* harmony import */ var _api_getForms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/getForms */ "./src/api/getForms.js");
/* harmony import */ var _regexForms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./regexForms */ "./src/helpers/regexForms.js");
/* harmony import */ var _api_getBaseStats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/getBaseStats */ "./src/api/getBaseStats.js");
/* harmony import */ var _regexBaseStats__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./regexBaseStats */ "./src/helpers/regexBaseStats.js");
/* harmony import */ var _api_getLevelUpLearnsetsPointers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/getLevelUpLearnsetsPointers */ "./src/api/getLevelUpLearnsetsPointers.js");
/* harmony import */ var _getLevelUpLearnsetsConversionTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getLevelUpLearnsetsConversionTable */ "./src/helpers/getLevelUpLearnsetsConversionTable.js");
/* harmony import */ var _api_getLevelUpLearnsets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../api/getLevelUpLearnsets */ "./src/api/getLevelUpLearnsets.js");
/* harmony import */ var _regexLevelUpLearnsets__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./regexLevelUpLearnsets */ "./src/helpers/regexLevelUpLearnsets.js");
/* harmony import */ var _api_getTMHMLearnsets__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../api/getTMHMLearnsets */ "./src/api/getTMHMLearnsets.js");
/* harmony import */ var _regexTMHMLearnsets__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./regexTMHMLearnsets */ "./src/helpers/regexTMHMLearnsets.js");
/* harmony import */ var _api_getEggMovesLearnsets__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../api/getEggMovesLearnsets */ "./src/api/getEggMovesLearnsets.js");
/* harmony import */ var _regexEggMovesLearnsets__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./regexEggMovesLearnsets */ "./src/helpers/regexEggMovesLearnsets.js");

























async function buildPokemonObj () {
  let pokemon = {}

  const species = await (0,_api_getSpecies__WEBPACK_IMPORTED_MODULE_0__["default"])()
  pokemon = (0,_regexSpecies__WEBPACK_IMPORTED_MODULE_1__["default"])(species, pokemon)

  // This must be called here
  pokemon = (0,_initializePokemonObj__WEBPACK_IMPORTED_MODULE_2__["default"])(pokemon)

  const evolutions = await (0,_api_getEvolution__WEBPACK_IMPORTED_MODULE_3__["default"])()
  pokemon = (0,_regexEvolution__WEBPACK_IMPORTED_MODULE_4__["default"])(evolutions, pokemon)

  const forms = await (0,_api_getForms__WEBPACK_IMPORTED_MODULE_5__["default"])()
  pokemon = (0,_regexForms__WEBPACK_IMPORTED_MODULE_6__["default"])(forms, pokemon)

  const baseStats = await (0,_api_getBaseStats__WEBPACK_IMPORTED_MODULE_7__["default"])()
  pokemon = (0,_regexBaseStats__WEBPACK_IMPORTED_MODULE_8__["default"])(baseStats, pokemon)

  const pointers = await (0,_api_getLevelUpLearnsetsPointers__WEBPACK_IMPORTED_MODULE_9__["default"])()
  const conversionTable = (0,_getLevelUpLearnsetsConversionTable__WEBPACK_IMPORTED_MODULE_10__["default"])(pointers)
  const levelUpLearnsets = await (0,_api_getLevelUpLearnsets__WEBPACK_IMPORTED_MODULE_11__["default"])()
  pokemon = (0,_regexLevelUpLearnsets__WEBPACK_IMPORTED_MODULE_12__["default"])(levelUpLearnsets, conversionTable, pokemon)

  const TMHMLearnsets = await (0,_api_getTMHMLearnsets__WEBPACK_IMPORTED_MODULE_13__["default"])()
  pokemon = (0,_regexTMHMLearnsets__WEBPACK_IMPORTED_MODULE_14__["default"])(TMHMLearnsets, pokemon)

  const eggMovesLearnsets = await (0,_api_getEggMovesLearnsets__WEBPACK_IMPORTED_MODULE_15__["default"])()
  pokemon = (0,_regexEggMovesLearnsets__WEBPACK_IMPORTED_MODULE_16__["default"])(eggMovesLearnsets, pokemon)

  console.log(pokemon)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildPokemonObj);


/***/ }),

/***/ "./src/helpers/getEvolutionLine.js":
/*!*****************************************!*\
  !*** ./src/helpers/getEvolutionLine.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getEvolutionLine (pokemon) {
  for (const species of Object.keys(pokemon)) {
    for (let j = 0; j < pokemon[species].evolution.length; j++) {
      const targetSpecies = pokemon[species].evolution[j][2]
      pokemon[species].evolutionLine.push(targetSpecies)
    }

    for (let j = 0; j < pokemon[species].evolution.length; j++) {
      const targetSpecies = pokemon[species].evolution[j][2]
      pokemon[targetSpecies].evolutionLine = pokemon[species].evolutionLine
    }
  }

  for (const species of Object.keys(pokemon)) { pokemon[species].evolutionLine = Array.from(new Set(pokemon[species].evolutionLine)) } // remove duplicates

  return pokemon
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getEvolutionLine);


/***/ }),

/***/ "./src/helpers/getLevelUpLearnsetsConversionTable.js":
/*!***********************************************************!*\
  !*** ./src/helpers/getLevelUpLearnsetsConversionTable.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getLevelUpLearnsetsConversionTable (textLevelUpLearnsetsPointers) {
  const lines = textLevelUpLearnsetsPointers.split('\n')
  const conversionTable = {}

  lines.forEach(line => {
    const matchSpecies = line.match(/SPECIES_\w+/i)
    if (matchSpecies != null && /SPECIES_NONE/i.test(line) !== true) {
      const value = matchSpecies[0]

      const matchConversion = line.match(/s\w+LevelUpLearnset/i)
      if (matchConversion !== null) {
        const index = matchConversion[0]

        // DO NOT TOUCH THAT FUTURE ME, THIS IS THE WAY, DON'T QUESTION ME
        if (conversionTable[index] === undefined) {
          conversionTable[index] = [value]
        } else {
          conversionTable[index].push(value)
        }
      }
    }
  })
  return conversionTable
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLevelUpLearnsetsConversionTable);


/***/ }),

/***/ "./src/helpers/initializePokemonObj.js":
/*!*********************************************!*\
  !*** ./src/helpers/initializePokemonObj.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initializePokemonObj (pokemon) {
  const pokemonValues = Object.values(pokemon)
  for (let i = 0; i < pokemonValues.length; i++) {
    const key = pokemonValues[i].species
    pokemon[key].baseHP = 0
    pokemon[key].baseAttack = 0
    pokemon[key].baseDefense = 0
    pokemon[key].baseSpAttack = 0
    pokemon[key].baseSpDefense = 0
    pokemon[key].baseSpeed = 0
    pokemon[key].abilities = []
    pokemon[key].type1 = ''
    pokemon[key].type2 = ''
    pokemon[key].item1 = ''
    pokemon[key].item2 = ''
    pokemon[key].eggGroup1 = ''
    pokemon[key].eggGroup2 = ''
    pokemon[key].changes = []
    pokemon[key].levelUpLearnsets = []
    pokemon[key].TMHMLearnsets = []
    pokemon[key].eggMovesLearnsets = []
    pokemon[key].evolution = []
    pokemon[key].evolutionLine = [key]
    pokemon[key].forms = []
    pokemon[key].sprite = ''
  }
  return pokemon
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializePokemonObj);


/***/ }),

/***/ "./src/helpers/regexBaseStats.js":
/*!***************************************!*\
  !*** ./src/helpers/regexBaseStats.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function regexBaseStats (textBaseStats, pokemon) {
  const lines = textBaseStats.split('\n')

  const regex = /baseHP|baseAttack|baseDefense|baseSpeed|baseSpAttack|baseSpDefense|type1|type2|item1|item2|eggGroup1|eggGroup2|abilities/i
  let change = false; let value; let species

  lines.forEach(line => {
    if (/#else/i.test(line)) { change = true }
    if (/#endif/i.test(line)) { change = false }

    const matchSpecies = line.match(/SPECIES_\w+/i)
    if (matchSpecies !== null && /SPECIES_NONE/i.test(line) !== true) {
      species = matchSpecies[0]
      change = false
    }

    const matchRegex = line.match(regex)
    if (matchRegex !== null) {
      const match = matchRegex[0]

      if (match === 'baseHP' || match === 'baseAttack' || match === 'baseDefense' || match === 'baseSpeed' || match === 'baseSpAttack' || match === 'baseSpDefense') {
        const matchInt = line.match(/\d+/)
        if (matchInt !== null) { value = parseInt(matchInt[0]) }
      } else if (match === 'type1' || match === 'type2' || match === 'item1' || match === 'item2' || match === 'eggGroup1' || match === 'eggGroup2') {
        value = line.match(/\w+_\w+/i)
        if (value !== null) { value = value[0] }
      } else if (match === 'abilities') { value = line.match(/ABILITY_\w+/ig) }

      if (change === true) { pokemon[species].changes.push([match, value]) } else if (change === false) { pokemon[species][match] = value }
    }
  })

  return pokemon
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (regexBaseStats);


/***/ }),

/***/ "./src/helpers/regexEggMovesLearnsets.js":
/*!***********************************************!*\
  !*** ./src/helpers/regexEggMovesLearnsets.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _altFormsLearnsets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./altFormsLearnsets */ "./src/helpers/altFormsLearnsets.js");


function regexEggMovesLearnsets (textEggMoves, pokemon) {
  const lines = textEggMoves.split('\n')
  const speciesString = JSON.stringify(Object.keys(pokemon))
  let key = null

  lines.forEach(line => {
    if (/egg_moves/i.test(line)) { key = null }
    const matchMove = line.match(/MOVE_\w+/i)
    if (matchMove !== null) {
      const move = matchMove[0]
      if (key !== null) { pokemon[key].eggMovesLearnsets.push(move) }
    } else if (key === null) {
      const matchLine = line.match(/(\w+),/i)
      if (matchLine !== null) {
        const testSpecies = `SPECIES_${speciesString.match(matchLine[1])}`
        if (speciesString.includes(testSpecies)) { key = testSpecies }
      }
    }
  })

  return (0,_altFormsLearnsets__WEBPACK_IMPORTED_MODULE_0__["default"])(pokemon, 'evolutionLine', 'eggMovesLearnsets')
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (regexEggMovesLearnsets);


/***/ }),

/***/ "./src/helpers/regexEvolution.js":
/*!***************************************!*\
  !*** ./src/helpers/regexEvolution.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getEvolutionLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getEvolutionLine */ "./src/helpers/getEvolutionLine.js");


function regexEvolution (textEvolution, pokemon) {
  const lines = textEvolution.split('\n')
  let species

  lines.forEach(line => {
    const matchSpecies = line.match(/\[ *(SPECIES_\w+) *\]/i)
    if (matchSpecies !== null) { species = matchSpecies[1] }

    const matchEvoInfo = line.match(/(\w+), *(\w+), *(\w+)/)
    if (matchEvoInfo !== null) {
      const method = matchEvoInfo[1]
      const condition = matchEvoInfo[2]
      const targetSpecies = matchEvoInfo[3]
      pokemon[species].evolution.push([method, condition, targetSpecies])
    }
  })

  return (0,_getEvolutionLine__WEBPACK_IMPORTED_MODULE_0__["default"])(pokemon)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (regexEvolution);


/***/ }),

/***/ "./src/helpers/regexForms.js":
/*!***********************************!*\
  !*** ./src/helpers/regexForms.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function regexForms (textForms, pokemon) {
  const lines = textForms.split('\n')
  let speciesArray = []

  lines.forEach(line => {
    const matchSpecies = line.match(/SPECIES_\w+/i)

    if (/FORM_SPECIES_END/i.test(line)) {
      for (let i = 0; i < speciesArray.length; i++) { pokemon[speciesArray[i]].forms = speciesArray }
      speciesArray = []
    } else if (matchSpecies !== null) {
      const species = matchSpecies[0]
      speciesArray.push(species)
    }
  })
  return pokemon
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (regexForms);


/***/ }),

/***/ "./src/helpers/regexLevelUpLearnsets.js":
/*!**********************************************!*\
  !*** ./src/helpers/regexLevelUpLearnsets.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function regexLevelUpLearnsets (textLevelUpLearnsets, conversionTable, pokemon) {
  const lines = textLevelUpLearnsets.split('\n')
  let species = []

  lines.forEach(line => {
    const matchConversion = line.match(/s\w+LevelUpLearnset/i)
    if (matchConversion !== null) {
      const index = matchConversion[0]
      species = conversionTable[index]
    }

    const matchLevelMove = line.match(/(\d+) *, *(MOVE_\w+)/i)
    if (matchLevelMove !== null) {
      const level = parseInt(matchLevelMove[1])
      const move = matchLevelMove[2]
      for (let i = 0; i < species.length; i++) { pokemon[species[i]].levelUpLearnsets.push([move, level]) }
    }
  })
  return pokemon
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (regexLevelUpLearnsets);


/***/ }),

/***/ "./src/helpers/regexSpecies.js":
/*!*************************************!*\
  !*** ./src/helpers/regexSpecies.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function regexSpecies (textSpecies, pokemon) {
  const lines = textSpecies.split('\n')
  let formsStart = null; let ID = 0

  lines.forEach(line => {
    if (/#define *FORMS_START *\w+/i.test(line)) { formsStart = ID }

    const matchSpecies = line.match(/#define *(SPECIES_\w+)/i)
    if (matchSpecies !== null && /SPECIES_NONE /i.test(line) !== true && /SPECIES_EGG /i.test(line) !== true) {
      const species = matchSpecies[1]

      const matchInt = line.match(/\d+/)
      if (matchInt !== null) {
        ID = parseInt(matchInt[0])

        pokemon[species] = {}
        pokemon[species].species = species

        if (Number.isInteger(formsStart)) { pokemon[species].ID = ID + formsStart } else { pokemon[species].ID = ID }
      }
    }
  })
  return pokemon
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (regexSpecies);


/***/ }),

/***/ "./src/helpers/regexTMHMLearnsets.js":
/*!*******************************************!*\
  !*** ./src/helpers/regexTMHMLearnsets.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _altFormsLearnsets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./altFormsLearnsets */ "./src/helpers/altFormsLearnsets.js");


function regexTMHMLearnsets (textTMHMLearnsets, pokemon) {
  const lines = textTMHMLearnsets.split('\n')
  let species = null

  lines.forEach(line => {
    const matchSpecies = line.match(/SPECIES_\w+/i)
    if (matchSpecies !== null) {
      species = matchSpecies[0]
    }

    const matchTmhmMove = line.match(/TMHM\d* *\((\w+ *\d+) *_ *(\w+)/i)
    if (matchTmhmMove !== null) {
      const TMHM = matchTmhmMove[1]
      let move = matchTmhmMove[2]
      if (move === 'SOLARBEAM') { move = 'SOLAR_BEAM' } // Fuck Oldplayer :)
      move = `MOVE_${move}`

      pokemon[species].TMHMLearnsets.push([move, TMHM])
    }
  })

  return (0,_altFormsLearnsets__WEBPACK_IMPORTED_MODULE_0__["default"])(pokemon, 'forms', 'TMHMLearnsets')
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (regexTMHMLearnsets);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _helpers_buildPokemonObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/buildPokemonObj */ "./src/helpers/buildPokemonObj.js");



(0,_helpers_buildPokemonObj__WEBPACK_IMPORTED_MODULE_1__["default"])()

})();

/******/ })()
;
//# sourceMappingURL=main.js.map