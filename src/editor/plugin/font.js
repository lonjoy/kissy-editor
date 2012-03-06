/**
 * font formatting for kissy editor
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/font", function (S, KE, TripleButton) {


    return {
        init:function (editor) {

            function wrapFont(vs) {
                var v = [];
                S.each(vs, function (n) {
                    v.push({
                        name:n,
                        value:n
                    });
                });
                return v;
            }

            var KEStyle = KE.Style,
                pluginConfig = editor.cfg.pluginConfig,
                fontSizes = pluginConfig["font-size"],
                controls = [];

            if (fontSizes !== false) {

                fontSizes = fontSizes || {};

                S.mix(fontSizes, {
                    items:wrapFont([
                        "8px", "10px", "12px",
                        "14px", "18px", "24px",
                        "36px", "48px", "60px",
                        "72px", "84px", "96px"
                    ]),
                    width:"55px"
                }, false);

                var fontSizeStyles = {},
                    fontSizeItems = [],
                    fontSize_style = {
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

                S.each(fontSizes.items, function (item) {
                    var name = item.name,
                        attrs = item.attrs,
                        size = item.value;

                    fontSizeStyles[size] = new KEStyle(fontSize_style, {
                        size:size
                    });

                    fontSizeItems.push({
                        name:name,
                        value:size,
                        attrs:attrs
                    });
                });

                pluginConfig["font-size"] = fontSizes;
            }

            var fontFamilies = pluginConfig["font-family"];

            if (fontFamilies !== false) {

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
                    fontFamilyItems = [],
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
                    }, i;

                pluginConfig["font-family"] = fontFamilies;

                S.each(fontFamilies.items, function (item) {
                    var name = item.name,
                        attrs = item.attrs || {},
                        value = item.value;
                    attrs.style = attrs.style || "";
                    attrs.style += ";font-family:" + value;
                    fontFamilyStyles[value] = new KEStyle(fontFamilyStyle, {
                        family:value
                    });
                    fontFamilyItems.push({
                        name:name,
                        value:value,
                        attrs:attrs
                    });
                });
            }

            var selectTpl = {
                click:function (ev) {
                    var self = this,
                        v = ev.newVal,
                        pre = ev.prevVal,
                        editor = self.editor,
                        styles = self.cfg.styles;
                    editor.focus();
                    editor.fire("save");
                    var style = styles[v];
                    if (v == pre) {
                        // 清除,wildcard pls
                        // !TODO inherit 小问题，在中间点 inherit
                        style.remove(editor.document);
                    } else {
                        style.apply(editor.document);
                    }
                    editor.fire("save");
                },

                selectionChange:function (ev) {
                    var self = this,
                        elementPath = ev.path,
                        elements = elementPath.elements,
                        btn = self.btn,
                        styles = self.cfg.styles;

                    // For each element into the elements path.
                    for (var i = 0, element; i < elements.length; i++) {
                        element = elements[i];
                        // Check if the element is removable by any of
                        // the styles.
                        for (var value in styles) {
                            if (styles.hasOwnProperty(value)) {
                                if (styles[ value ].checkElementRemovable(element, true)) {
                                    //S.log(value);
                                    btn.set("value", value);
                                    return;
                                }
                            }
                        }
                    }

                    var defaultValue = self.cfg.defaultValue;
                    if (defaultValue) {
                        btn.set("value", defaultValue);
                    } else {
                        btn.reset("value");
                    }
                }
            };


            if (false !== pluginConfig["font-size"]) {
                controls.push(editor.addSelect("font-size", S.mix({
                    title:"大小",
                    width:"30px",
                    mode:KE.WYSIWYG_MODE,
                    showValue:true,
                    defaultValue:fontSizes.defaultValue,
                    popUpWidth:fontSizes.width,
                    items:fontSizeItems,
                    styles:fontSizeStyles
                }, selectTpl)));
            }

            if (false !== pluginConfig["font-family"]) {
                controls.push(editor.addSelect("font-family", S.mix({
                    title:"字体",
                    width:"110px",
                    mode:KE.WYSIWYG_MODE,
                    defaultValue:fontFamilies.defaultValue,
                    popUpWidth:fontFamilies.width,
                    items:fontFamilyItems,
                    styles:fontFamilyStyles
                }, selectTpl)));
            }


            var singleFontTpl = {
                mode:KE.WYSIWYG_MODE,
                offClick:function () {
                    var self = this,
                        editor = self.editor,
                        style = self.cfg.style;
                    editor.fire("save");
                    style.apply(editor.document);
                    editor.fire("save");
                    editor.notifySelectionChange();
                    editor.focus();
                },
                onClick:function () {
                    var self = this,
                        editor = self.editor,
                        style = self.cfg.style;
                    editor.fire("save");
                    style.remove(editor.document);
                    editor.fire("save");
                    editor.notifySelectionChange();
                    editor.focus();
                },
                selectionChange:function (ev) {
                    var self = this,
                        style = self.cfg.style,
                        btn = self.btn,
                        elementPath = ev.path;
                    if (style.checkActive(elementPath)) {
                        btn.set("state", TripleButton.ON);
                    } else {
                        btn.set("state", TripleButton.OFF);
                    }
                }
            };

            if (false !== pluginConfig["font-bold"]) {
                controls.push(editor.addButton("font-bold", S.mix({
                    contentCls:"ke-toolbar-bold",
                    title:"粗体 ",
                    style:new KEStyle({
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
                }, singleFontTpl)));
            }

            if (false !== pluginConfig["font-italic"]) {
                controls.push(editor.addButton("font-italic", S.mix({
                    contentCls:"ke-toolbar-italic",
                    title:"斜体 ",
                    style:new KEStyle({
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
                }, singleFontTpl)));
            }

            if (false !== pluginConfig["font-underline"]) {
                controls.push(editor.addButton("font-underline", S.mix({
                    contentCls:"ke-toolbar-underline",
                    title:"下划线 ",
                    style:new KEStyle({
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
                }, singleFontTpl)));
            }

            if (false !== pluginConfig["font-strikeThrough"]) {
                var strikeStyle = (pluginConfig["font-strikeThrough"] || {})["style"] || {
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
                };
                controls.push(editor.addButton("font-underline", S.mix({
                    contentCls:"ke-toolbar-strikeThrough",
                    title:"删除线 ",
                    style:new KEStyle(strikeStyle)
                }, singleFontTpl)));
            }

            editor.addDestructor(function () {
                S.each(controls, function (c) {
                    c.destroy();
                });
            });
        }};
}, {
    requires:['editor', './button', './select']
});
