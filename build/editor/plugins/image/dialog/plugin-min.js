KISSY.Editor.add("image/dialog",function(u){function M(b){for(b=b.parent();b;){var a=b._4e_name();if(a=="a")return b;if(N.$block[a]||N.$blockLimit[a])break;b=b.parent()}return null}function S(){function b(c){if(c.files)return c.files[0].size;return 0}h=new e.Dialog({autoRender:true,width:500,headerContent:"\u56fe\u7247",bodyContent:T,footerContent:U,mask:true});r.call(m,h);var a=h.get("el"),d=a.one(".ke-img-cancel"),s=a.one(".ke-img-insert"),v=e.Utils.verifyInputs,f=a.one(".ke-img-setting");G=a.one(".ke-img-upload-form");
n=a.one(".ke-img-local-url");w=new e.Tabs({tabs:a.one("ul.ke-tabs"),contents:a.one("div.ke-image-tabs-content-wrap")});r.call(m,w);n.val(z);x=a.one(".ke-img-url");o=a.one(".ke-img-height");l=a.one(".ke-img-width");y=a.one(".ke-img-ratio");H=e.Select.decorate(a.one(".ke-img-align"));I=a.one(".ke-img-margin");A=a.one(".ke-img-link");B=a.one(".ke-img-link-blank");var p=e.Utils.placeholder;p(x,V);p(o,J);p(l,J);p(A,"http://");o.on("keyup",function(){var c=parseInt(g(o));!c||!y[0].checked||y[0].disabled||
!C||g(l,Math.floor(c*C))});r.call(m,o,x,l);l.on("keyup",function(){var c=parseInt(g(l));!c||!y[0].checked||y[0].disabled||!C||g(o,Math.floor(c/C))});r.call(m,l);d.on("click",function(c){h.hide();c.halt()});r.call(m,d);var E=(new K("<a class='ke-button' style='position:absolute;z-index:"+e.baseZIndex(e.zIndexManager.LOADING_CANCEL)+";left:-9999px;top:-9999px;'>\u53d6\u6d88\u4e0a\u4f20</a>")).appendTo(document.body),D=null;E.on("click",function(c){c&&c.halt();h.unloading();if(D){W.remove(D,"load");X.remove(D)}E.css({left:-9999,
top:-9999});D=null});r.call(m,E);s.on("click",function(c){c.halt();if(w.activate()=="local"&&j){if(v(f.all("input")))if(n.val()==z)alert("\u8bf7\u5148\u9009\u62e9\u6587\u4ef6!");else if(Y.test(n.val())){c=b(t[0]);if(F&&F<c/1E3)alert("\u4e0a\u4f20\u56fe\u7247\u6700\u5927\uff1a"+F/1E3+"M");else{h.loading();D=e.Utils.doFormUpload({form:G,callback:function(i){D=null;E.css({left:-9999,top:-9999});i=q.trim(i.responseText).replace(/\r|\n/g,"");h.unloading();try{i=Z.parse(i)}catch(ca){q.log(i);i=null}i||(i={error:"\u670d\u52a1\u5668\u51fa\u9519\uff0c\u8bf7\u91cd\u8bd5"});if(i.error)alert(i.error);else{g(x,i.imgUrl);
(new Image).src=i.imgUrl;O()}}},j.serverParams,j.serverUrl);c=h.get("el");var P=c.offset();E.css({left:P.left+c[0].offsetWidth/2.5,top:P.top+c[0].offsetHeight/1.5})}}else{alert($);G[0].reset();n.val(z)}}else v(a.all("input"))&&O()});r.call(m,s);if(j){j.extraHtml&&a.one(".ke-img-up-extraHtml").html(j.extraHtml);var Q=a.one(".ke-image-up"),F=j&&j.sizeLimit;t=(new K("<input type='file' style='position:absolute;cursor:pointer;left:"+(aa.ie?"360":"369")+"px;z-index:2;top:0px;height:26px;' size='1' name='"+
(j.fileInput||"Filedata")+"'/>")).insertAfter(n);if(F)z="\u5355\u5f20\u56fe\u7247\u5bb9\u91cf\u4e0d\u8d85\u8fc7 "+F/1E3+" M";n.val(z);t.css("opacity",0);t.on("mouseenter",function(){Q.addClass("ke-button-hover")});t.on("mouseleave",function(){Q.removeClass("ke-button-hover")});t.on("change",function(){var c=t.val();n.val(c.replace(/.+[\/\\]/,""))});r.call(m,t);L.remote===false&&w.remove("remote")}else w.remove("local")}function O(){var b=g(x),a;a=parseInt(g(o));var d=parseInt(g(l)),s=H.val(),v=parseInt(I.val()),f="";if(a)f+="height:"+a+"px;";
if(d)f+="width:"+d+"px;";if(s)f+="float:"+s+";";isNaN(v)||(f+="margin:"+v+"px;");h.hide();if(k){a=k;u.fire("save");k.attr({src:b,_ke_saved_src:b,style:f})}else{a=new K("<img "+(f?"style='"+f+"'":"")+" src='"+b+"' _ke_saved_src='"+b+"' alt='' />",null,u.document);u.insertElement(a)}b=M(a);d=q.trim(g(A));f=u.getSelection();var p;if(b)if(d)b.attr("_ke_saved_href",d).attr("href",d).attr("target",B.attr("checked")?"_blank":"_self");else{p=f.createBookmarks();b._4e_remove(true)}else if(d){p=f.createBookmarks();
b=new K("<a></a>");b.attr("_ke_saved_href",d).attr("href",d).attr("target",B.attr("checked")?"_blank":"_self");a=a[0];a.parentNode.replaceChild(b[0],a);b.append(a)}p&&f.selectBookmarks(p);k&&u.fire("save")}var q=KISSY,e=q.Editor,N=e.XHTML_DTD,X=q.DOM,aa=q.UA,Z=q.JSON,K=q.Node,W=q.Event,V="http://",J="\u81ea\u52a8",T="<div class='ke-image-wrap'><ul class='ke-tabs ks-clear'><li rel='remote'>\u7f51\u7edc\u56fe\u7247</li><li rel='local'>\u672c\u5730\u4e0a\u4f20</li></ul><div style='padding:12px 20px 5px 20px;'><div class='ke-image-tabs-content-wrap' ><div><label><span class='ke-image-title'>\u56fe\u7247\u5730\u5740\uff1a </span><input  data-verify='^(https?:/)?/[^\\s]+$'  data-warning='\u7f51\u5740\u683c\u5f0f\u4e3a\uff1ahttp:// \u6216 /' class='ke-img-url ke-input' style='width:390px;vertical-align:middle;' /></label></div><div style='position:relative;'><form class='ke-img-upload-form' method='post'><p style='zoom:1;'><input class='ke-input ke-img-local-url' readonly='readonly' style='margin-right: 15px; vertical-align: middle; width: 368px;color:#969696;'/><a style='padding:3px 11px;position:absolute;left:390px;top:0px;z-index:1;' class='ke-image-up ke-button'>\u6d4f\u89c8...</a></p><div class='ke-img-up-extraHtml'></div></form></div></div><table style='width:100%;margin-top:8px;' class='ke-img-setting'><tr><td><label>\u5bbd\u5ea6\uff1a <input  data-verify='^("+
J+"|((?!0$)\\d+))?$'  data-warning='\u5bbd\u5ea6\u8bf7\u8f93\u5165\u6b63\u6574\u6570' class='ke-img-width ke-input' style='vertical-align:middle;width:60px' /> \u50cf\u7d20 </label></td><td><label>\u9ad8\u5ea6\uff1a <input  data-verify='^("+J+"|((?!0$)\\d+))?$'  data-warning='\u9ad8\u5ea6\u8bf7\u8f93\u5165\u6b63\u6574\u6570' class='ke-img-height ke-input' style='vertical-align:middle;width:60px' /> \u50cf\u7d20 </label><label><input type='checkbox' class='ke-img-ratio' style='vertical-align:middle;margin-left:5px;' checked='checked'/> \u9501\u5b9a\u9ad8\u5bbd\u6bd4</label></td></tr><tr><td><label>\u5bf9\u9f50\uff1a<select class='ke-img-align' title='\u5bf9\u9f50'><option value='none'>\u65e0</option><option value='left'>\u5de6\u5bf9\u9f50</option><option value='right'>\u53f3\u5bf9\u9f50</option></select></label></td><td><label>\u95f4\u8ddd\uff1a <input  data-verify='^\\d+$'  data-warning='\u95f4\u8ddd\u8bf7\u8f93\u5165\u975e\u8d1f\u6574\u6570' class='ke-img-margin ke-input' style='width:60px' value='0'/> \u50cf\u7d20</label></td></tr><tr><td colspan='2' style='padding-top: 6px'><label>\u94fe\u63a5\u7f51\u5740\uff1a <input class='ke-img-link ke-input' style='width:235px;vertical-align:middle;'  data-verify='^(?:(?:\\s*)|(?:https?://[^\\s]+)|(?:#.+))$'  data-warning='\u8bf7\u8f93\u5165\u5408\u9002\u7684\u7f51\u5740\u683c\u5f0f' /></label><label><input class='ke-img-link-blank' style='vertical-align:middle;margin-left:5px;' type='checkbox'/> &nbsp; \u5728\u65b0\u7a97\u53e3\u6253\u5f00\u94fe\u63a5</label></td></tr></table></div></div>",
U="<div style='padding:5px 20px 20px;'><a class='ke-img-insert ke-button' style='margin-right:30px;'>\u786e\u5b9a</a> <a  class='ke-img-cancel ke-button'>\u53d6\u6d88</a></div>",h,w,x,o,l,H,y,I,C,n,A,B,t,G,z="\u8bf7\u70b9\u51fb\u6d4f\u89c8\u4e0a\u4f20\u56fe\u7247",k,L=u.cfg.pluginConfig.image||{},j=L.upload||null,R=j&&j.suffix||"png,jpg,jpeg,gif",Y=RegExp(R.split(/,/).join("|")+"$","i"),$="\u53ea\u5141\u8bb8\u540e\u7f00\u540d\u4e3a"+R+"\u7684\u56fe\u7247",m={},r=e.Utils.addRes,ba=e.Utils.destroyRes,g=e.Utils.valInput;e.use("overlay,tabs,select",function(){S();u.addDialog("image/dialog",{show:function(b){var a=
"remote",d=e.Utils.resetInput;if((k=b)&&L.remote!==false){g(x,k.attr("src"));b=k.width();var s=k.height();g(o,s);g(l,b);H.val(k.css("float")||"none");var v=parseInt(k._4e_style("margin"))||0;I.val(v);y[0].disabled=false;C=b/s;if(b=M(k)){g(A,b.attr("_ke_saved_href")||b.attr("href"));B.attr("checked",b.attr("target")=="_blank")}else{d(A);B.attr("checked",true)}}else{if(w.getTab("local"))a="local";B.attr("checked",true);d(x);d(A);d(o);d(l);H.val("none");I.val(0);y[0].disabled=true;C=null}G[0].reset();
n.val(z);w.activate(a);h.show()},hide:function(){h.hide()},destroy:function(){ba.call(m)},dialog:h})})},{attach:false});
