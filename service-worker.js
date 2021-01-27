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

var precacheConfig = [["/about/index.html","6087d884f073193f720ef557f7be8542"],["/archives/2018/10/index.html","0d78fc14f492a1f32a7cc71e9c1b858e"],["/archives/2018/12/index.html","40ed9134962df4e3a9a48bb4f189ef65"],["/archives/2018/index.html","f67dbf59ec49bac644179aef5b9b2fdf"],["/archives/2019/05/index.html","c38f9f1248fe3c4d0f1d161076b5c51e"],["/archives/2019/07/index.html","d1a0e3cce6a364551ce99895de6b8317"],["/archives/2019/index.html","80585c671cae4883159a33007e3a8994"],["/archives/2020/07/index.html","e433a8d87a31925360c5c415a4a2365a"],["/archives/2020/07/page/2/index.html","5187f2ab2d6ca3fb6b0a774b18ebbdb0"],["/archives/2020/08/index.html","dcd57a5ec92b24900a5021d3ab31bf8b"],["/archives/2020/08/page/2/index.html","bab73cb6489695113b711f4eb567cd48"],["/archives/2020/09/index.html","6d77c312a1775f5564cdf6b82d1f82cb"],["/archives/2020/10/index.html","9089ba8002e59520badb82252c6671d9"],["/archives/2020/11/index.html","fcd61a98d064a74aa1fb7cd8fbe63bbc"],["/archives/2020/index.html","5ce07f23368dcb489007c00da4777b8c"],["/archives/2020/page/2/index.html","5a5455e09ba2f984bbc7b2cda225401b"],["/archives/2020/page/3/index.html","8efe8325902663c9198d066771e56bf2"],["/archives/2020/page/4/index.html","3412b3033d22546e9623ca61df14551d"],["/archives/2021/01/index.html","1e48bae2b0237c78b6f449ae9accb5ad"],["/archives/2021/index.html","23a4710334a0a6ef312bb33753d2efa3"],["/archives/index.html","3477c6441b6a75b4883f2df60f085b09"],["/archives/page/2/index.html","706bf29df627915c9a28bb1cd89f1484"],["/archives/page/3/index.html","23e79c6f79a9e462a29e6e2aaf23658a"],["/archives/page/4/index.html","c66a76f6261d50dee80d805a0e030547"],["/archives/page/5/index.html","73dc88278579e9233e9720d9ae21f080"],["/archives/page/6/index.html","093352ccdaac53f908af4b8e45f84b92"],["/bangumis/index.html","f8c500ced4e63f911c6af7377ca636fe"],["/books/index.html","d3b19f540d81c78a88ccbb0de40ce0a4"],["/categories/Github/index.html","6944e37e0241e72f6742ee4b5180e774"],["/categories/Gitlab/index.html","46c1ad598a2f41f96fa6ed7f7fcc3b3b"],["/categories/Kubernetes/index.html","23584d4224d9afbb8b0fd7227e1b2ef6"],["/categories/Mysql/index.html","c345d85c6d983474cc16c3c43f301fb9"],["/categories/Nginx/Jenkins/index.html","9ceeec7f8bf182b66bea272e34a217fb"],["/categories/Nginx/index.html","ba4aa7666b66524e71c0884aee95c2f0"],["/categories/Nginx/linux/index.html","00668fbb0c485ac5ae87bce7134f47ea"],["/categories/OpenSSH/index.html","1776be901cfaa08ffb0815199d094352"],["/categories/hexo/index.html","55740971fafb519e55226b75593e9976"],["/categories/hexo/page/2/index.html","4d830478c775373ff05e37656d1a8bd3"],["/categories/index.html","6031425e353a805579c4911d8eaf13d3"],["/categories/link/index.html","c4147d723094ed6202ac343191e52b23"],["/categories/linux/index.html","a81ba2e15cd1529ec33a4fa4e102cbe8"],["/categories/oh-my-zsh/index.html","46b9076b315b40a8a4d13516f2b7a8ea"],["/categories/python/index.html","0574315016a040c27bdce18f8d57684b"],["/categories/script/index.html","590ea979e391e7a5b62aaa9eb4fd2964"],["/categories/tools/index.html","fc7f0449fec9b763d066f66747d8f9f2"],["/categories/奇怪的知识点/index.html","da85cc377891a35fb05b186381f1ada9"],["/contact/index.html","f030e81157d2e2b9e2c20c3042e81b62"],["/css/index.css","f729d0aff09703a4da73c660b7acbbfb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/veditor.css","eb2128928ad15904d36e368fdb00ff87"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","1a78e0a1cff514fae5aaa31a4ed3cfbb"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","7577bae28fa1463330df94ce5bc786a4"],["/js/calendar.js","9dae07e03db11437110f4529071cdae1"],["/js/crash_cheat.js","9e48b57cc02c1eeaf8bf3632e891ce8d"],["/js/languages.js","09753f588fdaae0985d91e181f3a940b"],["/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/js/veditor.js","1f5efcf664672c4a265ae7037d75e8be"],["/link/index.html","5f357e98b971fb9040bcb7fbc673ba51"],["/movies/index.html","8f101243dbe14468896e47d98771a7e8"],["/music/index.html","34220b8ce089ce75db64156079f450e6"],["/navi/about/index.html","23e5db7c808edb60e3c139a77f06d27e"],["/navi/blog.ansheng.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/re.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/urllib.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/index.html","173d362807e679df6fb42a4529953c2b"],["/navi/sm.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/ww2.mathworks.cn/help/matlab/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.chuyu.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.dotcpp.com/oj/contest.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.php.net/manual/zh/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.r-project.org/other-docs.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/p/12130977/index.html","a5e6e193eb64abb92192fdfdf01341dd"],["/p/12223247/index.html","50435bdafda93a82a78c4d0ce7152531"],["/p/1b825486/index.html","2b6eaff335c7892ca8a51c74ba69fac0"],["/p/1f7c743b/index.html","1592a37e33cdb02e9e990c3c0d100e87"],["/p/22d30f17/index.html","ac3331ac20624222601658a75cddee41"],["/p/2399c152/index.html","177baf4ae9c2c69b7b57530c616fa88e"],["/p/2651b0bd/index.html","fa6545bbff58f00b622d31034a32bdc4"],["/p/292fbf59/index.html","5fe6a1d30b07d3bafd014bdf3e83340e"],["/p/2c54d1ec/index.html","5dec25c53a868a1f21b9117d4efea62f"],["/p/2d27b747/index.html","079cef63a5a77bddf6a8f5b627caf718"],["/p/31397f6f/index.html","d5775016a936962e1ce73c520ac75281"],["/p/328665dd/index.html","237aada340fccb1147cb09ebb591c9dc"],["/p/32e6fc54/index.html","5fd3ab044a35bd6b7ac14c30bcc1c202"],["/p/339c428/index.html","23a7ebfe4248d98de8d9c1d1ac7d4503"],["/p/36a8252d/index.html","5d1cae8087bd11cf4a8948d0cfbf2e2d"],["/p/37369/index.html","cbf284ef4c4041d7511e6374c71aeb89"],["/p/38510659/index.html","663f5726adcdeb9e9f1a4089d4982697"],["/p/3d65889c/index.html","191c3b218d0d8f6fec54f8e9175c4e1c"],["/p/492994d9/index.html","fb8ef6d388158159994d56389696d016"],["/p/4b638dc2/index.html","e6359fcf58a46e4e840c4e3888eafb0a"],["/p/57aae221/index.html","c25ad3538909a15f1a4d199d5201bdfd"],["/p/5851b21/index.html","81931ea1e60165bc818dd63a2a1badc5"],["/p/59ce9c6a/index.html","bfcdd489b39d4bb5351f5337c36efd98"],["/p/5e94d2a7/index.html","4281963eb38b689c1836e7751301b232"],["/p/65008a24/index.html","cb48948d68da0108386276e07919bb95"],["/p/69df4022/index.html","fa394917c943c806b96c07cc85cc1204"],["/p/6b915d25/index.html","4f05bba0ecfdc120033951c3bb0d8d8b"],["/p/6ea05e36/index.html","e2f06c14b61a2e75debeea9740482fa8"],["/p/761d0096/index.html","d650dc84245e6c5be745964db950cfcb"],["/p/7fa69db0/index.html","312093f5192e99151ba91067ed8c1c9d"],["/p/8422e92e/index.html","9c3446ee2bd0cc0593fc555eb9c6dd73"],["/p/8a11f10a/index.html","7a8b7509e8304d0eb3449b599bac3392"],["/p/8b346831/index.html","1edf7e72ae7b5f040a46ae8cb03b90ab"],["/p/8cad5570/index.html","9aad15d8ab09d9d7b10fe515ced88538"],["/p/8eb47741/index.html","756afd7627e20ca208af34df9b8471e9"],["/p/a564d3b/index.html","2816b85b13403a3a659ce4d70651576c"],["/p/b0225828/index.html","dc9e671b8983966c8276de777142408d"],["/p/ba1e0fab/index.html","aa5efeb297f38f80ac7a4d15ca91470c"],["/p/bb2a8a2e/index.html","86bff4156704cbb1f1bd69ba4e9ea7ac"],["/p/c2e90d73/index.html","a8a4667b79ed30493940627983e87611"],["/p/c4492888/index.html","de1ea3b9dadba34e931268685fbdda8f"],["/p/cb1e6c4f/index.html","6847b2b347580f082fec0eda87adad4c"],["/p/cc5f8722/index.html","274ff4e2494ea341f1d0bbc178376d63"],["/p/d47d8d30/index.html","9031c08ba5b9f6713f3910cebedbb0ce"],["/p/d64778f7/index.html","2d59d34827c253b72cd2a40abd9df79c"],["/p/d881e309/index.html","484f6c69ab0e3a37dd80b76531abd401"],["/p/d9a940f3/index.html","f4e89a6fbd658a9cab2701c7d0dcc791"],["/p/eee93e1e/index.html","f6ecccf5aef5c6f0a62fbae1d61a0c87"],["/p/f700fae8/index.html","8783c3b5e48bae6cf1a0353b50d2962b"],["/p/ffb5990d/index.html","cd84d08f20c4e944c994174497dc09e7"],["/p/fffbf386/index.html","7f75794f6f94fa4093bc3c8459352f49"],["/page/2/index.html","4b31c33b9e2b599b8fe4bd34c05e8737"],["/page/3/index.html","984211ed12916f8858d437e68c3321d4"],["/page/4/index.html","7801c757c0d7d31c17c4f2e326858526"],["/page/5/index.html","323586dcf912eaff064df88ffb072431"],["/page/6/index.html","a03127188dcfe80711e10f89de6c6a3d"],["/tags/CDN/index.html","06b2e18c99200bd8faa49019ab33d78e"],["/tags/Github/index.html","c5873cf3643df6b3e35b107cb50220d4"],["/tags/Gitlab/index.html","5868b577245ab036a3ec22ec94772ca3"],["/tags/HTTrack/index.html","9c67e1880cc064bc69e79f4819a4a7d4"],["/tags/Jenkins/index.html","cfde16271bf53e7470fc77784650c388"],["/tags/Kubernetes/index.html","c5b22d8ef35f1806ba8a76de9a5fb62a"],["/tags/Netgear网件/index.html","4982cf9bd4689f086e928aa9951f9afb"],["/tags/OpenSSh/index.html","459a728bfd5aeda9df430a9095e793b2"],["/tags/R7000/index.html","b7d271a5ccd410eb3c9684449f3ba85d"],["/tags/TZ/index.html","b44ab8d3bd1a0958e9721c7050c012ee"],["/tags/abbrlink/index.html","81b58ea5dcdc6ffd6b010cd4ee4fa612"],["/tags/aplayer/index.html","1d6e282adc5d25d8cec35daaacffe870"],["/tags/authenticator/index.html","2f652f42776df002c7c3565381cee01a"],["/tags/awk/index.html","93f53194ea2f252e2b41e86c41f3a715"],["/tags/bilibili/index.html","325ce21fbf66f3717dd8c2eb8821b462"],["/tags/butterfly/index.html","d8d5d34a49f2c084d3ecab8d9f9b9a84"],["/tags/docker/index.html","6c51c489b33f60ba6f484848255d09f7"],["/tags/douban/index.html","3de513fc52c921e9bf8b0f72cf06f5c1"],["/tags/expires/index.html","1e6950903b5438b6d838bef311ce1cd6"],["/tags/google/index.html","76e4558a5dec9a4a464f65fff388e0e5"],["/tags/hexo/index.html","4adcd5dd76a27973a7b70e976f66ac1b"],["/tags/hexo/page/2/index.html","5ad4aa3bb8082264ab0902f7708a70f3"],["/tags/https/index.html","692b6cfae77ac70d52a8591a13eda8be"],["/tags/index.html","032b554d0b014a1c59364f8bf7d98ebd"],["/tags/jsDelivr/index.html","fafd89090ab1e44023de1a03b8ba6b25"],["/tags/link/index.html","cc3b80e731a570faec869fae7af16a76"],["/tags/linux/index.html","e38d8b2b63e55bbdf0f61a8f0eddc873"],["/tags/location/index.html","accd6c76fc28979a354fc551a1a9a143"],["/tags/mycat/index.html","69d1945741c137d10afb61455f26d9c8"],["/tags/mysql/index.html","ed278cf7eec15da62a62376143c1bfe6"],["/tags/nginx/index.html","8a186e40c334897226a2ab194c2c28a7"],["/tags/nodeAffinity/index.html","9eceb48ffc15bec0712f1f706f8dead3"],["/tags/nodeName/index.html","760b0b6e7bff475a291c11a3d3eb7427"],["/tags/nodeSelector/index.html","622374021da4d012090a7287ac3d5080"],["/tags/nslookup/index.html","5cd178595fee3e3a1529f06aa018a8b4"],["/tags/oh-my-zsh/index.html","3af4dbc78361ff64e0415720611f89ad"],["/tags/podAffinity/index.html","c8982b695f1a1956b92f0bd08c79cdf0"],["/tags/podAntiAffinity/index.html","9cd5f785c1da32c4304e4c1cf2c5cd91"],["/tags/proxy-pass/index.html","d547d084149b22367312df6c0b5d3bf2"],["/tags/python/index.html","c0f8b1401dbcdd15b1da30fe4fbfd172"],["/tags/qiniu/index.html","5eb658b05a440d635754c010ed54abb1"],["/tags/rewrite/index.html","218cefdafe1ae3d8d39e63119506ef53"],["/tags/sed/index.html","342d1d14ae63d69aaea6813a376c0f04"],["/tags/shell/index.html","7607f28d9a6fd04621814e03e083e6d3"],["/tags/valine/index.html","8293ced8dc07937b5d8379bcdb0f9c25"],["/tags/返回码/index.html","282a023bdd67e2eba2120c09d8836ab8"],["/tags/重定向/index.html","f00d2b66539ada7e155947d978540440"]];
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




