(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){e.exports=a(211)},127:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),s=a.n(c),o=(a(126),a(127),a(12)),l=a.n(o),i=a(40),m=a(19),u=a(11),p=a(6),f=a(64),d=a.n(f),E="https://douban-1300076408.cos.ap-guangzhou.myqcloud.com/alt.png",g="https://douban-1300076408.cos.ap-guangzhou.myqcloud.com";var h=a(26),v=a.n(h);var b=a(4),N=a.n(b),w=a(213);function x(e){var t=e.article,a=e.style;r.a.useEffect(function(){},[]);t.imgLinks.length?"".concat(t.imgLinks[0]):"".concat(E);var n=["volcano","blue","cyan","gold","geekblue","magenta","lime","red"],c=t.imgLinks.length?"":N.a.noImg;return r.a.createElement("div",{className:"".concat(N.a.listItem," ").concat(c),style:a},r.a.createElement("a",{href:t.link,className:N.a.card},t.imgLinks.length?r.a.createElement("div",{className:N.a.imgContainer},r.a.createElement("img",{src:"".concat(t.imgLinks[0]),width:a.width,height:a.width*t.imgRate})):"",r.a.createElement("div",{className:N.a.textContainer},r.a.createElement("div",{className:N.a.dataContainer},r.a.createElement("span",{title:t.isEliteArticle?"\u7cbe\u534e\u5e16 - ".concat(t.title):t.title},r.a.createElement("span",{className:N.a.title},t.isEliteArticle?r.a.createElement("i",{className:"icon-heart"},"\u7cbe"):"","".concat(t.title)))),r.a.createElement("div",{className:N.a.dataContainer},r.a.createElement("span",{title:"\u5185\u5bb9\uff1a".concat(t.frontContent)},r.a.createElement("span",{className:N.a.frontContent},t.frontContent))),r.a.createElement("div",{className:N.a.dataContainer},r.a.createElement("span",{title:"\u4f5c\u8005\uff1a".concat(t.author)},r.a.createElement("img",{className:N.a.authorPic,src:t.authorPic}),r.a.createElement("span",{className:N.a.author},t.author))),r.a.createElement("div",{className:N.a.dataContainer},r.a.createElement("span",{className:N.a.dataItem,title:"\u6587\u7ae0\u5185\u5bb9\u957f\u5ea6\uff1a".concat(t.contentLength)},r.a.createElement("i",{className:"icon-contentLength"}),r.a.createElement("span",{className:N.a.text},"\u6587\u957f\uff1a",t.contentLength)),r.a.createElement("span",{className:N.a.dataItem,title:"\u7167\u7247\u6570\u91cf\uff1a".concat(t.imgLinks.length)},r.a.createElement("i",{className:"icon-photo"}),r.a.createElement("span",{className:N.a.text},"\u7167\u7247\uff1a",t.imgLinks.length))),r.a.createElement("div",{className:N.a.dataContainer},r.a.createElement("span",{className:N.a.dataItem,title:"\u8bc4\u8bba\u6570\uff1a".concat(t.responseCount)},r.a.createElement("i",{className:"icon-response"}),r.a.createElement("span",{className:N.a.text},"\u8bc4\u8bba\uff1a",t.responseCount)),r.a.createElement("span",{className:N.a.dataItem,title:"\u70b9\u8d5e\u6570\uff1a".concat(t.likeCount)},r.a.createElement("i",{className:"icon-like"}),r.a.createElement("span",{className:N.a.text},"\u70b9\u8d5e\uff1a",t.likeCount))),r.a.createElement("div",{className:N.a.dataContainer},r.a.createElement("span",{className:N.a.keyWordContainer,title:"\u5173\u952e\u8bcd\uff1a".concat(t.keyWords.join("\uff0c"))},t.keyWords.map(function(e,t){return r.a.createElement(w.a,{key:t,className:N.a.tag,color:n[t%8]},e)}))),r.a.createElement("div",{className:"".concat(N.a.dataContainer," ").concat(N.a.publishTimeContainer)},r.a.createElement("span",{title:"\u53d1\u5e03\u65f6\u95f4\uff1a".concat(t.lastResponse)},r.a.createElement("i",{className:"icon-new"}),r.a.createElement("span",{className:N.a.publishTime},t.lastResponse))))))}var O=a(212),y=a(110),k=a.n(y);function C(){var e=function(){return Math.floor(.96*document.body.clientWidth)},t=r.a.useState([]),a=Object(p.a)(t,2),n=a[0],c=a[1],s=r.a.useState(e()),o=Object(p.a)(s,2),l=o[0],i=o[1],m={itemMargin:10,itemClassName:"articleItem",transitionDuration:".5",transitionTimingFunction:"easeIn",containerWidth:l};!function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,n={current:function(e){}};r.a.useEffect(function(){n.current=t},[t]),r.a.useEffect(function(){if(a&&a.addEventListener){var t=function(e){return n.current(e)};return a.addEventListener(e,t),function(){a.removeEventListener(e,t)}}},[e,a])}("resize",function(){i(e)}),r.a.useEffect(function(){new Promise(function(e,t){try{v.a.get("".concat(g,"/listData.js")).then(function(t){e(t.data.list)},function(e){console.log(e),t()})}catch(a){console.log(a),t()}}).then(function(e){c(e)})},[]);O.a.Option;return r.a.createElement("div",{id:"home-list",className:d.a.homeList},r.a.createElement("div",{className:d.a.searchContainer}),r.a.createElement("div",{className:d.a.listContainer},r.a.createElement(k.a,m,n.map(function(e){var t=Math.floor(l/2-10),a=48+(e.frontContent?54:0)+24+54+22*Math.ceil(e.keyWords.length/3)+92,n=e.imgRate?t*e.imgRate+a:a;return r.a.createElement(x,{key:e.link,article:e,style:{width:t,height:n}})}))))}function j(e){return r.a.createElement("div",{className:"home-page"},r.a.createElement(C,null))}var _=a(39),L=a(32),S=a(117),I=a.n(S),T="token";function R(e){e?v.a.defaults.headers.common.Authorization="Token ".concat(e):delete v.a.defaults.headers.common.Authorization}v.a.defaults.baseURL="https://conduit.productionready.io/api",v.a.interceptors.response.use(function(e){return e},function(e){switch(e.response.status){case 401:Object(u.d)("/register");break;case 404:case 403:Object(u.d)("/")}return Promise.reject(e.response)});var U=v.a;function A(e){var t,a,n=e.user,r=n.token,c=Object(i.a)(n,["token"]);return t=T,a=r,localStorage.setItem(t,JSON.stringify(a)),R(r),c}function D(e,t){return U.post("/users/login",{user:{email:e,password:t}}).then(function(e){return A(e.data)})}function P(){localStorage.removeItem(T),R(null)}var W={isAuthenticated:!1,user:null};function z(e,t){switch(t.type){case"LOGIN":return Object(L.a)({},e,{isAuthenticated:!0});case"LOAD_USER":return Object(L.a)({},e,{user:t.user});case"LOGOUT":return{isAuthenticated:!1,user:null};default:return e}}var G=r.a.createContext({state:W,dispatch:function(){return W}});function F(e){var t=r.a.useReducer(z,W),a=Object(p.a)(t,2),n=a[0],c=a[1];return r.a.useEffect(function(){var e=function(e){var t=localStorage.getItem(e);if(!t)return null;try{return JSON.parse(t)}catch(a){return null}}(T);e&&(!function(e){try{var t=I()(e),a=Date.now().valueOf()/1e3;return t.exp>a}catch(n){return!1}}(e)?(c({type:"LOGOUT"}),P()):(R(e),c({type:"LOGIN"})))},[]),r.a.createElement(G.Provider,Object.assign({value:{state:n,dispatch:c}},e))}function J(){return r.a.useContext(G)}function M(e){var t=e.errors;return r.a.createElement("ul",{className:"error-messages"},Object.entries(t).map(function(e,t){var a=Object(p.a)(e,2),n=a[0];return a[1].map(function(e){return r.a.createElement("li",{key:t},n," ",e)})}))}function q(e){var t=r.a.useState({username:"",email:"",password:""}),a=Object(p.a)(t,2),n=a[0],c=a[1],s=r.a.useState(!1),o=Object(p.a)(s,2),i=o[0],f=o[1],d=r.a.useState(null),E=Object(p.a)(d,2),g=E[0],h=E[1],v=J(),b=v.state.user,N=v.dispatch,w=function(e){c(Object(L.a)({},n,Object(_.a)({},e.currentTarget.name,e.currentTarget.value)))},x=function(){var e=Object(m.a)(l.a.mark(function e(t){var a,r,c,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),f(!0),a=n.username,r=n.email,c=n.password,e.prev=3,e.next=6,o={username:a,email:r,password:c},U.post("/users",{user:o}).then(function(e){return A(e.data)});case 6:s=e.sent,N({type:"LOAD_USER",user:s}),Object(u.d)("/"),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0),f(!1),422===e.t0.status&&h(e.t0.data.errors);case 16:case"end":return e.stop()}var o},e,null,[[3,11]])}));return function(t){return e.apply(this,arguments)}}();return b?r.a.createElement(u.b,{to:"/",noThrow:!0}):r.a.createElement("div",{className:"auth-page"},r.a.createElement("div",{className:"container page"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},r.a.createElement("h1",{className:"text-xs-center"},"Sign up"),r.a.createElement("p",{className:"text-xs-center"},r.a.createElement(u.a,{to:"/login"},"Have an account?")),g&&r.a.createElement(M,{errors:g}),r.a.createElement("form",{onSubmit:x},r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{name:"username",className:"form-control form-control-lg",type:"text",value:n.username,placeholder:"Your Name",onChange:w})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{name:"email",className:"form-control form-control-lg",type:"email",value:n.email,placeholder:"Email",onChange:w})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{name:"password",className:"form-control form-control-lg",type:"password",value:n.password,placeholder:"Password",onChange:w})),r.a.createElement("button",{className:"btn btn-lg btn-primary pull-xs-right",disabled:i},"Sign Up"))))))}function Y(e){var t=r.a.useState(""),a=Object(p.a)(t,2),n=a[0],c=a[1],s=r.a.useState(""),o=Object(p.a)(s,2),i=o[0],f=o[1],d=r.a.useState(!1),E=Object(p.a)(d,2),g=E[0],h=E[1],v=r.a.useState(),b=Object(p.a)(v,2),N=b[0],w=b[1],x=J(),O=x.state.user,y=x.dispatch,k=function(){var e=Object(m.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),h(!0),e.prev=2,e.next=5,D(n,i);case 5:a=e.sent,y({type:"LOAD_USER",user:a}),Object(u.d)("/"),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),h(!1),422===e.t0.status&&w(e.t0.data.errors);case 15:case"end":return e.stop()}},e,null,[[2,10]])}));return function(t){return e.apply(this,arguments)}}();return O?r.a.createElement(u.b,{to:"/",noThrow:!0}):r.a.createElement("div",{className:"auth-page"},r.a.createElement("div",{className:"container page"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},r.a.createElement("h1",{className:"text-xs-center"},"Sign in"),r.a.createElement("p",{className:"text-xs-center"},r.a.createElement(u.a,{to:"/register"},"Need an account?")),N&&r.a.createElement(M,{errors:N}),r.a.createElement("form",{onSubmit:k},r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{name:"email",className:"form-control form-control-lg",type:"email",value:n,placeholder:"Email",onChange:function(e){return c(e.target.value)}})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{name:"password",className:"form-control form-control-lg",type:"password",value:i,placeholder:"Password",onChange:function(e){return f(e.target.value)}})),r.a.createElement("button",{className:"btn btn-lg btn-primary pull-xs-right",type:"submit",disabled:g},"Sign In"))))))}function B(e){var t=e.profile,a=e.onClick,n=e.loading,c=["btn","btn-sm","action-btn"],s="";return t.following?(c.push("btn-secondary"),s+="Unfollow ".concat(t.username)):(c.push("btn-outline-secondary"),s+="Follow ".concat(t.username)),r.a.createElement("button",{className:c.join(" "),onClick:a,disabled:n},r.a.createElement("i",{className:"ion-plus-round"}),"\xa0",s)}function H(e){return U.post("/profiles/".concat(e,"/follow"))}function K(e){return U.get("/profiles/".concat(e))}function V(e){var t=e.username,a=void 0===t?"":t,n=r.a.useState(null),c=Object(p.a)(n,2),s=c[0],o=c[1],i=r.a.useState(!1),u=Object(p.a)(i,2),f=u[0],d=u[1],g=J().state.user;r.a.useEffect(function(){var e=!1;function t(){return(t=Object(m.a)(l.a.mark(function t(){var n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K(a);case 3:n=t.sent,e||o(n.data.profile),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){e=!0}},[a]);var h=function(){var e=Object(m.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=2;break}return e.abrupt("return");case 2:if(d(!0),e.prev=3,!s.following){e.next=10;break}return e.next=7,a=s.username,U.delete("/profiles/".concat(a,"/follow"));case 7:t=e.sent,e.next=13;break;case 10:return e.next=12,H(s.username);case 12:t=e.sent;case 13:o(t.data.profile),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0);case 19:d(!1);case 20:case"end":return e.stop()}var a},e,null,[[3,16]])}));return function(){return e.apply(this,arguments)}}(),v=s&&g&&s.username===g.username;return s&&r.a.createElement("div",{className:"profile-page"},r.a.createElement("div",{className:"user-info"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-md-10 offset-md-1"},r.a.createElement("img",{src:s.image||E,className:"user-img",alt:s.username}),r.a.createElement("h4",null,s.username),r.a.createElement("p",null,s.bio),v?r.a.createElement(Z,null):r.a.createElement(B,{profile:s,onClick:h,loading:f}))))))}function Z(){return r.a.createElement(u.a,{to:"/settings",className:"btn btn-sm btn-outline-secondary action-btn"},r.a.createElement("i",{className:"ion-gear-a"})," Edit Profile Settings")}function Q(e){var t=J(),a=t.state.user,n=t.dispatch,c=r.a.useState(!1),s=Object(p.a)(c,2),o=s[0],i=s[1],f=r.a.useState(null),d=Object(p.a)(f,2),E=d[0],g=d[1],h=r.a.useState({username:"",email:"",image:"",bio:"",password:""}),v=Object(p.a)(h,2),b=v[0],N=v[1];r.a.useEffect(function(){if(a){var e=a.username,t=a.email,n=a.image,r=a.bio;console.log(e,t,n,r),N({username:e,email:t,image:n||"",bio:r||"",password:""})}},[a]);var w=function(e){N(Object(L.a)({},b,Object(_.a)({},e.currentTarget.name,e.currentTarget.value)))},x=function(){var e=Object(m.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),i(!0),b.password||delete b.password,e.prev=3,e.next=6,r=b,U.put("/user",{user:r});case 6:a=e.sent,n({type:"LOAD_USER",user:a.data.user}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0),422===e.t0.status&&g(e.t0.data.errors);case 14:i(!1);case 15:case"end":return e.stop()}var r},e,null,[[3,10]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"settings-page"},r.a.createElement("div",{className:"container page"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},r.a.createElement("h1",{className:"text-xs-center"},"Your Settings"),E&&r.a.createElement(M,{errors:E}),r.a.createElement("form",{onSubmit:x},r.a.createElement("fieldset",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{name:"image",className:"form-control",type:"text",placeholder:"URL of profile picture",value:b.image,onChange:w})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{name:"username",className:"form-control form-control-lg",type:"text",placeholder:"Username",value:b.username,onChange:w})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{name:"bio",className:"form-control form-control-lg",rows:8,placeholder:"Short bio about you",value:b.bio,onChange:w})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{name:"email",className:"form-control form-control-lg",type:"email",placeholder:"Email",value:b.email,onChange:w})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{name:"password",className:"form-control form-control-lg",type:"password",placeholder:"New Password",value:b.password,onChange:w})),r.a.createElement("button",{className:"btn btn-lg btn-primary pull-xs-right",type:"submit",disabled:o},"Update Settings"))),r.a.createElement("hr",null),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){n({type:"LOGOUT"}),P(),Object(u.d)("/")}},"Or click here to logout.")))))}function X(e){var t=e.as,a=Object(i.a)(e,["as"]);return J().state.user?r.a.createElement(t,a):r.a.createElement(j,null)}function $(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.c,null,r.a.createElement(u.b,{from:"/",to:"/douban/home",noThrow:!0,default:!0}),r.a.createElement(j,{path:"/douban/home"}),r.a.createElement(q,{path:"/douban/register"}),r.a.createElement(Y,{path:"login"}),r.a.createElement(V,{path:":username"}),r.a.createElement(X,{as:Q,path:"/settings"})))}function ee(){var e=J(),t=e.state,a=t.user,n=t.isAuthenticated,c=e.dispatch;return r.a.useEffect(function(){var e=!1;function t(){return(t=Object(m.a)(l.a.mark(function t(){var a,n,r;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U.get("/user");case 3:a=t.sent,n=a.data.user,n.token,r=Object(i.a)(n,["token"]),e||c({type:"LOAD_USER",user:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,null,[[0,8]])}))).apply(this,arguments)}return!a&&n&&function(){t.apply(this,arguments)}(),function(){e=!0}},[c,n,a]),!a&&n?null:r.a.createElement(r.a.Fragment,null,r.a.createElement($,null))}a(210);s.a.render(r.a.createElement(function(){return r.a.createElement(F,null,r.a.createElement(ee,null))},null),document.getElementById("root"))},4:function(e,t,a){e.exports={listItem:"ListItem_listItem__2Kpsv",noImg:"ListItem_noImg__NLfhW",dataContainer:"ListItem_dataContainer__kZO2k",tag:"ListItem_tag__3NL6f",textContainer:"ListItem_textContainer__2Ewqv",imgContainer:"ListItem_imgContainer__3f48Y",authorPic:"ListItem_authorPic__3tsWT",title:"ListItem_title__2C4C0",frontContent:"ListItem_frontContent__19ceW",author:"ListItem_author__3LTIe",dataItem:"ListItem_dataItem__2x53R"}},64:function(e,t,a){e.exports={listContainer:"List_listContainer__7Vk_n"}}},[[121,1,2]]]);
//# sourceMappingURL=main.50b7ee85.chunk.js.map