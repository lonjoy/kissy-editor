KISSY.Editor.add("table",function(e){var c=KISSY,f=c.Editor,h=c.trim,i=(c.UA.ie===6?["table.%2,","table.%2 td, table.%2 th,","{","border : #d3d3d3 1px dotted","}"]:[" table.%2,"," table.%2 > tr > td,  table.%2 > tr > th,"," table.%2 > tbody > tr > td,  table.%2 > tbody > tr > th,"," table.%2 > thead > tr > td,  table.%2 > thead > tr > th,"," table.%2 > tfoot > tr > td,  table.%2 > tfoot > tr > th","{","border : #d3d3d3 1px dotted","}"]).join("").replace(/%2/g,"ke_show_border"),b=e.htmlDataProcessor;
c=b&&b.dataFilter;b=b&&b.htmlFilter;c&&c.addRules({elements:{table:function(a){a=a.attributes;var d=a["class"],g=parseInt(a.border,10);if(!g||g<=0)a["class"]=(d||"")+" ke_show_border"}}});b&&b.addRules({elements:{table:function(a){a=a.attributes;var d=a["class"];if(d)a["class"]=h(d.replace("ke_show_border","").replace(/\s{2}/," "))}}});e.ready(function(){var a=e.addButton("table",{contentCls:"ke-toolbar-table",title:"\u63d2\u5165\u8868\u683c",loading:true});f.use("table/support",function(){var d=new f.TableUI(e);a.reload({offClick:function(){d._tableShow()}})});
e.addCustomStyle(i)})});
