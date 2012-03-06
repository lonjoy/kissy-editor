/**
 * Editor For KISSY 1.3
 * @preserve thanks to CKSource's intelligent work on CKEditor
 * @author yiminghe@gmail.com
 * @version 3.0
 * @buildtime: @TIMESTAMP@
 */
KISSY.add("editor", function (S) {
    var $ = S.all,
        TRUE = true,
        FALSE = false,
        NULL = null,
        DOC = document,
        KE = S.Editor,
        Utils = KE.Utils,
        /**
         * @const
         */
            UA = S.UA,
        IS_IE = UA['ie'],
        /**
         * @const
         */
            DOM = S.DOM,
        /**
         * @const
         */
            Node = S.Node,
        //OLD_IE = !window.getSelection,
        /**
         * @const
         */
            Event = S.Event,
        /**
         * @const
         */
            DISPLAY = "display",
        /**
         * @const
         */
            WIDTH = "width",
        /**
         * @const
         */
            HEIGHT = "height",
        /**
         * @const
         */
            NONE = "none",
        focusManager = KE.focusManager,
        tryThese = Utils.tryThese,
        /**
         * @const
         */
            HTML5_DTD = '<!doctype html>',
        /**
         * @const
         */
            DTD = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" ' +
            '"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',
        /**
         * @const
         */
            KE_TEXTAREA_WRAP_CLASS = ".ke-textarea-wrap",
        /**
         * @const
         */
            KE_TOOLBAR_CLASS = ".ke-editor-tools",
        /**
         * @const
         */
            KE_STATUSBAR_CLASS = ".ke-editor-status";

    /**
     *
     * @param id {string}
     * @param customStyle {string}
     */
    function prepareIFrameHtml(id, customStyle, customLink) {
        var links = "",
            CSS_FILE = KE.Utils.debugUrl("/theme/editor-iframe.css");
        if (customLink) {
            for (var i = 0; i < customLink.length; i++) {
                links += '<link ' +
                    'href="' +
                    customLink[i]
                    + '" rel="stylesheet"/>';
            }
        }
        return HTML5_DTD
            + "<html>"
            + "<head>"
            // kissy-editor #12
            // IE8 doesn't support carets behind images(empty content after image's block) setting ie7 compatible mode would force IE8+ to run in IE7 compat mode.
            + (DOC.documentMode === 8 ? '<meta http-equiv="X-UA-Compatible" content="IE=7" />' : "")
            + "<title>${title}</title>"
            + "<link "
            + "href='"
            + CSS_FILE
            + "'" +
            " rel='stylesheet'/>"
            + "<style>"
            + (customStyle || "")
            + "</style>"
            + links
            + "</head>"
            + "<body class='ke-editor'>"
            //firefox 必须里面有东西，否则编辑前不能删除!
            + "&nbsp;"
            //使用 setData 加强安全性
            // + (textarea.value || "")
            + (id ?
            // The script that launches the bootstrap logic on 'domReady', so the document
            // is fully editable even before the editing iframe is fully loaded (#4455).
            //确保iframe确实载入成功,过早的话 document.domain 会出现无法访问
            '<script id="ke_actscript" type="text/javascript">' +
                ( Utils.isCustomDomain() ? ( 'document.domain="' + DOC.domain + '";' ) : '' ) +
                'window.parent.KISSY.Editor._initIFrame("' + id + '");' +
                '</script>' : ''
            )
            + "</body>"
            + "</html>";

    }

    var INSTANCE_ID = 1,

        srcScript = 'document.open();' +
            // The document domain must be set any time we
            // call document.open().
            ( Utils.isCustomDomain() ? ( 'document.domain="' + DOC.domain + '";' ) : '' ) +
            'document.close();',

        editorHtml = '<div  class="ke-editor-wrap">' +
            '<div class="' + KE_TOOLBAR_CLASS.substring(1) + '"></div>' +
            '<div class="' + KE_TEXTAREA_WRAP_CLASS.substring(1) + '">' +
            '<iframe' +
            ' style="' + WIDTH + ':100%;' + HEIGHT + ':100%;border:none;" ' +
            ' ' + WIDTH + '="100%" ' +
            ' ' + HEIGHT + '="100%" ' +
            ' frameborder="0" ' +
            ' title="' + "kissy-editor" + '" ' +
            // With IE, the custom domain has to be taken care at first,
            // for other browsers, the 'src' attribute should be left empty to
            // trigger iframe's 'load' event.
            (IS_IE ?
                (' src="' + 'javascript:void(function(){' + encodeURIComponent(srcScript) + '}())"') :
                '') +
            ' allowTransparency="true">' +
            '</iframe>' +
            '</div>' +
            "<div class='" + KE_STATUSBAR_CLASS.substring(1) + "'></div>" +
            "</div>";

    var SOURCE_MODE, WYSIWYG_MODE;
    SOURCE_MODE = KE.SOURCE_MODE = 0;
    WYSIWYG_MODE = KE.WYSIWYG_MODE = 1;
    KE["SOURCE_MODE"] = SOURCE_MODE;
    KE["WYSIWYG_MODE"] = WYSIWYG_MODE;

    S.augment(KE, {
        init:function () {
            var self = this,
                textarea = self.textarea,
                editorWrap;

            self.__commands = {};
            self.__destructors = [];

            if (IS_IE) {
                DOM.addClass(DOC.body, "ke-ie" + IS_IE);
            }
            if (UA['trident']) {
                DOM.addClass(DOC.body, "ke-trident" + UA.trident);
            }
            else if (UA['gecko']) {
                DOM.addClass(DOC.body, "ke-gecko");
            }
            else if (UA['webkit']) {
                DOM.addClass(DOC.body, "ke-webkit");
            }
            editorWrap = new Node(editorHtml);

            self.editorWrap = editorWrap;
            self._UUID = INSTANCE_ID++;
            //实例集中管理
            focusManager.register(self);
            var wrap;
            wrap = self.wrap = editorWrap.one(KE_TEXTAREA_WRAP_CLASS);
            self.iframe = wrap.one("iframe");
            self.toolBarEl = editorWrap.one(KE_TOOLBAR_CLASS);
            self.statusBarEl = editorWrap.one(KE_STATUSBAR_CLASS);

            // 标准浏览器编辑器内焦点不失去,firefox?
            // 标准浏览器实际上不需要！range在iframe内保存着呢，选择高亮变灰而已
            // 2011-11-19 启用封装 preventFocus
            // 点击工具栏内任何东西都不会使得焦点转移
            Utils.preventFocus(self.toolBarEl);

            var tw = textarea.style(WIDTH),
                th = textarea.style(HEIGHT);
            if (tw) {
                editorWrap.css(WIDTH, tw);
                textarea.css(WIDTH, "100%");
            }
            textarea.css(DISPLAY, NONE);
            editorWrap.insertAfter(textarea);
            wrap.append(textarea);

            if (th) {
                wrap.css(HEIGHT, th);
                textarea.css(HEIGHT, "100%");
            }

            var iframe = self.iframe;

            if (textarea.hasAttr("tabindex")) {
                iframe.attr("tabIndex", UA['webkit'] ? -1 : textarea.attr("tabIndex"));
            }

            self.ready(function () {
                self._ready = TRUE;
                KE.fire("instanceCreated", {editor:self});
            });

            // With FF, it's better to load the data on iframe.load. (#3894,#4058)
            if (UA['gecko']) {
                iframe.on('load', self._setUpIFrame, self);
            } else {
                // webkit(chrome) load等不来！
                self._setUpIFrame();
            }
            if (self.cfg['attachForm'] && textarea[0].form) {
                self._attachForm();
            }
        },

        addDestructor:function (fn) {
            this.__destructors.push(fn);
        },

        destroy:function () {
            var self = this,
                editorWrap = self.editorWrap,
                textarea = self.textarea,
                doc = self.document,
                win = self.iframe[0].contentWindow;
            self.sync();
            KE.focusManager.remove(self);
            Event.remove([doc, doc.documentElement, doc.body, win, self.iframe[0]]);

            S.each(self.__destructors, function (d) {
                d.call(self);
            });
            textarea.insertBefore(editorWrap);
            editorWrap.remove();
            textarea.css({
                width:editorWrap[0].style.width,
                height:self.wrap.css("height")
            });
            textarea.show();
            self.__destructors = [];
            self.fire("destroy");
            self.detach();
            //其他可能处理
        },
        /**
         *
         */
        _attachForm:function () {
            var self = this,
                textarea = self.textarea,
                form = new Node(textarea[0].form);
            form.on("submit", self.sync, self);
            self.on("destroy", function () {
                form.detach("submit", self.sync, self);
            });
        },

        showDialog:function (name, args, fn) {
            var self = this;
            args = args || [];
            self.use(name, function (S, dialog) {
                dialog.show.apply(dialog, args);
                fn && fn(dialog);
                self.fire("dialogShow", {
                    dialog:dialog.dialog,
                    pluginDialog:dialog,
                    dialogName:name
                });
            });
        },
        /**
         *
         * @param name {string}
         * @param obj {Object}
         */
        addCommand:function (name, obj) {
            this.__commands[name] = obj;
        },
        /**
         *
         * @param name {string}
         */
        hasCommand:function (name) {
            return this.__commands[name];
        },
        /**
         *
         * @param name {string}
         */
        execCommand:function (name) {
            var self = this,
                cmd = self.__commands[name],
                args = S.makeArray(arguments);
            args.shift();
            args.unshift(self);
            return cmd.exec.apply(cmd, args);
        },
        /**
         *
         * @return {number}
         */
        getMode:function () {
            return this.textarea.css("display") == "none" ?
                WYSIWYG_MODE :
                SOURCE_MODE;
        },
        /**
         *
         * @param [format] {boolean}
         */
        getData:function (format) {
            var self = this,
                htmlDataProcessor,
                html;
            if (self.getMode() == WYSIWYG_MODE) {
                if (self.document && self.document.body)
                    html = self.document.body.innerHTML;
                else
                    html = "";
            } else {
                //代码模式下不需过滤
                html = self.textarea.val();
            }
            //如果不需要要格式化，例如提交数据给服务器
            if (htmlDataProcessor = self.htmlDataProcessor) {
                if (format) {
                    html = htmlDataProcessor.toHtml(html, "p");
                } else {
                    html = htmlDataProcessor.toServer(html, "p");
                }
            }
            html = S.trim(html);
            /*
             如果内容为空，对 parser 自动加的空行滤掉
             */
            if (/^<p>((&nbsp;)|\s)*<\/p>$/.test(html)) {
                html = "";
            }
            return html;
        },

        /**
         *
         * @param data {string}
         */
        setData:function (data) {

            var self = this,
                htmlDataProcessor,
                body = self.document.body,
                afterData = data;
            if (htmlDataProcessor = self.htmlDataProcessor) {
                afterData = htmlDataProcessor.toDataFormat(data, "p");
            }
            body.innerHTML = afterData;
            // 空值时需要设两次 firefox??
            if (!afterData) {
                body.innerHTML = afterData;
            }
            if (self.getMode() != WYSIWYG_MODE) {
                //代码模式下不需过滤
                self.textarea.val(data);
            }
        },
        /**
         *
         */
        sync:function () {
            var self = this;
            self.textarea.val(self.getData());
        },

        /**
         * 撤销重做时，不需要格式化代码，直接取自身
         */
        _getRawData:function () {
            return this.document.body.innerHTML;
        },


        /**
         * 撤销重做时，不需要格式化代码，直接取自身
         *
         * @param data {string}
         */
        _setRawData:function (data) {
            this.document.body.innerHTML = data;
        },

        _prepareIFrameHtml:function (id) {
            var cfg = this.cfg;
            return prepareIFrameHtml(id, cfg.customStyle, cfg.customLink);
        },

        getSelection:function () {
            return KE.Selection.getSelection(this.document);
        },

        focus:function () {
            var self = this,
                doc = self.document,
                win = DOM._4e_getWin(doc);
            // firefox7 need this
            if (!UA['ie']) {
                // note : 2011-11-17 report by 石霸
                // ie 的 parent 不能 focus ，否则会使得 iframe 内的编辑器光标回到开头
                win && win.parent && win.parent.focus();
            }
            // yiminghe note:webkit need win.focus
            // firefox 7 needs also?
            win && win.focus();
            //ie and firefox need body focus
            doc.body.focus();
            self.notifySelectionChange();
        },

        blur:function () {
            var self = this,
                win = DOM._4e_getWin(self.document);
            win.blur();
            self.document.body.blur();
        },

        /**
         * @param cssText {string}
         */
        addCustomStyle:function (cssText) {
            var self = this,
                cfg = self.cfg,
                customStyle = cfg['customStyle'] || "";
            customStyle += "\n" + cssText;
            DOM.addStyleSheet(self.iframe[0].contentWindow, customStyle);
        },

        addCustomLink:function (link) {
            var self = this,
                cfg = self.cfg,
                customLink = cfg.customLink,
                doc = self.document;
            customLink.push(link);
            var elem = doc.createElement("link");
            elem.rel = "stylesheet";
            doc.getElementsByTagName("head")[0].appendChild(elem);
            elem.href = link;
        },

        removeCustomLink:function (link) {
            var self = this,
                cfg = self.cfg,
                doc = self.document,
                links = DOM.query("link", doc);
            for (var i = 0; i < links.length; i++) {
                if (links[i].href == link) {
                    DOM.remove(links[i]);
                }
            }
            var cls = cfg.customLink || [],
                ind = S.indexOf(link, cls);
            if (ind != -1) {
                cls.splice(ind, 1);
            }
        },
        /**
         *
         */
        _setUpIFrame:function () {
            var self = this,
                iframe = self.iframe,
                data = self._prepareIFrameHtml(self._UUID),
                win = iframe[0].contentWindow,
                doc;

            try {
                // In IE, with custom document.domain, it may happen that
                // the iframe is not yet available, resulting in "Access
                // Denied" for the following property access.
                //ie 设置domain 有问题：yui也有
                //http://yuilibrary.com/projects/yui2/ticket/2052000
                //http://waelchatila.com/2007/10/31/1193851500000.html
                //http://nagoon97.wordpress.com/tag/designmode/
                doc = win.document;
            } catch (e) {
                // Trick to solve this issue, forcing the iframe to get ready
                // by simply setting its "src" property.
                //noinspection SillyAssignmentJS
                iframe[0].src = iframe[0].src;
                // In IE6 though, the above is not enough, so we must pause the
                // execution for a while, giving it time to think.
                if (IS_IE < 7) {
                    setTimeout(run, 10);
                    return;
                }
            }
            run();
            function run() {
                doc = win.document;
                self.document = doc;
                iframe.detach();
                // Don't leave any history log in IE. (#5657)
                doc.open("text/html", "replace");
                doc.write(data);
                doc.close();
            }
        },
        ready:function (func) {
            var self = this;
            if (self._ready) {
                func();
            } else {
                self.on("dataReady", func);
            }
        },
        /**
         *
         */
        _monitor:function () {
            var self = this;
            if (self._monitorId) {
                clearTimeout(self._monitorId);
            }

            self._monitorId = setTimeout(function () {
                var selection = self.getSelection();
                if (selection && !selection.isInvalid) {
                    var startElement = selection.getStartElement(),
                        currentPath = new KE.ElementPath(startElement);
                    if (!self.previousPath || !self.previousPath.compare(currentPath)) {
                        self.previousPath = currentPath;
                        self.fire("selectionChange",
                            {
                                selection:selection,
                                path:currentPath,
                                element:startElement
                            });
                    }
                }
            }, 100);
        },
        /**
         * 强制通知插件更新状态，防止插件修改编辑器内容，自己反而得不到通知
         */
        notifySelectionChange:function () {
            var self = this;
            self.previousPath = NULL;
            self._monitor();
        },
        insertElement:function (element, init, callback) {

            var self = this;

            if (self.getMode() !== WYSIWYG_MODE) {
                return;
            }

            self.focus();

            var clone,
                elementName = element._4e_name(),
                xhtml_dtd = KE.XHTML_DTD,
                KER = KE.RANGE,
                KEN = KE.NODE,
                isBlock = xhtml_dtd.$block[ elementName ],
                selection = self.getSelection(),
                ranges = selection && selection.getRanges(),
                range,
                lastElement,
                current, dtd;
            //give sometime to breath
            if (!ranges || ranges.length == 0) {
                var args = arguments, fn = args.callee;
                setTimeout(function () {
                    fn.apply(self, args);
                }, 30);
                return;
            }

            self.fire("save");
            for (var i = ranges.length - 1; i >= 0; i--) {
                range = ranges[ i ];
                // Remove the original contents.
                range.deleteContents();
                clone = !i && element || element._4e_clone(TRUE);
                init && init(clone);
                // If we're inserting a block at dtd-violated position, split
                // the parent blocks until we reach blockLimit.
                if (isBlock) {
                    while (( current = range.getCommonAncestor(FALSE, TRUE) )
                        && ( dtd = xhtml_dtd[ current._4e_name() ] )
                        && !( dtd && dtd [ elementName ] )) {
                        // Split up inline elements.
                        if (current._4e_name() in xhtml_dtd["span"])
                            range.splitElement(current);
                        // If we're in an empty block which indicate a new paragraph,
                        // simply replace it with the inserting block.(#3664)
                        else if (range.checkStartOfBlock()
                            && range.checkEndOfBlock()) {
                            range.setStartBefore(current);
                            range.collapse(TRUE);
                            current.remove();
                        }
                        else {
                            range.splitBlock();
                        }
                    }
                }

                // Insert the new node.
                range.insertNode(clone);
                // Save the last element reference so we can make the
                // selection later.
                if (!lastElement)
                    lastElement = clone;
            }
            if (!lastElement) {
                return;
            }

            var next = lastElement._4e_nextSourceNode(TRUE), p,
                doc = self.document;
            dtd = KE.XHTML_DTD;

            //行内元素不用加换行
            if (!dtd.$inline[clone._4e_name()]) {
                //末尾时 ie 不会自动产生br，手动产生
                if (!next) {
                    p = new Node("<p>&nbsp;</p>", NULL, doc);
                    p.insertAfter(lastElement);
                    next = p;
                }
                //firefox,replace br with p，和编辑器整体换行保持一致
                else if (next._4e_name() == "br"
                    &&
                    //必须符合嵌套规则
                    dtd[next.parent()._4e_name()]["p"]
                    ) {
                    p = new Node("<p>&nbsp;</p>", NULL, doc);
                    next[0].parentNode.replaceChild(p[0], next[0]);
                    next = p;
                }
            } else {
                //qc #3803 ，插入行内后给个位置放置光标
                next = new Node(doc.createTextNode(" "));
                next.insertAfter(lastElement);
            }
            range.moveToPosition(lastElement, KER.POSITION_AFTER_END);
            if (next && next[0].nodeType == KEN.NODE_ELEMENT)
                range.moveToElementEditablePosition(next);

            selection.selectRanges([ range ]);
            self.focus();
            //http://code.google.com/p/kissy/issues/detail?can=1&start=100&id=121
            clone && clone._4e_scrollIntoView();
            self._saveLater();
            callback && callback(clone);
        },

        /**
         *
         * @param data {string}
         * @param dataFilter 是否采用特定的 dataFilter
         */
        insertHtml:function (data, dataFilter) {
            var self = this, htmlDataProcessor;

            if (self.getMode() !== WYSIWYG_MODE) {
                return;
            }

            if (htmlDataProcessor = self.htmlDataProcessor) {
                data = htmlDataProcessor.toDataFormat(data, null, dataFilter);
            }

            self.focus();
            self.fire("save");

            var editorDoc = self.document,
                saveInterval = 0;
            // ie9 仍然需要这样！
            // ie9 标准 selection 有问题，连续插入不能定位光标到插入内容后面
            if (IS_IE) {
                var $sel = editorDoc.selection;
                if ($sel.type == 'Control') {
                    $sel.clear();
                }
                try {
                    $sel.createRange().pasteHTML(data);
                } catch (e) {
                    S.log("insertHtml error in ie");
                }
            } else {
                // ie9 仍然没有
                // 1.webkit insert html 有问题！会把标签去掉，算了直接用 insertElement.
                // 10.0 修复？？
                // firefox 初始编辑器无焦点报异常
                try {
                    editorDoc.execCommand('inserthtml', FALSE, data);
                } catch (e) {
                    setTimeout(function () {
                        // still not ok in ff!
                        // 手动选择 body 的第一个节点
                        if (self.getSelection().getRanges().length == 0) {
                            var r = new KE.Range(editorDoc);
                            var node = DOM._4e_first(editorDoc.body, function (el) {
                                return el[0].nodeType == 1 && el._4e_name() != "br";
                            });
                            if (!node) {
                                node = new Node(editorDoc.createElement("p"));
                                editorDoc.body.appendChild(node[0]);
                            }
                            r.setStartAt(node, KE.RANGE.POSITION_AFTER_START);
                            r.select();
                        }
                        editorDoc.execCommand('inserthtml', FALSE, data);
                    }, saveInterval = 100);
                }
            }
            // bug by zjw2004112@163.com :
            // 有的浏览器 ： chrome , ie67 貌似不会自动滚动到粘贴后的位置
            setTimeout(function () {
                self.getSelection().scrollIntoView();
            }, saveInterval);
            self._saveLater(saveInterval);
        },

        _saveLater:function (saveInterval) {
            var self = this;
            if (self.__saveTimer) {
                clearTimeout(self.__saveTimer);
                self.__saveTimer = null;
            }
            self.__saveTimer = setTimeout(function () {
                self.fire("save");
            }, saveInterval || 0);
        }
    });
    /**
     * 初始化iframe内容以及浏览器间兼容性处理，
     * 必须等待iframe内的脚本向父窗口通知
     *
     * @param id {string}
     */
    KE["_initIFrame"] = function (id) {

        var self = focusManager.getInstance(id),
            iframe = self.iframe,
            textarea = self.textarea[0],
            win = iframe[0].contentWindow,
            doc = self.document,
            cfg = self.cfg,
            // Remove bootstrap script from the DOM.
            script = doc.getElementById("ke_actscript");
        DOM.remove(script);

        var body = doc.body;

        /**
         * from kissy editor 1.0
         *
         * // 注1：在 tinymce 里，designMode = "on" 放在 try catch 里。
         //     原因是在 firefox 下，当iframe 在 display: none 的容器里，会导致错误。
         //     但经过我测试，firefox 3+ 以上已无此现象。
         // 注2： ie 用 contentEditable = true.
         //     原因是在 ie 下，IE needs to use contentEditable or
         // it will display non secure items for HTTPS
         // Ref:
         //   - Differences between designMode and contentEditable
         //     http://74.125.153.132/search?q=cache:5LveNs1yHyMJ:nagoon97.wordpress.com/2008/04/20/differences-between-designmode-and-contenteditable/+ie+contentEditable+designMode+different&cd=6&hl=en&ct=clnk
         */

        // 这里对主流浏览器全部使用 contenteditable
        // 那么不同于 kissy editor 1.0
        // 在body范围外右键，不会出现 复制，粘贴等菜单
        // 因为这时右键作用在document而不是body
        // 1.0 document.designMode='on' 是编辑模式
        // 2.0 body.contentEditable=true body外不是编辑模式
        if (IS_IE) {
            // Don't display the focus border.
            body['hideFocus'] = TRUE;
            // Disable and re-enable the body to avoid IE from
            // taking the editing focus at startup. (#141 / #523)
            body.disabled = TRUE;
            body['contentEditable'] = TRUE;
            body.removeAttribute('disabled');
        } else {
            // Avoid opening design mode in a frame window thread,
            // which will cause host page scrolling.(#4397)
            setTimeout(function () {
                // Prefer 'contentEditable' instead of 'designMode'. (#3593)
                if (UA['gecko'] || UA['opera']) {
                    body['contentEditable'] = TRUE;
                }
                else if (UA['webkit'])
                    body.parentNode['contentEditable'] = TRUE;
                else
                    doc['designMode'] = 'on';
            }, 0);
        }

        // Gecko need a key event to 'wake up' the editing
        // ability when document is empty.(#3864)
        // activateEditing 删掉，初始引起屏幕滚动了
        // Webkit: avoid from editing form control elements content.
        if (UA['webkit']) {
            Event.on(doc, "click", function (ev) {
                var control = new Node(ev.target);
                if (S.inArray(control._4e_name(), ['input', 'select'])) {
                    ev.preventDefault();
                }
            });
            // Prevent from editig textfield/textarea value.
            Event.on(doc, "mouseup", function (ev) {
                var control = new Node(ev.target);
                if (S.inArray(control._4e_name(), ['input', 'textarea'])) {
                    ev.preventDefault();
                }
            });
        }

        function blinkCursor(retry) {
            tryThese(
                function () {
                    doc['designMode'] = 'on';
                    //异步引起时序问题，尽可能小间隔
                    setTimeout(function () {
                        doc['designMode'] = 'off';

                        body.focus();
                        // Try it again once..
                        if (!arguments.callee.retry) {
                            arguments.callee.retry = TRUE;
                            //arguments.callee();
                        }
                    }, 50);
                },
                function () {
                    // The above call is known to fail when parent DOM
                    // tree layout changes may break design mode. (#5782)
                    // Refresh the 'contentEditable' is a cue to this.
                    doc['designMode'] = 'off';

                    DOM.attr(body, 'contentEditable', FALSE);
                    DOM.attr(body, 'contentEditable', TRUE);
                    // Try it again once..
                    !retry && blinkCursor(1);

                });
        }

        // Create an invisible element to grab focus.
        if (UA['gecko'] || IS_IE || UA['opera']) {
            var focusGrabber;
            focusGrabber = new Node(
                // Use 'span' instead of anything else to fly under the screen-reader radar. (#5049)
                '<span ' +
                    'tabindex="-1" ' +
                    'style="position:absolute; left:-10000"' +
                    ' role="presentation"' +
                    '></span>').insertAfter(textarea);
            focusGrabber.on('focus', function () {
                self.focus();
            });
            self.activateGecko = function () {
                if (UA['gecko'] && self.iframeFocus)
                    focusGrabber[0].focus();
            };
            self.on('destroy', function () {
                focusGrabber.detach();
                focusGrabber.remove();
            });
        }

        // IE standard compliant in editing frame doesn't focus the editor when
        // clicking outside actual content, manually apply the focus. (#1659)

        if (
        // ie6,7 点击滚动条失效
        // IS_IE
        // && doc.compatMode == 'CSS1Compat'
        // wierd ,sometimes ie9 break
        // ||
        // 2012-01-11 ie 处理装移到 selection.js :
        // IE has an issue where you can't select/move the caret by clicking outside the body if the document is in standards mode
        // doc['documentMode']
            UA['gecko']
                || UA['opera']) {
            var htmlElement = doc.documentElement;
            Event.on(htmlElement, 'mousedown', function (evt) {
                // Setting focus directly on editor doesn't work, we
                // have to use here a temporary element to 'redirect'
                // the focus.
                // firefox 不能直接设置，需要先失去焦点
                // return;
                // 左键激活
                var t = evt.target;
                if (t == htmlElement) {
                    //S.log("click");
                    //self.focus();
                    //return;
                    if (UA['gecko'])
                        blinkCursor(FALSE);
                    //setTimeout(function() {
                    //这种：html mousedown -> body beforedeactivate
                    //    self.focus();
                    //}, 30);
                    //这种：body beforedeactivate -> html mousedown
                    focusGrabber[0].focus();
                }
            });
        }

        Event.on(win, 'focus', function () {
            /**
             * yiminghe特别注意：firefox光标丢失bug
             * blink后光标出现在最后，这就需要实现保存range
             * focus后再恢复range
             */
            if (UA['gecko']) {
                blinkCursor(FALSE);
            }
            else if (UA['opera']) {
                body.focus();
            }
            // focus 后强制刷新自己状态
            self.notifySelectionChange();
        });


        if (UA['gecko']) {
            /**
             * firefox 焦点丢失后，再点编辑器区域焦点会移不过来，要点两下
             */
            Event.on(doc, "mousedown", function () {
                if (!self.iframeFocus) {
                    blinkCursor(FALSE);
                }
            });
        }

        if (IS_IE) {
            // Override keystrokes which should have deletion behavior
            // on control types in IE . (#4047)
            /**
             * 选择img，出现缩放框后不能直接删除
             */
            Event.on(doc, 'keydown', function (evt) {
                var keyCode = evt.keyCode;
                // Backspace OR Delete.
                if (keyCode in { 8:1, 46:1 }) {
                    //debugger
                    var sel = self.getSelection(),
                        control = sel.getSelectedElement();
                    if (control) {
                        // Make undo snapshot.
                        self.fire('save');
                        // Delete any element that 'hasLayout' (e.g. hr,table) in IE8 will
                        // break up the selection, safely manage it here. (#4795)
                        var bookmark = sel.getRanges()[ 0 ].createBookmark();
                        // Remove the control manually.
                        control.remove();
                        sel.selectBookmarks([ bookmark ]);
                        self.fire('save');
                        evt.preventDefault();
                    }
                }
            });

            // PageUp/PageDown scrolling is broken in document
            // with standard doctype, manually fix it. (#4736)
            // ie8 主窗口滚动？？
            if (doc.compatMode == 'CSS1Compat') {
                var pageUpDownKeys = { 33:1, 34:1 };
                Event.on(doc, 'keydown', function (evt) {
                    if (evt.keyCode in pageUpDownKeys) {
                        setTimeout(function () {
                            self.getSelection().scrollIntoView();
                        }, 0);
                    }
                });
            }
        }

        // Adds the document body as a context menu target.
        setTimeout(function () {
            /*
             * IE BUG: IE might have rendered the iframe with invisible contents.
             * (#3623). Push some inconsequential CSS style changes to force IE to
             * refresh it.
             *
             * Also, for some unknown reasons, short timeouts (e.g. 100ms) do not
             * fix the problem. :(
             */
            if (IS_IE) {
                setTimeout(function () {
                    if (doc) {
                        body.runtimeStyle['marginBottom'] = '0px';
                        body.runtimeStyle['marginBottom'] = '';
                    }
                }, 1000);
            }
        }, 0);


        setTimeout(function () {
            self.fire("dataReady");
            /*
             some break for firefox ，不能立即设置
             */
            var disableObjectResizing = cfg['disableObjectResizing'],
                disableInlineTableEditing = cfg['disableInlineTableEditing'];
            if (disableObjectResizing || disableInlineTableEditing) {
                // IE, Opera and Safari may not support it and throw errors.
                try {
                    doc.execCommand('enableObjectResizing', FALSE, !disableObjectResizing);
                    doc.execCommand('enableInlineTableEditing', FALSE, !disableInlineTableEditing);
                }
                catch (e) {
                    // 只能ie能用？，目前只有 firefox,ie 支持图片缩放
                    // For browsers which don't support the above methods,
                    // we can use the the resize event or resizestart for IE (#4208)
                    Event.on(body, IS_IE ? 'resizestart' : 'resize', function (evt) {
                        var t = new Node(evt.target);
                        if (
                            disableObjectResizing ||
                                (
                                    t._4e_name() === 'table'
                                        &&
                                        disableInlineTableEditing )
                            ) {
                            evt.preventDefault();
                        }
                    });
                }
            }
        }, 10);


        // Gecko/Webkit need some help when selecting control type elements. (#3448)
        //if (!( IS_IE || UA['opera'])) {
        if (UA['webkit']) {
            Event.on(doc, "mousedown", function (ev) {
                var control = new Node(ev.target);
                if (S.inArray(control._4e_name(), ['img', 'hr', 'input', 'textarea', 'select'])) {
                    self.getSelection().selectElement(control);
                }
            });
        }


        if (UA['gecko']) {
            Event.on(doc, "dragstart", function (ev) {
                var control = new Node(ev.target);
                if (control._4e_name() === 'img' && /ke_/.test(control[0].className)) {
                    // firefox禁止拖放
                    ev.preventDefault();
                }
            });
        }
        //注意：必须放在这个位置，等iframe加载好再开始运行
        //加入焦点管理，和其他实例联系起来
        focusManager.add(self);
    };

    /**
     * patch for browser mode = ie7 ,document mode=ie8/9 : 条件注释导致mhtml 引入但是不能处理
     */
    if (DOC['documentMode'] > 7) {
        S.all("link").each(function (link) {
            var href = link.attr("href");
            if (href.indexOf("editor-pkg-min-mhtml.css") != -1) {
                link.attr("href", href.replace(/editor-pkg-min-mhtml\.css/g,
                    "editor-pkg-min-datauri.css"));
            }
        });
    }

    return KE;
}, {
    requires:['editor/core/styles',
        'editor/core/zindexmanager',
        'editor/core/focusmanager',
        'editor/core/meta'
    ]
});
/**
 * 2012-03-05 重构 by yiminghe@gmail.com
 *  - core
 *  - plugins
 */