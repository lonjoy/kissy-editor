KISSY.Editor.add("definition",function(g){function v(){return x+"<html><head><title>kissy-editor</title><link href='"+g.Config.base+y+"' rel='stylesheet'/></head><body class='ke-editor'>&nbsp;</body><html>"}var k=KISSY,c=k.UA,p=k.DOM,m=k.Node,q=k.Event,z=g.focusManager,A=g.Utils.tryThese,x="<!doctype html>",y=g.Utils.debugUrl("assets/editor-iframe.css"),B=1,C="<div  class='ke-editor-wrap'  > <div class='"+".ke-editor-tools".substring(1)+"'></div><div class='"+".ke-textarea-wrap".substring(1)+'\'><iframe  style="width:100%;height:100%;border:none;"  width="100%"  height="100%"  frameborder="0"  title="kissy-editor"  src="'+
(c.ie?"javascript:void(function(){"+encodeURIComponent("document.open();document.close();")+"}())":"")+'"  tabIndex="'+(c.webkit?-1:"$(tabIndex)")+'"  allowTransparency="true" ></iframe></div><div class=\''+".ke-editor-status".substring(1)+"'></div></div>";k.augment(g,{init:function(a){var b=this,e=new m(C.replace(/\$\(tabIndex\)/,a.attr("tabIndex")));e.on("mousedown",function(r){if(c.webkit){var d=p._4e_name(r.target);if(d=="select"||d=="option")return true}r.halt()});b.editorWrap=e;b._UUID=B++;
b.wrap=e.one(".ke-textarea-wrap");b.iframe=b.wrap.one("iframe");b.toolBarDiv=e.one(".ke-editor-tools");b.textarea=a;b.statusDiv=e.one(".ke-editor-status");b.toolBarDiv._4e_unselectable();b._commands={};b._plugins={};var n=a._4e_style("width"),t=a._4e_style("height");if(n){e.css("width",n);a.css("width","100%")}b.textarea.css("display","none");e.insertAfter(a);b.wrap[0].appendChild(a[0]);if(t){b.wrap.css("height",t);a.css("height","100%")}a=b.iframe;b.on("dataReady",function(){b.ready=true;g.fire("instanceCreated",
{editor:b})});c.gecko?a.on("load",b._initIFrame,b):b._initIFrame()},addCommand:function(a,b){this._commands[a]=b},execCommand:function(a){this.fire("save");this._commands[a].exec(this);this.fire("save")},getData:function(){if(g.HtmlDataProcessor)return g.HtmlDataProcessor.toHtml(this.document.body.innerHTML,"p");return this.document.body.innerHTML},setData:function(a){if(g.HtmlDataProcessor)a=g.HtmlDataProcessor.toDataFormat(a,"p");this.document.body.innerHTML=a},sync:function(){this.textarea.val(this.getData())},
_getRawData:function(){return this.document.body.innerHTML},_setRawData:function(a){this.document.body.innerHTML=a},_hideSource:function(){this.iframe.css("display","");this.textarea.css("display","none");this.toolBarDiv.children().css("visibility","");this.statusDiv.children().css("visibility","")},_showSource:function(){this.textarea.css("display","");this.iframe.css("display","none");this.toolBarDiv.children().css("visibility","hidden");this.toolBarDiv.all(".ke-tool-editor-source").css("visibility",
"");this.statusDiv.children().css("visibility","hidden");c.ie<8&&this.textarea.css("height",this.wrap.css("height"))},_prepareIFrameHtml:v,getSelection:function(){var a=new g.Selection(this.document);return!a||a.isInvalid?null:a},focus:function(){var a=p._4e_getWin(this.document);c.webkit&&a&&a.parent&&a.parent.focus();a&&a.focus();this.document&&this.document.body.focus();this.notifySelectionChange()},blur:function(){p._4e_getWin(this.document).blur();this.document&&this.document.body.blur()},_initIFrame:function(){function a(f){A(function(){d.designMode=
"on";setTimeout(function(){d.designMode="off";h.focus();if(!arguments.callee.retry)arguments.callee.retry=true},50)},function(){d.designMode="off";p.attr(h,"contentEditable",false);p.attr(h,"contentEditable",true);!f&&a(1)})}var b=this,e=b.iframe,n=b.textarea[0],t=v(),r=e[0].contentWindow,d=r.document;b.document=d;e.detach();d.open("text/html","replace");d.write(t);d.close();var h=d.body;if(c.ie){h.hideFocus=true;h.disabled=true;h.contentEditable=true;h.removeAttribute("disabled")}else setTimeout(function(){if(c.gecko||
c.opera)h.contentEditable=true;else if(c.webkit)h.parentNode.contentEditable=true;else d.designMode="on"},0);try{d.execCommand("enableObjectResizing",false,true)}catch(u){}try{d.execCommand("enableInlineTableEditing",false,true)}catch(i){}c.webkit&&q.on(d,"mousedown",function(f){f=new m(f.target);k.inArray(f._4e_name(),["img","hr","input","textarea","select"])&&b.getSelection().selectElement(f)});if(c.webkit){q.on(d,"click",function(f){var j=new m(f.target);k.inArray(j._4e_name(),["input","select"])&&
f.preventDefault()});q.on(d,"mouseup",function(f){var j=new m(f.target);k.inArray(j._4e_name(),["input","textarea"])&&f.preventDefault()})}if(c.gecko||c.ie||c.opera){var l;l=new m(p.insertAfter((new m('<span style="position:absolute; left:-10000"></span>'))[0],n));l.on("focus",function(){b.focus()});b.on("destroy",function(){})}if(c.ie&&d.compatMode=="CSS1Compat"||c.gecko||c.opera){var s=new m(d.documentElement);s.on("mousedown",function(f){if(f.target===s[0]){c.gecko&&a(false);l[0].focus()}})}q.on(r,
"focus",function(){if(c.gecko)a(false);else c.opera&&h.focus();b.notifySelectionChange()});c.gecko&&q.on(b.document,"mousedown",function(){b.iframeFocus||a(false)});if(c.ie){q.on(d,"keydown",function(f){if(f.keyCode in{8:1,46:1}){var j=b.getSelection(),w=j.getSelectedElement();if(w){b.fire("save");var D=j.getRanges()[0].createBookmark();w._4e_remove();j.selectBookmarks([D]);b.fire("save");f.preventDefault()}}});if(d.compatMode=="CSS1Compat"){var o={33:1,34:1};q.on(d,"keydown",function(f){f.keyCode in
o&&setTimeout(function(){b.getSelection().scrollIntoView()},0)})}}setTimeout(function(){c.ie&&setTimeout(function(){if(d){h.runtimeStyle.marginBottom="0px";h.runtimeStyle.marginBottom=""}},1E3)},0);setTimeout(function(){b.fire("dataReady")},10);z.add(b)},addPlugin:function(a){this.ready?a():this.on("dataReady",a)},_monitor:function(){var a=this;a._monitorId&&clearTimeout(a._monitorId);a._monitorId=setTimeout(function(){var b=a.getSelection();if(b&&!b.isInvalid){b=b.getStartElement();var e=new g.ElementPath(b);
if(!a.previousPath||!a.previousPath.compare(e)){a.previousPath=e;a.fire("selectionChange",{selection:a,path:e,element:b})}}},200)},notifySelectionChange:function(){this.previousPath=null;this._monitor()},insertElement:function(a){var b=this;b.focus();var e=a._4e_name(),n=g.XHTML_DTD,t=g.RANGE,r=g.NODE,d=n.$block[e],h=b.getSelection(),u=h.getRanges(),i,l,s,o,f;b.fire("save");for(var j=u.length-1;j>=0;j--){i=u[j];i.deleteContents();l=!j&&a||a._4e_clone(true);if(d)for(;(o=i.getCommonAncestor(false,true))&&
(f=n[o._4e_name()])&&!(f&&f[e]);)if(o._4e_name()in n.span)i.splitElement(o);else if(i.checkStartOfBlock()&&i.checkEndOfBlock()){i.setStartBefore(o);i.collapse(true);o._4e_remove()}else i.splitBlock();i.insertNode(l);s||(s=l)}i.moveToPosition(s,t.POSITION_AFTER_END);(a=s._4e_nextSourceNode(true))&&a.type==r.NODE_ELEMENT&&i.moveToElementEditablePosition(a);h.selectRanges([i]);b.focus();l&&l._4e_scrollIntoView();setTimeout(function(){b.fire("save")},10)},insertHtml:function(a){if(g.HtmlDataProcessor)a=
g.HtmlDataProcessor.toDataFormat(a);if(c.webkit){a=p.create(a,null,this.document);a=a.nodeType==11?k.makeArray(a.childNodes):[a];for(var b=0;b<a.length;b++)this.insertElement(new m(a[b]))}else{var e=this;e.focus();e.fire("save");b=e.getSelection();if(c.ie){b=b.getNative();b.type=="Control"&&b.clear();b.createRange().pasteHTML(a)}else e.document.execCommand("inserthtml",false,a);e.focus();setTimeout(function(){e.fire("save")},10)}}})});
