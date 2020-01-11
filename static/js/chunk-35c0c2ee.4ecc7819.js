(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35c0c2ee"],{6154:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[t.success?s("div",{staticClass:"success-box"},[s("Icon",{attrs:{type:"ios-checkmark-circle",size:"80",color:"Success"}}),s("h2",[t._v("密码修改成功")]),s("p",[t._v("您的密码已经修改成功，请牢记新密码。现在可以重新登录了。")]),s("Button",{attrs:{type:"primary",to:"/login",size:"large"}},[t._v("跳转到登录页")])],1):s("div",{staticClass:"regiter-box"},[s("div",{staticClass:"title"},[t._v("通过邮箱重置密码")]),s("Form",{ref:"formCustom",attrs:{model:t.formCustom,"label-position":"top",rules:t.ruleCustom}},[t.alert.text?s("Alert",{attrs:{type:t.alert.type,"show-icon":""}},[t._v(t._s(t.alert.text))]):t._e(),s("FormItem",{attrs:{label:"电子邮箱",prop:"email"}},[s("Input",{attrs:{type:"text",size:"large",placeholder:"请输入注册时的邮箱地址"},model:{value:t.formCustom.email,callback:function(e){t.$set(t.formCustom,"email",e)},expression:"formCustom.email"}},[s("Icon",{attrs:{slot:"prefix",type:"md-mail"},slot:"prefix"})],1)],1),s("FormItem",[s("Button",{attrs:{type:"primary",long:"",size:"large",loading:t.loading},on:{click:function(e){return t.handleSubmit("formCustom")}}},[t._v(t._s(t.btnText))])],1)],1),s("Form",{ref:"resetCustom",attrs:{model:t.formCustom,"label-position":"top",rules:t.rulePasswd}},[s("FormItem",{attrs:{label:"验证码",prop:"captcha"}},[s("Input",{attrs:{type:"text",size:"large",placeholder:"请输入邮件中的验证码"},model:{value:t.formCustom.captcha,callback:function(e){t.$set(t.formCustom,"captcha",e)},expression:"formCustom.captcha"}},[s("Icon",{attrs:{slot:"prefix",type:"md-mail-open"},slot:"prefix"})],1)],1),s("FormItem",{attrs:{label:"新密码",prop:"password"}},[s("Input",{attrs:{type:"password",size:"large"},model:{value:t.formCustom.password,callback:function(e){t.$set(t.formCustom,"password",e)},expression:"formCustom.password"}},[s("Icon",{attrs:{slot:"prefix",type:"md-lock"},slot:"prefix"})],1)],1),s("FormItem",{attrs:{label:"确认新密码",prop:"repassword"}},[s("Input",{attrs:{type:"password",size:"large"},model:{value:t.formCustom.repassword,callback:function(e){t.$set(t.formCustom,"repassword",e)},expression:"formCustom.repassword"}},[s("Icon",{attrs:{slot:"prefix",type:"md-lock"},slot:"prefix"})],1)],1),s("FormItem",[s("Button",{attrs:{type:"primary",long:"",size:"large",loading:t.loading2},on:{click:function(e){return t.codeSubmit("resetCustom")}}},[t._v("确 认")])],1),s("p",{staticClass:"text-center"},[t._v("我们会向您注册的邮箱发送一封验证邮件，请输入邮件中的验证码完成剩余操作。")])],1)],1)])},o=[],a=(s("cc57"),{data:function(){var t=this,e=function(e,s,r){""===s?r(new Error("确认新密码不能为空")):s!==t.formCustom.password?r(new Error("两次输入的密码不一致!")):r()};return{alert:{type:"",text:""},success:!1,loading:!1,loading2:!1,btnText:"发送邮箱验证码",formCustom:{email:"",captcha:"",password:"",repassword:""},ruleCustom:{email:[{required:!0,message:"邮箱不能为空",trigger:"change"},{type:"email",message:"请输入正确的电子邮箱",trigger:"blur"}]},rulePasswd:{captcha:[{required:!0,message:"验证码不能为空",trigger:"change"}],password:[{required:!0,message:"密码不能为空",trigger:"change"}],repassword:[{required:!0,validator:e,trigger:"blur"}]}}},methods:{handleSubmit:function(t){var e=this;this.$refs[t].validate((function(t){t&&(e.seedEmailFun(),e.loading=!0)}))},seedEmailFun:function(){var t=this,e={email:this.formCustom.email};this.$post("/apis/user/send_email",e).then((function(e){t.alert={type:"success",text:e.message},t.loading=!1})).catch((function(e){t.loading=!1,t.btnText="重新发送邮件"}))},codeSubmit:function(t){var e=this;this.$refs[t].validate((function(t){t&&(e.loading2=!0,e.submitForm())}))},submitForm:function(){var t=this;this.$post("/apis/user/check_captcha",this.formCustom).then((function(e){t.success=!0,t.loading2=!1})).catch((function(e){t.loading2=!1}))},handleReset:function(t){this.$refs[t].resetFields()}}}),i=a,n=(s("ca6d"),s("5511")),l=Object(n["a"])(i,r,o,!1,null,"e12f0c68",null);e["default"]=l.exports},ca6d:function(t,e,s){"use strict";var r=s("d061"),o=s.n(r);o.a},cc57:function(t,e,s){var r=s("064e").f,o=Function.prototype,a=/^\s*function ([^ (]*)/,i="name";i in o||s("149f")&&r(o,i,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},d061:function(t,e,s){}}]);