KISSY.Editor.add("list",function(b){b.addPlugin("list",function(){var a=KISSY.Editor,c=b.addButton("ul",{title:"\u9879\u76ee\u5217\u8868",mode:a.WYSIWYG_MODE,contentCls:"ke-toolbar-ul",loading:true,type:"ul"}),d=b.addButton("ol",{title:"\u7f16\u53f7\u5217\u8868",mode:a.WYSIWYG_MODE,contentCls:"ke-toolbar-ol",loading:true,type:"ol"});a.use("list/support",function(){c.reload(a.ListSupport);d.reload(a.ListSupport)})})},{attach:false});
