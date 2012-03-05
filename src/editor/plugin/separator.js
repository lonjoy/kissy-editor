/**
 * separator for button
 * @author yiminghe@gmail.com
 */
KISSY.Editor.add("separator", function(editor) {
    editor.addPlugin("separator", function() {
        var s = new KISSY.Node('<span ' +
            'class="ke-toolbar-separator">&nbsp;' +
            '</span>')
            .appendTo(editor.toolBarEl);
        editor.on("destroy", function() {
            s.remove();
        });
    }, {
        duplicate:true
    });
}, {
    attach:false
});