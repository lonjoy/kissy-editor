KISSY.add("editor/plugin/forecolor/index", function (S, KE, Button, cmd) {

    return {
        init:function (editor) {
            cmd.init(editor);
            editor.addButton({
                cmdType:'foreColor',
                mode:KE.WYSIWYG_MODE,
                title:"文本颜色",
                contentCls:"ke-toolbar-color"
            }, undefined, Button);
        }
    };
}, {
    requires:['editor', '../color/btn', './cmd']
});