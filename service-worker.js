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

var precacheConfig = [["/about/index.html","e7e380647d53da1046a31fea8df5872c"],["/archives/2018/10/index.html","8ec104674dfbf152a37c7be6cc67297e"],["/archives/2018/12/index.html","286d9a9327adc9b6f661c57bd4e97725"],["/archives/2018/index.html","c9ef1472dee687f4efadac3fc543c047"],["/archives/2019/05/index.html","aae0660c3ecde5968fef2c82c825d00f"],["/archives/2019/07/index.html","bf3a55ebed446b1ac84b4b8e4644c5a8"],["/archives/2019/index.html","99ec50c76504124302579d207fd57e93"],["/archives/2020/07/index.html","6dc2978fb4e6ea0e97d9cbfe37a46b5d"],["/archives/2020/07/page/2/index.html","0a20cf4f0a92fa759dfd0918eca34f6d"],["/archives/2020/08/index.html","22f420c0cbf187495a21d37959118645"],["/archives/2020/08/page/2/index.html","cf84886a05913030c99765eb91fabd42"],["/archives/2020/09/index.html","6bfd277d55472081a3346924c6ad8d80"],["/archives/2020/10/index.html","9274de7758971aef19dc1440b697ed43"],["/archives/2020/11/index.html","a7e8df2124e1b86c1b6005686bd67c91"],["/archives/2020/index.html","39b7c09b656f3fe5dbcc86ea6fad40f4"],["/archives/2020/page/2/index.html","219f1b3f2f6338cc357bbab77f263b9a"],["/archives/2020/page/3/index.html","1b4133a6937d2153d9728c2212962de4"],["/archives/2020/page/4/index.html","e3035311cc0b2ed4e39421fabe3a770b"],["/archives/2021/01/index.html","9ee66550b8c8fdc62804b6dd8c34082e"],["/archives/2021/index.html","0276ee35936c3db706b0985c957ee772"],["/archives/index.html","2b2ff4bf1bfd54de0d7faf54403fe3a6"],["/archives/page/2/index.html","6ea85e9312bf199ea43589325d8cb9a3"],["/archives/page/3/index.html","345e5f8404c5b2b15bd5b4f235b74b28"],["/archives/page/4/index.html","881ad8d870bd3922d77d1e1e6368f6a8"],["/archives/page/5/index.html","d42ab8f099e1250a0fb28dbfa8f5a31e"],["/archives/page/6/index.html","715fd4fc26523c021f27547594f2921c"],["/bangumis/index.html","42ae63cc5ce6d76a86a5a7cb841c9768"],["/books/index.html","b5cdd97b7822a14e0f84a718c5abb8bb"],["/categories/Github/index.html","7d3b46b72c7eecebbcd34a7e45ab045a"],["/categories/Gitlab/index.html","a907dab479e547df5eca58480751706b"],["/categories/Kubernetes/index.html","682bcae8bead6417c16d8f75cb080880"],["/categories/Mysql/index.html","4c4f822564c10d48830e16eae74a8e6f"],["/categories/Nginx/Jenkins/index.html","b776d4154c25bc8c6c9709975c9afcf6"],["/categories/Nginx/index.html","07d99e4e7228642f484c4cd5e5efe9a2"],["/categories/Nginx/linux/index.html","38d88dceca2b2c0c57896460d5117459"],["/categories/OpenSSH/index.html","e9a2793aa93ef0c2010ec0a1d959d22c"],["/categories/hexo/index.html","f7ac72f6458b8e9181da9aaedaeacf31"],["/categories/hexo/page/2/index.html","9b16552fd09d79dd1e4ba542b9a9dea0"],["/categories/index.html","6ba425299dd522a792bfee693762f67a"],["/categories/link/index.html","0bcaaaf04947f0f6f36cb3cb8d782459"],["/categories/linux/index.html","09db240dc5ad5fb41417eb0c3394e684"],["/categories/oh-my-zsh/index.html","93c1948909ef9953e5dfcb89d6fab3eb"],["/categories/python/index.html","fc7bf45b7e10ab294547a3a91a405fa6"],["/categories/script/index.html","db065ba03d881d73c795d4ca43a76b72"],["/categories/tools/index.html","86994696f40edca471ee505617d27bb0"],["/categories/奇怪的知识点/index.html","3211f3daba42932200ed641d8c5ed848"],["/contact/index.html","c263199785ecd26406fdb46a5f9d200a"],["/css/index.css","f729d0aff09703a4da73c660b7acbbfb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/veditor.css","eb2128928ad15904d36e368fdb00ff87"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","1a78e0a1cff514fae5aaa31a4ed3cfbb"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","ddfbbe28a61501df7eddc49670abea2a"],["/js/calendar.js","9dae07e03db11437110f4529071cdae1"],["/js/crash_cheat.js","9e48b57cc02c1eeaf8bf3632e891ce8d"],["/js/languages.js","09753f588fdaae0985d91e181f3a940b"],["/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/js/veditor.js","1f5efcf664672c4a265ae7037d75e8be"],["/link/index.html","8fed96991d197253e0482365e1a1fb16"],["/movies/index.html","31781a4b30b91021818e97d1b2babe8d"],["/music/index.html","f3d43d5a03db78660d82c35d2784eb7b"],["/navi/about/index.html","23e5db7c808edb60e3c139a77f06d27e"],["/navi/blog.ansheng.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/re.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/urllib.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/index.html","173d362807e679df6fb42a4529953c2b"],["/navi/sm.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/ww2.mathworks.cn/help/matlab/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.chuyu.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.dotcpp.com/oj/contest.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.php.net/manual/zh/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.r-project.org/other-docs.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/p/12130977/index.html","22f9babe2aa012b571451b35b32074e8"],["/p/12223247/index.html","575f68ce8265fd314f2dbf428be6d461"],["/p/1b825486/index.html","f3a0c27d3e958e1e295df0f715fa79e6"],["/p/1f7c743b/index.html","3bc3529b9e5c3bbc1f97d30af753d3fa"],["/p/22d30f17/index.html","45b53cdb30755e1466b5202f922da351"],["/p/2399c152/index.html","7de6535fb21d0def78c6cf580f14bb22"],["/p/2651b0bd/index.html","10603f6772f4c15c85d50ba9ece25ec5"],["/p/292fbf59/index.html","15cb6200f9e7a4d4a68160bd96d0a7da"],["/p/2c54d1ec/index.html","6ed99aea791a1dcc2b251aaca0125d87"],["/p/2d27b747/index.html","cea4781d64d00da957b5b8ed658a1654"],["/p/31397f6f/index.html","e4c4d3c8611a0c23293303929ceb9e1e"],["/p/328665dd/index.html","63c54ff97cba33f1cb741ea67661540b"],["/p/32e6fc54/index.html","29437708b800a9fcd2e36959ed8e723e"],["/p/339c428/index.html","8db0145392f6149fc4d9c7bdf223a4db"],["/p/36a8252d/index.html","33d3a558c3657300afab21914459588d"],["/p/37369/index.html","5dd085076fc5af2ec4ffeba88f4a0c3c"],["/p/38510659/index.html","c7bf7f07ffe18636094a69a042698771"],["/p/3d65889c/index.html","2b9f6acd65190934f0ef991cef53fc27"],["/p/492994d9/index.html","a5752bc80b05d887a62fb2329aa680cc"],["/p/4b638dc2/index.html","8c8c6345d6b551a0c97f51c5ed0f7f7a"],["/p/57aae221/index.html","96380e5ebbfac312303960461de2ff8f"],["/p/5851b21/index.html","71b8d726765c36d625844d299750c43e"],["/p/59ce9c6a/index.html","89685763c8f160baaa9af52a6eb8e365"],["/p/5e94d2a7/index.html","075c15388c049516698fcd58dcf16f8f"],["/p/65008a24/index.html","7e8249cafa3691358c9f641fce29d1cd"],["/p/69df4022/index.html","d92057fbcd99b43ba10c350db2a48305"],["/p/6b915d25/index.html","6f7a095c9b41701397bf15f26b08265c"],["/p/6ea05e36/index.html","42b86d91e5b9e929db71f68ef2eba4d9"],["/p/761d0096/index.html","754335c690013629fe8a052094113309"],["/p/7fa69db0/index.html","1f64aecb2efbba27526ffbe95c7a4e7f"],["/p/8422e92e/index.html","1aa4e4043c99fa919aacd7d5b6acad6d"],["/p/8a11f10a/index.html","a1ca9f892be8e1f81f48a44b9f31e46c"],["/p/8b346831/index.html","d63d37a1304b9516d05d7768b070cbd7"],["/p/8cad5570/index.html","459c6d3bfe6ccd9f7829e7a43854b29d"],["/p/8eb47741/index.html","d3654a4d0d0abed8394ec4b36c360d9a"],["/p/a564d3b/index.html","2a37b05be5e225e1506de73f207942b1"],["/p/b0225828/index.html","552e18c31c8d93d0f789ec034ba06b66"],["/p/ba1e0fab/index.html","586cc97d71702d0a2fec809cd46cb0cb"],["/p/bb2a8a2e/index.html","d356018fd87c04b5b2027e4f83f2c26d"],["/p/c2e90d73/index.html","4bd67b8fa879d5f8792ed9b4e383cbda"],["/p/c4492888/index.html","969d60f622489b6fe1bc3b632dcc0b5d"],["/p/cb1e6c4f/index.html","848022ceeea90d58d5bd00f94befc922"],["/p/cc5f8722/index.html","a02d617ef267a91052559174b4ce9684"],["/p/d47d8d30/index.html","42fe0fa16974119910d59fec7c240c2d"],["/p/d64778f7/index.html","7906c04b325411b7a78a695af9eefa68"],["/p/d881e309/index.html","37f5fa6393367ff881fc01c98a4638f9"],["/p/d9a940f3/index.html","634aa7f8ae2795cce5768182dde63c7f"],["/p/eee93e1e/index.html","943e3ee39ee370ba7f1d1fe53c8ccf0f"],["/p/f700fae8/index.html","b64d10a57c744b4c20031d972aa8b7b7"],["/p/ffb5990d/index.html","0da061da28df56841c656cfae7111196"],["/p/fffbf386/index.html","19aaef02e369e0cd1d9f538c7b2aeecd"],["/page/2/index.html","ff688b7914aa861fb47cf8043acd2044"],["/page/3/index.html","fc3b3b24e03f7381b2968067a89d45cc"],["/page/4/index.html","c84805e2084071edbd3b11f09a002fc3"],["/page/5/index.html","6eb82a35050009aea3f3702741bb9e35"],["/page/6/index.html","2e2ceace6de3ce578d2add5df7309d35"],["/tags/CDN/index.html","a98544f1ff30f2c888b73c3792d7ab53"],["/tags/Github/index.html","6148a2fdfb84c275c9780f150cc7328e"],["/tags/Gitlab/index.html","aafc6e8de556a070892647b59f1c9c85"],["/tags/HTTrack/index.html","f512b5c7100948b5ac6bf922c3d55da8"],["/tags/Jenkins/index.html","73006d92bb34c71dc3ba629c76cb522e"],["/tags/Kubernetes/index.html","b58d84fbfdf244bc6c7731e058c667b7"],["/tags/Netgear网件/index.html","9c63573bb050deb08ac480329117286c"],["/tags/OpenSSh/index.html","12f34c71781856e37e9be7481c55511c"],["/tags/R7000/index.html","9e1af94f40b9a0363cc5b9a86535210b"],["/tags/TZ/index.html","d8197b6d2a887674e6cf70cf59234525"],["/tags/abbrlink/index.html","ed5bcd02d9301b8c3357d1a1562203f0"],["/tags/aplayer/index.html","55458552c6980ef21539cb7bc5edd0d9"],["/tags/authenticator/index.html","ac827f84dd3dedc4a68fdd6e333f9a92"],["/tags/awk/index.html","fb955abafc17ddd4533be8a314cb5366"],["/tags/bilibili/index.html","78d621fcfc8169d77eccd265c23b7eb7"],["/tags/butterfly/index.html","5477cfa727cf3fee83dffa96d6a7d3f6"],["/tags/docker/index.html","a3c23ba12e3e95cb353874fefdc78081"],["/tags/douban/index.html","e31ec873dc94fff1cde6a16124e317a2"],["/tags/expires/index.html","2db0e3e32845e7d40ca542b28ef90144"],["/tags/google/index.html","c41c00c13b0e175265967ddecbae5467"],["/tags/hexo/index.html","60aa745a080fab9d0e9294069e0ce800"],["/tags/hexo/page/2/index.html","c7ec1b60be5f6ddca619affe15a90251"],["/tags/https/index.html","891bf67b881ee43e540bd7b0782cf36a"],["/tags/index.html","e2b4a78685225f90fd9e66a6ad2a5206"],["/tags/jsDelivr/index.html","bae58010e4ce4c8efd27acae7cefe65d"],["/tags/link/index.html","f1abba1ef56cca3040cff7e8c592b8b8"],["/tags/linux/index.html","ffff73b87957c5c980686bcc1aaf3b0c"],["/tags/location/index.html","15c37306a0d046cd2124ee0399589aab"],["/tags/mycat/index.html","a57f9ead9717858f58a8c3e86a836cae"],["/tags/mysql/index.html","0dfba9b30c635e619568741cf26983dd"],["/tags/nginx/index.html","117687bf7e0e351dbc858143f56019bf"],["/tags/nodeAffinity/index.html","359ba03a16a4c9cac320256a5744ce76"],["/tags/nodeName/index.html","ff23468e55e540877ced64c68489937f"],["/tags/nodeSelector/index.html","76d46486cb4003acef7a95b179422807"],["/tags/nslookup/index.html","a47f5ffd68a5417fa4f7398f4b131d2b"],["/tags/oh-my-zsh/index.html","1cccdf3b8e8b06998a4ee02ca515e7df"],["/tags/podAffinity/index.html","e97bb81c066363ed6fd521c2d62c4c31"],["/tags/podAntiAffinity/index.html","39cfcb0f90c2e0e090f2b08816e5625c"],["/tags/proxy-pass/index.html","65f9b3f983b38bb56822a7e4f3ae0516"],["/tags/python/index.html","cfb32f175b25f96c7ef8bd2547a27951"],["/tags/qiniu/index.html","1dc0dc251cb51ad152e7d905719434f0"],["/tags/rewrite/index.html","266941c2fadb0ec7d73a0b9289f6439e"],["/tags/sed/index.html","b3d254c857b48591ce93347286fe7819"],["/tags/shell/index.html","a10d44ef027a82aca60039e4533ebf9e"],["/tags/valine/index.html","8f68bbab1a145e3f7439ba6792af1c13"],["/tags/返回码/index.html","b37835520c07ad06544737c8d43fb43f"],["/tags/重定向/index.html","e0f47c860f18c8a45258698aab6a480b"]];
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




