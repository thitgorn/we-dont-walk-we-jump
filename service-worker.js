"use strict";var precacheConfig=[["/we-dont-walk-we-jump/index.html","2f91c4d148adfd47e9f244aa5af68cf8"],["/we-dont-walk-we-jump/static/css/main.e4968bb7.css","bc72b15895909fa79cc440b9d93bc39a"],["/we-dont-walk-we-jump/static/js/main.2397de71.js","6eeff05e91fe5619a62f5c6407d26274"],["/we-dont-walk-we-jump/static/media/1_Zero.f7f45958.jpg","f7f459581faa8c9160bc1e15d90e8e7e"],["/we-dont-walk-we-jump/static/media/2_Link.1553c1f3.jpg","1553c1f30b3f82883dc90131d1faf22d"],["/we-dont-walk-we-jump/static/media/3_Code.8640f495.jpg","8640f495d8dc2e1e1381cb3cfaaf19c1"],["/we-dont-walk-we-jump/static/media/4_Rabbit.b570fc62.jpg","b570fc621c52508ebe5be4fa92cbf9e1"],["/we-dont-walk-we-jump/static/media/5_Moonshot.1137d5c1.jpg","1137d5c1237e77243f831ecbca650e49"],["/we-dont-walk-we-jump/static/media/Climb-Left-01.7655e2ad.png","7655e2adf900b3d2075139666730f023"],["/we-dont-walk-we-jump/static/media/Climb-Left-02.1645827f.png","1645827f4a369f12d5efd7584b1d4c93"],["/we-dont-walk-we-jump/static/media/Climb-Left-03.651ba0b0.png","651ba0b0b7ebea881cbb69d9c76c5cc5"],["/we-dont-walk-we-jump/static/media/Climb-Right-01.b9d2ecb6.png","b9d2ecb6a87250f34875cfc5085b6d99"],["/we-dont-walk-we-jump/static/media/Climb-Right-02.9de91a4a.png","9de91a4acb490bd00101bc9efbac7586"],["/we-dont-walk-we-jump/static/media/Climb-Right-03.6ba22705.png","6ba2270580563f19f653b858d02bb6b7"],["/we-dont-walk-we-jump/static/media/L.e98dfbe3.png","e98dfbe3a31ebc2fceb353071a54f8b2"],["/we-dont-walk-we-jump/static/media/Left.f58af952.png","f58af95222ae6c614496116b244c7c71"],["/we-dont-walk-we-jump/static/media/R.96fe306b.png","96fe306b282b6e97399aa498125fdc17"],["/we-dont-walk-we-jump/static/media/Right.ba450ea3.png","ba450ea3aee7c89c89218b14db3d12ce"],["/we-dont-walk-we-jump/static/media/center.1d109b38.png","1d109b38b615ddc8515de1f7c3bfb2cc"],["/we-dont-walk-we-jump/static/media/city.0b30f98a.png","0b30f98ad5f8a61689b04c764e3f1975"],["/we-dont-walk-we-jump/static/media/codeandcraft.d1423372.png","d1423372399d40de630d0ebf80a12190"],["/we-dont-walk-we-jump/static/media/left-key.699197f8.svg","699197f85b9bb14a5b28fbeb36bb8c6e"],["/we-dont-walk-we-jump/static/media/link.2471f644.png","2471f644db3cea7d68aac86990d1150b"],["/we-dont-walk-we-jump/static/media/moonshot.6549ca42.png","6549ca42820ee2a4041b45f9ddff6c97"],["/we-dont-walk-we-jump/static/media/rabbitstale.c832ed2d.png","c832ed2d6c271273ac9dc3da922dc906"],["/we-dont-walk-we-jump/static/media/right-key.19d2b4cf.svg","19d2b4cf0c7e13b4213fa0e2c054c1df"],["/we-dont-walk-we-jump/static/media/thezero.52508974.png","525089743ae729b19bff431553563050"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/we-dont-walk-we-jump/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});