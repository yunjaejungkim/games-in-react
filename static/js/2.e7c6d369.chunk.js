(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{35:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(0),i=n.n(a),c=n(3),u=n.n(c),p=n(9),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=s(this,e.call.apply(e,[this].concat(a))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!f(e)){e.preventDefault();var t=r.context.router.history,n=r.props,o=n.replace,a=n.to;o?t.replace(a):t.push(a)}},s(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,i="string"===typeof t?Object(p.b)(t,null,null,a.location):t,c=a.createHref(i);return o.a.createElement("a",l({},r,{onClick:this.handleClick,href:c,ref:n}))},t}(o.a.Component);h.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=h},36:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(12),o=n(1),a=n.n(o),i=n(35),c=(n(36),function(e){var t=e.name,n=e.updateName;return a.a.createElement("div",{id:"hello"},a.a.createElement("div",{class:"home"},a.a.createElement(i.a,{to:"/"},"Home")),a.a.createElement("h2",null,"Hello",t?", ".concat(t,"!"):""),a.a.createElement("label",{htmlFor:"username"},"Username: "),a.a.createElement("input",{type:"text",name:"username",autoComplete:"off",onChange:function(e){n(e.target.value)}}))}),u=Object(r.b)(function(e){return{name:e}},function(e){return{updateName:function(t){return e({type:"USER_NAME_UPDATE",text:t})}}})(c);t.default=u}}]);
//# sourceMappingURL=2.e7c6d369.chunk.js.map