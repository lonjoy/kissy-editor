KISSY.Editor.add("htmldataprocessor",function(I){function L(g){return g.replace(M,function(k,c,d){return"<"+c+d.replace(N,function(h,m){if(d.indexOf("_ke_saved_"+m)==-1)return" _ke_saved_"+h+" "+h;return h})+">"})}var A=A,x=KISSY,n=x.Editor,O=x.Node,y=x.UA,F=n.NODE,v=n.HtmlParser,B=new v.Filter,G=new v.Filter,H=new v.Filter,J=n.XHTML_DTD;if(!I.htmlDataProcessor){(function(){var g=n.HtmlParser.Fragment.prototype,k=n.HtmlParser.Element.prototype;g.onlyChild=k.onlyChild=function(){var c=this.children;
return c.length==1&&c[0]||null};k.removeAnyChildWithName=function(c){for(var d=this.children,h=[],m,i=0;i<d.length;i++){m=d[i];if(m.name){if(m.name==c){h.push(m);d.splice(i--,1)}h=h.concat(m.removeAnyChildWithName(c))}}return h};k.getAncestor=function(c){for(var d=this.parent;d&&!(d.name&&d.name.match(c));)d=d.parent;return d};g.firstChild=k.firstChild=function(c){for(var d,h=0;h<this.children.length;h++){d=this.children[h];if(c(d))return d;else if(d.name)if(d=d.firstChild(c))return d}return null};
k.addStyle=function(c,d,h){var m="";if(typeof d=="string")m+=c+":"+d+";";else{if(typeof c=="object")for(var i in c){if(c.hasOwnProperty(i))m+=i+":"+c[i]+";"}else m+=c;h=d}if(!this.attributes)this.attributes={};c=this.attributes.style||"";c=(h?[m,c]:[c,m]).join(";");this.attributes.style=c.replace(/^;|;(?=;)/,"")};J.parentOf=function(c){var d={},h;for(h in this)if(this.hasOwnProperty(h))if(h.indexOf("$")==-1&&this[h][c])d[h]=1;return d}})();(function(){function g(a){if(/mso-list\s*:\s*Ignore/i.test(a.attributes&&
a.attributes.style||""))return true;return A}function k(a,b){var e=new n.HtmlParser.Element("ke:listbullet"),f;if(a)if(a[2]){a=isNaN(a[1])?/^[a-z]+$/.test(a[1])?"lower-alpha":/^[A-Z]+$/.test(a[1])?"upper-alpha":"decimal":"decimal";f="ol"}else{a=/[l\u00B7\u2002]/.test(a[1])?"disc":/[\u006F\u00D8]/.test(a[1])?"circle":/[\u006E\u25C6]/.test(a[1])?"square":"disc";f="ul"}else{a="decimal";f="ol"}e.attributes={"ke:listtype":f,style:"list-style-type:"+a+";"};e.add(new n.HtmlParser.Text(b));return e}function c(a){var b=
a.attributes,e;if((e=a.removeAnyChildWithName("ke:listbullet"))&&e.length&&(e=e[0])){a.name="ke:li";if(b.style)b.style=d([["text-indent"],["line-height"],[/^margin(:?-left)?$/,null,function(f){f=f.split(" ");f=f[3]||f[1]||f[0];f=parseInt(f,10);if(!i&&r&&f>r)i=f-r;b["ke:margin"]=r=f}]],A)(b.style,a)||"";e=e.attributes;a.addStyle(e.style);x.mix(b,e);return true}return false}function d(a,b){return function(e,f){var l=[];String(e).replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,
function(p,o,s){o=o.toLowerCase();o=="font-family"&&(s=s.replace(/["']/g,""));for(var C,q,K,z=0;z<a.length;z++)if(a[z]){p=a[z][0];C=a[z][1];q=a[z][2];K=a[z][3];if(o.match(p)&&(!C||s.match(C))){o=K||o;b&&(q=q||s);if(typeof q=="function")q=q(s,f,o);if(q&&q.push){o=q[0];q=q[1]}typeof q=="string"&&l.push([o,q]);return}}!b&&l.push([o,s])});for(var w=0;w<l.length;w++)l[w]=l[w].join(":");return l.length?l.join(";")+";":false}}function h(a){a=a.children;for(var b,e,f,l,w,p,o,s=0;s<a.length;s++){b=a[s];if("ke:li"==
b.name){b.name="li";b=b;e=b.attributes;f=b.attributes["ke:listtype"];l=parseInt(e["ke:indent"],10)||i&&Math.ceil(e["ke:margin"]/i)||1;e.style&&(e.style=d([["list-style-type",f=="ol"?"decimal":"disc"]],A)(e.style)||"");if(p){if(l>o){p=new n.HtmlParser.Element(f);p.add(b);w.add(p)}else{if(l<o){w=o-l;for(var C;w--&&(C=p.parent);)p=C.parent}p.add(b)}a.splice(s--,1)}else{p=new n.HtmlParser.Element(f);p.add(b);a[s]=p}w=b;o=l}else p=null}i=0}var m=d([[/mso/i],[/w:WordDocument/i],[/^-ms/i],[/^-moz/i],[/^-webkit/i]],
A),i,r=0,u=J.parentOf("ol"),D={elementNames:[[/^script$/i,""],[/^bgsound/i,""],[/^iframe$/i,""],[/^style$/i,""],[/^link$/i,""],[/^meta$/i,""],[/^\?xml.*$/i,""],[/^.*namespace.*$/i,""]],root:function(a){a.filterChildren();h(a)},elements:{p:function(a){a.filterChildren();if(c(a))return A},$:function(a){var b=a.name||"";if(b.indexOf(":")!=-1&&!/^ke/.test(b)){if(b=="v:imagedata"){if(a.attributes["o:href"]){a.attributes.src=a.attributes["o:href"];delete a.attributes["o:href"]}if(b=a.attributes["o:title"]){a.attributes.title=
b;delete a.attributes["o:title"]}a.name="img";return}delete a.name}if(b in u){a.filterChildren();h(a)}},span:function(a){if(!y.gecko&&g(a.parent))return false;if(!y.gecko&&g(a)){a=(a=a.firstChild(function(e){return e.value||e.name=="img"}))&&(a.value||"l.");var b=a.match(/^([^\s]+?)([.)]?)$/);return k(b,a)}}},attributes:{"class":function(a){if(!a||/(^|\s+)Mso/.test(a))return false;return a},style:function(a){a=m(a);if(!a)return false;return a}},attributeNames:[[/^on/,"ke_on"],[/^lang$/,""]]},j={comment:!y.ie?
function(a,b){var e=a.match(/<img.*?>/),f=a.match(/^\[if !supportLists\]([\s\S]*?)\[endif\]$/);if(f){f=(e=f[1]||e&&"l.")&&e.match(/>([^\s]+?)([.)]?)</);return k(f,e)}if(y.gecko&&e){e=n.HtmlParser.Fragment.FromHtml(e[0]).children[0];(f=(f=(f=b.previous)&&f.value.match(/<v:imagedata[^>]*o:href=['"](.*?)['"]/))&&f[1])&&(e.attributes.src=f);return e}return false}:function(){return false}},t={elementNames:[[/^ke:/,""],[/^\?xml:namespace$/,""]],elements:{$:function(a){var b=a.attributes;if(b)for(var e=
["name","href","src"],f,l=0;l<e.length;l++){f="_ke_saved_"+e[l];f in b&&delete b[e[l]]}return a},embed:function(a){var b=a.parent;if(b&&b.name=="object"){var e=b.attributes.width;b=b.attributes.height;e&&(a.attributes.width=e);b&&(a.attributes.height=b)}},param:function(a){a.children=[];a.isEmpty=true;return a},a:function(a){if(!a.children.length&&x.isEmptyObject(a.attributes))return false},span:function(a){if(!a.children.length&&x.isEmptyObject(a.attributes))return false}},attributes:{style:function(a){if(!x.trim(a))return false}},
attributeNames:[[/^_ke_saved_/,""],[/^ke_on/,"on"],[/^_ke.*/,""],[/^_ks.*/,""],[/^ke:.*$/,""]],comment:function(a){if(a.substr(0,E.length)==E){a=a.substr(E.length,3)=="{C}"?a.substr(E.length+3):a.substr(E.length);return new n.HtmlParser.cdata(decodeURIComponent(a))}return a}};if(y.ie)t.attributes.style=function(a){return a.replace(/(^|;)([^:]+)/g,function(b){return b.toLowerCase()})};B.addRules(t);G.addRules(D);H.addRules(D);H.addRules(j)})();(function(){function g(j){for(var t=j.children.length,
a=j.children[t-1];a&&a.type==F.NODE_TEXT&&!x.trim(a.value);)a=j.children[--t];return a}function k(j){var t=g(j);return!t||t.type==F.NODE_ELEMENT&&t.name=="br"||j.name=="form"&&t.name=="input"}function c(j,t){var a=j.children,b=g(j);if(b){if((t||!y.ie)&&b.type==F.NODE_ELEMENT&&b.name=="br")a.pop();b.type==F.NODE_TEXT&&m.test(b.value)&&a.pop()}}function d(j){c(j,true);if(k(j))if(y.ie)j.add(new n.HtmlParser.Text("\u00a0"));else{j.add(new n.HtmlParser.Text("&nbsp;"));j.add(new n.HtmlParser.Element("br",{}))}}
function h(j){c(j,false);k(j)&&j.add(new n.HtmlParser.Text("\u00a0"))}var m=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,i=n.XHTML_DTD,r=n.Utils.mix({},i.$block,i.$listItem,i.$tableContent),u;for(u in r)if(r.hasOwnProperty(u))"br"in i[u]||delete r[u];delete r.td;delete r.pre;i={elements:{}};var D={elements:{}};for(u in r)if(r.hasOwnProperty(u)){i.elements[u]=d;D.elements[u]=h}G.addRules(i);B.addRules(D);H.addRules(i)})();(function(){B.addRules({text:function(g){return g.replace(/\xa0/g,"&nbsp;")}})})();var M=/<(a|area|img|input)\b([^>]*)>/gi,
N=/\b(href|src|name)\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|(?:[^ "'>]+))/gi,E="{ke_protected}";I.htmlDataProcessor={wordFilter:H,dataFilter:G,htmlFilter:B,toHtml:function(g,k){var c=new v.HtmlWriter;v.Fragment.FromHtml(g,k).writeHtml(c,B);return c.getHtml(true)},toDataFormat:function(g,k,c){c=c||G;if(y.gecko)g=g.replace(/(<!--\[if[^<]*?\])--\>([\S\s]*?)<!--(\[endif\]--\>)/gi,"$1$2$3");g=L(g);var d=new O("<div>");d.html("a"+g);g=d.html().substr(1);d=new v.BasicWriter;g=v.Fragment.FromHtml(g,k);d.reset();
g.writeHtml(d,c);return g=d.getHtml(true)},toServer:function(g,k){var c=new v.BasicWriter;v.Fragment.FromHtml(g,k).writeHtml(c,B);return c.getHtml(true)}}}},{attach:false});
