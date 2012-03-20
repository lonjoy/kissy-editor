KISSY.add("editor/plugin/font-underline/cmd", function (S, KE, Cmd) {

    var UNDERLINE_STYLE = new KE.Style({
        element:'u',
        overrides:[
            {
                element:'span',
                attributes:{
                    style:'text-decoration: underline;'
                }
            }
        ]
    });
    return {
        init:function (editor) {
            Cmd.addButtonCmd(editor, "fontUnderline", UNDERLINE_STYLE);
        }};
}, {
    requires:['editor', '../font/cmd']
});