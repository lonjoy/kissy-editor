KISSY.Editor.add("preview",function(e){e.ready(function(){e.addButton("preview",{title:"\u9884\u89c8",contentCls:"ke-toolbar-preview",offClick:function(){var c=this.editor,b=640,a=420,f=80;try{var d=window.screen;b=Math.round(d.width*0.8);a=Math.round(d.height*0.7);f=Math.round(d.width*0.1)}catch(g){}c=c._prepareIFrameHtml().replace(/<body[^>]+>.+<\/body>/,"<body>\n"+c.getData(true)+"\n</body>").replace(/\${title}/,"\u9884\u89c8");b=window.open("","","toolbar=yes,location=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width="+
b+",height="+a+",left="+f);a=b.document;a.open();a.write(c);a.close();b.focus()}})})});
