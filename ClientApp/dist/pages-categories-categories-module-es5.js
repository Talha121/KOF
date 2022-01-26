function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categories-categories-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/Allcategories/Allcategories.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/Allcategories/Allcategories.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCategoriesAllcategoriesAllcategoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Hover table card start -->\r\n    <app-card\r\n      [title]=\"'Categories'\"\r\n      [classHeader]=\"true\"\r\n      [blockClass]=\"'table-border-style'\"\r\n    >\r\n      <span class=\"code-header\">All Categories Detail</span>\r\n\r\n      <div class=\"row\" *ngIf=\"!showform\">\r\n        <div class=\"col-sm-10\">\r\n          <button\r\n            class=\"btn btn-success pull-right\"\r\n            (click)=\"createCategory(categoryModal)\"\r\n          >\r\n            Add Category\r\n          </button>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"table-responsive\" style=\"padding: 2%\">\r\n        <table class=\"table table-hover\">\r\n          <thead>\r\n            <tr>\r\n              <th (click)=\"Sort('id')\">#<i class=\"fa fa-sort\"></i></th>\r\n              <th (click)=\"Sort('name')\">\r\n                Category Name<i class=\"fa fa-sort\"></i>\r\n              </th>\r\n              <th (click)=\"Sort('status')\">\r\n                Status<i class=\"fa fa-sort\"></i>\r\n              </th>\r\n              \r\n              <th (click)=\"Sort('id')\">\r\n                Image<i class=\"fa fa-sort\"></i>\r\n              </th>\r\n              <th (click)=\"Sort('description')\">\r\n                Actions<i class=\"fa fa-sort\"></i>\r\n              </th>\r\n              <!-- <th>Image</th> -->\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr\r\n              *ngFor=\"\r\n                let obj of CategoriesList\r\n                  | orderBy: key:reverse\r\n                  | paginate: { itemsPerPage: 10, currentPage: p };\r\n                let i = index\r\n              \"\r\n            >\r\n              <td style=\"width: 2px\">{{ i + 1 }}</td>\r\n              <td>{{ obj.name }}</td>\r\n              <td>{{ obj.status }}</td>\r\n              <td *ngIf=\"obj.imageUrl != noimage; else nImage\">\r\n                <img\r\n                  [src]=\"ImagebaseUrl+obj.imageUrl\"\r\n                  style=\"height: 40px\"\r\n                />\r\n              </td>\r\n              <ng-template #nImage>\r\n                <td>No Image</td>\r\n              </ng-template>\r\n              <td>\r\n                <div class=\"row\">\r\n                  <!-- <div style=\"padding: 4px\">\r\n                    <i\r\n                      class=\"fa fa-upload\"\r\n                      aria-hidden=\"true\"\r\n                      style=\"font-size: 18px; color: rgb(255, 0, 0)\"\r\n                      title=\"Upload Image\"\r\n                      (click)=\"openLg(uploadfilecontent, obj.category_Id)\"\r\n                    ></i>\r\n                  </div> -->\r\n                  <div style=\"padding: 4px\">\r\n                    <i\r\n                      class=\"fa fa-edit\"\r\n                      style=\"font-size: 18px; color: rgb(0, 195, 255)\"\r\n                      (click)=\"UpdateView(categoryModal, obj.id)\"\r\n                    ></i>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"row\">\r\n          <div style=\"right: 10%\">\r\n            <pagination-controls\r\n              (pageChange)=\"p = $event\"\r\n            ></pagination-controls>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Hover table card end -->\r\n  </div>\r\n</div>\r\n\r\n<ngx-spinner\r\n  bdColor=\"rgba(51, 51, 51, 0.8)\"\r\n  size=\"default\"\r\n  type=\"ball-spin-clockwise\"\r\n>\r\n  <p style=\"color: white\">Please Wait.</p>\r\n</ngx-spinner>\r\n\r\n<ng-template #categoryModal let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{ modalContent }} Category</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form class=\"needs-validation\" novalidate [formGroup]=\"CategoryForm\">\r\n      <div class=\"form-row\">\r\n        <div class=\"col-md-5 mb-3\">\r\n          <label for=\"validationCustom01\">Category Name</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"validationCustom01\"\r\n            placeholder=\"Category Name\"\r\n            formControlName=\"name\"\r\n            required\r\n          />\r\n        </div>\r\n        <div class=\"col-md-5 mb-3\">\r\n          <label for=\"validationCustom01\">Category Image</label>\r\n          <div class=\"form-group\">\r\n            <input type=\"file\"  (change)=\"uploadFile($event)\" required />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button\r\n    style=\"float: right\"\r\n    class=\"btn btn-primary\"\r\n    (click)=\"submit()\"\r\n    type=\"submit\"\r\n  >\r\n    Submit\r\n  </button>\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-light\"\r\n      (click)=\"modal.close('Close click')\"\r\n    >\r\n      Close\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCategoriesCategoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  categories works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./src/app/Models/Category.ts":
  /*!************************************!*\
    !*** ./src/app/Models/Category.ts ***!
    \************************************/

  /*! exports provided: Category */

  /***/
  function srcAppModelsCategoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Category", function () {
      return Category;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Category = function Category() {
      _classCallCheck(this, Category);
    };
    /***/

  },

  /***/
  "./src/app/pages/categories/Allcategories/Allcategories.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/categories/Allcategories/Allcategories.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCategoriesAllcategoriesAllcategoriesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZXMvQWxsY2F0ZWdvcmllcy9BbGxjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/categories/Allcategories/Allcategories.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/categories/Allcategories/Allcategories.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AllcategoriesComponent */

  /***/
  function srcAppPagesCategoriesAllcategoriesAllcategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllcategoriesComponent", function () {
      return AllcategoriesComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../../../src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _src_app_service_fileupload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../src/app/_service/fileupload.service */
    "./src/app/_service/fileupload.service.ts");
    /* harmony import */


    var _src_app_service_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../src/app/_service/product.service */
    "./src/app/_service/product.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _src_app_Models_Category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../src/app/Models/Category */
    "./src/app/Models/Category.ts");
    /* harmony import */


    var _src_app_service_alertify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../../src/app/_service/alertify.service */
    "./src/app/_service/alertify.service.ts");

    var AllcategoriesComponent = /*#__PURE__*/function () {
      function AllcategoriesComponent(categorymodel, alertify, SpinnerService, productservice, modalService, uploadfileservice, fb) {
        _classCallCheck(this, AllcategoriesComponent);

        this.categorymodel = categorymodel;
        this.alertify = alertify;
        this.SpinnerService = SpinnerService;
        this.productservice = productservice;
        this.modalService = modalService;
        this.uploadfileservice = uploadfileservice;
        this.fb = fb;
        this.ImagebaseUrl = _src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].Imagebaseurl + "Images/CategoryImages/";
        this.key = "rowid";
        this.reverse = false;
        this.p = 1;
        this.noimage = "";
        this.showform = false;
        this.progress = 0;
        this.modalContent = "";
        this.CategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.categorymodel.name),
          id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
          image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
      }

      _createClass(AllcategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.SpinnerService.show();
          this.Getcategorey();
          this.form = this.fb.group({
            avatar: [null]
          });
          this.SpinnerService.hide();
        }
      }, {
        key: "showinput",
        value: function showinput() {
          this.showform = true;
        }
      }, {
        key: "AddCategory",
        value: function AddCategory() {
          var _this = this;

          
          var data = this.CategoryForm.value;
          var formData = new FormData();
          formData.append("Name", data.name);
          formData.append("image", data.image);
          this.productservice.Addcateogry(formData).subscribe(function (next) {
            _this.modalService.dismissAll();

            _this.CategoryForm.reset();

            _this.Getcategorey();

            _this.alertify.success("Category Created successfully");
          }, function (error) {
            _this.alertify.error("already exists");

            console.log(error);
          });
          console.log(this.CategoryForm.value);
        }
      }, {
        key: "UpdateCategory",
        value: function UpdateCategory() {
          var _this2 = this;

          
          var data = this.CategoryForm.value;
          var formData = new FormData();
          formData.append("Id", data.id);
          formData.append("Name", data.name);
          formData.append("image", data.image);
          this.productservice.UpdateCategory(formData).subscribe(function (next) {
            _this2.modalService.dismissAll();

            _this2.CategoryForm.reset();

            _this2.Getcategorey();

            _this2.alertify.success("Category Updated seccussfully");
          }, function (error) {
            _this2.modalService.dismissAll();

            _this2.CategoryForm.reset();

            _this2.alertify.success("Category Updated seccussfully");

            console.log(error);
          });
          console.log(this.CategoryForm.value);
        }
      }, {
        key: "Getcategorey",
        value: function Getcategorey() {
          var _this3 = this;

          this.SpinnerService.show();
          this.productservice.GetCategorey().subscribe(function (response) {
            
            _this3.CategoriesList = [];
            _this3.CategoriesList = response;
            console.log(_this3.CategoriesList);
          }, function (error) {
            console.log(error);
          });
          this.SpinnerService.hide();
        }
      }, {
        key: "Sort",
        value: function Sort(key) {
          this.key = key;
          this.reverse = !this.reverse;
        }
      }, {
        key: "openLg",
        value: function openLg(content, id) {
          this.categotyid = id;
          this.modalService.open(content, {
            size: "lg"
          });
        }
      }, {
        key: "UpdateView",
        value: function UpdateView(content, id) {
          
          this.modalContent = "Update";
          var data = this.CategoriesList.find(function (res) {
            return res.id == id;
          });
          
          this.Singlecategory = data;
          this.CategoryForm.patchValue({
            id: this.Singlecategory.id,
            name: this.Singlecategory.name,
            status: this.Singlecategory.status
          });
          this.modalService.open(content, {
            size: "lg"
          });
        }
      }, {
        key: "createCategory",
        value: function createCategory(content) {
          this.modalContent = "Create";
          this.CategoryForm.reset();
          this.modalService.open(content, {
            size: "lg"
          });
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(event) {
          
          var file = event.target.files[0];
          this.CategoryForm.get("image").patchValue(file);
          this.CategoryForm.get("image").updateValueAndValidity();
        }
      }, {
        key: "SubmitImage",
        value: function SubmitImage() {
          var _this4 = this;

          

          if (this.form.value.avatar != null) {
            var apipath = "UploadImageCategory";
            this.uploadfileservice.uploadbrandimage(this.form.value.avatar, apipath, this.categotyid).subscribe(function (event) {
              switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Sent:
                  console.log("Request has been made!");
                  break;

                case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].ResponseHeader:
                  console.log("Response header has been received!");

                  _this4.form.reset();

                  _this4.modalService.dismissAll();

                  break;

                case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress:
                  _this4.progress = Math.round(event.loaded / event.total * 100);
                  console.log("Uploaded! ".concat(_this4.progress, "%"));
                  break;

                case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response:
                  console.log("User successfully created!", event.body);
                  setTimeout(function () {
                    _this4.progress = 0;
                  }, 1500);
              }

              _this4.Getcategorey();
            });
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          
          var id = this.CategoryForm.get("id").value;

          if (id == null || id == "") {
            this.AddCategory();
          } else {
            this.UpdateCategory();
          }
        }
      }]);

      return AllcategoriesComponent;
    }();

    AllcategoriesComponent.ctorParameters = function () {
      return [{
        type: _src_app_Models_Category__WEBPACK_IMPORTED_MODULE_9__["Category"]
      }, {
        type: _src_app_service_alertify_service__WEBPACK_IMPORTED_MODULE_10__["AlertifyService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]
      }, {
        type: _src_app_service_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }, {
        type: _src_app_service_fileupload_service__WEBPACK_IMPORTED_MODULE_6__["FileuploadService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    AllcategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-Allcategories",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./Allcategories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/Allcategories/Allcategories.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./Allcategories.component.scss */
      "./src/app/pages/categories/Allcategories/Allcategories.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_src_app_Models_Category__WEBPACK_IMPORTED_MODULE_9__["Category"], _src_app_service_alertify_service__WEBPACK_IMPORTED_MODULE_10__["AlertifyService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], _src_app_service_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _src_app_service_fileupload_service__WEBPACK_IMPORTED_MODULE_6__["FileuploadService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], AllcategoriesComponent);
    /***/
  },

  /***/
  "./src/app/pages/categories/categories.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/categories/categories.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCategoriesCategoriesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/categories/categories.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/categories/categories.component.ts ***!
    \**********************************************************/

  /*! exports provided: CategoriesComponent */

  /***/
  function srcAppPagesCategoriesCategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function () {
      return CategoriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CategoriesComponent = /*#__PURE__*/function () {
      function CategoriesComponent() {
        _classCallCheck(this, CategoriesComponent);
      }

      _createClass(CategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategoriesComponent;
    }();

    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categories.component.scss */
      "./src/app/pages/categories/categories.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CategoriesComponent);
    /***/
  },

  /***/
  "./src/app/pages/categories/categories.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/categories/categories.module.ts ***!
    \*******************************************************/

  /*! exports provided: CategoriesModule */

  /***/
  function srcAppPagesCategoriesCategoriesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesModule", function () {
      return CategoriesModule;
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


    var _categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./categories.component */
    "./src/app/pages/categories/categories.component.ts");
    /* harmony import */


    var _Allcategories_Allcategories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Allcategories/Allcategories.component */
    "./src/app/pages/categories/Allcategories/Allcategories.component.ts");
    /* harmony import */


    var _categoryrouting_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./categoryrouting.routing */
    "./src/app/pages/categories/categoryrouting.routing.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-dropzone */
    "./node_modules/ngx-dropzone/fesm2015/ngx-dropzone.js");
    /* harmony import */


    var _src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng2-order-pipe */
    "./node_modules/ng2-order-pipe/dist/index.js");
    /* harmony import */


    var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_order_pipe__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/ng2-search-filter.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _src_app_Models_Category__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../src/app/Models/Category */
    "./src/app/Models/Category.ts");

    var CategoriesModule = function CategoriesModule() {
      _classCallCheck(this, CategoriesModule);
    };

    CategoriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _categoryrouting_routing__WEBPACK_IMPORTED_MODULE_5__["categoriesRoutingmodule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneModule"], ng2_order_pipe__WEBPACK_IMPORTED_MODULE_10__["Ng2OrderModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"]],
      declarations: [_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"], _Allcategories_Allcategories_component__WEBPACK_IMPORTED_MODULE_4__["AllcategoriesComponent"]],
      providers: [ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerService"], _src_app_Models_Category__WEBPACK_IMPORTED_MODULE_14__["Category"]]
    })], CategoriesModule);
    /***/
  },

  /***/
  "./src/app/pages/categories/categoryrouting.routing.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/categories/categoryrouting.routing.ts ***!
    \*************************************************************/

  /*! exports provided: categoriesRoutingmodule */

  /***/
  function srcAppPagesCategoriesCategoryroutingRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "categoriesRoutingmodule", function () {
      return categoriesRoutingmodule;
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


    var _Allcategories_Allcategories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Allcategories/Allcategories.component */
    "./src/app/pages/categories/Allcategories/Allcategories.component.ts");

    var routes = [{
      path: '',
      component: _Allcategories_Allcategories_component__WEBPACK_IMPORTED_MODULE_3__["AllcategoriesComponent"],
      data: {
        breadcrumb: ' Categories',
        icon: 'icofont-table bg-c-blue',
        breadcrumb_caption: 'All categories',
        status: true
      }
    }];

    var categoriesRoutingmodule = function categoriesRoutingmodule() {
      _classCallCheck(this, categoriesRoutingmodule);
    };

    categoriesRoutingmodule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], categoriesRoutingmodule);
    /***/
  }
}]);
//# sourceMappingURL=pages-categories-categories-module-es5.js.map