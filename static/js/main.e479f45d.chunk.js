(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),d=a(10),i=a.n(d),c=(a(29),a(30),a(12)),s=a.n(c),m=a(21),l=a(6),u=a(13),o=a.n(u),h=a(23),b=a(24),j=a(1);function y(e){var t=e.artwork,a=e.width,r=void 0===a?100:a,n=e.height,d=void 0===n?100:n,i=e.alt,c=void 0===i?"":i,s=Object(b.a)(e,["artwork","width","height","alt"]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("img",Object(h.a)({className:"album-art",src:t.url.replaceAll("{w}",r).replaceAll("{h}",d),alt:c},s))})}o.a.setAppElement("#root");var F=function(e){return function(t){return e.reduce((function(e,t){return e&&e[t]?e[t]:null}),t)}};function O(e){var t=e.album,a=Object(r.useState)(!1),n=Object(l.a)(a,2),d=n[0],i=n[1],c=t.attributes,s=F(["editorialNotes","standard"])(c),m=F(["editorialNotes","short"])(c),u=function(){return i(!1)},h=c.genreNames.filter((function(e){return"Music"!==e}))[0],b=new Date(c.releaseDate).getFullYear();return Object(j.jsxs)("div",{className:"album",children:[Object(j.jsxs)(o.a,{isOpen:d,onRequestClose:u,className:"modal",style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"1px solid rgb(59, 59, 59)",background:"rgba(0, 0, 0, 0.9)",height:"500px",overflow:"scroll"}},contentLabel:"".concat(c.artistName," - ").concat(c.name," album details"),children:[Object(j.jsx)("div",{className:"close-wrapper",children:Object(j.jsx)("button",{className:"close-modal-btn",onClick:u,type:"button","aria-label":"close",children:"\xd7"})}),Object(j.jsxs)("div",{className:"modal-wrapper",children:[Object(j.jsx)("a",{href:c.url,children:Object(j.jsx)(y,{title:m,className:"modal-album-art",width:400,height:400,artwork:c.artwork,alt:"".concat(c.artistName," - ").concat(c.name," album artwork")})}),Object(j.jsxs)("div",{className:"modal-album-details",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("h1",{className:"modal-album-name",children:[t.attributes.name,Object(j.jsx)("div",{className:"explicit",children:"explicit"===c.contentRating&&"\ud83c\udd74"})]})}),Object(j.jsx)("div",{className:"modal-artist-name",children:Object(j.jsx)("h1",{children:t.attributes.artistName})}),Object(j.jsxs)("div",{className:"modal-album-genre",children:[h," - ",b]}),Object(j.jsx)("div",{className:"modal-notes-wrap",children:Object(j.jsx)("p",{className:"modal-editors-notes",dangerouslySetInnerHTML:function(e){return{__html:e}}(s)})})]})]})]}),Object(j.jsx)(y,{title:m,width:200,height:200,artwork:c.artwork,alt:"".concat(c.artistName," - ").concat(c.name," album artwork"),onClick:function(){return i(!0)}}),Object(j.jsxs)("div",{className:"artist-name",children:[Object(j.jsx)("p",{children:t.attributes.artistName}),Object(j.jsx)("span",{className:"explicit",children:"explicit"===c.contentRating&&"\ud83c\udd74"})]}),Object(j.jsx)("div",{children:Object(j.jsx)("p",{className:"album-name",children:t.attributes.name})})]})}var p=a(2);function v(){for(var e=[{date:"2021-11-26",name:"Friday, November 26th 2021"},{date:"2021-11-19",name:"Friday, November 19th 2021"},{date:"2021-11-12",name:"Friday, November 12th 2021"},{date:"2021-11-05",name:"Friday, November 5th 2021"},{date:"2021-10-29",name:"Friday, October 29th 2021"},{date:"2021-10-22",name:"Friday, October 22nd 2021"},{date:"2021-10-15",name:"Friday, October 15th 2021"},{date:"2021-10-08",name:"Friday, October 8th 2021"},{date:"2021-10-01",name:"Friday, October 1st 2021"},{date:"2021-09-24",name:"Friday, September 24th 2021"},{date:"2021-09-17",name:"Friday, September 17th 2021"},{date:"2021-09-10",name:"Friday, September 10th 2021"},{date:"2021-09-03",name:"Friday, September 3rd 2021"},{date:"2021-08-27",name:"Friday, August 27th 2021"},{date:"2021-08-20",name:"Friday, August 20th 2021"},{date:"2021-08-13",name:"Friday, August 13th 2021"},{date:"2021-08-06",name:"Friday, August 6th 2021"},{date:"2021-07-30",name:"Friday, July 30th 2021"},{date:"2021-07-23",name:"Friday, July 23rd 2021"},{date:"2021-07-16",name:"Friday, July 16th 2021"},{date:"2021-07-09",name:"Friday, July 9th 2021"},{date:"2021-07-02",name:"Friday, July 2nd 2021"},{date:"2021-06-25",name:"Friday, June 25th 2021"},{date:"2021-06-18",name:"Friday, June 18th 2021"},{date:"2021-06-11",name:"Friday, June 11th 2021"},{date:"2021-06-04",name:"Friday, June 4th 2021"},{date:"2021-05-28",name:"Friday, May 28th 2021"},{date:"2021-05-21",name:"Friday, May 21st 2021"},{date:"2021-05-14",name:"Friday, May 14th 2021"},{date:"2021-05-07",name:"Friday, May 7th 2021"}],t=Object(p.h)().date,a=Object(p.g)(),n=Object(r.useState)([]),d=Object(l.a)(n,2),i=d[0],c=d[1],u=Object(r.useState)({}),o=Object(l.a)(u,2),h=o[0],b=o[1],y=0,F=0;F<e.length;F++)if(e[F].date===t){y=F;break}var v=Object(r.useState)(e[y]),x=Object(l.a)(v,2),g=x[0],f=x[1];return Object(r.useEffect)((function(){!function(){var e=Object(m.a)(s.a.mark((function e(t){var a,r,n,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.date,!h[a]){e.next=4;break}return c(h[a]),e.abrupt("return");case 4:return e.next=6,fetch("/new-music-archive/archive/".concat(a,".json"));case 6:return r=e.sent,e.next=9,r.json();case 9:n=e.sent,d=n.data,h[a]=d,b(h),c(d);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(g)}),[h,g]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("select",{className:"date-selection",value:g.date,name:"dates",onChange:function(e){f({date:e.target.value}),a.push("/".concat(e.target.value))},children:e.map((function(e){var t=e.name,a=e.date;return Object(j.jsx)("option",{value:a,children:t},a)}))}),Object(j.jsx)("div",{className:"album-list",children:i.map((function(e){return Object(j.jsx)(O,{album:e},e.id)}))})]})}var x=a(11);var g=function(){var e=[{date:"2021-11-26",name:"Friday, November 26th 2021"},{date:"2021-11-19",name:"Friday, November 19th 2021"},{date:"2021-11-12",name:"Friday, November 12th 2021"},{date:"2021-11-05",name:"Friday, November 5th 2021"},{date:"2021-10-29",name:"Friday, October 29th 2021"},{date:"2021-10-22",name:"Friday, October 22nd 2021"},{date:"2021-10-15",name:"Friday, October 15th 2021"},{date:"2021-10-08",name:"Friday, October 8th 2021"},{date:"2021-10-01",name:"Friday, October 1st 2021"},{date:"2021-09-24",name:"Friday, September 24th 2021"},{date:"2021-09-17",name:"Friday, September 17th 2021"},{date:"2021-09-10",name:"Friday, September 10th 2021"},{date:"2021-09-03",name:"Friday, September 3rd 2021"},{date:"2021-08-27",name:"Friday, August 27th 2021"},{date:"2021-08-20",name:"Friday, August 20th 2021"},{date:"2021-08-13",name:"Friday, August 13th 2021"},{date:"2021-08-06",name:"Friday, August 6th 2021"},{date:"2021-07-30",name:"Friday, July 30th 2021"},{date:"2021-07-23",name:"Friday, July 23rd 2021"},{date:"2021-07-16",name:"Friday, July 16th 2021"},{date:"2021-07-09",name:"Friday, July 9th 2021"},{date:"2021-07-02",name:"Friday, July 2nd 2021"},{date:"2021-06-25",name:"Friday, June 25th 2021"},{date:"2021-06-18",name:"Friday, June 18th 2021"},{date:"2021-06-11",name:"Friday, June 11th 2021"},{date:"2021-06-04",name:"Friday, June 4th 2021"},{date:"2021-05-28",name:"Friday, May 28th 2021"},{date:"2021-05-21",name:"Friday, May 21st 2021"},{date:"2021-05-14",name:"Friday, May 14th 2021"},{date:"2021-05-07",name:"Friday, May 7th 2021"}];return Object(j.jsx)(x.a,{basename:"".concat("/new-music-archive"),children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(p.d,{children:[Object(j.jsx)(p.b,{path:"/:date",children:Object(j.jsx)(v,{})}),Object(j.jsx)(p.a,{to:"/".concat(e[0].date)})]})})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,d=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),d(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),f()}},[[47,1,2]]]);
//# sourceMappingURL=main.e479f45d.chunk.js.map