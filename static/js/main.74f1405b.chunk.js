(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{29:function(e,a,t){},30:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),d=t(10),i=t.n(d),c=(t(29),t(30),t(12)),m=t.n(c),s=t(21),l=t(6),u=t(13),h=t.n(u),b=t(23),o=t(24),y=t(1);function F(e){var a=e.artwork,t=e.width,r=void 0===t?100:t,n=e.height,d=void 0===n?100:n,i=e.alt,c=void 0===i?"":i,m=Object(o.a)(e,["artwork","width","height","alt"]);return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("img",Object(b.a)({className:"album-art",src:a.url.replaceAll("{w}",r).replaceAll("{h}",d),alt:c},m))})}h.a.setAppElement("#root");var j=function(e){return function(a){return e.reduce((function(e,a){return e&&e[a]?e[a]:null}),a)}};function O(e){var a=e.album,t=Object(r.useState)(!1),n=Object(l.a)(t,2),d=n[0],i=n[1],c=a.attributes,m=j(["editorialNotes","standard"])(c),s=j(["editorialNotes","short"])(c),u=function(){return i(!1)},b=c.genreNames.filter((function(e){return"Music"!==e}))[0],o=new Date(c.releaseDate).getFullYear();return Object(y.jsxs)("div",{className:"album",children:[Object(y.jsxs)(h.a,{isOpen:d,onRequestClose:u,className:"modal",style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"1px solid rgb(59, 59, 59)",background:"rgba(0, 0, 0, 0.9)",height:"500px",overflow:"scroll"}},contentLabel:"".concat(c.artistName," - ").concat(c.name," album details"),children:[Object(y.jsx)("div",{className:"close-wrapper",children:Object(y.jsx)("button",{className:"close-modal-btn",onClick:u,type:"button","aria-label":"close",children:"\xd7"})}),Object(y.jsxs)("div",{className:"modal-wrapper",children:[Object(y.jsx)("a",{href:c.url,children:Object(y.jsx)(F,{title:s,className:"modal-album-art",width:400,height:400,artwork:c.artwork,alt:"".concat(c.artistName," - ").concat(c.name," album artwork")})}),Object(y.jsxs)("div",{className:"modal-album-details",children:[Object(y.jsx)("div",{children:Object(y.jsxs)("h1",{className:"modal-album-name",children:[a.attributes.name,Object(y.jsx)("div",{className:"explicit",children:"explicit"===c.contentRating&&"\ud83c\udd74"})]})}),Object(y.jsx)("div",{className:"modal-artist-name",children:Object(y.jsx)("h1",{children:a.attributes.artistName})}),Object(y.jsxs)("div",{className:"modal-album-genre",children:[b," - ",o]}),Object(y.jsx)("div",{className:"modal-notes-wrap",children:Object(y.jsx)("p",{className:"modal-editors-notes",dangerouslySetInnerHTML:function(e){return{__html:e}}(m)})})]})]})]}),Object(y.jsx)(F,{title:s,width:200,height:200,artwork:c.artwork,alt:"".concat(c.artistName," - ").concat(c.name," album artwork"),onClick:function(){return i(!0)}}),Object(y.jsxs)("div",{className:"artist-name",children:[Object(y.jsx)("p",{children:a.attributes.artistName}),Object(y.jsx)("span",{className:"explicit",children:"explicit"===c.contentRating&&"\ud83c\udd74"})]}),Object(y.jsx)("div",{children:Object(y.jsx)("p",{className:"album-name",children:a.attributes.name})})]})}var p=t(2);function v(){for(var e=[{date:"2022-02-18",name:"Friday, February 18th 2022"},{date:"2022-02-11",name:"Friday, February 11th 2022"},{date:"2022-02-04",name:"Friday, February 4th 2022"},{date:"2022-01-28",name:"Friday, January 28th 2022"},{date:"2022-01-21",name:"Friday, January 21st 2022"},{date:"2022-01-14",name:"Friday, January 14th 2022"},{date:"2022-01-07",name:"Friday, January 7th 2022"},{date:"2021-12-31",name:"Friday, December 31st 2021"},{date:"2021-12-24",name:"Friday, December 24th 2021"},{date:"2021-12-17",name:"Friday, December 17th 2021"},{date:"2021-12-10",name:"Friday, December 10th 2021"},{date:"2021-12-03",name:"Friday, December 3rd 2021"},{date:"2021-11-26",name:"Friday, November 26th 2021"},{date:"2021-11-19",name:"Friday, November 19th 2021"},{date:"2021-11-12",name:"Friday, November 12th 2021"},{date:"2021-11-05",name:"Friday, November 5th 2021"},{date:"2021-10-29",name:"Friday, October 29th 2021"},{date:"2021-10-22",name:"Friday, October 22nd 2021"},{date:"2021-10-15",name:"Friday, October 15th 2021"},{date:"2021-10-08",name:"Friday, October 8th 2021"},{date:"2021-10-01",name:"Friday, October 1st 2021"},{date:"2021-09-24",name:"Friday, September 24th 2021"},{date:"2021-09-17",name:"Friday, September 17th 2021"},{date:"2021-09-10",name:"Friday, September 10th 2021"},{date:"2021-09-03",name:"Friday, September 3rd 2021"},{date:"2021-08-27",name:"Friday, August 27th 2021"},{date:"2021-08-20",name:"Friday, August 20th 2021"},{date:"2021-08-13",name:"Friday, August 13th 2021"},{date:"2021-08-06",name:"Friday, August 6th 2021"},{date:"2021-07-30",name:"Friday, July 30th 2021"},{date:"2021-07-23",name:"Friday, July 23rd 2021"},{date:"2021-07-16",name:"Friday, July 16th 2021"},{date:"2021-07-09",name:"Friday, July 9th 2021"},{date:"2021-07-02",name:"Friday, July 2nd 2021"},{date:"2021-06-25",name:"Friday, June 25th 2021"},{date:"2021-06-18",name:"Friday, June 18th 2021"},{date:"2021-06-11",name:"Friday, June 11th 2021"},{date:"2021-06-04",name:"Friday, June 4th 2021"},{date:"2021-05-28",name:"Friday, May 28th 2021"},{date:"2021-05-21",name:"Friday, May 21st 2021"},{date:"2021-05-14",name:"Friday, May 14th 2021"},{date:"2021-05-07",name:"Friday, May 7th 2021"}],a=Object(p.h)().date,t=Object(p.g)(),n=Object(r.useState)([]),d=Object(l.a)(n,2),i=d[0],c=d[1],u=Object(r.useState)({}),h=Object(l.a)(u,2),b=h[0],o=h[1],F=0,j=0;j<e.length;j++)if(e[j].date===a){F=j;break}var v=Object(r.useState)(e[F]),x=Object(l.a)(v,2),g=x[0],f=x[1];return Object(r.useEffect)((function(){!function(){var e=Object(s.a)(m.a.mark((function e(a){var t,r,n,d;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.date,!b[t]){e.next=4;break}return c(b[t]),e.abrupt("return");case 4:return e.next=6,fetch("/new-music-archive/archive/".concat(t,".json"));case 6:return r=e.sent,e.next=9,r.json();case 9:n=e.sent,d=n.data,b[t]=d,o(b),c(d);case 14:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()(g)}),[b,g]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("select",{className:"date-selection",value:g.date,name:"dates",onChange:function(e){f({date:e.target.value}),t.push("/".concat(e.target.value))},children:e.map((function(e){var a=e.name,t=e.date;return Object(y.jsx)("option",{value:t,children:a},t)}))}),Object(y.jsx)("div",{className:"album-list",children:i.map((function(e){return Object(y.jsx)(O,{album:e},e.id)}))})]})}var x=t(11);var g=function(){var e=[{date:"2022-02-18",name:"Friday, February 18th 2022"},{date:"2022-02-11",name:"Friday, February 11th 2022"},{date:"2022-02-04",name:"Friday, February 4th 2022"},{date:"2022-01-28",name:"Friday, January 28th 2022"},{date:"2022-01-21",name:"Friday, January 21st 2022"},{date:"2022-01-14",name:"Friday, January 14th 2022"},{date:"2022-01-07",name:"Friday, January 7th 2022"},{date:"2021-12-31",name:"Friday, December 31st 2021"},{date:"2021-12-24",name:"Friday, December 24th 2021"},{date:"2021-12-17",name:"Friday, December 17th 2021"},{date:"2021-12-10",name:"Friday, December 10th 2021"},{date:"2021-12-03",name:"Friday, December 3rd 2021"},{date:"2021-11-26",name:"Friday, November 26th 2021"},{date:"2021-11-19",name:"Friday, November 19th 2021"},{date:"2021-11-12",name:"Friday, November 12th 2021"},{date:"2021-11-05",name:"Friday, November 5th 2021"},{date:"2021-10-29",name:"Friday, October 29th 2021"},{date:"2021-10-22",name:"Friday, October 22nd 2021"},{date:"2021-10-15",name:"Friday, October 15th 2021"},{date:"2021-10-08",name:"Friday, October 8th 2021"},{date:"2021-10-01",name:"Friday, October 1st 2021"},{date:"2021-09-24",name:"Friday, September 24th 2021"},{date:"2021-09-17",name:"Friday, September 17th 2021"},{date:"2021-09-10",name:"Friday, September 10th 2021"},{date:"2021-09-03",name:"Friday, September 3rd 2021"},{date:"2021-08-27",name:"Friday, August 27th 2021"},{date:"2021-08-20",name:"Friday, August 20th 2021"},{date:"2021-08-13",name:"Friday, August 13th 2021"},{date:"2021-08-06",name:"Friday, August 6th 2021"},{date:"2021-07-30",name:"Friday, July 30th 2021"},{date:"2021-07-23",name:"Friday, July 23rd 2021"},{date:"2021-07-16",name:"Friday, July 16th 2021"},{date:"2021-07-09",name:"Friday, July 9th 2021"},{date:"2021-07-02",name:"Friday, July 2nd 2021"},{date:"2021-06-25",name:"Friday, June 25th 2021"},{date:"2021-06-18",name:"Friday, June 18th 2021"},{date:"2021-06-11",name:"Friday, June 11th 2021"},{date:"2021-06-04",name:"Friday, June 4th 2021"},{date:"2021-05-28",name:"Friday, May 28th 2021"},{date:"2021-05-21",name:"Friday, May 21st 2021"},{date:"2021-05-14",name:"Friday, May 14th 2021"},{date:"2021-05-07",name:"Friday, May 7th 2021"}];return Object(y.jsx)(x.a,{basename:"".concat("/new-music-archive"),children:Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)(p.d,{children:[Object(y.jsx)(p.b,{path:"/:date",children:Object(y.jsx)(v,{})}),Object(y.jsx)(p.a,{to:"/".concat(e[0].date)})]})})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,d=a.getLCP,i=a.getTTFB;t(e),r(e),n(e),d(e),i(e)}))};i.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(g,{})}),document.getElementById("root")),f()}},[[47,1,2]]]);
//# sourceMappingURL=main.74f1405b.chunk.js.map