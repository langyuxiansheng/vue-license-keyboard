module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "c497");
/******/ })
/************************************************************************/
/******/ ({

/***/ "3754":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "5325":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("88dd");
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

/***/ "568a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("dad2") && !__webpack_require__("b6f1")(function () {
  return Object.defineProperty(__webpack_require__("e3e0")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "7364":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("ddf7").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("dad2") && dP(FProto, NAME, {
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

/***/ "88dd":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "a013":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("88dd");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ac85":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_2c48b71c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fa8e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_2c48b71c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_2c48b71c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_2c48b71c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b6f1":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "c497":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.8.4@@vue/cli-service/lib/commands/build/setPublicPath.js
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

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.4.5@@babel/runtime/helpers/esm/defineProperty.js
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
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.4.5@@babel/runtime/helpers/esm/objectSpread.js

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7364");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"752e66c8-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./packages/LicenseKeyboard/src/main.vue?vue&type=template&id=2c48b71c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-license-keyboard"},[_c('span',{on:{"click":function($event){return _vm.show()}}},[_vm._t("default",[_c('i',{staticClass:"el-icon-s-grid icon"}),_c('font',[_vm._v("软键盘")])])],2),(_vm.isShow)?_c('div',{staticClass:"license-container"},[_c('div',{staticClass:"license-bar"},[_c('span',{staticClass:"res-view"},[_vm._v("预览: "+_vm._s(_vm.licenseNumber))]),_c('div',[_c('span',{staticClass:"confirm",on:{"click":function($event){return _vm.confirm()}}},[_vm._v("完成")]),_c('span',{staticClass:"close",on:{"click":function($event){return _vm.close()}}},[_vm._v("关闭")])])]),(_vm.type)?[_vm._l((_vm.licenseNumberModels),function(items,k){return [_c('div',{key:k,staticClass:"license-buttons"},[(k== 3)?_c('span',{staticClass:"model",class:{'disabled-btn':!_vm.licenseNumber},attrs:{"disabled":!_vm.licenseNumber},on:{"click":function($event){return _vm.toggle()}}},[_vm._v("\n                        切换\n                    ")]):_vm._e(),_vm._l((items),function(item,j){return [_c('span',{key:j,on:{"click":function($event){return _vm.handleChinese(item)}}},[_vm._v(_vm._s(item))])]}),(k== 3)?_c('span',{staticClass:"delete",class:{'disabled-btn':!_vm.licenseNumber},attrs:{"disabled":!_vm.licenseNumber}},[_vm._v("删除")]):_vm._e()],2)]})]:[_vm._l((_vm.abcAndNums),function(items,k){return [_c('div',{key:k,staticClass:"license-buttons"},[(k== 3)?_c('span',{staticClass:"model",class:{'disabled-btn':!_vm.licenseNumber},attrs:{"disabled":!_vm.licenseNumber},on:{"click":function($event){return _vm.toggle()}}},[_vm._v("\n                        切换\n                    ")]):_vm._e(),_vm._l((items),function(item,j){return [_c('span',{key:j,on:{"click":function($event){return _vm.handleAbcNum(item)}}},[_vm._v(_vm._s(item))])]}),(k== 3)?_c('span',{staticClass:"delete",class:{'disabled-btn':!_vm.licenseNumber},attrs:{"disabled":!_vm.licenseNumber},on:{"click":function($event){return _vm.deleteLicense()}}},[_vm._v("删除")]):_vm._e()],2)]})]],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/LicenseKeyboard/src/main.vue?vue&type=template&id=2c48b71c&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./packages/LicenseKeyboard/src/main.vue?vue&type=script&lang=js&
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
    }
  },
  data: function data() {
    return {
      isShow: false,
      licenseNumberModels: [['川', '京', '苏', '津', '浙', '渝', '冀', '皖', '琼', '鲁'], ['闽', '贵', '新', '晋', '赣', '云', '宁', '蒙', '豫', '藏'], ['港', '辽', '鄂', '陕', '澳', '吉', '湘', '甘', '台', '粤'], ['青', '沪', '桂', '黑', '军', '警', '学']],
      abcAndNums: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], ["Q", "W", "E", "R", "T", "Y", "U", "I", "O"], ["P", "A", "S", "D", "F", "G", "H", "J", "K", "L"], ["Z", "X", "C", "V", "B", "N", "M"]],
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
  methods: {
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
// EXTERNAL MODULE: ./packages/LicenseKeyboard/src/main.vue?vue&type=style&index=0&id=2c48b71c&lang=less&scoped=true&
var mainvue_type_style_index_0_id_2c48b71c_lang_less_scoped_true_ = __webpack_require__("ac85");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.0@vue-loader/lib/runtime/componentNormalizer.js
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
  "2c48b71c",
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

;
/* harmony default export */ var packages_0 = (_objectSpread({
  // 导出的对象必须具备一个 install 方法
  install: install
}, components));
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.8.4@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "dad2":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("b6f1")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ddf7":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("a013");
var IE8_DOM_DEFINE = __webpack_require__("568a");
var toPrimitive = __webpack_require__("5325");
var dP = Object.defineProperty;

exports.f = __webpack_require__("dad2") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "e3e0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("88dd");
var document = __webpack_require__("3754").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
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

/***/ "fa8e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=tag-textarea.common.js.map