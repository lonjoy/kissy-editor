KISSY.Editor.add("xiami-music",function(e){var c=KISSY.Editor,d=e.htmlDataProcessor,j=d&&d.dataFilter;j&&j.addRules({elements:{object:function(f){var g=f.attributes,h=f.attributes.title,b;if(!(g.classid&&String(g.classid).toLowerCase())){for(g=0;g<f.children.length;g++){b=f.children[g];if(b.name=="embed"){if(!c.Utils.isFlashEmbed(b))break;if(/xiami\.com/i.test(b.attributes.src))return d.createFakeParserElement(f,"ke_xiami","xiami-music",true,{title:h})}}return null}for(g=0;g<f.children.length;g++){b=
f.children[g];if(b.name=="param"&&b.attributes.name.toLowerCase()=="movie")if(/xiami\.com/i.test(b.attributes.value))return d.createFakeParserElement(f,"ke_xiami","xiami-music",true,{title:h})}},embed:function(f){if(!c.Utils.isFlashEmbed(f))return null;if(/xiami\.com/i.test(f.attributes.src))return d.createFakeParserElement(f,"ke_xiami","xiami-music",true,{title:f.attributes.title})}}},4);e.addPlugin("xiami-music",function(){var f=e.addButton("xiami-music",{contentCls:"ke-toolbar-music",title:"\u63d2\u5165\u867e\u7c73\u97f3\u4e50",
mode:c.WYSIWYG_MODE,loading:true});c.use("xiami-music/support",function(){var g=new c.XiamiMusic(e);f.reload({offClick:function(){g.show()},destroy:function(){g.destroy()}})});this.destroy=function(){f.destroy()}})},{attach:false,requires:["fakeobjects"]});
KISSY.Editor.add("xiami-music/support",function(){function e(a){e.superclass.constructor.apply(this,arguments);a.cfg.disableObjectResizing||g.on(a.document.body,j.ie?"resizestart":"resize",function(i){(new d.Node(i.target)).hasClass(f)&&i.preventDefault()})}function c(a){return a._4e_name()==="img"&&!!a.hasClass(f)&&a}var d=KISSY,j=d.UA,f="ke_xiami",g=d.Event,h=d.Editor;d.extend(e,h.Flash,{_config:function(){this._cls=f;this._type="xiami-music";this._contextMenu=b;this._flashRules=["img."+f]},_updateTip:function(a,
i){var k=this.editor.restoreRealElement(i);if(k){a.html(i.attr("title"));a.attr("href",this._getFlashUrl(k))}}});var b={"\u867e\u7c73\u5c5e\u6027":function(a){var i=a.editor.getSelection();i=i&&i.getStartElement();(i=c(i))&&a.show(null,i)}};h.Flash.registerBubble("xiami-music","\u867e\u7c73\u97f3\u4e50\uff1a ",c);h.XiamiMusic=e;h.add({"xiami-music/dialog":{attach:false,charset:"utf-8",fullpath:h.Utils.debugUrl("../biz/ext/plugins/music/dialog/plugin.js")}});h.add({"xiami-music/dialog/support":{attach:false,charset:"utf-8",requires:["flash/dialog/support"],
fullpath:h.Utils.debugUrl("../biz/ext/plugins/music/dialog/support/plugin.js")}})},{attach:false,requires:["flash/support"]});KISSY.Editor.add("checkbox-sourcearea",function(e){var c=KISSY.Editor;KISSY.UA.gecko<1.92||c.use("checkbox-sourcearea/support",function(){var d=new c.CheckboxSourceArea(e);e.on("destroy",function(){d.destroy()})})},{attach:false});
KISSY.Editor.add("checkbox-sourcearea/support",function(){function e(h){this.editor=h;this._init()}var c=KISSY,d=c.Editor,j=c.Node,f=d.SOURCE_MODE,g=d.WYSIWYG_MODE;c.augment(e,{_init:function(){var h=this.editor,b=h.statusDiv;this.holder=(new j("<span style='zoom:1;display:inline-block;height:22px;line-height:22px;'><input style='margin:0 5px;vertical-align:middle;' type='checkbox' /><span style='vertical-align:middle;'>\u7f16\u8f91\u6e90\u4ee3\u7801</span></span>")).appendTo(b);var a=this.el=this.holder.one("input");a.on("click",
this._check,this);h.on("sourcemode",function(){a[0].checked=true});h.on("wysiwygmode",function(){a[0].checked=false})},_check:function(){this.el[0].checked?this._show():this._hide()},_show:function(){d.SourceAreaSupport.exec(this.editor,f)},_hide:function(){d.SourceAreaSupport.exec(this.editor,g)},destroy:function(){this.el.detach();this.holder.remove()}});d.CheckboxSourceArea=e},{attach:false,requires:["sourcearea/support"]});
KISSY.Editor.add("multi-upload",function(e){var c=KISSY.Editor;if(!c.Env.mods["multi-upload/dialog"]){c.add({"multi-upload/dialog":{attach:false,charset:"utf-8",fullpath:c.Utils.debugUrl("../biz/ext/plugins/upload/dialog/plugin.js")}});c.add({"multi-upload/dialog/support":{attach:false,charset:"utf-8",requires:["progressbar","localstorage","overlay"],fullpath:c.Utils.debugUrl("../biz/ext/plugins/upload/dialog/support/plugin.js")}})}e.addPlugin("multi-upload",function(){var d=e.addButton("multi-upload",
{contentCls:"ke-toolbar-mul-image",title:"\u6279\u91cf\u63d2\u56fe",mode:c.WYSIWYG_MODE,offClick:function(){this.editor.showDialog("multi-upload/dialog")},destroy:function(){this.editor.destroyDialog("multi-upload/dialog")}});this.destroy=function(){d.destroy()}})},{attach:false});
KISSY.Editor.add("video",function(e){function c(b){for(var a=0;a<g.length;a++){var i=g[a];if(i.reg.test(b))return i}}var d=KISSY.Editor,j=e.htmlDataProcessor,f=j&&j.dataFilter,g=[],h=e.cfg.pluginConfig;h.video=h.video||{};h=h.video;h.providers&&g.push.apply(g,h.providers);h.getProvider=c;f&&f.addRules({elements:{object:function(b){var a=b.attributes;if(!(a.classid&&String(a.classid).toLowerCase())){for(a=0;a<b.children.length;a++)if(b.children[a].name=="embed"){if(!d.Utils.isFlashEmbed(b.children[a]))break;
if(c(b.children[a].attributes.src))return j.createFakeParserElement(b,"ke_video","video",true)}return null}for(a=0;a<b.children.length;a++){var i=b.children[a];if(i.name=="param"&&i.attributes.name.toLowerCase()=="movie")if(c(i.attributes.value))return j.createFakeParserElement(b,"ke_video","video",true)}},embed:function(b){if(!d.Utils.isFlashEmbed(b))return null;if(c(b.attributes.src))return j.createFakeParserElement(b,"ke_video","video",true)}}},4);e.addPlugin("video",function(){var b=e.addButton("video",
{contentCls:"ke-toolbar-video",title:"\u63d2\u5165\u89c6\u9891",mode:d.WYSIWYG_MODE,loading:true});d.use("video/support",function(){var a=new d.Video(e);b.reload({offClick:function(){a.show()},destroy:function(){a.destroy()}})});this.destroy=function(){b.destroy()}})},{attach:false,requires:["fakeobjects"]});
KISSY.Editor.add("video/support",function(){function e(){e.superclass.constructor.apply(this,arguments)}function c(a){return a._4e_name()==="img"&&!!a.hasClass(g)&&a}var d=KISSY,j=d.Editor,f=j.Flash,g="ke_video",h=["img."+g];e.CLS_VIDEO=g;e.TYPE_VIDEO="video";d.extend(e,f,{_config:function(){this._cls=g;this._type="video";this._contextMenu=b;this._flashRules=h}});f.registerBubble("video","\u89c6\u9891\u94fe\u63a5\uff1a ",c);j.Video=e;var b={"\u89c6\u9891\u5c5e\u6027":function(a){var i=a.editor.getSelection();(i=(i=i&&i.getStartElement())&&c(i))&&
a.show(null,i)}};j.add({"video/dialog":{attach:false,charset:"utf-8",fullpath:j.Utils.debugUrl("../biz/ext/plugins/video/dialog/plugin.js")}});j.add({"video/dialog/support":{attach:false,charset:"utf-8",requires:["flash/dialog/support"],fullpath:j.Utils.debugUrl("../biz/ext/plugins/video/dialog/support/plugin.js")}})},{attach:false,requires:["flash/support"]});
