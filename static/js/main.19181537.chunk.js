(this["webpackJsonpcrud-basico-react"]=this["webpackJsonpcrud-basico-react"]||[]).push([[0],{16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(6),i=c.n(r),s=(c(13),c(8)),l=c(2),o=c(7),b=c.n(o),j=c(0),u=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),i=Object(l.a)(r,2),o=i[0],u=i[1],d=Object(n.useState)(!1),m=Object(l.a)(d,2),O=m[0],h=m[1],f=Object(n.useState)(""),x=Object(l.a)(f,2),p=x[0],v=x[1],N=Object(n.useState)(null),g=Object(l.a)(N,2),S=g[0],k=g[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Aplicaci\xf3n de CRUD b\xe1sica."}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("h2",{children:"Listado de nombres"}),Object(j.jsx)("ul",{className:"list-group",children:o.map((function(e){return Object(j.jsxs)("li",{className:"list-group-item",children:[e.nombre,Object(j.jsx)("button",{className:"btn btn-danger float-right",onClick:function(){!function(e){var t=o.filter((function(t){return t.id!==e}));u(t)}(e.id)},children:"Eliminar"}),Object(j.jsx)("button",{className:"btn btn-info float-right",onClick:function(){!function(e){h(!0),a(e.nombre),v(e.id)}(e)},children:"Editar"})]},e.id)}))})]}),Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("h2",{children:O?"Actualizar nombre":"Formularios para a\xf1adir nombres"}),Object(j.jsxs)("form",{onSubmit:O?function(e){e.preventDefault();var t=o.map((function(e){return e.id===p?{id:p,nombre:c}:e}));u(t),h(!1),a("")}:function(e){if(e.preventDefault(),c.trim()){var t={id:b()(),nombre:c};u([].concat(Object(s.a)(o),[t])),a(""),k(null)}else k("El campo nombre esta vacio.")},className:"form-group",children:[Object(j.jsx)("input",{onChange:function(e){a(e.target.value)},className:"form-control mb-3",type:"text",placeholder:"Nombre",value:c}),Object(j.jsx)("input",{className:"btn btn-info btn-block",type:"submit",value:O?"Editar nombre":"Registrar nombre"})]}),null!=S?Object(j.jsx)("div",{className:"alert alert-danger",children:S}):Object(j.jsx)("div",{})]})]})]})};var d=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(u,{})})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.19181537.chunk.js.map