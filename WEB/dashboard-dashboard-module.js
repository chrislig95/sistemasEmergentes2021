(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "B3xu":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custombutton {\n  --background: #7e5791 !important;\n  --color: var(--ion-color-primary-contrast, #fff);\n  font-size: 30px;\n}\n\n@media (max-width: 900px) {\n  .fontmobile {\n    font-size: 20px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUlBO0VBQ0k7SUFDSSwwQkFBQTtFQUROO0FBQ0YiLCJmaWxlIjoiZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjN2U1NzkxICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZik7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuaW9uLWNvbnRlbnQuYmctZG9tb3RpY2F7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2RvbW90aWNhLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAuZm9udG1vYmlsZXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "KR73":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class=\"fontmobile\" slot=\"start\" style=\"font-size: 30px; text-transform: uppercase;\">\n      DASHBOARD\n    </ion-title>\n    <ion-button slot=\"end\" [routerLink]=\"['/settings']\">\n      <ion-icon name=\"settings-outline\"></ion-icon>\n    </ion-button>\n    <ion-button slot=\"end\" [routerLink]=\"['/dashboard']\">\n      <ion-icon name=\"grid-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"bg-domotica\">\n  <ion-row>\n    <ion-col *ngFor=\" let ambiente of ambientes\" size=\"6\">\n      <ion-button [routerLink]=\"['/tabs/tab1']\" class=\"custombutton\" style=\"width: 100%; height: 300px;\" (click)=\"cambiarAmbiente(ambiente.nombre)\">\n        {{ambiente.nombre}}\n        <!-- <i class=\"fas fa-temperature-high\" *ngIf=\"ambiente.nombre == 'exterior'\"></i> -->\n        <!-- <i _ngcontent-hjf-c2=\"\" class=\"fas fa-temperature-high\" style=\"font-size: 30vh;\"></i> -->\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "NcNw":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.page.html */ "KR73");
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page.scss */ "B3xu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ambiente__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ambiente */ "ecTq");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../test.service */ "9UZm");








let DashboardPage = class DashboardPage {
    constructor(alertController, testService, router) {
        this.alertController = alertController;
        this.testService = testService;
        this.router = router;
        this.ambientes = [];
        router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.ambiente = localStorage.getItem('ambienteseleccionado');
                if (this.ambiente == 'dashboard') {
                    this.checkValorMonoxido();
                }
            }
        });
    }
    ngOnInit() {
        localStorage.setItem('ambienteseleccionado', 'dashboard');
        for (let index = 0; index < 2; index++) {
            const indice = index + 1;
            var ambiente = new _ambiente__WEBPACK_IMPORTED_MODULE_6__["Ambiente"]("ambiente" + indice);
            this.ambientes[index] = ambiente;
        }
        var ambiente = new _ambiente__WEBPACK_IMPORTED_MODULE_6__["Ambiente"]("cocina");
        var ambiente2 = new _ambiente__WEBPACK_IMPORTED_MODULE_6__["Ambiente"]("exterior");
        this.ambientes.push(ambiente);
        this.ambientes.push(ambiente2);
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alerta niveles altos de monoxido/humo',
                subHeader: 'Se registo un valor mayor al deseado',
                message: 'Fuga detectada en el horario ' + this.ultimovalor.datetime,
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    cambiarAmbiente(ambiente) {
        localStorage.setItem('ambienteseleccionado', ambiente);
        console.log(ambiente);
    }
    checkValorMonoxido() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var response = false;
            yield this.testService.interiorAlarma().subscribe(res => {
                this.ultimovalor = res;
                this.ultimovalor = res[0];
                console.log(res);
                if (parseInt(this.ultimovalor.value) == 1) {
                    response = true;
                    this.presentAlert();
                }
                else {
                }
                console.log(this.ultimovalor.value);
            }, error => {
                console.log(error);
            });
            console.log(response);
            return response;
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _test_service__WEBPACK_IMPORTED_MODULE_7__["TestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardPage);



/***/ }),

/***/ "Oy4E":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "NcNw");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "TDBs":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "Oy4E");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "NcNw");







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "ecTq":
/*!*****************************!*\
  !*** ./src/app/ambiente.ts ***!
  \*****************************/
/*! exports provided: Ambiente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ambiente", function() { return Ambiente; });
class Ambiente {
    constructor(nombre) {
        this.nombre = nombre;
    }
}


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map