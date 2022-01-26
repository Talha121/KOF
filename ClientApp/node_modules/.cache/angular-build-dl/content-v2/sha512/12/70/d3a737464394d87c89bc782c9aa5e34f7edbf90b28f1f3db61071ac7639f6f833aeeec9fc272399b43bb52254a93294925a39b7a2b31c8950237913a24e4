function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-Products-Products-module~pages-categories-categories-module"], {
  /***/
  "./node_modules/ng2-order-pipe/dist/index.js":
  /*!***************************************************!*\
    !*** ./node_modules/ng2-order-pipe/dist/index.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNg2OrderPipeDistIndexJs(module, exports, __webpack_require__) {
    "use strict";

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }
    /**
     * Created by vadimdez on 20/01/2017.
     */


    __export(__webpack_require__(
    /*! ./src/ng2-order.module */
    "./node_modules/ng2-order-pipe/dist/src/ng2-order.module.js"));

    __export(__webpack_require__(
    /*! ./src/ng2-order.pipe */
    "./node_modules/ng2-order-pipe/dist/src/ng2-order.pipe.js")); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/ng2-order-pipe/dist/src/ng2-order.module.js":
  /*!******************************************************************!*\
    !*** ./node_modules/ng2-order-pipe/dist/src/ng2-order.module.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNg2OrderPipeDistSrcNg2OrderModuleJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    /**
     * Created by vadimdez on 20/01/2017.
     */


    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ng2_order_pipe_1 = __webpack_require__(
    /*! ./ng2-order.pipe */
    "./node_modules/ng2-order-pipe/dist/src/ng2-order.pipe.js");

    var Ng2OrderModule = function () {
      function Ng2OrderModule() {}

      return Ng2OrderModule;
    }();

    Ng2OrderModule = __decorate([core_1.NgModule({
      declarations: [ng2_order_pipe_1.Ng2OrderPipe],
      exports: [ng2_order_pipe_1.Ng2OrderPipe]
    })], Ng2OrderModule);
    exports.Ng2OrderModule = Ng2OrderModule; //# sourceMappingURL=ng2-order.module.js.map

    /***/
  },

  /***/
  "./node_modules/ng2-order-pipe/dist/src/ng2-order.pipe.js":
  /*!****************************************************************!*\
    !*** ./node_modules/ng2-order-pipe/dist/src/ng2-order.pipe.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNg2OrderPipeDistSrcNg2OrderPipeJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Ng2OrderPipe = Ng2OrderPipe_1 = function () {
      function Ng2OrderPipe() {}

      Ng2OrderPipe.prototype.transform = function (value, expression, reverse) {
        if (!value) {
          return value;
        }

        var isArray = value instanceof Array;

        if (isArray) {
          return this.sortArray(value, expression, reverse);
        }

        if (typeof value === 'object') {
          return this.transformObject(value, expression, reverse);
        }

        return value;
      };
      /**
       * Sort array
       *
       * @param value
       * @param expression
       * @param reverse
       * @returns {any[]}
       */


      Ng2OrderPipe.prototype.sortArray = function (value, expression, reverse) {
        var array = value.sort(function (a, b) {
          if (!expression) {
            return a > b ? 1 : -1;
          }

          return a[expression] > b[expression] ? 1 : -1;
        });

        if (reverse) {
          return array.reverse();
        }

        return array;
      };
      /**
       * Transform Object
       *
       * @param value
       * @param expression
       * @param reverse
       * @returns {any[]}
       */


      Ng2OrderPipe.prototype.transformObject = function (value, expression, reverse) {
        var parsedExpression = Ng2OrderPipe_1.parseExpression(expression);
        var lastPredicate = parsedExpression.pop();
        var oldValue = Ng2OrderPipe_1.getValue(value, parsedExpression);

        if (!(oldValue instanceof Array)) {
          parsedExpression.push(lastPredicate);
          lastPredicate = null;
          oldValue = Ng2OrderPipe_1.getValue(value, parsedExpression);
        }

        if (!oldValue) {
          return value;
        }

        var newValue = this.transform(oldValue, lastPredicate, reverse);
        Ng2OrderPipe_1.setValue(value, newValue, parsedExpression);
        return value;
      };
      /**
       * Parse expression, split into items
       * @param expression
       * @returns {string[]}
       */


      Ng2OrderPipe.parseExpression = function (expression) {
        expression = expression.replace(/\[(\w+)\]/g, '.$1');
        expression = expression.replace(/^\./, '');
        return expression.split('.');
      };
      /**
       * Get value by expression
       *
       * @param object
       * @param expression
       * @returns {any}
       */


      Ng2OrderPipe.getValue = function (object, expression) {
        for (var i = 0, n = expression.length; i < n; ++i) {
          var k = expression[i];

          if (!(k in object)) {
            return;
          }

          object = object[k];
        }

        return object;
      };
      /**
       * Set value by expression
       *
       * @param object
       * @param value
       * @param expression
       */


      Ng2OrderPipe.setValue = function (object, value, expression) {
        var i;

        for (i = 0; i < expression.length - 1; i++) {
          object = object[expression[i]];
        }

        object[expression[i]] = value;
      };

      return Ng2OrderPipe;
    }();

    Ng2OrderPipe = Ng2OrderPipe_1 = __decorate([core_1.Pipe({
      name: 'orderBy'
    })], Ng2OrderPipe);
    exports.Ng2OrderPipe = Ng2OrderPipe;
    var Ng2OrderPipe_1; //# sourceMappingURL=ng2-order.pipe.js.map

    /***/
  },

  /***/
  "./src/app/_service/fileupload.service.ts":
  /*!************************************************!*\
    !*** ./src/app/_service/fileupload.service.ts ***!
    \************************************************/

  /*! exports provided: FileuploadService */

  /***/
  function srcApp_serviceFileuploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileuploadService", function () {
      return FileuploadService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../src/environments/environment.prod */
    "./src/environments/environment.prod.ts");

    var FileuploadService = /*#__PURE__*/function () {
      function FileuploadService(http) {
        _classCallCheck(this, FileuploadService);

        this.http = http;
        this.baseUrl = _src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + 'ProductApi/';
        this.baseurl2 = _src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + 'AddDataWithExcelApi/';
        this.baseurl3 = _src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + 'DashboardApi/';
      }

      _createClass(FileuploadService, [{
        key: "uploadproductfile",
        value: function uploadproductfile(profileImage, apipath) {
          var formData = new FormData();
          formData.append("Uploadfile", profileImage);
          return this.http.post(this.baseurl2 + apipath, formData, {
            reportProgress: true,
            observe: 'events'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
        }
      }, {
        key: "uploadbannerimage",
        value: function uploadbannerimage(profileImage, apipath) {
          debugger;
          var formData = new FormData();
          formData.append("image", profileImage);
          ;
          return this.http.post(this.baseurl3 + apipath, formData, {
            reportProgress: true,
            observe: 'events'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
        }
      }, {
        key: "uploadproductimage",
        value: function uploadproductimage(profileImage, apipath, id) {
          var formData = new FormData();
          formData.append("ProductImage", profileImage);
          formData.append("productId", id);
          return this.http.post(this.baseUrl + apipath, formData, {
            reportProgress: true,
            observe: 'events'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
        }
      }, {
        key: "uploadbrandimage",
        value: function uploadbrandimage(profileImage, apipath, id) {
          debugger;
          var formData = new FormData();
          formData.append("Image", profileImage);
          formData.append("Id", id);
          return this.http.post(this.baseUrl + apipath, formData, {
            reportProgress: true,
            observe: 'events'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
        }
      }, {
        key: "uploadcategoryimage",
        value: function uploadcategoryimage(profileImage, apipath, id) {
          debugger;
          var formData = new FormData();
          formData.append("Image", profileImage);
          formData.append("Id", id);
          return this.http.post(this.baseUrl + apipath, formData, {
            reportProgress: true,
            observe: 'events'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
        }
      }, {
        key: "errorMgmt",
        value: function errorMgmt(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }
      }]);

      return FileuploadService;
    }();

    FileuploadService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    FileuploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], FileuploadService);
    /***/
  },

  /***/
  "./src/app/_service/product.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/_service/product.service.ts ***!
    \*********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcApp_serviceProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../src/environments/environment.prod */
    "./src/environments/environment.prod.ts");

    var ProductService = /*#__PURE__*/function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
        this.baseUrl = _src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + 'category/';
      }

      _createClass(ProductService, [{
        key: "GetCategoryProduct",
        value: function GetCategoryProduct(dto) {
          return this.http.post(this.baseUrl + 'CategoryWiseProduct', dto);
        }
      }, {
        key: "postcategorey",
        value: function postcategorey(form) {
          return this.http.post(this.baseUrl + 'AddCategory', form);
        }
      }, {
        key: "Addcateogry",
        value: function Addcateogry(form) {
          debugger;
          return this.http.post(this.baseUrl + 'postcategory', form);
        }
      }, {
        key: "GetCategorey",
        value: function GetCategorey() {
          return this.http.get(this.baseUrl + 'getcategories');
        }
      }, {
        key: "GetInventory",
        value: function GetInventory() {
          return this.http.get(this.baseUrl + 'AllInventory');
        }
      }, {
        key: "GetAllProducts",
        value: function GetAllProducts() {
          return this.http.get(_src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + 'Product/getproducts');
        }
      }, {
        key: "UpdateProduct",
        value: function UpdateProduct(form) {
          return this.http.post(_src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + 'UpdateProduct', form);
        }
      }, {
        key: "Postproduct",
        value: function Postproduct(form) {
          debugger;
          return this.http.post(_src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + 'Product/Postproducts', form);
        }
      }, {
        key: "UpdateCategory",
        value: function UpdateCategory(form) {
          return this.http.put(this.baseUrl + 'UpdateCategory', form);
        }
      }, {
        key: "UpdateBrand",
        value: function UpdateBrand(form) {
          return this.http.post(this.baseUrl + 'UpdateBrand', form);
        }
      }, {
        key: "ChangeStatus",
        value: function ChangeStatus(id) {
          return this.http.post(this.baseUrl + 'ProductChangestatus', id);
        }
      }, {
        key: "upload",
        value: function upload(formData) {
          var _this = this;

          debugger;
          return this.http.post(this.baseUrl + "AddproductExcel", formData, {
            reportProgress: true,
            observe: 'events'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            return _this.getEventMessage(event, formData);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "getEventMessage",
        value: function getEventMessage(event, formData) {
          switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress:
              return this.fileUploadProgress(event);
              break;

            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response:
              return this.apiResponse(event);
              break;

            default:
              return "File \"".concat(formData.get('Uploadfile').name, "\" surprising upload event: ").concat(event.type, ".");
          }
        }
      }, {
        key: "fileUploadProgress",
        value: function fileUploadProgress(event) {
          var percentDone = Math.round(100 * event.loaded / event.total);
          return {
            status: 'progress',
            message: percentDone
          };
        }
      }, {
        key: "apiResponse",
        value: function apiResponse(event) {
          return event.body;
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          } // return an observable with a user-facing error message


          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened. Please try again later.');
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], ProductService);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-Products-Products-module~pages-categories-categories-module-es5.js.map