"use strict";
(self["webpackChunkBloxcrossFrontend"] = self["webpackChunkBloxcrossFrontend"] || []).push([["src_app_Portafolio_portafolio_module_ts"],{

/***/ 77712:
/*!*********************************************************!*\
  !*** ./src/app/Portafolio/Deposit/deposit.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositComponent": () => (/* binding */ DepositComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/Enum/EnumAuthentication.enum */ 81708);
/* harmony import */ var src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/Enum/EnumPopUp.enum */ 42241);
/* harmony import */ var src_app_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/PopUp/confirmation/confirmation.component */ 40915);
/* harmony import */ var src_app_PaymentMethods_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/PaymentMethods/payment-methods/payment-methods.component */ 69649);
/* harmony import */ var src_models_Market_market_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/Market/market.model */ 69518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/manage-data.service */ 43607);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_services_TestFounds_test_founds_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/TestFounds/test-founds.service */ 77250);
/* harmony import */ var src_services_Client_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/Client/client.service */ 64022);
/* harmony import */ var src_services_Market_market_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/Market/market.service */ 74421);
/* harmony import */ var src_services_payments_payment_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/payments/payment.service */ 61084);
/* harmony import */ var src_services_portafolio_portafolio_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/portafolio/portafolio.service */ 21013);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var src_services_Wallet_wallet_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/Wallet/wallet.service */ 11952);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 94666);























function DepositComponent_div_12_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const asset_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](asset_r8.base_currency);
  }
}

function DepositComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 13)(1, "div")(2, "p")(3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DepositComponent_div_12_Template_div_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r9.IsValidatedID());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "select", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function DepositComponent_div_12_Template_select_change_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10);

      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](13);

      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r11.SelectCurrency(_r6.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](20, DepositComponent_div_12_option_20_Template, 2, 1, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 4, "cryptoDeposit.whatCurrency"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r0.disable_deposit);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](16, 6, "general.select"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r0.assets_data);
  }
}

function DepositComponent_div_13_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const method_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](method_r14.name);
  }
}

function DepositComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 13)(1, "p")(2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "select", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function DepositComponent_div_13_Template_select_change_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](12);

      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r15.SelectMethod(_r12.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, DepositComponent_div_13_option_16_Template, 2, 1, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 3, "funds.selectPaymentMethod"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](15, 5, "general.select"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.deposit_methods);
  }
}

function DepositComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "h2", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", ctx_r2.payment_method_name, " ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 2, "funds.amount"), "");
  }
}

function DepositComponent_div_16_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "span", 42);
  }
}

function DepositComponent_div_16_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "general.continue"), "");
  }
}

function DepositComponent_div_16_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "general.validating"), " ...");
  }
}

function DepositComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "div", 32)(3, "div", 33)(4, "input", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("input", function DepositComponent_div_16_Template_input_input_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r23);

      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);

      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r22.InputCurrency(_r17.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 32)(11, "div", 33)(12, "input", 34, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("input", function DepositComponent_div_16_Template_input_input_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r23);

      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](13);

      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r24.InputUsd(_r18.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 3)(17, "div", 30)(18, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DepositComponent_div_16_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r23);

      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](13);

      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r25.PaymentProccessUsd("USD", _r18.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, DepositComponent_div_16_span_19_Template, 1, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](20, DepositComponent_div_16_span_20_Template, 3, 3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, DepositComponent_div_16_span_21_Template, 3, 3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "hr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);

    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](13);

    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx_r3.input_currency_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r3.client_data.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx_r3.input_usd_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", _r18.value == "0" || _r17.value == "0" || _r18.value == "" || _r17.value == "" || ctx_r3.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r3.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r3.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r3.validating);
  }
}

function DepositComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 43)(2, "div", 44)(3, "p")(4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "p")(17, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 3)(24, "div", 49)(25, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DepositComponent_div_17_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r26.ContinuePaymentButton());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](28, "hr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](9, 6, "cryptoDeposit.qr.pleaseScanQR"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](10, 8, "cryptoDeposit.qr.alternativeCopyAddress_1"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](11, 10, "cryptoDeposit.qr.alternativeCopyAddress_2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](19, 12, "cryptoDeposit.qr.walletMessage_1"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](20, 14, "cryptoDeposit.qr.walletMessage_2"), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](27, 16, "general.continue"));
  }
}

function DepositComponent_div_18_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "span", 42);
  }
}

function DepositComponent_div_18_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "general.continue"), "");
  }
}

function DepositComponent_div_18_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "general.validating"), " ...");
  }
}

function DepositComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "h2", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "p")(6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "p")(13, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "p")(20, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "svg", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 3)(27, "div", 30)(28, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DepositComponent_div_18_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r31.PaymentProccessCrypto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](29, DepositComponent_div_18_span_29_Template, 1, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](30, DepositComponent_div_18_span_30_Template, 3, 3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](31, DepositComponent_div_18_span_31_Template, 3, 3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](32, "hr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 8, "cryptoDeposit.finish.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](11, 10, "cryptoDeposit.finish.info_1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](18, 12, "cryptoDeposit.finish.info_2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](25, 14, "cryptoDeposit.finish.info_3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r5.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r5.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r5.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r5.validating);
  }
}

class DepositComponent {
  constructor(dialog, translate, manage_data, toastr, test_payments, client, market, payments, assets, router, spinner, wallet) {
    this.dialog = dialog;
    this.translate = translate;
    this.manage_data = manage_data;
    this.toastr = toastr;
    this.test_payments = test_payments;
    this.client = client;
    this.market = market;
    this.payments = payments;
    this.assets = assets;
    this.router = router;
    this.spinner = spinner;
    this.wallet = wallet;
    this.langs = [];
    this.assets_data = [];
    this.deposit_methods = [];
    this.usd_select = false;
    this.crypto_select = false;
    this.payment_method_select = false;
    this.deposit = true;
    this.final_dialog = false;
    this.validating = false;
    this.input_currency_value = 0;
    this.input_usd_value = 0;
    this.loadCompleteOK = false;
    this.disable_deposit = false;
    this.QRCode = "data:image/png;base64,";
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.spinner.show();

      yield _this.InitDeposit();
      yield _this.IsValidatedID();

      _this.spinner.hide();
    })();
  } //************************************************************************************
  //Confirm Validate ID
  //************************************************************************************


  ConfirmValidateID() {
    var _this2 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogConfig();
      dialogConfig.autoFocus = false;
      dialogConfig.disableClose = true; // dialogConfig.height = "20rem";

      dialogConfig.width = "40rem";
      var data = {
        title: yield _this2.translate.get("Errores.mustValidateID").toPromise(),
        icon: 'quest',
        conten: yield _this2.translate.get("Errores.wantValidateID").toPromise()
      };

      _this2.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_2__.EnumEventsPopUp.ConfirmAction.toString(), data);

      let dialogRef = _this2.dialog.open(src_app_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmationComponent, dialogConfig);

      _this2.subscription.add(dialogRef.afterClosed().subscribe(result => {
        if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_1__.EnumConfirmation.si.toString()) {
          _this2.router.navigate(['/vouched']);
        }
      }));
    })();
  } //************************************************************************************
  //Is Validated ID?
  //************************************************************************************


  IsValidatedID() {
    var _this3 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = yield _this3.GetClientConfig();

      if (data.id_verified) {
        _this3.disable_deposit = false;
      } else {
        _this3.disable_deposit = true;

        _this3.ConfirmValidateID();
      }
    })();
  } //************************************************************************************
  //Init Deposit
  //************************************************************************************


  InitDeposit() {
    var _this4 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let getClientConfigResponse = yield _this4.GetClientConfig();

        if (!getClientConfigResponse) {
          _this4.ShowError("Error to get client config");

          return;
        } // console.log("getClientConfigResponse:", getClientConfigResponse);


        _this4.client_data = getClientConfigResponse;
        let getAllProductResponse = yield _this4.GetAllProduct();

        if (!getAllProductResponse) {
          _this4.ShowError("Error to get all products");

          return;
        }

        _this4.assets_data = getAllProductResponse.filter(element => element.trading_disabled == false && element.fx_stablecoin == false && element.quote_currency == 'USD'); // console.log("assets_data:", this.assets_data);

        let getAllPaymentMethodsResponse = yield _this4.GetAllPaymentMethods();

        if (!getAllPaymentMethodsResponse) {
          _this4.ShowWarning("Please add a payment method to add money to the portfolio", "There are no payment methods", false);
        } // console.log("getAllPaymentMethodsResponse:", getAllPaymentMethodsResponse);


        _this4.deposit_methods = getAllPaymentMethodsResponse;
        let getDefaultPortafolioResponse = yield _this4.GetDefaultPortafolio();

        if (!getDefaultPortafolioResponse) {
          _this4.ShowError("Error to get client portafolio");

          return;
        } // console.log("getDefaultPortafolioResponse:", getDefaultPortafolioResponse);


        _this4.clientPortafolio = getDefaultPortafolioResponse;
        _this4.loadCompleteOK = true;
      } catch (error) {
        console.error("Error on InitDeposit:", error);
      }
    })();
  }

  SelectCurrency(value) {
    switch (value) {
      case 'USD':
        this.crypto_select = false;
        this.usd_select = true;

        if (this.deposit_methods.toString() === "") {
          this.ConfirmAddMethod();
          break;
        }

        break;

      case 'Select':
        break;

      default:
        this.usd_select = false;
        this.crypto_select = true;
        this.payment_method_select = false;
        this.crypto_name = value;
        this.crypto_qty = 100;
        break;
    }
  }

  ConfirmAddMethod() {
    var _this5 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "40rem";
      var data = {
        title: yield _this5.translate.get('dialog.generateDeposit').toPromise(),
        icon: 'quest',
        conten: yield _this5.translate.get('dialog.agreepaymethod').toPromise()
      };

      _this5.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_2__.EnumEventsPopUp.ConfirmAction.toString(), data);

      let dialogRef = _this5.dialog.open(src_app_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmationComponent, dialogConfig);

      _this5.subscription.add(dialogRef.afterClosed().subscribe(result => {
        if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_1__.EnumConfirmation.si.toString()) {
          _this5.AddPaymentMethods();
        }
      }));
    })();
  }

  SelectMethod(value) {
    switch (value) {
      case 'Select':
        this.payment_method_select = false;
        break;

      default:
        this.payment_method_select = true;
        this.payment_method_name = value;
        break;
    }
  }

  ContinuePaymentButton() {
    this.usd_select = false;
    this.crypto_select = false;
    this.payment_method_select = false;
    this.deposit = false;
    this.final_dialog = true;
  } //****************************************************
  //Deposit Without Payment Method Saved
  //****************************************************


  AddPaymentMethods() {
    var _this6 = this;

    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true;
    dialogConfig.width = "100rem";
    const data = {
      action: 'Deposit',
      direction: null
    };
    this.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_2__.EnumEventsPopUp.ActionPaymentMethods.toString(), data);
    let dialog = this.dialog.open(src_app_PaymentMethods_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_4__.PaymentMethodsComponent, dialogConfig);
    this.subscription.add(dialog.afterClosed().subscribe( /*#__PURE__*/(0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let getAllPaymentMethodsResponse = yield _this6.GetAllPaymentMethods();

      if (!getAllPaymentMethodsResponse) {
        _this6.ShowWarning("Please add a payment method to add money to the portfolio", "There are no payment methods", false);
      }

      _this6.deposit_methods = getAllPaymentMethodsResponse;
    })));
  } //****************************************************
  //Generate Wallet QR 
  //****************************************************


  GenerateQR() {
    var _this7 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Coin = {
        coin: _this7.crypto_name
      };
      let responseQR = yield _this7.GetInboundWallet(Coin);

      if (!responseQR) {
        _this7.ShowError("An error has occurred, please try again", "Error");

        return;
      }

      _this7.QRCode += responseQR.qr_code;
    })();
  } //****************************************************
  //Payment Process
  //****************************************************


  PaymentProccessCrypto() {
    var _this8 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.validating = true;

      if (_this8.loadCompleteOK === false) {
        _this8.ShowError("An error has occurred, please try to reload the page", "Error");

        return;
      }

      const FundsIn = {
        portfolio_name: _this8.clientPortafolio.name,
        instrument: _this8.crypto_name,
        qty: 100,
        cost_basis: 1,
        from: "Chase-8074",
        notes: "Wired from Chase"
      };
      let depositResponse = yield _this8.Deposit(FundsIn);

      if (!depositResponse) {
        _this8.ShowError("An error has occurred, please try again", "Error");

        _this8.validating = false;
        return;
      } //console.log("depositResponse:", depositResponse);


      _this8.router.navigate(['/home/portafolio']);
    })();
  }

  PaymentProccessUsd(coin, qty) {
    var _this9 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.validating = true;

      if (_this9.loadCompleteOK === false) {
        _this9.ShowError("An error has occurred, please try to reload the page", "Error");

        return;
      }

      const FundsIn = {
        portfolio_name: _this9.clientPortafolio.name,
        instrument: coin,
        qty: Number(qty),
        cost_basis: 1,
        from: "Chase-8074",
        notes: "Wired from Chase"
      };
      let depositResponse = yield _this9.Deposit(FundsIn);

      if (!depositResponse) {
        _this9.validating = false;
        return;
      } //console.log("depositResponse:", depositResponse);


      _this9.router.navigate(['/home/portafolio']);
    })();
  } //****************************************************
  //****************************************************


  InputCurrency(value) {
    var _this10 = this;

    this.validating = true;
    clearTimeout(this.timerConversionCurrency);
    this.timerConversionCurrency = setTimeout( /*#__PURE__*/(0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const fx_convert = {
        from_curr: _this10.client_data.currency,
        to_curr: "USD",
        amount: Number(value)
      };
      let currency_value = yield _this10.Convert(fx_convert);
      _this10.input_usd_value = Number(value * currency_value.price).toFixed(3);
      _this10.validating = false;
    }), 250);
  }

  InputUsd(value) {
    var _this11 = this;

    this.validating = true;
    clearTimeout(this.timerConversionUsd);
    this.timerConversionUsd = setTimeout( /*#__PURE__*/(0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const fx_convert = {
        from_curr: "USD",
        to_curr: _this11.client_data.currency,
        amount: Number(value)
      };
      let currency_value = yield _this11.Convert(fx_convert);
      _this11.input_currency_value = Number(value * currency_value.price).toFixed(3);
      _this11.validating = false;
    }), 250);
  } //SERVICES =============================================================================================================================
  //Deposit Test Api *************************************************************


  Deposit(data) {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.test_payments.TestDeposit(data).subscribe(data => {
        resolve(data);
      }, err => {
        console.log("Error Deposit:", err);
        resolve(null);
      }));
    });
  }

  Convert(data) {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.market.Convert(data).subscribe(response => {
        resolve(JSON.parse(response.payload));
      }, err => {
        console.log("Error Convert:", err);
        resolve(null);
      }));
    });
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

  GetAllProduct() {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.assets.GetAllProducts().subscribe(response => {
        resolve(response);
      }, err => {
        console.log("Error GetAllProduct:", err);
        resolve(null);
      }));
    });
  }

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

  GetAllPaymentMethods() {
    const data = {
      direction: "in"
    };
    return new Promise((resolve, reject) => {
      this.subscription.add(this.payments.GetClientPaymentMethods(data).subscribe(response => {
        resolve(response);
      }, err => {
        console.log("Error GetAllPaymentMethods:", err);
        resolve(null);
      }));
    });
  }

  GetInboundWallet(data) {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.wallet.GetWalletForDeposit(data).subscribe(response => {
        resolve(response);
      }, err => {
        console.log("Error GetInboundWallet:", err);
        resolve(null);
      }));
    });
  }

  ShowError(msg, title = "", disableTimeOut = true) {
    // console.error(msg);
    this.toastr.error(msg, title, {
      closeButton: true,
      disableTimeOut: disableTimeOut,
      positionClass: 'toast-center-center'
    });
  }

  ShowWarning(msg, title = "", disableTimeOut = true) {
    // console.warn(msg);
    this.toastr.warning(msg, title, {
      closeButton: true,
      disableTimeOut: disableTimeOut,
      positionClass: 'toast-center-center'
    });
  }

}

DepositComponent.ɵfac = function DepositComponent_Factory(t) {
  return new (t || DepositComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_6__.ManageDataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_services_TestFounds_test_founds_service__WEBPACK_IMPORTED_MODULE_7__.TestFoundsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_services_Client_client_service__WEBPACK_IMPORTED_MODULE_8__.ClientService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_services_Market_market_service__WEBPACK_IMPORTED_MODULE_9__.MarketService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_services_payments_payment_service__WEBPACK_IMPORTED_MODULE_10__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_services_portafolio_portafolio_service__WEBPACK_IMPORTED_MODULE_11__.PortafolioService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_services_Wallet_wallet_service__WEBPACK_IMPORTED_MODULE_12__.WalletService));
};

DepositComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: DepositComponent,
  selectors: [["app-deposit"]],
  decls: 19,
  vars: 13,
  consts: [["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "line-scale-pulse-out", 3, "fullScreen"], [2, "color", "white"], [1, "container", "text-center", "shadow", 2, "margin-top", "1%"], [1, "row"], [1, "col"], [1, "textDep"], [1, "container", "shadow", 2, "margin-top", "1%"], [1, "row", 2, "margin-top", "1%"], ["class", "col-xl-6 col-md-6 my-3 ", 4, "ngIf"], [2, "color", "rgb(78, 76, 76)", "width", "100%"], ["class", "row text-center", 4, "ngIf"], [4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-xl-6", "col-md-6", "my-3"], [1, "iconsdep"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "25", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-1-circle-fill"], ["fill-rule", "evenodd", "d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"], [1, "texicondep"], [1, "form-group", "dropdowndep", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-chevron-down", "iconDrop"], ["fill-rule", "evenodd", "d", "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"], [1, "form-control", 3, "disabled", "change"], ["selectCurrency", ""], [4, "ngFor", "ngForOf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "25", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-2-circle-fill"], ["d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z"], [1, "form-group", "dropdowndep"], [1, "form-control", 3, "change"], ["selectMethod", ""], [1, "row", "text-center"], [1, "col", "text-center"], [1, "boletext"], [1, "col-xl-4"], [1, "input-group", "mb-3", "dropdowndep"], ["type", "number", "min", "0", "placeholder", "", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control", 3, "value", "input"], ["inputCurrency", ""], ["id", "basic-addon2", 1, "input-group-text"], [1, "col-xl-4", "text-center"], ["id", "u574_img", "src", "../../../../assets/images/u165.svg", 1, "img", 2, "transform", "rotate(90deg)"], ["inputUsd", ""], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "row", 2, "margin-top", "-6px"], [1, "col-xl-6", "col-md-6", 2, "text-align", "center"], [1, "parcondep"], [1, "input-group", "my-2", 2, "width", "100%"], ["type", "text", "placeholder", "", "aria-label", "Recipient's username", "value", "3HT9pT9TmzUXdvm1wpd.", "aria-describedby", "basic-addon2", 1, "form-control"], ["src", "https://borealtech.com/wp-content/uploads/2018/10/codigo-qr-1024x1024-1.jpg", "alt", "", 2, "width", "20vh"], [1, "col", "text-center", "my-2"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "titlerequs"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "25", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-3-circle-fill"], ["d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z"]],
  template: function DepositComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ngx-spinner", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 6)(11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, DepositComponent_div_12_Template, 21, 8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, DepositComponent_div_13_Template, 17, 7, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "hr", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, DepositComponent_div_15_Template, 5, 4, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, DepositComponent_div_16_Template, 23, 7, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, DepositComponent_div_17_Template, 29, 18, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, DepositComponent_div_18_Template, 33, 16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("fullScreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 9, "general.cargando"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](9, 11, "funds.deposit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.deposit);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.usd_select);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.payment_method_select);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.payment_method_select);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.crypto_select);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.final_dialog);
    }
  },
  dependencies: [ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
  styles: [".asset-list-item[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n  background: #cecccc;\n}\n\ndiv.scroll[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n  width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n}\n\n.assets-easy-page[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-top: 2rem;\n  background-size: 10px;\n  color: #4D4D4D;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  -webkit-background-size: initial;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  margin-bottom: 0.2rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 5rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n  font-size: 1rem;\n  color: #4D4D4D;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   span.amount[_ngcontent-%COMP%] {\n  background-color: #4D4D4D;\n  color: #212529;\n  font-size: 2rem;\n  font-weight: bold;\n  border-radius: 1.5rem;\n  padding: 5px 2rem;\n  z-index: 2;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .asset-container[_ngcontent-%COMP%] {\n  background-color: #FAFAFA;\n  border-radius: 2rem 2rem 0 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1rem;\n  padding-top: 3rem;\n  position: relative;\n  top: -1.5rem;\n  width: 100%;\n  z-index: 1;\n  height: 100%;\n  font-size: 0.8rem;\n  justify-content: flex-start;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .buy-sell-message[_ngcontent-%COMP%] {\n  margin: 1rem;\n  color: #4D4D4D;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .buy-sell-message.green[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .buy-sell-message.red[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .buy-sell-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 0.4rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%] {\n  margin: 1rem auto;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: solid 1px #2bba4a;\n  border-radius: 1rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%] {\n  color: #4D4D4D;\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.textDep[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  color: #2bba4a;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.texicondep[_ngcontent-%COMP%] {\n  color: var(--count-color);\n  font-size: 15px;\n}\n\n.parcondep[_ngcontent-%COMP%] {\n  color: var(--count-color);\n  font-size: 15px;\n  text-align: justify;\n}\n\n.iconsdep[_ngcontent-%COMP%] {\n  color: rgb(28, 141, 28);\n  margin-right: 20px;\n}\n\n.dropdowndep[_ngcontent-%COMP%] {\n  width: 100%;\n  color: black;\n}\n\n.coldepos[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.boletext[_ngcontent-%COMP%] {\n  margin-top: 1% px;\n  color: var(--count-color);\n  font-weight: lighter;\n  font-size: 15px;\n}\n\n.iconDrop[_ngcontent-%COMP%] {\n  margin-bottom: -50px;\n  margin-left: 79%;\n  color: var(--drowdown-text-color);\n}\n\n@media (min-width: 1062px) {\n  .iconDrop[_ngcontent-%COMP%] {\n    margin-bottom: -50px;\n    margin-left: 90%;\n  }\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  --bs-dropdown-color: var(--bs-drown-color);\n  --bs-dropdown-bg: var(--bg-color-drow);\n  --bs-dropdown-border-color: var(--bs-border-color-translucent);\n  --bs-dropdown-inner-border-radius: calc(0.375rem - 1px);\n  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);\n  --bs-dropdown-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  --bs-dropdown-link-color: var(--bs-drown-color);\n  --bs-dropdown-link-hover-color: #1e2125;\n  --bs-dropdown-link-hover-bg: #e9ecef;\n  --bs-dropdown-link-active-color: #fff;\n  --bs-dropdown-link-active-bg: #26501e;\n  --bs-dropdown-link-disabled-color: #adb5bd;\n  --bs-dropdown-header-color: #6c757d;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: var(--drowdown-text-color);\n  background-color: var(--drowdown-bg);\n  border: 1px solid var(--drowdown-brd);\n}\n\n.titlerequs[_ngcontent-%COMP%] {\n  color: var(--count-color);\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  color: var(--text-input-grup);\n  background-color: var(--bg-input-grup);\n  border: 1px solid var(--br-input-grup);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcG9zaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBRUY7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFDSTtFQUNFLHFCQUFBO0FBQ047O0FBQ007RUFDRSxZQUFBO0FBQ1I7O0FBR0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFETjs7QUFJSTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBRk47O0FBS0k7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBSE47O0FBTUk7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSk47O0FBTU07RUFDRSxZQUFBO0FBSlI7O0FBT007RUFDRSxVQUFBO0FBTFI7O0FBUU07RUFDRSxvQkFBQTtBQU5SOztBQVVJO0VBQ0UsaUJBQUE7QUFSTjs7QUFXSTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBVE47O0FBV007RUFDRSxXQUFBO0FBVFI7O0FBYUk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQVhOOztBQWNJO0VBQ0UsZUFBQTtBQVpOOztBQWtCRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBZko7O0FBa0JFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBZko7O0FBaUJFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFkSjs7QUFpQkU7RUFDRSx1QkFBQTtFQUNELGtCQUFBO0FBZEg7O0FBaUJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFkSjs7QUFpQkU7RUFDRSxtQkFBQTtBQWRKOztBQWlCRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFkSjs7QUFrQkU7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUFmSjs7QUFrQkU7RUFFRTtJQUNFLG9CQUFBO0lBQ0EsZ0JBQUE7RUFoQko7QUFDRjs7QUFtQkU7RUFDRSx5REFBQTtBQWpCSjs7QUFvQkU7RUFDRSwwQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOERBQUE7RUFDQSx1REFBQTtFQUNBLDREQUFBO0VBQ0EsMkRBQUE7RUFDQSwrQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtBQWpCSjs7QUFxQkU7RUFDRSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7QUFsQko7O0FBcUJFO0VBQ0UseUJBQUE7QUFsQko7O0FBcUJFO0VBQ0UsNkJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0FBbEJKIiwiZmlsZSI6ImRlcG9zaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXNzZXQtbGlzdC1pdGVtIHtcclxuICAgIG1hcmdpbjogMC41ZW0gMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2VjY2NjO1xyXG4gIH1cclxuZGl2LnNjcm9sbHtcclxuICBtYXJnaW46IDAuNWVtIDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuICBcclxuLmFzc2V0cy1lYXN5LXBhZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogIzRENEQ0RDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xyXG5cclxuICAgIGZpZ3VyZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcclxuICAgICAgXHJcbiAgICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoMi50aXRsZSB7XHJcbiAgICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIGNvbG9yOiAjNEQ0RDREXHJcbiAgICB9XHJcblxyXG4gICAgc3Bhbi5hbW91bnQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEQ0RDREO1xyXG4gICAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gICAgICBwYWRkaW5nOiA1cHggMnJlbTtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuXHJcbiAgICAuYXNzZXQtY29udGFpbmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDAgMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogLTEuNXJlbTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIH1cclxuXHJcbiAgICAuYnV5LXNlbGwtbWVzc2FnZSB7XHJcbiAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgY29sb3I6ICM0RDRENEQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgJi5ncmVlbiB7XHJcbiAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnJlZCB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VuZC1idXR0b24ge1xyXG4gICAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuc3VtbWFyeSB7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICMyYmJhNGE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN1bW1hcnktaXRlbSB7XHJcbiAgICAgIGNvbG9yOiAjNEQ0RDREO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudG90YWwge1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG4gIC50ZXh0RGVwIHtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgY29sb3I6ICMyYmJhNGE7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxuXHJcbiAgLnRleGljb25kZXB7XHJcbiAgICBjb2xvcjogdmFyKC0tY291bnQtY29sb3IpO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICAucGFyY29uZGVwe1xyXG4gICAgY29sb3I6IHZhcigtLWNvdW50LWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgfVxyXG5cclxuICAuaWNvbnNkZXB7XHJcbiAgICBjb2xvcjogcmdiKDI4LCAxNDEsIDI4KTtcclxuICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duZGVwe1xyXG4gICAgd2lkdGg6IDEwMCU7ICBcclxuICAgIGNvbG9yOiBibGFjaztcclxuXHJcbiAgfVxyXG4gIC5jb2xkZXBvc3tcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYm9sZXRleHR7XHJcbiAgICBtYXJnaW4tdG9wOiAxJXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWNvdW50LWNvbG9yKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5pY29uRHJvcHtcclxuICAgIG1hcmdpbi1ib3R0b206IC01MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc5JTtcclxuICAgIGNvbG9yOnZhcigtLWRyb3dkb3duLXRleHQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwNjJweCkge1xyXG4gIFxyXG4gICAgLmljb25Ecm9we1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtNTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDkwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zaGFkb3cge1xyXG4gICAgYm94LXNoYWRvdzogMCAuNXJlbSAycmVtIHZhcigtLXNoYWRvd24tY29sb3IpIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1tZW51e1xyXG4gICAgLS1icy1kcm9wZG93bi1jb2xvcjogdmFyKC0tYnMtZHJvd24tY29sb3IpO1xyXG4gICAgLS1icy1kcm9wZG93bi1iZzogdmFyKC0tYmctY29sb3ItZHJvdyk7XHJcbiAgICAtLWJzLWRyb3Bkb3duLWJvcmRlci1jb2xvcjogdmFyKC0tYnMtYm9yZGVyLWNvbG9yLXRyYW5zbHVjZW50KTtcclxuICAgIC0tYnMtZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogY2FsYygwLjM3NXJlbSAtIDFweCk7XHJcbiAgICAtLWJzLWRyb3Bkb3duLWRpdmlkZXItYmc6IHZhcigtLWJzLWJvcmRlci1jb2xvci10cmFuc2x1Y2VudCk7XHJcbiAgICAtLWJzLWRyb3Bkb3duLWJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIC0tYnMtZHJvcGRvd24tbGluay1jb2xvcjogdmFyKC0tYnMtZHJvd24tY29sb3IpO1xyXG4gICAgLS1icy1kcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAjMWUyMTI1O1xyXG4gICAgLS1icy1kcm9wZG93bi1saW5rLWhvdmVyLWJnOiAjZTllY2VmO1xyXG4gICAgLS1icy1kcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogI2ZmZjtcclxuICAgIC0tYnMtZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICMyNjUwMWU7XHJcbiAgICAtLWJzLWRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICNhZGI1YmQ7XHJcbiAgICAtLWJzLWRyb3Bkb3duLWhlYWRlci1jb2xvcjogIzZjNzU3ZDtcclxuICBcclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgY29sb3I6IHZhcigtLWRyb3dkb3duLXRleHQtY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHJvd2Rvd24tYmcpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZHJvd2Rvd24tYnJkKTsgICAgXHJcbiAgfVxyXG5cclxuICAudGl0bGVyZXF1c3tcclxuICAgIGNvbG9yOiB2YXIoLS1jb3VudC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1pbnB1dC1ncnVwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWlucHV0LWdydXApO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnItaW5wdXQtZ3J1cCk7XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 46373:
/*!***********************************************************!*\
  !*** ./src/app/Portafolio/Withdraw/withdraw.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithdrawComponent": () => (/* binding */ WithdrawComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/PopUp/confirmation/confirmation.component */ 40915);
/* harmony import */ var src_app_PopUp_qr_reader_qr_reader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/PopUp/qr-reader/qr-reader.component */ 43335);
/* harmony import */ var src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/Enum/EnumPopUp.enum */ 42241);
/* harmony import */ var src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/Enum/EnumAuthentication.enum */ 81708);
/* harmony import */ var src_app_PaymentMethods_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/PaymentMethods/payment-methods/payment-methods.component */ 69649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_Wallet_wallet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/Wallet/wallet.service */ 11952);
/* harmony import */ var src_services_WebSocket_socketio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/WebSocket/socketio.service */ 97317);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_services_TestFounds_test_founds_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/TestFounds/test-founds.service */ 77250);
/* harmony import */ var src_services_Client_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/Client/client.service */ 64022);
/* harmony import */ var src_services_payments_payment_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/payments/payment.service */ 61084);
/* harmony import */ var src_services_Market_market_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/Market/market.service */ 74421);
/* harmony import */ var src_services_portafolio_portafolio_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/portafolio/portafolio.service */ 21013);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/manage-data.service */ 43607);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 94666);
























function WithdrawComponent_div_13_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const asset_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](asset_r8.base_currency);
  }
}

function WithdrawComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function WithdrawComponent_div_13_Template_div_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r9.IsValidatedID());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "select", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function WithdrawComponent_div_13_Template_select_change_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10);

      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](11);

      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r11.SelectCurrency(_r6.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, WithdrawComponent_div_13_option_15_Template, 2, 1, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 4, "cryptoWithdrawal.whatCurrency"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r0.disable_withdraw);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](14, 6, "general.select"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r0.portfolioBalances);
  }
}

function WithdrawComponent_div_15_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const method_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](method_r14.name);
  }
}

function WithdrawComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "select", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function WithdrawComponent_div_15_Template_select_change_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](11);

      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r15.SelectMethod(_r12.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, WithdrawComponent_div_15_option_15_Template, 2, 1, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 3, "funds.selectPaymentMethod"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](14, 5, "general.select"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.withdraw_methods);
  }
}

function WithdrawComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 3)(1, "div", 28)(2, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", ctx_r2.payment_method_name, " ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 2, "funds.amount"), "");
  }
}

function WithdrawComponent_div_18_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "span", 41);
  }
}

function WithdrawComponent_div_18_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "general.continue"), "");
  }
}

function WithdrawComponent_div_18_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "general.validating"), " ...");
  }
}

function WithdrawComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "div", 30)(2, "div", 31)(3, "div", 32)(4, "input", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("input", function WithdrawComponent_div_18_Template_input_input_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r23);

      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](5);

      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r22.InputCurrency(_r17.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 31)(11, "div", 32)(12, "input", 33, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("input", function WithdrawComponent_div_18_Template_input_input_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r23);

      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](13);

      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r24.InputUsd(_r18.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 3)(17, "div", 28)(18, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function WithdrawComponent_div_18_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r23);

      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](13);

      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r25.PaymentProccessUsd("USD", _r18.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, WithdrawComponent_div_18_span_19_Template, 1, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, WithdrawComponent_div_18_span_20_Template, 3, 3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, WithdrawComponent_div_18_span_21_Template, 3, 3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](22, "hr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](5);

    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](13);

    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx_r3.input_currency_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.client_data.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx_r3.input_usd_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r3.validating)("disabled", _r18.value == "0" || _r17.value == "0" || _r18.value == "" || _r17.value == "" || ctx_r3.button_disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r3.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r3.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r3.validating);
  }
}

function WithdrawComponent_div_19_div_21_label_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate5"]("", ctx_r31.cost, "", ctx_r31.fee_value, "", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 5, "cryptoWithdrawal.feeNetworkMessage"), "", ctx_r31.minutes, "", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 7, "cryptoWithdrawal.minutes"), "");
  }
}

function WithdrawComponent_div_19_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "p")(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "svg", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 3)(9, "div", 45)(10, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function WithdrawComponent_div_19_div_21_Template_input_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r33.ActionFee("urgent"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 45)(12, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function WithdrawComponent_div_19_div_21_Template_input_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r35.ActionFee("fast"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 45)(14, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function WithdrawComponent_div_19_div_21_Template_input_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r34);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r36.ActionFee("normal"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 45)(16, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function WithdrawComponent_div_19_div_21_Template_input_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r34);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r37.ActionFee("fee_saver"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, WithdrawComponent_div_19_div_21_label_18_Template, 4, 9, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 61)(25, "div", 62)(26, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function WithdrawComponent_div_19_div_21_Template_span_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r34);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r38.ReadQR());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "svg", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](28, "path", 65)(29, "path", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "input", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("input", function WithdrawComponent_div_19_div_21_Template_input_input_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r34);

      const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](31);

      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r39.InputAddress(_r32.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "p")(36, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 6, "cryptoWithdrawal.networkFee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r27.label_show);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](23, 8, "cryptoWithdrawal.deductFee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx_r27.address_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](34, 10, "cryptoWithdrawal.toDestinationAddress"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](38, 12, "cryptoWithdrawal.walletMessage"));
  }
}

function WithdrawComponent_div_19_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "span", 41);
  }
}

function WithdrawComponent_div_19_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "general.continue"), "");
  }
}

function WithdrawComponent_div_19_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "general.validating"), " ...");
  }
}

function WithdrawComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "div", 4)(3, "p")(4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "input", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("input", function WithdrawComponent_div_19_Template_input_input_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r41);

      const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](11);

      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r40.InputCrypto(_r26.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 3)(13, "div", 45)(14, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function WithdrawComponent_div_19_Template_input_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r42.PerceintsButtons("25"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 45)(16, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function WithdrawComponent_div_19_Template_input_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r41);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r43.PerceintsButtons("50"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 45)(18, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function WithdrawComponent_div_19_Template_input_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r41);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r44.PerceintsButtons("75"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 45)(20, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function WithdrawComponent_div_19_Template_input_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r41);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r45.PerceintsButtons("100"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, WithdrawComponent_div_19_div_21_Template, 39, 14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 3)(23, "div", 50)(24, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function WithdrawComponent_div_19_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r41);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r46.ButtonValidate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, WithdrawComponent_div_19_span_25_Template, 1, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, WithdrawComponent_div_19_span_26_Template, 3, 3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](27, WithdrawComponent_div_19_span_27_Template, 3, 3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](9, 12, "cryptoWithdrawal.withdrawalAmount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("max", ctx_r4.total_qty_crypto)("value", ctx_r4.input_amount_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r4.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r4.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r4.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r4.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.crypto_valid_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r4.validating || !ctx_r4.fee_select || !ctx_r4.button_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r4.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.validating);
  }
}

function WithdrawComponent_div_20_span_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "span", 41);
  }
}

function WithdrawComponent_div_20_span_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "funds.withdrawal"), "");
  }
}

function WithdrawComponent_div_20_span_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "general.validating"), " ...");
  }
}

function WithdrawComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 70)(1, "div", 4)(2, "h2", 71)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "p")(7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "p")(15, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "p")(23, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "p")(31, "span", 16)(32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "p")(36, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](41, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "p")(43, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "p")(49, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "div", 3)(56, "div", 28)(57, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function WithdrawComponent_div_20_Template_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r50.PaymentProccessCrypto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](58, WithdrawComponent_div_20_span_58_Template, 1, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](59, WithdrawComponent_div_20_span_59_Template, 3, 3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](60, WithdrawComponent_div_20_span_60_Template, 3, 3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 22, "cryptoWithdrawal.withdrawFromPortfolio"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](9, 24, "cryptoWithdrawal.withdrawQuantity"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r5.input_amount_value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r5.crypto_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](17, 26, "cryptoWithdrawal.networkFee"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r5.cost, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r5.crypto_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](25, 28, "cryptoWithdrawal.totalWithdrawQuantity"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r5.input_amount_value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r5.crypto_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](34, 30, "cryptoWithdrawal.deductedFromWithdrawal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](38, 32, "cryptoWithdrawal.onDate"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](41, 34, ctx_r5.date, "yyyy/MM/dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](45, 37, "cryptoWithdrawal.toDestinationAddress"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r5.address_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](51, 39, "cryptoWithdrawal.timeWaitConfirmation"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", ctx_r5.minutes, " ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](54, 41, "cryptoWithdrawal.minutes"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r5.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r5.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.validating);
  }
}

class WithdrawComponent {
  constructor(wallet_service, websocket, toastr, test_payments, client, payments, market, assets, translate, router, dialog, manage_data, spinner) {
    this.wallet_service = wallet_service;
    this.websocket = websocket;
    this.toastr = toastr;
    this.test_payments = test_payments;
    this.client = client;
    this.payments = payments;
    this.market = market;
    this.assets = assets;
    this.translate = translate;
    this.router = router;
    this.dialog = dialog;
    this.manage_data = manage_data;
    this.spinner = spinner;
    this.langs = [];
    this.assets_data = [];
    this.withdraw_methods = [];
    this.products_id = [];
    this.assets_values_socket = [];
    this.usd_select = false;
    this.crypto_select = false;
    this.payment_method_select = false;
    this.withdraw = true;
    this.final_dialog = false;
    this.button_disabled = false;
    this.fee_select = false;
    this.crypto_valid_value = false;
    this.label_show = false;
    this.isChecked = false;
    this.button_address = false;
    this.validating = false;
    this.input_amount_value = "";
    this.address_data = '';
    this.input_currency_value = 0;
    this.input_usd_value = 0;
    this.date = new Date();
    this.disable_withdraw = false;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.spinner.show();

      yield _this.InitWithdraw();
      yield _this.IsValidatedID();

      _this.spinner.hide();
    })();
  }

  ReadQR() {
    var _this2 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.address_data = '';
      const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true; // dialogConfig.height = "25%";
      //dialogConfig.width = "40rem";

      let dialogRef = _this2.dialog.open(src_app_PopUp_qr_reader_qr_reader_component__WEBPACK_IMPORTED_MODULE_2__.QrReaderComponent, dialogConfig);

      _this2.subscription.add(dialogRef.afterClosed().subscribe(() => {
        _this2.subscription.add(_this2.manage_data.getSubject(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_3__.EnumEventsPopUp.QRReaderWithdraw.toString()).subscribe(response => {
          _this2.address_data = response;
          _this2.button_address = true;
        }));
      }));
    })();
  }

  ConfirmAddMethod() {
    var _this3 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "40rem";
      var data = {
        title: yield _this3.translate.get('dialog.generateWithdraw').toPromise(),
        icon: 'quest',
        conten: yield _this3.translate.get('dialog.agreewithmethod').toPromise()
      };

      _this3.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_3__.EnumEventsPopUp.ConfirmAction.toString(), data);

      let dialogRef = _this3.dialog.open(src_app_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationComponent, dialogConfig);

      _this3.subscription.add(dialogRef.afterClosed().subscribe(result => {
        if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_4__.EnumConfirmation.si.toString()) {
          _this3.WithdrawNotSaved();
        }
      }));
    })();
  } //************************************************************************************
  //Confirm Validate ID
  //************************************************************************************


  ConfirmValidateID() {
    var _this4 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogConfig();
      dialogConfig.autoFocus = false;
      dialogConfig.disableClose = true; // dialogConfig.height = "20rem";

      dialogConfig.width = "40rem";
      var data = {
        title: yield _this4.translate.get("Errores.mustValidateID").toPromise(),
        icon: 'quest',
        conten: yield _this4.translate.get("Errores.wantValidateID").toPromise()
      };

      _this4.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_3__.EnumEventsPopUp.ConfirmAction.toString(), data);

      let dialogRef = _this4.dialog.open(src_app_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationComponent, dialogConfig);

      _this4.subscription.add(dialogRef.afterClosed().subscribe(result => {
        if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_4__.EnumConfirmation.si.toString()) {
          _this4.router.navigate(['/vouched']);
        }
      }));
    })();
  } //************************************************************************************
  //Is Validated ID?
  //************************************************************************************


  IsValidatedID() {
    var _this5 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = yield _this5.GetClientConfig();

      if (data.id_verified) {
        _this5.disable_withdraw = false;
      } else {
        _this5.disable_withdraw = true;

        _this5.ConfirmValidateID();
      }
    })();
  } //************************************************************************************
  //Init Withdraw
  //************************************************************************************


  InitWithdraw() {
    var _this6 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        //===========================================================================
        //Get client config
        //===========================================================================
        let getClientConfigResponse = yield _this6.GetClientConfig();

        if (!getClientConfigResponse) {
          return;
        }

        _this6.client_data = getClientConfigResponse; // console.log("getClientConfigResponse:", getClientConfigResponse);
        //===========================================================================
        //Get Default portafolio
        //===========================================================================

        let getDefaultPortafolioResponse = yield _this6.GetDefaultPortafolio();

        if (!getDefaultPortafolioResponse) {
          return;
        } // console.log("getDefaultPortafolioResponse:", getDefaultPortafolioResponse);


        _this6.portfolio_name = getDefaultPortafolioResponse.name; //===========================================================================
        //Get Default portafolio
        //===========================================================================

        let portfolioBalancesResponse = yield _this6.GetPortfolioBalances();

        if (!portfolioBalancesResponse) {
          return;
        } // console.log("portfolioBalancesResponse:", portfolioBalancesResponse);


        if (portfolioBalancesResponse.length === 0) {
          return;
        }

        portfolioBalancesResponse = portfolioBalancesResponse.filter(x => x.qty > 0); // console.log("portfolioBalancesResponse after:", portfolioBalancesResponse);

        if (portfolioBalancesResponse.length === 0) {
          _this6.ShowWarning("You have no money or coins to withdraw");

          return;
        }

        _this6.portfolioBalances = portfolioBalancesResponse.sort((a, b) => {
          if (a.fiat) return -1;
          if (a.base_currency > b.base_currency) return 1;else return -1;
        });
        ; // console.log("portfolioBalancesResponse sort:", portfolioBalancesResponse);

        _this6.products_id = portfolioBalancesResponse.filter(y => y.fiat === false).map(x => `${x.base_currency}-USD`); // console.log("products_id:", this.products_id);
        //===========================================================================
        //Init Blox socket
        //===========================================================================

        _this6.websocket.InitBlox(_this6.products_id); //===========================================================================
        //Get all withdraw methods
        //===========================================================================


        let getAllPaymentMethodsResponse = yield _this6.GetAllPaymentMethods();

        if (!getAllPaymentMethodsResponse) {
          _this6.ShowWarning("Please add a withdraw method to the portfolio", "There are no withdraw methods", false);
        } // console.log("getAllPaymentMethodsResponse:", getAllPaymentMethodsResponse);


        _this6.withdraw_methods = getAllPaymentMethodsResponse;
        _this6.loadCompleteOK = true; //===========================================================================
        //WebSocket Coins Blox

        _this6.subscription.add(_this6.websocket.GetDataBlox().subscribe(data => {
          if (typeof data != 'object' && data != "Hey Dude!") {
            _this6.SetValues(JSON.parse(data));
          }
        })); //===========================================================================

      } catch (error) {
        console.error("Error on InitDeposit:", error);
      }
    })();
  }

  SetValues(data) {
    const data_value = {
      product_id: data['product_id'],
      price: data['mid_price']
    };
    let asset = this.assets_values_socket.find(element => element['product_id'] == data_value['product_id']);

    if (asset) {
      if (asset.price != data_value.price) {
        asset.price = data_value.price;
      }
    } else {
      this.assets_values_socket.push(data_value);
    } //console.log(this.assets_data);

  }

  SelectCurrency(value) {
    var _this7 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this7.loadCompleteOK === false) {
        var msg = yield _this7.translate.get('Errores.pleaseReload').toPromise();

        _this7.ShowError(msg, "Error");

        return;
      }

      switch (value) {
        case 'USD':
          _this7.crypto_select = false;
          _this7.usd_select = true;
          _this7.crypto_valid_value = false;
          _this7.label_show = false;
          _this7.input_amount_value = 0;

          if (_this7.withdraw_methods.toString() === "") {
            _this7.ConfirmAddMethod();

            break;
          }

          break;

        case 'Select':
          break;

        default:
          _this7.crypto_name = value;
          const balanceSymbol = {
            portfolio_name: _this7.portfolio_name,
            symbol: _this7.crypto_name
          };
          const coin = {
            coin: _this7.crypto_name
          };
          let balanceForSymbolResponse = yield _this7.GetBalanceForSymbol(balanceSymbol);

          if (!balanceForSymbolResponse) {
            return;
          } // console.log("balanceForSymbolResponse:", balanceForSymbolResponse)


          _this7.total_qty_crypto = balanceForSymbolResponse.qty;
          let estimatedFeeResponse = yield _this7.GetEstimatedFee(coin);

          if (!estimatedFeeResponse) {
            return;
          } // console.log("estimatedFeeResponse:", estimatedFeeResponse)


          _this7.fee_data = estimatedFeeResponse;
          _this7.crypto_valid_value = false;
          _this7.label_show = false;
          _this7.usd_select = false;
          _this7.button_address = false;
          _this7.crypto_select = true;
          _this7.payment_method_select = false;
          break;
      }
    })();
  }

  SelectMethod(value) {
    switch (value) {
      case 'Select':
        this.payment_method_select = false;
        break;

      default:
        this.payment_method_select = true;
        this.payment_method_name = value;
        break;
    }
  }

  ContinuePaymentButton() {
    this.usd_select = false;
    this.button_address = false;
    this.crypto_select = false;
    this.payment_method_select = false;
    this.withdraw = false;
    this.final_dialog = true;
  }

  PerceintsButtons(perceint) {
    switch (perceint) {
      case '25':
        this.withdrawMAX = false;
        this.input_amount_value = Number(this.total_qty_crypto) * 0.25;
        break;

      case '50':
        this.withdrawMAX = false;
        this.input_amount_value = Number(this.total_qty_crypto) * 0.5;
        break;

      case '75':
        this.withdrawMAX = false;
        this.input_amount_value = Number(this.total_qty_crypto) * 0.75;
        break;

      case '100':
        this.withdrawMAX = true;
        this.input_amount_value = Number(this.total_qty_crypto);
        break;

      default:
        break;
    }

    if (this.input_amount_value != 0) {
      this.crypto_valid_value = true;
    } else {
      this.crypto_valid_value = false;
    }
  }

  ActionFee(data) {
    let price = this.assets_values_socket.find(element => element.product_id == this.crypto_name + '-USD');

    switch (data) {
      case 'urgent':
        this.fee_select = true;
        this.minutes = Number(this.fee_data[data]['time_in_secs']) / 60 + " ";
        this.cost = Number(this.fee_data[data]['cost']).toFixed(8) + " " + this.crypto_name;
        this.fee_value = " ($" + (this.fee_data[data]['cost'] * price.price).toFixed(2) + ")";
        this.label_show = true;
        break;

      case 'fast':
        this.fee_select = true;
        this.minutes = Number(this.fee_data[data]['time_in_secs']) / 60 + " ";
        this.cost = Number(this.fee_data[data]['cost']).toFixed(8) + " " + this.crypto_name;
        this.fee_value = " ($" + (this.fee_data[data]['cost'] * price.price).toFixed(2) + ")";
        this.label_show = true;
        break;

      case 'normal':
        this.fee_select = true;
        this.minutes = Number(this.fee_data[data]['time_in_secs']) / 60 + " ";
        this.cost = Number(this.fee_data[data]['cost']).toFixed(8) + " " + this.crypto_name;
        this.fee_value = " ($" + (this.fee_data[data]['cost'] * price.price).toFixed(2) + ")";
        this.label_show = true;
        break;

      case 'fee_saver':
        this.fee_select = true;
        this.minutes = Number(this.fee_data[data]['time_in_secs']) / 60 + " ";
        this.cost = Number(this.fee_data[data]['cost']).toFixed(8) + " " + this.crypto_name;
        this.fee_value = " ($" + (this.fee_data[data]['cost'] * price.price).toFixed(2) + ")";
        this.label_show = true;
        break;

      default:
        break;
    }
  } //****************************************************
  //Withdraw Without Payment Method Saved
  //****************************************************


  WithdrawNotSaved() {
    var _this8 = this;

    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true;
    dialogConfig.width = "100rem";
    const data = {
      action: 'Withdraw',
      direction: null
    };
    this.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_3__.EnumEventsPopUp.ActionPaymentMethods.toString(), data);
    let dialog = this.dialog.open(src_app_PaymentMethods_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_5__.PaymentMethodsComponent, dialogConfig);
    this.subscription.add(dialog.afterClosed().subscribe( /*#__PURE__*/(0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let getAllPaymentMethodsResponse = yield _this8.GetAllPaymentMethods();

      if (!getAllPaymentMethodsResponse) {
        _this8.ShowWarning("Please add a withdraw method to the portfolio", "There are no withdraw methods", false);
      }

      _this8.withdraw_methods = getAllPaymentMethodsResponse;
    })));
  } //****************************************************
  //Payment Process
  //****************************************************


  PaymentProccessCrypto() {
    this.validating = true;
    this.button_disabled = true;
    const fundsOut = {
      portfolio_name: this.portfolio_name,
      withdraw_to: "My Wallet at another custodian",
      instrument: this.crypto_name,
      qty: this.input_amount_value,
      notes: "Wired from Chase"
    };

    if (this.withdrawMAX) {
      console.log("Withdraw MAX");
      delete fundsOut.qty;
      console.log("Withdraw Data ", fundsOut);
      this.WithdrawMAX(fundsOut).then(() => {
        this.router.navigate(['/home/portafolio']);
      }).catch(() => {
        this.button_disabled = false;
        this.validating = false;
      });
    } else {
      this.Withdraw(fundsOut).then(() => {
        // console.log(response);
        this.router.navigate(['/home/portafolio']);
      }).catch(() => {
        this.button_disabled = false;
        this.validating = false;
      });
    } // console.log(fundsOut)

  }

  PaymentProccessUsd(coin, qty) {
    var _this9 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.validating = true;
      _this9.button_disabled = true;
      const fundsOut = {
        portfolio_name: _this9.portfolio_name,
        withdraw_to: "My Wallet at another custodian",
        instrument: coin,
        qty: qty,
        notes: "Wired from Chase"
      }; // console.log(fundsOut)

      _this9.Withdraw(fundsOut).then(response => {
        // console.log(response);
        _this9.router.navigate(['/home/portafolio']);
      }).catch(() => {
        _this9.button_disabled = false;
        _this9.validating = false;
      });
    })();
  } //****************************************************
  //****************************************************


  ButtonValidate() {
    this.validating = true;
    const validate = {
      coin: this.crypto_name,
      address2validate: this.address_data
    };
    this.ValidateAddress(validate).then(data => {
      if (data.isValid) {
        this.toastr.success("Valid Wallet to " + this.crypto_name);
        this.usd_select = false;
        this.crypto_select = false;
        this.payment_method_select = false;
        this.withdraw = false;
        this.button_disabled = false;
        this.crypto_valid_value = false;
        this.label_show = false;
        this.isChecked = false;
        this.button_address = false;
        this.final_dialog = true;
        this.validating = false;
      } else {
        this.validating = false;
      }
    }).catch(() => this.validating = false);
  }

  InputAddress(value) {
    if (value != '') {
      this.address_data = value;
      this.button_address = true;
    } else {
      this.address_data = '';
      this.button_address = false;
    }
  }

  InputCurrency(value) {
    var _this10 = this;

    this.validating = true;
    clearTimeout(this.timerConversionCurrency);
    this.timerConversionCurrency = setTimeout( /*#__PURE__*/(0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const fx_convert = {
        from_curr: _this10.client_data.currency,
        to_curr: "USD",
        amount: Number(value)
      };
      let currency_value = yield _this10.Convert(fx_convert);
      _this10.input_usd_value = Number(value * currency_value.price).toFixed(3);
      _this10.validating = false;
    }), 250);
  }

  InputUsd(value) {
    var _this11 = this;

    this.validating = true;
    clearTimeout(this.timerConversionUsd);
    this.timerConversionUsd = setTimeout( /*#__PURE__*/(0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const fx_convert = {
        from_curr: "USD",
        to_curr: _this11.client_data.currency,
        amount: Number(value)
      };
      let currency_value = yield _this11.Convert(fx_convert);
      _this11.input_currency_value = Number(value * currency_value.price).toFixed(3);
      _this11.validating = false;
    }), 250);
  }

  InputCrypto(value) {
    this.withdrawMAX = false;
    this.crypto_qty = Number(value);

    if (value != '' && value != 0 && value <= this.total_qty_crypto) {
      this.crypto_valid_value = true;
    } else {
      this.crypto_valid_value = false;
    }
  } //SERVICES =============================================================================================================================
  //Withdraw Test Api *************************************************************


  Withdraw(data) {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.test_payments.TestWithdraw(data).subscribe(data => {
        resolve(data);
      }, err => {
        console.log("Error Withdraw:", err);
        reject(null);
        this.validating = false;
      }));
    });
  }

  WithdrawMAX(data) {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.assets.WithdrawMax(data).subscribe(data => {
        resolve(data);
      }, err => {
        console.log("Error Withdraw:", err);
        reject(null);
        this.validating = false;
      }));
    });
  }

  Convert(data) {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.market.Convert(data).subscribe(response => {
        resolve(JSON.parse(response.payload));
      }, err => {
        console.log("Error Convert:", err);
        resolve(null);
      }));
    });
  }

  ValidateAddress(data) {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.wallet_service.ValidateWalletAddress(data).subscribe(data => {
        resolve(data);
      }, err => {
        console.log("Error ValidateAddress:", err);
        resolve(null);
      }));
    });
  }

  GetEstimatedFee(data) {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.assets.GetGasFeeEstimate(data).subscribe(data => {
        resolve(data);
      }, err => {
        console.log("Error GetEstimatedFee:", err);
        resolve(null);
      }));
    });
  }

  GetBalanceForSymbol(data) {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.assets.GetPortafolioBalancesForSymbol(data).subscribe(balance => {
        resolve(balance);
      }, err => {
        console.log("Error GetBalanceForSymbol:", err);
        resolve(null);
      }));
    });
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

  GetAllPaymentMethods() {
    const data = {
      direction: "out"
    };
    return new Promise((resolve, reject) => {
      this.subscription.add(this.payments.GetClientPaymentMethods(data).subscribe(response => {
        resolve(response);
      }, err => {
        console.log("Error GetAllPaymentMethods:", err);
        resolve(null);
      }));
    });
  }

  GetPortfolioBalances() {
    const portfolio = {
      portfolio_name: this.portfolio_name
    };
    return new Promise((resolve, reject) => {
      this.subscription.add(this.assets.GetPortafolioBalances(portfolio).subscribe(response => {
        resolve(response);
      }, err => {
        console.log("Error GetAllPaymentMethods:", err);
        resolve(null);
      }));
    });
  }

  ShowError(msg, title = "", disableTimeOut = true) {
    console.error(msg);
    this.toastr.error(msg, title, {
      closeButton: true,
      disableTimeOut: disableTimeOut,
      positionClass: 'toast-center-center'
    });
  }

  ShowWarning(msg, title = "", disableTimeOut = true) {
    console.warn(msg);
    this.toastr.warning(msg, title, {
      closeButton: true,
      disableTimeOut: disableTimeOut,
      positionClass: 'toast-center-center'
    });
  }

}

WithdrawComponent.ɵfac = function WithdrawComponent_Factory(t) {
  return new (t || WithdrawComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_services_Wallet_wallet_service__WEBPACK_IMPORTED_MODULE_6__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_services_WebSocket_socketio_service__WEBPACK_IMPORTED_MODULE_7__.SocketioService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_services_TestFounds_test_founds_service__WEBPACK_IMPORTED_MODULE_8__.TestFoundsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_services_Client_client_service__WEBPACK_IMPORTED_MODULE_9__.ClientService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_services_payments_payment_service__WEBPACK_IMPORTED_MODULE_10__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_services_Market_market_service__WEBPACK_IMPORTED_MODULE_11__.MarketService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_services_portafolio_portafolio_service__WEBPACK_IMPORTED_MODULE_12__.PortafolioService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_13__.ManageDataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerService));
};

WithdrawComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: WithdrawComponent,
  selectors: [["app-withdraw"]],
  decls: 21,
  vars: 13,
  consts: [["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "line-scale-pulse-out", 3, "fullScreen"], [2, "color", "white"], [1, "container", "text-center", "shadow", 2, "margin-top", "1%"], [1, "row"], [1, "col"], [1, "textDep"], [1, "container", "shadow", 2, "margin-top", "1%"], [1, "row", 2, "margin-top", "1%"], [1, "col-xl-6", "col-md-6", "my-1"], [4, "ngIf"], [2, "color", "rgb(78, 76, 76)", "width", "100%"], ["class", "row", 4, "ngIf"], ["class", "row", "id", "perdido", 4, "ngIf"], [1, "iconsdep"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "25", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-1-circle-fill"], ["fill-rule", "evenodd", "d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"], [1, "texicondep"], [1, "form-group", "dropdowndep", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-chevron-down", "iconDrop"], ["fill-rule", "evenodd", "d", "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"], [1, "form-control", 3, "disabled", "change"], ["selectCurrency", ""], [4, "ngFor", "ngForOf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "25", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-2-circle-fill"], ["d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z"], [1, "form-group", "dropdowndep"], [1, "form-control", 3, "change"], ["selectMethod", ""], [1, "col", "text-center"], [1, "boletext"], [1, "row", "mb-3"], [1, "col-xl-4"], [1, "input-group", "mb-1", "dropdowndep"], ["type", "number", "min", "0", "placeholder", "", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control", 3, "value", "input"], ["inputCurrency", ""], ["id", "basic-addon2", 1, "input-group-text"], [1, "col-xl-4", "text-center"], ["id", "u574_img", "src", "../../../../assets/images/u165.svg", 1, "img", 2, "transform", "rotate(90deg)"], ["inputUsd", ""], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "parcondep"], ["type", "number", "min", "0", "placeholder", "", "aria-label", ".form-control-lg example", 1, "form-control", "form-control-lg", "my-3", 3, "max", "value", "input"], ["withdrawalAmount", ""], [1, "col-sm-3", "mb-2"], ["type", "button", "readonly", "", "placeholder", "", "value", "25%", 1, "form-control", "form-control-lg", 2, "font-size", "12px", 3, "disabled", "click"], ["type", "button", "readonly", "", "placeholder", "", "value", "50%", 1, "form-control", "form-control-lg", 2, "font-size", "12px", 3, "disabled", "click"], ["type", "button", "readonly", "", "placeholder", "", "value", "75%", 1, "form-control", "form-control-lg", 2, "font-size", "12px", 3, "disabled", "click"], ["type", "button", "readonly", "", "placeholder", "", "value", "100%", 1, "form-control", "form-control-lg", 2, "font-size", "12px", 3, "disabled", "click"], [1, "col", "text-center", "my-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "25", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-3-circle-fill"], ["d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z"], ["readonly", "", "type", "button", "placeholder", "", "value", "Urgent", 1, "form-control", "form-control-lg", 2, "font-size", "12px", 3, "click"], ["readonly", "", "type", "button", "placeholder", "", "value", "Fast", 1, "form-control", "form-control-lg", 2, "font-size", "12px", 3, "click"], ["readonly", "", "type", "button", "placeholder", "", "value", "Normal", 1, "form-control", "form-control-lg", 2, "font-size", "12px", 3, "click"], ["readonly", "", "type", "button", "placeholder", "", "value", "Fee saver", 1, "form-control", "form-control-lg", 2, "font-size", "12px", 3, "click"], ["class", "form-control form-control-lg", "readonly", "", "type", "text", "placeholder", "", "style", "font-size: 12px; border: 0ch; text-align: center;", 4, "ngIf"], [1, "form-check", "form-switch", "mb-3"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckDefault", 1, "form-check-input"], ["for", "flexSwitchCheckDefault", 1, "form-check-label", "parcondep", 2, "margin-top", "8px"], [1, ""], [1, "input-group", "my-2"], ["id", "basic-addon2", 1, "input-group-text", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-camera-fill"], ["d", "M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"], ["d", "M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"], ["type", "text", "placeholder", "", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control", 3, "value", "input"], ["inputAddress", ""], ["readonly", "", "type", "text", "placeholder", "", 1, "form-control", "form-control-lg", 2, "font-size", "12px", "border", "0ch", "text-align", "center"], ["id", "perdido", 1, "row"], [1, "titlerequs"]],
  template: function WithdrawComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ngx-spinner", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, WithdrawComponent_div_13_Template, 16, 8, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, WithdrawComponent_div_15_Template, 16, 7, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "hr", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, WithdrawComponent_div_17_Template, 5, 4, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, WithdrawComponent_div_18_Template, 23, 8, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, WithdrawComponent_div_19_Template, 28, 14, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, WithdrawComponent_div_20_Template, 61, 43, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fullScreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 9, "general.cargando"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](9, 11, "funds.withdraw"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.withdraw);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.usd_select);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.payment_method_select);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.payment_method_select);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.crypto_select);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.final_dialog);
    }
  },
  dependencies: [ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe],
  styles: [".asset-list-item[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n  background: #cecccc;\n}\n\ndiv.scroll[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n  width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n}\n\n.assets-easy-page[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-top: 2rem;\n  background-size: 10px;\n  color: #4D4D4D;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  -webkit-background-size: initial;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  margin-bottom: 0.2rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 5rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n  font-size: 1rem;\n  color: #4D4D4D;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   span.amount[_ngcontent-%COMP%] {\n  background-color: #4D4D4D;\n  color: #212529;\n  font-size: 2rem;\n  font-weight: bold;\n  border-radius: 1.5rem;\n  padding: 5px 2rem;\n  z-index: 2;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .asset-container[_ngcontent-%COMP%] {\n  background-color: #FAFAFA;\n  border-radius: 2rem 2rem 0 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1rem;\n  padding-top: 3rem;\n  position: relative;\n  top: -1.5rem;\n  width: 100%;\n  z-index: 1;\n  height: 100%;\n  font-size: 0.8rem;\n  justify-content: flex-start;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .buy-sell-message[_ngcontent-%COMP%] {\n  margin: 1rem;\n  color: #4D4D4D;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .buy-sell-message.green[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .buy-sell-message.red[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .buy-sell-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 0.4rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%] {\n  margin: 1rem auto;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: solid 1px #2bba4a;\n  border-radius: 1rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%] {\n  color: #4D4D4D;\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.textDep[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  color: #2bba4a;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.texicondep[_ngcontent-%COMP%] {\n  color: var(--count-color);\n  font-size: 15px;\n}\n\n.parcondep[_ngcontent-%COMP%] {\n  color: var(--count-color);\n  font-size: 15px;\n  text-align: justify;\n}\n\n.iconsdep[_ngcontent-%COMP%] {\n  color: rgb(28, 141, 28);\n  margin-right: 20px;\n}\n\n.dropdowndep[_ngcontent-%COMP%] {\n  width: 100%;\n  color: black;\n}\n\n.coldepos[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.boletext[_ngcontent-%COMP%] {\n  margin-top: 1% px;\n  color: var(--count-color);\n  font-weight: lighter;\n  font-size: 15px;\n}\n\n.iconDrop[_ngcontent-%COMP%] {\n  margin-bottom: -50px;\n  margin-left: 90%;\n  color: var(--drowdown-text-color);\n}\n\n@media (min-width: 1062px) {\n  .iconDrop[_ngcontent-%COMP%] {\n    margin-bottom: -50px;\n    margin-left: 93%;\n  }\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  --bs-dropdown-color: var(--bs-drown-color);\n  --bs-dropdown-bg: var(--bg-color-drow);\n  --bs-dropdown-border-color: var(--bs-border-color-translucent);\n  --bs-dropdown-inner-border-radius: calc(0.375rem - 1px);\n  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);\n  --bs-dropdown-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  --bs-dropdown-link-color: var(--bs-drown-color);\n  --bs-dropdown-link-hover-color: #1e2125;\n  --bs-dropdown-link-hover-bg: #e9ecef;\n  --bs-dropdown-link-active-color: #fff;\n  --bs-dropdown-link-active-bg: #26501e;\n  --bs-dropdown-link-disabled-color: #adb5bd;\n  --bs-dropdown-header-color: #6c757d;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: var(--drowdown-text-color);\n  background-color: var(--drowdown-bg);\n  border: 1px solid var(--drowdown-brd);\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  color: var(--text-input-grup);\n  background-color: var(--bg-input-grup);\n  border: 1px solid var(--br-input-grup);\n}\n\n.titlerequs[_ngcontent-%COMP%] {\n  color: var(--count-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhkcmF3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUVBOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxxQkFBQTtBQUNKOztBQUNJO0VBQ0UsWUFBQTtBQUNOOztBQUdFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUtFO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQUhKOztBQU1FO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU1JO0VBQ0UsWUFBQTtBQUpOOztBQU9JO0VBQ0UsVUFBQTtBQUxOOztBQVFJO0VBQ0Usb0JBQUE7QUFOTjs7QUFVRTtFQUNFLGlCQUFBO0FBUko7O0FBV0U7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQVRKOztBQVdJO0VBQ0UsV0FBQTtBQVROOztBQWFFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFYSjs7QUFjRTtFQUNFLGVBQUE7QUFaSjs7QUFnQkE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWJGOztBQWdCQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQWJGOztBQWVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFaRjs7QUFlQTtFQUNFLHVCQUFBO0VBQ0Qsa0JBQUE7QUFaRDs7QUFlQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBWkY7O0FBZ0JBO0VBQ0UsbUJBQUE7QUFiRjs7QUFlQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFaSjs7QUFlQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQVpGOztBQWVBO0VBRUU7SUFDRSxvQkFBQTtJQUNBLGdCQUFBO0VBYkY7QUFDRjs7QUFnQkE7RUFDRSx5REFBQTtBQWRGOztBQWdCQTtFQUNFLDBDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4REFBQTtFQUNBLHVEQUFBO0VBQ0EsNERBQUE7RUFDQSwyREFBQTtFQUNBLCtDQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwwQ0FBQTtFQUNBLG1DQUFBO0FBYkY7O0FBaUJBO0VBQ0UsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0FBZEY7O0FBaUJBO0VBQ0UsNkJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0FBZEY7O0FBaUJBO0VBQ0UseUJBQUE7QUFkRiIsImZpbGUiOiJ3aXRoZHJhdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hc3NldC1saXN0LWl0ZW0ge1xyXG4gIG1hcmdpbjogMC41ZW0gMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6ICNjZWNjY2M7XHJcbn1cclxuZGl2LnNjcm9sbHtcclxubWFyZ2luOiAwLjVlbSAwO1xyXG53aWR0aDogMTAwJTtcclxub3ZlcmZsb3cteTogYXV0bztcclxub3ZlcmZsb3cteDogaGlkZGVuO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcblxyXG4uYXNzZXRzLWVhc3ktcGFnZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogIzRENEQ0RDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGluaXRpYWw7XHJcblxyXG4gIGZpZ3VyZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XHJcbiAgICBcclxuICAgIGltZ3tcclxuICAgICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDIudGl0bGUge1xyXG4gICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzRENEQ0RFxyXG4gIH1cclxuXHJcbiAgc3Bhbi5hbW91bnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRENEQ0RDtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nOiA1cHggMnJlbTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5cclxuICAuYXNzZXQtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTEuNXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLmJ1eS1zZWxsLW1lc3NhZ2Uge1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgY29sb3I6ICM0RDRENEQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICYuZ3JlZW4ge1xyXG4gICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICB9XHJcblxyXG4gICAgJi5yZWQge1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZW5kLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICB9XHJcblxyXG4gIC5zdW1tYXJ5IHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjMmJiYTRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogM3JlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdW1tYXJ5LWl0ZW0ge1xyXG4gICAgY29sb3I6ICM0RDRENEQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC50b3RhbCB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dERlcCB7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgY29sb3I6ICMyYmJhNGE7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi50ZXhpY29uZGVwe1xyXG4gIGNvbG9yOiB2YXIoLS1jb3VudC1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5wYXJjb25kZXB7XHJcbiAgY29sb3I6IHZhcigtLWNvdW50LWNvbG9yKTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLmljb25zZGVwe1xyXG4gIGNvbG9yOiByZ2IoMjgsIDE0MSwgMjgpO1xyXG4gbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd25kZXB7XHJcbiAgd2lkdGg6IDEwMCU7ICBcclxuICBjb2xvcjogYmxhY2s7XHJcblxyXG59XHJcblxyXG4uY29sZGVwb3N7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYm9sZXRleHR7XHJcbiAgbWFyZ2luLXRvcDogMSVweDtcclxuICBjb2xvcjogdmFyKC0tY291bnQtY29sb3IpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5pY29uRHJvcHtcclxuICBtYXJnaW4tYm90dG9tOiAtNTBweDtcclxuICBtYXJnaW4tbGVmdDogOTAlO1xyXG4gIGNvbG9yOnZhcigtLWRyb3dkb3duLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTA2MnB4KSB7XHJcblxyXG4gIC5pY29uRHJvcHtcclxuICAgIG1hcmdpbi1ib3R0b206IC01MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkzJTtcclxuICB9XHJcbn1cclxuXHJcbi5zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgLjVyZW0gMnJlbSB2YXIoLS1zaGFkb3duLWNvbG9yKSFpbXBvcnRhbnQ7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnV7XHJcbiAgLS1icy1kcm9wZG93bi1jb2xvcjogdmFyKC0tYnMtZHJvd24tY29sb3IpO1xyXG4gIC0tYnMtZHJvcGRvd24tYmc6IHZhcigtLWJnLWNvbG9yLWRyb3cpO1xyXG4gIC0tYnMtZHJvcGRvd24tYm9yZGVyLWNvbG9yOiB2YXIoLS1icy1ib3JkZXItY29sb3ItdHJhbnNsdWNlbnQpO1xyXG4gIC0tYnMtZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogY2FsYygwLjM3NXJlbSAtIDFweCk7XHJcbiAgLS1icy1kcm9wZG93bi1kaXZpZGVyLWJnOiB2YXIoLS1icy1ib3JkZXItY29sb3ItdHJhbnNsdWNlbnQpO1xyXG4gIC0tYnMtZHJvcGRvd24tYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIC0tYnMtZHJvcGRvd24tbGluay1jb2xvcjogdmFyKC0tYnMtZHJvd24tY29sb3IpO1xyXG4gIC0tYnMtZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogIzFlMjEyNTtcclxuICAtLWJzLWRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICNlOWVjZWY7XHJcbiAgLS1icy1kcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogI2ZmZjtcclxuICAtLWJzLWRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAjMjY1MDFlO1xyXG4gIC0tYnMtZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogI2FkYjViZDtcclxuICAtLWJzLWRyb3Bkb3duLWhlYWRlci1jb2xvcjogIzZjNzU3ZDtcclxuXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGNvbG9yOiB2YXIoLS1kcm93ZG93bi10ZXh0LWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcm93ZG93bi1iZyk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZHJvd2Rvd24tYnJkKTsgICAgXHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC10ZXh0IHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1pbnB1dC1ncnVwKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1pbnB1dC1ncnVwKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ici1pbnB1dC1ncnVwKTtcclxufVxyXG5cclxuLnRpdGxlcmVxdXN7XHJcbiAgY29sb3I6IHZhcigtLWNvdW50LWNvbG9yKTtcclxufVxyXG5cclxuIl19 */"]
});

/***/ }),

/***/ 9899:
/*!*********************************************************!*\
  !*** ./src/app/Portafolio/portafolio-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortafolioRoutingModule": () => (/* binding */ PortafolioRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _Deposit_deposit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Deposit/deposit.component */ 77712);
/* harmony import */ var _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portafolio/portafolio.component */ 64714);
/* harmony import */ var _Withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Withdraw/withdraw.component */ 46373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
    { path: '', component: _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_1__.PortafolioComponent },
    { path: 'deposit', component: _Deposit_deposit_component__WEBPACK_IMPORTED_MODULE_0__.DepositComponent },
    { path: 'withdrawal', component: _Withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_2__.WithdrawComponent }
];
class PortafolioRoutingModule {
}
PortafolioRoutingModule.ɵfac = function PortafolioRoutingModule_Factory(t) { return new (t || PortafolioRoutingModule)(); };
PortafolioRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PortafolioRoutingModule });
PortafolioRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PortafolioRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 40968:
/*!*************************************************!*\
  !*** ./src/app/Portafolio/portafolio.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortafolioModule": () => (/* binding */ PortafolioModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _portafolio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portafolio-routing.module */ 9899);
/* harmony import */ var _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portafolio/portafolio.component */ 64714);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _Deposit_deposit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Deposit/deposit.component */ 77712);
/* harmony import */ var _Withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Withdraw/withdraw.component */ 46373);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var src_Modules_sharedtable_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Modules/sharedtable.module */ 82037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);










class PortafolioModule {
}
PortafolioModule.ɵfac = function PortafolioModule_Factory(t) { return new (t || PortafolioModule)(); };
PortafolioModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PortafolioModule, bootstrap: [_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_1__.PortafolioComponent] });
PortafolioModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _portafolio_routing_module__WEBPACK_IMPORTED_MODULE_0__.PortafolioRoutingModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild(),
        src_Modules_sharedtable_module__WEBPACK_IMPORTED_MODULE_4__.SharedtableModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PortafolioModule, { declarations: [_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_1__.PortafolioComponent,
        _Deposit_deposit_component__WEBPACK_IMPORTED_MODULE_2__.DepositComponent,
        _Withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_3__.WithdrawComponent], imports: [ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _portafolio_routing_module__WEBPACK_IMPORTED_MODULE_0__.PortafolioRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, src_Modules_sharedtable_module__WEBPACK_IMPORTED_MODULE_4__.SharedtableModule] }); })();


/***/ }),

/***/ 64714:
/*!***************************************************************!*\
  !*** ./src/app/Portafolio/portafolio/portafolio.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortafolioComponent": () => (/* binding */ PortafolioComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts */ 72750);
/* harmony import */ var src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/Enum/EnumPopUp.enum */ 42241);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/PopUp/confirmation/confirmation.component */ 40915);
/* harmony import */ var src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/Enum/EnumAuthentication.enum */ 81708);
/* harmony import */ var src_app_PopUp_details_transactions_portfolio_details_transactions_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/PopUp/details-transactions-portfolio/details-transactions-portfolio.component */ 87125);
/* harmony import */ var src_app_BuyAndSell_buy_sell_buy_sell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/BuyAndSell/buy-sell/buy-sell.component */ 51270);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_Market_market_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/Market/market.service */ 74421);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/assets/assets.service */ 97552);
/* harmony import */ var src_services_WebSocket_socketio_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/WebSocket/socketio.service */ 97317);
/* harmony import */ var src_services_portafolio_portafolio_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/portafolio/portafolio.service */ 21013);
/* harmony import */ var src_services_Graph_graphPortafolio_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/Graph/graphPortafolio.service */ 8264);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_services_payments_payment_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/payments/payment.service */ 61084);
/* harmony import */ var src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/manage-data.service */ 43607);
/* harmony import */ var src_services_Graph_graphInfoCrypto_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/services/Graph/graphInfoCrypto.service */ 90406);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var src_services_Client_client_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/services/Client/client.service */ 64022);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_Options_table_info_transactions_table_info_transactions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/Options/table-info-transactions/table-info-transactions.component */ 22509);

 //charts 

























const _c0 = ["principal"];
const _c1 = ["main"];

function PortafolioComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_div_98_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r4);
      const asset_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r3.BuySell(asset_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 45)(4, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "div", 48)(7, "ul", 49)(8, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const asset_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("src", asset_r2.logo, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](asset_r2.base_currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](10, 4, asset_r2.qty * asset_r2.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](13, 6, asset_r2.qty), " ");
  }
}

function PortafolioComponent_div_99_span_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "span", 74);
  }
}

function PortafolioComponent_div_99_span_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "general.buyall"), "");
  }
}

function PortafolioComponent_div_99_span_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "general.validating"), " ...");
  }
}

function PortafolioComponent_div_99_span_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "span", 74);
  }
}

function PortafolioComponent_div_99_span_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "general.sellall"), "");
  }
}

function PortafolioComponent_div_99_span_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "general.validating"), " ...");
  }
}

const _c2 = function (a0, a1) {
  return {
    "positive": a0,
    "negative": a1
  };
};

function PortafolioComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 50)(1, "div", 51)(2, "div", 52)(3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](4, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_div_99_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r11.return());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "svg", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](10, "path", 58)(11, "path", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "div", 60)(13, "div", 61)(14, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "div", 61)(21, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "div", 30)(26, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](27, "Unrealized P/L");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](30, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "div", 30)(32, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](33, "Realized P/L");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](36, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](37, "div", 34)(38, "div", 5)(39, "div", 35)(40, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_div_99_Template_div_click_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r13.onButtonGroupClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](41, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_div_99_Template_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r14.changeTimeInfo("10m"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](42, "10m");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](43, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_div_99_Template_button_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r15.changeTimeInfo("1h"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](44, "1H");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](45, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_div_99_Template_button_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r16.changeTimeInfo("1d"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](46, "1D");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](47, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_div_99_Template_button_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r17.changeTimeInfo("1w"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](48, "1W");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](49, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_div_99_Template_button_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r18.changeTimeInfo("1M"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](50, "1M");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](51, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_div_99_Template_button_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r19.changeTimeInfo("3M"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](52, "3M");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](53, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_div_99_Template_button_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r20.changeTimeInfo("6M"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](54, "6M");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](55, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_div_99_Template_button_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r21.changeTimeInfo("ALL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](56, "ALL");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](57, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_div_99_Template_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r22.changeTimeInfo("Auto"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](58, "Auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](59, "div", 64)(60, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("resize", function PortafolioComponent_div_99_Template_div_resize_60_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r23.onResize($event));
    }, false, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](61, "div", 5)(62, "div", 66)(63, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_div_99_Template_button_click_63_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r24.ConfirmBuyMax());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](64, PortafolioComponent_div_99_span_64_Template, 1, 0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](65, PortafolioComponent_div_99_span_65_Template, 3, 3, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](66, PortafolioComponent_div_99_span_66_Template, 3, 3, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](67, "div", 66)(68, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_div_99_Template_button_click_68_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r25.buysell("buy"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](71, "div", 66)(72, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_div_99_Template_button_click_72_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r26.buysell("sell"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](74, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](75, "div", 66)(76, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_div_99_Template_button_click_76_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r27.ConfirmSellAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](77, PortafolioComponent_div_99_span_77_Template, 1, 0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](78, PortafolioComponent_div_99_span_78_Template, 3, 3, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](79, PortafolioComponent_div_99_span_79_Template, 3, 3, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](80, "app-table-info-transactions", 73)(81, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("src", ctx_r1.selectcrypto.logo, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](7, 23, ctx_r1.selectcrypto.price), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](16, 25, "easyMode.totalWorth"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](19, 27, ctx_r1.selectcrypto.total));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Total ", ctx_r1.selectcrypto.symbol, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r1.selectcrypto.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction2"](37, _c2, ctx_r1.selectcrypto.unrealized >= 0, ctx_r1.selectcrypto.unrealized < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](30, 29, ctx_r1.selectcrypto.unrealized), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction2"](40, _c2, ctx_r1.selectcrypto.realized_pnl >= 0, ctx_r1.selectcrypto.realized_pnl < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](36, 31, ctx_r1.selectcrypto.realized_pnl), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx_r1.validating || ctx_r1.disable_buy);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r1.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx_r1.validating || ctx_r1.disable_buy);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](70, 33, "general.buy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx_r1.validating || ctx_r1.disable_sell);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](74, 35, "general.sell"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx_r1.validating || ctx_r1.disable_sell);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r1.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("typetable", ctx_r1.selectcrypto.symbol);
  }
}

class PortafolioComponent {
  constructor(market, router, assets, socket, portfolio, graphservicemain, toastr, buy_sell, manage_data, graphserviceinfo, translate, dialog, spinner, client) {
    this.market = market;
    this.router = router;
    this.assets = assets;
    this.socket = socket;
    this.portfolio = portfolio;
    this.graphservicemain = graphservicemain;
    this.toastr = toastr;
    this.buy_sell = buy_sell;
    this.manage_data = manage_data;
    this.graphserviceinfo = graphserviceinfo;
    this.translate = translate;
    this.dialog = dialog;
    this.spinner = spinner;
    this.client = client;
    this.selectcrypto = null;
    this.validating = false;
    this.displayedColumns = ["transaction_type", "base_currency", "qty", "creation_time", "usd", "fee_amount", "transaction_id"];
    this.formatdate = false;
    this.disable_buy = false;
    this.disable_sell = false;
    this.products = [];
    this.products_id = [];
    this.assets_completed = true;
    this.total_worth = 0;
    this.dollarLogo = "assets/images/dollar.png";
    this.unrealizedTotal = 0;
    this.realizedTotal = 0;
    this.portafolioName = "";
    this.realizedmain = [];
    this.unrealizedmain = [];
    this.realizedprofitvalue = [];
    this.ChartMain = null;
    this.Chartinfo = null;
    this.show = false;
    this.datainicialInfo = "1h";
    this.realized = [];
    this.unrealized = [];
    this.original = [];
    this.norealized = [];
    this.datevalues = [];
    this.datevaluesmain = [];
    this.sellvalues = [];
    this.buyvalues = [];
    this.temp = [];
    this.datainicial = "1h";
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_18__.Subscription();
  }

  onResize(event) {
    if (this.Chartinfo != undefined) {
      this.Chartinfo.resize();
    }

    if (this.ChartMain != undefined) {
      this.ChartMain.resize();
    }
  }

  return() {
    this.disable_buy = false;
    this.disable_sell = false;
    this.show = false;
    this.selectcrypto = null;
  }

  buysell(action) {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true;
    dialogConfig.maxWidth = '100vw';
    dialogConfig.width = "auto";
    const data = {
      logo: this.selectcrypto.logo,
      symbol: this.selectcrypto.symbol,
      price: this.selectcrypto.price,
      action: action
    };
    this.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_2__.EnumEventsPopUp.buy_sell.toString(), data);
    this.dialog.open(src_app_BuyAndSell_buy_sell_buy_sell_component__WEBPACK_IMPORTED_MODULE_6__.BuySellComponent, dialogConfig);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.spinner.show();

      yield _this.GetDataBloxOrder();
      yield _this.SetPortfolioData();
      yield _this.changeTimeMain("1h");
      yield _this.GetEvent();

      _this.spinner.hide();
    })();
  }

  GetEvent() {
    var _this2 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.subscription.add(_this2.manage_data.getSubject(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_2__.EnumEventsPopUp.ChangeColor.toString()).subscribe(data => {
        if (data != null) {
          if (!_this2.show) {
            _this2.changeTimeMain(_this2.datainicial);
          } else {
            _this2.changeTimeInfo(_this2.datainicial);
          }
        }
      }));
    })();
  }

  ReloadPortfolioData() {
    var _this3 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var products = _this3.products;
      let portafoliDeepInfoResponse = yield _this3.GetDeepPortfolioInfo();
      _this3.portfolio_balances = portafoliDeepInfoResponse.holdings;

      _this3.portfolio_balances.forEach(element => {
        let data = products.find(x => x.base_currency === element.base_currency);

        if (data) {
          if (data.qty != element.qty) {
            if (_this3.selectcrypto != null && _this3.selectcrypto.symbol == element.base_currency) {
              if (element.qty <= 0) {
                _this3.disable_sell = true;
              } else {
                _this3.disable_sell = false;
              }

              _this3.selectcrypto.qty = element.qty;
            } else if (element.base_currency == 'USD') {
              data.qty = element.qty;

              if (data.qty <= 0) {
                _this3.disable_buy = true;
              } else {
                _this3.disable_buy = false;
              }
            }

            _this3.SetList();
          }
        } else {
          _this3.SetPortfolioData();
        }
      });
    })();
  } //***********************************************************************
  //Show Details
  //***********************************************************************


  ShowDetails(data) {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true;
    dialogConfig.width = "40rem";
    this.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_2__.EnumEventsPopUp.DetailsPortfolio.toString(), data);
    this.dialog.open(src_app_PopUp_details_transactions_portfolio_details_transactions_portfolio_component__WEBPACK_IMPORTED_MODULE_5__.DetailsTransactionsPortfolioComponent, dialogConfig);
  } //***********************************************************************
  //Get Color ( positive: green, negative: red)
  //***********************************************************************


  GetColor(value) {
    if (Number(value) < 0) {
      return 'red';
    } else {
      return 'green';
    }
  }

  GetDataBloxOrder() {
    var _this4 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.subscription.add(_this4.socket.GetDataBloxOrder().subscribe(data => {
        if (typeof data != 'object' && data != "Hey Dude!") {
          if (JSON.parse(data).success == null || JSON.parse(data).success == undefined) {
            _this4.ResponseEvent(JSON.parse(data));
          }
        }
      }));
    })();
  }

  changeTimeMain(date) {
    var _this5 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let timeZone;

      if (typeof Intl === 'object' && typeof Intl.DateTimeFormat === 'function') {
        timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      }

      let stop = new Date(Date.now());
      let start = new Date(Date.now());
      var granular = "";

      if (date == "10m") {
        start.setMinutes(start.getMinutes() - 10);
        granular = "MINUTE";
      }

      if (date == "1h") {
        start.setHours(start.getHours() - 1);
        granular = "MINUTE";
      }

      if (date == "1d") {
        start.setDate(start.getDate() - 1);
        granular = "FIFTEEN_MIN";
      }

      if (date == "1w") {
        start.setDate(start.getDate() - 7);
        granular = "SIX_HOURS";
      }

      if (date == "1M") {
        start.setMonth(start.getMonth() - 1);
        granular = "DAY";
      }

      if (date == "3M") {
        start.setMonth(start.getMonth() - 3);
        granular = "DAY";
      }

      if (date == "6M") {
        start.setMonth(start.getMonth() - 6);
        granular = "DAY";
      }

      if (date == "ALL") {
        start.setMonth(start.getMonth() - 8);
        granular = "DAY";
      }

      _this5.realized = [];
      _this5.unrealized = [];
      _this5.realizedprofitvalue = [];
      _this5.datevaluesmain = [];
      var CostOfAllPurchasesInLocalCurrency = 0;

      _this5.products.forEach(element => {
        if (element.base_currency === "USD") {
          element.transactions.forEach(element => {
            let date = new Date(element.creation_time);
            let tzDate = new Date(date.toLocaleString('en-US', {
              timeZone: timeZone
            }));
            let latest_date = tzDate.getTime();

            if (element.transaction_type == "BUY" || element.transaction_type == "SELL") {
              CostOfAllPurchasesInLocalCurrency += element.price * element.qty;

              if (element.transaction_type == "SELL") {
                var realized = {
                  "value": [latest_date, CostOfAllPurchasesInLocalCurrency]
                };

                _this5.realizedmain.unshift(realized);
              }

              if (element.transaction_type == "BUY") {
                var unrealized = {
                  "value": [latest_date, CostOfAllPurchasesInLocalCurrency]
                };

                _this5.unrealizedmain.unshift(unrealized);
              }

              _this5.datevaluesmain.unshift(latest_date);
            }
          });
        }
      });

      _this5.datevaluesmain.sort(function (a, b) {
        a = new Date(a);
        b = new Date(b);
        return a < b ? -1 : a > b ? 1 : 0;
      });

      if (date == "Auto") {
        granular = "MINUTE";
        var tempsinti = new Date(_this5.datevaluesmain[0]);
        tempsinti.setMinutes(tempsinti.getMinutes() - 10);
        _this5.validatedate = tempsinti;
        var tempsend = new Date(_this5.datevaluesmain[_this5.datevaluesmain.length - 1]);
        tempsend.setMinutes(tempsend.getMinutes() + 10);
        var data = {
          ticker: "USD",
          granularity: granular,
          start: tempsinti.getTime(),
          end: tempsend.getTime()
        };
      } else {
        var data = {
          ticker: "USD",
          granularity: granular,
          start: start.getTime(),
          end: stop.getTime()
        };
      }

      _this5.realizedmain.sort(function (a, b) {
        a = new Date(a.value[0]);
        b = new Date(b.value[0]);
        return a < b ? -1 : a > b ? 1 : 0;
      });

      _this5.unrealizedmain.sort(function (a, b) {
        a = new Date(a.value[0]);
        b = new Date(b.value[0]);
        return a < b ? -1 : a > b ? 1 : 0;
      }); // console.log(" realized  " + JSON.stringify(this.realizedmain))
      // console.log(" norealized  " + JSON.stringify(this.unrealizedmain))


      yield _this5.InitChart();
    })();
  }

  changeTimeInfo(date) {
    var _this6 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let timeZone;

      if (typeof Intl === 'object' && typeof Intl.DateTimeFormat === 'function') {
        timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      }

      let stop = new Date(Date.now());
      let start = new Date(Date.now());
      _this6.datainicial = date;
      var granular = "";

      if (date == "10m") {
        start.setMinutes(start.getMinutes() - 10);
        granular = "MINUTE";
        _this6.formatdate = false;
      }

      if (date == "1h") {
        start.setHours(start.getHours() - 1);
        granular = "MINUTE";
        _this6.formatdate = false;
      }

      if (date == "1d") {
        start.setDate(start.getDate() - 1);
        granular = "FIFTEEN_MIN";
        _this6.formatdate = false;
      }

      if (date == "1w") {
        start.setDate(start.getDate() - 7);
        granular = "DAY";
        _this6.formatdate = true;
      }

      if (date == "1M") {
        start.setMonth(start.getMonth() - 1);
        granular = "DAY";
        _this6.formatdate = true;
      }

      if (date == "3M") {
        start.setMonth(start.getMonth() - 3);
        granular = "DAY";
        _this6.formatdate = true;
      }

      if (date == "6M") {
        start.setMonth(start.getMonth() - 6);
        granular = "DAY";
        _this6.formatdate = true;
      }

      if (date == "ALL") {
        start.setMonth(start.getMonth() - 8);
        granular = "DAY";
        _this6.formatdate = true;
      }

      _this6.validatedate = start;
      _this6.original = [];
      _this6.norealized = [];
      _this6.datevalues = [];
      _this6.realized = [];
      _this6.sellvalues = [];
      _this6.buyvalues = [];
      var CostOfAllPurchasesInLocalCurrency = 0;

      _this6.products.forEach(element => {
        if (element.base_currency === _this6.selectcrypto.symbol) {
          element.transactions.forEach(element => {
            let date = new Date(element.creation_time);
            let tzDate = new Date(date.toLocaleString('en-US', {
              timeZone: timeZone
            }));
            let latest_date = tzDate.getTime();

            if (element.transaction_type == "BUY" || element.transaction_type == "SELL") {
              var temp = {
                "value": [latest_date, "-"]
              };

              if (element.transaction_type == "SELL") {
                temp = {
                  "value": [latest_date, element.price]
                };

                _this6.sellvalues.unshift(temp);

                if (_this6.validatedate.getTime() <= latest_date) {
                  _this6.norealized.unshift(temp);

                  _this6.realized.unshift(temp);
                }
              } else if (element.transaction_type == "BUY") {
                temp = {
                  "value": [latest_date, element.price]
                };

                _this6.buyvalues.unshift(temp);

                if (_this6.validatedate.getTime() <= latest_date) {
                  _this6.norealized.unshift(temp);
                }
              } else {
                _this6.buyvalues.unshift(temp);

                _this6.sellvalues.unshift(temp);
              }

              CostOfAllPurchasesInLocalCurrency += element.qty * element.price;

              _this6.datevalues.unshift(latest_date);
            }
          });
        }
      });

      _this6.datevalues.sort(function (a, b) {
        a = new Date(a);
        b = new Date(b);
        return a < b ? -1 : a > b ? 1 : 0;
      });

      _this6.buyvalues.sort(function (a, b) {
        a = new Date(a.value[0]);
        b = new Date(b.value[0]);
        return a < b ? -1 : a > b ? 1 : 0;
      });

      _this6.sellvalues.sort(function (a, b) {
        a = new Date(a.value[0]);
        b = new Date(b.value[0]);
        return a < b ? -1 : a > b ? 1 : 0;
      });

      var limiteinf = _this6.datevalues[0];

      if (date == "Auto") {
        var tempsinti = new Date(_this6.datevalues[0]);
        tempsinti.setMinutes(tempsinti.getMinutes() - 10);
        _this6.validatedate = tempsinti;
        var tempsend = new Date(_this6.datevalues[_this6.datevalues.length - 1]);
        tempsend.setMinutes(tempsend.getMinutes());
        var difference = Math.abs(Number(tempsinti) - Number(tempsend));
        var days = difference / (1000 * 3600 * 24);

        if (days < 0.05) {
          granular = "SECOND";
        }

        if (days < 0.1 && days >= 0.05) {
          granular = "MINUTE";
        }

        if (days >= 0.1 && days <= 0.3) {
          granular = "FIVE_MIN";
        }

        if (days > 0.3 && days <= 0.5) {
          granular = "FIFTEEN_MIN";
        }

        if (days > 0.5 && days <= 1) {
          granular = "HOUR";
        }

        if (days > 1 && days < 2) {
          granular = "SIX_HOURS";
        }

        if (days >= 2) {
          granular = "DAY";
        }

        var data = {
          ticker: _this6.selectcrypto.symbol + "-USD",
          granularity: granular,
          start: tempsinti.getTime(),
          end: tempsend.getTime()
        };
      } else {
        var data = {
          ticker: _this6.selectcrypto.symbol + "-USD",
          granularity: granular,
          start: start.getTime(),
          end: stop.getTime()
        };
      }

      var datareturn = yield _this6.market.GetHistoricalCandles(data).toPromise();
      var newdata = JSON.parse(datareturn.payload);
      newdata.forEach(element => {
        var min = _this6.GetMindata(element);

        let date = new Date(element[0] * 1000);
        let tzDate = new Date(date.toLocaleString('en-US', {
          timeZone: timeZone
        }));
        let latest_date = tzDate.getTime();

        if (latest_date >= limiteinf) {
          var calculo = min * _this6.selectcrypto.qty - CostOfAllPurchasesInLocalCurrency;
          var norealized = {
            "value": [latest_date, calculo]
          };
          var realized = {
            "value": [latest_date, "-"]
          };

          _this6.norealized.unshift(norealized);

          _this6.realized.unshift(realized);
        }

        var data0 = {
          "value": [latest_date, min]
        };

        _this6.original.unshift(data0);
      });

      _this6.realized.sort(function (a, b) {
        a = new Date(a.value[0]);
        b = new Date(b.value[0]);
        return a < b ? -1 : a > b ? 1 : 0;
      });

      _this6.norealized.sort(function (a, b) {
        a = new Date(a.value[0]);
        b = new Date(b.value[0]);
        return a < b ? -1 : a > b ? 1 : 0;
      }); // console.log(" values  " + JSON.stringify(this.datevalues))
      // console.log(" realized  " + JSON.stringify(this.realized))
      // console.log(" original  " + JSON.stringify(this.original))
      // console.log(" norealize  " + JSON.stringify(this.norealized))
      // console.log(" buy  " + JSON.stringify(this.buyvalues))
      // console.log(" sell  " + JSON.stringify(this.sellvalues))


      yield _this6.InitChartInfoCrypto();
    })();
  }

  ApplyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace

    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

    this.dataSource.filter = filterValue;
  }

  InitChartInfoCrypto() {
    var _this7 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.Chartinfo = echarts__WEBPACK_IMPORTED_MODULE_1__.init(document.getElementById('main'), 'dark');

      var option = _this7.graphserviceinfo.makeOption();

      if (localStorage.getItem("theme") == "dark") {
        option.backgroundColor = 'rgb(255, 255, 255)';
        option.xAxis[0].axisLabel.textStyle.color = 'rgb(0, 0, 0)';
        option.yAxis[0].axisLabel.textStyle.color = 'rgb(0, 0, 0)';
      } else {
        option.backgroundColor = 'rgb(0, 0, 0)';
        option.xAxis[0].axisLabel.textStyle.color = 'rgb(255, 255, 255)';
        option.yAxis[0].axisLabel.textStyle.color = 'rgb(255, 255, 255)';
      }

      if (_this7.formatdate) {
        option.xAxis[0].axisLabel.formatter = function (value) {
          return echarts__WEBPACK_IMPORTED_MODULE_1__.format.formatTime('MM-dd', value);
        };
      } else {
        option.xAxis[0].axisLabel.formatter = function (value) {
          return echarts__WEBPACK_IMPORTED_MODULE_1__.format.formatTime('hh:mm', value);
        };
      }

      option.series[0].data = _this7.norealized; // Unrealized 

      option.series[0].symbol =  false ? 0 : 'none';
      option.series[0].markPoint = true;
      option.series[0].name = "Unrealized P/L";
      option.legend.data[0].name = option.series[0].name;
      option.series[1].data = _this7.realized; // Realized

      option.series[1].barWidth = 4;
      option.series[1].markPoint = true;
      option.series[1].name = "Realized P/L";
      option.legend.data[1].name = option.series[1].name;
      option.series[2].data = _this7.original; // values original

      option.series[2].name = _this7.selectcrypto.symbol + "-USD";
      option.series[2].symbol =  false ? 0 : 'none';
      option.legend.data[2].name = _this7.selectcrypto.symbol + "-USD";
      option.series[3].name = "Trade Buy Price";
      option.legend.data[3].name = option.series[3].name;
      option.series[4].name = "Trade Sell Price";
      option.legend.data[4].name = option.series[4].name;

      if (_this7.buyvalues[0] != undefined) {
        _this7.temp = [];

        for (let i = 0; i < _this7.buyvalues.length; i++) {
          if (_this7.validatedate.getTime() <= _this7.buyvalues[i].value[0]) {
            _this7.temp.unshift(_this7.buyvalues[i]);
          }
        }

        option.series[3].data = _this7.temp;
      }

      if (_this7.sellvalues[0] != undefined) {
        _this7.temp = [];

        for (let i = 0; i < _this7.sellvalues.length; i++) {
          if (_this7.validatedate.getTime() <= _this7.sellvalues[i].value[0]) {
            _this7.temp.unshift(_this7.sellvalues[i]);
          }
        }

        option.series[4].data = _this7.temp;
      }

      var languageCountryCode = "en-US";

      option.tooltip.formatter = function (param) {
        let xValue = param[0].data.value[0];
        let milliSecondsOnly = xValue % 1000;
        let aParam = {
          value: xValue
        };
        var date = option.xAxis[0].axisPointer.label.formatter(aParam);

        if (milliSecondsOnly != 0) {
          date += `.${milliSecondsOnly}`;
        }

        let res = date + "<p/>";
        const options = {
          style: 'currency',
          currency: 'USD'
        };
        const numberFormat = new Intl.NumberFormat(languageCountryCode, options);
        let uPnLName = option.series[0].name;
        let rPnLName = option.series[1].name;

        for (let i = 0; i < param.length; i++) {
          var seriesName = param[i].seriesName;
          let seriesName2 = seriesName;
          let legendItem = findLegendItemWithName(seriesName, i);
          let str = legendItem.icon;
          let imageName = str.substring(8, str.length);
          let value = getValueWithTime(xValue, i, legendItem.name, param[i].data.value[1]);

          if (value != "-") {
            var color = "white";

            if (strcmp(seriesName2, uPnLName) == 0 || strcmp(seriesName2, rPnLName) == 0) {
              if (value < 0) {
                color = "red";
              } else {
                color = "green";
              }
            }

            const formattedValue = numberFormat.format(value);
            const seriesName = param[i].seriesName;
            let image = `<div style="height: 12px;width: 178px">
                        <img src="${imageName}" style="vertical-align: middle;" width="20px"/>
                        <span style="font-size:8.5pt;vertical-align: middle;color:white;">${seriesName}:</span>
                        <span style="font-size:8.5pt;vertical-align: middle;color:white;float: right;color:${color};">${formattedValue}</span>
                        </div>`;
            res += image + "</p>";
          }
        }

        return res;

        function findLegendItemWithName(seriesName, defaultLegendIndex) {
          for (let i = 0; i < option.legend.data.length; i++) {
            let legendItem = option.legend.data[i];

            if (legendItem.name == seriesName) {
              return legendItem;
            }
          }

          let defaultLegendItem = option.legend.data[defaultLegendIndex];
          return defaultLegendItem;
        }

        function strcmp(a, b) {
          if (a.toString() < b.toString()) return -1;
          if (a.toString() > b.toString()) return 1;
          return 0;
        }

        function getValueWithTime(xValue, seriesIndex, legendItemName, defaultValue) {
          var series = option.series[seriesIndex];

          for (let j = 0; j < option.series.length; j++) {
            if (option.series[j].name == legendItemName) {
              series = option.series[j];
              break;
            }
          }

          let data = series.data;

          for (let i = 0; i < data.length; i++) {
            let datum = data[i];
            let value = datum.value[0];

            if (value == xValue) {
              return datum.value[1];
            }
          }

          return -1;
        }

        ;
      };

      option.animation = true;

      _this7.Chartinfo.setOption(option);
    })();
  }

  GetMindata(data) {
    data.unshift();
    data.pop();
    var m = Math.min(...data);
    return m;
  }

  onButtonGroupClick($event) {
    let clickedElement = $event.target || $event.srcElement;

    if (clickedElement.nodeName === "BUTTON") {
      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");

      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }

      clickedElement.className += " active";
    }
  }

  InitChart() {
    var _this8 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.ChartMain = echarts__WEBPACK_IMPORTED_MODULE_1__.init(document.getElementById('principal'), 'dark');

      var option = _this8.graphservicemain.makeOption();

      if (localStorage.getItem("theme") == "dark") {
        option.backgroundColor = 'rgb(255, 255, 255)';
        option.xAxis[0].axisLabel.textStyle.color = 'rgb(0, 0, 0)';
        option.yAxis[0].axisLabel.textStyle.color = 'rgb(0, 0, 0)';
      } else {
        option.backgroundColor = 'rgb(0, 0, 0)';
        option.xAxis[0].axisLabel.textStyle.color = 'rgb(255, 255, 255)';
        option.yAxis[0].axisLabel.textStyle.color = 'rgb(255, 255, 255)';
      }

      option.series[0].data = _this8.realizedmain; //total worth

      option.series[0].markPoint = true;
      option.series[0].name = "Total Worth";
      option.legend.data[0].name = option.series[0].name;
      option.series[1].data = _this8.unrealizedmain; //unrealized  

      option.series[1].markPoint = true;
      option.series[1].name = "Unrealized P/L";
      option.legend.data[1].name = option.series[1].name;
      option.series[2].data = _this8.realizedprofitvalue; //realized

      option.series[2].barWidth = 5;
      option.series[2].name = "Realized P/L";
      option.legend.data[2].name = option.series[2].name;
      var languageCountryCode;
      option.tooltip.formatter = function (param) {
        let xValue = param[0].data.value[0];
        let milliSecondsOnly = xValue % 1000;
        let aParam = {
          value: xValue
        };
        var date = option.xAxis[0].axisPointer.label.formatter(aParam);

        if (milliSecondsOnly != 0) {
          date += `.${milliSecondsOnly}`;
        }

        let res = date + "<p/>";
        let legend = option.legend;
        let data = legend.data;
        const options = {
          style: 'currency',
          currency: 'USD'
        };
        const numberFormat = new Intl.NumberFormat(languageCountryCode, options);
        let uPnLName = option.series[1].name;
        let rPnLName = option.series[2].name;

        for (let i = 0; i < param.length; i++) {
          let seriesName = param[i].seriesName;
          let seriesName2 = seriesName;
          let legendItem = findLegendItemWithName(seriesName, i);
          let str = legendItem.icon;
          let imageName = str.substring(8, str.length);
          let value = getValueWithTime(xValue, i, legendItem.name, param[i].data.value[1]);

          if (value != "-") {
            var color = "white";

            if (strcmp(seriesName2, uPnLName) == 0 || strcmp(seriesName2, rPnLName) == 0) {
              // Is it unrealized P/L?
              if (value < 0) {
                color = "red";
              } else {
                color = "green";
              }
            }

            const formattedValue = numberFormat.format(value);
            let image = `<div style="height: 12px;width: 170px">
                 <img src="${imageName}" style="vertical-align: middle;" width="20px"/>
                 <span style="font-size:8.5pt;vertical-align: middle;color:white;">${param[i].seriesName}:</span>
                 <span style="font-size:8.5pt;vertical-align: middle;color:${color};float: right">${formattedValue}</span>
                 </div>`;
            res += image + "</p>";
          }
        }

        return res;

        function strcmp(a, b) {
          if (a.toString() < b.toString()) return -1;
          if (a.toString() > b.toString()) return 1;
          return 0;
        }

        function findLegendItemWithName(seriesName, defaultLegendIndex) {
          for (let i = 0; i < option.legend.data.length; i++) {
            let legendItem = option.legend.data[i];

            if (legendItem.name == seriesName) {
              return legendItem;
            }
          }

          let defaultLegendItem = option.legend.data[defaultLegendIndex];
          return defaultLegendItem;
        }

        ;

        function getValueWithTime(xValue, seriesIndex, legendItemName, defaultValue) {
          var series = option.series[seriesIndex];

          for (let j = 0; j < option.series.length; j++) {
            if (option.series[j].name == legendItemName) {
              series = option.series[j];
              break;
            }
          }

          let data = series.data;

          for (let i = 0; i < data.length; i++) {
            let datum = data[i].value;
            let value = datum[0];

            if (value == xValue) {
              return datum[1];
            }
          }

          return -1;
        }

        ;
      }, option.animation = true;

      _this8.ChartMain.setOption(option);
    })();
  }

  ResponseEvent(msg) {
    switch (msg.header.msg_type) {
      case 'EXECUTION':
      case 'TRACKING_EXECUTION':
      case 'DEPOSIT':
      case 'WITHDRAW':
      case 'ORDER_ERROR':
      case 'ORDER_CANCEL':
      case 'ORDER_REJECTED':
      case 'TRACKING_EXECUTION':
        setTimeout(() => this.ReloadPortfolioData(), 500);
        break;

      default:
        break;
    }
  }

  SetPortfolioData() {
    var _this9 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let portafolioResponse = yield _this9.GetDefaultPortfolio();
      _this9.portfolio_data = portafolioResponse;
      _this9.portafolioName = portafolioResponse.name;
      let portafoliDeepInfoResponse = yield _this9.GetDeepPortfolioInfo();
      _this9.portfolio_balances = portafoliDeepInfoResponse.holdings;
      yield _this9.SetList();

      if (_this9.portfolio_balances.length > 1) {
        _this9.socket.InitBlox(_this9.products_id);
      } else {
        _this9.assets_completed = false;
      }

      yield _this9.GetDataBLox();
    })();
  }

  GetDataBLox() {
    var _this10 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this10.subscription.add(_this10.socket.GetDataBlox().subscribe(data => {
        if (typeof data === 'string') {
          _this10.SetValues(JSON.parse(data));
        } else {// console.warn("wrong data websocket", data);
        }
      }, error => {
        console.warn("wrong data websocket");
      }));
    })();
  }

  SetValues(data) {
    let product = this.products.find(x => `${x.name}-USD` === data.product_id);

    if (product) {
      product.price = data.mid_price;
      product.total = product.qty * (data.mid_price ?? 1);
      product.unrealized = product.transactions.filter(y => y.transaction_type == "BUY" || y.transaction_type == "SELL").map(x => x.qty * (data.best_bid.price - x.price)).reduce((a, b) => a + b, 0);
      this.unrealizedTotal = this.products.map(x => x.unrealized).reduce((a, b) => a + b, 0);
    }

    if (this.selectcrypto != null) {
      if (data.product_id === `${this.selectcrypto.symbol}-USD`) {
        this.selectcrypto.price = data.best_bid.price;
        this.selectcrypto.total = data.best_bid.price * this.selectcrypto.qty;
      }
    }

    this.total_worth = this.products.map(x => x.total).reduce((a, b) => a + b, 0);
    return;
  }

  SetList() {
    var _this11 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let productResponse = yield _this11.GetAllProducts();
      let logosResponse = yield _this11.GetAllLogos();

      if (productResponse) {
        productResponse = productResponse.filter(x => x.quote_currency === "USD" && x.trading_disabled === false);
        productResponse = productResponse.map(x => ({ ...x,
          logo: logosResponse.filter(l => l.symbol === x.base_currency).map(x => x.logo),
          price: 0,
          percentage: 0
        }));
        productResponse = productResponse.sort((a, b) => {
          if (a.base_currency > b.base_currency) return 1;else return -1;
        });
        _this11.products_id = productResponse.map(x => x.id);

        const portfolioTmp = _this11.portfolio_balances.map(x => {
          const assetInfo = productResponse.find(l => l.base_currency === x.base_currency);
          return { ...x,
            logo: assetInfo?.logo[0] || _this11.dollarLogo,
            name: x.base_currency,
            price: 0
          };
        });

        let usdAvailable = portfolioTmp.find(x => x.base_currency === "USD");

        if (usdAvailable) {
          usdAvailable.total = usdAvailable.qty;
          usdAvailable.price = 1;
          usdAvailable.unrealized = 0;
          _this11.usd_qty = usdAvailable.qty;
          _this11.total_worth = usdAvailable.qty;
        }

        _this11.realizedTotal = portfolioTmp.map(x => x.realized_pnl).reduce((a, b) => a + b, 0);
        _this11.products = portfolioTmp; // console.log("usdAvailable:", usdAvailable);
        // console.log("portfolioTmp:", portfolioTmp);
        // console.log("products_id:", this.products_id);
      }
    })();
  }

  GetAllLogos() {
    var _this12 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = yield _this12.assets.GetAllLogosURL().toPromise();
      return data;
    })();
  }

  GetAllProducts() {
    var _this13 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = yield _this13.portfolio.GetAllProducts().toPromise();
      return data;
    })();
  }

  GetDefaultPortfolio() {
    var _this14 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = yield _this14.portfolio.GetDefault().toPromise();
      return data;
    })();
  }

  GetDeepPortfolioInfo() {
    var _this15 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = yield _this15.portfolio.GetDeepPortfolioInfo().toPromise();
      let portafolio = data.find(x => x.name === _this15.portfolio_data.name);
      return portafolio;
    })();
  }

  BuySell(asset) {
    if (asset.base_currency != "USD") {
      this.selectcrypto = {
        logo: asset.logo,
        symbol: asset.base_currency,
        price: asset.price,
        usd: this.usd_qty,
        qty: asset.qty,
        realized_pnl: asset.realized_pnl,
        total: asset.total,
        unrealized: asset.unrealized,
        action: "trade"
      };

      if (this.selectcrypto.usd <= 0) {
        this.disable_buy = true;
      }

      if (this.selectcrypto.qty <= 0) {
        this.disable_sell = true;
      }

      this.show = true;
      this.changeTimeInfo(this.datainicialInfo); // Hack: Scrolls to top of Page after page view initialized

      let top = document.getElementById('top');

      if (top !== null) {
        console.log("show coin...");
        top.scrollIntoView();
        top = null;
      }
    } else {
      console.log("falta mostrar movimientos del dolar");
    }
  }

  ActionLiquidate() {
    var _this16 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let client_config = yield _this16.GetClientConfig();

      if (client_config.id_verified) {
        const data = {
          from_portfolio_name: _this16.portafolioName.toString()
        };

        _this16.LiquidateAllAssets(data).then( /*#__PURE__*/function () {
          var _ref = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
            console.log("Liquidate All Assets", response);

            if (response.success) {
              let msg = yield _this16.translate.get('general.succes').toPromise();

              _this16.toastr.success(msg);
            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()).catch();
      } else {
        _this16.ConfirmValidateID();
      }
    })();
  } //************************************************************************************
  //Confirm Validate ID
  //************************************************************************************


  ConfirmValidateID() {
    var _this17 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogConfig();
      dialogConfig.autoFocus = false;
      dialogConfig.disableClose = true; // dialogConfig.height = "20rem";

      dialogConfig.width = "40rem";
      var data = {
        title: yield _this17.translate.get("Errores.mustValidateID").toPromise(),
        icon: 'quest',
        conten: yield _this17.translate.get("Errores.wantValidateID").toPromise()
      };

      _this17.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_2__.EnumEventsPopUp.ConfirmAction.toString(), data);

      let dialogRef = _this17.dialog.open(src_app_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmationComponent, dialogConfig);

      _this17.subscription.add(dialogRef.afterClosed().subscribe(result => {
        if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_4__.EnumConfirmation.si.toString()) {
          _this17.router.navigate(['/vouched']);
        }
      }));
    })();
  } //************************************************************************************
  //Liquidate All Assets
  //************************************************************************************


  LiquidateAllAssets(data) {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.portfolio.LiquiateAllAssetsPortafolio(data).subscribe(response => {
        resolve(response);
      }, err => {
        resolve(null);
      }));
    });
  }

  ActionBuyMax() {
    var _this18 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this18.validating = true;
      const data = {
        portfolio_name: _this18.portfolio_data.name,
        user_oid: Date.now(),
        symbol: _this18.selectcrypto.symbol + "-USD"
      };
      let buyMaxResponse = yield _this18.BuyMax(data);

      if (buyMaxResponse === null) {
        _this18.validating = false;
        return;
      }

      _this18.validating = false;
    })();
  }

  ActionSellMax() {
    var _this19 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this19.validating = true;
      const data = {
        portfolio_name: _this19.portfolio_data.name,
        user_oid: Date.now(),
        symbol: _this19.selectcrypto.symbol + "-USD"
      };
      let sellMaxResponse = yield _this19.SellMax(data);

      if (sellMaxResponse === null) {
        _this19.validating = false;
        return;
      }

      _this19.validating = false;
    })();
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

  ReturnToAssets() {
    this.router.navigate(['/home/portafolio']);
  } //*****************************************************************
  // Confirm BuyMax and SellAll
  //*****************************************************************


  ConfirmBuyMax() {
    var _this20 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogConfig();
      dialogConfig.autoFocus = false;
      dialogConfig.disableClose = true; // dialogConfig.height = "20rem";

      dialogConfig.width = "40rem";
      var data = {
        title: yield _this20.translate.get("dialog.buymax").toPromise(),
        icon: 'quest',
        conten: yield _this20.translate.get("dialog.sureBuymax").toPromise()
      };
      console.log("ConfirmBuyMax", data);

      _this20.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_2__.EnumEventsPopUp.ConfirmAction.toString(), data);

      let dialogRef = _this20.dialog.open(src_app_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmationComponent, dialogConfig);

      _this20.subscription.add(dialogRef.afterClosed().subscribe(result => {
        if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_4__.EnumConfirmation.si.toString()) {
          _this20.ActionBuyMax();
        }
      }));
    })();
  }

  ConfirmSellAll() {
    var _this21 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogConfig();
      dialogConfig.autoFocus = false;
      dialogConfig.disableClose = true; // dialogConfig.height = "20rem";

      dialogConfig.width = "40rem";
      var data = {
        title: yield _this21.translate.get("dialog.sellall").toPromise(),
        icon: 'quest',
        conten: (yield _this21.translate.get("dialog.sureSellall").toPromise()) + _this21.selectcrypto.symbol + '?'
      };
      console.log("ConfirmSellAll", data);

      _this21.manage_data.emitEvent("ConfirmAction", data);

      let dialogRef = _this21.dialog.open(src_app_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmationComponent, dialogConfig);

      _this21.subscription.add(dialogRef.afterClosed().subscribe(result => {
        if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_4__.EnumConfirmation.si.toString()) {
          _this21.ActionSellMax();
        }
      }));
    })();
  }

}

PortafolioComponent.ɵfac = function PortafolioComponent_Factory(t) {
  return new (t || PortafolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_services_Market_market_service__WEBPACK_IMPORTED_MODULE_7__.MarketService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_8__.AssetsService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_services_WebSocket_socketio_service__WEBPACK_IMPORTED_MODULE_9__.SocketioService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_services_portafolio_portafolio_service__WEBPACK_IMPORTED_MODULE_10__.PortafolioService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_services_Graph_graphPortafolio_service__WEBPACK_IMPORTED_MODULE_11__.GraphPortafolioService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_21__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_services_payments_payment_service__WEBPACK_IMPORTED_MODULE_12__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_13__.ManageDataService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_services_Graph_graphInfoCrypto_service__WEBPACK_IMPORTED_MODULE_14__.GraphInfoCryptoService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_23__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_services_Client_client_service__WEBPACK_IMPORTED_MODULE_15__.ClientService));
};

PortafolioComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
  type: PortafolioComponent,
  selectors: [["app-portafolio"]],
  viewQuery: function PortafolioComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.ChartMain = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.Chartinfo = _t.first);
    }
  },
  hostBindings: function PortafolioComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("resize", function PortafolioComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresolveWindow"]);
    }
  },
  decls: 100,
  vars: 52,
  consts: [["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "line-scale-pulse-out", 3, "fullScreen"], [2, "color", "white"], ["id", "top"], [3, "hidden"], [1, "container", "text-center", "shadow", 2, "margin-top", "1%"], [1, "row"], [1, "col-10"], [1, "styletitel"], [1, "col-2"], ["role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, ""], [1, "fa", "fa-solid", "fa-bars", 2, "color", "#cccccc", "margin-top", "18px", "margin-right", "-72%"], [1, "dropdown-menu"], ["routerLink", "/home/portafolio/deposit", 1, "dropdown-item"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-bar-up"], ["fill-rule", "evenodd", "d", "M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"], ["routerLink", "/home/portafolio/withdrawal", 1, "dropdown-item"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-bar-down"], ["fill-rule", "evenodd", "d", "M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"], [1, "dropdown-item", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-currency-dollar"], ["d", "M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"], [1, "container", "shadow", 2, "margin-top", "1%"], [1, "text-center"], [1, "col"], [1, "myportfolio", 2, "margin-top", "1%"], [1, "row", "text-center", 2, "margin-top", "-12px", "margin-right", "19px"], [1, "col-12"], [1, "", 2, "list-style", "none"], [1, "textitems"], [1, "textitems", 2, "color", "rgb(19, 224, 0)"], ["hidden", "true", 1, "col-xl-3", "col-md-6", "col-sm-6", "col-6", "text-center"], [1, "listpoint"], [1, "textitems", 3, "ngClass"], [1, "listpoint", "text-end"], [1, ""], [1, "col", "text-center"], ["role", "group", "aria-label", "Basic mixed styles example", 1, "btn-group", 3, "click"], ["type", "button ", 1, "btn", "btn-outline-secondary", "butongrus", 3, "click"], ["type", "button ", 1, "btn", "btn-outline-secondary", "butongrus", "active", 3, "click"], [1, "row", "text-center", 2, "margin-top", "8px", "margin-bottom", "40px"], ["id", "principal", 2, "width", "100%", "height", "35vh", 3, "resize"], [2, "margin-top", "-20px"], ["class", "row asset-list-item", "style", "border-radius: 20px; cursor: pointer", 3, "click", 4, "ngFor", "ngForOf"], ["style", " margin-top: 1%;", 4, "ngIf"], [1, "row", "asset-list-item", 2, "border-radius", "20px", "cursor", "pointer", 3, "click"], [1, "col-xl-4", "col-sm-4", "col-3", "text-center"], [1, "itemintr", "my-auto", 3, "src"], ["for", "", 1, "textitems", 2, "cursor", "pointer"], [1, "col-xl-4", "col-sm-4", "col-6", "text-end", 2, "margin-top", "8px", "cursor", "pointer"], [1, "listpoint", "mr-3", "my-auto"], [2, "margin-top", "1%"], [1, "container", "shadow"], [1, "row", "text-center"], [1, "col", "mt-3"], [3, "src"], [1, "label", "label-default", "titeinfo"], [1, "ibackcolor", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "35", "height", "35", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-chevron-double-left"], ["fill-rule", "evenodd", "d", "M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"], ["fill-rule", "evenodd", "d", "M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"], [1, "row", "mt-3"], [1, "col-xl-6", "col-md-6", "col-sm-6", "col-6", "text-center"], [1, "colrtext"], [1, "colrval"], [1, "row", 2, "margin-top", "8px", "margin-bottom", "8px"], ["id", "main", 2, "width", "100%", "height", "50vh", 3, "resize"], [1, "col-md-3", "col-12", "text-center", "mb-3"], ["type", "button", 1, "btn", "btn-outline-success", "whidbu", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-secondary", "whidbu", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-outline-info", "whidbu", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-outline-danger", "whidbu", 3, "disabled", "click"], [3, "typetable"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]],
  template: function PortafolioComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ngx-spinner", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "div", 8)(13, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](14, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "ul", 11)(16, "li")(17, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "svg", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](19, "path", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "li")(23, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](25, "path", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "li")(29, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_Template_a_click_29_listener() {
        return ctx.ActionLiquidate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "svg", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](31, "path", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "div", 21)(35, "div", 22)(36, "div", 5)(37, "div", 23)(38, "h3", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "div", 25)(41, "div", 26)(42, "ul", 27)(43, "li", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](45, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](46, "li", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](48, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](49, "div", 30)(50, "ul", 31)(51, "li", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](53, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](54, "li", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](56, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](57, "div", 30)(58, "ul", 31)(59, "li", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](61, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](62, "li", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](64, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](65, "div", 30)(66, "ul", 33)(67, "li", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](69, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](70, "li", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](72, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](73, "div", 34)(74, "div", 5)(75, "div", 35)(76, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_Template_div_click_76_listener($event) {
        return ctx.onButtonGroupClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](77, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_Template_button_click_77_listener() {
        return ctx.changeTimeMain("10m");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](78, "10m");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](79, "button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_Template_button_click_79_listener() {
        return ctx.changeTimeMain("1h");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](80, "1H");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](81, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_Template_button_click_81_listener() {
        return ctx.changeTimeMain("1d");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](82, "1D");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](83, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_Template_button_click_83_listener() {
        return ctx.changeTimeMain("1w");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](84, "1W");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](85, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_Template_button_click_85_listener() {
        return ctx.changeTimeMain("1M");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](86, "1M");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](87, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_Template_button_click_87_listener() {
        return ctx.changeTimeMain("3M");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](88, "3M");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](89, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_Template_button_click_89_listener() {
        return ctx.changeTimeMain("6M");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](90, "6M");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](91, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_Template_button_click_91_listener() {
        return ctx.changeTimeMain("ALL");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](92, "ALL");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](93, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PortafolioComponent_Template_button_click_93_listener() {
        return ctx.changeTimeMain("Auto");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](94, "Auto");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](95, "div", 39)(96, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("resize", function PortafolioComponent_Template_div_resize_96_listener($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresolveWindow"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](97, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](98, PortafolioComponent_div_98_Template, 14, 8, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](99, PortafolioComponent_div_99_Template, 82, 43, "div", 43);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("fullScreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 20, "general.cargando"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hidden", ctx.show);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](11, 22, "sidebar.portfolio"));
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](21, 24, "sidebar.deposit"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](27, 26, "sidebar.withdraw"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](33, 28, "easyMode.liquidateAssets"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.portafolioName);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](45, 30, "easyMode.totalWorth"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](48, 32, ctx.total_worth));
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](53, 34, "easyMode.available"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](56, 36, ctx.total_worth));
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](61, 38, "easyMode.unrealized"), " P/L ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction2"](46, _c2, ctx.unrealizedTotal >= 0, ctx.unrealizedTotal < 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](64, 40, ctx.unrealizedTotal), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](69, 42, "easyMode.realized"), " P/L ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction2"](49, _c2, ctx.realizedTotal >= 0, ctx.realizedTotal < 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](72, 44, ctx.realizedTotal), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.products);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.show);
    }
  },
  dependencies: [ngx_spinner__WEBPACK_IMPORTED_MODULE_23__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterLinkWithHref, src_app_Options_table_info_transactions_table_info_transactions_component__WEBPACK_IMPORTED_MODULE_16__.TableInfoTransactionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_24__.CurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe],
  styles: [".search-bar[_ngcontent-%COMP%] {\n  background-color: #4eb965;\n}\n\n.assets-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  margin: 1rem;\n  border-radius: 0.6rem;\n  background: #cecccc;\n  color: #fff;\n}\n\n.butongrus[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: small;\n}\n\n.currtext[_ngcontent-%COMP%] {\n  color: var(--count-color);\n  margin-top: 3%;\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.asset-list-item[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: center;\n  height: 60px;\n  background: var(--bg-item-assets);\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.5rem;\n  min-width: 1rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-top: 2rem;\n  background-size: 10px;\n  color: #000000;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  -webkit-background-size: initial;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  margin-bottom: 0.2rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 5rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n  font-size: 1rem;\n  color: #4D4D4D;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   span.amount[_ngcontent-%COMP%] {\n  background-color: #002e0e;\n  color: #000000;\n  font-size: 2rem;\n  font-weight: bold;\n  border-radius: 1.5rem;\n  padding: 5px 2rem;\n  z-index: 2;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .asset-container[_ngcontent-%COMP%] {\n  background-color: #FAFAFA;\n  border-radius: 2rem 2rem 0 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1rem;\n  padding-top: 3rem;\n  position: relative;\n  top: -1.5rem;\n  width: 100%;\n  z-index: 1;\n  height: 100%;\n  font-size: 0.8rem;\n  justify-content: flex-start;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .buy-sell-message[_ngcontent-%COMP%] {\n  margin: 1rem;\n  color: #4D4D4D;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .buy-sell-message.green[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .buy-sell-message.red[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .buy-sell-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 0.4rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%] {\n  margin: 1rem auto;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: solid 1px #2bba4a;\n  border-radius: 1rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3rem;\n}\n\n.summary-item[_ngcontent-%COMP%] {\n  color: #000000;\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.listpoint[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-right: 0px;\n}\n\n*[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: rgb(26, 26, 26) rgba(255, 166, 0, 0);\n}\n\n\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(255, 166, 0, 0);\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--table-scroll);\n  border-radius: 20px;\n  border: 3px solid var(--table-scroll);\n}\n\n.texItem[_ngcontent-%COMP%] {\n  font-size: medium;\n  color: rgb(136, 135, 135);\n}\n\n.styletitel[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  margin-left: 21%;\n  color: #2bba4a;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.myportfolio[_ngcontent-%COMP%] {\n  color: rgb(173, 173, 173);\n  font-size: 18px;\n  font-weight: bold;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.textitems[_ngcontent-%COMP%] {\n  font-size: small;\n  color: rgb(136, 135, 135);\n}\n\n.itemintr[_ngcontent-%COMP%] {\n  width: 40px;\n  margin-top: 5px;\n}\n\n@media (min-width: 702px) {\n  .itemintr[_ngcontent-%COMP%] {\n    width: 40px;\n    margin-top: 0px;\n  }\n  .textitems[_ngcontent-%COMP%] {\n    font-size: medium;\n    color: rgb(136, 135, 135);\n  }\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  --bs-dropdown-color: var(--bs-drown-color);\n  --bs-dropdown-bg: var(--bg-color-drow);\n  --bs-dropdown-border-color: var(--bs-border-color-translucent);\n  --bs-dropdown-inner-border-radius: calc(0.375rem - 1px);\n  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);\n  --bs-dropdown-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  --bs-dropdown-link-color: var(--bs-drown-color);\n  --bs-dropdown-link-hover-color: #1e2125;\n  --bs-dropdown-link-hover-bg: #e9ecef;\n  --bs-dropdown-link-active-color: #fff;\n  --bs-dropdown-link-active-bg: #26501e;\n  --bs-dropdown-link-disabled-color: #adb5bd;\n  --bs-dropdown-header-color: #6c757d;\n}\n\n.ibackcolor[_ngcontent-%COMP%] {\n  margin-top: -52px;\n  color: var(--ibackcolor);\n  cursor: pointer;\n  width: 40px;\n}\n\n.ibackcolor[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 255, 170);\n}\n\n.texlabel[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.textprice[_ngcontent-%COMP%] {\n  color: rgb(58, 187, 53);\n}\n\n.colrtext[_ngcontent-%COMP%] {\n  color: var(--count-color);\n  font-size: 10px;\n}\n\n.colrval[_ngcontent-%COMP%] {\n  color: rgb(0, 167, 130);\n  font-size: 10px;\n}\n\n.colrvaln[_ngcontent-%COMP%] {\n  color: rgb(255, 0, 0);\n  font-size: 10px;\n}\n\n.whidbu[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 100%;\n  padding: 5px;\n}\n\n@media (min-width: 842px) {\n  .colrtext[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .colrval[_ngcontent-%COMP%] {\n    color: rgb(0, 167, 130);\n    font-size: 15px;\n  }\n  .colrvaln[_ngcontent-%COMP%] {\n    color: rgb(255, 0, 0);\n    font-size: 15px;\n  }\n  .whidbu[_ngcontent-%COMP%] {\n    font-size: 20px;\n    width: 100%;\n    padding: 5px;\n  }\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n\n.titeinfo[_ngcontent-%COMP%] {\n  color: var(--count-color);\n}\n\n.butongrus[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: small;\n}\n\n.btn-outline-box[_ngcontent-%COMP%] {\n  --bs-btn-color: var(--bs-btn-color-box);\n  --bs-btn-border-color: var(--bs-btn-border-color-box);\n  --bs-btn-hover-color: var(--bs-btn-hover-color-box);\n  --bs-btn-hover-bg: var(--bs-btn-hover-bg-box);\n  --bs-btn-hover-border-color: var(--bs-btn-hover-border-color-box);\n  --bs-btn-focus-shadow-rgb: var(--bs-btn-focus-shadow-rgb-box);\n  --bs-btn-active-color: var(--bs-btn-active-color-box);\n  --bs-btn-active-bg: var(--bs-btn-active-bg-box);\n  --bs-btn-active-border-color: var(--bs-btn-active-border-color-box);\n  --bs-btn-active-shadow: var(--bs-btn-active-shadow-box);\n  --bs-btn-disabled-color: var(--bs-btn-disabled-color-box);\n  --bs-btn-disabled-bg: var(--bs-btn-disabled-bg-box);\n  --bs-btn-disabled-border-color: var(--bs-btn-disabled-border-color-box);\n  --bs-gradient: var(--bs-gradient-box);\n}\n\n.ibackcolor[_ngcontent-%COMP%] {\n  color: var(--ibackcolor);\n  cursor: pointer;\n  width: 40px;\n}\n\n.ibackcolor[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 255, 170);\n}\n\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n\n.example-header[_ngcontent-%COMP%] {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 200px;\n}\n\n.mat-column-id[_ngcontent-%COMP%] {\n  flex: 0 0 50px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  background: var(--table-color-bg);\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mat-paginator[_ngcontent-%COMP%] {\n  background: var(--bg-table-footer);\n  color: var(--tex-pg-table);\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: var(--header-text-table);\n  font-weight: bold;\n  background-color: --table-header-bg;\n  font-size: 8px;\n}\n\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%] {\n  color: var(--color-text-table);\n  --bs-table-border-color: var(--margin-table);\n}\n\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: var(--table-header-bg);\n}\n\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  box-shadow: 0 rem 0rem var(--shadown-color) !important;\n}\n\nmat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\n  border-bottom-color: var(--border-inter-table);\n}\n\n.mat-header-row[_ngcontent-%COMP%] {\n  background: var(--bg-table-footer);\n}\n\n.mat-input-element[_ngcontent-%COMP%] {\n  color: var(--drowdown-text-color);\n  caret-color: var(--drowdown-text-color);\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n@media (min-width: 656px) {\n  .mat-cell[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .mat-header-cell[_ngcontent-%COMP%] {\n    color: var(--header-text-table);\n    font-weight: bold;\n    background-color: --table-header-bg;\n    font-size: 12px;\n  }\n  .listpoint[_ngcontent-%COMP%] {\n    list-style: none;\n    margin-right: 3vw;\n  }\n}\n\n@media (min-width: 1046px) {\n  .listpoint[_ngcontent-%COMP%] {\n    list-style: none;\n    margin-right: 150px;\n  }\n}\n\n.form-control[_ngcontent-%COMP%] {\n  height: 21px;\n  padding: 3px 3px 3px 3px;\n  color: var(--drowdown-text-color);\n  background-color: var(--drowdown-bg);\n  border: 1px solid var(--drowdown-brd);\n}\n\n.positive[_ngcontent-%COMP%] {\n  color: rgb(19, 224, 0);\n}\n\n.negative[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.scroll[_ngcontent-%COMP%] {\n  max-height: 60vh;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.secscroll[_ngcontent-%COMP%] {\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n@media (min-width: 400px) {\n  .scroll[_ngcontent-%COMP%] {\n    max-height: 59vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n  .secscroll[_ngcontent-%COMP%] {\n    max-height: 63vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n}\n\n@media (min-width: 1400px) {\n  .scroll[_ngcontent-%COMP%] {\n    max-height: 70vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n  .secscroll[_ngcontent-%COMP%] {\n    max-height: 74vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRhZm9saW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkFBQTtBQUFGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FBR0Y7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtBQUdGOztBQURFO0VBQ0UscUJBQUE7QUFHSjs7QUFESTtFQUNFLFlBQUE7QUFHTjs7QUFDRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFBSjs7QUFHRTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFJRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFJSTtFQUNFLFlBQUE7QUFGTjs7QUFLSTtFQUNFLFVBQUE7QUFITjs7QUFNSTtFQUNFLG9CQUFBO0FBSk47O0FBUUU7RUFDRSxpQkFBQTtBQU5KOztBQVNFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFTSTtFQUNFLFdBQUE7QUFQTjs7QUFZQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBVEY7O0FBWUE7RUFDRSxlQUFBO0FBVEY7O0FBWUE7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0FBVEQ7O0FBWUE7RUFDRSxxQkFBQTtFQUNBLHFEQUFBO0FBVEY7O0FBWUEsc0NBQUE7O0FBQ0E7RUFDRSxXQUFBO0FBVEY7O0FBWUE7RUFDRSxnQ0FBQTtBQVRGOztBQVlBO0VBQ0UscUNBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0FBVEY7O0FBYUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FBVkY7O0FBYUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDRixjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBVkE7O0FBYUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDREQUFBO0FBVkY7O0FBYUE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FBVkY7O0FBYUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQVZGOztBQWFBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQVZGO0VBYUE7SUFDRSxpQkFBQTtJQUNBLHlCQUFBO0VBWEY7QUFDRjs7QUFlQTtFQUNFLHlEQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsMENBQUE7RUFDQSxzQ0FBQTtFQUNBLDhEQUFBO0VBQ0EsdURBQUE7RUFDQSw0REFBQTtFQUNBLDJEQUFBO0VBQ0EsK0NBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUNBQUE7QUFiRjs7QUFtQkE7RUFDRSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFoQkY7O0FBbUJFO0VBQ0UsdUJBQUE7QUFoQko7O0FBdUJBO0VBQ0UsV0FBQTtBQXBCRjs7QUF1QkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQXBCRjs7QUF1QkE7RUFDRSxXQUFBO0FBcEJGOztBQXdCQTtFQUNFLHVCQUFBO0FBckJGOztBQXlCQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQXRCQTs7QUF5QkE7RUFDQSx1QkFBQTtFQUNDLGVBQUE7QUF0QkQ7O0FBd0JBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBckJGOztBQXVCQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXBCRjs7QUF1QkE7RUFDRTtJQUNHLGVBQUE7RUFwQkg7RUF1QkE7SUFDRSx1QkFBQTtJQUNBLGVBQUE7RUFyQkY7RUF1QkE7SUFDRSxxQkFBQTtJQUNBLGVBQUE7RUFyQkY7RUF1QkE7SUFDRSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFyQkY7QUFDRjs7QUF3QkE7RUFDRSx5REFBQTtBQXRCRjs7QUF5QkE7RUFDRSx5QkFBQTtBQXRCRjs7QUF5QkE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUF0QkY7O0FBMEJBO0VBQ0UsdUNBQUE7RUFDQSxxREFBQTtFQUNBLG1EQUFBO0VBQ0EsNkNBQUE7RUFDQSxpRUFBQTtFQUNBLDZEQUFBO0VBQ0EscURBQUE7RUFDQSwrQ0FBQTtFQUNBLG1FQUFBO0VBQ0EsdURBQUE7RUFDQSx5REFBQTtFQUNBLG1EQUFBO0VBQ0EsdUVBQUE7RUFDQSxxQ0FBQTtBQXZCRjs7QUEwQkE7RUFDRSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBdkJGOztBQTBCRTtFQUNFLHVCQUFBO0FBdkJKOztBQThCQTtFQUVFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBNUJGOztBQStCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUE1QkY7O0FBK0JBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUE1QkY7O0FBa0NBO0VBQ0UsY0FBQTtBQS9CRjs7QUFrQ0E7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQS9CQTs7QUFvQ0E7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0FBakNBOztBQXFDQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7QUFsQ0E7O0FBcUNBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtBQWxDQTs7QUF1Q0E7RUFDQSw2QkFBQTtBQXBDQTs7QUF1Q0E7RUFFQSxzREFBQTtBQXJDQTs7QUF3Q0E7RUFDQSw4Q0FBQTtBQXJDQTs7QUF3Q0E7RUFDQSxrQ0FBQTtBQXJDQTs7QUF3Q0E7RUFFQSxpQ0FBQTtFQUNBLHVDQUFBO0FBdENBOztBQXlDQTtFQUNBLGVBQUE7QUF0Q0E7O0FBeUNBO0VBRUE7SUFDSSxlQUFBO0VBdkNGO0VBMENGO0lBQ0ksK0JBQUE7SUFDQSxpQkFBQTtJQUNBLG1DQUFBO0lBQ0EsZUFBQTtFQXhDRjtFQTRDRjtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUExQ0E7QUFDRjs7QUE2Q0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7RUEzQ0Y7QUFDRjs7QUE4Q0E7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7QUE1Q0Y7O0FBOENBO0VBQ0Usc0JBQUE7QUEzQ0Y7O0FBOENFO0VBQ0EsVUFBQTtBQTNDRjs7QUE4Q0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUEzQ0o7O0FBNkNFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBMUNKOztBQTZDRTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VBMUNKO0VBNkNFO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VBM0NKO0FBQ0Y7O0FBOENFO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUE1Q0o7RUE4Q0U7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUE1Q0o7QUFDRiIsImZpbGUiOiJwb3J0YWZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zZWFyY2gtYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGViOTY1O1xyXG59XHJcbi5hc3NldHMtdGFicyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xyXG4gIGJhY2tncm91bmQ6ICNjZWNjY2M7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmJ1dG9uZ3J1c3tcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICAvLyBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmN1cnJ0ZXh0e1xyXG4gIGNvbG9yOiAgdmFyKC0tY291bnQtY29sb3IpO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uYXNzZXQtbGlzdC1pdGVtIHtcclxuICBtYXJnaW46IDAuNWVtIDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWl0ZW0tYXNzZXRzKTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xyXG4gIG1pbi13aWR0aDogMXJlbTtcclxufVxyXG5cclxuLmFzc2V0cy1lYXN5LXBhZ2Uge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwcHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xyXG5cclxuICBmaWd1cmUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG4gICAgXHJcbiAgICBpbWd7XHJcbiAgICAgIGhlaWdodDogNXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgyLnRpdGxlIHtcclxuICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6ICM0RDRENERcclxuICB9XHJcblxyXG4gIHNwYW4uYW1vdW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDJlMGU7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gICAgcGFkZGluZzogNXB4IDJyZW07XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgLmFzc2V0LWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDAgMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIC5idXktc2VsbC1tZXNzYWdlIHtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIGNvbG9yOiAjNEQ0RDREO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAmLmdyZWVuIHtcclxuICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgfVxyXG5cclxuICAgICYucmVkIHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VuZC1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgfVxyXG5cclxuICAuc3VtbWFyeSB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzJiYmE0YTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4uc3VtbWFyeS1pdGVtIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvdGFsIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5saXN0cG9pbnQge1xyXG4gbGlzdC1zdHlsZTogbm9uZTtcclxuIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG4qIHtcclxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgc2Nyb2xsYmFyLWNvbG9yOiByZ2IoMjYsIDI2LCAyNikgcmdiYSgyNTUsIDE2NiwgMCwgMCk7XHJcbn1cclxuXHJcbi8qIFdvcmtzIG9uIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaSAqL1xyXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDEycHg7XHJcbn1cclxuXHJcbio6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTY2LCAwLCAwKTtcclxufVxyXG5cclxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxlLXNjcm9sbCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10YWJsZS1zY3JvbGwpO1xyXG4gIFxyXG59XHJcblxyXG4udGV4SXRlbXtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICBjb2xvcjogIHJnYigxMzYsIDEzNSwgMTM1KTtcclxufVxyXG5cclxuLnN0eWxldGl0ZWx7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIxJTtcclxuY29sb3I6ICMyYmJhNGE7XHJcbmZvbnQtc2l6ZTogMjBweDtcclxuZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLm15cG9ydGZvbGlveyBcclxuICBjb2xvcjogcmdiKDE3MywgMTczLCAxNzMpO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50ZXh0aXRlbXN7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBjb2xvcjogIHJnYigxMzYsIDEzNSwgMTM1KTtcclxufVxyXG5cclxuLml0ZW1pbnRye1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDcwMnB4KSB7XHJcbiAgLml0ZW1pbnRye1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG5cclxuICAudGV4dGl0ZW1ze1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBjb2xvcjogIHJnYigxMzYsIDEzNSwgMTM1KTtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbi5zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgLjVyZW0gMnJlbSB2YXIoLS1zaGFkb3duLWNvbG9yKSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51e1xyXG4gIC0tYnMtZHJvcGRvd24tY29sb3I6IHZhcigtLWJzLWRyb3duLWNvbG9yKTtcclxuICAtLWJzLWRyb3Bkb3duLWJnOiB2YXIoLS1iZy1jb2xvci1kcm93KTtcclxuICAtLWJzLWRyb3Bkb3duLWJvcmRlci1jb2xvcjogdmFyKC0tYnMtYm9yZGVyLWNvbG9yLXRyYW5zbHVjZW50KTtcclxuICAtLWJzLWRyb3Bkb3duLWlubmVyLWJvcmRlci1yYWRpdXM6IGNhbGMoMC4zNzVyZW0gLSAxcHgpO1xyXG4gIC0tYnMtZHJvcGRvd24tZGl2aWRlci1iZzogdmFyKC0tYnMtYm9yZGVyLWNvbG9yLXRyYW5zbHVjZW50KTtcclxuICAtLWJzLWRyb3Bkb3duLWJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAtLWJzLWRyb3Bkb3duLWxpbmstY29sb3I6IHZhcigtLWJzLWRyb3duLWNvbG9yKTtcclxuICAtLWJzLWRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICMxZTIxMjU7XHJcbiAgLS1icy1kcm9wZG93bi1saW5rLWhvdmVyLWJnOiAjZTllY2VmO1xyXG4gIC0tYnMtZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICNmZmY7XHJcbiAgLS1icy1kcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogIzI2NTAxZTtcclxuICAtLWJzLWRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICNhZGI1YmQ7XHJcbiAgLS1icy1kcm9wZG93bi1oZWFkZXItY29sb3I6ICM2Yzc1N2Q7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5pYmFja2NvbG9ye1xyXG4gIG1hcmdpbi10b3A6IC01MnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pYmFja2NvbG9yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pYmFja2NvbG9yOmhvdmVye1xyXG4gICAgY29sb3I6IHJnYigwLCAyNTUsIDE3MCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4vLyBJTkZPIENSWVBUT1xyXG5cclxuLnRleGxhYmVse1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLnRleHRwcmljZXtcclxuICBjb2xvcjogcmdiKDU4LCAxODcsIDUzKTsgXHJcblxyXG59XHJcblxyXG4uY29scnRleHR7XHJcbmNvbG9yOiB2YXIoLS1jb3VudC1jb2xvcik7XHJcbmZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmNvbHJ2YWx7XHJcbmNvbG9yOiByZ2IoMCwgMTY3LCAxMzApOyBcclxuIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4uY29scnZhbG57XHJcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApOyBcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLndoaWRidXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODQycHgpIHtcclxuICAuY29scnRleHR7IFxyXG4gICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbHJ2YWx7XHJcbiAgICBjb2xvcjogcmdiKDAsIDE2NywgMTMwKTsgICBcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gIH1cclxuICAuY29scnZhbG57XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7IFxyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICAud2hpZGJ1e1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC41cmVtIDJyZW0gdmFyKC0tc2hhZG93bi1jb2xvcikhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGl0ZWluZm97XHJcbiAgY29sb3I6IHZhcigtLWNvdW50LWNvbG9yKTtcclxufVxyXG5cclxuLmJ1dG9uZ3J1c3tcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICAvLyBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1ib3gge1xyXG4gIC0tYnMtYnRuLWNvbG9yOiAgdmFyKC0tYnMtYnRuLWNvbG9yLWJveCk7XHJcbiAgLS1icy1idG4tYm9yZGVyLWNvbG9yOiAgdmFyKC0tYnMtYnRuLWJvcmRlci1jb2xvci1ib3gpO1xyXG4gIC0tYnMtYnRuLWhvdmVyLWNvbG9yOiAgdmFyKC0tYnMtYnRuLWhvdmVyLWNvbG9yLWJveCk7XHJcbiAgLS1icy1idG4taG92ZXItYmc6ICB2YXIoLS1icy1idG4taG92ZXItYmctYm94KTtcclxuICAtLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3I6ICB2YXIoLS1icy1idG4taG92ZXItYm9yZGVyLWNvbG9yLWJveCk7XHJcbiAgLS1icy1idG4tZm9jdXMtc2hhZG93LXJnYjogIHZhcigtLWJzLWJ0bi1mb2N1cy1zaGFkb3ctcmdiLWJveCk7XHJcbiAgLS1icy1idG4tYWN0aXZlLWNvbG9yOiAgdmFyKC0tYnMtYnRuLWFjdGl2ZS1jb2xvci1ib3gpO1xyXG4gIC0tYnMtYnRuLWFjdGl2ZS1iZzogIHZhcigtLWJzLWJ0bi1hY3RpdmUtYmctYm94KTtcclxuICAtLWJzLWJ0bi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgdmFyKC0tYnMtYnRuLWFjdGl2ZS1ib3JkZXItY29sb3ItYm94KTtcclxuICAtLWJzLWJ0bi1hY3RpdmUtc2hhZG93OiAgdmFyKC0tYnMtYnRuLWFjdGl2ZS1zaGFkb3ctYm94KTtcclxuICAtLWJzLWJ0bi1kaXNhYmxlZC1jb2xvcjogIHZhcigtLWJzLWJ0bi1kaXNhYmxlZC1jb2xvci1ib3gpO1xyXG4gIC0tYnMtYnRuLWRpc2FibGVkLWJnOiB2YXIoLS1icy1idG4tZGlzYWJsZWQtYmctYm94KTtcclxuICAtLWJzLWJ0bi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICB2YXIoLS1icy1idG4tZGlzYWJsZWQtYm9yZGVyLWNvbG9yLWJveCk7XHJcbiAgLS1icy1ncmFkaWVudDogIHZhcigtLWJzLWdyYWRpZW50LWJveCk7XHJcbn1cclxuXHJcbi5pYmFja2NvbG9ye1xyXG4gIGNvbG9yOiB2YXIoLS1pYmFja2NvbG9yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuaWJhY2tjb2xvcjpob3ZlcntcclxuICAgIGNvbG9yOiByZ2IoMCwgMjU1LCAxNzApO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDY0cHg7XHJcbiAgcGFkZGluZzogOHB4IDI0cHggMDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4ubWF0LWNvbHVtbi1pZCB7XHJcbiAgZmxleDogMCAwIDUwcHg7XHJcbn1cclxuXHJcbi5tYXQtdGFibGUge1xyXG5iYWNrZ3JvdW5kOiB2YXIoLS10YWJsZS1jb2xvci1iZyk7ICBcclxub3ZlcmZsb3c6IGF1dG87XHJcbm1heC1oZWlnaHQ6IDUwMHB4O1xyXG5cclxufVxyXG5cclxuXHJcbi5tYXQtcGFnaW5hdG9yIHtcclxuYmFja2dyb3VuZDogdmFyKC0tYmctdGFibGUtZm9vdGVyKTtcclxuY29sb3I6IHZhcigtLXRleC1wZy10YWJsZSk7XHJcblxyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxsIHtcclxuY29sb3I6IHZhcigtLWhlYWRlci10ZXh0LXRhYmxlKTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmJhY2tncm91bmQtY29sb3I6ICgtLXRhYmxlLWhlYWRlci1iZyk7XHJcbmZvbnQtc2l6ZTogOHB4O1xyXG59XHJcblxyXG4ubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xyXG5jb2xvcjogdmFyKC0tY29sb3ItdGV4dC10YWJsZSk7XHJcbi0tYnMtdGFibGUtYm9yZGVyLWNvbG9yOiB2YXIoLS1tYXJnaW4tdGFibGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xyXG5jb2xvcjogdmFyKC0tdGFibGUtaGVhZGVyLWJnKTtcclxufVxyXG5cclxuLm1hdC1lbGV2YXRpb24tejgge1xyXG4vLyBib3gtc2hhZG93OiAwcHggNXB4IDVweCAtM3B4IHJnYigyNTUgMCAwIC8gMjAlKSwgMHB4IDhweCAxMHB4IDFweCByZ2IoMjEgMjU1IDAgLyAxMSUpLCAwcHggM3B4IDE0cHggMnB4IHJnYigyNTUgMCAwKTtcclxuYm94LXNoYWRvdzogMCByZW0gMHJlbSB2YXIoLS1zaGFkb3duLWNvbG9yKSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtZm9vdGVyLXJvdywgdGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsIHtcclxuYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYm9yZGVyLWludGVyLXRhYmxlKTtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItcm93e1xyXG5iYWNrZ3JvdW5kOiB2YXIoLS1iZy10YWJsZS1mb290ZXIpO1xyXG59XHJcblxyXG4ubWF0LWlucHV0LWVsZW1lbnQge1xyXG5cclxuY29sb3I6IHZhcigtLWRyb3dkb3duLXRleHQtY29sb3IpO1xyXG5jYXJldC1jb2xvcjogdmFyKC0tZHJvd2Rvd24tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbi5tYXQtY2VsbHtcclxuZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjU2cHgpIHtcclxuXHJcbi5tYXQtY2VsbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQtdGFibGUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAoLS10YWJsZS1oZWFkZXItYmcpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5cclxuLmxpc3Rwb2ludCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW4tcmlnaHQ6IDN2dztcclxuIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwNDZweCkge1xyXG4gIC5saXN0cG9pbnQge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTUwcHg7XHJcbiAgIH1cclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgaGVpZ2h0OiAyMXB4O1xyXG4gIHBhZGRpbmc6IDNweCAzcHggM3B4IDNweDtcclxuICBjb2xvcjogdmFyKC0tZHJvd2Rvd24tdGV4dC1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHJvd2Rvd24tYmcpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRyb3dkb3duLWJyZCk7ICAgIFxyXG59XHJcbi5wb3NpdGl2ZXtcclxuICBjb2xvcjpyZ2IoMTksIDIyNCwgMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZWdhdGl2ZXtcclxuICBjb2xvcjogcmVkO1xyXG4gIH1cclxuXHJcbiAgLnNjcm9sbHtcclxuICAgIG1heC1oZWlnaHQ6NjB2aDsgXHJcbiAgICBvdmVyZmxvdy14OmhpZGRlbjsgXHJcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICB9XHJcbiAgLnNlY3Njcm9sbHtcclxuICAgIG1heC1oZWlnaHQ6NTR2aDsgXHJcbiAgICBvdmVyZmxvdy14OmhpZGRlbjsgXHJcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xyXG4gICAgLnNjcm9sbHtcclxuICAgICAgbWF4LWhlaWdodDo1OXZoOyBcclxuICAgICAgb3ZlcmZsb3cteDpoaWRkZW47IFxyXG4gICAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgIH1cclxuXHJcbiAgICAuc2Vjc2Nyb2xse1xyXG4gICAgICBtYXgtaGVpZ2h0OjYzdmg7IFxyXG4gICAgICBvdmVyZmxvdy14OmhpZGRlbjsgXHJcbiAgICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgLnNjcm9sbHtcclxuICAgICAgbWF4LWhlaWdodDo3MHZoOyBcclxuICAgICAgb3ZlcmZsb3cteDpoaWRkZW47IFxyXG4gICAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgIH1cclxuICAgIC5zZWNzY3JvbGx7XHJcbiAgICAgIG1heC1oZWlnaHQ6NzR2aDsgXHJcbiAgICAgIG92ZXJmbG93LXg6aGlkZGVuOyBcclxuICAgICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"]
});

/***/ }),

/***/ 69518:
/*!*******************************************!*\
  !*** ./src/models/Market/market.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConvertDataModelResponse": () => (/* binding */ ConvertDataModelResponse),
/* harmony export */   "ConvertModel": () => (/* binding */ ConvertModel),
/* harmony export */   "ConvertModelResponse": () => (/* binding */ ConvertModelResponse)
/* harmony export */ });
class ConvertModel {
}
class ConvertModelResponse {
}
class ConvertDataModelResponse {
}


/***/ }),

/***/ 90406:
/*!*******************************************************!*\
  !*** ./src/services/Graph/graphInfoCrypto.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphInfoCryptoService": () => (/* binding */ GraphInfoCryptoService)
/* harmony export */ });
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ 72750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class GraphInfoCryptoService {
    constructor() { }
    makeOption() {
        var languageCountryCode;
        return {
            animation: true,
            grid: {
                left: '0%',
                right: '0%',
                bottom: 75,
                top: 5,
            },
            xAxis: [
                {
                    type: 'time',
                    min: 'dataMin',
                    max: 'dataMax',
                    splitNumber: 2,
                    interval: 2,
                    scale: true,
                    axisPointer: {
                        snap: true,
                        lineStyle: {
                            color: '#7581BD',
                            width: 1
                        },
                        label: {
                            show: false,
                            formatter: function (params) {
                                return echarts__WEBPACK_IMPORTED_MODULE_0__.format.formatTime('MM-dd hh:mm', params.value);
                            },
                            backgroundColor: '#7581BD'
                        },
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        onZero: false,
                        show: true,
                        lineStyle: {
                            color: '#FFFFFF'
                        }
                    },
                    axisLabel: {
                        formatter: function (value) {
                            return echarts__WEBPACK_IMPORTED_MODULE_0__.format.formatTime('MM-dd hh:mm', value);
                        },
                        textStyle: {
                            fontSize: 12,
                            color: "",
                        },
                        margin: 12,
                    },
                },
            ],
            yAxis: [
                {
                    show: true,
                    scale: true,
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            type: 'dotted',
                            opacity: 0.75,
                        },
                    },
                    zlevel: 1000,
                    position: 'left',
                    axisLabel: {
                        textStyle: {
                            fontSize: 12,
                            color: "",
                        },
                        inside: true,
                        verticalAlign: 'middle',
                        margin: 0,
                        showMinLabel: false,
                        showMaxLabel: false,
                        formatter: function (value) {
                            const options = {};
                            const numberFormat = new Intl.NumberFormat(languageCountryCode, options);
                            var formattedValue = numberFormat.format(value);
                            return formattedValue;
                        },
                    },
                    min: function (value) {
                        return value.min;
                    },
                    max: function (value) {
                        return value.max;
                    },
                },
                {
                    show: true,
                    type: 'value',
                    scale: true,
                    splitLine: {
                        show: false,
                        lineStyle: {
                            type: 'dotted',
                            opacity: 0.75,
                        },
                    },
                    axisTick: {
                        show: false
                    },
                    zlevel: 1000,
                    position: 'right',
                    axisLabel: {
                        textStyle: {
                            fontSize: 12
                        },
                        inside: false,
                        verticalAlign: 'middle',
                        align: 'right',
                        margin: 0,
                        showMinLabel: false,
                        showMaxLabel: false,
                        formatter: function (value) {
                            const options = {};
                            const numberFormat = new Intl.NumberFormat(languageCountryCode, options);
                            var formattedValue = numberFormat.format(value);
                            return formattedValue;
                        },
                    },
                    min: function (value) {
                        var multFactor = 1 / 1.026;
                        var min = value.min;
                        if (min < 0) {
                            if (value.min < 0) {
                                multFactor = 1 / multFactor;
                            }
                            min = min * multFactor;
                            var newMin = Math.round((min + Number.EPSILON) * 100) / 100;
                            return newMin;
                        }
                        else {
                            return 0;
                        }
                    },
                    max: function (value) {
                        //var multFactor = 1.10;
                        var multFactor = 1.08;
                        if (value.max < 0) {
                            multFactor = 1 / multFactor;
                        }
                        var max = value.max * multFactor;
                        var newMax = Math.round((max + Number.EPSILON) * 100) / 100;
                        return newMax;
                    }
                },
            ],
            visualMap: [
                {
                    show: false,
                    dimension: 1,
                    seriesIndex: 0,
                    pieces: [
                        {
                            lt: 0,
                            color: 'red'
                        },
                        {
                            gte: 1,
                            lte: 1000000,
                            color: 'green'
                        }
                    ]
                },
                {
                    show: false,
                    dimension: 1,
                    seriesIndex: 1,
                    pieces: [
                        {
                            lt: 0,
                            color: 'rgb(255, 0, 0)',
                        },
                        {
                            gte: 1,
                            lte: 1000000,
                            color: 'rgb(0, 100, 0)',
                        }
                    ]
                },
            ],
            series: [
                {
                    // 0
                    type: 'line',
                    yAxisIndex: 1,
                    smooth: true,
                    name: 'Unrealized P/L',
                    symbolSize: 6,
                    // symbol: 'none',
                    data: [],
                    axisLabel: {
                        textStyle: {
                            fontSize: 12
                        },
                    },
                    lineStyle: {
                        //color: 'rgba(139, 128, 0, 0.5)',
                        width: 1,
                    },
                    itemStyle: {
                    //color: 'rgba(139, 128, 0, 1.0)',
                    },
                    markPoint: {}
                },
                {
                    // 1
                    type: 'bar',
                    z: 2,
                    yAxisIndex: 1,
                    barWidth: 8,
                    name: 'Realized P/L',
                    data: [],
                    axisLabel: {
                        textStyle: {
                            fontSize: 12
                        },
                    },
                    itemStyle: {},
                    markPoint: {},
                },
                {
                    // 2
                    type: 'line',
                    smooth: true,
                    name: 'Asset Price',
                    yAxisIndex: 0,
                    symbolSize: 6,
                    z: 1,
                    //symbol: 'none',
                    data: [],
                    axisLabel: {
                        textStyle: {
                            fontSize: 12
                        },
                    },
                    itemStyle: { color: 'rgb(0, 0, 255)' },
                    lineStyle: {
                        color: 'rgb(0, 0, 255)',
                        width: 1,
                    },
                    markPoint: {}
                },
                {
                    // 3
                    type: 'scatter',
                    yAxisIndex: 0,
                    smooth: true,
                    name: 'Trade Buy Price',
                    symbol: 'diamond',
                    symbolSize: 10,
                    z: 10,
                    data: [],
                    axisLabel: {
                        textStyle: {
                            fontSize: 12
                        },
                    },
                    itemStyle: { color: 'rgb(0, 255, 0)' },
                    markPoint: {},
                },
                {
                    // 4
                    type: 'scatter',
                    yAxisIndex: 0,
                    smooth: true,
                    name: 'Trade Sell Price',
                    symbol: 'diamond',
                    symbolSize: 10,
                    z: 10,
                    data: [],
                    axisLabel: {
                        textStyle: {
                            fontSize: 12
                        },
                    },
                    itemStyle: { color: 'rgb(255, 0, 0)' },
                    markPoint: {},
                },
            ],
            backgroundColor: 'rgb(0, 0, 0)',
            legend: {
                itemWidth: 18 * 1.5,
                itemHeight: 10 * 1.5,
                show: true,
                height: 120,
                itemGap: 10,
                left: 'auto',
                right: 'auto',
                top: 'auto',
                bottom: -5,
                //padding: 8,
                padding: [
                    5,
                    0,
                    5,
                    0, // left
                ],
                inactiveColor: 'rgba(100, 100, 100, 0.50)',
                data: [
                    { name: 'Unrealized P/L', icon: 'image://assets/Graph/unrealizedPnL.png' },
                    { name: 'Realized P/L', icon: 'image://assets/Graph/realPAndL.png' },
                    { name: 'Asset Price', icon: 'image://assets/Graph/assetPrice.png' },
                    { name: 'Trade Buy Price', icon: 'image://assets/Graph/buyTradePrice.png' },
                    { name: 'Trade Sell Price', icon: 'image://assets/Graph/sellTradePrice.png' },
                ],
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "line",
                },
                borderColor: 'rgba(0, 0, 0, 1.0)',
                backgroundColor: 'rgba(32, 32, 32, 0.85)',
                textStyle: {
                    color: 'rgba(255, 255, 255, 1.0)',
                    fontSize: 10,
                },
                formatter: function (param) {
                    return param;
                },
                position: function (pos, params, el, elRect, size) {
                    var obj = { top: 10 };
                    obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 0;
                    return obj;
                },
                extraCssText: 'width: 12rem'
            },
        };
    }
}
GraphInfoCryptoService.ɵfac = function GraphInfoCryptoService_Factory(t) { return new (t || GraphInfoCryptoService)(); };
GraphInfoCryptoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GraphInfoCryptoService, factory: GraphInfoCryptoService.ɵfac, providedIn: 'root' });
;


/***/ }),

/***/ 8264:
/*!*******************************************************!*\
  !*** ./src/services/Graph/graphPortafolio.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphPortafolioService": () => (/* binding */ GraphPortafolioService)
/* harmony export */ });
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ 72750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class GraphPortafolioService {
    constructor() { }
    makeOption() {
        var languageCountryCode;
        return {
            animation: true,
            grid: {
                left: '4%',
                right: '0%',
                height: '80%',
                width: '94%',
                bottom: 60,
                top: 5,
            },
            backgroundColor: 'rgb(0, 0, 0)',
            legend: {
                show: true,
                itemWidth: 18 * 1.5,
                itemHeight: 10 * 1.5,
                height: 80,
                bottom: 0,
                padding: 8,
                inactiveColor: 'rgba(100, 100, 100, 0.50)',
                data: [
                    { name: 'Total Worth', icon: 'image://assets/Graph/totalWorth.png', },
                    { name: 'Unrealized P/L', icon: 'image://assets/Graph/unrealizedPnL.png' },
                    { name: 'Realized P/L', icon: 'image://assets/Graph/realPAndL.png' },
                ],
            },
            xAxis: [
                {
                    type: 'time',
                    min: 'dataMin',
                    max: 'dataMax',
                    splitNumber: 2,
                    interval: 2,
                    scale: true,
                    axisPointer: {
                        snap: true,
                        lineStyle: {
                            color: '#7581BD',
                            width: 1
                        },
                        label: {
                            show: false,
                            formatter: function (params) {
                                return echarts__WEBPACK_IMPORTED_MODULE_0__.format.formatTime('MM-dd hh:mm', params.value);
                            },
                            backgroundColor: '#7581BD'
                        },
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        formatter: function (value) {
                            return echarts__WEBPACK_IMPORTED_MODULE_0__.format.formatTime('MM-dd hh:mm', value);
                        },
                        textStyle: {
                            fontSize: 10,
                            color: "",
                        },
                        showMinLabel: false,
                        showMaxLabel: false,
                        margin: 12,
                    },
                    axisLine: {
                        onZero: false,
                        show: true,
                        lineStyle: {
                            color: '#FFFFFF'
                        }
                    },
                },
            ],
            yAxis: [
                {
                    show: true,
                    scale: true,
                    type: 'value',
                    splitNumber: 3,
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            type: 'dotted',
                            opacity: 0.65,
                        },
                    },
                    position: 'left',
                    axisLabel: {
                        textStyle: {
                            fontSize: 10,
                            color: "",
                        },
                        inside: true,
                        verticalAlign: 'middle',
                        margin: 0,
                        showMinLabel: false,
                        showMaxLabel: false,
                        formatter: function (value) {
                            const options = {};
                            const numberFormat = new Intl.NumberFormat(languageCountryCode, options);
                            var formattedValue = numberFormat.format(value);
                            return formattedValue;
                        },
                    },
                    min: function (value) {
                        var min = value.min;
                        return Math.round((min + Number.EPSILON) * 100) / 100;
                    },
                    max: function (value) {
                        var max = value.max;
                        return Math.round((max + Number.EPSILON) * 100) / 100;
                    },
                },
                {
                    show: true,
                    type: 'value',
                    scale: true,
                    splitLine: {
                        show: false,
                        lineStyle: {
                            type: 'dotted',
                            opacity: 0.75,
                        },
                    },
                    axisTick: {
                        show: false
                    },
                    position: 'right',
                    axisLabel: {
                        textStyle: {
                            fontSize: 10,
                        },
                        inside: false,
                        verticalAlign: 'middle',
                        align: 'right',
                        margin: 0,
                        showMinLabel: false,
                        showMaxLabel: false,
                        formatter: function (value) {
                            const options = {};
                            const numberFormat = new Intl.NumberFormat(languageCountryCode, options);
                            var formattedValue = numberFormat.format(value);
                            return formattedValue;
                        },
                    },
                    min: function (value) {
                        var multFactor = 1 / 1.026;
                        var min = value.min;
                        if (value.min < 0) {
                            multFactor = 1 / multFactor;
                        }
                        min = min * multFactor;
                        var newMin = Math.round((min + Number.EPSILON) * 100) / 100;
                        return newMin;
                    },
                    max: function (value) {
                        var multFactor = 1.08;
                        if (value.max < 0) {
                            multFactor = 1 / multFactor;
                        }
                        var max = value.max * multFactor;
                        var newMax = Math.round((max + Number.EPSILON) * 100) / 100;
                        return newMax;
                    },
                },
            ],
            visualMap: [
                {
                    show: false,
                    dimension: 1,
                    seriesIndex: 1,
                    pieces: [
                        {
                            lt: 0,
                            color: 'red'
                        },
                        {
                            gte: 0,
                            lte: 1000000,
                            color: 'green'
                        }
                    ]
                },
                {
                    show: false,
                    dimension: 1,
                    seriesIndex: 2,
                    pieces: [
                        {
                            lt: 0,
                            color: 'rgb(255, 0, 0)',
                        },
                        {
                            gte: 1,
                            lte: 1000000,
                            color: 'rgb(0, 100, 0)',
                        }
                    ]
                },
            ],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: "line",
                    animation: false
                },
                formatter: function (param) {
                    return param;
                },
                borderColor: 'rgba(0, 0, 0, 1.0)',
                backgroundColor: 'rgba(32, 32, 32, 0.85)',
                textStyle: {
                    color: 'rgba(255, 255, 255, 1.0)',
                    fontSize: 10,
                },
                position: function (pos, params, el, elRect, size) {
                    var obj = { top: 10 };
                    obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 0;
                    return obj;
                },
                extraCssText: 'width: 12rem'
            },
            series: [
                {
                    type: 'line',
                    yAxisIndex: 0,
                    name: 'Total Worth',
                    smooth: true,
                    data: [],
                    axisLabel: {
                        textStyle: {
                            fontSize: 12
                        },
                    },
                    itemStyle: { color: 'rgb(255, 255, 0)', },
                    lineStyle: {
                        color: 'rgb(255, 255, 0)',
                        width: 1,
                    }
                },
                {
                    type: 'line',
                    yAxisIndex: 1,
                    smooth: true,
                    name: 'Unrealized P/L',
                    data: [],
                    axisLabel: {
                        textStyle: {
                            fontSize: 12
                        },
                    },
                    lineStyle: {
                        width: 1,
                    },
                    itemStyle: {},
                },
                {
                    type: 'bar',
                    yAxisIndex: 1,
                    barWidth: 8,
                    name: 'Realized P/L',
                    z: 4,
                    data: [],
                    axisLabel: {
                        textStyle: {
                            fontSize: 12
                        },
                    },
                    markPoint: {},
                },
            ],
        };
    }
}
GraphPortafolioService.ɵfac = function GraphPortafolioService_Factory(t) { return new (t || GraphPortafolioService)(); };
GraphPortafolioService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GraphPortafolioService, factory: GraphPortafolioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 11952:
/*!***********************************************!*\
  !*** ./src/services/Wallet/wallet.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletService": () => (/* binding */ WalletService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AppSettingsInit/app-settings.service */ 17059);





class WalletService {
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
        this.ApiValidateWalletAddress = this.settingsService.getapidatos().APIS.ApiValidateWalletAddress;
        this.ApiGetWalletForDeposit = this.settingsService.getapidatos().APIS.ApiGetWalletForDeposit;
        this.ApiWithdrawMaxForCoin = settingsService.getapidatos().APIS.ApiWithdrawMaxForCoin;
    }
    ValidateWalletAddress(data) {
        return this.http.post(this.ApiBase + this.ApiValidateWalletAddress, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    GetWalletForDeposit(data) {
        return this.http.post(this.ApiBase + this.ApiGetWalletForDeposit, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
    WithdrawMaxForCoin(data) {
        return this.http.post(this.ApiBase + this.ApiWithdrawMaxForCoin, data, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res;
        }));
    }
}
WalletService.ɵfac = function WalletService_Factory(t) { return new (t || WalletService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_AppSettingsInit_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService)); };
WalletService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: WalletService, factory: WalletService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_Portafolio_portafolio_module_ts.js.map