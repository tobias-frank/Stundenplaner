"use strict";var precacheConfig=[["/index.html","d53365bfec83f9d766d04a1520c77c76"],["/static/css/main.688629cc.css","15bed9a19cfa0d741395c82dcfb22923"],["/static/js/main.5dcd3987.js","10829274c83a7e57f5c71b72fe0d83c7"],["/static/media/Grid.91094cdb.png","91094cdbe1abd6c8066730398b98a8cf"],["/static/media/iconAdd.ae9e6588.svg","ae9e658863250849b56612257cce9bde"],["/static/media/iconCreate.5c0dcd54.svg","5c0dcd54c596a2408d73cdec3c55fbe0"],["/static/media/iconDropdown.1e2db795.svg","1e2db795c76a89c592d598a88f742cc9"],["/static/media/iconEdit.907be2c8.svg","907be2c84655f94834911fe483c227d8"],["/static/media/iconInvisible.1e77c646.svg","1e77c6465fbb54d1485af1883c953360"],["/static/media/iconList.632c11af.svg","632c11af1f294098f9ff745ff2d0635e"],["/static/media/iconPassword.c8ad35f8.svg","c8ad35f8146f0ac9e0cb14f41f9f59f5"],["/static/media/iconUser.ce87af49.svg","ce87af4932f3c1eef45a32f8221bd6c3"],["/static/media/iconVisible.c577e0f8.svg","c577e0f8e40672066310c3ee75596290"],["/static/media/logo.1fd241bf.svg","1fd241bf103c34b52fc926c2357fcad0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,c){var a=new URL(e);return c&&a.pathname.match(c)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],c=new URL(t,self.location),a=createCacheKey(c,hashParamName,n,/\.\w{8}\./);return[c.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,c),e=urlsToCacheKeys.has(n));var a="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});