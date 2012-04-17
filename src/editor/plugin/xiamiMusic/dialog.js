KISSY.Editor.add("xiamiMusic/dialog", function(editor) {
    var KE = KISSY.Editor;
    KE.use("xiamiMusic/dialog/support", function() {
        editor.addDialog("xiamiMusic/dialog", new KE.XiamiMusic.Dialog(editor));
    });
},{
    attach:false
});