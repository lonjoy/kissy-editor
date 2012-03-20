KISSY.add("editor/plugin/color/cmd", function (S, KE) {
    function applyColor(editor, c, styles) {
        var doc = editor.document;
        editor.fire("save");
        if (c) {
            new KE.Style(styles, {
                color:c
            }).apply(doc);
        } else {
            // Value 'inherit'  is treated as a wildcard,
            // which will match any value.
            //清除已设格式
            new KE.Style(styles, {
                color:"inherit"
            }).remove(doc);
        }
        editor.fire("save");
    }

    return {
        applyColor:applyColor
    };
}, {
    requires:['editor']
});