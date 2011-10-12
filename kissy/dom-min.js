/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Oct 12 10:48
*/
KISSY.add("dom/attr",function(o,c,u,v){function w(j,f){f=A[f]||f;var g=F[f];return g&&g.get?g.get(j,f):j[f]}u=document.documentElement;var y=!u.hasAttribute,z=u.textContent===v?"innerText":"textContent",l=c._nodeName,k=c._isElementNode,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,s=/^(?:button|input|object|select|textarea)$/i,n=/^a(?:rea)?$/i,q=/:|^on/,m=/\r/g,t={},x={val:1,css:1,html:1,text:1,data:1,width:1,height:1,
offset:1},E={tabindex:{get:function(j){var f=j.getAttributeNode("tabindex");return f&&f.specified?parseInt(f.value,10):s.test(j.nodeName)||n.test(j.nodeName)&&j.href?0:v}},style:{get:function(j){return j.style.cssText},set:function(j,f){j.style.cssText=f}}},A={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},
D={get:function(j,f){return c.prop(j,f)?f.toLowerCase():v},set:function(j,f,g){if(f===false)c.removeAttr(j,g);else{f=A[g]||g;if(f in j)j[f]=true;j.setAttribute(g,g.toLowerCase())}return g}},F={},H={},G={option:{get:function(j){var f=j.attributes.value;return!f||f.specified?j.value:j.text}},select:{get:function(j){var f=j.selectedIndex,g=j.options;j=j.type==="select-one";if(f<0)return null;else if(j)return c.val(g[f]);f=[];j=0;for(var h=g.length;j<h;++j)g[j].selected&&f.push(c.val(g[j]));return f},
set:function(j,f){var g=o.makeArray(f);o.each(j.options,function(h){h.selected=o.inArray(c.val(h),g)});if(!g.length)j.selectedIndex=-1;return g}}};if(y){H={get:function(j,f){var g;return(g=j.getAttributeNode(f))&&g.nodeValue!==""?g.nodeValue:v},set:function(j,f,g){var h=j.getAttributeNode(g);if(h)h.nodeValue=f;else try{var d=j.ownerDocument.createAttribute(g);d.value=f;j.setAttributeNode(d)}catch(a){return j.setAttribute(g,f,0)}}};t=A;E.tabIndex=E.tabindex;o.each(["href","src","width","height","colSpan",
"rowSpan"],function(j){E[j]={get:function(f){f=f.getAttribute(j,2);return f===null?v:f}}});G.button=E.value=H}o.each(["radio","checkbox"],function(j){G[j]={get:function(f){return f.getAttribute("value")===null?"on":f.value},set:function(f,g){if(o.isArray(g))return f.checked=o.inArray(c.val(f),g)}}});o.mix(c,{prop:function(j,f,g){if(o.isPlainObject(f))for(var h in f)c.prop(j,h,f[h]);else{j=c.query(j);f=A[f]||f;var d=F[f];if(g!==v)j.each(function(a){if(d&&d.set)d.set(a,g,f);else a[f]=g});else if(j.length)return w(j[0],
f)}},hasProp:function(j,f){for(var g=c.query(j),h=0;h<g.length;h++)if(w(g[h],f)!==v)return true;return false},removeProp:function(j,f){f=A[f]||f;c.query(j).each(function(g){try{g[f]=v;delete g[f]}catch(h){}})},attr:function(j,f,g,h){if(o.isPlainObject(f)){h=g;for(var d in f)c.attr(j,d,f[d],h)}else if(f=o.trim(f)){f=f.toLowerCase();if(h&&x[f])return c[f](j,g);f=t[f]||f;var a;a=p.test(f)?D:q.test(f)?H:E[f];if(g===v){j=c.get(j);if(k(j)){if(l(j,"form"))a=H;if(a&&a.get)return a.get(j,f);j=j.getAttribute(f);
return j===null?v:j}}else c.query(j).each(function(b){if(k(b)){var e=a;if(l(b,"form"))e=H;e&&e.set?e.set(b,g,f):b.setAttribute(f,""+g)}})}},removeAttr:function(j,f){f=f.toLowerCase();f=t[f]||f;c.query(j).each(function(g){if(k(g)){var h;g.removeAttribute(f);if(p.test(f)&&(h=A[f]||f)in g)g[h]=false}})},hasAttr:y?function(j,f){f=f.toLowerCase();for(var g=c.query(j),h=0;h<g.length;h++){var d=g[h].getAttributeNode(f);if(d&&d.specified)return true}return false}:function(j,f){for(var g=c.query(j),h=0;h<
g.length;h++)if(g[h].hasAttribute(f))return true;return false},val:function(j,f){var g,h;if(f===v){var d=c.get(j);if(d){if((g=G[d.nodeName.toLowerCase()]||G[d.type])&&"get"in g&&(h=g.get(d,"value"))!==v)return h;h=d.value;return typeof h==="string"?h.replace(m,""):o.isNullOrUndefined(h)?"":h}}else c.query(j).each(function(a){if(a.nodeType===1){var b=f;if(o.isNullOrUndefined(b))b="";else if(typeof b==="number")b+="";else if(o.isArray(b))b=o.map(b,function(e){return o.isNullOrUndefined(b)?"":e+""});
g=G[a.nodeName.toLowerCase()]||G[a.type];if(!g||!("set"in g)||g.set(a,b,"value")===v)a.value=b}})},text:function(j,f){if(f===v){var g=c.get(j);if(k(g))return g[z]||"";else if(c._nodeTypeIs(g,c.TEXT_NODE))return g.nodeValue;return v}else c.query(j).each(function(h){if(k(h))h[z]=f;else if(c._nodeTypeIs(h,c.TEXT_NODE))h.nodeValue=f})}});return c},{requires:["./base","ua"]});
KISSY.add("dom/base",function(o,c){function u(w,y){return w&&w.nodeType===y}var v={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12,_isElementNode:function(w){return u(w,v.ELEMENT_NODE)},_getWin:function(w){return w&&"scrollTo"in w&&w.document?w:u(w,v.DOCUMENT_NODE)?w.defaultView||w.parentWindow:w===c||w===null?window:false},
_nodeTypeIs:u,_isNodeList:function(w){return w&&!w.nodeType&&w.item&&!w.setTimeout},_nodeName:function(w,y){return w&&w.nodeName.toLowerCase()===y.toLowerCase()}};return v});
KISSY.add("dom/class",function(o,c,u){function v(k){return(y+k+y).replace(l,y)}function w(k,p,s,n){if(!(p=o.trim(p)))return n?false:u;k=c.query(k);var q=k.length,m=p.split(z);p=[];for(var t=0;t<m.length;t++){var x=o.trim(m[t]);x&&p.push(x)}for(t=0;t<q;t++){m=k[t];if(c._isElementNode(m)){m=s(m,p,p.length);if(m!==u)return m}}if(n)return false;return u}var y=" ",z=/[\.\s]\s*\.?/,l=/[\n\t]/g;o.mix(c,{__hasClass:function(k,p){var s=k.className;if(s){s=v(s);return s.indexOf(y+p+y)>-1}else return false},
hasClass:function(k,p){return w(k,p,function(s,n,q){if(s=s.className){s=v(s);for(var m=0,t=true;m<q;m++)if(s.indexOf(y+n[m]+y)<0){t=false;break}if(t)return true}},true)},addClass:function(k,p){w(k,p,function(s,n,q){var m=s.className;if(m){var t=v(m);m=m;for(var x=0;x<q;x++)if(t.indexOf(y+n[x]+y)<0)m+=y+n[x];s.className=o.trim(m)}else s.className=p},u)},removeClass:function(k,p){w(k,p,function(s,n,q){var m=s.className;if(m)if(q){m=v(m);for(var t=0,x;t<q;t++)for(x=y+n[t]+y;m.indexOf(x)>=0;)m=m.replace(x,
y);s.className=o.trim(m)}else s.className=""},u)},replaceClass:function(k,p,s){c.removeClass(k,p);c.addClass(k,s)},toggleClass:function(k,p,s){var n=o.isBoolean(s),q;w(k,p,function(m,t,x){for(var E=0,A;E<x;E++){A=t[E];q=n?!s:c.hasClass(m,A);c[q?"removeClass":"addClass"](m,A)}},u)}});return c},{requires:["dom/base"]});
KISSY.add("dom/create",function(o,c,u,v){function w(d,a,b){if(a.nodeType==c.DOCUMENT_FRAGMENT_NODE){a=a.childNodes;b=b.childNodes;for(var e=0;a[e];){b[e]&&w(d,a[e],b[e]);e++}}else if(a.nodeType==c.ELEMENT_NODE){a=a.getElementsByTagName("*");b=b.getElementsByTagName("*");for(e=0;a[e];){b[e]&&d(a[e],b[e]);e++}}}function y(d,a){var b=o.require("event");if(!(a.nodeType!==c.ELEMENT_NODE&&!c.hasData(d))){var e=c.data(d),i;for(i in e)c.data(a,i,e[i]);if(b){b._removeData(a);b._clone(d,a)}}}function z(d,a){a.clearAttributes&&
a.clearAttributes();a.mergeAttributes&&a.mergeAttributes(d);var b=a.nodeName.toLowerCase();if(b==="object"&&!a.childNodes.length)o.each(d.childNodes,function(e){a.appendChild(e)});else if(b==="input"&&(d.type==="checkbox"||d.type==="radio")){if(d.checked)a.defaultChecked=a.checked=d.checked;if(a.value!==d.value)a.value=d.value}else if(b==="option")a.selected=d.defaultSelected;else if(b==="input"||b==="textarea")a.defaultValue=d.defaultValue;a.removeAttribute(c.__EXPANDO)}function l(d,a){if(o.isPlainObject(a))if(t(d))c.attr(d,
a,true);else d.nodeType==c.DOCUMENT_FRAGMENT_NODE&&o.each(d.childNodes,function(b){c.attr(b,a,true)});return d}function k(d,a){var b=null,e,i;if(d&&(d.push||d.item)&&d[0]){a=a||d[0].ownerDocument;b=a.createDocumentFragment();if(d.item)d=o.makeArray(d);e=0;for(i=d.length;e<i;e++)b.appendChild(d[e])}return b}function p(d,a){a=(a+"").replace(D,"");try{d.innerHTML=a}catch(b){for(;d.firstChild;)d.removeChild(d.firstChild);a&&d.appendChild(c.create(a))}}function s(d,a,b,e){if(b){var i=o.guid("ks-tmp-"),
r=RegExp(D);a+='<span id="'+i+'"></span>';o.available(i,function(){var B=c.get("head"),C,I,J,K,M,L;for(r.lastIndex=0;C=r.exec(a);)if((J=(I=C[1])?I.match(H):false)&&J[2]){C=n.createElement("script");C.src=J[2];if((K=I.match(G))&&K[2])C.charset=K[2];C.async=true;B.appendChild(C)}else if((L=C[2])&&L.length>0)o.globalEval(L);(M=n.getElementById(i))&&c.remove(M);o.isFunction(e)&&e()});p(d,a)}else{p(d,a);o.isFunction(e)&&e()}}var n=document,q=u.ie,m=c._nodeTypeIs,t=c._isElementNode,x=n.createElement("div"),
E=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,A=/<(\w+)/,D=/<script([^>]*)>([^<]*(?:(?!<\/script>)<[^<]*)*)<\/script>/ig,F=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,H=/\ssrc=(['"])(.*?)\1/i,G=/\scharset=(['"])(.*?)\1/i;o.mix(c,{create:function(d,a,b){if(m(d,c.ELEMENT_NODE)||m(d,c.TEXT_NODE))return c.clone(d);if(!(d=o.trim(d)))return null;var e=null,i=c._creators,r,B="div",C;if(r=F.exec(d))e=(b||n).createElement(r[1]);else{d=d.replace(E,"<$1></$2>");if((r=A.exec(d))&&(C=r[1]))B=C.toLowerCase();
d=(i[B]||i.div)(d,b).childNodes;if(d.length===1)e=d[0].parentNode.removeChild(d[0]);else if(d.length)e=k(d,b||n)}return l(e,a)},_creators:{div:function(d,a){var b=a?a.createElement("div"):x;b.innerHTML="m<div>"+d+"</div>";return b.lastChild}},html:function(d,a,b,e){if(a===v){d=c.get(d);if(t(d))return d.innerHTML}else c.query(d).each(function(i){t(i)&&s(i,a,b,e)})},remove:function(d,a){c.query(d).each(function(b){if(!a&&b.nodeType==c.ELEMENT_NODE){var e=o.require("event");if(e){e.detach(b.getElementsByTagName("*"));
e.detach(b)}c.removeData(b.getElementsByTagName("*"));c.removeData(b)}b.parentNode&&b.parentNode.removeChild(b)})},clone:function(d,a,b,e){d=c.get(d);if(!d)return null;var i=d.cloneNode(a);if(d.nodeType==c.ELEMENT_NODE||d.nodeType==c.DOCUMENT_FRAGMENT_NODE){d.nodeType==c.ELEMENT_NODE&&z(d,i);a&&w(z,d,i)}if(b){y(d,i);a&&e&&w(y,d,i)}return i},empty:function(d){c.query(d).each(function(a){c.remove(a.childNodes)})},_nl2frag:k});if(q||u.gecko||u.webkit){var j=c._creators,f=c.create,g=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/;
u={option:"select",td:"tr",tr:"tbody",tbody:"table",col:"colgroup",legend:"fieldset"};for(var h in u)(function(d){j[h]=function(a,b){return f("<"+d+">"+a+"</"+d+">",null,b)}})(u[h]);if(q<8)j.tbody=function(d,a){var b=f("<table>"+d+"</table>",null,a),e=b.children.tags("tbody")[0];b.children.length>1&&e&&!g.test(d)&&e.parentNode.removeChild(e);return b};o.mix(j,{optgroup:j.option,th:j.td,thead:j.tbody,tfoot:j.tbody,caption:j.tbody,colgroup:j.tbody})}return c},{requires:["./base","ua"]});
KISSY.add("dom/data",function(o,c,u){var v=window,w="_ks_data_"+o.now(),y={},z={},l={};l.applet=1;l.object=1;l.embed=1;var k={hasData:function(n,q){if(n)if(q!==u){if(q in n)return true}else if(!o.isEmptyObject(n))return true;return false}},p={hasData:function(n,q){if(n==v)return p.hasData(z,q);return k.hasData(n[w],q)},data:function(n,q,m){if(n==v)return p.data(z,q,m);var t=n[w];if(m!==u){t=n[w]=n[w]||{};t[q]=m}else if(q!==u)return t&&t[q];else return t=n[w]=n[w]||{}},removeData:function(n,q){if(n==
v)return p.removeData(z,q);var m=n[w];if(m)if(q!==u){delete m[q];o.isEmptyObject(m)&&p.removeData(n,u)}else delete n[w]}},s={hasData:function(n,q){var m=n[w];if(!m)return false;return k.hasData(y[m],q)},data:function(n,q,m){if(!l[n.nodeName.toLowerCase()]){var t=n[w];t||(t=n[w]=o.guid());n=y[t];if(m!==u){n=y[t]=y[t]||{};n[q]=m}else if(q!==u)return n&&n[q];else return n=y[t]=y[t]||{}}},removeData:function(n,q){var m=n[w];if(m){var t=y[m];if(t)if(q!==u){delete t[q];o.isEmptyObject(t)&&s.removeData(n,
u)}else{delete y[m];try{delete n[w]}catch(x){}n.removeAttribute&&n.removeAttribute(w)}}}};o.mix(c,{__EXPANDO:w,hasData:function(n,q){for(var m=false,t=c.query(n),x=0;x<t.length;x++)if(m=(m=t[x])&&m.nodeType?s.hasData(m,q):p.hasData(m,q))break;return m},data:function(n,q,m){if(o.isPlainObject(q))for(var t in q)c.data(n,t,q[t]);else if(m===u)if((n=c.get(n))&&n.nodeType)return s.data(n,q,m);else{if(n)return p.data(n,q,m)}else c.query(n).each(function(x){x&&x.nodeType?s.data(x,q,m):p.data(x,q,m)})},removeData:function(n,
q){c.query(n).each(function(m){m&&m.nodeType?s.removeData(m,q):p.removeData(m,q)})}});return c},{requires:["./base"]});
KISSY.add("dom/insertion",function(o,c){function u(z,l,k){z=c.query(z);l=c.query(l);if(z.length&&l.length){z=v(z);var p;if(l.length>1)p=c.clone(z,true);for(var s=0;s<l.length;s++){var n=l[s],q=s>0?c.clone(p,true):z;k(q,n)}}}var v=c._nl2frag;o.mix(c,{insertBefore:function(z,l){u(z,l,function(k,p){p.parentNode&&p.parentNode.insertBefore(k,p)})},insertAfter:function(z,l){u(z,l,function(k,p){p.parentNode&&p.parentNode.insertBefore(k,p.nextSibling)})},appendTo:function(z,l){u(z,l,function(k,p){p.appendChild(k)})},
prependTo:function(z,l){u(z,l,function(k,p){p.insertBefore(k,p.firstChild)})}});var w={prepend:"prependTo",append:"appendTo",before:"insertBefore",after:"insertAfter"},y;for(y in w)c[y]=c[w[y]];return c},{requires:["./create"]});
KISSY.add("dom/offset",function(o,c,u,v){function w(f){var g,h=0;g=0;var d=l.body,a=q(f[E]);if(f[j]){g=f[j]();h=g[A];g=g[D];f=k&&l.documentMode!=9&&(m?p.clientTop:d.clientTop)||0;h-=k&&l.documentMode!=9&&(m?p.clientLeft:d.clientLeft)||0;g-=f;if(u.mobile=="apple"){h-=c[H](a);g-=c[G](a)}}return{left:h,top:g}}function y(f,g){var h={left:0,top:0},d=q(f[E]),a=f;g=g||d;do{var b;if(d==g){var e=a;b=w(e);e=q(e[E]);b.left+=c[H](e);b.top+=c[G](e);b=b}else b=w(a);b=b;h.left+=b.left;h.top+=b.top}while(d&&d!=g&&
(a=d.frameElement)&&(d=d.parent));return h}var z=window,l=document,k=u.ie,p=l.documentElement,s=c._isElementNode,n=c._nodeTypeIs,q=c._getWin,m=l.compatMode==="CSS1Compat",t=Math.max,x=parseInt,E="ownerDocument",A="left",D="top",F=o.isNumber,H="scrollLeft",G="scrollTop",j="getBoundingClientRect";o.mix(c,{offset:function(f,g,h){if(g===v){f=c.get(f);var d;if(f)d=y(f,h);return d}c.query(f).each(function(a){if(c.css(a,"position")==="static")a.style.position="relative";var b=y(a),e={},i,r;for(r in g){i=
x(c.css(a,r),10)||0;e[r]=i+g[r]-b[r]}c.css(a,e)})},scrollIntoView:function(f,g,h,d,a){if(f=c.get(f)){if(g)g=c.get(g);if(!g)g=f.ownerDocument;if(a!==true){d=d===v?true:!!d;h=h===v?true:!!h}if(n(g,c.DOCUMENT_NODE))g=q(g);var b=!!q(g);a=c.offset(f);var e=c.outerHeight(f);f=c.outerWidth(f);var i,r,B,C;if(b){b=g;r=c.height(b);i=c.width(b);C={left:c.scrollLeft(b),top:c.scrollTop(b)};b={left:a[A]-C[A],top:a[D]-C[D]};a={left:a[A]+f-(C[A]+i),top:a[D]+e-(C[D]+r)};C=C}else{i=c.offset(g);r=g.clientHeight;B=g.clientWidth;
C={left:c.scrollLeft(g),top:c.scrollTop(g)};b={left:a[A]-i[A]-(x(c.css(g,"borderLeftWidth"))||0),top:a[D]-i[D]-(x(c.css(g,"borderTopWidth"))||0)};a={left:a[A]+f-(i[A]+B+(x(c.css(g,"borderRightWidth"))||0)),top:a[D]+e-(i[D]+r+(x(c.css(g,"borderBottomWidth"))||0))}}if(b.top<0||a.top>0)if(h===true)c.scrollTop(g,C.top+b.top);else if(h===false)c.scrollTop(g,C.top+a.top);else b.top<0?c.scrollTop(g,C.top+b.top):c.scrollTop(g,C.top+a.top);if(d)if(b.left<0||a.left>0)if(h===true)c.scrollLeft(g,C.left+b.left);
else if(h===false)c.scrollLeft(g,C.left+a.left);else b.left<0?c.scrollLeft(g,C.left+b.left):c.scrollLeft(g,C.left+a.left)}},docWidth:0,docHeight:0,viewportHeight:0,viewportWidth:0});o.each(["Left","Top"],function(f,g){var h="scroll"+f;c[h]=function(d,a){if(F(d))return arguments.callee(z,d);d=c.get(d);var b,e=q(d);if(e)if(a!==v){var i=f=="Left"?a:c.scrollLeft(e),r=f=="Top"?a:c.scrollTop(e);e.scrollTo(i,r)}else{b=e["page"+(g?"Y":"X")+"Offset"];if(!F(b)){e=e.document;b=e.documentElement[h];F(b)||(b=
e.body[h])}}else if(s(d))if(a!==v)d[h]=a;else b=d[h];return b}});o.each(["Width","Height"],function(f){c["doc"+f]=function(g){g=c.get(g);g=q(g).document;return t(g.documentElement["scroll"+f],g.body["scroll"+f],c["viewport"+f](g))};c["viewport"+f]=function(g){g=c.get(g);var h="inner"+f;g=q(g);var d=g.document;return h in g?g[h]:m?d.documentElement["client"+f]:d.body["client"+f]}});return c},{requires:["./base","ua"]});
KISSY.add("dom/selector",function(o,c,u){function v(h,d){var a=[],b;b=d===u?[s]:v(d,u);m(b,function(e){D.apply(a,w(h,e))});if(o.isString(h)&&h.indexOf(",")>-1||b.length>1)f(a);a.each=o.bind(m,u,a);return a}function w(h,d){var a=[];q("sizzle");if(H(h))h=o.trim(h);if(H(h)&&h.indexOf(",")>-1)a=y(h,d);else{if(H(h)&&!j.exec(String(h))){a=h;var b=[],e=q("sizzle");e&&e(a,d,b);a=b}else a=z(h,d);a=a}return a=a}function y(h,d){var a=[],b=h.split(",");m(b,function(e){D.apply(a,w(e,d))});return a}function z(h,
d){var a,b,e=[],i;if(H(h))if(G.test(h)){if(b=k(h.slice(1),d))e=[b]}else{if(a=j.exec(h)){b=a[1];i=a[2];a=a[3];if(d=b?k(b,d):d)if(a)if(!b||h.indexOf(F)!=-1)e=[].concat(g(a,i,d));else{if((b=k(b,d))&&c.__hasClass(b,a))e=[b]}else if(i)e=p(i,d)}}else if(h&&(t(h)||E(h)))e=n(h,function(r){return l(r,d)});else if(h)if(l(h,d))e=[h];return e}function l(h,d){if(!h)return false;if(d==s)return true;return c.__contains(d,h)}function k(h,d){if(!d)return null;var a=d;if(d.nodeType!==c.DOCUMENT_NODE)a=d.ownerDocument;
if((a=a.getElementById(h))&&a.parentNode)if(c.attr(a,"id")!==h)a=c.filter("*","#"+h,d)[0]||null;else l(a,d)||(a=null);else a=null;return a}function p(h,d){return d&&x(d.getElementsByTagName(h))||[]}var s=document,n=o.filter,q=o.require,m=o.each,t=o.isArray,x=o.makeArray,E=c._isNodeList,A=c._nodeName,D=Array.prototype.push,F=" ",H=o.isString,G=/^#[\w-]+$/,j=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/,f;(function(){var h,d,a=true;[0,0].sort(function(){a=false;return 0});f=function(b){if(h){d=a;b.sort(h);
if(d)for(var e=1,i=b.length;e<i;)if(b[e]===b[e-1])b.splice(e,1);else e++}return b};h=s.documentElement.compareDocumentPosition?function(b,e){if(b==e){d=true;return 0}if(!b.compareDocumentPosition||!e.compareDocumentPosition)return b.compareDocumentPosition?-1:1;return b.compareDocumentPosition(e)&4?-1:1}:function(b,e){if(b==e){d=true;return 0}else if(b.sourceIndex&&e.sourceIndex)return b.sourceIndex-e.sourceIndex}})();(function(){var h=s.createElement("div");h.appendChild(s.createComment(""));if(h.getElementsByTagName("*").length>
0)p=function(d,a){var b=x(a.getElementsByTagName(d));if(d==="*"){for(var e=[],i=0,r;r=b[i++];)r.nodeType===1&&e.push(r);b=e}return b}})();var g=s.getElementsByClassName?function(h,d,a){if(!a)return[];a=h=x(a.getElementsByClassName(h));var b=0,e=h.length,i;if(d&&d!=="*")for(a=x();b<e;++b){i=h[b];A(i,d)&&a.push(i)}return a}:s.querySelectorAll?function(h,d,a){return a&&x(a.querySelectorAll((d?d:"")+"."+h))||[]}:function(h,d,a){if(!a)return[];d=x(a.getElementsByTagName(d||"*"));a=[];for(var b=0,e=d.length,
i;b<e;++b){i=d[b];c.__hasClass(i,h)&&a.push(i)}return a};o.mix(c,{query:v,get:function(h,d){return v(h,d)[0]||null},unique:f,filter:function(h,d,a){h=v(h,a);a=q("sizzle");var b,e,i,r,B=[];if(H(d)&&(b=j.exec(d))){i=b[1];e=b[2];r=b[3];if(i){if(i&&!e&&!r)d=function(C){return C.id===i}}else d=function(C){var I=true,J=true;if(e)I=A(C,e);if(r)J=c.__hasClass(C,r);return J&&I}}if(o.isFunction(d))B=o.filter(h,d);else if(d&&a)B=a.matches(d,h);return B},test:function(h,d,a){h=v(h,a);return h.length&&c.filter(h,
d,a).length===h.length}});return c},{requires:["dom/base"]});
KISSY.add("dom/style-ie",function(o,c,u,v){if(!u.ie)return c;var w=document,y=w.documentElement,z=v._CUSTOM_STYLES,l=/^-?\d+(?:px)?$/i,k=/^-?\d/,p=/opacity=([^)]*)/,s=/alpha\([^)]*\)/i;try{if(o.isNullOrUndefined(y.style.opacity))z.opacity={get:function(m,t){return p.test((t&&m.currentStyle?m.currentStyle.filter:m.style.filter)||"")?parseFloat(RegExp.$1)/100+"":t?"1":""},set:function(m,t){t=parseFloat(t);var x=m.style,E=m.currentStyle,A=isNaN(t)?"":"alpha(opacity="+t*100+")",D=o.trim(E&&E.filter||
x.filter||"");x.zoom=1;if(t>=1&&o.trim(D.replace(s,""))===""){x.removeAttribute("filter");if(E&&!E.filter)return}x.filter=s.test(D)?D.replace(s,A):D+(D?", ":"")+A}}}catch(n){}u=u.ie==8;var q={};q.thin=u?"1px":"2px";q.medium=u?"3px":"4px";q.thick=u?"5px":"6px";o.each(["","Top","Left","Right","Bottom"],function(m){var t="border"+m+"Width",x="border"+m+"Style";z[t]={get:function(E,A){var D=A?E.currentStyle:0,F=D&&String(D[t])||undefined;if(F&&F.indexOf("px")<0)F=q[F]&&D[x]!=="none"?q[F]:0;return F}}});
if(!(w.defaultView||{}).getComputedStyle&&y.currentStyle)c._getComputedStyle=function(m,t){t=c._cssProps[t]||t;var x=m.currentStyle&&m.currentStyle[t];if(!l.test(x)&&k.test(x)){var E=m.style,A=E.left,D=m.runtimeStyle&&m.runtimeStyle.left;if(D)m.runtimeStyle.left=m.currentStyle.left;E.left=t==="fontSize"?"1em":x||0;x=E.pixelLeft+"px";E.left=A;if(D)m.runtimeStyle.left=D}return x===""?"auto":x};return c},{requires:["./base","ua","./style"]});
KISSY.add("dom/style",function(o,c,u,v){function w(a,b,e){var i={},r;for(r in b){i[r]=a[s][r];a[s][r]=b[r]}e.call(a);for(r in b)a[s][r]=i[r]}function y(a,b,e){var i;if(a.nodeType===3||a.nodeType===8||!(i=a[s]))return v;b=b.replace(E,A);var r,B=G[b];b=j[b]||b;if(e!==v){if(e===null||e===F)e=F;else if(!isNaN(Number(e))&&!x[b])e+=H;if(B&&B.set)e=B.set(a,e);if(e!==v)try{a[s][b]=e}catch(C){}return v}else{if(!(B&&"get"in B&&(r=B.get(a,false))!==v))r=i[b];return r===v?"":r}}function z(a,b,e){if(o.isWindow(a))return b==
n?c.viewportWidth(a):c.viewportHeight(a);else if(a.nodeType==9)return b==n?c.docWidth(a):c.docHeight(a);var i=b===n?["Left","Right"]:["Top","Bottom"],r=b===n?a.offsetWidth:a.offsetHeight;if(r>0){e!=="border"&&o.each(i,function(B){e||(r-=parseFloat(c.css(a,"padding"+B))||0);if(e==="margin")r+=parseFloat(c.css(a,e+B))||0;else r-=parseFloat(c.css(a,"border"+B+"Width"))||0});return r}r=c._getComputedStyle(a,b);if(r<0||o.isNullOrUndefined(r))r=a.style[b]||0;r=parseFloat(r)||0;e&&o.each(i,function(B){r+=
parseFloat(c.css(a,"padding"+B))||0;if(e!=="padding")r+=parseFloat(c.css(a,"border"+B+"Width"))||0;if(e==="margin")r+=parseFloat(c.css(a,e+B))||0});return r}var l=document,k=l.documentElement,p=u.ie,s="style",n="width",q="display"+o.now(),m=parseInt,t=/^-?\d+(?:px)?$/i,x={fillOpacity:1,fontWeight:1,lineHeight:1,opacity:1,orphans:1,widows:1,zIndex:1,zoom:1},E=/-([a-z])/ig,A=function(a,b){return b.toUpperCase()},D=/([A-Z]|^ms)/g,F="",H="px",G={},j={},f={};if(k[s].cssFloat!==v)j["float"]="cssFloat";
else if(k[s].styleFloat!==v)j["float"]="styleFloat";var g,h;o.mix(c,{_CUSTOM_STYLES:G,_cssProps:j,_getComputedStyle:function(a,b){var e="",i={},r=a.ownerDocument;b=b.replace(D,"-$1").toLowerCase();if(i=r.defaultView.getComputedStyle(a,null))e=i.getPropertyValue(b)||i[b];if(e==""&&!c.__contains(r.documentElement,a)){b=j[b]||b;e=a[s][b]}return e},style:function(a,b,e){if(o.isPlainObject(b))for(var i in b)c.style(a,i,b[i]);else if(e===v){a=c.get(a);i="";if(a)i=y(a,b,e);return i}else c.query(a).each(function(r){y(r,
b,e)})},css:function(a,b,e){if(o.isPlainObject(b))for(var i in b)c.css(a,i,b[i]);else{b=b.replace(E,A);i=G[b];if(e===v){a=c.get(a);e="";if(a)if(!(i&&"get"in i&&(e=i.get(a,true))!==v))e=c._getComputedStyle(a,b);return e===v?"":e}else c.style(a,b,e)}},show:function(a){c.query(a).each(function(b){b[s].display=c.data(b,q)||F;if(c.css(b,"display")==="none"){var e;e=b.tagName.toLowerCase();var i,r;if(!f[e]){i=l.body||l.documentElement;r=l.createElement(e);c.prepend(r,i);var B=c.css(r,"display");i.removeChild(r);
if(B==="none"||B===""){if(g)c.prepend(g,i);else{g=l.createElement("iframe");g.frameBorder=g.width=g.height=0;c.prepend(g,i);if(u.ie){r=l.domain;B=location.hostname;r=r!=B&&r!="["+B+"]"}else r=false;if(r)g.src="javascript:void(function(){"+encodeURIComponent("document.open();document.domain='"+l.domain+"';document.close();")+"}())"}if(!h||!g.createElement){h=g.contentWindow.document;h.write((l.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>");h.close()}r=h.createElement(e);h.body.appendChild(r);
B=c.css(r,"display");i.removeChild(g)}f[e]=B}e=f[e];c.data(b,q,e);b[s].display=e}})},hide:function(a){c.query(a).each(function(b){var e=b[s],i=e.display;if(i!=="none"){i&&c.data(b,q,i);e.display="none"}})},toggle:function(a){c.query(a).each(function(b){c.css(b,"display")==="none"?c.show(b):c.hide(b)})},addStyleSheet:function(a,b,e){if(o.isString(a)){e=b;b=a;a=window}a=c.get(a);a=c._getWin(a).document;var i;if(e&&(e=e.replace("#",F)))i=c.get("#"+e,a);if(!i){i=c.create("<style>",{id:e},a);c.get("head",
a).appendChild(i);if(i.styleSheet)i.styleSheet.cssText=b;else i.appendChild(a.createTextNode(b))}},unselectable:function(a){c.query(a).each(function(b){if(u.gecko)b[s].MozUserSelect="none";else if(u.webkit)b[s].KhtmlUserSelect="none";else if(u.ie||u.opera){var e=0,i=b.getElementsByTagName("*");for(b.setAttribute("unselectable","on");b=i[e++];)switch(b.tagName.toLowerCase()){case "iframe":case "textarea":case "input":case "select":break;default:b.setAttribute("unselectable","on")}}})},innerWidth:0,
innerHeight:0,outerWidth:0,outerHeight:0,width:0,height:0});o.each([n,"height"],function(a){c["inner"+(a.charAt(0).toUpperCase()+a.substring(1))]=function(b){return(b=c.get(b))?z(b,a,"padding"):null};c["outer"+(a.charAt(0).toUpperCase()+a.substring(1))]=function(b,e){var i=c.get(b);return i?z(i,a,e?"margin":"border"):null};c[a]=function(b,e){var i=c.css(b,a,e);if(i)i=parseFloat(i);return i}});var d={position:"absolute",visibility:"hidden",display:"block"};o.each(["height","width"],function(a){G[a]=
{get:function(b,e){var i;if(e){if(b.offsetWidth!==0)i=z(b,a);else w(b,d,function(){i=z(b,a)});return i+"px"}},set:function(b,e){if(t.test(e)){e=parseFloat(e);if(e>=0)return e+"px"}else return e}}});o.each(["left","top"],function(a){G[a]={get:function(b,e){if(e){var i=c._getComputedStyle(b,a);if(i==="auto"){i=0;if(o.inArray(c.css(b,"position"),["absolute","fixed"])){i=b[a==="left"?"offsetLeft":"offsetTop"];if(p&&document.documentMode!=9||u.opera)i-=b.offsetParent&&b.offsetParent["client"+(a=="left"?
"Left":"Top")]||0;i=i-(m(c.css(b,"margin-"+a))||0)}i+="px"}return i}}}});return c},{requires:["dom/base","ua"]});
KISSY.add("dom/traversal",function(o,c,u){function v(l,k,p,s,n,q){if(!(l=c.get(l)))return null;if(k===0)return l;q||(l=l[p]);if(!l)return null;n=n&&c.get(n)||null;if(k===u)k=1;q=[];var m=o.isArray(k),t,x;if(o.isNumber(k)){t=0;x=k;k=function(){return++t===x}}for(;l&&l!=n;){if(z(l)&&w(l,k)&&(!s||s(l))){q.push(l);if(!m)break}l=l[p]}return m?q:q[0]||null}function w(l,k){if(!k)return true;if(o.isArray(k))for(var p=0;p<k.length;p++){if(c.test(l,k[p]))return true}else if(c.test(l,k))return true;return false}
function y(l,k,p){var s=[];var n=l=c.get(l);if(l&&p)n=l.parentNode;if(n){p=0;for(n=n.firstChild;n;n=n.nextSibling)if(z(n)&&n!==l&&(!k||c.test(n,k)))s[p++]=n}return s}var z=c._isElementNode;o.mix(c,{closest:function(l,k,p){return v(l,k,"parentNode",function(s){return s.nodeType!=c.DOCUMENT_FRAGMENT_NODE},p,true)},parent:function(l,k,p){return v(l,k,"parentNode",function(s){return s.nodeType!=c.DOCUMENT_FRAGMENT_NODE},p)},first:function(l,k){var p=c.get(l);return v(p&&p.firstChild,k,"nextSibling",u,
u,true)},last:function(l,k){var p=c.get(l);return v(p&&p.lastChild,k,"previousSibling",u,u,true)},next:function(l,k){return v(l,k,"nextSibling",u)},prev:function(l,k){return v(l,k,"previousSibling",u)},siblings:function(l,k){return y(l,k,true)},children:function(l,k){return y(l,k,u)},__contains:document.documentElement.contains?function(l,k){if(l.nodeType==c.TEXT_NODE)return false;var p;if(k.nodeType==c.TEXT_NODE){k=k.parentNode;p=true}else if(k.nodeType==c.DOCUMENT_NODE)return false;else p=l!==k;
return p&&(l.contains?l.contains(k):true)}:document.documentElement.compareDocumentPosition?function(l,k){return!!(l.compareDocumentPosition(k)&16)}:0,contains:function(l,k){l=c.get(l);k=c.get(k);if(l&&k)return c.__contains(l,k)},equals:function(l,k){l=c.query(l);k=c.query(k);if(l.length!=k.length)return false;for(var p=l.length;p>=0;p--)if(l[p]!=k[p])return false;return true}});return c},{requires:["./base"]});
KISSY.add("dom",function(o,c){return c},{requires:["dom/attr","dom/class","dom/create","dom/data","dom/insertion","dom/offset","dom/style","dom/selector","dom/style-ie","dom/traversal"]});
