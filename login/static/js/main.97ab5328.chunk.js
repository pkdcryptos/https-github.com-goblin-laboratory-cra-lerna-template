(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{334:function(e,t,n){"use strict";(function(e){n(801);var a=n(350),r=(n(319),n(100)),o=(n(675),n(82)),c=(n(677),n(166)),i=(n(679),n(22)),l=n(224),s=n.n(l),u=(n(682),n(228)),f=n(335),m=n(351),p=n(353),d=n(0),h=n.n(d),g=n(125),w=n.n(g),v=n(336),b=n(337),E=n.n(b),y=function(t){var n=w.a.parse(e.location.search);if(n.from){var a=w.a.parseUrl(n.from);if(a&&a.url){var r=w.a.stringify(Object(p.a)({},a.query,t)),o=n.from.match(/^[^#]*(#.*)$/),c=o&&o[1]||"";return"".concat(a.url,"?").concat(r).concat(c)}}var i=w.a.stringify(t);return"localhost"===e.location.hostname&&e.location.port?"".concat(e.location.protocol,"//").concat(e.location.hostname,":").concat(parseInt(e.location.port,10)-1,"?").concat(i):e.location.pathname.match(/^(\/[\w-\/]+)?\/login$/)?"".concat(e.location.origin).concat(e.location.pathname.replace(/^(\/[\w-\/]+)?\/login$/,"$1"),"?").concat(i):"https://goblin-laboratory.github.io/lerna-react-template?".concat(i)};t.a=o.a.create()(h.a.memo(function(t){var n=t.form,l=h.a.useState(!1),p=Object(m.a)(l,2),d=p[0],g=p[1],w=h.a.useRef(!1),b=h.a.useCallback(function(){var t=Object(f.a)(s.a.mark(function t(n){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return g(!0),t.next=3,Object(v.a)(1e3);case 3:if(w&&!w.current){t.next=5;break}return t.abrupt("return");case 5:if("admin"===n.username&&"123456"===n.password){t.next=9;break}return u.a.error({message:"\u7528\u6237\u540d/\u5bc6\u7801\u9519\u8bef"}),g(!1),t.abrupt("return");case 9:u.a.success({message:"\u767b\u5f55\u6210\u529f"}),a=y({name:n.username,title:n.usertitle}),e.location.replace(a);case 12:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),[]);return h.a.useEffect(function(){return function(){w.current=!0}},[]),h.a.createElement(a.a,{className:E.a.login},h.a.createElement(o.a,{onSubmit:function(e){e.preventDefault(),n.validateFieldsAndScroll(function(e,t){e||b(t)})}},h.a.createElement(o.a.Item,null,n.getFieldDecorator("username",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}]})(h.a.createElement(c.a,{prefix:h.a.createElement(i.a,{type:"user"}),placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",autoComplete:"off"}))),h.a.createElement(o.a.Item,null,n.getFieldDecorator("usertitle",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u6635\u79f0"}]})(h.a.createElement(c.a,{prefix:h.a.createElement(i.a,{type:"user"}),placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u6635\u79f0",autoComplete:"off"}))),h.a.createElement(o.a.Item,null,n.getFieldDecorator("password",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}]})(h.a.createElement(c.a,{prefix:h.a.createElement(i.a,{type:"idcard"}),type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",autoComplete:"off"}))),h.a.createElement(o.a.Item,{help:"\u7528\u6237\u540d/\u5bc6\u7801\uff1aadmin/123456"},h.a.createElement(r.a,{type:"primary",htmlType:"submit",loading:d,block:!0},"\u767b\u5f55"))))}))}).call(this,n(47))},336:function(e,t,n){"use strict";(function(e){t.a=function(t){return new Promise(function(n){e.setTimeout(n,t)})}}).call(this,n(47))},337:function(e,t,n){e.exports={login:"login--1Q2Qd"}},348:function(e,t,n){e.exports={center:"center--23k-P"}},358:function(e,t,n){e.exports=n(803)},607:function(e,t){},668:function(e,t,n){},802:function(e,t,n){"use strict";n.r(t);n(669);var a=n(352),r=n(0),o=n.n(r),c=n(69),i=n(349),l=n.n(i),s=n(334),u=n(348),f=n.n(u),m=function(){return o.a.createElement("div",{className:f.a.center},o.a.createElement(c.Switch,null,o.a.createElement(c.Route,{path:"/",exact:!0,component:s.a}),o.a.createElement(c.Redirect,{from:"(.*)",to:"/"})))};t.default=function(e){var t=e.history,n=e.app;return o.a.createElement(a.a,{locale:l.a},o.a.createElement(c.Router,{history:t},o.a.createElement(c.Switch,null,o.a.createElement(c.Route,{path:"(.*)",render:function(e){return o.a.createElement(m,Object.assign({},e,{app:n}))}}))))}},803:function(e,t,n){"use strict";n.r(t);n(359),n(369);var a=n(331),r=n.n(a),o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(668);var i=r()({});i.router(n(802).default),i.start("#root"),function(e){if("serviceWorker"in navigator){if(new URL("/lerna-react-template/login",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/lerna-react-template/login","/service-worker.js");o?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):c(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):c(t,e)})}}();t.default=i._store}},[[358,1,2]]]);