/**
 * source editor for kissy editor
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/sourcearea/cmd", function (S, KE) {

    var UA = S.UA,
        SOURCE_MODE = KE.SOURCE_MODE ,
        WYSIWYG_MODE = KE.WYSIWYG_MODE;

    function SourceAreaCommand() {
        var self = this;
        self.mapper = {};
        var m = self.mapper;
        m[SOURCE_MODE] = self._show;
        m[WYSIWYG_MODE] = self._hide;
    }

    S.augment(SourceAreaCommand, {
        exec:function (editor, mode) {
            var m = this.mapper;
            m[mode] && m[mode].call(this, editor);
        },

        _show:function (editor) {
            var textarea = editor.textarea;
            //还没等 textarea 隐掉就先获取
            textarea.val(editor.getData(true));
            this._showSource(editor);
            editor.fire("sourcemode");
        },
        _showSource:function (editor) {
            var textarea = editor.textarea,
                iframe = editor.iframe;
            textarea.css("display", "");
            iframe.css("display", "none");
            // ie textarea height:100%不起作用
            // resize also modify height wrongly
            textarea.css({
                "height":editor.iframeWrapEl.css("height"),
                "width":"100%"
            });
            //ie6 光标透出
            textarea[0].focus();
        },
        _hideSource:function (editor) {
            var textarea = editor.textarea,
                iframe = editor.iframe;
            iframe.css("display", "");
            textarea.css("display", "none");
        },
        _hide:function (editor) {
            var textarea = editor.textarea;
            this._hideSource(editor);
            //等 textarea 隐掉了再设置
            //debugger
            editor.fire("save");
            editor.setData(textarea.val());

            editor.fire("wysiwygmode");
            //debugger
            //在切换到可视模式后再进行，否则一旦wysiwygmode在最后，撤销又恢复为原来状态
            editor.fire("save");

            //firefox 光标激活，强迫刷新
            if (UA.gecko) {
                editor.activateGecko();
            }
        }
    });

    //support wrap : http://www.w3.org/TR/2011/WD-html-markup-20110113/textarea.html
    function initWrap(editor) {
        var textarea = editor.textarea;
        textarea.on("keydown", function (ev) {
            //ctrl+w
            if (ev.ctrlKey &&
                ev.keyCode == 87) {
                ev.halt();
                var next = textarea.attr("wrap") == "off" ? "soft" : "off";
                if (!UA['ie']) {
                    textarea.detach();
                    var newTextarea = textarea._4e_clone();
                    editor.textarea = newTextarea;
                    newTextarea.attr("wrap", next);
                    newTextarea.val(textarea.val());
                    textarea[0].parentNode.replaceChild(newTextarea[0], textarea[0]);
                    initWrap(editor);
                    textarea = null;
                } else {
                    textarea.attr("wrap", next);
                }
            }
        });
    }

    var cmdObj = new SourceAreaCommand();
    return {
        init:function (editor) {
            if (editor.hasCommand("sourceArea")) {
                return;
            }
            editor.addCommand("sourceArea", cmdObj);
            initWrap(editor);
        }
    };
}, {
    requires:['editor']
});
