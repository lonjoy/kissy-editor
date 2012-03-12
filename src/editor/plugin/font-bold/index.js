KISSY.add("editor/plugin/font-bold/index", function (S, KE, Button, common) {
    return {
        init:function (editor) {
            editor.addButton({
                contentCls:"ke-toolbar-bold",
                title:"粗体 ",
                style:new KE.Style({
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
                })
            }, common.button);
        }
    };
}, {
    requires:['editor', '../button/', '../font/common']
});