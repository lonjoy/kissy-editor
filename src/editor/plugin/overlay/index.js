/**
 * custom overlay  for kissy editor
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/overlay/index", function (S, KE, UIBase, Overlay, Focus) {
    var Overlay4E = UIBase.create(Overlay, [Focus], {
    }, {
        ATTRS:{
            aria:{
                value:true
            },
            elStyle:{
                value:{
                    // 指定zIndex默认值
                    "zIndex":KE.baseZIndex(KE.zIndexManager.OVERLAY)
                }
            }

        }
    });

    Overlay4E.Dialog = UIBase.create(Overlay.Dialog, [Focus], {
        show:function () {
            //在 show 之前调用
            this.center();
            var y = this.get("y");
            //居中有点偏下
            if (y - S.DOM.scrollTop() > 200) {
                y = S.DOM.scrollTop() + 200;
                this.set("y", y);
            }
            Overlay4E.prototype.show.call(this);
        }
    }, {
        ATTRS:{
            draggable:{
                value:true
            },
            constrain:{
                value:true
            },
            aria:{
                value:true
            },
            elStyle:{
                value:{
                    // 指定zIndex默认值
                    "zIndex":KE.baseZIndex(KE.zIndexManager.OVERLAY)
                }
            }
        }
    });

    return Overlay4E
}, {
    requires:["editor", 'uibase', 'overlay', './focus', 'dd']
});