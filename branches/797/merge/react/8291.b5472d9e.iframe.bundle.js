"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[8291],{"../web-components/dist/esm/chevron-icon-7927f709.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Chevron});var Chevron='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"../web-components/dist/esm/close-icon-2f02b42a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>closeIcon});var closeIcon='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n    <title>close icon</title>\n</svg>\n'},"../web-components/dist/esm/ic-side-navigation.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_side_navigation:()=>SideNavigation});__webpack_require__("./node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.object.values.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../web-components/dist/esm/index-a77644e1.js"),_close_icon_2f02b42a_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../web-components/dist/esm/close-icon-2f02b42a.js"),_chevron_icon_7927f709_js__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../web-components/dist/esm/chevron-icon-7927f709.js"),_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../web-components/dist/esm/helpers-3f819970.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("../web-components/dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var SideNavigation=function(){function SideNavigation(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,SideNavigation),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.r)(this,hostRef),this.IC_NAVIGATION_ITEM="ic-navigation-item",this.ANIMATION_DURATION=parseInt((0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.A)("--ic-transition-duration-slow"))||0,this.emitSideNavigationExpanded=function(objDetails){var event=new CustomEvent("sideNavExpanded",{detail:{sideNavExpanded:objDetails.sideNavExpanded,sideNavMobile:objDetails.sideNavMobile}});_this.el.dispatchEvent(event)},this.toggleMenu=function(){_this.menuOpen=!_this.menuOpen,_this.setMobileMenuAriaAttributes(_this.menuOpen),_this.setToggleMenuFlyoutMenuVisibility(_this.menuOpen),_this.emitSideNavigationExpanded({sideNavExpanded:_this.menuOpen,sideNavMobile:!0})},this.setToggleMenuFlyoutMenuVisibility=function(menuOpen){var sideNav=_this.el.shadowRoot.querySelector("#side-navigation"),sideNavInner=sideNav.querySelector(".side-navigation-inner"),bottomWrapper=sideNav.querySelector(".bottom-wrapper");menuOpen?(bottomWrapper.classList.add("menu-visibility-visible"),sideNavInner.classList.add("menu-visibility-visible")):setTimeout((function(){sideNavInner.classList.remove("menu-visibility-visible"),bottomWrapper.classList.remove("menu-visibility-visible")}),_this.ANIMATION_DURATION)},this.setMobileMenuAriaAttributes=function(menuOpen){var nativeButton=_this.el.shadowRoot.querySelector("#menu-button").shadowRoot.querySelector("button");menuOpen?(nativeButton.setAttribute("aria-expanded","true"),nativeButton.setAttribute("aria-label","Close navigation menu")):(nativeButton.setAttribute("aria-expanded","false"),nativeButton.setAttribute("aria-label","Open navigation menu"))},this.setAndRemoveNoWrapAfterMenuExpanded=function(){var appTitle=_this.el.shadowRoot.querySelector(".title-link ic-typography");appTitle.classList.add("ic-typography-no-wrap"),setTimeout((function(){appTitle.classList.remove("ic-typography-no-wrap")}),_this.ANIMATION_DURATION)},this.toggleMenuExpanded=function(){_this.menuExpanded=!_this.menuExpanded,_this.menuExpanded&&_this.setAndRemoveNoWrapAfterMenuExpanded(),_this.arrangeSlottedNavigationItem(_this.menuExpanded),_this.displayTooltipWithExpandedLongLabel(_this.menuExpanded),_this.collapsedIconLabels&&_this.animateCollapsedIconLabels(),_this.setExpandedButtonHeight(),_this.emitSideNavigationExpanded({sideNavExpanded:_this.menuExpanded})},this.arrangeSlottedNavigationItem=function(menuExpanded){_this.el.querySelectorAll("ic-navigation-item").forEach((function(navItem){if((0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.i)(navItem,"navigation-item")){var navItemSlot=navItem.querySelector("[slot='navigation-item']"),iconWrapper=document.createElement("div"),icon=navItemSlot.querySelector("svg"),label=navItem.textContent.trim(),icTypography=document.createElement("ic-typography");icTypography.classList.add("ic-typography-label","hydrated","navigation-item-side-nav-slotted-text"),iconWrapper.className="icon-container",iconWrapper.append(icon),navItemSlot.textContent="",icTypography.textContent=label,navItemSlot.append(iconWrapper),navItemSlot.append(icTypography),_this.collapsedIconLabels?_this.styleSlottedCollapsedIconLabels(menuExpanded,icTypography):_this.styleSlottedIconLabels(menuExpanded,icTypography)}}))},this.styleSlottedCollapsedIconLabels=function(menuExpanded,icTypography){menuExpanded?(icTypography.style.marginTop="0",icTypography.style.whiteSpace="nowrap",icTypography.style.overflow="hidden",icTypography.style.textOverflow="ellipsis"):(icTypography.style.marginTop="10px",icTypography.style.whiteSpace="nowrap",icTypography.style.overflow="hidden",icTypography.style.textOverflow="ellipsis")},this.setExpandedButtonHeight=function(){var appStatusWrapper=_this.el.shadowRoot.querySelector("#side-navigation > .bottom-wrapper > .bottom-side-nav > .app-status-wrapper");0!==appStatusWrapper.offsetHeight&&_this.el.style.setProperty("--sm-side-navigation-bottom-bar-height",appStatusWrapper.offsetHeight+"px")},this.styleSlottedIconLabels=function(menuExpanded,icTypography){menuExpanded?(icTypography.style.opacity="1",icTypography.style.visibility="visible",icTypography.style.transition="visibility 0s, opacity var(--ic-easing-transition-slow)"):(icTypography.style.opacity="0",icTypography.style.visibility="hidden",icTypography.style.transition="visibility 0s, opacity var(--ic-easing-transition-slow)")},this.animateCollapsedIconLabels=function(){var primaryNavigationWrapper=_this.el.shadowRoot.querySelector(".primary-navigation"),secondaryNavigationWrapper=_this.el.shadowRoot.querySelector(".bottom-wrapper > .secondary-navigation");primaryNavigationWrapper&&(primaryNavigationWrapper.classList.remove("collapsed-icon-labels-end"),primaryNavigationWrapper.classList.add("collapsed-icon-labels-start")),secondaryNavigationWrapper&&(secondaryNavigationWrapper.classList.remove("collapsed-icon-labels-end"),secondaryNavigationWrapper.classList.add("collapsed-icon-labels-start")),_this.el.addEventListener("transitionend",(function(){primaryNavigationWrapper&&(primaryNavigationWrapper.classList.remove("collapsed-icon-labels-start"),primaryNavigationWrapper.classList.add("collapsed-icon-labels-end")),secondaryNavigationWrapper&&(secondaryNavigationWrapper.classList.remove("collapsed-icon-labels-start"),secondaryNavigationWrapper.classList.add("collapsed-icon-labels-end"))}))},this.paddingIconWidth=function(navItems){var navItemLink=navItems[0].shadowRoot&&navItems[0].shadowRoot.querySelector("ic-tooltip a")||navItems[0].querySelector("a"),navItemSVG=navItems[0].querySelector("svg"),navStyles={gap:window.getComputedStyle(navItemLink).gap,iconWidth:window.getComputedStyle(navItemSVG).width,paddingLeft:window.getComputedStyle(navItemLink).paddingLeft};return Object.values(navStyles).reduce((function(prev,curr){return prev+parseInt(curr)}),0)},this.displayTooltipWithExpandedLongLabel=function(menuExpanded){var timer;menuExpanded?timer=setTimeout((function(){var sideNavWidth=_this.el.clientWidth,navigationItems=Array.from(_this.el.querySelectorAll(_this.IC_NAVIGATION_ITEM)),paddingIconDelta=navigationItems.length?_this.paddingIconWidth(navigationItems):0;navigationItems.forEach((function(navigationItem){var _a,_b;((null===(_a=navigationItem.shadowRoot&&navigationItem.shadowRoot.querySelector("ic-tooltip .link ic-typography.ic-typography-label"))||void 0===_a?void 0:_a.scrollWidth)||(null===(_b=navigationItem.querySelector("ic-typography.ic-typography-label"))||void 0===_b?void 0:_b.scrollWidth))>sideNavWidth-paddingIconDelta&&navigationItem.setAttribute("display-navigation-tooltip","true")}))}),_this.ANIMATION_DURATION):(clearTimeout(timer),Array.from(_this.el.querySelectorAll(_this.IC_NAVIGATION_ITEM)).forEach((function(navigationItem){navigationItem.setAttribute("display-navigation-tooltip","false")})))},this.setMenuExpanded=function(expanded){_this.menuExpanded=expanded},this.setParentPaddingTop=function(value){_this.el.parentElement.style.setProperty("padding-top",value)},this.setParentPaddingLeft=function(value){_this.el.parentElement.style.setProperty("padding-left",value)},this.resizeObserver=null,this.resizeObserverCallback=function(currSize){if(_this.deviceSize=currSize,currSize===_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.D.S){if(!_this.disableAutoParentStyling){var topBarHeight=_this.el.shadowRoot.querySelector(".top-bar").scrollHeight;_this.setParentPaddingTop(topBarHeight+"px"),_this.setParentPaddingLeft("0"),_this.inline&&_this.el.parentElement.style.setProperty("height","calc(100% - "+topBarHeight+"px)")}_this.emitSideNavigationExpanded({sideNavExpanded:_this.menuExpanded,sideNavMobile:!0})}else _this.disableAutoParentStyling||(_this.setParentPaddingTop("0"),_this.el.parentElement.style.setProperty("height","100%")),_this.emitSideNavigationExpanded({sideNavExpanded:_this.menuExpanded,sideNavMobile:!1});var paddingLeft;paddingLeft=_this.collapsedIconLabels?"calc(var(--ic-space-xxl) * 2)":"calc(var(--ic-space-xxl) + var(--ic-space-xs))",currSize>_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.D.L?_this.disableAutoParentStyling||(_this.setParentPaddingTop("0"),_this.setParentPaddingLeft("0")):currSize>_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.D.S&&currSize<=_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.D.M&&_this.static&&!_this.disableAutoParentStyling?_this.setParentPaddingLeft(paddingLeft):currSize>_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.D.S&&currSize<=_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.D.L&&!_this.disableAutoParentStyling&&(_this.static?_this.setParentPaddingLeft("calc(var(--ic-space-xl) * 10)"):_this.setParentPaddingLeft(paddingLeft))},this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){var currSize=(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.g)();_this.deviceSizeAppTitle=currSize,_this.resizeObserverCallback(currSize)})),_this.resizeObserver.observe(document.body,{box:"content-box"})},this.setCollapsedIconLabels=function(){Array.from(_this.el.querySelectorAll(_this.IC_NAVIGATION_ITEM)).forEach((function(navigationItem){navigationItem.setAttribute("collapsed-icon-label","true")}))},this.styleSlottedCollapsedIconLabel=function(){Array.from(_this.el.querySelectorAll(".navigation-item-side-nav-slotted-text")).forEach((function(icTypography){var _a,_b;(null===(_b=null===(_a=null==icTypography?void 0:icTypography.parentElement)||void 0===_a?void 0:_a.parentElement)||void 0===_b?void 0:_b.classList.contains("navigation-item-side-nav-collapsed-with-label"))&&(icTypography.style.whiteSpace="nowrap",icTypography.style.overflow="hidden",icTypography.style.textOverflow="ellipsis",icTypography.style.marginTop="10px")}))},this.renderTopBar=function(_ref){var _class,isSDevice=_ref.isSDevice,foregroundColor=_ref.foregroundColor,menuOpen=_ref.menuOpen,href=_ref.href,isAppNameSubtitleVariant=_ref.isAppNameSubtitleVariant,appTitle=_ref.appTitle,hasTitle=""!==_this.appTitle&&void 0!==_this.appTitle,Component=(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.i)(_this.el,"app-title")?"div":"a",attrs="a"==Component&&{href};return(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("div",{class:(_class={"top-bar":!0},_class[_this.foregroundColor]=!0,_class)},isSDevice&&(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("nav",{"aria-labelledby":"menu-navigation-toggle-button-landmark","aria-hidden":"false"},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("ic-button",{"aria-label":"Open navigation menu",class:"menu-button",id:"menu-button",variant:"secondary",size:"small","full-width":"true",appearance:foregroundColor,onClick:_this.toggleMenu,"aria-owns":"side-navigation","aria-haspopup":"true","aria-expanded":"false"},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("span",{class:"mobile-top-bar-menu-icon",slot:"icon",innerHTML:menuOpen?_close_icon_2f02b42a_js__WEBPACK_IMPORTED_MODULE_20__.c:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">\n  <path d="M0 0h24v24H0V0z" fill="none" />\n  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />\n  <title>menu icon</title>\n</svg>\n'}),menuOpen?"Close":"Menu"),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("span",{id:"menu-navigation-toggle-button-landmark",class:"navigation-landmark-title","aria-hidden":"true"},"Navigation menu toggle button")),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("div",{class:"app-title-wrapper"},(hasTitle||(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.i)(_this.el,"app-title"))&&(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)(Component,Object.assign({},attrs,{class:"title-link"}),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("div",{class:"app-icon-container","aria-hidden":"true"},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("slot",{name:"app-icon"})),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("ic-typography",{variant:isAppNameSubtitleVariant?"subtitle-small":"h3"},(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.i)(_this.el,"app-title")?(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("slot",{name:"app-title"}):appTitle))))},this.appTitle=void 0,this.status=void 0,this.version=void 0,this.expanded=!1,this.href="/",this.static=!1,this.collapsedIconLabels=!1,this.inline=!1,this.disableAutoParentStyling=!1,this.foregroundColor=(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.l)(),this.menuOpen=!1,this.menuExpanded=!1,this.deviceSize=_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.D.XL,this.deviceSizeAppTitle=_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.D.S,this.hasSecondaryNavigation=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(SideNavigation,[{key:"themeChangeHandler",value:function themeChangeHandler(ev){var theme=ev.detail;this.foregroundColor=theme.mode}},{key:"componentWillLoad",value:function componentWillLoad(){this.expanded?this.setMenuExpanded(!0):this.setMenuExpanded(!1),this.collapsedIconLabels&&this.setCollapsedIconLabels(),this.hasSecondaryNavigation=(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.i)(this.el,"secondary-navigation")}},{key:"componentDidLoad",value:function componentDidLoad(){this.emitSideNavigationExpanded({sideNavExpanded:this.menuExpanded,sideNavMobile:this.deviceSize===_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.D.S}),(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.c)(this.runResizeObserver),this.styleSlottedCollapsedIconLabel(),this.arrangeSlottedNavigationItem(this.menuExpanded),this.displayTooltipWithExpandedLongLabel(this.menuExpanded),this.setExpandedButtonHeight(),!(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.i)(this.el,"app-title")&&(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.a)([{prop:this.appTitle,propName:"app-title"}],"Side Navigation")}},{key:"disconnectedCallback",value:function disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}},{key:"render",value:function render(){var _class2,_class3,_class4,appTitle=this.appTitle,menuOpen=this.menuOpen,foregroundColor=this.foregroundColor,menuExpanded=this.menuExpanded,href=this.href,status=this.status,version=this.version,collapsedIconLabels=this.collapsedIconLabels,inline=this.inline,isSDevice=this.deviceSize===_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.D.S,isMdDevice=this.deviceSize===_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.D.M,isLgDevice=this.deviceSize>=_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.D.L,isAppNameSubtitleVariant=this.deviceSizeAppTitle===_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.D.S,displayExpandBtn=isMdDevice||isLgDevice&&!this.static,topBarProps={isSDevice,foregroundColor,menuOpen,href,isAppNameSubtitleVariant,appTitle};return(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)(_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.H,{class:(_class2={"xs-menu-open":menuOpen&&isSDevice,"xs-menu-close":!menuOpen&&isSDevice,"sm-collapsed":!isSDevice&&!menuExpanded,"sm-expanded":!isSDevice&&menuExpanded},_class2[_types_dd515332_js__WEBPACK_IMPORTED_MODULE_19__.I.Dark]=foregroundColor===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_19__.I.Dark,_class2["collapsed-labels"]=!isSDevice&&!menuExpanded&&collapsedIconLabels,_class2.inline=inline,_class2)},isSDevice&&this.renderTopBar(Object.assign({},topBarProps)),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("div",{class:"side-navigation",id:"side-navigation"},!isSDevice&&this.renderTopBar(Object.assign({},topBarProps)),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("div",{class:"side-navigation-inner"},(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.i)(this.el,"primary-navigation")&&(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("nav",{class:"primary-navigation","aria-labelledby":"primary-navigation-landmark"},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("span",{"aria-hidden":"true",class:"navigation-landmark-title",id:"primary-navigation-landmark"},"Primary"),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("ul",{class:"navigation-list"},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("slot",{name:"primary-navigation"})))),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("div",{class:(_class3={},_class3["bottom-wrapper"]=!0,_class3["classification-spacing"]=(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.m)(),_class3)},(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_18__.i)(this.el,"secondary-navigation")&&(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("nav",{class:"secondary-navigation","aria-labelledby":"secondary-navigation-landmark"},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("span",{"aria-hidden":"true",class:"navigation-landmark-title",id:"secondary-navigation-landmark"},"Secondary"),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("ul",{class:"navigation-list"},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("slot",{name:"secondary-navigation"}))),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("div",{class:"bottom-side-nav"},this.hasSecondaryNavigation&&(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("ic-divider",null),displayExpandBtn&&(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("button",{class:"menu-expand-button",innerHTML:_chevron_icon_7927f709_js__WEBPACK_IMPORTED_MODULE_21__.C,onClick:this.toggleMenuExpanded,"aria-label":(menuExpanded?"Collapse":"Expand")+" side navigation"}),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("div",{class:"app-status-wrapper"},""!==status&&(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("div",{class:(_class4={},_class4["app-status"]=!0,_class4)},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("ic-typography",{"aria-label":"app tag",variant:"label-uppercase",class:"app-status-text"},status)),""!==version&&(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.h)("ic-typography",{variant:"label",class:"app-version","aria-label":"app version"},version))))))}},{key:"el",get:function get(){return(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_17__.g)(this)}}]),SideNavigation}();SideNavigation.style=':host{display:block;--side-navigation-position:fixed;--side-navigation-position-left:0;--side-navigation-position-top:var(--ic-space-xxl);--side-navigation-height:var(--ic-space-xxl);--sm-side-navigation-top-bar-height:3.5rem;--sm-side-navigation-collapsed-labels-width:6rem;--sm-side-navigation-expand-transition-duration:var(\n    --ic-transition-duration-slow\n  );--side-navigation-width:20rem;--sm-side-navigation-bottom-bar-height:3.5rem;z-index:var(--ic-z-index-side-navigation)}:host>*{box-sizing:border-box}.side-navigation{display:flex;flex-direction:column;width:var(--side-navigation-width);color:var(--ic-theme-text);position:var(--side-navigation-position);top:var(--side-navigation-position-top);left:calc(var(--side-navigation-width) * -1);bottom:0;background-color:var(--ic-theme-primary);z-index:var(--ic-z-index-side-navigation)}:host(.inline) .side-navigation{position:absolute;height:100%}:host(.anchor-right) .side-navigation{right:calc(var(--side-navigation-width) * -1)}.classification-spacing{margin-bottom:var(--ic-space-lg)}.navigation-list{padding:0;margin:0;list-style:none}.side-navigation-inner{background-color:var(--ic-theme-primary);display:flex;flex-direction:column;flex:1 1 0;overflow:auto;visibility:hidden}:host(.inline) .side-navigation-inner{flex:1}:host(.xs-menu-open) .side-navigation{transition:left var(--ic-easing-transition-slow);left:0}:host(.xs-menu-close) .side-navigation{left:calc(var(--side-navigation-width) * -1);transition:left var(--ic-easing-transition-slow)}:host(.anchor-right.xs-menu-open) .side-navigation{right:0;left:auto}:host(.anchor-right.xs-menu-close) .side-navigation{right:calc(var(--side-navigation-width) * -1);left:auto;transition:right var(--ic-easing-transition-slow)}.bottom-wrapper{border-top:var(--ic-keyline-lighten);bottom:0;left:0;z-index:2;box-shadow:-0.188rem -0.188rem 0.5rem rgb(0 0 0 / 20%);background-color:var(--ic-theme-primary);display:flex;flex-direction:column;visibility:hidden}:host(.inline) .bottom-wrapper{position:sticky}:host(.dark) .bottom-wrapper{border-top:var(--ic-keyline-darken)}.top-bar{display:flex;flex-direction:row;align-items:center;min-height:var(--side-navigation-height);padding:var(--ic-space-xs);box-sizing:border-box;background-color:var(--ic-theme-primary);position:fixed;top:0;left:0;right:0;border-bottom:var(--ic-keyline-darken);box-shadow:var(--ic-elevation-overlay);z-index:2;overflow:hidden;visibility:visible}:host(.inline) .top-bar{position:absolute}.top-bar.dark a:focus{box-shadow:var(--ic-border-focus)}.top-bar.light{border-bottom:var(--ic-keyline-lighten)}.app-title-wrapper{display:flex;margin-left:var(--ic-space-xs);border-left:var(--ic-keyline-darken);padding-left:var(--ic-space-xxs);color:var(--ic-theme-text);align-items:center}@media screen and (min-width: 340px){.app-title-wrapper ic-typography{margin-left:var(--ic-space-xs)}}:host .title-link{display:flex;align-items:center;transition:box-shadow var(--ic-easing-transition-fast),\n    background-color var(--ic-easing-transition-fast);text-decoration:none;padding:var(--ic-space-xxs);color:var(--ic-theme-text)}:host .title-link:visited,:host .title-link:active{color:var(--ic-theme-text)}slot[name="app-title"]::slotted(a),slot[name="app-icon"]::slotted(a){color:var(--ic-theme-text);outline:none;text-decoration:none}:host .title-link:hover{border-radius:var(--ic-border-radius);background-color:var(--ic-theme-hover)}:host .title-link:active{background-color:var(--ic-theme-active)}:host .title-link:focus,:host .title-link:focus-within{border-radius:var(--ic-border-radius);box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline);background-color:transparent}:host .title-link ic-typography{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.app-title-wrapper ::slotted(svg){fill:var(--ic-theme-text)}.app-icon-container{display:none}.button-label{display:flex;align-items:center}.mobile-top-bar-menu-icon{display:flex}.menu-button{width:6.5rem}.app-status-wrapper{left:3.5rem;right:var(--ic-space-sm);top:0;bottom:0;width:auto;display:flex;gap:var(--ic-space-xs);padding:var(--ic-space-sm) 0;justify-content:flex-end;align-items:flex-end;pointer-events:none;height:-moz-fit-content;height:fit-content;margin:0 var(--ic-space-xs)}.app-status-wrapper .app-version{display:flex;overflow-wrap:break-word;padding-bottom:var(--ic-space-xxs)}.app-status-wrapper .app-status{display:flex;border-radius:1rem;background-color:var(--ic-theme-text);color:var(--ic-color-primary-text);padding:var(--ic-space-xxs) var(--ic-space-lg);min-width:1rem}.app-status-wrapper .app-status-text{overflow-wrap:break-word}:host(.dark) .app-status-wrapper .app-status{color:var(--ic-color-white-text)}.navigation-landmark-title{position:absolute;width:var(--ic-space-1px);height:var(--ic-space-1px);padding:0;margin:calc(-1 * var(--ic-space-1px));overflow:hidden}::slotted(ic-navigation-group){--navigation-group-height:2.75rem;--navigation-group-width:100%;--navigation-group-justify-content:space-between;--navigation-group-hover:var(--ic-theme-hover);--navigation-group-text-hover:var(--ic-theme-text);--navigation-item-child-height:3.5rem;--navigation-item-child-active:var(--ic-action-dark-bg-active);--navigation-item-child-color:var(--ic-theme-text);--navigation-group-expand-toggle-padding:0.25rem}::slotted(ic-navigation-item),::slotted(ic-navigation-group){--navigation-item-height:3.5rem;--navigation-item-width:auto;--navigation-item-justify-content:flex-start}.bottom-side-nav{position:relative;align-content:flex-end;min-height:var(--sm-side-navigation-top-bar-height)}.bottom-side-nav ic-divider{position:absolute;top:0;width:100%}.primary-navigation{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none}.primary-navigation::-webkit-scrollbar{display:none}.primary-navigation,.secondary-navigation{overflow-x:hidden}.bottom-side-nav .menu-expand-button{position:absolute;display:none}.menu-visibility-visible{visibility:visible}.menu-visibility-hidden{visibility:hidden}@media screen and (min-width: 340px){.app-icon-container{display:flex}}@media screen and (min-width: 577px){:host{display:flex;flex-direction:column;height:100vh;position:var(--side-navigation-position);left:0;top:0;bottom:0}.app-icon-container{padding:var(--ic-space-xxs) 0}.top-bar{--side-navigation-height:var(--sm-side-navigation-top-bar-height);position:relative;padding:0;box-shadow:-0.188rem 0.188rem 0.5rem rgb(0 0 0 / 20%)}:host(.inline) .top-bar{position:sticky}:host(.anchor-right) .top-bar{box-shadow:0.188rem 0.188rem 0.5rem rgb(0 0 0 / 20%)}:host(.anchor-right) .bottom-wrapper{box-shadow:0.188rem -0.188rem 0.5rem rgb(0 0 0 / 20%)}.side-navigation,.top-bar{width:var(--sm-side-navigation-top-bar-height)}:host(.sm-collapsed){width:var(--sm-side-navigation-top-bar-height);transition:width var(--ic-easing-transition-slow)}:host(.sm-collapsed.collapsed-labels){width:var(--sm-side-navigation-collapsed-labels-width)}:host(.sm-expanded){width:var(--side-navigation-width);transition:width var(--ic-easing-transition-slow);box-shadow:var(--ic-elevation-overlay)}.side-navigation{--side-navigation-position-top:0;flex:1;position:relative;top:auto;left:auto;bottom:auto}:host(.inline) .side-navigation{position:relative}:host(.anchor-right) .side-navigation{left:auto;right:0}.side-navigation-inner{width:100%;visibility:visible}.bottom-wrapper{visibility:visible}.app-title-wrapper{margin-left:0;border-left:none;padding:var(--ic-space-sm)}.app-title-wrapper ::slotted(svg){height:var(--ic-space-lg);width:var(--ic-space-lg)}.app-title-wrapper ic-typography{margin:calc(-1 * 0.281rem) 0 calc(-1 * 0.281rem) var(--ic-space-md);font-weight:var(--ic-font-weight-semibold)}:host(.sm-collapsed) .app-title-wrapper ic-typography{position:absolute;left:-9999px;opacity:0;transition:opacity var(--ic-easing-transition-slow)}:host(.sm-expanded) ic-typography{position:relative;left:0}:host(.sm-expanded) :is(.side-navigation,.top-bar){width:var(--side-navigation-width);transition:width var(--ic-easing-transition-slow)}:host(.sm-collapsed) :is(.side-navigation,.top-bar){width:var(--sm-side-navigation-top-bar-height);transition:width var(--ic-easing-transition-slow)}:host(.anchor-right.sm-expanded) :is(.side-navigation,.top-bar){left:auto;right:0}.app-status-wrapper,:host(.sm-collapsed) .app-status-wrapper{display:none;margin-left:0}:host(.sm-expanded) .app-status-wrapper{display:flex;max-width:16rem;margin-right:calc(var(--ic-space-xxxs) + var(--ic-space-xs))}.bottom-side-nav{justify-items:flex-end;align-items:flex-end;justify-content:flex-end;display:flex}.bottom-side-nav .menu-expand-button{padding-left:var(--ic-space-md);height:var(--sm-side-navigation-top-bar-height);width:100%;color:var(--ic-theme-text);background-color:transparent;outline:var(--ic-hc-focus-outline);border:none;cursor:pointer;display:flex;transition:var(--ic-easing-transition-fast)}:host(.sm-expanded) .bottom-side-nav .menu-expand-button{height:100%}.bottom-side-nav .menu-expand-button svg{justify-items:flex-start;align-self:center;display:inline-block;width:var(--ic-space-lg);height:var(--ic-space-lg)}.bottom-side-nav .menu-expand-button:hover{background-color:var(--ic-theme-hover)}:host .bottom-side-nav{outline:none}:host .bottom-side-nav .menu-expand-button:focus{box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);background-color:transparent}:host(.sm-collapsed) .bottom-side-nav .menu-expand-button svg{transform:scaleX(1);transition:transform var(--ic-easing-transition-slow)}:host(.sm-expanded) .bottom-side-nav .menu-expand-button svg{transform:scaleX(-1);transition:transform var(--ic-easing-transition-slow);align-self:flex-end;margin-bottom:0.875rem}:host(.anchor-right.sm-collapsed) .bottom-side-nav .menu-expand-button svg{transform:scaleX(-1)}:host(.anchor-right.sm-expanded) .bottom-side-nav .menu-expand-button svg{transform:scaleX(1)}:host(.sm-collapsed) ::slotted(ic-navigation-item){--navigation-item-label-opacity:1}:host(.sm-collapsed) ::slotted(ic-navigation-item),:host(.sm-collapsed) ::slotted(ic-navigation-group){--navigation-item-label-opacity:0}:host(.sm-expanded) ::slotted(ic-navigation-item),:host(.sm-expanded) ::slotted(ic-navigation-group){--navigation-item-label-opacity:1}:host(.sm-collapsed) ::slotted(ic-navigation-group){--navigation-group-title-position:absolute;--navigation-group-title-position-left:-9999px;--navigation-group-title-opacity:none}:host(.sm-expanded) ::slotted(ic-navigation-group){--navigation-group-title-position:relative;--navigation-group-title-position-left:0;--navigation-group-expand-toggle-padding:0.25rem;--navigation-group-title-opacity:flex}:host(.sm-collapsed.collapsed-labels) .side-navigation,:host(.sm-collapsed.collapsed-labels) .top-bar{width:var(--sm-side-navigation-collapsed-labels-width)}:host(.sm-collapsed.collapsed-labels) .menu-expand-button{padding:0}:host(.sm-collapsed.collapsed-labels) .app-title-wrapper{width:100%;justify-content:center}:host(.sm-collapsed.collapsed-labels) ::slotted(ic-navigation-group){--navigation-group-justify-content:center;--navigation-item-label-opacity:1;--navigation-group-item-min-width:100%;--navigation-group-expand-toggle-padding:1rem}:host(.collapsed-labels) .bottom-side-nav .menu-expand-button{justify-content:center}:host .collapsed-icon-labels-start{visibility:hidden;opacity:0}:host .collapsed-icon-labels-end{visibility:visible;opacity:1;transition:visibility 0s, opacity var(--ic-easing-transition-slow)}}@media screen and (min-width: 993px){:host{position:sticky;left:auto;top:0;bottom:0}:host(.sm-expanded){box-shadow:none}}@media (forced-colors: active){.side-navigation,.top-bar{border-right:var(--ic-hc-border)}slot[name="app-icon"]::slotted(svg){fill:currentcolor}}'}}]);