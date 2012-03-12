/**
 * source editor for kissy editor
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/sourcearea/index", function (S, KE, B, cmd) {

    var UA = S.UA,
        SOURCE_MODE = KE.SOURCE_MODE ,
        WYSIWYG_MODE = KE.WYSIWYG_MODE;
    return {
        command:cmd,
        init:function (editor) {
            cmd.init(editor);
            editor.addButton({
                title:"源码",
                contentCls:"ke-toolbar-source"
            }, {
                init:function () {
                    var self = this;
                    editor.on("wysiwygmode", self.boff, self);
                    editor.on("sourcemode", self.bon, self);
                },
                offClick:function () {
                    editor.execCommand("sourceArea", SOURCE_MODE);
                },
                onClick:function () {
                    editor.execCommand("sourceArea", WYSIWYG_MODE);
                }
            });
        }
    };
}, {
    requires:['editor', '../button/', './command']
});
