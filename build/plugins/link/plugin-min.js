KISSY.Editor.add("link",function(i){var e=KISSY.Editor;e.Link||function(){function f(a){this.editor=a;this._init()}function j(a){return a._4e_ascendant(function(b){return b._4e_name()==="a"&&!!b.attr("href")},true)}var k=KISSY,h=e.TripleButton,l=e.Style,p=k.Node,q=e.Range,r=e.SimpleOverlay,m=e.BubbleView,n={element:"a",attributes:{href:"#(href)",_ke_saved_href:"#(_ke_saved_href)",target:"#(target)"}};f.init=function(){var a=new r({title:"链接",mask:true});this.dialog=a;a.body.html("<div style='padding:20px 20px 0 20px'><p><label>链接网址： <input  data-verify='^(https?://[^\\s]+)|(#.+)$'  data-warning='请输入合适的网址格式' class='ke-link-url ke-input' style='width:390px;vertical-align:middle;'  value='http://' /></label></p><p style='margin: 15px 0 10px 64px;'><label><input class='ke-link-blank' type='checkbox'/> &nbsp; 在新窗口打开链接</label></p></div>");
a.foot.html("<a class='ke-link-ok ke-button' style='margin-left:65px;margin-right:20px;'>确定</a> <a class='ke-link-cancel ke-button'>取消</a>");a.urlEl=a.body.one(".ke-link-url");a.targetEl=a.body.one(".ke-link-blank");var b=a.foot.one(".ke-link-cancel");a.foot.one(".ke-link-ok").on("click",function(d){a.link._link();d.halt()},this);b.on("click",function(d){a.hide();d.halt()},this);f.init=null};m.register({pluginName:"link",func:j,init:function(){var a=this,b=a.el;b.html('前往链接：  <a href=""  target="_blank" class="ke-bubbleview-url"></a> -  <span class="ke-bubbleview-link ke-bubbleview-change">编辑</span> -  <span class="ke-bubbleview-link ke-bubbleview-remove">去除</span>');
var d=b.one(".ke-bubbleview-url"),g=b.one(".ke-bubbleview-change");b=b.one(".ke-bubbleview-remove");g._4e_unselectable();d._4e_unselectable();b._4e_unselectable();g.on("click",function(c){a._plugin.show();c.halt()});b.on("click",function(c){var o=a._plugin;o._removeLink(a._selectedEl);o.editor.notifySelectionChange();c.halt()});a.on("afterVisibleChange",function(){var c=a._selectedEl;if(c){c=c.attr("_ke_saved_href")||c.attr("href");d.html(c);d.attr("href",c)}})}});k.augment(f,{_init:function(){var a=
this.editor;this.el=new h({container:a.toolBarDiv,contentCls:"ke-toolbar-link",title:"插入链接 "});this.el.on("offClick",this.show,this);m.attach({pluginName:"link",pluginInstance:this});e.Utils.sourceDisable(a,this)},disable:function(){this.el.set("state",h.DISABLED)},enable:function(){this.el.set("state",h.OFF)},_removeLink:function(a){var b=this.editor,d={href:a.attr("href"),_ke_saved_href:a.attr("_ke_saved_href")};if(a._4e_hasAttribute("target"))d.target=a.attr("target");a=new l(n,d);b.fire("save");
a.remove(b.document);b.fire("save")},_getSelectedLink:function(){var a=this.editor.getSelection();if(a=a&&a.getStartElement())a=j(a);return a},_link:function(){var a,b=this.editor,d=f.dialog,g=d.urlEl.val(),c;if(e.Utils.verifyInputs(d.el.all("input"))){d.hide();if(c=this._getSelectedLink()){a=new q(b.document);a.selectNodeContents(c);b.getSelection().selectRanges([a]);this._removeLink(c)}c={href:g,_ke_saved_href:g};c.target=d.targetEl[0].checked?"_blank":"_self";a=b.getSelection().getRanges()[0];
if(a.collapsed){a=new p("<a href='"+g+"' _ke_saved_href='"+g+"' target='"+c.target+"'>"+g+"</a>",null,b.document);b.insertElement(a)}else{b.fire("save");a=new l(n,c);a.apply(b.document);b.fire("save")}b.notifySelectionChange()}},_prepare:function(){f.init&&f.init()},_real:function(){var a=f.dialog,b=this._getSelectedLink();a.link=this;if(b){a.urlEl.val(b.attr("_ke_saved_href")||b.attr("href"));a.targetEl[0].checked=b.attr("target")=="_blank"}a.show()},show:function(){this._prepare()}});e.Utils.lazyRun(f.prototype,
"_prepare","_real");e.Link=f}();i.addPlugin(function(){new e.Link(i)})});
