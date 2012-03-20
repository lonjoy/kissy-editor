KISSY.add("editor/plugin/font-strikeThrough/cmd", function (S, KE, Cmd) {

    var STRIKE_STYLE = new KE.Style({
        element:'del',
        overrides:[
            {
                element:'span',
                attributes:{
                    style:'text-decoration: line-through;'
                }
            },
            {
                element:'s'
            },
            {
                element:'strike'
            }
        ]
    });
    return {
        init:function (editor) {
            Cmd.addButtonCmd(editor, "fontStrikeThrough", STRIKE_STYLE);
        }
    }
}, {
    requires:['editor', '../font/cmd']
});