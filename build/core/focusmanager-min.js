KISSY.Editor.add("focusmanager",function(j){function f(){this.iframeFocus=true;e=this}function g(){this.iframeFocus=false;e=null}var b=KISSY,h=b.DOM,d=b.Event;b={};var i={},e;b.currentInstance=function(){return e};b.add=function(a){i[a._UUID]=a;var c=h._4e_getWin(a.document);d.on(c,"focus",f,a);d.on(c,"blur",g,a)};b.remove=function(a){delete i[a._UUID];var c=h._4e_getWin(a.document);d.remove(c,"focus",f,a);d.remove(c,"blur",g,a)};j.focusManager=b});
