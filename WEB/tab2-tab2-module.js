(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "EGAO":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "JZ9U":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "e9nj");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss */ "EGAO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../test.service */ "9UZm");





let Tab2Page = class Tab2Page {
    constructor(testService) {
        this.testService = testService;
        this.temperature = 24;
        this.currentTemparature = 19;
    }
    ngOnInit() {
        // this.ultimasdiez = JSON.parse(this.getData2())
        // console.log(this.ultimasdiez)
        this.getData();
    }
    getData() {
        this.testService.exteriorTemperatura().subscribe(res => {
            console.log(res);
            this.ultimasdiez = res;
        }, error => {
            console.log(error);
        });
    }
    getData2() {
        return '[{"datetime":"29/05/2021 23:26:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"},{"datetime":"29/05/2021 23:25:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"},{"datetime":"29/05/2021 23:24:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"},{"datetime":"29/05/2021 23:23:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"},{"datetime":"29/05/2021 23:22:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"},{"datetime":"29/05/2021 23:21:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"},{"datetime":"29/05/2021 23:20:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"},{"datetime":"29/05/2021 23:19:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"},{"datetime":"29/05/2021 23:18:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"},{"datetime":"29/05/2021 23:17:49","status":1,"topic":"/casa/exterior/sensores/temperatura","value":"0"}]';
    }
};
Tab2Page.ctorParameters = () => [
    { type: _test_service__WEBPACK_IMPORTED_MODULE_4__["TestService"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "TUkU":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "UDmF");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "UDmF":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "e9nj":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Temperatura\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"container-fluid\">\n    <ion-row>\n      <ion-col>\n        <button class=\"btn btn-primary\" (click)=\"getData()\">Actualizar  </button>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"row my-5 justify-content-center \">\n        <div class=\"col-12  my-5 d-flex justify-content-center\">\n            <div class=\"card\" color=\"primary\" style=\"border:none;\">\n                <i _ngcontent-hjf-c2=\"\" class=\"fas fa-temperature-high\" style=\"font-size: 30vh;\"></i>\n              \n                <span *ngIf=\"temperature== null\" class=\"badge badge-pill badge-warning mt-3\" style=\"font-size: 4vh;\"> cargando...</span>\n            </div>\n            <ion-card *ngFor=\"let temperatura of ultimasdiez\"> \n              <ion-card-header>\n                <span style=\"font-size: 4vh;\"> {{temperatura.value | number }}\n\n                 °C</span>\n              </ion-card-header>\n                <ion-badge color=\"secondary\" >{{temperatura.datetime}}</ion-badge> \n\n              <!-- <ion-input type=\"number\"  [(ngModel)]=\"temperatura.value\" ></ion-input> -->\n              <ion-badge color=\"secondary\">\n\n                <ion-icon name=\"snow-outline\" style=\"font-size: 30px;\" *ngIf=\"temperatura.value < 0\"></ion-icon>\n              </ion-badge>\n              <ion-badge color=\"warning\">\n\n                <ion-icon name=\"sunny-outline\" style=\"font-size: 30px;\" *ngIf=\"temperatura.value > 0\"></ion-icon>\n              </ion-badge>\n            \n            </ion-card>\n          \n        \n        </div>\n    </div>\n\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map