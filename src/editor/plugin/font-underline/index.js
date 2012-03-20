KISSY.add("editor/plugin/font-underline/index", function (S, KE, ui, cmd) {
    return {
        init:function (editor) {
            cmd.init(editor);
            editor.addButton({
                cmdType:"fontUnderline",
                contentCls:"ke-toolbar-underline",
                title:"下划线 "
            }, undefined, ui.Button);
        }
    };
}, {
    requires:['editor', '../font/ui', './cmd']
});