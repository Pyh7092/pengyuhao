if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,s)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let b={};const f=e=>d(e,a),n={module:{uri:a},exports:b,require:f};i[a]=Promise.all(r.map((e=>n[e]||f(e)))).then((e=>(s(...e),b)))}}define(["./workbox-d5747d69"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/10/17/Call-me-hero/index.html",revision:"9454765bbd0a11767d4ed29a62be529f"},{url:"2022/10/17/hello-world/index.html",revision:"f5982d75cd9536708afe5f8f70d51336"},{url:"2022/10/22/text/index.html",revision:"4e9668ab072da6b16bb4ef6d154cb92b"},{url:"2022/10/22/text/wallhaven-6ozkzl.jpg",revision:"74e45158ad19e7386316cbc8aa912adc"},{url:"archives/2022/10/index.html",revision:"d739e8b77eecf1a9a3b8e6ed05845362"},{url:"archives/2022/index.html",revision:"b263a1e149d4e748696d8983f7d3b055"},{url:"archives/index.html",revision:"ec71506fcf6acfa526aad9ad17e20ede"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"css/index.css",revision:"7b58caf08ee5bb747bee0df12317da1c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/1.jpg",revision:"8b2cb09957b7ae24b55fbef3398f6a0f"},{url:"img/10.png",revision:"b69d25bab621255970d117f1472350ee"},{url:"img/11.jpg",revision:"033228e5cbd8ece78dda30a0db42a3e3"},{url:"img/12.jpg",revision:"f627e428de6e7b490c7bd85b98e807ac"},{url:"img/13.png",revision:"b2346efc3d5bc6c03703739207ac77ba"},{url:"img/14.jpg",revision:"b9d2d74ea56450d6ef7d753260851655"},{url:"img/2.png",revision:"607ee408591da8a5674e8fe52bd21c6b"},{url:"img/3.jpg",revision:"6dfa66384d63ada54435061274a7a9bd"},{url:"img/4.jpg",revision:"d4c45e9238fc53ba0a50ea36b12f20e7"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/5.jpg",revision:"9eff77917e87ead58dc1ba1e0761e788"},{url:"img/6.jpg",revision:"c4bae457a96b04c47fba6ddf9116f4b3"},{url:"img/7.png",revision:"f0bd99ad87ad0b088558053ef8956987"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"4741bcd4394a4f3bfee021655ee05e53"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"movies/index.html",revision:"9ef42bf912bdb57d358b1f488099588d"},{url:"music/index.html",revision:"84b242ccbb1f7887ebb912c7571ae6f6"},{url:"sw-register.js",revision:"7b1a2e373a71bc1cf03151330932ee93"},{url:"sw.js",revision:"5aa2723b3ca116a6dbf86311b77174e7"},{url:"tags/2/index.html",revision:"4a8873c8500bb1adbefdfede5b8afeff"},{url:"tags/3/index.html",revision:"c54df45de58c9d60a9cb67da4531b16a"}],{}),e.registerRoute(/^https:\/\/cdn\.pengyuhao\.love\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
