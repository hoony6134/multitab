(this.webpackJsonppingen=this.webpackJsonppingen||[]).push([[0],{243:function(t,n,e){},244:function(t,n,e){},265:function(t,n){},267:function(t,n){},277:function(t,n){},279:function(t,n){},304:function(t,n){},306:function(t,n){},307:function(t,n){},312:function(t,n){},314:function(t,n){},320:function(t,n){},322:function(t,n){},341:function(t,n){},353:function(t,n){},356:function(t,n){},382:function(t,n){},483:function(t,n,e){"use strict";e.r(n);var o=e(0),c=e.n(o),i=e(15),r=e.n(i),a=(e(243),e(31)),l=e(29),s=(e(244),e(516)),u=e(229),d=e.n(u),f=e(513),h=e(524),j=e(519),b=e(522),m=e(520),p=e(521),O=e(19),g=e(246),x=Object(f.a)((function(t){return{root:{height:"100vh"},container:{display:"grid",height:"100%"},item:{border:"1px solid black",position:"relative"},iframe:{width:"100%",height:"100vh"},addBtn:{position:"absolute",right:"1rem",bottom:"1rem"},cover:{width:"100%",height:"100%",backgroundColor:"gray",border:"5px solid black"},control:{position:"absolute",bottom:"1rem",left:"1rem",zIndex:1e4,fontSize:"2rem",fontWeight:"bold"},shortenURL:{border:"none",overflow:"visible",fontSize:"1.5rem",width:"20rem"}}}));var v=function(){var t=x(),n=new URL(window.location).searchParams.get("p"),e=JSON.parse(n);e=(e=null===e?[]:e).map((function(t){return t.active=!1,t}));var c=Object(o.useState)(!1),i=Object(l.a)(c,2),r=i[0],u=i[1],f=Object(o.useState)(null),v=Object(l.a)(f,2),w=v[0],y=v[1],C=Object(o.useState)(null===e?[]:e),k=Object(l.a)(C,2),S=k[0],L=k[1],N=function(){u(!1)},U=S.map((function(n,e){return Object(O.jsxs)("div",{className:t.item,children:[Object(O.jsx)("iframe",{src:n.url,className:t.iframe}),Object(O.jsx)("div",{className:t.control,children:Object(O.jsx)("input",{className:t.shortenURL,type:"text",value:S[e].url,onClick:function(t){t.target.select()}})})]},e)})),F=S.map((function(t){return"1fr"})).join(" ");return Object(O.jsxs)("div",{className:t.root,children:[Object(O.jsx)("div",{className:t.container,style:{gridTemplateColumns:F},children:U}),Object(O.jsx)(s.a,{color:"primary","aria-label":"add",className:t.addBtn,children:Object(O.jsx)(d.a,{onClick:function(){u(!0)}})}),Object(O.jsxs)(h.a,{open:r,onClose:N,children:[Object(O.jsxs)(j.a,{children:["\ubcf5\uc81c\ud55c ping \uc2dc\ud2b8\uc758 \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",Object(O.jsx)(b.a,{autoFocus:!0,margin:"dense",id:"name",label:"URL",type:"url",fullWidth:!0,onChange:function(t){y(t.target.value),console.log(t.target.value)},value:w})]}),Object(O.jsxs)(m.a,{children:[Object(O.jsx)(p.a,{onClick:N,color:"primary",children:"\ucde8\uc18c"}),Object(O.jsx)(p.a,{onClick:function(){N(),g.short(w,(function(t,n){L([].concat(Object(a.a)(S),[{url:n,title:null,active:!0}]));var e=new URL(window.location);e.searchParams.set("p",JSON.stringify([].concat(Object(a.a)(S),[{url:n,title:null,active:!1}]))),window.history.pushState(null,null,e),y("")}))},color:"primary",children:"\ud551\ucd94\uac00"}),Object(O.jsx)(p.a,{onClick:function(){window.open("https://docs.google.com/spreadsheets/d/1MsDJxO9xOHl8LE02n34n51hxwTA_usDn-Yta4Y84LeU/copy")},color:"primary",children:"\ud551\ubcf5\uc0ac"})]})]})]})},w=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,526)).then((function(n){var e=n.getCLS,o=n.getFID,c=n.getFCP,i=n.getLCP,r=n.getTTFB;e(t),o(t),c(t),i(t),r(t)}))};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root")),w()}},[[483,1,2]]]);
//# sourceMappingURL=main.56894636.chunk.js.map