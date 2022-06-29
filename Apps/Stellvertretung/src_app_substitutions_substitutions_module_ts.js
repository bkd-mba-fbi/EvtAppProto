"use strict";
(self["webpackChunkstellvertretung"] = self["webpackChunkstellvertretung"] || []).push([["src_app_substitutions_substitutions_module_ts"],{

/***/ 3947:
/*!*************************************!*\
  !*** ./src/app/auth.admin.guard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthAdminGuard": () => (/* binding */ AuthAdminGuard)
/* harmony export */ });
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/auth.service */ 629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);




class AuthAdminGuard {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    canActivate(next, state) {
        if (this.auth.isAuthenticated && this.auth.hasRole(_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.SUBSTITUTE_ADMINISTRATOR_ROLE)) {
            return true;
        }
        else {
            this.router.navigate(['/unauthenticated']);
            return false;
        }
    }
}
AuthAdminGuard.ɵfac = function AuthAdminGuard_Factory(t) { return new (t || AuthAdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AuthAdminGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthAdminGuard, factory: AuthAdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/substitutions/components/page-admin-substitution-create/page-admin-substitution-create.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAdminSubstitutionCreateComponent": () => (/* binding */ PageAdminSubstitutionCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var _substitution_create_substitution_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../substitution-create/substitution-create.component */ 6956);





class PageAdminSubstitutionCreateComponent {
    constructor(route, router, teacherSubstitutionService, changeDetector, authService) {
        this.route = route;
        this.router = router;
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.changeDetector = changeDetector;
        this.authService = authService;
    }
    ngOnInit() {
    }
    navigateToList() {
        this.router.navigate(['/substitutions/admin']);
    }
}
PageAdminSubstitutionCreateComponent.ɵfac = function PageAdminSubstitutionCreateComponent_Factory(t) { return new (t || PageAdminSubstitutionCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
PageAdminSubstitutionCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageAdminSubstitutionCreateComponent, selectors: [["erz-page-admin-substitution-create"]], decls: 2, vars: 0, consts: [[1, "erz-container-limited"], [3, "cancel", "save"]], template: function PageAdminSubstitutionCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "erz-substitution-create", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cancel", function PageAdminSubstitutionCreateComponent_Template_erz_substitution_create_cancel_1_listener() { return ctx.navigateToList(); })("save", function PageAdminSubstitutionCreateComponent_Template_erz_substitution_create_save_1_listener() { return ctx.navigateToList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } }, directives: [_substitution_create_substitution_create_component__WEBPACK_IMPORTED_MODULE_2__.SubstitutionCreateComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWFkbWluLXN1YnN0aXR1dGlvbi1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7782:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/substitutions/components/page-admin-substitution-edit/page-admin-substitution-edit.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAdminSubstitutionEditComponent": () => (/* binding */ PageAdminSubstitutionEditComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/spinner/spinner.component */ 2925);
/* harmony import */ var _substitution_edit_substitution_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../substitution-edit/substitution-edit.component */ 3603);







function PageAdminSubstitutionEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "erz-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class PageAdminSubstitutionEditComponent {
    constructor(route, router, teacherSubstitutionService, changeDetector) {
        this.route = route;
        this.router = router;
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.changeDetector = changeDetector;
        this.isLoading = true;
    }
    ngOnInit() {
        this.substitution$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(v => {
            this.isLoading = true;
            this.changeDetector.markForCheck();
        }), 
        //delay(100),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(v => v.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(v => parseInt(v)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(id => this.teacherSubstitutionService.get(id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(v => {
            this.isLoading = false;
            this.changeDetector.markForCheck();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.share)());
        this.substitution$.subscribe(v => null);
    }
    navigateToList() {
        this.router.navigate(['/substitutions/admin']);
    }
}
PageAdminSubstitutionEditComponent.ɵfac = function PageAdminSubstitutionEditComponent_Factory(t) { return new (t || PageAdminSubstitutionEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
PageAdminSubstitutionEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageAdminSubstitutionEditComponent, selectors: [["erz-page-admin-substitution-edit"]], decls: 4, vars: 6, consts: [[4, "ngIf"], [1, "erz-container-limited"], [3, "substitution", "save", "cancel", "delete"]], template: function PageAdminSubstitutionEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PageAdminSubstitutionEditComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "erz-substitution-edit", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("save", function PageAdminSubstitutionEditComponent_Template_erz_substitution_edit_save_2_listener() { return ctx.navigateToList(); })("cancel", function PageAdminSubstitutionEditComponent_Template_erz_substitution_edit_cancel_2_listener() { return ctx.navigateToList(); })("delete", function PageAdminSubstitutionEditComponent_Template_erz_substitution_edit_delete_2_listener() { return ctx.navigateToList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.isLoading ? "none" : "block");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("substitution", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, ctx.substitution$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent, _substitution_edit_substitution_edit_component__WEBPACK_IMPORTED_MODULE_2__.SubstitutionEditComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWFkbWluLXN1YnN0aXR1dGlvbi1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9492:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/substitutions/components/page-admin-substitution-list/page-admin-substitution-list.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAdminSubstitutionListComponent": () => (/* binding */ PageAdminSubstitutionListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var _substitution_list_admin_substitution_list_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../substitution-list-admin/substitution-list-admin.component */ 2655);





class PageAdminSubstitutionListComponent {
    constructor(route, authService, router, teacherSubstitutionService, changeDetector) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.changeDetector = changeDetector;
        this.editLink = v => ['admin', 'edit', v];
    }
    sortBy(column) {
        this.sortColumn = column;
        this.changeDetector.markForCheck();
    }
    ngOnInit() {
    }
}
PageAdminSubstitutionListComponent.ɵfac = function PageAdminSubstitutionListComponent_Factory(t) { return new (t || PageAdminSubstitutionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_1__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
PageAdminSubstitutionListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageAdminSubstitutionListComponent, selectors: [["erz-page-admin-substitution-list"]], decls: 1, vars: 4, consts: [[3, "filter", "sort-column", "substitutions$", "edit-link"]], template: function PageAdminSubstitutionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "erz-substitution-list-admin", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("filter", ctx.searchString)("sort-column", ctx.sortColumn)("substitutions$", ctx.teacherSubstitutionService.getAdminList())("edit-link", ctx.editLink);
    } }, directives: [_substitution_list_admin_substitution_list_admin_component__WEBPACK_IMPORTED_MODULE_2__.SubstitutionListAdminComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWFkbWluLXN1YnN0aXR1dGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8852:
/*!*********************************************************************************************************!*\
  !*** ./src/app/substitutions/components/page-substitution-create/page-substitution-create.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageSubstitutionCreateComponent": () => (/* binding */ PageSubstitutionCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var _substitution_create_substitution_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../substitution-create/substitution-create.component */ 6956);





class PageSubstitutionCreateComponent {
    constructor(route, router, teacherSubstitutionService, changeDetector, authService) {
        this.route = route;
        this.router = router;
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.changeDetector = changeDetector;
        this.authService = authService;
    }
    ngOnInit() {
    }
    navigateToList() {
        this.router.navigate(['/substitutions/assign']);
    }
}
PageSubstitutionCreateComponent.ɵfac = function PageSubstitutionCreateComponent_Factory(t) { return new (t || PageSubstitutionCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
PageSubstitutionCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageSubstitutionCreateComponent, selectors: [["erz-page-substitution-create"]], decls: 2, vars: 1, consts: [[1, "erz-container-limited"], [3, "holderId", "cancel", "save"]], template: function PageSubstitutionCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "erz-substitution-create", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cancel", function PageSubstitutionCreateComponent_Template_erz_substitution_create_cancel_1_listener() { return ctx.navigateToList(); })("save", function PageSubstitutionCreateComponent_Template_erz_substitution_create_save_1_listener() { return ctx.navigateToList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("holderId", ctx.authService.personId);
    } }, directives: [_substitution_create_substitution_create_component__WEBPACK_IMPORTED_MODULE_2__.SubstitutionCreateComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXN1YnN0aXR1dGlvbi1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4475:
/*!*****************************************************************************************************!*\
  !*** ./src/app/substitutions/components/page-substitution-edit/page-substitution-edit.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageSubstitutionEditComponent": () => (/* binding */ PageSubstitutionEditComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/spinner/spinner.component */ 2925);
/* harmony import */ var _substitution_edit_substitution_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../substitution-edit/substitution-edit.component */ 3603);







function PageSubstitutionEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "erz-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class PageSubstitutionEditComponent {
    constructor(route, router, teacherSubstitutionService, changeDetector) {
        this.route = route;
        this.router = router;
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.changeDetector = changeDetector;
        this.isLoading = true;
    }
    ngOnInit() {
        this.substitution$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(v => {
            this.isLoading = true;
            this.changeDetector.markForCheck();
        }), 
        //delay(100),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(v => v.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(v => parseInt(v)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(id => this.teacherSubstitutionService.get(id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(v => {
            this.isLoading = false;
            this.changeDetector.markForCheck();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.share)());
        this.substitution$.subscribe(v => null);
    }
    navigateToList() {
        this.router.navigate(['/substitutions/assign']);
    }
}
PageSubstitutionEditComponent.ɵfac = function PageSubstitutionEditComponent_Factory(t) { return new (t || PageSubstitutionEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
PageSubstitutionEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageSubstitutionEditComponent, selectors: [["erz-page-substitution-edit"]], decls: 4, vars: 6, consts: [[4, "ngIf"], [1, "erz-container-limited"], [3, "substitution", "save", "cancel", "delete"]], template: function PageSubstitutionEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PageSubstitutionEditComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "erz-substitution-edit", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("save", function PageSubstitutionEditComponent_Template_erz_substitution_edit_save_2_listener() { return ctx.navigateToList(); })("cancel", function PageSubstitutionEditComponent_Template_erz_substitution_edit_cancel_2_listener() { return ctx.navigateToList(); })("delete", function PageSubstitutionEditComponent_Template_erz_substitution_edit_delete_2_listener() { return ctx.navigateToList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.isLoading ? "none" : "block");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("substitution", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, ctx.substitution$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent, _substitution_edit_substitution_edit_component__WEBPACK_IMPORTED_MODULE_2__.SubstitutionEditComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXN1YnN0aXR1dGlvbi1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1750:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/substitutions/components/page-substitution-list-current/page-substitution-list-current.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageSubstitutionListCurrentComponent": () => (/* binding */ PageSubstitutionListCurrentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var _substitution_list_current_substitution_list_current_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../substitution-list-current/substitution-list-current.component */ 1066);




class PageSubstitutionListCurrentComponent {
    constructor(route, router, teacherSubstitutionService, changeDetector) {
        this.route = route;
        this.router = router;
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.changeDetector = changeDetector;
        this.isLoading = true;
    }
    ngOnInit() {
    }
}
PageSubstitutionListCurrentComponent.ɵfac = function PageSubstitutionListCurrentComponent_Factory(t) { return new (t || PageSubstitutionListCurrentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
PageSubstitutionListCurrentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PageSubstitutionListCurrentComponent, selectors: [["erz-page-substitution-list-current"]], decls: 1, vars: 0, template: function PageSubstitutionListCurrentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "erz-substitution-list-current");
    } }, directives: [_substitution_list_current_substitution_list_current_component__WEBPACK_IMPORTED_MODULE_1__.SubstitutionListCurrentComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXN1YnN0aXR1dGlvbi1saXN0LWN1cnJlbnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9051:
/*!*****************************************************************************************************!*\
  !*** ./src/app/substitutions/components/page-substitution-list/page-substitution-list.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageSubstitutionListComponent": () => (/* binding */ PageSubstitutionListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var _substitution_list_substitution_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../substitution-list/substitution-list.component */ 6711);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 3935);






const _c0 = function () { return ["create"]; };
class PageSubstitutionListComponent {
    constructor(route, authService, router, 
    //public location: Location,
    teacherSubstitutionService, changeDetector) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.changeDetector = changeDetector;
    }
    ngOnInit() {
    }
}
PageSubstitutionListComponent.ɵfac = function PageSubstitutionListComponent_Factory(t) { return new (t || PageSubstitutionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_1__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
PageSubstitutionListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageSubstitutionListComponent, selectors: [["erz-page-substitution-list"]], decls: 10, vars: 6, consts: [[1, "container-fluid", "mt-2"], [1, "col", "d-flex", "flex-row", "pb-2", "border-bottom"], [1, "w-100", "d-flex", "align-items-center"], [1, "w-auto", "ms-3"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "material-icons"], [3, "substitutions$"]], template: function PageSubstitutionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "a", 4)(7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "erz-substitution-list", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, "page-substitution-list.title-message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("substitutions$", ctx.teacherSubstitutionService.getMyList());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _substitution_list_substitution_list_component__WEBPACK_IMPORTED_MODULE_2__.SubstitutionListComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXN1YnN0aXR1dGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6956:
/*!***********************************************************************************************!*\
  !*** ./src/app/substitutions/components/substitution-create/substitution-create.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubstitutionCreateComponent": () => (/* binding */ SubstitutionCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _shared_components_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/typeahead/typeahead.component */ 6628);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_date_select_date_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/date-select/date-select.component */ 2859);












function SubstitutionCreateComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getFormControlErrors("Substitute"), " ");
} }
function SubstitutionCreateComponent_div_10_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.getFormControlErrors("Holder"), " ");
} }
function SubstitutionCreateComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "erz-typeahead", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function SubstitutionCreateComponent_div_10_Template_erz_typeahead_valueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.holderId.setValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SubstitutionCreateComponent_div_10_div_7_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, "substitution-create.field-holder-label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 7, "substitution-create.field-holder-placeholder"))("typeaheadService", ctx_r1.teacherSubstitutionService.typeaheadService)("error", ctx_r1.showErrors && ctx_r1.holderId.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.showErrors && ctx_r1.holderId.errors);
} }
function SubstitutionCreateComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.getFormControlErrors("DateFrom"), " ");
} }
function SubstitutionCreateComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.getFormControlErrors("DateTo"), " ");
} }
function SubstitutionCreateComponent_div_34_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const errorMessage_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](errorMessage_r12);
} }
function SubstitutionCreateComponent_div_34_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SubstitutionCreateComponent_div_34_div_2_p_1_Template, 2, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const errorMessages_r10 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", errorMessages_r10);
} }
function SubstitutionCreateComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SubstitutionCreateComponent_div_34_div_2_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, ctx_r4.errorMessage$));
} }
function SubstitutionCreateComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 22);
} }
class SubstitutionCreateComponent {
    constructor(teacherSubstitutionService, authService, translateService, changeDetector) {
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.authService = authService;
        this.translateService = translateService;
        this.changeDetector = changeDetector;
        this.cancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.dateFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
        this.dateTo = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
        this.remarks = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
        this.holderId = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
        this.substituteId = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
        this.serverErrorMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
        this.showErrors = false;
        this.savingActive$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(false);
    }
    submit() {
        if (!this.form.valid) {
            this.showErrors = true;
            return;
        }
        this.savingActive$.next(true);
        this.teacherSubstitutionService.create(this.holderId.value, this.substituteId.value, this.dateFrom.value, this.dateTo.value, this.remarks.value).subscribe(v => {
            this.savingActive$.next(false);
            this.saved.emit();
        }, err => {
            this.savingActive$.next(false);
            this.showErrors = true;
            this.serverErrorMessage$.next(err.Issues.map((v) => v.Message));
        });
    }
    cancel() {
        this.cancelled.emit();
    }
    ngOnInit() {
        //this.holderId.setValue(this.authService.personId);
        this.holderId.setValue(this.holderIdInput);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            'DateFrom': this.dateFrom,
            'DateTo': this.dateTo,
            'Substitute': this.substituteId,
            'Holder': this.holderId,
            'Remarks': this.remarks
        });
        this.clientErrorMessage$ = this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(null), 
        //map(v => this.getAllFormControlErrors()),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(v => []));
        this.errorMessage$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.serverErrorMessage$, this.clientErrorMessage$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(v => { var _a, _b; return ((_a = v[0]) !== null && _a !== void 0 ? _a : []).concat((_b = v[1]) !== null && _b !== void 0 ? _b : []); }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(v => v.length == 0 ? null : v));
    }
    getAllFormControlErrors() {
        return Object.entries(this.form.controls).flatMap(([fieldName, control]) => {
            var _a;
            return Object.entries((_a = control.errors) !== null && _a !== void 0 ? _a : {}).filter(([key, value]) => value).map(([key, value]) => key).map((error) => `${this.translate(["substitution-model", fieldName])}: ${this.translate(['global', 'validation-errors', error])}`);
        });
    }
    getFormControlErrors(fieldName) {
        var _a;
        let control = this.form.get(fieldName);
        if (control == null)
            return [];
        return Object.entries((_a = control.errors) !== null && _a !== void 0 ? _a : {}).filter(([key, value]) => value).map(([key, value]) => key).map((error) => `${this.translate(['global', 'validation-errors', error])}`);
    }
    translate(path) {
        return this.translateService.instant(path.join('.'));
    }
    ngOnChanges(changes) {
        if (changes['substitution'] && this.substitution != null) {
            this.dateFrom.setValue(this.substitution.DateFrom);
            this.dateTo.setValue(this.substitution.DateTo);
            this.holderId.setValue(this.substitution.HolderId);
            this.substituteId.setValue(this.substitution.SubstituteId);
        }
    }
}
SubstitutionCreateComponent.ɵfac = function SubstitutionCreateComponent_Factory(t) { return new (t || SubstitutionCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef)); };
SubstitutionCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SubstitutionCreateComponent, selectors: [["erz-substitution-create"]], inputs: { holderIdInput: ["holderId", "holderIdInput"], substitution: "substitution" }, outputs: { cancelled: "cancel", saved: "save" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 46, vars: 48, consts: [[3, "ngSubmit"], [1, "container-fluid"], [1, "row"], [1, "form-group", "col"], [3, "placeholder", "typeaheadService", "error", "valueChange"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md-6"], [3, "placeholder", "value", "error", "valueChange"], [1, "col", "mt-3"], [1, "d-flex", "flex-row"], [1, "me-2"], [1, "material-icons"], [1, "form-control", 3, "placeholder", "value", "input"], ["type", "button", 1, "btn", "btn-secondary", "ms-auto", "text-light", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "ms-1", "d-flex", "align-items-center"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "invalid-feedback"], [1, "col", "mt-1"], ["class", "alert alert-danger mt-2", 4, "ngIf"], [1, "alert", "alert-danger", "mt-2"], [4, "ngFor", "ngForOf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function SubstitutionCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SubstitutionCreateComponent_Template_form_ngSubmit_0_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "erz-typeahead", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function SubstitutionCreateComponent_Template_erz_typeahead_valueChange_7_listener($event) { return ctx.substituteId.setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SubstitutionCreateComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SubstitutionCreateComponent_div_10_Template, 8, 9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 2)(12, "div", 7)(13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "erz-date-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function SubstitutionCreateComponent_Template_erz_date_select_valueChange_16_listener($event) { return ctx.dateFrom.setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, SubstitutionCreateComponent_div_18_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 7)(20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "erz-date-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function SubstitutionCreateComponent_Template_erz_date_select_valueChange_23_listener($event) { return ctx.dateTo.setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, SubstitutionCreateComponent_div_25_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 2)(27, "div", 9)(28, "div", 10)(29, "div", 11)(30, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function SubstitutionCreateComponent_Template_textarea_input_32_listener($event) { return ctx.remarks.setValue($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, SubstitutionCreateComponent_div_34_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 2)(36, "div", 9)(37, "div", 10)(38, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubstitutionCreateComponent_Template_button_click_38_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, SubstitutionCreateComponent_span_42_Template, 1, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](43, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 28, "substitution-create.field-substitute-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 30, "substitution-create.field-substitute-placeholder"))("typeaheadService", ctx.teacherSubstitutionService.typeaheadService)("error", ctx.showErrors && ctx.substituteId.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showErrors && ctx.substituteId.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.holderIdInput == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("error", ctx.showErrors && ctx.dateFrom.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 32, "substitution-create.field-date-from-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 34, "substitution-create.field-date-from-placeholder"))("value", ctx.dateFrom.value)("error", ctx.showErrors && ctx.dateFrom.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showErrors && ctx.dateFrom.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("error", ctx.showErrors && ctx.dateFrom.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 36, "substitution-create.field-date-to-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 38, "substitution-create.field-date-to-placeholder"))("value", ctx.dateTo.value)("error", ctx.showErrors && ctx.dateTo.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showErrors && ctx.dateTo.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("error", ctx.showErrors && ctx.remarks.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 40, "substitution-create.field-remarks-placeholder"))("value", ctx.remarks.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](40, 42, "substitution-create.cancel-button-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](43, 44, ctx.savingActive$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](45, 46, "substitution-create.save-button-label"), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _shared_components_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_2__.TypeaheadComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_date_select_date_select_component__WEBPACK_IMPORTED_MODULE_3__.DateSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe], styles: [".form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n\n.form-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnN0aXR1dGlvbi1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7QUFHSiIsImZpbGUiOiJzdWJzdGl0dXRpb24tY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xyXG59XHJcbi5mb3JtLWdyb3VwID4gbGFiZWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbn1cclxuLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 3603:
/*!*******************************************************************************************!*\
  !*** ./src/app/substitutions/components/substitution-edit/substitution-edit.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubstitutionEditComponent": () => (/* binding */ SubstitutionEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_date_select_date_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/date-select/date-select.component */ 2859);











function SubstitutionEditComponent_ng_template_0_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 27);
} }
function SubstitutionEditComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 24)(4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SubstitutionEditComponent_ng_template_0_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const modal_r5 = restoredCtx.$implicit; return modal_r5.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SubstitutionEditComponent_ng_template_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SubstitutionEditComponent_ng_template_0_span_8_Template, 1, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, "teacher-substitution-edit.confirm-delete-message"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 6, "teacher-substitution-edit.confirm-delete-cancel-button-label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 8, ctx_r1.deletingActive$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 10, "teacher-substitution-edit.confirm-delete-confirm-button-label"), " ");
} }
function SubstitutionEditComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.getFormControlErrors("DateFrom"), " ");
} }
function SubstitutionEditComponent_div_43_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const errorMessage_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](errorMessage_r12);
} }
function SubstitutionEditComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SubstitutionEditComponent_div_43_p_1_Template, 2, 1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const errorMessages_r10 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", errorMessages_r10);
} }
function SubstitutionEditComponent_span_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 27);
} }
class SubstitutionEditComponent {
    constructor(teacherSubstitutionService, translateService, modalService, changeDetector) {
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.translateService = translateService;
        this.modalService = modalService;
        this.changeDetector = changeDetector;
        this.showHolder = false;
        this.cancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.id = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
        this.dateFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
        this.dateTo = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
        this.remarks = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
        this.errorMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable();
        this.serverErrorMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
        this.showErrors = false;
        this.savingActive$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
        this.deletingActive$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    }
    submit() {
        if (!this.form.valid) {
            this.showErrors = true;
            return;
        }
        this.savingActive$.next(true);
        this.teacherSubstitutionService.edit(this.id.value, this.dateFrom.value, this.dateTo.value, this.remarks.value).subscribe(v => {
            this.savingActive$.next(false);
            this.saved.emit();
        }, err => {
            this.savingActive$.next(false);
            this.serverErrorMessage$.next(err.Issues.map((v) => v.Message));
        });
    }
    delete() {
        this.deletingActive$.next(true);
        this.teacherSubstitutionService.delete(this.id.value).subscribe(v => {
            this.deletingActive$.next(false);
            this.deleted.emit();
        }, err => {
            this.serverErrorMessage$.next(err.Issues.map((v) => v.Message));
        });
    }
    cancel() {
        this.cancelled.emit();
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            'DateFrom': this.dateFrom,
            'DateTo': this.dateTo,
            'Remarks': this.remarks
        });
        this.clientErrorMessage$ = this.form.statusChanges.pipe(
        //map(v => this.getAllFormControlErrors())
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(v => []));
        this.errorMessage$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this.serverErrorMessage$, this.clientErrorMessage$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(v => { var _a, _b; return ((_a = v[0]) !== null && _a !== void 0 ? _a : []).concat((_b = v[1]) !== null && _b !== void 0 ? _b : []); }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(v => v.length == 0 ? null : v));
    }
    getAllFormControlErrors() {
        return Object.entries(this.form.controls).flatMap(([fieldName, control]) => {
            var _a;
            return Object.entries((_a = control.errors) !== null && _a !== void 0 ? _a : {}).filter(([key, value]) => value).map(([key, value]) => key).map((error) => `${this.translate(["substitution-model", fieldName])}: ${this.translate(['global', 'validation-errors', error])}`);
        });
    }
    getFormControlErrors(fieldName) {
        var _a;
        let control = this.form.get(fieldName);
        if (control == null)
            return [];
        return Object.entries((_a = control.errors) !== null && _a !== void 0 ? _a : {}).filter(([key, value]) => value).map(([key, value]) => key).map((error) => `${this.translate(['global', 'validation-errors', error])}`);
    }
    translate(path) {
        return this.translateService.instant(path.join('.'));
    }
    ngOnChanges(changes) {
        if (changes['substitution'] && this.substitution != null) {
            this.id.setValue(this.substitution.Id);
            this.dateFrom.setValue(this.substitution.DateFrom);
            this.dateTo.setValue(this.substitution.DateTo);
            this.remarks.setValue(this.substitution.Remarks);
        }
    }
    ngOnDestroy() {
        this.modalService.dismissAll();
    }
}
SubstitutionEditComponent.ɵfac = function SubstitutionEditComponent_Factory(t) { return new (t || SubstitutionEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
SubstitutionEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SubstitutionEditComponent, selectors: [["erz-substitution-edit"]], inputs: { substitution: "substitution", showHolder: ["show-holder", "showHolder"] }, outputs: { cancelled: "cancel", saved: "save", deleted: "delete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 56, vars: 49, consts: [["deleteModal", ""], [3, "ngSubmit"], [1, "container-fluid"], [1, "row"], [1, "col"], [1, "d-flex", "flex-row"], [1, "sub-heading"], [1, "ms-auto"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "material-icons"], [1, "form-group", "col-md-6"], [3, "placeholder", "value", "error", "valueChange"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"], [1, "col", "mt-3"], [1, "me-2"], [1, "form-control", 3, "placeholder", "value", "input"], [1, "col", "mt-2"], ["class", "alert alert-danger mt-2", 4, "ngIf"], [1, "col", "mt-1"], ["type", "button", 1, "btn", "btn-secondary", "ms-auto", "text-light", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "ms-1", "d-flex", "align-items-center"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "d-flex", "align-items-center", 3, "click"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "alert", "alert-danger", "mt-2"], [4, "ngFor", "ngForOf"]], template: function SubstitutionEditComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SubstitutionEditComponent_ng_template_0_Template, 12, 12, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SubstitutionEditComponent_Template_form_ngSubmit_2_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div")(8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7)(14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SubstitutionEditComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); return ctx.modalService.open(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 3)(18, "div", 10)(19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "erz-date-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function SubstitutionEditComponent_Template_erz_date_select_valueChange_22_listener($event) { return ctx.dateFrom.setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, SubstitutionEditComponent_div_24_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 10)(26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "erz-date-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function SubstitutionEditComponent_Template_erz_date_select_valueChange_29_listener($event) { return ctx.dateTo.setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 3)(34, "div", 14)(35, "div", 5)(36, "div", 15)(37, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function SubstitutionEditComponent_Template_textarea_input_39_listener($event) { return ctx.remarks.setValue($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 3)(42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, SubstitutionEditComponent_div_43_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 3)(46, "div", 19)(47, "div", 5)(48, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SubstitutionEditComponent_Template_button_click_48_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, SubstitutionEditComponent_span_52_Template, 1, 0, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](53, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx.substitution == null ? null : ctx.substitution.Substitute) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "Title", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 29, "teacher-substitution-edit.title-holder-prefix"), " ", (tmp_1_0 = ctx.substitution == null ? null : ctx.substitution.Holder) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "Holder", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("error", ctx.showErrors && ctx.dateFrom.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 31, "teacher-substitution-edit.field-date-from-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.showErrors && ctx.dateFrom.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 33, "teacher-substitution-edit.field-date-from-placeholder"))("value", ctx.dateFrom.value)("error", ctx.showErrors && ctx.dateFrom.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showErrors && ctx.dateFrom.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("error", ctx.showErrors && ctx.dateTo.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 35, "teacher-substitution-edit.field-date-to-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.showErrors && ctx.dateTo.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 37, "teacher-substitution-edit.field-date-to-placeholder"))("value", ctx.dateTo.value)("error", ctx.showErrors && ctx.dateTo.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getFormControlErrors("DateTo"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("error", ctx.showErrors && ctx.remarks.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](40, 39, "teacher-substitution-edit.field-remarks-placeholder"))("value", ctx.remarks.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 41, ctx.errorMessage$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 43, "teacher-substitution-edit.cancel-button-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](53, 45, ctx.savingActive$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](55, 47, "teacher-substitution-edit.save-button-label"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _shared_components_date_select_date_select_component__WEBPACK_IMPORTED_MODULE_1__.DateSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: [".sub-heading[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n\n\n[_ngcontent-%COMP%]:root {\n  --stellvertretung-primary: #005189;\n  --stellvertretung-primary-hover: #004272;\n  --stellvertretung-secondary: #8a8a8a;\n  --stellvertretung-secondary-hover: #747474;\n}\n\n\n\n.error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .error[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n\n.form-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnN0aXR1dGlvbi1lZGl0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGJvb3RzdHJhcC12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FDQUE7O0VBQUE7O0FBd0NBO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7QURsQ0o7O0FDOENBOztFQUFBOztBRHBEQTs7RUFFSSxpQkFBQTtBQVlKOztBQVRBO0VBQ0ksc0JBQUE7QUFZSjs7QUFWQTtFQUNJLHFCQUFBO0FBYUo7O0FBWEE7RUFDSSxjQUFBO0FBY0oiLCJmaWxlIjoic3Vic3RpdHV0aW9uLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViLWhlYWRpbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Jvb3RzdHJhcC12YXJpYWJsZXNcIjtcclxuXHJcbi5lcnJvciBpbnB1dCxcclxuLmVycm9yIHRleHRhcmVhIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XHJcbn1cclxuLmZvcm0tZ3JvdXAgPiBsYWJlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxufVxyXG4uaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSIsIkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XHJcblxyXG4vKipcclxuICogQm9vdHN0cmFwIHZhcmlhYmxlcyBvdmVycmlkZXNcclxuICovXHJcblxyXG4vLyBkaXNhYmxlIHJlc3BvbnNpemUgZm9udCBzaXplc1xyXG4kZW5hYmxlLXJmczogZmFsc2U7XHJcblxyXG4vLyBjb250YWluZXIgcGFkZGluZ1xyXG4kY29udGFpbmVyLXBhZGRpbmcteDogMS41cmVtO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRib2R5LWJnOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiRib2R5LWNvbG9yOiByZ2IoOTYsIDk2LCA5Nik7XHJcbiR5ZWxsb3c6IHJnYigyNTUsIDE2OCwgMjApO1xyXG4kb3JhbmdlOiByZ2IoMjM5LCAxMjQsIDApO1xyXG4kYmx1ZTogcmdiKDY1LCAxMTgsIDE0NSk7XHJcbiR0ZWFsOiByZ2IoMTksIDY5LCA5Nyk7XHJcbiRncmF5OiByZ2IoMTM4LCAxMzgsIDEzOCk7XHJcbiRncmF5LWRhcms6IHJnYig1MSwgNTEsIDUxKTtcclxuXHJcbiRibHVlOiAjMDA1MTg5O1xyXG4kYmx1ZS1ob3ZlcjogIzAwNDI3MjtcclxuJGdyYXktaG92ZXI6IHJnYigxMTYsIDExNiwgMTE2KTtcclxuXHJcbiRwcmVzZW50LWNvbG9yOiAjMjhhNzQ1O1xyXG4kYWJzZW50LWNvbG9yOiAjZGMzNTQ1O1xyXG4kdW5hcHByb3ZlZC1jb2xvcjogJHllbGxvdztcclxuXHJcbi8vIEZvbnRcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtc2l6ZS1iYXNlOiAxLjVyZW07IC8vIFNlZSBhcHAvc2hhcmVkL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcclxuXHJcbi8vIFNwYWNpbmdcclxuJHNwYWNlcjogMS41cmVtOyAvLyBDb21wZW5zYXRlIGZvciB0aGUgYmFzZSBmb250XHJcblxyXG4vLyBCdXR0b25zXHJcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG46cm9vdCB7XHJcbiAgICAtLXN0ZWxsdmVydHJldHVuZy1wcmltYXJ5OiAjeyRibHVlfTtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXByaW1hcnktaG92ZXI6ICN7JGJsdWUtaG92ZXJ9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctc2Vjb25kYXJ5OiAjeyRncmF5fTtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXNlY29uZGFyeS1ob3ZlcjogI3skZ3JheS1ob3Zlcn07XHJcbn1cclxuXHJcbi8vIERyb3Bkb3duXHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAkZ3JheS0yMDA7XHJcblxyXG4vLyBUYWJsZXNcclxuJHRhYmxlLWhlYWQtYmc6ICR0YWJsZS1ib3JkZXItY29sb3I7XHJcbiR0YWJsZS1oZWFkLWNvbG9yOiAkZ3JheS02MDA7XHJcbiR0YWJsZS1ncm91cC1zZXBhcmF0b3ItY29sb3I6ICR0YWJsZS1ib3JkZXItY29sb3I7XHJcbiR0YWJsZS10aC1mb250LXdlaWdodDogbm9ybWFsO1xyXG5cclxuLyoqXHJcbiAqIEN1c3RvbSBWYXJpYWJsZXNcclxuICovXHJcblxyXG4vLyBJY29uc1xyXG4kZXJ6LWljb24tc2l6ZTogMi4ycmVtO1xyXG5cclxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4kZXJ6LWNvbnRhaW5lci1tYXgtd2lkdGg6IDk2MHB4O1xyXG4kZXJ6LWNvbnRhaW5lci1wYWRkaW5nLXg6ICRzcGFjZXI7XHJcbiRlcnotY29udGFpbmVyLXBhZGRpbmcteTogJHNwYWNlcjtcclxuJGVyei1wcmVzZW5jZS1jb250cm9sLWVudHJ5LW1pbi13aWR0aDogNDAwcHg7XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2655:
/*!*******************************************************************************************************!*\
  !*** ./src/app/substitutions/components/substitution-list-admin/substitution-list-admin.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubstitutionListAdminComponent": () => (/* binding */ SubstitutionListAdminComponent)
/* harmony export */ });
/* harmony import */ var _substitution_list_substitution_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../substitution-list/substitution-list.component */ 6711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/spinner/spinner.component */ 2925);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-infinite-scroll */ 4503);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);








function SubstitutionListAdminComponent_ng_template_0_span_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u2191");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SubstitutionListAdminComponent_ng_template_0_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u2193");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SubstitutionListAdminComponent_ng_template_0_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SubstitutionListAdminComponent_ng_template_0_span_2_span_1_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubstitutionListAdminComponent_ng_template_0_span_2_span_2_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.sortDirection);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r9.sortDirection);
} }
function SubstitutionListAdminComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubstitutionListAdminComponent_ng_template_0_Template_span_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const column_r8 = restoredCtx.column; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.sortBy(column_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubstitutionListAdminComponent_ng_template_0_span_2_Template, 3, 2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r8 = ctx.column;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", column_r8.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.sortColumn == column_r8.id);
} }
function SubstitutionListAdminComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "erz-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function SubstitutionListAdminComponent_43_ng_template_0_Template(rf, ctx) { }
function SubstitutionListAdminComponent_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SubstitutionListAdminComponent_43_ng_template_0_Template, 0, 0, "ng-template");
} }
function SubstitutionListAdminComponent_46_ng_template_0_Template(rf, ctx) { }
function SubstitutionListAdminComponent_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SubstitutionListAdminComponent_46_ng_template_0_Template, 0, 0, "ng-template");
} }
function SubstitutionListAdminComponent_49_ng_template_0_Template(rf, ctx) { }
function SubstitutionListAdminComponent_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SubstitutionListAdminComponent_49_ng_template_0_Template, 0, 0, "ng-template");
} }
function SubstitutionListAdminComponent_52_ng_template_0_Template(rf, ctx) { }
function SubstitutionListAdminComponent_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SubstitutionListAdminComponent_52_ng_template_0_Template, 0, 0, "ng-template");
} }
function SubstitutionListAdminComponent_tr_56_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34)(1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const substitution_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](substitution_r18.Remarks);
} }
const _c0 = function (a1) { return ["edit", a1]; };
function SubstitutionListAdminComponent_tr_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "wbr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, SubstitutionListAdminComponent_tr_56_div_12_Template, 5, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 33)(14, "a", 6)(15, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const substitution_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", substitution_r18.Substitute, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", substitution_r18.Holder, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 6, substitution_r18.DateFrom), "\u2013");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 8, substitution_r18.DateTo), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", substitution_r18.Remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, substitution_r18.Id));
} }
const _c1 = function () { return ["create"]; };
const _c2 = function (a1, a2, a3) { return { id: "Substitute", label: a1, sortColumn: a2, sortDirection: a3 }; };
const _c3 = function (a0) { return { column: a0 }; };
const _c4 = function (a1, a2, a3) { return { id: "Holder", label: a1, sortColumn: a2, sortDirection: a3 }; };
const _c5 = function (a1, a2, a3) { return { id: "DateFrom", label: a1, sortColumn: a2, sortDirection: a3 }; };
const _c6 = function (a1, a2, a3) { return { id: "Remarks", label: a1, sortColumn: a2, sortDirection: a3 }; };
class SubstitutionListAdminComponent extends _substitution_list_substitution_list_component__WEBPACK_IMPORTED_MODULE_0__.SubstitutionListComponent {
}
SubstitutionListAdminComponent.ɵfac = /*@__PURE__*/ function () { let ɵSubstitutionListAdminComponent_BaseFactory; return function SubstitutionListAdminComponent_Factory(t) { return (ɵSubstitutionListAdminComponent_BaseFactory || (ɵSubstitutionListAdminComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SubstitutionListAdminComponent)))(t || SubstitutionListAdminComponent); }; }();
SubstitutionListAdminComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SubstitutionListAdminComponent, selectors: [["erz-substitution-list-admin"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 58, vars: 73, consts: [["tableHead", ""], ["class", "container-fluid mt-2", 4, "ngIf"], [1, "container-fluid", "mt-2"], [1, "col", "d-flex", "flex-row", "pb-2", "border-bottom"], [1, "w-100", "d-flex", "align-items-center"], [1, "w-auto", "ms-3"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "material-icons"], [1, "col", "d-flex", "flex-row", "mt-3", "mb-3"], [1, "w-100"], [1, "search-container"], [1, "input-group"], [1, "input-group-text"], ["type", "text", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], [1, "w-auto", "ms-3", "d-block", "d-md-none"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-bs-toggle", "dropdown", 1, "btn", "btn-light"], [1, "dropdown-menu"], [1, "dropdown-item", "cursor-pointer", 3, "click"], [1, "row"], [1, "col"], [1, "table"], [1, "column-substitute", "ps-0"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "column-holder"], [1, "column-date-range"], [1, "column-remarks"], [1, "column-actions"], ["infiniteScroll", "", 3, "scrolled"], [4, "ngFor", "ngForOf"], [3, "click"], [4, "ngIf"], ["class", "d-flex flex-row d-md-block", 4, "ngIf"], [1, "column-actions", "text-end", "pe-0"], [1, "d-flex", "flex-row", "d-md-block"], [1, "material-icons", "d-md-none", "me-1"]], template: function SubstitutionListAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SubstitutionListAdminComponent_ng_template_0_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubstitutionListAdminComponent_div_2_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "a", 6)(11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "span", 12)(18, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SubstitutionListAdminComponent_Template_input_ngModelChange_20_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 14)(23, "div", 15)(24, "button", 16)(25, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "import_export");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 17)(28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubstitutionListAdminComponent_Template_a_click_28_listener() { return ctx.sortBy("Substitute"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubstitutionListAdminComponent_Template_a_click_31_listener() { return ctx.sortBy("Holder"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubstitutionListAdminComponent_Template_a_click_34_listener() { return ctx.sortBy("DateFrom"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 19)(38, "div", 20)(39, "table", 21)(40, "thead")(41, "tr")(42, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, SubstitutionListAdminComponent_43_Template, 1, 0, null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, SubstitutionListAdminComponent_46_Template, 1, 0, null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, SubstitutionListAdminComponent_49_Template, 1, 0, null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, SubstitutionListAdminComponent_52_Template, 1, 0, null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "tbody", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scrolled", function SubstitutionListAdminComponent_Template_tbody_scrolled_55_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, SubstitutionListAdminComponent_tr_56_Template, 17, 12, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](57, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.isLoading ? "none" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 26, "substitution-list-admin.count-label"), "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 28, ctx.totalCount$), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](48, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 30, "substitution-list-admin.search-placeholder"))("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.sortColumn == "Substitute");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 32, "substitution-list-admin.column-title-substitute"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.sortColumn == "Holder");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](33, 34, "substitution-list.column-title-holder"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.sortColumn == "DateFrom");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 36, "substitution-list-admin.column-title-date-range"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](53, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](49, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](44, 38, "substitution-list-admin.column-title-substitute"), ctx.sortColumn, ctx.sortDirection)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](59, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](55, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](47, 40, "substitution-list.column-title-holder"), ctx.sortColumn, ctx.sortDirection)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](65, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](61, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](50, 42, "substitution-list-admin.column-title-date-range"), ctx.sortColumn, ctx.sortDirection)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](71, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](67, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](53, 44, "substitution-list-admin.column-title-remarks"), ctx.sortColumn, ctx.sortDirection)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](57, 46, ctx.substitutions$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__.InfiniteScrollDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], styles: ["[_ngcontent-%COMP%]:root {\n  --stellvertretung-primary: #005189;\n  --stellvertretung-primary-hover: #004272;\n  --stellvertretung-secondary: #8a8a8a;\n  --stellvertretung-secondary-hover: #747474;\n}\n\nth[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nth.column-substitute[_ngcontent-%COMP%] {\n  width: 25%;\n}\nth.column-holder[_ngcontent-%COMP%] {\n  width: 25%;\n}\nth.column-date-range[_ngcontent-%COMP%] {\n  width: 20%;\n}\nth.column-remarks[_ngcontent-%COMP%] {\n  width: 30%;\n}\nth.column-actions[_ngcontent-%COMP%] {\n  width: min-content;\n}\ntd.column-remarks[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n\n@media (max-width: 768px) {\n  table.table[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%] {\n    display: contents;\n  }\n\n  table.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  table.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: auto min-content;\n    grid-template-rows: auto;\n  }\n\n  table.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    width: auto;\n  }\n\n  table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    grid-column: 1;\n    border: none;\n    padding: 2px 0;\n  }\n\n  table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    \n  }\n\n  table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    padding: 12px 0;\n    border-bottom: 1px solid #dee2e6;\n  }\n\n  table.table[_ngcontent-%COMP%]   td.column-actions[_ngcontent-%COMP%] {\n    grid-column: 2;\n    grid-row-start: 1;\n    grid-row-end: 3;\n    white-space: nowrap;\n    display: flexbox;\n    flex-direction: row;\n  }\n\n  table.table[_ngcontent-%COMP%]   td.column-substitute[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .search-container[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n}\n.search-container[_ngcontent-%COMP%] {\n  max-width: 300px;\n}\n@media (max-width: 768px) {\n  .search-container[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib290c3RyYXAtdmFyaWFibGVzLnNjc3MiLCJzdWJzdGl0dXRpb24tbGlzdC1hZG1pbi5jb21wb25lbnQuc2NzcyIsIi4uXFxzdWJzdGl0dXRpb24tbGlzdFxcc3Vic3RpdHV0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7O0VBQUE7QUF3Q0E7RUFDSSxrQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtBQ3RDSjtBRGtEQTs7RUFBQTtBRXhEQTtFQUNJLGVBQUE7QURZSjtBQ1ZBO0VBQ0ksVUFBQTtBRGFKO0FDWEE7RUFDSSxVQUFBO0FEY0o7QUNaQTtFQUNJLFVBQUE7QURlSjtBQ2JBO0VBQ0ksVUFBQTtBRGdCSjtBQ2RBO0VBQ0ksa0JBQUE7QURpQko7QUNkQTtFQUNJLHFCQUFBO0FEaUJKO0FDZEEsdUNBQUE7QUFDQTtFQUNJOztJQUdJLGlCQUFBO0VEZ0JOOztFQ2RFO0lBQ0ksYUFBQTtFRGlCTjs7RUNmRTtJQUNJLGFBQUE7SUFDQSx1Q0FBQTtJQUNBLHdCQUFBO0VEa0JOOztFQ2hCRTtJQUNJLFdBQUE7RURtQk47O0VDakJFO0lBQ0ksY0FBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFRG9CTjs7RUNsQkU7SUFDSSw2Q0FBQTtFRHFCTjs7RUNuQkU7SUFDSSxlQUFBO0lBQ0EsZ0NBQUE7RURzQk47O0VDcEJFO0lBQ0ksY0FBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFRHVCTjs7RUNyQkU7SUFDSSxpQkFBQTtFRHdCTjs7RUN0QkU7SUFDSSxlQUFBO0VEeUJOO0FBQ0Y7QUE1RkE7RUFDSSxnQkFBQTtBQThGSjtBQTNGQTtFQUNJO0lBQ0ksZUFBQTtFQThGTjtBQUNGIiwiZmlsZSI6InN1YnN0aXR1dGlvbi1saXN0LWFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcclxuXHJcbi8qKlxyXG4gKiBCb290c3RyYXAgdmFyaWFibGVzIG92ZXJyaWRlc1xyXG4gKi9cclxuXHJcbi8vIGRpc2FibGUgcmVzcG9uc2l6ZSBmb250IHNpemVzXHJcbiRlbmFibGUtcmZzOiBmYWxzZTtcclxuXHJcbi8vIGNvbnRhaW5lciBwYWRkaW5nXHJcbiRjb250YWluZXItcGFkZGluZy14OiAxLjVyZW07XHJcblxyXG4vLyBDb2xvcnNcclxuJGJvZHktYmc6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuJGJvZHktY29sb3I6IHJnYig5NiwgOTYsIDk2KTtcclxuJHllbGxvdzogcmdiKDI1NSwgMTY4LCAyMCk7XHJcbiRvcmFuZ2U6IHJnYigyMzksIDEyNCwgMCk7XHJcbiRibHVlOiByZ2IoNjUsIDExOCwgMTQ1KTtcclxuJHRlYWw6IHJnYigxOSwgNjksIDk3KTtcclxuJGdyYXk6IHJnYigxMzgsIDEzOCwgMTM4KTtcclxuJGdyYXktZGFyazogcmdiKDUxLCA1MSwgNTEpO1xyXG5cclxuJGJsdWU6ICMwMDUxODk7XHJcbiRibHVlLWhvdmVyOiAjMDA0MjcyO1xyXG4kZ3JheS1ob3ZlcjogcmdiKDExNiwgMTE2LCAxMTYpO1xyXG5cclxuJHByZXNlbnQtY29sb3I6ICMyOGE3NDU7XHJcbiRhYnNlbnQtY29sb3I6ICNkYzM1NDU7XHJcbiR1bmFwcHJvdmVkLWNvbG9yOiAkeWVsbG93O1xyXG5cclxuLy8gRm9udFxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1zaXplLWJhc2U6IDEuNXJlbTsgLy8gU2VlIGFwcC9zaGFyZWQvc3R5bGVzL3R5cG9ncmFwaHkuc2Nzc1xyXG5cclxuLy8gU3BhY2luZ1xyXG4kc3BhY2VyOiAxLjVyZW07IC8vIENvbXBlbnNhdGUgZm9yIHRoZSBiYXNlIGZvbnRcclxuXHJcbi8vIEJ1dHRvbnNcclxuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbjpyb290IHtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXByaW1hcnk6ICN7JGJsdWV9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctcHJpbWFyeS1ob3ZlcjogI3skYmx1ZS1ob3Zlcn07XHJcbiAgICAtLXN0ZWxsdmVydHJldHVuZy1zZWNvbmRhcnk6ICN7JGdyYXl9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctc2Vjb25kYXJ5LWhvdmVyOiAjeyRncmF5LWhvdmVyfTtcclxufVxyXG5cclxuLy8gRHJvcGRvd25cclxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICRncmF5LTIwMDtcclxuXHJcbi8vIFRhYmxlc1xyXG4kdGFibGUtaGVhZC1iZzogJHRhYmxlLWJvcmRlci1jb2xvcjtcclxuJHRhYmxlLWhlYWQtY29sb3I6ICRncmF5LTYwMDtcclxuJHRhYmxlLWdyb3VwLXNlcGFyYXRvci1jb2xvcjogJHRhYmxlLWJvcmRlci1jb2xvcjtcclxuJHRhYmxlLXRoLWZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblxyXG4vKipcclxuICogQ3VzdG9tIFZhcmlhYmxlc1xyXG4gKi9cclxuXHJcbi8vIEljb25zXHJcbiRlcnotaWNvbi1zaXplOiAyLjJyZW07XHJcblxyXG4vLyBDdXN0b20gdmFyaWFibGVzXHJcbiRlcnotY29udGFpbmVyLW1heC13aWR0aDogOTYwcHg7XHJcbiRlcnotY29udGFpbmVyLXBhZGRpbmcteDogJHNwYWNlcjtcclxuJGVyei1jb250YWluZXItcGFkZGluZy15OiAkc3BhY2VyO1xyXG4kZXJ6LXByZXNlbmNlLWNvbnRyb2wtZW50cnktbWluLXdpZHRoOiA0MDBweDtcclxuIiwiQGltcG9ydCBcIi4uL3N1YnN0aXR1dGlvbi1saXN0L3N1YnN0aXR1dGlvbi1saXN0LmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4uc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zZWFyY2gtY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Jvb3RzdHJhcC12YXJpYWJsZXNcIjtcclxuXHJcbnRoIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG50aC5jb2x1bW4tc3Vic3RpdHV0ZSB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcbnRoLmNvbHVtbi1ob2xkZXIge1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG50aC5jb2x1bW4tZGF0ZS1yYW5nZSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcbnRoLmNvbHVtbi1yZW1hcmtzIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxudGguY29sdW1uLWFjdGlvbnMge1xyXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xyXG59XHJcblxyXG50ZC5jb2x1bW4tcmVtYXJrcyB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuXHJcbi8qQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7Ki9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICB0YWJsZS50YWJsZSxcclxuICAgIHRhYmxlLnRhYmxlID4gdGJvZHlcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgIH1cclxuICAgIHRhYmxlLnRhYmxlID4gdGhlYWQgIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgdGFibGUudGFibGUgPiB0Ym9keSA+IHRyIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBtaW4tY29udGVudDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICB9XHJcbiAgICB0YWJsZS50YWJsZSB0aCB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICB0YWJsZS50YWJsZSB0ZCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAwO1xyXG4gICAgfVxyXG4gICAgdGFibGUudGFibGUgdHI6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIC8qYm9yZGVyLXRvcDogMXB4IHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7Ki9cclxuICAgIH1cclxuICAgIHRhYmxlLnRhYmxlIHRyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7XHJcbiAgICB9XHJcbiAgICB0YWJsZS50YWJsZSB0ZC5jb2x1bW4tYWN0aW9ucyB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleGJveDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG4gICAgdGFibGUudGFibGUgdGQuY29sdW1uLXN1YnN0aXR1dGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 1066:
/*!***********************************************************************************************************!*\
  !*** ./src/app/substitutions/components/substitution-list-current/substitution-list-current.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubstitutionListCurrentComponent": () => (/* binding */ SubstitutionListCurrentComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/spinner/spinner.component */ 2925);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);








function SubstitutionListCurrentComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "execute-substitution-list.substitution-inactive-title-message"));
} }
function SubstitutionListCurrentComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "execute-substitution-list.substitution-active-title-message"));
} }
function SubstitutionListCurrentComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "erz-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SubstitutionListCurrentComponent_div_7_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "execute-substitution-list.empty-list-message"));
} }
function SubstitutionListCurrentComponent_div_7_table_3_tr_14_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r9.substitution.Remarks);
} }
function SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_10_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 21);
} }
function SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r16.startSubstitution(item_r9.substitution.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_10_span_2_Template, 1, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("invisible", !item_r9.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, ctx_r11.workingId$) == item_r9.substitution.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 6, "execute-substitution-list.start-button-label"), " ");
} }
function SubstitutionListCurrentComponent_div_7_table_3_tr_14_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "execute-substitution-list.active-label"));
} }
function SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 21);
} }
function SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r21.stopSubstitution(item_r9.substitution.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_12_span_2_Template, 1, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("invisible", !item_r9.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, ctx_r13.workingId$) == item_r9.substitution.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 6, "execute-substitution-list.stop-button-label"), " ");
} }
function SubstitutionListCurrentComponent_div_7_table_3_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SubstitutionListCurrentComponent_div_7_table_3_tr_14_div_8_Template, 5, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_10_Template, 6, 8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SubstitutionListCurrentComponent_div_7_table_3_tr_14_span_11_Template, 3, 3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_12_Template, 6, 8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r9.substitution.Holder, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 7, item_r9.substitution.DateFrom), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 9, item_r9.substitution.DateTo), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r9.substitution.Remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.currentSubstitutionId != item_r9.substitution.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.currentSubstitutionId == item_r9.substitution.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.currentSubstitutionId == item_r9.substitution.Id);
} }
function SubstitutionListCurrentComponent_div_7_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 7)(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SubstitutionListCurrentComponent_div_7_table_3_tr_14_Template, 13, 11, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const substitutions_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx_r7.isLoading ? "none" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 6, "execute-substitution-list.column-title-holder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 8, "execute-substitution-list.column-title-date-range"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 10, "execute-substitution-list.column-title-remarks"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", substitutions_r4);
} }
function SubstitutionListCurrentComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SubstitutionListCurrentComponent_div_7_ng_template_1_Template, 3, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SubstitutionListCurrentComponent_div_7_table_3_Template, 15, 12, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const substitutions_r4 = ctx.ngIf;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", substitutions_r4.length > 0)("ngIfElse", _r5);
} }
class SubstitutionListCurrentComponent {
    constructor(teacherSubstitutionService, changeDetector, authService) {
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.changeDetector = changeDetector;
        this.authService = authService;
        this.isLoading = true;
        this.currentSubstitutionId = null;
        this.update$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(new Date());
        this.workingId$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(-1);
    }
    ngOnInit() {
        const compare = (a, b) => a == b ? 0 : (a !== null && a !== void 0 ? a : "") > (b !== null && b !== void 0 ? b : "") ? -1 : 1;
        const compareColumns = (a, b, selectors) => {
            for (let [selector, ascending] of selectors) {
                let sort = compare(selector(a), selector(b));
                if (ascending)
                    sort *= -1;
                if (sort != 0) {
                    return sort;
                }
            }
            return 0;
        };
        const createCompareColumnsFunc = (selectors) => (a, b) => compareColumns(a, b, selectors);
        //this.currentSubstitutionId = this.authService.substitutionId;
        this.substitutions$ = this.authService.substitutionId$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(v => this.currentSubstitutionId = v), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(v => this.teacherSubstitutionService.getCurrentList()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(v => Array.from(v).sort(createCompareColumnsFunc([[(w) => this.currentSubstitutionId == w.Id, false], [(w) => w.DateFrom, true]]))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(v => v.map(w => { return { substitution: w, isActive: w.DateFrom < new Date() }; })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(v => {
            this.isLoading = false;
            this.changeDetector.markForCheck();
        }));
    }
    startSubstitution(substitutionId) {
        this.workingId$.next(substitutionId);
        this.teacherSubstitutionService.start(substitutionId).subscribe(v => {
            this.currentSubstitutionId = substitutionId;
            this.changeDetector.markForCheck();
            this.update$.next(new Date());
            this.workingId$.next(-1);
        });
    }
    stopSubstitution(substitutionId) {
        this.workingId$.next(substitutionId);
        this.teacherSubstitutionService.stop(substitutionId).subscribe(v => {
            this.currentSubstitutionId = null;
            this.changeDetector.markForCheck();
            this.update$.next(new Date());
            this.workingId$.next(-1);
        });
    }
}
SubstitutionListCurrentComponent.ɵfac = function SubstitutionListCurrentComponent_Factory(t) { return new (t || SubstitutionListCurrentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
SubstitutionListCurrentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SubstitutionListCurrentComponent, selectors: [["erz-substitution-list-current"]], decls: 9, vars: 6, consts: [[1, "container-fluid", "mt-2"], [1, "row"], [1, "col"], [4, "ngIf"], ["class", "col", 4, "ngIf"], ["empty", ""], ["class", "table", 3, "display", 4, "ngIf", "ngIfElse"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "substitution-holder"], [1, "substitution-date-range"], [1, "substitution-remarks"], ["class", "d-flex flex-row d-md-block", 4, "ngIf"], [1, "substitution-actions", "text-md-end", "text-start"], ["class", "btn btn-primary", 3, "invisible", "click", 4, "ngIf"], ["class", "active-label text-success me-3", 4, "ngIf"], [1, "d-flex", "flex-row", "d-md-block"], [1, "material-icons", "d-md-none"], [1, "btn", "btn-primary", 3, "click"], [1, "d-flex", "align-items-center"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "active-label", "text-success", "me-3"]], template: function SubstitutionListCurrentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SubstitutionListCurrentComponent_p_3_Template, 3, 3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SubstitutionListCurrentComponent_p_4_Template, 3, 3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SubstitutionListCurrentComponent_div_5_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SubstitutionListCurrentComponent_div_7_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentSubstitutionId == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentSubstitutionId != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 4, ctx.substitutions$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__.SpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: ["[_ngcontent-%COMP%]:root {\n  --stellvertretung-primary: #005189;\n  --stellvertretung-primary-hover: #004272;\n  --stellvertretung-secondary: #8a8a8a;\n  --stellvertretung-secondary-hover: #747474;\n}\n\n\n@media (max-width: 768px) {\n  table.table[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%] {\n    display: contents;\n  }\n\n  table.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  table.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: auto min-content;\n    grid-template-rows: auto;\n    align-items: center;\n  }\n\n  table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    grid-column: 1;\n    border: none;\n    padding: 2px 0;\n    grid-column-start: 1;\n    grid-column-end: 2;\n  }\n\n  table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 1px solid #dee2e6;\n  }\n\n  table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    padding: 12px 0;\n    border-bottom: 1px solid #dee2e6;\n  }\n\n  table.table[_ngcontent-%COMP%]   td.substitution-actions[_ngcontent-%COMP%] {\n    display: contents;\n  }\n\n  table.table[_ngcontent-%COMP%]   td.substitution-actions[_ngcontent-%COMP%]    > .active-label[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n\n  table.table[_ngcontent-%COMP%]   td.substitution-actions[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    grid-column: 2;\n  }\n\n  table.table[_ngcontent-%COMP%]   td.substitution-substitute[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n}\ntable.table[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntable.table[_ngcontent-%COMP%]   td.substitution-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 3px;\n}\ntable.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\ntable.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 0;\n}\n.sidebar-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto min-content;\n  grid-template-rows: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib290c3RyYXAtdmFyaWFibGVzLnNjc3MiLCJzdWJzdGl0dXRpb24tbGlzdC1jdXJyZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOztFQUFBO0FBd0NBO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7QUN0Q0o7QURrREE7O0VBQUE7QUN4REEsdUNBQUE7QUFDQTtFQUNJOztJQUdJLGlCQUFBO0VBV047O0VBVEU7SUFDSSxhQUFBO0VBWU47O0VBVkU7SUFDSSxhQUFBO0lBQ0EsdUNBQUE7SUFDQSx3QkFBQTtJQUNBLG1CQUFBO0VBYU47O0VBWEU7SUFDSSxjQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtFQWNOOztFQVpFO0lBQ0ksNkJBQUE7RUFlTjs7RUFiRTtJQUNJLGVBQUE7SUFDQSxnQ0FBQTtFQWdCTjs7RUFkRTtJQUNJLGlCQUFBO0VBaUJOOztFQWZFO0lBQ0ksY0FBQTtFQWtCTjs7RUFoQkU7SUFDSSxjQUFBO0VBbUJOOztFQWhCRTtJQUNJLGlCQUFBO0VBbUJOO0FBQ0Y7QUFoQkE7RUFDSSxXQUFBO0FBa0JKO0FBZkE7RUFDSSxnQkFBQTtBQWtCSjtBQWZBOztFQUVJLGVBQUE7QUFrQko7QUFoQkE7O0VBRUksZ0JBQUE7QUFtQko7QUFoQkE7RUFDSSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSx3QkFBQTtBQW1CSiIsImZpbGUiOiJzdWJzdGl0dXRpb24tbGlzdC1jdXJyZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcclxuXHJcbi8qKlxyXG4gKiBCb290c3RyYXAgdmFyaWFibGVzIG92ZXJyaWRlc1xyXG4gKi9cclxuXHJcbi8vIGRpc2FibGUgcmVzcG9uc2l6ZSBmb250IHNpemVzXHJcbiRlbmFibGUtcmZzOiBmYWxzZTtcclxuXHJcbi8vIGNvbnRhaW5lciBwYWRkaW5nXHJcbiRjb250YWluZXItcGFkZGluZy14OiAxLjVyZW07XHJcblxyXG4vLyBDb2xvcnNcclxuJGJvZHktYmc6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuJGJvZHktY29sb3I6IHJnYig5NiwgOTYsIDk2KTtcclxuJHllbGxvdzogcmdiKDI1NSwgMTY4LCAyMCk7XHJcbiRvcmFuZ2U6IHJnYigyMzksIDEyNCwgMCk7XHJcbiRibHVlOiByZ2IoNjUsIDExOCwgMTQ1KTtcclxuJHRlYWw6IHJnYigxOSwgNjksIDk3KTtcclxuJGdyYXk6IHJnYigxMzgsIDEzOCwgMTM4KTtcclxuJGdyYXktZGFyazogcmdiKDUxLCA1MSwgNTEpO1xyXG5cclxuJGJsdWU6ICMwMDUxODk7XHJcbiRibHVlLWhvdmVyOiAjMDA0MjcyO1xyXG4kZ3JheS1ob3ZlcjogcmdiKDExNiwgMTE2LCAxMTYpO1xyXG5cclxuJHByZXNlbnQtY29sb3I6ICMyOGE3NDU7XHJcbiRhYnNlbnQtY29sb3I6ICNkYzM1NDU7XHJcbiR1bmFwcHJvdmVkLWNvbG9yOiAkeWVsbG93O1xyXG5cclxuLy8gRm9udFxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1zaXplLWJhc2U6IDEuNXJlbTsgLy8gU2VlIGFwcC9zaGFyZWQvc3R5bGVzL3R5cG9ncmFwaHkuc2Nzc1xyXG5cclxuLy8gU3BhY2luZ1xyXG4kc3BhY2VyOiAxLjVyZW07IC8vIENvbXBlbnNhdGUgZm9yIHRoZSBiYXNlIGZvbnRcclxuXHJcbi8vIEJ1dHRvbnNcclxuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbjpyb290IHtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXByaW1hcnk6ICN7JGJsdWV9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctcHJpbWFyeS1ob3ZlcjogI3skYmx1ZS1ob3Zlcn07XHJcbiAgICAtLXN0ZWxsdmVydHJldHVuZy1zZWNvbmRhcnk6ICN7JGdyYXl9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctc2Vjb25kYXJ5LWhvdmVyOiAjeyRncmF5LWhvdmVyfTtcclxufVxyXG5cclxuLy8gRHJvcGRvd25cclxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICRncmF5LTIwMDtcclxuXHJcbi8vIFRhYmxlc1xyXG4kdGFibGUtaGVhZC1iZzogJHRhYmxlLWJvcmRlci1jb2xvcjtcclxuJHRhYmxlLWhlYWQtY29sb3I6ICRncmF5LTYwMDtcclxuJHRhYmxlLWdyb3VwLXNlcGFyYXRvci1jb2xvcjogJHRhYmxlLWJvcmRlci1jb2xvcjtcclxuJHRhYmxlLXRoLWZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblxyXG4vKipcclxuICogQ3VzdG9tIFZhcmlhYmxlc1xyXG4gKi9cclxuXHJcbi8vIEljb25zXHJcbiRlcnotaWNvbi1zaXplOiAyLjJyZW07XHJcblxyXG4vLyBDdXN0b20gdmFyaWFibGVzXHJcbiRlcnotY29udGFpbmVyLW1heC13aWR0aDogOTYwcHg7XHJcbiRlcnotY29udGFpbmVyLXBhZGRpbmcteDogJHNwYWNlcjtcclxuJGVyei1jb250YWluZXItcGFkZGluZy15OiAkc3BhY2VyO1xyXG4kZXJ6LXByZXNlbmNlLWNvbnRyb2wtZW50cnktbWluLXdpZHRoOiA0MDBweDtcclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Jvb3RzdHJhcC12YXJpYWJsZXNcIjtcclxuXHJcbi8qQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7Ki9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICB0YWJsZS50YWJsZSxcclxuICAgIHRhYmxlLnRhYmxlID4gdGJvZHlcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgIH1cclxuICAgIHRhYmxlLnRhYmxlID4gdGhlYWQgIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgdGFibGUudGFibGUgPiB0Ym9keSA+IHRyIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBtaW4tY29udGVudDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIHRhYmxlLnRhYmxlIHRkIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBncmlkLWNvbHVtbjogMTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDA7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG4gICAgfVxyXG4gICAgdGFibGUudGFibGUgdHI6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yOztcclxuICAgIH1cclxuICAgIHRhYmxlLnRhYmxlIHRyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7XHJcbiAgICB9XHJcbiAgICB0YWJsZS50YWJsZSB0ZC5zdWJzdGl0dXRpb24tYWN0aW9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICB9XHJcbiAgICB0YWJsZS50YWJsZSB0ZC5zdWJzdGl0dXRpb24tYWN0aW9ucyA+IC5hY3RpdmUtbGFiZWwge1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgfVxyXG4gICAgdGFibGUudGFibGUgdGQuc3Vic3RpdHV0aW9uLWFjdGlvbnMgPiBidXR0b24ge1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlLnRhYmxlIHRkLnN1YnN0aXR1dGlvbi1zdWJzdGl0dXRlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxudGFibGUudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRhYmxlLnRhYmxlIHRkLnN1YnN0aXR1dGlvbi1hY3Rpb25zIGEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG5cclxudGFibGUudGFibGUgdGg6Zmlyc3QtY2hpbGQsXHJcbnRhYmxlLnRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG50YWJsZS50YWJsZSB0aDpsYXN0LWNoaWxkLFxyXG50YWJsZS50YWJsZSB0ZDpsYXN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIG1pbi1jb250ZW50O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6711:
/*!*******************************************************************************************!*\
  !*** ./src/app/substitutions/components/substitution-list/substitution-list.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubstitutionListComponent": () => (/* binding */ SubstitutionListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 4514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/spinner/spinner.component */ 2925);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-infinite-scroll */ 4503);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 3935);









function SubstitutionListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "erz-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SubstitutionListComponent_tr_18_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const substitution_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](substitution_r2.Remarks);
} }
const _c0 = function (a1) { return ["edit", a1]; };
function SubstitutionListComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "wbr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, SubstitutionListComponent_tr_18_div_10_Template, 5, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 12)(12, "a", 13)(13, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const substitution_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", substitution_r2.Substitute, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 5, substitution_r2.DateFrom), "\u2013");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 7, substitution_r2.DateTo), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", substitution_r2.Remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, substitution_r2.Id));
} }
const INITIAL_PAGE_SIZE = 50;
class SubstitutionListComponent {
    constructor(teacherSubstitutionService, changeDetector) {
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.changeDetector = changeDetector;
        this.sortColumn$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
        this.sortDirection$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
        this.filter$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject("");
        this.showHolder = false;
        this.editLinkFunc = v => ['edit', v];
        //get substitutions():Option<ReadonlyArray<TeacherSubstitution>> { return this.substitutionsInput$.value; }
        //set substitutions(v:Option<ReadonlyArray<TeacherSubstitution>>) { this.substitutionsInput$.next(v); this.update$.next(new Date()); }
        //useSubstitutionsInput$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
        this.isLoading = true;
        this.update$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(new Date());
        this.listSize$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(INITIAL_PAGE_SIZE);
        this.totalCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(0);
    }
    get sortColumn() { var _a; return (_a = this.sortColumn$.value) !== null && _a !== void 0 ? _a : ""; }
    set sortColumn(v) {
        this.sortColumn$.next(v);
    }
    get sortDirection() { return this.sortDirection$.value; }
    set sortDirection(v) {
        this.sortDirection$.next(v);
    }
    get filter() { return this.filter$.value; }
    set filter(v) { this.filter$.next(v !== null && v !== void 0 ? v : ""); }
    ngOnInit() {
        this.substitutions$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
            this.listSize$,
            this.update$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(v => { var _a; return (_a = this.substitutionsInput$) !== null && _a !== void 0 ? _a : this.teacherSubstitutionService.getMyList(); }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.share)()),
            this.filter$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.listSize$.next(INITIAL_PAGE_SIZE)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(v => v.toLowerCase())),
            this.sortColumn$,
            this.sortDirection$
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(v => {
            let [listSize, items, filter, sortColumn, sortDirection] = v;
            const compare = (a, b) => a == b ? 0 : (a !== null && a !== void 0 ? a : "") > (b !== null && b !== void 0 ? b : "") ? -1 : 1;
            const compareColumns = (a, b, columns) => {
                for (let column of columns) {
                    let sort = compare(a[column], b[column]);
                    if (sort != 0) {
                        return sort;
                    }
                }
                return 0;
            };
            const createCompareColumnsFunc = (columns) => (a, b) => compareColumns(a, b, columns);
            if (sortColumn == null) {
                items = Array.from(items).sort(createCompareColumnsFunc(['DateFrom', 'Substitute'])).reverse();
            }
            else {
                let col = sortColumn;
                let itemArray = Array.from(items).sort(createCompareColumnsFunc([col, 'DateFrom', 'Substitute']));
                if (sortDirection) {
                    items = itemArray.reverse();
                }
                else {
                    items = itemArray;
                }
            }
            this.totalCount$.next(items.length);
            return {
                listSize,
                items,
                filter
            };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(({ listSize, items, filter }) => [listSize, items.filter(w => filter == "" || w.Holder.toLowerCase().includes(filter) || w.Substitute.toLowerCase().includes(filter))]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(v => v[1].slice(0, v[0])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(v => {
            this.isLoading = false;
            this.changeDetector.markForCheck();
        }));
    }
    sortBy(column) {
        if (this.sortColumn == column) {
            this.sortDirection = !this.sortDirection;
        }
        else {
            this.sortColumn = column;
            this.sortDirection = true;
        }
        this.changeDetector.markForCheck();
    }
    onScroll() {
        this.listSize$.next(this.listSize$.value + 10);
    }
    deleteSubstitution(substitutionId) {
        this.teacherSubstitutionService.delete(substitutionId).subscribe(v => {
            this.update$.next(new Date());
        });
    }
}
SubstitutionListComponent.ɵfac = function SubstitutionListComponent_Factory(t) { return new (t || SubstitutionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
SubstitutionListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SubstitutionListComponent, selectors: [["erz-substitution-list"]], inputs: { sortColumn: ["sort-column", "sortColumn"], sortDirection: ["sort-direction", "sortDirection"], filter: "filter", showHolder: ["show-holder", "showHolder"], editLinkFunc: ["edit-link", "editLinkFunc"], substitutionsInput$: ["substitutions$", "substitutionsInput$"] }, decls: 20, vars: 15, consts: [[1, "container-fluid", "mt-2"], [4, "ngIf"], [1, "row"], [1, "col"], [1, "table"], [1, "column-substitute", "ps-0"], [1, "column-date-range"], [1, "column-remarks"], [1, "column-actions"], ["infiniteScroll", "", 3, "scrolled"], [4, "ngFor", "ngForOf"], ["class", "d-flex flex-row d-md-block", 4, "ngIf"], [1, "column-actions", "text-end", "pe-0"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "material-icons"], [1, "d-flex", "flex-row", "d-md-block"], [1, "material-icons", "d-md-none", "me-1"]], template: function SubstitutionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SubstitutionListComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "table", 4)(5, "thead")(6, "tr")(7, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scrolled", function SubstitutionListComponent_Template_tbody_scrolled_17_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, SubstitutionListComponent_tr_18_Template, 15, 11, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.isLoading ? "none" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 7, "substitution-list.column-title-substitute"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 9, "substitution-list.column-title-date-range"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 11, "substitution-list.column-title-remarks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 13, ctx.substitutions$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__.InfiniteScrollDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: ["[_ngcontent-%COMP%]:root {\n  --stellvertretung-primary: #005189;\n  --stellvertretung-primary-hover: #004272;\n  --stellvertretung-secondary: #8a8a8a;\n  --stellvertretung-secondary-hover: #747474;\n}\n\nth[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nth.column-substitute[_ngcontent-%COMP%] {\n  width: 25%;\n}\nth.column-holder[_ngcontent-%COMP%] {\n  width: 25%;\n}\nth.column-date-range[_ngcontent-%COMP%] {\n  width: 20%;\n}\nth.column-remarks[_ngcontent-%COMP%] {\n  width: 30%;\n}\nth.column-actions[_ngcontent-%COMP%] {\n  width: min-content;\n}\ntd.column-remarks[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n\n@media (max-width: 768px) {\n  table.table[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%] {\n    display: contents;\n  }\n\n  table.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  table.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: auto min-content;\n    grid-template-rows: auto;\n  }\n\n  table.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    width: auto;\n  }\n\n  table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    grid-column: 1;\n    border: none;\n    padding: 2px 0;\n  }\n\n  table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    \n  }\n\n  table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    padding: 12px 0;\n    border-bottom: 1px solid #dee2e6;\n  }\n\n  table.table[_ngcontent-%COMP%]   td.column-actions[_ngcontent-%COMP%] {\n    grid-column: 2;\n    grid-row-start: 1;\n    grid-row-end: 3;\n    white-space: nowrap;\n    display: flexbox;\n    flex-direction: row;\n  }\n\n  table.table[_ngcontent-%COMP%]   td.column-substitute[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .search-container[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib290c3RyYXAtdmFyaWFibGVzLnNjc3MiLCJzdWJzdGl0dXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7RUFBQTtBQXdDQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0FDdENKO0FEa0RBOztFQUFBO0FDeERBO0VBQ0ksZUFBQTtBQVlKO0FBVkE7RUFDSSxVQUFBO0FBYUo7QUFYQTtFQUNJLFVBQUE7QUFjSjtBQVpBO0VBQ0ksVUFBQTtBQWVKO0FBYkE7RUFDSSxVQUFBO0FBZ0JKO0FBZEE7RUFDSSxrQkFBQTtBQWlCSjtBQWRBO0VBQ0kscUJBQUE7QUFpQko7QUFkQSx1Q0FBQTtBQUNBO0VBQ0k7O0lBR0ksaUJBQUE7RUFnQk47O0VBZEU7SUFDSSxhQUFBO0VBaUJOOztFQWZFO0lBQ0ksYUFBQTtJQUNBLHVDQUFBO0lBQ0Esd0JBQUE7RUFrQk47O0VBaEJFO0lBQ0ksV0FBQTtFQW1CTjs7RUFqQkU7SUFDSSxjQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VBb0JOOztFQWxCRTtJQUNJLDZDQUFBO0VBcUJOOztFQW5CRTtJQUNJLGVBQUE7SUFDQSxnQ0FBQTtFQXNCTjs7RUFwQkU7SUFDSSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBdUJOOztFQXJCRTtJQUNJLGlCQUFBO0VBd0JOOztFQXRCRTtJQUNJLGVBQUE7RUF5Qk47QUFDRiIsImZpbGUiOiJzdWJzdGl0dXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XHJcblxyXG4vKipcclxuICogQm9vdHN0cmFwIHZhcmlhYmxlcyBvdmVycmlkZXNcclxuICovXHJcblxyXG4vLyBkaXNhYmxlIHJlc3BvbnNpemUgZm9udCBzaXplc1xyXG4kZW5hYmxlLXJmczogZmFsc2U7XHJcblxyXG4vLyBjb250YWluZXIgcGFkZGluZ1xyXG4kY29udGFpbmVyLXBhZGRpbmcteDogMS41cmVtO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRib2R5LWJnOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiRib2R5LWNvbG9yOiByZ2IoOTYsIDk2LCA5Nik7XHJcbiR5ZWxsb3c6IHJnYigyNTUsIDE2OCwgMjApO1xyXG4kb3JhbmdlOiByZ2IoMjM5LCAxMjQsIDApO1xyXG4kYmx1ZTogcmdiKDY1LCAxMTgsIDE0NSk7XHJcbiR0ZWFsOiByZ2IoMTksIDY5LCA5Nyk7XHJcbiRncmF5OiByZ2IoMTM4LCAxMzgsIDEzOCk7XHJcbiRncmF5LWRhcms6IHJnYig1MSwgNTEsIDUxKTtcclxuXHJcbiRibHVlOiAjMDA1MTg5O1xyXG4kYmx1ZS1ob3ZlcjogIzAwNDI3MjtcclxuJGdyYXktaG92ZXI6IHJnYigxMTYsIDExNiwgMTE2KTtcclxuXHJcbiRwcmVzZW50LWNvbG9yOiAjMjhhNzQ1O1xyXG4kYWJzZW50LWNvbG9yOiAjZGMzNTQ1O1xyXG4kdW5hcHByb3ZlZC1jb2xvcjogJHllbGxvdztcclxuXHJcbi8vIEZvbnRcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtc2l6ZS1iYXNlOiAxLjVyZW07IC8vIFNlZSBhcHAvc2hhcmVkL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcclxuXHJcbi8vIFNwYWNpbmdcclxuJHNwYWNlcjogMS41cmVtOyAvLyBDb21wZW5zYXRlIGZvciB0aGUgYmFzZSBmb250XHJcblxyXG4vLyBCdXR0b25zXHJcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG46cm9vdCB7XHJcbiAgICAtLXN0ZWxsdmVydHJldHVuZy1wcmltYXJ5OiAjeyRibHVlfTtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXByaW1hcnktaG92ZXI6ICN7JGJsdWUtaG92ZXJ9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctc2Vjb25kYXJ5OiAjeyRncmF5fTtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXNlY29uZGFyeS1ob3ZlcjogI3skZ3JheS1ob3Zlcn07XHJcbn1cclxuXHJcbi8vIERyb3Bkb3duXHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAkZ3JheS0yMDA7XHJcblxyXG4vLyBUYWJsZXNcclxuJHRhYmxlLWhlYWQtYmc6ICR0YWJsZS1ib3JkZXItY29sb3I7XHJcbiR0YWJsZS1oZWFkLWNvbG9yOiAkZ3JheS02MDA7XHJcbiR0YWJsZS1ncm91cC1zZXBhcmF0b3ItY29sb3I6ICR0YWJsZS1ib3JkZXItY29sb3I7XHJcbiR0YWJsZS10aC1mb250LXdlaWdodDogbm9ybWFsO1xyXG5cclxuLyoqXHJcbiAqIEN1c3RvbSBWYXJpYWJsZXNcclxuICovXHJcblxyXG4vLyBJY29uc1xyXG4kZXJ6LWljb24tc2l6ZTogMi4ycmVtO1xyXG5cclxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4kZXJ6LWNvbnRhaW5lci1tYXgtd2lkdGg6IDk2MHB4O1xyXG4kZXJ6LWNvbnRhaW5lci1wYWRkaW5nLXg6ICRzcGFjZXI7XHJcbiRlcnotY29udGFpbmVyLXBhZGRpbmcteTogJHNwYWNlcjtcclxuJGVyei1wcmVzZW5jZS1jb250cm9sLWVudHJ5LW1pbi13aWR0aDogNDAwcHg7XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9ib290c3RyYXAtdmFyaWFibGVzXCI7XHJcblxyXG50aCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxudGguY29sdW1uLXN1YnN0aXR1dGUge1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG50aC5jb2x1bW4taG9sZGVyIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxudGguY29sdW1uLWRhdGUtcmFuZ2Uge1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG50aC5jb2x1bW4tcmVtYXJrcyB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcbnRoLmNvbHVtbi1hY3Rpb25zIHtcclxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcclxufVxyXG5cclxudGQuY29sdW1uLXJlbWFya3Mge1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG59XHJcblxyXG4vKkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkgeyovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgdGFibGUudGFibGUsXHJcbiAgICB0YWJsZS50YWJsZSA+IHRib2R5XHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICB9XHJcbiAgICB0YWJsZS50YWJsZSA+IHRoZWFkICB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIHRhYmxlLnRhYmxlID4gdGJvZHkgPiB0ciB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWluLWNvbnRlbnQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgdGFibGUudGFibGUgdGgge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgdGFibGUudGFibGUgdGQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAycHggMDtcclxuICAgIH1cclxuICAgIHRhYmxlLnRhYmxlIHRyOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAvKmJvcmRlci10b3A6IDFweCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yOyovXHJcbiAgICB9XHJcbiAgICB0YWJsZS50YWJsZSB0ciB7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xyXG4gICAgfVxyXG4gICAgdGFibGUudGFibGUgdGQuY29sdW1uLWFjdGlvbnMge1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogMztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXhib3g7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuICAgIHRhYmxlLnRhYmxlIHRkLmNvbHVtbi1zdWJzdGl0dXRlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7559:
/*!********************************************************!*\
  !*** ./src/app/substitutions/substitutions-routing.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubstitutionsRoutingModule": () => (/* binding */ SubstitutionsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.admin.guard */ 3947);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.guard */ 2993);
/* harmony import */ var _components_page_admin_substitution_create_page_admin_substitution_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/page-admin-substitution-create/page-admin-substitution-create.component */ 0);
/* harmony import */ var _components_page_admin_substitution_edit_page_admin_substitution_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-admin-substitution-edit/page-admin-substitution-edit.component */ 7782);
/* harmony import */ var _components_page_admin_substitution_list_page_admin_substitution_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-admin-substitution-list/page-admin-substitution-list.component */ 9492);
/* harmony import */ var _components_page_substitution_create_page_substitution_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-substitution-create/page-substitution-create.component */ 8852);
/* harmony import */ var _components_page_substitution_edit_page_substitution_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page-substitution-edit/page-substitution-edit.component */ 4475);
/* harmony import */ var _components_page_substitution_list_current_page_substitution_list_current_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page-substitution-list-current/page-substitution-list-current.component */ 1750);
/* harmony import */ var _components_page_substitution_list_page_substitution_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-substitution-list/page-substitution-list.component */ 9051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);












const routes = [
    {
        path: 'assign',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        component: _components_page_substitution_list_page_substitution_list_component__WEBPACK_IMPORTED_MODULE_8__.PageSubstitutionListComponent,
    },
    {
        path: 'assign/edit/:id',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        component: _components_page_substitution_edit_page_substitution_edit_component__WEBPACK_IMPORTED_MODULE_6__.PageSubstitutionEditComponent
    },
    {
        path: 'assign/create',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        component: _components_page_substitution_create_page_substitution_create_component__WEBPACK_IMPORTED_MODULE_5__.PageSubstitutionCreateComponent
    },
    {
        path: 'admin/create',
        canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__.AuthAdminGuard],
        component: _components_page_admin_substitution_create_page_admin_substitution_create_component__WEBPACK_IMPORTED_MODULE_2__.PageAdminSubstitutionCreateComponent
    },
    {
        path: 'admin/edit/:id',
        canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__.AuthAdminGuard],
        component: _components_page_admin_substitution_edit_page_admin_substitution_edit_component__WEBPACK_IMPORTED_MODULE_3__.PageAdminSubstitutionEditComponent
    },
    {
        path: 'admin',
        canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__.AuthAdminGuard],
        component: _components_page_admin_substitution_list_page_admin_substitution_list_component__WEBPACK_IMPORTED_MODULE_4__.PageAdminSubstitutionListComponent
    },
    {
        path: 'execute',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        component: _components_page_substitution_list_current_page_substitution_list_current_component__WEBPACK_IMPORTED_MODULE_7__.PageSubstitutionListCurrentComponent
    },
];
class SubstitutionsRoutingModule {
}
SubstitutionsRoutingModule.ɵfac = function SubstitutionsRoutingModule_Factory(t) { return new (t || SubstitutionsRoutingModule)(); };
SubstitutionsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: SubstitutionsRoutingModule });
SubstitutionsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SubstitutionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 976:
/*!*******************************************************!*\
  !*** ./src/app/substitutions/substitutions.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubstitutionsModule": () => (/* binding */ SubstitutionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_substitution_list_substitution_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/substitution-list/substitution-list.component */ 6711);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _substitutions_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./substitutions-routing */ 7559);
/* harmony import */ var _components_substitution_edit_substitution_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/substitution-edit/substitution-edit.component */ 3603);
/* harmony import */ var _components_page_substitution_edit_page_substitution_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-substitution-edit/page-substitution-edit.component */ 4475);
/* harmony import */ var _components_substitution_create_substitution_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/substitution-create/substitution-create.component */ 6956);
/* harmony import */ var _components_page_substitution_create_page_substitution_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page-substitution-create/page-substitution-create.component */ 8852);
/* harmony import */ var _components_substitution_list_current_substitution_list_current_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/substitution-list-current/substitution-list-current.component */ 1066);
/* harmony import */ var _components_page_substitution_list_current_page_substitution_list_current_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-substitution-list-current/page-substitution-list-current.component */ 1750);
/* harmony import */ var _components_page_admin_substitution_list_page_admin_substitution_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page-admin-substitution-list/page-admin-substitution-list.component */ 9492);
/* harmony import */ var _components_page_admin_substitution_create_page_admin_substitution_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page-admin-substitution-create/page-admin-substitution-create.component */ 0);
/* harmony import */ var _components_page_substitution_list_page_substitution_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page-substitution-list/page-substitution-list.component */ 9051);
/* harmony import */ var _components_page_admin_substitution_edit_page_admin_substitution_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/page-admin-substitution-edit/page-admin-substitution-edit.component */ 7782);
/* harmony import */ var _components_substitution_list_admin_substitution_list_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/substitution-list-admin/substitution-list-admin.component */ 2655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
















class SubstitutionsModule {
}
SubstitutionsModule.ɵfac = function SubstitutionsModule_Factory(t) { return new (t || SubstitutionsModule)(); };
SubstitutionsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: SubstitutionsModule });
SubstitutionsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _substitutions_routing__WEBPACK_IMPORTED_MODULE_2__.SubstitutionsRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](SubstitutionsModule, { declarations: [_components_substitution_list_substitution_list_component__WEBPACK_IMPORTED_MODULE_0__.SubstitutionListComponent,
        _components_substitution_list_current_substitution_list_current_component__WEBPACK_IMPORTED_MODULE_7__.SubstitutionListCurrentComponent,
        _components_substitution_list_admin_substitution_list_admin_component__WEBPACK_IMPORTED_MODULE_13__.SubstitutionListAdminComponent,
        _components_substitution_edit_substitution_edit_component__WEBPACK_IMPORTED_MODULE_3__.SubstitutionEditComponent,
        _components_substitution_create_substitution_create_component__WEBPACK_IMPORTED_MODULE_5__.SubstitutionCreateComponent,
        _components_page_substitution_edit_page_substitution_edit_component__WEBPACK_IMPORTED_MODULE_4__.PageSubstitutionEditComponent,
        _components_page_substitution_create_page_substitution_create_component__WEBPACK_IMPORTED_MODULE_6__.PageSubstitutionCreateComponent,
        _components_page_substitution_list_current_page_substitution_list_current_component__WEBPACK_IMPORTED_MODULE_8__.PageSubstitutionListCurrentComponent,
        _components_page_admin_substitution_list_page_admin_substitution_list_component__WEBPACK_IMPORTED_MODULE_9__.PageAdminSubstitutionListComponent,
        _components_page_admin_substitution_create_page_admin_substitution_create_component__WEBPACK_IMPORTED_MODULE_10__.PageAdminSubstitutionCreateComponent,
        _components_page_admin_substitution_edit_page_admin_substitution_edit_component__WEBPACK_IMPORTED_MODULE_12__.PageAdminSubstitutionEditComponent,
        _components_page_substitution_list_page_substitution_list_component__WEBPACK_IMPORTED_MODULE_11__.PageSubstitutionListComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _substitutions_routing__WEBPACK_IMPORTED_MODULE_2__.SubstitutionsRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_substitutions_substitutions_module_ts.js.map