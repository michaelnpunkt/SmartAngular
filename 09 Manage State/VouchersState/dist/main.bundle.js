webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/accounts/accounts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/accounts/accounts.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  accounts works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/accounts/accounts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountsComponent = (function () {
    function AccountsComponent() {
    }
    AccountsComponent.prototype.ngOnInit = function () {
    };
    AccountsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-accounts',
            template: __webpack_require__("../../../../../src/app/accounts/accounts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/accounts/accounts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountsComponent);
    return AccountsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n  <h4>Vouchers Administration</h4>     \r\n  Data passed: {{ msg | json }}\r\n</div>\r\n<router-outlet name=\"bottom\"></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(route) {
        this.route = route;
        this.msg = null;
        this.msg = route.snapshot.data;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <app-navbar></app-navbar>   \r\n        <div class=\"container-fluid\">  \r\n          <router-outlet></router-outlet>    \r\n        </div>\r\n    </div>    \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'vouchers-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_match_height_match_height_directive__ = __webpack_require__("../../../../../src/app/shared/match-height/match-height.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accounts_accounts_component__ = __webpack_require__("../../../../../src/app/accounts/accounts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__demos_demos_component__ = __webpack_require__("../../../../../src/app/demos/demos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__vouchers_voucher_voucher_component__ = __webpack_require__("../../../../../src/app/vouchers/voucher/voucher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__vouchers_vouchers_list_component__ = __webpack_require__("../../../../../src/app/vouchers/vouchers-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__vouchers_voucher_voucher_detail_voucher_detail_component__ = __webpack_require__("../../../../../src/app/vouchers/voucher/voucher-detail/voucher-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__vouchers_voucher_voucher_details_list_voucher_details_list_component__ = __webpack_require__("../../../../../src/app/vouchers/voucher/voucher-details-list/voucher-details-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__vouchers_voucher_service__ = __webpack_require__("../../../../../src/app/vouchers/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__demos_http_clients_http_clients_component__ = __webpack_require__("../../../../../src/app/demos/http-clients/http-clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__demos_promise_promise_component__ = __webpack_require__("../../../../../src/app/demos/promise/promise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__demos_no_sqlinterceptor_no_sqlinterceptor_component__ = __webpack_require__("../../../../../src/app/demos/no-sqlinterceptor/no-sqlinterceptor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__route_guard_service__ = __webpack_require__("../../../../../src/app/route.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__demos_firebase_service__ = __webpack_require__("../../../../../src/app/demos/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__demos_observable_crud_observable_crud_component__ = __webpack_require__("../../../../../src/app/demos/observable-crud/observable-crud.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common_locales_de__ = __webpack_require__("../../../common/locales/de.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























Object(__WEBPACK_IMPORTED_MODULE_25__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_26__angular_common_locales_de__["a" /* default */]);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__vouchers_vouchers_list_component__["a" /* VouchersListComponent */],
                __WEBPACK_IMPORTED_MODULE_3__accounts_accounts_component__["a" /* AccountsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__vouchers_voucher_voucher_component__["a" /* VoucherComponent */],
                __WEBPACK_IMPORTED_MODULE_14__vouchers_voucher_voucher_detail_voucher_detail_component__["a" /* VoucherDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__vouchers_voucher_voucher_details_list_voucher_details_list_component__["a" /* VoucherDetailsListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__demos_demos_component__["a" /* DemosComponent */],
                __WEBPACK_IMPORTED_MODULE_17__demos_http_clients_http_clients_component__["a" /* HttpClientsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__demos_promise_promise_component__["a" /* PromiseComponent */],
                __WEBPACK_IMPORTED_MODULE_1__shared_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_2__shared_match_height_match_height_directive__["a" /* MatchHeightDirective */],
                __WEBPACK_IMPORTED_MODULE_19__demos_no_sqlinterceptor_no_sqlinterceptor_component__["a" /* NoSQLInterceptorComponent */],
                __WEBPACK_IMPORTED_MODULE_22__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_24__demos_observable_crud_observable_crud_component__["a" /* ObservableCrudComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__vouchers_voucher_service__["a" /* VouchersService */],
                __WEBPACK_IMPORTED_MODULE_23__demos_firebase_service__["a" /* FirebaseService */],
                { provide: __WEBPACK_IMPORTED_MODULE_10__angular_core__["G" /* LOCALE_ID */], useValue: "de-DE" },
                // {provide: HTTP_INTERCEPTORS, useClass: FirebaseInterceptor, multi: true},  
                __WEBPACK_IMPORTED_MODULE_20__route_guard_service__["a" /* RouteGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demos_no_sqlinterceptor_no_sqlinterceptor_component__ = __webpack_require__("../../../../../src/app/demos/no-sqlinterceptor/no-sqlinterceptor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demos_http_clients_http_clients_component__ = __webpack_require__("../../../../../src/app/demos/http-clients/http-clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demos_promise_promise_component__ = __webpack_require__("../../../../../src/app/demos/promise/promise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demos_demos_component__ = __webpack_require__("../../../../../src/app/demos/demos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vouchers_vouchers_list_component__ = __webpack_require__("../../../../../src/app/vouchers/vouchers-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vouchers_voucher_voucher_component__ = __webpack_require__("../../../../../src/app/vouchers/voucher/voucher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__accounts_accounts_component__ = __webpack_require__("../../../../../src/app/accounts/accounts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__route_guard_service__ = __webpack_require__("../../../../../src/app/route.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__demos_observable_crud_observable_crud_component__ = __webpack_require__("../../../../../src/app/demos/observable-crud/observable-crud.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__demos_demos_component__["a" /* DemosComponent */],
        children: [
            { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_1__demos_http_clients_http_clients_component__["a" /* HttpClientsComponent */] },
            { path: 'promise', component: __WEBPACK_IMPORTED_MODULE_2__demos_promise_promise_component__["a" /* PromiseComponent */] },
            { path: 'nosql', component: __WEBPACK_IMPORTED_MODULE_0__demos_no_sqlinterceptor_no_sqlinterceptor_component__["a" /* NoSQLInterceptorComponent */] },
            { path: 'observablescurd', component: __WEBPACK_IMPORTED_MODULE_11__demos_observable_crud_observable_crud_component__["a" /* ObservableCrudComponent */] }
        ]
    },
    { path: 'vouchers',
        component: __WEBPACK_IMPORTED_MODULE_4__vouchers_vouchers_list_component__["a" /* VouchersListComponent */]
    },
    { path: 'vouchers/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__vouchers_voucher_voucher_component__["a" /* VoucherComponent */]
    },
    { path: 'accounts',
        component: __WEBPACK_IMPORTED_MODULE_6__accounts_accounts_component__["a" /* AccountsComponent */],
        data: { title: 'Accounts' }
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_9__admin_admin_component__["a" /* AdminComponent */],
        data: { title: 'The protected Admin Page' },
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__route_guard_service__["a" /* RouteGuard */]]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false })],
            exports: [__WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/demos/demo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DemoService = (function () {
    function DemoService(httpClient) {
        this.httpClient = httpClient;
    }
    DemoService.prototype.getItems = function () {
        return this.httpClient.get("/assets/demos.json").toPromise();
    };
    DemoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DemoService);
    return DemoService;
}());



/***/ }),

/***/ "../../../../../src/app/demos/demos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    display: block;\r\n    text-decoration: none;    \r\n    cursor: pointer;\r\n    padding-bottom: 3px;\r\n}\r\n\r\n.panel {\r\n    background-color: white;    \r\n    padding: 20px;\r\n}\r\n\r\n.imgCell{\r\n    padding-top: 5px;\r\n    vertical-align: middle;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demos/demos.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"demoContainer\" class=\"\">\r\n    <div class=\"row\" [MatchHeight]=\"'panel'\">\r\n        <div class=\"panel col-md-2\">\r\n            <h4>{{title}}</h4>\r\n            <div>\r\n                <a *ngFor=\"let item of demos\" [routerLink]=\"['', item.url]\" [queryParams]=\"{title: item.title}\">{{item.title}}</a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"panel col-md-9 col-md-offset-1\">\r\n            <h4>{{demoName}}</h4>\r\n            <div>\r\n               <router-outlet></router-outlet>\r\n             </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demos/demos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demo_service__ = __webpack_require__("../../../../../src/app/demos/demo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DemosComponent = (function () {
    function DemosComponent(route, router, demoService) {
        this.route = route;
        this.router = router;
        this.demoService = demoService;
        this.title = '';
        this.demoName = '';
        this.componentName = '';
        this.title = 'Data Access';
    }
    DemosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.demoService.getItems()
            .then(function (result) { _this.demos = result; });
        this.route.queryParams
            .subscribe(function (params) {
            var c = _this.getComponent(params['title']);
            _this.demoName = params['title'] != null ? "Demo: " + params['title'] + " - Component: " + (c != undefined ? c.component : '') : 'Please select a demo';
        });
    };
    DemosComponent.prototype.getComponent = function (val) {
        if (this.demos != undefined && this.demos != null) {
            return this.demos.find(function (el) { return el.title === val; });
        }
    };
    DemosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-demos',
            template: __webpack_require__("../../../../../src/app/demos/demos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demos/demos.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__demo_service__["a" /* DemoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__demo_service__["a" /* DemoService */]])
    ], DemosComponent);
    return DemosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demos/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseService = (function () {
    function FirebaseService(httpClient) {
        this.httpClient = httpClient;
        //Enter your firebase AppUrl Here, add your token to environment 
        this.url = "https://angular-b2207.firebaseio.com/";
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer' + __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].firebaseToken);
    }
    FirebaseService.prototype.insertVoucher = function (v) {
        //post appends, put overwrites
        return this.httpClient.post(this.url + "data.json", v);
        // custom header
        // return this.httpClient.post(this.url + "data.json", v,{headers: this.headers});
    };
    FirebaseService.prototype.getVouchers = function () {
        return this.httpClient.get(this.url + "data.json");
    };
    FirebaseService.prototype.deleteVouchers = function () {
        return this.httpClient.delete(this.url + "data.json");
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "../../../../../src/app/demos/http-clients/http-clients.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    cursor: pointer;   \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demos/http-clients/http-clients.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n  <h4>Make sure API is running: VouchersAPI -> src folder -> dotnet watch run</h4><br>\r\n</div>\r\n\r\n<div class=\"section\">\r\n  <div class='row'>\r\n    <div class='col-xs-3'>\r\n      <h4>Voucher</h4><br>\r\n      <a (click)=\"getVouchers()\">Get Vouchers HttpClient</a><br />\r\n      <a (click)=\"getVouchersHttp()\">Get Voucher Http</a><br />      \r\n      <a (click)=\"insertVoucher()\">Insert Voucher HttpClient</a><br />\r\n      <a (click)=\"usingHeadersHttpClient()\">Using Headers in HttpClient</a><br />\r\n    </div>\r\n    <div class='col-xs-9' style='vertical-align: top'>\r\n      <h5>Result</h5><br>\r\n      {{result | json}}\r\n    </div>\r\n  </div>    \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demos/http-clients/http-clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpClientsComponent = (function () {
    function HttpClientsComponent(httpClient, http) {
        this.httpClient = httpClient;
        this.http = http;
    }
    HttpClientsComponent.prototype.ngOnInit = function () { };
    HttpClientsComponent.prototype.getVouchers = function () {
        var _this = this;
        this.httpClient
            .get("http://localhost:5000/api/vouchers")
            .subscribe(function (data) {
            _this.result = data;
        });
    };
    HttpClientsComponent.prototype.getVouchersHttp = function () {
        var _this = this;
        this.http
            .get("http://localhost:5000/api/vouchers")
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.result = data;
        });
    };
    HttpClientsComponent.prototype.insertVoucher = function () {
        var _this = this;
        var voucher = { Text: "Inserted by Angular HttpClient", Date: new Date() };
        this.httpClient
            .post("http://localhost:5000/api/vouchers", voucher)
            .subscribe(function (data) {
            _this.result = "Insert using HttpClient";
        });
    };
    HttpClientsComponent.prototype.usingHeadersHttpClient = function () {
        var _this = this;
        this.httpClient
            .get("http://localhost:5000/api/vouchers", {
            observe: "response"
        })
            .toPromise()
            .then(function (data) {
            console.log('Response using {observe: "response"}: ', data);
            _this.result = data;
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.set("Content-Type", "text/html; charset=utf-8");
        this.httpClient
            .get("http://localhost:5000/api/vouchers", { headers: headers })
            .toPromise()
            .then(function (data) {
            console.log('Response using headers variable: ', data);
            _this.result = data;
        });
    };
    HttpClientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "app-http-clients",
            template: __webpack_require__("../../../../../src/app/demos/http-clients/http-clients.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demos/http-clients/http-clients.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], HttpClientsComponent);
    return HttpClientsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demos/no-sqlinterceptor/no-sqlinterceptor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    cursor: pointer;   \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demos/no-sqlinterceptor/no-sqlinterceptor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n  <h4>Follow Instructions to register Firebase</h4><br>\r\n</div>\r\n\r\n<div class=\"section\">\r\n  <div class='row'>\r\n    <div class='col-xs-4'>\r\n      <h4>Voucher</h4><br>\r\n      <a (click)=\"insertVoucher()\">Insert Voucher</a><br />\r\n      <a (click)=\"getVouchers()\">Get Vouchers</a><br />      \r\n      <a (click)=\"deleteVouchers()\">Delete Vouchers</a><br />\r\n    </div>\r\n    <div class='col-xs-8' style='vertical-align: top'>\r\n      <h5>Result</h5><br>\r\n      {{result | json}}\r\n    </div>\r\n  </div>    \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demos/no-sqlinterceptor/no-sqlinterceptor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoSQLInterceptorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_service__ = __webpack_require__("../../../../../src/app/demos/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoSQLInterceptorComponent = (function () {
    function NoSQLInterceptorComponent(fbs) {
        this.fbs = fbs;
    }
    NoSQLInterceptorComponent.prototype.ngOnInit = function () {
    };
    NoSQLInterceptorComponent.prototype.insertVoucher = function () {
        var _this = this;
        var voucher = { "ID": 1, "Text": "Inserted by Angular", "Date": new Date(), "Amount": 99, "Paid": true, "Expense": false, "VATRate": 20 };
        this.fbs.insertVoucher(voucher)
            .subscribe(function (response) {
            _this.result = response;
        }, function (err) { return console.log(err); });
    };
    NoSQLInterceptorComponent.prototype.getVouchers = function () {
        var _this = this;
        this.fbs.getVouchers().subscribe(function (data) {
            _this.result = data;
        });
    };
    NoSQLInterceptorComponent.prototype.deleteVouchers = function () {
        var _this = this;
        this.fbs.deleteVouchers().subscribe(function (data) {
            _this.result = data;
        });
    };
    NoSQLInterceptorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-no-sqlinterceptor',
            template: __webpack_require__("../../../../../src/app/demos/no-sqlinterceptor/no-sqlinterceptor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demos/no-sqlinterceptor/no-sqlinterceptor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__firebase_service__["a" /* FirebaseService */]])
    ], NoSQLInterceptorComponent);
    return NoSQLInterceptorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demos/observable-crud/observable-crud.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <h4>Make sure API is running: VouchersAPI -> src folder -> dotnet watch run</h4><br>\n  </div>\n  \n  <div class=\"section\">\n    <div class='row'>\n      <div class='col-xs-3'>\n        <h4>Voucher</h4><br>\n        <a (click)=\"getVouchers()\">Get Vouchers</a><br />\n        <a (click)=\"getVoucher()\">Get Voucher</a><br />\n        <a (click)=\"insertVoucher()\">Insert Voucher</a><br />\n        <a (click)=\"updateVoucher()\">Update Voucher</a><br />\n        <a (click)=\"deleteVoucher()\">Delete Voucher</a><br />\n      </div>\n      <div class='col-xs-9' style='vertical-align: top'>\n        <h5>Result</h5><br>\n        {{result | json}}\n      </div>\n    </div>    \n  </div>\n  \n  <div class=\"section\">\n      <div class='row'>\n        <div class='col-xs-3'>\n          <h4>Custom Routes</h4><br>\n          <a (click)=\"getSum()\">Custom Get Route, getSum()</a><br />\n          <a (click)=\"getVM()\">View Model, getVM()</a><br />\n          <a (click)=\"doSave()\">Custom Post Route, doSave()</a><br />\n        </div>\n        <div class='col-xs-9' style='vertical-align: top'>\n          <h5>Result</h5><br>\n          {{resultB | json}}\n        </div>\n      </div>    \n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/demos/observable-crud/observable-crud.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demos/observable-crud/observable-crud.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservableCrudComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vouchers_voucher_service__ = __webpack_require__("../../../../../src/app/vouchers/voucher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ObservableCrudComponent = (function () {
    function ObservableCrudComponent(httpClient, http, vs) {
        this.httpClient = httpClient;
        this.http = http;
        this.vs = vs;
    }
    ObservableCrudComponent.prototype.ngOnInit = function () { };
    ObservableCrudComponent.prototype.getVouchers = function () {
        var _this = this;
        this.httpClient
            .get("http://localhost:5000/api/vouchers")
            .subscribe(function (data) {
            _this.result = data;
        });
    };
    ObservableCrudComponent.prototype.getVoucher = function () {
        var _this = this;
        this.httpClient
            .get("http://localhost:5000/api/vouchers/2")
            .subscribe(function (data) {
            _this.result = data;
        });
    };
    ObservableCrudComponent.prototype.insertVoucher = function () {
        var _this = this;
        var voucher = { Text: "Inserted by Angular", Date: new Date() };
        console.log("Voucher to insert: ", voucher);
        this.httpClient
            .post("http://localhost:5000/api/vouchers", voucher)
            .subscribe(function (data) {
            if (data == null)
                _this.result = "Voucher inserted";
        });
    };
    ObservableCrudComponent.prototype.updateVoucher = function () {
        var _this = this;
        var voucher;
        this.httpClient
            .get("http://localhost:5000/api/vouchers/2")
            .subscribe(function (data) {
            var voucher = data;
            voucher.Text = "Updated by Angular";
            console.log("Voucher to update: ", voucher);
            _this.httpClient
                .put("http://localhost:5000/api/vouchers", voucher)
                .subscribe(function (data) {
                _this.result = "voucher updated";
            });
        });
    };
    ObservableCrudComponent.prototype.deleteVoucher = function () {
        var _this = this;
        var id = 1002;
        var url = "http://localhost:5000/api/vouchers/" + id;
        this.httpClient.delete(url).subscribe(function (data) {
            _this.result = "voucher with id " + id + " deleted";
            console.log(_this.result);
        });
    };
    ObservableCrudComponent.prototype.getSum = function () {
        var _this = this;
        this.http
            .get("http://localhost:5000/api/vouchers/getsum/true")
            .subscribe(function (response) {
            _this.resultB = response;
            console.log("getSum()", _this.resultB);
        });
    };
    ObservableCrudComponent.prototype.getVM = function () {
        var _this = this;
        this.httpClient
            .get("http://localhost:5000/api/vouchers/getvm/1")
            .subscribe(function (data) {
            _this.resultB = data;
        });
    };
    ObservableCrudComponent.prototype.doSave = function () {
        var _this = this;
        var voucher = {
            ID: 2,
            Text: "BP Tankstelle",
            Date: "2017-06-27T14:30:04.8849651",
            Amount: 65,
            Paid: false,
            Expense: true,
            Remark: true
        };
        console.log("Saving voucher ", voucher);
        this.httpClient
            .post("http://localhost:5000/api/vouchers/save", voucher)
            .subscribe(function (data) {
            (function (response) { return (_this.resultB = "Voucher with id " + response + " was saved"); });
        });
    };
    ObservableCrudComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-observable-crud",
            template: __webpack_require__("../../../../../src/app/demos/observable-crud/observable-crud.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demos/observable-crud/observable-crud.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__vouchers_voucher_service__["a" /* VouchersService */]])
    ], ObservableCrudComponent);
    return ObservableCrudComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demos/promise/promise.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    cursor: pointer;   \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demos/promise/promise.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n  <h4>Make sure API is running: VouchersAPI -> src folder -> dotnet watch run</h4><br>\r\n</div>\r\n\r\n<div class=\"section\">\r\n  <div class='row'>\r\n    <div class='col-xs-4'>\r\n      <h4>Voucher</h4><br>\r\n      <a (click)=\"getVouchers()\">Get Vouchers</a><br />\r\n      <a (click)=\"getVoucher()\">Get Voucher</a><br />\r\n      <a (click)=\"insertVoucher()\">Insert Voucher</a><br />\r\n      <a (click)=\"updateVoucher()\">Update Voucher</a><br />      \r\n      <a (click)=\"deleteVoucher()\">Delete Voucher</a><br />\r\n    </div>\r\n    <div class='col-xs-8' style='vertical-align: top'>\r\n      <h5>Result</h5><br>\r\n      {{result | json}}\r\n    </div>\r\n  </div>    \r\n</div>\r\n\r\n<div class=\"section\">\r\n    <div class='row'>\r\n      <div class='col-xs-4'>\r\n        <h4>Custom Routes</h4><br>\r\n        <a (click)=\"getSum()\">Custom Get Route, getSum()</a><br />\r\n        <a (click)=\"getVM()\">View Model, getVM()</a><br />\r\n        <a (click)=\"doSave()\">Custom Post Route, doSave()</a><br />\r\n      </div>\r\n      <div class='col-xs-8' style='vertical-align: top'>\r\n        <h5>Result</h5><br>\r\n        {{resultB | json}}\r\n      </div>\r\n    </div>    \r\n</div>\r\n\r\n<div class=\"section\">\r\n  <div class='row'>\r\n    <div class='col-xs-4'>\r\n      <h4>Voucher Details</h4><br>\r\n      <a>Get Voucher Details</a><br />\r\n      <a>Get Voucher Detail</a><br />\r\n      <a>Insert Voucher Detail</a><br />\r\n      <a>Update Voucher Detail</a><br />\r\n      <a>Delete Voucher Detail</a><br />\r\n    </div>\r\n    <div class='col-xs-8' style='vertical-align: top'>\r\n      <h5>Result</h5><br>\r\n      {{resultC | json}}\r\n    </div>\r\n  </div>    \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demos/promise/promise.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromiseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PromiseComponent = (function () {
    function PromiseComponent(httpClient, http) {
        this.httpClient = httpClient;
        this.http = http;
    }
    PromiseComponent.prototype.ngOnInit = function () { };
    PromiseComponent.prototype.getVouchers = function () {
        var _this = this;
        this.httpClient
            .get("http://localhost:5000/api/vouchers")
            .toPromise()
            .then(function (data) {
            _this.result = data;
            console.log("getVouchers()", _this.result);
        });
    };
    PromiseComponent.prototype.getVoucher = function () {
        var _this = this;
        this.httpClient
            .get("http://localhost:5000/api/vouchers/2")
            .toPromise()
            .then(function (data) {
            _this.result = data;
            console.log("getVoucher()", _this.result);
        });
    };
    PromiseComponent.prototype.insertVoucher = function () {
        var _this = this;
        var voucher = { Text: "Inserted by Angular", Date: new Date() };
        console.log("Voucher to insert: ", voucher);
        this.httpClient
            .post("http://localhost:5000/api/vouchers", voucher)
            .toPromise()
            .then(function (response) {
            if (response == null)
                _this.result = "Voucher inserted";
        });
    };
    PromiseComponent.prototype.updateVoucher = function () {
        var _this = this;
        var voucher;
        this.httpClient
            .get("http://localhost:5000/api/vouchers/2")
            .toPromise()
            .then(function (data) {
            var voucher = data;
            voucher.Text = "Updated by Angular";
            console.log("Voucher to update: ", voucher);
            _this.httpClient
                .put("http://localhost:5000/api/vouchers", voucher)
                .toPromise()
                .then(function (data) {
                _this.result = "voucher updated";
            });
        });
    };
    PromiseComponent.prototype.deleteVoucher = function () {
        var _this = this;
        var id = 1002;
        var url = "http://localhost:5000/api/vouchers/" + id;
        this.httpClient
            .delete(url)
            .toPromise()
            .then(function (response) {
            _this.result = "voucher with id " + id + " deleted";
            console.log(_this.result);
        });
    };
    PromiseComponent.prototype.getSum = function () {
        var _this = this;
        //Notice that we are using http here instead of HttpClient
        //HttpClient has a bug expecting Json - here a string is returned from api - public string GetSum(bool expenses)
        //Eighter return a Json string, use Interceptor or use http in this case
        //https://github.com/angular/angular/issues/18396
        this.http
            .get("http://localhost:5000/api/vouchers/getsum/true")
            .toPromise()
            .then(function (response) {
            _this.resultB = response;
            console.log("getSum()", _this.resultB);
        });
    };
    PromiseComponent.prototype.getVM = function () {
        var _this = this;
        this.httpClient
            .get("http://localhost:5000/api/vouchers/getvm/1")
            .toPromise()
            .then(function (response) {
            _this.resultB = response;
            console.log("getVM()", _this.resultB);
        });
    };
    PromiseComponent.prototype.doSave = function () {
        var _this = this;
        var voucher = {
            ID: 2,
            Text: "BP Tankstelle",
            Date: "2017-06-27T14:30:04.8849651",
            Amount: 65,
            Paid: false,
            Expense: true,
            Remark: true
        };
        console.log("Saving voucher ", voucher);
        this.httpClient
            .post("http://localhost:5000/api/vouchers/save", voucher)
            .toPromise()
            .then(function (response) { return (_this.resultB = "Voucher with id " + response + " was saved"); });
    };
    PromiseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "app-promise",
            template: __webpack_require__("../../../../../src/app/demos/promise/promise.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demos/promise/promise.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], PromiseComponent);
    return PromiseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/route.guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteGuard = (function () {
    function RouteGuard(router) {
        this.router = router;
        this.allow = !__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].authEnabled;
    }
    RouteGuard.prototype.canActivate = function (route, state) {
        if (this.allow) {
            return true;
        }
        else {
            this.router.navigate(['/']);
        }
    };
    RouteGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    RouteGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], RouteGuard);
    return RouteGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_model__ = __webpack_require__("../../../../../src/app/shared/model/model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__model_model__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__model_model__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__match_height_match_height_directive__ = __webpack_require__("../../../../../src/app/shared/match-height/match-height.directive.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* unused harmony namespace reexport */





/***/ }),

/***/ "../../../../../src/app/shared/match-height/match-height.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchHeightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MatchHeightDirective = (function () {
    function MatchHeightDirective(el) {
        this.el = el;
    }
    Object.defineProperty(MatchHeightDirective.prototype, "MatchHeight", {
        // class name to match height
        set: function (css) {
            this.cssSelector = css;
        },
        enumerable: true,
        configurable: true
    });
    MatchHeightDirective.prototype.ngAfterViewChecked = function () {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.cssSelector);
    };
    MatchHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.cssSelector);
    };
    MatchHeightDirective.prototype.matchHeight = function (parent, className) {
        // match height logic here
        if (!parent)
            return;
        var children = parent.getElementsByClassName(className);
        if (!children)
            return;
        // reset all children height
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        // gather all height
        var itemHeights = Array.from(children)
            .map(function (x) { return x.getBoundingClientRect().height; });
        // find max height
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        // apply max height
        Array.from(children)
            .forEach(function (x) { return x.style.height = maxHeight + "px"; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], MatchHeightDirective.prototype, "MatchHeight", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatchHeightDirective.prototype, "onResize", null);
    MatchHeightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[MatchHeight]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], MatchHeightDirective);
    return MatchHeightDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/model/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VoucherDetail; });
/* unused harmony export BalanceAccount */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Voucher; });
var VoucherDetail = (function () {
    function VoucherDetail() {
        this.Text = "";
        this.Account = new BalanceAccount();
    }
    return VoucherDetail;
}());

var BalanceAccount = (function () {
    function BalanceAccount() {
        this.Name = "";
    }
    return BalanceAccount;
}());

var Voucher = (function () {
    function Voucher() {
        this.Text = "";
        this.Date = new Date().toDateString();
        // this.Details = new Array<VoucherDetail>();
    }
    return Voucher;
}());



/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" >\r\n          <div class='row'>\r\n              <div class='col-xs-1'>\r\n                  <img width=\"50\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\">\r\n              </div>  \r\n              <div class='col-xs-11' >\r\n                  \r\n                      <h4 class=\"nav-heading-text\">smart Angular Single Page Application Development</h4>\r\n                  \r\n              </div>    \r\n          </div>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li>\r\n            <a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Demos</a>            \r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/vouchers\" routerLinkActive=\"active\">Vouchers</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/accounts\" routerLinkActive=\"active\">Accounts</a>\r\n        </li>\r\n        <li>\r\n          <a routerLink=\"/admin\" routerLinkActive=\"active\">Admin</a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"navbar-header navbar-right\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li>\r\n            <a>Welcome $(Username)</a>\r\n          </li>\r\n        </ul>\r\n      </div>      \r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav.navbar-nav {\n  font-size: 15px; }\n\n#searchForm {\n  margin-right: 100px; }\n\n@media (max-width: 1280px) {\n  #searchForm {\n    display: none; } }\n\n.navbar-inverse .navbar-nav > li > a, .navbar-header .navbar-brand {\n  color: white; }\n\n.navbar-inverse {\n  border-color: #848080; }\n\n.navbar {\n  border-radius: 0; }\n\n.nav-heading-text {\n  line-height: 1.6;\n  margin-left: 7px; }\n\n.navbar-brand {\n  padding: 0 !important; }\n\n.active {\n  color: red !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vouchers/voucher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VouchersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VouchersService = (function () {
    function VouchersService(httpClient) {
        this.httpClient = httpClient;
        this.vouchers = null;
    }
    VouchersService.prototype.getVouchers = function () {
        return this.httpClient.get('http://localhost:5000/api/vouchers');
    };
    VouchersService.prototype.getVoucher = function (id) {
        return this.httpClient.get('http://localhost:5000/api/vouchers/getvm/' + id);
    };
    VouchersService.prototype.insertVoucher = function (voucher) {
        this.httpClient.post('http://localhost:5000/api/vouchers', voucher)
            .subscribe(function () { return console.log("voucher with id " + voucher.ID + " inserted"); }, function (err) { return console.log(err); });
    };
    VouchersService.prototype.updateVoucher = function (voucher) {
        this.httpClient.put('http://localhost:5000/api/vouchers', voucher)
            .subscribe(function () { return console.log("voucher with id " + voucher.ID + " updated"); }, function (err) { return console.log(err); });
    };
    VouchersService.prototype.deleteVoucher = function (id) {
        var url = "http://localhost:5000/api/vouchers/" + id;
        this.httpClient.delete(url)
            .subscribe(function () { return console.log("voucher with id " + id + " deleted"); }, function (err) { return console.log(err); });
    };
    VouchersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], VouchersService);
    return VouchersService;
}());



/***/ }),

/***/ "../../../../../src/app/vouchers/voucher/voucher-detail/voucher-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vouchers/voucher/voucher-detail/voucher-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cmdPanelSmall\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <span>Selected Detail:</span>\r\n        </div>\r\n        <div class=\"col-md-4 rightCell\">\r\n            <span class=\"right\">\r\n                <a (click)=\"saveDetail()\" class=\"btn btn-xs btn-default\">Save Detail</a>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <div class=\"row spacedRow\">\r\n        <!-- <div class=\"col-md-1\">\r\n            <input type=\"text\" [ngModel]=\"detail.ID\" readonly class=\"form-control input-sm\" />\r\n        </div> -->\r\n\r\n        <div class=\"col-md-6\">\r\n            <input type=\"text\" [(ngModel)]=\"detail.Text\" size=\"40\" placeholder=\"Text:\" class=\"form-control input-sm\" />\r\n        </div>\r\n\r\n        <div class=\"col-md-2\">\r\n            <input type=\"number\" [(ngModel)]=\"detail.Amount\" size=\"15\" class=\"form-control input-sm vdElement\" />\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n            <select [(ngModel)]=\"detail.AccountID\" class=\"form-control input-sm vdElement\" >\r\n                <option *ngFor=\"let acct of accounts\" [ngValue]=\"acct.ID\" >{{acct.Name}}</option> \r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row spacedRow\">\r\n        <div class=\"col-md-12\">\r\n            <textarea [(ngModel)]=\"detail.Comment\" class=\"form-control vdElement\" rows=\"4\" placeholder=\"Comment\"></textarea>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vouchers/voucher/voucher-detail/voucher-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VoucherDetailComponent = (function () {
    function VoucherDetailComponent() {
        this.detailSaved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    VoucherDetailComponent.prototype.ngOnInit = function () {
        console.log(this.detail);
    };
    VoucherDetailComponent.prototype.saveDetail = function () {
        this.detailSaved.emit(this.detail);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_index__["b" /* VoucherDetail */])
    ], VoucherDetailComponent.prototype, "detail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], VoucherDetailComponent.prototype, "accounts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], VoucherDetailComponent.prototype, "detailSaved", void 0);
    VoucherDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-voucher-detail',
            template: __webpack_require__("../../../../../src/app/vouchers/voucher/voucher-detail/voucher-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vouchers/voucher/voucher-detail/voucher-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VoucherDetailComponent);
    return VoucherDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vouchers/voucher/voucher-details-list/voucher-details-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vouchers/voucher/voucher-details-list/voucher-details-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cmdPanelSmall\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <span>Details</span>\r\n        </div>\r\n        <div class=\"col-md-4 rightCell\">\r\n            <a (click)=\"addDetail()\" class=\"btn btn-xs btn-default\">New</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"spacer\">    \r\n    <div class=\"table-responsive\">\r\n        <table cellspacing=\"0\" cellpadding=\"0\" class=\"table table-hover\">\r\n            <colgroup>\r\n                <!-- <col style=\"width: 5%\"/> -->\r\n                <col style=\"width: 40%\"/>\r\n                <col style=\"width: 15%\"/>\r\n                <col style=\"width: 30%\"/>\r\n                <col style=\"width: 5%\"/>\r\n                <col style=\"width: 5%\"/>\r\n            </colgroup>\r\n            <thead>\r\n            <tr>\r\n                <!-- <th scope=\"col\">ID</th> -->\r\n                <th scope=\"col\">Text</th>\r\n                <th scope=\"col\">Amount</th>\r\n                <th scope=\"col\">Account</th>\r\n                <th colspan=\"2\" scope=\"col\"></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody id=\"tblVoucherDetailsBody\">\r\n            <tr *ngFor=\"let vd of details\">\r\n                <!-- <td class=\"readonlyID\">{{vd.ID}}</td> -->\r\n                <td> {{vd.Text}}</td>\r\n                <td class=\"detailsAmountItem\">{{vd.Amount | currency:'EUR':true}}</td>\r\n                <td> {{vd?.Account.Name}}</td>\r\n                <td>\r\n                    <a ng-click=\"deleteDetail(vd)\" class=\"btn btn-xs btn-default\">Delete</a>\r\n                </td>\r\n                <td>\r\n                    <a (click)=\"selectDetail(vd)\" class=\"btn btn-xs btn-default\">Edit</a>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vouchers/voucher/voucher-details-list/voucher-details-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherDetailsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VoucherDetailsListComponent = (function () {
    function VoucherDetailsListComponent() {
        this.detailSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.detailAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.detailDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    VoucherDetailsListComponent.prototype.ngOnInit = function () {
        console.log("received details " + this.details);
    };
    VoucherDetailsListComponent.prototype.selectDetail = function (d) {
        this.detailSelected.emit(d);
    };
    VoucherDetailsListComponent.prototype.addDetail = function () {
        var nd = new __WEBPACK_IMPORTED_MODULE_1__shared_index__["b" /* VoucherDetail */]();
        this.detailAdded.emit(nd);
    };
    VoucherDetailsListComponent.prototype.deleteDetail = function (d) {
        this.detailDeleted.emit(d);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], VoucherDetailsListComponent.prototype, "details", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], VoucherDetailsListComponent.prototype, "detailSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], VoucherDetailsListComponent.prototype, "detailAdded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], VoucherDetailsListComponent.prototype, "detailDeleted", void 0);
    VoucherDetailsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-voucher-details-list',
            template: __webpack_require__("../../../../../src/app/vouchers/voucher/voucher-details-list/voucher-details-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vouchers/voucher/voucher-details-list/voucher-details-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VoucherDetailsListComponent);
    return VoucherDetailsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vouchers/voucher/voucher.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bd-voucherBox-row .row+.row{\r\n    margin-top: 1rem;\r\n}\r\n.btnBoxPadding {\r\n    padding-top: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vouchers/voucher/voucher.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cmdPanel\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <span>Voucher {{voucher.ID}}</span>\r\n        </div>\r\n        <div class=\"col-md-4 rightCell\">\r\n            <a routerLink=\"/vouchers\" class=\"btn btn-xs btn-default\">Cancel / Back</a>\r\n            <a (click)=\"saveVoucher()\" class=\"btn btn-xs btn-default\">Save Voucher</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"section bd-voucherBox-row\">\r\n\r\n    <!-- Voucher Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <input id=\"VoucherText\" [(ngModel)]=\"voucher.Text\" size=\"40\" type=\"text\" placeholder=\"Text:\" class=\"form-control input-sm\" />\r\n        </div>\r\n\r\n        <div class=\"col-md-2\">            \r\n            <input type=\"text\" #dp=\"bsDatepicker\" bsDatepicker  [(ngModel)]=\"voucher.Date\" class=\"form-control input-sm vdElement\" >\r\n        </div>\r\n\r\n        <div class=\"col-md-2\">\r\n            <input [(ngModel)]=\"voucher.Amount\" size=\"15\" type=\"text\" placeholder=\"0\" class=\"span7 form-control input-sm\" />\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n            <ul class=\"nav\">\r\n                <li class=\"col-md-4\">\r\n                    <label class=\"radio-inline\" for=\"rbExpense\">\r\n                            <input type=\"radio\" name=\"radios\" ng-value=\"true\" [(ngModel)]=\"voucher.Expense\"/>\r\n                            Expense:\r\n                        </label>\r\n                </li>\r\n                <li class=\"col-md-4\">\r\n                    <label class=\"radio-inline\" for=\"rbIncome\">\r\n                            <input type=\"radio\" name=\"radios\" ng-value=\"false\" [(ngModel)]=\"voucher.Expense\"/>\r\n                            Income:\r\n                        </label>\r\n                </li>\r\n                <li class=\"col-md-4\">\r\n                    <label class=\"checkbox-inline\" for=\"chkPaid\">\r\n                            <input [(ngModel)]=\"voucher.Paid\" type=\"checkbox\" name=\"checkboxes\" id=\"chkPaid\" value=\"Paid\"/>\r\n                            Paid:\r\n                        </label>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>    \r\n\r\n    <!-- Voucher Details -->\r\n    <app-voucher-details-list [details]=\"voucher==undefined?null:voucher.Details\" (detailSelected)=\"selectDetail($event)\" (detailAdded)=\"addDetail($event)\"></app-voucher-details-list>\r\n\r\n    <!-- Edit Detail -->\r\n    <div *ngIf=\"currentDetail!=undefined\">\r\n        <app-voucher-detail [detail]=\"currentDetail\" [accounts]=\"accounts\" (detailSaved)=\"saveDetail($event)\"></app-voucher-detail>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vouchers/voucher/voucher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voucher_service__ = __webpack_require__("../../../../../src/app/vouchers/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_uuid__ = __webpack_require__("../../../../angular2-uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_uuid__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VoucherComponent = (function () {
    function VoucherComponent(vs, route) {
        this.vs = vs;
        this.route = route;
        this.voucher = null;
        this.accounts = null;
    }
    VoucherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.voucher = new __WEBPACK_IMPORTED_MODULE_3__shared_index__["a" /* Voucher */]();
        this.vs.getVoucher(this.route.snapshot.params['id']).subscribe(function (data) {
            if (data.CurrentVoucher != null) {
                _this.voucher = data.CurrentVoucher;
            }
            _this.accounts = data.Accounts;
            if (_this.voucher.Details == undefined || _this.voucher.Details == null) {
                _this.voucher.Details = new Array();
                _this.addDetail(new __WEBPACK_IMPORTED_MODULE_3__shared_index__["b" /* VoucherDetail */]());
            }
            _this.currentDetail = _this.voucher.Details[0];
        });
    };
    VoucherComponent.prototype.saveVoucher = function () {
        if (this.voucher.ID == undefined) {
            this.vs.insertVoucher(this.voucher);
        }
        else {
            this.vs.updateVoucher(this.voucher);
        }
    };
    VoucherComponent.prototype.selectDetail = function (detail) {
        this.currentDetail = detail;
    };
    VoucherComponent.prototype.addDetail = function (detail) {
        detail.TempId = __WEBPACK_IMPORTED_MODULE_4_angular2_uuid__["UUID"].UUID();
        this.voucher.Details.push(detail);
        this.currentDetail = detail;
    };
    VoucherComponent.prototype.saveDetail = function (detail) {
        var idx = detail.TempId != null ? this.voucher.Details.findIndex(function (item) { return item.TempId == detail.TempId; }) : this.voucher.Details.findIndex(function (item) { return item.ID == detail.ID; });
        this.voucher.Details.splice(idx, 1);
        detail.Account = this.accounts.find(function (item) { return item.ID == detail.AccountID; });
        this.voucher.Details.push(detail);
    };
    VoucherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-voucher',
            template: __webpack_require__("../../../../../src/app/vouchers/voucher/voucher.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vouchers/voucher/voucher.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__voucher_service__["a" /* VouchersService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]])
    ], VoucherComponent);
    return VoucherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vouchers/vouchers-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "tr{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vouchers/vouchers-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">  \r\n  <div>\r\n    <table class=\"table\">\r\n      <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Date</th>\r\n            <th>Text</th>\r\n            <th>Amount</th>\r\n            <th></th>\r\n          </tr>\r\n      </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let v of vouchers\" (click)=\"showVoucher(v.ID)\">\r\n            <td>{{v.ID}}</td>\r\n            <td>{{v.Date | date:'shortDate'}}</td>\r\n            <td>{{v.Text}}</td>\r\n            <td>{{v.Amount | currency:'EUR':true}} </td>\r\n            <td><a [routerLink]=\"[ '/vouchers', v.ID ]\">Edit</a></td>\r\n          </tr>    \r\n    </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/vouchers/vouchers-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VouchersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__voucher_service__ = __webpack_require__("../../../../../src/app/vouchers/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VouchersListComponent = (function () {
    function VouchersListComponent(router, vs) {
        this.router = router;
        this.vs = vs;
    }
    VouchersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vs.getVouchers().subscribe(function (data) { return _this.vouchers = data; });
    };
    VouchersListComponent.prototype.showVoucher = function (id) {
        this.router.navigate(['/vouchers/' + id]);
    };
    VouchersListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-vouchers-list',
            template: __webpack_require__("../../../../../src/app/vouchers/vouchers-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vouchers/vouchers-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__voucher_service__["a" /* VouchersService */]])
    ], VouchersListComponent);
    return VouchersListComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    authEnabled: false,
    firebaseToken: "QeOv74uiEDNz7QM91bjYKc82VgS2"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map