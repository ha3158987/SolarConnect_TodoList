(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{175:function(n,e,t){"use strict";t.r(e);var o,c=t(8),d=t(0),i=t.n(d),r=t(21),a=t.n(r),s=t(9),l=(t(98),t(180)),b=t(181),j=t(178),u=t(40),x=t(67),p=t(6);function f(n){return Object(p.jsx)(x.a,{style:Object(u.a)({fontSize:"large"===n.size?48:24},n.style),spin:!0})}var O=Object(s.c)(l.a)(o||(o=Object(c.a)(["\n\tbackground-color: ",";\n"])),(function(n){return n["data-mask"]?"rgba(0, 0, 0, 0.1)":"transparent"}));function g(n){var e=n.tip,t=n.size,o=n.delay,c=n.style,d=n.mask,i=void 0!==d&&d;return Object(p.jsx)(O,{className:"spinner-wrap",justify:"center",align:"middle",style:c,"data-mask":i,children:Object(p.jsx)(b.a,{children:Object(p.jsx)(j.a,{indicator:Object(p.jsx)(f,{size:t}),delay:o,tip:e,size:t})})})}g.defaultProps={tip:"\ub85c\ub529\uc911\uc785\ub2c8\ub2e4.",size:"large",delay:0,style:{},mask:!1};var m,h=t(29),v=[],y=s.c.div(m||(m=Object(c.a)(["\n  width: 70%;\n  height: 800px;\n\n  min-width: 360px;\n  max-width: 700px;\n\n  position: relative;\n  background: white;\n  border-radius: 30px;\n  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);\n\n  margin: 0 auto;\n\n  margin-top: 96px;\n  margin-bottom: 32px;\n  display: flex;\n  flex-direction: column;\n"])));function z(n){return Object(p.jsx)(y,{children:n.children})}var T,S,w,k,I,N,F,D,C,E,J,W,B,M,P,U,Y,q,A,G=i.a.memo(z),H=s.c.div(T||(T=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 52px;\n  padding-bottom: 24px;\n  border-bottom: 3px solid #33bb77;\n"]))),K=s.c.div(S||(S=Object(c.a)(["\n  font-size: 26px;\n  color: #119955;\n  padding-left: 10px;\n"]))),L=s.c.div(w||(w=Object(c.a)(["\n  font-size: 22px;\n  color: #119955;\n  padding-top: 5px;\n"]))),Q=function(){var n=Object(d.useState)({day:null,date:null,year:null}),e=Object(h.a)(n,2),t=e[0],o=e[1],c=function(n){return new Intl.DateTimeFormat("en-US",{month:"long"}).format(n)};return Object(d.useEffect)((function(){var n=new Date;o({day:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n.getDay()],date:"".concat(c(n)," ").concat(n.getDate(),", "),year:n.getFullYear()})}),[]),Object(p.jsxs)(H,{children:[Object(p.jsx)(L,{children:t.day}),Object(p.jsx)(K,{children:"".concat(t.date," ").concat(t.year)})]})},R=i.a.memo(Q),V=t(182),X=t(183),Z=s.c.div(k||(k=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #119955;\n  font-size: 16px;\n"]))),$=s.c.div(I||(I=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  &:hover {\n    "," {\n      display: initial;\n    }\n  }\n"])),Z),_=s.c.div(N||(N=Object(c.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 16px;\n  border: 1px solid #33bb77;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n  cursor: pointer;\n  ","\n"])),(function(n){return n.done&&Object(s.b)(F||(F=Object(c.a)(["\n      border: 1px solid #dddddd;\n      color: #dddddd;\n    "])))})),nn=s.c.div(D||(D=Object(c.a)(["\n  flex: 1;\n  font-size: 16px;\n  color: #119955;\n  ","\n"])),(function(n){return n.done&&Object(s.b)(C||(C=Object(c.a)(["\n      color: #ced4da;\n      text-decoration: line-through;\n    "])))})),en=s.c.div(E||(E=Object(c.a)(["\n  font-size: 16px;\n  color: #119955;\n  padding-right: 1rem;\n  ","\n"])),(function(n){return n.done&&Object(s.b)(J||(J=Object(c.a)(["\n      color: #ced4da;\n      text-decoration: line-through;\n    "])))})),tn=function(n){var e=n.toggleTodo,t=n.removeTodo,o=n.todo;return Object(p.jsxs)($,{children:[Object(p.jsx)(_,{done:o.done,onClick:function(){e(o.id)},children:o.done&&Object(p.jsx)(V.a,{})}),Object(p.jsx)(nn,{done:o.done,children:o.text}),Object(p.jsx)(en,{done:o.done,children:o.due}),Object(p.jsx)(Z,{onClick:function(){t(o.id)},children:Object(p.jsx)(X.a,{})})]})},on=i.a.memo(tn),cn=s.c.div(W||(W=Object(c.a)(["\n  flex: 1;\n  padding: 20px 32px;\n  padding-bottom: 48px;\n  overflow-y: auto;\n"]))),dn=function(n){var e=n.toggleTodo,t=n.removeTodo,o=n.todos;return Object(p.jsx)(cn,{children:o&&o.map((function(n){return Object(p.jsx)(on,{toggleTodo:e,removeTodo:t,todo:n},n.id)}))})},rn=i.a.memo(dn),an=t(184),sn=t(179),ln=s.c.button(B||(B=Object(c.a)(["\n  background: #33bb77;\n  width: 50px;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  font-size: 60px;\n  left: 50%;\n  transform: translate(50%, 0%);\n  color: white;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),bn=s.c.div(M||(M=Object(c.a)(["\n  width: 100%;\n  border-bottom: 1px solid #eeeeee;\n"]))),jn=s.c.form(P||(P=Object(c.a)(["\n  display: flex;\n  background: #eeeeee;\n  padding-left: 40px;\n  padding-top: 36px;\n  padding-right: 60px;\n  padding-bottom: 36px;\n"]))),un=s.c.input(U||(U=Object(c.a)(["\n  padding: 12px;\n  border: 1px solid #dddddd;\n  width: 60%;\n  outline: none;\n  font-size: 21px;\n  box-sizing: border-box;\n  color: #119955;\n  &::placeholder {\n    color: #dddddd;\n    font-size: 16px;\n  }\n"]))),xn=Object(s.c)(sn.a)(Y||(Y=Object(c.a)(["\n  padding: 12px;\n  font-size: 21px;\n  box-sizing: border-box;\n  margin-left: 1rem;\n"]))),pn=function(n){var e=n.nextId,t=n.createTodo,o=n.incrementNextId,c=Object(d.useState)(!1),i=Object(h.a)(c,2),r=i[0],a=i[1],s=Object(d.useState)(""),l=Object(h.a)(s,2),b=l[0],j=l[1],u=Object(d.useState)(""),x=Object(h.a)(u,2),f=x[0],O=x[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(bn,{children:Object(p.jsxs)(jn,{onSubmit:function(n){n.preventDefault(),t({id:e,text:b,done:!1,due:f}),o(),j(""),a(!1)},children:[Object(p.jsx)(un,{autoFocus:!0,placeholder:"What's need to be done?",onChange:function(n){return j(n.target.value)},value:b}),Object(p.jsx)(xn,{placeholder:"Due date",onChange:function(n,e){O(e)}}),Object(p.jsx)(ln,{onClick:function(){return a(!r)},open:r,children:Object(p.jsx)(an.a,{})})]})})})},fn=i.a.memo(pn),On=s.c.div(q||(q=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 24px;\n  padding-bottom: 24px;\n"]))),gn=s.c.div(A||(A=Object(c.a)(["\n  color: #33bb77;\n  font-size: 18px;\n"]))),mn=function(n){var e=n.todos.filter((function(n){return!n.done}));return Object(p.jsx)(On,{children:Object(p.jsxs)(gn,{className:"tasks-left",children:[e.length," items left"]})})},hn=i.a.memo(mn),vn=function(){var n=function(){var n=Object(d.useState)(v),e=Object(h.a)(n,2),t=e[0],o=e[1],c=0;Object(d.useEffect)((function(){r()}),[]),Object(d.useEffect)((function(){a()}),[t]);var i=function(){c+=1},r=function(){var n=localStorage.getItem("todos");void 0===n&&(n=""),(v=JSON.parse(n))&&v.length>=1&&i(),o(v)},a=function(){localStorage.setItem("todos",JSON.stringify(t))};return{todoState:t,nextIdState:c,incrementNextId:i,toggleTodo:function(n){var e=t.map((function(e){return e.id===n&&(e.done=!e.done),e}));o(e)},removeTodo:function(n){o((function(e){return e.filter((function(e){return e.id!==n}))}))},createTodo:function(n){var e=t.length+1;o((function(t){return t.concat(Object(u.a)(Object(u.a)({},n),{},{id:e}))}))}}}(),e=n.todoState,t=n.nextIdState,o=n.incrementNextId,c=n.toggleTodo,i=n.removeTodo,r=n.createTodo;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(G,{children:[Object(p.jsx)(R,{}),Object(p.jsx)(fn,{nextId:t,createTodo:r,incrementNextId:o}),Object(p.jsx)(rn,{toggleTodo:c,removeTodo:i,todos:e}),Object(p.jsx)(hn,{todos:e})]})})};var yn,zn=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(vn,{})})},Tn=Object(s.a)(yn||(yn=Object(c.a)(["\n  body {\n    background: #eeeeee;\n  }\n"])));a.a.render(Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Tn,{}),Object(p.jsx)(zn,{})]}),document.getElementById("root"))}},[[175,1,2]]]);
//# sourceMappingURL=main.422c44af.chunk.js.map