(this.webpackJsonpfour=this.webpackJsonpfour||[]).push([[0],{16:function(e,t,c){},20:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(7),r=c.n(a),o=(c(16),c(11)),i=c(8),l=c(2),j=function(e){switch(e.name){case"cross":return Object(l.jsx)(i.c,{});case"circle":return Object(l.jsx)(i.b,{});default:return Object(l.jsx)(i.a,{})}},u=c(9),b=(c(18),c(25)),m=c(26),d=c(27),p=c(30),x=c(28),O=c(29),f=(c(19),c(20),new Array(9).fill("empty")),h=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(o.a)(a,2),i=r[0],h=r[1],y=function(e){return i?Object(u.b)(i,{type:"success"}):"empty"!==f[e]?Object(u.b)("Already Filled",{type:"warning"}):(f[e]=c?"cross":"circle",s(!c),f[0]===f[1]&&f[0]===f[2]&&"empty"!==f[0]?h("".concat(f[0]," won")):"empty"!==f[3]&&f[3]===f[4]&&f[4]===f[5]?h("".concat(f[3]," won")):"empty"!==f[6]&&f[6]===f[7]&&f[7]===f[8]?h("".concat(f[6]," won")):"empty"!==f[0]&&f[0]===f[3]&&f[3]===f[6]?h("".concat(f[0]," won")):"empty"!==f[1]&&f[1]===f[4]&&f[4]===f[7]?h("".concat(f[1]," won")):"empty"!==f[2]&&f[2]===f[5]&&f[5]===f[8]?h("".concat(f[2]," won")):"empty"!==f[0]&&f[0]===f[4]&&f[4]===f[8]?h("".concat(f[0]," won")):"empty"!==f[2]&&f[2]===f[4]&&f[4]===f[6]&&h("".concat(f[2]," won")),void w())},w=function(){var e=0;f.forEach((function(t){"empty"!==t&&e++})),9===e&&h("All Filled Try Again")};return Object(l.jsxs)(b.a,{className:"p-5",children:[Object(l.jsx)(u.a,{position:"bottom-center"}),Object(l.jsx)(m.a,{children:Object(l.jsxs)(d.a,{md:"6",className:"offset-md-3",children:[i?Object(l.jsxs)("div",{className:"mx-2",children:[Object(l.jsx)("h1",{className:"text-success text-center text-uppercase",children:i}),Object(l.jsx)(p.a,{color:"success",block:!0,onClick:function(){s(!1),h(""),f.fill("empty",0,9)},className:"mb-2",children:"Reload the Game"})]}):Object(l.jsxs)("h1",{className:"text-warning text-center",children:[c?"Cross":"Circle"," turns"]}),Object(l.jsx)("div",{className:"grid",children:f.map((function(e,t){return Object(l.jsx)(x.a,{onClick:function(){return y(t)},children:Object(l.jsx)(O.a,{className:"box",children:Object(l.jsx)(j,{name:e})})})}))})]})})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),y()}},[[23,1,2]]]);
//# sourceMappingURL=main.2b5878dc.chunk.js.map