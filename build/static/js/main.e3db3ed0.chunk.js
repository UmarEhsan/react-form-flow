(this.webpackJsonpdwf=this.webpackJsonpdwf||[]).push([[0],{145:function(e,t,n){},162:function(e,t,n){},240:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(26),l=n.n(r),i=(n(162),n(21)),o=n(27),u=n(22),d=n(6),s=Object(c.createContext)(),j=function(e){var t=function(e,t){return console.log(t),Object(u.a)(Object(u.a)({},e),{},Object(o.a)({},e.currentNode,Object(u.a)(Object(u.a)({},e[e.currentNode]),t)))},n=function(e,t){var n;return e[t]?Object(u.a)(Object(u.a)({},e),{},{currentNode:t}):Object(u.a)(Object(u.a)({},e),{},(n={},Object(o.a)(n,t,{}),Object(o.a)(n,"currentNode",t),n))},c=function(e,t){console.log(t);var n=Object.keys(e[t.currentNode]).reduce((function(n,c){return c!==t.field&&(n[c]=e[t.currentNode][c]),n}),{});return Object(u.a)(Object(u.a)({},e),{},Object(o.a)({},e.currentNode,Object(u.a)({},n)))},r=a.a.useReducer((function(e,a){var r=a.payload;switch(a.type){case"CREATE_OBJECT":return n(e,r);case"CREATE_DATA":return t(e,r);case"REMOVE_DATA":return c(e,r);default:return e}}),{}),l=Object(i.a)(r,2),j=l[0],b=l[1];return Object(d.jsx)(s.Provider,{value:[j,b],children:e.children})},b=n(81),O=function(){var e=function(e,t){e.dataTransfer.setData("application/reactflow",t),e.dataTransfer.effectAllowed="move"};return Object(d.jsxs)("aside",{children:[Object(d.jsx)("div",{className:"description",children:"You can drag these nodes to the pane on the right."}),Object(d.jsx)("div",{className:"dndnode form",onDragStart:function(t){return e(t,"form")},draggable:!0,children:"Form Widget"}),Object(d.jsx)("div",{className:"dndnode dataSource",onDragStart:function(t){return e(t,"dataSource")},draggable:!0,children:"DataSource"})]})},p=n(247),h=n(243),f=n(244),x=n(90),m=function(e,t){return Object(d.jsx)(p.a,{placeholder:e,onChange:function(e){return t()}})},v=function(e){return Object(d.jsx)(p.a,Object(u.a)({},e))},y=function(e){var t=Object(u.a)({},e),n=t.data,c=t.onHandleCheckbox,a=function(e){var t=e.target.value;c(t)};return Object(d.jsx)("div",{children:n.map((function(e){return Object(d.jsx)(h.a,{children:Object(d.jsx)(f.a,{span:8,children:Object(d.jsx)(x.a,{value:e.title,onChange:a,children:e.title})})})}))})},g=n(246),C=n(36),S={required:"${label} is required!",types:{email:"Enter a valid email!",number:"${label} is not a validate number!",url:"${label} is not a valid url!"},number:{range:"${label} must be between ${min} and ${max}"},string:{max:"Character count cannot exceed ${max}"},whitespace:"${label} cannot be empty!"},w=function(e){var t=Object(u.a)({},e),n=(t.fields,t.layoutType),a=Object(c.useContext)(s),r=Object(i.a)(a,2),l=r[0],o=(r[1],function(){var e=[],t=l.currentNode,n=t&&Object.keys(l[t]);return l[t]&&n.forEach((function(n){e.push(l[t][n])})),e}),j="horizontal"===n?{labelCol:{span:4},wrapperCol:{span:14}}:null,b="horizontal"===n?{wrapperCol:{span:14,offset:4}}:null,O={text:function(e){return Object(d.jsx)(v,{placeholder:(null===e||void 0===e?void 0:e.inputPlaceholder)||"",type:e.type,rules:[]})},email:function(e){return Object(d.jsx)(v,{placeholder:(null===e||void 0===e?void 0:e.inputPlaceholder)||"",type:e.type,rules:[{type:"email"}]})},number:function(e){return Object(d.jsx)(v,{placeholder:(null===e||void 0===e?void 0:e.inputPlaceholder)||"",type:e.type,rules:[{type:"number"}]})}};return Object(d.jsxs)(g.a,Object(u.a)(Object(u.a)({},j),{},{name:"basic",layout:n,initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)},validateMessages:S,children:[o().map((function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(g.a.Item,{label:e.inputLabel,name:e.name,children:O[e.type](e)})})})),o().length>0&&Object(d.jsx)(g.a.Item,Object(u.a)(Object(u.a)({},b),{},{children:Object(d.jsx)(C.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]}))},N=n(249),T=n(245),k=n(40),E=function(e){var t=Object(c.useContext)(s),n=Object(i.a)(t,1)[0],a=n.currentNode,r=Object(c.useState)(!1),l=Object(i.a)(r,2),o=l[0],u=l[1],j=Object(c.useState)([]),b=Object(i.a)(j,2),O=b[0],p=b[1],x=Object(c.useState)([]),m=Object(i.a)(x,2),y=m[0],g=m[1],S=Object(c.useState)(!1),w=Object(i.a)(S,2),E=w[0],F=w[1],D=Object(k.b)(),A=D.handleSubmit,I=(D.reset,D.control),_=function(e,t){return e?"".concat(t,"/").concat(e):t},P=function(e,t){fetch(e).then((function(e){return e.json()})).then((function(e){var n=t.map((function(e){return{title:e,dataIndex:e,key:e}}));p(n),g([e]),u(!0),F(!1)})).catch((function(e){console.log(e),u(!1)}))};return Object(d.jsxs)("div",{children:[Object(d.jsx)(C.a,{type:"primary",onClick:function(){var e=n[a],t=e.slug_input,c=e.url,r=e.pickFields,l=_(t,c);F(!0),P(l,r)},style:{margin:"10px"},children:"Preview Data Source"}),Object(d.jsxs)(N.a,{title:"Data Source",centered:!0,visible:o,onOk:function(){return u(!1)},onCancel:function(){return u(!1)},width:600,children:[Object(d.jsx)("div",{style:{padding:"10px"},children:Object(d.jsx)("form",{onSubmit:A((function(e){var t=n[a],c=t.url,r=t.pickFields,l=e.slug_input,i=_(l,c);F(!0),P(i,r)})),children:Object(d.jsxs)(h.a,{children:[Object(d.jsx)(f.a,{span:20,children:Object(d.jsx)(k.a,{as:Object(d.jsx)(v,{placeholder:"Enter id....."}),control:I,rules:{required:!0},name:"slug_input",style:{padding:"10px",margin:"10px"}})}),Object(d.jsx)(f.a,{span:4,children:Object(d.jsx)("input",{type:"submit",style:{padding:"10px",margin:"10px",color:"#fff",background:"#1890ff",borderColor:"#1890ff",border:"1px solid #1890ff"}})})]})})}),!E&&Object(d.jsx)(T.a,{dataSource:y,columns:O,loading:E})]})]})},F=n(89),D=F.a.Option,A=function(e){var t=Object(c.useContext)(s),n=Object(i.a)(t,2),a=n[0],r=(n[1],Object(c.useState)("")),l=Object(i.a)(r,2),o=l[0],u=l[1];console.log(a);var j=Object(c.useState)([]),b=Object(i.a)(j,2),O=b[0],p=(b[1],Object(c.useState)(!1)),x=Object(i.a)(p,2),m=x[0],v=x[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(h.a,{children:[Object(d.jsx)(f.a,{span:8,children:Object(d.jsx)(C.a,{type:"primary",onClick:function(){v(!0)},style:{margin:"10px"},children:"Preview Form"})}),Object(d.jsx)(f.a,{span:16,children:Object(d.jsxs)(h.a,{style:{margin:"10px"},children:[Object(d.jsx)(f.a,{span:8,children:Object(d.jsx)("label",{children:"Layout Type"})}),Object(d.jsx)(f.a,{span:15,children:Object(d.jsx)(F.a,{style:{width:"100%"},onChange:function(e){u(e)},placeholder:"Choose Layout Type",children:[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"},{value:"inline",label:"Inline"}].map((function(e){return Object(d.jsx)(D,{value:e.value,children:e.label},e.value)}))})})]})})]}),Object(d.jsx)(N.a,{title:"Form",centered:!0,visible:m,onOk:function(){return v(!1)},onCancel:function(){return v(!1)},width:1e3,children:Object(d.jsx)(w,{fields:O,layoutType:o})})]})},I=n(251),_=n(248),P=n(252),R=F.a.Option,q=function(e){var t,n=Object(c.useContext)(s),a=Object(i.a)(n,2),r=a[0],l=a[1],j=r.currentNode,b=Object(u.a)({},e),O=b.newNode,x=b.onHandleNode,v=b.onHandleDrawer,y=Object(k.b)(),g=y.handleSubmit,S=y.register,w=y.errors,N=y.control,T=y.reset,E=Object(c.useState)(!0),D=Object(i.a)(E,2),q=D[0],H=D[1],L=[],V=function(){var e=r.currentNode,t=e&&Object.keys(r[e]);return r[e]&&t.forEach((function(t){L.push(r[e][t])})),L};return Object(d.jsxs)("div",{children:[Object(d.jsx)(A,{}),Object(d.jsxs)("form",{onSubmit:g((function(e){var t=Object.keys(r[j]).length+1,n=Object(o.a)({},"field".concat(t),Object(u.a)(Object(u.a)({},e),{},{field:"field".concat(t)}));l({type:"CREATE_DATA",payload:n}),T({})})),children:[Object(d.jsx)("div",{style:{padding:"10px"},children:Object(d.jsx)(p.a,{placeholder:"Form Name",ref:S,value:null===O||void 0===O||null===(t=O.data)||void 0===t?void 0:t.label,onChange:function(e){return x(e)}})}),Object(d.jsx)(C.a,{type:"dashed",onClick:function(){return H((function(e){return!e}))},style:{width:"95%",margin:"10px"},icon:Object(d.jsx)(P.a,{}),children:"Add field"}),!q&&Object(d.jsx)("div",{style:{padding:"10px"},children:Object(d.jsxs)("section",{children:[Object(d.jsx)(h.a,{children:Object(d.jsxs)(f.a,{span:24,children:[Object(d.jsx)("label",{children:"Select Type"}),Object(d.jsx)(k.a,{as:Object(d.jsx)(F.a,{style:{width:"100%"},placeholder:"Choose Field Type",children:[{value:"text",label:"Text"},{value:"email",label:"Email"},{value:"number",label:"Number"}].map((function(e){return Object(d.jsx)(R,{value:e.value,children:e.label},e.value)}))}),control:N,rules:{required:!0},name:"type"})]})}),w.type&&Object(d.jsx)("span",{className:"error",children:"This field is required"}),Object(d.jsx)(h.a,{children:Object(d.jsxs)(f.a,{span:24,children:[Object(d.jsx)("label",{children:"Input Label"}),Object(d.jsx)(k.a,{as:m("Input Label"),control:N,ref:S({required:!0,value:"test"}),rules:{required:!0},name:"inputLabel"})]})}),Object(d.jsx)(h.a,{children:Object(d.jsxs)(f.a,{span:24,children:[Object(d.jsx)("label",{children:"Input Placeholder"}),Object(d.jsx)(k.a,{placeholder:"Input Placeholder",as:m("Input Placeholder"),ref:S({required:!0}),control:N,name:"inputPlaceholder"})]})}),Object(d.jsx)(h.a,{children:Object(d.jsxs)(f.a,{span:24,children:[Object(d.jsx)("label",{children:"Input Value"}),Object(d.jsx)(k.a,{placeholder:"Input Value",as:m("Input Value"),ref:S({required:!0}),control:N,name:"inputValue"})]})})]})}),Object(d.jsxs)("div",{style:{padding:"10px"},children:[Object(d.jsx)("input",{type:"submit",style:{width:"50%"}}),Object(d.jsx)(C.a,{onClick:v,style:{width:"50%"},children:"Cancel"})]}),Object(d.jsx)(I.b,{header:Object(d.jsx)("div",{children:"Form Fields"}),bordered:!0,dataSource:V(),renderItem:function(e,t){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(I.b.Item,{actions:[Object(d.jsx)("a",{onClick:function(){return function(e){console.log("Edit");var t=L[e],n=t.type,c=t.inputLabel,a=t.inputValue,r=t.inputPlaceholder,l=t.inputName;T({type:n,inputLabel:c,inputValue:a,inputPlaceholder:r,inputName:l})}(t)},children:"edit"},"list-loadmore-edit"),Object(d.jsx)("a",{onClick:function(){return function(e){var t=r.currentNode,n=L[e].field;l({type:"REMOVE_DATA",payload:{field:n,currentNode:t}}),V()}(t)},children:"delete"},"list-loadmore-more")],children:Object(d.jsx)(_.a,{loading:e.loading,active:!0,children:Object(d.jsx)(I.b.Item.Meta,{title:Object(d.jsxs)("h4",{children:["Type: ",e.type]})})})})})}})]})]})},H=Object(c.memo)(q),L=n(28),V=function(e){var t,n=Object(c.useContext)(s),a=Object(i.a)(n,2),r=a[0],l=a[1],j=(r.currentNode,Object(u.a)({},e)),b=j.newNode,O=j.onHandleNode,x=j.onHandleDrawer,v=Object(c.useState)([]),g=Object(i.a)(v,2),S=g[0],w=g[1],N=Object(c.useState)([]),T=Object(i.a)(N,2),F=T[0],D=T[1],A=Object(c.useState)([]),I=Object(i.a)(A,2),_=(I[0],I[1]),P=Object(c.useState)(!1),R=Object(i.a)(P,2),q=(R[0],R[1]),H="form_dataSource_1",V=Object(c.useState)(Object(o.a)({},H,{})),$=Object(i.a)(V,2),B=$[0],M=$[1],z=Object(k.b)({defaultValues:{slug_input:"",url:"https://jsonplaceholder.typicode.com/todos"}}),J=z.handleSubmit,W=z.register,Y=z.control;return Object(d.jsxs)("div",{children:[Object(d.jsx)(E,{widgetType:"datasource"}),Object(d.jsx)(p.a,{style:{padding:"10px",margin:"10px"},placeholder:"Form Name",ref:W,value:null===b||void 0===b||null===(t=b.data)||void 0===t?void 0:t.label,onChange:function(e){return O(e)}}),Object(d.jsxs)("form",{onSubmit:J((function(e){q(!0),_([]);var t=function(e,t){return e?"".concat(t,"/").concat(e):t}(e.slug_input,e.url);fetch(t).then((function(e){return e.json()})).then((function(t){q(!1);var n=Object.keys(t),c=n.map((function(e){return{title:e,dataIndex:e,key:e,isSelected:!1}})),a=Object(u.a)(Object(u.a)({},e),{},{columns:n,style:{}});l({type:"CREATE_DATA",payload:a}),M(Object(u.a)(Object(u.a)({},B),{},Object(o.a)({},H,a))),w(c),_([t])})).catch((function(e){console.log(e),q(!1)}))})),children:[Object(d.jsx)("div",{children:Object(d.jsxs)("section",{children:[Object(d.jsx)("label",{children:"Data Source"}),Object(d.jsx)(k.a,{as:m("slug_input"),control:Y,rules:{required:!0},name:"slug_input",style:{padding:"10px",margin:"10px"}}),Object(d.jsx)(k.a,{as:m("Url"),control:Y,rules:{required:!0},name:"url",style:{padding:"10px",margin:"10px"}})]})}),Object(d.jsxs)("div",{style:{padding:"10px",margin:"10px"},children:[Object(d.jsx)("input",{type:"submit",style:{width:"50%"}}),Object(d.jsx)(C.a,{onClick:x,style:{width:"50%"},children:"Cancel"})]})]}),Object(d.jsx)(h.a,{children:Object(d.jsxs)(f.a,{children:[Object(d.jsx)("h4",{children:"Pick Fields"}),Object(d.jsx)(y,{data:S,onHandleCheckbox:function(e){var t;if(-1===F.indexOf(e))D([].concat(Object(L.a)(F),[e])),t={pickFields:[].concat(Object(L.a)(F),[e])};else{var n=F.filter((function(t){return t!==e}));D(n),t={pickFields:n}}l({type:"CREATE_DATA",payload:{pickFields:t.pickFields}})}})]})})]})},$=Object(c.memo)(V),B=n(250),M=(n(145),0),z=function(){var e=Object(c.useContext)(s),t=Object(i.a)(e,2),n=(t[0],t[1]),a=Object(c.useState)({}),r=Object(i.a)(a,2),l=r[0],o=r[1],j=Object(c.useState)("Form"),p=Object(i.a)(j,2),h=p[0],f=p[1],x=Object(c.useState)(!1),m=Object(i.a)(x,2),v=m[0],y=m[1],g=Object(c.useRef)(null),C=Object(c.useState)(null),S=Object(i.a)(C,2),w=S[0],N=S[1],T=Object(c.useState)([]),k=Object(i.a)(T,2),E=k[0],F=k[1];Object(c.useEffect)((function(){F((function(e){return e.map((function(e){return e.id===l.id&&(e.data=Object(u.a)(Object(u.a)({},e.data),{},{label:l.data.label})),e}))}))}),[l,F]);var D=function(e){var t=e.target.value,n=Object(u.a)(Object(u.a)({},l),{},{data:{label:t}});o((function(){return n}))},A={form:Object(d.jsx)(H,{newNode:l,onHandleNode:D,onHandleDrawer:function(){return y((function(e){return!e}))}}),dataSource:Object(d.jsx)($,{newNode:l,onHandleNode:D,onHandleDrawer:function(){return y((function(e){return!e}))}})};return Object(d.jsxs)("div",{className:"dndflow",children:[Object(d.jsx)(O,{}),Object(d.jsx)(b.b,{children:Object(d.jsx)("div",{className:"reactflow-wrapper",ref:g,children:Object(d.jsx)(b.d,{elements:E,onConnect:function(e){return F((function(t){return Object(b.c)(e,t)}))},onElementsRemove:function(e){return F((function(t){return Object(b.e)(e,t)}))},onElementClick:function(e,t){if(null===t||void 0===t?void 0:t.data){var c=t.data.label.split(" ")[0];e.preventDefault(),o((function(){return t})),y((function(e){return!e})),f((function(){return c})),console.log(),n({type:"CREATE_OBJECT",payload:t.id})}},onLoad:function(e){return N(e)},onDrop:function(e){e.preventDefault();var t=g.current.getBoundingClientRect(),n=e.dataTransfer.getData("application/reactflow"),c=w.project({x:e.clientX-t.left,y:e.clientY-t.top}),a={id:"dndnode_".concat(M++),type:"default",test:"asd",position:c,data:{label:"".concat(n," Widget")},style:{background:"#D6D5E6",color:"#333",border:"1px solid #222138",width:180,padding:10},formType:n};F((function(e){return e.concat(a)})),o((function(){return a})),f((function(){return n}))},onDragOver:function(e){e.preventDefault(),e.dataTransfer.dropEffect="move"},style:{position:"absolute",width:"80%"},children:Object(d.jsx)(b.a,{})})})}),Object(d.jsx)(B.a,{title:"".concat(h," Widget"),placement:"right",width:500,closable:!1,onClose:function(){y((function(e){return!e}))},visible:v,children:A[h]},"right")]})},J=(n(239),function(){return Object(d.jsx)(j,{children:Object(d.jsx)(z,{})})}),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,253)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),r(e),l(e)}))};l.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(J,{})}),document.getElementById("root")),W()}},[[240,1,2]]]);
//# sourceMappingURL=main.e3db3ed0.chunk.js.map