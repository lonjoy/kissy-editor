KISSY.Editor.add("overlay",function(){function e(){var a=this;e.superclass.constructor.apply(a,arguments);a._init();if(g.UA.ie===6){a.on("show",function(){var b=a.get("el"),c=b.width(),i=b.height();j.css({width:c+"px",height:i+"px"});j.offset(b.offset())});a.on("hide",function(){j.offset({left:-999,top:-999})})}if(a.get("mask")){a.on("show",function(){d&&d.css({left:"0px",top:"0px"});f&&f.css({left:"0px",top:"0px"})});a.on("hide",function(){d&&d.css({left:"-9999px",top:"-9999px"});f&&f.css({left:"-9999px",
top:"-9999px"})})}}var k=KISSY.Editor,g=KISSY,m=g.UA,o=k.focusManager,l=g.Node,n=g.Event,h=g.DOM,d,f,j;if(!k.SimpleOverlay){e.init=function(){var a=document.body;d=new l('<div class="ke-mask">&nbsp;</div>');d.css({left:"-9999px",top:"-9999px"});d.css({width:"100%",height:h.docHeight()+"px",opacity:0.4});d.appendTo(a);if(m.ie&&m.ie==6){j=new l("<iframe class='ke-dialog-iframe'></iframe>");j.appendTo(a);f=new l("<iframe class='ke-mask'></iframe>");f.css({left:"-9999px",top:"-9999px"});f.css({width:"100%",
height:h.docHeight()+"px",opacity:0.4});f.appendTo(a)}e.init=null};e.ATTRS={title:{value:""},width:{value:"450px"},visible:{value:false},focusMgr:{value:true},mask:{value:false},draggable:{value:true}};g.extend(e,g.Base,{_init:function(){var a=this;a._initEl();var b=a.get("el");a.on("afterVisibleChange",function(c){if(c=c.newVal){typeof c=="boolean"?a.center():b.offset(c);a.fire("show")}else{b.css({left:"-9999px",top:"-9999px"});a.fire("hide")}});if(a.get("focusMgr")){a._initFocusNotice();a.on("beforeVisibleChange",
a._editorFocusMg,a)}b.css({left:"-9999px",top:"-9999px"});a.on("afterVisibleChange",function(c){c.newVal?a._register():a._unregister()})},_register:function(){n.on(document,"keydown",this._keydown,this);d.on("click",this.hide,this)},_keydown:function(a){if(a.keyCode==27){this.hide();a.halt()}},_unregister:function(){n.remove(document,"keydown",this._keydown,this);d.detach("click",this.hide,this)},_initEl:function(){var a=this,b=a.get("el");if(b)a.el=b;else{b=new l("<div class='ke-dialog' style='width:"+
a.get("width")+"'><div class='ke-hd'><span class='ke-hd-title'>"+a.get("title")+"</span><span class='ke-hd-x'><a class='ke-close' href='#'>X</a></span></div><div class='ke-bd'></div><div class='ke-ft'></div></div>");document.body.appendChild(b[0]);a.set("el",b);a.el=b;a.body=b.one(".ke-bd");a.foot=b.one(".ke-ft");a._close=b.one(".ke-close");a._title=b.one(".ke-hd-title").one("h1");a._close.on("click",function(i){i.preventDefault();a.hide()});var c=b.one(".ke-hd");c=new k.Drag({node:b,handlers:[c]});
m.ie===6&&c.on("move",function(){j.offset(b.offset())})}},center:function(){var a=this.get("el"),b=parseInt(a.css("width")),c=a[0].offsetHeight,i=h.viewportWidth(),p=h.viewportHeight();b=(i-b)/2+h.scrollLeft();c=(p-c)/2+h.scrollTop();if(c-h.scrollTop()>200)c-=150;a.css({left:b+"px",top:c+"px"})},_prepareShow:function(){e.init()},_getFocusEl:function(){if(this._focusEl)return this._focusEl;this._focusEl=new l("<a href='#' class='ke-focus' style='width:0;height:0;margin:0;padding:0;overflow:hidden;outline:none;font-size:0;'></a>");
this._focusEl.appendTo(this.el);return this._focusEl},_initFocusNotice:function(){var a=this,b=a._getFocusEl();b.on("focus",function(){a.fire("focus")});b.on("blur",function(){a.fire("blur")})},_editorFocusMg:function(a){var b=this._focusEditor;if(a.newVal){b=this._focusEditor=o.currentInstance();this._getFocusEl()[0].focus();var c=this.el.one("input");if(c)setTimeout(function(){try{c[0].focus();c[0].select()}catch(i){}},0);else if(m.ie&&b)if(a=b.document.selection.createRange())if(a.item&&a.item(0).ownerDocument==
b.document){b=document.body.createTextRange();b.moveToElementText(this.el._4e_first()[0]);b.collapse(true);b.select()}}else b&&b.focus()},_realShow:function(a){this.get("el");this.set("visible",a||true)},show:function(a){this._prepareShow(a)},hide:function(){this.get("el");this.set("visible",false)}});k.Utils.lazyRun(e.prototype,"_prepareShow","_realShow");k.SimpleOverlay=e}});
