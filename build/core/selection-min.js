KISSY.Editor.add("selection",function(o){function u(b){this.document=b;this._={cache:{}};if(l.ie){var a=this.getNative().createRange();if(!a||a.item&&a.item(0).ownerDocument!=b||a.parentElement&&a.parentElement().ownerDocument!=b)this.isInvalid=true}}function A(b){b=new u(b);return!b||b.isInvalid?null:b}function B(b){var a=b.document,c=new i(a.body),d=new i(a.documentElement);if(l.ie){if(l.ie<8||document.documentMode==7)d.on("click",function(m){n._4e_name(m.target)==="html"&&b.getSelection().getRanges()[0].select()});
var e,f;c.on("focusin",function(m){if(m.target.nodeName.toUpperCase()=="BODY")if(e){try{e.select()}catch(p){}e=null}});c.on("focus",function(){f=true;h()});c.on("beforedeactivate",function(m){m.relatedTarget||(f=false)});l.ie<8&&v.on(n._4e_getWin(a),"blur",function(){a.selection.empty()});c.on("mousedown",g);c.on("mouseup",function(){f=true;setTimeout(function(){h(true)},0)});c.on("keydown",g);c.on("keyup",function(){f=true;h()});v.on(a,"selectionchange",h);var g=function(){f=false},h=function(m){if(f){var p=
b.document,s=b.getSelection(),q=s&&s.getNative();if(m&&q&&q.type=="None")if(!p.queryCommandEnabled("InsertImage")){setTimeout(function(){h(true)},50);return}var w;if(!(q&&q.type=="Text"&&(w=q.createRange().parentElement().nodeName.toLowerCase())&&w in{input:1,textarea:1})){e=q&&s.getRanges()[0];b._monitor()}}}}else{v.on(a,"mouseup",b._monitor,b);v.on(a,"keyup",b._monitor,b)}}o.SELECTION={};var r=KISSY,l=r.UA,n=r.DOM,v=r.Event,C=o.Utils.tryThese,i=r.Node,j=o.SELECTION,x=o.RANGE,k=o.NODE,D=o.Walker,
t=o.Range;j.SELECTION_NONE=1;j.SELECTION_TEXT=2;j.SELECTION_ELEMENT=3;var y={img:1,hr:1,li:1,table:1,tr:1,td:1,th:1,embed:1,object:1,ol:1,ul:1,a:1,input:1,form:1,select:1,textarea:1,button:1,fieldset:1,thead:1,tfoot:1};r.augment(u,{getNative:l.ie?function(){return this._.cache.nativeSel||(this._.cache.nativeSel=this.document.selection)}:function(){return this._.cache.nativeSel||(this._.cache.nativeSel=n._4e_getWin(this.document).getSelection())},getType:l.ie?function(){var b=this._.cache;if(b.type)return b.type;
var a=j.SELECTION_NONE;try{var c=this.getNative(),d=c.type;if(d=="Text")a=j.SELECTION_TEXT;if(d=="Control")a=j.SELECTION_ELEMENT;if(c.createRange().parentElement)a=j.SELECTION_TEXT}catch(e){}return b.type=a}:function(){var b=this._.cache;if(b.type)return b.type;var a=j.SELECTION_TEXT,c=this.getNative();if(c){if(c.rangeCount==1){c=c.getRangeAt(0);var d=c.startContainer;if(d==c.endContainer&&d.nodeType==k.NODE_ELEMENT&&c.endOffset-c.startOffset===1&&y[d.childNodes[c.startOffset].nodeName.toLowerCase()])a=
j.SELECTION_ELEMENT}}else a=j.SELECTION_NONE;return b.type=a},getRanges:l.ie?function(){var b=function(a,c){a=a.duplicate();a.collapse(c);c=a.parentElement();for(var d=c.childNodes,e,f=0;f<d.length;f++){var g=d[f];if(g.nodeType==k.NODE_ELEMENT){e=a.duplicate();e.moveToElementText(g);g=e.compareEndPoints("StartToStart",a);var h=e.compareEndPoints("EndToStart",a);e.collapse();if(g>0)break;else if(!g||h==1&&g==-1)return{container:c,offset:f};else if(!h)return{container:c,offset:f+1};e=null}}if(!e){e=
a.duplicate();e.moveToElementText(c);e.collapse(false)}e.setEndPoint("StartToStart",a);a=e.text.replace(/(\r\n|\r)/g,"\n").length;try{for(;a>0;)a-=d[--f].nodeValue.length}catch(m){a=0}return a===0?{container:c,offset:f}:{container:d[f],offset:-a}};return function(){var a=this._.cache;if(a.ranges)return a.ranges;var c=this.getNative(),d=c&&c.createRange(),e=this.getType();if(!c)return[];if(e==j.SELECTION_TEXT){c=new t(this.document);e=b(d,true);c.setStart(new i(e.container),e.offset);e=b(d);c.setEnd(new i(e.container),
e.offset);return a.ranges=[c]}else if(e==j.SELECTION_ELEMENT){a=this._.cache.ranges=[];for(e=0;e<d.length;e++){var f=d.item(e),g=f.parentNode,h=0;for(c=new t(this.document);h<g.childNodes.length&&g.childNodes[h]!=f;h++);c.setStart(new i(g),h);c.setEnd(new i(g),h+1);a.push(c)}return a}return a.ranges=[]}}():function(){var b=this._.cache;if(b.ranges)return b.ranges;var a=[],c=this.getNative();if(!c)return[];for(var d=0;d<c.rangeCount;d++){var e=c.getRangeAt(d),f=new t(this.document);f.setStart(new i(e.startContainer),
e.startOffset);f.setEnd(new i(e.endContainer),e.endOffset);a.push(f)}return b.ranges=a},getStartElement:function(){var b=this._.cache;if(b.startElement!==undefined)return b.startElement;var a,c=this.getNative();switch(this.getType()){case j.SELECTION_ELEMENT:return this.getSelectedElement();case j.SELECTION_TEXT:var d=this.getRanges()[0];if(d)if(!d.collapsed){for(d.optimize();;){a=d.startContainer;if(d.startOffset==(a[0].nodeType===k.NODE_ELEMENT?a[0].childNodes.length:a[0].nodeValue.length)&&!a._4e_isBlockBoundary())d.setStartAfter(a);
else break}a=d.startContainer;if(a[0].nodeType!=k.NODE_ELEMENT)return a.parent();a=new i(a[0].childNodes[d.startOffset]);if(!a[0]||a[0].nodeType!=k.NODE_ELEMENT)return d.startContainer;for(d=a[0].firstChild;d&&d.nodeType==k.NODE_ELEMENT;){a=new i(d);d=d.firstChild}return a}if(l.ie){d=c.createRange();d.collapse(true);a=d.parentElement()}else if((a=c.anchorNode)&&a.nodeType!=k.NODE_ELEMENT)a=a.parentNode}return b.startElement=a?new i(a):null},getSelectedElement:function(){var b=this._.cache;if(b.selectedElement!==
undefined)return b.selectedElement;var a=this,c=C(function(){return a.getNative().createRange().item(0)},function(){for(var d=a.getRanges()[0],e,f,g=2;g&&!((e=d.getEnclosedNode())&&e[0].nodeType==k.NODE_ELEMENT&&y[e._4e_name()]&&(f=e));g--)d.shrink(x.SHRINK_ELEMENT);return f[0]});return b.selectedElement=c?new i(c):null},reset:function(){this._.cache={}},selectElement:function(b){var a;if(l.ie)try{a=this.document.body.createControlRange();a.addElement(b[0]);a.select()}catch(c){a=this.document.body.createTextRange();
a.moveToElementText(b[0]);a.select()}finally{}else{a=this.document.createRange();a.selectNode(b[0]);b=this.getNative();b.removeAllRanges();b.addRange(a)}this.reset()},selectRanges:function(b){if(l.ie)b[0]&&b[0].select();else{var a=this.getNative();if(!a)return;a.removeAllRanges();for(var c=0;c<b.length;c++){var d=b[c],e=this.document.createRange(),f=d.startContainer;d.collapsed&&l.gecko&&l.gecko<1.09&&f[0].nodeType==k.NODE_ELEMENT&&!f[0].childNodes.length&&f[0].appendChild(this.document.createTextNode(""));
e.setStart(f[0],d.startOffset);e.setEnd(d.endContainer[0],d.endOffset);a.addRange(e)}}this.reset()},createBookmarks2:function(b){for(var a=[],c=this.getRanges(),d=0;d<c.length;d++)a.push(c[d].createBookmark2(b));return a},createBookmarks:function(b){for(var a=[],c=this.getRanges(),d=c.length,e=this.document,f,g=0;g<d;g++){a.push(f=c[g].createBookmark(b,true));var h=(b=f.serializable)?r.one("#"+f.startNode,e):f.startNode;f=b?r.one("#"+f.endNode,e):f.endNode;for(var m=g+1;m<d;m++){var p=c[m],s=p.startContainer,
q=p.endContainer;n._4e_equals(s,h.parent())&&p.startOffset++;n._4e_equals(s,f.parent())&&p.startOffset++;n._4e_equals(q,h.parent())&&p.endOffset++;n._4e_equals(q,f.parent())&&p.endOffset++}}return a},selectBookmarks:function(b){for(var a=[],c=0;c<b.length;c++){var d=new t(this.document);d.moveToBookmark(b[c]);a.push(d)}this.selectRanges(a);return this},getCommonAncestor:function(){var b=this.getRanges();return b[0].startContainer._4e_commonAncestor(b[b.length-1].endContainer)},scrollIntoView:function(){this.getStartElement()._4e_scrollIntoView()}});
o.Selection=u;var z={table:1,tbody:1,tr:1},E=D.whitespaces(true),F=/\ufeff|\u00a0/;t.prototype.select=l.ie?function(b){var a=this.collapsed,c,d;if(this.startContainer[0]===this.endContainer[0]&&this.endOffset-this.startOffset==1){var e=this.startContainer[0].childNodes[this.startOffset];if(e.nodeType==k.NODE_ELEMENT){(new u(this.document)).selectElement(new i(e));return}}if(this.startContainer[0].nodeType==k.NODE_ELEMENT&&this.startContainer._4e_name()in z||this.endContainer[0].nodeType==k.NODE_ELEMENT&&
this.endContainer._4e_name()in z)this.shrink(k.NODE_ELEMENT,true);var f=this.createBookmark();e=f.startNode;var g;if(!a)g=f.endNode;f=this.document.body.createTextRange();f.moveToElementText(e[0]);f.moveStart("character",1);if(g){b=this.document.body.createTextRange();b.moveToElementText(g[0]);f.setEndPoint("EndToEnd",b);f.moveEnd("character",-1)}else{for(c=e[0].nextSibling;c&&!E(c);)c=c.nextSibling;c=!(c&&c.nodeValue&&c.nodeValue.match(F))&&(b||!e[0].previousSibling||e[0].previousSibling&&n._4e_name(e[0].previousSibling)==
"br");d=this.document.createElement("span");d.innerHTML="&#65279;";d=new i(d);n.insertBefore(d[0],e[0]);c&&n.insertBefore(this.document.createTextNode("\ufeff"),e[0])}this.setStartBefore(e);e._4e_remove();if(a){if(c){f.moveStart("character",-1);f.select();this.document.selection.clear()}else f.select();if(d){this.moveToPosition(d,x.POSITION_BEFORE_START);d._4e_remove()}}else{this.setEndBefore(g);g._4e_remove();f.select()}}:function(){var b=this.startContainer;this.collapsed&&b[0].nodeType==k.NODE_ELEMENT&&
!b[0].childNodes.length&&b[0].appendChild(this.document.createTextNode(""));var a=this.document.createRange();a.setStart(b[0],this.startOffset);try{a.setEnd(this.endContainer[0],this.endOffset)}catch(c){if(c.toString().indexOf("NS_ERROR_ILLEGAL_VALUE")>=0){this.collapse(true);a.setEnd(this.endContainer[0],this.endOffset)}else throw c;}b=A(this.document).getNative();b.removeAllRanges();b.addRange(a)};o.on("instanceCreated",function(b){B(b.editor)})});
