(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("maxlengthContentEditableModule", [], factory);
	else if(typeof exports === 'object')
		exports["maxlengthContentEditableModule"] = factory();
	else
		root["maxlengthContentEditableModule"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(24)('wks');
var uid = __webpack_require__(12);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(11);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(33);
var toPrimitive = __webpack_require__(34);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(17)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(24)('keys');
var uid = __webpack_require__(12);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(2);
var hide = __webpack_require__(3);
var redefine = __webpack_require__(19);
var ctx = __webpack_require__(20);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var hide = __webpack_require__(3);
var has = __webpack_require__(7);
var SRC = __webpack_require__(12)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(2).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(35);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(41);
var defined = __webpack_require__(9);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(8);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(15) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(7);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(9);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxlengthContentEditable = undefined;

__webpack_require__(29);

function maxlengthContentEditable() {
  var editableElements = document.querySelectorAll('div[contenteditable="true"]');

  var clipboardEvents = ['copy', 'paste', 'cut'];
  var keyboardEvents = ['keyup', 'keypress', 'keydown', 'blur', 'change'];

  Array.from(editableElements).forEach(function (element) {
    clipboardEvents.forEach(function (clipboardEvent) {
      element.addEventListener(clipboardEvent, clipboardEventHandler);
    });
    keyboardEvents.forEach(function (keyboardEvent) {
      element.addEventListener(keyboardEvent, generalEventKeyHandler);
    });
  });

  /**
     *callback for 'cut', 'copy' , 'paste' events
     *this function will prevent the basic behavior
      of an event if the size of the text present in the element
      plus the size of the text present in the clipboard exceeds exceeds the maxlength alowed
     * @param {any} event
     */
  function clipboardEventHandler(event) {
    // IE
    if (window.clipboardData) {
      if (window.clipboardData.getData('Text').length + this.textContent.length > this.dataset.maxLength) {
        event.preventDefault();
      }
    }
    // Chrome , Firefox
    if (event.clipboardData) {
      if (event.clipboardData.getData('Text').length + this.textContent.length > this.dataset.maxLength && event.keyCode !== 8) {
        event.preventDefault();
      }
    }
  }
  /**
     *callback for 'keyup', 'keypress', 'keydown', 'blur', 'change' events
     *this function will prevent the basic behavior
      of an event if the size of the text present in the element
      plus the size of the character typed exceeds the maxlength alowed
     * @param {any} event
     */
  function generalEventKeyHandler(event) {
    if (this.dataset.maxLength && this.textContent.length == this.dataset.maxLength && !isAllowedKeyCode(event)) {
      event.preventDefault();
    }
  }
  /**
   * Check if a keycode is allowed when max limit is reached
   * 8 : Backspace
   * 37: LeftKey
   * 38: UpKey
   * 39: RightKey
   * 40: DownKey
   * ctrlKey for control key
   * metakey for command key on mac keyboard
   * @param {any} eventKeycode
   * @returns boolean
   */
  function isAllowedKeyCode(event) {
    return event.keyCode === 8 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 37 || event.keyCode === 40 || event.ctrlKey || event.metaKey;
  }
} /*
   *   Copyright (C) 2017  Stephen BAROAN
   *
   *    The JavaScript code in this page is open source software licensed under MIT license
   *    References about this code and its license, see:
   *
   *    https://github.com/stephen31/maxlength-contenteditable
   *
   */
/* eslint no-use-before-define:0 */

exports.maxlengthContentEditable = maxlengthContentEditable;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
__webpack_require__(46);
module.exports = __webpack_require__(2).Array.from;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(31)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(32)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(8);
var defined = __webpack_require__(9);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(15);
var $export = __webpack_require__(16);
var redefine = __webpack_require__(19);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(13);
var $iterCreate = __webpack_require__(36);
var setToStringTag = __webpack_require__(26);
var getPrototypeOf = __webpack_require__(45);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(17)(function () {
  return Object.defineProperty(__webpack_require__(18)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(37);
var descriptor = __webpack_require__(11);
var setToStringTag = __webpack_require__(26);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(3)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(5);
var dPs = __webpack_require__(38);
var enumBugKeys = __webpack_require__(25);
var IE_PROTO = __webpack_require__(14)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(18)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(44).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(5);
var getKeys = __webpack_require__(39);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(40);
var enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(7);
var toIObject = __webpack_require__(21);
var arrayIndexOf = __webpack_require__(42)(false);
var IE_PROTO = __webpack_require__(14)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(21);
var toLength = __webpack_require__(23);
var toAbsoluteIndex = __webpack_require__(43);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(8);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(7);
var toObject = __webpack_require__(27);
var IE_PROTO = __webpack_require__(14)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(20);
var $export = __webpack_require__(16);
var toObject = __webpack_require__(27);
var call = __webpack_require__(47);
var isArrayIter = __webpack_require__(48);
var toLength = __webpack_require__(23);
var createProperty = __webpack_require__(49);
var getIterFn = __webpack_require__(50);

$export($export.S + $export.F * !__webpack_require__(52)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(13);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(4);
var createDesc = __webpack_require__(11);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(51);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(13);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(22);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ })
/******/ ]);
});
},{}],2:[function(require,module,exports){
const maxlengthContentEditableLib = require('maxlength-contenteditable');
const mainInput = document.getElementById('main');
const sideBarWithColNumbers = document.getElementById('for-numbers-of-cols');
const HeaderBarWithRowsAndSections = document.getElementById('top-header');
let copyBuffer;
const textForEmptyInput = 'justEmpty';
let focusedElements = [];
const localStorageDataForApp = localStorage.getItem('seoApp');
const arrOfCellsObjectsStorage = JSON.parse(localStorageDataForApp);




for(let i = 0; i < 14; i++) {
    for(let j = 0; j < 500; j++) {

        const newElem = createInput();
        newElem.classList.add(`row${i + 1}`);
        newElem.classList.add(`col${mainInput.childNodes[i].childElementCount + 1}`);
        newElem.col = mainInput.childNodes[i].childElementCount + 1;
        newElem.row = i + 1;
        newElem.id = `row${newElem.row}col${newElem.col}`;
        newElem.innerText = textForEmptyInput;
        newElem.classList.add('cell-without-text');
        if(arrOfCellsObjectsStorage !== null) {
            for (let i = 0; i < arrOfCellsObjectsStorage.length; i++) {
                const found = arrOfCellsObjectsStorage[i];
                if (found.col === newElem.col && found.row === newElem.row) {
                    if (found.value) {
                        newElem.innerText = found.value;
                        newElem.classList.remove('cell-without-text');
                        newElem.dataset.content = found.value.length;
                    }
                }
            }
        }

        mainInput.childNodes[i].appendChild(newElem);
        if (i < 1) {
            const numberOfCol = createNumberOfCell();
            numberOfCol.innerText = mainInput.childNodes[i].childElementCount;
            numberOfCol.id = `col${mainInput.childNodes[i].childElementCount}`;
            numberOfCol.col = mainInput.childNodes[i].childElementCount;
            sideBarWithColNumbers.appendChild(numberOfCol);

            const checkbox = createCheckbox();
            checkbox.setAttribute('name', `col${mainInput.childNodes[i].childElementCount}`);
            numberOfCol.appendChild(checkbox);
            moreActionsElemCreate(numberOfCol);
        }

        if (newElem.row === 6 || newElem.row === 7) {
            newElem.setAttribute('data-max-length', '30');
        } else if (newElem.row === 8 || newElem.row === 9) {
            newElem.setAttribute('data-max-length', '90');
        } else if (newElem.row === 11 || newElem.row === 12) {
            newElem.setAttribute('data-max-length', '15');
        }
    }
    mainInput.childNodes[i].appendChild(addOneMoreInput());
}


function addInput() {
    const placeBefore = document.getElementsByClassName('addInput');

    const colNumber = createNumberOfCell();
    const blockToAppendColNumber = document.getElementById('for-numbers-of-cols');
    colNumber.col = mainInput.childNodes[1].childElementCount;
    colNumber.innerText = mainInput.childNodes[1].childElementCount;
    colNumber.setAttribute('id', `col${mainInput.childNodes[1].childElementCount}`);
    const checkbox = createCheckbox();
    checkbox.setAttribute('name', `col${mainInput.childNodes[1].childElementCount}`);
    colNumber.appendChild(checkbox);
    blockToAppendColNumber.appendChild(colNumber);
    moreActionsElemCreate(colNumber);

    for(let i = 0; i < mainInput.childNodes.length; i++) {
        const newElem = createInput();
        newElem.classList.add(`row${i + 1}`);
        newElem.row = i + 1;
        newElem.col = mainInput.childNodes[i].childElementCount;
        newElem.id = `row${newElem.row}col${newElem.col}`;
        newElem.classList.add(`col${mainInput.childNodes[i].childElementCount}`);
        newElem.classList.add('cell-without-text');
        if (newElem.row === 6 || newElem.row === 7) {
            newElem.setAttribute('data-max-length', '30');
        } else if (newElem.row === 8 || newElem.row === 9) {
            newElem.setAttribute('data-max-length', '90');
        } else if (newElem.row === 11 || newElem.row === 12) {
            newElem.setAttribute('data-max-length', '15');
        }
        mainInput.childNodes[i].insertBefore(newElem, placeBefore[i]);newElem.innerText = textForEmptyInput;
    }

}

maxlengthContentEditableLib.maxlengthContentEditable(); // browserify main.js -o bundle.js

function createInput() {
    const input = document.createElement('p');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'input-cell');
    input.setAttribute('data-content', '0');
    input.setAttribute('contenteditable','false');

    return input;
}

function createNumberOfCell() {
    const input = document.createElement('p');
    input.setAttribute('class', 'for-col-of-cel');

    return input;
}

function createCheckbox() {
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('checked', '');
    input.setAttribute('class', 'cols-checkbox');

    return input;
}

function addOneMoreInput() {
    const plus = document.createElement('h4');
    plus.innerText = '+';
    plus.setAttribute('class', 'addInput');

    return plus;
}

function removeHideEmtyCellText() {

    for (let i = 0; i < focusedElements.length; i++) {
        const input = document.getElementById(focusedElements[i]);
        if (input.innerText === '' || input.innerText === textForEmptyInput) {
            input.innerText = textForEmptyInput;
            input.classList.add('cell-without-text');
            input.dataset.content = 0;
        }
    }
    focusedElements = [];
}

document.addEventListener('click', (event) => {


    const inputs = document.getElementsByClassName('input-cell');
    const prevFocColCellNumber = document.getElementsByClassName('focused-col');
    const prevFocRowCellNumber = document.getElementsByClassName('focused-row');

    const colMenu = document.getElementById('col-menu-with-actions');
    colMenu.style.left = `-9999px`;
    colMenu.style.top = `-9999px`;
    const focusedMoreMenu = document.getElementsByClassName('more-actions-btn-focused');
    for(let i = 0; i < focusedMoreMenu.length; i++) {
        focusedMoreMenu[i].classList.remove('more-actions-btn-focused');
    }

    const rowMenu = document.getElementById('row-menu-with-actions');
    rowMenu.style.left = `-9999px`;
    rowMenu.style.top = `-9999px`;
    const focusedMoreMenuRow = document.getElementsByClassName('more-actions-btn-rows-focused');
    for(let i = 0; i < focusedMoreMenuRow.length; i++) {
        focusedMoreMenuRow[i].classList.remove('more-actions-btn-rows-focused');
    }

    if(event.target.classList.contains('more-actions-btn')) {
        event.target.classList.add('more-actions-btn-focused');
        showColMenu(event.target.col, event.pageX, event.pageY);
    }

    if(event.target.classList.contains('more-actions-btn-rows')) {
        event.target.classList.add('more-actions-btn-rows-focused');
        const arr = event.target.parentNode.parentNode.id.split('row');
        const id = arr.join('');
        showRowMenu(id, event.pageX, event.pageY);
    }

    if(event.target.id === 'add-col-with-plus') {
        mutateCellToCellWithPluses(event.target.parentNode.col);
    }

    if(event.target.id === 'add-col-with-square-brackets') {
        shiftCols(event.target.parentNode.col, 1);
        createStringWithSquadBrackets(event.target.parentNode.col);
    }

    if(event.target.id === 'add-col-with-quotes') {
        shiftCols(event.target.parentNode.col, 1);
        createStringWithDoubleQuotes(event.target.parentNode.col);
    }

    if(event.target.id === 'delete-col-with-shift') {
        removeColum(event.target.parentNode.col);
    }


    if(event.target.id === 'add-empty-col') {
        shiftCols(event.target.parentNode.col, 1);
    }


    if(event.target.id === 'clean-col') {
        cleanCol(event.target.parentNode.col);
    }
    if(event.target.id === 'clean-row') {
        cleanRow(event.target.parentNode.row);
    }

    if(event.target.id === 'add-two-cols-with-plus') {
        shiftCols(event.target.parentNode.col, 2);
        createStringWithSquadBrackets(event.target.parentNode.col);
        createStringWithDoubleQuotesOverTwo(event.target.parentNode.col);

    }


    if(event.target.id === 'get-data-from-adGroup') {
        const rowAdGroupCells = document.getElementsByClassName('row3');
        const rowDescription1AdGroupCells = document.getElementsByClassName('row8');
        for (let i = 0; i < rowAdGroupCells.length; i++) {
            if (rowAdGroupCells[i].innerText === textForEmptyInput) {
                rowDescription1AdGroupCells[i].innerText = rowAdGroupCells[i].innerText;
                focusedElements.push(rowDescription1AdGroupCells[i].id);
            } else {
                rowDescription1AdGroupCells[i].innerText = rowAdGroupCells[i].innerText;
                rowDescription1AdGroupCells[i].classList.remove('cell-without-text');
                rowDescription1AdGroupCells[i].dataset.content = rowDescription1AdGroupCells[i].innerText.length;
                rowDescription1AdGroupCells[i].focus();
            }
        }
        removeHideEmtyCellText();
    }

    if (event.target.id === 'save-btn'){
        const arrOfCells = getAllInputsValuesArrForStorage();
        localStorage.setItem('seoApp', JSON.stringify(arrOfCells));
    }

    if (event.target.id === 'clear-localStorage'){
        if(confirm("Хотите удалить содержимое всеx ячеeк и очистить Локальное хранилище?")) {
            for(let i = 0; i < inputs.length; i++) {
                inputs[i].classList.add('cell-without-text');
                inputs[i].innerText = textForEmptyInput;
                inputs[i].dataset.content = 0;
            }
            localStorage.setItem('seoApp', JSON.stringify([]));
        }
    }

    if (event.target.id === 'all-cols') {
        const cols = document.getElementsByClassName('cols-checkbox');
        if (event.target.checked === true) {
            for (let i = 0; i < cols.length; i++) {
                if (cols[i].checked === false) {
                    cols[i].click();
                }
            }
        } else {
            for (let i = 0; i < cols.length; i++) {
                if (cols[i].checked === true) {
                    cols[i].click();
                }
            }
        }
    }

   if (event.target.id === 'all-rows') {
        const rows = document.getElementsByClassName('row-checkbox');
        if (event.target.checked === true) {
            for (let i = 0; i < rows.length; i++) {
                if (rows[i].checked === false) {
                    rows[i].click();
                }
            }
        } else {
            for (let i = 0; i < rows.length; i++) {
                if (rows[i].checked === true) {
                    rows[i].click();
                }
            }
        }
    }

    if (prevFocColCellNumber.length && prevFocRowCellNumber.length) {
        prevFocColCellNumber[0].classList.remove('focused-col');
        prevFocRowCellNumber[0].classList.remove('focused-row');
    }

    if (event.target.classList.contains('addInput')) {
        addInput();
    }

    if (event.target.classList.contains('input-cell')) {

        for(let i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute('contenteditable','false');
        }
        changeFocuseOnRowSidePanel(`row${event.target.row}`);
        changeFocuseOnColSidePanel(`col${event.target.col}`);
        event.target.classList.remove('cell-without-text');
        if (event.target.innerText === textForEmptyInput) {
            event.target.innerText = '';
        }
        event.target.setAttribute('contenteditable','true');
        event.target.focus();
    }

    if(event.target.id === 'btn-create-document'){
        sendRequest(prompt("Введите имя документа"));
    }




});

document.addEventListener('keydown', (e) => {
    if(e.key === 'Tab'){
        event.preventDefault();
        if(event.target.row && event.target.col) {
            const inputs = document.getElementsByClassName('input-cell');
            for(let i = 0; i < inputs.length; i++) {
                inputs[i].setAttribute('contenteditable','false');
            }
            if (event.target.row < 14) {

                changeFocuseOnRowSidePanel(`row${event.target.row + 1}`);

                const nextCell = document.getElementById(`row${event.target.row + 1}col${event.target.col}`);
                nextCell.setAttribute('contenteditable','true');
                nextCell.classList.remove('cell-without-text');
                if (nextCell.innerText === textForEmptyInput) {
                    nextCell.innerText = '';
                }
                setEndOfContenteditable(nextCell);
                nextCell.focus();
                const positionElem = getCoords(nextCell);
                window.scrollTo(positionElem.left - 500, positionElem.top - 300);
            } else if (event.target.row === 14) {
                if (document.getElementById(`row1col${event.target.col + 1}`)) {
                    changeFocuseOnRowSidePanel(`row1`);
                    changeFocuseOnColSidePanel(`col${event.target.col + 1}`);

                    const nextCell = document.getElementById(`row1col${event.target.col + 1}`);
                    nextCell.setAttribute('contenteditable', 'true');
                    nextCell.classList.remove('cell-without-text');
                    if (nextCell.innerText === textForEmptyInput) {
                        nextCell.innerText = '';
                    }

                    setEndOfContenteditable(nextCell);
                    nextCell.focus();
                    const positionElem = getCoords(nextCell);
                    window.scrollTo(positionElem.left - 500, positionElem.top - 300);
                } else {
                    const nextCell = document.getElementById(`row1col${event.target.col}`);
                    nextCell.setAttribute('contenteditable', 'true');
                    nextCell.classList.remove('cell-without-text');
                    if (nextCell.innerText === textForEmptyInput) {
                        nextCell.innerText = '';
                    }
                    setEndOfContenteditable(nextCell);
                    nextCell.focus();
                    const positionElem = getCoords(nextCell);
                    window.scrollTo(positionElem.left - 500, positionElem.top - 300);
                }
            }
        }
    }
    maxlengthContentEditableLib.maxlengthContentEditable();
});

document.addEventListener('paste', (event) => {
    event.preventDefault();

    if(event.target.row && event.target.col) {

    navigator.clipboard.readText()
        .then(text => {
            if (text) {
                copyBuffer = text;
            }

            const arrWithNewLine = copyBuffer.split('\n');
            if (arrWithNewLine.length) {
                for (let i = 0; i < arrWithNewLine.length; i++) {
                    const arrOfColRows = arrWithNewLine[i].split('\t');

                    if(arrOfColRows.length === 1) {
                        arrOfColRows[0] = checkJustEmpyCell(arrOfColRows[0]);
                        function checkJustEmpyCell(elemOfArr) {
                            let arr = [];
                            let str;
                            for(let i = 0; i <elemOfArr.length; i++) {
                                arr.push(elemOfArr.codePointAt(i));
                                str = arr.join('');
                            }
                            if (str === '13' || str === '1061171151166910911211612113') {
                                return 'justEmpty';
                            } else {
                                return elemOfArr;
                            }
                        }
                        const elem = document.getElementById(`row${event.target.row}col${event.target.col + i}`);

                        if (arrOfColRows[0].indexOf(String.fromCodePoint(13)) === arrOfColRows[0].length - 1) {
                            const arr = arrOfColRows[0].split(String.fromCodePoint(13));
                            arrOfColRows[0] = arr.join('');
                        }
                        elem.innerText = arrOfColRows[0];
                        elem.dataset.content = arrOfColRows[0].length;
                        elem.classList.remove('cell-without-text');
                        if (elem.innerText === textForEmptyInput) {
                            elem.innerText = '';
                        }
                        focusedElements.push(elem.id);

                        if (i === arrWithNewLine.length - 1) {
                            const elem = document.getElementById(`row${event.target.row}col${event.target.col + i}`);

                            elem.setAttribute('contenteditable', 'true');
                            setEndOfContenteditable(elem);
                            elem.classList.remove('cell-without-text');
                            if (elem.innerText === textForEmptyInput) {
                                elem.innerText = '';
                            }
                            elem.focus();
                            focusedElements.push(elem.id);
                            changeFocuseOnRowSidePanel(`row${event.target.row}`);
                            changeFocuseOnColSidePanel(`col${event.target.col + i}`);
                            elem.dataset.content = arrOfColRows[0].length;
                            const positionElem = getCoords(elem);

                            window.scrollTo(positionElem.left - 500, positionElem.top - 300);
                        }

                    } else {
                        if(arrWithNewLine[i].indexOf('\t') > -i) {
                            for (let j = 0; j < arrOfColRows.length; j++) {
                                const elem = document.getElementById(`row${event.target.row + j}col${event.target.col + i}`);
                                elem.innerText = arrOfColRows[j];
                                elem.dataset.content = arrOfColRows[j].length;
                                elem.classList.remove('cell-without-text');
                                if (elem.innerText === textForEmptyInput) {
                                    elem.innerText = '';
                                }
                                focusedElements.push(elem.id);

                                if (j === arrOfColRows.length - 1) {
                                    elem.dataset.content = arrOfColRows[j].length - 1;
                                }

                                if (i === arrWithNewLine.length - 1) {
                                    const elem = document.getElementById(`row${event.target.row + j}col${event.target.col + i}`);
                                    elem.setAttribute('contenteditable', 'true');
                                    setEndOfContenteditable(elem);
                                    elem.classList.remove('cell-without-text');
                                    if (elem.innerText === textForEmptyInput) {
                                        elem.innerText = '';
                                    }
                                    elem.focus();
                                    focusedElements.push(elem.id);
                                    changeFocuseOnRowSidePanel(`row${event.target.row + j}`);
                                    changeFocuseOnColSidePanel(`col${event.target.col + i}`);
                                    elem.dataset.content = arrOfColRows[j].length;
                                    const positionElem = getCoords(elem);
                                    window.scrollTo(positionElem.left - 500, positionElem.top - 300);
                                }

                            }
                        }
                    }
                }
            } else {
                event.target.classList.remove('cell-without-text');
                if (event.target.innerText === textForEmptyInput) {
                    event.target.innerText = '';
                }
                focusedElements.push(event.target.id);
                event.target = arrWithNewLine[0];
                event.target.dataset.content = arrWithNewLine[0].length;
            }
            removeHideEmtyCellText();
        })
        .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
    }
});

document.addEventListener('input', (event) => {
    const allInRow6 = document.getElementById('headline2').childNodes;

    if(event.target.classList.contains('row5')) {
        if(event.target.innerText.length > 30) {
            let arrOfRows = changeLongString(event.target.innerText);
            let row5 = arrOfRows[0].join(' ');
            let row6 = arrOfRows[1].join(' ');
            event.target.innerText = row5;
            for (let i = 0; i < allInRow6.length; i++) {
                if(allInRow6[i].col === event.target.col) {
                   allInRow6[i].innerText = row6;
                    allInRow6[i].dataset.content = row6.length;
                    allInRow6[i].classList.remove('cell-without-text');
                    allInRow6[i].setAttribute('contenteditable', 'true');
                    setEndOfContenteditable(allInRow6[i]);
                    allInRow6[i].focus();

                    const prevFocColCellNumber = document.getElementsByClassName('focused-col');
                    const prevFocRowCellNumber = document.getElementsByClassName('focused-row');
                    if (prevFocColCellNumber.length) {
                        prevFocColCellNumber[0].classList.remove('focused-col');
                        prevFocRowCellNumber[0].classList.remove('focused-row');
                    }
                    const rowNumberCellEl = document.getElementById(`row6`);
                    const colNumberCellEl = document.getElementById(`col${event.target.col}`);

                    rowNumberCellEl.classList.add('focused-row');
                    colNumberCellEl.classList.add('focused-col');
                }
            }
        }
    }

    if(event.target.classList.contains('row6') || event.target.classList.contains('row7')) {
        if(event.target.innerText.length  === 30) {
        }
    }

    if(event.target.classList.contains('input-cell')) {
        event.target.dataset.content = event.target.innerText.length;
    }
});

window.addEventListener('scroll', (e) => {
    const lastKnownScrollYPosition = -window.scrollY;
    const lastKnownScrollXPosition = -window.scrollX;
    sideBarWithColNumbers.style.top = `${lastKnownScrollYPosition}px`;
    HeaderBarWithRowsAndSections.style.left = `${lastKnownScrollXPosition}px`;
});


document.addEventListener('copy', (event) => {

    navigator.clipboard.readText()
        .then(text => {
            let arr = text.split(String.fromCodePoint(13, 10, 13, 10));
            let newString = arr.join(String.fromCodePoint(13, 10));
            copyBuffer = newString;

            navigator.clipboard.writeText(newString)
                .then(() => {
                })
                .catch(err => {
                    console.log('Something went wrong', err);
                });
        })
        .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
});

document.addEventListener('focusout', (event) => {
    if(event.target.classList.contains('input-cell')) {
        focusedElements.push(event.target.id);
        removeHideEmtyCellText();
    }
    const arrOfCells = getAllInputsValuesArrForStorage();
    localStorage.setItem('seoApp', JSON.stringify(arrOfCells));
});


function changeFocuseOnRowSidePanel(id) {
    const prevFocRowCellNumber = document.getElementsByClassName('focused-row');
    if (prevFocRowCellNumber.length) {
        for(let i = 0; i < prevFocRowCellNumber.length; i++) {
            prevFocRowCellNumber[i].classList.remove('focused-row');
        }
    }
    const rowNumberCellEl = document.getElementById(id);
    rowNumberCellEl.classList.add('focused-row');
}

function changeFocuseOnColSidePanel(id) {
    const prevFocColCellNumber = document.getElementsByClassName('focused-col');
    if (prevFocColCellNumber.length) {
        for(let i = 0; i < prevFocColCellNumber.length; i++) {
            prevFocColCellNumber[i].classList.remove('focused-col');
        }
    }
    const colNumberCellEl = document.getElementById(id);
    colNumberCellEl.classList.add('focused-col');
}

function setEndOfContenteditable(contentEditableElement) {
    var range,selection;
    if(document.createRange) {
        range = document.createRange();
        range.selectNodeContents(contentEditableElement);
        range.collapse(false);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

function changeLongString(string) {
    let result = [];
    let arrForRow5 = [];
    let arrForRow6 = [];

    const inpValue = string.split(' ');

    let indexOfLastWordInString = myMap(inpValue, function (word) {

        return word.length + 1;
    });
    for (let i = 0; i < inpValue.length; i++) {
        if (indexOfLastWordInString >= i) {
            arrForRow5.push(inpValue[i]);
        } else {
            arrForRow6.push(inpValue[i]);
        }
    }
    result.push(arrForRow5, arrForRow6);

    return result;
}

function myMap(arr, callback) {
    let lengthOf = 0;
    let index;
    for(let i = 0; i < arr.length; i++) {
        lengthOf = lengthOf + callback(arr[i]);
        if(lengthOf > 30) {
            index = i - 1;

            return index;
        }
    }
}

function reqListener () {
    console.log(this.responseText);
    window.open(this.responseText);
}

function sendRequest(title) {
    if(isNaN(title) == 'null') {
        return false;
    }

    const someElem = document.getElementsByClassName('input-cell');
    const allElements = [];
    for(let i = 0; i < someElem.length; i++) {
        if(document.querySelectorAll(`[name=col${someElem[i].col}]`)[0].checked && document.querySelectorAll(`[name=row${someElem[i].row}]`)[0].checked) {
            const el = {};
            el.col = someElem[i].col;
            el.row = someElem[i].row;
            el.fileTitle = title;
            if (someElem[i].innerText === textForEmptyInput) {
                el.value = '';
            } else {
                el.value = someElem[i].innerText;
            }
            allElements.push(el);
        }
    }

    let xhr = new XMLHttpRequest();
    var url = "https://seo-ad-app.herokuapp.com/users";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.addEventListener("load", reqListener);
    var data = JSON.stringify(allElements);
    xhr.send(data);
}

function cleanCol(col) {
    const cellsOfCurCol = document.getElementsByClassName(`col${col}`);
    for (let i = 0; i < cellsOfCurCol.length; i++) {
        const cell = cellsOfCurCol[i];
        cell.classList.add('cell-without-text');
        cell.innerText = textForEmptyInput;
        cell.dataset.content = '0';
    }
}

function getAllInputsValuesArrForStorage() {
    const someElem = document.getElementsByClassName('input-cell');
    const allElements = [];
    for(let i = 0; i < someElem.length; i++) {

        const el = {};
        el.col = someElem[i].col;
        el.row = someElem[i].row;
        if (someElem[i].innerText === textForEmptyInput) {
            el.value = ''
        } else {
            el.value = someElem[i].innerText;
        }
        allElements.push(el);
    }

    return allElements;
}

function getCoords(elem) { // кроме IE8-
    const box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };

}

//
// function addRemoveCol(row, col, action) {
//     const cellsToStay = getValuesBeforeCelPosition(row, col);
//     const cellsToReplace = getValuesFromCelPosition(row, col);
//
//     if (action === '+') {
//
//     } else if (action === '-') {
//         for (let j = 0; j < 13; j++) {
//             cellsToReplace[j].value = textForEmptyInput;
//         }
//     } else if (action === 'false') {
//         for (let j = 0; j < 13; j++) {
//             cellsToReplace[j].value = textForEmptyInput;
//         }
//     }
//
//     for(let i = 0; i < cellsToReplace.length; i++) {
//         let cell;
//         if (action === '+') {
//             cell = document.getElementById(`row${cellsToReplace[i].row}col${cellsToReplace[i].col  + 1}`);
//         } else if (action === '-') {
//             cell = document.getElementById(`row${cellsToReplace[i].row}col${cellsToReplace[i].col - 1}`);
//         } else if (action === 'false') {
//             cell = document.getElementById(`row${cellsToReplace[i].row}col${cellsToReplace[i].col}`);
//         }
//         if(cell) {
//             if(cellsToReplace[i].value === textForEmptyInput || cellsToReplace[i].value === '') {
//             } else {
//                 cell.classList.remove('cell-without-text');
//                 cell.innerText = cellsToReplace[i].value;
//                 cell.dataset.content = cellsToReplace[i].value.length;
//             }
//         }
//     }
//     for(let i = 0; i < cellsToStay.length; i++) {
//         const cell = document.getElementById(`row${cellsToStay[i].row}col${cellsToStay[i].col}`);
//         if(cell) {
//             if(cellsToStay[i].value === textForEmptyInput || cellsToStay[i].value === '') {
//             } else {
//                 cell.classList.remove('cell-without-text');
//                 cell.innerText = cellsToStay[i].value;
//                 cell.dataset.content = cellsToStay[i].value.length;
//             }
//         }
//     }
// }

//
// function getValuesBeforeCelPosition(row, col) {
//     const cells = document.getElementsByClassName('input-cell');
//     let rowForFind = 1;
//     let colForFind = 2;
//     const result = [];
//     for (let i = 0; i < cells.length; i++) {
//         if (cells[i].classList.contains('cell-without-text')) {
//         } else {
//             cells[i].innerText = textForEmptyInput;
//             cells[i].classList.add('cell-without-text');
//             cells[i].dataset.content = 0;
//         }
//         if (rowForFind < 14) {
//             const cell = document.getElementById(`row${rowForFind++}col${colForFind}`);
//             if (cell) {
//                 result.push({
//                     value: cell.innerText,
//                     col: cell.col,
//                     row: cell.row
//                 });
//             }
//         } else if (rowForFind === 14) {
//             const cell = document.getElementById(`row${rowForFind}col${colForFind++}`);
//             rowForFind = 1;
//             if (cell) {
//                 result.push({
//                     value: cell.innerText,
//                     col: cell.col,
//                     row: cell.row
//                 });
//             }
//         }
//         if (colForFind === col + 1) {
//             return result;
//         }
//     }
//
//     return result;
// }
//
// function getValuesFromCelPosition(row, col) {
//     const cells = document.getElementsByClassName('input-cell');
//     let rowForFind = 1;
//     let colForFind = col + 1;
//     const result = [];
//     for (let i = 0; i < cells.length; i++) {
//         if (cells[i].classList.contains('cell-without-text')) {
//         } else {
//             cells[i].innerText = textForEmptyInput;
//             cells[i].classList.add('cell-without-text');
//             cells[i].dataset.content = 0;
//         }
//         if (rowForFind < 14) {
//             const cell = document.getElementById(`row${rowForFind++}col${colForFind}`);
//             if (cell) {
//                 result.push({
//                     value: cell.innerText,
//                     col: cell.col,
//                     row: cell.row
//                 });
//             }
//         } else if (rowForFind === 14) {
//             const cell = document.getElementById(`row${rowForFind}col${colForFind++}`);
//             rowForFind = 1;
//             if (cell) {
//                 result.push({
//                     value: cell.innerText,
//                     col: cell.col,
//                     row: cell.row
//                 });
//             }
//         }
//     }
//
//     return result;
// }

// function shiftTwoColsDown(row, col) {
//     const cellsToStay = getValuesBeforeCelPositionSecondVariation(row, col);
//     const cellsToReplace = getValuesFromCelPositionSecondVariation(row, col);
//     const arrCellsOfCurentRow = [];
//
//     const currentColCells = document.getElementsByClassName(`col${col}`);
//     for (let i = 0; i < currentColCells.length; i++) {
//         arrCellsOfCurentRow.push({
//             value: currentColCells[i].innerText,
//             col: currentColCells[i].row,
//             row: currentColCells[i].col
//         });
//     }
//     console.log(cellsToReplace);
//     for(let i = 0; i < cellsToReplace.length; i++) {
//         let cell = document.getElementById(`row${cellsToReplace[i].row}col${cellsToReplace[i].col + 2}`);
//
//         if(cell) {
//             if(cellsToReplace[i].value === textForEmptyInput || cellsToReplace[i].value === '') {
//             } else {
//                 cell.classList.remove('cell-without-text');
//                 cell.innerText = cellsToReplace[i].value;
//                 cell.dataset.content = cellsToReplace[i].value.length;
//             }
//         }
//     }
//     for(let i = 0; i < cellsToStay.length; i++) {
//         const cell = document.getElementById(`row${cellsToStay[i].row}col${cellsToStay[i].col}`);
//         if(cell) {
//             if(cellsToStay[i].value === textForEmptyInput || cellsToStay[i].value === '') {
//             } else {
//                 cell.classList.remove('cell-without-text');
//                 cell.innerText = cellsToStay[i].value;
//                 cell.dataset.content = cellsToStay[i].value.length;
//             }
//         }
//     }
// }


// function getValuesFromCelPositionSecondVariation(row, col) { //col which was selected stay at the same position
//     const cells = document.getElementsByClassName('input-cell');
//     let rowForFind = 1;
//     let colForFind = col + 1;
//     const result = [];
//
//     for (let i = 0; i < cells.length; i++) {
//         if (cells[i].classList.contains('cell-without-text')) {
//         } else {
//             cells[i].innerText = textForEmptyInput;
//             cells[i].classList.add('cell-without-text');
//             cells[i].dataset.content = 0;
//         }
//         if (rowForFind < 14) {
//             const cell = document.getElementById(`row${rowForFind++}col${colForFind}`);
//             if (cell) {
//                 result.push({
//                     value: cell.innerText,
//                     col: cell.col,
//                     row: cell.row
//                 });
//             }
//         } else if (rowForFind === 14) {
//             const cell = document.getElementById(`row${rowForFind}col${colForFind++}`);
//             rowForFind = 1;
//             if (cell) {
//                 result.push({
//                     value: cell.innerText,
//                     col: cell.col,
//                     row: cell.row
//                 });
//             }
//         }
//     }
//
//     return result;
// }

// function getValuesBeforeCelPositionSecondVariation(row, col) {
//     const cells = document.getElementsByClassName('input-cell');
//     let rowForFind = 1;
//     let colForFind = 2;
//     const result = [];
//     for (let i = 0; i < cells.length; i++) {
//         if (cells[i].classList.contains('cell-without-text')) {
//         } else {
//             cells[i].innerText = textForEmptyInput;
//             cells[i].classList.add('cell-without-text');
//             cells[i].dataset.content = 0;
//         }
//         if (rowForFind < 14) {
//             const cell = document.getElementById(`row${rowForFind++}col${colForFind}`);
//             if (cell) {
//                 result.push({
//                     value: cell.innerText,
//                     col: cell.col,
//                     row: cell.row
//                 });
//             }
//         } else if (rowForFind === 14) {
//             const cell = document.getElementById(`row${rowForFind}col${colForFind++}`);
//             rowForFind = 1;
//             if (cell) {
//                 result.push({
//                     value: cell.innerText,
//                     col: cell.col,
//                     row: cell.row
//                 });
//             }
//         }
//         if (colForFind === col + 1) {
//             return result;
//         }
//     }
//
//     return result;
// }


function moreActionsElemCreate(elementToAppend) {
    const img = document.createElement('img');
    img.setAttribute('src', '/images/moreActions.png');
    img.classList.add('more-actions-btn');
    img.col = elementToAppend.col;
    elementToAppend.appendChild(img);
}


function showColMenu(col, pageX, pageY){
    const colMenu = document.getElementById('col-menu-with-actions');
    colMenu.col = col;
    colMenu.style.left = `${pageX}px`;
    colMenu.style.top = `${pageY}px`;
}

function showRowMenu(row, pageX, pageY){
    const rowMenu = document.getElementById('row-menu-with-actions');
    rowMenu.row = row;
    rowMenu.style.left = `${pageX}px`;
    rowMenu.style.top = `${pageY}px`;
}

function cleanRow(row) {
    const cells = document.getElementsByClassName(`row${row}`);
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.classList.add('cell-without-text');
        cell.innerText = textForEmptyInput;
        cell.dataset.content = '0';
    }
}

function mutateCellToCellWithPluses (col) {
    const cell = document.getElementById(`row4col${col}`);
    let arr;
    if (cell.innerText.search(/\[/g) !== -1) {
        let arrToEdit = cell.innerText.split('');
        arrToEdit.shift();
        arrToEdit.pop();
        arr = arrToEdit.join('');
        arr = arr.split(String.fromCodePoint(32));
    } else if (cell.innerText.search(/\"/g) !== -1) {
        let arrToEdit = cell.innerText.split('');
        arrToEdit.shift();
        arrToEdit.pop();
        arr = arrToEdit.join('');
        arr = arr.split(String.fromCodePoint(32));
    } else {
        arr = cell.innerText.split(String.fromCodePoint(32));
    }

        const maped = arr.map((x) => {
            if (x.search(/\+/g) !== -1 || x === textForEmptyInput) {
                return x;
            } else {
                return '\+' + x;
            }
        });
        const stringsWithPlus = maped.join(String.fromCodePoint(32));
        if (cell.innerText === textForEmptyInput) {
        } else {
            cell.innerText = stringsWithPlus;
            cell.dataset.content = stringsWithPlus.length;
        }
}

function createStringWithSquadBrackets(col) {
    const cell = document.getElementById(`row4col${col}`);
    const cellToAdd = document.getElementById(`row4col${col + 1}`);
    addInfoInGroupColFromCurCol(col, 1);

    let newString;
    if (cell.innerText === textForEmptyInput) {
    } else {
        if (cell.innerText.search(/\+/g) !== -1) {
            const checkPlus = cell.innerText.split('+');
            checkPlus.unshift('[');
            checkPlus.push(']');
            newString = checkPlus.join('');
        } else if (cell.innerText.search(/\[/g) !== -1) {
            newString = cell.innerText;
        } else if (cell.innerText.search(/\"/g) !== -1) {
            const checkQuotes = cell.innerText.split('"');
            checkQuotes.unshift('[');
            checkQuotes.push(']');
            newString = checkQuotes.join('');
        } else {
            const checkQuotes = cell.innerText.split('');
            checkQuotes.unshift('[');
            checkQuotes.push(']');
            newString = checkQuotes.join('');
        }
        cellToAdd.innerText = newString;
        cellToAdd.dataset.content = newString.length;
        cellToAdd.classList.remove('cell-without-text');
    }
}

function createStringWithDoubleQuotes(col) {
    const cell = document.getElementById(`row4col${col}`);
    const cellToAdd = document.getElementById(`row4col${col + 1}`);
    addInfoInGroupColFromCurCol(col, 1);
    let newString;
    if (cell.innerText === textForEmptyInput) {
    } else {
        if (cell.innerText.search(/\+/g) !== -1) {
            const checkPlus = cell.innerText.split('+');
            checkPlus.unshift('"');
            checkPlus.push('"');
            newString = checkPlus.join('');
        } else if (cell.innerText.search(/\"/g) !== -1) {
            newString = cell.innerText;
        } else if (cell.innerText.search(/\[/g) !== -1) {
            let arr = cell.innerText.split('[');
            let checkQuotes = arr.join('');
            checkQuotes = checkQuotes.split(']');
            checkQuotes.unshift('"');
            checkQuotes.push('"');
            newString = checkQuotes.join('');
        } else {
            const checkQuotes = cell.innerText.split('');
            checkQuotes.unshift('"');
            checkQuotes.push('"');
            newString = checkQuotes.join('');
        }
        cellToAdd.innerText = newString;
        cellToAdd.dataset.content = newString.length;
        cellToAdd.classList.remove('cell-without-text');
    }
}

function createStringWithDoubleQuotesOverTwo(col) {
    const cell = document.getElementById(`row4col${col}`);
    const cellToAdd = document.getElementById(`row4col${col + 2}`);
    addInfoInGroupColFromCurCol(col, 2);
    let newString;
    if (cell.innerText === textForEmptyInput) {
    } else {
        if (cell.innerText.search(/\+/g) !== -1) {
            const checkPlus = cell.innerText.split('+');
            checkPlus.unshift('"');
            checkPlus.push('"');
            newString = checkPlus.join('');
        } else if (cell.innerText.search(/\"/g) !== -1) {
            newString = cell.innerText;
        } else if (cell.innerText.search(/\[/g) !== -1) {
            let arr = cell.innerText.split('[');
            let checkQuotes = arr.join('');
            checkQuotes = checkQuotes.split(']');
            checkQuotes.unshift('"');
            checkQuotes.push('"');
            newString = checkQuotes.join('');
        } else {
            const checkQuotes = cell.innerText.split('');
            checkQuotes.unshift('"');
            checkQuotes.push('"');
            newString = checkQuotes.join('');
        }
        cellToAdd.innerText = newString;
        cellToAdd.dataset.content = newString.length;
        cellToAdd.classList.remove('cell-without-text');
    }
}


function shiftCols(col, numberOfColsToAdd) {
    const elemsToReplace = getElemsToReplace(col);
    const elementsReplaceTo = getElementsReplaceTo(col, numberOfColsToAdd);
    for (let i = 0; i < elemsToReplace.length; i++) {
        if (elemsToReplace[i].textInCell !== textForEmptyInput) {
        elementsReplaceTo[i].innerText = elemsToReplace[i].textInCell;
        modifyCellWithText(elementsReplaceTo[i]);
        elementsReplaceTo[i].dataset.content = elementsReplaceTo[i].innerText.length;
        }
    }
}

function getElemsToReplace(col) {
    let arrObjectsToReplace = [];
    for (let i = col + 1; i < mainInput.childNodes[1].childElementCount; i++) {
        for(let j = 1; j < 15; j++) {
            const cellBeforeCurrentCol = document.getElementById(`row${j}col${i}`);
            arrObjectsToReplace.push({
                textInCell: cellBeforeCurrentCol.innerText,
                cellId: cellBeforeCurrentCol.id,
                col: cellBeforeCurrentCol.col,
                row: cellBeforeCurrentCol.row
            });
            editReplacedInputs(cellBeforeCurrentCol);
        }
    }

    return arrObjectsToReplace;
}


function getElementsReplaceTo (col, numberOfColsToAdd) {
    let ElementsReplaceTo = [];

    for(let i = 0; i < numberOfColsToAdd + 1; i++) {
        addInput();
    }

    for (let i = col + numberOfColsToAdd + 1; i < mainInput.childNodes[1].childElementCount; i++) {
        for(let j = 1; j < 15; j++) {
            const cell = document.getElementById(`row${j}col${i}`);
            ElementsReplaceTo.push(cell);
        }
    }

    return ElementsReplaceTo;
}


function modifyCellWithText(elem) {
    if (elem.classList.contains('cell-without-text')) {
        elem.classList.remove('cell-without-text');
    }
}

function editReplacedInputs(elem) {
    elem.innerText = textForEmptyInput;
    if (elem.classList.contains('cell-without-text')) {
        elem.classList.remove('cell-without-text');
    }
    elem.classList.add('cell-without-text');
    elem.dataset.content = '0';
}


function addInfoInGroupColFromCurCol(col, number) {
    const cellr3 = document.getElementById(`row3col${col}`);
    const cellr3ToInnerTextAdd = document.getElementById(`row3col${col + 1}`);
    if (cellr3.innerText !== textForEmptyInput) {
        cellr3ToInnerTextAdd.innerText = cellr3.innerText;
        cellr3ToInnerTextAdd.dataset.content = cellr3ToInnerTextAdd.innerText.length;
        modifyCellWithText(cellr3ToInnerTextAdd);
        if (number === 2) {
            const cellr3ToInnerTextAddSecond = document.getElementById(`row3col${col + 2}`);
            cellr3ToInnerTextAddSecond.innerText = cellr3.innerText;
            cellr3ToInnerTextAddSecond.dataset.content = cellr3ToInnerTextAddSecond.innerText.length;
            modifyCellWithText(cellr3ToInnerTextAddSecond);
        }
    }
}

function removeColum(col) {
    const elementsToReplace = getElemsToReplace(col);
    const elementsReplaceTo = getElementsColReplaceToForDelete(col);
    for (let i = 0; i < elementsToReplace.length; i++) {
        elementsReplaceTo[i].innerText = elementsToReplace[i].textInCell;
        if(elementsReplaceTo[i].innerText === textForEmptyInput) {
            editReplacedInputs(elementsReplaceTo[i])
        } else {
            modifyCellWithText(elementsReplaceTo[i]);
        }
    }
}

function getElementsColReplaceToForDelete (col) {
    let elementsReplaceTo = [];
    for (let i = col; i < mainInput.childNodes[1].childElementCount; i++) {
        for(let j = 1; j < 15; j++) {
            const cell = document.getElementById(`row${j}col${i}`);
                elementsReplaceTo.push(cell);
        }
    }
    return elementsReplaceTo;
}

},{"maxlength-contenteditable":1}]},{},[2]);
