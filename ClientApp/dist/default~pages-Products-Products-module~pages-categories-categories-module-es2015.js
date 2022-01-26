(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-Products-Products-module~pages-categories-categories-module"],{

/***/ "./node_modules/ng2-order-pipe/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ng2-order-pipe/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
/**
 * Created by vadimdez on 20/01/2017.
 */
__export(__webpack_require__(/*! ./src/ng2-order.module */ "./node_modules/ng2-order-pipe/dist/src/ng2-order.module.js"));
__export(__webpack_require__(/*! ./src/ng2-order.pipe */ "./node_modules/ng2-order-pipe/dist/src/ng2-order.pipe.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-order-pipe/dist/src/ng2-order.module.js":
/*!******************************************************************!*\
  !*** ./node_modules/ng2-order-pipe/dist/src/ng2-order.module.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by vadimdez on 20/01/2017.
 */
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var ng2_order_pipe_1 = __webpack_require__(/*! ./ng2-order.pipe */ "./node_modules/ng2-order-pipe/dist/src/ng2-order.pipe.js");
var Ng2OrderModule = (function () {
    function Ng2OrderModule() {
    }
    return Ng2OrderModule;
}());
Ng2OrderModule = __decorate([
    core_1.NgModule({
        declarations: [ng2_order_pipe_1.Ng2OrderPipe],
        exports: [ng2_order_pipe_1.Ng2OrderPipe]
    })
], Ng2OrderModule);
exports.Ng2OrderModule = Ng2OrderModule;
//# sourceMappingURL=ng2-order.module.js.map

/***/ }),

/***/ "./node_modules/ng2-order-pipe/dist/src/ng2-order.pipe.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-order-pipe/dist/src/ng2-order.pipe.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var Ng2OrderPipe = Ng2OrderPipe_1 = (function () {
    function Ng2OrderPipe() {
    }
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
}());
Ng2OrderPipe = Ng2OrderPipe_1 = __decorate([
    core_1.Pipe({
        name: 'orderBy'
    })
], Ng2OrderPipe);
exports.Ng2OrderPipe = Ng2OrderPipe;
var Ng2OrderPipe_1;
//# sourceMappingURL=ng2-order.pipe.js.map

/***/ }),

/***/ "./src/app/_service/fileupload.service.ts":
/*!************************************************!*\
  !*** ./src/app/_service/fileupload.service.ts ***!
  \************************************************/
/*! exports provided: FileuploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileuploadService", function() { return FileuploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/environments/environment.prod */ "./src/environments/environment.prod.ts");






let FileuploadService = class FileuploadService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + 'ProductApi/';
        this.baseurl2 = _src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + 'AddDataWithExcelApi/';
        this.baseurl3 = _src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + 'DashboardApi/';
    }
    uploadproductfile(profileImage, apipath) {
        var formData = new FormData();
        formData.append("Uploadfile", profileImage);
        return this.http.post(this.baseurl2 + apipath, formData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
    }
    uploadbannerimage(profileImage, apipath) {
        
        var formData = new FormData();
        formData.append("image", profileImage);
        ;
        return this.http.post(this.baseurl3 + apipath, formData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
    }
    uploadproductimage(profileImage, apipath, id) {
        var formData = new FormData();
        formData.append("ProductImage", profileImage);
        formData.append("productId", id);
        return this.http.post(this.baseUrl + apipath, formData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
    }
    uploadbrandimage(profileImage, apipath, id) {
        
        var formData = new FormData();
        formData.append("Image", profileImage);
        formData.append("Id", id);
        return this.http.post(this.baseUrl + apipath, formData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
    }
    uploadcategoryimage(profileImage, apipath, id) {
        
        var formData = new FormData();
        formData.append("Image", profileImage);
        formData.append("Id", id);
        return this.http.post(this.baseUrl + apipath, formData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
    }
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
FileuploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
FileuploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], FileuploadService);



/***/ }),

/***/ "./src/app/_service/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_service/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/environments/environment.prod */ "./src/environments/environment.prod.ts");






let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + 'category/';
    }
    ;
    GetCategoryProduct(dto) {
        return this.http.post(this.baseUrl + 'CategoryWiseProduct', dto);
    }
    ;
    postcategorey(form) {
        return this.http.post(this.baseUrl + 'AddCategory', form);
    }
    ;
    Addcateogry(form) {
        
        return this.http.post(this.baseUrl + 'postcategory', form);
    }
    ;
    GetCategorey() {
        return this.http.get(this.baseUrl + 'getcategories');
    }
    ;
    GetInventory() {
        return this.http.get(this.baseUrl + 'AllInventory');
    }
    ;
    GetAllProducts() {
        return this.http.get(_src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + 'Product/getproducts');
    }
    ;
    UpdateProduct(form) {
        return this.http.post(_src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + 'UpdateProduct', form);
    }
    ;
    Postproduct(form) {
        
        return this.http.post(_src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + 'Product/Postproducts', form);
    }
    ;
    UpdateCategory(form) {
        return this.http.put(this.baseUrl + 'UpdateCategory', form);
    }
    ;
    UpdateBrand(form) {
        return this.http.post(this.baseUrl + 'UpdateBrand', form);
    }
    ;
    ChangeStatus(id) {
        return this.http.post(this.baseUrl + 'ProductChangestatus', id);
    }
    ;
    upload(formData) {
        
        return this.http.post(this.baseUrl + "AddproductExcel", formData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(event => this.getEventMessage(event, formData)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getEventMessage(event, formData) {
        switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress:
                return this.fileUploadProgress(event);
                break;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response:
                return this.apiResponse(event);
                break;
            default:
                return `File "${formData.get('Uploadfile').name}" surprising upload event: ${event.type}.`;
        }
    }
    fileUploadProgress(event) {
        const percentDone = Math.round(100 * event.loaded / event.total);
        return { status: 'progress', message: percentDone };
    }
    apiResponse(event) {
        return event.body;
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened. Please try again later.');
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ProductService);



/***/ })

}]);
//# sourceMappingURL=default~pages-Products-Products-module~pages-categories-categories-module-es2015.js.map