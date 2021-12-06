(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "7Dlj":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "Uncc");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "7wo0":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "7Dlj");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "Uncc");







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "ADm/":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  box-sizing: border-box;\n}\n\nli {\n  list-style: none;\n}\n\nhtml, body {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  font-size: 5vmin;\n  position: relative;\n  background: #18b;\n  box-sizing: border-box;\n  animation: bg 300s infinite ease-out;\n}\n\n#fan {\n  position: absolute;\n  top: calc(50% - 8em);\n  left: calc(50% - 4em);\n}\n\n#fan2 {\n  position: absolute;\n  top: calc(50% - 8em);\n  left: calc(50% - 4em);\n}\n\n.oscillator {\n  height: 8em;\n  width: 8em;\n  position: absolute;\n}\n\n.animateoscillator {\n  animation: oscillate 8s infinite linear;\n}\n\n.guard {\n  height: 8em;\n  width: 8em;\n  position: absolute;\n  z-index: 10;\n}\n\n.frame {\n  height: 8em;\n  width: 8em;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border: 0.25em solid #000;\n  border-radius: 50%;\n}\n\n[class^=cir] {\n  position: absolute;\n  border: 0.125em solid #000;\n  border-radius: 50%;\n  z-index: 12;\n}\n\n.cir1 {\n  height: 7em;\n  width: 7em;\n  left: 0.5em;\n  top: 0.5em;\n}\n\n.cir2 {\n  height: 6em;\n  width: 6em;\n  left: 1em;\n  top: 1em;\n}\n\n.cir3 {\n  height: 5em;\n  width: 5em;\n  left: 1.5em;\n  top: 1.5em;\n}\n\n.cir4 {\n  height: 4em;\n  width: 4em;\n  left: 2em;\n  top: 2em;\n}\n\n.cir5 {\n  height: 3em;\n  width: 3em;\n  left: 2.5em;\n  top: 2.5em;\n}\n\n.cir6 {\n  height: 2em;\n  width: 2em;\n  left: 3em;\n  top: 3em;\n  background: radial-gradient(50% 30%, #222 0%, #000 100%);\n}\n\n.bar1,\n.bar2 {\n  position: absolute;\n  border: 0.0625em solid #000;\n  transform: rotate(45deg);\n  z-index: 11;\n}\n\n.bar1 {\n  height: 8em;\n  position: absolute;\n  left: 50%;\n  top: 0;\n}\n\n.bar2 {\n  width: 8em;\n  position: absolute;\n  top: 50%;\n  left: 0;\n}\n\n.blades {\n  height: 6em;\n  width: 6em;\n  position: absolute;\n  top: 1em;\n  left: 1em;\n  z-index: 9;\n}\n\n.animateblades {\n  animation: blades 130ms infinite linear;\n}\n\n.b1,\n.b2,\n.b3 {\n  height: 3.25em;\n  width: 3.25em;\n  position: absolute;\n  border-radius: 0 50% 100%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);\n  background: rgba(0, 0, 0, 0.8);\n}\n\n.b1 {\n  top: 3.5em;\n  left: 1.375em;\n  transform: rotate(45deg);\n}\n\n.b2 {\n  top: 0.25em;\n  left: -0.5em;\n  transform: rotate(165deg);\n}\n\n.b3 {\n  top: 0.25em;\n  left: 3.25em;\n  transform: rotate(285deg);\n}\n\n.motor {\n  height: 2.25em;\n  width: 5em;\n  position: absolute;\n  top: 2.875em;\n  right: 3.325em;\n  z-index: 8;\n  background: linear-gradient(to bottom, #333, #000) #111;\n  border-radius: 50% 20% 20% 50%;\n}\n\n.animatemotor {\n  animation: motor 8s infinite linear;\n}\n\n.base {\n  height: 2em;\n  width: 5em;\n  position: absolute;\n  top: 11.5em;\n  left: 0.75em;\n  z-index: 5;\n  border-radius: 80%;\n  background: #222;\n}\n\n.base:before {\n  height: 2em;\n  width: 5em;\n  position: absolute;\n  top: -0.25em;\n  left: 0;\n  z-index: 5;\n  border-radius: 80%;\n  content: \"\";\n  display: block;\n  background: linear-gradient(to bottom, #333 0%, #000 100%) #111;\n}\n\n.base:after {\n  height: 7.5em;\n  width: 0.5em;\n  position: absolute;\n  top: -7em;\n  left: 2.25em;\n  z-index: 6;\n  content: \"\";\n  display: block;\n  background: linear-gradient(to bottom, #111 0%, #212121 100%) #111;\n}\n\n@keyframes blades {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes oscillate {\n  0% {\n    transform: perspective(31.25em) rotateY(20deg);\n  }\n  50% {\n    transform: perspective(15.625em) rotateY(50deg);\n  }\n  100% {\n    transform: perspective(31.25em) rotateY(20deg);\n  }\n}\n\n@keyframes motor {\n  0% {\n    width: 2.5em;\n  }\n  50% {\n    width: 5em;\n  }\n  100% {\n    width: 2.5em;\n  }\n}\n\n@keyframes bg {\n  0% {\n    background: #05acd7;\n  }\n  10% {\n    background: #1063c3;\n  }\n  20% {\n    background: #fe80d7;\n  }\n  30% {\n    background: #fe2193;\n  }\n  40% {\n    background: #f62038;\n  }\n  50% {\n    background: #f38051;\n  }\n  60% {\n    background: #f4d84d;\n  }\n  70% {\n    background: #e0eb68;\n  }\n  80% {\n    background: #7cc04b;\n  }\n  90% {\n    background: #7cd8b5;\n  }\n  100% {\n    background: #00e1f3;\n  }\n}\n\n@media (max-width: 900px) {\n  .small-text {\n    font-size: 20px !important;\n  }\n}\n\n@media (max-width: 900px) {\n  .fontmobile {\n    font-size: 20px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUU7RUFDRSx1Q0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx3REFBQTtBQUNKOztBQUVFOztFQUVFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFO0VBQ0UsdUNBQUE7QUFDSjs7QUFHRTs7O0VBR0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUdFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdFO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHVEQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFFRTtFQUNFLG1DQUFBO0FBQ0o7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSwrREFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0VBQUE7QUFBSjs7QUFHRTtFQUNFO0lBQ0UsdUJBQUE7RUFBSjtFQUdFO0lBQ0UseUJBQUE7RUFESjtBQUNGOztBQUlFO0VBQ0U7SUFDRSw4Q0FBQTtFQUZKO0VBS0U7SUFDRSwrQ0FBQTtFQUhKO0VBTUU7SUFDRSw4Q0FBQTtFQUpKO0FBQ0Y7O0FBT0U7RUFDRTtJQUNFLFlBQUE7RUFMSjtFQVFFO0lBQ0UsVUFBQTtFQU5KO0VBU0U7SUFDRSxZQUFBO0VBUEo7QUFDRjs7QUFVRTtFQUNFO0lBQ0UsbUJBQUE7RUFSSjtFQVdFO0lBQ0UsbUJBQUE7RUFUSjtFQVlFO0lBQ0UsbUJBQUE7RUFWSjtFQWFFO0lBQ0UsbUJBQUE7RUFYSjtFQWNFO0lBQ0UsbUJBQUE7RUFaSjtFQWVFO0lBQ0UsbUJBQUE7RUFiSjtFQWdCRTtJQUNFLG1CQUFBO0VBZEo7RUFpQkU7SUFDRSxtQkFBQTtFQWZKO0VBa0JFO0lBQ0UsbUJBQUE7RUFoQko7RUFtQkU7SUFDRSxtQkFBQTtFQWpCSjtFQW9CRTtJQUNFLG1CQUFBO0VBbEJKO0FBQ0Y7O0FBcUJFO0VBQ0U7SUFDRSwwQkFBQTtFQW5CSjtBQUNGOztBQXFCRTtFQUNFO0lBQ0ksMEJBQUE7RUFuQk47QUFDRiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGh0bWwsYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiA1dm1pbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICMxOGI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYW5pbWF0aW9uOiBiZyAzMDBzIGluZmluaXRlIGVhc2Utb3V0O1xyXG4gIH1cclxuICBcclxuICAjZmFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogY2FsYyg1MCUgLSA4ZW0pO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSA0ZW0pO1xyXG4gIH1cclxuICAgIFxyXG4gICNmYW4yIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogY2FsYyg1MCUgLSA4ZW0pO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSA0ZW0pO1xyXG4gIH1cclxuICBcclxuICBcclxuICAub3NjaWxsYXRvciB7XHJcbiAgICBoZWlnaHQ6IDhlbTtcclxuICAgIHdpZHRoOiA4ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIC5hbmltYXRlb3NjaWxsYXRvcntcclxuICAgIGFuaW1hdGlvbjogb3NjaWxsYXRlIDhzIGluZmluaXRlIGxpbmVhcjtcclxuXHJcbiAgfVxyXG4gIC5ndWFyZCB7XHJcbiAgICBoZWlnaHQ6IDhlbTtcclxuICAgIHdpZHRoOiA4ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICB9XHJcbiAgXHJcbiAgLmZyYW1lIHtcclxuICAgIGhlaWdodDogOGVtO1xyXG4gICAgd2lkdGg6IDhlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3JkZXI6IDAuMjVlbSBzb2xpZCAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBcclxuICBbY2xhc3NePVwiY2lyXCJdIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMC4xMjVlbSBzb2xpZCAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogMTI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaXIxIHtcclxuICAgIGhlaWdodDogN2VtO1xyXG4gICAgd2lkdGg6IDdlbTtcclxuICAgIGxlZnQ6IDAuNWVtO1xyXG4gICAgdG9wOiAwLjVlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNpcjIge1xyXG4gICAgaGVpZ2h0OiA2ZW07XHJcbiAgICB3aWR0aDogNmVtO1xyXG4gICAgbGVmdDogMWVtO1xyXG4gICAgdG9wOiAxZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jaXIzIHtcclxuICAgIGhlaWdodDogNWVtO1xyXG4gICAgd2lkdGg6IDVlbTtcclxuICAgIGxlZnQ6IDEuNWVtO1xyXG4gICAgdG9wOiAxLjVlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNpcjQge1xyXG4gICAgaGVpZ2h0OiA0ZW07XHJcbiAgICB3aWR0aDogNGVtO1xyXG4gICAgbGVmdDogMmVtO1xyXG4gICAgdG9wOiAyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jaXI1IHtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgd2lkdGg6IDNlbTtcclxuICAgIGxlZnQ6IDIuNWVtO1xyXG4gICAgdG9wOiAyLjVlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNpcjYge1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gICAgbGVmdDogM2VtO1xyXG4gICAgdG9wOiAzZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoNTAlIDMwJSwjMjIyIDAlLCMwMDAgMTAwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYXIxLFxyXG4gIC5iYXIyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMC4wNjI1ZW0gc29saWQgIzAwMDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHotaW5kZXg6IDExO1xyXG4gIH1cclxuICBcclxuICAuYmFyMSB7XHJcbiAgICBoZWlnaHQ6IDhlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmJhcjIge1xyXG4gICAgd2lkdGg6IDhlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmJsYWRlcyB7XHJcbiAgICBoZWlnaHQ6IDZlbTtcclxuICAgIHdpZHRoOiA2ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDFlbTtcclxuICAgIGxlZnQ6IDFlbTtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICAvLyBhbmltYXRpb246IGJsYWRlcyAxMzBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgfVxyXG4gIC5hbmltYXRlYmxhZGVzIHtcclxuICAgIGFuaW1hdGlvbjogYmxhZGVzIDEzMG1zIGluZmluaXRlIGxpbmVhcjtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIC5iMSxcclxuICAuYjIsIFxyXG4gIC5iMyB7XHJcbiAgICBoZWlnaHQ6IDMuMjVlbTtcclxuICAgIHdpZHRoOiAzLjI1ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDUwJSAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzowIDAgMTBweCByZ2JhKGJsYWNrLDAuOCk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKGJsYWNrLDAuOCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5iMSB7XHJcbiAgICB0b3A6IDMuNWVtO1xyXG4gICAgbGVmdDogMS4zNzVlbTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgLmIyIHtcclxuICAgIHRvcDogMC4yNWVtO1xyXG4gICAgbGVmdDogLTAuNWVtO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTY1ZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgLmIzIHtcclxuICAgIHRvcDogMC4yNWVtO1xyXG4gICAgbGVmdDogMy4yNWVtO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjg1ZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgLm1vdG9yIHtcclxuICAgIGhlaWdodDogMi4yNWVtO1xyXG4gICAgd2lkdGg6IDVlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMi44NzVlbTtcclxuICAgIHJpZ2h0OiAzLjMyNWVtO1xyXG4gICAgei1pbmRleDogODtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzMzMsICMwMDApICMxMTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgMjAlIDIwJSA1MCU7XHJcbiAgfVxyXG4gIC5hbmltYXRlbW90b3J7XHJcbiAgICBhbmltYXRpb246IG1vdG9yIDhzIGluZmluaXRlIGxpbmVhcjtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIC5iYXNlIHtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgd2lkdGg6IDVlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTEuNWVtO1xyXG4gICAgbGVmdDogMC43NWVtO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDgwJTtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYXNlOmJlZm9yZSB7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIHdpZHRoOiA1ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0wLjI1ZW07XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGJvcmRlci1yYWRpdXM6ODAlO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIzMzMyAwJSwjMDAwIDEwMCUpICMxMTE7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYXNlOmFmdGVyIHtcclxuICAgIGhlaWdodDogNy41ZW07XHJcbiAgICB3aWR0aDogMC41ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC03ZW07XHJcbiAgICBsZWZ0OiAyLjI1ZW07XHJcbiAgICB6LWluZGV4OiA2O1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIzExMSAwJSwjMjEyMTIxIDEwMCUpICMxMTE7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYmxhZGVzIHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICBcclxuICAgIHRvIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBvc2NpbGxhdGUge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDMxLjI1ZW0pIHJvdGF0ZVkoMjBkZWcpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgNTAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNS42MjVlbSkgcm90YXRlWSg1MGRlZyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgzMS4yNWVtKSByb3RhdGVZKDIwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBtb3RvciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHdpZHRoOiAyLjVlbTtcclxuICAgIH1cclxuICBcclxuICAgIDUwJSB7XHJcbiAgICAgIHdpZHRoOiA1ZW07XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgd2lkdGg6IDIuNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGJnIHtcclxuICAgIDAlIHtcclxuICAgICAgYmFja2dyb3VuZDogIzA1YWNkNztcclxuICAgIH1cclxuICBcclxuICAgIDEwJSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxMDYzYzM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAyMCUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmU4MGQ3O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMzAlIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZlMjE5MztcclxuICAgIH1cclxuICBcclxuICAgIDQwJSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmNjIwMzg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA1MCUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjM4MDUxO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgNjAlIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Y0ZDg0ZDtcclxuICAgIH1cclxuICBcclxuICAgIDcwJSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlMGViNjg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA4MCUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjN2NjMDRiO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgOTAlIHtcclxuICAgICAgYmFja2dyb3VuZDogIzdjZDhiNTtcclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDBlMWYzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgIC5zbWFsbC10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgLmZvbnRtb2JpbGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gIH0iXX0= */");

/***/ }),

/***/ "Uncc":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.page.html */ "mzE/");
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page.scss */ "ADm/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../test.service */ "9UZm");







let SettingsPage = class SettingsPage {
    constructor(testService, router, alertController) {
        this.testService = testService;
        this.router = router;
        this.alertController = alertController;
        router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.ultimovalortemperatura();
                this.testService.obtenerLimite().subscribe(res => {
                    this.limite = res;
                    this.prender();
                });
            }
        });
    }
    ngOnInit() {
        this.ultimovalortemperatura();
        this.testService.obtenerLimite().subscribe(res => {
            this.limite = res;
            this.prender();
        });
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alerta',
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    prender() {
        let element = document.getElementById('blades');
        let element2 = document.getElementById('motor');
        let element3 = document.getElementById('oscillator');
        let bladesambiente2 = document.getElementById('blades2');
        let motorambiente2 = document.getElementById('motor2');
        let osciladorambiente2 = document.getElementById('oscillator2');
        if (this.ultimoambiente1 >= this.limite) {
            element.classList.add('animateblades');
            element3.classList.add('animateoscillator');
            element2.classList.add('animatemotor');
        }
        else {
            element.classList.remove('animateblades');
            element3.classList.remove('animateoscillator');
            element2.classList.remove('animatemotor');
        }
        if (this.ultimoambiente2 >= this.limite) {
            bladesambiente2.classList.add('animateblades');
            motorambiente2.classList.add('animatemotor');
            osciladorambiente2.classList.add('animateoscillator');
        }
        else {
            bladesambiente2.classList.remove('animateblades');
            motorambiente2.classList.remove('animatemotor');
            osciladorambiente2.classList.remove('animateoscillator');
        }
    }
    actualizarLimite() {
        this.testService.actualizarLimite(this.nuevoLimite).subscribe(res => {
            this.limite = res;
            console.log(this.limite);
            this.prender();
        });
    }
    simularHumo(valor) {
        this.testService.simulacionCocina("HUMO", this.nuevoHumo).subscribe(res => {
            console.log(res);
            this.presentAlert("se creo un nuevo registro de humo");
        });
    }
    simularMonoxido(valor) {
        this.prender();
        this.testService.simulacionCocina("MONOXIDO", this.nuevoMonoxido).subscribe(res => {
            console.log(res);
            this.presentAlert("se creo un nuevo registro de monoxido");
        });
    }
    ultimovalortemperatura() {
        this.testService.ultimovalortemperatura("ambiente1").subscribe(res => {
            this.ultimoambiente1 = res[0].value;
            console.log(this.ultimoambiente1);
        });
        this.testService.ultimovalortemperatura("ambiente2").subscribe(res => {
            this.ultimoambiente2 = res[0].value;
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _test_service__WEBPACK_IMPORTED_MODULE_6__["TestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingsPage);



/***/ }),

/***/ "mzE/":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class=\"fontmobile\" slot=\"start\" style=\"font-size: 30px; text-transform: uppercase;\">\n      CONFIGURACION\n    </ion-title>\n    <ion-button slot=\"end\" [routerLink]=\"['/settings']\">\n      <ion-icon name=\"settings-outline\"></ion-icon>\n    </ion-button>\n    <ion-button slot=\"end\" [routerLink]=\"['/dashboard']\">\n      <ion-icon name=\"grid-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content > \n  <ion-row class=\"text-center\" style=\"margin-top: 100px;\">\n    <ion-col>\n\n      <h1 style=\"font-size: 60px; text-align: center;\" class=\"small-text\">Configuracion de ventilador</h1>\n    </ion-col>\n  </ion-row>\n    <ion-row style=\"justify-content: center;\">\n      <ion-col col-md-6 col-12 style=\"display: flex; max-width: 900px;\" >\n\n        <ion-input type=\"number\" [value]=\"limite\" style=\"font-size: 32px;\" [(ngModel)]=\"nuevoLimite\">\n        </ion-input>\n        <ion-button (click)=\"actualizarLimite()\">\n          Actualizar valor\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row  class=\"mt-5\" style=\"margin-top: 100px;\">\n      <ion-col  class=\"text-center\">\n        <div  class=\"weatherWidgetRow\" style=\"font-size: 40px; margin-top: 5px; text-align: center;\" class=\"small-text\"> Limite : {{limite}} ° Temperatura actual :  {{ultimoambiente1 }}\n         Ambiente 1\n        </div>\n   \n      </ion-col>\n      <ion-col style=\"display: flex; justify-content: center;\">\n        <div id=\"fan\">\n          <div class=\"oscillator\" id=\"oscillator\">\n            <div class=\"guard\">\n              <div class=\"frame\"></div>\n              <div class=\"cir1\"></div>\n              <div class=\"cir2\"></div>\n              <div class=\"cir3\"></div>\n              <div class=\"cir4\"></div>\n              <div class=\"cir5\"></div>\n              <div class=\"cir6\"></div>\n              <div class=\"bar1\"></div>\n              <div class=\"bar2\"></div>\n            </div>\n            <div class=\"blades \" id=\"blades\">\n              <div class=\"b1\"></div>\n              <div class=\"b2\"></div>\n              <div class=\"b3\"></div>\n            </div>\n            <div class=\"motor\" id=\"motor\"></div>\n          </div>\n          <div class=\"base\"></div>\n      </div>  \n      </ion-col>\n          \n      \n    </ion-row>\n    <ion-row  class=\"mt-5\" style=\"margin-top: 170px;\">\n      <ion-col  class=\"text-center\">\n        <div  class=\"weatherWidgetRow\" style=\"font-size: 40px; margin-top: 5px; text-align: center;\" class=\"small-text\"> Limite : {{limite}} ° Temperatura actual :  {{ultimoambiente2 }}\n         Ambiente 2\n        </div>\n    \n      </ion-col>\n      <ion-col style=\"display: flex; justify-content: center;\">\n        <div id=\"fan2\">\n          <div class=\"oscillator\" id=\"oscillator2\">\n            <div class=\"guard\">\n              <div class=\"frame\"></div>\n              <div class=\"cir1\"></div>\n              <div class=\"cir2\"></div>\n              <div class=\"cir3\"></div>\n              <div class=\"cir4\"></div>\n              <div class=\"cir5\"></div>\n              <div class=\"cir6\"></div>\n              <div class=\"bar1\"></div>\n              <div class=\"bar2\"></div>\n            </div>\n            <div class=\"blades \" id=\"blades2\">\n              <div class=\"b1\"></div>\n              <div class=\"b2\"></div>\n              <div class=\"b3\"></div>\n            </div>\n            <div class=\"motor\" id=\"motor2\"></div>\n          </div>\n          <div class=\"base\"></div>\n      </div>  \n      </ion-col>\n          \n      \n    </ion-row>\n    <ion-row class=\"text-center\" style=\"margin-top: 100px;\">\n      <ion-col>\n  \n        <h1 style=\"font-size: 60px; text-align: center;\" class=\"small-text\">Configuracion Sensores de humo/monoxido</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: 100px; justify-content: center;\">\n      <ion-col col-md-6 col-12 style=\"display: flex; justify-content: center; max-width: 900px;\">\n        <ion-input type=\"number\" [value]=\"0\" style=\"font-size: 32px;\" [(ngModel)]=\"nuevoHumo\">\n          </ion-input>\n          <ion-button (click)=\"simularHumo()\">\n            Simular valor humo\n          </ion-button>\n        </ion-col>\n   \n    </ion-row>\n    <ion-row style=\"justify-content: center;\" > \n      <ion-col col-md-6 col-12 style=\"display: flex; max-width: 900px; \">\n        <ion-input type=\"number\" [value]=\"0\" style=\"font-size: 32px;\" [(ngModel)]=\"nuevoMonoxido\" > </ion-input>\n          <ion-button (click)=\"simularMonoxido()\">\n            Simular valor monoxido\n          </ion-button>\n\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"background-color: white;\">\n    </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map