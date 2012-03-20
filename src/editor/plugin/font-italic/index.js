KISSY.add("editor/plugin/font-italic/index", function (S, KE, ui,cmd) {
    return {
        init:function (editor) {
            cmd.init(editor);
            editor.addButton({
                cmdType:'fontItalic',
                contentCls:"ke-toolbar-italic",
                title:"斜体 "
            }, undefined, ui.Button);
        }
    };
}, {
    requires:['editor', '../font/ui','./cmd']
});