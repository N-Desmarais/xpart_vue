(function(e){function t(t){for(var r,a,c=t[0],o=t[1],s=t[2],l=0,h=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&h.push(u[a][0]),u[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);d&&d(t);while(h.length)h.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==u[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},u={app:0},i=[];function c(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-33653240":"59c4811d","chunk-33c7a57e":"c00ebb4c","chunk-51d6c212":"1b643915","chunk-69b27dd0":"ed45e925","chunk-6f90c4ca":"086e6ae6","chunk-71869e25":"ef6e1210"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-33653240":1,"chunk-33c7a57e":1,"chunk-51d6c212":1,"chunk-6f90c4ca":1,"chunk-71869e25":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-33653240":"c2f4388d","chunk-33c7a57e":"a4b19e0a","chunk-51d6c212":"9be8188c","chunk-69b27dd0":"31d6cfe0","chunk-6f90c4ca":"85b4a8c9","chunk-71869e25":"10c43591"}[e]+".css",u=o.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===u))return t()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){s=h[c],l=s.getAttribute("data-href");if(l===r||l===u)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||u,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=c(e);var h=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",h.name="ChunkLoadError",h.type=r,h.request=a,n[1](h)}u[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"022a":function(e){e.exports=JSON.parse('{"b":"xpart.us.auth0.com","a":"Q8aKWsYuqP1aC8aM2kDZl1w0WzGLtuow"}')},"034f":function(e,t,n){"use strict";n("85ec")},"1f57":function(e,t,n){"use strict";var r=n("d4ec"),a=n("bee2"),u=n("bb36"),i=function(){function e(){Object(r["a"])(this,e)}return Object(a["a"])(e,[{key:"getAll",value:function(){return u["a"].get("/users")}},{key:"get",value:function(e){return u["a"].get("/users/".concat(e))}},{key:"create",value:function(e){return u["a"].post("/users",e)}},{key:"update",value:function(e,t){return u["a"].put("/users/".concat(e),t)}},{key:"delete",value:function(e){return u["a"].delete("/users/".concat(e))}},{key:"deleteAll",value:function(){return u["a"].delete("/users")}}]),e}();t["a"]=new i},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,a=n("2b0e"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"},on:{mousemove:e.sideBarCheck}},[n("sidebar",{attrs:{toggle:e.Toggled}}),n("div",{attrs:{id:"Router"}},[n("router-view")],1)],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui sidebar"},[n("sui-sidebar-pushable",[n("sui-sidebar",{tag:"sui-menu",attrs:{visible:this.toggle,animation:"overlay",width:"thin",icon:"labeled",inverted:"",vertical:""}},[n("router-link",{attrs:{to:"/login"}},[n("sui-menu-item",[n("sui-icon",{attrs:{name:"lock"}}),e._v(" Login ")],1)],1),n("router-link",{attrs:{to:"/account"}},[n("sui-menu-item",{attrs:{to:"/"}},[n("sui-icon",{attrs:{name:"home"}}),e._v(" My Acccount ")],1)],1),n("router-link",{attrs:{to:"/documents"}},[n("sui-menu-item",[n("sui-icon",{attrs:{name:"file outline"}}),e._v(" Master List ")],1)],1),n("router-link",{attrs:{to:"/project_create"}},[n("sui-menu-item",[n("sui-icon",{attrs:{name:"plus"}}),e._v(" New Project ")],1)],1)],1),n("sui-sidebar-pusher",[n("sui-segment",[n("sui-header",{tag:"h3"},[e._v("Application Content")]),n("docs-wireframe",{attrs:{name:"paragraph"}})],1)],1)],1)],1)},o=[],s={name:"sidebar",data:function(){return{}},props:["toggle"]},l=s,h=n("2877"),d=Object(h["a"])(l,c,o,!1,null,null,null),p=d.exports,f=n("1f57"),m={name:"App",components:{sidebar:p},data:function(){return{Toggled:!1}},methods:{sideBarCheck:function(e){var t=e.clientX,n=e.clientY;t<200&&n<50||t<200&&this.Toggled?this.Toggled=!0:this.Toggled=!1},userCheck:function(e){var t=this;f["a"].get(e).then((function(e){0==e.data.length&&f["a"].create({name:t.$auth.user.email.substring(0,3),email:t.$auth.user.email})})).catch((function(e){console.error(e)}))}},watch:{"$auth.user.email":function(){this.$auth.isAuthenticated&&this.userCheck(this.$auth.user.email)}}},g=m,b=(n("034f"),Object(h["a"])(g,u,i,!1,null,null,null)),v=b.exports,k=(n("d3b7"),n("8c4f")),w=(n("caad"),n("ac1f"),n("2532"),n("841c"),n("5530")),y=(n("96cf"),n("1da1")),C=n("15fd"),j=n("9767"),x=function(){return window.history.replaceState({},document.title,window.location.pathname)},O=function(){return r},_=function(e){var t=e.onRedirectCallback,n=void 0===t?x:t,u=e.redirectUri,i=void 0===u?window.location.origin:u,c=Object(C["a"])(e,["onRedirectCallback","redirectUri"]);return r||(r=new a["a"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(e,t){var n=this;return Object(y["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.popupOpen=!0,r.prev=1,r.next=4,n.auth0Client.loginWithPopup(e,t);case 4:return r.next=6,n.auth0Client.getUser();case 6:return n.user=r.sent,r.next=9,n.auth0Client.isAuthenticated();case 9:n.isAuthenticated=r.sent,n.error=null,r.next=17;break;case 13:r.prev=13,r.t0=r["catch"](1),n.error=r.t0,console.error(r.t0);case 17:return r.prev=17,n.popupOpen=!1,r.finish(17);case 20:return r.next=22,n.auth0Client.getUser();case 22:n.user=r.sent,n.isAuthenticated=!0;case 24:case"end":return r.stop()}}),r,null,[[1,13,17,20]])})))()},handleRedirectCallback:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.auth0Client.handleRedirectCallback();case 4:return t.next=6,e.auth0Client.getUser();case 6:e.user=t.sent,e.isAuthenticated=!0,e.error=null,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),e.error=t.t0;case 14:return t.prev=14,e.loading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,11,14,17]])})))()},loginWithRedirect:function(e){return this.auth0Client.loginWithRedirect(e)},getIdTokenClaims:function(e){return this.auth0Client.getIdTokenClaims(e)},getTokenSilently:function(e){return this.auth0Client.getTokenSilently(e)},getTokenWithPopup:function(e){return this.auth0Client.getTokenWithPopup(e)},logout:function(e){return this.auth0Client.logout(e)}},created:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(j["a"])(Object(w["a"])(Object(w["a"])({},c),{},{client_id:c.clientId,redirect_uri:i}));case 2:if(e.auth0Client=t.sent,t.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){t.next=11;break}return t.next=7,e.auth0Client.handleRedirectCallback();case 7:r=t.sent,a=r.appState,e.error=null,n(a);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](3),e.error=t.t0;case 16:return t.prev=16,t.next=19,e.auth0Client.isAuthenticated();case 19:return e.isAuthenticated=t.sent,t.next=22,e.auth0Client.getUser();case 22:return e.user=t.sent,e.loading=!1,t.finish(16);case 25:case"end":return t.stop()}}),t,null,[[3,13,16,25]])})))()}}),r)},A={install:function(e,t){e.prototype.$auth=_(t)}},P=function(e,t,n){var r=O(),a=function(){if(r.isAuthenticated)return n();r.loginWithRedirect({appState:{targetUrl:e.fullPath}})};if(!r.loading)return a();r.$watch("loading",(function(e){if(!1===e)return a()}))};a["a"].use(k["a"]);var T=new k["a"]({base:"/",routes:[{path:"/",alias:"/login",name:"Login",component:function(){return n.e("chunk-6f90c4ca").then(n.bind(null,"578a"))}},{path:"/account",name:"Account",component:function(){return n.e("chunk-69b27dd0").then(n.bind(null,"4c16"))},beforeEnter:P},{path:"/project/:name",name:"Project",component:function(){return n.e("chunk-51d6c212").then(n.bind(null,"a3f9"))},beforeEnter:P},{path:"/documents",name:"Documents",component:function(){return n.e("chunk-51d6c212").then(n.bind(null,"a3f9"))},beforeEnter:P},{path:"/document_edit",name:"DocumentEdit",component:function(){return n.e("chunk-33653240").then(n.bind(null,"534f"))},props:!0,beforeEnter:P},{path:"/document_create",name:"DocumentCreate",component:function(){return n.e("chunk-71869e25").then(n.bind(null,"58c9"))},props:!0,beforeEnter:P},{path:"/project_create",name:"ProejctCreate",component:function(){return n.e("chunk-33c7a57e").then(n.bind(null,"1585"))},beforeEnter:P}]}),E=n("080a"),R=n.n(E),S=n("022a");a["a"].config.productionTip=!1,a["a"].use(R.a),a["a"].use(A,{domain:S["b"],clientId:S["a"],onRedirectCallback:function(e){T.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}}),new a["a"]({router:T,render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,n){},bb36:function(e,t,n){"use strict";var r=n("bc3a"),a=n.n(r);t["a"]=a.a.create({baseURL:"http://localhost:8080/api",headers:{"Content-type":"application/json"}})}});
//# sourceMappingURL=app.6194c92e.js.map