KISSY.add("ext-align",function(a){function e(){a.log("align init");this.on("bindUI",this._bindUIAlign,this);this.on("renderUI",this._renderUIAlign,this);this.on("syncUI",this._syncUIAlign,this)}function f(b,d){var g=d.charAt(0),k=d.charAt(1),i,h,j,l;if(b){b=a.one(b);i=b.offset();h=b[0].offsetWidth;j=b[0].offsetHeight}else{i={left:c.scrollLeft(),top:c.scrollTop()};h=c.viewportWidth();j=c.viewportHeight()}l=i.left;i=i.top;if(g==="c")i+=j/2;else if(g==="b")i+=j;if(k==="c")l+=h/2;else if(k==="r")l+=h;
return{left:l,top:i}}a.namespace("Ext");var c=a.DOM;a.mix(e,{TL:"tl",TC:"tc",TR:"tr",CL:"cl",CC:"cc",CR:"cr",BL:"bl",BC:"bc",BR:"br"});e.ATTRS={align:{}};e.prototype={_bindUIAlign:function(){a.log("_bindUIAlign")},_renderUIAlign:function(){a.log("_renderUIAlign")},_syncUIAlign:function(){a.log("_syncUIAlign")},_uiSetAlign:function(b){a.log("_uiSetAlign");a.isPlainObject(b)&&this.align(b.node,b.points,b.offset)},align:function(b,d,g){var k,i=this.get("el");g=g||[0,0];k=c.offset(i);b=f(b,d[0]);d=f(i,
d[1]);d=[d.left-b.left,d.top-b.top];this.set("xy",[k.left-d[0]+ +g[0],k.top-d[1]+ +g[1]])},center:function(b){this.set("align",{node:b,points:[e.CC,e.CC],offset:[0,0]})},__destructor:function(){a.log("align __destructor")}};a.Ext.Align=e});
KISSY.add("ext-box",function(a){function e(){a.log("box init");this.on("renderUI",this._renderUIBoxExt,this);this.on("syncUI",this._syncUIBoxExt,this);this.on("bindUI",this._bindUIBoxExt,this)}a.namespace("Ext");var f=document,c=a.Node;e.ATTRS={el:{setter:function(b){if(a.isString(b))return a.one(b)}},elCls:{},elStyle:{},width:{},height:{},elTagName:{value:"div"},elAttrs:{},elOrder:{value:1},html:{value:false}};e.HTML_PARSER={el:function(b){return b}};e.prototype={_syncUIBoxExt:function(){a.log("_syncUIBoxExt")},
_bindUIBoxExt:function(){a.log("_bindUIBoxExt")},_renderUIBoxExt:function(){a.log("_renderUIBoxExt");var b=this.get("render")||a.one(f.body),d=this.get("el");b=new c(b);if(!d){d=new c("<"+this.get("elTagName")+">");this.get("elOrder")?b.append(d):b.prepend(d);this.set("el",d)}},_uiSetElAttrs:function(b){a.log("_uiSetElAttrs");b&&this.get("el").attr(b)},_uiSetElCls:function(b){b&&this.get("el").addClass(b)},_uiSetElStyle:function(b){a.log("_uiSetElStyle");b&&this.get("el").css(b)},_uiSetWidth:function(b){a.log("_uiSetWidth");
b&&this.get("el").width(b)},_uiSetHeight:function(b){a.log("_uiSetHeight");b&&this.get("el").height(b)},_uiSetHtml:function(b){a.log("_uiSetHtml");b!==false&&this.get("el").html(b)},__destructor:function(){a.log("box __destructor");var b=this.get("el");if(b){b.detach();b.remove()}}};a.Ext.Box=e});
KISSY.add("ext-overlay-close",function(a){function e(){a.log("close init");this.on("renderUI",this._rendUICloseExt,this);this.on("bindUI",this._bindUICloseExt,this);this.on("syncUI",this._syncUICloseExt,this)}a.namespace("Ext");var f=a.Node;e.ATTRS={closable:{value:true},closeBtn:{}};e.HTML_PARSER={closeBtn:".ks-ext-close"};e.prototype={_syncUICloseExt:function(){a.log("_syncUICloseExt")},_uiSetClosable:function(c){a.log("_uiSetClosable");var b=this.get("closeBtn");if(b)c?b.show():b.hide()},_rendUICloseExt:function(){a.log("_rendUICloseExt");
var c=this.get("closeBtn"),b=this.get("contentEl");if(!c&&b){c=(new f("<a href='#' class='ks-ext-close'><span class='ks-ext-close-x'>X</span></a>")).appendTo(b);this.set("closeBtn",c)}},_bindUICloseExt:function(){a.log("_bindUICloseExt");var c=this,b=c.get("closeBtn");b&&b.on("click",function(d){c.hide();d.halt()})},__destructor:function(){a.log("close-ext __destructor");var c=this.get("closeBtn");c&&c.detach()}};a.Ext.Close=e});
KISSY.add("ext-constrain",function(a){function e(){a.log("constrain init");this.on("bindUI",this._bindUIConstrain,this);this.on("renderUI",this._renderUIConstrain,this);this.on("syncUI",this._syncUIConstrain,this)}function f(b){var d=undefined;if(!b)return d;var g=this.get("el");if(b!==true){b=a.one(b);d=b.offset();a.mix(d,{maxLeft:d.left+b[0].offsetWidth-g[0].offsetWidth,maxTop:d.top+b[0].offsetHeight-g[0].offsetHeight})}else{b=document.documentElement.clientWidth;d={left:c.scrollLeft(),top:c.scrollTop()};
a.mix(d,{maxLeft:d.left+b-g[0].offsetWidth,maxTop:d.top+c.viewportHeight()-g[0].offsetHeight})}return d}a.namespace("Ext");var c=a.DOM;e.ATTRS={constrain:{value:false}};e.prototype={_bindUIConstrain:function(){a.log("_bindUIConstrain")},_renderUIConstrain:function(){a.log("_renderUIConstrain");var b=this,d=b.getDefAttrs(),g=d.x;d=d.y;var k=g.setter,i=d.setter;g.setter=function(h){var j=k&&k(h);if(j===undefined)j=h;if(!b.get("constrain"))return j;h=f.call(b,b.get("constrain"));return Math.min(Math.max(j,
h.left),h.maxLeft)};d.setter=function(h){var j=i&&i(h);if(j===undefined)j=h;if(!b.get("constrain"))return j;h=f.call(b,b.get("constrain"));return Math.min(Math.max(j,h.top),h.maxTop)};b.addAttr("x",g);b.addAttr("y",d)},_syncUIConstrain:function(){a.log("_syncUIConstrain")},__destructor:function(){a.log("constrain-ext __destructor")}};a.Ext.Constrain=e});
KISSY.add("ext-contentbox",function(a){function e(){a.log("contentbox init");this.on("renderUI",this._renderUIContentBox,this);this.on("syncUI",this._syncUIContentBox,this);this.on("bindUI",this._bindUIContentBox,this)}a.namespace("Ext");var f=a.Node;e.ATTRS={contentEl:{},contentElAttrs:{},contentTagName:{value:"div"},content:{}};e.HTML_PARSER={contentEl:".ks-contentbox"};e.prototype={_syncUIContentBox:function(){a.log("_syncUIContentBox")},_bindUIContentBox:function(){a.log("_bindUIContentBox")},
_renderUIContentBox:function(){a.log("_renderUIContentBox");var c=this.get("contentEl"),b=this.get("el");if(!c){c=(new f("<"+this.get("contentTagName")+" class='ks-contentbox'>")).appendTo(b);this.set("contentEl",c)}},_uiSetContentElAttrs:function(c){a.log("_uiSetContentElAttrs");c&&this.get("contentEl").attr(c)},_uiSetContent:function(c){a.log("_uiSetContent");c!==undefined&&this.get("contentEl").html(c)},__destructor:function(){a.log("contentbox __destructor")}};a.Ext.ContentBox=e});
KISSY.add("ext-drag",function(a){function e(){a.log("drag init");this.on("bindUI",this._bindUIDragExt,this);this.on("renderUI",this._renderUIDragExt,this);this.on("syncUIUI",this._syncUIDragExt,this)}a.namespace("Ext");e.ATTRS={handlers:{value:[]},draggable:{value:true}};e.prototype={_uiSetHandlers:function(f){a.log("_uiSetHanlders");f&&f.length>0&&this.__drag.set("handlers",f)},_syncUIDragExt:function(){a.log("_syncUIDragExt")},_renderUIDragExt:function(){a.log("_renderUIDragExt")},_bindUIDragExt:function(){a.log("_bindUIDragExt");
var f=this.get("el");this.__drag=new a.Draggable({node:f,handlers:this.get("handlers")})},_uiSetDraggable:function(f){a.log("_uiSetDraggable");var c=this.__drag;if(f){c.detach("drag");c.on("drag",this._dragExtAction,this)}else c.detach("drag")},_dragExtAction:function(f){this.set("xy",[f.left,f.top])},__destructor:function(){a.log("DragExt __destructor");var f=this.__drag;f&&f.destroy()}};a.Ext.Drag=e});
KISSY.add("ext-loading",function(a){function e(){a.log("LoadingExt init")}a.namespace("Ext");e.prototype={loading:function(){if(!this._loadingExtEl)this._loadingExtEl=(new a.Node("<div class='ks-ext-loading' style='position: absolute;border: none;width: 100%;top: 0;left: 0;z-index: 99999;height:100%;*height: expression(this.parentNode.offsetHeight);'>")).appendTo(this.get("el"));this._loadingExtEl.show()},unloading:function(){var f=this._loadingExtEl;f&&f.hide()}};a.Ext.Loading=e});
KISSY.add("ext-mask",function(a){function e(){a.log("mask init");this.on("bindUI",this._bindUIMask,this);this.on("renderUI",this._renderUIMask,this);this.on("syncUI",this._syncUIMask,this)}a.namespace("Ext");var f,c=a.UA,b=0;e.ATTRS={mask:{value:false}};e.prototype={_bindUIMask:function(){a.log("_bindUIMask")},_renderUIMask:function(){a.log("_renderUIMask")},_syncUIMask:function(){a.log("_syncUIMask")},_uiSetMask:function(d){a.log("_uiSetMask");if(d){this.on("show",this._maskExtShow,this);this.on("hide",
this._maskExtHide,this)}else{this.detach("show",this._maskExtShow,this);this.detach("hide",this._maskExtHide,this)}},_maskExtShow:function(){if(!f){f=(new a.Node("<div class='ks-ext-mask'>")).prependTo(document.body);f.css({position:"absolute",left:0,top:0,width:"100%",height:a.DOM.docHeight()});c.ie==6&&f.append("<iframe style='width:100%;height:expression(this.parentNode.offsetHeight);filter:alpha(opacity=0);z-index:-1;'>")}f.css({"z-index":this.get("zIndex")-1});b++;f.show()},_maskExtHide:function(){b--;
if(b<=0)b=0;b||f&&f.hide()},__destructor:function(){a.log("mask __destructor")}};a.Ext.Mask=e});
KISSY.add("ext-position",function(a){function e(){a.log("position init");this.on("bindUI",this._bindUIPosition,this);this.on("renderUI",this._renderUIPosition,this);this.on("syncUI",this._syncUIPosition,this)}a.namespace("Ext");var f=document,c=a.Event;e.ATTRS={x:{},y:{},xy:{setter:function(b){var d=a.makeArray(b);if(d.length){d[0]&&this.set("x",d[0]);d[1]&&this.set("y",d[1])}return b}},zIndex:{value:9999},visible:{value:undefined}};e.prototype={_syncUIPosition:function(){a.log("_syncUIPosition")},
_renderUIPosition:function(){a.log("_renderUIPosition");this.get("el").addClass("ks-ext-position");this.get("el").css("display","")},_bindUIPosition:function(){a.log("_bindUIPosition")},_uiSetZIndex:function(b){a.log("_uiSetZIndex");b!==undefined&&this.get("el").css("z-index",b)},_uiSetX:function(b){a.log("_uiSetX");b!==undefined&&this.get("el").offset({left:b})},_uiSetY:function(b){a.log("_uiSetY");b!==undefined&&this.get("el").offset({top:b})},_uiSetVisible:function(b){if(b!==undefined){a.log("_uiSetVisible");
this.get("el").css("visibility",b?"visible":"hidden");this[b?"_bindKey":"_unbindKey"]();this.fire(b?"show":"hide")}},_bindKey:function(){c.on(f,"keydown",this._esc,this)},_unbindKey:function(){c.remove(f,"keydown",this._esc,this)},_esc:function(b){b.keyCode===27&&this.hide()},move:function(b,d){if(a.isArray(b)){d=b[1];b=b[0]}this.set("xy",[b,d])},show:function(){this._firstShow()},_firstShow:function(){this.renderer();this._realShow();this._firstShow=this._realShow},_realShow:function(){this.set("visible",
true)},hide:function(){this.set("visible",false)},__destructor:function(){a.log("position __destructor")}};a.Ext.Position=e});
KISSY.add("ext-shim",function(a){function e(){a.log("shim init");this.on("renderUI",this._renderUIShimExt,this);this.on("bindUI",this._bindUIShimExt,this);this.on("syncUI",this._syncUIShimExt,this)}a.namespace("Ext");var f=a.Node;e.prototype={_syncUIShimExt:function(){a.log("_syncUIShimExt")},_bindUIShimExt:function(){a.log("_bindUIShimExt")},_renderUIShimExt:function(){a.log("_renderUIShimExt");var c=this.get("el"),b=new f("<iframe style='position: absolute;border: none;width: expression(this.parentNode.offsetWidth);top: 0;opacity: 0;filter: alpha(opacity=0);left: 0;z-index: -1;height: expression(this.parentNode.offsetHeight);'>");
c.prepend(b)},__destructor:function(){a.log("shim __destructor")}};a.Ext.Shim=e});
KISSY.add("ext-stdmod",function(a){function e(){a.log("stdmod init");this.on("renderUI",this._renderUIStdMod,this);this.on("syncUI",this._syncUIStdMod,this);this.on("bindUI",this._bindUIStdMod,this)}a.namespace("Ext");var f=a.Node;e.ATTRS={header:{},body:{},footer:{},bodyStyle:{},headerContent:{value:false},bodyContent:{value:false},footerContent:{value:false}};e.HTML_PARSER={header:".ks-stdmod-header",body:".ks-stdmod-body",footer:".ks-stdmod-footer"};e.prototype={_bindUIStdMod:function(){a.log("_bindUIStdMod")},
_syncUIStdMod:function(){a.log("_syncUIStdMod")},_setStdModContent:function(c,b){if(b!==false)if(a.isString(b))this.get(c).html(b);else{this.get(c).html("");this.get(c).append(b)}},_uiSetBodyStyle:function(c){c!==undefined&&this.get("body").css(c)},_uiSetBodyContent:function(c){a.log("_uiSetBodyContent");this._setStdModContent("body",c)},_uiSetHeaderContent:function(c){a.log("_uiSetHeaderContent");this._setStdModContent("header",c)},_uiSetFooterContent:function(c){a.log("_uiSetFooterContent");this._setStdModContent("footer",
c)},_renderUIStdMod:function(){a.log("_renderUIStdMod");var c=this.get("contentEl"),b=this.get("header"),d=this.get("body"),g=this.get("footer");this.get("headerContent");this.get("bodyContent");this.get("footerContent");if(!b){b=(new f("<div class='ks-stdmod-header'>")).appendTo(c);this.set("header",b)}if(!d){d=(new f("<div class='ks-stdmod-body'>")).appendTo(c);this.set("body",d)}if(!g){g=(new f("<div class='ks-stdmod-footer'>")).appendTo(c);this.set("footer",g)}},__destructor:function(){a.log("stdmod __destructor")}};
a.Ext.StdMod=e});KISSY.Editor.add("ext",function(){});
