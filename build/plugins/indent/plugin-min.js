KISSY.Editor.add("indent",function(m){var g=KISSY.Editor,k={ol:1,ul:1},l=KISSY,n=g.Walker,r=l.DOM,s=l.Node,y=l.UA,o=g.NODE;g.Indent||function(){function t(b){this.type=b;this.indentCssProperty="margin-left";this.indentOffset=40;this.indentUnit="px"}function u(b){return b[0].nodeType==o.NODE_ELEMENT&&b._4e_name()=="li"}function z(b,a){for(var d=b.startContainer,c=b.endContainer;d&&!d.parent()._4e_equals(a);)d=d.parent();for(;c&&!c.parent()._4e_equals(a);)c=c.parent();if(d&&c){var e=d;d=[];for(var f=
false;!f;){if(e._4e_equals(c))f=true;d.push(e);e=e.next()}if(!(d.length<1)){e=a._4e_parents(true);for(c=0;c<e.length;c++)if(k[e[c]._4e_name()]){a=e[c];break}e=this.type=="indent"?1:-1;c=d[0];f=d[d.length-1];d={};var h=g.ListUtils.listToArray(a,d),A=h[f.data("listarray_index")].indent;for(c=c.data("listarray_index");c<=f.data("listarray_index");c++){h[c].indent+=e;var v=h[c].parent;h[c].parent=new s(v[0].ownerDocument.createElement(v._4e_name()))}for(c=f.data("listarray_index")+1;c<h.length&&h[c].indent>
A;c++)h[c].indent+=e;f=g.ListUtils.arrayToList(h,d,null,"p",0);e=[];if(this.type=="outdent"){var q;if((q=a.parent())&&q._4e_name()=="li"){h=f.listNode.childNodes;var i;for(c=h.length-1;c>=0;c--)if((i=new s(h[c]))&&i._4e_name()=="li")e.push(i)}}if(f){r.insertBefore(f.listNode,a);a._4e_remove()}if(e&&e.length)for(c=0;c<e.length;c++){for(f=i=e[c];(f=f.next())&&f._4e_name()in k;){y.ie&&!i._4e_first(function(w){return B(w)&&C(w)})&&i[0].appendChild(b.document.createTextNode("\u00a0"));i[0].appendChild(f[0])}r.insertAfter(i[0],
q[0])}g.Utils.clearAllMarkers(d)}}}function x(b){var a=parseInt(b._4e_style(this.indentCssProperty),10);if(isNaN(a))a=0;a+=(this.type=="indent"?1:-1)*this.indentOffset;if(a<0)return false;a=Math.max(a,0);a=Math.ceil(a/this.indentOffset)*this.indentOffset;b.css(this.indentCssProperty,a?a+this.indentUnit:"");b[0].style.cssText===""&&b.removeAttr("style");return true}function p(b){p.superclass.constructor.call(this,b);b=this.get("editor").toolBarDiv;this.el=new j({container:b,contentCls:this.get("contentCls"),
title:this.get("title")});this.indentCommand=new t(this.get("type"));this._init()}var B=n.whitespaces(true),C=n.bookmark(false,true);l.augment(t,{exec:function(b){for(var a=(b=b.getSelection())&&b.getRanges()[0],d=a.startContainer,c=a.endContainer,e=a.getCommonAncestor();e&&!(e[0].nodeType==o.NODE_ELEMENT&&k[e._4e_name()]);)e=e.parent();if(e&&d[0].nodeType==o.NODE_ELEMENT&&d._4e_name()in k){d=new n(a);d.evaluator=u;a.startContainer=d.next()}if(e&&c[0].nodeType==o.NODE_ELEMENT&&c._4e_name()in k){d=
new n(a);d.evaluator=u;a.endContainer=d.previous()}c=b.createBookmarks(true);if(e){for(d=e._4e_first();d&&d._4e_name()!="li";)d=d.next();var f=a.startContainer;(d[0]==f[0]||d.contains(f))&&x.call(this,e)||z.call(this,a,e)}else{a=a.createIterator();a.enforceRealBlocks=true;for(a.enlargeBr=true;e=a.getNextParagraph();)x.call(this,e)}b.selectBookmarks(c)}});var j=g.TripleButton;p.ATTRS={type:{},contentCls:{},editor:{}};l.extend(p,l.Base,{_init:function(){var b=this.get("editor"),a=this.el;a.on("offClick",
this.exec,this);this.get("type")=="outdent"?b.on("selectionChange",this._selectionChange,this):a.set("state",j.OFF);g.Utils.sourceDisable(b,this)},disable:function(){this.el.set("state",j.DISABLED)},enable:function(){this.el.set("state",j.OFF)},exec:function(){var b=this.get("editor"),a=this;b.fire("save");setTimeout(function(){a.indentCommand.exec(b);b.fire("save");b.notifySelectionChange()},10)},_selectionChange:function(b){this.get("editor");this.get("type");var a=b.path,d=a.blockLimit;b=this.el;
if(a.contains(k))b.set("state",j.OFF);else(a=a.block||d)&&a._4e_style(this.indentCommand.indentCssProperty)?b.set("state",j.OFF):b.set("state",j.DISABLED)}});g.Indent=p}();m.addPlugin(function(){m.addCommand("outdent",new g.Indent({editor:m,title:"\u51cf\u5c11\u7f29\u8fdb\u91cf ",contentCls:"ke-toolbar-outdent",type:"outdent"}));m.addCommand("indent",new g.Indent({editor:m,title:"\u589e\u52a0\u7f29\u8fdb\u91cf ",contentCls:"ke-toolbar-indent",type:"indent"}))})});
