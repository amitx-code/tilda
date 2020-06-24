(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Three.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Three.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./resources/js/node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route */ "./resources/js/src/route.js");
/* harmony import */ var _comps___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/ */ "./resources/js/src/views/comps/index.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['row'],
  // from the parent FriendsTable (if exists)
  data: function data() {
    return {
      data: [],
      show: true,
      horizontal: {
        label: 'col-3',
        input: 'col-9'
      },
      options: ['Option 1', 'Option 2', 'Option 3'],
      formCollapsed: true,
      total: 0,
      ab: 0
    };
  },
  computed: {//            ab(){
    //                return this.data.two1*2
    //            },
  },
  methods: {
    onInput: function onInput(e) {
      console.log(e.target.innerText);
      this.data.two1 = e.target.innerText;
      this.ab = this.data.two1 * 2;
    },
    next: function next() {
      var _this = this;

      axios.post(Object(_route__WEBPACK_IMPORTED_MODULE_1__["default"])("games.update"), {
        params: {
          method: 'saveGames',
          param: this.data
        }
      }).then(function (response) {
        if (response.data.result) {
          _this.$store.dispatch('getDataGames');
        }
      })["catch"](function (error) {
        return console.log(error.message);
      });
      var path = "/games/three";
      this.$router.push({
        path: path
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Three.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Three.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.w-240 {\n  width: 240px;\n}\n.bigbox { height: 28px; width: 28px\n}\n.page-item.active .page-link {\n\n  background-color: #3490dc;\n  border-color: #3490dc;\n}\n.btnimage{\n  max-width: 50px;\n  max-height: 50px;\n}\ntable {\n  border: 1px solid #69c;\n  border-collapse: separate;\n  empty-cells: hide;\n}\ninput {\n  width: 100%;\n  padding: 10px;\n  margin: 0px;\n}\ntable .last, td:last-child {\n  padding: 2px 24px 2px 0px;\n}\nth, td {border: 2px solid #69c;}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Three.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Three.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Three.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Three.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Three.vue?vue&type=template&id=15ed41e4&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Three.vue?vue&type=template&id=15ed41e4& ***!
  \*******************************************************************************************************************************************************************************************************/
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
                      _c("CCardBody", [
                        _c(
                          "div",
                          {
                            staticClass: "row",
                            staticStyle: {
                              "margin-top": "10px",
                              "text-align": "center",
                              "font-size": "20px"
                            }
                          },
                          [
                            _c("div", { staticClass: "col-sm-12" }, [
                              _vm._v("\n             Привет\n              ")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "row",
                            staticStyle: {
                              "margin-top": "10px",
                              "text-align": "center",
                              "font-size": "50px"
                            }
                          },
                          [
                            _c("div", { staticClass: "col-sm-12" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.data.three1,
                                    expression: "data.three1"
                                  }
                                ],
                                staticClass: "bigbox",
                                attrs: { type: "checkbox" },
                                domProps: {
                                  checked: Array.isArray(_vm.data.three1)
                                    ? _vm._i(_vm.data.three1, null) > -1
                                    : _vm.data.three1
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = _vm.data.three1,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            _vm.data,
                                            "three1",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            _vm.data,
                                            "three1",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(_vm.data, "three1", $$c)
                                    }
                                  }
                                }
                              })
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _vm.data.three1
                          ? _c(
                              "div",
                              {
                                staticClass: "row",
                                staticStyle: {
                                  "margin-top": "10px",
                                  "text-align": "center",
                                  "font-size": "50px"
                                }
                              },
                              [
                                _c("div", { staticClass: "col-sm-12" }, [
                                  _c("img", {
                                    staticClass: "btnimage pull-right",
                                    attrs: { src: "img/next.png" },
                                    on: { click: _vm.next }
                                  })
                                ])
                              ]
                            )
                          : _vm._e()
                      ])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Three.vue":
/*!******************************************!*\
  !*** ./resources/js/src/views/Three.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Three_vue_vue_type_template_id_15ed41e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Three.vue?vue&type=template&id=15ed41e4& */ "./resources/js/src/views/Three.vue?vue&type=template&id=15ed41e4&");
/* harmony import */ var _Three_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Three.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Three.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Three_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Three.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/Three.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Three_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Three_vue_vue_type_template_id_15ed41e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Three_vue_vue_type_template_id_15ed41e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Three.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Three.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/Three.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Three_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Three.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Three.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Three_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Three.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/Three.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Three_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Three.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Three.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Three_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Three_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Three_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Three_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Three_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/Three.vue?vue&type=template&id=15ed41e4&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/Three.vue?vue&type=template&id=15ed41e4& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Three_vue_vue_type_template_id_15ed41e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Three.vue?vue&type=template&id=15ed41e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Three.vue?vue&type=template&id=15ed41e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Three_vue_vue_type_template_id_15ed41e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Three_vue_vue_type_template_id_15ed41e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);