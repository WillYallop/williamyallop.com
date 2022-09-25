/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@functionalities/animations/dist/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@functionalities/animations/dist/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Animations)
/* harmony export */ });
class Animations {
    config;
    map;
    constructor(config) {
        this.config = {
            reset: true,
            activeClass: "animate",
            threshold: 1,
            attributes: {
                animate: "data-animate",
            },
            ...config,
        };
        this.map = new WeakMap();
        this.#initialise();
    }
    #initialise() {
        const observer = new IntersectionObserver(this.#intersectionObserverCallback, {
            threshold: this.config.threshold,
        });
        const elements = document.querySelectorAll(`[${this.config.attributes.animate}]`);
        [...elements].forEach((element) => {
            const attribute = element.getAttribute(this.config.attributes.animate);
            const attributeObj = this.#parseAttribute(attribute);
            this.map.set(element, attributeObj);
            observer.observe(element);
        });
    }
    #parseAttribute(attribute) {
        const parsedAttribute = attribute
            .replace(/'/g, '"')
            .replace(/([a-zA-Z0-9]+):/g, '"$1":')
            .replace(/:(?=[a-zA-Z0-9])/g, ':"')
            .replace(/,(?=[a-zA-Z0-9])/g, '",')
            .replace(/}$/, '"}');
        const arr = [
            ...JSON.parse(parsedAttribute),
        ];
        return arr.filter((obj) => {
            if (obj.class !== undefined) {
                obj.delay = obj.delay || 0;
                obj.reset =
                    typeof obj.reset === "boolean" ? obj.reset : this.config.reset;
                return obj;
            }
        });
    }
    #intersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => {
            const element = entry.target;
            const attributeObj = this.map.get(element);
            if (attributeObj) {
                const toggleOn = (obj) => {
                    setTimeout(() => {
                        element.classList.add(obj.class);
                    }, obj.delay || 0);
                };
                const toggleOff = (obj) => {
                    element.classList.remove(obj.class);
                };
                if (entry.isIntersecting) {
                    element.classList.add(this.config.activeClass);
                    attributeObj.forEach((obj) => {
                        toggleOn(obj);
                    });
                }
                else {
                    if (this.config.reset) {
                        element.classList.remove(this.config.activeClass);
                    }
                    attributeObj.forEach((obj) => {
                        if (obj.reset) {
                            toggleOff(obj);
                        }
                    });
                }
            }
        });
    };
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@functionalities/toggler/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@functionalities/toggler/dist/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Toggler)
/* harmony export */ });
class Toggler {
    config;
    map;
    constructor(config) {
        this.config = {
            activeClass: "active",
            attributes: {
                toggler: "data-toggler",
                receiver: "data-toggler-receiver",
                class: "data-toggler-class",
                state: "data-toggler-state",
                close: "data-toggler-close",
                targets: "data-toggler-targets",
            },
            ...config,
        };
        this.map = new Map();
        this.#initialise();
    }
    #initialise() {
        const togglers = document.querySelectorAll(`[${this.config.attributes.toggler}]`);
        [...togglers].map((toggler) => {
            const togglerValue = toggler.getAttribute(this.config.attributes.toggler);
            if (!togglerValue)
                return;
            const targets = toggler.getAttribute(this.config.attributes.targets);
            const targetTogglerVals = targets
                ? targets.replaceAll(" ", "").split(",")
                : [];
            const closeTogglers = toggler.getAttribute(this.config.attributes.close);
            const closeTogglersArray = closeTogglers
                ? closeTogglers.replaceAll(" ", "").split(",")
                : [];
            if (this.map.has(togglerValue))
                return;
            this.map.set(togglerValue, {
                state: toggler.getAttribute(this.config.attributes.state) === "true"
                    ? true
                    : false,
                activeClass: toggler.getAttribute(this.config.attributes.class) ||
                    this.config.activeClass,
                closeTogglers: closeTogglersArray,
                targets: targetTogglerVals,
            });
            if (targetTogglerVals.length > 0)
                this.#multiClickEvent(toggler);
            else
                this.#clickEvent(toggler);
        });
        this.map.forEach((togglerInstance, key) => {
            if (togglerInstance.targets.length > 0) {
                if (togglerInstance.state)
                    this.#multiToggle(togglerInstance, key);
            }
        });
    }
    #clickEvent(toggler) {
        const togglerValue = toggler.getAttribute(this.config.attributes.toggler);
        if (!togglerValue)
            return;
        const togglerInstance = this.map.get(togglerValue);
        if (!togglerInstance)
            return;
        const toggle = () => {
            this.#updateGroup(document.querySelectorAll(`[${this.config.attributes.receiver}="${togglerValue}"]`), togglerInstance, false);
            this.#updateGroup(document.querySelectorAll(`[${this.config.attributes.toggler}="${togglerValue}"]`), togglerInstance, true);
            togglerInstance.closeTogglers.map((closeToggler) => {
                const closeTogglerInstance = this.map.get(closeToggler);
                if (!closeTogglerInstance)
                    return;
                closeTogglerInstance.state = false;
                this.#updateGroup(document.querySelectorAll(`[${this.config.attributes.toggler}="${closeToggler}"]`), closeTogglerInstance, true);
                this.#updateGroup(document.querySelectorAll(`[${this.config.attributes.receiver}="${closeToggler}"]`), closeTogglerInstance, false);
            });
        };
        toggle();
        const updateMultiToggle = () => {
            this.map.forEach((multiTogglerInstance, key) => {
                if (!togglerInstance.state) {
                    if (multiTogglerInstance.targets.includes(togglerValue)) {
                        multiTogglerInstance.state = false;
                        this.#updateGroup(document.querySelectorAll(`[${this.config.attributes.toggler}="${key}"]`), multiTogglerInstance, true);
                    }
                }
                else {
                    if (multiTogglerInstance.targets.includes(togglerValue)) {
                        const allTrue = multiTogglerInstance.targets.every((target) => {
                            const targetInstance = this.map.get(target);
                            if (!targetInstance)
                                return false;
                            return targetInstance.state;
                        });
                        if (allTrue) {
                            multiTogglerInstance.state = true;
                            this.#updateGroup(document.querySelectorAll(`[${this.config.attributes.toggler}="${key}"]`), multiTogglerInstance, true);
                        }
                    }
                }
            });
        };
        toggler.addEventListener("click", (e) => {
            e.preventDefault();
            togglerInstance.state = !togglerInstance.state;
            toggle();
            updateMultiToggle();
        });
    }
    #multiClickEvent(toggler) {
        const togglerValue = toggler.getAttribute(this.config.attributes.toggler);
        if (!togglerValue)
            return;
        const togglerInstance = this.map.get(togglerValue);
        if (!togglerInstance)
            return;
        toggler.addEventListener("click", (e) => {
            e.preventDefault();
            togglerInstance.state = !togglerInstance.state;
            this.#multiToggle(togglerInstance, togglerValue);
        });
    }
    #multiToggle(toggler, parentToggle) {
        toggler.targets.map((target) => {
            const targetInstance = this.map.get(target);
            if (!targetInstance)
                return;
            targetInstance.state = toggler.state;
            this.#updateGroup(document.querySelectorAll(`[${this.config.attributes.toggler}="${target}"]`), targetInstance, true);
            this.#updateGroup(document.querySelectorAll(`[${this.config.attributes.receiver}="${target}"]`), targetInstance, false);
        });
        this.#updateGroup(document.querySelectorAll(`[${this.config.attributes.toggler}="${parentToggle}"]`), toggler, true);
    }
    #updateGroup(group, togglerInstance, aria) {
        [...group].map((receiver) => {
            if (togglerInstance.state) {
                receiver.classList.add(togglerInstance.activeClass);
                if (aria)
                    receiver.setAttribute("aria-expanded", "true");
            }
            else {
                receiver.classList.remove(togglerInstance.activeClass);
                if (aria)
                    receiver.setAttribute("aria-expanded", "false");
            }
        });
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./site/resources/ts/functions/active-links.ts":
/*!*****************************************************!*\
  !*** ./site/resources/ts/functions/active-links.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var setActiveLinks = function setActiveLinks() {
  var links = document.querySelectorAll("a");
  links.forEach(function (link) {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
};

exports["default"] = setActiveLinks;

/***/ }),

/***/ "./site/resources/ts/functions/gallery.ts":
/*!************************************************!*\
  !*** ./site/resources/ts/functions/gallery.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var galleryInit = function galleryInit() {
  var galleryContainer = document.querySelectorAll("[data-gallery-container]");

  _toConsumableArray(galleryContainer).forEach(function (container) {
    var containerHeight = container.clientHeight;
    var containerPadding = parseInt(window.getComputedStyle(container).paddingTop);
    var containerHeightMinusPadding = containerHeight - containerPadding * 2;
    var slides = container.querySelectorAll("[data-gallery-slide]");

    _toConsumableArray(slides).forEach(function (slide) {
      var image = slide.querySelector("img");
      var aspectRatio = image.naturalHeight / image.naturalWidth;
      var width = containerHeightMinusPadding / aspectRatio;
      slide.style.width = "".concat(width, "px");
      slide.style.minWidth = "".concat(width, "px");
    });
  });
};

exports["default"] = galleryInit;

/***/ }),

/***/ "./site/resources/ts/index.ts":
/*!************************************!*\
  !*** ./site/resources/ts/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var active_links_1 = __importDefault(__webpack_require__(/*! ./functions/active-links */ "./site/resources/ts/functions/active-links.ts"));

var toggler_1 = __importDefault(__webpack_require__(/*! @functionalities/toggler */ "./node_modules/@functionalities/toggler/dist/index.js"));

var animations_1 = __importDefault(__webpack_require__(/*! @functionalities/animations */ "./node_modules/@functionalities/animations/dist/index.js"));

var gallery_1 = __importDefault(__webpack_require__(/*! ./functions/gallery */ "./site/resources/ts/functions/gallery.ts"));

new toggler_1["default"]();
new animations_1["default"]({
  threshold: 0.1
});
(0, active_links_1["default"])(); // on page fully loaded

window.addEventListener("load", function () {
  (0, gallery_1["default"])();
});

/***/ }),

/***/ "./site/resources/scss/main.scss":
/*!***************************************!*\
  !*** ./site/resources/scss/main.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/index": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkstatic_site_generator"] = self["webpackChunkstatic_site_generator"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./site/resources/ts/index.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./site/resources/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;