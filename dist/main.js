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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol,\\nul {\\n  list-style: none;\\n}\\n\\nblockquote,\\nq {\\n  quotes: none;\\n}\\n\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: '';\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/css/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../sprites/list-icon.png */ \"./src/sprites/list-icon.png\"));\n\n// Module\nexports.push([module.i, \"body {\\n  background-color: rgb(34, 34, 34);\\n  color: rgb(255, 255, 255);\\n  font-family: 'Raleway', sans-serif;\\n}\\n\\nmain {\\n  width: 100%;\\n}\\n\\n.wrapper {\\n  margin: 0 auto;\\n  width: 1300px;\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n#game {\\n  border: 2px solid rgb(87, 87, 87);\\n  display: inline-block;\\n  height: 768px;\\n  width: 1024px;\\n  image-rendering: -moz-crisp-edges;\\n  image-rendering: -webkit-crisp-edges;\\n  image-rendering: pixelated;\\n  image-rendering: crisp-edges;\\n}\\n\\naside {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  margin: 12px;\\n  vertical-align: top;\\n  width: 245px;\\n}\\n\\n#credits {\\n  font-size: 14px;\\n  font-weight: bold;\\n}\\n\\n#controls ul {\\n  list-style: disc outside url(\" + ___CSS_LOADER_URL___0___ + \");\\n}\\n\\nli {\\n  font-weight: bold;\\n  font-size: 16px;\\n  margin: 0 0 8px 20px;\\n}\\n\\nh1 {\\n  font-size: 54px;\\n  margin: 20px 0;\\n  text-align: center;\\n  font-family: 'Patua One';\\n}\\n\\nh2 {\\n  font-size: 28px;\\n  font-weight: bold;\\n  margin: 0 0 15px 0;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function escape(url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"';\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/url-escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/reset.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/reset.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/js/camera.js":
/*!**************************!*\
  !*** ./src/js/camera.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/js/controller.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/js/util.js\");\n/* harmony import */ var _img_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img-loader */ \"./src/js/img-loader.js\");\n\n\n\n\nclass Camera {\n  constructor(player, gameObjects, canvasCtx) {\n    this.thePlayer = player;\n    this.gameObjects = gameObjects;\n    this.canvasCtx = canvasCtx;\n    this.camBounds = {\n      left: 0.4,\n      right: 0.55,\n      top: 0.2,\n      bottom: 0.9\n    };\n    this.offsetX = 0;\n    this.offsetY = 0;\n\n    this.oldPosY = this.thePlayer.pos.y;\n  }\n\n  update() {\n    if (_controller__WEBPACK_IMPORTED_MODULE_0__[\"userController\"].left &&\n      (this.thePlayer.pos.x < (_util__WEBPACK_IMPORTED_MODULE_1__[\"globals\"].screenWidth * this.camBounds.left - this.offsetX))) {\n      this.offsetX += this.thePlayer.moveAmt;\n    }\n\n    if (_controller__WEBPACK_IMPORTED_MODULE_0__[\"userController\"].right &&\n      (this.thePlayer.pos.x > (_util__WEBPACK_IMPORTED_MODULE_1__[\"globals\"].screenWidth * this.camBounds.right - this.offsetX))) {\n      this.offsetX -= this.thePlayer.moveAmt;\n    }\n\n    if ((this.thePlayer.pos.y < (_util__WEBPACK_IMPORTED_MODULE_1__[\"globals\"].screenHeight * this.camBounds.top - this.offsetY))) {\n      this.offsetY -= this.thePlayer.pos.y - this.oldPosY;\n    }\n\n    if ((this.thePlayer.pos.y + this.thePlayer.size.h) > (_util__WEBPACK_IMPORTED_MODULE_1__[\"globals\"].screenHeight * this.camBounds.bottom - this.offsetY)) {\n      this.offsetY -= this.thePlayer.pos.y - this.oldPosY;\n    }\n\n    this.oldPosY = this.thePlayer.pos.y;\n\n    this.canvasCtx.save();\n    this.canvasCtx.translate(this.offsetX, this.offsetY);\n    this.render();\n    this.canvasCtx.restore();\n  }\n\n  render() {\n    //clearing the screen for a new render\n    this.canvasCtx.clearRect(\n      -this.offsetX, -this.offsetY,\n      _util__WEBPACK_IMPORTED_MODULE_1__[\"globals\"].screenWidth,\n      _util__WEBPACK_IMPORTED_MODULE_1__[\"globals\"].screenHeight\n    );\n\n    //drawing the background\n    this.canvasCtx.drawImage(\n      _img_loader__WEBPACK_IMPORTED_MODULE_2__[\"bgImgs\"][0],\n      -this.offsetX, -this.offsetY,\n      _util__WEBPACK_IMPORTED_MODULE_1__[\"globals\"].screenWidth,\n      _util__WEBPACK_IMPORTED_MODULE_1__[\"globals\"].screenHeight\n    );\n\n    //loop through all objects and call their respective render functions\n    let layerNames = Object.keys(this.gameObjects);\n    layerNames.forEach(name => {\n      const renderObjs = this.gameObjects[name];\n      for (let i = 0; i < renderObjs.length; i++) {\n        renderObjs[i].render(this.canvasCtx);\n      }\n    });\n\n    this.thePlayer.render(this.canvasCtx);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Camera);\n\n\n//# sourceURL=webpack:///./src/js/camera.js?");

/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/*! exports provided: userController, bindKeyHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userController\", function() { return userController; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bindKeyHandlers\", function() { return bindKeyHandlers; });\nconst userController = {\n  left: false,\n  right: false,\n  up: false,\n  down: false,\n  jump: false,\n  attack: false\n};\n\nconst bindKeyHandlers = () => {\n  window.onkeydown = e => {\n    if (e.repeat) return;\n    if (e.key === \"a\") userController.left = true;\n    if (e.key === \"d\") userController.right = true;\n    if (e.key === \"w\") userController.up = true;\n    if (e.key === \"s\") userController.down = true;\n    if (e.key === \"l\") userController.jump = true;\n    if (e.key === \"k\") userController.attack = true;\n  };\n\n  window.onkeyup = e => {\n    if (e.repeat) return;\n    if (e.key === \"a\") userController.left = false;\n    if (e.key === \"d\") userController.right = false;\n    if (e.key === \"w\") userController.up = false;\n    if (e.key === \"s\") userController.down = false;\n    if (e.key === \"l\") userController.jump = false;\n    if (e.key === \"k\") userController.attack = false;\n  };\n};\n\n\n//# sourceURL=webpack:///./src/js/controller.js?");

/***/ }),

/***/ "./src/js/entity.js":
/*!**************************!*\
  !*** ./src/js/entity.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/js/util.js\");\n\n\nconst nullImg = new Image();\n\nclass Entity {\n  constructor({ size, pos, vel, color, sprites, spriteOffset }) {\n    this.size = size || { w: 100, h: 100 };\n    this.pos = pos || { x: 0, y: 0 };\n    this.vel = vel || { x: 0, y: 0 };\n    this.color = color || \"magenta\";\n    this.sprites = sprites || [nullImg];\n    this.spriteOffset = spriteOffset || { x: 0, y: 0, w: 0, h: 0 };\n\n    this.spriteIdx = 0;\n    this.nullImg = nullImg;\n    this.render = this.render.bind(this);\n  }\n\n  render(ctx) {\n    if (this.sprites.length < 1) {\n      ctx.fillStyle = this.color;\n      ctx.fillRect(\n        this.pos.x,\n        this.pos.y,\n        this.size.w,\n        this.size.h\n      );\n    }\n    ctx.drawImage(\n      this.sprites[this.spriteIdx],\n      this.pos.x + this.spriteOffset.x,\n      this.pos.y + this.spriteOffset.y,\n      this.spriteOffset.w,\n      this.spriteOffset.h\n    );\n  }\n\n  applyVelocity(deltaT) {\n    const timeAdj = 0.01;\n    this.pos.y += (this.vel.y * (deltaT * timeAdj));\n    this.pos.x += this.vel.x;\n\n    this.vel.y += (_util__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].gravity * (deltaT * timeAdj));\n    if (this.vel.y > _util__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].maxVelocity) this.vel.y = _util__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].maxVelocity;\n  }\n\n  bCollided(box2) {\n    let box1 = this;\n\n    if ((box1.pos.x <= (box2.pos.x + box2.size.w)) &&\n      ((box1.pos.x + box1.size.w) >= box2.pos.x) &&\n      (box1.pos.y <= (box2.pos.y + box2.size.h)) &&\n      ((box1.pos.y + box1.size.h) >= box2.pos.y)) {\n      return true;\n    }\n    return false;\n  }\n\n  input() {\n    //should be overriden by child classes\n  }\n\n  update() {\n    //should be overriden by child classes\n  }\n\n  resetVelocity() {\n    this.vel.y = 0;\n    this.vel.x = 0;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Entity);\n\n\n//# sourceURL=webpack:///./src/js/entity.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: GAME_STATES, timeSinceLastFrame, previousTime, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_STATES\", function() { return GAME_STATES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timeSinceLastFrame\", function() { return timeSinceLastFrame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"previousTime\", function() { return previousTime; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera */ \"./src/js/camera.js\");\n/* harmony import */ var _level_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level-loader */ \"./src/js/level-loader.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller */ \"./src/js/controller.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ \"./src/js/util.js\");\n/* harmony import */ var _img_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img-loader */ \"./src/js/img-loader.js\");\n\n\n\n\n\n\n\nconst GAME_STATES = {\n  MENU: \"MENU\",\n  GAME_PLAYING: \"GAME_PLAYING\",\n  GAME_PAUSED: \"GAME_PAUSED\"\n};\n\nlet timeSinceLastFrame;\nlet previousTime;\n\nlet posBuffer = { x: 0, y: 0 };\nlet bWouldHitGround;\n\nclass Game {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.canvas.width = _util__WEBPACK_IMPORTED_MODULE_4__[\"globals\"].screenWidth;\n    this.canvas.height = _util__WEBPACK_IMPORTED_MODULE_4__[\"globals\"].screenHeight;\n    this.canvasCtx = canvas.getContext(\"2d\");\n\n    this.reset();\n    Object(_controller__WEBPACK_IMPORTED_MODULE_3__[\"bindKeyHandlers\"])();\n\n    timeSinceLastFrame = 0;\n    previousTime = Date.now();\n    this.step = this.step.bind(this);\n    this.step();\n  }\n\n  reset() {\n    this.gameState = GAME_STATES.GAME_PLAYING;\n    this.gameObjects = {\n      noCollision: [],\n      blockers: [],\n      player: [],\n      killVolumes: []\n    };\n\n    this.loadLevel();\n\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas);\n\n    this.gameObjects.player.push(this.player);\n    this.camera = new _camera__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.player, this.gameObjects, this.canvasCtx);\n  }\n\n  step() {\n    this.player.update();\n    posBuffer.x = this.player.pos.x;\n    posBuffer.y = this.player.pos.y;\n\n    let currentTime = Date.now();\n    timeSinceLastFrame = currentTime - previousTime;\n    previousTime = currentTime;\n    if (timeSinceLastFrame > 20) timeSinceLastFrame = 20;\n    this.update(timeSinceLastFrame);\n\n    this.camera.update();\n\n    if (this.gameState === GAME_STATES.GAME_PLAYING) {\n      requestAnimationFrame(this.step);\n    }\n  }\n\n  loadLevel() {\n    let level = Object(_level_loader__WEBPACK_IMPORTED_MODULE_2__[\"parseLevel\"])(_level_loader__WEBPACK_IMPORTED_MODULE_2__[\"levels\"][1]);\n\n    //TODO perform merge to handle different chars in level txt files\n    this.gameObjects.blockers = this.gameObjects.blockers.concat(level.tiles);\n    this.gameObjects.killVolumes = this.gameObjects.killVolumes.concat(level.killVolumes);\n  }\n\n  update(deltaT) {\n    if (this.gameState === GAME_STATES.GAME_PLAYING) this.player.input();\n\n    if (!bWouldHitGround) this.player.applyVelocity(deltaT);\n    bWouldHitGround = false;\n\n    const blockers = this.gameObjects.blockers;\n    for (let i = 0; i < blockers.length; i++) {\n      if (this.player.bCollided(blockers[i])) {\n        this.player.pos.x = posBuffer.x;\n        this.player.pos.y = posBuffer.y;\n\n        bWouldHitGround = true;\n        this.player.resetVelocity();\n        _player__WEBPACK_IMPORTED_MODULE_0__[\"controllerResets\"].jump = true;\n      }\n    }\n\n    const killVolumes = this.gameObjects.killVolumes;\n    for (let i = 0; i < killVolumes.length; i++) {\n      if (this.player.bCollided(killVolumes[i])) {\n        this.reset();\n      }\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/img-loader.js":
/*!******************************!*\
  !*** ./src/js/img-loader.js ***!
  \******************************/
/*! exports provided: characterWalkingLeft, characterWalkingRight, characterWhipLeft, characterWhipRight, characterJumpLeft, characterJumpRight, characterDamageLeft, characterDamageRight, characterDeadLeft, characterDeadRight, environmentImgs, bgImgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"characterWalkingLeft\", function() { return characterWalkingLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"characterWalkingRight\", function() { return characterWalkingRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"characterWhipLeft\", function() { return characterWhipLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"characterWhipRight\", function() { return characterWhipRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"characterJumpLeft\", function() { return characterJumpLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"characterJumpRight\", function() { return characterJumpRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"characterDamageLeft\", function() { return characterDamageLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"characterDamageRight\", function() { return characterDamageRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"characterDeadLeft\", function() { return characterDeadLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"characterDeadRight\", function() { return characterDeadRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"environmentImgs\", function() { return environmentImgs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bgImgs\", function() { return bgImgs; });\n/* harmony import */ var _sprites_walk1_left_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sprites/walk1_left.png */ \"./src/sprites/walk1_left.png\");\n/* harmony import */ var _sprites_walk1_left_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sprites_walk1_left_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sprites_walk1_right_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprites/walk1_right.png */ \"./src/sprites/walk1_right.png\");\n/* harmony import */ var _sprites_walk1_right_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sprites_walk1_right_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sprites_walk2_left_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sprites/walk2_left.png */ \"./src/sprites/walk2_left.png\");\n/* harmony import */ var _sprites_walk2_left_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sprites_walk2_left_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sprites_walk2_right_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sprites/walk2_right.png */ \"./src/sprites/walk2_right.png\");\n/* harmony import */ var _sprites_walk2_right_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sprites_walk2_right_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sprites_walk3_left_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sprites/walk3_left.png */ \"./src/sprites/walk3_left.png\");\n/* harmony import */ var _sprites_walk3_left_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sprites_walk3_left_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sprites_walk3_right_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sprites/walk3_right.png */ \"./src/sprites/walk3_right.png\");\n/* harmony import */ var _sprites_walk3_right_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sprites_walk3_right_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _sprites_walk4_left_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sprites/walk4_left.png */ \"./src/sprites/walk4_left.png\");\n/* harmony import */ var _sprites_walk4_left_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sprites_walk4_left_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _sprites_walk4_right_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sprites/walk4_right.png */ \"./src/sprites/walk4_right.png\");\n/* harmony import */ var _sprites_walk4_right_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sprites_walk4_right_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _sprites_whip1_left_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sprites/whip1_left.png */ \"./src/sprites/whip1_left.png\");\n/* harmony import */ var _sprites_whip1_left_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sprites_whip1_left_png__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _sprites_whip1_right_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sprites/whip1_right.png */ \"./src/sprites/whip1_right.png\");\n/* harmony import */ var _sprites_whip1_right_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sprites_whip1_right_png__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _sprites_whip2_left_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sprites/whip2_left.png */ \"./src/sprites/whip2_left.png\");\n/* harmony import */ var _sprites_whip2_left_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sprites_whip2_left_png__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _sprites_whip2_right_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sprites/whip2_right.png */ \"./src/sprites/whip2_right.png\");\n/* harmony import */ var _sprites_whip2_right_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_sprites_whip2_right_png__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _sprites_whip3_left_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sprites/whip3_left.png */ \"./src/sprites/whip3_left.png\");\n/* harmony import */ var _sprites_whip3_left_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_sprites_whip3_left_png__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _sprites_whip3_right_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sprites/whip3_right.png */ \"./src/sprites/whip3_right.png\");\n/* harmony import */ var _sprites_whip3_right_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_sprites_whip3_right_png__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _sprites_jump_left_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../sprites/jump_left.png */ \"./src/sprites/jump_left.png\");\n/* harmony import */ var _sprites_jump_left_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_sprites_jump_left_png__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _sprites_jump_right_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../sprites/jump_right.png */ \"./src/sprites/jump_right.png\");\n/* harmony import */ var _sprites_jump_right_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_sprites_jump_right_png__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _sprites_fall_left_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../sprites/fall_left.png */ \"./src/sprites/fall_left.png\");\n/* harmony import */ var _sprites_fall_left_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_sprites_fall_left_png__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _sprites_fall_right_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../sprites/fall_right.png */ \"./src/sprites/fall_right.png\");\n/* harmony import */ var _sprites_fall_right_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_sprites_fall_right_png__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _sprites_damage_left_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../sprites/damage_left.png */ \"./src/sprites/damage_left.png\");\n/* harmony import */ var _sprites_damage_left_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_sprites_damage_left_png__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _sprites_damage_right_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../sprites/damage_right.png */ \"./src/sprites/damage_right.png\");\n/* harmony import */ var _sprites_damage_right_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_sprites_damage_right_png__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _sprites_dead_left_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../sprites/dead_left.png */ \"./src/sprites/dead_left.png\");\n/* harmony import */ var _sprites_dead_left_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_sprites_dead_left_png__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _sprites_dead_right_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../sprites/dead_right.png */ \"./src/sprites/dead_right.png\");\n/* harmony import */ var _sprites_dead_right_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_sprites_dead_right_png__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _sprites_background_outside_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../sprites/background-outside.png */ \"./src/sprites/background-outside.png\");\n/* harmony import */ var _sprites_background_outside_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_sprites_background_outside_png__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _sprites_green_stone_tile_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../sprites/green-stone-tile.png */ \"./src/sprites/green-stone-tile.png\");\n/* harmony import */ var _sprites_green_stone_tile_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_sprites_green_stone_tile_png__WEBPACK_IMPORTED_MODULE_23__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst walk1LeftImg = new Image();\nwalk1LeftImg.src = _sprites_walk1_left_png__WEBPACK_IMPORTED_MODULE_0___default.a;\nconst walk1RightImg = new Image();\nwalk1RightImg.src = _sprites_walk1_right_png__WEBPACK_IMPORTED_MODULE_1___default.a;\nconst walk2LeftImg = new Image();\nwalk2LeftImg.src = _sprites_walk2_left_png__WEBPACK_IMPORTED_MODULE_2___default.a;\nconst walk2RightImg = new Image();\nwalk2RightImg.src = _sprites_walk2_right_png__WEBPACK_IMPORTED_MODULE_3___default.a;\nconst walk3LeftImg = new Image();\nwalk3LeftImg.src = _sprites_walk3_left_png__WEBPACK_IMPORTED_MODULE_4___default.a;\nconst walk3RightImg = new Image();\nwalk3RightImg.src = _sprites_walk3_right_png__WEBPACK_IMPORTED_MODULE_5___default.a;\nconst walk4LeftImg = new Image();\nwalk4LeftImg.src = _sprites_walk4_left_png__WEBPACK_IMPORTED_MODULE_6___default.a;\nconst walk4RightImg = new Image();\nwalk4RightImg.src = _sprites_walk4_right_png__WEBPACK_IMPORTED_MODULE_7___default.a;\nconst whip1LeftImg = new Image();\nwhip1LeftImg.src = _sprites_whip1_left_png__WEBPACK_IMPORTED_MODULE_8___default.a;\nconst whip1RightImg = new Image();\nwhip1RightImg.src = _sprites_whip1_right_png__WEBPACK_IMPORTED_MODULE_9___default.a;\nconst whip2LeftImg = new Image();\nwhip2LeftImg.src = _sprites_whip2_left_png__WEBPACK_IMPORTED_MODULE_10___default.a;\nconst whip2RightImg = new Image();\nwhip2RightImg.src = _sprites_whip2_right_png__WEBPACK_IMPORTED_MODULE_11___default.a;\nconst whip3LeftImg = new Image();\nwhip3LeftImg.src = _sprites_whip3_left_png__WEBPACK_IMPORTED_MODULE_12___default.a;\nconst whip3RightImg = new Image();\nwhip3RightImg.src = _sprites_whip3_right_png__WEBPACK_IMPORTED_MODULE_13___default.a;\nconst jumpLeftImg = new Image();\njumpLeftImg.src = _sprites_jump_left_png__WEBPACK_IMPORTED_MODULE_14___default.a;\nconst jumpRightImg = new Image();\njumpRightImg.src = _sprites_jump_right_png__WEBPACK_IMPORTED_MODULE_15___default.a;\nconst fallLeftImg = new Image();\nfallLeftImg.src = _sprites_fall_left_png__WEBPACK_IMPORTED_MODULE_16___default.a;\nconst fallRightImg = new Image();\nfallRightImg.src = _sprites_fall_right_png__WEBPACK_IMPORTED_MODULE_17___default.a;\nconst damageLeftImg = new Image();\ndamageLeftImg.src = _sprites_damage_left_png__WEBPACK_IMPORTED_MODULE_18___default.a;\nconst damageRightImg = new Image();\ndamageRightImg.src = _sprites_damage_right_png__WEBPACK_IMPORTED_MODULE_19___default.a;\nconst deadLeftImg = new Image();\ndeadLeftImg.src = _sprites_dead_left_png__WEBPACK_IMPORTED_MODULE_20___default.a;\nconst deadRightImg = new Image();\ndeadRightImg.src = _sprites_dead_right_png__WEBPACK_IMPORTED_MODULE_21___default.a;\n\nconst bg1Img = new Image();\nbg1Img.src = _sprites_background_outside_png__WEBPACK_IMPORTED_MODULE_22___default.a;\nconst greenStoneTileImg = new Image();\ngreenStoneTileImg.src = _sprites_green_stone_tile_png__WEBPACK_IMPORTED_MODULE_23___default.a;\n\nconst characterWalkingLeft = [walk1LeftImg, walk2LeftImg, walk3LeftImg, walk4LeftImg];\nconst characterWalkingRight = [walk1RightImg, walk2RightImg, walk3RightImg, walk4RightImg];\nconst characterWhipLeft = [whip1LeftImg, whip2LeftImg, whip3LeftImg];\nconst characterWhipRight = [whip1RightImg, whip2RightImg, whip3RightImg];\nconst characterJumpLeft = [jumpLeftImg, fallLeftImg];\nconst characterJumpRight = [jumpRightImg, fallRightImg];\nconst characterDamageLeft = [damageLeftImg];\nconst characterDamageRight = [damageRightImg];\nconst characterDeadLeft = [deadLeftImg];\nconst characterDeadRight = [deadRightImg];\n\nconst environmentImgs = [greenStoneTileImg];\n\nconst bgImgs = [bg1Img];\n\n\n//# sourceURL=webpack:///./src/js/img-loader.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_reset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/reset */ \"./src/css/reset.css\");\n/* harmony import */ var _css_reset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_reset__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style */ \"./src/css/style.css\");\n/* harmony import */ var _css_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/js/game.js\");\n//TinyVania by Lance Smith\n//Entry file\n\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"game\");\n  const game = new _game__WEBPACK_IMPORTED_MODULE_2__[\"default\"](canvas);\n});\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/level-loader.js":
/*!********************************!*\
  !*** ./src/js/level-loader.js ***!
  \********************************/
/*! exports provided: levels, parseLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"levels\", function() { return levels; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseLevel\", function() { return parseLevel; });\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ \"./src/js/entity.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/js/util.js\");\n/* harmony import */ var _levels_level01__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../levels/level01 */ \"./src/levels/level01.txt\");\n/* harmony import */ var _img_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img-loader */ \"./src/js/img-loader.js\");\n\n\n\n\n\n\nconst levels = {\n  1: _levels_level01__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\n\nconst parseLevel = levelData => {\n  let tiles = [];\n  let killVolumes = [];\n  const tileSize = 40;\n  let depth = 0;\n  let stride = 0;\n\n  let level = levelData.split(\"\");\n  for (let i = 0; i < level.length; i++) {\n    switch (level[i]) {\n      case \"\\n\":\n        stride = 0;\n        depth++;\n        break;\n      case \"x\":\n        tiles.push(new _entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          size: { w: tileSize, h: tileSize },\n          pos: { x: stride * tileSize, y: depth * tileSize },\n          vel: { x: 0, y: 0 },\n          color: Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"randomColor\"])(),\n          sprites: _img_loader__WEBPACK_IMPORTED_MODULE_3__[\"environmentImgs\"],\n          spriteOffset: {\n            x: 0,\n            y: 0,\n            w: tileSize,\n            h: tileSize\n          }\n        }));\n        stride++;\n        break;\n      case \"0\":\n        killVolumes.push(new _entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          size: { w: tileSize, h: tileSize },\n          pos: { x: stride * tileSize, y: depth * tileSize },\n          vel: { x: 0, y: 0 },\n          color: Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"randomColor\"])(),\n          spriteOffset: {\n            x: 0,\n            y: 0,\n            w: tileSize,\n            h: tileSize\n          }\n        }));\n        stride++;\n        break;\n      case \" \":\n        stride++;\n        break;\n      default:\n        console.warn(\"Unhandled level character!\");\n        break;\n    }\n  }\n\n  return { tiles, killVolumes };\n};\n\n\n//# sourceURL=webpack:///./src/js/level-loader.js?");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/*! exports provided: controllerResets, PLAYER_STATES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"controllerResets\", function() { return controllerResets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLAYER_STATES\", function() { return PLAYER_STATES; });\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ \"./src/js/entity.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ \"./src/js/controller.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ \"./src/js/util.js\");\n/* harmony import */ var _img_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img-loader */ \"./src/js/img-loader.js\");\n\n\n\n\n\nconst jumpAmt = -50;\nconst controllerResets = {\n  attack: true,\n  jump: true\n};\n\nconst PLAYER_STATES = {\n  IDLE_LEFT: \"IDLE_LEFT\",\n  IDLE_RIGHT: \"IDLE_RIGHT\",\n  RUNNING_LEFT: \"RUNNING_LEFT\",\n  RUNNING_RIGHT: \"RUNNING_RIGHT\",\n  JUMPING_LEFT: \"JUMPING_LEFT\",\n  JUMPING_RIGHT: \"JUMPING_RIGHT\",\n  FALLING_LEFT: \"FALLING_LEFT\",\n  FALLING_RIGHT: \"FALLING_RIGHT\",\n  ATTACKING_LEFT: \"ATTACKING_LEFT\",\n  ATTACKING_RIGHT: \"ATTACKING_RIGHT\",\n  DAMAGED_LEFT: \"DAMAGED_LEFT\",\n  DAMAGED_RIGHT: \"DAMAGED_RIGHT\",\n  DEAD_LEFT: \"DEAD_LEFT\",\n  DEAD_RIGHT: \"DEAD_RIGHT\"\n};\n\nclass Player extends _entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(canvas) {\n    let startVals = {\n      size: { w: 58, h: 107 },\n      pos: { x: canvas.width / 2, y: canvas.height / 2 },\n      vel: { x: 0, y: 0 },\n      color: Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"randomColor\"])(),\n      sprites: _img_loader__WEBPACK_IMPORTED_MODULE_3__[\"characterWalkingRight\"],\n      spriteOffset: { x: -102, y: -12, w: 260, h: 119.6 }\n    };\n    super(startVals);\n    this.moveAmt = 5;\n    this.playerState = PLAYER_STATES.IDLE_LEFT;\n  }\n\n  update() {\n    switch (this.playerState) {\n      case PLAYER_STATES.IDLE_RIGHT:\n        this.sprites = _img_loader__WEBPACK_IMPORTED_MODULE_3__[\"characterWalkingRight\"];\n        break;\n      case PLAYER_STATES.IDLE_LEFT:\n        this.sprites = _img_loader__WEBPACK_IMPORTED_MODULE_3__[\"characterWalkingLeft\"];\n        break;\n      default:\n        this.sprites = [this.nullImg];\n        break;\n    }\n  }\n\n  input() {\n    if (_controller__WEBPACK_IMPORTED_MODULE_1__[\"userController\"].right) {\n      this.spriteIdx = 0;\n      this.pos.x += this.moveAmt;\n      this.playerState = PLAYER_STATES.IDLE_RIGHT;\n    }\n    if (_controller__WEBPACK_IMPORTED_MODULE_1__[\"userController\"].left) {\n      this.spriteIdx = 0;\n      this.pos.x -= this.moveAmt;\n      this.playerState = PLAYER_STATES.IDLE_LEFT;\n    }\n\n    if ((_controller__WEBPACK_IMPORTED_MODULE_1__[\"userController\"].attack) && (controllerResets.attack)) {\n      controllerResets.attack = false;\n      console.log(\"attack!\"); //for testing\n      setTimeout(() => {\n        controllerResets.attack = true;\n      }, 1000);\n    }\n\n    if ((_controller__WEBPACK_IMPORTED_MODULE_1__[\"userController\"].jump) && (controllerResets.jump)) {\n      controllerResets.jump = false;\n      this.vel.y = jumpAmt;\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n\n//# sourceURL=webpack:///./src/js/player.js?");

/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/*! exports provided: globals, isObjEmpty, randomColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"globals\", function() { return globals; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObjEmpty\", function() { return isObjEmpty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomColor\", function() { return randomColor; });\nconst globals = {\n  screenWidth: 1024,\n  screenHeight: 768,\n  gravity: 15,\n  maxVelocity: 100,\n  transparentColor: \"#FFFFFFFF\"\n};\n\nconst isObjEmpty = obj => {\n  for (let key in obj) {\n    if (obj.hasOwnProperty(key)) return false;\n  }\n  return true;\n};\n\nconst randomColor = () => {\n  const vals = [\n    \"0\", \"1\", \"2\", \"3\",\n    \"4\", \"5\", \"6\", \"7\",\n    \"8\", \"9\", \"A\", \"B\",\n    \"C\", \"D\", \"E\", \"F\"\n  ];\n\n  const randR =\n    vals[Math.floor(Math.random() * vals.length)] +\n    vals[Math.floor(Math.random() * vals.length)];\n  const randG =\n    vals[Math.floor(Math.random() * vals.length)] +\n    vals[Math.floor(Math.random() * vals.length)];\n  const randB =\n    vals[Math.floor(Math.random() * vals.length)] +\n    vals[Math.floor(Math.random() * vals.length)];\n\n  return (\"#\" + randR + randG + randB);\n};\n\n\n//# sourceURL=webpack:///./src/js/util.js?");

/***/ }),

/***/ "./src/levels/level01.txt":
/*!********************************!*\
  !*** ./src/levels/level01.txt ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\nx                                                          x\\nx                                                          x\\nx                                                          x\\nx                                                          x\\nx                                                          x\\nx                                                          x\\nx                                                          x\\nx                                                          x\\nx                                                          x\\nx                                                          x\\nx                                                          x\\nx                                                xxx       x\\nx                                    xxx   xxx             x\\nx                                 xxx                      x\\nx                                                          x\\nx                             xxx                          x\\nxxxxxxx    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\n\\n\\n000000000000000000000000000000000000000000000000000000000000\\n000000000000000000000000000000000000000000000000000000000000\\n000000000000000000000000000000000000000000000000000000000000\\n\");\n\n//# sourceURL=webpack:///./src/levels/level01.txt?");

/***/ }),

/***/ "./src/sprites/background-outside.png":
/*!********************************************!*\
  !*** ./src/sprites/background-outside.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"79de3c21f35df8710573cb0c54d66bc9.png\";\n\n//# sourceURL=webpack:///./src/sprites/background-outside.png?");

/***/ }),

/***/ "./src/sprites/damage_left.png":
/*!*************************************!*\
  !*** ./src/sprites/damage_left.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fe3bf28c3aaf375d4a260d0e2b07e494.png\";\n\n//# sourceURL=webpack:///./src/sprites/damage_left.png?");

/***/ }),

/***/ "./src/sprites/damage_right.png":
/*!**************************************!*\
  !*** ./src/sprites/damage_right.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"30cb43737e3d03bdec3a0169988f437b.png\";\n\n//# sourceURL=webpack:///./src/sprites/damage_right.png?");

/***/ }),

/***/ "./src/sprites/dead_left.png":
/*!***********************************!*\
  !*** ./src/sprites/dead_left.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"067ce2e2b02f648cf15ea000fa0f3191.png\";\n\n//# sourceURL=webpack:///./src/sprites/dead_left.png?");

/***/ }),

/***/ "./src/sprites/dead_right.png":
/*!************************************!*\
  !*** ./src/sprites/dead_right.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b7555447601152948402dc2bc6897339.png\";\n\n//# sourceURL=webpack:///./src/sprites/dead_right.png?");

/***/ }),

/***/ "./src/sprites/fall_left.png":
/*!***********************************!*\
  !*** ./src/sprites/fall_left.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"df90dee4327431d723ba87ca0d162682.png\";\n\n//# sourceURL=webpack:///./src/sprites/fall_left.png?");

/***/ }),

/***/ "./src/sprites/fall_right.png":
/*!************************************!*\
  !*** ./src/sprites/fall_right.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"7b1c0ee3001f257ad237b42c29c20fe2.png\";\n\n//# sourceURL=webpack:///./src/sprites/fall_right.png?");

/***/ }),

/***/ "./src/sprites/green-stone-tile.png":
/*!******************************************!*\
  !*** ./src/sprites/green-stone-tile.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"253fc7e3862fe8ed1e61f238c0f003e0.png\";\n\n//# sourceURL=webpack:///./src/sprites/green-stone-tile.png?");

/***/ }),

/***/ "./src/sprites/jump_left.png":
/*!***********************************!*\
  !*** ./src/sprites/jump_left.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"9ab17768b59d068bf1a2f2c89bff9312.png\";\n\n//# sourceURL=webpack:///./src/sprites/jump_left.png?");

/***/ }),

/***/ "./src/sprites/jump_right.png":
/*!************************************!*\
  !*** ./src/sprites/jump_right.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"dec00859ad52bb1e136b3a9f2c1b8180.png\";\n\n//# sourceURL=webpack:///./src/sprites/jump_right.png?");

/***/ }),

/***/ "./src/sprites/list-icon.png":
/*!***********************************!*\
  !*** ./src/sprites/list-icon.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"0a7735c8fc76691aaeb26cc63e324cd8.png\";\n\n//# sourceURL=webpack:///./src/sprites/list-icon.png?");

/***/ }),

/***/ "./src/sprites/walk1_left.png":
/*!************************************!*\
  !*** ./src/sprites/walk1_left.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f3dd0fcf537f2cc47580485e604490d2.png\";\n\n//# sourceURL=webpack:///./src/sprites/walk1_left.png?");

/***/ }),

/***/ "./src/sprites/walk1_right.png":
/*!*************************************!*\
  !*** ./src/sprites/walk1_right.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"a8fbc9b02238e9dedb610f855de13d55.png\";\n\n//# sourceURL=webpack:///./src/sprites/walk1_right.png?");

/***/ }),

/***/ "./src/sprites/walk2_left.png":
/*!************************************!*\
  !*** ./src/sprites/walk2_left.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"613a8b92c0bbec16d99911568027f8dc.png\";\n\n//# sourceURL=webpack:///./src/sprites/walk2_left.png?");

/***/ }),

/***/ "./src/sprites/walk2_right.png":
/*!*************************************!*\
  !*** ./src/sprites/walk2_right.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3ea8fee3652f90d58ede87caf5d65671.png\";\n\n//# sourceURL=webpack:///./src/sprites/walk2_right.png?");

/***/ }),

/***/ "./src/sprites/walk3_left.png":
/*!************************************!*\
  !*** ./src/sprites/walk3_left.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c780aecd7e84591dadbfa316e038485c.png\";\n\n//# sourceURL=webpack:///./src/sprites/walk3_left.png?");

/***/ }),

/***/ "./src/sprites/walk3_right.png":
/*!*************************************!*\
  !*** ./src/sprites/walk3_right.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"be8b93470d408bc8beeb951096838ec2.png\";\n\n//# sourceURL=webpack:///./src/sprites/walk3_right.png?");

/***/ }),

/***/ "./src/sprites/walk4_left.png":
/*!************************************!*\
  !*** ./src/sprites/walk4_left.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"098b5f575117f6f599d634107e3fc28c.png\";\n\n//# sourceURL=webpack:///./src/sprites/walk4_left.png?");

/***/ }),

/***/ "./src/sprites/walk4_right.png":
/*!*************************************!*\
  !*** ./src/sprites/walk4_right.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"95425cd4d0e08f6e5cbaa1a8e3d41983.png\";\n\n//# sourceURL=webpack:///./src/sprites/walk4_right.png?");

/***/ }),

/***/ "./src/sprites/whip1_left.png":
/*!************************************!*\
  !*** ./src/sprites/whip1_left.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"cfb3ed466205d8ba87fea0ab2f5daccc.png\";\n\n//# sourceURL=webpack:///./src/sprites/whip1_left.png?");

/***/ }),

/***/ "./src/sprites/whip1_right.png":
/*!*************************************!*\
  !*** ./src/sprites/whip1_right.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e4682f9be3101c7f5932704622fff3bb.png\";\n\n//# sourceURL=webpack:///./src/sprites/whip1_right.png?");

/***/ }),

/***/ "./src/sprites/whip2_left.png":
/*!************************************!*\
  !*** ./src/sprites/whip2_left.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"cb4be2fb83eec03bfcf6554858b8dc1f.png\";\n\n//# sourceURL=webpack:///./src/sprites/whip2_left.png?");

/***/ }),

/***/ "./src/sprites/whip2_right.png":
/*!*************************************!*\
  !*** ./src/sprites/whip2_right.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"692826e49a2f8a4ccebc057efe2b10e8.png\";\n\n//# sourceURL=webpack:///./src/sprites/whip2_right.png?");

/***/ }),

/***/ "./src/sprites/whip3_left.png":
/*!************************************!*\
  !*** ./src/sprites/whip3_left.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8a9f2dd12ce4ad7d668d0baee763932b.png\";\n\n//# sourceURL=webpack:///./src/sprites/whip3_left.png?");

/***/ }),

/***/ "./src/sprites/whip3_right.png":
/*!*************************************!*\
  !*** ./src/sprites/whip3_right.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"16f3abf66ecd0aaf28dc3cf673fa78cf.png\";\n\n//# sourceURL=webpack:///./src/sprites/whip3_right.png?");

/***/ })

/******/ });