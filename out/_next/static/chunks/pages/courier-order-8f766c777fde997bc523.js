_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"/AFn":function(e,t,r){"use strict";var c=r("nKUr");r("q1tI");t.a=function(e){var t=e.th,r=void 0===t?[]:t,n=e.data,a=void 0===n?[]:n,s=e.renderBody,i=void 0===s?function(){}:s,l=e.thClassName,o=e.trStyle,d=e.className;return Object(c.jsxs)("table",{className:"tabel ".concat(d||""),children:[Object(c.jsx)("thead",{className:"tabel-head ".concat(l||""),children:Object(c.jsx)("tr",{className:"",children:r.map((function(e,t){return Object(c.jsx)("th",{children:e},t)}))})}),Object(c.jsx)("tbody",{className:"tabel-body",children:a.map((function(e,t){return Object(c.jsx)("tr",{style:o,children:e&&Object.values(e).map(i)},t)}))})]})}},"20a2":function(e,t,r){e.exports=r("nOHt")},"3ca1":function(e,t,r){"use strict";var c=r("cpVT"),n=r("nKUr"),a=r("dhJC");r("q1tI");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}t.a=function(e){var t=e.className,r=e.style,i=e.type,l=e.name,o=e.Ref,d=Object(a.a)(e,["className","style","type","name","Ref"]);return Object(n.jsx)("input",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({type:i,name:l,autoComplete:"false",ref:o,className:"input ".concat(t||""),style:r},d))}},H77e:function(e,t,r){"use strict";var c=r("nKUr");r("q1tI");t.a=function(e){var t=e.children,r=e.style,n=e.className;return Object(c.jsx)("div",{className:"page ".concat(n||""),style:r,children:Object(c.jsx)("div",{className:"container-fluid ",children:t})})}},HlVv:function(e,t,r){"use strict";var c=r("cpVT"),n=r("nKUr"),a=r("dhJC");r("q1tI");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.label,r=e.startElement,c=e.endElement,s=e.className,l=e.style,o=e.Ref,d=Object(a.a)(e,["label","startElement","endElement","className","style","Ref"]);return Object(n.jsxs)("button",i(i({className:"btn ".concat(s||""),style:l,ref:o},d),{},{children:[r,t,c]}))}},KZgz:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courier-order",function(){return r("bUt3")}])},NQIg:function(e,t,r){"use strict";r("vJKn"),r("rg98");var c=r("nKUr");r("q1tI");t.a=function(e){var t=e.label,r=e.labelStartIcon,n=e.children,a=e.error,s=e.className,i=e.bodyClass,l=e.bodyStyle,o=e.style;return Object(c.jsxs)("div",{className:"form-group ".concat(s||""),style:o||{},children:[t&&Object(c.jsxs)("div",{className:"txt-lbl-container mb-xxs",children:[Object(c.jsx)("label",{className:"txt-lbl ",children:t}),r]}),Object(c.jsx)("div",{className:"form-group-body ".concat(i||""),style:l,children:n}),a&&Object(c.jsx)("label",{style:{fontSize:"11px"},className:"err-lbl",children:a})]})}},bUt3:function(e,t,r){"use strict";r.r(t);var c=r("nKUr"),n=r("vDqi"),a=r.n(n),s=r("YFqc"),i=r.n(s),l=r("20a2"),o=r("q1tI"),d=r("dDsW"),b=r("/MKj"),j=r("Nz3N"),u=r("OL2v"),p=r("HlVv"),m=r("SMXi"),O=r("NQIg"),y=r("3ca1"),h=r("8J/8"),f=r("H77e"),x=r("Vmg3"),g=r("/AFn");function N(e){if(!e.entry.isLoged)return Object(c.jsx)(x.a,{});var t=Object(d.a)().formatMessage,r=[t({id:"tracking"}),t({id:"shop"}),t({id:"category"}),t({id:"amount"}),t({id:"weight"}),t({id:"delivery"})],n=Object(o.useState)({orderHistory:[],paidBatches:[]}),s=n[0],b=n[1],N=Object(l.useRouter)().locale;return Object(o.useLayoutEffect)((function(){Promise.all([a.a.get("".concat("https://166api.titr.az/api/","kuryers?lan=").concat(N),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.entry.user.accessToken)}}),a.a.get("".concat("https://166api.titr.az/api/","batches/paid?lan=").concat(N),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.entry.user.accessToken)}})]).then((function(e){b({orderHistory:e[0].data,paidBatches:e[1].data})})).catch((function(e){return console.log(e)}))}),[]),Object(c.jsxs)(f.a,{className:"bg-bg pt-lg pb-lg",children:[Object(c.jsx)(u.a,{className:"mr-sm",children:Object(c.jsx)(j.a,{})}),Object(c.jsxs)(h.a,{className:"bg-white p-none",children:[Object(c.jsx)(m.a,{className:"p-sm bg-white coruier__cards br-lg",children:Object(c.jsxs)("form",{children:[Object(c.jsx)(m.a.Header,{text:t({id:"courier-order"})}),Object(c.jsxs)(m.a.Body,{className:"p-none",children:[Object(c.jsx)("p",{className:"mb-lg",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}),Object(c.jsxs)("div",{className:"coruier-cards-form-container",style:{display:"flex",flexWrap:"wrap"},children:[Object(c.jsx)(O.a,{label:t({id:"choose-dist"}),className:"w-50 pr-lg mb-sm",bodyClass:"bg-bg",children:Object(c.jsx)(y.a,{type:"text"})}),Object(c.jsx)(O.a,{label:t({id:"choose-date"}),className:"w-50 pr-lg mb-sm",bodyClass:"bg-bg",children:Object(c.jsx)(y.a,{type:"date"})}),Object(c.jsx)(O.a,{label:t({id:"correct-addres"}),className:"w-50 pr-lg mb-sm",bodyClass:"bg-bg",children:Object(c.jsx)(y.a,{type:"text"})}),Object(c.jsx)(O.a,{label:t({id:"enter-number"}),className:"w-50 pr-lg mb-sm",bodyClass:"bg-bg",children:Object(c.jsx)(y.a,{type:"tel",maxLength:"10",pattern:"[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"})})]}),Object(c.jsx)(i.a,{href:"/",children:Object(c.jsx)("a",{style:{color:"darkblue",textDecoration:"underline"},children:t({id:"definemap"})})})]}),Object(c.jsx)(m.a.Footer,{style:{justifyContent:"flex-end"},children:Object(c.jsx)(p.a,{type:"submit",className:"p-xs",label:t({id:"makeorder"})})})]})}),Object(c.jsxs)(m.a,{className:"p-sm bg-white coruier__cards br-lg",children:[Object(c.jsx)(m.a.Header,{text:Object(c.jsx)("small",{style:{fontSize:"small"},children:t({id:"payed-packages"})})}),Object(c.jsx)(m.a.Body,{className:"p-none table__scroll",children:Object(c.jsx)(g.a,{th:r,data:s.paidBatches.map((function(e){return{track_number:e.track_number,shop:e.shop,category:e.category,price:e.price,weight:e.weight,delivery_price:e.delivery_price}})),renderBody:function(e,t){return Object(c.jsx)("td",{children:e},t)}})})]}),Object(c.jsx)(m.a.Footer,{className:"footer__courier",children:Object(c.jsx)(p.a,{className:"p-xs",label:t({id:"makeorder"})})}),Object(c.jsxs)(m.a,{className:"p-sm bg-white mt-sm coruier__cards br-lg",children:[Object(c.jsx)(m.a.Header,{text:t({id:"order-history"})}),Object(c.jsx)(m.a.Body,{className:"p-none",children:Object(c.jsxs)("div",{className:"orders-container",children:[Object(c.jsx)("div",{className:"orders-container-head"}),s.orderHistory.map((function(e){return Object(c.jsxs)("details",{className:"orders-item-details",children:[Object(c.jsx)("summary",{className:"order-item-summary",children:Object(c.jsxs)("div",{className:"order-item-summary-head",children:[Object(c.jsx)("span",{style:{textAlign:"center"},children:"No "}),Object(c.jsx)("span",{style:{textAlign:"center"},children:t({id:"dateon"})}),Object(c.jsx)("span",{style:{textAlign:"center"},children:t({id:"count"})}),Object(c.jsx)("span",{style:{textAlign:"center"},children:t({id:"status"})})]})}),Object(c.jsx)(g.a,{thClassName:"bg-white",data:[e],renderBody:function(e,t){if(0==!t)return Object(c.jsx)("td",{style:{textAlign:"center"},children:Object(c.jsx)("span",{children:e})},t++)}})]},e.id)}))]})})]})]})]})}t.default=Object(b.b)((function(e){return{entry:e.entry}}))(Object(o.memo)(N))},cpVT:function(e,t,r){"use strict";function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return c}))},dhJC:function(e,t,r){"use strict";function c(e,t){if(null==e)return{};var r,c,n=function(e,t){if(null==e)return{};var r,c,n={},a=Object.keys(e);for(c=0;c<a.length;c++)r=a[c],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)r=a[c],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(t,"a",(function(){return c}))},rg98:function(e,t,r){"use strict";function c(e,t,r,c,n,a,s){try{var i=e[a](s),l=i.value}catch(o){return void r(o)}i.done?t(l):Promise.resolve(l).then(c,n)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function i(e){c(s,n,a,i,l,"next",e)}function l(e){c(s,n,a,i,l,"throw",e)}i(void 0)}))}}r.d(t,"a",(function(){return n}))}},[["KZgz",0,1,2,3,4,5,7]]]);