KISSY.Editor.add("image/dialog",function(k){function G(a){for(a=a.parent();a;){var d=a._4e_name();if("a"==d)return a;if(H.$block[d]||H.$blockLimit[d])break;a=a.parent()}return null}function N(){i=new b.Dialog({autoRender:!0,width:500,headerContent:"\u56fe\u7247",bodyContent:O,footerContent:P,mask:!0});p.call(g,i);var a=i.get("el"),d=a.one(".ke-img-cancel"),f=a.one(".ke-img-insert"),I=b.Utils.verifyInputs,k=a.one(".ke-img-setting");z=a.one(".ke-img-upload-form");j=a.one(".ke-img-local-url");q=new b.Tabs({tabs:a.one("ul.ke-tabs"),
contents:a.one("div.ke-image-tabs-content-wrap")});p.call(g,q);j.val(t);r=a.one(".ke-img-url");m=a.one(".ke-img-height");l=a.one(".ke-img-width");s=a.one(".ke-img-ratio");A=b.Select.decorate(a.one(".ke-img-align"));B=a.one(".ke-img-margin");u=a.one(".ke-img-link");v=a.one(".ke-img-link-blank");var C=b.Utils.placeholder;C(r,Q);C(m,D);C(l,D);C(u,"http://");m.on("keyup",function(){var a=parseInt(h(m));a&&s[0].checked&&!s[0].disabled&&w&&h(l,Math.floor(a*w))});p.call(g,m,r,l);l.on("keyup",function(){var a=
parseInt(h(l));a&&s[0].checked&&!s[0].disabled&&w&&h(m,Math.floor(a/w))});p.call(g,l);d.on("click",function(a){i.hide();a.halt()});p.call(g,d);var e=(new E("<a class='ke-button' style='position:absolute;z-index:"+b.baseZIndex(b.zIndexManager.LOADING_CANCEL)+";left:-9999px;top:-9999px;'>\u53d6\u6d88\u4e0a\u4f20</a>")).appendTo(document.body),x=null;e.on("click",function(a){a&&a.halt();i.unloading();x&&(R.remove(x,"load"),S.remove(x));e.css({left:-9999,top:-9999});x=null});p.call(g,e);f.on("click",function(d){d.halt();
if("local"==q.activate()&&c){if(I(k.all("input")))if(j.val()==t)alert("\u8bf7\u5148\u9009\u62e9\u6587\u4ef6!");else if(T.test(j.val()))if(d=n[0].files?n[0].files[0].size:0,y&&y<d/1E3)alert("\u4e0a\u4f20\u56fe\u7247\u6700\u5927\uff1a"+y/1E3+"M");else{i.loading();x=b.Utils.doFormUpload({form:z,callback:function(a){x=null;e.css({left:-9999,top:-9999});a=o.trim(a.responseText).replace(/\r|\n/g,"");i.unloading();try{a=U.parse(a)}catch(d){o.log(a),a=null}a||(a={error:"\u670d\u52a1\u5668\u51fa\u9519\uff0c\u8bf7\u91cd\u8bd5"});a.error?alert(a.error):(h(r,a.imgUrl),(new Image).src=a.imgUrl,J())}},c.serverParams,c.serverUrl);
var d=i.get("el"),f=d.offset();e.css({left:f.left+d[0].offsetWidth/2.5,top:f.top+d[0].offsetHeight/1.5})}else alert(V),z[0].reset(),j.val(t)}else I(a.all("input"))&&J()});p.call(g,f);if(c){c.extraHtml&&a.one(".ke-img-up-extraHtml").html(c.extraHtml);var K=a.one(".ke-image-up"),y=c&&c.sizeLimit;n=(new E("<input type='file' style='position:absolute;cursor:pointer;left:"+(L.ie?"360":L.chrome?"319":"369")+"px;z-index:2;top:0px;height:26px;' size='1' name='"+(c.fileInput||"Filedata")+"'/>")).insertAfter(j);
y&&(t="\u5355\u5f20\u56fe\u7247\u5bb9\u91cf\u4e0d\u8d85\u8fc7 "+y/1E3+" M");j.val(t);n.css("opacity",0);n.on("mouseenter",function(){K.addClass("ke-button-hover")});n.on("mouseleave",function(){K.removeClass("ke-button-hover")});n.on("change",function(){var a=n.val();j.val(a.replace(/.+[\/\\]/,""))});p.call(g,n);!1===F.remote&&q.remove("remote")}else q.remove("local")}function J(){var a=h(r),d,b=parseInt(h(m)),c=parseInt(h(l)),g=A.val(),j=parseInt(B.val()),e="";b&&(e+="height:"+b+"px;");c&&(e+="width:"+c+"px;");g&&(e+="float:"+g+";");isNaN(j)||
(e+="margin:"+j+"px;");i.hide();f?(d=f,k.fire("save"),f.attr({src:a,_ke_saved_src:a,style:e})):(d=new E("<img "+(e?"style='"+e+"'":"")+" src='"+a+"' _ke_saved_src='"+a+"' alt='' />",null,k.document),k.insertElement(d));setTimeout(function(){var a=G(d),b=o.trim(h(u)),e=k.getSelection(),c;if(a)if(b)a.attr("_ke_saved_href",b).attr("href",b).attr("target",v.attr("checked")?"_blank":"_self");else{c=e.createBookmarks();a._4e_remove(true)}else if(b){c=e.createBookmarks();a=new E("<a></a>");a.attr("_ke_saved_href",
b).attr("href",b).attr("target",v.attr("checked")?"_blank":"_self");b=d[0];b.parentNode.replaceChild(a[0],b);a.append(b)}c&&e.selectBookmarks(c);f&&k.fire("save")},100)}var o=KISSY,b=o.Editor,H=b.XHTML_DTD,S=o.DOM,L=o.UA,U=o.JSON,E=o.Node,R=o.Event,Q="http://",D="\u81ea\u52a8",O="<div class='ke-image-wrap'><ul class='ke-tabs ks-clear'><li rel='remote'>\u7f51\u7edc\u56fe\u7247</li><li rel='local'>\u672c\u5730\u4e0a\u4f20</li></ul><div style='padding:12px 20px 5px 20px;'><div class='ke-image-tabs-content-wrap' ><div><label><span class='ke-image-title'>\u56fe\u7247\u5730\u5740\uff1a </span><input  data-verify='^(https?:/)?/[^\\s]+$'  data-warning='\u7f51\u5740\u683c\u5f0f\u4e3a\uff1ahttp:// \u6216 /' class='ke-img-url ke-input' style='width:390px;vertical-align:middle;' /></label></div><div style='position:relative;'><form class='ke-img-upload-form' method='post'><p style='zoom:1;'><input class='ke-input ke-img-local-url' readonly='readonly' style='margin-right: 15px; vertical-align: middle; width: 368px;color:#969696;'/><a style='padding:3px 11px;position:absolute;left:390px;top:0px;z-index:1;' class='ke-image-up ke-button'>\u6d4f\u89c8...</a></p><div class='ke-img-up-extraHtml'></div></form></div></div><table style='width:100%;margin-top:8px;' class='ke-img-setting'><tr><td><label>\u5bbd\u5ea6\uff1a <input  data-verify='^("+
D+"|((?!0$)\\d+))?$'  data-warning='\u5bbd\u5ea6\u8bf7\u8f93\u5165\u6b63\u6574\u6570' class='ke-img-width ke-input' style='vertical-align:middle;width:60px' /> \u50cf\u7d20 </label></td><td><label>\u9ad8\u5ea6\uff1a <input  data-verify='^("+D+"|((?!0$)\\d+))?$'  data-warning='\u9ad8\u5ea6\u8bf7\u8f93\u5165\u6b63\u6574\u6570' class='ke-img-height ke-input' style='vertical-align:middle;width:60px' /> \u50cf\u7d20 </label><label><input type='checkbox' class='ke-img-ratio' style='vertical-align:middle;margin-left:5px;' checked='checked'/> \u9501\u5b9a\u9ad8\u5bbd\u6bd4</label></td></tr><tr><td><label>\u5bf9\u9f50\uff1a<select class='ke-img-align' title='\u5bf9\u9f50'><option value='none'>\u65e0</option><option value='left'>\u5de6\u5bf9\u9f50</option><option value='right'>\u53f3\u5bf9\u9f50</option></select></label></td><td><label>\u95f4\u8ddd\uff1a <input  data-verify='^\\d+$'  data-warning='\u95f4\u8ddd\u8bf7\u8f93\u5165\u975e\u8d1f\u6574\u6570' class='ke-img-margin ke-input' style='width:60px' value='10'/> \u50cf\u7d20</label></td></tr><tr class='ke-img-link-row'><td colspan='2' style='padding-top: 6px'><label>\u94fe\u63a5\u7f51\u5740\uff1a <input class='ke-img-link ke-input' style='width:235px;vertical-align:middle;'  data-verify='^(?:(?:\\s*)|(?:https?://[^\\s]+)|(?:#.+))$'  data-warning='\u8bf7\u8f93\u5165\u5408\u9002\u7684\u7f51\u5740\u683c\u5f0f' /></label><label><input class='ke-img-link-blank' style='vertical-align:middle;margin-left:5px;' type='checkbox'/> &nbsp; \u5728\u65b0\u7a97\u53e3\u6253\u5f00\u94fe\u63a5</label></td></tr></table></div></div>",
P="<div style='padding:5px 20px 20px;'><a class='ke-img-insert ke-button' style='margin-right:30px;'>\u786e\u5b9a</a> <a  class='ke-img-cancel ke-button'>\u53d6\u6d88</a></div>",i,q,r,m,l,A,s,B,w,j,u,v,n,z,t="\u8bf7\u70b9\u51fb\u6d4f\u89c8\u4e0a\u4f20\u56fe\u7247",f,F=k.cfg.pluginConfig.image||{},c=F.upload||null,M=c&&c.suffix||"png,jpg,jpeg,gif",T=RegExp(M.split(/,/).join("|")+"$","i"),V="\u53ea\u5141\u8bb8\u540e\u7f00\u540d\u4e3a"+M+"\u7684\u56fe\u7247",g={},p=b.Utils.addRes,W=b.Utils.destroyRes,h=b.Utils.valInput;b.use("overlay,tabs,select",function(){N();k.addDialog("image/dialog",{show:function(a){var d=
"remote",c=b.Utils.resetInput;if((f=a)&&!1!==F.remote){h(r,f.attr("src"));var a=f.width(),g=f.height();h(m,g);h(l,a);A.val(f.css("float")||"none");var k=parseInt(f._4e_style("margin"))||0;B.val(k);s[0].disabled=!1;w=a/g;(a=G(f))?(h(u,a.attr("_ke_saved_href")||a.attr("href")),v.attr("checked","_blank"==a.attr("target"))):(c(u),v.attr("checked",!0))}else q.getTab("local")&&(d="local"),v.attr("checked",!0),c(r),c(u),c(m),c(l),A.val("none"),B.val(10),s[0].disabled=!0,w=null;z[0].reset();j.val(t);q.activate(d);
i.show()},hide:function(){i.hide()},destroy:function(){W.call(g)},dialog:i})})},{attach:!1});
