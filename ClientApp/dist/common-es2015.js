(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/_service/stockin.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_service/stockin.service.ts ***!
  \*********************************************/
/*! exports provided: StockinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockinService", function() { return StockinService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/environments/environment.prod */ "./src/environments/environment.prod.ts");




let StockinService = class StockinService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + 'ProductApi/';
    }
    GetstockIn() {
        return this.http.get(this.baseUrl + 'AllInventory');
    }
    ;
    ChangeStatus(id) {
        return this.http.post(this.baseUrl + 'Changestatus', id);
    }
    ;
};
StockinService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
StockinService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], StockinService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map