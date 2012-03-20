KISSY.add("editor/plugin/font-italic/cmd", function (S, KE, Cmd) {

    var ITALIC_STYLE = new KE.Style({
        element:'em',
        overrides:[
            {
                element:'i'
            },
            {
                element:'span',
                attributes:{
                    style:'font-style: italic;'
                }
            }
        ]
    });
    return {
        init:function (editor) {
            Cmd.addButtonCmd(editor, "fontItalic", ITALIC_STYLE);
        }
    }
}, {
    requires:['editor', '../font/cmd']
});