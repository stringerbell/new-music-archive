(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{34:function(e,a,t){},35:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),d=t(12),i=t.n(d),c=(t(34),t(35),t(13)),m=t(8),s=t(11),l=t.n(s),y=t(18),h=t.n(y),o=t(29),u=t(26),b=t(0),F=["artwork","width","height","alt"];function j(e){var a=e.artwork,t=e.width,r=void 0===t?100:t,n=e.height,d=void 0===n?100:n,i=e.alt,c=void 0===i?"":i,m=Object(u.a)(e,F);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("img",Object(o.a)({className:"album-art",src:a.url.replaceAll("{w}",r).replaceAll("{h}",d),alt:c},m))})}var p=t(2),O=t(9),x=t.p+"static/media/apple-badge.0349686e.svg",v=t.p+"static/media/Spotify_Icon_RGB_Green.cd66b8f6.png";function g(e){return Object(b.jsxs)("div",{className:"listen-links",children:[Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:e.attributes.url,children:Object(b.jsx)("img",{className:"apple-music-link",src:x,alt:"Listen on Apple Music"})})}),Object(b.jsx)("p",{children:e.attributes.spotify&&Object(b.jsx)("a",{href:e.attributes.spotify,children:Object(b.jsx)("img",{className:"spotify-link",src:v,alt:"Listen on Spotify"})})})]})}function f(e){var a,t,r,n,d,i,c=null===e||void 0===e||null===(a=e.relationships)||void 0===a||null===(t=a.artists)||void 0===t||null===(r=t.data[0])||void 0===r||null===(n=r.attributes)||void 0===n?void 0:n.genreNames;return c||(null!==(d=null===(i=e.attributes.genreNames)||void 0===i?void 0:i.filter((function(e){return"Music"!==e}))[0])&&void 0!==d?d:"")}h.a.setAppElement("#root");var w=function(e){return function(a){return e.reduce((function(e,a){return e&&e[a]?e[a]:null}),a)}};function N(e){var a=e.album,t=e.idx,n=Object(p.h)().date,d=Object(r.useState)(!1),i=Object(m.a)(d,2),c=i[0],s=i[1],l=a.attributes,y=w(["editorialNotes","standard"])(l),o=w(["editorialNotes","short"])(l),u=function(){return s(!1)},F=f(a),x=new Date(l.releaseDate).getFullYear(),v=new URL(a.attributes.url);return Object(b.jsxs)("div",{className:"album",children:[Object(b.jsxs)(h.a,{isOpen:c,onRequestClose:u,className:"modal",style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"1px solid rgb(59, 59, 59)",background:"rgba(0, 0, 0, 0.9)",height:"500px",overflow:"scroll"}},contentLabel:"".concat(l.artistName," - ").concat(l.name," album details"),children:[Object(b.jsx)("div",{className:"close-wrapper",children:Object(b.jsx)("button",{className:"close-modal-btn",onClick:u,type:"button","aria-label":"close",children:"\xd7"})}),Object(b.jsxs)("div",{className:"modal-wrapper",children:[Object(b.jsx)(O.b,{to:"/".concat(n,"/").concat(t).concat(v.pathname),children:Object(b.jsx)(j,{title:o,className:"modal-album-art",width:400,height:400,artwork:l.artwork,alt:"".concat(l.artistName," - ").concat(l.name," album artwork")})}),Object(b.jsxs)("div",{className:"modal-album-details",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("h1",{className:"modal-album-name",children:[a.attributes.name,Object(b.jsx)("div",{className:"explicit",children:"explicit"===l.contentRating&&"\ud83c\udd74"})]})}),Object(b.jsx)("div",{className:"modal-artist-name",children:Object(b.jsx)("h1",{children:a.attributes.artistName})}),Object(b.jsxs)("div",{className:"modal-album-genre",children:[F," - ",x]}),Object(b.jsx)(g,{attributes:l}),Object(b.jsx)("div",{className:"modal-notes-wrap",children:Object(b.jsx)("p",{className:"modal-editors-notes",dangerouslySetInnerHTML:function(e){return{__html:e}}(y)})})]})]})]}),Object(b.jsx)(j,{title:o,width:200,height:200,artwork:l.artwork,alt:"".concat(l.artistName," - ").concat(l.name," album artwork"),onClick:function(){return s(!0)}}),Object(b.jsxs)("div",{className:"artist-name",children:[Object(b.jsx)("p",{children:a.attributes.artistName}),Object(b.jsx)("span",{className:"explicit",children:"explicit"===l.contentRating&&"\ud83c\udd74"})]}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"album-name",children:a.attributes.name})})]})}var J=t(14);function A(){for(var e=[{date:"2023-05-19",name:"Friday, May 19th 2023"},{date:"2023-05-12",name:"Friday, May 12th 2023"},{date:"2023-05-05",name:"Friday, May 5th 2023"},{date:"2023-04-28",name:"Friday, April 28th 2023"},{date:"2023-04-21",name:"Friday, April 21st 2023"},{date:"2023-04-14",name:"Friday, April 14th 2023"},{date:"2023-04-07",name:"Friday, April 7th 2023"},{date:"2023-03-31",name:"Friday, March 31st 2023"},{date:"2023-03-24",name:"Friday, March 24th 2023"},{date:"2023-03-17",name:"Friday, March 17th 2023"},{date:"2023-03-10",name:"Friday, March 10th 2023"},{date:"2023-03-03",name:"Friday, March 3rd 2023"},{date:"2023-02-24",name:"Friday, February 24th 2023"},{date:"2023-02-17",name:"Friday, February 17th 2023"},{date:"2023-02-10",name:"Friday, February 10th 2023"},{date:"2023-02-03",name:"Friday, February 3rd 2023"},{date:"2023-01-27",name:"Friday, January 27th 2023"},{date:"2023-01-20",name:"Friday, January 20th 2023"},{date:"2023-01-13",name:"Friday, January 13th 2023"},{date:"2023-01-06",name:"Friday, January 6th 2023"},{date:"2022-12-30",name:"Friday, December 30th 2022"},{date:"2022-12-23",name:"Friday, December 23rd 2022"},{date:"2022-12-09",name:"Friday, December 9th 2022"},{date:"2022-12-02",name:"Friday, December 2nd 2022"},{date:"2022-11-25",name:"Friday, November 25th 2022"},{date:"2022-11-18",name:"Friday, November 18th 2022"},{date:"2022-11-11",name:"Friday, November 11th 2022"},{date:"2022-11-04",name:"Friday, November 4th 2022"},{date:"2022-10-28",name:"Friday, October 28th 2022"},{date:"2022-10-21",name:"Friday, October 21st 2022"},{date:"2022-10-14",name:"Friday, October 14th 2022"},{date:"2022-10-07",name:"Friday, October 7th 2022"},{date:"2022-09-30",name:"Friday, September 30th 2022"},{date:"2022-09-23",name:"Friday, September 23rd 2022"},{date:"2022-09-16",name:"Friday, September 16th 2022"},{date:"2022-09-09",name:"Friday, September 9th 2022"},{date:"2022-09-02",name:"Friday, September 2nd 2022"},{date:"2022-08-26",name:"Friday, August 26th 2022"},{date:"2022-08-19",name:"Friday, August 19th 2022"},{date:"2022-08-12",name:"Friday, August 12th 2022"},{date:"2022-08-05",name:"Friday, August 5th 2022"},{date:"2022-07-29",name:"Friday, July 29th 2022"},{date:"2022-07-22",name:"Friday, July 22nd 2022"},{date:"2022-07-15",name:"Friday, July 15th 2022"},{date:"2022-07-08",name:"Friday, July 8th 2022"},{date:"2022-07-01",name:"Friday, July 1st 2022"},{date:"2022-06-24",name:"Friday, June 24th 2022"},{date:"2022-06-17",name:"Friday, June 17th 2022"},{date:"2022-06-10",name:"Friday, June 10th 2022"},{date:"2022-06-03",name:"Friday, June 3rd 2022"},{date:"2022-05-27",name:"Friday, May 27th 2022"},{date:"2022-05-20",name:"Friday, May 20th 2022"},{date:"2022-05-13",name:"Friday, May 13th 2022"},{date:"2022-05-06",name:"Friday, May 6th 2022"},{date:"2022-04-29",name:"Friday, April 29th 2022"},{date:"2022-04-22",name:"Friday, April 22nd 2022"},{date:"2022-04-15",name:"Friday, April 15th 2022"},{date:"2022-04-08",name:"Friday, April 8th 2022"},{date:"2022-04-01",name:"Friday, April 1st 2022"},{date:"2022-03-25",name:"Friday, March 25th 2022"},{date:"2022-03-18",name:"Friday, March 19th 2022"},{date:"2022-03-11",name:"Friday, March 11th 2022"},{date:"2022-03-04",name:"Friday, March 4th 2022"},{date:"2022-02-25",name:"Friday, February 25th 2022"},{date:"2022-02-18",name:"Friday, February 18th 2022"},{date:"2022-02-11",name:"Friday, February 11th 2022"},{date:"2022-02-04",name:"Friday, February 4th 2022"},{date:"2022-01-28",name:"Friday, January 28th 2022"},{date:"2022-01-21",name:"Friday, January 21st 2022"},{date:"2022-01-14",name:"Friday, January 14th 2022"},{date:"2022-01-07",name:"Friday, January 7th 2022"},{date:"2021-12-31",name:"Friday, December 31st 2021"},{date:"2021-12-24",name:"Friday, December 24th 2021"},{date:"2021-12-17",name:"Friday, December 17th 2021"},{date:"2021-12-10",name:"Friday, December 10th 2021"},{date:"2021-12-03",name:"Friday, December 3rd 2021"},{date:"2021-11-26",name:"Friday, November 26th 2021"},{date:"2021-11-19",name:"Friday, November 19th 2021"},{date:"2021-11-12",name:"Friday, November 12th 2021"},{date:"2021-11-05",name:"Friday, November 5th 2021"},{date:"2021-10-29",name:"Friday, October 29th 2021"},{date:"2021-10-22",name:"Friday, October 22nd 2021"},{date:"2021-10-15",name:"Friday, October 15th 2021"},{date:"2021-10-08",name:"Friday, October 8th 2021"},{date:"2021-10-01",name:"Friday, October 1st 2021"},{date:"2021-09-24",name:"Friday, September 24th 2021"},{date:"2021-09-17",name:"Friday, September 17th 2021"},{date:"2021-09-10",name:"Friday, September 10th 2021"},{date:"2021-09-03",name:"Friday, September 3rd 2021"},{date:"2021-08-27",name:"Friday, August 27th 2021"},{date:"2021-08-20",name:"Friday, August 20th 2021"},{date:"2021-08-13",name:"Friday, August 13th 2021"},{date:"2021-08-06",name:"Friday, August 6th 2021"},{date:"2021-07-30",name:"Friday, July 30th 2021"},{date:"2021-07-23",name:"Friday, July 23rd 2021"},{date:"2021-07-16",name:"Friday, July 16th 2021"},{date:"2021-07-09",name:"Friday, July 9th 2021"},{date:"2021-07-02",name:"Friday, July 2nd 2021"},{date:"2021-06-25",name:"Friday, June 25th 2021"},{date:"2021-06-18",name:"Friday, June 18th 2021"},{date:"2021-06-11",name:"Friday, June 11th 2021"},{date:"2021-06-04",name:"Friday, June 4th 2021"},{date:"2021-05-28",name:"Friday, May 28th 2021"},{date:"2021-05-21",name:"Friday, May 21st 2021"},{date:"2021-05-14",name:"Friday, May 14th 2021"},{date:"2021-05-07",name:"Friday, May 7th 2021"}],a=Object(p.h)().date,t=Object(p.g)(),n=Object(r.useState)([]),d=Object(m.a)(n,2),i=d[0],s=d[1],y=Object(r.useState)({}),h=Object(m.a)(y,2),o=h[0],u=h[1],F=0,j=0;j<e.length;j++)if(e[j].date===a){F=j;break}var O=Object(r.useState)(e[F]),x=Object(m.a)(O,2),v=x[0],g=x[1];return Object(r.useEffect)((function(){!function(){var e=Object(c.a)(l.a.mark((function e(a){var t,r,n,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.date,!o[t]){e.next=4;break}return s(o[t]),e.abrupt("return");case 4:return e.next=6,fetch("/new-music-archive/archive/".concat(t,".json"));case 6:return r=e.sent,e.next=9,r.json();case 9:n=e.sent,d=n.data,o[t]=d,u(o),s(d);case 14:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()(v)}),[o,v]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(J.MetaTags,{children:[Object(b.jsx)("title",{children:"New Music Archive - ".concat(a)}),Object(b.jsx)("meta",{name:"description",content:"Apple's list of new music. Archived every week."}),Object(b.jsx)("meta",{property:"og:title",content:"New Music Archive - ".concat(a)}),Object(b.jsx)("meta",{property:"og:url",content:window.location.href}),Object(b.jsx)("meta",{property:"og:type",content:"website"}),Object(b.jsx)("meta",{property:"og:description",content:"Apple's list of new music. Archived every week."}),Object(b.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(b.jsx)("meta",{property:"twitter:domain",content:window.location.origin}),Object(b.jsx)("meta",{property:"twitter:url",content:window.location.href}),Object(b.jsx)("meta",{name:"twitter:title",content:"New Music Archive - ".concat(a)}),Object(b.jsx)("meta",{name:"twitter:description",content:"Apple's list of new music. Archived every week."})]}),Object(b.jsx)("select",{className:"date-selection",value:v.date,name:"dates",onChange:function(e){g({date:e.target.value}),t.push("/".concat(e.target.value))},children:e.map((function(e){var a=e.name,t=e.date;return Object(b.jsx)("option",{value:t,children:a},t)}))}),Object(b.jsx)("div",{className:"album-list",children:i.map((function(e,a){return Object(b.jsx)(N,{idx:a,album:e},e.id)}))})]})}var M=function(e){return function(a){return e.reduce((function(e,a){return e&&e[a]?e[a]:null}),a)}};function k(e){var a=e.album,t=a.attributes,r=Object(p.h)().date,n=function(e){var a,t,r;return M(["editorialNotes","standard"])(null===e||void 0===e||null===(a=e.relationships)||void 0===a||null===(t=a.artists)||void 0===t||null===(r=t.data[0])||void 0===r?void 0:r.attributes)||M(["editorialNotes","standard"])(e.attributes)}(a),d=function(e){var a,t,r;return M(["editorialNotes","short"])(null===e||void 0===e||null===(a=e.relationships)||void 0===a||null===(t=a.artists)||void 0===t||null===(r=t.data[0])||void 0===r?void 0:r.attributes)||M(["editorialNotes","short"])(e.attributes)}(a),i=f(a),c=new Date(t.releaseDate).getFullYear();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O.b,{className:"back-link",to:"/".concat(r),children:"\uff1c Back"}),Object(b.jsxs)(J.MetaTags,{children:[Object(b.jsx)("title",{children:"".concat(t.artistName," - ").concat(t.name)}),Object(b.jsx)("meta",{name:"description",content:d}),Object(b.jsx)("meta",{property:"og:title",content:t.name}),Object(b.jsx)("meta",{property:"og:url",content:window.location.href}),Object(b.jsx)("meta",{property:"og:type",content:"website"}),Object(b.jsx)("meta",{property:"og:description",content:d}),Object(b.jsx)("meta",{property:"og:image",content:t.artwork.url.replaceAll("{w}",650).replaceAll("{h}",650)}),Object(b.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(b.jsx)("meta",{property:"twitter:domain",content:window.location.origin}),Object(b.jsx)("meta",{property:"twitter:url",content:window.location.href}),Object(b.jsx)("meta",{name:"twitter:title",content:t.name}),Object(b.jsx)("meta",{name:"twitter:description",content:d}),Object(b.jsx)("meta",{name:"twitter:image",content:t.artwork.url.replaceAll("{w}",650).replaceAll("{h}",650)})]}),Object(b.jsx)("div",{className:"album",children:Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("a",{href:t.url,children:Object(b.jsx)(j,{title:d,className:"album-art",width:650,height:650,artwork:t.artwork,alt:"".concat(t.artistName," - ").concat(t.name," album artwork")})}),Object(b.jsxs)("div",{className:"detail-album-details",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("h1",{className:"detail-album-name",children:[a.attributes.name,Object(b.jsx)("div",{className:"explicit",children:"explicit"===t.contentRating&&"\ud83c\udd74"})]})}),Object(b.jsx)("div",{className:"detail-artist-name",children:Object(b.jsx)("h1",{children:a.attributes.artistName})}),Object(b.jsxs)("div",{className:"album-genre",children:[i," - ",c]}),Object(b.jsx)(g,{attributes:t}),Object(b.jsx)("div",{className:"notes-wrap",children:Object(b.jsx)("p",{className:"detail-editors-notes",dangerouslySetInnerHTML:function(e){return{__html:e}}(n)})})]})]})})]})}function S(){var e=Object(p.h)(),a=e.index,t=function(e){var a=Object(r.useState)([]),t=Object(m.a)(a,2),n=t[0],d=t[1],i=Object(r.useState)({}),s=Object(m.a)(i,2),y=s[0],h=s[1];return Object(r.useEffect)((function(){!function(){var e=Object(c.a)(l.a.mark((function e(a){var t,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y[a]){e.next=3;break}return d(y[a]),e.abrupt("return");case 3:return e.next=5,fetch("/new-music-archive/archive/".concat(a,".json"));case 5:return t=e.sent,e.next=8,t.json();case 8:r=e.sent,n=r.data,y[a]=n,h(y),d(n);case 13:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()(e)}),[y,e]),n}(e.date),n=t[a];return null==t||null==n?null:Object(b.jsx)(k,{album:n},n.id)}var D=function(){var e=[{date:"2023-05-19",name:"Friday, May 19th 2023"},{date:"2023-05-12",name:"Friday, May 12th 2023"},{date:"2023-05-05",name:"Friday, May 5th 2023"},{date:"2023-04-28",name:"Friday, April 28th 2023"},{date:"2023-04-21",name:"Friday, April 21st 2023"},{date:"2023-04-14",name:"Friday, April 14th 2023"},{date:"2023-04-07",name:"Friday, April 7th 2023"},{date:"2023-03-31",name:"Friday, March 31st 2023"},{date:"2023-03-24",name:"Friday, March 24th 2023"},{date:"2023-03-17",name:"Friday, March 17th 2023"},{date:"2023-03-10",name:"Friday, March 10th 2023"},{date:"2023-03-03",name:"Friday, March 3rd 2023"},{date:"2023-02-24",name:"Friday, February 24th 2023"},{date:"2023-02-17",name:"Friday, February 17th 2023"},{date:"2023-02-10",name:"Friday, February 10th 2023"},{date:"2023-02-03",name:"Friday, February 3rd 2023"},{date:"2023-01-27",name:"Friday, January 27th 2023"},{date:"2023-01-20",name:"Friday, January 20th 2023"},{date:"2023-01-13",name:"Friday, January 13th 2023"},{date:"2023-01-06",name:"Friday, January 6th 2023"},{date:"2022-12-30",name:"Friday, December 30th 2022"},{date:"2022-12-23",name:"Friday, December 23rd 2022"},{date:"2022-12-09",name:"Friday, December 9th 2022"},{date:"2022-12-02",name:"Friday, December 2nd 2022"},{date:"2022-11-25",name:"Friday, November 25th 2022"},{date:"2022-11-18",name:"Friday, November 18th 2022"},{date:"2022-11-11",name:"Friday, November 11th 2022"},{date:"2022-11-04",name:"Friday, November 4th 2022"},{date:"2022-10-28",name:"Friday, October 28th 2022"},{date:"2022-10-21",name:"Friday, October 21st 2022"},{date:"2022-10-14",name:"Friday, October 14th 2022"},{date:"2022-10-07",name:"Friday, October 7th 2022"},{date:"2022-09-30",name:"Friday, September 30th 2022"},{date:"2022-09-23",name:"Friday, September 23rd 2022"},{date:"2022-09-16",name:"Friday, September 16th 2022"},{date:"2022-09-09",name:"Friday, September 9th 2022"},{date:"2022-09-02",name:"Friday, September 2nd 2022"},{date:"2022-08-26",name:"Friday, August 26th 2022"},{date:"2022-08-19",name:"Friday, August 19th 2022"},{date:"2022-08-12",name:"Friday, August 12th 2022"},{date:"2022-08-05",name:"Friday, August 5th 2022"},{date:"2022-07-29",name:"Friday, July 29th 2022"},{date:"2022-07-22",name:"Friday, July 22nd 2022"},{date:"2022-07-15",name:"Friday, July 15th 2022"},{date:"2022-07-08",name:"Friday, July 8th 2022"},{date:"2022-07-01",name:"Friday, July 1st 2022"},{date:"2022-06-24",name:"Friday, June 24th 2022"},{date:"2022-06-17",name:"Friday, June 17th 2022"},{date:"2022-06-10",name:"Friday, June 10th 2022"},{date:"2022-06-03",name:"Friday, June 3rd 2022"},{date:"2022-05-27",name:"Friday, May 27th 2022"},{date:"2022-05-20",name:"Friday, May 20th 2022"},{date:"2022-05-13",name:"Friday, May 13th 2022"},{date:"2022-05-06",name:"Friday, May 6th 2022"},{date:"2022-04-29",name:"Friday, April 29th 2022"},{date:"2022-04-22",name:"Friday, April 22nd 2022"},{date:"2022-04-15",name:"Friday, April 15th 2022"},{date:"2022-04-08",name:"Friday, April 8th 2022"},{date:"2022-04-01",name:"Friday, April 1st 2022"},{date:"2022-03-25",name:"Friday, March 25th 2022"},{date:"2022-03-18",name:"Friday, March 19th 2022"},{date:"2022-03-11",name:"Friday, March 11th 2022"},{date:"2022-03-04",name:"Friday, March 4th 2022"},{date:"2022-02-25",name:"Friday, February 25th 2022"},{date:"2022-02-18",name:"Friday, February 18th 2022"},{date:"2022-02-11",name:"Friday, February 11th 2022"},{date:"2022-02-04",name:"Friday, February 4th 2022"},{date:"2022-01-28",name:"Friday, January 28th 2022"},{date:"2022-01-21",name:"Friday, January 21st 2022"},{date:"2022-01-14",name:"Friday, January 14th 2022"},{date:"2022-01-07",name:"Friday, January 7th 2022"},{date:"2021-12-31",name:"Friday, December 31st 2021"},{date:"2021-12-24",name:"Friday, December 24th 2021"},{date:"2021-12-17",name:"Friday, December 17th 2021"},{date:"2021-12-10",name:"Friday, December 10th 2021"},{date:"2021-12-03",name:"Friday, December 3rd 2021"},{date:"2021-11-26",name:"Friday, November 26th 2021"},{date:"2021-11-19",name:"Friday, November 19th 2021"},{date:"2021-11-12",name:"Friday, November 12th 2021"},{date:"2021-11-05",name:"Friday, November 5th 2021"},{date:"2021-10-29",name:"Friday, October 29th 2021"},{date:"2021-10-22",name:"Friday, October 22nd 2021"},{date:"2021-10-15",name:"Friday, October 15th 2021"},{date:"2021-10-08",name:"Friday, October 8th 2021"},{date:"2021-10-01",name:"Friday, October 1st 2021"},{date:"2021-09-24",name:"Friday, September 24th 2021"},{date:"2021-09-17",name:"Friday, September 17th 2021"},{date:"2021-09-10",name:"Friday, September 10th 2021"},{date:"2021-09-03",name:"Friday, September 3rd 2021"},{date:"2021-08-27",name:"Friday, August 27th 2021"},{date:"2021-08-20",name:"Friday, August 20th 2021"},{date:"2021-08-13",name:"Friday, August 13th 2021"},{date:"2021-08-06",name:"Friday, August 6th 2021"},{date:"2021-07-30",name:"Friday, July 30th 2021"},{date:"2021-07-23",name:"Friday, July 23rd 2021"},{date:"2021-07-16",name:"Friday, July 16th 2021"},{date:"2021-07-09",name:"Friday, July 9th 2021"},{date:"2021-07-02",name:"Friday, July 2nd 2021"},{date:"2021-06-25",name:"Friday, June 25th 2021"},{date:"2021-06-18",name:"Friday, June 18th 2021"},{date:"2021-06-11",name:"Friday, June 11th 2021"},{date:"2021-06-04",name:"Friday, June 4th 2021"},{date:"2021-05-28",name:"Friday, May 28th 2021"},{date:"2021-05-21",name:"Friday, May 21st 2021"},{date:"2021-05-14",name:"Friday, May 14th 2021"},{date:"2021-05-07",name:"Friday, May 7th 2021"}];return Object(b.jsx)(O.a,{basename:"".concat("/new-music-archive"),children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(p.d,{children:[Object(b.jsx)(p.b,{path:"/:date/:index/*",children:Object(b.jsx)(S,{})}),Object(b.jsx)(p.b,{path:"/:date",children:Object(b.jsx)(A,{})}),Object(b.jsx)(p.a,{to:"/".concat(e[0].date)})]})})})},_=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,55)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,d=a.getLCP,i=a.getTTFB;t(e),r(e),n(e),d(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root")),_()}},[[54,1,2]]]);
//# sourceMappingURL=main.3d8571f6.chunk.js.map