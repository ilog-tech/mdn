(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5936"],{"1c99":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{attrs:{"z-index":"99999",width:"400px","has-close-icon":""},on:{close:function(e){t.$emit("close")}}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.title))]),t.$slots.default?t._t("default"):n("div",[t._v("\n    该操作将不可恢复\n  ")]),n("button",{staticClass:"button is-primary",attrs:{slot:"foot"},domProps:{textContent:t._s(t.confirmButtonText)},on:{click:function(e){t.$wait(t.handler)}},slot:"foot"}),n("button",{staticClass:"button",attrs:{slot:"foot"},domProps:{textContent:t._s(t.cancelButtonText)},on:{click:t.handleClose},slot:"foot"})],2)},s=[],a={props:{title:{type:String,default:"删除确认"},width:{type:String,default:"400px"},handler:{type:Function,required:!0},confirmButtonText:{type:String,default:"确认"},cancelButtonText:{type:String,default:"取消"}},methods:{handleClose:function(){this.$emit("close")}}},r=a,i=n("2877"),l=Object(i["a"])(r,o,s,!1,null,null,null);l.options.__file="index.vue";e["a"]=l.exports},d83d:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.task?n("DestroyDialog",{attrs:{handler:t.handleConfirm},on:{close:t.handleClose}},[t._v("\n  任务\n  "),n("span",{staticClass:"tag is-medium"},[t._v("\n    "+t._s(t.task.comment)+"\n  ")]),t._v("\n  将无法恢复\n")]):t._e()},s=[],a=(n("96cf"),n("3040")),r=n("1c99"),i={name:"TaskDestroy",components:{DestroyDialog:r["a"]},props:{task:Object,handleDestroy:Function},methods:{handleClose:function(){var t=this.$route.params,e=t.plantId,n=t.projectId;this.$router.push({name:"project tasks",params:{plantId:e,projectId:n}})},handleConfirm:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.handleDestroy({id:this.task.id});case 2:this.handleClose();case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},l=i,c=n("2877"),u=Object(c["a"])(l,o,s,!1,null,null,null);u.options.__file="index.vue";e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-5936.f689dcc2.js.map