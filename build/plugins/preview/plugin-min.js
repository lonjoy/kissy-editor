KISSY.Editor.add("preview",function(e){var c=KISSY.Editor,i=KISSY,j=c.TripleButton;c.Preview||function(){function f(a){this.editor=a;this._init()}i.augment(f,{_init:function(){this.el=new j({container:this.editor.toolBarDiv,cls:"ke-tool-editor-source",title:"\u9884\u89c8",contentCls:"ke-toolbar-preview"});this.el.on("offClick",this._show,this)},_show:function(){var a=this.editor,b=640,g=420,h=80;try{var d=window.screen;b=Math.round(d.width*0.8);g=Math.round(d.height*0.7);h=Math.round(d.width*0.1)}catch(k){}a=
a._prepareIFrameHtml().replace(/<body[^>]+>.+<\/body>/,"<body>\n"+a.getData()+"\n</body>");b=window.open("",null,"toolbar=yes,location=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width="+b+",height="+g+",left="+h);b.document.open();b.document.write(a);b.document.close()}});c.Preview=f}();e.addPlugin(function(){new c.Preview(e)})});
