KISSY.Editor.add("focusmanager",function(f){function i(){var a=this;a.iframeFocus=l;h=a;d&&clearTimeout(d);d=setTimeout(function(){a.fire("focus")},100)}function j(){var a=this;a.iframeFocus=m;h=n;d&&clearTimeout(d);d=setTimeout(function(){a.fire("blur")},100)}var c=KISSY,k=c.DOM,g=c.Event,e={},d,h;c={refreshAll:function(){for(var a in e){var b=e[a];b.document.designMode="off";b.document.designMode="on"}},currentInstance:function(){return h},getInstance:function(a){return e[a]},add:function(a){var b=
k._4e_getWin(a.document);g.on(b,"focus",i,a);g.on(b,"blur",j,a)},register:function(a){e[a._UUID]=a},remove:function(a){delete e[a._UUID];var b=k._4e_getWin(a.document);g.remove(b,"focus",i,a);g.remove(b,"blur",j,a)}};var l=true,m=false,n=null;c.refreshAll=c.refreshAll;f.focusManager=c;f.focusManager=c;f.getInstances=function(){return e};f.getInstances=f.getInstances});
