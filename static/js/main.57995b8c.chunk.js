(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{34:function(e,t,a){},35:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),i=a(12),d=a.n(i),c=(a(34),a(35),a(13)),s=a(8),m=a(11),l=a.n(m),o=a(18),u=a.n(o),h=a(29),b=a(26),y=a(0),j=["artwork","width","height","alt"];function F(e){var t=e.artwork,a=e.width,r=void 0===a?100:a,n=e.height,i=void 0===n?100:n,d=e.alt,c=void 0===d?"":d,s=Object(b.a)(e,j);return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("img",Object(h.a)({className:"album-art",src:t.url.replaceAll("{w}",r).replaceAll("{h}",i),alt:c},s))})}var p=a(2),O=a(9),x=a.p+"static/media/apple-badge.0349686e.svg",v=a.p+"static/media/Spotify_Icon_RGB_Green.cd66b8f6.png";function g(e){return Object(y.jsxs)("div",{className:"listen-links",children:[Object(y.jsx)("p",{children:Object(y.jsx)("a",{href:e.attributes.url,children:Object(y.jsx)("img",{className:"apple-music-link",src:x,alt:"Listen on Apple Music"})})}),Object(y.jsx)("p",{children:e.attributes.spotify&&Object(y.jsx)("a",{href:e.attributes.spotify,children:Object(y.jsx)("img",{className:"spotify-link",src:v,alt:"Listen on Spotify"})})})]})}function f(e){var t,a,r,n,i,d,c=null===e||void 0===e||null===(t=e.relationships)||void 0===t||null===(a=t.artists)||void 0===a||null===(r=a.data[0])||void 0===r||null===(n=r.attributes)||void 0===n?void 0:n.genreNames;return c||(null!==(i=null===(d=e.attributes.genreNames)||void 0===d?void 0:d.filter((function(e){return"Music"!==e}))[0])&&void 0!==i?i:"")}u.a.setAppElement("#root");var w=function(e){return function(t){return e.reduce((function(e,t){return e&&e[t]?e[t]:null}),t)}};function N(e){var t=e.album,a=e.idx,n=Object(p.h)().date,i=Object(r.useState)(!1),d=Object(s.a)(i,2),c=d[0],m=d[1],l=t.attributes,o=w(["editorialNotes","standard"])(l),h=w(["editorialNotes","short"])(l),b=function(){return m(!1)},j=f(t),x=new Date(l.releaseDate).getFullYear(),v=new URL(t.attributes.url);return Object(y.jsxs)("div",{className:"album",children:[Object(y.jsxs)(u.a,{isOpen:c,onRequestClose:b,className:"modal",style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"1px solid rgb(59, 59, 59)",background:"rgba(0, 0, 0, 0.9)",height:"500px",overflow:"scroll"}},contentLabel:"".concat(l.artistName," - ").concat(l.name," album details"),children:[Object(y.jsx)("div",{className:"close-wrapper",children:Object(y.jsx)("button",{className:"close-modal-btn",onClick:b,type:"button","aria-label":"close",children:"\xd7"})}),Object(y.jsxs)("div",{className:"modal-wrapper",children:[Object(y.jsx)(O.b,{to:"/".concat(n,"/").concat(a).concat(v.pathname),children:Object(y.jsx)(F,{title:h,className:"modal-album-art",width:400,height:400,artwork:l.artwork,alt:"".concat(l.artistName," - ").concat(l.name," album artwork")})}),Object(y.jsxs)("div",{className:"modal-album-details",children:[Object(y.jsx)("div",{children:Object(y.jsxs)("h1",{className:"modal-album-name",children:[t.attributes.name,Object(y.jsx)("div",{className:"explicit",children:"explicit"===l.contentRating&&"\ud83c\udd74"})]})}),Object(y.jsx)("div",{className:"modal-artist-name",children:Object(y.jsx)("h1",{children:t.attributes.artistName})}),Object(y.jsxs)("div",{className:"modal-album-genre",children:[j," - ",x]}),Object(y.jsx)(g,{attributes:l}),Object(y.jsx)("div",{className:"modal-notes-wrap",children:Object(y.jsx)("p",{className:"modal-editors-notes",dangerouslySetInnerHTML:function(e){return{__html:e}}(o)})})]})]})]}),Object(y.jsx)(F,{title:h,width:200,height:200,artwork:l.artwork,alt:"".concat(l.artistName," - ").concat(l.name," album artwork"),onClick:function(){return m(!0)}}),Object(y.jsxs)("div",{className:"artist-name",children:[Object(y.jsx)("p",{children:t.attributes.artistName}),Object(y.jsx)("span",{className:"explicit",children:"explicit"===l.contentRating&&"\ud83c\udd74"})]}),Object(y.jsx)("div",{children:Object(y.jsx)("p",{className:"album-name",children:t.attributes.name})})]})}var J=a(14);function A(){for(var e=[{date:"2022-09-30",name:"Friday, September 30th 2022"},{date:"2022-09-23",name:"Friday, September 23rd 2022"},{date:"2022-09-16",name:"Friday, September 16th 2022"},{date:"2022-09-09",name:"Friday, September 9th 2022"},{date:"2022-09-02",name:"Friday, September 2nd 2022"},{date:"2022-08-26",name:"Friday, August 26th 2022"},{date:"2022-08-19",name:"Friday, August 19th 2022"},{date:"2022-08-12",name:"Friday, August 12th 2022"},{date:"2022-08-05",name:"Friday, August 5th 2022"},{date:"2022-07-29",name:"Friday, July 29th 2022"},{date:"2022-07-22",name:"Friday, July 22nd 2022"},{date:"2022-07-15",name:"Friday, July 15th 2022"},{date:"2022-07-08",name:"Friday, July 8th 2022"},{date:"2022-07-01",name:"Friday, July 1st 2022"},{date:"2022-06-24",name:"Friday, June 24th 2022"},{date:"2022-06-17",name:"Friday, June 17th 2022"},{date:"2022-06-10",name:"Friday, June 10th 2022"},{date:"2022-06-03",name:"Friday, June 3rd 2022"},{date:"2022-05-27",name:"Friday, May 27th 2022"},{date:"2022-05-20",name:"Friday, May 20th 2022"},{date:"2022-05-13",name:"Friday, May 13th 2022"},{date:"2022-05-06",name:"Friday, May 6th 2022"},{date:"2022-04-29",name:"Friday, April 29th 2022"},{date:"2022-04-22",name:"Friday, April 22nd 2022"},{date:"2022-04-15",name:"Friday, April 15th 2022"},{date:"2022-04-08",name:"Friday, April 8th 2022"},{date:"2022-04-01",name:"Friday, April 1st 2022"},{date:"2022-03-25",name:"Friday, March 25th 2022"},{date:"2022-03-18",name:"Friday, March 19th 2022"},{date:"2022-03-11",name:"Friday, March 11th 2022"},{date:"2022-03-04",name:"Friday, March 4th 2022"},{date:"2022-02-25",name:"Friday, February 25th 2022"},{date:"2022-02-18",name:"Friday, February 18th 2022"},{date:"2022-02-11",name:"Friday, February 11th 2022"},{date:"2022-02-04",name:"Friday, February 4th 2022"},{date:"2022-01-28",name:"Friday, January 28th 2022"},{date:"2022-01-21",name:"Friday, January 21st 2022"},{date:"2022-01-14",name:"Friday, January 14th 2022"},{date:"2022-01-07",name:"Friday, January 7th 2022"},{date:"2021-12-31",name:"Friday, December 31st 2021"},{date:"2021-12-24",name:"Friday, December 24th 2021"},{date:"2021-12-17",name:"Friday, December 17th 2021"},{date:"2021-12-10",name:"Friday, December 10th 2021"},{date:"2021-12-03",name:"Friday, December 3rd 2021"},{date:"2021-11-26",name:"Friday, November 26th 2021"},{date:"2021-11-19",name:"Friday, November 19th 2021"},{date:"2021-11-12",name:"Friday, November 12th 2021"},{date:"2021-11-05",name:"Friday, November 5th 2021"},{date:"2021-10-29",name:"Friday, October 29th 2021"},{date:"2021-10-22",name:"Friday, October 22nd 2021"},{date:"2021-10-15",name:"Friday, October 15th 2021"},{date:"2021-10-08",name:"Friday, October 8th 2021"},{date:"2021-10-01",name:"Friday, October 1st 2021"},{date:"2021-09-24",name:"Friday, September 24th 2021"},{date:"2021-09-17",name:"Friday, September 17th 2021"},{date:"2021-09-10",name:"Friday, September 10th 2021"},{date:"2021-09-03",name:"Friday, September 3rd 2021"},{date:"2021-08-27",name:"Friday, August 27th 2021"},{date:"2021-08-20",name:"Friday, August 20th 2021"},{date:"2021-08-13",name:"Friday, August 13th 2021"},{date:"2021-08-06",name:"Friday, August 6th 2021"},{date:"2021-07-30",name:"Friday, July 30th 2021"},{date:"2021-07-23",name:"Friday, July 23rd 2021"},{date:"2021-07-16",name:"Friday, July 16th 2021"},{date:"2021-07-09",name:"Friday, July 9th 2021"},{date:"2021-07-02",name:"Friday, July 2nd 2021"},{date:"2021-06-25",name:"Friday, June 25th 2021"},{date:"2021-06-18",name:"Friday, June 18th 2021"},{date:"2021-06-11",name:"Friday, June 11th 2021"},{date:"2021-06-04",name:"Friday, June 4th 2021"},{date:"2021-05-28",name:"Friday, May 28th 2021"},{date:"2021-05-21",name:"Friday, May 21st 2021"},{date:"2021-05-14",name:"Friday, May 14th 2021"},{date:"2021-05-07",name:"Friday, May 7th 2021"}],t=Object(p.h)().date,a=Object(p.g)(),n=Object(r.useState)([]),i=Object(s.a)(n,2),d=i[0],m=i[1],o=Object(r.useState)({}),u=Object(s.a)(o,2),h=u[0],b=u[1],j=0,F=0;F<e.length;F++)if(e[F].date===t){j=F;break}var O=Object(r.useState)(e[j]),x=Object(s.a)(O,2),v=x[0],g=x[1];return Object(r.useEffect)((function(){!function(){var e=Object(c.a)(l.a.mark((function e(t){var a,r,n,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.date,!h[a]){e.next=4;break}return m(h[a]),e.abrupt("return");case 4:return e.next=6,fetch("/new-music-archive/archive/".concat(a,".json"));case 6:return r=e.sent,e.next=9,r.json();case 9:n=e.sent,i=n.data,h[a]=i,b(h),m(i);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(v)}),[h,v]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(J.MetaTags,{children:[Object(y.jsx)("title",{children:"New Music Archive - ".concat(t)}),Object(y.jsx)("meta",{name:"description",content:"Apple's list of new music. Archived every week."}),Object(y.jsx)("meta",{property:"og:title",content:"New Music Archive - ".concat(t)}),Object(y.jsx)("meta",{property:"og:url",content:window.location.href}),Object(y.jsx)("meta",{property:"og:type",content:"website"}),Object(y.jsx)("meta",{property:"og:description",content:"Apple's list of new music. Archived every week."}),Object(y.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(y.jsx)("meta",{property:"twitter:domain",content:window.location.origin}),Object(y.jsx)("meta",{property:"twitter:url",content:window.location.href}),Object(y.jsx)("meta",{name:"twitter:title",content:"New Music Archive - ".concat(t)}),Object(y.jsx)("meta",{name:"twitter:description",content:"Apple's list of new music. Archived every week."})]}),Object(y.jsx)("select",{className:"date-selection",value:v.date,name:"dates",onChange:function(e){g({date:e.target.value}),a.push("/".concat(e.target.value))},children:e.map((function(e){var t=e.name,a=e.date;return Object(y.jsx)("option",{value:a,children:t},a)}))}),Object(y.jsx)("div",{className:"album-list",children:d.map((function(e,t){return Object(y.jsx)(N,{idx:t,album:e},e.id)}))})]})}var M=function(e){return function(t){return e.reduce((function(e,t){return e&&e[t]?e[t]:null}),t)}};function k(e){var t=e.album,a=t.attributes,r=Object(p.h)().date,n=function(e){var t,a,r;return M(["editorialNotes","standard"])(null===e||void 0===e||null===(t=e.relationships)||void 0===t||null===(a=t.artists)||void 0===a||null===(r=a.data[0])||void 0===r?void 0:r.attributes)||M(["editorialNotes","standard"])(e.attributes)}(t),i=function(e){var t,a,r;return M(["editorialNotes","short"])(null===e||void 0===e||null===(t=e.relationships)||void 0===t||null===(a=t.artists)||void 0===a||null===(r=a.data[0])||void 0===r?void 0:r.attributes)||M(["editorialNotes","short"])(e.attributes)}(t),d=f(t),c=new Date(a.releaseDate).getFullYear();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(O.b,{className:"back-link",to:"/".concat(r),children:"\uff1c Back"}),Object(y.jsxs)(J.MetaTags,{children:[Object(y.jsx)("title",{children:"".concat(a.artistName," - ").concat(a.name)}),Object(y.jsx)("meta",{name:"description",content:i}),Object(y.jsx)("meta",{property:"og:title",content:a.name}),Object(y.jsx)("meta",{property:"og:url",content:window.location.href}),Object(y.jsx)("meta",{property:"og:type",content:"website"}),Object(y.jsx)("meta",{property:"og:description",content:i}),Object(y.jsx)("meta",{property:"og:image",content:a.artwork.url.replaceAll("{w}",650).replaceAll("{h}",650)}),Object(y.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(y.jsx)("meta",{property:"twitter:domain",content:window.location.origin}),Object(y.jsx)("meta",{property:"twitter:url",content:window.location.href}),Object(y.jsx)("meta",{name:"twitter:title",content:a.name}),Object(y.jsx)("meta",{name:"twitter:description",content:i}),Object(y.jsx)("meta",{name:"twitter:image",content:a.artwork.url.replaceAll("{w}",650).replaceAll("{h}",650)})]}),Object(y.jsx)("div",{className:"album",children:Object(y.jsxs)("div",{className:"wrapper",children:[Object(y.jsx)("a",{href:a.url,children:Object(y.jsx)(F,{title:i,className:"album-art",width:650,height:650,artwork:a.artwork,alt:"".concat(a.artistName," - ").concat(a.name," album artwork")})}),Object(y.jsxs)("div",{className:"detail-album-details",children:[Object(y.jsx)("div",{children:Object(y.jsxs)("h1",{className:"detail-album-name",children:[t.attributes.name,Object(y.jsx)("div",{className:"explicit",children:"explicit"===a.contentRating&&"\ud83c\udd74"})]})}),Object(y.jsx)("div",{className:"detail-artist-name",children:Object(y.jsx)("h1",{children:t.attributes.artistName})}),Object(y.jsxs)("div",{className:"album-genre",children:[d," - ",c]}),Object(y.jsx)(g,{attributes:a}),Object(y.jsx)("div",{className:"notes-wrap",children:Object(y.jsx)("p",{className:"detail-editors-notes",dangerouslySetInnerHTML:function(e){return{__html:e}}(n)})})]})]})})]})}function S(){var e=Object(p.h)(),t=e.index,a=function(e){var t=Object(r.useState)([]),a=Object(s.a)(t,2),n=a[0],i=a[1],d=Object(r.useState)({}),m=Object(s.a)(d,2),o=m[0],u=m[1];return Object(r.useEffect)((function(){!function(){var e=Object(c.a)(l.a.mark((function e(t){var a,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o[t]){e.next=3;break}return i(o[t]),e.abrupt("return");case 3:return e.next=5,fetch("/new-music-archive/archive/".concat(t,".json"));case 5:return a=e.sent,e.next=8,a.json();case 8:r=e.sent,n=r.data,o[t]=n,u(o),i(n);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(e)}),[o,e]),n}(e.date),n=a[t];return null==a||null==n?null:Object(y.jsx)(k,{album:n},n.id)}var D=function(){var e=[{date:"2022-09-30",name:"Friday, September 30th 2022"},{date:"2022-09-23",name:"Friday, September 23rd 2022"},{date:"2022-09-16",name:"Friday, September 16th 2022"},{date:"2022-09-09",name:"Friday, September 9th 2022"},{date:"2022-09-02",name:"Friday, September 2nd 2022"},{date:"2022-08-26",name:"Friday, August 26th 2022"},{date:"2022-08-19",name:"Friday, August 19th 2022"},{date:"2022-08-12",name:"Friday, August 12th 2022"},{date:"2022-08-05",name:"Friday, August 5th 2022"},{date:"2022-07-29",name:"Friday, July 29th 2022"},{date:"2022-07-22",name:"Friday, July 22nd 2022"},{date:"2022-07-15",name:"Friday, July 15th 2022"},{date:"2022-07-08",name:"Friday, July 8th 2022"},{date:"2022-07-01",name:"Friday, July 1st 2022"},{date:"2022-06-24",name:"Friday, June 24th 2022"},{date:"2022-06-17",name:"Friday, June 17th 2022"},{date:"2022-06-10",name:"Friday, June 10th 2022"},{date:"2022-06-03",name:"Friday, June 3rd 2022"},{date:"2022-05-27",name:"Friday, May 27th 2022"},{date:"2022-05-20",name:"Friday, May 20th 2022"},{date:"2022-05-13",name:"Friday, May 13th 2022"},{date:"2022-05-06",name:"Friday, May 6th 2022"},{date:"2022-04-29",name:"Friday, April 29th 2022"},{date:"2022-04-22",name:"Friday, April 22nd 2022"},{date:"2022-04-15",name:"Friday, April 15th 2022"},{date:"2022-04-08",name:"Friday, April 8th 2022"},{date:"2022-04-01",name:"Friday, April 1st 2022"},{date:"2022-03-25",name:"Friday, March 25th 2022"},{date:"2022-03-18",name:"Friday, March 19th 2022"},{date:"2022-03-11",name:"Friday, March 11th 2022"},{date:"2022-03-04",name:"Friday, March 4th 2022"},{date:"2022-02-25",name:"Friday, February 25th 2022"},{date:"2022-02-18",name:"Friday, February 18th 2022"},{date:"2022-02-11",name:"Friday, February 11th 2022"},{date:"2022-02-04",name:"Friday, February 4th 2022"},{date:"2022-01-28",name:"Friday, January 28th 2022"},{date:"2022-01-21",name:"Friday, January 21st 2022"},{date:"2022-01-14",name:"Friday, January 14th 2022"},{date:"2022-01-07",name:"Friday, January 7th 2022"},{date:"2021-12-31",name:"Friday, December 31st 2021"},{date:"2021-12-24",name:"Friday, December 24th 2021"},{date:"2021-12-17",name:"Friday, December 17th 2021"},{date:"2021-12-10",name:"Friday, December 10th 2021"},{date:"2021-12-03",name:"Friday, December 3rd 2021"},{date:"2021-11-26",name:"Friday, November 26th 2021"},{date:"2021-11-19",name:"Friday, November 19th 2021"},{date:"2021-11-12",name:"Friday, November 12th 2021"},{date:"2021-11-05",name:"Friday, November 5th 2021"},{date:"2021-10-29",name:"Friday, October 29th 2021"},{date:"2021-10-22",name:"Friday, October 22nd 2021"},{date:"2021-10-15",name:"Friday, October 15th 2021"},{date:"2021-10-08",name:"Friday, October 8th 2021"},{date:"2021-10-01",name:"Friday, October 1st 2021"},{date:"2021-09-24",name:"Friday, September 24th 2021"},{date:"2021-09-17",name:"Friday, September 17th 2021"},{date:"2021-09-10",name:"Friday, September 10th 2021"},{date:"2021-09-03",name:"Friday, September 3rd 2021"},{date:"2021-08-27",name:"Friday, August 27th 2021"},{date:"2021-08-20",name:"Friday, August 20th 2021"},{date:"2021-08-13",name:"Friday, August 13th 2021"},{date:"2021-08-06",name:"Friday, August 6th 2021"},{date:"2021-07-30",name:"Friday, July 30th 2021"},{date:"2021-07-23",name:"Friday, July 23rd 2021"},{date:"2021-07-16",name:"Friday, July 16th 2021"},{date:"2021-07-09",name:"Friday, July 9th 2021"},{date:"2021-07-02",name:"Friday, July 2nd 2021"},{date:"2021-06-25",name:"Friday, June 25th 2021"},{date:"2021-06-18",name:"Friday, June 18th 2021"},{date:"2021-06-11",name:"Friday, June 11th 2021"},{date:"2021-06-04",name:"Friday, June 4th 2021"},{date:"2021-05-28",name:"Friday, May 28th 2021"},{date:"2021-05-21",name:"Friday, May 21st 2021"},{date:"2021-05-14",name:"Friday, May 14th 2021"},{date:"2021-05-07",name:"Friday, May 7th 2021"}];return Object(y.jsx)(O.a,{basename:"".concat("/new-music-archive"),children:Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)(p.d,{children:[Object(y.jsx)(p.b,{path:"/:date/:index/*",children:Object(y.jsx)(S,{})}),Object(y.jsx)(p.b,{path:"/:date",children:Object(y.jsx)(A,{})}),Object(y.jsx)(p.a,{to:"/".concat(e[0].date)})]})})})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,55)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,d=t.getTTFB;a(e),r(e),n(e),i(e),d(e)}))};d.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(D,{})}),document.getElementById("root")),_()}},[[54,1,2]]]);
//# sourceMappingURL=main.57995b8c.chunk.js.map