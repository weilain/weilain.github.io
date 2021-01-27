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

var precacheConfig = [["/archives/2018/10/index.html","2bf1e03fae87c5be62db6a53c3cc43d2"],["/archives/2018/12/index.html","b0768ba9163ba559016349c618404e15"],["/archives/2018/index.html","ac843a3d31934d414cb940aea950f058"],["/archives/2019/05/index.html","7d77abf56b5aedee73e544e82ca85339"],["/archives/2019/07/index.html","981aa06b54696252dc5f67f8079873b6"],["/archives/2019/index.html","d195149288b77d805ecd9e00e905f53c"],["/archives/2020/07/index.html","49c026259e2bfbf9caea758c00cb7512"],["/archives/2020/07/page/2/index.html","4cc26b995f55be2c6f21336b83b4834b"],["/archives/2020/08/index.html","1cfc11ced75821b6205d06956ab781c0"],["/archives/2020/08/page/2/index.html","5cc18e305c5eb312ec2d544f83e87bd6"],["/archives/2020/09/index.html","7ededdb06ca744730c6bd8f7347cdf65"],["/archives/2020/10/index.html","af4a169681bde6a5d4301e8d46055d45"],["/archives/2020/11/index.html","0f7418e788b65f1d7540acc38cacd37b"],["/archives/2020/index.html","9f80b027c7571a1972071f2414833899"],["/archives/2020/page/2/index.html","f69caa7a1064bf1521a0da0622806eec"],["/archives/2020/page/3/index.html","e2c51f8387e114dc191a0cce964cf199"],["/archives/2020/page/4/index.html","f9fc24389a358106ca77e32bae973ece"],["/archives/2021/01/index.html","0f08a79626cbfc6e29db4f2958ff8966"],["/archives/2021/index.html","46cf3ffd289b21c009e2e02a05ae37b6"],["/archives/index.html","02ff599855dbfe5285533326509f138e"],["/archives/page/2/index.html","d0d3e32f69cf6cb6ea59b51c5206461c"],["/archives/page/3/index.html","449e5c247860cf96a0b8c3193ea10f7f"],["/archives/page/4/index.html","0ed7b407e0ad641ab3ef8c4f3b9f5abc"],["/archives/page/5/index.html","9bff894fb2b9389e305f244d2475bfbe"],["/archives/page/6/index.html","657089ae2b2c4690bdde7664ec6ac36f"],["/bangumis/index.html","2c7fa050448b953e621c1b8ffcad5afa"],["/books/index.html","fdcc99ff45edb69c9dfa0bf710f83750"],["/categories/Github/index.html","1b2f6c096cef84638a445af089c3e751"],["/categories/Gitlab/index.html","e566e33f12434888868bf2b095a292dc"],["/categories/Kubernetes/index.html","8c73329de48e3fdaeeb2c09e6dd31bec"],["/categories/Mysql/index.html","0e59ab47571aa5df1df9e955cc02ab04"],["/categories/Nginx/Jenkins/index.html","bc187f789b441fff7c133b54b58ef4bf"],["/categories/Nginx/index.html","ccfb50394c7602d74dc7b334fdd965aa"],["/categories/Nginx/linux/index.html","f27d905d40c8eb39ba971bd21a3bdfbb"],["/categories/OpenSSH/index.html","f9ab18f084c0e2b2eb344240df9d28ae"],["/categories/hexo/index.html","3e7693be36945ccb05c3f872fe89fa9d"],["/categories/hexo/page/2/index.html","ac37f837c311c828549db2ffdb5b9d6b"],["/categories/index.html","a917594e45c9229e1166c220ccd93240"],["/categories/link/index.html","107e3e540270a9e0bd2c81545a8963f5"],["/categories/linux/index.html","042ec2cdd4fa2f37acb75724b9811da0"],["/categories/oh-my-zsh/index.html","c1d9d4ffcaaeca5848467734762ba462"],["/categories/python/index.html","1bbd8147ad6c6cb6871f009870791f5e"],["/categories/script/index.html","459e2c1697fdb853c0f78c2fbee11c60"],["/categories/tools/index.html","10576d7a6e1be3773fdd769231c44b48"],["/categories/奇怪的知识点/index.html","d459a22c08b6fab22caeb50f267ff194"],["/contact/index.html","491caa6c22b2f944f715521bfef261d2"],["/css/index.css","f729d0aff09703a4da73c660b7acbbfb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/veditor.css","eb2128928ad15904d36e368fdb00ff87"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","1a78e0a1cff514fae5aaa31a4ed3cfbb"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","4d5ecc2efbd24662f7dad66e47503381"],["/js/calendar.js","9dae07e03db11437110f4529071cdae1"],["/js/languages.js","09753f588fdaae0985d91e181f3a940b"],["/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/js/veditor.js","1f5efcf664672c4a265ae7037d75e8be"],["/link/index.html","163a2c09288758095747f0afaaf76536"],["/movies/index.html","9b73a52f9d096374fe3e155b50c8cf17"],["/music/index.html","ef0f54b1b57cf4ffd263f39dea285ec9"],["/navi/about/index.html","23e5db7c808edb60e3c139a77f06d27e"],["/navi/blog.ansheng.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/re.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/urllib.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/index.html","173d362807e679df6fb42a4529953c2b"],["/navi/sm.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/ww2.mathworks.cn/help/matlab/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.chuyu.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.dotcpp.com/oj/contest.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.php.net/manual/zh/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.r-project.org/other-docs.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/p/12130977/index.html","401487c2f87554270dfe85808e8be2d3"],["/p/12223247/index.html","c0088e65e8c818b51991c46957b982f3"],["/p/1b825486/index.html","9ac47f1d8bb8216a8b62ae099a3354b6"],["/p/1f7c743b/index.html","bab6aa2e6611eed741c9379edef1a556"],["/p/22d30f17/index.html","6ba270c37334f64a94391836acdb9791"],["/p/2399c152/index.html","4ad622eb2aa2794700c04d0bb04820be"],["/p/2651b0bd/index.html","4c15f7bbf37b723179df7160a404cf19"],["/p/292fbf59/index.html","e88f3de0d513f0ea01e4130b30cc0666"],["/p/2c54d1ec/index.html","c0319da06a8f32cee904c3504a38db9e"],["/p/2d27b747/index.html","08b5f13dae4e71a89ec879f415ae38cf"],["/p/31397f6f/index.html","ec12089679761a5e0cd981921e2a1d1b"],["/p/328665dd/index.html","085d47a1f8353bcce1ca033871ba661d"],["/p/32e6fc54/index.html","3a000eb477b94b8a735644c3b8e59c01"],["/p/339c428/index.html","75d8feb03f52fd0ab25922b3752db31c"],["/p/36a8252d/index.html","26ab02816733636fd1566024ba0c0c9f"],["/p/37369/index.html","7d7204aadc28ebd9f845342c22fbcfae"],["/p/38510659/index.html","f87bbc446b7e3df88926f9194d1cd961"],["/p/3d65889c/index.html","693f7017909561b153788f67f12657ff"],["/p/492994d9/index.html","1eda45708cba4450f2a651ef2e474904"],["/p/4b638dc2/index.html","7dadc303b45c8f0fef93bb3e6491a5e8"],["/p/57aae221/index.html","9da69c80f399f765b64985eacc097036"],["/p/5851b21/index.html","bb1a38813594a93bd3adc4f3db33f4fd"],["/p/59ce9c6a/index.html","1bc8bf8d0e05e81d7ce7a33d10fc9fda"],["/p/5e94d2a7/index.html","892c54ca58e85d5ed577401716a9f711"],["/p/65008a24/index.html","3fbbc7950abf046e80115719a16a8b3a"],["/p/69df4022/index.html","ab09f6adf81a5046436df59e975ad547"],["/p/6b915d25/index.html","a06bb2abb4c3757f6f1bfc9470226e04"],["/p/6ea05e36/index.html","5bf872b5e6d02a0312a840c6295a622b"],["/p/761d0096/index.html","b05691770782e61073bf98ad0600adda"],["/p/7fa69db0/index.html","9f858a268bcd6d925a994f3d9962173c"],["/p/8422e92e/index.html","60424d4987c5311eff88a27e5539bdf0"],["/p/8a11f10a/index.html","631969eaad4808e27465ef5fab659ae9"],["/p/8b346831/index.html","563dec802f2d691dc045051e4abb910c"],["/p/8cad5570/index.html","274a985b5ad7a394a79149c3cb93c233"],["/p/8eb47741/index.html","83ae8f25a000bd4e5d29f09b5faa7314"],["/p/a564d3b/index.html","e2c38b25e77ec6b582fb7b354374361d"],["/p/b0225828/index.html","09b555a7ba0bc6f6daf8c15e6be0f7ad"],["/p/ba1e0fab/index.html","426d14d8fa6b7d7d1a62ef7a2739dcdb"],["/p/bb2a8a2e/index.html","03063579add299914232baa2d6dd4c96"],["/p/c2e90d73/index.html","cca1da71fc23882a988dd2660f0ac976"],["/p/c4492888/index.html","1907a5aaa082a9fff79644311abf62b3"],["/p/cb1e6c4f/index.html","d5d9ad6c1ae2fec535eea2e737f73692"],["/p/cc5f8722/index.html","209d0373f3f8069bc18983a67dfd2bec"],["/p/d47d8d30/index.html","2dca9200f4d8dc93b8c5f680c161f92a"],["/p/d64778f7/index.html","7726bdc53865944c5b7484b16f4ae312"],["/p/d881e309/index.html","5faf43ba94d0e9fe015823a6532c4d97"],["/p/d9a940f3/index.html","e0a4fa7accce85299c9b8b5db7e97a3e"],["/p/eee93e1e/index.html","78f2e5164c7a10fdb22e0420fdec5df6"],["/p/f700fae8/index.html","b4f2f3b4913e374f48fa4de02fcb6ce7"],["/p/ffb5990d/index.html","07db0cb4d9d5722108d2020ee281e327"],["/p/fffbf386/index.html","95c2d3513d82f025197b93ed937bb233"],["/page/2/index.html","6e55dd270743760281f4cd71b7462fa4"],["/page/3/index.html","87be266ba70bdce2d236d615f25428e7"],["/page/4/index.html","6fbc3d611e69efd4e2a4e88af2ec5e76"],["/page/5/index.html","a5c6e7046b3983077bf6895eb838852b"],["/page/6/index.html","424d75575f0289fbd57efe46d4dfebef"],["/tags/CDN/index.html","77f27c7d8be4123f04712ac38c03f63e"],["/tags/Github/index.html","bc0a1055ca13b85f8daabc937913432f"],["/tags/Gitlab/index.html","e1653b79b2f2618a45ed2fb36ed51b7a"],["/tags/HTTrack/index.html","e582c1178f61286089078813efd51975"],["/tags/Jenkins/index.html","dafa3cc7c4aa7648712c9324df4e15aa"],["/tags/Kubernetes/index.html","2e4ecbdde43131e1db338045189f4c0a"],["/tags/Netgear网件/index.html","453f5d2dbf034e4c4ef3064ff09ca65b"],["/tags/OpenSSh/index.html","80845de98b9e2196db2603b620b10f11"],["/tags/R7000/index.html","82e4a89016754196e67e8533c09bd888"],["/tags/TZ/index.html","0ab1123374742a9100d7d4bfc8ad2218"],["/tags/abbrlink/index.html","d019cf7678410f87e64ae0fbdfffb4ce"],["/tags/aplayer/index.html","5c1b97b5319a81b693f6fb7b75ded2e8"],["/tags/authenticator/index.html","e415ae8b0aa8919cf73701c84f0bd455"],["/tags/awk/index.html","4591ed499d7cfc5f5830b6c56499788c"],["/tags/bilibili/index.html","fb83a59ce7cc42985af8cab3d04e2333"],["/tags/butterfly/index.html","ac29e5af77a9fad992f99ca2e98f50fb"],["/tags/docker/index.html","cc44a97062448ea8235719600b81da7c"],["/tags/douban/index.html","6e4b56ee8f1ecd3f0e4ba041c956eb19"],["/tags/expires/index.html","735db05f7f13d00f271c3e239b6435f1"],["/tags/google/index.html","001d6d7d3433cf1be710d58c93081d8d"],["/tags/hexo/index.html","81ec99fdfdb331610730484c6fa77b9f"],["/tags/hexo/page/2/index.html","c748d28294f5b6963c9e6ba6afa143e1"],["/tags/https/index.html","827b2a32686c4b56a0634d574d7ccbec"],["/tags/index.html","8685fa2f10dbea03e0c5bfa0e60151aa"],["/tags/jsDelivr/index.html","9676aa0b4560ef35934a323c5f7aabcc"],["/tags/link/index.html","ba91a70bb04ea6c6776b7f15adaeed78"],["/tags/linux/index.html","d3fb241e5799193aa4d618372dcf137f"],["/tags/location/index.html","7e0ae23a7575c594f6d04af4a94f5aba"],["/tags/mycat/index.html","9cbfabf0a5e81350f74ca47da69c4cd2"],["/tags/mysql/index.html","7bf59268c25fc209a72bb3662ec02546"],["/tags/nginx/index.html","659eb6cddf60c67cea9bdc7ee0513e96"],["/tags/nodeAffinity/index.html","2db758cf032d590b9ebcc5cf7dafa9a5"],["/tags/nodeName/index.html","d4c8eff8134113532a2a3ec2a13db3a0"],["/tags/nodeSelector/index.html","b646b2799f5f51bdc47bb19d6cd77c0a"],["/tags/nslookup/index.html","77dcd865bd39fc215dae3651131e24c3"],["/tags/oh-my-zsh/index.html","3712be4fa82c239948b560937bd0e70d"],["/tags/podAffinity/index.html","829b178482c9d78275ff5c3353ac4e8e"],["/tags/podAntiAffinity/index.html","c4c61ab965583aedf8c4121b081f874a"],["/tags/proxy-pass/index.html","fc2eaabcc1a17a920e9957fec083bc68"],["/tags/python/index.html","856df9a68982f8d12da8d316699a2f04"],["/tags/qiniu/index.html","0ecf2bacddb33f0458a6e0fa690e4246"],["/tags/rewrite/index.html","82d58985726ac0db9779374ef2524252"],["/tags/sed/index.html","4b93ca6fc92f33c68ee3b3e3c52d32d6"],["/tags/shell/index.html","16ddb1c27a6118f3b70f9457942cb9e1"],["/tags/valine/index.html","393313887b02a569b81241a275afe08a"],["/tags/返回码/index.html","ca2275e27b9997b1497bc9389e816c41"],["/tags/重定向/index.html","5b1eb76be9a1e5714a90909e39dac333"]];
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




