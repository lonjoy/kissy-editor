KISSY.Editor.add("contextmenu",function(){function g(a){this.cfg=i.clone(a);k.Utils.lazyRun(this,"_prepareShow","_realShow")}function o(a,b){for(var c=0;c<b.length;c++)if(p.test(a,b[c]))return true;return false}var k=KISSY.Editor,i=KISSY,l=i.Node,p=i.DOM,n=i.Event,e=[];g.register=function(a,b){var c=new g(b);e.push({doc:a,rules:b.rules,instance:c});if(!a.ke_contextmenu){a.ke_contextmenu=1;n.on(a,"mousedown",g.hide);n.on(a,"contextmenu",function(d){g.hide.call(this);for(var f=new l(d.target);f;){var j=
false;if(f._4e_name()=="body")break;for(var h=0;h<e.length;h++){var m=e[h].instance,q=e[h].rules;if(a===e[h].doc&&o(f[0],q)){d.preventDefault();j=true;setTimeout(function(){m.show(k.Utils.getXY(d.pageX,d.pageY,a,document))},30);break}}if(j)break;f=f.parent()}})}return c};g.hide=function(){for(var a=0;a<e.length;a++){var b=e[a].instance;this===e[a].doc&&b.hide()}};var r=k.SimpleOverlay;i.augment(g,{_init:function(){var a=this,b=a.cfg,c=b.funcs;a.elDom=new l("<div class='ke-contextmenu' onmousedown='return false;'></div>");
var d=a.elDom;d.css("width",b.width);document.body.appendChild(d[0]);a.el=new r({el:d});for(var f in c){b=new l("<a href='#'>"+f+"</a>");d[0].appendChild(b[0]);(function(j,h){j._4e_unselectable();j.on("click",function(m){a.hide();m.halt();setTimeout(h,30)})})(b,c[f])}},hide:function(){this.el&&this.el.hide()},_realShow:function(a){this.el.show(a)},_prepareShow:function(){this._init()},show:function(a){this._prepareShow(a)}});k.ContextMenu=g});
