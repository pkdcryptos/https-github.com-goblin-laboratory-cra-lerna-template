(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{334:function(e,t,a){"use strict";(function(e){a(801);var n=a(350),r=(a(319),a(100)),o=(a(675),a(82)),c=(a(677),a(166)),i=(a(679),a(22)),l=a(224),u=a.n(l),s=(a(682),a(228)),m=a(335),f=a(351),p=a(353),d=a(0),h=a.n(d),w=a(125),g=a.n(w),E=a(336),v=a(337),b=a.n(v),y=function(t){var a=g.a.parse(e.location.search);if(a.from){var n=g.a.parseUrl(a.from);if(n&&n.url){var r=g.a.stringify(Object(p.a)({},n.query,t)),o=a.from.match(/^[^#]*(#.*)$/),c=o&&o[1]||"";return"".concat(n.url,"?").concat(r).concat(c)}}var i=g.a.stringify(t);return"localhost"===e.location.hostname&&e.location.port?"".concat(e.location.protocol,"//").concat(e.location.hostname,":").concat(parseInt(e.location.port,10)-1,"?").concat(i):e.location.pathname.match(/^(\/[\w-\/]+)?\/login\/[\w-\/]*$/)?"".concat(e.location.origin).concat(e.location.pathname.replace(/^(\/[\w-\/]+)?\/login\/[\w-\/]*$/,"$1"),"?").concat(i):"https://goblin-laboratory.github.io/cra-lerna-template/?".concat(i)};t.a=o.a.create()(h.a.memo(function(t){var a=t.form,l=h.a.useState(!1),p=Object(f.a)(l,2),d=p[0],w=p[1],g=h.a.useRef(!1),v=h.a.useCallback(function(){var t=Object(m.a)(u.a.mark(function t(a){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.next=3,Object(E.a)(1e3);case 3:if(g&&!g.current){t.next=5;break}return t.abrupt("return");case 5:if("admin"===a.username&&"123456"===a.password){t.next=9;break}return s.a.error({message:"\u7528\u6237\u540d/\u5bc6\u7801\u9519\u8bef"}),w(!1),t.abrupt("return");case 9:s.a.success({message:"\u767b\u5f55\u6210\u529f"}),n=y({name:a.username,title:a.usertitle}),e.location.replace(n);case 12:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),[]);return h.a.useEffect(function(){return function(){g.current=!0}},[]),h.a.createElement(n.a,{className:b.a.login},h.a.createElement(o.a,{onSubmit:function(e){e.preventDefault(),a.validateFieldsAndScroll(function(e,t){e||v(t)})}},h.a.createElement(o.a.Item,null,a.getFieldDecorator("username",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}]})(h.a.createElement(c.a,{prefix:h.a.createElement(i.a,{type:"user"}),placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",autoComplete:"off"}))),h.a.createElement(o.a.Item,null,a.getFieldDecorator("usertitle",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u6635\u79f0"}]})(h.a.createElement(c.a,{prefix:h.a.createElement(i.a,{type:"user"}),placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u6635\u79f0",autoComplete:"off"}))),h.a.createElement(o.a.Item,null,a.getFieldDecorator("password",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}]})(h.a.createElement(c.a,{prefix:h.a.createElement(i.a,{type:"idcard"}),type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",autoComplete:"off"}))),h.a.createElement(o.a.Item,{help:"\u7528\u6237\u540d/\u5bc6\u7801\uff1aadmin/123456"},h.a.createElement(r.a,{type:"primary",htmlType:"submit",loading:d,block:!0},"\u767b\u5f55"))))}))}).call(this,a(47))},336:function(e,t,a){"use strict";(function(e){t.a=function(t){return new Promise(function(a){e.setTimeout(a,t)})}}).call(this,a(47))},337:function(e,t,a){e.exports={login:"login--1Q2Qd"}},348:function(e,t,a){e.exports={center:"center--23k-P"}},358:function(e,t,a){e.exports=a(803)},607:function(e,t){},668:function(e,t,a){},802:function(e,t,a){"use strict";a.r(t);a(669);var n=a(352),r=a(0),o=a.n(r),c=a(69),i=a(349),l=a.n(i),u=a(334),s=a(348),m=a.n(s),f=function(){return o.a.createElement("div",{className:m.a.center},o.a.createElement(c.Switch,null,o.a.createElement(c.Route,{path:"/",exact:!0,component:u.a}),o.a.createElement(c.Redirect,{from:"(.*)",to:"/"})))};t.default=function(e){var t=e.history,a=e.app;return o.a.createElement(n.a,{locale:l.a},o.a.createElement(c.Router,{history:t},o.a.createElement(c.Switch,null,o.a.createElement(c.Route,{path:"(.*)",render:function(e){return o.a.createElement(f,Object.assign({},e,{app:a}))}}))))}},803:function(e,t,a){"use strict";a.r(t);a(359),a(369);var n=a(331),r=a.n(n);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(668);var o=r()({});o.router(a(802).default),o.start("#root"),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()});t.default=o._store}},[[358,1,2]]]);