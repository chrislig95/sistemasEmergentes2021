(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title slot=\"start\" style=\"font-size: 30px; text-transform: uppercase;\">\n      Luces | {{ambiente  | uppercase }}\n    </ion-title>\n    <ion-button slot=\"end\" [routerLink]=\"['/dashboard']\">\n      <ion-icon name=\"grid-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" style=\"display: flex; justify-content: center;\" >\n  <ion-row > \n    <ion-col>\n      <ion-button  (click)=\"getData()\">Actualizar <ion-icon name=\"refresh-outline\"></ion-icon></ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"!show\">\n    <ion-col>\n      <ion-card>\n        <ion-card-header>\n          Interruptor de luz ambiente {{ambiente}}\n        </ion-card-header>\n             <ng-container  *ngIf=\"luzparaprenderyapagar?.value == '1' \"> \n          <ion-item>\n            <ion-label>Luces encendida</ion-label>\n            <ion-toggle  (ionChange)=\"toggleLight(luzparaprenderyapagar)\" checked=\"true\"></ion-toggle>\n          </ion-item>\n         </ng-container>\n         <ng-container  *ngIf=\"luzparaprenderyapagar?.value == '0' \"> \n          <ion-item>\n            <ion-label>Luces apagada</ion-label>\n            <ion-toggle   (ionChange)=\"toggleLight(luzparaprenderyapagar)\"checked=\"false\"></ion-toggle>\n          </ion-item>\n         </ng-container>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n <ion-row *ngIf=\"!show\">\n  <ion-col>\n\n    <ion-card  *ngIf=\"ultimasdiez?.length > 0\">\n      <ion-card-header>\n        \n        Censado luz {{ambiente}}\n        \n      </ion-card-header>\n  \n   \n      <ion-item *ngFor=\"let luz of ultimasdiez\">\n        <ion-label>Censado luz interior</ion-label>\n    \n           <!-- <ng-container  *ngIf=\"luz.value == '1' \"> \n            <ion-item>\n              <ion-label>Luces encendida</ion-label>\n              <ion-toggle  (ionChange)=\"toggleLight(luz)\" checked=\"true\"></ion-toggle>\n            </ion-item>\n           </ng-container>\n           <ng-container  *ngIf=\"luz.value == '0' \"> \n            <ion-item>\n              <ion-label>Luces apagada</ion-label>\n              <ion-toggle   (ionChange)=\"toggleLight(luz)\"checked=\"false\"></ion-toggle>\n            </ion-item>\n           </ng-container> -->\n           <ion-badge color=\"secondary\" >{{luz.datetime}}</ion-badge> \n  \n      </ion-item>\n    </ion-card>\n   \n  </ion-col>\n </ion-row>\n\n  <ion-row *ngIf=\"show\"  style=\"display: flex; justify-content: center;\">\n    <ion-col size=\"12\">\n\n      <ion-card style=\"background-color: rgb(179, 179, 179); color:black\">\n        <ion-card-header style=\"font-size: 40px; color: black;\">\n         No data\n        </ion-card-header>\n        <ion-card-content style=\"font-size: 35px;\">\n          <span></span>\n          No se encontro informacion de luces en el ambiente {{ambiente}}\n          <ion-icon name=\"alert-circle-outline\" style=\"font-size: 45px; color: red;\"></ion-icon>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n\n\n\n</ion-content>\n");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../test.service */ "9UZm");
/* harmony import */ var _services_lights_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/lights.service */ "kGps");







let Tab1Page = class Tab1Page {
    constructor(testService, lightService, router) {
        this.testService = testService;
        this.lightService = lightService;
        this.router = router;
        this.ambiente = "";
        this.show = false;
        router.events.subscribe((val) => {
            this.ambiente = localStorage.getItem('ambienteseleccionado');
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.getData();
            }
        });
    }
    ionViewDidLeave() {
        console.log("TabX is exited");
    }
    ngOnChanges(changes) {
        console.log("prueba change");
        throw new Error('Method not implemented.');
    }
    ngOnInit() {
        this.ambiente = localStorage.getItem('ambienteseleccionado');
        console.log("el ambiente seleccionado es : " + this.ambiente);
        this.getData();
    }
    getData() {
        this.ambiente = localStorage.getItem('ambienteseleccionado');
        this.lightService.getLight(this.ambiente).subscribe(res => {
            this.ultimasdiez = res;
            this.show = false;
            this.luzparaprenderyapagar = this.ultimasdiez[0];
            console.log(this.luzparaprenderyapagar);
            console.log(this.ultimasdiez);
            if (res.hasOwnProperty('error') || this.ambiente === 'cocina') {
                this.show = true;
            }
        }, error => {
            this.show = true;
            console.log(error);
        });
    }
    toggleLight(luz) {
        this.ambiente = localStorage.getItem('ambienteseleccionado');
        this.lightService.toggleLight(!luz.status, this.ambiente).subscribe(res => {
            luz.status = !luz.status;
            console.log(res);
        }, error => {
            console.log(error);
        });
    }
    getData2() {
        return '[{"datetime":"29/05/2021 23:26:29","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:25:29","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:24:29","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:23:55","status":1,"topic":"/casa/interior/actuadores/luces","value":"1"},{"datetime":"29/05/2021 23:23:54","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:23:53","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:23:52","status":1,"topic":"/casa/interior/actuadores/luces","value":"1"},{"datetime":"29/05/2021 23:23:51","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:23:50","status":1,"topic":"/casa/interior/actuadores/luces","value":"0"},{"datetime":"29/05/2021 23:23:49","status":1,"topic":"/casa/interior/actuadores/luces","value":"1"}]';
    }
};
Tab1Page.ctorParameters = () => [
    { type: _test_service__WEBPACK_IMPORTED_MODULE_5__["TestService"] },
    { type: _services_lights_service__WEBPACK_IMPORTED_MODULE_6__["LightsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
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

/***/ "kGps":
/*!*************************************************!*\
  !*** ./src/app/tab1/services/lights.service.ts ***!
  \*************************************************/
/*! exports provided: LightsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightsService", function() { return LightsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let LightsService = class LightsService {
    constructor(http) {
        this.http = http;
    }
    toggleLight(value, ambiente) {
        let valorAmbiente = 0;
        if (ambiente === "ambiente1") {
            valorAmbiente = 1;
        }
        if (ambiente === "ambiente2") {
            valorAmbiente = 2;
        }
        console.log('https://ws.nerdingland.com/luz', { "ambiente": valorAmbiente, "value": value });
        return this.http.post('https://ws.nerdingland.com/luz', { "ambiente": valorAmbiente, "value": value });
    }
    getLight(ambiente) {
        return this.http.get('https://ws.nerdingland.com/?collectionName=casa/interior/' + ambiente + '/luz');
    }
};
LightsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LightsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], LightsService);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toggle {\n  --background: #000;\n  --background-checked: #00ff55;\n  --handle-background: #ff0000;\n  --handle-background-checked: rgb(182, 182, 184);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtFQUVBLDRCQUFBO0VBQ0EsK0NBQUE7QUFBSiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b2dnbGUge1xuICAgIC0tYmFja2dyb3VuZDogIzAwMDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzAwZmY1NTtcbiAgXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZDogI2ZmMDAwMDtcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJnYigxODIsIDE4MiwgMTg0KTtcbiAgfVxuICAiXX0= */");

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
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_7__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map