(this.webpackJsonpdwf=this.webpackJsonpdwf||[]).push([[0],{140:function(e,t,n){},160:function(e,t,n){},238:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(27),l=n.n(r),i=(n(160),n(16)),s=n(26),o=n(15),d=n(5),u=Object(c.createContext)(),j=function(e){var t=function(e,t){return Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},e.currentNode,Object(o.a)(Object(o.a)({},e[e.currentNode]),t)))},n=function(e,t,n){return Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},t,Object(o.a)(Object(o.a)({},e[t]),{},{children:Object(o.a)(Object(o.a)({},e[t].children),Object(s.a)({},n,""))})))},c=function(e,t,n){return Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},t,Object(o.a)(Object(o.a)(Object(o.a)({},e[t]),e[t].parent),{},{parent:n})))},r=function(e,t){var n;return e[t]?Object(o.a)(Object(o.a)({},e),{},{currentNode:t}):Object(o.a)(Object(o.a)({},e),{},(n={},Object(s.a)(n,t,{children:null,parent:null}),Object(s.a)(n,"currentNode",t),n))},l=function(e,t){var n=Object.keys(e[t.currentNode]).reduce((function(n,c){return c!==t.field&&(n[c]=e[t.currentNode][c]),n}),{});return Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},e.currentNode,Object(o.a)({},n)))},j=a.a.useReducer((function(e,a){var i=a.payload;switch(a.type){case"CREATE_OBJECT":return r(e,i);case"CREATE_CHILDREN":return n(e,i.node_id,i.children);case"CREATE_PARENT":return c(e,i.node_id,i.parent);case"CREATE_DATA":return t(e,i);case"REMOVE_DATA":return l(e,i);default:return e}}),{}),b=Object(i.a)(j,2),O=b[0],p=b[1];return Object(d.jsx)(u.Provider,{value:[O,p],children:e.children})},b=n(80),O=function(){var e=function(e,t){e.dataTransfer.setData("application/reactflow",t),e.dataTransfer.effectAllowed="move"};return Object(d.jsxs)("aside",{children:[Object(d.jsx)("div",{className:"description",children:"You can drag these nodes to the pane on the right."}),Object(d.jsx)("div",{className:"dndnode form",onDragStart:function(t){return e(t,"form")},draggable:!0,children:"Form Widget"}),Object(d.jsx)("div",{className:"dndnode dataSource",onDragStart:function(t){return e(t,"dataSource")},draggable:!0,children:"DataSource"}),Object(d.jsx)("div",{className:"dndnode output",onDragStart:function(t){return e(t,"email")},draggable:!0,children:"Email Widget"})]})},p=n(244),h=n(240),x=n(241),f=n(89),m=(p.a.TextArea,function(e,t){return Object(d.jsx)(p.a,{placeholder:e,onChange:function(e){return t()}})}),v=function(e){return Object(d.jsx)(p.a,Object(o.a)({},e))},y=function(e){var t=Object(o.a)({},e),n=t.data,c=t.onHandleCheckbox,a=t.span,r=function(e){var t=e.target.value;c(t)};return Object(d.jsx)("div",{children:n.map((function(e){return Object(d.jsx)(h.a,{children:Object(d.jsx)(x.a,{span:a||8,children:Object(d.jsx)(f.a,{value:e.value,onChange:r,children:e.title})})})}))})},g=n(243),C=n(37),E={required:"${label} is required!",types:{email:"Enter a valid email!",number:"${label} is not a validate number!",url:"${label} is not a valid url!"},number:{range:"${label} must be between ${min} and ${max}"},string:{max:"Character count cannot exceed ${max}"},whitespace:"${label} cannot be empty!"},w=function(e){var t=Object(o.a)({},e),n=(t.fields,t.layoutType),a=Object(c.useContext)(u),r=Object(i.a)(a,2),l=r[0],s=(r[1],function(){var e=[],t=l.currentNode,n=t&&Object.keys(l[t]);return l[t]&&n.forEach((function(n){e.push(l[t][n])})),e}),j="horizontal"===n?{labelCol:{span:4},wrapperCol:{span:14}}:null,b="horizontal"===n?{wrapperCol:{span:14,offset:4}}:null,O={text:function(e){return Object(d.jsx)(v,{placeholder:(null===e||void 0===e?void 0:e.inputPlaceholder)||"",type:e.type,rules:[]})},email:function(e){return Object(d.jsx)(v,{placeholder:(null===e||void 0===e?void 0:e.inputPlaceholder)||"",type:e.type,rules:[{type:"email"}]})},number:function(e){return Object(d.jsx)(v,{placeholder:(null===e||void 0===e?void 0:e.inputPlaceholder)||"",type:e.type,rules:[{type:"number"}]})}};return Object(d.jsxs)(g.a,Object(o.a)(Object(o.a)({},j),{},{name:"basic",layout:n,initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)},validateMessages:E,children:[s().map((function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(g.a.Item,{label:e.inputLabel,name:e.name,children:O[e.type](e)})})})),s().length>0&&Object(d.jsx)(g.a.Item,Object(o.a)(Object(o.a)({},b),{},{children:Object(d.jsx)(C.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]}))},S=n(245),T=n(242),k=n(29),N=function(e){var t=Object(c.useContext)(u),n=Object(i.a)(t,1)[0],a=n.currentNode,r=Object(c.useState)(!1),l=Object(i.a)(r,2),s=l[0],o=l[1],j=Object(c.useState)([]),b=Object(i.a)(j,2),O=b[0],p=b[1],f=Object(c.useState)([]),m=Object(i.a)(f,2),y=m[0],g=m[1],E=Object(c.useState)(!1),w=Object(i.a)(E,2),N=w[0],A=w[1],D=Object(k.b)(),_=D.handleSubmit,F=(D.reset,D.control),P=function(e,t){return e?"".concat(t,"/").concat(e):t},R=function(e,t){fetch(e).then((function(e){return e.json()})).then((function(e){var n=t.map((function(e){return{title:e,dataIndex:e,key:e}}));p(n),g([e]),o(!0),A(!1)})).catch((function(e){console.log(e),o(!1)}))};return Object(d.jsxs)("div",{children:[Object(d.jsx)(C.a,{type:"primary",onClick:function(){var e=n[a],t=e.slug_input,c=e.url,r=e.pickFields,l=P(t,c);A(!0),R(l,r)},style:{margin:"10px"},children:"Preview Data Source"}),Object(d.jsxs)(S.a,{title:"Data Source",centered:!0,visible:s,onOk:function(){return o(!1)},onCancel:function(){return o(!1)},width:600,children:[Object(d.jsx)("div",{style:{padding:"10px"},children:Object(d.jsx)("form",{onSubmit:_((function(e){var t=n[a],c=t.url,r=t.pickFields,l=e.slug_input,i=P(l,c);A(!0),R(i,r)})),children:Object(d.jsxs)(h.a,{children:[Object(d.jsx)(x.a,{span:20,children:Object(d.jsx)(k.a,{as:Object(d.jsx)(v,{placeholder:"Enter id....."}),control:F,rules:{required:!0},name:"slug_input",style:{padding:"10px",margin:"10px"}})}),Object(d.jsx)(x.a,{span:4,children:Object(d.jsx)("input",{type:"submit",style:{padding:"10px",margin:"10px",color:"#fff",background:"#1890ff",borderColor:"#1890ff",border:"1px solid #1890ff"}})})]})})}),!N&&Object(d.jsx)(T.a,{dataSource:y,columns:O,loading:N})]})]})},A=n(88),D=A.a.Option,_=function(e){var t=Object(c.useContext)(u),n=Object(i.a)(t,2),a=(n[0],n[1],Object(c.useState)("")),r=Object(i.a)(a,2),l=r[0],s=r[1],o=Object(c.useState)([]),j=Object(i.a)(o,2),b=j[0],O=(j[1],Object(c.useState)(!1)),p=Object(i.a)(O,2),f=p[0],m=p[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(h.a,{children:[Object(d.jsx)(x.a,{span:8,children:Object(d.jsx)(C.a,{type:"primary",onClick:function(){m(!0)},style:{margin:"10px"},children:"Preview Form"})}),Object(d.jsx)(x.a,{span:16,children:Object(d.jsxs)(h.a,{style:{margin:"10px"},children:[Object(d.jsx)(x.a,{span:8,children:Object(d.jsx)("label",{children:"Layout Type"})}),Object(d.jsx)(x.a,{span:15,children:Object(d.jsx)(A.a,{style:{width:"100%"},onChange:function(e){s(e)},placeholder:"Choose Layout Type",children:[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"},{value:"inline",label:"Inline"}].map((function(e){return Object(d.jsx)(D,{value:e.value,children:e.label},e.value)}))})})]})})]}),Object(d.jsx)(S.a,{title:"Form",centered:!0,visible:f,onOk:function(){return m(!1)},onCancel:function(){return m(!1)},width:1e3,children:Object(d.jsx)(w,{fields:b,layoutType:l})})]})},F=n(247),P=A.a.Option,R=function(e){var t,n=Object(c.useContext)(u),a=Object(i.a)(n,2),r=a[0],l=a[1],j=r.currentNode,b=Object(o.a)({},e),O=b.newNode,f=b.onHandleNode,v=b.onHandleDrawer,y=Object(k.b)(),g=y.handleSubmit,E=y.register,w=y.errors,S=y.control,T=y.reset,N=Object(c.useState)(!0),D=Object(i.a)(N,2),R=D[0],q=D[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(_,{}),Object(d.jsxs)("form",{onSubmit:g((function(e){if(Object.keys(e).length>0){var t=Object.keys(r[j]).length+1,n=Object(s.a)({},"field".concat(t),Object(o.a)(Object(o.a)({},e),{},{field:"field".concat(t)}));l({type:"CREATE_DATA",payload:n}),T({type:"",inputLabel:"",inputValue:"",inputPlaceholder:"",inputName:""})}})),children:[Object(d.jsx)("div",{style:{padding:"10px"},children:Object(d.jsx)(p.a,{placeholder:"Form Name",ref:E,value:null===O||void 0===O||null===(t=O.data)||void 0===t?void 0:t.label,onChange:function(e){return f(e)}})}),Object(d.jsx)(C.a,{type:"dashed",onClick:function(){return q((function(e){return!e}))},style:{width:"95%",margin:"10px"},icon:Object(d.jsx)(F.a,{}),children:"Add field"}),!R&&Object(d.jsx)("div",{style:{padding:"10px"},children:Object(d.jsxs)("section",{children:[Object(d.jsx)(h.a,{children:Object(d.jsxs)(x.a,{span:24,children:[Object(d.jsx)("label",{children:"Select Type"}),Object(d.jsx)(k.a,{as:Object(d.jsx)(A.a,{style:{width:"100%"},placeholder:"Choose Field Type",children:[{value:"text",label:"Text"},{value:"email",label:"Email"},{value:"number",label:"Number"}].map((function(e){return Object(d.jsx)(P,{value:e.value,children:e.label},e.value)}))}),control:S,rules:{required:!0},name:"type"})]})}),w.type&&Object(d.jsx)("span",{className:"error",children:"This field is required"}),Object(d.jsx)(h.a,{children:Object(d.jsxs)(x.a,{span:24,children:[Object(d.jsx)("label",{children:"Input Label"}),Object(d.jsx)(k.a,{as:m("Input Label"),control:S,ref:E({required:!0,value:"test"}),rules:{required:!0},defaultValue:"",name:"inputLabel"})]})}),Object(d.jsx)(h.a,{children:Object(d.jsxs)(x.a,{span:24,children:[Object(d.jsx)("label",{children:"Input Placeholder"}),Object(d.jsx)(k.a,{placeholder:"Input Placeholder",defaultValue:"",as:m("Input Placeholder"),ref:E({required:!0}),rules:{required:!0},control:S,name:"inputPlaceholder"})]})}),Object(d.jsx)(h.a,{children:Object(d.jsxs)(x.a,{span:24,children:[Object(d.jsx)("label",{children:"Input Value"}),Object(d.jsx)(k.a,{placeholder:"Input Value",as:m("Input Value"),defaultValue:"",ref:E({required:!0}),rules:{required:!0},control:S,name:"inputValue"})]})})]})}),Object(d.jsxs)("div",{style:{padding:"10px"},children:[Object(d.jsx)("input",{type:"submit",style:{width:"50%"}}),Object(d.jsx)(C.a,{onClick:v,style:{width:"50%"},children:"Cancel"})]})]})]})},q=Object(c.memo)(R),I=n(28),V=n(145),H=function(e){var t,n=Object(c.useContext)(u),a=Object(i.a)(n,2),r=a[0],l=a[1],j=(r.currentNode,Object(o.a)({},e)),b=j.newNode,O=j.onHandleNode,f=j.onHandleDrawer,v=Object(c.useState)([]),g=Object(i.a)(v,2),E=g[0],w=g[1],S=Object(c.useState)([]),T=Object(i.a)(S,2),A=T[0],D=T[1],_=Object(c.useState)([]),F=Object(i.a)(_,2),P=(F[0],F[1]),R=Object(c.useState)(!1),q=Object(i.a)(R,2),H=q[0],L=q[1],$="form_dataSource_1",B=Object(c.useState)(Object(s.a)({},$,{})),J=Object(i.a)(B,2),z=J[0],W=J[1],M=Object(k.b)({defaultValues:{slug_input:"",url:"https://jsonplaceholder.typicode.com/todos"}}),U=M.handleSubmit,Y=M.register,X=M.control;return Object(d.jsxs)("div",{children:[Object(d.jsx)(N,{widgetType:"datasource"}),Object(d.jsx)(p.a,{style:{padding:"10px",margin:"10px"},placeholder:"Form Name",ref:Y,value:null===b||void 0===b||null===(t=b.data)||void 0===t?void 0:t.label,onChange:function(e){return O(e)}}),Object(d.jsxs)("form",{onSubmit:U((function(e){L(!0),P([]);var t=function(e,t){return e?"".concat(t,"/").concat(e):t}(e.slug_input,e.url);fetch(t).then((function(e){return e.json()})).then((function(t){L(!1);var n=Object.keys(t),c=n.map((function(e){return{title:e,value:e,dataIndex:e,key:e,isSelected:!1}})),a=Object(o.a)(Object(o.a)({},e),{},{columns:n,style:{}});l({type:"CREATE_DATA",payload:a}),W(Object(o.a)(Object(o.a)({},z),{},Object(s.a)({},$,a))),w(c),P([t])})).catch((function(e){console.log(e),L(!1)}))})),children:[Object(d.jsx)("div",{children:Object(d.jsxs)("section",{children:[Object(d.jsx)("label",{children:"Data Source"}),Object(d.jsx)(k.a,{as:m("slug_input"),control:X,rules:{required:!0},name:"slug_input",style:{padding:"10px",margin:"10px"}}),Object(d.jsx)(k.a,{as:m("Url"),control:X,rules:{required:!0},name:"url",style:{padding:"10px",margin:"10px"}})]})}),Object(d.jsxs)("div",{style:{padding:"10px",margin:"10px"},children:[Object(d.jsx)("input",{type:"submit",style:{width:"50%"}}),Object(d.jsx)(C.a,{onClick:f,style:{width:"50%"},children:"Cancel"})]}),Object(d.jsx)("div",{children:H&&Object(d.jsx)(V.a,{size:"large",style:{width:"100%"}})})]}),Object(d.jsx)(h.a,{children:Object(d.jsxs)(x.a,{children:[Object(d.jsx)("h4",{children:"Pick Fields"}),Object(d.jsx)(y,{data:E,onHandleCheckbox:function(e){var t;if(-1===A.indexOf(e))D([].concat(Object(I.a)(A),[e])),t={pickFields:[].concat(Object(I.a)(A),[e])};else{var n=A.filter((function(t){return t!==e}));D(n),t={pickFields:n}}l({type:"CREATE_DATA",payload:{pickFields:t.pickFields}})}})]})})]})},L=Object(c.memo)(H),$=n(30),B=n.n($),J=n(50),z=function(e){var t=Object(c.useContext)(u),n=(Object(i.a)(t,1)[0].currentNode,Object(c.useState)(!1)),a=Object(i.a)(n,2),r=a[0],l=a[1],s=Object(k.b)(),o=s.handleSubmit,j=s.register,b=(s.errors,s.control),O=(s.reset,function(){var e=Object(J.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://onsalon.herokuapp.com/mail/sendEmail",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}());return Object(d.jsxs)("div",{children:[Object(d.jsx)(C.a,{type:"primary",onClick:function(){l(!0)},style:{margin:"10px"},children:"Preview Email"}),Object(d.jsx)(S.a,{title:"Data Source",centered:!0,visible:r,onOk:function(){return l(!1)},onCancel:function(){return l(!1)},width:600,children:Object(d.jsx)("div",{style:{padding:"10px"},children:Object(d.jsx)("form",{onSubmit:o(O),children:Object(d.jsx)("div",{style:{padding:"10px"},children:Object(d.jsxs)("section",{children:[Object(d.jsx)(h.a,{children:Object(d.jsxs)(x.a,{span:24,children:[Object(d.jsx)("label",{children:"Receiver Email"}),Object(d.jsx)(k.a,{as:Object(d.jsx)(v,{placeholder:"Enter receiver email",type:"email",rules:[]}),control:b,rules:{required:!0},defaultValue:"",name:"to"})]})}),Object(d.jsx)(h.a,{children:Object(d.jsxs)(x.a,{span:24,children:[Object(d.jsx)("label",{children:"Subject"}),Object(d.jsx)(k.a,{as:Object(d.jsx)(v,{placeholder:"Subject...",type:"text",rules:[]}),control:b,rules:{required:!0},defaultValue:"",name:"subject"})]})}),Object(d.jsx)(h.a,{children:Object(d.jsx)(x.a,{span:24,children:Object(d.jsx)(k.a,{placeholder:"Content",defaultValue:"",as:Object(d.jsx)("textArea",{rows:4,style:{width:"100%",padding:"5px",marginTop:"10px"}}),ref:j({required:!0}),rules:{required:!0},control:b,name:"content"})})}),Object(d.jsx)("div",{style:{padding:"10px"},children:Object(d.jsx)("input",{type:"submit",style:{width:"50%"}})})]})})})})})]})},W=(A.a.Option,function(e){var t=Object(c.useContext)(u),n=Object(i.a)(t,2),a=n[0],r=n[1],l=Object(c.useState)([{value:"endpoint",title:"End Point",type:"text",inputPlaceholder:"Enter Server End Point....",defaultChecked:!1},{value:"email",title:"Email",type:"email",inputPlaceholder:"Enter Email....",defaultChecked:!1},{value:"password",title:"Password",type:"password",inputPlaceholder:"Enter Password....",defaultChecked:!1}]),s=Object(i.a)(l,2),j=(s[0],s[1],Object(c.useState)([])),b=Object(i.a)(j,2),O=(b[0],b[1],a.currentNode,Object(o.a)({},e).onHandleDrawer,Object(k.b)()),p=O.handleSubmit,f=(O.register,O.errors,O.control);O.reset;return Object(d.jsxs)("div",{children:[Object(d.jsx)(h.a,{children:Object(d.jsx)(x.a,{children:Object(d.jsx)(z,{widgetType:"email"})})}),Object(d.jsx)(h.a,{children:Object(d.jsxs)(x.a,{span:22,children:[Object(d.jsx)("h4",{children:"Server Fields"}),Object(d.jsxs)("form",{onSubmit:p((function(e){r({type:"CREATE_DATA",payload:{emailSource:{fields:e}.fields}})})),children:[Object(d.jsx)(h.a,{children:Object(d.jsx)(x.a,{span:24,children:Object(d.jsx)(k.a,{as:Object(d.jsx)(v,{placeholder:"Enter url.....",type:"text"}),control:f,rules:{required:!0},name:"server_url",style:{padding:"10px",margin:"10px"}})})}),Object(d.jsx)(h.a,{children:Object(d.jsx)(x.a,{span:24,children:Object(d.jsx)(k.a,{as:Object(d.jsx)(v,{placeholder:"Enter email.....",type:"email"}),control:f,rules:{required:!0},name:"server_email",style:{padding:"10px",margin:"10px"}})})}),Object(d.jsx)(h.a,{children:Object(d.jsx)(x.a,{span:24,children:Object(d.jsx)(k.a,{as:Object(d.jsx)(v,{placeholder:"Enter password.....",type:"password"}),control:f,rules:{required:!0},name:"server_password",style:{padding:"10px",margin:"10px"}})})}),Object(d.jsx)(x.a,{span:4,children:Object(d.jsx)("input",{type:"submit",style:{padding:"10px",margin:"10px",color:"#fff",background:"#1890ff",borderColor:"#1890ff",border:"1px solid #1890ff"}})})]})]})})]})}),M=n(246),U=(n(140),0),Y=function(){var e=Object(c.useContext)(u),t=Object(i.a)(e,2),n=(t[0],t[1]),a=Object(c.useState)({}),r=Object(i.a)(a,2),l=r[0],s=r[1],j=Object(c.useState)("Form"),p=Object(i.a)(j,2),h=p[0],x=p[1],f=Object(c.useState)(!1),m=Object(i.a)(f,2),v=m[0],y=m[1],g=Object(c.useRef)(null),C=Object(c.useState)(null),E=Object(i.a)(C,2),w=E[0],S=E[1],T=Object(c.useState)([]),k=Object(i.a)(T,2),N=k[0],A=k[1];Object(c.useEffect)((function(){A((function(e){return e.map((function(e){return e.id===l.id&&(e.data=Object(o.a)(Object(o.a)({},e.data),{},{label:l.data.label})),e}))}))}),[l,A]);var D=function(e){var t=e.target.value,n=Object(o.a)(Object(o.a)({},l),{},{data:{label:t}});s((function(){return n}))},_={form:Object(d.jsx)(q,{newNode:l,onHandleNode:D,onHandleDrawer:function(){return y((function(e){return!e}))}}),dataSource:Object(d.jsx)(L,{newNode:l,onHandleNode:D,onHandleDrawer:function(){return y((function(e){return!e}))}}),email:Object(d.jsx)(W,{})};return Object(d.jsxs)("div",{className:"dndflow",children:[Object(d.jsx)(O,{}),Object(d.jsx)(b.b,{children:Object(d.jsx)("div",{className:"reactflow-wrapper",ref:g,children:Object(d.jsx)(b.d,{elements:N,onConnect:function(e){A((function(t){return Object(b.c)(e,t)})),n({type:"CREATE_CHILDREN",payload:{node_id:e.source,children:e.target}}),n({type:"CREATE_PARENT",payload:{node_id:e.target,parent:e.source}})},onElementsRemove:function(e){return A((function(t){return Object(b.e)(e,t)}))},onElementClick:function(e,t){(null===t||void 0===t?void 0:t.data)&&(e.preventDefault(),x((function(){return t.data.widgetType})),s((function(){return t})),y((function(e){return!e})),n({type:"CREATE_OBJECT",payload:t.id}))},onLoad:function(e){return S(e)},onDrop:function(e){e.preventDefault();var t=g.current.getBoundingClientRect(),c=e.dataTransfer.getData("application/reactflow"),a=w.project({x:e.clientX-t.left,y:e.clientY-t.top}),r={id:"dndnode_".concat(U++),type:"default",test:"asd",position:a,data:{label:"".concat(c," Widget"),widgetType:c},style:{background:"#D6D5E6",color:"#333",border:"1px solid #222138",width:180,padding:10},formType:c};A((function(e){return e.concat(r)})),s((function(){return r})),x((function(){return c})),n({type:"CREATE_OBJECT",payload:r.id})},onDragOver:function(e){e.preventDefault(),e.dataTransfer.dropEffect="move"},onEdgeUpdate:function(e,t){console.log(e,t)},style:{position:"absolute",width:"80%"},children:Object(d.jsx)(b.a,{})})})}),Object(d.jsx)(M.a,{title:"".concat(h," Widget"),placement:"right",width:500,closable:!1,onClose:function(){y((function(e){return!e}))},visible:v,children:_[h]},"right")]})},X=(n(237),function(){return Object(d.jsx)(j,{children:Object(d.jsx)(Y,{})})}),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,248)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),r(e),l(e)}))};l.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(X,{})}),document.getElementById("root")),G()}},[[238,1,2]]]);
//# sourceMappingURL=main.42b9b6e1.chunk.js.map