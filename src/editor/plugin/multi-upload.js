KISSY.Editor.add("multiUpload", function(editor) {
    var S = KISSY,
        KE = S.Editor;

    if (!KE['Env']['mods']["multiUpload/dialog"]) {
        KE.add({
            "multiUpload/dialog":{
                attach: false,
                charset:"utf-8",
                fullpath:KE.Utils.debugUrl(
                    "/plugin/upload/dialog/plugin.js"
                    )
            }
        });


        KE.add({
            "multiUpload/dialog/support":{
                attach: false,
                charset:"utf-8",
                requires:["progressbar","localStorage","overlay"],
                fullpath:KE.Utils.debugUrl("/plugin/upload/dialog/support/plugin.js")
            }
        });
    }

    editor.addPlugin("multiUpload", function() {
        var context = editor.addButton("multiUpload", {
            contentCls:"ke-toolbar-mul-image",
            title:"批量插图",
            mode:KE.WYSIWYG_MODE,
            offClick:function() {
                var editor = this.editor;
                editor.showDialog("multiUpload/dialog");
            },
            destroy:function() {
                this.editor.destroyDialog("multiUpload/dialog");
            }
        });

        this.destroy = function() {
            context.destroy();
        };
    });

}, {
    attach:false
});