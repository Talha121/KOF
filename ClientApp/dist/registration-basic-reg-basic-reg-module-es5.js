function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-basic-reg-basic-reg-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/registration/basic-reg/basic-reg.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/registration/basic-reg/basic-reg.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthRegistrationBasicRegBasicRegComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"login p-fixed d-flex text-center bg-primary common-img-bg\">\r\n  <!-- starts -->\r\n  <div class=\"auth-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <!-- Authentication card start -->\r\n        <div class=\"login-card card-body auth-body\">\r\n          <form class=\"md-float-material\">\r\n            <div class=\"text-center\">\r\n              <img src=\"assets/images/auth/logo-dark.png\" alt=\"Guru Able\">\r\n            </div>\r\n            <div class=\"auth-box\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"text-center txt-primary\">Sign up. It is fast and easy.</h3>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Choose Username\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your Email Address\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"Choose Password\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"row m-t-25 text-left\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">I read and accept <a href=\"javascript:;\">Terms &amp; Conditions.</a></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">Send me the <a href=\"javascript:;\">Newsletter</a> weekly.</span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-30\">\r\n                <div class=\"col-md-12\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Sign up now.</button>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-10\">\r\n                  <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\r\n                  <p class=\"text-inverse text-left\"><b>Your Autentification Team</b></p>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <!-- end of form -->\r\n        </div>\r\n        <!-- Authentication card end -->\r\n      </div>\r\n      <!-- end of col-sm-12 -->\r\n    </div>\r\n    <!-- end of row -->\r\n  </div>\r\n  <!-- end of -->\r\n</section>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/auth/registration/basic-reg/basic-reg-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/auth/registration/basic-reg/basic-reg-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: BasicRegRoutingModule */

  /***/
  function srcAppPagesAuthRegistrationBasicRegBasicRegRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicRegRoutingModule", function () {
      return BasicRegRoutingModule;
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


    var _basic_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-reg.component */
    "./src/app/pages/auth/registration/basic-reg/basic-reg.component.ts");

    var routes = [{
      path: '',
      component: _basic_reg_component__WEBPACK_IMPORTED_MODULE_3__["BasicRegComponent"],
      data: {
        title: 'Simple Registration'
      }
    }];

    var BasicRegRoutingModule = function BasicRegRoutingModule() {
      _classCallCheck(this, BasicRegRoutingModule);
    };

    BasicRegRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BasicRegRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/auth/registration/basic-reg/basic-reg.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/auth/registration/basic-reg/basic-reg.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuthRegistrationBasicRegBasicRegComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvcmVnaXN0cmF0aW9uL2Jhc2ljLXJlZy9iYXNpYy1yZWcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/auth/registration/basic-reg/basic-reg.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/auth/registration/basic-reg/basic-reg.component.ts ***!
    \**************************************************************************/

  /*! exports provided: BasicRegComponent */

  /***/
  function srcAppPagesAuthRegistrationBasicRegBasicRegComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicRegComponent", function () {
      return BasicRegComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BasicRegComponent = /*#__PURE__*/function () {
      function BasicRegComponent() {
        _classCallCheck(this, BasicRegComponent);
      }

      _createClass(BasicRegComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
        }
      }]);

      return BasicRegComponent;
    }();

    BasicRegComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-basic-reg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./basic-reg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/registration/basic-reg/basic-reg.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./basic-reg.component.scss */
      "./src/app/pages/auth/registration/basic-reg/basic-reg.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BasicRegComponent);
    /***/
  },

  /***/
  "./src/app/pages/auth/registration/basic-reg/basic-reg.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/auth/registration/basic-reg/basic-reg.module.ts ***!
    \***********************************************************************/

  /*! exports provided: BasicRegModule */

  /***/
  function srcAppPagesAuthRegistrationBasicRegBasicRegModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicRegModule", function () {
      return BasicRegModule;
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


    var _basic_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-reg.component */
    "./src/app/pages/auth/registration/basic-reg/basic-reg.component.ts");
    /* harmony import */


    var _basic_reg_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./basic-reg-routing.module */
    "./src/app/pages/auth/registration/basic-reg/basic-reg-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var BasicRegModule = function BasicRegModule() {
      _classCallCheck(this, BasicRegModule);
    };

    BasicRegModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _basic_reg_routing_module__WEBPACK_IMPORTED_MODULE_4__["BasicRegRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
      declarations: [_basic_reg_component__WEBPACK_IMPORTED_MODULE_3__["BasicRegComponent"]]
    })], BasicRegModule);
    /***/
  }
}]);
//# sourceMappingURL=registration-basic-reg-basic-reg-module-es5.js.map