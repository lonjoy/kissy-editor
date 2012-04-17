KISSY.Editor.add("multiUpload/dialog", function(editor) {
    var S = KISSY,
        KE = S.Editor;
    KE.use("multiUpload/dialog/support", function() {
        editor.addDialog("multiUpload/dialog",
            new KE['MultiUpload'].Dialog(editor));
    });
}, {
    attach:false
});