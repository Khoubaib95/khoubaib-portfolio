(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[5],{53:function(e,t,n){"use strict";var r=n(54),a=n(0);t.a=function(e){var t=e.title,n=void 0===t?"":t,c=e.description,o=void 0===c?"":c,i=e.canonical,s=e.image,l=e.mobile;return Object(a.jsxs)(r.a,{children:[Object(a.jsx)("title",{children:n}),Object(a.jsx)("meta",{name:"title",content:n}),Object(a.jsx)("meta",{name:"description",content:o}),Object(a.jsx)("meta",{name:"og:title",property:"og:title",content:n}),(null===l||void 0===l?void 0:l.play)&&Object(a.jsx)("meta",{name:"google-play-app",content:"app-id=".concat(l.play)}),(null===l||void 0===l?void 0:l.apple)&&Object(a.jsx)("meta",{name:"apple-itunes-app",content:"app-id=".concat(l.apple)}),i&&Object(a.jsx)("meta",{property:"og:url",content:"".concat(i)}),s&&Object(a.jsx)("meta",{property:"og:image",content:"".concat(s)}),s&&Object(a.jsx)("meta",{name:"twitter:image",content:"".concat(s)}),i&&Object(a.jsx)("link",{rel:"canonical",href:"".concat(i)})]})}},87:function(e,t,n){e.exports=n(88)},88:function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(F){s=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof b?t:b,c=Object.create(a.prototype),o=new S(r||[]);return c._invoke=function(e,t,n){var r=h;return function(a,c){if(r===j)throw new Error("Generator is already running");if(r===d){if("throw"===a)throw c;return C()}for(n.method=a,n.arg=c;;){var o=n.delegate;if(o){var i=N(o,n);if(i){if(i===p)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=j;var s=u(e,t,n);if("normal"===s.type){if(r=n.done?d:f,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}(e,n,o),c}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(F){return{type:"throw",arg:F}}}e.wrap=l;var h="suspendedStart",f="suspendedYield",j="executing",d="completed",p={};function b(){}function m(){}function x(){}var O={};O[c]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(E([])));y&&y!==n&&r.call(y,c)&&(O=y);var v=x.prototype=b.prototype=Object.create(O);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function n(a,c,o,i){var s=u(e[a],e,c);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"===typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,i)}),(function(e){n("throw",e,o,i)})):t.resolve(h).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,i)}))}i(s.arg)}var a;this._invoke=function(e,r){function c(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(c,c):c()}}function N(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,N(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=u(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,p;var c=a.arg;return c?c.done?(n[e.resultName]=c.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function E(e){if(e){var n=e[c];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:C}}function C(){return{value:t,done:!0}}return m.prototype=v.constructor=x,x.constructor=m,m.displayName=s(x,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,s(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},w(_.prototype),_.prototype[o]=function(){return this},e.AsyncIterator=_,e.async=function(t,n,r,a,c){void 0===c&&(c=Promise);var o=new _(l(t,n,r,a),c);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(v),s(v,i,"Generator"),v[c]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=E,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return i.type="throw",i.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var c=this.tryEntries.length-1;c>=0;--c){var o=this.tryEntries[c],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var c=a;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:E(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},93:function(e,t,n){"use strict";n.r(t);var r=n(18),a=n(2),c=n(51),o=n(0),i=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],i=t[1],s=function(e){i(!0),navigator.clipboard.writeText(e),setTimeout((function(){return i(!1)}),1e3)};return Object(o.jsx)("aside",{id:"social",children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{id:"social-phone",children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{style:{color:"#42444d"},className:"fas fa-mobile-alt social-icon"})}),Object(o.jsxs)("div",{id:"phone-number",children:[Object(o.jsxs)("div",{style:{display:"flex"},children:[Object(o.jsx)("span",{className:"clipboard-copy",onClick:function(){s("+216 99 540 894")},children:Object(o.jsx)("i",{style:{color:"#26d0ce"},className:"far fa-copy"})}),Object(o.jsx)("i",{style:{color:"#4fce5d",fontSize:"26px"},className:"fab fa-whatsapp"}),Object(o.jsx)("span",{children:"+216 99 540 894"}),Object(o.jsx)("span",{className:"phone-call",children:Object(o.jsx)("a",{href:"tel:+216 99 540 894",style:{display:"inherit",alignItems:"inherit",color:"inherit"},children:Object(o.jsx)("i",{className:"fas fa-phone-alt"})})})]}),Object(o.jsxs)("div",{style:{display:"flex",borderTop:"1px solid rgba(0, 0, 0, 0.125)"},children:[Object(o.jsx)("span",{className:"clipboard-copy",onClick:function(){s("+216 52 694 427")},children:Object(o.jsx)("i",{style:{color:"#26d0ce"},className:"far fa-copy"})}),Object(o.jsx)("i",{style:{color:"#42444d",fontSize:"26px"},className:"fas fa-mobile-alt social-icon"}),Object(o.jsx)("span",{children:"+216 52 694 427"}),Object(o.jsx)("span",{className:"phone-call",children:Object(o.jsx)("a",{href:"tel:+216 52 694 427",style:{display:"inherit",alignItems:"inherit",color:"inherit"},children:Object(o.jsx)("i",{className:"fas fa-phone-alt"})})})]}),n&&Object(o.jsx)("span",{style:{width:"100%",textAlign:"center",backgroundColor:"#56b95d",color:"white",fontWeight:"bold"},children:Object(o.jsx)(c.a,{id:"contact.copy"})})]})]}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.facebook.com/khoubaib.abdelleoui",target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("i",{style:{color:"#3b5998"},className:"fab fa-facebook social-icon"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.messenger.com/t/100005012559048",target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("i",{style:{color:"#006aff"},className:"fab fa-facebook-messenger social-icon"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/khoubaib-abdellaoui-4601a9134/",target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("i",{style:{color:"#0e76a8"},className:"fab fa-linkedin social-icon"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://github.com/Khoubaib95",target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("i",{style:{color:"#211f1f"},className:"fab fa-github social-icon"})})})]})})},s=n(87),l=n.n(s);function u(e,t,n,r,a,c,o){try{var i=e[c](o),s=i.value}catch(l){return void n(l)}i.done?t(s):Promise.resolve(s).then(r,a)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){u(c,r,a,o,i,"next",e)}function i(e){u(c,r,a,o,i,"throw",e)}o(void 0)}))}}var f=n(58),j=n.n(f);function d(){return(d=h(l.a.mark((function e(t){var n,r,a,c,o,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.language,r=t.fullName,a=t.email,c=t.subject,o=t.message,i=t.setIsSendErr,s=t.setIsSendSucc,j.a.post("".concat("https://khoubaib.herokuapp.com/api/","send_mail"),{language:n,fullName:r,email:a,subject:c,message:o}).then((function(e){console.log("res :"),console.log(e.status),s(!0)})).catch((function(e){return i(!0)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=function(e){return d.apply(this,arguments)},b=n(53);t.default=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),s=n[0],l=n[1],u=Object(a.useState)(""),h=Object(r.a)(u,2),f=h[0],j=h[1],d=Object(a.useState)(""),m=Object(r.a)(d,2),x=m[0],O=m[1],g=Object(a.useState)(""),y=Object(r.a)(g,2),v=y[0],w=y[1],_=Object(a.useState)(!1),N=Object(r.a)(_,2),k=N[0],L=N[1],S=Object(a.useState)(!1),E=Object(r.a)(S,2),C=E[0],F=E[1],I=Object(a.useState)(!1),T=Object(r.a)(I,2),G=T[0],P=T[1],z=Object(a.useState)(!1),q=Object(r.a)(z,2),A=q[0],D=q[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b.a,{title:"Contact"}),Object(o.jsxs)("main",{id:"contact-main",children:[Object(o.jsx)(i,{}),Object(o.jsx)("div",{className:"contact-container-filter"}),Object(o.jsxs)("div",{className:"contact-container",children:[Object(o.jsx)("div",{className:"contact-left",children:Object(o.jsx)("img",{src:"/images/message.png",alt:"send email"})}),Object(o.jsx)("section",{className:"contact-section",children:Object(o.jsxs)("form",{children:[Object(o.jsx)("h2",{children:Object(o.jsx)(c.a,{id:"contact.getIntouch"})}),Object(o.jsxs)("div",{className:"contact_form_input_groupe",children:[Object(o.jsx)("input",{value:s,onChange:function(e){l(e.target.value)},type:"text",id:"name",className:"input_field ".concat(!s&&k?"input_field_errored":""),name:"name",placeholder:"Full Name",required:!0}),Object(o.jsxs)("label",{htmlFor:"name",className:"input_label ".concat(!s&&k?"input_label_errored":""),children:[Object(o.jsx)(c.a,{id:"contact.fullName"}),!s&&k&&Object(o.jsx)(c.a,{id:"contact.mandatory.field"})]})]}),Object(o.jsxs)("div",{className:"contact_form_input_groupe",children:[Object(o.jsx)("input",{value:f,onChange:function(e){j(e.target.value)},type:"text",id:"subject",className:"input_field",name:"subject",placeholder:"Subject",required:!0}),Object(o.jsx)("label",{htmlFor:"subject",className:"input_label",children:Object(o.jsx)(c.a,{id:"contact.subject"})})]}),Object(o.jsxs)("div",{className:"contact_form_input_groupe",children:[Object(o.jsx)("input",{onChange:function(e){O(e.target.value)},value:x,type:"email",id:"email",className:"input_field ".concat(!x&&k?"input_field_errored":""),placeholder:"E-mail",required:!0}),Object(o.jsxs)("label",{htmlFor:"email",className:"input_label ".concat(!x&&k?"input_label_errored":""),children:[Object(o.jsx)(c.a,{id:"contact.email"}),!x&&k&&Object(o.jsx)(c.a,{id:"contact.mandatory.field"})]})]}),Object(o.jsxs)("div",{className:"contact_form_input_groupe",children:[Object(o.jsx)("textarea",{onChange:function(e){w(e.target.value)},value:v,id:"message",className:"input_field ".concat(!v&&k?"input_field_errored":""),name:"message",cols:30,rows:10,placeholder:"Message",required:!0}),Object(o.jsxs)("label",{htmlFor:"message",className:"input_label ".concat(!v&&k?"input_label_errored":""),children:[Object(o.jsx)(c.a,{id:"contact.message"}),!v&&k&&Object(o.jsx)(c.a,{id:"contact.mandatory.field"})]})]}),A?Object(o.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"112px",backgroundColor:G?"#28a7452e":C?"#dc35452e":"#f1f1f1",fontSize:"25px",color:G?"#28a745":C?"#dc3545":"",border:"2px solid ".concat(G?"#28a745":C?"#dc3545":"none"),justifyContent:"center",alignItems:"center"},children:G?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("i",{className:"fas fa-times contact-form-info-close",onClick:function(){D(!1),P(!1),F(!1)}}),Object(o.jsxs)("h2",{children:["Message sent",Object(o.jsx)("i",{style:{fontSize:"22px"},className:"fas fa-check"})]}),Object(o.jsx)("span",{style:{fontSize:"20px"},children:"Thanks for being in touch"})]}):C?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("i",{className:"fas fa-times contact-form-info-close",onClick:function(){D(!1),P(!1),F(!1)}}),Object(o.jsx)("h2",{children:"Oops Error"}),Object(o.jsx)("span",{style:{fontSize:"20px"},children:"please try again"})]}):Object(o.jsxs)("span",{id:"loader",children:[Object(o.jsx)("span",{id:"loader1"}),Object(o.jsx)("span",{id:"loader2"}),Object(o.jsx)("span",{id:"loader3"})]})}):Object(o.jsxs)("div",{id:"contact-left-form-button",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(t){t.preventDefault(),s&&x&&v?(D(!0),p({language:e.language,fullName:s,email:x,subject:f,message:v,setIsSendErr:F,setIsSendSucc:P})):L(!0)},id:"contact-form-send-button",className:"contact-form-button",type:"submit",children:Object(o.jsx)("b",{children:Object(o.jsx)(c.a,{id:"contact.send"})})}),Object(o.jsx)("button",{onClick:function(e){e.preventDefault(),L(!1),l(""),j(""),O(""),w("")},id:"contact-form-reset-button",className:"contact-form-button",children:Object(o.jsx)("b",{children:Object(o.jsx)(c.a,{id:"contact.reset"})})})]}),Object(o.jsx)("span",{children:Object(o.jsx)(c.a,{id:"contact.ou"})}),Object(o.jsx)("a",{href:"mailto:khoubaibab01@gmail.com",style:{fontWeight:600,width:"240px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center"},className:"contact-form-button",children:Object(o.jsx)("b",{children:Object(o.jsx)(c.a,{id:"contact.send-email"})})})]})]})})]})]})]})}}}]);
//# sourceMappingURL=5.8602cf0c.chunk.js.map