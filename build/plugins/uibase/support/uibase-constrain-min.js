KISSY.add("uibase-constrain",function(c){function g(){c.log("constrain init")}function i(a){var b;if(!a)return b;var f=this.get("el");if(a!==true){a=c.one(a);b=a.offset();c.mix(b,{maxLeft:b.left+a[0].offsetWidth-f[0].offsetWidth,maxTop:b.top+a[0].offsetHeight-f[0].offsetHeight})}else{a=document.documentElement.clientWidth;b={left:h.scrollLeft(),top:h.scrollTop()};c.mix(b,{maxLeft:b.left+a-f[0].offsetWidth,maxTop:b.top+h.viewportHeight()-f[0].offsetHeight})}return b}c.namespace("UIBase");var h=c.DOM;
g.ATTRS={constrain:{value:false}};g.prototype={__bindUI:function(){c.log("_bindUIConstrain")},__renderUI:function(){c.log("_renderUIConstrain");var a=this,b=a.__getDefAttrs(),f=b.x;b=b.y;var j=f.setter,k=b.setter;f.setter=function(d){var e=j&&j(d);if(e===undefined)e=d;if(!a.get("constrain"))return e;d=i.call(a,a.get("constrain"));return Math.min(Math.max(e,d.left),d.maxLeft)};b.setter=function(d){var e=k&&k(d);if(e===undefined)e=d;if(!a.get("constrain"))return e;d=i.call(a,a.get("constrain"));return Math.min(Math.max(e,
d.top),d.maxTop)};a.addAttr("x",f);a.addAttr("y",b)},__syncUI:function(){c.log("_syncUIConstrain")},__destructor:function(){c.log("constrain-ext __destructor")}};c.UIBase.Constrain=g});
