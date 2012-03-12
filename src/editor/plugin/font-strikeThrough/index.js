KISSY.add("editor/plugin/font-strikeThrough/index", function (S, KE, Button, common) {
    return {
        init:function (editor) {
            editor.addButton({
                contentCls:"ke-toolbar-strikeThrough",
                title:"删除线 ",
                style:new KE.Style({
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
                })
            }, common.button);
        }
    };
}, {
    requires:['editor', '../button/', '../font/common']
});