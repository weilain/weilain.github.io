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

var precacheConfig = [["/404.html","cf8efbd0f98141822a08dd0cd7be0e16"],["/archives/2018/10/index.html","71b0d9381ee608444e208ad4b5b4eae7"],["/archives/2018/12/index.html","a832a502626e4b7712db30497afc2256"],["/archives/2018/index.html","9eb302b3782f7e4239ef89231837fe4f"],["/archives/2019/05/index.html","2a2d5d4d538ffe38b0dc22b230ac9cd3"],["/archives/2019/07/index.html","49ff290270e5c750a251795e7828df1c"],["/archives/2019/index.html","1f594555497f1e8c983664789c1d5103"],["/archives/2020/07/index.html","cf8ad58ae3c5978a22899836414af303"],["/archives/2020/07/page/2/index.html","546f377ca78bbf8f192b0dc15dc8d959"],["/archives/2020/08/index.html","2682b57a8847ad8855161e7ea61bcb02"],["/archives/2020/08/page/2/index.html","f1e0f34eff8929dfddea536ec241dde2"],["/archives/2020/09/index.html","0b0db839cbc5fd90112fd31b91d9376b"],["/archives/2020/10/index.html","7d8f92963607acd3919cfb7b7d7904e1"],["/archives/2020/11/index.html","e340a6faacb70a92447380e15a224cc6"],["/archives/2020/index.html","ec5d30ec6989340be017fbcef2d29245"],["/archives/2020/page/2/index.html","f8792c0dbb808d74b77c36eaf6b79563"],["/archives/2020/page/3/index.html","64bbdb9447e3791fc1297bbf33e59a5b"],["/archives/2020/page/4/index.html","cc82be47f520f13318f6be5c466cf2a8"],["/archives/2021/01/index.html","79a7badba5969f3755fb1fcf78675443"],["/archives/2021/index.html","9cdc24fb81cc5b0e74845ec2357388a0"],["/archives/index.html","1ad71aba692bd49b802f9ad1ae500a9f"],["/archives/page/2/index.html","d6b2523db058a6b400abf688dc95438c"],["/archives/page/3/index.html","bfebd5ce443e74f398af9b272fec1fbc"],["/archives/page/4/index.html","8cf0dd11bc3d7b9d1fdfc2e82136fd3f"],["/archives/page/5/index.html","9858849387124db57e8adc8d41e9cf61"],["/bangumis/index.html","92918222d35890449525e222de2aa26e"],["/books/index.html","25c2d5d073dd201fff528336a55b3c37"],["/categories/Github/index.html","4fc3ec9911ace629d528d72e793f0af1"],["/categories/Gitlab/index.html","5b21c9a4d60df5de90742e74638a812a"],["/categories/Kubernetes/index.html","c73108100e8ebd3666eb8b9a166ca591"],["/categories/Mysql/index.html","e8667ad18145d0e8ddda930ca9657be4"],["/categories/Nginx/Jenkins/index.html","9e2a1f267f223b85706c92dc388365ad"],["/categories/Nginx/index.html","2b44781c8a19f29f0d23c19c853bfb85"],["/categories/Nginx/linux/index.html","d24fe05b4df85895885ef2417d2aff68"],["/categories/OpenSSH/index.html","c7b40fc76a6b955e1609f9ffa6dc7c97"],["/categories/hexo/index.html","9d36489cb39c02dd904e079393be301b"],["/categories/hexo/page/2/index.html","6e4e53ba30d0fbc09de723d46a5ec8d2"],["/categories/index.html","ddd275fd8d30dcf7801b24fee2f22803"],["/categories/link/index.html","28520cd2136eafd672ce11c220952569"],["/categories/linux/index.html","984e3b55f7672847f466cc6b03beb1e9"],["/categories/oh-my-zsh/index.html","a9546047613915f3d8f58c683e2c4d37"],["/categories/python/index.html","86d18c86207cd50b02573f47a9fdad04"],["/categories/script/index.html","ba153ccaef129ef7fa2a46df892a5e1a"],["/categories/tools/index.html","6f3cc6edf8466827fc73d1286fa328dc"],["/categories/奇怪的知识点/index.html","c9fe90551277d8b4959ab1804311803e"],["/contact/index.html","05cf8b6de91bc451f4824036ad7690a7"],["/css/index.css","82fe22eac66086e62151a830fa2b7466"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/veditor.css","dfdd72cff082165c84adf3583d2d978b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","5bc2191d80f9b5d92766beb2ed87e431"],["/img/favicon.png","1a78e0a1cff514fae5aaa31a4ed3cfbb"],["/img/favicon1.png","297d399a510bda5d296e41b053b5784a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","a6ab7cebf9892ed93a12925ace93ea05"],["/js/calendar.js","b29f482b4d7a669c51e7615993c544dc"],["/js/crash_cheat.js","4979c32f5c6c3ed5b491580fd75c63f1"],["/js/languages.js","13f02f1612f2a9c6bf4932ece42bbfe0"],["/js/main.js","790cd2f28594f8affbd4a450037c48ff"],["/js/sakura.js","ff54797f9e6a6ce1f165f1178bdfb226"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tianqi.js","5137afba502932bfe3ec73070a6e2c1e"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/js/veditor.js","fd03de0311ebd3c5c7c3e4f7f1b8d5bc"],["/link/index.html","be631bf9d3515720f757ba3dab791463"],["/movies/index.html","fcc3ade0b43175cb50f8769acadcc623"],["/music/index.html","d235f9f96b52c455d5dbdbd0f3d4549b"],["/navi/about/index.html","a1d68115eba590b5c6256b3c874e5e21"],["/navi/blog.ansheng.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/re.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/urllib.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/index.html","9957a883e436bcf8ab1d5b7f0afd10dc"],["/navi/sm.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/ww2.mathworks.cn/help/matlab/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.chuyu.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.dotcpp.com/oj/contest.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.php.net/manual/zh/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.r-project.org/other-docs.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/p/12130977/index.html","2f0e5ddc9b9fd67684c1c704463addb9"],["/p/12223247/index.html","ef031c01c889efda41dff22bd0852969"],["/p/1b825486/index.html","aa18bc430254d637455d1b523811ff8f"],["/p/1f7c743b/index.html","2f281b3d1ea2ade03805b7e1b8f874a9"],["/p/22d30f17/index.html","2dd5c92cd85efce51335c8eb19c804c5"],["/p/2651b0bd/index.html","1b3a1f81bc1bd2ab0e0a72b97760f1e3"],["/p/292fbf59/index.html","cae595990d452aedf684cf4c6966bbc2"],["/p/2c54d1ec/index.html","ba7d1e05db95e2f88ab1256323e950d0"],["/p/31397f6f/index.html","a501636c34fa1064920d7ac116f851f7"],["/p/328665dd/index.html","4a173d76475d3847b76cc0deb49e6f27"],["/p/32e6fc54/index.html","38404208ef38e93ac230f98e610f4013"],["/p/36a8252d/index.html","f05fcb8dd0adb406534de5c52093d9bd"],["/p/37369/index.html","570c4629553ab18dc95f77f714c73905"],["/p/3d65889c/index.html","13d9509ac1a74c3d8de788e5adaa4743"],["/p/492994d9/index.html","24500a6604eb8c9d7d0e35a078be2cce"],["/p/4b638dc2/index.html","bd75d924443a405dad5bc5a1963d4721"],["/p/5851b21/index.html","a6d38882746dcf4921d80022749a1e9f"],["/p/59ce9c6a/index.html","ddf0773f453e2429e97d277cb47af20c"],["/p/5e94d2a7/index.html","7ae0c79ed04b9388ea9f4aa7f81c96d6"],["/p/65008a24/index.html","9976fd52500e9643dafb6f54f3675fbf"],["/p/69df4022/index.html","3eab67486daf8043fba0acc50cddbb92"],["/p/6b915d25/index.html","c6636c13e21c8bd97470b4e47ee043cf"],["/p/6ea05e36/index.html","ab16f8ee74d6b49a70f3d25f0ea2551c"],["/p/761d0096/index.html","80510d3a4d798761f91197f9583b105a"],["/p/7fa69db0/index.html","c5cb7c7e1d1cc7ae2a9e04fbcb0f3d99"],["/p/8422e92e/index.html","4cdbb154112da6adbf1340aa77ff2630"],["/p/8a11f10a/index.html","299cd0733456c96cdab9aceaec1a58ac"],["/p/8b346831/index.html","99810fada6e93197157c6cb584983d63"],["/p/8cad5570/index.html","c76a72d93b6e2869bc48ba99cce018b2"],["/p/8eb47741/index.html","3730c1f88211619cfcc27491423e2133"],["/p/a564d3b/index.html","36f5d79166de1de67c1a83beaed3386c"],["/p/b0225828/index.html","04dc9963ba8ffe0111c6bb1571f053f5"],["/p/ba1e0fab/index.html","252b761be5d817aadaf34dce37d86c11"],["/p/bb2a8a2e/index.html","90ef7126f631c410322df4d0a61fbb14"],["/p/c2e90d73/index.html","99d472f46431a081aee5488a61f8ede9"],["/p/c4492888/index.html","c84731fa3670a0d8510256b1f8ad0a11"],["/p/cb1e6c4f/index.html","cbecb1e65d4441c999a5c1900ca2168b"],["/p/cc5f8722/index.html","d682a24bb9d34c2e7310f7e1b0e3a45b"],["/p/d64778f7/index.html","d11344d8de2b9d0e81e305b1ddf4f443"],["/p/d881e309/index.html","9e107edbc9ad9ba8b4f2483f61999a60"],["/p/d9a940f3/index.html","52a14e6d9330dd1c0d2fe21c0f5e980e"],["/p/eee93e1e/index.html","fd09ff798f02da6cf7f75500fb51653c"],["/p/f700fae8/index.html","5989d3b7ab03cb9508067d4bd59775ce"],["/p/ffb5990d/index.html","358f89130eaa6d75b14b020fe66b1975"],["/p/fffbf386/index.html","a1e3cfbc93e3cbfcbceca61786aacbaf"],["/page/2/index.html","3e9657a899721c307526306df6de18b1"],["/page/3/index.html","1e24759ec137db15dcc1b820dee102cf"],["/page/4/index.html","747fd6b4244a0b51530fd840f95ee3fc"],["/page/5/index.html","e6a6a0c06317915c12b93d1d21061449"],["/tags/CDN/index.html","69b0af470c0f24241bdcfbe851b2f54b"],["/tags/Github/index.html","259bccfacc6a935338b1d68d02e9aa47"],["/tags/Gitlab/index.html","470f7d3ea06d930ca91963fd47f87da5"],["/tags/HTTrack/index.html","d0048b9b8661d74e8300cb8752bcf508"],["/tags/Jenkins/index.html","36a6004e1c5c02e59ff88d4e059e233a"],["/tags/Kubernetes/index.html","5ddc7adcf0cc868b0328bb94a57fd312"],["/tags/Netgear网件/index.html","05873de81c91ebbe6d477d9e4e03cc76"],["/tags/OpenSSh/index.html","035e0582c66641c66c8274048dc4c735"],["/tags/R7000/index.html","4ec98a730b8ab15e4cdb68c9bfa212f4"],["/tags/abbrlink/index.html","9f8decdcd06934d2e3ce005b7b7b01a8"],["/tags/aplayer/index.html","858a5b6e39958f9aae16891eedf939c6"],["/tags/authenticator/index.html","36dddf98c1b824a0be599d0e7352b056"],["/tags/awk/index.html","fe9b560048b6c555bf6d82aa8b087f9a"],["/tags/bilibili/index.html","49e4d1c29b69fd53b0b8fdbb4bbe2353"],["/tags/butterfly/index.html","e813956b7771c1776b9ca3b349193833"],["/tags/docker/index.html","01c12789cdc615d73d95915a912f3104"],["/tags/douban/index.html","52d953dc2db108b6f7888507b183ad92"],["/tags/expires/index.html","592b14dd1d49a6571d45d230c88248ea"],["/tags/google/index.html","6ecd3cc882cde8bfcd00aef60fe5b2f3"],["/tags/hexo/index.html","afc4bb0bfd11be4014ab2bc3733f6898"],["/tags/hexo/page/2/index.html","79458968235806ce68473bdb66a82937"],["/tags/https/index.html","b62a8c8a346aaa6ec733c64999b8590d"],["/tags/index.html","f9ce106a7fc829ac08a0b05e4481ace5"],["/tags/jsDelivr/index.html","a2bb2f04a95970eec8b7a50c6d426109"],["/tags/link/index.html","d6e6c650d9857e8cfeab651d842d43cd"],["/tags/linux/index.html","5a3aa59f0ef2847c7804387a439aa52f"],["/tags/location/index.html","a99d9835d2d1ea9aeaebb9dead1a68c0"],["/tags/mycat/index.html","e8a428b1c8ee9d0e4977ce2fafbc0a94"],["/tags/mysql/index.html","c6023e3c4db43ce7b9af83c9de1acd33"],["/tags/nginx/index.html","161ab9daef3a2d2835db3561fb4bea1c"],["/tags/nodeAffinity/index.html","59722e122bbb00f402d569bb28809f81"],["/tags/nodeName/index.html","eb58ca7e6abd75ee487588952a40966d"],["/tags/nodeSelector/index.html","b535345fa41e92fa148cae48b2470a0d"],["/tags/nslookup/index.html","a6e26610b6f680da69ba861f67aff68e"],["/tags/oh-my-zsh/index.html","c809def8beb783a717092c226c881474"],["/tags/podAffinity/index.html","2ce80297f64b4e7ce0c34772a767022d"],["/tags/podAntiAffinity/index.html","5600f76fcbe5bcf648f3ce271907911b"],["/tags/proxy-pass/index.html","6a4ab2f9072c526fdf479008a735a4a0"],["/tags/python/index.html","62423c852aa333968973812da34567b9"],["/tags/qiniu/index.html","c7527ac313724b1eb093744300f1d056"],["/tags/rewrite/index.html","18dee20862e217ef24b30072d70fdf44"],["/tags/sed/index.html","cbc281be47e0ddbdad7ab3a1c35957ba"],["/tags/shell/index.html","dee59961465e08ec833af1c921537e42"],["/tags/valine/index.html","7b90fdd0b2344ec3f1abced0739521f3"],["/tags/返回码/index.html","40d5e601bfc1dc9626411b5d26db6b44"],["/tags/重定向/index.html","34da5ccc291b05beac90b3a6bd5a2b8a"]];
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




