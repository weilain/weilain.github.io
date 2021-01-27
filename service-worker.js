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

var precacheConfig = [["/archives/2018/10/index.html","36aa7d0a00dbdf66b93afd78d9d79b58"],["/archives/2018/12/index.html","53902aa1d2ff4076bbb2b2574df6221f"],["/archives/2018/index.html","0f2c864636fac732eeb50da3601939a9"],["/archives/2019/05/index.html","2257773cbdc822eb61f3f026e04f39eb"],["/archives/2019/07/index.html","7838cfee6345cd999ca858ceb631e92d"],["/archives/2019/index.html","d82fde1c8e7431f84f4adb342f4d6861"],["/archives/2020/07/index.html","b71fb45d73af4d8515b7280e50b8da07"],["/archives/2020/07/page/2/index.html","0acbf8d159bcd6709fa49d5c7b6adb3e"],["/archives/2020/08/index.html","14e312025619f6f4ef504e8e6c227924"],["/archives/2020/08/page/2/index.html","19298cf11a4486ae4d1123144b6ed345"],["/archives/2020/09/index.html","54b0bae6285a65570b2477a72d7cb559"],["/archives/2020/10/index.html","63c923c10ddc6eb7d382476aa8ff84eb"],["/archives/2020/11/index.html","3875398d8c3f430f9ec6db36e3e26dd8"],["/archives/2020/index.html","26c01fa2fbc59916046609dc014dca09"],["/archives/2020/page/2/index.html","d04609bcf90d55c854ac2a0b67e458c6"],["/archives/2020/page/3/index.html","b5510aafcf0edfbe0deeb06aebc52a4e"],["/archives/2020/page/4/index.html","3230774948d3912c11c7c868cd6111a5"],["/archives/2021/01/index.html","204722b583f9321ab7852c295c1c41ff"],["/archives/2021/index.html","5de8be655a2b2ffa4c82235e81378b43"],["/archives/index.html","a78a781c9195fbfdc952319cff33687d"],["/archives/page/2/index.html","f9863b77f4c7c132bff50f289fe8b9ce"],["/archives/page/3/index.html","119fae9ce5b3fdda0a0772ba1a4f2cc7"],["/archives/page/4/index.html","67c2ebcb7db2ee4046b4ad2696dbb1e2"],["/archives/page/5/index.html","cfa2dae03b897af8353d13749c67a8ae"],["/archives/page/6/index.html","ab5d5d002ec0fd17674b70beb1f03abd"],["/bangumis/index.html","f135af4606d315c2639e3ee4617e2dc6"],["/books/index.html","81a00ec5225d2e7121ee2f3b0ae819dc"],["/categories/Github/index.html","967ac85d1e179dc619f497bee440138c"],["/categories/Gitlab/index.html","403233265d92eb2536e43ea2a714f214"],["/categories/Kubernetes/index.html","bfeb87dd1bf51c2e5bf0d52560d11947"],["/categories/Mysql/index.html","310a4f450ce9606d178aa7b06758f713"],["/categories/Nginx/Jenkins/index.html","e4afea331449204cf170da21c1c72428"],["/categories/Nginx/index.html","993486d57558076781fab48a1884b2aa"],["/categories/Nginx/linux/index.html","d40b5db12ebb1451ef08ebea20f77c42"],["/categories/OpenSSH/index.html","598c1609b66e70f1176f3f786f88eb38"],["/categories/hexo/index.html","9206aad4224bd3cf909ad1825725174a"],["/categories/hexo/page/2/index.html","00f18947ff2d5e7f267c518b48466855"],["/categories/index.html","84151606056b6908a62d972aff2be63f"],["/categories/link/index.html","1a9b940612deb33ebf509cc483a5ae0b"],["/categories/linux/index.html","dbc6577bd0e2ad79370b327f5ed9ea67"],["/categories/oh-my-zsh/index.html","670b3e0d36a014c65cc9494840b7fb41"],["/categories/python/index.html","74b3e568b7a44ecc56423a8b1d1b7667"],["/categories/script/index.html","b1c905811dcfedea1ac5a02b3f761fb9"],["/categories/tools/index.html","6e9442fc9e7c530f1255f9ebdccbc2a9"],["/categories/奇怪的知识点/index.html","129a08d68c89583212cb7656b10f6cea"],["/contact/index.html","6a4fbcfa59ffb04c0b77aa47767d5169"],["/css/index.css","f729d0aff09703a4da73c660b7acbbfb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/veditor.css","eb2128928ad15904d36e368fdb00ff87"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","1a78e0a1cff514fae5aaa31a4ed3cfbb"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","f35187c550f5ca814db1a9eb2e81dff8"],["/js/calendar.js","9dae07e03db11437110f4529071cdae1"],["/js/crash_cheat.js","9e48b57cc02c1eeaf8bf3632e891ce8d"],["/js/languages.js","09753f588fdaae0985d91e181f3a940b"],["/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/js/veditor.js","1f5efcf664672c4a265ae7037d75e8be"],["/link/index.html","9320c49f5b09032711c62b8978024522"],["/movies/index.html","1bf3ae4f2eac430c44e59f2fab441bbf"],["/music/index.html","eac5e0ce166cfb56dbce0f366fe85644"],["/navi/about/index.html","23e5db7c808edb60e3c139a77f06d27e"],["/navi/blog.ansheng.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/re.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/urllib.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/index.html","173d362807e679df6fb42a4529953c2b"],["/navi/sm.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/ww2.mathworks.cn/help/matlab/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.chuyu.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.dotcpp.com/oj/contest.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.php.net/manual/zh/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.r-project.org/other-docs.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/p/12130977/index.html","22f9babe2aa012b571451b35b32074e8"],["/p/12223247/index.html","575f68ce8265fd314f2dbf428be6d461"],["/p/1b825486/index.html","8bd99f9f507197f71080d0e2d2f19643"],["/p/1f7c743b/index.html","3bc3529b9e5c3bbc1f97d30af753d3fa"],["/p/22d30f17/index.html","b4e3258290581cb60926ef63139541a6"],["/p/2399c152/index.html","7de6535fb21d0def78c6cf580f14bb22"],["/p/2651b0bd/index.html","10603f6772f4c15c85d50ba9ece25ec5"],["/p/292fbf59/index.html","15cb6200f9e7a4d4a68160bd96d0a7da"],["/p/2c54d1ec/index.html","6ed99aea791a1dcc2b251aaca0125d87"],["/p/2d27b747/index.html","cea4781d64d00da957b5b8ed658a1654"],["/p/31397f6f/index.html","e4c4d3c8611a0c23293303929ceb9e1e"],["/p/328665dd/index.html","63c54ff97cba33f1cb741ea67661540b"],["/p/32e6fc54/index.html","29437708b800a9fcd2e36959ed8e723e"],["/p/339c428/index.html","8db0145392f6149fc4d9c7bdf223a4db"],["/p/36a8252d/index.html","33d3a558c3657300afab21914459588d"],["/p/37369/index.html","5dd085076fc5af2ec4ffeba88f4a0c3c"],["/p/38510659/index.html","c7bf7f07ffe18636094a69a042698771"],["/p/3d65889c/index.html","2b9f6acd65190934f0ef991cef53fc27"],["/p/492994d9/index.html","a5752bc80b05d887a62fb2329aa680cc"],["/p/4b638dc2/index.html","8c8c6345d6b551a0c97f51c5ed0f7f7a"],["/p/57aae221/index.html","96380e5ebbfac312303960461de2ff8f"],["/p/5851b21/index.html","71b8d726765c36d625844d299750c43e"],["/p/59ce9c6a/index.html","89685763c8f160baaa9af52a6eb8e365"],["/p/5e94d2a7/index.html","075c15388c049516698fcd58dcf16f8f"],["/p/65008a24/index.html","7e8249cafa3691358c9f641fce29d1cd"],["/p/69df4022/index.html","d92057fbcd99b43ba10c350db2a48305"],["/p/6b915d25/index.html","6f7a095c9b41701397bf15f26b08265c"],["/p/6ea05e36/index.html","42b86d91e5b9e929db71f68ef2eba4d9"],["/p/761d0096/index.html","754335c690013629fe8a052094113309"],["/p/7fa69db0/index.html","1f64aecb2efbba27526ffbe95c7a4e7f"],["/p/8422e92e/index.html","1aa4e4043c99fa919aacd7d5b6acad6d"],["/p/8a11f10a/index.html","a1ca9f892be8e1f81f48a44b9f31e46c"],["/p/8b346831/index.html","d63d37a1304b9516d05d7768b070cbd7"],["/p/8cad5570/index.html","459c6d3bfe6ccd9f7829e7a43854b29d"],["/p/8eb47741/index.html","d3654a4d0d0abed8394ec4b36c360d9a"],["/p/a564d3b/index.html","2a37b05be5e225e1506de73f207942b1"],["/p/b0225828/index.html","552e18c31c8d93d0f789ec034ba06b66"],["/p/ba1e0fab/index.html","586cc97d71702d0a2fec809cd46cb0cb"],["/p/bb2a8a2e/index.html","d356018fd87c04b5b2027e4f83f2c26d"],["/p/c2e90d73/index.html","4bd67b8fa879d5f8792ed9b4e383cbda"],["/p/c4492888/index.html","969d60f622489b6fe1bc3b632dcc0b5d"],["/p/cb1e6c4f/index.html","848022ceeea90d58d5bd00f94befc922"],["/p/cc5f8722/index.html","a02d617ef267a91052559174b4ce9684"],["/p/d47d8d30/index.html","42fe0fa16974119910d59fec7c240c2d"],["/p/d64778f7/index.html","7906c04b325411b7a78a695af9eefa68"],["/p/d881e309/index.html","37f5fa6393367ff881fc01c98a4638f9"],["/p/d9a940f3/index.html","634aa7f8ae2795cce5768182dde63c7f"],["/p/eee93e1e/index.html","943e3ee39ee370ba7f1d1fe53c8ccf0f"],["/p/f700fae8/index.html","b64d10a57c744b4c20031d972aa8b7b7"],["/p/ffb5990d/index.html","0da061da28df56841c656cfae7111196"],["/p/fffbf386/index.html","19aaef02e369e0cd1d9f538c7b2aeecd"],["/page/2/index.html","384cadeeef62fc7b3cb31318f4ba15ef"],["/page/3/index.html","229ef0d921d2756feafa0141e5c66d36"],["/page/4/index.html","eee5a34ffa63d234b3d21486783cbd0e"],["/page/5/index.html","48a5c7943f101eff80bcfd3888d13983"],["/page/6/index.html","d05f8706f33dc50150493b7fdf316fd5"],["/tags/CDN/index.html","3d0bb40b9bc5563b3ed881498146b298"],["/tags/Github/index.html","449fb39974625d4b1f763bdd9d16eef5"],["/tags/Gitlab/index.html","62fef96087037311fa6fd3cffdaee874"],["/tags/HTTrack/index.html","3cc4696980f9d7e0674b656155bd4d3e"],["/tags/Jenkins/index.html","96817929302e9e0889ebabbbdbd79f3d"],["/tags/Kubernetes/index.html","3759dd111b28871c694d8d52b8bdea36"],["/tags/Netgear网件/index.html","07c5f6fc3518ee57f9512fa4d940744d"],["/tags/OpenSSh/index.html","eba9f8cbbbe0097b3953e95bfdbdd9cb"],["/tags/R7000/index.html","76c20de8f158169a97b71173865fec9e"],["/tags/TZ/index.html","8a43cba7b512aa3866bbd4677d22b33d"],["/tags/abbrlink/index.html","ff7cb40ad12a799f86f3ade1d4f07476"],["/tags/aplayer/index.html","a968838615618aa104027f69f74ac61b"],["/tags/authenticator/index.html","11aa3afbf1464850e7dcd28ecc8c6d5f"],["/tags/awk/index.html","1d9153b513de1a2627b5b5d2a74e4b06"],["/tags/bilibili/index.html","0cfa6b2ceefc9a5bede23c2431b87f45"],["/tags/butterfly/index.html","1aedbb3e4113594becfdb3c7f5910a01"],["/tags/docker/index.html","7400fc7363db744cd658eeeb81d2c36f"],["/tags/douban/index.html","ec89b73da5b4d57cbc58a9e81f97a001"],["/tags/expires/index.html","2501cc5fcb4e3f9f8250027b4d424e9f"],["/tags/google/index.html","8718dedfaadde11a1654af1850c5db80"],["/tags/hexo/index.html","a3a832d50b2f1ebcdd04d2b53715f226"],["/tags/hexo/page/2/index.html","07c92f054265e7b7d4e0aed8a6a18a5c"],["/tags/https/index.html","dfb9790b8518a89b24f31f2217f3a019"],["/tags/index.html","cd53fd640004475294f4427121a84cb4"],["/tags/jsDelivr/index.html","0fa954431945540d6cb3b03ac5c2ad28"],["/tags/link/index.html","98e4159ef13c72285b8dd0dfaed7910f"],["/tags/linux/index.html","75569220ffe90e26c913cd3ca353088a"],["/tags/location/index.html","dcae65d2719dc6ded79c409a106787a8"],["/tags/mycat/index.html","26dd06307bd32ecf52c668500958137a"],["/tags/mysql/index.html","fb2a3b1ac1a18d92aed2a8352a4995fe"],["/tags/nginx/index.html","3e22e83a0ad13cd51f297674219d5c12"],["/tags/nodeAffinity/index.html","e83cdb2676b7405d9e7c8e4e4ae01516"],["/tags/nodeName/index.html","554d79fd1cae46a27ca0b583e75a02cf"],["/tags/nodeSelector/index.html","6a16b4e8770230b855c5ec4631ab6825"],["/tags/nslookup/index.html","7b12eac3cdf71d14def1daaae5c97428"],["/tags/oh-my-zsh/index.html","383660db30353dc7ad468ac3274551e5"],["/tags/podAffinity/index.html","fd0f129a986f5daea1536c6ae8920a1d"],["/tags/podAntiAffinity/index.html","689415a0cae06d1647e220bd6ad5c054"],["/tags/proxy-pass/index.html","ce0be0509e98a12da23bdc2f86b94c61"],["/tags/python/index.html","5fd25854a7968e9c430cf07eefaf5a94"],["/tags/qiniu/index.html","ba528c8f883e558823f57e02524c93ac"],["/tags/rewrite/index.html","7228fd735342897659fa4ca48652a4f7"],["/tags/sed/index.html","3b45bbb30cc11eb46d1f4d79374999ca"],["/tags/shell/index.html","1f1f370219cca5f604af4b59778c5b93"],["/tags/valine/index.html","48de7c197afc23392204db5079edbacb"],["/tags/返回码/index.html","7eb06a14a842aff83d1585cac5cfcff8"],["/tags/重定向/index.html","0526695548943b59253ed5cdb669a483"]];
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




