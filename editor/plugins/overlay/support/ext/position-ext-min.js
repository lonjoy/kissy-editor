KISSY.add("ext-position",function(b){function d(){b.log("position init");this.on("bindUI",this._bindUIPosition,this);this.on("renderUI",this._renderUIPosition,this);this.on("syncUI",this._syncUIPosition,this)}b.namespace("Ext");var e=document,f=b.Event;d.ATTRS={x:{},y:{},xy:{setter:function(a){var c=b.makeArray(a);if(c.length){c[0]&&this.set("x",c[0]);c[1]&&this.set("y",c[1])}return a}},zIndex:{value:9999},visible:{value:undefined}};d.prototype={_syncUIPosition:function(){b.log("_syncUIPosition")},
_renderUIPosition:function(){b.log("_renderUIPosition");this.get("el").addClass("ks-ext-position");this.get("el").css("display","")},_bindUIPosition:function(){b.log("_bindUIPosition")},_uiSetZIndex:function(a){b.log("_uiSetZIndex");a!==undefined&&this.get("el").css("z-index",a)},_uiSetX:function(a){b.log("_uiSetX");a!==undefined&&this.get("el").offset({left:a})},_uiSetY:function(a){b.log("_uiSetY");a!==undefined&&this.get("el").offset({top:a})},_uiSetVisible:function(a){if(a!==undefined){b.log("_uiSetVisible");
this.get("el").css("visibility",a?"visible":"hidden");this[a?"_bindKey":"_unbindKey"]();this.fire(a?"show":"hide")}},_bindKey:function(){f.on(e,"keydown",this._esc,this)},_unbindKey:function(){f.remove(e,"keydown",this._esc,this)},_esc:function(a){a.keyCode===27&&this.hide()},move:function(a,c){if(b.isArray(a)){c=a[1];a=a[0]}this.set("xy",[a,c])},show:function(){this._firstShow()},_firstShow:function(){this.renderer();this._realShow();this._firstShow=this._realShow},_realShow:function(){this.set("visible",
true)},hide:function(){this.set("visible",false)},__destructor:function(){b.log("position __destructor")}};b.Ext.Position=d});
