if(!self.define){let e,o={};const s=(s,n)=>(s=new URL(s+".js",n).href,o[s]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=o,document.head.appendChild(e)}else e=s,importScripts(s),o()})).then((()=>{let e=o[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,u)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(o[r])return;let t={};const l=e=>s(e,r),i={module:{uri:r},exports:t,require:l};o[r]=Promise.all(n.map((e=>i[e]||l(e)))).then((e=>(u(...e),t)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"my-vue-js-resume"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/about-me/css/app.dfd8a2e3.css",revision:null},{url:"/about-me/css/chunk-vendors.39b9ce7a.css",revision:null},{url:"/about-me/fonts/fa-brands-400.8bf6ccf0.ttf",revision:null},{url:"/about-me/fonts/fa-brands-400.e465758e.woff2",revision:null},{url:"/about-me/fonts/fa-regular-400.a937b755.ttf",revision:null},{url:"/about-me/fonts/fa-regular-400.f386b6b7.woff2",revision:null},{url:"/about-me/fonts/fa-solid-900.081655f2.ttf",revision:null},{url:"/about-me/fonts/fa-solid-900.ce4938a3.woff2",revision:null},{url:"/about-me/fonts/fa-v4compatibility.f8c4829c.ttf",revision:null},{url:"/about-me/img/me.67152e86.jpeg",revision:null},{url:"/about-me/index.html",revision:"4c00907d975ee48278ccfbf98e3c700a"},{url:"/about-me/js/app.320db245.js",revision:null},{url:"/about-me/js/chunk-vendors.c997fd66.js",revision:null},{url:"/about-me/manifest.json",revision:"c3b98c0df44d311daa3f8e3c3b7e93ae"}],{})}));
//# sourceMappingURL=service-worker.js.map
