KISSY.Editor.add("templates",function(g){var b=KISSY,i=b.Node,j=b.Editor.Dialog;b.DOM.addStyleSheet(".ke-tpl {    border: 2px solid #EEEEEE;    width: 95%;    margin: 20px auto;}.ke-tpl-list {    border: 1px solid #EEEEEE;    margin: 5px;    padding: 7px;    display: block;    text-decoration: none;    zoom: 1;}.ke-tpl-list:hover, .ke-tpl-selected {    background-color: #FFFACD;    text-decoration: none;    border: 1px solid #FF9933;}","ke-templates");g.ready(function(){g.addButton("templates",{contentCls:"ke-toolbar-template",
title:"\u6a21\u677f",offClick:function(){this.cfg._prepare.call(this)},_prepare:function(){for(var h=this.editor,c=h.cfg.pluginConfig.templates||[],d="<div class='ke-tpl'>",e=0;e<c.length;e++)d+="<a href='javascript:void(0)' class='ke-tpl-list' tabIndex='-1'>"+c[e].demo+"</a>";d+="</div>";var f=new j({width:500,mask:true,autoRender:true,headerContent:"\u5185\u5bb9\u6a21\u677f",bodyContent:d});f.get("el").all(".ke-tpl-list").on("click",function(a){a.halt();a=(new i(a.target))._4e_index();a!=-1&&h.insertHtml(c[a].html);f.hide()});
this.ui=f;this.cfg.show.call(this);this.cfg._prepare=this.cfg.show},show:function(){this.ui.show()}})})});
