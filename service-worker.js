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

var precacheConfig = [["/about/index.html","0646d226fdfb0bb3c9ce224d83745a95"],["/archives/2018/10/index.html","1d29877cf1d4831c3a15b6458591ebc6"],["/archives/2018/12/index.html","c6c43aed88776066161f4ced5b10fe0d"],["/archives/2018/index.html","59c1d0f6f3d912e2af5d33385c68e0e8"],["/archives/2019/05/index.html","1f0686900f27bd02d78cb52c6fee4964"],["/archives/2019/07/index.html","c82a03e81e7fddbb49d7bc78bcab85cb"],["/archives/2019/index.html","c398b43b794ab2e75aa3f7ffaa9d1324"],["/archives/2020/07/index.html","241a082eb927cd814a2d2c160b47a16e"],["/archives/2020/07/page/2/index.html","8920c1aa18f09fa936bc76d4bcf7b895"],["/archives/2020/08/index.html","c89ae723b795f9372655ab9a23b712c9"],["/archives/2020/08/page/2/index.html","4835f913feb290e93318b39dbb9e0f81"],["/archives/2020/09/index.html","9d36f154d3f9e8f44c2f995d99a1e1f8"],["/archives/2020/10/index.html","952aac1d23b65a2bc0e2a58246c44dad"],["/archives/2020/11/index.html","9d3b6905494f5085af8ccf0f06a746a4"],["/archives/2020/index.html","f03f1f208293dffe43c3c654189257c5"],["/archives/2020/page/2/index.html","47a70c2a64940f5f8501c3a070a56924"],["/archives/2020/page/3/index.html","c183fc3388b35b31f263132d72d9757b"],["/archives/2020/page/4/index.html","5a3260d688af96cb517c41fa6d0203a4"],["/archives/2021/01/index.html","d03c24fb2aa0d73deba001f6a2fad7b4"],["/archives/2021/index.html","5c6645bfb7acdd218d7d66256f6084c9"],["/archives/index.html","6f083211223f5625e5f8f8baa195fc00"],["/archives/page/2/index.html","e1a69286616a6f32c98eaf6003404eb8"],["/archives/page/3/index.html","127e2208ec5a20d327534446d8321c6c"],["/archives/page/4/index.html","fe475cd3ac1e57829ea977a09392b25a"],["/archives/page/5/index.html","d0eba4d7b5dc5f09a9c538273979e599"],["/archives/page/6/index.html","e6783b95264eac312d54f65bee9813d9"],["/bangumis/index.html","dd7dfe775614fa8cd72bdbc0f5b565b1"],["/books/index.html","1e8bc4a5e0a33bde276182a5a3de9b71"],["/categories/Github/index.html","a914f0bb2f2a580b7833d55e6bb2a7e5"],["/categories/Gitlab/index.html","8db0be5ba7dfad6a28e71fbc846c6e93"],["/categories/Kubernetes/index.html","42388c99141419010784a4be642deed8"],["/categories/Mysql/index.html","875a10360239753f6bf9be2b88a2aa92"],["/categories/Nginx/Jenkins/index.html","4fa8cad1306a7ccd324ad7053aa71457"],["/categories/Nginx/index.html","e3d38970897a6ed34294eb9e5a716463"],["/categories/Nginx/linux/index.html","7b8f4f7f8f54afa6f06b317f3ccc6082"],["/categories/OpenSSH/index.html","32c8558ca8157a6bb9d6584951828f89"],["/categories/hexo/index.html","80163af87881875737b887a4a9cfcdfa"],["/categories/hexo/page/2/index.html","01e0cca1e52f7617674b50335c636cc2"],["/categories/index.html","48206c53e9b908f3f48d57a323bedbfa"],["/categories/link/index.html","60041a9c206a3d9cd11d51ded6f9761d"],["/categories/linux/index.html","23c21140acc65310011367ed6dfad24d"],["/categories/oh-my-zsh/index.html","82b0cf78a70ad62d9b72d7f6e566153c"],["/categories/python/index.html","a49c7578c0bb71ecf3127cf011bf6e5f"],["/categories/script/index.html","62756bdbba071d4795a4d563f1f87afc"],["/categories/tools/index.html","dea6826e55d377a747aa477d2700d9d4"],["/categories/奇怪的知识点/index.html","7a296a7de4f6ed2c21b7ff48daa72156"],["/contact/index.html","bff855533fbcc78d3e313fbcd83c95a2"],["/css/index.css","f729d0aff09703a4da73c660b7acbbfb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/veditor.css","eb2128928ad15904d36e368fdb00ff87"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","1a78e0a1cff514fae5aaa31a4ed3cfbb"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","71e330cc6521cbb0437e221187061f66"],["/js/calendar.js","9dae07e03db11437110f4529071cdae1"],["/js/crash_cheat.js","9e48b57cc02c1eeaf8bf3632e891ce8d"],["/js/languages.js","09753f588fdaae0985d91e181f3a940b"],["/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/js/veditor.js","1f5efcf664672c4a265ae7037d75e8be"],["/link/index.html","03e8ff21436d5cb40c50a4b0b47d7206"],["/movies/index.html","7cd29eb9b25f864b341c54714cbe4277"],["/music/index.html","9d1ce0b072698253313e2ce28f8ce0c9"],["/navi/about/index.html","23e5db7c808edb60e3c139a77f06d27e"],["/navi/blog.ansheng.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/re.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/urllib.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/index.html","173d362807e679df6fb42a4529953c2b"],["/navi/sm.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/ww2.mathworks.cn/help/matlab/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.chuyu.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.dotcpp.com/oj/contest.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.php.net/manual/zh/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.r-project.org/other-docs.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/p/12130977/index.html","22f9babe2aa012b571451b35b32074e8"],["/p/12223247/index.html","575f68ce8265fd314f2dbf428be6d461"],["/p/1b825486/index.html","f3a0c27d3e958e1e295df0f715fa79e6"],["/p/1f7c743b/index.html","3bc3529b9e5c3bbc1f97d30af753d3fa"],["/p/22d30f17/index.html","45b53cdb30755e1466b5202f922da351"],["/p/2399c152/index.html","7de6535fb21d0def78c6cf580f14bb22"],["/p/2651b0bd/index.html","10603f6772f4c15c85d50ba9ece25ec5"],["/p/292fbf59/index.html","15cb6200f9e7a4d4a68160bd96d0a7da"],["/p/2c54d1ec/index.html","6ed99aea791a1dcc2b251aaca0125d87"],["/p/2d27b747/index.html","cea4781d64d00da957b5b8ed658a1654"],["/p/31397f6f/index.html","e4c4d3c8611a0c23293303929ceb9e1e"],["/p/328665dd/index.html","63c54ff97cba33f1cb741ea67661540b"],["/p/32e6fc54/index.html","29437708b800a9fcd2e36959ed8e723e"],["/p/339c428/index.html","8db0145392f6149fc4d9c7bdf223a4db"],["/p/36a8252d/index.html","33d3a558c3657300afab21914459588d"],["/p/37369/index.html","5dd085076fc5af2ec4ffeba88f4a0c3c"],["/p/38510659/index.html","c7bf7f07ffe18636094a69a042698771"],["/p/3d65889c/index.html","2b9f6acd65190934f0ef991cef53fc27"],["/p/492994d9/index.html","a5752bc80b05d887a62fb2329aa680cc"],["/p/4b638dc2/index.html","8c8c6345d6b551a0c97f51c5ed0f7f7a"],["/p/57aae221/index.html","96380e5ebbfac312303960461de2ff8f"],["/p/5851b21/index.html","71b8d726765c36d625844d299750c43e"],["/p/59ce9c6a/index.html","89685763c8f160baaa9af52a6eb8e365"],["/p/5e94d2a7/index.html","075c15388c049516698fcd58dcf16f8f"],["/p/65008a24/index.html","7e8249cafa3691358c9f641fce29d1cd"],["/p/69df4022/index.html","d92057fbcd99b43ba10c350db2a48305"],["/p/6b915d25/index.html","6f7a095c9b41701397bf15f26b08265c"],["/p/6ea05e36/index.html","42b86d91e5b9e929db71f68ef2eba4d9"],["/p/761d0096/index.html","754335c690013629fe8a052094113309"],["/p/7fa69db0/index.html","1f64aecb2efbba27526ffbe95c7a4e7f"],["/p/8422e92e/index.html","1aa4e4043c99fa919aacd7d5b6acad6d"],["/p/8a11f10a/index.html","a1ca9f892be8e1f81f48a44b9f31e46c"],["/p/8b346831/index.html","d63d37a1304b9516d05d7768b070cbd7"],["/p/8cad5570/index.html","459c6d3bfe6ccd9f7829e7a43854b29d"],["/p/8eb47741/index.html","d3654a4d0d0abed8394ec4b36c360d9a"],["/p/a564d3b/index.html","2a37b05be5e225e1506de73f207942b1"],["/p/b0225828/index.html","552e18c31c8d93d0f789ec034ba06b66"],["/p/ba1e0fab/index.html","586cc97d71702d0a2fec809cd46cb0cb"],["/p/bb2a8a2e/index.html","d356018fd87c04b5b2027e4f83f2c26d"],["/p/c2e90d73/index.html","4bd67b8fa879d5f8792ed9b4e383cbda"],["/p/c4492888/index.html","969d60f622489b6fe1bc3b632dcc0b5d"],["/p/cb1e6c4f/index.html","848022ceeea90d58d5bd00f94befc922"],["/p/cc5f8722/index.html","a02d617ef267a91052559174b4ce9684"],["/p/d47d8d30/index.html","42fe0fa16974119910d59fec7c240c2d"],["/p/d64778f7/index.html","7906c04b325411b7a78a695af9eefa68"],["/p/d881e309/index.html","37f5fa6393367ff881fc01c98a4638f9"],["/p/d9a940f3/index.html","634aa7f8ae2795cce5768182dde63c7f"],["/p/eee93e1e/index.html","943e3ee39ee370ba7f1d1fe53c8ccf0f"],["/p/f700fae8/index.html","b64d10a57c744b4c20031d972aa8b7b7"],["/p/ffb5990d/index.html","0da061da28df56841c656cfae7111196"],["/p/fffbf386/index.html","19aaef02e369e0cd1d9f538c7b2aeecd"],["/page/2/index.html","adc8e4dbb8b4161e3d3cff2e3117fc4f"],["/page/3/index.html","86f6934ba96745a53be738ea5756f91a"],["/page/4/index.html","424fd4ac88d9318b70e1a04a327f4c8f"],["/page/5/index.html","2209a785b4e64da2bed55e3b4f7041a1"],["/page/6/index.html","88ebc98c952b9170713ee856cb6fd811"],["/tags/CDN/index.html","dc25f870d30bf7d8834205f158f44bdc"],["/tags/Github/index.html","b5d6bec694bcaeb9c5940e2d4efe8d9e"],["/tags/Gitlab/index.html","79cf0aa268b28c0f84b477a5789d07e5"],["/tags/HTTrack/index.html","e87e06b50316543145ab2294f1db1255"],["/tags/Jenkins/index.html","2cc2260c738ab8d6022a0491fdc4733a"],["/tags/Kubernetes/index.html","0d48f9d47da9a17a300bec6c9dabde2e"],["/tags/Netgear网件/index.html","7437f7da94dffa67d75b67e41b5bd96d"],["/tags/OpenSSh/index.html","1ff40659016029a2bf857536d1f83491"],["/tags/R7000/index.html","f625b46843e43a4b647a228d60bfc98f"],["/tags/TZ/index.html","3f0bc22b44980189ac4284067ecf3569"],["/tags/abbrlink/index.html","7d2454bdd0aa67edad2450b82d8d0d4a"],["/tags/aplayer/index.html","6f12ffdcfb33b4910212c3a3487de199"],["/tags/authenticator/index.html","97ed416705007e5c1bb767056791a73e"],["/tags/awk/index.html","f1e1254c95f9cb60e9c450d27fc2b262"],["/tags/bilibili/index.html","23c16b4fd35efed57e18b937a1ffc0fd"],["/tags/butterfly/index.html","3ea261cd5d28a8f8a17076ec973b6cd8"],["/tags/docker/index.html","96ec1cea40824ecf4e30bea481340f76"],["/tags/douban/index.html","f51873e5370c563323425e252dc0ffb4"],["/tags/expires/index.html","91396f5f20d0d7db19244a13c7ea9f99"],["/tags/google/index.html","3cf30e295768d699a6ab749070a49b37"],["/tags/hexo/index.html","02d61bb9e38ed992a0ffe86856ffdbf0"],["/tags/hexo/page/2/index.html","bef87ec7a7e222d4a6b2a178dac31d89"],["/tags/https/index.html","4052295e461c876e2741288144e1bffb"],["/tags/index.html","130e7c5fa8a52ba2585c3fc2e58d901e"],["/tags/jsDelivr/index.html","3f35ad1d9768b55316ceae334e9dce5c"],["/tags/link/index.html","99eeac212ecb1f89dc7201a912c6a4e3"],["/tags/linux/index.html","1beb090c740f27d1943020d024f202f4"],["/tags/location/index.html","668708a5d670ff048a4bff6c0564e9af"],["/tags/mycat/index.html","3cb3524733716a71ee9273a81546cccb"],["/tags/mysql/index.html","5ba855fc190d293018879fe99308fd64"],["/tags/nginx/index.html","e2e7c707de10cc8b7038a6b387d320ac"],["/tags/nodeAffinity/index.html","8545adfc5316f93903e6067d4701c434"],["/tags/nodeName/index.html","1ddd6ea5a686b8dfcbbe210ab3e3434a"],["/tags/nodeSelector/index.html","d2dc4c7f0d9945bbf9cedf9b6e413cc6"],["/tags/nslookup/index.html","fe2d348acfdc3c265153544ba3ae894b"],["/tags/oh-my-zsh/index.html","8e3764275ba2c97166e9431b98f515fd"],["/tags/podAffinity/index.html","21208c981eb8debc7ae38269aa0db8dc"],["/tags/podAntiAffinity/index.html","a2cde531fe2868bc13fceb4ce5c7c62b"],["/tags/proxy-pass/index.html","e8f44dd6765e66a61d90042fc6a14b43"],["/tags/python/index.html","ae9eeb145ba80b5817f698a4dc56b17a"],["/tags/qiniu/index.html","17001116b1a9e6fde0ca86252bdb6d4e"],["/tags/rewrite/index.html","8924290d43bfb1a90c227223fe58f2d9"],["/tags/sed/index.html","f5b690d1bdc453e1b3e966a5893d7b8d"],["/tags/shell/index.html","4b29bad5ba9ce88193f1ee7152871792"],["/tags/valine/index.html","cc38428aa21e3fcba115385dcd393717"],["/tags/返回码/index.html","39db7733d6a179687ce8f1edb1b85987"],["/tags/重定向/index.html","1c77c891a6ad40a735066e641548d4f5"]];
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




