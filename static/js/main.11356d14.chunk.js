(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{60:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(36),i=n.n(a),o=n(10),s=n(6),u=n(24),j=n(8),b=n(41),l=n(25);n(46),n(61),n(62);l.a.initializeApp({apiKey:"AIzaSyDGaLnbahN2S2K-zc4_lhIga3xDbs2LlA4",authDomain:"nwitter-4b09b.firebaseapp.com",projectId:"nwitter-4b09b",storageBucket:"nwitter-4b09b.appspot.com",messagingSenderId:"930402156559",appId:"1:930402156559:web:70c8d773259fb070a5e37a"});var d,p,x,f,O,h,g,m,v,w,y,k,S,C,N,U,D,I,A,P,F,z,L,M,B,E,T,G,H,R=l.a,W=l.a.auth(),Y=l.a.firestore(),q=l.a.storage(),J=n(12),K=n.n(J),_=n(18),Q=n(5),V=n(1),X=Q.c.div(d||(d=Object(s.a)(["\n  display: flex;\n  gap: 12px;\n  margin-top: 18px;\n"]))),Z=Q.c.img(p||(p=Object(s.a)(["\n  width: 505px;\n  height: 285px;\n  border-radius: 13px;\n  object-fit: cover;\n  object-position: center top;\n  margin-top: 10px;\n"]))),$=Q.c.div(x||(x=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),ee=Q.c.div(f||(f=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  gap: 5px;\n"]))),te=Q.c.span(O||(O=Object(s.a)(["\n  white-space: normal;\n  word-break: break-all;\n  font-size: ","px;\n"])),18),ne=Q.c.div(h||(h=Object(s.a)(["\n  width: 56px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #ff7979;\n"]))),ce=Q.c.div(g||(g=Object(s.a)(["\n  display: flex;\n  gap: 2px;\n"]))),re=Q.c.div(m||(m=Object(s.a)(["\n  width: 505px;\n"]))),ae=Q.c.h2(v||(v=Object(s.a)(["\n  font-weight: 600;\n"]))),ie=function(e){var t=e.nweetObj,n=e.isOwer,r=(e.userName,Object(c.useState)(!1)),a=Object(o.a)(r,2),i=a[0],s=a[1],u=Object(c.useState)(t.text),j=Object(o.a)(u,2),b=j[0],l=j[1],d=Object(c.useState)(!1),p=Object(o.a)(d,2),x=p[0],f=p[1],O=function(){return s((function(e){return!e}))},h=function(){var e=Object(_.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,Y.doc("nweets/".concat(t.id)).delete();case 4:if(""===t.attchmentUrl){e.next=7;break}return e.next=7,q.refFromURL(t.attchmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(_.a)(K.a.mark((function e(n){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.doc("nweets/".concat(t.id)).update({text:b});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(V.jsx)("div",{children:i?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)("form",{onSubmit:g,children:[Object(V.jsx)("input",{onChange:function(e){var t=e.target.value;l(t)},value:b,required:!0}),Object(V.jsx)("input",{type:"submit",value:"Update Nweet"})]}),Object(V.jsx)("button",{onClick:O,children:"Cancel"})]}):Object(V.jsx)(V.Fragment,{children:Object(V.jsxs)(X,{children:[Object(V.jsx)(ne,{}),Object(V.jsxs)($,{children:[Object(V.jsxs)(ce,{children:[Object(V.jsx)(ae,{children:t.creatorName}),Object(V.jsxs)("h5",{children:["@",t.creatorId]}),Object(V.jsxs)("h5",{children:["\xb7",function(e){var t=new Date,n=new Date(e);return t.getFullYear()!==n.getFullYear()?"".concat(t.getFullYear()-n.getFullYear(),"\ub144"):t.getMonth()!==n.getMonth()?"".concat(t.getMonth()-n.getMonth(),"\uc6d4"):t.getDay()!==n.getDay()?"".concat(t.getDay()-n.getDay(),"\uc77c"):t.getHours()!==n.getHours()?"".concat(t.getHours()-n.getHours(),"\uc2dc"):t.getMinutes()!==n.getMinutes()?"".concat(t.getMinutes()-n.getMinutes(),"\ubd84"):"".concat(t.getSeconds()-n.getSeconds(),"\ucd08")}(t.createAt)]}),n&&Object(V.jsx)("button",{onClick:function(){f(!x)},children:" Edit "})]}),Object(V.jsxs)(re,{children:[Object(V.jsx)(te,{children:t.text}),n&&x&&Object(V.jsxs)(ee,{children:[Object(V.jsx)("button",{onClick:h,children:"Delete Nweet"}),Object(V.jsx)("button",{onClick:O,children:"Update Nweet"})]})]}),t.attachmentUrl&&Object(V.jsx)(Z,{src:t.attachmentUrl})]})]})})},t.id)},oe=n(64),se=n(19),ue=n(27),je=Q.c.form(w||(w=Object(s.a)(["\n  width: 505px;\n  display: flex;\n  flex-direction: column;\n"]))),be=Q.c.input(y||(y=Object(s.a)(["\n  background-color: #ff7979;\n  padding: 10px;\n  border-radius: 30px;\n"]))),le=Q.c.div(k||(k=Object(s.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #ff7979;\n"]))),de=Q.c.div(S||(S=Object(s.a)(["\n  display: flex;\n  gap: 15px;\n"]))),pe=Q.c.img(C||(C=Object(s.a)(["\n  width: 505px;\n  height: 285px;\n  border-radius: 13px;\n  object-fit: cover;\n  object-position: center top;\n"]))),xe=Q.c.div(N||(N=Object(s.a)(["\n  margin-top: 10px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"]))),fe=Q.c.div(U||(U=Object(s.a)(["\n  margin-top: 40px;\n  position: relative;\n"]))),Oe=Q.c.button(D||(D=Object(s.a)(["\n  position: absolute;\n  left: 5px;\n  top: 5px;\n  border: none;\n  padding: 8px;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n"]))),he=Q.c.label(I||(I=Object(s.a)([""]))),ge=function(e){var t=e.userObj,n=Object(c.useState)(""),r=Object(o.a)(n,2),a=r[0],i=r[1],s=Object(c.useState)(""),u=Object(o.a)(s,2),j=u[0],b=u[1],l=function(){var e=Object(_.a)(K.a.mark((function e(n){var c,r,o,s;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==a){e.next=3;break}return e.abrupt("return");case 3:if(c="",""===j){e.next=12;break}return r=q.ref().child("".concat(t.uid,"/").concat(Object(oe.a)())),e.next=8,r.putString(j,"data_url");case 8:return o=e.sent,e.next=11,o.ref.getDownloadURL();case 11:c=e.sent;case 12:return s={text:a,createAt:Date.now(),creatorId:t.uid,creatorName:t.displayName,attachmentUrl:c},e.next=15,Y.collection("nweets").add(s);case 15:i(""),b("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(V.jsxs)(de,{children:[Object(V.jsx)(le,{}),Object(V.jsxs)(je,{onSubmit:l,children:[Object(V.jsx)("input",{value:a,onChange:function(e){e.preventDefault();var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),j&&Object(V.jsxs)(fe,{children:[Object(V.jsx)(pe,{src:j}),Object(V.jsx)(Oe,{onClick:function(){return b("")},children:Object(V.jsx)(se.a,{icon:ue.b,color:"white"})})]}),Object(V.jsxs)(xe,{children:[Object(V.jsxs)(he,{htmlFor:"attach-file",children:[Object(V.jsx)("span",{children:"Add Photos"}),Object(V.jsx)(se.a,{icon:ue.a})]}),Object(V.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;b(t)},Boolean(t)&&n.readAsDataURL(t)},style:{opacity:0}}),Object(V.jsx)(be,{type:"submit",value:"Nweet"})]})]})]})},me=Q.c.div(A||(A=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  color: #ffff;\n  gap: 30px;\n"]))),ve=function(e){var t=e.userObj,n=Object(c.useState)([]),r=Object(o.a)(n,2),a=r[0],i=r[1];return Object(c.useEffect)((function(){Y.collection("nweets").orderBy("createAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(b.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(V.jsxs)(me,{children:[Object(V.jsx)(ge,{userObj:t}),Object(V.jsx)("div",{children:a.map((function(e){return Object(V.jsx)(ie,{nweetObj:e,isOwer:e.creatorId===t.uid},e.id)}))})]})},we=Q.c.form(P||(P=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n  gap: 10px;\n"]))),ye=Q.c.input(F||(F=Object(s.a)(["\n  background-color: ",";\n  border-radius: 30px;\n  color: ",";\n  text-align: ",";\n  &:hover {\n    background-color: ",";\n  }\n  padding: 10px;\n"])),(function(e){return e.inputType?"#ff7979":"white"}),(function(e){return e.inputType?"#ffff":"black"}),(function(e){return e.inputType?"center":""}),(function(e){return e.inputType?"rgba(255,121,121,0.9)":"white"})),ke=Q.c.div(z||(z=Object(s.a)(["\n  text-align: center;\n  text-decoration: underline;\n"]))),Se=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(o.a)(a,2),s=i[0],u=i[1],j=Object(c.useState)(!1),b=Object(o.a)(j,2),l=b[0],d=b[1],p=Object(c.useState)(""),x=Object(o.a)(p,2),f=x[0],O=x[1],h=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?r(c):"password"===n&&u(c)},g=function(){var e=Object(_.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!l){e.next=7;break}return e.next=5,W.createUserWithEmailAndPassword(n,s);case 5:e.next=9;break;case 7:return e.next=9,W.signInWithEmailAndPassword(n,s);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),O(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(V.jsxs)("div",{children:[Object(V.jsxs)(we,{onSubmit:g,children:[Object(V.jsx)(ye,{name:"email",type:"email",placeholder:"Eamil",required:!0,value:n,onChange:h}),Object(V.jsx)(ye,{name:"password",type:"password",placeholder:"Password",required:!0,value:s,onChange:h}),Object(V.jsx)(ye,{type:"submit",value:l?"Create Account":"Log In",inputType:"submit"}),Object(V.jsx)("br",{}),f]}),Object(V.jsx)(ke,{onClick:function(){return d((function(e){return!e}))},children:l?"Sign In":"Create Account"})]})},Ce=n(22),Ne=Q.c.button(L||(L=Object(s.a)(["\n  background-color: white;\n  border: none;\n  border-radius: 30px;\n  padding: 12px;\n  &:hover{\n    background-color: rgba(255,255,255,0.9);\n  }\n"]))),Ue=Q.c.div(M||(M=Object(s.a)(["\n  width: 350px;\n  margin-top: 30px;\n  display: flex;\n  justify-content: space-between;\n  \n"]))),De=function(){var e=function(){var e=Object(_.a)(K.a.mark((function e(t){var n,c;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?c=new R.auth.GoogleAuthProvider:"github"===n&&(c=new R.auth.GithubAuthProvider),e.next=4,W.signInWithPopup(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(V.jsxs)(Ue,{children:[Object(V.jsxs)(Ne,{onClick:e,name:"google",children:["Continue with Google ",Object(V.jsx)(se.a,{icon:Ce.b})]}),Object(V.jsxs)(Ne,{onClick:e,name:"github",children:["Continue with Github ",Object(V.jsx)(se.a,{icon:Ce.a})]})]})},Ie=Q.c.div(B||(B=Object(s.a)(["\n  width: 100%;\n  height: 100vh;\n  display : flex;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  margin-top: 50px;\n"]))),Ae=function(){return Object(V.jsxs)(Ie,{children:[Object(V.jsx)(se.a,{icon:Ce.c,color:"#ff7979",size:"3x",style:{marginBottom:"20px"}}),Object(V.jsx)(Se,{}),Object(V.jsx)(De,{})]})},Pe=function(e){var t=e.userObj,n=e.refreshUser,r=Object(c.useState)(t.displayName),a=Object(o.a)(r,2),i=a[0],s=a[1],u=Object(j.f)(),b=function(){var e=Object(_.a)(K.a.mark((function e(c){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),t.displayName===i){e.next=5;break}return e.next=4,t.updateProfile({displayName:i});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)("form",{onSubmit:b,children:[Object(V.jsx)("input",{onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"Display name",value:i}),Object(V.jsx)("input",{type:"submit",value:"Update Profile"})]}),Object(V.jsx)("button",{onClick:function(){W.signOut(),u.push("/")},children:"Log Out"})]})},Fe=Q.c.ul(E||(E=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n  gap: 20px;\n"]))),ze=Object(Q.c)(u.b)(T||(T=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  gap: 10px;\n  color: #ffff;\n"]))),Le=function(e){var t=e.userObj;return Object(V.jsx)("nav",{children:Object(V.jsxs)(Fe,{children:[Object(V.jsx)("li",{children:Object(V.jsx)(u.b,{to:"/",children:Object(V.jsx)(se.a,{icon:Ce.c,color:"#ff7979",size:"2x"})})}),Object(V.jsx)("li",{children:Object(V.jsxs)(ze,{to:"/profile",children:[Object(V.jsx)(se.a,{icon:ue.c,color:"#ff7979",size:"2x"}),Object(V.jsx)("span",{children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},Me=Q.c.div(G||(G=Object(s.a)(["\n  max-width: 890px;\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 80px;\n  display: flex;\n  justify-content: center;\n"]))),Be=function(e){var t=e.isLoggedIn,n=e.userObj,c=e.refreshUser;return Object(V.jsxs)(u.a,{children:[t&&Object(V.jsx)(Le,{userObj:n}),Object(V.jsx)(j.c,{children:t?Object(V.jsxs)(Me,{children:[Object(V.jsx)(j.a,{exact:!0,path:"/",children:Object(V.jsx)(ve,{userObj:n})}),Object(V.jsx)(j.a,{exact:!0,path:"/profile",children:Object(V.jsx)(Pe,{userObj:n,refreshUser:c})})]}):Object(V.jsx)(j.a,{path:"/",children:Object(V.jsx)(Ae,{})})})]})},Ee=n(40),Te=Object(Q.a)(H||(H=Object(s.a)(["\n    ",";\n    *{\n        box-sizing:border-box;\n    }\n    a{\n        text-decoration:none;\n    }\n    input{\n        all:unset;\n        box-sizing : border-box;\n        appearance : none;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        background-color: #000000;\n    }\n"])),Ee.a);var Ge=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),i=Object(o.a)(a,2),s=i[0],u=i[1];return Object(c.useEffect)((function(){W.onAuthStateChanged((function(e){u(!!e&&{uid:e.uid,displayName:e.displayName?e.displayName:e.email,updateProfile:function(t){return e.updateProfile(t)}}),r(!0)}))}),[]),Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(Te,{}),n?Object(V.jsx)(Be,{refreshUser:function(){var e=W.currentUser;u({uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(s),userObj:s}):"initializing..."]})};i.a.render(Object(V.jsx)(r.a.StrictMode,{children:Object(V.jsx)(Ge,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.11356d14.chunk.js.map