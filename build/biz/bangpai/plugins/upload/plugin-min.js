KISSY.Editor.add("bangpai-upload",function(p){var f=KISSY,h=f.Editor;if(!h.BangPaiUpload){(function(){function m(a){this.editor=a;this._init()}var r=f.DOM,g=f.Node,n=[],s=h.Config.base+h.Utils.debugUrl("plugins/uploader/uploader.swf");g=f.Node;var k={};name="ke-bangpai-upload";r.addStyleSheet(".ke-upload-list {width:100%;}.ke-upload-list thead{border-top:1px solid #c1c8d1;background-color:#EBEDF1;}.ke-upload-list td,.ke-upload-list th {padding:0.5em;text-align:center;border-bottom:1px solid #c1c8d1;}",
"ke-BangPaiUpload");f.augment(m,f.EventTarget,{_init:function(){var a=this.editor,b=a.cfg.pluginConfig["bangpai-upload"],c=b.holder,d=f.isString(c)?f.one(c):c,e=(new g("<div style='position:relative;margin:10px;'>批量上传图片：</div>")).appendTo(d);c=(new g("<button disabled='disabled'>浏览</button>")).appendTo(e);var t=c.offset();e.offset();e=(new g("<div style='"+("position:absolute;width:"+(c.width()+8)+"px;height:"+(c.height()+8)+"px;z-index:9999;")+"'>")).appendTo(e);var q=(new g("<div><table class='ke-upload-list'><thead><tr><th>图片</td><th>大小</td><th>上传进度</td><th>图片操作</td></tr></thead><tbody></tbody></table></div>")).appendTo(d).one("tbody");
d=(new g("<p style='margin:10px;text-align:right;'><button>确定上传</button></p>")).appendTo(d).one("button");var i=f.guid(name);n[i]=this;this.btn=c;this.up=d;this.on("swfReady",this._ready,this);e.offset(t);var o=h.Utils.flash.createSWFRuntime(s,{holder:e,attrs:{allowScriptAccess:"always",allowNetworking:"all",scale:"noScale",width:c.width(),height:c.height()},flashVars:{allowedDomain:location.hostname,shareData:true,YUISwfId:i,YUIBridgeCallback:"KISSY.Editor.BangPaiUpload.EventHandler",browser:name,
useCompression:true,menu:true}});this.flash=o;this._list=q;this._ds=b.serverUrl;this._dsp=b.serverParams||{};q.on("click",function(j){var l=new g(j.target);j.halt();if(l.hasClass("ke-upload-insert")){j=l.parent("tr");url=j.attr("url");a.insertElement(new g("<img src='"+url+"'/>",null,a.document))}else if(l.hasClass("ke-upload-delete")){j=l.parent("tr");i=j.attr("fid");try{o.cancel(i)}catch(u){}o.removeFile(i);k[i].destroy();delete k[i];j._4e_remove()}});this.on("fileSelect",this._onSelect,this);this.on("uploadStart",
this._onUploadStart,this);this.on("uploadProgress",this._onProgress,this);this.on("uploadComplete",this._onComplete,this);this.on("uploadCompleteData",this._onUploadCompleteData,this)},_onUploadStart:function(a){this.flash.removeFile(a.id)},_onComplete:function(){},_onUploadCompleteData:function(a){var b=f.trim(a.data).replace(/\\r||\\n/g,"");a=a.id;var c=this._list.all("tr");if(b){b=JSON.parse(b);if(b.error)alert(b.error);else for(var d=0;d<c.length;d++){var e=new g(c[d]);if(e.attr("fid")==a){e.one(".ke-upload-insert").show();
e.attr("url",b.imgUrl)}}}},_onProgress:function(a){var b=a.bytesLoaded*100/a.bytesTotal;(a=k[a.id])&&a.set("progress",b)},_onSelect:function(a){var b=this._list;if(a=a.fileList)for(var c in a)if(a.hasOwnProperty(c)){var d=a[c],e=(new g("<tr fid='"+d.id+"'><td>"+d.name+"</td><td>"+Math.floor(d.size/1E3)+"k</td><td class='ke-upload-progress'></td><td><a href='#' class='ke-upload-insert' style='display:none'>[插入]</a> &nbsp; <a href='#' class='ke-upload-delete'>[删除]</a> &nbsp; </td></tr>")).appendTo(b);
k[d.id]=new h.ProgressBar({container:e.one(".ke-upload-progress"),width:"100px",height:"18px"})}},_ready:function(){var a=this,b=a.flash,c=a.up;a.btn[0].disabled=false;b.setAllowMultipleFiles(true);b.setFileFilters([{extensions:"*.jpeg;*.jpg;*.png;*.gif",description:"图片文件( png,jpg,jpeg,gif )"}]);c.on("click",function(){b.uploadAll(a._ds,"POST",a._dsp,"Filedata")})},_eventHandler:function(a){var b=a.type;if(b==="log")f.log(a.message);else b&&this.fire(b,a)}});m.EventHandler=function(a,b){n[a]._eventHandler.call(n[a],
b)};h.BangPaiUpload=m})();p.addPlugin(function(){new h.BangPaiUpload(p)})}},{attach:false,requires:["flashutils","progressbar"]});
