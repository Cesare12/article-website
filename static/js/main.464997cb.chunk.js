(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],{128:function(t,e,n){},139:function(t,e,n){},151:function(t,e,n){},152:function(t,e,n){},154:function(t,e,n){},155:function(t,e,n){"use strict";n.r(e);var a=n(40),c=n(41),i=n(43),s=n(42),o=n(0),r=n(23),l=n.n(r),h=n(159),u=n(46),d=n(22),j=n.p+"static/media/logo.31e4f528.png",b=(n(128),n(164)),p=n(12),f=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).state={list:[]},c}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("http://www.dell-lee.com/react/api/header.json").then((function(t){return t.json()})).then((function(e){t.setState({list:e.data})}))}},{key:"getList",value:function(){return this.state.list.map((function(t){return Object(p.jsx)(b.a.Item,{children:Object(p.jsx)(u.b,{to:"/".concat(t.id),children:t.title})},t.id)}))}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u.b,{to:"/",children:Object(p.jsx)("img",{src:j,alt:"logo",className:"header-logo"})}),Object(p.jsx)(b.a,{className:"header-menu",mode:"horizontal",children:this.getList()})]})}}]),n}(o.Component),O=n(55),m=(n(139),n(119)),v=n(56),g=n(163),w=n(162),x=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).state={login:!1,visible:!1,user:null,password:null},c.showModal=c.showModal.bind(Object(O.a)(c)),c.handleUser=c.handleUser.bind(Object(O.a)(c)),c.handlePassword=c.handlePassword.bind(Object(O.a)(c)),c.checkLogin=c.checkLogin.bind(Object(O.a)(c)),c.logOut=c.logOut.bind(Object(O.a)(c)),c}return Object(c.a)(n,[{key:"showModal",value:function(){this.setState({visible:!0})}},{key:"handleUser",value:function(t){this.setState({user:t.target.value})}},{key:"handlePassword",value:function(t){this.setState({password:t.target.value})}},{key:"checkLogin",value:function(){var t=this,e=this.state,n=e.user,a=e.password,c="http://www.dell-lee.com/react/api/login.json?user=".concat(n,"&password=").concat(a);fetch(c,{credentials:"include"}).then((function(t){return t.json()})).then((function(e){e.data.login?(m.b.success("\u767b\u9646\u6210\u529f"),t.setState({visible:!1,login:!0})):m.b.error("\u767b\u9646\u5931\u8d25")}))}},{key:"logOut",value:function(){var t=this;fetch("http://www.dell-lee.com/react/api/logout.json",{credentials:"include"}).then((function(t){return t.json()})).then((function(e){e.data.logout&&(t.setState({login:!1}),t.props.history.push("/"))}))}},{key:"render",value:function(){var t=this,e=this.state.login;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"login",children:[e?Object(p.jsx)(v.a,{type:"primary",onClick:this.logOut,children:"\u9000\u51fa"}):Object(p.jsx)(v.a,{type:"primary",onClick:this.showModal,children:"\u767b\u9646"}),Object(p.jsx)(u.b,{to:e?"/vip":"/",children:Object(p.jsx)(v.a,{type:"primary",style:{marginLeft:10},children:"VIP"})})]}),Object(p.jsxs)(g.a,{title:"\u767b\u9646",visible:this.state.visible,onOk:this.checkLogin,onCancel:function(){t.setState({visible:!1})},children:[Object(p.jsx)(w.a,{placeholder:"\u8bf7\u8f93\u5165\u8d26\u6237\u540d",onChange:this.handleUser,style:{marginBottom:10}}),Object(p.jsx)(w.a,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",onChange:this.handlePassword})]})]})}},{key:"componentDidMount",value:function(){var t=this;fetch("http://www.dell-lee.com/react/api/isLogin.json",{credentials:"include"}).then((function(t){return t.json()})).then((function(e){var n=e.data.login;t.setState({login:n})}))}}]),n}(o.Component),y=Object(d.f)(x),k=n(160),S=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).state={data:[]},c}return Object(c.a)(n,[{key:"render",value:function(){return Object(p.jsx)(k.b,{style:{background:"#fff"},bordered:!0,dataSource:this.state.data,renderItem:function(t){return Object(p.jsx)(u.b,{to:"/detail/".concat(t.id),children:Object(p.jsx)(k.b.Item,{children:t.title})})}})}},{key:"componentDidMount",value:function(){var t=this,e="http://www.dell-lee.com/react/api/list.json",n=this.props.match.params.id;n&&(e=e+"?id="+n),fetch(e).then((function(t){return t.json()})).then((function(e){t.setState({data:e.data})}))}},{key:"componentDidUpdate",value:function(t){var e=this;if(this.props.match.params.id!==t.match.params.id){var n="http://www.dell-lee.com/react/api/list.json",a=this.props.match.params.id;a&&(n=n+"?id="+a),fetch(n).then((function(t){return t.json()})).then((function(t){e.setState({data:t.data})}))}}}]),n}(o.Component),C=(n(151),function(){return Object(p.jsx)("div",{className:"vip",children:"Hello VIP"})}),L=n(161),M=(n(152),function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).state={title:"",content:""},c}return Object(c.a)(n,[{key:"render",value:function(){return Object(p.jsx)(L.a,{title:this.state.title,children:Object(p.jsx)("p",{className:"detail",dangerouslySetInnerHTML:{__html:this.state.content}})})}},{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id;fetch("http://www.dell-lee.com/react/api/detail.json?id="+e).then((function(t){return t.json()})).then((function(e){var n=e.data;t.setState(n)}))}}]),n}(o.Component)),N=(n(153),n(154),h.a.Header),I=h.a.Footer,D=h.a.Content,P=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(p.jsx)(u.a,{children:Object(p.jsxs)(h.a,{style:{minWidth:1260,height:"100%"},children:[Object(p.jsx)(N,{className:"header",children:Object(p.jsx)(f,{})}),Object(p.jsxs)(D,{className:"content",children:[Object(p.jsx)(y,{}),Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{path:"/vip",component:C}),Object(p.jsx)(d.a,{path:"/detail/:id",component:M}),Object(p.jsx)(d.a,{path:"/:id?",component:S})]})]}),Object(p.jsx)(I,{className:"footer",children:"@copyright Dell-Lee 2021"})]})})}}]),n}(o.Component);l.a.render(Object(p.jsx)(P,{}),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.464997cb.chunk.js.map