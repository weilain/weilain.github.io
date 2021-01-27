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

var precacheConfig = [["/about/index.html","322054b978fe1edff9611187c4c13c4f"],["/archives/2018/10/index.html","298eb9b4eaf8c0a823e1057efd916463"],["/archives/2018/12/index.html","4410d184759dedfea6369a023dc63483"],["/archives/2018/index.html","924d8ecbf6f83025439a7b1b8a6322f2"],["/archives/2019/05/index.html","0cbea931600414c1319657d8db35990e"],["/archives/2019/07/index.html","8608785eac17ae420291e5a183ee6616"],["/archives/2019/index.html","8f3a07055aa6cb1ac94795d346ff4c2e"],["/archives/2020/07/index.html","bb71114de28bb36ef228593deba480a3"],["/archives/2020/07/page/2/index.html","0237bbc6a18108b6af1512957e18178b"],["/archives/2020/08/index.html","87261baebc1a9b79b9b59c8e90f2b4b1"],["/archives/2020/08/page/2/index.html","2f2db6ced73064f09e3d478e6c73bd78"],["/archives/2020/09/index.html","97d58ff7c856d467258b9e8382a44f88"],["/archives/2020/10/index.html","2b74be55868e053f269a93b4b25bb482"],["/archives/2020/11/index.html","b5b76b1a668523afb6df0890f3657e64"],["/archives/2020/index.html","2e64d242c637897455c669e14473af31"],["/archives/2020/page/2/index.html","c0a591ced91e469d354064eabd6a6575"],["/archives/2020/page/3/index.html","aa083f38309a168c29658bf2d3464d26"],["/archives/2020/page/4/index.html","4ea896233e6579c6c84a547ce76e1e52"],["/archives/2021/01/index.html","f642d9f8efc00daa5d72ed38365547dd"],["/archives/2021/index.html","957fce3a39731a2b6c40dfc6d0d55d27"],["/archives/index.html","f63b536182a6bb7a0a34679c46536b45"],["/archives/page/2/index.html","a653d083f8f5f76e5f16952d667a7e07"],["/archives/page/3/index.html","c6fdf2aa6c7a1552e741bc7e7f935c95"],["/archives/page/4/index.html","47e06e8fcdb5ef45a4251cac694506b5"],["/archives/page/5/index.html","bae11bfb4cb1c1ee2ad8f181425a1a34"],["/archives/page/6/index.html","ed45a2344bb9a4c2adfe2c7f36e36e1a"],["/bangumis/index.html","fd247674fdcc2c5ea732976fd5db5af9"],["/books/index.html","57e48b462353f2281e237dee68aeccfb"],["/categories/Github/index.html","c2ecc03dc5a41d732478244b351f9228"],["/categories/Gitlab/index.html","40a79c32353679a5e165478bf838fabf"],["/categories/Kubernetes/index.html","1b68adf77cb090f1ca953f57ece88574"],["/categories/Mysql/index.html","3ed67d2475c5a406583858f815787a6e"],["/categories/Nginx/Jenkins/index.html","baace0a3a1d8f53d7abd5c5175565ae4"],["/categories/Nginx/index.html","f06265588be5b014488b0df61ad9d55c"],["/categories/Nginx/linux/index.html","4442f046007c7efc47168b9567c03ae0"],["/categories/OpenSSH/index.html","d4abe21611557097b4530417dfbcdf8a"],["/categories/hexo/index.html","8b15f902669699b42d7e4803cc6e188a"],["/categories/hexo/page/2/index.html","6a7a38e4a2ef4108a35900e5fa293c87"],["/categories/index.html","d4e0a9d48d539c5064f7eae8412d6f78"],["/categories/link/index.html","b9746cef2027bcc4bcd4bbddd4e39d46"],["/categories/linux/index.html","c23e8805930e9d3d9133cf03687456a2"],["/categories/oh-my-zsh/index.html","34463ad72a00317dd382ccb951970d2a"],["/categories/python/index.html","2b55d66895279bc1cd62c23eda9be272"],["/categories/script/index.html","16b23fcf529e8603c8365190ffb9f06b"],["/categories/tools/index.html","548f3221f90f0936e55ea85284ec17a8"],["/categories/奇怪的知识点/index.html","3aea5e139843c7419d4ec2362653242a"],["/contact/index.html","d1f6afbba11deb18e891903a5e40be97"],["/css/index.css","f729d0aff09703a4da73c660b7acbbfb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/veditor.css","eb2128928ad15904d36e368fdb00ff87"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","1a78e0a1cff514fae5aaa31a4ed3cfbb"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","b3a707887f80798d2bfd83cdd42f4db0"],["/js/calendar.js","9dae07e03db11437110f4529071cdae1"],["/js/crash_cheat.js","9e48b57cc02c1eeaf8bf3632e891ce8d"],["/js/languages.js","09753f588fdaae0985d91e181f3a940b"],["/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/js/veditor.js","1f5efcf664672c4a265ae7037d75e8be"],["/link/index.html","0634a05c219e7e9a6627f5ec4cbb2d5e"],["/movies/index.html","a1734a73ce28d343745d4a0c6aecc0a4"],["/music/index.html","3fb9ac84d499921b87341599747d7779"],["/navi/about/index.html","23e5db7c808edb60e3c139a77f06d27e"],["/navi/blog.ansheng.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/re.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/urllib.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/index.html","173d362807e679df6fb42a4529953c2b"],["/navi/sm.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/ww2.mathworks.cn/help/matlab/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.chuyu.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.dotcpp.com/oj/contest.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.php.net/manual/zh/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.r-project.org/other-docs.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/p/12130977/index.html","22f9babe2aa012b571451b35b32074e8"],["/p/12223247/index.html","575f68ce8265fd314f2dbf428be6d461"],["/p/1b825486/index.html","f3a0c27d3e958e1e295df0f715fa79e6"],["/p/1f7c743b/index.html","3bc3529b9e5c3bbc1f97d30af753d3fa"],["/p/22d30f17/index.html","45b53cdb30755e1466b5202f922da351"],["/p/2399c152/index.html","7de6535fb21d0def78c6cf580f14bb22"],["/p/2651b0bd/index.html","10603f6772f4c15c85d50ba9ece25ec5"],["/p/292fbf59/index.html","15cb6200f9e7a4d4a68160bd96d0a7da"],["/p/2c54d1ec/index.html","6ed99aea791a1dcc2b251aaca0125d87"],["/p/2d27b747/index.html","cea4781d64d00da957b5b8ed658a1654"],["/p/31397f6f/index.html","e4c4d3c8611a0c23293303929ceb9e1e"],["/p/328665dd/index.html","63c54ff97cba33f1cb741ea67661540b"],["/p/32e6fc54/index.html","29437708b800a9fcd2e36959ed8e723e"],["/p/339c428/index.html","8db0145392f6149fc4d9c7bdf223a4db"],["/p/36a8252d/index.html","33d3a558c3657300afab21914459588d"],["/p/37369/index.html","5dd085076fc5af2ec4ffeba88f4a0c3c"],["/p/38510659/index.html","c7bf7f07ffe18636094a69a042698771"],["/p/3d65889c/index.html","2b9f6acd65190934f0ef991cef53fc27"],["/p/492994d9/index.html","a5752bc80b05d887a62fb2329aa680cc"],["/p/4b638dc2/index.html","8c8c6345d6b551a0c97f51c5ed0f7f7a"],["/p/57aae221/index.html","96380e5ebbfac312303960461de2ff8f"],["/p/5851b21/index.html","71b8d726765c36d625844d299750c43e"],["/p/59ce9c6a/index.html","89685763c8f160baaa9af52a6eb8e365"],["/p/5e94d2a7/index.html","075c15388c049516698fcd58dcf16f8f"],["/p/65008a24/index.html","7e8249cafa3691358c9f641fce29d1cd"],["/p/69df4022/index.html","d92057fbcd99b43ba10c350db2a48305"],["/p/6b915d25/index.html","6f7a095c9b41701397bf15f26b08265c"],["/p/6ea05e36/index.html","42b86d91e5b9e929db71f68ef2eba4d9"],["/p/761d0096/index.html","754335c690013629fe8a052094113309"],["/p/7fa69db0/index.html","1f64aecb2efbba27526ffbe95c7a4e7f"],["/p/8422e92e/index.html","1aa4e4043c99fa919aacd7d5b6acad6d"],["/p/8a11f10a/index.html","a1ca9f892be8e1f81f48a44b9f31e46c"],["/p/8b346831/index.html","d63d37a1304b9516d05d7768b070cbd7"],["/p/8cad5570/index.html","459c6d3bfe6ccd9f7829e7a43854b29d"],["/p/8eb47741/index.html","d3654a4d0d0abed8394ec4b36c360d9a"],["/p/a564d3b/index.html","2a37b05be5e225e1506de73f207942b1"],["/p/b0225828/index.html","552e18c31c8d93d0f789ec034ba06b66"],["/p/ba1e0fab/index.html","586cc97d71702d0a2fec809cd46cb0cb"],["/p/bb2a8a2e/index.html","d356018fd87c04b5b2027e4f83f2c26d"],["/p/c2e90d73/index.html","4bd67b8fa879d5f8792ed9b4e383cbda"],["/p/c4492888/index.html","969d60f622489b6fe1bc3b632dcc0b5d"],["/p/cb1e6c4f/index.html","848022ceeea90d58d5bd00f94befc922"],["/p/cc5f8722/index.html","a02d617ef267a91052559174b4ce9684"],["/p/d47d8d30/index.html","42fe0fa16974119910d59fec7c240c2d"],["/p/d64778f7/index.html","7906c04b325411b7a78a695af9eefa68"],["/p/d881e309/index.html","37f5fa6393367ff881fc01c98a4638f9"],["/p/d9a940f3/index.html","634aa7f8ae2795cce5768182dde63c7f"],["/p/eee93e1e/index.html","943e3ee39ee370ba7f1d1fe53c8ccf0f"],["/p/f700fae8/index.html","b64d10a57c744b4c20031d972aa8b7b7"],["/p/ffb5990d/index.html","0da061da28df56841c656cfae7111196"],["/p/fffbf386/index.html","19aaef02e369e0cd1d9f538c7b2aeecd"],["/page/2/index.html","5f232dd443776a844ac3fb2e7cb19fb7"],["/page/3/index.html","63ad8d10c40ac35b9c8505d2f02e4d2a"],["/page/4/index.html","15cbf0bb3f08a297290ff6bf35aaccb8"],["/page/5/index.html","1e6c7869e4f36088ef9363d6b02b5b13"],["/page/6/index.html","98c72904111ef40292d39c1720ccb383"],["/tags/CDN/index.html","0aaa7920ccfeec211c98140400211cb1"],["/tags/Github/index.html","4012bbd58897e83527a06b1c2eaf2436"],["/tags/Gitlab/index.html","cd2e59aa27d437e104ad603ab13061b6"],["/tags/HTTrack/index.html","06f35ab11584fccb04ffbbd388686498"],["/tags/Jenkins/index.html","ff565be72ab0ec6d3fdc7ee0cf334603"],["/tags/Kubernetes/index.html","902f44df3ceab4d1bdbcfbc47d663103"],["/tags/Netgear网件/index.html","51cc6d0a22da958c5d0e0234812d75e6"],["/tags/OpenSSh/index.html","c8ef4c925953fe404f561d0231f76a6a"],["/tags/R7000/index.html","5f370702def2a435bc1dd032975f0e45"],["/tags/TZ/index.html","d28e1bed463b1539c48fb6292fdcebc7"],["/tags/abbrlink/index.html","c2f596f369188e96e47d1f24bb91ba06"],["/tags/aplayer/index.html","9e50acdaa79c448680a3aa062ed52bea"],["/tags/authenticator/index.html","04a73a503e5b3d269ba4d3bcd8291896"],["/tags/awk/index.html","2881c3df26e59814b38d365ee6e934f3"],["/tags/bilibili/index.html","6aa79e99471afdc37a31f48cb4c2e779"],["/tags/butterfly/index.html","6f0d941cb519e0ac00cdeb7fe97ed646"],["/tags/docker/index.html","463dbeb996b980a3d8b9432accf484b4"],["/tags/douban/index.html","44c7d43b368c7550da22ed1e1b820a4d"],["/tags/expires/index.html","d9ba3fd9bc937b06682d6aa31c8349bf"],["/tags/google/index.html","45c863ec105f6dae3ec3cf9365013781"],["/tags/hexo/index.html","5cd439c70525c2a0514e0a0af9dfe655"],["/tags/hexo/page/2/index.html","b09f7093e4379de5a8d86b2ea945174e"],["/tags/https/index.html","f2d8c4253805dbc60bd68439a166d589"],["/tags/index.html","3fda1bb4c5775702326811e24be6f080"],["/tags/jsDelivr/index.html","2df418afec3ef518b745aa88790fb1ec"],["/tags/link/index.html","f1a7324c8b02e3462e6b71e5b73ebedf"],["/tags/linux/index.html","04ea8b6934d09a281aea7e6c9c2f3314"],["/tags/location/index.html","64d5facef9d3cae09f2ad77af1d89444"],["/tags/mycat/index.html","62b1f5a92100f00217631b192e3425c5"],["/tags/mysql/index.html","5d455197f61b5ea3e9026ede017a555e"],["/tags/nginx/index.html","a3ac80e43172a23baf1cdd7e2c5b70de"],["/tags/nodeAffinity/index.html","e1571f22a260e2977d7abe9450beb637"],["/tags/nodeName/index.html","d2157938b8d51c1b92c084893c23bc07"],["/tags/nodeSelector/index.html","b0498daa021e90520ba424db8ead110c"],["/tags/nslookup/index.html","88f06bd492e32d80645e85810113c646"],["/tags/oh-my-zsh/index.html","96289b8bbda238fd680cfe3eb0fc3b46"],["/tags/podAffinity/index.html","e3d902a93de07317af4037789afce60e"],["/tags/podAntiAffinity/index.html","11cba294122a350cf10ae4972ce1ec4c"],["/tags/proxy-pass/index.html","9538ee3245e8fb75892c0e84978d57a6"],["/tags/python/index.html","140baffaabcf42994497f6cb6d31e129"],["/tags/qiniu/index.html","cb05b459326660a290df1f3ef91c07d7"],["/tags/rewrite/index.html","a633c26f016ff40f091a2f0d437d2935"],["/tags/sed/index.html","2e6da475da1e858976d4c6bc9c7f6f90"],["/tags/shell/index.html","51d77e8fa89c51cbf81ccfbe4799e3eb"],["/tags/valine/index.html","ec2685fe1a6a70567dc1753ea788897b"],["/tags/返回码/index.html","7bfb125466f0de6f561c1c878b12f5eb"],["/tags/重定向/index.html","72d5a1c0066216b23d461e083f176930"]];
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




