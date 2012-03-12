/**
 * insert image for kissy editor
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/image/index", function (S, KE, Button, BubbleView, ContextMenu, DialogLoader) {

    var UA = S.UA,
        DOM = S.DOM,
        Node = S.Node,
        $ = S.all,
        Event = S.Event,
        checkImg = function (node) {
            return node &&
                DOM._4e_name(node) === 'img' &&
                (!/(^|\s+)ke_/.test(node.className));
        },
        tipHtml = '<a class="ke-bubbleview-url" target="_blank" href="#">在新窗口查看</a>  |  '
            + '<a class="ke-bubbleview-link ke-bubbleview-change" href="#">编辑</a>  |  '
            + '<a class="ke-bubbleview-link ke-bubbleview-remove" href="#">删除</a>'
            + '';

    return {
        init:function (editor) {

            function showImageEditor(selectedEl) {
                DialogLoader.useDialog(editor, "image/dialog", selectedEl);
            }

            // 重新采用form提交，不采用flash，国产浏览器很多问题
            editor.addButton({
                contentCls:"ke-toolbar-image",
                title:"插入图片",
                mode:KE.WYSIWYG_MODE
            }, {
                offClick:function () {
                    showImageEditor(null);
                }
            });

            var handlers = {
                "图片属性":function () {
                    var img = checkImg(this.selectedEl[0]);
                    if (img) {
                        showImageEditor(img);
                    }
                },
                "插入新行":function () {
                    var editor = this.get("editor"),
                        doc = editor.document,
                        p = new Node(doc.createElement("p"));
                    if (!UA['ie']) {
                        p._4e_appendBogus();
                    }
                    var r = new KE.Range(doc);
                    r.setStartAfter(this.selectedEl);
                    r.select();
                    editor.insertElement(p);
                    r.moveToElementEditablePosition(p, 1);
                    r.select();
                }
            };

            ContextMenu.register({
                editor:editor,
                filter:checkImg,
                width:"120px",
                handlers:handlers
            });

            Event.on(editor.document, "dblclick", function (ev) {
                ev.halt();
                if (checkImg(ev.target)) {
                    showImageEditor($(ev.target));
                }
            });

            BubbleView.register({
                editor:editor,
                filter:checkImg,
                init:function () {
                    var bubble = this,
                        el = bubble.get("contentEl");
                    el.html(tipHtml);
                    var tipurl = el.one(".ke-bubbleview-url"),
                        tipchange = el.one(".ke-bubbleview-change"),
                        tipremove = el.one(".ke-bubbleview-remove");
                    el.unselectable();
                    tipchange.on("click", function (ev) {
                        showImageEditor(bubble.selectedEl);
                        ev.halt();
                    });
                    tipremove.on("click", function (ev) {
                        if (UA['webkit']) {
                            var r = editor.getSelection().getRanges();
                            if (r && r[0]) {
                                r[0].collapse();
                                r[0].select();
                            }
                        }
                        bubble.selectedEl.remove();
                        bubble.hide();
                        editor.notifySelectionChange();
                        ev.halt();
                    });
                    /*
                     位置变化
                     */
                    bubble.on("show", function () {
                        var a = bubble.selectedEl;
                        if (!a) {
                            return;
                        }
                        var src = a.attr("_ke_saved_src") || a.attr("src");
                        tipurl.attr("href", src);
                    });
                }
            });
        }
    };
}, {
    requires:['editor',
        '../button/',
        '../bubbleview/',
        '../contextmenu/',
        '../dialog-loader/']
});