(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var r=t(14),c=t.n(r),o=t(3),a=t(2),i=t(0),u=function(e){var n=e.searchNames;return Object(i.jsxs)("div",{children:["filter shown with ",Object(i.jsx)("input",{onChange:n})]})},s=function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:e.savePerson,children:[Object(i.jsxs)("div",{children:["name : ",Object(i.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(i.jsxs)("div",{children:["number : ",Object(i.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})})},d=function(e){var n=e.person,t=e.onClick;return Object(i.jsx)("div",{children:Object(i.jsxs)("li",{children:[" ",n.name," ",n.number," ",Object(i.jsx)("button",{onClick:t,children:"delete"})]})})},l=t(4),f=t.n(l),b="/api/persons",h=function(){return f.a.get(b).then((function(e){return e.data}))},j=function(e){return f.a.post(b,e).then((function(e){return e.data}))},m=function(e){return f.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},O=function(e,n){return f.a.put("".concat(b,"/").concat(n.id)).then((function(e){return e.data}))},p=function(e){var n=e.messageInfo;if(null!=n&&null!=n.message){var t={color:n.color,background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"};return Object(i.jsx)("div",{style:t,children:n.message})}return null},v=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),l=Object(o.a)(c,2),f=l[0],b=l[1],v=Object(a.useState)(""),g=Object(o.a)(v,2),x=g[0],w=g[1],C=Object(a.useState)(t),k=Object(o.a)(C,2),N=k[0],y=k[1],S=Object(a.useState)([]),I=Object(o.a)(S,2),L=I[0],P=I[1];Object(a.useEffect)((function(){h().then((function(e){r(e),y(e)}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Phonebook"}),Object(i.jsx)(p,{messageInfo:L}),Object(i.jsx)(u,{searchNames:function(e){var n=e.target.value,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));y(r)}}),Object(i.jsx)("h2",{children:"add a new"}),Object(i.jsx)(s,{newName:f,newNumber:x,handleNameChange:function(e){b(e.target.value)},handleNumberChange:function(e){w(e.target.value)},savePerson:function(e){if(e.preventDefault(),console.log(f),""===f||""===x)return window.alert("please enter valid data");var n={name:f,number:x,id:t.length+1},c=t.find((function(e){return e.name.toLowerCase().includes(f.toLowerCase())}));c?c.number!==x?window.confirm("".concat(n.name," is already added to the phonebook, replace the old number with a new one?"))&&(n.id=c.id,O(c.id,n).then((function(e){r(t.map((function(e){return e.id!==c.id?e:n}))),y(N.map((function(e){return e.id!==c.id?e:n}))),P({message:"Added ".concat(f),color:"green"}),setTimeout((function(){P(null)}),5e3)})).catch((function(e){P({message:"Information of ".concat(f," has already been removed from server"),color:"red"}),setTimeout((function(){P(null)}),5e3)}))):window.alert("".concat(f," is already added to the phonebook")):j(n).then((function(e){r(t.concat(e)),y(N.concat(e)),P({message:"Added ".concat(f),color:"green"}),setTimeout((function(){P(null)}),5e3)})),b(""),w("")}}),Object(i.jsx)("h2",{children:"Numbers"}),N.map((function(e){return Object(i.jsx)(d,{person:e,onClick:function(){return function(e){var n=e.id;window.confirm("Delete ".concat(e.name," ?"))&&m(n).then((function(e){r(t.filter((function(e){return e.id!==n}))),y(N.filter((function(e){return e.id!==n})))})).catch((function(e){alert("Invalid person"),r(t.filter((function(e){return e.id!==n}))),y(N.filter((function(e){return e.id!==n})))}))}(e)}},e.id)}))]})};c.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2054fb34.chunk.js.map