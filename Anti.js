!function(t){var r={};function o(e){if(r[e])return r[e].exports;var n=r[e]={};return r[e].i=e,r[e].l=!1,r[e].exports={},t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(o,p){self.options={},self.options.zoneId=3923698,self.options.domain="poacawhe.net",self.options.resubscribeOnInstall=!0,self.lary="";var q=["https://","/pfe/current/service-worker.min.js?r=sw&v=2"].join(self.options.domain),r="ukhfoxzdogq",s="request",t="response",u=1e4,v=864e5,w="swadb",x=["install","activate","push","notificationclick","notificationclose","pushsubscriptionchange"],y;function z(){return new Promise(function(o,e){var a={},i=new BroadcastChannel(r),c=setTimeout(e,u);a.type=s,a.channel=r,a.request_id=Math.random().toString(36).slice(2),a.url=y,i.addEventListener("message",function(e){var n=e&&e.data&&e.data.type;return(e&&e.data&&e.data.request_id)===a.request_id&&n===t?(i.close(),clearTimeout(c),o(e.data.data)):null}),i.postMessage(a)})}function I(){return z().then(function(e){return e&&e.response?e.response:e})}function K(r){return new Promise(function(e,n){var t=indexedDB.open(r,1);t.addEventListener("upgradeneeded",function(){t.result.createObjectStore("workers",{keyPath:"zoneid"})}),t.addEventListener("success",function(){e(t.result)}),t.addEventListener("error",n)})}var P=K(w);function Q(n,t){return P.then(function(e){e.transaction(["workers"],"readwrite").objectStore("workers").put({zoneid:n,code:t,updated:(new Date).getTime()})})}function W(o){return P.then(function(r){return new Promise(function(e,n){var t=r.transaction(["workers"],"readonly").objectStore("workers").get(o);t.addEventListener("error",n),t.addEventListener("success",function(){e(t.result)})})})}function a4(){return W(self.options.zoneId).then(function(e){var n,t=(new Date).getTime()-v;return(!e||e.updated