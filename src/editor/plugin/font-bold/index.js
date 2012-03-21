KISSY.add("editor/plugin/font-bold/index", function (S, KE, ui,cmd) {
    return {
        init:function (editor) {
            cmd.init(editor);
            editor.addButton({
                cmdType:'fontBold',
                contentCls:"ke-toolbar-bold",
                title:"粗体 "
            }, undefined, ui.Button);
        }
    };
}, {
    requires:['editor', '../font/ui','./cmd']
});