KISSY.Editor.add("bangpai-upload/dialog",function(v){var k=KISSY,i=k.Editor,w=k.UA,A=i.BangPaiUpload,m=k.DOM,t=k.JSON,g=k.Node,B=i.SimpleOverlay,x=window[i.STORE],C=i.Config.base+i.Utils.debugUrl("plugins/uploader/uploader.longzang.swf?t="+encodeURIComponent("2010-11-05 10:01:17")),p={};A.Dialog||function(){function y(a){this.editor=a;i.Utils.lazyRun(this,"_prepareShow","_realShow")}m.addStyleSheet(".ke-upload-btn-wrap {position:relative;padding:15px 20px 15px 10px;zoom:1;}.ke-upload-list {width:100%;}.ke-upload-list th {border-top:1px solid #c1c8d1;background-color: #E7E9ED;background: -webkit-gradient(linear, left top, left bottom, from(#E7E9ED), to(#F1F4F7));background: -moz-linear-gradient(top, #E7E9ED, #F1F4F7);}.ke-upload-list td,.ke-upload-list th {padding:0em;height:26px;line-height:26px;text-align:center;border-bottom:1px solid #c1c8d1;}",
"ke-BangPaiUpload");k.augment(y,{_prepareShow:function(){var a=this,b=a.editor,c=b.cfg.pluginConfig["bangpai-upload"];a.dialog=new B({title:"\u6279\u91cf\u4e0a\u4f20",mask:false,draggable:"all",focusMgr:false,width:"600px"});var d=a.dialog;d.foot.hide();var e=d.body,f=(new g("<div class='ke-upload-btn-wrap'><span style='margin:0 15px 0 0px;color:#969696;display:inline-block;vertical-align:middle;width:469px;'></span></div>")).appendTo(e),l=(new g("<div style='display:none'>")).appendTo(e),n=new i.TripleButton({text:"\u6d4f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u89c8",
cls:"ke-button",container:f}),o=(new g("<div><table class='ke-upload-list'><thead><tr><th>\u5e8f\u53f7</th><th>\u56fe\u7247</th><th>\u5927\u5c0f</th><th style='width:35%'>\u4e0a\u4f20\u8fdb\u5ea6</th><th>\u56fe\u7247\u64cd\u4f5c</th></tr></thead><tbody></tbody></table></div>")).appendTo(l),r=o.one("tbody"),q=(new g("<p style='margin:15px 15px 30px; 0;text-align:right;'><a class='ke-button ke-bangpiaupload-delall' style='margin-right:20px;'>\u6e05\u7a7a\u5217\u8868</a><a class='ke-button ke-bangpiaupload-ok'>\u786e\u5b9a\u4e0a\u4f20</a><a class='ke-button ke-bangpiaupload-insertall' style='margin-left:20px;'>\u5168\u90e8\u63d2\u5165</a></p>")).appendTo(l),
D=q.one(".ke-bangpiaupload-ok");e=q.one(".ke-bangpiaupload-insertall");var E=q.one(".ke-bangpiaupload-delall");k.guid("ke-bangpai-upload");q=(new g("<span>")).insertBefore(q[0].firstChild);a._sizeLimit=c.sizeLimit||1E3;a._numberLimit=c.numberLimit||15;var z="\u5141\u8bb8\u7528\u6237\u540c\u65f6\u4e0a\u4f20"+a._numberLimit+"\u5f20\u56fe\u7247\uff0c\u5355\u5f20\u56fe\u7247\u5bb9\u91cf\u4e0d\u8d85\u8fc7"+a._sizeLimit/1E3+"M";w.fpvGEQ("10.0.0")||(z="\u60a8\u7684flash\u63d2\u4ef6\u7248\u672c\u8fc7\u4f4e\uff0c\u8be5\u529f\u80fd\u4e0d\u53ef\u7528\uff0c\u8bf7<a href='http://get.adobe.com/cn/flashplayer/' target='_blank'>\u70b9\u6b64\u5347\u7ea7</a>");n.disable();a.tipSpan=f.one("span");a.tipSpan.html(z);if(w.fpvGEQ("10.0.0")){c.extraHtml&&
o.append(c.extraHtml);a._list=r;a._listTable=r.parent("table");a._listWrap=l;a._ds=c.serverUrl;a._dsp=c.serverParams||{};a._fileInput=c.fileInput||"Filedata";a.statusText=q;a.btn=n;a.up=D;c=n.el.offset();o=n.el.width()*2;n=n.el.height()*1.5;f=(new g("<div style='"+("position:absolute;width:"+o+"px;height:"+n+"px;z-index:"+b.baseZIndex(9999)+";")+"'>")).appendTo(f);f.offset(c);a.flashPos=f;f=new i.FlashBridge({movie:C,ajbridge:true,methods:["getReady","removeFile","lock","unlock","setAllowMultipleFiles",
"setFileFilters","uploadAll"],holder:f,attrs:{width:o,height:n},params:{wmode:"transparent"},flashVars:{allowedDomain:location.hostname,btn:true,hand:true}});a.uploader=f;e.on("click",function(){for(var j=r.all("tr"),h=0;h<j.length;h++){var s=new g(j[h]),u=s.attr("url");if(u){b.insertElement(new g("<p>&nbsp;<img src='"+u+"'/>&nbsp;</p>",null,b.document));a._removeTrFile(s)}}if(u){l.hide();d.hide()}});E.on("click",function(){for(var j=r.all("tr"),h=0;h<j.length;h++){var s=new g(j[h]);a._removeTrFile(s)}l.hide()});
r.on("click",function(j){var h=new g(j.target);j.halt();if(h.hasClass("ke-upload-insert")){j=h.parent("tr");url=j.attr("url");b.insertElement(new g("<img src='"+url+"'/>",null,b.document))}if(h.hasClass("ke-upload-delete")||h.hasClass("ke-upload-insert")){j=h.parent("tr");a._removeTrFile(j)}});f.on("fileSelect",a._onSelect,a);f.on("uploadStart",a._onUploadStart,a);f.on("uploadProgress",a._onProgress,a);f.on("uploadCompleteData",a._onUploadCompleteData,a);f.on("contentReady",a._ready,a);f.on("uploadError",
a._uploadError,a);a._restore()}},_removeTrFile:function(a){var b=a.attr("fid"),c=this.uploader;if(b)try{c.removeFile(b)}catch(d){}if(p[b]){p[b].destroy();delete p[b]}a._4e_remove();this.denable();this._syncStatus()},_realShow:function(){this.dialog.show()},show:function(){this._prepareShow()},_uploadError:function(a){var b=this.uploader,c=a.id||a.file&&a.file.id;if(c){var d=this._getFileTr(c),e=p[c],f=a.status;b.removeFile(c);if(!a._custom){k.log(f);f="\u670d\u52a1\u5668\u51fa\u9519\u6216\u683c\u5f0f\u4e0d\u6b63\u786e"}if(d){e&&e.destroy();d.one(".ke-upload-progress").html("<div style='color:red;'>"+
f+"</div>")}}else k.log(a)},_getFileTr:function(a){for(var b=this._list.all("tr"),c=0;c<b.length;c++){var d=new g(b[c]);if(d.attr("fid")==a)return d}},_onUploadStart:function(){},_onComplete:function(){},_onUploadCompleteData:function(a){var b=k.trim(a.data).replace(/\r|\n/g,"");a=a.file.id;k.log(b);if(b){b=t.parse(b);if(b.error)this._uploadError({id:a,_custom:1,status:b.error});else{if(a=this._getFileTr(a)){a.one(".ke-upload-insert").show();a.attr("url",b.imgUrl)}this._syncStatus()}}},_onProgress:function(a){var b=
Math.floor(a.bytesLoaded*100/a.bytesTotal);(a=p[a.file.id])&&a.set("progress",b)},ddisable:function(){this.uploader.lock();this.btn.disable();this.flashPos.offset({left:-9999,top:-9999})},denable:function(){this.uploader.unlock();this.btn.enable();this.flashPos.offset(this.btn.el.offset())},_syncStatus:function(){var a=this._list,b=1,c=a.all("tr");if(c.length==0)this._listWrap.hide();else{a.all(".ke-upload-seq").each(function(e){e.html(b++)});for(var d=a=0;d<c.length;d++)(new g(c[d])).attr("url")||
a++;this.statusText.html("\u961f\u5217\u4e2d\u5269\u4f59"+a+"\u5f20\u56fe\u7247\uff0c\u70b9\u51fb\u786e\u5b9a\u4e0a\u4f20\uff0c\u5f00\u59cb\u4e0a\u4f20\u3002 ")}this._save()},_restore:function(){var a=x.getItem("Multi-Upload-Save"),b=this._list[0];if(a){a=t.parse(decodeURIComponent(a));for(var c=0;c<a.length;c++){var d=a[c];d.complete=1;d.fid="restore_"+c;this._createFileTr(b,d).attr("url",d.url)}if(d){this._listWrap.show();this._syncStatus()}}},_save:function(){for(var a=this._list.all("tr"),b=[],c=0;c<a.length;c++){var d=new g(a[c]),e=d.attr("url");if(e){var f=d.one(".ke-upload-filesize").html();d=
d.one(".ke-upload-filename").html();b.push({name:d,size:f,url:e})}}x.setItem("Multi-Upload-Save",encodeURIComponent(t.stringify(b)))},_getFilesSize:function(a){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b},_createFileTr:function(a,b){var c=b.fid,d=a.insertRow(-1);m.attr(d,"fid",c);var e=d.insertCell(-1);m.attr(e,"class","ke-upload-seq");e=d.insertCell(-1);if(b.name.length>18)b.name=b.name.substring(0,18)+"...";m.html(e,b.name);m.attr(e,"class","ke-upload-filename");e=d.insertCell(-1);m.html(e,
b.size);m.attr(e,"class","ke-upload-filesize");e=d.insertCell(-1);m.attr(e,"class","ke-upload-progress");e=d.insertCell(-1);m.html(e,"<a href='#' class='ke-upload-insert' "+(b.complete?"":"style='display:none'")+">[\u63d2\u5165]</a> &nbsp; <a href='#' class='ke-upload-delete'>[\u5220\u9664]</a> &nbsp;");d=new g(d);d.one(".ke-upload-progress");if(parseInt(b.size)>this._sizeLimit){this._uploadError({id:c,_custom:1,status:"\u56fe\u7247\u592a\u5927\uff0c\u8bf7\u538b\u7f29\u81f3 n M\u4ee5\u4e0b".replace(/n/,this._sizeLimit/1E3)});this.uploader.removeFile(c)}else{p[c]=new i.ProgressBar({container:d.one(".ke-upload-progress"),
width:"100px",height:"15px"});b.complete&&p[c].set("progress",100)}return d},_onSelect:function(a){var b=this.uploader,c=this._list,d=0;a=a.fileList;var e=this._numberLimit;if(a){e=c.children("tr");for(c=0;c<e.length;c++){var f=m.attr(e[c],"fid");f&&a[f]&&delete a[f]}e=this._numberLimit-e.length;f=this._getFilesSize(a);f>e&&alert("\u7cfb\u7edf\u5c06\u53ea\u4fdd\u7559 n \u5f20".replace(/n/,this._numberLimit));f>=e&&this.ddisable();this._listWrap.show();f=this._list[0];for(c in a)if(a.hasOwnProperty(c)){d++;var l=a[c],n=Math.floor(l.size/
1E3),o=l.id;d>e?b.removeFile(o):this._createFileTr(f,{size:n+"k",fid:o,name:l.name})}this._syncStatus()}},_ready:function(){var a=this,b=a.uploader,c=a.up,d=a.btn,e=a.flashPos,f=i.Utils.normParams;if("ready"!=b.getReady()){a.tipSpan.html("\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u8be5\u529f\u80fd\uff0c\u8bf7\u5347\u7ea7\u5f53\u524d\u6d4f\u89c8\u5668\uff0c\u5e76\u540c\u65f6 <a href='http://get.adobe.com/cn/flashplayer/' target='_blank'>\u70b9\u6b64\u5347\u7ea7</a> flash \u63d2\u4ef6");e.offset({left:-9999,top:-9999})}else{d.enable();e.offset(d.el.offset());b.setAllowMultipleFiles(true);b.setFileFilters([{ext:"*.jpeg;*.jpg;*.png;*.gif",desc:"\u56fe\u7247\u6587\u4ef6( png,jpg,jpeg,gif )"}]);
c.detach();c.on("click",function(l){l.halt();b.uploadAll(a._ds,"POST",f(a._dsp),a._fileInput)})}}});i.BangPaiUpload.Dialog=y}();v.addDialog("bangpai-upload/dialog",new i.BangPaiUpload.Dialog(v))},{attach:false});
