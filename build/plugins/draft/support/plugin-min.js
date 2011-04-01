KISSY.Editor.add("draft/support",function(){function m(a,b,d){for(a+="";a.length<b;)a=d+a;return a}function o(a){if(g.isNumber(a))a=new Date(a);return a instanceof Date?[a.getFullYear(),"-",m(a.getMonth()+1,2,"0"),"-",m(a.getDate(),2,"0")," ",m(a.getHours(),2,"0"),":",m(a.getMinutes(),2,"0"),":",m(a.getSeconds(),2,"0")].join(""):a}function p(a){this.editor=a;this._init()}var g=KISSY,i=g.Editor,l=g.Node,n=g.Event,q=g.JSON,r=window[i.STORE],j=i.Utils.addRes,t=i.Utils.destroyRes;g.augment(p,{_getDrafts:function(){if(!this.drafts){var a=
r.getItem("ke-draft-save"),b=[];if(a)b=g.isString(a)?q.parse(decodeURIComponent(a)):a;this.drafts=b}return this.drafts},_init:function(){var a=this,b=a.editor,d=b.statusDiv,c=b.cfg.pluginConfig;c.draft=c.draft||{};a.draftInterval=c.draft.interval=c.draft.interval||5;a.draftLimit=c.draft.limit=c.draft.limit||5;d=(new l("<div class='ke-draft'><spa class='ke-draft-title'>\u5185\u5bb9\u6b63\u6587\u6bcf"+c.draft.interval+"\u5206\u949f\u81ea\u52a8\u4fdd\u5b58\u4e00\u6b21\u3002</span></div>")).appendTo(d);a.timeTip=(new l("<span class='ke-draft-time'>")).appendTo(d);var e=
(new l("<a class='ke-button ke-draft-save-btn' style='vertical-align:middle;padding:1px 9px;'><span class='ke-draft-mansave'></span><span>\u7acb\u5373\u4fdd\u5b58</span></a>")).appendTo(d),f=new i.Select({container:d,menuContainer:document.body,doc:b.document,width:"85px",popUpWidth:"225px",align:["r","t"],emptyText:"&nbsp;&nbsp;&nbsp;\u5c1a\u65e0\u7f16\u8f91\u5668\u5386\u53f2\u5b58\u5728",title:"\u6062\u590d\u7f16\u8f91\u5386\u53f2"});a.versions=f;f.on("select",function(){f.detach("select",arguments.callee);a.sync()});e._4e_unselectable();e.on("click",function(k){a.save(false);k.halt()});
j.call(a,e);b.textarea[0].form&&function(){function k(){a.save(true)}var s=b.textarea[0].form;n.on(s,"submit",k);j.call(a,function(){n.remove(s,"submit",k)})}();var h=setInterval(function(){a.save(true)},a.draftInterval*60*1E3);j.call(a,function(){clearInterval(h)});f.on("click",a.recover,a);j.call(a,f);a.holder=d;if(c.draft.helpHtml){c=new i.TripleButton({cls:"ke-draft-help",title:"\u5e2e\u52a9",text:"\u5e2e\u52a9",container:d});c.on("click",function(k){a._prepareHelp();k&&k.halt()});j.call(a,c);i.Utils.lazyRun(a,"_prepareHelp",
"_realHelp");a.helpBtn=c.el}a._holder=d;j.call(a,d)},_prepareHelp:function(){function a(h){h&&h.halt();h=new l(h.target);h[0]==c[0]||c.contains(h)||b._help.hide()}var b=this,d=b.editor,c=b.helpBtn,e=new l(d.cfg.pluginConfig.draft.helpHtml||""),f=new l("<div style='height:0;position:absolute;font-size:0;width:0;border:8px #000 solid;border-color:#000 transparent transparent transparent;border-style:solid dashed dashed dashed;border-top-color:#CED5E0;'><div style='height:0;position:absolute;font-size:0;width:0;border:8px #000 solid;border-color:#000 transparent transparent transparent;border-style:solid dashed dashed dashed;left:-8px;top:-10px;border-top-color:white;'></div></div>");
e.append(f);e.css({border:"1px solid #ACB4BE","text-align":"left"});b._help=new g.Overlay({content:e,autoRender:true,width:e.width()+"px",mask:false});b._help.el.css("border","none");b._help.arrow=f;n.on([document,d.document],"click",a);j.call(b,b._help,function(){n.remove([document,d.document],"click",a)})},_realHelp:function(){var a=this._help,b=this.helpBtn,d=a.arrow;a.show();b=b.offset();a.el.offset({left:b.left-a.el.width()+17,top:b.top-a.el.height()-7});d.offset({left:b.left-2,top:b.top-8})},
disable:function(){this.holder.css("visibility","hidden")},enable:function(){this.holder.css("visibility","")},sync:function(){var a=this.draftLimit,b=this.timeTip,d=this.versions,c=this._getDrafts();c.length>a&&c.splice(0,c.length-a);a=[];for(var e,f=0;f<c.length;f++){e=c[f];e=(e.auto?"\u81ea\u52a8":"\u624b\u52a8")+"\u4fdd\u5b58\u4e8e : "+o(e.date);a.push({name:e,value:f})}d.set("items",a.reverse());b.html(e);r.setItem("ke-draft-save",encodeURIComponent(q.stringify(c)))},save:function(a){var b=this._getDrafts(),d=this.editor.getData(true);
if(d){var c=this.draftLimit;if(g.UA.ie&&d.length>1E5/(c*1.2))a||alert("\u6587\u7ae0\u6709\u70b9\u957f\uff0c\u8349\u7a3f\u7bb1\u5bb9\u4e0d\u4e0b:(");else{if(b[b.length-1]&&d==b[b.length-1].content)b.length-=1;this.drafts=b.concat({content:d,date:(new Date).getTime(),auto:a});this.sync()}}},recover:function(a){var b=this.editor,d=this.versions,c=this._getDrafts(),e=a.newVal;d.reset("value");if(confirm("\u786e\u8ba4\u6062\u590d "+o(c[e].date)+" \u7684\u7f16\u8f91\u5386\u53f2\uff1f")){b.fire("save");b.setData(c[e].content);b.fire("save")}a&&a.halt()},destroy:function(){t.call(this)}});i.Draft=p},{attach:false,
requires:["localstorage"]});
