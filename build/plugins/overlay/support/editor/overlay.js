/**
 * custom overlay  for kissy editor
 * @author:yiminghe@gmail.com
 */
KISSY.Editor.add("overlay", function() {

    var S = KISSY,
        KE = S.Editor;
    if (KE.Overlay) return;
    /**
     * 2010-11-18 重构，使用 S.Ext 以及 Base 组件周期
     */
    var Overlay4E = S.Base.create(S.Overlay, [KE.Ext.Focus], {
        init:function() {
            S.log("Overlay4E init");
            var self = this;
            //必须等 sync ，等所有状态都同步好再进行 preventFocus
            self.on("syncUI", self._syncUIOverlay4E, self);
        },
        _syncUIOverlay4E:function() {
            S.log("_syncUIOverlay4E");
            var self = this;
            //编辑器 overlay 中的全部点击都不会使得失去焦点
            KE.Utils.preventFocus(self.get("contentEl"));
        }
    }, {
        ATTRS:{
            //指定zIndex默认值
            "zIndex":{value:KE.baseZIndex(KE.zIndexManager.OVERLAY)}
        }
    });
    var Dialog4E = S.Base.create(S.Dialog, [KE.Ext.Focus], {
        show:function() {
            //在 show 之前调用
            this.center();
            var y = this.get("y");
            //居中有点偏下
            if (y - S.DOM.scrollTop() > 200) {
                y = S.DOM.scrollTop() + 200;
                this.set("y", y);
            }
            Dialog4E.superclass.show.call(this);
        }
    }, {
        ATTRS:{
            constrain:{value:true},
            //指定zIndex默认值
            "zIndex":{value:KE.baseZIndex(KE.zIndexManager.OVERLAY)}
        }
    });

    KE.Overlay = Overlay4E;
    KE.Dialog = Dialog4E;


    var globalMask;

    KE.Overlay.loading = function() {
        if (!globalMask) {
            globalMask = new KE.Overlay({
                x:0,
                focus4e:false,
                width:"100%",
                y:0,
                //指定全局 loading zIndex 值
                "zIndex":KE.baseZIndex(KE.zIndexManager.LOADING),
                elCls:"ke-global-loading"
            });
        }
        globalMask.set("height", S.DOM.docHeight());
        globalMask.show();
        globalMask.loading();
    };

    KE.Overlay.unloading = function() {
        globalMask && globalMask.hide();
    };
});