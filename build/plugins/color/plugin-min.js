KISSY.Editor.add("color",function(j){function v(b){return("0"+b).slice(b.length-1,b.length+1)}function q(b){b=f.trim(b);if(b.charAt(0)=="#")b=b.substring(1);b=b.replace(/\s+/g,"");var g="";if(/^[0-9a-f]{3,3}$/i.test(b))g=b.replace(/[0-9a-f]/ig,function(c){return c+c});else{var a=b.match(w);if(a&&a[0])for(b=1;b<4;b++)g+=v(parseInt(a[b]).toString(16));else g=b}return"#"+g.toLowerCase()}for(var d=KISSY.Editor,f=KISSY,r=f.Node,s=f.Event,x=d.SimpleOverlay,k=d.Style,h=f.DOM,w=/^rgb\((\d+),(\d+),(\d+)\)$/i,
y="000,800000,8B4513,2F4F4F,008080,000080,4B0082,696969,B22222,A52A2A,DAA520,006400,40E0D0,0000CD,800080,808080,F00,FF8C00,FFD700,008000,0FF,00F,EE82EE,A9A9A9,FFA07A,FFA500,FFFF00,00FF00,AFEEEE,ADD8E6,DDA0DD,D3D3D3,FFF0F5,FAEBD7,FFFFE0,F0FFF0,F0FFFF,F0F8FF,E6E6FA,FFF".split(/,/),t={element:"span",styles:{color:"#(color)"},overrides:[{element:"font",attributes:{color:null}}]},u={element:"span",styles:{"background-color":"#(color)"}},e="<div class='ke-popup-wrap ke-color-wrap'><a class='ke-color-remove' href=\"javascript:void('\u6e05\u9664');\"><span>\u6e05\u9664</span></a><table>",
m={},n={},o=0;o<5;o++){e+="<tr>";for(var p=0;p<8;p++){var i=q(y[8*o+p]);e+="<td>";e+="<a href='javascript:void(0);' class='ke-color-a'><span style='background-color:"+i+"'></span></a>";e+="</td>";m[i]=new k(u,{color:i});n[i]=new k(t,{color:i})}e+="</tr>"}m.inherit=new k(u,{color:"inherit"});n.inherit=new k(t,{color:"inherit"});e+="</table></div>";d.ColorSupport||function(){function b(a){b.superclass.constructor.call(this,a);this._init()}var g=d.TripleButton;b.ATTRS={editor:{},styles:{},contentCls:{},
text:{}};f.extend(b,f.Base,{_init:function(){var a=this.get("editor").toolBarDiv;a=new g({container:a,title:this.get("title"),contentCls:this.get("contentCls")});a.on("offClick",this._showColors,this);this.el=a;d.Utils.lazyRun(this,"_prepare","_real")},_hidePanel:function(a){var c=this;h._4e_ascendant(a.target,function(l){return l[0]===c.el.el[0]},true)||this.colorWin.hide()},_selectColor:function(a){a.halt();var c=this.get("editor");a=a.target;if(h._4e_name(a)=="span"||h._4e_name(a)=="a"){a=new r(a);
if(a._4e_name()=="a")a=a.one("span");var l=this.get("styles");c.fire("save");a._4e_style("background-color")?l[q(a._4e_style("background-color"))].apply(c.document):l.inherit.remove(c.document);c.fire("save");c.focus();this.colorWin.hide()}},_prepare:function(){this.colorPanel=new r(e);this.colorWin=new x({el:this.colorPanel,mask:false,focusMgr:false});document.body.appendChild(this.colorPanel[0]);this.colorPanel.on("click",this._selectColor,this);s.on(document,"click",this._hidePanel,this);s.on(j.document,
"click",this._hidePanel,this)},_real:function(){var a=this.el.el.offset();a.top+=this.el.el.height()+5;if(a.left+this.colorPanel.width()>h.viewportWidth()-60)a.left=h.viewportWidth()-this.colorPanel.width()-60;this.colorWin.show(a)},_showColors:function(a){this._prepare(a)}});d.ColorSupport=b}();j.addPlugin(function(){new d.ColorSupport({editor:j,styles:m,title:"\u80cc\u666f\u989c\u8272",contentCls:"ke-toolbar-bgcolor",text:"bgcolor"});new d.ColorSupport({editor:j,styles:n,title:"\u6587\u672c\u989c\u8272",
contentCls:"ke-toolbar-color",text:"color"})})});
