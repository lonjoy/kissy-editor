KISSY.Editor.add("flashsupport",function(l){var h=KISSY.Editor,m=KISSY,t=m.Event,u=h.ContextMenu,o=m.Node,p=h.BubbleView,v=h.TripleButton,w=h.SimpleOverlay,j=l.htmlDataProcessor,i="ke_flash",q=h.Utils.getFlashUrl;l=j&&j.dataFilter;h.Flash||function(){function c(a){this.editor=a;this._init()}function g(a){return a._4e_name()==="img"&&!!a.hasClass(i)&&a}var x=/\.swf(?:$|\?)/i;c.isFlashEmbed=function(a){a=a.attributes;return a.type=="application/x-shockwave-flash"||x.test(a.src||"")};m.augment(c,{_config:function(){this._cls=
i;this._type="flash";this._title="Flash\u5c5e\u6027";this._bodyHtml="<p><label>\u5730\u5740\uff1a <input class='ke-flash-url' style='width:280px' value='\u8bf7\u8f93\u5165\u5982 http://www.xxx.com/xxx.swf'/></label></p><p style='margin:5px 0'><label>\u5bbd\u5ea6\uff1a <input class='ke-flash-width' style='width:110px' /></label>&nbsp;&nbsp;<label>\u9ad8\u5ea6\uff1a<input class='ke-flash-height' style='width:110px' /></label></p><p style='margin:5px 0'><label>\u5bf9\u9f50\uff1a <select class='ke-flash-align'><option value=''>\u65e0</option><option value='left'>\u5de6\u5bf9\u9f50</option><option value='right'>\u53f3\u5bf9\u9f50</option></select><p>";
this._footHtml="<button class='ke-flash-ok'>\u786e\u5b9a</button> <button class='ke-flash-cancel'>\u53d6\u6d88</button>";this._contentCls="ke-toolbar-flash";this._tip="\u63d2\u5165Flash";this._contextMenu=y;this._flashRules=["img."+i]},_init:function(){this._config();var a=this.editor,b={},e=this._contextMenu;a._toolbars=a._toolbars||{};a._toolbars[this._type]=this;this.el=new v({container:a.toolBarDiv,contentCls:this._contentCls,title:this._tip});this.el.on("click",this.show,this);if(e)for(var f in e)(function(d){b[d]=
function(){e[d](a)}})(f);u.register(a.document,{rules:this._flashRules,width:"120px",funcs:b});p.attach({pluginName:this._type,pluginInstance:this});t.on(a.document,"dblclick",this._dbclick,this);h.Utils.lazyRun(this,"_prepareShow","_realShow")},_getFlashUrl:function(a){return q(a)},_updateTip:function(a,b){b=this.editor.restoreRealElement(b);a.html(this._getFlashUrl(b));a.attr("href",this._getFlashUrl(b))},_dbclick:function(a){var b=new o(a.target);if(b._4e_name()==="img"&&b.hasClass(this._cls)){this.show(null,
b);a.halt()}},_prepareShow:function(){var a=new w({title:this._title,width:this._config_dwidth||"350px",mask:true});a.body.html(this._bodyHtml);a.foot.html(this._footHtml);this.d=a;this._initD()},_realShow:function(){this._updateD();this.d.show()},_updateD:function(){var a=this.editor,b=this.selectedFlash;if(b){a=a.restoreRealElement(b);a.attr("width")&&this.dWidth.val(parseInt(a.attr("width")));a.attr("height")&&this.dHeight.val(parseInt(a.attr("height")));this.dAlign.val(a.attr("align"));this.dUrl.val(q(a))}else{this.dUrl.val("\u8bf7\u8f93\u5165\u5982 http://www.xxx.com/xxx.swf");
this.dWidth.val("");this.dHeight.val("");this.dAlign.val("")}},show:function(a,b){this.selectedFlash=b;this._prepareShow()},_initD:function(){var a=this,b=a.d;a.dHeight=b.el.one(".ke-flash-height");a.dWidth=b.el.one(".ke-flash-width");a.dUrl=b.el.one(".ke-flash-url");a.dAlign=b.el.one(".ke-flash-align");var e=b.el.one(".ke-flash-ok");b=b.el.one(".ke-flash-cancel");e.on("click",a._gen,a);b.on("click",function(){a.d.hide()})},_getDInfo:function(){return{url:this.dUrl.val(),attrs:{width:this.dWidth.val(),
height:this.dHeight.val(),align:this.dAlign.val()}}},_gen:function(){var a=this.editor,b=this._getDInfo(),e=b&&b.url;b=b&&b.attrs;var f=" ";if(m.trim(e)){if(b)for(var d in b)f+=d+"='"+b[d]+"' ";e="<object "+f+' classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"><param name="quality" value="high" /><param name="movie" value="'+e+'" /><embed '+f+'pluginspage="http://www.macromedia.com/go/getflashplayer" quality="high"  src="'+
e+'"  type="application/x-shockwave-flash"/></object>';d=new o(e,null,a.document);b=a.createFakeElement?a.createFakeElement(d,this._cls,this._type,true,e,b):d;b=a.insertElement(b);this.selectedFlash&&a.getSelection().selectElement(b);this.d.hide()}}});h.Flash=c;c.registerBubble=function(a,b,e){p.register({pluginName:a,func:e,init:function(){var f=this,d=f.el;d.html(b+'  <a class="ke-bubbleview-url" target="_blank" href="#"></a> -     <span class="ke-bubbleview-link ke-bubbleview-change">\u7f16\u8f91</span> -     <span class="ke-bubbleview-link ke-bubbleview-remove">\u5220\u9664</span>');
var r=d.one(".ke-bubbleview-url"),s=d.one(".ke-bubbleview-change");d=d.one(".ke-bubbleview-remove");s._4e_unselectable();r._4e_unselectable();d._4e_unselectable();s.on("click",function(k){f._plugin.show(null,f._selectedEl);k.halt()});d.on("click",function(k){var n=f._plugin;f._selectedEl._4e_remove();n.editor.notifySelectionChange();k.halt()});f.on("beforeVisibleChange",function(k){var n=f._selectedEl;k.newVal&&n&&f._plugin._updateTip(r,n)})}})};c.registerBubble("flash","Flash \u7f51\u5740\uff1a ",
g);c.checkFlash=g;var y={"Flash\u5c5e\u6027":function(a){var b=a.getSelection();b=b&&b.getStartElement();b=g(b);a=a._toolbars.flash;b&&a.show(null,b)}};c.CLS_FLASH=i;c.TYPE_FLASH="flash"}();l&&l.addRules({elements:{object:function(c){var g=c.attributes;if(!(g.classid&&String(g.classid).toLowerCase())){for(g=0;g<c.children.length;g++)if(c.children[g].name=="embed"){if(!h.Flash.isFlashEmbed(c.children[g]))return null;return j.createFakeParserElement(c,i,"flash",true)}return null}return j.createFakeParserElement(c,
i,"flash",true)},embed:function(c){if(!h.Flash.isFlashEmbed(c))return null;return j.createFakeParserElement(c,i,"flash",true)}}},5)});
