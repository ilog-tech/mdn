(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5481"],{"36a7":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Pagination",{staticClass:"is-pulled-right",staticStyle:{"margin-right":"0"},attrs:{total:t.meta.total,page:t.meta.current_page,"page-size":t.meta.per_page,"last-page":t.meta.last_page},on:{"change-page":function(e){t.$emit("change-page",e)}}})},i=[],r={props:["meta"]},s=r,c=n("2877"),u=Object(c["a"])(s,a,i,!1,null,null,null);u.options.__file="index.vue";e["a"]=u.exports},bf87:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{ref:"td",class:{"is-editable":!0,"is-changed":t.isChanged||t.hasChanged,"is-outlined":t.isOutlined},attrs:{tabindex:"0"},domProps:{innerHTML:t._s(!t.isFocused&&t.value?t.matchedText:t.value)},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleEsc(e):null},focus:t.handleFocus,blur:t.handleBlur}})},i=[],r=(n("a481"),{props:{value:{},highlight:String,isChanged:Boolean,isOutlined:Boolean},data:function(){return{inputValue:"",isFocused:!1,matchedText:"string"===typeof this.value?this.value.replace(this.highlight,'<strong class="has-background-warning">'.concat(this.highlight,"</strong>")):this.value}},computed:{hasChanged:function(){return""!==this.value&&null!==this.value&&this.value!==this.inputValue}},watch:{value:{immediate:!0,handler:function(){this.inputValue=this.value}}},methods:{handleFocus:function(t){this.isFocused=!0;var e=document.createRange(),n=window.getSelection();e.selectNodeContents(t.target),n.removeAllRanges(),n.addRange(e)},handleBlur:function(t){var e=document.createRange(),n=window.getSelection();e.selectNodeContents(t.target),n.removeAllRanges(),this.inputValue=t.target.innerText.trim(),s(this.value,this.inputValue)||this.$emit("change",this.inputValue)},handleEsc:function(t){t.target.blur()},focus:function(){this.$refs.td.focus()}}});function s(t,e){return null===t&&(t=""),null===e&&(e=""),t===e}var c=r,u=n("2877"),o=Object(u["a"])(c,a,i,!1,null,null,null);o.options.__file="index.vue";e["a"]=o.exports},c952:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"full-container"},[-1!=t.projectId?n("div",{staticClass:"full-container is-flex is-flex-column",staticStyle:{padding:"0.5rem","padding-left":"0"}},[n("div",{staticClass:"buttons has-addons",staticStyle:{"margin-right":"0.5rem"}},[n("a",{staticClass:"button",on:{click:function(e){t.$wait(function(){return t.handleTaskCreate()})}}},[n("Icon",{attrs:{name:"create-record"}}),n("span",[t._v("创建任务")])],1)]),n("div",{staticStyle:{height:"0.5rem"}}),n("div",{staticClass:"table-container is-flex-auto"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"full-container"},[n("table",{staticClass:"table is-bordered is-nowrapped"},[t._m(0),n("tbody",t._l(t.tasks,function(e,a){return n("tr",{key:e.id},[n("td",{staticClass:"is-centered"},[t._v(t._s(a))]),n("EditableCell",{ref:"comments",refInFor:!0,attrs:{value:e.comment},on:{change:function(n){t.$wait(function(){return t.updateComment({id:e.id,comment:n})})}}}),n("EditableCell",{attrs:{value:e.part_id},on:{change:function(n){t.$wait(function(){return t.updatePartId({id:e.id,partId:n})})}}}),n("EditableCell",{attrs:{value:e.line_id},on:{change:function(n){t.$wait(function(){return t.updateLineId({id:e.id,lineId:n})})}}}),n("StatusCell",{attrs:{value:e.status,down:t.tasks.length-a>4},on:{change:function(n){t.$wait(function(){return t.updateStatus({id:e.id,status:n})})}}}),n("DuetimeCell",{attrs:{id:e.id,value:e.duetime},on:{change:function(n){t.$wait(function(){return t.updateDuetime({id:e.id,duetime:n})})}}}),n("td",{staticClass:"is-centered"},[t._v(t._s(e.created_at.slice(0,10)))]),n("td",{staticClass:"is-centered"},[n("a",{on:{click:function(n){t.handleClickDestroy(e.id)}}},[t._v("\n                  删除\n                ")])])],1)}))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading"})]),n("div",{staticStyle:{"margin-top":"0.5rem"}},[n("Pagination",{attrs:{meta:t.meta},on:{"change-page":function(e){t.page=e,t.search()}}})],1)]):t._e(),n("router-view",{attrs:{project:t.project,task:t.data[t.taskId],handleDestroy:t.destroyTask}})],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("th",{staticClass:"is-centered",staticStyle:{width:"1px"}},[t._v("#")]),n("th",[t._v("备注")]),n("th",[t._v("零件号")]),n("th",[t._v("工位")]),n("th",{staticClass:"is-centered",staticStyle:{width:"120px"}},[t._v("任务状态")]),n("th",{staticClass:"is-centered"},[t._v("截止日期")]),n("th",{staticClass:"is-centered"},[t._v("创建时间")]),n("th",{staticClass:"is-centered"},[t._v("操作")])])}],r=(n("ac6a"),n("386d"),n("c93e")),s=(n("96cf"),n("3040")),c=n("ea7f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{class:{"is-centered":!0,"is-hoverable":!0,"is-selectable":!0,"is-unselectable":!0,"is-changed":t.isShowDropdown},staticStyle:{"min-width":"120px","max-width":"120px",padding:"0"},on:{click:function(e){t.isShowDropdown=!t.isShowDropdown}}},[n("span",{class:["tag","is-"+t.state.color]},[t._v("\n    "+t._s(t.state.text)+"\n  ")]),n("div",{staticClass:"dropdown-menu",class:{"is-up":!t.down},style:{display:t.isShowDropdown?"block":"none"}},[n("div",{staticClass:"is-background"}),n("div",{staticClass:"dropdown-content",staticStyle:{width:"160px"}},t._l([0,1,2],function(e){return n("a",{key:e,staticClass:"dropdown-item",staticStyle:{"padding-left":"2.5rem"},on:{click:function(n){t.$emit("change",e)}}},[t._v("\n        "+t._s(t.states[e].text)+"\n      ")])}))])])},o=[],l={name:"TaskStatus",props:{value:{},down:Boolean},data:function(){return{isShowDropdown:!1,states:{0:{text:"待规划",color:"warning"},1:{text:"规划中",color:"info"},2:{text:"已规划",color:"success"}}}},computed:{state:function(){var t=this.states[this.value];return t||{color:"none",text:"其他"}}}},d=l,h=n("2877"),p=Object(h["a"])(d,u,o,!1,null,null,null);p.options.__file="status-cell.vue";var m=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("DatePicker",{staticClass:"is-centered",attrs:{"is-active":t.newValue!==t.value,wrapper:"td",value:t.value},on:{change:function(e){t.$emit("change",e)}}})},v=[],g=(n("c5f6"),{props:{value:{},id:Number},data:function(){return{newValue:""}}}),w=g,_=Object(h["a"])(w,f,v,!1,null,null,null);_.options.__file="duetime-cell.vue";var x=_.exports,b=n("36a7"),k=n("bf87"),C={name:"ProjectTasks",components:{Pagination:b["a"],StatusCell:m,DuetimeCell:x,EditableCell:k["a"]},props:{taskId:{},plantId:{},projectId:{},project:Object},data:function(){return{data:{},list:[],meta:{},page:1,query:"",loading:!1,initialized:!1}},computed:{tasks:function(){var t=this;return this.list.map(function(e){return t.data[e]})},params:function(){return{page:this.page,query:this.query,projectId:this.projectId}}},methods:{handleTaskCreate:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].create({projectId:this.projectId});case 2:e=t.sent,this.list.splice(0,0,e.id),this.$set(this.data,e.id,e),this.$nextTick(function(){n.$refs.comments[n.$refs.comments.length-1].focus()});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleClickDestroy:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$router.push({name:"task destroy",params:Object(r["a"])({taskId:e},this.$route.params)});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),search:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,c["a"].search(this.params);case 4:e=t.sent,this.data={},this.list=[],e.data.forEach(function(t){n.list.push(t.id),n.$set(n.data,t.id,t)}),this.meta=e;case 9:return t.prev=9,this.loading=!1,t.finish(9);case 12:case"end":return t.stop()}},t,this,[[1,,9,12]])}));return function(){return t.apply(this,arguments)}}(),updateComment:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.id,a=e.comment,t.next=3,c["a"].updateComment({id:n,comment:a});case 3:this.data[n].comment=a;case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),updateStatus:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.id,a=e.status,t.next=3,c["a"].updateStatus({id:n,status:a});case 3:this.data[n].status=a;case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),updateDuetime:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.id,a=e.duetime,this.data[n].duetime===a&&(a=null),t.next=4,c["a"].updateDuetime({id:n,duetime:a});case 4:this.data[n].duetime=a;case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),updatePartId:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.id,a=e.partId,t.next=3,c["a"].updatePart({id:n,partId:a});case 3:this.data[n].part_id=a;case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),updateLineId:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.id,a=e.lineId,t.next=3,c["a"].updateLine({id:n,lineId:a});case 3:this.data[n].line_id=a;case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),destroyTask:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.id,t.next=3,c["a"].destroy({id:n});case 3:t.sent,this.list.splice(this.list.indexOf(n),1),this.$delete(this.data,n);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},watch:{"project.id":{immediate:!0,handler:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(-1===this.projectId||"-1"===this.projectId){t.next=5;break}return this.initialized=!1,t.next=4,this.search();case 4:this.initialized=!0;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}},y=C,j=Object(h["a"])(y,a,i,!1,null,null,null);j.options.__file="index.vue";e["default"]=j.exports}}]);
//# sourceMappingURL=chunk-5481.9c9824f2.js.map