KISSY.Editor.add("link",function(h){h.addPlugin("link",function(){function i(a){return a._4e_ascendant(function(b){return b._4e_name()==="a"&&!!b.attr("href")},true)}var j=KISSY,f=j.Editor,m=j.Node,k=f.Style,l={element:"a",attributes:{href:"#(href)",title:"#(title)",_ke_saved_href:"#(_ke_saved_href)",target:"#(target)"}},n=h.addButton("link",{contentCls:"ke-toolbar-link",title:"\u63d2\u5165\u94fe\u63a5",mode:f.WYSIWYG_MODE,_getSelectedLink:function(){var a=this.editor.getSelection();if(a=a&&a.getStartElement())a=i(a);
return a},_getSelectionLinkUrl:function(){var a=this.cfg._getSelectedLink.call(this);if(a)return a.attr("_ke_saved_href")||a.attr("href")},_removeLink:function(a){var b=this.editor;b.fire("save");var c=b.getSelection(),e=c.getRanges()[0];if(e&&e.collapsed){e=c.createBookmarks();a._4e_remove(true);c.selectBookmarks(e)}else if(e){a=a[0];c=a.attributes;e={};for(var g=0;g<c.length;g++){var d=c[g];if(d.specified)e[d.name]=d.value}if(a.style.cssText)e.style=a.style.cssText;(new k(l,e)).remove(b.document)}b.fire("save");
b.notifySelectionChange()},_link:function(a){var b=this.editor,c=this.cfg._getSelectedLink.call(this);a._ke_saved_href=a.href;if(c){b.fire("save");c.attr(a);b.fire("save")}else{c=(c=b.getSelection())&&c.getRanges()[0];if(!c||c.collapsed){a=new m("<a>"+a.href+"</a>",a,b.document);b.insertElement(a)}else{b.fire("save");(new k(l,a)).apply(b.document);b.fire("save")}}b.notifySelectionChange()},offClick:function(){var a=this;a.editor.useDialog("link/dialog",function(b){b.show(a)})}});f.use("bubbleview",
function(){f.BubbleView.register({pluginName:"link",editor:h,pluginContext:n,func:i,init:function(){var a=this,b=a.get("contentEl");b.html('\u524d\u5f80\u94fe\u63a5\uff1a  <a href=""  target="_blank" class="ke-bubbleview-url"></a> -  <span class="ke-bubbleview-link ke-bubbleview-change">\u7f16\u8f91</span> -  <span class="ke-bubbleview-link ke-bubbleview-remove">\u53bb\u9664</span>');var c=b.one(".ke-bubbleview-url"),e=b.one(".ke-bubbleview-change"),g=b.one(".ke-bubbleview-remove");f.Utils.preventFocus(b);e.on("click",function(d){a._plugin.call("offClick");
d.halt()});g.on("click",function(d){a._plugin.call("_removeLink",a._selectedEl);d.halt()});a.on("show",function(){var d=a._selectedEl;if(d){d=d.attr("_ke_saved_href")||d.attr("href");c.html(d);c.attr("href",d)}})}})})})},{attach:false});
