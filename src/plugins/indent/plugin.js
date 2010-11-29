/**
 * indent formatting
 * @author: yiminghe@gmail.com
 */
KISSY.Editor.add("indent", function(editor) {
    var KE = KISSY.Editor;

    editor.ready(function() {
        var outdent = editor.addButton("outdent", {
            title:"减少缩进量 ",
            contentCls:"ke-toolbar-outdent",
            type:"outdent",
            loading:true
        });

        var indent = editor.addButton("indent", {
            title:"增加缩进量 ",
            contentCls:"ke-toolbar-indent",
            type:"indent",
            loading:true
        });

        KE.use("indent/support", function() {
            outdent.reload(KE.IndentSupport);
            indent.reload(KE.IndentSupport);
        });

        editor.addCommand("indent", {
            exec:function() {
                indent.call("offClick");
            }
        });
        
        editor.addCommand("outdent", {
            exec:function() {
                outdent.call("offClick");
            }
        });
    });
});
