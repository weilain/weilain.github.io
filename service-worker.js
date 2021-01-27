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

var precacheConfig = [["/archives/2018/10/index.html","f5efe063ff3eae52bf006762b692b67c"],["/archives/2018/12/index.html","2e696975333200a6f2e6c232858e5173"],["/archives/2018/index.html","28ad67070e29dd66490c550077b8b32f"],["/archives/2019/05/index.html","2ae0f5b1720cd13868f99c7397e13959"],["/archives/2019/07/index.html","e382a6ed25344e395ddc821dafed0a82"],["/archives/2019/index.html","390d473359b29643cafea7bc16e5f4da"],["/archives/2020/07/index.html","c7e5a4be2cde9d44baf4d83f7fc07b3c"],["/archives/2020/07/page/2/index.html","c6aae1c3ea337cc455aae86506e5d7f5"],["/archives/2020/08/index.html","0d8be7bdca6fe9ea1e436a5d300968f0"],["/archives/2020/08/page/2/index.html","3f94a237a6d54d234a1cc160f3f93f2f"],["/archives/2020/09/index.html","b7495f4de7fb3c94a787b85b238e11e1"],["/archives/2020/10/index.html","e51c1f2b4d85b37c2047a992c9c1c1b5"],["/archives/2020/11/index.html","ac5fdc09515d3c1109ee5c18a9232112"],["/archives/2020/index.html","a356b6be426086cdda57b31e9520780b"],["/archives/2020/page/2/index.html","333f95bac69bebd3983bd6b6b57c3876"],["/archives/2020/page/3/index.html","cc319476e54ce28119ed6831fe49be00"],["/archives/2020/page/4/index.html","8aef6ca43d7b2d1962fa086391079d7a"],["/archives/2021/01/index.html","7f17d4283950327c7153b2d060473574"],["/archives/2021/index.html","2e04a795c019abebaf00f474207e5a5b"],["/archives/index.html","58f3e74d0b015e017f17e133569b3311"],["/archives/page/2/index.html","23e9e251533caa4360259a34623e61fb"],["/archives/page/3/index.html","8cad13532d07ea75b412130f2b0805ab"],["/archives/page/4/index.html","329ab82e5f82fe056020dab4e00ac68a"],["/archives/page/5/index.html","4d1fa23181fcac7e858ba3c4526d8f60"],["/archives/page/6/index.html","3f3d86e118afc514f5a9523f50a9b777"],["/bangumis/index.html","f51e16a56973ed0e218b0afdd5e52d04"],["/books/index.html","e7105cc32a983a747cd46d152aac121e"],["/categories/Github/index.html","458136b9c14f9dd2349d4703ebd915d6"],["/categories/Gitlab/index.html","d2291d784f9e1a80e80a392a7e2a9c21"],["/categories/Kubernetes/index.html","9969175961c501a5002dad6b19c31b01"],["/categories/Mysql/index.html","f1e2da9379bc121040e00c8a47600efc"],["/categories/Nginx/Jenkins/index.html","96eb130e8584d49d514b55882767dd4f"],["/categories/Nginx/index.html","148bcad1ba64349c36187c25a012c290"],["/categories/Nginx/linux/index.html","35baffd0f78a5b0e917f8a439f05ba55"],["/categories/OpenSSH/index.html","1f7e70e4e0a8c5480f22c3b967a908bb"],["/categories/hexo/index.html","403ee31352a8b663b097d0f37130379a"],["/categories/hexo/page/2/index.html","81413e624069a27ef4f6cf1d5449ec81"],["/categories/index.html","4847f176f855cba19dade44166ae1758"],["/categories/link/index.html","dcebeb933f72690481184f7c186dddcd"],["/categories/linux/index.html","decbbdf5ebc2477b60c258792ac176fa"],["/categories/oh-my-zsh/index.html","ae87d948446c27ddfaed431af7087622"],["/categories/python/index.html","4e793a4a6a5a8945f9e7d0fa49c30810"],["/categories/script/index.html","471ae714964a5d91376f6af07eef9f1b"],["/categories/tools/index.html","eceffa4272ef3153aad24f3983b894d8"],["/categories/奇怪的知识点/index.html","ec5f0e02b3c4df4c6a6f2ad395924c6e"],["/contact/index.html","a4dd9732244a78589b8a8175e9c0b715"],["/css/index.css","f729d0aff09703a4da73c660b7acbbfb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/veditor.css","eb2128928ad15904d36e368fdb00ff87"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","1a78e0a1cff514fae5aaa31a4ed3cfbb"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","a08905e4b1637c3c5274db87aa1a9890"],["/js/calendar.js","e2af33b509cf06bb04c2020f2b0d0a66"],["/js/crash_cheat.js","4979c32f5c6c3ed5b491580fd75c63f1"],["/js/languages.js","09753f588fdaae0985d91e181f3a940b"],["/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/js/veditor.js","1f5efcf664672c4a265ae7037d75e8be"],["/link/index.html","c981a2ab50503f19c56ad3f024d4e982"],["/movies/index.html","63020a62ba858eaaabb79455e92ceed9"],["/music/index.html","849a041f1a7113d477b5cdf9278cc55d"],["/navi/about/index.html","23e5db7c808edb60e3c139a77f06d27e"],["/navi/blog.ansheng.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/re.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/urllib.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/index.html","173d362807e679df6fb42a4529953c2b"],["/navi/sm.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/ww2.mathworks.cn/help/matlab/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.chuyu.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.dotcpp.com/oj/contest.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.php.net/manual/zh/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.r-project.org/other-docs.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/p/12130977/index.html","5ed5cb3e3d9fa55e11b4ce8ffdfdd3db"],["/p/12223247/index.html","ad4af2f97b1fdac3f26c321b6e2f4dd4"],["/p/1b825486/index.html","11ba9442fb47a9072e4f888feb10537b"],["/p/1f7c743b/index.html","e9a1128aa34426d3b81692c89f4661dc"],["/p/22d30f17/index.html","1eba34759b81a8df8b17a51f198161e7"],["/p/2399c152/index.html","81af7bbd01129f15ec85ded3412d903f"],["/p/2651b0bd/index.html","f80dfb4df5a1547afcdc3a3bbc71c57d"],["/p/292fbf59/index.html","8787c7e59427e5467dffaa2904c80178"],["/p/2c54d1ec/index.html","ab49f2ac4409d2ebf25c5ecf3aa47d24"],["/p/2d27b747/index.html","a7e614db3b13686baea771cc722a296e"],["/p/31397f6f/index.html","5d4d89f5272eab3d0010f97e0b1a22e7"],["/p/328665dd/index.html","2d1dbaa3eff0ed114adbbb9274d4f30b"],["/p/32e6fc54/index.html","edfef50f0554e4bb984d3d42da2a8cfb"],["/p/339c428/index.html","bbdf37d5843e8c41329e6f43d8ae113f"],["/p/36a8252d/index.html","fcd0445216f54d6827137b60ff1bc5c1"],["/p/37369/index.html","520f6d89a7461760656d65f7520ab052"],["/p/38510659/index.html","c72141f5e0b1f0efab60f1b06b56b9b3"],["/p/3d65889c/index.html","9d339d17cc72b8322338ea302ffbea41"],["/p/492994d9/index.html","0a22c7b8819e4e778a1e07380c615011"],["/p/4b638dc2/index.html","0750cf171943dbbd660dd373b6b7f360"],["/p/57aae221/index.html","b6547d94cbe8741e2bf660afa21b0410"],["/p/5851b21/index.html","dbc040bb1af8a9ec7dc010b0ff56f0e0"],["/p/59ce9c6a/index.html","d8acdf796f689d88bc29340f2d9e1f98"],["/p/5e94d2a7/index.html","746ec1635cd46609192365f82d9a5db2"],["/p/65008a24/index.html","c9e1ffffa4d310f09144ef675b6a1cc0"],["/p/69df4022/index.html","e1b901e83846b17fdff66d5f7b7bd1cb"],["/p/6b915d25/index.html","0359793a74cb426f2847b58fcd4b9bdd"],["/p/6ea05e36/index.html","903e0d6db9ae4a681491da20244846e4"],["/p/761d0096/index.html","ecf7ee9b31e0244b567a1517e7c96a0b"],["/p/7fa69db0/index.html","67d4e4f78d23c61a5f6440b44fd2ab5c"],["/p/8422e92e/index.html","aff8741b99d6f45aad4cff900d11b397"],["/p/8a11f10a/index.html","d423aab0d1741e3aabb487bc28a07f8b"],["/p/8b346831/index.html","3b52f908647b18c1ff5d3f2b86167984"],["/p/8cad5570/index.html","c5ff59a78a1d7c6dab8437e50c1879ec"],["/p/8eb47741/index.html","51fcfe13ed22b46865ff3fba72d2557f"],["/p/a564d3b/index.html","953d2255503a9a86095829d46b1e27a4"],["/p/b0225828/index.html","540747209584a38c621f75f95e88f6bf"],["/p/ba1e0fab/index.html","d1e4bed130594f800c86a4959872e98b"],["/p/bb2a8a2e/index.html","a491b3fd096045279759ed5ab7356972"],["/p/c2e90d73/index.html","981f8a52d3d5f729d5a78d3b387f2400"],["/p/c4492888/index.html","078c8463567304a3b39dfa1b40057628"],["/p/cb1e6c4f/index.html","c01ab53dac3fa2053f33d927df2b9546"],["/p/cc5f8722/index.html","62bc720b1db61a4d30f841df575d3148"],["/p/d47d8d30/index.html","3035c8423c28754548799a3f48ce30e8"],["/p/d64778f7/index.html","4e03e316535206befd7448c5864456d4"],["/p/d881e309/index.html","3346f2d7605d0d75c02ca30873ead7e7"],["/p/d9a940f3/index.html","4592522e7d3908bc633416ea355d4757"],["/p/eee93e1e/index.html","c95f395a12a9968a6547f56feedb8311"],["/p/f700fae8/index.html","fc312a77dc19a94fff3840a4f196326c"],["/p/ffb5990d/index.html","732405a93bf817ac9fec0665e0d4ee03"],["/p/fffbf386/index.html","0701f1b7bac80658d935c7136b030617"],["/page/2/index.html","16aeee3819eab385ec0351673a450763"],["/page/3/index.html","a25b821b22a90195dc3cc102b918171b"],["/page/4/index.html","488658fd9aa8c6b1385061427a144d78"],["/page/5/index.html","c9ab373100c96ac7fbada2faf1663846"],["/page/6/index.html","3bed6bf412f91934ab510af87c762629"],["/tags/CDN/index.html","da19d65730d03531cd16b3cea8f83f02"],["/tags/Github/index.html","7e2f935d9dbb3cba93f6f8e1dc7cb8e0"],["/tags/Gitlab/index.html","476d8cbe4b14e5c4fdd82368e29c71a6"],["/tags/HTTrack/index.html","2f660d5156dd0dda265d323fd27892ad"],["/tags/Jenkins/index.html","510dfc2332dddeb6f17de75f9e810387"],["/tags/Kubernetes/index.html","22d7975bda88998ef56a5ceb9fc67f23"],["/tags/Netgear网件/index.html","021fbf1b3f85fa8f3c77503207dc34f1"],["/tags/OpenSSh/index.html","343e9853f0f7d010389ef13ad94dd7d2"],["/tags/R7000/index.html","c21dea268d756ebc3014dd11df2651e8"],["/tags/TZ/index.html","38ee29878a9491e25fe2e9d3df300f4d"],["/tags/abbrlink/index.html","e05cfe00aacb663ac7d90d1b16c28ae4"],["/tags/aplayer/index.html","3bdad8f0509ee854e2c881a40eab40f0"],["/tags/authenticator/index.html","8e80b4e1b22d54bd7d1f84d1b366c5de"],["/tags/awk/index.html","246271398d76d0b8ea183ca866f73b12"],["/tags/bilibili/index.html","0d1108ceeb3b0ab71cc2ff21f1e5ca85"],["/tags/butterfly/index.html","cad2615427bd72158cc80c22262d9e44"],["/tags/docker/index.html","d5bdc4747f6d59a30635b518a57e6f96"],["/tags/douban/index.html","aad97f1e7681e4ebf88001c3af5f27ee"],["/tags/expires/index.html","b21150ae73746840233ce73d3acb7262"],["/tags/google/index.html","706bac56df0c68746103f074e27634d2"],["/tags/hexo/index.html","0720dba5815a8ab96ea8c1bfed232925"],["/tags/hexo/page/2/index.html","490810f99e5cb8d62691584142d5b545"],["/tags/https/index.html","a9098556bbf37bba1e0112f21ecf1412"],["/tags/index.html","84e6c6dcee97be8f9af37f3102e7327e"],["/tags/jsDelivr/index.html","d8672882ecf8a7e10db080c8954d0375"],["/tags/link/index.html","1a11e4022da333d00f90501406c05951"],["/tags/linux/index.html","367c4499d18f7d321731bfda875db412"],["/tags/location/index.html","1d15437c91e5ea99ac43b376193b425e"],["/tags/mycat/index.html","06fe11af57ad5613a48fc97671658b44"],["/tags/mysql/index.html","a08952caa69640c1700eb79ca2927d72"],["/tags/nginx/index.html","b51af469147831319e15224f32b83903"],["/tags/nodeAffinity/index.html","f421150c8ea898cdd6a46857017f5539"],["/tags/nodeName/index.html","6339566f424ef16cb26d684c183edd02"],["/tags/nodeSelector/index.html","87bfa32abda5f4af1867155e55641857"],["/tags/nslookup/index.html","196ef4efb0d832a8daef2351812649f1"],["/tags/oh-my-zsh/index.html","81d1bc94b49244090226a0a0e3f623de"],["/tags/podAffinity/index.html","01e91572b15c1ded046a1e48ad445cd7"],["/tags/podAntiAffinity/index.html","e99e2b7b9b1b0a36c28b1056f899afc2"],["/tags/proxy-pass/index.html","b393c7f8be574a09bc423e20ea5bd26f"],["/tags/python/index.html","e49a9ffb4c2cb869a2f5ceba20455538"],["/tags/qiniu/index.html","a63ec4a42efd78477bc09b16ef9867cd"],["/tags/rewrite/index.html","c3ebb88f87db2b59f87675a13865dd32"],["/tags/sed/index.html","3ad84e2a8d65c58843aee9ea7f15525b"],["/tags/shell/index.html","d7595c56f880a2b259ebcd6482e9f2d0"],["/tags/valine/index.html","525ef84371a603f88299d9a9eb68ee8d"],["/tags/返回码/index.html","c55b7c9aa26c6b544f098b637db3de0b"],["/tags/重定向/index.html","a57188c662380c67a9d3a7efbb41c373"]];
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




