KISSY.Editor.add("table/support",function(){function o(a){var d=this,b={},c;for(c in p)(function(f){b[f]=function(){a.fire("save");p[f](d);a.fire("save")}})(c);j.ContextMenu.register({editor:a,rules:x,width:"120px",funcs:b});d.editor=a}function q(a){function d(l){if(!(f.length>0))if(l[0].nodeType==y.NODE_ELEMENT&&r.test(l._4e_name())&&!l.data("selected_cell")){l._4e_setMarker(e,"selected_cell",true);f.push(l)}}for(var b=a.createBookmarks(),c=a.getRanges(),f=[],e={},g=0;g<c.length;g++){var h=c[g];
if(h.collapsed){h=h.getCommonAncestor();(h=h._4e_ascendant("td",true)||h._4e_ascendant("th",true))&&f.push(h)}else{h=new Walker(h);var k;for(h.guard=d;k=h.next();)if((k=k.parent())&&r.test(k._4e_name())&&!k.data("selected_cell")){k._4e_setMarker(e,"selected_cell",true);f.push(k)}}}j.Utils.clearAllMarkers(e);a.selectBookmarks(b);return f}function s(a,d){var b=a.getStartElement()._4e_ascendant("tr");if(b){var c=b._4e_clone(true);c.insertBefore(b);b=(d?c[0]:b[0]).cells;for(c=0;c<b.length;c++){b[c].innerHTML=
"";t.ie||(new i(b[c]))._4e_appendBogus()}}}function n(a){if(a instanceof j.Selection){var d=q(a),b=d.length;a=[];for(var c,f,e=0;e<b;e++){var g=d[e].parent(),h=g[0].rowIndex;!e&&(c=h-1);a[h]=g;e==b-1&&(f=h+1)}e=g._4e_ascendant("table");c=new i(f<e[0].rows.length&&e[0].rows[f]||c>0&&e[0].rows[c]||e[0].parentNode);for(e=a.length;e>=0;e--)a[e]&&n(a[e]);return c}else if(a instanceof i){e=a._4e_ascendant("table");e[0].rows.length==1?e._4e_remove():a._4e_remove()}return 0}function u(a,d){var b=a.getStartElement();
if(b=b._4e_ascendant("td",true)||b._4e_ascendant("th",true))for(var c=b._4e_ascendant("table"),f=b[0].cellIndex,e=0;e<c[0].rows.length;e++){var g=c[0].rows[e];if(!(g.cells.length<f+1)){b=new i(g.cells[f].cloneNode(false));t.ie||b._4e_appendBogus();g=new i(g.cells[f]);d?b.insertBefore(g):b.insertAfter(g)}}}function v(a){if(a instanceof j.Selection){var d=q(a),b,c=[];a=d[0]&&d[0]._4e_ascendant("table");var f,e,g;f=0;for(e=d.length;f<e;f++)c.push(d[f][0].cellIndex);c.sort();f=1;for(e=c.length;f<e;f++)if(c[f]-
c[f-1]>1){g=c[f-1]+1;break}g||(g=c[0]>0?c[0]-1:c[c.length-1]+1);c=a[0].rows;f=0;for(e=c.length;f<e;f++)if(b=c[f].cells[g])break;b=b?new i(b):a._4e_previous();for(g=d.length-1;g>=0;g--)d[g]&&v(d[g]);return b}else if(a instanceof i){d=a._4e_ascendant("table");if(!d)return null;b=a[0].cellIndex;for(g=d[0].rows.length-1;g>=0;g--){a=new i(d[0].rows[g]);if(!b&&a[0].cells.length==1)n(a);else a[0].cells[b]&&a[0].removeChild(a[0].cells[b])}}return null}function w(a,d){var b=new j.Range(a[0].ownerDocument);
if(!b.moveToElementEditablePosition(a,d?true:undefined)){b.selectNodeContents(a);b.collapse(d?false:true)}b.select(true)}var m=KISSY,t=m.UA,i=m.Node,j=m.Editor,y=j.NODE,x=["tr","th","td","tbody","table"];m.augment(o,{_tableShow:function(a,d,b){this.editor.useDialog("table/dialog",function(c){c.show(d,b)})}});var r=/^(?:td|th)$/,p={"\u8868\u683c\u5c5e\u6027":function(a){var d=a.editor.getSelection(),b=d&&d.getStartElement();if(d=b&&b._4e_ascendant("table",true)){b=b._4e_ascendant(function(c){c=c._4e_name();return c==
"td"||c=="th"},true);a._tableShow(null,d,b)}},"\u5220\u9664\u8868\u683c":function(a){var d=(a=a.editor.getSelection())&&a.getStartElement();if(d=d&&d._4e_ascendant("table",true)){a.selectElement(d);var b=a.getRanges()[0];b.collapse();a.selectRanges([b]);a=d.parent();a[0].childNodes.length==1&&a._4e_name()!="body"&&a._4e_name()!="td"?a._4e_remove():d._4e_remove()}},"\u5220\u9664\u884c ":function(a){a=a.editor.getSelection();w(n(a),undefined)},"\u5220\u9664\u5217 ":function(a){a=a.editor.getSelection();(a=v(a))&&w(a,true)},"\u5728\u4e0a\u65b9\u63d2\u5165\u884c":function(a){a=a.editor.getSelection();
s(a,true)},"\u5728\u4e0b\u65b9\u63d2\u5165\u884c":function(a){a=a.editor.getSelection();s(a,undefined)},"\u5728\u5de6\u4fa7\u63d2\u5165\u5217":function(a){a=a.editor.getSelection();u(a,true)},"\u5728\u53f3\u4fa7\u63d2\u5165\u5217":function(a){a=a.editor.getSelection();u(a,undefined)}};j.TableUI=o},{requires:["contextmenu"]});
