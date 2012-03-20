KISSY.add("editor/plugin/bgcolor/cmd", function (S, cmd) {

    var BACKCOLOR_STYLE = {
        element:'span',
        styles:{ 'background-color':'#(color)' },
        overrides:[
            { element:'*', styles:{ 'background-color':null } }
        ],
        childRule:function () {
            // 强制最里面
            // <span style='bgcolor:red'><span style='font-size:100px'>123434</span></span>
            return false;
        }
    };

    return {
        init:function (editor) {
            if (!editor.hasCommand("bgcolor")) {
                editor.addCommand("bgcolor", {
                    exec:function (editor, c) {
                        editor.fire("save");
                        cmd.applyColor(editor, c, BACKCOLOR_STYLE);
                        editor.fire("save");
                    }
                });
            }
        }
    };

}, {
    requires:['../color/cmd']
});