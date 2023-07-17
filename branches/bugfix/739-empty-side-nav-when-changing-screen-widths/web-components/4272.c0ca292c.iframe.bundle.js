"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[4272],{"./dist/esm/ic-input-label_2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_input_label:()=>InputLabel,ic_input_validation:()=>InputValidation});__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js");var _icon,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-a77644e1.js"),_helpers_c4e378c4_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/helpers-c4e378c4.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/esm/types-dd515332.js");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}var InputLabel=function(){function InputLabel(hostRef){_classCallCheck(this,InputLabel),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.dark=!1,this.disabled=!1,this.error=!1,this.for=void 0,this.helperText="",this.label=void 0,this.readonly=!1,this.required=!1}return _createClass(InputLabel,[{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_c4e378c4_js__WEBPACK_IMPORTED_MODULE_8__.a)([{prop:this.label,propName:"label"}],"Input Label")}},{key:"render",value:function render(){var _class,_class2,_class3,disabled=this.disabled,readonly=this.readonly,label=this.label,required=this.required,helperText=this.helperText,error=this.error,dark=this.dark,labelText=required?label+" *":label,labelContent=readonly?""+labelText:(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)("label",{htmlFor:this.for},labelText),id=(0,_helpers_c4e378c4_js__WEBPACK_IMPORTED_MODULE_8__.O)(this.for);return(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)(_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.H,{class:(_class={},_class.disabled=disabled,_class.readonly=readonly,_class["with-helper"]=""!==helperText,_class)},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{variant:"label",class:(_class2={},_class2["readonly-label"]=readonly,_class2["error-label"]=error&&!(readonly||disabled),_class2.dark=dark,_class2)},labelContent),""!==helperText&&(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{variant:"caption",class:(_class3={},_class3.helpertext=!0,_class3["helpertext-normal"]=!disabled&&!readonly,_class3["helpertext-readonly"]=readonly,_class3)},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)("span",{id},helperText)))}}]),InputLabel}();InputLabel.style="ic-input-label{margin-bottom:var(--ic-space-xs)}ic-input-label.with-helper{margin-bottom:var(--ic-space-xxxs)}ic-input-label.disabled{color:var(--ic-color-tertiary-text)}ic-input-label.readonly{color:var(--ic-color-tertiary-text)}ic-input-label .helpertext{margin-top:var(--ic-space-xxxs)}ic-input-label .helpertext-normal{color:var(--ic-color-secondary-text)}ic-input-label .helpertext-readonly{color:var(--ic-color-tertiary-text)}ic-input-label .readonly-label{color:var(--ic-color-secondary-text)}ic-input-label .error-label{color:var(--ic-status-error)}ic-input-label .dark{color:var(--ic-architectural-white)}";var icon=((_icon={})[_types_dd515332_js__WEBPACK_IMPORTED_MODULE_9__.a.Warning]=_helpers_c4e378c4_js__WEBPACK_IMPORTED_MODULE_8__.Q,_icon[_types_dd515332_js__WEBPACK_IMPORTED_MODULE_9__.a.Error]=_helpers_c4e378c4_js__WEBPACK_IMPORTED_MODULE_8__.R,_icon[_types_dd515332_js__WEBPACK_IMPORTED_MODULE_9__.a.Success]=_helpers_c4e378c4_js__WEBPACK_IMPORTED_MODULE_8__.M,_icon),InputValidation=function(){function InputValidation(hostRef){_classCallCheck(this,InputValidation),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.ariaLiveMode="polite",this.for=void 0,this.fullWidth=!1,this.message=void 0,this.status=""}return _createClass(InputValidation,[{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_c4e378c4_js__WEBPACK_IMPORTED_MODULE_8__.a)([{prop:this.message,propName:"message"}],"Input Validation")}},{key:"render",value:function render(){var _class4,_class5,displayIcon=""!==this.status?icon[this.status]:"",id=(0,_helpers_c4e378c4_js__WEBPACK_IMPORTED_MODULE_8__.P)(this.for);return(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)(_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.H,{class:(_class4={},_class4[this.status]=""!==this.status,_class4.fullwidth=this.fullWidth,_class4)},""!==displayIcon&&(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)("span",{class:(_class5={},_class5["status-icon"]=!0,_class5["icon-"+this.status]=!0,_class5),innerHTML:displayIcon}),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{variant:"caption",class:"statustext"},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)("span",{"aria-live":this.ariaLiveMode,id},this.message)),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",{name:"validation-message-adornment"}))}},{key:"el",get:function get(){return(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.g)(this)}}]),InputValidation}();InputValidation.style="ic-input-validation{width:var(--input-width, 20rem);margin-top:var(--ic-space-xs);display:flex}ic-input-validation.fullwidth{width:100%}ic-input-validation span.status-icon{padding-right:var(--ic-space-xxs)}ic-input-validation span.status-icon>svg{height:1.25rem;width:1.25rem}ic-input-validation span.icon-success>svg{fill:var(--ic-status-success)}ic-input-validation span.icon-error>svg{fill:var(--ic-status-error)}ic-input-validation span.icon-warning>svg{fill:var(--ic-status-warning-mid)}ic-input-validation .statustext{flex-grow:1}"}}]);