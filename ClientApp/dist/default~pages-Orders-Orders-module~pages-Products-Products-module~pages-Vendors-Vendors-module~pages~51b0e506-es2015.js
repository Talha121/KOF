(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-Orders-Orders-module~pages-Products-Products-module~pages-Vendors-Vendors-module~pages~51b0e506"],{

/***/ "./node_modules/ng2-search-filter/ng2-search-filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-search-filter/ng2-search-filter.js ***!
  \*************************************************************/
/*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function() { return Ng2SearchPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function() { return Ng2SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    }
}
Ng2SearchPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'filter',
                pure: false
            },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            },] },
];
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng2-search-filter.js.map


/***/ }),

/***/ "./node_modules/ngx-dropzone/fesm2015/ngx-dropzone.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-dropzone/fesm2015/ngx-dropzone.js ***!
  \************************************************************/
/*! exports provided: NgxDropzoneModule, NgxDropzoneComponent, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneVideoPreviewComponent, NgxDropzoneRemoveBadgeComponent, ??b, ??a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneModule", function() { return NgxDropzoneModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneComponent", function() { return NgxDropzoneComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzonePreviewComponent", function() { return NgxDropzonePreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneImagePreviewComponent", function() { return NgxDropzoneImagePreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneVideoPreviewComponent", function() { return NgxDropzoneVideoPreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneRemoveBadgeComponent", function() { return NgxDropzoneRemoveBadgeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "??b", function() { return NgxDropzoneLabelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "??a", function() { return NgxDropzoneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDropzoneLabelDirective {
}
NgxDropzoneLabelDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngx-dropzone-label'
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/boolean-property.ts
 * @param {?} value
 * @return {?}
 */
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}
/**
 * Whether the provided value is considered a number.
 * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/number-property.ts
 * @param {?} value
 * @return {?}
 */
function coerceNumberProperty(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return (!isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value))) ? Number(value) : null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const KEY_CODE = {
    BACKSPACE: 8,
    DELETE: 46,
};
KEY_CODE[KEY_CODE.BACKSPACE] = 'BACKSPACE';
KEY_CODE[KEY_CODE.DELETE] = 'DELETE';
class NgxDropzonePreviewComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this._removable = false;
        /**
         * Emitted when the element should be removed.
         */
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Make the preview item focusable using the tab key.
         */
        this.tabIndex = 0;
    }
    /**
     * Allow the user to remove files.
     * @return {?}
     */
    get removable() {
        return this._removable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set removable(value) {
        this._removable = coerceBooleanProperty(value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyEvent(event) {
        switch (event.keyCode) {
            case KEY_CODE.BACKSPACE:
            case KEY_CODE.DELETE:
                this.remove();
                break;
            default:
                break;
        }
    }
    /**
     * We use the HostBinding to pass these common styles to child components.
     * @return {?}
     */
    get hostStyle() {
        /** @type {?} */
        const styles = `
			display: flex;
			height: 140px;
			min-height: 140px;
			min-width: 180px;
			max-width: 180px;
			justify-content: center;
			align-items: center;
			padding: 0 20px;
			margin: 10px;
			border-radius: 5px;
			position: relative;
		`;
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    }
    /**
     * Remove method to be used from the template.
     * @param {?} event
     * @return {?}
     */
    _remove(event) {
        event.stopPropagation();
        this.remove();
    }
    /**
     * Remove the preview item (use from component code).
     * @return {?}
     */
    remove() {
        if (this._removable) {
            this.removed.next(this.file);
        }
    }
    /**
     * @protected
     * @return {?}
     */
    readFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                /** @type {?} */
                const reader = new FileReader();
                reader.onload = (/**
                 * @param {?} e
                 * @return {?}
                 */
                e => {
                    resolve(((/** @type {?} */ (e.target))).result);
                });
                reader.onerror = (/**
                 * @param {?} e
                 * @return {?}
                 */
                e => {
                    console.error(`FileReader failed on file ${this.file.name}.`);
                    reject(e);
                });
                if (!this.file) {
                    return reject('No file to read. Please provide a file using the [file] Input property.');
                }
                reader.readAsDataURL(this.file);
            }));
        });
    }
}
NgxDropzonePreviewComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-dropzone-preview',
                template: `
		<ng-content select="ngx-dropzone-label"></ng-content>
		<ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
		</ngx-dropzone-remove-badge>
	`,
                styles: [`:host(){background-image:linear-gradient(to top,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}:host():focus,:host():hover{background-image:linear-gradient(to top,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}:host():focus ngx-dropzone-remove-badge,:host():hover ngx-dropzone-remove-badge{opacity:1}:host() ngx-dropzone-remove-badge{opacity:0}:host() ::ng-deep ngx-dropzone-label{overflow-wrap:break-word}`]
            },] },
];
/** @nocollapse */
NgxDropzonePreviewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
NgxDropzonePreviewComponent.propDecorators = {
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    removable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    removed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    keyEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup', ['$event'],] }],
    hostStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style',] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['tabindex',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This service contains the filtering logic to be applied to
 * any dropped or selected file. If a file matches all criteria
 * like maximum size or accept type, it will be emitted in the
 * addedFiles array, otherwise in the rejectedFiles array.
 */
class NgxDropzoneService {
    /**
     * @param {?} files
     * @param {?} accept
     * @param {?} maxFileSize
     * @param {?} multiple
     * @return {?}
     */
    parseFileList(files, accept, maxFileSize, multiple) {
        /** @type {?} */
        const addedFiles = [];
        /** @type {?} */
        const rejectedFiles = [];
        for (let i = 0; i < files.length; i++) {
            /** @type {?} */
            const file = files.item(i);
            if (!this.isAccepted(file, accept)) {
                this.rejectFile(rejectedFiles, file, 'type');
                continue;
            }
            if (maxFileSize && file.size > maxFileSize) {
                this.rejectFile(rejectedFiles, file, 'size');
                continue;
            }
            if (!multiple && addedFiles.length >= 1) {
                this.rejectFile(rejectedFiles, file, 'no_multiple');
                continue;
            }
            addedFiles.push(file);
        }
        /** @type {?} */
        const result = {
            addedFiles,
            rejectedFiles
        };
        return result;
    }
    /**
     * @private
     * @param {?} file
     * @param {?} accept
     * @return {?}
     */
    isAccepted(file, accept) {
        if (accept === '*') {
            return true;
        }
        /** @type {?} */
        const acceptFiletypes = accept.split(',').map((/**
         * @param {?} it
         * @return {?}
         */
        it => it.toLowerCase().trim()));
        /** @type {?} */
        const filetype = file.type.toLowerCase();
        /** @type {?} */
        const filename = file.name.toLowerCase();
        /** @type {?} */
        const matchedFileType = acceptFiletypes.find((/**
         * @param {?} acceptFiletype
         * @return {?}
         */
        acceptFiletype => {
            // check for wildcard mimetype (e.g. image/*)
            if (acceptFiletype.endsWith('/*')) {
                return filetype.split('/')[0] === acceptFiletype.split('/')[0];
            }
            // check for file extension (e.g. .csv)
            if (acceptFiletype.startsWith(".")) {
                return filename.endsWith(acceptFiletype);
            }
            // check for exact mimetype match (e.g. image/jpeg)
            return acceptFiletype == filetype;
        }));
        return !!matchedFileType;
    }
    /**
     * @private
     * @param {?} rejectedFiles
     * @param {?} file
     * @param {?} reason
     * @return {?}
     */
    rejectFile(rejectedFiles, file, reason) {
        /** @type {?} */
        const rejectedFile = (/** @type {?} */ (file));
        rejectedFile.reason = reason;
        rejectedFiles.push(rejectedFile);
    }
}
NgxDropzoneService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDropzoneComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        /**
         * Emitted when any files were added or rejected.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Set the accepted file types. Defaults to '*'.
         */
        this.accept = '*';
        this._disabled = false;
        this._multiple = true;
        this._maxFileSize = undefined;
        this._expandable = false;
        this._disableClick = false;
        this._isHovered = false;
    }
    /**
     * @return {?}
     */
    get _hasPreviews() {
        return !!this._previewChildren.length;
    }
    /**
     * Disable any user interaction with the component.
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        if (this._isHovered) {
            this._isHovered = false;
        }
    }
    /**
     * Allow the selection of multiple files.
     * @return {?}
     */
    get multiple() {
        return this._multiple;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set multiple(value) {
        this._multiple = coerceBooleanProperty(value);
    }
    /**
     * Set the maximum size a single file may have.
     * @return {?}
     */
    get maxFileSize() {
        return this._maxFileSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxFileSize(value) {
        this._maxFileSize = coerceNumberProperty(value);
    }
    /**
     * Allow the dropzone container to expand vertically.
     * @return {?}
     */
    get expandable() {
        return this._expandable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set expandable(value) {
        this._expandable = coerceBooleanProperty(value);
    }
    /**
     * Open the file selector on click.
     * @return {?}
     */
    get disableClick() {
        return this._disableClick;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disableClick(value) {
        this._disableClick = coerceBooleanProperty(value);
    }
    /**
     * Show the native OS file explorer to select files.
     * @return {?}
     */
    _onClick() {
        if (!this.disableClick) {
            this.showFileSelector();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragOver(event) {
        if (this.disabled) {
            return;
        }
        this.preventDefault(event);
        this._isHovered = true;
    }
    /**
     * @return {?}
     */
    _onDragLeave() {
        this._isHovered = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDrop(event) {
        if (this.disabled) {
            return;
        }
        this.preventDefault(event);
        this._isHovered = false;
        this.handleFileDrop(event.dataTransfer.files);
    }
    /**
     * @return {?}
     */
    showFileSelector() {
        if (!this.disabled) {
            ((/** @type {?} */ (this._fileInput.nativeElement))).click();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onFilesSelected(event) {
        /** @type {?} */
        const files = event.target.files;
        this.handleFileDrop(files);
        // Reset the native file input element to allow selecting the same file again
        this._fileInput.nativeElement.value = '';
        // fix(#32): Prevent the default event behaviour which caused the change event to emit twice.
        this.preventDefault(event);
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    handleFileDrop(files) {
        /** @type {?} */
        const result = this.service.parseFileList(files, this.accept, this.maxFileSize, this.multiple);
        this.change.next({
            addedFiles: result.addedFiles,
            rejectedFiles: result.rejectedFiles,
            source: this
        });
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    preventDefault(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
NgxDropzoneComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-dropzone, [ngx-dropzone]',
                template: `<input #fileInput type="file" [id]="id" [multiple]="multiple" [accept]="accept" [disabled]="disabled"
  (change)="_onFilesSelected($event)" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledby"
  [attr.aria-describedby]="ariaDescribedBy">
<ng-content select="ngx-dropzone-label" *ngIf="!_hasPreviews"></ng-content>
<ng-content select="ngx-dropzone-preview"></ng-content>
<ng-content></ng-content>
`,
                styles: [`:host(){display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}:host().ngx-dz-hovered{border-style:solid}:host().ngx-dz-disabled{opacity:.5;cursor:no-drop;pointer-events:none}:host().expandable{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}:host().unclickable{cursor:default}:host() ::ng-deep ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}:host() input{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}:host() input:focus+::ng-deep ngx-dropzone-label{outline:#000 dotted 1px;outline:-webkit-focus-ring-color auto 5px}`],
                providers: [NgxDropzoneService]
            },] },
];
/** @nocollapse */
NgxDropzoneComponent.ctorParameters = () => [
    { type: NgxDropzoneService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
];
NgxDropzoneComponent.propDecorators = {
    _previewChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgxDropzonePreviewComponent, { descendants: true },] }],
    _fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['fileInput',] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    accept: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ngx-dz-disabled',] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxFileSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    expandable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.expandable',] }],
    disableClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.unclickable',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-labelledby',] }],
    ariaDescribedBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-describedby',] }],
    _isHovered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ngx-dz-hovered',] }],
    _onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
    _onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }],
    _onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave',] }],
    _onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDropzoneImagePreviewComponent extends NgxDropzonePreviewComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        super(sanitizer);
        /**
         * The image data source.
         */
        this.defualtImgLoading = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDIsIDI0Mykgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIyNHB4IiBoZWlnaHQ9IjIyNHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxNCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiM4NWEyYjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIxLjk5MTE0ODU3NTEyODU1MiAyMS45OTExNDg1NzUxMjg1NTIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGR1cj0iMS4xNjI3OTA2OTc2NzQ0MTg0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iI2JiY2VkZCIgc3Ryb2tlLWRhc2hhcnJheT0iMTUuNzA3OTYzMjY3OTQ4OTY2IDE1LjcwNzk2MzI2Nzk0ODk2NiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE1LjcwNzk2MzI2Nzk0ODk2NiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZHVyPSIxLjE2Mjc5MDY5NzY3NDQxODRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOy0zNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==';
        this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(this.defualtImgLoading);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.readFile()
            .then((/**
         * @param {?} img
         * @return {?}
         */
        img => setTimeout((/**
         * @return {?}
         */
        () => this.imageSrc = img))))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        err => console.error(err)));
    }
}
NgxDropzoneImagePreviewComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-dropzone-image-preview',
                template: `
    <img [src]="imageSrc" />
		<ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
	`,
                styles: [`:host(){min-width:unset!important;max-width:unset!important;padding:0!important}:host():focus img,:host():hover img{opacity:.7}:host():focus ngx-dropzone-remove-badge,:host():hover ngx-dropzone-remove-badge{opacity:1}:host() ngx-dropzone-remove-badge{opacity:0}:host() img{max-height:100%;border-radius:5px;opacity:.8}:host() ::ng-deep ngx-dropzone-label{position:absolute;overflow-wrap:break-word}`],
                providers: [
                    {
                        provide: NgxDropzonePreviewComponent,
                        useExisting: NgxDropzoneImagePreviewComponent
                    }
                ]
            },] },
];
/** @nocollapse */
NgxDropzoneImagePreviewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDropzoneRemoveBadgeComponent {
}
NgxDropzoneRemoveBadgeComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-dropzone-remove-badge',
                template: `
    <svg>
      <line x1="0" y1="0" x2="10" y2="10" />
      <line x1="0" y1="10" x2="10" y2="0" />
    </svg>
  `,
                styles: [`:host(){display:flex;justify-content:center;align-items:center;height:22px;width:22px;position:absolute;top:5px;right:5px;border-radius:50%;background:#bbb;color:#333;cursor:pointer}:host():hover{background:#aeaeae}:host()>svg{height:10px;width:10px}:host()>svg>line{stroke-width:2px;stroke:#fff}`]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDropzoneVideoPreviewComponent extends NgxDropzonePreviewComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        super(sanitizer);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.file) {
            console.error('No file to read. Please provide a file using the [file] Input property.');
            return;
        }
        /**
         * We sanitize the URL here to enable the preview.
         * Please note that this could cause security issues!
         **/
        this.videoSrc = URL.createObjectURL(this.file);
        this.sanitizedVideoSrc = this.sanitizer.bypassSecurityTrustUrl(this.videoSrc);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        URL.revokeObjectURL(this.videoSrc);
    }
}
NgxDropzoneVideoPreviewComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-dropzone-video-preview',
                template: `
    <video *ngIf="sanitizedVideoSrc" controls (click)="$event.stopPropagation()">
      <source [src]="sanitizedVideoSrc" />
    </video>
    <ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
	`,
                styles: [`:host(){min-width:unset!important;max-width:unset!important;padding:0!important}:host():focus video,:host():hover video{opacity:.7}:host():focus ngx-dropzone-remove-badge,:host():hover ngx-dropzone-remove-badge{opacity:1}:host() ngx-dropzone-remove-badge{opacity:0}:host() video{max-height:100%;border-radius:5px}:host() ::ng-deep ngx-dropzone-label{position:absolute;overflow-wrap:break-word}`],
                providers: [
                    {
                        provide: NgxDropzonePreviewComponent,
                        useExisting: NgxDropzoneVideoPreviewComponent
                    }
                ]
            },] },
];
/** @nocollapse */
NgxDropzoneVideoPreviewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDropzoneModule {
}
NgxDropzoneModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ],
                declarations: [
                    NgxDropzoneComponent,
                    NgxDropzoneLabelDirective,
                    NgxDropzonePreviewComponent,
                    NgxDropzoneImagePreviewComponent,
                    NgxDropzoneRemoveBadgeComponent,
                    NgxDropzoneVideoPreviewComponent,
                ],
                exports: [
                    NgxDropzoneComponent,
                    NgxDropzoneLabelDirective,
                    NgxDropzonePreviewComponent,
                    NgxDropzoneImagePreviewComponent,
                    NgxDropzoneRemoveBadgeComponent,
                    NgxDropzoneVideoPreviewComponent,
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRyb3B6b25lLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtZHJvcHpvbmUvbGliL25neC1kcm9wem9uZS1sYWJlbC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1kcm9wem9uZS9saWIvaGVscGVycy50cyIsIm5nOi8vbmd4LWRyb3B6b25lL2xpYi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtcHJldmlldy5jb21wb25lbnQudHMiLCJuZzovL25neC1kcm9wem9uZS9saWIvbmd4LWRyb3B6b25lLnNlcnZpY2UudHMiLCJuZzovL25neC1kcm9wem9uZS9saWIvbmd4LWRyb3B6b25lL25neC1kcm9wem9uZS5jb21wb25lbnQudHMiLCJuZzovL25neC1kcm9wem9uZS9saWIvbmd4LWRyb3B6b25lLXByZXZpZXcvbmd4LWRyb3B6b25lLWltYWdlLXByZXZpZXcvbmd4LWRyb3B6b25lLWltYWdlLXByZXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtZHJvcHpvbmUvbGliL25neC1kcm9wem9uZS1wcmV2aWV3L25neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2Uvbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZS5jb21wb25lbnQudHMiLCJuZzovL25neC1kcm9wem9uZS9saWIvbmd4LWRyb3B6b25lLXByZXZpZXcvbmd4LWRyb3B6b25lLXZpZGVvLXByZXZpZXcvbmd4LWRyb3B6b25lLXZpZGVvLXByZXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtZHJvcHpvbmUvbGliL25neC1kcm9wem9uZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ25neC1kcm9wem9uZS1sYWJlbCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVMYWJlbERpcmVjdGl2ZSB7IH1cbiIsIlxuLyoqXG4gKiBDb2VyY2VzIGEgZGF0YS1ib3VuZCB2YWx1ZSAodHlwaWNhbGx5IGEgc3RyaW5nKSB0byBhIGJvb2xlYW4uXG4gKiBUYWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvYmxvYi9tYXN0ZXIvc3JjL2Nkay9jb2VyY2lvbi9ib29sZWFuLXByb3BlcnR5LnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWU6IGFueSk6IGJvb2xlYW5cbntcblx0cmV0dXJuIHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbn1cblxuLyoqXG4gKiBXaGV0aGVyIHRoZSBwcm92aWRlZCB2YWx1ZSBpcyBjb25zaWRlcmVkIGEgbnVtYmVyLlxuICogVGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9jb21wb25lbnRzL2Jsb2IvbWFzdGVyL3NyYy9jZGsvY29lcmNpb24vbnVtYmVyLXByb3BlcnR5LnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZTogYW55KTogbnVtYmVyXG57XG5cdC8vIHBhcnNlRmxvYXQodmFsdWUpIGhhbmRsZXMgbW9zdCBvZiB0aGUgY2FzZXMgd2UncmUgaW50ZXJlc3RlZCBpbiAoaXQgdHJlYXRzIG51bGwsIGVtcHR5IHN0cmluZyxcblx0Ly8gYW5kIG90aGVyIG5vbi1udW1iZXIgdmFsdWVzIGFzIE5hTiwgd2hlcmUgTnVtYmVyIGp1c3QgdXNlcyAwKSBidXQgaXQgY29uc2lkZXJzIHRoZSBzdHJpbmdcblx0Ly8gJzEyM2hlbGxvJyB0byBiZSBhIHZhbGlkIG51bWJlci4gVGhlcmVmb3JlIHdlIGFsc28gY2hlY2sgaWYgTnVtYmVyKHZhbHVlKSBpcyBOYU4uXG5cdHJldHVybiAoIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUgYXMgYW55KSkgJiYgIWlzTmFOKE51bWJlcih2YWx1ZSkpKSA/IE51bWJlcih2YWx1ZSkgOiBudWxsO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgU2FmZVN0eWxlLCBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuZW51bSBLRVlfQ09ERSB7XG5cdEJBQ0tTUEFDRSA9IDgsXG5cdERFTEVURSA9IDQ2XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25neC1kcm9wem9uZS1wcmV2aWV3Jyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctY29udGVudCBzZWxlY3Q9XCJuZ3gtZHJvcHpvbmUtbGFiZWxcIj48L25nLWNvbnRlbnQ+XG5cdFx0PG5neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2UgKm5nSWY9XCJyZW1vdmFibGVcIiAoY2xpY2spPVwiX3JlbW92ZSgkZXZlbnQpXCI+XG5cdFx0PC9uZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlPlxuXHRgLFxuXHRzdHlsZXM6IFtgOmhvc3QoKXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byB0b3AsI2VkZWRlZCwjZWZlZmVmLCNmMWYxZjEsI2Y0ZjRmNCwjZjZmNmY2KX06aG9zdCgpOmZvY3VzLDpob3N0KCk6aG92ZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gdG9wLCNlM2UzZTMsI2ViZWFlYSwjZThlN2U3LCNlYmVhZWEsI2Y0ZjRmNCk7b3V0bGluZTowfTpob3N0KCk6Zm9jdXMgbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZSw6aG9zdCgpOmhvdmVyIG5neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2V7b3BhY2l0eToxfTpob3N0KCkgbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZXtvcGFjaXR5OjB9Omhvc3QoKSA6Om5nLWRlZXAgbmd4LWRyb3B6b25lLWxhYmVse292ZXJmbG93LXdyYXA6YnJlYWstd29yZH1gXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxuXHQpIHsgfVxuXG5cdC8qKiBUaGUgZmlsZSB0byBwcmV2aWV3LiAqL1xuXHRASW5wdXQoKSBmaWxlOiBGaWxlO1xuXG5cdC8qKiBBbGxvdyB0aGUgdXNlciB0byByZW1vdmUgZmlsZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZW1vdmFibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuX3JlbW92YWJsZTtcblx0fVxuXHRzZXQgcmVtb3ZhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5fcmVtb3ZhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcblx0fVxuXHRwcm90ZWN0ZWQgX3JlbW92YWJsZSA9IGZhbHNlO1xuXG5cdC8qKiBFbWl0dGVkIHdoZW4gdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlbW92ZWQuICovXG5cdEBPdXRwdXQoKSByZWFkb25seSByZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlPigpO1xuXG5cdEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcblx0a2V5RXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcblx0XHRzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcblx0XHRcdGNhc2UgS0VZX0NPREUuQkFDS1NQQUNFOlxuXHRcdFx0Y2FzZSBLRVlfQ09ERS5ERUxFVEU6XG5cdFx0XHRcdHRoaXMucmVtb3ZlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0LyoqIFdlIHVzZSB0aGUgSG9zdEJpbmRpbmcgdG8gcGFzcyB0aGVzZSBjb21tb24gc3R5bGVzIHRvIGNoaWxkIGNvbXBvbmVudHMuICovXG5cdEBIb3N0QmluZGluZygnc3R5bGUnKVxuXHRnZXQgaG9zdFN0eWxlKCk6IFNhZmVTdHlsZSB7XG5cdFx0Y29uc3Qgc3R5bGVzID0gYFxuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGhlaWdodDogMTQwcHg7XG5cdFx0XHRtaW4taGVpZ2h0OiAxNDBweDtcblx0XHRcdG1pbi13aWR0aDogMTgwcHg7XG5cdFx0XHRtYXgtd2lkdGg6IDE4MHB4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0cGFkZGluZzogMCAyMHB4O1xuXHRcdFx0bWFyZ2luOiAxMHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGA7XG5cblx0XHRyZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlcyk7XG5cdH1cblxuXHQvKiogTWFrZSB0aGUgcHJldmlldyBpdGVtIGZvY3VzYWJsZSB1c2luZyB0aGUgdGFiIGtleS4gKi9cblx0QEhvc3RCaW5kaW5nKCd0YWJpbmRleCcpIHRhYkluZGV4ID0gMDtcblxuXHQvKiogUmVtb3ZlIG1ldGhvZCB0byBiZSB1c2VkIGZyb20gdGhlIHRlbXBsYXRlLiAqL1xuXHRfcmVtb3ZlKGV2ZW50KSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5yZW1vdmUoKTtcblx0fVxuXG5cdC8qKiBSZW1vdmUgdGhlIHByZXZpZXcgaXRlbSAodXNlIGZyb20gY29tcG9uZW50IGNvZGUpLiAqL1xuXHRyZW1vdmUoKSB7XG5cdFx0aWYgKHRoaXMuX3JlbW92YWJsZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVkLm5leHQodGhpcy5maWxlKTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgYXN5bmMgcmVhZEZpbGUoKTogUHJvbWlzZTxzdHJpbmcgfCBBcnJheUJ1ZmZlcj4ge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmcgfCBBcnJheUJ1ZmZlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuXHRcdFx0cmVhZGVyLm9ubG9hZCA9IGUgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKChlLnRhcmdldCBhcyBGaWxlUmVhZGVyKS5yZXN1bHQpO1xuXHRcdFx0fTtcblxuXHRcdFx0cmVhZGVyLm9uZXJyb3IgPSBlID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgRmlsZVJlYWRlciBmYWlsZWQgb24gZmlsZSAke3RoaXMuZmlsZS5uYW1lfS5gKTtcblx0XHRcdFx0cmVqZWN0KGUpO1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCF0aGlzLmZpbGUpIHtcblx0XHRcdFx0cmV0dXJuIHJlamVjdCgnTm8gZmlsZSB0byByZWFkLiBQbGVhc2UgcHJvdmlkZSBhIGZpbGUgdXNpbmcgdGhlIFtmaWxlXSBJbnB1dCBwcm9wZXJ0eS4nKTtcblx0XHRcdH1cblxuXHRcdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwodGhpcy5maWxlKTtcblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVTZWxlY3RSZXN1bHQge1xuXG5cdC8qKiBUaGUgYWRkZWQgZmlsZXMsIGVtaXR0ZWQgaW4gdGhlIGZpbGVzQWRkZWQgZXZlbnQuICovXG5cdGFkZGVkRmlsZXM6IEZpbGVbXTtcblxuXHQvKiogVGhlIHJlamVjdGVkIGZpbGVzLCBlbWl0dGVkIGluIHRoZSBmaWxlc1JlamVjdGVkIGV2ZW50LiAqL1xuXHRyZWplY3RlZEZpbGVzOiBSZWplY3RlZEZpbGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWplY3RlZEZpbGUgZXh0ZW5kcyBGaWxlIHtcblxuXHQvKiogVGhlIHJlYXNvbiB0aGUgZmlsZSB3YXMgcmVqZWN0ZWQuICovXG5cdHJlYXNvbj86IFJlamVjdFJlYXNvbjtcbn1cblxuZXhwb3J0IHR5cGUgUmVqZWN0UmVhc29uID0gJ3R5cGUnIHwgJ3NpemUnIHwgJ25vX211bHRpcGxlJztcblxuLyoqXG4gKiBUaGlzIHNlcnZpY2UgY29udGFpbnMgdGhlIGZpbHRlcmluZyBsb2dpYyB0byBiZSBhcHBsaWVkIHRvXG4gKiBhbnkgZHJvcHBlZCBvciBzZWxlY3RlZCBmaWxlLiBJZiBhIGZpbGUgbWF0Y2hlcyBhbGwgY3JpdGVyaWFcbiAqIGxpa2UgbWF4aW11bSBzaXplIG9yIGFjY2VwdCB0eXBlLCBpdCB3aWxsIGJlIGVtaXR0ZWQgaW4gdGhlXG4gKiBhZGRlZEZpbGVzIGFycmF5LCBvdGhlcndpc2UgaW4gdGhlIHJlamVjdGVkRmlsZXMgYXJyYXkuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZVNlcnZpY2Uge1xuXG5cdHBhcnNlRmlsZUxpc3QoZmlsZXM6IEZpbGVMaXN0LCBhY2NlcHQ6IHN0cmluZywgbWF4RmlsZVNpemU6IG51bWJlciwgbXVsdGlwbGU6IGJvb2xlYW4pOiBGaWxlU2VsZWN0UmVzdWx0IHtcblxuXHRcdGNvbnN0IGFkZGVkRmlsZXM6IEZpbGVbXSA9IFtdO1xuXHRcdGNvbnN0IHJlamVjdGVkRmlsZXM6IFJlamVjdGVkRmlsZVtdID0gW107XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBmaWxlID0gZmlsZXMuaXRlbShpKTtcblxuXHRcdFx0aWYgKCF0aGlzLmlzQWNjZXB0ZWQoZmlsZSwgYWNjZXB0KSkge1xuXHRcdFx0XHR0aGlzLnJlamVjdEZpbGUocmVqZWN0ZWRGaWxlcywgZmlsZSwgJ3R5cGUnKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtYXhGaWxlU2l6ZSAmJiBmaWxlLnNpemUgPiBtYXhGaWxlU2l6ZSkge1xuXHRcdFx0XHR0aGlzLnJlamVjdEZpbGUocmVqZWN0ZWRGaWxlcywgZmlsZSwgJ3NpemUnKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghbXVsdGlwbGUgJiYgYWRkZWRGaWxlcy5sZW5ndGggPj0gMSkge1xuXHRcdFx0XHR0aGlzLnJlamVjdEZpbGUocmVqZWN0ZWRGaWxlcywgZmlsZSwgJ25vX211bHRpcGxlJyk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRhZGRlZEZpbGVzLnB1c2goZmlsZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzdWx0OiBGaWxlU2VsZWN0UmVzdWx0ID0ge1xuXHRcdFx0YWRkZWRGaWxlcyxcblx0XHRcdHJlamVjdGVkRmlsZXNcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHByaXZhdGUgaXNBY2NlcHRlZChmaWxlOiBGaWxlLCBhY2NlcHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKGFjY2VwdCA9PT0gJyonKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBhY2NlcHRGaWxldHlwZXMgPSBhY2NlcHQuc3BsaXQoJywnKS5tYXAoaXQgPT4gaXQudG9Mb3dlckNhc2UoKS50cmltKCkpO1xuXHRcdGNvbnN0IGZpbGV0eXBlID0gZmlsZS50eXBlLnRvTG93ZXJDYXNlKCk7XG5cdFx0Y29uc3QgZmlsZW5hbWUgPSBmaWxlLm5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdGNvbnN0IG1hdGNoZWRGaWxlVHlwZSA9IGFjY2VwdEZpbGV0eXBlcy5maW5kKGFjY2VwdEZpbGV0eXBlID0+IHtcblxuXHRcdFx0Ly8gY2hlY2sgZm9yIHdpbGRjYXJkIG1pbWV0eXBlIChlLmcuIGltYWdlLyopXG5cdFx0XHRpZiAoYWNjZXB0RmlsZXR5cGUuZW5kc1dpdGgoJy8qJykpIHtcblx0XHRcdFx0cmV0dXJuIGZpbGV0eXBlLnNwbGl0KCcvJylbMF0gPT09IGFjY2VwdEZpbGV0eXBlLnNwbGl0KCcvJylbMF07XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNoZWNrIGZvciBmaWxlIGV4dGVuc2lvbiAoZS5nLiAuY3N2KVxuXHRcdFx0aWYgKGFjY2VwdEZpbGV0eXBlLnN0YXJ0c1dpdGgoXCIuXCIpKSB7XG5cdFx0XHRcdHJldHVybiBmaWxlbmFtZS5lbmRzV2l0aChhY2NlcHRGaWxldHlwZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNoZWNrIGZvciBleGFjdCBtaW1ldHlwZSBtYXRjaCAoZS5nLiBpbWFnZS9qcGVnKVxuXHRcdFx0cmV0dXJuIGFjY2VwdEZpbGV0eXBlID09IGZpbGV0eXBlO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuICEhbWF0Y2hlZEZpbGVUeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSByZWplY3RGaWxlKHJlamVjdGVkRmlsZXM6IFJlamVjdGVkRmlsZVtdLCBmaWxlOiBGaWxlLCByZWFzb246IFJlamVjdFJlYXNvbikge1xuXG5cdFx0Y29uc3QgcmVqZWN0ZWRGaWxlID0gZmlsZSBhcyBSZWplY3RlZEZpbGU7XG5cdFx0cmVqZWN0ZWRGaWxlLnJlYXNvbiA9IHJlYXNvbjtcblxuXHRcdHJlamVjdGVkRmlsZXMucHVzaChyZWplY3RlZEZpbGUpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0LCBWaWV3Q2hpbGQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBTZWxmLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZVNlcnZpY2UsIEZpbGVTZWxlY3RSZXN1bHQgfSBmcm9tICcuLi9uZ3gtZHJvcHpvbmUuc2VydmljZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtcHJldmlldy5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5neERyb3B6b25lQ2hhbmdlRXZlbnQge1xuICBzb3VyY2U6IE5neERyb3B6b25lQ29tcG9uZW50O1xuICBhZGRlZEZpbGVzOiBGaWxlW107XG4gIHJlamVjdGVkRmlsZXM6IEZpbGVbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRyb3B6b25lLCBbbmd4LWRyb3B6b25lXScsXG4gIHRlbXBsYXRlOiBgPGlucHV0ICNmaWxlSW5wdXQgdHlwZT1cImZpbGVcIiBbaWRdPVwiaWRcIiBbbXVsdGlwbGVdPVwibXVsdGlwbGVcIiBbYWNjZXB0XT1cImFjY2VwdFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gIChjaGFuZ2UpPVwiX29uRmlsZXNTZWxlY3RlZCgkZXZlbnQpXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkYnlcIlxuICBbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XT1cImFyaWFEZXNjcmliZWRCeVwiPlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwibmd4LWRyb3B6b25lLWxhYmVsXCIgKm5nSWY9XCIhX2hhc1ByZXZpZXdzXCI+PC9uZy1jb250ZW50PlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwibmd4LWRyb3B6b25lLXByZXZpZXdcIj48L25nLWNvbnRlbnQ+XG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gLFxuICBzdHlsZXM6IFtgOmhvc3QoKXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2hlaWdodDoxODBweDtiYWNrZ3JvdW5kOiNmZmY7Y3Vyc29yOnBvaW50ZXI7Y29sb3I6IzcxNzM4Njtib3JkZXI6MnB4IGRhc2hlZCAjNzE3Mzg2O2JvcmRlci1yYWRpdXM6NXB4O2ZvbnQtc2l6ZToxNnB4O292ZXJmbG93LXg6YXV0b306aG9zdCgpLm5neC1kei1ob3ZlcmVke2JvcmRlci1zdHlsZTpzb2xpZH06aG9zdCgpLm5neC1kei1kaXNhYmxlZHtvcGFjaXR5Oi41O2N1cnNvcjpuby1kcm9wO3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoKS5leHBhbmRhYmxle292ZXJmbG93OmhpZGRlbjtoZWlnaHQ6dW5zZXQ7bWluLWhlaWdodDoxODBweDtmbGV4LXdyYXA6d3JhcH06aG9zdCgpLnVuY2xpY2thYmxle2N1cnNvcjpkZWZhdWx0fTpob3N0KCkgOjpuZy1kZWVwIG5neC1kcm9wem9uZS1sYWJlbHt0ZXh0LWFsaWduOmNlbnRlcjt6LWluZGV4OjEwO21hcmdpbjoxMHB4IGF1dG99Omhvc3QoKSBpbnB1dHt3aWR0aDouMXB4O2hlaWdodDouMXB4O29wYWNpdHk6MDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDotMX06aG9zdCgpIGlucHV0OmZvY3VzKzo6bmctZGVlcCBuZ3gtZHJvcHpvbmUtbGFiZWx7b3V0bGluZTojMDAwIGRvdHRlZCAxcHg7b3V0bGluZTotd2Via2l0LWZvY3VzLXJpbmctY29sb3IgYXV0byA1cHh9YF0sXG4gIHByb3ZpZGVyczogW05neERyb3B6b25lU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBTZWxmKCkgcHJpdmF0ZSBzZXJ2aWNlOiBOZ3hEcm9wem9uZVNlcnZpY2VcbiAgKSB7IH1cblxuICAvKiogQSBsaXN0IG9mIHRoZSBjb250ZW50LXByb2plY3RlZCBwcmV2aWV3IGNoaWxkcmVuLiAqL1xuICBAQ29udGVudENoaWxkcmVuKE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBfcHJldmlld0NoaWxkcmVuOiBRdWVyeUxpc3Q8Tmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50PjtcblxuICBnZXQgX2hhc1ByZXZpZXdzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX3ByZXZpZXdDaGlsZHJlbi5sZW5ndGg7XG4gIH1cblxuICAvKiogQSB0ZW1wbGF0ZSByZWZlcmVuY2UgdG8gdGhlIG5hdGl2ZSBmaWxlIGlucHV0IGVsZW1lbnQuICovXG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcpIF9maWxlSW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiBhbnkgZmlsZXMgd2VyZSBhZGRlZCBvciByZWplY3RlZC4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Tmd4RHJvcHpvbmVDaGFuZ2VFdmVudD4oKTtcblxuICAvKiogU2V0IHRoZSBhY2NlcHRlZCBmaWxlIHR5cGVzLiBEZWZhdWx0cyB0byAnKicuICovXG4gIEBJbnB1dCgpIGFjY2VwdCA9ICcqJztcblxuICAvKiogRGlzYWJsZSBhbnkgdXNlciBpbnRlcmFjdGlvbiB3aXRoIHRoZSBjb21wb25lbnQuICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3Mubmd4LWR6LWRpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG5cbiAgICBpZiAodGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICAvKiogQWxsb3cgdGhlIHNlbGVjdGlvbiBvZiBtdWx0aXBsZSBmaWxlcy4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcbiAgfVxuICBzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfbXVsdGlwbGUgPSB0cnVlO1xuXG4gIC8qKiBTZXQgdGhlIG1heGltdW0gc2l6ZSBhIHNpbmdsZSBmaWxlIG1heSBoYXZlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWF4RmlsZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4RmlsZVNpemU7XG4gIH1cbiAgc2V0IG1heEZpbGVTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhGaWxlU2l6ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9tYXhGaWxlU2l6ZTogbnVtYmVyID0gdW5kZWZpbmVkO1xuXG4gIC8qKiBBbGxvdyB0aGUgZHJvcHpvbmUgY29udGFpbmVyIHRvIGV4cGFuZCB2ZXJ0aWNhbGx5LiAqL1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmV4cGFuZGFibGUnKVxuICBnZXQgZXhwYW5kYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kYWJsZTtcbiAgfVxuICBzZXQgZXhwYW5kYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2V4cGFuZGFibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2V4cGFuZGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogT3BlbiB0aGUgZmlsZSBzZWxlY3RvciBvbiBjbGljay4gKi9cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy51bmNsaWNrYWJsZScpXG4gIGdldCBkaXNhYmxlQ2xpY2soKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVDbGljaztcbiAgfVxuICBzZXQgZGlzYWJsZUNsaWNrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZUNsaWNrID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlQ2xpY2sgPSBmYWxzZTtcblxuICAvKiogRXhwb3NlIHRoZSBpZCwgYXJpYS1sYWJlbCwgYXJpYS1sYWJlbGxlZGJ5IGFuZCBhcmlhLWRlc2NyaWJlZGJ5IG9mIHRoZSBuYXRpdmUgZmlsZSBpbnB1dCBmb3IgcHJvcGVyIGFjY2Vzc2liaWxpdHkuICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoJ2FyaWEtbGFiZWxsZWRieScpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgnYXJpYS1kZXNjcmliZWRieScpIGFyaWFEZXNjcmliZWRCeTogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mubmd4LWR6LWhvdmVyZWQnKVxuICBfaXNIb3ZlcmVkID0gZmFsc2U7XG5cbiAgLyoqIFNob3cgdGhlIG5hdGl2ZSBPUyBmaWxlIGV4cGxvcmVyIHRvIHNlbGVjdCBmaWxlcy4gKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBfb25DbGljaygpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZUNsaWNrKSB7XG4gICAgICB0aGlzLnNob3dGaWxlU2VsZWN0b3IoKTtcbiAgICB9IFxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxuICBfb25EcmFnT3ZlcihldmVudCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudCk7XG4gICAgdGhpcy5faXNIb3ZlcmVkID0gdHJ1ZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScpXG4gIF9vbkRyYWdMZWF2ZSgpIHtcbiAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICBfb25Ecm9wKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICB0aGlzLmhhbmRsZUZpbGVEcm9wKGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XG4gIH1cbiAgXG4gIHNob3dGaWxlU2VsZWN0b3IoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAodGhpcy5fZmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkuY2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBfb25GaWxlc1NlbGVjdGVkKGV2ZW50KSB7XG4gICAgY29uc3QgZmlsZXM6IEZpbGVMaXN0ID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xuICAgIHRoaXMuaGFuZGxlRmlsZURyb3AoZmlsZXMpO1xuXG4gICAgLy8gUmVzZXQgdGhlIG5hdGl2ZSBmaWxlIGlucHV0IGVsZW1lbnQgdG8gYWxsb3cgc2VsZWN0aW5nIHRoZSBzYW1lIGZpbGUgYWdhaW5cbiAgICB0aGlzLl9maWxlSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuXG4gICAgLy8gZml4KCMzMik6IFByZXZlbnQgdGhlIGRlZmF1bHQgZXZlbnQgYmVoYXZpb3VyIHdoaWNoIGNhdXNlZCB0aGUgY2hhbmdlIGV2ZW50IHRvIGVtaXQgdHdpY2UuXG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudCk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUZpbGVEcm9wKGZpbGVzOiBGaWxlTGlzdCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2VydmljZS5wYXJzZUZpbGVMaXN0KGZpbGVzLCB0aGlzLmFjY2VwdCwgdGhpcy5tYXhGaWxlU2l6ZSwgdGhpcy5tdWx0aXBsZSk7XG5cbiAgICB0aGlzLmNoYW5nZS5uZXh0KHtcbiAgICAgIGFkZGVkRmlsZXM6IHJlc3VsdC5hZGRlZEZpbGVzLFxuICAgICAgcmVqZWN0ZWRGaWxlczogcmVzdWx0LnJlamVjdGVkRmlsZXMsXG4gICAgICBzb3VyY2U6IHRoaXNcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcHJldmVudERlZmF1bHQoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LWRyb3B6b25lLXByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kcm9wem9uZS1pbWFnZS1wcmV2aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW1nIFtzcmNdPVwiaW1hZ2VTcmNcIiAvPlxuXHRcdDxuZy1jb250ZW50IHNlbGVjdD1cIm5neC1kcm9wem9uZS1sYWJlbFwiPjwvbmctY29udGVudD5cbiAgICA8bmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZSAqbmdJZj1cInJlbW92YWJsZVwiIChjbGljayk9XCJfcmVtb3ZlKCRldmVudClcIj5cbiAgICA8L25neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2U+XG5cdGAsXG4gIHN0eWxlczogW2A6aG9zdCgpe21pbi13aWR0aDp1bnNldCFpbXBvcnRhbnQ7bWF4LXdpZHRoOnVuc2V0IWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50fTpob3N0KCk6Zm9jdXMgaW1nLDpob3N0KCk6aG92ZXIgaW1ne29wYWNpdHk6Ljd9Omhvc3QoKTpmb2N1cyBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlLDpob3N0KCk6aG92ZXIgbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZXtvcGFjaXR5OjF9Omhvc3QoKSBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdle29wYWNpdHk6MH06aG9zdCgpIGltZ3ttYXgtaGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czo1cHg7b3BhY2l0eTouOH06aG9zdCgpIDo6bmctZGVlcCBuZ3gtZHJvcHpvbmUtbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkfWBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQsXG4gICAgICB1c2VFeGlzdGluZzogTmd4RHJvcHpvbmVJbWFnZVByZXZpZXdDb21wb25lbnRcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVJbWFnZVByZXZpZXdDb21wb25lbnQgZXh0ZW5kcyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkge1xuICAgIHN1cGVyKHNhbml0aXplcik7XG4gIH1cblxuICAvKiogVGhlIGltYWdlIGRhdGEgc291cmNlLiAqL1xuICAgZGVmdWFsdEltZ0xvYWRpbmcgPSAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejRLUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCemRIbHNaVDBpYldGeVoybHVPaUJoZFhSdk95QmlZV05yWjNKdmRXNWtPaUJ5WjJJb01qUXhMQ0F5TkRJc0lESTBNeWtnYm05dVpTQnlaWEJsWVhRZ2MyTnliMnhzSURBbElEQWxPeUJrYVhOd2JHRjVPaUJpYkc5amF6c2djMmhoY0dVdGNtVnVaR1Z5YVc1bk9pQmhkWFJ2T3lJZ2QybGtkR2c5SWpJeU5IQjRJaUJvWldsbmFIUTlJakl5TkhCNElpQjJhV1YzUW05NFBTSXdJREFnTVRBd0lERXdNQ0lnY0hKbGMyVnlkbVZCYzNCbFkzUlNZWFJwYnowaWVFMXBaRmxOYVdRaVBnbzhZMmx5WTJ4bElHTjRQU0kxTUNJZ1kzazlJalV3SWlCeVBTSXhOQ0lnYzNSeWIydGxMWGRwWkhSb1BTSXpJaUJ6ZEhKdmEyVTlJaU00TldFeVlqWWlJSE4wY205clpTMWtZWE5vWVhKeVlYazlJakl4TGprNU1URTBPRFUzTlRFeU9EVTFNaUF5TVM0NU9URXhORGcxTnpVeE1qZzFOVElpSUdacGJHdzlJbTV2Ym1VaUlITjBjbTlyWlMxc2FXNWxZMkZ3UFNKeWIzVnVaQ0krQ2lBZ1BHRnVhVzFoZEdWVWNtRnVjMlp2Y20wZ1lYUjBjbWxpZFhSbFRtRnRaVDBpZEhKaGJuTm1iM0p0SWlCMGVYQmxQU0p5YjNSaGRHVWlJR1IxY2owaU1TNHhOakkzT1RBMk9UYzJOelEwTVRnMGN5SWdjbVZ3WldGMFEyOTFiblE5SW1sdVpHVm1hVzVwZEdVaUlHdGxlVlJwYldWelBTSXdPekVpSUhaaGJIVmxjejBpTUNBMU1DQTFNRHN6TmpBZ05UQWdOVEFpUGp3dllXNXBiV0YwWlZSeVlXNXpabTl5YlQ0S1BDOWphWEpqYkdVK0NqeGphWEpqYkdVZ1kzZzlJalV3SWlCamVUMGlOVEFpSUhJOUlqRXdJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqTWlJSE4wY205clpUMGlJMkppWTJWa1pDSWdjM1J5YjJ0bExXUmhjMmhoY25KaGVUMGlNVFV1TnpBM09UWXpNalkzT1RRNE9UWTJJREUxTGpjd056azJNekkyTnprME9EazJOaUlnYzNSeWIydGxMV1JoYzJodlptWnpaWFE5SWpFMUxqY3dOemsyTXpJMk56azBPRGsyTmlJZ1ptbHNiRDBpYm05dVpTSWdjM1J5YjJ0bExXeHBibVZqWVhBOUluSnZkVzVrSWo0S0lDQThZVzVwYldGMFpWUnlZVzV6Wm05eWJTQmhkSFJ5YVdKMWRHVk9ZVzFsUFNKMGNtRnVjMlp2Y20waUlIUjVjR1U5SW5KdmRHRjBaU0lnWkhWeVBTSXhMakUyTWpjNU1EWTVOelkzTkRReE9EUnpJaUJ5WlhCbFlYUkRiM1Z1ZEQwaWFXNWtaV1pwYm1sMFpTSWdhMlY1VkdsdFpYTTlJakE3TVNJZ2RtRnNkV1Z6UFNJd0lEVXdJRFV3T3kwek5qQWdOVEFnTlRBaVBqd3ZZVzVwYldGMFpWUnlZVzV6Wm05eWJUNEtQQzlqYVhKamJHVStDandoTFMwZ1cyeGthVzlkSUdkbGJtVnlZWFJsWkNCaWVTQm9kSFJ3Y3pvdkwyeHZZV1JwYm1jdWFXOHZJQzB0UGp3dmMzWm5QZz09JztcbiAgaW1hZ2VTcmM6IGFueSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodGhpcy5kZWZ1YWx0SW1nTG9hZGluZyk7IFxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVhZEZpbGUoKVxuICAgICAgLnRoZW4oaW1nID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbWFnZVNyYyA9IGltZykpXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnPlxuICAgICAgPGxpbmUgeDE9XCIwXCIgeTE9XCIwXCIgeDI9XCIxMFwiIHkyPVwiMTBcIiAvPlxuICAgICAgPGxpbmUgeDE9XCIwXCIgeTE9XCIxMFwiIHgyPVwiMTBcIiB5Mj1cIjBcIiAvPlxuICAgIDwvc3ZnPlxuICBgLFxuICBzdHlsZXM6IFtgOmhvc3QoKXtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7aGVpZ2h0OjIycHg7d2lkdGg6MjJweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NXB4O3JpZ2h0OjVweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOiNiYmI7Y29sb3I6IzMzMztjdXJzb3I6cG9pbnRlcn06aG9zdCgpOmhvdmVye2JhY2tncm91bmQ6I2FlYWVhZX06aG9zdCgpPnN2Z3toZWlnaHQ6MTBweDt3aWR0aDoxMHB4fTpob3N0KCk+c3ZnPmxpbmV7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2U6I2ZmZn1gXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZVJlbW92ZUJhZGdlQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LWRyb3B6b25lLXByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZHJvcHpvbmUtdmlkZW8tcHJldmlldycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHZpZGVvICpuZ0lmPVwic2FuaXRpemVkVmlkZW9TcmNcIiBjb250cm9scyAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgICA8c291cmNlIFtzcmNdPVwic2FuaXRpemVkVmlkZW9TcmNcIiAvPlxuICAgIDwvdmlkZW8+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmd4LWRyb3B6b25lLWxhYmVsXCI+PC9uZy1jb250ZW50PlxuICAgIDxuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlICpuZ0lmPVwicmVtb3ZhYmxlXCIgKGNsaWNrKT1cIl9yZW1vdmUoJGV2ZW50KVwiPlxuICAgIDwvbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZT5cblx0YCxcbiAgc3R5bGVzOiBbYDpob3N0KCl7bWluLXdpZHRoOnVuc2V0IWltcG9ydGFudDttYXgtd2lkdGg6dW5zZXQhaW1wb3J0YW50O3BhZGRpbmc6MCFpbXBvcnRhbnR9Omhvc3QoKTpmb2N1cyB2aWRlbyw6aG9zdCgpOmhvdmVyIHZpZGVve29wYWNpdHk6Ljd9Omhvc3QoKTpmb2N1cyBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlLDpob3N0KCk6aG92ZXIgbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZXtvcGFjaXR5OjF9Omhvc3QoKSBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdle29wYWNpdHk6MH06aG9zdCgpIHZpZGVve21heC1oZWlnaHQ6MTAwJTtib3JkZXItcmFkaXVzOjVweH06aG9zdCgpIDo6bmctZGVlcCBuZ3gtZHJvcHpvbmUtbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkfWBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQsXG4gICAgICB1c2VFeGlzdGluZzogTmd4RHJvcHpvbmVWaWRlb1ByZXZpZXdDb21wb25lbnRcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVWaWRlb1ByZXZpZXdDb21wb25lbnQgZXh0ZW5kcyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7XG4gICAgc3VwZXIoc2FuaXRpemVyKTtcbiAgfVxuXG4gIC8qKiBUaGUgdmlkZW8gZGF0YSBzb3VyY2UuICovXG4gIHNhbml0aXplZFZpZGVvU3JjOiBTYWZlVXJsO1xuXG4gIHByaXZhdGUgdmlkZW9TcmM6IHN0cmluZztcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuZmlsZSkge1xuICAgICAgY29uc29sZS5lcnJvcignTm8gZmlsZSB0byByZWFkLiBQbGVhc2UgcHJvdmlkZSBhIGZpbGUgdXNpbmcgdGhlIFtmaWxlXSBJbnB1dCBwcm9wZXJ0eS4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXZSBzYW5pdGl6ZSB0aGUgVVJMIGhlcmUgdG8gZW5hYmxlIHRoZSBwcmV2aWV3LlxuICAgICAqIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBjb3VsZCBjYXVzZSBzZWN1cml0eSBpc3N1ZXMhXG4gICAgICoqL1xuICAgIHRoaXMudmlkZW9TcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuZmlsZSk7XG4gICAgdGhpcy5zYW5pdGl6ZWRWaWRlb1NyYyA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodGhpcy52aWRlb1NyYyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMudmlkZW9TcmMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5neERyb3B6b25lTGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuL25neC1kcm9wem9uZS1sYWJlbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtcHJldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVDb21wb25lbnQgfSBmcm9tICcuL25neC1kcm9wem9uZS9uZ3gtZHJvcHpvbmUuY29tcG9uZW50JztcbmltcG9ydCB7IE5neERyb3B6b25lSW1hZ2VQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtaW1hZ2UtcHJldmlldy9uZ3gtZHJvcHpvbmUtaW1hZ2UtcHJldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVSZW1vdmVCYWRnZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWRyb3B6b25lLXByZXZpZXcvbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZS9uZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZVZpZGVvUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4vbmd4LWRyb3B6b25lLXByZXZpZXcvbmd4LWRyb3B6b25lLXZpZGVvLXByZXZpZXcvbmd4LWRyb3B6b25lLXZpZGVvLXByZXZpZXcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHROZ3hEcm9wem9uZUNvbXBvbmVudCxcblx0XHROZ3hEcm9wem9uZUxhYmVsRGlyZWN0aXZlLFxuXHRcdE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCxcblx0XHROZ3hEcm9wem9uZUltYWdlUHJldmlld0NvbXBvbmVudCxcblx0XHROZ3hEcm9wem9uZVJlbW92ZUJhZGdlQ29tcG9uZW50LFxuXHRcdE5neERyb3B6b25lVmlkZW9QcmV2aWV3Q29tcG9uZW50LFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Tmd4RHJvcHpvbmVDb21wb25lbnQsXG5cdFx0Tmd4RHJvcHpvbmVMYWJlbERpcmVjdGl2ZSxcblx0XHROZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQsXG5cdFx0Tmd4RHJvcHpvbmVJbWFnZVByZXZpZXdDb21wb25lbnQsXG5cdFx0Tmd4RHJvcHpvbmVSZW1vdmVCYWRnZUNvbXBvbmVudCxcblx0XHROZ3hEcm9wem9uZVZpZGVvUHJldmlld0NvbXBvbmVudCxcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZU1vZHVsZSB7IH1cbiJd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

/***/ })

}]);
//# sourceMappingURL=default~pages-Orders-Orders-module~pages-Products-Products-module~pages-Vendors-Vendors-module~pages~51b0e506-es2015.js.map