(window["webpackJsonpreact-js"]=window["webpackJsonpreact-js"]||[]).push([[0],{10:function(e,t,i){e.exports=i(17)},15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),r=i(3),l=i.n(r),o=(i(15),i(4)),c=i(5),s=i(8),d=i(6),p=i(9),m=(i(16),i(1)),h=i.n(m),y=i(7),u=i.n(y),C={fill:["fill-opacity"],line:["line-opacity"],circle:["circle-opacity","circle-stroke-opacity"],symbol:["icon-opacity","text-opacity"],raster:["raster-opacity"],"fill-extrusion":["fill-extrusion-opacity"]},g={left:"lefty",center:"centered",right:"righty"},f=function(e){var t=-1!==e.indexOf("?");return{url:e+(t?"&pluginName=journalismScrollytelling":"?pluginName=journalismScrollytelling")}};function b(e){var t=e.id,i=e.theme,a=e.title,r=e.image,l=e.description,o=t===e.currentChapterID?"step active":"step";return n.a.createElement("div",{id:t,className:o},n.a.createElement("div",{className:i},a&&n.a.createElement("h3",{className:"title"},a),r&&n.a.createElement("img",{src:r,alt:a}),l&&n.a.createElement("p",null,l)))}var k=function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={currentChapter:e.chapters[0]},i}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.chapters[0].location;h.a.accessToken=e.accessToken;var i=new h.a.Map({container:this.mapContainer,style:e.style,center:t.center,zoom:t.zoom,pitch:t.pitch,bearing:t.bearing,transformRequest:f}),a=new h.a.Marker;function n(e){(function(e){var t=i.getLayer(e).type;return C[t]})(e.layer).forEach((function(t){i.setPaintProperty(e.layer,t,e.opacity)}))}e.showMarkers&&a.setLngLat(t.center).addTo(i);var r=this.setState.bind(this),l=u()();i.on("load",(function(){l.setup({step:".step",offset:.5,progress:!0}).onStepEnter((function(t){var l=e.chapters.find((function(e){return e.id===t.element.id}));r({currentChapter:l}),i.flyTo(l.location),e.showMarkers&&a.setLngLat(l.location.center),l.onChapterEnter.length>0&&l.onChapterEnter.forEach(n)})).onStepExit((function(t){var i=e.chapters.find((function(e){return e.id===t.element.id}));i.onChapterExit.length>0&&i.onChapterExit.forEach(n)}))})),window.addEventListener("resize",l.resize)}},{key:"render",value:function(){var e=this,t=this.props,i=t.theme,a=this.state.currentChapter.id;return n.a.createElement("div",null,n.a.createElement("div",{ref:function(t){return e.mapContainer=t},className:"absolute top right left bottom"}),n.a.createElement("div",{id:"story"},t.title&&n.a.createElement("div",{id:"header",className:i},n.a.createElement("h1",null,t.title),t.subtitle&&n.a.createElement("h2",null,t.subtitle),t.byline&&n.a.createElement("p",null,t.byline)),n.a.createElement("div",{id:"features",className:g[t.alignment]},t.chapters.map((function(e){return n.a.createElement(b,Object.assign({key:e.id,theme:i},e,{currentChapterID:a}))}))),t.footer&&n.a.createElement("div",{id:"footer",className:i},n.a.createElement("p",null,t.footer))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w={style:"mapbox://styles/lukemckinstry/ck6s8b3vq08tq1iqpafeq8jl8",accessToken:"pk.eyJ1IjoibHVrZW1ja2luc3RyeSIsImEiOiJjajU0ODRsNmMwMHg2MndxeWsxMXhpY3k5In0.yM_-IJxaryqd9i5Rt6k8LA",showMarkers:!1,theme:"dark",alignment:"left",title:"Local Redistricting is Transforming California Cities",subtitle:"",byline:"The Data Team at Cicero",footer:"",chapters:[{id:"state1",title:"California Cities At a Glance",image:"",description:"Prompted by the California Voting Rights Act, a state law passed in 2002, cities across the state are transitioning from at-large to by-district representation and elections in local City Councils.",location:{center:[-121.05719,35.6323],zoom:6.16,pitch:0,bearing:0},onChapterEnter:[{layer:"allatlarge-48xkez-fill",opacity:1},{layer:"allatlarge-48xkez-border",opacity:1},{layer:"allatlarge-48xkez-label",opacity:1},{layer:"alldistricts-6kvskc-fill",opacity:0},{layer:"alldistricts-6kvskc-border",opacity:0},{layer:"alldistricts-6kvskc-label",opacity:0}],onChapterExit:[{layer:"alldistricts-6kvskc-fill",opacity:1},{layer:"alldistricts-6kvskc-border",opacity:1},{layer:"alldistricts-6kvskc-label",opacity:1},{layer:"allatlarge-48xkez-fill",opacity:0},{layer:"allatlarge-48xkez-border",opacity:0},{layer:"allatlarge-48xkez-label",opacity:0}]},{id:"bayarea1",title:"San Francisco Bay Area: Fremont, Menlo Park and Concord",image:"",description:"Fremont City Council adopted 6 districts. 4 were implemented in 2018 and 2 will be implemented in 2020. Menlo Park City Council adopted 5 districts. 3 were implemented in 2018 and 2 will be implemented in 2020. Concord City Council adopted 5 districts, all were implemented in 2018",location:{center:[-122.12266,37.53651],zoom:10.61,pitch:60,bearing:-33.6},onChapterEnter:[],onChapterExit:[]},{id:"sr1",title:"Santa Rosa",image:"",description:"Santa Rosa City Council adopted 7 districts. 3 were implemented in 2018 and 4 will be implemented in 2020.",location:{center:[-122.71596,38.43367],zoom:11.5,pitch:60,bearing:144},onChapterEnter:[],onChapterExit:[]},{id:"santamaria",title:"Santa Maria",image:"",description:"Santa Maria City Council adopted 4 districts. 2 were implemented in 2018 and 2 will be implemented in 2020.",location:{center:[-120.41494,34.90891],zoom:11.63,pitch:38.5,bearing:0},onChapterEnter:[],onChapterExit:[]},{id:"centralcoast1",title:"Oxnard and Ventura",image:"",description:"Oxnard City Council adopted 6 districts. 3 were implemented in 2018 and 3 will be implememtned in 2020. Ventura City Council adopted 7 districts, 4 were implemented in 2018 and 3 were implemented in 2020",location:{center:[-119.19685,34.23796],zoom:11.4,pitch:60,bearing:-80},onChapterEnter:[],onChapterExit:[]},{id:"la1",title:"Los Angeles, Riverside and Orange County",image:"",description:"Anaheim, Fullerton, Costa Mesa, West Covina, Rancho Cucamonga, Fontana, and Corona, CA are implementing district representation. ",location:{center:[-117.8505,33.76754],zoom:10.9,pitch:58,bearing:19.2},onChapterEnter:[],onChapterExit:[]},{id:"anaheim",title:"Anaheim Attractions",image:"",description:"In the new district plan for Anaheim City Council, the Disneyland theme park will fall in district 4, while the home of the Los Angeles Angels of Anaheim and Anaheim Mighty Ducks will fall in district 5. ",location:{center:[-117.90027,33.80782],zoom:13.73,pitch:0,bearing:0},onChapterEnter:[],onChapterExit:[]},{id:"tm",title:"Temecula and Murrieta",image:"",description:"Temecula City Council and Murrieta City Council each adopted 5 districts. Both cities implemented 3 districts in 2018 and will implement 2 districts in 2020.",location:{center:[-117.16023,33.53941],zoom:11.39,pitch:60,bearing:46.4},onChapterEnter:[],onChapterExit:[]},{id:"northsd",title:"Carlsbad, Oceanside and Vista",image:"",description:"City Councils in Carlsbad, Oceanside and Vista each adopted 4 districts. In each city 2 districts were implemented in 2018 and 2 will be implemented in 2020.",location:{center:[-117.32361,33.16051],zoom:12.78,pitch:60,bearing:46.4},onChapterEnter:[],onChapterExit:[]},{id:"sd1",title:"San Diego",image:"",description:"Chula Vista adopted 4 districts, 2 were implemented in 2016 and 2 were implemented in 2018. El Cajon adopted 4 districts. 1 was implemented in 2018 and 3 will be implemented in 2020",location:{center:[-117.02591,32.71892],zoom:10.41,pitch:60,bearing:-145.6},onChapterEnter:[],onChapterExit:[]},{id:"conclusion",title:"Wrapping Up",image:"",description:"This project grew out of our service at Cicero tracking elected officials, legislative district and contact and social media for all cities with population over 100,000 in the state of California and over 900 chambers around the world. Visit https://www.cicerodata.com/ to learn how to use this data.",location:{center:[-121.05719,35.6323],zoom:5.86,pitch:0,bearing:0},onChapterEnter:[{layer:"alldistricts-6kvskc-fill",opacity:0},{layer:"alldistricts-6kvskc-border",opacity:0},{layer:"alldistricts-6kvskc-label",opacity:0},{layer:"allatlarge-48xkez-fill",opacity:1},{layer:"allatlarge-48xkez-border",opacity:1},{layer:"allatlarge-48xkez-label",opacity:1}],onChapterExit:[{layer:"alldistricts-6kvskc-fill",opacity:1},{layer:"alldistricts-6kvskc-border",opacity:1},{layer:"alldistricts-6kvskc-label",opacity:1},{layer:"allatlarge-48xkez-fill",opacity:0},{layer:"allatlarge-48xkez-border",opacity:0},{layer:"allatlarge-48xkez-label",opacity:0}]}]};l.a.render(n.a.createElement(k,w),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.6e1de837.chunk.js.map