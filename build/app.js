/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(68);

	var _vue2 = _interopRequireDefault(_vue);

	var _router = __webpack_require__(69);

	var _router2 = _interopRequireDefault(_router);

	__webpack_require__(91);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import App from 'components/app'

	var app = new _vue2.default({
		router: _router2.default
	}).$mount('#Demo');
	/*new Vue({
		el: '#Demo',
		components: {App}
	})*/

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Vue.js v2.0.0
	 * (c) 2014-2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vue = factory());
	}(this, (function () { 'use strict';

	/*  */

	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function _toString (val) {
	  return val == null
	    ? ''
	    : typeof val === 'object'
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}

	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val, 10)
	  return (n || n === 0) ? n : val
	}

	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null)
	  var list = str.split(',')
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}

	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true)

	/**
	 * Remove an item from an array
	 */
	function remove$1 (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item)
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}

	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}

	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return typeof value === 'string' || typeof value === 'number'
	}

	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null)
	  return function cachedFn (str) {
	    var hit = cache[str]
	    return hit || (cache[str] = fn(str))
	  }
	}

	/**
	 * Camelize a hyphen-delmited string.
	 */
	var camelizeRE = /-(\w)/g
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	})

	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	})

	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /([^-])([A-Z])/g
	var hyphenate = cached(function (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase()
	})

	/**
	 * Simple bind, faster than native
	 */
	function bind$1 (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	  // record original fn length
	  boundFn._length = fn.length
	  return boundFn
	}

	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0
	  var i = list.length - start
	  var ret = new Array(i)
	  while (i--) {
	    ret[i] = list[i + start]
	  }
	  return ret
	}

	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key]
	  }
	  return to
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	var toString = Object.prototype.toString
	var OBJECT_STRING = '[object Object]'
	function isPlainObject (obj) {
	  return toString.call(obj) === OBJECT_STRING
	}

	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {}
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i])
	    }
	  }
	  return res
	}

	/**
	 * Perform no operation.
	 */
	function noop () {}

	/**
	 * Always return false.
	 */
	var no = function () { return false; }

	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys (modules) {
	  return modules.reduce(function (keys, m) {
	    return keys.concat(m.staticKeys || [])
	  }, []).join(',')
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (
	    isObject(a) && isObject(b)
	      ? JSON.stringify(a) === JSON.stringify(b)
	      : false
	  )
	  /* eslint-enable eqeqeq */
	}

	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
	}

	/*  */

	var config = {
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  optionMergeStrategies: Object.create(null),

	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,

	  /**
	   * Whether to enable devtools
	   */
	  devtools: "development" !== 'production',

	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,

	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: null,

	  /**
	   * Custom user key aliases for v-on
	   */
	  keyCodes: Object.create(null),

	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,

	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,

	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,

	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,

	  /**
	   * List of asset types that a component can own.
	   */
	  _assetTypes: [
	    'component',
	    'directive',
	    'filter'
	  ],

	  /**
	   * List of lifecycle hooks.
	   */
	  _lifecycleHooks: [
	    'beforeCreate',
	    'created',
	    'beforeMount',
	    'mounted',
	    'beforeUpdate',
	    'updated',
	    'beforeDestroy',
	    'destroyed',
	    'activated',
	    'deactivated'
	  ],

	  /**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
	  _maxUpdateCount: 100,

	  /**
	   * Server rendering?
	   */
	  _isServer: "client" === 'server'
	}

	/*  */

	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0)
	  return c === 0x24 || c === 0x5F
	}

	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  })
	}

	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w\.\$]/
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  } else {
	    var segments = path.split('.')
	    return function (obj) {
	      for (var i = 0; i < segments.length; i++) {
	        if (!obj) { return }
	        obj = obj[segments[i]]
	      }
	      return obj
	    }
	  }
	}

	/*  */
	/* globals MutationObserver */

	// can we use __proto__?
	var hasProto = '__proto__' in {}

	// Browser environment sniffing
	var inBrowser =
	  typeof window !== 'undefined' &&
	  Object.prototype.toString.call(window) !== '[object Object]'

	var UA = inBrowser && window.navigator.userAgent.toLowerCase()
	var isIE = UA && /msie|trident/.test(UA)
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0
	var isEdge = UA && UA.indexOf('edge/') > 0
	var isAndroid = UA && UA.indexOf('android') > 0
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA)

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__

	/* istanbul ignore next */
	function isNative (Ctor) {
	  return /native code/.test(Ctor.toString())
	}

	/**
	 * Defer a task to execute it asynchronously.
	 */
	var nextTick = (function () {
	  var callbacks = []
	  var pending = false
	  var timerFunc

	  function nextTickHandler () {
	    pending = false
	    var copies = callbacks.slice(0)
	    callbacks.length = 0
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]()
	    }
	  }

	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve()
	    timerFunc = function () {
	      p.then(nextTickHandler)
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) { setTimeout(noop) }
	    }
	  } else if (typeof MutationObserver !== 'undefined' && (
	    isNative(MutationObserver) ||
	    // PhantomJS and iOS 7.x
	    MutationObserver.toString() === '[object MutationObserverConstructor]'
	  )) {
	    // use MutationObserver where native Promise is not available,
	    // e.g. PhantomJS IE11, iOS7, Android 4.4
	    var counter = 1
	    var observer = new MutationObserver(nextTickHandler)
	    var textNode = document.createTextNode(String(counter))
	    observer.observe(textNode, {
	      characterData: true
	    })
	    timerFunc = function () {
	      counter = (counter + 1) % 2
	      textNode.data = String(counter)
	    }
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = setTimeout
	  }

	  return function queueNextTick (cb, ctx) {
	    var func = ctx
	      ? function () { cb.call(ctx) }
	      : cb
	    callbacks.push(func)
	    if (!pending) {
	      pending = true
	      timerFunc(nextTickHandler, 0)
	    }
	  }
	})()

	var _Set
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = (function () {
	    function Set () {
	      this.set = Object.create(null)
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] !== undefined
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = 1
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null)
	    };

	    return Set;
	  }())
	}

	/* not type checking this file because flow doesn't play well with Proxy */

	var hasProxy;
	var proxyHandlers;
	var initProxy

	{
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  )

	  hasProxy =
	    typeof Proxy !== 'undefined' &&
	    Proxy.toString().match(/native code/)

	  proxyHandlers = {
	    has: function has (target, key) {
	      var has = key in target
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_'
	      if (!has && !isAllowed) {
	        warn(
	          "Property or method \"" + key + "\" is not defined on the instance but " +
	          "referenced during render. Make sure to declare reactive data " +
	          "properties in the data option.",
	          target
	        )
	      }
	      return has || !isAllowed
	    }
	  }

	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      vm._renderProxy = new Proxy(vm, proxyHandlers)
	    } else {
	      vm._renderProxy = vm
	    }
	  }
	}

	/*  */


	var uid$2 = 0

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid$2++
	  this.subs = []
	};

	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub)
	};

	Dep.prototype.removeSub = function removeSub (sub) {
	  remove$1(this.subs, sub)
	};

	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this)
	  }
	};

	Dep.prototype.notify = function notify () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice()
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update()
	  }
	};

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null
	var targetStack = []

	function pushTarget (_target) {
	  if (Dep.target) { targetStack.push(Dep.target) }
	  Dep.target = _target
	}

	function popTarget () {
	  Dep.target = targetStack.pop()
	}

	/*  */


	var queue = []
	var has$1 = {}
	var circular = {}
	var waiting = false
	var flushing = false
	var index = 0

	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  queue.length = 0
	  has$1 = {}
	  {
	    circular = {}
	  }
	  waiting = flushing = false
	}

	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  flushing = true

	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; })

	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    var watcher = queue[index]
	    var id = watcher.id
	    has$1[id] = null
	    watcher.run()
	    // in dev build, check and stop circular updates.
	    if ("development" !== 'production' && has$1[id] != null) {
	      circular[id] = (circular[id] || 0) + 1
	      if (circular[id] > config._maxUpdateCount) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        )
	        break
	      }
	    }
	  }

	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush')
	  }

	  resetSchedulerState()
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id
	  if (has$1[id] == null) {
	    has$1[id] = true
	    if (!flushing) {
	      queue.push(watcher)
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1
	      while (i >= 0 && queue[i].id > watcher.id) {
	        i--
	      }
	      queue.splice(Math.max(i, index) + 1, 0, watcher)
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true
	      nextTick(flushSchedulerQueue)
	    }
	  }
	}

	/*  */

	var uid$1 = 0

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options
	) {
	  if ( options === void 0 ) options = {};

	  this.vm = vm
	  vm._watchers.push(this)
	  // options
	  this.deep = !!options.deep
	  this.user = !!options.user
	  this.lazy = !!options.lazy
	  this.sync = !!options.sync
	  this.expression = expOrFn.toString()
	  this.cb = cb
	  this.id = ++uid$1 // uid for batching
	  this.active = true
	  this.dirty = this.lazy // for lazy watchers
	  this.deps = []
	  this.newDeps = []
	  this.depIds = new _Set()
	  this.newDepIds = new _Set()
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn
	  } else {
	    this.getter = parsePath(expOrFn)
	    if (!this.getter) {
	      this.getter = function () {}
	      "development" !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      )
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get()
	};

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this)
	  var value = this.getter.call(this.vm, this.vm)
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value)
	  }
	  popTarget()
	  this.cleanupDeps()
	  return value
	};

	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
	  var id = dep.id
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id)
	    this.newDeps.push(dep)
	    if (!this.depIds.has(id)) {
	      dep.addSub(this)
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	    var this$1 = this;

	  var i = this.deps.length
	  while (i--) {
	    var dep = this$1.deps[i]
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1)
	    }
	  }
	  var tmp = this.depIds
	  this.depIds = this.newDepIds
	  this.newDepIds = tmp
	  this.newDepIds.clear()
	  tmp = this.deps
	  this.deps = this.newDeps
	  this.newDeps = tmp
	  this.newDeps.length = 0
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true
	  } else if (this.sync) {
	    this.run()
	  } else {
	    queueWatcher(this)
	  }
	};

	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get()
	      if (
	        value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value
	      this.value = value
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue)
	        } catch (e) {
	          "development" !== 'production' && warn(
	            ("Error in watcher \"" + (this.expression) + "\""),
	            this.vm
	          )
	          /* istanbul ignore else */
	          if (config.errorHandler) {
	            config.errorHandler.call(null, e, this.vm)
	          } else {
	            throw e
	          }
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue)
	      }
	    }
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get()
	  this.dirty = false
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	    var this$1 = this;

	  var i = this.deps.length
	  while (i--) {
	    this$1.deps[i].depend()
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	    var this$1 = this;

	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      remove$1(this.vm._watchers, this)
	    }
	    var i = this.deps.length
	    while (i--) {
	      this$1.deps[i].removeSub(this$1)
	    }
	    this.active = false
	  }
	};

	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	var seenObjects = new _Set()
	function traverse (val, seen) {
	  var i, keys
	  if (!seen) {
	    seen = seenObjects
	    seen.clear()
	  }
	  var isA = Array.isArray(val)
	  var isO = isObject(val)
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id
	      if (seen.has(depId)) {
	        return
	      } else {
	        seen.add(depId)
	      }
	    }
	    if (isA) {
	      i = val.length
	      while (i--) { traverse(val[i], seen) }
	    } else if (isO) {
	      keys = Object.keys(val)
	      i = keys.length
	      while (i--) { traverse(val[keys[i]], seen) }
	    }
	  }
	}

	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */

	var arrayProto = Array.prototype
	var arrayMethods = Object.create(arrayProto);[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method]
	  def(arrayMethods, method, function mutator () {
	    var arguments$1 = arguments;

	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length
	    var args = new Array(i)
	    while (i--) {
	      args[i] = arguments$1[i]
	    }
	    var result = original.apply(this, args)
	    var ob = this.__ob__
	    var inserted
	    switch (method) {
	      case 'push':
	        inserted = args
	        break
	      case 'unshift':
	        inserted = args
	        break
	      case 'splice':
	        inserted = args.slice(2)
	        break
	    }
	    if (inserted) { ob.observeArray(inserted) }
	    // notify change
	    ob.dep.notify()
	    return result
	  })
	})

	/*  */

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods)

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */
	var observerState = {
	  shouldConvert: true,
	  isSettingProps: false
	}

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value
	  this.dep = new Dep()
	  this.vmCount = 0
	  def(value, '__ob__', this)
	  if (Array.isArray(value)) {
	    var augment = hasProto
	      ? protoAugment
	      : copyAugment
	    augment(value, arrayMethods, arrayKeys)
	    this.observeArray(value)
	  } else {
	    this.walk(value)
	  }
	};

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj)
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive$$1(obj, keys[i], obj[keys[i]])
	  }
	};

	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i])
	  }
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * istanbul ignore next
	 */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i]
	    def(target, key, src[key])
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value) {
	  if (!isObject(value)) {
	    return
	  }
	  var ob
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__
	  } else if (
	    observerState.shouldConvert &&
	    !config._isServer &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value)
	  }
	  return ob
	}

	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive$$1 (
	  obj,
	  key,
	  val,
	  customSetter
	) {
	  var dep = new Dep()

	  var property = Object.getOwnPropertyDescriptor(obj, key)
	  if (property && property.configurable === false) {
	    return
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get
	  var setter = property && property.set

	  var childOb = observe(val)
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val
	      if (Dep.target) {
	        dep.depend()
	        if (childOb) {
	          childOb.dep.depend()
	        }
	        if (Array.isArray(value)) {
	          for (var e = void 0, i = 0, l = value.length; i < l; i++) {
	            e = value[i]
	            e && e.__ob__ && e.__ob__.dep.depend()
	          }
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val
	      if (newVal === value) {
	        return
	      }
	      if ("development" !== 'production' && customSetter) {
	        customSetter()
	      }
	      if (setter) {
	        setter.call(obj, newVal)
	      } else {
	        val = newVal
	      }
	      childOb = observe(newVal)
	      dep.notify()
	    }
	  })
	}

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set (obj, key, val) {
	  if (Array.isArray(obj)) {
	    obj.splice(key, 1, val)
	    return val
	  }
	  if (hasOwn(obj, key)) {
	    obj[key] = val
	    return
	  }
	  var ob = obj.__ob__
	  if (obj._isVue || (ob && ob.vmCount)) {
	    "development" !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    )
	    return
	  }
	  if (!ob) {
	    obj[key] = val
	    return
	  }
	  defineReactive$$1(ob.value, key, val)
	  ob.dep.notify()
	  return val
	}

	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (obj, key) {
	  var ob = obj.__ob__
	  if (obj._isVue || (ob && ob.vmCount)) {
	    "development" !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    )
	    return
	  }
	  if (!hasOwn(obj, key)) {
	    return
	  }
	  delete obj[key]
	  if (!ob) {
	    return
	  }
	  ob.dep.notify()
	}

	/*  */

	function initState (vm) {
	  vm._watchers = []
	  initProps(vm)
	  initData(vm)
	  initComputed(vm)
	  initMethods(vm)
	  initWatch(vm)
	}

	function initProps (vm) {
	  var props = vm.$options.props
	  if (props) {
	    var propsData = vm.$options.propsData || {}
	    var keys = vm.$options._propKeys = Object.keys(props)
	    var isRoot = !vm.$parent
	    // root instance props should be converted
	    observerState.shouldConvert = isRoot
	    var loop = function ( i ) {
	      var key = keys[i]
	      /* istanbul ignore else */
	      {
	        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
	          if (vm.$parent && !observerState.isSettingProps) {
	            warn(
	              "Avoid mutating a prop directly since the value will be " +
	              "overwritten whenever the parent component re-renders. " +
	              "Instead, use a data or computed property based on the prop's " +
	              "value. Prop being mutated: \"" + key + "\"",
	              vm
	            )
	          }
	        })
	      }
	    };

	    for (var i = 0; i < keys.length; i++) loop( i );
	    observerState.shouldConvert = true
	  }
	}

	function initData (vm) {
	  var data = vm.$options.data
	  data = vm._data = typeof data === 'function'
	    ? data.call(vm)
	    : data || {}
	  if (!isPlainObject(data)) {
	    data = {}
	    "development" !== 'production' && warn(
	      'data functions should return an object.',
	      vm
	    )
	  }
	  // proxy data on instance
	  var keys = Object.keys(data)
	  var props = vm.$options.props
	  var i = keys.length
	  while (i--) {
	    if (props && hasOwn(props, keys[i])) {
	      "development" !== 'production' && warn(
	        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      )
	    } else {
	      proxy(vm, keys[i])
	    }
	  }
	  // observe data
	  observe(data)
	  data.__ob__ && data.__ob__.vmCount++
	}

	var computedSharedDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	}

	function initComputed (vm) {
	  var computed = vm.$options.computed
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key]
	      if (typeof userDef === 'function') {
	        computedSharedDefinition.get = makeComputedGetter(userDef, vm)
	        computedSharedDefinition.set = noop
	      } else {
	        computedSharedDefinition.get = userDef.get
	          ? userDef.cache !== false
	            ? makeComputedGetter(userDef.get, vm)
	            : bind$1(userDef.get, vm)
	          : noop
	        computedSharedDefinition.set = userDef.set
	          ? bind$1(userDef.set, vm)
	          : noop
	      }
	      Object.defineProperty(vm, key, computedSharedDefinition)
	    }
	  }
	}

	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, noop, {
	    lazy: true
	  })
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate()
	    }
	    if (Dep.target) {
	      watcher.depend()
	    }
	    return watcher.value
	  }
	}

	function initMethods (vm) {
	  var methods = vm.$options.methods
	  if (methods) {
	    for (var key in methods) {
	      if (methods[key] != null) {
	        vm[key] = bind$1(methods[key], vm)
	      } else {
	        warn(("Method \"" + key + "\" is undefined in options."), vm)
	      }
	    }
	  }
	}

	function initWatch (vm) {
	  var watch = vm.$options.watch
	  if (watch) {
	    for (var key in watch) {
	      var handler = watch[key]
	      if (Array.isArray(handler)) {
	        for (var i = 0; i < handler.length; i++) {
	          createWatcher(vm, key, handler[i])
	        }
	      } else {
	        createWatcher(vm, key, handler)
	      }
	    }
	  }
	}

	function createWatcher (vm, key, handler) {
	  var options
	  if (isPlainObject(handler)) {
	    options = handler
	    handler = handler.handler
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler]
	  }
	  vm.$watch(key, handler, options)
	}

	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {}
	  dataDef.get = function () {
	    return this._data
	  }
	  {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      )
	    }
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef)

	  Vue.prototype.$set = set
	  Vue.prototype.$delete = del

	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this
	    options = options || {}
	    options.user = true
	    var watcher = new Watcher(vm, expOrFn, cb, options)
	    if (options.immediate) {
	      cb.call(vm, watcher.value)
	    }
	    return function unwatchFn () {
	      watcher.teardown()
	    }
	  }
	}

	function proxy (vm, key) {
	  if (!isReserved(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter () {
	        return vm._data[key]
	      },
	      set: function proxySetter (val) {
	        vm._data[key] = val
	      }
	    })
	  }
	}

	/*  */

	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  ns,
	  context,
	  componentOptions
	) {
	  this.tag = tag
	  this.data = data
	  this.children = children
	  this.text = text
	  this.elm = elm
	  this.ns = ns
	  this.context = context
	  this.key = data && data.key
	  this.componentOptions = componentOptions
	  this.child = undefined
	  this.parent = undefined
	  this.raw = false
	  this.isStatic = false
	  this.isRootInsert = true
	  this.isComment = false
	  this.isCloned = false
	};

	var emptyVNode = function () {
	  var node = new VNode()
	  node.text = ''
	  node.isComment = true
	  return node
	}

	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.ns,
	    vnode.context,
	    vnode.componentOptions
	  )
	  cloned.isStatic = vnode.isStatic
	  cloned.key = vnode.key
	  cloned.isCloned = true
	  return cloned
	}

	function cloneVNodes (vnodes) {
	  var res = new Array(vnodes.length)
	  for (var i = 0; i < vnodes.length; i++) {
	    res[i] = cloneVNode(vnodes[i])
	  }
	  return res
	}

	/*  */

	function normalizeChildren (
	  children,
	  ns,
	  nestedIndex
	) {
	  if (isPrimitive(children)) {
	    return [createTextVNode(children)]
	  }
	  if (Array.isArray(children)) {
	    var res = []
	    for (var i = 0, l = children.length; i < l; i++) {
	      var c = children[i]
	      var last = res[res.length - 1]
	      //  nested
	      if (Array.isArray(c)) {
	        res.push.apply(res, normalizeChildren(c, ns, i))
	      } else if (isPrimitive(c)) {
	        if (last && last.text) {
	          last.text += String(c)
	        } else if (c !== '') {
	          // convert primitive to vnode
	          res.push(createTextVNode(c))
	        }
	      } else if (c instanceof VNode) {
	        if (c.text && last && last.text) {
	          last.text += c.text
	        } else {
	          // inherit parent namespace
	          if (ns) {
	            applyNS(c, ns)
	          }
	          // default key for nested array children (likely generated by v-for)
	          if (c.tag && c.key == null && nestedIndex != null) {
	            c.key = "__vlist_" + nestedIndex + "_" + i + "__"
	          }
	          res.push(c)
	        }
	      }
	    }
	    return res
	  }
	}

	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}

	function applyNS (vnode, ns) {
	  if (vnode.tag && !vnode.ns) {
	    vnode.ns = ns
	    if (vnode.children) {
	      for (var i = 0, l = vnode.children.length; i < l; i++) {
	        applyNS(vnode.children[i], ns)
	      }
	    }
	  }
	}

	function getFirstComponentChild (children) {
	  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
	}

	function mergeVNodeHook (def$$1, key, hook) {
	  var oldHook = def$$1[key]
	  if (oldHook) {
	    var injectedHash = def$$1.__injected || (def$$1.__injected = {})
	    if (!injectedHash[key]) {
	      injectedHash[key] = true
	      def$$1[key] = function () {
	        oldHook.apply(this, arguments)
	        hook.apply(this, arguments)
	      }
	    }
	  } else {
	    def$$1[key] = hook
	  }
	}

	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1
	) {
	  var name, cur, old, fn, event, capture
	  for (name in on) {
	    cur = on[name]
	    old = oldOn[name]
	    if (!cur) {
	      "development" !== 'production' && warn(
	        ("Handler for event \"" + name + "\" is undefined.")
	      )
	    } else if (!old) {
	      capture = name.charAt(0) === '!'
	      event = capture ? name.slice(1) : name
	      if (Array.isArray(cur)) {
	        add(event, (cur.invoker = arrInvoker(cur)), capture)
	      } else {
	        if (!cur.invoker) {
	          fn = cur
	          cur = on[name] = {}
	          cur.fn = fn
	          cur.invoker = fnInvoker(cur)
	        }
	        add(event, cur.invoker, capture)
	      }
	    } else if (cur !== old) {
	      if (Array.isArray(old)) {
	        old.length = cur.length
	        for (var i = 0; i < old.length; i++) { old[i] = cur[i] }
	        on[name] = old
	      } else {
	        old.fn = cur
	        on[name] = old
	      }
	    }
	  }
	  for (name in oldOn) {
	    if (!on[name]) {
	      event = name.charAt(0) === '!' ? name.slice(1) : name
	      remove$$1(event, oldOn[name].invoker)
	    }
	  }
	}

	function arrInvoker (arr) {
	  return function (ev) {
	    var arguments$1 = arguments;

	    var single = arguments.length === 1
	    for (var i = 0; i < arr.length; i++) {
	      single ? arr[i](ev) : arr[i].apply(null, arguments$1)
	    }
	  }
	}

	function fnInvoker (o) {
	  return function (ev) {
	    var single = arguments.length === 1
	    single ? o.fn(ev) : o.fn.apply(null, arguments)
	  }
	}

	/*  */

	var activeInstance = null

	function initLifecycle (vm) {
	  var options = vm.$options

	  // locate first non-abstract parent
	  var parent = options.parent
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent
	    }
	    parent.$children.push(vm)
	  }

	  vm.$parent = parent
	  vm.$root = parent ? parent.$root : vm

	  vm.$children = []
	  vm.$refs = {}

	  vm._watcher = null
	  vm._inactive = false
	  vm._isMounted = false
	  vm._isDestroyed = false
	  vm._isBeingDestroyed = false
	}

	function lifecycleMixin (Vue) {
	  Vue.prototype._mount = function (
	    el,
	    hydrating
	  ) {
	    var vm = this
	    vm.$el = el
	    if (!vm.$options.render) {
	      vm.$options.render = emptyVNode
	      {
	        /* istanbul ignore if */
	        if (vm.$options.template) {
	          warn(
	            'You are using the runtime-only build of Vue where the template ' +
	            'option is not available. Either pre-compile the templates into ' +
	            'render functions, or use the compiler-included build.',
	            vm
	          )
	        } else {
	          warn(
	            'Failed to mount component: template or render function not defined.',
	            vm
	          )
	        }
	      }
	    }
	    callHook(vm, 'beforeMount')
	    vm._watcher = new Watcher(vm, function () {
	      vm._update(vm._render(), hydrating)
	    }, noop)
	    hydrating = false
	    // root instance, call mounted on self
	    // mounted is called for child components in its inserted hook
	    if (vm.$root === vm) {
	      vm._isMounted = true
	      callHook(vm, 'mounted')
	    }
	    return vm
	  }

	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate')
	    }
	    var prevEl = vm.$el
	    var prevActiveInstance = activeInstance
	    activeInstance = vm
	    var prevVnode = vm._vnode
	    vm._vnode = vnode
	    if (!prevVnode) {
	      // Vue.prototype.__patch__ is injected in entry points
	      // based on the rendering backend used.
	      vm.$el = vm.__patch__(vm.$el, vnode, hydrating)
	    } else {
	      vm.$el = vm.__patch__(prevVnode, vnode)
	    }
	    activeInstance = prevActiveInstance
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el
	    }
	    if (vm._isMounted) {
	      callHook(vm, 'updated')
	    }
	  }

	  Vue.prototype._updateFromParent = function (
	    propsData,
	    listeners,
	    parentVnode,
	    renderChildren
	  ) {
	    var vm = this
	    var hasChildren = !!(vm.$options._renderChildren || renderChildren)
	    vm.$options._parentVnode = parentVnode
	    vm.$options._renderChildren = renderChildren
	    // update props
	    if (propsData && vm.$options.props) {
	      observerState.shouldConvert = false
	      {
	        observerState.isSettingProps = true
	      }
	      var propKeys = vm.$options._propKeys || []
	      for (var i = 0; i < propKeys.length; i++) {
	        var key = propKeys[i]
	        vm[key] = validateProp(key, vm.$options.props, propsData, vm)
	      }
	      observerState.shouldConvert = true
	      {
	        observerState.isSettingProps = false
	      }
	    }
	    // update listeners
	    if (listeners) {
	      var oldListeners = vm.$options._parentListeners
	      vm.$options._parentListeners = listeners
	      vm._updateListeners(listeners, oldListeners)
	    }
	    // resolve slots + force update if has children
	    if (hasChildren) {
	      vm.$slots = resolveSlots(renderChildren, vm._renderContext)
	      vm.$forceUpdate()
	    }
	  }

	  Vue.prototype.$forceUpdate = function () {
	    var vm = this
	    if (vm._watcher) {
	      vm._watcher.update()
	    }
	  }

	  Vue.prototype.$destroy = function () {
	    var vm = this
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy')
	    vm._isBeingDestroyed = true
	    // remove self from parent
	    var parent = vm.$parent
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove$1(parent.$children, vm)
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown()
	    }
	    var i = vm._watchers.length
	    while (i--) {
	      vm._watchers[i].teardown()
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--
	    }
	    // call the last hook...
	    vm._isDestroyed = true
	    callHook(vm, 'destroyed')
	    // turn off all instance listeners.
	    vm.$off()
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null
	    }
	  }
	}

	function callHook (vm, hook) {
	  var handlers = vm.$options[hook]
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(vm)
	    }
	  }
	  vm.$emit('hook:' + hook)
	}

	/*  */

	var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 }
	var hooksToMerge = Object.keys(hooks)

	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (!Ctor) {
	    return
	  }

	  if (isObject(Ctor)) {
	    Ctor = Vue$3.extend(Ctor)
	  }

	  if (typeof Ctor !== 'function') {
	    {
	      warn(("Invalid Component definition: " + (String(Ctor))), context)
	    }
	    return
	  }

	  // async component
	  if (!Ctor.cid) {
	    if (Ctor.resolved) {
	      Ctor = Ctor.resolved
	    } else {
	      Ctor = resolveAsyncComponent(Ctor, function () {
	        // it's ok to queue this on every render because
	        // $forceUpdate is buffered by the scheduler.
	        context.$forceUpdate()
	      })
	      if (!Ctor) {
	        // return nothing if this is indeed an async component
	        // wait for the callback to trigger parent update.
	        return
	      }
	    }
	  }

	  data = data || {}

	  // extract props
	  var propsData = extractProps(data, Ctor)

	  // functional component
	  if (Ctor.options.functional) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }

	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on
	  // replace with listeners with .native modifier
	  data.on = data.nativeOn

	  if (Ctor.options.abstract) {
	    // abstract components do not keep anything
	    // other than props & listeners
	    data = {}
	  }

	  // merge component management hooks onto the placeholder node
	  mergeHooks(data)

	  // return a placeholder vnode
	  var name = Ctor.options.name || tag
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
	  )
	  return vnode
	}

	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  context,
	  children
	) {
	  var props = {}
	  var propOptions = Ctor.options.props
	  if (propOptions) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData)
	    }
	  }
	  return Ctor.options.render.call(
	    null,
	    // ensure the createElement function in functional components
	    // gets a unique context - this is necessary for correct named slot check
	    bind$1(createElement, { _self: Object.create(context) }),
	    {
	      props: props,
	      data: data,
	      parent: context,
	      children: normalizeChildren(children),
	      slots: function () { return resolveSlots(children, context); }
	    }
	  )
	}

	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent // activeInstance in lifecycle state
	) {
	  var vnodeComponentOptions = vnode.componentOptions
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children
	  }
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate
	  if (inlineTemplate) {
	    options.render = inlineTemplate.render
	    options.staticRenderFns = inlineTemplate.staticRenderFns
	  }
	  return new vnodeComponentOptions.Ctor(options)
	}

	function init (vnode, hydrating) {
	  if (!vnode.child || vnode.child._isDestroyed) {
	    var child = vnode.child = createComponentInstanceForVnode(vnode, activeInstance)
	    child.$mount(hydrating ? vnode.elm : undefined, hydrating)
	  }
	}

	function prepatch (
	  oldVnode,
	  vnode
	) {
	  var options = vnode.componentOptions
	  var child = vnode.child = oldVnode.child
	  child._updateFromParent(
	    options.propsData, // updated props
	    options.listeners, // updated listeners
	    vnode, // new parent vnode
	    options.children // new children
	  )
	}

	function insert (vnode) {
	  if (!vnode.child._isMounted) {
	    vnode.child._isMounted = true
	    callHook(vnode.child, 'mounted')
	  }
	  if (vnode.data.keepAlive) {
	    vnode.child._inactive = false
	    callHook(vnode.child, 'activated')
	  }
	}

	function destroy$1 (vnode) {
	  if (!vnode.child._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.child.$destroy()
	    } else {
	      vnode.child._inactive = true
	      callHook(vnode.child, 'deactivated')
	    }
	  }
	}

	function resolveAsyncComponent (
	  factory,
	  cb
	) {
	  if (factory.requested) {
	    // pool callbacks
	    factory.pendingCallbacks.push(cb)
	  } else {
	    factory.requested = true
	    var cbs = factory.pendingCallbacks = [cb]
	    var sync = true

	    var resolve = function (res) {
	      if (isObject(res)) {
	        res = Vue$3.extend(res)
	      }
	      // cache resolved
	      factory.resolved = res
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res)
	        }
	      }
	    }

	    var reject = function (reason) {
	      "development" !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      )
	    }

	    var res = factory(resolve, reject)

	    // handle promise
	    if (res && typeof res.then === 'function' && !factory.resolved) {
	      res.then(resolve, reject)
	    }

	    sync = false
	    // return in case resolved synchronously
	    return factory.resolved
	  }
	}

	function extractProps (data, Ctor) {
	  // we are only extrating raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props
	  if (!propOptions) {
	    return
	  }
	  var res = {}
	  var attrs = data.attrs;
	  var props = data.props;
	  var domProps = data.domProps;
	  if (attrs || props || domProps) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key)
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey) ||
	      checkProp(res, domProps, key, altKey)
	    }
	  }
	  return res
	}

	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (hash) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key]
	      if (!preserve) {
	        delete hash[key]
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey]
	      if (!preserve) {
	        delete hash[altKey]
	      }
	      return true
	    }
	  }
	  return false
	}

	function mergeHooks (data) {
	  if (!data.hook) {
	    data.hook = {}
	  }
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i]
	    var fromParent = data.hook[key]
	    var ours = hooks[key]
	    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours
	  }
	}

	function mergeHook$1 (a, b) {
	  // since all hooks have at most two args, use fixed args
	  // to avoid having to use fn.apply().
	  return function (_, __) {
	    a(_, __)
	    b(_, __)
	  }
	}

	/*  */

	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  tag,
	  data,
	  children
	) {
	  if (data && (Array.isArray(data) || typeof data !== 'object')) {
	    children = data
	    data = undefined
	  }
	  // make sure to use real instance instead of proxy as context
	  return _createElement(this._self, tag, data, children)
	}

	function _createElement (
	  context,
	  tag,
	  data,
	  children
	) {
	  if (data && data.__ob__) {
	    "development" !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    )
	    return
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return emptyVNode()
	  }
	  if (typeof tag === 'string') {
	    var Ctor
	    var ns = config.getTagNamespace(tag)
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      return new VNode(
	        tag, data, normalizeChildren(children, ns),
	        undefined, undefined, ns, context
	      )
	    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      return createComponent(Ctor, data, context, children, tag)
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      return new VNode(
	        tag, data, normalizeChildren(children, ns),
	        undefined, undefined, ns, context
	      )
	    }
	  } else {
	    // direct component options / constructor
	    return createComponent(tag, data, context, children)
	  }
	}

	/*  */

	function initRender (vm) {
	  vm.$vnode = null // the placeholder node in parent tree
	  vm._vnode = null // the root of the child tree
	  vm._staticTrees = null
	  vm._renderContext = vm.$options._parentVnode && vm.$options._parentVnode.context
	  vm.$slots = resolveSlots(vm.$options._renderChildren, vm._renderContext)
	  // bind the public createElement fn to this instance
	  // so that we get proper render context inside it.
	  vm.$createElement = bind$1(createElement, vm)
	  if (vm.$options.el) {
	    vm.$mount(vm.$options.el)
	  }
	}

	function renderMixin (Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this)
	  }

	  Vue.prototype._render = function () {
	    var vm = this
	    var ref = vm.$options;
	    var render = ref.render;
	    var staticRenderFns = ref.staticRenderFns;
	    var _parentVnode = ref._parentVnode;

	    if (vm._isMounted) {
	      // clone slot nodes on re-renders
	      for (var key in vm.$slots) {
	        vm.$slots[key] = cloneVNodes(vm.$slots[key])
	      }
	    }

	    if (staticRenderFns && !vm._staticTrees) {
	      vm._staticTrees = []
	    }
	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode
	    // render self
	    var vnode
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement)
	    } catch (e) {
	      {
	        warn(("Error when rendering " + (formatComponentName(vm)) + ":"))
	      }
	      /* istanbul ignore else */
	      if (config.errorHandler) {
	        config.errorHandler.call(null, e, vm)
	      } else {
	        if (config._isServer) {
	          throw e
	        } else {
	          setTimeout(function () { throw e }, 0)
	        }
	      }
	      // return previous vnode to prevent render error causing blank component
	      vnode = vm._vnode
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if ("development" !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        )
	      }
	      vnode = emptyVNode()
	    }
	    // set parent
	    vnode.parent = _parentVnode
	    return vnode
	  }

	  // shorthands used in render functions
	  Vue.prototype._h = createElement
	  // toString for mustaches
	  Vue.prototype._s = _toString
	  // number conversion
	  Vue.prototype._n = toNumber
	  // empty vnode
	  Vue.prototype._e = emptyVNode
	  // loose equal
	  Vue.prototype._q = looseEqual
	  // loose indexOf
	  Vue.prototype._i = looseIndexOf

	  // render static tree by index
	  Vue.prototype._m = function renderStatic (
	    index,
	    isInFor
	  ) {
	    var tree = this._staticTrees[index]
	    // if has already-rendered static tree and not inside v-for,
	    // we can reuse the same tree by doing a shallow clone.
	    if (tree && !isInFor) {
	      return Array.isArray(tree)
	        ? cloneVNodes(tree)
	        : cloneVNode(tree)
	    }
	    // otherwise, render a fresh tree.
	    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy)
	    if (Array.isArray(tree)) {
	      for (var i = 0; i < tree.length; i++) {
	        tree[i].isStatic = true
	        tree[i].key = "__static__" + index + "_" + i
	      }
	    } else {
	      tree.isStatic = true
	      tree.key = "__static__" + index
	    }
	    return tree
	  }

	  // filter resolution helper
	  var identity = function (_) { return _; }
	  Vue.prototype._f = function resolveFilter (id) {
	    return resolveAsset(this.$options, 'filters', id, true) || identity
	  }

	  // render v-for
	  Vue.prototype._l = function renderList (
	    val,
	    render
	  ) {
	    var ret, i, l, keys, key
	    if (Array.isArray(val)) {
	      ret = new Array(val.length)
	      for (i = 0, l = val.length; i < l; i++) {
	        ret[i] = render(val[i], i)
	      }
	    } else if (typeof val === 'number') {
	      ret = new Array(val)
	      for (i = 0; i < val; i++) {
	        ret[i] = render(i + 1, i)
	      }
	    } else if (isObject(val)) {
	      keys = Object.keys(val)
	      ret = new Array(keys.length)
	      for (i = 0, l = keys.length; i < l; i++) {
	        key = keys[i]
	        ret[i] = render(val[key], key, i)
	      }
	    }
	    return ret
	  }

	  // renderSlot
	  Vue.prototype._t = function (
	    name,
	    fallback
	  ) {
	    var slotNodes = this.$slots[name]
	    // warn duplicate slot usage
	    if (slotNodes && "development" !== 'production') {
	      slotNodes._rendered && warn(
	        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	        "- this will likely cause render errors.",
	        this
	      )
	      slotNodes._rendered = true
	    }
	    return slotNodes || fallback
	  }

	  // apply v-bind object
	  Vue.prototype._b = function bindProps (
	    data,
	    value,
	    asProp
	  ) {
	    if (value) {
	      if (!isObject(value)) {
	        "development" !== 'production' && warn(
	          'v-bind without argument expects an Object or Array value',
	          this
	        )
	      } else {
	        if (Array.isArray(value)) {
	          value = toObject(value)
	        }
	        for (var key in value) {
	          if (key === 'class' || key === 'style') {
	            data[key] = value[key]
	          } else {
	            var hash = asProp || config.mustUseProp(key)
	              ? data.domProps || (data.domProps = {})
	              : data.attrs || (data.attrs = {})
	            hash[key] = value[key]
	          }
	        }
	      }
	    }
	    return data
	  }

	  // expose v-on keyCodes
	  Vue.prototype._k = function getKeyCodes (key) {
	    return config.keyCodes[key]
	  }
	}

	function resolveSlots (
	  renderChildren,
	  context
	) {
	  var slots = {}
	  if (!renderChildren) {
	    return slots
	  }
	  var children = normalizeChildren(renderChildren) || []
	  var defaultSlot = []
	  var name, child
	  for (var i = 0, l = children.length; i < l; i++) {
	    child = children[i]
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if (child.context === context &&
	        child.data && (name = child.data.slot)) {
	      var slot = (slots[name] || (slots[name] = []))
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children)
	      } else {
	        slot.push(child)
	      }
	    } else {
	      defaultSlot.push(child)
	    }
	  }
	  // ignore single whitespace
	  if (defaultSlot.length && !(
	    defaultSlot.length === 1 &&
	    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
	  )) {
	    slots.default = defaultSlot
	  }
	  return slots
	}

	/*  */

	function initEvents (vm) {
	  vm._events = Object.create(null)
	  // init parent attached events
	  var listeners = vm.$options._parentListeners
	  var on = bind$1(vm.$on, vm)
	  var off = bind$1(vm.$off, vm)
	  vm._updateListeners = function (listeners, oldListeners) {
	    updateListeners(listeners, oldListeners || {}, on, off)
	  }
	  if (listeners) {
	    vm._updateListeners(listeners)
	  }
	}

	function eventsMixin (Vue) {
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn)
	    return vm
	  }

	  Vue.prototype.$once = function (event, fn) {
	    var vm = this
	    function on () {
	      vm.$off(event, on)
	      fn.apply(vm, arguments)
	    }
	    on.fn = fn
	    vm.$on(event, on)
	    return vm
	  }

	  Vue.prototype.$off = function (event, fn) {
	    var vm = this
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null)
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event]
	    if (!cbs) {
	      return vm
	    }
	    if (arguments.length === 1) {
	      vm._events[event] = null
	      return vm
	    }
	    // specific handler
	    var cb
	    var i = cbs.length
	    while (i--) {
	      cb = cbs[i]
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1)
	        break
	      }
	    }
	    return vm
	  }

	  Vue.prototype.$emit = function (event) {
	    var vm = this
	    var cbs = vm._events[event]
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs
	      var args = toArray(arguments, 1)
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        cbs[i].apply(vm, args)
	      }
	    }
	    return vm
	  }
	}

	/*  */

	var uid = 0

	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this
	    // a uid
	    vm._uid = uid++
	    // a flag to avoid this being observed
	    vm._isVue = true
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options)
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm),
	        options || {},
	        vm
	      )
	    }
	    /* istanbul ignore else */
	    {
	      initProxy(vm)
	    }
	    // expose real self
	    vm._self = vm
	    initLifecycle(vm)
	    initEvents(vm)
	    callHook(vm, 'beforeCreate')
	    initState(vm)
	    callHook(vm, 'created')
	    initRender(vm)
	  }

	  function initInternalComponent (vm, options) {
	    var opts = vm.$options = Object.create(resolveConstructorOptions(vm))
	    // doing this because it's faster than dynamic enumeration.
	    opts.parent = options.parent
	    opts.propsData = options.propsData
	    opts._parentVnode = options._parentVnode
	    opts._parentListeners = options._parentListeners
	    opts._renderChildren = options._renderChildren
	    opts._componentTag = options._componentTag
	    if (options.render) {
	      opts.render = options.render
	      opts.staticRenderFns = options.staticRenderFns
	    }
	  }

	  function resolveConstructorOptions (vm) {
	    var Ctor = vm.constructor
	    var options = Ctor.options
	    if (Ctor.super) {
	      var superOptions = Ctor.super.options
	      var cachedSuperOptions = Ctor.superOptions
	      if (superOptions !== cachedSuperOptions) {
	        // super option changed
	        Ctor.superOptions = superOptions
	        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
	        if (options.name) {
	          options.components[options.name] = Ctor
	        }
	      }
	    }
	    return options
	  }
	}

	function Vue$3 (options) {
	  if ("development" !== 'production' &&
	    !(this instanceof Vue$3)) {
	    warn('Vue is a constructor and should be called with the `new` keyword')
	  }
	  this._init(options)
	}

	initMixin(Vue$3)
	stateMixin(Vue$3)
	eventsMixin(Vue$3)
	lifecycleMixin(Vue$3)
	renderMixin(Vue$3)

	var warn = noop
	var formatComponentName

	{
	  var hasConsole = typeof console !== 'undefined'

	  warn = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.error("[Vue warn]: " + msg + " " + (
	        vm ? formatLocation(formatComponentName(vm)) : ''
	      ))
	    }
	  }

	  formatComponentName = function (vm) {
	    if (vm.$root === vm) {
	      return 'root instance'
	    }
	    var name = vm._isVue
	      ? vm.$options.name || vm.$options._componentTag
	      : vm.name
	    return name ? ("component <" + name + ">") : "anonymous component"
	  }

	  var formatLocation = function (str) {
	    if (str === 'anonymous component') {
	      str += " - use the \"name\" option for better debugging messages."
	    }
	    return ("(found in " + str + ")")
	  }
	}

	/*  */

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies

	/**
	 * Options with restrictions
	 */
	{
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      )
	    }
	    return defaultStrat(parent, child)
	  }

	  strats.name = function (parent, child, vm) {
	    if (vm && child) {
	      warn(
	        'options "name" can only be used as a component definition option, ' +
	        'not during instance creation.'
	      )
	    }
	    return defaultStrat(parent, child)
	  }
	}

	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  var key, toVal, fromVal
	  for (key in from) {
	    toVal = to[key]
	    fromVal = from[key]
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal)
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal)
	    }
	  }
	  return to
	}

	/**
	 * Data
	 */
	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      "development" !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      )
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	}

	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}

	config._lifecycleHooks.forEach(function (hook) {
	  strats[hook] = mergeHook
	})

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal || null)
	  return childVal
	    ? extend(res, childVal)
	    : res
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets
	})

	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (parentVal, childVal) {
	  /* istanbul ignore if */
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = {}
	  extend(ret, parentVal)
	  for (var key in childVal) {
	    var parent = ret[key]
	    var child = childVal[key]
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent]
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child]
	  }
	  return ret
	}

	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null)
	  extend(ret, parentVal)
	  extend(ret, childVal)
	  return ret
	}

	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	}

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 */
	function normalizeComponents (options) {
	  if (options.components) {
	    var components = options.components
	    var def
	    for (var key in components) {
	      var lower = key.toLowerCase()
	      if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	        "development" !== 'production' && warn(
	          'Do not use built-in or reserved HTML elements as component ' +
	          'id: ' + key
	        )
	        continue
	      }
	      def = components[key]
	      if (isPlainObject(def)) {
	        components[key] = Vue$3.extend(def)
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options) {
	  var props = options.props
	  if (!props) { return }
	  var res = {}
	  var i, val, name
	  if (Array.isArray(props)) {
	    i = props.length
	    while (i--) {
	      val = props[i]
	      if (typeof val === 'string') {
	        name = camelize(val)
	        res[name] = { type: null }
	      } else {
	        warn('props must be strings when using array syntax.')
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key]
	      name = camelize(key)
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val }
	    }
	  }
	  options.props = res
	}

	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key]
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def }
	      }
	    }
	  }
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  normalizeComponents(child)
	  normalizeProps(child)
	  normalizeDirectives(child)
	  var extendsFrom = child.extends
	  if (extendsFrom) {
	    parent = typeof extendsFrom === 'function'
	      ? mergeOptions(parent, extendsFrom.options, vm)
	      : mergeOptions(parent, extendsFrom, vm)
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i]
	      if (mixin.prototype instanceof Vue$3) {
	        mixin = mixin.options
	      }
	      parent = mergeOptions(parent, mixin, vm)
	    }
	  }
	  var options = {}
	  var key
	  for (key in parent) {
	    mergeField(key)
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key)
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat
	    options[key] = strat(parent[key], child[key], vm, key)
	  }
	  return options
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type]
	  var res = assets[id] ||
	    // camelCase ID
	    assets[camelize(id)] ||
	    // Pascal Case ID
	    assets[capitalize(camelize(id))]
	  if ("development" !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    )
	  }
	  return res
	}

	/*  */

	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  var prop = propOptions[key]
	  var absent = !hasOwn(propsData, key)
	  var value = propsData[key]
	  // handle boolean props
	  if (getType(prop.type) === 'Boolean') {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false
	    } else if (value === '' || value === hyphenate(key)) {
	      value = true
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key)
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldConvert = observerState.shouldConvert
	    observerState.shouldConvert = true
	    observe(value)
	    observerState.shouldConvert = prevShouldConvert
	  }
	  {
	    assertProp(prop, key, value, vm, absent)
	  }
	  return value
	}

	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, name) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    "development" !== 'production' && warn(
	      'Invalid default value for prop "' + name + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    )
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && prop.type !== Function
	    ? def.call(vm)
	    : def
	}

	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    )
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type
	  var valid = !type || type === true
	  var expectedTypes = []
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type]
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i])
	      expectedTypes.push(assertedType.expectedType)
	      valid = assertedType.valid
	    }
	  }
	  if (!valid) {
	    warn(
	      'Invalid prop: type check failed for prop "' + name + '".' +
	      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
	      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
	      vm
	    )
	    return
	  }
	  var validator = prop.validator
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      )
	    }
	  }
	}

	/**
	 * Assert the type of a value
	 */
	function assertType (value, type) {
	  var valid
	  var expectedType = getType(type)
	  if (expectedType === 'String') {
	    valid = typeof value === (expectedType = 'string')
	  } else if (expectedType === 'Number') {
	    valid = typeof value === (expectedType = 'number')
	  } else if (expectedType === 'Boolean') {
	    valid = typeof value === (expectedType = 'boolean')
	  } else if (expectedType === 'Function') {
	    valid = typeof value === (expectedType = 'function')
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value)
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value)
	  } else {
	    valid = value instanceof type
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}

	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/)
	  return match && match[1]
	}



	var util = Object.freeze({
		defineReactive: defineReactive$$1,
		_toString: _toString,
		toNumber: toNumber,
		makeMap: makeMap,
		isBuiltInTag: isBuiltInTag,
		remove: remove$1,
		hasOwn: hasOwn,
		isPrimitive: isPrimitive,
		cached: cached,
		camelize: camelize,
		capitalize: capitalize,
		hyphenate: hyphenate,
		bind: bind$1,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		toObject: toObject,
		noop: noop,
		no: no,
		genStaticKeys: genStaticKeys,
		looseEqual: looseEqual,
		looseIndexOf: looseIndexOf,
		isReserved: isReserved,
		def: def,
		parsePath: parsePath,
		hasProto: hasProto,
		inBrowser: inBrowser,
		UA: UA,
		isIE: isIE,
		isIE9: isIE9,
		isEdge: isEdge,
		isAndroid: isAndroid,
		isIOS: isIOS,
		devtools: devtools,
		nextTick: nextTick,
		get _Set () { return _Set; },
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		get warn () { return warn; },
		get formatComponentName () { return formatComponentName; },
		validateProp: validateProp
	});

	/*  */

	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return
	    }
	    // additional parameters
	    var args = toArray(arguments, 1)
	    args.unshift(this)
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args)
	    } else {
	      plugin.apply(null, args)
	    }
	    plugin.installed = true
	    return this
	  }
	}

	/*  */

	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin)
	  }
	}

	/*  */

	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0
	  var cid = 1

	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {}
	    var Super = this
	    var isFirstExtend = Super.cid === 0
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor
	    }
	    var name = extendOptions.name || Super.options.name
	    {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn(
	          'Invalid component name: "' + name + '". Component names ' +
	          'can only contain alphanumeric characaters and the hyphen.'
	        )
	        name = null
	      }
	    }
	    var Sub = function VueComponent (options) {
	      this._init(options)
	    }
	    Sub.prototype = Object.create(Super.prototype)
	    Sub.prototype.constructor = Sub
	    Sub.cid = cid++
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    )
	    Sub['super'] = Super
	    // allow further extension
	    Sub.extend = Super.extend
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type]
	    })
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub
	    }
	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options
	    Sub.extendOptions = extendOptions
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub
	    }
	    return Sub
	  }
	}

	/*  */

	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        {
	          if (type === 'component' && config.isReservedTag(id)) {
	            warn(
	              'Do not use built-in or reserved HTML elements as component ' +
	              'id: ' + id
	            )
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id
	          definition = Vue.extend(definition)
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition }
	        }
	        this.options[type + 's'][id] = definition
	        return definition
	      }
	    }
	  })
	}

	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,
	  created: function created () {
	    this.cache = Object.create(null)
	  },
	  render: function render () {
	    var vnode = getFirstComponentChild(this.$slots.default)
	    if (vnode && vnode.componentOptions) {
	      var opts = vnode.componentOptions
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? opts.Ctor.cid + '::' + opts.tag
	        : vnode.key
	      if (this.cache[key]) {
	        vnode.child = this.cache[key].child
	      } else {
	        this.cache[key] = vnode
	      }
	      vnode.data.keepAlive = true
	    }
	    return vnode
	  },
	  destroyed: function destroyed () {
	    var this$1 = this;

	    for (var key in this.cache) {
	      var vnode = this$1.cache[key]
	      callHook(vnode.child, 'deactivated')
	      vnode.child.$destroy()
	    }
	  }
	}

	var builtInComponents = {
	  KeepAlive: KeepAlive
	}

	/*  */

	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {}
	  configDef.get = function () { return config; }
	  {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      )
	    }
	  }
	  Object.defineProperty(Vue, 'config', configDef)
	  Vue.util = util
	  Vue.set = set
	  Vue.delete = del
	  Vue.nextTick = nextTick

	  Vue.options = Object.create(null)
	  config._assetTypes.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null)
	  })

	  extend(Vue.options.components, builtInComponents)

	  initUse(Vue)
	  initMixin$1(Vue)
	  initExtend(Vue)
	  initAssetRegisters(Vue)
	}

	initGlobalAPI(Vue$3)

	Object.defineProperty(Vue$3.prototype, '$isServer', {
	  get: function () { return config._isServer; }
	})

	Vue$3.version = '2.0.0'

	/*  */

	// attributes that should be using props for binding
	var mustUseProp = makeMap('value,selected,checked,muted')

	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck')

	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	)

	var isAttr = makeMap(
	  'accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' +
	  'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' +
	  'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,' +
	  'name,contenteditable,contextmenu,controls,coords,data,datetime,default,' +
	  'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,' +
	  'form,formaction,headers,<th>,height,hidden,high,href,hreflang,http-equiv,' +
	  'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' +
	  'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' +
	  'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' +
	  'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' +
	  'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' +
	  'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' +
	  'target,title,type,usemap,value,width,wrap'
	)



	var xlinkNS = 'http://www.w3.org/1999/xlink'

	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	}

	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	}

	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	}

	/*  */

	function genClassForVnode (vnode) {
	  var data = vnode.data
	  var parentNode = vnode
	  var childNode = vnode
	  while (childNode.child) {
	    childNode = childNode.child._vnode
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data)
	    }
	  }
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data)
	    }
	  }
	  return genClassFromData(data)
	}

	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: child.class
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}

	function genClassFromData (data) {
	  var dynamicClass = data.class
	  var staticClass = data.staticClass
	  if (staticClass || dynamicClass) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}

	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}

	function stringifyClass (value) {
	  var res = ''
	  if (!value) {
	    return res
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  if (Array.isArray(value)) {
	    var stringified
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        if ((stringified = stringifyClass(value[i]))) {
	          res += stringified + ' '
	        }
	      }
	    }
	    return res.slice(0, -1)
	  }
	  if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) { res += key + ' ' }
	    }
	    return res.slice(0, -1)
	  }
	  /* istanbul ignore next */
	  return res
	}

	/*  */

	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML'
	}

	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template'
	)

	var isUnaryTag = makeMap(
	  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
	  'link,meta,param,source,track,wbr',
	  true
	)

	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag = makeMap(
	  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',
	  true
	)

	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = makeMap(
	  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
	  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
	  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
	  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
	  'title,tr,track',
	  true
	)

	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,' +
	  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	)

	var isPreTag = function (tag) { return tag === 'pre'; }

	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	}

	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}

	var unknownElementCache = Object.create(null)
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase()
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag)
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}

	/*  */

	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selector = el
	    el = document.querySelector(el)
	    if (!el) {
	      "development" !== 'production' && warn(
	        'Cannot find element: ' + selector
	      )
	      return document.createElement('div')
	    }
	  }
	  return el
	}

	/*  */

	function createElement$1 (tagName) {
	  return document.createElement(tagName)
	}

	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}

	function createTextNode (text) {
	  return document.createTextNode(text)
	}

	function createComment (text) {
	  return document.createComment(text)
	}

	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode)
	}

	function removeChild (node, child) {
	  node.removeChild(child)
	}

	function appendChild (node, child) {
	  node.appendChild(child)
	}

	function parentNode (node) {
	  return node.parentNode
	}

	function nextSibling (node) {
	  return node.nextSibling
	}

	function tagName (node) {
	  return node.tagName
	}

	function setTextContent (node, text) {
	  node.textContent = text
	}

	function childNodes (node) {
	  return node.childNodes
	}

	function setAttribute (node, key, val) {
	  node.setAttribute(key, val)
	}


	var nodeOps = Object.freeze({
		createElement: createElement$1,
		createElementNS: createElementNS,
		createTextNode: createTextNode,
		createComment: createComment,
		insertBefore: insertBefore,
		removeChild: removeChild,
		appendChild: appendChild,
		parentNode: parentNode,
		nextSibling: nextSibling,
		tagName: tagName,
		setTextContent: setTextContent,
		childNodes: childNodes,
		setAttribute: setAttribute
	});

	/*  */

	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode)
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true)
	      registerRef(vnode)
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true)
	  }
	}

	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref
	  if (!key) { return }

	  var vm = vnode.context
	  var ref = vnode.child || vnode.elm
	  var refs = vm.$refs
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove$1(refs[key], ref)
	    } else if (refs[key] === ref) {
	      refs[key] = undefined
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (Array.isArray(refs[key])) {
	        refs[key].push(ref)
	      } else {
	        refs[key] = [ref]
	      }
	    } else {
	      refs[key] = ref
	    }
	  }
	}

	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *

	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */

	var emptyData = {}
	var emptyNode = new VNode('', emptyData, [])
	var hooks$1 = ['create', 'update', 'postpatch', 'remove', 'destroy']

	function isUndef (s) {
	  return s == null
	}

	function isDef (s) {
	  return s != null
	}

	function sameVnode (vnode1, vnode2) {
	  return (
	    vnode1.key === vnode2.key &&
	    vnode1.tag === vnode2.tag &&
	    vnode1.isComment === vnode2.isComment &&
	    !vnode1.data === !vnode2.data
	  )
	}

	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key
	  var map = {}
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key
	    if (isDef(key)) { map[key] = i }
	  }
	  return map
	}

	function createPatchFunction (backend) {
	  var i, j
	  var cbs = {}

	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;

	  for (i = 0; i < hooks$1.length; ++i) {
	    cbs[hooks$1[i]] = []
	    for (j = 0; j < modules.length; ++j) {
	      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]) }
	    }
	  }

	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }

	  function createRmCb (childElm, listeners) {
	    function remove$$1 () {
	      if (--remove$$1.listeners === 0) {
	        removeElement(childElm)
	      }
	    }
	    remove$$1.listeners = listeners
	    return remove$$1
	  }

	  function removeElement (el) {
	    var parent = nodeOps.parentNode(el)
	    nodeOps.removeChild(parent, el)
	  }

	  function createElm (vnode, insertedVnodeQueue, nested) {
	    var i
	    var data = vnode.data
	    vnode.isRootInsert = !nested
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode) }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(i = vnode.child)) {
	        initComponent(vnode, insertedVnodeQueue)
	        return vnode.elm
	      }
	    }
	    var children = vnode.children
	    var tag = vnode.tag
	    if (isDef(tag)) {
	      {
	        if (
	          !vnode.ns &&
	          !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) &&
	          config.isUnknownElement(tag)
	        ) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          )
	        }
	      }
	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag)
	      setScope(vnode)
	      createChildren(vnode, children, insertedVnodeQueue)
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue)
	      }
	    } else if (vnode.isComment) {
	      vnode.elm = nodeOps.createComment(vnode.text)
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text)
	    }
	    return vnode.elm
	  }

	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        nodeOps.appendChild(vnode.elm, createElm(children[i], insertedVnodeQueue, true))
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text))
	    }
	  }

	  function isPatchable (vnode) {
	    while (vnode.child) {
	      vnode = vnode.child._vnode
	    }
	    return isDef(vnode.tag)
	  }

	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode)
	    }
	    i = vnode.data.hook // Reuse variable
	    if (isDef(i)) {
	      if (i.create) { i.create(emptyNode, vnode) }
	      if (i.insert) { insertedVnodeQueue.push(vnode) }
	    }
	  }

	  function initComponent (vnode, insertedVnodeQueue) {
	    if (vnode.data.pendingInsert) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert)
	    }
	    vnode.elm = vnode.child.$el
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue)
	      setScope(vnode)
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode)
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode)
	    }
	  }

	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i
	    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '')
	    }
	    if (isDef(i = activeInstance) &&
	        i !== vnode.context &&
	        isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '')
	    }
	  }

	  function addVnodes (parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      nodeOps.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before)
	    }
	  }

	  function invokeDestroyHook (vnode) {
	    var i, j
	    var data = vnode.data
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode) }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode) }
	    }
	    if (isDef(i = vnode.child) && !data.keepAlive) {
	      invokeDestroyHook(i._vnode)
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j])
	      }
	    }
	  }

	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx]
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch)
	          invokeDestroyHook(ch)
	        } else { // Text node
	          nodeOps.removeChild(parentElm, ch.elm)
	        }
	      }
	    }
	  }

	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (rm || isDef(vnode.data)) {
	      var listeners = cbs.remove.length + 1
	      if (!rm) {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners)
	      } else {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm)
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm)
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm)
	      } else {
	        rm()
	      }
	    } else {
	      removeElement(vnode.elm)
	    }
	  }

	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0
	    var newStartIdx = 0
	    var oldEndIdx = oldCh.length - 1
	    var oldStartVnode = oldCh[0]
	    var oldEndVnode = oldCh[oldEndIdx]
	    var newEndIdx = newCh.length - 1
	    var newStartVnode = newCh[0]
	    var newEndVnode = newCh[newEndIdx]
	    var oldKeyToIdx, idxInOld, elmToMove, before

	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly

	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx]
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)
	        oldStartVnode = oldCh[++oldStartIdx]
	        newStartVnode = newCh[++newStartIdx]
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)
	        oldEndVnode = oldCh[--oldEndIdx]
	        newEndVnode = newCh[--newEndIdx]
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
	        oldStartVnode = oldCh[++oldStartIdx]
	        newEndVnode = newCh[--newEndIdx]
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
	        oldEndVnode = oldCh[--oldEndIdx]
	        newStartVnode = newCh[++newStartIdx]
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx) }
	        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null
	        if (isUndef(idxInOld)) { // New element
	          nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm)
	          newStartVnode = newCh[++newStartIdx]
	        } else {
	          elmToMove = oldCh[idxInOld]
	          /* istanbul ignore if */
	          if ("development" !== 'production' && !elmToMove) {
	            warn(
	              'It seems there are duplicate keys that is causing an update error. ' +
	              'Make sure each v-for item has a unique key.'
	            )
	          }
	          if (elmToMove.tag !== newStartVnode.tag) {
	            // same key but different element. treat as new element
	            nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm)
	            newStartVnode = newCh[++newStartIdx]
	          } else {
	            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue)
	            oldCh[idxInOld] = undefined
	            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm)
	            newStartVnode = newCh[++newStartIdx]
	          }
	        }
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      before = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
	      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
	    }
	  }

	  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return
	    }
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (vnode.isStatic &&
	        oldVnode.isStatic &&
	        vnode.key === oldVnode.key &&
	        vnode.isCloned) {
	      vnode.elm = oldVnode.elm
	      return
	    }
	    var i, hook
	    var hasData = isDef(i = vnode.data)
	    if (hasData && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
	      i(oldVnode, vnode)
	    }
	    var elm = vnode.elm = oldVnode.elm
	    var oldCh = oldVnode.children
	    var ch = vnode.children
	    if (hasData && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode) }
	      if (isDef(hook) && isDef(i = hook.update)) { i(oldVnode, vnode) }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly) }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, '') }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1)
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '')
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text)
	    }
	    if (hasData) {
	      for (i = 0; i < cbs.postpatch.length; ++i) { cbs.postpatch[i](oldVnode, vnode) }
	      if (isDef(hook) && isDef(i = hook.postpatch)) { i(oldVnode, vnode) }
	    }
	  }

	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (initial && vnode.parent) {
	      vnode.parent.data.pendingInsert = queue
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i])
	      }
	    }
	  }

	  var bailed = false
	  function hydrate (elm, vnode, insertedVnodeQueue) {
	    {
	      if (!assertNodeMatch(elm, vnode)) {
	        return false
	      }
	    }
	    vnode.elm = elm
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */) }
	      if (isDef(i = vnode.child)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue)
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        var childNodes = nodeOps.childNodes(elm)
	        // empty element, allow client to pick up and populate children
	        if (!childNodes.length) {
	          createChildren(vnode, children, insertedVnodeQueue)
	        } else {
	          var childrenMatch = true
	          if (childNodes.length !== children.length) {
	            childrenMatch = false
	          } else {
	            for (var i$1 = 0; i$1 < children.length; i$1++) {
	              if (!hydrate(childNodes[i$1], children[i$1], insertedVnodeQueue)) {
	                childrenMatch = false
	                break
	              }
	            }
	          }
	          if (!childrenMatch) {
	            if ("development" !== 'production' &&
	                typeof console !== 'undefined' &&
	                !bailed) {
	              bailed = true
	              console.warn('Parent: ', elm)
	              console.warn('Mismatching childNodes vs. VNodes: ', childNodes, children)
	            }
	            return false
	          }
	        }
	      }
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue)
	      }
	    }
	    return true
	  }

	  function assertNodeMatch (node, vnode) {
	    if (vnode.tag) {
	      return (
	        vnode.tag.indexOf('vue-component') === 0 ||
	        vnode.tag === nodeOps.tagName(node).toLowerCase()
	      )
	    } else {
	      return _toString(vnode.text) === node.data
	    }
	  }

	  return function patch (oldVnode, vnode, hydrating, removeOnly) {
	    var elm, parent
	    var isInitialPatch = false
	    var insertedVnodeQueue = []

	    if (!oldVnode) {
	      // empty mount, create new root element
	      isInitialPatch = true
	      createElm(vnode, insertedVnodeQueue)
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType)
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly)
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
	            oldVnode.removeAttribute('server-rendered')
	            hydrating = true
	          }
	          if (hydrating) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true)
	              return oldVnode
	            } else {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              )
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode)
	        }
	        elm = oldVnode.elm
	        parent = nodeOps.parentNode(elm)

	        createElm(vnode, insertedVnodeQueue)

	        // component root element replaced.
	        // update parent placeholder node element.
	        if (vnode.parent) {
	          vnode.parent.elm = vnode.elm
	          if (isPatchable(vnode)) {
	            for (var i = 0; i < cbs.create.length; ++i) {
	              cbs.create[i](emptyNode, vnode.parent)
	            }
	          }
	        }

	        if (parent !== null) {
	          nodeOps.insertBefore(parent, vnode.elm, nodeOps.nextSibling(elm))
	          removeVnodes(parent, [oldVnode], 0, 0)
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode)
	        }
	      }
	    }

	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch)
	    return vnode.elm
	  }
	}

	/*  */

	var directives = {
	  create: function bindDirectives (oldVnode, vnode) {
	    var hasInsert = false
	    forEachDirective(oldVnode, vnode, function (def, dir) {
	      callHook$1(def, dir, 'bind', vnode, oldVnode)
	      if (def.inserted) {
	        hasInsert = true
	      }
	    })
	    if (hasInsert) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	        applyDirectives(oldVnode, vnode, 'inserted')
	      })
	    }
	  },
	  update: function updateDirectives (oldVnode, vnode) {
	    applyDirectives(oldVnode, vnode, 'update')
	    // if old vnode has directives but new vnode doesn't
	    // we need to teardown the directives on the old one.
	    if (oldVnode.data.directives && !vnode.data.directives) {
	      applyDirectives(oldVnode, oldVnode, 'unbind')
	    }
	  },
	  postpatch: function postupdateDirectives (oldVnode, vnode) {
	    applyDirectives(oldVnode, vnode, 'componentUpdated')
	  },
	  destroy: function unbindDirectives (vnode) {
	    applyDirectives(vnode, vnode, 'unbind')
	  }
	}

	var emptyModifiers = Object.create(null)

	function forEachDirective (
	  oldVnode,
	  vnode,
	  fn
	) {
	  var dirs = vnode.data.directives
	  if (dirs) {
	    for (var i = 0; i < dirs.length; i++) {
	      var dir = dirs[i]
	      var def = resolveAsset(vnode.context.$options, 'directives', dir.name, true)
	      if (def) {
	        var oldDirs = oldVnode && oldVnode.data.directives
	        if (oldDirs) {
	          dir.oldValue = oldDirs[i].value
	        }
	        if (!dir.modifiers) {
	          dir.modifiers = emptyModifiers
	        }
	        fn(def, dir)
	      }
	    }
	  }
	}

	function applyDirectives (
	  oldVnode,
	  vnode,
	  hook
	) {
	  forEachDirective(oldVnode, vnode, function (def, dir) {
	    callHook$1(def, dir, hook, vnode, oldVnode)
	  })
	}

	function callHook$1 (def, dir, hook, vnode, oldVnode) {
	  var fn = def && def[hook]
	  if (fn) {
	    fn(vnode.elm, dir, vnode, oldVnode)
	  }
	}

	var baseModules = [
	  ref,
	  directives
	]

	/*  */

	function updateAttrs (oldVnode, vnode) {
	  if (!oldVnode.data.attrs && !vnode.data.attrs) {
	    return
	  }
	  var key, cur, old
	  var elm = vnode.elm
	  var oldAttrs = oldVnode.data.attrs || {}
	  var attrs = vnode.data.attrs || {}
	  // clone observed objects, as the user probably wants to mutate it
	  if (attrs.__ob__) {
	    attrs = vnode.data.attrs = extend({}, attrs)
	  }

	  for (key in attrs) {
	    cur = attrs[key]
	    old = oldAttrs[key]
	    if (old !== cur) {
	      setAttr(elm, key, cur)
	    }
	  }
	  for (key in oldAttrs) {
	    if (attrs[key] == null) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key))
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key)
	      }
	    }
	  }
	}

	function setAttr (el, key, value) {
	  if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key)
	    } else {
	      el.setAttribute(key, key)
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true')
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key))
	    } else {
	      el.setAttributeNS(xlinkNS, key, value)
	    }
	  } else {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key)
	    } else {
	      el.setAttribute(key, value)
	    }
	  }
	}

	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	}

	/*  */

	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm
	  var data = vnode.data
	  var oldData = oldVnode.data
	  if (!data.staticClass && !data.class &&
	      (!oldData || (!oldData.staticClass && !oldData.class))) {
	    return
	  }

	  var cls = genClassForVnode(vnode)

	  // handle transition classes
	  var transitionClass = el._transitionClasses
	  if (transitionClass) {
	    cls = concat(cls, stringifyClass(transitionClass))
	  }

	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls)
	    el._prevClass = cls
	  }
	}

	var klass = {
	  create: updateClass,
	  update: updateClass
	}

	// skip type checking this file because we need to attach private properties
	// to elements

	function updateDOMListeners (oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return
	  }
	  var on = vnode.data.on || {}
	  var oldOn = oldVnode.data.on || {}
	  var add = vnode.elm._v_add || (vnode.elm._v_add = function (event, handler, capture) {
	    vnode.elm.addEventListener(event, handler, capture)
	  })
	  var remove = vnode.elm._v_remove || (vnode.elm._v_remove = function (event, handler) {
	    vnode.elm.removeEventListener(event, handler)
	  })
	  updateListeners(on, oldOn, add, remove)
	}

	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	}

	/*  */

	function updateDOMProps (oldVnode, vnode) {
	  if (!oldVnode.data.domProps && !vnode.data.domProps) {
	    return
	  }
	  var key, cur
	  var elm = vnode.elm
	  var oldProps = oldVnode.data.domProps || {}
	  var props = vnode.data.domProps || {}
	  // clone observed objects, as the user probably wants to mutate it
	  if (props.__ob__) {
	    props = vnode.data.domProps = extend({}, props)
	  }

	  for (key in oldProps) {
	    if (props[key] == null) {
	      elm[key] = undefined
	    }
	  }
	  for (key in props) {
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if ((key === 'textContent' || key === 'innerHTML') && vnode.children) {
	      vnode.children.length = 0
	    }
	    cur = props[key]
	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur
	      // avoid resetting cursor position when value is the same
	      var strCur = cur == null ? '' : String(cur)
	      if (elm.value !== strCur) {
	        elm.value = strCur
	      }
	    } else {
	      elm[key] = cur
	    }
	  }
	}

	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	}

	/*  */

	var prefixes = ['Webkit', 'Moz', 'ms']

	var testEl
	var normalize = cached(function (prop) {
	  testEl = testEl || document.createElement('div')
	  prop = camelize(prop)
	  if (prop !== 'filter' && (prop in testEl.style)) {
	    return prop
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1)
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper
	    if (prefixed in testEl.style) {
	      return prefixed
	    }
	  }
	})

	function updateStyle (oldVnode, vnode) {
	  if ((!oldVnode.data || !oldVnode.data.style) && !vnode.data.style) {
	    return
	  }
	  var cur, name
	  var el = vnode.elm
	  var oldStyle = oldVnode.data.style || {}
	  var style = vnode.data.style || {}

	  // handle string
	  if (typeof style === 'string') {
	    el.style.cssText = style
	    return
	  }

	  var needClone = style.__ob__

	  // handle array syntax
	  if (Array.isArray(style)) {
	    style = vnode.data.style = toObject(style)
	  }

	  // clone the style for future updates,
	  // in case the user mutates the style object in-place.
	  if (needClone) {
	    style = vnode.data.style = extend({}, style)
	  }

	  for (name in oldStyle) {
	    if (!style[name]) {
	      el.style[normalize(name)] = ''
	    }
	  }
	  for (name in style) {
	    cur = style[name]
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      el.style[normalize(name)] = cur == null ? '' : cur
	    }
	  }
	}

	var style = {
	  create: updateStyle,
	  update: updateStyle
	}

	/*  */

	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); })
	    } else {
	      el.classList.add(cls)
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' '
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim())
	    }
	  }
	}

	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); })
	    } else {
	      el.classList.remove(cls)
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' '
	    var tar = ' ' + cls + ' '
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ')
	    }
	    el.setAttribute('class', cur.trim())
	  }
	}

	/*  */

	var hasTransition = inBrowser && !isIE9
	var TRANSITION = 'transition'
	var ANIMATION = 'animation'

	// Transition property/event sniffing
	var transitionProp = 'transition'
	var transitionEndEvent = 'transitionend'
	var animationProp = 'animation'
	var animationEndEvent = 'animationend'
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined) {
	    transitionProp = 'WebkitTransition'
	    transitionEndEvent = 'webkitTransitionEnd'
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined) {
	    animationProp = 'WebkitAnimation'
	    animationEndEvent = 'webkitAnimationEnd'
	  }
	}

	var raf = (inBrowser && window.requestAnimationFrame) || setTimeout
	function nextFrame (fn) {
	  raf(function () {
	    raf(fn)
	  })
	}

	function addTransitionClass (el, cls) {
	  (el._transitionClasses || (el._transitionClasses = [])).push(cls)
	  addClass(el, cls)
	}

	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove$1(el._transitionClasses, cls)
	  }
	  removeClass(el, cls)
	}

	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent
	  var ended = 0
	  var end = function () {
	    el.removeEventListener(event, onEnd)
	    cb()
	  }
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end()
	      }
	    }
	  }
	  setTimeout(function () {
	    if (ended < propCount) {
	      end()
	    }
	  }, timeout + 1)
	  el.addEventListener(event, onEnd)
	}

	var transformRE = /\b(transform|all)(,|$)/

	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el)
	  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ')
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ')
	  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations)
	  var animationDelays = styles[animationProp + 'Delay'].split(', ')
	  var animationDurations = styles[animationProp + 'Duration'].split(', ')
	  var animationTimeout = getTimeout(animationDelays, animationDurations)

	  var type
	  var timeout = 0
	  var propCount = 0
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION
	      timeout = transitionTimeout
	      propCount = transitionDurations.length
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION
	      timeout = animationTimeout
	      propCount = animationDurations.length
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout)
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property'])
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}

	function getTimeout (delays, durations) {
	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}

	function toMs (s) {
	  return Number(s.slice(0, -1)) * 1000
	}

	/*  */

	function enter (vnode) {
	  var el = vnode.elm

	  // call leave callback now
	  if (el._leaveCb) {
	    el._leaveCb.cancelled = true
	    el._leaveCb()
	  }

	  var data = resolveTransition(vnode.data.transition)
	  if (!data) {
	    return
	  }

	  /* istanbul ignore if */
	  if (el._enterCb || el.nodeType !== 1) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;

	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var transitionNode = activeInstance.$vnode
	  var context = transitionNode && transitionNode.parent
	    ? transitionNode.parent.context
	    : activeInstance

	  var isAppear = !context._isMounted || !vnode.isRootInsert

	  if (isAppear && !appear && appear !== '') {
	    return
	  }

	  var startClass = isAppear ? appearClass : enterClass
	  var activeClass = isAppear ? appearActiveClass : enterActiveClass
	  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter
	  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter
	  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter
	  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled

	  var expectsCSS = css !== false && !isIE9
	  var userWantsControl =
	    enterHook &&
	    // enterHook may be a bound method which exposes
	    // the length of original fn as _length
	    (enterHook._length || enterHook.length) > 1

	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, activeClass)
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass)
	      }
	      enterCancelledHook && enterCancelledHook(el)
	    } else {
	      afterEnterHook && afterEnterHook(el)
	    }
	    el._enterCb = null
	  })

	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	      var parent = el.parentNode
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key]
	      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
	        pendingNode.elm._leaveCb()
	      }
	      enterHook && enterHook(el, cb)
	    })
	  }

	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el)
	  if (expectsCSS) {
	    addTransitionClass(el, startClass)
	    addTransitionClass(el, activeClass)
	    nextFrame(function () {
	      removeTransitionClass(el, startClass)
	      if (!cb.cancelled && !userWantsControl) {
	        whenTransitionEnds(el, type, cb)
	      }
	    })
	  }

	  if (vnode.data.show) {
	    enterHook && enterHook(el, cb)
	  }

	  if (!expectsCSS && !userWantsControl) {
	    cb()
	  }
	}

	function leave (vnode, rm) {
	  var el = vnode.elm

	  // call enter callback now
	  if (el._enterCb) {
	    el._enterCb.cancelled = true
	    el._enterCb()
	  }

	  var data = resolveTransition(vnode.data.transition)
	  if (!data) {
	    return rm()
	  }

	  /* istanbul ignore if */
	  if (el._leaveCb || el.nodeType !== 1) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;

	  var expectsCSS = css !== false && !isIE9
	  var userWantsControl =
	    leave &&
	    // leave hook may be a bound method which exposes
	    // the length of original fn as _length
	    (leave._length || leave.length) > 1

	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveActiveClass)
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass)
	      }
	      leaveCancelled && leaveCancelled(el)
	    } else {
	      rm()
	      afterLeave && afterLeave(el)
	    }
	    el._leaveCb = null
	  })

	  if (delayLeave) {
	    delayLeave(performLeave)
	  } else {
	    performLeave()
	  }

	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode
	    }
	    beforeLeave && beforeLeave(el)
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass)
	      addTransitionClass(el, leaveActiveClass)
	      nextFrame(function () {
	        removeTransitionClass(el, leaveClass)
	        if (!cb.cancelled && !userWantsControl) {
	          whenTransitionEnds(el, type, cb)
	        }
	      })
	    }
	    leave && leave(el, cb)
	    if (!expectsCSS && !userWantsControl) {
	      cb()
	    }
	  }
	}

	function resolveTransition (def$$1) {
	  if (!def$$1) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def$$1 === 'object') {
	    var res = {}
	    if (def$$1.css !== false) {
	      extend(res, autoCssTransition(def$$1.name || 'v'))
	    }
	    extend(res, def$$1)
	    return res
	  } else if (typeof def$$1 === 'string') {
	    return autoCssTransition(def$$1)
	  }
	}

	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    leaveClass: (name + "-leave"),
	    appearClass: (name + "-enter"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveActiveClass: (name + "-leave-active"),
	    appearActiveClass: (name + "-enter-active")
	  }
	})

	function once (fn) {
	  var called = false
	  return function () {
	    if (!called) {
	      called = true
	      fn()
	    }
	  }
	}

	var transition = inBrowser ? {
	  create: function create (_, vnode) {
	    if (!vnode.data.show) {
	      enter(vnode)
	    }
	  },
	  remove: function remove (vnode, rm) {
	    /* istanbul ignore else */
	    if (!vnode.data.show) {
	      leave(vnode, rm)
	    } else {
	      rm()
	    }
	  }
	} : {}

	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	]

	/*  */

	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules)

	var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules })

	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */

	var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_\-]*)?$/

	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement
	    if (el && el.vmodel) {
	      trigger(el, 'input')
	    }
	  })
	}

	var model = {
	  bind: function bind (el, binding, vnode) {
	    {
	      if (!modelableTagRE.test(vnode.tag)) {
	        warn(
	          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
	          'If you are working with contenteditable, it\'s recommended to ' +
	          'wrap a library dedicated for that purpose inside a custom component.',
	          vnode.context
	        )
	      }
	    }
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context)
	      /* istanbul ignore if */
	      if (isIE || isEdge) {
	        var cb = function () {
	          setSelected(el, binding, vnode.context)
	        }
	        nextTick(cb)
	        setTimeout(cb, 0)
	      }
	    } else if (vnode.tag === 'textarea' || el.type === 'text') {
	      if (!isAndroid) {
	        el.addEventListener('compositionstart', onCompositionStart)
	        el.addEventListener('compositionend', onCompositionEnd)
	      }
	      /* istanbul ignore if */
	      if (isIE9) {
	        el.vmodel = true
	      }
	    }
	  },
	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context)
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matchig
	      // option in the DOM.
	      var needReset = el.multiple
	        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
	        : hasNoMatchingOption(binding.value, el.options)
	      if (needReset) {
	        trigger(el, 'change')
	      }
	    }
	  }
	}

	function setSelected (el, binding, vm) {
	  var value = binding.value
	  var isMultiple = el.multiple
	  if (isMultiple && !Array.isArray(value)) {
	    "development" !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    )
	    return
	  }
	  var selected, option
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i]
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1
	      if (option.selected !== selected) {
	        option.selected = selected
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1
	  }
	}

	function hasNoMatchingOption (value, options) {
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (looseEqual(getValue(options[i]), value)) {
	      return false
	    }
	  }
	  return true
	}

	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}

	function onCompositionStart (e) {
	  e.target.composing = true
	}

	function onCompositionEnd (e) {
	  e.target.composing = false
	  trigger(e.target, 'input')
	}

	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents')
	  e.initEvent(type, true, true)
	  el.dispatchEvent(e)
	}

	/*  */

	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.child && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.child._vnode)
	    : vnode
	}

	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;

	    vnode = locateNode(vnode)
	    var transition = vnode.data && vnode.data.transition
	    if (value && transition && !isIE9) {
	      enter(vnode)
	    }
	    var originalDisplay = el.style.display === 'none' ? '' : el.style.display
	    el.style.display = value ? originalDisplay : 'none'
	    el.__vOriginalDisplay = originalDisplay
	  },
	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;

	    /* istanbul ignore if */
	    if (value === oldValue) { return }
	    vnode = locateNode(vnode)
	    var transition = vnode.data && vnode.data.transition
	    if (transition && !isIE9) {
	      if (value) {
	        enter(vnode)
	        el.style.display = el.__vOriginalDisplay
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none'
	        })
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none'
	    }
	  }
	}

	var platformDirectives = {
	  model: model,
	  show: show
	}

	/*  */

	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)

	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String
	}

	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recrusively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}

	function extractTransitionData (comp) {
	  var data = {}
	  var options = comp.$options
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key]
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1].fn
	  }
	  return data
	}

	function placeholder (h, rawChild) {
	  return /\d-keep-alive$/.test(rawChild.tag)
	    ? h('keep-alive')
	    : null
	}

	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}

	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,
	  render: function render (h) {
	    var this$1 = this;

	    var children = this.$slots.default
	    if (!children) {
	      return
	    }

	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag; })
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }

	    // warn multiple elements
	    if ("development" !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      )
	    }

	    var mode = this.mode

	    // warn invalid mode
	    if ("development" !== 'production' &&
	        mode && mode !== 'in-out' && mode !== 'out-in') {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      )
	    }

	    var rawChild = children[0]

	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }

	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild)
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }

	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }

	    child.key = child.key == null || child.isStatic
	      ? ("__v" + (child.tag + this._uid) + "__")
	      : child.key
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this)
	    var oldRawChild = this._vnode
	    var oldChild = getRealChild(oldRawChild)

	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
	      child.data.show = true
	    }

	    if (oldChild && oldChild.data && oldChild.key !== child.key) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild.data.transition = extend({}, data)

	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false
	          this$1.$forceUpdate()
	        })
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        var delayedLeave
	        var performLeave = function () { delayedLeave() }
	        mergeVNodeHook(data, 'afterEnter', performLeave)
	        mergeVNodeHook(data, 'enterCancelled', performLeave)
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
	          delayedLeave = leave
	        })
	      }
	    }

	    return rawChild
	  }
	}

	/*  */

	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.

	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.

	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps)

	delete props.mode

	var TransitionGroup = {
	  props: props,

	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span'
	    var map = Object.create(null)
	    var prevChildren = this.prevChildren = this.children
	    var rawChildren = this.$slots.default || []
	    var children = this.children = []
	    var transitionData = extractTransitionData(this)

	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i]
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c)
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData
	        } else {
	          var opts = c.componentOptions
	          var name = opts
	            ? (opts.Ctor.options.name || opts.tag)
	            : c.tag
	          warn(("<transition-group> children must be keyed: <" + name + ">"))
	        }
	      }
	    }

	    if (prevChildren) {
	      var kept = []
	      var removed = []
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1]
	        c$1.data.transition = transitionData
	        c$1.data.pos = c$1.elm.getBoundingClientRect()
	        if (map[c$1.key]) {
	          kept.push(c$1)
	        } else {
	          removed.push(c$1)
	        }
	      }
	      this.kept = h(tag, null, kept)
	      this.removed = removed
	    }

	    return h(tag, null, children)
	  },

	  beforeUpdate: function beforeUpdate () {
	    // force removing pass
	    this.__patch__(
	      this._vnode,
	      this.kept,
	      false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	    )
	    this._vnode = this.kept
	  },

	  updated: function updated () {
	    var children = this.prevChildren
	    var moveClass = this.moveClass || (this.name + '-move')
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }

	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs)
	    children.forEach(recordPosition)
	    children.forEach(applyTranslation)

	    // force reflow to put everything in position
	    var f = document.body.offsetHeight // eslint-disable-line

	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm
	        var s = el.style
	        addTransitionClass(el, moveClass)
	        s.transform = s.WebkitTransform = s.transitionDuration = ''
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb)
	            el._moveCb = null
	            removeTransitionClass(el, moveClass)
	          }
	        })
	      }
	    })
	  },

	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      if (this._hasMove != null) {
	        return this._hasMove
	      }
	      addTransitionClass(el, moveClass)
	      var info = getTransitionInfo(el)
	      removeTransitionClass(el, moveClass)
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	}

	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb()
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb()
	  }
	}

	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect()
	}

	function applyTranslation (c) {
	  var oldPos = c.data.pos
	  var newPos = c.data.newPos
	  var dx = oldPos.left - newPos.left
	  var dy = oldPos.top - newPos.top
	  if (dx || dy) {
	    c.data.moved = true
	    var s = c.elm.style
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)"
	    s.transitionDuration = '0s'
	  }
	}

	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	}

	/*  */

	// install platform specific utils
	Vue$3.config.isUnknownElement = isUnknownElement
	Vue$3.config.isReservedTag = isReservedTag
	Vue$3.config.getTagNamespace = getTagNamespace
	Vue$3.config.mustUseProp = mustUseProp

	// install platform runtime directives & components
	extend(Vue$3.options.directives, platformDirectives)
	extend(Vue$3.options.components, platformComponents)

	// install platform patch function
	Vue$3.prototype.__patch__ = config._isServer ? noop : patch$1

	// wrap mount
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && !config._isServer ? query(el) : undefined
	  return this._mount(el, hydrating)
	}

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue$3)
	    } else if (
	      "development" !== 'production' &&
	      inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)
	    ) {
	      console.log(
	        'Download the Vue Devtools for a better development experience:\n' +
	        'https://github.com/vuejs/vue-devtools'
	      )
	    }
	  }
	}, 0)

	/*  */

	// check whether current browser encodes a char inside attribute values
	function shouldDecode (content, encoded) {
	  var div = document.createElement('div')
	  div.innerHTML = "<div a=\"" + content + "\">"
	  return div.innerHTML.indexOf(encoded) > 0
	}

	// According to
	// https://w3c.github.io/DOM-Parsing/#dfn-serializing-an-attribute-value
	// when serializing innerHTML, <, >, ", & should be encoded as entities.
	// However, only some browsers, e.g. PhantomJS, encodes < and >.
	// this causes problems with the in-browser parser.
	var shouldDecodeTags = inBrowser ? shouldDecode('>', '&gt;') : false

	// #3663
	// IE encodes newlines inside attribute values while other browsers don't
	var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false

	/*  */

	var decoder = document.createElement('div')

	function decodeHTML (html) {
	  decoder.innerHTML = html
	  return decoder.textContent
	}

	/**
	 * Not type-checking this file because it's mostly vendor code.
	 */

	/*!
	 * HTML Parser By John Resig (ejohn.org)
	 * Modified by Juriy "kangax" Zaytsev
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 */

	// Regular Expressions for parsing tags and attributes
	var singleAttrIdentifier = /([^\s"'<>\/=]+)/
	var singleAttrAssign = /(?:=)/
	var singleAttrValues = [
	  // attr value double quotes
	  /"([^"]*)"+/.source,
	  // attr value, single quotes
	  /'([^']*)'+/.source,
	  // attr value, no quotes
	  /([^\s"'=<>`]+)/.source
	]
	var attribute = new RegExp(
	  '^\\s*' + singleAttrIdentifier.source +
	  '(?:\\s*(' + singleAttrAssign.source + ')' +
	  '\\s*(?:' + singleAttrValues.join('|') + '))?'
	)

	// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
	// but for Vue templates we can enforce a simple charset
	var ncname = '[a-zA-Z_][\\w\\-\\.]*'
	var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')'
	var startTagOpen = new RegExp('^<' + qnameCapture)
	var startTagClose = /^\s*(\/?)>/
	var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>')
	var doctype = /^<!DOCTYPE [^>]+>/i

	var IS_REGEX_CAPTURING_BROKEN = false
	'x'.replace(/x(.)?/g, function (m, g) {
	  IS_REGEX_CAPTURING_BROKEN = g === ''
	})

	// Special Elements (can contain anything)
	var isSpecialTag = makeMap('script,style', true)

	var reCache = {}

	var ltRE = /&lt;/g
	var gtRE = /&gt;/g
	var nlRE = /&#10;/g
	var ampRE = /&amp;/g
	var quoteRE = /&quot;/g

	function decodeAttr (value, shouldDecodeTags, shouldDecodeNewlines) {
	  if (shouldDecodeTags) {
	    value = value.replace(ltRE, '<').replace(gtRE, '>')
	  }
	  if (shouldDecodeNewlines) {
	    value = value.replace(nlRE, '\n')
	  }
	  return value.replace(ampRE, '&').replace(quoteRE, '"')
	}

	function parseHTML (html, options) {
	  var stack = []
	  var expectHTML = options.expectHTML
	  var isUnaryTag$$1 = options.isUnaryTag || no
	  var isFromDOM = options.isFromDOM
	  var index = 0
	  var last, lastTag
	  while (html) {
	    last = html
	    // Make sure we're not in a script or style element
	    if (!lastTag || !isSpecialTag(lastTag)) {
	      var textEnd = html.indexOf('<')
	      if (textEnd === 0) {
	        // Comment:
	        if (/^<!--/.test(html)) {
	          var commentEnd = html.indexOf('-->')

	          if (commentEnd >= 0) {
	            advance(commentEnd + 3)
	            continue
	          }
	        }

	        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
	        if (/^<!\[/.test(html)) {
	          var conditionalEnd = html.indexOf(']>')

	          if (conditionalEnd >= 0) {
	            advance(conditionalEnd + 2)
	            continue
	          }
	        }

	        // Doctype:
	        var doctypeMatch = html.match(doctype)
	        if (doctypeMatch) {
	          advance(doctypeMatch[0].length)
	          continue
	        }

	        // End tag:
	        var endTagMatch = html.match(endTag)
	        if (endTagMatch) {
	          var curIndex = index
	          advance(endTagMatch[0].length)
	          parseEndTag(endTagMatch[0], endTagMatch[1], curIndex, index)
	          continue
	        }

	        // Start tag:
	        var startTagMatch = parseStartTag()
	        if (startTagMatch) {
	          handleStartTag(startTagMatch)
	          continue
	        }
	      }

	      var text = void 0
	      if (textEnd >= 0) {
	        text = html.substring(0, textEnd)
	        advance(textEnd)
	      } else {
	        text = html
	        html = ''
	      }

	      if (options.chars) {
	        options.chars(text)
	      }
	    } else {
	      var stackedTag = lastTag.toLowerCase()
	      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'))
	      var endTagLength = 0
	      var rest = html.replace(reStackedTag, function (all, text, endTag) {
	        endTagLength = endTag.length
	        if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
	          text = text
	            .replace(/<!--([\s\S]*?)-->/g, '$1')
	            .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
	        }
	        if (options.chars) {
	          options.chars(text)
	        }
	        return ''
	      })
	      index += html.length - rest.length
	      html = rest
	      parseEndTag('</' + stackedTag + '>', stackedTag, index - endTagLength, index)
	    }

	    if (html === last) {
	      throw new Error('Error parsing template:\n\n' + html)
	    }
	  }

	  // Clean up any remaining tags
	  parseEndTag()

	  function advance (n) {
	    index += n
	    html = html.substring(n)
	  }

	  function parseStartTag () {
	    var start = html.match(startTagOpen)
	    if (start) {
	      var match = {
	        tagName: start[1],
	        attrs: [],
	        start: index
	      }
	      advance(start[0].length)
	      var end, attr
	      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
	        advance(attr[0].length)
	        match.attrs.push(attr)
	      }
	      if (end) {
	        match.unarySlash = end[1]
	        advance(end[0].length)
	        match.end = index
	        return match
	      }
	    }
	  }

	  function handleStartTag (match) {
	    var tagName = match.tagName
	    var unarySlash = match.unarySlash

	    if (expectHTML) {
	      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
	        parseEndTag('', lastTag)
	      }
	      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
	        parseEndTag('', tagName)
	      }
	    }

	    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash

	    var l = match.attrs.length
	    var attrs = new Array(l)
	    for (var i = 0; i < l; i++) {
	      var args = match.attrs[i]
	      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
	      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
	        if (args[3] === '') { delete args[3] }
	        if (args[4] === '') { delete args[4] }
	        if (args[5] === '') { delete args[5] }
	      }
	      var value = args[3] || args[4] || args[5] || ''
	      attrs[i] = {
	        name: args[1],
	        value: isFromDOM ? decodeAttr(
	          value,
	          options.shouldDecodeTags,
	          options.shouldDecodeNewlines
	        ) : value
	      }
	    }

	    if (!unary) {
	      stack.push({ tag: tagName, attrs: attrs })
	      lastTag = tagName
	      unarySlash = ''
	    }

	    if (options.start) {
	      options.start(tagName, attrs, unary, match.start, match.end)
	    }
	  }

	  function parseEndTag (tag, tagName, start, end) {
	    var pos
	    if (start == null) { start = index }
	    if (end == null) { end = index }

	    // Find the closest opened tag of the same type
	    if (tagName) {
	      var needle = tagName.toLowerCase()
	      for (pos = stack.length - 1; pos >= 0; pos--) {
	        if (stack[pos].tag.toLowerCase() === needle) {
	          break
	        }
	      }
	    } else {
	      // If no tag name is provided, clean shop
	      pos = 0
	    }

	    if (pos >= 0) {
	      // Close all the open elements, up the stack
	      for (var i = stack.length - 1; i >= pos; i--) {
	        if (options.end) {
	          options.end(stack[i].tag, start, end)
	        }
	      }

	      // Remove the open elements from the stack
	      stack.length = pos
	      lastTag = pos && stack[pos - 1].tag
	    } else if (tagName.toLowerCase() === 'br') {
	      if (options.start) {
	        options.start(tagName, [], true, start, end)
	      }
	    } else if (tagName.toLowerCase() === 'p') {
	      if (options.start) {
	        options.start(tagName, [], false, start, end)
	      }
	      if (options.end) {
	        options.end(tagName, start, end)
	      }
	    }
	  }
	}

	/*  */

	function parseFilters (exp) {
	  var inSingle = false
	  var inDouble = false
	  var curly = 0
	  var square = 0
	  var paren = 0
	  var lastFilterIndex = 0
	  var c, prev, i, expression, filters

	  for (i = 0; i < exp.length; i++) {
	    prev = c
	    c = exp.charCodeAt(i)
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) { inSingle = !inSingle }
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) { inDouble = !inDouble }
	    } else if (
	      c === 0x7C && // pipe
	      exp.charCodeAt(i + 1) !== 0x7C &&
	      exp.charCodeAt(i - 1) !== 0x7C &&
	      !curly && !square && !paren
	    ) {
	      if (expression === undefined) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1
	        expression = exp.slice(0, i).trim()
	      } else {
	        pushFilter()
	      }
	    } else {
	      switch (c) {
	        case 0x22: inDouble = true; break // "
	        case 0x27: inSingle = true; break // '
	        case 0x28: paren++; break         // (
	        case 0x29: paren--; break         // )
	        case 0x5B: square++; break        // [
	        case 0x5D: square--; break        // ]
	        case 0x7B: curly++; break         // {
	        case 0x7D: curly--; break         // }
	      }
	    }
	  }

	  if (expression === undefined) {
	    expression = exp.slice(0, i).trim()
	  } else if (lastFilterIndex !== 0) {
	    pushFilter()
	  }

	  function pushFilter () {
	    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim())
	    lastFilterIndex = i + 1
	  }

	  if (filters) {
	    for (i = 0; i < filters.length; i++) {
	      expression = wrapFilter(expression, filters[i])
	    }
	  }

	  return expression
	}

	function wrapFilter (exp, filter) {
	  var i = filter.indexOf('(')
	  if (i < 0) {
	    // _f: resolveFilter
	    return ("_f(\"" + filter + "\")(" + exp + ")")
	  } else {
	    var name = filter.slice(0, i)
	    var args = filter.slice(i + 1)
	    return ("_f(\"" + name + "\")(" + exp + "," + args)
	  }
	}

	/*  */

	var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g

	var buildRegex = cached(function (delimiters) {
	  var open = delimiters[0].replace(regexEscapeRE, '\\$&')
	  var close = delimiters[1].replace(regexEscapeRE, '\\$&')
	  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
	})

	function parseText (
	  text,
	  delimiters
	) {
	  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE
	  if (!tagRE.test(text)) {
	    return
	  }
	  var tokens = []
	  var lastIndex = tagRE.lastIndex = 0
	  var match, index
	  while ((match = tagRE.exec(text))) {
	    index = match.index
	    // push text token
	    if (index > lastIndex) {
	      tokens.push(JSON.stringify(text.slice(lastIndex, index)))
	    }
	    // tag token
	    var exp = parseFilters(match[1].trim())
	    tokens.push(("_s(" + exp + ")"))
	    lastIndex = index + match[0].length
	  }
	  if (lastIndex < text.length) {
	    tokens.push(JSON.stringify(text.slice(lastIndex)))
	  }
	  return tokens.join('+')
	}

	/*  */

	function baseWarn (msg) {
	  console.error(("[Vue parser]: " + msg))
	}

	function pluckModuleFunction (
	  modules,
	  key
	) {
	  return modules
	    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
	    : []
	}

	function addProp (el, name, value) {
	  (el.props || (el.props = [])).push({ name: name, value: value })
	}

	function addAttr (el, name, value) {
	  (el.attrs || (el.attrs = [])).push({ name: name, value: value })
	}

	function addDirective (
	  el,
	  name,
	  value,
	  arg,
	  modifiers
	) {
	  (el.directives || (el.directives = [])).push({ name: name, value: value, arg: arg, modifiers: modifiers })
	}

	function addHandler (
	  el,
	  name,
	  value,
	  modifiers,
	  important
	) {
	  // check capture modifier
	  if (modifiers && modifiers.capture) {
	    delete modifiers.capture
	    name = '!' + name // mark the event as captured
	  }
	  var events
	  if (modifiers && modifiers.native) {
	    delete modifiers.native
	    events = el.nativeEvents || (el.nativeEvents = {})
	  } else {
	    events = el.events || (el.events = {})
	  }
	  var newHandler = { value: value, modifiers: modifiers }
	  var handlers = events[name]
	  /* istanbul ignore if */
	  if (Array.isArray(handlers)) {
	    important ? handlers.unshift(newHandler) : handlers.push(newHandler)
	  } else if (handlers) {
	    events[name] = important ? [newHandler, handlers] : [handlers, newHandler]
	  } else {
	    events[name] = newHandler
	  }
	}

	function getBindingAttr (
	  el,
	  name,
	  getStatic
	) {
	  var dynamicValue =
	    getAndRemoveAttr(el, ':' + name) ||
	    getAndRemoveAttr(el, 'v-bind:' + name)
	  if (dynamicValue != null) {
	    return dynamicValue
	  } else if (getStatic !== false) {
	    var staticValue = getAndRemoveAttr(el, name)
	    if (staticValue != null) {
	      return JSON.stringify(staticValue)
	    }
	  }
	}

	function getAndRemoveAttr (el, name) {
	  var val
	  if ((val = el.attrsMap[name]) != null) {
	    var list = el.attrsList
	    for (var i = 0, l = list.length; i < l; i++) {
	      if (list[i].name === name) {
	        list.splice(i, 1)
	        break
	      }
	    }
	  }
	  return val
	}

	/*  */

	var dirRE = /^v-|^@|^:/
	var forAliasRE = /(.*)\s+(?:in|of)\s+(.*)/
	var forIteratorRE = /\(([^,]*),([^,]*)(?:,([^,]*))?\)/
	var bindRE = /^:|^v-bind:/
	var onRE = /^@|^v-on:/
	var argRE = /:(.*)$/
	var modifierRE = /\.[^\.]+/g

	var decodeHTMLCached = cached(decodeHTML)

	// configurable state
	var warn$1
	var platformGetTagNamespace
	var platformMustUseProp
	var platformIsPreTag
	var preTransforms
	var transforms
	var postTransforms
	var delimiters

	/**
	 * Convert HTML string to AST.
	 */
	function parse (
	  template,
	  options
	) {
	  warn$1 = options.warn || baseWarn
	  platformGetTagNamespace = options.getTagNamespace || no
	  platformMustUseProp = options.mustUseProp || no
	  platformIsPreTag = options.isPreTag || no
	  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode')
	  transforms = pluckModuleFunction(options.modules, 'transformNode')
	  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode')
	  delimiters = options.delimiters
	  var stack = []
	  var preserveWhitespace = options.preserveWhitespace !== false
	  var root
	  var currentParent
	  var inVPre = false
	  var inPre = false
	  var warned = false
	  parseHTML(template, {
	    expectHTML: options.expectHTML,
	    isUnaryTag: options.isUnaryTag,
	    isFromDOM: options.isFromDOM,
	    shouldDecodeTags: options.shouldDecodeTags,
	    shouldDecodeNewlines: options.shouldDecodeNewlines,
	    start: function start (tag, attrs, unary) {
	      // check namespace.
	      // inherit parent ns if there is one
	      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag)

	      // handle IE svg bug
	      /* istanbul ignore if */
	      if (options.isIE && ns === 'svg') {
	        attrs = guardIESVGBug(attrs)
	      }

	      var element = {
	        type: 1,
	        tag: tag,
	        attrsList: attrs,
	        attrsMap: makeAttrsMap(attrs),
	        parent: currentParent,
	        children: []
	      }
	      if (ns) {
	        element.ns = ns
	      }

	      if ("client" !== 'server' && isForbiddenTag(element)) {
	        element.forbidden = true
	        "development" !== 'production' && warn$1(
	          'Templates should only be responsible for mapping the state to the ' +
	          'UI. Avoid placing tags with side-effects in your templates, such as ' +
	          "<" + tag + ">."
	        )
	      }

	      // apply pre-transforms
	      for (var i = 0; i < preTransforms.length; i++) {
	        preTransforms[i](element, options)
	      }

	      if (!inVPre) {
	        processPre(element)
	        if (element.pre) {
	          inVPre = true
	        }
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = true
	      }
	      if (inVPre) {
	        processRawAttrs(element)
	      } else {
	        processFor(element)
	        processIf(element)
	        processOnce(element)
	        processKey(element)

	        // determine whether this is a plain element after
	        // removing structural attributes
	        element.plain = !element.key && !attrs.length

	        processRef(element)
	        processSlot(element)
	        processComponent(element)
	        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
	          transforms[i$1](element, options)
	        }
	        processAttrs(element)
	      }

	      function checkRootConstraints (el) {
	        {
	          if (el.tag === 'slot' || el.tag === 'template') {
	            warn$1(
	              "Cannot use <" + (el.tag) + "> as component root element because it may " +
	              'contain multiple nodes:\n' + template
	            )
	          }
	          if (el.attrsMap.hasOwnProperty('v-for')) {
	            warn$1(
	              'Cannot use v-for on stateful component root element because ' +
	              'it renders multiple elements:\n' + template
	            )
	          }
	        }
	      }

	      // tree management
	      if (!root) {
	        root = element
	        checkRootConstraints(root)
	      } else if ("development" !== 'production' && !stack.length && !warned) {
	        // allow 2 root elements with v-if and v-else
	        if ((root.attrsMap.hasOwnProperty('v-if') && element.attrsMap.hasOwnProperty('v-else'))) {
	          checkRootConstraints(element)
	        } else {
	          warned = true
	          warn$1(
	            ("Component template should contain exactly one root element:\n\n" + template)
	          )
	        }
	      }
	      if (currentParent && !element.forbidden) {
	        if (element.else) {
	          processElse(element, currentParent)
	        } else {
	          currentParent.children.push(element)
	          element.parent = currentParent
	        }
	      }
	      if (!unary) {
	        currentParent = element
	        stack.push(element)
	      }
	      // apply post-transforms
	      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
	        postTransforms[i$2](element, options)
	      }
	    },

	    end: function end () {
	      // remove trailing whitespace
	      var element = stack[stack.length - 1]
	      var lastNode = element.children[element.children.length - 1]
	      if (lastNode && lastNode.type === 3 && lastNode.text === ' ') {
	        element.children.pop()
	      }
	      // pop stack
	      stack.length -= 1
	      currentParent = stack[stack.length - 1]
	      // check pre state
	      if (element.pre) {
	        inVPre = false
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = false
	      }
	    },

	    chars: function chars (text) {
	      if (!currentParent) {
	        if ("development" !== 'production' && !warned) {
	          warned = true
	          warn$1(
	            'Component template should contain exactly one root element:\n\n' + template
	          )
	        }
	        return
	      }
	      text = inPre || text.trim()
	        ? decodeHTMLCached(text)
	        // only preserve whitespace if its not right after a starting tag
	        : preserveWhitespace && currentParent.children.length ? ' ' : ''
	      if (text) {
	        var expression
	        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
	          currentParent.children.push({
	            type: 2,
	            expression: expression,
	            text: text
	          })
	        } else {
	          currentParent.children.push({
	            type: 3,
	            text: text
	          })
	        }
	      }
	    }
	  })
	  return root
	}

	function processPre (el) {
	  if (getAndRemoveAttr(el, 'v-pre') != null) {
	    el.pre = true
	  }
	}

	function processRawAttrs (el) {
	  var l = el.attrsList.length
	  if (l) {
	    var attrs = el.attrs = new Array(l)
	    for (var i = 0; i < l; i++) {
	      attrs[i] = {
	        name: el.attrsList[i].name,
	        value: JSON.stringify(el.attrsList[i].value)
	      }
	    }
	  } else if (!el.pre) {
	    // non root node in pre blocks with no attributes
	    el.plain = true
	  }
	}

	function processKey (el) {
	  var exp = getBindingAttr(el, 'key')
	  if (exp) {
	    if ("development" !== 'production' && el.tag === 'template') {
	      warn$1("<template> cannot be keyed. Place the key on real elements instead.")
	    }
	    el.key = exp
	  }
	}

	function processRef (el) {
	  var ref = getBindingAttr(el, 'ref')
	  if (ref) {
	    el.ref = ref
	    el.refInFor = checkInFor(el)
	  }
	}

	function processFor (el) {
	  var exp
	  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
	    var inMatch = exp.match(forAliasRE)
	    if (!inMatch) {
	      "development" !== 'production' && warn$1(
	        ("Invalid v-for expression: " + exp)
	      )
	      return
	    }
	    el.for = inMatch[2].trim()
	    var alias = inMatch[1].trim()
	    var iteratorMatch = alias.match(forIteratorRE)
	    if (iteratorMatch) {
	      el.alias = iteratorMatch[1].trim()
	      el.iterator1 = iteratorMatch[2].trim()
	      if (iteratorMatch[3]) {
	        el.iterator2 = iteratorMatch[3].trim()
	      }
	    } else {
	      el.alias = alias
	    }
	  }
	}

	function processIf (el) {
	  var exp = getAndRemoveAttr(el, 'v-if')
	  if (exp) {
	    el.if = exp
	  }
	  if (getAndRemoveAttr(el, 'v-else') != null) {
	    el.else = true
	  }
	}

	function processElse (el, parent) {
	  var prev = findPrevElement(parent.children)
	  if (prev && prev.if) {
	    prev.elseBlock = el
	  } else {
	    warn$1(
	      ("v-else used on element <" + (el.tag) + "> without corresponding v-if.")
	    )
	  }
	}

	function processOnce (el) {
	  var once = getAndRemoveAttr(el, 'v-once')
	  if (once != null) {
	    el.once = true
	  }
	}

	function processSlot (el) {
	  if (el.tag === 'slot') {
	    el.slotName = getBindingAttr(el, 'name')
	  } else {
	    var slotTarget = getBindingAttr(el, 'slot')
	    if (slotTarget) {
	      el.slotTarget = slotTarget
	    }
	  }
	}

	function processComponent (el) {
	  var binding
	  if ((binding = getBindingAttr(el, 'is'))) {
	    el.component = binding
	  }
	  if (getAndRemoveAttr(el, 'inline-template') != null) {
	    el.inlineTemplate = true
	  }
	}

	function processAttrs (el) {
	  var list = el.attrsList
	  var i, l, name, value, arg, modifiers, isProp
	  for (i = 0, l = list.length; i < l; i++) {
	    name = list[i].name
	    value = list[i].value
	    if (dirRE.test(name)) {
	      // mark element as dynamic
	      el.hasBindings = true
	      // modifiers
	      modifiers = parseModifiers(name)
	      if (modifiers) {
	        name = name.replace(modifierRE, '')
	      }
	      if (bindRE.test(name)) { // v-bind
	        name = name.replace(bindRE, '')
	        if (modifiers && modifiers.prop) {
	          isProp = true
	          name = camelize(name)
	          if (name === 'innerHtml') { name = 'innerHTML' }
	        }
	        if (isProp || platformMustUseProp(name)) {
	          addProp(el, name, value)
	        } else {
	          addAttr(el, name, value)
	        }
	      } else if (onRE.test(name)) { // v-on
	        name = name.replace(onRE, '')
	        addHandler(el, name, value, modifiers)
	      } else { // normal directives
	        name = name.replace(dirRE, '')
	        // parse arg
	        var argMatch = name.match(argRE)
	        if (argMatch && (arg = argMatch[1])) {
	          name = name.slice(0, -(arg.length + 1))
	        }
	        addDirective(el, name, value, arg, modifiers)
	      }
	    } else {
	      // literal attribute
	      {
	        var expression = parseText(value, delimiters)
	        if (expression) {
	          warn$1(
	            name + "=\"" + value + "\": " +
	            'Interpolation inside attributes has been deprecated. ' +
	            'Use v-bind or the colon shorthand instead.'
	          )
	        }
	      }
	      addAttr(el, name, JSON.stringify(value))
	    }
	  }
	}

	function checkInFor (el) {
	  var parent = el
	  while (parent) {
	    if (parent.for !== undefined) {
	      return true
	    }
	    parent = parent.parent
	  }
	  return false
	}

	function parseModifiers (name) {
	  var match = name.match(modifierRE)
	  if (match) {
	    var ret = {}
	    match.forEach(function (m) { ret[m.slice(1)] = true })
	    return ret
	  }
	}

	function makeAttrsMap (attrs) {
	  var map = {}
	  for (var i = 0, l = attrs.length; i < l; i++) {
	    if ("development" !== 'production' && map[attrs[i].name]) {
	      warn$1('duplicate attribute: ' + attrs[i].name)
	    }
	    map[attrs[i].name] = attrs[i].value
	  }
	  return map
	}

	function findPrevElement (children) {
	  var i = children.length
	  while (i--) {
	    if (children[i].tag) { return children[i] }
	  }
	}

	function isForbiddenTag (el) {
	  return (
	    el.tag === 'style' ||
	    (el.tag === 'script' && (
	      !el.attrsMap.type ||
	      el.attrsMap.type === 'text/javascript'
	    ))
	  )
	}

	var ieNSBug = /^xmlns:NS\d+/
	var ieNSPrefix = /^NS\d+:/

	/* istanbul ignore next */
	function guardIESVGBug (attrs) {
	  var res = []
	  for (var i = 0; i < attrs.length; i++) {
	    var attr = attrs[i]
	    if (!ieNSBug.test(attr.name)) {
	      attr.name = attr.name.replace(ieNSPrefix, '')
	      res.push(attr)
	    }
	  }
	  return res
	}

	/*  */

	var isStaticKey
	var isPlatformReservedTag

	var genStaticKeysCached = cached(genStaticKeys$1)

	/**
	 * Goal of the optimizier: walk the generated template AST tree
	 * and detect sub-trees that are purely static, i.e. parts of
	 * the DOM that never needs to change.
	 *
	 * Once we detect these sub-trees, we can:
	 *
	 * 1. Hoist them into constants, so that we no longer need to
	 *    create fresh nodes for them on each re-render;
	 * 2. Completely skip them in the patching process.
	 */
	function optimize (root, options) {
	  if (!root) { return }
	  isStaticKey = genStaticKeysCached(options.staticKeys || '')
	  isPlatformReservedTag = options.isReservedTag || (function () { return false; })
	  // first pass: mark all non-static nodes.
	  markStatic(root)
	  // second pass: mark static roots.
	  markStaticRoots(root, false)
	}

	function genStaticKeys$1 (keys) {
	  return makeMap(
	    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
	    (keys ? ',' + keys : '')
	  )
	}

	function markStatic (node) {
	  node.static = isStatic(node)
	  if (node.type === 1) {
	    for (var i = 0, l = node.children.length; i < l; i++) {
	      var child = node.children[i]
	      markStatic(child)
	      if (!child.static) {
	        node.static = false
	      }
	    }
	  }
	}

	function markStaticRoots (node, isInFor) {
	  if (node.type === 1) {
	    if (node.once || node.static) {
	      node.staticRoot = true
	      node.staticInFor = isInFor
	      return
	    }
	    if (node.children) {
	      for (var i = 0, l = node.children.length; i < l; i++) {
	        markStaticRoots(node.children[i], !!node.for)
	      }
	    }
	  }
	}

	function isStatic (node) {
	  if (node.type === 2) { // expression
	    return false
	  }
	  if (node.type === 3) { // text
	    return true
	  }
	  return !!(node.pre || (
	    !node.hasBindings && // no dynamic bindings
	    !node.if && !node.for && // not v-if or v-for or v-else
	    !isBuiltInTag(node.tag) && // not a built-in
	    isPlatformReservedTag(node.tag) && // not a component
	    Object.keys(node).every(isStaticKey)
	  ))
	}

	/*  */

	var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40,
	  'delete': [8, 46]
	}

	var modifierCode = {
	  stop: '$event.stopPropagation();',
	  prevent: '$event.preventDefault();',
	  self: 'if($event.target !== $event.currentTarget)return;'
	}

	function genHandlers (events, native) {
	  var res = native ? 'nativeOn:{' : 'on:{'
	  for (var name in events) {
	    res += "\"" + name + "\":" + (genHandler(events[name])) + ","
	  }
	  return res.slice(0, -1) + '}'
	}

	function genHandler (
	  handler
	) {
	  if (!handler) {
	    return 'function(){}'
	  } else if (Array.isArray(handler)) {
	    return ("[" + (handler.map(genHandler).join(',')) + "]")
	  } else if (!handler.modifiers) {
	    return simplePathRE.test(handler.value)
	      ? handler.value
	      : ("function($event){" + (handler.value) + "}")
	  } else {
	    var code = ''
	    var keys = []
	    for (var key in handler.modifiers) {
	      if (modifierCode[key]) {
	        code += modifierCode[key]
	      } else {
	        keys.push(key)
	      }
	    }
	    if (keys.length) {
	      code = genKeyFilter(keys) + code
	    }
	    var handlerCode = simplePathRE.test(handler.value)
	      ? handler.value + '($event)'
	      : handler.value
	    return 'function($event){' + code + handlerCode + '}'
	  }
	}

	function genKeyFilter (keys) {
	  var code = keys.length === 1
	    ? normalizeKeyCode(keys[0])
	    : Array.prototype.concat.apply([], keys.map(normalizeKeyCode))
	  if (Array.isArray(code)) {
	    return ("if(" + (code.map(function (c) { return ("$event.keyCode!==" + c); }).join('&&')) + ")return;")
	  } else {
	    return ("if($event.keyCode!==" + code + ")return;")
	  }
	}

	function normalizeKeyCode (key) {
	  return (
	    parseInt(key, 10) || // number keyCode
	    keyCodes[key] || // built-in alias
	    ("_k(" + (JSON.stringify(key)) + ")") // custom alias
	  )
	}

	/*  */

	function bind$2 (el, dir) {
	  el.wrapData = function (code) {
	    return ("_b(" + code + "," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
	  }
	}

	var baseDirectives = {
	  bind: bind$2,
	  cloak: noop
	}

	/*  */

	// configurable state
	var warn$2
	var transforms$1
	var dataGenFns
	var platformDirectives$1
	var staticRenderFns
	var currentOptions

	function generate (
	  ast,
	  options
	) {
	  // save previous staticRenderFns so generate calls can be nested
	  var prevStaticRenderFns = staticRenderFns
	  var currentStaticRenderFns = staticRenderFns = []
	  currentOptions = options
	  warn$2 = options.warn || baseWarn
	  transforms$1 = pluckModuleFunction(options.modules, 'transformCode')
	  dataGenFns = pluckModuleFunction(options.modules, 'genData')
	  platformDirectives$1 = options.directives || {}
	  var code = ast ? genElement(ast) : '_h("div")'
	  staticRenderFns = prevStaticRenderFns
	  return {
	    render: ("with(this){return " + code + "}"),
	    staticRenderFns: currentStaticRenderFns
	  }
	}

	function genElement (el) {
	  if (el.staticRoot && !el.staticProcessed) {
	    // hoist static sub-trees out
	    el.staticProcessed = true
	    staticRenderFns.push(("with(this){return " + (genElement(el)) + "}"))
	    return ("_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
	  } else if (el.for && !el.forProcessed) {
	    return genFor(el)
	  } else if (el.if && !el.ifProcessed) {
	    return genIf(el)
	  } else if (el.tag === 'template' && !el.slotTarget) {
	    return genChildren(el) || 'void 0'
	  } else if (el.tag === 'slot') {
	    return genSlot(el)
	  } else {
	    // component or element
	    var code
	    if (el.component) {
	      code = genComponent(el)
	    } else {
	      var data = genData(el)
	      var children = el.inlineTemplate ? null : genChildren(el)
	      code = "_h('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")"
	    }
	    // module transforms
	    for (var i = 0; i < transforms$1.length; i++) {
	      code = transforms$1[i](el, code)
	    }
	    return code
	  }
	}

	function genIf (el) {
	  var exp = el.if
	  el.ifProcessed = true // avoid recursion
	  return ("(" + exp + ")?" + (genElement(el)) + ":" + (genElse(el)))
	}

	function genElse (el) {
	  return el.elseBlock
	    ? genElement(el.elseBlock)
	    : '_e()'
	}

	function genFor (el) {
	  var exp = el.for
	  var alias = el.alias
	  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : ''
	  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : ''
	  el.forProcessed = true // avoid recursion
	  return "_l((" + exp + ")," +
	    "function(" + alias + iterator1 + iterator2 + "){" +
	      "return " + (genElement(el)) +
	    '})'
	}

	function genData (el) {
	  if (el.plain) {
	    return
	  }

	  var data = '{'

	  // directives first.
	  // directives may mutate the el's other properties before they are generated.
	  var dirs = genDirectives(el)
	  if (dirs) { data += dirs + ',' }

	  // key
	  if (el.key) {
	    data += "key:" + (el.key) + ","
	  }
	  // ref
	  if (el.ref) {
	    data += "ref:" + (el.ref) + ","
	  }
	  if (el.refInFor) {
	    data += "refInFor:true,"
	  }
	  // record original tag name for components using "is" attribute
	  if (el.component) {
	    data += "tag:\"" + (el.tag) + "\","
	  }
	  // slot target
	  if (el.slotTarget) {
	    data += "slot:" + (el.slotTarget) + ","
	  }
	  // module data generation functions
	  for (var i = 0; i < dataGenFns.length; i++) {
	    data += dataGenFns[i](el)
	  }
	  // attributes
	  if (el.attrs) {
	    data += "attrs:{" + (genProps(el.attrs)) + "},"
	  }
	  // DOM props
	  if (el.props) {
	    data += "domProps:{" + (genProps(el.props)) + "},"
	  }
	  // event handlers
	  if (el.events) {
	    data += (genHandlers(el.events)) + ","
	  }
	  if (el.nativeEvents) {
	    data += (genHandlers(el.nativeEvents, true)) + ","
	  }
	  // inline-template
	  if (el.inlineTemplate) {
	    var ast = el.children[0]
	    if ("development" !== 'production' && (
	      el.children.length > 1 || ast.type !== 1
	    )) {
	      warn$2('Inline-template components must have exactly one child element.')
	    }
	    if (ast.type === 1) {
	      var inlineRenderFns = generate(ast, currentOptions)
	      data += "inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}"
	    }
	  }
	  data = data.replace(/,$/, '') + '}'
	  // v-bind data wrap
	  if (el.wrapData) {
	    data = el.wrapData(data)
	  }
	  return data
	}

	function genDirectives (el) {
	  var dirs = el.directives
	  if (!dirs) { return }
	  var res = 'directives:['
	  var hasRuntime = false
	  var i, l, dir, needRuntime
	  for (i = 0, l = dirs.length; i < l; i++) {
	    dir = dirs[i]
	    needRuntime = true
	    var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name]
	    if (gen) {
	      // compile-time directive that manipulates AST.
	      // returns true if it also needs a runtime counterpart.
	      needRuntime = !!gen(el, dir, warn$2)
	    }
	    if (needRuntime) {
	      hasRuntime = true
	      res += "{name:\"" + (dir.name) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},"
	    }
	  }
	  if (hasRuntime) {
	    return res.slice(0, -1) + ']'
	  }
	}

	function genChildren (el) {
	  if (el.children.length) {
	    return '[' + el.children.map(genNode).join(',') + ']'
	  }
	}

	function genNode (node) {
	  if (node.type === 1) {
	    return genElement(node)
	  } else {
	    return genText(node)
	  }
	}

	function genText (text) {
	  return text.type === 2
	    ? text.expression // no need for () because already wrapped in _s()
	    : JSON.stringify(text.text)
	}

	function genSlot (el) {
	  var slotName = el.slotName || '"default"'
	  var children = genChildren(el)
	  return children
	    ? ("_t(" + slotName + "," + children + ")")
	    : ("_t(" + slotName + ")")
	}

	function genComponent (el) {
	  var children = genChildren(el)
	  return ("_h(" + (el.component) + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
	}

	function genProps (props) {
	  var res = ''
	  for (var i = 0; i < props.length; i++) {
	    var prop = props[i]
	    res += "\"" + (prop.name) + "\":" + (prop.value) + ","
	  }
	  return res.slice(0, -1)
	}

	/*  */

	/**
	 * Compile a template.
	 */
	function compile$1 (
	  template,
	  options
	) {
	  var ast = parse(template.trim(), options)
	  optimize(ast, options)
	  var code = generate(ast, options)
	  return {
	    ast: ast,
	    render: code.render,
	    staticRenderFns: code.staticRenderFns
	  }
	}

	/*  */

	// operators like typeof, instanceof and in are allowed
	var prohibitedKeywordRE = new RegExp('\\b' + (
	  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
	  'super,throw,while,yield,delete,export,import,return,switch,default,' +
	  'extends,finally,continue,debugger,function,arguments'
	).split(',').join('\\b|\\b') + '\\b')
	// check valid identifier for v-for
	var identRE = /[A-Za-z_$][\w$]*/
	// strip strings in expressions
	var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g

	// detect problematic expressions in a template
	function detectErrors (ast) {
	  var errors = []
	  if (ast) {
	    checkNode(ast, errors)
	  }
	  return errors
	}

	function checkNode (node, errors) {
	  if (node.type === 1) {
	    for (var name in node.attrsMap) {
	      if (dirRE.test(name)) {
	        var value = node.attrsMap[name]
	        if (value) {
	          if (name === 'v-for') {
	            checkFor(node, ("v-for=\"" + value + "\""), errors)
	          } else {
	            checkExpression(value, (name + "=\"" + value + "\""), errors)
	          }
	        }
	      }
	    }
	    if (node.children) {
	      for (var i = 0; i < node.children.length; i++) {
	        checkNode(node.children[i], errors)
	      }
	    }
	  } else if (node.type === 2) {
	    checkExpression(node.expression, node.text, errors)
	  }
	}

	function checkFor (node, text, errors) {
	  checkExpression(node.for || '', text, errors)
	  checkIdentifier(node.alias, 'v-for alias', text, errors)
	  checkIdentifier(node.iterator1, 'v-for iterator', text, errors)
	  checkIdentifier(node.iterator2, 'v-for iterator', text, errors)
	}

	function checkIdentifier (ident, type, text, errors) {
	  if (typeof ident === 'string' && !identRE.test(ident)) {
	    errors.push(("- invalid " + type + " \"" + ident + "\" in expression: " + text))
	  }
	}

	function checkExpression (exp, text, errors) {
	  try {
	    new Function(("return " + exp))
	  } catch (e) {
	    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE)
	    if (keywordMatch) {
	      errors.push(
	        "- avoid using JavaScript keyword as property name: " +
	        "\"" + (keywordMatch[0]) + "\" in expression " + text
	      )
	    } else {
	      errors.push(("- invalid expression: " + text))
	    }
	  }
	}

	/*  */

	function transformNode (el, options) {
	  var warn = options.warn || baseWarn
	  var staticClass = getAndRemoveAttr(el, 'class')
	  if ("development" !== 'production' && staticClass) {
	    var expression = parseText(staticClass, options.delimiters)
	    if (expression) {
	      warn(
	        "class=\"" + staticClass + "\": " +
	        'Interpolation inside attributes has been deprecated. ' +
	        'Use v-bind or the colon shorthand instead.'
	      )
	    }
	  }
	  if (staticClass) {
	    el.staticClass = JSON.stringify(staticClass)
	  }
	  var classBinding = getBindingAttr(el, 'class', false /* getStatic */)
	  if (classBinding) {
	    el.classBinding = classBinding
	  }
	}

	function genData$1 (el) {
	  var data = ''
	  if (el.staticClass) {
	    data += "staticClass:" + (el.staticClass) + ","
	  }
	  if (el.classBinding) {
	    data += "class:" + (el.classBinding) + ","
	  }
	  return data
	}

	var klass$1 = {
	  staticKeys: ['staticClass'],
	  transformNode: transformNode,
	  genData: genData$1
	}

	/*  */

	function transformNode$1 (el) {
	  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */)
	  if (styleBinding) {
	    el.styleBinding = styleBinding
	  }
	}

	function genData$2 (el) {
	  return el.styleBinding
	    ? ("style:(" + (el.styleBinding) + "),")
	    : ''
	}

	var style$1 = {
	  transformNode: transformNode$1,
	  genData: genData$2
	}

	var modules$1 = [
	  klass$1,
	  style$1
	]

	/*  */

	var warn$3

	function model$1 (
	  el,
	  dir,
	  _warn
	) {
	  warn$3 = _warn
	  var value = dir.value
	  var modifiers = dir.modifiers
	  var tag = el.tag
	  var type = el.attrsMap.type
	  if (tag === 'select') {
	    return genSelect(el, value)
	  } else if (tag === 'input' && type === 'checkbox') {
	    genCheckboxModel(el, value)
	  } else if (tag === 'input' && type === 'radio') {
	    genRadioModel(el, value)
	  } else {
	    return genDefaultModel(el, value, modifiers)
	  }
	}

	function genCheckboxModel (el, value) {
	  if ("development" !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    )
	  }
	  var valueBinding = getBindingAttr(el, 'value') || 'null'
	  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true'
	  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false'
	  addProp(el, 'checked',
	    "Array.isArray(" + value + ")" +
	      "?_i(" + value + "," + valueBinding + ")>-1" +
	      ":_q(" + value + "," + trueValueBinding + ")"
	  )
	  addHandler(el, 'change',
	    "var $$a=" + value + "," +
	        '$$el=$event.target,' +
	        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
	    'if(Array.isArray($$a)){' +
	      "var $$v=" + valueBinding + "," +
	          '$$i=_i($$a,$$v);' +
	      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
	      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
	    "}else{" + value + "=$$c}",
	    null, true
	  )
	}

	function genRadioModel (el, value) {
	  if ("development" !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    )
	  }
	  var valueBinding = getBindingAttr(el, 'value') || 'null'
	  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"))
	  addHandler(el, 'change', (value + "=" + valueBinding), null, true)
	}

	function genDefaultModel (
	  el,
	  value,
	  modifiers
	) {
	  {
	    if (el.tag === 'input' && el.attrsMap.value) {
	      warn$3(
	        "<" + (el.tag) + " v-model=\"" + value + "\" value=\"" + (el.attrsMap.value) + "\">:\n" +
	        'inline value attributes will be ignored when using v-model. ' +
	        'Declare initial values in the component\'s data option instead.'
	      )
	    }
	    if (el.tag === 'textarea' && el.children.length) {
	      warn$3(
	        "<textarea v-model=\"" + value + "\">:\n" +
	        'inline content inside <textarea> will be ignored when using v-model. ' +
	        'Declare initial values in the component\'s data option instead.'
	      )
	    }
	  }

	  var type = el.attrsMap.type
	  var ref = modifiers || {};
	  var lazy = ref.lazy;
	  var number = ref.number;
	  var trim = ref.trim;
	  var event = lazy || (isIE && type === 'range') ? 'change' : 'input'
	  var needCompositionGuard = !lazy && type !== 'range'
	  var isNative = el.tag === 'input' || el.tag === 'textarea'

	  var valueExpression = isNative
	    ? ("$event.target.value" + (trim ? '.trim()' : ''))
	    : "$event"
	  var code = number || type === 'number'
	    ? (value + "=_n(" + valueExpression + ")")
	    : (value + "=" + valueExpression)
	  if (isNative && needCompositionGuard) {
	    code = "if($event.target.composing)return;" + code
	  }
	  // inputs with type="file" are read only and setting the input's
	  // value will throw an error.
	  if ("development" !== 'production' &&
	      type === 'file') {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
	      "File inputs are read only. Use a v-on:change listener instead."
	    )
	  }
	  addProp(el, 'value', isNative ? ("_s(" + value + ")") : ("(" + value + ")"))
	  addHandler(el, event, code, null, true)
	  if (needCompositionGuard) {
	    // need runtime directive code to help with composition events
	    return true
	  }
	}

	function genSelect (el, value) {
	  {
	    el.children.some(checkOptionWarning)
	  }
	  var code = value + "=Array.prototype.filter" +
	    ".call($event.target.options,function(o){return o.selected})" +
	    ".map(function(o){return \"_value\" in o ? o._value : o.value})" +
	    (el.attrsMap.multiple == null ? '[0]' : '')
	  addHandler(el, 'change', code, null, true)
	  // need runtime to help with possible dynamically generated options
	  return true
	}

	function checkOptionWarning (option) {
	  if (option.type === 1 &&
	    option.tag === 'option' &&
	    option.attrsMap.selected != null) {
	    warn$3(
	      "<select v-model=\"" + (option.parent.attrsMap['v-model']) + "\">:\n" +
	      'inline selected attributes on <option> will be ignored when using v-model. ' +
	      'Declare initial values in the component\'s data option instead.'
	    )
	    return true
	  }
	  return false
	}

	/*  */

	function text (el, dir) {
	  if (dir.value) {
	    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"))
	  }
	}

	/*  */

	function html (el, dir) {
	  if (dir.value) {
	    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"))
	  }
	}

	var directives$1 = {
	  model: model$1,
	  text: text,
	  html: html
	}

	/*  */

	var cache = Object.create(null)

	var baseOptions = {
	  isIE: isIE,
	  expectHTML: true,
	  modules: modules$1,
	  staticKeys: genStaticKeys(modules$1),
	  directives: directives$1,
	  isReservedTag: isReservedTag,
	  isUnaryTag: isUnaryTag,
	  mustUseProp: mustUseProp,
	  getTagNamespace: getTagNamespace,
	  isPreTag: isPreTag
	}

	function compile$$1 (
	  template,
	  options
	) {
	  options = options
	    ? extend(extend({}, baseOptions), options)
	    : baseOptions
	  return compile$1(template, options)
	}

	function compileToFunctions (
	  template,
	  options,
	  vm
	) {
	  var _warn = (options && options.warn) || warn
	  // detect possible CSP restriction
	  /* istanbul ignore if */
	  {
	    try {
	      new Function('return 1')
	    } catch (e) {
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        _warn(
	          'It seems you are using the standalone build of Vue.js in an ' +
	          'environment with Content Security Policy that prohibits unsafe-eval. ' +
	          'The template compiler cannot work in this environment. Consider ' +
	          'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
	          'templates into render functions.'
	        )
	      }
	    }
	  }
	  var key = options && options.delimiters
	    ? String(options.delimiters) + template
	    : template
	  if (cache[key]) {
	    return cache[key]
	  }
	  var res = {}
	  var compiled = compile$$1(template, options)
	  res.render = makeFunction(compiled.render)
	  var l = compiled.staticRenderFns.length
	  res.staticRenderFns = new Array(l)
	  for (var i = 0; i < l; i++) {
	    res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i])
	  }
	  {
	    if (res.render === noop || res.staticRenderFns.some(function (fn) { return fn === noop; })) {
	      _warn(
	        "failed to compile template:\n\n" + template + "\n\n" +
	        detectErrors(compiled.ast).join('\n') +
	        '\n\n',
	        vm
	      )
	    }
	  }
	  return (cache[key] = res)
	}

	function makeFunction (code) {
	  try {
	    return new Function(code)
	  } catch (e) {
	    return noop
	  }
	}

	/*  */

	var idToTemplate = cached(function (id) {
	  var el = query(id)
	  return el && el.innerHTML
	})

	var mount = Vue$3.prototype.$mount
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && query(el)

	  /* istanbul ignore if */
	  if (el === document.body || el === document.documentElement) {
	    "development" !== 'production' && warn(
	      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
	    )
	    return this
	  }

	  var options = this.$options
	  // resolve template/el and convert to render function
	  if (!options.render) {
	    var template = options.template
	    var isFromDOM = false
	    if (template) {
	      if (typeof template === 'string') {
	        if (template.charAt(0) === '#') {
	          isFromDOM = true
	          template = idToTemplate(template)
	        }
	      } else if (template.nodeType) {
	        isFromDOM = true
	        template = template.innerHTML
	      } else {
	        {
	          warn('invalid template option:' + template, this)
	        }
	        return this
	      }
	    } else if (el) {
	      isFromDOM = true
	      template = getOuterHTML(el)
	    }
	    if (template) {
	      var ref = compileToFunctions(template, {
	        warn: warn,
	        isFromDOM: isFromDOM,
	        shouldDecodeTags: shouldDecodeTags,
	        shouldDecodeNewlines: shouldDecodeNewlines,
	        delimiters: options.delimiters
	      }, this);
	      var render = ref.render;
	      var staticRenderFns = ref.staticRenderFns;
	      options.render = render
	      options.staticRenderFns = staticRenderFns
	    }
	  }
	  return mount.call(this, el, hydrating)
	}

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 */
	function getOuterHTML (el) {
	  if (el.outerHTML) {
	    return el.outerHTML
	  } else {
	    var container = document.createElement('div')
	    container.appendChild(el.cloneNode(true))
	    return container.innerHTML
	  }
	}

	Vue$3.compile = compileToFunctions

	return Vue$3;

	})));


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _vue = __webpack_require__(68);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(70);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _app = __webpack_require__(72);

	var _app2 = _interopRequireDefault(_app);

	var _componenttest = __webpack_require__(88);

	var _componenttest2 = _interopRequireDefault(_componenttest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vueRouter2.default);

	// 1. 定义（路由）组件。
	// 可以从其他文件 import 进来
	var Test = { template: '<div>test</div>' };

	// 2. 定义路由
	// 每个路由应该映射一个组件。 其中"component" 可以是
	// 通过 Vue.extend() 创建的组件构造器，
	// 或者，只是一个组件配置对象。
	// 我们晚点再讨论嵌套路由。

	var routes = [{ path: '/chatroom', component: _app2.default }, { path: '/test', component: Test }, { path: '/componenta', component: _componenttest2.default }];

	var router = new _vueRouter2.default({ routes: routes });

	exports.default = router;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	  * vue-router v2.1.1
	  * (c) 2016 Evan You
	  * @license MIT
	  */
	'use strict';

	var View = {
	  name: 'router-view',
	  functional: true,
	  props: {
	    name: {
	      type: String,
	      default: 'default'
	    }
	  },
	  render: function render (h, ref) {
	    var props = ref.props;
	    var children = ref.children;
	    var parent = ref.parent;
	    var data = ref.data;

	    data.routerView = true

	    var route = parent.$route
	    var cache = parent._routerViewCache || (parent._routerViewCache = {})
	    var depth = 0
	    var inactive = false

	    while (parent) {
	      if (parent.$vnode && parent.$vnode.data.routerView) {
	        depth++
	      }
	      if (parent._inactive) {
	        inactive = true
	      }
	      parent = parent.$parent
	    }

	    data.routerViewDepth = depth
	    var matched = route.matched[depth]
	    if (!matched) {
	      return h()
	    }

	    var name = props.name
	    var component = inactive
	      ? cache[name]
	      : (cache[name] = matched.components[name])

	    if (!inactive) {
	      var hooks = data.hook || (data.hook = {})
	      hooks.init = function (vnode) {
	        matched.instances[name] = vnode.child
	      }
	      hooks.prepatch = function (oldVnode, vnode) {
	        matched.instances[name] = vnode.child
	      }
	      hooks.destroy = function (vnode) {
	        if (matched.instances[name] === vnode.child) {
	          matched.instances[name] = undefined
	        }
	      }
	    }

	    return h(component, data, children)
	  }
	}

	/*  */

	function assert (condition, message) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}

	function warn (condition, message) {
	  if (!condition) {
	    typeof console !== 'undefined' && console.warn(("[vue-router] " + message))
	  }
	}

	/*  */

	var encode = encodeURIComponent
	var decode = decodeURIComponent

	function resolveQuery (
	  query,
	  extraQuery
	) {
	  if ( extraQuery === void 0 ) extraQuery = {};

	  if (query) {
	    var parsedQuery
	    try {
	      parsedQuery = parseQuery(query)
	    } catch (e) {
	      process.env.NODE_ENV !== 'production' && warn(false, e.message)
	      parsedQuery = {}
	    }
	    for (var key in extraQuery) {
	      parsedQuery[key] = extraQuery[key]
	    }
	    return parsedQuery
	  } else {
	    return extraQuery
	  }
	}

	function parseQuery (query) {
	  var res = {}

	  query = query.trim().replace(/^(\?|#|&)/, '')

	  if (!query) {
	    return res
	  }

	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=')
	    var key = decode(parts.shift())
	    var val = parts.length > 0
	      ? decode(parts.join('='))
	      : null

	    if (res[key] === undefined) {
	      res[key] = val
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val)
	    } else {
	      res[key] = [res[key], val]
	    }
	  })

	  return res
	}

	function stringifyQuery (obj) {
	  var res = obj ? Object.keys(obj).map(function (key) {
	    var val = obj[key]

	    if (val === undefined) {
	      return ''
	    }

	    if (val === null) {
	      return encode(key)
	    }

	    if (Array.isArray(val)) {
	      var result = []
	      val.slice().forEach(function (val2) {
	        if (val2 === undefined) {
	          return
	        }
	        if (val2 === null) {
	          result.push(encode(key))
	        } else {
	          result.push(encode(key) + '=' + encode(val2))
	        }
	      })
	      return result.join('&')
	    }

	    return encode(key) + '=' + encode(val)
	  }).filter(function (x) { return x.length > 0; }).join('&') : null
	  return res ? ("?" + res) : ''
	}

	/*  */

	function createRoute (
	  record,
	  location,
	  redirectedFrom
	) {
	  var route = {
	    name: location.name || (record && record.name),
	    meta: (record && record.meta) || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: location.query || {},
	    params: location.params || {},
	    fullPath: getFullPath(location),
	    matched: record ? formatMatch(record) : []
	  }
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom)
	  }
	  return Object.freeze(route)
	}

	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	})

	function formatMatch (record) {
	  var res = []
	  while (record) {
	    res.unshift(record)
	    record = record.parent
	  }
	  return res
	}

	function getFullPath (ref) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';

	  return (path || '/') + stringifyQuery(query) + hash
	}

	var trailingSlashRE = /\/$/
	function isSameRoute (a, b) {
	  if (b === START) {
	    return a === b
	  } else if (!b) {
	    return false
	  } else if (a.path && b.path) {
	    return (
	      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query)
	    )
	  } else if (a.name && b.name) {
	    return (
	      a.name === b.name &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query) &&
	      isObjectEqual(a.params, b.params)
	    )
	  } else {
	    return false
	  }
	}

	function isObjectEqual (a, b) {
	  if ( a === void 0 ) a = {};
	  if ( b === void 0 ) b = {};

	  var aKeys = Object.keys(a)
	  var bKeys = Object.keys(b)
	  if (aKeys.length !== bKeys.length) {
	    return false
	  }
	  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
	}

	function isIncludedRoute (current, target) {
	  return (
	    current.path.indexOf(target.path.replace(/\/$/, '')) === 0 &&
	    (!target.hash || current.hash === target.hash) &&
	    queryIncludes(current.query, target.query)
	  )
	}

	function queryIncludes (current, target) {
	  for (var key in target) {
	    if (!(key in current)) {
	      return false
	    }
	  }
	  return true
	}

	/*  */

	// work around weird flow bug
	var toTypes = [String, Object]

	var Link = {
	  name: 'router-link',
	  props: {
	    to: {
	      type: toTypes,
	      required: true
	    },
	    tag: {
	      type: String,
	      default: 'a'
	    },
	    exact: Boolean,
	    append: Boolean,
	    replace: Boolean,
	    activeClass: String,
	    event: {
	      type: [String, Array],
	      default: 'click'
	    }
	  },
	  render: function render (h) {
	    var this$1 = this;

	    var router = this.$router
	    var current = this.$route
	    var ref = router.resolve(this.to, current, this.append);
	    var normalizedTo = ref.normalizedTo;
	    var resolved = ref.resolved;
	    var href = ref.href;
	    var classes = {}
	    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active'
	    var compareTarget = normalizedTo.path ? createRoute(null, normalizedTo) : resolved
	    classes[activeClass] = this.exact
	      ? isSameRoute(current, compareTarget)
	      : isIncludedRoute(current, compareTarget)

	    var handler = function (e) {
	      if (guardEvent(e)) {
	        if (this$1.replace) {
	          router.replace(normalizedTo)
	        } else {
	          router.push(normalizedTo)
	        }
	      }
	    }

	    var on = { click: guardEvent }
	    if (Array.isArray(this.event)) {
	      this.event.forEach(function (e) { on[e] = handler })
	    } else {
	      on[this.event] = handler
	    }

	    var data = {
	      class: classes
	    }

	    if (this.tag === 'a') {
	      data.on = on
	      data.attrs = { href: href }
	    } else {
	      // find the first <a> child and apply listener and href
	      var a = findAnchor(this.$slots.default)
	      if (a) {
	        // in case the <a> is a static node
	        a.isStatic = false
	        var extend = _Vue.util.extend
	        var aData = a.data = extend({}, a.data)
	        aData.on = on
	        var aAttrs = a.data.attrs = extend({}, a.data.attrs)
	        aAttrs.href = href
	      } else {
	        // doesn't have <a> child, apply listener to self
	        data.on = on
	      }
	    }

	    return h(this.tag, data, this.$slots.default)
	  }
	}

	function guardEvent (e) {
	  // don't redirect with control keys
	  /* istanbul ignore if */
	  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
	  // don't redirect when preventDefault called
	  /* istanbul ignore if */
	  if (e.defaultPrevented) { return }
	  // don't redirect on right click
	  /* istanbul ignore if */
	  if (e.button !== 0) { return }
	  // don't redirect if `target="_blank"`
	  /* istanbul ignore if */
	  var target = e.target.getAttribute('target')
	  if (/\b_blank\b/i.test(target)) { return }

	  e.preventDefault()
	  return true
	}

	function findAnchor (children) {
	  if (children) {
	    var child
	    for (var i = 0; i < children.length; i++) {
	      child = children[i]
	      if (child.tag === 'a') {
	        return child
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child
	      }
	    }
	  }
	}

	var _Vue

	function install (Vue) {
	  if (install.installed) { return }
	  install.installed = true

	  _Vue = Vue

	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get () { return this.$root._router }
	  })

	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get$1 () { return this.$root._route }
	  })

	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      if (this.$options.router) {
	        this._router = this.$options.router
	        this._router.init(this)
	        Vue.util.defineReactive(this, '_route', this._router.history.current)
	      }
	    }
	  })

	  Vue.component('router-view', View)
	  Vue.component('router-link', Link)

	  var strats = Vue.config.optionMergeStrategies
	  // use the same hook merging strategy for route hooks
	  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created
	}

	/*  */

	function resolvePath (
	  relative,
	  base,
	  append
	) {
	  if (relative.charAt(0) === '/') {
	    return relative
	  }

	  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
	    return base + relative
	  }

	  var stack = base.split('/')

	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop()
	  }

	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/')
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i]
	    if (segment === '.') {
	      continue
	    } else if (segment === '..') {
	      stack.pop()
	    } else {
	      stack.push(segment)
	    }
	  }

	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('')
	  }

	  return stack.join('/')
	}

	function parsePath (path) {
	  var hash = ''
	  var query = ''

	  var hashIndex = path.indexOf('#')
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex)
	    path = path.slice(0, hashIndex)
	  }

	  var queryIndex = path.indexOf('?')
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1)
	    path = path.slice(0, queryIndex)
	  }

	  return {
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function cleanPath (path) {
	  return path.replace(/\/\//g, '/')
	}

	/*  */

	function createRouteMap (routes) {
	  var pathMap = Object.create(null)
	  var nameMap = Object.create(null)

	  routes.forEach(function (route) {
	    addRouteRecord(pathMap, nameMap, route)
	  })

	  return {
	    pathMap: pathMap,
	    nameMap: nameMap
	  }
	}

	function addRouteRecord (
	  pathMap,
	  nameMap,
	  route,
	  parent,
	  matchAs
	) {
	  var path = route.path;
	  var name = route.name;
	  if (process.env.NODE_ENV !== 'production') {
	    assert(path != null, "\"path\" is required in a route configuration.")
	    assert(
	      typeof route.component !== 'string',
	      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
	      "string id. Use an actual component instead."
	    )
	  }

	  var record = {
	    path: normalizePath(path, parent),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {}
	  }

	  if (route.children) {
	    // Warn if route is named and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    if (process.env.NODE_ENV !== 'production') {
	      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
	        warn(false, ("Named Route '" + (route.name) + "' has a default child route.\n          When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), the default child route will not be rendered.\n          Remove the name from this route and use the name of the default child route for named links instead.")
	        )
	      }
	    }
	    route.children.forEach(function (child) {
	      addRouteRecord(pathMap, nameMap, child, record)
	    })
	  }

	  if (route.alias !== undefined) {
	    if (Array.isArray(route.alias)) {
	      route.alias.forEach(function (alias) {
	        addRouteRecord(pathMap, nameMap, { path: alias }, parent, record.path)
	      })
	    } else {
	      addRouteRecord(pathMap, nameMap, { path: route.alias }, parent, record.path)
	    }
	  }

	  if (!pathMap[record.path]) {
	    pathMap[record.path] = record
	  }
	  if (name) {
	    if (!nameMap[name]) {
	      nameMap[name] = record
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, ("Duplicate named routes definition: { name: \"" + name + "\", path: \"" + (record.path) + "\" }"))
	    }
	  }
	}

	function normalizePath (path, parent) {
	  path = path.replace(/\/$/, '')
	  if (path[0] === '/') { return path }
	  if (parent == null) { return path }
	  return cleanPath(((parent.path) + "/" + path))
	}

	var __moduleExports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	var isarray = __moduleExports

	/**
	 * Expose `pathToRegexp`.
	 */
	var index = pathToRegexp
	var parse_1 = parse
	var compile_1 = compile
	var tokensToFunction_1 = tokensToFunction
	var tokensToRegExp_1 = tokensToRegExp

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var defaultDelimiter = options && options.delimiter || '/'
	  var res

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }

	    var next = str[index]
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var modifier = res[6]
	    var asterisk = res[7]

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }

	    var partial = prefix != null && next != null && next !== prefix
	    var repeat = modifier === '+' || modifier === '*'
	    var optional = modifier === '?' || modifier === '*'
	    var delimiter = res[2] || defaultDelimiter
	    var pattern = capture || group

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    })
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
	    }
	  }

	  return function (obj, opts) {
	    var path = ''
	    var data = obj || {}
	    var options = opts || {}
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]

	      if (typeof token === 'string') {
	        path += token

	        continue
	      }

	      var value = data[token.name]
	      var segment

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j])

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      })
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }

	  options = options || {}

	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]

	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = '(?:' + token.pattern + ')'

	      keys.push(token)

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = prefix + '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }

	      route += capture
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/')
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
	  }

	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }

	  options = options || {}

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}

	index.parse = parse_1;
	index.compile = compile_1;
	index.tokensToFunction = tokensToFunction_1;
	index.tokensToRegExp = tokensToRegExp_1;

	/*  */

	var regexpCache = Object.create(null)

	function getRouteRegex (path) {
	  var hit = regexpCache[path]
	  var keys, regexp

	  if (hit) {
	    keys = hit.keys
	    regexp = hit.regexp
	  } else {
	    keys = []
	    regexp = index(path, keys)
	    regexpCache[path] = { keys: keys, regexp: regexp }
	  }

	  return { keys: keys, regexp: regexp }
	}

	var regexpCompileCache = Object.create(null)

	function fillParams (
	  path,
	  params,
	  routeMsg
	) {
	  try {
	    var filler =
	      regexpCompileCache[path] ||
	      (regexpCompileCache[path] = index.compile(path))
	    return filler(params || {}, { pretty: true })
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(false, ("missing param for " + routeMsg + ": " + (e.message)))
	    }
	    return ''
	  }
	}

	/*  */

	function normalizeLocation (
	  raw,
	  current,
	  append
	) {
	  var next = typeof raw === 'string' ? { path: raw } : raw
	  // named target
	  if (next.name || next._normalized) {
	    return next
	  }

	  // relative params
	  if (!next.path && next.params && current) {
	    next = assign({}, next)
	    next._normalized = true
	    var params = assign(assign({}, current.params), next.params)
	    if (current.name) {
	      next.name = current.name
	      next.params = params
	    } else if (current.matched) {
	      var rawPath = current.matched[current.matched.length - 1].path
	      next.path = fillParams(rawPath, params, ("path " + (current.path)))
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, "relative params navigation requires a current route.")
	    }
	    return next
	  }

	  var parsedPath = parsePath(next.path || '')
	  var basePath = (current && current.path) || '/'
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append || next.append)
	    : (current && current.path) || '/'
	  var query = resolveQuery(parsedPath.query, next.query)
	  var hash = next.hash || parsedPath.hash
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash
	  }

	  return {
	    _normalized: true,
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function assign (a, b) {
	  for (var key in b) {
	    a[key] = b[key]
	  }
	  return a
	}

	/*  */

	function createMatcher (routes) {
	  var ref = createRouteMap(routes);
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;

	  function match (
	    raw,
	    currentRoute,
	    redirectedFrom
	  ) {
	    var location = normalizeLocation(raw, currentRoute)
	    var name = location.name;

	    if (name) {
	      var record = nameMap[name]
	      var paramNames = getRouteRegex(record.path).keys
	        .filter(function (key) { return !key.optional; })
	        .map(function (key) { return key.name; })

	      if (typeof location.params !== 'object') {
	        location.params = {}
	      }

	      if (currentRoute && typeof currentRoute.params === 'object') {
	        for (var key in currentRoute.params) {
	          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	            location.params[key] = currentRoute.params[key]
	          }
	        }
	      }

	      if (record) {
	        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""))
	        return _createRoute(record, location, redirectedFrom)
	      }
	    } else if (location.path) {
	      location.params = {}
	      for (var path in pathMap) {
	        if (matchRoute(path, location.params, location.path)) {
	          return _createRoute(pathMap[path], location, redirectedFrom)
	        }
	      }
	    }
	    // no match
	    return _createRoute(null, location)
	  }

	  function redirect (
	    record,
	    location
	  ) {
	    var originalRedirect = record.redirect
	    var redirect = typeof originalRedirect === 'function'
	        ? originalRedirect(createRoute(record, location))
	        : originalRedirect

	    if (typeof redirect === 'string') {
	      redirect = { path: redirect }
	    }

	    if (!redirect || typeof redirect !== 'object') {
	      process.env.NODE_ENV !== 'production' && warn(
	        false, ("invalid redirect option: " + (JSON.stringify(redirect)))
	      )
	      return _createRoute(null, location)
	    }

	    var re = redirect
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query
	    hash = re.hasOwnProperty('hash') ? re.hash : hash
	    params = re.hasOwnProperty('params') ? re.params : params

	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name]
	      if (process.env.NODE_ENV !== 'production') {
	        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."))
	      }
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location)
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record)
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""))
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location)
	    } else {
	      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))))
	      return _createRoute(null, location)
	    }
	  }

	  function alias (
	    record,
	    location,
	    matchAs
	  ) {
	    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""))
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    })
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched
	      var aliasedRecord = matched[matched.length - 1]
	      location.params = aliasedMatch.params
	      return _createRoute(aliasedRecord, location)
	    }
	    return _createRoute(null, location)
	  }

	  function _createRoute (
	    record,
	    location,
	    redirectedFrom
	  ) {
	    if (record && record.redirect) {
	      return redirect(record, redirectedFrom || location)
	    }
	    if (record && record.matchAs) {
	      return alias(record, location, record.matchAs)
	    }
	    return createRoute(record, location, redirectedFrom)
	  }

	  return match
	}

	function matchRoute (
	  path,
	  params,
	  pathname
	) {
	  var ref = getRouteRegex(path);
	  var regexp = ref.regexp;
	  var keys = ref.keys;
	  var m = pathname.match(regexp)

	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }

	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = keys[i - 1]
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i]
	    if (key) { params[key.name] = val }
	  }

	  return true
	}

	function resolveRecordPath (path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true)
	}

	/*  */

	var inBrowser = typeof window !== 'undefined'

	var supportsHistory = inBrowser && (function () {
	  var ua = window.navigator.userAgent

	  if (
	    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	    ua.indexOf('Mobile Safari') !== -1 &&
	    ua.indexOf('Chrome') === -1 &&
	    ua.indexOf('Windows Phone') === -1
	  ) {
	    return false
	  }

	  return window.history && 'pushState' in window.history
	})()

	/*  */

	function runQueue (queue, fn, cb) {
	  var step = function (index) {
	    if (index >= queue.length) {
	      cb()
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1)
	        })
	      } else {
	        step(index + 1)
	      }
	    }
	  }
	  step(0)
	}

	/*  */


	var History = function History (router, base) {
	  this.router = router
	  this.base = normalizeBase(base)
	  // start with a route object that stands for "nowhere"
	  this.current = START
	  this.pending = null
	};

	History.prototype.listen = function listen (cb) {
	  this.cb = cb
	};

	History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
	    var this$1 = this;

	  var route = this.router.match(location, this.current)
	  this.confirmTransition(route, function () {
	    this$1.updateRoute(route)
	    onComplete && onComplete(route)
	    this$1.ensureURL()
	  }, onAbort)
	};

	History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
	    var this$1 = this;

	  var current = this.current
	  var abort = function () { onAbort && onAbort() }
	  if (isSameRoute(route, current)) {
	    this.ensureURL()
	    return abort()
	  }

	  var ref = resolveQueue(this.current.matched, route.matched);
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;

	  var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // enter guards
	    activated.map(function (m) { return m.beforeEnter; }),
	    // async components
	    resolveAsyncComponents(activated)
	  )

	  this.pending = route
	  var iterator = function (hook, next) {
	    if (this$1.pending !== route) {
	      return abort()
	    }
	    hook(route, current, function (to) {
	      if (to === false) {
	        // next(false) -> abort navigation, ensure current URL
	        this$1.ensureURL(true)
	        abort()
	      } else if (typeof to === 'string' || typeof to === 'object') {
	        // next('/') or next({ path: '/' }) -> redirect
	        (typeof to === 'object' && to.replace) ? this$1.replace(to) : this$1.push(to)
	        abort()
	      } else {
	        // confirm transition and pass on the value
	        next(to)
	      }
	    })
	  }

	  runQueue(queue, iterator, function () {
	    var postEnterCbs = []
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, function () {
	      return this$1.current === route
	    })
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    runQueue(enterGuards, iterator, function () {
	      if (this$1.pending !== route) {
	        return abort()
	      }
	      this$1.pending = null
	      onComplete(route)
	      if (this$1.router.app) {
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) { return cb(); })
	        })
	      }
	    })
	  })
	};

	History.prototype.updateRoute = function updateRoute (route) {
	  var prev = this.current
	  this.current = route
	  this.cb && this.cb(route)
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route, prev)
	  })
	};

	function normalizeBase (base) {
	  if (!base) {
	    if (inBrowser) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base')
	      base = baseEl ? baseEl.getAttribute('href') : '/'
	    } else {
	      base = '/'
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '')
	}

	function resolveQueue (
	  current,
	  next
	) {
	  var i
	  var max = Math.max(current.length, next.length)
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break
	    }
	  }
	  return {
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  }
	}

	function extractGuard (
	  def,
	  key
	) {
	  if (typeof def !== 'function') {
	    // extend now so that global mixins are applied.
	    def = _Vue.extend(def)
	  }
	  return def.options[key]
	}

	function extractLeaveGuards (matched) {
	  return flatten(flatMapComponents(matched, function (def, instance) {
	    var guard = extractGuard(def, 'beforeRouteLeave')
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return wrapLeaveGuard(guard, instance); })
	        : wrapLeaveGuard(guard, instance)
	    }
	  }).reverse())
	}

	function wrapLeaveGuard (
	  guard,
	  instance
	) {
	  return function routeLeaveGuard () {
	    return guard.apply(instance, arguments)
	  }
	}

	function extractEnterGuards (
	  matched,
	  cbs,
	  isValid
	) {
	  return flatten(flatMapComponents(matched, function (def, _, match, key) {
	    var guard = extractGuard(def, 'beforeRouteEnter')
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return wrapEnterGuard(guard, cbs, match, key, isValid); })
	        : wrapEnterGuard(guard, cbs, match, key, isValid)
	    }
	  }))
	}

	function wrapEnterGuard (
	  guard,
	  cbs,
	  match,
	  key,
	  isValid
	) {
	  return function routeEnterGuard (to, from, next) {
	    return guard(to, from, function (cb) {
	      next(cb)
	      if (typeof cb === 'function') {
	        cbs.push(function () {
	          // #750
	          // if a router-view is wrapped with an out-in transition,
	          // the instance may not have been registered at this time.
	          // we will need to poll for registration until current route
	          // is no longer valid.
	          poll(cb, match.instances, key, isValid)
	        })
	      }
	    })
	  }
	}

	function poll (
	  cb, // somehow flow cannot infer this is a function
	  instances,
	  key,
	  isValid
	) {
	  if (instances[key]) {
	    cb(instances[key])
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid)
	    }, 16)
	  }
	}

	function resolveAsyncComponents (matched) {
	  return flatMapComponents(matched, function (def, _, match, key) {
	    // if it's a function and doesn't have Vue options attached,
	    // assume it's an async component resolve function.
	    // we are not using Vue's default async resolving mechanism because
	    // we want to halt the navigation until the incoming component has been
	    // resolved.
	    if (typeof def === 'function' && !def.options) {
	      return function (to, from, next) {
	        var resolve = function (resolvedDef) {
	          match.components[key] = resolvedDef
	          next()
	        }

	        var reject = function (reason) {
	          warn(false, ("Failed to resolve async component " + key + ": " + reason))
	          next(false)
	        }

	        var res = def(resolve, reject)
	        if (res && typeof res.then === 'function') {
	          res.then(resolve, reject)
	        }
	      }
	    }
	  })
	}

	function flatMapComponents (
	  matched,
	  fn
	) {
	  return flatten(matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) { return fn(
	      m.components[key],
	      m.instances[key],
	      m, key
	    ); })
	  }))
	}

	function flatten (arr) {
	  return Array.prototype.concat.apply([], arr)
	}

	/*  */

	var positionStore = Object.create(null)

	function saveScrollPosition (key) {
	  if (!key) { return }
	  positionStore[key] = {
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  }
	}

	function getScrollPosition (key) {
	  if (!key) { return }
	  return positionStore[key]
	}

	function getElementPosition (el) {
	  var docRect = document.documentElement.getBoundingClientRect()
	  var elRect = el.getBoundingClientRect()
	  return {
	    x: elRect.left - docRect.left,
	    y: elRect.top - docRect.top
	  }
	}

	function isValidPosition (obj) {
	  return isNumber(obj.x) || isNumber(obj.y)
	}

	function normalizePosition (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	    y: isNumber(obj.y) ? obj.y : window.pageYOffset
	  }
	}

	function isNumber (v) {
	  return typeof v === 'number'
	}

	/*  */


	var genKey = function () { return String(Date.now()); }
	var _key = genKey()

	var HTML5History = (function (History) {
	  function HTML5History (router, base) {
	    var this$1 = this;

	    History.call(this, router, base)

	    var expectScroll = router.options.scrollBehavior
	    window.addEventListener('popstate', function (e) {
	      _key = e.state && e.state.key
	      var current = this$1.current
	      this$1.transitionTo(getLocation(this$1.base), function (next) {
	        if (expectScroll) {
	          this$1.handleScroll(next, current, true)
	        }
	      })
	    })

	    if (expectScroll) {
	      window.addEventListener('scroll', function () {
	        saveScrollPosition(_key)
	      })
	    }
	  }

	  if ( History ) HTML5History.__proto__ = History;
	  HTML5History.prototype = Object.create( History && History.prototype );
	  HTML5History.prototype.constructor = HTML5History;

	  HTML5History.prototype.go = function go (n) {
	    window.history.go(n)
	  };

	  HTML5History.prototype.push = function push (location) {
	    var this$1 = this;

	    var current = this.current
	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath))
	      this$1.handleScroll(route, current, false)
	    })
	  };

	  HTML5History.prototype.replace = function replace (location) {
	    var this$1 = this;

	    var current = this.current
	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath))
	      this$1.handleScroll(route, current, false)
	    })
	  };

	  HTML5History.prototype.ensureURL = function ensureURL (push) {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      var current = cleanPath(this.base + this.current.fullPath)
	      push ? pushState(current) : replaceState(current)
	    }
	  };

	  HTML5History.prototype.handleScroll = function handleScroll (to, from, isPop) {
	    var router = this.router
	    if (!router.app) {
	      return
	    }

	    var behavior = router.options.scrollBehavior
	    if (!behavior) {
	      return
	    }
	    if (process.env.NODE_ENV !== 'production') {
	      assert(typeof behavior === 'function', "scrollBehavior must be a function")
	    }

	    // wait until re-render finishes before scrolling
	    router.app.$nextTick(function () {
	      var position = getScrollPosition(_key)
	      var shouldScroll = behavior(to, from, isPop ? position : null)
	      if (!shouldScroll) {
	        return
	      }
	      var isObject = typeof shouldScroll === 'object'
	      if (isObject && typeof shouldScroll.selector === 'string') {
	        var el = document.querySelector(shouldScroll.selector)
	        if (el) {
	          position = getElementPosition(el)
	        } else if (isValidPosition(shouldScroll)) {
	          position = normalizePosition(shouldScroll)
	        }
	      } else if (isObject && isValidPosition(shouldScroll)) {
	        position = normalizePosition(shouldScroll)
	      }

	      if (position) {
	        window.scrollTo(position.x, position.y)
	      }
	    })
	  };

	  return HTML5History;
	}(History));

	function getLocation (base) {
	  var path = window.location.pathname
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length)
	  }
	  return (path || '/') + window.location.search + window.location.hash
	}

	function pushState (url, replace) {
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history
	  try {
	    if (replace) {
	      history.replaceState({ key: _key }, '', url)
	    } else {
	      _key = genKey()
	      history.pushState({ key: _key }, '', url)
	    }
	    saveScrollPosition(_key)
	  } catch (e) {
	    window.location[replace ? 'assign' : 'replace'](url)
	  }
	}

	function replaceState (url) {
	  pushState(url, true)
	}

	/*  */


	var HashHistory = (function (History) {
	  function HashHistory (router, base, fallback) {
	    History.call(this, router, base)
	    // check history fallback deeplinking
	    if (fallback && this.checkFallback()) {
	      return
	    }
	    ensureSlash()
	  }

	  if ( History ) HashHistory.__proto__ = History;
	  HashHistory.prototype = Object.create( History && History.prototype );
	  HashHistory.prototype.constructor = HashHistory;

	  HashHistory.prototype.checkFallback = function checkFallback () {
	    var location = getLocation(this.base)
	    if (!/^\/#/.test(location)) {
	      window.location.replace(
	        cleanPath(this.base + '/#' + location)
	      )
	      return true
	    }
	  };

	  HashHistory.prototype.onHashChange = function onHashChange () {
	    if (!ensureSlash()) {
	      return
	    }
	    this.transitionTo(getHash(), function (route) {
	      replaceHash(route.fullPath)
	    })
	  };

	  HashHistory.prototype.push = function push (location) {
	    this.transitionTo(location, function (route) {
	      pushHash(route.fullPath)
	    })
	  };

	  HashHistory.prototype.replace = function replace (location) {
	    this.transitionTo(location, function (route) {
	      replaceHash(route.fullPath)
	    })
	  };

	  HashHistory.prototype.go = function go (n) {
	    window.history.go(n)
	  };

	  HashHistory.prototype.ensureURL = function ensureURL (push) {
	    var current = this.current.fullPath
	    if (getHash() !== current) {
	      push ? pushHash(current) : replaceHash(current)
	    }
	  };

	  return HashHistory;
	}(History));

	function ensureSlash () {
	  var path = getHash()
	  if (path.charAt(0) === '/') {
	    return true
	  }
	  replaceHash('/' + path)
	  return false
	}

	function getHash () {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href
	  var index = href.indexOf('#')
	  return index === -1 ? '' : href.slice(index + 1)
	}

	function pushHash (path) {
	  window.location.hash = path
	}

	function replaceHash (path) {
	  var i = window.location.href.indexOf('#')
	  window.location.replace(
	    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
	  )
	}

	/*  */


	var AbstractHistory = (function (History) {
	  function AbstractHistory (router) {
	    History.call(this, router)
	    this.stack = []
	    this.index = -1
	  }

	  if ( History ) AbstractHistory.__proto__ = History;
	  AbstractHistory.prototype = Object.create( History && History.prototype );
	  AbstractHistory.prototype.constructor = AbstractHistory;

	  AbstractHistory.prototype.push = function push (location) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route)
	      this$1.index++
	    })
	  };

	  AbstractHistory.prototype.replace = function replace (location) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route)
	    })
	  };

	  AbstractHistory.prototype.go = function go (n) {
	    var this$1 = this;

	    var targetIndex = this.index + n
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return
	    }
	    var route = this.stack[targetIndex]
	    this.confirmTransition(route, function () {
	      this$1.index = targetIndex
	      this$1.updateRoute(route)
	    })
	  };

	  AbstractHistory.prototype.ensureURL = function ensureURL () {
	    // noop
	  };

	  return AbstractHistory;
	}(History));

	/*  */

	var VueRouter = function VueRouter (options) {
	  if ( options === void 0 ) options = {};

	  this.app = null
	  this.options = options
	  this.beforeHooks = []
	  this.afterHooks = []
	  this.match = createMatcher(options.routes || [])

	  var mode = options.mode || 'hash'
	  this.fallback = mode === 'history' && !supportsHistory
	  if (this.fallback) {
	    mode = 'hash'
	  }
	  if (!inBrowser) {
	    mode = 'abstract'
	  }
	  this.mode = mode

	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base)
	      break
	    case 'hash':
	      this.history = new HashHistory(this, options.base, this.fallback)
	      break
	    case 'abstract':
	      this.history = new AbstractHistory(this)
	      break
	    default:
	      process.env.NODE_ENV !== 'production' && assert(false, ("invalid mode: " + mode))
	  }
	};

	var prototypeAccessors = { currentRoute: {} };

	prototypeAccessors.currentRoute.get = function () {
	  return this.history && this.history.current
	};

	VueRouter.prototype.init = function init (app /* Vue component instance */) {
	    var this$1 = this;

	  process.env.NODE_ENV !== 'production' && assert(
	    install.installed,
	    "not installed. Make sure to call `Vue.use(VueRouter)` " +
	    "before creating root instance."
	  )

	  this.app = app

	  var history = this.history

	  if (history instanceof HTML5History) {
	    history.transitionTo(getLocation(history.base))
	  } else if (history instanceof HashHistory) {
	    var setupHashListener = function () {
	      window.addEventListener('hashchange', function () {
	        history.onHashChange()
	      })
	    }
	    history.transitionTo(getHash(), setupHashListener, setupHashListener)
	  }

	  history.listen(function (route) {
	    this$1.app._route = route
	  })
	};

	VueRouter.prototype.beforeEach = function beforeEach (fn) {
	  this.beforeHooks.push(fn)
	};

	VueRouter.prototype.afterEach = function afterEach (fn) {
	  this.afterHooks.push(fn)
	};

	VueRouter.prototype.push = function push (location) {
	  this.history.push(location)
	};

	VueRouter.prototype.replace = function replace (location) {
	  this.history.replace(location)
	};

	VueRouter.prototype.go = function go (n) {
	  this.history.go(n)
	};

	VueRouter.prototype.back = function back () {
	  this.go(-1)
	};

	VueRouter.prototype.forward = function forward () {
	  this.go(1)
	};

	VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
	  var route = to
	    ? this.resolve(to).resolved
	    : this.currentRoute
	  if (!route) {
	    return []
	  }
	  return [].concat.apply([], route.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key]
	    })
	  }))
	};

	VueRouter.prototype.resolve = function resolve (
	  to,
	  current,
	  append
	) {
	  var normalizedTo = normalizeLocation(to, current || this.history.current, append)
	  var resolved = this.match(normalizedTo, current)
	  var fullPath = resolved.redirectedFrom || resolved.fullPath
	  var base = this.history.base
	  var href = createHref(base, fullPath, this.mode)
	  return {
	    normalizedTo: normalizedTo,
	    resolved: resolved,
	    href: href
	  }
	};

	Object.defineProperties( VueRouter.prototype, prototypeAccessors );

	function createHref (base, fullPath, mode) {
	  var path = mode === 'hash' ? '#' + fullPath : fullPath
	  return base ? cleanPath(base + '/' + path) : path
	}

	VueRouter.install = install

	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter)
	}

	module.exports = VueRouter;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(71)))

/***/ },
/* 71 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(73)
	__webpack_require__(81)

	/* script */
	__vue_exports__ = __webpack_require__(83)

	/* template */
	var __vue_template__ = __webpack_require__(87)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\github\\vue\\app\\components\\app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-350f592c"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-350f592c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-350f592c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] app.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(74);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(80)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-350f592c!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-350f592c!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(75)();
	// imports


	// module
	exports.push([module.id, "/*!\n* iView\n* Web: https://www.iviewui.com\n* Github: https://github.com/iview/iview\n* Author: Aresn\n*/\n.ivu-load-loop {\n  animation: ani-load-loop 1s linear infinite;\n}\n@keyframes ani-load-loop {\nfrom {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(180deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n.ivu-breadcrumb {\n  color: #999;\n  font-size: 14px;\n}\n.ivu-breadcrumb a {\n  color: #657180;\n  transition: color 0.2s ease-in-out;\n}\n.ivu-breadcrumb a:hover {\n  color: #5cadff;\n}\n.ivu-breadcrumb > span:last-child {\n  font-weight: bold;\n  color: #657180;\n}\n.ivu-breadcrumb > span:last-child .ivu-breadcrumb-item-separator {\n  display: none;\n}\n.ivu-breadcrumb-item-separator {\n  margin: 0 8px;\n  color: #d7dde4;\n}\n.ivu-breadcrumb-item-link > .ivu-icon + span {\n  margin-left: 4px;\n}\n/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n/* Document\n   ========================================================================== */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  line-height: 1.15;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */\n}\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0;\n}\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block;\n}\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */\n}\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\na:active,\na:hover {\n  outline-width: 0;\n}\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit;\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block;\n}\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none;\n}\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n}\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block;\n}\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block;\n}\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none;\n}\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none;\n}\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n*:before,\n*:after {\n  box-sizing: border-box;\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"\\5FAE\\8F6F\\96C5\\9ED1\", Arial, sans-serif;\n  font-size: 12px;\n  line-height: 1.5;\n  color: #657180;\n  background-color: #fff;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody,\ndiv,\ndl,\ndt,\ndd,\nul,\nol,\nli,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\np,\nblockquote,\nth,\ntd,\nhr,\nbutton,\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  margin: 0;\n  padding: 0;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\nul,\nol {\n  list-style: none;\n}\ninput::-ms-clear,\ninput::-ms-reveal {\n  display: none;\n}\na {\n  color: #3399ff;\n  background: transparent;\n  text-decoration: none;\n  outline: none;\n  cursor: pointer;\n  transition: color 0.2s ease;\n}\na:hover {\n  color: #5cadff;\n}\na:active {\n  color: #3091f2;\n}\na:active,\na:hover {\n  outline: 0;\n  text-decoration: none;\n}\na[disabled] {\n  color: #ccc;\n  cursor: not-allowed;\n  pointer-events: none;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Consolas, Menlo, Courier, monospace;\n}\n/*\nIonicons, v2.0.0\nCreated by Ben Sperry for the Ionic Framework, http://ionicons.com/\nhttps://twitter.com/benjsperry  https://twitter.com/ionicframework\nMIT License: https://github.com/driftyco/ionicons\n*/\n@font-face {\n  font-family: \"Ionicons\";\n  src: url(" + __webpack_require__(76) + ");\n  src: url(" + __webpack_require__(76) + "#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(77) + ") format(\"truetype\"), url(" + __webpack_require__(78) + ") format(\"woff\"), url(" + __webpack_require__(79) + "#Ionicons) format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n.ivu-icon {\n  display: inline-block;\n  font-family: \"Ionicons\";\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  text-rendering: auto;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivu-icon-alert:before {\n  content: \"\\F101\";\n}\n.ivu-icon-alert-circled:before {\n  content: \"\\F100\";\n}\n.ivu-icon-android-add:before {\n  content: \"\\F2C7\";\n}\n.ivu-icon-android-add-circle:before {\n  content: \"\\F359\";\n}\n.ivu-icon-android-alarm-clock:before {\n  content: \"\\F35A\";\n}\n.ivu-icon-android-alert:before {\n  content: \"\\F35B\";\n}\n.ivu-icon-android-apps:before {\n  content: \"\\F35C\";\n}\n.ivu-icon-android-archive:before {\n  content: \"\\F2C9\";\n}\n.ivu-icon-android-arrow-back:before {\n  content: \"\\F2CA\";\n}\n.ivu-icon-android-arrow-down:before {\n  content: \"\\F35D\";\n}\n.ivu-icon-android-arrow-dropdown:before {\n  content: \"\\F35F\";\n}\n.ivu-icon-android-arrow-dropdown-circle:before {\n  content: \"\\F35E\";\n}\n.ivu-icon-android-arrow-dropleft:before {\n  content: \"\\F361\";\n}\n.ivu-icon-android-arrow-dropleft-circle:before {\n  content: \"\\F360\";\n}\n.ivu-icon-android-arrow-dropright:before {\n  content: \"\\F363\";\n}\n.ivu-icon-android-arrow-dropright-circle:before {\n  content: \"\\F362\";\n}\n.ivu-icon-android-arrow-dropup:before {\n  content: \"\\F365\";\n}\n.ivu-icon-android-arrow-dropup-circle:before {\n  content: \"\\F364\";\n}\n.ivu-icon-android-arrow-forward:before {\n  content: \"\\F30F\";\n}\n.ivu-icon-android-arrow-up:before {\n  content: \"\\F366\";\n}\n.ivu-icon-android-attach:before {\n  content: \"\\F367\";\n}\n.ivu-icon-android-bar:before {\n  content: \"\\F368\";\n}\n.ivu-icon-android-bicycle:before {\n  content: \"\\F369\";\n}\n.ivu-icon-android-boat:before {\n  content: \"\\F36A\";\n}\n.ivu-icon-android-bookmark:before {\n  content: \"\\F36B\";\n}\n.ivu-icon-android-bulb:before {\n  content: \"\\F36C\";\n}\n.ivu-icon-android-bus:before {\n  content: \"\\F36D\";\n}\n.ivu-icon-android-calendar:before {\n  content: \"\\F2D1\";\n}\n.ivu-icon-android-call:before {\n  content: \"\\F2D2\";\n}\n.ivu-icon-android-camera:before {\n  content: \"\\F2D3\";\n}\n.ivu-icon-android-cancel:before {\n  content: \"\\F36E\";\n}\n.ivu-icon-android-car:before {\n  content: \"\\F36F\";\n}\n.ivu-icon-android-cart:before {\n  content: \"\\F370\";\n}\n.ivu-icon-android-chat:before {\n  content: \"\\F2D4\";\n}\n.ivu-icon-android-checkbox:before {\n  content: \"\\F374\";\n}\n.ivu-icon-android-checkbox-blank:before {\n  content: \"\\F371\";\n}\n.ivu-icon-android-checkbox-outline:before {\n  content: \"\\F373\";\n}\n.ivu-icon-android-checkbox-outline-blank:before {\n  content: \"\\F372\";\n}\n.ivu-icon-android-checkmark-circle:before {\n  content: \"\\F375\";\n}\n.ivu-icon-android-clipboard:before {\n  content: \"\\F376\";\n}\n.ivu-icon-android-close:before {\n  content: \"\\F2D7\";\n}\n.ivu-icon-android-cloud:before {\n  content: \"\\F37A\";\n}\n.ivu-icon-android-cloud-circle:before {\n  content: \"\\F377\";\n}\n.ivu-icon-android-cloud-done:before {\n  content: \"\\F378\";\n}\n.ivu-icon-android-cloud-outline:before {\n  content: \"\\F379\";\n}\n.ivu-icon-android-color-palette:before {\n  content: \"\\F37B\";\n}\n.ivu-icon-android-compass:before {\n  content: \"\\F37C\";\n}\n.ivu-icon-android-contact:before {\n  content: \"\\F2D8\";\n}\n.ivu-icon-android-contacts:before {\n  content: \"\\F2D9\";\n}\n.ivu-icon-android-contract:before {\n  content: \"\\F37D\";\n}\n.ivu-icon-android-create:before {\n  content: \"\\F37E\";\n}\n.ivu-icon-android-delete:before {\n  content: \"\\F37F\";\n}\n.ivu-icon-android-desktop:before {\n  content: \"\\F380\";\n}\n.ivu-icon-android-document:before {\n  content: \"\\F381\";\n}\n.ivu-icon-android-done:before {\n  content: \"\\F383\";\n}\n.ivu-icon-android-done-all:before {\n  content: \"\\F382\";\n}\n.ivu-icon-android-download:before {\n  content: \"\\F2DD\";\n}\n.ivu-icon-android-drafts:before {\n  content: \"\\F384\";\n}\n.ivu-icon-android-exit:before {\n  content: \"\\F385\";\n}\n.ivu-icon-android-expand:before {\n  content: \"\\F386\";\n}\n.ivu-icon-android-favorite:before {\n  content: \"\\F388\";\n}\n.ivu-icon-android-favorite-outline:before {\n  content: \"\\F387\";\n}\n.ivu-icon-android-film:before {\n  content: \"\\F389\";\n}\n.ivu-icon-android-folder:before {\n  content: \"\\F2E0\";\n}\n.ivu-icon-android-folder-open:before {\n  content: \"\\F38A\";\n}\n.ivu-icon-android-funnel:before {\n  content: \"\\F38B\";\n}\n.ivu-icon-android-globe:before {\n  content: \"\\F38C\";\n}\n.ivu-icon-android-hand:before {\n  content: \"\\F2E3\";\n}\n.ivu-icon-android-hangout:before {\n  content: \"\\F38D\";\n}\n.ivu-icon-android-happy:before {\n  content: \"\\F38E\";\n}\n.ivu-icon-android-home:before {\n  content: \"\\F38F\";\n}\n.ivu-icon-android-image:before {\n  content: \"\\F2E4\";\n}\n.ivu-icon-android-laptop:before {\n  content: \"\\F390\";\n}\n.ivu-icon-android-list:before {\n  content: \"\\F391\";\n}\n.ivu-icon-android-locate:before {\n  content: \"\\F2E9\";\n}\n.ivu-icon-android-lock:before {\n  content: \"\\F392\";\n}\n.ivu-icon-android-mail:before {\n  content: \"\\F2EB\";\n}\n.ivu-icon-android-map:before {\n  content: \"\\F393\";\n}\n.ivu-icon-android-menu:before {\n  content: \"\\F394\";\n}\n.ivu-icon-android-microphone:before {\n  content: \"\\F2EC\";\n}\n.ivu-icon-android-microphone-off:before {\n  content: \"\\F395\";\n}\n.ivu-icon-android-more-horizontal:before {\n  content: \"\\F396\";\n}\n.ivu-icon-android-more-vertical:before {\n  content: \"\\F397\";\n}\n.ivu-icon-android-navigate:before {\n  content: \"\\F398\";\n}\n.ivu-icon-android-notifications:before {\n  content: \"\\F39B\";\n}\n.ivu-icon-android-notifications-none:before {\n  content: \"\\F399\";\n}\n.ivu-icon-android-notifications-off:before {\n  content: \"\\F39A\";\n}\n.ivu-icon-android-open:before {\n  content: \"\\F39C\";\n}\n.ivu-icon-android-options:before {\n  content: \"\\F39D\";\n}\n.ivu-icon-android-people:before {\n  content: \"\\F39E\";\n}\n.ivu-icon-android-person:before {\n  content: \"\\F3A0\";\n}\n.ivu-icon-android-person-add:before {\n  content: \"\\F39F\";\n}\n.ivu-icon-android-phone-landscape:before {\n  content: \"\\F3A1\";\n}\n.ivu-icon-android-phone-portrait:before {\n  content: \"\\F3A2\";\n}\n.ivu-icon-android-pin:before {\n  content: \"\\F3A3\";\n}\n.ivu-icon-android-plane:before {\n  content: \"\\F3A4\";\n}\n.ivu-icon-android-playstore:before {\n  content: \"\\F2F0\";\n}\n.ivu-icon-android-print:before {\n  content: \"\\F3A5\";\n}\n.ivu-icon-android-radio-button-off:before {\n  content: \"\\F3A6\";\n}\n.ivu-icon-android-radio-button-on:before {\n  content: \"\\F3A7\";\n}\n.ivu-icon-android-refresh:before {\n  content: \"\\F3A8\";\n}\n.ivu-icon-android-remove:before {\n  content: \"\\F2F4\";\n}\n.ivu-icon-android-remove-circle:before {\n  content: \"\\F3A9\";\n}\n.ivu-icon-android-restaurant:before {\n  content: \"\\F3AA\";\n}\n.ivu-icon-android-sad:before {\n  content: \"\\F3AB\";\n}\n.ivu-icon-android-search:before {\n  content: \"\\F2F5\";\n}\n.ivu-icon-android-send:before {\n  content: \"\\F2F6\";\n}\n.ivu-icon-android-settings:before {\n  content: \"\\F2F7\";\n}\n.ivu-icon-android-share:before {\n  content: \"\\F2F8\";\n}\n.ivu-icon-android-share-alt:before {\n  content: \"\\F3AC\";\n}\n.ivu-icon-android-star:before {\n  content: \"\\F2FC\";\n}\n.ivu-icon-android-star-half:before {\n  content: \"\\F3AD\";\n}\n.ivu-icon-android-star-outline:before {\n  content: \"\\F3AE\";\n}\n.ivu-icon-android-stopwatch:before {\n  content: \"\\F2FD\";\n}\n.ivu-icon-android-subway:before {\n  content: \"\\F3AF\";\n}\n.ivu-icon-android-sunny:before {\n  content: \"\\F3B0\";\n}\n.ivu-icon-android-sync:before {\n  content: \"\\F3B1\";\n}\n.ivu-icon-android-textsms:before {\n  content: \"\\F3B2\";\n}\n.ivu-icon-android-time:before {\n  content: \"\\F3B3\";\n}\n.ivu-icon-android-train:before {\n  content: \"\\F3B4\";\n}\n.ivu-icon-android-unlock:before {\n  content: \"\\F3B5\";\n}\n.ivu-icon-android-upload:before {\n  content: \"\\F3B6\";\n}\n.ivu-icon-android-volume-down:before {\n  content: \"\\F3B7\";\n}\n.ivu-icon-android-volume-mute:before {\n  content: \"\\F3B8\";\n}\n.ivu-icon-android-volume-off:before {\n  content: \"\\F3B9\";\n}\n.ivu-icon-android-volume-up:before {\n  content: \"\\F3BA\";\n}\n.ivu-icon-android-walk:before {\n  content: \"\\F3BB\";\n}\n.ivu-icon-android-warning:before {\n  content: \"\\F3BC\";\n}\n.ivu-icon-android-watch:before {\n  content: \"\\F3BD\";\n}\n.ivu-icon-android-wifi:before {\n  content: \"\\F305\";\n}\n.ivu-icon-aperture:before {\n  content: \"\\F313\";\n}\n.ivu-icon-archive:before {\n  content: \"\\F102\";\n}\n.ivu-icon-arrow-down-a:before {\n  content: \"\\F103\";\n}\n.ivu-icon-arrow-down-b:before {\n  content: \"\\F104\";\n}\n.ivu-icon-arrow-down-c:before {\n  content: \"\\F105\";\n}\n.ivu-icon-arrow-expand:before {\n  content: \"\\F25E\";\n}\n.ivu-icon-arrow-graph-down-left:before {\n  content: \"\\F25F\";\n}\n.ivu-icon-arrow-graph-down-right:before {\n  content: \"\\F260\";\n}\n.ivu-icon-arrow-graph-up-left:before {\n  content: \"\\F261\";\n}\n.ivu-icon-arrow-graph-up-right:before {\n  content: \"\\F262\";\n}\n.ivu-icon-arrow-left-a:before {\n  content: \"\\F106\";\n}\n.ivu-icon-arrow-left-b:before {\n  content: \"\\F107\";\n}\n.ivu-icon-arrow-left-c:before {\n  content: \"\\F108\";\n}\n.ivu-icon-arrow-move:before {\n  content: \"\\F263\";\n}\n.ivu-icon-arrow-resize:before {\n  content: \"\\F264\";\n}\n.ivu-icon-arrow-return-left:before {\n  content: \"\\F265\";\n}\n.ivu-icon-arrow-return-right:before {\n  content: \"\\F266\";\n}\n.ivu-icon-arrow-right-a:before {\n  content: \"\\F109\";\n}\n.ivu-icon-arrow-right-b:before {\n  content: \"\\F10A\";\n}\n.ivu-icon-arrow-right-c:before {\n  content: \"\\F10B\";\n}\n.ivu-icon-arrow-shrink:before {\n  content: \"\\F267\";\n}\n.ivu-icon-arrow-swap:before {\n  content: \"\\F268\";\n}\n.ivu-icon-arrow-up-a:before {\n  content: \"\\F10C\";\n}\n.ivu-icon-arrow-up-b:before {\n  content: \"\\F10D\";\n}\n.ivu-icon-arrow-up-c:before {\n  content: \"\\F10E\";\n}\n.ivu-icon-asterisk:before {\n  content: \"\\F314\";\n}\n.ivu-icon-at:before {\n  content: \"\\F10F\";\n}\n.ivu-icon-backspace:before {\n  content: \"\\F3BF\";\n}\n.ivu-icon-backspace-outline:before {\n  content: \"\\F3BE\";\n}\n.ivu-icon-bag:before {\n  content: \"\\F110\";\n}\n.ivu-icon-battery-charging:before {\n  content: \"\\F111\";\n}\n.ivu-icon-battery-empty:before {\n  content: \"\\F112\";\n}\n.ivu-icon-battery-full:before {\n  content: \"\\F113\";\n}\n.ivu-icon-battery-half:before {\n  content: \"\\F114\";\n}\n.ivu-icon-battery-low:before {\n  content: \"\\F115\";\n}\n.ivu-icon-beaker:before {\n  content: \"\\F269\";\n}\n.ivu-icon-beer:before {\n  content: \"\\F26A\";\n}\n.ivu-icon-bluetooth:before {\n  content: \"\\F116\";\n}\n.ivu-icon-bonfire:before {\n  content: \"\\F315\";\n}\n.ivu-icon-bookmark:before {\n  content: \"\\F26B\";\n}\n.ivu-icon-bowtie:before {\n  content: \"\\F3C0\";\n}\n.ivu-icon-briefcase:before {\n  content: \"\\F26C\";\n}\n.ivu-icon-bug:before {\n  content: \"\\F2BE\";\n}\n.ivu-icon-calculator:before {\n  content: \"\\F26D\";\n}\n.ivu-icon-calendar:before {\n  content: \"\\F117\";\n}\n.ivu-icon-camera:before {\n  content: \"\\F118\";\n}\n.ivu-icon-card:before {\n  content: \"\\F119\";\n}\n.ivu-icon-cash:before {\n  content: \"\\F316\";\n}\n.ivu-icon-chatbox:before {\n  content: \"\\F11B\";\n}\n.ivu-icon-chatbox-working:before {\n  content: \"\\F11A\";\n}\n.ivu-icon-chatboxes:before {\n  content: \"\\F11C\";\n}\n.ivu-icon-chatbubble:before {\n  content: \"\\F11E\";\n}\n.ivu-icon-chatbubble-working:before {\n  content: \"\\F11D\";\n}\n.ivu-icon-chatbubbles:before {\n  content: \"\\F11F\";\n}\n.ivu-icon-checkmark:before {\n  content: \"\\F122\";\n}\n.ivu-icon-checkmark-circled:before {\n  content: \"\\F120\";\n}\n.ivu-icon-checkmark-round:before {\n  content: \"\\F121\";\n}\n.ivu-icon-chevron-down:before {\n  content: \"\\F123\";\n}\n.ivu-icon-chevron-left:before {\n  content: \"\\F124\";\n}\n.ivu-icon-chevron-right:before {\n  content: \"\\F125\";\n}\n.ivu-icon-chevron-up:before {\n  content: \"\\F126\";\n}\n.ivu-icon-clipboard:before {\n  content: \"\\F127\";\n}\n.ivu-icon-clock:before {\n  content: \"\\F26E\";\n}\n.ivu-icon-close:before {\n  content: \"\\F12A\";\n}\n.ivu-icon-close-circled:before {\n  content: \"\\F128\";\n}\n.ivu-icon-close-round:before {\n  content: \"\\F129\";\n}\n.ivu-icon-closed-captioning:before {\n  content: \"\\F317\";\n}\n.ivu-icon-cloud:before {\n  content: \"\\F12B\";\n}\n.ivu-icon-code:before {\n  content: \"\\F271\";\n}\n.ivu-icon-code-download:before {\n  content: \"\\F26F\";\n}\n.ivu-icon-code-working:before {\n  content: \"\\F270\";\n}\n.ivu-icon-coffee:before {\n  content: \"\\F272\";\n}\n.ivu-icon-compass:before {\n  content: \"\\F273\";\n}\n.ivu-icon-compose:before {\n  content: \"\\F12C\";\n}\n.ivu-icon-connection-bars:before {\n  content: \"\\F274\";\n}\n.ivu-icon-contrast:before {\n  content: \"\\F275\";\n}\n.ivu-icon-crop:before {\n  content: \"\\F3C1\";\n}\n.ivu-icon-cube:before {\n  content: \"\\F318\";\n}\n.ivu-icon-disc:before {\n  content: \"\\F12D\";\n}\n.ivu-icon-document:before {\n  content: \"\\F12F\";\n}\n.ivu-icon-document-text:before {\n  content: \"\\F12E\";\n}\n.ivu-icon-drag:before {\n  content: \"\\F130\";\n}\n.ivu-icon-earth:before {\n  content: \"\\F276\";\n}\n.ivu-icon-easel:before {\n  content: \"\\F3C2\";\n}\n.ivu-icon-edit:before {\n  content: \"\\F2BF\";\n}\n.ivu-icon-egg:before {\n  content: \"\\F277\";\n}\n.ivu-icon-eject:before {\n  content: \"\\F131\";\n}\n.ivu-icon-email:before {\n  content: \"\\F132\";\n}\n.ivu-icon-email-unread:before {\n  content: \"\\F3C3\";\n}\n.ivu-icon-erlenmeyer-flask:before {\n  content: \"\\F3C5\";\n}\n.ivu-icon-erlenmeyer-flask-bubbles:before {\n  content: \"\\F3C4\";\n}\n.ivu-icon-eye:before {\n  content: \"\\F133\";\n}\n.ivu-icon-eye-disabled:before {\n  content: \"\\F306\";\n}\n.ivu-icon-female:before {\n  content: \"\\F278\";\n}\n.ivu-icon-filing:before {\n  content: \"\\F134\";\n}\n.ivu-icon-film-marker:before {\n  content: \"\\F135\";\n}\n.ivu-icon-fireball:before {\n  content: \"\\F319\";\n}\n.ivu-icon-flag:before {\n  content: \"\\F279\";\n}\n.ivu-icon-flame:before {\n  content: \"\\F31A\";\n}\n.ivu-icon-flash:before {\n  content: \"\\F137\";\n}\n.ivu-icon-flash-off:before {\n  content: \"\\F136\";\n}\n.ivu-icon-folder:before {\n  content: \"\\F139\";\n}\n.ivu-icon-fork:before {\n  content: \"\\F27A\";\n}\n.ivu-icon-fork-repo:before {\n  content: \"\\F2C0\";\n}\n.ivu-icon-forward:before {\n  content: \"\\F13A\";\n}\n.ivu-icon-funnel:before {\n  content: \"\\F31B\";\n}\n.ivu-icon-gear-a:before {\n  content: \"\\F13D\";\n}\n.ivu-icon-gear-b:before {\n  content: \"\\F13E\";\n}\n.ivu-icon-grid:before {\n  content: \"\\F13F\";\n}\n.ivu-icon-hammer:before {\n  content: \"\\F27B\";\n}\n.ivu-icon-happy:before {\n  content: \"\\F31C\";\n}\n.ivu-icon-happy-outline:before {\n  content: \"\\F3C6\";\n}\n.ivu-icon-headphone:before {\n  content: \"\\F140\";\n}\n.ivu-icon-heart:before {\n  content: \"\\F141\";\n}\n.ivu-icon-heart-broken:before {\n  content: \"\\F31D\";\n}\n.ivu-icon-help:before {\n  content: \"\\F143\";\n}\n.ivu-icon-help-buoy:before {\n  content: \"\\F27C\";\n}\n.ivu-icon-help-circled:before {\n  content: \"\\F142\";\n}\n.ivu-icon-home:before {\n  content: \"\\F144\";\n}\n.ivu-icon-icecream:before {\n  content: \"\\F27D\";\n}\n.ivu-icon-image:before {\n  content: \"\\F147\";\n}\n.ivu-icon-images:before {\n  content: \"\\F148\";\n}\n.ivu-icon-information:before {\n  content: \"\\F14A\";\n}\n.ivu-icon-information-circled:before {\n  content: \"\\F149\";\n}\n.ivu-icon-ionic:before {\n  content: \"\\F14B\";\n}\n.ivu-icon-ios-alarm:before {\n  content: \"\\F3C8\";\n}\n.ivu-icon-ios-alarm-outline:before {\n  content: \"\\F3C7\";\n}\n.ivu-icon-ios-albums:before {\n  content: \"\\F3CA\";\n}\n.ivu-icon-ios-albums-outline:before {\n  content: \"\\F3C9\";\n}\n.ivu-icon-ios-americanfootball:before {\n  content: \"\\F3CC\";\n}\n.ivu-icon-ios-americanfootball-outline:before {\n  content: \"\\F3CB\";\n}\n.ivu-icon-ios-analytics:before {\n  content: \"\\F3CE\";\n}\n.ivu-icon-ios-analytics-outline:before {\n  content: \"\\F3CD\";\n}\n.ivu-icon-ios-arrow-back:before {\n  content: \"\\F3CF\";\n}\n.ivu-icon-ios-arrow-down:before {\n  content: \"\\F3D0\";\n}\n.ivu-icon-ios-arrow-forward:before {\n  content: \"\\F3D1\";\n}\n.ivu-icon-ios-arrow-left:before {\n  content: \"\\F3D2\";\n}\n.ivu-icon-ios-arrow-right:before {\n  content: \"\\F3D3\";\n}\n.ivu-icon-ios-arrow-thin-down:before {\n  content: \"\\F3D4\";\n}\n.ivu-icon-ios-arrow-thin-left:before {\n  content: \"\\F3D5\";\n}\n.ivu-icon-ios-arrow-thin-right:before {\n  content: \"\\F3D6\";\n}\n.ivu-icon-ios-arrow-thin-up:before {\n  content: \"\\F3D7\";\n}\n.ivu-icon-ios-arrow-up:before {\n  content: \"\\F3D8\";\n}\n.ivu-icon-ios-at:before {\n  content: \"\\F3DA\";\n}\n.ivu-icon-ios-at-outline:before {\n  content: \"\\F3D9\";\n}\n.ivu-icon-ios-barcode:before {\n  content: \"\\F3DC\";\n}\n.ivu-icon-ios-barcode-outline:before {\n  content: \"\\F3DB\";\n}\n.ivu-icon-ios-baseball:before {\n  content: \"\\F3DE\";\n}\n.ivu-icon-ios-baseball-outline:before {\n  content: \"\\F3DD\";\n}\n.ivu-icon-ios-basketball:before {\n  content: \"\\F3E0\";\n}\n.ivu-icon-ios-basketball-outline:before {\n  content: \"\\F3DF\";\n}\n.ivu-icon-ios-bell:before {\n  content: \"\\F3E2\";\n}\n.ivu-icon-ios-bell-outline:before {\n  content: \"\\F3E1\";\n}\n.ivu-icon-ios-body:before {\n  content: \"\\F3E4\";\n}\n.ivu-icon-ios-body-outline:before {\n  content: \"\\F3E3\";\n}\n.ivu-icon-ios-bolt:before {\n  content: \"\\F3E6\";\n}\n.ivu-icon-ios-bolt-outline:before {\n  content: \"\\F3E5\";\n}\n.ivu-icon-ios-book:before {\n  content: \"\\F3E8\";\n}\n.ivu-icon-ios-book-outline:before {\n  content: \"\\F3E7\";\n}\n.ivu-icon-ios-bookmarks:before {\n  content: \"\\F3EA\";\n}\n.ivu-icon-ios-bookmarks-outline:before {\n  content: \"\\F3E9\";\n}\n.ivu-icon-ios-box:before {\n  content: \"\\F3EC\";\n}\n.ivu-icon-ios-box-outline:before {\n  content: \"\\F3EB\";\n}\n.ivu-icon-ios-briefcase:before {\n  content: \"\\F3EE\";\n}\n.ivu-icon-ios-briefcase-outline:before {\n  content: \"\\F3ED\";\n}\n.ivu-icon-ios-browsers:before {\n  content: \"\\F3F0\";\n}\n.ivu-icon-ios-browsers-outline:before {\n  content: \"\\F3EF\";\n}\n.ivu-icon-ios-calculator:before {\n  content: \"\\F3F2\";\n}\n.ivu-icon-ios-calculator-outline:before {\n  content: \"\\F3F1\";\n}\n.ivu-icon-ios-calendar:before {\n  content: \"\\F3F4\";\n}\n.ivu-icon-ios-calendar-outline:before {\n  content: \"\\F3F3\";\n}\n.ivu-icon-ios-camera:before {\n  content: \"\\F3F6\";\n}\n.ivu-icon-ios-camera-outline:before {\n  content: \"\\F3F5\";\n}\n.ivu-icon-ios-cart:before {\n  content: \"\\F3F8\";\n}\n.ivu-icon-ios-cart-outline:before {\n  content: \"\\F3F7\";\n}\n.ivu-icon-ios-chatboxes:before {\n  content: \"\\F3FA\";\n}\n.ivu-icon-ios-chatboxes-outline:before {\n  content: \"\\F3F9\";\n}\n.ivu-icon-ios-chatbubble:before {\n  content: \"\\F3FC\";\n}\n.ivu-icon-ios-chatbubble-outline:before {\n  content: \"\\F3FB\";\n}\n.ivu-icon-ios-checkmark:before {\n  content: \"\\F3FF\";\n}\n.ivu-icon-ios-checkmark-empty:before {\n  content: \"\\F3FD\";\n}\n.ivu-icon-ios-checkmark-outline:before {\n  content: \"\\F3FE\";\n}\n.ivu-icon-ios-circle-filled:before {\n  content: \"\\F400\";\n}\n.ivu-icon-ios-circle-outline:before {\n  content: \"\\F401\";\n}\n.ivu-icon-ios-clock:before {\n  content: \"\\F403\";\n}\n.ivu-icon-ios-clock-outline:before {\n  content: \"\\F402\";\n}\n.ivu-icon-ios-close:before {\n  content: \"\\F406\";\n}\n.ivu-icon-ios-close-empty:before {\n  content: \"\\F404\";\n}\n.ivu-icon-ios-close-outline:before {\n  content: \"\\F405\";\n}\n.ivu-icon-ios-cloud:before {\n  content: \"\\F40C\";\n}\n.ivu-icon-ios-cloud-download:before {\n  content: \"\\F408\";\n}\n.ivu-icon-ios-cloud-download-outline:before {\n  content: \"\\F407\";\n}\n.ivu-icon-ios-cloud-outline:before {\n  content: \"\\F409\";\n}\n.ivu-icon-ios-cloud-upload:before {\n  content: \"\\F40B\";\n}\n.ivu-icon-ios-cloud-upload-outline:before {\n  content: \"\\F40A\";\n}\n.ivu-icon-ios-cloudy:before {\n  content: \"\\F410\";\n}\n.ivu-icon-ios-cloudy-night:before {\n  content: \"\\F40E\";\n}\n.ivu-icon-ios-cloudy-night-outline:before {\n  content: \"\\F40D\";\n}\n.ivu-icon-ios-cloudy-outline:before {\n  content: \"\\F40F\";\n}\n.ivu-icon-ios-cog:before {\n  content: \"\\F412\";\n}\n.ivu-icon-ios-cog-outline:before {\n  content: \"\\F411\";\n}\n.ivu-icon-ios-color-filter:before {\n  content: \"\\F414\";\n}\n.ivu-icon-ios-color-filter-outline:before {\n  content: \"\\F413\";\n}\n.ivu-icon-ios-color-wand:before {\n  content: \"\\F416\";\n}\n.ivu-icon-ios-color-wand-outline:before {\n  content: \"\\F415\";\n}\n.ivu-icon-ios-compose:before {\n  content: \"\\F418\";\n}\n.ivu-icon-ios-compose-outline:before {\n  content: \"\\F417\";\n}\n.ivu-icon-ios-contact:before {\n  content: \"\\F41A\";\n}\n.ivu-icon-ios-contact-outline:before {\n  content: \"\\F419\";\n}\n.ivu-icon-ios-copy:before {\n  content: \"\\F41C\";\n}\n.ivu-icon-ios-copy-outline:before {\n  content: \"\\F41B\";\n}\n.ivu-icon-ios-crop:before {\n  content: \"\\F41E\";\n}\n.ivu-icon-ios-crop-strong:before {\n  content: \"\\F41D\";\n}\n.ivu-icon-ios-download:before {\n  content: \"\\F420\";\n}\n.ivu-icon-ios-download-outline:before {\n  content: \"\\F41F\";\n}\n.ivu-icon-ios-drag:before {\n  content: \"\\F421\";\n}\n.ivu-icon-ios-email:before {\n  content: \"\\F423\";\n}\n.ivu-icon-ios-email-outline:before {\n  content: \"\\F422\";\n}\n.ivu-icon-ios-eye:before {\n  content: \"\\F425\";\n}\n.ivu-icon-ios-eye-outline:before {\n  content: \"\\F424\";\n}\n.ivu-icon-ios-fastforward:before {\n  content: \"\\F427\";\n}\n.ivu-icon-ios-fastforward-outline:before {\n  content: \"\\F426\";\n}\n.ivu-icon-ios-filing:before {\n  content: \"\\F429\";\n}\n.ivu-icon-ios-filing-outline:before {\n  content: \"\\F428\";\n}\n.ivu-icon-ios-film:before {\n  content: \"\\F42B\";\n}\n.ivu-icon-ios-film-outline:before {\n  content: \"\\F42A\";\n}\n.ivu-icon-ios-flag:before {\n  content: \"\\F42D\";\n}\n.ivu-icon-ios-flag-outline:before {\n  content: \"\\F42C\";\n}\n.ivu-icon-ios-flame:before {\n  content: \"\\F42F\";\n}\n.ivu-icon-ios-flame-outline:before {\n  content: \"\\F42E\";\n}\n.ivu-icon-ios-flask:before {\n  content: \"\\F431\";\n}\n.ivu-icon-ios-flask-outline:before {\n  content: \"\\F430\";\n}\n.ivu-icon-ios-flower:before {\n  content: \"\\F433\";\n}\n.ivu-icon-ios-flower-outline:before {\n  content: \"\\F432\";\n}\n.ivu-icon-ios-folder:before {\n  content: \"\\F435\";\n}\n.ivu-icon-ios-folder-outline:before {\n  content: \"\\F434\";\n}\n.ivu-icon-ios-football:before {\n  content: \"\\F437\";\n}\n.ivu-icon-ios-football-outline:before {\n  content: \"\\F436\";\n}\n.ivu-icon-ios-game-controller-a:before {\n  content: \"\\F439\";\n}\n.ivu-icon-ios-game-controller-a-outline:before {\n  content: \"\\F438\";\n}\n.ivu-icon-ios-game-controller-b:before {\n  content: \"\\F43B\";\n}\n.ivu-icon-ios-game-controller-b-outline:before {\n  content: \"\\F43A\";\n}\n.ivu-icon-ios-gear:before {\n  content: \"\\F43D\";\n}\n.ivu-icon-ios-gear-outline:before {\n  content: \"\\F43C\";\n}\n.ivu-icon-ios-glasses:before {\n  content: \"\\F43F\";\n}\n.ivu-icon-ios-glasses-outline:before {\n  content: \"\\F43E\";\n}\n.ivu-icon-ios-grid-view:before {\n  content: \"\\F441\";\n}\n.ivu-icon-ios-grid-view-outline:before {\n  content: \"\\F440\";\n}\n.ivu-icon-ios-heart:before {\n  content: \"\\F443\";\n}\n.ivu-icon-ios-heart-outline:before {\n  content: \"\\F442\";\n}\n.ivu-icon-ios-help:before {\n  content: \"\\F446\";\n}\n.ivu-icon-ios-help-empty:before {\n  content: \"\\F444\";\n}\n.ivu-icon-ios-help-outline:before {\n  content: \"\\F445\";\n}\n.ivu-icon-ios-home:before {\n  content: \"\\F448\";\n}\n.ivu-icon-ios-home-outline:before {\n  content: \"\\F447\";\n}\n.ivu-icon-ios-infinite:before {\n  content: \"\\F44A\";\n}\n.ivu-icon-ios-infinite-outline:before {\n  content: \"\\F449\";\n}\n.ivu-icon-ios-information:before {\n  content: \"\\F44D\";\n}\n.ivu-icon-ios-information-empty:before {\n  content: \"\\F44B\";\n}\n.ivu-icon-ios-information-outline:before {\n  content: \"\\F44C\";\n}\n.ivu-icon-ios-ionic-outline:before {\n  content: \"\\F44E\";\n}\n.ivu-icon-ios-keypad:before {\n  content: \"\\F450\";\n}\n.ivu-icon-ios-keypad-outline:before {\n  content: \"\\F44F\";\n}\n.ivu-icon-ios-lightbulb:before {\n  content: \"\\F452\";\n}\n.ivu-icon-ios-lightbulb-outline:before {\n  content: \"\\F451\";\n}\n.ivu-icon-ios-list:before {\n  content: \"\\F454\";\n}\n.ivu-icon-ios-list-outline:before {\n  content: \"\\F453\";\n}\n.ivu-icon-ios-location:before {\n  content: \"\\F456\";\n}\n.ivu-icon-ios-location-outline:before {\n  content: \"\\F455\";\n}\n.ivu-icon-ios-locked:before {\n  content: \"\\F458\";\n}\n.ivu-icon-ios-locked-outline:before {\n  content: \"\\F457\";\n}\n.ivu-icon-ios-loop:before {\n  content: \"\\F45A\";\n}\n.ivu-icon-ios-loop-strong:before {\n  content: \"\\F459\";\n}\n.ivu-icon-ios-medical:before {\n  content: \"\\F45C\";\n}\n.ivu-icon-ios-medical-outline:before {\n  content: \"\\F45B\";\n}\n.ivu-icon-ios-medkit:before {\n  content: \"\\F45E\";\n}\n.ivu-icon-ios-medkit-outline:before {\n  content: \"\\F45D\";\n}\n.ivu-icon-ios-mic:before {\n  content: \"\\F461\";\n}\n.ivu-icon-ios-mic-off:before {\n  content: \"\\F45F\";\n}\n.ivu-icon-ios-mic-outline:before {\n  content: \"\\F460\";\n}\n.ivu-icon-ios-minus:before {\n  content: \"\\F464\";\n}\n.ivu-icon-ios-minus-empty:before {\n  content: \"\\F462\";\n}\n.ivu-icon-ios-minus-outline:before {\n  content: \"\\F463\";\n}\n.ivu-icon-ios-monitor:before {\n  content: \"\\F466\";\n}\n.ivu-icon-ios-monitor-outline:before {\n  content: \"\\F465\";\n}\n.ivu-icon-ios-moon:before {\n  content: \"\\F468\";\n}\n.ivu-icon-ios-moon-outline:before {\n  content: \"\\F467\";\n}\n.ivu-icon-ios-more:before {\n  content: \"\\F46A\";\n}\n.ivu-icon-ios-more-outline:before {\n  content: \"\\F469\";\n}\n.ivu-icon-ios-musical-note:before {\n  content: \"\\F46B\";\n}\n.ivu-icon-ios-musical-notes:before {\n  content: \"\\F46C\";\n}\n.ivu-icon-ios-navigate:before {\n  content: \"\\F46E\";\n}\n.ivu-icon-ios-navigate-outline:before {\n  content: \"\\F46D\";\n}\n.ivu-icon-ios-nutrition:before {\n  content: \"\\F470\";\n}\n.ivu-icon-ios-nutrition-outline:before {\n  content: \"\\F46F\";\n}\n.ivu-icon-ios-paper:before {\n  content: \"\\F472\";\n}\n.ivu-icon-ios-paper-outline:before {\n  content: \"\\F471\";\n}\n.ivu-icon-ios-paperplane:before {\n  content: \"\\F474\";\n}\n.ivu-icon-ios-paperplane-outline:before {\n  content: \"\\F473\";\n}\n.ivu-icon-ios-partlysunny:before {\n  content: \"\\F476\";\n}\n.ivu-icon-ios-partlysunny-outline:before {\n  content: \"\\F475\";\n}\n.ivu-icon-ios-pause:before {\n  content: \"\\F478\";\n}\n.ivu-icon-ios-pause-outline:before {\n  content: \"\\F477\";\n}\n.ivu-icon-ios-paw:before {\n  content: \"\\F47A\";\n}\n.ivu-icon-ios-paw-outline:before {\n  content: \"\\F479\";\n}\n.ivu-icon-ios-people:before {\n  content: \"\\F47C\";\n}\n.ivu-icon-ios-people-outline:before {\n  content: \"\\F47B\";\n}\n.ivu-icon-ios-person:before {\n  content: \"\\F47E\";\n}\n.ivu-icon-ios-person-outline:before {\n  content: \"\\F47D\";\n}\n.ivu-icon-ios-personadd:before {\n  content: \"\\F480\";\n}\n.ivu-icon-ios-personadd-outline:before {\n  content: \"\\F47F\";\n}\n.ivu-icon-ios-photos:before {\n  content: \"\\F482\";\n}\n.ivu-icon-ios-photos-outline:before {\n  content: \"\\F481\";\n}\n.ivu-icon-ios-pie:before {\n  content: \"\\F484\";\n}\n.ivu-icon-ios-pie-outline:before {\n  content: \"\\F483\";\n}\n.ivu-icon-ios-pint:before {\n  content: \"\\F486\";\n}\n.ivu-icon-ios-pint-outline:before {\n  content: \"\\F485\";\n}\n.ivu-icon-ios-play:before {\n  content: \"\\F488\";\n}\n.ivu-icon-ios-play-outline:before {\n  content: \"\\F487\";\n}\n.ivu-icon-ios-plus:before {\n  content: \"\\F48B\";\n}\n.ivu-icon-ios-plus-empty:before {\n  content: \"\\F489\";\n}\n.ivu-icon-ios-plus-outline:before {\n  content: \"\\F48A\";\n}\n.ivu-icon-ios-pricetag:before {\n  content: \"\\F48D\";\n}\n.ivu-icon-ios-pricetag-outline:before {\n  content: \"\\F48C\";\n}\n.ivu-icon-ios-pricetags:before {\n  content: \"\\F48F\";\n}\n.ivu-icon-ios-pricetags-outline:before {\n  content: \"\\F48E\";\n}\n.ivu-icon-ios-printer:before {\n  content: \"\\F491\";\n}\n.ivu-icon-ios-printer-outline:before {\n  content: \"\\F490\";\n}\n.ivu-icon-ios-pulse:before {\n  content: \"\\F493\";\n}\n.ivu-icon-ios-pulse-strong:before {\n  content: \"\\F492\";\n}\n.ivu-icon-ios-rainy:before {\n  content: \"\\F495\";\n}\n.ivu-icon-ios-rainy-outline:before {\n  content: \"\\F494\";\n}\n.ivu-icon-ios-recording:before {\n  content: \"\\F497\";\n}\n.ivu-icon-ios-recording-outline:before {\n  content: \"\\F496\";\n}\n.ivu-icon-ios-redo:before {\n  content: \"\\F499\";\n}\n.ivu-icon-ios-redo-outline:before {\n  content: \"\\F498\";\n}\n.ivu-icon-ios-refresh:before {\n  content: \"\\F49C\";\n}\n.ivu-icon-ios-refresh-empty:before {\n  content: \"\\F49A\";\n}\n.ivu-icon-ios-refresh-outline:before {\n  content: \"\\F49B\";\n}\n.ivu-icon-ios-reload:before {\n  content: \"\\F49D\";\n}\n.ivu-icon-ios-reverse-camera:before {\n  content: \"\\F49F\";\n}\n.ivu-icon-ios-reverse-camera-outline:before {\n  content: \"\\F49E\";\n}\n.ivu-icon-ios-rewind:before {\n  content: \"\\F4A1\";\n}\n.ivu-icon-ios-rewind-outline:before {\n  content: \"\\F4A0\";\n}\n.ivu-icon-ios-rose:before {\n  content: \"\\F4A3\";\n}\n.ivu-icon-ios-rose-outline:before {\n  content: \"\\F4A2\";\n}\n.ivu-icon-ios-search:before {\n  content: \"\\F4A5\";\n}\n.ivu-icon-ios-search-strong:before {\n  content: \"\\F4A4\";\n}\n.ivu-icon-ios-settings:before {\n  content: \"\\F4A7\";\n}\n.ivu-icon-ios-settings-strong:before {\n  content: \"\\F4A6\";\n}\n.ivu-icon-ios-shuffle:before {\n  content: \"\\F4A9\";\n}\n.ivu-icon-ios-shuffle-strong:before {\n  content: \"\\F4A8\";\n}\n.ivu-icon-ios-skipbackward:before {\n  content: \"\\F4AB\";\n}\n.ivu-icon-ios-skipbackward-outline:before {\n  content: \"\\F4AA\";\n}\n.ivu-icon-ios-skipforward:before {\n  content: \"\\F4AD\";\n}\n.ivu-icon-ios-skipforward-outline:before {\n  content: \"\\F4AC\";\n}\n.ivu-icon-ios-snowy:before {\n  content: \"\\F4AE\";\n}\n.ivu-icon-ios-speedometer:before {\n  content: \"\\F4B0\";\n}\n.ivu-icon-ios-speedometer-outline:before {\n  content: \"\\F4AF\";\n}\n.ivu-icon-ios-star:before {\n  content: \"\\F4B3\";\n}\n.ivu-icon-ios-star-half:before {\n  content: \"\\F4B1\";\n}\n.ivu-icon-ios-star-outline:before {\n  content: \"\\F4B2\";\n}\n.ivu-icon-ios-stopwatch:before {\n  content: \"\\F4B5\";\n}\n.ivu-icon-ios-stopwatch-outline:before {\n  content: \"\\F4B4\";\n}\n.ivu-icon-ios-sunny:before {\n  content: \"\\F4B7\";\n}\n.ivu-icon-ios-sunny-outline:before {\n  content: \"\\F4B6\";\n}\n.ivu-icon-ios-telephone:before {\n  content: \"\\F4B9\";\n}\n.ivu-icon-ios-telephone-outline:before {\n  content: \"\\F4B8\";\n}\n.ivu-icon-ios-tennisball:before {\n  content: \"\\F4BB\";\n}\n.ivu-icon-ios-tennisball-outline:before {\n  content: \"\\F4BA\";\n}\n.ivu-icon-ios-thunderstorm:before {\n  content: \"\\F4BD\";\n}\n.ivu-icon-ios-thunderstorm-outline:before {\n  content: \"\\F4BC\";\n}\n.ivu-icon-ios-time:before {\n  content: \"\\F4BF\";\n}\n.ivu-icon-ios-time-outline:before {\n  content: \"\\F4BE\";\n}\n.ivu-icon-ios-timer:before {\n  content: \"\\F4C1\";\n}\n.ivu-icon-ios-timer-outline:before {\n  content: \"\\F4C0\";\n}\n.ivu-icon-ios-toggle:before {\n  content: \"\\F4C3\";\n}\n.ivu-icon-ios-toggle-outline:before {\n  content: \"\\F4C2\";\n}\n.ivu-icon-ios-trash:before {\n  content: \"\\F4C5\";\n}\n.ivu-icon-ios-trash-outline:before {\n  content: \"\\F4C4\";\n}\n.ivu-icon-ios-undo:before {\n  content: \"\\F4C7\";\n}\n.ivu-icon-ios-undo-outline:before {\n  content: \"\\F4C6\";\n}\n.ivu-icon-ios-unlocked:before {\n  content: \"\\F4C9\";\n}\n.ivu-icon-ios-unlocked-outline:before {\n  content: \"\\F4C8\";\n}\n.ivu-icon-ios-upload:before {\n  content: \"\\F4CB\";\n}\n.ivu-icon-ios-upload-outline:before {\n  content: \"\\F4CA\";\n}\n.ivu-icon-ios-videocam:before {\n  content: \"\\F4CD\";\n}\n.ivu-icon-ios-videocam-outline:before {\n  content: \"\\F4CC\";\n}\n.ivu-icon-ios-volume-high:before {\n  content: \"\\F4CE\";\n}\n.ivu-icon-ios-volume-low:before {\n  content: \"\\F4CF\";\n}\n.ivu-icon-ios-wineglass:before {\n  content: \"\\F4D1\";\n}\n.ivu-icon-ios-wineglass-outline:before {\n  content: \"\\F4D0\";\n}\n.ivu-icon-ios-world:before {\n  content: \"\\F4D3\";\n}\n.ivu-icon-ios-world-outline:before {\n  content: \"\\F4D2\";\n}\n.ivu-icon-ipad:before {\n  content: \"\\F1F9\";\n}\n.ivu-icon-iphone:before {\n  content: \"\\F1FA\";\n}\n.ivu-icon-ipod:before {\n  content: \"\\F1FB\";\n}\n.ivu-icon-jet:before {\n  content: \"\\F295\";\n}\n.ivu-icon-key:before {\n  content: \"\\F296\";\n}\n.ivu-icon-knife:before {\n  content: \"\\F297\";\n}\n.ivu-icon-laptop:before {\n  content: \"\\F1FC\";\n}\n.ivu-icon-leaf:before {\n  content: \"\\F1FD\";\n}\n.ivu-icon-levels:before {\n  content: \"\\F298\";\n}\n.ivu-icon-lightbulb:before {\n  content: \"\\F299\";\n}\n.ivu-icon-link:before {\n  content: \"\\F1FE\";\n}\n.ivu-icon-load-a:before {\n  content: \"\\F29A\";\n}\n.ivu-icon-load-b:before {\n  content: \"\\F29B\";\n}\n.ivu-icon-load-c:before {\n  content: \"\\F29C\";\n}\n.ivu-icon-load-d:before {\n  content: \"\\F29D\";\n}\n.ivu-icon-location:before {\n  content: \"\\F1FF\";\n}\n.ivu-icon-lock-combination:before {\n  content: \"\\F4D4\";\n}\n.ivu-icon-locked:before {\n  content: \"\\F200\";\n}\n.ivu-icon-log-in:before {\n  content: \"\\F29E\";\n}\n.ivu-icon-log-out:before {\n  content: \"\\F29F\";\n}\n.ivu-icon-loop:before {\n  content: \"\\F201\";\n}\n.ivu-icon-magnet:before {\n  content: \"\\F2A0\";\n}\n.ivu-icon-male:before {\n  content: \"\\F2A1\";\n}\n.ivu-icon-man:before {\n  content: \"\\F202\";\n}\n.ivu-icon-map:before {\n  content: \"\\F203\";\n}\n.ivu-icon-medkit:before {\n  content: \"\\F2A2\";\n}\n.ivu-icon-merge:before {\n  content: \"\\F33F\";\n}\n.ivu-icon-mic-a:before {\n  content: \"\\F204\";\n}\n.ivu-icon-mic-b:before {\n  content: \"\\F205\";\n}\n.ivu-icon-mic-c:before {\n  content: \"\\F206\";\n}\n.ivu-icon-minus:before {\n  content: \"\\F209\";\n}\n.ivu-icon-minus-circled:before {\n  content: \"\\F207\";\n}\n.ivu-icon-minus-round:before {\n  content: \"\\F208\";\n}\n.ivu-icon-model-s:before {\n  content: \"\\F2C1\";\n}\n.ivu-icon-monitor:before {\n  content: \"\\F20A\";\n}\n.ivu-icon-more:before {\n  content: \"\\F20B\";\n}\n.ivu-icon-mouse:before {\n  content: \"\\F340\";\n}\n.ivu-icon-music-note:before {\n  content: \"\\F20C\";\n}\n.ivu-icon-navicon:before {\n  content: \"\\F20E\";\n}\n.ivu-icon-navicon-round:before {\n  content: \"\\F20D\";\n}\n.ivu-icon-navigate:before {\n  content: \"\\F2A3\";\n}\n.ivu-icon-network:before {\n  content: \"\\F341\";\n}\n.ivu-icon-no-smoking:before {\n  content: \"\\F2C2\";\n}\n.ivu-icon-nuclear:before {\n  content: \"\\F2A4\";\n}\n.ivu-icon-outlet:before {\n  content: \"\\F342\";\n}\n.ivu-icon-paintbrush:before {\n  content: \"\\F4D5\";\n}\n.ivu-icon-paintbucket:before {\n  content: \"\\F4D6\";\n}\n.ivu-icon-paper-airplane:before {\n  content: \"\\F2C3\";\n}\n.ivu-icon-paperclip:before {\n  content: \"\\F20F\";\n}\n.ivu-icon-pause:before {\n  content: \"\\F210\";\n}\n.ivu-icon-person:before {\n  content: \"\\F213\";\n}\n.ivu-icon-person-add:before {\n  content: \"\\F211\";\n}\n.ivu-icon-person-stalker:before {\n  content: \"\\F212\";\n}\n.ivu-icon-pie-graph:before {\n  content: \"\\F2A5\";\n}\n.ivu-icon-pin:before {\n  content: \"\\F2A6\";\n}\n.ivu-icon-pinpoint:before {\n  content: \"\\F2A7\";\n}\n.ivu-icon-pizza:before {\n  content: \"\\F2A8\";\n}\n.ivu-icon-plane:before {\n  content: \"\\F214\";\n}\n.ivu-icon-planet:before {\n  content: \"\\F343\";\n}\n.ivu-icon-play:before {\n  content: \"\\F215\";\n}\n.ivu-icon-playstation:before {\n  content: \"\\F30A\";\n}\n.ivu-icon-plus:before {\n  content: \"\\F218\";\n}\n.ivu-icon-plus-circled:before {\n  content: \"\\F216\";\n}\n.ivu-icon-plus-round:before {\n  content: \"\\F217\";\n}\n.ivu-icon-podium:before {\n  content: \"\\F344\";\n}\n.ivu-icon-pound:before {\n  content: \"\\F219\";\n}\n.ivu-icon-power:before {\n  content: \"\\F2A9\";\n}\n.ivu-icon-pricetag:before {\n  content: \"\\F2AA\";\n}\n.ivu-icon-pricetags:before {\n  content: \"\\F2AB\";\n}\n.ivu-icon-printer:before {\n  content: \"\\F21A\";\n}\n.ivu-icon-pull-request:before {\n  content: \"\\F345\";\n}\n.ivu-icon-qr-scanner:before {\n  content: \"\\F346\";\n}\n.ivu-icon-quote:before {\n  content: \"\\F347\";\n}\n.ivu-icon-radio-waves:before {\n  content: \"\\F2AC\";\n}\n.ivu-icon-record:before {\n  content: \"\\F21B\";\n}\n.ivu-icon-refresh:before {\n  content: \"\\F21C\";\n}\n.ivu-icon-reply:before {\n  content: \"\\F21E\";\n}\n.ivu-icon-reply-all:before {\n  content: \"\\F21D\";\n}\n.ivu-icon-ribbon-a:before {\n  content: \"\\F348\";\n}\n.ivu-icon-ribbon-b:before {\n  content: \"\\F349\";\n}\n.ivu-icon-sad:before {\n  content: \"\\F34A\";\n}\n.ivu-icon-sad-outline:before {\n  content: \"\\F4D7\";\n}\n.ivu-icon-scissors:before {\n  content: \"\\F34B\";\n}\n.ivu-icon-search:before {\n  content: \"\\F21F\";\n}\n.ivu-icon-settings:before {\n  content: \"\\F2AD\";\n}\n.ivu-icon-share:before {\n  content: \"\\F220\";\n}\n.ivu-icon-shuffle:before {\n  content: \"\\F221\";\n}\n.ivu-icon-skip-backward:before {\n  content: \"\\F222\";\n}\n.ivu-icon-skip-forward:before {\n  content: \"\\F223\";\n}\n.ivu-icon-social-android:before {\n  content: \"\\F225\";\n}\n.ivu-icon-social-android-outline:before {\n  content: \"\\F224\";\n}\n.ivu-icon-social-angular:before {\n  content: \"\\F4D9\";\n}\n.ivu-icon-social-angular-outline:before {\n  content: \"\\F4D8\";\n}\n.ivu-icon-social-apple:before {\n  content: \"\\F227\";\n}\n.ivu-icon-social-apple-outline:before {\n  content: \"\\F226\";\n}\n.ivu-icon-social-bitcoin:before {\n  content: \"\\F2AF\";\n}\n.ivu-icon-social-bitcoin-outline:before {\n  content: \"\\F2AE\";\n}\n.ivu-icon-social-buffer:before {\n  content: \"\\F229\";\n}\n.ivu-icon-social-buffer-outline:before {\n  content: \"\\F228\";\n}\n.ivu-icon-social-chrome:before {\n  content: \"\\F4DB\";\n}\n.ivu-icon-social-chrome-outline:before {\n  content: \"\\F4DA\";\n}\n.ivu-icon-social-codepen:before {\n  content: \"\\F4DD\";\n}\n.ivu-icon-social-codepen-outline:before {\n  content: \"\\F4DC\";\n}\n.ivu-icon-social-css3:before {\n  content: \"\\F4DF\";\n}\n.ivu-icon-social-css3-outline:before {\n  content: \"\\F4DE\";\n}\n.ivu-icon-social-designernews:before {\n  content: \"\\F22B\";\n}\n.ivu-icon-social-designernews-outline:before {\n  content: \"\\F22A\";\n}\n.ivu-icon-social-dribbble:before {\n  content: \"\\F22D\";\n}\n.ivu-icon-social-dribbble-outline:before {\n  content: \"\\F22C\";\n}\n.ivu-icon-social-dropbox:before {\n  content: \"\\F22F\";\n}\n.ivu-icon-social-dropbox-outline:before {\n  content: \"\\F22E\";\n}\n.ivu-icon-social-euro:before {\n  content: \"\\F4E1\";\n}\n.ivu-icon-social-euro-outline:before {\n  content: \"\\F4E0\";\n}\n.ivu-icon-social-facebook:before {\n  content: \"\\F231\";\n}\n.ivu-icon-social-facebook-outline:before {\n  content: \"\\F230\";\n}\n.ivu-icon-social-foursquare:before {\n  content: \"\\F34D\";\n}\n.ivu-icon-social-foursquare-outline:before {\n  content: \"\\F34C\";\n}\n.ivu-icon-social-freebsd-devil:before {\n  content: \"\\F2C4\";\n}\n.ivu-icon-social-github:before {\n  content: \"\\F233\";\n}\n.ivu-icon-social-github-outline:before {\n  content: \"\\F232\";\n}\n.ivu-icon-social-google:before {\n  content: \"\\F34F\";\n}\n.ivu-icon-social-google-outline:before {\n  content: \"\\F34E\";\n}\n.ivu-icon-social-googleplus:before {\n  content: \"\\F235\";\n}\n.ivu-icon-social-googleplus-outline:before {\n  content: \"\\F234\";\n}\n.ivu-icon-social-hackernews:before {\n  content: \"\\F237\";\n}\n.ivu-icon-social-hackernews-outline:before {\n  content: \"\\F236\";\n}\n.ivu-icon-social-html5:before {\n  content: \"\\F4E3\";\n}\n.ivu-icon-social-html5-outline:before {\n  content: \"\\F4E2\";\n}\n.ivu-icon-social-instagram:before {\n  content: \"\\F351\";\n}\n.ivu-icon-social-instagram-outline:before {\n  content: \"\\F350\";\n}\n.ivu-icon-social-javascript:before {\n  content: \"\\F4E5\";\n}\n.ivu-icon-social-javascript-outline:before {\n  content: \"\\F4E4\";\n}\n.ivu-icon-social-linkedin:before {\n  content: \"\\F239\";\n}\n.ivu-icon-social-linkedin-outline:before {\n  content: \"\\F238\";\n}\n.ivu-icon-social-markdown:before {\n  content: \"\\F4E6\";\n}\n.ivu-icon-social-nodejs:before {\n  content: \"\\F4E7\";\n}\n.ivu-icon-social-octocat:before {\n  content: \"\\F4E8\";\n}\n.ivu-icon-social-pinterest:before {\n  content: \"\\F2B1\";\n}\n.ivu-icon-social-pinterest-outline:before {\n  content: \"\\F2B0\";\n}\n.ivu-icon-social-python:before {\n  content: \"\\F4E9\";\n}\n.ivu-icon-social-reddit:before {\n  content: \"\\F23B\";\n}\n.ivu-icon-social-reddit-outline:before {\n  content: \"\\F23A\";\n}\n.ivu-icon-social-rss:before {\n  content: \"\\F23D\";\n}\n.ivu-icon-social-rss-outline:before {\n  content: \"\\F23C\";\n}\n.ivu-icon-social-sass:before {\n  content: \"\\F4EA\";\n}\n.ivu-icon-social-skype:before {\n  content: \"\\F23F\";\n}\n.ivu-icon-social-skype-outline:before {\n  content: \"\\F23E\";\n}\n.ivu-icon-social-snapchat:before {\n  content: \"\\F4EC\";\n}\n.ivu-icon-social-snapchat-outline:before {\n  content: \"\\F4EB\";\n}\n.ivu-icon-social-tumblr:before {\n  content: \"\\F241\";\n}\n.ivu-icon-social-tumblr-outline:before {\n  content: \"\\F240\";\n}\n.ivu-icon-social-tux:before {\n  content: \"\\F2C5\";\n}\n.ivu-icon-social-twitch:before {\n  content: \"\\F4EE\";\n}\n.ivu-icon-social-twitch-outline:before {\n  content: \"\\F4ED\";\n}\n.ivu-icon-social-twitter:before {\n  content: \"\\F243\";\n}\n.ivu-icon-social-twitter-outline:before {\n  content: \"\\F242\";\n}\n.ivu-icon-social-usd:before {\n  content: \"\\F353\";\n}\n.ivu-icon-social-usd-outline:before {\n  content: \"\\F352\";\n}\n.ivu-icon-social-vimeo:before {\n  content: \"\\F245\";\n}\n.ivu-icon-social-vimeo-outline:before {\n  content: \"\\F244\";\n}\n.ivu-icon-social-whatsapp:before {\n  content: \"\\F4F0\";\n}\n.ivu-icon-social-whatsapp-outline:before {\n  content: \"\\F4EF\";\n}\n.ivu-icon-social-windows:before {\n  content: \"\\F247\";\n}\n.ivu-icon-social-windows-outline:before {\n  content: \"\\F246\";\n}\n.ivu-icon-social-wordpress:before {\n  content: \"\\F249\";\n}\n.ivu-icon-social-wordpress-outline:before {\n  content: \"\\F248\";\n}\n.ivu-icon-social-yahoo:before {\n  content: \"\\F24B\";\n}\n.ivu-icon-social-yahoo-outline:before {\n  content: \"\\F24A\";\n}\n.ivu-icon-social-yen:before {\n  content: \"\\F4F2\";\n}\n.ivu-icon-social-yen-outline:before {\n  content: \"\\F4F1\";\n}\n.ivu-icon-social-youtube:before {\n  content: \"\\F24D\";\n}\n.ivu-icon-social-youtube-outline:before {\n  content: \"\\F24C\";\n}\n.ivu-icon-soup-can:before {\n  content: \"\\F4F4\";\n}\n.ivu-icon-soup-can-outline:before {\n  content: \"\\F4F3\";\n}\n.ivu-icon-speakerphone:before {\n  content: \"\\F2B2\";\n}\n.ivu-icon-speedometer:before {\n  content: \"\\F2B3\";\n}\n.ivu-icon-spoon:before {\n  content: \"\\F2B4\";\n}\n.ivu-icon-star:before {\n  content: \"\\F24E\";\n}\n.ivu-icon-stats-bars:before {\n  content: \"\\F2B5\";\n}\n.ivu-icon-steam:before {\n  content: \"\\F30B\";\n}\n.ivu-icon-stop:before {\n  content: \"\\F24F\";\n}\n.ivu-icon-thermometer:before {\n  content: \"\\F2B6\";\n}\n.ivu-icon-thumbsdown:before {\n  content: \"\\F250\";\n}\n.ivu-icon-thumbsup:before {\n  content: \"\\F251\";\n}\n.ivu-icon-toggle:before {\n  content: \"\\F355\";\n}\n.ivu-icon-toggle-filled:before {\n  content: \"\\F354\";\n}\n.ivu-icon-transgender:before {\n  content: \"\\F4F5\";\n}\n.ivu-icon-trash-a:before {\n  content: \"\\F252\";\n}\n.ivu-icon-trash-b:before {\n  content: \"\\F253\";\n}\n.ivu-icon-trophy:before {\n  content: \"\\F356\";\n}\n.ivu-icon-tshirt:before {\n  content: \"\\F4F7\";\n}\n.ivu-icon-tshirt-outline:before {\n  content: \"\\F4F6\";\n}\n.ivu-icon-umbrella:before {\n  content: \"\\F2B7\";\n}\n.ivu-icon-university:before {\n  content: \"\\F357\";\n}\n.ivu-icon-unlocked:before {\n  content: \"\\F254\";\n}\n.ivu-icon-upload:before {\n  content: \"\\F255\";\n}\n.ivu-icon-usb:before {\n  content: \"\\F2B8\";\n}\n.ivu-icon-videocamera:before {\n  content: \"\\F256\";\n}\n.ivu-icon-volume-high:before {\n  content: \"\\F257\";\n}\n.ivu-icon-volume-low:before {\n  content: \"\\F258\";\n}\n.ivu-icon-volume-medium:before {\n  content: \"\\F259\";\n}\n.ivu-icon-volume-mute:before {\n  content: \"\\F25A\";\n}\n.ivu-icon-wand:before {\n  content: \"\\F358\";\n}\n.ivu-icon-waterdrop:before {\n  content: \"\\F25B\";\n}\n.ivu-icon-wifi:before {\n  content: \"\\F25C\";\n}\n.ivu-icon-wineglass:before {\n  content: \"\\F2B9\";\n}\n.ivu-icon-woman:before {\n  content: \"\\F25D\";\n}\n.ivu-icon-wrench:before {\n  content: \"\\F2BA\";\n}\n.ivu-icon-xbox:before {\n  content: \"\\F30C\";\n}\n.ivu-row {\n  position: relative;\n  margin-left: 0;\n  margin-right: 0;\n  height: auto;\n  zoom: 1;\n  display: block;\n}\n.ivu-row:before,\n.ivu-row:after {\n  content: \"\";\n  display: table;\n}\n.ivu-row:after {\n  clear: both;\n  visibility: hidden;\n  font-size: 0;\n  height: 0;\n}\n.ivu-row-flex {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.ivu-row-flex:before,\n.ivu-row-flex:after {\n  display: flex;\n}\n.ivu-row-flex-start {\n  justify-content: flex-start;\n}\n.ivu-row-flex-center {\n  justify-content: center;\n}\n.ivu-row-flex-end {\n  justify-content: flex-end;\n}\n.ivu-row-flex-space-between {\n  justify-content: space-between;\n}\n.ivu-row-flex-space-around {\n  justify-content: space-around;\n}\n.ivu-row-flex-top {\n  align-items: flex-start;\n}\n.ivu-row-flex-middle {\n  align-items: center;\n}\n.ivu-row-flex-bottom {\n  align-items: flex-end;\n}\n.ivu-col {\n  position: relative;\n  display: block;\n}\n.ivu-col-span-1, .ivu-col-span-2, .ivu-col-span-3, .ivu-col-span-4, .ivu-col-span-5, .ivu-col-span-6, .ivu-col-span-7, .ivu-col-span-8, .ivu-col-span-9, .ivu-col-span-10, .ivu-col-span-11, .ivu-col-span-12, .ivu-col-span-13, .ivu-col-span-14, .ivu-col-span-15, .ivu-col-span-16, .ivu-col-span-17, .ivu-col-span-18, .ivu-col-span-19, .ivu-col-span-20, .ivu-col-span-21, .ivu-col-span-22, .ivu-col-span-23, .ivu-col-span-24 {\n  float: left;\n  flex: 0 0 auto;\n}\n.ivu-col-span-24 {\n  display: block;\n  width: 100%;\n}\n.ivu-col-push-24 {\n  left: 100%;\n}\n.ivu-col-pull-24 {\n  right: 100%;\n}\n.ivu-col-offset-24 {\n  margin-left: 100%;\n}\n.ivu-col-order-24 {\n  order: 24;\n}\n.ivu-col-span-23 {\n  display: block;\n  width: 95.83333333%;\n}\n.ivu-col-push-23 {\n  left: 95.83333333%;\n}\n.ivu-col-pull-23 {\n  right: 95.83333333%;\n}\n.ivu-col-offset-23 {\n  margin-left: 95.83333333%;\n}\n.ivu-col-order-23 {\n  order: 23;\n}\n.ivu-col-span-22 {\n  display: block;\n  width: 91.66666667%;\n}\n.ivu-col-push-22 {\n  left: 91.66666667%;\n}\n.ivu-col-pull-22 {\n  right: 91.66666667%;\n}\n.ivu-col-offset-22 {\n  margin-left: 91.66666667%;\n}\n.ivu-col-order-22 {\n  order: 22;\n}\n.ivu-col-span-21 {\n  display: block;\n  width: 87.5%;\n}\n.ivu-col-push-21 {\n  left: 87.5%;\n}\n.ivu-col-pull-21 {\n  right: 87.5%;\n}\n.ivu-col-offset-21 {\n  margin-left: 87.5%;\n}\n.ivu-col-order-21 {\n  order: 21;\n}\n.ivu-col-span-20 {\n  display: block;\n  width: 83.33333333%;\n}\n.ivu-col-push-20 {\n  left: 83.33333333%;\n}\n.ivu-col-pull-20 {\n  right: 83.33333333%;\n}\n.ivu-col-offset-20 {\n  margin-left: 83.33333333%;\n}\n.ivu-col-order-20 {\n  order: 20;\n}\n.ivu-col-span-19 {\n  display: block;\n  width: 79.16666667%;\n}\n.ivu-col-push-19 {\n  left: 79.16666667%;\n}\n.ivu-col-pull-19 {\n  right: 79.16666667%;\n}\n.ivu-col-offset-19 {\n  margin-left: 79.16666667%;\n}\n.ivu-col-order-19 {\n  order: 19;\n}\n.ivu-col-span-18 {\n  display: block;\n  width: 75%;\n}\n.ivu-col-push-18 {\n  left: 75%;\n}\n.ivu-col-pull-18 {\n  right: 75%;\n}\n.ivu-col-offset-18 {\n  margin-left: 75%;\n}\n.ivu-col-order-18 {\n  order: 18;\n}\n.ivu-col-span-17 {\n  display: block;\n  width: 70.83333333%;\n}\n.ivu-col-push-17 {\n  left: 70.83333333%;\n}\n.ivu-col-pull-17 {\n  right: 70.83333333%;\n}\n.ivu-col-offset-17 {\n  margin-left: 70.83333333%;\n}\n.ivu-col-order-17 {\n  order: 17;\n}\n.ivu-col-span-16 {\n  display: block;\n  width: 66.66666667%;\n}\n.ivu-col-push-16 {\n  left: 66.66666667%;\n}\n.ivu-col-pull-16 {\n  right: 66.66666667%;\n}\n.ivu-col-offset-16 {\n  margin-left: 66.66666667%;\n}\n.ivu-col-order-16 {\n  order: 16;\n}\n.ivu-col-span-15 {\n  display: block;\n  width: 62.5%;\n}\n.ivu-col-push-15 {\n  left: 62.5%;\n}\n.ivu-col-pull-15 {\n  right: 62.5%;\n}\n.ivu-col-offset-15 {\n  margin-left: 62.5%;\n}\n.ivu-col-order-15 {\n  order: 15;\n}\n.ivu-col-span-14 {\n  display: block;\n  width: 58.33333333%;\n}\n.ivu-col-push-14 {\n  left: 58.33333333%;\n}\n.ivu-col-pull-14 {\n  right: 58.33333333%;\n}\n.ivu-col-offset-14 {\n  margin-left: 58.33333333%;\n}\n.ivu-col-order-14 {\n  order: 14;\n}\n.ivu-col-span-13 {\n  display: block;\n  width: 54.16666667%;\n}\n.ivu-col-push-13 {\n  left: 54.16666667%;\n}\n.ivu-col-pull-13 {\n  right: 54.16666667%;\n}\n.ivu-col-offset-13 {\n  margin-left: 54.16666667%;\n}\n.ivu-col-order-13 {\n  order: 13;\n}\n.ivu-col-span-12 {\n  display: block;\n  width: 50%;\n}\n.ivu-col-push-12 {\n  left: 50%;\n}\n.ivu-col-pull-12 {\n  right: 50%;\n}\n.ivu-col-offset-12 {\n  margin-left: 50%;\n}\n.ivu-col-order-12 {\n  order: 12;\n}\n.ivu-col-span-11 {\n  display: block;\n  width: 45.83333333%;\n}\n.ivu-col-push-11 {\n  left: 45.83333333%;\n}\n.ivu-col-pull-11 {\n  right: 45.83333333%;\n}\n.ivu-col-offset-11 {\n  margin-left: 45.83333333%;\n}\n.ivu-col-order-11 {\n  order: 11;\n}\n.ivu-col-span-10 {\n  display: block;\n  width: 41.66666667%;\n}\n.ivu-col-push-10 {\n  left: 41.66666667%;\n}\n.ivu-col-pull-10 {\n  right: 41.66666667%;\n}\n.ivu-col-offset-10 {\n  margin-left: 41.66666667%;\n}\n.ivu-col-order-10 {\n  order: 10;\n}\n.ivu-col-span-9 {\n  display: block;\n  width: 37.5%;\n}\n.ivu-col-push-9 {\n  left: 37.5%;\n}\n.ivu-col-pull-9 {\n  right: 37.5%;\n}\n.ivu-col-offset-9 {\n  margin-left: 37.5%;\n}\n.ivu-col-order-9 {\n  order: 9;\n}\n.ivu-col-span-8 {\n  display: block;\n  width: 33.33333333%;\n}\n.ivu-col-push-8 {\n  left: 33.33333333%;\n}\n.ivu-col-pull-8 {\n  right: 33.33333333%;\n}\n.ivu-col-offset-8 {\n  margin-left: 33.33333333%;\n}\n.ivu-col-order-8 {\n  order: 8;\n}\n.ivu-col-span-7 {\n  display: block;\n  width: 29.16666667%;\n}\n.ivu-col-push-7 {\n  left: 29.16666667%;\n}\n.ivu-col-pull-7 {\n  right: 29.16666667%;\n}\n.ivu-col-offset-7 {\n  margin-left: 29.16666667%;\n}\n.ivu-col-order-7 {\n  order: 7;\n}\n.ivu-col-span-6 {\n  display: block;\n  width: 25%;\n}\n.ivu-col-push-6 {\n  left: 25%;\n}\n.ivu-col-pull-6 {\n  right: 25%;\n}\n.ivu-col-offset-6 {\n  margin-left: 25%;\n}\n.ivu-col-order-6 {\n  order: 6;\n}\n.ivu-col-span-5 {\n  display: block;\n  width: 20.83333333%;\n}\n.ivu-col-push-5 {\n  left: 20.83333333%;\n}\n.ivu-col-pull-5 {\n  right: 20.83333333%;\n}\n.ivu-col-offset-5 {\n  margin-left: 20.83333333%;\n}\n.ivu-col-order-5 {\n  order: 5;\n}\n.ivu-col-span-4 {\n  display: block;\n  width: 16.66666667%;\n}\n.ivu-col-push-4 {\n  left: 16.66666667%;\n}\n.ivu-col-pull-4 {\n  right: 16.66666667%;\n}\n.ivu-col-offset-4 {\n  margin-left: 16.66666667%;\n}\n.ivu-col-order-4 {\n  order: 4;\n}\n.ivu-col-span-3 {\n  display: block;\n  width: 12.5%;\n}\n.ivu-col-push-3 {\n  left: 12.5%;\n}\n.ivu-col-pull-3 {\n  right: 12.5%;\n}\n.ivu-col-offset-3 {\n  margin-left: 12.5%;\n}\n.ivu-col-order-3 {\n  order: 3;\n}\n.ivu-col-span-2 {\n  display: block;\n  width: 8.33333333%;\n}\n.ivu-col-push-2 {\n  left: 8.33333333%;\n}\n.ivu-col-pull-2 {\n  right: 8.33333333%;\n}\n.ivu-col-offset-2 {\n  margin-left: 8.33333333%;\n}\n.ivu-col-order-2 {\n  order: 2;\n}\n.ivu-col-span-1 {\n  display: block;\n  width: 4.16666667%;\n}\n.ivu-col-push-1 {\n  left: 4.16666667%;\n}\n.ivu-col-pull-1 {\n  right: 4.16666667%;\n}\n.ivu-col-offset-1 {\n  margin-left: 4.16666667%;\n}\n.ivu-col-order-1 {\n  order: 1;\n}\n.ivu-col-0 {\n  display: none;\n}\n.ivu-col-push-0 {\n  left: auto;\n}\n.ivu-col-pull-0 {\n  right: auto;\n}\n.ivu-article h1 {\n  font-size: 26px;\n  font-weight: normal;\n}\n.ivu-article h2 {\n  font-size: 20px;\n  font-weight: normal;\n}\n.ivu-article h3 {\n  font-size: 16px;\n  font-weight: normal;\n}\n.ivu-article h4 {\n  font-size: 14px;\n  font-weight: normal;\n}\n.ivu-article h5 {\n  font-size: 12px;\n  font-weight: normal;\n}\n.ivu-article h6 {\n  font-size: 12px;\n  font-weight: normal;\n}\n.ivu-article blockquote {\n  padding: 5px 5px 3px 10px;\n  line-height: 1.5;\n  border-left: 4px solid #ddd;\n  margin-bottom: 20px;\n  color: #666;\n  font-size: 14px;\n}\n.ivu-article ul:not([class^=\"ivu-\"]) {\n  padding-left: 40px;\n  list-style-type: disc;\n}\n.ivu-article li:not([class^=\"ivu-\"]) {\n  margin-bottom: 5px;\n  font-size: 14px;\n}\n.ivu-article ul ul,\n.ivu-article ol ul {\n  list-style-type: circle;\n}\n.ivu-article p {\n  margin: 5px;\n  font-size: 14px;\n}\n.ivu-article a[target=\"_blank\"]:after {\n  content: \"\\F220\";\n  font-family: Ionicons;\n  color: #aaa;\n  margin-left: 3px;\n}\n.fade-enter,\n.fade-appear {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.fade-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.fade-enter,\n.fade-appear {\n  animation-name: ivuFadeIn;\n  animation-play-state: running;\n}\n.fade-leave {\n  animation-name: ivuFadeOut;\n  animation-play-state: running;\n}\n.fade-enter,\n.fade-appear {\n  opacity: 0;\n  animation-timing-function: linear;\n}\n.fade-leave {\n  animation-timing-function: linear;\n}\n@keyframes ivuFadeIn {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes ivuFadeOut {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n.move-up-enter,\n.move-up-appear {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.move-up-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.move-up-enter,\n.move-up-appear {\n  animation-name: ivuMoveUpIn;\n  animation-play-state: running;\n}\n.move-up-leave {\n  animation-name: ivuMoveUpOut;\n  animation-play-state: running;\n}\n.move-up-enter,\n.move-up-appear {\n  opacity: 0;\n  animation-timing-function: ease-in-out;\n}\n.move-up-leave {\n  animation-timing-function: ease-in-out;\n}\n.move-down-enter,\n.move-down-appear {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.move-down-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.move-down-enter,\n.move-down-appear {\n  animation-name: ivuMoveDownIn;\n  animation-play-state: running;\n}\n.move-down-leave {\n  animation-name: ivuMoveDownOut;\n  animation-play-state: running;\n}\n.move-down-enter,\n.move-down-appear {\n  opacity: 0;\n  animation-timing-function: ease-in-out;\n}\n.move-down-leave {\n  animation-timing-function: ease-in-out;\n}\n.move-left-enter,\n.move-left-appear {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.move-left-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.move-left-enter,\n.move-left-appear {\n  animation-name: ivuMoveLeftIn;\n  animation-play-state: running;\n}\n.move-left-leave {\n  animation-name: ivuMoveLeftOut;\n  animation-play-state: running;\n}\n.move-left-enter,\n.move-left-appear {\n  opacity: 0;\n  animation-timing-function: ease-in-out;\n}\n.move-left-leave {\n  animation-timing-function: ease-in-out;\n}\n.move-right-enter,\n.move-right-appear {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.move-right-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.move-right-enter,\n.move-right-appear {\n  animation-name: ivuMoveRightIn;\n  animation-play-state: running;\n}\n.move-right-leave {\n  animation-name: ivuMoveRightOut;\n  animation-play-state: running;\n}\n.move-right-enter,\n.move-right-appear {\n  opacity: 0;\n  animation-timing-function: ease-in-out;\n}\n.move-right-leave {\n  animation-timing-function: ease-in-out;\n}\n@keyframes ivuMoveDownIn {\n0% {\n    transform-origin: 0 0;\n    transform: translateY(100%);\n    opacity: 0;\n}\n100% {\n    transform-origin: 0 0;\n    transform: translateY(0%);\n    opacity: 1;\n}\n}\n@keyframes ivuMoveDownOut {\n0% {\n    transform-origin: 0 0;\n    transform: translateY(0%);\n    opacity: 1;\n}\n100% {\n    transform-origin: 0 0;\n    transform: translateY(100%);\n    opacity: 0;\n}\n}\n@keyframes ivuMoveLeftIn {\n0% {\n    transform-origin: 0 0;\n    transform: translateX(-100%);\n    opacity: 0;\n}\n100% {\n    transform-origin: 0 0;\n    transform: translateX(0%);\n    opacity: 1;\n}\n}\n@keyframes ivuMoveLeftOut {\n0% {\n    transform-origin: 0 0;\n    transform: translateX(0%);\n    opacity: 1;\n}\n100% {\n    transform-origin: 0 0;\n    transform: translateX(-100%);\n    opacity: 0;\n}\n}\n@keyframes ivuMoveRightIn {\n0% {\n    opacity: 0;\n    transform-origin: 0 0;\n    transform: translateX(100%);\n}\n100% {\n    opacity: 1;\n    transform-origin: 0 0;\n    transform: translateX(0%);\n}\n}\n@keyframes ivuMoveRightOut {\n0% {\n    transform-origin: 0 0;\n    transform: translateX(0%);\n    opacity: 1;\n}\n100% {\n    transform-origin: 0 0;\n    transform: translateX(100%);\n    opacity: 0;\n}\n}\n@keyframes ivuMoveUpIn {\n0% {\n    transform-origin: 0 0;\n    transform: translateY(-100%);\n    opacity: 0;\n}\n100% {\n    transform-origin: 0 0;\n    transform: translateY(0%);\n    opacity: 1;\n}\n}\n@keyframes ivuMoveUpOut {\n0% {\n    transform-origin: 0 0;\n    transform: translateY(0%);\n    opacity: 1;\n}\n100% {\n    transform-origin: 0 0;\n    transform: translateY(-100%);\n    opacity: 0;\n}\n}\n.ease-enter,\n.ease-appear {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.ease-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.ease-enter,\n.ease-appear {\n  animation-name: ivuEaseIn;\n  animation-play-state: running;\n}\n.ease-leave {\n  animation-name: ivuEaseOut;\n  animation-play-state: running;\n}\n.ease-enter,\n.ease-appear {\n  opacity: 0;\n  animation-timing-function: linear;\n  animation-duration: 0.2s;\n}\n.ease-leave {\n  animation-timing-function: linear;\n  animation-duration: 0.2s;\n}\n@keyframes ivuEaseIn {\n0% {\n    opacity: 0;\n    transform: scale(0.9);\n}\n100% {\n    opacity: 1;\n    transform: scale(1);\n}\n}\n@keyframes ivuEaseOut {\n0% {\n    opacity: 1;\n    transform: scale(1);\n}\n100% {\n    opacity: 0;\n    transform: scale(0.9);\n}\n}\n.slide-up-enter,\n.slide-up-appear {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.slide-up-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.slide-up-enter,\n.slide-up-appear {\n  animation-name: ivuSlideUpIn;\n  animation-play-state: running;\n}\n.slide-up-leave {\n  animation-name: ivuSlideUpOut;\n  animation-play-state: running;\n}\n.slide-up-enter,\n.slide-up-appear {\n  opacity: 0;\n  animation-timing-function: ease-in-out;\n}\n.slide-up-leave {\n  animation-timing-function: ease-in-out;\n}\n.slide-down-enter,\n.slide-down-appear {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.slide-down-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.slide-down-enter,\n.slide-down-appear {\n  animation-name: ivuSlideDownIn;\n  animation-play-state: running;\n}\n.slide-down-leave {\n  animation-name: ivuSlideDownOut;\n  animation-play-state: running;\n}\n.slide-down-enter,\n.slide-down-appear {\n  opacity: 0;\n  animation-timing-function: ease-in-out;\n}\n.slide-down-leave {\n  animation-timing-function: ease-in-out;\n}\n.slide-left-enter,\n.slide-left-appear {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.slide-left-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.slide-left-enter,\n.slide-left-appear {\n  animation-name: ivuSlideLeftIn;\n  animation-play-state: running;\n}\n.slide-left-leave {\n  animation-name: ivuSlideLeftOut;\n  animation-play-state: running;\n}\n.slide-left-enter,\n.slide-left-appear {\n  opacity: 0;\n  animation-timing-function: ease-in-out;\n}\n.slide-left-leave {\n  animation-timing-function: ease-in-out;\n}\n.slide-right-enter,\n.slide-right-appear {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.slide-right-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.slide-right-enter,\n.slide-right-appear {\n  animation-name: ivuSlideRightIn;\n  animation-play-state: running;\n}\n.slide-right-leave {\n  animation-name: ivuSlideRightOut;\n  animation-play-state: running;\n}\n.slide-right-enter,\n.slide-right-appear {\n  opacity: 0;\n  animation-timing-function: ease-in-out;\n}\n.slide-right-leave {\n  animation-timing-function: ease-in-out;\n}\n@keyframes ivuSlideUpIn {\n0% {\n    opacity: 0;\n    transform-origin: 0% 0%;\n    transform: scaleY(0.8);\n}\n100% {\n    opacity: 1;\n    transform-origin: 0% 0%;\n    transform: scaleY(1);\n}\n}\n@keyframes ivuSlideUpOut {\n0% {\n    opacity: 1;\n    transform-origin: 0% 0%;\n    transform: scaleY(1);\n}\n100% {\n    opacity: 0;\n    transform-origin: 0% 0%;\n    transform: scaleY(0.8);\n}\n}\n@keyframes ivuSlideDownIn {\n0% {\n    opacity: 0;\n    transform-origin: 100% 100%;\n    transform: scaleY(0.8);\n}\n100% {\n    opacity: 1;\n    transform-origin: 100% 100%;\n    transform: scaleY(1);\n}\n}\n@keyframes ivuSlideDownOut {\n0% {\n    opacity: 1;\n    transform-origin: 100% 100%;\n    transform: scaleY(1);\n}\n100% {\n    opacity: 0;\n    transform-origin: 100% 100%;\n    transform: scaleY(0.8);\n}\n}\n@keyframes ivuSlideLeftIn {\n0% {\n    opacity: 0;\n    transform-origin: 0% 0%;\n    transform: scaleX(0.8);\n}\n100% {\n    opacity: 1;\n    transform-origin: 0% 0%;\n    transform: scaleX(1);\n}\n}\n@keyframes ivuSlideLeftOut {\n0% {\n    opacity: 1;\n    transform-origin: 0% 0%;\n    transform: scaleX(1);\n}\n100% {\n    opacity: 0;\n    transform-origin: 0% 0%;\n    transform: scaleX(0.8);\n}\n}\n@keyframes ivuSlideRightIn {\n0% {\n    opacity: 0;\n    transform-origin: 100% 0%;\n    transform: scaleX(0.8);\n}\n100% {\n    opacity: 1;\n    transform-origin: 100% 0%;\n    transform: scaleX(1);\n}\n}\n@keyframes ivuSlideRightOut {\n0% {\n    opacity: 1;\n    transform-origin: 100% 0%;\n    transform: scaleX(1);\n}\n100% {\n    opacity: 0;\n    transform-origin: 100% 0%;\n    transform: scaleX(0.8);\n}\n}\n.ivu-btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  line-height: 1.5;\n  user-select: none;\n  padding: 6px 15px;\n  font-size: 12px;\n  border-radius: 4px;\n  transform: translate3d(0, 0, 0);\n  transition: color 0.2s linear, background-color 0.2s linear, border 0.2s linear;\n  color: #657180;\n  background-color: #f7f7f7;\n  border-color: #d7dde4;\n}\n.ivu-btn > .ivu-icon {\n  line-height: 1;\n}\n.ivu-btn,\n.ivu-btn:active,\n.ivu-btn:focus {\n  outline: 0;\n}\n.ivu-btn:not([disabled]):hover {\n  text-decoration: none;\n}\n.ivu-btn:not([disabled]):active {\n  outline: 0;\n  transition: none;\n}\n.ivu-btn.disabled,\n.ivu-btn[disabled] {\n  cursor: not-allowed;\n}\n.ivu-btn.disabled > *,\n.ivu-btn[disabled] > * {\n  pointer-events: none;\n}\n.ivu-btn-large {\n  padding: 6px 15px 7px 15px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.ivu-btn-small {\n  padding: 2px 7px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.ivu-btn > a:only-child {\n  color: currentColor;\n}\n.ivu-btn > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn:hover {\n  color: #848d99;\n  background-color: #f9f9f9;\n  border-color: #dfe4e9;\n}\n.ivu-btn:hover > a:only-child {\n  color: currentColor;\n}\n.ivu-btn:hover > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn:active,\n.ivu-btn.active {\n  color: #606b7a;\n  background-color: #ebebeb;\n  border-color: #ebebeb;\n}\n.ivu-btn:active > a:only-child,\n.ivu-btn.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn:active > a:only-child:after,\n.ivu-btn.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn.disabled,\n.ivu-btn[disabled],\nfieldset[disabled] .ivu-btn,\n.ivu-btn.disabled:hover,\n.ivu-btn[disabled]:hover,\nfieldset[disabled] .ivu-btn:hover,\n.ivu-btn.disabled:focus,\n.ivu-btn[disabled]:focus,\nfieldset[disabled] .ivu-btn:focus,\n.ivu-btn.disabled:active,\n.ivu-btn[disabled]:active,\nfieldset[disabled] .ivu-btn:active,\n.ivu-btn.disabled.active,\n.ivu-btn[disabled].active,\nfieldset[disabled] .ivu-btn.active {\n  color: #c3cbd6;\n  background-color: #f7f7f7;\n  border-color: #d7dde4;\n}\n.ivu-btn.disabled > a:only-child,\n.ivu-btn[disabled] > a:only-child,\nfieldset[disabled] .ivu-btn > a:only-child,\n.ivu-btn.disabled:hover > a:only-child,\n.ivu-btn[disabled]:hover > a:only-child,\nfieldset[disabled] .ivu-btn:hover > a:only-child,\n.ivu-btn.disabled:focus > a:only-child,\n.ivu-btn[disabled]:focus > a:only-child,\nfieldset[disabled] .ivu-btn:focus > a:only-child,\n.ivu-btn.disabled:active > a:only-child,\n.ivu-btn[disabled]:active > a:only-child,\nfieldset[disabled] .ivu-btn:active > a:only-child,\n.ivu-btn.disabled.active > a:only-child,\n.ivu-btn[disabled].active > a:only-child,\nfieldset[disabled] .ivu-btn.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn.disabled > a:only-child:after,\n.ivu-btn[disabled] > a:only-child:after,\nfieldset[disabled] .ivu-btn > a:only-child:after,\n.ivu-btn.disabled:hover > a:only-child:after,\n.ivu-btn[disabled]:hover > a:only-child:after,\nfieldset[disabled] .ivu-btn:hover > a:only-child:after,\n.ivu-btn.disabled:focus > a:only-child:after,\n.ivu-btn[disabled]:focus > a:only-child:after,\nfieldset[disabled] .ivu-btn:focus > a:only-child:after,\n.ivu-btn.disabled:active > a:only-child:after,\n.ivu-btn[disabled]:active > a:only-child:after,\nfieldset[disabled] .ivu-btn:active > a:only-child:after,\n.ivu-btn.disabled.active > a:only-child:after,\n.ivu-btn[disabled].active > a:only-child:after,\nfieldset[disabled] .ivu-btn.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn:hover {\n  color: #5cadff;\n  background-color: white;\n  border-color: #5cadff;\n}\n.ivu-btn:hover > a:only-child {\n  color: currentColor;\n}\n.ivu-btn:hover > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn:active,\n.ivu-btn.active {\n  color: #3091f2;\n  background-color: white;\n  border-color: #3091f2;\n}\n.ivu-btn:active > a:only-child,\n.ivu-btn.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn:active > a:only-child:after,\n.ivu-btn.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-long {\n  width: 100%;\n}\n.ivu-btn > .ivu-icon + span,\n.ivu-btn > span + .ivu-icon {\n  margin-left: 4px;\n}\n.ivu-btn-primary {\n  color: #fff;\n  background-color: #3399ff;\n  border-color: #3399ff;\n}\n.ivu-btn-primary > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-primary > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-primary:hover {\n  color: #ffffff;\n  background-color: #5cadff;\n  border-color: #5cadff;\n}\n.ivu-btn-primary:hover > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-primary:hover > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-primary:active,\n.ivu-btn-primary.active {\n  color: #f2f2f2;\n  background-color: #3091f2;\n  border-color: #3091f2;\n}\n.ivu-btn-primary:active > a:only-child,\n.ivu-btn-primary.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-primary:active > a:only-child:after,\n.ivu-btn-primary.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-primary.disabled,\n.ivu-btn-primary[disabled],\nfieldset[disabled] .ivu-btn-primary,\n.ivu-btn-primary.disabled:hover,\n.ivu-btn-primary[disabled]:hover,\nfieldset[disabled] .ivu-btn-primary:hover,\n.ivu-btn-primary.disabled:focus,\n.ivu-btn-primary[disabled]:focus,\nfieldset[disabled] .ivu-btn-primary:focus,\n.ivu-btn-primary.disabled:active,\n.ivu-btn-primary[disabled]:active,\nfieldset[disabled] .ivu-btn-primary:active,\n.ivu-btn-primary.disabled.active,\n.ivu-btn-primary[disabled].active,\nfieldset[disabled] .ivu-btn-primary.active {\n  color: #c3cbd6;\n  background-color: #f7f7f7;\n  border-color: #d7dde4;\n}\n.ivu-btn-primary.disabled > a:only-child,\n.ivu-btn-primary[disabled] > a:only-child,\nfieldset[disabled] .ivu-btn-primary > a:only-child,\n.ivu-btn-primary.disabled:hover > a:only-child,\n.ivu-btn-primary[disabled]:hover > a:only-child,\nfieldset[disabled] .ivu-btn-primary:hover > a:only-child,\n.ivu-btn-primary.disabled:focus > a:only-child,\n.ivu-btn-primary[disabled]:focus > a:only-child,\nfieldset[disabled] .ivu-btn-primary:focus > a:only-child,\n.ivu-btn-primary.disabled:active > a:only-child,\n.ivu-btn-primary[disabled]:active > a:only-child,\nfieldset[disabled] .ivu-btn-primary:active > a:only-child,\n.ivu-btn-primary.disabled.active > a:only-child,\n.ivu-btn-primary[disabled].active > a:only-child,\nfieldset[disabled] .ivu-btn-primary.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-primary.disabled > a:only-child:after,\n.ivu-btn-primary[disabled] > a:only-child:after,\nfieldset[disabled] .ivu-btn-primary > a:only-child:after,\n.ivu-btn-primary.disabled:hover > a:only-child:after,\n.ivu-btn-primary[disabled]:hover > a:only-child:after,\nfieldset[disabled] .ivu-btn-primary:hover > a:only-child:after,\n.ivu-btn-primary.disabled:focus > a:only-child:after,\n.ivu-btn-primary[disabled]:focus > a:only-child:after,\nfieldset[disabled] .ivu-btn-primary:focus > a:only-child:after,\n.ivu-btn-primary.disabled:active > a:only-child:after,\n.ivu-btn-primary[disabled]:active > a:only-child:after,\nfieldset[disabled] .ivu-btn-primary:active > a:only-child:after,\n.ivu-btn-primary.disabled.active > a:only-child:after,\n.ivu-btn-primary[disabled].active > a:only-child:after,\nfieldset[disabled] .ivu-btn-primary.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-primary:hover,\n.ivu-btn-primary:active,\n.ivu-btn-primary.active {\n  color: #fff;\n}\n.ivu-btn-group:not(.ivu-btn-group-vertical) .ivu-btn-primary:not(:first-child):not(:last-child) {\n  border-right-color: #3091f2;\n  border-left-color: #3091f2;\n}\n.ivu-btn-group:not(.ivu-btn-group-vertical) .ivu-btn-primary:first-child:not(:last-child) {\n  border-right-color: #3091f2;\n}\n.ivu-btn-group:not(.ivu-btn-group-vertical) .ivu-btn-primary:first-child:not(:last-child)[disabled] {\n  border-right-color: #d7dde4;\n}\n.ivu-btn-group:not(.ivu-btn-group-vertical) .ivu-btn-primary:last-child:not(:first-child),\n.ivu-btn-group:not(.ivu-btn-group-vertical) .ivu-btn-primary + .ivu-btn {\n  border-left-color: #3091f2;\n}\n.ivu-btn-group:not(.ivu-btn-group-vertical) .ivu-btn-primary:last-child:not(:first-child)[disabled],\n.ivu-btn-group:not(.ivu-btn-group-vertical) .ivu-btn-primary + .ivu-btn[disabled] {\n  border-left-color: #d7dde4;\n}\n.ivu-btn-group-vertical .ivu-btn-primary:not(:first-child):not(:last-child) {\n  border-top-color: #3091f2;\n  border-bottom-color: #3091f2;\n}\n.ivu-btn-group-vertical .ivu-btn-primary:first-child:not(:last-child) {\n  border-bottom-color: #3091f2;\n}\n.ivu-btn-group-vertical .ivu-btn-primary:first-child:not(:last-child)[disabled] {\n  border-top-color: #d7dde4;\n}\n.ivu-btn-group-vertical .ivu-btn-primary:last-child:not(:first-child),\n.ivu-btn-group-vertical .ivu-btn-primary + .ivu-btn {\n  border-top-color: #3091f2;\n}\n.ivu-btn-group-vertical .ivu-btn-primary:last-child:not(:first-child)[disabled],\n.ivu-btn-group-vertical .ivu-btn-primary + .ivu-btn[disabled] {\n  border-bottom-color: #d7dde4;\n}\n.ivu-btn-ghost {\n  color: #657180;\n  background-color: transparent;\n  border-color: #d7dde4;\n}\n.ivu-btn-ghost > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-ghost > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-ghost:hover {\n  color: #848d99;\n  background-color: rgba(255, 255, 255, 0.2);\n  border-color: #dfe4e9;\n}\n.ivu-btn-ghost:hover > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-ghost:hover > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-ghost:active,\n.ivu-btn-ghost.active {\n  color: #606b7a;\n  background-color: rgba(0, 0, 0, 0.05);\n  border-color: rgba(0, 0, 0, 0.05);\n}\n.ivu-btn-ghost:active > a:only-child,\n.ivu-btn-ghost.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-ghost:active > a:only-child:after,\n.ivu-btn-ghost.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-ghost.disabled,\n.ivu-btn-ghost[disabled],\nfieldset[disabled] .ivu-btn-ghost,\n.ivu-btn-ghost.disabled:hover,\n.ivu-btn-ghost[disabled]:hover,\nfieldset[disabled] .ivu-btn-ghost:hover,\n.ivu-btn-ghost.disabled:focus,\n.ivu-btn-ghost[disabled]:focus,\nfieldset[disabled] .ivu-btn-ghost:focus,\n.ivu-btn-ghost.disabled:active,\n.ivu-btn-ghost[disabled]:active,\nfieldset[disabled] .ivu-btn-ghost:active,\n.ivu-btn-ghost.disabled.active,\n.ivu-btn-ghost[disabled].active,\nfieldset[disabled] .ivu-btn-ghost.active {\n  color: #c3cbd6;\n  background-color: #f7f7f7;\n  border-color: #d7dde4;\n}\n.ivu-btn-ghost.disabled > a:only-child,\n.ivu-btn-ghost[disabled] > a:only-child,\nfieldset[disabled] .ivu-btn-ghost > a:only-child,\n.ivu-btn-ghost.disabled:hover > a:only-child,\n.ivu-btn-ghost[disabled]:hover > a:only-child,\nfieldset[disabled] .ivu-btn-ghost:hover > a:only-child,\n.ivu-btn-ghost.disabled:focus > a:only-child,\n.ivu-btn-ghost[disabled]:focus > a:only-child,\nfieldset[disabled] .ivu-btn-ghost:focus > a:only-child,\n.ivu-btn-ghost.disabled:active > a:only-child,\n.ivu-btn-ghost[disabled]:active > a:only-child,\nfieldset[disabled] .ivu-btn-ghost:active > a:only-child,\n.ivu-btn-ghost.disabled.active > a:only-child,\n.ivu-btn-ghost[disabled].active > a:only-child,\nfieldset[disabled] .ivu-btn-ghost.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-ghost.disabled > a:only-child:after,\n.ivu-btn-ghost[disabled] > a:only-child:after,\nfieldset[disabled] .ivu-btn-ghost > a:only-child:after,\n.ivu-btn-ghost.disabled:hover > a:only-child:after,\n.ivu-btn-ghost[disabled]:hover > a:only-child:after,\nfieldset[disabled] .ivu-btn-ghost:hover > a:only-child:after,\n.ivu-btn-ghost.disabled:focus > a:only-child:after,\n.ivu-btn-ghost[disabled]:focus > a:only-child:after,\nfieldset[disabled] .ivu-btn-ghost:focus > a:only-child:after,\n.ivu-btn-ghost.disabled:active > a:only-child:after,\n.ivu-btn-ghost[disabled]:active > a:only-child:after,\nfieldset[disabled] .ivu-btn-ghost:active > a:only-child:after,\n.ivu-btn-ghost.disabled.active > a:only-child:after,\n.ivu-btn-ghost[disabled].active > a:only-child:after,\nfieldset[disabled] .ivu-btn-ghost.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-ghost:hover {\n  color: #5cadff;\n  background-color: transparent;\n  border-color: #5cadff;\n}\n.ivu-btn-ghost:hover > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-ghost:hover > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-ghost:active,\n.ivu-btn-ghost.active {\n  color: #3091f2;\n  background-color: transparent;\n  border-color: #3091f2;\n}\n.ivu-btn-ghost:active > a:only-child,\n.ivu-btn-ghost.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-ghost:active > a:only-child:after,\n.ivu-btn-ghost.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-dashed {\n  color: #657180;\n  background-color: transparent;\n  border-color: #d7dde4;\n  border-style: dashed;\n}\n.ivu-btn-dashed > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-dashed > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-dashed:hover {\n  color: #848d99;\n  background-color: rgba(255, 255, 255, 0.2);\n  border-color: #dfe4e9;\n}\n.ivu-btn-dashed:hover > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-dashed:hover > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-dashed:active,\n.ivu-btn-dashed.active {\n  color: #606b7a;\n  background-color: rgba(0, 0, 0, 0.05);\n  border-color: rgba(0, 0, 0, 0.05);\n}\n.ivu-btn-dashed:active > a:only-child,\n.ivu-btn-dashed.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-dashed:active > a:only-child:after,\n.ivu-btn-dashed.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-dashed.disabled,\n.ivu-btn-dashed[disabled],\nfieldset[disabled] .ivu-btn-dashed,\n.ivu-btn-dashed.disabled:hover,\n.ivu-btn-dashed[disabled]:hover,\nfieldset[disabled] .ivu-btn-dashed:hover,\n.ivu-btn-dashed.disabled:focus,\n.ivu-btn-dashed[disabled]:focus,\nfieldset[disabled] .ivu-btn-dashed:focus,\n.ivu-btn-dashed.disabled:active,\n.ivu-btn-dashed[disabled]:active,\nfieldset[disabled] .ivu-btn-dashed:active,\n.ivu-btn-dashed.disabled.active,\n.ivu-btn-dashed[disabled].active,\nfieldset[disabled] .ivu-btn-dashed.active {\n  color: #c3cbd6;\n  background-color: #f7f7f7;\n  border-color: #d7dde4;\n}\n.ivu-btn-dashed.disabled > a:only-child,\n.ivu-btn-dashed[disabled] > a:only-child,\nfieldset[disabled] .ivu-btn-dashed > a:only-child,\n.ivu-btn-dashed.disabled:hover > a:only-child,\n.ivu-btn-dashed[disabled]:hover > a:only-child,\nfieldset[disabled] .ivu-btn-dashed:hover > a:only-child,\n.ivu-btn-dashed.disabled:focus > a:only-child,\n.ivu-btn-dashed[disabled]:focus > a:only-child,\nfieldset[disabled] .ivu-btn-dashed:focus > a:only-child,\n.ivu-btn-dashed.disabled:active > a:only-child,\n.ivu-btn-dashed[disabled]:active > a:only-child,\nfieldset[disabled] .ivu-btn-dashed:active > a:only-child,\n.ivu-btn-dashed.disabled.active > a:only-child,\n.ivu-btn-dashed[disabled].active > a:only-child,\nfieldset[disabled] .ivu-btn-dashed.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-dashed.disabled > a:only-child:after,\n.ivu-btn-dashed[disabled] > a:only-child:after,\nfieldset[disabled] .ivu-btn-dashed > a:only-child:after,\n.ivu-btn-dashed.disabled:hover > a:only-child:after,\n.ivu-btn-dashed[disabled]:hover > a:only-child:after,\nfieldset[disabled] .ivu-btn-dashed:hover > a:only-child:after,\n.ivu-btn-dashed.disabled:focus > a:only-child:after,\n.ivu-btn-dashed[disabled]:focus > a:only-child:after,\nfieldset[disabled] .ivu-btn-dashed:focus > a:only-child:after,\n.ivu-btn-dashed.disabled:active > a:only-child:after,\n.ivu-btn-dashed[disabled]:active > a:only-child:after,\nfieldset[disabled] .ivu-btn-dashed:active > a:only-child:after,\n.ivu-btn-dashed.disabled.active > a:only-child:after,\n.ivu-btn-dashed[disabled].active > a:only-child:after,\nfieldset[disabled] .ivu-btn-dashed.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-dashed:hover {\n  color: #5cadff;\n  background-color: transparent;\n  border-color: #5cadff;\n}\n.ivu-btn-dashed:hover > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-dashed:hover > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-dashed:active,\n.ivu-btn-dashed.active {\n  color: #3091f2;\n  background-color: transparent;\n  border-color: #3091f2;\n}\n.ivu-btn-dashed:active > a:only-child,\n.ivu-btn-dashed.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-dashed:active > a:only-child:after,\n.ivu-btn-dashed.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-text {\n  color: #657180;\n  background-color: transparent;\n  border-color: transparent;\n}\n.ivu-btn-text > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-text > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-text:hover {\n  color: #848d99;\n  background-color: rgba(255, 255, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.ivu-btn-text:hover > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-text:hover > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-text:active,\n.ivu-btn-text.active {\n  color: #606b7a;\n  background-color: rgba(0, 0, 0, 0.05);\n  border-color: rgba(0, 0, 0, 0.05);\n}\n.ivu-btn-text:active > a:only-child,\n.ivu-btn-text.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-text:active > a:only-child:after,\n.ivu-btn-text.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-text.disabled,\n.ivu-btn-text[disabled],\nfieldset[disabled] .ivu-btn-text,\n.ivu-btn-text.disabled:hover,\n.ivu-btn-text[disabled]:hover,\nfieldset[disabled] .ivu-btn-text:hover,\n.ivu-btn-text.disabled:focus,\n.ivu-btn-text[disabled]:focus,\nfieldset[disabled] .ivu-btn-text:focus,\n.ivu-btn-text.disabled:active,\n.ivu-btn-text[disabled]:active,\nfieldset[disabled] .ivu-btn-text:active,\n.ivu-btn-text.disabled.active,\n.ivu-btn-text[disabled].active,\nfieldset[disabled] .ivu-btn-text.active {\n  color: #c3cbd6;\n  background-color: #f7f7f7;\n  border-color: #d7dde4;\n}\n.ivu-btn-text.disabled > a:only-child,\n.ivu-btn-text[disabled] > a:only-child,\nfieldset[disabled] .ivu-btn-text > a:only-child,\n.ivu-btn-text.disabled:hover > a:only-child,\n.ivu-btn-text[disabled]:hover > a:only-child,\nfieldset[disabled] .ivu-btn-text:hover > a:only-child,\n.ivu-btn-text.disabled:focus > a:only-child,\n.ivu-btn-text[disabled]:focus > a:only-child,\nfieldset[disabled] .ivu-btn-text:focus > a:only-child,\n.ivu-btn-text.disabled:active > a:only-child,\n.ivu-btn-text[disabled]:active > a:only-child,\nfieldset[disabled] .ivu-btn-text:active > a:only-child,\n.ivu-btn-text.disabled.active > a:only-child,\n.ivu-btn-text[disabled].active > a:only-child,\nfieldset[disabled] .ivu-btn-text.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-text.disabled > a:only-child:after,\n.ivu-btn-text[disabled] > a:only-child:after,\nfieldset[disabled] .ivu-btn-text > a:only-child:after,\n.ivu-btn-text.disabled:hover > a:only-child:after,\n.ivu-btn-text[disabled]:hover > a:only-child:after,\nfieldset[disabled] .ivu-btn-text:hover > a:only-child:after,\n.ivu-btn-text.disabled:focus > a:only-child:after,\n.ivu-btn-text[disabled]:focus > a:only-child:after,\nfieldset[disabled] .ivu-btn-text:focus > a:only-child:after,\n.ivu-btn-text.disabled:active > a:only-child:after,\n.ivu-btn-text[disabled]:active > a:only-child:after,\nfieldset[disabled] .ivu-btn-text:active > a:only-child:after,\n.ivu-btn-text.disabled.active > a:only-child:after,\n.ivu-btn-text[disabled].active > a:only-child:after,\nfieldset[disabled] .ivu-btn-text.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-text.disabled,\n.ivu-btn-text[disabled],\nfieldset[disabled] .ivu-btn-text,\n.ivu-btn-text.disabled:hover,\n.ivu-btn-text[disabled]:hover,\nfieldset[disabled] .ivu-btn-text:hover,\n.ivu-btn-text.disabled:focus,\n.ivu-btn-text[disabled]:focus,\nfieldset[disabled] .ivu-btn-text:focus,\n.ivu-btn-text.disabled:active,\n.ivu-btn-text[disabled]:active,\nfieldset[disabled] .ivu-btn-text:active,\n.ivu-btn-text.disabled.active,\n.ivu-btn-text[disabled].active,\nfieldset[disabled] .ivu-btn-text.active {\n  color: #c3cbd6;\n  background-color: transparent;\n  border-color: transparent;\n}\n.ivu-btn-text.disabled > a:only-child,\n.ivu-btn-text[disabled] > a:only-child,\nfieldset[disabled] .ivu-btn-text > a:only-child,\n.ivu-btn-text.disabled:hover > a:only-child,\n.ivu-btn-text[disabled]:hover > a:only-child,\nfieldset[disabled] .ivu-btn-text:hover > a:only-child,\n.ivu-btn-text.disabled:focus > a:only-child,\n.ivu-btn-text[disabled]:focus > a:only-child,\nfieldset[disabled] .ivu-btn-text:focus > a:only-child,\n.ivu-btn-text.disabled:active > a:only-child,\n.ivu-btn-text[disabled]:active > a:only-child,\nfieldset[disabled] .ivu-btn-text:active > a:only-child,\n.ivu-btn-text.disabled.active > a:only-child,\n.ivu-btn-text[disabled].active > a:only-child,\nfieldset[disabled] .ivu-btn-text.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-text.disabled > a:only-child:after,\n.ivu-btn-text[disabled] > a:only-child:after,\nfieldset[disabled] .ivu-btn-text > a:only-child:after,\n.ivu-btn-text.disabled:hover > a:only-child:after,\n.ivu-btn-text[disabled]:hover > a:only-child:after,\nfieldset[disabled] .ivu-btn-text:hover > a:only-child:after,\n.ivu-btn-text.disabled:focus > a:only-child:after,\n.ivu-btn-text[disabled]:focus > a:only-child:after,\nfieldset[disabled] .ivu-btn-text:focus > a:only-child:after,\n.ivu-btn-text.disabled:active > a:only-child:after,\n.ivu-btn-text[disabled]:active > a:only-child:after,\nfieldset[disabled] .ivu-btn-text:active > a:only-child:after,\n.ivu-btn-text.disabled.active > a:only-child:after,\n.ivu-btn-text[disabled].active > a:only-child:after,\nfieldset[disabled] .ivu-btn-text.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-text:hover {\n  color: #5cadff;\n  background-color: transparent;\n  border-color: transparent;\n}\n.ivu-btn-text:hover > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-text:hover > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-text:active,\n.ivu-btn-text.active {\n  color: #3091f2;\n  background-color: transparent;\n  border-color: transparent;\n}\n.ivu-btn-text:active > a:only-child,\n.ivu-btn-text.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-text:active > a:only-child:after,\n.ivu-btn-text.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-success {\n  color: #fff;\n  background-color: #00cc66;\n  border-color: #00cc66;\n}\n.ivu-btn-success > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-success > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-success:hover {\n  color: #ffffff;\n  background-color: #33d685;\n  border-color: #33d685;\n}\n.ivu-btn-success:hover > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-success:hover > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-success:active,\n.ivu-btn-success.active {\n  color: #f2f2f2;\n  background-color: #00c261;\n  border-color: #00c261;\n}\n.ivu-btn-success:active > a:only-child,\n.ivu-btn-success.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-success:active > a:only-child:after,\n.ivu-btn-success.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-success.disabled,\n.ivu-btn-success[disabled],\nfieldset[disabled] .ivu-btn-success,\n.ivu-btn-success.disabled:hover,\n.ivu-btn-success[disabled]:hover,\nfieldset[disabled] .ivu-btn-success:hover,\n.ivu-btn-success.disabled:focus,\n.ivu-btn-success[disabled]:focus,\nfieldset[disabled] .ivu-btn-success:focus,\n.ivu-btn-success.disabled:active,\n.ivu-btn-success[disabled]:active,\nfieldset[disabled] .ivu-btn-success:active,\n.ivu-btn-success.disabled.active,\n.ivu-btn-success[disabled].active,\nfieldset[disabled] .ivu-btn-success.active {\n  color: #c3cbd6;\n  background-color: #f7f7f7;\n  border-color: #d7dde4;\n}\n.ivu-btn-success.disabled > a:only-child,\n.ivu-btn-success[disabled] > a:only-child,\nfieldset[disabled] .ivu-btn-success > a:only-child,\n.ivu-btn-success.disabled:hover > a:only-child,\n.ivu-btn-success[disabled]:hover > a:only-child,\nfieldset[disabled] .ivu-btn-success:hover > a:only-child,\n.ivu-btn-success.disabled:focus > a:only-child,\n.ivu-btn-success[disabled]:focus > a:only-child,\nfieldset[disabled] .ivu-btn-success:focus > a:only-child,\n.ivu-btn-success.disabled:active > a:only-child,\n.ivu-btn-success[disabled]:active > a:only-child,\nfieldset[disabled] .ivu-btn-success:active > a:only-child,\n.ivu-btn-success.disabled.active > a:only-child,\n.ivu-btn-success[disabled].active > a:only-child,\nfieldset[disabled] .ivu-btn-success.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-success.disabled > a:only-child:after,\n.ivu-btn-success[disabled] > a:only-child:after,\nfieldset[disabled] .ivu-btn-success > a:only-child:after,\n.ivu-btn-success.disabled:hover > a:only-child:after,\n.ivu-btn-success[disabled]:hover > a:only-child:after,\nfieldset[disabled] .ivu-btn-success:hover > a:only-child:after,\n.ivu-btn-success.disabled:focus > a:only-child:after,\n.ivu-btn-success[disabled]:focus > a:only-child:after,\nfieldset[disabled] .ivu-btn-success:focus > a:only-child:after,\n.ivu-btn-success.disabled:active > a:only-child:after,\n.ivu-btn-success[disabled]:active > a:only-child:after,\nfieldset[disabled] .ivu-btn-success:active > a:only-child:after,\n.ivu-btn-success.disabled.active > a:only-child:after,\n.ivu-btn-success[disabled].active > a:only-child:after,\nfieldset[disabled] .ivu-btn-success.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-success:hover,\n.ivu-btn-success:active,\n.ivu-btn-success.active {\n  color: #fff;\n}\n.ivu-btn-warning {\n  color: #fff;\n  background-color: #ff9900;\n  border-color: #ff9900;\n}\n.ivu-btn-warning > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-warning > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-warning:hover {\n  color: #ffffff;\n  background-color: #ffad33;\n  border-color: #ffad33;\n}\n.ivu-btn-warning:hover > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-warning:hover > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-warning:active,\n.ivu-btn-warning.active {\n  color: #f2f2f2;\n  background-color: #f29100;\n  border-color: #f29100;\n}\n.ivu-btn-warning:active > a:only-child,\n.ivu-btn-warning.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-warning:active > a:only-child:after,\n.ivu-btn-warning.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-warning.disabled,\n.ivu-btn-warning[disabled],\nfieldset[disabled] .ivu-btn-warning,\n.ivu-btn-warning.disabled:hover,\n.ivu-btn-warning[disabled]:hover,\nfieldset[disabled] .ivu-btn-warning:hover,\n.ivu-btn-warning.disabled:focus,\n.ivu-btn-warning[disabled]:focus,\nfieldset[disabled] .ivu-btn-warning:focus,\n.ivu-btn-warning.disabled:active,\n.ivu-btn-warning[disabled]:active,\nfieldset[disabled] .ivu-btn-warning:active,\n.ivu-btn-warning.disabled.active,\n.ivu-btn-warning[disabled].active,\nfieldset[disabled] .ivu-btn-warning.active {\n  color: #c3cbd6;\n  background-color: #f7f7f7;\n  border-color: #d7dde4;\n}\n.ivu-btn-warning.disabled > a:only-child,\n.ivu-btn-warning[disabled] > a:only-child,\nfieldset[disabled] .ivu-btn-warning > a:only-child,\n.ivu-btn-warning.disabled:hover > a:only-child,\n.ivu-btn-warning[disabled]:hover > a:only-child,\nfieldset[disabled] .ivu-btn-warning:hover > a:only-child,\n.ivu-btn-warning.disabled:focus > a:only-child,\n.ivu-btn-warning[disabled]:focus > a:only-child,\nfieldset[disabled] .ivu-btn-warning:focus > a:only-child,\n.ivu-btn-warning.disabled:active > a:only-child,\n.ivu-btn-warning[disabled]:active > a:only-child,\nfieldset[disabled] .ivu-btn-warning:active > a:only-child,\n.ivu-btn-warning.disabled.active > a:only-child,\n.ivu-btn-warning[disabled].active > a:only-child,\nfieldset[disabled] .ivu-btn-warning.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-warning.disabled > a:only-child:after,\n.ivu-btn-warning[disabled] > a:only-child:after,\nfieldset[disabled] .ivu-btn-warning > a:only-child:after,\n.ivu-btn-warning.disabled:hover > a:only-child:after,\n.ivu-btn-warning[disabled]:hover > a:only-child:after,\nfieldset[disabled] .ivu-btn-warning:hover > a:only-child:after,\n.ivu-btn-warning.disabled:focus > a:only-child:after,\n.ivu-btn-warning[disabled]:focus > a:only-child:after,\nfieldset[disabled] .ivu-btn-warning:focus > a:only-child:after,\n.ivu-btn-warning.disabled:active > a:only-child:after,\n.ivu-btn-warning[disabled]:active > a:only-child:after,\nfieldset[disabled] .ivu-btn-warning:active > a:only-child:after,\n.ivu-btn-warning.disabled.active > a:only-child:after,\n.ivu-btn-warning[disabled].active > a:only-child:after,\nfieldset[disabled] .ivu-btn-warning.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-warning:hover,\n.ivu-btn-warning:active,\n.ivu-btn-warning.active {\n  color: #fff;\n}\n.ivu-btn-error {\n  color: #fff;\n  background-color: #ff5500;\n  border-color: #ff5500;\n}\n.ivu-btn-error > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-error > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-error:hover {\n  color: #ffffff;\n  background-color: #ff7733;\n  border-color: #ff7733;\n}\n.ivu-btn-error:hover > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-error:hover > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-error:active,\n.ivu-btn-error.active {\n  color: #f2f2f2;\n  background-color: #f25100;\n  border-color: #f25100;\n}\n.ivu-btn-error:active > a:only-child,\n.ivu-btn-error.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-error:active > a:only-child:after,\n.ivu-btn-error.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-error.disabled,\n.ivu-btn-error[disabled],\nfieldset[disabled] .ivu-btn-error,\n.ivu-btn-error.disabled:hover,\n.ivu-btn-error[disabled]:hover,\nfieldset[disabled] .ivu-btn-error:hover,\n.ivu-btn-error.disabled:focus,\n.ivu-btn-error[disabled]:focus,\nfieldset[disabled] .ivu-btn-error:focus,\n.ivu-btn-error.disabled:active,\n.ivu-btn-error[disabled]:active,\nfieldset[disabled] .ivu-btn-error:active,\n.ivu-btn-error.disabled.active,\n.ivu-btn-error[disabled].active,\nfieldset[disabled] .ivu-btn-error.active {\n  color: #c3cbd6;\n  background-color: #f7f7f7;\n  border-color: #d7dde4;\n}\n.ivu-btn-error.disabled > a:only-child,\n.ivu-btn-error[disabled] > a:only-child,\nfieldset[disabled] .ivu-btn-error > a:only-child,\n.ivu-btn-error.disabled:hover > a:only-child,\n.ivu-btn-error[disabled]:hover > a:only-child,\nfieldset[disabled] .ivu-btn-error:hover > a:only-child,\n.ivu-btn-error.disabled:focus > a:only-child,\n.ivu-btn-error[disabled]:focus > a:only-child,\nfieldset[disabled] .ivu-btn-error:focus > a:only-child,\n.ivu-btn-error.disabled:active > a:only-child,\n.ivu-btn-error[disabled]:active > a:only-child,\nfieldset[disabled] .ivu-btn-error:active > a:only-child,\n.ivu-btn-error.disabled.active > a:only-child,\n.ivu-btn-error[disabled].active > a:only-child,\nfieldset[disabled] .ivu-btn-error.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-error.disabled > a:only-child:after,\n.ivu-btn-error[disabled] > a:only-child:after,\nfieldset[disabled] .ivu-btn-error > a:only-child:after,\n.ivu-btn-error.disabled:hover > a:only-child:after,\n.ivu-btn-error[disabled]:hover > a:only-child:after,\nfieldset[disabled] .ivu-btn-error:hover > a:only-child:after,\n.ivu-btn-error.disabled:focus > a:only-child:after,\n.ivu-btn-error[disabled]:focus > a:only-child:after,\nfieldset[disabled] .ivu-btn-error:focus > a:only-child:after,\n.ivu-btn-error.disabled:active > a:only-child:after,\n.ivu-btn-error[disabled]:active > a:only-child:after,\nfieldset[disabled] .ivu-btn-error:active > a:only-child:after,\n.ivu-btn-error.disabled.active > a:only-child:after,\n.ivu-btn-error[disabled].active > a:only-child:after,\nfieldset[disabled] .ivu-btn-error.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-error:hover,\n.ivu-btn-error:active,\n.ivu-btn-error.active {\n  color: #fff;\n}\n.ivu-btn-info {\n  color: #fff;\n  background-color: #2db7f5;\n  border-color: #2db7f5;\n}\n.ivu-btn-info > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-info > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-info:hover {\n  color: #ffffff;\n  background-color: #57c5f7;\n  border-color: #57c5f7;\n}\n.ivu-btn-info:hover > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-info:hover > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-info:active,\n.ivu-btn-info.active {\n  color: #f2f2f2;\n  background-color: #2baee9;\n  border-color: #2baee9;\n}\n.ivu-btn-info:active > a:only-child,\n.ivu-btn-info.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-info:active > a:only-child:after,\n.ivu-btn-info.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-info.disabled,\n.ivu-btn-info[disabled],\nfieldset[disabled] .ivu-btn-info,\n.ivu-btn-info.disabled:hover,\n.ivu-btn-info[disabled]:hover,\nfieldset[disabled] .ivu-btn-info:hover,\n.ivu-btn-info.disabled:focus,\n.ivu-btn-info[disabled]:focus,\nfieldset[disabled] .ivu-btn-info:focus,\n.ivu-btn-info.disabled:active,\n.ivu-btn-info[disabled]:active,\nfieldset[disabled] .ivu-btn-info:active,\n.ivu-btn-info.disabled.active,\n.ivu-btn-info[disabled].active,\nfieldset[disabled] .ivu-btn-info.active {\n  color: #c3cbd6;\n  background-color: #f7f7f7;\n  border-color: #d7dde4;\n}\n.ivu-btn-info.disabled > a:only-child,\n.ivu-btn-info[disabled] > a:only-child,\nfieldset[disabled] .ivu-btn-info > a:only-child,\n.ivu-btn-info.disabled:hover > a:only-child,\n.ivu-btn-info[disabled]:hover > a:only-child,\nfieldset[disabled] .ivu-btn-info:hover > a:only-child,\n.ivu-btn-info.disabled:focus > a:only-child,\n.ivu-btn-info[disabled]:focus > a:only-child,\nfieldset[disabled] .ivu-btn-info:focus > a:only-child,\n.ivu-btn-info.disabled:active > a:only-child,\n.ivu-btn-info[disabled]:active > a:only-child,\nfieldset[disabled] .ivu-btn-info:active > a:only-child,\n.ivu-btn-info.disabled.active > a:only-child,\n.ivu-btn-info[disabled].active > a:only-child,\nfieldset[disabled] .ivu-btn-info.active > a:only-child {\n  color: currentColor;\n}\n.ivu-btn-info.disabled > a:only-child:after,\n.ivu-btn-info[disabled] > a:only-child:after,\nfieldset[disabled] .ivu-btn-info > a:only-child:after,\n.ivu-btn-info.disabled:hover > a:only-child:after,\n.ivu-btn-info[disabled]:hover > a:only-child:after,\nfieldset[disabled] .ivu-btn-info:hover > a:only-child:after,\n.ivu-btn-info.disabled:focus > a:only-child:after,\n.ivu-btn-info[disabled]:focus > a:only-child:after,\nfieldset[disabled] .ivu-btn-info:focus > a:only-child:after,\n.ivu-btn-info.disabled:active > a:only-child:after,\n.ivu-btn-info[disabled]:active > a:only-child:after,\nfieldset[disabled] .ivu-btn-info:active > a:only-child:after,\n.ivu-btn-info.disabled.active > a:only-child:after,\n.ivu-btn-info[disabled].active > a:only-child:after,\nfieldset[disabled] .ivu-btn-info.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ivu-btn-info:hover,\n.ivu-btn-info:active,\n.ivu-btn-info.active {\n  color: #fff;\n}\n.ivu-btn-circle,\n.ivu-btn-circle-outline {\n  border-radius: 32px;\n}\n.ivu-btn-circle.ivu-btn-large,\n.ivu-btn-circle-outline.ivu-btn-large {\n  border-radius: 36px;\n}\n.ivu-btn-circle.ivu-btn-size,\n.ivu-btn-circle-outline.ivu-btn-size {\n  border-radius: 24px;\n}\n.ivu-btn-circle.ivu-btn-icon-only,\n.ivu-btn-circle-outline.ivu-btn-icon-only {\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  font-size: 16px;\n  border-radius: 50%;\n}\n.ivu-btn-circle.ivu-btn-icon-only.ivu-btn-large,\n.ivu-btn-circle-outline.ivu-btn-icon-only.ivu-btn-large {\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  font-size: 16px;\n  border-radius: 50%;\n}\n.ivu-btn-circle.ivu-btn-icon-only.ivu-btn-small,\n.ivu-btn-circle-outline.ivu-btn-icon-only.ivu-btn-small {\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  font-size: 14px;\n  border-radius: 50%;\n}\n.ivu-btn:before {\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  bottom: -1px;\n  right: -1px;\n  background: #fff;\n  opacity: 0.35;\n  content: '';\n  border-radius: inherit;\n  z-index: 1;\n  transition: opacity 0.2s;\n  pointer-events: none;\n  display: none;\n}\n.ivu-btn.ivu-btn-loading {\n  pointer-events: none;\n  position: relative;\n}\n.ivu-btn.ivu-btn-loading:before {\n  display: block;\n}\n.ivu-btn-group {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.ivu-btn-group > .ivu-btn {\n  position: relative;\n  float: left;\n}\n.ivu-btn-group > .ivu-btn:hover,\n.ivu-btn-group > .ivu-btn:active,\n.ivu-btn-group > .ivu-btn.active {\n  z-index: 2;\n}\n.ivu-btn-group .ivu-btn-icon-only .ivu-icon {\n  font-size: 14px;\n  position: relative;\n  top: 1px;\n}\n.ivu-btn-group-large .ivu-btn-icon-only .ivu-icon {\n  font-size: 16px;\n  top: 2px;\n}\n.ivu-btn-group-small .ivu-btn-icon-only .ivu-icon {\n  font-size: 12px;\n  top: 0;\n}\n.ivu-btn-group-circle .ivu-btn {\n  border-radius: 32px;\n}\n.ivu-btn-group-large.ivu-btn-group-circle .ivu-btn {\n  border-radius: 36px;\n}\n.ivu-btn-group-large > .ivu-btn {\n  padding: 6px 15px 7px 15px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.ivu-btn-group-small.ivu-btn-group-circle .ivu-btn {\n  border-radius: 24px;\n}\n.ivu-btn-group-small > .ivu-btn {\n  padding: 2px 7px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.ivu-btn-group-small > .ivu-btn > .ivu-icon {\n  font-size: 12px;\n}\n.ivu-btn-group .ivu-btn + .ivu-btn,\n.ivu-btn + .ivu-btn-group,\n.ivu-btn-group + .ivu-btn,\n.ivu-btn-group + .ivu-btn-group {\n  margin-left: -1px;\n}\n.ivu-btn-group .ivu-btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.ivu-btn-group:not(.ivu-btn-group-vertical) > .ivu-btn:first-child {\n  margin-left: 0;\n}\n.ivu-btn-group:not(.ivu-btn-group-vertical) > .ivu-btn:first-child:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.ivu-btn-group:not(.ivu-btn-group-vertical) > .ivu-btn:last-child:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.ivu-btn-group > .ivu-btn-group {\n  float: left;\n}\n.ivu-btn-group > .ivu-btn-group:not(:first-child):not(:last-child) > .ivu-btn {\n  border-radius: 0;\n}\n.ivu-btn-group:not(.ivu-btn-group-vertical) > .ivu-btn-group:first-child:not(:last-child) > .ivu-btn:last-child {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  padding-right: 8px;\n}\n.ivu-btn-group:not(.ivu-btn-group-vertical) > .ivu-btn-group:last-child:not(:first-child) > .ivu-btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  padding-left: 8px;\n}\n.ivu-btn-group-vertical {\n  display: inline-block;\n  vertical-align: middle;\n}\n.ivu-btn-group-vertical > .ivu-btn {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  float: none;\n}\n.ivu-btn-group-vertical .ivu-btn + .ivu-btn,\n.ivu-btn + .ivu-btn-group-vertical,\n.ivu-btn-group-vertical + .ivu-btn,\n.ivu-btn-group-vertical + .ivu-btn-group-vertical {\n  margin-top: -1px;\n  margin-left: 0px;\n}\n.ivu-btn-group-vertical > .ivu-btn:first-child {\n  margin-top: 0;\n}\n.ivu-btn-group-vertical > .ivu-btn:first-child:not(:last-child) {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.ivu-btn-group-vertical > .ivu-btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.ivu-btn-group-vertical > .ivu-btn-group-vertical:first-child:not(:last-child) > .ivu-btn:last-child {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  padding-bottom: 8px;\n}\n.ivu-btn-group-vertical > .ivu-btn-group-vertical:last-child:not(:first-child) > .ivu-btn:first-child {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  padding-top: 8px;\n}\n.ivu-affix {\n  position: fixed;\n  z-index: 10;\n}\n.ivu-back-top {\n  z-index: 10;\n  position: fixed;\n  cursor: pointer;\n  display: none;\n}\n.ivu-back-top.ivu-back-top-show {\n  display: block;\n}\n.ivu-back-top-inner {\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 2px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease-in-out;\n}\n.ivu-back-top-inner:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.ivu-back-top i {\n  color: #fff;\n  font-size: 24px;\n  padding: 8px 12px;\n}\n.ivu-badge {\n  position: relative;\n  display: inline-block;\n  line-height: 1;\n  vertical-align: middle;\n}\n.ivu-badge-count {\n  position: absolute;\n  transform: translateX(50%);\n  top: -10px;\n  right: 0;\n  height: 20px;\n  border-radius: 10px;\n  min-width: 20px;\n  background: #ff5500;\n  border: 1px solid transparent;\n  color: #fff;\n  line-height: 18px;\n  text-align: center;\n  padding: 0 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  transform-origin: -10% center;\n  z-index: 10;\n  box-shadow: 0 0 0 1px #fff;\n}\n.ivu-badge-count a,\n.ivu-badge-count a:hover {\n  color: #fff;\n}\n.ivu-badge-count-alone {\n  top: auto;\n  display: block;\n  position: relative;\n  transform: translateX(0);\n}\n.ivu-badge-dot {\n  position: absolute;\n  transform: translateX(-50%);\n  transform-origin: 0 center;\n  top: -4px;\n  right: -8px;\n  height: 8px;\n  width: 8px;\n  border-radius: 100%;\n  background: #ff5500;\n  z-index: 10;\n  box-shadow: 0 0 0 1px #fff;\n}\n.ivu-chart-circle {\n  display: inline-block;\n  position: relative;\n}\n.ivu-chart-circle-inner {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  line-height: 1;\n}\n.ivu-spin {\n  color: #3399ff;\n  vertical-align: middle;\n  text-align: center;\n}\n.ivu-spin-dot {\n  position: relative;\n  display: block;\n  border-radius: 50%;\n  background-color: #3399ff;\n  width: 20px;\n  height: 20px;\n  animation: ani-spin-bounce 1s 0s ease-in-out infinite;\n}\n.ivu-spin-large .ivu-spin-dot {\n  width: 32px;\n  height: 32px;\n}\n.ivu-spin-small .ivu-spin-dot {\n  width: 12px;\n  height: 12px;\n}\n.ivu-spin-fix {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 8;\n  display: table;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n}\n.ivu-spin-fix .ivu-spin-main {\n  display: table-cell;\n  vertical-align: middle;\n  width: inherit;\n  height: inherit;\n}\n.ivu-spin-fix .ivu-spin-dot {\n  display: inline-block;\n}\n.ivu-spin-text,\n.ivu-spin-show-text .ivu-spin-dot {\n  display: none;\n}\n.ivu-spin-show-text .ivu-spin-text {\n  display: block;\n}\n@keyframes ani-spin-bounce {\n0% {\n    transform: scale(0);\n}\n100% {\n    transform: scale(1);\n    opacity: 0;\n}\n}\n.ivu-alert {\n  position: relative;\n  padding: 8px 48px 8px 16px;\n  border-radius: 6px;\n  color: #657180;\n  font-size: 12px;\n  line-height: 16px;\n  margin-bottom: 10px;\n}\n.ivu-alert.ivu-alert-with-icon {\n  padding: 8px 48px 8px 38px;\n}\n.ivu-alert-icon {\n  font-size: 14px;\n  top: 8px;\n  left: 16px;\n  position: absolute;\n}\n.ivu-alert-desc {\n  font-size: 12px;\n  color: #657180;\n  line-height: 21px;\n  display: none;\n  text-align: justify;\n}\n.ivu-alert-success {\n  border: 1px solid #ccf5e0;\n  background-color: #e6faf0;\n}\n.ivu-alert-success .ivu-alert-icon {\n  color: #00cc66;\n}\n.ivu-alert-info {\n  border: 1px solid #d6ebff;\n  background-color: #ebf5ff;\n}\n.ivu-alert-info .ivu-alert-icon {\n  color: #3399ff;\n}\n.ivu-alert-warning {\n  border: 1px solid #ffebcc;\n  background-color: #fff5e6;\n}\n.ivu-alert-warning .ivu-alert-icon {\n  color: #ff9900;\n}\n.ivu-alert-error {\n  border: 1px solid #ffddcc;\n  background-color: #ffeee6;\n}\n.ivu-alert-error .ivu-alert-icon {\n  color: #ff5500;\n}\n.ivu-alert-close {\n  font-size: 12px;\n  position: absolute;\n  right: 16px;\n  top: 8px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.ivu-alert-close .ivu-icon-ios-close-empty {\n  font-size: 22px;\n  color: #999;\n  transition: color 0.2s ease;\n  position: relative;\n  top: -3px;\n}\n.ivu-alert-close .ivu-icon-ios-close-empty:hover {\n  color: #444;\n}\n.ivu-alert-with-desc {\n  padding: 16px;\n  position: relative;\n  border-radius: 6px;\n  margin-bottom: 10px;\n  color: #657180;\n  line-height: 1.5;\n}\n.ivu-alert-with-desc.ivu-alert-with-icon {\n  padding: 16px 16px 16px 69px;\n}\n.ivu-alert-with-desc .ivu-alert-desc {\n  display: block;\n}\n.ivu-alert-with-desc .ivu-alert-message {\n  font-size: 14px;\n  color: #464c5b;\n  display: block;\n}\n.ivu-alert-with-desc .ivu-alert-icon {\n  top: 50%;\n  left: 24px;\n  margin-top: -21px;\n  font-size: 28px;\n}\n.ivu-collapse {\n  background-color: #f7f7f7;\n  border-radius: 3px;\n  border: 1px solid #d7dde4;\n}\n.ivu-collapse > .ivu-collapse-item {\n  border-top: 1px solid #d7dde4;\n}\n.ivu-collapse > .ivu-collapse-item:first-child {\n  border-top: 0;\n}\n.ivu-collapse > .ivu-collapse-item > .ivu-collapse-header {\n  height: 38px;\n  line-height: 38px;\n  padding-left: 32px;\n  color: #666;\n  cursor: pointer;\n  position: relative;\n}\n.ivu-collapse > .ivu-collapse-item > .ivu-collapse-header > i {\n  transition: transform 0.2s ease-in-out;\n}\n.ivu-collapse > .ivu-collapse-item.ivu-collapse-item-active > .ivu-collapse-header > i {\n  transform: rotate(90deg);\n}\n.ivu-collapse-content {\n  overflow: hidden;\n  color: #657180;\n  padding: 0 16px;\n  background-color: #fff;\n}\n.ivu-collapse-content > .ivu-collapse-content-box {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n.ivu-collapse-item:last-child > .ivu-collapse-content {\n  border-radius: 0 0 3px 3px;\n}\n.ivu-card {\n  background: #fff;\n  border-radius: 4px;\n  font-size: 14px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.ivu-card-bordered {\n  border: 1px solid #d7dde4;\n  border-color: #e3e8ee;\n}\n.ivu-card-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);\n}\n.ivu-card:hover {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  border-color: #eee;\n}\n.ivu-card.ivu-card-dis-hover:hover {\n  box-shadow: none;\n  border-color: transparent;\n}\n.ivu-card.ivu-card-dis-hover.ivu-card-bordered:hover {\n  border-color: #e3e8ee;\n}\n.ivu-card.ivu-card-shadow:hover {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);\n}\n.ivu-card-head {\n  border-bottom: 1px solid #e3e8ee;\n  padding: 14px 16px;\n  line-height: 1;\n}\n.ivu-card-head p,\n.ivu-card-head-inner {\n  display: inline-block;\n  width: 100%;\n  height: 20px;\n  line-height: 20px;\n  font-size: 14px;\n  color: #464c5b;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ivu-card-extra {\n  position: absolute;\n  right: 16px;\n  top: 14px;\n}\n.ivu-card-body {\n  padding: 16px;\n}\n.ivu-message {\n  font-size: 12px;\n  position: fixed;\n  z-index: 1010;\n  width: 100%;\n  top: 16px;\n  left: 0;\n}\n.ivu-message-notice {\n  width: auto;\n  vertical-align: middle;\n  position: absolute;\n  left: 50%;\n}\n.ivu-message-notice-content {\n  position: relative;\n  right: 50%;\n  padding: 8px 16px;\n  border-radius: 4px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  background: #fff;\n  display: block;\n}\n.ivu-message-success .ivu-icon {\n  color: #00cc66;\n}\n.ivu-message-error .ivu-icon {\n  color: #ff5500;\n}\n.ivu-message-warning .ivu-icon {\n  color: #ff9900;\n}\n.ivu-message-info .ivu-icon,\n.ivu-message-loading .ivu-icon {\n  color: #3399ff;\n}\n.ivu-message .ivu-icon {\n  margin-right: 8px;\n  font-size: 14px;\n  top: 1px;\n  position: relative;\n}\n.ivu-notice {\n  width: 335px;\n  margin-right: 24px;\n  position: fixed;\n  z-index: 1010;\n}\n.ivu-notice-notice {\n  margin-bottom: 10px;\n  padding: 16px;\n  border-radius: 4px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  background: #fff;\n  line-height: 1;\n  position: relative;\n  overflow: hidden;\n}\n.ivu-notice-notice-close {\n  position: absolute;\n  right: 16px;\n  top: 15px;\n  color: #999;\n  outline: none;\n}\n.ivu-notice-notice-close i {\n  font-size: 22px;\n  color: #999;\n  transition: color 0.2s ease;\n  position: relative;\n  top: -3px;\n}\n.ivu-notice-notice-close i:hover {\n  color: #444;\n}\n.ivu-notice-notice-with-desc .ivu-notice-notice-close {\n  top: 11px;\n}\n.ivu-notice-title {\n  font-size: 14px;\n  color: #464c5b;\n  padding-right: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ivu-notice-with-desc .ivu-notice-title {\n  margin-bottom: 8px;\n}\n.ivu-notice-with-desc.ivu-notice-with-icon .ivu-notice-title {\n  margin-left: 51px;\n}\n.ivu-notice-desc {\n  font-size: 12px;\n  color: #999;\n  text-align: justify;\n  line-height: 1.5;\n}\n.ivu-notice-with-desc.ivu-notice-with-icon .ivu-notice-desc {\n  margin-left: 51px;\n}\n.ivu-notice-with-icon .ivu-notice-title {\n  margin-left: 26px;\n}\n.ivu-notice-icon {\n  position: absolute;\n  left: 20px;\n  margin-top: -1px;\n  font-size: 16px;\n}\n.ivu-notice-icon-success {\n  color: #00cc66;\n}\n.ivu-notice-icon-info {\n  color: #3399ff;\n}\n.ivu-notice-icon-warning {\n  color: #ff9900;\n}\n.ivu-notice-icon-error {\n  color: #ff5500;\n}\n.ivu-notice-with-desc .ivu-notice-icon {\n  font-size: 36px;\n}\n.ivu-notice-custom-content:after {\n  content: \"\";\n  display: block;\n  width: 4px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n}\n.ivu-notice-with-normal:after {\n  background: #3399ff;\n}\n.ivu-notice-with-info:after {\n  background: #3399ff;\n}\n.ivu-notice-with-success:after {\n  background: #00cc66;\n}\n.ivu-notice-with-warning:after {\n  background: #ff9900;\n}\n.ivu-notice-with-error:after {\n  background: #ff5500;\n}\n.ivu-radio-group {\n  display: inline-block;\n  font-size: 12px;\n}\n.ivu-radio-wrapper {\n  font-size: 12px;\n  vertical-align: middle;\n  display: inline-block;\n  position: relative;\n  white-space: nowrap;\n  margin-right: 8px;\n}\n.ivu-radio {\n  display: inline-block;\n  margin-right: 4px;\n  white-space: nowrap;\n  outline: none;\n  position: relative;\n  line-height: 1;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.ivu-radio:hover .ivu-radio-inner {\n  border-color: #bcbcbc;\n}\n.ivu-radio-inner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  position: relative;\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  border: 1px solid #d7dde4;\n  border-radius: 50%;\n  transition: all 0.2s ease-in-out;\n}\n.ivu-radio-inner:after {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  left: 2px;\n  top: 2px;\n  border-radius: 6px;\n  display: table;\n  border-top: 0;\n  border-left: 0;\n  content: ' ';\n  background-color: #3399ff;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n  transform: scale(0);\n}\n.ivu-radio-input {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  opacity: 0;\n  cursor: pointer;\n}\n.ivu-radio-checked .ivu-radio-inner {\n  border-color: #3399ff;\n}\n.ivu-radio-checked .ivu-radio-inner:after {\n  opacity: 1;\n  transform: scale(1);\n  transition: all 0.2s ease-in-out;\n}\n.ivu-radio-checked:hover .ivu-radio-inner {\n  border-color: #3399ff;\n}\n.ivu-radio-disabled {\n  cursor: not-allowed;\n}\n.ivu-radio-disabled .ivu-radio-input {\n  cursor: not-allowed;\n}\n.ivu-radio-disabled:hover .ivu-radio-inner {\n  border-color: #d7dde4;\n}\n.ivu-radio-disabled .ivu-radio-inner {\n  border-color: #d7dde4;\n  background-color: #f3f3f3;\n}\n.ivu-radio-disabled .ivu-radio-inner:after {\n  background-color: #cccccc;\n}\n.ivu-radio-disabled .ivu-radio-disabled + span {\n  color: #ccc;\n}\nspan.ivu-radio + * {\n  margin-left: 2px;\n  margin-right: 2px;\n}\n.ivu-radio-group-button {\n  font-size: 0;\n  -webkit-text-size-adjust: none;\n}\n.ivu-radio-group-button .ivu-radio {\n  width: 0;\n  margin-right: 0;\n}\n.ivu-radio-group-button .ivu-radio-wrapper {\n  display: inline-block;\n  height: 32px;\n  line-height: 30px;\n  margin: 0;\n  padding: 0 16px;\n  font-size: 12px;\n  color: #657180;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  border: 1px solid #d7dde4;\n  border-left: 0;\n  background: #fff;\n}\n.ivu-radio-group-button .ivu-radio-wrapper > span {\n  margin-left: 0;\n}\n.ivu-radio-group-button .ivu-radio-wrapper:before {\n  content: '';\n  position: absolute;\n  width: 1px;\n  height: 100%;\n  left: -1px;\n  background: #d7dde4;\n  visibility: hidden;\n  transition: all 0.2s ease-in-out;\n}\n.ivu-radio-group-button .ivu-radio-wrapper:first-child {\n  border-radius: 4px 0 0 4px;\n  border-left: 1px solid #d7dde4;\n}\n.ivu-radio-group-button .ivu-radio-wrapper:first-child:before {\n  display: none;\n}\n.ivu-radio-group-button .ivu-radio-wrapper:last-child {\n  border-radius: 0 4px 4px 0;\n}\n.ivu-radio-group-button .ivu-radio-wrapper:first-child:last-child {\n  border-radius: 4px;\n}\n.ivu-radio-group-button .ivu-radio-wrapper:hover {\n  position: relative;\n  color: #3399ff;\n}\n.ivu-radio-group-button .ivu-radio-wrapper .ivu-radio-inner,\n.ivu-radio-group-button .ivu-radio-wrapper input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ivu-radio-group-button .ivu-radio-wrapper-checked {\n  background: #fff;\n  border-color: #3399ff;\n  color: #3399ff;\n  box-shadow: -1px 0 0 0 #3399ff;\n}\n.ivu-radio-group-button .ivu-radio-wrapper-checked:first-child {\n  border-color: #3399ff;\n  box-shadow: none!important;\n}\n.ivu-radio-group-button .ivu-radio-wrapper-checked:hover {\n  border-color: #5cadff;\n  box-shadow: -1px 0 0 0 #5cadff;\n  color: #5cadff;\n}\n.ivu-radio-group-button .ivu-radio-wrapper-checked:active {\n  border-color: #3091f2;\n  box-shadow: -1px 0 0 0 #3091f2;\n  color: #3091f2;\n}\n.ivu-radio-group-button .ivu-radio-wrapper-disabled {\n  border-color: #d7dde4;\n  background-color: #f7f7f7;\n  cursor: not-allowed;\n  color: #ccc;\n}\n.ivu-radio-group-button .ivu-radio-wrapper-disabled:first-child,\n.ivu-radio-group-button .ivu-radio-wrapper-disabled:hover {\n  border-color: #d7dde4;\n  background-color: #f7f7f7;\n  color: #ccc;\n}\n.ivu-radio-group-button .ivu-radio-wrapper-disabled:first-child {\n  border-left-color: #d7dde4;\n}\n.ivu-radio-group-button .ivu-radio-wrapper-disabled.ivu-radio-wrapper-checked {\n  color: #fff;\n  background-color: #e6e6e6;\n  border-color: #d7dde4;\n  box-shadow: none!important;\n}\n.ivu-radio-group-button.ivu-radio-group-large .ivu-radio-wrapper {\n  height: 36px;\n  line-height: 34px;\n  font-size: 14px;\n}\n.ivu-radio-group-button.ivu-radio-group-small .ivu-radio-wrapper {\n  height: 24px;\n  line-height: 22px;\n  padding: 0 12px;\n  font-size: 12px;\n}\n.ivu-radio-group-button.ivu-radio-group-small .ivu-radio-wrapper:first-child {\n  border-radius: 3px 0 0 3px;\n}\n.ivu-radio-group-button.ivu-radio-group-small .ivu-radio-wrapper:last-child {\n  border-radius: 0 3px 3px 0;\n}\n.ivu-checkbox {\n  display: inline-block;\n  vertical-align: middle;\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  line-height: 1;\n  position: relative;\n}\n.ivu-checkbox-disabled {\n  cursor: not-allowed;\n}\n.ivu-checkbox:hover .ivu-checkbox-inner {\n  border-color: #bcbcbc;\n}\n.ivu-checkbox-inner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  position: relative;\n  top: 0;\n  left: 0;\n  border: 1px solid #d7dde4;\n  border-radius: 2px;\n  background-color: #fff;\n  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n.ivu-checkbox-inner:after {\n  content: '';\n  display: table;\n  width: 4px;\n  height: 8px;\n  position: absolute;\n  top: 1px;\n  left: 4px;\n  border: 2px solid #fff;\n  border-top: 0;\n  border-left: 0;\n  transform: rotate(45deg) scale(0);\n  transition: all 0.2s ease-in-out;\n}\n.ivu-checkbox-input {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  cursor: pointer;\n  opacity: 0;\n}\n.ivu-checkbox-input[disabled] {\n  cursor: not-allowed;\n}\n.ivu-checkbox-checked:hover .ivu-checkbox-inner {\n  border-color: #3399ff;\n}\n.ivu-checkbox-checked .ivu-checkbox-inner {\n  border-color: #3399ff;\n  background-color: #3399ff;\n}\n.ivu-checkbox-checked .ivu-checkbox-inner:after {\n  content: '';\n  display: table;\n  width: 4px;\n  height: 8px;\n  position: absolute;\n  top: 1px;\n  left: 4px;\n  border: 2px solid #fff;\n  border-top: 0;\n  border-left: 0;\n  transform: rotate(45deg) scale(1);\n  transition: all 0.2s ease-in-out;\n}\n.ivu-checkbox-disabled.ivu-checkbox-checked:hover .ivu-checkbox-inner {\n  border-color: #d7dde4;\n}\n.ivu-checkbox-disabled.ivu-checkbox-checked .ivu-checkbox-inner {\n  background-color: #f3f3f3;\n  border-color: #d7dde4;\n}\n.ivu-checkbox-disabled.ivu-checkbox-checked .ivu-checkbox-inner:after {\n  animation-name: none;\n  border-color: #ccc;\n}\n.ivu-checkbox-disabled:hover .ivu-checkbox-inner {\n  border-color: #d7dde4;\n}\n.ivu-checkbox-disabled .ivu-checkbox-inner {\n  border-color: #d7dde4;\n  background-color: #f3f3f3;\n}\n.ivu-checkbox-disabled .ivu-checkbox-inner:after {\n  animation-name: none;\n  border-color: #f3f3f3;\n}\n.ivu-checkbox-disabled .ivu-checkbox-inner-input {\n  cursor: default;\n}\n.ivu-checkbox-disabled + span {\n  color: #ccc;\n  cursor: not-allowed;\n}\n.ivu-checkbox-wrapper {\n  cursor: pointer;\n  font-size: 12px;\n  display: inline-block;\n}\n.ivu-checkbox-wrapper + .ivu-checkbox-wrapper {\n  margin-left: 8px;\n}\n.ivu-checkbox-wrapper-disabled {\n  cursor: not-allowed;\n}\n.ivu-checkbox-wrapper + span,\n.ivu-checkbox + span {\n  margin-right: 4px;\n}\n.ivu-checkbox-group {\n  font-size: 14px;\n}\n.ivu-checkbox-group-item {\n  display: inline-block;\n}\n.ivu-switch {\n  display: inline-block;\n  width: 48px;\n  height: 24px;\n  line-height: 22px;\n  border-radius: 24px;\n  vertical-align: middle;\n  border: 1px solid #ccc;\n  background-color: #ccc;\n  position: relative;\n  cursor: pointer;\n  user-select: none;\n  transition: all 0.2s ease-in-out;\n}\n.ivu-switch-inner {\n  color: #fff;\n  font-size: 12px;\n  position: absolute;\n  left: 25px;\n}\n.ivu-switch-inner i {\n  width: 12px;\n  height: 12px;\n  text-align: center;\n}\n.ivu-switch:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n  background-color: #fff;\n  position: absolute;\n  left: 1px;\n  top: 1px;\n  cursor: pointer;\n  transition: left 0.2s ease-in-out, width 0.2s ease-in-out;\n}\n.ivu-switch:active:after {\n  width: 26px;\n}\n.ivu-switch:focus {\n  box-shadow: 0 0 0 2px rgba(51, 153, 255, 0.2);\n  outline: 0;\n}\n.ivu-switch:focus:hover {\n  box-shadow: none;\n}\n.ivu-switch-small {\n  width: 24px;\n  height: 12px;\n  line-height: 10px;\n}\n.ivu-switch-small:after {\n  width: 10px;\n  height: 10px;\n  top: 0;\n  left: 0;\n}\n.ivu-switch-small:active:after {\n  width: 14px;\n}\n.ivu-switch-small.ivu-switch-checked:after {\n  left: 12px;\n}\n.ivu-switch-small:active.ivu-switch-checked:after {\n  left: 8px;\n}\n.ivu-switch-large {\n  width: 60px;\n}\n.ivu-switch-large:active:after {\n  width: 26px;\n}\n.ivu-switch-large:active:after {\n  width: 32px;\n}\n.ivu-switch-large.ivu-switch-checked:after {\n  left: 37px;\n}\n.ivu-switch-large:active.ivu-switch-checked:after {\n  left: 25px;\n}\n.ivu-switch-checked {\n  border-color: #3399ff;\n  background-color: #3399ff;\n}\n.ivu-switch-checked .ivu-switch-inner {\n  left: 8px;\n}\n.ivu-switch-checked:after {\n  left: 25px;\n}\n.ivu-switch-checked:active:after {\n  left: 19px;\n}\n.ivu-switch-disabled {\n  cursor: not-allowed;\n  background: #f3f3f3;\n  border-color: #f3f3f3;\n}\n.ivu-switch-disabled:after {\n  background: #ccc;\n  cursor: not-allowed;\n}\n.ivu-switch-disabled .ivu-switch-inner {\n  color: #ccc;\n}\n.ivu-input-number {\n  display: inline-block;\n  width: 100%;\n  line-height: 1.5;\n  padding: 4px 7px;\n  font-size: 12px;\n  color: #657180;\n  background-color: #fff;\n  background-image: none;\n  position: relative;\n  cursor: text;\n  transition: border 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n  margin: 0;\n  padding: 0;\n  width: 80px;\n  height: 32px;\n  line-height: 32px;\n  vertical-align: middle;\n  border: 1px solid #d7dde4;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ivu-input-number::-moz-placeholder {\n  color: #c3cbd6;\n  opacity: 1;\n}\n.ivu-input-number:-ms-input-placeholder {\n  color: #c3cbd6;\n}\n.ivu-input-number::-webkit-input-placeholder {\n  color: #c3cbd6;\n}\n.ivu-input-number:hover {\n  border-color: #5cadff;\n}\n.ivu-input-number:focus {\n  border-color: #5cadff;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(51, 153, 255, 0.2);\n}\n.ivu-input-number[disabled],\nfieldset[disabled] .ivu-input-number {\n  background-color: #f3f3f3;\n  opacity: 1;\n  cursor: not-allowed;\n  color: #ccc;\n}\n.ivu-input-number[disabled]:hover,\nfieldset[disabled] .ivu-input-number:hover {\n  border-color: #dfe4e9;\n}\ntextarea.ivu-input-number {\n  max-width: 100%;\n  height: auto;\n  vertical-align: bottom;\n  font-size: 14px;\n}\n.ivu-input-number-large {\n  font-size: 14px;\n  padding: 6px 7px;\n  height: 36px;\n}\n.ivu-input-number-small {\n  padding: 1px 7px;\n  height: 24px;\n  border-radius: 3px;\n}\n.ivu-input-number-handler-wrap {\n  width: 22px;\n  height: 100%;\n  border-left: 1px solid #d7dde4;\n  border-radius: 0 4px 4px 0;\n  background: #fff;\n  position: absolute;\n  top: 0;\n  right: 0;\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.ivu-input-number:hover .ivu-input-number-handler-wrap {\n  opacity: 1;\n}\n.ivu-input-number-handler-up {\n  cursor: pointer;\n}\n.ivu-input-number-handler-up-inner {\n  top: 1px;\n}\n.ivu-input-number-handler-down {\n  border-top: 1px solid #d7dde4;\n  top: -1px;\n  cursor: pointer;\n}\n.ivu-input-number-handler {\n  display: block;\n  width: 100%;\n  height: 16px;\n  line-height: 0;\n  text-align: center;\n  overflow: hidden;\n  color: #999;\n  position: relative;\n}\n.ivu-input-number-handler:hover .ivu-input-number-handler-up-inner,\n.ivu-input-number-handler:hover .ivu-input-number-handler-down-inner {\n  color: #5cadff;\n}\n.ivu-input-number-handler-up-inner,\n.ivu-input-number-handler-down-inner {\n  width: 12px;\n  height: 12px;\n  line-height: 12px;\n  font-size: 14px;\n  color: #999;\n  user-select: none;\n  position: absolute;\n  right: 4px;\n  transition: all 0.2s linear;\n}\n.ivu-input-number:hover {\n  border-color: #5cadff;\n}\n.ivu-input-number-focused {\n  border-color: #5cadff;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(51, 153, 255, 0.2);\n}\n.ivu-input-number-disabled {\n  background-color: #f3f3f3;\n  opacity: 1;\n  cursor: not-allowed;\n  color: #ccc;\n}\n.ivu-input-number-disabled:hover {\n  border-color: #dfe4e9;\n}\n.ivu-input-number-input-wrap {\n  overflow: hidden;\n  height: 32px;\n}\n.ivu-input-number-input {\n  width: 100%;\n  height: 32px;\n  line-height: 32px;\n  padding: 0 7px;\n  text-align: left;\n  outline: 0;\n  -moz-appearance: textfield;\n  color: #666;\n  border: 0;\n  border-radius: 4px;\n  transition: all 0.2s linear;\n}\n.ivu-input-number-input[disabled] {\n  background-color: #f3f3f3;\n  opacity: 1;\n  cursor: not-allowed;\n  color: #ccc;\n}\n.ivu-input-number-input[disabled]:hover {\n  border-color: #dfe4e9;\n}\n.ivu-input-number-large {\n  padding: 0;\n}\n.ivu-input-number-large .ivu-input-number-input-wrap {\n  height: 36px;\n}\n.ivu-input-number-large .ivu-input-number-handler {\n  height: 18px;\n}\n.ivu-input-number-large input {\n  height: 36px;\n  line-height: 36px;\n}\n.ivu-input-number-large .ivu-input-number-handler-up-inner {\n  top: 2px;\n}\n.ivu-input-number-large .ivu-input-number-handler-down-inner {\n  bottom: 2px;\n}\n.ivu-input-number-small {\n  padding: 0;\n}\n.ivu-input-number-small .ivu-input-number-input-wrap {\n  height: 24px;\n}\n.ivu-input-number-small .ivu-input-number-handler {\n  height: 12px;\n}\n.ivu-input-number-small input {\n  height: 24px;\n  line-height: 24px;\n  margin-top: -1px;\n  vertical-align: top;\n}\n.ivu-input-number-small .ivu-input-number-handler-up-inner {\n  top: -1px;\n}\n.ivu-input-number-small .ivu-input-number-handler-down-inner {\n  bottom: -1px;\n}\n.ivu-input-number-handler-down-disabled .ivu-input-number-handler-down-inner,\n.ivu-input-number-handler-up-disabled .ivu-input-number-handler-down-inner,\n.ivu-input-number-disabled .ivu-input-number-handler-down-inner,\n.ivu-input-number-handler-down-disabled .ivu-input-number-handler-up-inner,\n.ivu-input-number-handler-up-disabled .ivu-input-number-handler-up-inner,\n.ivu-input-number-disabled .ivu-input-number-handler-up-inner {\n  opacity: 0.72;\n  color: #ccc !important;\n  cursor: not-allowed;\n}\n.ivu-input-number-disabled .ivu-input-number-input {\n  opacity: 0.72;\n  cursor: not-allowed;\n  background-color: #f3f3f3;\n}\n.ivu-input-number-disabled .ivu-input-number-handler-wrap {\n  display: none;\n}\n.ivu-input-number-disabled .ivu-input-number-handler {\n  opacity: 0.72;\n  color: #ccc !important;\n  cursor: not-allowed;\n}\n.ivu-tag {\n  display: inline-block;\n  height: 22px;\n  line-height: 22px;\n  margin: 2px 4px 2px 0;\n  padding: 0 8px;\n  border: 1px solid #e3e8ee;\n  border-radius: 3px;\n  background: #f7f7f7;\n  font-size: 12px;\n  vertical-align: middle;\n  opacity: 1;\n  overflow: hidden;\n  cursor: pointer;\n}\n.ivu-tag-dot {\n  height: 32px;\n  line-height: 32px;\n  border: 1px solid #e3e8ee !important;\n  color: #657180 !important;\n  background: #fff !important;\n  padding: 0 12px;\n}\n.ivu-tag-dot-inner {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  margin-right: 8px;\n  border-radius: 50%;\n  background: #e3e8ee;\n  position: relative;\n  top: 1px;\n}\n.ivu-tag-dot .ivu-icon-ios-close-empty {\n  color: #666 !important;\n  margin-left: 12px !important;\n}\n.ivu-tag-border {\n  height: 24px;\n  line-height: 24px;\n  border: 1px solid #e3e8ee !important;\n  color: #657180 !important;\n  background: #fff !important;\n  position: relative;\n}\n.ivu-tag-border .ivu-icon-ios-close-empty {\n  color: #666 !important;\n  margin-left: 12px !important;\n}\n.ivu-tag-border:after {\n  content: \"\";\n  display: none;\n  width: 1px;\n  background: #e3e8ee;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 22px;\n}\n.ivu-tag-border.ivu-tag-closable:after {\n  display: block;\n}\n.ivu-tag-border.ivu-tag-closable .ivu-icon-ios-close-empty {\n  margin-left: 18px !important;\n}\n.ivu-tag-border.ivu-tag-blue {\n  color: #3399ff !important;\n  border: 1px solid #3399ff !important;\n}\n.ivu-tag-border.ivu-tag-blue:after {\n  background: #3399ff;\n}\n.ivu-tag-border.ivu-tag-blue .ivu-icon-ios-close-empty {\n  color: #3399ff !important;\n}\n.ivu-tag-border.ivu-tag-green {\n  color: #00cc66 !important;\n  border: 1px solid #00cc66 !important;\n}\n.ivu-tag-border.ivu-tag-green:after {\n  background: #00cc66;\n}\n.ivu-tag-border.ivu-tag-green .ivu-icon-ios-close-empty {\n  color: #00cc66 !important;\n}\n.ivu-tag-border.ivu-tag-yellow {\n  color: #ff9900 !important;\n  border: 1px solid #ff9900 !important;\n}\n.ivu-tag-border.ivu-tag-yellow:after {\n  background: #ff9900;\n}\n.ivu-tag-border.ivu-tag-yellow .ivu-icon-ios-close-empty {\n  color: #ff9900 !important;\n}\n.ivu-tag-border.ivu-tag-red {\n  color: #ff5500 !important;\n  border: 1px solid #ff5500 !important;\n}\n.ivu-tag-border.ivu-tag-red:after {\n  background: #ff5500;\n}\n.ivu-tag-border.ivu-tag-red .ivu-icon-ios-close-empty {\n  color: #ff5500 !important;\n}\n.ivu-tag:hover {\n  opacity: 0.85;\n}\n.ivu-tag,\n.ivu-tag a,\n.ivu-tag a:hover {\n  color: #657180;\n}\n.ivu-tag-text a:first-child:last-child {\n  display: inline-block;\n  margin: 0 -8px;\n  padding: 0 8px;\n}\n.ivu-tag .ivu-icon-ios-close-empty {\n  display: inline-block;\n  font-size: 14px;\n  font-size: 20px \\9;\n  transform: scale(1.42857143) rotate(0deg);\n  cursor: pointer;\n  margin-left: 8px;\n  color: #666;\n  opacity: 0.66;\n  position: relative;\n  top: 1px;\n}\n:root .ivu-tag .ivu-icon-ios-close-empty {\n  font-size: 14px;\n}\n.ivu-tag .ivu-icon-ios-close-empty:hover {\n  opacity: 1;\n}\n.ivu-tag-blue,\n.ivu-tag-green,\n.ivu-tag-yellow,\n.ivu-tag-red {\n  border: 0;\n}\n.ivu-tag-blue,\n.ivu-tag-green,\n.ivu-tag-yellow,\n.ivu-tag-red,\n.ivu-tag-blue a,\n.ivu-tag-green a,\n.ivu-tag-yellow a,\n.ivu-tag-red a,\n.ivu-tag-blue a:hover,\n.ivu-tag-green a:hover,\n.ivu-tag-yellow a:hover,\n.ivu-tag-red a:hover,\n.ivu-tag-blue .ivu-icon-ios-close-empty,\n.ivu-tag-green .ivu-icon-ios-close-empty,\n.ivu-tag-yellow .ivu-icon-ios-close-empty,\n.ivu-tag-red .ivu-icon-ios-close-empty,\n.ivu-tag-blue .ivu-icon-ios-close-empty:hover,\n.ivu-tag-green .ivu-icon-ios-close-empty:hover,\n.ivu-tag-yellow .ivu-icon-ios-close-empty:hover,\n.ivu-tag-red .ivu-icon-ios-close-empty:hover {\n  color: #fff;\n}\n.ivu-tag-blue,\n.ivu-tag-blue.ivu-tag-dot .ivu-tag-dot-inner {\n  background: #3399ff;\n}\n.ivu-tag-green,\n.ivu-tag-green.ivu-tag-dot .ivu-tag-dot-inner {\n  background: #00cc66;\n}\n.ivu-tag-yellow,\n.ivu-tag-yellow.ivu-tag-dot .ivu-tag-dot-inner {\n  background: #ff9900;\n}\n.ivu-tag-red,\n.ivu-tag-red.ivu-tag-dot .ivu-tag-dot-inner {\n  background: #ff5500;\n}\n.ivu-loading-bar {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2000;\n}\n.ivu-loading-bar-inner {\n  transition: width 0.2s linear;\n}\n.ivu-loading-bar-inner-color-primary {\n  background-color: #3399ff;\n}\n.ivu-loading-bar-inner-failed-color-error {\n  background-color: #ff5500;\n}\n.ivu-progress {\n  display: inline-block;\n  width: 100%;\n  font-size: 12px;\n  position: relative;\n}\n.ivu-progress-outer {\n  display: inline-block;\n  width: 100%;\n  margin-right: 0;\n  padding-right: 0;\n}\n.ivu-progress-show-info .ivu-progress-outer {\n  padding-right: 55px;\n  margin-right: -55px;\n}\n.ivu-progress-inner {\n  display: inline-block;\n  width: 100%;\n  background-color: #f3f3f3;\n  border-radius: 100px;\n  vertical-align: middle;\n}\n.ivu-progress-bg {\n  border-radius: 100px;\n  background-color: #2db7f5;\n  transition: all 0.2s linear;\n  position: relative;\n}\n.ivu-progress-text {\n  display: inline-block;\n  margin-left: 5px;\n  text-align: left;\n  font-size: 1em;\n  vertical-align: middle;\n}\n.ivu-progress-active .ivu-progress-bg:before {\n  content: '';\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #fff;\n  border-radius: 10px;\n  animation: ivu-progress-active 2s ease-in-out infinite;\n}\n.ivu-progress-wrong .ivu-progress-bg {\n  background-color: #ff5500;\n}\n.ivu-progress-wrong .ivu-progress-text {\n  color: #ff5500;\n}\n.ivu-progress-success .ivu-progress-bg {\n  background-color: #00cc66;\n}\n.ivu-progress-success .ivu-progress-text {\n  color: #00cc66;\n}\n@keyframes ivu-progress-active {\n0% {\n    opacity: .3;\n    width: 0;\n}\n100% {\n    opacity: 0;\n    width: 100%;\n}\n}\n.ivu-timeline {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.ivu-timeline-item {\n  margin: 0 !important;\n  padding: 0 0 12px 0;\n  list-style: none;\n  position: relative;\n}\n.ivu-timeline-item-tail {\n  height: 100%;\n  border-left: 1px solid #e3e8ee;\n  position: absolute;\n  left: 6px;\n  top: 0;\n}\n.ivu-timeline-item-pending .ivu-timeline-item-tail {\n  display: none;\n}\n.ivu-timeline-item-head {\n  width: 13px;\n  height: 13px;\n  background-color: #fff;\n  border-radius: 50%;\n  border: 1px solid transparent;\n  position: absolute;\n}\n.ivu-timeline-item-head-blue {\n  border-color: #3399ff;\n  color: #3399ff;\n}\n.ivu-timeline-item-head-red {\n  border-color: #ff5500;\n  color: #ff5500;\n}\n.ivu-timeline-item-head-green {\n  border-color: #00cc66;\n  color: #00cc66;\n}\n.ivu-timeline-item-head-custom {\n  width: 40px;\n  height: auto;\n  margin-top: 6px;\n  padding: 3px 0;\n  text-align: center;\n  line-height: 1;\n  border: 0;\n  border-radius: 0;\n  font-size: 14px;\n  position: absolute;\n  left: -13px;\n  transform: translateY(-50%);\n}\n.ivu-timeline-item-content {\n  padding: 1px 1px 10px 24px;\n  font-size: 12px;\n  position: relative;\n  top: -3px;\n}\n.ivu-timeline-item:last-child .ivu-timeline-item-tail {\n  display: none;\n}\n.ivu-timeline.ivu-timeline-pending .ivu-timeline-item:nth-last-of-type(2) .ivu-timeline-item-tail {\n  border-left: 1px dotted #e3e8ee;\n}\n.ivu-timeline.ivu-timeline-pending .ivu-timeline-item:nth-last-of-type(2) .ivu-timeline-item-content {\n  min-height: 48px;\n}\n.ivu-page:after {\n  content: '';\n  display: block;\n  height: 0;\n  clear: both;\n  overflow: hidden;\n  visibility: hidden;\n}\n.ivu-page-item {\n  float: left;\n  min-width: 32px;\n  height: 32px;\n  line-height: 30px;\n  margin-right: 4px;\n  text-align: center;\n  list-style: none;\n  background-color: #fff;\n  user-select: none;\n  cursor: pointer;\n  font-family: Arial;\n  border: 1px solid #d7dde4;\n  border-radius: 4px;\n  transition: all 0.2s ease-in-out;\n}\n.ivu-page-item a {\n  margin: 0 6px;\n  text-decoration: none;\n  color: #657180;\n}\n.ivu-page-item:hover {\n  border-color: #3399ff;\n}\n.ivu-page-item:hover a {\n  color: #3399ff;\n}\n.ivu-page-item-active {\n  background-color: #3399ff;\n  border-color: #3399ff;\n}\n.ivu-page-item-active a,\n.ivu-page-item-active:hover a {\n  color: #fff;\n}\n.ivu-page-item-jump-prev:after,\n.ivu-page-item-jump-next:after {\n  content: \"\\2022\\2022\\2022\";\n  display: block;\n  letter-spacing: 1px;\n  color: #ccc;\n  text-align: center;\n}\n.ivu-page-item-jump-prev i,\n.ivu-page-item-jump-next i {\n  display: none;\n}\n.ivu-page-item-jump-prev:hover:after,\n.ivu-page-item-jump-next:hover:after {\n  display: none;\n}\n.ivu-page-item-jump-prev:hover i,\n.ivu-page-item-jump-next:hover i {\n  display: inline;\n}\n.ivu-page-item-jump-prev:hover i:after {\n  content: \"\\F3D2\";\n}\n.ivu-page-item-jump-next:hover i:after {\n  content: \"\\F3D3\";\n}\n.ivu-page-prev {\n  margin-right: 8px;\n}\n.ivu-page-item-jump-prev,\n.ivu-page-item-jump-next {\n  margin-right: 4px;\n}\n.ivu-page-next {\n  margin-left: 4px;\n}\n.ivu-page-prev,\n.ivu-page-next,\n.ivu-page-item-jump-prev,\n.ivu-page-item-jump-next {\n  display: inline-block;\n  float: left;\n  min-width: 32px;\n  height: 32px;\n  line-height: 30px;\n  list-style: none;\n  text-align: center;\n  cursor: pointer;\n  color: #666;\n  font-family: Arial;\n  border: 1px solid #d7dde4;\n  border-radius: 4px;\n  transition: all 0.2s ease-in-out;\n}\n.ivu-page-prev,\n.ivu-page-next {\n  background-color: #fff;\n}\n.ivu-page-prev a,\n.ivu-page-next a {\n  color: #666;\n  font-size: 14px;\n}\n.ivu-page-prev:hover,\n.ivu-page-next:hover {\n  border-color: #3399ff;\n}\n.ivu-page-prev:hover a,\n.ivu-page-next:hover a {\n  color: #3399ff;\n}\n.ivu-page-disabled {\n  cursor: not-allowed;\n}\n.ivu-page-disabled a {\n  color: #ccc;\n}\n.ivu-page-disabled:hover {\n  border-color: #d7dde4;\n}\n.ivu-page-disabled:hover a {\n  color: #ccc;\n  cursor: not-allowed;\n}\n.ivu-page-options {\n  float: left;\n  margin-left: 15px;\n}\n.ivu-page-options-sizer {\n  float: left;\n  margin-right: 10px;\n}\n.ivu-page-options-elevator {\n  float: left;\n  height: 32px;\n  line-height: 32px;\n}\n.ivu-page-options-elevator input {\n  display: inline-block;\n  width: 100%;\n  height: 32px;\n  line-height: 1.5;\n  padding: 4px 7px;\n  font-size: 12px;\n  border: 1px solid #d7dde4;\n  color: #657180;\n  background-color: #fff;\n  background-image: none;\n  position: relative;\n  cursor: text;\n  transition: border 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n  border-radius: 4px;\n  margin: 0 8px;\n  width: 50px;\n}\n.ivu-page-options-elevator input::-moz-placeholder {\n  color: #c3cbd6;\n  opacity: 1;\n}\n.ivu-page-options-elevator input:-ms-input-placeholder {\n  color: #c3cbd6;\n}\n.ivu-page-options-elevator input::-webkit-input-placeholder {\n  color: #c3cbd6;\n}\n.ivu-page-options-elevator input:hover {\n  border-color: #5cadff;\n}\n.ivu-page-options-elevator input:focus {\n  border-color: #5cadff;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(51, 153, 255, 0.2);\n}\n.ivu-page-options-elevator input[disabled],\nfieldset[disabled] .ivu-page-options-elevator input {\n  background-color: #f3f3f3;\n  opacity: 1;\n  cursor: not-allowed;\n  color: #ccc;\n}\n.ivu-page-options-elevator input[disabled]:hover,\nfieldset[disabled] .ivu-page-options-elevator input:hover {\n  border-color: #dfe4e9;\n}\ntextarea.ivu-page-options-elevator input {\n  max-width: 100%;\n  height: auto;\n  vertical-align: bottom;\n  font-size: 14px;\n}\n.ivu-page-options-elevator input-large {\n  font-size: 14px;\n  padding: 6px 7px;\n  height: 36px;\n}\n.ivu-page-options-elevator input-small {\n  padding: 1px 7px;\n  height: 24px;\n  border-radius: 3px;\n}\n.ivu-page-total {\n  float: left;\n  height: 32px;\n  line-height: 32px;\n  margin-right: 10px;\n}\n.ivu-page-simple .ivu-page-prev,\n.ivu-page-simple .ivu-page-next {\n  margin: 0;\n  border: 0;\n  height: 24px;\n  line-height: 24px;\n  font-size: 18px;\n}\n.ivu-page-simple .ivu-page-simple-pager {\n  float: left;\n  margin-right: 8px;\n}\n.ivu-page-simple .ivu-page-simple-pager input {\n  width: 30px;\n  height: 24px;\n  margin: 0 8px;\n  padding: 5px 8px;\n  text-align: center;\n  box-sizing: border-box;\n  background-color: #fff;\n  outline: none;\n  border: 1px solid #d7dde4;\n  border-radius: 4px;\n  transition: border-color 0.2s ease-in-out;\n}\n.ivu-page-simple .ivu-page-simple-pager input:hover {\n  border-color: #3399ff;\n}\n.ivu-page-simple .ivu-page-simple-pager span {\n  padding: 0 8px 0 2px;\n}\n.ivu-page.mini .ivu-page-total {\n  height: 24px;\n  line-height: 24px;\n}\n.ivu-page.mini .ivu-page-item {\n  border: 0;\n  margin: 0;\n  min-width: 24px;\n  height: 24px;\n  line-height: 24px;\n  border-radius: 3px;\n}\n.ivu-page.mini .ivu-page-prev,\n.ivu-page.mini .ivu-page-next {\n  margin: 0;\n  min-width: 24px;\n  height: 24px;\n  line-height: 24px;\n  border: 0;\n}\n.ivu-page.mini .ivu-page-prev a i:after,\n.ivu-page.mini .ivu-page-next a i:after {\n  height: 24px;\n  line-height: 24px;\n}\n.ivu-page.mini .ivu-page-item-jump-prev,\n.ivu-page.mini .ivu-page-item-jump-next {\n  height: 24px;\n  line-height: 24px;\n  border: none;\n  margin-right: 0;\n}\n.ivu-page.mini .ivu-page-options {\n  margin-left: 8px;\n}\n.ivu-page.mini .ivu-page-options-elevator {\n  height: 24px;\n  line-height: 24px;\n}\n.ivu-page.mini .ivu-page-options-elevator input {\n  padding: 1px 7px;\n  height: 24px;\n  border-radius: 3px;\n  width: 44px;\n}\n.ivu-steps {\n  font-size: 0;\n  width: 100%;\n  line-height: 1.5;\n}\n.ivu-steps-item {\n  display: inline-block;\n  position: relative;\n  vertical-align: top;\n}\n.ivu-steps-item.ivu-steps-status-wait .ivu-steps-head-inner {\n  background-color: #fff;\n}\n.ivu-steps-item.ivu-steps-status-wait .ivu-steps-head-inner > .ivu-steps-icon,\n.ivu-steps-item.ivu-steps-status-wait .ivu-steps-head-inner span {\n  color: #ccc;\n}\n.ivu-steps-item.ivu-steps-status-wait .ivu-steps-title {\n  color: #999;\n}\n.ivu-steps-item.ivu-steps-status-wait .ivu-steps-content {\n  color: #999;\n}\n.ivu-steps-item.ivu-steps-status-wait .ivu-steps-tail > i {\n  background-color: #e3e8ee;\n}\n.ivu-steps-item.ivu-steps-status-process .ivu-steps-head-inner {\n  border-color: #3399ff;\n  background-color: #3399ff;\n}\n.ivu-steps-item.ivu-steps-status-process .ivu-steps-head-inner > .ivu-steps-icon,\n.ivu-steps-item.ivu-steps-status-process .ivu-steps-head-inner span {\n  color: #fff;\n}\n.ivu-steps-item.ivu-steps-status-process .ivu-steps-title {\n  color: #666;\n}\n.ivu-steps-item.ivu-steps-status-process .ivu-steps-content {\n  color: #666;\n}\n.ivu-steps-item.ivu-steps-status-process .ivu-steps-tail > i {\n  background-color: #e3e8ee;\n}\n.ivu-steps-item.ivu-steps-status-finish .ivu-steps-head-inner {\n  background-color: #fff;\n  border-color: #3399ff;\n}\n.ivu-steps-item.ivu-steps-status-finish .ivu-steps-head-inner > .ivu-steps-icon,\n.ivu-steps-item.ivu-steps-status-finish .ivu-steps-head-inner span {\n  color: #3399ff;\n}\n.ivu-steps-item.ivu-steps-status-finish .ivu-steps-tail > i:after {\n  width: 100%;\n  background: #3399ff;\n  transition: all 0.2s ease-in-out;\n  opacity: 1;\n}\n.ivu-steps-item.ivu-steps-status-finish .ivu-steps-title {\n  color: #999;\n}\n.ivu-steps-item.ivu-steps-status-finish .ivu-steps-content {\n  color: #999;\n}\n.ivu-steps-item.ivu-steps-status-error .ivu-steps-head-inner {\n  background-color: #fff;\n  border-color: #ff5500;\n}\n.ivu-steps-item.ivu-steps-status-error .ivu-steps-head-inner > .ivu-steps-icon {\n  color: #ff5500;\n}\n.ivu-steps-item.ivu-steps-status-error .ivu-steps-title {\n  color: #ff5500;\n}\n.ivu-steps-item.ivu-steps-status-error .ivu-steps-content {\n  color: #ff5500;\n}\n.ivu-steps-item.ivu-steps-status-error .ivu-steps-tail > i {\n  background-color: #e3e8ee;\n}\n.ivu-steps-item.ivu-steps-next-error .ivu-steps-tail > i,\n.ivu-steps-item.ivu-steps-next-error .ivu-steps-tail > i:after {\n  background-color: #ff5500;\n}\n.ivu-steps-item.ivu-steps-custom .ivu-steps-head-inner {\n  background: none;\n  border: 0;\n  width: auto;\n  height: auto;\n}\n.ivu-steps-item.ivu-steps-custom .ivu-steps-head-inner > .ivu-steps-icon {\n  font-size: 20px;\n  top: 2px;\n  width: 20px;\n  height: 20px;\n}\n.ivu-steps-item.ivu-steps-custom.ivu-steps-status-process .ivu-steps-head-inner > .ivu-steps-icon {\n  color: #3399ff;\n}\n.ivu-steps-item:last-child .ivu-steps-tail {\n  display: none;\n}\n.ivu-steps .ivu-steps-head,\n.ivu-steps .ivu-steps-main {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n}\n.ivu-steps .ivu-steps-head {\n  background: #fff;\n}\n.ivu-steps .ivu-steps-head-inner {\n  display: block;\n  width: 26px;\n  height: 26px;\n  line-height: 24px;\n  margin-right: 8px;\n  text-align: center;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  font-size: 14px;\n  transition: background-color 0.2s ease-in-out;\n}\n.ivu-steps .ivu-steps-head-inner > .ivu-steps-icon {\n  line-height: 1;\n  position: relative;\n}\n.ivu-steps .ivu-steps-head-inner > .ivu-steps-icon.ivu-icon {\n  font-size: 24px;\n}\n.ivu-steps .ivu-steps-head-inner > .ivu-steps-icon.ivu-icon-ios-checkmark-empty,\n.ivu-steps .ivu-steps-head-inner > .ivu-steps-icon.ivu-icon-ios-close-empty {\n  font-weight: bold;\n}\n.ivu-steps .ivu-steps-main {\n  margin-top: 2.5px;\n  display: inline;\n}\n.ivu-steps .ivu-steps-custom .ivu-steps-title {\n  margin-top: 2.5px;\n}\n.ivu-steps .ivu-steps-title {\n  display: inline-block;\n  margin-bottom: 4px;\n  padding-right: 10px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #666;\n  background: #fff;\n}\n.ivu-steps .ivu-steps-title > a:first-child:last-child {\n  color: #666;\n}\n.ivu-steps .ivu-steps-item-last .ivu-steps-title {\n  padding-right: 0;\n  width: 100%;\n}\n.ivu-steps .ivu-steps-content {\n  font-size: 12px;\n  color: #999;\n}\n.ivu-steps .ivu-steps-tail {\n  width: 100%;\n  padding: 0 10px;\n  position: absolute;\n  left: 0;\n  top: 13px;\n}\n.ivu-steps .ivu-steps-tail > i {\n  display: inline-block;\n  width: 100%;\n  height: 1px;\n  vertical-align: top;\n  background: #e3e8ee;\n  border-radius: 1px;\n  position: relative;\n}\n.ivu-steps .ivu-steps-tail > i:after {\n  content: '';\n  width: 0;\n  height: 100%;\n  background: #e3e8ee;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n}\n.ivu-steps.ivu-steps-small .ivu-steps-head-inner {\n  width: 18px;\n  height: 18px;\n  line-height: 16px;\n  margin-right: 10px;\n  text-align: center;\n  border-radius: 50%;\n  font-size: 12px;\n}\n.ivu-steps.ivu-steps-small .ivu-steps-head-inner > .ivu-steps-icon.ivu-icon {\n  font-size: 16px;\n  top: 0;\n}\n.ivu-steps.ivu-steps-small .ivu-steps-main {\n  margin-top: 0;\n}\n.ivu-steps.ivu-steps-small .ivu-steps-title {\n  margin-bottom: 4px;\n  margin-top: 0;\n  color: #666;\n  font-size: 12px;\n  font-weight: bold;\n}\n.ivu-steps.ivu-steps-small .ivu-steps-content {\n  font-size: 12px;\n  color: #999;\n  padding-left: 30px;\n}\n.ivu-steps.ivu-steps-small .ivu-steps-tail {\n  top: 8px;\n  padding: 0 8px;\n}\n.ivu-steps.ivu-steps-small .ivu-steps-tail > i {\n  height: 1px;\n  width: 100%;\n  border-radius: 1px;\n}\n.ivu-steps.ivu-steps-small .ivu-steps-item.ivu-steps-custom .ivu-steps-head-inner,\n.ivu-steps .ivu-steps-item.ivu-steps-custom .ivu-steps-head-inner {\n  width: inherit;\n  height: inherit;\n  line-height: inherit;\n  border-radius: 0;\n  border: 0;\n  background: none;\n}\n.ivu-steps-vertical .ivu-steps-item {\n  display: block;\n}\n.ivu-steps-vertical .ivu-steps-tail {\n  position: absolute;\n  left: 13px;\n  top: 0;\n  height: 100%;\n  width: 1px;\n  padding: 30px 0 4px 0;\n}\n.ivu-steps-vertical .ivu-steps-tail > i {\n  height: 100%;\n  width: 1px;\n}\n.ivu-steps-vertical .ivu-steps-tail > i:after {\n  height: 0;\n  width: 100%;\n}\n.ivu-steps-vertical .ivu-steps-status-finish .ivu-steps-tail > i:after {\n  height: 100%;\n}\n.ivu-steps-vertical .ivu-steps-head {\n  float: left;\n}\n.ivu-steps-vertical .ivu-steps-head-inner {\n  margin-right: 16px;\n}\n.ivu-steps-vertical .ivu-steps-main {\n  min-height: 47px;\n  overflow: hidden;\n  display: block;\n}\n.ivu-steps-vertical .ivu-steps-main .ivu-steps-title {\n  line-height: 26px;\n}\n.ivu-steps-vertical .ivu-steps-main .ivu-steps-content {\n  padding-bottom: 12px;\n  padding-left: 0;\n}\n.ivu-steps-vertical .ivu-steps-custom .ivu-steps-icon {\n  left: 4px;\n}\n.ivu-steps-vertical.ivu-steps-small .ivu-steps-custom .ivu-steps-icon {\n  left: 0;\n}\n.ivu-steps-vertical.ivu-steps-small .ivu-steps-tail {\n  position: absolute;\n  left: 9px;\n  top: 0;\n  padding: 22px 0 4px 0;\n}\n.ivu-steps-vertical.ivu-steps-small .ivu-steps-tail > i {\n  height: 100%;\n}\n.ivu-steps-vertical.ivu-steps-small .ivu-steps-title {\n  line-height: 18px;\n}\n.ivu-steps-horizontal.ivu-steps-hidden {\n  visibility: hidden;\n}\n.ivu-steps-horizontal .ivu-steps-content {\n  padding-left: 35px;\n}\n.ivu-steps-horizontal .ivu-steps-item:not(:first-child) .ivu-steps-head {\n  padding-left: 10px;\n  margin-left: -10px;\n}\n.ivu-modal {\n  width: auto;\n  margin: 0 auto;\n  position: relative;\n  outline: none;\n  top: 100px;\n}\n.ivu-modal-hidden {\n  display: none !important;\n}\n.ivu-modal-wrap {\n  position: fixed;\n  overflow: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.ivu-modal-wrap * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.ivu-modal-mask {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(55, 55, 55, 0.6);\n  height: 100%;\n}\n.ivu-modal-mask-hidden {\n  display: none;\n}\n.ivu-modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 0;\n  border-radius: 6px;\n  background-clip: padding-box;\n}\n.ivu-modal-header {\n  border-bottom: 1px solid #e3e8ee;\n  padding: 14px 16px;\n  line-height: 1;\n}\n.ivu-modal-header p,\n.ivu-modal-header-inner {\n  display: inline-block;\n  width: 100%;\n  height: 20px;\n  line-height: 20px;\n  font-size: 14px;\n  color: #464c5b;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ivu-modal-close {\n  font-size: 12px;\n  position: absolute;\n  right: 16px;\n  top: 8px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.ivu-modal-close .ivu-icon-ios-close-empty {\n  font-size: 31px;\n  color: #999;\n  transition: color 0.2s ease;\n  position: relative;\n  top: 1px;\n}\n.ivu-modal-close .ivu-icon-ios-close-empty:hover {\n  color: #444;\n}\n.ivu-modal-body {\n  padding: 16px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.ivu-modal-footer {\n  border-top: 1px solid #e3e8ee;\n  padding: 12px 18px 12px 18px;\n  text-align: right;\n}\n.ivu-modal-footer button + button {\n  margin-left: 8px;\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n.ivu-modal {\n    width: auto !important;\n    margin: 10px;\n}\n.vertical-center-modal .ivu-modal {\n    flex: 1;\n}\n}\n.ivu-modal-confirm {\n  padding: 0 4px;\n}\n.ivu-modal-confirm-head-title {\n  display: inline-block;\n  font-size: 14px;\n  color: #464c5b;\n  font-weight: 700;\n}\n.ivu-modal-confirm-body {\n  margin-top: 6px;\n  padding-left: 48px;\n  padding-top: 18px;\n  font-size: 12px;\n  color: #657180;\n  position: relative;\n}\n.ivu-modal-confirm-body-icon {\n  font-size: 36px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.ivu-modal-confirm-body-icon-info {\n  color: #3399ff;\n}\n.ivu-modal-confirm-body-icon-success {\n  color: #00cc66;\n}\n.ivu-modal-confirm-body-icon-warning {\n  color: #ff9900;\n}\n.ivu-modal-confirm-body-icon-error {\n  color: #ff5500;\n}\n.ivu-modal-confirm-body-icon-confirm {\n  color: #ff9900;\n}\n.ivu-modal-confirm-footer {\n  margin-top: 40px;\n  text-align: right;\n}\n.ivu-modal-confirm-footer button + button {\n  margin-left: 8px;\n  margin-bottom: 0;\n}\n.ivu-select {\n  display: inline-block;\n  width: 100%;\n  box-sizing: border-box;\n  vertical-align: middle;\n  color: #657180;\n  font-size: 14px;\n  position: relative;\n}\n.ivu-select-selection {\n  display: block;\n  box-sizing: border-box;\n  outline: none;\n  user-select: none;\n  cursor: pointer;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #d7dde4;\n  transition: all 0.2s ease-in-out;\n}\n.ivu-select-selection .ivu-select-arrow:nth-of-type(1) {\n  display: none;\n  cursor: pointer;\n}\n.ivu-select-selection:hover {\n  border-color: #5cadff;\n}\n.ivu-select-selection:hover .ivu-select-arrow:nth-of-type(1) {\n  display: inline-block;\n}\n.ivu-select-show-clear .ivu-select-selection:hover .ivu-select-arrow:nth-of-type(2) {\n  display: none;\n}\n.ivu-select-arrow {\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  line-height: 1;\n  margin-top: -7px;\n  font-size: 14px;\n  color: #9ea7b4;\n  transition: all 0.2s ease-in-out;\n}\n.ivu-select-visible .ivu-select-selection {\n  border-color: #5cadff;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(51, 153, 255, 0.2);\n}\n.ivu-select-visible .ivu-select-arrow:nth-of-type(2) {\n  transform: rotate(180deg);\n}\n.ivu-select-disabled .ivu-select-selection {\n  background-color: #f3f3f3;\n  opacity: 1;\n  cursor: not-allowed;\n  color: #ccc;\n}\n.ivu-select-disabled .ivu-select-selection:hover {\n  border-color: #dfe4e9;\n}\n.ivu-select-disabled .ivu-select-selection .ivu-select-arrow:nth-of-type(1) {\n  display: none;\n}\n.ivu-select-disabled .ivu-select-selection:hover {\n  border-color: #d7dde4;\n  box-shadow: none;\n}\n.ivu-select-disabled .ivu-select-selection:hover .ivu-select-arrow:nth-of-type(2) {\n  display: inline-block;\n}\n.ivu-select-single .ivu-select-selection {\n  height: 32px;\n  position: relative;\n}\n.ivu-select-single .ivu-select-selection .ivu-select-placeholder {\n  color: #c3cbd6;\n}\n.ivu-select-single .ivu-select-selection .ivu-select-placeholder,\n.ivu-select-single .ivu-select-selection .ivu-select-selected-value {\n  display: block;\n  height: 30px;\n  line-height: 30px;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-left: 8px;\n  padding-right: 24px;\n}\n.ivu-select-large.ivu-select-single .ivu-select-selection {\n  height: 36px;\n}\n.ivu-select-large.ivu-select-single .ivu-select-selection .ivu-select-placeholder,\n.ivu-select-large.ivu-select-single .ivu-select-selection .ivu-select-selected-value {\n  height: 34px;\n  line-height: 34px;\n  font-size: 14px;\n}\n.ivu-select-small.ivu-select-single .ivu-select-selection {\n  height: 24px;\n  border-radius: 3px;\n}\n.ivu-select-small.ivu-select-single .ivu-select-selection .ivu-select-placeholder,\n.ivu-select-small.ivu-select-single .ivu-select-selection .ivu-select-selected-value {\n  height: 22px;\n  line-height: 22px;\n}\n.ivu-select-multiple .ivu-select-selection {\n  padding: 0 24px 0 4px;\n  min-height: 32px;\n}\n.ivu-select-multiple .ivu-select-selection .ivu-select-placeholder {\n  display: block;\n  height: 30px;\n  line-height: 30px;\n  color: #c3cbd6;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-left: 8px;\n  padding-right: 22px;\n}\n.ivu-select-input {\n  display: inline-block;\n  height: 32px;\n  line-height: 32px;\n  padding: 0 24px 0 8px;\n  font-size: 12px;\n  outline: none;\n  border: none;\n  box-sizing: border-box;\n  color: #657180;\n  background-color: transparent;\n  position: relative;\n  cursor: pointer;\n}\n.ivu-select-input::-moz-placeholder {\n  color: #c3cbd6;\n  opacity: 1;\n}\n.ivu-select-input:-ms-input-placeholder {\n  color: #c3cbd6;\n}\n.ivu-select-input::-webkit-input-placeholder {\n  color: #c3cbd6;\n}\n.ivu-select-single .ivu-select-input {\n  width: 100%;\n}\n.ivu-select-large .ivu-select-input {\n  font-size: 14px;\n  height: 36px;\n}\n.ivu-select-small .ivu-select-input {\n  height: 24px;\n}\n.ivu-select-multiple .ivu-select-input {\n  height: 29px;\n  line-height: 32px;\n  padding: 0 0 0 6px;\n}\n.ivu-select-not-found {\n  text-align: center;\n  color: #c3cbd6;\n}\n.ivu-select-multiple .ivu-tag {\n  margin: 3px 4px 2px 0;\n}\n.ivu-select-item {\n  margin: 0;\n  padding: 7px 16px;\n  clear: both;\n  color: #657180;\n  font-size: 12px !important;\n  white-space: nowrap;\n  list-style: none;\n  cursor: pointer;\n  transition: background 0.2s ease-in-out;\n}\n.ivu-select-item:hover {\n  background: #f3f3f3;\n}\n.ivu-select-item-focus {\n  background: #f3f3f3;\n}\n.ivu-select-item-disabled {\n  color: #c3cbd6;\n  cursor: not-allowed;\n}\n.ivu-select-item-disabled:hover {\n  color: #c3cbd6;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.ivu-select-item-selected,\n.ivu-select-item-selected:hover {\n  color: #fff;\n  background: rgba(51, 153, 255, 0.9);\n}\n.ivu-select-item-selected.ivu-select-item-focus {\n  background: rgba(45, 135, 225, 0.91);\n}\n.ivu-select-item-divided {\n  margin-top: 5px;\n  border-top: 1px solid #e3e8ee;\n}\n.ivu-select-item-divided:before {\n  content: '';\n  height: 5px;\n  display: block;\n  margin: 0 -16px;\n  background-color: #fff;\n  position: relative;\n  top: -7px;\n}\n.ivu-select-large .ivu-select-item {\n  padding: 7px 16px 8px;\n  font-size: 14px !important;\n}\n.ivu-select-multiple .ivu-select-item-selected {\n  color: rgba(51, 153, 255, 0.9);\n  background: #fff;\n}\n.ivu-select-multiple .ivu-select-item-focus,\n.ivu-select-multiple .ivu-select-item-selected:hover {\n  background: #f3f3f3;\n}\n.ivu-select-multiple .ivu-select-item-selected.ivu-select-multiple .ivu-select-item-focus {\n  color: rgba(45, 135, 225, 0.91);\n  background: #fff;\n}\n.ivu-select-multiple .ivu-select-item-selected:after {\n  display: inline-block;\n  font-family: \"Ionicons\";\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  text-rendering: auto;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  float: right;\n  font-size: 24px;\n  content: '\\F3FD';\n  color: rgba(51, 153, 255, 0.9);\n}\n.ivu-select-group {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.ivu-select-group-title {\n  padding-left: 8px;\n  font-size: 12px;\n  color: #999;\n  height: 30px;\n  line-height: 30px;\n}\n.ivu-select-dropdown {\n  width: inherit;\n  max-height: 200px;\n  overflow: auto;\n  margin: 5px 0;\n  padding: 5px 0;\n  background-color: #fff;\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  z-index: 900;\n}\n.ivu-tooltip {\n  display: inline-block;\n}\n.ivu-tooltip-rel {\n  display: inline-block;\n  position: relative;\n}\n.ivu-tooltip-popper {\n  display: block;\n  visibility: visible;\n  font-size: 12px;\n  line-height: 1.5;\n  position: absolute;\n  z-index: 1060;\n}\n.ivu-tooltip-popper[x-placement^=\"top\"] {\n  padding: 5px 0 8px 0;\n}\n.ivu-tooltip-popper[x-placement^=\"right\"] {\n  padding: 0 5px 0 8px;\n}\n.ivu-tooltip-popper[x-placement^=\"bottom\"] {\n  padding: 8px 0 5px 0;\n}\n.ivu-tooltip-popper[x-placement^=\"left\"] {\n  padding: 0 8px 0 5px;\n}\n.ivu-tooltip-popper[x-placement^=\"top\"] .ivu-tooltip-arrow {\n  bottom: 3px;\n  border-width: 5px 5px 0;\n  border-top-color: rgba(70, 76, 91, 0.9);\n}\n.ivu-tooltip-popper[x-placement=\"top\"] .ivu-tooltip-arrow {\n  left: 50%;\n  margin-left: -5px;\n}\n.ivu-tooltip-popper[x-placement=\"top-start\"] .ivu-tooltip-arrow {\n  left: 16px;\n}\n.ivu-tooltip-popper[x-placement=\"top-end\"] .ivu-tooltip-arrow {\n  right: 16px;\n}\n.ivu-tooltip-popper[x-placement^=\"right\"] .ivu-tooltip-arrow {\n  left: 3px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: rgba(70, 76, 91, 0.9);\n}\n.ivu-tooltip-popper[x-placement=\"right\"] .ivu-tooltip-arrow {\n  top: 50%;\n  margin-top: -5px;\n}\n.ivu-tooltip-popper[x-placement=\"right-start\"] .ivu-tooltip-arrow {\n  top: 8px;\n}\n.ivu-tooltip-popper[x-placement=\"right-end\"] .ivu-tooltip-arrow {\n  bottom: 8px;\n}\n.ivu-tooltip-popper[x-placement^=\"left\"] .ivu-tooltip-arrow {\n  right: 3px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: rgba(70, 76, 91, 0.9);\n}\n.ivu-tooltip-popper[x-placement=\"left\"] .ivu-tooltip-arrow {\n  top: 50%;\n  margin-top: -5px;\n}\n.ivu-tooltip-popper[x-placement=\"left-start\"] .ivu-tooltip-arrow {\n  top: 8px;\n}\n.ivu-tooltip-popper[x-placement=\"left-end\"] .ivu-tooltip-arrow {\n  bottom: 8px;\n}\n.ivu-tooltip-popper[x-placement^=\"bottom\"] .ivu-tooltip-arrow {\n  top: 3px;\n  border-width: 0 5px 5px;\n  border-bottom-color: rgba(70, 76, 91, 0.9);\n}\n.ivu-tooltip-popper[x-placement=\"bottom\"] .ivu-tooltip-arrow {\n  left: 50%;\n  margin-left: -5px;\n}\n.ivu-tooltip-popper[x-placement=\"bottom-start\"] .ivu-tooltip-arrow {\n  left: 16px;\n}\n.ivu-tooltip-popper[x-placement=\"bottom-end\"] .ivu-tooltip-arrow {\n  right: 16px;\n}\n.ivu-tooltip-inner {\n  max-width: 250px;\n  min-height: 34px;\n  padding: 8px 12px;\n  color: #fff;\n  text-align: left;\n  text-decoration: none;\n  background-color: rgba(70, 76, 91, 0.9);\n  border-radius: 4px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  white-space: nowrap;\n}\n.ivu-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.ivu-poptip {\n  display: inline-block;\n}\n.ivu-poptip-rel {\n  display: inline-block;\n  position: relative;\n}\n.ivu-poptip-title {\n  margin: 0;\n  padding: 8px 16px;\n  position: relative;\n}\n.ivu-poptip-title:after {\n  content: '';\n  display: block;\n  height: 1px;\n  position: absolute;\n  left: 8px;\n  right: 8px;\n  bottom: 0;\n  background-color: #e3e8ee;\n}\n.ivu-poptip-title-inner {\n  color: #464c5b;\n  font-size: 14px;\n}\n.ivu-poptip-body {\n  padding: 8px 16px;\n}\n.ivu-poptip-body-content {\n  overflow: auto;\n}\n.ivu-poptip-body-content-inner {\n  color: #657180;\n}\n.ivu-poptip-inner {\n  width: 100%;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-radius: 4px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  white-space: nowrap;\n}\n.ivu-poptip-popper {\n  min-width: 150px;\n  display: block;\n  visibility: visible;\n  font-size: 12px;\n  line-height: 1.5;\n  position: absolute;\n  z-index: 1060;\n}\n.ivu-poptip-popper[x-placement^=\"top\"] {\n  padding: 5px 0 8px 0;\n}\n.ivu-poptip-popper[x-placement^=\"right\"] {\n  padding: 0 5px 0 8px;\n}\n.ivu-poptip-popper[x-placement^=\"bottom\"] {\n  padding: 8px 0 5px 0;\n}\n.ivu-poptip-popper[x-placement^=\"left\"] {\n  padding: 0 8px 0 5px;\n}\n.ivu-poptip-popper[x-placement^=\"top\"] .ivu-poptip-arrow {\n  bottom: 3px;\n  border-width: 5px 5px 0;\n  border-top-color: rgba(217, 217, 217, 0.5);\n}\n.ivu-poptip-popper[x-placement=\"top\"] .ivu-poptip-arrow {\n  left: 50%;\n  margin-left: -5px;\n}\n.ivu-poptip-popper[x-placement=\"top-start\"] .ivu-poptip-arrow {\n  left: 16px;\n}\n.ivu-poptip-popper[x-placement=\"top-end\"] .ivu-poptip-arrow {\n  right: 16px;\n}\n.ivu-poptip-popper[x-placement^=\"right\"] .ivu-poptip-arrow {\n  left: 3px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: rgba(217, 217, 217, 0.5);\n}\n.ivu-poptip-popper[x-placement=\"right\"] .ivu-poptip-arrow {\n  top: 50%;\n  margin-top: -5px;\n}\n.ivu-poptip-popper[x-placement=\"right-start\"] .ivu-poptip-arrow {\n  top: 8px;\n}\n.ivu-poptip-popper[x-placement=\"right-end\"] .ivu-poptip-arrow {\n  bottom: 8px;\n}\n.ivu-poptip-popper[x-placement^=\"left\"] .ivu-poptip-arrow {\n  right: 3px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: rgba(217, 217, 217, 0.5);\n}\n.ivu-poptip-popper[x-placement=\"left\"] .ivu-poptip-arrow {\n  top: 50%;\n  margin-top: -5px;\n}\n.ivu-poptip-popper[x-placement=\"left-start\"] .ivu-poptip-arrow {\n  top: 8px;\n}\n.ivu-poptip-popper[x-placement=\"left-end\"] .ivu-poptip-arrow {\n  bottom: 8px;\n}\n.ivu-poptip-popper[x-placement^=\"bottom\"] .ivu-poptip-arrow {\n  top: 3px;\n  border-width: 0 5px 5px;\n  border-bottom-color: rgba(217, 217, 217, 0.5);\n}\n.ivu-poptip-popper[x-placement=\"bottom\"] .ivu-poptip-arrow {\n  left: 50%;\n  margin-left: -5px;\n}\n.ivu-poptip-popper[x-placement=\"bottom-start\"] .ivu-poptip-arrow {\n  left: 16px;\n}\n.ivu-poptip-popper[x-placement=\"bottom-end\"] .ivu-poptip-arrow {\n  right: 16px;\n}\n.ivu-poptip-popper[x-placement^=\"top\"] .ivu-poptip-arrow:after {\n  content: \" \";\n  bottom: 1px;\n  margin-left: -5px;\n  border-bottom-width: 0;\n  border-top-color: #fff;\n}\n.ivu-poptip-popper[x-placement^=\"right\"] .ivu-poptip-arrow:after {\n  content: \" \";\n  left: 1px;\n  bottom: -5px;\n  border-left-width: 0;\n  border-right-color: #fff;\n}\n.ivu-poptip-popper[x-placement^=\"bottom\"] .ivu-poptip-arrow:after {\n  content: \" \";\n  top: 1px;\n  margin-left: -5px;\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n.ivu-poptip-popper[x-placement^=\"left\"] .ivu-poptip-arrow:after {\n  content: \" \";\n  right: 1px;\n  border-right-width: 0;\n  border-left-color: #fff;\n  bottom: -5px;\n}\n.ivu-poptip-arrow,\n.ivu-poptip-arrow:after {\n  display: block;\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-color: transparent;\n  border-style: solid;\n}\n.ivu-poptip-arrow {\n  border-width: 6px;\n}\n.ivu-poptip-arrow:after {\n  content: \"\";\n  border-width: 5px;\n}\n.ivu-poptip-confirm .ivu-poptip-popper {\n  max-width: 300px;\n}\n.ivu-poptip-confirm .ivu-poptip-inner {\n  white-space: normal;\n}\n.ivu-poptip-confirm .ivu-poptip-body {\n  padding: 16px 16px 8px;\n}\n.ivu-poptip-confirm .ivu-poptip-body .ivu-icon {\n  font-size: 16px;\n  color: #ff9900;\n  line-height: 18px;\n  position: absolute;\n}\n.ivu-poptip-confirm .ivu-poptip-body-message {\n  padding-left: 20px;\n}\n.ivu-poptip-confirm .ivu-poptip-footer {\n  text-align: right;\n  padding: 8px 16px 16px;\n}\n.ivu-poptip-confirm .ivu-poptip-footer button {\n  margin-left: 4px;\n}\n.ivu-input {\n  display: inline-block;\n  width: 100%;\n  height: 32px;\n  line-height: 1.5;\n  padding: 4px 7px;\n  font-size: 12px;\n  border: 1px solid #d7dde4;\n  border-radius: 4px;\n  color: #657180;\n  background-color: #fff;\n  background-image: none;\n  position: relative;\n  cursor: text;\n  transition: border 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n}\n.ivu-input::-moz-placeholder {\n  color: #c3cbd6;\n  opacity: 1;\n}\n.ivu-input:-ms-input-placeholder {\n  color: #c3cbd6;\n}\n.ivu-input::-webkit-input-placeholder {\n  color: #c3cbd6;\n}\n.ivu-input:hover {\n  border-color: #5cadff;\n}\n.ivu-input:focus {\n  border-color: #5cadff;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(51, 153, 255, 0.2);\n}\n.ivu-input[disabled],\nfieldset[disabled] .ivu-input {\n  background-color: #f3f3f3;\n  opacity: 1;\n  cursor: not-allowed;\n  color: #ccc;\n}\n.ivu-input[disabled]:hover,\nfieldset[disabled] .ivu-input:hover {\n  border-color: #dfe4e9;\n}\ntextarea.ivu-input {\n  max-width: 100%;\n  height: auto;\n  vertical-align: bottom;\n  font-size: 14px;\n}\n.ivu-input-large {\n  font-size: 14px;\n  padding: 6px 7px;\n  height: 36px;\n}\n.ivu-input-small {\n  padding: 1px 7px;\n  height: 24px;\n  border-radius: 3px;\n}\n.ivu-input-wrapper {\n  display: inline-block;\n  width: 100%;\n  position: relative;\n}\n.ivu-input-icon {\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n  font-size: 16px;\n  text-align: center;\n  color: #9ea7b4;\n  position: absolute;\n  right: 0;\n  z-index: 1;\n}\n.ivu-input-icon + .ivu-input {\n  padding-right: 32px;\n}\n.ivu-input-wrapper-large .ivu-input-icon {\n  font-size: 18px;\n  height: 36px;\n  line-height: 36px;\n}\n.ivu-input-wrapper-small .ivu-input-icon {\n  width: 24px;\n  font-size: 14px;\n  height: 24px;\n  line-height: 24px;\n}\n.ivu-input-wrapper-small .ivu-input-icon + .ivu-input {\n  padding-right: 24px;\n}\n.ivu-input-group {\n  display: table;\n  width: 100%;\n  border-collapse: separate;\n  position: relative;\n  font-size: 12px;\n}\n.ivu-input-group-large {\n  font-size: 14px;\n}\n.ivu-input-group[class*=\"col-\"] {\n  float: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n.ivu-input-group > [class*=\"col-\"] {\n  padding-right: 8px;\n}\n.ivu-input-group-prepend,\n.ivu-input-group-append,\n.ivu-input-group > .ivu-input {\n  display: table-cell;\n}\n.ivu-input-group-prepend:not(:first-child):not(:last-child),\n.ivu-input-group-append:not(:first-child):not(:last-child),\n.ivu-input-group > .ivu-input:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.ivu-input-group-prepend .ivu-btn,\n.ivu-input-group-append .ivu-btn {\n  border-color: transparent;\n  background-color: transparent;\n  color: inherit;\n  margin: -5px -7px;\n}\n.ivu-input-group-prepend,\n.ivu-input-group-append {\n  width: 1px;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.ivu-input-group .ivu-input {\n  width: 100%;\n  float: left;\n  margin-bottom: 0;\n  position: relative;\n  z-index: 2;\n}\n.ivu-input-group-prepend,\n.ivu-input-group-append {\n  padding: 4px 7px;\n  font-size: inherit;\n  font-weight: normal;\n  line-height: 1;\n  color: #657180;\n  text-align: center;\n  background-color: #eee;\n  border: 1px solid #d7dde4;\n  border-radius: 6px;\n}\n.ivu-input-group-prepend .ivu-select,\n.ivu-input-group-append .ivu-select {\n  margin: -5px -7px;\n}\n.ivu-input-group-prepend .ivu-select-selection,\n.ivu-input-group-append .ivu-select-selection {\n  background-color: inherit;\n  margin: -1px;\n  border: 1px solid transparent;\n}\n.ivu-input-group-prepend .ivu-select-visible .ivu-select-selection,\n.ivu-input-group-append .ivu-select-visible .ivu-select-selection {\n  box-shadow: none;\n}\n.ivu-input-group > span > .ivu-input:first-child,\n.ivu-input-group > .ivu-input:first-child,\n.ivu-input-group-prepend {\n  border-bottom-right-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n.ivu-input-group > span > .ivu-input:first-child .ivu--select .ivu--select-selection,\n.ivu-input-group > .ivu-input:first-child .ivu--select .ivu--select-selection,\n.ivu-input-group-prepend .ivu--select .ivu--select-selection {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.ivu-input-group-prepend {\n  border-right: 0;\n}\n.ivu-input-group-append {\n  border-left: 0;\n}\n.ivu-input-group > .ivu-input:last-child,\n.ivu-input-group-append {\n  border-bottom-left-radius: 0 !important;\n  border-top-left-radius: 0 !important;\n}\n.ivu-input-group > .ivu-input:last-child .ivu--select .ivu--select-selection,\n.ivu-input-group-append .ivu--select .ivu--select-selection {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.ivu-input-group-large .ivu-input,\n.ivu-input-group-large > .ivu-input-group-prepend,\n.ivu-input-group-large > .ivu-input-group-append {\n  font-size: 14px;\n  padding: 6px 7px;\n  height: 36px;\n}\n.ivu-input-group-small .ivu-input,\n.ivu-input-group-small > .ivu-input-group-prepend,\n.ivu-input-group-small > .ivu-input-group-append {\n  padding: 1px 7px;\n  height: 24px;\n  border-radius: 3px;\n}\n.ivu-slider-wrap {\n  width: 100%;\n  height: 4px;\n  margin: 16px 0;\n  background-color: #e3e8ee;\n  border-radius: 3px;\n  vertical-align: middle;\n  position: relative;\n  cursor: pointer;\n}\n.ivu-slider-button-wrap {\n  width: 18px;\n  height: 18px;\n  text-align: center;\n  background-color: transparent;\n  position: absolute;\n  top: -5px;\n  transform: translateX(-50%);\n}\n.ivu-slider-button-wrap .ivu-tooltip {\n  display: block;\n  user-select: none;\n}\n.ivu-slider-button {\n  width: 12px;\n  height: 12px;\n  border: 2px solid #5cadff;\n  border-radius: 50%;\n  background-color: #fff;\n  transition: all 0.2s linear;\n}\n.ivu-slider-button:hover,\n.ivu-slider-button-dragging {\n  border-color: #3399ff;\n  transform: scale(1.5);\n}\n.ivu-slider-button:hover {\n  cursor: grab;\n}\n.ivu-slider-button-dragging,\n.ivu-slider-button-dragging:hover {\n  cursor: grabbing;\n}\n.ivu-slider-bar {\n  height: 4px;\n  background: #5cadff;\n  border-radius: 3px;\n  position: absolute;\n}\n.ivu-slider-stop {\n  position: absolute;\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background-color: #ccc;\n  transform: translateX(-50%);\n}\n.ivu-slider-disabled {\n  cursor: not-allowed;\n}\n.ivu-slider-disabled .ivu-slider-wrap {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n.ivu-slider-disabled .ivu-slider-bar {\n  background-color: #ccc;\n}\n.ivu-slider-disabled .ivu-slider-button {\n  border-color: #ccc;\n}\n.ivu-slider-disabled .ivu-slider-button:hover,\n.ivu-slider-disabled .ivu-slider-button-dragging {\n  border-color: #ccc;\n}\n.ivu-slider-disabled .ivu-slider-button:hover {\n  cursor: not-allowed;\n}\n.ivu-slider-disabled .ivu-slider-button-dragging,\n.ivu-slider-disabled .ivu-slider-button-dragging:hover {\n  cursor: not-allowed;\n}\n.ivu-slider-input .ivu-slider-wrap {\n  width: auto;\n  margin-right: 100px;\n}\n.ivu-slider-input .ivu-input-number {\n  float: right;\n  margin-top: -14px;\n}\n.ivu-cascader {\n  position: relative;\n}\n.ivu-cascader .ivu-input {\n  display: block;\n  cursor: pointer;\n}\n.ivu-cascader-disabled .ivu-input {\n  cursor: not-allowed;\n}\n.ivu-cascader .ivu-cascader-arrow:nth-of-type(1) {\n  display: none;\n  cursor: pointer;\n}\n.ivu-cascader:hover .ivu-cascader-arrow:nth-of-type(1) {\n  display: inline-block;\n}\n.ivu-cascader-show-clear:hover .ivu-cascader-arrow:nth-of-type(2) {\n  display: none;\n}\n.ivu-cascader-arrow {\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  line-height: 1;\n  margin-top: -7px;\n  font-size: 14px;\n  color: #9ea7b4;\n  transition: all 0.2s ease-in-out;\n}\n.ivu-cascader-visible .ivu-cascader-arrow:nth-of-type(2) {\n  transform: rotate(180deg);\n}\n.ivu-cascader .ivu-select-dropdown {\n  width: auto;\n  padding: 0;\n  white-space: nowrap;\n  overflow: visible;\n}\n.ivu-cascader .ivu-cascader-menu-item {\n  margin: 0;\n  padding: 7px 16px;\n  clear: both;\n  color: #657180;\n  font-size: 12px !important;\n  white-space: nowrap;\n  list-style: none;\n  cursor: pointer;\n  transition: background 0.2s ease-in-out;\n}\n.ivu-cascader .ivu-cascader-menu-item:hover {\n  background: #f3f3f3;\n}\n.ivu-cascader .ivu-cascader-menu-item-focus {\n  background: #f3f3f3;\n}\n.ivu-cascader .ivu-cascader-menu-item-disabled {\n  color: #c3cbd6;\n  cursor: not-allowed;\n}\n.ivu-cascader .ivu-cascader-menu-item-disabled:hover {\n  color: #c3cbd6;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.ivu-cascader .ivu-cascader-menu-item-selected,\n.ivu-cascader .ivu-cascader-menu-item-selected:hover {\n  color: #fff;\n  background: rgba(51, 153, 255, 0.9);\n}\n.ivu-cascader .ivu-cascader-menu-item-selected.ivu-cascader .ivu-cascader-menu-item-focus {\n  background: rgba(45, 135, 225, 0.91);\n}\n.ivu-cascader .ivu-cascader-menu-item-divided {\n  margin-top: 5px;\n  border-top: 1px solid #e3e8ee;\n}\n.ivu-cascader .ivu-cascader-menu-item-divided:before {\n  content: '';\n  height: 5px;\n  display: block;\n  margin: 0 -16px;\n  background-color: #fff;\n  position: relative;\n  top: -7px;\n}\n.ivu-cascader .ivu-cascader-large .ivu-cascader-menu-item {\n  padding: 7px 16px 8px;\n  font-size: 14px !important;\n}\n.ivu-cascader-menu {\n  display: inline-block;\n  min-width: 100px;\n  height: 180px;\n  margin: 0;\n  padding: 5px 0 !important;\n  vertical-align: top;\n  list-style: none;\n  border-right: 1px solid #e3e8ee;\n  overflow: auto;\n}\n.ivu-cascader-menu:last-child {\n  border-right-color: transparent;\n  margin-right: -1px;\n}\n.ivu-cascader-menu .ivu-cascader-menu-item {\n  position: relative;\n  padding-right: 24px;\n  transition: all 0.2s ease-in-out;\n}\n.ivu-cascader-menu .ivu-cascader-menu-item i {\n  font-size: 12px;\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  margin-top: -6px;\n}\n.ivu-cascader-menu .ivu-cascader-menu-item-active {\n  background-color: #f3f3f3;\n  color: #3399ff;\n}\n.ivu-transfer {\n  position: relative;\n  line-height: 1.5;\n}\n.ivu-transfer-list {\n  display: inline-block;\n  width: 180px;\n  height: 210px;\n  font-size: 12px;\n  vertical-align: middle;\n  position: relative;\n  padding-top: 35px;\n}\n.ivu-transfer-list-with-footer {\n  padding-bottom: 35px;\n}\n.ivu-transfer-list-header {\n  padding: 8px 16px;\n  background: #f9fafc;\n  color: #657180;\n  border: 1px solid #d7dde4;\n  border-bottom: 1px solid #e3e8ee;\n  border-radius: 6px 6px 0 0;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.ivu-transfer-list-header > span {\n  padding-left: 4px;\n}\n.ivu-transfer-list-header-count {\n  margin: 0 !important;\n  float: right;\n}\n.ivu-transfer-list-body {\n  height: 100%;\n  border: 1px solid #d7dde4;\n  border-top: none;\n  border-radius: 0 0 6px 6px;\n  position: relative;\n  overflow: hidden;\n}\n.ivu-transfer-list-body-with-search {\n  padding-top: 34px;\n}\n.ivu-transfer-list-body-with-footer {\n  border-radius: 0;\n}\n.ivu-transfer-list-content {\n  height: 100%;\n  padding: 4px 0;\n  overflow: auto;\n}\n.ivu-transfer-list-content-item {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.ivu-transfer-list-content-item > span {\n  padding-left: 4px;\n}\n.ivu-transfer-list-content-not-found {\n  display: none;\n  text-align: center;\n  color: #c3cbd6;\n}\nli.ivu-transfer-list-content-not-found:only-child {\n  display: block;\n}\n.ivu-transfer-list-body-with-search .ivu-transfer-list-content {\n  padding: 6px 0 0;\n}\n.ivu-transfer-list-body-search-wrapper {\n  padding: 8px 8px 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.ivu-transfer-list-search {\n  position: relative;\n}\n.ivu-transfer-list-footer {\n  border: 1px solid #d7dde4;\n  border-top: none;\n  border-radius: 0 0 6px 6px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  zoom: 1;\n}\n.ivu-transfer-list-footer:before,\n.ivu-transfer-list-footer:after {\n  content: \"\";\n  display: table;\n}\n.ivu-transfer-list-footer:after {\n  clear: both;\n  visibility: hidden;\n  font-size: 0;\n  height: 0;\n}\n.ivu-transfer-operation {\n  display: inline-block;\n  overflow: hidden;\n  margin: 0 16px;\n  vertical-align: middle;\n}\n.ivu-transfer-operation .ivu-btn {\n  display: block;\n  min-width: 24px;\n}\n.ivu-transfer-operation .ivu-btn:first-child {\n  margin-bottom: 12px;\n}\n.ivu-transfer-list-content-item {\n  margin: 0;\n  padding: 7px 16px;\n  clear: both;\n  color: #657180;\n  font-size: 12px !important;\n  white-space: nowrap;\n  list-style: none;\n  cursor: pointer;\n  transition: background 0.2s ease-in-out;\n}\n.ivu-transfer-list-content-item:hover {\n  background: #f3f3f3;\n}\n.ivu-transfer-list-content-item-focus {\n  background: #f3f3f3;\n}\n.ivu-transfer-list-content-item-disabled {\n  color: #c3cbd6;\n  cursor: not-allowed;\n}\n.ivu-transfer-list-content-item-disabled:hover {\n  color: #c3cbd6;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.ivu-transfer-list-content-item-selected,\n.ivu-transfer-list-content-item-selected:hover {\n  color: #fff;\n  background: rgba(51, 153, 255, 0.9);\n}\n.ivu-transfer-list-content-item-selected.ivu-transfer-list-content-item-focus {\n  background: rgba(45, 135, 225, 0.91);\n}\n.ivu-transfer-list-content-item-divided {\n  margin-top: 5px;\n  border-top: 1px solid #e3e8ee;\n}\n.ivu-transfer-list-content-item-divided:before {\n  content: '';\n  height: 5px;\n  display: block;\n  margin: 0 -16px;\n  background-color: #fff;\n  position: relative;\n  top: -7px;\n}\n.ivu-transfer-large .ivu-transfer-list-content-item {\n  padding: 7px 16px 8px;\n  font-size: 14px !important;\n}\n.ivu-table {\n  width: inherit;\n  height: 100%;\n  max-width: 100%;\n  overflow: hidden;\n  color: #657180;\n  font-size: 12px;\n  background-color: #fff;\n  box-sizing: border-box;\n}\n.ivu-table-wrapper {\n  position: relative;\n  border: 1px solid #d7dde4;\n  border-bottom: 0;\n  border-right: 0;\n}\n.ivu-table-hide {\n  opacity: 0;\n}\n.ivu-table:before {\n  content: '';\n  width: 100%;\n  height: 1px;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  background-color: #d7dde4;\n  z-index: 1;\n}\n.ivu-table:after {\n  content: '';\n  width: 1px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: #d7dde4;\n  z-index: 3;\n}\n.ivu-table-title,\n.ivu-table-footer {\n  height: 48px;\n  line-height: 48px;\n  border-bottom: 1px solid #e3e8ee;\n}\n.ivu-table-footer {\n  border-bottom: none;\n}\n.ivu-table-header {\n  overflow: hidden;\n}\n.ivu-table-body {\n  overflow: auto;\n  position: relative;\n}\n.ivu-table-with-fixed-top.ivu-table-with-footer .ivu-table-footer {\n  border-top: 1px solid #d7dde4;\n}\n.ivu-table-with-fixed-top.ivu-table-with-footer tbody tr:last-child td {\n  border-bottom: none;\n}\n.ivu-table th,\n.ivu-table td {\n  min-width: 0;\n  height: 48px;\n  box-sizing: border-box;\n  text-align: left;\n  text-overflow: ellipsis;\n  vertical-align: middle;\n  border-bottom: 1px solid #e3e8ee;\n}\n.ivu-table th {\n  height: 40px;\n  white-space: nowrap;\n  overflow: hidden;\n  background-color: #f5f7f9;\n}\n.ivu-table td {\n  background-color: #fff;\n  transition: background-color 0.2s ease-in-out;\n}\nth.ivu-table-column-left,\ntd.ivu-table-column-left {\n  text-align: left;\n}\nth.ivu-table-column-center,\ntd.ivu-table-column-center {\n  text-align: center;\n}\nth.ivu-table-column-right,\ntd.ivu-table-column-right {\n  text-align: right;\n}\n.ivu-table table {\n  table-layout: fixed;\n}\n.ivu-table-border th,\n.ivu-table-border td {\n  border-right: 1px solid #e3e8ee;\n}\n.ivu-table-cell {\n  padding-left: 18px;\n  padding-right: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal;\n  word-break: break-all;\n  box-sizing: border-box;\n}\n.ivu-table-hidden {\n  visibility: hidden;\n}\nth .ivu-table-cell {\n  display: inline-block;\n  word-wrap: normal;\n  vertical-align: middle;\n}\n.ivu-table-stripe .ivu-table-body tr:nth-child(2n) td,\n.ivu-table-stripe .ivu-table-fixed-body tr:nth-child(2n) td {\n  background-color: #f5f7f9;\n}\ntr.ivu-table-row-hover td {\n  background-color: #ebf7ff;\n}\n.ivu-table-large {\n  font-size: 14px;\n}\n.ivu-table-large th {\n  height: 48px;\n}\n.ivu-table-large td {\n  height: 60px;\n}\n.ivu-table-large-title,\n.ivu-table-large-footer {\n  height: 60px;\n  line-height: 60px;\n}\n.ivu-table-small th {\n  height: 32px;\n}\n.ivu-table-small td {\n  height: 40px;\n}\n.ivu-table-small-title,\n.ivu-table-small-footer {\n  height: 40px;\n  line-height: 40px;\n}\n.ivu-table-row-highlight td,\ntr.ivu-table-row-highlight.ivu-table-row-hover td,\n.ivu-table-stripe .ivu-table-body tr.ivu-table-row-highlight:nth-child(2n) td,\n.ivu-table-stripe .ivu-table-fixed-body tr.ivu-table-row-highlight:nth-child(2n) td {\n  background-color: #ebf7ff;\n}\n.ivu-table-fixed,\n.ivu-table-fixed-right {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-shadow: 2px 0 6px -2px rgba(0, 0, 0, 0.2);\n}\n.ivu-table-fixed::before,\n.ivu-table-fixed-right::before {\n  content: '';\n  width: 100%;\n  height: 1px;\n  background-color: #d7dde4;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  z-index: 4;\n}\n.ivu-table-fixed-right {\n  top: 0;\n  left: auto;\n  right: 0;\n  box-shadow: -2px 0 6px -2px rgba(0, 0, 0, 0.2);\n}\n.ivu-table-fixed-header {\n  overflow: hidden;\n}\n.ivu-table-fixed-body {\n  overflow: hidden;\n  position: relative;\n  z-index: 3;\n}\n.ivu-table-fixed-shadow {\n  width: 1px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  box-shadow: 1px 0 6px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  z-index: 1;\n}\n.ivu-table-sort {\n  display: inline-block;\n  width: 8px;\n  height: 12px;\n  margin-left: 4px;\n  margin-top: -1px;\n  vertical-align: middle;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n}\n.ivu-table-sort i {\n  display: block;\n  height: 6px;\n  line-height: 6px;\n  overflow: hidden;\n  position: absolute;\n  color: #c3cbd6;\n  transition: color 0.2s ease-in-out;\n}\n.ivu-table-sort i:hover {\n  color: inherit;\n}\n.ivu-table-sort i.on {\n  color: #3399ff;\n}\n.ivu-table-sort i:first-child {\n  top: 0;\n}\n.ivu-table-sort i:last-child {\n  bottom: 0;\n}\n.ivu-table-filter {\n  display: inline-block;\n  cursor: pointer;\n  position: relative;\n}\n.ivu-table-filter i {\n  color: #c3cbd6;\n  transition: color 0.2s ease-in-out;\n}\n.ivu-table-filter i:hover {\n  color: inherit;\n}\n.ivu-table-filter i.on {\n  color: #3399ff;\n}\n.ivu-table-filter-list {\n  padding: 8px 0 0;\n}\n.ivu-table-filter-list-item {\n  padding: 0 12px 8px;\n}\n.ivu-table-filter-list-item .ivu-checkbox-wrapper + .ivu-checkbox-wrapper {\n  margin: 0;\n}\n.ivu-table-filter-list-item label {\n  display: block;\n  margin-bottom: 4px;\n}\n.ivu-table-filter-list-item label > span {\n  margin-right: 4px;\n}\n.ivu-table-filter-list ul {\n  padding-bottom: 8px;\n}\n.ivu-table-filter-list .ivu-table-filter-select-item {\n  margin: 0;\n  padding: 7px 16px;\n  clear: both;\n  color: #657180;\n  font-size: 12px !important;\n  white-space: nowrap;\n  list-style: none;\n  cursor: pointer;\n  transition: background 0.2s ease-in-out;\n}\n.ivu-table-filter-list .ivu-table-filter-select-item:hover {\n  background: #f3f3f3;\n}\n.ivu-table-filter-list .ivu-table-filter-select-item-focus {\n  background: #f3f3f3;\n}\n.ivu-table-filter-list .ivu-table-filter-select-item-disabled {\n  color: #c3cbd6;\n  cursor: not-allowed;\n}\n.ivu-table-filter-list .ivu-table-filter-select-item-disabled:hover {\n  color: #c3cbd6;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.ivu-table-filter-list .ivu-table-filter-select-item-selected,\n.ivu-table-filter-list .ivu-table-filter-select-item-selected:hover {\n  color: #fff;\n  background: rgba(51, 153, 255, 0.9);\n}\n.ivu-table-filter-list .ivu-table-filter-select-item-selected.ivu-table-filter-list .ivu-table-filter-select-item-focus {\n  background: rgba(45, 135, 225, 0.91);\n}\n.ivu-table-filter-list .ivu-table-filter-select-item-divided {\n  margin-top: 5px;\n  border-top: 1px solid #e3e8ee;\n}\n.ivu-table-filter-list .ivu-table-filter-select-item-divided:before {\n  content: '';\n  height: 5px;\n  display: block;\n  margin: 0 -16px;\n  background-color: #fff;\n  position: relative;\n  top: -7px;\n}\n.ivu-table-filter-list .ivu-table-large .ivu-table-filter-select-item {\n  padding: 7px 16px 8px;\n  font-size: 14px !important;\n}\n.ivu-table-filter-footer {\n  padding: 4px;\n  border-top: 1px solid #e3e8ee;\n}\n.ivu-table .ivu-poptip-popper {\n  min-width: 0;\n  text-align: left;\n}\n.ivu-table .ivu-poptip-popper .ivu-poptip-body {\n  padding: 0;\n}\n.ivu-dropdown {\n  display: inline-block;\n  position: relative;\n}\n.ivu-dropdown .ivu-select-dropdown {\n  overflow: visible;\n}\n.ivu-dropdown .ivu-dropdown {\n  width: 100%;\n}\n.ivu-dropdown-rel {\n  display: inline-block;\n}\n.ivu-dropdown-menu {\n  min-width: 100px;\n}\n.ivu-dropdown-item {\n  margin: 0;\n  padding: 7px 16px;\n  clear: both;\n  color: #657180;\n  font-size: 12px !important;\n  white-space: nowrap;\n  list-style: none;\n  cursor: pointer;\n  transition: background 0.2s ease-in-out;\n}\n.ivu-dropdown-item:hover {\n  background: #f3f3f3;\n}\n.ivu-dropdown-item-focus {\n  background: #f3f3f3;\n}\n.ivu-dropdown-item-disabled {\n  color: #c3cbd6;\n  cursor: not-allowed;\n}\n.ivu-dropdown-item-disabled:hover {\n  color: #c3cbd6;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.ivu-dropdown-item-selected,\n.ivu-dropdown-item-selected:hover {\n  color: #fff;\n  background: rgba(51, 153, 255, 0.9);\n}\n.ivu-dropdown-item-selected.ivu-dropdown-item-focus {\n  background: rgba(45, 135, 225, 0.91);\n}\n.ivu-dropdown-item-divided {\n  margin-top: 5px;\n  border-top: 1px solid #e3e8ee;\n}\n.ivu-dropdown-item-divided:before {\n  content: '';\n  height: 5px;\n  display: block;\n  margin: 0 -16px;\n  background-color: #fff;\n  position: relative;\n  top: -7px;\n}\n.ivu-dropdown-large .ivu-dropdown-item {\n  padding: 7px 16px 8px;\n  font-size: 14px !important;\n}\n", ""]);

	// exports


/***/ },
/* 75 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2c2ae068be3b089e0a5b59abb1831550.eot";

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "24712f6c47821394fba7942fbb52c3b2.ttf";

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "05acfdb568b3df49ad31355b19495d4a.woff";

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c037dbbc0e6790f30e824a50010df5fb.svg";

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(82);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(80)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-350f592c&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./app.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-350f592c&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./app.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(75)();
	// imports


	// module
	exports.push([module.id, "\n.title[data-v-350f592c]{\n\ttext-align: left;\n}\n.to-do-list[data-v-350f592c]{\n\tlist-style: none;\n}\n.to-do-list li[data-v-350f592c]{\n\tcursor: pointer;\n\t-webkit-user-select: none;\n\tuser-select: none;\n}\n.message[data-v-350f592c]{\n\tcolor: lightblue;\n\tfont-size: 36px;\n\tfont-weight: bold;\n}\n.red[data-v-350f592c]{\n\tcolor: red;\n}\n.green[data-v-350f592c]{\n\tcolor: green;\n}\n.hasFinished[data-v-350f592c]{\n\ttext-decoration: line-through;\n}\n", ""]);

	// exports


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _commont = __webpack_require__(84);

	var _commont2 = _interopRequireDefault(_commont);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				items: [{
					author: 'ming',
					content: 'hello'
				}, {
					author: 'wang xiang',
					content: 'hello'
				}, {
					author: 'ding',
					content: 'hello'
				}],
				msgCount: 0,
				selectPerson: ''
			};
		},

		components: { Commont: _commont2.default },
		methods: {
			submitCommont: function submitCommont(msg) {
				var name = ['wang xiang', 'ming', 'ding'][Math.floor(Math.random() * 3)],
				    obj = {
					author: name,
					content: msg
				};
				this.items.push(obj);
			},

			clickHandler: function clickHandler(item) {
				item.finished = !item.finished;
				console.log('ok');
			}
		},
		watch: {
			selectPerson: function selectPerson(n, o) {
				var tempArr = [];
				tempArr = this.items.filter(function (item) {
					return item.author === n;
				});
				this.msgCount = tempArr.length;
			}
		}
	}; //
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

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(85)

	/* template */
	var __vue_template__ = __webpack_require__(86)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\github\\vue\\app\\components\\commont.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-ec1fc518", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-ec1fc518", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] commont.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 85 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//

	exports.default = {
		data: function data() {
			return {
				message: ''
			};
		},

		props: ['person'],
		methods: {
			addMessage: function addMessage() {
				console.log(this.person);
				this.$emit('submit', this.message);
				//this.$dispatch('submitCommont', this.message);
				this.message = '';
			}
		}
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _h('div', [_h('label', [_vm._s(_vm.person)]), _h('input', {
	    directives: [{
	      name: "model",
	      value: (_vm.message),
	      expression: "message"
	    }],
	    attrs: {
	      "type": "text",
	      "placeholder": "说句话吧..."
	    },
	    domProps: {
	      "value": _vm._s(_vm.message)
	    },
	    on: {
	      "keyup": function($event) {
	        if ($event.keyCode !== 13) { return; }
	        _vm.addMessage($event)
	      },
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.message = $event.target.value
	      }
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-ec1fc518", module.exports)
	  }
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _h('div', [_vm._m(0), " ", _h('select', {
	    directives: [{
	      name: "model",
	      value: (_vm.selectPerson),
	      expression: "selectPerson"
	    }],
	    on: {
	      "change": function($event) {
	        _vm.selectPerson = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          return "_value" in o ? o._value : o.value
	        })[0]
	      }
	    }
	  }, [_vm._m(1), " ", _vm._m(2), " ", _vm._m(3), " ", _vm._m(4)]), " ", _vm._m(5), _vm._s(_vm.msgCount), _vm._m(6), " ", _h('ul', {
	    staticClass: "to-do-list"
	  }, [_vm._l((_vm.items), function(item) {
	    return _h('li', {
	      on: {
	        "click": function($event) {
	          _vm.clickHandler(item)
	        }
	      }
	    }, [_h('span', {
	      staticClass: "name"
	    }, [_vm._s(item.author)]), _vm._m(7, true), " ", _h('span', {
	      staticClass: "text"
	    }, [_vm._s(item.content)])])
	  })]), " ", _h('commont', {
	    attrs: {
	      "person": _vm.selectPerson
	    },
	    on: {
	      "submit": _vm.submitCommont
	    }
	  })])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _h('h1', {
	    staticClass: "title"
	  }, ["chat room"])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _h('option', {
	    attrs: {
	      "value": ""
	    }
	  }, ["请选择"])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _h('option', {
	    attrs: {
	      "value": "wang xiang"
	    }
	  }, ["王先生"])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _h('option', {
	    attrs: {
	      "value": "ming"
	    }
	  }, ["小明"])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _h('option', {
	    attrs: {
	      "value": "ding"
	    }
	  }, ["丁丁"])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _h('span', ["总共说了："])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _h('span', ["句话"])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _h('strong', [":"])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-350f592c", module.exports)
	  }
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(89)

	/* template */
	var __vue_template__ = __webpack_require__(90)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\github\\vue\\app\\components\\componenttest.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-c856014c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-c856014c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] componenttest.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _commont = __webpack_require__(84);

	var _commont2 = _interopRequireDefault(_commont);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {};
		}
	}; //
	//
	//
	//
	//
	//

	//import tinput from './input/input.vue'

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _h('div', [_vm._m(0), " ", _h('commont')])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _h('h2', ["input 组件"])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-c856014c", module.exports)
	  }
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(92);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(93)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./main.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(75)();
	// imports


	// module
	exports.push([module.id, ".link{\r\n\tdisplay: inline-block;\r\n\tborder: 1px solid #ddd;\r\n\tbox-shadow: 3px 3px 3px #888888;\r\n\twidth: 120px;\r\n\theight: 40px;\r\n\ttext-align: center;\r\n\tline-height: 40px;\r\n\ttext-decoration: none;\r\n}", ""]);

	// exports


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);