/**
 * set up editor variable
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/core/base", function (S, HtmlParser, Component, UIBase) {
    var PREFIX = "editor/plugin/",
        UA = S.UA,
        SUFFIX = "/";

    S.ready(function () {
        var body = S.one("body");
        if (UA.ie) {
            body.addClass("ke-ie" + UA.ie);
        } else if (UA['trident']) {
            body.addClass("ke-trident" + UA.trident);
        } else if (UA['gecko']) {
            body.addClass("ke-gecko");
        } else if (UA['webkit']) {
            body.addClass("ke-webkit");
        }
    });

    var Editor = UIBase.create(Component.ModelControl, [UIBase.Box], {
        initializer:function () {
            var self = this, textarea;
            self.__commands = {};
            self.__dialogs = {};
            if (textarea = self.get("textarea")) {
                if (!self.get("render") && !self.get("elBefore")) {
                    var next = textarea.next();
                    if (next) {
                        self.__set("elBefore", next);
                    } else {
                        self.__set("render", textarea.parent());
                    }
                }
                if (!self.get("width")) {
                    self.__set("width", textarea.style("width") || textarea.css("width"));
                }
                if (!self.get("height")) {
                    self.__set("height", textarea.style("height") || textarea.css("height"));
                }
            }
        },
        use:function (mods, callback) {
            var self = this,
                BASIC = self.__CORE_PLUGINS || ["htmldataprocessor", "enterkey", "clipboard", "selection"];

            mods = mods.split(",");

            for (var l = mods.length - 1; l >= 0; l--) {
                if (!mods[l]) {
                    mods.splice(l, 1);
                }
            }

            for (var i = 0; i < BASIC.length; i++) {
                var b = BASIC[i];
                if (!S.inArray(b, mods)) {
                    mods.unshift(b);
                }
            }

            S.each(mods, function (m, i) {
                if (mods[i]) {
                    mods[i] = PREFIX + m + SUFFIX;
                }
            });

            function useMods(modFns) {
                // 载入了插件的attach功能，现在按照顺序一个个attach
                for (var i = 0; i < modFns.length; i++) {
                    modFns[i].init(self);
                }
                callback && callback.call(self);
            }

            //编辑器实例 use 时会进行编辑器 ui 操作而不单单是功能定义，必须 ready
            S.use(mods.join(","), function () {
                var args = S.makeArray(arguments);
                args.shift();
                useMods(args);
            });

            self.__CORE_PLUGINS = [];

            return self;
        }
    }, {
        Config:{
            base:S.Config.base + "editor/"
        },
        XHTML_DTD:HtmlParser['DTD'],
        ATTRS:{
            textarea:{},
            handleMouseEvents:{
                value:false
            },
            focusable:{
                value:false
            },
            allowTextSelection_:{
                value:true
            },
            prefixCls:{
                value:"ke-"
            }
        }
    });

    Editor.DefaultRender = UIBase.create(Component.Render, [UIBase.Box.Render]);

    S.mix(Editor, S.EventTarget);

    Editor.name = "Editor";

    KISSY.Editor = Editor;
}, {
    requires:['htmlparser', 'component', 'uibase', 'core']
});