KISSY.Editor.add("indent",function(a){a.addPlugin("indent",function(){var b=KISSY.Editor,c=a.addButton("outdent",{title:"\u51cf\u5c11\u7f29\u8fdb\u91cf ",mode:b.WYSIWYG_MODE,contentCls:"ke-toolbar-outdent",type:"outdent",loading:true}),d=a.addButton("indent",{title:"\u589e\u52a0\u7f29\u8fdb\u91cf ",mode:b.WYSIWYG_MODE,contentCls:"ke-toolbar-indent",type:"indent",loading:true});b.use("indent/support",function(){c.reload(b.IndentSupport);d.reload(b.IndentSupport)});a.addCommand("indent",{exec:function(){d.call("offClick")}});a.addCommand("outdent",
{exec:function(){c.call("offClick")}})})},{attach:false});
