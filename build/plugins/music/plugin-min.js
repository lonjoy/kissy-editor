KISSY.Editor.add("music",function(j){function k(b){return b.indexOf(m)!=-1}var e=KISSY.Editor,n=KISSY,i=e.Flash,f="ke_music",m="niftyplayer.swf",o=e.Utils.getFlashUrl,g=j.htmlDataProcessor,l=g&&g.dataFilter;l&&l.addRules({elements:{object:function(b){var d=b.attributes;if(!(d.classid&&String(d.classid).toLowerCase())){for(d=0;d<b.children.length;d++)if(b.children[d].name=="embed"){if(!i.isFlashEmbed(b.children[d]))return null;if(k(b.children[d].attributes.src))return g.createFakeParserElement(b,f,
"music",true)}return null}for(d=0;d<b.children.length;d++){var h=b.children[d];if(h.name=="param"&&h.attributes.name=="movie")if(k(h.attributes.value))return g.createFakeParserElement(b,f,"music",true)}},embed:function(b){if(!i.isFlashEmbed(b))return null;if(k(b.attributes.src))return g.createFakeParserElement(b,f,"music",true)}}},4);e.MusicInserter||function(){function b(){b.superclass.constructor.apply(this,arguments)}function d(a){return a._4e_name()==="img"&&!!a.hasClass(f)&&a}function h(a){return a.replace(/^.+niftyplayer\.swf\?file=/,
"")}var p=e.Config.base+"plugins/music/niftyplayer.swf?file=#(music)",q="<p><label><span style='color:#0066CC;font-weight:bold;'>\u97f3\u4e50\u7f51\u5740\uff1a </span><input class='ke-music-url' style='width:230px' value='\u8bf7\u8f93\u5165\u5982 http://xxx.com/xx.mp3'/></label></p><p style='margin:5px 0'><label>\u5bf9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u9f50\uff1a <select class='ke-music-align'><option value=''>\u65e0</option><option value='left'>\u5de6\u5bf9\u9f50</option><option value='right'>\u53f3\u5bf9\u9f50</option></select>"+
e.Utils.duplicateStr("&nbsp;",1)+"<label>\u95f4\u8ddd\uff1a </span> <input class='ke-music-margin' style='width:90px' value='5'/> px</label><p>",r=/#\(music\)/g,s=["img."+f];n.extend(b,i,{_config:function(){this._cls=f;this._type="music";this._title="\u97f3\u4e50\u5c5e\u6027";this._bodyHtml=q;this._footHtml="<button class='ke-music-ok'>\u786e\u5b9a</button> <button class='ke-music-cancel'>\u53d6\u6d88</button>";this._contentCls="ke-toolbar-music";this._tip="\u63d2\u5165\u97f3\u4e50";this._contextMenu=
t;this._flashRules=s},_initD:function(){var a=this,c=a.d;a.dUrl=c.el.one(".ke-music-url");a.dAlign=c.el.one(".ke-music-align");a.dMargin=c.el.one(".ke-music-margin");var u=c.el.one(".ke-music-ok");c=c.el.one(".ke-music-cancel");u.on("click",a._gen,a);c.on("click",function(){a.d.hide()})},_getDInfo:function(){return{url:p.replace(r,this.dUrl.val()),attrs:{width:165,height:37,align:this.dAlign.val(),style:"margin:"+(parseInt(this.dMargin.val())||0)+"px;"}}},_getFlashUrl:function(a){return h(o(a))},
_updateD:function(){var a=this.editor,c=this.selectedFlash;if(c){a=a.restoreRealElement(c);this.dUrl.val(this._getFlashUrl(a));this.dAlign.val(c.attr("align"));this.dMargin.val(parseInt(a._4e_style("margin"))||0)}else{this.dUrl.val("\u8bf7\u8f93\u5165\u5982 http://xxx.com/xx.mp3");this.dAlign.val("");this.dMargin.val("5")}}});i.registerBubble("music","\u97f3\u4e50\u7f51\u5740\uff1a ",d);e.MusicInserter=b;var t={"\u97f3\u4e50\u5c5e\u6027":function(a){var c=a.getSelection();c=(c=c&&c.getStartElement())&&
d(c);a=a._toolbars.music;c&&a.show(null,c)}}}();j.addPlugin(function(){new e.MusicInserter(j)})});
