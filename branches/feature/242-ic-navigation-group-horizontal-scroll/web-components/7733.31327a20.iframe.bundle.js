/*! For license information please see 7733.31327a20.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[7733],{"./dist/esm/ic-select.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_select:()=>Select});__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__=__webpack_require__("./dist/esm/index-1500de1f.js"),_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_35__=__webpack_require__("./dist/esm/helpers-db370ed6.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_36__=__webpack_require__("./dist/esm/types-dd515332.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Expand='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M7 9.5L12 14.5L17 9.5H7Z" fill="currentColor" />\n</svg>\n',Clear='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n<path d="M12.6666 4.27334L11.7266 3.33334L7.99998 7.06001L4.27331 3.33334L3.33331 4.27334L7.05998 8.00001L3.33331 11.7267L4.27331 12.6667L7.99998 8.94001L11.7266 12.6667L12.6666 11.7267L8.93998 8.00001L12.6666 4.27334Z" fill="currentColor" />\n</svg>\n',inputIds=0,Select=function(){function Select(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Select),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.r)(this,hostRef),this.icChange=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.c)(this,"icChange",7),this.icFocus=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.c)(this,"icFocus",7),this.icBlur=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.c)(this,"icBlur",7),this.inputId="ic-select-input-"+inputIds++,this.menuId=this.inputId+"-menu",this.inheritedAttributes={},this.isMenuEnabled=function(){return(null===_this.searchableSelectInputValue||""===_this.searchableSelectInputValue)&&0===_this.charactersUntilSuggestions||_this.searchableSelectInputValue&&_this.searchableSelectInputValue.length>=_this.charactersUntilSuggestions},this.setOptionsValuesFromLabels=function(){_this.options.length>0&&_this.options.map((function(option){option.value||(option.value=option.label)}))},this.setTextColor=function(){0===_this.nativeSelectElement.selectedIndex?_this.nativeSelectElement.className="placeholder":_this.nativeSelectElement.className="select-option-selected"},this.setMenuChange=function(open){_this.open!==open&&(_this.open=open)},this.getLabelFromValue=function(value){return(0,_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_35__.w)(value,_this.options)},this.getValueFromLabel=function(label){var _a;return null===(_a=_this.options.find((function(option){return option.label===label})))||void 0===_a?void 0:_a.value},this.getFilteredChildMenuOptions=function(option){var children=option.children;children=(0,_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_35__.v)(option.children,_this.includeDescriptionsInSearch,_this.searchableSelectInputValue,_this.searchMatchPosition);var newOption=Object.assign({},option);return newOption.children=children,newOption},this.handleNativeSelectChange=function(){_this.icChange.emit({value:_this.nativeSelectElement.value}),_this.setTextColor()},this.handleCustomSelectChange=function(event){_this.searchable&&event.detail.label===_this.emptyOptionListText?_this.searchableSelectElement.focus():(_this.searchable&&(_this.searchableSelectInputValue=_this.getLabelFromValue(event.detail.value)),_this.ariaActiveDescendant=event.detail.optionId,_this.icChange.emit({value:event.detail.value}))},this.handleMenuChange=function(event){_this.open=event.detail.open,_this.searchable&&_this.handleFocusIndicatorDisplay()},this.handleFocusIndicatorDisplay=function(){var focusIndicator=_this.host.shadowRoot.querySelector(".focus-indicator");_this.open?focusIndicator.classList.add("focus-indicator-enabled"):focusIndicator.classList.remove("focus-indicator-enabled")},this.handleMouseDown=function(event){_this.open||event.preventDefault()},this.handleClick=function(event){_this.noOptions=null,_this.menu.options=_this.options,0!==event.detail&&_this.isMenuEnabled()&&_this.menu.handleClickOpen()},this.handleExpandIconMouseDown=function(event){_this.disabled||(event.preventDefault(),_this.searchableSelectElement.focus(),_this.handleClick(event))},this.handleClear=function(event){event.stopPropagation(),_this.noOptions=null,_this.icChange.emit({value:null}),_this.searchable?(_this.searchableSelectElement.value=null,_this.searchableSelectInputValue=null,_this.menu.options=_this.options,_this.searchableSelectElement.focus(),_this.isMenuEnabled()||_this.setMenuChange(!1)):_this.customSelectElement.focus()},this.handleKeyDown=function(event){event.cancelBubble=!0,_this.open||(_this.noOptions=null,_this.menu.options=_this.options),_this.open&&"Enter"===event.key?_this.setMenuChange(!1):("ArrowDown"!==event.key&&"ArrowUp"!==event.key||null===_this.noOptions)&&_this.isMenuEnabled()&&_this.menu.handleKeyboardOpen(event)},this.handleClearButtonFocus=function(){_this.clearButtonFocused=!0},this.handleClearButtonBlur=function(){_this.clearButtonFocused=!1},this.handleSearchableSelectInput=function(event){_this.searchableSelectInputValue=event.target.value,void 0===_this.getValueFromLabel(_this.searchableSelectInputValue)&&_this.icChange.emit({value:null}),_this.isMenuEnabled()?_this.setMenuChange(!0):_this.setMenuChange(!1);var options=_toConsumableArray(_this.options),isGrouped=!1,newFilteredOptions=[];options.map((function(option){option.children&&(isGrouped=!0)}));var menuOptionsFiltered=(0,_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_35__.v)(options,_this.includeDescriptionsInSearch,_this.searchableSelectInputValue,_this.searchMatchPosition);isGrouped?options.map((function(option){_this.includeGroupTitlesInSearch&&-1!==menuOptionsFiltered.indexOf(option)?newFilteredOptions.push(option):newFilteredOptions.push(_this.getFilteredChildMenuOptions(option))})):newFilteredOptions=menuOptionsFiltered;var noChildOptionsWhenFiltered=!1;isGrouped&&(noChildOptionsWhenFiltered=!0,newFilteredOptions.map((function(option){option.children.length>0&&(noChildOptionsWhenFiltered=!1)})));var noOptions=[{label:_this.emptyOptionListText,value:""}];newFilteredOptions.length>0&&!noChildOptionsWhenFiltered?(_this.noOptions=null,_this.filteredOptions=newFilteredOptions):(_this.noOptions=noOptions,_this.filteredOptions=_this.noOptions),_this.debounceAriaLiveUpdate()},this.updateSearchableSelectResultAriaLive=function(){var searchableSelectResultsStatusEl=_this.host.shadowRoot.querySelector(".searchable-select-results-status");null!==_this.noOptions?searchableSelectResultsStatusEl.innerText=_this.emptyOptionListText:searchableSelectResultsStatusEl.innerText=""},this.onFocus=function(){_this.icFocus.emit()},this.onBlur=function(event){!_this.searchable||event.relatedTarget===_this.menu||_this.clearButton&&event.relatedTarget===_this.clearButton||(_this.setMenuChange(!1),_this.handleFocusIndicatorDisplay()),_this.icBlur.emit()},this.handleFormReset=function(){_this.value=_this.initialValue,_this.searchable&&(_this.searchableSelectInputValue=null)},this.label=void 0,this.options=[],this.required=!1,this.hideLabel=!1,this.disabled=!1,this.readonly=!1,this.placeholder="Select an option",this.helperText="",this.small=!1,this.fullWidth=!1,this.validationStatus="",this.validationText="",this.value=void 0,this.name=this.inputId,this.showClearButton=!1,this.searchable=!1,this.includeDescriptionsInSearch=!1,this.includeGroupTitlesInSearch=!1,this.searchMatchPosition="anywhere",this.charactersUntilSuggestions=0,this.emptyOptionListText="No results found",this.open=!1,this.clearButtonFocused=!1,this.searchableSelectInputValue=null,this.filteredOptions=this.options,this.ariaActiveDescendant=void 0,this.noOptions=null,this.initialValue=this.value}var _setFocus;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Select,[{key:"watchOptionsHandler",value:function watchOptionsHandler(){this.setOptionsValuesFromLabels(),this.filteredOptions=this.options}},{key:"setFocus",value:(_setFocus=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.nativeSelectElement?this.nativeSelectElement.focus():this.customSelectElement?this.customSelectElement.focus():this.searchableSelectElement&&this.searchableSelectElement.focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"debounceAriaLiveUpdate",value:function debounceAriaLiveUpdate(){var _this2=this;clearTimeout(this.debounce),window.setTimeout((function(){_this2.updateSearchableSelectResultAriaLive()}),800)}},{key:"componentWillLoad",value:function componentWillLoad(){this.inheritedAttributes=(0,_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_35__.m)(this.host,[].concat(_toConsumableArray(_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_35__.n),["tabindex","title"])),this.setOptionsValuesFromLabels(),(0,_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_35__.d)(this.host,this.handleFormReset)}},{key:"componentDidRender",value:function componentDidRender(){this.nativeSelectElement&&!this.disabled&&this.setTextColor()}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_35__.a)([{prop:this.label,propName:"label"}],"Select")}},{key:"disconnectedCallback",value:function disconnectedCallback(){(0,_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_35__.r)(this.host,this.handleFormReset)}},{key:"render",value:function render(){var _this3=this,small=this.small,disabled=this.disabled,fullWidth=this.fullWidth,helperText=this.helperText,hideLabel=this.hideLabel,label=this.label,menuId=this.menuId,name=this.name,options=this.options,placeholder=this.placeholder,readonly=this.readonly,required=this.required,searchable=this.searchable,showClearButton=this.showClearButton,validationStatus=this.validationStatus,validationText=this.validationText,value=this.value;(0,_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_35__.e)(!0,this.host,name,value,disabled);var invalid=validationStatus===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_36__.a.Error?"true":"false",describedBy=(0,_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_35__.h)(this.inputId,""!==helperText,(0,_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_35__.j)(this.validationStatus,this.disabled)).trim();return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.H,null,(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("ic-input-container",{readonly},!hideLabel&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("ic-input-label",{for:this.inputId,label,helperText,required,disabled,readonly}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("ic-input-component-container",{ref:function ref(el){return _this3.anchorEl=el},class:{"menu-open":this.open},small,fullWidth,disabled,readonly,validationStatus},readonly?(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("ic-typography",null,(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("p",null,this.getLabelFromValue(value))):(0,_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_35__.x)()?(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("select",Object.assign({ref:function ref(el){return _this3.nativeSelectElement=el},disabled,onChange:this.handleNativeSelectChange,required,id:this.inputId,"aria-label":label,"aria-describedby":describedBy,"aria-invalid":invalid,onBlur:this.onBlur,onFocus:this.onFocus},this.inheritedAttributes),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("option",{value:"",selected:!0,disabled:!showClearButton},placeholder),options.map((function(option){return option.children?(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("optgroup",{label:option.label},option.children.map((function(option){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("option",{value:option.value,disabled:option.disabled,selected:option.value===value},option.label)}))):(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("option",{value:option.value,disabled:option.disabled,selected:option.value===value},option.label)}))):searchable?(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("div",{class:"searchable-select-container"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("input",{class:"select-input",role:"combobox","aria-label":label,"aria-describedby":describedBy,"aria-activedescendant":this.ariaActiveDescendant,"aria-autocomplete":"list","aria-expanded":this.open?"true":"false","aria-invalid":invalid,"aria-required":required?"true":"false","aria-controls":menuId,ref:function ref(el){return _this3.searchableSelectElement=el},id:this.inputId,value:this.searchableSelectInputValue,placeholder,disabled,onInput:this.handleSearchableSelectInput,onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.onFocus,onBlur:this.onBlur}),this.searchableSelectInputValue&&(showClearButton||searchable)&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("div",{class:"clear-button-container"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("ic-button",{id:"clear-button",ref:function ref(el){return _this3.clearButton=el},"aria-label":this.searchableSelectInputValue&&null===value?"Clear input":"Clear selection",class:"clear-button",innerHTML:Clear,onClick:this.handleClear,onFocus:this.handleClearButtonFocus,onBlur:this.handleClearButtonBlur,size:small?"small":"default",variant:"icon",appearance:this.clearButtonFocused?_types_dd515332_js__WEBPACK_IMPORTED_MODULE_36__.I.Light:_types_dd515332_js__WEBPACK_IMPORTED_MODULE_36__.I.Dark}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("div",{class:"divider"})),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("span",{onMouseDown:this.handleExpandIconMouseDown,class:{"expand-icon":!0,"expand-icon-open":this.open,"expand-icon-filled":!(null==value||""===value),"expand-icon-disabled":!this.isMenuEnabled()},innerHTML:Expand,"aria-hidden":"true"}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("div",{"aria-live":"polite",role:"status",class:"searchable-select-results-status"})):(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("div",{class:"select-container"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("button",{class:"select-input",ref:function ref(el){return _this3.customSelectElement=el},id:this.inputId,"aria-label":label+", "+(this.getLabelFromValue(value)||placeholder)+(required?", required":""),"aria-describedby":describedBy,"aria-invalid":invalid,"aria-haspopup":"listbox","aria-expanded":this.open?"true":"false","aria-owns":menuId,"aria-controls":menuId,disabled,onBlur:this.onBlur,onFocus:this.onFocus,onClick:this.handleClick,onMouseDown:this.handleMouseDown,onKeyDown:this.handleKeyDown},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("ic-typography",{variant:"body",class:{"value-text":!0,placeholder:void 0===this.getLabelFromValue(value)}},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("p",null,this.getLabelFromValue(value)||placeholder)),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("div",{class:"select-input-end"},value&&showClearButton&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("div",{class:"divider"}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("span",{class:{"expand-icon":!0,"expand-icon-open":this.open,"expand-icon-filled":!(null==value||""===value)},innerHTML:Expand,"aria-hidden":"true"}))),value&&showClearButton&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("ic-button",{id:"clear-button","aria-label":"Clear selection",class:"clear-button",innerHTML:Clear,onClick:this.handleClear,onFocus:this.handleClearButtonFocus,onBlur:this.handleClearButtonBlur,size:small?"small":"default",variant:"icon",appearance:this.clearButtonFocused?_types_dd515332_js__WEBPACK_IMPORTED_MODULE_36__.I.Light:_types_dd515332_js__WEBPACK_IMPORTED_MODULE_36__.I.Dark}))),!(0,_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_35__.x)()&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("ic-menu",{class:{"no-results":null!==this.noOptions},ref:function ref(el){return _this3.menu=el},inputEl:searchable?this.searchableSelectElement:this.customSelectElement,inputLabel:label,anchorEl:this.anchorEl,small,menuId,open:this.open,options:searchable?this.filteredOptions:options,value,fullWidth,onIcMenuStateChange:this.handleMenuChange,onIcOptionSelect:this.handleCustomSelectChange,parentEl:this.host}),(0,_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_35__.j)(this.validationStatus,this.disabled)&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.h)("ic-input-validation",{class:{"menu-open":this.open},ariaLiveMode:"polite",status:validationStatus,message:validationText,for:this.inputId})))}},{key:"host",get:function get(){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_34__.g)(this)}}],[{key:"watchers",get:function get(){return{options:["watchOptionsHandler"]}}}]),Select}();Select.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{position:relative}:host([full-width]){width:100%}ic-input-component-container:hover{--border-color:var(--ic-action-dark-hover)}ic-input-component-container:active{--border-color:var(--ic-action-dark-active);color:var(--ic-action-dark-active)}ic-input-component-container.menu-open{--border-color:var(--ic-architectural-400);color:var(--ic-action-dark)}ic-input-validation .status-icon,ic-input-validation .statustext{visibility:visible}ic-input-validation.menu-open .status-icon,ic-input-validation.menu-open .statustext{visibility:hidden;transition:visibility 0s}ic-input-label{margin-bottom:var(--ic-space-xs) !important}select{border:0;border-radius:var(--ic-border-radius);background-color:var(--ic-architectural-white);color:var(--ic-color-primary-text);line-height:1.5rem;letter-spacing:0.005rem;width:100%;height:100%;padding-left:0.375rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-repeat:no-repeat;background-position:right 0.375rem center;background-image:url("data:image/svg+xml;utf8,<svg fill=\'black\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")}select option,.select-option-selected{color:var(--ic-color-primary-text)}select:disabled{color:var(--ic-architectural-200);background-image:url("data:image/svg+xml;utf8,<svg fill=\'grey\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")}select:focus{border:0;outline:0}select:not([disabled]){cursor:pointer}.select-container{width:100%;display:flex;align-items:center;position:relative}.select-input{width:100%;height:100%;padding:0 0.375rem;display:flex;cursor:pointer;align-items:center;justify-content:space-between;background:none;border:none}.select-input:focus{outline:var(--ic-hc-focus-outline)}:host(:not([disabled])) ic-input-component-container:hover .select-input{background-color:var(--ic-architectural-white)}:host([disabled]) .select-input{pointer-events:none}:host([searchable]) .select-input{cursor:auto}.searchable-select-container{align-items:center;display:flex;width:100%;position:relative}.expand-icon{height:var(--ic-space-lg);padding-left:var(--ic-space-xs);color:var(--ic-action-dark)}.expand-icon>svg{display:inline-block;width:var(--ic-space-lg);height:var(--ic-space-lg)}:host([disabled]) .expand-icon,:host([disabled]) .expand-icon>svg>path{color:var(--ic-architectural-200)}:host([searchable]) .expand-icon{padding-left:var(--ic-space-xxs);height:2.25rem}:host([searchable]) .expand-icon>svg{height:2.25rem;padding:0 0.375rem}:host([searchable]:not([disabled])) .expand-icon>svg{cursor:pointer}.expand-icon-open{color:var(--ic-action-dark)}.expand-icon-filled{color:var(--ic-action-dark)}.expand-icon-open,:host([searchable]) .expand-icon-open{transform:rotateX(180deg)}:host([disabled]) .value-text,.placeholder{color:var(--ic-color-tertiary-text)}.select-input-end{display:flex;align-items:center}.clear-button-container{display:flex;gap:var(--ic-space-xxs);padding-left:2.375rem}:host([small]) .clear-button-container{padding-left:1.875rem}.divider{width:0.063rem;background-color:var(--ic-architectural-400);margin:var(--ic-space-xxs) 0;border-radius:0.063rem;height:var(--ic-space-lg)}:host([small]) .divider{height:var(--ic-space-md)}.clear-button{position:absolute;right:2.75rem;border-radius:var(--ic-border-radius);transition:box-shadow var(--ic-easing-transition),\n    border-radius var(--ic-easing-transition)}.clear-button:focus{background-color:var(--ic-focus-blue);box-shadow:inset 0 0 0 0.125rem var(--ic-focus-glow);border-radius:0.25rem}.clear-button:focus *{fill:white}.searchable-select-results-status{border:0;clip:rect(0, 0, 0, 0, 0);height:0.063rem;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:0.063rem}'}}]);