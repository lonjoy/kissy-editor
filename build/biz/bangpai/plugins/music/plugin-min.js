KISSY.Editor.add("bangpai-music",function(f){var e=KISSY.Editor,d=f.htmlDataProcessor,g=d&&d.dataFilter;f.ready(function(){g&&g.addRules({elements:{object:function(a){var b=a.attributes,h=a.attributes.title,c;if(!(b.classid&&String(b.classid).toLowerCase())){for(b=0;b<a.children.length;b++){c=a.children[b];if(c.name=="embed"){if(!e.Utils.isFlashEmbed(c))break;if(/xiami\.com/i.test(c.attributes.src))return d.createFakeParserElement(a,"ke_xiami","bangpai-music",true,{title:h})}}return null}for(b=0;b<
a.children.length;b++){c=a.children[b];if(c.name=="param"&&c.attributes.name=="movie")if(/xiami\.com/i.test(c.attributes.value))return d.createFakeParserElement(a,"ke_xiami","bangpai-music",true,{title:h})}},embed:function(a){if(!e.Utils.isFlashEmbed(a))return null;if(/xiami\.com/i.test(a.attributes.src))return d.createFakeParserElement(a,"ke_xiami","bangpai-music",true,{title:a.attributes.title})}}},4);e.use("bangpai-music/support",function(){new e.BangPaiMusic(f)})})},{attach:false,requires:["fakeobjects"]});
