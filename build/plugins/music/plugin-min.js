KISSY.Editor.add("music",function(k){var e=KISSY.Editor,i=KISSY,m=i.DOM,n=i.UA,o=i.Event,j=e.Flash,f="ke_music",g=k.htmlDataProcessor,l=g&&g.dataFilter;l&&l.addRules({elements:{object:function(c){var d=c.attributes;if(!(d.classid&&String(d.classid).toLowerCase())){for(d=0;d<c.children.length;d++)if(c.children[d].name=="embed"){if(!j.isFlashEmbed(c.children[d]))break;if(c.children[d].attributes.src.indexOf("niftyplayer.swf")!=-1)return g.createFakeParserElement(c,f,"music",true)}return null}for(d=
0;d<c.children.length;d++){var h=c.children[d];if(h.name=="param"&&h.attributes.name=="movie")if(h.attributes.value.indexOf("niftyplayer.swf")!=-1)return g.createFakeParserElement(c,f,"music",true)}},embed:function(c){if(!j.isFlashEmbed(c))return null;if(c.attributes.src.indexOf("niftyplayer.swf")!=-1)return g.createFakeParserElement(c,f,"music",true)}}},4);e.MusicInserter||function(){function c(a){c.superclass.constructor.apply(this,arguments);a.cfg.disableObjectResizing||o.on(a.document.body,n.ie?
"resizestart":"resize",function(b){m.hasClass(b.target,f)&&b.preventDefault()})}function d(a){return a._4e_name()==="img"&&!!a.hasClass(f)&&a}var h=e.Config.base+"plugins/music/niftyplayer.swf?file=#(music)",p="<p><label><span style='color:#0066CC;font-weight:bold;'>网址： </span><input  data-verify='^https?://[^\\s]+$'  data-warning='网址格式为：http://' class='ke-music-url' style='width:230px' value='请输入如 http://xxx.com/xx.mp3'/></label></p><p style='margin:5px 0'><label>对"+e.Utils.duplicateStr("&nbsp;",
8)+"齐： <select class='ke-music-align'><option value=''>无</option><option value='left'>左对齐</option><option value='right'>右对齐</option></select>"+e.Utils.duplicateStr("&nbsp;",1)+"<label>间距： </span> <input  data-verify='^\\d+(.\\d+)?$'  data-warning='间距请输入非负数字' class='ke-music-margin' style='width:60px' value='5'/> 像素</label><p>",q=/#\(music\)/g,r=["img."+f];i.extend(c,j,{_config:function(){this._cls=f;this._type="music";this._title="音乐属性";this._bodyHtml=p;this._footHtml="<button class='ke-music-ok'>确定</button> <button class='ke-music-cancel'>取消</button>";
this._contentCls="ke-toolbar-music";this._tip="插入音乐";this._contextMenu=s;this._flashRules=r},_initD:function(){var a=this,b=a.d;a.dUrl=b.el.one(".ke-music-url");a.dAlign=b.el.one(".ke-music-align");a.dMargin=b.el.one(".ke-music-margin");var t=b.el.one(".ke-music-ok");b=b.el.one(".ke-music-cancel");t.on("click",a._gen,a);b.on("click",function(){a.d.hide()})},_getDInfo:function(){return{url:h.replace(q,this.dUrl.val()),attrs:{width:165,height:37,align:this.dAlign.val(),style:"margin:"+(parseInt(this.dMargin.val())||
0)+"px;"}}},_getFlashUrl:function(a){return c.superclass._getFlashUrl.call(this,a).replace(/^.+niftyplayer\.swf\?file=/,"")},_updateD:function(){var a=this.editor,b=this.selectedFlash;if(b){a=a.restoreRealElement(b);this.dUrl.val(this._getFlashUrl(a));this.dAlign.val(b.attr("align"));this.dMargin.val(parseInt(a._4e_style("margin"))||0)}else{this.dUrl.val("请输入如 http://xxx.com/xx.mp3");this.dAlign.val("");this.dMargin.val("5")}}});j.registerBubble("music","音乐网址： ",d);e.MusicInserter=c;var s={"音乐属性":function(a){var b=
a.getSelection();b=(b=b&&b.getStartElement())&&d(b);a=a._toolbars.music;b&&a.show(null,b)}}}();k.addPlugin(function(){new e.MusicInserter(k)})});
