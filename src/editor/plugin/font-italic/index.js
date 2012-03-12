KISSY.add("editor/plugin/font-italic/index", function (S, KE, Button, common) {
    return {
        init:function (editor) {
            editor.addButton({
                contentCls:"ke-toolbar-italic",
                title:"斜体 ",
                style:new KE.Style({
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
                })
            }, common.button);
        }
    };
}, {
    requires:['editor', '../button/', '../font/common']
});