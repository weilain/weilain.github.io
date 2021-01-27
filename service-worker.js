/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/archives/2018/10/index.html","9e186a739976e1be78f19add17ac25dd"],["/archives/2018/12/index.html","35ea4247fc5729d36c8d3a271eb8d5a9"],["/archives/2018/index.html","c2e007e5c16742e4b33dd4fc6ef3e322"],["/archives/2019/05/index.html","53837026dc69a976e4c8138fcbbac6db"],["/archives/2019/07/index.html","7c50c4c11c41e6d713b1a7625e822aa9"],["/archives/2019/index.html","9c61ced2b65d7a032c3327357313ee47"],["/archives/2020/07/index.html","b6347d8304e7b631df71ee619f87bbf2"],["/archives/2020/07/page/2/index.html","f4378e3da270ec08e55b407934eef2e5"],["/archives/2020/08/index.html","2897fdea6d7ed8ee0ff6d5a193b45b24"],["/archives/2020/08/page/2/index.html","ca2dbdb5e3b4bba6831829498475949b"],["/archives/2020/09/index.html","012f3a5a7eb4f600d0956514b5e37a1a"],["/archives/2020/10/index.html","d16fc120ceb1f7b8a14cce9cf88ec3b0"],["/archives/2020/11/index.html","028ef24aeee250479d800f00bd0bd9fc"],["/archives/2020/index.html","359cf52707a836c8d070ee74363adc03"],["/archives/2020/page/2/index.html","a40e047527035bf9c7c7c0c95ddc7235"],["/archives/2020/page/3/index.html","800c19974205ad961fd3cdedf11128fd"],["/archives/2020/page/4/index.html","3d69072fb41bf0c5808b5270060941e3"],["/archives/2021/01/index.html","4ca46e1a71252d2ca919f14415527aa6"],["/archives/2021/index.html","f24d86927699bcd974112ce262277d8f"],["/archives/index.html","e6386a7d938f29721129c3da4dcf82e8"],["/archives/page/2/index.html","e9072c45351fe31104f48a5b2911b88c"],["/archives/page/3/index.html","c3c197deb2755f9bcb2dc48a0a824cc4"],["/archives/page/4/index.html","5f556557fa6e74e538b790c0619b0446"],["/archives/page/5/index.html","de2ecc856b1f5bbff998be63e8a835ea"],["/archives/page/6/index.html","0537f293801fc99e97bebf94ea8ae7f0"],["/bangumis/index.html","29e1cb8f95406b97531f628ea814cdf4"],["/books/index.html","70e301baea101c3b87f69b7d1383617a"],["/categories/Github/index.html","4b874e0b74460493813bdce398e50f73"],["/categories/Gitlab/index.html","6be28fbf80d4bcfea490213756972a41"],["/categories/Kubernetes/index.html","085c17da23340ed576c3180857ee678d"],["/categories/Mysql/index.html","27e5589167a571e648f7c2b4e8e66ac0"],["/categories/Nginx/Jenkins/index.html","73134371bacf3057bb94005127ccda2d"],["/categories/Nginx/index.html","74bb86bef4dd5a715bbadaf6e7d71134"],["/categories/Nginx/linux/index.html","85ff9c8444d6e5ba2f8591194bac711f"],["/categories/OpenSSH/index.html","3bc8f9721cc23d615d930be0259e4083"],["/categories/hexo/index.html","fbaae9d981fbd6d3f8e305f34c703327"],["/categories/hexo/page/2/index.html","608b3c15cfd12d3003a4975ddd8f7f94"],["/categories/index.html","6fb200ecc4e007a3919b775e39ed5e30"],["/categories/link/index.html","f141e5c7028d75281b12b003e0c8ade6"],["/categories/linux/index.html","405152f4807bc4c904756b95f1562bdf"],["/categories/oh-my-zsh/index.html","433436eb7de37d60650268a1b9ae5fb7"],["/categories/python/index.html","c9dc4e56041ef1ef107ba8cf0527453c"],["/categories/script/index.html","acb9195caa76580e5e89996a9818a88d"],["/categories/tools/index.html","aff0479b40278a73e8b089dee59d076a"],["/categories/奇怪的知识点/index.html","6400152efa0aaeddbf331f3bb391fb5c"],["/contact/index.html","c456d8cf3503f786a3561b6e412e15fc"],["/css/index.css","f729d0aff09703a4da73c660b7acbbfb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/veditor.css","eb2128928ad15904d36e368fdb00ff87"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","1a78e0a1cff514fae5aaa31a4ed3cfbb"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","b42c9cdac601f68568ca9b906b69c8d7"],["/js/calendar.js","9dae07e03db11437110f4529071cdae1"],["/js/languages.js","09753f588fdaae0985d91e181f3a940b"],["/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/js/veditor.js","1f5efcf664672c4a265ae7037d75e8be"],["/link/index.html","6a3d340601726536ec0ac687a950203a"],["/movies/index.html","26216ae050b2aa0a11f1f24548056391"],["/music/index.html","562dd7004930ff60996831babf6ce002"],["/navi/about/index.html","23e5db7c808edb60e3c139a77f06d27e"],["/navi/blog.ansheng.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/re.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/urllib.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/index.html","173d362807e679df6fb42a4529953c2b"],["/navi/sm.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/ww2.mathworks.cn/help/matlab/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.chuyu.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.dotcpp.com/oj/contest.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.php.net/manual/zh/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.r-project.org/other-docs.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/p/12130977/index.html","93201528b0753ac580db902e3d03a565"],["/p/12223247/index.html","e05dae19adc77919b7f406858b0fe34f"],["/p/1b825486/index.html","ef72bb053737c7039ad2c1e2079b0083"],["/p/1f7c743b/index.html","7bfa1d6d3ac523c173c2bbf7fe6752e9"],["/p/22d30f17/index.html","d97fbaa23dc57eca8b1071d56d5c0f5f"],["/p/2399c152/index.html","0c5c2d16559d35c87b13ac3596d0556e"],["/p/2651b0bd/index.html","626d626eb6f055d2a63222a631136110"],["/p/292fbf59/index.html","a62592a2bb216bfa8381e68d7a305ec1"],["/p/2c54d1ec/index.html","9191a86261a9b17cfa6fb2e24642b41b"],["/p/2d27b747/index.html","03ba44380a0bc211f9c3cd22bca0d0a0"],["/p/31397f6f/index.html","3bd3426210b3f5914e37438591efaab3"],["/p/328665dd/index.html","6839d9a0a70691940cacd35d32e0174d"],["/p/32e6fc54/index.html","0e86fa81a2d057cad67f7dab5d595d82"],["/p/339c428/index.html","418435df6db48ea166512cd6390d19ca"],["/p/36a8252d/index.html","65e6cd4a6d71787ba9d1a88b647f9325"],["/p/37369/index.html","2e0907ed8f3b6e66cc7debe6dfb16170"],["/p/38510659/index.html","7424d6341924e2efdcd7a171b70ca951"],["/p/3d65889c/index.html","d5861e82c14d1ccf1bd0ee7063783773"],["/p/492994d9/index.html","c56d872bb07ffbfac4436f867c317d7f"],["/p/4b638dc2/index.html","c7dbbe5bb72a14dd6a7a5d893a1a0937"],["/p/57aae221/index.html","9dcb130ecb7eef800d44a7287a5477ba"],["/p/5851b21/index.html","0345f87416956df9536691785d489f36"],["/p/59ce9c6a/index.html","b2981b8151486ab5c33fe0cb1c30ae20"],["/p/5e94d2a7/index.html","2ebf5cf64c29c74336fd1ddd6d3d5276"],["/p/65008a24/index.html","72318725b9cf1da04ed165a037fbf168"],["/p/69df4022/index.html","9fa8ac1f68c173d0e7b6b352c306f3f1"],["/p/6b915d25/index.html","9ea2940f215dda7d51e1d56d5fc098b9"],["/p/6ea05e36/index.html","7aa6714f86985cb45bf9a8e2ca203662"],["/p/761d0096/index.html","d0c94fd6f4214aca015522641df0e4b3"],["/p/7fa69db0/index.html","bfab64b5b120b6f2aa42f4c77c39fc6c"],["/p/8422e92e/index.html","b8b8f0ffc2d090e3f51286adc8e8aa79"],["/p/8a11f10a/index.html","e4caed13db9795a26263a61f14ac2aa1"],["/p/8b346831/index.html","66f7c09f70ceedd42a4a3ade134b9172"],["/p/8cad5570/index.html","80c421fc4fe48236b7b6d9c9d8df098e"],["/p/8eb47741/index.html","35b2cee3a63cba5b121528fd01e94451"],["/p/a564d3b/index.html","e5ad8d879d30b8c2952e8f688e3a9c51"],["/p/b0225828/index.html","f059dac369d44f25c57d070bcf40cd66"],["/p/ba1e0fab/index.html","61aa9b9d39c71340ba093a6eb0df2900"],["/p/bb2a8a2e/index.html","18aed280450c658f0d0a4b4b784d0458"],["/p/c2e90d73/index.html","e0a8cac8ce9e33635fcbb08b8afc829c"],["/p/c4492888/index.html","5b0ecbb93ddfe19ca9ecce4c328045cd"],["/p/cb1e6c4f/index.html","c28ad617a154303d9844113f72774516"],["/p/cc5f8722/index.html","383f4515a677b8a96b1b75bbf0b1b1fe"],["/p/d47d8d30/index.html","5f94e5fc97bbb32f1aed20e5faf092a3"],["/p/d64778f7/index.html","6b5f0837a8b4427216040e0d75884a6e"],["/p/d881e309/index.html","b97e8186f2ee34696e9caa1b9f2db386"],["/p/d9a940f3/index.html","5e6190d5ef2a222bf617609a2e17351e"],["/p/eee93e1e/index.html","e14c99c8918556ed442be31cc09b8200"],["/p/f700fae8/index.html","43335c320fc0f1d970ba7c1b6ebbd198"],["/p/ffb5990d/index.html","63fb1043781bd7299c1cf51b18b2d845"],["/p/fffbf386/index.html","958d9843c5d2d692d4cbf3231fa259ae"],["/page/2/index.html","e4c441546dd2390f18755613572fd24f"],["/page/3/index.html","654ebeda70b1b7e215ee8b00d9c37efa"],["/page/4/index.html","de9bb749d289db49b0a15f12c100eeaf"],["/page/5/index.html","60653f461f4963a4c26e7b7c64be330d"],["/page/6/index.html","e21b3238741ce1bbfe725797885db35c"],["/tags/CDN/index.html","808814cc2784db791fee1a8e971dd21e"],["/tags/Github/index.html","ccc2719a3e37d41b509a522f101c3d93"],["/tags/Gitlab/index.html","03cd9b0f34c2ba5b032d5e695dd44d77"],["/tags/HTTrack/index.html","861b20a9473cc8bb235ba5010acdff9d"],["/tags/Jenkins/index.html","8d5e7372ad89b3a1e0cacbf58df7672a"],["/tags/Kubernetes/index.html","c2e604dffa560e117fd69b483d0c40fa"],["/tags/Netgear网件/index.html","13891d424578d43e60b7c176df7667f3"],["/tags/OpenSSh/index.html","6022c6e0a34792cc50f326f8462824a6"],["/tags/R7000/index.html","e99438877d19f5ecfea06e2b22c73be7"],["/tags/TZ/index.html","50e9cd9989faf78ac7327118af2d0fa6"],["/tags/abbrlink/index.html","c998db14a2a2c21c20cc24e4a7fe1ce7"],["/tags/aplayer/index.html","af135d459d5eb4994201c054f229e864"],["/tags/authenticator/index.html","19b71eca212881928a92a017cd5652ee"],["/tags/awk/index.html","b3a604c8de88c67f9816880eba10c621"],["/tags/bilibili/index.html","097c4841b679eae627e256b4ac4eb18f"],["/tags/butterfly/index.html","f4ce52b45b39662dc5d5afc45567437a"],["/tags/docker/index.html","4f2951087bfaafd40b06d19ebe9af6b6"],["/tags/douban/index.html","bb545b5a6f6e535d1a375d3e4bee8c10"],["/tags/expires/index.html","9da02102682f405f651916b8c1482f53"],["/tags/google/index.html","cc2343dc5239e79b538341e83171e85b"],["/tags/hexo/index.html","f663e4069651d86f46f0a9fdffc7cae6"],["/tags/hexo/page/2/index.html","4dfdd05745de9843a8fcc4073afc27fd"],["/tags/https/index.html","0c7c739dbb96018144beaf2fa96cfe1b"],["/tags/index.html","56086cc6d950be9d140d41673c575523"],["/tags/jsDelivr/index.html","d2913e4876182c48bc4db5d10d48b5fe"],["/tags/link/index.html","f19efa34e74d9618b898add213a61c97"],["/tags/linux/index.html","af33aa47d946898f881991e8da29977a"],["/tags/location/index.html","e40f50a66e0600b2b476cebf41b59696"],["/tags/mycat/index.html","b2f01993a5aaf17996346568163ca4ae"],["/tags/mysql/index.html","a42985fa0542864a1ece60bc61aca462"],["/tags/nginx/index.html","6207d253b61ec83ae48c20b8e8738d35"],["/tags/nodeAffinity/index.html","3f081566f973c8f2118c7399fdb2bfe1"],["/tags/nodeName/index.html","46af6e40eb709b6ad676b32d45f12f81"],["/tags/nodeSelector/index.html","b3a0d47e92cf7e0e8b4cfe53330961d1"],["/tags/nslookup/index.html","701dbcf79e8775eb18b342ba0886f671"],["/tags/oh-my-zsh/index.html","28f542bb8d268bfc23bd552d879b9de8"],["/tags/podAffinity/index.html","05770c742ccb8084d277577e1e611555"],["/tags/podAntiAffinity/index.html","9060f2e819e863cc9b333bd66adc25b5"],["/tags/proxy-pass/index.html","e589bd611fe5de3029acfe5cce28a418"],["/tags/python/index.html","8ed6dec1f3a4c715dfef30d2d74c4c7a"],["/tags/qiniu/index.html","0884e69f9116525be9df3572bf2cbc6f"],["/tags/rewrite/index.html","c848e51e48973133cb8a3088e287643e"],["/tags/sed/index.html","db9759d060e25442761c50b8566bdeec"],["/tags/shell/index.html","bb2ad99f32a90e196dcb56021c32ec12"],["/tags/valine/index.html","fb1e3a22a12dbe2d2b48c9d127721185"],["/tags/返回码/index.html","49c74a7ea5d405079a2bf3ae85bffc57"],["/tags/重定向/index.html","24c5f3569ee0620f7769ce275e151038"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":null});




