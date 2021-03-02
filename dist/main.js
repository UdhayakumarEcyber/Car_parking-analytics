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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/*! exports provided: id, author, widgets, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":\"1e9f7d1c-5145-4204-ef4f-ae438062161d\",\"author\":\"eutech\",\"widgets\":[{\"id\":\"carpark-current-occupancy\",\"title\":\"Carpark Occupancy\",\"description\":\"This widget shows you the current occupancy level of a given car park\",\"icon\":\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3Mi44MDMiIGhlaWdodD0iNTUuMDI0IiB2aWV3Qm94PSIwIDAgNzIuODAzIDU1LjAyNCI+CiAgPGcgaWQ9Ikdyb3VwXzQwODYiIGRhdGEtbmFtZT0iR3JvdXAgNDA4NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1NjYgLTUxMi45MzMpIiBvcGFjaXR5PSIwLjUiPgogICAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jYXIiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNhciIgZD0iTTU0LjAzNSwxNi42aC02LjQ3bC0xLjgtNC41QTEyLjA0MywxMi4wNDMsMCwwLDAsMzQuNTI5LDQuNUgyMC44QTEyLjA0NiwxMi4wNDYsMCwwLDAsOS41NjUsMTIuMTA4bC0xLjgsNC41SDEuM0ExLjMsMS4zLDAsMCwwLC4wNCwxOC4yMTZsLjY0OCwyLjU5NGExLjMsMS4zLDAsMCwwLDEuMjU4Ljk4Mkg0LjExNWE2Ljg2OCw2Ljg2OCwwLDAsMC0yLjM4Niw1LjE4OHY1LjE4OEE2Ljg2LDYuODYsMCwwLDAsMy40NTgsMzYuN3Y1Ljg0NEEzLjQ1OSwzLjQ1OSwwLDAsMCw2LjkxNyw0NmgzLjQ1OGEzLjQ1OSwzLjQ1OSwwLDAsMCwzLjQ1OC0zLjQ1OFYzOS4wODNINDEuNXYzLjQ1OEEzLjQ1OSwzLjQ1OSwwLDAsMCw0NC45NTgsNDZoMy40NThhMy40NTksMy40NTksMCwwLDAsMy40NTgtMy40NThWMzYuN0E2Ljg1Niw2Ljg1NiwwLDAsMCw1My42LDMyLjE2N1YyNi45NzlhNi44NzEsNi44NzEsMCwwLDAtMi4zODUtNS4xODhoMi4xNjlhMS4zLDEuMywwLDAsMCwxLjI1OC0uOTgybC42NDgtMi41OTRBMS4zLDEuMywwLDAsMCw1NC4wMzUsMTYuNlpNMTUuOTg3LDE0LjY3N0E1LjE4OCw1LjE4OCwwLDAsMSwyMC44LDExLjQxN0gzNC41MjlhNS4xODgsNS4xODgsMCwwLDEsNC44MTcsMy4yNjFMNDEuNSwyMC4wNjNIMTMuODMzbDIuMTU0LTUuMzg1Wk0xMC4zNzUsMzIuMTQ1QTMuMjYyLDMuMjYyLDAsMCwxLDYuOTE3LDI4LjdhMy4yNjIsMy4yNjIsMCwwLDEsMy40NTgtMy40NDhjMi4wNzUsMCw1LjE4OCwzLjEsNS4xODgsNS4xNzFTMTIuNDUsMzIuMTQ1LDEwLjM3NSwzMi4xNDVabTM0LjU4MywwYy0yLjA3NSwwLTUuMTg4LjM0NS01LjE4OC0xLjcyNHMzLjExMy01LjE3MSw1LjE4OC01LjE3MUEzLjI2MiwzLjI2MiwwLDAsMSw0OC40MTcsMjguN2EzLjI2MiwzLjI2MiwwLDAsMS0zLjQ1OCwzLjQ0OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1NjYgNTIxLjk1NikiLz4KICAgIDxwYXRoIGlkPSJJY29uX21hdGVyaWFsLXNob3ctY2hhcnQiIGRhdGEtbmFtZT0iSWNvbiBtYXRlcmlhbC1zaG93LWNoYXJ0IiBkPSJNNS42MiwyNy43ODksMTYuMSwxOC43NDlsNi45ODgsNi4wMTcsMTQuODQ5LTE0LjM4TDM1LjQ3Niw4LjI2NSwyMy4wOSwyMC4yNTMsMTYuMSwxNC4yMzYsMywyNS41MzNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjAwLjg2NCA1MDQuNjY4KSIvPgogIDwvZz4KPC9zdmc+Cg==\"}]}");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
const CarParkIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3Mi44MDMiIGhlaWdodD0iNTUuMDI0IiB2aWV3Qm94PSIwIDAgNzIuODAzIDU1LjAyNCI+CiAgPGcgaWQ9Ikdyb3VwXzQwODYiIGRhdGEtbmFtZT0iR3JvdXAgNDA4NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1NjYgLTUxMi45MzMpIiBvcGFjaXR5PSIwLjUiPgogICAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jYXIiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNhciIgZD0iTTU0LjAzNSwxNi42aC02LjQ3bC0xLjgtNC41QTEyLjA0MywxMi4wNDMsMCwwLDAsMzQuNTI5LDQuNUgyMC44QTEyLjA0NiwxMi4wNDYsMCwwLDAsOS41NjUsMTIuMTA4bC0xLjgsNC41SDEuM0ExLjMsMS4zLDAsMCwwLC4wNCwxOC4yMTZsLjY0OCwyLjU5NGExLjMsMS4zLDAsMCwwLDEuMjU4Ljk4Mkg0LjExNWE2Ljg2OCw2Ljg2OCwwLDAsMC0yLjM4Niw1LjE4OHY1LjE4OEE2Ljg2LDYuODYsMCwwLDAsMy40NTgsMzYuN3Y1Ljg0NEEzLjQ1OSwzLjQ1OSwwLDAsMCw2LjkxNyw0NmgzLjQ1OGEzLjQ1OSwzLjQ1OSwwLDAsMCwzLjQ1OC0zLjQ1OFYzOS4wODNINDEuNXYzLjQ1OEEzLjQ1OSwzLjQ1OSwwLDAsMCw0NC45NTgsNDZoMy40NThhMy40NTksMy40NTksMCwwLDAsMy40NTgtMy40NThWMzYuN0E2Ljg1Niw2Ljg1NiwwLDAsMCw1My42LDMyLjE2N1YyNi45NzlhNi44NzEsNi44NzEsMCwwLDAtMi4zODUtNS4xODhoMi4xNjlhMS4zLDEuMywwLDAsMCwxLjI1OC0uOTgybC42NDgtMi41OTRBMS4zLDEuMywwLDAsMCw1NC4wMzUsMTYuNlpNMTUuOTg3LDE0LjY3N0E1LjE4OCw1LjE4OCwwLDAsMSwyMC44LDExLjQxN0gzNC41MjlhNS4xODgsNS4xODgsMCwwLDEsNC44MTcsMy4yNjFMNDEuNSwyMC4wNjNIMTMuODMzbDIuMTU0LTUuMzg1Wk0xMC4zNzUsMzIuMTQ1QTMuMjYyLDMuMjYyLDAsMCwxLDYuOTE3LDI4LjdhMy4yNjIsMy4yNjIsMCwwLDEsMy40NTgtMy40NDhjMi4wNzUsMCw1LjE4OCwzLjEsNS4xODgsNS4xNzFTMTIuNDUsMzIuMTQ1LDEwLjM3NSwzMi4xNDVabTM0LjU4MywwYy0yLjA3NSwwLTUuMTg4LjM0NS01LjE4OC0xLjcyNHMzLjExMy01LjE3MSw1LjE4OC01LjE3MUEzLjI2MiwzLjI2MiwwLDAsMSw0OC40MTcsMjguN2EzLjI2MiwzLjI2MiwwLDAsMS0zLjQ1OCwzLjQ0OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1NjYgNTIxLjk1NikiLz4KICAgIDxwYXRoIGlkPSJJY29uX21hdGVyaWFsLXNob3ctY2hhcnQiIGRhdGEtbmFtZT0iSWNvbiBtYXRlcmlhbC1zaG93LWNoYXJ0IiBkPSJNNS42MiwyNy43ODksMTYuMSwxOC43NDlsNi45ODgsNi4wMTcsMTQuODQ5LTE0LjM4TDM1LjQ3Niw4LjI2NSwyMy4wOSwyMC4yNTMsMTYuMSwxNC4yMzYsMywyNS41MzNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjAwLjg2NCA1MDQuNjY4KSIvPgogIDwvZz4KPC9zdmc+Cg==';
const CarparkOccupancyWidget = (props) => {
    let [carPark, setCarPark] = React.useState('');
    let [carparks, setCarParks] = React.useState([]);
    let [occupied, setOccupied] = React.useState(null);
    let [total, setTotal] = React.useState(0);
    let [loadError, setLoadError] = React.useState('');
    React.useEffect(() => {
        props.uxpContext.executeAction('CarPark', 'GetCarParks', {}, { json: true })
            .then((data) => {
            data.forEach(x => x.label = x.name);
            setCarParks(data);
            if (props.carPark) {
                setCarPark(props.carPark);
            }
        }).catch(e => {
            console.log('Error retrieving car parks', e);
        });
    }, []);
    React.useEffect(() => {
        if (!carPark) {
            props.uxpContext.executeAction('CarPark', 'GetTotalOccupancy', {}, { json: true })
                .then((data) => {
                setLoadError('');
                setOccupied(Number(data['occupancy']));
                setTotal(Number(data['capacity']));
            })
                .catch(e => {
                console.log('Error getting total carpark occupancy', e);
                setOccupied(null);
                setLoadError('Error getting total car park occupancy');
            });
            return;
        }
        let selectedCarPark = carparks.find(x => x.name == carPark);
        if (!selectedCarPark) {
            setOccupied(null);
            return;
        }
        props.uxpContext.executeAction('CarPark', 'GetOccupancy', { 'name': carPark }, { json: true })
            .then((data) => {
            setLoadError('');
            setOccupied(Number(data['occupancy']));
            setTotal(Number(selectedCarPark.capacity));
        })
            .catch(e => console.log('Error getting carpark occupancy', e));
        setOccupied(null);
        setTotal(0);
        setLoadError('No data for car park: ' + carPark);
    }, [carPark]);
    let updater = components_1.useUpdateWidgetProps();
    function selectCarPark(cp) {
        setCarPark(cp);
        updater(props.instanceId, { 'carPark': cp });
    }
    function getColor(entry) {
        if (entry.name == 'Free') {
            return '#93DE93';
        }
        if (entry.name == 'Over Capacity') {
            return 'red';
        }
        return '#C2B6FD';
    }
    let overloaded = false;
    let data = [{ name: 'Free', value: total - occupied }, { name: 'Occupied', value: occupied }];
    debugger;
    if (total < occupied) {
        overloaded = true;
        data[0].name = 'Over Capacity';
        data[0].value = occupied - total;
        data[1].name = 'Capacity';
        data[1].value = total;
    }
    console.log(data);
    function renderLoadError() {
        return React.createElement("div", { style: { flex: 1, textAlign: 'center', color: 'red' } }, loadError);
    }
    function renderPie() {
        return React.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: "100%" },
            React.createElement(recharts_1.PieChart, null,
                React.createElement(recharts_1.Legend, { verticalAlign: "top", height: 36 }),
                React.createElement(recharts_1.Pie, { data: data, label: true, 
                    //   cx={'50%'}
                    //   cy={'50%'}
                    innerRadius: 100, outerRadius: 150, fill: "#8884d8", paddingAngle: 5, dataKey: "value" }, data.map((entry, index) => (React.createElement(recharts_1.Cell, { key: `cell-${index}`, fill: getColor(entry) }))))));
    }
    return (React.createElement(components_1.WidgetWrapper, null,
        React.createElement(components_1.TitleBar, { icon: CarParkIcon, title: 'Carpark Occupancy ' + (carPark ? ' - ' + carPark : ' - Total') },
            React.createElement(components_1.FilterPanel, null,
                React.createElement(components_1.Select, { onChange: selectCarPark, options: [{ name: '', label: 'All Car Parks' }, ...carparks], labelField: 'label', valueField: 'name', selected: carPark }))),
        loadError ?
            React.createElement("div", { style: { flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex' } }, renderLoadError()) :
            React.createElement("div", { style: { flex: 1 } }, renderPie())));
};
/**
 * Register as a Widget
 */
uxp_1.registerWidget({
    id: "carpark-current-occupancy",
    name: "Carpark Occupancy",
    widget: CarparkOccupancyWidget,
    configs: {
        layout: {
        // w: 12,
        // h: 12,
        // minH: 12,
        // minW: 12
        }
    }
});
/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "carpark_analytics",
    label: "Carpark_analytics",
    // click: () => alert("Hello"),
    component: Carpark_analyticsWidget
});
*/
/**
 * Register as a UI
 */
/*
registerUI({
   id:"carpark_analytics",
   component: Carpark_analyticsWidget
});
*/ 


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/uxp.ts":
/*!********************!*\
  !*** ./src/uxp.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUI = exports.registerLink = exports.registerWidget = void 0;
const bundle_json_1 = __importDefault(__webpack_require__(/*! ../bundle.json */ "./bundle.json"));
function registerWidget(_widget) {
    let widget = Object.assign({}, _widget, { id: (bundle_json_1.default.id + '/widget/' + _widget.id).toLowerCase() });
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    window.registerWidget(widget);
}
exports.registerWidget = registerWidget;
function registerLink(_link) {
    let link = Object.assign({}, _link, { id: (bundle_json_1.default.id + '/sidebarlink/' + _link.id).toLowerCase() });
    if (!window.registerLink) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', link.id);
    window.registerLink(link);
}
exports.registerLink = registerLink;
function registerUI(_ui) {
    let ui = Object.assign({}, _ui, { id: (bundle_json_1.default.id + '/ui/' + _ui.id).toLowerCase() });
    if (!window.registerUI) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', ui.id);
    window.registerUI(ui);
}
exports.registerUI = registerUI;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "Recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Recharts;

/***/ }),

/***/ "uxp/components":
/*!********************************!*\
  !*** external "UXPComponents" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = UXPComponents;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map