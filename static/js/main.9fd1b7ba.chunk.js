(this["webpackJsonpimage-gallery"]=this["webpackJsonpimage-gallery"]||[]).push([[0],{11:function(e,t,a){e.exports={Gallery:"Gallery_Gallery__3aQ5Z",ImageContainer:"Gallery_ImageContainer__1ZzOr",Image:"Gallery_Image__d-RQF"}},22:function(e,t,a){e.exports={Backdrop:"Modal_Backdrop__DcnBV"}},29:function(e,t,a){},30:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),i=a(21),o=a.n(i),s=(a(29),a(9)),l=a(3),u=(a(30),a(7)),d=a.n(u),j=function(e){return Object(n.jsx)("nav",{className:d.a.Navbar,children:Object(n.jsx)("ul",{children:e.children})})},b=function(e){var t=Object(r.useState)(!1),a=Object(l.a)(t,2),c=a[0],i=a[1];return Object(n.jsxs)(n.Fragment,{children:[c&&Object(n.jsx)("div",{onClick:function(){return i(!1)},className:d.a.Backdrop}),Object(n.jsxs)("li",{onClick:function(){return i(!c)},children:[Object(n.jsx)("h2",{className:d.a.NavItemText,children:e.name}),c&&e.children]})]})},v=a(4),m=a.n(v),p=a(8),h=a(5),f=a(22),O=a.n(f),g=function(e){e.show;var t=e.closeModal,a=e.imgUrl;return Object(n.jsx)(h.a.div,{initial:{opacity:0},animate:{opacity:1},className:O.a.Backdrop,onClick:t,children:Object(n.jsx)(h.a.img,{initial:{y:"-100vh"},animate:{y:"0"},onLoad:function(){return console.log("loaded")},src:a,alt:"hello darkness"})})},x=c.a.memo(g),w=a(23),y=a.n(w),k=function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("sending request..."),n="https://www.reddit.com/r/".concat(t,".json?raw_json=1"),a&&(n="".concat(n,"&after=").concat(a)),e.next=6,y.a.get(n);case 6:return r=e.sent,e.abrupt("return",r.data.data);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}(),_=a(11),N=a.n(_),I=function(e){var t=e.subreddit,a=Object(r.useState)([]),c=Object(l.a)(a,2),i=c[0],o=c[1],u=Object(r.useState)(!0),d=Object(l.a)(u,2),j=d[0],b=d[1],v=Object(r.useState)(""),f=Object(l.a)(v,2),O=f[0],g=f[1],w=Object(r.useState)(!1),y=Object(l.a)(w,2),_=y[0],I=y[1],C=Object(r.useState)(""),S=Object(l.a)(C,2),B=S[0],P=S[1],G=Object(r.useRef)(),E=Object(r.useCallback)(Object(p.a)(m.a.mark((function e(){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,k(t,O);case 3:a=e.sent,g(a.after),n=A(a.children),r=[].concat(Object(s.a)(i),Object(s.a)(n)),o(r),b(!1);case 9:case"end":return e.stop()}}),e)}))),[i,O,t]),M=Object(r.useCallback)((function(e){G.current&&G.current.disconnect(),G.current=new IntersectionObserver((function(e){e[0].isIntersecting&&i.length<=100&&(console.log("visible"),E())})),e&&G.current.observe(e)}),[E,i.length]),A=function(e){return e.filter((function(e){return!(void 0===e.data.preview)})).map((function(e){var t=e.data.preview.images[0].resolutions[2];return void 0===t&&(t=e.data.preview.images[0].resolutions[1]),{thumbnail:e.data.thumbnail,url:e.data.url,id:e.data.id,source:{url:e.data.preview.images[0].source.url,height:e.data.preview.images[0].source.height,width:e.data.preview.images[0].source.width},preview:t}}))};Object(r.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,k(t);case 4:a=e.sent,console.log(a),g(a.after),n=A(a.children),o(n),b(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[t]);return Object(n.jsxs)(n.Fragment,{children:[_&&Object(n.jsx)(x,{show:_,closeModal:function(){return I(!1)},imgUrl:B}),i.length>0&&Object(n.jsx)("div",{className:N.a.Gallery,children:i.map((function(e,t){return Object(n.jsx)(h.a.div,{ref:i.length===t+1?M:null,layout:!0,whileHover:{opacity:1},className:N.a.ImageContainer,onClick:function(){return t=e.source.url,P(t),void I(!0);var t},children:Object(n.jsx)(h.a.img,{initial:{opacity:0},animate:{opacity:1},transition:{delay:t/100},className:N.a.Image,src:e.preview.url,alt:e.id})},e.id)}))}),j&&Object(n.jsx)("div",{children:"Loading..."})]})},C=[{name:"Earth Pics",value:"earthporn"},{name:"Nature Pics",value:"natureporn"},{name:"Sky Pics",value:"skyporn"},{name:"Abandoned Pics",value:"abandonedporn"},{name:"Eye Bleach",value:"eyebleach"},{name:"Car Pics",value:"carporn"},{name:"Space Pics",value:"spaceporn"},{name:"Military Pics",value:"militaryporn"},{name:"Beer With A View",value:"beerwithaview"}];var S=function(){var e=Object(r.useState)({name:"No Context Pics",value:"nocontextpics"}),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(r.useState)(C),o=Object(l.a)(i,2),u=o[0],d=o[1];return Object(r.useEffect)((function(){console.log("App mounted...")}),[]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(j,{children:Object(n.jsx)(b,{name:a.name,children:Object(n.jsx)("div",{className:"Dropdown",children:u.map((function(e){return Object(n.jsx)("h2",{onClick:function(){return function(e){console.log(e);var t=[a].concat(Object(s.a)(u.filter((function(t){return t.value!==e.value}))));d(t),c(e)}(e)},className:"DropdownItem",children:e.name},e.value)}))})})}),Object(n.jsx)(I,{subreddit:a.value})]})};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Navbar:"Navbar_Navbar__1_zYg",NavItemText:"Navbar_NavItemText__2u0kR",Backdrop:"Navbar_Backdrop__2uU8z"}}},[[49,1,2]]]);
//# sourceMappingURL=main.9fd1b7ba.chunk.js.map