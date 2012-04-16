/**
 * Add ul/ol button.
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/list/index", function (S, KE, TripleButton, ListCmd) {

    function ListButton() {
        ListButton.superclass.constructor.apply(this, arguments);
    }

    function onClick() {
        var editor = this.get("editor");
        var cmd = this.get("cmdType");
        editor.execCommand(cmd);
    }

    S.extend(ListButton, TripleButton, {
        offClick:onClick,
        onClick:onClick,
        selectionChange:function (e) {
            var self = this,
                editor = self.get("editor"),
                cmd = KE.Utils.getQueryCmd(self.get("cmdType"));
            if (editor.execCommand(cmd, e.path)) {
                self.bon();
            } else {
                self.boff();
            }
        }
    });

    return {
        init:function (editor) {

            ListCmd.init(editor);

            editor.addButton({
                cmdType:"insertUnorderedList",
                mode:KE.WYSIWYG_MODE,
                contentCls:"ke-toolbar-ul"
            }, undefined, ListButton);

            editor.addButton({
                cmdType:"insertOrderedList",
                mode:KE.WYSIWYG_MODE,
                contentCls:"ke-toolbar-ol"
            }, undefined, ListButton);
        }
    };
}, {
    requires:['editor', '../button/', './cmd']
});