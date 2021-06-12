(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "1GDv":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab4-routing.module */ "dkQB");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "Wxre");







let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab4PageRoutingModule"]
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })
], Tab4PageModule);



/***/ }),

/***/ "Wxre":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab4.page.html */ "kfDu");
/* harmony import */ var _tab4_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab4.page.scss */ "vacZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../test.service */ "9UZm");





let Tab4Page = class Tab4Page {
    constructor(testService) {
        this.testService = testService;
    }
    ngOnInit() {
        // this.ultimasdiez = JSON.parse(this.getData2())
        // console.log(this.ultimasdiez)
        this.getData();
    }
    getData() {
        this.testService.interiorMonoxido().subscribe(res => {
            console.log(res);
            this.ultimasdiez = res;
        }, error => {
            console.log(error);
        });
    }
};
Tab4Page.ctorParameters = () => [
    { type: _test_service__WEBPACK_IMPORTED_MODULE_4__["TestService"] }
];
Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab4',
        template: _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab4_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab4Page);



/***/ }),

/***/ "dkQB":
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab4PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function() { return Tab4PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab4.page */ "Wxre");




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"]
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ "kfDu":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Monoxido\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"container-fluid\">\n    <ion-row>\n      <ion-col>\n        <button class=\"btn btn-primary\" (click)=\"getData()\">Actualizar  </button>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"row my-5 justify-content-center \">\n        <div class=\"col-12  my-5 d-flex justify-content-center\">\n            <div class=\"card\" color=\"primary\" style=\"border:none;\">\n                <i _ngcontent-hjf-c2=\"\" class=\"fas fa-temperature-high\" style=\"font-size: 30vh;\"></i>\n              \n            </div>\n            <ion-card *ngFor=\"let monoxido of ultimasdiez\"> \n              <ion-card-header>\n                <span style=\"font-size: 4vh;\"  [ngClass]=\"monoxido.value > 1200 ? 'carddanger' : 'cardok'\"> {{monoxido.value | number }}\n                  <ion-icon name=\"alert-outline\" style=\"font-size: 30px;\" *ngIf=\"monoxido.value > 1200\"></ion-icon>\n\n                 </span>\n              </ion-card-header>\n                <ion-badge color=\"secondary\" >{{monoxido.datetime}}</ion-badge> \n\n              <!-- <ion-input type=\"number\"  [(ngModel)]=\"temperatura.value\" ></ion-input> -->\n              <!-- <ion-badge color=\"secondary\">\n\n                <ion-icon name=\"snow-outline\" style=\"font-size: 30px;\" *ngIf=\"monoxido.value < 0\"></ion-icon>\n              </ion-badge>\n              <ion-badge color=\"warning\">\n\n                <ion-icon name=\"sunny-outline\" style=\"font-size: 30px;\" *ngIf=\"monoxido.value > 0\"></ion-icon>\n              </ion-badge> -->\n            \n            </ion-card>\n          \n        \n        </div>\n    </div>\n\n</div>\n</ion-content>\n");

/***/ }),

/***/ "vacZ":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carddanger {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksVUFBQTtBQUZKIiwiZmlsZSI6InRhYjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRva3tcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcbi5jYXJkZGFuZ2Vye1xyXG4gICAgY29sb3I6IHJlZDtcclxuXHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module.js.map