/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 13 21:42
*/
KISSY.add("component/container",function(k,i,e,c,d,f){return i.create(e,[d,f])},{requires:["uibase","./modelcontrol","./uistore","./delegatechildren","./decoratechildren"]});KISSY.add("component/decoratechild",function(k,i){function e(){}k.augment(e,i,{decorateInternal:function(c){this.set("el",c);var d=this.get("decorateChildCls"),f=this.get("prefixCls");if(c=c.one("."+this.getCls(d)))(d=this._findUIByClass(c))?this.decorateChildrenInternal(d,c,f):this.decorateChildren(c)}});return e},{requires:["./decoratechildren"]});
KISSY.add("component/decoratechildren",function(k,i){function e(){}k.augment(e,{decorateInternal:function(c){this.set("el",c);this.decorateChildren(c)},decorateChildrenInternal:function(c,d,f){this.addChild(new c({srcNode:d,prefixCls:f}))},_findUIByClass:function(c){c=c.attr("class")||"";var d=this.get("prefixCls");c=c.replace(RegExp("\\b"+d,"ig"),"");return i.getUIByClass(c)},decorateChildren:function(c){var d=this;c=c.children();var f=d.get("prefixCls");c.each(function(h){var l=d._findUIByClass(h);
d.decorateChildrenInternal(l,h,f)})}});return e},{requires:["./uistore"]});
KISSY.add("component/delegatechildren",function(k){function i(){}k.augment(i,{__bindUI:function(){this.get("el").on("mousedown mouseup mouseover mouseout dblclick",this._handleChildMouseEvents,this)},_handleChildMouseEvents:function(e){var c=this.getOwnerControl(e.target);if(c)switch(e.type){case "mousedown":c._handleMouseDown(e);break;case "mouseup":c._handleMouseUp(e);break;case "mouseover":c._handleMouseOver(e);break;case "mouseout":c._handleMouseOut(e);break;case "dblclick":c._handleDblClick(e)}},
getOwnerControl:function(e){for(var c=this.get("children"),d=c.length,f=this.get("el")[0];e&&e!==f;){for(var h=0;h<d;h++)if(c[h].get("el")[0]===e)return c[h];e=e.parentNode}return null}});return i});
KISSY.add("component/modelcontrol",function(k,i,e,c,d){function f(a){return function(b){b=b.newVal;this.get("view")&&this.get("view").set(a,b)}}function h(a){return function(b){return b===undefined?this.get("view")&&this.get("view").get(a):b}}function l(a,b,g){a.create();var j=a.getContentElement();b.set("parent",a);b.set("render",j);b.set("elBefore",g);if(a.get("rendered"))b.render();else{b.create();j[0].insertBefore(b.get("el")[0],g&&g[0]||null)}}function m(a){if(a.__componentClasses)return a.__componentClasses;
for(var b=a.constructor,g=[];b&&b!=n;){var j=c.getClsByUI(b);j&&g.push(j);b=b.superclass&&b.superclass.constructor}return a.__componentClasses=g.join(" ")}var n=e.create([e.Box],{getCls:c.getCls,initializer:function(){var a=this.__attrs,b;for(b in a)if(a.hasOwnProperty(b)){var g=a[b];if(g.view){this.on("after"+(b.charAt(0).toUpperCase()+b.substring(1))+"Change",f(b));g.getter=h(b)}}},renderUI:function(){var a=this;a.get("view").render();var b=a.get("children");k.each(b,function(g){l(a,g);g.render()})},
createDom:function(){var a;if(!(a=this.get("view"))){a=this.constructor;for(var b;a&&!b;){b=a.DefaultRender;a=a.superclass&&a.superclass.constructor}if(b){a=this.__attrs;var g={},j;for(j in a)if(a.hasOwnProperty(j)){var o;if(a[j].view)if((o=this.get(j))!==undefined)g[j]=o}a=new b(g)}else a=0}if(b=a){b.create();b._renderCls(m(this));this.get("allowTextSelection_")||b.get("el").unselectable();this.set("view",b)}},getContentElement:function(){var a=this.get("view");return a&&a.getContentElement()},addChild:function(a,
b){var g=this.get("children"),j=g[b];b?g.splice(b,0,a):g.push(a);l(this,a,j)},removeChild:function(a,b){var g=this.get("children"),j=k.indexOf(a,g);j!=-1&&g.splice(j,1);b&&a.destroy()},removeChildren:function(a){var b=this,g=[].concat(b.get("children"));k.each(g,function(j){b.removeChild(j,a)});b.set("children",[])},getChildAt:function(a){return this.get("children")[a]},_uiSetHandleMouseEvents:function(a){var b=this.get("el");if(a){b.on("mouseenter",this._handleMouseEnter,this);b.on("mouseleave",
this._handleMouseLeave,this);b.on("mousedown",this._handleMouseDown,this);b.on("mouseup",this._handleMouseUp,this);b.on("dblclick",this._handleDblClick,this)}else{b.detach("mouseenter",this._handleMouseEnter,this);b.detach("mouseleave",this._handleMouseLeave,this);b.detach("mousedown",this._handleMouseDown,this);b.detach("mouseup",this._handleMouseUp,this);b.detach("dblclick",this._handleDblClick,this)}},_handleDblClick:function(a){this.get("disabled")||this._performInternal(a)},_isMouseEventWithinElement:function(a,
b){var g=a.relatedTarget;if(!g)return false;if(g===b[0]||b.contains(g))return true},_handleMouseOver:function(a){var b=this.get("el");if(this.get("disabled"))return true;this._isMouseEventWithinElement(a,b)||this._handleMouseEnter(a)},_handleMouseOut:function(a){var b=this.get("el");if(this.get("disabled"))return true;this._isMouseEventWithinElement(a,b)||this._handleMouseLeave(a)},_handleMouseEnter:function(){if(this.get("disabled"))return true;this.set("highlighted",true)},_handleMouseLeave:function(){if(this.get("disabled"))return true;
this.set("active",false);this.set("highlighted",false)},_handleMouseDown:function(a){if(this.get("disabled"))return true;a.which==1&&this.get("activeable")&&this.set("active",true);var b=this.getKeyEventTarget();a.which==1&&b.attr("tabindex")>=0&&this.getKeyEventTarget()[0].focus();a.which==1&&!this.get("allowTextSelection_")&&a.preventDefault()},_uiSetFocusable:function(a){var b=this.getKeyEventTarget();if(a){b.on("focus",this._handleFocus,this);b.on("blur",this._handleBlur,this);b.on("keydown",
this._handleKeydown,this)}else{b.detach("focus",this._handleFocus,this);b.detach("blur",this._handleBlur,this);b.detach("keydown",this._handleKeydown,this)}},_uiSetFocused:function(a){this._forwardSetAttrToView("focused",a)},_uiSetHighlighted:function(a){this._forwardSetAttrToView("highlighted",a)},_forwardSetAttrToView:function(a,b){var g=this.get("view");g["_set"+(a.charAt(0).toUpperCase()+a.substring(1))].call(g,b,m(this))},_uiSetDisabled:function(a){this._forwardSetAttrToView("disabled",a)},_uiSetActive:function(a){this._forwardSetAttrToView("active",
a)},getKeyEventTarget:function(){return this.get("view").getKeyEventTarget()},_handleMouseUp:function(a){if(this.get("disabled"))return true;if(this.get("active")&&a.which==1){this._performInternal(a);this.set("active",false)}},_handleFocus:function(){this.set("focused",true)},_handleBlur:function(){this.set("focused",false)},_handleKeyEventInternal:function(a){if(a.keyCode==i.KeyCodes.ENTER)return this._performInternal(a)},_handleKeydown:function(a){if(this.get("disabled"))return true;if(this._handleKeyEventInternal(a)){a.halt();
return true}},_performInternal:function(){},destructor:function(){var a=this.get("children");k.each(a,function(b){b.destroy()});(a=this.get("view"))&&a.destroy()}},{ATTRS:{handleMouseEvents:{value:true},focusable:{view:true,value:true},activeable:{value:true},focused:{},active:{},highlighted:{},children:{value:[]},prefixCls:{view:true,value:"ks-"},parent:{},view:{},disabled:{},allowTextSelection_:{value:false}},DefaultRender:d});return n},{requires:["event","uibase","./uistore","./render"]});
KISSY.add("component/render",function(k,i,e){function c(d,f,h){return d.getCls(f.split(/\s+/).join(h+" ")+h)}return i.create([i.Box.Render],{_completeClasses:function(d,f){return c(this,d,f)},_renderCls:function(d){this.get("el").addClass(this.getCls(d))},getCls:e.getCls,getKeyEventTarget:function(){return this.get("el")},getContentElement:function(){return this.get("contentEl")||this.get("el")},_uiSetFocusable:function(d){var f=this.getKeyEventTarget(),h=f.attr("tabindex");if(h>=0&&!d)f.attr("tabindex",
-1);else!(h>=0)&&d&&f.attr("tabindex",0)},_setHighlighted:function(d,f){this.get("el")[d?"addClass":"removeClass"](c(this,f,"-hover"))},_setDisabled:function(d,f){this.get("el")[d?"addClass":"removeClass"](c(this,f,"-disabled")).attr({tabindex:d?-1:0,"aria-disabled":d})},_setActive:function(d,f){this.get("el")[d?"addClass":"removeClass"](c(this,f,"-active")).attr("aria-pressed",!!d)},_setFocused:function(d,f){this.get("el")[d?"addClass":"removeClass"](c(this,f,"-focused"))}},{ATTRS:{prefixCls:{},
focusable:{}}})},{requires:["uibase","./uistore"]});
KISSY.add("component/uistore",function(k){function i(c){for(var d in e)if(e[d].ui==c)return d;return 0}var e={};return{getCls:function(c){c=k.trim(c).split(/\s+/);for(var d=0;d<c.length;d++)if(c[d])c[d]=this.get("prefixCls")+c[d];return c.join(" ")},getClsByUI:i,getClsByInstance:function(c){return i(c.constructor)},getUIByClass:function(c){c=c.split(/\s+/);for(var d=null,f=0;f<c.length;f++){var h=e[c[f]];if(h&&h.priority>-1)d=h.ui}return d},setUIByClass:function(c,d){e[c]=d},PRIORITY:{LEVEL1:10,LEVEL2:20,
LEVEL3:30,LEVEL4:40,LEVEL5:50,LEVEL6:60}}});KISSY.add("component",function(k,i,e,c,d,f,h,l){return{ModelControl:i,Render:e,Container:c,UIStore:d,DelegateChildren:f,DecorateChild:l,DecorateChildren:h}},{requires:["component/modelcontrol","component/render","component/container","component/uistore","component/delegatechildren","component/decoratechildren","component/decoratechild"]});
