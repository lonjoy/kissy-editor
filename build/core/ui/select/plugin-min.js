KISSY.Editor.add("select",function(){function k(b){k.superclass.constructor.call(this,b);this._init()}var i=KISSY,l=i.Node,o=i.Event,m=i.DOM,j=i.Editor;if(j.Select)i.log("ke select attach more");else{k.DISABLED=0;k.ENABLED=1;var q=j.XHTML_DTD;k.ATTRS={showValue:{},el:{},cls:{},container:{},doc:{},value:{},width:{},title:{},items:{},align:{value:["l","b"]},menuContainer:{valueFn:function(){for(var b=this.el.parent();b;){var a=b._4e_name();if(q[a]&&q[a].div)return b;b=b.parent()}return new l(document.body)}},
state:{value:1}};k.decorate=function(b){for(var a=b.width(),c=[],d=b.all("option"),e=0;e<d.length;e++){var f=d[e];c.push({name:m.html(f),value:m.attr(f,"value")})}return new k({width:a+"px",el:b,items:c,cls:"ke-combox",value:b.val()})};i.extend(k,i.Base,{_init:function(){var b=this.get("container"),a=this.get("el"),c=new l("<span class='ke-select-wrap'><a onclick='return false;' class='ke-select'><span class='ke-select-text'><span class='ke-select-text-inner'></span></span><span class='ke-select-drop-wrap'><span class='ke-select-drop'></span></span></a></span>"),
d=this.get("title")||"",e=this.get("cls"),f=c.one(".ke-select-text"),g=c.one(".ke-select-text-inner");c.one(".ke-select-drop");this.get("value")!==undefined?g.html(this._findNameByV(this.get("value"))):g.html(d);f.css("width",this.get("width"));c._4e_unselectable();d&&c.attr("title",d);e&&c.addClass(e);if(a)a[0].parentNode.replaceChild(c[0],a[0]);else b&&c.appendTo(b);c.on("click",this._click,this);this.el=c;this.title=g;this._focusA=c.one("a.ke-select");j.Utils.lazyRun(this,"_prepare","_real");this.on("afterValueChange",
this._valueChange,this);this.on("afterStateChange",this._stateChange,this)},_findNameByV:function(b){var a=this.get("title")||"",c=this.get("items");if(this.get("showValue"))return b||a;for(var d=0;d<c.length;d++){var e=c[d];if(e.value==b){a=e.name;break}}return a},_valueChange:function(b){this.title.html(this._findNameByV(b.newVal))},_itemsChange:function(b){b=b.newVal;var a=this._selectList;a.html("");if(b)for(var c=0;c<b.length;c++){var d=b[c];(new l("<a class='ke-select-menu-item' href='#' data-value='"+
d.value+"'>"+d.name+"</a>",d.attrs)).appendTo(a)._4e_unselectable()}this.as=a.all("a")},val:function(b){if(b!==undefined){this.set("value",b);return this}else return this.get("value")},_resize:function(){this.menu.get("visible")&&this._real()},_prepare:function(){function b(h){h=new l(h.target);c.contains(h)||c._4e_equals(h)||f.hide()}var a=this,c=a.el,d=a.get("popUpWidth"),e=a._focusA,f=new j.Overlay({autoRender:true,render:a.get("menuContainer"),content:"<div>",focus4e:false,elCls:"ke-menu",width:d?
d:c.width(),zIndex:j.baseZIndex(j.zIndexManager.SELECT),focusMgr:false}),g=a.get("items");d=f.get("contentEl").one("div");a.menu=f;o.on(window,"resize",a._resize,a);a.get("title")&&(new l("<div class='ke-menu-title ke-select-menu-item' style='margin-top:-6px;' >"+a.get("title")+"</div>")).appendTo(d);a._selectList=(new l("<div>")).appendTo(d);a._itemsChange({newVal:g});f.on("show",function(){e.addClass("ke-select-active")});f.on("hide",function(){e.removeClass("ke-select-active")});o.on(document,
"click",b);a.get("doc")&&o.on(a.get("doc"),"click",b);d.on("click",a._select,a);a.as=a._selectList.all("a");o.on(d[0],"mouseenter",function(){a.as.removeClass("ke-menu-selected")});a.on("afterItemsChange",a._itemsChange,a);a.menuNode=d},_stateChange:function(b){var a=this.el;b.newVal==1?a.removeClass("ke-select-disabled"):a.addClass("ke-select-disabled")},enable:function(){this.set("state",1)},disable:function(){this.set("state",0)},_select:function(b){b.halt();var a=this.menu,c=this.menuNode;if(b=
(new l(b.target))._4e_ascendant(function(f){return c.contains(f)&&f._4e_name()=="a"},true)){var d=this.get("value"),e=b.attr("data-value");this.set("value",e);this.fire("click",{newVal:e,prevVal:d,name:b.html()});a.hide()}},_real:function(){var b=this.el,a=b.offset(),c=i.clone(a),d=this.menu.get("el").height(),e=this.menu.get("el").width(),f=m.scrollTop(),g=m.scrollLeft(),h=m.viewportHeight(),n=m.viewportWidth();n=g+n-60;h=f+h;var p=a.top+(b.height()-2);b=a.left+b.width()-2;var r=this.get("align"),
s=r[0];if(r[1]=="b"){a.top=p;if(a.top+d>h&&c.top-f>h-p)a.top=c.top-d}else{a.top=c.top-d;if(a.top<f&&c.top-f<h-p)a.top=p}if(s=="l"){if(a.left+e>n&&b-g>n-c.left)a.left=b-e}else{a.left=b-e;if(a.left<g&&b-g<n-c.left)a.left=c.left}this.menu.set("xy",[a.left,a.top]);this.menu.show()},_click:function(b){if(!this.loading){b.preventDefault();var a=this;b=a.el;var c=a.get("value");if(!b.hasClass("ke-select-disabled"))if(a._focusA.hasClass("ke-select-active"))a.menu&&a.menu.hide();else{a.loading=true;j.use("overlay",
function(){a.loading=false;a._prepare();c&&a.menu&&a.as.each(function(d){d.attr("data-value")==c?d.addClass("ke-menu-selected"):d.removeClass("ke-menu-selected")})})}}}});j.Select=k;j.prototype.addSelect=function(b,a){var c=this;a=i.mix({container:c.toolBarDiv,doc:c.document,menuContainer:new l(document.body)},a);var d=new k(a),e={btn:d,editor:c,cfg:a,call:function(){var f=i.makeArray(arguments),g=f.shift();return a[g].apply(e,f)},reload:function(f){i.mix(a,f);d.enable();c.on("selectionChange",function(){c.getMode()!=
j.SOURCE_MODE&&a.selectionChange&&a.selectionChange.apply(e,arguments)});d.on("click",function(g){var h=g.type;a[h]&&a[h].apply(e,arguments)});if(a.mode==j.WYSIWYG_MODE){c.on("wysiwygmode",d.enable,d);c.on("sourcemode",d.disable,d)}a.init&&a.init.call(e)}};a.loading?d.disable():e.reload(undefined);return e}}});
