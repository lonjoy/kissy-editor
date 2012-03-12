/**
 * font formatting for kissy editor
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/font-size/index", function (S, KE, Select, common) {


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
                fontSizes = pluginConfig["font-size"];

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
                fontSizeStyle = {
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
                var size = item.value;
                fontSizeStyles[size] = new KEStyle(fontSizeStyle, {
                    size:size
                });
            });

            editor.addSelect({
                title:"大小",
                width:"30px",
                mode:KE.WYSIWYG_MODE,
                showValue:true,
                defaultValue:fontSizes.defaultValue,
                popUpWidth:fontSizes.width,
                items:fontSizes.items,
                styles:fontSizeStyles
            }, common.select);
        }};
}, {
    requires:['editor', '../select/', '../font/common']
});
