(this["webpackJsonpexcel-sales"]=this["webpackJsonpexcel-sales"]||[]).push([[0],{146:function(n,e,t){"use strict";t.r(e);var r=t(4),c=t(2),a=t.n(c),o=t(26),i=t.n(o),s=(t(74),t.p,t(75),t(12)),u=t(62),d=t(18),l=t(8),f=t(9);function b(){var n=Object(l.a)(["\n  border-collapse: collapse;\n  width: 100%;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n\n  td,\n  th {\n    border: 2px solid #eef4ee;\n    text-align: left;\n    padding: 1.5rem;\n  }\n\n  th {\n    font-size: 1.5rem;\n  }\n\n  tr {\n    background-color: #fff;\n  }\n  tr:nth-child(even) {\n    background-color: #eef4ee;\n  }\n"]);return b=function(){return n},n}function j(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  h2 {\n    font-size: 1.75rem;\n  }\n  h3 {\n    font-weight: normal;\n  }\n\n  span {\n    margin-right: 3rem;\n  }\n"]);return j=function(){return n},n}function g(){var n=Object(l.a)(["\n  padding: 2rem 0rem;\n  font-weight: bolder;\n  color: #ed5757;\n"]);return g=function(){return n},n}function h(){var n=Object(l.a)(["\n  padding: 0.6rem 1.2rem;\n  display: block;\n  width: max-content;\n  background: #61988e;\n  border: none;\n  color: #fff;\n  font-weight: bold;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.3s;\n  &:hover {\n    background: #3e746a;\n    color: #fff;\n  }\n  margin-top: 1rem;\n"]);return h=function(){return n},n}function p(){var n=Object(l.a)(["\n  padding: 0.6rem 1.5rem;\n  width: max-content;\n  background: #61988e;\n  border: none;\n  color: #fff;\n  font-weight: bold;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.3s;\n  &:hover {\n    background: #3e746a;\n    color: #fff;\n  }\n"]);return p=function(){return n},n}function v(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  background: #dff2df;\n  justify-content: start;\n  color: #575757;\n  padding: 3rem 3rem;\n\n  h2 {\n    padding: 0;\n    margin: 0.5rem 0rem;\n  }\n"]);return v=function(){return n},n}function m(){var n=Object(l.a)(['\n  font-family: "Noto Sans SC", sans-serif;\n  padding: 0.5rem 1.5rem;\n  font-size: 1rem;\n  border: none;\n  background: #61988e;\n  color: white;\n  cursor: pointer;\n  transition: all 0.5s;\n  &:active,\n  :focus,\n  :hover {\n    background: #2f5f56;\n  }\n']);return m=function(){return n},n}function O(){var n=Object(l.a)(["\n  width: 25rem;\n"]);return O=function(){return n},n}function x(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-right: 5rem;\n  width: 20rem;\n"]);return x=function(){return n},n}function w(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  background: #eef4ee;\n  height: 23rem;\n  justify-content: start;\n  color: #575757;\n  padding: 2rem 3rem;\n\n  h2 {\n    padding: 0;\n    margin: 0.5rem 0rem;\n  }\n"]);return w=function(){return n},n}function D(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  height: 2.5rem;\n  padding: 2rem;\n  background: #fafafa;\n  align-items: center;\n  svg {\n    height: 100%;\n    width: 4rem;\n  }\n  p {\n    font-weight: bold;\n    font-size: 2rem;\n    color: #2e7d32;\n  }\n"]);return D=function(){return n},n}function y(){var n=Object(l.a)(["\n  padding: 3rem 0;\n"]);return y=function(){return n},n}function S(){var n=Object(l.a)(["\n  input {\n    width: 100%;\n    height: 100%;\n  }\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 3rem;\n  border-width: 2px;\n  border-radius: 2px;\n  border-color: ",";\n  border-style: dashed;\n  background-color: #fafafa;\n  color: #bdbdbd;\n  outline: none;\n  cursor: pointer;\n  transition: border 0.24s ease-in-out;\n"]);return S=function(){return n},n}function k(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n"]);return k=function(){return n},n}function F(){var n=Object(l.a)(['\n  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;400;700&display=swap");\n  height: 100vh;\n  padding: 5rem 10rem;\n  font-family: "Noto Sans SC", sans-serif;\n']);return F=function(){return n},n}var A=f.a.div(F()),C=(f.a.div(k()),f.a.div(S(),(function(n){return z(n)}))),z=function(n){return n.isDragAccept?"#00e676":n.isDragReject?"#ff1744":n.isDragActive?"#2196f3":"#eeeeee"},N=(f.a.div(y()),f.a.div(D()),f.a.div(w()),f.a.div(x()),f.a.div(O()),f.a.button(m()),f.a.div(v()),f.a.button(p()),f.a.button(h())),R=(f.a.div(g()),f.a.div(j()),f.a.table(b()),t(49)),B=t.n(R),P=(t(83),function(n){var e=n.saleData,t=n.replaceData,a=Object(c.useState)(new Date),o=Object(s.a)(a,2),i=o[0],l=o[1],f=Object(c.useState)(new Date),b=Object(s.a)(f,2),j=b[0],g=b[1],h=Object(c.useState)(),p=Object(s.a)(h,2),v=p[0],m=p[1];Object(c.useEffect)((function(){var n={};t.map((function(e){n[e["\u4ea7\u54c1\u540d\u79f0"]]={brand:e["\u66ff\u4ee3\u54c1\u79cd"],price:e["\u5355\u4ef7"]}})),m(n)}),[t]);var O=function(n){var e=JSON.parse(JSON.stringify(n)),t="",r="",c="",a=0,o=0,s=0;for(var u in e)switch(e[u].v){case"\u4ea7\u54c1\u540d\u79f0":t=u.charAt(0);break;case"\u6570\u91cf":c=u.charAt(0);break;case"\u5355\u4ef7":r=u.charAt(0);break;case"\u955c\u7247\u7c7b\u5408\u8ba1\u6570\u91cf\uff1a":a=u.substring(1)}for(var d=9;"\u955c\u7247\u7c7b\u5408\u8ba1\u6570\u91cf\uff1a"!=e["A".concat(d)].v;){console.log(e["".concat(t).concat(d)]),console.log(v[e["".concat(t).concat(d)].v]),v[e["".concat(t).concat(d)].v]&&(e["".concat(r).concat(d)]={v:v[e["".concat(t).concat(d)].v].price},e["".concat(t).concat(d)].v=v[e["".concat(t).concat(d)].v].brand);var l=parseInt(e["".concat(c).concat(d)].v);o+=l*parseFloat(e["".concat(r).concat(d)].v),s+=l,d++}e.K5={v:i.toLocaleDateString("zh-cn")},e.K6={v:j.toLocaleDateString("zh-cn")};var f=(new Date).getFullYear()+"/"+((new Date).getMonth()+1)+"/"+(new Date).getDate()+" "+(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds();return e.K7={v:f},e["F".concat(a)]={v:s.toString()},e["".concat("U").concat(a)]={v:o.toString()},e.R5={v:"XZJQZYY539"},e.R6={v:"\u897f\u85cf\u519b\u533a\u603b\u533b\u9662"},e};return Object(r.jsxs)("div",{style:{marginBottom:100},children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"\u5f00\u5355\u65e5\u671f"}),Object(r.jsx)(B.a,{selected:i,onChange:function(n){return l(n)}})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"\u51fa\u8d27\u65e5\u671f"}),Object(r.jsx)(B.a,{selected:j,onChange:function(n){return g(n)}})]}),Object(r.jsx)(N,{onClick:function(){if(""!==e){var n={Sheets:{sale:O(e)},SheetNames:["sale"]},t=d.write(n,{bookType:"xlsx",type:"array"}),r=new Blob([t],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});u.saveAs(r,"\u51fa\u8d27\u5355_\u65b0.xlsx")}else alert("\u65e0\u6570\u636e")},children:"\u5bfc\u51fa"})]})}),I=function(n){var e=n.children;return Object(r.jsx)(A,{children:e})},J=t(17),L=t(35),T=function(n){var e=Object(c.useState)(),t=Object(s.a)(e,2),a=(t[0],t[1]),o=Object(c.useCallback)((function(e){var t=e[0];if(t){t.name;var r=new FileReader;r.onload=function(e){var t=e.target.result,r=d.read(t,{type:"binary",cellDates:!0}),c=r.SheetNames,o=d.utils.sheet_to_json(r.Sheets[c[0]],{dateNF:"mm/dd/yyyy;@"});a(o),n.onDropFile(o)},r.readAsBinaryString(t)}}),[]),i=Object(L.a)({onDrop:o,accept:".xlsx, .xls"}),u=i.isDragActive,l=i.getRootProps,f=i.getInputProps;i.isDragReject,i.isDragAccepted,i.acceptedFiles,i.rejectedFiles;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:"\u4ea7\u54c1\u4ee3\u66ff"}),Object(r.jsxs)(C,Object(J.a)(Object(J.a)({},l()),{},{children:[Object(r.jsx)("input",Object(J.a)({},f())),!u&&"\u70b9\u51fb\u8fd9\u91cc\u6216\u8005\u62d6\u62fd\u6587\u4ef6\u81f3\u8fd9\u91cc\u8fdb\u884c\u4e0a\u4f20",u&&"\u653e\u4e0b\u6587\u4ef6"]}))]})},K=function(n){var e=Object(c.useState)(),t=Object(s.a)(e,2),a=(t[0],t[1]),o=Object(c.useCallback)((function(e){var t=e[0];if(t){t.name;var r=new FileReader;r.onload=function(e){var t=e.target.result,r=d.read(t,{type:"binary",cellDates:!0}),c=r.SheetNames,o=r.Sheets[c[0]];a(o),n.onDropFile(o)},r.readAsBinaryString(t)}}),[]),i=Object(L.a)({onDrop:o,accept:".xlsx, .xls"}),u=i.isDragActive,l=i.getRootProps,f=i.getInputProps;i.isDragReject,i.isDragAccepted,i.acceptedFiles,i.rejectedFiles;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:"\u51fa\u8d27\u5355"}),Object(r.jsxs)(C,Object(J.a)(Object(J.a)({},l()),{},{children:[Object(r.jsx)("input",Object(J.a)({},f())),!u&&"\u70b9\u51fb\u8fd9\u91cc\u6216\u8005\u62d6\u62fd\u6587\u4ef6\u81f3\u8fd9\u91cc\u8fdb\u884c\u4e0a\u4f20",u&&"\u653e\u4e0b\u6587\u4ef6"]}))]})};function M(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{style:{fontSize:"3rem"},children:"\u51fa\u8d27\u5355\u4fee\u6539"})})}var Y=function(){var n=Object(c.useState)(),e=Object(s.a)(n,2),t=e[0],a=e[1],o=Object(c.useState)(),i=Object(s.a)(o,2),u=i[0],d=i[1];return console.log("saleData",t),console.log("replaceData",u),Object(r.jsxs)("div",{children:[Object(r.jsx)(K,{onDropFile:function(n){a(n)}}),Object(r.jsx)(T,{onDropFile:function(n){d(n)}}),void 0===u||void 0===t?Object(r.jsx)("div",{children:Object(r.jsx)("p",{})}):Object(r.jsx)(P,{saleData:t,replaceData:u})]})};var _=function(){return Object(r.jsxs)(I,{children:[Object(r.jsx)(M,{}),Object(r.jsx)(Y,{})]})},E=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,151)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),a(n),o(n)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(_,{})}),document.getElementById("root")),E()},55:function(n,e){},74:function(n,e,t){},75:function(n,e,t){},80:function(n,e){},81:function(n,e){}},[[146,1,2]]]);
//# sourceMappingURL=main.cd67d069.chunk.js.map