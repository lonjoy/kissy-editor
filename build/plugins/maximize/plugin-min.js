KISSY.Editor.add("maximize",function(l){var d=KISSY.Editor,i=KISSY,f=i.UA,p=i.Node,m=i.Event,n=d.TripleButton,e=i.DOM,k;if(!(f.gecko<1.92)){d.Maximize||function(){function g(a){this.editor=a;this._init()}e.addStyleSheet(".ke-toolbar-padding {padding:5px;}","ke-maximize");g.init=function(){k=(new p("<iframe  class='ke-maximize-shim' style='position:absolute;top:-9999px;left:-9999px;' frameborder='0'></iframe>")).appendTo(document.body);g.init=null};i.augment(g,{_init:function(){var a=this.editor,b=
new n({container:a.toolBarDiv,title:"\u5168\u5c4f",contentCls:"ke-toolbar-maximize"});this.el=b;b.on("offClick",this.maximize,this);b.on("onClick",this.restore,this);d.Utils.lazyRun(this,"_prepare","_real");this._toolBarDiv=a.toolBarDiv},restore:function(){var a=this,b=a.editor;a._resize&&m.remove(window,"resize",a._resize);a._saveEditorStatus();a._restoreState();a.el.boff();setTimeout(function(){a._restoreEditorStatus();b.notifySelectionChange();b.fire("restoreWindow")},30)},_restoreState:function(){var a=
document,b=this.editor,c=this._savedParents;if(c){for(var h=0;h<c.length;h++){var j=c[h];j.el.css("position",j.position)}this._savedParents=null}b.wrap.css({height:this.iframeHeight});e.css(a.body,{width:"",height:"",overflow:""});a.documentElement.style.overflow="";b.editorWrap.css({position:"static",width:this.editorWrapWidth});k.css({left:"-99999px",top:"-99999px"});window.scrollTo(this.scrollLeft,this.scrollTop);a=this.el.el;a.one("span").removeClass("ke-toolbar-restore").addClass("ke-toolbar-maximize");
a.attr("title","\u5168\u5c4f");f.ie<8&&this._toolBarDiv.removeClass("ke-toolbar-padding")},_saveSate:function(){var a=this.editor,b=[],c=a.editorWrap;this.iframeHeight=a.wrap._4e_style("height");this.editorWrapWidth=c._4e_style("width");this.scrollLeft=e.scrollLeft();this.scrollTop=e.scrollTop();window.scrollTo(0,0);for(a=c.parent();a;){c=a.css("position");if(c!="static"){b.push({el:a,position:c});a.css("position","static")}a=a.parent()}this._savedParents=b;b=this.el.el;this.el.el.one("span").removeClass("ke-toolbar-maximize").addClass("ke-toolbar-restore");
b.attr("title","\u53d6\u6d88\u5168\u5c4f");f.ie<8&&this._toolBarDiv.addClass("ke-toolbar-padding")},_saveEditorStatus:function(){var a=this.editor;this.savedRanges=null;if(f.gecko&&a.iframeFocus)this.savedRanges=(a=a.getSelection())&&a.getRanges()},_restoreEditorStatus:function(){var a=this.editor,b=a.getSelection(),c=this.savedRanges;a.activateGecko();c&&b&&b.selectRanges(c);if(a.iframeFocus&&b)(a=b.getStartElement())&&a[0]&&a._4e_scrollIntoView();f.ie<8&&this.el.el.one("span").css("background-image","")},_maximize:function(a){var b=
document,c=this.editor,h=c.editorWrap,j=e.viewportHeight(),o=e.viewportWidth(),q=c.statusDiv?c.statusDiv[0].offsetHeight:0,r=c.toolBarDiv[0].offsetHeight;if(f.ie)b.body.style.overflow="hidden";else e.css(b.body,{width:0,height:0,overflow:"hidden"});b.documentElement.style.overflow="hidden";h.css({position:"absolute",zIndex:c.baseZIndex(d.zIndexManager.MAXIMIZE),width:o+"px"});k.css({zIndex:c.baseZIndex(d.zIndexManager.MAXIMIZE-5),height:j+"px",width:o+"px"});h.offset({left:0,top:0});k.css({left:0,
top:0});c.wrap.css({height:j-q-r+"px"});a!==true&&arguments.callee.call(this,true)},_real:function(){var a=this,b=a.editor;a._saveEditorStatus();a._saveSate();a._maximize();a._resize=a._resize||d.Utils.buffer(a._maximize,a,100);m.on(window,"resize",a._resize);a.el.set("state",n.ON);setTimeout(function(){a._restoreEditorStatus();b.notifySelectionChange();b.fire("maximizeWindow")},30)},_prepare:function(){g.init&&g.init()},maximize:function(){this._prepare()}});d.Maximize=g}();l.addPlugin(function(){new d.Maximize(l)})}});
