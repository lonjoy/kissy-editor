KISSY.Editor.add("undo",function(c){var d=KISSY,e=d.Editor,g={redo:1,undo:-1},f={mode:e.WYSIWYG_MODE,init:function(){this.editor.on("afterSave afterRestore",this.cfg._respond,this);this.btn.disable()},offClick:function(){this.editor.fire("restore",{d:g[this.cfg.flag]})}},h=d.mix({flag:"undo",_respond:function(b){var a=this.btn;b.index>0?a.boff():a.disable()}},f,false),i=d.mix({flag:"redo",_respond:function(b){var a=this.btn;b.index<b.history.length-1?a.boff():a.disable()}},f,false);c.addPlugin("undo",
function(){var b=c.addButton("undo",{title:"\u64a4\u9500",loading:true,contentCls:"ke-toolbar-undo"}),a=c.addButton("undo",{title:"\u91cd\u505a",loading:true,contentCls:"ke-toolbar-redo"});e.use("undo/support",function(){new e.UndoManager(c);b.reload(h);a.reload(i)})})},{attach:false});
