KISSY.add("editor/plugin/font-strikeThrough/index", function (S, KE, ui,cmd) {
    return {
        init:function (editor) {
            cmd.init(editor);
            editor.addButton({
                cmdType:"fontStrikeThrough",
                contentCls:"ke-toolbar-strikeThrough",
                title:"删除线 "
            }, undefined, ui.Button);
        }
    };
}, {
    requires:['editor', '../font/ui','./cmd']
});