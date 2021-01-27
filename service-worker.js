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

var precacheConfig = [["/archives/2018/10/index.html","54aefc10cdd2be473f5c555c75fb3d71"],["/archives/2018/12/index.html","22671332c5d8201efb6a9f0d8b509c79"],["/archives/2018/index.html","9a9db941d1f818a451ea4302eb17ec2a"],["/archives/2019/05/index.html","c6e40fb48c8673cc19237eadfbf5717d"],["/archives/2019/07/index.html","02f8754d2abc8aa3cffb2e242718185a"],["/archives/2019/index.html","da3b685e3560d03166e6fc5a52e51b97"],["/archives/2020/07/index.html","126687b8ddd62dac4aaba788d6e401d6"],["/archives/2020/07/page/2/index.html","ce1cca85bad509d6fb162bd02e59109e"],["/archives/2020/08/index.html","08001cff406515fe93ae64c5c1fe704b"],["/archives/2020/08/page/2/index.html","45e98333c6853bcad6a29d77475cf05b"],["/archives/2020/09/index.html","97992f9752404eb76d4332ef563f7b52"],["/archives/2020/10/index.html","8c5642418a9e6827c83744548df20c3d"],["/archives/2020/11/index.html","336ee2ff26d6465f7912d94889709dfd"],["/archives/2020/index.html","ada558d75348fba5a32a715f286b5864"],["/archives/2020/page/2/index.html","3a47d6e9b5f4dc0f9ea24d7313282df5"],["/archives/2020/page/3/index.html","b50037a4f7ae1a62d0bf444ce3e2b064"],["/archives/2020/page/4/index.html","57a6cdb89b81d9643e4b0ff74c8a47ee"],["/archives/2021/01/index.html","93bf377d751f65bc6eab8ba2120abbdd"],["/archives/2021/index.html","100ddd8fa2eac637dba0d413a9f7ac47"],["/archives/index.html","aaf6cdb0406e2554cbe6f67d2234515e"],["/archives/page/2/index.html","5cb0fab28451d99900f42600c44d11ca"],["/archives/page/3/index.html","435a1fbeefadb0d197a2b032678afad5"],["/archives/page/4/index.html","5ed57b8d10d06a6ec627c15cba0baa96"],["/archives/page/5/index.html","fd6c6adf116680c970e40a396936af23"],["/archives/page/6/index.html","a70fbc42a863a3dbad8372a53ac7f58a"],["/bangumis/index.html","a0361e4da76160ce9931cb0ef369d465"],["/books/index.html","4e3c051cad1798afce0ee215995bcb2a"],["/categories/Github/index.html","2b48e50e76387c55951f7f04010a751c"],["/categories/Gitlab/index.html","b20be6008b5b8c5b9ac99721d3d0cf03"],["/categories/Kubernetes/index.html","5d4e6aaaa017185a01b4b174d340e48b"],["/categories/Mysql/index.html","31a014732674dfb6ecebdf9aecb860b2"],["/categories/Nginx/Jenkins/index.html","3dbb1520f9d594e67f73fb650936ab26"],["/categories/Nginx/index.html","f016cfabfb4f474abd9afc1bebd9ee6e"],["/categories/Nginx/linux/index.html","b68e4e4706df6eebb8bbe0512d5180be"],["/categories/OpenSSH/index.html","57863ee111655529f8f0399d1f5b5351"],["/categories/hexo/index.html","3f14c41245a8a2c7280ea0d32f47e3b6"],["/categories/hexo/page/2/index.html","bce2d59e193f15c3c6d5aa40bccdff17"],["/categories/index.html","d2999255639eb4eb7601cb1a56f4279a"],["/categories/link/index.html","5941cc198558c8ec847617acb9017feb"],["/categories/linux/index.html","3cd402c5117e7fd14cdd2599fa57194c"],["/categories/oh-my-zsh/index.html","2dee34b55feb004bdbb0e7926aa8d64a"],["/categories/python/index.html","c08737bdb82da878d76fe9d184f2982c"],["/categories/script/index.html","4973d7e3848a595e104a2232403b08e2"],["/categories/tools/index.html","a7b8fb5f33dd07d4fd0e33857c2b738a"],["/categories/奇怪的知识点/index.html","e970fdd983e77d1fd38cbe9c47cf3b38"],["/contact/index.html","accd5f25c123991c7c00ae83755c3199"],["/css/index.css","f729d0aff09703a4da73c660b7acbbfb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/veditor.css","eb2128928ad15904d36e368fdb00ff87"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","1a78e0a1cff514fae5aaa31a4ed3cfbb"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","d86fdd9a6f5488099f43e8d23a219028"],["/js/calendar.js","e2af33b509cf06bb04c2020f2b0d0a66"],["/js/crash_cheat.js","4979c32f5c6c3ed5b491580fd75c63f1"],["/js/languages.js","09753f588fdaae0985d91e181f3a940b"],["/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/js/veditor.js","1f5efcf664672c4a265ae7037d75e8be"],["/link/index.html","554958cdffd2e24e4a2a4955523f2ee2"],["/movies/index.html","392857fa9dbb33d80518557a1f8f60ee"],["/music/index.html","ded207da2c1369d93158ffaec6ad77cf"],["/navi/about/index.html","23e5db7c808edb60e3c139a77f06d27e"],["/navi/blog.ansheng.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/re.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/urllib.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/index.html","173d362807e679df6fb42a4529953c2b"],["/navi/sm.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/ww2.mathworks.cn/help/matlab/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.chuyu.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.dotcpp.com/oj/contest.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.php.net/manual/zh/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.r-project.org/other-docs.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/p/12130977/index.html","8051bc6d42c7af21dc8134d47222f68c"],["/p/12223247/index.html","f8a6b591bc58245e0973890f6f539d64"],["/p/1b825486/index.html","499fd5002ca8c0a49c128e3cb8fe2aed"],["/p/1f7c743b/index.html","481eeac35ab2d6f51230febd6731cf0a"],["/p/22d30f17/index.html","aa5fe1593ec779d546556e8a88f17827"],["/p/2399c152/index.html","b0d15dfc5b2933510f9c8f24cebecfae"],["/p/2651b0bd/index.html","65c59b2e710f1e52af79dcb710bdbb3c"],["/p/292fbf59/index.html","68a714a992ab802b050d5ec6e882e985"],["/p/2c54d1ec/index.html","0f7127b8e4e8b1216bc02bf537d05126"],["/p/2d27b747/index.html","2bdc2a53cebafd6eb2653f55e5d25d04"],["/p/31397f6f/index.html","cd4d62148e2929b8ddb0be7f4dc01d2e"],["/p/328665dd/index.html","ec3890af846c7ec96d21c3085e20b42f"],["/p/32e6fc54/index.html","ec8e68583bd3cd6329af575d79ac23b2"],["/p/339c428/index.html","02faf993a03307af1bbceea592100186"],["/p/36a8252d/index.html","c2e30e1980c01918238b495497369f53"],["/p/37369/index.html","3384366b66dd38e145d20088cf26b3dc"],["/p/38510659/index.html","85f6e72a8cb913898ff0699e1f01b78f"],["/p/3d65889c/index.html","8bd870867cc59eb4e3e3fa3d5ad97381"],["/p/492994d9/index.html","29f2d9f802f5a48b644e5a8335392602"],["/p/4b638dc2/index.html","2593fbeafde2573a705efbe31d13d313"],["/p/57aae221/index.html","63108941be7ed3b127cf4e8aae9760d9"],["/p/5851b21/index.html","cd8650fb91656eef9052bb796f36cd59"],["/p/59ce9c6a/index.html","1524923b430c51904a42a4d0deda6194"],["/p/5e94d2a7/index.html","44fd94533bd5c9e841d97a0b4590d43b"],["/p/65008a24/index.html","b3df2171001757492dbd0cba6c8b755f"],["/p/69df4022/index.html","05ee356c02626d2b0f91dda8a367c3e0"],["/p/6b915d25/index.html","fae482d34f36ce0f9ef043d493a97010"],["/p/6ea05e36/index.html","66c7a98ff4c03c018567b7bb8fccf5f6"],["/p/761d0096/index.html","f646f22c59d79d55ae4bf4f606b70d62"],["/p/7fa69db0/index.html","e7e4f81445b36a78cab3ec8c3f3a2992"],["/p/8422e92e/index.html","33d27da1849b7cf5f6716960b2fd2fc0"],["/p/8a11f10a/index.html","546a312397bffd3d5164f6ae7c2ffabc"],["/p/8b346831/index.html","d7a867f0903051572b84a9995f850c3b"],["/p/8cad5570/index.html","394e5d471628d857405a0d5094f08820"],["/p/8eb47741/index.html","1e738f467e65fdb5ed2de5666b0b8ccf"],["/p/a564d3b/index.html","2d22a2b42a23ccccf6e3e0c741c82690"],["/p/b0225828/index.html","0c302504aada2b9ba71920b1bef6193f"],["/p/ba1e0fab/index.html","ff047c5944161d1f0f97055f8e1603f0"],["/p/bb2a8a2e/index.html","933b9bdf91aefb23d6c4567460723b77"],["/p/c2e90d73/index.html","424e71e7015ccf0f9b2e06a76141ca44"],["/p/c4492888/index.html","dc3e03d36a650fe1544b635172c87441"],["/p/cb1e6c4f/index.html","2acd7353194621e14b965236c21d3291"],["/p/cc5f8722/index.html","99996fdb94ae727667318c06fdc2ab8a"],["/p/d47d8d30/index.html","527501492b14050dd141013aafe2e0e3"],["/p/d64778f7/index.html","81eb754764683fe1ba441a2cb9b59c56"],["/p/d881e309/index.html","f8df962f2e81c7d43729ffe56c6fbca9"],["/p/d9a940f3/index.html","68dc7e7c2b71229f72b01ea1285bd89e"],["/p/eee93e1e/index.html","101498438e19a17555e45df9a87ddb39"],["/p/f700fae8/index.html","604727a71e3e77889843c92927bef2fd"],["/p/ffb5990d/index.html","72f6b5624817daf5f9d58d7fd1b4818c"],["/p/fffbf386/index.html","fbfaf41594808c66c74648c331872620"],["/page/2/index.html","25dea330e6ee417c956f0edbd0e75c32"],["/page/3/index.html","b929ad037948f20aba7a198a5223553b"],["/page/4/index.html","24bded02f120fa6173ec0de334331494"],["/page/5/index.html","6b40baacf5ae9f41b4bb3e98b6a6fa57"],["/page/6/index.html","51f638ad9ea3ce991e96ac4aaeec9e32"],["/tags/CDN/index.html","b965802b15644cf16e7c779a48198e14"],["/tags/Github/index.html","e6b6042ce22447cedcd2eba9f5f3e45d"],["/tags/Gitlab/index.html","824ba37ce27a829814cb123bb249eaa3"],["/tags/HTTrack/index.html","fb3742b59e30ae6bbffd06571bcc3d1b"],["/tags/Jenkins/index.html","a33ec6e0b8cb58e38cb23fafb5a418c7"],["/tags/Kubernetes/index.html","58b7e7329504941a1442a27ce0de2214"],["/tags/Netgear网件/index.html","e773e9802b4df49d7fa326105ab7a6ef"],["/tags/OpenSSh/index.html","ea0e7547332ed9637923378e278afcd9"],["/tags/R7000/index.html","cd3078537cca48d76c8ecbb388c856be"],["/tags/TZ/index.html","c9e28428317a9a45f84819151faef6ea"],["/tags/abbrlink/index.html","3bda58e27c78b9b6fccfd44d68613244"],["/tags/aplayer/index.html","9f5fac3c9efa9cddbc7f060e8a2242b5"],["/tags/authenticator/index.html","40faebc5b21e13586db9044a2585e090"],["/tags/awk/index.html","2cb0d81c422f16cfec1dade5fd03687d"],["/tags/bilibili/index.html","4310078e4224f5d9b2ae60a57bcdbfe8"],["/tags/butterfly/index.html","875d67c52c380a0db576b33300e2fe3c"],["/tags/docker/index.html","ae8dc44877fdc2116bad55c0c9427b70"],["/tags/douban/index.html","926d0711d2c72e4860fe76ec190c7dd4"],["/tags/expires/index.html","feeeb0fc5e288af9b40eec4d66ba2ce2"],["/tags/google/index.html","be8cb673ab43e3023abecd3bc53e5019"],["/tags/hexo/index.html","83fbce4eaaadf58e4ec0da30a8c7c1ad"],["/tags/hexo/page/2/index.html","a4096a74eaf8c73987e25b3d006cbd9b"],["/tags/https/index.html","777ee6bf1aee0bb88841b6fd91826605"],["/tags/index.html","3c3136c284ae3e0117f6fdf18a7a3b8f"],["/tags/jsDelivr/index.html","077b27c3169b43efffc69e6f5d7392ca"],["/tags/link/index.html","1b087f29504f630db963572270151d75"],["/tags/linux/index.html","12ad1fb20523a7f552a2c82942dc1876"],["/tags/location/index.html","d1e5086cb43ab308e184490956a512fe"],["/tags/mycat/index.html","1ff6f72c012e9298d264960684c1e93e"],["/tags/mysql/index.html","9c499547d73acf7af74b4c7c35e97777"],["/tags/nginx/index.html","54457634c7ecc9fd28f6a74f7b378387"],["/tags/nodeAffinity/index.html","e0ae8d3bf01a61f05ba2d1e181c25831"],["/tags/nodeName/index.html","353270c5cb0f9eebea032d7f0b48e172"],["/tags/nodeSelector/index.html","bf00b68e9f6ece7817836374280a7a82"],["/tags/nslookup/index.html","e19e502d719724234109d74f224f226d"],["/tags/oh-my-zsh/index.html","f50945f757d855102c726e52d4c8a734"],["/tags/podAffinity/index.html","24bf7681eb3d98d802a34ecd22602ad7"],["/tags/podAntiAffinity/index.html","c1c87ffb25d729a24de61422c5cab2c9"],["/tags/proxy-pass/index.html","6d2a7a6401c3754f2a4cc8183db86739"],["/tags/python/index.html","f9c36e3965d0a1eb824849bb9fa57283"],["/tags/qiniu/index.html","8bf0639a51ab432e0b2534d378d208a7"],["/tags/rewrite/index.html","8176cf3a763b077c4cabe60adc8d2992"],["/tags/sed/index.html","e5f3a85de07cbb6a0f8a31e64e51a9d3"],["/tags/shell/index.html","a00aa4d271f69e73e41f9466c8f07f6c"],["/tags/valine/index.html","5da292b026fbca5fecea0516531f7765"],["/tags/返回码/index.html","e46f8352a51a30fbaa528883f3dbe239"],["/tags/重定向/index.html","95f2ad7042ffb1dc6eacab55b6c31ed4"]];
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




