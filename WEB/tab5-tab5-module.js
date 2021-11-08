(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"],{

/***/ "FFfc":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWI1LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Ki12":
/*!*********************************************!*\
  !*** ./src/app/tab5/tab5-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab5PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageRoutingModule", function() { return Tab5PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab5.page */ "Tlso");




const routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_3__["Tab5Page"]
    }
];
let Tab5PageRoutingModule = class Tab5PageRoutingModule {
};
Tab5PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab5PageRoutingModule);



/***/ }),

/***/ "Sa0/":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/*! exports provided: Tab5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function() { return Tab5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab5-routing.module */ "Ki12");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab5.page */ "Tlso");







let Tab5PageModule = class Tab5PageModule {
};
Tab5PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab5PageRoutingModule"]
        ],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"]]
    })
], Tab5PageModule);



/***/ }),

/***/ "Tlso":
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/*! exports provided: Tab5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5Page", function() { return Tab5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab5.page.html */ "pXFx");
/* harmony import */ var _tab5_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab5.page.scss */ "FFfc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../test.service */ "9UZm");






let Tab5Page = class Tab5Page {
    constructor(testService, router) {
        this.testService = testService;
        this.router = router;
        router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.getData();
            }
        });
    }
    ngOnInit() {
        // this.ultimasdiez = JSON.parse(this.getData2())
        // console.log(this.ultimasdiez)
        this.getData();
    }
    getData() {
        this.testService.interiorAlarma().subscribe(res => {
            console.log(res);
            this.ultimasdiez = res;
        }, error => {
            console.log(error);
        });
    }
};
Tab5Page.ctorParameters = () => [
    { type: _test_service__WEBPACK_IMPORTED_MODULE_5__["TestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
Tab5Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab5',
        template: _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab5_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab5Page);



/***/ }),

/***/ "pXFx":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title slot=\"start\" style=\"font-size: 30px;\">\n      Alarma | {{ambiente}}\n    </ion-title>\n    <ion-button slot=\"end\" [routerLink]=\"['/dashboard']\">\n      <ion-icon name=\"grid-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"container-fluid\">\n    <ion-row>\n      <ion-col>\n        <button class=\"btn btn-primary\" (click)=\"getData()\">Actualizar  </button>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"row my-5 justify-content-center \">\n        <div class=\"col-12  my-5 d-flex justify-content-center\">\n          \n            <ion-card *ngFor=\"let alarma of ultimasdiez\" style=\"text-align: center;\"> \n              <ion-card-header style=\"text-align: center;\"> \n                <span style=\"font-size: 30px; color: red;\" *ngIf=\"alarma.value == 1\">\n                  Alarma encendida!!!\n                </span>\n                <span style=\"font-size: 30px;\" *ngIf=\"alarma.value == 0\">\n                  Ok!\n                </span>\n          \n              </ion-card-header>\n              <ion-badge color=\"secondary\" >{{alarma.datetime}}</ion-badge> \n\n              <!-- <ion-input type=\"number\"  [(ngModel)]=\"temperatura.value\" ></ion-input> -->\n              <!-- <ion-badge color=\"secondary\">\n\n                <ion-icon name=\"snow-outline\" style=\"font-size: 30px;\" *ngIf=\"alarma.value < 0\"></ion-icon>\n              </ion-badge>\n              <ion-badge color=\"warning\">\n\n                <ion-icon name=\"sunny-outline\" style=\"font-size: 30px;\" *ngIf=\"alarma.value > 0\"></ion-icon>\n              </ion-badge> -->\n            \n            </ion-card>\n          \n        \n        </div>\n    </div>\n\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=tab5-tab5-module.js.map