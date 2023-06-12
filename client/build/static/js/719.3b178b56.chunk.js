"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[719],{52381:function(e,r,a){var t=a(74165),n=a(15861),s=a(15671),l=a(43144),i=a(34948),c=a(70211),u=a(69334),o=a(40109),d=a(783),f=function(){function e(){(0,s.Z)(this,e)}return(0,l.Z)(e,null,[{key:"ProfileDetails",value:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(){var r,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.getRequest("/Employee/ProfileDetails");case 2:if(r=e.sent,!(a=r.data)){e.next=7;break}return o.Z.dispatch((0,u.Ky)(null===a||void 0===a?void 0:a[0])),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"SendRecoveryOtp",value:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){var a,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.getRequest("/Employee/SendRecoveryOtp/".concat(r));case 2:if(a=e.sent,!(n=a.data)){e.next=8;break}return c.Z.successMessage(null===n||void 0===n?void 0:n.message),i.Z.SetRecoverVerifyEmail(r),e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},{key:"VerifyRecoveryOtp",value:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){var a,n,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.Z.GetRecoverVerifyEmail(),console.log(a),e.next=4,d.Z.getRequest("/Employee/VerifyRecoveryOtp/".concat(a,"/").concat(r));case 4:if(n=e.sent,!(s=n.data)){e.next=10;break}return i.Z.SetRecoverVerifyOTP(r),c.Z.successMessage(null===s||void 0===s?void 0:s.message),e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},{key:"RecoveryResetPass",value:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){var a,n,s,l;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.Z.GetRecoverVerifyEmail(),n=i.Z.GetRecoverVerifyOTP(),e.next=4,d.Z.postRequest("/Employee/RecoveryResetPass/".concat(a,"/").concat(n),r);case 4:if(s=e.sent,!(l=s.data)){e.next=9;break}return c.Z.successMessage(null===l||void 0===l?void 0:l.message),e.abrupt("return",!0);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},{key:"VerifyAccountSentOtp",value:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(){var r,a,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.Z.GetRecoverVerifyEmail(),console.log(r),e.next=4,d.Z.getRequest("/User/VerifyAccountSentOtp/".concat(r));case 4:if(a=e.sent,!(n=a.data)){e.next=9;break}return c.Z.successMessage(null===n||void 0===n?void 0:n.message),e.abrupt("return",!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"VerifyAccountVerifyOtp",value:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r,a){var n,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.getRequest("/User/VerifyAccountVerifyOtp/".concat(r,"/").concat(a));case 2:if(n=e.sent,!(s=n.data)){e.next=7;break}return c.Z.successMessage(null===s||void 0===s?void 0:s.message),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(r,a){return e.apply(this,arguments)}}()},{key:"ProfileUpdate",value:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){var a,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.updateRequest("/Employee/ProfileUpdate",r);case 2:if(a=e.sent,!(n=a.data)){e.next=7;break}return c.Z.successMessage(null===n||void 0===n?void 0:n.message),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},{key:"EmployeeChangePassword",value:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){var a,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.putRequest("/Employee/EmployeeChangePassword",r);case 2:if(a=e.sent,!(n=a.data)){e.next=7;break}return c.Z.successMessage(null===n||void 0===n?void 0:n.message),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}]),e}();r.Z=f},70550:function(e,r,a){a(72791);var t=a(89743),n=a(2677),s=a(2461),l=a(80184);r.Z=function(e){return(0,l.jsx)(t.Z,{children:(0,l.jsx)(n.Z,{children:(0,l.jsxs)("div",{className:"page-title-box",children:[(0,l.jsx)("div",{className:"page-title-right",children:(0,l.jsxs)(s.Z,{listProps:{className:"m-0"},children:[(0,l.jsx)(s.Z.Item,{href:"/dashboard",children:"Dashboard"}),e.breadCrumbItems.map((function(e,r){return e.active?(0,l.jsx)(s.Z.Item,{active:!0,children:e.label},r):(0,l.jsx)(s.Z.Item,{href:e.path,children:e.label},r)}))]})}),(0,l.jsx)("h4",{className:"page-title",children:e.title})]})})})}},16719:function(e,r,a){a.r(r);var t=a(29439),n=a(59434),s=a(72791),l=a(89743),i=a(2677),c=a(19089),u=a(43360),o=a(62797),d=a(33168),f=a(57689),p=a(70550),h=a(23395),m=a(52381),v=a(80184);r.default=function(){var e=(0,d.$)().t,r=(0,n.v9)((function(e){return e.User})).UserDetails,a=(0,s.useState)(r.Image),Z=(0,t.Z)(a,2),x=Z[0],b=Z[1],y=(0,f.s0)(),j=o.Ry().shape({FirstName:o.Z_().required("Please Enter First Name"),LastName:o.Z_().required("Please Enter Last Name"),Gender:o.Z_().required("Please Select Gender"),Phone:o.Z_().required("Please Enter Phone"),Email:o.Z_().required("Please Enter Email"),DateOfBirth:o.Z_().required("Please Enter Date Of Birth"),Address:o.Z_().required("Please Enter Address")});return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p.Z,{breadCrumbItems:[{label:"Profile",path:"/dashboard"},{label:"Update Profile",path:"/dashboard",active:!0}],title:"Update Profile"}),(0,v.jsx)(l.Z,{children:(0,v.jsx)(i.Z,{children:(0,v.jsx)(c.Z,{children:(0,v.jsx)(c.Z.Body,{children:(0,v.jsx)(l.Z,{children:(0,v.jsx)(i.Z,{children:(0,v.jsxs)(h.J,{onSubmit:function(e){m.Z.ProfileUpdate({FirstName:e.FirstName,LastName:e.LastName,Gender:e.Gender,DateOfBirth:e.DateOfBirth,Address:e.Address,Phone:e.Phone,Email:e.Email,Image:e.Image}).then((function(e){e&&m.Z.ProfileDetails().then((function(e){e&&y("/dashboard")}))}))},validationSchema:j,defaultValues:r,children:[(0,v.jsx)(l.Z,{children:(0,v.jsxs)(i.Z,{children:[(0,v.jsx)("img",{src:x||(null===r||void 0===r?void 0:r.Image),alt:"EmployeeAvatar",style:{maxWidth:"100px"}}),(0,v.jsx)("hr",{}),(0,v.jsxs)(l.Z,{children:[(0,v.jsx)(i.Z,{xl:6,children:(0,v.jsx)(h.y,{name:"Image",label:e("Employee Avatar"),type:"file",placeholder:e("Upload Employee Avatar"),containerClass:"mb-3",onChange:function(e){return b(e)}})}),(0,v.jsx)(i.Z,{xl:6,children:(0,v.jsx)(h.y,{name:"FirstName",label:e("First Name"),placeholder:e("Enter First Name"),containerClass:"mb-3 mt-4"})})]})]})}),(0,v.jsxs)(l.Z,{children:[(0,v.jsx)(i.Z,{xl:6,children:(0,v.jsx)(h.y,{name:"LastName",label:e("Last Name"),placeholder:e("Enter Last Name"),containerClass:"mb-3"})}),(0,v.jsx)(i.Z,{xl:6,children:(0,v.jsx)(h.y,{name:"Gender",label:e("Gender"),placeholder:e("Select Gender"),containerClass:"mb-3",type:"react-single-select",options:[{value:"Male",label:"Male"},{value:"Female",label:"Female"},{value:"Others",label:"Others"}],defaultValue:[{value:"Male",label:"Male"},{value:"Female",label:"Female"},{value:"Others",label:"Others"}].find((function(e){return e.value===(null===r||void 0===r?void 0:r.Gender)}))})})]}),(0,v.jsxs)(l.Z,{children:[(0,v.jsx)(i.Z,{xl:6,children:(0,v.jsx)(h.y,{type:"react-phone",name:"Phone",label:e("Phone"),placeholder:e("Enter Phone"),containerClass:"mb-3"})}),(0,v.jsx)(i.Z,{xl:6,children:(0,v.jsx)(h.y,{name:"Email",label:e("Email"),placeholder:e("Enter Email"),containerClass:"mb-3",type:"email"})})]}),(0,v.jsx)(l.Z,{children:(0,v.jsx)(i.Z,{children:(0,v.jsx)(h.y,{type:"date",name:"DateOfBirth",label:e("Date Of Birth"),placeholder:e("Enter Date Of Birth"),containerClass:"mb-3"})})}),(0,v.jsx)(l.Z,{children:(0,v.jsx)(i.Z,{children:(0,v.jsx)(h.y,{name:"Address",label:e("Address"),placeholder:e("Enter Address"),containerClass:"mb-3",type:"textarea"})})}),(0,v.jsx)(l.Z,{className:"mt-2",children:(0,v.jsx)(i.Z,{children:(0,v.jsx)(u.Z,{type:"submit",variant:"success",children:"Update Profile"})})})]})})})})})})})]})}},2461:function(e,r,a){a.d(r,{Z:function(){return v}});var t=a(1413),n=a(45987),s=a(81694),l=a.n(s),i=a(72791),c=a(10162),u=a(16445),o=a(80184),d=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],f=i.forwardRef((function(e,r){var a=e.bsPrefix,s=e.active,i=void 0!==s&&s,f=e.children,p=e.className,h=e.as,m=void 0===h?"li":h,v=e.linkAs,Z=void 0===v?u.Z:v,x=e.linkProps,b=void 0===x?{}:x,y=e.href,j=e.title,g=e.target,P=(0,n.Z)(e,d),E=(0,c.vE)(a,"breadcrumb-item");return(0,o.jsx)(m,(0,t.Z)((0,t.Z)({ref:r},P),{},{className:l()(E,p,{active:i}),"aria-current":i?"page":void 0,children:i?f:(0,o.jsx)(Z,(0,t.Z)((0,t.Z)({},b),{},{href:y,title:j,target:g,children:f}))}))}));f.displayName="BreadcrumbItem";var p=f,h=["bsPrefix","className","listProps","children","label","as"],m=i.forwardRef((function(e,r){var a=e.bsPrefix,s=e.className,i=e.listProps,u=void 0===i?{}:i,d=e.children,f=e.label,p=void 0===f?"breadcrumb":f,m=e.as,v=void 0===m?"nav":m,Z=(0,n.Z)(e,h),x=(0,c.vE)(a,"breadcrumb");return(0,o.jsx)(v,(0,t.Z)((0,t.Z)({"aria-label":p,className:s,ref:r},Z),{},{children:(0,o.jsx)("ol",(0,t.Z)((0,t.Z)({},u),{},{className:l()(x,null==u?void 0:u.className),children:d}))}))}));m.displayName="Breadcrumb";var v=Object.assign(m,{Item:p})}}]);
//# sourceMappingURL=719.3b178b56.chunk.js.map