KISSY.add("ext-stdmod",function(b){function d(){b.log("stdmod init");this.on("renderUI",this._renderUIStdMod,this);this.on("syncUI",this._syncUIStdMod,this);this.on("bindUI",this._bindUIStdMod,this)}b.namespace("Ext");var e=b.Node;d.ATTRS={header:{},body:{},footer:{},bodyStyle:{},headerContent:{value:false},bodyContent:{value:false},footerContent:{value:false}};d.HTML_PARSER={header:".ks-stdmod-header",body:".ks-stdmod-body",footer:".ks-stdmod-footer"};d.prototype={_bindUIStdMod:function(){b.log("_bindUIStdMod")},
_syncUIStdMod:function(){b.log("_syncUIStdMod")},_setStdModContent:function(a,c){if(c!==false)if(b.isString(c))this.get(a).html(c);else{this.get(a).html("");this.get(a).append(c)}},_uiSetBodyStyle:function(a){a!==undefined&&this.get("body").css(a)},_uiSetBodyContent:function(a){b.log("_uiSetBodyContent");this._setStdModContent("body",a)},_uiSetHeaderContent:function(a){b.log("_uiSetHeaderContent");this._setStdModContent("header",a)},_uiSetFooterContent:function(a){b.log("_uiSetFooterContent");this._setStdModContent("footer",
a)},_renderUIStdMod:function(){b.log("_renderUIStdMod");var a=this.get("contentEl"),c=this.get("header"),f=this.get("body"),g=this.get("footer");this.get("headerContent");this.get("bodyContent");this.get("footerContent");if(!c){c=(new e("<div class='ks-stdmod-header'>")).appendTo(a);this.set("header",c)}if(!f){f=(new e("<div class='ks-stdmod-body'>")).appendTo(a);this.set("body",f)}if(!g){g=(new e("<div class='ks-stdmod-footer'>")).appendTo(a);this.set("footer",g)}},__destructor:function(){b.log("stdmod __destructor")}};
b.Ext.StdMod=d});
