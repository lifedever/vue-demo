webpackJsonp([1],{23:function(e,t,n){"use strict";var o=n(2),a=n(88),i=n(79),s=n.n(i),l=n(77),r=n.n(l),c=n(80),u=n.n(c);o.default.use(a.a),t.a=new a.a({mode:"history",routes:[{path:"/",name:"Index",component:s.a},{path:"/about",name:"About",component:r.a},{path:"/modal",name:"Modal",component:u.a}]})},25:function(e,t){},26:function(e,t){},28:function(e,t,n){var o=n(5)(n(52),n(83),null,null);e.exports=o.exports},52:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(81),a=n.n(o),i=n(78),s=n.n(i);t.default={name:"app",data:function(){return{activeIndex:"1"}},methods:{},components:{MyNav:a.a,MyFooter:s.a}}},53:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={created:function(){},beforeRouteEnter:function(e,t,n){n(function(e){e.$bus.emit("change-index","About")})},methods:{}}},54:function(e,t){},55:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{msg:"Welcome to My Vue.js App"}}}},56:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{dialogVisible:!0}},methods:{closeModal:function(){this.$router.go(-1)}}}},57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={created:function(){this.$bus.on("change-index",this.changeIndex)},data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(e,t){this.$router.push({name:e})},changeIndex:function(e){this.activeIndex=e}}}},58:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=n(28),i=n.n(a),s=n(23),l=(n(29),n(24)),r=n.n(l),c=n(25),u=(n.n(c),n(26)),d=(n.n(u),n(27)),v=n.n(d);o.default.use(r.a),o.default.use(v.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:s.a,template:"<App/>",components:{App:i.a}})},76:function(e,t){},77:function(e,t,n){var o=n(5)(n(53),n(85),null,null);e.exports=o.exports},78:function(e,t,n){n(76);var o=n(5)(n(54),n(87),null,null);e.exports=o.exports},79:function(e,t,n){var o=n(5)(n(55),n(86),null,null);e.exports=o.exports},80:function(e,t,n){var o=n(5)(n(56),n(82),null,null);e.exports=o.exports},81:function(e,t,n){var o=n(5)(n(57),n(84),null,null);e.exports=o.exports},82:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:"提示",size:"small"},on:{close:e.closeModal},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}},[n("span",[e._v("这是一段信息")]),e._v(" "),n("span",{staticClass:"dialog-footer",slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])},staticRenderFns:[]}},83:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("my-nav"),e._v(" "),n("router-view"),e._v(" "),n("my-footer")],1)},staticRenderFns:[]}},84:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"grid-content bg-purple"},[n("el-menu",{staticClass:"wrapper",attrs:{theme:"dark","default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[n("el-menu-item",{attrs:{index:"Index"}},[e._v("\n                        首页\n                    ")]),e._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[e._v("下拉菜单\n                        ")]),e._v(" "),n("el-menu-item",{attrs:{index:"2-1"}},[e._v("选项1")]),e._v(" "),n("el-menu-item",{attrs:{index:"2-2"}},[e._v("选项2")]),e._v(" "),n("el-menu-item",{attrs:{index:"2-3"}},[e._v("选项3")])],2),e._v(" "),n("el-menu-item",{attrs:{index:"About"}},[e._v("\n                        关于我\n                    ")])],1),e._v(" "),n("div",{staticClass:"line"})],1)])],1)],1)},staticRenderFns:[]}},85:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("div",{staticClass:"text-center"},[n("p",[n("strong",[e._v("技能：")]),e._v(" "),n("el-checkbox",{attrs:{label:"吃饭",checked:""}}),e._v(" "),n("el-checkbox",{attrs:{label:"睡觉",checked:""}}),e._v(" "),n("el-checkbox",{attrs:{label:"打豆豆"}})],1),e._v(" "),n("p",[n("strong",[e._v("特长：")]),e._v(" "),n("el-checkbox",{attrs:{label:"吃饭"}}),e._v(" "),n("el-checkbox",{attrs:{label:"睡觉"}}),e._v(" "),n("el-checkbox",{attrs:{label:"打豆豆",checked:""}})],1)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("h1",[e._v("About Me")]),e._v(" "),n("p",[n("i",{staticClass:"el-icon-loading"}),e._v(" 一介程序员莽夫")]),e._v(" "),n("p",[n("i",{staticClass:"el-icon-loading"}),e._v(" 一介程序员莽夫")]),e._v(" "),n("p",[n("i",{staticClass:"el-icon-loading"}),e._v(" 一介程序员莽夫")])])}]}},86:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("router-link",{attrs:{to:"/modal"}},[e._v("点击打开Modal")]),e._v(" "),e._m(0)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("打开Modal后，可尝试按下 "),n("code",[e._v("Command + R")]),e._v(" 试试神器的效果！")])}]}},87:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"footer"},[e._v("\n    Copyright © 2017 这是一个低于底部的footer  版权所有\n")])},staticRenderFns:[]}}},[58]);
//# sourceMappingURL=app.59339e4fcc5e46267e38.js.map