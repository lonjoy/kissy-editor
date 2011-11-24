/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Nov 23 18:02
*/
KISSY.add("dd/ddm",function(m,q,r,k,l,d){function n(){n.superclass.constructor.apply(this,arguments)}function c(b,h){var s=b.get("activeDrag"),w=s.get("mode"),D=b.get("drops"),t,E=0,B=0,F=i(s.get("node")),G=a(F);m.each(D,function(C){var u;if(u=C.getNodeFromTarget(h,s.get("dragNode")[0],s.get("node")[0]))if(w=="point"){if(o(i(u),s.mousePos)){u=a(i(u));if(t){if(u<B){t=C;B=u}}else{t=C;B=u}}}else if(w=="intersect"){u=a(e(F,i(u)));if(u>B){B=u;t=C}}else if(w=="strict"){u=a(e(F,i(u)));if(u==G){t=C;return false}}});
if((E=b.get("activeDrop"))&&E!=t){E._handleOut(h);s._handleOut(h)}b.set("activeDrop",t);if(t)E!=t?t._handleEnter(h):t._handleOver(h)}function g(b){var h=document;b._shim=(new l("<div style='background-color:red;position:"+(v?"absolute":"fixed")+";left:0;width:100%;height:100%;top:0;cursor:"+x.get("dragCursor")+";z-index:"+z+";'></div>")).prependTo(h.body||h.documentElement).css("opacity",0);g=f;v&&k.on(p,"resize scroll",y,b);f(b)}function f(b){var h=b.get("activeDrag").get("activeHandler"),s="auto";
if(h)s=h.css("cursor");if(s=="auto")s=b.get("dragCursor");b._shim.css({cursor:s,display:"block"});v&&y.call(b)}function i(b){var h=b.offset();return{left:h.left,right:h.left+b.outerWidth(),top:h.top,bottom:h.top+b.outerHeight()}}function o(b,h){return b.left<=h.left&&b.right>=h.left&&b.top<=h.top&&b.bottom>=h.top}function a(b){if(b.top>=b.bottom||b.left>=b.right)return 0;return(b.right-b.left)*(b.bottom-b.top)}function e(b,h){return{left:Math.max(b.left,h.left),right:Math.min(b.right,h.right),top:Math.max(b.top,
h.top),bottom:Math.min(b.bottom,h.bottom)}}var j=document,p=window,v=q.ie===6,A=m.throttle(function(b){var h=this.__activeToDrag,s=this.get("activeDrag");if(s||h)b.preventDefault();if(s){s._move(b);c(this,b)}else h&&h._move(b)},30),z=999999;n.ATTRS={prefixCls:{value:"ks-dd-"},dragCursor:{value:"move"},clickPixelThresh:{value:3},bufferTime:{value:1E3},activeDrag:{},activeDrop:{},drops:{value:[]}};var y=m.throttle(function(){var b;if((b=this.get("activeDrag"))&&b.get("shim"))this._shim.css({width:r.docWidth(),
height:r.docHeight()})},30);m.extend(n,d,{__activeToDrag:0,_regDrop:function(b){this.get("drops").push(b)},_unregDrop:function(b){b=m.indexOf(b,this.get("drops"));b!=-1&&this.get("drops").splice(b,1)},_regToDrag:function(b){k.on(j,"mouseup",this._end,this);k.on(j,"mousemove",A,this);this.__activeToDrag=b},_start:function(){var b=this.__activeToDrag;this.set("activeDrag",b);this.__activeToDrag=0;b.get("shim")&&g(this);this.fire("dragstart",{drag:b})},_end:function(){var b=this.get("activeDrag"),h=
this.get("activeDrop"),s={drag:b,drop:h};k.remove(j,"mousemove",A,this);k.remove(j,"mouseup",this._end,this);if(this.__activeToDrag){this.__activeToDrag._end();this.__activeToDrag=0}this._shim&&this._shim.hide();if(b){b._end();if(h){h._end();this.fire("drophit",s);this.fire("dragdrophit",s)}else this.fire("dragdropmiss",{drag:b});this.fire("dragend",{drag:b});this.set("activeDrag",null);this.set("activeDrop",null)}}});var x=new n;x.inRegion=o;x.region=i;x.area=a;return x},{requires:["ua","dom","event",
"node","base"]});
KISSY.add("dd/draggable",function(m,q,r,k,l){function d(){d.superclass.constructor.apply(this,arguments);this._init()}function n(){return false}function c(a){var e=a.target;this._checkMouseDown(a)&&this._check(e)&&this._prepare(a)}var g=m.each,f=q.ie,i=document;d.POINT="point";d.INTERSECT="intersect";d.STRICT="strict";d.ATTRS={node:{setter:function(a){return r.one(a)}},clickPixelThresh:{valueFn:function(){return l.get("clickPixelThresh")}},bufferTime:{valueFn:function(){return l.get("bufferTime")}},dragNode:{},
shim:{value:true},handlers:{value:[],getter:function(a){var e=this;a.length||(a[0]=e.get("node"));g(a,function(j,p){if(m.isFunction(j))j=j.call(e);if(m.isString(j)||j.nodeType)j=r.one(j);a[p]=j});e.__set("handlers",a);return a}},activeHandler:{},dragging:{value:false,setter:function(a){this.get("dragNode")[a?"addClass":"removeClass"](l.get("prefixCls")+"dragging")}},mode:{value:"point"},disabled:{value:false,setter:function(a){this.get("dragNode")[a?"addClass":"removeClass"](l.get("prefixCls")+"-disabled");
return a}},move:{value:false},primaryButtonOnly:{value:true},halt:{value:true}};var o;m.extend(d,k,{startMousePos:null,startNodePos:null,_diff:null,_bufferTimer:null,_init:function(){var a=this.get("node");this.set("dragNode",a);a.on("mousedown",c,this).on("dragstart",this._fixDragStart)},_fixDragStart:function(a){a.preventDefault()},destroy:function(){this.get("dragNode").detach("mousedown",c,this).detach("dragstart",this._fixDragStart);this.detach()},_check:function(a){var e=this,j=e.get("handlers"),
p=0;g(j,function(v){if(v.contains(a)||v[0]==a){p=1;e.set("activeHandler",v);return false}});return p},_checkMouseDown:function(a){if(this.get("primaryButtonOnly")&&a.button>1||this.get("disabled"))return 0;return 1},_prepare:function(a){var e=this;if(f){o=i.body.onselectstart;i.body.onselectstart=n}e.get("halt")?a.halt():a.preventDefault();var j=e.get("node"),p=a.pageX;a=a.pageY;j=j.offset();e.startMousePos=e.mousePos={left:p,top:a};e.startNodePos=j;e._diff={left:p-j.left,top:a-j.top};l._regToDrag(e);
if(p=e.get("bufferTime"))e._bufferTimer=setTimeout(function(){e._start()},p)},_clearBufferTimer:function(){if(this._bufferTimer){clearTimeout(this._bufferTimer);this._bufferTimer=0}},_move:function(a){var e,j=this._diff;e=this.startMousePos;var p=a.pageX;a=a.pageY;var v=p-j.left;j=a-j.top;if(this.get("dragging")){this.mousePos={left:p,top:a};e={left:v,top:j,pageX:p,pageY:a,drag:this};p=1;if(this.fire("drag",e)===false)p=0;if(l.fire("drag",e)===false)p=0;p&&this.get("move")&&this.get("node").offset(e)}else{j=
this.get("clickPixelThresh");if(Math.abs(p-e.left)>=j||Math.abs(a-e.top)>=j)this._start()}},_end:function(){var a;this._clearBufferTimer();if(f)i.body.onselectstart=o;if(this.get("dragging")){this.get("node").removeClass(l.get("prefixCls")+"drag-over");(a=l.get("activeDrop"))?this.fire("dragdrophit",{drag:this,drop:a}):this.fire("dragdropmiss",{drag:this});this.fire("dragend",{drag:this});this.set("dragging",0)}},_handleOut:function(){this.get("node").removeClass(l.get("prefixCls")+"drag-over");this.fire("dragexit",
{drag:this,drop:l.get("activeDrop")})},_handleEnter:function(a){this.get("node").addClass(l.get("prefixCls")+"drag-over");this.fire("dragenter",a)},_handleOver:function(a){this.fire("dragover",a)},_start:function(){this._clearBufferTimer();this.set("dragging",1);l._start();this.fire("dragstart",{drag:this})}});return d},{requires:["ua","node","base","./ddm"]});
KISSY.add("dd/droppable",function(m,q,r,k){function l(){l.superclass.constructor.apply(this,arguments);this._init()}l.ATTRS={node:{setter:function(d){if(d)return q.one(d)}}};m.extend(l,r,{getNodeFromTarget:function(d,n,c){d=this.get("node");var g=d[0];return g==n||g==c?null:d},_init:function(){k._regDrop(this)},__getCustomEvt:function(d){return m.mix({drag:k.get("activeDrag"),drop:this},d)},_handleOut:function(){var d=this.__getCustomEvt();this.get("node").removeClass(k.get("prefixCls")+"drop-over");
this.fire("dropexit",d);k.fire("dropexit",d);k.fire("dragexit",d)},_handleEnter:function(d){d=this.__getCustomEvt(d);d.drag._handleEnter(d);this.get("node").addClass(k.get("prefixCls")+"drop-over");this.fire("dropenter",d);k.fire("dragenter",d);k.fire("dropenter",d)},_handleOver:function(d){d=this.__getCustomEvt(d);d.drag._handleOver(d);this.fire("dropover",d);k.fire("dragover",d);k.fire("dropover",d)},_end:function(){var d=this.__getCustomEvt();this.get("node").removeClass(k.get("prefixCls")+"drop-over");
this.fire("drophit",d)},destroy:function(){k._unregDrop(this)}});return l},{requires:["node","base","./ddm"]});
KISSY.add("dd/proxy",function(m,q){function r(){r.superclass.constructor.apply(this,arguments);this[k]={}}var k="__proxy_destructors",l=m.stamp,d=m.guid("__dd_proxy"),n="__proxy";r.ATTRS={node:{value:function(c){return new q(c.get("node").clone(true))}},destroyOnEnd:{value:false}};m.extend(r,m.Base,{attach:function(c){function g(){var a=i.get("node"),e=c.get("node");if(i[n])a=i[n];else if(m.isFunction(a)){a=a(c);a.addClass("ks-dd-proxy");a.css("position","absolute");i[n]=a}e.parent().append(a);a.show();
a.offset(e.offset());c.set("dragNode",e);c.set("node",a)}function f(){var a=i[n];c.get("dragNode").offset(a.offset());a.hide();if(i.get("destroyOnEnd")){a.remove();i[n]=0}c.set("node",c.get("dragNode"))}var i=this,o;if(!(o=l(c,1,d)&&i[k][o])){c.on("dragstart",g);c.on("dragend",f);o=l(c,0,d);i[k][o]={drag:c,fn:function(){c.detach("dragstart",g);c.detach("dragend",f)}}}},unAttach:function(c){c=l(c,1,d);var g=this[k];if(c&&g[c]){g[c].fn();delete g[c]}},destroy:function(){var c=this.get("node"),g=this[k];
c&&!m.isFunction(c)&&c.remove();for(var f in g)this.unAttach(g[f].drag)}});return r},{requires:["node"]});
KISSY.add("dd/draggable-delegate",function(m,q,r,k,l){function d(){d.superclass.constructor.apply(this,arguments)}function n(c){var g;if(this._checkMouseDown(c)){g=this.get("handlers");var f=new l(c.target);if(g=g.length?this._getHandler(f):f){this.set("activeHandler",g);g=this._getNode(g);this.set("node",g);this.set("dragNode",g);this._prepare(c)}}}m.extend(d,r,{_init:function(){this.get("container").on("mousedown",n,this).on("dragstart",this._fixDragStart)},_getHandler:function(c){for(var g,f=this.get("container"),
i=this.get("handlers");c&&c[0]!==f[0];){m.each(i,function(o){if(k.test(c[0],o)){g=c;return false}});if(g)break;c=c.parent()}return g},_getNode:function(c){return c.closest(this.get("selector"),this.get("container"))},destroy:function(){this.get("container").detach("mousedown",n,this).detach("dragstart",this._fixDragStart);this.detach()}},{ATTRS:{container:{setter:function(c){return l.one(c)}},selector:{},handlers:{value:[],getter:0}}});return d},{requires:["./ddm","./draggable","dom","node"]});
KISSY.add("dd/droppable-delegate",function(m,q,r,k,l){function d(){var c=this.get("container"),g=this.get("selector");this.__allNodes=c.all(g)}function n(){n.superclass.constructor.apply(this,arguments);q.on("dragstart",d,this)}m.extend(n,r,{getNodeFromTarget:function(c,g,f){var i={left:c.pageX,top:c.pageY};c=this.__allNodes;var o=0,a=Number.MAX_VALUE;c&&c.each(function(e){var j=e[0];if(!(j===f||j===g))if(q.inRegion(q.region(e),i)){j=q.area(q.region(e));if(j<a){a=j;o=e}}});if(o){this.set("lastNode",
this.get("node"));this.set("node",o)}return o},_handleOut:function(){n.superclass._handleOut.apply(this,arguments);this.set("node",0);this.set("lastNode",0)},_handleOver:function(c){var g=this.get("node"),f=n.superclass._handleOut,i=n.superclass._handleOver,o=n.superclass._handleEnter,a=this.get("lastNode");if(a[0]!==g[0]){this.set("node",a);f.apply(this,arguments);this.set("node",g);o.call(this,c)}else i.call(this,c)}},{ATTRS:{lastNode:{},selector:{},container:{setter:function(c){return l.one(c)}}}});
return n},{requires:["./ddm","./droppable","dom","node"]});
KISSY.add("dd/scroll",function(m,q,r,k){function l(){l.superclass.constructor.apply(this,arguments);this[c]={}}var d=m.stamp,n=100,c="__dd_scrolls";l.ATTRS={node:{valueFn:function(){return r.one(window)},setter:function(f){return r.one(f)}},rate:{value:[10,10]},diff:{value:[20,20]}};var g=m.isWindow;m.extend(l,q,{getRegion:function(f){return g(f[0])?{width:k.viewportWidth(),height:k.viewportHeight()}:{width:f.outerWidth(),height:f.outerHeight()}},getOffset:function(f){return g(f[0])?{left:k.scrollLeft(),
top:k.scrollTop()}:f.offset()},getScroll:function(f){return{left:f.scrollLeft(),top:f.scrollTop()}},setScroll:function(f,i){f.scrollLeft(i.left);f.scrollTop(i.top)},unAttach:function(f){var i,o=this[c];if((i=d(f,1,"__dd-scroll-id-"))&&o[i]){o[i].fn();delete o[i]}},destroy:function(){var f=this[c],i;for(i in f)this.unAttach(f[i].drag)},attach:function(f){function i(b){if(!b.fake){var h=e.get("node");z=b;y=m.clone(f.mousePos);b=e.getOffset(h);y.left-=b.left;y.top-=b.top;x||a()}}function o(){clearTimeout(x);
x=null}function a(){var b=e.get("node"),h=e.getRegion(b),s=h.width;h=h.height;var w=e.getScroll(b),D=m.clone(w),t=false;if(y.top-h>=-A[1]){w.top+=v[1];t=true}if(y.top<=A[1]){w.top-=v[1];t=true}if(y.left-s>=-A[0]){w.left+=v[0];t=true}if(y.left<=A[0]){w.left-=v[0];t=true}if(t){e.setScroll(b,w);x=setTimeout(a,n);z.fake=true;if(g(b[0])){w=e.getScroll(b);z.left+=w.left-D.left;z.top+=w.top-D.top}f.fire("drag",z)}else x=null}var e=this,j=d(f,0,"__dd-scroll-id-"),p=e[c];if(!p[j]){var v=e.get("rate"),A=e.get("diff"),
z,y,x=null;f.on("drag",i);f.on("dragend",o);p[j]={drag:f,fn:function(){f.detach("drag",i);f.detach("dragend",o)}}}}});return l},{requires:["base","node","dom"]});KISSY.add("dd",function(m,q,r,k,l,d,n,c){q={Draggable:r,Droppable:k,DDM:q,Proxy:l,DraggableDelegate:d,DroppableDelegate:n,Scroll:c};m.mix(m,q);return q},{requires:["dd/ddm","dd/draggable","dd/droppable","dd/proxy","dd/draggable-delegate","dd/droppable-delegate","dd/scroll"]});
