"use strict";
(self["webpackChunkBloxcrossFrontend"] = self["webpackChunkBloxcrossFrontend"] || []).push([["src_app_PaymentMethods_payment-methods_module_ts"],{

/***/ 89783:
/*!*********************************************************!*\
  !*** ./src/app/PaymentMethods/funds/funds.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundsComponent": () => (/* binding */ FundsComponent)
/* harmony export */ });
/* harmony import */ var C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/Enum/EnumAuthentication.enum */ 81708);
/* harmony import */ var src_app_PopUp_funds_options_funds_options_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/PopUp/funds-options/funds-options.component */ 97863);
/* harmony import */ var src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/Enum/EnumPopUp.enum */ 42241);
/* harmony import */ var _payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../payment-methods/payment-methods.component */ 69649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_services_payments_payment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/payments/payment.service */ 61084);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/manage-data.service */ 43607);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);















function FundsComponent_div_0_div_15_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const funds_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("********", funds_r3.last_four, "");
  }
}

function FundsComponent_div_0_div_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "funds.default"));
  }
}

function FundsComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FundsComponent_div_0_div_15_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const funds_r3 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.Details(funds_r3, "in"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 15)(2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 17)(5, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, FundsComponent_div_0_div_15_div_6_Template, 3, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, FundsComponent_div_0_div_15_div_7_Template, 4, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const funds_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](funds_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", funds_r3.last_four != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", funds_r3.default_method == true);
  }
}

function FundsComponent_div_0_div_22_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const funds_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("********", funds_r9.last_four, "");
  }
}

function FundsComponent_div_0_div_22_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "funds.default"));
  }
}

function FundsComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FundsComponent_div_0_div_22_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const funds_r9 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.Details(funds_r9, "out"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 15)(2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 17)(5, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, FundsComponent_div_0_div_22_div_6_Template, 3, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, FundsComponent_div_0_div_22_div_7_Template, 4, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const funds_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](funds_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", funds_r9.last_four != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", funds_r9.default_method == true);
  }
}

function FundsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5)(8, "div", 2)(9, "div", 6)(10, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div")(14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, FundsComponent_div_0_div_15_Template, 8, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 6)(17, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div")(21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, FundsComponent_div_0_div_22_Template, 8, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 11)(24, "div", 12)(25, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FundsComponent_div_0_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.AddPaymentMethods());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 6, "settings.fundsIn/Out"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 8, "funds.fundsIn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.fundsIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 10, "funds.fundsOut"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.fundsOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](27, 12, "settings.addPaymentMethod"));
  }
}

class FundsComponent {
  constructor(translate, dialog, payments_service, router, manage_data) {
    this.translate = translate;
    this.dialog = dialog;
    this.payments_service = payments_service;
    this.router = router;
    this.manage_data = manage_data;
    this.fundsIn = [];
    this.fundsOut = [];
    this.menu = false;
    this.main = true;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.FoundsMethods();
  }

  FoundsMethods() {
    var _this = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.fundsIn = yield _this.GetFoundsInMethods().then(data => data);
      _this.fundsOut = yield _this.GetFoundsOutMethods().then(data => data);
      console.log("Metodos de retiro", _this.fundsOut);
      console.log("Metodos de deposito", _this.fundsIn);
    })();
  }

  FundsMenu(data, direction) {
    this.found_data = data;
    this.direction = direction;

    if (this.direction == 'in') {
      this.menu = true;
      this.main = false;
    } else if (this.direction == 'out') {
      this.menu = true;
      this.main = false;
    }
  }

  Details(data, direction) {
    var _this2 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      data.direction = direction;
      data.action = 'Add';
      const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
      dialogConfig.autoFocus = false;
      dialogConfig.disableClose = true; // dialogConfig.height = "20rem";

      dialogConfig.width = "40rem";

      _this2.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_3__.EnumEventsPopUp.FundsOption.toString(), data);

      let dialogRef = _this2.dialog.open(src_app_PopUp_funds_options_funds_options_component__WEBPACK_IMPORTED_MODULE_2__.FundsOptionsComponent, dialogConfig);

      _this2.subscription.add(dialogRef.afterClosed().subscribe(result => {
        if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_1__.EnumConfirmation["delete"].toString()) {
          _this2.Delete(data);
        } else if (result == src_models_Enum_EnumAuthentication_enum__WEBPACK_IMPORTED_MODULE_1__.EnumConfirmation["default"].toString()) {
          _this2.Default(data, direction);
        }
      }));
    })();
  }

  Delete(data) {
    var _this3 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const pay_method = {
        client_payment_method_id: data.client_payment_method_id
      };
      var response = yield _this3.DeleteClientPaymentMethod(pay_method).then(data => data);
      console.log("Response", response);

      _this3.FoundsMethods();

      _this3.Back();
    })();
  }

  Default(data, direction) {
    var _this4 = this;

    return (0,C_Proyectos_Disersoft_bloxcross_Web_Frontend_branches_CambiosDanielD3_BloxcrossFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const pay_method = {
        client_payment_method_id: data.client_payment_method_id,
        direction: direction
      };
      var response = yield _this4.SetDefaultPaymentMethod(pay_method).then(data => data);

      _this4.FoundsMethods();

      _this4.Back();

      console.log("Response", response);
    })();
  }

  Back() {
    this.menu = false;
    this.main = true;
  }

  AddPaymentMethods() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true; // dialogConfig.height = "20rem";

    dialogConfig.width = "95vw";
    dialogConfig.maxWidth = '100vw';
    const action = {
      action: 'Add'
    };
    this.manage_data.emitEvent(src_models_Enum_EnumPopUp_enum__WEBPACK_IMPORTED_MODULE_3__.EnumEventsPopUp.ActionPaymentMethods.toString(), action);
    let dialog = this.dialog.open(_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_4__.PaymentMethodsComponent, dialogConfig);
    this.subscription.add(dialog.afterClosed().subscribe(() => {
      this.FoundsMethods();
    })); // this.router.navigate(['/home/payment_methods'])
  }

  GetFoundsInMethods() {
    const data = {
      direction: 'in'
    };
    return new Promise((resolve, reject) => {
      this.subscription.add(this.payments_service.GetClientPaymentMethods(data).subscribe(data => resolve(data), err => {
        console.warn("Error", err);
        resolve(null);
      }));
    });
  }

  GetFoundsOutMethods() {
    const data = {
      direction: 'out'
    };
    return new Promise((resolve, reject) => {
      this.subscription.add(this.payments_service.GetClientPaymentMethods(data).subscribe(data => resolve(data), err => {
        console.warn("Error", err);
        resolve(null);
      }));
    });
  }

  DeleteClientPaymentMethod(data) {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.payments_service.DeleteClientPaymentMethod(data).subscribe(data => resolve(data), err => {
        console.warn("Error", err);
        resolve(null);
      }));
    });
  }

  SetDefaultPaymentMethod(data) {
    return new Promise((resolve, reject) => {
      this.subscription.add(this.payments_service.SetDefaultPaymentMethod(data).subscribe(data => resolve(data), err => {
        console.warn("Error", err);
        resolve(null);
      }));
    });
  }

}

FundsComponent.ɵfac = function FundsComponent_Factory(t) {
  return new (t || FundsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_services_payments_payment_service__WEBPACK_IMPORTED_MODULE_5__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_services_manage_data_service__WEBPACK_IMPORTED_MODULE_6__.ManageDataService));
};

FundsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: FundsComponent,
  selectors: [["app-funds"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "container", "text-center", "shadow", 2, "margin-top", "1%"], [1, "row"], [1, "col"], [1, "styletitel"], [1, "container", "shadow", 2, "margin-top", "1%"], [1, "col-md-6", "text-center"], [1, "texItem"], [1, "scroll"], ["class", "row asset-list-item ", "style", "cursor: pointer; min-height: 100px;", 3, "click", 4, "ngFor", "ngForOf"], ["class", "row asset-list-item ", "style", " cursor: pointer; min-height: 100px", 3, "click", 4, "ngFor", "ngForOf"], [1, "row", "text-center", "mt-3"], [1, "col-12"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"], [1, "row", "asset-list-item", 2, "cursor", "pointer", "min-height", "100px", 3, "click"], [1, "col-md-5", "col-5", "text-start"], [1, "texItem", 2, "cursor", "pointer"], [1, "col-md-7", "col-7", "text-end"], [1, "listpoint", "my-auto"], [2, "font-size", "15px", "padding", "10px", "color", "rgb(19, 224, 0)"], [2, "font-size", "15px", "padding", "10px", "color", "rgb(255, 5, 5)"]],
  template: function FundsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, FundsComponent_div_0_Template, 29, 14, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.main);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: [".search-bar[_ngcontent-%COMP%] {\n  background-color: #d5e0d8;\n}\n\n.assets-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  margin: 1rem;\n  border-radius: 0.6rem;\n  background: #cecccc;\n  color: rgb(182, 0, 0);\n}\n\n.asset-list-item[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: center;\n  max-height: 12vh;\n  background: var(--bg-item-assets);\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.5rem;\n  min-width: 1rem;\n}\n\n.assets-easy-page[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-top: 2rem;\n  background-size: 10px;\n  color: #837272;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n\nfigure[_ngcontent-%COMP%] {\n  margin-bottom: 0.2rem;\n}\n\nfigure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 5rem;\n}\n\nh2.title[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n  font-size: 1rem;\n  color: #4D4D4D;\n}\n\nspan.amount[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #000000;\n  font-size: 2rem;\n  font-weight: bold;\n  border-radius: 1.5rem;\n  padding: 5px 2rem;\n  z-index: 2;\n}\n\n.asset-container[_ngcontent-%COMP%] {\n  background-color: #FAFAFA;\n  border-radius: 2rem 2rem 0 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1rem;\n  padding-top: 3rem;\n  position: relative;\n  top: -1.5rem;\n  width: 100%;\n  z-index: 1;\n  height: 100%;\n  font-size: 0.8rem;\n  justify-content: flex-start;\n}\n\n.buy-sell-message[_ngcontent-%COMP%] {\n  margin: 1rem;\n  color: #4D4D4D;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.buy-sell-message.green[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.buy-sell-message.red[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.buy-sell-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 0.4rem;\n}\n\n.send-button[_ngcontent-%COMP%] {\n  margin: 1rem auto;\n}\n\n.summary[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: solid 1px #2bba4a;\n  border-radius: 1rem;\n}\n\n.summary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3rem;\n}\n\n.summary-item[_ngcontent-%COMP%] {\n  color: #000000;\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.listpoint[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n*[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: rgb(26, 26, 26) rgba(255, 166, 0, 0);\n}\n\n\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(255, 166, 0, 0);\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--table-scroll);\n  border-radius: 20px;\n  border: 3px solid var(--table-scroll);\n}\n\n.texItem[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n  color: var(--tx-funds);\n}\n\n.styletitel[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  color: #2bba4a;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.textprice[_ngcontent-%COMP%] {\n  color: rgb(58, 187, 53);\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 2rem var(--shadown-color) !important;\n}\n\n.scroll[_ngcontent-%COMP%] {\n  max-height: 25vh;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n@media (min-width: 600px) {\n  .scroll[_ngcontent-%COMP%] {\n    max-height: 54vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJBQUE7QUFBSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNGLGdCQUFBO0VBQ0EsaUNBQUE7QUFDRjs7QUFFRTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUNKOztBQU1FO0VBQ0UscUJBQUE7QUFISjs7QUFLSTtFQUNFLFlBQUE7QUFITjs7QUFPRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUpKOztBQU9FO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFKSjs7QUFPRTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFKSjs7QUFPRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFNSTtFQUNFLFlBQUE7QUFKTjs7QUFPSTtFQUNFLFVBQUE7QUFMTjs7QUFRSTtFQUNFLG9CQUFBO0FBTk47O0FBVUU7RUFDRSxpQkFBQTtBQVBKOztBQVVFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFTSTtFQUNFLFdBQUE7QUFQTjs7QUFXRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBUko7O0FBV0U7RUFDRSxlQUFBO0FBUko7O0FBV0U7RUFDQyxnQkFBQTtBQVJIOztBQVdFO0VBQ0UscUJBQUE7RUFDQSxxREFBQTtBQVJKOztBQVdFLHNDQUFBOztBQUNBO0VBQ0UsV0FBQTtBQVJKOztBQVdFO0VBQ0UsZ0NBQUE7QUFSSjs7QUFXRTtFQUNFLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtBQVJKOztBQVlFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFUSjs7QUFZRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBVEo7O0FBWUU7RUFDRSx1QkFBQTtBQVRKOztBQWFFO0VBQ0UseURBQUE7QUFWSjs7QUFhRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVZKOztBQWFFO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUFWSjtBQUNGIiwiZmlsZSI6ImZ1bmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zZWFyY2gtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNWUwZDg7XHJcbiAgfVxyXG4gIC5hc3NldHMtdGFicyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2NlY2NjYztcclxuICAgIGNvbG9yOiByZ2IoMTgyLCAwLCAwKTtcclxuICB9XHJcbiAgXHJcbiAgLmFzc2V0LWxpc3QtaXRlbSB7XHJcbiAgICBtYXJnaW46IDAuNWVtIDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWF4LWhlaWdodDogMTJ2aDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1pdGVtLWFzc2V0cyk7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xyXG4gICAgbWluLXdpZHRoOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuYXNzZXRzLWVhc3ktcGFnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjODM3MjcyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICBmaWd1cmUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG4gICAgXHJcbiAgICBpbWd7XHJcbiAgICAgIGhlaWdodDogNXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaDIudGl0bGUge1xyXG4gICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzRENEQ0RFxyXG4gIH1cclxuICBcclxuICBzcGFuLmFtb3VudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICAgIHBhZGRpbmc6IDVweCAycmVtO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbiAgXHJcbiAgLmFzc2V0LWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDAgMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbiAgXHJcbiAgLmJ1eS1zZWxsLW1lc3NhZ2Uge1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgY29sb3I6ICM0RDRENEQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gICAgJi5ncmVlbiB7XHJcbiAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgIH1cclxuICBcclxuICAgICYucmVkIHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuICBcclxuICAgIHNwYW4ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNlbmQtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuc3VtbWFyeSB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzJiYmE0YTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogM3JlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnN1bW1hcnktaXRlbSB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAudG90YWwge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAubGlzdHBvaW50IHtcclxuICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgKiB7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgICBzY3JvbGxiYXItY29sb3I6IHJnYigyNiwgMjYsIDI2KSByZ2JhKDI1NSwgMTY2LCAwLCAwKTtcclxuICB9XHJcbiAgXHJcbiAgLyogV29ya3Mgb24gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpICovXHJcbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gICo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNjYsIDAsIDApO1xyXG4gIH1cclxuICBcclxuICAqOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1zY3JvbGwpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXRhYmxlLXNjcm9sbCk7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLnRleEl0ZW17XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgIFxyXG4gICAgY29sb3I6ICB2YXIoLS10eC1mdW5kcyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdHlsZXRpdGVse1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBjb2xvcjogIzJiYmE0YTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0cHJpY2V7XHJcbiAgICBjb2xvcjogcmdiKDU4LCAxODcsIDUzKTsgXHJcbiAgXHJcbiAgfVxyXG5cclxuICAuc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMnJlbSB2YXIoLS1zaGFkb3duLWNvbG9yKSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc2Nyb2xse1xyXG4gICAgbWF4LWhlaWdodDoyNXZoOyBcclxuICAgIG92ZXJmbG93LXg6aGlkZGVuOyBcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuc2Nyb2xse1xyXG4gICAgICBtYXgtaGVpZ2h0OjU0dmg7IFxyXG4gICAgICBvdmVyZmxvdy14OmhpZGRlbjsgXHJcbiAgICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0iXX0= */"]
});

/***/ }),

/***/ 27425:
/*!******************************************************************!*\
  !*** ./src/app/PaymentMethods/payment-methods-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentMethodsRoutingModule": () => (/* binding */ PaymentMethodsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _funds_funds_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funds/funds.component */ 89783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    { path: '', component: _funds_funds_component__WEBPACK_IMPORTED_MODULE_0__.FundsComponent }
];
class PaymentMethodsRoutingModule {
}
PaymentMethodsRoutingModule.ɵfac = function PaymentMethodsRoutingModule_Factory(t) { return new (t || PaymentMethodsRoutingModule)(); };
PaymentMethodsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PaymentMethodsRoutingModule });
PaymentMethodsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PaymentMethodsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 37245:
/*!**********************************************************!*\
  !*** ./src/app/PaymentMethods/payment-methods.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentMethodsModule": () => (/* binding */ PaymentMethodsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _payment_methods_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-methods-routing.module */ 27425);
/* harmony import */ var _payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-methods/payment-methods.component */ 69649);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _funds_funds_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funds/funds.component */ 89783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);








class PaymentMethodsModule {
}
PaymentMethodsModule.ɵfac = function PaymentMethodsModule_Factory(t) { return new (t || PaymentMethodsModule)(); };
PaymentMethodsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PaymentMethodsModule });
PaymentMethodsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _payment_methods_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentMethodsRoutingModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule.forChild(),
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PaymentMethodsModule, { declarations: [_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_1__.PaymentMethodsComponent,
        _funds_funds_component__WEBPACK_IMPORTED_MODULE_2__.FundsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _payment_methods_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentMethodsRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_PaymentMethods_payment-methods_module_ts.js.map