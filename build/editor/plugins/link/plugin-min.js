KISSY.Editor.add("link",function(h){h.addPlugin("link",function(){function l(a){return a._4e_ascendant(function(d){return d._4e_name()==="a"},true)}var i=KISSY,m=i.UA,g=i.Editor,q=g.XHTML_DTD,r=i.Node,n=g.Style,o={element:"a",attributes:{href:"#(href)",title:"#(title)",_ke_saved_href:"#(_ke_saved_href)",target:"#(target)"}},j={},k=g.Utils.addRes,s=g.Utils.destroyRes,p=h.addButton("link",{contentCls:"ke-toolbar-link",title:"\u63d2\u5165\u94fe\u63a5",mode:g.WYSIWYG_MODE,_getSelectedLink:function(){var a=this.editor.getSelection();
if(a=a&&a.getStartElement())a=l(a);return a},_getSelectionLinkUrl:function(){var a=this.cfg._getSelectedLink.call(this);if(a)return a.attr("_ke_saved_href")||a.attr("href")},_removeLink:function(a){var d=this.editor;d.fire("save");var c=d.getSelection(),e=c.getRanges()[0];if(e&&e.collapsed){e=c.createBookmarks();a._4e_remove(true);c.selectBookmarks(e)}else if(e){a=a[0];c=a.attributes;e={};for(var f=0;f<c.length;f++){var b=c[f];if(b.specified)e[b.name]=b.value}if(a.style.cssText)e.style=a.style.cssText;
(new n(o,e)).remove(d.document)}d.fire("save");d.notifySelectionChange()},_link:function(a,d){var c,e,f=this.editor;a._ke_saved_href=a.href;if(d){f.fire("save");d.attr(a);c=d}else{var b=f.getSelection();b=b&&b.getRanges()[0];if(!b||b.collapsed){c=new r("<a>"+a.href+"</a>",a,f.document);f.insertElement(c);c=c}else{f.fire("save");(new n(o,a)).apply(f.document);m.gecko&&(c=f.getSelection().getStartElement())}}if(m.gecko)if((e=c[0].parentNode)&&q.$block[e.nodeName.toLowerCase()]&&e.lastChild==c[0])e.appendChild(f.document.createElement("br"));
f.fire("save");f.notifySelectionChange()},offClick:function(){this.editor.showDialog("link/dialog",[this])},destroy:function(){this.editor.destroyDialog("link/dialog")}});k.call(j,p);g.use("bubbleview",function(){g.BubbleView.register({pluginName:"link",editor:h,pluginContext:p,func:l,init:function(){var a=this,d=a.get("contentEl");d.html('<a href=""  target="_blank" class="ke-bubbleview-url">\u5728\u65b0\u7a97\u53e3\u67e5\u770b</a>  \u2013   <span class="ke-bubbleview-link ke-bubbleview-change">\u7f16\u8f91</span>   |    <span class="ke-bubbleview-link ke-bubbleview-remove">\u53bb\u9664</span>');
var c=d.one(".ke-bubbleview-url"),e=d.one(".ke-bubbleview-change"),f=d.one(".ke-bubbleview-remove");g.Utils.preventFocus(d);e.on("click",function(b){a._plugin.call("offClick");b.halt()});f.on("click",function(b){a._plugin.call("_removeLink",a._selectedEl);b.halt()});k.call(a,e,f);a.on("show",function(){var b=a._selectedEl;if(b){b=b.attr("_ke_saved_href")||b.attr("href");c.html(b);c.attr("href",b)}})}});k.call(j,function(){g.BubbleView.destroy("link")})});this.destroy=function(){s.call(j)}})},{attach:false});
