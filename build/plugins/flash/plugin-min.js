KISSY.Editor.add("flash",function(c){c.ready(function(){var f=KISSY,d=f.Editor,e=c.htmlDataProcessor,g=c.cfg.pluginConfig,h=e&&e.dataFilter;h&&h.addRules({elements:{object:function(a){var b=a.attributes;if(!(b.classid&&String(b.classid).toLowerCase())){for(b=0;b<a.children.length;b++)if(a.children[b].name=="embed"){if(!d.Utils.isFlashEmbed(a.children[b]))break;return e.createFakeParserElement(a,"ke_flash","flash",true)}return null}return e.createFakeParserElement(a,"ke_flash","flash",true)},embed:function(a){if(!d.Utils.isFlashEmbed(a))return null;
return e.createFakeParserElement(a,"ke_flash","flash",true)}}},5);d.use("flash/support",function(){var a=d.Flash;c.addCommand("insertFlash",{exec:function(){var b=f.makeArray(arguments);return d.Flash.Insert.apply(null,b)}});if(!g.flash||g.flash.btn!==false)new a(c)})})});
