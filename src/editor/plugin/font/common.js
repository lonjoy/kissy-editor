/**
 * font formatting for kissy editor
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/font/common", function (S, KE, TripleButton) {

    var select = {
        click:function (ev) {
            var self = this,
                v = ev.newVal,
                pre = ev.prevVal,
                editor = self.get("editor"),
                styles = self.get("styles");
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
                styles = self.get("styles");

            // For each element into the elements path.
            for (var i = 0, element; i < elements.length; i++) {
                element = elements[i];
                // Check if the element is removable by any of
                // the styles.
                for (var value in styles) {
                    if (styles.hasOwnProperty(value)) {
                        if (styles[ value ].checkElementRemovable(element, true)) {
                            //S.log(value);
                            self.set("value", value);
                            return;
                        }
                    }
                }
            }

            var defaultValue = self.get("defaultValue");
            if (defaultValue) {
                self.set("value", defaultValue);
            } else {
                self.reset("value");
            }
        }
    };

    var button = {
        mode:KE.WYSIWYG_MODE,
        offClick:function () {
            var self = this,
                editor = self.get("editor"),
                style = self.get("style");
            editor.fire("save");
            style.apply(editor.document);
            editor.fire("save");
            editor.notifySelectionChange();
            editor.focus();
        },
        onClick:function () {
            var self = this,
                editor = self.get("editor"),
                style = self.get("style");
            editor.fire("save");
            style.remove(editor.document);
            editor.fire("save");
            editor.notifySelectionChange();
            editor.focus();
        },
        selectionChange:function (ev) {
            var self = this,
                style = self.get("style"),
                elementPath = ev.path;
            if (style.checkActive(elementPath)) {
                self.set("state", TripleButton.ON);
            } else {
                self.set("state", TripleButton.OFF);
            }
        }
    };

    return {
        button:button,
        select:select
    };
}, {
    requires:['editor', '../button/', '../select/']
});
