KISSY.add("editor",function(c,p){function g(e,j){var d=this;if(!(d instanceof g))return new g(e,j);if(c.isString(e))e=c.one(e);e=v._4e_wrap(e);j=j||{};j.pluginConfig=j.pluginConfig||{};d.cfg=j;c.app(d,c.EventTarget);d.use=function(k,q){if(c.isString(k))k=k.split(",");var l=k,i=[];i=c.indexOf("separator",l);var r=i!=-1;i=l.splice(0,r?i+1:l.length);r&&i.pop();i.length!=0?c.use.call(d,i.join(","),function(){r&&d.addPlugin(function(){g.Utils.addSeparator(d.toolBarDiv)});d.use(l,q)},{order:true,global:g}):
d.on("dataReady",function(){q&&q.call(d);d.setData(e.val());d.fire("save")});return d};d.init(e);return p}function m(e){if(!t)return e.replace(/\.(js|css)/i,"-min.$1");if(t==="dev")return"../src/"+e;return e}var v=c.DOM;c.app(g,c.EventTarget);g.Config.base=c.Config.base+"editor/";var t=c.Config.debug,n={htmlparser:{attach:false,path:m("plugins/htmldataprocessor/htmlparser/htmlparser.js")}},s=["utils","focusmanager","definition","dtd","dom","elementpath","walker","range","domiterator","selection",
"styles"],f=["flashutils","clipboard",{name:"colorsupport",requires:["overlay"]},{name:"forecolor",requires:["colorsupport"]},{name:"bgcolor",requires:["colorsupport"]},{name:"elementpaths"},"enterkey",{name:"pagebreak",requires:["fakeobjects"]},{name:"fakeobjects",requires:["htmldataprocessor"]},{name:"draft",requires:["localStorage"]},{name:"flash",requires:["flashsupport"]},{name:"flashsupport",requires:["flashutils","contextmenu","fakeobjects","overlay","bubbleview"]},{name:"font",requires:["select"]},
"format",{name:"htmldataprocessor",requires:["htmlparser-text"]},{name:"image",requires:["overlay","contextmenu","bubbleview"]},"indent","justify",{name:"link",requires:["bubbleview"]},"list","maximize",{name:"music",requires:["flashsupport"]},"preview","removeformat",{name:"smiley"},"sourcearea",{name:"table",requires:["overlay","contextmenu"]},{name:"templates",requires:["overlay"]},"undo",{name:"resize",requires:["dd"]}],u=[{name:"htmlparser-basicwriter",requires:["htmlparser"]},{name:"htmlparser-element",
requires:["htmlparser-fragment"]},{name:"htmlparser-filter",requires:["htmlparser-element"]},{name:"htmlparser-fragment",requires:["htmlparser-htmlwriter"]},{name:"htmlparser-htmlwriter",requires:["htmlparser-basicwriter"]},{name:"htmlparser-text",requires:["htmlparser-comment"]},{name:"htmlparser-comment",requires:["htmlparser-filter"]}],b,h,a,o;b=0;for(h=f.length;b<h;b++){a=f[b];if(c.isString(a))a=f[b]={name:a};a.requires=a.requires||[];a.requires=a.requires.concat(["button"])}f=[{name:"localStorage",
requires:["flashutils"]},{name:"button"},{name:"dd"},{name:"progressbar"},{name:"overlay",requires:["dd"]},{name:"contextmenu",requires:["overlay"]},{name:"bubbleview",requires:["overlay"]},{name:"select",requires:["overlay"]}].concat(f);b=0;for(h=f.length;b<h;b++){a=f[b];o=a.name;n[o]={attach:false,requires:a.requires,csspath:a.useCss?m("plugins/"+o+"/plugin.css"):p,path:m("plugins/"+o+"/plugin.js")}}b=0;for(h=u.length;b<h;b++){a=u[b];f=p;if(!c.isString(a)){f=a.requires;a=a.name}n[a]={attach:false,
requires:f,path:m("plugins/htmldataprocessor/htmlparser/"+a.substring(11)+".js")}}b=0;for(h=s.length;b<h;b++){a=s[b];n[a]={host:"editor",requires:b>0?s[b-1]:[]}}g.add(n);c.Editor=g});
