"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[828],{"../web-components/dist/esm/OpenInNew-67a881e0.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>OpenInNew});var OpenInNew='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>'},"../web-components/dist/esm/ic-footer-link.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_footer_link:()=>FooterLink});__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_a77644e1_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../web-components/dist/esm/index-a77644e1.js"),_helpers_c4e378c4_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../web-components/dist/esm/helpers-c4e378c4.js"),_OpenInNew_67a881e0_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../web-components/dist/esm/OpenInNew-67a881e0.js");__webpack_require__("../web-components/dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var FooterLink=function(){function FooterLink(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,FooterLink),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.deviceSize=_helpers_c4e378c4_js__WEBPACK_IMPORTED_MODULE_9__.D.XL,this.footerConfig={small:!1,grouped:!1},this.foregroundColor=(0,_helpers_c4e378c4_js__WEBPACK_IMPORTED_MODULE_9__.l)(),this.download=!1,this.href=null,this.hreflang=void 0,this.referrerpolicy=void 0,this.rel=void 0,this.target=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(FooterLink,[{key:"componentWillLoad",value:function componentWillLoad(){this.footerConfig=this.inferConfig(this.el)}},{key:"footerResizeHandler",value:function footerResizeHandler(){this.footerConfig=this.inferConfig(this.el)}},{key:"footerThemeChangeHandler",value:function footerThemeChangeHandler(ev){var theme=ev.detail;this.foregroundColor=theme.mode}},{key:"inferConfig",value:function inferConfig(e){return null!==e.parentElement?e.parentElement.classList.contains("footer")?{small:e.parentElement.classList.contains("footer-small"),grouped:e.parentElement.classList.contains("footer-grouped")}:this.inferConfig(e.parentElement):{small:!1,grouped:!1}}},{key:"render",value:function render(){var _class,footerConfig=this.footerConfig,href=this.href,hreflang=this.hreflang,referrerpolicy=this.referrerpolicy,rel=this.rel,target=this.target,download=this.download,small=footerConfig.small,grouped=footerConfig.grouped;return(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_8__.H,{class:(_class={"footer-link":!0},_class["footer-link-"+(grouped?"grouped":"ungrouped")+"-"+(small?"small":"sparse")]=!0,_class["footer-link-"+this.foregroundColor]=!0,_class)},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_8__.h)("a",{href,hreflang,referrerPolicy:referrerpolicy,rel,download:!1!==download?download:null,target},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",null),"_blank"===target&&(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:"open-in-new-icon",innerHTML:_OpenInNew_67a881e0_js__WEBPACK_IMPORTED_MODULE_11__.O})))}},{key:"el",get:function get(){return(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_8__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}}]),FooterLink}();FooterLink.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.footer-link-ungrouped-sparse){--footer-link-margin-left:0;--footer-link-margin-right:2.5rem;--footer-link-margin-bottom:0}:host(.footer-link-ungrouped-small){--footer-link-margin-left:0;--footer-link-margin-right:0;--footer-link-margin-bottom:var(--ic-space-md)}:host(.footer-link-grouped-sparse){--footer-link-margin-left:0;--footer-link-margin-right:0;--footer-link-margin-bottom:var(--ic-space-md)}:host(.footer-link-grouped-small){--footer-link-margin-left:var(--ic-space-md);--footer-link-margin-right:0;--footer-link-margin-bottom:var(--ic-space-md)}:host(.footer-link){margin-left:var(--footer-link-margin-left);margin-right:var(--footer-link-margin-right);margin-bottom:var(--footer-link-margin-bottom)}:host(.footer-link) a,:host(.footer-link) a ::slotted(a){display:flex;align-items:flex-end;font-weight:var(--ic-font-weight-bold);color:inherit;width:-moz-fit-content;width:fit-content;font-size:var(--ic-font-size-regular)}:host(.footer-link) a:link,:host(.footer-link) a ::slotted(a:link){color:inherit;text-decoration:underline;font-weight:var(--ic-font-weight-bold)}:host(.footer-link) a:link>::slotted(svg),:host(.footer-link) a:link>::slotted(img),:host(.footer-link) a ::slotted(a:link>::slotted(svg)),:host(.footer-link) a ::slotted(a:link>::slotted(img)){padding:var(--ic-space-xxxs);pointer-events:none;transition:var(--ic-easing-transition-fast)}:host(.footer-link-light) ::slotted(svg){fill:var(--ic-architectural-white)}:host(.footer-link-dark) ::slotted(svg){fill:var(--ic-architectural-black)}:host(.footer-link) a:link:hover,:host(.footer-link) a:link:focus,:host(.footer-link) a ::slotted(a:link:hover),:host(.footer-link) a ::slotted(a:link:focus){border-bottom:0.25rem solid !important;margin-bottom:-0.25rem !important;text-decoration:none}@supports (text-decoration-thickness: 25%){:host(.footer-link) a:link:hover,:host(.footer-link) a:link:focus,:host(.footer-link) a ::slotted(a:link:hover),:host(.footer-link) a ::slotted(a:link:focus){text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:25%;border-bottom:0 !important;margin-bottom:0 !important}}:host(.footer-link) a:link:hover,:host(.footer-link) a ::slotted(a:link:hover){outline:none}:host(.footer-link) a:link:focus,:host(.footer-link) a ::slotted(a:link:focus){outline:var(--ic-hc-focus-outline)}:host(.footer-link) a:link:focus>::slotted(svg),:host(.footer-link) a:link:focus>::slotted(img),:host(.footer-link) a ::slotted(a:link:focus>::slotted(svg)),:host(.footer-link) a ::slotted(a:link:focus>::slotted(img)){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius)}:host(.footer-link) a:focus,:host(.footer-link) a ::slotted(a:focus){border-radius:var(--ic-border-radius);outline:var(--ic-hc-focus-outline);transition:var(--ic-transition-duration-fast)}:host(.footer-link) a:link:active,:host(.footer-link) a:link:focus:active,:host(.footer-link) a:link:visited:active,:host(.footer-link) a ::slotted(a:link:active),:host(.footer-link) a ::slotted(a:link:focus:active),:host(.footer-link) a ::slotted(a:link:visited:active){color:inherit;text-decoration:none}:host(.footer-link) a:hover,:host(.footer-link) a ::slotted(a:hover){text-decoration:none}.open-in-new-icon{padding-left:var(--ic-space-xxs)}.open-in-new-icon,.open-in-new-icon svg{height:var(--ic-space-md);width:var(--ic-space-md)}:host(.footer-link-light) .open-in-new-icon svg{fill:var(--ic-architectural-white)}:host(.footer-link-dark) .open-in-new-icon svg{fill:var(--ic-architectural-black)}@media screen and (min-width: 769px){:host(.footer-link.footer-link-ungrouped-sparse:last-of-type){margin-right:0}}@media (forced-colors: active){:host(.footer-link-light) ::slotted(svg),:host(.footer-link-dark) ::slotted(svg){fill:currentcolor}}'}}]);