KISSY.add("editor/plugin/font-size/cmd", function (S, KE, Cmd) {
    var fontSizeStyle = {
        element:'span',
        styles:{
            'font-size':'#(size)'
        },
        overrides:[
            {
                element:'font',
                attributes:{
                    'size':null
                }
            }
        ]
    };

    return {
        init:function (editor) {
            Cmd.addSelectCmd(editor, "fontSize", fontSizeStyle);
        }
    };

}, {
    requires:['editor', '../font/cmd']
});