(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{34:function(e,a,t){},35:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var r=t(1),d=t.n(r),n=t(12),i=t.n(n),m=(t(34),t(35),t(13)),c=t(8),y=t(11),s=t.n(y),h=t(18),u=t.n(h),F=t(29),l=t(26);function o(e){var a=e.rawURL,t=e.width,r=e.height;return a.replaceAll("{w}",t).replaceAll("{h}",r).replaceAll("{c}","bf").replaceAll("{f}","webp")}var b=t(0),j=["artwork","width","height","alt"];function p(e){var a=e.artwork,t=e.width,r=void 0===t?100:t,d=e.height,n=void 0===d?100:d,i=e.alt,m=void 0===i?"":i,c=Object(l.a)(e,j),y=o({rawURL:a.url,width:r,height:n});return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("img",Object(F.a)({className:"album-art",src:y,alt:m},c))})}var O=t(2),v=t(9),x=t.p+"static/media/apple-badge.0349686e.svg",g=t.p+"static/media/Spotify_Icon_RGB_Green.cd66b8f6.png";function w(e){return Object(b.jsxs)("div",{className:"listen-links",children:[Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:e.attributes.url,children:Object(b.jsx)("img",{className:"apple-music-link",src:x,alt:"Listen on Apple Music"})})}),Object(b.jsx)("p",{children:e.attributes.spotify&&Object(b.jsx)("a",{href:e.attributes.spotify,children:Object(b.jsx)("img",{className:"spotify-link",src:g,alt:"Listen on Spotify"})})})]})}function J(e){var a,t,r,d,n,i,m=null===e||void 0===e||null===(a=e.relationships)||void 0===a||null===(t=a.artists)||void 0===t||null===(r=t.data[0])||void 0===r||null===(d=r.attributes)||void 0===d?void 0:d.genreNames;return m||(null!==(n=null===(i=e.attributes.genreNames)||void 0===i?void 0:i.filter((function(e){return"Music"!==e}))[0])&&void 0!==n?n:"")}u.a.setAppElement("#root");var N=function(e){return function(a){return e.reduce((function(e,a){return e&&e[a]?e[a]:null}),a)}};function f(e){var a=e.album,t=e.idx,d=Object(O.h)().date,n=Object(r.useState)(!1),i=Object(c.a)(n,2),m=i[0],y=i[1],s=a.attributes,h=N(["editorialNotes","standard"])(s),F=N(["editorialNotes","short"])(s),l=function(){return y(!1)},o=J(a),j=new Date(s.releaseDate).getFullYear(),x=new URL(a.attributes.url);return Object(b.jsxs)("div",{className:"album",children:[Object(b.jsxs)(u.a,{isOpen:m,onRequestClose:l,className:"modal",style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"1px solid rgb(59, 59, 59)",background:"rgba(0, 0, 0, 0.9)",height:"500px",overflow:"scroll"}},contentLabel:"".concat(s.artistName," - ").concat(s.name," album details"),children:[Object(b.jsx)("div",{className:"close-wrapper",children:Object(b.jsx)("button",{className:"close-modal-btn",onClick:l,type:"button","aria-label":"close",children:"\xd7"})}),Object(b.jsxs)("div",{className:"modal-wrapper",children:[Object(b.jsx)(v.b,{to:"/".concat(d,"/").concat(t).concat(x.pathname),children:Object(b.jsx)(p,{title:F,className:"modal-album-art",width:400,height:400,artwork:s.artwork,alt:"".concat(s.artistName," - ").concat(s.name," album artwork")})}),Object(b.jsxs)("div",{className:"modal-album-details",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("h1",{className:"modal-album-name",children:[a.attributes.name,Object(b.jsx)("div",{className:"explicit",children:"explicit"===s.contentRating&&"\ud83c\udd74"})]})}),Object(b.jsx)("div",{className:"modal-artist-name",children:Object(b.jsx)("h1",{children:a.attributes.artistName})}),Object(b.jsxs)("div",{className:"modal-album-genre",children:[o," - ",j]}),Object(b.jsx)(w,{attributes:s}),Object(b.jsx)("div",{className:"modal-notes-wrap",children:Object(b.jsx)("p",{className:"modal-editors-notes",dangerouslySetInnerHTML:function(e){return{__html:e}}(h)})})]})]})]}),Object(b.jsx)(p,{title:F,width:200,height:200,artwork:s.artwork,alt:"".concat(s.artistName," - ").concat(s.name," album artwork"),onClick:function(){return y(!0)}}),Object(b.jsxs)("div",{className:"artist-name",children:[Object(b.jsx)("p",{children:a.attributes.artistName}),Object(b.jsx)("span",{className:"explicit",children:"explicit"===s.contentRating&&"\ud83c\udd74"})]}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"album-name",children:a.attributes.name})})]})}var A=t(14);function M(){for(var e=[{date:"2024-04-12",name:"Friday, April 19th 2024"},{date:"2024-04-12",name:"Friday, April 12th 2024"},{date:"2024-04-05",name:"Friday, April 5th 2024"},{date:"2024-03-29",name:"Friday, March 29th 2024"},{date:"2024-03-22",name:"Friday, March 22nd 2024"},{date:"2024-03-15",name:"Friday, March 15th 2024"},{date:"2024-03-08",name:"Friday, March 8th 2024"},{date:"2024-03-01",name:"Friday, March 1st 2024"},{date:"2024-02-23",name:"Friday, February 23rd 2024"},{date:"2024-02-16",name:"Friday, February 16th 2024"},{date:"2024-02-09",name:"Friday, February 9th 2024"},{date:"2024-02-02",name:"Friday, February 2nd 2024"},{date:"2024-01-26",name:"Friday, January 26th 2024"},{date:"2024-01-19",name:"Friday, January 19th 2024"},{date:"2024-01-12",name:"Friday, January 12th 2024"},{date:"2024-01-05",name:"Friday, January 5th 2024"},{date:"2023-12-29",name:"Friday, December 29th 2023"},{date:"2023-12-22",name:"Friday, December 22nd 2023"},{date:"2023-12-15",name:"Friday, December 15th 2023"},{date:"2023-12-08",name:"Friday, December 8th 2023"},{date:"2023-12-01",name:"Friday, December 1st 2023"},{date:"2023-11-24",name:"Friday, November 24th 2023"},{date:"2023-11-17",name:"Friday, November 17th 2023"},{date:"2023-11-10",name:"Friday, November 10th 2023"},{date:"2023-11-03",name:"Friday, November 3rd 2023"},{date:"2023-10-27",name:"Friday, October 27th 2023"},{date:"2023-10-20",name:"Friday, October 20th 2023"},{date:"2023-10-13",name:"Friday, October 13th 2023"},{date:"2023-10-06",name:"Friday, October 6th 2023"},{date:"2023-09-29",name:"Friday, September 29th 2023"},{date:"2023-09-22",name:"Friday, September 22nd 2023"},{date:"2023-09-15",name:"Friday, September 15th 2023"},{date:"2023-09-08",name:"Friday, September 8th 2023"},{date:"2023-09-01",name:"Friday, September 1st 2023"},{date:"2023-08-25",name:"Friday, August 25th 2023"},{date:"2023-08-18",name:"Friday, August 18th 2023"},{date:"2023-08-11",name:"Friday, August 11th 2023"},{date:"2023-08-04",name:"Friday, August 4th 2023"},{date:"2023-07-28",name:"Friday, July 28th 2023"},{date:"2023-07-21",name:"Friday, July 21st 2023"},{date:"2023-07-14",name:"Friday, July 14th 2023"},{date:"2023-07-07",name:"Friday, July 7th 2023"},{date:"2023-06-30",name:"Friday, June 30th 2023"},{date:"2023-06-23",name:"Friday, June 23rd 2023"},{date:"2023-06-16",name:"Friday, June 16th 2023"},{date:"2023-06-09",name:"Friday, June 9th 2023"},{date:"2023-06-02",name:"Friday, June 2nd 2023"},{date:"2023-05-26",name:"Friday, May 26th 2023"},{date:"2023-05-19",name:"Friday, May 19th 2023"},{date:"2023-05-12",name:"Friday, May 12th 2023"},{date:"2023-05-05",name:"Friday, May 5th 2023"},{date:"2023-04-28",name:"Friday, April 28th 2023"},{date:"2023-04-21",name:"Friday, April 21st 2023"},{date:"2023-04-14",name:"Friday, April 14th 2023"},{date:"2023-04-07",name:"Friday, April 7th 2023"},{date:"2023-03-31",name:"Friday, March 31st 2023"},{date:"2023-03-24",name:"Friday, March 24th 2023"},{date:"2023-03-17",name:"Friday, March 17th 2023"},{date:"2023-03-10",name:"Friday, March 10th 2023"},{date:"2023-03-03",name:"Friday, March 3rd 2023"},{date:"2023-02-24",name:"Friday, February 24th 2023"},{date:"2023-02-17",name:"Friday, February 17th 2023"},{date:"2023-02-10",name:"Friday, February 10th 2023"},{date:"2023-02-03",name:"Friday, February 3rd 2023"},{date:"2023-01-27",name:"Friday, January 27th 2023"},{date:"2023-01-20",name:"Friday, January 20th 2023"},{date:"2023-01-13",name:"Friday, January 13th 2023"},{date:"2023-01-06",name:"Friday, January 6th 2023"},{date:"2022-12-30",name:"Friday, December 30th 2022"},{date:"2022-12-23",name:"Friday, December 23rd 2022"},{date:"2022-12-09",name:"Friday, December 9th 2022"},{date:"2022-12-02",name:"Friday, December 2nd 2022"},{date:"2022-11-25",name:"Friday, November 25th 2022"},{date:"2022-11-18",name:"Friday, November 18th 2022"},{date:"2022-11-11",name:"Friday, November 11th 2022"},{date:"2022-11-04",name:"Friday, November 4th 2022"},{date:"2022-10-28",name:"Friday, October 28th 2022"},{date:"2022-10-21",name:"Friday, October 21st 2022"},{date:"2022-10-14",name:"Friday, October 14th 2022"},{date:"2022-10-07",name:"Friday, October 7th 2022"},{date:"2022-09-30",name:"Friday, September 30th 2022"},{date:"2022-09-23",name:"Friday, September 23rd 2022"},{date:"2022-09-16",name:"Friday, September 16th 2022"},{date:"2022-09-09",name:"Friday, September 9th 2022"},{date:"2022-09-02",name:"Friday, September 2nd 2022"},{date:"2022-08-26",name:"Friday, August 26th 2022"},{date:"2022-08-19",name:"Friday, August 19th 2022"},{date:"2022-08-12",name:"Friday, August 12th 2022"},{date:"2022-08-05",name:"Friday, August 5th 2022"},{date:"2022-07-29",name:"Friday, July 29th 2022"},{date:"2022-07-22",name:"Friday, July 22nd 2022"},{date:"2022-07-15",name:"Friday, July 15th 2022"},{date:"2022-07-08",name:"Friday, July 8th 2022"},{date:"2022-07-01",name:"Friday, July 1st 2022"},{date:"2022-06-24",name:"Friday, June 24th 2022"},{date:"2022-06-17",name:"Friday, June 17th 2022"},{date:"2022-06-10",name:"Friday, June 10th 2022"},{date:"2022-06-03",name:"Friday, June 3rd 2022"},{date:"2022-05-27",name:"Friday, May 27th 2022"},{date:"2022-05-20",name:"Friday, May 20th 2022"},{date:"2022-05-13",name:"Friday, May 13th 2022"},{date:"2022-05-06",name:"Friday, May 6th 2022"},{date:"2022-04-29",name:"Friday, April 29th 2022"},{date:"2022-04-22",name:"Friday, April 22nd 2022"},{date:"2022-04-15",name:"Friday, April 15th 2022"},{date:"2022-04-08",name:"Friday, April 8th 2022"},{date:"2022-04-01",name:"Friday, April 1st 2022"},{date:"2022-03-25",name:"Friday, March 25th 2022"},{date:"2022-03-18",name:"Friday, March 19th 2022"},{date:"2022-03-11",name:"Friday, March 11th 2022"},{date:"2022-03-04",name:"Friday, March 4th 2022"},{date:"2022-02-25",name:"Friday, February 25th 2022"},{date:"2022-02-18",name:"Friday, February 18th 2022"},{date:"2022-02-11",name:"Friday, February 11th 2022"},{date:"2022-02-04",name:"Friday, February 4th 2022"},{date:"2022-01-28",name:"Friday, January 28th 2022"},{date:"2022-01-21",name:"Friday, January 21st 2022"},{date:"2022-01-14",name:"Friday, January 14th 2022"},{date:"2022-01-07",name:"Friday, January 7th 2022"},{date:"2021-12-31",name:"Friday, December 31st 2021"},{date:"2021-12-24",name:"Friday, December 24th 2021"},{date:"2021-12-17",name:"Friday, December 17th 2021"},{date:"2021-12-10",name:"Friday, December 10th 2021"},{date:"2021-12-03",name:"Friday, December 3rd 2021"},{date:"2021-11-26",name:"Friday, November 26th 2021"},{date:"2021-11-19",name:"Friday, November 19th 2021"},{date:"2021-11-12",name:"Friday, November 12th 2021"},{date:"2021-11-05",name:"Friday, November 5th 2021"},{date:"2021-10-29",name:"Friday, October 29th 2021"},{date:"2021-10-22",name:"Friday, October 22nd 2021"},{date:"2021-10-15",name:"Friday, October 15th 2021"},{date:"2021-10-08",name:"Friday, October 8th 2021"},{date:"2021-10-01",name:"Friday, October 1st 2021"},{date:"2021-09-24",name:"Friday, September 24th 2021"},{date:"2021-09-17",name:"Friday, September 17th 2021"},{date:"2021-09-10",name:"Friday, September 10th 2021"},{date:"2021-09-03",name:"Friday, September 3rd 2021"},{date:"2021-08-27",name:"Friday, August 27th 2021"},{date:"2021-08-20",name:"Friday, August 20th 2021"},{date:"2021-08-13",name:"Friday, August 13th 2021"},{date:"2021-08-06",name:"Friday, August 6th 2021"},{date:"2021-07-30",name:"Friday, July 30th 2021"},{date:"2021-07-23",name:"Friday, July 23rd 2021"},{date:"2021-07-16",name:"Friday, July 16th 2021"},{date:"2021-07-09",name:"Friday, July 9th 2021"},{date:"2021-07-02",name:"Friday, July 2nd 2021"},{date:"2021-06-25",name:"Friday, June 25th 2021"},{date:"2021-06-18",name:"Friday, June 18th 2021"},{date:"2021-06-11",name:"Friday, June 11th 2021"},{date:"2021-06-04",name:"Friday, June 4th 2021"},{date:"2021-05-28",name:"Friday, May 28th 2021"},{date:"2021-05-21",name:"Friday, May 21st 2021"},{date:"2021-05-14",name:"Friday, May 14th 2021"},{date:"2021-05-07",name:"Friday, May 7th 2021"}],a=Object(O.h)().date,t=Object(O.g)(),d=Object(r.useState)([]),n=Object(c.a)(d,2),i=n[0],y=n[1],h=Object(r.useState)({}),u=Object(c.a)(h,2),F=u[0],l=u[1],o=0,j=0;j<e.length;j++)if(e[j].date===a){o=j;break}var p=Object(r.useState)(e[o]),v=Object(c.a)(p,2),x=v[0],g=v[1];return Object(r.useEffect)((function(){!function(){var e=Object(m.a)(s.a.mark((function e(a){var t,r,d,n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.date,!F[t]){e.next=4;break}return y(F[t]),e.abrupt("return");case 4:return e.next=6,fetch("/new-music-archive/archive/".concat(t,".json"));case 6:return r=e.sent,e.next=9,r.json();case 9:d=e.sent,n=d.data,i=d.resources,"rooms"===n[0].type&&(n=Object.values(i.albums)),F[t]=n,l(F),y(n);case 16:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()(x)}),[F,x]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(A.MetaTags,{children:[Object(b.jsx)("title",{children:"New Music Archive - ".concat(a)}),Object(b.jsx)("meta",{name:"description",content:"Apple's list of new music. Archived every week."}),Object(b.jsx)("meta",{property:"og:title",content:"New Music Archive - ".concat(a)}),Object(b.jsx)("meta",{property:"og:url",content:window.location.href}),Object(b.jsx)("meta",{property:"og:type",content:"website"}),Object(b.jsx)("meta",{property:"og:description",content:"Apple's list of new music. Archived every week."}),Object(b.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(b.jsx)("meta",{property:"twitter:domain",content:window.location.origin}),Object(b.jsx)("meta",{property:"twitter:url",content:window.location.href}),Object(b.jsx)("meta",{name:"twitter:title",content:"New Music Archive - ".concat(a)}),Object(b.jsx)("meta",{name:"twitter:description",content:"Apple's list of new music. Archived every week."})]}),Object(b.jsx)("select",{className:"date-selection",value:x.date,name:"dates",onChange:function(e){g({date:e.target.value}),t.push("/".concat(e.target.value))},children:e.map((function(e){var a=e.name,t=e.date;return Object(b.jsx)("option",{value:t,children:a},t)}))}),Object(b.jsx)("div",{className:"album-list",children:i.map((function(e,a){return Object(b.jsx)(f,{idx:a,album:e},e.id)}))})]})}var S=function(e){return function(a){return e.reduce((function(e,a){return e&&e[a]?e[a]:null}),a)}};function D(e){var a=e.album,t=a.attributes,r=Object(O.h)().date,d=function(e){var a,t,r;return S(["editorialNotes","standard"])(null===e||void 0===e||null===(a=e.relationships)||void 0===a||null===(t=a.artists)||void 0===t||null===(r=t.data[0])||void 0===r?void 0:r.attributes)||S(["editorialNotes","standard"])(e.attributes)}(a),n=function(e){var a,t,r;return S(["editorialNotes","short"])(null===e||void 0===e||null===(a=e.relationships)||void 0===a||null===(t=a.artists)||void 0===t||null===(r=t.data[0])||void 0===r?void 0:r.attributes)||S(["editorialNotes","short"])(e.attributes)}(a),i=J(a),m=new Date(t.releaseDate).getFullYear();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v.b,{className:"back-link",to:"/".concat(r),children:"\uff1c Back"}),Object(b.jsxs)(A.MetaTags,{children:[Object(b.jsx)("title",{children:"".concat(t.artistName," - ").concat(t.name)}),Object(b.jsx)("meta",{name:"description",content:n}),Object(b.jsx)("meta",{property:"og:title",content:t.name}),Object(b.jsx)("meta",{property:"og:url",content:window.location.href}),Object(b.jsx)("meta",{property:"og:type",content:"website"}),Object(b.jsx)("meta",{property:"og:description",content:n}),Object(b.jsx)("meta",{property:"og:image",content:o({rawURL:t.artwork.url,width:650,height:650})}),Object(b.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(b.jsx)("meta",{property:"twitter:domain",content:window.location.origin}),Object(b.jsx)("meta",{property:"twitter:url",content:window.location.href}),Object(b.jsx)("meta",{name:"twitter:title",content:t.name}),Object(b.jsx)("meta",{name:"twitter:description",content:n}),Object(b.jsx)("meta",{name:"twitter:image",content:o({rawURL:t.artwork.url,width:650,height:650})})]}),Object(b.jsx)("div",{className:"album",children:Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("a",{href:t.url,children:Object(b.jsx)(p,{title:n,className:"album-art",width:650,height:650,artwork:t.artwork,alt:"".concat(t.artistName," - ").concat(t.name," album artwork")})}),Object(b.jsxs)("div",{className:"detail-album-details",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("h1",{className:"detail-album-name",children:[a.attributes.name,Object(b.jsx)("div",{className:"explicit",children:"explicit"===t.contentRating&&"\ud83c\udd74"})]})}),Object(b.jsx)("div",{className:"detail-artist-name",children:Object(b.jsx)("h1",{children:a.attributes.artistName})}),Object(b.jsxs)("div",{className:"album-genre",children:[i," - ",m]}),Object(b.jsx)(w,{attributes:t}),Object(b.jsx)("div",{className:"notes-wrap",children:Object(b.jsx)("p",{className:"detail-editors-notes",dangerouslySetInnerHTML:function(e){return{__html:e}}(d)})})]})]})})]})}function k(){var e=Object(O.h)(),a=e.index,t=function(e){var a=Object(r.useState)([]),t=Object(c.a)(a,2),d=t[0],n=t[1],i=Object(r.useState)({}),y=Object(c.a)(i,2),h=y[0],u=y[1];return Object(r.useEffect)((function(){!function(){var e=Object(m.a)(s.a.mark((function e(a){var t,r,d,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h[a]){e.next=3;break}return n(h[a]),e.abrupt("return");case 3:return e.next=5,fetch("/new-music-archive/archive/".concat(a,".json"));case 5:return t=e.sent,e.next=8,t.json();case 8:r=e.sent,d=r.data,i=r.resources,"rooms"===d[0].type&&(d=Object.values(i.albums)),h[a]=d,u(h),n(d);case 15:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()(e)}),[h,e]),d}(e.date),d=t[a];return null==t||null==d?null:Object(b.jsx)(D,{album:d},d.id)}var L=function(){var e=[{date:"2024-04-12",name:"Friday, April 19th 2024"},{date:"2024-04-12",name:"Friday, April 12th 2024"},{date:"2024-04-05",name:"Friday, April 5th 2024"},{date:"2024-03-29",name:"Friday, March 29th 2024"},{date:"2024-03-22",name:"Friday, March 22nd 2024"},{date:"2024-03-15",name:"Friday, March 15th 2024"},{date:"2024-03-08",name:"Friday, March 8th 2024"},{date:"2024-03-01",name:"Friday, March 1st 2024"},{date:"2024-02-23",name:"Friday, February 23rd 2024"},{date:"2024-02-16",name:"Friday, February 16th 2024"},{date:"2024-02-09",name:"Friday, February 9th 2024"},{date:"2024-02-02",name:"Friday, February 2nd 2024"},{date:"2024-01-26",name:"Friday, January 26th 2024"},{date:"2024-01-19",name:"Friday, January 19th 2024"},{date:"2024-01-12",name:"Friday, January 12th 2024"},{date:"2024-01-05",name:"Friday, January 5th 2024"},{date:"2023-12-29",name:"Friday, December 29th 2023"},{date:"2023-12-22",name:"Friday, December 22nd 2023"},{date:"2023-12-15",name:"Friday, December 15th 2023"},{date:"2023-12-08",name:"Friday, December 8th 2023"},{date:"2023-12-01",name:"Friday, December 1st 2023"},{date:"2023-11-24",name:"Friday, November 24th 2023"},{date:"2023-11-17",name:"Friday, November 17th 2023"},{date:"2023-11-10",name:"Friday, November 10th 2023"},{date:"2023-11-03",name:"Friday, November 3rd 2023"},{date:"2023-10-27",name:"Friday, October 27th 2023"},{date:"2023-10-20",name:"Friday, October 20th 2023"},{date:"2023-10-13",name:"Friday, October 13th 2023"},{date:"2023-10-06",name:"Friday, October 6th 2023"},{date:"2023-09-29",name:"Friday, September 29th 2023"},{date:"2023-09-22",name:"Friday, September 22nd 2023"},{date:"2023-09-15",name:"Friday, September 15th 2023"},{date:"2023-09-08",name:"Friday, September 8th 2023"},{date:"2023-09-01",name:"Friday, September 1st 2023"},{date:"2023-08-25",name:"Friday, August 25th 2023"},{date:"2023-08-18",name:"Friday, August 18th 2023"},{date:"2023-08-11",name:"Friday, August 11th 2023"},{date:"2023-08-04",name:"Friday, August 4th 2023"},{date:"2023-07-28",name:"Friday, July 28th 2023"},{date:"2023-07-21",name:"Friday, July 21st 2023"},{date:"2023-07-14",name:"Friday, July 14th 2023"},{date:"2023-07-07",name:"Friday, July 7th 2023"},{date:"2023-06-30",name:"Friday, June 30th 2023"},{date:"2023-06-23",name:"Friday, June 23rd 2023"},{date:"2023-06-16",name:"Friday, June 16th 2023"},{date:"2023-06-09",name:"Friday, June 9th 2023"},{date:"2023-06-02",name:"Friday, June 2nd 2023"},{date:"2023-05-26",name:"Friday, May 26th 2023"},{date:"2023-05-19",name:"Friday, May 19th 2023"},{date:"2023-05-12",name:"Friday, May 12th 2023"},{date:"2023-05-05",name:"Friday, May 5th 2023"},{date:"2023-04-28",name:"Friday, April 28th 2023"},{date:"2023-04-21",name:"Friday, April 21st 2023"},{date:"2023-04-14",name:"Friday, April 14th 2023"},{date:"2023-04-07",name:"Friday, April 7th 2023"},{date:"2023-03-31",name:"Friday, March 31st 2023"},{date:"2023-03-24",name:"Friday, March 24th 2023"},{date:"2023-03-17",name:"Friday, March 17th 2023"},{date:"2023-03-10",name:"Friday, March 10th 2023"},{date:"2023-03-03",name:"Friday, March 3rd 2023"},{date:"2023-02-24",name:"Friday, February 24th 2023"},{date:"2023-02-17",name:"Friday, February 17th 2023"},{date:"2023-02-10",name:"Friday, February 10th 2023"},{date:"2023-02-03",name:"Friday, February 3rd 2023"},{date:"2023-01-27",name:"Friday, January 27th 2023"},{date:"2023-01-20",name:"Friday, January 20th 2023"},{date:"2023-01-13",name:"Friday, January 13th 2023"},{date:"2023-01-06",name:"Friday, January 6th 2023"},{date:"2022-12-30",name:"Friday, December 30th 2022"},{date:"2022-12-23",name:"Friday, December 23rd 2022"},{date:"2022-12-09",name:"Friday, December 9th 2022"},{date:"2022-12-02",name:"Friday, December 2nd 2022"},{date:"2022-11-25",name:"Friday, November 25th 2022"},{date:"2022-11-18",name:"Friday, November 18th 2022"},{date:"2022-11-11",name:"Friday, November 11th 2022"},{date:"2022-11-04",name:"Friday, November 4th 2022"},{date:"2022-10-28",name:"Friday, October 28th 2022"},{date:"2022-10-21",name:"Friday, October 21st 2022"},{date:"2022-10-14",name:"Friday, October 14th 2022"},{date:"2022-10-07",name:"Friday, October 7th 2022"},{date:"2022-09-30",name:"Friday, September 30th 2022"},{date:"2022-09-23",name:"Friday, September 23rd 2022"},{date:"2022-09-16",name:"Friday, September 16th 2022"},{date:"2022-09-09",name:"Friday, September 9th 2022"},{date:"2022-09-02",name:"Friday, September 2nd 2022"},{date:"2022-08-26",name:"Friday, August 26th 2022"},{date:"2022-08-19",name:"Friday, August 19th 2022"},{date:"2022-08-12",name:"Friday, August 12th 2022"},{date:"2022-08-05",name:"Friday, August 5th 2022"},{date:"2022-07-29",name:"Friday, July 29th 2022"},{date:"2022-07-22",name:"Friday, July 22nd 2022"},{date:"2022-07-15",name:"Friday, July 15th 2022"},{date:"2022-07-08",name:"Friday, July 8th 2022"},{date:"2022-07-01",name:"Friday, July 1st 2022"},{date:"2022-06-24",name:"Friday, June 24th 2022"},{date:"2022-06-17",name:"Friday, June 17th 2022"},{date:"2022-06-10",name:"Friday, June 10th 2022"},{date:"2022-06-03",name:"Friday, June 3rd 2022"},{date:"2022-05-27",name:"Friday, May 27th 2022"},{date:"2022-05-20",name:"Friday, May 20th 2022"},{date:"2022-05-13",name:"Friday, May 13th 2022"},{date:"2022-05-06",name:"Friday, May 6th 2022"},{date:"2022-04-29",name:"Friday, April 29th 2022"},{date:"2022-04-22",name:"Friday, April 22nd 2022"},{date:"2022-04-15",name:"Friday, April 15th 2022"},{date:"2022-04-08",name:"Friday, April 8th 2022"},{date:"2022-04-01",name:"Friday, April 1st 2022"},{date:"2022-03-25",name:"Friday, March 25th 2022"},{date:"2022-03-18",name:"Friday, March 19th 2022"},{date:"2022-03-11",name:"Friday, March 11th 2022"},{date:"2022-03-04",name:"Friday, March 4th 2022"},{date:"2022-02-25",name:"Friday, February 25th 2022"},{date:"2022-02-18",name:"Friday, February 18th 2022"},{date:"2022-02-11",name:"Friday, February 11th 2022"},{date:"2022-02-04",name:"Friday, February 4th 2022"},{date:"2022-01-28",name:"Friday, January 28th 2022"},{date:"2022-01-21",name:"Friday, January 21st 2022"},{date:"2022-01-14",name:"Friday, January 14th 2022"},{date:"2022-01-07",name:"Friday, January 7th 2022"},{date:"2021-12-31",name:"Friday, December 31st 2021"},{date:"2021-12-24",name:"Friday, December 24th 2021"},{date:"2021-12-17",name:"Friday, December 17th 2021"},{date:"2021-12-10",name:"Friday, December 10th 2021"},{date:"2021-12-03",name:"Friday, December 3rd 2021"},{date:"2021-11-26",name:"Friday, November 26th 2021"},{date:"2021-11-19",name:"Friday, November 19th 2021"},{date:"2021-11-12",name:"Friday, November 12th 2021"},{date:"2021-11-05",name:"Friday, November 5th 2021"},{date:"2021-10-29",name:"Friday, October 29th 2021"},{date:"2021-10-22",name:"Friday, October 22nd 2021"},{date:"2021-10-15",name:"Friday, October 15th 2021"},{date:"2021-10-08",name:"Friday, October 8th 2021"},{date:"2021-10-01",name:"Friday, October 1st 2021"},{date:"2021-09-24",name:"Friday, September 24th 2021"},{date:"2021-09-17",name:"Friday, September 17th 2021"},{date:"2021-09-10",name:"Friday, September 10th 2021"},{date:"2021-09-03",name:"Friday, September 3rd 2021"},{date:"2021-08-27",name:"Friday, August 27th 2021"},{date:"2021-08-20",name:"Friday, August 20th 2021"},{date:"2021-08-13",name:"Friday, August 13th 2021"},{date:"2021-08-06",name:"Friday, August 6th 2021"},{date:"2021-07-30",name:"Friday, July 30th 2021"},{date:"2021-07-23",name:"Friday, July 23rd 2021"},{date:"2021-07-16",name:"Friday, July 16th 2021"},{date:"2021-07-09",name:"Friday, July 9th 2021"},{date:"2021-07-02",name:"Friday, July 2nd 2021"},{date:"2021-06-25",name:"Friday, June 25th 2021"},{date:"2021-06-18",name:"Friday, June 18th 2021"},{date:"2021-06-11",name:"Friday, June 11th 2021"},{date:"2021-06-04",name:"Friday, June 4th 2021"},{date:"2021-05-28",name:"Friday, May 28th 2021"},{date:"2021-05-21",name:"Friday, May 21st 2021"},{date:"2021-05-14",name:"Friday, May 14th 2021"},{date:"2021-05-07",name:"Friday, May 7th 2021"}];return Object(b.jsx)(v.a,{basename:"".concat("/new-music-archive"),children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(O.d,{children:[Object(b.jsx)(O.b,{path:"/:date/:index/*",children:Object(b.jsx)(k,{})}),Object(b.jsx)(O.b,{path:"/:date",children:Object(b.jsx)(M,{})}),Object(b.jsx)(O.a,{to:"/".concat(e[0].date)})]})})})},R=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,55)).then((function(a){var t=a.getCLS,r=a.getFID,d=a.getFCP,n=a.getLCP,i=a.getTTFB;t(e),r(e),d(e),n(e),i(e)}))};i.a.render(Object(b.jsx)(d.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),R()}},[[54,1,2]]]);
//# sourceMappingURL=main.bd0d5ddd.chunk.js.map