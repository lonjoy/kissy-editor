KISSY.Editor.add("range",function(w){function C(a){this.endOffset=this.endContainer=this.startOffset=this.startContainer=p;this.collapsed=n;this.document=a}function L(a){var b=a[0].nodeType!=g.NODE_TEXT&&a._4e_name()in D.$removeEmpty,c=!v.trim(a[0].nodeValue);a=!!a.parent().attr("_ke_bookmark");return b||c||a}function F(a){return!M(a)&&!N(a)}function I(a){var b=s,c=x.bookmark(n);return function(e){if(c(e))return n;if(e[0].nodeType==g.NODE_TEXT){if(v.trim(e[0].nodeValue).length)return s}else if(e[0].nodeType==
g.NODE_ELEMENT)if(!O[e._4e_name()])if(!a&&!G.ie&&e._4e_name()=="br"&&!b)b=n;else return s;return n}}function P(a,b){function c(e){return e&&e.nodeName=="span"&&e.getAttribute("_ke_bookmark")}return function(e){var d,f;d=e&&!e.nodeName&&(f=e.parentNode)&&c(f);d=a?d:d||c(e);return b^d}}function Q(a){return function(b){b=(b=b[0]||b)&&b.nodeType==g.NODE_TEXT&&!v.trim(b.nodeValue);return a^b}}w.RANGE={POSITION_AFTER_START:1,POSITION_BEFORE_END:2,POSITION_BEFORE_START:3,POSITION_AFTER_END:4,ENLARGE_ELEMENT:1,
ENLARGE_BLOCK_CONTENTS:2,ENLARGE_LIST_ITEM_CONTENTS:3,START:1,END:2,SHRINK_ELEMENT:1,SHRINK_TEXT:2};w.RANGE=w.RANGE;var n=true,s=false,p=null,v=KISSY,g=w.NODE,h=w.RANGE,R=w.POSITION,x=w.Walker,u=v.DOM,J=w.Utils.getByAddress,G=v.UA,D=w.XHTML_DTD,z=w.ElementPath,r=v.Node,K={area:1,base:1,br:1,col:1,hr:1,img:1,input:1,link:1,meta:1,param:1};C.prototype.toString=function(){var a=[];a.push((this.startContainer[0].id||this.startContainer[0].nodeName)+":"+this.startOffset);a.push((this.endContainer[0].id||
this.endContainer[0].nodeName)+":"+this.endOffset);return a.join("<br/>")};v.augment(C,{updateCollapsed:function(){this.collapsed=this.startContainer&&this.endContainer&&u._4e_equals(this.startContainer,this.endContainer)&&this.startOffset==this.endOffset},optimize:function(){var a=this.startContainer,b=this.startOffset;if(a[0].nodeType!=g.NODE_ELEMENT)if(b)b>=a[0].nodeValue.length&&this.setStartAfter(a);else this.setStartBefore(a);a=this.endContainer;b=this.endOffset;if(a[0].nodeType!=g.NODE_ELEMENT)if(b)b>=
a[0].nodeValue.length&&this.setEndAfter(a);else this.setEndBefore(a)},setStartAfter:function(a){this.setStart(a.parent(),a._4e_index()+1)},setStartBefore:function(a){this.setStart(a.parent(),a._4e_index())},setEndAfter:function(a){this.setEnd(a.parent(),a._4e_index()+1)},setEndBefore:function(a){this.setEnd(a.parent(),a._4e_index())},optimizeBookmark:function(){var a=this.startContainer,b=this.endContainer;a&&a._4e_name()=="span"&&a.attr("_ke_bookmark")&&this.setStartAt(a,h.POSITION_BEFORE_START);
b&&b._4e_name()=="span"&&b.attr("_ke_bookmark")&&this.setEndAt(b,h.POSITION_AFTER_END)},setStart:function(a,b){if(a[0].nodeType==g.NODE_ELEMENT&&K[a._4e_name()]){a=a.parent();b=a._4e_index()}this.startContainer=a;this.startOffset=b;if(!this.endContainer){this.endContainer=a;this.endOffset=b}this.updateCollapsed()},setEnd:function(a,b){if(a[0].nodeType==g.NODE_ELEMENT&&K[a._4e_name()]){a=a.parent();b=a._4e_index()+1}this.endContainer=a;this.endOffset=b;if(!this.startContainer){this.startContainer=
a;this.startOffset=b}this.updateCollapsed()},setStartAt:function(a,b){switch(b){case h.POSITION_AFTER_START:this.setStart(a,0);break;case h.POSITION_BEFORE_END:a[0].nodeType==g.NODE_TEXT?this.setStart(a,a[0].nodeValue.length):this.setStart(a,a[0].childNodes.length);break;case h.POSITION_BEFORE_START:this.setStartBefore(a);break;case h.POSITION_AFTER_END:this.setStartAfter(a)}this.updateCollapsed()},setEndAt:function(a,b){switch(b){case h.POSITION_AFTER_START:this.setEnd(a,0);break;case h.POSITION_BEFORE_END:a[0].nodeType==
g.NODE_TEXT?this.setEnd(a,a[0].nodeValue.length):this.setEnd(a,a[0].childNodes.length);break;case h.POSITION_BEFORE_START:this.setEndBefore(a);break;case h.POSITION_AFTER_END:this.setEndAfter(a)}this.updateCollapsed()},execContentsAction:function(a,b){var c=this.startContainer,e=this.endContainer,d=this.startOffset,f=this.endOffset,k,l=this.document,i;this.optimizeBookmark();if(e[0].nodeType==g.NODE_TEXT)e=e._4e_splitText(f);else if(e[0].childNodes.length>0)if(f>=e[0].childNodes.length){e=new r(e[0].appendChild(l.createTextNode("")));
i=n}else e=new r(e[0].childNodes[f]);if(c[0].nodeType==g.NODE_TEXT){c._4e_splitText(d);if(c._4e_equals(e))e=new r(c[0].nextSibling)}else if(d)if(d>=c[0].childNodes.length){k=new r(l.createTextNode(""));c.append(k);c=k;k=n}else c=new r(c[0].childNodes[d].previousSibling);else{k=new r(l.createTextNode(""));c.prepend(k);c=k;k=n}d=c._4e_parents();f=e._4e_parents();var j,q,o;for(j=0;j<d.length;j++){q=d[j];o=f[j];if(!q._4e_equals(o))break}l=b;for(var m,t,y,B=j;B<d.length;B++){m=d[B];t=l&&!m._4e_equals(c)?
l.appendChild(m._4e_clone()[0]):null;for(m=m[0].nextSibling;m;){if(u._4e_equals(f[B],m)||u._4e_equals(e,m))break;y=m.nextSibling;if(a==2)l.appendChild(m.cloneNode(n));else{u._4e_remove(m);a==1&&l.appendChild(m)}m=y}if(t)l=t}l=b;for(j=j;j<f.length;j++){m=f[j];t=l&&a>0&&!m._4e_equals(e)?l.appendChild(m._4e_clone()[0]):null;if(!d[j]||!m.parent()._4e_equals(d[j].parent()))for(m=m[0].previousSibling;m;){if(u._4e_equals(d[j],m)||u._4e_equals(c,m))break;y=m.previousSibling;if(a==2)l.insertBefore(m.cloneNode(n),
l.firstChild);else{u._4e_remove(m);a==1&&l.insertBefore(m,l.firstChild)}m=y}if(t)l=t}if(a==2){o=this.startContainer[0];if(o.nodeType==g.NODE_TEXT&&o.nextSibling&&o.nextSibling.nodeType==g.NODE_TEXT){o.data+=o.nextSibling.data;o.parentNode.removeChild(o.nextSibling)}o=this.endContainer[0];if(o.nodeType==g.NODE_TEXT&&o.nextSibling&&o.nextSibling.nodeType==g.NODE_TEXT){o.data+=o.nextSibling.data;o.parentNode.removeChild(o.nextSibling)}}else{if(q&&o&&(!c.parent()._4e_equals(q.parent())||!e.parent()._4e_equals(o.parent()))){q=
o._4e_index();k&&o.parent()._4e_equals(c.parent())&&q--;this.setStart(o.parent(),q)}this.collapse(n)}k&&c._4e_remove();i&&e[0].parentNode&&e._4e_remove()},collapse:function(a){if(a){this.endContainer=this.startContainer;this.endOffset=this.startOffset}else{this.startContainer=this.endContainer;this.startOffset=this.endOffset}this.collapsed=n},clone:function(){var a=new C(this.document);a.startContainer=this.startContainer;a.startOffset=this.startOffset;a.endContainer=this.endContainer;a.endOffset=
this.endOffset;a.collapsed=this.collapsed;return a},getEnclosedNode:function(){var a=this.clone();a.optimize();if(a.startContainer[0].nodeType!=g.NODE_ELEMENT||a.endContainer[0].nodeType!=g.NODE_ELEMENT)return p;var b=new w.Walker(a),c=P(n,undefined),e=Q(n);a.evaluator=function(d){return e(d)&&c(d)};a=b.next();b.reset();b=b.previous();return a&&a._4e_equals(b)?a:p},shrink:function(a,b){if(!this.collapsed){a=a||h.SHRINK_TEXT;var c=this.clone(),e=this.startContainer,d=this.endContainer,f=this.startOffset,
k=this.endOffset,l=1,i=1;if(e&&e[0].nodeType==g.NODE_TEXT)if(f)if(f>=e[0].nodeValue.length)c.setStartAfter(e);else{c.setStartBefore(e);l=0}else c.setStartBefore(e);if(d&&d[0].nodeType==g.NODE_TEXT)if(k)if(k>=d[0].nodeValue.length)c.setEndAfter(d);else{c.setEndAfter(d);i=0}else c.setEndBefore(d);c=new x(c);c.evaluator=function(q){q=q[0]||q;return q.nodeType==(a==h.SHRINK_ELEMENT?g.NODE_ELEMENT:g.NODE_TEXT)};var j;c.guard=function(q,o){q=q[0]||q;if(a==h.SHRINK_ELEMENT&&q.nodeType==g.NODE_TEXT)return s;
if(o&&q==j)return s;if(!o&&q.nodeType==g.NODE_ELEMENT)j=q;return n};if(l)(e=c[a==h.SHRINK_ELEMENT?"lastForward":"next"]())&&this.setStartAt(e,b?h.POSITION_AFTER_START:h.POSITION_BEFORE_START);if(i){c.reset();(c=c[a==h.SHRINK_ELEMENT?"lastBackward":"previous"]())&&this.setEndAt(c,b?h.POSITION_BEFORE_END:h.POSITION_AFTER_END)}return!!(l||i)}},createBookmark2:function(a){var b=this.startContainer,c=this.endContainer,e=this.startOffset,d=this.endOffset,f,k;if(!b||!c)return{start:0,end:0};if(a){if(b[0].nodeType==
g.NODE_ELEMENT)if((f=new r(b[0].childNodes[e]))&&f[0]&&f[0].nodeType==g.NODE_TEXT&&e>0&&f[0].previousSibling.nodeType==g.NODE_TEXT){b=f;e=0}for(;b[0].nodeType==g.NODE_TEXT&&(k=b._4e_previous())&&k[0].nodeType==g.NODE_TEXT;){b=k;e+=k[0].nodeValue.length}if(!this.collapsed){if(c[0].nodeType==g.NODE_ELEMENT)if((f=new r(c[0].childNodes[d]))&&f[0]&&f[0].nodeType==g.NODE_TEXT&&d>0&&f[0].previousSibling.nodeType==g.NODE_TEXT){c=f;d=0}for(;c[0].nodeType==g.NODE_TEXT&&(k=c._4e_previous())&&k[0].nodeType==
g.NODE_TEXT;){c=k;d+=k[0].nodeValue.length}}}return{start:b._4e_address(a),end:this.collapsed?p:c._4e_address(a),startOffset:e,endOffset:d,normalized:a,is2:n}},createBookmark:function(a){var b,c,e,d,f=this.collapsed;b=new r("<span>",p,this.document);b.attr("_ke_bookmark",1);b.css("display","none");b.html("&nbsp;");if(a){e=v.guid("ke_bm_");b.attr("id",e+"S")}if(!f){c=b._4e_clone();c.html("&nbsp;");a&&c.attr("id",e+"E");d=this.clone();d.collapse();d.insertNode(c)}d=this.clone();d.collapse(n);d.insertNode(b);
if(c){this.setStartAfter(b);this.setEndBefore(c)}else this.moveToPosition(b,h.POSITION_AFTER_END);return{startNode:a?e+"S":b,endNode:a?e+"E":c,serializable:a,collapsed:f}},moveToPosition:function(a,b){this.setStartAt(a,b);this.collapse(n)},trim:function(a,b){var c=this.startContainer,e=this.startOffset,d=this.collapsed;if((!a||d)&&c[0]&&c[0].nodeType==g.NODE_TEXT){if(e)if(e>=c[0].nodeValue.length){e=c._4e_index()+1;c=c.parent()}else{var f=c._4e_splitText(e);e=c._4e_index()+1;c=c.parent();if(u._4e_equals(this.startContainer,
this.endContainer))this.setEnd(f,this.endOffset-this.startOffset);else if(u._4e_equals(c,this.endContainer))this.endOffset+=1}else{e=c._4e_index();c=c.parent()}this.setStart(c,e);if(d){this.collapse(n);return}}c=this.endContainer;e=this.endOffset;if(!(b||d)&&c[0]&&c[0].nodeType==g.NODE_TEXT){if(e){e>=c.nodeValue.length||c._4e_splitText(e);e=c._4e_index()+1}else e=c._4e_index();c=c.parent();this.setEnd(c,e)}},insertNode:function(a){this.optimizeBookmark();this.trim(s,n);var b=this.startContainer;b[0].insertBefore(a[0]||
a,b[0].childNodes[this.startOffset]||null);u._4e_equals(a.parent(),this.endContainer)&&this.endOffset++;this.setStartBefore(a)},moveToBookmark:function(a){if(a.is2){var b=J(this.document,a.start,a.normalized),c=a.startOffset,e=a.end&&J(this.document,a.end,a.normalized);a=a.endOffset;this.setStart(b,c);e?this.setEnd(e,a):this.collapse(n)}else{b=(c=a.serializable)?v.one("#"+a.startNode,this.document):a.startNode;a=c?v.one("#"+a.endNode,this.document):a.endNode;this.setStartBefore(b);b._4e_remove();
if(a&&a[0]){this.setEndBefore(a);a._4e_remove()}else this.collapse(n)}},getCommonAncestor:function(a,b){var c=this.startContainer,e=this.endContainer;c=u._4e_equals(c,e)?a&&c[0].nodeType==g.NODE_ELEMENT&&this.startOffset==this.endOffset-1?new r(c[0].childNodes[this.startOffset]):c:c._4e_commonAncestor(e);return b&&c[0].nodeType==g.NODE_TEXT?c.parent():c},enlarge:function(a){switch(a){case h.ENLARGE_ELEMENT:if(this.collapsed)break;a=this.getCommonAncestor();var b=new r(this.document.body),c,e,d,f,
k,l=s,i,j;i=this.startContainer;j=this.startOffset;if(i[0].nodeType==g.NODE_TEXT){if(j){i=!v.trim(i[0].nodeValue.substring(0,j)).length&&i;l=!!i}if(i)if(!(f=i[0].previousSibling))d=i.parent()}else{if(j)f=i[0].childNodes[j-1]||i[0].lastChild;f||(d=i)}for(;d||f;){if(d&&!f){if(!k&&u._4e_equals(d,a))k=n;if(!b.contains(d))break;if(!l||d.css("display")!="inline"){l=s;if(k)c=d;else this.setStartBefore(d)}f=d[0].previousSibling}for(;f;){i=s;if(f.nodeType==g.NODE_TEXT){j=f.nodeValue;if(/[^\s\ufeff]/.test(j))f=
p;i=/[\s\ufeff]$/.test(j)}else if(f.offsetWidth>0&&!f.getAttribute("_ke_bookmark"))if(l&&D.$removeEmpty[f.nodeName.toLowerCase()]){j=u.text(f);if(/[^\s\ufeff]/.test(j))f=p;else for(var q=f.all||f.getElementsByTagName("*"),o=0,m;m=q[o++];)if(!D.$removeEmpty[m.nodeName.toLowerCase()]){f=p;break}if(f)i=!!j.length}else f=p;if(i)if(l)if(k)c=d;else d&&this.setStartBefore(d);else l=n;if(f){i=f.previousSibling;if(!d&&!i){d=new r(f);f=p;break}f=i}else d=p}if(d)d=d.parent()}i=this.endContainer;j=this.endOffset;
d=f=p;k=l=s;if(i[0].nodeType==g.NODE_TEXT){i=!v.trim(i[0].nodeValue.substring(j)).length&&i;l=!(i&&i[0].nodeValue.length);if(i)if(!(f=i[0].nextSibling))d=i.parent()}else(f=i[0].childNodes[j])||(d=i);for(;d||f;){if(d&&!f){if(!k&&u._4e_equals(d,a))k=n;if(!b.contains(d))break;if(!l||d.css("display")!="inline"){l=s;if(k)e=d;else d&&this.setEndAfter(d)}f=d[0].nextSibling}for(;f;){i=s;if(f.nodeType==g.NODE_TEXT){j=f.nodeValue;if(/[^\s\ufeff]/.test(j))f=p;i=/^[\s\ufeff]/.test(j)}else if(f.offsetWidth>0&&
!f.getAttribute("_ke_bookmark"))if(l&&D.$removeEmpty[f.nodeName.toLowerCase()]){j=u.text(f);if(/[^\s\ufeff]/.test(j))f=p;else{q=f.all||f.getElementsByTagName("*");for(o=0;m=q[o++];)if(!D.$removeEmpty[m.nodeName.toLowerCase()]){f=p;break}}if(f)i=!!j.length}else f=p;if(i)if(l)if(k)e=d;else this.setEndAfter(d);if(f){i=f.nextSibling;if(!d&&!i){d=new r(f);f=p;break}f=i}else d=p}if(d)d=d.parent()}if(c&&e){a=c.contains(e)?e:c;this.setStartBefore(a);this.setEndAfter(a)}break;case h.ENLARGE_BLOCK_CONTENTS:case h.ENLARGE_LIST_ITEM_CONTENTS:d=
new C(this.document);b=new r(this.document.body);d.setStartAt(b,h.POSITION_AFTER_START);d.setEnd(this.startContainer,this.startOffset);d=new x(d);var t,y,B=x.blockBoundary(a==h.ENLARGE_LIST_ITEM_CONTENTS?{br:1}:p),H=function(A){var E=B(A);E||(t=A);return E};c=function(A){var E=H(A);if(!E&&A[0]&&A._4e_name()=="br")y=A;return E};d.guard=H;d=d.lastBackward();t=t||b;this.setStartAt(t,t._4e_name()!="br"&&(!d&&this.checkStartOfBlock()||d&&t.contains(d))?h.POSITION_AFTER_START:h.POSITION_AFTER_END);d=this.clone();
d.collapse();d.setEndAt(b,h.POSITION_BEFORE_END);d=new x(d);d.guard=a==h.ENLARGE_LIST_ITEM_CONTENTS?c:H;t=p;d=d.lastForward();t=t||b;this.setEndAt(t,!d&&this.checkEndOfBlock()||d&&t.contains(d)?h.POSITION_BEFORE_END:h.POSITION_BEFORE_START);y&&this.setEndAfter(y)}},checkStartOfBlock:function(){var a=this.startContainer,b=this.startOffset;if(b&&a[0].nodeType==g.NODE_TEXT)if(v.trim(a[0].nodeValue.substring(0,b)).length)return s;this.trim();a=new z(this.startContainer);b=this.clone();b.collapse(n);b.setStartAt(a.block||
a.blockLimit,h.POSITION_AFTER_START);a=new x(b);a.evaluator=I(n);return a.checkBackward()},checkEndOfBlock:function(){var a=this.endContainer,b=this.endOffset;if(a[0].nodeType==g.NODE_TEXT)if(v.trim(a[0].nodeValue.substring(b)).length)return s;this.trim();a=new z(this.endContainer);b=this.clone();b.collapse(s);b.setEndAt(a.block||a.blockLimit,h.POSITION_BEFORE_END);a=new x(b);a.evaluator=I(s);return a.checkForward()},deleteContents:function(){this.collapsed||this.execContentsAction(0)},extractContents:function(){var a=
this.document.createDocumentFragment();this.collapsed||this.execContentsAction(1,a);return a},checkBoundaryOfElement:function(a,b){var c=this.clone();c[b==h.START?"setStartAt":"setEndAt"](a,b==h.START?h.POSITION_AFTER_START:h.POSITION_BEFORE_END);c=new x(c);c.evaluator=L;return c[b==h.START?"checkBackward":"checkForward"]()},getBoundaryNodes:function(){var a=this.startContainer,b=this.endContainer,c=this.startOffset,e=this.endOffset,d;if(a[0].nodeType==g.NODE_ELEMENT){d=a[0].childNodes.length;if(d>
c)a=new r(a[0].childNodes[c]);else if(d<1)a=a._4e_previousSourceNode();else{for(a=a[0];a.lastChild;)a=a.lastChild;a=new r(a);a=a._4e_nextSourceNode()||a}}if(b[0].nodeType==g.NODE_ELEMENT){d=b[0].childNodes.length;if(d>e)b=(new r(b[0].childNodes[e]))._4e_previousSourceNode(n);else if(d<1)b=b._4e_previousSourceNode();else{for(b=b[0];b.lastChild;)b=b.lastChild;b=new r(b)}}if(a._4e_position(b)&R.POSITION_FOLLOWING)a=b;return{startNode:a,endNode:b}},fixBlock:function(a,b){var c=this.createBookmark(),e=
new r(this.document.createElement(b));this.collapse(a);this.enlarge(h.ENLARGE_BLOCK_CONTENTS);e[0].appendChild(this.extractContents());e._4e_trim();G.ie||e._4e_appendBogus();for(var d=e[0].childNodes,f=0;f<d.length;f++){var k=d[f];k.nodeType==8&&this.insertNode(new r(k))}this.insertNode(e);this.moveToBookmark(c);return e},splitBlock:function(a){var b=new z(this.startContainer),c=new z(this.endContainer),e=b.block,d=c.block,f=p;if(!b.blockLimit._4e_equals(c.blockLimit))return p;if(a!="br"){if(!e){e=
this.fixBlock(n,a);d=(new z(this.endContainer)).block}d||(d=this.fixBlock(s,a))}a=e&&this.checkStartOfBlock();b=d&&this.checkEndOfBlock();this.deleteContents();if(e&&u._4e_equals(e,d))if(b){f=new z(this.startContainer);this.moveToPosition(d,h.POSITION_AFTER_END);d=p}else if(a){f=new z(this.startContainer);this.moveToPosition(e,h.POSITION_BEFORE_START);e=p}else{d=this.splitElement(e);!G.ie&&!v.inArray(e._4e_name(),["ul","ol"])&&e._4e_appendBogus()}return{previousBlock:e,nextBlock:d,wasStartOfBlock:a,
wasEndOfBlock:b,elementPath:f}},splitElement:function(a){if(!this.collapsed)return p;this.setEndAt(a,h.POSITION_BEFORE_END);var b=this.extractContents(),c=a._4e_clone(s);c[0].appendChild(b);c.insertAfter(a);this.moveToPosition(a,h.POSITION_AFTER_END);return c},moveToElementEditablePosition:function(a,b){var c,e=w.XHTML_DTD;if(e.$empty[a._4e_name()])return s;for(;a&&a[0].nodeType==g.NODE_ELEMENT;){if(c=a._4e_isEditable())this.moveToPosition(a,b?h.POSITION_BEFORE_END:h.POSITION_AFTER_START);else if(e.$inline[a._4e_name()]){this.moveToPosition(a,
b?h.POSITION_AFTER_END:h.POSITION_BEFORE_START);return n}if((a=e.$empty[a._4e_name()]?a[b?"_4e_previous":"_4e_next"](F):b?a._4e_last(F):a._4e_first(F))&&a[0].nodeType==g.NODE_TEXT){this.moveToPosition(a,b?h.POSITION_AFTER_END:h.POSITION_BEFORE_START);return n}}return c},selectNodeContents:function(a){this.setStart(a,0);this.setEnd(a,a[0].nodeType==g.NODE_TEXT?a[0].nodeValue.length:a[0].childNodes.length)}});var O={abbr:1,acronym:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,
kbd:1,q:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1},M=new x.whitespaces,N=new x.bookmark;w.Range=C});
