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

var precacheConfig = [["/archives/2018/10/index.html","4a8c6c16d5c3c49ecb9f0091991f7791"],["/archives/2018/12/index.html","1d3b85ea8de6571182d56021cbb35f2b"],["/archives/2018/index.html","a67983427718af8d8b2c725a36cf3d77"],["/archives/2019/05/index.html","a6b69ac07913a5b886b08eeaf3e18b1d"],["/archives/2019/07/index.html","409b078a1068297597076863f342968c"],["/archives/2019/index.html","b164347cdea1de9da0a9b72dee44633e"],["/archives/2020/07/index.html","7f1e85f047724564b583ec5e5d41cda3"],["/archives/2020/07/page/2/index.html","02a6466527764ee4b7d4fef846f2a546"],["/archives/2020/08/index.html","dcf881031a977749fcd305c28e12ee81"],["/archives/2020/08/page/2/index.html","c5ce448d674f137935258245770a846c"],["/archives/2020/09/index.html","c475b8824effe973e0200b4320443d87"],["/archives/2020/10/index.html","4f3f199813f4fc22d9292b860a1c3783"],["/archives/2020/11/index.html","38603547695f2f9985d4a54ca0fec7db"],["/archives/2020/index.html","3f7016d0a1292bb0a51fa3665ae4e06f"],["/archives/2020/page/2/index.html","c69979ab6c0147dafbe7b65155e751e8"],["/archives/2020/page/3/index.html","bc604f2fc6f64ff2c932fd9eeeda8441"],["/archives/2020/page/4/index.html","f089cf3b3eceb341e3c5130459881293"],["/archives/2021/01/index.html","d8cb8917967af2b6eef8f07e29f63993"],["/archives/2021/index.html","e266aa5512e85137fb66cc2ed41c3753"],["/archives/index.html","fa7c1c6b945c81da72bec8b6f7c85626"],["/archives/page/2/index.html","2dc4ee0526f76dde7fab0285879e5260"],["/archives/page/3/index.html","45738a0ca7a5029ffe167ec763f55209"],["/archives/page/4/index.html","47f4bbda50e5b616a12a58c877cc49d2"],["/archives/page/5/index.html","fbc5b1948d1002158d6b2c7a4d21e98e"],["/archives/page/6/index.html","6f0f5a765d5b06e561048d98ab104820"],["/bangumis/index.html","063473e7ff87a3e2f18bb665cb024201"],["/books/index.html","de0c9e6d5e27c02ca70eb32510a771d9"],["/categories/Github/index.html","4c21256f95ea2c37589451518e7d19bd"],["/categories/Gitlab/index.html","0006d0e3eb2db606a40b37254eb0fb60"],["/categories/Kubernetes/index.html","1a862740b775fa79c2cb701d08fe427a"],["/categories/Mysql/index.html","15b1283b3baffc803aa844504572ab8c"],["/categories/Nginx/Jenkins/index.html","265f3c06c14cb0deb9e82bfd82693a33"],["/categories/Nginx/index.html","d1845d7e11ab5576525cdd31ad134b27"],["/categories/Nginx/linux/index.html","33dffdbf8209f53d1f82a3726dbc7835"],["/categories/OpenSSH/index.html","b1df7d0eacf4709e803931729d4c270d"],["/categories/hexo/index.html","6e712679963ae2620b0e5905942e0d2d"],["/categories/hexo/page/2/index.html","6d116c21478613bf2c404a76be70b51b"],["/categories/index.html","68534c0d1a13d719f3e4c6d564b12f0a"],["/categories/link/index.html","ccd2aad7d2f6e00247f81d1a43e3cb98"],["/categories/linux/index.html","a427c6e62502690027900a8f8294fad6"],["/categories/oh-my-zsh/index.html","ea940baa18fe331c158566fbbe614cb6"],["/categories/python/index.html","9bc8a88cbf1066a7febdc11d4874c14a"],["/categories/script/index.html","c23f81e530e15d3eb1518937b969b997"],["/categories/tools/index.html","a1c3a7487f18ff7d99b4f3e40678d5ff"],["/categories/奇怪的知识点/index.html","ed2729c09e7d4112a96f489d077328d0"],["/contact/index.html","536773d27cdb5033e66fbc3ac466d76a"],["/css/index.css","f729d0aff09703a4da73c660b7acbbfb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/veditor.css","eb2128928ad15904d36e368fdb00ff87"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","1a78e0a1cff514fae5aaa31a4ed3cfbb"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","c283bdfbab62adefdba85f4ca5a9bcd8"],["/js/calendar.js","9dae07e03db11437110f4529071cdae1"],["/js/crash_cheat.js","9e48b57cc02c1eeaf8bf3632e891ce8d"],["/js/languages.js","09753f588fdaae0985d91e181f3a940b"],["/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/js/veditor.js","1f5efcf664672c4a265ae7037d75e8be"],["/link/index.html","4106f69c0148cfeee0a40e8d30bc761a"],["/movies/index.html","663b8256237ffb1e513f620ea7891ba4"],["/music/index.html","ff861aa7bf57f3dc11335ca7f0fc34f8"],["/navi/about/index.html","23e5db7c808edb60e3c139a77f06d27e"],["/navi/blog.ansheng.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/re.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/urllib.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/index.html","173d362807e679df6fb42a4529953c2b"],["/navi/sm.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/ww2.mathworks.cn/help/matlab/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.chuyu.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.dotcpp.com/oj/contest.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.php.net/manual/zh/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.r-project.org/other-docs.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/p/12130977/index.html","ebb7b605fd27251d6978385d93c65b13"],["/p/12223247/index.html","ced9e4f1159e23a6d7c1382f7ffac950"],["/p/1b825486/index.html","3a7208037c4b67d9c5c06aaec3b5c659"],["/p/1f7c743b/index.html","a85ab4cc83892c14a77b2563cf162a41"],["/p/22d30f17/index.html","cc4cb88bcbe5bbda8567176a099edc26"],["/p/2399c152/index.html","3c158be1b0aa34b5a5db17240637f60b"],["/p/2651b0bd/index.html","81ccaa1fe8e53ce02899edfe2162e134"],["/p/292fbf59/index.html","9d6da7dd9f258d34c71352ca141ef0e0"],["/p/2c54d1ec/index.html","99e6f3819ed97a7caaef3f4c6de77228"],["/p/2d27b747/index.html","cc089433589e6e5df7d4faec2ceb3b5e"],["/p/31397f6f/index.html","a118a4e4cb7955a6b0eb088b92685a0c"],["/p/328665dd/index.html","a835dc9b3acab6cfa988a984baf4c788"],["/p/32e6fc54/index.html","eae21fb94ead71fe73028c94927e51d6"],["/p/339c428/index.html","9468a67c98b084f86087bd69c39fb8dc"],["/p/36a8252d/index.html","dbb3646948cc70a97d8628fc9cf5bfff"],["/p/37369/index.html","6b25569d73ae99307613b3c5ffc5a92b"],["/p/38510659/index.html","4d0bd98892cbecd90669436550b29912"],["/p/3d65889c/index.html","fe716af17169925ec98e7c09d2b2a026"],["/p/492994d9/index.html","a980a244256e06ebafd5053c925b536c"],["/p/4b638dc2/index.html","7a18061b00e6cad218509c8235735b20"],["/p/57aae221/index.html","f1444c64fcedaeec406a65aeb21c6c28"],["/p/5851b21/index.html","cb820e91f4419c842006dbe4eb65459d"],["/p/59ce9c6a/index.html","3d0ad893135460ea7b343cf8c1bd9408"],["/p/5e94d2a7/index.html","6b53ed2fe6107c445cc99cfbed474a4f"],["/p/65008a24/index.html","46b154cb0af49c265f705065c0840f2c"],["/p/69df4022/index.html","d374d79d874c3653d7573fe14c56dd22"],["/p/6b915d25/index.html","4393653ac5b687980702f56c39ed4b81"],["/p/6ea05e36/index.html","bd9a56a8ceb5fcd766fedbaf05dfdfe5"],["/p/761d0096/index.html","9afd8ad53b6f1d55a40a04eb3e8b912a"],["/p/7fa69db0/index.html","3ca6ddbd98ee302952c581dac9cfad77"],["/p/8422e92e/index.html","848792f60bf644a0804bd96023170141"],["/p/8a11f10a/index.html","3f99765fe827caa505c3c633d117b258"],["/p/8b346831/index.html","b5731ac2c0bf4428a4a5097993679357"],["/p/8cad5570/index.html","84277939bbbd887f9da381a5eeabee7c"],["/p/8eb47741/index.html","e48c6ece2e95b705622b52c0ab93658a"],["/p/a564d3b/index.html","82fde40ff801a03c858ae46062ed6863"],["/p/b0225828/index.html","47c1941f73c37b0afaf96e59a46dc362"],["/p/ba1e0fab/index.html","2406189b2d00911ac831b7d70c1172ca"],["/p/bb2a8a2e/index.html","debea06497c1a77a1b5631c85176ec22"],["/p/c2e90d73/index.html","f5c26729d599953faa7718d99ebaaae3"],["/p/c4492888/index.html","4116edfc1bcd1a36f049cfa8d330a073"],["/p/cb1e6c4f/index.html","b9416248bcfafc571b2b41e171bd6699"],["/p/cc5f8722/index.html","b312f2afc7c63fc650d48a5c8b8eebbd"],["/p/d47d8d30/index.html","44bc13fe7b936ac27b839d1b54298be9"],["/p/d64778f7/index.html","23410ee15b6c73af608965d518c55c93"],["/p/d881e309/index.html","87a8a03cbeb042870a395d60b4bb4080"],["/p/d9a940f3/index.html","b53ab079fb996417b3bd50d0edfd00d3"],["/p/eee93e1e/index.html","5adf8f932e2a6450cfb4151e4e1847ac"],["/p/f700fae8/index.html","cdd0620926eb81e760027c5df66fbae2"],["/p/ffb5990d/index.html","db0bede1c8af362541362218e3305ea4"],["/p/fffbf386/index.html","ea72e898491dd3e7afeb7bb3ea17818e"],["/page/2/index.html","82d9f45ba28c3c67036024154bcec1c2"],["/page/3/index.html","3ef191d1d635c727871af3e47e5d98eb"],["/page/4/index.html","d733aba98f67a33fa4940611b05db614"],["/page/5/index.html","bd2fa14931dc796255ef2f2c1c945de0"],["/page/6/index.html","6b3c59cf01e4288085414aa1a5f829f8"],["/tags/CDN/index.html","571b9354ea2ed3342bc466c6062cb8a3"],["/tags/Github/index.html","8d39d54bb9864909b89d425ff395b222"],["/tags/Gitlab/index.html","feaead23253192c8f57d3576ba5a5cf2"],["/tags/HTTrack/index.html","2dae0d370111e42cf8bd91c46ccd387e"],["/tags/Jenkins/index.html","2079f9c2c281169b967823b6faea2f53"],["/tags/Kubernetes/index.html","1783edc942e70803ec92af59b63f2b7e"],["/tags/Netgear网件/index.html","db3b754a6b34d184f7942f31c735d61c"],["/tags/OpenSSh/index.html","b76fdfc6bc583e995a709ab62b2c2f38"],["/tags/R7000/index.html","cb6cf064a3a106dfbd8baf73bd4ac2cb"],["/tags/TZ/index.html","20af0dc2c63d4966127f153af9f5796d"],["/tags/abbrlink/index.html","caf1f878bea0e13fc3097a37e6488d6e"],["/tags/aplayer/index.html","375e5ab9fd366f73ccfb1e80aa6fc47b"],["/tags/authenticator/index.html","d2a89a4a84842c0696a50925e82b3f78"],["/tags/awk/index.html","3829e2bffc584323fa74bebc6fb514ee"],["/tags/bilibili/index.html","bd0f0f8f320e148cc9ff786a3d7b4d30"],["/tags/butterfly/index.html","1b2e7291d54c2677eb7a6926a100d71c"],["/tags/docker/index.html","66287fb5d10af6d886a6b17d5fa2da40"],["/tags/douban/index.html","66d91e42c5ea92b7ffec4f21fab7f2b7"],["/tags/expires/index.html","a322a6e820b75dc8a694d991a118732c"],["/tags/google/index.html","cd5e8ec06fadd9040514b616342b03f3"],["/tags/hexo/index.html","8447863f414b9f5c4eef2a1abe438f50"],["/tags/hexo/page/2/index.html","63ebcdfed570f267e4940773fb6faaa9"],["/tags/https/index.html","76bfbf2891028fc9eb7ca59ee70b4c37"],["/tags/index.html","f4d6776bbfeb71e34e68e2cbd25a94d3"],["/tags/jsDelivr/index.html","97fee87decf050804a18e291beb83e2a"],["/tags/link/index.html","cf606c1ea757dc545dc8db62cfd53d26"],["/tags/linux/index.html","0c6414c169f297e0cb8eea75a4bb42dd"],["/tags/location/index.html","7e828982429f04e321e0e25700a55d1a"],["/tags/mycat/index.html","a597178509c88c878b2346222de0e4d3"],["/tags/mysql/index.html","00b985a8447eb228aba8c97402e6383d"],["/tags/nginx/index.html","3108c59dc39b665463b7672691e1293a"],["/tags/nodeAffinity/index.html","e3c7e606cb4725f7791cd19e67cdd6c7"],["/tags/nodeName/index.html","8f93e3c370b1d4e645ecf13901a9d80a"],["/tags/nodeSelector/index.html","52ab121fd9bc896c669445f53adc5717"],["/tags/nslookup/index.html","d616cdc2d44913c896589982eb16a8ec"],["/tags/oh-my-zsh/index.html","4e20e84effb7b111b0a6003e3adef637"],["/tags/podAffinity/index.html","05b04c83a2d1379b2008c5cf8a56a6b2"],["/tags/podAntiAffinity/index.html","13b177f16a5ac6ef4c8d60be71d9d8fe"],["/tags/proxy-pass/index.html","fde123223a0ab18eddff6054673fc6ea"],["/tags/python/index.html","70bc975630d2c9231fdb4fb9b5327389"],["/tags/qiniu/index.html","716f13afb7be71a05a7118805eda1a30"],["/tags/rewrite/index.html","dc7e70895b3fc9abb6edf45537dda929"],["/tags/sed/index.html","88e8f1658ae55a9a940e3704bf82a684"],["/tags/shell/index.html","828a59be884b0fcfe8f6a655a4d2f922"],["/tags/valine/index.html","7c80c1fb4f7e155fb1eed4d1d1507379"],["/tags/返回码/index.html","33f18f6befb7ad7e07af9513ec6d8118"],["/tags/重定向/index.html","9760b94d32aaf4133e68bbbbe38e04f0"]];
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




