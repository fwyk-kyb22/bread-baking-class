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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/schedules.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/schedules.js":
/*!*******************************************!*\
  !*** ./app/javascript/packs/schedules.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//  $(function () {
//   toastr.success("hello")
// });
function initThemeChooser(settings) {
  var isInitialized = false;
  var currentThemeSystem; // don't set this directly. use setThemeSystem

  var currentStylesheetEl;
  var loadingEl = document.getElementById('loading');
  var systemSelectEl = document.querySelector('#theme-system-selector select');
  var themeSelectWrapEls = Array.prototype.slice.call( // convert to real array
  document.querySelectorAll('.selector[data-theme-system]'));
  systemSelectEl.addEventListener('change', function () {
    setThemeSystem(this.value);
  });
  setThemeSystem(systemSelectEl.value);
  themeSelectWrapEls.forEach(function (themeSelectWrapEl) {
    var themeSelectEl = themeSelectWrapEl.querySelector('select');
    themeSelectWrapEl.addEventListener('change', function () {
      setTheme(currentThemeSystem, themeSelectEl.options[themeSelectEl.selectedIndex].value);
    });
  });

  function setThemeSystem(themeSystem) {
    var selectedTheme;
    currentThemeSystem = themeSystem;
    themeSelectWrapEls.forEach(function (themeSelectWrapEl) {
      var themeSelectEl = themeSelectWrapEl.querySelector('select');

      if (themeSelectWrapEl.getAttribute('data-theme-system') === themeSystem) {
        selectedTheme = themeSelectEl.options[themeSelectEl.selectedIndex].value;
        themeSelectWrapEl.style.display = 'inline-block';
      } else {
        themeSelectWrapEl.style.display = 'none';
      }
    });
    setTheme(themeSystem, selectedTheme);
  }

  function setTheme(themeSystem, themeName) {
    var stylesheetUrl = generateStylesheetUrl(themeSystem, themeName);
    var stylesheetEl;

    function done() {
      if (!isInitialized) {
        isInitialized = true;
        settings.init(themeSystem);
      } else {
        settings.change(themeSystem);
      }

      showCredits(themeSystem, themeName);
    }

    if (stylesheetUrl) {
      stylesheetEl = document.createElement('link');
      stylesheetEl.setAttribute('rel', 'stylesheet');
      stylesheetEl.setAttribute('href', stylesheetUrl);
      document.querySelector('head').appendChild(stylesheetEl);
      loadingEl.style.display = 'inline';
      whenStylesheetLoaded(stylesheetEl, function () {
        if (currentStylesheetEl) {
          currentStylesheetEl.parentNode.removeChild(currentStylesheetEl);
        }

        currentStylesheetEl = stylesheetEl;
        loadingEl.style.display = 'none';
        done();
      });
    } else {
      if (currentStylesheetEl) {
        currentStylesheetEl.parentNode.removeChild(currentStylesheetEl);
        currentStylesheetEl = null;
      }

      done();
    }
  }

  function generateStylesheetUrl(themeSystem, themeName) {
    if (themeSystem === 'bootstrap') {
      if (themeName) {
        return 'https://bootswatch.com/4/' + themeName + '/bootstrap.min.css';
      } else {
        // the default bootstrap theme
        return 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css';
      }
    }
  }

  function showCredits(themeSystem, themeName) {
    var creditId;

    if (themeSystem.match('bootstrap')) {
      if (themeName) {
        creditId = 'bootstrap-custom';
      } else {
        creditId = 'bootstrap-standard';
      }
    }

    Array.prototype.slice.call( // convert to real array
    document.querySelectorAll('.credits')).forEach(function (creditEl) {
      if (creditEl.getAttribute('data-credit-id') === creditId) {
        creditEl.style.display = 'block';
      } else {
        creditEl.style.display = 'none';
      }
    });
  }

  function whenStylesheetLoaded(linkNode, callback) {
    var isReady = false;

    function ready() {
      if (!isReady) {
        // avoid double-call
        isReady = true;
        callback();
      }
    }

    linkNode.onload = ready; // does not work cross-browser

    setTimeout(ready, 2000); // max wait. also handles browsers that don't support onload
  }
}

/***/ })

/******/ });
//# sourceMappingURL=schedules-21c534f4aec1befa5eb2.js.map