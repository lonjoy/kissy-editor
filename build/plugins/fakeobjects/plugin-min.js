KISSY.Editor.add("fakeobjects",function(i){var j=KISSY.Editor,h=KISSY,l=h.Node,m=j.NODE,n=j.Config.base+"theme/spacer.gif",k=j.HtmlParser;j=h.Editor;var o=(i=i.htmlDataProcessor)&&i.htmlFilter,p={elements:{$:function(a){var b=a.attributes;if((b=(b=(b=b&&b._ke_realelement)&&new k.Fragment.FromHtml(decodeURIComponent(b)))&&b.children[0])&&a.attributes._ke_resizable){var c=a.attributes.style;if(c){var f=/(?:^|\s)width\s*:\s*(\d+)/i.exec(c);a=f&&f[1];c=(f=/(?:^|\s)height\s*:\s*(\d+)/i.exec(c))&&f[1];
if(a)b.attributes.width=a;if(c)b.attributes.height=c}}return b}}};o&&o.addRules(p);i&&h.mix(i,{createFakeParserElement:function(a,b,c,f,g){var d;d=new k.BasicWriter;a.writeHtml(d);d=d.getHtml();var e=a.attributes.style;if(a.attributes.width)e="width:"+a.attributes.width+"px;"+e;if(a.attributes.height)e="height:"+a.attributes.height+"px;"+e;a={"class":b,src:n,_ke_realelement:encodeURIComponent(d),_ke_real_node_type:a.type,style:e,align:a.attributes.align||""};g&&delete g.width;g&&delete g.height;g&&
h.mix(a,g,false);if(c)a._ke_real_element_type=c;if(f)a._ke_resizable=f;return new k.Element("img",a)}});h.augment(j,{createFakeElement:function(a,b,c,f,g,d){var e=a.attr("style")||"";if(a.attr("width"))e="width:"+a.attr("width")+"px;"+e;if(a.attr("height"))e="height:"+a.attr("height")+"px;"+e;a={"class":b,src:n,_ke_realelement:encodeURIComponent(g||a._4e_outerHtml()),_ke_real_node_type:a[0].nodeType,style:e};d&&delete d.width;d&&delete d.height;d&&h.mix(a,d,false);if(c)a._ke_real_element_type=c;if(f)a._ke_resizable=
f;return new l("<img/>",a,this.document)},restoreRealElement:function(a){if(a.attr("_ke_real_node_type")!=m.NODE_ELEMENT)return null;a=decodeURIComponent(a.attr("_ke_realelement"));var b=new l("<div>",null,this.document);b.html(a);return b._4e_first(function(c){return c[0].nodeType==m.NODE_ELEMENT})._4e_remove()}})});
