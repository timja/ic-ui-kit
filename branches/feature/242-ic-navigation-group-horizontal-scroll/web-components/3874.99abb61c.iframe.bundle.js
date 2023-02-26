"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[3874],{"./dist/esm/ic-radio-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_radio_group:()=>RadioGroup});__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./dist/esm/index-1500de1f.js"),_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./dist/esm/helpers-db370ed6.js");__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var RadioGroup=function(){function RadioGroup(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,RadioGroup),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_13__.r)(this,hostRef),this.icChange=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_13__.c)(this,"icChange",7),this.handleKeyDown=function(event){switch(event.key){case"ArrowDown":case"ArrowRight":_this.radioOptions[_this.getNextItemToSelect(_this.selectedChild,!0)].selected=!0,event.preventDefault();break;case"ArrowUp":case"ArrowLeft":_this.radioOptions[_this.getNextItemToSelect(_this.selectedChild,!1)].selected=!0,event.preventDefault()}},this.getNextItemToSelect=function(currentItem,movingDown){var numRadios=_this.radioOptions.length-1;currentItem<1&&(currentItem=0);var nextItem=movingDown?currentItem+1:currentItem-1;return nextItem<0?nextItem=numRadios:nextItem>numRadios&&(nextItem=0),_this.radioOptions[nextItem].disabled&&(nextItem=_this.getNextItemToSelect(nextItem,movingDown)),nextItem},this.label=void 0,this.name=void 0,this.required=!1,this.hideLabel=!1,this.disabled=!1,this.helperText=void 0,this.small=!1,this.validationStatus="",this.validationText="",this.checkedValue="",this.selectedChild=-1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(RadioGroup,[{key:"selectHandler",value:function selectHandler(event){var _this2=this;this.checkedValue=event.detail.value,this.icChange.emit({value:this.checkedValue}),void 0!==this.radioOptions&&(this.radioOptions.forEach((function(radioOption,index){radioOption.selected=_this2.checkedValue===radioOption.value,radioOption.selected&&(_this2.selectedChild=index)})),this.radioOptions[0].shadowRoot.querySelector("input").tabIndex=this.selectedChild>0?-1:0)}},{key:"componentDidLoad",value:function componentDidLoad(){var _this3=this;this.radioOptions=Array.from(this.host.querySelectorAll("ic-radio-option")),this.radioOptions.forEach((function(radioOption,index){radioOption.selected||(radioOption.selected=_this3.checkedValue===radioOption.value),radioOption.name=_this3.name,radioOption.groupLabel=_this3.label,radioOption.selected&&(_this3.selectedChild=index,_this3.checkedValue=radioOption.value)})),this.radioOptions[0].shadowRoot.querySelector("input").tabIndex=this.selectedChild>0?-1:0,(0,_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_14__.a)([{prop:this.label,propName:"label"},{prop:this.name,propName:"name"}],"Radio Group")}},{key:"render",value:function render(){var _class;return(0,_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_14__.e)(!0,this.host,this.name,this.checkedValue,this.disabled),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_13__.h)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_13__.H,{onKeyDown:this.handleKeyDown},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{role:"radiogroup","aria-label":this.label+(this.required?", required":"")},!this.hideLabel&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_13__.h)("ic-input-label",{class:(_class={},_class[""+this.validationStatus]=!0,_class),label:this.label,helperText:this.helperText,required:this.required,disabled:this.disabled}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot",null)),(0,_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_14__.j)(this.validationStatus,this.disabled)&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_13__.h)("ic-input-validation",{ariaLiveMode:"polite",status:this.validationStatus,message:this.validationText}))}},{key:"host",get:function get(){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_13__.g)(this)}}]),RadioGroup}();RadioGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}ic-input-label.error{color:var(--ic-status-error)}ic-input-label ic-typography{margin-bottom:var(--ic-space-sm)}'}}]);