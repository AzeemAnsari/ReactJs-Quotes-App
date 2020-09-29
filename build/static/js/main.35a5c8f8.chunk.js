(this.webpackJsonpadvice=this.webpackJsonpadvice||[]).push([[0],{19:function(n,e,t){n.exports=t.p+"static/media/bg.34fe3057.jpg"},24:function(n,e,t){n.exports=t.p+"static/media/logo.59c8beed.png"},26:function(n,e,t){n.exports=t(48)},48:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(18),i=t.n(o),c=t(4),u=t(25),l=t(2),d=t(3),s=t(19),f=t.n(s);function g(){var n=Object(l.a)(["\n  text-align: right;\n  margin-top: 1rem;\n"]);return g=function(){return n},n}function b(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0;\n  justify-content: center;\n  font-style: italic;\n  @media only screen and (max-width: 600px) {\n    font-size: 1.7rem;\n  }\n  @media only screen and (max-width: 320px) {\n    font-size: 1.2rem;\n  }\n"]);return b=function(){return n},n}function m(){var n=Object(l.a)(["\n  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n  width: 40%;\n  border-radius: 5px;\n  padding: 2%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  text-align: center;\n  @media only screen and (max-width: 600px) {\n    width: 80%;\n    padding: 5%;\n  }\n"]);return m=function(){return n},n}function p(){var n=Object(l.a)(["\n  font-size: 18px;\n  font-family: 'Baloo 2', cursive;\n  margin-top: 1rem;\n  padding: 15px 30px;\n  border-radius: 30px;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  border: 0;\n  outline: 0;\n  box-shadow: 0 5px 10px 0 rgba(205, 209, 215, 0.8);\n  background: linear-gradient(to right, #cb3066, #16bffd);\n  color: #fff;\n  background-size: 300% 300%;\n  animation: "," 2.5s ease infinite;\n  cursor: pointer;\n  &:focus {\n    outline: none;\n  }\n"]);return p=function(){return n},n}function h(){var n=Object(l.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]);return h=function(){return n},n}function x(){var n=Object(l.a)(["\n  width: 80%;\n  margin: auto;\n  padding-top: 2%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  @media only screen and (max-width: 600px) {\n    text-align: center;\n    padding: 5% 5% 0;\n    width: 100%;\n  }\n"]);return x=function(){return n},n}function v(){var n=Object(l.a)(["\n  height: 100%;\n  position: relative;\n  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),\n    url(",") no-repeat center / cover;\n"]);return v=function(){return n},n}function j(){var n=Object(l.a)(["\n*{\n    box-sizing:border-box;\n}\n#root,\nhtml,\nbody{\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  box-sizing: border-box;\n  font-family: 'Baloo 2', cursive;\n}\n"]);return j=function(){return n},n}var O=Object(d.a)(j()),E=d.b.div(v(),f.a),y=d.b.div(x()),w=Object(d.c)(h()),k=d.b.button(p(),w),z=d.b.div(m()),M=d.b.h1(b()),A=d.b.div(g()),L=function(n){var e=n.Logo;return r.a.createElement(y,null,r.a.createElement("img",{src:e,alt:"Azeem Ansari"}),r.a.createElement("a",{href:"https://github.com/AzeemAnsari",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.a,{size:"2em",color:"white"})))},S=function(n){var e=n.loading,t=n.fetchQuote,a=n.errorMsg;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{onClick:t},e?"Loading...":a?"Reload":"New Quote"))},B=function(n){var e=n.children,t=n.cardText,a=n.author,o=n.errorMsg,i=n.loading;return r.a.createElement(z,null,r.a.createElement(M,null,t),o||i?"":null===a?r.a.createElement(A,null,"- Unknow"):r.a.createElement(A,null," - ",a),e)},Q=t(23),C=t.n(Q),F=t(24),J=t.n(F),T=function(){var n=Object(a.useState)([]),e=Object(c.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)(""),u=Object(c.a)(i,2),l=u[0],d=u[1],s=Object(a.useState)(null),f=Object(c.a)(s,2),g=f[0],b=f[1],m=Object(a.useState)(!1),p=Object(c.a)(m,2),h=p[0],x=p[1];Object(a.useEffect)((function(){v()}),[]);var v=function(){x(!0),b(null),C.a.get("https://type.fit/api/quotes").then((function(n){x(!1);var e=Math.floor(Math.random()*n.data.length);o(n.data[e].text),d(n.data[e].author),void 0===n.data[e].text&&b(!0)}))},j=h?"Loading...":g?"Oops! Check your internet connection and try again.":"\u201c".concat(t,"\u201d");return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null,r.a.createElement(L,{Logo:J.a}),r.a.createElement(B,{cardText:j,author:l,errorMsg:g,loading:h},r.a.createElement(S,{loading:h,errorMsg:g,fetchQuote:v}))),r.a.createElement(O,null))};i.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.35a5c8f8.chunk.js.map