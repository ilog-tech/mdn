(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["abf8"],{abf8:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.isLoading?e("div",{staticClass:"loading"}):e("div",{staticClass:"full-container is-flex"},[e("MenuList",{attrs:{menus:a.MenuData,width:"220px"}}),e("div",{staticClass:"is-flex-auto"},[e("router-view")],1)],1)},r=[],i=(e("96cf"),e("3040")),c=e("c93e"),s=e("2f62"),l=e("8afe"),o=function(){var a=this,t=this.plantId;return[{text:"项目管理",icon:"table",route:{name:"plant projects",params:{plantId:t}}},{text:"任务规划",icon:"table",expanding:!0,children:[{text:"区域管理",icon:"table",route:{name:"plant areas manage",params:{plantId:t}}}].concat(Object(l["a"])(this.areas.map(function(e){var n={plantId:t,areaId:e.id};return{text:e.text,icon:"table",actived:function(){return a.$router.hasMatched({name:"plant area manage",params:n})},route:{name:"plant area manage",params:n}}})))},{text:"基础数据",icon:"storage",expanding:!0,children:[{text:"零件数据",icon:"table",actived:function(){return a.$router.hasMatched({name:"plant table",params:{table:"parts",categroyId:t}})},route:{name:"plant table data",params:{table:"parts",categroyId:t}}},{text:"包装",icon:"table",actived:function(){return a.$router.hasMatched({name:"plant table",params:{table:"packages",categroyId:t}})},route:{name:"plant table data",params:{table:"packages",categroyId:t}}},{text:"工位",icon:"table",actived:function(){return a.$router.hasMatched({name:"plant table",params:{table:"lines",categroyId:t}})},route:{name:"plant table data",params:{table:"lines",categroyId:t}}}].concat(Object(l["a"])(this.areas.map(function(e){var n={plantId:t,table:"locations",categroyId:e.id};return{text:e.text,icon:"table",actived:function(){return a.$router.hasMatched({name:"plant table",params:n})},route:{name:"plant table data",params:n}}})))}]},u=e("88bc"),p=e("2ab5"),d={name:"Plant",components:{MenuList:u["a"]},data:function(){return{isLoading:!0}},props:{plantId:{}},computed:Object(c["a"])({},Object(s["c"])({areasMapByPlantId:"areas/mapByPlantId"}),{areas:function(a){return this.areasMapByPlantId[this.plantId]},MenuData:o}),watch:{plantId:{immediate:!0,handler:function(){var a=Object(i["a"])(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return this.isLoading=!0,a.next=3,Object(p["a"])(500);case 3:this.isLoading=!1;case 4:case"end":return a.stop()}},a,this)}));return function(){return a.apply(this,arguments)}}()}}},m=d,b=e("2877"),h=Object(b["a"])(m,n,r,!1,null,null,null);h.options.__file="index.vue";t["default"]=h.exports}}]);
//# sourceMappingURL=abf8.2ed86720.js.map