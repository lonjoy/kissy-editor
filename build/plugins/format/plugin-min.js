KISSY.Editor.add("format",function(k){var e=KISSY.Editor,i=KISSY,l=i.Node;e.Format||function(){function f(a){f.superclass.constructor.call(this,a);this.el=new l(j);this._init()}var j="<select title='\u683c\u5f0f'>",c={"\u6807\u9898 / \u6e05\u9664":"p","\u6807\u98981":"h1","\u6807\u98982":"h2","\u6807\u98983":"h3","\u6807\u98984":"h4","\u6807\u98985":"h5","\u6807\u98986":"h6"},g={},m=e.Style;for(var d in c)if(c[d]){g[c[d]]=new m({element:c[d]});j+="<option value='"+c[d]+"'>"+d+"</option>"}j+="</select>";
f.ATTRS={v:{value:"p"},editor:{}};i.extend(f,i.Base,{_init:function(){var a=this.get("editor"),b=this.el;a.toolBarDiv[0].appendChild(this.el[0]);b.on("change",this._change,this);a.on("selectionChange",this._selectionChange,this);this.on("afterVChange",this._vChange,this)},_vChange:function(a){var b=this.get("editor");a=a.newVal;b.focus();b.fire("save");g[a].apply(b.document);b.fire("save");b.fire("formatChange",this.get("v"))},_change:function(){this.set("v",this.el.val())},_selectionChange:function(a){this.get("editor");
var b=this.get("v");a=a.path;for(var h in g)if(g[h].checkActive(a)){if(h!=b){this._set("v",h);this.el.val(h)}return}this._set("v","p");this.el.val("p")}});e.Format=f}();k.addPlugin(function(){new e.Format({editor:k})})});
