KISSY.Editor.add("music",function(l){var c=KISSY.Editor,n=c.NODE;c.MusicInserter||function(){function g(a){g.superclass.constructor.call(this,a);a=this.get("editor");a._toolbars=a._toolbars||{};a._toolbars.music=this;this._init()}function h(a){return a.replace(/^.+niftyplayer\.swf\?file=/,"")}var f=KISSY,j=f.Node,d=f.DOM,o=c.ContextMenu,k=f.Event,p=c.SimpleOverlay,q=c.TripleButton,r='<object  width="165" height="37" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param value="'+
(c.Config.base+'plugins/music/niftyplayer.swf?file=#(music)&amp;as=0"')+' name="movie"/><param value="high" name="quality"/><param value="#FFFFFF" name="bgcolor"/><embed width="165" height="37" type="application/x-shockwave-flash" swliveconnect="true" src="'+(c.Config.base+'plugins/music/niftyplayer.swf?file=#(music)&amp;as=0"')+'quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" bgcolor="#FFFFFF" /></object>',s=/#\(music\)/g,t=["img.ke_music"];g.ATTRS={editor:{}};f.extend(g,
f.Base,{_init:function(){var a=this.get("editor"),b={};this.el=new q({contentCls:"ke-toolbar-music",title:"\u5206\u4eab\u97f3\u4e50",container:a.toolBarDiv});k.on(a.document,"dblclick",this._dblclick,this);for(var e in m)(function(i){b[i]=function(){a.fire("save");a.focus();m[i](a);a.fire("save")}})(e);o.register(a.document,{rules:t,width:"120px",funcs:b});this.el.on("offClick",this.show,this);c.Utils.lazyRun(this,"_prepare","_real")},_prepare:function(){var a=this,b=a.get("editor");a.content=new j("<div class='ke-popup-wrap' style='width:250px;padding:10px;'><p style='margin:0 0 10px'><label>\u8bf7\u8f93\u5165\u97f3\u4e50\u5730\u5740\uff1a<br/><input value='http://' style='width: 250px;' class='ke-music-url'/></label></p><p><button class='ke-music-insert'>\u63d2\u5165</button>&nbsp;<a href='#' class='ke-music-cancel'>\u53d6\u6d88</a></p></div>");
a.d=new p({el:a.content});a.d.on("hide",function(){a.selectedFlash=null;b.focus()});document.body.appendChild(a.content[0]);var e=a.content.one(".ke-music-cancel"),i=a.content.one(".ke-music-insert");a.musicUrl=a.content.one(".ke-music-url");e.on("click",function(u){a.d.hide();u.halt()},a);k.on(document,"click",a.hide,a);k.on(b.document,"click",a.hide,a);i.on("click",function(){a._insert()})},hide:function(a){var b=this;d._4e_ascendant(a.target,function(e){return e[0]===b.content[0]||e[0]===b.el.el[0]})||
this.d.hide()},_real:function(){var a=this.el.el.offset();a.top+=this.el.el.height()+5;if(a.left+this.content.width()>d.viewportWidth()-60)a.left=d.viewportWidth()-this.content.width()-60;this.d.show(a)},_insert:function(){var a=this.get("editor"),b=this.musicUrl.val();if(b){b=r.replace(s,b);var e=new j(b,null,a.document);b=a.createFakeElement?a.createFakeElement(e,"ke_music","music",true,b):e;a.insertElement(b);this.d.hide()}},_dblclick:function(a){var b=new j(a.target);if(b._4e_name()==="img"&&
b.hasClass("ke_music")){this.selectedFlash=b;this.show();a.halt()}},show:function(){this._prepare();if(this.selectedFlash){var a=this.get("editor").restoreRealElement(this.selectedFlash);if(a._4e_name()=="object"){a=a[0].childNodes;for(var b=0;b<a.length;b++)if(a[b].nodeType==n.NODE_ELEMENT)if((d.attr(a[b],"name")||"").toLowerCase()=="movie")this.musicUrl.val(h(d.attr(a[b],"value")));else if(d._4e_name(a[b])=="embed")this.musicUrl.val(h(d.attr(a[b],"src")));else d._4e_name(a[b])=="object"&&this.musicUrl.val(h(d.attr(a[b],
"data")))}else a._4e_name()=="embed"&&this.musicUrl.val(h(a.attr("src")))}}});c.MusicInserter=g;var m={"\u7f16\u8f91\u97f3\u4e50":function(a){var b=a.getSelection();if(b=(b=b&&b.getStartElement())&&b._4e_ascendant("img",true))if(b.hasClass("ke_music")){a=a._toolbars.music;a.selectedFlash=b;a.show()}}}}();l.addPlugin(function(){new c.MusicInserter({editor:l})})});
