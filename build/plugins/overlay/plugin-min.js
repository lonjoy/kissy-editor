KISSY.Editor.add("overlay",function(p){function d(){d.superclass.constructor.apply(this,arguments);this._init()}var h=KISSY.Editor,f=KISSY,l=f.UA,q=h.focusManager,e=f.Node,n=f.Event,g=f.DOM,i,j,o={left:"-9999px",top:"-9999px"};if(!h.SimpleOverlay){d.init=function(){d.init=null;i=new d({el:new e("<div>"),cls:"ke-mask",focusMgr:false,draggable:false});i.el.css({width:"100%","background-color":"#000000",height:g.docHeight()+"px",opacity:0.4})};d.ATTRS={title:{value:""},width:{value:"450px"},height:{},
cls:{},visible:{value:false},zIndex:{value:p.baseZIndex(9999)},focusMgr:{value:true},mask:{value:false},draggable:{value:true}};f.extend(d,f.Base,{_init:function(){var a=this;a._createEl();var b=a.el;b.css("z-index",a.get("zIndex"));a.on("afterVisibleChange",function(c){if(c=c.newVal){typeof c=="boolean"?a.center():b.offset(c);a.fire("show")}else{b.css(o);a.fire("hide")}});if(a.get("focusMgr")){a._initFocusNotice();a.on("afterVisibleChange",a._editorFocusMg,a)}a.on("afterVisibleChange",function(c){c.newVal?
a._register():a._unregister()});if(a.get("mask")){a.on("show",function(){i.set("zIndex",a.get("zIndex")-1);i.show({left:0,top:0})});a.on("hide",function(){i.hide()})}a.on("afterZIndexChange",function(c){b.css("z-index",c.newVal)});h.Utils.lazyRun(this,"_prepareShow","_realShow")},_register:function(){n.on(document,"keydown",this._keydown,this)},_keydown:function(a){if(a.keyCode==27){this.hide();a.halt()}},_unregister:function(){n.remove(document,"keydown",this._keydown,this)},_createEl:function(){var a=
this,b=a.get("el");if(b)if(!b[0].parentNode||b[0].parentNode.nodeType!=h.NODE.NODE_ELEMENT)b=(new e("<div class='ke-dialog'>")).append((new e("<div class='ke-dialog-wrapper'>")).append(b)).appendTo(document.body);else{var c=new e("<div class='ke-dialog'>");c.insertBefore(b);c.append((new e("<div class='ke-dialog-wrapper'>")).append(b));b=c}else{b=(new e("<div class='ke-dialog' ><div class='ke-dialog-wrapper'><div class='ke-hd'><span class='ke-hd-title'>@title@</span><a class='ke-hd-x' href='#'><span class='ke-close'>X</span></a></div><div class='ke-bd'></div><div class='ke-ft'></div></div></div>".replace(/@title@/,
a.get("title")))).appendTo(document.body);c=b.one(".ke-hd");var m=f.guid("ke-overlay-head-"),k=a.get("height");a.body=b.one(".ke-bd");a.foot=b.one(".ke-ft");a._title=c.one("h1");b.one(".ke-hd-x").on("click",function(r){r.preventDefault();a.hide()});k&&a.body.css({height:k,overflow:"auto"});if(a.get("draggable")){c[0].id=m;a._drag=new h.Drag({node:b,handlers:{id:c}})}}a.get("cls")&&b.addClass(a.get("cls"));a.get("width")&&b.css("width",a.get("width"));a.set("el",b);a.el=b;b.css(o)},center:function(){var a=
this.el,b=a.width(),c=a.height(),m=g.viewportWidth(),k=g.viewportHeight();b=(m-b)/2+g.scrollLeft();c=(k-c)/2+g.scrollTop();if(c-g.scrollTop()>200)c-=150;b=Math.max(b,g.scrollLeft());c=Math.max(c,g.scrollTop());a.css({left:b+"px",top:c+"px"})},_getFocusEl:function(){var a=this._focusEl;if(a)return a;return this._focusEl=a=(new e("<a href='#' class='ke-focus' style='width:0;height:0;margin:0;padding:0;overflow:hidden;outline:none;font-size:0;'></a>")).appendTo(this.el)},_initFocusNotice:function(){var a=
this,b=a._getFocusEl();b.on("focus",function(){a.fire("focus")});b.on("blur",function(){a.fire("blur")})},_editorFocusMg:function(a){var b=this._focusEditor;if(a.newVal){b=this._focusEditor=q.currentInstance();l.webkit||this._getFocusEl()[0].focus();if(l.ie&&b)if(a=b.document.selection.createRange())if(a.item&&a.item(0).ownerDocument==b.document){b=document.body.createTextRange();b.moveToElementText(this.el._4e_first()[0]);b.collapse(true);b.select()}}else b&&b.focus()},_prepareShow:function(){d.init&&
d.init();if(l.ie==6){var a=new e("<iframe class='ke-dialog-iframe'></iframe>");a.css(f.mix({opacity:0}));a.insertBefore(this.el.one(".ke-dialog-wrapper"))}},loading:function(){this._prepareLoading()},_prepareLoading:function(){var a=(new e("<div title='请稍候...'  class='ke-loading' >")).appendTo(document.body);a.css("opacity",0.4);j=new d({el:a,focusMgr:false,draggable:false})},_realLoading:function(){var a=this.el;j.el.css({width:a.width(),height:a.height(),"z-index":this.get("zIndex")+1});j.show(a.offset())},
unloading:function(){j.hide()},_realShow:function(a){this.set("visible",a||true)},show:function(a){this._prepareShow(a)},hide:function(){this.set("visible",false)}});h.Utils.lazyRun(d.prototype,"_prepareLoading","_realLoading");h.SimpleOverlay=d}});
