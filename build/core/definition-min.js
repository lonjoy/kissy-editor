KISSY.Editor.add("definition",function(h){function x(a){return y+"<html><head><title>kissy-editor</title><link href='"+h.Config.base+z+"' rel='stylesheet'/></head><body class='ke-editor'>&nbsp;</body><html>"+(a?'<script id="ke_actscrpt" type="text/javascript">'+(h.Utils.isCustomDomain()?'document.domain="'+document.domain+'";':"")+'window.parent.KISSY.Editor._initIFrame("'+a+'");<\/script>':"")}var p=KISSY,f=p.UA,r=p.DOM,n=p.Node,q=p.Event,w=h.focusManager,A=h.Utils.tryThese,y="<!doctype html>",z=
h.Utils.debugUrl("theme/editor-iframe.css"),B=1,C="document.open();"+(h.Utils.isCustomDomain()?'document.domain="'+document.domain+'";':"")+"document.close();",D="<div  class='ke-editor-wrap'  > <div class='"+".ke-editor-tools".substring(1)+"'></div><div class='"+".ke-textarea-wrap".substring(1)+'\'><iframe  style="width:100%;height:100%;border:none;"  width="100%"  height="100%"  frameborder="0"  title="kissy-editor"  src="'+(f.ie?"javascript:void(function(){"+encodeURIComponent(C)+"}())":"")+'"  tabIndex="'+
(f.webkit?-1:"$(tabIndex)")+'"  allowTransparency="true" ></iframe></div><div class=\''+".ke-editor-status".substring(1)+"'></div></div>";h.SOURCE_MODE=0;h.WYSIWYG_MODE=1;p.augment(h,{init:function(a){var b=this,c=new n(D.replace(/\$\(tabIndex\)/,a.attr("tabIndex")));c.on("mousedown",function(m){if(f.webkit){var s=r._4e_name(m.target);if(s=="select"||s=="option")return true}m.halt()});b.editorWrap=c;b._UUID=B++;w.register(b);b.wrap=c.one(".ke-textarea-wrap");b.iframe=b.wrap.one("iframe");b.toolBarDiv=
c.one(".ke-editor-tools");b.textarea=a;b.statusDiv=c.one(".ke-editor-status");b.toolBarDiv._4e_unselectable();b._commands={};var g=a._4e_style("width"),e=a._4e_style("height");if(g){c.css("width",g);a.css("width","100%")}b.textarea.css("display","none");c.insertAfter(a);b.wrap[0].appendChild(a[0]);if(e){b.wrap.css("height",e);a.css("height","100%")}a=b.iframe;b.on("dataReady",function(){b.ready=true;h.fire("instanceCreated",{editor:b})});f.gecko?a.on("load",b._setUpIFrame,b):b._setUpIFrame()},addCommand:function(a,
b){this._commands[a]=b},hasCommand:function(a){return this._commands[a]},execCommand:function(a){this.fire("save");a=this._commands[a].exec(this);this.fire("save");return a},getMode:function(){return this.textarea.css("display")=="none"?h.WYSIWYG_MODE:h.SOURCE_MODE},getData:function(){var a;a=this.getMode()==h.WYSIWYG_MODE?this.document.body.innerHTML:this.textarea.val();if(this.htmlDataProcessor)return this.htmlDataProcessor.toHtml(a,"p");return a},setData:function(a){if(this.htmlDataProcessor)a=
this.htmlDataProcessor.toDataFormat(a,"p");this.document.body.innerHTML=a;if(this.getMode()==h.WYSIWYG_MODE)this.document.body.innerHTML=a;else this.textarea.val(a)},sync:function(){this.textarea.val(this.getData())},_getRawData:function(){return this.document.body.innerHTML},_setRawData:function(a){this.document.body.innerHTML=a},_hideSource:function(){this.iframe.css("display","");this.textarea.css("display","none");this.fire("wysiwygmode")},_showSource:function(){this.textarea.css("display","");
this.iframe.css("display","none");f.ie<8&&this.textarea.css("height",this.wrap.css("height"));this.fire("sourcemode")},_prepareIFrameHtml:x,getSelection:function(){var a=new h.Selection(this.document);return!a||a.isInvalid?null:a},focus:function(){var a=r._4e_getWin(this.document);f.webkit&&a&&a.parent&&a.parent.focus();a&&a.focus();this.document&&this.document.body.focus();this.notifySelectionChange()},blur:function(){r._4e_getWin(this.document).blur();this.document&&this.document.body.blur()},_setUpIFrame:function(){function a(){m=
e.document;b.document=m;c.detach();m.open("text/html","replace");m.write(g);m.close()}var b=this,c=b.iframe,g=x(b._UUID),e=c[0].contentWindow,m;try{m=e.document}catch(s){c[0].src=c[0].src;if(f.ie&&f.ie<7){setTimeout(a,10);return}}a()},addPlugin:function(a){this.ready?a():this.on("dataReady",a)},_monitor:function(){var a=this;a._monitorId&&clearTimeout(a._monitorId);a._monitorId=setTimeout(function(){var b=a.getSelection();if(b&&!b.isInvalid){b=b.getStartElement();var c=new h.ElementPath(b);if(!a.previousPath||
!a.previousPath.compare(c)){a.previousPath=c;a.fire("selectionChange",{selection:a,path:c,element:b})}}},100)},notifySelectionChange:function(){this.previousPath=null;this._monitor()},insertElement:function(a,b){var c=this;c.focus();var g=a._4e_name(),e=h.XHTML_DTD,m=h.RANGE,s=h.NODE,k=e.$block[g],t=c.getSelection(),u=t.getRanges(),l,d,i,o,j;c.fire("save");for(var v=u.length-1;v>=0;v--){l=u[v];l.deleteContents();d=!v&&a||a._4e_clone(true);b&&b(d);if(k)for(;(o=l.getCommonAncestor(false,true))&&(j=
e[o._4e_name()])&&!(j&&j[g]);)if(o._4e_name()in e.span)l.splitElement(o);else if(l.checkStartOfBlock()&&l.checkEndOfBlock()){l.setStartBefore(o);l.collapse(true);o._4e_remove()}else l.splitBlock();l.insertNode(d);i||(i=d)}g=i._4e_nextSourceNode(true);e=c.document;j=h.XHTML_DTD;if(j.$inline[d._4e_name()]){g=new n(e.createTextNode(" "));g.insertAfter(i)}else if(g){if(g._4e_name()=="br"&&j[g.parent()._4e_name()].p){j=new n("<p>&nbsp;</p>",null,e);g[0].parentNode.replaceChild(j[0],g[0]);g=j}}else{j=new n("<p>&nbsp;</p>",
null,e);j.insertAfter(i);g=j}l.moveToPosition(i,m.POSITION_AFTER_END);g&&g[0].nodeType==s.NODE_ELEMENT&&l.moveToElementEditablePosition(g);t.selectRanges([l]);c.focus();d&&d._4e_scrollIntoView();setTimeout(function(){c.fire("save")},10);return d},insertHtml:function(a){var b=this;if(b.htmlDataProcessor)a=b.htmlDataProcessor.toDataFormat(a);if(f.webkit){a=r.create(a,null,this.document);a=a.nodeType==11?p.makeArray(a.childNodes):[a];for(var c=0;c<a.length;c++)b.insertElement(new n(a[c]))}else{b.focus();
b.fire("save");c=b.getSelection();if(f.ie){c=c.getNative();c.type=="Control"&&c.clear();c.createRange().pasteHTML(a)}else b.document.execCommand("inserthtml",false,a);b.focus();setTimeout(function(){b.fire("save")},10)}}});h._initIFrame=function(a){function b(d){A(function(){e.designMode="on";setTimeout(function(){e.designMode="off";k.focus();if(!arguments.callee.retry)arguments.callee.retry=true},10)},function(){e.designMode="off";r.attr(k,"contentEditable",false);r.attr(k,"contentEditable",true);
!d&&b(1)})}var c=w.getInstance(a);a=c.textarea[0];var g=c.iframe[0].contentWindow,e=c.document,m=c.cfg,s=e.getElementById("ke_actscrpt");s.parentNode.removeChild(s);var k=e.body;if(f.ie){k.hideFocus=true;k.disabled=true;k.contentEditable=true;k.removeAttribute("disabled")}else setTimeout(function(){if(f.gecko||f.opera)k.contentEditable=true;else if(f.webkit)k.parentNode.contentEditable=true;else e.designMode="on"},0);if(f.webkit){q.on(e,"click",function(d){var i=new n(d.target);p.inArray(i._4e_name(),
["input","select"])&&d.preventDefault()});q.on(e,"mouseup",function(d){var i=new n(d.target);p.inArray(i._4e_name(),["input","textarea"])&&d.preventDefault()})}if(f.gecko||f.ie||f.opera){var t;t=new n(r.insertAfter((new n('<span style="position:absolute; left:-10000"></span>'))[0],a));t.on("focus",function(){c.focus()});c.on("destroy",function(){})}if(f.ie&&e.compatMode=="CSS1Compat"||f.gecko||f.opera){var u=new n(e.documentElement);u.on("mousedown",function(d){if(d.target===u[0]){f.gecko&&b(false);
t[0].focus()}})}q.on(g,"focus",function(){if(f.gecko)b(false);else f.opera&&k.focus();c.notifySelectionChange()});f.gecko&&q.on(c.document,"mousedown",function(){c.iframeFocus||b(false)});if(f.ie){q.on(e,"keydown",function(d){if(d.keyCode in{8:1,46:1}){var i=c.getSelection(),o=i.getSelectedElement();if(o){c.fire("save");var j=i.getRanges()[0].createBookmark();o._4e_remove();i.selectBookmarks([j]);c.fire("save");d.preventDefault()}}});if(e.compatMode=="CSS1Compat"){var l={33:1,34:1};q.on(e,"keydown",
function(d){d.keyCode in l&&setTimeout(function(){c.getSelection().scrollIntoView()},0)})}}setTimeout(function(){f.ie&&setTimeout(function(){if(e){k.runtimeStyle.marginBottom="0px";k.runtimeStyle.marginBottom=""}},1E3)},0);setTimeout(function(){c.fire("dataReady");var d=m.disableObjectResizing,i=m.disableInlineTableEditing;if(d||i)try{e.execCommand("enableObjectResizing",false,!d);e.execCommand("enableInlineTableEditing",false,!i)}catch(o){q.on(k,f.ie?"resizestart":"resize",function(j){if(d||r._4e_name(j.target)===
"table"&&i)j.preventDefault()})}},10);f.webkit&&q.on(e,"mousedown",function(d){d=new n(d.target);p.inArray(d._4e_name(),["img","hr","input","textarea","select"])&&c.getSelection().selectElement(d)});f.gecko&&q.on(e,"dragstart",function(d){var i=new n(d.target);i._4e_name()==="img"&&/ke_/.test(i[0].className)&&d.preventDefault()});w.add(c)};f.gecko&&function(){var a=document.body;if(a){var b=a.getAttribute("onpageshow");a.setAttribute("onpageshow",(b?b+";":"")+"event.persisted && KISSY.Editor.focusManager.refreshAll();")}else window.addEventListener("load",
arguments.callee,false)}()});
