(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h1>\r\n    Grid Viewer\r\n  </h1>\r\n  <app-gridset></app-gridset>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/api.service */ "./src/app/shared/api.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(apiService) {
        this.apiService = apiService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAll().subscribe(function (data) {
            _this.joggingRecords = data;
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["default"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _gridset_gridset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gridset/gridset.component */ "./src/app/gridset/gridset.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _gridset_gridset_component__WEBPACK_IMPORTED_MODULE_7__["GridsetComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [_shared_api_service__WEBPACK_IMPORTED_MODULE_6__["default"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gridset/gridset.component.html":
/*!************************************************!*\
  !*** ./src/app/gridset/gridset.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\r\n  <div>\r\n    <dl>\r\n      <dt>\r\n        SizeDimension\r\n      </dt>\r\n      <dd>{{gridSet.sizeDimension}}</dd>\r\n    </dl>\r\n  </div>\r\n\r\n  <button class=\"btn btn-primary\" type=\"submit\">SUBMIT</button>\r\n  <div *ngFor=\"let item of gridSet.multiplierGrids; index as i\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n\r\n      </div>\r\n      <div class=\"col-md-1\">\r\n        <h4 class=\"gridHeading\">\r\n          Size ({{item.gridType}}={{item.gridIndex}})\r\n        </h4>\r\n      </div>\r\n      <div class=\"col-md-1\">\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-1\">\r\n\r\n      </div>\r\n      <div class=\"col-md-1 gridTitle\" *ngFor=\"let rowItem of item.gridRows\">\r\n        {{rowItem.gridIndex}}\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngFor=\"let row of item.gridRows\">\r\n      <div class=\"col-md-1 gridTitle\">\r\n        {{row.gridIndex}}\r\n      </div>\r\n      <div class=\"col-md-1 gridItem\" *ngFor=\"let cell of row.gridItems\">\r\n        <input [(ngModel)]=\"cell.value\" class=\"gridInput\" name=\"{{cell.bucketId}}\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/gridset/gridset.component.scss":
/*!************************************************!*\
  !*** ./src/app/gridset/gridset.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gridTitle {\n  border-bottom: 4px solid black;\n  font: bold; }\n\n.gridItem {\n  border: 2px solid black; }\n\n.gridHeading {\n  font: bold; }\n\n.gridInput {\n  font-size: 10px;\n  width: 7em;\n  padding-bottom: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZHNldC9DOlxcVXNlcnNcXENocmlzIEJ1cmNoc3RlZFxcc291cmNlXFxyZXBvc1xcQW5ndWxhck1WQ0RlbW9cXEFuZ3VsYXJNVkNEZW1vXFxhbmd1bGFyL3NyY1xcYXBwXFxncmlkc2V0XFxncmlkc2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQThCO0VBQzlCLFdBQVMsRUFDVjs7QUFFRDtFQUNFLHdCQUNGLEVBQUM7O0FBRUQ7RUFDRSxXQUNGLEVBQUM7O0FBRUQ7RUFDRSxnQkFBYztFQUNkLFdBQVM7RUFDVCxvQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ncmlkc2V0L2dyaWRzZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZFRpdGxlIHtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgYmxhY2s7XHJcbiAgZm9udDpib2xkO1xyXG59XHJcblxyXG4uZ3JpZEl0ZW17XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2tcclxufVxyXG5cclxuLmdyaWRIZWFkaW5ne1xyXG4gIGZvbnQ6Ym9sZFxyXG59XHJcblxyXG4uZ3JpZElucHV0e1xyXG4gIGZvbnQtc2l6ZToxMHB4O1xyXG4gIHdpZHRoOjdlbTtcclxuICBwYWRkaW5nLWJvdHRvbToxcHg7IFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/gridset/gridset.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gridset/gridset.component.ts ***!
  \**********************************************/
/*! exports provided: GridsetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsetComponent", function() { return GridsetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");



var GridsetComponent = /** @class */ (function () {
    function GridsetComponent(apiService) {
        this.apiService = apiService;
    }
    GridsetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getGridSet().subscribe(function (data) {
            _this.gridSet = data;
        });
    };
    GridsetComponent.prototype.onSubmit = function () {
        console.log("submitted");
        this.apiService.saveGridSet(this.gridSet);
    };
    GridsetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gridset',
            template: __webpack_require__(/*! ./gridset.component.html */ "./src/app/gridset/gridset.component.html"),
            styles: [__webpack_require__(/*! ./gridset.component.scss */ "./src/app/gridset/gridset.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["default"]])
    ], GridsetComponent);
    return GridsetComponent;
}());



/***/ }),

/***/ "./src/app/shared/api.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/api.service.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.API = 'http://localhost:56600/api';
        this.JOGGING_RECORDS_ENDPOINT = this.API + "/joggingrecords";
        this.MULTIPLIERS_INDEX = this.API + "/multiplier?fundId=1";
        this.GRIDSET_INDEX = this.API + "/multipliergridset?fundId=1";
        this.GRIDSET_SAVE_INDEX = this.API + "/multipliergridset";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    ApiService.prototype.getAll = function () {
        return this.http.get(this.JOGGING_RECORDS_ENDPOINT);
    };
    ApiService.prototype.getGridSet = function () {
        return this.http.get(this.GRIDSET_INDEX);
    };
    ApiService.prototype.saveGridSet = function (gridSet) {
        console.log("Saved!");
        this.http.post(this.GRIDSET_SAVE_INDEX, gridSet, this.httpOptions).subscribe();
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());
/* harmony default export */ __webpack_exports__["default"] = (ApiService);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Chris Burchsted\source\repos\AngularMVCDemo\AngularMVCDemo\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map