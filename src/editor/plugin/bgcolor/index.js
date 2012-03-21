KISSY.add("editor/plugin/bgcolor/index", function (S, KE, Button, cmd) {

    return {
        init:function (editor) {
            cmd.init(editor);
            editor.addButton({
                cmdType:'bgcolor',
                title:"背景颜色",
                contentCls:"ke-toolbar-bgcolor"
            }, undefined, Button);
        }
    };
}, {
    requires:['editor', '../color/btn', './cmd']
});