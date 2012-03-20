/**
 * set up editor variable
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/core/base", function (S, HtmlParser) {
    var PREFIX = "editor/plugin/",
        SUFFIX = "/";

    /**
     * 初始化编辑器
     * @constructor
     * @param textarea {(string)} 将要替换的 textarea
     * @param cfg {Object} 编辑器配置
     * @return {Editor} 返回编辑器实例
     */
    function Editor(textarea, cfg) {
        var self = this;
        if (!(self instanceof Editor)) {
            return new Editor(textarea, cfg);
        }
        self.__CORE_PLUGINS = ["htmldataprocessor", "enterkey", "clipboard", "selection"];
        textarea = S.one(textarea);
        cfg = cfg || {};
        cfg.pluginConfig = cfg.pluginConfig || {};
        self.cfg = cfg;
        self.textarea = textarea;
        self.init();
        return undefined;
    }

    KISSY.Editor = Editor;

    S.augment(Editor, S.EventTarget, {
        use:function (mods, callback) {
            var self = this,
                BASIC = self.__CORE_PLUGINS;

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
    });

    S.mix(Editor, S.EventTarget);

    Editor.Config = {
        base:S.Config.base + "editor/"
    };

    Editor.XHTML_DTD = HtmlParser['DTD'];
}, {
    requires:['htmlparser', 'core']
});