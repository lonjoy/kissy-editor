KISSY.Editor.add("styles",function(r){function U(b){return!b.attr("_ke_bookmark")}function K(b,f){for(var a in b)if(b.hasOwnProperty(a))if(y.isString(b[a]))b[a]=b[a].replace(V,function(d,c){return f[c]});else K(b[a],f)}function D(b,f){if(f){b=y.clone(b);K(b,f)}var a=this.element=this.element=(b.element||"*").toLowerCase();this.type=this.type=a=="#"||W[a]?u.STYLE_BLOCK:L[a]?u.STYLE_OBJECT:u.STYLE_INLINE;this._={definition:b}}function M(b,f){var a=f?this.removeFromRange:this.applyToRange;b.body.focus();
for(var d=new X(b),c=d.getRanges(),g=0;g<c.length;g++)a.call(this,c[g]);d.selectRanges(c)}function F(b,f,a){var d=b.element;if(d=="*")d="span";f=new z(f.createElement(d));a&&a._4e_copyAttributes(f);a=b._.definition;b=a.attributes;a=D.getStyleText(a);if(b)for(var c in b)b.hasOwnProperty(c)&&f.attr(c,b[c]);if(a)f[0].style.cssText=a;return f}function Y(b){var f=b.createBookmark(m),a=b.createIterator();a.enforceRealBlocks=m;a.enlargeBr=m;for(var d,c=b.document;d=a.getNextParagraph();){var g=F(this,c,
d);d=d;var e=g;g=e._4e_name=="pre";var h=d._4e_name=="pre",i=!g&&h;if(g&&!h){h=d;e=e;i=h.html();i=B(i,/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g,"");i=i.replace(/[ \t\r\n]*(<br[^>]*>)[ \t\r\n]*/gi,"$1");i=i.replace(/([ \t\n\r]+|&nbsp;)/g," ");i=i.replace(/<br\b[^>]*>/gi,"\n");if(G.ie){h=h[0].ownerDocument.createElement("div");h.appendChild(e[0]);e[0].outerHTML="<pre>"+i+"</pre>";e=new z(h.firstChild);e._4e_remove()}else e.html(i);e=e}else if(i)e=Z($(d),e);else d._4e_moveChildren(e);d[0].parentNode.replaceChild(e[0],
d[0]);if(g){d=e;g=void 0;if((g=d._4e_previousSourceNode(m,A.NODE_ELEMENT))&&g._4e_name()=="pre"){e=B(g.html(),/\n$/,"")+"\n\n"+B(d.html(),/^\n/,"");if(G.ie)d[0].outerHTML="<pre>"+e+"</pre>";else d.html(e);g._4e_remove()}}}b.moveToBookmark(f)}function B(b,f,a){var d="",c="";b=b.replace(/(^<span[^>]+_ke_bookmark.*?\/span>)|(<span[^>]+_ke_bookmark.*?\/span>$)/gi,function(g,e,h){e&&(d=e);h&&(c=h);return""});return d+b.replace(f,a)+c}function $(b){var f=[];B(b._4e_outerHtml(),/(\S\s*)\n(?:\s|(<span[^>]+_ck_bookmark.*?\/span>))*\n(?!$)/gi,
function(a,d,c){return d+"</pre>"+c+"<pre>"}).replace(/<pre\b.*?>([\s\S]*?)<\/pre>/gi,function(a,d){f.push(d)});return f}function Z(b,f){for(var a=f[0].ownerDocument.createDocumentFragment(),d=0;d<b.length;d++){var c=b[d];c=c.replace(/(\r\n|\r)/g,"\n");c=B(c,/^[ \t]*\n/,"");c=B(c,/\n$/,"");c=B(c,/^[ \t]+|[ \t]+$/g,function(e,h){return e.length==1?"&nbsp;":h?" "+Array(e.length).join("&nbsp;"):Array(e.length).join("&nbsp;")+" "});c=c.replace(/\n/g,"<br>");c=c.replace(/[ \t]{2,}/g,function(e){return Array(e.length).join("&nbsp;")+
" "});var g=f._4e_clone();g.html(c);a.appendChild(g[0])}return a}function aa(b){var f=b.document;if(b.collapsed){f=F(this,f,undefined);b.insertNode(f);b.moveToPosition(f,C.POSITION_BEFORE_END)}else{var a=this.element,d=this._.definition,c,g=r.XHTML_DTD[a];if(!g){c=m;g=r.XHTML_DTD.span}var e=b.createBookmark();b.enlarge(C.ENLARGE_ELEMENT);b.trim();var h=b.createBookmark(),i=h.startNode;h=h.endNode;for(var k=i,q;k&&k[0];){var j=w;if(x._4e_equals(k,h)){k=v;j=m}else{var n=k[0].nodeType,o=n==A.NODE_ELEMENT?
k._4e_name():v;if(o&&k.attr("_ke_bookmark")){k=k._4e_nextSourceNode(m);continue}if(!o||g[o]&&(k._4e_position(h)|p.POSITION_PRECEDING|p.POSITION_IDENTICAL|p.POSITION_IS_CONTAINED)==p.POSITION_PRECEDING+p.POSITION_IDENTICAL+p.POSITION_IS_CONTAINED&&(!d.childRule||d.childRule(k))){var l=k.parent();if(l&&a=="a"&&l._4e_name()==a){n=F(this,f,undefined);l._4e_moveChildren(n);l[0].parentNode.replaceChild(n[0],l[0]);n._4e_mergeSiblings()}else if(l&&l[0]&&((r.XHTML_DTD[l._4e_name()]||r.XHTML_DTD.span)[a]||
c)&&(!d.parentRule||d.parentRule(l))){if(!q&&(!o||!r.XHTML_DTD.$removeEmpty[o]||(k._4e_position(h)|p.POSITION_PRECEDING|p.POSITION_IDENTICAL|p.POSITION_IS_CONTAINED)==p.POSITION_PRECEDING+p.POSITION_IDENTICAL+p.POSITION_IS_CONTAINED)){q=new ba(f);q.setStartBefore(k)}if(n==A.NODE_TEXT||n==A.NODE_ELEMENT&&!k[0].childNodes.length){l=k;for(n=null;(j=!l._4e_next(U))&&(n=l.parent())&&g[n._4e_name()]&&(n._4e_position(i)|p.POSITION_FOLLOWING|p.POSITION_IDENTICAL|p.POSITION_IS_CONTAINED)==p.POSITION_FOLLOWING+
p.POSITION_IDENTICAL+p.POSITION_IS_CONTAINED&&(!d.childRule||d.childRule(n));)l=n;q.setEndAfter(l)}}else j=m}else j=m;k=k._4e_nextSourceNode()}if(j&&q&&!q.collapsed){j=F(this,f,undefined);l=q.getCommonAncestor();n={styles:{},attrs:{},blockedStyles:{},blockedAttrs:{}};var s;o=null;for(var t;j&&l&&j[0]&&l[0];){if(l._4e_name()==a){for(s in d.attributes)if(d.attributes.hasOwnProperty(s))if(!(n.blockedAttrs[s]||!(t=l.attr(o))))if(j.attr(s)==t)j.removeAttr(s);else n.blockedAttrs[s]=1;for(o in d.styles)if(d.styles.hasOwnProperty(o))if(!(n.blockedStyles[o]||
!(t=l._4e_style(o))))if(j._4e_style(o)==t)j._4e_style(o,"");else n.blockedStyles[o]=1;if(!j._4e_hasAttributes()){j=v;break}}l=l.parent()}if(j){j[0].appendChild(q.extractContents());N(this,j);q.insertNode(j);j._4e_mergeSiblings();G.ie||j[0].normalize()}else{j=new z(f.createElement("span"));j[0].appendChild(q.extractContents());q.insertNode(j);N(this,j);j._4e_remove(true)}q=v}}i._4e_remove();h._4e_remove();b.moveToBookmark(e);b.shrink(C.SHRINK_TEXT)}}function ca(b){b.enlarge(C.ENLARGE_ELEMENT);var f=
b.createBookmark(),a=f.startNode;if(b.collapsed){for(var d=new H(a.parent()),c,g=0,e;g<d.elements.length&&(e=d.elements[g]);g++){if(e==d.block||e==d.blockLimit)break;if(this.checkElementRemovable(e)){var h=b.checkBoundaryOfElement(e,C.END),i=!h&&b.checkBoundaryOfElement(e,C.START);if(i||h){c=e;c.match=i?"start":"end"}else{e._4e_mergeSiblings();if(e._4e_name()!=this.element){h=E(this);I(e,h[e._4e_name()]||h["*"])}else J(this,e)}}}if(c&&c[0]){e=a;for(g=0;;g++){h=d.elements[g];if(x._4e_equals(h,c))break;
else if(h.match)continue;else h=h._4e_clone();h[0].appendChild(e[0]);e=h}x[c.match=="start"?"insertBefore":"insertAfter"](x._4e_unwrap(e),x._4e_unwrap(c))}}else{var k=f.endNode,q=this;d=function(){for(var j=new H(a.parent()),n=new H(k.parent()),o=v,l=v,s=0;s<j.elements.length;s++){var t=j.elements[s];if(t==j.block||t==j.blockLimit)break;if(q.checkElementRemovable(t))o=t}for(s=0;s<n.elements.length;s++){t=n.elements[s];if(t==n.block||t==n.blockLimit)break;if(q.checkElementRemovable(t))l=t}l&&k._4e_breakParent(l);
o&&a._4e_breakParent(o)};d();for(c=new z(a[0].nextSibling);c[0]!==k[0];){g=c._4e_nextSourceNode();if(c[0]&&c[0].nodeType==A.NODE_ELEMENT&&this.checkElementRemovable(c)){if(c._4e_name()==this.element)J(this,c);else{e=E(this);I(c,e[c._4e_name()]||e["*"])}if(g[0].nodeType==A.NODE_ELEMENT&&g.contains(a)){d();g=new z(a[0].nextSibling)}}c=g}}b.moveToBookmark(f)}function O(b){b=String(b);var f={};b.replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(a,d,c){f[d]=c});return f}function P(b,
f){var a="";if(f!==w){a=document.createElement("span");a.style.cssText=b;a=a.style.cssText||""}else a=b;return a.replace(/\s*([;:])\s*/,"$1").replace(/([^\s;])$/,"$1;").replace(/,\s+/g,",").toLowerCase()}function E(b){if(b._.overrides)return b._.overrides;var f=b._.overrides={},a=b._.definition.overrides;if(a){y.isArray(a)||(a=[a]);for(var d=0;d<a.length;d++){var c=a[d],g,e,h;if(typeof c=="string")g=c.toLowerCase();else{g=c.element?c.element.toLowerCase():b.element;e=c.attributes;h=c.styles}c=f[g]||
(f[g]={});if(e){g=c.attributes=c.attributes||[];for(var i in e)e.hasOwnProperty(i)&&g.push([i.toLowerCase(),e[i]])}if(h){c=c.styles=c.styles||[];for(var k in h)h.hasOwnProperty(k)&&c.push([k.toLowerCase(),h[k]])}}}return f}function J(b,f){var a=b._.definition,d=E(b),c=Q.mix(a.attributes,(d[f._4e_name()]||d["*"]||{}).attributes);a=Q.mix(a.styles,(d[f._4e_name()]||d["*"]||{}).styles);d=y.isEmptyObject(c)&&y.isEmptyObject(a);for(var g in c)if(c.hasOwnProperty(g))if(!((g=="class"||b._.definition.fullMatch)&&
f.attr(g)!=R(g,c[g]))){d=d||!!f._4e_hasAttribute(g);f.removeAttr(g)}for(var e in a)if(a.hasOwnProperty(e))if(!(b._.definition.fullMatch&&f._4e_style(e)!=R(e,a[e],m))){d=d||!!f._4e_style(e);f._4e_style(e,"")}S(f)}function R(b,f,a){var d=new z("<span>");d[a?"_4e_style":"attr"](b,f);return d[a?"_4e_style":"attr"](b)}function N(b,f){for(var a=E(b),d=f.all(b.element),c=d.length;--c>=0;)J(b,new z(d[c]));for(var g in a)if(a.hasOwnProperty(g))if(g!=b.element){d=f.all(g);for(c=d.length-1;c>=0;c--){var e=new z(d[c]);
I(e,a[g])}}}function I(b,f){var a,d=f&&f.attributes;if(d)for(a=0;a<d.length;a++){var c=d[a][0],g;if(g=b.attr(c)){var e=d[a][1];if(e===v||e.test&&e.test(g)||typeof e=="string"&&g==e)b[0].removeAttribute(c)}}if(d=f&&f.styles)for(a=0;a<d.length;a++){c=d[a][0];if(e=b.css(c)){var h=d[a][1];if(h===v||h.test&&h.test(g)||typeof h=="string"&&e==h)b.css(c,"")}}S(b)}function S(b){if(!b._4e_hasAttributes()){var f=b[0].firstChild,a=b[0].lastChild;b._4e_remove(m);if(f){f.nodeType==A.NODE_ELEMENT&&x._4e_mergeSiblings(f);
a&&f!=a&&a.nodeType==A.NODE_ELEMENT&&x._4e_mergeSiblings(a)}}}var m=true,w=false,v=null,y=KISSY,Q=r.Utils,x=y.DOM,u={STYLE_BLOCK:1,STYLE_INLINE:2,STYLE_OBJECT:3},C=r.RANGE,X=r.Selection,A=r.NODE,p=r.POSITION,ba=r.Range,z=y.Node,G=y.UA,H=r.ElementPath,W={address:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,p:1,pre:1},L={embed:1,hr:1,img:1,li:1,object:1,ol:1,table:1,td:1,tr:1,th:1,ul:1,dl:1,dt:1,dd:1,form:1},T=/\s*(?:;\s*|$)/g,V=/#\((.+?)\)/g;r.STYLE=u;D.prototype={apply:function(b){M.call(this,b,w)},remove:function(b){M.call(this,
b,m)},applyToRange:function(b){return(this.applyToRange=this.type==u.STYLE_INLINE?aa:this.type==u.STYLE_BLOCK?Y:this.type==u.STYLE_OBJECT?v:v).call(this,b)},removeFromRange:function(b){return(this.removeFromRange=this.type==u.STYLE_INLINE?ca:v).call(this,b)},checkElementRemovable:function(b,f){if(!b)return w;var a=this._.definition,d;if(b._4e_name()==this.element){if(!f&&!b._4e_hasAttributes())return m;var c=a._AC;if(c)a=c;else{c={};var g=0,e=a.attributes;if(e)for(var h in e)if(e.hasOwnProperty(h)){g++;
c[h]=e[h]}if(e=D.getStyleText(a)){c.style||g++;c.style=e}c._length=g;a=a._AC=c}if(a._length){for(var i in a)if(i!="_length")if(a.hasOwnProperty(i)){g=b.attr(i)||"";if(i=="style")a:{c=a[i];g=P(g,w);typeof c=="string"&&(c=O(c));typeof g=="string"&&(g=O(g));e=void 0;for(e in c)if(c.hasOwnProperty(e))if(!(e in g&&(g[e]==c[e]||c[e]=="inherit"||g[e]=="inherit"))){c=w;break a}c=m}else c=a[i]==g;if(c){if(!f)return m}else if(f)return w}if(f)return m}else return m}i=E(this);if(i=i[b._4e_name()]||i["*"]){if(!(a=
i.attributes)&&!(d=i.styles))return m;if(a)for(c=0;c<a.length;c++){i=a[c][0];if(i=b.attr(i)){g=a[c][1];if(g===v||typeof g=="string"&&i==g||g.test&&g.test(i))return m}}if(d)for(c=0;c<d.length;c++)if(i=b.css(d[c][0])){a=d[c][1];if(a===v||typeof a=="string"&&i==a||a.test&&a.test(i))return m}}return w},checkActive:function(b){switch(this.type){case u.STYLE_BLOCK:return this.checkElementRemovable(b.block||b.blockLimit,m);case u.STYLE_OBJECT:case u.STYLE_INLINE:for(var f=b.elements,a=0,d;a<f.length;a++){d=
f[a];if(!(this.type==u.STYLE_INLINE&&(x._4e_equals(d,b.block)||x._4e_equals(d,b.blockLimit))))if(!(this.type==u.STYLE_OBJECT&&!(d._4e_name()in L)))if(this.checkElementRemovable(d,m))return m}}return w}};D.getStyleText=function(b){var f=b._ST;if(f)return f;f=b.styles;var a=b.attributes&&b.attributes.style||"",d="";if(a.length)a=a.replace(T,";");for(var c in f)if(f.hasOwnProperty(c)){var g=f[c],e=(c+":"+g).replace(T,";");if(g=="inherit")d+=e;else a+=e}if(a.length)a=P(a);a+=d;return b._ST=a};r.Style=
D});
