"use strict";
(self["webpackChunkBloxcrossFrontend"] = self["webpackChunkBloxcrossFrontend"] || []).push([["src_app_Principal_principal_module_ts"],{

/***/ 62983:
/*!******************************************************!*\
  !*** ./src/app/Principal/assets/assets.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetsComponent": () => (/* binding */ AssetsComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts */ 72750);
/* harmony import */ var src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/Enum/EnumPopUp.enum */ 42241);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_BuyAndSell_buy_sell_buy_sell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/BuyAndSell/buy-sell/buy-sell.component */ 51270);
/* harmony import */ var src_app_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/PopUp/confirmation/confirmation.component */ 40915);
/* harmony import */ var src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/Enum/EnumAuthentication.enum */ 81708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_services_Graph_graphAssets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/Graph/graphAssets.service */ 90500);
/* harmony import */ var src_services_Market_market_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/Market/market.service */ 74421);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/manage-data.service */ 43607);
/* harmony import */ var src_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/assets/assets.service */ 97552);
/* harmony import */ var src_services_portafolio_portafolio_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/portafolio/portafolio.service */ 21013);
/* harmony import */ var src_services_WebSocket_socketio_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/WebSocket/socketio.service */ 97317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_services_Client_client_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/Client/client.service */ 64022);
/* harmony import */ var src_app_Options_table_info_transactions_table_info_transactions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/Options/table-info-transactions/table-info-transactions.component */ 22509);

 //charts 






















const _c0 = ["main"];

const _c1 = function (a0, a1) {
  return {
    "positive": a0,
    "negative": a1
  };
};

function AssetsComponent_div_5_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AssetsComponent_div_5_div_29_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r6.actionassest(product_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 20)(4, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 23)(7, "ul", 24)(8, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("src", product_r4.logo[0], _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](product_r4.base_currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](10, 5, product_r4.price, "USD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](10, _c1, product_r4.percentage >= 0, product_r4.percentage < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](13, 8, product_r4.percentage), "%");
  }
}

function AssetsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 9)(8, "div", 6)(9, "div", 7)(10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function AssetsComponent_div_5_Template_input_keyup_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9);

      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](14);

      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r8.search(_r2.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 12)(17, "div", 15)(18, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AssetsComponent_div_5_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r10.stablecoin(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AssetsComponent_div_5_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r11.stablecoin(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AssetsComponent_div_5_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r12.stablecoin(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "div", 10)(28, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, AssetsComponent_div_5_div_29_Template, 14, 13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 7, "sidebar.assets"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](15, 9, "assets.search"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r0.activebtn ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](20, 11, "assets.all"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](23, 13, "assets.crypto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](26, 15, "assets.StableCoins"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r0.products);
  }
}

function AssetsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AssetsComponent_div_6_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r13.actionassest(ctx_r13.item));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "path", 35)(11, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 37)(13, "div", 6)(14, "div", 38)(15, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AssetsComponent_div_6_Template_div_click_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r15.onButtonGroupClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AssetsComponent_div_6_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r16.changeTime("10m"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "10m");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AssetsComponent_div_6_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r17.changeTime("1h"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "1H");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AssetsComponent_div_6_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r18.changeTime("1d"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "1D");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AssetsComponent_div_6_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r19.changeTime("1w"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "1W");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AssetsComponent_div_6_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r20.changeTime("1M"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, "1M");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AssetsComponent_div_6_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r21.changeTime("3M"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, "3M");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AssetsComponent_div_6_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r22.changeTime("6M"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29, "6M");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AssetsComponent_div_6_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r23.changeTime("ALL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "div", 42)(33, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("resize", function AssetsComponent_div_6_Template_div_resize_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r24.onResize($event));
    }, false, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "div", 44)(35, "div", 11)(36, "div", 45)(37, "div", 46)(38, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AssetsComponent_div_6_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r25.Buy(ctx_r25.item));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "div", 46)(42, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AssetsComponent_div_6_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r26.Sell(ctx_r26.item));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](45, "app-table-info-transactions", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("src", ctx_r1.item.logo[0], _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", ctx_r1.item.base_currency, "/USD ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 6, ctx_r1.item.price, "USD"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](40, 9, "general.buy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](44, 11, "general.sell"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("typetable", ctx_r1.item.base_currency);
  }
}

class AssetsComponent {
  constructor(spinner, dialog, toastr, datepipe, graphservice, market, router, manage_data, assetsService, portafolioService, socket, translate, client) {
    this.spinner = spinner;
    this.dialog = dialog;
    this.toastr = toastr;
    this.datepipe = datepipe;
    this.graphservice = graphservice;
    this.market = market;
    this.router = router;
    this.manage_data = manage_data;
    this.assetsService = assetsService;
    this.portafolioService = portafolioService;
    this.socket = socket;
    this.translate = translate;
    this.client = client;
    this.products = [];
    this.allProducts = [];
    this.products_id = [];
    this.dateGraph = [];
    this.dataGraph = [];
    this.volumeGraph = [];
    this.showgraph = false;
    this.disableButton = false;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.flagAction = false;
    this.datainicial = "1h";
    this.activebtn = true;
    this.formatdate = false;
    this.myChart = null;
  }

  onResize(event) {
    if (this.myChart != undefined) {
      this.myChart.resize();
    }
  }

  changeTime(date) {
    var _this = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let timeZone;

      if (typeof Intl === 'object' && typeof Intl.DateTimeFormat === 'function') {
        timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      }

      let stop = new Date(Date.now());
      let start = new Date(Date.now());
      _this.datainicial = date;
      var granular = "";

      if (date == "10m") {
        start.setMinutes(start.getMinutes() - 10);
        granular = "MINUTE";
        _this.formatdate = false;
      }

      if (date == "1h") {
        start.setHours(start.getHours() - 1);
        granular = "MINUTE";
        _this.formatdate = false;
      }

      if (date == "1d") {
        start.setDate(start.getDate() - 1);
        granular = "FIFTEEN_MIN";
        _this.formatdate = false;
      }

      if (date == "1w") {
        start.setDate(start.getDate() - 7);
        granular = "DAY";
        _this.formatdate = true;
      }

      if (date == "1M") {
        start.setMonth(start.getMonth() - 1);
        granular = "DAY";
        _this.formatdate = true;
      }

      if (date == "3M") {
        start.setMonth(start.getMonth() - 3);
        granular = "DAY";
        _this.formatdate = true;
      }

      if (date == "6M") {
        start.setMonth(start.getMonth() - 6);
        granular = "DAY";
        _this.formatdate = true;
      }

      if (date == "ALL") {
        start.setMonth(start.getMonth() - 8);
        granular = "DAY";
        _this.formatdate = true;
      }

      if (_this.item != null) {
        if (granular != "") {
          var data = {
            ticker: _this.item.id,
            granularity: granular,
            start: start.getTime(),
            end: stop.getTime()
          };
          _this.dateGraph = [];
          _this.dataGraph = [];
          _this.volumeGraph = [];
          var datareturn = yield _this.market.GetHistoricalCandles(data).toPromise();
          var newdata = JSON.parse(datareturn.payload);
          newdata.forEach(element => {
            let date = new Date(element[0] * 1000);
            let tzDate = new Date(date.toLocaleString('en-US', {
              timeZone: timeZone
            }));

            let latest_date = _this.datepipe.transform(new Date(tzDate.getTime()), 'yyyy-MM-dd hh:mm');

            var datos = [element[3] * 0.9899, element[4] * 0.9899, element[1] * 0.9899, element[2] * 0.9899];

            _this.dateGraph.unshift(latest_date);

            _this.dataGraph.unshift(datos);

            _this.volumeGraph.unshift(element[5]);
          });

          _this.InitChart();
        }
      }
    })();
  }

  InitChart() {
    var _this2 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.myChart = echarts__WEBPACK_IMPORTED_MODULE_1__.init(document.getElementById('main'), 'dark');

      var option = _this2.graphservice.makeOption();

      if (_this2.formatdate) {
        option.xAxis[0].axisLabel.formatter = function (value) {
          return echarts__WEBPACK_IMPORTED_MODULE_1__.format.formatTime('MM-dd', value);
        };
      } else {
        option.xAxis[0].axisLabel.formatter = function (value) {
          return echarts__WEBPACK_IMPORTED_MODULE_1__.format.formatTime('hh:mm', value);
        };
      }

      if (localStorage.getItem("theme") == "dark") {
        option.backgroundColor = 'rgb(255, 255, 255)';
        option.xAxis[0].axisLabel.textStyle.color = 'rgb(0, 0, 0)';
        option.yAxis[0].axisLabel.textStyle.color = 'rgb(0, 0, 0)';
      } else {
        option.backgroundColor = 'rgb(0, 0, 0)';
        option.xAxis[0].axisLabel.textStyle.color = 'rgb(255, 255, 255)';
        option.yAxis[0].axisLabel.textStyle.color = 'rgb(255, 255, 255)';
      }

      option.tooltip.formatter = function (param) {
        var languageCountryCode = "en-US";
        let categoryNum = param[0].data[0];
        let xValue = option.xAxis[0].axisLabel.formatter(option.xAxis[0].data[categoryNum]);
        let res = xValue;
        const options = {
          style: 'currency',
          currency: 'USD'
        };
        const numberFormat = new Intl.NumberFormat(languageCountryCode, options);
        const numberFormatVolume = new Intl.NumberFormat(languageCountryCode, {});

        for (let i = param.length - 1; i >= 0; i--) {
          let seriesName = param[i].seriesName;
          let value = param[i].data;

          if (value != "-") {
            var data = param[i].data;

            if (seriesName != "Volume") {
              const openPrice = data[1];
              const closePrice = data[2];
              const lowestPrice = data[3];
              const highestPrice = data[4];
              var imageName;

              if (openPrice > closePrice) {
                imageName = '../assets/Graph/sellTradePrice.png';
              } else {
                imageName = '../assets/Graph/buyTradePrice.png';
              }

              const openPriceStr = numberFormat.format(openPrice);
              const closePriceStr = numberFormat.format(closePrice);
              const lowestPriceStr = numberFormat.format(lowestPrice);
              const highestPriceStr = numberFormat.format(highestPrice);
              let image = `<p><div style="height: 6px;width: 180px">
                    <img src="${imageName}" style="vertical-align: middle;" width="20px"/>
                    <span style="vertical-align: middle;color:white;">${"open"}:</span>
                    <span style="vertical-align: middle;color:white;float: right">${openPriceStr}</span>
                    </div>`;
              res += image + "</p><div style=\"line-height:0;\"><br></div>";
              let image1 = `<p><div style="height: 10px;width: 180px">
                    <img src="${imageName}" style="vertical-align: middle;" width="20px"/>
                    <span style="vertical-align: middle;color:white;">${"close"}:</span>
                    <span style="vertical-align: middle;color:white;float: right">${closePriceStr}</span>
                    </div>`;
              res += image1 + "</p><div style=\"line-height: 0;\"><br></div>";
              let image2 = `<p><div style="height:10px;width: 180px">
                    <img src="${imageName}" style="vertical-align: middle;" width="20px"/>
                    <span style="vertical-align: middle;color:white;">${"Low"}:</span>
                    <span style="vertical-align: middle;color:white;float: right">${lowestPriceStr}</span>
                    </div>`;
              res += image2 + "</p><div style=\"line-height:0;\"><br></div>";
              let image3 = `<p><div style="height: 10px;width: 180px">
                    <img src="${imageName}" style="vertical-align: middle;" width="20px"/>
                    <span style="vertical-align: middle;color:white;">${"High"}:</span>
                    <span style="vertical-align: middle;color:white;float: right">${highestPriceStr}</span>
                    </div>`;
              res += image3 + "</p><div style=\"line-height:0;\"><br></div>";
            } else {
              let volume = data;
              let volumeStr = numberFormatVolume.format(volume);
              let imageName = '../assets/Graph/volume.png';
              let image = `<p><div style="height: 20px;width: 180px">
                    <img src="${imageName}" style="vertical-align: middle;" width="20px"/>
                    <span style="vertical-align: middle;color:white;">${"volume"}:</span>
                    <span style="vertical-align: middle;color:white;float: right">${volumeStr}</span>
                    </div>`;
              res += image + "<div style=\"line-height:0;\"><br></div>";
            }
          }
        }

        return res;
      }, console.log("fechas " + typeof _this2.dateGraph);
      option.xAxis[0].data = _this2.dateGraph;
      option.xAxis[1].data = _this2.dateGraph;
      option.series[0].data = _this2.dataGraph;
      option.series[1].data = _this2.volumeGraph;
      option.animation = true;
      _this2.showgraph = true;

      _this2.myChart.setOption(option, true);
    })();
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    var _this3 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.spinner.show();

      _this3.client_config = yield _this3.GetClientConfig();

      _this3.SetPortfolioData();

      _this3.GetEvent();
    })();
  }

  GetEvent() {
    this.subscription.add(this.manage_data.getSubject(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_2__.EnumEventsPopUp.ChangeColor.toString()).subscribe(data => {
      if (data != null) {
        this.changeTime(this.datainicial);
      }
    }));
  }

  datosSocket(busq) {
    var _this4 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.socket.InitBlox(_this4.products_id);

      _this4.subscription.add(_this4.socket.GetDataBlox().subscribe(data => {
        try {
          if (typeof data === 'string') {
            _this4.data = JSON.parse(data);

            _this4.SetValues(_this4.data);
          } else {// console.warn("wrong data", data);
          }
        } catch (error) {
          console.error(error);
        }
      }));
    })();
  }

  GetDataBloxOrder() {
    var _this5 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.subscription.add(_this5.socket.GetDataBloxOrder().subscribe(data => {
        if (typeof data != 'object' && data != "Hey Dude!") {
          if (JSON.parse(data).success == null || JSON.parse(data).success == undefined) {
            _this5.ResponseEvent(JSON.parse(data));
          }
        }
      }));
    })();
  }

  SetValues(data) {
    let aux = this.products.find(x => x.id === data.product_id);

    if (aux) {
      if (aux.price != data.mid_price) {
        aux.price = data.mid_price;
        var residuo = aux.price - aux.open;
        aux.percentage = residuo * 100 / aux.price;
      }

      if (aux.bid != data.best_bid) {
        aux.bid = data.best_bid;
      }

      if (aux.ask != data.best_ask) {
        aux.ask = data.best_ask;
      }
    }

    aux = this.allProducts.find(x => x.id === data.product_id);

    if (aux) {
      if (aux.price != data.mid_price) {
        aux.price = data.mid_price;
        var residuo = aux.price - aux.open;
        aux.percentage = residuo * 100 / aux.price;
      }
    }
  }

  SetPortfolioData() {
    var _this6 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.SetList();
      yield _this6.datosSocket('');
      yield _this6.GetDataBloxOrder();

      _this6.spinner.hide();
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
        break;

      default:
        break;
    }
  }

  SetList() {
    var _this7 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.products_id = [];
      let logosResponse = yield _this7.GetAllLogos();
      let productResponse = yield _this7.GetAllProducts();

      if (productResponse) {
        productResponse = productResponse.filter(x => x.quote_currency === "USD" && x.trading_disabled === false);
        productResponse = productResponse.map(x => ({ ...x,
          logo: logosResponse.filter(l => l.symbol === x.base_currency).map(x => x.logo),
          price: 0,
          ask: 0,
          bid: 0,
          percentage: 0
        }));
        productResponse = productResponse.sort((a, b) => {
          if (a.base_currency > b.base_currency) return 1;else return -1;
        });
        yield _this7.GetOpenData(productResponse);
        _this7.products = productResponse;
        _this7.allProducts = JSON.parse(JSON.stringify(productResponse));
        _this7.products_id = productResponse.map(x => x.id);
      }
    })();
  }

  GetOpenData(productResponse) {
    var _this8 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield Promise.all(productResponse.map( /*#__PURE__*/function () {
        var _ref = (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (item) {
          let response = yield _this8.GetMarketProducts(item.id).then();

          if (response.success) {
            let data = JSON.parse(response.payload);
            item.open = data.open;
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()));
    })();
  }

  GetMarketProducts(asset) {
    var _this9 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        ticker: asset
      };
      return yield _this9.market.GetProduct24hrStats(data).toPromise();
    })();
  }

  GetAllProducts() {
    var _this10 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = yield _this10.portafolioService.GetAllProducts().toPromise();
      return data;
    })();
  }

  GetAllLogos() {
    var _this11 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = yield _this11.assetsService.GetAllLogosURL().toPromise();
      return data;
    })();
  }

  GetClientConfig() {
    var _this12 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        _this12.subscription.add(_this12.client.GetClientConfig().subscribe(data => {
          resolve(data);
        }, err => {
          console.log("Error GetClientConfig:", err);
          resolve(null);
        }));
      });
    })();
  }

  search(valueb) {
    let lista = this.allProducts.filter(x => x.base_currency.toLowerCase().startsWith(valueb.toLowerCase()));
    this.products = lista;
  }

  stablecoin(stable) {
    this.activebtn = false;
    let lista = this.allProducts.filter(x => x.fx_stablecoin === stable);
    this.products = lista;
  }

  Buy(product) {
    this.disableButton = true;
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true; // dialogConfig.height = "20rem";

    dialogConfig.maxWidth = '100vw';
    dialogConfig.width = "auto";
    const data = {
      logo: product.logo[0],
      symbol: product.base_currency,
      price: product.price,
      ask: product.ask,
      bid: product.bid,
      action: "buy"
    };

    if (this.client_config.id_verified) {
      this.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_2__.EnumEventsPopUp.buy_sell.toString(), data);
      let dialog = this.dialog.open(src_app_BuyAndSell_buy_sell_buy_sell_component__WEBPACK_IMPORTED_MODULE_3__.BuySellComponent, dialogConfig);
      this.subscription.add(dialog.afterClosed().subscribe(() => {
        this.disableButton = false;
      }));
    } else {
      this.ConfirmValidateID();
    }
  }

  Sell(product) {
    this.disableButton = true;
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true; // dialogConfig.height = "20rem";

    dialogConfig.maxWidth = '100vw';
    dialogConfig.width = "auto";
    const data = {
      logo: product.logo[0],
      symbol: product.base_currency,
      price: product.price,
      ask: product.ask,
      bid: product.bid,
      action: "sell"
    };

    if (this.client_config.id_verified) {
      this.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_2__.EnumEventsPopUp.buy_sell.toString(), data);
      let dialog = this.dialog.open(src_app_BuyAndSell_buy_sell_buy_sell_component__WEBPACK_IMPORTED_MODULE_3__.BuySellComponent, dialogConfig);
      this.subscription.add(dialog.afterClosed().subscribe(() => {
        this.disableButton = false;
      }));
    } else {
      this.ConfirmValidateID();
    }
  }

  actionassest(product) {
    this.flagAction = !this.flagAction;
    this.item = product;

    if (this.myChart === undefined) {
      this.changeTime(this.datainicial);
    } else {
      this.myChart.clear();
    }

    if (this.flagAction) {
      // Hack: Scrolls to top of Page after page view initialized
      let top = document.getElementById('top');

      if (top !== null) {
        console.log("show coin...");
        top.scrollIntoView();
        top = null;
      }
    }
  } //************************************************************************************
  //Confirm Validate ID
  //************************************************************************************


  ConfirmValidateID() {
    var _this13 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogConfig();
      dialogConfig.autoFocus = false;
      dialogConfig.disableClose = true; // dialogConfig.height = "20rem";

      dialogConfig.width = "40rem";
      var data = {
        title: yield _this13.translate.get("Errores.mustValidateID").toPromise(),
        icon: 'quest',
        conten: yield _this13.translate.get("Errores.wantValidateID").toPromise()
      };

      _this13.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_2__.EnumEventsPopUp.ConfirmAction.toString(), data);

      let dialogRef = _this13.dialog.open(src_app_PopUp_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmationComponent, dialogConfig);

      _this13.subscription.add(dialogRef.afterClosed().subscribe(result => {
        if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_5__.EnumConfirmation.si.toString()) {
          _this13.router.navigate(['/vouched']);
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
  }

}

AssetsComponent.ɵfac = function AssetsComponent_Factory(t) {
  return new (t || AssetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_services_Graph_graphAssets_service__WEBPACK_IMPORTED_MODULE_6__.GraphAssetsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_services_Market_market_service__WEBPACK_IMPORTED_MODULE_7__.MarketService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_8__.ManageDataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_9__.AssetsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_services_portafolio_portafolio_service__WEBPACK_IMPORTED_MODULE_10__.PortafolioService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_services_WebSocket_socketio_service__WEBPACK_IMPORTED_MODULE_11__.SocketioService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_services_Client_client_service__WEBPACK_IMPORTED_MODULE_12__.ClientService));
};

AssetsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: AssetsComponent,
  selectors: [["app-assets"]],
  viewQuery: function AssetsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.myChart = _t.first);
    }
  },
  hostBindings: function AssetsComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("resize", function AssetsComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresolveWindow"]);
    }
  },
  decls: 7,
  vars: 6,
  consts: [["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "line-scale-pulse-out", 3, "fullScreen"], [2, "color", "white"], ["id", "top"], [4, "ngIf"], ["style", " margin-top: 1%;", 4, "ngIf"], [1, "container", "text-center", "shadow", 2, "margin-top", "1%"], [1, "row"], [1, "col"], [1, "styletitel"], [1, "container", "shadow", 2, "margin-top", "1%"], [1, ""], [1, "row", 2, "margin-top", "1%"], [1, "col-md-6", "col-sm-12", "mb-2"], ["type", "search", "id", "form1", 1, "form-control", "search", 3, "placeholder", "keyup"], ["searchv", ""], ["role", "group", "aria-label", "Small button group", 1, "btn-group", 2, "width", "100%"], ["type", "button", 1, "btn", "btn-outline-secondary", "texbot", 3, "ngClass", "click"], ["type", "button", 1, "btn", "btn-outline-secondary", "texbot", 3, "click"], ["class", "row asset-list-item ", "style", "border-radius: 20px; cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [1, "row", "asset-list-item", 2, "border-radius", "20px", "cursor", "pointer", 3, "click"], [1, "col-xl-4", "col-sm-4", "col-3", "text-center"], [1, "itemintr", "my-auto", 3, "src"], [1, "texItem", 2, "cursor", "pointer"], [1, "col-xl-4", "col-sm-4", "col-6", "text-end", 2, "cursor", "pointer"], [1, "listpoint", "mr-3", "my-auto"], [1, "texItem"], [1, "", 3, "ngClass"], [2, "margin-top", "1%"], [1, "container", "shadow"], [1, "row", "text-center"], [1, "col", "my-3"], [3, "src"], [1, "label", "label-default", "titleinfo"], [1, "ibackcolor", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "35", "height", "35", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-chevron-double-left"], ["fill-rule", "evenodd", "d", "M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"], ["fill-rule", "evenodd", "d", "M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"], [1, "mt-1"], [1, "col", "text-center"], ["role", "group", "aria-label", "Basic mixed styles example", 1, "btn-group", 3, "click"], ["type", "button ", 1, "btn", "btn-outline-secondary", "butongrus", 3, "click"], ["type", "button ", 1, "btn", "btn-outline-secondary", "butongrus", "active", 3, "click"], [1, "row", 2, "margin-top", "8px", "margin-bottom", "40px"], ["id", "main", 2, "width", "100%", "height", "40vh", 3, "resize"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-xl-6", "col-md-6", "col-sm-6", "text-center", "mt-sm-3", "mb-sm-3", "mt-1", "mb-1"], ["type", "button", 1, "btn", "btn-outline-success", "texbot", "active", 3, "click"], ["type", "button", 1, "btn", "btn-outline-danger", "texbot", 3, "click"], [3, "typetable"]],
  template: function AssetsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ngx-spinner", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, AssetsComponent_div_5_Template, 30, 17, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, AssetsComponent_div_6_Template, 46, 13, "div", 4);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fullScreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 4, "general.cargando"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.flagAction);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.flagAction);
    }
  },
  dependencies: [ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, src_app_Options_table_info_transactions_table_info_transactions_component__WEBPACK_IMPORTED_MODULE_13__.TableInfoTransactionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.CurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe],
  styles: [".currtext[_ngcontent-%COMP%] {\n  color: var(--count-color);\n  margin-top: 3%;\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  background-color: #d5e0d8;\n}\n\n.assets-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  margin: 1rem;\n  border-radius: 0.6rem;\n  background: #cecccc;\n  color: rgb(182, 0, 0);\n}\n\n.asset-list-item[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: center;\n  height: 60px;\n  background: var(--bg-item-assets);\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.5rem;\n  min-width: 1rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-top: 2rem;\n  background-size: 10px;\n  color: #837272;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n\nfigure[_ngcontent-%COMP%] {\n  margin-bottom: 0.2rem;\n}\n\nfigure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 5rem;\n}\n\nh2.title[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n  font-size: 1rem;\n  color: #4D4D4D;\n}\n\nspan.amount[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #000000;\n  font-size: 2rem;\n  font-weight: bold;\n  border-radius: 1.5rem;\n  padding: 5px 2rem;\n  z-index: 2;\n}\n\n.asset-container[_ngcontent-%COMP%] {\n  background-color: #FAFAFA;\n  border-radius: 2rem 2rem 0 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1rem;\n  padding-top: 3rem;\n  position: relative;\n  top: -1.5rem;\n  width: 100%;\n  z-index: 1;\n  height: 100%;\n  font-size: 0.8rem;\n  justify-content: flex-start;\n}\n\n.buy-sell-message[_ngcontent-%COMP%] {\n  margin: 1rem;\n  color: #4D4D4D;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.buy-sell-message.green[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.buy-sell-message.red[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.buy-sell-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 0.4rem;\n}\n\n.send-button[_ngcontent-%COMP%] {\n  margin: 1rem auto;\n}\n\n.summary[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: solid 1px #2bba4a;\n  border-radius: 1rem;\n}\n\n.summary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3rem;\n}\n\n.summary-item[_ngcontent-%COMP%] {\n  color: #000000;\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.listpoint[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-right: 0px;\n}\n\n*[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: rgb(26, 26, 26) rgba(255, 166, 0, 0);\n}\n\n\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(255, 166, 0, 0);\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--table-scroll);\n  border-radius: 20px;\n  border: 3px solid var(--table-scroll);\n}\n\n.texItem[_ngcontent-%COMP%] {\n  font-size: medium;\n  color: rgb(136, 135, 135);\n}\n\n.styletitel[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  color: #2bba4a;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.textprice[_ngcontent-%COMP%] {\n  color: black;\n  margin-top: 20px;\n}\n\n.butongrus[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  padding: 5px;\n  font-size: small;\n}\n\n.texbot[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 100%;\n}\n\n.itemintr[_ngcontent-%COMP%] {\n  width: 40px;\n  margin-top: -15px;\n}\n\n@media (min-width: 656px) {\n  .texbot[_ngcontent-%COMP%] {\n    font-size: 13px;\n    width: 100%;\n  }\n  .listpoint[_ngcontent-%COMP%] {\n    list-style: none;\n    margin-right: 3vw;\n  }\n}\n\n@media (min-width: 1046px) {\n  .listpoint[_ngcontent-%COMP%] {\n    list-style: none;\n    margin-right: 150px;\n  }\n}\n\n.positive[_ngcontent-%COMP%] {\n  color: rgb(19, 224, 0);\n  font-size: 15px;\n}\n\n.negative[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 15px;\n}\n\n#chart[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 35px auto;\n  color: black;\n}\n\n.whidbu[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  height: 21px;\n  padding: 3px 3px 3px 3px;\n  color: var(--drowdown-text-color);\n  background-color: var(--drowdown-bg);\n  border: 1px solid var(--drowdown-brd);\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--bs-drown-color);\n}\n\n.titleinfo[_ngcontent-%COMP%] {\n  color: var(--count-color);\n}\n\n.ibackcolor[_ngcontent-%COMP%] {\n  margin-top: -52px;\n  color: var(--ibackcolor);\n  cursor: pointer;\n  width: 40px;\n}\n\n.ibackcolor[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 255, 170);\n}\n\n.btn-outline-box[_ngcontent-%COMP%] {\n  --bs-btn-color: var(--bs-btn-color-box);\n  --bs-btn-border-color: var(--bs-btn-border-color-box);\n  --bs-btn-hover-color: var(--bs-btn-hover-color-box);\n  --bs-btn-hover-bg: var(--bs-btn-hover-bg-box);\n  --bs-btn-hover-border-color: var(--bs-btn-hover-border-color-box);\n  --bs-btn-focus-shadow-rgb: var(--bs-btn-focus-shadow-rgb-box);\n  --bs-btn-active-color: var(--bs-btn-active-color-box);\n  --bs-btn-active-bg: var(--bs-btn-active-bg-box);\n  --bs-btn-active-border-color: var(--bs-btn-active-border-color-box);\n  --bs-btn-active-shadow: var(--bs-btn-active-shadow-box);\n  --bs-btn-disabled-color: var(--bs-btn-disabled-color-box);\n  --bs-btn-disabled-bg: var(--bs-btn-disabled-bg-box);\n  --bs-btn-disabled-border-color: var(--bs-btn-disabled-border-color-box);\n  --bs-gradient: var(--bs-gradient-box);\n}\n\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n\n.example-header[_ngcontent-%COMP%] {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 200px;\n}\n\n.mat-column-id[_ngcontent-%COMP%] {\n  flex: 0 0 50px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  background: var(--table-color-bg);\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mat-paginator[_ngcontent-%COMP%] {\n  background: var(--bg-table-footer);\n  color: var(--tex-pg-table);\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: var(--header-text-table);\n  font-weight: bold;\n  background-color: --table-header-bg;\n  font-size: 8px;\n}\n\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%] {\n  color: var(--color-text-table);\n  --bs-table-border-color: var(--margin-table);\n}\n\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: var(--table-header-bg);\n}\n\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  box-shadow: 0 rem 0rem var(--shadown-color) !important;\n}\n\nmat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\n  border-bottom-color: var(--border-inter-table);\n}\n\n.mat-header-row[_ngcontent-%COMP%] {\n  background: var(--bg-table-footer);\n}\n\n.mat-input-element[_ngcontent-%COMP%] {\n  color: var(--drowdown-text-color);\n  caret-color: var(--drowdown-text-color);\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.search[_ngcontent-%COMP%] {\n  min-width: 90px;\n  min-height: 30px;\n  margin-top: -1px;\n}\n\n@media (min-width: 656px) {\n  .mat-cell[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .mat-header-cell[_ngcontent-%COMP%] {\n    color: var(--header-text-table);\n    font-weight: bold;\n    background-color: --table-header-bg;\n    font-size: 12px;\n  }\n  .search[_ngcontent-%COMP%] {\n    min-width: 90px;\n    min-height: 36px;\n    margin-top: -1px;\n  }\n}\n\n.heigthscroll[_ngcontent-%COMP%] {\n  height: 60vh;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.scroll[_ngcontent-%COMP%] {\n  max-height: 66vh;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n@media (min-width: 400px) {\n  .heigthscroll[_ngcontent-%COMP%] {\n    height: 66vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n  .scroll[_ngcontent-%COMP%] {\n    max-height: 71vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n}\n\n@media (min-width: 1400px) {\n  .heigthscroll[_ngcontent-%COMP%] {\n    height: 74vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n  .scroll[_ngcontent-%COMP%] {\n    max-height: 76vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQUVGOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBRUY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUlFO0VBQ0UsWUFBQTtBQUZKOztBQU1BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUhGOztBQU1BO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhGOztBQUtFO0VBQ0UsWUFBQTtBQUhKOztBQU1FO0VBQ0UsVUFBQTtBQUpKOztBQU9FO0VBQ0Usb0JBQUE7QUFMSjs7QUFTQTtFQUNFLGlCQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVFFO0VBQ0UsV0FBQTtBQU5KOztBQVVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFQRjs7QUFVQTtFQUNFLGVBQUE7QUFQRjs7QUFVQTtFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7QUFQRDs7QUFVQTtFQUNFLHFCQUFBO0VBQ0EscURBQUE7QUFQRjs7QUFVQSxzQ0FBQTs7QUFDQTtFQUNFLFdBQUE7QUFQRjs7QUFVQTtFQUNFLGdDQUFBO0FBUEY7O0FBVUE7RUFDRSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUFQRjs7QUFXQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUFSRjs7QUFXQTtFQUNFLGNBQUE7RUFDRixjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBUkE7O0FBV0E7RUFDQyxZQUFBO0VBQ0MsZ0JBQUE7QUFSRjs7QUFXQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFXQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBUkY7O0FBVUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFQRjs7QUFZQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFdBQUE7RUFURjtFQVlBO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQVZGO0FBQ0Y7O0FBYUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7RUFYRjtBQUNGOztBQWNBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FBWkY7O0FBZ0JBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFiRjs7QUFpQkE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQWRGOztBQWdCQTtFQUNFLGNBQUE7QUFiRjs7QUFpQkE7RUFDRSx5REFBQTtBQWRGOztBQWlCQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtBQWRGOztBQWtDQTtFQUNFLDRCQUFBO0FBL0JGOztBQWtDQTtFQUNFLHlCQUFBO0FBL0JGOztBQWtDQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQS9CQTs7QUFrQ0E7RUFDRSx1QkFBQTtBQS9CRjs7QUFrQ0E7RUFDRSx1Q0FBQTtFQUNBLHFEQUFBO0VBQ0EsbURBQUE7RUFDQSw2Q0FBQTtFQUNBLGlFQUFBO0VBQ0EsNkRBQUE7RUFDQSxxREFBQTtFQUNBLCtDQUFBO0VBQ0EsbUVBQUE7RUFDQSx1REFBQTtFQUNBLHlEQUFBO0VBQ0EsbURBQUE7RUFDQSx1RUFBQTtFQUNBLHFDQUFBO0FBL0JGOztBQWtDQTtFQUVFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBaENGOztBQW1DQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFoQ0Y7O0FBbUNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFoQ0Y7O0FBdUNBO0VBQ0ksY0FBQTtBQXBDSjs7QUF1Q0E7RUFDRSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQXBDRjs7QUF5Q0E7RUFDRSxrQ0FBQTtFQUNBLDBCQUFBO0FBdENGOztBQTBDQTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7QUF2Q0Y7O0FBMENBO0VBQ0UsOEJBQUE7RUFDQSw0Q0FBQTtBQXZDRjs7QUE0Q0E7RUFDRSw2QkFBQTtBQXpDRjs7QUE0Q0E7RUFFRSxzREFBQTtBQTFDRjs7QUE2Q0E7RUFDRSw4Q0FBQTtBQTFDRjs7QUE2Q0E7RUFDQSxrQ0FBQTtBQTFDQTs7QUE2Q0E7RUFFRSxpQ0FBQTtFQUNBLHVDQUFBO0FBM0NGOztBQThDQTtFQUNFLGVBQUE7QUEzQ0Y7O0FBNkNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUExQ0Y7O0FBNENBO0VBRUU7SUFDSSxlQUFBO0VBMUNKO0VBNkNBO0lBQ0ksK0JBQUE7SUFDQSxpQkFBQTtJQUNBLG1DQUFBO0lBQ0EsZUFBQTtFQTNDSjtFQThDQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBNUNGO0FBQ0Y7O0FBaURBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUEvQ0Y7O0FBa0RBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBL0NGOztBQWtEQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUEvQ0Y7RUFrREE7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUFoREY7QUFDRjs7QUFtREE7RUFDRTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtJQUNDLGtCQUFBO0VBakRIO0VBb0RBO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VBbERGO0FBQ0YiLCJmaWxlIjoiYXNzZXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jdXJydGV4dHtcclxuICBjb2xvcjogIHZhcigtLWNvdW50LWNvbG9yKTtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLnNlYXJjaC1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWUwZDg7XHJcbn1cclxuLmFzc2V0cy10YWJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjZyZW07XHJcbiAgYmFja2dyb3VuZDogI2NlY2NjYztcclxuICBjb2xvcjogcmdiKDE4MiwgMCwgMCk7XHJcbn1cclxuXHJcbi5hc3NldC1saXN0LWl0ZW0ge1xyXG4gIG1hcmdpbjogMC41ZW0gMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctaXRlbS1hc3NldHMpO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XHJcbiAgbWluLXdpZHRoOiAxcmVtO1xyXG59XHJcblxyXG4uYXNzZXRzLWVhc3ktcGFnZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogIzgzNzI3MjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5maWd1cmUge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcclxuICBcclxuICBpbWd7XHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5oMi50aXRsZSB7XHJcbiAgbWFyZ2luOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiAjNEQ0RDREXHJcbn1cclxuXHJcbnNwYW4uYW1vdW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgcGFkZGluZzogNXB4IDJyZW07XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmFzc2V0LWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xLjVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uYnV5LXNlbGwtbWVzc2FnZSB7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIGNvbG9yOiAjNEQ0RDREO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJi5ncmVlbiB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgfVxyXG5cclxuICAmLnJlZCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zZW5kLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbn1cclxuXHJcbi5zdW1tYXJ5IHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICMyYmJhNGE7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAzcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnN1bW1hcnktaXRlbSB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b3RhbCB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4ubGlzdHBvaW50IHtcclxuIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG5cclxuKiB7XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG4gIHNjcm9sbGJhci1jb2xvcjogcmdiKDI2LCAyNiwgMjYpIHJnYmEoMjU1LCAxNjYsIDAsIDApO1xyXG59XHJcblxyXG4vKiBXb3JrcyBvbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkgKi9cclxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMnB4O1xyXG59XHJcblxyXG4qOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE2NiwgMCwgMCk7XHJcbn1cclxuXHJcbio6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1zY3JvbGwpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tdGFibGUtc2Nyb2xsKTtcclxuICBcclxufVxyXG5cclxuLnRleEl0ZW17XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgY29sb3I6ICByZ2IoMTM2LCAxMzUsIDEzNSk7XHJcbn1cclxuXHJcbi5zdHlsZXRpdGVse1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG5jb2xvcjogIzJiYmE0YTtcclxuZm9udC1zaXplOiAyMHB4O1xyXG5mb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4udGV4dHByaWNle1xyXG4gY29sb3I6IGJsYWNrOyBcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYnV0b25ncnVze1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLnRleGJvdHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLml0ZW1pbnRye1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NTZweCkge1xyXG4gIC50ZXhib3R7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5saXN0cG9pbnQge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogM3Z3O1xyXG4gICB9XHJcblxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDQ2cHgpIHtcclxuICAubGlzdHBvaW50IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xyXG4gICB9XHJcbn1cclxuXHJcbi5wb3NpdGl2ZSB7XHJcbiAgY29sb3I6IHJnYigxOSwgMjI0LCAwKTtcclxuICBmb250LXNpemU6IDE1cHg7IFxyXG5cclxufVxyXG5cclxuLm5lZ2F0aXZlIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTVweDsgXHJcblxyXG59XHJcblxyXG4jY2hhcnQge1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIG1hcmdpbjogMzVweCBhdXRvO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4ud2hpZGJ1e1xyXG4gIGZvbnQtc2l6ZTogOHB4O1xyXG4gXHJcbn1cclxuXHJcbi5zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgLjVyZW0gMnJlbSB2YXIoLS1zaGFkb3duLWNvbG9yKSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGhlaWdodDogMjFweDtcclxuICBwYWRkaW5nOiAzcHggM3B4IDNweCAzcHg7XHJcbiAgY29sb3I6IHZhcigtLWRyb3dkb3duLXRleHQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRyb3dkb3duLWJnKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kcm93ZG93bi1icmQpOyAgICBcclxufVxyXG5cclxuLy8gLmJ0bi1saWdodCB7XHJcbi8vICAgLS1icy1idG4tY29sb3I6IHZhcigtLWJvb3Rvbi1hc3NldHMpO1xyXG4vLyAgIC0tYnMtYnRuLWJnOiB2YXIoLS1ib290b24tYXNzZXRzLWJnKTtcclxuLy8gICAtLWJzLWJ0bi1ib3JkZXItY29sb3I6dmFyKC0tYm9vdG9uLWFzc2V0cy1iZyk7XHJcbi8vICAgLS1icy1idG4taG92ZXItY29sb3I6IHZhcigtLWJvb3Rvbi1hc3NldHMpO1xyXG4vLyAgIC0tYnMtYnRuLWhvdmVyLWJnOiB2YXIoLS1ib290b24tYXNzZXRzLWJnLWhvdmVyKTtcclxuLy8gICAtLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3I6IHZhcigtLWJvb3Rvbi1hc3NldHMtYnItaG92ZXIpO1xyXG4vLyAgIC0tYnMtYnRuLWZvY3VzLXNoYWRvdy1yZ2I6IDIxMSwyMTIsMjEzO1xyXG4vLyAgIC0tYnMtYnRuLWFjdGl2ZS1jb2xvcjogdmFyKC0tYm9vdG9uLWFzc2V0cyk7XHJcbi8vICAgLS1icy1idG4tYWN0aXZlLWJnOiAjYzZjN2M4O1xyXG4vLyAgIC0tYnMtYnRuLWFjdGl2ZS1ib3JkZXItY29sb3I6ICNiYWJiYmM7XHJcbi8vICAgLS1icy1idG4tYWN0aXZlLXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4vLyAgIC0tYnMtYnRuLWRpc2FibGVkLWNvbG9yOiB2YXIoLS1ib290b24tYXNzZXRzKTtcclxuLy8gICAtLWJzLWJ0bi1kaXNhYmxlZC1iZzogdmFyKC0tYm9vdG9uLWFzc2V0cy1iZyk7XHJcbi8vICAgLS1icy1idG4tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB2YXIoLS1ib290b24tYXNzZXRzLWJnKTtcclxuLy8gfVxyXG5cclxuLnN1YnRpdGxle1xyXG4gIGNvbG9yOiB2YXIoLS1icy1kcm93bi1jb2xvcik7XHJcbn1cclxuXHJcbi50aXRsZWluZm97XHJcbiAgY29sb3I6IHZhcigtLWNvdW50LWNvbG9yKTtcclxufVxyXG5cclxuLmliYWNrY29sb3J7XHJcbm1hcmdpbi10b3A6IC01MnB4O1xyXG5jb2xvcjogdmFyKC0taWJhY2tjb2xvcik7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxud2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi5pYmFja2NvbG9yOmhvdmVye1xyXG4gIGNvbG9yOiByZ2IoMCwgMjU1LCAxNzApO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtYm94IHtcclxuICAtLWJzLWJ0bi1jb2xvcjogIHZhcigtLWJzLWJ0bi1jb2xvci1ib3gpO1xyXG4gIC0tYnMtYnRuLWJvcmRlci1jb2xvcjogIHZhcigtLWJzLWJ0bi1ib3JkZXItY29sb3ItYm94KTtcclxuICAtLWJzLWJ0bi1ob3Zlci1jb2xvcjogIHZhcigtLWJzLWJ0bi1ob3Zlci1jb2xvci1ib3gpO1xyXG4gIC0tYnMtYnRuLWhvdmVyLWJnOiAgdmFyKC0tYnMtYnRuLWhvdmVyLWJnLWJveCk7XHJcbiAgLS1icy1idG4taG92ZXItYm9yZGVyLWNvbG9yOiAgdmFyKC0tYnMtYnRuLWhvdmVyLWJvcmRlci1jb2xvci1ib3gpO1xyXG4gIC0tYnMtYnRuLWZvY3VzLXNoYWRvdy1yZ2I6ICB2YXIoLS1icy1idG4tZm9jdXMtc2hhZG93LXJnYi1ib3gpO1xyXG4gIC0tYnMtYnRuLWFjdGl2ZS1jb2xvcjogIHZhcigtLWJzLWJ0bi1hY3RpdmUtY29sb3ItYm94KTtcclxuICAtLWJzLWJ0bi1hY3RpdmUtYmc6ICB2YXIoLS1icy1idG4tYWN0aXZlLWJnLWJveCk7XHJcbiAgLS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjogIHZhcigtLWJzLWJ0bi1hY3RpdmUtYm9yZGVyLWNvbG9yLWJveCk7XHJcbiAgLS1icy1idG4tYWN0aXZlLXNoYWRvdzogIHZhcigtLWJzLWJ0bi1hY3RpdmUtc2hhZG93LWJveCk7XHJcbiAgLS1icy1idG4tZGlzYWJsZWQtY29sb3I6ICB2YXIoLS1icy1idG4tZGlzYWJsZWQtY29sb3ItYm94KTtcclxuICAtLWJzLWJ0bi1kaXNhYmxlZC1iZzogdmFyKC0tYnMtYnRuLWRpc2FibGVkLWJnLWJveCk7XHJcbiAgLS1icy1idG4tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAgdmFyKC0tYnMtYnRuLWRpc2FibGVkLWJvcmRlci1jb2xvci1ib3gpO1xyXG4gIC0tYnMtZ3JhZGllbnQ6ICB2YXIoLS1icy1ncmFkaWVudC1ib3gpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDY0cHg7XHJcbiAgcGFkZGluZzogOHB4IDI0cHggMDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLm1hdC1jb2x1bW4taWQge1xyXG4gICAgZmxleDogMCAwIDUwcHg7XHJcbn1cclxuXHJcbi5tYXQtdGFibGUge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXRhYmxlLWNvbG9yLWJnKTsgIFxyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gXHJcbn1cclxuXHJcblxyXG4ubWF0LXBhZ2luYXRvciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGFibGUtZm9vdGVyKTtcclxuICBjb2xvcjogdmFyKC0tdGV4LXBnLXRhYmxlKTtcclxuICBcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0LXRhYmxlKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAoLS10YWJsZS1oZWFkZXItYmcpO1xyXG4gIGZvbnQtc2l6ZTogOHB4O1xyXG59XHJcblxyXG4ubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXRhYmxlKTtcclxuICAtLWJzLXRhYmxlLWJvcmRlci1jb2xvcjogdmFyKC0tbWFyZ2luLXRhYmxlKTtcclxufVxyXG5cclxuXHJcblxyXG4ubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcclxuICBjb2xvcjogdmFyKC0tdGFibGUtaGVhZGVyLWJnKTtcclxufVxyXG5cclxuLm1hdC1lbGV2YXRpb24tejgge1xyXG4gIC8vIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiKDI1NSAwIDAgLyAyMCUpLCAwcHggOHB4IDEwcHggMXB4IHJnYigyMSAyNTUgMCAvIDExJSksIDBweCAzcHggMTRweCAycHggcmdiKDI1NSAwIDApO1xyXG4gIGJveC1zaGFkb3c6IDAgcmVtIDByZW0gdmFyKC0tc2hhZG93bi1jb2xvcikhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LWZvb3Rlci1yb3csIHRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYm9yZGVyLWludGVyLXRhYmxlKTtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItcm93e1xyXG5iYWNrZ3JvdW5kOiB2YXIoLS1iZy10YWJsZS1mb290ZXIpO1xyXG59XHJcblxyXG4ubWF0LWlucHV0LWVsZW1lbnQge1xyXG5cclxuICBjb2xvcjogdmFyKC0tZHJvd2Rvd24tdGV4dC1jb2xvcik7XHJcbiAgY2FyZXQtY29sb3I6IHZhcigtLWRyb3dkb3duLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG4ubWF0LWNlbGx7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5zZWFyY2h7XHJcbiAgbWluLXdpZHRoOiA5MHB4OyAgIFxyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTFweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjU2cHgpIHtcclxuXHJcbiAgLm1hdC1jZWxse1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0LXRhYmxlKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICgtLXRhYmxlLWhlYWRlci1iZyk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5zZWFyY2h7XHJcbiAgICBtaW4td2lkdGg6IDkwcHg7ICAgXHJcbiAgICBtaW4taGVpZ2h0OiAzNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICB9XHJcbiAgIFxyXG4gIFxyXG59XHJcblxyXG4uaGVpZ3Roc2Nyb2xse1xyXG4gIGhlaWdodDogNjB2aDtcclxuICBvdmVyZmxvdy14OmhpZGRlbjsgXHJcbiAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbn1cclxuXHJcbi5zY3JvbGx7XHJcbiAgbWF4LWhlaWdodDo2NnZoO1xyXG4gIG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcclxuICAuaGVpZ3Roc2Nyb2xse1xyXG4gICAgaGVpZ2h0OiA2NnZoO1xyXG4gICAgb3ZlcmZsb3cteDpoaWRkZW47IFxyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgfVxyXG4gIFxyXG4gIC5zY3JvbGx7XHJcbiAgICBtYXgtaGVpZ2h0Ojcxdmg7XHJcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gIC5oZWlndGhzY3JvbGx7XHJcbiAgICBoZWlnaHQ6IDc0dmg7XHJcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICB9XHJcblxyXG4gIC5zY3JvbGx7XHJcbiAgICBtYXgtaGVpZ2h0Ojc2dmg7XHJcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gIH1cclxuICBcclxufSJdfQ== */"]
});

/***/ }),

/***/ 58462:
/*!**************************************************!*\
  !*** ./src/app/Principal/home/home.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_services_portafolio_portafolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/portafolio/portafolio.service */ 21013);
/* harmony import */ var src_services_Client_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/Client/client.service */ 64022);
/* harmony import */ var src_services_WebSocket_socketio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/WebSocket/socketio.service */ 97317);
/* harmony import */ var src_services_TestFounds_test_founds_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/TestFounds/test-founds.service */ 77250);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_Options_table_info_transactions_table_info_transactions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Options/table-info-transactions/table-info-transactions.component */ 22509);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);














function HomeComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HomeComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);

      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);

      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.deleteaccount(_r1.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 18)(2, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

class HomeComponent {
  constructor(toastr, assets, client, websocket, testservice, spinner) {
    this.toastr = toastr;
    this.assets = assets;
    this.client = client;
    this.websocket = websocket;
    this.testservice = testservice;
    this.spinner = spinner;
    this.langs = [];
    this.portfolio_name = "";
    this.userName = "";
    this.totalCurrentBalance = 0;
    this.show_data = [];
    this.page = 1;
    this.pageSize = 20;
    this.validating = false;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
    this.showdeleteaccount = false;
  }

  ngOnInit() {
    this.InitHome();
    this.GetDataBloxOrder();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteaccount(data) {
    var _this = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var del = {
        "code": data,
        "notes": "Yeah"
      };
      var datareturn = yield _this.testservice.deleteaccount(del).toPromise();
      console.log("esto devuelve " + JSON.stringify(datareturn));
    })();
  } //===========================================================================
  //Socket Notificaciones
  //===========================================================================


  GetDataBloxOrder() {
    var _this2 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.subscription.add(_this2.websocket.GetDataBloxOrder().subscribe(data => {
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
        console.log("Llego notificacion Socket");
        setTimeout( /*#__PURE__*/(0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          let portfolioBalancesResponse = yield _this3.GetPortfolioBalances();

          if (!portfolioBalancesResponse) {
            _this3.ShowError("Error to get client portafolio balances");

            return;
          }

          _this3.usd_qty = portfolioBalancesResponse.find(element => element.base_currency == 'USD').qty;
        }), 500);
        break;

      default:
        break;
    }
  } //===========================================================================
  //===========================================================================


  InitHome() {
    var _this4 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this4.spinner.show(); //===========================================================================
        //Get client config
        //===========================================================================


        let getClientConfigResponse = yield _this4.GetClientConfig();

        if (!getClientConfigResponse) {
          _this4.ShowError("Error to get client config");

          return;
        } // console.log("getClientConfigResponse:", getClientConfigResponse);


        if (getClientConfigResponse.email == "danielestebandh@gmail.com") {
          _this4.showdeleteaccount = true;
        }

        _this4.userName = _this4.CapitalizeName(getClientConfigResponse.fname); //===========================================================================
        //Get Default portafolio
        //===========================================================================

        let getDefaultPortafolioResponse = yield _this4.GetDefaultPortafolio();

        if (!getDefaultPortafolioResponse) {
          _this4.ShowError("Error to get client portafolio");

          return;
        } // console.log("getDefaultPortafolioResponse:", getDefaultPortafolioResponse);


        _this4.portfolio_name = getDefaultPortafolioResponse.name; //===========================================================================
        //Get Portafolio Balance
        //===========================================================================

        let portfolioBalancesResponse = yield _this4.GetPortfolioBalances();

        if (!portfolioBalancesResponse) {
          _this4.ShowError("Error to get client portafolio balances");

          return;
        }

        _this4.usd_qty = portfolioBalancesResponse.find(element => element.base_currency == 'USD').qty; // console.log("USD ",this.usd_qty)
        // console.log("portfolioBalancesResponse:", portfolioBalancesResponse);

        portfolioBalancesResponse = portfolioBalancesResponse.filter(x => x.qty > 0); // console.log("portfolioBalancesResponse after:", portfolioBalancesResponse);
        // console.log("portfolioBalancesResponse sort:", portfolioBalancesResponse);

        let products_id = portfolioBalancesResponse.filter(y => y.fiat === false).map(x => `${x.base_currency}-USD`); // console.log("products_id:", products_id);

        portfolioBalancesResponse = portfolioBalancesResponse.map(x => {
          return { ...x,
            price: x.base_currency === "USD" ? 1 : 0,
            total: x.base_currency === "USD" ? x.qty : 0
          };
        });
        _this4.totalCurrentBalance = portfolioBalancesResponse.map(x => x.total).reduce((a, b) => a + b, 0); // console.log("totalCurrentBalance:", this.totalCurrentBalance);

        _this4.portfolioBalances = portfolioBalancesResponse;

        if (products_id.length > 0) {
          //===========================================================================
          //Init Blox socket
          //===========================================================================
          _this4.websocket.InitBlox(products_id);

          _this4.subscription.add(_this4.websocket.GetDataBlox().subscribe(data => {
            try {
              if (typeof data === 'string') {
                let coin = JSON.parse(data); //console.log("coin", coin);

                let product = _this4.portfolioBalances.find(x => `${x.base_currency}-USD` === coin.product_id);

                if (product) {
                  //console.log("product", product);  
                  product.price = coin.mid_price;
                  product.total = product.qty * (coin.mid_price ?? 1); //console.log("product", product);

                  _this4.totalCurrentBalance = _this4.portfolioBalances.map(x => x.total).reduce((a, b) => a + b, 0);
                }
              } else {// console.warn("wrong data websocket", data);
              }
            } catch (error) {
              console.error("error websocket GetDataBlox", error);
            }
          }));
        } else {
          console.log("portafolio without coins");
        }
      } catch (error) {
        console.error("Error on InitDeposit:", error);
      }

      _this4.spinner.hide();
    })();
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
  } //***********************************************************************
  //Capitalize Name
  //***********************************************************************


  CapitalizeName(name) {
    if (!name) {
      return name;
    } else {
      var word = name.split(' '); // console.log("Name",word)

      name = "";
      word.forEach(element => {
        name = name + element[0].toUpperCase() + element.substr(1).toLowerCase() + " ";
      });
      return name;
    }
  } //***********************************************************************
  // Websocket realtime value coins
  //***********************************************************************


  RealtimeCoinValue(data) {
    try {
      if (typeof data === 'string') {
        let coin = JSON.parse(data); //console.log("coin", coin);

        let product = this.portfolioBalances.find(x => `${x.name}-USD` === coin.product_id);

        if (product) {
          //console.log("product", product);  
          product.price = coin.mid_price;
          product.total = product.qty * (coin.mid_price ?? 1); //console.log("product", product);

          this.totalCurrentBalance = this.portfolioBalances.map(x => x.total).reduce((a, b) => a + b, 0);
        }
      } else {
        console.warn("wrong data websocket", data);
      }
    } catch (error) {
      console.error("error websocket GetDataBlox", error);
    }
  } //***********************************************************************
  // Services Calls
  //***********************************************************************


  GetClientConfig() {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.client.GetClientConfig().subscribe(data => {
        resolve(data);
      }, err => {
        console.log("Error GetClient:", err);
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
  } //***********************************************************************
  // Miscelaniuos
  //***********************************************************************


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

HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_portafolio_portafolio_service__WEBPACK_IMPORTED_MODULE_1__.PortafolioService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_Client_client_service__WEBPACK_IMPORTED_MODULE_2__.ClientService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_WebSocket_socketio_service__WEBPACK_IMPORTED_MODULE_3__.SocketioService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_TestFounds_test_founds_service__WEBPACK_IMPORTED_MODULE_4__.TestFoundsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService));
};

HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 33,
  vars: 28,
  consts: [["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "line-scale-pulse-out", 3, "fullScreen"], [2, "color", "white"], [1, "container"], [1, "row"], [1, "col"], [1, "textwel"], ["type", "button", "class", "btn", 3, "click", 4, "ngIf"], [1, "princ"], [1, "container", "shadow"], [1, "col-md-6", "my-3"], [1, "currtext"], [1, "textprice"], [1, "col-md-6", "my-3", 2, "text-align", "center"], ["type", "button", "routerLink", "/home/portafolio/deposit", 1, "btn", "btn-success", "buttonc", 3, "disabled"], [1, "mt-2"], ["type", "button", "routerLink", "/home/portafolio/withdrawal", 1, "btn", "btn-outline-success", "buttonc", 3, "disabled"], [3, "typetable"], ["type", "button", 1, "btn", 3, "click"], [1, "fa", "fa-solid", "fa-skull-crossbones"], ["type", "number"], ["inputdelete", ""]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ngx-spinner", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, HomeComponent_button_10_Template, 4, 0, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 8)(15, "div", 3)(16, "div", 9)(17, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 12)(24, "div")(25, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 14)(29, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "app-table-info-transactions", 16);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fullScreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 13, "general.cargando"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 15, "home.hi"), ", ", ctx.userName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showdeleteaccount);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 17, "home.lastConnection"), ", April 1st, 2022 at 3:50 p.m.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 19, "home.yourCurrentBalance"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("USD ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](22, 21, ctx.usd_qty, "USD"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.validating);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 24, "sidebar.deposit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.validating);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](31, 26, "sidebar.withdraw"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("typetable", "home");
    }
  },
  dependencies: [ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, src_app_Options_table_info_transactions_table_info_transactions_component__WEBPACK_IMPORTED_MODULE_5__.TableInfoTransactionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
  styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 46vh;\n}\n\n.example-header[_ngcontent-%COMP%] {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 200px;\n}\n\n.mat-column-id[_ngcontent-%COMP%] {\n  flex: 0 0 50px;\n}\n\n.textwel[_ngcontent-%COMP%] {\n  margin-top: 0.5%;\n  color: #2bba4a;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.princ[_ngcontent-%COMP%] {\n  color: var(--count-color);\n  font-size: 15px;\n}\n\n.currtext[_ngcontent-%COMP%] {\n  color: var(--count-color);\n  margin-top: 3%;\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.textprice[_ngcontent-%COMP%] {\n  color: rgb(28, 141, 28);\n}\n\n.buttonc[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 3px;\n  margin-bottom: 2px;\n}\n\n.labelfil[_ngcontent-%COMP%] {\n  color: var(--label-home);\n  font-size: 15px;\n  margin-top: 15px;\n}\n\n.dropdowndep[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: -15px;\n}\n\n.texttable[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n@media (min-width: 310px) {\n  .texttable[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n\n@media (min-width: 656px) {\n  .texttable[_ngcontent-%COMP%] {\n    font-size: medium;\n  }\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  height: 21px;\n  padding: 3px 3px 3px 3px;\n  color: var(--drowdown-text-color);\n  background-color: var(--drowdown-bg);\n  border: 1px solid var(--drowdown-brd);\n}\n\n.table[_ngcontent-%COMP%] {\n  --bs-table-color: var(--color-text-table);\n  --bs-table-bg: transparent;\n  --bs-table-border-color: var(--margin-table);\n  --bs-table-accent-bg: transparent;\n  --bs-table-striped-color: var(--color-text-table);\n  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);\n  --bs-table-active-color: var(--bs-body-color);\n  --bs-table-active-bg: rgba(0, 0, 0, 0.1);\n  --bs-table-hover-color: var(--activ-text-table);\n  --bs-table-hover-bg: var(--activ-bg-table);\n}\n\n.icondop[_ngcontent-%COMP%] {\n  margin-bottom: -50px;\n  margin-left: 88%;\n  color: var(--drowdown-text-color);\n}\n\n.positive[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.negative[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.contenedor[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n\n.contenedor[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 10px;\n}\n\n.contenedor[_ngcontent-%COMP%]::-webkit-scrollbar-button:increment, .contenedor[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  display: none;\n}\n\n.contenedor[_ngcontent-%COMP%]::-webkit-scrollbar:horizontal {\n  height: 10px;\n}\n\n.contenedor[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--table-scroll);\n  border-radius: 20px;\n  border: 2px solid var(--table-scroll);\n}\n\n.contenedor[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  background: var(--table-color-bg);\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mat-paginator[_ngcontent-%COMP%] {\n  background: var(--bg-table-footer);\n  color: var(--tex-pg-table);\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: var(--header-text-table);\n  font-weight: bold;\n  background-color: --table-header-bg;\n  font-size: 8px;\n}\n\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%] {\n  color: var(--color-text-table);\n  --bs-table-border-color: var(--margin-table);\n}\n\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: var(--table-header-bg);\n}\n\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n\nmat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\n  border-bottom-color: var(--border-inter-table);\n}\n\n.mat-header-row[_ngcontent-%COMP%] {\n  background: var(--bg-table-footer);\n}\n\n.mat-input-element[_ngcontent-%COMP%] {\n  color: var(--drowdown-text-color);\n  caret-color: var(--drowdown-text-color);\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n@media (min-width: 656px) {\n  .mat-cell[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .mat-header-cell[_ngcontent-%COMP%] {\n    color: var(--header-text-table);\n    font-weight: bold;\n    background-color: --table-header-bg;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFGRjs7QUFTQTtFQUNJLGNBQUE7QUFOSjs7QUFVQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVBKOztBQVdBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FBUko7O0FBV0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFSSjs7QUFXQTtFQUNJLHVCQUFBO0FBUko7O0FBWUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBVEo7O0FBWUE7RUFDSSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVRKOztBQVlBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBVEo7O0FBWUE7RUFDSSxjQUFBO0FBVEo7O0FBV0E7RUFDSTtJQUNJLGVBQUE7RUFSTjtBQUNGOztBQVdBO0VBQ0k7SUFDSSxpQkFBQTtFQVROO0FBQ0Y7O0FBYUU7RUFDRSx5REFBQTtBQVhKOztBQWNBO0VBQ0ksWUFBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0FBWEo7O0FBY0E7RUFDSSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGlEQUFBO0VBQ0EsMENBQUE7RUFDQSw2Q0FBQTtFQUNBLHdDQUFBO0VBQ0EsK0NBQUE7RUFDQSwwQ0FBQTtBQVhKOztBQWVBO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FBWko7O0FBY0E7RUFDQSxZQUFBO0FBWEE7O0FBY0E7RUFDQSxVQUFBO0FBWEE7O0FBZUE7RUFDSSx3QkFBQTtBQVpKOztBQWVBO0VBQ0ksV0FBQTtBQVpKOztBQWVBO0VBQ0ksYUFBQTtBQVpKOztBQWVBO0VBQ0ksWUFBQTtBQVpKOztBQWVBO0VBQ0kscUNBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0FBWko7O0FBZUE7RUFDSSxtQkFBQTtBQVpKOztBQWVBO0VBQ0ksaUNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFaSjs7QUFrQkE7RUFDSSxrQ0FBQTtFQUNBLDBCQUFBO0FBZko7O0FBbUJBO0VBQ0ksK0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtBQWhCSjs7QUFtQkE7RUFDSSw4QkFBQTtFQUNBLDRDQUFBO0FBaEJKOztBQXFCQTtFQUNJLDZCQUFBO0FBbEJKOztBQXFCQTtFQUVJLHlEQUFBO0FBbkJKOztBQXNCQTtFQUNJLDhDQUFBO0FBbkJKOztBQXNCQTtFQUNFLGtDQUFBO0FBbkJGOztBQXNCQTtFQUVJLGlDQUFBO0VBQ0EsdUNBQUE7QUFwQko7O0FBdUJBO0VBQ0ksZUFBQTtBQXBCSjs7QUF1QkE7RUFFSTtJQUNJLGVBQUE7RUFyQk47RUF3QkU7SUFDSSwrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUNBQUE7SUFDQSxlQUFBO0VBdEJOO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1heC1oZWlnaHQ6IDQ2dmg7XHJcbi8vICAgbWluLXdpZHRoOiA2MDBweDtcclxuLy8gb3ZlcmZsb3cteDpzY3JvbGw7IG92ZXJmbG93LXk6c2Nyb2xsO1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDY0cHg7XHJcbiAgcGFkZGluZzogOHB4IDI0cHggMDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4ubWF0LWNvbHVtbi1pZCB7XHJcbiAgICBmbGV4OiAwIDAgNTBweDtcclxufVxyXG5cclxuXHJcbi50ZXh0d2Vse1xyXG4gICAgbWFyZ2luLXRvcDogMC41JTtcclxuICAgIGNvbG9yOiAjMmJiYTRhO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHJcbn1cclxuXHJcbi5wcmluY3tcclxuICAgIGNvbG9yOiB2YXIoLS1jb3VudC1jb2xvcik7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5jdXJydGV4dHtcclxuICAgIGNvbG9yOiAgdmFyKC0tY291bnQtY29sb3IpO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnRleHRwcmljZXtcclxuICAgIGNvbG9yOiByZ2IoMjgsIDE0MSwgMjgpOyBcclxuXHJcbn1cclxuXHJcbi5idXR0b25je1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi5sYWJlbGZpbHtcclxuICAgIGNvbG9yOiB2YXIoLS1sYWJlbC1ob21lKTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bmRlcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbn1cclxuXHJcbi50ZXh0dGFibGV7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzEwcHgpIHtcclxuICAgIC50ZXh0dGFibGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuQG1lZGlhIChtaW4td2lkdGg6IDY1NnB4KSB7XHJcbiAgICAudGV4dHRhYmxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuXHJcbiAgLnNoYWRvdyB7XHJcbiAgICBib3gtc2hhZG93OiAwIC41cmVtIDJyZW0gdmFyKC0tc2hhZG93bi1jb2xvcikhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgcGFkZGluZzogM3B4IDNweCAzcHggM3B4O1xyXG4gICAgY29sb3I6IHZhcigtLWRyb3dkb3duLXRleHQtY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHJvd2Rvd24tYmcpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZHJvd2Rvd24tYnJkKTsgICAgXHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgICAtLWJzLXRhYmxlLWNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXRhYmxlKTtcclxuICAgIC0tYnMtdGFibGUtYmc6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1icy10YWJsZS1ib3JkZXItY29sb3I6IHZhcigtLW1hcmdpbi10YWJsZSk7XHJcbiAgICAtLWJzLXRhYmxlLWFjY2VudC1iZzogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJzLXRhYmxlLXN0cmlwZWQtY29sb3I6IHZhcigtLWNvbG9yLXRleHQtdGFibGUpO1xyXG4gICAgLS1icy10YWJsZS1zdHJpcGVkLWJnOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgLS1icy10YWJsZS1hY3RpdmUtY29sb3I6IHZhcigtLWJzLWJvZHktY29sb3IpO1xyXG4gICAgLS1icy10YWJsZS1hY3RpdmUtYmc6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC0tYnMtdGFibGUtaG92ZXItY29sb3I6IHZhcigtLWFjdGl2LXRleHQtdGFibGUpO1xyXG4gICAgLS1icy10YWJsZS1ob3Zlci1iZzogdmFyKC0tYWN0aXYtYmctdGFibGUpO1xyXG5cclxufVxyXG5cclxuLmljb25kb3B7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNTBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogODglOyBcclxuICAgIGNvbG9yOnZhcigtLWRyb3dkb3duLXRleHQtY29sb3IpO1xyXG59XHJcbi5wb3NpdGl2ZXtcclxuY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubmVnYXRpdmV7XHJcbmNvbG9yOiByZWQ7XHJcbn1cclxuXHJcblxyXG4uY29udGVuZWRvcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG4uY29udGVuZWRvcjo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xyXG4gICAgd2lkdGg6MTBweDtcclxufVxyXG5cclxuLmNvbnRlbmVkb3I6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjppbmNyZW1lbnQsLmNvbnRlbmVkb3I6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59IFxyXG5cclxuLmNvbnRlbmVkb3I6Oi13ZWJraXQtc2Nyb2xsYmFyOmhvcml6b250YWwge1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uY29udGVuZWRvcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGUtc2Nyb2xsKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10YWJsZS1zY3JvbGwpO1xyXG59XHJcblxyXG4uY29udGVuZWRvcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgIFxyXG59XHJcblxyXG4ubWF0LXRhYmxlIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRhYmxlLWNvbG9yLWJnKTsgIFxyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgXHJcbn1cclxuXHJcblxyXG5cclxuLm1hdC1wYWdpbmF0b3Ige1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGFibGUtZm9vdGVyKTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXgtcGctdGFibGUpO1xyXG4gICAgXHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0LXRhYmxlKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogKC0tdGFibGUtaGVhZGVyLWJnKTtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG59XHJcblxyXG4ubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtdGFibGUpO1xyXG4gICAgLS1icy10YWJsZS1ib3JkZXItY29sb3I6IHZhcigtLW1hcmdpbi10YWJsZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XHJcbiAgICBjb2xvcjogdmFyKC0tdGFibGUtaGVhZGVyLWJnKTtcclxufVxyXG5cclxuLm1hdC1lbGV2YXRpb24tejgge1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDVweCA1cHggLTNweCByZ2IoMjU1IDAgMCAvIDIwJSksIDBweCA4cHggMTBweCAxcHggcmdiKDIxIDI1NSAwIC8gMTElKSwgMHB4IDNweCAxNHB4IDJweCByZ2IoMjU1IDAgMCk7XHJcbiAgICBib3gtc2hhZG93OiAwIC41cmVtIDJyZW0gdmFyKC0tc2hhZG93bi1jb2xvcikhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LWZvb3Rlci1yb3csIHRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1ib3JkZXItaW50ZXItdGFibGUpO1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1yb3d7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGFibGUtZm9vdGVyKTtcclxufVxyXG5cclxuLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuXHJcbiAgICBjb2xvcjogdmFyKC0tZHJvd2Rvd24tdGV4dC1jb2xvcik7XHJcbiAgICBjYXJldC1jb2xvcjogdmFyKC0tZHJvd2Rvd24tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbi5tYXQtY2VsbHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDY1NnB4KSB7XHJcblxyXG4gICAgLm1hdC1jZWxse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQtdGFibGUpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICgtLXRhYmxlLWhlYWRlci1iZyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */"]
});

/***/ }),

/***/ 20070:
/*!*******************************************************!*\
  !*** ./src/app/Principal/principal-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrincipalRoutingModule": () => (/* binding */ PrincipalRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _assets_assets_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/assets.component */ 62983);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 58462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    { path: 'assets', component: _assets_assets_component__WEBPACK_IMPORTED_MODULE_0__.AssetsComponent },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent },
];
class PrincipalRoutingModule {
}
PrincipalRoutingModule.ɵfac = function PrincipalRoutingModule_Factory(t) { return new (t || PrincipalRoutingModule)(); };
PrincipalRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PrincipalRoutingModule });
PrincipalRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PrincipalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 18894:
/*!***********************************************!*\
  !*** ./src/app/Principal/principal.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrincipalModule": () => (/* binding */ PrincipalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _principal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./principal-routing.module */ 20070);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/dialog */ 62529);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 58462);
/* harmony import */ var _assets_assets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/assets.component */ 62983);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ 82111);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var src_Modules_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Modules/material-module */ 78009);
/* harmony import */ var src_Modules_sharedtable_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/Modules/sharedtable.module */ 82037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);















class PrincipalModule {
}
PrincipalModule.ɵfac = function PrincipalModule_Factory(t) { return new (t || PrincipalModule)(); };
PrincipalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PrincipalModule });
PrincipalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], imports: [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule,
        src_Modules_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule,
        _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_12__.DialogModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _principal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrincipalRoutingModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forChild(),
        src_Modules_sharedtable_module__WEBPACK_IMPORTED_MODULE_5__.SharedtableModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PrincipalModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
        _assets_assets_component__WEBPACK_IMPORTED_MODULE_2__.AssetsComponent,
        _about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent], imports: [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule,
        src_Modules_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule,
        _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_12__.DialogModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _principal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrincipalRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, src_Modules_sharedtable_module__WEBPACK_IMPORTED_MODULE_5__.SharedtableModule] }); })();


/***/ }),

/***/ 90500:
/*!***************************************************!*\
  !*** ./src/services/Graph/graphAssets.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphAssetsService": () => (/* binding */ GraphAssetsService)
/* harmony export */ });
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ 72750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class GraphAssetsService {
    constructor() { }
    makeOption() {
        var colorgraph = "";
        var coloraxisx = "";
        return {
            animation: true,
            grid: [
                {
                    left: '3%',
                    right: '0',
                    height: '70%',
                    width: '90%',
                    top: 5,
                },
                {
                    left: '3%',
                    right: '0',
                    top: '80%',
                    bottom: '2%',
                    width: '90%',
                }
            ],
            tooltip: {
                extraCssText: 'width: 23vh',
                trigger: 'axis',
                axisPointer: {
                    type: 'line'
                },
                borderColor: 'rgba(0, 0, 0, 1.0)',
                backgroundColor: 'rgba(32, 32, 32, 0.80)',
                textStyle: {
                    color: 'rgba(255, 255, 255, 1.0)',
                },
                formatter: function (param) {
                    return echarts__WEBPACK_IMPORTED_MODULE_0__.format.formatTime('MM-dd hh:mm', param);
                },
                position: function (pos, params, el, elRect, size) {
                    var obj = { top: 0 };
                    obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 0;
                    return obj;
                },
            },
            axisPointer: {
                link: { xAxisIndex: 'all' },
                label: {
                    backgroundColor: '#777'
                },
                hideDelay: 0,
            },
            xAxis: [
                {
                    data: [],
                    axisLine: {
                        show: false,
                    },
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        formatter: function (value) {
                            return echarts__WEBPACK_IMPORTED_MODULE_0__.format.formatTime('MM-dd hh:mm', value);
                        },
                        textStyle: {
                            fontSize: 12,
                            color: coloraxisx,
                        },
                        margin: 15,
                    },
                    axisTick: {
                        show: false,
                        length: 12,
                        alighWithLabel: true,
                    },
                    min: 'dataMin',
                    max: 'dataMax',
                },
                {
                    gridIndex: 1,
                    data: [],
                    axisLine: {
                        onZero: false
                    },
                    axisTick: { show: false },
                    splitLine: { show: false },
                    axisLabel: { show: false },
                    min: 'dataMin',
                    max: 'dataMax',
                }
            ],
            yAxis: [
                {
                    axisLabel: {
                        textStyle: {
                            fontSize: 12,
                            color: coloraxisx,
                        },
                        inside: true,
                        verticalAlign: 'top',
                        margin: 0,
                        showMinLabel: false,
                        showMaxLabel: false,
                    },
                    zlevel: 1000,
                    min: 'dataMin',
                    max: 'dataMax',
                    position: 'right',
                    axisTick: {
                        show: false
                    },
                    splitLine: { show: false }
                },
                {
                    scale: true,
                    gridIndex: 1,
                    splitNumber: 2,
                    axisLabel: { show: false },
                    axisLine: { show: false },
                    axisTick: { show: false },
                    splitLine: { show: false }
                }
            ],
            series: [
                {
                    name: 'Price Candlestick',
                    type: 'candlestick',
                    data: [],
                    axisLabel: {
                        textStyle: {
                            fontSize: 12
                        },
                    },
                    itemStyle: {
                        color: 'rgb(0, 240, 0)',
                        color0: 'rgb(240, 0, 0)',
                        borderColor: 'rgb(0, 240, 0)',
                        borderColor0: 'rgb(240, 0, 0)',
                    },
                },
                {
                    name: 'Volume',
                    type: 'bar',
                    itemStyle: { color: 'rgb(0, 50, 128)', },
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    data: [],
                },
            ],
            backgroundColor: colorgraph,
        };
    }
}
GraphAssetsService.ɵfac = function GraphAssetsService_Factory(t) { return new (t || GraphAssetsService)(); };
GraphAssetsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GraphAssetsService, factory: GraphAssetsService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_Principal_principal_module_ts.js.map