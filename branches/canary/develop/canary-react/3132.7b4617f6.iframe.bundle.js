"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[3132],{"../web-components/dist/esm/ic-radio-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_radio_group:()=>RadioGroup});__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_813020f1_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../web-components/dist/esm/index-813020f1.js"),_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../web-components/dist/esm/helpers-24f6e762.js");__webpack_require__("../web-components/dist/esm/types-b2398b37.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}var RadioGroup=function(){function RadioGroup(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,RadioGroup),(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_14__.r)(this,hostRef),this.icChange=(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_14__.c)(this,"icChange",7),this.resizeObserver=null,this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){_this.checkOrientation()})),_this.resizeObserver.observe(_this.el)},this.handleKeyDown=function(event){switch(event.key){case"ArrowDown":case"ArrowRight":_this.radioOptions[_this.getNextItemToSelect(_this.selectedChild,!0)].click(),event.preventDefault();break;case"ArrowUp":case"ArrowLeft":_this.radioOptions[_this.getNextItemToSelect(_this.selectedChild,!1)].click(),event.preventDefault()}},this.getNextItemToSelect=function(currentItem,movingDown){var numRadios=_this.radioOptions.length-1;currentItem<1&&(currentItem=0);var nextItem=movingDown?currentItem+1:currentItem-1;return nextItem<0?nextItem=numRadios:nextItem>numRadios&&(nextItem=0),_this.radioOptions[nextItem].disabled&&(nextItem=_this.getNextItemToSelect(nextItem,movingDown)),nextItem},this.checkedValue="",this.currentOrientation=void 0,this.initialOrientation=void 0,this.selectedChild=-1,this.disabled=!1,this.helperText=void 0,this.hideLabel=!1,this.label=void 0,this.name=void 0,this.orientation="vertical",this.required=!1,this.size="default",this.small=!1,this.validationStatus="",this.validationText=""}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(RadioGroup,[{key:"orientationChangeHandler",value:function orientationChangeHandler(){this.initialOrientation=this.orientation}},{key:"disconnectedCallback",value:function disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}},{key:"componentWillLoad",value:function componentWillLoad(){(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_15__.j)(this.disabled,this.el),this.orientationChangeHandler(),this.currentOrientation=this.initialOrientation}},{key:"componentDidLoad",value:function componentDidLoad(){var _this2=this;this.radioOptions=Array.from(this.el.querySelectorAll("ic-radio-option")),this.radioOptions.forEach((function(radioOption,index){radioOption.selected||(radioOption.selected=_this2.checkedValue===radioOption.value),radioOption.name=_this2.name,radioOption.groupLabel=_this2.label,radioOption.selected&&(_this2.selectedChild=index,_this2.checkedValue=radioOption.value)})),this.radioOptions[0].shadowRoot.querySelector("input").tabIndex=this.selectedChild>0?-1:0,"horizontal"===this.initialOrientation&&void 0!==this.radioOptions&&(this.radioOptions.length>2||2===this.radioOptions.length&&((0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_15__.i)(this.radioOptions[0],"additional-field")||(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_15__.i)(this.radioOptions[1],"additional-field")))&&(this.currentOrientation="vertical"),(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_15__.f)(this.runResizeObserver),(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_15__.a)([{prop:this.label,propName:"label"},{prop:this.name,propName:"name"}],"Radio Group")}},{key:"selectHandler",value:function selectHandler(event){var _a,_this3=this;this.checkedValue=event.detail.value;var selectedOption=event.target;this.icChange.emit({value:this.checkedValue,selectedOption:{radio:selectedOption,textFieldValue:null===(_a=null==selectedOption?void 0:selectedOption.querySelector("ic-text-field"))||void 0===_a?void 0:_a.value}}),void 0!==this.radioOptions&&(this.radioOptions.forEach((function(radioOption,index){radioOption.selected=_this3.checkedValue===radioOption.value,radioOption.selected&&(_this3.selectedChild=index)})),this.radioOptions[0].shadowRoot.querySelector("input").tabIndex=this.selectedChild>0?-1:0)}},{key:"changeHandler",value:function changeHandler(){var selectedOption=this.radioOptions.findIndex((function(radioOption){return radioOption.selected}));selectedOption<0&&(this.radioOptions[0].shadowRoot.querySelector("input").tabIndex=0,this.selectedChild=selectedOption)}},{key:"checkOrientation",value:function checkOrientation(){if("horizontal"===this.initialOrientation){for(var totalWidth=0,i=0;i<this.radioOptions.length;i++)totalWidth+=this.radioOptions[i].clientWidth,i<this.radioOptions.length-1&&(totalWidth+=40);"horizontal"===this.currentOrientation&&totalWidth>this.radioContainer.clientWidth?this.currentOrientation="vertical":"vertical"===this.currentOrientation&&totalWidth<this.radioContainer.clientWidth&&(this.currentOrientation="horizontal")}}},{key:"render",value:function render(){var _class,_this4=this;return(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_15__.n)(!0,this.el,this.name,this.checkedValue,this.disabled),(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_14__.h)(_index_813020f1_js__WEBPACK_IMPORTED_MODULE_14__.H,{onKeyDown:this.handleKeyDown,class:{small:this.small||"small"===this.size}},(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_14__.h)("div",{role:"radiogroup","aria-label":this.label+(this.required?", required":"")},!this.hideLabel&&(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_14__.h)("ic-input-label",{class:(_class={},_class[""+this.validationStatus]=!0,_class),label:this.label,helperText:this.helperText,required:this.required,disabled:this.disabled}),(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_14__.h)("div",{class:{"radio-buttons-container":!0,horizontal:"horizontal"===this.currentOrientation},ref:function ref(el){return _this4.radioContainer=el}},(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_14__.h)("slot",null))),(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_15__.s)(this.validationStatus,this.disabled)&&(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_14__.h)("ic-input-validation",{ariaLiveMode:"polite",status:this.validationStatus,message:this.validationText}))}},{key:"el",get:function get(){return(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_14__.g)(this)}}],[{key:"watchers",get:function get(){return{orientation:["orientationChangeHandler"]}}}]),RadioGroup}();RadioGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}ic-input-label.error{color:var(--ic-status-error)}ic-input-validation{margin-top:var(--ic-space-sm)}:host(.small) ic-input-validation{margin-top:calc(var(--ic-space-sm) / 2)}ic-input-label ic-typography{margin-bottom:var(--ic-space-sm)}:host(.small) ic-input-label ic-typography{margin-bottom:calc(var(--ic-space-sm) / 2)}:host .radio-buttons-container{display:flex;flex-direction:column;gap:var(--ic-space-xxs)}:host(.small) .radio-buttons-container{gap:var(--ic-space-xxxs)}:host .radio-buttons-container.horizontal{display:flex;flex-direction:row;gap:calc(var(--ic-space-xl) + var(--ic-space-xs))}:host(.small) .radio-buttons-container.horizontal{gap:var(--ic-space-xl)}'}}]);