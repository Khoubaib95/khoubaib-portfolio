(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[7],{53:function(e,t,c){"use strict";var r=c(54),i=c(0);t.a=function(e){var t=e.title,c=void 0===t?"":t,n=e.description,s=void 0===n?"":n,a=e.canonical,o=e.image,l=e.mobile;return Object(i.jsxs)(r.a,{children:[Object(i.jsx)("title",{children:c}),Object(i.jsx)("meta",{name:"title",content:c}),Object(i.jsx)("meta",{name:"description",content:s}),Object(i.jsx)("meta",{name:"og:title",property:"og:title",content:c}),(null===l||void 0===l?void 0:l.play)&&Object(i.jsx)("meta",{name:"google-play-app",content:"app-id=".concat(l.play)}),(null===l||void 0===l?void 0:l.apple)&&Object(i.jsx)("meta",{name:"apple-itunes-app",content:"app-id=".concat(l.apple)}),a&&Object(i.jsx)("meta",{property:"og:url",content:"".concat(a)}),o&&Object(i.jsx)("meta",{property:"og:image",content:"".concat(o)}),o&&Object(i.jsx)("meta",{name:"twitter:image",content:"".concat(o)}),a&&Object(i.jsx)("link",{rel:"canonical",href:"".concat(a)})]})}},57:function(e,t,c){"use strict";c.d(t,"a",(function(){return n})),c.d(t,"b",(function(){return s}));var r=c(51),i=c(0),n=function(e){return Object(i.jsx)("div",{className:"skills",style:{color:"#".concat(e.color),backgroundColor:"#".concat(e.color,"2e"),borderColor:"#".concat(e.color)},children:e.name})},s=function(e){var t=e.percent;return Object(i.jsxs)("span",{style:{whiteSpace:"nowrap",backgroundColor:"#cccccc"},children:[Object(i.jsx)("span",{children:Object(i.jsx)("code",{className:"code",children:" < "})}),Object(i.jsx)(r.a,{id:"myparticipation"})," ","".concat(t,"%")," ",Object(i.jsx)("code",{className:"code",children:"/>"})]})}},92:function(e,t,c){"use strict";function r(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function i(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,r)}return c}function n(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?i(Object(c),!0).forEach((function(t){r(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):i(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}c.r(t);var s=c(18),a=c(2),o=c(58),l=c.n(o),j=c(57),b=c(51),p=c(0),d=function(e){var t=e.img,c=e.name,r=e.description,i=e.task,n=e.technologie,s=e.website,a=e.github,o=e.status,l=e.owner;return Object(p.jsxs)("div",{className:"project-card",id:c.trim().replaceAll(" ","-").toLowerCase(),children:[Object(p.jsx)("div",{className:"project-img-container",children:Object(p.jsx)("img",{src:t||"",alt:"Not Fount"})}),Object(p.jsxs)("div",{className:"project-content",children:[Object(p.jsx)("h3",{className:"project-title",children:c}),Object(p.jsx)("p",{className:"project-description",children:r}),Object(p.jsxs)("div",{className:"project-tasks",children:[Object(p.jsxs)("h4",{style:{fontWeight:"bold"},children:[Object(p.jsx)(b.a,{id:"project.task"})," :"]}),Object(p.jsx)("ul",{children:i.map((function(e,t){return Object(p.jsx)("li",{children:e},t)}))})]}),Object(p.jsxs)("div",{className:"project-attributes",children:[Object(p.jsxs)("h4",{style:{fontWeight:"bold"},children:[Object(p.jsx)(b.a,{id:"project.tech"})," :"]}),Object(p.jsx)("div",{className:"project-attributes-value",style:{display:"flex",flexWrap:"wrap",marginLeft:"5px"},children:null===n||void 0===n?void 0:n.map((function(e){return Object(p.jsx)(j.a,{color:e.color,name:e.name},e._id)}))})]}),Object(p.jsxs)("div",{className:"project-attributes",children:[Object(p.jsxs)("h4",{style:{fontWeight:"bold"},children:[Object(p.jsx)(b.a,{id:"project.status"})," :"]}),Object(p.jsxs)("span",{className:"project-attributes-value",children:[o,"Achieved"===o&&Object(p.jsxs)(p.Fragment,{children:[" ",Object(p.jsx)("i",{style:{color:"green"},className:"fas fa-check"})]})]})]}),Object(p.jsxs)("div",{className:"project-attributes",children:[Object(p.jsxs)("h4",{style:{fontWeight:"bold"},children:[Object(p.jsx)(b.a,{id:"project.owner"})," :"]}),Object(p.jsx)("div",{className:"project-attributes-value",children:null===l||void 0===l?void 0:l.map((function(e){return Object(p.jsx)("div",{children:e.name},e._id)}))})]}),Object(p.jsxs)("div",{className:"project-attributes",children:[Object(p.jsxs)("h4",{style:{fontWeight:"bold"},children:[Object(p.jsx)(b.a,{id:"project.preview"})," :"]}),Object(p.jsxs)("div",{className:"project-attributes-value project-attributes-preview-value ",style:{display:"flex",flexWrap:"wrap",marginLeft:"5px",alignItems:"center"},children:[Object(p.jsx)("div",{style:{display:"flex",margin:0,flexWrap:"wrap"},children:a.isPrivate?Object(p.jsxs)("div",{className:"project-github-private",style:{margin:0},children:[Object(p.jsx)("i",{className:"fab fa-github",style:{color:"inherit",marginRight:"3px"}}),Object(p.jsx)(b.a,{id:"project.githube.private"})]}):a.githubProjects.map((function(e){return Object(p.jsx)("div",{className:"project-github-public truncate",style:{margin:5},children:Object(p.jsxs)("a",{style:{color:"inherit"},href:e.link,target:"_blank",rel:"noopener noreferrer",children:[Object(p.jsx)("i",{className:"fab fa-github",style:{marginRight:"3px",color:"inherit"}}),e.name]})},e._id)}))}),s&&Object(p.jsx)("div",{className:"project-website truncate",children:Object(p.jsxs)("a",{style:{color:"inherit"},href:s,target:"_blank",rel:"noreferrer",children:[Object(p.jsx)("i",{className:"fas fa-globe-africa",style:{marginRight:"3px"}}),s.split("://")[1]]})})]})]})]})]})},u=c(53),h=c(19);t.default=function(e){var t=e.mobileProjects,c=e.setMobileProject,r=e.webProjects,i=e.setWebProject,o=Object(a.useState)(!0),j=Object(s.a)(o,2),O=j[0],x=j[1],m=Object(a.useState)(!1),f=Object(s.a)(m,2),v=f[0],g=f[1];return Object(a.useEffect)((function(){null!==r&&null!==t||(g(!0),l.a.get("".concat("https://khoubaib.herokuapp.com/api/","project")).then((function(e){i(e.data.filter((function(e){return"WEB"===e.type}))),c(e.data.filter((function(e){return"MOBILE"===e.type}))),g(!1)})).catch((function(e){})))}),[t,t]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u.a,{title:"Projects"}),Object(p.jsxs)("main",{id:"project-main",children:[Object(p.jsxs)("div",{className:"project-header-type",children:[Object(p.jsxs)("div",{className:"project-type",children:[Object(p.jsx)("div",{id:"project-type-web",className:O?"project-type-active":"",onClick:function(){x(!0)},children:Object(p.jsx)("span",{children:"Web"})}),Object(p.jsx)("div",{id:"project-type-mobile",className:O?"":"project-type-active",onClick:function(){x(!1)},children:Object(p.jsx)("span",{children:"Mobile"})})]}),Object(p.jsx)("div",{style:{left:O?"0%":"50%"},className:"project-type-underline"})]}),Object(p.jsx)("div",{className:"projects-list-container",children:v?Object(p.jsx)(h.a,{height:"60px"}):O?null===r||void 0===r?void 0:r.map((function(e,t){return Object(p.jsx)(d,n({},e),t)})):t.length>0?null===t||void 0===t?void 0:t.map((function(e,t){return Object(p.jsx)(d,n({},e),t)})):Object(p.jsx)("div",{style:{backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:"center",borderLeft:"3px solid blueviolet",margin:"40px auto",width:"max-content",textAlign:"center",maxWidth:"200px",padding:"10px"},children:Object(p.jsx)("h3",{children:Object(p.jsx)(b.a,{id:"no.project.uploaded"})})})})]})]})}}}]);
//# sourceMappingURL=7.399367a5.chunk.js.map