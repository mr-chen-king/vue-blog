(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49b8f677"],{"3fc9":function(e,i,t){},7201:function(e,i,t){"use strict";t.r(i);var n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("main",[t("section",{staticClass:"wrap scroll"},[t("el-form",{attrs:{"label-width":"130px"},model:{value:e.webinfo,callback:function(i){e.webinfo=i},expression:"webinfo"}},[t("el-form-item",{attrs:{label:"网站标题"}},[t("el-input",{attrs:{size:"medium"},model:{value:e.webinfo.title,callback:function(i){e.$set(e.webinfo,"title",i)},expression:"webinfo.title"}})],1),t("el-form-item",{attrs:{label:"网站关键词"}},[t("el-input",{attrs:{size:"medium"},model:{value:e.webinfo.keyword,callback:function(i){e.$set(e.webinfo,"keyword",i)},expression:"webinfo.keyword"}})],1),t("el-form-item",{attrs:{label:"网站描述"}},[t("el-input",{attrs:{size:"medium",type:"textarea",rows:2},model:{value:e.webinfo.description,callback:function(i){e.$set(e.webinfo,"description",i)},expression:"webinfo.description"}})],1),t("el-form-item",{attrs:{label:"备案号"}},[t("el-input",{attrs:{size:"medium"},model:{value:e.webinfo.icp,callback:function(i){e.$set(e.webinfo,"icp",i)},expression:"webinfo.icp"}})],1),t("el-form-item",{attrs:{label:"微信图片地址"}},[t("el-input",{attrs:{size:"medium"},model:{value:e.webinfo.weixin,callback:function(i){e.$set(e.webinfo,"weixin",i)},expression:"webinfo.weixin"}})],1),t("el-form-item",{attrs:{label:"支付宝图片地址"}},[t("el-input",{attrs:{size:"medium"},model:{value:e.webinfo.zhifubao,callback:function(i){e.$set(e.webinfo,"zhifubao",i)},expression:"webinfo.zhifubao"}})],1),t("el-form-item",{attrs:{label:"QQ"}},[t("el-input",{attrs:{size:"medium"},model:{value:e.webinfo.qq,callback:function(i){e.$set(e.webinfo,"qq",i)},expression:"webinfo.qq"}})],1),t("el-form-item",{attrs:{label:"手机号"}},[t("el-input",{attrs:{size:"medium"},model:{value:e.webinfo.phone,callback:function(i){e.$set(e.webinfo,"phone",i)},expression:"webinfo.phone"}})],1),t("el-form-item",{attrs:{label:"邮箱"}},[t("el-input",{attrs:{size:"medium"},model:{value:e.webinfo.email,callback:function(i){e.$set(e.webinfo,"email",i)},expression:"webinfo.email"}})],1),t("el-form-item",{attrs:{label:"Github地址"}},[t("el-input",{attrs:{size:"medium"},model:{value:e.webinfo.github,callback:function(i){e.$set(e.webinfo,"github",i)},expression:"webinfo.github"}})],1),t("el-form-item",{attrs:{label:"个人简介"}},[t("el-input",{attrs:{size:"medium",type:"textarea",rows:3},model:{value:e.webinfo.personinfo,callback:function(i){e.$set(e.webinfo,"personinfo",i)},expression:"webinfo.personinfo"}})],1)],1)],1),t("footer",[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.submit}},[e._v("保　存")])],1)])},o=[],a=t("a322"),s={data:function(){var e;return{webinfo:(e={title:"",keyword:"",description:"",icp:"",weixin:"",zhifubao:""},Object(a["a"])(e,"description",""),Object(a["a"])(e,"weixin",""),Object(a["a"])(e,"zhifubao",""),Object(a["a"])(e,"personinfo",""),e)}},created:function(){var e=this;this.$get("/apis/webinfo/read").then(function(i){e.webinfo=i.data}).catch(function(){})},methods:{submit:function(){var e=this;this.$post("/apis/webinfo/set",this.webinfo).then(function(i){e.$message.success(i.message)}).catch(function(){})}}},l=s,f=(t("7877"),t("2877")),r=Object(f["a"])(l,n,o,!1,null,"7b0278da",null);r.options.__file="setting.vue";i["default"]=r.exports},7877:function(e,i,t){"use strict";var n=t("3fc9"),o=t.n(n);o.a}}]);