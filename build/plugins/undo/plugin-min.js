KISSY.Editor.add("undo",function(h){var g=KISSY,e=g.Editor,j=e.Utils.arrayCompare,n=g.UA,o=g.Event;e.UndoManager||function(){function k(a){var b=a._getRawData();a=b&&a.getSelection();this.contents=b;this.bookmarks=a&&a.createBookmarks2(true)}function l(a){this.history=[];this.index=-1;this.editor=a;this.bufferRunner=e.Utils.buffer(this.save,this,500);this._init()}function m(a,b,c,d){this.editor=a;this.title=c;this.text=b;this.contentCls=d;this._init()}g.augment(k,{equals:function(a){if(this.contents!=
a.contents)return false;var b=this.bookmarks;a=a.bookmarks;if(b||a){if(!b||!a||b.length!=a.length)return false;for(var c=0;c<b.length;c++){var d=b[c],i=a[c];if(d.startOffset!=i.startOffset||d.endOffset!=i.endOffset||!j(d.start,i.start)||!j(d.end,i.end))return false}}return true}});var p={16:1,17:1,18:1},q={37:1,38:1,39:1,40:1,33:1,34:1};g.augment(l,{_keyMonitor:function(){var a=this.editor;o.on(a.document,"keydown",function(b){var c=b.keyCode;if(!(c in q||c in p))if(c===90&&(b.ctrlKey||b.metaKey)){a.fire("restore",
{d:-1});b.halt()}else if(c===89&&(b.ctrlKey||b.metaKey)){a.fire("restore",{d:1});b.halt()}else a.fire("save",{buffer:1})})},_init:function(){var a=this,b=a.editor;b.on("save",function(c){if(b.getMode()==e.WYSIWYG_MODE)c.buffer?a.bufferRunner():a.save()});b.on("restore",a.restore,a);a._keyMonitor()},save:function(){var a=this.history,b=this.index;a.length>b+1&&a.splice(b+1,a.length-b-1);var c=this.editor;b=a[a.length-1];var d=new k(c);if(!b||!b.equals(d)){a.length===30&&a.shift();a.push(d);this.index=
b=a.length-1;c.fire("afterSave",{history:a,index:b})}},restore:function(a){a=a.d;var b=this.history,c=this.editor,d=b[this.index+a];if(c.getMode()==e.WYSIWYG_MODE)if(d){c._setRawData(d.contents);if(d.bookmarks)c.getSelection().selectBookmarks(d.bookmarks);else if(n.ie){d=c.document.body.createTextRange();d.collapse(true);d.select()}this.index+=a;c.fire("afterRestore",{history:b,index:this.index});c.notifySelectionChange()}}});var f=e.TripleButton,r={redo:1,undo:-1};g.augment(m,{_init:function(){var a=
this,b=a.editor;a.el=new f({contentCls:a.contentCls,title:a.title,container:b.toolBarDiv});var c=a.el;c.set("state",f.DISABLED);b.on("afterSave afterRestore",a._respond,a);c.on("offClick",function(){b.fire("restore",{d:r[a.text]})});e.Utils.sourceDisable(b,a)},disable:function(){this._saveState=this.el.get("state");this.el.set("state",f.DISABLED)},enable:function(){this.el.set("state",this._saveState)},_respond:function(a){this.updateUI(a.history,a.index)},updateUI:function(a,b){var c=this.el,d=this.text;
if(d=="undo")b>0?c.set("state",f.OFF):c.set("state",f.DISABLED);else if(d=="redo")b<a.length-1?c.set("state",f.OFF):c.set("state",f.DISABLED)}});e.UndoManager=l;e.RestoreUI=m}();h.addPlugin(function(){new e.UndoManager(h);new e.RestoreUI(h,"undo","撤销","ke-toolbar-undo");new e.RestoreUI(h,"redo","重做","ke-toolbar-redo")})});
