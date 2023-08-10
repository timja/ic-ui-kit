/*! For license information please see 4500.f83cd90c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4500],{"../web-components/dist/esm/ic-horizontal-scroll.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_horizontal_scroll:()=>HorizontalScroll});__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var _index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("../web-components/dist/esm/index-fd30b77e.js"),_helpers_2e5e2579_js__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("../web-components/dist/esm/helpers-2e5e2579.js"),_types_6e73d3e1_js__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("../web-components/dist/esm/types-6e73d3e1.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var HorizontalScroll=function(){function HorizontalScroll(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,HorizontalScroll),(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_29__.r)(this,hostRef),this.buttonStateSet=!1,this.focusHandler=function(event){_this.itemFocusHandler(Array.from(_this.items).indexOf(event.target))},this.resizeObserverCallback=function(){_this.el.clientWidth>=_this.itemsContainerEl.scrollWidth?_this.itemOverflow=!1:_this.itemOverflow=(0,_helpers_2e5e2579_js__WEBPACK_IMPORTED_MODULE_30__.N)(_this.itemsContainerEl),_this.itemOverflow&&(_this.lastItemVisible=_this.itemsContainerEl.offsetWidth+_this.itemsContainerEl.scrollLeft>=_this.itemsContainerEl.scrollWidth)},this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){_this.resizeObserverCallback()})),_this.resizeObserver.observe(_this.itemsContainerEl)},this.scrollLeft=function(){_this.scrollItemIntoView(_this.getCurrentLeftItem()-1)},this.scrollRight=function(){_this.scrollItemIntoView(_this.getCurrentLeftItem()+1)},this.longScrollRight=function(){_this.scrollRight(),_this.scrollDelay=window.setTimeout(_this.longScrollRight,200)},this.longScrollLeft=function(){_this.scrollLeft(),_this.scrollDelay=window.setTimeout(_this.longScrollLeft,200)},this.leftArrowMouseDownHandler=function(e){e.preventDefault(),_this.scrollDelay=window.setTimeout(_this.longScrollLeft,200)},this.rightArrowMouseDownHandler=function(e){e.preventDefault(),_this.scrollDelay=window.setTimeout(_this.longScrollRight,200)},this.arrowMouseUpHandler=function(){window.clearTimeout(_this.scrollDelay)},this.getCurrentLeftItem=function(){var index=_this.itemOffsets.findIndex((function(el){return el>Math.round(_this.itemsContainerEl.scrollLeft)}));return index<0?0:index},this.scrollHandler=function(){window.clearTimeout(_this.isScrolling),_this.isScrolling=window.setTimeout(_this.scrollStopped,50)},this.scrollStopped=function(){var scrollLeft=Math.round(_this.itemsContainerEl.scrollLeft);!1===_this.buttonStateSet&&(_this.firstItemVisible=0===scrollLeft,_this.lastItemVisible=_this.itemsContainerEl.offsetWidth+scrollLeft>=_this.itemsContainerEl.scrollWidth),_this.buttonStateSet=!1},this.firstItemVisible=!0,this.itemOverflow=!1,this.lastItemVisible=!1,this.appearance="default"}var _scrollItemIntoView;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(HorizontalScroll,[{key:"componentWillLoad",value:function componentWillLoad(){var _this2=this;this.itemsContainerEl=this.el.children[0],this.itemsContainerEl.addEventListener("scroll",this.scrollHandler),this.items=(0,_helpers_2e5e2579_js__WEBPACK_IMPORTED_MODULE_30__.w)(this.itemsContainerEl)||Array.from(this.itemsContainerEl.children),this.items.forEach((function(item){item.addEventListener&&item.addEventListener("focus",_this2.focusHandler)}))}},{key:"componentDidLoad",value:function componentDidLoad(){var _this3=this,runningTotal=0;this.itemOffsets=this.items.map((function(item){return runningTotal+=item.offsetWidth})),(0,_helpers_2e5e2579_js__WEBPACK_IMPORTED_MODULE_30__.c)(this.runResizeObserver);var scrollArrows=Array.from(this.el.shadowRoot.querySelectorAll("div"));["mouseup","mouseleave"].forEach((function(event){scrollArrows.forEach((function(arrow){return arrow.addEventListener(event,_this3.arrowMouseUpHandler)}))}))}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _this4=this;void 0!==this.resizeObserver&&this.resizeObserver.disconnect();var scrollArrows=Array.from(this.el.shadowRoot.querySelectorAll("div"));["mouseup","mouseleave"].forEach((function(event){scrollArrows.forEach((function(arrow){return arrow.removeEventListener(event,_this4.arrowMouseUpHandler)}))})),this.items.forEach((function(item){item.removeEventListener&&item.removeEventListener("focus",_this4.focusHandler)})),this.itemsContainerEl.removeEventListener("scroll",this.scrollHandler)}},{key:"scrollItemIntoView",value:(_scrollItemIntoView=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(itemPosition){var newScrollPos;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.firstItemVisible=itemPosition<=0,newScrollPos=itemPosition<=0?0:this.itemOffsets[itemPosition-1],this.lastItemVisible=this.itemsContainerEl.offsetWidth+newScrollPos>=this.itemsContainerEl.scrollWidth,this.buttonStateSet=!0,this.itemsContainerEl.scrollLeft=newScrollPos;case 5:case"end":return _context.stop()}}),_callee,this)}))),function scrollItemIntoView(_x){return _scrollItemIntoView.apply(this,arguments)})},{key:"itemFocusHandler",value:function itemFocusHandler(itemPosition){this.itemOverflow&&this.scrollItemIntoView(itemPosition)}},{key:"render",value:function render(){var _class,_class2,_class3,appearance=this.appearance,firstItemVisible=this.firstItemVisible,lastItemVisible=this.lastItemVisible,itemOverflow=this.itemOverflow;return(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_29__.h)(_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_29__.H,{class:(_class={},_class.visible=itemOverflow,_class.dark=this.appearance===_types_6e73d3e1_js__WEBPACK_IMPORTED_MODULE_31__.I.Dark,_class.light=this.appearance===_types_6e73d3e1_js__WEBPACK_IMPORTED_MODULE_31__.I.Light,_class)},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_29__.h)("div",{"aria-hidden":"true",class:(_class2={},_class2["scroll-container-left"]=!0,_class2.hidden=!itemOverflow,_class2.disabled=firstItemVisible,_class2),role:"tab"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_29__.h)("ic-button",{class:"scroll-arrow",variant:"icon","aria-label":"Scroll left",appearance,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n  <path d="M13.0875 6.175L11.9125 5L6.91251 10L11.9125 15L13.0875 13.825L9.27084 10L13.0875 6.175Z"/>\n</svg>',disabled:firstItemVisible,tabindex:"-1",onClick:this.scrollLeft,onMouseDown:this.leftArrowMouseDownHandler}),(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_29__.h)("span",{class:"scroll-splitter-left"})),(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_29__.h)("slot",null),(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_29__.h)("div",{"aria-hidden":"true",class:(_class3={},_class3["scroll-container-right"]=!0,_class3.hidden=!itemOverflow,_class3.disabled=lastItemVisible,_class3),role:"tab"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_29__.h)("span",{class:"scroll-splitter-right"}),(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_29__.h)("ic-button",{class:"scroll-arrow",variant:"icon","aria-label":"Scroll right",appearance,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n  <path d="M8.08748 5L6.91248 6.175L10.7291 10L6.91248 13.825L8.08748 15L13.0875 10L8.08748 5Z"/>\n</svg>',disabled:lastItemVisible,tabindex:"-1",onClick:this.scrollRight,onMouseDown:this.rightArrowMouseDownHandler})))}},{key:"el",get:function get(){return(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_29__.g)(this)}}]),HorizontalScroll}();HorizontalScroll.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{--border-bottom-color:var(--ic-architectural-300);--splitter-color:var(--ic-architectural-100);display:flex;max-width:100%}:host(.light){--splitter-color:var(--ic-keyline-lighten-rgb)}:host(.dark){--splitter-color:var(--ic-keyline-darken-rgb)}::slotted(*){overflow-x:scroll;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;-ms-overflow-style:none;margin:calc(var(--ic-space-xs) * -1) !important;padding:var(--ic-space-xs) !important}:host(.visible) ::slotted(*){margin:calc(var(--ic-space-xs) * -1) 0 !important;padding:var(--ic-space-xs) !important}.tabs-container::-webkit-scrollbar{display:none}.scroll-container-left,.scroll-container-right{display:flex}.scroll-container-left{margin-left:var(--ic-space-xxs)}.scroll-container-right{margin-right:var(--ic-space-xxs)}.hidden{display:none}.scroll-arrow{margin:var(--ic-space-xxs) 0 var(--ic-space-xs) 0}.disabled .ic-tooltip-container{display:none !important}.scroll-splitter-left,.scroll-splitter-right{display:flex;height:var(--ic-space-lg);width:var(--ic-space-1px);margin-top:var(--ic-space-xs);border-radius:var(--ic-space-1px);background-color:var(--splitter-color)}.scroll-splitter-left{margin-left:calc(var(--ic-space-xxs) - var(--ic-space-1px))}.scroll-splitter-right{margin-right:calc(var(--ic-space-xxs) - var(--ic-space-1px))}.disabled .scroll-splitter-left,.disabled .scroll-splitter-right{background-color:transparent}.disabled ic-button>svg{color:var(--ic-keyline-darken-rgb)}:host(.dark) .disabled ic-button>svg,:host(.light) .disabled ic-button>svg{color:var(--splitter-color) !important}'}}]);