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

var precacheConfig = [["/archives/2018/10/index.html","e785103fdc967d6505978fc6e7207997"],["/archives/2018/12/index.html","e76cb1bf344aa32a0fefdc386b7a3fef"],["/archives/2018/index.html","c1a2c330ed62d30f9079bb347da971ce"],["/archives/2019/05/index.html","364f1ce0429282668f75f0e22cc68606"],["/archives/2019/07/index.html","9ba1faf78bbe2ca57635dcf5218a7525"],["/archives/2019/index.html","bacfa379b1589999d18b21fa1f7e1376"],["/archives/2020/07/index.html","3a65fe21921b1f285f516c2445198b6f"],["/archives/2020/07/page/2/index.html","e7ab3746b111c348dcc65d68e6beab48"],["/archives/2020/08/index.html","fddb2cb03fc6aa5a11a8b29c3c247c60"],["/archives/2020/08/page/2/index.html","e393f9525fe19c991a66dbb03b238c7c"],["/archives/2020/09/index.html","d043d25951c3de341391caf139f72f4c"],["/archives/2020/10/index.html","cc4b0ff560cc3943fef4e75626d9a9f7"],["/archives/2020/11/index.html","99d68bab8125d3c1c55afc7c72d78742"],["/archives/2020/index.html","d39af070557587b7205549decae309bc"],["/archives/2020/page/2/index.html","11c9d459ad20df91c5759c1c7bbc2fd3"],["/archives/2020/page/3/index.html","31bcf883bb2f05a02289dcc7993fafd3"],["/archives/2020/page/4/index.html","8cff5e87fcf9425cc9ba4ec937ca7e21"],["/archives/2021/01/index.html","af561b3d89731e10c774bf8f1b376848"],["/archives/2021/index.html","c2c3d5fdefa32bb469f73280cb3f2946"],["/archives/index.html","dd3b214cb3d808127330afed2205d2bc"],["/archives/page/2/index.html","0b041e927abfcb623a23496f5b96a8a0"],["/archives/page/3/index.html","69770c8586f93862bb688d37623ac908"],["/archives/page/4/index.html","8ceddfa535ff9c163ba5f34afa2420d2"],["/archives/page/5/index.html","e222032592811bafb52110fff0ad0689"],["/archives/page/6/index.html","d0ea2eb944e2488849883741cc6e70ee"],["/bangumis/index.html","c10e70e1d5b6bc17e0bdb1b8e4ea6d73"],["/books/index.html","f612a299701de940d63aa37edcab2635"],["/categories/Github/index.html","adbcd2635903967ac67c013dc7e44fa0"],["/categories/Gitlab/index.html","80e14893455457a479fe4b4a22a07706"],["/categories/Kubernetes/index.html","5005457a30f26eee66ca45d2daaff237"],["/categories/Mysql/index.html","17183888d573a01987b2e14b033d0a27"],["/categories/Nginx/Jenkins/index.html","1a2154e723b0e4d23671b99dbc1ad9d1"],["/categories/Nginx/index.html","d567da99f6369f27cb4de1d653bbb7b2"],["/categories/Nginx/linux/index.html","ec86b4ca8d50cfaf5d0217cdfe096dae"],["/categories/OpenSSH/index.html","b1397e423902734f3f77307e5bc5ac27"],["/categories/hexo/index.html","3bb42683599f42320a80d0171bd1bc5c"],["/categories/hexo/page/2/index.html","96d40443b1958eb3b5f5b9916aca73cd"],["/categories/index.html","d47ab053ee396e4c05cd99f0adc88440"],["/categories/link/index.html","afaa8e771541db72d38b2f09f3be72ae"],["/categories/linux/index.html","401a5ad79a40b3f7d2daa95c0858c6e0"],["/categories/oh-my-zsh/index.html","275af8acc6ee5b5485267c2e6bb30fec"],["/categories/python/index.html","c417799e2af3c7987e54f6e3f03fde24"],["/categories/script/index.html","eb9141c88dbb199dec6f57227c69c361"],["/categories/tools/index.html","bacd286efe44627f93c149d6a59ecd89"],["/categories/奇怪的知识点/index.html","9f152a20a33a75d14e2d24634ac3729b"],["/contact/index.html","e6f2d1bdfec55cd9781c12957a2aeb4f"],["/css/index.css","f729d0aff09703a4da73c660b7acbbfb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/veditor.css","eb2128928ad15904d36e368fdb00ff87"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","1a78e0a1cff514fae5aaa31a4ed3cfbb"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","dafada6e3456e332665291cbda278b76"],["/js/calendar.js","e2af33b509cf06bb04c2020f2b0d0a66"],["/js/crash_cheat.js","4979c32f5c6c3ed5b491580fd75c63f1"],["/js/languages.js","09753f588fdaae0985d91e181f3a940b"],["/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/js/veditor.js","1f5efcf664672c4a265ae7037d75e8be"],["/link/index.html","d30e1b69776a74c1dc6a4a84d6bae1fe"],["/movies/index.html","931d7b607fdb8203e15ede6845602854"],["/music/index.html","f5d7453001f9e07f69c9e1e7bc7722d6"],["/navi/about/index.html","23e5db7c808edb60e3c139a77f06d27e"],["/navi/blog.ansheng.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/re.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/urllib.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/index.html","173d362807e679df6fb42a4529953c2b"],["/navi/sm.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/ww2.mathworks.cn/help/matlab/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.chuyu.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.dotcpp.com/oj/contest.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.php.net/manual/zh/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.r-project.org/other-docs.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/p/12130977/index.html","0d01f7cd82391c89ea8e9152af5a39e3"],["/p/12223247/index.html","97064861b9d1619cfd0dbe11b4ed183a"],["/p/1b825486/index.html","95983520d1db6ad83b5e76cf4dcffe93"],["/p/1f7c743b/index.html","d71669d2142982b601aa934be860a625"],["/p/22d30f17/index.html","aef944f22bc9826a1d78560ecba33f28"],["/p/2399c152/index.html","3112553f425d41aab8ab644604b40afe"],["/p/2651b0bd/index.html","234cb2e9ed8625ca765e2c4d172fedd8"],["/p/292fbf59/index.html","20b3d243438d48da95302d1107133e33"],["/p/2c54d1ec/index.html","30b6e75e6fa2e18b36abb4298aa93d18"],["/p/2d27b747/index.html","7119dc280a09aa1da721a99fa1a10ccd"],["/p/31397f6f/index.html","3c7f9879df4abad759883d82890b9b47"],["/p/328665dd/index.html","9059fe793c47a57b210807cff371a839"],["/p/32e6fc54/index.html","05845891ce8c5632e6090c01dd78bebb"],["/p/339c428/index.html","5b034dca3ebae08b7054bba946b9f67e"],["/p/36a8252d/index.html","1a2cd5a24e18ba2200484c4c8d958bab"],["/p/37369/index.html","c1c863384ed2ef508abb1dddcfcf69cf"],["/p/38510659/index.html","266569f3fab18f0c15478b307e0aa9d5"],["/p/3d65889c/index.html","0d091e381b3b502c3f8da3cae72bba77"],["/p/492994d9/index.html","83c054dc7008819409f24cca7abb9253"],["/p/4b638dc2/index.html","9af8563d142dc3ff18f9609466710ff3"],["/p/57aae221/index.html","41e53b17b4abe70ab52865290ca81603"],["/p/5851b21/index.html","64a1ccc88839bc46de6ecbf124b1c4ec"],["/p/59ce9c6a/index.html","346a8b6ad7314b19a10826fe49640654"],["/p/5e94d2a7/index.html","940b7251e163c41e5f958eb54923fb44"],["/p/65008a24/index.html","42b0910b9e6998cb1696388ae22f726a"],["/p/69df4022/index.html","07a9b6498b780d963490e5a4b627cb4f"],["/p/6b915d25/index.html","1c0d6fda966cf320b861472850c7643d"],["/p/6ea05e36/index.html","4d25b27530cc027bf6d637f7d8ad2638"],["/p/761d0096/index.html","4559d199a5a28d58ff657fee8ded8db0"],["/p/7fa69db0/index.html","f8f01ee37243c5f0aecc6e50bc693939"],["/p/8422e92e/index.html","70257eff62f400e21241c69a8eccd805"],["/p/8a11f10a/index.html","17516e2c1de11a51c6f3bd077a8b3637"],["/p/8b346831/index.html","0a84a5145f387c5efd393c41d3548346"],["/p/8cad5570/index.html","f94af7454a4e3179a0e8c59603dc75f8"],["/p/8eb47741/index.html","8c55598cd2c7f615b52cef7ea5876c6e"],["/p/a564d3b/index.html","cbacdf29877dc37dc60720c3a5734f69"],["/p/b0225828/index.html","f02aadb626e85a44ffece3621cdc3b40"],["/p/ba1e0fab/index.html","dc5b60dcaa4c91d009c2140643d72b11"],["/p/bb2a8a2e/index.html","d8f750f85fac239ba5d52ee9f4e61997"],["/p/c2e90d73/index.html","9776f423b3e94c3eb57a962e9a088243"],["/p/c4492888/index.html","84b3ae31162a64721417d64bc7bce3fc"],["/p/cb1e6c4f/index.html","60cb6926e289bce2b1b1ad0a0ba46b9b"],["/p/cc5f8722/index.html","6f988bfb38ce38355cc02ec2f11bf2c6"],["/p/d47d8d30/index.html","72623f1ac9eb4cbe0372ecbac5b68a0e"],["/p/d64778f7/index.html","fec8a126e7b46462013d2f766515b31b"],["/p/d881e309/index.html","e8d3b35051b15bedb2c76391ee7fc5cc"],["/p/d9a940f3/index.html","1b49fb6475dc88f413374f3901165d30"],["/p/eee93e1e/index.html","c097413ce987bf790e1581047dbbe854"],["/p/f700fae8/index.html","6c0aedb025d94d996c72124da7f67385"],["/p/ffb5990d/index.html","e4cbca60aba74443c62e9e728cda60a4"],["/p/fffbf386/index.html","36bc459d0a0b5ad067ca66a450f17728"],["/page/2/index.html","c0381d126ad001dd5bbc68ef98028b2a"],["/page/3/index.html","d6e2a6c70f6aada01fac490e0ecf655a"],["/page/4/index.html","f9013766b07e07b29aaeb0d719ccc702"],["/page/5/index.html","ed144c917d96b2f1bb8c1798c51b602a"],["/page/6/index.html","a343c02d08db03ba2cf42e3046259793"],["/tags/CDN/index.html","1bd63853f538c63a1bc3547565d95471"],["/tags/Github/index.html","f2461aecafc0f9d2f6d499702130c2e6"],["/tags/Gitlab/index.html","875661dcb92e3b6fbdc305cd66776a63"],["/tags/HTTrack/index.html","c81acc5736565d541ccbade1718e6df0"],["/tags/Jenkins/index.html","bd52df9f63d88abc76167809ca57c252"],["/tags/Kubernetes/index.html","a1ebc4e9e9b9755028376b7907cbd97c"],["/tags/Netgear网件/index.html","9de1b897cdb3bbb41da76b5469310d90"],["/tags/OpenSSh/index.html","920b9f8244242386ad512a87960f50f0"],["/tags/R7000/index.html","8d9a1f90eab25ce0824167e5878ff301"],["/tags/TZ/index.html","ecb918f5ce0ddaa238aaf0b5fb2b6b60"],["/tags/abbrlink/index.html","b77a1a90a0ebfc2ec4235adc4d424b5f"],["/tags/aplayer/index.html","1ce6614647ee8ae4e664514bbf12ce83"],["/tags/authenticator/index.html","ca44b84461caf7c66ec7f63fecf8bda8"],["/tags/awk/index.html","4ed34161ea647f2c28a5cf6279b87636"],["/tags/bilibili/index.html","2f20fc9380537ff1f9715fa20d828649"],["/tags/butterfly/index.html","020b1d65b1c80289ef063875d51a9574"],["/tags/docker/index.html","c29d4498b2a94a7ffa3347119cf6cfb8"],["/tags/douban/index.html","1419237c6387735dbc10f8ec71e33cf9"],["/tags/expires/index.html","23fdf5204d6d5cbd395205c515a976fe"],["/tags/google/index.html","edb1c2931a41033dbafb88d9504a079b"],["/tags/hexo/index.html","f78bba18f6399c352e8acea4eb94fdea"],["/tags/hexo/page/2/index.html","c675be24bfc154dcd8abebc9c5aba607"],["/tags/https/index.html","b8426cd19be40877174c3aa8ed76b423"],["/tags/index.html","6c8180ba8644e5c7569556afd895f77c"],["/tags/jsDelivr/index.html","27b41a8b0b4b0f52ecd8581d77d41112"],["/tags/link/index.html","70505b0cf4ebd1d5c19a14e873ddd3c9"],["/tags/linux/index.html","fc9d0456b19dba8ceb0dd34cad3e90a7"],["/tags/location/index.html","35decffa9792780d485d8de03bad81a2"],["/tags/mycat/index.html","28448cab98823ca67cca856e10900d9f"],["/tags/mysql/index.html","3b937b83140cc674a5dd0bc1a16afb11"],["/tags/nginx/index.html","03cff5fe19eb7c63c45d01de60f0910f"],["/tags/nodeAffinity/index.html","d35fe4ce05a95a5b02c8ab574ea432ca"],["/tags/nodeName/index.html","20266b547613343fa7b5f84914882e94"],["/tags/nodeSelector/index.html","f7de0cac79f6dd65479ac4ab993847a3"],["/tags/nslookup/index.html","5b9e0ba089acaeece85efe0bc80cc426"],["/tags/oh-my-zsh/index.html","399d58dbb37e485064e9d923abcce6a5"],["/tags/podAffinity/index.html","8e4a687115ab0d55593f426e652fb53d"],["/tags/podAntiAffinity/index.html","629fd81524ddc8341ef8aaa4c5dfc834"],["/tags/proxy-pass/index.html","2e73e2019fe858c66bd0c2d4fda0d3eb"],["/tags/python/index.html","340a878b133bef7c0f1cf526393f5820"],["/tags/qiniu/index.html","956aeb7d650cb3de3fda796267d120a7"],["/tags/rewrite/index.html","68cb017c21dd682e30b33b2d76ea6313"],["/tags/sed/index.html","09d26024dbcb03e7852f68ba34b5dc42"],["/tags/shell/index.html","4587d0876796f6ca916d38d7a681bee7"],["/tags/valine/index.html","80d037e9b1621dd7126077a198d0764d"],["/tags/返回码/index.html","ffccf25263d44e32b3da43f3c847c46b"],["/tags/重定向/index.html","690db25d0fcdb9192af292166dcf3dce"]];
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




