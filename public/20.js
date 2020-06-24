(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/RequestID.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/RequestID.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./resources/js/node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FileUploader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/FileUploader.vue */ "./resources/js/src/views/components/FileUploader.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vux_uploader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vux-uploader-component */ "./node_modules/vux-uploader-component/dist/uploader.js");
/* harmony import */ var vux_uploader_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vux_uploader_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../route */ "./resources/js/src/route.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_7__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var $ = jquery__WEBPACK_IMPORTED_MODULE_4___default.a;



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Forms',
  data: function data() {
    var amINestedComp = !!this.row;
    return {
      dataPick: new Date(),
      format: 'd MMM yyyy',
      fileList: [],
      showFile: false,
      data: {
        comment: "",
        contact: "",
        text: "",
        mass: 0,
        country: "",
        product: "",
        responsible: "",
        name: ""
      },
      dataUsers: {
        name: '',
        id: 0
      },
      selected: [],
      // Must be an array reference!
      show: true,
      horizontal: {
        label: 'col-3',
        input: 'col-9'
      },
      options: ['Option 1', 'Option 2', 'Option 3'],
      selectOptions: ['Option 1', 'Option 2', 'Option 3', {
        value: ['some value', 'another value'],
        label: 'Selected option'
      }],
      selectedOption: ['some value', 'another value'],
      formCollapsed: true,
      checkboxNames: ['Checkboxes', 'Inline Checkboxes', 'Checkboxes - custom', 'Inline Checkboxes - custom'],
      radioNames: ['Radios', 'Inline Radios', 'Radios - custom', 'Inline Radios - custom']
    };
  },
  mounted: function mounted() {
    this.getUsers(); //console.log(this.$route.params.id);

    if (this.$route.params.id) {
      if (this.$route.params.id == "new") {
        this.data = {};
      } else {
        this.getData();
      }
    } else {
      this.data = {};
    }
  },
  //  beforeRouteEnter (to, from, next) {
  //      console.log(to);
  //      next(vm => {
  //          if (from.path=="/request/new"){
  //              vm.data={}
  //              vm.$route.params.id=="new"
  //          }
  //
  //      })
  //  },
  methods: {
    getUsers: function getUsers() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(Object(_route__WEBPACK_IMPORTED_MODULE_6__["default"])("users.index"), {
        params: {
          method: 'getUsers'
        }
      }).then(function (response) {
        _this.dataUsers = response.data.selectUsers;
      })["catch"](function (error) {
        return console.log(error.message);
      });
    },
    getData: function getData() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(Object(_route__WEBPACK_IMPORTED_MODULE_6__["default"])("request.index"), {
        params: {
          method: 'getRequestById',
          param: this.$route.params.id
        }
      }).then(function (response) {
        _this2.data = response.data.result;
        console.log(_this2.data);
        _this2.dataUsers = response.data.selectUsers;
      })["catch"](function (error) {
        return console.log(error.message);
      });
    },
    onChangeUsers: function onChangeUsers() {
      this.data.id_users = this.dataUsers.id; //  console.log(this.data.id_client);
    },
    save: function save() {
      var _this3 = this;

      this.data.date = moment(this.data.date).format('YYYY-MM-DD');
      var method;

      if (typeof this.data.id == "undefined") {
        method = 'saveNewRequest';
      } else {
        method = 'updateRequest';
      }

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(Object(_route__WEBPACK_IMPORTED_MODULE_6__["default"])("request.update"), {
        params: {
          method: method,
          param: this.data
        }
      }).then(function (response) {
        if (response.data.result == true) {
          _this3.$swal("Сохранено!!!", "", "success");

          if (typeof _this3.data.id == "undefined") {
            //    var path="/request/"+response.data.id;
            _this3.$router.push({
              path: 'all'
            });

            _this3.showFile = true; // console.log(path);
          }
        } else {
          console.log(response.data.error);
          var str = response.data.error;
          str = JSON.stringify(str);

          _this3.$swal(response.data.result.error, str, "error");
        }
      })["catch"](function (error) {
        return _this3.$swal(error.message, "", "error");
      });
    },
    close: function close() {
      this.$router.push({
        path: 'all'
      });
    },
    newRequest: function newRequest() {
      this.$router.push('request/new');
    },
    validator: function validator(val) {
      return val ? val.length >= 4 : false;
    }
  },
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_7___default.a,
    FileUploader: _components_FileUploader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_3__["default"],
    Uploader: vux_uploader_component__WEBPACK_IMPORTED_MODULE_5___default.a
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/RequestID.vue?vue&type=template&id=06c3b9a0&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/RequestID.vue?vue&type=template&id=06c3b9a0& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { lg: "12" } },
            [
              _c(
                "transition",
                { attrs: { name: "fade" } },
                [
                  _vm.show
                    ? _c(
                        "CCard",
                        [
                          _c(
                            "CCardHeader",
                            {
                              on: {
                                click: function($event) {
                                  _vm.formCollapsed = !_vm.formCollapsed
                                }
                              }
                            },
                            [
                              _c("CIcon", {
                                attrs: { name: "cil-calculator" }
                              }),
                              _vm._v(
                                "\n              Новая операция:\n            "
                              ),
                              _c(
                                "div",
                                { staticClass: "card-header-actions" },
                                [
                                  _c(
                                    "CLink",
                                    {
                                      staticClass:
                                        "card-header-action btn-minimize",
                                      on: {
                                        click: function($event) {
                                          _vm.formCollapsed = !_vm.formCollapsed
                                        }
                                      }
                                    },
                                    [
                                      _c("CIcon", {
                                        attrs: {
                                          name:
                                            "cil-chevron-" +
                                            (_vm.formCollapsed
                                              ? "bottom"
                                              : "top")
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("CLink", {
                                    staticClass: "card-header-action",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        _vm.show = !_vm.show
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCollapse",
                            { attrs: { show: _vm.formCollapsed } },
                            [
                              _c("CCardBody", [
                                _c("div", {}, [
                                  _c("div", { staticClass: "modal-body" }, [
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "col-sm-2 col-form-label",
                                            attrs: { for: "dataPayment" }
                                          },
                                          [_vm._v("Название")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-10" },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.data.name,
                                                  expression: "data.name"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: { type: "text" },
                                              domProps: {
                                                value: _vm.data.name
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.data,
                                                    "name",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "col-sm-2 col-form-label",
                                            attrs: { for: "dataPayment" }
                                          },
                                          [_vm._v("Дата")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-4" },
                                          [
                                            _c("datepicker", {
                                              attrs: {
                                                format: _vm.format,
                                                "input-class": "picker",
                                                bootstrapStyling: true
                                              },
                                              model: {
                                                value: _vm.data.date,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.data,
                                                    "date",
                                                    $$v
                                                  )
                                                },
                                                expression: "data.date"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "col-sm-2 col-form-label",
                                            attrs: { for: "type" }
                                          },
                                          [_vm._v("Тип запроса ")]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-sm-4" }, [
                                          _c(
                                            "select",
                                            {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.data.type,
                                                  expression: "data.type"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              on: {
                                                change: function($event) {
                                                  var $$selectedVal = Array.prototype.filter
                                                    .call(
                                                      $event.target.options,
                                                      function(o) {
                                                        return o.selected
                                                      }
                                                    )
                                                    .map(function(o) {
                                                      var val =
                                                        "_value" in o
                                                          ? o._value
                                                          : o.value
                                                      return val
                                                    })
                                                  _vm.$set(
                                                    _vm.data,
                                                    "type",
                                                    $event.target.multiple
                                                      ? $$selectedVal
                                                      : $$selectedVal[0]
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "option",
                                                { attrs: { value: "Тендер" } },
                                                [_vm._v("Тендер")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "option",
                                                { attrs: { value: "Письмо" } },
                                                [_vm._v("Письмо")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "option",
                                                { attrs: { value: "Звонок" } },
                                                [_vm._v("Звонок")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "option",
                                                { attrs: { value: "Другое" } },
                                                [_vm._v("Другое")]
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "col-sm-2 col-form-label",
                                            attrs: { for: "dataPayment" }
                                          },
                                          [_vm._v("Ответственный")]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-sm-4" }, [
                                          _c(
                                            "select",
                                            {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.data.id_user,
                                                  expression: "data.id_user"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              on: {
                                                change: function($event) {
                                                  var $$selectedVal = Array.prototype.filter
                                                    .call(
                                                      $event.target.options,
                                                      function(o) {
                                                        return o.selected
                                                      }
                                                    )
                                                    .map(function(o) {
                                                      var val =
                                                        "_value" in o
                                                          ? o._value
                                                          : o.value
                                                      return val
                                                    })
                                                  _vm.$set(
                                                    _vm.data,
                                                    "id_user",
                                                    $event.target.multiple
                                                      ? $$selectedVal
                                                      : $$selectedVal[0]
                                                  )
                                                }
                                              }
                                            },
                                            _vm._l(_vm.dataUsers, function(
                                              item
                                            ) {
                                              return _c(
                                                "option",
                                                {
                                                  domProps: { value: item.id }
                                                },
                                                [_vm._v(_vm._s(item.name))]
                                              )
                                            }),
                                            0
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "col-sm-2 col-form-label",
                                            attrs: { for: "dataPayment" }
                                          },
                                          [_vm._v("Страна")]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-sm-4" }, [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.data.country,
                                                expression: "data.country"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: { type: "text" },
                                            domProps: {
                                              value: _vm.data.country
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.data,
                                                  "country",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "col-sm-2 col-form-label",
                                            attrs: { for: "dataPayment" }
                                          },
                                          [_vm._v("Продукт")]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-sm-4" }, [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.data.product,
                                                expression: "data.product"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: { type: "text" },
                                            domProps: {
                                              value: _vm.data.product
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.data,
                                                  "product",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "col-sm-2 col-form-label",
                                            attrs: { for: "dataPayment" }
                                          },
                                          [_vm._v("Масса")]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-sm-2" }, [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.data.mass,
                                                expression: "data.mass"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: { type: "text" },
                                            domProps: { value: _vm.data.mass },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.data,
                                                  "mass",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "col-sm-2 col-form-label",
                                            attrs: { for: "purpose" }
                                          },
                                          [_vm._v("Описание")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-10" },
                                          [
                                            _c("textarea", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.data.text,
                                                  expression: "data.text"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              staticStyle: {
                                                resize: "none",
                                                "overflow-y": "scroll",
                                                height: "407px"
                                              },
                                              attrs: {
                                                id: "textarea",
                                                placeholder: "Описание...",
                                                rows: "3",
                                                "max-rows": "6"
                                              },
                                              domProps: {
                                                value: _vm.data.text
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.data,
                                                    "text",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "col-sm-2 col-form-label",
                                            attrs: { for: "purpose" }
                                          },
                                          [_vm._v("Контакты контрагента ")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-10" },
                                          [
                                            _c("textarea", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.data.contact,
                                                  expression: "data.contact"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              staticStyle: {
                                                resize: "none",
                                                "overflow-y": "scroll",
                                                height: "77px"
                                              },
                                              attrs: {
                                                id: "textarea",
                                                placeholder:
                                                  "Контакные данные...",
                                                rows: "3",
                                                "max-rows": "6"
                                              },
                                              domProps: {
                                                value: _vm.data.contact
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.data,
                                                    "contact",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "col-sm-2 col-form-label",
                                            attrs: { for: "purpose" }
                                          },
                                          [_vm._v("Комментарии:  ")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-10" },
                                          [
                                            _c("textarea", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.data.comment,
                                                  expression: "data.comment"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              staticStyle: {
                                                resize: "none",
                                                "overflow-y": "scroll",
                                                height: "77px"
                                              },
                                              attrs: {
                                                id: "textarea",
                                                placeholder: "Комментарии...",
                                                rows: "3",
                                                "max-rows": "6"
                                              },
                                              domProps: {
                                                value: _vm.data.comment
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.data,
                                                    "comment",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "col-sm-2 col-form-label",
                                            attrs: { for: "purpose" }
                                          },
                                          [_vm._v("Файлы ")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-10" },
                                          [
                                            _c("file-uploader", {
                                              attrs: {
                                                url: "http://localhost/medias",
                                                name: "input_name",
                                                idRequest: _vm.data.id,
                                                imgholder:
                                                  "id-to-hold-image-back"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "modal-footer" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-primary",
                                        attrs: { type: "button", id: "save" },
                                        on: { click: _vm.save }
                                      },
                                      [
                                        _vm._v(
                                          "\n                    Сохранить\n                  "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-secondary",
                                        attrs: {
                                          type: "button",
                                          "data-dismiss": "modal"
                                        },
                                        on: { click: _vm.close }
                                      },
                                      [
                                        _vm._v(
                                          "\n                    Закрыть\n                  "
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/RequestID.vue":
/*!**********************************************!*\
  !*** ./resources/js/src/views/RequestID.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestID_vue_vue_type_template_id_06c3b9a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequestID.vue?vue&type=template&id=06c3b9a0& */ "./resources/js/src/views/RequestID.vue?vue&type=template&id=06c3b9a0&");
/* harmony import */ var _RequestID_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestID.vue?vue&type=script&lang=js& */ "./resources/js/src/views/RequestID.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RequestID_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RequestID_vue_vue_type_template_id_06c3b9a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RequestID_vue_vue_type_template_id_06c3b9a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/RequestID.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/RequestID.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/RequestID.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestID_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RequestID.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/RequestID.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestID_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/RequestID.vue?vue&type=template&id=06c3b9a0&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/RequestID.vue?vue&type=template&id=06c3b9a0& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestID_vue_vue_type_template_id_06c3b9a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RequestID.vue?vue&type=template&id=06c3b9a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/RequestID.vue?vue&type=template&id=06c3b9a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestID_vue_vue_type_template_id_06c3b9a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestID_vue_vue_type_template_id_06c3b9a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);