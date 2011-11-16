/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Nov 10 21:44
*/
KISSY.add("overlay/overlayrender",function(e,d,h,f){function c(a){return e.require("uibase/"+a)}return h.create(f.Render,[c("contentboxrender"),c("positionrender"),c("loadingrender"),d.ie===6?c("shimrender"):null,c("closerender"),c("maskrender")])},{requires:["ua","uibase","component"]});
KISSY.add("overlay/ariarender",function(e,d){function h(){}function f(b){var g=b.keyCode,i=this.get("el");if(g==a){g=c(b.target);var j=this.__ariaArchor;if(g.equals(i)&&b.shiftKey){j[0].focus();b.halt()}else if(g.equals(j)&&!b.shiftKey){i[0].focus();b.halt()}else if(g.equals(i)||i.contains(g))return;b.halt()}}var c=d.all,a=d.KeyCodes.TAB;h.prototype={__renderUI:function(){var b=this.get("el"),g=this.get("header");if(this.get("aria")){b.attr("role","dialog");b.attr("tabindex",0);g.attr("id")||g.attr("id",
e.guid("ks-dialog-header"));b.attr("aria-labelledby",g.attr("id"));this.__ariaArchor=c("<div tabindex='0'></div>").appendTo(b)}},__bindUI:function(){var b=this;if(b.get("aria")){var g=b.get("el"),i;b.on("afterVisibleChange",function(j){if(j.newVal){i=document.activeElement;g[0].focus();g.attr("aria-hidden","false");g.on("keydown",f,b)}else{g.attr("aria-hidden","true");g.detach("keydown",f,b);i&&i.focus()}})}}};return h},{requires:["node"]});
KISSY.add("overlay/aria",function(e,d){function h(){}h.ATTRS={aria:{view:true}};h.prototype={__bindUI:function(){var f=this,c=f.get("el");f.get("aria")&&c.on("keydown",function(a){if(a.keyCode===d.KeyCodes.ESC){f.hide();a.halt()}})}};return h},{requires:["event"]});
KISSY.add("overlay/effect",function(e){function d(){}var h={fade:["Out","In"],slide:["Up","Down"]},f=["block","none"];d.ATTRS={effect:{value:{effect:"none",duration:0.5,easing:"easeOut"},setter:function(c){var a=c.effect;if(e.isString(a)&&!h[a])c.effect="none"}}};d.prototype={__bindUI:function(){var c=this;c.on("afterVisibleChange",function(a){var b=c.get("effect").effect;if(b!="none"){var g=a.newVal;a=Number(g);var i=c.get("el");i.stop(1,1);i.css({visibility:"visible",display:f[a]});i[b+h[b][a]](c.get("effect").duration,
function(){i.css({display:f[0],visibility:g?"visible":"hidden"})},c.get("effect").easing,false)}})}};return d},{requires:["anim"]});
KISSY.add("overlay/overlay",function(e,d,h,f,c){function a(b){return e.require("uibase/"+b)}d=d.create(h.ModelControl,[a("contentbox"),a("position"),a("loading"),a("align"),a("close"),a("resize"),a("mask"),c],{},{ATTRS:{focusable:{value:false},closable:{value:false},handleMouseEvents:{value:false},allowTextSelection_:{value:true},visibleMode:{value:"visibility"}}});d.DefaultRender=f;h.UIStore.setUIByClass("overlay",{priority:h.UIStore.PRIORITY.LEVEL1,ui:d});return d},{requires:["uibase","component",
"./overlayrender","./effect"]});KISSY.add("overlay/dialogrender",function(e,d,h,f){return d.create(h,[e.require("uibase/stdmodrender"),f])},{requires:["uibase","./overlayrender","./ariarender"]});
KISSY.add("overlay/dialog",function(e,d,h,f,c,a){e=f.create(h,[e.require("uibase/stdmod"),e.require("uibase/drag"),e.require("uibase/constrain"),a],{},{ATTRS:{closable:{value:true},handlers:{valueFn:function(){var b=this;return[function(){return b.get("view").get("header")}]}}}});e.DefaultRender=c;d.UIStore.setUIByClass("dialog",{priority:d.UIStore.PRIORITY.LEVEL2,ui:e});return e},{requires:["component","overlay/overlay","uibase","overlay/dialogrender","./aria"]});
KISSY.add("overlay/popup",function(e,d,h,f){function c(a,b){if(e.isUndefined(b))b=a;else b.srcNode=a;c.superclass.constructor.call(this,b)}c.ATTRS={trigger:{setter:function(a){return e.one(a)}},triggerType:{value:"click"}};e.extend(c,h,{initializer:function(){var a=this;if(a.get("trigger"))if(a.get("triggerType")==="mouse"){a._bindTriggerMouse();a.on("bindUI",function(){a._bindContainerMouse()})}else a._bindTriggerClick()},_bindTriggerMouse:function(){var a=this,b=a.get("trigger"),g;a.__mouseEnterPopup=
function(){a._clearHiddenTimer();g=e.later(function(){a.show();g=f},100)};b.on("mouseenter",a.__mouseEnterPopup);a._mouseLeavePopup=function(){if(g){g.cancel();g=f}a._setHiddenTimer()};b.on("mouseleave",a._mouseLeavePopup)},_bindContainerMouse:function(){this.get("el").on("mouseleave",this._setHiddenTimer,this).on("mouseenter",this._clearHiddenTimer,this)},_setHiddenTimer:function(){var a=this;a._hiddenTimer=e.later(function(){a.hide()},100)},_clearHiddenTimer:function(){if(this._hiddenTimer){this._hiddenTimer.cancel();
this._hiddenTimer=f}},_bindTriggerClick:function(){var a=this;a.__clickPopup=function(b){b.halt();a.show()};a.get("trigger").on("click",a.__clickPopup)},destructor:function(){var a=this.get("trigger");if(a){this.__clickPopup&&a.detach("click",this.__clickPopup);this.__mouseEnterPopup&&a.detach("mouseenter",this.__mouseEnterPopup);this._mouseLeavePopup&&a.detach("mouseleave",this._mouseLeavePopup)}this.get("el")&&this.get("el").detach("mouseleave",this._setHiddenTimer,this).detach("mouseenter",this._clearHiddenTimer,
this)}});d.UIStore.setUIByClass("popup",{priority:d.UIStore.PRIORITY.LEVEL1,ui:c});return c},{requires:["component","./overlay"]});KISSY.add("overlay",function(e,d,h,f,c,a){d.Render=h;f.Render=c;d.Dialog=f;e.Overlay=d;e.Dialog=f;d.Popup=e.Popup=a;return d},{requires:["overlay/overlay","overlay/overlayrender","overlay/dialog","overlay/dialogrender","overlay/popup"]});
