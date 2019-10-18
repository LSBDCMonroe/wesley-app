function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main\">\n<router-outlet></router-outlet>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/canvas/canvas.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/canvas/canvas.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCanvasCanvasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"canvas\">\r\n    Sign Here\r\n<canvas #canvas></canvas>\r\n<div>\r\n    <!-- <button class=\"btn pad\" (click)='showLines()'>Show</button>\r\n    <button class=\"btn pad\" (click)='saveLines()'>Save</button>\r\n    <button class=\"btn pad\" (click)='loadLines()'>Load</button> -->\r\n    <button  class=\"btn pad\" (click)='resetLines()'>Reset</button>\r\n</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/completed/completed.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/completed/completed.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCompletedCompletedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class='card-1 pop-appear'>\n        <img class=\"responsive-img logo\" src='../../../assets/logo.jpg' alt=\"Wesley Logo\">\n        <mat-card-header>  \n          <mat-card-title>Enter Your Email</mat-card-title>\n        </mat-card-header>\n      </mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/forms.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/forms.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFormsFormsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<form [@openClose]=\"isOpen ? 'open' : 'closed'\"  [formGroup]='myForm' class=\"form-grid card\">\r\n        <img class=\"responsive-img logo\" src='../../../assets/logo.jpg' alt=\"Wesley Logo\">\r\n        <!-- Refractor *ngFor -->\r\n    <section>\r\n        <label hidden for=\"firstName\">First Name</label>\r\n        <input matInput name=\"firstName\" placeholder=\"First Name\" formControlName=\"firstName\">\r\n        <mat-error *ngIf='firstName.touched && firstName.invalid'>Error, invalid first name</mat-error>\r\n    </section>\r\n\r\n    <section>\r\n        <label hidden for=\"lastName\">Last Name</label>\r\n        <input matInput name=\"lastName\" placeholder=\"Last Name\" formControlName=\"lastName\">\r\n        <mat-error *ngIf='lastName.touched && lastName.invalid'>Error, invalid last name</mat-error>\r\n    </section>\r\n\r\n    <section>\r\n        <label hidden for=\"email\">Email</label>\r\n        <input matInput name=\"email\" placeholder=\"Email\" formControlName=\"email\">\r\n        <mat-error *ngIf='email.touched && email.invalid'>Error, invalid email</mat-error>\r\n    </section>\r\n\r\n    <section>\r\n        <label for='classification'>Pick your classification</label>\r\n        <mat-radio-group class=\"radio-group\" formControlName=\"classification\">\r\n            <mat-radio-button *ngFor=\"let classification of classifications; let i = index\" [value]=\"i\">\r\n                {{classification}}\r\n            </mat-radio-button>\r\n        </mat-radio-group>\r\n    </section>\r\n  \r\n    <section>\r\n        <app-canvas (linesEvent)='getLines($event)'></app-canvas>\r\n    </section>\r\n\r\n    <section>\r\n        <mat-checkbox >I accept the terms and conditions</mat-checkbox>\r\n    </section>\r\n    <section class=\"grid-2\">\r\n    <button  style=\"margin: 1px\" class=\"btn waves-effect waves-light teal darken-3\"  routerLink='/'>Go Back <i\r\n            class=\"material-icons right\">send</i></button>\r\n    <button  style=\"margin: 1px\" class=\"btn waves-effect waves-light teal darken-3\" type=\"submit\" (click)=\"submit()\">Submit <i\r\n                class=\"material-icons right\">send</i></button>\r\n    </section>\r\n</form>\r\n\r\n<app-completed confirmed='confirmed'></app-completed>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Welcome to Wesley App</h1>\r\n<div mat-dialog-content>\r\n  <p>Is all of your information Correct? </p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button  (click)=\"onYesClick()\">Yes</button>\r\n  <button mat-button cdkFocusInitial (click)=\"onNoClick()\">No</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n<mat-card class='card-1 pop-appear' *ngIf='!hasRegistered'>\r\n    <mat-card-header>\r\n      <mat-card-title>Welcome to Wesley App</mat-card-title>\r\n      <mat-card-subtitle>Kayak</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img class=\"responsive-img logo\" src='../../../assets/logo.jpg' alt=\"Wesley Logo\">\r\n    <mat-card-content>\r\n      <h5>Have you ever signed up with Wesley App?</h5>\r\n    </mat-card-content>\r\n    <mat-card-actions style='display: grid; grid-template-columns: 1fr 1fr;'>\r\n      <button mat-button  class=\"teal lighten-2\" (click)='setStatus(true)'>Yes</button>\r\n      <button mat-button class=\"teal lighten-2\" routerLink='/signup'>No</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n \r\n  <mat-card *ngIf='hasRegistered  && !gotUser' class='card-1 pop-appear'>\r\n        <img class=\"responsive-img logo\" src='../../../assets/logo.jpg' alt=\"Wesley Logo\">\r\n        <mat-card-header>  \r\n          <mat-card-title>Enter Your Email</mat-card-title>\r\n        </mat-card-header>\r\n       \r\n        <mat-card-content [formGroup]='formGroup'>\r\n          <input placeholder=\"Enter Your Email\" formControlName='email'>\r\n          <mat-error *ngIf='email.touched && email.invalid'>Error, invalid email</mat-error>\r\n        </mat-card-content>\r\n        <mat-card-actions style='display: grid; grid-template-columns: 1fr 1fr;'>\r\n          <button mat-button  class=\"teal lighten-2\" (click)='setStatus(false)'>Go Back</button>\r\n          <button mat-button class=\"teal lighten-2\" (click)='searchUser()'>Submit</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n\r\n      <mat-card *ngIf='hasRegistered  && gotUser' class='card-1 pop-appear'>\r\n          <img class=\"responsive-img logo\" src='../../../assets/logo.jpg' alt=\"Wesley Logo\">\r\n          <mat-card-header>  \r\n            <mat-card-title>Is this information correct?</mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n              <h6>Name: </h6>\r\n              <h6>Classification: </h6>\r\n              <h6>Signature: </h6>\r\n              <h6>Number of Past Vists: </h6>\r\n          </mat-card-content>\r\n        \r\n          <mat-card-actions style='display: grid; grid-template-columns: 1fr 1fr;'>\r\n            <button mat-button  class=\"teal lighten-2\" (click)='confirmUser()'>Yes</button>\r\n            <button mat-button class=\"teal lighten-2\" (click)='resetUser()'>No</button>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">  \r\n    <app-forms class=\"form-wapper\"></app-forms>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/signup/signup.component */
    "./src/app/pages/signup/signup.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'signup',
      component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    }, {
      path: 'home',
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main{\r\n    background-image: url('b.svg');\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: 0%;\r\n    width: 100%;\r\n    min-height: 100vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBc0M7SUFDdEMsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9iLnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'wesleyApp';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/signup/signup.component */
    "./src/app/pages/signup/signup.component.ts");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/forms/forms.component */
    "./src/app/components/forms/forms.component.ts");
    /* harmony import */


    var ng2_canvas_whiteboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng2-canvas-whiteboard */
    "./node_modules/ng2-canvas-whiteboard/modules/ng2-canvas-whiteboard.js");
    /* harmony import */


    var _components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/canvas/canvas.component */
    "./src/app/components/canvas/canvas.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/modal/modal.component */
    "./src/app/components/modal/modal.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _components_completed_completed_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/completed/completed.component */
    "./src/app/components/completed/completed.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_9__["FormsComponent"], _components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_11__["CanvasComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["ModalComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _components_completed_completed_component__WEBPACK_IMPORTED_MODULE_15__["CompletedComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], ng2_canvas_whiteboard__WEBPACK_IMPORTED_MODULE_10__["CanvasWhiteboardModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      entryComponents: [_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["ModalComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/canvas/canvas.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/canvas/canvas.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCanvasCanvasComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".canvas { \r\n    margin: 1em 0;\r\n    box-sizing: content-box;\r\n}\r\ncanvas { \r\n    width: 100%;\r\n    min-height: 5em;\r\n    border: 1px solid #000; \r\n}\r\n.pad{\r\n    margin: 0 .15em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW52YXMvY2FudmFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FudmFzL2NhbnZhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbnZhcyB7IFxyXG4gICAgbWFyZ2luOiAxZW0gMDtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG59XHJcbmNhbnZhcyB7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1ZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwOyBcclxufVxyXG4ucGFke1xyXG4gICAgbWFyZ2luOiAwIC4xNWVtO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/canvas/canvas.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/canvas/canvas.component.ts ***!
    \*******************************************************/

  /*! exports provided: CanvasComponent */

  /***/
  function srcAppComponentsCanvasCanvasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasComponent", function () {
      return CanvasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var CanvasComponent =
    /*#__PURE__*/
    function () {
      function CanvasComponent() {
        _classCallCheck(this, CanvasComponent);

        this.linesEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.width = 500;
        this.height = 150;
        this.lines = [];
        this.drawLine = [];
      }

      _createClass(CanvasComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var canvasEl = this.canvas.nativeElement;
          this.cx = canvasEl.getContext('2d');
          canvasEl.width = this.width;
          canvasEl.width = canvasEl.offsetWidth;
          canvasEl.height = this.height;
          this.cx.lineWidth = 3;
          this.cx.lineCap = 'round';
          this.cx.strokeStyle = '#000';
          this.captureTouchEvents(canvasEl);
          this.captureEvents(canvasEl);
        }
      }, {
        key: "captureEvents",
        value: function captureEvents(canvasEl) {
          var _this = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(canvasEl, 'mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (e) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(canvasEl, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(canvasEl, 'mouseup')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(canvasEl, 'mouseleave')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])()
            /* Return the previous and last values as array */
            );
          })).subscribe(function (res) {
            var rect = canvasEl.getBoundingClientRect();
            var prevPos = {
              x: res[0].clientX - rect.left,
              y: res[0].clientY - rect.top
            };
            var currentPos = {
              x: res[1].clientX - rect.left,
              y: res[1].clientY - rect.top
            };

            _this.drawOnCanvas(prevPos, currentPos);
          });
        }
      }, {
        key: "captureTouchEvents",
        value: function captureTouchEvents(canvasEl) {
          var _this2 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(canvasEl, 'touchstart').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (e) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(canvasEl, 'touchmove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(canvasEl, 'touchend')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(canvasEl, 'touchcancel')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])()
            /* Return the previous and last values as array */
            );
          })).subscribe(function (res) {
            var rect = canvasEl.getBoundingClientRect();
            var prevPos = {
              x: res[0].touches[0].clientX - rect.left,
              y: res[0].touches[0].clientY - rect.top
            };
            var currentPos = {
              x: res[1].touches[0].clientX - rect.left,
              y: res[1].touches[0].clientY - rect.top
            };

            _this2.drawOnCanvas(prevPos, currentPos);
          });
        }
      }, {
        key: "drawOnCanvas",
        value: function drawOnCanvas(prevPos, currentPos) {
          if (!this.cx) {
            return;
          }

          this.cx.beginPath();
          this.lines.push({
            prevPos: prevPos,
            currentPos: currentPos
          });

          if (prevPos) {
            this.cx.moveTo(prevPos.x, prevPos.y); // from

            this.cx.lineTo(currentPos.x, currentPos.y);
            this.cx.stroke();
            this.sendLines();
          }
        }
      }, {
        key: "showLines",
        value: function showLines() {
          console.log(this.lines);
        }
      }, {
        key: "saveLines",
        value: function saveLines() {
          localStorage.setItem('lines', JSON.stringify(this.lines));
        }
      }, {
        key: "resetLines",
        value: function resetLines() {
          this.cx.clearRect(0, 0, this.width, this.height);
        }
      }, {
        key: "loadLines",
        value: function loadLines() {
          var rawLine = localStorage.getItem('lines');
          console.log(rawLine);
          var lines = JSON.parse(rawLine === undefined ? '' : rawLine);
          this.drawLine = lines;
          this.drawLines();
        }
      }, {
        key: "drawLines",
        value: function drawLines() {
          var _this3 = this;

          this.drawLine.forEach(function (_ref) {
            var prevPos = _ref.prevPos,
                currentPos = _ref.currentPos;
            return _this3.drawOnCanvas(prevPos, currentPos);
          });
        }
      }, {
        key: "sendLines",
        value: function sendLines() {
          this.linesEvent.emit(this.lines);
        }
      }]);

      return CanvasComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', {
      "static": false
    })], CanvasComponent.prototype, "canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CanvasComponent.prototype, "linesEvent", void 0);
    CanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-canvas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./canvas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/canvas/canvas.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./canvas.component.css */
      "./src/app/components/canvas/canvas.component.css"))["default"]]
    })], CanvasComponent);
    /***/
  },

  /***/
  "./src/app/components/completed/completed.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/completed/completed.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCompletedCompletedComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-1{\r\n    width: 600px;\r\n    max-width: 95%;\r\n}\r\n\r\n.container {\r\n    min-height: 100vh;\r\n    margin: auto;\r\n    display: grid;\r\n    place-items: center;\r\n    box-sizing: content-box;\r\n    \r\n}\r\n\r\n.logo{\r\n    width: 10em;\r\n    display: block;\r\n    margin: auto\r\n}\r\n\r\n.pop-appear {\r\n    -webkit-animation-name: pop;\r\n            animation-name: pop;\r\n    -webkit-animation-duration: .7s;\r\n            animation-duration: .7s;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n    transition: transform .5s ease-in;\r\n  }\r\n\r\n@-webkit-keyframes pop {\r\n    0%   { transform: scale(0); }\r\n    100%  { transform: scale(1);}\r\n  }\r\n\r\n@keyframes pop {\r\n    0%   { transform: scale(0); }\r\n    100%  { transform: scale(1);}\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wbGV0ZWQvY29tcGxldGVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZDtBQUNKOztBQUlFO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsaUNBQWlDO0VBQ25DOztBQUNBO0lBQ0UsT0FBTyxtQkFBbUIsRUFBRTtJQUM1QixRQUFRLG1CQUFtQixDQUFDO0VBQzlCOztBQUhBO0lBQ0UsT0FBTyxtQkFBbUIsRUFBRTtJQUM1QixRQUFRLG1CQUFtQixDQUFDO0VBQzlCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wbGV0ZWQvY29tcGxldGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC0xe1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgXHJcbn1cclxuXHJcbi5sb2dve1xyXG4gICAgd2lkdGg6IDEwZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0b1xyXG59XHJcblxyXG5cclxuXHJcbiAgLnBvcC1hcHBlYXIge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHBvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjdzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZS1pbjtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBwb3Age1xyXG4gICAgMCUgICB7IHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cclxuICAgIDEwMCUgIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTt9XHJcbiAgfVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/completed/completed.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/completed/completed.component.ts ***!
    \*************************************************************/

  /*! exports provided: CompletedComponent */

  /***/
  function srcAppComponentsCompletedCompletedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompletedComponent", function () {
      return CompletedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CompletedComponent =
    /*#__PURE__*/
    function () {
      function CompletedComponent() {
        _classCallCheck(this, CompletedComponent);
      }

      _createClass(CompletedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CompletedComponent;
    }();

    CompletedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-completed',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./completed.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/completed/completed.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./completed.component.css */
      "./src/app/components/completed/completed.component.css"))["default"]]
    })], CompletedComponent);
    /***/
  },

  /***/
  "./src/app/components/forms/forms.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/forms/forms.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFormsFormsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo{\r\n    width: 10em;\r\n    display: block;\r\n    margin: auto\r\n}\r\n.radio-group{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n}\r\n.form-grid {\r\n    display: grid;\r\n    grid-template-rows: repeat(8, auto);\r\n    min-height: 95vh;\r\n    background: white;\r\n    box-sizing: border-box;\r\n    padding: 1.8em;\r\n    border-radius: .5em;\r\n\r\n}\r\n.grid-2 {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n}\r\n@media(max-width: 600px){\r\n    .radio-group{\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .grid-2 {\r\n        grid-template-columns: 1fr;\r\n    }\r\n     \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3Jtcy9mb3Jtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZDtBQUNKO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0FBQzlDO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxtQkFBbUI7O0FBRXZCO0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0FBQ3pDO0FBRUE7SUFDSTtRQUNJLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5Qjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvZm9ybXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xyXG4gICAgd2lkdGg6IDEwZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0b1xyXG59XHJcbi5yYWRpby1ncm91cHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XHJcbn1cclxuXHJcbi5mb3JtLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIGF1dG8pO1xyXG4gICAgbWluLWhlaWdodDogOTV2aDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDEuOGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVlbTtcclxuXHJcbn1cclxuXHJcbi5ncmlkLTIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgIC5yYWRpby1ncm91cHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQtMiB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcbiAgICAgXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/forms/forms.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/forms/forms.component.ts ***!
    \*****************************************************/

  /*! exports provided: FormsComponent */

  /***/
  function srcAppComponentsFormsFormsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsComponent", function () {
      return FormsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_submit_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/submit-form.service */
    "./src/app/services/submit-form.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/modal/modal.component */
    "./src/app/components/modal/modal.component.ts");

    var FormsComponent =
    /*#__PURE__*/
    function () {
      function FormsComponent(formBuilder, sf, modal) {
        _classCallCheck(this, FormsComponent);

        this.formBuilder = formBuilder;
        this.sf = sf;
        this.modal = modal;
        this.isOpen = false;
        this.confirmed = false;
        this.classifications = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'None'];
      }

      _createClass(FormsComponent, [{
        key: "openDialog",
        value: function openDialog() {
          var dialogRef = this.modal.open(_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"]);
          dialogRef.afterClosed().subscribe(function (result) {});
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.myForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-zA-Z]{2,20}$/)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-zA-Z]{2,20}$/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/\S+@\S+\.\S+/)]],
            classification: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
          setTimeout(function () {
            return _this4.toggle();
          }, 100);
        }
      }, {
        key: "submit",
        value: function submit() {
          var firstName = this.myForm.controls.firstName.value;
          var lastName = this.lastName.value;
          var email = this.email.value;
          var classification = this.classification.value;
          var signature = this.signature;
          var user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            signature: signature,
            classification: classification
          };
          console.log(user);

          if (this.signature !== undefined) {
            this.sf.submitUser(user).subscribe(function (res) {
              return console.log(res);
            });
          } else {
            alert('Input Your Signature');
          }
        }
      }, {
        key: "getLines",
        value: function getLines($event) {
          this.signature = $event;
        }
      }, {
        key: "onCreate",
        value: function onCreate() {
          this.modal.open(_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"]);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.isOpen = !this.isOpen;
        }
      }, {
        key: "firstName",
        get: function get() {
          return this.myForm.get('firstName');
        }
      }, {
        key: "lastName",
        get: function get() {
          return this.myForm.get('lastName');
        }
      }, {
        key: "email",
        get: function get() {
          return this.myForm.get('email');
        }
      }, {
        key: "classification",
        get: function get() {
          return this.myForm.get('classification');
        }
      }]);

      return FormsComponent;
    }();

    FormsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_submit_form_service__WEBPACK_IMPORTED_MODULE_3__["SubmitFormService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }];
    };

    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forms',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forms.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/forms.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('openClose', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'scale(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'scale(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('.8s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('.8s')])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forms.component.css */
      "./src/app/components/forms/forms.component.css"))["default"]]
    })], FormsComponent);
    /***/
  },

  /***/
  "./src/app/components/modal/modal.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/modal/modal.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/modal/modal.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/modal/modal.component.ts ***!
    \*****************************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcAppComponentsModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var ModalComponent =
    /*#__PURE__*/
    function () {
      function ModalComponent(dialogRef) {
        _classCallCheck(this, ModalComponent);

        this.dialogRef = dialogRef;
      }

      _createClass(ModalComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "onYesClick",
        value: function onYesClick() {
          this.dialogRef.close();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ModalComponent;
    }();

    ModalComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };

    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal.component.css */
      "./src/app/components/modal/modal.component.css"))["default"]]
    })], ModalComponent);
    /***/
  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var MaterialComponents = [_angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [MaterialComponents],
      exports: [MaterialComponents]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.component.css":
  /*!***********************************************!*\
    !*** ./src/app/pages/home/home.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-1{\r\n    width: 600px;\r\n    max-width: 95%;\r\n}\r\n\r\n.container {\r\n    min-height: 100vh;\r\n    margin: auto;\r\n    display: grid;\r\n    place-items: center;\r\n    box-sizing: content-box;\r\n    \r\n}\r\n\r\n.logo{\r\n    width: 10em;\r\n    display: block;\r\n    margin: auto\r\n}\r\n\r\n.pop-appear {\r\n    -webkit-animation-name: pop;\r\n            animation-name: pop;\r\n    -webkit-animation-duration: .7s;\r\n            animation-duration: .7s;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n    transition: transform .5s ease-in;\r\n  }\r\n\r\n@-webkit-keyframes pop {\r\n    0%   { transform: scale(0); }\r\n    100%  { transform: scale(1);}\r\n  }\r\n\r\n@keyframes pop {\r\n    0%   { transform: scale(0); }\r\n    100%  { transform: scale(1);}\r\n  }\r\n\r\n.flip-appear {\r\n    -webkit-animation-name: flip;\r\n            animation-name: flip;\r\n    -webkit-animation-duration: .7s;\r\n            animation-duration: .7s;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n    transition: transform .5s ease-in;\r\n  }\r\n\r\n@-webkit-keyframes flip {\r\n    0%   { transform: rotateX(180deg); }\r\n    100%  { transform: rotateX(360deg);}\r\n  }\r\n\r\n@keyframes flip {\r\n    0%   { transform: rotateX(180deg); }\r\n    100%  { transform: rotateX(360deg);}\r\n  }\r\n\r\n@media (max-width: 620px){\r\n    .card-1{\r\n      width: 98%;\r\n  }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZDtBQUNKOztBQUlFO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsaUNBQWlDO0VBQ25DOztBQUNBO0lBQ0UsT0FBTyxtQkFBbUIsRUFBRTtJQUM1QixRQUFRLG1CQUFtQixDQUFDO0VBQzlCOztBQUhBO0lBQ0UsT0FBTyxtQkFBbUIsRUFBRTtJQUM1QixRQUFRLG1CQUFtQixDQUFDO0VBQzlCOztBQUVBO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsaUNBQWlDO0VBQ25DOztBQUNBO0lBQ0UsT0FBTywwQkFBMEIsRUFBRTtJQUNuQyxRQUFRLDBCQUEwQixDQUFDO0VBQ3JDOztBQUhBO0lBQ0UsT0FBTywwQkFBMEIsRUFBRTtJQUNuQyxRQUFRLDBCQUEwQixDQUFDO0VBQ3JDOztBQUVBO0lBQ0U7TUFDRSxVQUFVO0VBQ2Q7RUFDQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtMXtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIG1heC13aWR0aDogOTUlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIFxyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG9cclxufVxyXG5cclxuXHJcblxyXG4gIC5wb3AtYXBwZWFyIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBwb3A7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC43cztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2UtaW47XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgcG9wIHtcclxuICAgIDAlICAgeyB0cmFuc2Zvcm06IHNjYWxlKDApOyB9XHJcbiAgICAxMDAlICB7IHRyYW5zZm9ybTogc2NhbGUoMSk7fVxyXG4gIH1cclxuXHJcbiAgLmZsaXAtYXBwZWFyIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmbGlwO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuN3M7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlLWluO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGZsaXAge1xyXG4gICAgMCUgICB7IHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpOyB9XHJcbiAgICAxMDAlICB7IHRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpO31cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCl7XHJcbiAgICAuY2FyZC0xe1xyXG4gICAgICB3aWR0aDogOTglO1xyXG4gIH1cclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_submit_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/submit-form.service */
    "./src/app/services/submit-form.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(submit, fb) {
        _classCallCheck(this, HomeComponent);

        this.submit = submit;
        this.fb = fb;
        this.gotUser = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formGroup = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/\S+@\S+\.\S+/)]]
          });
        }
      }, {
        key: "setStatus",
        value: function setStatus(value) {
          this.hasRegistered = value;
        }
      }, {
        key: "searchUser",
        value: function searchUser() {
          this.gotUser = true;

          if (this.formGroup.status === 'VALID') {
            this.submit.searchUser(this.email.value).subscribe(function (res) {
              return console.log(res);
            });
          } else {
            alert('Invalid Details');
          }
        }
      }, {
        key: "resetUser",
        value: function resetUser() {
          this.gotUser = false;
          this.user = null;
        }
      }, {
        key: "ConfirmUser",
        value: function ConfirmUser() {
          this.gotUser = false;
          this.user = null;
        }
      }, {
        key: "email",
        get: function get() {
          return this.formGroup.get('email');
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_submit_form_service__WEBPACK_IMPORTED_MODULE_2__["SubmitFormService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/pages/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.component.css":
  /*!***************************************************!*\
    !*** ./src/app/pages/signup/signup.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n    min-height:  98vh;\r\n    margin: auto;\r\n    background: transparent;\r\n    box-sizing: content-box;\r\n    display: grid;\r\n    place-items: center;\r\n    width: 100%;\r\n}\r\n\r\n.form-wapper{ \r\n    place-items: center;\r\n    display: block;\r\n    width: 70%;\r\n}\r\n\r\n@media (max-width: 600px){\r\n    .form-wapper{\r\n        width: 92%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiAgOTh2aDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS13YXBwZXJ7IFxyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgIC5mb3JtLXdhcHBlcntcclxuICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/signup/signup.component.ts ***!
    \**************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppPagesSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent() {
        _classCallCheck(this, SignupComponent);
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupComponent;
    }();

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/pages/signup/signup.component.css"))["default"]]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/services/submit-form.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/submit-form.service.ts ***!
    \*************************************************/

  /*! exports provided: SubmitFormService */

  /***/
  function srcAppServicesSubmitFormServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmitFormService", function () {
      return SubmitFormService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var SubmitFormService =
    /*#__PURE__*/
    function () {
      function SubmitFormService(http) {
        _classCallCheck(this, SubmitFormService);

        this.http = http;
        this.apiUrl = 'http://localhost:8080/api';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': 'application/json'
        });
      }

      _createClass(SubmitFormService, [{
        key: "submitUser",
        value: function submitUser(user) {
          var firstName = user.firstName,
              lastName = user.lastName,
              email = user.email,
              classification = user.classification,
              signature = user.signature;
          var headers = this.headers;
          return this.http.post("".concat(this.apiUrl, "/register"), JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            classification: classification,
            signature: signature
          }), {
            headers: headers
          });
        }
      }, {
        key: "searchUser",
        value: function searchUser(email) {
          var headers = this.headers;
          return this.http.post("".concat(this.apiUrl, "/search"), JSON.stringify({
            email: email
          }), {
            headers: headers
          });
        }
      }]);

      return SubmitFormService;
    }();

    SubmitFormService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SubmitFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SubmitFormService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\AYUSH SHRESTHA\Desktop\wesleyApp\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map