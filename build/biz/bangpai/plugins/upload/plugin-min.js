KISSY.Editor.add("bangpai-upload",function(v){var l=KISSY,h=l.Editor,w=l.UA;h.BangPaiUpload||function(){function x(a){this.editor=a;this._init()}var n=l.DOM,s=l.JSON,i=l.Node,A=h.SimpleOverlay;s=l.JSON;var y=window[h.STORE],B=h.Config.base+h.Utils.debugUrl("plugins/uploader/uploader.swf?t=201010231602"),p={};n.addStyleSheet(".ke-upload-btn-wrap {position:relative;padding:15px 20px 15px 10px;}.ke-upload-list {width:100%;}.ke-upload-list th {border-top:1px solid #c1c8d1;background-color: #E7E9ED;background: -webkit-gradient(linear, left top, left bottom, from(#E7E9ED), to(#F1F4F7));background: -moz-linear-gradient(top, #E7E9ED, #F1F4F7);}.ke-upload-list td,.ke-upload-list th {padding:0em;height:26px;line-height:26px;text-align:center;border-bottom:1px solid #c1c8d1;}",
"ke-BangPaiUpload");l.augment(x,l.EventTarget,{_prepareShow:function(){var a=this,c=a.editor,b=c.cfg.pluginConfig["bangpai-upload"];a.dialog=new A({title:"批量上传",mask:false,draggable:"all",focusMgr:false,width:"600px"});var d=a.dialog;d.foot.hide();var e=d.body,f=(new i("<div class='ke-upload-btn-wrap'><span style='margin:0 15px 0 0px;color:#969696;display:inline-block;vertical-align:middle;width:469px;'></span></div>")).appendTo(e),m=(new i("<div style='display:none'>")).appendTo(e),g=new h.TripleButton({text:"浏&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;览",
cls:"ke-button",container:f}),o=(new i("<div><table class='ke-upload-list'><thead><tr><th>序号</th><th>图片</th><th>大小</th><th style='width:35%'>上传进度</th><th>图片操作</th></tr></thead><tbody></tbody></table></div>")).appendTo(m),r=o.one("tbody"),q=(new i("<p style='margin:15px 15px 30px; 0;text-align:right;'><a class='ke-button ke-bangpiaupload-ok'>确定上传</a><a class='ke-button ke-bangpiaupload-insertall' style='margin-left:20px;'>全部插入</a><a class='ke-button ke-bangpiaupload-delall' style='margin-left:20px;'>清空列表</a></p>")).appendTo(m),
C=q.one(".ke-bangpiaupload-ok");e=q.one(".ke-bangpiaupload-insertall");var D=q.one(".ke-bangpiaupload-delall");l.guid("ke-bangpai-upload");q=(new i("<span>")).insertBefore(q[0].firstChild);a._sizeLimit=b.sizeLimit||1E4;a._numberLimit=b.numberLimit||15;var z="允许用户同时上传"+a._numberLimit+"张图片，单张图片容量不超过"+a._sizeLimit/1E3+"M";w.fpvGEQ("10.0.0")||(z="您的flash插件版本过低，该功能不可用，请<a href='http://get.adobe.com/cn/flashplayer/' target='_blank'>点此升级</a>");g.disable();f.one("span").html(z);if(w.fpvGEQ("10.0.0")){b.extraHtml&&
o.append(b.extraHtml);a._list=r;a._listTable=r.parent("table");a._listWrap=m;a._ds=b.serverUrl;a._dsp=b.serverParams||{};a._fileInput=b.fileInput||"Filedata";a.statusText=q;a.btn=g;a.up=C;b=g.el.offset();o=g.el.width()*2;g=g.el.height()*1.5;f=(new i("<div style='"+("position:absolute;width:"+o+"px;height:"+g+"px;z-index:"+c.baseZIndex(9999)+";")+"'>")).appendTo(f);f.offset(b);g=new h.FlashBridge({movie:B,ajbridge:true,methods:["removeFile","cancel","removeFile","lock","unlock","setAllowMultipleFiles",
"setFileFilters","uploadAll"],holder:f,attrs:{width:o,height:g},params:{wmode:"transparent"},flashVars:{allowedDomain:location.hostname,btn:true,hand:true}});a.flashPos=f;a.uploader=g;e.on("click",function(){for(var k=r.all("tr"),j=0;j<k.length;j++){var t=new i(k[j]),u=t.attr("url");if(u){c.insertElement(new i("<p>&nbsp;<img src='"+u+"'/>&nbsp;</p>",null,c.document));a._removeTrFile(t)}}if(u){m.hide();d.hide()}});r.on("click",function(k){var j=new i(k.target);k.halt();if(j.hasClass("ke-upload-insert")){k=
j.parent("tr");url=k.attr("url");c.insertElement(new i("<img src='"+url+"'/>",null,c.document))}if(j.hasClass("ke-upload-delete")||j.hasClass("ke-upload-insert")){k=j.parent("tr");a._removeTrFile(k)}});D.on("click",function(){for(var k=r.all("tr"),j=0;j<k.length;j++){var t=new i(k[j]);a._removeTrFile(t)}m.hide()});g.on("fileSelect",a._onSelect,a);g.on("uploadStart",a._onUploadStart,a);g.on("uploadProgress",a._onProgress,a);g.on("uploadCompleteData",a._onUploadCompleteData,a);g.on("contentReady",a._ready,
a);g.on("uploadError",a._uploadError,a);a._restore()}},_removeTrFile:function(a){var c=a.attr("fid"),b=this.uploader;if(c){try{b.cancel(c)}catch(d){}b.removeFile(c)}if(p[c]){p[c].destroy();delete p[c]}a._4e_remove();this.denable();this._syncStatus()},_init:function(){var a=this,c=a.editor,b=new h.TripleButton({contentCls:"ke-toolbar-mul-image",title:"批量插图",container:c.toolBarDiv});b.on("offClick",a.show,a);a.el=b;h.Utils.lazyRun(a,"_prepareShow","_realShow");h.Utils.sourceDisable(c,a);a.disable();
h.storeReady(function(){a.enable()})},disable:function(){this.el.disable()},enable:function(){this.el.boff()},_realShow:function(){this.dialog.show()},show:function(){this._prepareShow()},_uploadError:function(a){var c=a.file.id,b=this._getFileTr(c);c=p[c];var d=a.status;if(!a._custom){l.log(d);d="服务器出错或格式不正确"}if(b){c&&c.destroy();b.one(".ke-upload-progress").html("<div style='color:red;'>"+d+"</div>")}},_getFileTr:function(a){for(var c=this._list.all("tr"),b=0;b<c.length;b++){var d=new i(c[b]);if(d.attr("fid")==
a)return d}},_onUploadStart:function(a){this.uploader.removeFile(a.file.id)},_onUploadCompleteData:function(a){var c=l.trim(a.data).replace(/\r|\n/g,"");a=a.file.id;if(c){c=s.parse(c);if(c.error)this._uploadError({id:a,_custom:1,status:c.error});else{if(a=this._getFileTr(a)){a.one(".ke-upload-insert").show();a.attr("url",c.imgUrl)}this._syncStatus()}}},_onProgress:function(a){var c=Math.floor(a.bytesLoaded*100/a.bytesTotal);(a=p[a.file.id])&&a.set("progress",c)},ddisable:function(){this.uploader.lock();
this.btn.disable();this.flashPos.offset({left:-9999,top:-9999})},denable:function(){this.uploader.unlock();this.btn.enable();this.flashPos.offset(this.btn.el.offset())},_syncStatus:function(){var a=this._list,c=1,b=a.all("tr");if(b.length==0)this._listWrap.hide();else{a.all(".ke-upload-seq").each(function(e){e.html(c++)});for(var d=a=0;d<b.length;d++)(new i(b[d])).attr("url")||a++;this.statusText.html("队列中剩余"+a+"张图片，点击确定上传，开始上传。 ")}this._save()},_restore:function(){var a=y.getItem("Multi-Upload-Save"),
c=this._list[0],b,d;if(a){a=s.parse(decodeURIComponent(a));for(var e=0;e<a.length;e++){b=a[e];b.complete=1;b.fid="restore_"+e;d=this._createFileTr(c,b);d.attr("url",b.url)}if(b){this._listWrap.show();this._syncStatus()}}},_save:function(){for(var a=this._list.all("tr"),c=[],b,d,e,f=0;f<a.length;f++){b=new i(a[f]);if(d=b.attr("url")){e=b.one(".ke-upload-filesize").html();b=b.one(".ke-upload-filename").html();c.push({name:b,size:e,url:d})}}y.setItem("Multi-Upload-Save",encodeURIComponent(s.stringify(c)))},
_getFilesSize:function(a){var c=0,b;for(b in a)a.hasOwnProperty(b)&&c++;return c},_createFileTr:function(a,c){var b=c.fid,d=a.insertRow(-1),e,f=this._sizeLimit;n.attr(d,"fid",b);e=d.insertCell(-1);n.attr(e,"class","ke-upload-seq");e=d.insertCell(-1);if(c.name.length>18)c.name=c.name.substring(0,18)+"...";n.html(e,c.name);n.attr(e,"class","ke-upload-filename");e=d.insertCell(-1);n.html(e,c.size);n.attr(e,"class","ke-upload-filesize");e=d.insertCell(-1);n.attr(e,"class","ke-upload-progress");e=d.insertCell(-1);
n.html(e,"<a href='#' class='ke-upload-insert' "+(c.complete?"":"style='display:none'")+">[插入]</a> &nbsp; <a href='#' class='ke-upload-delete'>[删除]</a> &nbsp;");d=new i(d);d.one(".ke-upload-progress");if(parseInt(c.size)>f){this._uploadError({id:b,_custom:1,status:"图片太大，请压缩至 n M以下".replace(/n/,f/1E3)});this.uploader.removeFile(b)}else{p[b]=new h.ProgressBar({container:d.one(".ke-upload-progress"),width:"100px",height:"15px"});c.complete&&p[b].set("progress",100)}return d},_onSelect:function(a){var c=
this.uploader,b=this._list,d=0;a=a.fileList;var e=this._numberLimit,f;if(a){e=b.children("tr");for(b=0;b<e.length;b++)(f=n.attr(e[b],"fid"))&&a[f]&&delete a[f];e=this._numberLimit-e.length;f=this._getFilesSize(a);f>e&&alert("系统将只保留 n 张".replace(/n/,this._numberLimit));f>=e&&this.ddisable();this._listWrap.show();f=this._list[0];for(b in a)if(a.hasOwnProperty(b)){d++;var m=a[b],g=Math.floor(m.size/1E3),o=m.id;d>e?c.removeFile(o):this._createFileTr(f,{size:g+"k",fid:o,name:m.name})}this._syncStatus()}},
_ready:function(){var a=this,c=a.uploader,b=a.up,d=a.btn,e=a.flashPos,f=h.Utils.normParams;d.enable();e.offset(d.el.offset());c.setAllowMultipleFiles(true);c.setFileFilters([{ext:"*.jpeg;*.jpg;*.png;*.gif",desc:"图片文件( png,jpg,jpeg,gif )"}]);b.detach();b.on("click",function(m){m.halt();c.uploadAll(a._ds,"POST",f(a._dsp),true,a._fileInput)})}});h.BangPaiUpload=x}();v.addPlugin(function(){new h.BangPaiUpload(v)})},{attach:false,requires:["flashutils","progressbar","flashbridge","overlay","localStorage"]});
