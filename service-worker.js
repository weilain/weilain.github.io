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

var precacheConfig = [["/404.html","e27fdfc9123c9bd17b2e3d24cef5722c"],["/archives/2018/10/index.html","6483a6ee7fa0c9fbe7ad1deeb2914ec5"],["/archives/2018/12/index.html","64918129bd39678893aebe9a691167ab"],["/archives/2018/index.html","174805a51b0dcc9785db217827dac10f"],["/archives/2019/05/index.html","a24dd8c38cdbe3bc789ae729836fdc75"],["/archives/2019/07/index.html","7e74f00d589df90bb2157bc0a4aeab4e"],["/archives/2019/index.html","d3fedd4eca4e6642c7b1183c50cd87af"],["/archives/2020/07/index.html","2e2f28b634106cacaf5b86949b8e816e"],["/archives/2020/07/page/2/index.html","b7949828ce7c5205cd40fcfd38825b37"],["/archives/2020/08/index.html","fd63e72c88f92a2b8d460e210ba0cd61"],["/archives/2020/08/page/2/index.html","709da708a701cb449bb1349816631385"],["/archives/2020/09/index.html","ce3df83a9db65f1430fdac73f7771465"],["/archives/2020/10/index.html","d350cfc6cd3c9ee00878fd882eafdd08"],["/archives/2020/11/index.html","c3ee9161afb72a43936432960aa58c97"],["/archives/2020/index.html","db490c45c4c9d3c3177891e26d2da377"],["/archives/2020/page/2/index.html","ffec080ec74bc72619c11b27aea05290"],["/archives/2020/page/3/index.html","7e873c87f8566a40b363e38d7d1a69eb"],["/archives/2020/page/4/index.html","4db95d1e9a2252a42006cf754bfbfdbe"],["/archives/2021/01/index.html","bd1b86c30620364e9b10434b2bd637b9"],["/archives/2021/index.html","2e459851dbf7a4414ca26e0e48c44001"],["/archives/index.html","3db30e4aa3517c4689d88cc8710c79b8"],["/archives/page/2/index.html","03b367a0b9d3585a0c5f56bc698fd49c"],["/archives/page/3/index.html","98e811509d80ba5727aa923f066d54ae"],["/archives/page/4/index.html","8af93b45c02dd10b6084540cc1a6856f"],["/archives/page/5/index.html","2b5a523c227c7eea81b342a258be8e46"],["/bangumis/index.html","b727a13b664432d6e97c8645e2b1a2ed"],["/books/index.html","7602088e6836351a675505f18d341e78"],["/categories/Github/index.html","8897e6453636de135fc4a6f5c4acf0a7"],["/categories/Gitlab/index.html","5d50fcc899bc72ac0930261843aa7fbf"],["/categories/Kubernetes/index.html","d6f0fb3829adbf520ba04c44cb81b0f4"],["/categories/Mysql/index.html","72b943992be7d84e6ea3f0389ae92ed4"],["/categories/Nginx/Jenkins/index.html","cd3e9a0dd1127f2dad101f47f2b45c6a"],["/categories/Nginx/index.html","1be4e6bd4739133be46fe035ebfc8a58"],["/categories/Nginx/linux/index.html","a02f49d56501c9fa6dbb385cd0c44f48"],["/categories/OpenSSH/index.html","8fc925d6e4dcae273caf1f6e96b78099"],["/categories/hexo/index.html","4ccb15c401658594443b31b07a5c625f"],["/categories/hexo/page/2/index.html","15591de8742292ab818283dccc345c52"],["/categories/index.html","b4ddad419c520833c98c0533b20f3dcf"],["/categories/link/index.html","348a318affe4e0eff6e32af27f89a72b"],["/categories/linux/index.html","e62acefba2a8798bd832eeb599f614d7"],["/categories/oh-my-zsh/index.html","909c64a7b7661caece1deb0823c1aaf9"],["/categories/python/index.html","ead11a12a1fd2c4630b3a4e92c11cdf9"],["/categories/script/index.html","e1ecb68737da4f3dbce235a78ffd785d"],["/categories/tools/index.html","655fd2e0f225aecd8846bbbb29d4cdd8"],["/categories/奇怪的知识点/index.html","25ef165dbc2cb106b90de503b12fc705"],["/contact/index.html","bb55c1465c425531188bf94b77b0b8d7"],["/css/index.css","82fe22eac66086e62151a830fa2b7466"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/veditor.css","dfdd72cff082165c84adf3583d2d978b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","5bc2191d80f9b5d92766beb2ed87e431"],["/img/favicon.png","1a78e0a1cff514fae5aaa31a4ed3cfbb"],["/img/favicon1.png","297d399a510bda5d296e41b053b5784a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","5155b07732b969de9df3c9867b5e75b3"],["/js/calendar.js","b29f482b4d7a669c51e7615993c544dc"],["/js/crash_cheat.js","4979c32f5c6c3ed5b491580fd75c63f1"],["/js/languages.js","13f02f1612f2a9c6bf4932ece42bbfe0"],["/js/main.js","790cd2f28594f8affbd4a450037c48ff"],["/js/sakura.js","ff54797f9e6a6ce1f165f1178bdfb226"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tianqi.js","5137afba502932bfe3ec73070a6e2c1e"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/js/veditor.js","fd03de0311ebd3c5c7c3e4f7f1b8d5bc"],["/link/index.html","906266f91b47391368135f555a427363"],["/movies/index.html","98c3ca695d7e767363ca007c58b4cf66"],["/music/index.html","c6a0a04f5ff6cb08c29c30b1a5780cab"],["/navi/about/index.html","23e5db7c808edb60e3c139a77f06d27e"],["/navi/blog.ansheng.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/re.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/urllib.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/index.html","173d362807e679df6fb42a4529953c2b"],["/navi/sm.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/ww2.mathworks.cn/help/matlab/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.chuyu.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.dotcpp.com/oj/contest.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.php.net/manual/zh/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.r-project.org/other-docs.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/p/12130977/index.html","bc48d99a9feaed5c0c843a28f6f5940c"],["/p/12223247/index.html","0d5b7508390bd228a0371cbed903c29c"],["/p/1b825486/index.html","d21c99d6366a13f89184624fee63bc24"],["/p/1f7c743b/index.html","401fcfc9807efd4357aefe4aa3d27b74"],["/p/22d30f17/index.html","2accf484d1ca800d8429855f7b51f4f7"],["/p/2399c152/index.html","1acc538423a9f30828df8287435cc829"],["/p/2651b0bd/index.html","b0d0bbc831985bba897dadf294f56ac1"],["/p/292fbf59/index.html","5a9a84d1e4af9f6648b4ad1094cfcb82"],["/p/2c54d1ec/index.html","7fc4237ee7429afb172b94671fd800d0"],["/p/2d27b747/index.html","079581b644f8646505186b12b42d40e4"],["/p/31397f6f/index.html","70d8f48c65daa1caf660975d70cb864a"],["/p/328665dd/index.html","b607cf9e3b6e7a9f12d939a9da2ee69b"],["/p/32e6fc54/index.html","26222d6b80b59565a6acaff05a25bff9"],["/p/36a8252d/index.html","73b23d3c82e958b4ae273e66c63205ee"],["/p/37369/index.html","75ea31257de8a1c7b02fd67a5015c153"],["/p/38510659/index.html","28ee0dbd80b3814b49a4820c81dd0f56"],["/p/3d65889c/index.html","9d024dbcf32605ad697f5916953cce29"],["/p/492994d9/index.html","6f5be0b7c28c0ff33527d66249ecc2ad"],["/p/4b638dc2/index.html","2f4539f0b50c1b975f28027a6ca3b718"],["/p/57aae221/index.html","946e2ad7d79a4117bd59d1d2ec9ff366"],["/p/5851b21/index.html","d760767630e5dea45c3e9aca897829f8"],["/p/59ce9c6a/index.html","5c79f17fb7c081155b58e6f9c62046e7"],["/p/5e94d2a7/index.html","41c6aa5756d1bd1659249a1e90546fb3"],["/p/65008a24/index.html","162f0ffa56c87ecd72bb0f8e322b5558"],["/p/69df4022/index.html","f3f2d8903bfcc4ed990ca1523514a8cb"],["/p/6b915d25/index.html","0853b72897f440ba035c6cad47ebdb71"],["/p/6ea05e36/index.html","3d1a568d8f67c4c32ea07f74d2938209"],["/p/761d0096/index.html","443644081b8de070f6bad7aebef4d201"],["/p/7fa69db0/index.html","721dbf2e1e9fc5d7ebe0e0bc73bdd317"],["/p/8422e92e/index.html","0bf4608fe1ae69a43f16a147f6f2e743"],["/p/8a11f10a/index.html","5b47c35ba92419c3e4eea3a19a9569c1"],["/p/8b346831/index.html","2caf83dbec1cfbf888ade52038845338"],["/p/8cad5570/index.html","d3c8b88c91a4479c39f1fc300c4bdfd1"],["/p/8eb47741/index.html","d0ce239abd2d065a62802cc9e22ca27c"],["/p/a564d3b/index.html","c0adc85aee9a3aced7c522f3c3f9410d"],["/p/b0225828/index.html","51a630207ca675d0bfbf770452429c3c"],["/p/ba1e0fab/index.html","129118d59f1ef36cec0b2cd1316ff0b3"],["/p/bb2a8a2e/index.html","c80a11c0c9288ca9c59a247f7b37ca89"],["/p/c2e90d73/index.html","0d70b3340025622a104a273c5b01fffe"],["/p/c4492888/index.html","8deaba84819d1a13063502576126405f"],["/p/cb1e6c4f/index.html","89f27dc0731c53f1bb55cda56137b82f"],["/p/cc5f8722/index.html","e8989f802104dcb91598134977abea55"],["/p/d47d8d30/index.html","e21f80e8d33c4034afb6d8d438b43380"],["/p/d64778f7/index.html","8bea0bc61fddc2821970940a77e73cca"],["/p/d881e309/index.html","85ad8ea4309b9af149c1f5f30c3d541b"],["/p/d9a940f3/index.html","79d76daa7716fb46ac82c7bbe96d3785"],["/p/eee93e1e/index.html","adc34b75752aa9d64358a96b32e58779"],["/p/f700fae8/index.html","779092e0f4ab6635baacb6cdc1121da9"],["/p/ffb5990d/index.html","104d617ce79002c332f35433a2c75608"],["/p/fffbf386/index.html","23740b1eb0249caaf78035a6d8986e70"],["/page/2/index.html","028bdf9b50d01bbe23ed1dbbf443ce03"],["/page/3/index.html","a564845b0c0ce436fa9280b3f150b8f7"],["/page/4/index.html","048390fcbe4186be5078648b80df4035"],["/page/5/index.html","47fb00dda46b1686c8f8b94cfc598be8"],["/tags/CDN/index.html","9436f2a6bef38babaec344de128c5dac"],["/tags/Github/index.html","9cea54e1c21125c598f1e0b7f31dbd72"],["/tags/Gitlab/index.html","862febae1b308e5160d9bd8700e43b45"],["/tags/HTTrack/index.html","525880fb78f8b46ac6769784d1e60b49"],["/tags/Jenkins/index.html","56f7e70566b904485503058f83ae1a67"],["/tags/Kubernetes/index.html","229c5677176b2661d09b1b8629a4f06a"],["/tags/Netgear网件/index.html","2db84d849f954f5b3859d13e93c4aeae"],["/tags/OpenSSh/index.html","67fe9cd7239fcbb17d9bf464ed7ca169"],["/tags/R7000/index.html","fab1e28f4e3d375f0c9e596a2688ec81"],["/tags/abbrlink/index.html","f18b18b19af1827352ac6e7b0b04a3ee"],["/tags/aplayer/index.html","a204b0a62a79a06f40f735063566c9a6"],["/tags/authenticator/index.html","e9b391f44fe67505d70f2f7706260839"],["/tags/awk/index.html","a3968b19de24e89a3eada2b2f0a6e452"],["/tags/bilibili/index.html","428651dbf16259f1aff8904a8f2cb577"],["/tags/butterfly/index.html","8eb9a3c76b62c8eb0d80bfbee4f00f5b"],["/tags/docker/index.html","ed25a3bf37fa4efa48ec611a2299c2a8"],["/tags/douban/index.html","0151bb730f89eedcea7836d5662d1f24"],["/tags/expires/index.html","bb3e461c297ce11150a93619dfe32047"],["/tags/google/index.html","a57ea4a2f1293f9763a2d6aad12428ba"],["/tags/hexo/index.html","6a93cff52c4b495c5d7e1259ef4d23de"],["/tags/hexo/page/2/index.html","8fd4c65f4627fd42e4047acd48872e45"],["/tags/https/index.html","8ec011c4c7aeb06ce9c162807547e1dd"],["/tags/index.html","07363468de723f46502993d0c53a6f09"],["/tags/jsDelivr/index.html","216cd286c435babfe655e9d7b6ad7aab"],["/tags/link/index.html","4343f20f7fa2e598cfd2a5116aaa63e3"],["/tags/linux/index.html","021de452a3b8f79e4549d0d486291e54"],["/tags/location/index.html","8729c6d0dce829b0ff46f9e47238befb"],["/tags/mycat/index.html","42d5a752fb90332f07ab423783437e49"],["/tags/mysql/index.html","512767cf0871f3320a4a7e6cba44815d"],["/tags/nginx/index.html","18040cc8c28d7d08685937850a9d7fcb"],["/tags/nodeAffinity/index.html","bcff16a430f38926485a2ab0b2a6b0ce"],["/tags/nodeName/index.html","0ca8a22e398487efb338b32c6ace22cc"],["/tags/nodeSelector/index.html","51c1467fa7321decdf5e431f06848b2e"],["/tags/nslookup/index.html","d6e8768ddbef12f2dccef580e57b63a6"],["/tags/oh-my-zsh/index.html","7017ded027942e3e33d361da44a9e8b9"],["/tags/podAffinity/index.html","81f53a9940e5cf4699bef520762141dd"],["/tags/podAntiAffinity/index.html","d6f8fcac91b9519afb46c138f5d05527"],["/tags/proxy-pass/index.html","f4e14d196354036bcc8fd89636830f9e"],["/tags/python/index.html","25f600c02a6c9c3fc790ef1d7aea9411"],["/tags/qiniu/index.html","bd32946507e26a248fcd5771fab66afc"],["/tags/rewrite/index.html","e650aa07edf42f9c9bd0493a65119615"],["/tags/sed/index.html","7bd52272883784e12583667f48981664"],["/tags/shell/index.html","3cffbddbcd57299b0f4a9ed0854f096e"],["/tags/valine/index.html","06e14b8b1235ec3494244e858b4bb234"],["/tags/返回码/index.html","c5ea236d714b255e63e3ed990b8ce627"],["/tags/重定向/index.html","cc09e01bb31d61b4ce3be96edde1be0b"]];
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




