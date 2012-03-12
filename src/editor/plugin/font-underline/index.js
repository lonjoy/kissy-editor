KISSY.add("editor/plugin/font-underline/index", function (S, KE, Button, common) {
    return {
        init:function (editor) {
            editor.addButton({
                contentCls:"ke-toolbar-underline",
                title:"下划线 ",
                style:new KE.Style({
                    element:'u',
                    overrides:[
                        {
                            element:'span',
                            attributes:{
                                style:'text-decoration: underline;'
                            }
                        }
                    ]
                })
            }, common.button);
        }
    };
}, {
    requires:['editor', '../button/', '../font/common']
});