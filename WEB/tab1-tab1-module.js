(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Luces\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-row>\n    <ion-col>\n      <button class=\"btn btn-primary\" (click)=\"getData()\">Actualizar  </button>\n    </ion-col>\n  </ion-row>\n  <ion-card>\n    <ion-card-header>\n      Status luces interiores \n       <!-- <ion-badge color=\"success\">Prueba</ion-badge> -->\n      \n    </ion-card-header>\n\n \n    <ion-item *ngFor=\"let luz of ultimasdiez\">\n      <ion-label>Censado luz interior</ion-label>\n  \n         <ng-container  *ngIf=\"luz.value == '1' \"> \n          <ion-badge color=\"success\" >Luces encendida</ion-badge> \n         </ng-container>\n         <ng-container  *ngIf=\"luz.value == '0' \"> \n          <ion-badge color=\"danger\" >Luces apagada</ion-badge> \n         </ng-container>\n         <ion-badge color=\"secondary\" >{{luz.datetime}}</ion-badge> \n\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Status luces exteriores\n       <!-- <ion-badge color=\"success\">Prueba</ion-badge> -->\n      \n    </ion-card-header>\n\n    <ion-list>\n\n      <ion-item *ngFor=\"let luz of ultimasdiez\">\n        <ion-label>Censado luz exterior</ion-label>\n    \n           <ng-container  *ngIf=\"luz.value == '1' \"> \n            <ion-badge color=\"success\" >Luz encendida</ion-badge> \n           </ng-container>\n           <ng-container  *ngIf=\"luz.value == '0' \"> \n            <ion-badge color=\"danger\" >Luz apagada</ion-badge> \n           </ng-container>\n           <ion-badge color=\"secondary\" >{{luz.datetime}}</ion-badge> \n  \n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../test.service */ "9UZm");





let Tab1Page = class Tab1Page {
    constructor(testService) {
        this.testService = testService;
    }
    ngOnInit() {
        // this.ultimasdiez = JSON.parse(this.getData2())
        this.getData();
    }
    getData() {
        this.testService.interiorLuces().subscribe(res => {
            console.log(res);
            this.ultimasdiez = res;
        }, error => {
            console.log(error);
        });
    }
    getData2() {
        return '[{"datetime":"29/05/2021 23:26:29","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:25:29","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:24:29","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:23:55","status":1,"topic":"/casa/interior/actuadores/luces","value":"1"},{"datetime":"29/05/2021 23:23:54","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:23:53","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:23:52","status":1,"topic":"/casa/interior/actuadores/luces","value":"1"},{"datetime":"29/05/2021 23:23:51","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:23:50","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:23:49","status":1,"topic":"/casa/interior/actuadores/luces","value":"1"}]';
    }
};
Tab1Page.ctorParameters = () => [
    { type: _test_service__WEBPACK_IMPORTED_MODULE_4__["TestService"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toggle {\n  --background: #000;\n  --background-checked: #ff0000;\n  --handle-background: #ff0000;\n  --handle-background-checked: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtFQUVBLDRCQUFBO0VBQ0EsaUNBQUE7QUFBSiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b2dnbGUge1xuICAgIC0tYmFja2dyb3VuZDogIzAwMDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmMDAwMDtcbiAgXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZDogI2ZmMDAwMDtcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMwMDA7XG4gIH0iXX0= */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map