KISSY.Editor.add("overlay",function(){function d(){d.superclass.constructor.apply(this,arguments);this._init()}var h=KISSY.Editor,f=KISSY,n=f.UA,p=h.focusManager,k=f.Node,o=f.Event,i=f.DOM,g,l,m={left:"-9999px",top:"-9999px"};if(!h.SimpleOverlay){d.init=function(){d.init=null;g=(new k('<div class="ke-mask">&nbsp;</div>')).appendTo(document.body);g.css({width:"100%",height:i.docHeight()+"px",opacity:0.4});g=new d({el:g,focusMgr:false,draggable:false})};d.ATTRS={title:{value:""},width:{value:"450px"},
visible:{value:false},zIndex:{value:9999},focusMgr:{value:true},mask:{value:false},draggable:{value:true}};f.extend(d,f.Base,{_init:function(){var a=this;a._createEl();var b=a.el;b.css("z-index",a.get("zIndex"));a.on("afterVisibleChange",function(c){if(c=c.newVal){typeof c=="boolean"?a.center():b.offset(c);a.fire("show")}else{b.css(m);a.fire("hide")}});if(a.get("focusMgr")){a._initFocusNotice();a.on("afterVisibleChange",a._editorFocusMg,a)}a.on("afterVisibleChange",function(c){c.newVal?a._register():
a._unregister()});if(a.get("mask")){a.on("show",function(){g.set("zIndex",a.get("zIndex")-1);g.show({left:0,top:0})});a.on("hide",function(){g.hide()})}a.on("afterZIndexChange",function(c){b.css("z-index",c.newVal)});h.Utils.lazyRun(this,"_prepareShow","_realShow")},_register:function(){o.on(document,"keydown",this._keydown,this)},_keydown:function(a){if(a.keyCode==27){this.hide();a.halt()}},_unregister:function(){o.remove(document,"keydown",this._keydown,this)},_createEl:function(){var a=this,b=
a.get("el");if(!b){b=(new k("<div class='ke-dialog' style='width:@width@'><div class='ke-hd'><span class='ke-hd-title'>@title@</span><span class='ke-hd-x'><a class='ke-close' href='#'>X</a></span></div><div class='ke-bd'></div><div class='ke-ft'></div></div>".replace(/@width@/,a.get("width")).replace(/@title@/,a.get("title")))).appendTo(document.body);var c=b.one(".ke-hd"),e=f.guid("ke-overlay-head-");a.body=b.one(".ke-bd");a.foot=b.one(".ke-ft");a._close=b.one(".ke-close");a._title=c.one("h1");a._close.on("click",
function(j){j.preventDefault();a.hide()});if(a.get("draggable")){c[0].id=e;a._drag=new h.Drag({node:b,handlers:{id:c}})}}a.set("el",b);a.el=b;b.css(m)},center:function(){var a=this.el,b=a.width(),c=a.height(),e=i.viewportWidth(),j=i.viewportHeight();b=(e-b)/2+i.scrollLeft();c=(j-c)/2+i.scrollTop();if(c-i.scrollTop()>200)c-=150;a.css({left:b+"px",top:c+"px"})},_getFocusEl:function(){var a=this._focusEl;if(a)return a;return this._focusEl=a=(new k("<a href='#' class='ke-focus' style='width:0;height:0;margin:0;padding:0;overflow:hidden;outline:none;font-size:0;'></a>")).appendTo(this.el)},
_initFocusNotice:function(){var a=this,b=a._getFocusEl();b.on("focus",function(){a.fire("focus")});b.on("blur",function(){a.fire("blur")})},_editorFocusMg:function(a){var b=this._focusEditor;if(a.newVal){b=this._focusEditor=p.currentInstance();n.webkit||this._getFocusEl()[0].focus();var c=this.el.all("input");if(c&&c.length)setTimeout(function(){for(var e=0;e<c.length;e++){var j=c[e];try{j.focus();j.select();break}catch(q){}}},0);else if(n.ie&&b)if(a=b.document.selection.createRange())if(a.item&&
a.item(0).ownerDocument==b.document){b=document.body.createTextRange();b.moveToElementText(this.el._4e_first()[0]);b.collapse(true);b.select()}}else b&&b.focus()},_prepareShow:function(){d.init&&d.init();if(n.ie==6){var a=this.el,b=new k("<iframe class='ke-dialog-iframe'></iframe>");b.css(f.mix({"z-index":this.get("zIndex")-1,opacity:0.4},m));b.appendTo(document.body);this.on("show",function(){var c=a.width(),e=a.height();b.css({width:c+"px",height:e+"px"});b.css(a.offset())});this.on("hide",function(){b.css(m)});
this._drag&&this._drag.on("move",function(){b.offset(a.offset())})}},loading:function(){this._prepareLoading()},_prepareLoading:function(){var a=(new k("<div title='请稍候...'  class='ke-loading' >")).appendTo(document.body);a.css("opacity",0.4);l=new d({el:a,focusMgr:false,draggable:false})},_realLoading:function(){var a=this.el;l.el.css({width:a.width(),height:a.height(),"z-index":this.get("zIndex")+1});l.show(a.offset())},unloading:function(){l.hide()},_realShow:function(a){this.set("visible",a||
true)},show:function(a){this._prepareShow(a)},hide:function(){this.set("visible",false)}});h.Utils.lazyRun(d.prototype,"_prepareLoading","_realLoading");h.SimpleOverlay=d}});
