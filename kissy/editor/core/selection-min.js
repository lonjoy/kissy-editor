KISSY.Editor.add("selection",function(q){function E(b){this.document=this.document=b;this._={cache:{}};if(w){var a=this.getNative().createRange();if(!a||a.item&&a.item(0).ownerDocument!=b||a.parentElement&&a.parentElement().ownerDocument!=b)this.isInvalid=j}}function J(b){b=new E(b);return!b||b.isInvalid?G:b}function O(b){function a(g){var i=q.XHTML_DTD;return g._4e_isBlockBoundary()&&i.$empty[g._4e_name()]}function d(g){return K(g)&&P(g)}var c=b.document,f=x._4e_getWin(c),e=new n(c.body),h=new n(c.documentElement);
if(y.ie){q.Utils.ieEngine<8&&h.on("click",function(g){(new n(g.target))._4e_name()==="html"&&b.getSelection().getNative().createRange().select()});(function(){function g(m,Q){var H=t.createTextRange();try{H.moveToPoint(m,Q)}catch(U){H=null}return H}function i(){var m=c.selection.createRange();o&&!m.item&&m.compareEndPoints("StartToEnd",m)===0&&o.select();B.remove(c,"mouseup",i);B.remove(c,"mousemove",k);o=r=0;z(j)}function k(m){if(m.button){if(m=g(m.pageX,m.pageY)){m.compareEndPoints("StartToStart",
o)>0?m.setEndPoint("StartToStart",o):m.setEndPoint("EndToEnd",o);m.select()}}else i()}var r,t=e[0],o;c.documentElement.unselectable=true;B.on(c,"mousedown contextmenu",function(m){if(m.target===h[0]){r&&i();if(!(h[0].scrollHeight>h[0].clientHeight)){A.log("fix ie cursor");r=1;if(o=g(m.pageX,m.pageY)){B.on(c,"mouseup",i);B.on(c,"mousemove",k);f.focus();o.select()}}}})})();var l,s,u=j;h.on("mousedown",function(){u=C});h.on("mouseup",function(){u=j});e.on("focusin",function(g){if((new n(g.target))._4e_name()==
"body")if(l){try{u&&l.select()}catch(i){}l=G}});e.on("focus",function(){s=j;z()});e.on("beforedeactivate",function(g){if(!g.relatedTarget){s=C;u=j}});b.on("blur",function(){try{var g=document.documentElement||document.body,i=g.scrollTop,k=g.scrollLeft;c&&c.selection.empty();g.scrollTop=i;g.scrollLeft=k}catch(r){}});e.on("mousedown",function(){s=C});e.on("mouseup",function(){s=j;setTimeout(function(){z(j)},0)});var z=function(g){if(s){var i=b.document,k=b.getSelection(),r=k&&k.getType(),t=k&&i.selection;
if(g&&t&&r==v.SELECTION_NONE)if(!i.queryCommandEnabled("InsertImage")){setTimeout(function(){z(j)},50);return}var o;if(!(t&&t.type&&t.type!="Control"&&(o=t.createRange())&&(o=o.parentElement())&&(o=o.nodeName)&&o.toLowerCase()in{input:1,textarea:1})){l=t&&k.getRanges()[0];b._monitor()}}};e.on("keydown",function(){s=C});e.on("keyup",function(){s=j;setTimeout(function(){z()},0)})}else{B.on(c,"mouseup",b._monitor,b);B.on(c,"keyup",b._monitor,b)}var F=/\s*<(p|div|address|h\d|center)[^>]*>\s*(?:<br[^>]*>|&nbsp;|\u00A0|&#160;|(<!--[\s\S]*?--\>))?\s*(:?<\/\1>)?(?=\s*$|<\/body>)/gi,
K=q.Walker.whitespaces(j),P=q.Walker.bookmark(C,j),L=function(g){return K(g)&&g&&g[0].nodeType!=8};b.on("selectionChange",function(g){var i=g.path;g=(g=g.selection)&&g.getRanges()[0];var k=i.blockLimit;if(y.gecko){var r=i.block||i.blockLimit,t=r&&r._4e_last(d);r&&r._4e_isBlockBoundary()&&!(t&&t[0].nodeType==1&&t._4e_isBlockBoundary())&&r._4e_name()!="pre"&&!r._4e_getBogus()&&r._4e_appendBogus()}if(!(!g||!g.collapsed||i.block)){if(k._4e_name()=="body"){if((i=g.fixBlock(j,"p"))&&i[0]!=e[0].lastChild)if(i._4e_outerHtml().match(F))if((k=
i._4e_next(L))&&k[0].nodeType==p.NODE_ELEMENT&&!a[k]){g.moveToElementEditablePosition(k);i._4e_remove()}else if((k=i._4e_previous(L))&&k[0].nodeType==p.NODE_ELEMENT&&!a[k]){g.moveToElementEditablePosition(k,k._4e_outerHtml().match(F)?C:j);i._4e_remove()}g.select();b.notifySelectionChange()}i=new q.Range(c);i.moveToElementEditablePosition(e,j);if((new q.ElementPath(i.startContainer)).blockLimit._4e_name()!=="body"){i=(new n(c.createElement("p"))).appendTo(e);y.ie||i._4e_appendBogus()}}})}q.SELECTION=
{SELECTION_NONE:1,SELECTION_TEXT:2,SELECTION_ELEMENT:3};var j=true,C=false,G=null,A=KISSY,y=A.UA,x=A.DOM,B=A.Event,n=A.Node,v=q.SELECTION,I=q.RANGE,p=q.NODE,w=y.ie,R=q.Walker,D=q.Range,M={img:1,hr:1,li:1,table:1,tr:1,td:1,th:1,embed:1,object:1,ol:1,ul:1,a:1,input:1,form:1,select:1,textarea:1,button:1,fieldset:1,thead:1,tfoot:1};A.augment(E,{getNative:!w?function(){var b=this._.cache;return b.nativeSel||(b.nativeSel=x._4e_getWin(this.document).getSelection())}:function(){var b=this._.cache;return b.nativeSel||
(b.nativeSel=this.document.selection)},getType:!w?function(){var b=this._.cache;if(b.type)return b.type;var a=v.SELECTION_TEXT,d=this.getNative();if(d){if(d.rangeCount==1){d=d.getRangeAt(0);var c=d.startContainer;if(c==d.endContainer&&c.nodeType==p.NODE_ELEMENT&&Number(d.endOffset-d.startOffset)==1&&M[c.childNodes[d.startOffset].nodeName.toLowerCase()])a=v.SELECTION_ELEMENT}}else a=v.SELECTION_NONE;return b.type=a}:function(){var b=this._.cache;if(b.type)return b.type;var a=v.SELECTION_NONE;try{var d=
this.getNative(),c=d.type;if(c=="Text")a=v.SELECTION_TEXT;if(c=="Control")a=v.SELECTION_ELEMENT;if(d.createRange().parentElement)a=v.SELECTION_TEXT}catch(f){}return b.type=a},getRanges:w?function(){var b=function(a,d){a=a.duplicate();a.collapse(d);for(var c=a.parentElement(),f=c.childNodes,e,h=0;h<f.length;h++){var l=f[h];if(l.nodeType==p.NODE_ELEMENT){e=a.duplicate();e.moveToElementText(l);l=e.compareEndPoints("StartToStart",a);var s=e.compareEndPoints("EndToStart",a);e.collapse();if(l>0)break;else if(!l||
s==1&&l==-1)return{container:c,offset:h};else if(!s)return{container:c,offset:h+1};e=G}}if(!e){e=a.duplicate();e.moveToElementText(c);e.collapse(C)}e.setEndPoint("StartToStart",a);e=String(e.text).replace(/\r\n|\r/g,"\n").length;try{for(;e>0;)e-=f[--h].nodeValue.length}catch(u){e=0}return e===0?{container:c,offset:h}:{container:f[h],offset:-e}};return function(a){var d=this._.cache;if(d.ranges&&!a)return d.ranges;var c=this.getNative();a=c&&c.createRange();var f=this.getType();if(!c)return[];if(f==
v.SELECTION_TEXT){c=new D(this.document);f=b(a,j);c.setStart(new n(f.container),f.offset);f=b(a);c.setEnd(new n(f.container),f.offset);return d.ranges=[c]}else if(f==v.SELECTION_ELEMENT){d=d.ranges=[];for(f=0;f<a.length;f++){var e=a.item(f),h=e.parentNode,l=0;for(c=new D(this.document);l<h.childNodes.length&&h.childNodes[l]!=e;l++);c.setStart(new n(h),l);c.setEnd(new n(h),l+1);d.push(c)}return d}return d.ranges=[]}}():function(b){var a=this._.cache;if(a.ranges&&!b)return a.ranges;b=[];var d=this.getNative();
if(!d)return[];for(var c=0;c<d.rangeCount;c++){var f=d.getRangeAt(c),e=new D(this.document);e.setStart(new n(f.startContainer),f.startOffset);e.setEnd(new n(f.endContainer),f.endOffset);b.push(e)}return a.ranges=b},getStartElement:function(){var b=this._.cache;if(b.startElement!==undefined)return b.startElement;var a,d=this.getNative();switch(this.getType()){case v.SELECTION_ELEMENT:return this.getSelectedElement();case v.SELECTION_TEXT:var c=this.getRanges()[0];if(c)if(!c.collapsed){for(c.optimize();j;){a=
c.startContainer;if(c.startOffset==(a[0].nodeType===p.NODE_ELEMENT?a[0].childNodes.length:a[0].nodeValue.length)&&!a._4e_isBlockBoundary())c.setStartAfter(a);else break}a=c.startContainer;if(a[0].nodeType!=p.NODE_ELEMENT)return a.parent();a=new n(a[0].childNodes[c.startOffset]);if(!a[0]||a[0].nodeType!=p.NODE_ELEMENT)return c.startContainer;for(c=a[0].firstChild;c&&c.nodeType==p.NODE_ELEMENT;){a=new n(c);c=c.firstChild}return a}if(w){c=d.createRange();c.collapse(j);a=c.parentElement()}else if((a=
d.anchorNode)&&a.nodeType!=p.NODE_ELEMENT)a=a.parentNode}return b.startElement=a?x._4e_wrap(a):G},getSelectedElement:function(){var b=this,a,d=b._.cache;if(d.selectedElement!==undefined)return d.selectedElement;if(w){a=b.getNative().createRange();a=a.item&&a.item(0)}a||(a=function(){for(var c=b.getRanges()[0],f,e,h=2;h&&!((f=c.getEnclosedNode())&&f[0].nodeType==p.NODE_ELEMENT&&M[f._4e_name()]&&(e=f));h--)c.shrink(I.SHRINK_ELEMENT);return e&&e[0]}());return d.selectedElement=x._4e_wrap(a)},reset:function(){this._.cache=
{}},selectElement:function(b){var a,d=this.document;if(w)try{a=d.body.createControlRange();a.addElement(b[0]);a.select()}catch(c){a=d.body.createTextRange();a.moveToElementText(b[0]);a.select()}finally{}else{a=d.createRange();a.selectNode(b[0]);b=this.getNative();b.removeAllRanges();b.addRange(a)}this.reset()},selectRanges:function(b){if(w){if(b.length>1){var a=b[b.length-1];b[0].setEnd(a.endContainer,a.endOffset);b.length=1}b[0]&&b[0].select()}else{a=this.getNative();if(!a)return;a.removeAllRanges();
for(var d=0;d<b.length;d++){var c=b[d],f=this.document.createRange(),e=c.startContainer;if(c.collapsed&&(y.gecko&&y.gecko<1.09||y.opera||y.webkit)&&e[0].nodeType==p.NODE_ELEMENT&&!e[0].childNodes.length){e[0].appendChild(this.document.createTextNode(y.webkit?"\u200b":""));c.startOffset++;c.endOffset++}f.setStart(e[0],c.startOffset);f.setEnd(c.endContainer[0],c.endOffset);a.addRange(f)}}this.reset()},createBookmarks2:function(b){for(var a=[],d=this.getRanges(),c=0;c<d.length;c++)a.push(d[c].createBookmark2(b));
return a},createBookmarks:function(b,a){var d=[],c=this.document,f;a=a||this.getRanges();for(var e=a.length,h=0;h<e;h++){d.push(f=a[h].createBookmark(b,j));var l=(b=f.serializable)?A.one("#"+f.startNode,c):f.startNode;f=b?A.one("#"+f.endNode,c):f.endNode;for(var s=h+1;s<e;s++){var u=a[s],z=u.startContainer,F=u.endContainer;x._4e_equals(z,l.parent())&&u.startOffset++;x._4e_equals(z,f.parent())&&u.startOffset++;x._4e_equals(F,l.parent())&&u.endOffset++;x._4e_equals(F,f.parent())&&u.endOffset++}}return d},
selectBookmarks:function(b){for(var a=[],d=0;d<b.length;d++){var c=new D(this.document);c.moveToBookmark(b[d]);a.push(c)}this.selectRanges(a);return this},getCommonAncestor:function(){var b=this.getRanges();return b[0].startContainer._4e_commonAncestor(b[b.length-1].endContainer)},scrollIntoView:function(){var b=this.getStartElement();b&&b._4e_scrollIntoView()},removeAllRanges:function(){var b=this.getNative();if(w)b&&b.clear();else b&&b.removeAllRanges()}});var N={table:1,tbody:1,tr:1},S=R.whitespaces(j),
T=/\ufeff|\u00a0/;D.prototype.select=D.prototype.select=!w?function(){var b=this.startContainer;this.collapsed&&b[0].nodeType==p.NODE_ELEMENT&&!b[0].childNodes.length&&b[0].appendChild(this.document.createTextNode(""));var a=this.document.createRange();a.setStart(b[0],this.startOffset);try{a.setEnd(this.endContainer[0],this.endOffset)}catch(d){if(d.toString().indexOf("NS_ERROR_ILLEGAL_VALUE")>=0){this.collapse(j);a.setEnd(this.endContainer[0],this.endOffset)}else throw d;}b=J(this.document).getNative();
b.removeAllRanges();b.addRange(a)}:function(b){var a=this.collapsed,d,c;if(this.startContainer[0]===this.endContainer[0]&&this.endOffset-this.startOffset==1){var f=this.startContainer[0].childNodes[this.startOffset];if(f.nodeType==p.NODE_ELEMENT){(new E(this.document)).selectElement(new n(f));return}}if(this.startContainer[0].nodeType==p.NODE_ELEMENT&&this.startContainer._4e_name()in N||this.endContainer[0].nodeType==p.NODE_ELEMENT&&this.endContainer._4e_name()in N)this.shrink(I.SHRINK_ELEMENT,j);
var e=this.createBookmark();f=e.startNode;var h;if(!a)h=e.endNode;e=this.document.body.createTextRange();e.moveToElementText(f[0]);e.moveStart("character",1);if(h){b=this.document.body.createTextRange();b.moveToElementText(h[0]);e.setEndPoint("EndToEnd",b);e.moveEnd("character",-1)}else{for(d=f[0].nextSibling;d&&!S(d);)d=d.nextSibling;d=!(d&&d.nodeValue&&d.nodeValue.match(T))&&(b||!f[0].previousSibling||f[0].previousSibling&&x._4e_name(f[0].previousSibling)=="br");c=new n(this.document.createElement("span"));
c.html("&#65279;");c.insertBefore(f);if(d)x.insertBefore(this.document.createTextNode("\ufeff"),f[0]||f)}this.setStartBefore(f);f._4e_remove();if(a){if(d){e.moveStart("character",-1);e.select();this.document.selection.clear()}else e.select();if(c){this.moveToPosition(c,I.POSITION_BEFORE_START);c._4e_remove()}}else{this.setEndBefore(h);h._4e_remove();e.select()}};E.getSelection=J;q.Selection=E;q.on("instanceCreated",function(b){O(b.editor)})});
