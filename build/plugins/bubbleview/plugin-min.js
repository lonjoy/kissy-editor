KISSY.Editor.add("bubbleview",function(m){function d(a){d.superclass.constructor.apply(this,arguments);a.init&&a.init.call(this)}var i=KISSY.Editor,g=KISSY,k=g.Event,n=g.DOM,o=g.Node;if(!i.BubbleView){var h={};d.attach=function(a){var f=a.pluginInstance,j=a.pluginName;a=f.editor;var l=h[j];if(l){var p=l.cfg.func,b=h[j].bubble;a.on("selectionChange",function(c){c=c.path;var e=c.elements;if(c&&e)if(c=c.lastElement)if(c=p(c)){e=h[j];if(!e.bubble)e.bubble=new d(e.cfg);b=e.bubble;b._selectedEl=c;b._plugin=
f;b.show()}else if(b){b._selectedEl=b._plugin=null;b.hide()}});k.on(n._4e_getWin(a.document),"scroll blur",function(){b&&b.hide()});k.on(document,"click",function(){b&&b.hide()})}};d.register=function(a){h[a.pluginName]={cfg:a}};d.ATTRS={focusMgr:{value:false},draggable:{value:false},zIndex:{value:m.baseZIndex(998)}};g.extend(d,i.SimpleOverlay,{_createEl:function(){var a=(new o('<div class="ke-bubbleview-bubble" onmousedown="return false;"></div>')).appendTo(document.body);this.el=a;this.set("el",
a)},show:function(){var a=this._selectedEl,f=a._4e_getOffset(document);f.top+=a.height()+5;d.superclass.show.call(this,f)}});i.BubbleView=d}});
