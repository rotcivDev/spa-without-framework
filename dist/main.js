!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);class r{constructor(t,e){this.routes=t,this.routeElement=e,this.initialize()}getPathAndRouteMapping(){const t={};for(let e in this.routes)t[this.routes[e].viewObj.path]=this.routes[e].viewObj.url;return t}initialize(){window.addEventListener("hashchange",t=>{this.hashChanged()})}hashChanged(){const t=window.location.hash;for(let e=0;e<this.routes.length;e++){const n=this.routes[e];n.isActiveRoute(t.substr(1))&&this.navigate(n.viewObj.path)}}navigate(t){const e=this.getPathAndRouteMapping()[t],n=new XMLHttpRequest;n.onreadystatechange=()=>{4===this.readyState&&200===this.status&&(this.routeElement.innerHTML=this.responseText)},n.open("GET",e,!0),n.send()}}class i{constructor(t,e){this.viewObj=t,this.isDefaultRoute=e}isActiveRoute(t){return t.replace("#","")===this.viewObj.path}}(()=>{const t=[new i({path:"detail",url:"./views/detail.html"}),new i({path:"landing",url:"./views/landing.html"},!0)];new r(t,"app")})()}]);