function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Orders-Orders-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Orders/AllOrders/AllOrders.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Orders/AllOrders/AllOrders.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrdersAllOrdersAllOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n<!-- Hover table card start -->\r\n<app-card [title]=\"'Orders'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n  <span class=\"code-header\">All Orders Detail</span>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\" >\r\n     \r\n    </div>\r\n    <div class=\"col-sm-12\" >\r\n      <div class=\"col-sm-2\" style=\"float: right;padding-bottom: 8px;\">\r\n        <select class=\"custom-select\"#mySelect\r\n        (change)='onOptionsSelected(mySelect.value)' >\r\n          <option selected value=\"0\">All</option>\r\n         <option value=\"1\">Pending</option>\r\n         <option value=\"2\">Active</option>\r\n         <option value=\"3\">Completed</option>\r\n         <option value=\"4\">Cancelled</option>\r\n    \r\n        </select>\r\n        </div>\r\n      <div class=\"col-sm-2\" style=\"float: right;\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"vendorname\" (ngModelChange)=\"SearchRider()\" placeholder=\"Enter Name to search\" >\r\n           \r\n         \r\n     </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"table-responsive\" style=\"padding: 2%;\">\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n      <tr>\r\n        <th (click)=\"Sort('id')\">#<i class=\"fa fa-sort\"></i></th>\r\n        <th (click)=\"Sort('code')\">Order No.<i class=\"fa fa-sort\"></i></th>\r\n        <th (click)=\"Sort('storename')\">Vendor<i class=\"fa fa-sort\"></i></th>\r\n        <th (click)=\"Sort('createDate')\">Date<i class=\"fa fa-sort\"></i></th>\r\n        <th (click)=\"Sort('status')\">Status<i class=\"fa fa-sort\"></i></th>\r\n        <th (click)=\"Sort('delivertDate')\">Delivering Date<i class=\"fa fa-sort\"></i></th>\r\n        <th (click)=\"Sort('billinginfo.subtotal')\">Sub Total<i class=\"fa fa-sort\"></i></th>\r\n        <th (click)=\"Sort('billinginfo.discounted_Amount')\">Discount<i class=\"fa fa-sort\"></i></th>\r\n\r\n      <th (click)=\"Sort('billinginfo.grandTotal')\">Grand Total<i class=\"fa fa-sort\"></i></th>\r\n      <th (click)=\"Sort('Action')\">Action<i class=\"fa fa-sort\"></i></th>\r\n      <!-- <th>Image</th> -->\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let obj of SearchOrdersList | paginate:{itemsPerPage:10,currentPage:p}; let i=index;\" >\r\n        <td style=\"width: 2px;\">{{i+1}}</td>\r\n        <td>{{obj.code}}</td>\r\n        <td>{{obj.storename}}</td>\r\n        <td>{{obj.createDate| date:'medium'}}</td>\r\n        <td>{{obj.status}}</td>\r\n      \r\n        <td>{{obj.delivertDate | date:'medium'}}</td>\r\n        <td>{{obj.billinginfo?.subtotal}}</td>\r\n        <td>{{obj.billinginfo?.discounted_Amount}}</td>\r\n        <td>{{obj.billinginfo?.grandTotal}}</td>\r\n    \r\n       <td>  <div class=\"row\">\r\n\r\n        <div style=\"padding: 4px;\">\r\n          <i class=\"fa fa-desktop\" aria-hidden=\"true\" style=\"font-size:18px;color:rgb(255, 0, 0)\"  (click)=\"openOrderDetailLg(OrderDetailcontent,obj.orderId)\" ></i> \r\n        </div>\r\n        <div style=\"padding: 4px;\"*ngIf=\"obj.status!='Completed'\">\r\n          <i class=\"fa fa-edit\" aria-hidden=\"true\" style=\"font-size:18px;color:rgb(113, 147, 240)\"  (click)=\"openOrderUpdateLg(EditStatuscontent,obj.orderId)\" ></i> \r\n        </div>\r\n    </div></td>\r\n      </tr>\r\n     \r\n      </tbody>\r\n    \r\n    </table>\r\n    <div class=\"row\">\r\n      <div style=\"right: 10%;\">\r\n        <pagination-controls (pageChange)=\"p=$event\"></pagination-controls>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</app-card>\r\n<!-- Hover table card end -->\r\n      </div>\r\n    </div>\r\n\r\n    <ng-template #OrderDetailcontent let-modal>\r\n      \r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Order Detail</h4>\r\n      \r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover\">\r\n      <thead>\r\n           <tr>\r\n             <th>Product Name</th>\r\n             <th>Barcode</th>\r\n             <th>Qty</th>\r\n             <th>Unit Price</th>\r\n             <th>Total price</th>\r\n           </tr>\r\n      </thead>\r\n      <tbody *ngFor=\"let obj of orderitemns\">\r\n        <tr>\r\n          <th>{{obj?.productName}}</th>\r\n          <th>{{obj?.barcode}}</th>\r\n          <th>{{obj?.qty}}</th>\r\n          <th>{{obj?.price}}</th>\r\n          <th>{{obj?.totalprice}}</th>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n           </div>\r\n    \r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n      </div>\r\n    </ng-template>\r\n  \r\n  \r\n    <ng-template #EditStatuscontent let-modal>\r\n      \r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Order Detail</h4>\r\n      \r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"container\">\r\n          <form [formGroup]=\"orderstatus\" >\r\n      <input type=\"hidden\" formControlName=\"orderId\"/>\r\n            <label>Select Status</label>\r\n            <select class=\"custom-select custom-select-lg sm-1\"formControlName=\"status\"\r\n            (change)='onOptionsOrderStatusSelected()'>\r\n             \r\n              <!-- <option value=\"Pending\" *ngIf=\"ordercurrentstatus==''\">Pending</option> -->\r\n              <option value=\"Active\"*ngIf=\"ordercurrentstatus=='Pending'\" >Active</option>\r\n              <option value=\"Completed\"*ngIf=\"ordercurrentstatus=='Active'\">Completed</option>\r\n              \r\n  \r\n            </select>\r\n      \r\n             \r\n          </form>\r\n      </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n      </div>\r\n    </ng-template>\r\n    <ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"default\" type=\"ball-spin-clockwise\">  \r\n      <p style=\"color: white\">Please Wait. </p>  \r\n      </ngx-spinner> \r\n  \r\n  \r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Orders/OrderStatus/OrderStatus.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Orders/OrderStatus/OrderStatus.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrdersOrderStatusOrderStatusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  OrderStatus works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Orders/Orders.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Orders/Orders.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrdersOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  Orders works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Orders/PosOrder/PosOrder.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Orders/PosOrder/PosOrder.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrdersPosOrderPosOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n<!-- Hover table card start -->\r\n<app-card [title]=\"'Orders'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n  <span class=\"code-header\">All POS Orders Detail </span>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\" >\r\n     \r\n    </div>\r\n    <div class=\"col-sm-12\" >\r\n      \r\n      <div class=\"col-sm-2\" style=\"float: right;\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ordercode\" (ngModelChange)=\"SearchRider()\" placeholder=\"Enter Order No. to search\" >\r\n           \r\n         \r\n     </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"table-responsive\" style=\"padding: 2%;\">\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n      <tr>\r\n        <th (click)=\"Sort('id')\">#<i class=\"fa fa-sort\"></i></th>\r\n        <th (click)=\"Sort('orderId')\">Order No.<i class=\"fa fa-sort\"></i></th>\r\n    \r\n        <th (click)=\"Sort('billinginfo.percentageDiscount')\">Date<i class=\"fa fa-sort\"></i></th>\r\n        <th (click)=\"Sort('billinginfo.subtotal')\">Sub Total<i class=\"fa fa-sort\"></i></th>\r\n        <th (click)=\"Sort('billinginfo.subtotal')\">Discount<i class=\"fa fa-sort\"></i></th>\r\n\r\n      <th (click)=\"Sort('billinginfo.grandTotal')\">Grand Total<i class=\"fa fa-sort\"></i></th>\r\n      <th (click)=\"Sort('Action')\">Action<i class=\"fa fa-sort\"></i></th>\r\n      <!-- <th>Image</th> -->\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let obj of SearchOrdersList | paginate:{itemsPerPage:10,currentPage:p}; let i=index;\" >\r\n        <td style=\"width: 2px;\">{{i+1}}</td>\r\n        <td>{{obj.ordercode}}</td>\r\n     \r\n        <td>{{obj.date}}</td>\r\n       \r\n      \r\n     \r\n        <td>{{obj.billinginfo?.subtotal}}</td>\r\n        <td>{{obj.billinginfo?.discounted_Amount}}</td>\r\n        <td>{{obj.billinginfo?.grandTotal}}</td>\r\n    \r\n       <td>  <div class=\"row\">\r\n\r\n        <div style=\"padding: 4px;\">\r\n          <i class=\"fa fa-desktop\" aria-hidden=\"true\" style=\"font-size:18px;color:rgb(255, 0, 0)\"  (click)=\"openOrderDetailLg(OrderDetailcontent,obj.orderId)\" ></i> \r\n        </div>\r\n        <!-- <div style=\"padding: 4px;\">\r\n          <i class=\"fa fa-edit\" aria-hidden=\"true\" style=\"font-size:18px;color:rgb(113, 147, 240)\"  (click)=\"openOrderUpdateLg(EditStatuscontent,obj.orderId)\" ></i> \r\n        </div> -->\r\n    </div></td>\r\n      </tr>\r\n     \r\n      </tbody>\r\n    \r\n    </table>\r\n    <div class=\"row\">\r\n      <div style=\"right: 10%;\">\r\n        <pagination-controls (pageChange)=\"p=$event\"></pagination-controls>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</app-card>\r\n<!-- Hover table card end -->\r\n      </div>\r\n    </div>\r\n\r\n    <ng-template #OrderDetailcontent let-modal>\r\n      \r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Order Detail</h4>\r\n      \r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover\">\r\n      <thead>\r\n           <tr>\r\n             <th>Product Name</th>\r\n             <th>Barcode</th>\r\n             <th>Qty</th>\r\n             <th>Unit Price</th>\r\n             <th>Total price</th>\r\n           </tr>\r\n      </thead>\r\n      <tbody *ngFor=\"let obj of orderitemns\">\r\n        <tr>\r\n          <th>{{obj?.productName}}</th>\r\n          <th>{{obj?.barcode}}</th>\r\n          <th>{{obj?.qty}}</th>\r\n          <th>{{obj?.price}}</th>\r\n          <th>{{obj?.totalprice}}</th>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n           </div>\r\n    \r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n      </div>\r\n    </ng-template>\r\n    <ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"default\" type=\"ball-spin-clockwise\">  \r\n      <p style=\"color: white\">Please Wait. </p>  \r\n      </ngx-spinner> \r\n  \r\n  \r\n  \r\n  \r\n  \r\n";
    /***/
  },

  /***/
  "./src/app/_service/order.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_service/order.service.ts ***!
    \*******************************************/

  /*! exports provided: OrderService */

  /***/
  function srcApp_serviceOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
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


    var _src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../src/environments/environment.prod */
    "./src/environments/environment.prod.ts");

    var OrderService = /*#__PURE__*/function () {
      function OrderService(http) {
        _classCallCheck(this, OrderService);

        this.http = http;
        this.baseUrl = _src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + 'OrderApi/';
        this.baseUrl2 = _src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + 'PosOrder/';
      }

      _createClass(OrderService, [{
        key: "GetOrders",
        value: function GetOrders() {
          return this.http.get(this.baseUrl + 'GetAllOrders', httpOptions);
        }
      }, {
        key: "GetPosOrders",
        value: function GetPosOrders() {
          return this.http.get(this.baseUrl2 + 'GetPosOrders', httpOptions);
        }
      }, {
        key: "UpdateOrderStatus",
        value: function UpdateOrderStatus(form) {
          return this.http.post(this.baseUrl + 'OrderStatus', form);
        }
      }]);

      return OrderService;
    }();

    OrderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], OrderService);
    ;
    var headers_object = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + localStorage.getItem('token')
    });
    var httpOptions = {
      headers: headers_object
    };
    /***/
  },

  /***/
  "./src/app/pages/Orders/AllOrders/AllOrders.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/Orders/AllOrders/AllOrders.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrdersAllOrdersAllOrdersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL09yZGVycy9BbGxPcmRlcnMvQWxsT3JkZXJzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/Orders/AllOrders/AllOrders.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/Orders/AllOrders/AllOrders.component.ts ***!
    \***************************************************************/

  /*! exports provided: AllOrdersComponent */

  /***/
  function srcAppPagesOrdersAllOrdersAllOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllOrdersComponent", function () {
      return AllOrdersComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _src_app_service_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../src/app/_service/order.service */
    "./src/app/_service/order.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var AllOrdersComponent = /*#__PURE__*/function () {
      function AllOrdersComponent(SpinnerService, orderservice, modalService) {
        _classCallCheck(this, AllOrdersComponent);

        this.SpinnerService = SpinnerService;
        this.orderservice = orderservice;
        this.modalService = modalService;
        this.key = 'rowid';
        this.reverse = false;
        this.p = 1;
        this.ss = false;
        this.orderstatus = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          orderId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
      }

      _createClass(AllOrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.GetOrders();
        }
      }, {
        key: "openOrderDetailLg",
        value: function openOrderDetailLg(content, id) {
          
          var data = this.OrdersList.find(function (res) {
            return res.orderId == id;
          });
          this.orderitemns = data.items;
          this.modalService.open(content, {
            size: 'lg'
          });
        }
      }, {
        key: "openOrderUpdateLg",
        value: function openOrderUpdateLg(content, id) {
          
          this.statusorderid = id;
          var dd = this.SearchOrdersList.filter(function (x) {
            return x.orderId == id;
          });
          this.ordercurrentstatus = dd[0].status;
          this.modalService.open(content, {
            size: 'lg'
          });
        }
      }, {
        key: "onOptionsOrderStatusSelected",
        value: function onOptionsOrderStatusSelected() {
          var _this = this;

          this.orderstatus.get('orderId').patchValue(this.statusorderid);
          this.orderservice.UpdateOrderStatus(this.orderstatus.value).subscribe(function (next) {
            _this.OrdersList.forEach(function (x) {
              if (x.orderId == _this.statusorderid) {
                x.status = _this.orderstatus.value.status;
              }
            });

            _this.modalService.dismissAll();

            _this.orderstatus.reset();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onOptionsSelected",
        value: function onOptionsSelected(num) {
          var _this2 = this;

          

          if (num == "0") {
            this.SearchOrdersList = this.OrdersList;
          }

          if (num == "1") {
            this.status = "Pending";
            this.SearchOrdersList = this.OrdersList.filter(function (x) {
              return x.status == _this2.status;
            });
          }

          if (num == "2") {
            this.status = "Active";
            this.SearchOrdersList = this.OrdersList.filter(function (x) {
              return x.status == _this2.status;
            });
          }

          if (num == "3") {
            this.status = "Completed";
            this.SearchOrdersList = this.OrdersList.filter(function (x) {
              return x.status == _this2.status;
            });
          }

          if (num == "4") {
            this.status = "Cancelled";
            this.SearchOrdersList = this.OrdersList.filter(function (x) {
              return x.status == _this2.status;
            });
          }
        }
      }, {
        key: "SearchRider",
        value: function SearchRider() {
          var _this3 = this;

          if (this.vendorname == "") {
            this.SearchOrdersList = this.OrdersList;
          } else {
            if (this.OrdersList != null) {
              this.SearchOrdersList = this.OrdersList.filter(function (res) {
                return res.vendorname.match(_this3.vendorname);
              });
            }
          }
        }
      }, {
        key: "GetOrders",
        value: function GetOrders() {
          var _this4 = this;

          this.SpinnerService.show();
          this.orderservice.GetOrders().subscribe(function (next) {
            _this4.OrdersList = [];
            _this4.OrdersList = next.res;
            console.log(next.res);
            _this4.SearchOrdersList = _this4.OrdersList;

            _this4.SpinnerService.hide();

            console.log(_this4.OrdersList);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "Sort",
        value: function Sort(key) {
          this.key = key;
          this.reverse = !this.reverse;
        }
      }]);

      return AllOrdersComponent;
    }();

    AllOrdersComponent.ctorParameters = function () {
      return [{
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
      }, {
        type: _src_app_service_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }];
    };

    AllOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-AllOrders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./AllOrders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Orders/AllOrders/AllOrders.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./AllOrders.component.scss */
      "./src/app/pages/Orders/AllOrders/AllOrders.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], _src_app_service_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])], AllOrdersComponent);
    /***/
  },

  /***/
  "./src/app/pages/Orders/OrderRouting.routing.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/Orders/OrderRouting.routing.ts ***!
    \******************************************************/

  /*! exports provided: OrderRoutingModule */

  /***/
  function srcAppPagesOrdersOrderRoutingRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function () {
      return OrderRoutingModule;
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


    var _AllOrders_AllOrders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./AllOrders/AllOrders.component */
    "./src/app/pages/Orders/AllOrders/AllOrders.component.ts");
    /* harmony import */


    var _PosOrder_PosOrder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./PosOrder/PosOrder.component */
    "./src/app/pages/Orders/PosOrder/PosOrder.component.ts");

    var routes = [{
      path: '',
      component: _AllOrders_AllOrders_component__WEBPACK_IMPORTED_MODULE_3__["AllOrdersComponent"],
      data: {
        breadcrumb: ' Orders',
        icon: 'icofont-table bg-c-blue',
        breadcrumb_caption: 'All Orders',
        status: true
      }
    }, {
      path: 'posorders',
      component: _PosOrder_PosOrder_component__WEBPACK_IMPORTED_MODULE_4__["PosOrderComponent"],
      data: {
        breadcrumb: 'Pos Orders',
        icon: 'icofont-table bg-c-blue',
        breadcrumb_caption: 'All Pos Orders Detail',
        status: true
      }
    }];

    var OrderRoutingModule = function OrderRoutingModule() {
      _classCallCheck(this, OrderRoutingModule);
    };

    OrderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrderRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/Orders/OrderStatus/OrderStatus.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/Orders/OrderStatus/OrderStatus.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrdersOrderStatusOrderStatusComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL09yZGVycy9PcmRlclN0YXR1cy9PcmRlclN0YXR1cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/Orders/OrderStatus/OrderStatus.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/Orders/OrderStatus/OrderStatus.component.ts ***!
    \*******************************************************************/

  /*! exports provided: OrderStatusComponent */

  /***/
  function srcAppPagesOrdersOrderStatusOrderStatusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderStatusComponent", function () {
      return OrderStatusComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OrderStatusComponent = /*#__PURE__*/function () {
      function OrderStatusComponent() {
        _classCallCheck(this, OrderStatusComponent);
      }

      _createClass(OrderStatusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrderStatusComponent;
    }();

    OrderStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-OrderStatus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./OrderStatus.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Orders/OrderStatus/OrderStatus.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./OrderStatus.component.scss */
      "./src/app/pages/Orders/OrderStatus/OrderStatus.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], OrderStatusComponent);
    /***/
  },

  /***/
  "./src/app/pages/Orders/Orders.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/pages/Orders/Orders.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrdersOrdersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL09yZGVycy9PcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/Orders/Orders.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/Orders/Orders.component.ts ***!
    \**************************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppPagesOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OrdersComponent = /*#__PURE__*/function () {
      function OrdersComponent() {
        _classCallCheck(this, OrdersComponent);
      }

      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrdersComponent;
    }();

    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-Orders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./Orders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Orders/Orders.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./Orders.component.scss */
      "./src/app/pages/Orders/Orders.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], OrdersComponent);
    /***/
  },

  /***/
  "./src/app/pages/Orders/Orders.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/Orders/Orders.module.ts ***!
    \***********************************************/

  /*! exports provided: OrdersModule */

  /***/
  function srcAppPagesOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersModule", function () {
      return OrdersModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _Orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Orders.component */
    "./src/app/pages/Orders/Orders.component.ts");
    /* harmony import */


    var _AllOrders_AllOrders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./AllOrders/AllOrders.component */
    "./src/app/pages/Orders/AllOrders/AllOrders.component.ts");
    /* harmony import */


    var _OrderStatus_OrderStatus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./OrderStatus/OrderStatus.component */
    "./src/app/pages/Orders/OrderStatus/OrderStatus.component.ts");
    /* harmony import */


    var _OrderRouting_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./OrderRouting.routing */
    "./src/app/pages/Orders/OrderRouting.routing.ts");
    /* harmony import */


    var _src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_dropzone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-dropzone */
    "./node_modules/ngx-dropzone/fesm2015/ngx-dropzone.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/ng2-search-filter.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _PosOrder_PosOrder_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./PosOrder/PosOrder.component */
    "./src/app/pages/Orders/PosOrder/PosOrder.component.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var OrdersModule = function OrdersModule() {
      _classCallCheck(this, OrdersModule);
    };

    OrdersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _OrderRouting_routing__WEBPACK_IMPORTED_MODULE_6__["OrderRoutingModule"], _src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_10__["NgxDropzoneModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"]],
      declarations: [_Orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"], _AllOrders_AllOrders_component__WEBPACK_IMPORTED_MODULE_4__["AllOrdersComponent"], _OrderStatus_OrderStatus_component__WEBPACK_IMPORTED_MODULE_5__["OrderStatusComponent"], _PosOrder_PosOrder_component__WEBPACK_IMPORTED_MODULE_13__["PosOrderComponent"]],
      providers: [ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerService"]]
    })], OrdersModule);
    /***/
  },

  /***/
  "./src/app/pages/Orders/PosOrder/PosOrder.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/Orders/PosOrder/PosOrder.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrdersPosOrderPosOrderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL09yZGVycy9Qb3NPcmRlci9Qb3NPcmRlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/Orders/PosOrder/PosOrder.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/Orders/PosOrder/PosOrder.component.ts ***!
    \*************************************************************/

  /*! exports provided: PosOrderComponent */

  /***/
  function srcAppPagesOrdersPosOrderPosOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PosOrderComponent", function () {
      return PosOrderComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _service_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../_service/order.service */
    "./src/app/_service/order.service.ts");
    /* harmony import */


    var _service_PosService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../_service/PosService.service */
    "./src/app/_service/PosService.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var PosOrderComponent = /*#__PURE__*/function () {
      function PosOrderComponent(SpinnerService, orderservice, modalService, posorderservice) {
        _classCallCheck(this, PosOrderComponent);

        this.SpinnerService = SpinnerService;
        this.orderservice = orderservice;
        this.modalService = modalService;
        this.posorderservice = posorderservice;
        this.key = 'rowid';
        this.reverse = false;
        this.p = 1;
        this.ss = false;
      }

      _createClass(PosOrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.GetOrders();
        }
      }, {
        key: "openOrderDetailLg",
        value: function openOrderDetailLg(content, id) {
          
          var data = this.OrdersList.find(function (res) {
            return res.orderId == id;
          });
          this.orderitemns = data.items;
          this.modalService.open(content, {
            size: 'lg'
          });
        }
      }, {
        key: "openOrderUpdateLg",
        value: function openOrderUpdateLg(content, id) {
          
          this.statusorderid = id;
          this.modalService.open(content, {
            size: 'lg'
          });
        }
      }, {
        key: "SearchRider",
        value: function SearchRider() {
          var _this5 = this;

          

          if (this.ordercode == "") {
            this.SearchOrdersList = this.OrdersList;
          } else {
            if (this.OrdersList != null) {
              this.SearchOrdersList = this.OrdersList.filter(function (res) {
                return res.ordercode.toLocaleLowerCase().match(_this5.ordercode.toLocaleLowerCase());
              });
            }
          }
        }
      }, {
        key: "GetOrders",
        value: function GetOrders() {
          var _this6 = this;

          this.SpinnerService.show();
          this.posorderservice.GetPosOrders().subscribe(function (next) {
            _this6.OrdersList = [];
            _this6.OrdersList = next.res;

            _this6.SpinnerService.hide();

            _this6.SearchOrdersList = _this6.OrdersList;
            console.log(_this6.OrdersList);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "Sort",
        value: function Sort(key) {
          this.key = key;
          this.reverse = !this.reverse;
        }
      }]);

      return PosOrderComponent;
    }();

    PosOrderComponent.ctorParameters = function () {
      return [{
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
      }, {
        type: _service_PosService_service__WEBPACK_IMPORTED_MODULE_4__["PosServiceService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _service_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
      }];
    };

    PosOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-PosOrder',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./PosOrder.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Orders/PosOrder/PosOrder.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./PosOrder.component.scss */
      "./src/app/pages/Orders/PosOrder/PosOrder.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], _service_PosService_service__WEBPACK_IMPORTED_MODULE_4__["PosServiceService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _service_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]])], PosOrderComponent);
    /***/
  }
}]);
//# sourceMappingURL=pages-Orders-Orders-module-es5.js.map