(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{374:function(t,e,a){"use strict";var n=a(0),r=a(375);n({target:"String",proto:!0,forced:a(376)("link")},{link:function(t){return r(this,"a","href",t)}})},375:function(t,e,a){var n=a(27),r=a(20),i=/"/g;t.exports=function(t,e,a,o){var l=r(n(t)),s="<"+e;return""!==a&&(s+=" "+a+'="'+r(o).replace(i,"&quot;")+'"'),s+">"+l+"</"+e+">"}},376:function(t,e,a){var n=a(2);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},430:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n={id:"front0",name:"前端总览",label:"主要是一些零散知识点",rate:.6,status:"B",children:[{id:"front1_1",name:"js笔记",label:"js知识点",rate:.627,status:"R",link:"/pages/accumulation/front/js-note-1.html",children:[{id:"g121",name:"Name3",collapsed:!0,label:"138.00",rate:.123,status:"B",children:[{id:"g1211",name:"Name4",label:"138.00",rate:1,status:"B",children:[]}]},{id:"g122",name:"Name5",collapsed:!0,label:"100.00",rate:.296,status:"G",children:[{id:"g1221",name:"Name6",label:"40.00",rate:.4,status:"G",children:[{id:"g12211",name:"Name6-1",label:"40.00",rate:1,status:"R",children:[]}]},{id:"g1222",name:"Name7",label:"60.00",rate:.6,status:"G",children:[]}]},{id:"g123",name:"Name8",collapsed:!0,label:"100.00",rate:.296,status:"DI",children:[{id:"g1231",name:"Name8-1",label:"100.00",rate:1,status:"DI",children:[]}]}]},{id:"front1_2",name:"node笔记",label:"node知识点",rate:.187,status:"B",link:"/pages/accumulation/front/node-note-1.html",children:[{id:"g131",name:"Name10",label:"33.90",rate:.336,status:"R",children:[]},{id:"g132",name:"Name11",label:"67.00",rate:.664,status:"G",children:[]}]},{id:"front1_3",name:"vue笔记",label:"vue知识点",rate:.186,status:"G",link:"/pages/accumulation/front/vue-note-1.html",children:[]},{id:"front1_4",name:"css笔记",label:"css知识点",rate:.186,status:"G",link:"/pages/accumulation/front/css-note-1.html",children:[]},{id:"front1_5",name:"ts笔记",label:"ts知识点",rate:.186,status:"G",link:"/pages/accumulation/front/ts-note-1.html",children:[]}]}},516:function(t,e,a){},673:function(t,e,a){"use strict";a(516)},690:function(t,e,a){"use strict";a.r(e);var n=a(56),r=a(33),i=(a(106),a(108),a(50),a(399),a(374),a(377),a(8),a(431)),o=a(430),l={name:"optimized",props:{queryData:{type:Object,default:function(){}}},data:function(){return{graph:{},colors:{B:"#5B8FF9",R:"#F46649",Y:"#EEBC20",G:"#5BD8A6",DI:"#A7A7A7"}}},computed:{treeConfig:function(){return{width:window.innerWidth,height:window.innerHeight,modes:{default:[{type:"tooltip",formatText:function(t){return"".concat(t.name,"：掌握").concat((100*t.rate).toFixed(2),"%")}},"drag-canvas","zoom-canvas","drag-node","click-select","brush-select"]},fitView:!0,animate:!0,defaultNode:{type:"flow-rect"},defaultEdge:{type:"cubic-horizontal",style:{stroke:"#CED4D9"}},layout:{type:"indented",direction:"LR",dropCap:!1,indent:300,getHeight:function(){return 60}}}}},methods:{initPage:function(){console.log(JSON.stringify(o.a)),this.registerFn(),this.renderBrainMap()},handleCollapse:function(t){var e=t.target.get("modelId"),a=this.graph.findById(e),n=a.getModel();n.collapsed=!n.collapsed,this.graph.layout(),this.graph.setItemState(a,"collapse",n.collapsed)},clickNodeEvent:function(){var t=this,e=this;this.graph.on("collapse-text:click",(function(e){t.handleCollapse(e)})),this.graph.on("node:click",(function(t){var a=t.target.attrs.text;if("+"!==a&&"-"!==a){var n=function(t){return t.item._cfg.model}(t);console.log("点击节点",n),n.link&&(console.log(n.link),e.$router.push(n.link))}}))},registerFn:function(){var t=this;i.a.registerNode("flow-rect",{shapeType:"flow-rect",draw:function(e,a){var n=e.name,i=void 0===n?"":n,o=e.label,l=e.collapsed,s=e.status,c=e.rate,d={width:202,height:60,lineWidth:1,fontSize:12,fill:"#fff",radius:4,stroke:"#CED4D9",opacity:1},u={x:-d.width/2,y:-d.height/2},h={textAlign:"left",textBaseline:"bottom"},f=a.addShape("rect",{attrs:Object(r.a)({x:u.x,y:u.y},d)}),g=f.getBBox();a.addShape("text",{attrs:Object(r.a)(Object(r.a)({},h),{},{x:12+u.x,y:20+u.y,text:i.length>28?i.substr(0,28)+"...":i,fontSize:12,opacity:.85,fill:"#000",cursor:"pointer"}),name:"name-shape"});a.addShape("text",{attrs:Object(r.a)(Object(r.a)({},h),{},{x:12+u.x,y:g.maxY-12,text:o,fontSize:16,fill:"#000",opacity:.85})}),a.addShape("rect",{attrs:{x:u.x,y:g.maxY-4,width:d.width,height:4,radius:[0,0,d.radius,d.radius],fill:"#E0DFE3"}}),a.addShape("rect",{attrs:{x:u.x,y:g.maxY-4,width:c*g.width,height:4,radius:[0,0,0,d.radius],fill:t.colors[s]}});return e.children&&e.children.length&&(a.addShape("rect",{attrs:{x:d.width/2-8,y:-8,width:16,height:16,stroke:"rgba(0, 0, 0, 0.25)",cursor:"pointer",fill:"#fff"},name:"collapse-back",modelId:e.id}),a.addShape("text",{attrs:{x:d.width/2,y:-1,textAlign:"center",textBaseline:"middle",text:l?"+":"-",fontSize:16,cursor:"pointer",fill:"rgba(0, 0, 0, 0.25)"},name:"collapse-text",modelId:e.id})),this.drawLinkPoints(e,a),f},update:function(t,e){var a=e.getContainer();this.updateLinkPoints(t,a)},setState:function(t,e,a){if("collapse"===t){var n=a.getContainer().find((function(t){return"collapse-text"===t.get("name")}));n&&(e?n.attr({text:"+"}):n.attr({text:"-"}))}},getAnchorPoints:function(){return[[0,.5],[1,.5]]}},"rect"),i.a.registerEdge("flow-cubic",{getControlPoints:function(t){console.log(t);var e=t.controlPoints;if(!e||!e.length){var a=t.startPoint,n=t.endPoint,r=t.sourceNode,i=t.targetNode,o=r?r.getModel():a,l=o.x,s=o.y,c=o.coefficientX,d=o.coefficientY,u=i?i.getModel():n,h=(u.x-l)*c,f=(u.y-s)*d;h=h>40?40:h,f=f<-30?f:-30,e=[{x:a.x+h,y:a.y},{x:n.x+f,y:n.y}]}return e},getPath:function(t){var e=[];return e.push(["M",t[0].x,t[0].y]),e.push(["C",t[1].x,t[1].y,t[2].x,t[2].y,t[3].x,t[3].y]),e}},"single-line")},getAsyncTreeData:function(){return new Promise((function(t,e){t(o.a)}))},renderBrainMap:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAsyncTreeData();case 2:a=e.sent,t.graph=new i.a.TreeGraph(Object(r.a)({container:"g6Tree"},t.treeConfig)),t.clickNodeEvent(),t.graph.data(a),t.graph.render(),t.graph.fitView();case 8:case"end":return e.stop()}}),e)})))()}},created:function(){this.initPage()}},s=(a(673),a(26)),c=Object(s.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"tree_wrap",attrs:{id:"g6Tree"}})}),[],!1,null,"8ef3e53e",null);e.default=c.exports}}]);