/*
Copyright 2012, KISSY UI Library v1.20
MIT Licensed
build time: May 22 16:11
*/
KISSY.add("validation/base",function(f,g,h,d,c,b,a,e){function j(a,b){f.isString(a)&&(a=f.get(a));a?this._init(a,b||{}):d.log("\u8bf7\u914d\u7f6e\u6b63\u786e\u7684form ID.")}f.augment(j,f.EventTarget,{_init:function(a,b){this.config=f.merge(c.Config,b);this.form=a;this.fields=new d.storage;this._initfields()},_initfields:function(){var a=this,b=a.config;f.each(a.form.elements,function(e){var c=g.attr(e,b.attrname);c&&a.add(e,d.toJSON(c.replace(/'/g,'"')))})},add:function(a,e){var n=this.fields,c=f.merge(this.config,e);if(f.isObject(a)&&
a instanceof b)return n.add(g.attr(a.el,"id"),a),this;var j=g.get(a)||g.get("#"+a),o=g.attr(j,"id");!j||j.form!=this.form?d.log("\u5b57\u6bb5"+a+"\u4e0d\u5b58\u5728\u6216\u4e0d\u5c5e\u4e8e\u8be5form"):(o||(o=c.prefix+f.guid(),g.attr(j,"id",o)),n.add(o,new b(j,c)))},remove:function(a){this.fields.remove(a)},get:function(a){return this.fields.get(a)},isValid:function(a){var b=this.fields;if(a&&b.get(a))return b.get(a).isValid();var e=!0;b.each(function(a,b){if(!b.isValid()&&(e=!1,b.single))return!1});return e},submit:function(){this.fire("submit",
this.fields)&&this.isValid()&&this.form.submit()}});f.mix(j,{Util:d,Define:c,Field:b,Warn:a,Rule:e});return j},{requires:"dom,event,./utils,./define,./field,./warn,./rule".split(",")});KISSY.add("validation/define",function(){return{Config:{attrname:"data-valid",prefix:"auth-f",defaultwarn:"alert"},Const:{enumvalidsign:{error:0,ok:1,hint:2,ignore:3}}}});
KISSY.add("validation/field",function(f,g,h,d,c,b,a,e){function j(a,b){(a=f.get(a))?(this.el=a,this.rule=new d.storage,this._init(b)):d.log("\u5b57\u6bb5\u4e0d\u5b58\u5728\u3002")}var m=c.Const.enumvalidsign,k=document;j.Config={required:[!0,"\u6b64\u9879\u4e3a\u5fc5\u586b\u9879\u3002"],initerror:"data-showerror"};f.augment(j,{_init:function(a){a=f.merge(j.Config,a||{});f.mix(this,a,"label");this._initField();this._initVType(a);this._initWarn(a);g.attr(this.el,a.initerror)&&this.showMessage(!1,g.attr(this.el,a.initerror))},_initField:function(){var a=this.el;if(-1<
"checkbox,radio".indexOf(g.attr(a,"type"))){var b=a.form,a=g.attr(a,"name"),e=[];f.each(k.getElementsByName(a),function(a){a.form==b&&e.push(a)});this.el=e}},_initVType:function(b){var e=this,c=e.el,d;for(d in b)e.addRule(d,b[d]);if(b.remote){var b=f.isArray(b.remote)?{url:b.remote[0]}:b.remote,j=new a(c,b,function(a,b){e.showMessage(a,b)});e.addRule("ajax",function(a){return j.check(a)})}},_initWarn:function(a){var b=this,c,j={};a.warn&&(c=f.isFunction(a.warn)?a.warn:e.get(a.warn),j=f.merge(a,{}));
a.style&&e.getStyle(a.style)&&(j=e.getStyle(a.style),c=e.get(j.core),j=f.merge(a,j));c?(c=new c(b.el,j),c._bindEvent(b.el,a.event||c.event,function(){var a=b._validateValue();f.isArray(a)&&a.length==2&&b.showMessage(a[1],a[0])}),f.mix(b,{warn:c,single:c.single})):d.log("\u63d0\u793a\u4fe1\u606f\u7c7b\u914d\u7f6e\u9519\u8bef.")},_validateValue:function(){var a=this.rule,b=this._getValue(),a=a.getAll();if(g.attr(this.el,"disabled")||g.hasClass(this.el,"disabled")||a.depend&&!0!==a.depend.call(this,b))return[void 0,m.ignore];for(var e in a){if("required"==
e){var c=a.required.call(this,b);if(c)return this.label?[this.label,m.hint]:[c,m.error];if(d.isEmpty(b))return["",m.ignore]}if(!(-1<"depend".indexOf(e))){if(-1<"ajax".indexOf(e))break;c=a[e].call(this,b);if(!d.isEmpty(c))return this._ajaxtimer&&this._ajaxtimer.cancel(),[c,m.error]}}return a.ajax?a.ajax.call(this,b):[this.okMsg||"OK",m.ok]},_getValue:function(){var a=this.el,b=[];switch(g.attr(a,"type")){case "select-multiple":f.each(a.options,function(a){a.selected&&b.push(a.value)});break;case "radio":case "checkbox":f.each(a,
function(a){a.checked&&b.push(a.value)});break;default:b=g.val(a)}return b},addRule:function(a,e){var c=this.rule;if(f.isFunction(a))return c.add(f.guid(),a),this;var d=b.get(a,e);if(d)return c.add(a,d),this},removeRule:function(a){this.rule.remove(a)},showMessage:function(a,b,e){this.warn.showMessage(a,b,e)},isValid:function(){var a=this._validateValue();this.showMessage(a[1],a[0]);return 0!=a[1]}});return j},{requires:"dom,event,./utils,./define,./rule,./rule/remote,./warn".split(",")});
KISSY.add("validation/rule",function(f,g,h){return h},{requires:["./utils","./rule/base","./rule/normal"]});
KISSY.add("validation/rule/base",function(f,g,h,d){return new function(){var c=new d.storage;this.add=function(b,a,e){f.isFunction(e)&&c.add(b,{name:b,fun:e,text:a})};this.get=function(b,a){var e=c.get(b);if(!e)return null;var d=e.fun,e=e.text,g=d.length-1,k=[];a?f.isArray(a)?a.length>=g?(k.push(a[a.length-1]),k=k.concat(a.slice(0,-1))):(k.push(e),k=k.concat(a)):0<g?(k.push(e),k.push(a)):k.push(e):k=[e];return function(a){return d.apply(this,[a].concat(k))}};this.toString=function(b,a){var e=c.get(b);
if(e)return d.format(a||"\u3010\u89c4\u5219\u540d\u3011\n {0}\n\n\u3010\u9ed8\u8ba4\u63d0\u793a\u4fe1\u606f\u3011\n {1}\n\n\u3010\u51fd\u6570\u4f53\u3011\n {2}",e.name,e.text,e.fun.toString())}}},{requires:["dom","event","../utils"]});
KISSY.add("validation/rule/normal",function(f,g,h,d,c){c.add("func","\u6821\u9a8c\u5931\u8d25\u3002",function(b,a,e){b=e.call(this,b);if(!1===b)return a;if(!d.isEmpty(b))return b});c.add("regex","\u6821\u9a8c\u5931\u8d25\u3002",function(b,a,e){if(!RegExp(e).test(b))return a});c.add("depend","\u8be5\u5b57\u6bb5\u65e0\u9700\u6821\u9a8c",function(b,a,e){return e.call(this,b)});c.add("ajax","\u6821\u9a8c\u5931\u8d25\u3002",function(b,a,e){return e.call(this,b)});c.add("required","\u6b64\u9879\u4e3a\u5fc5\u586b\u9879\u3002",function(b,a,e){if(f.isArray(b)&&0==b.length||d.isEmpty(b)&&e)return a});c.add("equalTo","\u4e24\u6b21\u8f93\u5165\u4e0d\u4e00\u81f4\u3002",function(b,a,e){if(b!==
g.val(f.get(e)))return a});c.add("length","\u5b57\u7b26\u957f\u5ea6\u4e0d\u80fd\u5c0f\u4e8e{0},\u4e14\u4e0d\u80fd\u5927\u4e8e{1}",function(b,a,e,c,f){b=d.getStrLen(b,f);e=d.toNumber(e);c=d.toNumber(c);if(!(b>=e&&b<=c))return d.format(a,e,c)});c.add("minLength","\u4e0d\u80fd\u5c0f\u4e8e{0}\u4e2a\u5b57\u7b26\u3002",function(b,a,e,c){b=d.getStrLen(b,c);e=d.toNumber(e);if(b<e)return d.format(a,e)});c.add("maxLength","\u4e0d\u80fd\u5927\u4e8e{0}\u4e2a\u5b57\u7b26\u3002",function(b,a,e,c){b=d.getStrLen(b,c);e=d.toNumber(e);if(b>e)return d.format(a,e)});c.add("fiter","\u5141\u8bb8\u7684\u683c\u5f0f{0}\u3002",function(b,a,e){if(!RegExp("^.+.(?=EXT)(EXT)$".replace(/EXT/g,e.split(/\s*,\s*/).join("|")),
"gi").test(b))return d.format(a,e)});c.add("range","\u53ea\u80fd\u5728{0}\u81f3{1}\u4e4b\u95f4\u3002",function(b,a,e,c){e=d.toNumber(e);c=d.toNumber(c);if(b<e||b>c)return d.format(a,e,c)});c.add("group","\u53ea\u80fd\u5728{0}\u81f3{1}\u4e4b\u95f4\u3002",function(b,a,e,c){if(f.isArray(b)&&(b=b.length,!(b>=e&&b<=c)))return d.format(a,e,c)});c.add("trim","\u4e24\u7aef\u4e0d\u80fd\u542b\u6709\u7a7a\u683c\u3002",function(b,a){if(/(^\s+)|(\s+$)/g.test(b))return a});c.add("ltrim","\u5b57\u7b26\u4e32\u6700\u524d\u9762\u4e0d\u80fd\u5305\u542b\u7a7a\u683c",function(b,a){if(/^\s+/g.test(b))return a});c.add("rtrim","\u5b57\u7b26\u4e32\u672b\u5c3e\u4e0d\u80fd\u5305\u542b\u7a7a\u683c",function(b,a){if(/\s+$/g.test(b))return a});c.add("card",
"\u8eab\u4efd\u8bc1\u53f7\u7801\u4e0d\u6b63\u786e",function(b,a){var e=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1],c=0;for(i=0;17>i;i++)c+=parseInt(b.charAt(i))*e[i];e=(12-c%11)%11;10==e&&(e="x");if(b.charAt(17).toLowerCase()!=e)return a});c.add("mobile","\u624b\u673a\u53f7\u7801\u4e0d\u5408\u6cd5",function(b,a){var e=!1;f.each({cm:/^(?:0?1)((?:3[56789]|5[0124789]|8[278])\d|34[0-8]|47\d)\d{7}$/,cu:/^(?:0?1)(?:3[012]|4[5]|5[356]|8[356]\d|349)\d{7}$/,ce:/^(?:0?1)(?:33|53|8[079])\d{8}$/,cn:/^(?:0?1)[3458]\d{9}$/,hk:/^(?:0?[1569])(?:\d{7}|\d{8}|\d{12})$/,macao:/^6\d{7}$/,tw:/^(?:0?[679])(?:\d{7}|\d{8}|\d{10})$/},
function(a){if(b.match(a))return e=!0,!1});if(!e)return a});f.each([["chinese",/^[\u0391-\uFFE5]+$/,"\u53ea\u80fd\u8f93\u5165\u4e2d\u6587"],["english",/^[A-Za-z]+$/,"\u53ea\u80fd\u8f93\u5165\u82f1\u6587\u5b57\u6bcd"],["currency",/^\d+(\.\d+)?$/,"\u91d1\u989d\u683c\u5f0f\u4e0d\u6b63\u786e\u3002"],["phone",/^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/,"\u7535\u8bdd\u53f7\u7801\u683c\u5f0f\u4e0d\u6b63\u786e\u3002"],["url",/^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]':+!]*([^<>""])*$/,"url\u683c\u5f0f\u4e0d\u6b63\u786e\u3002"],["email",/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,"\u8bf7\u8f93\u5165\u6b63\u786e\u7684email\u683c\u5f0f"]],function(b){c.add(b[0],b[2],function(a,e){if(!RegExp(b[1]).test(a))return e})})},
{requires:["dom","event","../utils","./base"]});
KISSY.add("validation/rule/remote",function(f,g,h,d){return function(c,b,a){function e(e){return function(c,d,j){c&&(!0===c.state||!1===c.state)?(a(c.state,c.message),c.state&&k.add(e,{est:c.state,msg:c.message})):a(0,"failure");f.isFunction(b.success)&&b.success.call(this,c,d,j);m=null}}var j=null,m=null,k=new d.storage,h=g.attr(c,"name"),l={loading:"loading",type:"POST",dataType:"json",data:{}};f.mix(l,b);l.error=function(a,c,e){f.isFunction(b.error)&&b.success.call(this,a,c,e)};this.check=function(a){var b=
k.get(a);if(b)return[b.msg,b.est];j&&j.cancel();j=f.later(function(){m&&m.abort();l.data[h]=a;l.success=e(a);m=f.io(l)},500);return[l.loading,0]}}},{requires:["dom","event","../utils"]});
KISSY.add("validation/utils",function(f,g){var h={log:f.log,toJSON:function(d){try{eval("var result="+d)}catch(c){return{}}return result},isEmpty:function(d){return null===d||d===g||""===d},format:function(d){var c=Array.prototype.slice.call(arguments,1);return d.replace(/\{(\d+)\}/g,function(b,a){return c[a]})},toNumber:function(d){d=new String(d);d=-1<d.indexOf(".")?parseFloat(d):parseInt(d);return isNaN(d)?0:d},getStrLen:function(d,c){return c?d.replace(/[^\x00-\xFF]/g,"**").length:d.length},storage:function(){this.cache=
{}}};f.augment(h.storage,{add:function(d,c,b){var a=this.cache;if(!a[d]||a[d]&&(null==b||b))a[d]=c},remove:function(d){var c=this.cache;c[d]&&delete c[d]},get:function(d){var c=this.cache;return c[d]?c[d]:null},getAll:function(){return this.cache},each:function(d){var c=this.cache,b;for(b in c)if(!1===d.call(this,b,c[b]))break}});return h});KISSY.add("validation/warn",function(f,g,h,d,c,b,a){h.extend("Alert",c);h.extend("Static",b);h.extend("Float",a);h.BaseClass=d;return h},{requires:"./utils,./warn/base,./warn/baseclass,./warn/alert,./warn/static,./warn/float".split(",")});
KISSY.add("validation/warn/alert",function(f,g,h,d,c){var b=c.Const.enumvalidsign;return function(){return{init:function(){this.single=!0},showMessage:function(a,c){if(a==b.error)return this.invalidClass&&g.addClass(this.target,this.invalidClass),alert(c),this.target.focus(),!1;this.invalidClass&&g.removeClass(this.target,this.invalidClass)},style:{alert:{invalidClass:"vailInvalid"}}}}},{requires:["dom","event","../utils","../define"]});
KISSY.add("validation/warn/base",function(f,g,h,d,c){var b=new d.storage,a=new d.storage;return{extend:function(a,d){var g=function(a,b){g.superclass.constructor.call(this,a,b)},k=f.isFunction(d)?d():d;if(k.style){for(var h in k.style)this.addStyle(h,f.merge(k.style[h],{core:a}));delete k.style}f.extend(g,c,k);b.add(a,g);return g},addStyle:function(b,c){a.add(b,c)},getStyle:function(b){return a.get(b)},get:function(a){return b.get(a)}}},{requires:["dom","event","../utils","./baseclass"]});
KISSY.add("validation/warn/baseclass",function(f,g,h){function d(c,b){this.target=f.isArray(c)?c[c.length-1]:c;this.el=c;this.single=!1;f.mix(this,b||{});this.init()}f.augment(d,f.EventTarget,{init:function(){},_bindEvent:function(c,b,a){if("select"==f.get(c).tagName.toLowerCase())h.on(c,"change",a);else switch((g.attr(c,"type")||"input").toLowerCase()){case "radio":case "checkbox":h.on(c,"click",a);break;case "file":h.on(c,"change",a);break;default:h.on(c,b,a)}},showMessage:function(){evttype=1}});
return d},{requires:["dom","event"]});
KISSY.add("validation/warn/float",function(f,g,h,d,c){var b=c.Const.enumvalidsign;return function(){return{invalidCls:"J_Invalid",init:function(){var a=this,b=a.target,c=g.create(a.template),d=g.get("div.msg",c);f.ready(function(){document.body.appendChild(c)});f.mix(a,{panel:f.one(c),msg:f.one(d)});h.on(a.el,"focus",function(c){g.hasClass(b,a.invalidCls)&&a._toggleError(!0,c.target)});h.on(a.el,"blur",function(){a._toggleError(!1)})},showMessage:function(a,c,d,f){var h=this.target,n=this.msg;b.ok==
a?(g.removeClass(h,this.invalidClass),n.html("OK")):("submit"!=d&&this._toggleError(!0,f),g.addClass(h,this.invalidClass),n.html(c))},_pos:function(a){var a=g.offset(a||this.target),b=this.panel.height(),b=a.top-b-20;this.panel.css("left",a.left-10).css("top",b)},_toggleError:function(a,b){var c=this.panel;a?(g.show(c),this._pos(b)):g.hide(c)},style:{"float":{template:'<div class="valid-float" style="display:none;"><div class="msg">&nbsp;</div><s>\u25e5\u25e4</s></div>',event:"focus blur",invalidClass:"vailInvalid"}}}}},
{requires:["dom","event","../utils","../define"]});
KISSY.add("validation/warn/static",function(f,g,h,d){var c=d.Const.enumvalidsign,b=g.all;return function(){return{init:function(){var a=b(this.target);if(a=a.attr("data-message")?b(a.attr("data-messagebox")):this.messagebox?b(this.messagebox):g(this.template).appendTo(a.parent()))this.panel=a,this.panelheight=a.css("height"),this.estate=a.one(".estate"),this.label=a.one(".label"),this.estate&&this.label&&a.hide()},showMessage:function(a,e){var d=b(this.el),g=this.panel,h=this.estate,n=this.label,
l=f.isNumber(this.anim)?this.anim:0.1;this.invalidClass&&(a==c.ignore&&a==c.ok?d.removeClass(this.invalidClass):d.addClass(this.invalidClass));var d="none"==g.css("display")?!1:!0,p=this.panelheight;a==c.ignore?d&&g.slideUp(l):(h.removeClass("ok tip error"),a==c.error?(h.addClass("error"),n.html(e),d||g.height(p).slideDown(l)):a==c.ok?!1===this.isok?d&&g.slideUp(l):(d||g.height(p).slideDown(l),h.addClass("ok"),n.html(this.oktext?this.oktext:e)):a==c.hint&&(h.addClass("tip"),n.html(e),d||g.height(p).slideDown(l)))},
style:{text:{template:'<label class="valid-text"><span class="estate"><em class="label"></em></span></label>',event:"focus blur keyup"},under:{template:'<div class="valid-under"><p class="estate"><span class="label"></span></p></div>',event:"focus blur keyup"}}}}},{requires:["node","../utils","../define"]});KISSY.add("validation",function(f,g){return f.Validation=g},{requires:["validation/base","validation/assets/base.css"]});
