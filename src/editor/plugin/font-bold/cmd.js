KISSY.add("editor/plugin/font-bold/cmd", function (S, KE, Cmd) {
    var BOLD_STYLE = new KE.Style({
        element:'strong',
        overrides:[
            {
                element:'b'
            },
            {
                element:'span',
                attributes:{
                    style:'font-weight: bold;'
                }
            }
        ]
    });
    return {
        init:function (editor) {
            Cmd.addButtonCmd(editor, "fontBold", BOLD_STYLE);
        }
    }
}, {
    requires:['editor', '../font/cmd']
});