KISSY.Editor.add("maximize",function(k){var d=KISSY.Editor,e=KISSY,h=e.UA,i=e.Node,l=e.Event,j=d.TripleButton,g=e.DOM,f;d.Maximize||function(){function c(a){this.editor=a;this._init()}c.init=function(){f=new i("<iframe style='position:absolute;top:-9999px;left:-9999px;' frameborder='0'></iframe>");document.body.appendChild(f[0]);c.init=null};e.augment(c,{_init:function(){this.el=new j({container:this.editor.toolBarDiv,cls:"ke-tool-editor-source",title:"\u5168\u5c4f",contentCls:"ke-toolbar-maximize"});
this.el.on("offClick",this.maximize,this);this.el.on("onClick",this.restore,this);d.Utils.lazyRun(this,"_prepare","_real")},restore:function(){var a=this,b=a.editor;l.remove(window,"resize",a._maximize,a);this._saveEditorStatus();b.wrap.css({height:a.iframeHeight});(new i(document.body)).css({width:"",height:"",overflow:""});b.editorWrap.css({position:"static",width:a.editorWrapWidth});f.css({left:"-99999px",top:"-99999px"});window.scrollTo(a.scrollLeft,a.scrollTop);a.el.set("state",j.OFF);setTimeout(function(){a._restoreEditorStatus()},
30)},_saveSate:function(){var a=this.editor;this.iframeHeight=a.wrap._4e_style("height");this.editorWrapWidth=a.editorWrap._4e_style("width");this.scrollLeft=g.scrollLeft();this.scrollTop=g.scrollTop();window.scrollTo(0,0)},_saveEditorStatus:function(){var a=this.editor;if(h.gecko&&a.iframeFocus)this.savedRanges=(a=a.getSelection())&&a.getRanges()},_restoreEditorStatus:function(){var a=this.editor,b;if(h.gecko&&a.iframeFocus){b=a.getSelection();this.el.el[0].focus();a.focus();this.savedRanges&&b&&
b.selectRanges(this.savedRanges)}if(a.iframeFocus&&b)(b=b.getStartElement())&&b[0]&&b.scrollIntoView(a.document,false)},_maximize:function(){var a=this.editor,b=g.viewportHeight(),m=g.viewportWidth(),n=a.statusDiv?a.statusDiv.height():0,o=a.toolBarDiv.height();if(h.ie)document.body.style.overflow="hidden";else(new i(document.body)).css({width:0,height:0,overflow:"hidden"});a.editorWrap.css({position:"absolute",zIndex:9999,width:m+"px"});f.css({zIndex:9998,height:b+"px",width:m+"px"});a.editorWrap.offset({left:0,
top:0});f.css({left:0,top:0});a.wrap.css({height:b-n-o-14+"px"})},_real:function(){var a=this;this._saveEditorStatus();this._saveSate();this._maximize();this._maximize();l.on(window,"resize",a._maximize,a);this.el.set("state",j.ON);setTimeout(function(){a._restoreEditorStatus()},30)},_prepare:function(){c.init&&c.init()},maximize:function(){this._prepare()}});d.Maximize=c}();k.addPlugin(function(){new d.Maximize(k)})});
