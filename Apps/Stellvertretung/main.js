"use strict";
(self["webpackChunkstellvertretung"] = self["webpackChunkstellvertretung"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 1416);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ 2993);
/* harmony import */ var _unauthenticated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unauthenticated.component */ 1249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: 'substitutions',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_substitutions_substitutions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./substitutions/substitutions.module */ 976)).then((m) => m.SubstitutionsModule),
    },
    { path: 'unauthenticated', component: _unauthenticated_component__WEBPACK_IMPORTED_MODULE_2__.UnauthenticatedComponent },
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
        pathMatch: 'full',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
                useHash: true,
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 8109:
/*!*********************************************!*\
  !*** ./src/app/app-standalone.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStandaloneComponent": () => (/* binding */ AppStandaloneComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 4514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6799);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/auth.service */ 629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_services_i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/i18n.service */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_services_teacher_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/teacher-resource.service */ 622);
/* harmony import */ var _shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 3935);













const _c0 = function () { return ["substitutions", "admin"]; };
function AppStandaloneComponent_div_2_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "navigation.item-admin"));
} }
const _c1 = function () { return ["substitutions", "execute"]; };
const _c2 = function () { return ["substitutions", "assign"]; };
function AppStandaloneComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6)(1, "button", 7)(2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 9)(5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AppStandaloneComponent_div_2_a_11_Template, 3, 5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 5, "navigation.item-execute"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 7, "navigation.item-assign"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 9, ctx_r0.isAdmin$));
} }
function AppStandaloneComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div");
} }
function AppStandaloneComponent_div_9_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 20)(8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppStandaloneComponent_div_9_div_9_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r7.stopSubstitution(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 22)(19, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppStandaloneComponent_div_9_div_9_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r9.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 6, "navigation.user.signed-in-as"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 8, ctx_r5.substitutionName$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 10, "navigation.user.stop-button-label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 12, "navigation.user.substituted-by"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 14, ctx_r5.userName$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 16, "navigation.user.logout-button-label"));
} }
function AppStandaloneComponent_div_9_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 22)(8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppStandaloneComponent_div_9_div_11_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r10.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "navigation.user.signed-in-as"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 4, ctx_r6.userName$));
} }
function AppStandaloneComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "button", 13)(2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 15)(8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AppStandaloneComponent_div_9_div_9_Template, 22, 18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AppStandaloneComponent_div_9_div_11_Template, 10, 6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 3, ctx_r2.userName$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 5, ctx_r2.isSubstitutionActive$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 7, ctx_r2.isSubstitutionActive$) == false);
} }
function AppStandaloneComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppStandaloneComponent_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "navigation.user.login-button-label"), " ");
} }
class AppStandaloneComponent {
    constructor(router, i18n, auth, location, teacherResourceService, teacherSubstitutionService) {
        this.router = router;
        this.auth = auth;
        this.location = location;
        this.teacherResourceService = teacherResourceService;
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.isAdmin$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(auth.hasRole(_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.SUBSTITUTE_ADMINISTRATOR_ROLE));
        this.isLoggedIn$ = auth.personId$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(v => !!v));
        this.userName$ = auth.holderId$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(v => this.auth.personName));
        this.isSubstitutionActive$ = auth.substitutionId$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(v => !!v));
        this.substitutionName$ = auth.holderId$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(v => {
            console.log('load', v);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(v => this.teacherResourceService.getTeacherName(v)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(v => {
            console.log('name', v);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.onErrorResumeNext)());
    }
    stopSubstitution() {
        if (this.auth.substitutionId != null) {
            this.teacherSubstitutionService.stop(this.auth.substitutionId).subscribe(v => null);
        }
    }
    login() {
        this.auth.login();
    }
    logout() {
        this.auth.logout();
    }
}
AppStandaloneComponent.ɵfac = function AppStandaloneComponent_Factory(t) { return new (t || AppStandaloneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_i18n_service__WEBPACK_IMPORTED_MODULE_1__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_teacher_resource_service__WEBPACK_IMPORTED_MODULE_2__.TeacherResourceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_3__.TeacherSubstitutionService)); };
AppStandaloneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppStandaloneComponent, selectors: [["app-standalone"]], decls: 14, vars: 15, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-primary", "mb-3"], [1, "container-fluid"], ["class", "dropdown main-menu", 4, "ngIf"], [4, "ngIf"], ["href", "#", 1, "navbar-brand", "text-light"], ["class", "dropdown", 4, "ngIf"], [1, "dropdown", "main-menu"], ["type", "button", "id", "dropdownMenuButton", "data-bs-toggle", "dropdown", 1, "btn", "btn-primary"], [1, "material-icons"], [1, "dropdown-menu"], ["routerLinkActive", "active", 1, "dropdown-item", 3, "routerLink"], ["class", "dropdown-item", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-bs-toggle", "dropdown", 1, "btn", "btn-primary", "text-nowrap", "d-flex", "flex-row"], [1, "ms-2", "d-none", "d-md-block"], [1, "dropdown-menu", "dropdown-menu-end"], ["class", "m-2", 4, "ngIf"], [1, "m-2"], [1, "text-muted"], [1, "text-nowrap"], [1, "text-end"], [1, "btn", "btn-secondary", 3, "click"], [1, "text-end", "mt-2"], [1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function AppStandaloneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppStandaloneComponent_div_2_Template, 13, 13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AppStandaloneComponent_div_4_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AppStandaloneComponent_div_9_Template, 13, 9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AppStandaloneComponent_div_11_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, ctx.isLoggedIn$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 7, ctx.isLoggedIn$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 9, "navigation.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 11, ctx.isLoggedIn$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 13, ctx.isLoggedIn$));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavbar, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkActive, _app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: ["[_ngcontent-%COMP%]:root {\n  --stellvertretung-primary: #005189;\n  --stellvertretung-primary-hover: #004272;\n  --stellvertretung-secondary: #8a8a8a;\n  --stellvertretung-secondary-hover: #747474;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 1.8rem !important;\n}\n\n@media (min-width: 768px) {\n  .main-menu[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50px;\n    left: 0;\n    right: 0;\n    height: 50px;\n    display: flex;\n    flex-direction: row;\n    justify-content: left;\n    background: #4d4d4d;\n  }\n\n  .main-menu[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(.dropdown-menu) {\n    display: none;\n  }\n\n  .main-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%] {\n    display: contents;\n  }\n\n  .main-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    width: min-content;\n    padding: 0 1.5rem;\n    line-height: 50px;\n    color: #ffffff;\n  }\n\n  .main-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%], .main-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:active {\n    background: none !important;\n    color: #ef7c00;\n  }\n\n  .main-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .main-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n    background: #3d3d3d !important;\n  }\n\n  nav.navbar[_ngcontent-%COMP%] {\n    margin-bottom: 64px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxib290c3RyYXAtdmFyaWFibGVzLnNjc3MiLCJhcHAtc3RhbmRhbG9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7RUFBQTtBQXdDQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0FDdENKO0FEa0RBOztFQUFBO0FDeERBO0VBQ0UsNEJBQUE7QUFZRjtBQVRBLHVDQUFBO0FBQ0E7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUFZRjs7RUFWQTtJQUNFLGFBQUE7RUFhRjs7RUFYQTtJQUNFLGlCQUFBO0VBY0Y7O0VBWkE7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0VBZUY7O0VBWkE7O0lBRUUsMkJBQUE7SUFDQSxjRG5CSztFQ2tDUDs7RUFaQTs7SUFFRSw4QkFBQTtFQWVGOztFQVpBO0lBQ0UsOEJBQUE7RUFlRjtBQUNGIiwiZmlsZSI6ImFwcC1zdGFuZGFsb25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcclxuXHJcbi8qKlxyXG4gKiBCb290c3RyYXAgdmFyaWFibGVzIG92ZXJyaWRlc1xyXG4gKi9cclxuXHJcbi8vIGRpc2FibGUgcmVzcG9uc2l6ZSBmb250IHNpemVzXHJcbiRlbmFibGUtcmZzOiBmYWxzZTtcclxuXHJcbi8vIGNvbnRhaW5lciBwYWRkaW5nXHJcbiRjb250YWluZXItcGFkZGluZy14OiAxLjVyZW07XHJcblxyXG4vLyBDb2xvcnNcclxuJGJvZHktYmc6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuJGJvZHktY29sb3I6IHJnYig5NiwgOTYsIDk2KTtcclxuJHllbGxvdzogcmdiKDI1NSwgMTY4LCAyMCk7XHJcbiRvcmFuZ2U6IHJnYigyMzksIDEyNCwgMCk7XHJcbiRibHVlOiByZ2IoNjUsIDExOCwgMTQ1KTtcclxuJHRlYWw6IHJnYigxOSwgNjksIDk3KTtcclxuJGdyYXk6IHJnYigxMzgsIDEzOCwgMTM4KTtcclxuJGdyYXktZGFyazogcmdiKDUxLCA1MSwgNTEpO1xyXG5cclxuJGJsdWU6ICMwMDUxODk7XHJcbiRibHVlLWhvdmVyOiAjMDA0MjcyO1xyXG4kZ3JheS1ob3ZlcjogcmdiKDExNiwgMTE2LCAxMTYpO1xyXG5cclxuJHByZXNlbnQtY29sb3I6ICMyOGE3NDU7XHJcbiRhYnNlbnQtY29sb3I6ICNkYzM1NDU7XHJcbiR1bmFwcHJvdmVkLWNvbG9yOiAkeWVsbG93O1xyXG5cclxuLy8gRm9udFxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1zaXplLWJhc2U6IDEuNXJlbTsgLy8gU2VlIGFwcC9zaGFyZWQvc3R5bGVzL3R5cG9ncmFwaHkuc2Nzc1xyXG5cclxuLy8gU3BhY2luZ1xyXG4kc3BhY2VyOiAxLjVyZW07IC8vIENvbXBlbnNhdGUgZm9yIHRoZSBiYXNlIGZvbnRcclxuXHJcbi8vIEJ1dHRvbnNcclxuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbjpyb290IHtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXByaW1hcnk6ICN7JGJsdWV9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctcHJpbWFyeS1ob3ZlcjogI3skYmx1ZS1ob3Zlcn07XHJcbiAgICAtLXN0ZWxsdmVydHJldHVuZy1zZWNvbmRhcnk6ICN7JGdyYXl9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctc2Vjb25kYXJ5LWhvdmVyOiAjeyRncmF5LWhvdmVyfTtcclxufVxyXG5cclxuLy8gRHJvcGRvd25cclxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICRncmF5LTIwMDtcclxuXHJcbi8vIFRhYmxlc1xyXG4kdGFibGUtaGVhZC1iZzogJHRhYmxlLWJvcmRlci1jb2xvcjtcclxuJHRhYmxlLWhlYWQtY29sb3I6ICRncmF5LTYwMDtcclxuJHRhYmxlLWdyb3VwLXNlcGFyYXRvci1jb2xvcjogJHRhYmxlLWJvcmRlci1jb2xvcjtcclxuJHRhYmxlLXRoLWZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblxyXG4vKipcclxuICogQ3VzdG9tIFZhcmlhYmxlc1xyXG4gKi9cclxuXHJcbi8vIEljb25zXHJcbiRlcnotaWNvbi1zaXplOiAyLjJyZW07XHJcblxyXG4vLyBDdXN0b20gdmFyaWFibGVzXHJcbiRlcnotY29udGFpbmVyLW1heC13aWR0aDogOTYwcHg7XHJcbiRlcnotY29udGFpbmVyLXBhZGRpbmcteDogJHNwYWNlcjtcclxuJGVyei1jb250YWluZXItcGFkZGluZy15OiAkc3BhY2VyO1xyXG4kZXJ6LXByZXNlbmNlLWNvbnRyb2wtZW50cnktbWluLXdpZHRoOiA0MDBweDtcclxuIiwiQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC12YXJpYWJsZXNcIjtcclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7Ki9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1haW4tbWVudSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XHJcbiAgfVxyXG4gIC5tYWluLW1lbnUgPiA6bm90KC5kcm9wZG93bi1tZW51KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubWFpbi1tZW51ID4gLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgfVxyXG4gIC5tYWluLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGEge1xyXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xyXG4gICAgcGFkZGluZzogMCAxLjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tbWVudSA+IC5kcm9wZG93bi1tZW51ID4gYS5hY3RpdmUsXHJcbiAgLm1haW4tbWVudSA+IC5kcm9wZG93bi1tZW51ID4gYTphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICRvcmFuZ2U7XHJcbiAgfVxyXG5cclxuICAubWFpbi1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBhOmhvdmVyLFxyXG4gIC5tYWluLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGE6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogIzNkM2QzZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgbmF2Lm5hdmJhciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ 8029);
/* harmony import */ var _shared_utils_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/utils/decode */ 8108);
/* harmony import */ var _shared_tokens_dom_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/tokens/dom-apis */ 1261);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/auth.service */ 629);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_services_i18n_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/i18n.service */ 2741);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4101);












class AppComponent {
    constructor(router, auth, location, i18n, toastrService, settings, navigator) {
        this.router = router;
        this.auth = auth;
        this.location = location;
        this.toastrService = toastrService;
        this.settings = settings;
        this.navigator = navigator;
        this.router.initialNavigation();
        i18n.initialize();
        this.checkSettings();
    }
    checkSettings() {
        (0,_shared_utils_decode__WEBPACK_IMPORTED_MODULE_1__.decode)(_settings__WEBPACK_IMPORTED_MODULE_0__.Settings)(this.settings)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            console.error(String(error));
            this.toastrService.error('Please check the contents of the settings.js file (see Console output for more details).', 'Invalid Settings');
            return rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY;
        }))
            .subscribe();
    }
    ngOnInit() {
        var _a;
        let params = new URLSearchParams(window.location.search);
        let accessToken = params.get('access_token');
        let moduleRedirectUrl = params.get('moduleRedirectUrl');
        let hash = ((_a = window.location.hash) !== null && _a !== void 0 ? _a : '').replace(/^\#\/?/, '');
        if (accessToken) {
            console.log('set token');
            this.auth.setToken(accessToken);
        }
        if (moduleRedirectUrl) {
            window.location.hash = `#${moduleRedirectUrl}`;
            //this.router.navigate([moduleRedirectUrl]);
        }
        else if (!hash) {
            console.log('navigate to assign');
            this.router.navigate(['substitutions', 'assign']);
        }
        if (accessToken || moduleRedirectUrl) {
            params.delete('access_token');
            params.delete('moduleRedirectUrl');
            window.location.search = params.toString();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_i18n_service__WEBPACK_IMPORTED_MODULE_4__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_tokens_dom_apis__WEBPACK_IMPORTED_MODULE_2__.NAVIGATOR)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdFLFdBQUE7QUFERiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLy8gU29tZWhvdyB0aGUgYXBwIGVsZW1lbnQgaXMgbm90IGZ1bGwgd2lkdGgsIGVuc3VyZSBpdCBpcyBmdWxsIHdpZHRoXHJcbiAgLy8gdG8gYmUgYWJsZSB0byBjZW50ZXIgdGhlIHNwaW5uZXIgd2l0aGluIHRoZSBhdmFpbGFibGUgc3BhY2UuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common_locales_de_CH__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/locales/de-CH */ 2110);
/* harmony import */ var _angular_common_locales_fr_CH__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/fr-CH */ 2343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/elements */ 7616);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _global_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global-error-handler */ 9544);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ 1416);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings */ 8029);
/* harmony import */ var _shared_services_i18n_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/i18n.service */ 2741);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _unauthenticated_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./unauthenticated.component */ 1249);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-select/ng-select */ 8660);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _app_standalone_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-standalone.component */ 8109);



























// AoT requires an exported function for factories
function HttpLoaderFactory(http, settings) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__.TranslateHttpLoader(http, `${settings.scriptsAndAssetsPath}/assets/locales/`, '.json');
}
(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.registerLocaleData)(_angular_common_locales_de_CH__WEBPACK_IMPORTED_MODULE_0__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.registerLocaleData)(_angular_common_locales_fr_CH__WEBPACK_IMPORTED_MODULE_1__["default"]);
class AppModule {
    constructor(injector) {
        this.injector = injector;
        const appElement = (0,_angular_elements__WEBPACK_IMPORTED_MODULE_13__.createCustomElement)(_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, {
            injector: this.injector,
        });
        customElements.define('erz-app', appElement);
        const appStandaloneElement = (0,_angular_elements__WEBPACK_IMPORTED_MODULE_13__.createCustomElement)(_app_standalone_component__WEBPACK_IMPORTED_MODULE_10__.AppStandaloneComponent, {
            injector: this.injector,
        });
        customElements.define('erz-app-standalone', appStandaloneElement);
        console.log('init module');
    }
    ngDoBootstrap(appRef) { }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.Injector)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ErrorHandler, useClass: _global_error_handler__WEBPACK_IMPORTED_MODULE_4__.GlobalErrorHandler },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_14__.LOCALE_ID,
            useFactory: (i18nService) => i18nService.detectLanguage(),
            deps: [_shared_services_i18n_service__WEBPACK_IMPORTED_MODULE_7__.I18nService],
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient, _settings__WEBPACK_IMPORTED_MODULE_6__.SETTINGS],
                },
            }),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_20__.ToastrModule.forRoot({
                positionClass: 'toast-bottom-right',
                preventDuplicates: true,
            }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__.NgSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _app_standalone_component__WEBPACK_IMPORTED_MODULE_10__.AppStandaloneComponent,
        _home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent,
        _unauthenticated_component__WEBPACK_IMPORTED_MODULE_9__.UnauthenticatedComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_20__.ToastrModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule] }); })();


/***/ }),

/***/ 2993:
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/auth.service */ 629);



class AuthGuard {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    canActivate(next, state) {
        if (!this.auth.isAuthenticated) {
            this.router.navigate(['/unauthenticated']);
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9544:
/*!*****************************************!*\
  !*** ./src/app/global-error-handler.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalErrorHandler": () => (/* binding */ GlobalErrorHandler)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




class GlobalErrorHandler {
    constructor(ngZone, injector, translate) {
        this.ngZone = ngZone;
        this.injector = injector;
        this.translate = translate;
    }
    handleError(error) {
        console.error(String(error));
        if (!(error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpErrorResponse)) {
            this.notifyError();
        }
    }
    notifyError() {
        // Inject and use ToastrService within ngZone, see:
        // https://github.com/scttcper/ngx-toastr/issues/179
        this.ngZone.run(() => {
            this.toastr.error(this.translate.instant('global.app-errors.exception-message'), this.translate.instant('global.app-errors.exception-title'));
        });
    }
    get toastr() {
        return this.injector.get(ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService);
    }
}
GlobalErrorHandler.ɵfac = function GlobalErrorHandler_Factory(t) { return new (t || GlobalErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService)); };
GlobalErrorHandler.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GlobalErrorHandler, factory: GlobalErrorHandler.ɵfac });


/***/ }),

/***/ 1416:
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/auth.service */ 629);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





function HomeComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "h2")(2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const section_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/" + section_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, section_r1 + ".title"), " ");
} }
class HomeComponent {
    constructor(route, authService, router, location, changeDetector) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.location = location;
        this.changeDetector = changeDetector;
        this.sections = [
            'substitutions/execute',
            'substitutions/assign',
            //'substitutions',
            //'substitutions/current'
        ];
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["erz-home"]], decls: 2, vars: 1, consts: [[1, "mt-3"], [4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_li_1_Template, 5, 4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sections);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8413:
/*!******************************************!*\
  !*** ./src/app/rest-auth-interceptor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestAuthInterceptor": () => (/* binding */ RestAuthInterceptor)
/* harmony export */ });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ 8029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/auth.service */ 629);




class RestAuthInterceptor {
    constructor(auth, settings) {
        this.auth = auth;
        this.settings = settings;
    }
    /**
     * Adds the CLX-Authorization HTTP header to API requests.
     */
    intercept(req, next) {
        if (req.url.startsWith(this.settings.apiUrl) && this.auth.accessToken) {
            const headers = req.headers.set('CLX-Authorization', `token_type=urn:ietf:params:oauth:token-type:jwt-bearer, access_token=${this.auth.accessToken}`);
            return next.handle(req.clone({ headers }));
        }
        return next.handle(req);
    }
}
RestAuthInterceptor.ɵfac = function RestAuthInterceptor_Factory(t) { return new (t || RestAuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS)); };
RestAuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RestAuthInterceptor, factory: RestAuthInterceptor.ɵfac });


/***/ }),

/***/ 3367:
/*!*******************************************!*\
  !*** ./src/app/rest-error-interceptor.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestErrorInterceptor": () => (/* binding */ RestErrorInterceptor),
/* harmony export */   "withConfig": () => (/* binding */ withConfig)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);







function withConfig(config, params = {}) {
    let httpParams;
    if (params instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams) {
        httpParams = params;
    }
    else {
        httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({ fromObject: params });
    }
    return httpParams.set('restConfig', JSON.stringify(config));
}
function extractConfig(params) {
    return {
        config: JSON.parse(params.get('restConfig') || '{}'),
        params: params.delete('restConfig'),
    };
}
class RestErrorInterceptor {
    constructor(router, toastr, translate) {
        this.router = router;
        this.toastr = toastr;
        this.translate = translate;
    }
    /**
     * Displays an error notification for all error status codes.
     *
     * It is possible to disable error handling for all status codes by
     * setting the config option `skipErrorHandling` to `true`:
     *
     *   const params = withConfig(
     *     { disableErrorHandling: true },
     *     { myParam: 'foobar' }
     *   );
     *   this.http.get('/', { params }).pipe(catchError( handle request errors here... ))
     *
     * To disable error handling of only certain error codes, the option
     * `skipErrorHandlingForStatus` can be set to an array of status
     * codes like this:
     *
     *   const params = withConfig(
     *     { disableErrorHandlingForStatus: [403, 404] },
     *     { myParam: 'foobar' }
     *   );
     *   this.http.get('/', { params }).pipe(catchError( handle 403/404 here... ))
     */
    intercept(req, next) {
        // TODO: there might be better ways of passing options to the
        // interceptor in the future, see:
        // https://github.com/angular/angular/issues/18155
        const { config, params } = extractConfig(req.params);
        return next
            .handle(req.clone({ params }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.getErrorHandler(config)));
    }
    getErrorHandler(config) {
        // tslint:disable-next-line
        return (error, caught) => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpErrorResponse &&
                !config.disableErrorHandling &&
                (!config.disableErrorHandlingForStatus ||
                    !config.disableErrorHandlingForStatus.includes(error.status))) {
                switch (error.status) {
                    case 401 /* UNAUTHORIZED */:
                        this.notifyError('noaccess');
                        this.router.navigate(['/unauthenticated']);
                        throw error.error;
                    //return EMPTY;
                    case 403 /* FORBIDDEN */:
                        this.notifyError('noaccess');
                        throw error.error;
                    //return EMPTY;
                    case 404 /* NOT_FOUND */:
                        this.notifyError('notfound');
                        throw error.error;
                    //return EMPTY;
                    case 0 /* UNKNOWN */:
                    case 503 /* SERVICE_UNAVAILABLE */:
                    case 504 /* GATEWAY_TIMEOUT */:
                        this.notifyError('unavailable');
                        throw error.error;
                    //return EMPTY;
                    case 409 /* CONFLICT */: // Validation error
                        this.notifyError('conflict');
                        throw error.error;
                    //return EMPTY;
                    default:
                        this.notifyError('server');
                        throw error.error;
                    //return EMPTY;
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        };
    }
    notifyError(messageKey) {
        this.toastr.error(this.translate.instant(`global.rest-errors.${messageKey}-message`), this.translate.instant(`global.rest-errors.${messageKey}-title`));
    }
}
RestErrorInterceptor.ɵfac = function RestErrorInterceptor_Factory(t) { return new (t || RestErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService)); };
RestErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RestErrorInterceptor, factory: RestErrorInterceptor.ɵfac });


/***/ }),

/***/ 8029:
/*!*****************************!*\
  !*** ./src/app/settings.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SETTINGS": () => (/* binding */ SETTINGS),
/* harmony export */   "Settings": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var io_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! io-ts */ 9450);


const Settings = io_ts__WEBPACK_IMPORTED_MODULE_0__.type({
    apiUrl: io_ts__WEBPACK_IMPORTED_MODULE_0__.string,
    oAuthUrl: io_ts__WEBPACK_IMPORTED_MODULE_0__.string,
    oAuthRedirectUrl: io_ts__WEBPACK_IMPORTED_MODULE_0__.union([io_ts__WEBPACK_IMPORTED_MODULE_0__.string, io_ts__WEBPACK_IMPORTED_MODULE_0__.undefined]),
    clientId: io_ts__WEBPACK_IMPORTED_MODULE_0__.union([io_ts__WEBPACK_IMPORTED_MODULE_0__.string, io_ts__WEBPACK_IMPORTED_MODULE_0__.undefined]),
    instanceId: io_ts__WEBPACK_IMPORTED_MODULE_0__.string,
    appScope: io_ts__WEBPACK_IMPORTED_MODULE_0__.string,
    scriptsAndAssetsPath: io_ts__WEBPACK_IMPORTED_MODULE_0__.string,
});

const SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('Application Settings', {
    providedIn: 'root',
    factory: () => window.stellvertretung.settings,
});


/***/ }),

/***/ 7871:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/avatar/avatar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarComponent": () => (/* binding */ AvatarComponent)
/* harmony export */ });
/* harmony import */ var src_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/settings */ 8029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/storage.service */ 1303);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);






class AvatarComponent {
    constructor(settings, storageService) {
        this.settings = settings;
        this.storageService = storageService;
        this.avatarStyles = {};
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.studentId) {
            this.avatarStyles = this.buildAvatarStyles(this.studentId);
        }
    }
    buildAvatarStyles(studentId) {
        return {
            'background-image': [
                this.buildAvatarUrl(studentId),
                this.fallbackAvatarUrl,
            ]
                .map((url) => `url(${url})`)
                .join(', '),
        };
    }
    buildAvatarUrl(studentId) {
        const accessToken = this.storageService.getAccessToken() || '';
        return `${this.settings.apiUrl}/Files\/personPictures/${studentId}?token=${accessToken}`;
    }
    get fallbackAvatarUrl() {
        return `${this.settings.scriptsAndAssetsPath}/assets/images/avatar-placeholder.png`;
    }
}
AvatarComponent.ɵfac = function AvatarComponent_Factory(t) { return new (t || AvatarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService)); };
AvatarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AvatarComponent, selectors: [["erz-avatar"]], inputs: { studentId: "studentId", link: "link", linkParams: "linkParams" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 5, consts: [[1, "avatar", 3, "routerLink", "queryParams", "ngStyle"]], template: function AvatarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "a", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", !ctx.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx.link)("queryParams", ctx.linkParams)("ngStyle", ctx.avatarStyles);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle], styles: ["[_ngcontent-%COMP%]:root {\n  --stellvertretung-primary: #005189;\n  --stellvertretung-primary-hover: #004272;\n  --stellvertretung-secondary: #8a8a8a;\n  --stellvertretung-secondary-hover: #747474;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n}\n.small[_nghost-%COMP%] {\n  width: 40px;\n  min-width: 40px;\n  height: 50px;\n}\n.large[_nghost-%COMP%] {\n  width: 100px;\n  min-width: 100px;\n  height: 130px;\n}\n.avatar[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid rgba(96, 96, 96, 0.25);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\na.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib290c3RyYXAtdmFyaWFibGVzLnNjc3MiLCJhdmF0YXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7O0VBQUE7QUF3Q0E7RUFDSSxrQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtBQ3RDSjtBRGtEQTs7RUFBQTtBQ3hEQTtFQUNFLGFBQUE7QUFZRjtBQVRBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBWUY7QUFUQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFZRjtBQVRBO0VBQ0UsT0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBWUY7QUFUQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQVlGIiwiZmlsZSI6ImF2YXRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XHJcblxyXG4vKipcclxuICogQm9vdHN0cmFwIHZhcmlhYmxlcyBvdmVycmlkZXNcclxuICovXHJcblxyXG4vLyBkaXNhYmxlIHJlc3BvbnNpemUgZm9udCBzaXplc1xyXG4kZW5hYmxlLXJmczogZmFsc2U7XHJcblxyXG4vLyBjb250YWluZXIgcGFkZGluZ1xyXG4kY29udGFpbmVyLXBhZGRpbmcteDogMS41cmVtO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRib2R5LWJnOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiRib2R5LWNvbG9yOiByZ2IoOTYsIDk2LCA5Nik7XHJcbiR5ZWxsb3c6IHJnYigyNTUsIDE2OCwgMjApO1xyXG4kb3JhbmdlOiByZ2IoMjM5LCAxMjQsIDApO1xyXG4kYmx1ZTogcmdiKDY1LCAxMTgsIDE0NSk7XHJcbiR0ZWFsOiByZ2IoMTksIDY5LCA5Nyk7XHJcbiRncmF5OiByZ2IoMTM4LCAxMzgsIDEzOCk7XHJcbiRncmF5LWRhcms6IHJnYig1MSwgNTEsIDUxKTtcclxuXHJcbiRibHVlOiAjMDA1MTg5O1xyXG4kYmx1ZS1ob3ZlcjogIzAwNDI3MjtcclxuJGdyYXktaG92ZXI6IHJnYigxMTYsIDExNiwgMTE2KTtcclxuXHJcbiRwcmVzZW50LWNvbG9yOiAjMjhhNzQ1O1xyXG4kYWJzZW50LWNvbG9yOiAjZGMzNTQ1O1xyXG4kdW5hcHByb3ZlZC1jb2xvcjogJHllbGxvdztcclxuXHJcbi8vIEZvbnRcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtc2l6ZS1iYXNlOiAxLjVyZW07IC8vIFNlZSBhcHAvc2hhcmVkL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcclxuXHJcbi8vIFNwYWNpbmdcclxuJHNwYWNlcjogMS41cmVtOyAvLyBDb21wZW5zYXRlIGZvciB0aGUgYmFzZSBmb250XHJcblxyXG4vLyBCdXR0b25zXHJcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG46cm9vdCB7XHJcbiAgICAtLXN0ZWxsdmVydHJldHVuZy1wcmltYXJ5OiAjeyRibHVlfTtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXByaW1hcnktaG92ZXI6ICN7JGJsdWUtaG92ZXJ9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctc2Vjb25kYXJ5OiAjeyRncmF5fTtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXNlY29uZGFyeS1ob3ZlcjogI3skZ3JheS1ob3Zlcn07XHJcbn1cclxuXHJcbi8vIERyb3Bkb3duXHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAkZ3JheS0yMDA7XHJcblxyXG4vLyBUYWJsZXNcclxuJHRhYmxlLWhlYWQtYmc6ICR0YWJsZS1ib3JkZXItY29sb3I7XHJcbiR0YWJsZS1oZWFkLWNvbG9yOiAkZ3JheS02MDA7XHJcbiR0YWJsZS1ncm91cC1zZXBhcmF0b3ItY29sb3I6ICR0YWJsZS1ib3JkZXItY29sb3I7XHJcbiR0YWJsZS10aC1mb250LXdlaWdodDogbm9ybWFsO1xyXG5cclxuLyoqXHJcbiAqIEN1c3RvbSBWYXJpYWJsZXNcclxuICovXHJcblxyXG4vLyBJY29uc1xyXG4kZXJ6LWljb24tc2l6ZTogMi4ycmVtO1xyXG5cclxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4kZXJ6LWNvbnRhaW5lci1tYXgtd2lkdGg6IDk2MHB4O1xyXG4kZXJ6LWNvbnRhaW5lci1wYWRkaW5nLXg6ICRzcGFjZXI7XHJcbiRlcnotY29udGFpbmVyLXBhZGRpbmcteTogJHNwYWNlcjtcclxuJGVyei1wcmVzZW5jZS1jb250cm9sLWVudHJ5LW1pbi13aWR0aDogNDAwcHg7XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9ib290c3RyYXAtdmFyaWFibGVzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuOmhvc3Quc21hbGwge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIG1pbi13aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbjpob3N0LmxhcmdlIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICBmbGV4OiAxO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGJvZHktY29sb3IsIDAuMjUpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbmEuZGlzYWJsZWQge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2859:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/date-select/date-select.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateSelectComponent": () => (/* binding */ DateSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ 8684);
/* harmony import */ var _services_date_parser_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/date-parser-formatter */ 8568);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 3935);








class DateSelectComponent {
    constructor() {
        this.error = false;
        //@Input() 
        //get value():Option<Date> { return this.ngbDate; }
        //set value(val:Option<Date>) { this.ngbDate = val != null ? {year: val.getFullYear(), month: val.getMonth() + 1, day: val.getDate()} : null; }
        this.value = null;
        this.placeholder = 'shared.date-select.default-placeholder';
        this.minDate = null;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.componentId = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])('erz-date-select-');
    }
    ngOnInit() { }
    change(ngbDate) {
        this.valueChange.emit(ngbDate);
        return;
        if (ngbDate != null) {
            //this.valueChange.emit(new Date(Date.UTC(ngbDate.year, ngbDate.month - 1, ngbDate.day)));
            this.valueChange.emit(ngbDate);
        }
        else {
            this.valueChange.emit(null);
        }
    }
}
DateSelectComponent.ɵfac = function DateSelectComponent_Factory(t) { return new (t || DateSelectComponent)(); };
DateSelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DateSelectComponent, selectors: [["erz-date-select"]], inputs: { error: "error", value: "value", placeholder: "placeholder", minDate: "minDate" }, outputs: { valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDateAdapter, useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDateNativeAdapter },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDateParserFormatter, useClass: _services_date_parser_formatter__WEBPACK_IMPORTED_MODULE_0__.DateParserFormatter },
        ])], decls: 8, vars: 12, consts: [[1, "input-group"], [1, "input-group-text", 3, "id"], [1, "material-icons"], ["type", "text", "ngbDatepicker", "", 1, "form-control", 3, "minDate", "ngModel", "click", "ngModelChange"], ["dp", "ngbDatepicker"]], template: function DateSelectComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1)(2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "calendar_today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DateSelectComponent_Template_input_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r0.toggle(); })("ngModelChange", function DateSelectComponent_Template_input_ngModelChange_4_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.componentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minDate", ctx.minDate)("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 8, ctx.placeholder))("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 10, ctx.placeholder))("aria-describedby", ctx.componentId);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbInputDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRlLXNlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8781:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/multiselect/multiselect.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiselectComponent": () => (/* binding */ MultiselectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-select/ng-select */ 8660);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);






function MultiselectComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiselectComponent_ng_template_2_div_0_Template_span_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r6 = restoredCtx.$implicit; const clear_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().clear; return clear_r4(item_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.Value, " ");
} }
function MultiselectComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiselectComponent_ng_template_2_div_0_Template, 4, 1, "div", 4);
} if (rf & 2) {
    const items_r3 = ctx.items;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r3);
} }
function MultiselectComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
} if (rf & 2) {
    const item_r10 = ctx.item;
    const item$_r11 = ctx.item$;
    const index_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "item-", index_r12, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item$_r11.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r10.Group, " ");
} }
function MultiselectComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
} if (rf & 2) {
    const item_r13 = ctx.item;
    const item$_r14 = ctx.item$;
    const index_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "item-", index_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item$_r14.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.Value, " ");
} }
class MultiselectComponent {
    constructor() {
        this.options = [];
        this.values = [];
        this.valuesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    itemsChanged() {
        this.valuesChange.emit(this.values);
    }
}
MultiselectComponent.ɵfac = function MultiselectComponent_Factory(t) { return new (t || MultiselectComponent)(); };
MultiselectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultiselectComponent, selectors: [["erz-multiselect"]], inputs: { options: "options", values: "values" }, outputs: { valuesChange: "valuesChange" }, decls: 5, vars: 10, consts: [["groupBy", "Group", "bindValue", "Key", "bindLabel", "Value", "dropdownPosition", "bottom", 1, "multiselect", 3, "items", "multiple", "selectableGroup", "selectableGroupAsModel", "closeOnSelect", "ngModel", "placeholder", "clearable", "ngModelChange", "click", "clear"], ["ng-multi-label-tmp", ""], ["ng-optgroup-tmp", ""], ["ng-option-tmp", ""], ["class", "ng-value", 4, "ngFor", "ngForOf"], [1, "ng-value"], ["aria-hidden", "true", 1, "ng-value-icon", "right", 3, "click"], ["type", "checkbox", 3, "id", "ngModel"]], template: function MultiselectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiselectComponent_Template_ng_select_ngModelChange_0_listener($event) { return ctx.values = $event; })("click", function MultiselectComponent_Template_ng_select_click_0_listener() { return ctx.itemsChanged(); })("clear", function MultiselectComponent_Template_ng_select_clear_0_listener() { return ctx.itemsChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiselectComponent_ng_template_2_Template, 1, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiselectComponent_ng_template_3_Template, 2, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiselectComponent_ng_template_4_Template, 2, 3, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 8, "shared.select.empty-option"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.options)("multiple", true)("selectableGroup", true)("selectableGroupAsModel", false)("closeOnSelect", false)("ngModel", ctx.values)("clearable", true);
    } }, directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__.NgMultiLabelTemplateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__.NgOptgroupTemplateDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__.NgOptionTemplateDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdWx0aXNlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 368:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/resettable-input/resettable-input.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResettableInputComponent": () => (/* binding */ ResettableInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);



function ResettableInputComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResettableInputComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.valueChange.emit(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
class ResettableInputComponent {
    constructor() {
        this.value = '';
        this.disabled = false;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() { }
}
ResettableInputComponent.ɵfac = function ResettableInputComponent_Factory(t) { return new (t || ResettableInputComponent)(); };
ResettableInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResettableInputComponent, selectors: [["erz-resettable-input"]], inputs: { value: "value", disabled: "disabled", placeholder: "placeholder", label: "label" }, outputs: { valueChange: "valueChange" }, decls: 7, vars: 5, consts: [[1, "input-group"], [1, "input-group-prepend"], ["id", "resettable-input", 1, "input-group-text"], [1, "material-icons"], ["type", "text", "aria-describedby", "resettable-input", 1, "form-control", 3, "value", "disabled", "keyup"], ["class", "btn btn-link text-decoration-none", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-link", "text-decoration-none", 3, "click"]], template: function ResettableInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2)(3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ResettableInputComponent_Template_input_keyup_5_listener($event) { return ctx.valueChange.emit($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResettableInputComponent_button_6_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", ctx.placeholder)("aria-label", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["input[_ngcontent-%COMP%] {\n  padding-right: 2.5em;\n}\n\nbutton[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  z-index: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0dGFibGUtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUNGIiwiZmlsZSI6InJlc2V0dGFibGUtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgcGFkZGluZy1yaWdodDogMi41ZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 9092:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/select/select.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectComponent": () => (/* binding */ SelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);







function SelectComponent_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "shared.select.empty-option"), " ");
} }
function SelectComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r2.Value, " ");
} }
class SelectComponent {
    constructor() {
        this.options = [];
        this.allowEmpty = true;
        this.value = null;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.options$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.rawValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.value$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([this.rawValue$, this.options$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(([rawValue, options]) => (options && options.find((o) => o.Key === rawValue)) || null));
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.value) {
            this.rawValue$.next(changes.value.currentValue);
        }
        if (changes.options) {
            this.options$.next(changes.options.currentValue);
        }
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(); };
SelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["erz-select"]], inputs: { options: "options", allowEmpty: "allowEmpty", value: "value" }, outputs: { valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 5, consts: [[1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngIf"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelectComponent_Template_select_ngModelChange_0_listener($event) { return ctx.valueChange.emit($event && $event.Key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectComponent_option_2_Template, 3, 4, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelectComponent_option_3_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " >\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.value$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allowEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2925:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SpinnerComponent {
    constructor() { }
    ngOnInit() { }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["erz-spinner"]], decls: 4, vars: 0, consts: [[1, "spinner-container"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".spinner-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]:not(.inline)   .spinner-container[_ngcontent-%COMP%] {\n  top: -131px;\n  min-height: 200px;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n}\n[_nghost-%COMP%]:not(.inline)   .spinner-border[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7QUFDSiIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXItY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgOmhvc3Q6bm90KC5pbmxpbmUpICYge1xyXG4gICAgdG9wOiAtMTMxcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zcGlubmVyLWJvcmRlciB7XHJcbiAgd2lkdGg6IDRyZW07XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG5cclxuICA6aG9zdDpub3QoLmlubGluZSkgJiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6628:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/typeahead/typeahead.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeaheadComponent": () => (/* binding */ TypeaheadComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ 8684);
/* harmony import */ var _utils_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/filter */ 3978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 3935);









function TypeaheadComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TypeaheadComponent_button_8_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.modelChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function TypeaheadComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
const FETCH_DEBOUNCE_TIME = 300;
const MINIMAL_TERM_LENGTH = 3;
class TypeaheadComponent {
    constructor() {
        this.selectedItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.error = false;
        this.placeholder = 'shared.typeahead.default-placeholder';
        this.valueChange = this.selectedItem$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((item) => (item ? item.Key : null)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)());
        this.componentId = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])('erz-typeahead-');
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.search = (term$) => {
            return term$.pipe(processTerm(MINIMAL_TERM_LENGTH, FETCH_DEBOUNCE_TIME), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(this.fetchItems.bind(this)));
        };
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.value &&
            changes.value.currentValue &&
            changes.value.currentValue !== this.selectedItemId) {
            this.fetchItem(changes.value.currentValue).subscribe((item) => {
                this.modelChange(item);
            });
        }
    }
    format(item) {
        return item.Value;
    }
    modelChange(value) {
        this.selectedItem$.next(value instanceof Object ? value : null);
    }
    get selectedItemId() {
        return this.selectedItem$.value ? this.selectedItem$.value.Key : null;
    }
    fetchItems(term) {
        this.loading$.next(true);
        return this.typeaheadService
            .getTypeaheadItems(term, this.additionalHttpParams)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.loading$.next(false)));
    }
    fetchItem(id) {
        this.loading$.next(true);
        return this.typeaheadService
            .getTypeaheadItemById(id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.loading$.next(false)));
    }
}
TypeaheadComponent.ɵfac = function TypeaheadComponent_Factory(t) { return new (t || TypeaheadComponent)(); };
TypeaheadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TypeaheadComponent, selectors: [["erz-typeahead"]], inputs: { error: "error", typeaheadService: "typeaheadService", placeholder: "placeholder", value: "value", additionalHttpParams: "additionalHttpParams" }, outputs: { valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 11, vars: 20, consts: [[1, "input-group"], [1, "input-group-text", 3, "id"], [1, "material-icons"], ["type", "text", 1, "form-control", 3, "ngbTypeahead", "inputFormatter", "resultFormatter", "ngModel", "ngModelChange"], ["class", "btn btn-link text-decoration-none", "type", "button", 3, "click", 4, "ngIf"], ["class", "spinner-container", 4, "ngIf"], ["type", "button", 1, "btn", "btn-link", "text-decoration-none", 3, "click"], [1, "spinner-container"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "visually-hidden"]], template: function TypeaheadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1)(2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TypeaheadComponent_Template_input_ngModelChange_4_listener($event) { return ctx.modelChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TypeaheadComponent_button_8_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TypeaheadComponent_div_9_Template, 4, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.componentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbTypeahead", ctx.search)("inputFormatter", ctx.format)("resultFormatter", ctx.format)("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 16, ctx.selectedItem$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 12, ctx.placeholder))("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 14, ctx.placeholder))("aria-describedby", ctx.componentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 18, ctx.loading$));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTypeahead, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: ["[_ngcontent-%COMP%]:root {\n  --stellvertretung-primary: #005189;\n  --stellvertretung-primary-hover: #004272;\n  --stellvertretung-secondary: #8a8a8a;\n  --stellvertretung-secondary-hover: #747474;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n.spinner-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 1.125rem;\n  display: flex;\n  align-items: center;\n  z-index: 1001;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\ninput[_ngcontent-%COMP%] {\n  padding-right: 2.5em;\n}\nbutton[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  z-index: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib290c3RyYXAtdmFyaWFibGVzLnNjc3MiLCJ0eXBlYWhlYWQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7O0VBQUE7QUF3Q0E7RUFDSSxrQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtBQ3RDSjtBRGtEQTs7RUFBQTtBQ3hEQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQVlGO0FBVEE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFZRjtBQVZBO0VBQ0UsY0NIUztBRGdCWDtBQVZBO0VBQ0Usb0JBQUE7QUFhRjtBQVZBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQWFGIiwiZmlsZSI6InR5cGVhaGVhZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XHJcblxyXG4vKipcclxuICogQm9vdHN0cmFwIHZhcmlhYmxlcyBvdmVycmlkZXNcclxuICovXHJcblxyXG4vLyBkaXNhYmxlIHJlc3BvbnNpemUgZm9udCBzaXplc1xyXG4kZW5hYmxlLXJmczogZmFsc2U7XHJcblxyXG4vLyBjb250YWluZXIgcGFkZGluZ1xyXG4kY29udGFpbmVyLXBhZGRpbmcteDogMS41cmVtO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRib2R5LWJnOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiRib2R5LWNvbG9yOiByZ2IoOTYsIDk2LCA5Nik7XHJcbiR5ZWxsb3c6IHJnYigyNTUsIDE2OCwgMjApO1xyXG4kb3JhbmdlOiByZ2IoMjM5LCAxMjQsIDApO1xyXG4kYmx1ZTogcmdiKDY1LCAxMTgsIDE0NSk7XHJcbiR0ZWFsOiByZ2IoMTksIDY5LCA5Nyk7XHJcbiRncmF5OiByZ2IoMTM4LCAxMzgsIDEzOCk7XHJcbiRncmF5LWRhcms6IHJnYig1MSwgNTEsIDUxKTtcclxuXHJcbiRibHVlOiAjMDA1MTg5O1xyXG4kYmx1ZS1ob3ZlcjogIzAwNDI3MjtcclxuJGdyYXktaG92ZXI6IHJnYigxMTYsIDExNiwgMTE2KTtcclxuXHJcbiRwcmVzZW50LWNvbG9yOiAjMjhhNzQ1O1xyXG4kYWJzZW50LWNvbG9yOiAjZGMzNTQ1O1xyXG4kdW5hcHByb3ZlZC1jb2xvcjogJHllbGxvdztcclxuXHJcbi8vIEZvbnRcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtc2l6ZS1iYXNlOiAxLjVyZW07IC8vIFNlZSBhcHAvc2hhcmVkL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcclxuXHJcbi8vIFNwYWNpbmdcclxuJHNwYWNlcjogMS41cmVtOyAvLyBDb21wZW5zYXRlIGZvciB0aGUgYmFzZSBmb250XHJcblxyXG4vLyBCdXR0b25zXHJcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG46cm9vdCB7XHJcbiAgICAtLXN0ZWxsdmVydHJldHVuZy1wcmltYXJ5OiAjeyRibHVlfTtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXByaW1hcnktaG92ZXI6ICN7JGJsdWUtaG92ZXJ9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctc2Vjb25kYXJ5OiAjeyRncmF5fTtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXNlY29uZGFyeS1ob3ZlcjogI3skZ3JheS1ob3Zlcn07XHJcbn1cclxuXHJcbi8vIERyb3Bkb3duXHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAkZ3JheS0yMDA7XHJcblxyXG4vLyBUYWJsZXNcclxuJHRhYmxlLWhlYWQtYmc6ICR0YWJsZS1ib3JkZXItY29sb3I7XHJcbiR0YWJsZS1oZWFkLWNvbG9yOiAkZ3JheS02MDA7XHJcbiR0YWJsZS1ncm91cC1zZXBhcmF0b3ItY29sb3I6ICR0YWJsZS1ib3JkZXItY29sb3I7XHJcbiR0YWJsZS10aC1mb250LXdlaWdodDogbm9ybWFsO1xyXG5cclxuLyoqXHJcbiAqIEN1c3RvbSBWYXJpYWJsZXNcclxuICovXHJcblxyXG4vLyBJY29uc1xyXG4kZXJ6LWljb24tc2l6ZTogMi4ycmVtO1xyXG5cclxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4kZXJ6LWNvbnRhaW5lci1tYXgtd2lkdGg6IDk2MHB4O1xyXG4kZXJ6LWNvbnRhaW5lci1wYWRkaW5nLXg6ICRzcGFjZXI7XHJcbiRlcnotY29udGFpbmVyLXBhZGRpbmcteTogJHNwYWNlcjtcclxuJGVyei1wcmVzZW5jZS1jb250cm9sLWVudHJ5LW1pbi13aWR0aDogNDAwcHg7XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9ib290c3RyYXAtdmFyaWFibGVzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc3Bpbm5lci1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwLjc1ICogJHNwYWNlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogJHppbmRleC1kcm9wZG93biArIDE7XHJcbn1cclxuLnNwaW5uZXItYm9yZGVyIHtcclxuICBjb2xvcjogJGdyYXktNjAwO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgcGFkZGluZy1yaWdodDogMi41ZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuIiwiLy8gVmFyaWFibGVzXG4vL1xuLy8gVmFyaWFibGVzIHNob3VsZCBmb2xsb3cgdGhlIGAkY29tcG9uZW50LXN0YXRlLXByb3BlcnR5LXNpemVgIGZvcm11bGEgZm9yXG4vLyBjb25zaXN0ZW50IG5hbWluZy4gRXg6ICRuYXYtbGluay1kaXNhYmxlZC1jb2xvciBhbmQgJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14cy5cblxuLy8gQ29sb3Igc3lzdGVtXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBncmF5LWNvbG9yLXZhcmlhYmxlc1xuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk1MDU3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBncmF5LWNvbG9yLXZhcmlhYmxlc1xuXG4vLyBmdXN2LWRpc2FibGVcbi8vIHNjc3MtZG9jcy1zdGFydCBncmF5LWNvbG9ycy1tYXBcbiRncmF5czogKFxuICBcIjEwMFwiOiAkZ3JheS0xMDAsXG4gIFwiMjAwXCI6ICRncmF5LTIwMCxcbiAgXCIzMDBcIjogJGdyYXktMzAwLFxuICBcIjQwMFwiOiAkZ3JheS00MDAsXG4gIFwiNTAwXCI6ICRncmF5LTUwMCxcbiAgXCI2MDBcIjogJGdyYXktNjAwLFxuICBcIjcwMFwiOiAkZ3JheS03MDAsXG4gIFwiODAwXCI6ICRncmF5LTgwMCxcbiAgXCI5MDBcIjogJGdyYXktOTAwXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBncmF5LWNvbG9ycy1tYXBcbi8vIGZ1c3YtZW5hYmxlXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBjb2xvci12YXJpYWJsZXNcbiRibHVlOiAgICAjMGQ2ZWZkICFkZWZhdWx0O1xuJGluZGlnbzogICM2NjEwZjIgIWRlZmF1bHQ7XG4kcHVycGxlOiAgIzZmNDJjMSAhZGVmYXVsdDtcbiRwaW5rOiAgICAjZDYzMzg0ICFkZWZhdWx0O1xuJHJlZDogICAgICNkYzM1NDUgIWRlZmF1bHQ7XG4kb3JhbmdlOiAgI2ZkN2UxNCAhZGVmYXVsdDtcbiR5ZWxsb3c6ICAjZmZjMTA3ICFkZWZhdWx0O1xuJGdyZWVuOiAgICMxOTg3NTQgIWRlZmF1bHQ7XG4kdGVhbDogICAgIzIwYzk5NyAhZGVmYXVsdDtcbiRjeWFuOiAgICAjMGRjYWYwICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBjb2xvci12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNvbG9ycy1tYXBcbiRjb2xvcnM6IChcbiAgXCJibHVlXCI6ICAgICAgICRibHVlLFxuICBcImluZGlnb1wiOiAgICAgJGluZGlnbyxcbiAgXCJwdXJwbGVcIjogICAgICRwdXJwbGUsXG4gIFwicGlua1wiOiAgICAgICAkcGluayxcbiAgXCJyZWRcIjogICAgICAgICRyZWQsXG4gIFwib3JhbmdlXCI6ICAgICAkb3JhbmdlLFxuICBcInllbGxvd1wiOiAgICAgJHllbGxvdyxcbiAgXCJncmVlblwiOiAgICAgICRncmVlbixcbiAgXCJ0ZWFsXCI6ICAgICAgICR0ZWFsLFxuICBcImN5YW5cIjogICAgICAgJGN5YW4sXG4gIFwid2hpdGVcIjogICAgICAkd2hpdGUsXG4gIFwiZ3JheVwiOiAgICAgICAkZ3JheS02MDAsXG4gIFwiZ3JheS1kYXJrXCI6ICAkZ3JheS04MDBcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGNvbG9ycy1tYXBcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRoZW1lLWNvbG9yLXZhcmlhYmxlc1xuJHByaW1hcnk6ICAgICAgICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJGN5YW4gIWRlZmF1bHQ7XG4kd2FybmluZzogICAgICAgJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAgICAkcmVkICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRoZW1lLWNvbG9yLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdGhlbWUtY29sb3JzLW1hcFxuJHRoZW1lLWNvbG9yczogKFxuICBcInByaW1hcnlcIjogICAgJHByaW1hcnksXG4gIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LFxuICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXG4gIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcbiAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxuICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcbiAgXCJsaWdodFwiOiAgICAgICRsaWdodCxcbiAgXCJkYXJrXCI6ICAgICAgICRkYXJrXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0aGVtZS1jb2xvcnMtbWFwXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0aGVtZS1jb2xvcnMtcmdiXG4kdGhlbWUtY29sb3JzLXJnYjogbWFwLWxvb3AoJHRoZW1lLWNvbG9ycywgdG8tcmdiLCBcIiR2YWx1ZVwiKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdGhlbWUtY29sb3JzLXJnYlxuXG4vLyBUaGUgY29udHJhc3QgcmF0aW8gdG8gcmVhY2ggYWdhaW5zdCB3aGl0ZSwgdG8gZGV0ZXJtaW5lIGlmIGNvbG9yIGNoYW5nZXMgZnJvbSBcImxpZ2h0XCIgdG8gXCJkYXJrXCIuIEFjY2VwdGFibGUgdmFsdWVzIGZvciBXQ0FHIDIuMCBhcmUgMywgNC41IGFuZCA3LlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI3Zpc3VhbC1hdWRpby1jb250cmFzdC1jb250cmFzdFxuJG1pbi1jb250cmFzdC1yYXRpbzogICA0LjUgIWRlZmF1bHQ7XG5cbi8vIEN1c3RvbWl6ZSB0aGUgbGlnaHQgYW5kIGRhcmsgdGV4dCBjb2xvcnMgZm9yIHVzZSBpbiBvdXIgY29sb3IgY29udHJhc3QgZnVuY3Rpb24uXG4kY29sb3ItY29udHJhc3QtZGFyazogICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kY29sb3ItY29udHJhc3QtbGlnaHQ6ICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbi8vIGZ1c3YtZGlzYWJsZVxuJGJsdWUtMTAwOiB0aW50LWNvbG9yKCRibHVlLCA4MCUpICFkZWZhdWx0O1xuJGJsdWUtMjAwOiB0aW50LWNvbG9yKCRibHVlLCA2MCUpICFkZWZhdWx0O1xuJGJsdWUtMzAwOiB0aW50LWNvbG9yKCRibHVlLCA0MCUpICFkZWZhdWx0O1xuJGJsdWUtNDAwOiB0aW50LWNvbG9yKCRibHVlLCAyMCUpICFkZWZhdWx0O1xuJGJsdWUtNTAwOiAkYmx1ZSAhZGVmYXVsdDtcbiRibHVlLTYwMDogc2hhZGUtY29sb3IoJGJsdWUsIDIwJSkgIWRlZmF1bHQ7XG4kYmx1ZS03MDA6IHNoYWRlLWNvbG9yKCRibHVlLCA0MCUpICFkZWZhdWx0O1xuJGJsdWUtODAwOiBzaGFkZS1jb2xvcigkYmx1ZSwgNjAlKSAhZGVmYXVsdDtcbiRibHVlLTkwMDogc2hhZGUtY29sb3IoJGJsdWUsIDgwJSkgIWRlZmF1bHQ7XG5cbiRpbmRpZ28tMTAwOiB0aW50LWNvbG9yKCRpbmRpZ28sIDgwJSkgIWRlZmF1bHQ7XG4kaW5kaWdvLTIwMDogdGludC1jb2xvcigkaW5kaWdvLCA2MCUpICFkZWZhdWx0O1xuJGluZGlnby0zMDA6IHRpbnQtY29sb3IoJGluZGlnbywgNDAlKSAhZGVmYXVsdDtcbiRpbmRpZ28tNDAwOiB0aW50LWNvbG9yKCRpbmRpZ28sIDIwJSkgIWRlZmF1bHQ7XG4kaW5kaWdvLTUwMDogJGluZGlnbyAhZGVmYXVsdDtcbiRpbmRpZ28tNjAwOiBzaGFkZS1jb2xvcigkaW5kaWdvLCAyMCUpICFkZWZhdWx0O1xuJGluZGlnby03MDA6IHNoYWRlLWNvbG9yKCRpbmRpZ28sIDQwJSkgIWRlZmF1bHQ7XG4kaW5kaWdvLTgwMDogc2hhZGUtY29sb3IoJGluZGlnbywgNjAlKSAhZGVmYXVsdDtcbiRpbmRpZ28tOTAwOiBzaGFkZS1jb2xvcigkaW5kaWdvLCA4MCUpICFkZWZhdWx0O1xuXG4kcHVycGxlLTEwMDogdGludC1jb2xvcigkcHVycGxlLCA4MCUpICFkZWZhdWx0O1xuJHB1cnBsZS0yMDA6IHRpbnQtY29sb3IoJHB1cnBsZSwgNjAlKSAhZGVmYXVsdDtcbiRwdXJwbGUtMzAwOiB0aW50LWNvbG9yKCRwdXJwbGUsIDQwJSkgIWRlZmF1bHQ7XG4kcHVycGxlLTQwMDogdGludC1jb2xvcigkcHVycGxlLCAyMCUpICFkZWZhdWx0O1xuJHB1cnBsZS01MDA6ICRwdXJwbGUgIWRlZmF1bHQ7XG4kcHVycGxlLTYwMDogc2hhZGUtY29sb3IoJHB1cnBsZSwgMjAlKSAhZGVmYXVsdDtcbiRwdXJwbGUtNzAwOiBzaGFkZS1jb2xvcigkcHVycGxlLCA0MCUpICFkZWZhdWx0O1xuJHB1cnBsZS04MDA6IHNoYWRlLWNvbG9yKCRwdXJwbGUsIDYwJSkgIWRlZmF1bHQ7XG4kcHVycGxlLTkwMDogc2hhZGUtY29sb3IoJHB1cnBsZSwgODAlKSAhZGVmYXVsdDtcblxuJHBpbmstMTAwOiB0aW50LWNvbG9yKCRwaW5rLCA4MCUpICFkZWZhdWx0O1xuJHBpbmstMjAwOiB0aW50LWNvbG9yKCRwaW5rLCA2MCUpICFkZWZhdWx0O1xuJHBpbmstMzAwOiB0aW50LWNvbG9yKCRwaW5rLCA0MCUpICFkZWZhdWx0O1xuJHBpbmstNDAwOiB0aW50LWNvbG9yKCRwaW5rLCAyMCUpICFkZWZhdWx0O1xuJHBpbmstNTAwOiAkcGluayAhZGVmYXVsdDtcbiRwaW5rLTYwMDogc2hhZGUtY29sb3IoJHBpbmssIDIwJSkgIWRlZmF1bHQ7XG4kcGluay03MDA6IHNoYWRlLWNvbG9yKCRwaW5rLCA0MCUpICFkZWZhdWx0O1xuJHBpbmstODAwOiBzaGFkZS1jb2xvcigkcGluaywgNjAlKSAhZGVmYXVsdDtcbiRwaW5rLTkwMDogc2hhZGUtY29sb3IoJHBpbmssIDgwJSkgIWRlZmF1bHQ7XG5cbiRyZWQtMTAwOiB0aW50LWNvbG9yKCRyZWQsIDgwJSkgIWRlZmF1bHQ7XG4kcmVkLTIwMDogdGludC1jb2xvcigkcmVkLCA2MCUpICFkZWZhdWx0O1xuJHJlZC0zMDA6IHRpbnQtY29sb3IoJHJlZCwgNDAlKSAhZGVmYXVsdDtcbiRyZWQtNDAwOiB0aW50LWNvbG9yKCRyZWQsIDIwJSkgIWRlZmF1bHQ7XG4kcmVkLTUwMDogJHJlZCAhZGVmYXVsdDtcbiRyZWQtNjAwOiBzaGFkZS1jb2xvcigkcmVkLCAyMCUpICFkZWZhdWx0O1xuJHJlZC03MDA6IHNoYWRlLWNvbG9yKCRyZWQsIDQwJSkgIWRlZmF1bHQ7XG4kcmVkLTgwMDogc2hhZGUtY29sb3IoJHJlZCwgNjAlKSAhZGVmYXVsdDtcbiRyZWQtOTAwOiBzaGFkZS1jb2xvcigkcmVkLCA4MCUpICFkZWZhdWx0O1xuXG4kb3JhbmdlLTEwMDogdGludC1jb2xvcigkb3JhbmdlLCA4MCUpICFkZWZhdWx0O1xuJG9yYW5nZS0yMDA6IHRpbnQtY29sb3IoJG9yYW5nZSwgNjAlKSAhZGVmYXVsdDtcbiRvcmFuZ2UtMzAwOiB0aW50LWNvbG9yKCRvcmFuZ2UsIDQwJSkgIWRlZmF1bHQ7XG4kb3JhbmdlLTQwMDogdGludC1jb2xvcigkb3JhbmdlLCAyMCUpICFkZWZhdWx0O1xuJG9yYW5nZS01MDA6ICRvcmFuZ2UgIWRlZmF1bHQ7XG4kb3JhbmdlLTYwMDogc2hhZGUtY29sb3IoJG9yYW5nZSwgMjAlKSAhZGVmYXVsdDtcbiRvcmFuZ2UtNzAwOiBzaGFkZS1jb2xvcigkb3JhbmdlLCA0MCUpICFkZWZhdWx0O1xuJG9yYW5nZS04MDA6IHNoYWRlLWNvbG9yKCRvcmFuZ2UsIDYwJSkgIWRlZmF1bHQ7XG4kb3JhbmdlLTkwMDogc2hhZGUtY29sb3IoJG9yYW5nZSwgODAlKSAhZGVmYXVsdDtcblxuJHllbGxvdy0xMDA6IHRpbnQtY29sb3IoJHllbGxvdywgODAlKSAhZGVmYXVsdDtcbiR5ZWxsb3ctMjAwOiB0aW50LWNvbG9yKCR5ZWxsb3csIDYwJSkgIWRlZmF1bHQ7XG4keWVsbG93LTMwMDogdGludC1jb2xvcigkeWVsbG93LCA0MCUpICFkZWZhdWx0O1xuJHllbGxvdy00MDA6IHRpbnQtY29sb3IoJHllbGxvdywgMjAlKSAhZGVmYXVsdDtcbiR5ZWxsb3ctNTAwOiAkeWVsbG93ICFkZWZhdWx0O1xuJHllbGxvdy02MDA6IHNoYWRlLWNvbG9yKCR5ZWxsb3csIDIwJSkgIWRlZmF1bHQ7XG4keWVsbG93LTcwMDogc2hhZGUtY29sb3IoJHllbGxvdywgNDAlKSAhZGVmYXVsdDtcbiR5ZWxsb3ctODAwOiBzaGFkZS1jb2xvcigkeWVsbG93LCA2MCUpICFkZWZhdWx0O1xuJHllbGxvdy05MDA6IHNoYWRlLWNvbG9yKCR5ZWxsb3csIDgwJSkgIWRlZmF1bHQ7XG5cbiRncmVlbi0xMDA6IHRpbnQtY29sb3IoJGdyZWVuLCA4MCUpICFkZWZhdWx0O1xuJGdyZWVuLTIwMDogdGludC1jb2xvcigkZ3JlZW4sIDYwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tMzAwOiB0aW50LWNvbG9yKCRncmVlbiwgNDAlKSAhZGVmYXVsdDtcbiRncmVlbi00MDA6IHRpbnQtY29sb3IoJGdyZWVuLCAyMCUpICFkZWZhdWx0O1xuJGdyZWVuLTUwMDogJGdyZWVuICFkZWZhdWx0O1xuJGdyZWVuLTYwMDogc2hhZGUtY29sb3IoJGdyZWVuLCAyMCUpICFkZWZhdWx0O1xuJGdyZWVuLTcwMDogc2hhZGUtY29sb3IoJGdyZWVuLCA0MCUpICFkZWZhdWx0O1xuJGdyZWVuLTgwMDogc2hhZGUtY29sb3IoJGdyZWVuLCA2MCUpICFkZWZhdWx0O1xuJGdyZWVuLTkwMDogc2hhZGUtY29sb3IoJGdyZWVuLCA4MCUpICFkZWZhdWx0O1xuXG4kdGVhbC0xMDA6IHRpbnQtY29sb3IoJHRlYWwsIDgwJSkgIWRlZmF1bHQ7XG4kdGVhbC0yMDA6IHRpbnQtY29sb3IoJHRlYWwsIDYwJSkgIWRlZmF1bHQ7XG4kdGVhbC0zMDA6IHRpbnQtY29sb3IoJHRlYWwsIDQwJSkgIWRlZmF1bHQ7XG4kdGVhbC00MDA6IHRpbnQtY29sb3IoJHRlYWwsIDIwJSkgIWRlZmF1bHQ7XG4kdGVhbC01MDA6ICR0ZWFsICFkZWZhdWx0O1xuJHRlYWwtNjAwOiBzaGFkZS1jb2xvcigkdGVhbCwgMjAlKSAhZGVmYXVsdDtcbiR0ZWFsLTcwMDogc2hhZGUtY29sb3IoJHRlYWwsIDQwJSkgIWRlZmF1bHQ7XG4kdGVhbC04MDA6IHNoYWRlLWNvbG9yKCR0ZWFsLCA2MCUpICFkZWZhdWx0O1xuJHRlYWwtOTAwOiBzaGFkZS1jb2xvcigkdGVhbCwgODAlKSAhZGVmYXVsdDtcblxuJGN5YW4tMTAwOiB0aW50LWNvbG9yKCRjeWFuLCA4MCUpICFkZWZhdWx0O1xuJGN5YW4tMjAwOiB0aW50LWNvbG9yKCRjeWFuLCA2MCUpICFkZWZhdWx0O1xuJGN5YW4tMzAwOiB0aW50LWNvbG9yKCRjeWFuLCA0MCUpICFkZWZhdWx0O1xuJGN5YW4tNDAwOiB0aW50LWNvbG9yKCRjeWFuLCAyMCUpICFkZWZhdWx0O1xuJGN5YW4tNTAwOiAkY3lhbiAhZGVmYXVsdDtcbiRjeWFuLTYwMDogc2hhZGUtY29sb3IoJGN5YW4sIDIwJSkgIWRlZmF1bHQ7XG4kY3lhbi03MDA6IHNoYWRlLWNvbG9yKCRjeWFuLCA0MCUpICFkZWZhdWx0O1xuJGN5YW4tODAwOiBzaGFkZS1jb2xvcigkY3lhbiwgNjAlKSAhZGVmYXVsdDtcbiRjeWFuLTkwMDogc2hhZGUtY29sb3IoJGN5YW4sIDgwJSkgIWRlZmF1bHQ7XG5cbiRibHVlczogKFxuICBcImJsdWUtMTAwXCI6ICRibHVlLTEwMCxcbiAgXCJibHVlLTIwMFwiOiAkYmx1ZS0yMDAsXG4gIFwiYmx1ZS0zMDBcIjogJGJsdWUtMzAwLFxuICBcImJsdWUtNDAwXCI6ICRibHVlLTQwMCxcbiAgXCJibHVlLTUwMFwiOiAkYmx1ZS01MDAsXG4gIFwiYmx1ZS02MDBcIjogJGJsdWUtNjAwLFxuICBcImJsdWUtNzAwXCI6ICRibHVlLTcwMCxcbiAgXCJibHVlLTgwMFwiOiAkYmx1ZS04MDAsXG4gIFwiYmx1ZS05MDBcIjogJGJsdWUtOTAwXG4pICFkZWZhdWx0O1xuXG4kaW5kaWdvczogKFxuICBcImluZGlnby0xMDBcIjogJGluZGlnby0xMDAsXG4gIFwiaW5kaWdvLTIwMFwiOiAkaW5kaWdvLTIwMCxcbiAgXCJpbmRpZ28tMzAwXCI6ICRpbmRpZ28tMzAwLFxuICBcImluZGlnby00MDBcIjogJGluZGlnby00MDAsXG4gIFwiaW5kaWdvLTUwMFwiOiAkaW5kaWdvLTUwMCxcbiAgXCJpbmRpZ28tNjAwXCI6ICRpbmRpZ28tNjAwLFxuICBcImluZGlnby03MDBcIjogJGluZGlnby03MDAsXG4gIFwiaW5kaWdvLTgwMFwiOiAkaW5kaWdvLTgwMCxcbiAgXCJpbmRpZ28tOTAwXCI6ICRpbmRpZ28tOTAwXG4pICFkZWZhdWx0O1xuXG4kcHVycGxlczogKFxuICBcInB1cnBsZS0xMDBcIjogJHB1cnBsZS0yMDAsXG4gIFwicHVycGxlLTIwMFwiOiAkcHVycGxlLTEwMCxcbiAgXCJwdXJwbGUtMzAwXCI6ICRwdXJwbGUtMzAwLFxuICBcInB1cnBsZS00MDBcIjogJHB1cnBsZS00MDAsXG4gIFwicHVycGxlLTUwMFwiOiAkcHVycGxlLTUwMCxcbiAgXCJwdXJwbGUtNjAwXCI6ICRwdXJwbGUtNjAwLFxuICBcInB1cnBsZS03MDBcIjogJHB1cnBsZS03MDAsXG4gIFwicHVycGxlLTgwMFwiOiAkcHVycGxlLTgwMCxcbiAgXCJwdXJwbGUtOTAwXCI6ICRwdXJwbGUtOTAwXG4pICFkZWZhdWx0O1xuXG4kcGlua3M6IChcbiAgXCJwaW5rLTEwMFwiOiAkcGluay0xMDAsXG4gIFwicGluay0yMDBcIjogJHBpbmstMjAwLFxuICBcInBpbmstMzAwXCI6ICRwaW5rLTMwMCxcbiAgXCJwaW5rLTQwMFwiOiAkcGluay00MDAsXG4gIFwicGluay01MDBcIjogJHBpbmstNTAwLFxuICBcInBpbmstNjAwXCI6ICRwaW5rLTYwMCxcbiAgXCJwaW5rLTcwMFwiOiAkcGluay03MDAsXG4gIFwicGluay04MDBcIjogJHBpbmstODAwLFxuICBcInBpbmstOTAwXCI6ICRwaW5rLTkwMFxuKSAhZGVmYXVsdDtcblxuJHJlZHM6IChcbiAgXCJyZWQtMTAwXCI6ICRyZWQtMTAwLFxuICBcInJlZC0yMDBcIjogJHJlZC0yMDAsXG4gIFwicmVkLTMwMFwiOiAkcmVkLTMwMCxcbiAgXCJyZWQtNDAwXCI6ICRyZWQtNDAwLFxuICBcInJlZC01MDBcIjogJHJlZC01MDAsXG4gIFwicmVkLTYwMFwiOiAkcmVkLTYwMCxcbiAgXCJyZWQtNzAwXCI6ICRyZWQtNzAwLFxuICBcInJlZC04MDBcIjogJHJlZC04MDAsXG4gIFwicmVkLTkwMFwiOiAkcmVkLTkwMFxuKSAhZGVmYXVsdDtcblxuJG9yYW5nZXM6IChcbiAgXCJvcmFuZ2UtMTAwXCI6ICRvcmFuZ2UtMTAwLFxuICBcIm9yYW5nZS0yMDBcIjogJG9yYW5nZS0yMDAsXG4gIFwib3JhbmdlLTMwMFwiOiAkb3JhbmdlLTMwMCxcbiAgXCJvcmFuZ2UtNDAwXCI6ICRvcmFuZ2UtNDAwLFxuICBcIm9yYW5nZS01MDBcIjogJG9yYW5nZS01MDAsXG4gIFwib3JhbmdlLTYwMFwiOiAkb3JhbmdlLTYwMCxcbiAgXCJvcmFuZ2UtNzAwXCI6ICRvcmFuZ2UtNzAwLFxuICBcIm9yYW5nZS04MDBcIjogJG9yYW5nZS04MDAsXG4gIFwib3JhbmdlLTkwMFwiOiAkb3JhbmdlLTkwMFxuKSAhZGVmYXVsdDtcblxuJHllbGxvd3M6IChcbiAgXCJ5ZWxsb3ctMTAwXCI6ICR5ZWxsb3ctMTAwLFxuICBcInllbGxvdy0yMDBcIjogJHllbGxvdy0yMDAsXG4gIFwieWVsbG93LTMwMFwiOiAkeWVsbG93LTMwMCxcbiAgXCJ5ZWxsb3ctNDAwXCI6ICR5ZWxsb3ctNDAwLFxuICBcInllbGxvdy01MDBcIjogJHllbGxvdy01MDAsXG4gIFwieWVsbG93LTYwMFwiOiAkeWVsbG93LTYwMCxcbiAgXCJ5ZWxsb3ctNzAwXCI6ICR5ZWxsb3ctNzAwLFxuICBcInllbGxvdy04MDBcIjogJHllbGxvdy04MDAsXG4gIFwieWVsbG93LTkwMFwiOiAkeWVsbG93LTkwMFxuKSAhZGVmYXVsdDtcblxuJGdyZWVuczogKFxuICBcImdyZWVuLTEwMFwiOiAkZ3JlZW4tMTAwLFxuICBcImdyZWVuLTIwMFwiOiAkZ3JlZW4tMjAwLFxuICBcImdyZWVuLTMwMFwiOiAkZ3JlZW4tMzAwLFxuICBcImdyZWVuLTQwMFwiOiAkZ3JlZW4tNDAwLFxuICBcImdyZWVuLTUwMFwiOiAkZ3JlZW4tNTAwLFxuICBcImdyZWVuLTYwMFwiOiAkZ3JlZW4tNjAwLFxuICBcImdyZWVuLTcwMFwiOiAkZ3JlZW4tNzAwLFxuICBcImdyZWVuLTgwMFwiOiAkZ3JlZW4tODAwLFxuICBcImdyZWVuLTkwMFwiOiAkZ3JlZW4tOTAwXG4pICFkZWZhdWx0O1xuXG4kdGVhbHM6IChcbiAgXCJ0ZWFsLTEwMFwiOiAkdGVhbC0xMDAsXG4gIFwidGVhbC0yMDBcIjogJHRlYWwtMjAwLFxuICBcInRlYWwtMzAwXCI6ICR0ZWFsLTMwMCxcbiAgXCJ0ZWFsLTQwMFwiOiAkdGVhbC00MDAsXG4gIFwidGVhbC01MDBcIjogJHRlYWwtNTAwLFxuICBcInRlYWwtNjAwXCI6ICR0ZWFsLTYwMCxcbiAgXCJ0ZWFsLTcwMFwiOiAkdGVhbC03MDAsXG4gIFwidGVhbC04MDBcIjogJHRlYWwtODAwLFxuICBcInRlYWwtOTAwXCI6ICR0ZWFsLTkwMFxuKSAhZGVmYXVsdDtcblxuJGN5YW5zOiAoXG4gIFwiY3lhbi0xMDBcIjogJGN5YW4tMTAwLFxuICBcImN5YW4tMjAwXCI6ICRjeWFuLTIwMCxcbiAgXCJjeWFuLTMwMFwiOiAkY3lhbi0zMDAsXG4gIFwiY3lhbi00MDBcIjogJGN5YW4tNDAwLFxuICBcImN5YW4tNTAwXCI6ICRjeWFuLTUwMCxcbiAgXCJjeWFuLTYwMFwiOiAkY3lhbi02MDAsXG4gIFwiY3lhbi03MDBcIjogJGN5YW4tNzAwLFxuICBcImN5YW4tODAwXCI6ICRjeWFuLTgwMCxcbiAgXCJjeWFuLTkwMFwiOiAkY3lhbi05MDBcbikgIWRlZmF1bHQ7XG4vLyBmdXN2LWVuYWJsZVxuXG4vLyBDaGFyYWN0ZXJzIHdoaWNoIGFyZSBlc2NhcGVkIGJ5IHRoZSBlc2NhcGUtc3ZnIGZ1bmN0aW9uXG4kZXNjYXBlZC1jaGFyYWN0ZXJzOiAoXG4gIChcIjxcIiwgXCIlM2NcIiksXG4gIChcIj5cIiwgXCIlM2VcIiksXG4gIChcIiNcIiwgXCIlMjNcIiksXG4gIChcIihcIiwgXCIlMjhcIiksXG4gIChcIilcIiwgXCIlMjlcIiksXG4pICFkZWZhdWx0O1xuXG4vLyBPcHRpb25zXG4vL1xuLy8gUXVpY2tseSBtb2RpZnkgZ2xvYmFsIHN0eWxpbmcgYnkgZW5hYmxpbmcgb3IgZGlzYWJsaW5nIG9wdGlvbmFsIGZlYXR1cmVzLlxuXG4kZW5hYmxlLWNhcmV0OiAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc2hhZG93czogICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmFkaWVudHM6ICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yZWR1Y2VkLW1vdGlvbjogICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc21vb3RoLXNjcm9sbDogICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyaWQtY2xhc3NlczogICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1jc3NncmlkOiAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWJ1dHRvbi1wb2ludGVyczogICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yZnM6ICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtdmFsaWRhdGlvbi1pY29uczogICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLW5lZ2F0aXZlLW1hcmdpbnM6ICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtZGVwcmVjYXRpb24tbWVzc2FnZXM6IHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWltcG9ydGFudC11dGlsaXRpZXM6ICB0cnVlICFkZWZhdWx0O1xuXG4vLyBQcmVmaXggZm9yIDpyb290IENTUyB2YXJpYWJsZXNcblxuJHZhcmlhYmxlLXByZWZpeDogICAgICAgICAgICAgYnMtICFkZWZhdWx0O1xuXG4vLyBHcmFkaWVudFxuLy9cbi8vIFRoZSBncmFkaWVudCB3aGljaCBpcyBhZGRlZCB0byBjb21wb25lbnRzIGlmIGAkZW5hYmxlLWdyYWRpZW50c2AgaXMgYHRydWVgXG4vLyBUaGlzIGdyYWRpZW50IGlzIGFsc28gYWRkZWQgdG8gZWxlbWVudHMgd2l0aCBgLmJnLWdyYWRpZW50YFxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHZhcmlhYmxlLWdyYWRpZW50XG4kZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoJHdoaXRlLCAuMTUpLCByZ2JhKCR3aGl0ZSwgMCkpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB2YXJpYWJsZS1ncmFkaWVudFxuXG4vLyBTcGFjaW5nXG4vL1xuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHNwYWNlci12YXJpYWJsZXMtbWFwc1xuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcbiRzcGFjZXJzOiAoXG4gIDA6IDAsXG4gIDE6ICRzcGFjZXIgKiAuMjUsXG4gIDI6ICRzcGFjZXIgKiAuNSxcbiAgMzogJHNwYWNlcixcbiAgNDogJHNwYWNlciAqIDEuNSxcbiAgNTogJHNwYWNlciAqIDMsXG4pICFkZWZhdWx0O1xuXG4kbmVnYXRpdmUtc3BhY2VyczogaWYoJGVuYWJsZS1uZWdhdGl2ZS1tYXJnaW5zLCBuZWdhdGl2aWZ5LW1hcCgkc3BhY2VycyksIG51bGwpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBzcGFjZXItdmFyaWFibGVzLW1hcHNcblxuLy8gUG9zaXRpb25cbi8vXG4vLyBEZWZpbmUgdGhlIGVkZ2UgcG9zaXRpb25pbmcgYW5jaG9ycyBvZiB0aGUgcG9zaXRpb24gdXRpbGl0aWVzLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgcG9zaXRpb24tbWFwXG4kcG9zaXRpb24tdmFsdWVzOiAoXG4gIDA6IDAsXG4gIDUwOiA1MCUsXG4gIDEwMDogMTAwJVxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgcG9zaXRpb24tbWFwXG5cbi8vIEJvZHlcbi8vXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXG5cbiRib2R5LWJnOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJGJvZHktdGV4dC1hbGlnbjogICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbi8vIFV0aWxpdGllcyBtYXBzXG4vL1xuLy8gRXh0ZW5kcyB0aGUgZGVmYXVsdCBgJHRoZW1lLWNvbG9yc2AgbWFwcyB0byBoZWxwIGNyZWF0ZSBvdXIgdXRpbGl0aWVzLlxuXG4vLyBDb21lIHY2LCB3ZSdsbCBkZS1kdXBlIHRoZXNlIHZhcmlhYmxlcy4gVW50aWwgdGhlbiwgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIHdlIGtlZXAgdGhlbSB0byByZWFzc2lnbi5cbi8vIHNjc3MtZG9jcy1zdGFydCB1dGlsaXRpZXMtY29sb3JzXG4kdXRpbGl0aWVzLWNvbG9yczogJHRoZW1lLWNvbG9ycy1yZ2IgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHV0aWxpdGllcy1jb2xvcnNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHV0aWxpdGllcy10ZXh0LWNvbG9yc1xuJHV0aWxpdGllcy10ZXh0OiBtYXAtbWVyZ2UoXG4gICR1dGlsaXRpZXMtY29sb3JzLFxuICAoXG4gICAgXCJibGFja1wiOiB0by1yZ2IoJGJsYWNrKSxcbiAgICBcIndoaXRlXCI6IHRvLXJnYigkd2hpdGUpLFxuICAgIFwiYm9keVwiOiB0by1yZ2IoJGJvZHktY29sb3IpXG4gIClcbikgIWRlZmF1bHQ7XG4kdXRpbGl0aWVzLXRleHQtY29sb3JzOiBtYXAtbG9vcCgkdXRpbGl0aWVzLXRleHQsIHJnYmEtY3NzLXZhciwgXCIka2V5XCIsIFwidGV4dFwiKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdXRpbGl0aWVzLXRleHQtY29sb3JzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB1dGlsaXRpZXMtYmctY29sb3JzXG4kdXRpbGl0aWVzLWJnOiBtYXAtbWVyZ2UoXG4gICR1dGlsaXRpZXMtY29sb3JzLFxuICAoXG4gICAgXCJibGFja1wiOiB0by1yZ2IoJGJsYWNrKSxcbiAgICBcIndoaXRlXCI6IHRvLXJnYigkd2hpdGUpLFxuICAgIFwiYm9keVwiOiB0by1yZ2IoJGJvZHktYmcpXG4gIClcbikgIWRlZmF1bHQ7XG4kdXRpbGl0aWVzLWJnLWNvbG9yczogbWFwLWxvb3AoJHV0aWxpdGllcy1iZywgcmdiYS1jc3MtdmFyLCBcIiRrZXlcIiwgXCJiZ1wiKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdXRpbGl0aWVzLWJnLWNvbG9yc1xuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG4kbGluay1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmUgIWRlZmF1bHQ7XG4kbGluay1zaGFkZS1wZXJjZW50YWdlOiAgICAgICAgICAgICAgICAgICAyMCUgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBzaGlmdC1jb2xvcigkbGluay1jb2xvciwgJGxpbmstc2hhZGUtcGVyY2VudGFnZSkgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kc3RyZXRjaGVkLWxpbmstcHNldWRvLWVsZW1lbnQ6ICAgICAgICAgICBhZnRlciAhZGVmYXVsdDtcbiRzdHJldGNoZWQtbGluay16LWluZGV4OiAgICAgICAgICAgICAgICAgIDEgIWRlZmF1bHQ7XG5cbi8vIFBhcmFncmFwaHNcbi8vXG4vLyBTdHlsZSBwIGVsZW1lbnQuXG5cbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogICAxcmVtICFkZWZhdWx0O1xuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcbi8vXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGdyaWQtYnJlYWtwb2ludHNcbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4LFxuICB4eGw6IDE0MDBweFxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZ3JpZC1icmVha3BvaW50c1xuXG5AaW5jbHVkZSBfYXNzZXJ0LWFzY2VuZGluZygkZ3JpZC1icmVha3BvaW50cywgXCIkZ3JpZC1icmVha3BvaW50c1wiKTtcbkBpbmNsdWRlIF9hc3NlcnQtc3RhcnRzLWF0LXplcm8oJGdyaWQtYnJlYWtwb2ludHMsIFwiJGdyaWQtYnJlYWtwb2ludHNcIik7XG5cblxuLy8gR3JpZCBjb250YWluZXJzXG4vL1xuLy8gRGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGAuY29udGFpbmVyYCBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNvbnRhaW5lci1tYXgtd2lkdGhzXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgc206IDU0MHB4LFxuICBtZDogNzIwcHgsXG4gIGxnOiA5NjBweCxcbiAgeGw6IDExNDBweCxcbiAgeHhsOiAxMzIwcHhcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGNvbnRhaW5lci1tYXgtd2lkdGhzXG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRjb250YWluZXItbWF4LXdpZHRocywgXCIkY29udGFpbmVyLW1heC13aWR0aHNcIik7XG5cblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWNvbHVtbnM6ICAgICAgICAgICAgICAgIDEyICFkZWZhdWx0O1xuJGdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuJGdyaWQtcm93LWNvbHVtbnM6ICAgICAgICAgICAgNiAhZGVmYXVsdDtcblxuJGd1dHRlcnM6ICRzcGFjZXJzICFkZWZhdWx0O1xuXG4vLyBDb250YWluZXIgcGFkZGluZ1xuXG4kY29udGFpbmVyLXBhZGRpbmcteDogJGdyaWQtZ3V0dGVyLXdpZHRoICogLjUgIWRlZmF1bHQ7XG5cblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGJvcmRlci12YXJpYWJsZXNcbiRib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiRib3JkZXItd2lkdGhzOiAoXG4gIDE6IDFweCxcbiAgMjogMnB4LFxuICAzOiAzcHgsXG4gIDQ6IDRweCxcbiAgNTogNXB4XG4pICFkZWZhdWx0O1xuXG4kYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJvcmRlci12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGJvcmRlci1yYWRpdXMtdmFyaWFibGVzXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtcGlsbDogICAgICAgICAgNTByZW0gIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJvcmRlci1yYWRpdXMtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBib3gtc2hhZG93LXZhcmlhYmxlc1xuJGJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMTUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctc206ICAgICAgICAgICAgICAgMCAuMTI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1sZzogICAgICAgICAgICAgICAwIDFyZW0gM3JlbSByZ2JhKCRibGFjaywgLjE3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1pbnNldDogICAgICAgICAgICBpbnNldCAwIDFweCAycHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBib3gtc2hhZG93LXZhcmlhYmxlc1xuXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY29tcG9uZW50LWFjdGl2ZS1iZzogICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNhcmV0LXZhcmlhYmxlc1xuJGNhcmV0LXdpZHRoOiAgICAgICAgICAgICAgICAgLjNlbSAhZGVmYXVsdDtcbiRjYXJldC12ZXJ0aWNhbC1hbGlnbjogICAgICAgICRjYXJldC13aWR0aCAqIC44NSAhZGVmYXVsdDtcbiRjYXJldC1zcGFjaW5nOiAgICAgICAgICAgICAgICRjYXJldC13aWR0aCAqIC44NSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY2FyZXQtdmFyaWFibGVzXG5cbiR0cmFuc2l0aW9uLWJhc2U6ICAgICAgICAgICAgIGFsbCAuMnMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1mYWRlOiAgICAgICAgICAgICBvcGFjaXR5IC4xNXMgbGluZWFyICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNvbGxhcHNlLXRyYW5zaXRpb25cbiR0cmFuc2l0aW9uLWNvbGxhcHNlOiAgICAgICAgIGhlaWdodCAuMzVzIGVhc2UgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1jb2xsYXBzZS13aWR0aDogICB3aWR0aCAuMzVzIGVhc2UgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGNvbGxhcHNlLXRyYW5zaXRpb25cblxuLy8gc3R5bGVsaW50LWRpc2FibGUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG4vLyBzY3NzLWRvY3Mtc3RhcnQgYXNwZWN0LXJhdGlvc1xuJGFzcGVjdC1yYXRpb3M6IChcbiAgXCIxeDFcIjogMTAwJSxcbiAgXCI0eDNcIjogY2FsYygzIC8gNCAqIDEwMCUpLFxuICBcIjE2eDlcIjogY2FsYyg5IC8gMTYgKiAxMDAlKSxcbiAgXCIyMXg5XCI6IGNhbGMoOSAvIDIxICogMTAwJSlcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGFzcGVjdC1yYXRpb3Ncbi8vIHN0eWxlbGludC1lbmFibGUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG5cbi8vIFR5cG9ncmFwaHlcbi8vXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvbnQtdmFyaWFibGVzXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIFwiTGliZXJhdGlvbiBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgICAgIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuJGZvbnQtZmFtaWx5LWJhc2U6ICAgICAgICAgICAgdmFyKC0tI3skdmFyaWFibGUtcHJlZml4fWZvbnQtc2Fucy1zZXJpZikgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktY29kZTogICAgICAgICAgICB2YXIoLS0jeyR2YXJpYWJsZS1wcmVmaXh9Zm9udC1tb25vc3BhY2UpICFkZWZhdWx0O1xuXG4vLyAkZm9udC1zaXplLXJvb3QgYWZmZWN0cyB0aGUgdmFsdWUgb2YgYHJlbWAsIHdoaWNoIGlzIHVzZWQgZm9yIGFzIHdlbGwgZm9udCBzaXplcywgcGFkZGluZ3MsIGFuZCBtYXJnaW5zXG4vLyAkZm9udC1zaXplLWJhc2UgYWZmZWN0cyB0aGUgZm9udCBzaXplIG9mIHRoZSBib2R5IHRleHRcbiRmb250LXNpemUtcm9vdDogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC44NzUgIWRlZmF1bHQ7XG4kZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuXG4kZm9udC13ZWlnaHQtbGlnaHRlcjogICAgICAgICBsaWdodGVyICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogICAgICAgICAgNDAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGQ6ICAgICAgICAgICAgNzAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGRlcjogICAgICAgICAgYm9sZGVyICFkZWZhdWx0O1xuXG4kZm9udC13ZWlnaHQtYmFzZTogICAgICAgICAgICAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuXG4kbGluZS1oZWlnaHQtYmFzZTogICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAxLjI1ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgMiAhZGVmYXVsdDtcblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMi41ICFkZWZhdWx0O1xuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNzUgIWRlZmF1bHQ7XG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb250LXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9udC1zaXplc1xuJGZvbnQtc2l6ZXM6IChcbiAgMTogJGgxLWZvbnQtc2l6ZSxcbiAgMjogJGgyLWZvbnQtc2l6ZSxcbiAgMzogJGgzLWZvbnQtc2l6ZSxcbiAgNDogJGg0LWZvbnQtc2l6ZSxcbiAgNTogJGg1LWZvbnQtc2l6ZSxcbiAgNjogJGg2LWZvbnQtc2l6ZVxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9udC1zaXplc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgaGVhZGluZ3MtdmFyaWFibGVzXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogICAgICAkc3BhY2VyICogLjUgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6ICAgICAgICBudWxsICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtc3R5bGU6ICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogICAgICAgIDUwMCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogICAgICAgIDEuMiAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGhlYWRpbmdzLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZGlzcGxheS1oZWFkaW5nc1xuJGRpc3BsYXktZm9udC1zaXplczogKFxuICAxOiA1cmVtLFxuICAyOiA0LjVyZW0sXG4gIDM6IDRyZW0sXG4gIDQ6IDMuNXJlbSxcbiAgNTogM3JlbSxcbiAgNjogMi41cmVtXG4pICFkZWZhdWx0O1xuXG4kZGlzcGxheS1mb250LXdlaWdodDogMzAwICFkZWZhdWx0O1xuJGRpc3BsYXktbGluZS1oZWlnaHQ6ICRoZWFkaW5ncy1saW5lLWhlaWdodCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZGlzcGxheS1oZWFkaW5nc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdHlwZS12YXJpYWJsZXNcbiRsZWFkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kbGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgIC44NzVlbSAhZGVmYXVsdDtcblxuJHN1Yi1zdXAtZm9udC1zaXplOiAgICAgICAgICAgLjc1ZW0gIWRlZmF1bHQ7XG5cbiR0ZXh0LW11dGVkOiAgICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGluaXRpYWxpc20tZm9udC1zaXplOiAgICAgICAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtbWFyZ2luLXk6ICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLWZvbnQtc2l6ZTogICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1mb290ZXItY29sb3I6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1mb290ZXItZm9udC1zaXplOiAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuXG4kaHItbWFyZ2luLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGhyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgaW5oZXJpdCAhZGVmYXVsdDtcbiRoci1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kaHItb3BhY2l0eTogICAgICAgICAgICAgICAgICAuMjUgIWRlZmF1bHQ7XG5cbiRsZWdlbmQtbWFyZ2luLWJvdHRvbTogICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGxlZ2VuZC1mb250LXNpemU6ICAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuJGxlZ2VuZC1mb250LXdlaWdodDogICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJG1hcmstcGFkZGluZzogICAgICAgICAgICAgICAgLjJlbSAhZGVmYXVsdDtcblxuJGR0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRuZXN0ZWQta2JkLWZvbnQtd2VpZ2h0OiAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuXG4kbGlzdC1pbmxpbmUtcGFkZGluZzogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG1hcmstYmc6ICAgICAgICAgICAgICAgICAgICAgI2ZjZjhlMyAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdHlwZS12YXJpYWJsZXNcblxuXG4vLyBUYWJsZXNcbi8vXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0YWJsZS12YXJpYWJsZXNcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXktc206ICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXgtc206ICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1jZWxsLXZlcnRpY2FsLWFsaWduOiAgIHRvcCAhZGVmYXVsdDtcblxuJHRhYmxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtYmc6ICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kdGFibGUtdGgtZm9udC13ZWlnaHQ6ICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kdGFibGUtc3RyaXBlZC1jb2xvcjogICAgICAgICAkdGFibGUtY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtc3RyaXBlZC1iZy1mYWN0b3I6ICAgICAuMDUgIWRlZmF1bHQ7XG4kdGFibGUtc3RyaXBlZC1iZzogICAgICAgICAgICByZ2JhKCRibGFjaywgJHRhYmxlLXN0cmlwZWQtYmctZmFjdG9yKSAhZGVmYXVsdDtcblxuJHRhYmxlLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWFjdGl2ZS1iZy1mYWN0b3I6ICAgICAgLjEgIWRlZmF1bHQ7XG4kdGFibGUtYWN0aXZlLWJnOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgJHRhYmxlLWFjdGl2ZS1iZy1mYWN0b3IpICFkZWZhdWx0O1xuXG4kdGFibGUtaG92ZXItY29sb3I6ICAgICAgICAgICAkdGFibGUtY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtaG92ZXItYmctZmFjdG9yOiAgICAgICAuMDc1ICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssICR0YWJsZS1ob3Zlci1iZy1mYWN0b3IpICFkZWZhdWx0O1xuXG4kdGFibGUtYm9yZGVyLWZhY3RvcjogICAgICAgICAuMSAhZGVmYXVsdDtcbiR0YWJsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kdGFibGUtc3RyaXBlZC1vcmRlcjogICAgICAgICBvZGQgIWRlZmF1bHQ7XG5cbiR0YWJsZS1ncm91cC1zZXBhcmF0b3ItY29sb3I6IGN1cnJlbnRDb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWNhcHRpb24tY29sb3I6ICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiR0YWJsZS1iZy1zY2FsZTogICAgICAgICAgICAgIC04MCUgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRhYmxlLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdGFibGUtbG9vcFxuJHRhYmxlLXZhcmlhbnRzOiAoXG4gIFwicHJpbWFyeVwiOiAgICBzaGlmdC1jb2xvcigkcHJpbWFyeSwgJHRhYmxlLWJnLXNjYWxlKSxcbiAgXCJzZWNvbmRhcnlcIjogIHNoaWZ0LWNvbG9yKCRzZWNvbmRhcnksICR0YWJsZS1iZy1zY2FsZSksXG4gIFwic3VjY2Vzc1wiOiAgICBzaGlmdC1jb2xvcigkc3VjY2VzcywgJHRhYmxlLWJnLXNjYWxlKSxcbiAgXCJpbmZvXCI6ICAgICAgIHNoaWZ0LWNvbG9yKCRpbmZvLCAkdGFibGUtYmctc2NhbGUpLFxuICBcIndhcm5pbmdcIjogICAgc2hpZnQtY29sb3IoJHdhcm5pbmcsICR0YWJsZS1iZy1zY2FsZSksXG4gIFwiZGFuZ2VyXCI6ICAgICBzaGlmdC1jb2xvcigkZGFuZ2VyLCAkdGFibGUtYmctc2NhbGUpLFxuICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxuICBcImRhcmtcIjogICAgICAgJGRhcmssXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0YWJsZS1sb29wXG5cblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBpbnB1dC1idG4tdmFyaWFibGVzXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LWZhbWlseTogICAgICAgbnVsbCAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplOiAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6ICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtY29sb3Itb3BhY2l0eTogLjI1ICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogICAgICAgICByZ2JhKCRjb21wb25lbnQtYWN0aXZlLWJnLCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yLW9wYWNpdHkpICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1ibHVyOiAgICAgICAgICAwICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgICAwIDAgJGlucHV0LWJ0bi1mb2N1cy1ibHVyICRpbnB1dC1idG4tZm9jdXMtd2lkdGggJGlucHV0LWJ0bi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206ICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBpbnB1dC1idG4tdmFyaWFibGVzXG5cblxuLy8gQnV0dG9uc1xuLy9cbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYnRuLXZhcmlhYmxlc1xuJGJ0bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteDogICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRidG4tZm9udC1mYW1pbHk6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kYnRuLXdoaXRlLXNwYWNlOiAgICAgICAgICAgICBudWxsICFkZWZhdWx0OyAvLyBTZXQgdG8gYG5vd3JhcGAgdG8gcHJldmVudCB0ZXh0IHdyYXBwaW5nXG5cbiRidG4tcGFkZGluZy15LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcblxuJGJ0bi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteC1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplLWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuXG4kYnRuLWJvcmRlci13aWR0aDogICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRidG4tYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgkd2hpdGUsIC4xNSksIDAgMXB4IDFweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgLjY1ICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogICAgICAgaW5zZXQgMCAzcHggNXB4IHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcblxuJGJ0bi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7XG4kYnRuLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDtcbiRidG4tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuLy8gQWxsb3dzIGZvciBjdXN0b21pemluZyBidXR0b24gcmFkaXVzIGluZGVwZW5kZW50bHkgZnJvbSBnbG9iYWwgYm9yZGVyIHJhZGl1c1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuXG4kYnRuLXRyYW5zaXRpb246ICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRidG4taG92ZXItYmctc2hhZGUtYW1vdW50OiAgICAgICAxNSUgIWRlZmF1bHQ7XG4kYnRuLWhvdmVyLWJnLXRpbnQtYW1vdW50OiAgICAgICAgMTUlICFkZWZhdWx0O1xuJGJ0bi1ob3Zlci1ib3JkZXItc2hhZGUtYW1vdW50OiAgIDIwJSAhZGVmYXVsdDtcbiRidG4taG92ZXItYm9yZGVyLXRpbnQtYW1vdW50OiAgICAxMCUgIWRlZmF1bHQ7XG4kYnRuLWFjdGl2ZS1iZy1zaGFkZS1hbW91bnQ6ICAgICAgMjAlICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYmctdGludC1hbW91bnQ6ICAgICAgIDIwJSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJvcmRlci1zaGFkZS1hbW91bnQ6ICAyNSUgIWRlZmF1bHQ7XG4kYnRuLWFjdGl2ZS1ib3JkZXItdGludC1hbW91bnQ6ICAgMTAlICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBidG4tdmFyaWFibGVzXG5cblxuLy8gRm9ybXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvcm0tdGV4dC12YXJpYWJsZXNcbiRmb3JtLXRleHQtbWFyZ2luLXRvcDogICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kZm9ybS10ZXh0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLXRleHQtZm9udC1zdHlsZTogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGZvcm0tdGV4dC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS10ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tdGV4dC12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvcm0tbGFiZWwtdmFyaWFibGVzXG4kZm9ybS1sYWJlbC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1sYWJlbC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLWxhYmVsLWZvbnQtc3R5bGU6ICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGZvcm0tbGFiZWwtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS1sYWJlbC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS1sYWJlbC12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvcm0taW5wdXQtdmFyaWFibGVzXG4kaW5wdXQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1mYW1pbHk6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJGlucHV0LWRpc2FibGVkLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRpbnB1dC1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kaW5wdXQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICRib3gtc2hhZG93LWluc2V0ICFkZWZhdWx0O1xuXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG5cbiRpbnB1dC1mb2N1cy1iZzogICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgdGludC1jb2xvcigkY29tcG9uZW50LWFjdGl2ZS1iZywgNTAlKSAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICogMiAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1pbm5lcjogICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sICRpbnB1dC1wYWRkaW5nLXkgKiAyKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZjogICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjVlbSwgJGlucHV0LXBhZGRpbmcteSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWlubmVyLXF1YXJ0ZXI6ICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC4yNWVtLCAkaW5wdXQtcGFkZGluZy15ICogLjUpICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXkgKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteS1zbSAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LWxnICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kZm9ybS1jb2xvci13aWR0aDogICAgICAgICAgICAgICAgICAgICAgM3JlbSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS1pbnB1dC12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvcm0tY2hlY2stdmFyaWFibGVzXG4kZm9ybS1jaGVjay1pbnB1dC13aWR0aDogICAgICAgICAgICAgICAgICAxZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1taW4taGVpZ2h0OiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLXBhZGRpbmctc3RhcnQ6ICAgICAgICAgICAgICAgICRmb3JtLWNoZWNrLWlucHV0LXdpZHRoICsgLjVlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgIC4xMjVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1sYWJlbC1jb2xvcjogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stbGFiZWwtY3Vyc29yOiAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWFjdGl2ZS1maWx0ZXI6ICAgICAgICAgIGJyaWdodG5lc3MoOTAlKSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtYm9yZGVyOiAgICAgICAgICAgICAgICAgMXB4IHNvbGlkIHJnYmEoJGJsYWNrLCAuMjUpICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgLjI1ZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1yYWRpby1ib3JkZXItcmFkaXVzOiAgICAgICAgICA1MCUgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1mb2N1cy1ib3JkZXI6ICAgICAgICAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtZm9jdXMtYm94LXNoYWRvdzogICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWNvbG9yOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1ib3JkZXItY29sb3I6ICAgJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctaW1hZ2U6ICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwIDIwJz48cGF0aCBmaWxsPSdub25lJyBzdHJva2U9JyN7JGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSczJyBkPSdNNiAxMGwzIDNsNi02Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stcmFkaW8tY2hlY2tlZC1iZy1pbWFnZTogICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMicgZmlsbD0nI3skZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWNvbG9yfScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5wdXQtaW5kZXRlcm1pbmF0ZS1jb2xvcjogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1pbmRldGVybWluYXRlLWJnLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiAgICRmb3JtLWNoZWNrLWlucHV0LWluZGV0ZXJtaW5hdGUtYmctY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1pbmRldGVybWluYXRlLWJnLWltYWdlOiAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCc+PHBhdGggZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLWNoZWNrLWlucHV0LWluZGV0ZXJtaW5hdGUtY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMycgZD0nTTYgMTBoOCcvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5wdXQtZGlzYWJsZWQtb3BhY2l0eTogICAgICAgIC41ICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stbGFiZWwtZGlzYWJsZWQtb3BhY2l0eTogICAgICAgICRmb3JtLWNoZWNrLWlucHV0LWRpc2FibGVkLW9wYWNpdHkgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1idG4tY2hlY2stZGlzYWJsZWQtb3BhY2l0eTogICAgJGJ0bi1kaXNhYmxlZC1vcGFjaXR5ICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbmxpbmUtbWFyZ2luLWVuZDogICAgMXJlbSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS1jaGVjay12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvcm0tc3dpdGNoLXZhcmlhYmxlc1xuJGZvcm0tc3dpdGNoLWNvbG9yOiAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMjUpICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLXdpZHRoOiAgICAgICAgICAgICAgIDJlbSAhZGVmYXVsdDtcbiRmb3JtLXN3aXRjaC1wYWRkaW5nLXN0YXJ0OiAgICAgICAkZm9ybS1zd2l0Y2gtd2lkdGggKyAuNWVtICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLWJnLWltYWdlOiAgICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzMnIGZpbGw9JyN7JGZvcm0tc3dpdGNoLWNvbG9yfScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRmb3JtLXN3aXRjaC1ib3JkZXItcmFkaXVzOiAgICAgICAkZm9ybS1zd2l0Y2gtd2lkdGggIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtdHJhbnNpdGlvbjogICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kZm9ybS1zd2l0Y2gtZm9jdXMtY29sb3I6ICAgICAgICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLXN3aXRjaC1mb2N1cy1iZy1pbWFnZTogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPSczJyBmaWxsPScjeyRmb3JtLXN3aXRjaC1mb2N1cy1jb2xvcn0nLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRmb3JtLXN3aXRjaC1jaGVja2VkLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLXN3aXRjaC1jaGVja2VkLWJnLWltYWdlOiAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPSczJyBmaWxsPScjeyRmb3JtLXN3aXRjaC1jaGVja2VkLWNvbG9yfScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRmb3JtLXN3aXRjaC1jaGVja2VkLWJnLXBvc2l0aW9uOiByaWdodCBjZW50ZXIgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tc3dpdGNoLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgaW5wdXQtZ3JvdXAtdmFyaWFibGVzXG4kaW5wdXQtZ3JvdXAtYWRkb24tcGFkZGluZy15OiAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1wYWRkaW5nLXg6ICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWZvbnQtd2VpZ2h0OiAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1jb2xvcjogICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGlucHV0LWdyb3VwLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1zZWxlY3QtdmFyaWFibGVzXG4kZm9ybS1zZWxlY3QtcGFkZGluZy15OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LXBhZGRpbmcteDogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1mb250LWZhbWlseTogICAgICAgICAgICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1mb250LXNpemU6ICAgICAgICAgICAgICRpbnB1dC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmc6ICAgICAkZm9ybS1zZWxlY3QtcGFkZGluZy14ICogMyAhZGVmYXVsdDsgLy8gRXh0cmEgcGFkZGluZyBmb3IgYmFja2dyb3VuZC1pbWFnZVxuJGZvcm0tc2VsZWN0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWNvbG9yOiAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWJnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWRpc2FibGVkLWNvbG9yOiAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1kaXNhYmxlZC1iZzogICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICRpbnB1dC1kaXNhYmxlZC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYmctcG9zaXRpb246ICAgICAgICAgICByaWdodCAkZm9ybS1zZWxlY3QtcGFkZGluZy14IGNlbnRlciAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1iZy1zaXplOiAgICAgICAgICAgICAgIDE2cHggMTJweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xuJGZvcm0tc2VsZWN0LWluZGljYXRvci1jb2xvcjogICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWluZGljYXRvcjogICAgICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnPjxwYXRoIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzInIGQ9J00yIDVsNiA2IDYtNicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGZvcm0tc2VsZWN0LWZlZWRiYWNrLWljb24tcGFkZGluZy1lbmQ6ICRmb3JtLXNlbGVjdC1wYWRkaW5nLXggKiAyLjUgKyAkZm9ybS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogICAgY2VudGVyIHJpZ2h0ICRmb3JtLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZyAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1mZWVkYmFjay1pY29uLXNpemU6ICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICFkZWZhdWx0O1xuXG4kZm9ybS1zZWxlY3QtYm9yZGVyLXdpZHRoOiAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1ib3JkZXItY29sb3I6ICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWJvcmRlci1yYWRpdXM6ICAgICAgICRpbnB1dC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWJveC1zaGFkb3c6ICAgICAgICAgICRib3gtc2hhZG93LWluc2V0ICFkZWZhdWx0O1xuXG4kZm9ybS1zZWxlY3QtZm9jdXMtYm9yZGVyLWNvbG9yOiAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1mb2N1cy13aWR0aDogICAgICAgICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogICAgMCAwIDAgJGZvcm0tc2VsZWN0LWZvY3VzLXdpZHRoICRpbnB1dC1idG4tZm9jdXMtY29sb3IgIWRlZmF1bHQ7XG5cbiRmb3JtLXNlbGVjdC1wYWRkaW5nLXktc206ICAgICAgICAkaW5wdXQtcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LXBhZGRpbmcteC1zbTogICAgICAgICRpbnB1dC1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZm9udC1zaXplLXNtOiAgICAgICAgJGlucHV0LWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1ib3JkZXItcmFkaXVzLXNtOiAgICAkaW5wdXQtYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcblxuJGZvcm0tc2VsZWN0LXBhZGRpbmcteS1sZzogICAgICAgICRpbnB1dC1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtcGFkZGluZy14LWxnOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1mb250LXNpemUtbGc6ICAgICAgICAkaW5wdXQtZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWJvcmRlci1yYWRpdXMtbGc6ICAgICRpbnB1dC1ib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuXG4kZm9ybS1zZWxlY3QtdHJhbnNpdGlvbjogICAgICAgICAgJGlucHV0LXRyYW5zaXRpb24gIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tc2VsZWN0LXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1yYW5nZS12YXJpYWJsZXNcbiRmb3JtLXJhbmdlLXRyYWNrLXdpZHRoOiAgICAgICAgICAxMDAlICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdHJhY2staGVpZ2h0OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdHJhY2stY3Vyc29yOiAgICAgICAgIHBvaW50ZXIgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10cmFjay1iZzogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdHJhY2stYm9yZGVyLXJhZGl1czogIDFyZW0gIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10cmFjay1ib3gtc2hhZG93OiAgICAgJGJveC1zaGFkb3ctaW5zZXQgIWRlZmF1bHQ7XG5cbiRmb3JtLXJhbmdlLXRodW1iLXdpZHRoOiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItaGVpZ2h0OiAgICAgICAgICAgICAgICAgICRmb3JtLXJhbmdlLXRodW1iLXdpZHRoICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItYm9yZGVyOiAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIC4xcmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdzogICAgICAgIDAgMCAwIDFweCAkYm9keS1iZywgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93LXdpZHRoOiAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0OyAvLyBGb3IgZm9jdXMgYm94IHNoYWRvdyBpc3N1ZSBpbiBFZGdlXG4kZm9ybS1yYW5nZS10aHVtYi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgdGludC1jb2xvcigkY29tcG9uZW50LWFjdGl2ZS1iZywgNzAlKSAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLXJhbmdlLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1maWxlLXZhcmlhYmxlc1xuJGZvcm0tZmlsZS1idXR0b24tY29sb3I6ICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZpbGUtYnV0dG9uLWJnOiAgICAgICAgICAgICAkaW5wdXQtZ3JvdXAtYWRkb24tYmcgIWRlZmF1bHQ7XG4kZm9ybS1maWxlLWJ1dHRvbi1ob3Zlci1iZzogICAgICAgc2hhZGUtY29sb3IoJGZvcm0tZmlsZS1idXR0b24tYmcsIDUlKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS1maWxlLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1mbG9hdGluZy12YXJpYWJsZXNcbiRmb3JtLWZsb2F0aW5nLWhlaWdodDogICAgICAgICAgICBhZGQoMy41cmVtLCAkaW5wdXQtaGVpZ2h0LWJvcmRlcikgIWRlZmF1bHQ7XG4kZm9ybS1mbG9hdGluZy1saW5lLWhlaWdodDogICAgICAgMS4yNSAhZGVmYXVsdDtcbiRmb3JtLWZsb2F0aW5nLXBhZGRpbmcteDogICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctcGFkZGluZy15OiAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kZm9ybS1mbG9hdGluZy1pbnB1dC1wYWRkaW5nLXQ6ICAgMS42MjVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1mbG9hdGluZy1pbnB1dC1wYWRkaW5nLWI6ICAgLjYyNXJlbSAhZGVmYXVsdDtcbiRmb3JtLWZsb2F0aW5nLWxhYmVsLW9wYWNpdHk6ICAgICAuNjUgIWRlZmF1bHQ7XG4kZm9ybS1mbG9hdGluZy1sYWJlbC10cmFuc2Zvcm06ICAgc2NhbGUoLjg1KSB0cmFuc2xhdGVZKC0uNXJlbSkgdHJhbnNsYXRlWCguMTVyZW0pICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctdHJhbnNpdGlvbjogICAgICAgIG9wYWNpdHkgLjFzIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gLjFzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLWZsb2F0aW5nLXZhcmlhYmxlc1xuXG4vLyBGb3JtIHZhbGlkYXRpb25cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvcm0tZmVlZGJhY2stdmFyaWFibGVzXG4kZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAgICAgICAgICAkZm9ybS10ZXh0LW1hcmdpbi10b3AgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkZm9ybS10ZXh0LWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc3R5bGU6ICAgICAgICAgICRmb3JtLXRleHQtZm9udC1zdHlsZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiAgICAgICAgICRzdWNjZXNzICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgJGRhbmdlciAhZGVmYXVsdDtcblxuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcjogICAgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkOiAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcn0nIGQ9J00yLjMgNi43M0wuNiA0LjUzYy0uNC0xLjA0LjQ2LTEuNCAxLjEtLjhsMS4xIDEuNCAzLjQtMy44Yy42LS42MyAxLjYtLjI3IDEuMi43bC00IDQuNmMtLjQzLjUtLjguNC0xLjEuMXonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMTInIHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nPjxjaXJjbGUgY3g9JzYnIGN5PSc2JyByPSc0LjUnLz48cGF0aCBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNS44IDMuNmguNEw2IDYuNXonLz48Y2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyBzdHJva2U9J25vbmUnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tZmVlZGJhY2stdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLXZhbGlkYXRpb24tc3RhdGVzXG4kZm9ybS12YWxpZGF0aW9uLXN0YXRlczogKFxuICBcInZhbGlkXCI6IChcbiAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yLFxuICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkXG4gICksXG4gIFwiaW52YWxpZFwiOiAoXG4gICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yLFxuICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWRcbiAgKVxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xuXG4vLyBaLWluZGV4IG1hc3RlciBsaXN0XG4vL1xuLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XG4vLyBvZiBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgei1heGlzIGFuZCBhcmUgZGVzaWduZWQgdG8gYWxsIHdvcmsgdG9nZXRoZXIuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB6aW5kZXgtc3RhY2tcbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LXN0aWNreTogICAgICAgICAgICAgICAgICAgICAxMDIwICFkZWZhdWx0O1xuJHppbmRleC1maXhlZDogICAgICAgICAgICAgICAgICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtb2ZmY2FudmFzLWJhY2tkcm9wOiAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW9mZmNhbnZhczogICAgICAgICAgICAgICAgICAxMDQ1ICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTUgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA4MCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgemluZGV4LXN0YWNrXG5cblxuLy8gTmF2c1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgbmF2LXZhcmlhYmxlc1xuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRuYXYtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kbmF2LWxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDtcbiRuYXYtbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJG5hdi1saW5rLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgJGdyYXktMjAwICRncmF5LTIwMCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDAgJGdyYXktMzAwICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBuYXYtdmFyaWFibGVzXG5cblxuLy8gTmF2YmFyXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBuYXZiYXItdmFyaWFibGVzXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAkc3BhY2VyICogLjUgIWRlZmF1bHQ7XG4kbmF2YmFyLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbi8vIENvbXB1dGUgdGhlIG5hdmJhci1icmFuZCBwYWRkaW5nLXkgc28gdGhlIG5hdmJhci1icmFuZCB3aWxsIGhhdmUgdGhlIHNhbWUgaGVpZ2h0IGFzIG5hdmJhci10ZXh0IGFuZCBuYXYtbGlua1xuJG5hdi1saW5rLWhlaWdodDogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UgKyAkbmF2LWxpbmstcGFkZGluZy15ICogMiAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtaGVpZ2h0OiAgICAgICAgICAgICAgICRuYXZiYXItYnJhbmQtZm9udC1zaXplICogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLXBhZGRpbmcteTogICAgICAgICAgICAoJG5hdi1saW5rLWhlaWdodCAtICRuYXZiYXItYnJhbmQtaGVpZ2h0KSAqIC41ICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1tYXJnaW4tZW5kOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZTogICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAgICAgICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1mb2N1cy13aWR0aDogICAgICAgICRidG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItdHJhbnNpdGlvbjogICAgICAgICBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIG5hdmJhci12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IG5hdmJhci10aGVtZS12YXJpYWJsZXNcbiRuYXZiYXItZGFyay1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNTUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkd2hpdGUsIC43NSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3I6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjI1KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWljb24tYmc6ICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1kYXJrLWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1ib3JkZXItY29sb3I6ICByZ2JhKCR3aGl0ZSwgLjEpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjU1KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtaG92ZXItY29sb3I6ICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNykgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvcjogICAgICAgICByZ2JhKCRibGFjaywgLjkpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1kaXNhYmxlZC1jb2xvcjogICAgICAgcmdiYSgkYmxhY2ssIC4zKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1saWdodC1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJG5hdmJhci1saWdodC1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBuYXZiYXItdGhlbWUtdmFyaWFibGVzXG5cblxuLy8gRHJvcGRvd25zXG4vL1xuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZHJvcGRvd24tdmFyaWFibGVzXG4kZHJvcGRvd24tbWluLXdpZHRoOiAgICAgICAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1zcGFjZXI6ICAgICAgICAgICAgICAgICAgIC4xMjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kZHJvcGRvd24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1iZzogICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGRyb3Bkb3duLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgc3VidHJhY3QoJGRyb3Bkb3duLWJvcmRlci1yYWRpdXMsICRkcm9wZG93bi1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICAgICAgICAgICAgICAgJGRyb3Bkb3duLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICRzcGFjZXIgKiAuNSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICRib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICAgICBzaGFkZS1jb2xvcigkZHJvcGRvd24tbGluay1jb2xvciwgMTAlKSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6ICAgICAgICAgICAkc3BhY2VyICogLjI1ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWhlYWRlci1wYWRkaW5nOiAgICAgICAgICAgJGRyb3Bkb3duLXBhZGRpbmcteSAkZHJvcGRvd24taXRlbS1wYWRkaW5nLXggIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGRyb3Bkb3duLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZHJvcGRvd24tZGFyay12YXJpYWJsZXNcbiRkcm9wZG93bi1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWJvcmRlci1jb2xvcjogICAgICAgICRkcm9wZG93bi1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1kaXZpZGVyLWJnOiAgICAgICAgICAkZHJvcGRvd24tZGl2aWRlci1iZyAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWJveC1zaGFkb3c6ICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1saW5rLWNvbG9yOiAgICAgICAgICAkZHJvcGRvd24tZGFyay1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWxpbmstaG92ZXItY29sb3I6ICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWxpbmstaG92ZXItYmc6ICAgICAgIHJnYmEoJHdoaXRlLCAuMTUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstbGluay1hY3RpdmUtY29sb3I6ICAgJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstbGluay1hY3RpdmUtYmc6ICAgICAgJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstbGluay1kaXNhYmxlZC1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstaGVhZGVyLWNvbG9yOiAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBkcm9wZG93bi1kYXJrLXZhcmlhYmxlc1xuXG5cbi8vIFBhZ2luYXRpb25cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHBhZ2luYXRpb24tdmFyaWFibGVzXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tbWFyZ2luLXN0YXJ0OiAgICAgICAgICAgLSRwYWdpbmF0aW9uLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZm9jdXMtY29sb3I6ICAgICAgICAgICAgJGxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1mb2N1cy1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1mb2N1cy1vdXRsaW5lOiAgICAgICAgICAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAgICAgICAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRwYWdpbmF0aW9uLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBwYWdpbmF0aW9uLXZhcmlhYmxlc1xuXG5cbi8vIFBsYWNlaG9sZGVyc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgcGxhY2Vob2xkZXJzXG4kcGxhY2Vob2xkZXItb3BhY2l0eS1tYXg6ICAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRwbGFjZWhvbGRlci1vcGFjaXR5LW1pbjogICAgICAgICAgIC4yICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBwbGFjZWhvbGRlcnNcblxuLy8gQ2FyZHNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNhcmQtdmFyaWFibGVzXG4kY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcbiRjYXJkLXRpdGxlLXNwYWNlci15OiAgICAgICAgICAgICAgICRzcGFjZXIgKiAuNSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjYXJkLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICBzdWJ0cmFjdCgkY2FyZC1ib3JkZXItcmFkaXVzLCAkY2FyZC1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJGNhcmQtY2FwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXkgKiAuNSAhZGVmYXVsdDtcbiRjYXJkLWNhcC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci14ICFkZWZhdWx0O1xuJGNhcmQtY2FwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wMykgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2FyZC1pbWctb3ZlcmxheS1wYWRkaW5nOiAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGNhcmQtZ3JvdXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoICogLjUgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGNhcmQtdmFyaWFibGVzXG5cbi8vIEFjY29yZGlvblxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYWNjb3JkaW9uLXZhcmlhYmxlc1xuJGFjY29yZGlvbi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJGFjY29yZGlvbi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGFjY29yZGlvbi1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgc3VidHJhY3QoJGFjY29yZGlvbi1ib3JkZXItcmFkaXVzLCAkYWNjb3JkaW9uLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG5cbiRhY2NvcmRpb24tYm9keS1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICRhY2NvcmRpb24tcGFkZGluZy15ICFkZWZhdWx0O1xuJGFjY29yZGlvbi1ib2R5LXBhZGRpbmcteDogICAgICAgICAgICAgICAgJGFjY29yZGlvbi1wYWRkaW5nLXggIWRlZmF1bHQ7XG5cbiRhY2NvcmRpb24tYnV0dG9uLXBhZGRpbmcteTogICAgICAgICAgICAgICRhY2NvcmRpb24tcGFkZGluZy15ICFkZWZhdWx0O1xuJGFjY29yZGlvbi1idXR0b24tcGFkZGluZy14OiAgICAgICAgICAgICAgJGFjY29yZGlvbi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkYWNjb3JkaW9uLWNvbG9yICFkZWZhdWx0O1xuJGFjY29yZGlvbi1idXR0b24tYmc6ICAgICAgICAgICAgICAgICAgICAgJGFjY29yZGlvbi1iZyAhZGVmYXVsdDtcbiRhY2NvcmRpb24tdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAgICRidG4tdHJhbnNpdGlvbiwgYm9yZGVyLXJhZGl1cyAuMTVzIGVhc2UgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICB0aW50LWNvbG9yKCRjb21wb25lbnQtYWN0aXZlLWJnLCA5MCUpICFkZWZhdWx0O1xuJGFjY29yZGlvbi1idXR0b24tYWN0aXZlLWNvbG9yOiAgICAgICAgICAgc2hhZGUtY29sb3IoJHByaW1hcnksIDEwJSkgIWRlZmF1bHQ7XG5cbiRhY2NvcmRpb24tYnV0dG9uLWZvY3VzLWJvcmRlci1jb2xvcjogICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAkYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRhY2NvcmRpb24taWNvbi13aWR0aDogICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWljb24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAkYWNjb3JkaW9uLWJ1dHRvbi1jb2xvciAhZGVmYXVsdDtcbiRhY2NvcmRpb24taWNvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAgICRhY2NvcmRpb24tYnV0dG9uLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRhY2NvcmRpb24taWNvbi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWljb24tdHJhbnNmb3JtOiAgICAgICAgICAgICAgICByb3RhdGUoLTE4MGRlZykgIWRlZmF1bHQ7XG5cbiRhY2NvcmRpb24tYnV0dG9uLWljb246ICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyN7JGFjY29yZGlvbi1pY29uLWNvbG9yfSc+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNMS42NDYgNC42NDZhLjUuNSAwIDAgMSAuNzA4IDBMOCAxMC4yOTNsNS42NDYtNS42NDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtNiA2YS41LjUgMCAwIDEtLjcwOCAwbC02LTZhLjUuNSAwIDAgMSAwLS43MDh6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGFjY29yZGlvbi1idXR0b24tYWN0aXZlLWljb246ICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nI3skYWNjb3JkaW9uLWljb24tYWN0aXZlLWNvbG9yfSc+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNMS42NDYgNC42NDZhLjUuNSAwIDAgMSAuNzA4IDBMOCAxMC4yOTNsNS42NDYtNS42NDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtNiA2YS41LjUgMCAwIDEtLjcwOCAwbC02LTZhLjUuNSAwIDAgMSAwLS43MDh6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBhY2NvcmRpb24tdmFyaWFibGVzXG5cbi8vIFRvb2x0aXBzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0b29sdGlwLXZhcmlhYmxlc1xuJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDIwMHB4ICFkZWZhdWx0O1xuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdG9vbHRpcC1vcGFjaXR5OiAgICAgICAgICAgICAgICAgICAuOSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICRzcGFjZXIgKiAuMjUgIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAkc3BhY2VyICogLjUgIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXJnaW46ICAgICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuXG4kdG9vbHRpcC1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAuOHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHRvb2x0aXAtYmcgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRvb2x0aXAtdmFyaWFibGVzXG5cbi8vIEZvcm0gdG9vbHRpcHMgbXVzdCBjb21lIGFmdGVyIHJlZ3VsYXIgdG9vbHRpcHNcbi8vIHNjc3MtZG9jcy1zdGFydCB0b29sdGlwLWZlZWRiYWNrLXZhcmlhYmxlc1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteDogICAgICR0b29sdGlwLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtZm9udC1zaXplOiAgICAgJHRvb2x0aXAtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1saW5lLWhlaWdodDogICBudWxsICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1vcGFjaXR5OiAgICAgICAkdG9vbHRpcC1vcGFjaXR5ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAkdG9vbHRpcC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0b29sdGlwLWZlZWRiYWNrLXZhcmlhYmxlc1xuXG5cbi8vIFBvcG92ZXJzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBwb3BvdmVyLXZhcmlhYmxlc1xuJHBvcG92ZXItZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwb3BvdmVyLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDI3NnB4ICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRwb3BvdmVyLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgIHN1YnRyYWN0KCRwb3BvdmVyLWJvcmRlci1yYWRpdXMsICRwb3BvdmVyLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAkYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJHBvcG92ZXItaGVhZGVyLWJnOiAgICAgICAgICAgICAgICAgc2hhZGUtY29sb3IoJHBvcG92ZXItYmcsIDYlKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJHBvcG92ZXItYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteTogICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXg6ICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJHBvcG92ZXItYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHBvcG92ZXItYmcgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAgICAgICAgIGZhZGUtaW4oJHBvcG92ZXItYm9yZGVyLWNvbG9yLCAuMDUpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBwb3BvdmVyLXZhcmlhYmxlc1xuXG5cbi8vIFRvYXN0c1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdG9hc3QtdmFyaWFibGVzXG4kdG9hc3QtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgICAzNTBweCAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHRvYXN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kdG9hc3QtYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0b2FzdC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICRib3gtc2hhZG93ICFkZWZhdWx0O1xuJHRvYXN0LXNwYWNpbmc6ICAgICAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci1wYWRkaW5nLXggIWRlZmF1bHQ7XG5cbiR0b2FzdC1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRvYXN0LXZhcmlhYmxlc1xuXG5cbi8vIEJhZGdlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYmFkZ2UtdmFyaWFibGVzXG4kYmFkZ2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAuNzVlbSAhZGVmYXVsdDtcbiRiYWRnZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGJhZGdlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjM1ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNjVlbSAhZGVmYXVsdDtcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBiYWRnZS12YXJpYWJsZXNcblxuXG4vLyBNb2RhbHNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IG1vZGFsLXZhcmlhYmxlc1xuJG1vZGFsLWlubmVyLXBhZGRpbmc6ICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJG1vZGFsLWZvb3Rlci1tYXJnaW4tYmV0d2VlbjogICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC1kaWFsb2ctbWFyZ2luOiAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJG1vZGFsLWRpYWxvZy1tYXJnaW4teS1zbS11cDogICAgICAgMS43NXJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRtb2RhbC1jb250ZW50LWNvbG9yOiAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1iZzogICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtaW5uZXItYm9yZGVyLXJhZGl1czogc3VidHJhY3QoJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1cywgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHM6ICAgICAgICRib3gtc2hhZG93LXNtICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogICAgJGJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRtb2RhbC1iYWNrZHJvcC1iZzogICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAgICAgICAgICAgIC41ICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgICAkbW9kYWwtaW5uZXItcGFkZGluZyAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAgICRtb2RhbC1pbm5lci1wYWRkaW5nICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nOiAgICAgICAgICAgICAgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXkgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7IC8vIEtlZXAgdGhpcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblxuJG1vZGFsLXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtbWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICA1MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgIDgwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLXhsOiAgICAgICAgICAgICAgICAgICAgICAgICAgMTE0MHB4ICFkZWZhdWx0O1xuXG4kbW9kYWwtZmFkZS10cmFuc2Zvcm06ICAgICAgICAgICAgICB0cmFuc2xhdGUoMCwgLTUwcHgpICFkZWZhdWx0O1xuJG1vZGFsLXNob3ctdHJhbnNmb3JtOiAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiRtb2RhbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQgIWRlZmF1bHQ7XG4kbW9kYWwtc2NhbGUtdHJhbnNmb3JtOiAgICAgICAgICAgICBzY2FsZSgxLjAyKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgbW9kYWwtdmFyaWFibGVzXG5cblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBhbGVydC12YXJpYWJsZXNcbiRhbGVydC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcbiRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcbiRhbGVydC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci13aWR0aDogICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGFsZXJ0LWJnLXNjYWxlOiAgICAgICAgICAgICAgICAtODAlICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1zY2FsZTogICAgICAgICAgICAtNzAlICFkZWZhdWx0O1xuJGFsZXJ0LWNvbG9yLXNjYWxlOiAgICAgICAgICAgICA0MCUgIWRlZmF1bHQ7XG4kYWxlcnQtZGlzbWlzc2libGUtcGFkZGluZy1yOiAgICRhbGVydC1wYWRkaW5nLXggKiAzICFkZWZhdWx0OyAvLyAzeCBjb3ZlcnMgd2lkdGggb2YgeCBwbHVzIGRlZmF1bHQgcGFkZGluZyBvbiBlaXRoZXIgc2lkZVxuLy8gc2Nzcy1kb2NzLWVuZCBhbGVydC12YXJpYWJsZXNcblxuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBwcm9ncmVzcy12YXJpYWJsZXNcbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAuNzUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICRib3gtc2hhZG93LWluc2V0ICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1jb2xvcjogICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1iZzogICAgICAgICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi10aW1pbmc6ICAgICAxcyBsaW5lYXIgaW5maW5pdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLXRyYW5zaXRpb246ICAgICAgICAgICB3aWR0aCAuNnMgZWFzZSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgcHJvZ3Jlc3MtdmFyaWFibGVzXG5cblxuLy8gTGlzdCBncm91cFxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgbGlzdC1ncm91cC12YXJpYWJsZXNcbiRsaXN0LWdyb3VwLWNvbG9yOiAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci13aWR0aDogICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXk6ICAgICAgICAgJHNwYWNlciAqIC41ICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXg6ICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWl0ZW0tYmctc2NhbGU6ICAgICAgICAgIC04MCUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1pdGVtLWNvbG9yLXNjYWxlOiAgICAgICA0MCUgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkbGlzdC1ncm91cC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRsaXN0LWdyb3VwLWJnICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1hY3Rpb24tY29sb3I6ICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6ICAgICAkbGlzdC1ncm91cC1hY3Rpb24tY29sb3IgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBsaXN0LWdyb3VwLXZhcmlhYmxlc1xuXG5cbi8vIEltYWdlIHRodW1ibmFpbHNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRodW1ibmFpbC12YXJpYWJsZXNcbiR0aHVtYm5haWwtcGFkZGluZzogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYmc6ICAgICAgICAgICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgJGJveC1zaGFkb3ctc20gIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRodW1ibmFpbC12YXJpYWJsZXNcblxuXG4vLyBGaWd1cmVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmaWd1cmUtdmFyaWFibGVzXG4kZmlndXJlLWNhcHRpb24tZm9udC1zaXplOiAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGZpZ3VyZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmaWd1cmUtdmFyaWFibGVzXG5cblxuLy8gQnJlYWRjcnVtYnNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGJyZWFkY3J1bWItdmFyaWFibGVzXG4kYnJlYWRjcnVtYi1mb250LXNpemU6ICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItcGFkZGluZy15OiAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmcteDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLW1hcmdpbi1ib3R0b206ICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlcjogICAgICAgICAgICAgICAgcXVvdGUoXCIvXCIpICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlci1mbGlwcGVkOiAgICAgICAgJGJyZWFkY3J1bWItZGl2aWRlciAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJyZWFkY3J1bWItdmFyaWFibGVzXG5cbi8vIENhcm91c2VsXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBjYXJvdXNlbC12YXJpYWJsZXNcbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC13aWR0aDogICAgICAgICAgICAgMTUlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgIC41ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtaG92ZXItb3BhY2l0eTogICAgIC45ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtdHJhbnNpdGlvbjogICAgICAgIG9wYWNpdHkgLjE1cyBlYXNlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGVpZ2h0OiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhpdC1hcmVhLWhlaWdodDogMTBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3Itc3BhY2VyOiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLW9wYWNpdHk6ICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1hY3RpdmUtb3BhY2l0eTogIDEgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXRyYW5zaXRpb246ICAgICAgb3BhY2l0eSAuNnMgZWFzZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNhcHRpb24td2lkdGg6ICAgICAgICAgICAgIDcwJSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY2FwdGlvbi1wYWRkaW5nLXk6ICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jYXB0aW9uLXNwYWNlcjogICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1pY29uLXdpZHRoOiAgICAgICAgMnJlbSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfSc+PHBhdGggZD0nTTExLjM1NCAxLjY0NmEuNS41IDAgMCAxIDAgLjcwOEw1LjcwNyA4bDUuNjQ3IDUuNjQ2YS41LjUgMCAwIDEtLjcwOC43MDhsLTYtNmEuNS41IDAgMCAxIDAtLjcwOGw2LTZhLjUuNSAwIDAgMSAuNzA4IDB6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfSc+PHBhdGggZD0nTTQuNjQ2IDEuNjQ2YS41LjUgMCAwIDEgLjcwOCAwbDYgNmEuNS41IDAgMCAxIDAgLjcwOGwtNiA2YS41LjUgMCAwIDEtLjcwOC0uNzA4TDEwLjI5MyA4IDQuNjQ2IDIuMzU0YS41LjUgMCAwIDEgMC0uNzA4eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb246ICAgICAgIC42cyAhZGVmYXVsdDtcbiRjYXJvdXNlbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb24gZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIERlZmluZSB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBmaXJzdCBpZiB1c2luZyBtdWx0aXBsZSB0cmFuc2l0aW9ucyAoZS5nLiwgYHRyYW5zZm9ybSAycyBlYXNlLCBvcGFjaXR5IC41cyBlYXNlLW91dGApXG5cbiRjYXJvdXNlbC1kYXJrLWluZGljYXRvci1hY3RpdmUtYmc6ICAkYmxhY2sgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtZGFyay1jYXB0aW9uLWNvbG9yOiAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJGNhcm91c2VsLWRhcmstY29udHJvbC1pY29uLWZpbHRlcjogIGludmVydCgxKSBncmF5c2NhbGUoMTAwKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY2Fyb3VzZWwtdmFyaWFibGVzXG5cblxuLy8gU3Bpbm5lcnNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHNwaW5uZXItdmFyaWFibGVzXG4kc3Bpbm5lci13aWR0aDogICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1oZWlnaHQ6ICAgICAgICAgICRzcGlubmVyLXdpZHRoICFkZWZhdWx0O1xuJHNwaW5uZXItdmVydGljYWwtYWxpZ246ICAtLjEyNWVtICFkZWZhdWx0O1xuJHNwaW5uZXItYm9yZGVyLXdpZHRoOiAgICAuMjVlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWFuaW1hdGlvbi1zcGVlZDogLjc1cyAhZGVmYXVsdDtcblxuJHNwaW5uZXItd2lkdGgtc206ICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHNwaW5uZXItaGVpZ2h0LXNtOiAgICAgICAkc3Bpbm5lci13aWR0aC1zbSAhZGVmYXVsdDtcbiRzcGlubmVyLWJvcmRlci13aWR0aC1zbTogLjJlbSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgc3Bpbm5lci12YXJpYWJsZXNcblxuXG4vLyBDbG9zZVxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY2xvc2UtdmFyaWFibGVzXG4kYnRuLWNsb3NlLXdpZHRoOiAgICAgICAgICAgIDFlbSAhZGVmYXVsdDtcbiRidG4tY2xvc2UtaGVpZ2h0OiAgICAgICAgICAgJGJ0bi1jbG9zZS13aWR0aCAhZGVmYXVsdDtcbiRidG4tY2xvc2UtcGFkZGluZy14OiAgICAgICAgLjI1ZW0gIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLXBhZGRpbmcteTogICAgICAgICRidG4tY2xvc2UtcGFkZGluZy14ICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1jb2xvcjogICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLWJnOiAgICAgICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPScjeyRidG4tY2xvc2UtY29sb3J9Jz48cGF0aCBkPSdNLjI5My4yOTNhMSAxIDAgMDExLjQxNCAwTDggNi41ODYgMTQuMjkzLjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0TDkuNDE0IDhsNi4yOTMgNi4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMOCA5LjQxNGwtNi4yOTMgNi4yOTNhMSAxIDAgMDEtMS40MTQtMS40MTRMNi41ODYgOCAuMjkzIDEuNzA3YTEgMSAwIDAxMC0xLjQxNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLWZvY3VzLXNoYWRvdzogICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRidG4tY2xvc2Utb3BhY2l0eTogICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLWhvdmVyLW9wYWNpdHk6ICAgIC43NSAhZGVmYXVsdDtcbiRidG4tY2xvc2UtZm9jdXMtb3BhY2l0eTogICAgMSAhZGVmYXVsdDtcbiRidG4tY2xvc2UtZGlzYWJsZWQtb3BhY2l0eTogLjI1ICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS13aGl0ZS1maWx0ZXI6ICAgICBpbnZlcnQoMSkgZ3JheXNjYWxlKDEwMCUpIGJyaWdodG5lc3MoMjAwJSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGNsb3NlLXZhcmlhYmxlc1xuXG5cbi8vIE9mZmNhbnZhc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgb2ZmY2FudmFzLXZhcmlhYmxlc1xuJG9mZmNhbnZhcy1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgJG1vZGFsLWlubmVyLXBhZGRpbmcgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLXBhZGRpbmcteDogICAgICAgICAgICAgICAkbW9kYWwtaW5uZXItcGFkZGluZyAhZGVmYXVsdDtcbiRvZmZjYW52YXMtaG9yaXpvbnRhbC13aWR0aDogICAgICAgIDQwMHB4ICFkZWZhdWx0O1xuJG9mZmNhbnZhcy12ZXJ0aWNhbC1oZWlnaHQ6ICAgICAgICAgMzB2aCAhZGVmYXVsdDtcbiRvZmZjYW52YXMtdHJhbnNpdGlvbi1kdXJhdGlvbjogICAgIC4zcyAhZGVmYXVsdDtcbiRvZmZjYW52YXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRvZmZjYW52YXMtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRvZmZjYW52YXMtdGl0bGUtbGluZS1oZWlnaHQ6ICAgICAgICRtb2RhbC10aXRsZS1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRvZmZjYW52YXMtYmctY29sb3I6ICAgICAgICAgICAgICAgICRtb2RhbC1jb250ZW50LWJnICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1jb2xvcjogICAgICAgICAgICAgICAgICAgJG1vZGFsLWNvbnRlbnQtY29sb3IgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1iYWNrZHJvcC1iZzogICAgICAgICAgICAgJG1vZGFsLWJhY2tkcm9wLWJnICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1iYWNrZHJvcC1vcGFjaXR5OiAgICAgICAgJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIG9mZmNhbnZhcy12YXJpYWJsZXNcblxuLy8gQ29kZVxuXG4kY29kZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGNvZGUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgJHBpbmsgIWRlZmF1bHQ7XG5cbiRrYmQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGtiZC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4ka2JkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAkY29kZS1mb250LXNpemUgIWRlZmF1bHQ7XG4ka2JkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4ka2JkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbiRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4iXX0= */"], changeDetection: 0 });
function processTerm(minimalTermLength, fetchDebounceTime) {
    return (source$) => source$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(fetchDebounceTime), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(normalizeTerm), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)((0,_utils_filter__WEBPACK_IMPORTED_MODULE_0__.longerOrEqual)(minimalTermLength)));
}
function normalizeTerm(term) {
    return term.trim().toLowerCase();
}


/***/ }),

/***/ 1104:
/*!****************************************************!*\
  !*** ./src/app/shared/directives/let.directive.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LetContext": () => (/* binding */ LetContext),
/* harmony export */   "LetDirective": () => (/* binding */ LetDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LetContext {
    constructor() {
        this.$implicit = null;
        this.erzLet = null;
    }
}
class LetDirective {
    constructor(vcr, templateRef) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this.context = new LetContext();
    }
    set erzLet(value) {
        this.context.$implicit = this.context.erzLet = value;
    }
    ngOnInit() {
        this.vcr.createEmbeddedView(this.templateRef, this.context);
    }
}
LetDirective.ɵfac = function LetDirective_Factory(t) { return new (t || LetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
LetDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LetDirective, selectors: [["", "erzLet", ""]], inputs: { erzLet: "erzLet" } });


/***/ }),

/***/ 5030:
/*!***********************************************!*\
  !*** ./src/app/shared/models/common-types.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalDateFromString": () => (/* binding */ LocalDateFromString),
/* harmony export */   "LocalDateTimeFromString": () => (/* binding */ LocalDateTimeFromString),
/* harmony export */   "Maybe": () => (/* binding */ Maybe),
/* harmony export */   "Option": () => (/* binding */ Option),
/* harmony export */   "OptionalReference": () => (/* binding */ OptionalReference),
/* harmony export */   "Reference": () => (/* binding */ Reference)
/* harmony export */ });
/* harmony import */ var io_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! io-ts */ 9450);
/* harmony import */ var fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fp-ts/es6/Either */ 1633);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/date */ 6316);



function Option(optionalType) {
    return io_ts__WEBPACK_IMPORTED_MODULE_1__.union([io_ts__WEBPACK_IMPORTED_MODULE_1__["null"], optionalType]);
}
function Maybe(maybeType) {
    return io_ts__WEBPACK_IMPORTED_MODULE_1__.union([io_ts__WEBPACK_IMPORTED_MODULE_1__["null"], io_ts__WEBPACK_IMPORTED_MODULE_1__.undefined, maybeType]);
}
const Reference = io_ts__WEBPACK_IMPORTED_MODULE_1__.type({ Id: io_ts__WEBPACK_IMPORTED_MODULE_1__.number, HRef: Option(io_ts__WEBPACK_IMPORTED_MODULE_1__.string) });

const OptionalReference = io_ts__WEBPACK_IMPORTED_MODULE_1__.type({
    Id: Option(io_ts__WEBPACK_IMPORTED_MODULE_1__.number),
    HRef: Option(io_ts__WEBPACK_IMPORTED_MODULE_1__.string),
});

const LocalDateTimeFromString = new io_ts__WEBPACK_IMPORTED_MODULE_1__.Type('LocalDateTimeFromString', (u) => u instanceof Date, (u, c) => fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_2__.either.chain(io_ts__WEBPACK_IMPORTED_MODULE_1__.string.validate(u, c), (s) => {
    const d = (0,_utils_date__WEBPACK_IMPORTED_MODULE_0__.parseISOLocalDateTime)(s);
    return isNaN(d.getTime()) ? io_ts__WEBPACK_IMPORTED_MODULE_1__.failure(u, c) : io_ts__WEBPACK_IMPORTED_MODULE_1__.success(d);
}), (a) => (0,_utils_date__WEBPACK_IMPORTED_MODULE_0__.formatISOLocalDateTime)(a));
const LocalDateFromString = new io_ts__WEBPACK_IMPORTED_MODULE_1__.Type('LocalDateTimeFromString', (u) => u instanceof Date, (u, c) => fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_2__.either.chain(io_ts__WEBPACK_IMPORTED_MODULE_1__.string.validate(u, c), (s) => {
    const d = (0,_utils_date__WEBPACK_IMPORTED_MODULE_0__.parseISOLocalDate)(s);
    return isNaN(d.getTime()) ? io_ts__WEBPACK_IMPORTED_MODULE_1__.failure(u, c) : io_ts__WEBPACK_IMPORTED_MODULE_1__.success(d);
}), (a) => (0,_utils_date__WEBPACK_IMPORTED_MODULE_0__.formatISOLocalDate)(a));


/***/ }),

/***/ 4743:
/*!*********************************************************!*\
  !*** ./src/app/shared/models/teacher-resource.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherResource": () => (/* binding */ TeacherResource)
/* harmony export */ });
/* harmony import */ var io_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! io-ts */ 9450);
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-types */ 5030);


const TeacherResource = io_ts__WEBPACK_IMPORTED_MODULE_1__.type({
    Id: io_ts__WEBPACK_IMPORTED_MODULE_1__.Int,
    TeacherId: io_ts__WEBPACK_IMPORTED_MODULE_1__.Int,
    FullName: io_ts__WEBPACK_IMPORTED_MODULE_1__.string,
    Acronym: (0,_common_types__WEBPACK_IMPORTED_MODULE_0__.Option)(io_ts__WEBPACK_IMPORTED_MODULE_1__.string),
    Status: io_ts__WEBPACK_IMPORTED_MODULE_1__.string,
    StatusId: io_ts__WEBPACK_IMPORTED_MODULE_1__.Int,
});



/***/ }),

/***/ 6263:
/*!*************************************************************!*\
  !*** ./src/app/shared/models/teacher-substitution.model.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherSubstitution": () => (/* binding */ TeacherSubstitution)
/* harmony export */ });
/* harmony import */ var io_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! io-ts */ 9450);
/* harmony import */ var io_ts_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! io-ts-types */ 2296);
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-types */ 5030);



const TeacherSubstitution = io_ts__WEBPACK_IMPORTED_MODULE_1__.type({
    Id: io_ts__WEBPACK_IMPORTED_MODULE_1__.Int,
    HolderId: io_ts__WEBPACK_IMPORTED_MODULE_1__.Int,
    Holder: io_ts__WEBPACK_IMPORTED_MODULE_1__.string,
    SubstituteId: io_ts__WEBPACK_IMPORTED_MODULE_1__.Int,
    Substitute: io_ts__WEBPACK_IMPORTED_MODULE_1__.string,
    DateFrom: io_ts_types__WEBPACK_IMPORTED_MODULE_2__.DateFromISOString,
    DateTo: io_ts_types__WEBPACK_IMPORTED_MODULE_2__.DateFromISOString,
    Remarks: (0,_common_types__WEBPACK_IMPORTED_MODULE_0__.Option)(io_ts__WEBPACK_IMPORTED_MODULE_1__.string),
});



/***/ }),

/***/ 264:
/*!************************************************!*\
  !*** ./src/app/shared/pipes/add-space.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSpacePipe": () => (/* binding */ AddSpacePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_i18n_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/i18n.service */ 2741);


class AddSpacePipe {
    constructor(i18n) {
        this.i18n = i18n;
    }
    transform(value, chars) {
        const lang = this.i18n.detectLanguage();
        switch (lang) {
            case 'fr-CH':
                Array.from(chars).map((c) => (value = value.replace(c, ' '.concat(c))));
                return value;
            default:
                return value;
        }
    }
}
AddSpacePipe.ɵfac = function AddSpacePipe_Factory(t) { return new (t || AddSpacePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_i18n_service__WEBPACK_IMPORTED_MODULE_0__.I18nService, 16)); };
AddSpacePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "addSpace", type: AddSpacePipe, pure: true });


/***/ }),

/***/ 8266:
/*!******************************************************!*\
  !*** ./src/app/shared/pipes/days-difference.pipe.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DaysDifferencePipe": () => (/* binding */ DaysDifferencePipe)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 6323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);



class DaysDifferencePipe {
    constructor(translate) {
        this.translate = translate;
    }
    transform(input) {
        if (!input) {
            return '';
        }
        const difference = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(input, new Date());
        return this.translate.instant(`shared.daysDifference.${this.getKey(difference)}`, {
            count: Math.abs(difference),
        });
    }
    getKey(daysDifference) {
        if (daysDifference === 0) {
            return 'today';
        }
        else if (daysDifference === 1) {
            return 'tomorrow';
        }
        else if (daysDifference === -1) {
            return 'yesterday';
        }
        else if (daysDifference > 0) {
            return 'in';
        }
        return 'ago';
    }
}
DaysDifferencePipe.ɵfac = function DaysDifferencePipe_Factory(t) { return new (t || DaysDifferencePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService, 16)); };
DaysDifferencePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "erzDaysDifference", type: DaysDifferencePipe, pure: true });


/***/ }),

/***/ 4316:
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/person-email.pipe.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonEmailPipe": () => (/* binding */ PersonEmailPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PersonEmailPipe {
    transform(input) {
        return (input === null || input === void 0 ? void 0 : input.DisplayEmail) || (input === null || input === void 0 ? void 0 : input.Email) || (input === null || input === void 0 ? void 0 : input.Email2) || null;
    }
}
PersonEmailPipe.ɵfac = function PersonEmailPipe_Factory(t) { return new (t || PersonEmailPipe)(); };
PersonEmailPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "erzPersonEmail", type: PersonEmailPipe, pure: true });


/***/ }),

/***/ 8246:
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/safe.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 318);


/* based on https://medium.com/@swarnakishore/angular-safe-pipe-implementation-to-bypass-domsanitizer-stripping-out-content-c1bf0f1cc36b */
class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });


/***/ }),

/***/ 9528:
/*!******************************************!*\
  !*** ./src/app/shared/pipes/xss.pipe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XssPipe": () => (/* binding */ XssPipe)
/* harmony export */ });
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xss */ 5830);
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class XssPipe {
    transform(value, options) {
        return xss__WEBPACK_IMPORTED_MODULE_0___default()(value, options);
    }
}
XssPipe.ɵfac = function XssPipe_Factory(t) { return new (t || XssPipe)(); };
XssPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "xss", type: XssPipe, pure: true });


/***/ }),

/***/ 629:
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService),
/* harmony export */   "SUBSTITUTE_ADMINISTRATOR_ROLE": () => (/* binding */ SUBSTITUTE_ADMINISTRATOR_ROLE)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9361);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4514);
/* harmony import */ var src_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/settings */ 8029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 1303);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8784);








const SUBSTITUTE_ADMINISTRATOR_ROLE = 'SubstituteAdministratorRole';
class AuthService {
    constructor(storage, route, router, settings, 
    //private location: Location,
    http) {
        this.storage = storage;
        this.route = route;
        this.router = router;
        this.settings = settings;
        this.http = http;
        this.personId$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.holderId$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.substitutionId$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.personId$.next(this.personId);
        this.substitutionId$.next(this.substitutionId);
        this.holderId$.next(this.holderId);
    }
    get isAuthenticated() {
        return Boolean(this.accessToken);
    }
    get accessToken() {
        return this.storage.getAccessToken();
    }
    get personId() {
        if (this.accessToken == null)
            return null;
        let stringId = this.parseJwt(this.accessToken).id_person;
        if (stringId == null)
            return null;
        return parseInt(stringId);
    }
    get personName() {
        if (this.accessToken == null)
            return null;
        return this.parseJwt(this.accessToken).fullname;
    }
    get substitutionId() {
        if (this.accessToken == null)
            return null;
        let substitutionId = this.parseJwt(this.accessToken).substitution_id;
        if (substitutionId == null)
            return substitutionId;
        return parseInt(substitutionId);
    }
    get holderId() {
        if (this.accessToken == null)
            return null;
        let substitutionId = this.parseJwt(this.accessToken).holder_id;
        if (substitutionId == null)
            return substitutionId;
        return parseInt(substitutionId);
    }
    get oAuthUrl() {
        if (this.accessToken == null)
            return null;
        return this.parseJwt(this.accessToken).iss;
    }
    get roles() {
        var _a;
        if (this.accessToken == null)
            return [];
        let rolesString = (_a = this.parseJwt(this.accessToken).roles) !== null && _a !== void 0 ? _a : "";
        return rolesString.split(';');
    }
    hasRole(role) {
        return this.roles.includes(role);
    }
    setTokenResponse(tokenResponse) {
        this.storage.setToken(tokenResponse["access_token"], tokenResponse["refresh_token"]);
        this.personId$.next(this.personId);
        this.substitutionId$.next(this.substitutionId);
        this.holderId$.next(this.holderId);
    }
    setToken(accessToken) {
        this.storage.setToken(accessToken, "");
        this.personId$.next(this.personId);
        this.substitutionId$.next(this.substitutionId);
        this.holderId$.next(this.holderId);
    }
    parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }
    ;
    login() {
        let oAuthUrl = this.settings.oAuthUrl;
        let instanceId = this.settings.instanceId;
        let clientId = this.settings.clientId;
        let redirectUrl = this.settings.oAuthRedirectUrl;
        let appScope = this.settings.appScope;
        let params = new URLSearchParams();
        if (!clientId) {
            console.error('clientId is not configured');
            return;
        }
        params.append('clientId', clientId);
        params.append('application_scope', appScope);
        if (redirectUrl) {
            params.append('redirectUrl', redirectUrl);
        }
        let loginUrl = `${oAuthUrl}/authorization/${instanceId}/login?${params.toString()}`;
        window.location.href = loginUrl;
    }
    logout() {
        var _a;
        let oAuthUrl = this.settings.oAuthUrl;
        let instanceId = this.settings.instanceId;
        let body = `access_token=${encodeURIComponent((_a = this.accessToken) !== null && _a !== void 0 ? _a : "")}`;
        let logoutUrl = `${oAuthUrl}/authorization/${instanceId}/logout`;
        let result = this.http.post(logoutUrl, body, { responseType: 'text' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(v => {
            console.log('response', v);
            this.personId$.next(null);
            this.holderId$.next(null);
            this.substitutionId$.next(null);
            this.storage.setToken(null, null);
            this.router.navigate(['/']);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mapTo)(undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.share)());
        result.subscribe(v => console.log('success', v), v => console.log('errror', v));
        return result;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8568:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/date-parser-formatter.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateParserFormatter": () => (/* binding */ DateParserFormatter)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 4876);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);



class DateParserFormatter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__.NgbDateParserFormatter {
    /**
     * The default implementation uses non-strict type checking and expects `null` to be returned if the value can't be parsed.
     */
    parse(value) {
        const date = value ? (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(value, 'dd.MM.yyyy', new Date()) : null;
        if (date) {
            return {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate(),
            };
        }
        return null;
    }
    /**
     * The default implementation uses non-strict type checking and expects an empty string to be returned if the given date is `null`.
     */
    format(date) {
        return date
            ? (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(date.year, date.month - 1, date.day), 'dd.MM.yyyy')
            : '';
    }
}
DateParserFormatter.ɵfac = /*@__PURE__*/ function () { let ɵDateParserFormatter_BaseFactory; return function DateParserFormatter_Factory(t) { return (ɵDateParserFormatter_BaseFactory || (ɵDateParserFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](DateParserFormatter)))(t || DateParserFormatter); }; }();
DateParserFormatter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DateParserFormatter, factory: DateParserFormatter.ɵfac });


/***/ }),

/***/ 2741:
/*!*************************************************!*\
  !*** ./src/app/shared/services/i18n.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I18nService": () => (/* binding */ I18nService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 1303);



const LANGUAGES = ['de-CH', 'fr-CH'];
const FALLBACK_LANGUAGE = LANGUAGES[0];
class I18nService {
    constructor(translate, storage) {
        this.translate = translate;
        this.storage = storage;
    }
    initialize() {
        this.translate.setDefaultLang(FALLBACK_LANGUAGE);
        this.translate.use(this.detectLanguage());
    }
    /**
     * Detect the user's language using the following priorities:
     *   1. Document's HTML lang attribute
     *   2. Language provided in localStorage
     *   3. Browser's language
     *   4. Fallback language
     */
    detectLanguage() {
        if (!this.detectedLanguage) {
            this.detectedLanguage =
                this.getDocumentLanguage() ||
                    this.getStoredLanguage() ||
                    this.getBrowserLanguage() ||
                    FALLBACK_LANGUAGE;
        }
        return this.detectedLanguage;
    }
    getLocalizedLanguage(language) {
        language = LANGUAGES.find((l) => l === `${(language || '').toLowerCase()}-CH`);
        return language ? language : FALLBACK_LANGUAGE;
    }
    getDocumentLanguage() {
        const langElement = document.querySelector('[lang]');
        return this.normalizeLanguage(langElement && langElement.lang);
    }
    getStoredLanguage() {
        return this.normalizeLanguage(this.storage.getLanguage());
    }
    getBrowserLanguage() {
        return this.normalizeLanguage(this.translate.getBrowserLang());
    }
    normalizeLanguage(lang) {
        lang = (lang || '').split('-')[0];
        return (lang && LANGUAGES.find((l) => lang === l.split('-')[0])) || null;
    }
}
I18nService.ɵfac = function I18nService_Factory(t) { return new (t || I18nService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService)); };
I18nService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: I18nService, factory: I18nService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2024:
/*!****************************************************!*\
  !*** ./src/app/shared/services/loading-service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2787);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2428);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var _utils_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observable */ 1558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);




const DEFAULT_CONTEXT = 'default';
class LoadingService {
    constructor() {
        this.action$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.loadingCounts$ = this.action$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.scan)((counts, { action, context }) => {
            switch (action) {
                case 'increment':
                    counts[context] = (counts[context] || 0) + 1;
                    return counts;
                case 'decrement':
                    counts[context] = Math.max(0, (counts[context] || 0) - 1);
                    return counts;
                default:
                    return counts;
            }
        }, {}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)({}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.multicast)(() => new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject(1)) // Make it hot
        );
        this.loading$ = this.loading();
        this.loadingCountsSub = this
            .loadingCounts$.connect();
    }
    ngOnDestroy() {
        this.loadingCountsSub.unsubscribe();
    }
    loading(context = DEFAULT_CONTEXT) {
        return this.loadingCounts$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.pluck)(context), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(nonZero), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)());
    }
    load(source$, context = DEFAULT_CONTEXT) {
        return source$.pipe((0,_utils_observable__WEBPACK_IMPORTED_MODULE_0__.prepare)(this.incrementLoadingCount(context)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(this.decrementLoadingCount(context)));
    }
    incrementLoadingCount(context) {
        return () => this.action$.next({ action: 'increment', context });
    }
    decrementLoadingCount(context) {
        return () => this.action$.next({ action: 'decrement', context });
    }
}
LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(); };
LoadingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });
function nonZero(value) {
    return (value || 0) !== 0;
}


/***/ }),

/***/ 2671:
/*!*************************************************!*\
  !*** ./src/app/shared/services/rest.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestService": () => (/* binding */ RestService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _utils_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/decode */ 8108);


class RestService {
    constructor(http, settings, codec, resourcePath) {
        this.http = http;
        this.settings = settings;
        this.codec = codec;
        this.resourcePath = resourcePath;
    }
    get(id, options) {
        return this.http
            .get(`${this.baseUrl}/${id}`, options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((0,_utils_decode__WEBPACK_IMPORTED_MODULE_0__.decode)(this.codec)));
    }
    getList(options) {
        return this.http
            .get(`${this.baseUrl}/`, options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((0,_utils_decode__WEBPACK_IMPORTED_MODULE_0__.decodeArray)(this.codec)));
    }
    get baseUrl() {
        return `${this.settings.apiUrl}/${this.resourcePath}`;
    }
}


/***/ }),

/***/ 1303:
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const LANGUAGE_KEY = 'uiCulture';
const ACCESS_TOKEN_KEY = 'CLX.LoginToken';
const REFRESH_TOKEN_KEY = 'CLX.RefreshToken';
const TOKEN_EXPIRE_KEY = 'CLX.TokenExpire';
class StorageService {
    getLanguage() {
        return this.getValue(LANGUAGE_KEY);
    }
    getAccessToken() {
        const token = this.getValue(ACCESS_TOKEN_KEY);
        return token ? token.replace(/^\"+|\"+$/g, '') : null;
    }
    getRefreshToken() {
        return this.getValue(REFRESH_TOKEN_KEY);
    }
    setToken(accessToken, refreshToken) {
        this.setValue(ACCESS_TOKEN_KEY, accessToken);
        this.setValue(REFRESH_TOKEN_KEY, refreshToken);
    }
    getTokenExpire() {
        return this.getValue(TOKEN_EXPIRE_KEY);
    }
    getPayload() {
        const token = this.getAccessToken();
        const base64Url = token ? token.split('.')[1] : null;
        const base64 = base64Url
            ? base64Url.replace('-', '+').replace('_', '/')
            : null;
        return JSON.parse(window.atob(base64 ? base64 : ''));
    }
    getValue(key) {
        return sessionStorage.getItem(key) || localStorage.getItem(key);
    }
    setValue(key, value) {
        if (value == null) {
            sessionStorage.removeItem(key);
        }
        else {
            sessionStorage.setItem(key, value);
        }
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 622:
/*!*************************************************************!*\
  !*** ./src/app/shared/services/teacher-resource.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherResourceService": () => (/* binding */ TeacherResourceService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _utils_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/decode */ 8108);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest.service */ 2671);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings */ 8029);
/* harmony import */ var _models_teacher_resource_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/teacher-resource.model */ 4743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ 629);










/**
 * Don't use this service to load presence types in
 * components/services, use the `PresenceTypesService` instead, that
 * caches these entries and loads them only once throughout the
 * application.
 */
class TeacherResourceService extends _rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService {
    constructor(http, settings, authService) {
        super(http, settings, _models_teacher_resource_model__WEBPACK_IMPORTED_MODULE_3__.TeacherResource, 'TeacherResources');
        this.authService = authService;
    }
    getTeacherName(id) {
        if (id == null)
            return new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
        let params = {
            //'fields': ["Id", "FullName"].join(','),
            'filter.TeacherId': `=${id}`,
        };
        return this.http.get(`${this.baseUrl}/`, { params: params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(v => console.log('get  name', v), e => console.log('error1', e)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(v => {
            return (0,_utils_decode__WEBPACK_IMPORTED_MODULE_0__.decodeArray)(this.codec)(v);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(v => console.log('name received'), e => console.log('error2', e)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(v => v[0].FullName));
    }
}
TeacherResourceService.ɵfac = function TeacherResourceService_Factory(t) { return new (t || TeacherResourceService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_settings__WEBPACK_IMPORTED_MODULE_2__.SETTINGS), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService)); };
TeacherResourceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: TeacherResourceService, factory: TeacherResourceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8893:
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/teacher-substitution.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherSubstitutionService": () => (/* binding */ TeacherSubstitutionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9361);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 4514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _utils_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/decode */ 8108);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest.service */ 2671);
/* harmony import */ var _typeahead_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typeahead-rest.service */ 109);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings */ 8029);
/* harmony import */ var _models_teacher_substitution_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/teacher-substitution.model */ 6263);
/* harmony import */ var _models_teacher_resource_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/teacher-resource.model */ 4743);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/date */ 6316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading-service */ 2024);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.service */ 629);















/**
 * Don't use this service to load presence types in
 * components/services, use the `PresenceTypesService` instead, that
 * caches these entries and loads them only once throughout the
 * application.
 */
class TeacherSubstitutionService extends _rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService {
    constructor(loadingService, 
    //private location: Location,
    route, http, settings, authService) {
        super(http, settings, _models_teacher_substitution_model__WEBPACK_IMPORTED_MODULE_4__.TeacherSubstitution, 'TeacherSubstitutions');
        this.loadingService = loadingService;
        this.route = route;
        this.authService = authService;
        this.substitutions$ = this.getList();
        this.mySubstitutions$ = this.http.get(`${this.baseUrl}/my`, { params: { 'sort': 'DateFrom.asc' } }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((0,_utils_decode__WEBPACK_IMPORTED_MODULE_0__.decodeArray)(this.codec)));
        this.typeaheadService = new _typeahead_rest_service__WEBPACK_IMPORTED_MODULE_2__.TypeaheadRestService(http, settings, _models_teacher_resource_model__WEBPACK_IMPORTED_MODULE_5__.TeacherResource, 'TeacherResources', 'FullName', 'TeacherId');
    }
    //getPaginatedList():PaginatedEntriesService<TeacherSubstitution, TeacherSubstitutionFilter> {
    //  return new PaginatedEntriesService<TeacherSubstitution, TeacherSubstitutionFilter>(this.location, this.loadingService, this.settings, '/teachersubstitutions')
    //}
    getMyList() {
        return this.http.get(`${this.baseUrl}/my`, { params: { 'sort': 'DateFrom.asc' } }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((0,_utils_decode__WEBPACK_IMPORTED_MODULE_0__.decodeArray)(this.codec)));
    }
    getCurrentList() {
        return this.http.get(`${this.baseUrl}/current`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((0,_utils_decode__WEBPACK_IMPORTED_MODULE_0__.decodeArray)(this.codec)));
    }
    getAdminList() {
        let date = new Date();
        let date2 = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
        let dateFromISO = new Date(date2.setUTCDate(date2.getUTCDate())).toISOString().split('.')[0];
        return this.http.get(`${this.baseUrl}/`, { params: { limit: 9999, 'filter.DateTo': `!<${dateFromISO}` } }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((0,_utils_decode__WEBPACK_IMPORTED_MODULE_0__.decodeArray)(this.codec)));
    }
    edit(substitutionId, dateFrom, dateTo, remarks) {
        let body = {
            'SubstitutionIds': substitutionId ? [substitutionId] : null,
            'DateFrom': (0,_utils_date__WEBPACK_IMPORTED_MODULE_6__.formatISOLocalDate)(dateFrom),
            'DateTo': (0,_utils_date__WEBPACK_IMPORTED_MODULE_6__.formatISOLocalDate)(dateTo),
            'Remarks': remarks
        };
        return this.http.put(`${this.baseUrl}/set`, body, { responseType: "json" }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)(undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.share)());
    }
    create(holderId, substituteId, from, to, remarks) {
        let body = {
            'HolderId': holderId,
            'SubstituteIds': substituteId ? [substituteId] : null,
            'DateFrom': (0,_utils_date__WEBPACK_IMPORTED_MODULE_6__.formatISOLocalDate)(from),
            'DateTo': (0,_utils_date__WEBPACK_IMPORTED_MODULE_6__.formatISOLocalDate)(to),
            'Remarks': remarks
        };
        return this.http.put(`${this.baseUrl}/new`, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)(undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.share)());
    }
    delete(substitutionId) {
        let body = {
            'SubsititutionIds': substitutionId ? [substitutionId] : null
        };
        return this.http.put(`${this.baseUrl}/revoke`, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)(undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.share)());
    }
    start(substitutionId) {
        var _a;
        let oAuthUrl =  this.settings.oAuthUrl;// this.authService.oAuthUrl;
        let webmoduleRedirectUrl = window.location.pathname + window.location.hash;
        let body = {
            'access_token': (_a = this.authService.accessToken) !== null && _a !== void 0 ? _a : "",
        };
        if (this.settings.oAuthRedirectUrl) {
            body['redirect_uri'] = this.settings.oAuthRedirectUrl;
        }
        let params = new URLSearchParams({
            'webModuleRedirectUri': webmoduleRedirectUrl,
        });
        let url = `${oAuthUrl}/Authorization/Substitutions/${substitutionId}/start?${params.toString()}`;
        this.postFormData(url, body);
        return new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable();
    }
    stop(substitutionId) {
        var _a;
        let oAuthUrl = this.settings.oAuthUrl;//this.authService.oAuthUrl;
        let webmoduleRedirectUrl = window.location.pathname + window.location.hash;
        let body = {
            'access_token': (_a = this.authService.accessToken) !== null && _a !== void 0 ? _a : "",
        };
        if (this.settings.oAuthRedirectUrl) {
            body['redirect_uri'] = this.settings.oAuthRedirectUrl;
        }
        let params = new URLSearchParams({
            'moduleRedirectUrl': window.location.hash.substring(1),
            'webModuleRedirectUri': webmoduleRedirectUrl,
        });
        let url = `${oAuthUrl}/Authorization/Substitutions/${substitutionId}/stop?${params.toString()}`;
        this.postFormData(url, body);
        return new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable();
    }
    start2(substitutionId) {
        let oAuthUrl = this.authService.oAuthUrl;
        let body = {
            "access_token": this.authService.accessToken
        };
        return this.http.put(`${oAuthUrl}/Authorization/Substitutions/${substitutionId}/start`, body, { observe: "response", responseType: "json" }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(v => {
            if (v.ok) {
                this.authService.setTokenResponse(v.body);
                console.log("Substitution Started", v.body);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)(undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.share)());
    }
    stop2(substitutionId) {
        let oAuthUrl = this.authService.oAuthUrl;
        let body = {
            "access_token": this.authService.accessToken
        };
        return this.http.put(`${oAuthUrl}/Authorization/Substitutions/${substitutionId}/stop`, body, { observe: "response", responseType: "json" }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(v => {
            if (v.ok) {
                this.authService.setTokenResponse(v.body);
                console.log("Substitution Stopped");
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)(undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.share)());
    }
    postFormData(url, data) {
        let formElement = document.createElement('form');
        formElement.setAttribute('target', '_self');
        formElement.setAttribute('action', url);
        formElement.setAttribute('method', 'POST');
        formElement.style.visibility = 'hidden';
        for (let [key, value] of Object.entries(data)) {
            let inputElement = document.createElement('input');
            inputElement.setAttribute('type', 'text');
            inputElement.setAttribute('name', key);
            inputElement.setAttribute('value', value);
            formElement.appendChild(inputElement);
        }
        document.body.appendChild(formElement);
        formElement.submit();
    }
}
TeacherSubstitutionService.ɵfac = function TeacherSubstitutionService_Factory(t) { return new (t || TeacherSubstitutionService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_settings__WEBPACK_IMPORTED_MODULE_3__.SETTINGS), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService)); };
TeacherSubstitutionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({ token: TeacherSubstitutionService, factory: TeacherSubstitutionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 109:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/typeahead-rest.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpParams": () => (/* binding */ HttpParams),
/* harmony export */   "TypeaheadRestService": () => (/* binding */ TypeaheadRestService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var io_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! io-ts */ 9450);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/types */ 9975);
/* harmony import */ var _utils_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/decode */ 8108);
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/rest.service */ 2671);





class HttpParams {
}
class TypeaheadRestService extends _services_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService {
    constructor(http, settings, codec, resourcePath, labelAttr, idAttr = 'Id') {
        super(http, settings, codec, resourcePath);
        this.labelAttr = labelAttr;
        this.idAttr = idAttr;
        this.typeaheadCodec = io_ts__WEBPACK_IMPORTED_MODULE_3__.type((0,_utils_types__WEBPACK_IMPORTED_MODULE_0__.pick)(this.codec.props, [this.idAttr, this.labelAttr]));
    }
    getTypeaheadItems(term, additionalParams) {
        const params = {
            params: {
                fields: [this.idAttr, this.labelAttr].join(','),
                [`filter.${this.labelAttr}`]: `~*${term}*`,
            },
        };
        return this.http
            .get(`${this.baseUrl}/`, additionalParams
            ? this.mergeHttpParams(params, additionalParams)
            : params)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((0,_utils_decode__WEBPACK_IMPORTED_MODULE_1__.decodeArray)(this.typeaheadCodec)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((items) => items.map((i) => ({ Key: i[this.idAttr], Value: i[this.labelAttr] }))));
    }
    getTypeaheadItemById(id) {
        return this.http
            .get(`${this.baseUrl}/${id}`, {
            params: {
                fields: [this.idAttr, this.labelAttr].join(','),
            },
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((0,_utils_decode__WEBPACK_IMPORTED_MODULE_1__.decode)(this.typeaheadCodec)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((item) => ({ Key: item[this.idAttr], Value: item[this.labelAttr] })));
    }
    mergeHttpParams(typeaheadParams, additionalParams) {
        const merged = {
            params: Object.assign(Object.assign({}, typeaheadParams.params), additionalParams.params),
        };
        if (additionalParams.params.fields) {
            merged.params.fields = typeaheadParams.params.fields.concat(',', additionalParams.params.fields);
        }
        return merged;
    }
}


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/avatar/avatar.component */ 7871);
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/spinner/spinner.component */ 2925);
/* harmony import */ var _directives_let_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/let.directive */ 1104);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-infinite-scroll */ 4503);
/* harmony import */ var _rest_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest-auth-interceptor */ 8413);
/* harmony import */ var _rest_error_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest-error-interceptor */ 3367);
/* harmony import */ var _components_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/typeahead/typeahead.component */ 6628);
/* harmony import */ var _components_date_select_date_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/date-select/date-select.component */ 2859);
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/select/select.component */ 9092);
/* harmony import */ var _pipes_person_email_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/person-email.pipe */ 4316);
/* harmony import */ var _pipes_days_difference_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/days-difference.pipe */ 8266);
/* harmony import */ var _components_resettable_input_resettable_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/resettable-input/resettable-input.component */ 368);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/safe.pipe */ 8246);
/* harmony import */ var _pipes_xss_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/xss.pipe */ 9528);
/* harmony import */ var _pipes_add_space_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/add-space.pipe */ 264);
/* harmony import */ var _components_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/multiselect/multiselect.component */ 8781);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-select/ng-select */ 8660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);

























// Components that will be exported
const components = [
    _directives_let_directive__WEBPACK_IMPORTED_MODULE_2__.LetDirective,
    _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent,
    _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_0__.AvatarComponent,
    _components_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_6__.TypeaheadComponent,
    _components_date_select_date_select_component__WEBPACK_IMPORTED_MODULE_7__.DateSelectComponent,
    _components_select_select_component__WEBPACK_IMPORTED_MODULE_8__.SelectComponent,
    _components_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_15__.MultiselectComponent,
    _pipes_person_email_pipe__WEBPACK_IMPORTED_MODULE_9__.PersonEmailPipe,
    _pipes_days_difference_pipe__WEBPACK_IMPORTED_MODULE_10__.DaysDifferencePipe,
    _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_12__.SafePipe,
    _pipes_xss_pipe__WEBPACK_IMPORTED_MODULE_13__.XssPipe,
    _pipes_add_space_pipe__WEBPACK_IMPORTED_MODULE_14__.AddSpacePipe,
];
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS, useClass: _rest_error_interceptor__WEBPACK_IMPORTED_MODULE_5__.RestErrorInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS, useClass: _rest_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__.RestAuthInterceptor, multi: true },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule.forChild(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbModule,
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__.InfiniteScrollModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__.NgSelectModule,
        ], _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__.InfiniteScrollModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__.NgSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_directives_let_directive__WEBPACK_IMPORTED_MODULE_2__.LetDirective,
        _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent,
        _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_0__.AvatarComponent,
        _components_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_6__.TypeaheadComponent,
        _components_date_select_date_select_component__WEBPACK_IMPORTED_MODULE_7__.DateSelectComponent,
        _components_select_select_component__WEBPACK_IMPORTED_MODULE_8__.SelectComponent,
        _components_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_15__.MultiselectComponent,
        _pipes_person_email_pipe__WEBPACK_IMPORTED_MODULE_9__.PersonEmailPipe,
        _pipes_days_difference_pipe__WEBPACK_IMPORTED_MODULE_10__.DaysDifferencePipe,
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_12__.SafePipe,
        _pipes_xss_pipe__WEBPACK_IMPORTED_MODULE_13__.XssPipe,
        _pipes_add_space_pipe__WEBPACK_IMPORTED_MODULE_14__.AddSpacePipe, _components_resettable_input_resettable_input_component__WEBPACK_IMPORTED_MODULE_11__.ResettableInputComponent,
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_12__.SafePipe,
        _pipes_xss_pipe__WEBPACK_IMPORTED_MODULE_13__.XssPipe,
        _pipes_add_space_pipe__WEBPACK_IMPORTED_MODULE_14__.AddSpacePipe,
        _components_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_15__.MultiselectComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__.InfiniteScrollModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__.NgSelectModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__.InfiniteScrollModule, _directives_let_directive__WEBPACK_IMPORTED_MODULE_2__.LetDirective,
        _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent,
        _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_0__.AvatarComponent,
        _components_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_6__.TypeaheadComponent,
        _components_date_select_date_select_component__WEBPACK_IMPORTED_MODULE_7__.DateSelectComponent,
        _components_select_select_component__WEBPACK_IMPORTED_MODULE_8__.SelectComponent,
        _components_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_15__.MultiselectComponent,
        _pipes_person_email_pipe__WEBPACK_IMPORTED_MODULE_9__.PersonEmailPipe,
        _pipes_days_difference_pipe__WEBPACK_IMPORTED_MODULE_10__.DaysDifferencePipe,
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_12__.SafePipe,
        _pipes_xss_pipe__WEBPACK_IMPORTED_MODULE_13__.XssPipe,
        _pipes_add_space_pipe__WEBPACK_IMPORTED_MODULE_14__.AddSpacePipe, _components_resettable_input_resettable_input_component__WEBPACK_IMPORTED_MODULE_11__.ResettableInputComponent,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__.NgSelectModule] }); })();


/***/ }),

/***/ 1261:
/*!*******************************************!*\
  !*** ./src/app/shared/tokens/dom-apis.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NAVIGATOR": () => (/* binding */ NAVIGATOR)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const NAVIGATOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Navigator API', {
    providedIn: 'root',
    factory: () => navigator,
});


/***/ }),

/***/ 6316:
/*!**************************************!*\
  !*** ./src/app/shared/utils/date.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatISOLocalDate": () => (/* binding */ formatISOLocalDate),
/* harmony export */   "formatISOLocalDateTime": () => (/* binding */ formatISOLocalDateTime),
/* harmony export */   "formatISOUTC": () => (/* binding */ formatISOUTC),
/* harmony export */   "parseISOLocalDate": () => (/* binding */ parseISOLocalDate),
/* harmony export */   "parseISOLocalDateTime": () => (/* binding */ parseISOLocalDateTime)
/* harmony export */ });
/**
 * The api provides dates without timezone;
 * to prevent problems, the date string is parsed manually.
 * See https://stackoverflow.com/questions/33908299/javascript-parse-a-string-to-date-as-local-time-zone/33909265#33909265
 */
function parseISOLocalDateTime(dateString) {
    const dateArray = dateString.split(/\D/).map((d) => Number(d));
    return new Date(dateArray[0], dateArray[1] - 1, dateArray[2], dateArray[3], dateArray[4], dateArray[5]);
}
/**
 * The api provides dates without time;
 * to prevent problems, the date string is parsed manually.
 * See https://stackoverflow.com/questions/33908299/javascript-parse-a-string-to-date-as-local-time-zone/33909265#33909265
 */
function parseISOLocalDate(dateString) {
    const dateArray = dateString.split(/\D/).map((d) => Number(d));
    return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
}
/**
 * The api provides dates without timezone;
 * to prevent problems, the date string is formatted manually.
 * See https://stackoverflow.com/questions/33908299/javascript-parse-a-string-to-date-as-local-time-zone/33909265#33909265
 */
function formatISOLocalDateTime(date) {
    return (formatISOLocalDate(date) +
        `T${zeroPadding(date.getHours())}:${zeroPadding(date.getMinutes())}:${zeroPadding(date.getSeconds())}`);
}
/**
 * The api provides dates without time;
 * to prevent problems, the date string is formatted manually.
 * See https://stackoverflow.com/questions/33908299/javascript-parse-a-string-to-date-as-local-time-zone/33909265#33909265
 */
function formatISOLocalDate(date) {
    return `${date.getFullYear()}-${zeroPadding(date.getMonth() + 1)}-${zeroPadding(date.getDate())}`;
}
function formatISOUTC(date) {
    return `${date.getUTCFullYear()}-${zeroPadding(date.getUTCMonth() + 1)}-${zeroPadding(date.getUTCDate())}`;
}
function zeroPadding(value) {
    return ('0' + value).slice(-2);
}


/***/ }),

/***/ 8108:
/*!****************************************!*\
  !*** ./src/app/shared/utils/decode.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecodeError": () => (/* binding */ DecodeError),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "decodeArray": () => (/* binding */ decodeArray)
/* harmony export */ });
/* harmony import */ var io_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! io-ts */ 9450);
/* harmony import */ var fp_ts_es6_pipeable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fp-ts/es6/pipeable */ 3035);
/* harmony import */ var fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fp-ts/es6/Either */ 1633);
/* harmony import */ var io_ts_es6_PathReporter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! io-ts/es6/PathReporter */ 4726);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);





class DecodeError extends Error {
    constructor() {
        super(...arguments);
        this.name = 'DecodeError';
    }
}
/**
 * Decode JSON data using the given io-st type (i.e. codec), throws a
 * `DecodeError` if the data is not valid.
 *
 * Usage:
 *   const Foo = t.type({
 *     foo: t.string
 *   });
 *   decode(Foo)({ foo: 'bar' }).subscribe(result => ...)
 *
 * Example using HttpClient:
 *   this.http.get(...).pipe(switchMap(decode(Foo))).subscribe(...)
 */
function decode(codec) {
    return (json) => {
        return (0,fp_ts_es6_pipeable__WEBPACK_IMPORTED_MODULE_0__.pipe)(codec.decode(json), (0,fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_1__.fold)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(new DecodeError(io_ts_es6_PathReporter__WEBPACK_IMPORTED_MODULE_3__.PathReporter.report((0,fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_1__.left)(error)).join('\n'))), (data) => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(data)));
    };
}
/**
 * Convenience function, equivalent to calling `decode(t.array(X))`,
 * but without having to import io-ts: `decodeArray(X)`.
 */
function decodeArray(codec) {
    return decode(io_ts__WEBPACK_IMPORTED_MODULE_5__.array(codec));
}


/***/ }),

/***/ 3978:
/*!****************************************!*\
  !*** ./src/app/shared/utils/filter.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isInstanceOf": () => (/* binding */ isInstanceOf),
/* harmony export */   "isTruthy": () => (/* binding */ isTruthy),
/* harmony export */   "longerOrEqual": () => (/* binding */ longerOrEqual),
/* harmony export */   "nonZero": () => (/* binding */ nonZero),
/* harmony export */   "not": () => (/* binding */ not),
/* harmony export */   "notNull": () => (/* binding */ notNull)
/* harmony export */ });
function nonZero(value) {
    return value !== 0;
}
function notNull(arg) {
    return arg !== null;
}
function not(fn) {
    return (arg) => !fn(arg);
}
function longerOrEqual(length) {
    return (value) => value.length >= length;
}
function isTruthy(value) {
    return Boolean(value);
}
function isInstanceOf(type) {
    // tslint:disable-next-line
    return function (value) {
        return value instanceof type;
    };
}


/***/ }),

/***/ 1558:
/*!********************************************!*\
  !*** ./src/app/shared/utils/observable.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "catch404": () => (/* binding */ catch404),
/* harmony export */   "log": () => (/* binding */ log),
/* harmony export */   "prepare": () => (/* binding */ prepare)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8759);



function catch404(returnValue) {
    return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)((error) => {
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse && error.status === 404) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(returnValue || null);
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }
    });
}
/**
 * For debugging purposes, logs message an value for each value in the
 * stream, e.g.:
 *   foo$.pipe(log('foo$')).subscribe()
 */
function log(message = null) {
    return (input$) => input$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((x) => (message ? console.log(message, x) : console.log(x))));
}
/**
 * Calls a callback when an observable gets subscribed, e.g.:
 *   foo$.pipe(prepare(() => console.log('subscribed')))
 */
function prepare(callback) {
    return (source) => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.defer)(() => {
        callback();
        return source;
    });
}


/***/ }),

/***/ 9975:
/*!***************************************!*\
  !*** ./src/app/shared/utils/types.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pick": () => (/* binding */ pick)
/* harmony export */ });
/**
 * Equivalent to TypeScript's Pick<T, K>, to be used with io-ts types
 * like this:
 *
 * const Student = t.type({
 *   Id: t.number,
 *   FullName: t.string,
 *   Email: t.string
 * })
 * const PartialStudent = t.type(pick(Student.props, ['Id', 'FullName']))
 *
 * Important note: this solution does not fail for unexisting
 * properties at compile-time, see:
 * https://github.com/gcanti/io-ts/issues/300
 */
function pick(o, keys) {
    return keys.reduce((acc, k) => (Object.assign(Object.assign({}, acc), { [k]: o[k] })), {});
}


/***/ }),

/***/ 1249:
/*!**********************************************!*\
  !*** ./src/app/unauthenticated.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnauthenticatedComponent": () => (/* binding */ UnauthenticatedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 3935);


class UnauthenticatedComponent {
    constructor() { }
    ngOnInit() { }
}
UnauthenticatedComponent.ɵfac = function UnauthenticatedComponent_Factory(t) { return new (t || UnauthenticatedComponent)(); };
UnauthenticatedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnauthenticatedComponent, selectors: [["erz-unauthenticated"]], decls: 4, vars: 3, consts: [[1, "erz-container"], [1, "alert", "alert-danger", "my-3"]], template: function UnauthenticatedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "unauthenticated.message"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




__webpack_require__.p =
    window.stellvertretung.settings.scriptsAndAssetsPath + '/';
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map