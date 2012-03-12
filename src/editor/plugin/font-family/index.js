/**
 * font formatting for kissy editor
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/font-family/index", function (S, KE, Select, common) {
    return {
        init:function (editor) {
            var pluginConfig = editor.cfg.pluginConfig,
                fontFamilies = pluginConfig["font-family"];
            fontFamilies = fontFamilies || {};
            S.mix(fontFamilies, {
                items:[
                    //ie 不认识中文？？？
                    {
                        name:"宋体",
                        value:"SimSun"
                    },
                    {
                        name:"黑体",
                        value:"SimHei"
                    },
                    {
                        name:"隶书",
                        value:"LiSu"
                    },
                    {
                        name:"楷体",
                        value:"KaiTi_GB2312"
                    },
                    {
                        name:"微软雅黑",
                        value:"Microsoft YaHei"
                    },
                    {
                        name:"Georgia",
                        value:"Georgia"
                    },
                    {
                        name:"Times New Roman",
                        value:"Times New Roman"
                    },
                    {
                        name:"Impact",
                        value:"Impact"
                    },
                    {
                        name:"Courier New",
                        value:"Courier New"
                    },
                    {
                        name:"Arial",
                        value:"Arial"
                    },
                    {
                        name:"Verdana",
                        value:"Verdana"
                    },
                    {
                        name:"Tahoma",
                        value:"Tahoma"
                    }
                ],
                width:"130px"
            }, false);


            var fontFamilyStyles = {},
                fontFamilyStyle = {
                    element:'span',
                    styles:{
                        'font-family':'#(family)'
                    },
                    overrides:[
                        {
                            element:'font',
                            attributes:{
                                'face':null
                            }
                        }
                    ]
                };


            S.each(fontFamilies.items, function (item) {
                var attrs = item.attrs || {},
                    value = item.value;
                attrs.style = attrs.style || "";
                attrs.style += ";font-family:" + value;
                fontFamilyStyles[value] = new KE.Style(fontFamilyStyle, {
                    family:value
                });
            });

            editor.addSelect({
                title:"字体",
                width:"110px",
                mode:KE.WYSIWYG_MODE,
                defaultValue:fontFamilies.defaultValue,
                popUpWidth:fontFamilies.width,
                items:fontFamilies.items,
                styles:fontFamilyStyles
            }, common.select);
        }};
}, {
    requires:['editor', '../select/', '../font/common']
});
