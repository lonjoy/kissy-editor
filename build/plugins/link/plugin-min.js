KISSY.Editor.add("link",function(h){var i=KISSY,d=i.Editor;d.Link||function(){function f(a){this.editor=a;this._init()}function j(a){return a._4e_ascendant(function(b){return b._4e_name()==="a"&&!!b.attr("href")},true)}function k(a,b){var e={href:a.attr("href"),_ke_saved_href:a.attr(g)};if(a._4e_hasAttribute("target"))e.target=a.attr("target");e=new o(l,e);b.fire("save");e.remove(b.document);b.fire("save")}var p=d.TripleButton,o=d.Style,g="_ke_saved_href",m=d.BubbleView,l={element:"a",attributes:{href:"#(href)",
_ke_saved_href:"#(_ke_saved_href)",target:"#(target)"}};f.link_Style=l;f._ke_saved_href=g;f.checkLink=j;m.register({pluginName:"link",func:j,init:function(){var a=this,b=a.get("contentEl");b.html('\u524d\u5f80\u94fe\u63a5\uff1a  <a href=""  target="_blank" class="ke-bubbleview-url"></a> -  <span class="ke-bubbleview-link ke-bubbleview-change">\u7f16\u8f91</span> -  <span class="ke-bubbleview-link ke-bubbleview-remove">\u53bb\u9664</span>');var e=b.one(".ke-bubbleview-url"),q=b.one(".ke-bubbleview-change"),r=b.one(".ke-bubbleview-remove");d.Utils.preventFocus(b);
q.on("click",function(c){a._plugin.show();c.halt()});r.on("click",function(c){var n=a._plugin.editor;k(a._selectedEl,n);n.notifySelectionChange();c.halt()});a.on("show",function(){var c=a._selectedEl;if(c){c=c.attr(g)||c.attr("href");e.html(c);e.attr("href",c)}})}});f._removeLink=k;i.augment(f,{_init:function(){var a=this.editor;this.el=new p({container:a.toolBarDiv,contentCls:"ke-toolbar-link",title:"\u63d2\u5165\u94fe\u63a5 "});this.el.on("offClick",this.show,this);m.attach({pluginName:"link",pluginInstance:this});
d.Utils.sourceDisable(a,this)},disable:function(){this.el.disable()},enable:function(){this.el.enable()},show:function(){this.editor.useDialog("link/dialog",function(a){a.show()})}});d.Link=f}();h.addPlugin(function(){new d.Link(h)})});
