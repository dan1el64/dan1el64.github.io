"use strict";
(self["webpackChunkBloxcrossFrontend"] = self["webpackChunkBloxcrossFrontend"] || []).push([["main"],{

/***/ 78009:
/*!****************************************!*\
  !*** ./src/Modules/material-module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/stepper */ 44193);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);













class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSortModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinnerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__.MatStepperModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSortModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinnerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__.MatStepperModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule] }); })();


/***/ }),

/***/ 51270:
/*!***********************************************************!*\
  !*** ./src/app/BuyAndSell/buy-sell/buy-sell.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuySellComponent": () => (/* binding */ BuySellComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/Enum/EnumPopUp.enum */ 42241);
/* harmony import */ var src_models_Portafolio_portfolioBalanceForSymbol_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/Portafolio/portfolioBalanceForSymbol.model */ 52467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_Client_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/Client/client.service */ 64022);
/* harmony import */ var src_services_portafolio_portafolio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/portafolio/portafolio.service */ 21013);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_services_WebSocket_socketio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/WebSocket/socketio.service */ 97317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/manage-data.service */ 43607);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var src_services_payments_payment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/payments/payment.service */ 61084);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 38699);

















const _c0 = ["inputAmount"];
const _c1 = ["inputQuantity"];

function BuySellComponent_div_8_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r1.portfolio_data.name, " ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, ctx_r1.usd_value), "");
  }
}

function BuySellComponent_div_8_div_90_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "span", 48);
  }
}

function BuySellComponent_div_8_div_90_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Confirm Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function BuySellComponent_div_8_div_90_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Validating ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function BuySellComponent_div_8_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 39)(1, "div", 44)(2, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BuySellComponent_div_8_div_90_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.Buy());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, BuySellComponent_div_8_div_90_span_3_Template, 1, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, BuySellComponent_div_8_div_90_span_4_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, BuySellComponent_div_8_div_90_span_5_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](41);

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](52);

    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", _r2.value == "" || _r3.value == "" || ctx_r6.validating || ctx_r6.disable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r6.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.validating);
  }
}

function BuySellComponent_div_8_div_91_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "span", 48);
  }
}

function BuySellComponent_div_8_div_91_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Confirm Sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function BuySellComponent_div_8_div_91_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Validating ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function BuySellComponent_div_8_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 39)(1, "div", 44)(2, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BuySellComponent_div_8_div_91_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r16.Sell());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, BuySellComponent_div_8_div_91_span_3_Template, 1, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, BuySellComponent_div_8_div_91_span_4_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, BuySellComponent_div_8_div_91_span_5_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](41);

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](52);

    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", _r2.value == "" || _r3.value == "" || ctx_r7.validating || ctx_r7.disable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r7.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.validating);
  }
}

function BuySellComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 8)(8, "div", 12)(9, "div", 13)(10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BuySellComponent_div_8_Template_label_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r18.BuyAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BuySellComponent_div_8_Template_label_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r20.SellAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BuySellComponent_div_8_Template_label_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r21.AmountAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BuySellComponent_div_8_Template_label_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r22.QuantityAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 8)(31, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, BuySellComponent_div_8_span_32_Template, 3, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 24)(34, "div", 25)(35, "div", 26)(36, "div", 27)(37, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function BuySellComponent_div_8_Template_input_input_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);

      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](41);

      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r23.InputAmount(_r2.value, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 31)(43, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 25)(46, "div", 26)(47, "div", 27)(48, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "input", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function BuySellComponent_div_8_Template_input_input_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](52);

      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r24.InputAmount(_r3.value, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 31)(54, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 34)(57, "div", 25)(58, "div", 26)(59, "div", 27)(60, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "Fee:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](62, "input", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "div", 31)(65, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 25)(68, "div", 26)(69, "div", 27)(70, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](72, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 31)(75, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76, "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "div", 39)(78, "div", 40)(79, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BuySellComponent_div_8_Template_button_click_79_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r25.PerceintsButtons("25"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, " 25% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "div", 40)(82, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BuySellComponent_div_8_Template_button_click_82_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r26.PerceintsButtons("50"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](83, " 50% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "div", 40)(85, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BuySellComponent_div_8_Template_button_click_85_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r27.PerceintsButtons("75"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, " 75% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "div", 40)(88, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BuySellComponent_div_8_Template_button_click_88_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r28.PerceintsButtons("100"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89, " 100% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](90, BuySellComponent_div_8_div_90_Template, 6, 4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](91, BuySellComponent_div_8_div_91_Template, 6, 4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r0.assets_data.logo, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"](" ", ctx_r0.assets_data.symbol, " ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 35, ctx_r0.price), " - ", ctx_r0.qty_value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.validating)("checked", ctx_r0.actionToDo == "buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 37, "general.buy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.validating)("checked", ctx_r0.actionToDo == "sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 39, "general.sell"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.validating)("checked", ctx_r0.flagRequest == "amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](25, 41, "funds.amount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.validating)("checked", ctx_r0.flagRequest == "qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 43, "funds.quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.portfolio_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](39, 45, "funds.amount"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.amount_disabled || ctx_r0.validating)("max", ctx_r0.usd)("value", ctx_r0.amount_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](50, 47, "funds.quantity"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("max", ctx_r0.qty)("disabled", ctx_r0.qty_disabled || ctx_r0.validating)("value", ctx_r0.quantity_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.assets_data.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("max", ctx_r0.assets_data.usd)("value", ctx_r0.fee_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.total_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.actionToDo == "buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.actionToDo == "sell");
  }
}

class BuySellComponent {
  constructor(client, portfolio_service, balance, toastr, websocket_msg, router, manage_data, spinner, buy_sell, dialogRef) {
    this.client = client;
    this.portfolio_service = portfolio_service;
    this.balance = balance;
    this.toastr = toastr;
    this.websocket_msg = websocket_msg;
    this.router = router;
    this.manage_data = manage_data;
    this.spinner = spinner;
    this.buy_sell = buy_sell;
    this.dialogRef = dialogRef;
    this.amount_value = "";
    this.quantity_value = "";
    this.flagRequest = 'amount';
    this.buymax_available = false;
    this.sellmax_available = true;
    this.amount_disabled = false;
    this.qty_disabled = true;
    this.validating = false;
    this.disable = false;
    this.max = false;
    this.actionToDo = "";
    this.price = 0;
    this.graphvalue_1 = [];
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.spinner.show();

      yield _this.GetSubject();
    })();
  }

  GetSubject() {
    var _this2 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.subscription.add(_this2.manage_data.getSubject(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_1__.EnumEventsPopUp.buy_sell.toString()).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          if (data) {
            yield _this2.GetConfigData(data);

            _this2.buysell();

            _this2.spinner.hide();
          } else {
            _this2.ReturnToAssets();
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()));
    })();
  }

  GetDataBlox() {
    var _this3 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.subscription.add(_this3.websocket_msg.GetDataBlox().subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          try {
            if (typeof data === 'string') {
              _this3.SetValues(JSON.parse(data));
            } else {
              console.warn("wrong data websocket", data);
            }
          } catch (error) {
            console.error("error websocket GetDataBlox", error);
          }
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }()));
    })();
  }

  GetBalanceUSDResponse() {
    var _this4 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let balancesUSDResponse = yield _this4.GetPortafolioBalanceBySymbol(_this4.portfolio_data.name, "USD");
      _this4.usd = Number(balancesUSDResponse).toFixed(3);
      _this4.usd_value = balancesUSDResponse;

      if (_this4.usd <= 0) {
        _this4.buymax_available = false;
      } else {
        _this4.buymax_available = true;
      }
    })();
  }

  GetBalanceSymbolResponse(selldata) {
    var _this5 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let balanceSymbolResponse = yield _this5.GetPortafolioBalanceBySymbol(_this5.portfolio_data.name, selldata);
      _this5.qty = Number(balanceSymbolResponse).toFixed(3);
      _this5.qty_value = balanceSymbolResponse;

      if (_this5.qty <= 0) {
        _this5.sellmax_available = false;
      } else {
        _this5.sellmax_available = true;
      }
    })();
  }

  GetConfigData(buySellData) {
    var _this6 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.symbol = buySellData.symbol;
      _this6.assets_data = buySellData;
      _this6.actionToDo = buySellData.action;
      let portafolioResponse = yield _this6.GetDefaultPortafolio();
      let clientInfoResponse = yield _this6.GetClientInfo();
      _this6.portfolio_data = portafolioResponse;
      _this6.fees_client = JSON.parse(clientInfoResponse.fees);
      yield _this6.GetDataBlox();
      yield _this6.GetBalanceUSDResponse();
      yield _this6.GetBalanceSymbolResponse(buySellData.symbol);

      switch (buySellData.action) {
        case "sell":
          _this6.usd = Number(_this6.qty * _this6.bid_value).toFixed(3);
          _this6.fee = Number(_this6.fees_client.SELL);
          break;

        case "buy":
          _this6.qty = Number(_this6.usd / _this6.ask_value).toFixed(3);
          _this6.fee = Number(_this6.fees_client.BUY);
          break;
      }

      _this6.SetFocusOnElement();
    })();
  }

  SetValues(data) {
    if (data.product_id == this.symbol + "-USD") {
      if (this.ask_value != data.best_ask.price) {
        this.ask_value = data.best_ask.price; //Comprar
      }

      if (this.bid_value != data.best_bid.price) {
        this.bid_value = data.best_bid.price; //Vender
      }

      if (this.actionToDo == 'buy' && this.price != this.ask_value) {
        this.price = this.ask_value;
      } else if (this.actionToDo == 'sell' && this.price != this.bid_value) {
        this.price = this.bid_value;
      }
    }

    return;
  }

  GetPortafolioBalanceBySymbol(portafolioName, symbol) {
    const asset = {
      portfolio_name: portafolioName,
      symbol: symbol
    };
    return new Promise((resolve, reject) => {
      this.subscription.add(this.balance.GetPortafolioBalancesForSymbol(asset).subscribe(data => {
        console.log("data.qty:", data);

        if (data) {
          resolve(data.qty);
        } else {
          resolve(0);
        }
      }, err => {
        console.error("Error on GetAssetData:", err);
        this.ReturnToAssets();
        resolve(null);
      }));
    });
  }

  InputAmount(value, isAmount) {
    this.max = false;

    if (isAmount) {
      if (this.actionToDo == "buy") {
        this.amount_value = Number(value);
        this.quantity_value = Number(this.amount_value / this.ask_value);
        this.fee_value = Number(this.amount_value / this.fee).toFixed(3);
        this.total_value = Number(this.amount_value + Number(this.fee_value)).toFixed(3);
      } else if (this.actionToDo == "sell") {
        this.amount_value = Number(value);
        this.quantity_value = Number(this.amount_value / this.bid_value);
        this.fee_value = Number(this.amount_value / this.fee).toFixed(3);
        this.total_value = Number(this.amount_value + Number(this.fee_value)).toFixed(3);
      }
    } else {
      if (this.actionToDo == "buy") {
        this.quantity_value = Number(value);
        this.amount_value = Number(this.quantity_value * this.ask_value).toFixed(3);
        this.fee_value = Number(this.amount_value / this.fee).toFixed(3);
        this.total_value = Number(Number(this.amount_value) + Number(this.fee_value)).toFixed(3);
      } else if (this.actionToDo == "sell") {
        this.quantity_value = Number(value);
        this.amount_value = Number(this.quantity_value * this.bid_value).toFixed(3);
        this.fee_value = Number(this.amount_value / this.fee).toFixed(3);
        this.total_value = Number(Number(this.amount_value) + Number(this.fee_value)).toFixed(3);
      }
    }

    if (this.actionToDo == "buy" && Number(this.total_value) > this.usd_value) {
      this.disable = true;
      this.ShowError("Available exceeded !!", "", false);
      return;
    }

    if (this.actionToDo == "sell" && this.quantity_value > this.qty_value) {
      this.disable = true;
      this.ShowError("Available exceeded !!", "", false);
      return;
    }

    if (Number(this.total_value) === 0) {
      this.disable = true;
      return;
    }

    this.disable = false;
  }

  Buy() {
    var _this7 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.validating = true;

      if (_this7.max) {
        console.log("BuyMax");

        _this7.ActionBuyMax();

        return;
      }

      switch (_this7.flagRequest) {
        case 'qty':
          let buyByQtyResponse = yield _this7.BuyByQty();

          if (!buyByQtyResponse) {
            _this7.validating = false;
            setTimeout(() => {
              _this7.amount_value = 0;
              _this7.quantity_value = 0;
            }, 3000);
            return;
          }

          console.log("buyByQtyResponse:", buyByQtyResponse);
          _this7.validating = false;

          _this7.Close(); // this.router.navigate(['/home/portafolio']);


          break;

        case 'amount':
          let buyByAmountResponse = yield _this7.BuyByAmount();

          if (!buyByAmountResponse) {
            _this7.validating = false;
            setTimeout(() => {
              _this7.amount_value = 0;
              _this7.quantity_value = 0;
            }, 3000);
            return;
          }

          console.log("buyByAmountResponse:", buyByAmountResponse);
          _this7.validating = false;

          _this7.Close(); // this.router.navigate(['/home/portafolio']);


          break;

        default:
          break;
      }
    })();
  }

  Sell() {
    var _this8 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.validating = true;

      if (_this8.max) {
        console.log("SellMax");

        _this8.ActionSellMax();

        return;
      }

      switch (_this8.flagRequest) {
        case 'qty':
          let sellByQtyResponse = yield _this8.SellByQty();

          if (!sellByQtyResponse) {
            _this8.validating = false;
            setTimeout(() => {
              _this8.amount_value = 0;
              _this8.quantity_value = 0;
            }, 3000);
            return;
          }

          _this8.validating = false;

          _this8.Close(); // this.router.navigate(['/home/portafolio']);


          break;

        case 'amount':
          let sellByAmountResponse = yield _this8.SellByAmount();

          if (!sellByAmountResponse) {
            _this8.validating = false;
            setTimeout(() => {
              _this8.amount_value = 0;
              _this8.quantity_value = 0;
            }, 3000);
            return;
          }

          _this8.validating = false;

          _this8.Close(); // this.router.navigate(['/home/portafolio']);


          break;

        default:
          break;
      }
    })();
  }

  ActionBuyMax() {
    var _this9 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.validating = true;
      const data = {
        portfolio_name: _this9.portfolio_data.name,
        user_oid: Date.now(),
        symbol: _this9.assets_data.symbol + "-USD"
      };
      let buyMaxResponse = yield _this9.BuyMax(data);

      if (buyMaxResponse === null) {
        _this9.validating = false;
        setTimeout(() => {
          _this9.amount_value = 0;
          _this9.quantity_value = 0;
        }, 3000);
        return;
      }

      _this9.Close();
    })();
  }

  ActionSellMax() {
    var _this10 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this10.validating = true;
      const data = {
        portfolio_name: _this10.portfolio_data.name,
        user_oid: Date.now(),
        symbol: _this10.assets_data.symbol + "-USD"
      };
      let sellMaxResponse = yield _this10.SellMax(data);

      if (sellMaxResponse === null) {
        _this10.validating = false;
        setTimeout(() => {
          _this10.amount_value = 0;
          _this10.quantity_value = 0;
        }, 3000);
        return;
      }

      _this10.Close();
    })();
  }

  PerceintsButtons(perceint) {
    switch (perceint) {
      case '25':
        this.max = false;
        this.ApplyPercentage(0.25);
        break;

      case '50':
        this.max = false;
        this.ApplyPercentage(0.5);
        break;

      case '75':
        this.max = false;
        this.ApplyPercentage(0.75);
        break;

      case '100':
        this.max = true;
        this.ApplyPercentage(1);
        break;

      default:
        break;
    }
  }

  BuyByQty() {
    const data = {
      portfolio_name: this.portfolio_data.name,
      user_oid: Date.now(),
      symbol: this.assets_data.symbol + "-USD",
      quantity: Number(this.quantity_value)
    };
    return new Promise((resolve, reject) => {
      this.subscription.add(this.buy_sell.BuyByQty(data).subscribe(response => {
        resolve(response);
      }, err => {
        this.ReturnToAssets();
        resolve(null);
      }));
    });
  }

  SellByQty() {
    const data = {
      portfolio_name: this.portfolio_data.name,
      user_oid: Date.now(),
      symbol: this.assets_data.symbol + "-USD",
      quantity: Number(this.quantity_value)
    };
    return new Promise((resolve, reject) => {
      this.subscription.add(this.buy_sell.SellByQty(data).subscribe(response => {
        resolve(response);
      }, err => {
        this.ReturnToAssets();
        reject(null);
      }));
    });
  }

  SellByAmount() {
    const data = {
      portfolio_name: this.portfolio_data.name,
      user_oid: Date.now(),
      symbol: this.assets_data.symbol + "-USD",
      amount: Number(this.amount_value)
    };
    return new Promise((resolve, reject) => {
      this.subscription.add(this.buy_sell.SellByAmount(data).subscribe(response => {
        resolve(response);
      }, err => {
        reject(null);
        this.ReturnToAssets();
      }));
    });
  }

  BuyByAmount() {
    const data = {
      portfolio_name: this.portfolio_data.name,
      user_oid: Date.now(),
      symbol: this.assets_data.symbol + "-USD",
      amount: Number(this.amount_value)
    };
    return new Promise((resolve, reject) => {
      this.subscription.add(this.buy_sell.BuyByAmount(data).subscribe(response => {
        resolve(response);
      }, err => {
        this.ReturnToAssets();
        reject(null);
      }));
    });
  }

  BuyMax(data) {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.buy_sell.BuyMax(data).subscribe(response => {
        resolve(response);
      }, err => {
        this.ReturnToAssets();
        resolve(null);
      }));
    });
  }

  SellMax(data) {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.buy_sell.SellMax(data).subscribe(response => {
        resolve(response);
      }, err => {
        resolve(null);
        this.ReturnToAssets();
      }));
    });
  }

  GetClientInfo() {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.client.GetClientConfig().subscribe(response => {
        resolve(response);
      }, err => {
        resolve(null);
        this.ReturnToAssets();
      }));
    });
  }

  GetDefaultPortafolio() {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.portfolio_service.GetDefault().subscribe(response => {
        resolve(response);
      }, err => {
        console.error("Error on GetDefaultPortafolio:", err);
        resolve(null);
      }));
    });
  }

  buysell() {
    this.qty = Number(this.usd / this.ask_value).toFixed(3);
    this.fee = Number(this.fees_client.BUY);
  }

  BuyAction() {
    this.actionToDo = 'buy';
    this.qty = Number(this.usd / this.ask_value).toFixed(3);
    this.fee = Number(this.fees_client.BUY);
    this.SetFocusOnElement();
  }

  SellAction() {
    this.actionToDo = 'sell';
    this.usd = Number(this.qty * this.bid_value).toFixed(3);
    this.fee = Number(this.fees_client.SELL);
    this.SetFocusOnElement();
  }

  AmountAction() {
    this.flagRequest = 'amount';
    this.amount_disabled = false;
    this.qty_disabled = true;
    this.SetFocusOnElement();
  }

  QuantityAction() {
    this.flagRequest = 'qty';
    this.amount_disabled = true;
    this.qty_disabled = false;
    this.SetFocusOnElement();
  }

  ShowError(msg, title = "", disableTimeOut = true) {
    console.error(msg);
    this.toastr.error(msg, title, {
      closeButton: true,
      disableTimeOut: disableTimeOut,
      positionClass: 'toast-center-center'
    });
  }

  ReturnToAssets(miliseconds = 3000) {
    setTimeout(() => {
      this.router.navigate(['/home/dashboard/assets']);
    }, miliseconds);
  }

  ReturnToPortafolio(miliseconds = 0) {
    setTimeout(() => {
      this.router.navigate(['/home/portafolio']);
    }, miliseconds);
  }

  SetFocusOnElement() {
    setTimeout(() => {
      if (this.flagRequest == "amount") {
        if (this.inputAmountElement) {
          this.inputAmountElement.nativeElement.focus();
        }
      } else {
        if (this.inputQuantityElement) {
          this.inputQuantityElement.nativeElement.focus();
        }
      }
    }, 100);
  }

  ApplyPercentage(percentage) {
    if (this.actionToDo == 'sell') {
      if (this.qty_value > 0) {
        this.quantity_value = Number(this.qty_value) * percentage;
        this.amount_value = Number(this.quantity_value * this.bid_value).toFixed(3);
      } else {
        console.warn("there are not enough coins");
        this.disable = true;
        this.ShowError("Available exceeded !!", "", false);
        return;
      }
    } else if (this.actionToDo == 'buy') {
      if (this.usd_value > 0) {
        let valueFee = 0;

        if (percentage === 1) {
          valueFee = this.usd_value / this.fee;
        }

        this.amount_value = (Number(this.usd_value - valueFee) * percentage).toFixed(3);
        this.quantity_value = Number(this.amount_value / this.ask_value);
      } else {
        console.warn("there are not enough money");
        this.disable = true;
        this.ShowError("Available exceeded !!", "", false);
        return;
      }
    }

    this.fee_value = Number(this.amount_value / this.fee).toFixed(3);
    this.total_value = Number(Number(this.amount_value) + Number(this.fee_value)).toFixed(3);
    this.disable = false;
  } //********************************************************************************
  //Close PopUp
  //********************************************************************************


  Close() {
    this.dialogRef.close();
  }

}

BuySellComponent.ɵfac = function BuySellComponent_Factory(t) {
  return new (t || BuySellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_services_Client_client_service__WEBPACK_IMPORTED_MODULE_3__.ClientService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_services_portafolio_portafolio_service__WEBPACK_IMPORTED_MODULE_4__.PortafolioService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_services_portafolio_portafolio_service__WEBPACK_IMPORTED_MODULE_4__.PortafolioService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_services_WebSocket_socketio_service__WEBPACK_IMPORTED_MODULE_5__.SocketioService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_6__.ManageDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_services_payments_payment_service__WEBPACK_IMPORTED_MODULE_7__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogRef));
};

BuySellComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: BuySellComponent,
  selectors: [["app-buy-sell"]],
  viewQuery: function BuySellComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.inputAmountElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.inputQuantityElement = _t.first);
    }
  },
  decls: 9,
  vars: 5,
  consts: [["type", "button", "aria-label", "Close", 1, "btnclose", 2, "cursor", "pointer", "text-align", "end", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-x-lg"], ["d", "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "line-scale-pulse-out", 3, "fullScreen"], [2, "color", "white"], [1, "scroll"], ["class", "", "style", "max-width: 95%; ", 4, "ngIf"], [1, "", 2, "max-width", "95%"], [1, "row", "text-center"], [1, "col", "mb-3"], [2, "width", "50px", 3, "src"], [1, "label", "label-default", "titlefirs", "h3"], [1, "col"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "mb-2"], ["role", "group", "aria-label", "Basic radio toggle button group", 1, "btn-group"], ["type", "radio", "name", "btnradio", "id", "btnRadioBuy", "autocomplete", "off", 1, "btn-check", 3, "disabled", "checked"], ["for", "btnRadioBuy", 1, "btn", "btn-outline-box", "respobtn", 3, "click"], ["type", "radio", "name", "btnradio", "id", "btnRadioSell", "autocomplete", "off", 1, "btn-check", 3, "disabled", "checked"], ["for", "btnRadioSell", 1, "btn", "btn-outline-box", "respobtn", 3, "click"], ["type", "radio", "name", "btnradio2", "id", "btnRadioAmount", "autocomplete", "off", 1, "btn-check", 3, "disabled", "checked"], ["for", "btnRadioAmount", 1, "btn", "btn-outline-box", "respobtn", 3, "click"], ["type", "radio", "name", "btnradio2", "id", "btnRadioQty", "autocomplete", "off", 1, "btn-check", 3, "disabled", "checked"], ["for", "btnRadioQty", 1, "btn", "btn-outline-box", "respobtn", 3, "click"], ["class", "label label-default titlefirs h5", 4, "ngIf"], [1, "text-center", "mt-2"], [1, ""], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text", "respobtn"], ["type", "number", "min", "0", "aria-label", "Small", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control", "respobtn", 3, "disabled", "max", "value", "input"], ["inputAmount", ""], [1, "input-group-append"], ["type", "number", "min", "0", "aria-label", "Small", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control", "respobtn", 3, "max", "disabled", "value", "input"], ["inputQuantity", ""], [1, "row", "text-center", 2, "margin-top", "20px"], ["disabled", "true", "type", "number", "min", "0", "aria-label", "Small", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control", "respobtn", 3, "max", "value"], ["inputFee", ""], ["disabled", "true", "type", "number", "min", "0", "aria-label", "Small", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control", "respobtn", 3, "value"], ["inputTotal", ""], [1, "row"], [1, "col-3", "mb-3", "text-center"], [1, "btn", "btn-success", "btn-circle", "btn-lg", "respobtn", 2, "background-color", "rgb(58, 187, 53)", "border-color", "rgb(58, 187, 53)", 3, "disabled", "click"], ["class", "row", 4, "ngIf"], [1, "label", "label-default", "titlefirs", "h5"], [1, "col", "text-center"], ["type", "button", 1, "btn", "btn-success", 2, "width", "100%", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]],
  template: function BuySellComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BuySellComponent_Template_div_click_0_listener() {
        return ctx.Close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "svg", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "path", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ngx-spinner", 3)(4, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, BuySellComponent_div_8_Template, 92, 49, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fullScreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 3, "general.cargando"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.actionToDo === "buy" || ctx.actionToDo === "sell");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
  styles: [".search-bar[_ngcontent-%COMP%] {\n  background-color: #4eb965;\n}\n\n.assets-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  margin: 1rem;\n  border-radius: 0.6rem;\n  background: #cecccc;\n  color: #fff;\n}\n\n.asset-list-item[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n  background: #014e08;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.5rem;\n  min-width: 1rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-top: 2rem;\n  background-size: 10px;\n  color: #000000;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  -webkit-background-size: initial;\n  \n}\n\n.assets-easy-page[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  margin-bottom: 0.2rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 5rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n  font-size: 1rem;\n  color: #4D4D4D;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   span.amount[_ngcontent-%COMP%] {\n  background-color: #f3f3f3;\n  color: #000000;\n  font-size: 2rem;\n  font-weight: bold;\n  border-radius: 1.5rem;\n  padding: 5px 2rem;\n  z-index: 2;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .asset-container[_ngcontent-%COMP%] {\n  background-color: #FAFAFA;\n  border-radius: 2rem 2rem 0 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1rem;\n  padding-top: 3rem;\n  position: relative;\n  top: -1.5rem;\n  width: 100%;\n  z-index: 1;\n  height: 100%;\n  font-size: 0.8rem;\n  justify-content: flex-start;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .buy-sell-message[_ngcontent-%COMP%] {\n  margin: 1rem;\n  color: #4D4D4D;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .buy-sell-message.green[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .buy-sell-message.red[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .buy-sell-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 0.4rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%] {\n  margin: 1rem auto;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: solid 1px #2bba4a;\n  border-radius: 1rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%] {\n  color: #000000;\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .listpoint[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: rgb(236, 236, 236) rgba(255, 166, 0, 0);\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(255, 166, 0, 0);\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgb(236, 236, 236);\n  border-radius: 20px;\n  border: 3px solid rgba(255, 166, 0, 0);\n}\n\n.texlabel[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.textprice[_ngcontent-%COMP%] {\n  color: rgb(58, 187, 53);\n}\n\n.colrtext[_ngcontent-%COMP%] {\n  color: black;\n  margin-top: 1%;\n  font-size: 15px;\n}\n\n.colrval[_ngcontent-%COMP%] {\n  color: rgb(0, 167, 130);\n  margin-top: 1%;\n  font-size: 15px;\n}\n\n.colrvaln[_ngcontent-%COMP%] {\n  color: rgb(255, 136, 0);\n  margin-top: 1%;\n  font-size: 15px;\n}\n\n.whidbu[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 100%;\n}\n\n@media (min-width: 702px) {\n  .colrtext[_ngcontent-%COMP%] {\n    color: black;\n    margin-top: 5%;\n    font-size: 20px;\n  }\n  .colrval[_ngcontent-%COMP%] {\n    color: rgb(0, 167, 130);\n    margin-top: 5%;\n    font-size: 20px;\n  }\n  .colrvaln[_ngcontent-%COMP%] {\n    color: rgb(255, 136, 0);\n    margin-top: 5%;\n    font-size: 20px;\n  }\n  .whidbu[_ngcontent-%COMP%] {\n    font-size: 20px;\n    width: 100%;\n  }\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n\n.titlefirs[_ngcontent-%COMP%] {\n  color: var(--count-color);\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  --bs-dropdown-color: var(--bs-drown-color);\n  --bs-dropdown-bg: var(--bg-color-drow);\n  --bs-dropdown-border-color: var(--bs-border-color-translucent);\n  --bs-dropdown-inner-border-radius: calc(0.375rem - 1px);\n  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);\n  --bs-dropdown-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  --bs-dropdown-link-color: var(--bs-drown-color);\n  --bs-dropdown-link-hover-color: #1e2125;\n  --bs-dropdown-link-hover-bg: #e9ecef;\n  --bs-dropdown-link-active-color: #fff;\n  --bs-dropdown-link-active-bg: #26501e;\n  --bs-dropdown-link-disabled-color: #adb5bd;\n  --bs-dropdown-header-color: #6c757d;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: var(--drowdown-text-color);\n  background-color: var(--drowdown-bg);\n  border: 1px solid var(--drowdown-brd);\n}\n\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: var(--bg-desable-input);\n  opacity: 1;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  color: var(--text-input-grup);\n  background-color: var(--bg-input-grup);\n  border: 1px solid var(--br-input-grup);\n}\n\n.btn-outline-box[_ngcontent-%COMP%] {\n  --bs-btn-color: var(--bs-btn-color-box);\n  --bs-btn-border-color: var(--bs-btn-border-color-box);\n  --bs-btn-hover-color: var(--bs-btn-hover-color-box);\n  --bs-btn-hover-bg: var(--bs-btn-hover-bg-box);\n  --bs-btn-hover-border-color: var(--bs-btn-hover-border-color-box);\n  --bs-btn-focus-shadow-rgb: var(--bs-btn-focus-shadow-rgb-box);\n  --bs-btn-active-color: var(--bs-btn-active-color-box);\n  --bs-btn-active-bg: var(--bs-btn-active-bg-box);\n  --bs-btn-active-border-color: var(--bs-btn-active-border-color-box);\n  --bs-btn-active-shadow: var(--bs-btn-active-shadow-box);\n  --bs-btn-disabled-color: var(--bs-btn-disabled-color-box);\n  --bs-btn-disabled-bg: var(--bs-btn-disabled-bg-box);\n  --bs-btn-disabled-border-color: var(--bs-btn-disabled-border-color-box);\n  --bs-gradient: var(--bs-gradient-box);\n}\n\n.btnclose[_ngcontent-%COMP%] {\n  color: var(--details-text-color);\n}\n\n.btnclose[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--bg-color);\n  background-color: red;\n}\n\n@media (max-width: 600px) {\n  .respobtn[_ngcontent-%COMP%] {\n    padding: 5px;\n    font-size: 10px;\n  }\n}\n\n.scroll[_ngcontent-%COMP%] {\n  max-height: 471px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n@media screen and (min-width: 394px) and (max-height: 444px) {\n  .scroll[_ngcontent-%COMP%] {\n    max-height: 61vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1eS1zZWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBQUE7QUFESjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0U7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUVBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQWtHQSxzQ0FBQTtBQWxHSjs7QUFFSTtFQUNFLHFCQUFBO0FBQU47O0FBRU07RUFDRSxZQUFBO0FBQVI7O0FBSUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFGTjs7QUFLSTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBSE47O0FBTUk7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBSk47O0FBT0k7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTE47O0FBT007RUFDRSxZQUFBO0FBTFI7O0FBUU07RUFDRSxVQUFBO0FBTlI7O0FBU007RUFDRSxvQkFBQTtBQVBSOztBQVdJO0VBQ0UsaUJBQUE7QUFUTjs7QUFZSTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBVk47O0FBWU07RUFDRSxXQUFBO0FBVlI7O0FBY0k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQVpOOztBQWVJO0VBQ0UsZUFBQTtBQWJOOztBQWdCSTtFQUNDLGdCQUFBO0FBZEw7O0FBaUJJO0VBQ0UscUJBQUE7RUFDQSx3REFBQTtBQWZOOztBQW1CSTtFQUNFLFdBQUE7QUFqQk47O0FBb0JJO0VBQ0UsZ0NBQUE7QUFsQk47O0FBcUJJO0VBQ0Usb0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0FBbkJOOztBQXlCRTtFQUNFLFdBQUE7QUF0Qko7O0FBeUJFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUF0Qko7O0FBeUJFO0VBQ0UsV0FBQTtBQXRCSjs7QUEwQkU7RUFDRSx1QkFBQTtBQXZCSjs7QUEyQkE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0MsZUFBQTtBQXhCSDs7QUEwQkE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBdkJGOztBQXlCQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBdEJGOztBQXlCQTtFQUNFO0lBQ0UsWUFBQTtJQUNDLGNBQUE7SUFDQSxlQUFBO0VBdEJIO0VBeUJBO0lBQ0UsdUJBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQXZCRjtFQXlCQTtJQUNFLHVCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUF2QkY7RUF5QkE7SUFDRSxlQUFBO0lBQ0EsV0FBQTtFQXZCRjtBQUNGOztBQTBCQTtFQUNFLHlEQUFBO0FBeEJGOztBQTJCQTtFQUNFLHlCQUFBO0FBeEJGOztBQTJCQTtFQUNFLDBDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4REFBQTtFQUNBLHVEQUFBO0VBQ0EsNERBQUE7RUFDQSwyREFBQTtFQUNBLCtDQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwwQ0FBQTtFQUNBLG1DQUFBO0FBeEJGOztBQTRCQTtFQUNFLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtBQXpCRjs7QUEyQkE7RUFDRSx5Q0FBQTtFQUNBLFVBQUE7QUF4QkY7O0FBNEJBO0VBQ0UsNkJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0FBekJGOztBQTRCQTtFQUNFLHVDQUFBO0VBQ0EscURBQUE7RUFDQSxtREFBQTtFQUNBLDZDQUFBO0VBQ0EsaUVBQUE7RUFDQSw2REFBQTtFQUNBLHFEQUFBO0VBQ0EsK0NBQUE7RUFDQSxtRUFBQTtFQUNBLHVEQUFBO0VBQ0EseURBQUE7RUFDQSxtREFBQTtFQUNBLHVFQUFBO0VBQ0EscUNBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsZ0NBQUE7QUF6QkY7O0FBMkJBO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtBQXhCRjs7QUEyQkE7RUFDQTtJQUNFLFlBQUE7SUFDQSxlQUFBO0VBeEJBO0FBQ0Y7O0FBMkJBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBekJGOztBQTJCQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VBeEJGO0FBQ0YiLCJmaWxlIjoiYnV5LXNlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5zZWFyY2gtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZWI5NjU7XHJcbiAgfVxyXG4gIC5hc3NldHMtdGFicyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2NlY2NjYztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuYXNzZXQtbGlzdC1pdGVtIHtcclxuICAgIG1hcmdpbjogMC41ZW0gMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDE0ZTA4O1xyXG4gIH1cclxuICBcclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcclxuICAgIG1pbi13aWR0aDogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmFzc2V0cy1lYXN5LXBhZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2xvZ28tdHJhbWEucG5nKSByZXBlYXQteCAxMCUgMTAlLCBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDQzLCAxODYsIDc0LCAxKSAzMCUsICNGQUZBRkEgODAlLCAjRkFGQUZBIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogaW5pdGlhbDtcclxuICBcclxuICAgIGZpZ3VyZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcclxuICAgICAgXHJcbiAgICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGgyLnRpdGxlIHtcclxuICAgICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgY29sb3I6ICM0RDRENERcclxuICAgIH1cclxuICBcclxuICAgIHNwYW4uYW1vdW50IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICAgICAgcGFkZGluZzogNXB4IDJyZW07XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYXNzZXQtY29udGFpbmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDAgMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogLTEuNXJlbTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIH1cclxuICBcclxuICAgIC5idXktc2VsbC1tZXNzYWdlIHtcclxuICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICBjb2xvcjogIzRENEQ0RDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgICYuZ3JlZW4ge1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAmLnJlZCB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNlbmQtYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc3VtbWFyeSB7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICMyYmJhNGE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5zdW1tYXJ5LWl0ZW0ge1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAudG90YWwge1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubGlzdHBvaW50IHtcclxuICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgKiB7XHJcbiAgICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuICAgICAgc2Nyb2xsYmFyLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNikgcmdiYSgyNTUsIDE2NiwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIFdvcmtzIG9uIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaSAqL1xyXG4gICAgKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICB3aWR0aDogMTJweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTY2LCAwLCAwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LCAxNjYsIDAsIDApO1xyXG4gICAgICBcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnRleGxhYmVse1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBcclxuICAudGV4dHByaWNle1xyXG4gICAgY29sb3I6IHJnYig1OCwgMTg3LCA1Myk7IFxyXG5cclxufVxyXG5cclxuLmNvbHJ0ZXh0e1xyXG4gIGNvbG9yOiBibGFjazsgXHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uY29scnZhbHtcclxuICBjb2xvcjogcmdiKDAsIDE2NywgMTMwKTsgXHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uY29scnZhbG57XHJcbiAgY29sb3I6IHJnYigyNTUsIDEzNiwgMCk7IFxyXG4gIG1hcmdpbi10b3A6IDElOyBcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLndoaWRidXtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MDJweCkge1xyXG4gIC5jb2xydGV4dHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2xydmFse1xyXG4gICAgY29sb3I6IHJnYigwLCAxNjcsIDEzMCk7IFxyXG4gICAgbWFyZ2luLXRvcDogNSU7IFxyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICAuY29scnZhbG57XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTM2LCAwKTsgXHJcbiAgICBtYXJnaW4tdG9wOiA1JTsgXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC53aGlkYnV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgLjVyZW0gMnJlbSB2YXIoLS1zaGFkb3duLWNvbG9yKSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aXRsZWZpcnN7XHJcbiAgY29sb3I6IHZhcigtLWNvdW50LWNvbG9yKTtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnV7XHJcbiAgLS1icy1kcm9wZG93bi1jb2xvcjogdmFyKC0tYnMtZHJvd24tY29sb3IpO1xyXG4gIC0tYnMtZHJvcGRvd24tYmc6IHZhcigtLWJnLWNvbG9yLWRyb3cpO1xyXG4gIC0tYnMtZHJvcGRvd24tYm9yZGVyLWNvbG9yOiB2YXIoLS1icy1ib3JkZXItY29sb3ItdHJhbnNsdWNlbnQpO1xyXG4gIC0tYnMtZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogY2FsYygwLjM3NXJlbSAtIDFweCk7XHJcbiAgLS1icy1kcm9wZG93bi1kaXZpZGVyLWJnOiB2YXIoLS1icy1ib3JkZXItY29sb3ItdHJhbnNsdWNlbnQpO1xyXG4gIC0tYnMtZHJvcGRvd24tYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIC0tYnMtZHJvcGRvd24tbGluay1jb2xvcjogdmFyKC0tYnMtZHJvd24tY29sb3IpO1xyXG4gIC0tYnMtZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogIzFlMjEyNTtcclxuICAtLWJzLWRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICNlOWVjZWY7XHJcbiAgLS1icy1kcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogI2ZmZjtcclxuICAtLWJzLWRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAjMjY1MDFlO1xyXG4gIC0tYnMtZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogI2FkYjViZDtcclxuICAtLWJzLWRyb3Bkb3duLWhlYWRlci1jb2xvcjogIzZjNzU3ZDtcclxuXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGNvbG9yOiB2YXIoLS1kcm93ZG93bi10ZXh0LWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcm93ZG93bi1iZyk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZHJvd2Rvd24tYnJkKTsgICAgXHJcbn1cclxuLmZvcm0tY29udHJvbDpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZGVzYWJsZS1pbnB1dCk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbi5pbnB1dC1ncm91cC10ZXh0IHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1pbnB1dC1ncnVwKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1pbnB1dC1ncnVwKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ici1pbnB1dC1ncnVwKTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWJveCB7XHJcbiAgLS1icy1idG4tY29sb3I6ICB2YXIoLS1icy1idG4tY29sb3ItYm94KTtcclxuICAtLWJzLWJ0bi1ib3JkZXItY29sb3I6ICB2YXIoLS1icy1idG4tYm9yZGVyLWNvbG9yLWJveCk7XHJcbiAgLS1icy1idG4taG92ZXItY29sb3I6ICB2YXIoLS1icy1idG4taG92ZXItY29sb3ItYm94KTtcclxuICAtLWJzLWJ0bi1ob3Zlci1iZzogIHZhcigtLWJzLWJ0bi1ob3Zlci1iZy1ib3gpO1xyXG4gIC0tYnMtYnRuLWhvdmVyLWJvcmRlci1jb2xvcjogIHZhcigtLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3ItYm94KTtcclxuICAtLWJzLWJ0bi1mb2N1cy1zaGFkb3ctcmdiOiAgdmFyKC0tYnMtYnRuLWZvY3VzLXNoYWRvdy1yZ2ItYm94KTtcclxuICAtLWJzLWJ0bi1hY3RpdmUtY29sb3I6ICB2YXIoLS1icy1idG4tYWN0aXZlLWNvbG9yLWJveCk7XHJcbiAgLS1icy1idG4tYWN0aXZlLWJnOiAgdmFyKC0tYnMtYnRuLWFjdGl2ZS1iZy1ib3gpO1xyXG4gIC0tYnMtYnRuLWFjdGl2ZS1ib3JkZXItY29sb3I6ICB2YXIoLS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvci1ib3gpO1xyXG4gIC0tYnMtYnRuLWFjdGl2ZS1zaGFkb3c6ICB2YXIoLS1icy1idG4tYWN0aXZlLXNoYWRvdy1ib3gpO1xyXG4gIC0tYnMtYnRuLWRpc2FibGVkLWNvbG9yOiAgdmFyKC0tYnMtYnRuLWRpc2FibGVkLWNvbG9yLWJveCk7XHJcbiAgLS1icy1idG4tZGlzYWJsZWQtYmc6IHZhcigtLWJzLWJ0bi1kaXNhYmxlZC1iZy1ib3gpO1xyXG4gIC0tYnMtYnRuLWRpc2FibGVkLWJvcmRlci1jb2xvcjogIHZhcigtLWJzLWJ0bi1kaXNhYmxlZC1ib3JkZXItY29sb3ItYm94KTtcclxuICAtLWJzLWdyYWRpZW50OiAgdmFyKC0tYnMtZ3JhZGllbnQtYm94KTtcclxufVxyXG5cclxuLmJ0bmNsb3Nle1xyXG4gIGNvbG9yOiB2YXIoLS1kZXRhaWxzLXRleHQtY29sb3IpO1xyXG59XHJcbi5idG5jbG9zZSA6aG92ZXJ7XHJcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4ucmVzcG9idG57XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG59XHJcblxyXG4uc2Nyb2xse1xyXG4gIG1heC1oZWlnaHQ6NDcxcHg7XHJcbiAgb3ZlcmZsb3cteDpoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzk0cHgpIGFuZCAobWF4LWhlaWdodDogNDQ0cHgpe1xyXG4gIC5zY3JvbGx7XHJcbiAgICBtYXgtaGVpZ2h0OjYxdmg7XHJcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gIH1cclxufSJdfQ== */"]
});

/***/ }),

/***/ 20521:
/*!**************************************************************!*\
  !*** ./src/app/Options/generate-qr/generate-qr.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateQRComponent": () => (/* binding */ GenerateQRComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_PopUp_qr_view_qr_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/PopUp/qr-view/qr-view.component */ 68489);
/* harmony import */ var src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/Enum/EnumAuthentication.enum */ 81708);
/* harmony import */ var src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/Enum/EnumPopUp.enum */ 42241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/manage-data.service */ 43607);
/* harmony import */ var src_services_validation_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/validation/validation.service */ 73902);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_services_GenerateQR_generate_qr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/GenerateQR/generate-qr.service */ 58508);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);


















function GenerateQRComponent_div_17_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, "registration.errorMessages.required"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 4, "validation.requerido"));
  }
}

function GenerateQRComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function GenerateQRComponent_div_17_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.EnterCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 14)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, GenerateQRComponent_div_17_span_8_Template, 6, 6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 17)(10, "button", 18)(11, "div", 19)(12, "div", 20)(13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div")(17, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Support@bloxcross.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r0.CodeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 9, "confirmAccount.enterCode"), " \u00A0 ", ctx_r0.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 11, "confirmAccount.enter2fa"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.CodeForm.get("code").hasError("required") && ctx_r0.CodeForm.get("code").touched && ctx_r0.CodeForm.get("code").hasError("minlength"))("ngIfElse", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r0.CodeForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 13, "general.done"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 15, "confirmAccount.needHelp"), " ");
  }
}

function GenerateQRComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}

class GenerateQRComponent {
  constructor(translate, manage_data, fb, validationservice, dialog, router, ruteActive, generateqrservice, toastr) {
    this.translate = translate;
    this.manage_data = manage_data;
    this.fb = fb;
    this.validationservice = validationservice;
    this.dialog = dialog;
    this.router = router;
    this.ruteActive = ruteActive;
    this.generateqrservice = generateqrservice;
    this.toastr = toastr;
    this.Confirm = "";
    this.title = "";
    this.QR = "";
    this.show = false;
    this.showinput = false;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.CodeForm = this.fb.group({
      code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(6)])]
    });
    this.ChangedInput();
  }

  ChangedInput() {
    this.subscription.add(this.CodeForm.valueChanges.subscribe(value => {
      if (this.Confirm == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.google.toString()) {
        if (value.code.length == 6) {
          this.EnterCode();
        }
      }

      if (this.Confirm == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.sms.toString() || this.Confirm == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.email.toString()) {
        if (value.code.length == 8) {
          this.EnterCode();
        }
      }
    }));
  }

  EnterCode() {
    const Code = {
      code: this.CodeForm.value.code
    };

    if (this.Confirm == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.sms.toString()) {
      this.GenerateQRSMS(Code);
      this.CodeForm.reset();
    }

    if (this.Confirm == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.email.toString()) {
      this.GenerateQREmail(Code);
      this.CodeForm.reset();
    }
  }

  ConfirmEmail() {
    var _this = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var msg = yield _this.translate.get('Errores.validateEmail').toPromise();

      _this.validationservice.ConfirmEmail().subscribe(data => {
        _this.toastr.warning(data.payload, msg);
      }, error => {
        _this.toastr.error(error.error.payload, msg);
      });
    })();
  }

  ConfirmSMS() {
    var _this2 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var msg = yield _this2.translate.get('Errores.validateSMS').toPromise();

      _this2.validationservice.ConfirmCelular().subscribe(data => {
        _this2.toastr.warning(data.payload, msg);
      }, error => {
        _this2.toastr.error(error.error.payload, msg);
      });
    })();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.Confirm = this.ruteActive.snapshot.params['generate2fa'];

    if (this.Confirm == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.google.toString()) {
      this.showinput = false;
    }

    if (this.Confirm == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.sms.toString()) {
      this.showinput = true;
      this.title = src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.sms.toString();
      this.Confirm = src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.sms.toString();
      this.ConfirmSMS();
    }

    if (this.Confirm == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.email.toString()) {
      this.showinput = true;
      this.title = src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.email.toString();
      this.Confirm = src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.email.toString();
      this.ConfirmEmail();
    }
  }

  Back() {
    this.router.navigate(['']);
  }

  GenerateQRGoogle() {
    var _this3 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var msg = yield _this3.translate.get('Errores.errorQr').toPromise();

      _this3.generateqrservice.generateQR2faGoogle().subscribe(data => {
        _this3.SendatosQR(data);
      }, error => {
        console.log(msg + JSON.stringify(error));

        _this3.toastr.error(error.error.payload, msg);
      });
    })();
  }

  GenerateQRSMS(data) {
    var _this4 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var msg = yield _this4.translate.get('Errores.errorQr').toPromise();

      _this4.generateqrservice.generateQR2faSMS(data).subscribe(data => {
        _this4.SendatosQR(data);
      }, error => {
        console.log(msg + JSON.stringify(error));

        _this4.toastr.error(error.error.payload, msg);
      });
    })();
  }

  GenerateQREmail(data) {
    var _this5 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var msg = yield _this5.translate.get('Errores.errorQr').toPromise();

      _this5.generateqrservice.generateQR2faEmail(data).subscribe(data => {
        _this5.SendatosQR(data);
      }, error => {
        console.log(msg + JSON.stringify(error));

        _this5.toastr.error(error.error.payload, msg);
      });
    })();
  }

  SendatosQR(data) {
    this.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_3__.EnumEventsPopUp.QR.toString(), data);
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "24rem";
    let dialogRef = this.dialog.open(src_app_PopUp_qr_view_qr_view_component__WEBPACK_IMPORTED_MODULE_1__.QrViewComponent, dialogConfig);
    this.subscription.add(dialogRef.afterClosed().subscribe(result => {
      if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumConfirmation.si.toString()) {
        this.router.navigate(['/']);
      }

      if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumConfirmation.no.toString()) {
        this.router.navigate(['qr/' + this.Confirm]);
      }
    }));
  }

}

GenerateQRComponent.ɵfac = function GenerateQRComponent_Factory(t) {
  return new (t || GenerateQRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_4__.ManageDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_services_validation_validation_service__WEBPACK_IMPORTED_MODULE_5__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_services_GenerateQR_generate_qr_service__WEBPACK_IMPORTED_MODULE_6__.GenerateQRService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService));
};

GenerateQRComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: GenerateQRComponent,
  selectors: [["app-generate-qr"]],
  decls: 20,
  vars: 7,
  consts: [[1, "d-md-flex", "half"], [1, "container"], [1, "row", "align-items-center", "justify-content-center"], [1, "form-block", "mx-auto", "shadow"], [1, "col"], [1, "icon", "d-flex", "image"], ["src", "../../../assets/images/u44.svg"], [1, "row", "text-center"], [2, "margin", "0 0 0", "font-size", "2rem"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [1, "forgot-pass"], [4, "ngIf"], ["NoDaTa", ""], [1, "col", 3, "formGroup", "ngSubmit"], [1, "box"], ["formControlName", "code", "type", "string", "required", "required", "maxlength", "8", "aria-required", "true", "aria-describedby", "exampleInputGroup1__BV_description_", 1, "form-control", 3, "placeholder"], ["class", "text-danger ml-2 ", "style", "font-size: 50%;", 4, "ngIf", "ngIfElse"], [1, "row", "rowalign-items-center", "justify-content-center", "butondone"], ["type", "submit", 1, "btn", "btn-block", "btn-primary", "justify-content-center", 2, "background", "#23ae4d", 3, "disabled"], [1, "row"], [1, "col-sm-12"], [1, "buttonsign", "alineDone"], [1, "textcode"], [1, "text-danger", "ml-2", 2, "font-size", "50%"], [1, "nombre", 2, "width", "100%"], [2, "font-size", "50%", "color", "var(--bg-login)"]],
  template: function GenerateQRComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 7)(8, "h1", 8)(9, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 7)(13, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GenerateQRComponent_Template_button_click_13_listener() {
        return ctx.Back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "strong", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, GenerateQRComponent_div_17_Template, 22, 17, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, GenerateQRComponent_ng_template_18_Template, 3, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 3, "confirmAccount.enterCodetitle"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00BF", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 5, "login.login"), "?");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showinput);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
  styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #fff;\n}\n\np[_ngcontent-%COMP%] {\n  color: #b3b3b3;\n  font-weight: 100;\n  font-size: 1rem;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: var(--count-color);\n}\n\na[_ngcontent-%COMP%] {\n  transition: 0.3s all ease;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.half[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  height: 100vh;\n  min-height: 700px;\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  background: #f6f7fc;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 200px;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 4px;\n  height: 54px;\n  background: #efefef;\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n}\n\n.half[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n  text-decoration: underline;\n}\n\n.half[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 54px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.half[_ngcontent-%COMP%]   .forgot-pass[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  color: var(--a-login);\n}\n\n.form-block[_ngcontent-%COMP%] {\n  background: var(--bg-login);\n  padding: 80px;\n  max-width: 550px;\n  max-height: 100%;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.2);\n}\n\n@media (max-width: 767.98px) {\n  .form-block[_ngcontent-%COMP%] {\n    padding: 70px;\n  }\n}\n\n.control[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 15px;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.control[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.2rem;\n  color: #888;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.control__indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background: #e6e6e6;\n  border-radius: 4px;\n}\n\n.control--radio[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #ccc;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb771a;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]:not([disabled]):checked    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb8633;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n  opacity: 0.9;\n  pointer-events: none;\n}\n\n.control__indicator[_ngcontent-%COMP%]:after {\n  font-family: \"icomoon\";\n  content: \"\\e5ca\";\n  position: absolute;\n  display: none;\n  font-size: 16px;\n  transition: 0.3s all ease;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  display: block;\n  color: #fff;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%]:after {\n  top: 50%;\n  left: 50%;\n  margin-top: -1px;\n  transform: translate(-50%, -50%);\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  border-color: #7b7b7b;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background-color: #7e0cf5;\n  opacity: 0.2;\n}\n\n.image[_ngcontent-%COMP%] {\n  margin-left: 41%;\n  margin-bottom: 3%;\n}\n\n.buttonsign[_ngcontent-%COMP%] {\n  margin-right: 3rem;\n}\n\n@media (max-width: 575px) {\n  .half[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    height: 100%;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  .buttonsign[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n\n.toast-top-center[_ngcontent-%COMP%] {\n  top: 45% !important;\n  right: 0 !important;\n  width: 100% !important;\n}\n\n@media all and (max-width: 240px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -54px;\n  }\n}\n\n@media all and (min-width: 241px) and (max-width: 320px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -64px;\n  }\n}\n\n@media all and (min-width: 321px) and (max-width: 480px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -96px;\n  }\n}\n\n.ngx-toastr[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 125px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@media (max-width: 768px) {\n  .ngx-toastr[_ngcontent-%COMP%] {\n    width: 450px !important;\n    height: 125px !important;\n  }\n}\n\n.textcode[_ngcontent-%COMP%] {\n  color: var(--count-color);\n  text-align: center;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\n.contentext[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.butondone[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.alineDone[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n\n.teximput[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.spanerror[_ngcontent-%COMP%] {\n  font-size: 50%;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRlLXFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBOztFQUVFLGlDQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFBQTtFQUdFLHlCQUFBO0FBR0Y7O0FBRkU7RUFDRSxnQ0FBQTtBQUtKOztBQUhBO0VBQ0UsZUFBQTtBQU1GOztBQUpBO0VBQ0UsZUFBQTtBQU9GOztBQUxBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBUUY7O0FBTkE7RUFDRSxtQkFBQTtBQVNGOztBQVBBO0VBQ0UsVUFBQTtBQVVGOztBQVRFO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsYUFBQTtFQVlKO0FBQ0Y7O0FBWEE7RUFDRSxVQUFBO0FBYUY7O0FBWkU7RUFDRTtJQUNFLFdBQUE7RUFlSjtBQUNGOztBQWRBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBZ0JGOztBQWZFO0VBQ0UsYUFBQTtFQUVBLGdCQUFBO0FBa0JKOztBQWhCQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7QUFtQkY7O0FBakJBO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0FBb0JGOztBQWxCQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBcUJGOztBQW5CQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBc0JGOztBQW5CQTtFQUNFLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSw0Q0FBQTtBQXNCRjs7QUFyQkU7RUFDRTtJQUNFLGFBQUE7RUF3Qko7QUFDRjs7QUF2QkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUF5QkY7O0FBeEJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQTJCSjs7QUF6QkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBNEJGOztBQTFCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUE2QkY7O0FBM0JBO0VBQ0Usa0JBQUE7QUE4QkY7O0FBNUJBOztFQUVFLGdCQUFBO0FBK0JGOztBQTdCQTtFQUNFLG1CQUFBO0FBZ0NGOztBQTlCQTs7RUFFRSxtQkFBQTtBQWlDRjs7QUEvQkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQWtDRjs7QUFoQ0E7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUdBLHlCQUFBO0FBbUNGOztBQWpDQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBb0NGOztBQWxDQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFHQSxnQ0FBQTtBQXFDRjs7QUFuQ0E7RUFDRSxxQkFBQTtBQXNDRjs7QUFwQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUF1Q0Y7O0FBbkNBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQXNDRjs7QUFuQ0E7RUFDQSxrQkFBQTtBQXNDQTs7QUFwQ0E7RUFFQTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBc0NBO0VBcENGO0lBQ0UsZUFBQTtFQXNDQTtBQUNGOztBQWpDQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQW1DRjs7QUFqQ0E7RUFDRTtJQUNJLGtCQUFBO0VBb0NKO0FBQ0Y7O0FBbENBO0VBQ0U7SUFDSSxrQkFBQTtFQW9DSjtBQUNGOztBQWxDQTtFQUNFO0lBQ0ksa0JBQUE7RUFvQ0o7QUFDRjs7QUFoQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFrQ0Y7O0FBL0JFO0VBREY7SUFFSSx1QkFBQTtJQUNBLHdCQUFBO0VBbUNGO0FBQ0Y7O0FBaENBO0VBQ0UseUJBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFrQ0Y7O0FBOUJBO0VBQ0UsbUJBQUE7QUFpQ0Y7O0FBOUJBO0VBQ0UsZ0JBQUE7QUFpQ0Y7O0FBOUJBO0VBQ0UsaUJBQUE7QUFpQ0Y7O0FBOUJBO0VBQ0Usa0JBQUE7QUFpQ0Y7O0FBL0JBO0VBQ0UsY0FBQTtBQWtDRjs7QUEvQkE7RUFDRSx5REFBQTtBQWtDRiIsImZpbGUiOiJnZW5lcmF0ZS1xci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cclxuXHJcbnAge1xyXG4gIGNvbG9yOiAjYjNiM2IzO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgZm9udC1zaXplOiAxcmVtOyB9XHJcblxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LFxyXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjsgXHJcbiAgY29sb3I6IHZhcigtLWNvdW50LWNvbG9yKTt9XHJcbiAgXHJcblxyXG5hIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlOyB9XHJcbiAgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDsgfVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDdyZW0gMDsgfVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMjBweDsgfVxyXG5cclxuLmhhbGYsIC5oYWxmIC5jb250YWluZXIgPiAucm93IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1pbi1oZWlnaHQ6IDcwMHB4OyB9XHJcblxyXG4uaGFsZiAuY29udGVudHMge1xyXG4gIGJhY2tncm91bmQ6ICNmNmY3ZmM7IH1cclxuXHJcbi5oYWxmIC5iZyB7XHJcbiAgd2lkdGg6IDI1JTsgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgLmhhbGYgLmJnIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7IH0gfVxyXG5cclxuLmhhbGYgLmNvbnRlbnRzIHtcclxuICB3aWR0aDogNzUlOyB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAuaGFsZiAuY29udGVudHMge1xyXG4gICAgICB3aWR0aDogMTAwJTsgfSB9XHJcblxyXG4uaGFsZiAuY29udGVudHMgLmZvcm0tY29udHJvbCwgLmhhbGYgLmJnIC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgaGVpZ2h0OiA1NHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7IH1cclxuICAuaGFsZiAuY29udGVudHMgLmZvcm0tY29udHJvbDphY3RpdmUsIC5oYWxmIC5jb250ZW50cyAuZm9ybS1jb250cm9sOmZvY3VzLCAuaGFsZiAuYmcgLmZvcm0tY29udHJvbDphY3RpdmUsIC5oYWxmIC5iZyAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lOyB9XHJcblxyXG4uaGFsZiAuYmcge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XHJcblxyXG4uaGFsZiBhIHtcclxuICBjb2xvcjogIzg4ODtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxyXG5cclxuLmhhbGYgLmJ0biB7XHJcbiAgaGVpZ2h0OiA1NHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4OyB9XHJcblxyXG4uaGFsZiAuZm9yZ290LXBhc3Mge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDE0cHg7IFxyXG4gIGNvbG9yOiB2YXIoLS1hLWxvZ2luKTtcclxufVxyXG5cclxuLmZvcm0tYmxvY2sge1xyXG4gIGJhY2tncm91bmQ6ICB2YXIoLS1iZy1sb2dpbik7XHJcbiAgcGFkZGluZzogODBweDtcclxuICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDE1cHggMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3gtc2hhZG93OiAwIDE1cHggMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgLmZvcm0tYmxvY2sge1xyXG4gICAgICBwYWRkaW5nOiA3MHB4OyB9IH1cclxuXHJcbi5jb250cm9sIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDsgfVxyXG4gIC5jb250cm9sIC5jYXB0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLjJyZW07XHJcbiAgICBjb2xvcjogIzg4ODsgfVxyXG5cclxuLmNvbnRyb2wgaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBvcGFjaXR5OiAwOyB9XHJcblxyXG4uY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAycHg7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cclxuXHJcbi5jb250cm9sLS1yYWRpbyAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cclxuXHJcbi5jb250cm9sOmhvdmVyIGlucHV0IH4gLmNvbnRyb2xfX2luZGljYXRvcixcclxuLmNvbnRyb2wgaW5wdXQ6Zm9jdXMgfiAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjOyB9XHJcblxyXG4uY29udHJvbCBpbnB1dDpjaGVja2VkIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZDogI2ZiNzcxYTsgfVxyXG5cclxuLmNvbnRyb2w6aG92ZXIgaW5wdXQ6bm90KFtkaXNhYmxlZF0pOmNoZWNrZWQgfiAuY29udHJvbF9faW5kaWNhdG9yLFxyXG4uY29udHJvbCBpbnB1dDpjaGVja2VkOmZvY3VzIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZDogI2ZiODYzMzsgfVxyXG5cclxuLmNvbnRyb2wgaW5wdXQ6ZGlzYWJsZWQgfiAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxyXG5cclxuLmNvbnRyb2xfX2luZGljYXRvcjphZnRlciB7XHJcbiAgZm9udC1mYW1pbHk6ICdpY29tb29uJztcclxuICBjb250ZW50OiAnXFxlNWNhJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTsgfVxyXG5cclxuLmNvbnRyb2wgaW5wdXQ6Y2hlY2tlZCB+IC5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjZmZmOyB9XHJcblxyXG4uY29udHJvbC0tY2hlY2tib3ggLmNvbnRyb2xfX2luZGljYXRvcjphZnRlciB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cclxuXHJcbi5jb250cm9sLS1jaGVja2JveCBpbnB1dDpkaXNhYmxlZCB+IC5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogIzdiN2I3YjsgfVxyXG5cclxuLmNvbnRyb2wtLWNoZWNrYm94IGlucHV0OmRpc2FibGVkOmNoZWNrZWQgfiAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2UwY2Y1O1xyXG4gIG9wYWNpdHk6IC4yOyB9XHJcblxyXG5cclxuXHJcbi5pbWFnZXtcclxuICBtYXJnaW4tbGVmdDogNDElO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcbiAgXHJcbi5idXR0b25zaWdue1xyXG5tYXJnaW4tcmlnaHQ6IDNyZW07XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KXtcclxuXHJcbi5oYWxmIC5idG4ge1xyXG4gIGhlaWdodDogMTAwJTsgXHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuLmJ1dHRvbnNpZ257XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcbn1cclxuXHJcblxyXG5cclxuLnRvYXN0LXRvcC1jZW50ZXIgeyBcclxuICB0b3A6IDQ1JSAhaW1wb3J0YW50O1xyXG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSBcclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMjQwcHgpIHsgXHJcbiAgLnRvYXN0LXRvcC1jZW50ZXIgeyBcclxuICAgICAgbWFyZ2luLWxlZnQ6IC01NHB4OyBcclxuICB9IFxyXG59IFxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAyNDFweCkgYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7IFxyXG4gIC50b2FzdC10b3AtY2VudGVyIHsgXHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNjRweDsgXHJcbiAgfSBcclxufSBcclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzIxcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkgeyBcclxuICAudG9hc3QtdG9wLWNlbnRlciB7IFxyXG4gICAgICBtYXJnaW4tbGVmdDogLTk2cHg7IFxyXG4gIH0gXHJcbn1cclxuXHJcblxyXG4ubmd4LXRvYXN0ciB7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIGhlaWdodDogMTI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5uZ3gtdG9hc3RyIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiA0NTBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMjVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnRleHRjb2Rle1xyXG4gIGNvbG9yOiB2YXIoLS1jb3VudC1jb2xvcik7XHJcbiAgIFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiBcclxufVxyXG5cclxuLmNvbnRlbnRleHR7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dG9uZG9uZXtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uYWxpbmVEb25le1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4udGV4aW1wdXR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxufVxyXG4uc3BhbmVycm9ye1xyXG4gIGZvbnQtc2l6ZTogNTAlO1xyXG59XHJcblxyXG4uc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC41cmVtIDJyZW0gdmFyKC0tc2hhZG93bi1jb2xvcikhaW1wb3J0YW50O1xyXG59Il19 */"]
});

/***/ }),

/***/ 22509:
/*!**************************************************************************************!*\
  !*** ./src/app/Options/table-info-transactions/table-info-transactions.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableInfoTransactionsComponent": () => (/* binding */ TableInfoTransactionsComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_PopUp_details_transactions_portfolio_details_transactions_portfolio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/PopUp/details-transactions-portfolio/details-transactions-portfolio.component */ 87125);
/* harmony import */ var src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/Enum/EnumPopUp.enum */ 42241);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ 83278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_services_portafolio_portafolio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/portafolio/portafolio.service */ 21013);
/* harmony import */ var src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/manage-data.service */ 43607);
/* harmony import */ var src_services_WebSocket_socketio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/WebSocket/socketio.service */ 97317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
























function TableInfoTransactionsComponent_mat_header_cell_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "home.type"), " ");
  }
}

function TableInfoTransactionsComponent_mat_cell_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TableInfoTransactionsComponent_mat_cell_15_Template_mat_cell_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const process_r21 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r22.ShowDetails(process_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const process_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", process_r21.transaction_type, " ");
  }
}

function TableInfoTransactionsComponent_mat_header_cell_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "home.asset"), " ");
  }
}

function TableInfoTransactionsComponent_mat_cell_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TableInfoTransactionsComponent_mat_cell_18_Template_mat_cell_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const process_r24 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r25.ShowDetails(process_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const process_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", process_r24.base_currency, "");
  }
}

function TableInfoTransactionsComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "td", 33);
  }
}

function TableInfoTransactionsComponent_mat_header_cell_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "home.quantity"), " ");
  }
}

function TableInfoTransactionsComponent_mat_cell_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TableInfoTransactionsComponent_mat_cell_22_Template_mat_cell_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const process_r27 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r28.ShowDetails(process_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const process_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, process_r27.qty, "0.3-3"), " ");
  }
}

function TableInfoTransactionsComponent_mat_header_cell_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r8.hiddenitem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "home.date"), " ");
  }
}

function TableInfoTransactionsComponent_mat_cell_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TableInfoTransactionsComponent_mat_cell_25_Template_mat_cell_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const process_r30 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r31.ShowDetails(process_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const process_r30 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r9.hiddenitem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 2, process_r30.creation_time, "MM/d/y HH:mm:ss"), " ");
  }
}

function TableInfoTransactionsComponent_mat_header_cell_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0) {
  return {
    "color": a0
  };
};

function TableInfoTransactionsComponent_mat_cell_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TableInfoTransactionsComponent_mat_cell_28_Template_mat_cell_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const process_r33 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r34.ShowDetails(process_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const process_r33 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, ctx_r11.GetColor(process_r33.total)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, process_r33.total));
  }
}

function TableInfoTransactionsComponent_mat_header_cell_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r12.hiddenitem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "home.tradingfee"));
  }
}

function TableInfoTransactionsComponent_mat_cell_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TableInfoTransactionsComponent_mat_cell_31_Template_mat_cell_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const process_r36 = restoredCtx.$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r37.ShowDetails(process_r36));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const process_r36 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r13.hiddenitem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, process_r36.fee_amount), " ");
  }
}

function TableInfoTransactionsComponent_mat_header_cell_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r14.hiddenitem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "home.transactionId"), " ");
  }
}

function TableInfoTransactionsComponent_mat_cell_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TableInfoTransactionsComponent_mat_cell_34_Template_mat_cell_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41);
      const process_r39 = restoredCtx.$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r40.ShowDetails(process_r39));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const process_r39 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r15.hiddenitem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", process_r39.transaction_id, " ");
  }
}

function TableInfoTransactionsComponent_mat_header_cell_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r16.hiddenitem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "dialog.price"), " ");
  }
}

function TableInfoTransactionsComponent_mat_cell_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TableInfoTransactionsComponent_mat_cell_37_Template_mat_cell_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44);
      const process_r42 = restoredCtx.$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r43.ShowDetails(process_r42));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const process_r42 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r17.hiddenitem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, process_r42.price), " ");
  }
}

function TableInfoTransactionsComponent_mat_header_row_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-header-row");
  }
}

function TableInfoTransactionsComponent_mat_row_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-row");
  }
}

const _c1 = function () {
  return [5, 10, 25, 100];
};

class TableInfoTransactionsComponent {
  constructor(toastr, assets, manage_data, dialog, socket, breakpointObserver) {
    this.toastr = toastr;
    this.assets = assets;
    this.manage_data = manage_data;
    this.dialog = dialog;
    this.socket = socket;
    this.breakpointObserver = breakpointObserver;
    this.hiddenitem = false;
    this.displayedColumns = ["transaction_type", "creation_time", "base_currency", "qty", "price", "total", "transaction_id"];
    this.portfolio_name = "";
    this.portfolioTransactions = [];
    this.transactions = [];
    this.table_data = [];
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
    this.sort_value = 1;
    this.show = false;
    this.mediaQuery();
  }

  ngAfterViewInit() {}

  ngOnInit() {
    var _this = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.GetTransactions();
      yield _this.filterbybasecurrency(_this.typetable);

      _this.GetDataBloxOrder();
    })();
  }

  GetDataBloxOrder() {
    var _this2 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.subscription.add(_this2.socket.GetDataBloxOrder().subscribe(data => {
        if (typeof data != 'object' && data != "Hey Dude!") {
          if (JSON.parse(data).success == null || JSON.parse(data).success == undefined) {
            _this2.ResponseEvent(JSON.parse(data));
          }
        }
      }));
    })();
  }

  ResponseEvent(msg) {
    var _this3 = this;

    switch (msg.header.msg_type) {
      case 'EXECUTION':
      case 'TRACKING_EXECUTION':
      case 'DEPOSIT':
      case 'WITHDRAW':
      case 'ORDER_ERROR':
      case 'ORDER_CANCEL':
      case 'ORDER_REJECTED':
      case 'TRACKING_EXECUTION':
        // console.log("Llego notificacion Socket");
        setTimeout( /*#__PURE__*/(0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          yield _this3.GetTransactions();
          yield _this3.filterbybasecurrency(_this3.typetable);
        }), 500);
        break;

      default:
        break;
    }
  }

  filterbybasecurrency(data) {
    var _this4 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.show = true;

      if (data !== 'home') {
        let product = yield _this4.dataSource.data.filter(x => `${x.base_currency}` === data);
        product = product.sort((a, b) => {
          if (a.creation_time > b.creation_time) return -1;else return 1;
        });
        _this4.dataSource.data = product;

        if (JSON.stringify(product) == "[]") {
          _this4.show = false;
        }
      }
    })();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ApplyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace

    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

    this.dataSource.filter = filterValue;
  }

  ShowDetails(data) {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = false;
    dialogConfig.width = "40rem";
    this.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_2__.EnumEventsPopUp.DetailsPortfolio.toString(), data);
    this.dialog.open(src_app_PopUp_details_transactions_portfolio_details_transactions_portfolio_component__WEBPACK_IMPORTED_MODULE_1__.DetailsTransactionsPortfolioComponent, dialogConfig);
  }

  GetColor(value) {
    if (Number(value) < 0) {
      return 'red';
    } else {
      return 'green';
    }
  }

  ShowError(msg, title = "", disableTimeOut = true) {
    // console.error(msg);
    this.toastr.error(msg, title, {
      closeButton: true,
      disableTimeOut: disableTimeOut,
      positionClass: 'toast-center-center'
    });
  }

  GetTransactions() {
    var _this5 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //===========================================================================
      //Get Default portafolio
      //===========================================================================
      let getDefaultPortafolioResponse = yield _this5.GetDefaultPortafolio();

      if (!getDefaultPortafolioResponse) {
        _this5.ShowError("Error to get client portafolio");

        return;
      }

      _this5.portfolio_name = getDefaultPortafolioResponse.name; //===========================================================================
      //Get Portafolio Transactions
      //===========================================================================

      const PortfolioName = {
        portfolio_name: _this5.portfolio_name
      };
      let getPortafolioTransactionoResponse = yield _this5.GetPortafolioTransaction(PortfolioName);

      if (!getPortafolioTransactionoResponse) {
        _this5.ShowError("Error to get portfolio transactions");

        return;
      }

      _this5.transactions = [];
      _this5.transactions = getPortafolioTransactionoResponse.sort((a, b) => {
        if (a.creation_time > b.creation_time) return -1;else return 1;
      }); // console.log("Transactions ",this.transactions)

      _this5.table_data = [];

      _this5.transactions.filter(element => {
        element.total = Number(element.qty * element.price + element.fee_amount); // console.log("Elements Transactions",element)

        if (isNaN(element.description) || element.transaction_type == "WITHDRAW") {
          _this5.table_data.push(element);
        } else {
          var value = _this5.transactions.find(x => x.transaction_id == Number(element.description) && x.base_currency != 'USD');

          if (value) {
            value.qty = value.qty * -1;
            value.total = element.total;

            _this5.table_data.push(value);
          }
        }
      });

      _this5.table_data = _this5.table_data.filter(element => {
        if (element.transaction_type != 'HOLD') {
          element.qty = element.qty < 0 ? element.qty * -1 : element.qty;
          return element;
        }
      }); // console.log("Tabla after", this.table_data);

      _this5.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(_this5.table_data);
      _this5.dataSource.paginator = _this5.paginator;
      _this5.dataSource.sort = _this5.sort;
      _this5.dataSource.data = _this5.table_data;
    })();
  } // Sort() {
  //   this.sort_value = this.sort_value * -1;
  //   this.transactions = this.transactions_data.sort((a, b) => {
  //     if (a.creation_time > b.creation_time) return this.sort_value * -1;
  //     else return this.sort_value;
  //   })
  // }


  GetDefaultPortafolio() {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.assets.GetDefault().subscribe(response => {
        resolve(response);
      }, err => {
        console.log("Error GetDefault:", err);
        resolve(null);
      }));
    });
  }

  GetPortafolioTransaction(data) {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.assets.GetPortafolioTransaction(data).subscribe(response => {
        resolve(response);
      }, err => {
        console.log("Error GetPortfolioTransactions:", err);
        resolve(null);
      }));
    });
  }

  mediaQuery() {
    this.subscription.add(this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__.Breakpoints.XSmall).subscribe(state => {
      if (state.matches) {
        //AQUI SERA TRUE SOLO SI ESTA EN RESOLUCION DE CELULAR
        this.hiddenitem = true;
      } else {
        this.hiddenitem = false;
      }
    }));
  }

}

TableInfoTransactionsComponent.ɵfac = function TableInfoTransactionsComponent_Factory(t) {
  return new (t || TableInfoTransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_portafolio_portafolio_service__WEBPACK_IMPORTED_MODULE_3__.PortafolioService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_4__.ManageDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_WebSocket_socketio_service__WEBPACK_IMPORTED_MODULE_5__.SocketioService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__.BreakpointObserver));
};

TableInfoTransactionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: TableInfoTransactionsComponent,
  selectors: [["app-table-info-transactions"]],
  viewQuery: function TableInfoTransactionsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  inputs: {
    typetable: "typetable"
  },
  decls: 42,
  vars: 13,
  consts: [[1, "container", "shadow", "mb-3", 3, "hidden"], [1, "row", 2, "margin-top", "1%"], [1, "col-md-6"], [1, "currtext"], [1, "example-header"], ["matInput", "", 1, "form-control", 3, "placeholder", "keyup"], ["filter", ""], [1, "example-container", "mat-elevation-z8"], ["matSort", "", 3, "dataSource"], ["matColumnDef", "transaction_type"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [3, "click", 4, "matCellDef"], ["matColumnDef", "base_currency"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "qty"], ["class", "cachtext", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "cachtext", 3, "click", 4, "matCellDef"], ["matColumnDef", "creation_time"], ["mat-sort-header", "", 3, "hidden", 4, "matHeaderCellDef"], [3, "hidden", "click", 4, "matCellDef"], ["matColumnDef", "total"], ["class", "cachtext", 3, "ngStyle", "click", 4, "matCellDef"], ["matColumnDef", "fee_amount"], ["class", "cachtext", "mat-sort-header", "", 3, "hidden", 4, "matHeaderCellDef"], ["class", "cachtext", 3, "hidden", "click", 4, "matCellDef"], ["matColumnDef", "transaction_id"], ["matColumnDef", "price"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"], ["paginator", ""], ["mat-sort-header", ""], [3, "click"], ["mat-footer-cell", ""], ["mat-sort-header", "", 1, "cachtext"], [1, "cachtext", 3, "click"], ["mat-sort-header", "", 3, "hidden"], [3, "hidden", "click"], [1, "cachtext", 3, "ngStyle", "click"], ["mat-sort-header", "", 1, "cachtext", 3, "hidden"], [1, "cachtext", 3, "hidden", "click"]],
  template: function TableInfoTransactionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4)(7, "mat-form-field")(8, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function TableInfoTransactionsComponent_Template_input_keyup_8_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](9);

        return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.ApplyFilter(_r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 7)(12, "mat-table", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](13, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, TableInfoTransactionsComponent_mat_header_cell_14_Template, 3, 3, "mat-header-cell", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, TableInfoTransactionsComponent_mat_cell_15_Template, 2, 1, "mat-cell", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](16, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, TableInfoTransactionsComponent_mat_header_cell_17_Template, 3, 3, "mat-header-cell", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, TableInfoTransactionsComponent_mat_cell_18_Template, 2, 1, "mat-cell", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, TableInfoTransactionsComponent_td_19_Template, 1, 0, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, TableInfoTransactionsComponent_mat_header_cell_21_Template, 3, 3, "mat-header-cell", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, TableInfoTransactionsComponent_mat_cell_22_Template, 3, 4, "mat-cell", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, TableInfoTransactionsComponent_mat_header_cell_24_Template, 3, 4, "mat-header-cell", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, TableInfoTransactionsComponent_mat_cell_25_Template, 3, 5, "mat-cell", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, TableInfoTransactionsComponent_mat_header_cell_27_Template, 2, 0, "mat-header-cell", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, TableInfoTransactionsComponent_mat_cell_28_Template, 3, 6, "mat-cell", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, TableInfoTransactionsComponent_mat_header_cell_30_Template, 3, 4, "mat-header-cell", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, TableInfoTransactionsComponent_mat_cell_31_Template, 3, 4, "mat-cell", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, TableInfoTransactionsComponent_mat_header_cell_33_Template, 3, 4, "mat-header-cell", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, TableInfoTransactionsComponent_mat_cell_34_Template, 2, 2, "mat-cell", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](35, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, TableInfoTransactionsComponent_mat_header_cell_36_Template, 3, 4, "mat-header-cell", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, TableInfoTransactionsComponent_mat_cell_37_Template, 3, 4, "mat-cell", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, TableInfoTransactionsComponent_mat_header_row_38_Template, 1, 0, "mat-header-row", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, TableInfoTransactionsComponent_mat_row_39_Template, 1, 0, "mat-row", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "mat-paginator", 29, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx.show);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 8, "home.yourMovement"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 10, "assets.search"), ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](12, _c1))("pageSize", 10);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
  styles: [".mat-table[_ngcontent-%COMP%] {\n  background: var(--table-color-bg);\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n.mat-paginator[_ngcontent-%COMP%] {\n  background: var(--bg-table-footer);\n  color: var(--tex-pg-table);\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: var(--header-text-table);\n  font-weight: bold;\n  background-color: --table-header-bg;\n  font-size: 12px;\n}\n\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%] {\n  color: var(--color-text-table);\n  --bs-table-border-color: var(--margin-table);\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 200px;\n}\n\n.currtext[_ngcontent-%COMP%] {\n  color: var(--count-color);\n  margin-top: 3%;\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.table[_ngcontent-%COMP%] {\n  --bs-table-color: var(--color-text-table);\n  --bs-table-bg: transparent;\n  --bs-table-border-color: var(--margin-table);\n  --bs-table-accent-bg: transparent;\n  --bs-table-striped-color: var(--color-text-table);\n  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);\n  --bs-table-active-color: var(--bs-body-color);\n  --bs-table-active-bg: rgba(0, 0, 0, 0.1);\n  --bs-table-hover-color: var(--activ-text-table);\n  --bs-table-hover-bg: var(--activ-bg-table);\n}\n\n.contenedor[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n\n.contenedor[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 10px;\n}\n\n.contenedor[_ngcontent-%COMP%]::-webkit-scrollbar-button:increment, .contenedor[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  display: none;\n}\n\n.contenedor[_ngcontent-%COMP%]::-webkit-scrollbar:horizontal {\n  height: 10px;\n}\n\n.contenedor[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--table-scroll);\n  border-radius: 20px;\n  border: 2px solid var(--table-scroll);\n}\n\n.contenedor[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: var(--table-header-bg);\n}\n\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  box-shadow: 0 rem 0rem var(--shadown-color) !important;\n}\n\nmat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\n  border-bottom-color: var(--border-inter-table);\n}\n\n.mat-header-row[_ngcontent-%COMP%] {\n  background: var(--bg-table-footer);\n}\n\n.mat-input-element[_ngcontent-%COMP%] {\n  color: var(--drowdown-text-color);\n  caret-color: var(--drowdown-text-color);\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n@media (min-width: 1000px) {\n  .mat-cell[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media (min-width: 656px) {\n  .mat-header-cell[_ngcontent-%COMP%] {\n    color: var(--header-text-table);\n    font-weight: bold;\n    background-color: --table-header-bg;\n    font-size: 12px;\n  }\n}\n\n.form-control[_ngcontent-%COMP%] {\n  height: 21px;\n  padding: 3px 3px 3px 3px;\n  color: var(--drowdown-text-color);\n  background-color: var(--drowdown-bg);\n  border: 1px solid var(--drowdown-brd);\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWluZm8tdHJhbnNhY3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBTUE7RUFDSSxrQ0FBQTtFQUNBLDBCQUFBO0FBSEo7O0FBT0E7RUFDSSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FBSko7O0FBT0E7RUFDSSw4QkFBQTtFQUNBLDRDQUFBO0FBSko7O0FBT0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUpKOztBQVFBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTEo7O0FBUUE7RUFDSSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGlEQUFBO0VBQ0EsMENBQUE7RUFDQSw2Q0FBQTtFQUNBLHdDQUFBO0VBQ0EsK0NBQUE7RUFDQSwwQ0FBQTtBQUxKOztBQVNBO0VBQ0ksd0JBQUE7QUFOSjs7QUFTQTtFQUNJLFdBQUE7QUFOSjs7QUFTQTtFQUNJLGFBQUE7QUFOSjs7QUFTQTtFQUNJLFlBQUE7QUFOSjs7QUFTQTtFQUNJLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtBQU5KOztBQVNBO0VBQ0ksbUJBQUE7QUFOSjs7QUFTQTtFQUNJLDZCQUFBO0FBTko7O0FBU0E7RUFFSSxzREFBQTtBQVBKOztBQVVBO0VBQ0ksOENBQUE7QUFQSjs7QUFVQTtFQUNFLGtDQUFBO0FBUEY7O0FBVUE7RUFFSSxpQ0FBQTtFQUNBLHVDQUFBO0FBUko7O0FBV0E7RUFDSSxlQUFBO0FBUko7O0FBVUE7RUFDSTtJQUNJLGVBQUE7RUFQTjtBQUNGOztBQVVBO0VBSUk7SUFDSSwrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUNBQUE7SUFDQSxlQUFBO0VBWE47QUFDRjs7QUFjQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtBQVpKOztBQWdCQTtFQUNJLHlEQUFBO0FBYkoiLCJmaWxlIjoidGFibGUtaW5mby10cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1hdC10YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10YWJsZS1jb2xvci1iZyk7ICBcclxuICAgIG92ZXJmbG93LXg6aGlkZGVuOyBcclxuICAgIG92ZXJmbG93LXk6aGlkZGVuO1xyXG4gICBcclxufVxyXG5cclxuXHJcblxyXG4ubWF0LXBhZ2luYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10YWJsZS1mb290ZXIpO1xyXG4gICAgY29sb3I6IHZhcigtLXRleC1wZy10YWJsZSk7XHJcbiAgICBcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQtdGFibGUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAoLS10YWJsZS1oZWFkZXItYmcpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtdGFibGUpO1xyXG4gICAgLS1icy10YWJsZS1ib3JkZXItY29sb3I6IHZhcigtLW1hcmdpbi10YWJsZSk7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbi5jdXJydGV4dHtcclxuICAgIGNvbG9yOiAgdmFyKC0tY291bnQtY29sb3IpO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIC0tYnMtdGFibGUtY29sb3I6IHZhcigtLWNvbG9yLXRleHQtdGFibGUpO1xyXG4gICAgLS1icy10YWJsZS1iZzogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJzLXRhYmxlLWJvcmRlci1jb2xvcjogdmFyKC0tbWFyZ2luLXRhYmxlKTtcclxuICAgIC0tYnMtdGFibGUtYWNjZW50LWJnOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYnMtdGFibGUtc3RyaXBlZC1jb2xvcjogdmFyKC0tY29sb3ItdGV4dC10YWJsZSk7XHJcbiAgICAtLWJzLXRhYmxlLXN0cmlwZWQtYmc6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAtLWJzLXRhYmxlLWFjdGl2ZS1jb2xvcjogdmFyKC0tYnMtYm9keS1jb2xvcik7XHJcbiAgICAtLWJzLXRhYmxlLWFjdGl2ZS1iZzogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLS1icy10YWJsZS1ob3Zlci1jb2xvcjogdmFyKC0tYWN0aXYtdGV4dC10YWJsZSk7XHJcbiAgICAtLWJzLXRhYmxlLWhvdmVyLWJnOiB2YXIoLS1hY3Rpdi1iZy10YWJsZSk7XHJcblxyXG59XHJcblxyXG4uY29udGVuZWRvcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG4uY29udGVuZWRvcjo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xyXG4gICAgd2lkdGg6MTBweDtcclxufVxyXG5cclxuLmNvbnRlbmVkb3I6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjppbmNyZW1lbnQsLmNvbnRlbmVkb3I6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59IFxyXG5cclxuLmNvbnRlbmVkb3I6Oi13ZWJraXQtc2Nyb2xsYmFyOmhvcml6b250YWwge1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uY29udGVuZWRvcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGUtc2Nyb2xsKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10YWJsZS1zY3JvbGwpO1xyXG59XHJcblxyXG4uY29udGVuZWRvcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgIFxyXG59XHJcblxyXG4ubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcclxuICAgIGNvbG9yOiB2YXIoLS10YWJsZS1oZWFkZXItYmcpO1xyXG59XHJcblxyXG4ubWF0LWVsZXZhdGlvbi16OCB7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwcHggNXB4IDVweCAtM3B4IHJnYigyNTUgMCAwIC8gMjAlKSwgMHB4IDhweCAxMHB4IDFweCByZ2IoMjEgMjU1IDAgLyAxMSUpLCAwcHggM3B4IDE0cHggMnB4IHJnYigyNTUgMCAwKTtcclxuICAgIGJveC1zaGFkb3c6IDAgcmVtIDByZW0gdmFyKC0tc2hhZG93bi1jb2xvcikhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LWZvb3Rlci1yb3csIHRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1ib3JkZXItaW50ZXItdGFibGUpO1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1yb3d7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGFibGUtZm9vdGVyKTtcclxufVxyXG5cclxuLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuXHJcbiAgICBjb2xvcjogdmFyKC0tZHJvd2Rvd24tdGV4dC1jb2xvcik7XHJcbiAgICBjYXJldC1jb2xvcjogdmFyKC0tZHJvd2Rvd24tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbi5tYXQtY2VsbHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAubWF0LWNlbGx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjU2cHgpIHtcclxuXHJcbiAgIFxyXG5cclxuICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dC10YWJsZSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogKC0tdGFibGUtaGVhZGVyLWJnKTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGhlaWdodDogMjFweDtcclxuICAgIHBhZGRpbmc6IDNweCAzcHggM3B4IDNweDtcclxuICAgIGNvbG9yOiB2YXIoLS1kcm93ZG93bi10ZXh0LWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRyb3dkb3duLWJnKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRyb3dkb3duLWJyZCk7ICAgIFxyXG59XHJcblxyXG5cclxuLnNoYWRvdyB7XHJcbiAgICBib3gtc2hhZG93OiAwIC41cmVtIDJyZW0gdmFyKC0tc2hhZG93bi1jb2xvcikhaW1wb3J0YW50O1xyXG4gIH1cclxuIl19 */"]
});

/***/ }),

/***/ 31102:
/*!******************************************************************************************!*\
  !*** ./src/app/PopUp/confirm-validate-google-qr/confirm-validate-google-qr.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmValidateGoogleQRComponent": () => (/* binding */ ConfirmValidateGoogleQRComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/Enum/EnumAuthentication.enum */ 81708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_services_validation_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/validation/validation.service */ 73902);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);











const _c0 = ["codeInput"];

function ConfirmValidateGoogleQRComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "registration.errorMessages.required"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 4, "validation.requerido"));
  }
}

function ConfirmValidateGoogleQRComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

class ConfirmValidateGoogleQRComponent {
  constructor(dialogRef, validationservice, translate, toastr, fb) {
    this.dialogRef = dialogRef;
    this.validationservice = validationservice;
    this.translate = translate;
    this.toastr = toastr;
    this.fb = fb;
    this.CodeForm = this.fb.group({
      code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)])]
    });
  }

  ngAfterViewInit() {
    this.codeInputElement.nativeElement.focus();
  }

  ngOnInit() {}

  InputCode(code) {
    if (code.length == 6) {
      this.Code();
    }
  }

  Code() {
    const code = {
      code: this.CodeForm.value.code
    };
    this.ValidateGoogle(code);
  }

  ValidateGoogle(code) {
    var _this = this;

    this.validationservice.validate2faGoogle(code).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        if (data.success) {
          let msgstatus = yield _this.translate.get("general.succes").toPromise();
          let msg = yield _this.translate.get("validation.Googlevalidation").toPromise();

          _this.toastr.success(msg, msgstatus);

          _this.dialogRef.close(src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_1__.EnumConfirmation.success.toString());
        } else {
          let msgstatus = yield _this.translate.get("general.error").toPromise();
          let msg = yield _this.translate.get("validation.ErrorCode").toPromise();

          _this.toastr.error(msg, msgstatus, {
            closeButton: true,
            disableTimeOut: true,
            positionClass: 'toast-center-center'
          });

          _this.CodeForm.reset();
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), error => {
      this.CodeForm.reset();
    });
  }

  Back() {
    this.dialogRef.close();
  }

}

ConfirmValidateGoogleQRComponent.ɵfac = function ConfirmValidateGoogleQRComponent_Factory(t) {
  return new (t || ConfirmValidateGoogleQRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_validation_validation_service__WEBPACK_IMPORTED_MODULE_2__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
};

ConfirmValidateGoogleQRComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ConfirmValidateGoogleQRComponent,
  selectors: [["app-confirm-validate-google-qr"]],
  viewQuery: function ConfirmValidateGoogleQRComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.codeInputElement = _t.first);
    }
  },
  decls: 25,
  vars: 16,
  consts: [[3, "formGroup", "ngSubmit"], [1, "col", "form-group", "contentext"], [1, "textcode"], [1, "container-input"], ["formControlName", "code", "type", "string", "required", "required", "maxlength", "8", "aria-required", "true", "aria-describedby", "exampleInputGroup1__BV_description_", 1, "form-control", 3, "placeholder", "input"], ["codeInput", ""], ["class", "text-danger ml-2 ", "style", "font-size: 50%;", 4, "ngIf", "ngIfElse"], [1, "row", "rowalign-items-center", "justify-content-center", "butondone"], ["type", "submit", 1, "btn", "btn-block", "btn-success", "justify-content-center", 2, "background", "#23ae4d", 3, "disabled"], [1, "row"], [1, "col-sm-12"], [1, "buttonsign", "alineDone"], ["type", "button", 1, "btn", "btn-outline-danger", "justify-content-center", "mt-3", 3, "click"], ["NoDaTa", ""], [1, "text-danger", "ml-2", 2, "font-size", "50%"], [1, "nombre", 2, "width", "100%"], [2, "font-size", "50%", "color", "var(--bg-login)"]],
  template: function ConfirmValidateGoogleQRComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ConfirmValidateGoogleQRComponent_Template_form_ngSubmit_0_listener() {
        return ctx.Code();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function ConfirmValidateGoogleQRComponent_Template_input_input_6_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);

        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.InputCode(_r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ConfirmValidateGoogleQRComponent_span_9_Template, 6, 6, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7)(11, "button", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfirmValidateGoogleQRComponent_Template_button_click_17_listener() {
        return ctx.Back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 9)(19, "div", 10)(20, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ConfirmValidateGoogleQRComponent_ng_template_23_Template, 3, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](24);

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.CodeForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 8, "confirmAccount.enterCodegoogle2"), " Google");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 10, "confirmAccount.enter2fa"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.CodeForm.get("code").hasError("required") && ctx.CodeForm.get("code").touched && ctx.CodeForm.get("code").hasError("minlength"))("ngIfElse", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.CodeForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 12, "general.done"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 14, "general.back"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #fff;\n}\n\np[_ngcontent-%COMP%] {\n  color: #b3b3b3;\n  font-weight: 100;\n  font-size: 1rem;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: var(--count-color);\n}\n\n.form-control[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 73%;\n}\n\n.container-input[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\na[_ngcontent-%COMP%] {\n  transition: 0.3s all ease;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.half[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  height: 100vh;\n  min-height: 700px;\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  background: #f6f7fc;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 200px;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 4px;\n  height: 54px;\n  background: #efefef;\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n}\n\n.half[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n  text-decoration: underline;\n}\n\n.half[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 54px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.half[_ngcontent-%COMP%]   .forgot-pass[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  color: var(--a-login);\n}\n\n.form-block[_ngcontent-%COMP%] {\n  background: var(--bg-login);\n  padding: 80px;\n  max-width: 550px;\n  max-height: 100%;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.2);\n}\n\n@media (max-width: 767.98px) {\n  .form-block[_ngcontent-%COMP%] {\n    padding: 70px;\n  }\n}\n\n.control[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 15px;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.control[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.2rem;\n  color: #888;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.control__indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background: #e6e6e6;\n  border-radius: 4px;\n}\n\n.control--radio[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #ccc;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb771a;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]:not([disabled]):checked    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb8633;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n  opacity: 0.9;\n  pointer-events: none;\n}\n\n.control__indicator[_ngcontent-%COMP%]:after {\n  font-family: \"icomoon\";\n  content: \"\\e5ca\";\n  position: absolute;\n  display: none;\n  font-size: 16px;\n  transition: 0.3s all ease;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  display: block;\n  color: #fff;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%]:after {\n  top: 50%;\n  left: 50%;\n  margin-top: -1px;\n  transform: translate(-50%, -50%);\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  border-color: #7b7b7b;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background-color: #7e0cf5;\n  opacity: 0.2;\n}\n\n.image[_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n}\n\n.buttonsign[_ngcontent-%COMP%] {\n  margin-right: 3rem;\n}\n\n@media (max-width: 575px) {\n  .half[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    height: 100%;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  .buttonsign[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n\n.toast-top-center[_ngcontent-%COMP%] {\n  top: 45% !important;\n  right: 0 !important;\n  width: 100% !important;\n}\n\n@media all and (max-width: 240px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -54px;\n  }\n}\n\n@media all and (min-width: 241px) and (max-width: 320px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -64px;\n  }\n}\n\n@media all and (min-width: 321px) and (max-width: 480px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -96px;\n  }\n}\n\n.ngx-toastr[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 125px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@media (max-width: 768px) {\n  .ngx-toastr[_ngcontent-%COMP%] {\n    width: 450px !important;\n    height: 125px !important;\n  }\n}\n\n.textcode[_ngcontent-%COMP%] {\n  color: var(--count-color);\n  text-align: center;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\n.contentext[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.butondone[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.alineDone[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n\n.teximput[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.spanerror[_ngcontent-%COMP%] {\n  font-size: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tdmFsaWRhdGUtZ29vZ2xlLXFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUNFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFFOztFQUVFLGlDQUFBO0VBQ0EseUJBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUlKOztBQURFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBSUo7O0FBREU7RUFHRSx5QkFBQTtBQUlKOztBQUhJO0VBQ0UsZ0NBQUE7QUFNTjs7QUFKRTtFQUNFLGVBQUE7QUFPSjs7QUFMRTtFQUNFLGVBQUE7QUFRSjs7QUFORTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQVNKOztBQVBFO0VBQ0UsbUJBQUE7QUFVSjs7QUFSRTtFQUNFLFVBQUE7QUFXSjs7QUFWSTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUFhTjtBQUNGOztBQVpFO0VBQ0UsVUFBQTtBQWNKOztBQWJJO0VBQ0U7SUFDRSxXQUFBO0VBZ0JOO0FBQ0Y7O0FBZkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFpQko7O0FBaEJJO0VBQ0UsYUFBQTtFQUVBLGdCQUFBO0FBbUJOOztBQWpCRTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7QUFvQko7O0FBbEJFO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0FBcUJKOztBQW5CRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBc0JKOztBQXBCRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBdUJKOztBQXBCRTtFQUNFLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSw0Q0FBQTtBQXVCSjs7QUF0Qkk7RUFDRTtJQUNFLGFBQUE7RUF5Qk47QUFDRjs7QUF4QkU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUEwQko7O0FBekJJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQTRCTjs7QUExQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBNkJKOztBQTNCRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUE4Qko7O0FBNUJFO0VBQ0Usa0JBQUE7QUErQko7O0FBN0JFOztFQUVFLGdCQUFBO0FBZ0NKOztBQTlCRTtFQUNFLG1CQUFBO0FBaUNKOztBQS9CRTs7RUFFRSxtQkFBQTtBQWtDSjs7QUFoQ0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQW1DSjs7QUFqQ0U7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUdBLHlCQUFBO0FBb0NKOztBQWxDRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBcUNKOztBQW5DRTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFHQSxnQ0FBQTtBQXNDSjs7QUFwQ0U7RUFDRSxxQkFBQTtBQXVDSjs7QUFyQ0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUF3Q0o7O0FBcENFO0VBRUUsaUJBQUE7QUFzQ0o7O0FBbkNFO0VBQ0Esa0JBQUE7QUFzQ0Y7O0FBcENFO0VBRUE7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQXNDRjtFQXBDQTtJQUNFLGVBQUE7RUFzQ0Y7QUFDRjs7QUFqQ0U7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFtQ0o7O0FBakNFO0VBQ0U7SUFDSSxrQkFBQTtFQW9DTjtBQUNGOztBQWxDRTtFQUNFO0lBQ0ksa0JBQUE7RUFvQ047QUFDRjs7QUFsQ0U7RUFDRTtJQUNJLGtCQUFBO0VBb0NOO0FBQ0Y7O0FBaENFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBa0NKOztBQS9CSTtFQURGO0lBRUksdUJBQUE7SUFDQSx3QkFBQTtFQW1DSjtBQUNGOztBQWhDRTtFQUNFLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBa0NKOztBQTlCRTtFQUNFLG1CQUFBO0FBaUNKOztBQTlCRTtFQUNFLGdCQUFBO0FBaUNKOztBQTlCRTtFQUNFLGlCQUFBO0FBaUNKOztBQTlCRTtFQUNFLGtCQUFBO0FBaUNKOztBQTlCRTtFQUNFLGNBQUE7QUFpQ0oiLCJmaWxlIjoiY29uZmlybS12YWxpZGF0ZS1nb29nbGUtcXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgY29sb3I6ICNiM2IzYjM7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtOyB9XHJcbiAgXHJcbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNixcclxuICAuaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmOyBcclxuICAgIGNvbG9yOiB2YXIoLS1jb3VudC1jb2xvcik7fVxyXG4gICAgXHJcbiAgLmZvcm0tY29udHJvbHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA3MyU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLWlucHV0e1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxuICB9XHJcbiAgYSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTsgfVxyXG4gICAgYTpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50OyB9XHJcbiAgXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogN3JlbSAwOyB9XHJcbiAgXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4OyB9XHJcbiAgXHJcbiAgLmhhbGYsIC5oYWxmIC5jb250YWluZXIgPiAucm93IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4taGVpZ2h0OiA3MDBweDsgfVxyXG4gIFxyXG4gIC5oYWxmIC5jb250ZW50cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjZmN2ZjOyB9XHJcbiAgXHJcbiAgLmhhbGYgLmJnIHtcclxuICAgIHdpZHRoOiAyNSU7IH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgICAuaGFsZiAuYmcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7IH0gfVxyXG4gIFxyXG4gIC5oYWxmIC5jb250ZW50cyB7XHJcbiAgICB3aWR0aDogNzUlOyB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICAgLmhhbGYgLmNvbnRlbnRzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTsgfSB9XHJcbiAgXHJcbiAgLmhhbGYgLmNvbnRlbnRzIC5mb3JtLWNvbnRyb2wsIC5oYWxmIC5iZyAuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7IH1cclxuICAgIC5oYWxmIC5jb250ZW50cyAuZm9ybS1jb250cm9sOmFjdGl2ZSwgLmhhbGYgLmNvbnRlbnRzIC5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5oYWxmIC5iZyAuZm9ybS1jb250cm9sOmFjdGl2ZSwgLmhhbGYgLmJnIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cclxuICBcclxuICAuaGFsZiAuYmcge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxyXG4gIFxyXG4gIC5oYWxmIGEge1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxyXG4gIFxyXG4gIC5oYWxmIC5idG4ge1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDsgfVxyXG4gIFxyXG4gIC5oYWxmIC5mb3Jnb3QtcGFzcyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7IFxyXG4gICAgY29sb3I6IHZhcigtLWEtbG9naW4pO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ibG9jayB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1sb2dpbik7XHJcbiAgICBwYWRkaW5nOiA4MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTVweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgICAuZm9ybS1ibG9jayB7XHJcbiAgICAgICAgcGFkZGluZzogNzBweDsgfSB9XHJcbiAgXHJcbiAgLmNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4OyB9XHJcbiAgICAuY29udHJvbCAuY2FwdGlvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAuMnJlbTtcclxuICAgICAgY29sb3I6ICM4ODg7IH1cclxuICBcclxuICAuY29udHJvbCBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIG9wYWNpdHk6IDA7IH1cclxuICBcclxuICAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgfVxyXG4gIFxyXG4gIC5jb250cm9sLS1yYWRpbyAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxyXG4gIFxyXG4gIC5jb250cm9sOmhvdmVyIGlucHV0IH4gLmNvbnRyb2xfX2luZGljYXRvcixcclxuICAuY29udHJvbCBpbnB1dDpmb2N1cyB+IC5jb250cm9sX19pbmRpY2F0b3Ige1xyXG4gICAgYmFja2dyb3VuZDogI2NjYzsgfVxyXG4gIFxyXG4gIC5jb250cm9sIGlucHV0OmNoZWNrZWQgfiAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNmYjc3MWE7IH1cclxuICBcclxuICAuY29udHJvbDpob3ZlciBpbnB1dDpub3QoW2Rpc2FibGVkXSk6Y2hlY2tlZCB+IC5jb250cm9sX19pbmRpY2F0b3IsXHJcbiAgLmNvbnRyb2wgaW5wdXQ6Y2hlY2tlZDpmb2N1cyB+IC5jb250cm9sX19pbmRpY2F0b3Ige1xyXG4gICAgYmFja2dyb3VuZDogI2ZiODYzMzsgfVxyXG4gIFxyXG4gIC5jb250cm9sIGlucHV0OmRpc2FibGVkIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cclxuICBcclxuICAuY29udHJvbF9faW5kaWNhdG9yOmFmdGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnaWNvbW9vbic7XHJcbiAgICBjb250ZW50OiAnXFxlNWNhJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTsgfVxyXG4gIFxyXG4gIC5jb250cm9sIGlucHV0OmNoZWNrZWQgfiAuY29udHJvbF9faW5kaWNhdG9yOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmY7IH1cclxuICBcclxuICAuY29udHJvbC0tY2hlY2tib3ggLmNvbnRyb2xfX2luZGljYXRvcjphZnRlciB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cclxuICBcclxuICAuY29udHJvbC0tY2hlY2tib3ggaW5wdXQ6ZGlzYWJsZWQgfiAuY29udHJvbF9faW5kaWNhdG9yOmFmdGVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzdiN2I3YjsgfVxyXG4gIFxyXG4gIC5jb250cm9sLS1jaGVja2JveCBpbnB1dDpkaXNhYmxlZDpjaGVja2VkIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2UwY2Y1O1xyXG4gICAgb3BhY2l0eTogLjI7IH1cclxuICBcclxuICBcclxuICBcclxuICAuaW1hZ2V7XHJcbiAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICB9XHJcbiAgICBcclxuICAuYnV0dG9uc2lnbntcclxuICBtYXJnaW4tcmlnaHQ6IDNyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgXHJcbiAgLmhhbGYgLmJ0biB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICB9XHJcbiAgLmJ1dHRvbnNpZ257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAudG9hc3QtdG9wLWNlbnRlciB7IFxyXG4gICAgdG9wOiA0NSUgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH0gXHJcbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMjQwcHgpIHsgXHJcbiAgICAudG9hc3QtdG9wLWNlbnRlciB7IFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNTRweDsgXHJcbiAgICB9IFxyXG4gIH0gXHJcbiAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMjQxcHgpIGFuZCAobWF4LXdpZHRoOiAzMjBweCkgeyBcclxuICAgIC50b2FzdC10b3AtY2VudGVyIHsgXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC02NHB4OyBcclxuICAgIH0gXHJcbiAgfSBcclxuICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzMjFweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7IFxyXG4gICAgLnRvYXN0LXRvcC1jZW50ZXIgeyBcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTk2cHg7IFxyXG4gICAgfSBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLm5neC10b2FzdHIge1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAubmd4LXRvYXN0ciB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgd2lkdGg6IDQ1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMTI1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnRleHRjb2Rle1xyXG4gICAgY29sb3I6IHZhcigtLWNvdW50LWNvbG9yKTtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICAuY29udGVudGV4dHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXRvbmRvbmV7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuYWxpbmVEb25le1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXhpbXB1dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5zcGFuZXJyb3J7XHJcbiAgICBmb250LXNpemU6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgIl19 */"]
});

/***/ }),

/***/ 95539:
/*!**************************************************************************************!*\
  !*** ./src/app/PopUp/confirmation-generate-qr/confirmation-generate-qr.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationGenerateQrComponent": () => (/* binding */ ConfirmationGenerateQrComponent)
/* harmony export */ });
/* harmony import */ var src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/Enum/EnumAuthentication.enum */ 81708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 38699);




class ConfirmationGenerateQrComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    SMSQR() {
        this.dialogRef.close(src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_0__.EnumAuthentication.sms.toString());
    }
    EmailQR() {
        this.dialogRef.close(src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_0__.EnumAuthentication.email.toString());
    }
    close() {
        this.dialogRef.close();
    }
}
ConfirmationGenerateQrComponent.ɵfac = function ConfirmationGenerateQrComponent_Factory(t) { return new (t || ConfirmationGenerateQrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef)); };
ConfirmationGenerateQrComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfirmationGenerateQrComponent, selectors: [["app-confirmation-generate-qr"]], decls: 26, vars: 9, consts: [[1, "text-center"], [1, "texttitel"], [1, "text-center", "mb-3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "60", "height", "60", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-qr-code-scan", 2, "color", "#11ce12"], ["d", "M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z"], ["d", "M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z"], ["d", "M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z"], ["d", "M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z"], ["d", "M12 9h2V8h-2v1Z"], ["mat-dialog-title", ""], [1, "row", "text-center"], [1, "col-4"], [1, "btn", "btn-outline-success", 3, "click"]], template: function ConfirmationGenerateQrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 4)(7, "path", 5)(8, "path", 6)(9, "path", 7)(10, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div")(15, "div", 10)(16, "div", 11)(17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationGenerateQrComponent_Template_button_click_17_listener() { return ctx.SMSQR(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "SMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11)(20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationGenerateQrComponent_Template_button_click_20_listener() { return ctx.EmailQR(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11)(23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationGenerateQrComponent_Template_button_click_23_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "dialog.generate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 5, "login.selQr"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 7, "login.quit"));
    } }, dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: [".btn[_ngcontent-%COMP%]:hover {\n  color: var(--bs-btn-hover-color);\n  background-color: #22b6a1;\n  border-color: #22b6a1;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #2f999d;\n  --bs-btn-border-color: #2f999d;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #2f999d;\n  --bs-btn-hover-border-color: #2f999d;\n  --bs-btn-focus-shadow-rgb: 60,153,110;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #2f999d;\n  --bs-btn-active-border-color: #2f999d;\n  --bs-btn-active-shadow: inset 0 3px 5pxrgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #2f999d;\n  --bs-btn-disabled-border-color: #2f999d;\n}\n\n.btn-outline-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #2f999d;\n  --bs-btn-border-color: #2f999d;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #2f999d;\n  --bs-btn-hover-border-color: #2f999d;\n  --bs-btn-focus-shadow-rgb: 25,135,84;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #2f999d;\n  --bs-btn-active-border-color: #2f999d;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #2f999d;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #2f999d;\n  --bs-gradient: none;\n}\n\n.texttitel[_ngcontent-%COMP%] {\n  color: var(--count-color);\n  font-weight: 900;\n  padding-top: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1hdGlvbi1nZW5lcmF0ZS1xci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksb0JBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSwyREFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtBQUVKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsNERBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiY29uZmlybWF0aW9uLWdlbmVyYXRlLXFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bjpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tYnMtYnRuLWhvdmVyLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMmI2YTE7XHJcbiAgICBib3JkZXItY29sb3I6ICMyMmI2YTE7XHJcbn1cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIC0tYnMtYnRuLWNvbG9yOiAjZmZmO1xyXG4gICAgLS1icy1idG4tYmc6ICMyZjk5OWQ7XHJcbiAgICAtLWJzLWJ0bi1ib3JkZXItY29sb3I6ICMyZjk5OWQ7XHJcbiAgICAtLWJzLWJ0bi1ob3Zlci1jb2xvcjogI2ZmZjtcclxuICAgIC0tYnMtYnRuLWhvdmVyLWJnOiAjMmY5OTlkO1xyXG4gICAgLS1icy1idG4taG92ZXItYm9yZGVyLWNvbG9yOiAjMmY5OTlkO1xyXG4gICAgLS1icy1idG4tZm9jdXMtc2hhZG93LXJnYjogNjAsMTUzLDExMDtcclxuICAgIC0tYnMtYnRuLWFjdGl2ZS1jb2xvcjogI2ZmZjtcclxuICAgIC0tYnMtYnRuLWFjdGl2ZS1iZzogIzJmOTk5ZDtcclxuICAgIC0tYnMtYnRuLWFjdGl2ZS1ib3JkZXItY29sb3I6ICMyZjk5OWQ7XHJcbiAgICAtLWJzLWJ0bi1hY3RpdmUtc2hhZG93OiBpbnNldCAwIDNweCA1cHhyZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICAgIC0tYnMtYnRuLWRpc2FibGVkLWNvbG9yOiAjZmZmO1xyXG4gICAgLS1icy1idG4tZGlzYWJsZWQtYmc6ICMyZjk5OWQ7XHJcbiAgICAtLWJzLWJ0bi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICMyZjk5OWQ7XHJcbn1cclxuXHJcblxyXG4uYnRuLW91dGxpbmUtc3VjY2VzcyB7XHJcbiAgICAtLWJzLWJ0bi1jb2xvcjogIzJmOTk5ZDtcclxuICAgIC0tYnMtYnRuLWJvcmRlci1jb2xvcjogIzJmOTk5ZDtcclxuICAgIC0tYnMtYnRuLWhvdmVyLWNvbG9yOiAjZmZmO1xyXG4gICAgLS1icy1idG4taG92ZXItYmc6ICMyZjk5OWQ7XHJcbiAgICAtLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3I6ICMyZjk5OWQ7XHJcbiAgICAtLWJzLWJ0bi1mb2N1cy1zaGFkb3ctcmdiOiAyNSwxMzUsODQ7XHJcbiAgICAtLWJzLWJ0bi1hY3RpdmUtY29sb3I6ICNmZmY7XHJcbiAgICAtLWJzLWJ0bi1hY3RpdmUtYmc6ICMyZjk5OWQ7XHJcbiAgICAtLWJzLWJ0bi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAjMmY5OTlkO1xyXG4gICAgLS1icy1idG4tYWN0aXZlLXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4gICAgLS1icy1idG4tZGlzYWJsZWQtY29sb3I6ICMyZjk5OWQ7XHJcbiAgICAtLWJzLWJ0bi1kaXNhYmxlZC1iZzogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJzLWJ0bi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICMyZjk5OWQ7XHJcbiAgICAtLWJzLWdyYWRpZW50OiBub25lO1xyXG59XHJcblxyXG4udGV4dHRpdGVse1xyXG4gICAgY29sb3I6IHZhcigtLWNvdW50LWNvbG9yKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG59Il19 */"] });


/***/ }),

/***/ 40915:
/*!**************************************************************!*\
  !*** ./src/app/PopUp/confirmation/confirmation.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationComponent": () => (/* binding */ ConfirmationComponent)
/* harmony export */ });
/* harmony import */ var src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/Enum/EnumAuthentication.enum */ 81708);
/* harmony import */ var src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/Enum/EnumPopUp.enum */ 42241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/manage-data.service */ 43607);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);







function ConfirmationComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 10)(3, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function ConfirmationComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 13)(3, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class ConfirmationComponent {
    constructor(dialogRef, manage_data) {
        this.dialogRef = dialogRef;
        this.manage_data = manage_data;
        this.manage_data.getSubject(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_1__.EnumEventsPopUp.ConfirmAction.toString()).subscribe(data => {
            this.conten = data;
        });
    }
    confirmationYes() {
        this.dialogRef.close(src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_0__.EnumConfirmation.si.toString());
    }
    confirmationNo() {
        this.dialogRef.close(src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_0__.EnumConfirmation.no.toString());
    }
}
ConfirmationComponent.ɵfac = function ConfirmationComponent_Factory(t) { return new (t || ConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_2__.ManageDataService)); };
ConfirmationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ConfirmationComponent, selectors: [["app-confirmation"]], decls: 18, vars: 10, consts: [[1, "text-center"], [1, "texttitel"], [1, "text-center", "my-3"], [4, "ngIf"], ["mat-dialog-title", ""], [1, "row", "text-center"], [1, "col-6"], [1, "btn", "btn-outline-success", "btn-lg", 3, "click"], [1, "btn", "btn-success", "btn-lg", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "60", "height", "60", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-question-circle", 2, "color", "#2f999d"], ["d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"], ["d", "M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "60", "height", "60", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-shield-x", 2, "color", "#ff0000"], ["d", "M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"], ["d", "M6.146 5.146a.5.5 0 0 1 .708 0L8 6.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 7l1.147 1.146a.5.5 0 0 1-.708.708L8 7.707 6.854 8.854a.5.5 0 1 1-.708-.708L7.293 7 6.146 5.854a.5.5 0 0 1 0-.708z"]], template: function ConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ConfirmationComponent_div_4_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ConfirmationComponent_div_5_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 0)(7, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfirmationComponent_Template_button_click_11_listener() { return ctx.confirmationNo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6)(15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfirmationComponent_Template_button_click_15_listener() { return ctx.confirmationYes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.conten.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.conten.icon == "quest");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.conten.icon == "delet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.conten.conten);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 6, "general.no"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 8, "general.yes"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: [".btn[_ngcontent-%COMP%]:hover {\n  color: var(--bs-btn-hover-color);\n  background-color: #22b6a1;\n  border-color: #22b6a1;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #2f999d;\n  --bs-btn-border-color: #2f999d;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #2f999d;\n  --bs-btn-hover-border-color: #2f999d;\n  --bs-btn-focus-shadow-rgb: 60,153,110;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #2f999d;\n  --bs-btn-active-border-color: #2f999d;\n  --bs-btn-active-shadow: inset 0 3px 5pxrgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #2f999d;\n  --bs-btn-disabled-border-color: #2f999d;\n}\n\n.btn-outline-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #2f999d;\n  --bs-btn-border-color: #2f999d;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #2f999d;\n  --bs-btn-hover-border-color: #2f999d;\n  --bs-btn-focus-shadow-rgb: 25,135,84;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #2f999d;\n  --bs-btn-active-border-color: #2f999d;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #2f999d;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #2f999d;\n  --bs-gradient: none;\n}\n\n.texttitel[_ngcontent-%COMP%] {\n  color: var(--count-color);\n  font-weight: 900;\n  padding-top: 7px;\n}\n\n.navtitel[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 100%;\n  height: 50px;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksb0JBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSwyREFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtBQUVKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsNERBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFBYSxZQUFBO0VBQ2IsbUJBQUE7QUFFSiIsImZpbGUiOiJjb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1icy1idG4taG92ZXItY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyYjZhMTtcclxuICAgIGJvcmRlci1jb2xvcjogIzIyYjZhMTtcclxufVxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgLS1icy1idG4tY29sb3I6ICNmZmY7XHJcbiAgICAtLWJzLWJ0bi1iZzogIzJmOTk5ZDtcclxuICAgIC0tYnMtYnRuLWJvcmRlci1jb2xvcjogIzJmOTk5ZDtcclxuICAgIC0tYnMtYnRuLWhvdmVyLWNvbG9yOiAjZmZmO1xyXG4gICAgLS1icy1idG4taG92ZXItYmc6ICMyZjk5OWQ7XHJcbiAgICAtLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3I6ICMyZjk5OWQ7XHJcbiAgICAtLWJzLWJ0bi1mb2N1cy1zaGFkb3ctcmdiOiA2MCwxNTMsMTEwO1xyXG4gICAgLS1icy1idG4tYWN0aXZlLWNvbG9yOiAjZmZmO1xyXG4gICAgLS1icy1idG4tYWN0aXZlLWJnOiAjMmY5OTlkO1xyXG4gICAgLS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjogIzJmOTk5ZDtcclxuICAgIC0tYnMtYnRuLWFjdGl2ZS1zaGFkb3c6IGluc2V0IDAgM3B4IDVweHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4gICAgLS1icy1idG4tZGlzYWJsZWQtY29sb3I6ICNmZmY7XHJcbiAgICAtLWJzLWJ0bi1kaXNhYmxlZC1iZzogIzJmOTk5ZDtcclxuICAgIC0tYnMtYnRuLWRpc2FibGVkLWJvcmRlci1jb2xvcjogIzJmOTk5ZDtcclxufVxyXG5cclxuXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzIHtcclxuICAgIC0tYnMtYnRuLWNvbG9yOiAjMmY5OTlkO1xyXG4gICAgLS1icy1idG4tYm9yZGVyLWNvbG9yOiAjMmY5OTlkO1xyXG4gICAgLS1icy1idG4taG92ZXItY29sb3I6ICNmZmY7XHJcbiAgICAtLWJzLWJ0bi1ob3Zlci1iZzogIzJmOTk5ZDtcclxuICAgIC0tYnMtYnRuLWhvdmVyLWJvcmRlci1jb2xvcjogIzJmOTk5ZDtcclxuICAgIC0tYnMtYnRuLWZvY3VzLXNoYWRvdy1yZ2I6IDI1LDEzNSw4NDtcclxuICAgIC0tYnMtYnRuLWFjdGl2ZS1jb2xvcjogI2ZmZjtcclxuICAgIC0tYnMtYnRuLWFjdGl2ZS1iZzogIzJmOTk5ZDtcclxuICAgIC0tYnMtYnRuLWFjdGl2ZS1ib3JkZXItY29sb3I6ICMyZjk5OWQ7XHJcbiAgICAtLWJzLWJ0bi1hY3RpdmUtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICAtLWJzLWJ0bi1kaXNhYmxlZC1jb2xvcjogIzJmOTk5ZDtcclxuICAgIC0tYnMtYnRuLWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYnMtYnRuLWRpc2FibGVkLWJvcmRlci1jb2xvcjogIzJmOTk5ZDtcclxuICAgIC0tYnMtZ3JhZGllbnQ6IG5vbmU7XHJcbn1cclxuXHJcbi50ZXh0dGl0ZWx7XHJcbiAgICBjb2xvcjogdmFyKC0tY291bnQtY29sb3IpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbn1cclxuXHJcbi5uYXZ0aXRlbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IFxyXG4gICAgd2lkdGg6IDEwMCU7IGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 87125:
/*!**************************************************************************************************!*\
  !*** ./src/app/PopUp/details-transactions-portfolio/details-transactions-portfolio.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTransactionsPortfolioComponent": () => (/* binding */ DetailsTransactionsPortfolioComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/Enum/EnumPopUp.enum */ 42241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/manage-data.service */ 43607);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);







function DetailsTransactionsPortfolioComponent_div_75_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Realized Profit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailsTransactionsPortfolioComponent_div_75_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Realized Loss:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "color": a0 }; };
function DetailsTransactionsPortfolioComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DetailsTransactionsPortfolioComponent_div_75_p_2_Template, 2, 0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DetailsTransactionsPortfolioComponent_div_75_p_3_Template, 2, 0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.data.realized_pnl > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.data.realized_pnl < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx_r0.GetColor(ctx_r0.data.realized_pnl)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 4, ctx_r0.data.realized_pnl));
} }
class DetailsTransactionsPortfolioComponent {
    constructor(manage_data, dialogRef) {
        this.manage_data = manage_data;
        this.dialogRef = dialogRef;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngOnInit() {
        this.subscription.add(this.manage_data.getSubject(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_0__.EnumEventsPopUp.DetailsPortfolio.toString()).subscribe((data) => {
            this.data = data;
            this.VerifyData();
        }));
    }
    VerifyData() {
        if (this.data.transaction_type == 'SELL') {
            this.data.fee_amount = this.data.fee_amount * -1;
        }
    }
    GetColor(value) {
        if (Number(value) < 0) {
            return 'red';
        }
        else {
            return 'green';
        }
    }
    Close() {
        this.dialogRef.close();
    }
}
DetailsTransactionsPortfolioComponent.ɵfac = function DetailsTransactionsPortfolioComponent_Factory(t) { return new (t || DetailsTransactionsPortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_1__.ManageDataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef)); };
DetailsTransactionsPortfolioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DetailsTransactionsPortfolioComponent, selectors: [["app-details-transactions-portfolio"]], decls: 81, vars: 49, consts: [[1, "scroll"], [1, "box"], [1, "row"], [1, "row", "text-center", 2, "margin-top", "1%"], [1, "col"], [1, "h1", "colortext"], [1, "row", "text-center"], [1, "h4", "colortext"], [1, "h3", "colortext"], [1, "textbout", "colortext"], [1, "textbout", "colortext", "cachtext"], ["class", "row ", 4, "ngIf"], [1, "text-center", "mt-1", "mb-1"], ["type", "button", 1, "btn", "btn-success", "footer", "mx-auto", 3, "click"], ["class", "h5 colortext", 4, "ngIf"], [1, "textprice", "colortext", "textbout", "cachtext", 3, "ngStyle"], [1, "h5", "colortext"]], template: function DetailsTransactionsPortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "p", 5)(6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1)(10, "div", 2)(11, "div", 6)(12, "div", 4)(13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 8)(17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 1)(22, "div", 2)(23, "div", 4)(24, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 4)(28, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 2)(31, "div", 4)(32, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 4)(36, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 2)(40, "div", 4)(41, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 4)(45, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](47, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 2)(49, "div", 4)(50, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 4)(54, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](56, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 2)(58, "div", 4)(59, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 4)(63, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 2)(67, "div", 4)(68, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 4)(72, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](74, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, DetailsTransactionsPortfolioComponent_div_75_Template, 8, 8, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 2)(77, "div", 12)(78, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailsTransactionsPortfolioComponent_Template_button_click_78_listener() { return ctx.Close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.data.transaction_type, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](15, 19, ctx.data.total, "USD"), " ", ctx.data.base_currency, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 22, ctx.data.transaction_type == "BUY" || ctx.data.transaction_type == "WITHDRAW" ? ctx.data.total * -1 : ctx.data.total));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 24, "home.transactionId"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.transaction_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 26, "home.date"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](38, 28, ctx.data.creation_time, "MM/d/y HH:mm:ss"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.data.base_currency, " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 31, "dialog.price"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](47, 33, ctx.data.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](52, 35, "dialog.subtotal"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](56, 37, ctx.data.total < 0 ? ctx.data.total * -1 - ctx.data.fee_amount : ctx.data.total - ctx.data.fee_amount));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](61, 39, "home.tradingfee"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 41, ctx.data.fee_amount));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](70, 43, "dialog.total"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](74, 45, ctx.data.transaction_type == "BUY" || ctx.data.transaction_type == "WITHDRAW" ? ctx.data.total * -1 : ctx.data.total));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.transaction_type == "SELL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](80, 47, "general.close"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: [".btn[_ngcontent-%COMP%]:hover {\n  color: var(--bs-btn-hover-color);\n  background-color: #3bd4bd;\n  border-color: #3bd4bd;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #2f999d;\n  --bs-btn-border-color: #2f999d;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #2f999d;\n  --bs-btn-hover-border-color: #2f999d;\n  --bs-btn-focus-shadow-rgb: 60,153,110;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #2f999d;\n  --bs-btn-active-border-color: #2f999d;\n  --bs-btn-active-shadow: inset 0 3px 5pxrgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #2f999d;\n  --bs-btn-disabled-border-color: #2f999d;\n}\n\n.colortext[_ngcontent-%COMP%] {\n  color: var(--details-text-color);\n}\n\n.scroll[_ngcontent-%COMP%] {\n  height: 477px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n@media (min-width: 356px) {\n  .scroll[_ngcontent-%COMP%] {\n    height: 413px;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n}\n\n@media (min-width: 598px) {\n  .scroll[_ngcontent-%COMP%] {\n    height: 434px;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n}\n\n@media screen and (min-width: 394px) and (max-height: 444px) {\n  .scroll[_ngcontent-%COMP%] {\n    height: 77vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n}\n\n.textbout[_ngcontent-%COMP%] {\n  text-align: justify;\n  font-size: small;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMtdHJhbnNhY3Rpb25zLXBvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksb0JBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSwyREFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtBQUVKOztBQUNBO0VBRUksZ0NBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBT0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VBSkY7QUFDRjs7QUFPQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUFMRjtBQUNGOztBQVFBO0VBQ0U7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQU5GO0FBQ0Y7O0FBV0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVRGIiwiZmlsZSI6ImRldGFpbHMtdHJhbnNhY3Rpb25zLXBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG46aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWJzLWJ0bi1ob3Zlci1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2JkNGJkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2JkNGJkO1xyXG59XHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICAtLWJzLWJ0bi1jb2xvcjogI2ZmZjtcclxuICAgIC0tYnMtYnRuLWJnOiAjMmY5OTlkO1xyXG4gICAgLS1icy1idG4tYm9yZGVyLWNvbG9yOiAjMmY5OTlkO1xyXG4gICAgLS1icy1idG4taG92ZXItY29sb3I6ICNmZmY7XHJcbiAgICAtLWJzLWJ0bi1ob3Zlci1iZzogIzJmOTk5ZDtcclxuICAgIC0tYnMtYnRuLWhvdmVyLWJvcmRlci1jb2xvcjogIzJmOTk5ZDtcclxuICAgIC0tYnMtYnRuLWZvY3VzLXNoYWRvdy1yZ2I6IDYwLDE1MywxMTA7XHJcbiAgICAtLWJzLWJ0bi1hY3RpdmUtY29sb3I6ICNmZmY7XHJcbiAgICAtLWJzLWJ0bi1hY3RpdmUtYmc6ICMyZjk5OWQ7XHJcbiAgICAtLWJzLWJ0bi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAjMmY5OTlkO1xyXG4gICAgLS1icy1idG4tYWN0aXZlLXNoYWRvdzogaW5zZXQgMCAzcHggNXB4cmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICAtLWJzLWJ0bi1kaXNhYmxlZC1jb2xvcjogI2ZmZjtcclxuICAgIC0tYnMtYnRuLWRpc2FibGVkLWJnOiAjMmY5OTlkO1xyXG4gICAgLS1icy1idG4tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAjMmY5OTlkO1xyXG59XHJcblxyXG4uY29sb3J0ZXh0e1xyXG5cclxuICAgIGNvbG9yOiB2YXIoLS1kZXRhaWxzLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG5cclxuLnNjcm9sbHtcclxuICBoZWlnaHQ6IDQ3N3B4OyBcclxuICBvdmVyZmxvdy14OmhpZGRlbjsgXHJcbiAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzU2cHgpIHtcclxuICAuc2Nyb2xse1xyXG4gICAgaGVpZ2h0OiA0MTNweDsgXHJcbiAgICBvdmVyZmxvdy14OmhpZGRlbjsgXHJcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1OThweCkge1xyXG4gIC5zY3JvbGx7XHJcbiAgICBoZWlnaHQ6IDQzNHB4OyBcclxuICAgIG92ZXJmbG93LXg6aGlkZGVuOyBcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzk0cHgpIGFuZCAobWF4LWhlaWdodDogNDQ0cHgpe1xyXG4gIC5zY3JvbGx7XHJcbiAgICBoZWlnaHQ6IDc3dmg7IFxyXG4gICAgb3ZlcmZsb3cteDpoaWRkZW47IFxyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi50ZXh0Ym91dHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vIEBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xyXG4vLyAgIC50ZXh0Ym91dHtcclxuLy8gICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbi8vICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIH1cclxuXHJcbi8vIH0iXX0= */"] });


/***/ }),

/***/ 97863:
/*!****************************************************************!*\
  !*** ./src/app/PopUp/funds-options/funds-options.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundsOptionsComponent": () => (/* binding */ FundsOptionsComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/Enum/EnumAuthentication.enum */ 81708);
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirmation/confirmation.component */ 40915);
/* harmony import */ var src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/Enum/EnumPopUp.enum */ 42241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/manage-data.service */ 43607);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);












function FundsOptionsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("********", ctx_r0.data.last_four, "");
  }
}

class FundsOptionsComponent {
  constructor(manage_data, dialogRef, translate, dialog) {
    this.manage_data = manage_data;
    this.dialogRef = dialogRef;
    this.translate = translate;
    this.dialog = dialog;
    this.title = '';
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    var _this = this;

    this.subscription.add(this.manage_data.getSubject(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_3__.EnumEventsPopUp.FundsOption.toString()).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this.data = data;

        if (_this.data.direction == 'in') {
          _this.title = yield _this.translate.get('funds.fundsIn').toPromise();
        } else if (_this.data.direction == 'out') {
          _this.title = yield _this.translate.get('funds.fundsOut').toPromise();
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()));
  }

  ConfirmDelete() {
    var _this2 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
      dialogConfig.autoFocus = false;
      dialogConfig.disableClose = true; // dialogConfig.height = "20rem";

      dialogConfig.width = "40rem";
      var data = {
        title: yield _this2.translate.get("dialog.deletePaymentMethod").toPromise(),
        icon: 'delet',
        conten: yield _this2.translate.get("dialog.sureDeletePayment").toPromise()
      };

      _this2.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_3__.EnumEventsPopUp.ConfirmAction.toString(), data);

      let dialog = _this2.dialog.open(_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationComponent, dialogConfig);

      _this2.subscription.add(dialog.afterClosed().subscribe(result => {
        if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_1__.EnumConfirmation.si.toString()) {
          _this2.Delete();
        }
      }));
    })();
  }

  Delete() {
    this.dialogRef.close(src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_1__.EnumConfirmation["delete"].toString());
  }

  Default() {
    this.dialogRef.close(src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_1__.EnumConfirmation["default"].toString());
  }

  Close() {
    this.dialogRef.close();
  }

}

FundsOptionsComponent.ɵfac = function FundsOptionsComponent_Factory(t) {
  return new (t || FundsOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_4__.ManageDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog));
};

FundsOptionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: FundsOptionsComponent,
  selectors: [["app-funds-options"]],
  decls: 28,
  vars: 12,
  consts: [[1, "box"], [1, "row"], [1, "row", "text-center", 2, "margin-top", "5%"], [1, "col"], [1, "textprice", "h2"], [1, "textprice", "h4"], [4, "ngIf"], [1, "row", "justify-content-center", 2, "margin-top", "5%"], [1, "col-xl-4", "col-md-4", "text-center", "mt-1", "mb-1"], ["type", "button", 1, "btn", "btn-success", "texbot", 3, "click"], ["type", "button", 1, "btn", "btn-outline-danger", "texbot", 3, "click"], ["type", "button", 1, "btn", "btn-outline-success", "texbot", 3, "click"], [2, "color", "rgb(255, 136, 0)", "margin-top", "5px", "font-size", "20px"]],
  template: function FundsOptionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4)(5, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 0)(8, "div", 1)(9, "div", 2)(10, "div", 3)(11, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, FundsOptionsComponent_div_13_Template, 3, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 0)(15, "div", 7)(16, "div", 8)(17, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FundsOptionsComponent_Template_button_click_17_listener() {
        return ctx.Default();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 8)(21, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FundsOptionsComponent_Template_button_click_21_listener() {
        return ctx.ConfirmDelete();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 8)(25, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FundsOptionsComponent_Template_button_click_25_listener() {
        return ctx.Close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.data.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data.last_four != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 6, "funds.setDefault"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 8, "funds.delete"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 10, "general.cancel"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdW5kcy1vcHRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 43335:
/*!********************************************************!*\
  !*** ./src/app/PopUp/qr-reader/qr-reader.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrReaderComponent": () => (/* binding */ QrReaderComponent)
/* harmony export */ });
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ 70796);
/* harmony import */ var src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/Enum/EnumPopUp.enum */ 42241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/manage-data.service */ 43607);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @zxing/ngx-scanner */ 53800);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);







class QrReaderComponent {
    constructor(manage_data, dialogRef) {
        this.manage_data = manage_data;
        this.dialogRef = dialogRef;
        this.allowedFormats = [_zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.QR_CODE];
        this.scanEnable = true;
    }
    ngOnInit() {
    }
    ScanSuccess(data) {
        //console.log("Success")
        this.scanEnable = false;
        this.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_1__.EnumEventsPopUp.QRReaderWithdraw.toString(), data);
        this.dialogRef.close();
    }
    ScanError(data) {
        //console.log("Error", data)
        this.scanEnable = false;
        // console.log("Informacion del QR",data)
    }
    ScanFailure(data) {
        //console.log("Failure")
        //this.scanEnable = false;
        // console.log("Informacion del QR",data)
    }
    CameraFound(cameras) {
        //console.log("Cameras", cameras)
    }
    Close() {
        this.dialogRef.close();
    }
}
QrReaderComponent.ɵfac = function QrReaderComponent_Factory(t) { return new (t || QrReaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_2__.ManageDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef)); };
QrReaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: QrReaderComponent, selectors: [["app-qr-reader"]], decls: 13, vars: 7, consts: [[1, "box"], [1, "row", "text-center"], [1, "col"], [3, "autofocusEnabled", "scanSuccess", "scanError", "scanFailure", "camerasFound"], [1, "row"], ["type", "submit", 1, "btn", "btn-danger", "btn-lg", "mx-auto", 3, "click"]], template: function QrReaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1")(4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "zxing-scanner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scanSuccess", function QrReaderComponent_Template_zxing_scanner_scanSuccess_7_listener($event) { return ctx.ScanSuccess($event); })("scanError", function QrReaderComponent_Template_zxing_scanner_scanError_7_listener($event) { return ctx.ScanError($event); })("scanFailure", function QrReaderComponent_Template_zxing_scanner_scanFailure_7_listener($event) { return ctx.ScanFailure($event); })("scanError", function QrReaderComponent_Template_zxing_scanner_scanError_7_listener($event) { return ctx.ScanError($event); })("camerasFound", function QrReaderComponent_Template_zxing_scanner_camerasFound_7_listener($event) { return ctx.CameraFound($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4)(10, "Button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QrReaderComponent_Template_Button_click_10_listener() { return ctx.Close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 3, "dialog.scanning"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autofocusEnabled", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 5, "general.close"), " ");
    } }, dependencies: [_zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_5__.ZXingScannerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci1yZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 68489:
/*!****************************************************!*\
  !*** ./src/app/PopUp/qr-view/qr-view.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrViewComponent": () => (/* binding */ QrViewComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/Enum/EnumAuthentication.enum */ 81708);
/* harmony import */ var src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/Enum/EnumPopUp.enum */ 42241);
/* harmony import */ var _confirm_validate_google_qr_confirm_validate_google_qr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirm-validate-google-qr/confirm-validate-google-qr.component */ 31102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/manage-data.service */ 43607);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-clipboard */ 11691);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);














function QrViewComponent_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 8);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", ctx_r0.QR, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}

class QrViewComponent {
  constructor(translate, _dialogRef, manage_data, dialog, toastr, copy) {
    this.translate = translate;
    this._dialogRef = _dialogRef;
    this.manage_data = manage_data;
    this.dialog = dialog;
    this.toastr = toastr;
    this.copy = copy;
    this.title = "";
    this.QR = "";
    this.keyQR = "";
    this.show = false;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.GetDetails();
  }

  GetDetails() {
    this.manage_data.getSubject(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_2__.EnumEventsPopUp.QR.toString()).subscribe(data => {
      this.show = true;
      this.QR = data.qrcode;
      this.keyQR = data.key;
    });
  }

  CopyKey() {
    var _this = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.copy.copyFromContent(_this.keyQR);

      let msg = yield _this.translate.get('general.copied').toPromise();

      _this.toastr.info(msg);
    })();
  }

  ConfirmValidateCode() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true; // dialogConfig.height = "25%";

    dialogConfig.width = "width: 57%";
    let dialogRef = this.dialog.open(_confirm_validate_google_qr_confirm_validate_google_qr_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmValidateGoogleQRComponent, dialogConfig);
    this.subscription.add(dialogRef.afterClosed().subscribe(result => {
      if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_1__.EnumConfirmation.success.toString()) {
        this._dialogRef.close(src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_1__.EnumConfirmation.si.toString());
      }
    }));
  }

}

QrViewComponent.ɵfac = function QrViewComponent_Factory(t) {
  return new (t || QrViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_4__.ManageDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_clipboard__WEBPACK_IMPORTED_MODULE_10__.ClipboardService));
};

QrViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: QrViewComponent,
  selectors: [["app-qr-view"]],
  decls: 16,
  vars: 11,
  consts: [[1, ""], [1, "text-center"], ["class", "img-thumbnail ", "style", "height: 20vmax;", 3, "src", 4, "ngIf"], [1, "input-group", "my-3", 2, "width", "100%"], ["type", "text", "readonly", "", "placeholder", "", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control", 3, "value"], ["id", "basic-addon2", 1, "input-group-text", 2, "cursor", "pointer", 3, "click"], [1, "row", "mt-3"], ["type", "button", 1, "btn", "btn-success", 2, "background", "#23ae4d", 3, "click"], [1, "img-thumbnail", 2, "height", "20vmax", 3, "src"]],
  template: function QrViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, QrViewComponent_img_6_Template, 1, 1, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QrViewComponent_Template_span_click_9_listener() {
        return ctx.CopyKey();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 6)(13, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QrViewComponent_Template_button_click_13_listener() {
        return ctx.ConfirmValidateCode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 5, "general.qrgenerate"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.show);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.keyQR);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 7, "general.copy"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 9, "general.testCode"), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
  styles: [".form-control[_ngcontent-%COMP%] {\n  color: var(--drowdown-text-color);\n  background-color: var(--drowdown-bg);\n  border: 1px solid var(--drowdown-brd);\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  color: var(--text-input-grup);\n  background-color: var(--bg-input-grup);\n  border: 1px solid var(--br-input-grup);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtBQUNKIiwiZmlsZSI6InFyLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcclxuICAgIGNvbG9yOiB2YXIoLS1kcm93ZG93bi10ZXh0LWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRyb3dkb3duLWJnKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRyb3dkb3duLWJyZCk7ICAgIFxyXG4gIH1cclxuXHJcbi5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWlucHV0LWdydXApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctaW5wdXQtZ3J1cCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ici1pbnB1dC1ncnVwKTtcclxufSJdfQ== */"]
});

/***/ }),

/***/ 82111:
/*!****************************************************!*\
  !*** ./src/app/Principal/about/about.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_services_Client_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/Client/client.service */ 64022);
/* harmony import */ var src_services_AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/AppSettingsInit/app-settings.service */ 17059);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);







function AboutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div")(2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 4)(33, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AboutComponent_div_0_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.OKConfirm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 17, "settings.about"), " Blox");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 19, "general.version"), ": ", ctx_r0.Version, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("RestRoot: ", ctx_r0.ApiBase, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 21, "settings.sessionId"), ": ", ctx_r0.SessionID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 23, "settings.defaultCurrency"), " : USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 25, "settings.language"), ": ", ctx_r0.data_client.language, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 27, "settings.idVerified"), ": ", ctx_r0.data_client.id_verified ? "Yes" : "No", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("KYC ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 29, "general.completed"), ": ", ctx_r0.data_client.kyc_completed ? "Yes" : "No", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 31, "settings.phoneVerified"), ": ", ctx_r0.data_client.phone_validated ? "Yes" : "No", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 33, "settings.emailVerified"), ": ", ctx_r0.data_client.email_validated ? "Yes" : "No", "");
} }
class AboutComponent {
    constructor(dialogRef, client, settingsService) {
        this.dialogRef = dialogRef;
        this.client = client;
        this.settingsService = settingsService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngOnInit() {
        this.ApiBase = this.settingsService.getapidatos().APIS.ApiBase;
        this.GetClientConfig()
            .then((data) => {
            this.data_client = data;
            this.SessionID = this.data_client.key.toString().substring(this.data_client.key.toString().indexOf('|') + 1, this.data_client.key.toString().length);
            this.Version = window['version'];
        })
            .catch();
    }
    OKConfirm() {
        this.dialogRef.close();
    }
    //*******************************************************
    //Services
    //*******************************************************
    GetClientConfig() {
        return new Promise((resolve, reject) => {
            this.subscription.add(this.client.GetClientConfig().subscribe((response) => {
                resolve(response);
            }, err => {
                resolve(null);
            }));
        });
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_Client_client_service__WEBPACK_IMPORTED_MODULE_0__.ClientService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService)); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 1, vars: 1, consts: [["class", "scroll", 4, "ngIf"], [1, "scroll"], ["mat-dialog-title", "", 1, "text-center", "h1", "colortext"], ["mat-dialog-title", "", 1, "textbout", "colortext", 2, "margin-top", "-15px"], [1, "row", 2, "margin-top", "3vh"], [1, "btn", "btn-success", "footer", "mx-auto", 3, "click"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AboutComponent_div_0_Template, 35, 35, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data_client);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["*[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: rgb(26, 26, 26) rgba(255, 166, 0, 0);\n}\n\n\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(255, 166, 0, 0);\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--table-scroll);\n  border-radius: 20px;\n  border: 3px solid var(--table-scroll);\n}\n\n.textbout[_ngcontent-%COMP%] {\n  text-align: justify;\n  font-size: small;\n  width: 100%;\n}\n\n@media (min-width: 550px) {\n  .textbout[_ngcontent-%COMP%] {\n    text-align: justify;\n    font-size: medium;\n    width: 100%;\n  }\n}\n\n.footer[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  color: var(--bs-btn-hover-color);\n  background-color: #3bd4bd;\n  border-color: #3bd4bd;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #2f999d;\n  --bs-btn-border-color: #2f999d;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #2f999d;\n  --bs-btn-hover-border-color: #2f999d;\n  --bs-btn-focus-shadow-rgb: 60,153,110;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #2f999d;\n  --bs-btn-active-border-color: #2f999d;\n  --bs-btn-active-shadow: inset 0 3px 5pxrgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #2f999d;\n  --bs-btn-disabled-border-color: #2f999d;\n}\n\n.colortext[_ngcontent-%COMP%] {\n  color: var(--details-text-color);\n}\n\n.scroll[_ngcontent-%COMP%] {\n  height: 81vh;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n@media (min-height: 500px) {\n  .scroll[_ngcontent-%COMP%] {\n    height: 62vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n}\n\n@media (min-height: 850px) {\n  .scroll[_ngcontent-%COMP%] {\n    height: 43vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxxREFBQTtBQUNKOztBQUVFLHNDQUFBOztBQUNBO0VBQ0UsV0FBQTtBQUNKOztBQUVFO0VBQ0UsZ0NBQUE7QUFDSjs7QUFFRTtFQUNFLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7RUFDSjtBQUNGOztBQUdBO0VBRUksVUFBQTtBQUZKOztBQU9BO0VBQ0ksZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBSko7O0FBTUE7RUFDSSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLDJEQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0FBSEo7O0FBS0E7RUFFRSxnQ0FBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUFjLGtCQUFBO0VBQW1CLGtCQUFBO0FBRG5DOztBQU1BO0VBQ0U7SUFDRSxZQUFBO0lBQWMsa0JBQUE7SUFBbUIsa0JBQUE7RUFEbkM7QUFDRjs7QUFJQTtFQUNFO0lBQ0UsWUFBQTtJQUFjLGtCQUFBO0lBQW1CLGtCQUFBO0VBQW5DO0FBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuICAgIHNjcm9sbGJhci1jb2xvcjogcmdiKDI2LCAyNiwgMjYpIHJnYmEoMjU1LCAxNjYsIDAsIDApO1xyXG4gIH1cclxuICBcclxuICAvKiBXb3JrcyBvbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkgKi9cclxuICAqOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE2NiwgMCwgMCk7XHJcbiAgfVxyXG4gIFxyXG4gICo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxlLXNjcm9sbCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tdGFibGUtc2Nyb2xsKTtcclxuICAgIFxyXG4gIH1cclxuLnRleHRib3V0e1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xyXG4gICAgLnRleHRib3V0e1xyXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbi5mb290ZXJ7XHJcbiAgIFxyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgXHJcbiAgXHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWJzLWJ0bi1ob3Zlci1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2JkNGJkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2JkNGJkO1xyXG59XHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICAtLWJzLWJ0bi1jb2xvcjogI2ZmZjtcclxuICAgIC0tYnMtYnRuLWJnOiAjMmY5OTlkO1xyXG4gICAgLS1icy1idG4tYm9yZGVyLWNvbG9yOiAjMmY5OTlkO1xyXG4gICAgLS1icy1idG4taG92ZXItY29sb3I6ICNmZmY7XHJcbiAgICAtLWJzLWJ0bi1ob3Zlci1iZzogIzJmOTk5ZDtcclxuICAgIC0tYnMtYnRuLWhvdmVyLWJvcmRlci1jb2xvcjogIzJmOTk5ZDtcclxuICAgIC0tYnMtYnRuLWZvY3VzLXNoYWRvdy1yZ2I6IDYwLDE1MywxMTA7XHJcbiAgICAtLWJzLWJ0bi1hY3RpdmUtY29sb3I6ICNmZmY7XHJcbiAgICAtLWJzLWJ0bi1hY3RpdmUtYmc6ICMyZjk5OWQ7XHJcbiAgICAtLWJzLWJ0bi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAjMmY5OTlkO1xyXG4gICAgLS1icy1idG4tYWN0aXZlLXNoYWRvdzogaW5zZXQgMCAzcHggNXB4cmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICAtLWJzLWJ0bi1kaXNhYmxlZC1jb2xvcjogI2ZmZjtcclxuICAgIC0tYnMtYnRuLWRpc2FibGVkLWJnOiAjMmY5OTlkO1xyXG4gICAgLS1icy1idG4tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAjMmY5OTlkO1xyXG59XHJcbi5jb2xvcnRleHR7XHJcblxyXG4gIGNvbG9yOiB2YXIoLS1kZXRhaWxzLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG4uc2Nyb2xse1xyXG4gIGhlaWdodDogODF2aDsgb3ZlcmZsb3cteDpoaWRkZW47IG92ZXJmbG93LXk6c2Nyb2xsO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogNTAwcHgpIHtcclxuICAuc2Nyb2xse1xyXG4gICAgaGVpZ2h0OiA2MnZoOyBvdmVyZmxvdy14OmhpZGRlbjsgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDg1MHB4KSB7XHJcbiAgLnNjcm9sbHtcclxuICAgIGhlaWdodDogNDN2aDsgb3ZlcmZsb3cteDpoaWRkZW47IG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 32788:
/*!******************************************************************!*\
  !*** ./src/app/UserPages/change-email/change-email.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeEmailComponent": () => (/* binding */ ChangeEmailComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/PopUp/confirmation/confirmation.component */ 40915);
/* harmony import */ var src_assets_Errores_Errores_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/Errores/Errores.json */ 58417);
/* harmony import */ var src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/Enum/EnumAuthentication.enum */ 81708);
/* harmony import */ var src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/Enum/EnumPopUp.enum */ 42241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/login/login.service */ 3155);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/manage-data.service */ 43607);
/* harmony import */ var src_services_Client_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/Client/client.service */ 64022);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);



















function ChangeEmailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function ChangeEmailComponent_ng_container_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, error_r7.message), " ");
  }
}

function ChangeEmailComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ChangeEmailComponent_ng_container_20_span_1_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.get("new_email").hasError(error_r7.type) && (ctx_r1.loginForm.get("new_email").dirty || ctx_r1.loginForm.get("new_email").touched));
  }
}

function ChangeEmailComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "span", 27);
  }
}

function ChangeEmailComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ChangeEmail.change"), " ");
  }
}

function ChangeEmailComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "general.validating"), " ...");
  }
}

function ChangeEmailComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28)(1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

class ChangeEmailComponent {
  constructor(fb, loginService, router, toastr, translate, manage_data, dialog, client) {
    this.fb = fb;
    this.loginService = loginService;
    this.router = router;
    this.toastr = toastr;
    this.translate = translate;
    this.manage_data = manage_data;
    this.dialog = dialog;
    this.client = client;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
    this.ErroresSpan = src_assets_Errores_Errores_json__WEBPACK_IMPORTED_MODULE_2__;
    this.validating = false;
    this.loginForm = this.fb.group({
      new_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])]
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = yield _this.GetClientConfig();
      _this.current_email = data.email;
    })();
  }

  UpdateEmail() {
    var _this2 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.validating = true;

      if (_this2.current_email.trim() == _this2.loginForm.value.new_email) {
        _this2.validating = false;
        let title = yield _this2.translate.get('general.error').toPromise();
        let msg = yield _this2.translate.get('ChangeEmail.errorEmailSame').toPromise();

        _this2.ShowError(msg, title);

        return;
      }

      const usuario = {
        new_email: _this2.loginForm.value.new_email
      };
      const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogConfig();
      dialogConfig.autoFocus = false;
      dialogConfig.disableClose = true; // dialogConfig.height = "20rem";

      dialogConfig.width = "40rem";
      var content_text = yield _this2.translate.get("dialog.sureChangeEmail").toPromise();
      var data = {
        title: yield _this2.translate.get("ChangeEmail.change").toPromise(),
        icon: 'quest',
        conten: content_text + '\n ' + usuario.new_email
      };

      _this2.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_4__.EnumEventsPopUp.ConfirmAction.toString(), data);

      let dialogRef = _this2.dialog.open(src_app_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationComponent, dialogConfig);

      _this2.subscription.add(dialogRef.afterClosed().subscribe(result => {
        if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_3__.EnumConfirmation.si.toString()) {
          _this2.subscription.add(_this2.loginService.ChangeEmail(usuario).subscribe( /*#__PURE__*/function () {
            var _ref = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
              _this2.router.navigate(['validation/']);

              let msg = yield _this2.translate.get("ChangeEmail.changeEmail").toPromise();
              let msgstatus = yield _this2.translate.get("general.succes").toPromise();

              _this2.toastr.success(msg, msgstatus); // this.toastr.success("Correo Cambiado!!")


              _this2.validating = false;
            });

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }(), error => {
            _this2.validating = false;

            _this2.loginForm.reset();
          }));
        } else if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_3__.EnumConfirmation.no.toString()) {
          _this2.router.navigate(['/home']);
        }
      }));
    })();
  } //===========================================================================
  // Show Error
  //===========================================================================


  ShowError(msg, title = "", disableTimeOut = true) {
    console.error(msg);
    this.toastr.error(msg, title, {
      closeButton: true,
      disableTimeOut: disableTimeOut,
      positionClass: 'toast-center-center'
    });
  } //***************************************************************************************
  //Services
  //***************************************************************************************


  GetClientConfig() {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.client.GetClientConfig().subscribe(data => {
        resolve(data);
      }, err => {
        console.log("Error GetClientConfig:", err);
        resolve(null);
      }));
    });
  }

}

ChangeEmailComponent.ɵfac = function ChangeEmailComponent_Factory(t) {
  return new (t || ChangeEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_services_login_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_6__.ManageDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_services_Client_client_service__WEBPACK_IMPORTED_MODULE_7__.ClientService));
};

ChangeEmailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: ChangeEmailComponent,
  selectors: [["app-change-email"]],
  decls: 30,
  vars: 13,
  consts: [[1, "half", 2, "height", "100vh"], [1, "container"], [1, "row", "align-items-center", "justify-content-center"], [1, "form-block", "mx-auto", "shadow"], ["type", "button", "style", "cursor: pointer; text-align: end;", "class", "btnclose", "aria-label", "Close", "routerLink", "/home", 4, "ngIf"], [1, "col", "text-center"], [1, "icon", "image"], ["src", "../../../assets/images/u44.svg"], [1, "row", "text-center"], [2, "margin", "0 0 0"], [1, "scroll"], [3, "formGroup", "ngSubmit"], [1, "col", "form-group", "mb-3"], ["formControlName", "new_email", "type", "text", "required", "required", "aria-required", "true", 1, "form-control"], [4, "ngFor", "ngForOf"], [1, "row", "rowalign-items-center", "justify-content-center"], ["type", "submit", 1, "btn", "btn-block", "btn-success", "justify-content-center", 2, "background", "#23ae4d", 3, "disabled"], [1, "row"], [1, "buttonsign"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [4, "ngIf"], ["NoDaTa", ""], ["type", "button", "aria-label", "Close", "routerLink", "/home", 1, "btnclose", 2, "cursor", "pointer", "text-align", "end"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-x-lg"], ["d", "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"], ["class", "text-danger mb-2 spanerror", 4, "ngIf"], [1, "text-danger", "mb-2", "spanerror"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "nombre", 2, "width", "100%"], [2, "font-size", "50%", "color", "#fff"]],
  template: function ChangeEmailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, ChangeEmailComponent_div_4_Template, 3, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 8)(9, "h1", 9)(10, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 10)(14, "form", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function ChangeEmailComponent_Template_form_ngSubmit_14_listener() {
        return ctx.UpdateEmail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 12)(16, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, ChangeEmailComponent_ng_container_20_Template, 2, 1, "ng-container", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 15)(22, "button", 16)(23, "div", 17)(24, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, ChangeEmailComponent_span_25_Template, 1, 0, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, ChangeEmailComponent_span_26_Template, 3, 3, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, ChangeEmailComponent_span_27_Template, 3, 3, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, ChangeEmailComponent_ng_template_28_Template, 3, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.validating);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 9, "ChangeEmail.change"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 11, "ChangeEmail.new"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.ErroresSpan.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.validating);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.validating);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.validating);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #fff;\n}\n\np[_ngcontent-%COMP%] {\n  color: #b3b3b3;\n  font-weight: 100;\n  font-size: 1rem;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: var(--count-color);\n}\n\na[_ngcontent-%COMP%] {\n  transition: 0.3s all ease;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.half[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  padding-top: 1%;\n  height: 95vh;\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  background: #f6f7fc;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 200px;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  height: 54px;\n  color: var(--drowdown-text-color);\n  background-color: var(--drowdown-bg);\n  border: 1px solid var(--drowdown-brd);\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n}\n\n.half[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n  text-decoration: underline;\n}\n\n.half[_ngcontent-%COMP%]   .forgot-pass[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  color: var(--a-login);\n}\n\n.form-block[_ngcontent-%COMP%] {\n  background: var(--bg-login);\n  padding: 8vh;\n  max-width: 550px;\n  max-height: 100%;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.2);\n}\n\n@media (max-width: 767.98px) {\n  .form-block[_ngcontent-%COMP%] {\n    padding: 8vh;\n  }\n}\n\n.control[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 15px;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.control[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.2rem;\n  color: #888;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.control__indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background: #e6e6e6;\n  border-radius: 4px;\n}\n\n.control--radio[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #ccc;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb771a;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]:not([disabled]):checked    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb8633;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n  opacity: 0.9;\n  pointer-events: none;\n}\n\n.control__indicator[_ngcontent-%COMP%]:after {\n  font-family: \"icomoon\";\n  content: \"\\e5ca\";\n  position: absolute;\n  display: none;\n  font-size: 16px;\n  transition: 0.3s all ease;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  display: block;\n  color: #fff;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%]:after {\n  top: 50%;\n  left: 50%;\n  margin-top: -1px;\n  transform: translate(-50%, -50%);\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  border-color: #7b7b7b;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background-color: #7e0cf5;\n  opacity: 0.2;\n}\n\n.image[_ngcontent-%COMP%] {\n  margin-bottom: 1vh;\n}\n\n.buttonsign[_ngcontent-%COMP%] {\n  margin-right: 3rem;\n}\n\n@media (max-width: 575px) {\n  .buttonsign[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n\n.toast-top-center[_ngcontent-%COMP%] {\n  top: 45% !important;\n  right: 0 !important;\n  width: 100% !important;\n}\n\n@media all and (max-width: 240px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -54px;\n  }\n}\n\n@media all and (min-width: 241px) and (max-width: 320px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -64px;\n  }\n}\n\n@media all and (min-width: 321px) and (max-width: 480px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -96px;\n  }\n}\n\n.ngx-toastr[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 125px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@media (max-width: 768px) {\n  .ngx-toastr[_ngcontent-%COMP%] {\n    width: 450px !important;\n    height: 125px !important;\n  }\n}\n\n.spanerror[_ngcontent-%COMP%] {\n  font-size: 50%;\n}\n\n.imageequis[_ngcontent-%COMP%] {\n  margin-left: 100%;\n  margin-bottom: 4%;\n}\n\n.spanerror[_ngcontent-%COMP%] {\n  font-size: 50%;\n}\n\n.btnclose[_ngcontent-%COMP%] {\n  color: var(--details-text-color);\n}\n\n.btnclose[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--bg-color);\n  background-color: red;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  --bs-btn-color: var(--a-login);\n}\n\n.scroll[_ngcontent-%COMP%] {\n  max-height: 36vh;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n@media (min-height: 400px) {\n  .scroll[_ngcontent-%COMP%] {\n    max-height: 64vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1lbWFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTs7RUFFRSxpQ0FBQTtFQUNBLHlCQUFBO0FBR0Y7O0FBQUE7RUFHRSx5QkFBQTtBQUdGOztBQUZFO0VBQ0UsZ0NBQUE7QUFLSjs7QUFIQTtFQUNFLGVBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7QUFPRjs7QUFMRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBUUo7O0FBTkE7RUFDRSxtQkFBQTtBQVNGOztBQVBBO0VBQ0UsVUFBQTtBQVVGOztBQVRFO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsYUFBQTtFQVlKO0FBQ0Y7O0FBWEE7RUFDRSxVQUFBO0FBYUY7O0FBWkU7RUFDRTtJQUNFLFdBQUE7RUFlSjtBQUNGOztBQWRBO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0FBZUY7O0FBZEU7RUFDRSxhQUFBO0VBRUEsZ0JBQUE7QUFpQko7O0FBZkE7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0FBa0JGOztBQWhCQTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQW1CRjs7QUFaQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBZUY7O0FBWkE7RUFDRSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsNENBQUE7QUFlRjs7QUFkRTtFQUNFO0lBQ0UsWUFBQTtFQWlCSjtBQUNGOztBQWhCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWtCRjs7QUFqQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBb0JKOztBQWxCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFxQkY7O0FBbkJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXNCRjs7QUFwQkE7RUFDRSxrQkFBQTtBQXVCRjs7QUFyQkE7O0VBRUUsZ0JBQUE7QUF3QkY7O0FBdEJBO0VBQ0UsbUJBQUE7QUF5QkY7O0FBdkJBOztFQUVFLG1CQUFBO0FBMEJGOztBQXhCQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBMkJGOztBQXpCQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBR0EseUJBQUE7QUE0QkY7O0FBMUJBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUE2QkY7O0FBM0JBO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUdBLGdDQUFBO0FBOEJGOztBQTVCQTtFQUNFLHFCQUFBO0FBK0JGOztBQTdCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQWdDRjs7QUE1QkU7RUFDRSxrQkFBQTtBQStCSjs7QUE1QkE7RUFDQSxrQkFBQTtBQStCQTs7QUE3QkE7RUFPQTtJQUNFLGVBQUE7RUEwQkE7QUFDRjs7QUFyQkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUF1QkY7O0FBckJBO0VBQ0U7SUFDSSxrQkFBQTtFQXdCSjtBQUNGOztBQXRCQTtFQUNFO0lBQ0ksa0JBQUE7RUF3Qko7QUFDRjs7QUF0QkE7RUFDRTtJQUNJLGtCQUFBO0VBd0JKO0FBQ0Y7O0FBcEJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBc0JGOztBQW5CRTtFQURGO0lBRUksdUJBQUE7SUFDQSx3QkFBQTtFQXVCRjtBQUNGOztBQXJCQTtFQUNFLGNBQUE7QUF3QkY7O0FBdEJBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQXlCRjs7QUF2QkU7RUFDRSxjQUFBO0FBMEJKOztBQXhCRTtFQUNFLGdDQUFBO0FBMkJKOztBQXpCRTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7QUE0Qko7O0FBekJFO0VBQ0UsOEJBQUE7QUE0Qko7O0FBMUJFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBNkJKOztBQTFCRTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VBNkJKO0FBQ0Y7O0FBM0JFO0VBQ0UseURBQUE7QUE2QkoiLCJmaWxlIjoiY2hhbmdlLWVtYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxyXG5cclxucCB7XHJcbiAgY29sb3I6ICNiM2IzYjM7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBmb250LXNpemU6IDFyZW07IH1cclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsXHJcbi5oMSwgLmgyLCAuaDMsIC5oNCwgLmg1LCAuaDYge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmOyBcclxuICBjb2xvcjogdmFyKC0tY291bnQtY29sb3IpO31cclxuICBcclxuXHJcbmEge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7IH1cclxuICBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50OyB9XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogN3JlbSAwOyB9XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAyMHB4OyB9XHJcblxyXG4gIC5oYWxmLCAuaGFsZiAuY29udGFpbmVyID4gLnJvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgICBoZWlnaHQ6IDk1dmg7IH1cclxuXHJcbi5oYWxmIC5jb250ZW50cyB7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjdmYzsgfVxyXG5cclxuLmhhbGYgLmJnIHtcclxuICB3aWR0aDogMjUlOyB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAuaGFsZiAuYmcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyMDBweDsgfSB9XHJcblxyXG4uaGFsZiAuY29udGVudHMge1xyXG4gIHdpZHRoOiA3NSU7IH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIC5oYWxmIC5jb250ZW50cyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlOyB9IH1cclxuXHJcbi5oYWxmIC5jb250ZW50cyAuZm9ybS1jb250cm9sLCAuaGFsZiAuYmcgLmZvcm0tY29udHJvbCB7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBoZWlnaHQ6IDU0cHg7XHJcbiAgY29sb3I6IHZhcigtLWRyb3dkb3duLXRleHQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRyb3dkb3duLWJnKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kcm93ZG93bi1icmQpOyAgfVxyXG4gIC5oYWxmIC5jb250ZW50cyAuZm9ybS1jb250cm9sOmFjdGl2ZSwgLmhhbGYgLmNvbnRlbnRzIC5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5oYWxmIC5iZyAuZm9ybS1jb250cm9sOmFjdGl2ZSwgLmhhbGYgLmJnIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cclxuXHJcbi5oYWxmIC5iZyB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IH1cclxuXHJcbi5oYWxmIGEge1xyXG4gIGNvbG9yOiAjODg4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XHJcblxyXG4vLyAuaGFsZiAuYnRuIHtcclxuLy8gICBoZWlnaHQ6IDU0cHg7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4vLyAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7IH1cclxuXHJcbi5oYWxmIC5mb3Jnb3QtcGFzcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDsgXHJcbiAgY29sb3I6IHZhcigtLWEtbG9naW4pO1xyXG59XHJcblxyXG4uZm9ybS1ibG9jayB7XHJcbiAgYmFja2dyb3VuZDogIHZhcigtLWJnLWxvZ2luKTtcclxuICBwYWRkaW5nOiA4dmg7XHJcbiAgbWF4LXdpZHRoOiA1NTBweDtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIC5mb3JtLWJsb2NrIHtcclxuICAgICAgcGFkZGluZzogOHZoOyB9IH1cclxuXHJcbi5jb250cm9sIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDsgfVxyXG4gIC5jb250cm9sIC5jYXB0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLjJyZW07XHJcbiAgICBjb2xvcjogIzg4ODsgfVxyXG5cclxuLmNvbnRyb2wgaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBvcGFjaXR5OiAwOyB9XHJcblxyXG4uY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAycHg7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cclxuXHJcbi5jb250cm9sLS1yYWRpbyAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cclxuXHJcbi5jb250cm9sOmhvdmVyIGlucHV0IH4gLmNvbnRyb2xfX2luZGljYXRvcixcclxuLmNvbnRyb2wgaW5wdXQ6Zm9jdXMgfiAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjOyB9XHJcblxyXG4uY29udHJvbCBpbnB1dDpjaGVja2VkIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZDogI2ZiNzcxYTsgfVxyXG5cclxuLmNvbnRyb2w6aG92ZXIgaW5wdXQ6bm90KFtkaXNhYmxlZF0pOmNoZWNrZWQgfiAuY29udHJvbF9faW5kaWNhdG9yLFxyXG4uY29udHJvbCBpbnB1dDpjaGVja2VkOmZvY3VzIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZDogI2ZiODYzMzsgfVxyXG5cclxuLmNvbnRyb2wgaW5wdXQ6ZGlzYWJsZWQgfiAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxyXG5cclxuLmNvbnRyb2xfX2luZGljYXRvcjphZnRlciB7XHJcbiAgZm9udC1mYW1pbHk6ICdpY29tb29uJztcclxuICBjb250ZW50OiAnXFxlNWNhJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTsgfVxyXG5cclxuLmNvbnRyb2wgaW5wdXQ6Y2hlY2tlZCB+IC5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjZmZmOyB9XHJcblxyXG4uY29udHJvbC0tY2hlY2tib3ggLmNvbnRyb2xfX2luZGljYXRvcjphZnRlciB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cclxuXHJcbi5jb250cm9sLS1jaGVja2JveCBpbnB1dDpkaXNhYmxlZCB+IC5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogIzdiN2I3YjsgfVxyXG5cclxuLmNvbnRyb2wtLWNoZWNrYm94IGlucHV0OmRpc2FibGVkOmNoZWNrZWQgfiAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2UwY2Y1O1xyXG4gIG9wYWNpdHk6IC4yOyB9XHJcblxyXG5cclxuXHJcbiAgLmltYWdle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xyXG4gIH1cclxuICBcclxuLmJ1dHRvbnNpZ257XHJcbm1hcmdpbi1yaWdodDogM3JlbTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpe1xyXG5cclxuLy8gLmhhbGYgLmJ0biB7XHJcbi8vICAgaGVpZ2h0OiAxMDAlOyBcclxuLy8gICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbi8vICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuLy8gfVxyXG4uYnV0dG9uc2lnbntcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxufVxyXG5cclxuXHJcblxyXG4udG9hc3QtdG9wLWNlbnRlciB7IFxyXG4gIHRvcDogNDUlICFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59IFxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAyNDBweCkgeyBcclxuICAudG9hc3QtdG9wLWNlbnRlciB7IFxyXG4gICAgICBtYXJnaW4tbGVmdDogLTU0cHg7IFxyXG4gIH0gXHJcbn0gXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDI0MXB4KSBhbmQgKG1heC13aWR0aDogMzIwcHgpIHsgXHJcbiAgLnRvYXN0LXRvcC1jZW50ZXIgeyBcclxuICAgICAgbWFyZ2luLWxlZnQ6IC02NHB4OyBcclxuICB9IFxyXG59IFxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzMjFweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7IFxyXG4gIC50b2FzdC10b3AtY2VudGVyIHsgXHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtOTZweDsgXHJcbiAgfSBcclxufVxyXG5cclxuXHJcbi5uZ3gtdG9hc3RyIHtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgaGVpZ2h0OiAxMjVweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLm5neC10b2FzdHIge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgd2lkdGg6IDQ1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5zcGFuZXJyb3J7XHJcbiAgZm9udC1zaXplOiA1MCU7XHJcbn1cclxuLmltYWdlZXF1aXMge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gIH1cclxuICAuc3BhbmVycm9ye1xyXG4gICAgZm9udC1zaXplOiA1MCU7XHJcbiAgfVxyXG4gIC5idG5jbG9zZXtcclxuICAgIGNvbG9yOiB2YXIoLS1kZXRhaWxzLXRleHQtY29sb3IpO1xyXG4gIH1cclxuICAuYnRuY2xvc2UgOmhvdmVye1xyXG4gICAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1saW5rIHsgIFxyXG4gICAgLS1icy1idG4tY29sb3I6IHZhcigtLWEtbG9naW4pO1xyXG4gIH1cclxuICAuc2Nyb2xse1xyXG4gICAgbWF4LWhlaWdodDozNnZoO1xyXG4gICAgb3ZlcmZsb3cteDpoaWRkZW47IFxyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLWhlaWdodDogNDAwcHgpe1xyXG4gICAgLnNjcm9sbHtcclxuICAgICAgbWF4LWhlaWdodDo2NHZoO1xyXG4gICAgICBvdmVyZmxvdy14OmhpZGRlbjsgXHJcbiAgICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMnJlbSB2YXIoLS1zaGFkb3duLWNvbG9yKSFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"]
});

/***/ }),

/***/ 94368:
/*!************************************************************************!*\
  !*** ./src/app/UserPages/change-password/change-password.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_services_FormValidation_passwordStrength_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/FormValidation/passwordStrength.validator */ 55063);
/* harmony import */ var src_assets_Errores_Errores_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/Errores/Errores.json */ 58417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/login/login.service */ 3155);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);













function ChangePasswordComponent_ng_container_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, error_r4.message), " ");
  }
}

function ChangePasswordComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ChangePasswordComponent_ng_container_22_span_1_Template, 3, 3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("password").hasError(error_r4.type) && (ctx_r0.loginForm.get("password").dirty || ctx_r0.loginForm.get("password").touched));
  }
}

function ChangePasswordComponent_ng_container_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, error_r7.message), " ");
  }
}

function ChangePasswordComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ChangePasswordComponent_ng_container_28_span_1_Template, 3, 3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.get("passwordConfirmation").hasError(error_r7.type) && (ctx_r1.loginForm.get("passwordConfirmation").dirty || ctx_r1.loginForm.get("passwordConfirmation").touched));
  }
}

function ChangePasswordComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}

class ChangePasswordComponent {
  constructor(fb, loginService, router, toastr, translate) {
    this.fb = fb;
    this.loginService = loginService;
    this.router = router;
    this.toastr = toastr;
    this.translate = translate;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.ErroresSpan = src_assets_Errores_Errores_json__WEBPACK_IMPORTED_MODULE_2__;
    this.loginForm = this.fb.group({
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8)])],
      passwordConfirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8), src_services_FormValidation_passwordStrength_validator__WEBPACK_IMPORTED_MODULE_1__.PasswordStrengthValidator])]
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  UpdatePassword() {
    var _this = this;

    const usuario = {
      current_password: this.loginForm.value.password,
      new_password: this.loginForm.value.passwordConfirmation
    };
    this.subscription.add(this.loginService.ChangePassword(usuario).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        let msg = yield _this.translate.get("ChangePassword.ChangePassword").toPromise();
        let msgstatus = yield _this.translate.get("general.succes").toPromise();

        _this.toastr.success(msg, msgstatus);

        _this.toastr.success("Contraseña Cambiada!!");

        localStorage.removeItem('token');

        _this.router.navigate(['/']);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), error => {
      this.loginForm.reset();
    }));
  }

}

ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) {
  return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService));
};

ChangePasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ChangePasswordComponent,
  selectors: [["app-change-password"]],
  decls: 37,
  vars: 16,
  consts: [[1, "half"], [1, "container"], [1, "row", "align-items-center", "justify-content-center"], [1, "form-block", "mx-auto", "shadow"], ["type", "button", "aria-label", "Close", "routerLink", "/home", 1, "btnclose", 2, "cursor", "pointer", "text-align", "end"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-x-lg"], ["d", "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"], [1, "col", "text-center"], [1, "icon", "image"], ["src", "../../../assets/images/u44.svg"], [1, "row", "text-center"], [2, "margin", "0 0 0"], [1, "scroll"], [3, "formGroup", "ngSubmit"], [1, "col", "form-group", "mb-3"], ["formControlName", "password", "type", "password", "required", "required", "aria-required", "true", 1, "form-control"], [4, "ngFor", "ngForOf"], [1, "form-group", "mb-3"], ["formControlName", "passwordConfirmation", "type", "password", "required", "required", "aria-required", "true", 1, "form-control"], [1, "row", "rowalign-items-center", "justify-content-center"], ["type", "submit", 1, "btn", "btn-block", "btn-success", "justify-content-center", 2, "background", "#23ae4d", 3, "disabled"], [1, "row"], [1, "buttonsign"], ["NoDaTa", ""], ["class", "text-danger mb-2 spanerror", 4, "ngIf"], [1, "text-danger", "mb-2", "spanerror"], [1, "nombre", 2, "width", "100%"], [2, "font-size", "50%", "color", "rgba(255, 255, 255, 0)"]],
  template: function ChangePasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "path", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 10)(11, "h1", 11)(12, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 12)(16, "form", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_16_listener() {
        return ctx.UpdatePassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 14)(18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ChangePasswordComponent_ng_container_22_Template, 2, 1, "ng-container", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 17)(24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ChangePasswordComponent_ng_container_28_Template, 2, 1, "ng-container", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 19)(30, "button", 20)(31, "div", 21)(32, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, ChangePasswordComponent_ng_template_35_Template, 3, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 8, "ChangePassword.change"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 10, "ChangePassword.currenty"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.ErroresSpan.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 12, "ChangePassword.new"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.ErroresSpan.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 14, "ChangePassword.change"), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #fff;\n}\n\np[_ngcontent-%COMP%] {\n  color: #b3b3b3;\n  font-weight: 100;\n  font-size: 1rem;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: var(--count-color);\n}\n\na[_ngcontent-%COMP%] {\n  transition: 0.3s all ease;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.half[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  padding-top: 1%;\n  height: 95vh;\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  background: #f6f7fc;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 200px;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  height: 54px;\n  color: var(--drowdown-text-color);\n  background-color: var(--drowdown-bg);\n  border: 1px solid var(--drowdown-brd);\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n}\n\n.half[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n  text-decoration: underline;\n}\n\n.half[_ngcontent-%COMP%]   .forgot-pass[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  color: var(--a-login);\n}\n\n.form-block[_ngcontent-%COMP%] {\n  background: var(--bg-login);\n  padding: 8vh;\n  max-width: 550px;\n  max-height: 100%;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.2);\n}\n\n@media (max-width: 767.98px) {\n  .form-block[_ngcontent-%COMP%] {\n    padding: 8vh;\n  }\n}\n\n.control[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 15px;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.control[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.2rem;\n  color: #888;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.control__indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background: #e6e6e6;\n  border-radius: 4px;\n}\n\n.control--radio[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #ccc;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb771a;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]:not([disabled]):checked    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb8633;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n  opacity: 0.9;\n  pointer-events: none;\n}\n\n.control__indicator[_ngcontent-%COMP%]:after {\n  font-family: \"icomoon\";\n  content: \"\\e5ca\";\n  position: absolute;\n  display: none;\n  font-size: 16px;\n  transition: 0.3s all ease;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  display: block;\n  color: #fff;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%]:after {\n  top: 50%;\n  left: 50%;\n  margin-top: -1px;\n  transform: translate(-50%, -50%);\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  border-color: #7b7b7b;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background-color: #7e0cf5;\n  opacity: 0.2;\n}\n\n.image[_ngcontent-%COMP%] {\n  margin-bottom: 1vh;\n}\n\n.buttonsign[_ngcontent-%COMP%] {\n  margin-right: 3rem;\n}\n\n@media (max-width: 575px) {\n  .buttonsign[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n\n.toast-top-center[_ngcontent-%COMP%] {\n  top: 45% !important;\n  right: 0 !important;\n  width: 100% !important;\n}\n\n@media all and (max-width: 240px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -54px;\n  }\n}\n\n@media all and (min-width: 241px) and (max-width: 320px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -64px;\n  }\n}\n\n@media all and (min-width: 321px) and (max-width: 480px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -96px;\n  }\n}\n\n.ngx-toastr[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 125px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@media (max-width: 768px) {\n  .ngx-toastr[_ngcontent-%COMP%] {\n    width: 450px !important;\n    height: 125px !important;\n  }\n}\n\n.spanerror[_ngcontent-%COMP%] {\n  font-size: 50%;\n}\n\n.imageequis[_ngcontent-%COMP%] {\n  margin-left: 100%;\n  margin-bottom: 4%;\n}\n\n.spanerror[_ngcontent-%COMP%] {\n  font-size: 50%;\n}\n\n.btnclose[_ngcontent-%COMP%] {\n  color: var(--details-text-color);\n}\n\n.btnclose[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--bg-color);\n  background-color: red;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  --bs-btn-color: var(--a-login);\n}\n\n.scroll[_ngcontent-%COMP%] {\n  max-height: 36vh;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n@media (min-height: 400px) {\n  .scroll[_ngcontent-%COMP%] {\n    max-height: 64vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTs7RUFFRSxpQ0FBQTtFQUNBLHlCQUFBO0FBR0Y7O0FBQUE7RUFHRSx5QkFBQTtBQUdGOztBQUZFO0VBQ0UsZ0NBQUE7QUFLSjs7QUFIQTtFQUNFLGVBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7QUFPRjs7QUFMRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBUUo7O0FBTkE7RUFDRSxtQkFBQTtBQVNGOztBQVBBO0VBQ0UsVUFBQTtBQVVGOztBQVRFO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsYUFBQTtFQVlKO0FBQ0Y7O0FBWEE7RUFDRSxVQUFBO0FBYUY7O0FBWkU7RUFDRTtJQUNFLFdBQUE7RUFlSjtBQUNGOztBQWRBO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0FBZUY7O0FBZEU7RUFDRSxhQUFBO0VBRUEsZ0JBQUE7QUFpQko7O0FBZkE7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0FBa0JGOztBQWhCQTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQW1CRjs7QUFaQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBZUY7O0FBWkE7RUFDRSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsNENBQUE7QUFlRjs7QUFkRTtFQUNFO0lBQ0UsWUFBQTtFQWlCSjtBQUNGOztBQWhCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWtCRjs7QUFqQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBb0JKOztBQWxCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFxQkY7O0FBbkJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXNCRjs7QUFwQkE7RUFDRSxrQkFBQTtBQXVCRjs7QUFyQkE7O0VBRUUsZ0JBQUE7QUF3QkY7O0FBdEJBO0VBQ0UsbUJBQUE7QUF5QkY7O0FBdkJBOztFQUVFLG1CQUFBO0FBMEJGOztBQXhCQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBMkJGOztBQXpCQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBR0EseUJBQUE7QUE0QkY7O0FBMUJBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUE2QkY7O0FBM0JBO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUdBLGdDQUFBO0FBOEJGOztBQTVCQTtFQUNFLHFCQUFBO0FBK0JGOztBQTdCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQWdDRjs7QUE1QkU7RUFDRSxrQkFBQTtBQStCSjs7QUE1QkE7RUFDQSxrQkFBQTtBQStCQTs7QUE3QkE7RUFPQTtJQUNFLGVBQUE7RUEwQkE7QUFDRjs7QUFyQkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUF1QkY7O0FBckJBO0VBQ0U7SUFDSSxrQkFBQTtFQXdCSjtBQUNGOztBQXRCQTtFQUNFO0lBQ0ksa0JBQUE7RUF3Qko7QUFDRjs7QUF0QkE7RUFDRTtJQUNJLGtCQUFBO0VBd0JKO0FBQ0Y7O0FBcEJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBc0JGOztBQW5CRTtFQURGO0lBRUksdUJBQUE7SUFDQSx3QkFBQTtFQXVCRjtBQUNGOztBQXJCQTtFQUNFLGNBQUE7QUF3QkY7O0FBdEJBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQXlCRjs7QUF2QkU7RUFDRSxjQUFBO0FBMEJKOztBQXhCRTtFQUNFLGdDQUFBO0FBMkJKOztBQXpCRTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7QUE0Qko7O0FBekJFO0VBQ0UsOEJBQUE7QUE0Qko7O0FBMUJFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBNkJKOztBQTFCRTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VBNkJKO0FBQ0Y7O0FBM0JFO0VBQ0UseURBQUE7QUE2QkoiLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxyXG5cclxucCB7XHJcbiAgY29sb3I6ICNiM2IzYjM7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBmb250LXNpemU6IDFyZW07IH1cclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsXHJcbi5oMSwgLmgyLCAuaDMsIC5oNCwgLmg1LCAuaDYge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmOyBcclxuICBjb2xvcjogdmFyKC0tY291bnQtY29sb3IpO31cclxuICBcclxuXHJcbmEge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7IH1cclxuICBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50OyB9XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogN3JlbSAwOyB9XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAyMHB4OyB9XHJcblxyXG4gIC5oYWxmLCAuaGFsZiAuY29udGFpbmVyID4gLnJvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgICBoZWlnaHQ6IDk1dmg7IH1cclxuXHJcbi5oYWxmIC5jb250ZW50cyB7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjdmYzsgfVxyXG5cclxuLmhhbGYgLmJnIHtcclxuICB3aWR0aDogMjUlOyB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAuaGFsZiAuYmcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyMDBweDsgfSB9XHJcblxyXG4uaGFsZiAuY29udGVudHMge1xyXG4gIHdpZHRoOiA3NSU7IH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIC5oYWxmIC5jb250ZW50cyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlOyB9IH1cclxuXHJcbi5oYWxmIC5jb250ZW50cyAuZm9ybS1jb250cm9sLCAuaGFsZiAuYmcgLmZvcm0tY29udHJvbCB7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBoZWlnaHQ6IDU0cHg7XHJcbiAgY29sb3I6IHZhcigtLWRyb3dkb3duLXRleHQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRyb3dkb3duLWJnKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kcm93ZG93bi1icmQpOyAgfVxyXG4gIC5oYWxmIC5jb250ZW50cyAuZm9ybS1jb250cm9sOmFjdGl2ZSwgLmhhbGYgLmNvbnRlbnRzIC5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5oYWxmIC5iZyAuZm9ybS1jb250cm9sOmFjdGl2ZSwgLmhhbGYgLmJnIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cclxuXHJcbi5oYWxmIC5iZyB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IH1cclxuXHJcbi5oYWxmIGEge1xyXG4gIGNvbG9yOiAjODg4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XHJcblxyXG4vLyAuaGFsZiAuYnRuIHtcclxuLy8gICBoZWlnaHQ6IDU0cHg7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4vLyAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7IH1cclxuXHJcbi5oYWxmIC5mb3Jnb3QtcGFzcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDsgXHJcbiAgY29sb3I6IHZhcigtLWEtbG9naW4pO1xyXG59XHJcblxyXG4uZm9ybS1ibG9jayB7XHJcbiAgYmFja2dyb3VuZDogIHZhcigtLWJnLWxvZ2luKTtcclxuICBwYWRkaW5nOiA4dmg7XHJcbiAgbWF4LXdpZHRoOiA1NTBweDtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIC5mb3JtLWJsb2NrIHtcclxuICAgICAgcGFkZGluZzogOHZoOyB9IH1cclxuXHJcbi5jb250cm9sIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDsgfVxyXG4gIC5jb250cm9sIC5jYXB0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLjJyZW07XHJcbiAgICBjb2xvcjogIzg4ODsgfVxyXG5cclxuLmNvbnRyb2wgaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBvcGFjaXR5OiAwOyB9XHJcblxyXG4uY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAycHg7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cclxuXHJcbi5jb250cm9sLS1yYWRpbyAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cclxuXHJcbi5jb250cm9sOmhvdmVyIGlucHV0IH4gLmNvbnRyb2xfX2luZGljYXRvcixcclxuLmNvbnRyb2wgaW5wdXQ6Zm9jdXMgfiAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjOyB9XHJcblxyXG4uY29udHJvbCBpbnB1dDpjaGVja2VkIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZDogI2ZiNzcxYTsgfVxyXG5cclxuLmNvbnRyb2w6aG92ZXIgaW5wdXQ6bm90KFtkaXNhYmxlZF0pOmNoZWNrZWQgfiAuY29udHJvbF9faW5kaWNhdG9yLFxyXG4uY29udHJvbCBpbnB1dDpjaGVja2VkOmZvY3VzIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZDogI2ZiODYzMzsgfVxyXG5cclxuLmNvbnRyb2wgaW5wdXQ6ZGlzYWJsZWQgfiAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxyXG5cclxuLmNvbnRyb2xfX2luZGljYXRvcjphZnRlciB7XHJcbiAgZm9udC1mYW1pbHk6ICdpY29tb29uJztcclxuICBjb250ZW50OiAnXFxlNWNhJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTsgfVxyXG5cclxuLmNvbnRyb2wgaW5wdXQ6Y2hlY2tlZCB+IC5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjZmZmOyB9XHJcblxyXG4uY29udHJvbC0tY2hlY2tib3ggLmNvbnRyb2xfX2luZGljYXRvcjphZnRlciB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cclxuXHJcbi5jb250cm9sLS1jaGVja2JveCBpbnB1dDpkaXNhYmxlZCB+IC5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogIzdiN2I3YjsgfVxyXG5cclxuLmNvbnRyb2wtLWNoZWNrYm94IGlucHV0OmRpc2FibGVkOmNoZWNrZWQgfiAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2UwY2Y1O1xyXG4gIG9wYWNpdHk6IC4yOyB9XHJcblxyXG5cclxuXHJcbiAgLmltYWdle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xyXG4gIH1cclxuICBcclxuLmJ1dHRvbnNpZ257XHJcbm1hcmdpbi1yaWdodDogM3JlbTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpe1xyXG5cclxuLy8gLmhhbGYgLmJ0biB7XHJcbi8vICAgaGVpZ2h0OiAxMDAlOyBcclxuLy8gICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbi8vICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuLy8gfVxyXG4uYnV0dG9uc2lnbntcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxufVxyXG5cclxuXHJcblxyXG4udG9hc3QtdG9wLWNlbnRlciB7IFxyXG4gIHRvcDogNDUlICFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59IFxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAyNDBweCkgeyBcclxuICAudG9hc3QtdG9wLWNlbnRlciB7IFxyXG4gICAgICBtYXJnaW4tbGVmdDogLTU0cHg7IFxyXG4gIH0gXHJcbn0gXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDI0MXB4KSBhbmQgKG1heC13aWR0aDogMzIwcHgpIHsgXHJcbiAgLnRvYXN0LXRvcC1jZW50ZXIgeyBcclxuICAgICAgbWFyZ2luLWxlZnQ6IC02NHB4OyBcclxuICB9IFxyXG59IFxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzMjFweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7IFxyXG4gIC50b2FzdC10b3AtY2VudGVyIHsgXHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtOTZweDsgXHJcbiAgfSBcclxufVxyXG5cclxuXHJcbi5uZ3gtdG9hc3RyIHtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgaGVpZ2h0OiAxMjVweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLm5neC10b2FzdHIge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgd2lkdGg6IDQ1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5zcGFuZXJyb3J7XHJcbiAgZm9udC1zaXplOiA1MCU7XHJcbn1cclxuLmltYWdlZXF1aXMge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gIH1cclxuICAuc3BhbmVycm9ye1xyXG4gICAgZm9udC1zaXplOiA1MCU7XHJcbiAgfVxyXG4gIC5idG5jbG9zZXtcclxuICAgIGNvbG9yOiB2YXIoLS1kZXRhaWxzLXRleHQtY29sb3IpO1xyXG4gIH1cclxuICAuYnRuY2xvc2UgOmhvdmVye1xyXG4gICAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1saW5rIHsgIFxyXG4gICAgLS1icy1idG4tY29sb3I6IHZhcigtLWEtbG9naW4pO1xyXG4gIH1cclxuICAuc2Nyb2xse1xyXG4gICAgbWF4LWhlaWdodDozNnZoO1xyXG4gICAgb3ZlcmZsb3cteDpoaWRkZW47IFxyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLWhlaWdodDogNDAwcHgpe1xyXG4gICAgLnNjcm9sbHtcclxuICAgICAgbWF4LWhlaWdodDo2NHZoO1xyXG4gICAgICBvdmVyZmxvdy14OmhpZGRlbjsgXHJcbiAgICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMnJlbSB2YXIoLS1zaGFkb3duLWNvbG9yKSFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"]
});

/***/ }),

/***/ 47164:
/*!******************************************************************!*\
  !*** ./src/app/UserPages/change-phone/change-phone.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePhoneComponent": () => (/* binding */ ChangePhoneComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_assets_Errores_Errores_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/Errores/Errores.json */ 58417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/login/login.service */ 3155);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_services_RefData_ref_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/RefData/ref-data.service */ 7015);
/* harmony import */ var src_services_Client_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/Client/client.service */ 64022);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);














function ChangePhoneComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}

function ChangePhoneComponent_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const value_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", value_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](value_r10.phone_area_code);
  }
}

function ChangePhoneComponent_ng_container_26_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, error_r11.message), " ");
  }
}

function ChangePhoneComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ChangePhoneComponent_ng_container_26_span_1_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.loginForm.get("countryselect").hasError(error_r11.type) && (ctx_r2.loginForm.get("countryselect").dirty || ctx_r2.loginForm.get("countryselect").touched));
  }
}

function ChangePhoneComponent_ng_container_31_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, error_r14.message), " ");
  }
}

function ChangePhoneComponent_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ChangePhoneComponent_ng_container_31_span_1_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r14 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.loginForm.get("new_phone").hasError(error_r14.type) && (ctx_r3.loginForm.get("new_phone").dirty || ctx_r3.loginForm.get("new_phone").touched));
  }
}

function ChangePhoneComponent_ng_container_40_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, error_r17.message), " ");
  }
}

function ChangePhoneComponent_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ChangePhoneComponent_ng_container_40_span_1_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r17 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.loginForm.get("confirmation_phone").hasError(error_r17.type) && (ctx_r4.loginForm.get("confirmation_phone").dirty || ctx_r4.loginForm.get("confirmation_phone").touched));
  }
}

function ChangePhoneComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 34);
  }
}

function ChangePhoneComponent_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ChangePhone.change"), "");
  }
}

function ChangePhoneComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "general.validating"), " ...");
  }
}

function ChangePhoneComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35)(1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}

class ChangePhoneComponent {
  constructor(fb, loginService, router, toastr, translate, refdataservice, client) {
    this.fb = fb;
    this.loginService = loginService;
    this.router = router;
    this.toastr = toastr;
    this.translate = translate;
    this.refdataservice = refdataservice;
    this.client = client;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    this.ErroresSpan = src_assets_Errores_Errores_json__WEBPACK_IMPORTED_MODULE_1__;
    this.validating = false;
    this.loginForm = this.fb.group({
      new_phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(8)])],
      confirmation_phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(8)])],
      countryselect: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = yield _this.GetClientConfig();
      _this.current_phone = data.phone;

      _this.GetCountries();
    })();
  }

  UpdatePhone() {
    var _this2 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.validating = true;
      let newphone = _this2.indicator + _this2.loginForm.value.new_phone;
      let confirmnewphone = _this2.indicator + _this2.loginForm.value.confirmation_phone;
      console.log("Nuevo numero", newphone);
      console.log("Confirmacion numero", confirmnewphone);

      if (newphone.trim() == confirmnewphone.trim()) {
        if (newphone.trim() == _this2.current_phone.trim()) {
          _this2.validating = false;
          let title = yield _this2.translate.get('general.error').toPromise();
          let msg = yield _this2.translate.get('ChangePhone.errorPhoneSame').toPromise();

          _this2.ShowError(msg, title);

          return;
        }

        const usuario = {
          new_phone: newphone
        };

        _this2.subscription.add(_this2.loginService.ChangePhone(usuario).subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            console.log("Change Phone Response", data);

            _this2.router.navigate(['validation/']);

            let msg = yield _this2.translate.get("ChangePhone.changePhone").toPromise();
            let msgstatus = yield _this2.translate.get("general.succes").toPromise();

            _this2.toastr.success(msg, msgstatus);

            _this2.validating = false; // this.toastr.success("Correo Cambiado!!")
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }(), error => {
          _this2.validating = false;

          _this2.loginForm.reset();
        }));
      } else {
        _this2.validating = false;
        let title = yield _this2.translate.get('general.error').toPromise();
        let msg = yield _this2.translate.get('ChangePhone.errorConfirm').toPromise();

        _this2.ShowError(msg, title);

        return;
      }
    })();
  }

  onChanges(e) {
    this.indicator = this.loginForm.value.countryselect.phone_area_code;
  } //===========================================================================
  // Show Error
  //===========================================================================


  ShowError(msg, title = "", disableTimeOut = true) {
    console.error(msg);
    this.toastr.error(msg, title, {
      closeButton: true,
      disableTimeOut: disableTimeOut,
      positionClass: 'toast-center-center'
    });
  } //***************************************************************************************
  //Services
  //***************************************************************************************


  GetCountries() {
    this.subscription.add(this.refdataservice.GetCountries().subscribe(data => {
      this.countries = data;
    }));
  }

  GetClientConfig() {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.client.GetClientConfig().subscribe(data => {
        resolve(data);
      }, err => {
        console.log("Error GetClientConfig:", err);
        resolve(null);
      }));
    });
  }

}

ChangePhoneComponent.ɵfac = function ChangePhoneComponent_Factory(t) {
  return new (t || ChangePhoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_RefData_ref_data_service__WEBPACK_IMPORTED_MODULE_3__.RefDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_Client_client_service__WEBPACK_IMPORTED_MODULE_4__.ClientService));
};

ChangePhoneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ChangePhoneComponent,
  selectors: [["app-change-phone"]],
  decls: 50,
  vars: 29,
  consts: [[1, "half", 2, "height", "100vh"], [1, "container"], [1, "row", "align-items-center", "justify-content-center"], [1, "form-block", "mx-auto", "shadow"], ["type", "button", "style", "cursor: pointer; text-align: end;", "class", "btnclose", "aria-label", "Close", "routerLink", "/home", 4, "ngIf"], [1, "col", "text-center"], [1, "icon", "image"], ["src", "../../../assets/images/u44.svg"], [1, "row", "text-center"], [2, "margin", "0 0 0"], [1, "scroll"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-5"], [1, "form-group", "mb-3"], ["formControlName", "countryselect", "aria-label", "Default select example", 1, "form-select", 3, "change"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "col-7"], ["formControlName", "new_phone", "type", "text", "required", "required", "aria-required", "true", "autoComplete", "true", "maxlength", "11", 1, "form-control", 3, "placeholder"], [1, "col"], ["formControlName", "confirmation_phone", "type", "text", "required", "required", "aria-required", "true", "autoComplete", "true", "maxlength", "11", 1, "cachtext", "form-control", 3, "placeholder"], [1, "row", "rowalign-items-center", "justify-content-center"], ["type", "submit", 1, "btn", "btn-block", "btn-success", "justify-content-center", 2, "background", "#23ae4d", 3, "disabled"], [1, "buttonsign"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [4, "ngIf"], ["NoDaTa", ""], ["type", "button", "aria-label", "Close", "routerLink", "/home", 1, "btnclose", 2, "cursor", "pointer", "text-align", "end"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-x-lg"], ["d", "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"], ["class", "text-danger mb-2 spanerror", 4, "ngIf"], [1, "text-danger", "mb-2", "spanerror"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "nombre", 2, "width", "100%"], [2, "font-size", "50%", "color", "rgba(255, 255, 255, 0)"]],
  template: function ChangePhoneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ChangePhoneComponent_div_4_Template, 3, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8)(9, "h1", 9)(10, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 10)(14, "form", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ChangePhoneComponent_Template_form_ngSubmit_14_listener() {
        return ctx.UpdatePhone();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 12)(16, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 13)(20, "div", 14)(21, "select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ChangePhoneComponent_Template_select_change_21_listener($event) {
        return ctx.onChanges($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, ChangePhoneComponent_option_25_Template, 2, 2, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ChangePhoneComponent_ng_container_26_Template, 2, 1, "ng-container", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 19)(28, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, ChangePhoneComponent_ng_container_31_Template, 2, 1, "ng-container", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 12)(33, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 21)(37, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, ChangePhoneComponent_ng_container_40_Template, 2, 1, "ng-container", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 23)(42, "button", 24)(43, "div", 12)(44, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, ChangePhoneComponent_span_45_Template, 1, 0, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, ChangePhoneComponent_span_46_Template, 3, 3, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, ChangePhoneComponent_span_47_Template, 3, 3, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, ChangePhoneComponent_ng_template_48_Template, 3, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.validating);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 17, "ChangePhone.change"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 19, "ChangePhone.new"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 21, "registration.Select"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.ErroresSpan.countryselect);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 23, "registration.phoneNumber"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.ErroresSpan.phone);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](35, 25, "ChangePhone.confimrChangePhone"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](39, 27, "registration.phoneNumber"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.ErroresSpan.phone);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.loginForm.invalid || ctx.validating);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.validating);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.validating);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.validating);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #fff;\n}\n\np[_ngcontent-%COMP%] {\n  color: #b3b3b3;\n  font-weight: 100;\n  font-size: 1rem;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: var(--count-color);\n}\n\na[_ngcontent-%COMP%] {\n  transition: 0.3s all ease;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.half[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  padding-top: 1%;\n  height: 95vh;\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  background: #f6f7fc;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 200px;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  height: 54px;\n  color: var(--drowdown-text-color);\n  background-color: var(--drowdown-bg);\n  border: 1px solid var(--drowdown-brd);\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n}\n\n.half[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n  text-decoration: underline;\n}\n\n.half[_ngcontent-%COMP%]   .forgot-pass[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  color: var(--a-login);\n}\n\n.form-block[_ngcontent-%COMP%] {\n  background: var(--bg-login);\n  padding: 8vh;\n  max-width: 550px;\n  max-height: 100%;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.2);\n}\n\n@media (max-width: 767.98px) {\n  .form-block[_ngcontent-%COMP%] {\n    padding: 8vh;\n  }\n}\n\n.control[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 15px;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.control[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.2rem;\n  color: #888;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.control__indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background: #e6e6e6;\n  border-radius: 4px;\n}\n\n.control--radio[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #ccc;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb771a;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]:not([disabled]):checked    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb8633;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n  opacity: 0.9;\n  pointer-events: none;\n}\n\n.control__indicator[_ngcontent-%COMP%]:after {\n  font-family: \"icomoon\";\n  content: \"\\e5ca\";\n  position: absolute;\n  display: none;\n  font-size: 16px;\n  transition: 0.3s all ease;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  display: block;\n  color: #fff;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%]:after {\n  top: 50%;\n  left: 50%;\n  margin-top: -1px;\n  transform: translate(-50%, -50%);\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  border-color: #7b7b7b;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background-color: #7e0cf5;\n  opacity: 0.2;\n}\n\n.image[_ngcontent-%COMP%] {\n  margin-bottom: 1vh;\n}\n\n.buttonsign[_ngcontent-%COMP%] {\n  margin-right: 3rem;\n}\n\n@media (max-width: 575px) {\n  .buttonsign[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n\n.toast-top-center[_ngcontent-%COMP%] {\n  top: 45% !important;\n  right: 0 !important;\n  width: 100% !important;\n}\n\n@media all and (max-width: 240px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -54px;\n  }\n}\n\n@media all and (min-width: 241px) and (max-width: 320px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -64px;\n  }\n}\n\n@media all and (min-width: 321px) and (max-width: 480px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -96px;\n  }\n}\n\n.ngx-toastr[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 125px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@media (max-width: 768px) {\n  .ngx-toastr[_ngcontent-%COMP%] {\n    width: 450px !important;\n    height: 125px !important;\n  }\n}\n\n.spanerror[_ngcontent-%COMP%] {\n  font-size: 50%;\n}\n\n.imageequis[_ngcontent-%COMP%] {\n  margin-left: 100%;\n  margin-bottom: 4%;\n}\n\n.spanerror[_ngcontent-%COMP%] {\n  font-size: 50%;\n}\n\n.btnclose[_ngcontent-%COMP%] {\n  color: var(--details-text-color);\n}\n\n.btnclose[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--bg-color);\n  background-color: red;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  --bs-btn-color: var(--a-login);\n}\n\n.scroll[_ngcontent-%COMP%] {\n  max-height: 36vh;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n@media (min-height: 400px) {\n  .scroll[_ngcontent-%COMP%] {\n    max-height: 64vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1waG9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFDRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFBRTs7RUFFRSxpQ0FBQTtFQUNBLHlCQUFBO0FBR0o7O0FBQUU7RUFHRSx5QkFBQTtBQUdKOztBQUZJO0VBQ0UsZ0NBQUE7QUFLTjs7QUFIRTtFQUNFLGVBQUE7QUFNSjs7QUFKRTtFQUNFLGVBQUE7QUFPSjs7QUFMSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBUU47O0FBTkU7RUFDRSxtQkFBQTtBQVNKOztBQVBFO0VBQ0UsVUFBQTtBQVVKOztBQVRJO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsYUFBQTtFQVlOO0FBQ0Y7O0FBWEU7RUFDRSxVQUFBO0FBYUo7O0FBWkk7RUFDRTtJQUNFLFdBQUE7RUFlTjtBQUNGOztBQWRFO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0FBZUo7O0FBZEk7RUFDRSxhQUFBO0VBRUEsZ0JBQUE7QUFpQk47O0FBZkU7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0FBa0JKOztBQWhCRTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQW1CSjs7QUFaRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBZUo7O0FBWkU7RUFDRSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsNENBQUE7QUFlSjs7QUFkSTtFQUNFO0lBQ0UsWUFBQTtFQWlCTjtBQUNGOztBQWhCRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWtCSjs7QUFqQkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBb0JOOztBQWxCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFxQko7O0FBbkJFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXNCSjs7QUFwQkU7RUFDRSxrQkFBQTtBQXVCSjs7QUFyQkU7O0VBRUUsZ0JBQUE7QUF3Qko7O0FBdEJFO0VBQ0UsbUJBQUE7QUF5Qko7O0FBdkJFOztFQUVFLG1CQUFBO0FBMEJKOztBQXhCRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBMkJKOztBQXpCRTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBR0EseUJBQUE7QUE0Qko7O0FBMUJFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUE2Qko7O0FBM0JFO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUdBLGdDQUFBO0FBOEJKOztBQTVCRTtFQUNFLHFCQUFBO0FBK0JKOztBQTdCRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQWdDSjs7QUE1Qkk7RUFDRSxrQkFBQTtBQStCTjs7QUE1QkU7RUFDQSxrQkFBQTtBQStCRjs7QUE3QkU7RUFPQTtJQUNFLGVBQUE7RUEwQkY7QUFDRjs7QUFyQkU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUF1Qko7O0FBckJFO0VBQ0U7SUFDSSxrQkFBQTtFQXdCTjtBQUNGOztBQXRCRTtFQUNFO0lBQ0ksa0JBQUE7RUF3Qk47QUFDRjs7QUF0QkU7RUFDRTtJQUNJLGtCQUFBO0VBd0JOO0FBQ0Y7O0FBcEJFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBc0JKOztBQW5CSTtFQURGO0lBRUksdUJBQUE7SUFDQSx3QkFBQTtFQXVCSjtBQUNGOztBQXJCRTtFQUNFLGNBQUE7QUF3Qko7O0FBdEJFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQXlCSjs7QUF2Qkk7RUFDRSxjQUFBO0FBMEJOOztBQXhCSTtFQUNFLGdDQUFBO0FBMkJOOztBQXpCSTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7QUE0Qk47O0FBekJJO0VBQ0UsOEJBQUE7QUE0Qk47O0FBMUJJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBNkJOOztBQTFCSTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VBNkJOO0FBQ0Y7O0FBM0JJO0VBQ0UseURBQUE7QUE2Qk4iLCJmaWxlIjoiY2hhbmdlLXBob25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cclxuICBcclxuICBwIHtcclxuICAgIGNvbG9yOiAjYjNiM2IzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTsgfVxyXG4gIFxyXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsXHJcbiAgLmgxLCAuaDIsIC5oMywgLmg0LCAuaDUsIC5oNiB7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjsgXHJcbiAgICBjb2xvcjogdmFyKC0tY291bnQtY29sb3IpO31cclxuICAgIFxyXG4gIFxyXG4gIGEge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7IH1cclxuICAgIGE6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDsgfVxyXG4gIFxyXG4gIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDdyZW0gMDsgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDsgfVxyXG4gIFxyXG4gICAgLmhhbGYsIC5oYWxmIC5jb250YWluZXIgPiAucm93IHtcclxuICAgICAgcGFkZGluZy10b3A6IDElO1xyXG4gICAgICBoZWlnaHQ6IDk1dmg7IH1cclxuICBcclxuICAuaGFsZiAuY29udGVudHMge1xyXG4gICAgYmFja2dyb3VuZDogI2Y2ZjdmYzsgfVxyXG4gIFxyXG4gIC5oYWxmIC5iZyB7XHJcbiAgICB3aWR0aDogMjUlOyB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICAgLmhhbGYgLmJnIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4OyB9IH1cclxuICBcclxuICAuaGFsZiAuY29udGVudHMge1xyXG4gICAgd2lkdGg6IDc1JTsgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAgIC5oYWxmIC5jb250ZW50cyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IH0gfVxyXG4gIFxyXG4gIC5oYWxmIC5jb250ZW50cyAuZm9ybS1jb250cm9sLCAuaGFsZiAuYmcgLmZvcm0tY29udHJvbCB7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWRyb3dkb3duLXRleHQtY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHJvd2Rvd24tYmcpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZHJvd2Rvd24tYnJkKTsgIH1cclxuICAgIC5oYWxmIC5jb250ZW50cyAuZm9ybS1jb250cm9sOmFjdGl2ZSwgLmhhbGYgLmNvbnRlbnRzIC5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5oYWxmIC5iZyAuZm9ybS1jb250cm9sOmFjdGl2ZSwgLmhhbGYgLmJnIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cclxuICBcclxuICAuaGFsZiAuYmcge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxyXG4gIFxyXG4gIC5oYWxmIGEge1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxyXG4gIFxyXG4gIC8vIC5oYWxmIC5idG4ge1xyXG4gIC8vICAgaGVpZ2h0OiA1NHB4O1xyXG4gIC8vICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIC8vICAgcGFkZGluZy1yaWdodDogMzBweDsgfVxyXG4gIFxyXG4gIC5oYWxmIC5mb3Jnb3QtcGFzcyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7IFxyXG4gICAgY29sb3I6IHZhcigtLWEtbG9naW4pO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ibG9jayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAgdmFyKC0tYmctbG9naW4pO1xyXG4gICAgcGFkZGluZzogOHZoO1xyXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTVweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgICAuZm9ybS1ibG9jayB7XHJcbiAgICAgICAgcGFkZGluZzogOHZoOyB9IH1cclxuICBcclxuICAuY29udHJvbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7IH1cclxuICAgIC5jb250cm9sIC5jYXB0aW9uIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IC4ycmVtO1xyXG4gICAgICBjb2xvcjogIzg4ODsgfVxyXG4gIFxyXG4gIC5jb250cm9sIGlucHV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgb3BhY2l0eTogMDsgfVxyXG4gIFxyXG4gIC5jb250cm9sX19pbmRpY2F0b3Ige1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyB9XHJcbiAgXHJcbiAgLmNvbnRyb2wtLXJhZGlvIC5jb250cm9sX19pbmRpY2F0b3Ige1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XHJcbiAgXHJcbiAgLmNvbnRyb2w6aG92ZXIgaW5wdXQgfiAuY29udHJvbF9faW5kaWNhdG9yLFxyXG4gIC5jb250cm9sIGlucHV0OmZvY3VzIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjOyB9XHJcbiAgXHJcbiAgLmNvbnRyb2wgaW5wdXQ6Y2hlY2tlZCB+IC5jb250cm9sX19pbmRpY2F0b3Ige1xyXG4gICAgYmFja2dyb3VuZDogI2ZiNzcxYTsgfVxyXG4gIFxyXG4gIC5jb250cm9sOmhvdmVyIGlucHV0Om5vdChbZGlzYWJsZWRdKTpjaGVja2VkIH4gLmNvbnRyb2xfX2luZGljYXRvcixcclxuICAuY29udHJvbCBpbnB1dDpjaGVja2VkOmZvY3VzIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmI4NjMzOyB9XHJcbiAgXHJcbiAgLmNvbnRyb2wgaW5wdXQ6ZGlzYWJsZWQgfiAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxyXG4gIFxyXG4gIC5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdpY29tb29uJztcclxuICAgIGNvbnRlbnQ6ICdcXGU1Y2EnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlOyB9XHJcbiAgXHJcbiAgLmNvbnRyb2wgaW5wdXQ6Y2hlY2tlZCB+IC5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZjsgfVxyXG4gIFxyXG4gIC5jb250cm9sLS1jaGVja2JveCAuY29udHJvbF9faW5kaWNhdG9yOmFmdGVyIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxyXG4gIFxyXG4gIC5jb250cm9sLS1jaGVja2JveCBpbnB1dDpkaXNhYmxlZCB+IC5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjN2I3YjdiOyB9XHJcbiAgXHJcbiAgLmNvbnRyb2wtLWNoZWNrYm94IGlucHV0OmRpc2FibGVkOmNoZWNrZWQgfiAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZTBjZjU7XHJcbiAgICBvcGFjaXR5OiAuMjsgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICAgLmltYWdle1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbiAgICB9XHJcbiAgICBcclxuICAuYnV0dG9uc2lnbntcclxuICBtYXJnaW4tcmlnaHQ6IDNyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgXHJcbiAgLy8gLmhhbGYgLmJ0biB7XHJcbiAgLy8gICBoZWlnaHQ6IDEwMCU7IFxyXG4gIC8vICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIC8vICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAvLyB9XHJcbiAgLmJ1dHRvbnNpZ257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAudG9hc3QtdG9wLWNlbnRlciB7IFxyXG4gICAgdG9wOiA0NSUgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH0gXHJcbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMjQwcHgpIHsgXHJcbiAgICAudG9hc3QtdG9wLWNlbnRlciB7IFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNTRweDsgXHJcbiAgICB9IFxyXG4gIH0gXHJcbiAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMjQxcHgpIGFuZCAobWF4LXdpZHRoOiAzMjBweCkgeyBcclxuICAgIC50b2FzdC10b3AtY2VudGVyIHsgXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC02NHB4OyBcclxuICAgIH0gXHJcbiAgfSBcclxuICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzMjFweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7IFxyXG4gICAgLnRvYXN0LXRvcC1jZW50ZXIgeyBcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTk2cHg7IFxyXG4gICAgfSBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLm5neC10b2FzdHIge1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAubmd4LXRvYXN0ciB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgd2lkdGg6IDQ1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMTI1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNwYW5lcnJvcntcclxuICAgIGZvbnQtc2l6ZTogNTAlO1xyXG4gIH1cclxuICAuaW1hZ2VlcXVpcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgfVxyXG4gICAgLnNwYW5lcnJvcntcclxuICAgICAgZm9udC1zaXplOiA1MCU7XHJcbiAgICB9XHJcbiAgICAuYnRuY2xvc2V7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1kZXRhaWxzLXRleHQtY29sb3IpO1xyXG4gICAgfVxyXG4gICAgLmJ0bmNsb3NlIDpob3ZlcntcclxuICAgICAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnRuLWxpbmsgeyAgXHJcbiAgICAgIC0tYnMtYnRuLWNvbG9yOiB2YXIoLS1hLWxvZ2luKTtcclxuICAgIH1cclxuICAgIC5zY3JvbGx7XHJcbiAgICAgIG1heC1oZWlnaHQ6MzZ2aDtcclxuICAgICAgb3ZlcmZsb3cteDpoaWRkZW47IFxyXG4gICAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIChtaW4taGVpZ2h0OiA0MDBweCl7XHJcbiAgICAgIC5zY3JvbGx7XHJcbiAgICAgICAgbWF4LWhlaWdodDo2NHZoO1xyXG4gICAgICAgIG92ZXJmbG93LXg6aGlkZGVuOyBcclxuICAgICAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNoYWRvdyB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMnJlbSB2YXIoLS1zaGFkb3duLWNvbG9yKSFpbXBvcnRhbnQ7XHJcbiAgICB9Il19 */"]
});

/***/ }),

/***/ 74947:
/*!************************************************************************!*\
  !*** ./src/app/UserPages/forgot-password/forgot-password.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_assets_Errores_Errores_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/Errores/Errores.json */ 58417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/login/login.service */ 3155);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);












const _c0 = ["codeInput"];

function ForgotPasswordComponent_ng_container_25_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, error_r4.message), " ");
  }
}

function ForgotPasswordComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ForgotPasswordComponent_ng_container_25_span_1_Template, 3, 3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.FogotForm.get("email").hasError(error_r4.type) && (ctx_r1.FogotForm.get("email").dirty || ctx_r1.FogotForm.get("email").touched));
  }
}

function ForgotPasswordComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

class ForgotPasswordComponent {
  constructor(fb, loginService, router, toastr, translate) {
    this.fb = fb;
    this.loginService = loginService;
    this.router = router;
    this.toastr = toastr;
    this.translate = translate;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.ErroresSpan = src_assets_Errores_Errores_json__WEBPACK_IMPORTED_MODULE_1__;
    this.flag = false;
    this.FogotForm = this.fb.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])]
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.codeInputElement.nativeElement.focus();
  }

  fogotPassword() {
    var _this = this;

    this.flag = true;
    const usuario = {
      email: this.FogotForm.value.email
    };
    this.subscription.add(this.loginService.ForgotPassword(usuario).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this.router.navigate(['/']);

        let msg = yield _this.translate.get("ChangePassword.SendEmail").toPromise();
        let msgstatus = yield _this.translate.get("general.succes").toPromise();

        _this.toastr.success(msg + usuario.email, msgstatus);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), error => {
      this.flag = false;
    }));
  }

}

ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
  return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService));
};

ForgotPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ForgotPasswordComponent,
  selectors: [["app-forgot-password"]],
  viewQuery: function ForgotPasswordComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.codeInputElement = _t.first);
    }
  },
  decls: 32,
  vars: 12,
  consts: [[1, "half", "shadow", 2, "height", "100vh"], [1, "container"], [1, "row", "align-items-center", "justify-content-center"], [1, "form-block", "mx-auto", "shadow"], ["type", "button", "aria-label", "Close", "routerLink", "/", 1, "btnclose", 2, "cursor", "pointer", "text-align", "end"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-x-lg"], ["d", "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"], [1, "col", "text-center"], [1, "icon", "image"], ["src", "../../../assets/images/u44.svg"], [1, "row", "text-center"], [2, "margin", "0 0 0"], ["type", "button", "routerLink", "/", 1, "btn", "btn-link"], [1, "forgot-pass"], [2, "max-height", "48vh", "overflow-x", "hidden", "overflow-y", "scroll"], [3, "formGroup", "ngSubmit"], [1, "col", "form-group", "contentext"], ["formControlName", "email", "type", "email", "placeholder", "Email", "required", "required", "aria-required", "true", "aria-describedby", "exampleInputGroup1__BV_description_", 1, "form-control"], ["codeInput", ""], [4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-success", "mt-3", 2, "background", "#23ae4d", "width", "100%", 3, "disabled"], ["NoDaTa", ""], ["class", "text-danger mb-2 spanerror", 4, "ngIf"], [1, "text-danger", "mb-2", "spanerror"], [1, "nombre", 2, "width", "100%"], [2, "font-size", "50%", "color", "var(--bg-color)"]],
  template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "path", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10)(11, "h1", 11)(12, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10)(16, "button", 12)(17, "strong", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 14)(21, "form", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_21_listener() {
        return ctx.fogotPassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ForgotPasswordComponent_ng_container_25_Template, 2, 1, "ng-container", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 7)(27, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ForgotPasswordComponent_ng_template_30_Template, 3, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 6, "login.forgotPassword"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00BF", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 8, "login.login"), "?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.FogotForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.ErroresSpan.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.FogotForm.invalid || ctx.flag);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 10, "general.lostpassword"), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
  styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #fff;\n}\n\np[_ngcontent-%COMP%] {\n  color: #b3b3b3;\n  font-weight: 100;\n  font-size: 1rem;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: var(--count-color);\n}\n\na[_ngcontent-%COMP%] {\n  transition: 0.3s all ease;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.half[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  padding-top: 1%;\n  height: 95vh;\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  background: #f6f7fc;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 200px;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 4px;\n  height: 54px;\n  color: var(--drowdown-text-color);\n  background-color: var(--drowdown-bg);\n  border: 1px solid var(--drowdown-brd);\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n}\n\n.half[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n  text-decoration: underline;\n}\n\n.half[_ngcontent-%COMP%]   .forgot-pass[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  color: var(--a-login);\n}\n\n.form-block[_ngcontent-%COMP%] {\n  background: var(--bg-login);\n  padding: 8vh;\n  max-width: 550px;\n  max-height: 100%;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.2);\n}\n\n@media (max-width: 767.98px) {\n  .form-block[_ngcontent-%COMP%] {\n    padding: 8vh;\n  }\n}\n\n.control[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 15px;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.control[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.2rem;\n  color: #888;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.control__indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background: #e6e6e6;\n  border-radius: 4px;\n}\n\n.control--radio[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #ccc;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb771a;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]:not([disabled]):checked    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb8633;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n  opacity: 0.9;\n  pointer-events: none;\n}\n\n.control__indicator[_ngcontent-%COMP%]:after {\n  font-family: \"icomoon\";\n  content: \"\\e5ca\";\n  position: absolute;\n  display: none;\n  font-size: 16px;\n  transition: 0.3s all ease;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  display: block;\n  color: #fff;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%]:after {\n  top: 50%;\n  left: 50%;\n  margin-top: -1px;\n  transform: translate(-50%, -50%);\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  border-color: #7b7b7b;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background-color: #7e0cf5;\n  opacity: 0.2;\n}\n\n.image[_ngcontent-%COMP%] {\n  margin-bottom: 1vh;\n  margin-top: -28px;\n}\n\n.buttonsign[_ngcontent-%COMP%] {\n  margin-right: 3rem;\n}\n\n@media (max-width: 575px) {\n  .buttonsign[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n\n.toast-top-center[_ngcontent-%COMP%] {\n  top: 45% !important;\n  right: 0 !important;\n  width: 100% !important;\n}\n\n@media all and (max-width: 240px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -54px;\n  }\n}\n\n@media all and (min-width: 241px) and (max-width: 320px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -64px;\n  }\n}\n\n@media all and (min-width: 321px) and (max-width: 480px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -96px;\n  }\n}\n\n.ngx-toastr[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 125px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@media (max-width: 768px) {\n  .ngx-toastr[_ngcontent-%COMP%] {\n    width: 450px !important;\n    height: 125px !important;\n  }\n}\n\n.textcode[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\n.contentext[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.butondone[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.alineDone[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n\n.teximput[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.imageequis[_ngcontent-%COMP%] {\n  margin-left: 100%;\n  margin-bottom: 4%;\n}\n\n.spanerror[_ngcontent-%COMP%] {\n  font-size: 50%;\n}\n\n.btnclose[_ngcontent-%COMP%] {\n  color: var(--details-text-color);\n}\n\n.btnclose[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--bg-color);\n  background-color: red;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  --bs-btn-color: var(--a-login);\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTs7RUFFRSxpQ0FBQTtFQUNBLHlCQUFBO0FBR0Y7O0FBQUE7RUFHRSx5QkFBQTtBQUdGOztBQUZFO0VBQ0UsZ0NBQUE7QUFLSjs7QUFIQTtFQUNFLGVBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBUUY7O0FBTEE7RUFDRSxtQkFBQTtBQVFGOztBQU5BO0VBQ0UsVUFBQTtBQVNGOztBQVJFO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsYUFBQTtFQVdKO0FBQ0Y7O0FBVkE7RUFDRSxVQUFBO0FBWUY7O0FBWEU7RUFDRTtJQUNFLFdBQUE7RUFjSjtBQUNGOztBQWJBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtBQWVGOztBQWRFO0VBQ0UsYUFBQTtFQUVBLGdCQUFBO0FBaUJKOztBQWZBO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtBQWtCRjs7QUFoQkE7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7QUFtQkY7O0FBWkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQWVGOztBQVpBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLDRDQUFBO0FBZUY7O0FBZEU7RUFDRTtJQUNFLFlBQUE7RUFpQko7QUFDRjs7QUFoQkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFrQkY7O0FBakJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQW9CSjs7QUFsQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBcUJGOztBQW5CQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFzQkY7O0FBcEJBO0VBQ0Usa0JBQUE7QUF1QkY7O0FBckJBOztFQUVFLGdCQUFBO0FBd0JGOztBQXRCQTtFQUNFLG1CQUFBO0FBeUJGOztBQXZCQTs7RUFFRSxtQkFBQTtBQTBCRjs7QUF4QkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQTJCRjs7QUF6QkE7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUdBLHlCQUFBO0FBNEJGOztBQTFCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBNkJGOztBQTNCQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFHQSxnQ0FBQTtBQThCRjs7QUE1QkE7RUFDRSxxQkFBQTtBQStCRjs7QUE3QkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFnQ0Y7O0FBNUJBO0VBRUUsa0JBQUE7RUFDQSxpQkFBQTtBQThCRjs7QUEzQkE7RUFDQSxrQkFBQTtBQThCQTs7QUE1QkE7RUFPQTtJQUNFLGVBQUE7RUF5QkE7QUFDRjs7QUFwQkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFzQkY7O0FBcEJBO0VBQ0U7SUFDSSxrQkFBQTtFQXVCSjtBQUNGOztBQXJCQTtFQUNFO0lBQ0ksa0JBQUE7RUF1Qko7QUFDRjs7QUFyQkE7RUFDRTtJQUNJLGtCQUFBO0VBdUJKO0FBQ0Y7O0FBbkJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBcUJGOztBQWxCRTtFQURGO0lBRUksdUJBQUE7SUFDQSx3QkFBQTtFQXNCRjtBQUNGOztBQW5CQTtFQUNFLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFxQkY7O0FBakJBO0VBQ0UsbUJBQUE7QUFvQkY7O0FBakJBO0VBQ0UsZ0JBQUE7QUFvQkY7O0FBakJBO0VBQ0UsaUJBQUE7QUFvQkY7O0FBakJBO0VBQ0Usa0JBQUE7QUFvQkY7O0FBbEJBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQXFCRjs7QUFsQkE7RUFDRSxjQUFBO0FBcUJGOztBQWxCQTtFQUNFLGdDQUFBO0FBcUJGOztBQW5CQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7QUFzQkY7O0FBbkJBO0VBQ0UsOEJBQUE7QUFzQkY7O0FBbkJBO0VBQ0UseURBQUE7QUFzQkYiLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxyXG5cclxucCB7XHJcbiAgY29sb3I6ICNiM2IzYjM7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBmb250LXNpemU6IDFyZW07IH1cclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsXHJcbi5oMSwgLmgyLCAuaDMsIC5oNCwgLmg1LCAuaDYge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmOyBcclxuICBjb2xvcjogdmFyKC0tY291bnQtY29sb3IpO31cclxuICBcclxuXHJcbmEge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7IH1cclxuICBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50OyB9XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogN3JlbSAwOyB9XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAyMHB4OyB9XHJcblxyXG4uaGFsZiwgLmhhbGYgLmNvbnRhaW5lciA+IC5yb3cge1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxuICBoZWlnaHQ6IDk1dmg7XHJcbn1cclxuXHJcbi5oYWxmIC5jb250ZW50cyB7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjdmYzsgfVxyXG5cclxuLmhhbGYgLmJnIHtcclxuICB3aWR0aDogMjUlOyB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAuaGFsZiAuYmcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyMDBweDsgfSB9XHJcblxyXG4uaGFsZiAuY29udGVudHMge1xyXG4gIHdpZHRoOiA3NSU7IH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIC5oYWxmIC5jb250ZW50cyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlOyB9IH1cclxuXHJcbi5oYWxmIC5jb250ZW50cyAuZm9ybS1jb250cm9sLCAuaGFsZiAuYmcgLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBoZWlnaHQ6IDU0cHg7XHJcbiAgY29sb3I6IHZhcigtLWRyb3dkb3duLXRleHQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRyb3dkb3duLWJnKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kcm93ZG93bi1icmQpOyAgfVxyXG4gIC5oYWxmIC5jb250ZW50cyAuZm9ybS1jb250cm9sOmFjdGl2ZSwgLmhhbGYgLmNvbnRlbnRzIC5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5oYWxmIC5iZyAuZm9ybS1jb250cm9sOmFjdGl2ZSwgLmhhbGYgLmJnIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cclxuXHJcbi5oYWxmIC5iZyB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IH1cclxuXHJcbi5oYWxmIGEge1xyXG4gIGNvbG9yOiAjODg4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XHJcblxyXG4vLyAuaGFsZiAuYnRuIHtcclxuLy8gICBoZWlnaHQ6IDU0cHg7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4vLyAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7IH1cclxuXHJcbi5oYWxmIC5mb3Jnb3QtcGFzcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDsgXHJcbiAgY29sb3I6IHZhcigtLWEtbG9naW4pO1xyXG59XHJcblxyXG4uZm9ybS1ibG9jayB7XHJcbiAgYmFja2dyb3VuZDogIHZhcigtLWJnLWxvZ2luKTtcclxuICBwYWRkaW5nOiA4dmg7XHJcbiAgbWF4LXdpZHRoOiA1NTBweDtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIC5mb3JtLWJsb2NrIHtcclxuICAgICAgcGFkZGluZzogOHZoOyB9IH1cclxuXHJcbi5jb250cm9sIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDsgfVxyXG4gIC5jb250cm9sIC5jYXB0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLjJyZW07XHJcbiAgICBjb2xvcjogIzg4ODsgfVxyXG5cclxuLmNvbnRyb2wgaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBvcGFjaXR5OiAwOyB9XHJcblxyXG4uY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAycHg7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cclxuXHJcbi5jb250cm9sLS1yYWRpbyAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cclxuXHJcbi5jb250cm9sOmhvdmVyIGlucHV0IH4gLmNvbnRyb2xfX2luZGljYXRvcixcclxuLmNvbnRyb2wgaW5wdXQ6Zm9jdXMgfiAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjOyB9XHJcblxyXG4uY29udHJvbCBpbnB1dDpjaGVja2VkIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZDogI2ZiNzcxYTsgfVxyXG5cclxuLmNvbnRyb2w6aG92ZXIgaW5wdXQ6bm90KFtkaXNhYmxlZF0pOmNoZWNrZWQgfiAuY29udHJvbF9faW5kaWNhdG9yLFxyXG4uY29udHJvbCBpbnB1dDpjaGVja2VkOmZvY3VzIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZDogI2ZiODYzMzsgfVxyXG5cclxuLmNvbnRyb2wgaW5wdXQ6ZGlzYWJsZWQgfiAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxyXG5cclxuLmNvbnRyb2xfX2luZGljYXRvcjphZnRlciB7XHJcbiAgZm9udC1mYW1pbHk6ICdpY29tb29uJztcclxuICBjb250ZW50OiAnXFxlNWNhJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTsgfVxyXG5cclxuLmNvbnRyb2wgaW5wdXQ6Y2hlY2tlZCB+IC5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjZmZmOyB9XHJcblxyXG4uY29udHJvbC0tY2hlY2tib3ggLmNvbnRyb2xfX2luZGljYXRvcjphZnRlciB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cclxuXHJcbi5jb250cm9sLS1jaGVja2JveCBpbnB1dDpkaXNhYmxlZCB+IC5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogIzdiN2I3YjsgfVxyXG5cclxuLmNvbnRyb2wtLWNoZWNrYm94IGlucHV0OmRpc2FibGVkOmNoZWNrZWQgfiAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2UwY2Y1O1xyXG4gIG9wYWNpdHk6IC4yOyB9XHJcblxyXG5cclxuXHJcbi5pbWFnZXtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xyXG4gIG1hcmdpbi10b3A6IC0yOHB4O1xyXG59XHJcbiAgXHJcbi5idXR0b25zaWdue1xyXG5tYXJnaW4tcmlnaHQ6IDNyZW07XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KXtcclxuXHJcbi8vIC5oYWxmIC5idG4ge1xyXG4vLyAgIGhlaWdodDogMTAwJTsgXHJcbi8vICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4vLyAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbi8vIH1cclxuLmJ1dHRvbnNpZ257XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcbn1cclxuXHJcblxyXG5cclxuLnRvYXN0LXRvcC1jZW50ZXIgeyBcclxuICB0b3A6IDQ1JSAhaW1wb3J0YW50O1xyXG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSBcclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMjQwcHgpIHsgXHJcbiAgLnRvYXN0LXRvcC1jZW50ZXIgeyBcclxuICAgICAgbWFyZ2luLWxlZnQ6IC01NHB4OyBcclxuICB9IFxyXG59IFxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAyNDFweCkgYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7IFxyXG4gIC50b2FzdC10b3AtY2VudGVyIHsgXHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNjRweDsgXHJcbiAgfSBcclxufSBcclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzIxcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkgeyBcclxuICAudG9hc3QtdG9wLWNlbnRlciB7IFxyXG4gICAgICBtYXJnaW4tbGVmdDogLTk2cHg7IFxyXG4gIH0gXHJcbn1cclxuXHJcblxyXG4ubmd4LXRvYXN0ciB7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIGhlaWdodDogMTI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5uZ3gtdG9hc3RyIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiA0NTBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMjVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnRleHRjb2Rle1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gXHJcbn1cclxuXHJcbi5jb250ZW50ZXh0e1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXRvbmRvbmV7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmFsaW5lRG9uZXtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxufVxyXG5cclxuLnRleGltcHV0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuLmltYWdlZXF1aXMge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gIH1cclxuICBcclxuLnNwYW5lcnJvcntcclxuICBmb250LXNpemU6IDUwJTtcclxufVxyXG5cclxuLmJ0bmNsb3Nle1xyXG4gIGNvbG9yOiB2YXIoLS1kZXRhaWxzLXRleHQtY29sb3IpO1xyXG59XHJcbi5idG5jbG9zZSA6aG92ZXJ7XHJcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5idG4tbGluayB7ICBcclxuICAtLWJzLWJ0bi1jb2xvcjogdmFyKC0tYS1sb2dpbik7XHJcbn1cclxuXHJcbi5zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgLjVyZW0gMnJlbSB2YXIoLS1zaGFkb3duLWNvbG9yKSFpbXBvcnRhbnQ7XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 53538:
/*!****************************************************!*\
  !*** ./src/app/UserPages/login/login.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var src_services_FormValidation_passwordStrength_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/FormValidation/passwordStrength.validator */ 55063);
/* harmony import */ var src_assets_Errores_Errores_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/Errores/Errores.json */ 58417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/login/login.service */ 3155);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);















const _c0 = ["codeInput"];

function LoginComponent_ng_container_25_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, error_r8.message), " ");
  }
}

function LoginComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginComponent_ng_container_25_span_1_Template, 3, 3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.get("email").hasError(error_r8.type) && (ctx_r1.loginForm.get("email").dirty || ctx_r1.loginForm.get("email").touched));
  }
}

function LoginComponent_ng_container_31_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, error_r11.message), " ");
  }
}

function LoginComponent_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginComponent_ng_container_31_span_1_Template, 3, 3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.loginForm.get("password").hasError(error_r11.type) && (ctx_r2.loginForm.get("password").dirty || ctx_r2.loginForm.get("password").touched));
  }
}

function LoginComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 38);
  }
}

function LoginComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "login.login"));
  }
}

function LoginComponent_span_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "general.validating"), " ...");
  }
}

function LoginComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39)(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}

class LoginComponent {
  constructor(fb, loginService, router, toastr, translate) {
    this.fb = fb;
    this.loginService = loginService;
    this.router = router;
    this.toastr = toastr;
    this.translate = translate;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.faLock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faLock;
    this.ErroresSpan = src_assets_Errores_Errores_json__WEBPACK_IMPORTED_MODULE_2__;
    this.version = window['version'];
    this.validating = false;
    this.loginForm = this.fb.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(8), src_services_FormValidation_passwordStrength_validator__WEBPACK_IMPORTED_MODULE_1__.PasswordStrengthValidator])],
      checkbox: [false]
    });
  }

  viewPassword() {
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');
    togglePassword.addEventListener('click', function (e) {
      // toggle the type attribute
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type); // toggle the eye / eye slash icon

      this.classList.toggle('bi-eye');
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    console.log("Version ", this.version);

    if (localStorage.getItem('remember') === "true") {
      this.router.navigate(['validation/']);
    } else if (localStorage.getItem('remember') === "false") {
      this.loginService.removelocalStorage();
    }
  }

  holamundo() {
    return "hola mundo";
  }

  ngAfterViewInit() {
    this.codeInputElement.nativeElement.focus();
  }

  Login() {
    var _this = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.validating = true;
      const usuario = {
        username: _this.loginForm.value.email,
        password: _this.loginForm.value.password
      };

      _this.subscription.add(_this.loginService.login(usuario).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this.loginService.setlocalStorage(data.access_token);

          if (_this.loginForm.value.checkbox) {
            localStorage.setItem('remember', _this.loginForm.value.checkbox);
          } else {
            localStorage.setItem('remember', _this.loginForm.value.checkbox);
          }

          let msgstatus = yield _this.translate.get("general.succes").toPromise();
          let msg = yield _this.translate.get("login.code").toPromise();

          _this.toastr.success(msg, msgstatus);

          _this.router.navigate(['validation/']);

          _this.validating = false;
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), error => {
        console.log("Error Login", error);

        _this.loginForm.setValue({
          email: _this.loginForm.value.email,
          password: '',
          checkbox: false
        });

        _this.validating = false;
      }));
    })();
  }

}

LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService));
};

LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  viewQuery: function LoginComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.codeInputElement = _t.first);
    }
  },
  decls: 63,
  vars: 27,
  consts: [[1, "shadow", "scroll", "center", 2, "height", "100%"], [1, ""], [1, "form-block", "mx-auto", "shadow"], [1, "col", "text-center"], [1, "icon", "image"], ["src", "../../../assets/images/u44.svg"], [1, "row", "text-center"], [2, "margin", "0 0 0"], ["type", "button", "routerLink", "registration/", 1, "btn", "btn-link"], [1, "forgot-pass"], [3, "formGroup", "ngSubmit"], [1, "col", "form-group", "mb-3"], ["id", "input-username", "formControlName", "email", "type", "email", "required", "required", "aria-required", "true", "aria-describedby", "exampleInputGroup1__BV_description_", 1, "form-control"], ["codeInput", ""], [4, "ngFor", "ngForOf"], [1, "form-group", "last", "mb-3"], ["id", "input-password", "formControlName", "password", "type", "password", "required", "required", "autofocus", "", "aria-required", "true", 1, "form-control"], [1, "row", "rowalign-items-center", "justify-content-center", "mb-3"], [1, "col-sm-6"], [1, "row"], [1, "col-sm-2", "col-2"], ["id", "input-check-remember", "type", "checkbox", "formControlName", "checkbox"], [1, "col-sm-10", "col-10", "text-left", 2, "margin-top", "-4px"], [1, "control"], [1, "caption"], [1, "col-sm-6", "text-center"], ["routerLink", "fogotpassword/", 1, "forgot-pass"], ["id", "button-login", "type", "submit", 1, "btn", "btn-success", 2, "background", "#23ae4d", "width", "100%", 3, "disabled"], [1, "col-2"], [1, "icon-head", 3, "icon"], [1, "col-10"], [1, "buttonsign"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "mt-1"], ["NoDaTa", ""], ["class", "text-danger mb-2 spanerror", 4, "ngIf"], [1, "text-danger", "mb-2", "spanerror"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "nombre"], [2, "color", "#fff"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6)(8, "h1", 7)(9, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 6)(13, "button", 8)(14, "strong", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 1)(18, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_18_listener() {
        return ctx.Login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 11)(20, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, LoginComponent_ng_container_25_Template, 2, 1, "ng-container", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 15)(27, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, LoginComponent_ng_container_31_Template, 2, 1, "ng-container", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 17)(33, "div", 18)(34, "div", 19)(35, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 22)(38, "label", 23)(39, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](41, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 25)(43, "label", 23)(44, "span", 24)(45, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](47, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 3)(49, "button", 27)(50, "div", 19)(51, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "fa-icon", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 30)(54, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, LoginComponent_span_55_Template, 1, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, LoginComponent_span_56_Template, 3, 3, "span", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, LoginComponent_span_57_Template, 3, 3, "span", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 34)(59, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, LoginComponent_ng_template_61_Template, 3, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 15, "login.login"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 17, "login.createAccount"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 19, "login.emailAddress"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.ErroresSpan.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 21, "login.password"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.ErroresSpan.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](41, 23, "login.remember"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](47, 25, "login.forgotPassword"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.loginForm.invalid || ctx.validating);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faLock);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.validating);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.validating);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.validating);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("v.", ctx.version, "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #fff;\n}\n\np[_ngcontent-%COMP%] {\n  color: #b3b3b3;\n  font-weight: 100;\n  font-size: 1rem;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: var(--count-color);\n}\n\na[_ngcontent-%COMP%] {\n  transition: 0.3s all ease;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.half[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  padding-top: 1%;\n  height: 100vh;\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  background: #f6f7fc;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 200px;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  height: 54px;\n  color: var(--drowdown-text-color);\n  background-color: var(--drowdown-bg);\n  border: 1px solid var(--drowdown-brd);\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n}\n\n.half[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n  text-decoration: underline;\n}\n\n.half[_ngcontent-%COMP%]   .forgot-pass[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  color: var(--a-login);\n}\n\n.form-block[_ngcontent-%COMP%] {\n  background: var(--bg-login);\n  padding: 8vh;\n  max-width: 550px;\n  max-height: 100%;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.2);\n}\n\n@media (max-width: 767.98px) {\n  .form-block[_ngcontent-%COMP%] {\n    padding: 8vh;\n  }\n}\n\n.control[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.control[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.2rem;\n  color: #888;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.control__indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background: #e6e6e6;\n  border-radius: 4px;\n}\n\n.control--radio[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #ccc;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb771a;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]:not([disabled]):checked    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb8633;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n  opacity: 0.9;\n  pointer-events: none;\n}\n\n.control__indicator[_ngcontent-%COMP%]:after {\n  font-family: \"icomoon\";\n  content: \"\\e5ca\";\n  position: absolute;\n  display: none;\n  font-size: 16px;\n  transition: 0.3s all ease;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  display: block;\n  color: #fff;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%]:after {\n  top: 50%;\n  left: 50%;\n  margin-top: -1px;\n  transform: translate(-50%, -50%);\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  border-color: #7b7b7b;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background-color: #7e0cf5;\n  opacity: 0.2;\n}\n\n.image[_ngcontent-%COMP%] {\n  margin-bottom: 1vh;\n}\n\n.buttonsign[_ngcontent-%COMP%] {\n  margin-right: 3rem;\n}\n\n@media (max-width: 575px) {\n  .buttonsign[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n\n.spanerror[_ngcontent-%COMP%] {\n  font-size: 50%;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  --bs-btn-color: var(--a-login);\n}\n\n.scroll[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n\nform[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: -30px;\n  cursor: pointer;\n}\n\n@media (min-height: 560px) {\n  .center[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBOztFQUVFLGlDQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFBQTtFQUdFLHlCQUFBO0FBR0Y7O0FBRkU7RUFDRSxnQ0FBQTtBQUtKOztBQUhBO0VBQ0UsZUFBQTtBQU1GOztBQUpBO0VBQ0UsZUFBQTtBQU9GOztBQUxBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUFRRjs7QUFOQTtFQUNFLG1CQUFBO0FBU0Y7O0FBUEE7RUFDRSxVQUFBO0FBVUY7O0FBVEU7RUFDRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VBWUo7QUFDRjs7QUFYQTtFQUNFLFVBQUE7QUFhRjs7QUFaRTtFQUNFO0lBQ0UsV0FBQTtFQWVKO0FBQ0Y7O0FBZEE7RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7QUFlRjs7QUFkRTtFQUNFLGFBQUE7RUFFQSxnQkFBQTtBQWlCSjs7QUFmQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0FBbUJGOztBQVpBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFlRjs7QUFaQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSw0Q0FBQTtBQWVGOztBQWRFO0VBQ0U7SUFDRSxZQUFBO0VBaUJKO0FBQ0Y7O0FBaEJBO0VBR0UsZUFBQTtFQUNBLGVBQUE7QUFnQkY7O0FBZkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBa0JKOztBQWhCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFtQkY7O0FBakJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQW9CRjs7QUFsQkE7RUFDRSxrQkFBQTtBQXFCRjs7QUFuQkE7O0VBRUUsZ0JBQUE7QUFzQkY7O0FBcEJBO0VBQ0UsbUJBQUE7QUF1QkY7O0FBckJBOztFQUVFLG1CQUFBO0FBd0JGOztBQXRCQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBeUJGOztBQXZCQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBR0EseUJBQUE7QUEwQkY7O0FBeEJBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUEyQkY7O0FBekJBO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUdBLGdDQUFBO0FBNEJGOztBQTFCQTtFQUNFLHFCQUFBO0FBNkJGOztBQTNCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQThCRjs7QUExQkE7RUFDRSxrQkFBQTtBQTZCRjs7QUExQkE7RUFDQSxrQkFBQTtBQTZCQTs7QUEzQkE7RUFPQTtJQUNFLGVBQUE7RUF3QkE7QUFDRjs7QUFuQkE7RUFDRSxjQUFBO0FBcUJGOztBQWxCQTtFQUNFLDhCQUFBO0FBcUJGOztBQWxCQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQXFCRjs7QUFoQkE7RUFDRSx5REFBQTtBQW1CRjs7QUFoQkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFtQkY7O0FBZEE7RUFDRTtJQUNFLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBaUJGO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XHJcblxyXG5wIHtcclxuICBjb2xvcjogI2IzYjNiMztcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTsgfVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNixcclxuLmgxLCAuaDIsIC5oMywgLmg0LCAuaDUsIC5oNiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7IFxyXG4gIGNvbG9yOiB2YXIoLS1jb3VudC1jb2xvcik7fVxyXG4gIFxyXG5cclxuYSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTsgfVxyXG4gIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7IH1cclxuXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOiA3cmVtIDA7IH1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDIwcHg7IH1cclxuXHJcbi5oYWxmLCAuaGFsZiAuY29udGFpbmVyID4gLnJvdyB7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIGhlaWdodDogMTAwdmg7IH1cclxuXHJcbi5oYWxmIC5jb250ZW50cyB7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjdmYzsgfVxyXG5cclxuLmhhbGYgLmJnIHtcclxuICB3aWR0aDogMjUlOyB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAuaGFsZiAuYmcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyMDBweDsgfSB9XHJcblxyXG4uaGFsZiAuY29udGVudHMge1xyXG4gIHdpZHRoOiA3NSU7IH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIC5oYWxmIC5jb250ZW50cyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlOyB9IH1cclxuXHJcbi5oYWxmIC5jb250ZW50cyAuZm9ybS1jb250cm9sLCAuaGFsZiAuYmcgLmZvcm0tY29udHJvbCB7XHJcbiBcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgaGVpZ2h0OiA1NHB4OyAgXHJcbiAgY29sb3I6IHZhcigtLWRyb3dkb3duLXRleHQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRyb3dkb3duLWJnKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kcm93ZG93bi1icmQpOyAgICB9XHJcbiAgLmhhbGYgLmNvbnRlbnRzIC5mb3JtLWNvbnRyb2w6YWN0aXZlLCAuaGFsZiAuY29udGVudHMgLmZvcm0tY29udHJvbDpmb2N1cywgLmhhbGYgLmJnIC5mb3JtLWNvbnRyb2w6YWN0aXZlLCAuaGFsZiAuYmcgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTsgfVxyXG5cclxuLmhhbGYgLmJnIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxyXG5cclxuLmhhbGYgYSB7XHJcbiAgY29sb3I6ICM4ODg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cclxuXHJcbi8vIC5oYWxmIC5idG4ge1xyXG4vLyAgIC8vIGhlaWdodDogMTB2aDtcclxuLy8gICBwYWRkaW5nLWxlZnQ6IDEwdmg7XHJcbi8vICAgcGFkZGluZy1yaWdodDogMTB2aDsgfVxyXG5cclxuLmhhbGYgLmZvcmdvdC1wYXNzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxNHB4OyBcclxuICBjb2xvcjogdmFyKC0tYS1sb2dpbik7XHJcbn1cclxuXHJcbi5mb3JtLWJsb2NrIHtcclxuICBiYWNrZ3JvdW5kOiAgdmFyKC0tYmctbG9naW4pO1xyXG4gIHBhZGRpbmc6IDh2aDtcclxuICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDE1cHggMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3gtc2hhZG93OiAwIDE1cHggMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgLmZvcm0tYmxvY2sge1xyXG4gICAgICBwYWRkaW5nOiA4dmg7IH0gfVxyXG5cclxuLmNvbnRyb2wge1xyXG5cclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDsgfVxyXG4gIC5jb250cm9sIC5jYXB0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLjJyZW07XHJcbiAgICBjb2xvcjogIzg4ODsgfVxyXG5cclxuLmNvbnRyb2wgaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBvcGFjaXR5OiAwOyB9XHJcblxyXG4uY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAycHg7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cclxuXHJcbi5jb250cm9sLS1yYWRpbyAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cclxuXHJcbi5jb250cm9sOmhvdmVyIGlucHV0IH4gLmNvbnRyb2xfX2luZGljYXRvcixcclxuLmNvbnRyb2wgaW5wdXQ6Zm9jdXMgfiAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjOyB9XHJcblxyXG4uY29udHJvbCBpbnB1dDpjaGVja2VkIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZDogI2ZiNzcxYTsgfVxyXG5cclxuLmNvbnRyb2w6aG92ZXIgaW5wdXQ6bm90KFtkaXNhYmxlZF0pOmNoZWNrZWQgfiAuY29udHJvbF9faW5kaWNhdG9yLFxyXG4uY29udHJvbCBpbnB1dDpjaGVja2VkOmZvY3VzIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZDogI2ZiODYzMzsgfVxyXG5cclxuLmNvbnRyb2wgaW5wdXQ6ZGlzYWJsZWQgfiAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxyXG5cclxuLmNvbnRyb2xfX2luZGljYXRvcjphZnRlciB7XHJcbiAgZm9udC1mYW1pbHk6ICdpY29tb29uJztcclxuICBjb250ZW50OiAnXFxlNWNhJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTsgfVxyXG5cclxuLmNvbnRyb2wgaW5wdXQ6Y2hlY2tlZCB+IC5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjZmZmOyB9XHJcblxyXG4uY29udHJvbC0tY2hlY2tib3ggLmNvbnRyb2xfX2luZGljYXRvcjphZnRlciB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cclxuXHJcbi5jb250cm9sLS1jaGVja2JveCBpbnB1dDpkaXNhYmxlZCB+IC5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogIzdiN2I3YjsgfVxyXG5cclxuLmNvbnRyb2wtLWNoZWNrYm94IGlucHV0OmRpc2FibGVkOmNoZWNrZWQgfiAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2UwY2Y1O1xyXG4gIG9wYWNpdHk6IC4yOyB9XHJcblxyXG5cclxuXHJcbi5pbWFnZXtcclxuICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbn1cclxuICBcclxuLmJ1dHRvbnNpZ257XHJcbm1hcmdpbi1yaWdodDogM3JlbTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpe1xyXG5cclxuLy8gLmhhbGYgLmJ0biB7XHJcbi8vICAgaGVpZ2h0OiAxMDAlOyBcclxuLy8gICBwYWRkaW5nLWxlZnQ6IDEwdmg7XHJcbi8vICAgcGFkZGluZy1yaWdodDogMTB2aDtcclxuLy8gfVxyXG4uYnV0dG9uc2lnbntcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxufVxyXG5cclxuXHJcblxyXG4uc3BhbmVycm9ye1xyXG4gIGZvbnQtc2l6ZTogNTAlO1xyXG59XHJcblxyXG4uYnRuLWxpbmsgeyAgXHJcbiAgLS1icy1idG4tY29sb3I6IHZhcigtLWEtbG9naW4pO1xyXG59XHJcblxyXG4uc2Nyb2xse1xyXG4gIG1heC1oZWlnaHQ6MTAwdmg7XHJcbiAgb3ZlcmZsb3cteDpoaWRkZW47IFxyXG4gIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG59XHJcblxyXG5cclxuXHJcbi5zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgLjVyZW0gMnJlbSB2YXIoLS1zaGFkb3duLWNvbG9yKSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmZvcm0gaSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDU2MHB4KXtcclxuICAuY2VudGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 28817:
/*!**********************************************************!*\
  !*** ./src/app/UserPages/register/register.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_services_FormValidation_passwordStrength_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/FormValidation/passwordStrength.validator */ 55063);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var src_assets_Errores_Errores_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/Errores/Errores.json */ 58417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_services_register_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/register/register.service */ 81669);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_services_RefData_ref_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/RefData/ref-data.service */ 7015);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
















const _c0 = ["nameInput"];

function RegisterComponent_ng_container_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, error_r13.message), " ");
  }
}

function RegisterComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegisterComponent_ng_container_28_span_1_Template, 3, 3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r13 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.registerForm.get("name").hasError(error_r13.type) && (ctx_r1.registerForm.get("name").dirty || ctx_r1.registerForm.get("name").touched));
  }
}

function RegisterComponent_ng_container_34_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, error_r16.message), " ");
  }
}

function RegisterComponent_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegisterComponent_ng_container_34_span_1_Template, 3, 3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r16 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.registerForm.get("lastname").hasError(error_r16.type) && (ctx_r2.registerForm.get("lastname").dirty || ctx_r2.registerForm.get("lastname").touched));
  }
}

function RegisterComponent_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const value_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", value_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](value_r19.phone_area_code);
  }
}

function RegisterComponent_ng_container_46_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, error_r20.message), " ");
  }
}

function RegisterComponent_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegisterComponent_ng_container_46_span_1_Template, 3, 3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r20 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.registerForm.get("countryselect").hasError(error_r20.type) && (ctx_r4.registerForm.get("countryselect").dirty || ctx_r4.registerForm.get("countryselect").touched));
  }
}

function RegisterComponent_ng_container_51_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, error_r23.message), " ");
  }
}

function RegisterComponent_ng_container_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegisterComponent_ng_container_51_span_1_Template, 3, 3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r23 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.registerForm.get("phone").hasError(error_r23.type) && (ctx_r5.registerForm.get("phone").dirty || ctx_r5.registerForm.get("phone").touched));
  }
}

function RegisterComponent_ng_container_57_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, error_r26.message), " ");
  }
}

function RegisterComponent_ng_container_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegisterComponent_ng_container_57_span_1_Template, 3, 3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r26 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.registerForm.get("dob").hasError(error_r26.type) && (ctx_r6.registerForm.get("dob").dirty || ctx_r6.registerForm.get("dob").touched));
  }
}

function RegisterComponent_ng_container_63_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, error_r29.message), " ");
  }
}

function RegisterComponent_ng_container_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegisterComponent_ng_container_63_span_1_Template, 3, 3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r29 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.registerForm.get("email").hasError(error_r29.type) && (ctx_r7.registerForm.get("email").dirty || ctx_r7.registerForm.get("email").touched));
  }
}

function RegisterComponent_ng_container_69_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, error_r32.message), " ");
  }
}

function RegisterComponent_ng_container_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegisterComponent_ng_container_69_span_1_Template, 3, 3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r32 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.registerForm.get("password").hasError(error_r32.type) && (ctx_r8.registerForm.get("password").dirty || ctx_r8.registerForm.get("password").touched));
  }
}

function RegisterComponent_ng_container_75_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, error_r35.message), " ");
  }
}

function RegisterComponent_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegisterComponent_ng_container_75_span_1_Template, 3, 3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r35 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.registerForm.get("passwordConfirmation").hasError(error_r35.type) && (ctx_r9.registerForm.get("passwordConfirmation").dirty || ctx_r9.registerForm.get("passwordConfirmation").touched));
  }
}

function RegisterComponent_span_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "registration.errorMessages.mustMatch"), " ");
  }
}

function RegisterComponent_ng_template_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 50)(1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}

class RegisterComponent {
  constructor(translate, fb, registerService, router, refdataservice, toastr) {
    this.translate = translate;
    this.fb = fb;
    this.registerService = registerService;
    this.router = router;
    this.refdataservice = refdataservice;
    this.toastr = toastr;
    this.faLock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faLock;
    this.DateTime_init = '';
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
    this.ErroresSpan = src_assets_Errores_Errores_json__WEBPACK_IMPORTED_MODULE_2__;
    this.registerForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      countryselect: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(8)])],
      dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(8), src_services_FormValidation_passwordStrength_validator__WEBPACK_IMPORTED_MODULE_1__.PasswordStrengthValidator])],
      passwordConfirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(8)])]
    }, {
      validators: this.passwordMatch.bind(this)
    });
  }

  passwordMatch(formGroup) {
    const {
      value: password
    } = formGroup.get('password');
    const {
      value: confirmPassword
    } = formGroup.get('passwordConfirmation');
    return password === confirmPassword ? null : {
      passwordNotMatch: true
    };
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.registerForm.reset();
  }

  ngOnInit() {
    this.GetCountries();
    this.Getlanguages();
    this.registerForm.reset();
  }

  ngAfterViewInit() {
    this.codeInputElement.nativeElement.focus();
  }

  onChanges(e) {
    this.indicator = this.registerForm.value.countryselect.phone_area_code;
    this.domicile = this.registerForm.value.countryselect.gec;
    this.currency = this.registerForm.value.countryselect.currency_id;
  }

  GetCountries() {
    this.subscription.add(this.refdataservice.GetCountries().subscribe(data => {
      this.countries = data;
    }));
  }

  Getlanguages() {
    this.subscription.add(this.refdataservice.GetLanguages().subscribe(data => {
      this.listlanguage = data;
    }));
  }

  Register() {
    var _this = this;

    let language_navigator = window.navigator.language;
    this.listlanguage.forEach(element => {
      if (element.alpha2 !== null) {
        if (language_navigator.split("-")[0] == element.alpha2) {
          this.language = element.alpha3_b;
        }
      }
    });
    const usuarioregister = {
      fname: this.registerForm.value.name,
      lname: this.registerForm.value.lastname,
      email: this.registerForm.value.email,
      phone: this.indicator + this.registerForm.value.phone,
      password: this.registerForm.value.password,
      dob: this.registerForm.value.dob,
      domicile: this.domicile,
      language: this.language,
      preferred_currency: this.currency,
      ref_code: this.registerForm.value.password
    };
    this.subscription.add(this.registerService.register(usuarioregister).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        let msgstatus = yield _this.translate.get("registration.registrationSuccess").toPromise();

        _this.toastr.success(data.payload, msgstatus);

        _this.router.navigate(['/']);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), error => {
      this.registerForm.reset();
    }));
  }

}

RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_register_register_service__WEBPACK_IMPORTED_MODULE_3__.RegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_RefData_ref_data_service__WEBPACK_IMPORTED_MODULE_4__.RefDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService));
};

RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["app-register"]],
  viewQuery: function RegisterComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.codeInputElement = _t.first);
    }
  },
  decls: 98,
  vars: 54,
  consts: [[1, "scroll", "shadow"], [1, "row"], [1, "align-items-center", "justify-content-center", 2, "margin-top", "4vh"], [1, "form-block", "mx-auto", "shadow", "mt-3"], ["type", "button", "aria-label", "Close", "routerLink", "/", 1, "btnclose", 2, "cursor", "pointer", "text-align", "end"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-x-lg"], ["d", "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"], [1, "col", "text-center", 2, "margin-top", "-38px"], [1, "icon", "image"], ["src", "../../../assets/images/u44.svg"], [1, "row", "text-center"], [2, "margin", "0 0 0"], ["type", "button", "routerLink", "/", 1, "btn", "btn-link"], [1, "forgot-pass"], [1, ""], [3, "formGroup", "ngSubmit"], [1, "form-group", "mb-3"], ["formControlName", "name", "type", "text", "id", "fname", "name", "fname", "required", "required", 1, "form-control"], ["nameInput", ""], [4, "ngFor", "ngForOf"], ["formControlName", "lastname", "type", "text", "id", "lname", "name", "lname", "autoComplete", "true", "required", "required", 1, "form-control"], [1, "col-5"], ["formControlName", "countryselect", "aria-label", "Default select example", 1, "form-select", 3, "change"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "col-7"], ["formControlName", "phone", "type", "text", "id", "phone", "name", "phone", "autoComplete", "true", "maxlength", "11", "required", "required", 1, "form-control", 3, "placeholder"], ["formControlName", "dob", "type", "date", "id", "dob", "name", "dob", "required", "required", 1, "form-control", 2, "margin-left", "0rem !important"], ["formControlName", "email", "type", "text", "id", "email", "name", "email", "autoComplete", "true", "required", "required", 1, "form-control"], ["formControlName", "password", "type", "password", "id", "password", "name", "password", "autoComplete", "true", "required", "required", 1, "form-control"], [1, "form-group", "mb-1"], ["formControlName", "passwordConfirmation", "type", "password", "id", "passwordConfirmation", "name", "passwordConfirmation", "autoComplete", "true", "required", "required", 1, "form-control"], ["class", "text-danger sm-2 spanerror", 4, "ngIf", "ngIfElse"], [1, "row", "mb-1"], [1, "col-sm-6"], [1, "col-sm-2", "col-1"], ["type", "checkbox", "checked", "checked"], [1, "col-sm-10", "col-11", "text-left", 2, "margin-top", "-4px"], [1, "control"], [1, "caption"], [1, "col", "text-center"], ["type", "submit", 1, "btn", "btn-block", "btn-success", 2, "background", "#23ae4d", "width", "100%", 3, "disabled"], [1, "col-2"], [1, "icon-head", 3, "icon"], [1, "col-10"], [1, "buttonsign"], ["NoDaTa", ""], ["class", "text-danger mb-2 spanerror", 4, "ngIf"], [1, "text-danger", "mb-2", "spanerror"], [1, "text-danger", "sm-2", "spanerror"], [1, "nombre", 2, "width", "100%"], [2, "font-size", "50%", "color", "rgba(255, 255, 255, 0)"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "path", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 10)(11, "h1", 11)(12, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 10)(16, "button", 12)(17, "strong", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 14)(21, "form", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_21_listener() {
        return ctx.Register();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 16)(23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "input", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, RegisterComponent_ng_container_28_Template, 2, 1, "ng-container", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 16)(30, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, RegisterComponent_ng_container_34_Template, 2, 1, "ng-container", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 1)(36, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](38, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 21)(40, "div", 16)(41, "select", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RegisterComponent_Template_select_change_41_listener($event) {
        return ctx.onChanges($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](44, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, RegisterComponent_option_45_Template, 2, 2, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, RegisterComponent_ng_container_46_Template, 2, 1, "ng-container", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 25)(48, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](50, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, RegisterComponent_ng_container_51_Template, 2, 1, "ng-container", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 16)(53, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, RegisterComponent_ng_container_57_Template, 2, 1, "ng-container", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 16)(59, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](61, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, RegisterComponent_ng_container_63_Template, 2, 1, "ng-container", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 16)(65, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](67, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](69, RegisterComponent_ng_container_69_Template, 2, 1, "ng-container", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 30)(71, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](73, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](74, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](75, RegisterComponent_ng_container_75_Template, 2, 1, "ng-container", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, RegisterComponent_span_76_Template, 3, 3, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 33)(78, "div", 34)(79, "div", 1)(80, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 37)(83, "label", 38)(84, "span", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](86, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 40)(88, "button", 41)(89, "div", 1)(90, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](91, "fa-icon", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 44)(93, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](95, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](96, RegisterComponent_ng_template_96_Template, 3, 0, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](97);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 28, "registration.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 30, "login.login"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.registerForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 32, "registration.firstName"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.ErroresSpan.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](32, 34, "registration.lastName"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.ErroresSpan.lastname);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](38, 36, "registration.phoneNumber"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](44, 38, "registration.Select"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.ErroresSpan.countryselect);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](50, 40, "registration.phoneNumber"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.ErroresSpan.phone);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](55, 42, "registration.dateBirth"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.ErroresSpan.dob);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](61, 44, "registration.email"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.ErroresSpan.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](67, 46, "registration.password"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.ErroresSpan.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](73, 48, "registration.verifyPassword"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.ErroresSpan.passwordConfirmation);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.registerForm.hasError("passwordNotMatch"))("ngIfElse", _r11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](86, 50, "registration.terms"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx.faLock);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](95, 52, "general.continue"), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #fff;\n}\n\np[_ngcontent-%COMP%] {\n  color: var(--bloxText-color);\n  font-weight: 100;\n  font-size: 1rem;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: var(--count-color);\n}\n\na[_ngcontent-%COMP%] {\n  transition: 0.3s all ease;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.half[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  padding-top: 1%;\n  height: 95vh;\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  background: #f6f7fc;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 200px;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  height: 54px;\n  color: var(--drowdown-text-color);\n  background-color: var(--drowdown-bg);\n  border: 1px solid var(--drowdown-brd);\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n}\n\n.half[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n  text-decoration: underline;\n}\n\n.half[_ngcontent-%COMP%]   .forgot-pass[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  color: var(--a-login);\n}\n\n.form-block[_ngcontent-%COMP%] {\n  background: var(--bg-login);\n  padding: 26px;\n  max-width: 50%;\n  max-height: 98%;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.2);\n}\n\n@media (max-width: 767.98px) {\n  .form-block[_ngcontent-%COMP%] {\n    padding: 26px;\n    max-width: 80%;\n    max-height: 98%;\n  }\n}\n\n.control[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 15px;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.control[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.2rem;\n  color: var(--bloxText-color);\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.control__indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background: #e6e6e6;\n  border-radius: 4px;\n}\n\n.control--radio[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #ccc;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb771a;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]:not([disabled]):checked    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb8633;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n  opacity: 0.9;\n  pointer-events: none;\n}\n\n.control__indicator[_ngcontent-%COMP%]:after {\n  font-family: \"icomoon\";\n  content: \"\\e5ca\";\n  position: absolute;\n  display: none;\n  font-size: 16px;\n  transition: 0.3s all ease;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  display: block;\n  color: #fff;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%]:after {\n  top: 50%;\n  left: 50%;\n  margin-top: -1px;\n  transform: translate(-50%, -50%);\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  border-color: #7b7b7b;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background-color: #7e0cf5;\n  opacity: 0.2;\n}\n\n.image[_ngcontent-%COMP%] {\n  margin-bottom: 1vh;\n}\n\n.buttonsign[_ngcontent-%COMP%] {\n  margin-right: 3rem;\n}\n\n@media (max-width: 575px) {\n  .buttonsign[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n\n.imageequis[_ngcontent-%COMP%] {\n  margin-left: 100%;\n  margin-bottom: 4%;\n}\n\n.spanerror[_ngcontent-%COMP%] {\n  font-size: 50%;\n}\n\n.btnclose[_ngcontent-%COMP%] {\n  color: var(--details-text-color);\n}\n\n.btnclose[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--bg-color);\n  background-color: red;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  --bs-btn-color: var(--a-login);\n}\n\n.scroll[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTs7RUFFRSxpQ0FBQTtFQUNBLHlCQUFBO0FBR0Y7O0FBQUE7RUFHRSx5QkFBQTtBQUdGOztBQUZFO0VBQ0UsZ0NBQUE7QUFLSjs7QUFIQTtFQUNFLGVBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBUUY7O0FBTkE7RUFDRSxtQkFBQTtBQVNGOztBQVBBO0VBQ0UsVUFBQTtBQVVGOztBQVRFO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsYUFBQTtFQVlKO0FBQ0Y7O0FBWEE7RUFDRSxVQUFBO0FBYUY7O0FBWkU7RUFDRTtJQUNFLFdBQUE7RUFlSjtBQUNGOztBQWRBO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0FBZUY7O0FBZEU7RUFDRSxhQUFBO0VBRUEsZ0JBQUE7QUFpQko7O0FBZkE7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0FBa0JGOztBQWhCQTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQW1CRjs7QUFaQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBZUY7O0FBWkE7RUFDRSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUVBLDRDQUFBO0FBZUY7O0FBZEU7RUFDRTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQWlCSjtBQUNGOztBQWhCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWtCRjs7QUFqQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQW9CSjs7QUFsQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBcUJGOztBQW5CQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFzQkY7O0FBcEJBO0VBQ0Usa0JBQUE7QUF1QkY7O0FBckJBOztFQUVFLGdCQUFBO0FBd0JGOztBQXRCQTtFQUNFLG1CQUFBO0FBeUJGOztBQXZCQTs7RUFFRSxtQkFBQTtBQTBCRjs7QUF4QkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQTJCRjs7QUF6QkE7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUdBLHlCQUFBO0FBNEJGOztBQTFCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBNkJGOztBQTNCQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFHQSxnQ0FBQTtBQThCRjs7QUE1QkE7RUFDRSxxQkFBQTtBQStCRjs7QUE3QkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFnQ0Y7O0FBNUJBO0VBRUUsa0JBQUE7QUE4QkY7O0FBM0JBO0VBQ0Esa0JBQUE7QUE4QkE7O0FBNUJBO0VBT0E7SUFDRSxlQUFBO0VBeUJBO0FBQ0Y7O0FBckJBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQXVCQTs7QUFyQkE7RUFDRSxjQUFBO0FBd0JGOztBQXJCQTtFQUNFLGdDQUFBO0FBd0JGOztBQXRCQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7QUF5QkY7O0FBdEJBO0VBQ0UsOEJBQUE7QUF5QkY7O0FBdEJBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUF5QkY7O0FBcEJBO0VBQ0UseURBQUE7QUF1QkYiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XHJcblxyXG5wIHtcclxuICBjb2xvcjogdmFyKC0tYmxveFRleHQtY29sb3IpO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgZm9udC1zaXplOiAxcmVtOyB9XHJcblxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LFxyXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjsgXHJcbiAgY29sb3I6IHZhcigtLWNvdW50LWNvbG9yKTt9XHJcbiAgXHJcblxyXG5hIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlOyB9XHJcbiAgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDsgfVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDdyZW0gMDsgfVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMjBweDsgfVxyXG5cclxuLmhhbGYsIC5oYWxmIC5jb250YWluZXIgPiAucm93IHtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgaGVpZ2h0OiA5NXZoOyB9XHJcblxyXG4uaGFsZiAuY29udGVudHMge1xyXG4gIGJhY2tncm91bmQ6ICNmNmY3ZmM7IH1cclxuXHJcbi5oYWxmIC5iZyB7XHJcbiAgd2lkdGg6IDI1JTsgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgLmhhbGYgLmJnIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7IH0gfVxyXG5cclxuLmhhbGYgLmNvbnRlbnRzIHtcclxuICB3aWR0aDogNzUlOyB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAuaGFsZiAuY29udGVudHMge1xyXG4gICAgICB3aWR0aDogMTAwJTsgfSB9XHJcblxyXG4uaGFsZiAuY29udGVudHMgLmZvcm0tY29udHJvbCwgLmhhbGYgLmJnIC5mb3JtLWNvbnRyb2wge1xyXG5cclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgaGVpZ2h0OiA1NHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1kcm93ZG93bi10ZXh0LWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcm93ZG93bi1iZyk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZHJvd2Rvd24tYnJkKTsgICAgfVxyXG4gIC5oYWxmIC5jb250ZW50cyAuZm9ybS1jb250cm9sOmFjdGl2ZSwgLmhhbGYgLmNvbnRlbnRzIC5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5oYWxmIC5iZyAuZm9ybS1jb250cm9sOmFjdGl2ZSwgLmhhbGYgLmJnIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cclxuXHJcbi5oYWxmIC5iZyB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IH1cclxuXHJcbi5oYWxmIGEge1xyXG4gIGNvbG9yOiAjODg4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XHJcblxyXG4vLyAuaGFsZiAuYnRuIHtcclxuLy8gICBoZWlnaHQ6IDU0cHg7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4vLyAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7IH1cclxuXHJcbi5oYWxmIC5mb3Jnb3QtcGFzcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDsgXHJcbiAgY29sb3I6IHZhcigtLWEtbG9naW4pO1xyXG59XHJcblxyXG4uZm9ybS1ibG9jayB7XHJcbiAgYmFja2dyb3VuZDogIHZhcigtLWJnLWxvZ2luKTtcclxuICBwYWRkaW5nOiAyNnB4O1xyXG4gIG1heC13aWR0aDogNTAlO1xyXG4gIG1heC1oZWlnaHQ6IDk4JTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTVweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJveC1zaGFkb3c6IDAgMTVweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpOyB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAuZm9ybS1ibG9jayB7XHJcbiAgICAgIHBhZGRpbmc6IDI2cHg7IFxyXG4gICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgICAgbWF4LWhlaWdodDogOTglO30gfVxyXG5cclxuLmNvbnRyb2wge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4OyB9XHJcbiAgLmNvbnRyb2wgLmNhcHRpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAuMnJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1ibG94VGV4dC1jb2xvcik7IH1cclxuXHJcbi5jb250cm9sIGlucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgb3BhY2l0eTogMDsgfVxyXG5cclxuLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMnB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XHJcblxyXG4uY29udHJvbC0tcmFkaW8gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlOyB9XHJcblxyXG4uY29udHJvbDpob3ZlciBpbnB1dCB+IC5jb250cm9sX19pbmRpY2F0b3IsXHJcbi5jb250cm9sIGlucHV0OmZvY3VzIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZDogI2NjYzsgfVxyXG5cclxuLmNvbnRyb2wgaW5wdXQ6Y2hlY2tlZCB+IC5jb250cm9sX19pbmRpY2F0b3Ige1xyXG4gIGJhY2tncm91bmQ6ICNmYjc3MWE7IH1cclxuXHJcbi5jb250cm9sOmhvdmVyIGlucHV0Om5vdChbZGlzYWJsZWRdKTpjaGVja2VkIH4gLmNvbnRyb2xfX2luZGljYXRvcixcclxuLmNvbnRyb2wgaW5wdXQ6Y2hlY2tlZDpmb2N1cyB+IC5jb250cm9sX19pbmRpY2F0b3Ige1xyXG4gIGJhY2tncm91bmQ6ICNmYjg2MzM7IH1cclxuXHJcbi5jb250cm9sIGlucHV0OmRpc2FibGVkIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cclxuXHJcbi5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gIGZvbnQtZmFtaWx5OiAnaWNvbW9vbic7XHJcbiAgY29udGVudDogJ1xcZTVjYSc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7IH1cclxuXHJcbi5jb250cm9sIGlucHV0OmNoZWNrZWQgfiAuY29udHJvbF9faW5kaWNhdG9yOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2ZmZjsgfVxyXG5cclxuLmNvbnRyb2wtLWNoZWNrYm94IC5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XHJcblxyXG4uY29udHJvbC0tY2hlY2tib3ggaW5wdXQ6ZGlzYWJsZWQgfiAuY29udHJvbF9faW5kaWNhdG9yOmFmdGVyIHtcclxuICBib3JkZXItY29sb3I6ICM3YjdiN2I7IH1cclxuXHJcbi5jb250cm9sLS1jaGVja2JveCBpbnB1dDpkaXNhYmxlZDpjaGVja2VkIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdlMGNmNTtcclxuICBvcGFjaXR5OiAuMjsgfVxyXG5cclxuXHJcblxyXG4uaW1hZ2V7XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcclxufVxyXG4gIFxyXG4uYnV0dG9uc2lnbntcclxubWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCl7XHJcblxyXG4vLyAuaGFsZiAuYnRuIHtcclxuLy8gICBoZWlnaHQ6IDEwMCU7IFxyXG4vLyAgIHBhZGRpbmctbGVmdDogMTB2aDtcclxuLy8gICBwYWRkaW5nLXJpZ2h0OiAxMHZoO1xyXG4vLyB9XHJcbi5idXR0b25zaWdue1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG59XHJcblxyXG5cclxuLmltYWdlZXF1aXMge1xyXG5tYXJnaW4tbGVmdDogMTAwJTtcclxubWFyZ2luLWJvdHRvbTogNCU7XHJcbn1cclxuLnNwYW5lcnJvcntcclxuICBmb250LXNpemU6IDUwJTtcclxufVxyXG5cclxuLmJ0bmNsb3Nle1xyXG4gIGNvbG9yOiB2YXIoLS1kZXRhaWxzLXRleHQtY29sb3IpO1xyXG59XHJcbi5idG5jbG9zZSA6aG92ZXJ7XHJcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5idG4tbGluayB7ICBcclxuICAtLWJzLWJ0bi1jb2xvcjogdmFyKC0tYS1sb2dpbik7XHJcbn1cclxuXHJcbi5zY3JvbGx7XHJcbiAgaGVpZ2h0OjEwMHZoO1xyXG4gIG92ZXJmbG93LXg6aGlkZGVuOyBcclxuICBvdmVyZmxvdy15OnNjcm9sbDtcclxufVxyXG5cclxuXHJcblxyXG4uc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC41cmVtIDJyZW0gdmFyKC0tc2hhZG93bi1jb2xvcikhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"]
});

/***/ }),

/***/ 48831:
/*!**************************************************************!*\
  !*** ./src/app/UserPages/validation/validation.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationComponent": () => (/* binding */ ValidationComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_PopUp_confirmation_generate_qr_confirmation_generate_qr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/PopUp/confirmation-generate-qr/confirmation-generate-qr.component */ 95539);
/* harmony import */ var src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/Enum/EnumAuthentication.enum */ 81708);
/* harmony import */ var _PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../PopUp/confirmation/confirmation.component */ 40915);
/* harmony import */ var src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/Enum/EnumPopUp.enum */ 42241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/manage-data.service */ 43607);
/* harmony import */ var src_services_login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/login/login.service */ 3155);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_services_validation_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/validation/validation.service */ 73902);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);



















const _c0 = ["codeInput"];

function ValidationComponent_h1_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h1", 28)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "confirmAccount.enterCodetitle"));
  }
}

function ValidationComponent_h1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h1", 28)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "confirmAccount.enterCodegoogle"));
  }
}

function ValidationComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "confirmAccount.verifyEmail"));
  }
}

function ValidationComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "confirmAccount.verifyPhone"));
  }
}

function ValidationComponent_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "confirmAccount.enterCodegoogle2"), " ", ctx_r4.title, "");
  }
}

function ValidationComponent__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function ValidationComponent__svg_svg_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "path", 32)(2, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function ValidationComponent__svg_svg_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function ValidationComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "registration.errorMessages.required"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 4, "validation.requerido"));
  }
}

function ValidationComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9)(1, "Button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ValidationComponent_div_44_Template_Button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r14.GenerateQR());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "confirmAccount.lostQR"), " ");
  }
}

function ValidationComponent_div_45_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" 00:00:", ctx_r16.seconds, " ");
  }
}

function ValidationComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 38)(2, "Button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ValidationComponent_div_45_Template_Button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r17.SendCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ValidationComponent_div_45_div_5_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r11.initTemp);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 3, "confirmAccount.notcode"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r11.initTemp);
  }
}

function ValidationComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 42)(1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

class ValidationComponent {
  constructor(translate, manage_data, dialog, loginService, fb, router, validationservice, toastr) {
    this.translate = translate;
    this.manage_data = manage_data;
    this.dialog = dialog;
    this.loginService = loginService;
    this.fb = fb;
    this.router = router;
    this.validationservice = validationservice;
    this.toastr = toastr;
    this.Confirm = "";
    this.title = "";
    this.Activate = false;
    this.Activatechange = false;
    this.initTemp = false;
    this.notconfirm = false;
    this.qr = false;
    this.onlyOneTime = false;
    this.flagtitle = false;
    this.verify = false;
    this.intervalId = 0;
    this.message = '';
    this.seconds = 15;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
    this.CodeForm = this.fb.group({
      code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(6)])]
    });
    this.ChangedInput();
  }

  ChangedInput() {
    this.subscription.add(this.CodeForm.valueChanges.subscribe(value => {
      if (this.Confirm == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.google.toString()) {
        if (value.code != null) {
          if (value.code.length == 6) {
            this.LoginCode();
          }
        }
      }

      if (this.Confirm == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.sms.toString() || this.Confirm == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.email.toString()) {
        if (value.code != null) {
          if (value.code.length == 8) {
            this.LoginCode();
          }
        }
      }
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.GetConfigClient();
  }

  ngAfterViewInit() {
    this.codeInputElement.nativeElement.focus();
  }

  LoginCode() {
    const Code = {
      code: this.CodeForm.value.code
    };
    this.Activatechange = true;
    console.log("llego aqui", this.Confirm);

    if (this.Confirm == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.google.toString()) {
      this.validateGoogle(Code);
    }

    if (this.Confirm == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.sms.toString()) {
      this.validateSMS(Code);
    }

    if (this.Confirm == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.email.toString()) {
      this.validateEmail(Code);
    }
  }

  SendCode() {
    if (this.onlyOneTime) {
      return;
    }

    this.onlyOneTime = true;
    this.countDownTimmer();

    if (this.Confirm == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.sms.toString()) {
      this.CodeForm.reset();
      this.ConfirmSMS();
    }

    if (this.Confirm == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.email.toString()) {
      this.CodeForm.reset();
      this.ConfirmEmail();
    }

    this.onlyOneTime = false;
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  countDownTimmer() {
    this.initTemp = true;
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;

      if (this.seconds === 0) {
        this.clearTimer();
        this.initTemp = false;
      } else {
        if (this.seconds < 0) {
          this.seconds = 15;
        } // reset

      }
    }, 1000);
  }

  AuthPending(data) {
    if (data["required_2fa_2proceed"] === src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.sms.toString()) {
      this.notconfirm = true;
      this.Activate = false;
      this.flagtitle = false;
      this.title = "SMS";
      this.Confirm = src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.sms.toString();
      this.ConfirmSMS();
    }

    if (data["required_2fa_2proceed"] === src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.none.toString()) {
      if (data["client_status"] === "PENDING_VERIFICATION" || this.verify) {
        this.Activate = false;

        if (data["phone_validated"] == false) {
          this.notconfirm = true;
          this.title = "SMS";
          this.flagtitle = false;
          this.Confirm = src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.sms.toString();
          this.ConfirmSMS();
        } else if (data["email_validated"] == false) {
          this.notconfirm = true;
          this.title = "Email";
          this.flagtitle = false;
          this.Confirm = src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.email.toString();
          this.ConfirmEmail();
        } else if (data["id_verified"] == false) {
          this.ConfirmID();
        } else if (data["kyc_completed"] == false) {
          this.ConfirmID();
        }
      }

      if (data["client_status"] === "ACTIVE" && !this.verify) {
        this.Activate = true;
        this.router.navigate(['/home/dashboard/']);
      }
    }

    if (data["required_2fa_2proceed"] === src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.change_password.toString()) {
      this.router.navigate(['/changepassword']);
    }
  }

  AuthEnabled(data) {
    var _this = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.qr = true;
      _this.Activate = true;
      var datatoken = yield _this.loginService.getTokenDecoded();

      if (datatoken["required_2fa_2proceed"] === src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.google.toString() && !_this.verify) {
        _this.flagtitle = true;
        _this.title = "Google";
        _this.Confirm = src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.google.toString();
      }

      if (datatoken["required_2fa_2proceed"] === src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.email.toString()) {
        _this.flagtitle = false;
        _this.notconfirm = true;
        _this.title = "Email";
        _this.Confirm = src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.email.toString();

        _this.ConfirmEmail();
      }

      if (datatoken["required_2fa_2proceed"] === src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.sms.toString()) {
        _this.notconfirm = true;
        _this.flagtitle = false;
        _this.title = "SMS";
        _this.Confirm = src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.sms.toString();

        _this.ConfirmSMS();
      }

      if (datatoken["required_2fa_2proceed"] === src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.change_password.toString()) {
        _this.router.navigate(['/changepassword']);
      }

      if (!data.phone_validated || !data.email_validated || !data.id_verified || !data.kyc_completed) {
        _this.verify = true;

        _this.AuthPending(data);
      }
    })();
  }

  AuthDeclined(data) {
    if (data["required_2fa_2proceed"] === src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.sms.toString()) {
      this.notconfirm = true;
      this.Activate = false;
      this.flagtitle = false;
      this.title = "SMS";
      this.Confirm = src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.sms.toString();
      this.ConfirmSMS();
    }

    if (data["required_2fa_2proceed"] === src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.none.toString()) {
      this.Activate = true;
      this.router.navigate(['/home/dashboard/']);
    }
  }

  GetConfigClient() {
    var _this2 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.CodeForm.reset();

      var data = yield _this2.GetClientConfig();

      if (!data) {
        return;
      }

      console.log("esto fas " + JSON.stringify(data));

      if (data["auth_choice"] === "auth_pending") {
        _this2.AuthPending(data);
      }

      if (data["auth_choice"] === "auth_enabled") {
        yield _this2.AuthEnabled(data);
      }

      if (data["auth_choice"] === "auth_declined") {
        _this2.AuthDeclined(data);
      }

      if (localStorage.getItem('token') !== null && localStorage.getItem('remember') === "true" && data.state === undefined && data["auth_choice"] === "auth_enabled" && !_this2.verify) {
        let msgstatus = yield _this2.translate.get("general.succes").toPromise();

        _this2.toastr.success(msgstatus);

        _this2.router.navigate(['/home/dashboard/']);

        _this2.subscription.unsubscribe();
      }
    })();
  }

  validateEmail(Code) {
    var _this3 = this;

    this.validationservice.validate2faEmail(Code).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        if (data.success) {
          let msgstatus = yield _this3.translate.get("general.succes").toPromise();
          let msg = yield _this3.translate.get("validation.Emailvalidation").toPromise();

          _this3.toastr.success(msg, msgstatus);

          if (_this3.Activate || _this3.verify) {
            _this3.router.navigate(['/home/dashboard/']);

            _this3.subscription.unsubscribe();
          } else {
            _this3.GetConfigClient();
          }
        } else {
          let msgstatus = yield _this3.translate.get("general.error").toPromise();
          let msg = yield _this3.translate.get("validation.ErrorCode").toPromise();

          _this3.toastr.error(msg, msgstatus, {
            closeButton: true,
            disableTimeOut: true,
            positionClass: 'toast-center-center'
          });

          _this3.CodeForm.reset();
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), error => {
      this.CodeForm.reset();
    });
  }

  validateSMS(Code) {
    var _this4 = this;

    console.log("Validando SMS", Code);
    this.validationservice.validate2faSMS(Code).subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        if (data.success) {
          let msgstatus = yield _this4.translate.get("general.succes").toPromise();
          let msg = yield _this4.translate.get("validation.SMSvalidation").toPromise();

          _this4.toastr.success(msg, msgstatus);

          if (_this4.Activate || _this4.verify) {
            _this4.router.navigate(['/home/dashboard/']);

            _this4.subscription.unsubscribe();
          } else {
            _this4.GetConfigClient();
          }
        } else {
          let msgstatus = yield _this4.translate.get("general.error").toPromise();
          let msg = yield _this4.translate.get("validation.ErrorCode").toPromise();

          _this4.toastr.error(msg, msgstatus, {
            closeButton: true,
            disableTimeOut: true,
            positionClass: 'toast-center-center'
          });

          _this4.CodeForm.reset();
        }
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }(), error => {
      this.CodeForm.reset();
    });
  }

  validateGoogle(Code) {
    var _this5 = this;

    this.validationservice.validate2faGoogle(Code).subscribe( /*#__PURE__*/function () {
      var _ref3 = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        if (data.success) {
          let msgstatus = yield _this5.translate.get("general.succes").toPromise();
          let msg = yield _this5.translate.get("validation.Googlevalidation").toPromise();

          _this5.toastr.success(msg, msgstatus);

          if (_this5.Activate) {
            _this5.router.navigate(['/home/dashboard/']);

            _this5.subscription.unsubscribe();
          } else {
            _this5.GetConfigClient();
          }
        } else {
          let msgstatus = yield _this5.translate.get("general.error").toPromise();
          let msg = yield _this5.translate.get("validation.ErrorCode").toPromise();

          _this5.toastr.error(msg, msgstatus, {
            closeButton: true,
            disableTimeOut: true,
            positionClass: 'toast-center-center'
          });

          _this5.CodeForm.reset();
        }
      });

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }(), error => {
      this.CodeForm.reset();
    });
  }

  ConfirmEmail() {
    var _this6 = this;

    this.validationservice.ConfirmEmail().subscribe( /*#__PURE__*/function () {
      var _ref4 = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        let msgstatus = yield _this6.translate.get("Errores.validateEmail").toPromise();

        _this6.toastr.warning(data.payload, msgstatus);
      });

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }(), error => {});
  }

  ConfirmSMS() {
    var _this7 = this;

    this.validationservice.ConfirmCelular().subscribe( /*#__PURE__*/function () {
      var _ref5 = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        let msgstatus = yield _this7.translate.get("Errores.validateSMS").toPromise();

        _this7.toastr.warning(data.payload, msgstatus);
      });

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }(), error => {});
  }

  ConfirmID() {
    this.ConfirmValidateID();
  }

  ConfirmQR(data) {
    var _this8 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      var date = {
        title: yield _this8.translate.get('dialog.generate').toPromise(),
        icon: 'quest',
        conten: yield _this8.translate.get('dialog.sureGenerateCode').toPromise()
      };

      _this8.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_4__.EnumEventsPopUp.ConfirmAction.toString(), date);

      let dialogRef = _this8.dialog.open(_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmationComponent, dialogConfig);

      _this8.subscription.add(dialogRef.afterClosed().subscribe(result => {
        if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumConfirmation.si.toString()) {
          _this8.router.navigate(['qr/' + data]);
        }
      }));
    })();
  }

  GenerateQR() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true; // dialogConfig.height = "17rem";

    let dialogRef = this.dialog.open(src_app_PopUp_confirmation_generate_qr_confirmation_generate_qr_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationGenerateQrComponent, dialogConfig);
    this.subscription.add(dialogRef.afterClosed().subscribe(result => {
      if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.sms.toString()) {
        this.ConfirmQR(src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.sms.toString());
      }

      if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.email.toString()) {
        this.ConfirmQR(src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAuthentication.email.toString());
      }
    }));
  } //************************************************************************************
  //Logout
  //************************************************************************************


  Logout() {
    var _this9 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this9.LogoutService();

      _this9.loginService.removelocalStorage();

      _this9.router.navigate(['/']);
    })();
  } //************************************************************************************
  //Confirm Validate ID
  //************************************************************************************


  ConfirmValidateID() {
    var _this10 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogConfig();
      dialogConfig.autoFocus = false;
      dialogConfig.disableClose = true; // dialogConfig.height = "20rem";

      dialogConfig.width = "40rem";
      var data = {
        title: yield _this10.translate.get("Errores.validateID").toPromise(),
        icon: 'quest',
        conten: yield _this10.translate.get("Errores.wantValidateID").toPromise()
      };

      _this10.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_4__.EnumEventsPopUp.ConfirmAction.toString(), data);

      let dialogRef = _this10.dialog.open(_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmationComponent, dialogConfig);

      _this10.subscription.add(dialogRef.afterClosed().subscribe(result => {
        if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumConfirmation.si.toString()) {
          _this10.router.navigate(['/vouched']);
        } else if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_2__.EnumConfirmation.no.toString()) {
          _this10.router.navigate(['/home']);
        }
      }));
    })();
  } //*******************************************************************************************
  //Service
  //*******************************************************************************************


  GetClientConfig() {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.loginService.GetClientConfig().subscribe(data => {
        resolve(data);
      }, err => {
        console.log("Error GetClientConfig:", err);
        resolve(null);
      }));
    });
  }

  LogoutService() {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.loginService.logout().subscribe(response => resolve(response), err => resolve(null)));
    });
  }

}

ValidationComponent.ɵfac = function ValidationComponent_Factory(t) {
  return new (t || ValidationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_5__.ManageDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_services_login_login_service__WEBPACK_IMPORTED_MODULE_6__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_services_validation_validation_service__WEBPACK_IMPORTED_MODULE_7__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrService));
};

ValidationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: ValidationComponent,
  selectors: [["app-validation"]],
  viewQuery: function ValidationComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.codeInputElement = _t.first);
    }
  },
  decls: 48,
  vars: 26,
  consts: [[1, "half", "shadow", "scroll", "center"], [1, "row"], [1, "align-items-center", "justify-content-center"], [1, "form-block", "mx-auto", "shadow"], [1, "col", "text-center"], [1, "icon", "image"], ["src", "../../../assets/images/u44.svg"], [1, "row", "text-center"], ["style", "margin: 0 0 0; ", 4, "ngIf"], [1, ""], [3, "formGroup", "ngSubmit"], [1, "col", "form-group", "contentext"], ["class", "textcode", 4, "ngIf"], [1, "text-center", 2, "color", "var(--count-color)"], ["xmlns", "http://www.w3.org/2000/svg", "width", "56", "height", "70", "fill", "currentColor", "class", "bi bi-envelope", "viewBox", "0 0 15 22", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "50", "height", "70", "fill", "currentColor", "class", "bi bi-phone", "viewBox", "0 0 15 22", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "50", "height", "70", "fill", "currentColor", "class", "bi bi-google", "viewBox", "0 0 15 22", 4, "ngIf"], ["id", "input-validation", "formControlName", "code", "type", "string", "required", "required", "maxlength", "8", "aria-required", "true", "aria-describedby", "exampleInputGroup1__BV_description_", 1, "form-control", 3, "placeholder"], ["codeInput", ""], ["class", "text-danger ml-2 ", "style", "font-size: 50%;", 4, "ngIf", "ngIfElse"], [1, "col", "text-center", "mt-2"], ["id", "button-continue", "type", "submit", 1, "btn", "btn-success", "btn-block", 2, "background", "#23ae4d", "width", "100%", 3, "disabled"], [1, "col-sm-12"], ["id", "button-cancel", "type", "button", 1, "btn", "btn-danger", "btn-block", "mt-3", 2, "width", "100%", 3, "click"], [1, "textcode"], ["class", "", 4, "ngIf"], [4, "ngIf"], ["NoDaTa", ""], [2, "margin", "0 0 0"], ["xmlns", "http://www.w3.org/2000/svg", "width", "56", "height", "70", "fill", "currentColor", "viewBox", "0 0 15 22", 1, "bi", "bi-envelope"], ["d", "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "50", "height", "70", "fill", "currentColor", "viewBox", "0 0 15 22", 1, "bi", "bi-phone"], ["d", "M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"], ["d", "M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "50", "height", "70", "fill", "currentColor", "viewBox", "0 0 15 22", 1, "bi", "bi-google"], ["d", "M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"], [1, "text-danger", "ml-2", 2, "font-size", "50%"], [1, "btn", "btn-outline-success", "btn-lg", 2, "width", "100%", 3, "click"], [1, "", 2, "margin-top", "3px"], [1, "btn", "btn-outline-warning", "btn-lg", 2, "font-size", "18px", "width", "100%", 3, "disabled", "click"], ["class", "row", "style", "margin-top: 5px; justify-content: center; color: black;", 4, "ngIf"], [1, "row", 2, "margin-top", "5px", "justify-content", "center", "color", "black"], [1, "nombre", 2, "width", "100%"], [2, "font-size", "50%", "color", "var(--bg-login)"]],
  template: function ValidationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ValidationComponent_h1_8_Template, 4, 3, "h1", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, ValidationComponent_h1_9_Template, 4, 3, "h1", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 9)(11, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function ValidationComponent_Template_form_ngSubmit_11_listener() {
        return ctx.LoginCode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, ValidationComponent_p_13_Template, 3, 3, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, ValidationComponent_p_14_Template, 3, 3, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, ValidationComponent_p_15_Template, 3, 4, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, ValidationComponent__svg_svg_17_Template, 2, 0, "svg", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, ValidationComponent__svg_svg_18_Template, 3, 0, "svg", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, ValidationComponent__svg_svg_19_Template, 2, 0, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "input", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, ValidationComponent_span_23_Template, 6, 6, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 20)(25, "button", 21)(26, "div", 1)(27, "div", 22)(28, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ValidationComponent_Template_button_click_31_listener() {
        return ctx.Logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 1)(33, "div", 22)(34, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](36, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div")(38, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "u");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Support@bloxcross.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, ValidationComponent_div_44_Template, 4, 3, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, ValidationComponent_div_45_Template, 6, 5, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, ValidationComponent_ng_template_46_Template, 3, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](47);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.flagtitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.flagtitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.CodeForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.flagtitle && ctx.title == "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.flagtitle && ctx.title == "SMS");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.flagtitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.title == "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.title == "SMS");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.title == "Google");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 18, "confirmAccount.enter2fa"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.CodeForm.get("code").hasError("required") && ctx.CodeForm.get("code").touched && ctx.CodeForm.get("code").hasError("minlength"))("ngIfElse", _r12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.CodeForm.invalid || ctx.Activatechange);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](30, 20, "general.done"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](36, 22, "general.cancel"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](40, 24, "confirmAccount.needHelp"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.qr);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.notconfirm);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
  styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #fff;\n}\n\np[_ngcontent-%COMP%] {\n  color: #b3b3b3;\n  font-weight: 100;\n  font-size: 1rem;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: var(--count-color);\n}\n\na[_ngcontent-%COMP%] {\n  transition: 0.3s all ease;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.half[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  padding-top: 1%;\n  height: 100vh;\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  background: #f6f7fc;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 200px;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 4px;\n  height: 54px;\n  background: #efefef;\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n}\n\n.half[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n  text-decoration: underline;\n}\n\n.half[_ngcontent-%COMP%]   .forgot-pass[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  color: var(--a-login);\n}\n\n.form-block[_ngcontent-%COMP%] {\n  background: var(--bg-login);\n  padding: 8vh;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.2);\n}\n\n@media (max-width: 767.98px) {\n  .form-block[_ngcontent-%COMP%] {\n    padding: 8vh;\n  }\n}\n\n.control[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 15px;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.control[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.2rem;\n  color: #888;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.control__indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background: #e6e6e6;\n  border-radius: 4px;\n}\n\n.control--radio[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #ccc;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb771a;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]:not([disabled]):checked    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb8633;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n  opacity: 0.9;\n  pointer-events: none;\n}\n\n.control__indicator[_ngcontent-%COMP%]:after {\n  font-family: \"icomoon\";\n  content: \"\\e5ca\";\n  position: absolute;\n  display: none;\n  font-size: 16px;\n  transition: 0.3s all ease;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  display: block;\n  color: #fff;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%]:after {\n  top: 50%;\n  left: 50%;\n  margin-top: -1px;\n  transform: translate(-50%, -50%);\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  border-color: #7b7b7b;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background-color: #7e0cf5;\n  opacity: 0.2;\n}\n\n.image[_ngcontent-%COMP%] {\n  margin-bottom: 1vh;\n}\n\n.buttonsign[_ngcontent-%COMP%] {\n  margin-right: 3rem;\n}\n\n@media (max-width: 575px) {\n  .buttonsign[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n\n.toast-top-center[_ngcontent-%COMP%] {\n  top: 45% !important;\n  right: 0 !important;\n  width: 100% !important;\n}\n\n@media all and (max-width: 240px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -54px;\n  }\n}\n\n@media all and (min-width: 241px) and (max-width: 320px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -64px;\n  }\n}\n\n@media all and (min-width: 321px) and (max-width: 480px) {\n  .toast-top-center[_ngcontent-%COMP%] {\n    margin-left: -96px;\n  }\n}\n\n.ngx-toastr[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 125px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@media (max-width: 768px) {\n  .ngx-toastr[_ngcontent-%COMP%] {\n    width: 450px !important;\n    height: 125px !important;\n  }\n}\n\n.textcode[_ngcontent-%COMP%] {\n  color: var(--count-color);\n  text-align: center;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\n.contentext[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.butondone[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.alineDone[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n\n.teximput[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.spanerror[_ngcontent-%COMP%] {\n  font-size: 50%;\n}\n\n.scroll[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n\n@media (min-height: 560px) {\n  .center[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7O0VBRUUsaUNBQUE7RUFDQSx5QkFBQTtBQUdGOztBQUFBO0VBR0UseUJBQUE7QUFHRjs7QUFGRTtFQUNFLGdDQUFBO0FBS0o7O0FBSEE7RUFDRSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxlQUFBO0FBT0Y7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQVFGOztBQU5BO0VBQ0UsbUJBQUE7QUFTRjs7QUFQQTtFQUNFLFVBQUE7QUFVRjs7QUFURTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUFZSjtBQUNGOztBQVhBO0VBQ0UsVUFBQTtBQWFGOztBQVpFO0VBQ0U7SUFDRSxXQUFBO0VBZUo7QUFDRjs7QUFkQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWdCRjs7QUFmRTtFQUNFLGFBQUE7RUFFQSxnQkFBQTtBQWtCSjs7QUFoQkE7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0FBbUJGOztBQWpCQTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQW9CRjs7QUFqQkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQW9CRjs7QUFqQkE7RUFDRSwyQkFBQTtFQUNBLFlBQUE7RUFHQSw0Q0FBQTtBQW1CRjs7QUFsQkU7RUFDRTtJQUNFLFlBQUE7RUFxQko7QUFDRjs7QUFwQkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFzQkY7O0FBckJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQXdCSjs7QUF0QkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBeUJGOztBQXZCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUEwQkY7O0FBeEJBO0VBQ0Usa0JBQUE7QUEyQkY7O0FBekJBOztFQUVFLGdCQUFBO0FBNEJGOztBQTFCQTtFQUNFLG1CQUFBO0FBNkJGOztBQTNCQTs7RUFFRSxtQkFBQTtBQThCRjs7QUE1QkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQStCRjs7QUE3QkE7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUdBLHlCQUFBO0FBZ0NGOztBQTlCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBaUNGOztBQS9CQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFHQSxnQ0FBQTtBQWtDRjs7QUFoQ0E7RUFDRSxxQkFBQTtBQW1DRjs7QUFqQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFvQ0Y7O0FBaENBO0VBRUUsa0JBQUE7QUFrQ0Y7O0FBL0JBO0VBQ0Esa0JBQUE7QUFrQ0E7O0FBaENBO0VBR0E7SUFDRSxlQUFBO0VBaUNBO0FBQ0Y7O0FBNUJBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBOEJGOztBQTVCQTtFQUNFO0lBQ0ksa0JBQUE7RUErQko7QUFDRjs7QUE3QkE7RUFDRTtJQUNJLGtCQUFBO0VBK0JKO0FBQ0Y7O0FBN0JBO0VBQ0U7SUFDSSxrQkFBQTtFQStCSjtBQUNGOztBQTNCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTZCRjs7QUExQkU7RUFERjtJQUVJLHVCQUFBO0lBQ0Esd0JBQUE7RUE4QkY7QUFDRjs7QUEzQkE7RUFDRSx5QkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTZCRjs7QUF6QkE7RUFDRSxtQkFBQTtBQTRCRjs7QUF6QkE7RUFDRSxnQkFBQTtBQTRCRjs7QUF6QkE7RUFDRSxpQkFBQTtBQTRCRjs7QUF6QkE7RUFDRSxrQkFBQTtBQTRCRjs7QUF6QkE7RUFDRSxjQUFBO0FBNEJGOztBQXpCQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQTRCRjs7QUF2QkE7RUFDRSx5REFBQTtBQTBCRjs7QUF2QkE7RUFDRTtJQUNFLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBMEJGO0FBQ0YiLCJmaWxlIjoidmFsaWRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cclxuXHJcbnAge1xyXG4gIGNvbG9yOiAjYjNiM2IzO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgZm9udC1zaXplOiAxcmVtOyB9XHJcblxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LFxyXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjsgXHJcbiAgY29sb3I6IHZhcigtLWNvdW50LWNvbG9yKTt9XHJcbiAgXHJcblxyXG5hIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlOyB9XHJcbiAgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDsgfVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDdyZW0gMDsgfVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMjBweDsgfVxyXG5cclxuLmhhbGYsIC5oYWxmIC5jb250YWluZXIgPiAucm93IHtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgaGVpZ2h0OiAxMDB2aDsgfVxyXG5cclxuLmhhbGYgLmNvbnRlbnRzIHtcclxuICBiYWNrZ3JvdW5kOiAjZjZmN2ZjOyB9XHJcblxyXG4uaGFsZiAuYmcge1xyXG4gIHdpZHRoOiAyNSU7IH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIC5oYWxmIC5iZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4OyB9IH1cclxuXHJcbi5oYWxmIC5jb250ZW50cyB7XHJcbiAgd2lkdGg6IDc1JTsgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgLmhhbGYgLmNvbnRlbnRzIHtcclxuICAgICAgd2lkdGg6IDEwMCU7IH0gfVxyXG5cclxuLmhhbGYgLmNvbnRlbnRzIC5mb3JtLWNvbnRyb2wsIC5oYWxmIC5iZyAuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGhlaWdodDogNTRweDtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmOyB9XHJcbiAgLmhhbGYgLmNvbnRlbnRzIC5mb3JtLWNvbnRyb2w6YWN0aXZlLCAuaGFsZiAuY29udGVudHMgLmZvcm0tY29udHJvbDpmb2N1cywgLmhhbGYgLmJnIC5mb3JtLWNvbnRyb2w6YWN0aXZlLCAuaGFsZiAuYmcgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTsgfVxyXG5cclxuLmhhbGYgLmJnIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxyXG5cclxuLmhhbGYgYSB7XHJcbiAgY29sb3I6ICM4ODg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cclxuXHJcblxyXG4uaGFsZiAuZm9yZ290LXBhc3Mge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDE0cHg7IFxyXG4gIGNvbG9yOiB2YXIoLS1hLWxvZ2luKTtcclxufVxyXG5cclxuLmZvcm0tYmxvY2sge1xyXG4gIGJhY2tncm91bmQ6ICB2YXIoLS1iZy1sb2dpbik7XHJcbiAgcGFkZGluZzogOHZoO1xyXG5cclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTVweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJveC1zaGFkb3c6IDAgMTVweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpOyB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAuZm9ybS1ibG9jayB7XHJcbiAgICAgIHBhZGRpbmc6IDh2aDsgfSB9XHJcblxyXG4uY29udHJvbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7IH1cclxuICAuY29udHJvbCAuY2FwdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC4ycmVtO1xyXG4gICAgY29sb3I6ICM4ODg7IH1cclxuXHJcbi5jb250cm9sIGlucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgb3BhY2l0eTogMDsgfVxyXG5cclxuLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMnB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XHJcblxyXG4uY29udHJvbC0tcmFkaW8gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlOyB9XHJcblxyXG4uY29udHJvbDpob3ZlciBpbnB1dCB+IC5jb250cm9sX19pbmRpY2F0b3IsXHJcbi5jb250cm9sIGlucHV0OmZvY3VzIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZDogI2NjYzsgfVxyXG5cclxuLmNvbnRyb2wgaW5wdXQ6Y2hlY2tlZCB+IC5jb250cm9sX19pbmRpY2F0b3Ige1xyXG4gIGJhY2tncm91bmQ6ICNmYjc3MWE7IH1cclxuXHJcbi5jb250cm9sOmhvdmVyIGlucHV0Om5vdChbZGlzYWJsZWRdKTpjaGVja2VkIH4gLmNvbnRyb2xfX2luZGljYXRvcixcclxuLmNvbnRyb2wgaW5wdXQ6Y2hlY2tlZDpmb2N1cyB+IC5jb250cm9sX19pbmRpY2F0b3Ige1xyXG4gIGJhY2tncm91bmQ6ICNmYjg2MzM7IH1cclxuXHJcbi5jb250cm9sIGlucHV0OmRpc2FibGVkIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cclxuXHJcbi5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gIGZvbnQtZmFtaWx5OiAnaWNvbW9vbic7XHJcbiAgY29udGVudDogJ1xcZTVjYSc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7IH1cclxuXHJcbi5jb250cm9sIGlucHV0OmNoZWNrZWQgfiAuY29udHJvbF9faW5kaWNhdG9yOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2ZmZjsgfVxyXG5cclxuLmNvbnRyb2wtLWNoZWNrYm94IC5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XHJcblxyXG4uY29udHJvbC0tY2hlY2tib3ggaW5wdXQ6ZGlzYWJsZWQgfiAuY29udHJvbF9faW5kaWNhdG9yOmFmdGVyIHtcclxuICBib3JkZXItY29sb3I6ICM3YjdiN2I7IH1cclxuXHJcbi5jb250cm9sLS1jaGVja2JveCBpbnB1dDpkaXNhYmxlZDpjaGVja2VkIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdlMGNmNTtcclxuICBvcGFjaXR5OiAuMjsgfVxyXG5cclxuXHJcblxyXG4uaW1hZ2V7XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcclxufVxyXG4gIFxyXG4uYnV0dG9uc2lnbntcclxubWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCl7XHJcblxyXG5cclxuLmJ1dHRvbnNpZ257XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcbn1cclxuXHJcblxyXG5cclxuLnRvYXN0LXRvcC1jZW50ZXIgeyBcclxuICB0b3A6IDQ1JSAhaW1wb3J0YW50O1xyXG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSBcclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMjQwcHgpIHsgXHJcbiAgLnRvYXN0LXRvcC1jZW50ZXIgeyBcclxuICAgICAgbWFyZ2luLWxlZnQ6IC01NHB4OyBcclxuICB9IFxyXG59IFxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAyNDFweCkgYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7IFxyXG4gIC50b2FzdC10b3AtY2VudGVyIHsgXHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNjRweDsgXHJcbiAgfSBcclxufSBcclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzIxcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkgeyBcclxuICAudG9hc3QtdG9wLWNlbnRlciB7IFxyXG4gICAgICBtYXJnaW4tbGVmdDogLTk2cHg7IFxyXG4gIH0gXHJcbn1cclxuXHJcblxyXG4ubmd4LXRvYXN0ciB7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIGhlaWdodDogMTI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5uZ3gtdG9hc3RyIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiA0NTBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMjVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnRleHRjb2Rle1xyXG4gIGNvbG9yOiB2YXIoLS1jb3VudC1jb2xvcik7XHJcbiAgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuIFxyXG59XHJcblxyXG4uY29udGVudGV4dHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0b25kb25le1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5hbGluZURvbmV7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbn1cclxuXHJcbi50ZXhpbXB1dHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG59XHJcblxyXG4uc3BhbmVycm9ye1xyXG4gIGZvbnQtc2l6ZTogNTAlO1xyXG59XHJcblxyXG4uc2Nyb2xse1xyXG4gIG1heC1oZWlnaHQ6MTAwdmg7XHJcbiAgb3ZlcmZsb3cteDpoaWRkZW47IFxyXG4gIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG59XHJcblxyXG5cclxuXHJcbi5zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgLjVyZW0gMnJlbSB2YXIoLS1zaGFkb3duLWNvbG9yKSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogNTYwcHgpe1xyXG4gIC5jZW50ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufSJdfQ== */"]
});

/***/ }),

/***/ 95673:
/*!********************************************************!*\
  !*** ./src/app/UserPages/vouched/vouched.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VouchedComponent": () => (/* binding */ VouchedComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_assets_Errores_Errores_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/Errores/Errores.json */ 58417);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_validation_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/validation/validation.service */ 73902);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);












const _c0 = ["codeInput"];

function VouchedComponent_div_0_ng_container_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, error_r5.message), " ");
  }
}

function VouchedComponent_div_0_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VouchedComponent_div_0_ng_container_20_span_1_Template, 3, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.vouchedForm.get("name").hasError(error_r5.type) && (ctx_r3.vouchedForm.get("name").dirty || ctx_r3.vouchedForm.get("name").touched));
  }
}

function VouchedComponent_div_0_ng_container_26_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" *", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, error_r8.message), " ");
  }
}

function VouchedComponent_div_0_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VouchedComponent_div_0_ng_container_26_span_1_Template, 3, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r8 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.vouchedForm.get("lastname").hasError(error_r8.type) && (ctx_r4.vouchedForm.get("lastname").dirty || ctx_r4.vouchedForm.get("lastname").touched));
  }
}

function VouchedComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 9)(9, "h1", 10)(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function VouchedComponent_div_0_Template_form_ngSubmit_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.Register());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 12)(15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, VouchedComponent_div_0_ng_container_20_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16)(22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, VouchedComponent_div_0_ng_container_26_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 18)(28, "button", 19)(29, "div", 20)(30, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 9, "validation.validate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.vouchedForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 11, "validation.fullname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.ErroresSpan.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 13, "validation.fulllastname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.ErroresSpan.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.vouchedForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 15, "general.continue"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 17, "general.cancel"), " ");
  }
}

function VouchedComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 25);
  }
}

class VouchedComponent {
  constructor(fb, validateservice, toastr, router, translate) {
    this.fb = fb;
    this.validateservice = validateservice;
    this.toastr = toastr;
    this.router = router;
    this.translate = translate;
    this.ErroresSpan = src_assets_Errores_Errores_json__WEBPACK_IMPORTED_MODULE_1__;
    this.validate = true;
    this.language = "";
    this.vouched_notify = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.vouchedForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.codeInputElement.nativeElement.focus();
  }

  ngOnInit() {
    let language_navigator = window.navigator.language;
    this.language = language_navigator.split("-")[0];
  }

  ManageResponse() {
    var _this = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = yield _this.GetData();
      const id = {
        jobid: data.id
      };

      _this.subscription.add(_this.validateservice.ConfirmID(id).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          console.log("Response Data", response);
          console.log("Response result", response.success);

          if (response.success) {
            let msg = yield _this.translate.get("validation.Idvalidation").toPromise();
            let msgstatus = yield _this.translate.get("general.succes").toPromise();

            _this.toastr.success(msg, msgstatus);

            _this.router.navigate(['/home']);
          } else {
            _this.vouched.unmount();

            _this.ShowError(response.payload, "Error");

            _this.validate = true;
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), error => {
        _this.validate = true;
      }));
    })();
  }

  Register() {
    this.ManageResponse();
    this.vouchedForm.value.name;
    this.vouchedForm.value.lastname;
    var vouchedRequest = {};
    vouchedRequest['firstName'] = this.vouchedForm.value.name;
    vouchedRequest['lastName'] = this.vouchedForm.value.lastname;
    const updateUser = {
      fname: this.vouchedForm.value.name,
      lname: this.vouchedForm.value.lastname
    };
    this.validateservice.UpdateName(updateUser).toPromise();
    this.validate = false;
    this.vouched = Vouched({
      // Optional verification properties.
      verification: {
        firstName: this.vouchedForm.value.name,
        lastName: this.vouchedForm.value.lastname
      },
      liveness: 'straight',
      appId: '.Y1.~@59utQV#xf4LRsa~PEJaBz1wP',
      // mobile handoff
      crossDevice: true,
      crossDeviceQRCode: true,
      locale: this.language,
      onInit: job => {// console.log("Scanning Init", job);
      },
      // called when the verification is completed.
      onDone: job => {
        // token used to query jobs
        // console.log("Scanning complete", job);
        this.vouched_notify.next(job);
      },
      // theme
      theme: {
        name: 'verbose',
        bgColor: '#0000'
      },
      logo: {
        src: 'https://www.vouched.id/wp-content/uploads/2020/11/vouched_logo_hi_res.png',
        style: {
          'max-width': 150,
          'margin-bottom': 30
        }
      }
    });
    this.vouched.mount("#vouched-element");
  }

  GetData() {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.GetVouchedNotify().subscribe(response => {
        resolve(response);
      }));
    });
  }

  GetVouchedNotify() {
    return this.vouched_notify.asObservable();
  } //*******************************************************************************************
  //PopUp Error
  //*******************************************************************************************


  ShowError(msg, title = "", disableTimeOut = true) {
    console.error(msg);
    this.toastr.error(msg, title, {
      closeButton: true,
      disableTimeOut: disableTimeOut,
      positionClass: 'toast-center-center'
    });
  }

}

VouchedComponent.ɵfac = function VouchedComponent_Factory(t) {
  return new (t || VouchedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_validation_validation_service__WEBPACK_IMPORTED_MODULE_2__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService));
};

VouchedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: VouchedComponent,
  selectors: [["app-vouched"]],
  viewQuery: function VouchedComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.codeInputElement = _t.first);
    }
  },
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], ["id", "vouched-element", "style", "height: 100%; color: black;", 4, "ngIf"], [1, "d-md-flex", "half"], [1, "container"], [1, "row", "align-items-center", "justify-content-center"], [1, "form-block", "mx-auto", "shadow"], [1, "col"], [1, "icon", "d-flex", "image"], ["src", "../../../assets/images/u44.svg"], [1, "row", "text-center"], [2, "margin", "0 0 15px", "font-size", "2rem"], [3, "formGroup", "ngSubmit"], [1, "col", "form-group"], ["formControlName", "name", "type", "text", "id", "name", "name", "name", "required", "required", 1, "form-control"], ["codeInput", ""], [4, "ngFor", "ngForOf"], [1, "form-group", "mt-3", 2, "margin-bottom", "5px"], ["formControlName", "lastname", "type", "text", "id", "lname", "name", "lname", "autoComplete", "true", "required", "required", 1, "form-control"], [1, "row", "align-items-center", "justify-content-center", "mt-3"], ["type", "submit", 1, "btn", "btn-block", "btn-primary", "justify-content-center", 2, "background", "#23ae4d", 3, "disabled"], [1, "row"], [1, "buttonsign"], ["type", "button", "routerLink", "/home/dashboard", 1, "btn", "btn-outline-danger", "justify-content-center", "mt-3"], ["class", "text-danger mb-2 spanerror", 4, "ngIf"], [1, "text-danger", "mb-2", "spanerror"], ["id", "vouched-element", 2, "height", "100%", "color", "black"]],
  template: function VouchedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, VouchedComponent_div_0_Template, 36, 19, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VouchedComponent_div_1_Template, 1, 0, "div", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.validate);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.validate);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #fff;\n}\n\np[_ngcontent-%COMP%] {\n  color: #b3b3b3;\n  font-weight: 100;\n  font-size: 1rem;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: var(--count-color);\n}\n\na[_ngcontent-%COMP%] {\n  transition: 0.3s all ease;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.half[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  height: 100vh;\n  min-height: 700px;\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  background: #f6f7fc;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 200px;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n@media (max-width: 767.98px) {\n  .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 4px;\n  height: 54px;\n  background: #efefef;\n}\n\n.half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.half[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n}\n\n.half[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n  text-decoration: underline;\n}\n\n.half[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 54px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.half[_ngcontent-%COMP%]   .forgot-pass[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  color: var(--a-login);\n}\n\n.form-block[_ngcontent-%COMP%] {\n  background: var(--bg-login);\n  padding: 80px;\n  max-width: 550px;\n  max-height: 100%;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.2);\n}\n\n@media (max-width: 767.98px) {\n  .form-block[_ngcontent-%COMP%] {\n    padding: 70px;\n  }\n}\n\n.control[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 15px;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.control[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.2rem;\n  color: #888;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.control__indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background: #e6e6e6;\n  border-radius: 4px;\n}\n\n.control--radio[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #ccc;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb771a;\n}\n\n.control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]:not([disabled]):checked    ~ .control__indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:focus    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #fb8633;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n  opacity: 0.9;\n  pointer-events: none;\n}\n\n.control__indicator[_ngcontent-%COMP%]:after {\n  font-family: \"icomoon\";\n  content: \"\\e5ca\";\n  position: absolute;\n  display: none;\n  font-size: 16px;\n  transition: 0.3s all ease;\n}\n\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  display: block;\n  color: #fff;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   .control__indicator[_ngcontent-%COMP%]:after {\n  top: 50%;\n  left: 50%;\n  margin-top: -1px;\n  transform: translate(-50%, -50%);\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    ~ .control__indicator[_ngcontent-%COMP%]:after {\n  border-color: #7b7b7b;\n}\n\n.control--checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled:checked    ~ .control__indicator[_ngcontent-%COMP%] {\n  background-color: #7e0cf5;\n  opacity: 0.2;\n}\n\n.image[_ngcontent-%COMP%] {\n  margin-left: 41%;\n  margin-bottom: 3%;\n}\n\n.buttonsign[_ngcontent-%COMP%] {\n  margin-right: 3rem;\n}\n\n@media (max-width: 575px) {\n  .half[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    height: 100%;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  .buttonsign[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n\n.spanerror[_ngcontent-%COMP%] {\n  font-size: 50%;\n}\n\n.imageequis[_ngcontent-%COMP%] {\n  margin-left: 100%;\n  margin-bottom: 4%;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdWNoZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7O0VBRUUsaUNBQUE7RUFDQSx5QkFBQTtBQUdGOztBQUFBO0VBR0UseUJBQUE7QUFHRjs7QUFGRTtFQUNFLGdDQUFBO0FBS0o7O0FBSEE7RUFDRSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxlQUFBO0FBT0Y7O0FBTEE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFRRjs7QUFOQTtFQUNFLG1CQUFBO0FBU0Y7O0FBUEE7RUFDRSxVQUFBO0FBVUY7O0FBVEU7RUFDRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VBWUo7QUFDRjs7QUFYQTtFQUNFLFVBQUE7QUFhRjs7QUFaRTtFQUNFO0lBQ0UsV0FBQTtFQWVKO0FBQ0Y7O0FBZEE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFnQkY7O0FBZkU7RUFDRSxhQUFBO0VBRUEsZ0JBQUE7QUFrQko7O0FBaEJBO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtBQW1CRjs7QUFqQkE7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7QUFvQkY7O0FBbEJBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFxQkY7O0FBbkJBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFzQkY7O0FBbkJBO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLDRDQUFBO0FBc0JGOztBQXJCRTtFQUNFO0lBQ0UsYUFBQTtFQXdCSjtBQUNGOztBQXZCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQXlCRjs7QUF4QkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBMkJKOztBQXpCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUE0QkY7O0FBMUJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQTZCRjs7QUEzQkE7RUFDRSxrQkFBQTtBQThCRjs7QUE1QkE7O0VBRUUsZ0JBQUE7QUErQkY7O0FBN0JBO0VBQ0UsbUJBQUE7QUFnQ0Y7O0FBOUJBOztFQUVFLG1CQUFBO0FBaUNGOztBQS9CQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBa0NGOztBQWhDQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBR0EseUJBQUE7QUFtQ0Y7O0FBakNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFvQ0Y7O0FBbENBO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUdBLGdDQUFBO0FBcUNGOztBQW5DQTtFQUNFLHFCQUFBO0FBc0NGOztBQXBDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQXVDRjs7QUFuQ0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBc0NGOztBQW5DQTtFQUNBLGtCQUFBO0FBc0NBOztBQXBDQTtFQUVBO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFzQ0E7RUFwQ0Y7SUFDRSxlQUFBO0VBc0NBO0FBQ0Y7O0FBakNBO0VBQ0UsY0FBQTtBQW1DRjs7QUFoQ0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBbUNGOztBQS9CQTtFQUNFLHlEQUFBO0FBa0NGIiwiZmlsZSI6InZvdWNoZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XHJcblxyXG5wIHtcclxuICBjb2xvcjogI2IzYjNiMztcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTsgfVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNixcclxuLmgxLCAuaDIsIC5oMywgLmg0LCAuaDUsIC5oNiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7IFxyXG4gIGNvbG9yOiB2YXIoLS1jb3VudC1jb2xvcik7fVxyXG4gIFxyXG5cclxuYSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTsgfVxyXG4gIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7IH1cclxuXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOiA3cmVtIDA7IH1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDIwcHg7IH1cclxuXHJcbi5oYWxmLCAuaGFsZiAuY29udGFpbmVyID4gLnJvdyB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtaW4taGVpZ2h0OiA3MDBweDsgfVxyXG5cclxuLmhhbGYgLmNvbnRlbnRzIHtcclxuICBiYWNrZ3JvdW5kOiAjZjZmN2ZjOyB9XHJcblxyXG4uaGFsZiAuYmcge1xyXG4gIHdpZHRoOiAyNSU7IH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIC5oYWxmIC5iZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4OyB9IH1cclxuXHJcbi5oYWxmIC5jb250ZW50cyB7XHJcbiAgd2lkdGg6IDc1JTsgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgLmhhbGYgLmNvbnRlbnRzIHtcclxuICAgICAgd2lkdGg6IDEwMCU7IH0gfVxyXG5cclxuLmhhbGYgLmNvbnRlbnRzIC5mb3JtLWNvbnRyb2wsIC5oYWxmIC5iZyAuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGhlaWdodDogNTRweDtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmOyB9XHJcbiAgLmhhbGYgLmNvbnRlbnRzIC5mb3JtLWNvbnRyb2w6YWN0aXZlLCAuaGFsZiAuY29udGVudHMgLmZvcm0tY29udHJvbDpmb2N1cywgLmhhbGYgLmJnIC5mb3JtLWNvbnRyb2w6YWN0aXZlLCAuaGFsZiAuYmcgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTsgfVxyXG5cclxuLmhhbGYgLmJnIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxyXG5cclxuLmhhbGYgYSB7XHJcbiAgY29sb3I6ICM4ODg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cclxuXHJcbi5oYWxmIC5idG4ge1xyXG4gIGhlaWdodDogNTRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDsgfVxyXG5cclxuLmhhbGYgLmZvcmdvdC1wYXNzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxNHB4OyBcclxuICBjb2xvcjogdmFyKC0tYS1sb2dpbik7XHJcbn1cclxuXHJcbi5mb3JtLWJsb2NrIHtcclxuICBiYWNrZ3JvdW5kOiAgdmFyKC0tYmctbG9naW4pO1xyXG4gIHBhZGRpbmc6IDgwcHg7XHJcbiAgbWF4LXdpZHRoOiA1NTBweDtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIC5mb3JtLWJsb2NrIHtcclxuICAgICAgcGFkZGluZzogNzBweDsgfSB9XHJcblxyXG4uY29udHJvbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7IH1cclxuICAuY29udHJvbCAuY2FwdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC4ycmVtO1xyXG4gICAgY29sb3I6ICM4ODg7IH1cclxuXHJcbi5jb250cm9sIGlucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgb3BhY2l0eTogMDsgfVxyXG5cclxuLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMnB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XHJcblxyXG4uY29udHJvbC0tcmFkaW8gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlOyB9XHJcblxyXG4uY29udHJvbDpob3ZlciBpbnB1dCB+IC5jb250cm9sX19pbmRpY2F0b3IsXHJcbi5jb250cm9sIGlucHV0OmZvY3VzIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZDogI2NjYzsgfVxyXG5cclxuLmNvbnRyb2wgaW5wdXQ6Y2hlY2tlZCB+IC5jb250cm9sX19pbmRpY2F0b3Ige1xyXG4gIGJhY2tncm91bmQ6ICNmYjc3MWE7IH1cclxuXHJcbi5jb250cm9sOmhvdmVyIGlucHV0Om5vdChbZGlzYWJsZWRdKTpjaGVja2VkIH4gLmNvbnRyb2xfX2luZGljYXRvcixcclxuLmNvbnRyb2wgaW5wdXQ6Y2hlY2tlZDpmb2N1cyB+IC5jb250cm9sX19pbmRpY2F0b3Ige1xyXG4gIGJhY2tncm91bmQ6ICNmYjg2MzM7IH1cclxuXHJcbi5jb250cm9sIGlucHV0OmRpc2FibGVkIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cclxuXHJcbi5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gIGZvbnQtZmFtaWx5OiAnaWNvbW9vbic7XHJcbiAgY29udGVudDogJ1xcZTVjYSc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7IH1cclxuXHJcbi5jb250cm9sIGlucHV0OmNoZWNrZWQgfiAuY29udHJvbF9faW5kaWNhdG9yOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2ZmZjsgfVxyXG5cclxuLmNvbnRyb2wtLWNoZWNrYm94IC5jb250cm9sX19pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XHJcblxyXG4uY29udHJvbC0tY2hlY2tib3ggaW5wdXQ6ZGlzYWJsZWQgfiAuY29udHJvbF9faW5kaWNhdG9yOmFmdGVyIHtcclxuICBib3JkZXItY29sb3I6ICM3YjdiN2I7IH1cclxuXHJcbi5jb250cm9sLS1jaGVja2JveCBpbnB1dDpkaXNhYmxlZDpjaGVja2VkIH4gLmNvbnRyb2xfX2luZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdlMGNmNTtcclxuICBvcGFjaXR5OiAuMjsgfVxyXG5cclxuXHJcblxyXG4uaW1hZ2V7XHJcbiAgbWFyZ2luLWxlZnQ6IDQxJTtcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG4gIFxyXG4uYnV0dG9uc2lnbntcclxubWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCl7XHJcblxyXG4uaGFsZiAuYnRuIHtcclxuICBoZWlnaHQ6IDEwMCU7IFxyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcbi5idXR0b25zaWdue1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG59XHJcblxyXG5cclxuXHJcbi5zcGFuZXJyb3J7XHJcbiAgZm9udC1zaXplOiA1MCU7XHJcbn1cclxuXHJcbi5pbWFnZWVxdWlzIHtcclxuICBtYXJnaW4tbGVmdDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbi5zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgLjVyZW0gMnJlbSB2YXIoLS1zaGFkb3duLWNvbG9yKSFpbXBvcnRhbnQ7XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_services_Guard_Dashboard_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/Guard/Dashboard.guard */ 41514);
/* harmony import */ var src_services_Guard_vigilante_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/Guard/vigilante.guard */ 99082);
/* harmony import */ var _BuyAndSell_buy_sell_buy_sell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BuyAndSell/buy-sell/buy-sell.component */ 51270);
/* harmony import */ var _layout_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/base-layout/base-layout.component */ 32679);
/* harmony import */ var _Options_generate_qr_generate_qr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Options/generate-qr/generate-qr.component */ 20521);
/* harmony import */ var _Options_table_info_transactions_table_info_transactions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Options/table-info-transactions/table-info-transactions.component */ 22509);
/* harmony import */ var _UserPages_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserPages/change-email/change-email.component */ 32788);
/* harmony import */ var _UserPages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UserPages/change-password/change-password.component */ 94368);
/* harmony import */ var _UserPages_change_phone_change_phone_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserPages/change-phone/change-phone.component */ 47164);
/* harmony import */ var _UserPages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UserPages/forgot-password/forgot-password.component */ 74947);
/* harmony import */ var _UserPages_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./UserPages/login/login.component */ 53538);
/* harmony import */ var _UserPages_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UserPages/register/register.component */ 28817);
/* harmony import */ var _UserPages_validation_validation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./UserPages/validation/validation.component */ 48831);
/* harmony import */ var _UserPages_vouched_vouched_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./UserPages/vouched/vouched.component */ 95673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);

















const routes = [
    { path: '', component: _UserPages_login_login_component__WEBPACK_IMPORTED_MODULE_10__.LoginComponent },
    { path: 'registration', component: _UserPages_register_register_component__WEBPACK_IMPORTED_MODULE_11__.RegisterComponent },
    { path: 'qr/:generate2fa', component: _Options_generate_qr_generate_qr_component__WEBPACK_IMPORTED_MODULE_4__.GenerateQRComponent },
    { path: 'vouched', component: _UserPages_vouched_vouched_component__WEBPACK_IMPORTED_MODULE_13__.VouchedComponent },
    { path: 'fogotpassword', component: _UserPages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__.ForgotPasswordComponent },
    { path: 'changepassword', component: _UserPages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__.ChangePasswordComponent },
    { path: 'changeemail', component: _UserPages_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_6__.ChangeEmailComponent },
    { path: 'changephone', component: _UserPages_change_phone_change_phone_component__WEBPACK_IMPORTED_MODULE_8__.ChangePhoneComponent },
    {
        path: 'validation',
        component: _UserPages_validation_validation_component__WEBPACK_IMPORTED_MODULE_12__.ValidationComponent,
        canActivate: [src_services_Guard_vigilante_guard__WEBPACK_IMPORTED_MODULE_1__.VigilanteGuard]
    },
    {
        path: 'home',
        canActivate: [src_services_Guard_Dashboard_guard__WEBPACK_IMPORTED_MODULE_0__.DashboardGuard],
        component: _layout_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_3__.BaseLayoutComponent,
        children: [
            { path: 'prueba', component: _Options_table_info_transactions_table_info_transactions_component__WEBPACK_IMPORTED_MODULE_5__.TableInfoTransactionsComponent },
            { path: 'buy_sell', component: _BuyAndSell_buy_sell_buy_sell_component__WEBPACK_IMPORTED_MODULE_2__.BuySellComponent },
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_Modules_sharedtable_module_ts-src_services_Market_market_service_ts-src_services_-4a6e3e"), __webpack_require__.e("src_app_Principal_principal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Principal/principal.module */ 18894)).then(m => m.PrincipalModule)
            },
            {
                path: 'portafolio',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_Modules_sharedtable_module_ts-src_services_Market_market_service_ts-src_services_-4a6e3e"), __webpack_require__.e("default-src_app_PaymentMethods_payment-methods_payment-methods_component_ts"), __webpack_require__.e("src_app_Portafolio_portafolio_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Portafolio/portafolio.module */ 40968)).then(m => m.PortafolioModule)
            },
            {
                path: 'payment_methods',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_PaymentMethods_payment-methods_payment-methods_component_ts"), __webpack_require__.e("src_app_PaymentMethods_payment-methods_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./PaymentMethods/payment-methods.module */ 37245)).then(m => m.PaymentMethodsModule)
            },
            { path: '**', redirectTo: '/home/dashboard', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);




class AppComponent {
  constructor(translate) {
    this.translate = translate;
    this.title = "BloxcrossFrontend";
    this.langs = [];
  }

  ngOnInit() {
    this.Getlanguages(); // localStorage.setItem("theme","dark");
  }

  Getlanguages() {
    var _this = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let language_navigator = window.navigator.language;
      _this.language = language_navigator.split("-")[0];

      _this.translate.setDefaultLang(_this.language);

      _this.translate.use(_this.language);

      _this.translate.addLangs([_this.language, "en"]);

      _this.langs = _this.translate.getLangs();
    })();
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  consts: [[1, "app"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
  styles: [".app[_ngcontent-%COMP%] {\n  background-color: var(--app-color-bg);\n  height: 100vh;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.basic-input[_ngcontent-%COMP%] {\n  border-radius: 0.6rem;\n}\n\n.box-input[_ngcontent-%COMP%] {\n  background-color: #FAFAFA;\n  color: #ffffff;\n  border: none;\n}\n\n.box-input[_ngcontent-%COMP%]:focus {\n  background-color: #FAFAFA;\n  color: #ffffff;\n  border: none;\n}\n\ninput.box-input-gray[_ngcontent-%COMP%] {\n  background-color: #FAFAFA;\n  color: #ffffff !important;\n  border: none;\n}\n\ninput.box-input-gray[_ngcontent-%COMP%]:focus {\n  color: #ffffff !important;\n  border: none;\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: #212529;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0VBQ0EsYUFBQTtFQUdBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUtFO0VBQ0UscUJBQUE7QUFGSjs7QUFLRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFGSjs7QUFJSTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFGTjs7QUFNRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBSEo7O0FBS0k7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFITjs7QUFPRTtFQUNFLGNBQUE7QUFKSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1jb2xvci1iZyk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIC8vICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAydm1pbik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvLyBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmJhc2ljLWlucHV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcclxuICB9XHJcblxyXG4gIC5ib3gtaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXQuYm94LWlucHV0LWdyYXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgIGNvbG9yOiAjZmZmZmZmIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgY29sb3I6IzIxMjUyOTtcclxuICB9XHJcblxyXG5cclxuXHJcbiJdfQ== */"]
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "cargarTraductor": () => (/* binding */ cargarTraductor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _UserPages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserPages/login/login.component */ 53538);
/* harmony import */ var _UserPages_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserPages/register/register.component */ 28817);
/* harmony import */ var src_services_interceptors_add_token_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/interceptors/add-token.interceptor */ 88742);
/* harmony import */ var _layout_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/base-layout/base-layout.component */ 32679);
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/footer/footer.component */ 61954);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/header/header.component */ 17876);
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ 20129);
/* harmony import */ var src_services_AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/AppSettingsInit/app-settings.service */ 17059);
/* harmony import */ var _UserPages_validation_validation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./UserPages/validation/validation.component */ 48831);
/* harmony import */ var _Options_generate_qr_generate_qr_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Options/generate-qr/generate-qr.component */ 20521);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/http-loader */ 58319);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _UserPages_vouched_vouched_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./UserPages/vouched/vouched.component */ 95673);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ngx-permissions */ 98209);
/* harmony import */ var _UserPages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./UserPages/forgot-password/forgot-password.component */ 74947);
/* harmony import */ var _UserPages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./UserPages/change-password/change-password.component */ 94368);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _PopUp_confirmation_generate_qr_confirmation_generate_qr_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PopUp/confirmation-generate-qr/confirmation-generate-qr.component */ 95539);
/* harmony import */ var _PopUp_qr_view_qr_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PopUp/qr-view/qr-view.component */ 68489);
/* harmony import */ var src_services_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/services/interceptors/http-error.interceptor */ 82657);
/* harmony import */ var _PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./PopUp/confirmation/confirmation.component */ 40915);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _PopUp_qr_reader_qr_reader_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./PopUp/qr-reader/qr-reader.component */ 43335);
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @zxing/ngx-scanner */ 53800);
/* harmony import */ var _PopUp_funds_options_funds_options_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./PopUp/funds-options/funds-options.component */ 97863);
/* harmony import */ var _PopUp_details_transactions_portfolio_details_transactions_portfolio_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./PopUp/details-transactions-portfolio/details-transactions-portfolio.component */ 87125);
/* harmony import */ var _BuyAndSell_buy_sell_buy_sell_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./BuyAndSell/buy-sell/buy-sell.component */ 51270);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var src_Modules_material_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/Modules/material-module */ 78009);
/* harmony import */ var _PopUp_confirm_validate_google_qr_confirm_validate_google_qr_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./PopUp/confirm-validate-google-qr/confirm-validate-google-qr.component */ 31102);
/* harmony import */ var _UserPages_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./UserPages/change-email/change-email.component */ 32788);
/* harmony import */ var _UserPages_change_phone_change_phone_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./UserPages/change-phone/change-phone.component */ 47164);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-clipboard */ 11691);
/* harmony import */ var _shared_scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/scroll-to-top/scroll-to-top.component */ 76583);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/service-worker */ 63769);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../environments/environment */ 92340);
































//scanner



















function cargarTraductor(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_29__.TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HTTP_INTERCEPTORS, useClass: src_services_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_17__.HttpErrorInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HTTP_INTERCEPTORS, useClass: src_services_interceptors_add_token_interceptor__WEBPACK_IMPORTED_MODULE_4__.AddTokenInterceptor, multi: true },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_30__.APP_INITIALIZER,
            multi: true,
            deps: [src_services_AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_9__.AppSettingsService],
            useFactory: (appConfigService) => {
                return () => {
                    return appConfigService.loadSettings();
                };
            }
        },
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_32__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__.NgbModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_36__.FontAwesomeModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__.NgbCollapseModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_38__.NgxSpinnerModule,
        ngx_clipboard__WEBPACK_IMPORTED_MODULE_39__.ClipboardModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__.TranslateModule.forRoot({
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__.TranslateLoader,
                useFactory: (cargarTraductor),
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HttpClient]
            }
        }),
        _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_41__.ZXingScannerModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_42__.ToastrModule.forRoot(),
        ngx_permissions__WEBPACK_IMPORTED_MODULE_43__.NgxPermissionsModule.forRoot(),
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_44__.MatDialogModule,
        src_Modules_material_module__WEBPACK_IMPORTED_MODULE_23__.MaterialModule,
        _angular_service_worker__WEBPACK_IMPORTED_MODULE_45__.ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_28__.environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _UserPages_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        _UserPages_register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent,
        _layout_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_5__.BaseLayoutComponent,
        _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent,
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent,
        _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.SidebarComponent,
        _UserPages_validation_validation_component__WEBPACK_IMPORTED_MODULE_10__.ValidationComponent,
        _Options_generate_qr_generate_qr_component__WEBPACK_IMPORTED_MODULE_11__.GenerateQRComponent,
        _UserPages_vouched_vouched_component__WEBPACK_IMPORTED_MODULE_12__.VouchedComponent,
        _UserPages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__.ForgotPasswordComponent,
        _UserPages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_14__.ChangePasswordComponent,
        _PopUp_confirmation_generate_qr_confirmation_generate_qr_component__WEBPACK_IMPORTED_MODULE_15__.ConfirmationGenerateQrComponent,
        _PopUp_qr_view_qr_view_component__WEBPACK_IMPORTED_MODULE_16__.QrViewComponent,
        _PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_18__.ConfirmationComponent,
        _PopUp_qr_reader_qr_reader_component__WEBPACK_IMPORTED_MODULE_19__.QrReaderComponent,
        _PopUp_funds_options_funds_options_component__WEBPACK_IMPORTED_MODULE_20__.FundsOptionsComponent,
        _PopUp_details_transactions_portfolio_details_transactions_portfolio_component__WEBPACK_IMPORTED_MODULE_21__.DetailsTransactionsPortfolioComponent,
        _BuyAndSell_buy_sell_buy_sell_component__WEBPACK_IMPORTED_MODULE_22__.BuySellComponent,
        _PopUp_confirm_validate_google_qr_confirm_validate_google_qr_component__WEBPACK_IMPORTED_MODULE_24__.ConfirmValidateGoogleQRComponent,
        _UserPages_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_25__.ChangeEmailComponent,
        _UserPages_change_phone_change_phone_component__WEBPACK_IMPORTED_MODULE_26__.ChangePhoneComponent,
        _shared_scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_27__.ScrollToTopComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_32__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__.NgbModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_36__.FontAwesomeModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__.NgbCollapseModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_38__.NgxSpinnerModule,
        ngx_clipboard__WEBPACK_IMPORTED_MODULE_39__.ClipboardModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__.TranslateModule, _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_41__.ZXingScannerModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_42__.ToastrModule, ngx_permissions__WEBPACK_IMPORTED_MODULE_43__.NgxPermissionsModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_44__.MatDialogModule,
        src_Modules_material_module__WEBPACK_IMPORTED_MODULE_23__.MaterialModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_45__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 32679:
/*!*************************************************************!*\
  !*** ./src/app/layout/base-layout/base-layout.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseLayoutComponent": () => (/* binding */ BaseLayoutComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ 83278);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/login/login.service */ 3155);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_services_AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/AppSettingsInit/app-settings.service */ 17059);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_services_WebSocket_socketio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/WebSocket/socketio.service */ 97317);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ 61954);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ 17876);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 20129);
/* harmony import */ var _shared_scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/scroll-to-top/scroll-to-top.component */ 76583);

















function BaseLayoutComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function BaseLayoutComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-scroll-to-top");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function BaseLayoutComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

class BaseLayoutComponent {
  constructor(loginService, router, settingsService, translate, websocket, toastr, breakpointObserver) {
    this.loginService = loginService;
    this.router = router;
    this.settingsService = settingsService;
    this.translate = translate;
    this.websocket = websocket;
    this.toastr = toastr;
    this.breakpointObserver = breakpointObserver;
    this.sizeDisplay = 'phone' || 0;
    this.sildebar = true;
    this.porfolio = false;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
    this.countRefresh = 0;
    this.isActivity = false;
    this.scrollbtn = false;
    this.mediaQuery();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    clearTimeout(this.isMouseMove);
  }

  ngOnInit() {
    this.websocket.InitBloxOrder();
    this.GetNotificate();
    this.getTimeOutLogout();
  }

  getTimeOutLogout() {
    let timeZone;

    if (typeof Intl === 'object' && typeof Intl.DateTimeFormat === 'function') {
      timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    }

    var timeexp = this.loginService.getTokenDecoded();

    if (localStorage.getItem('remember') === "true") {
      var timeexp = this.loginService.getTokenDecoded();
      var primero = new Date(timeexp.exp * 1000);
      var segundo = new Date(timeexp.iat * 1000);
      var difference = Math.abs(Number(primero) - Number(segundo));
      var days = difference / (1000 * 3600 * 24);

      if (days === 0) {
        this.loginService.removelocalStorage();
        this.router.navigate(["/"]);
      }

      clearTimeout(this.isMouseMove);
    } else if (localStorage.getItem('remember') === "false") {
      this.localTimer = this.settingsService.getapidatos().Configuration.TimeExpiredSession;
      this.countDown();
    }
  }
  /**
   * Evento que escucha cuando el mouse se encuentra en movimiento
   * @param {MouseEvent} e - evento cuando el mouse esta en movimiento
   */


  onMosusemove(e) {
    if (localStorage.getItem('remember') === "false") {
      this.countDown();
    } else if (localStorage.getItem('remember') === "true") {
      clearTimeout(this.isMouseMove);
    }

    this.changescroll();
  }

  countDown() {
    var _this = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isActivity = true;
      clearTimeout(_this.isMouseMove);
      _this.isMouseMove = setTimeout(() => {
        _this.countRefresh = 0;
        _this.isActivity = false;

        if (localStorage.getItem('token') != null) {
          _this.loginService.logout().subscribe( /*#__PURE__*/function () {
            var _ref = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
              var msg = yield _this.translate.get('Errores.EndSessionDetail').toPromise();
              var msg_title = yield _this.translate.get('Errores.EndSession').toPromise();

              _this.toastr.error(msg, msg_title);

              _this.loginService.removelocalStorage();

              _this.router.navigate(["/"]);
            });

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }(), error => {
            _this.loginService.removelocalStorage();

            _this.router.navigate(["/"]);
          });
        }
      }, _this.localTimer);

      if (_this.isActivity && _this.countRefresh === 1) {// se refresca sesion
      }

      _this.countRefresh++;
    })();
  }

  GetNotificate() {
    var _this2 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.subscription.add(_this2.websocket.GetDataBloxOrder().subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          if (typeof data != 'object' && data != "Hey Dude!") {
            if (JSON.parse(data).success == null || JSON.parse(data).success == undefined) {
              console.log("WebSocket Order", data);
              var borar = data;
              yield _this2.ResponseEvent(JSON.parse(borar));
            }
          }
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }()));
    })();
  }

  ResponseEvent(message) {
    var _this3 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      switch (message.header.msg_type) {
        case 'ORDER_NEW':
          _this3.toastr.success("Order created");

          break;

        case 'ORDER_UPDATE':
          _this3.toastr.success("Order updated");

          break;

        case 'ORDER_ERROR':
          var message2 = yield _this3.translate.get('Errores.orderError').toPromise();

          _this3.ShowError(message.data.order_state, message2);

          break;

        case 'ORDER_CANCEL':
          var message2 = yield _this3.translate.get('Errores.orderCancel').toPromise();

          _this3.ShowError(message.data.order_state, message2);

          break;

        case 'ORDER_REJECTED':
          var message2 = yield _this3.translate.get('Errores.orderRejected').toPromise();

          _this3.ShowError(message.data.order_state, message2);

          break;

        case 'EXECUTION':
          _this3.toastr.success("Succesful transaction!!!");

          break;

        case 'TRACKING_EXECUTION':
          _this3.toastr.success("Succesful tracking execution!!!");

          break;

        case 'DEPOSIT':
          _this3.toastr.success("Succesful deposit!!!");

          break;

        case 'WITHDRAW':
          _this3.toastr.success("Succesful withdraw!!!");

          break;

        default:
          break;
      }
    })();
  }

  ShowError(msg, title = "", disableTimeOut = true) {
    console.error(msg);
    this.toastr.error(msg, title, {
      closeButton: true,
      disableTimeOut: disableTimeOut,
      positionClass: 'toast-center-center'
    });
  }

  mediaQuery() {
    this.subscription.add(this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__.Breakpoints.XSmall).subscribe(state => {
      if (state.matches) {
        //AQUI SERA TRUE SOLO SI ESTA EN RESOLUCION DE CELULAR
        this.sildebar = false;
      } else {
        this.sildebar = true;
      }
    }));
  }

  contorlmenu() {
    this.sildebar = !this.sildebar;
  }

  changescroll() {
    if (document.getElementById("scrolltop").scrollTop > 50) {
      this.scrollbtn = true;
    } else {
      this.scrollbtn = false;
    }
  }

}

BaseLayoutComponent.ɵfac = function BaseLayoutComponent_Factory(t) {
  return new (t || BaseLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_services_login_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_services_AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_2__.AppSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_services_WebSocket_socketio_service__WEBPACK_IMPORTED_MODULE_3__.SocketioService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__.BreakpointObserver));
};

BaseLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: BaseLayoutComponent,
  selectors: [["app-base-layout"]],
  hostBindings: function BaseLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mousemove", function BaseLayoutComponent_mousemove_HostBindingHandler($event) {
        return ctx.onMosusemove($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveDocument"]);
    }
  },
  decls: 16,
  vars: 4,
  consts: [[1, "", 2, "margin-right", "0"], ["class", "customS", 4, "ngIf"], ["id", "scrolltop", 3, "ngClass"], ["id", "scrollay"], [1, "app-main__outer"], [1, "app-main__inner"], [1, "layout-container"], ["o", "outlet"], [4, "ngIf"], [1, "customS"]],
  template: function BaseLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div")(2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div")(5, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, BaseLayoutComponent_div_6_Template, 2, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "router-outlet", null, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, BaseLayoutComponent_div_14_Template, 2, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, BaseLayoutComponent_div_15_Template, 2, 0, "div", 8);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.sildebar);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx.sildebar ? "customW" : "customM");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.scrollbtn);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.sildebar);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.SidebarComponent, _shared_scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_7__.ScrollToTopComponent],
  styles: [".customS[_ngcontent-%COMP%] {\n  float: left;\n  width: 104px;\n  height: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n@media (min-height: 364px) {\n  .customS[_ngcontent-%COMP%] {\n    height: calc(100vh - 66px);\n    overflow-x: hidden;\n    overflow-y: hidden;\n  }\n}\n\n.customW[_ngcontent-%COMP%] {\n  float: left;\n  width: 70%;\n  height: calc(100vh - 96px);\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.customM[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n  height: calc(100vh - 3.5rem - 96px);\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n@media (min-width: 560px) {\n  .customS[_ngcontent-%COMP%] {\n    float: left;\n    width: 104px;\n  }\n  .customW[_ngcontent-%COMP%] {\n    float: left;\n    width: 80%;\n  }\n  .customM[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n  }\n}\n\n@media (min-width: 1086px) {\n  .customS[_ngcontent-%COMP%] {\n    float: left;\n    width: 104px;\n  }\n  .customW[_ngcontent-%COMP%] {\n    float: left;\n    width: 90%;\n  }\n  .customM[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n  }\n}\n\n.iconbar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  margin-top: 0px;\n  margin-left: 0px;\n  position: absolute;\n  z-index: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQyxrQkFBQTtBQUFMOztBQUdDO0VBR0M7SUFDQSwwQkFBQTtJQUNBLGtCQUFBO0lBQ0Msa0JBQUE7RUFGRDtBQUNGOztBQUlFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Msa0JBQUE7QUFGTDs7QUFNRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFFQyxrQkFBQTtFQUNDLGtCQUFBO0FBSk47O0FBT0M7RUFDQztJQUNFLFdBQUE7SUFDQSxZQUFBO0VBSkY7RUFNQTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VBSkY7RUFNQTtJQUNFLFdBQUE7SUFDQSxXQUFBO0VBSkY7QUFDRjs7QUFNRTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFKSjtFQU1FO0lBQ0UsV0FBQTtJQUNBLFVBQUE7RUFKSjtFQU1FO0lBQ0UsV0FBQTtJQUNBLFdBQUE7RUFKSjtBQUNGOztBQVlBO0VBQ0UsV0FBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFWSiIsImZpbGUiOiJiYXNlLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAuY3VzdG9tU3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gIH1cclxuICBcclxuIEBtZWRpYSAobWluLWhlaWdodDogMzY0cHgpIHtcclxuXHJcbiAgXHJcbiAgLmN1c3RvbVN7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjZweCk7XHJcbiAgb3ZlcmZsb3cteDpoaWRkZW47XHJcbiAgIG92ZXJmbG93LXk6aGlkZGVuO1xyXG4gIH1cclxuICB9XHJcbiAgLmN1c3RvbVd7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NnB4KTtcclxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLmN1c3RvbU17XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMy41cmVtIC0gOTZweCk7XHJcbiAgIFxyXG4gICAgIG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gICAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICB9XHJcblxyXG4gQG1lZGlhIChtaW4td2lkdGg6IDU2MHB4KSB7XHJcbiAgLmN1c3RvbVN7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDRweDtcclxuICB9XHJcbiAgLmN1c3RvbVd7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIC5jdXN0b21Ne1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTA4NnB4KSB7XHJcbiAgICAuY3VzdG9tU3tcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHdpZHRoOiAxMDRweDtcclxuICAgIH1cclxuICAgIC5jdXN0b21Xe1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIC5jdXN0b21Ne1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuLy8gICAuY3VzdG9te1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLmljb25iYXJ7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 61954:
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 38699);



const _c0 = function () { return { exact: true }; };
class FooterComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    // NavigateURL(data):void{
    //   this.router.navigate(["/home/portafolio"])
    // }
    scrollToTop() {
        document.getElementById("scrollay").scrollIntoView();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 52, vars: 25, consts: [[1, ""], [1, "footers", "row", "justify-content-center"], ["routerLinkActive", "active", "routerLink", "/home/dashboard", 1, "col-xl-1", "col-md-1", "col-2", "textfooter", "text-center", 3, "routerLinkActiveOptions", "click"], [1, "margfoter"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-house"], ["fill-rule", "evenodd", "d", "M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"], ["fill-rule", "evenodd", "d", "M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"], ["routerLinkActive", "active", "routerLink", "/home/dashboard/assets", 1, "col-xl-1", "col-md-1", "col-2", "textfooter", "text-center", 3, "routerLinkActiveOptions", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-cash-coin"], ["fill-rule", "evenodd", "d", "M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"], ["d", "M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"], ["d", "M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"], ["d", "M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"], ["routerLinkActive", "active", "routerLink", "/home/portafolio/", 1, "col-xl-1", "col-md-1", "col-2", "textfooter", "text-center", 3, "routerLinkActiveOptions", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-graph-up-arrow"], ["fill-rule", "evenodd", "d", "M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"], ["routerLinkActive", "active", "routerLink", "/home/portafolio/deposit", 1, "col-xl-1", "col-md-1", "col-2", "textfooter", "text-center", 3, "routerLinkActiveOptions", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-bar-up"], ["fill-rule", "evenodd", "d", "M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"], ["routerLinkActive", "active", "routerLink", "/home/portafolio/withdrawal", 1, "col-xl-1", "col-md-1", "col-2", "textfooter", "text-center", 3, "routerLinkActiveOptions", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-bar-down"], ["fill-rule", "evenodd", "d", "M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 0)(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_div_click_3_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 5)(8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div")(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_div_click_13_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3)(15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 9)(18, "path", 10)(19, "path", 11)(20, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div")(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_div_click_25_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3)(27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div")(31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_div_click_34_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3)(36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div")(40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_div_click_43_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3)(45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div")(49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 10, "sidebar.home"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 12, "sidebar.assets"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 14, "sidebar.portfolio"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 16, "sidebar.deposit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 18, "sidebar.withdraw"));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".footers[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: var(--footer-bg-color);\n  width: 105%;\n  height: 3.5rem;\n  bottom: 0%;\n}\n\n.textfooter[_ngcontent-%COMP%] {\n  color: var(--nav-link);\n  height: 100%;\n  font-size: 0.65rem;\n}\n\n.textfooter[_ngcontent-%COMP%]:hover {\n  background-color: var(--nav-item--hover);\n}\n\n.margfoter[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n\n.textfooter[_ngcontent-%COMP%]:active {\n  color: #00c92b;\n}\n\n.textfooter.active[_ngcontent-%COMP%] {\n  color: #00c92b;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFFQSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFNQTtFQUNFLHdDQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQUtBO0VBQ0UsY0FBQTtBQUZGOztBQUtBO0VBQ0UseURBQUE7QUFGRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5mb290ZXJze1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICAvLyAgei1pbmRleDogOTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItYmctY29sb3IpO1xyXG4gIHdpZHRoOiAxMDUlO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGJvdHRvbTogMCU7XHJcbn1cclxuXHJcbi50ZXh0Zm9vdGVye1xyXG4gIGNvbG9yOiB2YXIoLS1uYXYtbGluayk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMC42NXJlbTtcclxuICAvLyBtYXJnaW4tdG9wOiAxLjRyZW07XHJcblxyXG59XHJcbi50ZXh0Zm9vdGVyOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1pdGVtLS1ob3Zlcik7XHJcbn1cclxuXHJcbi5tYXJnZm90ZXJ7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG4udGV4dGZvb3RlcjphY3RpdmUge1xyXG4gIGNvbG9yOiAjMDBjOTJiO1xyXG59XHJcbi50ZXh0Zm9vdGVyLmFjdGl2ZXtcclxuICBjb2xvcjogIzAwYzkyYjtcclxufVxyXG5cclxuLnNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAuNXJlbSAycmVtIHZhcigtLXNoYWRvd24tY29sb3IpIWltcG9ydGFudDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 17876:
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/PopUp/confirmation/confirmation.component */ 40915);
/* harmony import */ var src_app_PopUp_qr_view_qr_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/PopUp/qr-view/qr-view.component */ 68489);
/* harmony import */ var src_app_Principal_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Principal/about/about.component */ 82111);
/* harmony import */ var src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/Enum/EnumAuthentication.enum */ 81708);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/Enum/EnumPopUp.enum */ 42241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/manage-data.service */ 43607);
/* harmony import */ var src_services_GenerateQR_generate_qr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/GenerateQR/generate-qr.service */ 58508);
/* harmony import */ var src_services_login_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/login/login.service */ 3155);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);





















function HeaderComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_button_31_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.ConfirmID());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "settings.idVerify"));
  }
}

class HeaderComponent {
  constructor(translate, manage_data, generateqrservice, dialog, loginService, router, toastr) {
    this.translate = translate;
    this.manage_data = manage_data;
    this.generateqrservice = generateqrservice;
    this.dialog = dialog;
    this.loginService = loginService;
    this.router = router;
    this.toastr = toastr;
    this.isCollapsed = true;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.confirmidoption = false;
    this.faCircleExclamation = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faCircleExclamation;
    this.faEllipsisV = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faEllipsisV;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.configtheme();
      yield _this.needConfirmID();
    })();
  }

  logout() {
    var _this2 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loginService.logout().toPromise();

      _this2.loginService.removelocalStorage();

      _this2.router.navigate(['/']);

      let msg = yield _this2.translate.get('general.sessionEnded').toPromise();

      _this2.toastr.success(msg);
    })();
  }

  needConfirmID() {
    var _this3 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var data = yield _this3.loginService.GetClientConfig().toPromise();

      if (data["id_verified"] === false && data["kyc_completed"] === false) {
        _this3.confirmidoption = true; // var msgstatus = await this.translate.get('settings.idVerify').toPromise()
        // this.toastr.error(msgstatus)
      } else {
        _this3.confirmidoption = false;
      }
    })();
  }

  ConfirmQR() {
    var _this4 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true; // dialogConfig.height = "20rem";

      dialogConfig.width = "40rem";
      var data = {
        title: yield _this4.translate.get('dialog.generate').toPromise(),
        icon: 'quest',
        conten: yield _this4.translate.get('dialog.sureGenerateCode').toPromise()
      };

      _this4.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_5__.EnumEventsPopUp.ConfirmAction.toString(), data);

      let dialogRef = _this4.dialog.open(src_app_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationComponent, dialogConfig);

      _this4.subscription.add(dialogRef.afterClosed().subscribe(result => {
        if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_4__.EnumConfirmation.si.toString()) {
          _this4.GenerateQRGoogle();
        }
      }));
    })();
  }

  GenerateQRGoogle() {
    var _this5 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var msg = yield _this5.translate.get('Errores.errorQr').toPromise();

      _this5.generateqrservice.generateQR2faGoogle().subscribe(data => {
        _this5.SendatosQR(data);
      }, error => {
        console.log(msg + JSON.stringify(error));

        _this5.toastr.error(error.error.payload, msg);
      });
    })();
  }

  SendatosQR(data) {
    this.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_5__.EnumEventsPopUp.QR.toString(), data);
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    let dialogRef = this.dialog.open(src_app_PopUp_qr_view_qr_view_component__WEBPACK_IMPORTED_MODULE_2__.QrViewComponent, dialogConfig);
  }

  ChangeLanguage() {
    console.log("traductor " + this.translate.currentLang);

    if (this.translate.currentLang == "es") {
      this.translate.use("en");
    } else {
      this.translate.use("es");
    }
  }

  ChangePassword() {
    var _this6 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      var data = {
        title: yield _this6.translate.get('dialog.changePass').toPromise(),
        icon: 'quest',
        conten: yield _this6.translate.get('dialog.sureChangePass').toPromise()
      };

      _this6.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_5__.EnumEventsPopUp.ConfirmAction.toString(), data);

      let dialogRef = _this6.dialog.open(src_app_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationComponent, dialogConfig);

      _this6.subscription.add(dialogRef.afterClosed().subscribe(result => {
        if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_4__.EnumConfirmation.si.toString()) {
          _this6.router.navigate(['/changepassword']);
        }
      }));
    })();
  }

  ChangeEmail() {
    var _this7 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      var data = {
        title: yield _this7.translate.get('dialog.changeEmail').toPromise(),
        icon: 'quest',
        conten: yield _this7.translate.get('dialog.sureChangeEmail').toPromise()
      };

      _this7.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_5__.EnumEventsPopUp.ConfirmAction.toString(), data);

      let dialogRef = _this7.dialog.open(src_app_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationComponent, dialogConfig);

      _this7.subscription.add(dialogRef.afterClosed().subscribe(result => {
        if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_4__.EnumConfirmation.si.toString()) {
          _this7.router.navigate(['/changeemail']);
        }
      }));
    })();
  }

  ChangePhone() {
    var _this8 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      var data = {
        title: yield _this8.translate.get('dialog.changePhone').toPromise(),
        icon: 'quest',
        conten: yield _this8.translate.get('dialog.sureChangePhone').toPromise()
      };

      _this8.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_5__.EnumEventsPopUp.ConfirmAction.toString(), data);

      let dialogRef = _this8.dialog.open(src_app_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationComponent, dialogConfig);

      _this8.subscription.add(dialogRef.afterClosed().subscribe(result => {
        if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_4__.EnumConfirmation.si.toString()) {
          _this8.router.navigate(['/changephone']);
        }
      }));
    })();
  }

  ConfirmID() {
    this.router.navigate(['/vouched']);
  }

  About() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true;
    let dialogRef = this.dialog.open(src_app_Principal_about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent, dialogConfig);
  }

  setThema() {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "ligth");
    } else {
      localStorage.setItem("theme", "dark");
    }

    this.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_5__.EnumEventsPopUp.ChangeColor.toString(), "change");
    this.configtheme();
  }

  configtheme() {
    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      document.documentElement.className = localStorage.getItem("theme");
    })();
  }

}

HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_6__.ManageDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_services_GenerateQR_generate_qr_service__WEBPACK_IMPORTED_MODULE_7__.GenerateQRService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_services_login_login_service__WEBPACK_IMPORTED_MODULE_8__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService));
};

HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 59,
  vars: 42,
  consts: [[1, "navbar", "navbar-expand", "navbar-light", "bg-white", "topbar", "static-top", "shadow", "colornav", 2, "height", "66px", "max-width", "100%"], [1, "contenlogo"], [1, "sidebar-brand", "d-flex", "align-items-center", "justify-content-center"], [1, "sidebar-brand-icon"], ["id", "u9_img", "src", "../../../assets/images/BloxLogoed.png", 1, "logo", 2, "width", "50px", "margin-top", "3px"], [1, "sidebar-brand-text", "mx-3", "bloxText", 2, "margin-top", "3px"], [1, "navbar-nav", "ml-auto"], [1, "topbar-divider", "d-none", "d-sm-block"], [1, "nav-item", "dropdown", "no-arrow"], ["ngbDropdown", ""], ["id", "dropdownBas1", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "ic", "", "ngbDropdownToggle", "", 1, "nav-link", "dropdown-toggle", 2, "margin-top", "-20px"], [1, "mr-2", "d-none", "d-lg-inline", "small", "count"], ["src", "../../../assets/images/undraw_profile.svg", 1, "img-profile", "rounded-circle", 2, "margin-top", "9px"], [1, "icon-head", 2, "margin-left", "10px", "margin-top", "10px", 3, "icon"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", 1, "colordrow", 2, "max-width", "240px"], ["ngbDropdownItem", "", 3, "click"], [1, "fa", "fa-solid", "fa-qrcode", 2, "margin-right", "10px"], [1, "fa", "fa-solid", "fa-language", 2, "margin-right", "10px"], [1, "fa", "fa-eye-slash", 2, "margin-right", "10px"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], ["ngbDropdownItem", "", "routerLink", "/home/payment_methods/"], [1, "fa", "fa-solid", "fa-money-bill", 2, "margin-right", "10px"], [1, "icon-head", 2, "margin-right", "10px", 3, "icon"], [1, "fa", "fa-solid", "fa-key", 2, "margin-right", "10px"], [1, "fa", "fa-solid", "fa-envelope", 2, "margin-right", "10px"], [1, "fa", "fa-solid", "fa-phone", 2, "margin-right", "10px"], [1, "fa", "fa-solid", "fa-arrow-left", 2, "margin-right", "10px"], [1, "fa", "fa-solid", "fa-id-card", 2, "margin-right", "10px"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 3)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "BLOX");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ul", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "li", 8)(11, "div", 9)(12, "a", 10)(13, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "img", 12)(17, "fa-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 14)(19, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_19_listener() {
        return ctx.ConfirmQR();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "QR Google");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_22_listener() {
        return ctx.ChangeLanguage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_27_listener() {
        return ctx.setThema();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, HeaderComponent_button_31_Template, 4, 3, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](35, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_36_listener() {
        return ctx.About();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](37, "fa-icon", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_40_listener() {
        return ctx.ChangePassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](41, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](43, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](44, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_45_listener() {
        return ctx.ChangeEmail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](46, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](48, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](49, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_50_listener() {
        return ctx.ChangePhone();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](51, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](53, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](54, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_55_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](56, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](58, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](15, 16, "settings.account"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx.faEllipsisV);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](25, 18, "general.change"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](26, 20, "settings.language"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](30, 22, "settings.switchTheme"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.confirmidoption);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](35, 24, "settings.fundsIn/Out"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx.faCircleExclamation);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](39, 26, "settings.about"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](43, 28, "general.change"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](44, 30, "registration.password"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](48, 32, "general.change"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](49, 34, "registration.email"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](53, 36, "general.change"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](54, 38, "settings.phone"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](58, 40, "settings.logout"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__.FaIconComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
  styles: ["a[_ngcontent-%COMP%] {\n  color: #4e73df;\n  text-decoration: none;\n  background-color: transparent;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #224abe;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:not([href]):not([class]) {\n  color: inherit;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:not([href]):not([class]):hover {\n  color: inherit;\n  text-decoration: none;\n}\n\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5rem 1rem;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover, .nav-link[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n}\n\n.nav-link.disabled[_ngcontent-%COMP%] {\n  color: #858796;\n  pointer-events: none;\n  cursor: default;\n}\n\n.nav-tabs[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dddfeb;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-top-left-radius: 0.35rem;\n  border-top-right-radius: 0.35rem;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\n  border-color: #eaecf4 #eaecf4 #dddfeb;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.disabled[_ngcontent-%COMP%] {\n  color: #858796;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #6e707e;\n  background-color: #fff;\n  border-color: #dddfeb #dddfeb #fff;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border-radius: 0.35rem;\n}\n\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0040ff;\n}\n\n.nav-fill[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .nav-fill[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n.nav-justified[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .nav-justified[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center;\n}\n\n.tab-content[_ngcontent-%COMP%]    > .tab-pane[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.tab-content[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n}\n\n.navbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .container-sm[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .container-md[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .container-lg[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .container-xl[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap;\n}\n\n.bs-popover-right[_ngcontent-%COMP%], .bs-popover-auto[x-placement^=right][_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n\n.bs-popover-right[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%], .bs-popover-auto[x-placement^=right][_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%] {\n  left: calc(-0.5rem - 1px);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0;\n}\n\n.bs-popover-right[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::before, .bs-popover-auto[x-placement^=right][_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::before {\n  left: 0;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n\n.progress-sm[_ngcontent-%COMP%] {\n  height: 0.5rem;\n}\n\n.rotate-15[_ngcontent-%COMP%] {\n  transform: rotate(15deg);\n}\n\n.rotate-n-15[_ngcontent-%COMP%] {\n  transform: rotate(-15deg);\n}\n\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 0.65rem;\n  color: #b7b9cc;\n}\n\n.dropdown.no-arrow[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.topbar[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%] {\n  width: 25rem;\n}\n\n.topbar[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  height: auto;\n}\n\n.topbar[_ngcontent-%COMP%]   .topbar-divider[_ngcontent-%COMP%] {\n  width: 0;\n  border-right: var(--border-right--header);\n  height: 2.375rem;\n  margin: auto 1rem;\n}\n\n@media (min-width: 576px) {\n  .topbar[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .topbar[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    width: auto;\n    right: 0;\n  }\n  .topbar[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%] {\n    width: 20rem !important;\n  }\n  .topbar[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .text-truncate[_ngcontent-%COMP%] {\n    max-width: 13.375rem;\n  }\n}\n\n.topbar.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.topbar.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.topbar.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:active {\n  color: #fff;\n}\n\n.topbar.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #d1d3e2;\n}\n\n.topbar.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #b7b9cc;\n}\n\n.topbar.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:active {\n  color: #858796;\n}\n\n.bg-gradient-primary[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  background-image: linear-gradient(180deg, #ffffff 10%, #ffffff 100%);\n  background-size: cover;\n}\n\n.bg-gradient-secondary[_ngcontent-%COMP%] {\n  background-color: #858796;\n  background-image: linear-gradient(180deg, #858796 10%, #60616f 100%);\n  background-size: cover;\n}\n\n.bg-gradient-success[_ngcontent-%COMP%] {\n  background-color: #1cc88a;\n  background-image: linear-gradient(180deg, #1cc88a 10%, #13855c 100%);\n  background-size: cover;\n}\n\n.bg-gradient-info[_ngcontent-%COMP%] {\n  background-color: #36b9cc;\n  background-image: linear-gradient(180deg, #36b9cc 10%, #258391 100%);\n  background-size: cover;\n}\n\n.bg-gradient-warning[_ngcontent-%COMP%] {\n  background-color: #f6c23e;\n  background-image: linear-gradient(180deg, #f6c23e 10%, #dda20a 100%);\n  background-size: cover;\n}\n\n.bg-gradient-danger[_ngcontent-%COMP%] {\n  background-color: #e74a3b;\n  background-image: linear-gradient(180deg, #e74a3b 10%, #be2617 100%);\n  background-size: cover;\n}\n\n.bg-gradient-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fc;\n  background-image: linear-gradient(180deg, #f8f9fc 10%, #c2cbe5 100%);\n  background-size: cover;\n}\n\n.bg-gradient-dark[_ngcontent-%COMP%] {\n  background-color: #5a5c69;\n  background-image: linear-gradient(180deg, #5a5c69 10%, #373840 100%);\n  background-size: cover;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-item.dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after, .topbar[_ngcontent-%COMP%]   .nav-item.dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  width: 1rem;\n  text-align: center;\n  float: right;\n  vertical-align: 0;\n  border: 0;\n  font-weight: 900;\n  content: \"\\f105\";\n  font-family: \"Font Awesome 5 Free\";\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-item.dropdown.show[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after, .topbar[_ngcontent-%COMP%]   .nav-item.dropdown.show[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  content: \"\\f107\";\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .topbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .badge-counter[_ngcontent-%COMP%], .topbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .badge-counter[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: scale(0.7);\n  transform-origin: top right;\n  right: 0.25rem;\n  margin-top: -0.25rem;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .img-profile[_ngcontent-%COMP%], .topbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .img-profile[_ngcontent-%COMP%] {\n  height: 7rem;\n  width: 3rem;\n}\n\n.topbar[_ngcontent-%COMP%] {\n  height: 4.375rem;\n}\n\n.topbar[_ngcontent-%COMP%]   #sidebarToggleTop[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  width: 2.5rem;\n}\n\n.topbar[_ngcontent-%COMP%]   #sidebarToggleTop[_ngcontent-%COMP%]:hover {\n  background-color: #eaecf4;\n}\n\n.topbar[_ngcontent-%COMP%]   #sidebarToggleTop[_ngcontent-%COMP%]:active {\n  background-color: #dddfeb;\n}\n\n.sidebar-dark[_ngcontent-%COMP%]   #sidebarToggle[_ngcontent-%COMP%]:hover {\n  background-color: #00c92b;\n}\n\n.sidebar-dark.toggled[_ngcontent-%COMP%]   #sidebarToggle[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.5);\n}\n\nbody.sidebar-toggled[_ngcontent-%COMP%]   footer.sticky-footer[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 60px;\n  margin-left: -51px;\n}\n\n.text-uppercase[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-heading[_ngcontent-%COMP%] {\n  text-transform: uppercase !important;\n}\n\n.animated--grow-in[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%] {\n  animation-name: growIn;\n  animation-duration: 200ms;\n  animation-timing-function: transform cubic-bezier(0.18, 1.25, 0.4, 1), opacity cubic-bezier(0, 1, 0.4, 1);\n}\n\n.accordion[_ngcontent-%COMP%] {\n  overflow-anchor: none;\n}\n\n.accordion[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.accordion[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:not(:last-of-type) {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.accordion[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:not(:first-of-type) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.accordion[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]    > .card-header[_ngcontent-%COMP%] {\n  border-radius: 0;\n  margin-bottom: -1px;\n}\n\n.topbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  height: 4.375rem;\n  display: flex;\n  align-items: center;\n  padding: 0 0.75rem;\n}\n\n.topbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.topbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.topbar[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  position: static;\n}\n\n.topbar[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  width: calc(100% - 1.5rem);\n  right: 0.75rem;\n}\n\n.dropdown-menu[data-bs-popper][_ngcontent-%COMP%] {\n  top: 100% !important;\n  left: calc(100vw - 260px) !important;\n  margin-top: var(--bs-dropdown-spacer);\n}\n\n.topbar[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%] {\n  padding: 0;\n  border: none;\n  overflow: hidden;\n}\n\n.topbar[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  background-color: #5adf4e;\n  border: 1px solid #66df4e;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #fff;\n}\n\n.topbar[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  white-space: normal;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  border-left: 1px solid #e3e6f0;\n  border-right: 1px solid #e3e6f0;\n  border-bottom: 1px solid #e3e6f0;\n  line-height: 1.3rem;\n}\n\n.topbar[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .dropdown-list-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 2.5rem;\n  width: 2.5rem;\n}\n\n.topbar[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .dropdown-list-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  width: 2.5rem;\n}\n\n.topbar[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .dropdown-list-image[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  background-color: #eaecf4;\n  height: 0.75rem;\n  width: 0.75rem;\n  border-radius: 100%;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  border: 0.125rem solid #fff;\n}\n\n.topbar[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .text-truncate[_ngcontent-%COMP%] {\n  max-width: 10rem;\n}\n\n.topbar[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:active {\n  background-color: #eaecf4;\n  color: #3a3b45;\n}\n\n.contenlogo[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  margin-top: -15px;\n}\n\n.bloxText[_ngcontent-%COMP%] {\n  color: var(--bloxText-color);\n  font-weight: bold;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .badge-counter[_ngcontent-%COMP%], .topbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .badge-counter[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: scale(0.7);\n  transform-origin: top right;\n  right: 0.25rem;\n  margin-top: -0.25rem;\n}\n\n.badge-danger[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #e74a3b;\n}\n\na.badge-danger[_ngcontent-%COMP%]:hover, a.badge-danger[_ngcontent-%COMP%]:focus {\n  color: #fff;\n  background-color: #d52a1a;\n}\n\na.badge-danger[_ngcontent-%COMP%]:focus, a.badge-danger.focus[_ngcontent-%COMP%] {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(231, 74, 59, 0.5);\n}\n\n.bg-white[_ngcontent-%COMP%] {\n  --bs-bg-opacity: 1;\n  background-color: var(--bg-color-header) !important;\n}\n\n.count[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: var(--count-color);\n  margin-top: 9px;\n  font-size: 18px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  --bs-dropdown-color: var(--bs-drown-color);\n  --bs-dropdown-bg: var(--bg-color-drow);\n  --bs-dropdown-border-color: var(--bs-border-color-translucent);\n  --bs-dropdown-inner-border-radius: calc(0.375rem - 1px);\n  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);\n  --bs-dropdown-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  --bs-dropdown-link-color: var(--bs-drown-color);\n  --bs-dropdown-link-hover-color: #1e2125;\n  --bs-dropdown-link-hover-bg: #e9ecef;\n  --bs-dropdown-link-active-color: #fff;\n  --bs-dropdown-link-active-bg: #26501e;\n  --bs-dropdown-link-disabled-color: #adb5bd;\n  --bs-dropdown-header-color: #6c757d;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBREY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFMRjs7QUFRQTtFQUNFLHFCQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBTEY7O0FBUUE7RUFDRSxnQ0FBQTtBQUxGOztBQVFBO0VBQ0UsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQUxGOztBQVFBO0VBQ0UscUNBQUE7QUFMRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FBTEY7O0FBUUE7O0VBRUUsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7QUFMRjs7QUFRQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQUxGOztBQVFBO0VBQ0Usc0JBQUE7QUFMRjs7QUFRQTs7RUFFRSxXQUFBO0VBQ0EseUJBQUE7QUFMRjs7QUFRQTs7RUFFRSxjQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTs7RUFFRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FBTEY7O0FBUUE7O0VBRUUsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBTEY7O0FBUUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVNBO0VBQ0UsbUJBQUE7QUFORjs7QUFTQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVNBO0VBQ0UsT0FBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7QUFORjs7QUFhQTtFQUNFLGNBQUE7QUFWRjs7QUFhQTtFQUNFLHdCQUFBO0FBVkY7O0FBYUE7RUFDRSx5QkFBQTtBQVZGOztBQWFBO0VBQ0Usa0JBQUE7QUFWRjs7QUFhQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBVkY7O0FBYUE7RUFDRSxhQUFBO0FBVkY7O0FBY0E7RUFDRSxZQUFBO0FBWEY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFYRjs7QUFjQTtFQUNFLFFBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFYRjs7QUFlQTtFQUNFO0lBQ0Usa0JBQUE7RUFaRjtFQWNBO0lBQ0UsV0FBQTtJQUNBLFFBQUE7RUFaRjtFQWNBO0lBQ0UsdUJBQUE7RUFaRjtFQWNBO0lBQ0Usb0JBQUE7RUFaRjtBQUNGOztBQWdCQTtFQUNFLCtCQUFBO0FBZEY7O0FBaUJBO0VBQ0UsV0FBQTtBQWRGOztBQWlCQTtFQUNFLFdBQUE7QUFkRjs7QUFpQkE7RUFDRSxjQUFBO0FBZEY7O0FBaUJBO0VBQ0UsY0FBQTtBQWRGOztBQWlCQTtFQUNFLGNBQUE7QUFkRjs7QUFrQkE7RUFDRSx5QkFBQTtFQUNBLG9FQUFBO0VBQ0Esc0JBQUE7QUFmRjs7QUFrQkE7RUFDRSx5QkFBQTtFQUNBLG9FQUFBO0VBQ0Esc0JBQUE7QUFmRjs7QUFrQkE7RUFDRSx5QkFBQTtFQUNBLG9FQUFBO0VBQ0Esc0JBQUE7QUFmRjs7QUFrQkE7RUFDRSx5QkFBQTtFQUNBLG9FQUFBO0VBQ0Esc0JBQUE7QUFmRjs7QUFrQkE7RUFDRSx5QkFBQTtFQUNBLG9FQUFBO0VBQ0Esc0JBQUE7QUFmRjs7QUFrQkE7RUFDRSx5QkFBQTtFQUNBLG9FQUFBO0VBQ0Esc0JBQUE7QUFmRjs7QUFrQkE7RUFDRSx5QkFBQTtFQUNBLG9FQUFBO0VBQ0Esc0JBQUE7QUFmRjs7QUFrQkE7RUFDRSx5QkFBQTtFQUNBLG9FQUFBO0VBQ0Esc0JBQUE7QUFmRjs7QUFtQkE7O0VBRUEsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQWhCQTs7QUFtQkE7O0VBRUEsZ0JBQUE7QUFoQkE7O0FBbUJBOztFQUVBLGtCQUFBO0FBaEJBOztBQW1CQTs7RUFFQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFoQkE7O0FBbUJBOztFQUVBLFlBQUE7RUFDQSxXQUFBO0FBaEJBOztBQW1CQTtFQUNBLGdCQUFBO0FBaEJBOztBQW1CQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBaEJBOztBQW1CQTtFQUNBLHlCQUFBO0FBaEJBOztBQW1CQTtFQUNBLHlCQUFBO0FBaEJBOztBQW1CQTtFQUNFLHlCQUFBO0FBaEJGOztBQW1CQTtFQUNFLHlCQUFBO0FBaEJGOztBQW1CQTtFQUNFLFdBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBaEJGOztBQW1CQTtFQUNFLG9DQUFBO0FBaEJGOztBQW1CQTtFQUVFLHNCQUFBO0VBRUEseUJBQUE7RUFFQSx5R0FBQTtBQWhCRjs7QUFtQkE7RUFDQSxxQkFBQTtBQWhCQTs7QUFtQkE7RUFDQSxnQkFBQTtBQWhCQTs7QUFtQkE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUFoQkE7O0FBbUJBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQWhCQTs7QUFtQkE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBaEJBOztBQW9CQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFqQkE7O0FBb0JBO0VBQ0EsYUFBQTtBQWpCQTs7QUFvQkE7RUFDQSxhQUFBO0FBakJBOztBQW9CQTtFQUNBLGdCQUFBO0FBakJBOztBQW9CQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQWpCQTs7QUFtQkE7RUFDRSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7QUFoQkY7O0FBa0JBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQWZBOztBQWtCQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQWZBOztBQWtCQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBZkE7O0FBa0JBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQWZBOztBQWtCQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBZkE7O0FBa0JBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBZkE7O0FBa0JBO0VBQ0EsZ0JBQUE7QUFmQTs7QUFrQkE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFmQTs7QUFrQkE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBZkY7O0FBbUJBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQWhCQTs7QUFtQkE7O0VBRUUsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBaEJGOztBQW1CQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsVUFBQTtFQUNBLCtDQUFBO0FBaEJGOztBQW1CQTtFQUNFLGtCQUFBO0VBQ0EsbURBQUE7QUFoQkY7O0FBbUJBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBaEJGOztBQW1CQTtFQUNFLDBDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4REFBQTtFQUNBLHVEQUFBO0VBQ0EsNERBQUE7RUFDQSwyREFBQTtFQUNBLCtDQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwwQ0FBQTtFQUNBLG1DQUFBO0FBaEJGOztBQW9CQTtFQUNFLHlEQUFBO0FBakJGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICM0ZTczZGY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzIyNGFiZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6bm90KFtocmVmXSk6bm90KFtjbGFzc10pIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6bm90KFtocmVmXSk6bm90KFtjbGFzc10pOmhvdmVyIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4ubmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG59XHJcblxyXG4ubmF2LWxpbms6aG92ZXIsIC5uYXYtbGluazpmb2N1cyB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubmF2LWxpbmsuZGlzYWJsZWQge1xyXG4gIGNvbG9yOiAjODU4Nzk2O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLm5hdi10YWJzIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGZlYjtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtaXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtbGluayB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zNXJlbTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zNXJlbTtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtbGluazpob3ZlciwgLm5hdi10YWJzIC5uYXYtbGluazpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZWFlY2Y0ICNlYWVjZjQgI2RkZGZlYjtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtbGluay5kaXNhYmxlZCB7XHJcbiAgY29sb3I6ICM4NTg3OTY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUsXHJcbi5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjNmU3MDdlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGRkZmViICNkZGRmZWIgI2ZmZjtcclxufVxyXG5cclxuLm5hdi10YWJzIC5kcm9wZG93bi1tZW51IHtcclxuICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5uYXYtcGlsbHMgLm5hdi1saW5rIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xyXG59XHJcblxyXG4ubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsXHJcbi5uYXYtcGlsbHMgLnNob3cgPiAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQwZmY7XHJcbn1cclxuXHJcbi5uYXYtZmlsbCA+IC5uYXYtbGluayxcclxuLm5hdi1maWxsIC5uYXYtaXRlbSB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2LWp1c3RpZmllZCA+IC5uYXYtbGluayxcclxuLm5hdi1qdXN0aWZpZWQgLm5hdi1pdGVtIHtcclxuICBmbGV4LWJhc2lzOiAwO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWItY29udGVudCA+IC50YWItcGFuZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRhYi1jb250ZW50ID4gLmFjdGl2ZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxufVxyXG5cclxuLm5hdmJhciAuY29udGFpbmVyLFxyXG4ubmF2YmFyIC5jb250YWluZXItZmx1aWQsIC5uYXZiYXIgLmNvbnRhaW5lci1zbSwgLm5hdmJhciAuY29udGFpbmVyLW1kLCAubmF2YmFyIC5jb250YWluZXItbGcsIC5uYXZiYXIgLmNvbnRhaW5lci14bCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLXRvcDogMC4zMTI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjMxMjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG5cclxuLmJzLXBvcG92ZXItcmlnaHQsIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwicmlnaHRcIl0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbn1cclxuXHJcbi5icy1wb3BvdmVyLXJpZ2h0ID4gLmFycm93LCAuYnMtcG9wb3Zlci1hdXRvW3gtcGxhY2VtZW50Xj1cInJpZ2h0XCJdID4gLmFycm93IHtcclxuICBsZWZ0OiBjYWxjKC0wLjVyZW0gLSAxcHgpO1xyXG4gIHdpZHRoOiAwLjVyZW07XHJcbiAgaGVpZ2h0OiAxcmVtO1xyXG4gIG1hcmdpbjogMC4zcmVtIDA7XHJcbn1cclxuXHJcbi5icy1wb3BvdmVyLXJpZ2h0ID4gLmFycm93OjpiZWZvcmUsIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwicmlnaHRcIl0gPiAuYXJyb3c6OmJlZm9yZSB7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItd2lkdGg6IDAuNXJlbSAwLjVyZW0gMC41cmVtIDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLnByb2dyZXNzLXNtIHtcclxuICBoZWlnaHQ6IC41cmVtO1xyXG59XHJcblxyXG4ucm90YXRlLTE1IHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XHJcbn1cclxuXHJcbi5yb3RhdGUtbi0xNSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcclxufVxyXG5cclxuLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbn1cclxuXHJcbi5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taGVhZGVyIHtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMC42NXJlbTtcclxuICBjb2xvcjogI2I3YjljYztcclxufVxyXG5cclxuLmRyb3Bkb3duLm5vLWFycm93IC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLnRvcGJhciAubmF2YmFyLXNlYXJjaCB7XHJcbiAgd2lkdGg6IDI1cmVtO1xyXG59XHJcblxyXG4udG9wYmFyIC5uYXZiYXItc2VhcmNoIGlucHV0IHtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4udG9wYmFyIC50b3BiYXItZGl2aWRlciB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1ib3JkZXItcmlnaHQtLWhlYWRlcik7XHJcbiAgaGVpZ2h0OiBjYWxjKDQuMzc1cmVtIC0gMnJlbSk7XHJcbiAgbWFyZ2luOiBhdXRvIDFyZW07XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAudG9wYmFyIC5kcm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC50b3BiYXIgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC50b3BiYXIgLmRyb3Bkb3duLWxpc3Qge1xyXG4gICAgd2lkdGg6IDIwcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC50b3BiYXIgLmRyb3Bkb3duLWxpc3QgLmRyb3Bkb3duLWl0ZW0gLnRleHQtdHJ1bmNhdGUge1xyXG4gICAgbWF4LXdpZHRoOiAxMy4zNzVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnRvcGJhci5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG59XHJcblxyXG4udG9wYmFyLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udG9wYmFyLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6YWN0aXZlIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRvcGJhci5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgY29sb3I6ICNkMWQzZTI7XHJcbn1cclxuXHJcbi50b3BiYXIubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiAjYjdiOWNjO1xyXG59XHJcblxyXG4udG9wYmFyLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmFjdGl2ZSB7XHJcbiAgY29sb3I6ICM4NTg3OTY7XHJcbn1cclxuXHJcblxyXG4uYmctZ3JhZGllbnQtcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmZmZmIDEwJSwgI2ZmZmZmZiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uYmctZ3JhZGllbnQtc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU4Nzk2O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM4NTg3OTYgMTAlLCAjNjA2MTZmIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5iZy1ncmFkaWVudC1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNjODhhO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxY2M4OGEgMTAlLCAjMTM4NTVjIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5iZy1ncmFkaWVudC1pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzZiOWNjO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMzNmI5Y2MgMTAlLCAjMjU4MzkxIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5iZy1ncmFkaWVudC13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjMjNlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmNmMyM2UgMTAlLCAjZGRhMjBhIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5iZy1ncmFkaWVudC1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRhM2I7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2U3NGEzYiAxMCUsICNiZTI2MTcgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmJnLWdyYWRpZW50LWxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZjO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmOGY5ZmMgMTAlLCAjYzJjYmU1IDEwMCUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5iZy1ncmFkaWVudC1kYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE1YzY5O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM1YTVjNjkgMTAlLCAjMzczODQwIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcblxyXG4uc2lkZWJhciAubmF2LWl0ZW0uZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIsXHJcbi50b3BiYXIgLm5hdi1pdGVtLmRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxud2lkdGg6IDFyZW07XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuZmxvYXQ6IHJpZ2h0O1xyXG52ZXJ0aWNhbC1hbGlnbjogMDtcclxuYm9yZGVyOiAwO1xyXG5mb250LXdlaWdodDogOTAwO1xyXG5jb250ZW50OiAnXFxmMTA1JztcclxuZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJztcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1pdGVtLmRyb3Bkb3duLnNob3cgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIsXHJcbi50b3BiYXIgLm5hdi1pdGVtLmRyb3Bkb3duLnNob3cgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG5jb250ZW50OiAnXFxmMTA3JztcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1pdGVtIC5uYXYtbGluayxcclxuLnRvcGJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIC5iYWRnZS1jb3VudGVyLFxyXG4udG9wYmFyIC5uYXYtaXRlbSAubmF2LWxpbmsgLmJhZGdlLWNvdW50ZXIge1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxudHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xyXG5yaWdodDogLjI1cmVtO1xyXG5tYXJnaW4tdG9wOiAtLjI1cmVtO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIC5pbWctcHJvZmlsZSxcclxuLnRvcGJhciAubmF2LWl0ZW0gLm5hdi1saW5rIC5pbWctcHJvZmlsZSB7XHJcbmhlaWdodDogN3JlbTtcclxud2lkdGg6IDNyZW07XHJcbn1cclxuXHJcbi50b3BiYXIge1xyXG5oZWlnaHQ6IDQuMzc1cmVtO1xyXG59XHJcblxyXG4udG9wYmFyICNzaWRlYmFyVG9nZ2xlVG9wIHtcclxuaGVpZ2h0OiAyLjVyZW07XHJcbndpZHRoOiAyLjVyZW07XHJcbn1cclxuXHJcbi50b3BiYXIgI3NpZGViYXJUb2dnbGVUb3A6aG92ZXIge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZWFlY2Y0O1xyXG59XHJcblxyXG4udG9wYmFyICNzaWRlYmFyVG9nZ2xlVG9wOmFjdGl2ZSB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNkZGRmZWI7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWRhcmsgI3NpZGViYXJUb2dnbGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGM5MmI7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWRhcmsudG9nZ2xlZCAjc2lkZWJhclRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbmJvZHkuc2lkZWJhci10b2dnbGVkIGZvb3Rlci5zdGlja3ktZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ297XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC01MXB4O1xyXG4gIH1cclxuXHJcbi50ZXh0LXVwcGVyY2FzZSwgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1oZWFkZXIsIC5zaWRlYmFyIC5zaWRlYmFyLWhlYWRpbmcge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFuaW1hdGVkLS1ncm93LWluLCAuc2lkZWJhciAubmF2LWl0ZW0gLmNvbGxhcHNlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBncm93SW47XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGdyb3dJbjtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjAwbXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMDBtcztcclxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xOCwgMS4yNSwgMC40LCAxKSwgb3BhY2l0eSBjdWJpYy1iZXppZXIoMCwgMSwgMC40LCAxKTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuMTgsIDEuMjUsIDAuNCwgMSksIG9wYWNpdHkgY3ViaWMtYmV6aWVyKDAsIDEsIDAuNCwgMSk7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24ge1xyXG5vdmVyZmxvdy1hbmNob3I6IG5vbmU7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24gPiAuY2FyZCB7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hY2NvcmRpb24gPiAuY2FyZDpub3QoOmxhc3Qtb2YtdHlwZSkge1xyXG5ib3JkZXItYm90dG9tOiAwO1xyXG5ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG5cclxuLmFjY29yZGlvbiA+IC5jYXJkOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG5ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG5cclxuLmFjY29yZGlvbiA+IC5jYXJkID4gLmNhcmQtaGVhZGVyIHtcclxuYm9yZGVyLXJhZGl1czogMDtcclxubWFyZ2luLWJvdHRvbTogLTFweDtcclxufVxyXG5cclxuXHJcbi50b3BiYXIgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbmhlaWdodDogNC4zNzVyZW07XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbnBhZGRpbmc6IDAgMC43NXJlbTtcclxufVxyXG5cclxuLnRvcGJhciAubmF2LWl0ZW0gLm5hdi1saW5rOmZvY3VzIHtcclxub3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnRvcGJhciAubmF2LWl0ZW06Zm9jdXMge1xyXG5vdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4udG9wYmFyIC5kcm9wZG93biB7XHJcbnBvc2l0aW9uOiBzdGF0aWM7XHJcbn1cclxuXHJcbi50b3BiYXIgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcclxud2lkdGg6IGNhbGMoMTAwJSAtIDEuNXJlbSk7XHJcbnJpZ2h0OiAwLjc1cmVtO1xyXG59XHJcbi5kcm9wZG93bi1tZW51W2RhdGEtYnMtcG9wcGVyXSB7XHJcbiAgdG9wOiAxMDAlIWltcG9ydGFudDtcclxuICBsZWZ0OiAgY2FsYygxMDB2dyAtIDI2MHB4KSAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiB2YXIoLS1icy1kcm9wZG93bi1zcGFjZXIpO1xyXG59XHJcbi50b3BiYXIgLmRyb3Bkb3duLWxpc3Qge1xyXG5wYWRkaW5nOiAwO1xyXG5ib3JkZXI6IG5vbmU7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50b3BiYXIgLmRyb3Bkb3duLWxpc3QgLmRyb3Bkb3duLWhlYWRlciB7XHJcbmJhY2tncm91bmQtY29sb3I6ICM1YWRmNGU7XHJcbmJvcmRlcjogMXB4IHNvbGlkICM2NmRmNGU7XHJcbnBhZGRpbmctdG9wOiAwLjc1cmVtO1xyXG5wYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcclxuY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50b3BiYXIgLmRyb3Bkb3duLWxpc3QgLmRyb3Bkb3duLWl0ZW0ge1xyXG53aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG5wYWRkaW5nLXRvcDogMC41cmVtO1xyXG5wYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG5ib3JkZXItbGVmdDogMXB4IHNvbGlkICNlM2U2ZjA7XHJcbmJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlM2U2ZjA7XHJcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlNmYwO1xyXG5saW5lLWhlaWdodDogMS4zcmVtO1xyXG59XHJcblxyXG4udG9wYmFyIC5kcm9wZG93bi1saXN0IC5kcm9wZG93bi1pdGVtIC5kcm9wZG93bi1saXN0LWltYWdlIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5oZWlnaHQ6IDIuNXJlbTtcclxud2lkdGg6IDIuNXJlbTtcclxufVxyXG5cclxuLnRvcGJhciAuZHJvcGRvd24tbGlzdCAuZHJvcGRvd24taXRlbSAuZHJvcGRvd24tbGlzdC1pbWFnZSBpbWcge1xyXG5oZWlnaHQ6IDIuNXJlbTtcclxud2lkdGg6IDIuNXJlbTtcclxufVxyXG5cclxuLnRvcGJhciAuZHJvcGRvd24tbGlzdCAuZHJvcGRvd24taXRlbSAuZHJvcGRvd24tbGlzdC1pbWFnZSAuc3RhdHVzLWluZGljYXRvciB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNlYWVjZjQ7XHJcbmhlaWdodDogMC43NXJlbTtcclxud2lkdGg6IDAuNzVyZW07XHJcbmJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYm90dG9tOiAwO1xyXG5yaWdodDogMDtcclxuYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4udG9wYmFyIC5kcm9wZG93bi1saXN0IC5kcm9wZG93bi1pdGVtIC50ZXh0LXRydW5jYXRlIHtcclxubWF4LXdpZHRoOiAxMHJlbTtcclxufVxyXG5cclxuLnRvcGJhciAuZHJvcGRvd24tbGlzdCAuZHJvcGRvd24taXRlbTphY3RpdmUge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZWFlY2Y0O1xyXG5jb2xvcjogIzNhM2I0NTtcclxufVxyXG5cclxuLmNvbnRlbmxvZ297XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcblxyXG59XHJcblxyXG4uYmxveFRleHR7XHJcbmNvbG9yOiB2YXIoLS1ibG94VGV4dC1jb2xvcik7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIC5iYWRnZS1jb3VudGVyLFxyXG4udG9wYmFyIC5uYXYtaXRlbSAubmF2LWxpbmsgLmJhZGdlLWNvdW50ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xyXG4gIHJpZ2h0OiAuMjVyZW07XHJcbiAgbWFyZ2luLXRvcDogLS4yNXJlbTtcclxufVxyXG5cclxuLmJhZGdlLWRhbmdlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGEzYjtcclxufVxyXG5cclxuYS5iYWRnZS1kYW5nZXI6aG92ZXIsIGEuYmFkZ2UtZGFuZ2VyOmZvY3VzIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDUyYTFhO1xyXG59XHJcblxyXG5hLmJhZGdlLWRhbmdlcjpmb2N1cywgYS5iYWRnZS1kYW5nZXIuZm9jdXMge1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjMxLCA3NCwgNTksIDAuNSk7XHJcbn1cclxuXHJcbi5iZy13aGl0ZSB7XHJcbiAgLS1icy1iZy1vcGFjaXR5OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLWhlYWRlcikhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY291bnR7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyBcclxuICBjb2xvcjogdmFyKC0tY291bnQtY29sb3IpOyBcclxuICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudXtcclxuICAtLWJzLWRyb3Bkb3duLWNvbG9yOiB2YXIoLS1icy1kcm93bi1jb2xvcik7XHJcbiAgLS1icy1kcm9wZG93bi1iZzogdmFyKC0tYmctY29sb3ItZHJvdyk7XHJcbiAgLS1icy1kcm9wZG93bi1ib3JkZXItY29sb3I6IHZhcigtLWJzLWJvcmRlci1jb2xvci10cmFuc2x1Y2VudCk7XHJcbiAgLS1icy1kcm9wZG93bi1pbm5lci1ib3JkZXItcmFkaXVzOiBjYWxjKDAuMzc1cmVtIC0gMXB4KTtcclxuICAtLWJzLWRyb3Bkb3duLWRpdmlkZXItYmc6IHZhcigtLWJzLWJvcmRlci1jb2xvci10cmFuc2x1Y2VudCk7XHJcbiAgLS1icy1kcm9wZG93bi1ib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgLS1icy1kcm9wZG93bi1saW5rLWNvbG9yOiB2YXIoLS1icy1kcm93bi1jb2xvcik7XHJcbiAgLS1icy1kcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAjMWUyMTI1O1xyXG4gIC0tYnMtZHJvcGRvd24tbGluay1ob3Zlci1iZzogI2U5ZWNlZjtcclxuICAtLWJzLWRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAjZmZmO1xyXG4gIC0tYnMtZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICMyNjUwMWU7XHJcbiAgLS1icy1kcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAjYWRiNWJkO1xyXG4gIC0tYnMtZHJvcGRvd24taGVhZGVyLWNvbG9yOiAjNmM3NTdkO1xyXG5cclxufVxyXG5cclxuLnNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAuNXJlbSAycmVtIHZhcigtLXNoYWRvd24tY29sb3IpIWltcG9ydGFudDtcclxufSJdfQ== */"]
});

/***/ }),

/***/ 20129:
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ 83278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 38699);





const _c0 = function () { return { exact: true }; };
class SidebarComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.sizeDisplay = 'phone' || 0;
        this.sildebar = true;
        this.porfolio = false;
        this.mediaQuery();
    }
    ngOnInit() {
    }
    change() {
        this.sildebar = false;
    }
    refre() {
        this.sildebar = true;
    }
    drowport() {
        this.porfolio = !this.porfolio;
    }
    mediaQuery() {
        this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.Breakpoints.Small)
            .subscribe((state) => {
            if (state.matches) {
                //AQUI SERA TRUE SOLO SI ESTA EN RESOLUCION DE CELULAR
                this.sildebar = false;
            }
        });
        this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.Breakpoints.Web)
            .subscribe((state) => {
            if (state.matches) {
                //AQUI SERA TRUE SOLO SI ES RESOLUCION PARA WEB
                this.sildebar = true;
            }
        });
    }
    scrollToTop() {
        document.getElementById("scrollay").scrollIntoView();
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.BreakpointObserver)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 44, vars: 25, consts: [[1, "nav", "navbar-nav", "bg-gradient-primary", "sidebar", "sidebar-dark", "accordion"], [1, "nav-item"], ["routerLinkActive", "active", "routerLink", "/home/dashboard", 1, "nav-link", 3, "routerLinkActiveOptions", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-house"], ["fill-rule", "evenodd", "d", "M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"], ["fill-rule", "evenodd", "d", "M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"], ["routerLinkActive", "active", "routerLink", "/home/dashboard/assets", 1, "nav-link", 3, "routerLinkActiveOptions", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-cash-coin"], ["fill-rule", "evenodd", "d", "M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"], ["d", "M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"], ["d", "M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"], ["d", "M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"], ["routerLinkActive", "active", "routerLink", "/home/portafolio/", 1, "nav-link", 3, "routerLinkActiveOptions", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-graph-up-arrow"], ["fill-rule", "evenodd", "d", "M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"], ["routerLinkActive", "active", "routerLink", "/home/portafolio/deposit", 1, "nav-link", 3, "routerLinkActiveOptions", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-bar-up"], ["fill-rule", "evenodd", "d", "M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"], ["routerLinkActive", "active", "routerLink", "/home/portafolio/withdrawal", 1, "nav-link", 3, "routerLinkActiveOptions", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-bar-down"], ["fill-rule", "evenodd", "d", "M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"], [1, "sidebar-divider", "d-none", "d-md-block", "colordiv"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "ul", 0)(2, "li", 1)(3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_3_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 4)(6, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 1)(11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_11_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "path", 8)(14, "path", 9)(15, "path", 10)(16, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 1)(21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_21_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div")(28, "li", 1)(29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_29_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li", 1)(36, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_36_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "hr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 10, "sidebar.home"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 12, "sidebar.assets"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 14, "sidebar.portfolio"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 16, "sidebar.deposit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 18, "sidebar.withdraw"));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: [".bg-gradient-primary[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  background-image: linear-gradient(180deg, var(--bg-gradient-primary), var(--bg-gradient-secundary));\n  background-size: cover;\n}\n\n.bg-gradient-secondary[_ngcontent-%COMP%] {\n  background-color: #858796;\n  background-image: linear-gradient(180deg, #858796 10%, #60616f 100%);\n  background-size: cover;\n}\n\n.bg-gradient-success[_ngcontent-%COMP%] {\n  background-color: #1cc88a;\n  background-image: linear-gradient(180deg, #1cc88a 10%, #13855c 100%);\n  background-size: cover;\n}\n\n.bg-gradient-info[_ngcontent-%COMP%] {\n  background-color: #36b9cc;\n  background-image: linear-gradient(180deg, #36b9cc 10%, #258391 100%);\n  background-size: cover;\n}\n\n.bg-gradient-warning[_ngcontent-%COMP%] {\n  background-color: #f6c23e;\n  background-image: linear-gradient(180deg, #f6c23e 10%, #dda20a 100%);\n  background-size: cover;\n}\n\n.bg-gradient-danger[_ngcontent-%COMP%] {\n  background-color: #e74a3b;\n  background-image: linear-gradient(180deg, #e74a3b 10%, #be2617 100%);\n  background-size: cover;\n}\n\n.bg-gradient-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fc;\n  background-image: linear-gradient(180deg, #f8f9fc 10%, #a6ee7c 100%);\n  background-size: cover;\n}\n\n.bg-gradient-dark[_ngcontent-%COMP%] {\n  background-color: #5a5c69;\n  background-image: linear-gradient(180deg, #5a5c69 10%, #373840 100%);\n  background-size: cover;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 6.5rem;\n  min-height: calc(100vh - 66px) !important;\n}\n\n@media (min-width: 348px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 6.5rem;\n    min-height: calc(100vh - 66px) !important;\n  }\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.75rem 1rem;\n  width: 6.5rem;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  display: block;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: var(--nav-link);\n}\n\n.nav-link[_ngcontent-%COMP%]:active {\n  color: #00c92b;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .navbar-nav[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  color: #00c92b;\n}\n\n.nav-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--nav-item--hover);\n}\n\n.colordiv[_ngcontent-%COMP%] {\n  color: var(--divider-color-sildebar);\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkFBQTtFQUNBLG1HQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0Esb0VBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxvRUFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLG9FQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0Esb0VBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxvRUFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLG9FQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0Esb0VBQUE7RUFDQSxzQkFBQTtBQURGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHlDQUFBO0FBRkY7O0FBR0U7RUFIRjtJQUlJLGFBQUE7SUFDQSx5Q0FBQTtFQUFGO0FBQ0Y7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBRkY7O0FBT0E7RUFDRSxzQkFBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtBQUpGOztBQVFBO0VBQ0UsY0FBQTtBQUxGOztBQU9BO0VBQ0Usd0NBQUE7QUFKRjs7QUFPQTtFQUNFLG9DQUFBO0FBSkY7O0FBT0E7RUFDRSx5REFBQTtBQUpGIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5iZy1ncmFkaWVudC1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLWdyYWRpZW50LXByaW1hcnkpLCB2YXIoLS1iZy1ncmFkaWVudC1zZWN1bmRhcnkpKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uYmctZ3JhZGllbnQtc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU4Nzk2O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM4NTg3OTYgMTAlLCAjNjA2MTZmIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5iZy1ncmFkaWVudC1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNjODhhO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxY2M4OGEgMTAlLCAjMTM4NTVjIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5iZy1ncmFkaWVudC1pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzZiOWNjO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMzNmI5Y2MgMTAlLCAjMjU4MzkxIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5iZy1ncmFkaWVudC13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjMjNlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmNmMyM2UgMTAlLCAjZGRhMjBhIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5iZy1ncmFkaWVudC1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRhM2I7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2U3NGEzYiAxMCUsICNiZTI2MTcgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmJnLWdyYWRpZW50LWxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZjO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmOGY5ZmMgMTAlLCAjYTZlZTdjIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5iZy1ncmFkaWVudC1kYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE1YzY5O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM1YTVjNjkgMTAlLCAjMzczODQwIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcblxyXG4uc2lkZWJhciB7XHJcbiAgd2lkdGg6IDYuNXJlbTtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjZweCkgIWltcG9ydGFudDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogMzQ4cHgpIHtcclxuICAgIHdpZHRoOiA2LjVyZW07XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjZweCkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLnNpZGViYXIgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICB3aWR0aDogNi41cmVtO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMC42NXJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbi8vZWZlY3RyIFxyXG4ubmF2LWxpbmsge1xyXG4gIGNvbG9yOnZhcigtLW5hdi1saW5rKTtcclxufVxyXG5cclxuLm5hdi1saW5rOmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwMGM5MmI7XHJcbn1cclxuXHJcblxyXG4ubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlLCAubmF2YmFyLW5hdiAuc2hvdz4ubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjMDBjOTJiO1xyXG59XHJcbi5uYXYtaXRlbTpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtaXRlbS0taG92ZXIpO1xyXG59XHJcblxyXG4uY29sb3JkaXZ7XHJcbiAgY29sb3I6IHZhcigtLWRpdmlkZXItY29sb3Itc2lsZGViYXIpO1xyXG59XHJcblxyXG4uc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC41cmVtIDJyZW0gdmFyKC0tc2hhZG93bi1jb2xvcikhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ 76583:
/*!*****************************************************************!*\
  !*** ./src/app/shared/scroll-to-top/scroll-to-top.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollToTopComponent": () => (/* binding */ ScrollToTopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ScrollToTopComponent {
    constructor() {
        this.windowScrolled = false;
    }
    scrollToTop() {
        document.getElementById("scrollay").scrollIntoView();
    }
    ngOnInit() {
    }
}
ScrollToTopComponent.ɵfac = function ScrollToTopComponent_Factory(t) { return new (t || ScrollToTopComponent)(); };
ScrollToTopComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollToTopComponent, selectors: [["app-scroll-to-top"]], decls: 3, vars: 0, consts: [[1, "btnscroll"], ["type", "button", "data-toggle", "button", "aria-pressed", "true", 1, "btn", "active", 3, "click"], [1, "fas", "fa-angle-double-up"]], template: function ScrollToTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollToTopComponent_Template_button_click_1_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: [".scroll-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n}\n\n.show-scrollTop[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: all 0.2s ease-in-out;\n  border-radius: 50%;\n  background-color: hotpink;\n}\n\n.btnscroll[_ngcontent-%COMP%] {\n  right: 6vw;\n  bottom: 47px;\n  position: absolute;\n  z-index: 9;\n  color: var(--table-scroll);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC10by10b3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFDRztFQUNDLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUFDSiIsImZpbGUiOiJzY3JvbGwtdG8tdG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC10by10b3Age1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICAgfVxyXG4gICAuc2hvdy1zY3JvbGxUb3Age1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xyXG5cclxuICAgfVxyXG5cclxuLmJ0bnNjcm9sbHtcclxuICAgIHJpZ2h0OiA2dnc7XHJcbiAgICBib3R0b206IDQ3cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgY29sb3I6IHZhcigtLXRhYmxlLXNjcm9sbCk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    dev: false
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

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 81708:
/*!****************************************************!*\
  !*** ./src/models/Enum/EnumAuthentication.enum.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnumAuthentication": () => (/* binding */ EnumAuthentication),
/* harmony export */   "EnumConfirmation": () => (/* binding */ EnumConfirmation)
/* harmony export */ });
var EnumAuthentication;
(function (EnumAuthentication) {
    EnumAuthentication["google"] = "GOOGLE_AUTH";
    EnumAuthentication["sms"] = "SMS";
    EnumAuthentication["email"] = "EMAIL";
    EnumAuthentication["change_password"] = "CHANGE_PASSWORD";
    EnumAuthentication["register"] = "Register";
    EnumAuthentication["default"] = "Default";
    EnumAuthentication["none"] = "NONE";
})(EnumAuthentication || (EnumAuthentication = {}));
var EnumConfirmation;
(function (EnumConfirmation) {
    EnumConfirmation["si"] = "Si";
    EnumConfirmation["no"] = "no";
    EnumConfirmation["delete"] = "delete";
    EnumConfirmation["default"] = "default";
    EnumConfirmation["success"] = "success";
    EnumConfirmation["error"] = "error";
})(EnumConfirmation || (EnumConfirmation = {}));


/***/ }),

/***/ 42241:
/*!*******************************************!*\
  !*** ./src/models/Enum/EnumPopUp.enum.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnumEventsPopUp": () => (/* binding */ EnumEventsPopUp)
/* harmony export */ });
var EnumEventsPopUp;
(function (EnumEventsPopUp) {
    EnumEventsPopUp["buy_sell"] = "buy_sell";
    EnumEventsPopUp["ConfirmAction"] = "ConfirmAction";
    EnumEventsPopUp["QR"] = "QR";
    EnumEventsPopUp["ChangeColor"] = "ChangeColor";
    EnumEventsPopUp["FundsOption"] = "FundsOption";
    EnumEventsPopUp["DetailsPortfolio"] = "DetailsPortfolio";
    EnumEventsPopUp["QRReaderWithdraw"] = "QRReader-Withdraw";
    EnumEventsPopUp["ActionPaymentMethods"] = "ActionPaymentMethods";
    EnumEventsPopUp["IdVouched"] = "IdVouched";
})(EnumEventsPopUp || (EnumEventsPopUp = {}));


/***/ }),

/***/ 52467:
/*!******************************************************************!*\
  !*** ./src/models/Portafolio/portfolioBalanceForSymbol.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalanceForSymbolModel": () => (/* binding */ BalanceForSymbolModel),
/* harmony export */   "BalanceForSymbolModelResponse": () => (/* binding */ BalanceForSymbolModelResponse)
/* harmony export */ });
class BalanceForSymbolModelResponse {
}
class BalanceForSymbolModel {
}


/***/ }),

/***/ 17059:
/*!**************************************************************!*\
  !*** ./src/services/AppSettingsInit/app-settings.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSettingsService": () => (/* binding */ AppSettingsService)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);




class AppSettingsService {
  constructor(http) {
    this.http = http;
  }

  loadSettings() {
    var _this = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var ip = yield _this.GetIP();

      if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.dev) {
        return yield _this.http.get('assets/configuration/configuration.prod.json').toPromise().then(data => {
          JSON.stringify(data, (indice, valor) => {
            console.log("enviromenttt " + valor.APIS.ApiBase);

            if (valor.General.Ip === "") {
              valor.General.Ip = ip;
            }
          });
          _this.appConfig = data;
        });
      } else {
        return yield _this.http.get('assets/configuration/configuration.json').toPromise().then(data => {
          JSON.stringify(data, (indice, valor) => {
            if (valor.General.Ip === "") {
              valor.General.Ip = ip;
            }
          });
          _this.appConfig = data;
        });
      }
    })();
  }

  getapidatos() {
    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }

    return this.appConfig;
  }

  GetIP() {
    let ip = location.host;
    let n = ip.indexOf(":");

    if (n !== -1) {
      ip = ip.substring(0, n);
    }

    return ip;
  }

}

AppSettingsService.ɵfac = function AppSettingsService_Factory(t) {
  return new (t || AppSettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};

AppSettingsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AppSettingsService,
  factory: AppSettingsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 64022:
/*!***********************************************!*\
  !*** ./src/services/Client/client.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientService": () => (/* binding */ ClientService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/AppSettingsInit/app-settings.service */ 17059);





class ClientService {
    constructor(http, settingsService) {
        this.http = http;
        this.settingsService = settingsService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Accept': 'application/json; odata=verbose',
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Allow': 'GET, POST, OPTIONS, PUT, DELETE'
        });
        this.options = { headers: this.headers };
        this.ApiBase = this.settingsService.getapidatos().APIS.ApiBase;
        this.ApiGetClientConfig = this.settingsService.getapidatos().APIS.ApiGetClientConfig;
    }
    GetClientConfig() {
        return this.http.get(`${this.ApiBase}${this.ApiGetClientConfig}`, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
}
ClientService.ɵfac = function ClientService_Factory(t) { return new (t || ClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_services_AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService)); };
ClientService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ClientService, factory: ClientService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 55063:
/*!*******************************************************************!*\
  !*** ./src/services/FormValidation/passwordStrength.validator.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordStrengthValidator": () => (/* binding */ PasswordStrengthValidator)
/* harmony export */ });
const PasswordStrengthValidator = function (control) {
    let value = control.value || '';
    let msg = "";
    if (!value) {
        return null;
    }
    let upperCaseCharacters = /[A-Z]+/g;
    let lowerCaseCharacters = /[a-z]+/g;
    let numberCharacters = /[0-9]+/g;
    let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (upperCaseCharacters.test(value) === false || lowerCaseCharacters.test(value) === false || numberCharacters.test(value) === false || specialCharacters.test(value) === false) {
        return {
            passwordStrength: 'La contraseña debe contener al menos dos de los siguientes: números, letras minúsculas, letras mayúsculas o caracteres especiales.'
        };
    }
    return null;
};


/***/ }),

/***/ 58508:
/*!********************************************************!*\
  !*** ./src/services/GenerateQR/generate-qr.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateQRService": () => (/* binding */ GenerateQRService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AppSettingsInit/app-settings.service */ 17059);





class GenerateQRService {
    constructor(http, settingsService) {
        this.http = http;
        this.settingsService = settingsService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Accept': 'application/json; odata=verbose',
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Allow': 'GET, POST, OPTIONS, PUT, DELETE'
        });
        this.options = { headers: this.headers };
        this.ApiBase = this.settingsService.getapidatos().APIS.ApiBase;
        this.ApiGenerateQRGoogle = this.settingsService.getapidatos().APIS.ApiGenerateQRGoogle;
        this.ApiGenerateQRSMS = this.settingsService.getapidatos().APIS.ApiGenerateQRSMS;
        this.ApiGenerateQREmail = this.settingsService.getapidatos().APIS.ApiGenerateQREmail;
    }
    generateQR2faGoogle() {
        return this.http.get(this.ApiBase + this.ApiGenerateQRGoogle, this.options);
    }
    generateQR2faSMS(data) {
        return this.http.post(this.ApiBase + this.ApiGenerateQRSMS, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    generateQR2faEmail(data) {
        return this.http.post(this.ApiBase + this.ApiGenerateQREmail, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
}
GenerateQRService.ɵfac = function GenerateQRService_Factory(t) { return new (t || GenerateQRService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService)); };
GenerateQRService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: GenerateQRService, factory: GenerateQRService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 41514:
/*!***********************************************!*\
  !*** ./src/services/Guard/Dashboard.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardGuard": () => (/* binding */ DashboardGuard)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.service */ 3155);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);








class DashboardGuard {
  constructor(router, toastr, loginService, translate) {
    this.router = router;
    this.toastr = toastr;
    this.loginService = loginService;
    this.translate = translate;
  }

  canActivate(route, state) {
    var _this = this;

    return new Promise((resolve, reject) => {
      this.loginService.GetClientConfig().subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          if (data['required_2fa_2proceed'] == 'NONE') {
            if (data['id_verified'] === false || data['kyc_completed'] === false) {
              let msg = yield _this.translate.get('Errores.pleaseValidateID').toPromise();

              _this.toastr.warning(msg);
            }

            return resolve(true);
          } else {
            let msg = yield _this.translate.get('Errores.pleaseValidateCode').toPromise();

            _this.toastr.warning(msg);

            _this.router.navigate(["/validation"]);

            return resolve(false);
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref2 = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
          let msg = yield _this.translate.get('Errores.pleaseValidateCode').toPromise();

          _this.toastr.warning(msg);

          _this.router.navigate(["/validation"]);

          return resolve(false);
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }).then(data => {
      console.log("Error ++++++", data);
      return data;
    });
  }

}

DashboardGuard.ɵfac = function DashboardGuard_Factory(t) {
  return new (t || DashboardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_login_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
};

DashboardGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: DashboardGuard,
  factory: DashboardGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 99082:
/*!***********************************************!*\
  !*** ./src/services/Guard/vigilante.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VigilanteGuard": () => (/* binding */ VigilanteGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 94817);




class VigilanteGuard {
    constructor(router, toastr) {
        this.router = router;
        this.toastr = toastr;
    }
    canActivate(route, state) {
        if (localStorage.getItem('token') != null) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            this.toastr.warning("Porfavor Inicie Sesion!!");
            return false;
        }
    }
}
VigilanteGuard.ɵfac = function VigilanteGuard_Factory(t) { return new (t || VigilanteGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService)); };
VigilanteGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VigilanteGuard, factory: VigilanteGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7015:
/*!**************************************************!*\
  !*** ./src/services/RefData/ref-data.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefDataService": () => (/* binding */ RefDataService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AppSettingsInit/app-settings.service */ 17059);





class RefDataService {
    constructor(http, settingsService) {
        this.http = http;
        this.settingsService = settingsService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Accept': 'application/json; odata=verbose',
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Allow': 'GET, POST, OPTIONS, PUT, DELETE'
        });
        this.options = { headers: this.headers };
        this.ApiBase = this.settingsService.getapidatos().APIS.ApiBase;
        this.ApiCountries = this.settingsService.getapidatos().APIS.ApiRefData.ApiCountries;
        this.ApiCurrencies = this.settingsService.getapidatos().APIS.ApiRefData.ApiCurrencies;
        this.ApiLanguages = this.settingsService.getapidatos().APIS.ApiRefData.ApiLanguages;
        this.ApiExchangeTime = this.settingsService.getapidatos().APIS.ApiRefData.ApiExchangeTime;
    }
    GetCountries() {
        return this.http.post(this.ApiBase + this.ApiCountries, null, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    GetCurrencies() {
        return this.http.post(this.ApiBase + this.ApiCurrencies, null, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    GetLanguages() {
        return this.http.post(this.ApiBase + this.ApiLanguages, null, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    GetExhangeTime() {
        return this.http.post(this.ApiBase + this.ApiExchangeTime, null, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
}
RefDataService.ɵfac = function RefDataService_Factory(t) { return new (t || RefDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService)); };
RefDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RefDataService, factory: RefDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 97317:
/*!****************************************************!*\
  !*** ./src/services/WebSocket/socketio.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocketioService": () => (/* binding */ SocketioService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AppSettingsInit/app-settings.service */ 17059);



class SocketioService {
    constructor(settingsService) {
        this.settingsService = settingsService;
        this.error = false;
        this.error_blox_order = false;
        this.error_blox = false;
        this.data_coinbase = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.data_blox = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.data_blox_order = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.WebSocketCoin = settingsService.getapidatos().WEBSOCKETS.WebSocketCoin;
        this.WebSocketBlox = settingsService.getapidatos().WEBSOCKETS.WebSocketBlox;
        this.WebSocketBloxOrder = settingsService.getapidatos().WEBSOCKETS.WebSocketBloxOrder;
    }
    InitCoinBase(products) {
        const websocket_coin = new WebSocket(this.WebSocketCoin);
        const data_coin = {
            type: 'subscribe',
            product_ids: products,
            channels: [
                "ticker",
                {
                    name: 'ticker',
                    product_ids: products,
                },
            ],
        };
        websocket_coin.onopen = () => {
            // console.log("Conectando COINBASE");
            websocket_coin.send(JSON.stringify(data_coin));
        };
        websocket_coin.onmessage = (e) => {
            const coins_data = JSON.parse(e.data);
            if (coins_data.type == 'error') {
                this.error = true;
                setTimeout(() => this.BaseCoinActionError(products), 1000);
            }
            else {
                this.error = false;
            }
            this.data_coinbase.next(e.data);
            return () => websocket_coin.close();
        };
    }
    InitBlox(products) {
        const websocket_blox = new WebSocket(this.WebSocketBlox);
        const data_coin = {
            product_ids: products,
            channels: [
                {
                    name: 'inside_market',
                    product_ids: products,
                },
            ],
            type: "subscribe"
        };
        websocket_blox.onopen = () => {
            // console.log("Conectando BLOX");
            websocket_blox.send(JSON.stringify(data_coin));
        };
        websocket_blox.onmessage = (e) => {
            const bloxorder_data = e;
            if (bloxorder_data.type == 'error') {
                this.error_blox = true;
                setTimeout(() => this.BloxActionError(products), 1000);
            }
            else {
                this.error_blox = false;
            }
            this.data_blox.next(e.data);
            return () => websocket_blox.close();
        };
    }
    InitBloxOrder() {
        const websocket_blox_order = new WebSocket(this.WebSocketBloxOrder);
        const data = {
            token: localStorage.getItem('token')
        };
        websocket_blox_order.onopen = () => {
            // console.log("Conectando BLOX ORDER");
            websocket_blox_order.send(JSON.stringify(data));
        };
        websocket_blox_order.onmessage = (e) => {
            const bloxorder_data = e;
            if (bloxorder_data.type == 'error') {
                this.error_blox_order = true;
                setTimeout(() => this.BloxOrderActionError(), 1000);
            }
            else {
                this.error_blox_order = false;
            }
            this.data_blox_order.next(e.data);
            return () => websocket_blox_order.close();
        };
    }
    BaseCoinActionError(data) {
        console.log("reconnecting... COIN BASE");
        this.InitCoinBase(data);
    }
    BloxOrderActionError() {
        console.log("reconnecting... INIT BLOX ORDER");
        this.InitBloxOrder();
    }
    BloxActionError(data) {
        console.log("reconnecting... INIT BLOX ORDER");
        this.InitBlox(data);
    }
    GetData() {
        return this.data_coinbase.asObservable();
    }
    GetDataBloxOrder() {
        return this.data_blox_order.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    GetDataBlox() {
        return this.data_blox.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
}
SocketioService.ɵfac = function SocketioService_Factory(t) { return new (t || SocketioService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService)); };
SocketioService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SocketioService, factory: SocketioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 88742:
/*!************************************************************!*\
  !*** ./src/services/interceptors/add-token.interceptor.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTokenInterceptor": () => (/* binding */ AddTokenInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


class AddTokenInterceptor {
    constructor() { }
    intercept(request, next) {
        const token = localStorage.getItem('token');
        if (token) {
            request = request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
        }
        return next.handle(request);
    }
}
AddTokenInterceptor.ɵfac = function AddTokenInterceptor_Factory(t) { return new (t || AddTokenInterceptor)(); };
AddTokenInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AddTokenInterceptor, factory: AddTokenInterceptor.ɵfac });


/***/ }),

/***/ 82657:
/*!*************************************************************!*\
  !*** ./src/services/interceptors/http-error.interceptor.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpErrorInterceptor": () => (/* binding */ HttpErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 94817);






class HttpErrorInterceptor {
    constructor(router, toastr) {
        this.router = router;
        this.toastr = toastr;
    }
    intercept(request, next) {
        // console.log("Passed through the interceptor in request");
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((res) => {
            // console.log("Passed through the interceptor in response"+JSON.stringify(res));
            return res;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            let errorMsg = '';
            if (error.error instanceof ErrorEvent) {
                console.log('This is client side error');
                errorMsg = `Error: ${error.error.message}`;
                this.toastr.error(error.error.message, 'This is client side error', {
                    closeButton: true,
                    disableTimeOut: true,
                    positionClass: 'toast-center-center',
                });
            }
            else {
                var error_msg = '';
                console.log('This is server side error', error);
                if (error.status == 401) {
                    localStorage.clear();
                    this.router.navigate(['/']);
                    errorMsg = "Session expired";
                }
                console.log("+++++++++++", error);
                if (error.error !== null) {
                    if (error.error.text === 'Logged out') {
                        error_msg = error.error.text;
                    }
                    if (error.error.payload != null) {
                        error_msg = error.error.payload;
                    }
                    if (error.error.message != null) {
                        error_msg = error.error.message;
                    }
                    errorMsg = `Error Code: ${error.status},  Message: ${error_msg}`;
                }
                if (error_msg !== 'Logged out') {
                    this.toastr.error(error_msg, 'Error', {
                        closeButton: true,
                        disableTimeOut: true,
                        positionClass: 'toast-center-center',
                    });
                }
            }
            console.log(errorMsg);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(errorMsg);
        }));
    }
}
HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) { return new (t || HttpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService)); };
HttpErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: HttpErrorInterceptor, factory: HttpErrorInterceptor.ɵfac });


/***/ }),

/***/ 3155:
/*!*********************************************!*\
  !*** ./src/services/login/login.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ 64198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AppSettingsInit/app-settings.service */ 17059);






class LoginService {
    constructor(http, settingsService) {
        this.http = http;
        this.settingsService = settingsService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Accept': 'application/json; odata=verbose',
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
        });
        this.options = { headers: this.headers };
        this.ApiBase = this.settingsService.getapidatos().APIS.ApiBase;
        this.ApiLogin = this.settingsService.getapidatos().APIS.ApiLogin;
        this.ApiLogout = this.settingsService.getapidatos().APIS.ApiLogout;
        this.ApiChangePassword = this.settingsService.getapidatos().APIS.ApiChangePassword;
        this.ApiForgotPassword = this.settingsService.getapidatos().APIS.ApiForgotPassword;
        this.ApiValidateGoogle = this.settingsService.getapidatos().APIS.ApiValidateGoogle;
        this.ApiClientConfig = this.settingsService.getapidatos().APIS.ApiClientConfig;
        this.ApiChangeEmail = this.settingsService.getapidatos().APIS.ApiChangeEmail;
        this.ApiChangePhone = this.settingsService.getapidatos().APIS.ApiChangePhone;
    }
    login(usuario) {
        return this.http.post(`${this.ApiBase}${this.ApiLogin}`, usuario, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    ForgotPassword(usuario) {
        return this.http.post(this.ApiBase + this.ApiForgotPassword, usuario, this.options);
    }
    ChangePassword(usuario) {
        return this.http.post(this.ApiBase + this.ApiChangePassword, usuario, this.options);
    }
    ChangeEmail(usuario) {
        return this.http.post(this.ApiBase + this.ApiChangeEmail, usuario, this.options);
    }
    ChangePhone(usuario) {
        return this.http.post(this.ApiBase + this.ApiChangePhone, usuario, this.options);
    }
    logout() {
        return this.http.post(this.ApiBase + this.ApiLogout, null, this.options);
    }
    setlocalStorage(data) {
        localStorage.setItem('token', data);
    }
    getlocalStorageToken() {
        return localStorage.getItem('token');
    }
    getTokenDecoded() {
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtHelperService();
        const decodedToken = helper.decodeToken(localStorage.getItem('token'));
        return decodedToken;
    }
    removelocalStorage() {
        localStorage.removeItem('token');
        localStorage.removeItem('theme');
        localStorage.removeItem('remember');
    }
    GetClientConfig() {
        return this.http.get(`${this.ApiBase}${this.ApiClientConfig}`, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 43607:
/*!*********************************************!*\
  !*** ./src/services/manage-data.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageDataService": () => (/* binding */ ManageDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class ManageDataService {
    constructor() {
        this._subjects = new Map();
    }
    getSubject(key) {
        this._validateSubject(key);
        return this._subjects.get(key).asObservable();
    }
    emitEvent(key, event) {
        this._validateSubject(key);
        this._subjects.get(key).next(event);
    }
    _validateSubject(key) {
        if (!this._subjects.has(key)) {
            this._subjects.set(key, new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null));
        }
    }
}
ManageDataService.ɵfac = function ManageDataService_Factory(t) { return new (t || ManageDataService)(); };
ManageDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ManageDataService, factory: ManageDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 61084:
/*!**************************************************!*\
  !*** ./src/services/payments/payment.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentService": () => (/* binding */ PaymentService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/AppSettingsInit/app-settings.service */ 17059);





class PaymentService {
    constructor(http, settingsService) {
        this.http = http;
        this.settingsService = settingsService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Accept': 'application/json; odata=verbose',
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Allow': 'GET, POST, OPTIONS, PUT, DELETE'
        });
        this.options = { headers: this.headers };
        this.ApiBase = this.settingsService.getapidatos().APIS.ApiBase;
        this.ApiConvertToUSD = this.settingsService.getapidatos().APIS.ApiConvertToUSD;
        this.ApiConvertFromUSD = this.settingsService.getapidatos().APIS.ApiConvertFromUSD;
        this.ApiGetClientPaymentMethods = this.settingsService.getapidatos().APIS.ApiGetClientPaymentMethods;
        this.ApiBuyByAmount = this.settingsService.getapidatos().APIS.ApiBuyByAmount;
        this.ApiBuyByQty = this.settingsService.getapidatos().APIS.ApiBuyByQty;
        this.ApiBuyMax = this.settingsService.getapidatos().APIS.ApiBuyMax;
        this.ApiSellMax = this.settingsService.getapidatos().APIS.ApiSellMax;
        this.ApiSellByAmount = this.settingsService.getapidatos().APIS.ApiSellByAmount;
        this.ApiSellByQty = this.settingsService.getapidatos().APIS.ApiSellByQty;
        this.ApiGetAllPaymentsProvidersByCountry = this.settingsService.getapidatos().APIS.ApiGetAllPaymentsProvidersByCountry;
        this.ApiSaveBankPaymentMethod = this.settingsService.getapidatos().APIS.ApiSaveBankPaymentMethod;
        this.ApiSaveCardPaymentMethod = this.settingsService.getapidatos().APIS.ApiSaveCardPaymentMethod;
        this.ApiSaveCashPaymentMethod = this.settingsService.getapidatos().APIS.ApiSaveCashPaymentMethod;
        this.ApiDeleteClientPaymentMethod = this.settingsService.getapidatos().APIS.ApiDeleteClientPaymentMethod;
        this.ApiSetDefaultPaymentMethod = this.settingsService.getapidatos().APIS.ApiSetDefaultPaymentMethod;
    }
    SellMax(data) {
        return this.http.post(this.ApiBase + this.ApiSellMax, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    BuyMax(data) {
        return this.http.post(this.ApiBase + this.ApiBuyMax, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    GetClientPaymentMethods(data) {
        return this.http.post(this.ApiBase + this.ApiGetClientPaymentMethods, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    BuyByQty(data) {
        return this.http.post(this.ApiBase + this.ApiBuyByQty, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    BuyByAmount(data) {
        return this.http.post(this.ApiBase + this.ApiBuyByAmount, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    SellByQty(data) {
        return this.http.post(this.ApiBase + this.ApiSellByQty, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    SellByAmount(data) {
        return this.http.post(this.ApiBase + this.ApiSellByAmount, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    GetAllPaymentsProvidersByCountry(data) {
        return this.http.post(this.ApiBase + this.ApiGetAllPaymentsProvidersByCountry, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    SaveBankPaymentMethod(data) {
        return this.http.post(this.ApiBase + this.ApiSaveBankPaymentMethod, data, this.options);
    }
    SaveCardPaymentMethod(data) {
        return this.http.post(this.ApiBase + this.ApiSaveCardPaymentMethod, data, this.options);
    }
    SaveCashPaymentMethod(data) {
        return this.http.post(this.ApiBase + this.ApiSaveCashPaymentMethod, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    DeleteClientPaymentMethod(data) {
        return this.http.post(this.ApiBase + this.ApiDeleteClientPaymentMethod, data, this.options);
    }
    SetDefaultPaymentMethod(data) {
        return this.http.post(this.ApiBase + this.ApiSetDefaultPaymentMethod, data, this.options);
    }
}
PaymentService.ɵfac = function PaymentService_Factory(t) { return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_services_AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService)); };
PaymentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PaymentService, factory: PaymentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 21013:
/*!*******************************************************!*\
  !*** ./src/services/portafolio/portafolio.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortafolioService": () => (/* binding */ PortafolioService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AppSettingsInit/app-settings.service */ 17059);





class PortafolioService {
    constructor(http, settingsService) {
        this.http = http;
        this.settingsService = settingsService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Accept': 'application/json; odata=verbose',
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Allow': 'GET, POST, OPTIONS, PUT, DELETE'
        });
        this.options = { headers: this.headers };
        this.ApiBase = this.settingsService.getapidatos().APIS.ApiBase;
        this.ApiGetDefaultPortfolio = this.settingsService.getapidatos().APIS.ApiGetDefaultPortfolio;
        this.ApiFoundsIn = this.settingsService.getapidatos().APIS.ApiFoundsIn;
        this.ApiFoundsOut = this.settingsService.getapidatos().APIS.ApiFoundsOut;
        this.ApiGetAllProducts = this.settingsService.getapidatos().APIS.ApiGetAllProducts;
        this.ApiGetWalletForDeposit = this.settingsService.getapidatos().APIS.ApiGetWalletForDeposit;
        this.ApiGetPortfolioBalances = this.settingsService.getapidatos().APIS.ApiGetPortfolioBalances;
        this.ApiGetGasFeeEstimate = this.settingsService.getapidatos().APIS.ApiGetGasFeeEstimate;
        this.ApiGetPortfolioBalancesForSymbol = this.settingsService.getapidatos().APIS.ApiGetPortfolioBalancesForSymbol;
        this.ApiWithdrawMax = this.settingsService.getapidatos().APIS.ApiWithdrawMax;
        this.ApiGetDeepPortfolioInfo = this.settingsService.getapidatos().APIS.ApiGetDeepPortfolioInfo;
        this.ApiLiquidateAll = this.settingsService.getapidatos().APIS.ApiLiquidateAll;
        this.ApiGetOrderDetail = this.settingsService.getapidatos().APIS.ApiGetOrderDetail;
        this.ApiGetPortfolioTransactions = this.settingsService.getapidatos().APIS.ApiGetPortfolioTransactions;
    }
    GetDefault() {
        return this.http.get(`${this.ApiBase}${this.ApiGetDefaultPortfolio}`, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    GetAllProducts() {
        return this.http.get(`${this.ApiBase}${this.ApiGetAllProducts}`, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    GetDeepPortfolioInfo() {
        return this.http.post(`${this.ApiBase}${this.ApiGetDeepPortfolioInfo}`, null, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    GetPortafolioBalances(data) {
        return this.http.post(this.ApiBase + this.ApiGetPortfolioBalances, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    GetPortafolioBalancesForSymbol(data) {
        return this.http.post(this.ApiBase + this.ApiGetPortfolioBalancesForSymbol, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    GetPortafolioTransaction(data) {
        return this.http.post(this.ApiBase + this.ApiGetPortfolioTransactions, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    GetGasFeeEstimate(data) {
        return this.http.post(this.ApiBase + this.ApiGetGasFeeEstimate, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    GetOrderDetail(data) {
        return this.http.post(this.ApiBase + this.ApiGetOrderDetail, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    Deposit(data) {
        return this.http.post(this.ApiBase + this.ApiFoundsIn, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    Withdraw(data) {
        return this.http.post(this.ApiBase + this.ApiFoundsOut, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    WithdrawMax(data) {
        return this.http.post(this.ApiBase + this.ApiWithdrawMax, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    LiquiateAllAssetsPortafolio(data) {
        return this.http.post(this.ApiBase + this.ApiLiquidateAll, data, this.options);
    }
    GetPortafolioTransactionForSymbol(data) {
        return this.http.post("http://localhost:4200/login", data, this.options);
    }
    GetAllUsersPortafolios() {
        return this.http.get("http://localhost:4200/login", this.options);
    }
    BuyMarketByAmount(data) {
        return this.http.post("http://localhost:4200/login", data, this.options);
    }
    BuyToTrackingPortafolio(data) {
        return this.http.post("http://localhost:4200/login", data, this.options);
    }
    SellMarketByAmount(data) {
        return this.http.post("http://localhost:4200/login", data, this.options);
    }
    SellMarketByQty(data) {
        return this.http.post("http://localhost:4200/login", data, this.options);
    }
    SellFromTrackingPortafolio(data) {
        return this.http.post("http://localhost:4200/login", data, this.options);
    }
    LiquiateAllTrackingPortafolio(data) {
        return this.http.post("http://localhost:4200/login", data, this.options);
    }
    CancelOrder(data) {
        return this.http.put("http://localhost:4200/login", data, this.options);
    }
}
PortafolioService.ɵfac = function PortafolioService_Factory(t) { return new (t || PortafolioService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService)); };
PortafolioService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PortafolioService, factory: PortafolioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 81669:
/*!***************************************************!*\
  !*** ./src/services/register/register.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterService": () => (/* binding */ RegisterService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AppSettingsInit/app-settings.service */ 17059);





class RegisterService {
    constructor(http, settingsService) {
        this.http = http;
        this.settingsService = settingsService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Accept': 'application/json; odata=verbose',
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Allow': 'GET, POST, OPTIONS, PUT, DELETE'
        });
        this.options = { headers: this.headers };
        this.ApiBase = this.settingsService.getapidatos().APIS.ApiBase;
        this.ApiRegister = this.settingsService.getapidatos().APIS.ApiRegister;
    }
    register(usuario) {
        return this.http.post(this.ApiBase + this.ApiRegister, usuario, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
}
RegisterService.ɵfac = function RegisterService_Factory(t) { return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService)); };
RegisterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RegisterService, factory: RegisterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 73902:
/*!*******************************************************!*\
  !*** ./src/services/validation/validation.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationService": () => (/* binding */ ValidationService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AppSettingsInit/app-settings.service */ 17059);





class ValidationService {
    constructor(http, settingsService) {
        this.http = http;
        this.settingsService = settingsService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Accept': 'application/json; odata=verbose',
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Allow': 'GET, POST, OPTIONS, PUT, DELETE'
        });
        this.options = { headers: this.headers };
        this.ApiBase = this.settingsService.getapidatos().APIS.ApiBase;
        this.ApiLogin = this.settingsService.getapidatos().APIS.ApiLogin;
        this.ApiValidateGoogle = this.settingsService.getapidatos().APIS.ApiValidateGoogle;
        this.ApiValidateSMS = this.settingsService.getapidatos().APIS.ApiValidateSms;
        this.ApiValidateEmail = this.settingsService.getapidatos().APIS.ApiValidateEmail;
        this.ApiConfirmeEmail = this.settingsService.getapidatos().APIS.ApiConfirmeEmail;
        this.ApiConfirmeSMS = this.settingsService.getapidatos().APIS.ApiConfirmeSMS;
        this.ApiUpdateName = this.settingsService.getapidatos().APIS.ApiUpdateName;
        this.ApiJobID = this.settingsService.getapidatos().APIS.ApiJobID;
    }
    validate2faGoogle(code) {
        return this.http.post(this.ApiBase + this.ApiValidateGoogle, code, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    validate2faSMS(code) {
        return this.http.post(this.ApiBase + this.ApiValidateSMS, code, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    validate2faEmail(code) {
        return this.http.post(this.ApiBase + this.ApiValidateEmail, code, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    ConfirmEmail() {
        return this.http.post(this.ApiBase + this.ApiConfirmeEmail, null, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    ConfirmCelular() {
        return this.http.post(this.ApiBase + this.ApiConfirmeSMS, null, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    UpdateName(data) {
        return this.http.post(this.ApiBase + this.ApiUpdateName, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    ConfirmID(code) {
        return this.http.post(this.ApiBase + this.ApiJobID, code, this.options);
    }
}
ValidationService.ɵfac = function ValidationService_Factory(t) { return new (t || ValidationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService)); };
ValidationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ValidationService, factory: ValidationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 58417:
/*!*****************************************!*\
  !*** ./src/assets/Errores/Errores.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":[{"type":"required","message":"Errores.NameRequired"}],"lastname":[{"type":"required","message":"Errores.ApellidoRequired"}],"countryselect":[{"type":"required","message":"Errores.CountryRequired"}],"phone":[{"type":"required","message":"Errores.PhoneRequired"},{"type":"minlength","message":"Errores.PhoneLength"}],"dob":[{"type":"required","message":"Errores.DobRequired"}],"email":[{"type":"required","message":"Errores.EmailRequired"},{"type":"pattern","message":"Errores.EmailPattern"}],"password":[{"type":"required","message":"Errores.PasswordRequired"},{"type":"minlength","message":"Errores.PasswordLength"},{"type":"passwordStrength","message":"Errores.PasswordPattern"}],"passwordConfirmation":[{"type":"required","message":"Errores.PasswordRequired"},{"type":"minlength","message":"Errores.PasswordLength"}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map