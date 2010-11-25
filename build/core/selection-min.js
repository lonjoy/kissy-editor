KISSY.Editor.add("selection",function(s){function v(b){this.document=this.document=b;this._={cache:{}};if(l.ie){var a=this.getNative().createRange();if(!a||a.item&&a.item(0).ownerDocument!=b||a.parentElement&&a.parentElement().ownerDocument!=b)this.isInvalid=k}}function F(b){b=new v(b);return!b||b.isInvalid?A:b}function K(b){var a=b.document,c=new q(a.body),d=new q(a.documentElement);if(l.ie){if(l.ie<8||document.documentMode==7)d.on("click",function(h){o._4e_name(h.target)==="html"&&b.getSelection().getRanges()[0].select()});
var e,f,g=1;d.on("mousedown",function(){g=0});d.on("mouseup",function(){g=1});c.on("focusin",function(h){if(o._4e_name(h.target)=="body")if(e){try{g&&e.select()}catch(t){}e=A}});c.on("focus",function(){f=k;r()});c.on("beforedeactivate",function(h){if(!h.relatedTarget){f=B;g=1}});C.on(o._4e_getWin(a),"blur",function(){a&&a.selection.empty()});c.on("mousedown",function(){i()});c.on("mouseup",function(){f=k;setTimeout(function(){r(k)},0)});var i=function(){f=B},r=function(h){if(f){var t=b.document,m=
b.getSelection(),G=m&&m.getType(),D=m&&m.getNative();if(h&&D&&G==p.SELECTION_NONE)if(!t.queryCommandEnabled("InsertImage")){setTimeout(function(){r(k)},50);return}var H;if(!(D&&G==p.SELECTION_TEXT&&(H=o._4e_name(D.createRange().parentElement()))&&H in{input:1,textarea:1})){e=D&&m.getRanges()[0];b._monitor()}}};c.on("keydown",i);c.on("keyup",function(){f=k;r()});C.on(a,"selectionchange",r)}else{C.on(a,"mouseup",b._monitor,b);C.on(a,"keyup",b._monitor,b)}var u={table:1,pre:1},y=/\s*<(p|div|address|h\d|center)[^>]*>\s*(?:<br[^>]*>|&nbsp;|\u00A0|&#160;)?\s*(:?<\/\1>)?(?=\s*$|<\/body>)/gi,
z=s.Walker.whitespaces(k);b.on("selectionChange",function(h){var t=h.path;h=(h=h.selection)&&h.getRanges()[0];if(!(!h||!h.collapsed||t.block))if(t.blockLimit._4e_name()=="body"){t=h.fixBlock(k,"p");if(t._4e_outerHtml().match(y)){var m=t._4e_next(z);if(m&&m[0].nodeType==n.NODE_ELEMENT&&!u[m._4e_name()]){h.moveToElementEditablePosition(m);t._4e_remove()}else if((m=t._4e_previous(z))&&m[0].nodeType==n.NODE_ELEMENT&&!u[m._4e_name()]){h.moveToElementEditablePosition(m,m._4e_outerHtml().match(y)?B:k);t._4e_remove()}}h.select();
l.ie||b.notifySelectionChange()}})}s.SELECTION={SELECTION_NONE:1,SELECTION_TEXT:2,SELECTION_ELEMENT:3};var k=true,B=false,A=null,w=KISSY,l=w.UA,o=w.DOM,C=w.Event,q=w.Node,p=s.SELECTION,E=s.RANGE,n=s.NODE,j=s.Walker,x=s.Range,I={img:1,hr:1,li:1,table:1,tr:1,td:1,th:1,embed:1,object:1,ol:1,ul:1,a:1,input:1,form:1,select:1,textarea:1,button:1,fieldset:1,thead:1,tfoot:1};w.augment(v,{getNative:l.ie?function(){var b=this._.cache;return b.nativeSel||(b.nativeSel=this.document.selection)}:function(){var b=
this._.cache;return b.nativeSel||(b.nativeSel=o._4e_getWin(this.document).getSelection())},getType:l.ie?function(){var b=this._.cache;if(b.type)return b.type;var a=p.SELECTION_NONE;try{var c=this.getNative(),d=c.type;if(d=="Text")a=p.SELECTION_TEXT;if(d=="Control")a=p.SELECTION_ELEMENT;if(c.createRange().parentElement)a=p.SELECTION_TEXT}catch(e){}return b.type=a}:function(){var b=this._.cache;if(b.type)return b.type;var a=p.SELECTION_TEXT,c=this.getNative();if(c){if(c.rangeCount==1){c=c.getRangeAt(0);
var d=c.startContainer;if(d==c.endContainer&&d.nodeType==n.NODE_ELEMENT&&c.endOffset-c.startOffset===1&&I[d.childNodes[c.startOffset].nodeName.toLowerCase()])a=p.SELECTION_ELEMENT}}else a=p.SELECTION_NONE;return b.type=a},getRanges:l.ie?function(){var b=function(a,c){a=a.duplicate();a.collapse(c);for(var d=a.parentElement(),e=d.childNodes,f,g=0;g<e.length;g++){var i=e[g];if(i.nodeType==n.NODE_ELEMENT){f=a.duplicate();f.moveToElementText(i);i=f.compareEndPoints("StartToStart",a);var r=f.compareEndPoints("EndToStart",
a);f.collapse();if(i>0)break;else if(!i||r==1&&i==-1)return{container:d,offset:g};else if(!r)return{container:d,offset:g+1};f=A}}if(!f){f=a.duplicate();f.moveToElementText(d);f.collapse(B)}f.setEndPoint("StartToStart",a);f=f.text.replace(/(\r\n|\r)/g,"\n").length;try{for(;f>0;)f-=e[--g].nodeValue.length}catch(u){f=0}return f===0?{container:d,offset:g}:{container:e[g],offset:-f}};return function(){var a=this._.cache;if(a.ranges)return a.ranges;var c=this.getNative(),d=c&&c.createRange(),e=this.getType();
if(!c)return[];if(e==p.SELECTION_TEXT){c=new x(this.document);e=b(d,k);c.setStart(new q(e.container),e.offset);e=b(d);c.setEnd(new q(e.container),e.offset);return a.ranges=[c]}else if(e==p.SELECTION_ELEMENT){a=a.ranges=[];for(e=0;e<d.length;e++){var f=d.item(e),g=f.parentNode,i=0;for(c=new x(this.document);i<g.childNodes.length&&g.childNodes[i]!=f;i++);c.setStart(new q(g),i);c.setEnd(new q(g),i+1);a.push(c)}return a}return a.ranges=[]}}():function(){var b=this._.cache;if(b.ranges)return b.ranges;
var a=[],c=this.getNative();if(!c)return[];for(var d=0;d<c.rangeCount;d++){var e=c.getRangeAt(d),f=new x(this.document);f.setStart(new q(e.startContainer),e.startOffset);f.setEnd(new q(e.endContainer),e.endOffset);a.push(f)}return b.ranges=a},getStartElement:function(){var b=this._.cache;if(b.startElement!==undefined)return b.startElement;var a,c=this.getNative();switch(this.getType()){case p.SELECTION_ELEMENT:return this.getSelectedElement();case p.SELECTION_TEXT:var d=this.getRanges()[0];if(d)if(!d.collapsed){for(d.optimize();k;){a=
d.startContainer;if(d.startOffset==(a[0].nodeType===n.NODE_ELEMENT?a[0].childNodes.length:a[0].nodeValue.length)&&!a._4e_isBlockBoundary())d.setStartAfter(a);else break}a=d.startContainer;if(a[0].nodeType!=n.NODE_ELEMENT)return a.parent();a=new q(a[0].childNodes[d.startOffset]);if(!a[0]||a[0].nodeType!=n.NODE_ELEMENT)return d.startContainer;for(d=a[0].firstChild;d&&d.nodeType==n.NODE_ELEMENT;){a=new q(d);d=d.firstChild}return a}if(l.ie){d=c.createRange();d.collapse(k);a=d.parentElement()}else if((a=
c.anchorNode)&&a.nodeType!=n.NODE_ELEMENT)a=a.parentNode}return b.startElement=a?o._4e_wrap(a):A},getSelectedElement:function(){var b=this,a,c=b._.cache;if(c.selectedElement!==undefined)return c.selectedElement;if(l.ie){a=b.getNative().createRange();a=a.item&&a.item(0)}a||(a=function(){for(var d=b.getRanges()[0],e,f,g=2;g&&!((e=d.getEnclosedNode())&&e[0].nodeType==n.NODE_ELEMENT&&I[e._4e_name()]&&(f=e));g--)d.shrink(E.SHRINK_ELEMENT);return f&&f[0]}());return c.selectedElement=o._4e_wrap(a)},reset:function(){this._.cache=
{}},selectElement:function(b){var a;if(l.ie)try{a=this.document.body.createControlRange();a.addElement(b[0]);a.select()}catch(c){a=this.document.body.createTextRange();a.moveToElementText(b[0]);a.select()}finally{}else{a=this.document.createRange();a.selectNode(b[0]);b=this.getNative();b.removeAllRanges();b.addRange(a)}this.reset()},selectRanges:function(b){if(l.ie){if(b.length>1){var a=b[b.length-1];b[0].setEnd(a.endContainer,a.endOffset);b.length=1}b[0]&&b[0].select()}else{a=this.getNative();if(!a)return;
a.removeAllRanges();for(var c=0;c<b.length;c++){var d=b[c],e=this.document.createRange(),f=d.startContainer;d.collapsed&&l.gecko&&l.gecko<1.09&&f[0].nodeType==n.NODE_ELEMENT&&!f[0].childNodes.length&&f[0].appendChild(this.document.createTextNode(""));e.setStart(f[0],d.startOffset);e.setEnd(d.endContainer[0],d.endOffset);a.addRange(e)}}this.reset()},createBookmarks2:function(b){for(var a=[],c=this.getRanges(),d=0;d<c.length;d++)a.push(c[d].createBookmark2(b));return a},createBookmarks:function(b,a){var c=
[],d=this.document,e;a=a||this.getRanges();for(var f=a.length,g=0;g<f;g++){c.push(e=a[g].createBookmark(b,k));var i=(b=e.serializable)?w.one("#"+e.startNode,d):e.startNode;e=b?w.one("#"+e.endNode,d):e.endNode;for(var r=g+1;r<f;r++){var u=a[r],y=u.startContainer,z=u.endContainer;o._4e_equals(y,i.parent())&&u.startOffset++;o._4e_equals(y,e.parent())&&u.startOffset++;o._4e_equals(z,i.parent())&&u.endOffset++;o._4e_equals(z,e.parent())&&u.endOffset++}}return c},selectBookmarks:function(b){for(var a=[],
c=0;c<b.length;c++){var d=new x(this.document);d.moveToBookmark(b[c]);a.push(d)}this.selectRanges(a);return this},getCommonAncestor:function(){var b=this.getRanges();return b[0].startContainer._4e_commonAncestor(b[b.length-1].endContainer)},scrollIntoView:function(){var b=this.getStartElement();b&&b._4e_scrollIntoView()},removeAllRanges:function(){var b=this.getNative();if(l.ie)b&&b.clear();else b&&b.removeAllRanges()}});var J={table:1,tbody:1,tr:1},L=j.whitespaces(k),M=/\ufeff|\u00a0/;x.prototype.select=
x.prototype.select=l.ie?function(b){var a=this.collapsed,c,d;if(this.startContainer[0]===this.endContainer[0]&&this.endOffset-this.startOffset==1){var e=this.startContainer[0].childNodes[this.startOffset];if(e.nodeType==n.NODE_ELEMENT){(new v(this.document)).selectElement(new q(e));return}}if(this.startContainer[0].nodeType==n.NODE_ELEMENT&&this.startContainer._4e_name()in J||this.endContainer[0].nodeType==n.NODE_ELEMENT&&this.endContainer._4e_name()in J)this.shrink(E.SHRINK_ELEMENT,k);var f=this.createBookmark();
e=f.startNode;var g;if(!a)g=f.endNode;f=this.document.body.createTextRange();f.moveToElementText(e[0]);f.moveStart("character",1);if(g){b=this.document.body.createTextRange();b.moveToElementText(g[0]);f.setEndPoint("EndToEnd",b);f.moveEnd("character",-1)}else{for(c=e[0].nextSibling;c&&!L(c);)c=c.nextSibling;c=!(c&&c.nodeValue&&c.nodeValue.match(M))&&(b||!e[0].previousSibling||e[0].previousSibling&&o._4e_name(e[0].previousSibling)=="br");d=this.document.createElement("span");d.innerHTML="&#65279;";
d=(new q(d)).insertBefore(e);c&&o.insertBefore(this.document.createTextNode("\ufeff"),e)}this.setStartBefore(e);e._4e_remove();if(a){if(c){f.moveStart("character",-1);f.select();this.document.selection.clear()}else f.select();if(d){this.moveToPosition(d,E.POSITION_BEFORE_START);d._4e_remove()}}else{this.setEndBefore(g);g._4e_remove();f.select()}}:function(){var b=this.startContainer;this.collapsed&&b[0].nodeType==n.NODE_ELEMENT&&!b[0].childNodes.length&&b[0].appendChild(this.document.createTextNode(""));
var a=this.document.createRange();a.setStart(b[0],this.startOffset);try{a.setEnd(this.endContainer[0],this.endOffset)}catch(c){if(c.toString().indexOf("NS_ERROR_ILLEGAL_VALUE")>=0){this.collapse(k);a.setEnd(this.endContainer[0],this.endOffset)}else throw c;}b=F(this.document).getNative();b.removeAllRanges();b.addRange(a)};v.getSelection=F;s.Selection=v;s.Selection=v;j=v.prototype;s.Utils.extern(j,{getNative:j.getNative,getType:j.getType,getRanges:j.getRanges,getStartElement:j.getStartElement,getSelectedElement:j.getSelectedElement,
reset:j.reset,selectElement:j.selectElement,selectRanges:j.selectRanges,createBookmarks2:j.createBookmarks2,createBookmarks:j.createBookmarks,getCommonAncestor:j.getCommonAncestor,scrollIntoView:j.scrollIntoView,selectBookmarks:j.selectBookmarks,removeAllRanges:j.removeAllRanges});s.on("instanceCreated",function(b){K(b.editor)})});
