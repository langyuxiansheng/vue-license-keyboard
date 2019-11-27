(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-license-keyboard"] = factory();
	else
		root["vue-license-keyboard"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "3e72");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0614":
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

/***/ "0cc1":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "1277":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("f341")('wks');
var uid = __webpack_require__("4d2c");
var Symbol = __webpack_require__("3f8b").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "17cb":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("3f8b").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "1e01":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("da0b");
var setPrototypeOf = __webpack_require__("ae6e").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "1f9e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6117");
var toLength = __webpack_require__("8941");
var toAbsoluteIndex = __webpack_require__("c3a9");
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

/***/ "2498":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3f8b");
var core = __webpack_require__("da27");
var hide = __webpack_require__("b8ea");
var redefine = __webpack_require__("a6d5");
var ctx = __webpack_require__("e85e");
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

/***/ "25ae":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("f9a5") && !__webpack_require__("0cc1")(function () {
  return Object.defineProperty(__webpack_require__("6618")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "2ab1":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("da0b");
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

/***/ "3038":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "3a06":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "3d87":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d3d8").f;
var has = __webpack_require__("549d");
var TAG = __webpack_require__("1277")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "3e72":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.0@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("e67d")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.10@core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("efce");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.10@core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("4634");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.10@core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("ed8b");

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.6.3@@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/_core-js@2.6.10@core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7cfd");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3395a882-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./packages/LicenseKeyboard/src/main.vue?vue&type=template&id=416a3150&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-license-keyboard",class:[_vm.customClass]},[_c('span',{on:{"click":function($event){return _vm.show()}}},[_vm._t("default",[_c('i',{staticClass:"el-icon-s-grid icon"}),_c('font',[_vm._v("软键盘")])])],2),(_vm.isShow)?_c('div',{staticClass:"license-container",class:[_vm.customLicenseClass],style:({background:_vm.keyboardBg,opacity: _vm.opacity,fontSize: _vm.fontSize})},[_c('div',{staticClass:"license-bar"},[_c('span',{staticClass:"res-view",style:({fontSize: _vm.fontSize})},[_vm._v("预览: "+_vm._s(_vm.licenseNumber))]),_c('div',[_c('span',{staticClass:"confirm",style:({fontSize: _vm.fontSize}),on:{"click":function($event){return _vm.confirm()}}},[_vm._v("完成")]),_c('span',{staticClass:"close",style:({fontSize: _vm.fontSize}),on:{"click":function($event){return _vm.close()}}},[_vm._v("关闭")])])]),(_vm.type)?[_vm._l((_vm.licenseNumberModels),function(items,k){return [_c('div',{key:k,staticClass:"license-buttons"},[(k== 3)?_c('span',{staticClass:"model",class:{'disabled-btn':!_vm.licenseNumber},style:(_vm.keyStyle),attrs:{"disabled":!_vm.licenseNumber},on:{"click":function($event){return _vm.toggle()}}},[_vm._v("\n                        切换\n                    ")]):_vm._e(),_vm._l((items),function(item,j){return [_c('span',{key:j,style:(_vm.keyStyle),on:{"click":function($event){return _vm.handleChinese(item)}}},[_vm._v(_vm._s(item))])]}),(k== 3)?_c('span',{staticClass:"delete",class:{'disabled-btn':!_vm.licenseNumber},style:(_vm.keyStyle),attrs:{"disabled":!_vm.licenseNumber}},[_vm._v("删除")]):_vm._e()],2)]})]:[_vm._l((_vm.abcAndNums),function(items,k){return [_c('div',{key:k,staticClass:"license-buttons"},[(k== 3)?_c('span',{staticClass:"model",class:{'disabled-btn':!_vm.licenseNumber},style:(_vm.keyStyle),attrs:{"disabled":!_vm.licenseNumber},on:{"click":function($event){return _vm.toggle()}}},[_vm._v("\n                        切换\n                    ")]):_vm._e(),_vm._l((items),function(item,j){return [_c('span',{key:j,style:(_vm.keyStyle),on:{"click":function($event){return _vm.handleAbcNum(item)}}},[_vm._v(_vm._s(item))])]}),(k== 3)?_c('span',{staticClass:"delete",class:{'disabled-btn':!_vm.licenseNumber},style:(_vm.keyStyle),attrs:{"disabled":!_vm.licenseNumber},on:{"click":function($event){return _vm.deleteLicense()}}},[_vm._v("删除")]):_vm._e()],2)]})]],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/LicenseKeyboard/src/main.vue?vue&type=template&id=416a3150&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.10@core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("8f42");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./packages/LicenseKeyboard/src/main.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var theme = '#3d51aa';
/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'LicenseKeyboard',
  model: {
    value: 'license',
    event: 'confirm'
  },
  props: {
    license: {
      required: false,
      type: [String],
      default: null
    },
    //顶级节点自定义的class
    customClass: {
      required: false,
      type: [String],
      default: null
    },
    //键盘容器节点自定义的class
    customLicenseClass: {
      required: false,
      type: [String],
      default: null
    },
    //键盘背景
    keyboardBg: {
      required: false,
      type: [String],
      default: null
    },
    //键盘字体颜色
    fontColor: {
      required: false,
      type: [String],
      default: null
    },
    //键盘按钮的边框颜色
    keyBorderColor: {
      required: false,
      type: [String],
      default: theme
    },
    //键盘背景
    keyBg: {
      required: false,
      type: [String],
      default: null
    },
    //键盘的透明度
    opacity: {
      required: false,
      type: [Number],
      default: 1
    },
    //默认的字体大小 16px => 1rem
    fontSize: {
      required: false,
      type: [String],
      default: '1rem'
    },
    //键盘的默认圆角
    borderRadius: {
      required: false,
      type: [String],
      default: null
    },
    //是否只在移动端使用 默认false,在pc端使用的时候,建议全部使用手动配置字体大小的方法,区别在于是否会开启字体响应,其中使用了autosize的方法,会改变跟元素的font-size
    isMobile: {
      required: false,
      type: [Boolean],
      default: false
    }
  },
  computed: {
    keyStyle: function keyStyle() {
      return {
        color: this.fontColor,
        background: this.keyBg,
        borderColor: this.keyBorderColor,
        fontSize: this.fontSize,
        borderRadius: this.borderRadius
      };
    }
  },
  data: function data() {
    return {
      isShow: false,
      licenseNumberModels: [['川', '京', '苏', '津', '浙', '渝', '冀', '皖', '琼', '鲁'], ['闽', '贵', '新', '晋', '赣', '云', '宁', '蒙', '豫', '藏'], ['港', '辽', '桂', '陕', '澳', '吉', '湘', '甘', '台', '粤'], ['青', '沪', '鄂', '黑', '军', '警', '学']],
      abcAndNums: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], ["A", "S", "D", "F", "G", "H", "J", "K", "L"], ["Z", "X", "C", "V", "B", "N", "M"]],
      type: true,
      licenseNumber: null //车牌输入的值

    };
  },
  watch: {
    licenseNumber: function licenseNumber(val) {
      //删除完的时候返回到初始界面
      if (!val) {
        this.type = true;
      }
    }
  },
  mounted: function mounted() {
    if (this.isMobile) {
      this.init();
    }
  },
  methods: {
    init: function init() {
      !function (win, doc) {
        var setFontSize = function setFontSize() {
          // 获取window 宽度
          // zepto实现 $(window).width()就是这么干的
          var winWidth = window.innerWidth;
          var size = winWidth / 375 * 16;
          doc.documentElement.style.fontSize = size + 'px';
        };

        var evt = 'onorientationchange' in win ? 'orientationchange' : 'onresize';
        var timer = null;
        win.addEventListener(evt, function () {
          clearTimeout(timer);
          timer = setTimeout(setFontSize, 300);
        }, false);
        win.addEventListener('pageshow', function (e) {
          if (e.persisted) {
            clearTimeout(timer);
            timer = setTimeout(setFontSize, 300);
          }
        }, false); //初始化

        setFontSize();
      }(window, document);
    },

    /**
     * 弹出键盘
     */
    show: function show() {
      this.isShow = true;
      this.licenseNumber = null;
      this.type = true;
    },

    /**
     * 切换
     */
    toggle: function toggle() {
      if (this.licenseNumber) {
        this.type = !this.type;
      }
    },

    /**
     * 汉字输入
     */
    handleChinese: function handleChinese(key) {
      this.licenseNumber = key; //输入1个汉字切换到英文输入

      this.type = false;
    },

    /**
     * 数字和字母输入
     */
    handleAbcNum: function handleAbcNum(key) {
      if (this.licenseNumber.length < 8) {
        //最多允许输入8位
        this.licenseNumber += key;
      }
    },

    /**
     * 删除车牌
     */
    deleteLicense: function deleteLicense() {
      if (this.licenseNumber) {
        this.licenseNumber = this.licenseNumber.substring(0, this.licenseNumber.length - 1);
      }
    },

    /**
     * 完成
     */
    confirm: function confirm() {
      if (this.licenseNumber) {
        this.$emit('confirm', this.licenseNumber);
      }

      this.isShow = false;
    },

    /**
     * 关闭
     */
    close: function close() {
      this.isShow = false;
    }
  }
});
// CONCATENATED MODULE: ./packages/LicenseKeyboard/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/LicenseKeyboard/src/main.vue?vue&type=style&index=0&id=416a3150&lang=less&scoped=true&
var mainvue_type_style_index_0_id_416a3150_lang_less_scoped_true_ = __webpack_require__("a4d1");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.1@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/LicenseKeyboard/src/main.vue






/* normalize component */

var component = normalizeComponent(
  src_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "416a3150",
  null
  
)

/* harmony default export */ var main = (component.exports);
// CONCATENATED MODULE: ./packages/LicenseKeyboard/index.js

// 导入组件，组件必须声明 name
 // 为组件添加 install 方法，用于按需引入

main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var LicenseKeyboard = (main);
// CONCATENATED MODULE: ./packages/index.js






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// packages / index.js
// 导入单个组件
 // 以数组的结构保存组件，便于遍历

var components = [LicenseKeyboard]; // 定义 install 方法

var install = function install(Vue) {
  if (install.installed) return false;
  install.installed = true; // 遍历并注册全局组件

  components.map(function (component) {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = (_objectSpread({
  // 导出的对象必须具备一个 install 方法
  install: install
}, components));
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.0@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "3f8b":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "4634":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("96dd");
var getKeys = __webpack_require__("7d56");
var redefine = __webpack_require__("a6d5");
var global = __webpack_require__("3f8b");
var hide = __webpack_require__("b8ea");
var Iterators = __webpack_require__("e3b3");
var wks = __webpack_require__("1277");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "4aef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("6cc2");
var $export = __webpack_require__("2498");
var redefine = __webpack_require__("a6d5");
var hide = __webpack_require__("b8ea");
var Iterators = __webpack_require__("e3b3");
var $iterCreate = __webpack_require__("c264");
var setToStringTag = __webpack_require__("3d87");
var getPrototypeOf = __webpack_require__("d15b");
var ITERATOR = __webpack_require__("1277")('iterator');
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

/***/ "4d2c":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "549d":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6077":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6117":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("9952");
var defined = __webpack_require__("3038");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "65c3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("8cac");
var dPs = __webpack_require__("8d69");
var enumBugKeys = __webpack_require__("d93f");
var IE_PROTO = __webpack_require__("9947")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("6618")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("17cb").appendChild(iframe);
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

/***/ "6618":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("da0b");
var document = __webpack_require__("3f8b").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "6cc2":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "6fe0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f341")('native-function-to-string', Function.toString);


/***/ }),

/***/ "7130":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("2498");
var defined = __webpack_require__("3038");
var fails = __webpack_require__("0cc1");
var spaces = __webpack_require__("3a06");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "7afe":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("549d");
var toIObject = __webpack_require__("6117");
var arrayIndexOf = __webpack_require__("1f9e")(false);
var IE_PROTO = __webpack_require__("9947")('IE_PROTO');

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

/***/ "7cfd":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d3d8").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("f9a5") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "7d56":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("7afe");
var enumBugKeys = __webpack_require__("d93f");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "8451":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "8868":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("2498");
var core = __webpack_require__("da27");
var fails = __webpack_require__("0cc1");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "8941":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("a6ad");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "8cac":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("da0b");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "8d69":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d3d8");
var anObject = __webpack_require__("8cac");
var getKeys = __webpack_require__("7d56");

module.exports = __webpack_require__("f9a5") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "8f42":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("3f8b");
var has = __webpack_require__("549d");
var cof = __webpack_require__("6077");
var inheritIfRequired = __webpack_require__("1e01");
var toPrimitive = __webpack_require__("2ab1");
var fails = __webpack_require__("0cc1");
var gOPN = __webpack_require__("cb2e").f;
var gOPD = __webpack_require__("e493").f;
var dP = __webpack_require__("d3d8").f;
var $trim = __webpack_require__("7130").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("65c3")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("f9a5") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("a6d5")(global, NUMBER, $Number);
}


/***/ }),

/***/ "96dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("ab19");
var step = __webpack_require__("c8e9");
var Iterators = __webpack_require__("e3b3");
var toIObject = __webpack_require__("6117");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("4aef")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "9947":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("f341")('keys');
var uid = __webpack_require__("4d2c");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "9952":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6077");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "9d61":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "a0a7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a4d1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_416a3150_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a0a7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_416a3150_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_416a3150_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_416a3150_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a6ad":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "a6d5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3f8b");
var hide = __webpack_require__("b8ea");
var has = __webpack_require__("549d");
var SRC = __webpack_require__("4d2c")('src');
var $toString = __webpack_require__("6fe0");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("da27").inspectSource = function (it) {
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

/***/ "a9cf":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("3038");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "ab19":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("1277")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("b8ea")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "ae6e":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("da0b");
var anObject = __webpack_require__("8cac");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("e85e")(Function.call, __webpack_require__("e493").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "b8ea":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d3d8");
var createDesc = __webpack_require__("0614");
module.exports = __webpack_require__("f9a5") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "c264":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("65c3");
var descriptor = __webpack_require__("0614");
var setToStringTag = __webpack_require__("3d87");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("b8ea")(IteratorPrototype, __webpack_require__("1277")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "c3a9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a6ad");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "c864":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "c8e9":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "cb2e":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("7afe");
var hiddenKeys = __webpack_require__("d93f").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "d15b":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("549d");
var toObject = __webpack_require__("a9cf");
var IE_PROTO = __webpack_require__("9947")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "d3d8":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("8cac");
var IE8_DOM_DEFINE = __webpack_require__("25ae");
var toPrimitive = __webpack_require__("2ab1");
var dP = Object.defineProperty;

exports.f = __webpack_require__("f9a5") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "d93f":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "da0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "da27":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.10' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "e323":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("d3d8");
var createDesc = __webpack_require__("0614");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "e3b3":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "e493":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("c864");
var createDesc = __webpack_require__("0614");
var toIObject = __webpack_require__("6117");
var toPrimitive = __webpack_require__("2ab1");
var has = __webpack_require__("549d");
var IE8_DOM_DEFINE = __webpack_require__("25ae");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("f9a5") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "e67d":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "e85e":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("8451");
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

/***/ "ed8b":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("a9cf");
var $keys = __webpack_require__("7d56");

__webpack_require__("8868")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "efce":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__("2498");
var ownKeys = __webpack_require__("f36d");
var toIObject = __webpack_require__("6117");
var gOPD = __webpack_require__("e493");
var createProperty = __webpack_require__("e323");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "f341":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("da27");
var global = __webpack_require__("3f8b");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("6cc2") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "f36d":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__("cb2e");
var gOPS = __webpack_require__("9d61");
var anObject = __webpack_require__("8cac");
var Reflect = __webpack_require__("3f8b").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "f9a5":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("0cc1")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ })

/******/ });
});
//# sourceMappingURL=vue-license-keyboard.umd.js.map