KISSY.Editor.add("definition",function(k){var q=true,x=false,C=k.Utils,B=document,m=KISSY,j=m.UA,w=j.ie,r=m.DOM,n=m.Node,o=m.Event,E=k.focusManager,H=C.tryThese,I=1,i="document.open();"+(C.isCustomDomain()?'document.domain="'+B.domain+'";':"")+"document.close();",J="<div  class='ke-editor-wrap'  > <div class='"+".ke-editor-tools".substring(1)+"' ></div><div class='"+".ke-textarea-wrap".substring(1)+'\'><iframe  style="width:100%;height:100%;border:none;"  width="100%"  height="100%"  frameborder="0"  title="kissy-editor" '+
(w?' src="javascript:void(function(){'+encodeURIComponent(i)+'}())"':"")+' allowTransparency="true" ></iframe></div><div class=\''+".ke-editor-status".substring(1)+"'></div></div>",F,A;F=k.SOURCE_MODE=0;A=k.WYSIWYG_MODE=1;k.SOURCE_MODE=F;k.WYSIWYG_MODE=A;m.augment(k,{init:function(b){var a=this;a.__commands={};a.__dialogs={};a.__plugins={};w&&r.addClass(B.body,"ke-ie"+w);if(j.trident)r.addClass(B.body,"ke-trident"+j.trident);else if(j.gecko)r.addClass(B.body,"ke-gecko");else j.webkit&&r.addClass(B.body,
"ke-webkit");var c=new n(J);a.editorWrap=c;a._UUID=I++;E.register(a);a.wrap=c.one(".ke-textarea-wrap");a.wrap=a.wrap;a.iframe=a.wrap.one("iframe");a.iframe=a.iframe;a.toolBarDiv=c.one(".ke-editor-tools");a.toolBarDiv=a.toolBarDiv;a.textarea=b;a.textarea=a.textarea;a.statusDiv=c.one(".ke-editor-status");a.statusDiv=a.statusDiv;C.preventFocus(a.toolBarDiv);var d=b._4e_style("width"),e=b._4e_style("height");if(d){c.css("width",d);b.css("width","100%")}a.textarea.css("display","none");c.insertAfter(b);
a.wrap[0].appendChild(b[0]);if(e){a.wrap.css("height",e);b.css("height","100%")}c=a.iframe;if(b._4e_hasAttribute("tabindex"))c[0].tabIndex=j.webkit?-1:b[0].tabIndex;a.on("dataReady",function(){a._ready=q;k.fire("instanceCreated",{editor:a})});j.gecko?c.on("load",a._setUpIFrame,a):a._setUpIFrame();a.cfg.attachForm&&b[0].form&&a._attachForm()},destroy:function(){if(!this.__destroyed){var b=this.editorWrap,a=this.textarea,c=this.document,d=this.iframe[0].contentWindow;this.sync();k.focusManager.remove(this);
o.remove(c);o.remove(c.documentElement);o.remove(c.body);o.remove(d);this.iframe.detach();c=this.__plugins;for(var e in c)if(c.hasOwnProperty(e)){d=c[e];d.destroy&&d.destroy()}this.fire("destroy");a.insertBefore(b);b.remove();a.css({width:b[0].style.width,height:this.wrap.css("height")});a.show();this.__commands=this.__dialogs=this.__plugins=null;this.detach();this.__destroyed=true}},_attachForm:function(){var b=this,a=new n(b.textarea[0].form);a.on("submit",b.sync,b);b.on("destroy",function(){a.detach("submit",
b.sync,b)})},useDialog:function(b,a){var c=this,d=k.Overlay;d&&d.loading();c.use(b,function(){var e=c.getDialog(b);if(e){a(e);d&&d.unloading()}else m.later(arguments.callee,50,false,c)})},addDialog:function(b,a){this.__dialogs[b]=a},getDialog:function(b){return this.__dialogs[b]},destroyDialog:function(b){var a=this.__dialogs[b];a&&a.destroy();this.__dialogs[b]=null},addCommand:function(b,a){this.__commands[b]=a},hasCommand:function(b){return this.__commands[b]},execCommand:function(b){var a=this.__commands[b],
c=m.makeArray(arguments);c.shift();c.unshift(this);return a.exec.apply(a,c)},getMode:function(){return this.textarea.css("display")=="none"?A:F},getData:function(b){var a;a=this.getMode()==A?this.document&&this.document.body?this.document.body.innerHTML:"":this.textarea.val();if(this.htmlDataProcessor)a=b?this.htmlDataProcessor.toHtml(a,"p"):this.htmlDataProcessor.toServer(a,"p");a=m.trim(a);if(/^<p>((&nbsp;)|\s)*<\/p>$/.test(a))a="";return a},setData:function(b){var a=b;if(this.htmlDataProcessor)a=
this.htmlDataProcessor.toDataFormat(b,"p");this.document.body.innerHTML=a;if(!a)this.document.body.innerHTML=a;this.getMode()!=A&&this.textarea.val(b)},sync:function(){this.textarea.val(this.getData())},_getRawData:function(){return this.document.body.innerHTML},_setRawData:function(b){this.document.body.innerHTML=b},_prepareIFrameHtml:function(b){var a=this.cfg,c=a.customStyle;a=a.customLink;var d="",e=k.Utils.debugUrl("../theme/editor-iframe.css");if(a)for(var f=0;f<a.length;f++)d+='<link href="'+
a[f]+'" rel="stylesheet"/>';return"<!doctype html><html><head><title>${title}</title><link href='"+e+"' rel='stylesheet'/><style>"+(c||"")+"</style>"+d+"</head><body class='ke-editor'>&nbsp;"+(b?'<script id="ke_actscript" type="text/javascript">'+(C.isCustomDomain()?'document.domain="'+B.domain+'";':"")+'window.parent.KISSY.Editor._initIFrame("'+b+'");<\/script>':"")+"</body></html>"},getSelection:function(){return k.Selection.getSelection(this.document)},focus:function(){var b=this.document,a=r._4e_getWin(b);
a&&a.parent&&a.parent.focus();a&&a.focus();b&&b.body.focus();this.notifySelectionChange()},blur:function(){r._4e_getWin(this.document).blur();this.document&&this.document.body.blur()},addCustomStyle:function(b){var a=this.cfg,c=this.document;a.customStyle=a.customStyle||"";a.customStyle+="\n"+b;a=c.createElement("style");c.getElementsByTagName("head")[0].appendChild(a);if(a.styleSheet)a.styleSheet.cssText=b;else a.appendChild(c.createTextNode(b))},addCustomLink:function(b){var a=this.cfg,c=this.document;
a.customLink=a.customLink||[];a.customLink.push(b);a=c.createElement("link");a.rel="stylesheet";c.getElementsByTagName("head")[0].appendChild(a);a.href=b},removeCustomLink:function(b){for(var a=this.cfg,c=m.makeArray(this.document.getElementsByTagName("link")),d=0;d<c.length;d++)c[d].href==b&&r._4e_remove(c[d]);a.customLink=a.customLink||[];a=a.customLink;b=m.indexOf(b,a);b!=-1&&a.splice(b,1)},_setUpIFrame:function(){function b(){f=e.document;a.document=f;c.detach();f.open("text/html","replace");
f.write(d);f.close()}var a=this,c=a.iframe,d=a._prepareIFrameHtml(a._UUID),e=c[0].contentWindow,f;try{f=e.document}catch(s){c[0].src=c[0].src;if(w<7){setTimeout(b,10);return}}b()},ready:function(b){this._ready?b():this.on("dataReady",b)},addPlugin:function(b,a,c){this.__plugins=this.__plugins;c=c||{};c.func=a;this.__plugins[b]=c},usePlugin:function(b){var a=this.__plugins[b];if(a)if(!(a.status&&!a.duplicate)){b=this.Env.mods[b].requires||[];for(var c=0;c<b.length;c++)this.usePlugin(b[c]);a.func.call(a);
a.status=1}},_monitor:function(){var b=this;b._monitorId&&clearTimeout(b._monitorId);b._monitorId=setTimeout(function(){var a=b.getSelection();if(a&&!a.isInvalid){var c=a.getStartElement(),d=new k.ElementPath(c);if(!b.previousPath||!b.previousPath.compare(d)){b.previousPath=d;b.fire("selectionChange",{selection:a,path:d,element:c})}}},100)},notifySelectionChange:function(){this.previousPath=null;this._monitor()},insertElement:function(b,a,c){var d=this;if(d.getMode()===A){d.focus();var e,f=b._4e_name(),
s=k.XHTML_DTD,l=k.RANGE,t=k.NODE,y=s.$block[f],z=d.getSelection(),g=z&&z.getRanges(),h,u,v,p;if(!g||g.length==0){var G=arguments,K=G.callee;setTimeout(function(){K.apply(d,G)},30)}else{d.fire("save");for(var D=g.length-1;D>=0;D--){h=g[D];h.deleteContents();e=!D&&b||b._4e_clone(q);a&&a(e);if(y)for(;(v=h.getCommonAncestor(x,q))&&(p=s[v._4e_name()])&&!(p&&p[f]);)if(v._4e_name()in s.span)h.splitElement(v);else if(h.checkStartOfBlock()&&h.checkEndOfBlock()){h.setStartBefore(v);h.collapse(q);v._4e_remove()}else h.splitBlock();
h.insertNode(e);u||(u=e)}if(u){f=u._4e_nextSourceNode(q);s=d.document;p=k.XHTML_DTD;if(p.$inline[e._4e_name()]){f=new n(s.createTextNode(" "));f.insertAfter(u)}else if(f){if(f._4e_name()=="br"&&p[f.parent()._4e_name()].p){p=new n("<p>&nbsp;</p>",null,s);f[0].parentNode.replaceChild(p[0],f[0]);f=p}}else{p=new n("<p>&nbsp;</p>",null,s);p.insertAfter(u);f=p}h.moveToPosition(u,l.POSITION_AFTER_END);f&&f[0].nodeType==t.NODE_ELEMENT&&h.moveToElementEditablePosition(f);z.selectRanges([h]);d.focus();e&&e._4e_scrollIntoView();
d._saveLater();c&&c(e)}}}},insertHtml:function(b,a){var c=this;if(c.getMode()===A){if(c.htmlDataProcessor)b=c.htmlDataProcessor.toDataFormat(b,null,a);c.focus();c.fire("save");var d=c.document,e=0;if(w){var f=d.selection;f.type=="Control"&&f.clear();try{f.createRange().pasteHTML(b)}catch(s){m.log("insertHtml error in ie")}}else try{d.execCommand("inserthtml",x,b)}catch(l){setTimeout(function(){if(c.getSelection().getRanges().length==0){var t=new k.Range(d),y=r._4e_first(d.body,function(z){return z[0].nodeType==
1&&z._4e_name()!="br"});if(!y){y=new n(d.createElement("p"));d.body.appendChild(y[0])}t.setStartAt(y,k.RANGE.POSITION_AFTER_START);t.select()}d.execCommand("inserthtml",x,b)},e=100)}setTimeout(function(){c.getSelection().scrollIntoView()},e);c._saveLater(e)}},_saveLater:function(b){var a=this;if(a.__saveTimer){clearTimeout(a.__saveTimer);a.__saveTimer=null}a.__saveTimer=setTimeout(function(){a.fire("save")},b||0)}});k._initIFrame=function(b){function a(g){H(function(){e.designMode="on";setTimeout(function(){e.designMode=
"off";l.focus();if(!arguments.callee.retry)arguments.callee.retry=q},50)},function(){e.designMode="off";r.attr(l,"contentEditable",x);r.attr(l,"contentEditable",q);!g&&a(1)})}var c=E.getInstance(b);b=c.textarea[0];var d=c.iframe[0].contentWindow,e=c.document,f=c.cfg,s=e.getElementById("ke_actscript");r._4e_remove(s);var l=e.body;if(w){l.hideFocus=q;l.disabled=q;l.contentEditable=q;l.removeAttribute("disabled")}else setTimeout(function(){if(j.gecko||j.opera)l.contentEditable=q;else if(j.webkit)l.parentNode.contentEditable=
q;else e.designMode="on"},0);if(j.webkit){o.on(e,"click",function(g){var h=new n(g.target);m.inArray(h._4e_name(),["input","select"])&&g.preventDefault()});o.on(e,"mouseup",function(g){var h=new n(g.target);m.inArray(h._4e_name(),["input","textarea"])&&g.preventDefault()})}if(j.gecko||w||j.opera){var t;t=(new n('<span tabindex="-1" style="position:absolute; left:-10000" role="presentation"></span>')).insertAfter(b);t.on("focus",function(){c.focus()});c.activateGecko=function(){j.gecko&&c.iframeFocus&&
t[0].focus()};c.on("destroy",function(){t.detach();t.remove()})}if(e.documentMode||j.gecko||j.opera){var y=e.documentElement;o.on(y,"mousedown",function(g){if((new n(g.target))[0]==y){j.gecko&&a(x);t[0].focus()}})}o.on(d,"focus",function(){if(j.gecko)a(x);else j.opera&&l.focus();c.notifySelectionChange()});j.gecko&&o.on(c.document,"mousedown",function(){c.iframeFocus||a(x)});if(w){o.on(e,"keydown",function(g){if(g.keyCode in{8:1,46:1}){var h=c.getSelection(),u=h.getSelectedElement();if(u){c.fire("save");
var v=h.getRanges()[0].createBookmark();u._4e_remove();h.selectBookmarks([v]);c.fire("save");g.preventDefault()}}});if(e.compatMode=="CSS1Compat"){var z={33:1,34:1};o.on(e,"keydown",function(g){g.keyCode in z&&setTimeout(function(){c.getSelection().scrollIntoView()},0)})}}setTimeout(function(){w&&setTimeout(function(){if(e){l.runtimeStyle.marginBottom="0px";l.runtimeStyle.marginBottom=""}},1E3)},0);setTimeout(function(){c.fire("dataReady");var g=f.disableObjectResizing,h=f.disableInlineTableEditing;
if(g||h)try{e.execCommand("enableObjectResizing",x,!g);e.execCommand("enableInlineTableEditing",x,!h)}catch(u){o.on(l,w?"resizestart":"resize",function(v){var p=new n(v.target);if(g||p._4e_name()==="table"&&h)v.preventDefault()})}},10);j.webkit&&o.on(e,"mousedown",function(g){g=new n(g.target);m.inArray(g._4e_name(),["img","hr","input","textarea","select"])&&c.getSelection().selectElement(g)});j.gecko&&o.on(e,"dragstart",function(g){var h=new n(g.target);h._4e_name()==="img"&&/ke_/.test(h[0].className)&&
g.preventDefault()});E.add(c)};document.documentMode>7&&function(){for(var b=m.all("link"),a=0;a<b.length;a++){var c=new n(b[a]),d=c.attr("href");d.indexOf("editor-pkg-min-mhtml.css")!=-1&&c.attr("href",d.replace(/editor-pkg-min-mhtml\.css/g,"editor-pkg-min-datauri.css"))}}();i=k.prototype;C.extern(i,{removeCustomLink:i.removeCustomLink,addCustomLink:i.addCustomLink,setData:i.setData,getData:i.getData,insertElement:i.insertElement,insertHtml:i.insertHtml,ready:i.ready,addCustomStyle:i.addCustomStyle,
addCommand:i.addCommand,hasCommand:i.hasCommand,execCommand:i.execCommand,useDialog:i.useDialog,addDialog:i.addDialog,getDialog:i.getDialog,getMode:i.getMode,sync:i.sync,getSelection:i.getSelection,focus:i.focus,blur:i.blur,notifySelectionChange:i.notifySelectionChange})});
