(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"Sa0/":function(n,t,e){"use strict";e.r(t),e.d(t,"Tab5PageModule",function(){return p});var c=e("ofXK"),o=e("3Pt+"),i=e("TEn/"),r=e("tyNb"),a=e("fXoL"),b=e("9UZm");function s(n,t){1&n&&(a.Pb(0,"span",11),a.hc(1," Alarma encendida!!! "),a.Ob())}function l(n,t){1&n&&(a.Pb(0,"span",12),a.hc(1," Ok! "),a.Ob())}function u(n,t){if(1&n&&(a.Pb(0,"ion-card"),a.Pb(1,"ion-card-header",7),a.gc(2,s,2,0,"span",8),a.gc(3,l,2,0,"span",9),a.Ob(),a.Pb(4,"ion-badge",10),a.hc(5),a.Ob(),a.Ob()),2&n){const n=t.$implicit;a.Ab(2),a.cc("ngIf",1==n.value),a.Ab(1),a.cc("ngIf",0==n.value),a.Ab(2),a.ic(n.datetime)}}const f=[{path:"",component:(()=>{class n{constructor(n){this.testService=n}ngOnInit(){this.getData()}getData(){this.testService.interiorAlarma().subscribe(n=>{console.log(n),this.ultimasdiez=n},n=>{console.log(n)})}}return n.\u0275fac=function(t){return new(t||n)(a.Kb(b.a))},n.\u0275cmp=a.Eb({type:n,selectors:[["app-tab5"]],decls:13,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],[1,"container-fluid"],[1,"btn","btn-primary",3,"click"],[1,"row","my-5","justify-content-center"],[1,"col-12","my-5","d-flex","justify-content-center"],[4,"ngFor","ngForOf"],[2,"text-align","center"],["style","font-size: 30px; color: red;",4,"ngIf"],["style","font-size: 30px;",4,"ngIf"],["color","secondary"],[2,"font-size","30px","color","red"],[2,"font-size","30px"]],template:function(n,t){1&n&&(a.Pb(0,"ion-header",0),a.Pb(1,"ion-toolbar"),a.Pb(2,"ion-title"),a.hc(3," Alarma "),a.Ob(),a.Ob(),a.Ob(),a.Pb(4,"ion-content",1),a.Pb(5,"div",2),a.Pb(6,"ion-row"),a.Pb(7,"ion-col"),a.Pb(8,"button",3),a.Wb("click",function(){return t.getData()}),a.hc(9,"Actualizar "),a.Ob(),a.Ob(),a.Ob(),a.Pb(10,"div",4),a.Pb(11,"div",5),a.gc(12,u,6,3,"ion-card",6),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&n&&(a.cc("translucent",!0),a.Ab(4),a.cc("fullscreen",!0),a.Ab(8),a.cc("ngForOf",t.ultimasdiez))},directives:[i.g,i.r,i.q,i.f,i.m,i.e,c.j,i.c,i.d,c.k,i.b],styles:[""]}),n})()}];let d=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.Ib({type:n}),n.\u0275inj=a.Hb({imports:[[r.i.forChild(f)],r.i]}),n})(),p=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.Ib({type:n}),n.\u0275inj=a.Hb({imports:[[c.b,o.a,i.s,d]]}),n})()}}]);