(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{60:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t.n(c),a=t(36),i=t.n(a),o=t(10),s=t(5),b=t(22),d=t(8),l=t(41),u=t(26);t(46),t(61),t(62);u.a.initializeApp({apiKey:"AIzaSyDGaLnbahN2S2K-zc4_lhIga3xDbs2LlA4",authDomain:"nwitter-4b09b.firebaseapp.com",projectId:"nwitter-4b09b",storageBucket:"nwitter-4b09b.appspot.com",messagingSenderId:"930402156559",appId:"1:930402156559:web:70c8d773259fb070a5e37a"});var j,p,x,f,O,h,g,m,v,w,y,k,S,C,U,D,N,I,A,P,z,F,L,M,B,E,T,G,H,R,W,Y,q,J,K,_,Q,V,X,Z,$,ee,ne,te,ce,re=u.a,ae=u.a.auth(),ie=u.a.firestore(),oe=u.a.storage(),se=t(12),be=t.n(se),de=t(19),le=t(3),ue=t(14),je=t(21),pe=t(1),xe=le.c.div(j||(j=Object(s.a)(["\n  display: flex;\n  padding: 12px;\n  border: 1px solid #333333;\n  gap: 13px;\n  &:last-child {\n    border-bottom: 0px;\n  }\n"]))),fe=le.c.img(p||(p=Object(s.a)(["\n  width: 505px;\n  height: 285px;\n  border-radius: 13px;\n  object-fit: cover;\n  object-position: center top;\n  margin-top: 10px;\n"]))),Oe=le.c.div(x||(x=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),he=le.c.div(f||(f=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  gap: 5px;\n  right: 0;\n  top: 0px;\n  background-color: black;\n  box-shadow: white 0px 1px 3px 1px;\n  border-radius: 8px;\n"]))),ge=le.c.span(O||(O=Object(s.a)(["\n  white-space: normal;\n  word-break: break-all;\n  font-size: ","px;\n"])),18),me=le.c.div(h||(h=Object(s.a)(["\n  width: 56px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #ff7979;\n"]))),ve=le.c.div(g||(g=Object(s.a)(["\n  width: 505px;\n  position: relative;\n"]))),we=le.c.div(m||(m=Object(s.a)(["\n  /* overflow \ub97c ... \uc73c\ub85c \ud558\uae30\uc704\ud574. */\n  width: 430px;\n  display: flex;\n  gap: 5px;\n"]))),ye=le.c.div(v||(v=Object(s.a)(["\n  position: relative;\n  width: 505px;\n"]))),ke=le.c.h2(w||(w=Object(s.a)(["\n  font-weight: 600;\n"]))),Se=le.c.h4(y||(y=Object(s.a)(["\n  color: rgba(255, 255, 255, 0.5);\n"]))),Ce=le.c.button(k||(k=Object(s.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  background-color: black;\n  border: none;\n  color: #ffff;\n  border-radius: 50%;\n  &:hover {\n    background-color: rgba(255, 121, 121, 0.1);\n    color: #fa7b79;\n  }\n"]))),Ue=le.c.span(S||(S=Object(s.a)(["\n  text-align: center;\n  writing-mode: tb-rl;\n  font-size: 50px;\n  font-weight: 600;\n"]))),De=le.c.form(C||(C=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),Ne=le.c.input(U||(U=Object(s.a)(["\n  background-color: #ff7979;\n  padding: 10px;\n  border-radius: 30px;\n  text-align: center;\n"]))),Ie=le.c.button(D||(D=Object(s.a)(["\n  background-color: #ff7979;\n  padding: 10px;\n  border: none;\n  color: #ffff;\n  border-radius: 30px;\n"]))),Ae=le.c.input(N||(N=Object(s.a)(["\n  border: 4px dotted #bcbcbc;\n  padding: 10px;\n"]))),Pe=le.c.button(I||(I=Object(s.a)(["\n  color: #ffff;\n  background-color: black;\n  border: none;\n  display: flex;\n  gap: 10px;\n  padding: 10px;\n  border-radius: 30px;\n"]))),ze=function(e){var n=e.nweetObj,t=e.isOwer,r=Object(c.useState)(!1),a=Object(o.a)(r,2),i=a[0],s=a[1],d=Object(c.useState)(n.text),l=Object(o.a)(d,2),u=l[0],j=l[1],p=Object(c.useState)(!1),x=Object(o.a)(p,2),f=x[0],O=x[1],h=function(){s((function(e){return!e})),O(!1)},g=function(){var e=Object(de.a)(be.a.mark((function e(){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,ie.doc("nweets/".concat(n.id)).delete();case 4:if(""===n.attchmentUrl){e.next=7;break}return e.next=7,oe.refFromURL(n.attchmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(de.a)(be.a.mark((function e(t){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.doc("nweets/".concat(n.id)).update({text:u});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(pe.jsx)("div",{children:i?Object(pe.jsxs)(xe,{children:[Object(pe.jsx)(Ue,{children:"EDIT"}),Object(pe.jsxs)(Oe,{children:[Object(pe.jsxs)(De,{onSubmit:m,children:[Object(pe.jsx)(Ae,{onChange:function(e){var n=e.target.value;j(n)},value:u,required:!0}),n.attachmentUrl&&Object(pe.jsx)(fe,{src:n.attachmentUrl}),Object(pe.jsx)(Ne,{type:"submit",value:"Update Nweet"})]}),Object(pe.jsx)(Ie,{onClick:h,children:"Cancel"})]})]}):Object(pe.jsx)(pe.Fragment,{children:Object(pe.jsxs)(xe,{children:[Object(pe.jsx)(me,{}),Object(pe.jsxs)(Oe,{children:[Object(pe.jsxs)(ve,{children:[Object(pe.jsxs)(we,{children:[Object(pe.jsx)(ke,{children:n.creatorName}),Object(pe.jsxs)(Se,{children:["@",n.creatorId]}),Object(pe.jsx)(Se,{children:"\xb7"}),Object(pe.jsx)(Se,{children:function(e){var n=new Date,t=new Date(e);return n.getFullYear()!==t.getFullYear()?"".concat(n.getFullYear()-t.getFullYear(),"\ub144"):n.getMonth()!==t.getMonth()?"".concat(n.getMonth()-t.getMonth(),"\uc6d4"):n.getDay()!==t.getDay()?"".concat(n.getDay()-t.getDay(),"\uc77c"):n.getHours()!==t.getHours()?"".concat(n.getHours()-t.getHours(),"\uc2dc"):n.getMinutes()!==t.getMinutes()?"".concat(n.getMinutes()-t.getMinutes(),"\ubd84"):"".concat(n.getSeconds()-t.getSeconds(),"\ucd08")}(n.createAt)})]}),t&&Object(pe.jsx)(Ce,{onClick:function(){O((function(e){return!e}))},children:Object(pe.jsx)(ue.a,{icon:je.a})})]}),Object(pe.jsxs)(ye,{children:[Object(pe.jsx)(ge,{children:n.text}),t&&f&&Object(pe.jsxs)(he,{children:[Object(pe.jsxs)(Pe,{onClick:g,children:[Object(pe.jsx)(ue.a,{icon:je.e}),Object(pe.jsx)("span",{children:"Delete Nweet"})]}),Object(pe.jsxs)(Pe,{onClick:h,children:[Object(pe.jsx)(ue.a,{icon:je.b}),Object(pe.jsx)("span",{children:"Update Nweet"})]})]})]}),n.attachmentUrl&&Object(pe.jsx)(b.b,{children:Object(pe.jsx)(fe,{src:n.attachmentUrl})})]})]})})},n.id)},Fe=t(64),Le=le.c.form(A||(A=Object(s.a)(["\n  width: 505px;\n  display: flex;\n  flex-direction: column;\n"]))),Me=le.c.input(P||(P=Object(s.a)(["\n  background-color: #ff7979;\n  padding: 10px;\n  border-radius: 30px;\n  &:hover {\n    background-color: rgba(255, 121, 121, 0.8);\n  }\n"]))),Be=le.c.div(z||(z=Object(s.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #ff7979;\n"]))),Ee=le.c.div(F||(F=Object(s.a)(["\n  display: flex;\n  gap: 12px;\n  padding: 10px;\n  border: 1px solid #333333;\n  border-bottom: 0px;\n"]))),Te=le.c.img(L||(L=Object(s.a)(["\n  width: 505px;\n  height: 285px;\n  border-radius: 13px;\n  object-fit: cover;\n  object-position: center top;\n"]))),Ge=le.c.div(M||(M=Object(s.a)(["\n  width: 505px;\n  margin-top: 10px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"]))),He=le.c.div(B||(B=Object(s.a)(["\n  margin-top: 40px;\n  position: relative;\n"]))),Re=le.c.button(E||(E=Object(s.a)(["\n  position: absolute;\n  left: 5px;\n  top: 5px;\n  border: none;\n  padding: 8px;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n"]))),We=le.c.label(T||(T=Object(s.a)(["\n  display: flex;\n  gap: 3px;\n  color : #ff7979;\n"]))),Ye=le.c.input(G||(G=Object(s.a)(["\n  width: 0;\n  height: 0;\n"]))),qe=function(e){var n=e.userObj,t=Object(c.useState)(""),r=Object(o.a)(t,2),a=r[0],i=r[1],s=Object(c.useState)(""),b=Object(o.a)(s,2),d=b[0],l=b[1],u=function(){var e=Object(de.a)(be.a.mark((function e(t){var c,r,o,s;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==a){e.next=3;break}return e.abrupt("return");case 3:if(c="",""===d){e.next=12;break}return r=oe.ref().child("".concat(n.uid,"/").concat(Object(Fe.a)())),e.next=8,r.putString(d,"data_url");case 8:return o=e.sent,e.next=11,o.ref.getDownloadURL();case 11:c=e.sent;case 12:return s={text:a,createAt:Date.now(),creatorId:n.uid,creatorName:n.displayName,attachmentUrl:c},e.next=15,ie.collection("nweets").add(s);case 15:i(""),l("");case 17:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(pe.jsxs)(Ee,{children:[Object(pe.jsx)(Be,{}),Object(pe.jsxs)(Le,{onSubmit:u,children:[Object(pe.jsx)("input",{value:a,onChange:function(e){e.preventDefault();var n=e.target.value;i(n)},type:"text",placeholder:"What's on your mind?",maxLength:120}),d&&Object(pe.jsxs)(He,{children:[Object(pe.jsx)(Te,{src:d}),Object(pe.jsx)(Re,{onClick:function(){return l("")},children:Object(pe.jsx)(ue.a,{icon:je.d,color:"white"})})]}),Object(pe.jsxs)(Ge,{children:[Object(pe.jsxs)(We,{htmlFor:"attach-file",children:[Object(pe.jsx)("span",{children:"Add Photos"}),Object(pe.jsx)(ue.a,{icon:je.c})]}),Object(pe.jsx)(Ye,{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var n=e.target.files[0],t=new FileReader;t.onloadend=function(e){var n=e.currentTarget.result;l(n)},Boolean(n)&&t.readAsDataURL(n)}}),Object(pe.jsx)(Me,{type:"submit",value:"Nweet"})]})]})]})},Je=le.c.div(H||(H=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  color: #ffff;\n"]))),Ke=function(e){var n=e.userObj,t=Object(c.useState)([]),r=Object(o.a)(t,2),a=r[0],i=r[1];return Object(c.useEffect)((function(){ie.collection("nweets").orderBy("createAt","desc").onSnapshot((function(e){var n=e.docs.map((function(e){return Object(l.a)({id:e.id},e.data())}));i(n)}))}),[]),Object(pe.jsxs)(Je,{children:[Object(pe.jsx)(qe,{userObj:n}),Object(pe.jsx)("div",{children:a.map((function(e){return Object(pe.jsx)(ze,{nweetObj:e,isOwer:e.creatorId===n.uid},e.id)}))})]})},_e=le.c.form(R||(R=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n  gap: 10px;\n"]))),Qe=le.c.input(W||(W=Object(s.a)(["\n  background-color: ",";\n  border-radius: 30px;\n  color: ",";\n  text-align: ",";\n  &:hover {\n    background-color: ",";\n  }\n  padding: 10px;\n"])),(function(e){return e.inputType?"#ff7979":"white"}),(function(e){return e.inputType?"#ffff":"black"}),(function(e){return e.inputType?"center":""}),(function(e){return e.inputType?"rgba(255,121,121,0.9)":"white"})),Ve=le.c.div(Y||(Y=Object(s.a)(["\n  text-align: center;\n  text-decoration: underline;\n"]))),Xe=function(){var e=Object(c.useState)(""),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),i=Object(o.a)(a,2),s=i[0],b=i[1],d=Object(c.useState)(!1),l=Object(o.a)(d,2),u=l[0],j=l[1],p=Object(c.useState)(""),x=Object(o.a)(p,2),f=x[0],O=x[1],h=function(e){var n=e.target,t=n.name,c=n.value;"email"===t?r(c):"password"===t&&b(c)},g=function(){var e=Object(de.a)(be.a.mark((function e(n){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,!u){e.next=7;break}return e.next=5,ae.createUserWithEmailAndPassword(t,s);case 5:e.next=9;break;case 7:return e.next=9,ae.signInWithEmailAndPassword(t,s);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),O(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}();return Object(pe.jsxs)("div",{children:[Object(pe.jsxs)(_e,{onSubmit:g,children:[Object(pe.jsx)(Qe,{name:"email",type:"email",placeholder:"Eamil",required:!0,value:t,onChange:h}),Object(pe.jsx)(Qe,{name:"password",type:"password",placeholder:"Password",required:!0,value:s,onChange:h}),Object(pe.jsx)(Qe,{type:"submit",value:u?"Create Account":"Log In",inputType:"submit"}),Object(pe.jsx)("br",{}),f]}),Object(pe.jsx)(Ve,{onClick:function(){return j((function(e){return!e}))},children:u?"Sign In":"Create Account"})]})},Ze=t(24),$e=le.c.button(q||(q=Object(s.a)(["\n  background-color: white;\n  border: none;\n  border-radius: 30px;\n  padding: 12px;\n  &:hover{\n    background-color: rgba(255,255,255,0.9);\n  }\n"]))),en=le.c.div(J||(J=Object(s.a)(["\n  width: 350px;\n  margin-top: 30px;\n  display: flex;\n  justify-content: space-between;\n  \n"]))),nn=function(){var e=function(){var e=Object(de.a)(be.a.mark((function e(n){var t,c;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(t=n.target.name)?c=new re.auth.GoogleAuthProvider:"github"===t&&(c=new re.auth.GithubAuthProvider),e.next=4,ae.signInWithPopup(c);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(pe.jsxs)(en,{children:[Object(pe.jsxs)($e,{onClick:e,name:"google",children:["Continue with Google ",Object(pe.jsx)(ue.a,{icon:Ze.b})]}),Object(pe.jsxs)($e,{onClick:e,name:"github",children:["Continue with Github ",Object(pe.jsx)(ue.a,{icon:Ze.a})]})]})},tn=le.c.div(K||(K=Object(s.a)(["\n  width: 100%;\n  height: 100vh;\n  display : flex;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  margin-top: 50px;\n"]))),cn=function(){return Object(pe.jsxs)(tn,{children:[Object(pe.jsx)(ue.a,{icon:Ze.c,color:"#ff7979",size:"3x",style:{marginBottom:"20px"}}),Object(pe.jsx)(Xe,{}),Object(pe.jsx)(nn,{})]})},rn=le.c.div(_||(_=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 505px;\n"]))),an=le.c.div(Q||(Q=Object(s.a)(["\n  width: 100%;\n  background-color: #ff7979;\n  padding: 10px;\n  border-radius: 30px;\n  text-align: center;\n  color: white;\n  &:hover {\n    background-color: rgba(255, 121, 121, 0.8);\n  }\n"]))),on=le.c.input(V||(V=Object(s.a)(["\n  width: 100%;\n  border: none;\n  background-color: #ffff;\n  border-radius: 30px;\n  padding: 10px;\n  margin-bottom: 10px;\n"]))),sn=le.c.form(X||(X=Object(s.a)(["\n  margin-bottom: 30px;\n"]))),bn=le.c.hr(Z||(Z=Object(s.a)(["\n  width: 100%;\n  background-color: black;\n  border-top: 1px solid #bbb;\n  border-bottom: 0px;\n  margin-bottom: 60px;\n"]))),dn=le.c.button($||($=Object(s.a)(["\n  background-color: transparent;\n  color: #ffff;\n  border: none;\n  font-size: 15px;\n"]))),ln=function(e){var n=e.userObj,t=e.refreshUser,r=Object(c.useState)(n.displayName),a=Object(o.a)(r,2),i=a[0],s=a[1],b=Object(d.f)(),l=function(){var e=Object(de.a)(be.a.mark((function e(c){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),n.displayName===i){e.next=5;break}return e.next=4,n.updateProfile({displayName:i});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(pe.jsxs)(rn,{children:[Object(pe.jsxs)(sn,{onSubmit:l,children:[Object(pe.jsx)(on,{onChange:function(e){var n=e.target.value;s(n)},type:"text",placeholder:"Display name",value:i}),Object(pe.jsx)(an,{children:Object(pe.jsx)("input",{type:"submit",value:"Update Profile"})})]}),Object(pe.jsx)(bn,{}),Object(pe.jsx)(an,{children:Object(pe.jsx)(dn,{onClick:function(){ae.signOut(),b.push("/")},children:"Log Out"})})]})},un=le.c.ul(ee||(ee=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n  gap: 20px;\n"]))),jn=Object(le.c)(b.b)(ne||(ne=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  gap: 10px;\n  color: #ffff;\n"]))),pn=function(e){var n=e.userObj;return Object(pe.jsx)("nav",{children:Object(pe.jsxs)(un,{children:[Object(pe.jsx)("li",{children:Object(pe.jsx)(b.b,{to:"/",children:Object(pe.jsx)(ue.a,{icon:Ze.c,color:"#ff7979",size:"2x"})})}),Object(pe.jsx)("li",{children:Object(pe.jsxs)(jn,{to:"/profile",children:[Object(pe.jsx)(ue.a,{icon:je.f,color:"#ff7979",size:"2x"}),Object(pe.jsx)("span",{children:n.displayName?"".concat(n.displayName,"\uc758 Profile"):"Profile"})]})})]})})},xn=le.c.div(te||(te=Object(s.a)(["\n  max-width: 890px;\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 80px;\n  display: flex;\n  justify-content: center;\n"]))),fn=function(e){var n=e.isLoggedIn,t=e.userObj,c=e.refreshUser;return Object(pe.jsxs)(b.a,{children:[n&&Object(pe.jsx)(pn,{userObj:t}),Object(pe.jsx)(d.c,{children:n?Object(pe.jsxs)(xn,{children:[Object(pe.jsx)(d.a,{exact:!0,path:"/",children:Object(pe.jsx)(Ke,{userObj:t})}),Object(pe.jsx)(d.a,{exact:!0,path:"/profile",children:Object(pe.jsx)(ln,{userObj:t,refreshUser:c})})]}):Object(pe.jsx)(d.a,{path:"/",children:Object(pe.jsx)(cn,{})})})]})},On=t(40),hn=Object(le.a)(ce||(ce=Object(s.a)(["\n    ",";\n    *{\n        box-sizing:border-box;\n    }\n    a{\n        text-decoration:none;\n    }\n    input{\n        all:unset;\n        box-sizing : border-box;\n        appearance : none;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        background-color: #000000;\n    }\n"])),On.a);var gn=function(){var e=Object(c.useState)(!1),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(null),i=Object(o.a)(a,2),s=i[0],b=i[1];return Object(c.useEffect)((function(){ae.onAuthStateChanged((function(e){b(!!e&&{uid:e.uid,displayName:e.displayName?e.displayName:e.email.split("@")[0],updateProfile:function(n){return e.updateProfile(n)}}),r(!0)}))}),[]),Object(pe.jsxs)(pe.Fragment,{children:[Object(pe.jsx)(hn,{}),t?Object(pe.jsx)(fn,{refreshUser:function(){var e=ae.currentUser;b({uid:e.uid,displayName:e.displayName,updateProfile:function(n){return e.updateProfile(n)}})},isLoggedIn:Boolean(s),userObj:s}):"initializing..."]})};i.a.render(Object(pe.jsx)(r.a.StrictMode,{children:Object(pe.jsx)(gn,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.98a861d1.chunk.js.map