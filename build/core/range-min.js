KISSY.Editor.add("range",function(w){function A(a){this.endOffset=this.endContainer=this.startOffset=this.startContainer=q;this.collapsed=o;this.document=a}function M(a){var b=a[0].nodeType!=g.NODE_TEXT&&a._4e_name()in E.$removeEmpty,c=!x.trim(a[0].nodeValue);a=!!a.parent().attr("_ke_bookmark");return b||c||a}function I(a){return!N(a)&&!O(a)}function J(a){var b=s,c=y.bookmark(o);return function(e){if(c(e))return o;if(e[0].nodeType==g.NODE_TEXT){if(x.trim(e[0].nodeValue).length)return s}else if(e[0].nodeType==
g.NODE_ELEMENT)if(!P[e._4e_name()])if(!a&&!G.ie&&e._4e_name()=="br"&&!b)b=o;else return s;return o}}function Q(a,b){function c(e){return e&&e.nodeName=="span"&&e.getAttribute("_ke_bookmark")}return function(e){var d,f;d=e&&!e.nodeName&&(f=e.parentNode)&&c(f);d=a?d:d||c(e);return b^d}}function R(a){return function(b){b=(b=b[0]||b)&&b.nodeType==g.NODE_TEXT&&!x.trim(b.nodeValue);return a^b}}w.RANGE={POSITION_AFTER_START:1,POSITION_BEFORE_END:2,POSITION_BEFORE_START:3,POSITION_AFTER_END:4,ENLARGE_ELEMENT:1,
ENLARGE_BLOCK_CONTENTS:2,ENLARGE_LIST_ITEM_CONTENTS:3,START:1,END:2,STARTEND:3,SHRINK_ELEMENT:1,SHRINK_TEXT:2};w.RANGE=w.RANGE;var o=true,s=false,q=null,x=KISSY,g=w.NODE,h=w.RANGE,S=w.POSITION,y=w.Walker,v=x.DOM,K=w.Utils.getByAddress,G=x.UA,E=w.XHTML_DTD,B=w.ElementPath,t=x.Node,L={area:1,base:1,br:1,col:1,hr:1,img:1,input:1,link:1,meta:1,param:1};A.prototype.toString=function(){var a=[];a.push((this.startContainer[0].id||this.startContainer[0].nodeName)+":"+this.startOffset);a.push((this.endContainer[0].id||
this.endContainer[0].nodeName)+":"+this.endOffset);return a.join("<br/>")};x.augment(A,{updateCollapsed:function(){this.collapsed=this.startContainer&&this.endContainer&&v._4e_equals(this.startContainer,this.endContainer)&&this.startOffset==this.endOffset},optimize:function(){var a=this.startContainer,b=this.startOffset;if(a[0].nodeType!=g.NODE_ELEMENT)if(b)b>=a[0].nodeValue.length&&this.setStartAfter(a);else this.setStartBefore(a);a=this.endContainer;b=this.endOffset;if(a[0].nodeType!=g.NODE_ELEMENT)if(b)b>=
a[0].nodeValue.length&&this.setEndAfter(a);else this.setEndBefore(a)},setStartAfter:function(a){this.setStart(a.parent(),a._4e_index()+1)},setStartBefore:function(a){this.setStart(a.parent(),a._4e_index())},setEndAfter:function(a){this.setEnd(a.parent(),a._4e_index()+1)},setEndBefore:function(a){this.setEnd(a.parent(),a._4e_index())},optimizeBookmark:function(){var a=this.startContainer,b=this.endContainer;a&&a._4e_name()=="span"&&a.attr("_ke_bookmark")&&this.setStartAt(a,h.POSITION_BEFORE_START);
b&&b._4e_name()=="span"&&b.attr("_ke_bookmark")&&this.setEndAt(b,h.POSITION_AFTER_END)},setStart:function(a,b){if(a[0].nodeType==g.NODE_ELEMENT&&L[a._4e_name()]){a=a.parent();b=a._4e_index()}this.startContainer=a;this.startOffset=b;if(!this.endContainer){this.endContainer=a;this.endOffset=b}this.updateCollapsed()},setEnd:function(a,b){if(a[0].nodeType==g.NODE_ELEMENT&&L[a._4e_name()]){a=a.parent();b=a._4e_index()+1}this.endContainer=a;this.endOffset=b;if(!this.startContainer){this.startContainer=
a;this.startOffset=b}this.updateCollapsed()},setStartAt:function(a,b){switch(b){case h.POSITION_AFTER_START:this.setStart(a,0);break;case h.POSITION_BEFORE_END:a[0].nodeType==g.NODE_TEXT?this.setStart(a,a[0].nodeValue.length):this.setStart(a,a[0].childNodes.length);break;case h.POSITION_BEFORE_START:this.setStartBefore(a);break;case h.POSITION_AFTER_END:this.setStartAfter(a)}this.updateCollapsed()},setEndAt:function(a,b){switch(b){case h.POSITION_AFTER_START:this.setEnd(a,0);break;case h.POSITION_BEFORE_END:a[0].nodeType==
g.NODE_TEXT?this.setEnd(a,a[0].nodeValue.length):this.setEnd(a,a[0].childNodes.length);break;case h.POSITION_BEFORE_START:this.setEndBefore(a);break;case h.POSITION_AFTER_END:this.setEndAfter(a)}this.updateCollapsed()},execContentsAction:function(a,b){var c=this.startContainer,e=this.endContainer,d=this.startOffset,f=this.endOffset,m,l=this.document,i;this.optimizeBookmark();if(e[0].nodeType==g.NODE_TEXT)e=e._4e_splitText(f);else if(e[0].childNodes.length>0)if(f>=e[0].childNodes.length){e=new t(e[0].appendChild(l.createTextNode("")));
i=o}else e=new t(e[0].childNodes[f]);if(c[0].nodeType==g.NODE_TEXT){c._4e_splitText(d);if(c._4e_equals(e))e=new t(c[0].nextSibling)}else if(d)if(d>=c[0].childNodes.length){m=new t(l.createTextNode(""));c.append(m);c=m;m=o}else c=new t(c[0].childNodes[d].previousSibling);else{m=new t(l.createTextNode(""));c.prepend(m);c=m;m=o}d=c._4e_parents();f=e._4e_parents();var j,r,p;for(j=0;j<d.length;j++){r=d[j];p=f[j];if(!r._4e_equals(p))break}l=b;for(var n,u,z,D=j;D<d.length;D++){n=d[D];u=l&&!n._4e_equals(c)?
l.appendChild(n._4e_clone()[0]):null;for(n=n[0].nextSibling;n;){if(v._4e_equals(f[D],n)||v._4e_equals(e,n))break;z=n.nextSibling;if(a==2)l.appendChild(n.cloneNode(o));else{v._4e_remove(n);a==1&&l.appendChild(n)}n=z}if(u)l=u}l=b;for(j=j;j<f.length;j++){n=f[j];u=l&&a>0&&!n._4e_equals(e)?l.appendChild(n._4e_clone()[0]):null;if(!d[j]||!n.parent()._4e_equals(d[j].parent()))for(n=n[0].previousSibling;n;){if(v._4e_equals(d[j],n)||v._4e_equals(c,n))break;z=n.previousSibling;if(a==2)l.insertBefore(n.cloneNode(o),
l.firstChild);else{v._4e_remove(n);a==1&&l.insertBefore(n,l.firstChild)}n=z}if(u)l=u}if(a==2){p=this.startContainer[0];if(p.nodeType==g.NODE_TEXT&&p.nextSibling&&p.nextSibling.nodeType==g.NODE_TEXT){p.data+=p.nextSibling.data;p.parentNode.removeChild(p.nextSibling)}p=this.endContainer[0];if(p.nodeType==g.NODE_TEXT&&p.nextSibling&&p.nextSibling.nodeType==g.NODE_TEXT){p.data+=p.nextSibling.data;p.parentNode.removeChild(p.nextSibling)}}else{if(r&&p&&(!c.parent()._4e_equals(r.parent())||!e.parent()._4e_equals(p.parent()))){r=
p._4e_index();m&&p.parent()._4e_equals(c.parent())&&r--;this.setStart(p.parent(),r)}this.collapse(o)}m&&c._4e_remove();i&&e[0].parentNode&&e._4e_remove()},collapse:function(a){if(a){this.endContainer=this.startContainer;this.endOffset=this.startOffset}else{this.startContainer=this.endContainer;this.startOffset=this.endOffset}this.collapsed=o},clone:function(){var a=new A(this.document);a.startContainer=this.startContainer;a.startOffset=this.startOffset;a.endContainer=this.endContainer;a.endOffset=
this.endOffset;a.collapsed=this.collapsed;return a},getEnclosedNode:function(){var a=this.clone();a.optimize();if(a.startContainer[0].nodeType!=g.NODE_ELEMENT||a.endContainer[0].nodeType!=g.NODE_ELEMENT)return q;var b=new w.Walker(a),c=Q(o,undefined),e=R(o);a.evaluator=function(d){return e(d)&&c(d)};a=b.next();b.reset();b=b.previous();return a&&a._4e_equals(b)?a:q},shrink:function(a,b){if(!this.collapsed){a=a||h.SHRINK_TEXT;var c=this.clone(),e=this.startContainer,d=this.endContainer,f=this.startOffset,
m=this.endOffset,l=1,i=1;if(e&&e[0].nodeType==g.NODE_TEXT)if(f)if(f>=e[0].nodeValue.length)c.setStartAfter(e);else{c.setStartBefore(e);l=0}else c.setStartBefore(e);if(d&&d[0].nodeType==g.NODE_TEXT)if(m)if(m>=d[0].nodeValue.length)c.setEndAfter(d);else{c.setEndAfter(d);i=0}else c.setEndBefore(d);c=new y(c);c.evaluator=function(r){r=r[0]||r;return r.nodeType==(a==h.SHRINK_ELEMENT?g.NODE_ELEMENT:g.NODE_TEXT)};var j;c.guard=function(r,p){r=r[0]||r;if(a==h.SHRINK_ELEMENT&&r.nodeType==g.NODE_TEXT)return s;
if(p&&r==j)return s;if(!p&&r.nodeType==g.NODE_ELEMENT)j=r;return o};if(l)(e=c[a==h.SHRINK_ELEMENT?"lastForward":"next"]())&&this.setStartAt(e,b?h.POSITION_AFTER_START:h.POSITION_BEFORE_START);if(i){c.reset();(c=c[a==h.SHRINK_ELEMENT?"lastBackward":"previous"]())&&this.setEndAt(c,b?h.POSITION_BEFORE_END:h.POSITION_AFTER_END)}return!!(l||i)}},getTouchedStartNode:function(){var a=this.startContainer;if(this.collapsed||a[0].nodeType!=g.NODE_ELEMENT)return a;return a.childNodes[this.startOffset]||a},createBookmark2:function(a){var b=
this.startContainer,c=this.endContainer,e=this.startOffset,d=this.endOffset,f,m;if(!b||!c)return{start:0,end:0};if(a){if(b[0].nodeType==g.NODE_ELEMENT)if((f=new t(b[0].childNodes[e]))&&f[0]&&f[0].nodeType==g.NODE_TEXT&&e>0&&f[0].previousSibling.nodeType==g.NODE_TEXT){b=f;e=0}for(;b[0].nodeType==g.NODE_TEXT&&(m=b._4e_previous())&&m[0].nodeType==g.NODE_TEXT;){b=m;e+=m[0].nodeValue.length}if(!this.collapsed){if(c[0].nodeType==g.NODE_ELEMENT)if((f=new t(c[0].childNodes[d]))&&f[0]&&f[0].nodeType==g.NODE_TEXT&&
d>0&&f[0].previousSibling.nodeType==g.NODE_TEXT){c=f;d=0}for(;c[0].nodeType==g.NODE_TEXT&&(m=c._4e_previous())&&m[0].nodeType==g.NODE_TEXT;){c=m;d+=m[0].nodeValue.length}}}return{start:b._4e_address(a),end:this.collapsed?q:c._4e_address(a),startOffset:e,endOffset:d,normalized:a,is2:o}},createBookmark:function(a){var b,c,e,d,f=this.collapsed;b=new t("<span>",q,this.document);b.attr("_ke_bookmark",1);b.css("display","none");b.html("&nbsp;");if(a){e=x.guid("ke_bm_");b.attr("id",e+"S")}if(!f){c=b._4e_clone();
c.html("&nbsp;");a&&c.attr("id",e+"E");d=this.clone();d.collapse();d.insertNode(c)}d=this.clone();d.collapse(o);d.insertNode(b);if(c){this.setStartAfter(b);this.setEndBefore(c)}else this.moveToPosition(b,h.POSITION_AFTER_END);return{startNode:a?e+"S":b,endNode:a?e+"E":c,serializable:a,collapsed:f}},moveToPosition:function(a,b){this.setStartAt(a,b);this.collapse(o)},trim:function(a,b){var c=this.startContainer,e=this.startOffset,d=this.collapsed;if((!a||d)&&c[0]&&c[0].nodeType==g.NODE_TEXT){if(e)if(e>=
c[0].nodeValue.length){e=c._4e_index()+1;c=c.parent()}else{var f=c._4e_splitText(e);e=c._4e_index()+1;c=c.parent();if(v._4e_equals(this.startContainer,this.endContainer))this.setEnd(f,this.endOffset-this.startOffset);else if(v._4e_equals(c,this.endContainer))this.endOffset+=1}else{e=c._4e_index();c=c.parent()}this.setStart(c,e);if(d){this.collapse(o);return}}c=this.endContainer;e=this.endOffset;if(!(b||d)&&c[0]&&c[0].nodeType==g.NODE_TEXT){if(e){e>=c.nodeValue.length||c._4e_splitText(e);e=c._4e_index()+
1}else e=c._4e_index();c=c.parent();this.setEnd(c,e)}},insertNode:function(a){this.optimizeBookmark();this.trim(s,o);var b=this.startContainer;b[0].insertBefore(a[0]||a,b[0].childNodes[this.startOffset]||null);v._4e_equals(a.parent(),this.endContainer)&&this.endOffset++;this.setStartBefore(a)},moveToBookmark:function(a){if(a.is2){var b=K(this.document,a.start,a.normalized),c=a.startOffset,e=a.end&&K(this.document,a.end,a.normalized);a=a.endOffset;this.setStart(b,c);e?this.setEnd(e,a):this.collapse(o)}else{b=
(c=a.serializable)?x.one("#"+a.startNode,this.document):a.startNode;a=c?x.one("#"+a.endNode,this.document):a.endNode;this.setStartBefore(b);b._4e_remove();if(a&&a[0]){this.setEndBefore(a);a._4e_remove()}else this.collapse(o)}},getCommonAncestor:function(a,b){var c=this.startContainer,e=this.endContainer;c=v._4e_equals(c,e)?a&&c[0].nodeType==g.NODE_ELEMENT&&this.startOffset==this.endOffset-1?new t(c[0].childNodes[this.startOffset]):c:c._4e_commonAncestor(e);return b&&c[0].nodeType==g.NODE_TEXT?c.parent():
c},enlarge:function(a){switch(a){case h.ENLARGE_ELEMENT:if(this.collapsed)break;a=this.getCommonAncestor();var b=new t(this.document.body),c,e,d,f,m,l=s,i,j;i=this.startContainer;j=this.startOffset;if(i[0].nodeType==g.NODE_TEXT){if(j){i=!x.trim(i[0].nodeValue.substring(0,j)).length&&i;l=!!i}if(i)if(!(f=i[0].previousSibling))d=i.parent()}else{if(j)f=i[0].childNodes[j-1]||i[0].lastChild;f||(d=i)}for(;d||f;){if(d&&!f){if(!m&&v._4e_equals(d,a))m=o;if(!b.contains(d))break;if(!l||d.css("display")!="inline"){l=
s;if(m)c=d;else this.setStartBefore(d)}f=d[0].previousSibling}for(;f;){i=s;if(f.nodeType==g.NODE_TEXT){j=f.nodeValue;if(/[^\s\ufeff]/.test(j))f=q;i=/[\s\ufeff]$/.test(j)}else if(f.offsetWidth>0&&!f.getAttribute("_ke_bookmark"))if(l&&E.$removeEmpty[f.nodeName.toLowerCase()]){j=v.text(f);if(/[^\s\ufeff]/.test(j))f=q;else for(var r=f.all||f.getElementsByTagName("*"),p=0,n;n=r[p++];)if(!E.$removeEmpty[n.nodeName.toLowerCase()]){f=q;break}if(f)i=!!j.length}else f=q;if(i)if(l)if(m)c=d;else d&&this.setStartBefore(d);
else l=o;if(f){i=f.previousSibling;if(!d&&!i){d=new t(f);f=q;break}f=i}else d=q}if(d)d=d.parent()}i=this.endContainer;j=this.endOffset;d=f=q;m=l=s;if(i[0].nodeType==g.NODE_TEXT){i=!x.trim(i[0].nodeValue.substring(j)).length&&i;l=!(i&&i[0].nodeValue.length);if(i)if(!(f=i[0].nextSibling))d=i.parent()}else(f=i[0].childNodes[j])||(d=i);for(;d||f;){if(d&&!f){if(!m&&v._4e_equals(d,a))m=o;if(!b.contains(d))break;if(!l||d.css("display")!="inline"){l=s;if(m)e=d;else d&&this.setEndAfter(d)}f=d[0].nextSibling}for(;f;){i=
s;if(f.nodeType==g.NODE_TEXT){j=f.nodeValue;if(/[^\s\ufeff]/.test(j))f=q;i=/^[\s\ufeff]/.test(j)}else if(f.offsetWidth>0&&!f.getAttribute("_ke_bookmark"))if(l&&E.$removeEmpty[f.nodeName.toLowerCase()]){j=v.text(f);if(/[^\s\ufeff]/.test(j))f=q;else{r=f.all||f.getElementsByTagName("*");for(p=0;n=r[p++];)if(!E.$removeEmpty[n.nodeName.toLowerCase()]){f=q;break}}if(f)i=!!j.length}else f=q;if(i)if(l)if(m)e=d;else this.setEndAfter(d);if(f){i=f.nextSibling;if(!d&&!i){d=new t(f);f=q;break}f=i}else d=q}if(d)d=
d.parent()}if(c&&e){a=c.contains(e)?e:c;this.setStartBefore(a);this.setEndAfter(a)}break;case h.ENLARGE_BLOCK_CONTENTS:case h.ENLARGE_LIST_ITEM_CONTENTS:d=new A(this.document);b=new t(this.document.body);d.setStartAt(b,h.POSITION_AFTER_START);d.setEnd(this.startContainer,this.startOffset);d=new y(d);var u,z,D=y.blockBoundary(a==h.ENLARGE_LIST_ITEM_CONTENTS?{br:1}:q),H=function(C){var F=D(C);F||(u=C);return F};c=function(C){var F=H(C);if(!F&&C[0]&&C._4e_name()=="br")z=C;return F};d.guard=H;d=d.lastBackward();
u=u||b;this.setStartAt(u,u._4e_name()!="br"&&(!d&&this.checkStartOfBlock()||d&&u.contains(d))?h.POSITION_AFTER_START:h.POSITION_AFTER_END);d=this.clone();d.collapse();d.setEndAt(b,h.POSITION_BEFORE_END);d=new y(d);d.guard=a==h.ENLARGE_LIST_ITEM_CONTENTS?c:H;u=q;d=d.lastForward();u=u||b;this.setEndAt(u,!d&&this.checkEndOfBlock()||d&&u.contains(d)?h.POSITION_BEFORE_END:h.POSITION_BEFORE_START);z&&this.setEndAfter(z)}},checkStartOfBlock:function(){var a=this.startContainer,b=this.startOffset;if(b&&a[0].nodeType==
g.NODE_TEXT)if(x.trim(a[0].nodeValue.substring(0,b)).length)return s;this.trim();a=new B(this.startContainer);b=this.clone();b.collapse(o);b.setStartAt(a.block||a.blockLimit,h.POSITION_AFTER_START);a=new y(b);a.evaluator=J(o);return a.checkBackward()},checkEndOfBlock:function(){var a=this.endContainer,b=this.endOffset;if(a[0].nodeType==g.NODE_TEXT)if(x.trim(a[0].nodeValue.substring(b)).length)return s;this.trim();a=new B(this.endContainer);b=this.clone();b.collapse(s);b.setEndAt(a.block||a.blockLimit,
h.POSITION_BEFORE_END);a=new y(b);a.evaluator=J(s);return a.checkForward()},deleteContents:function(){this.collapsed||this.execContentsAction(0)},extractContents:function(){var a=this.document.createDocumentFragment();this.collapsed||this.execContentsAction(1,a);return a},checkBoundaryOfElement:function(a,b){var c=this.clone();c[b==h.START?"setStartAt":"setEndAt"](a,b==h.START?h.POSITION_AFTER_START:h.POSITION_BEFORE_END);c=new y(c);c.evaluator=M;return c[b==h.START?"checkBackward":"checkForward"]()},
getBoundaryNodes:function(){var a=this.startContainer,b=this.endContainer,c=this.startOffset,e=this.endOffset,d;if(a[0].nodeType==g.NODE_ELEMENT){d=a[0].childNodes.length;if(d>c)a=new t(a[0].childNodes[c]);else if(d<1)a=a._4e_previousSourceNode();else{for(a=a[0];a.lastChild;)a=a.lastChild;a=new t(a);a=a._4e_nextSourceNode()||a}}if(b[0].nodeType==g.NODE_ELEMENT){d=b[0].childNodes.length;if(d>e)b=(new t(b[0].childNodes[e]))._4e_previousSourceNode(o);else if(d<1)b=b._4e_previousSourceNode();else{for(b=
b[0];b.lastChild;)b=b.lastChild;b=new t(b)}}if(a._4e_position(b)&S.POSITION_FOLLOWING)a=b;return{startNode:a,endNode:b}},fixBlock:function(a,b){var c=this.createBookmark(),e=new t(this.document.createElement(b));this.collapse(a);this.enlarge(h.ENLARGE_BLOCK_CONTENTS);e[0].appendChild(this.extractContents());e._4e_trim();G.ie||e._4e_appendBogus();this.insertNode(e);this.moveToBookmark(c);return e},splitBlock:function(a){var b=new B(this.startContainer),c=new B(this.endContainer),e=b.block,d=c.block,
f=q;if(!b.blockLimit._4e_equals(c.blockLimit))return q;if(a!="br"){if(!e){e=this.fixBlock(o,a);d=(new B(this.endContainer)).block}d||(d=this.fixBlock(s,a))}a=e&&this.checkStartOfBlock();b=d&&this.checkEndOfBlock();this.deleteContents();if(e&&v._4e_equals(e,d))if(b){f=new B(this.startContainer);this.moveToPosition(d,h.POSITION_AFTER_END);d=q}else if(a){f=new B(this.startContainer);this.moveToPosition(e,h.POSITION_BEFORE_START);e=q}else{d=this.splitElement(e);!G.ie&&!x.inArray(e._4e_name(),["ul","ol"])&&
e._4e_appendBogus()}return{previousBlock:e,nextBlock:d,wasStartOfBlock:a,wasEndOfBlock:b,elementPath:f}},splitElement:function(a){if(!this.collapsed)return q;this.setEndAt(a,h.POSITION_BEFORE_END);var b=this.extractContents(),c=a._4e_clone(s);c[0].appendChild(b);c.insertAfter(a);this.moveToPosition(a,h.POSITION_AFTER_END);return c},moveToElementEditablePosition:function(a,b){var c,e=w.XHTML_DTD;if(e.$empty[a._4e_name()])return s;for(;a&&a[0].nodeType==g.NODE_ELEMENT;){if(c=a._4e_isEditable())this.moveToPosition(a,
b?h.POSITION_BEFORE_END:h.POSITION_AFTER_START);else if(e.$inline[a._4e_name()]){this.moveToPosition(a,b?h.POSITION_AFTER_END:h.POSITION_BEFORE_START);return o}if((a=e.$empty[a._4e_name()]?a[b?"_4e_previous":"_4e_next"](I):a[b?"_4e_last":"_4e_first"](I))&&a[0].nodeType==g.NODE_TEXT){this.moveToPosition(a,b?h.POSITION_AFTER_END:h.POSITION_BEFORE_START);return o}}return c},selectNodeContents:function(a){this.setStart(a,0);this.setEnd(a,a[0].nodeType==g.NODE_TEXT?a[0].nodeValue.length:a[0].childNodes.length)}});
var P={abbr:1,acronym:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1},N=new y.whitespaces,O=new y.bookmark;w.Range=A;w.Range=A;var k=A.prototype;w.Utils.extern(k,{updateCollapsed:k.updateCollapsed,optimize:k.optimize,setStartAfter:k.setStartAfter,setEndAfter:k.setEndAfter,setStartBefore:k.setStartBefore,setEndBefore:k.setEndBefore,optimizeBookmark:k.optimizeBookmark,setStart:k.setStart,setEnd:k.setEnd,
setStartAt:k.setStartAt,setEndAt:k.setEndAt,execContentsAction:k.execContentsAction,collapse:k.collapse,clone:k.clone,getEnclosedNode:k.getEnclosedNode,shrink:k.shrink,getTouchedStartNode:k.getTouchedStartNode,createBookmark2:k.createBookmark2,createBookmark:k.createBookmark,moveToPosition:k.moveToPosition,trim:k.trim,insertNode:k.insertNode,moveToBookmark:k.moveToBookmark,getCommonAncestor:k.getCommonAncestor,enlarge:k.enlarge,checkStartOfBlock:k.checkStartOfBlock,checkEndOfBlock:k.checkEndOfBlock,
deleteContents:k.deleteContents,extractContents:k.extractContents,checkBoundaryOfElement:k.checkBoundaryOfElement,getBoundaryNodes:k.getBoundaryNodes,fixBlock:k.fixBlock,splitBlock:k.splitBlock,splitElement:k.splitElement,moveToElementEditablePosition:k.moveToElementEditablePosition,selectNodeContents:k.selectNodeContents})});
