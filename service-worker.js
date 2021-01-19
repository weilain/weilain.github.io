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

var precacheConfig = [["/404.html","66cc0cd122cfbd6a2031959bc546bceb"],["/archives/2018/10/index.html","4675b1a066a4d9fd33d5d5c45382ac0d"],["/archives/2018/12/index.html","36469b542a65cc4b59bd43a41e15eea0"],["/archives/2018/index.html","332965bfe22e4db9b3b386e52c72d3d8"],["/archives/2019/05/index.html","f9be6e0092c45bd8257dcf530a646971"],["/archives/2019/07/index.html","d9b11807e20b5e89af3bfdac670d9955"],["/archives/2019/index.html","0c3d4af397625a1a34ec1f642dda1ec2"],["/archives/2020/07/index.html","c5ad8bfd52dc8d43b9e05ce6144eac8d"],["/archives/2020/07/page/2/index.html","00d3fe122df8600c9f0e0e0ff6df7f20"],["/archives/2020/08/index.html","2640d9a1dec5d7ea174ee67eeee3f913"],["/archives/2020/08/page/2/index.html","9476dcb5d797f42dffcb78d2b92b064a"],["/archives/2020/09/index.html","fca096614141c09223dcd941fe7eb45c"],["/archives/2020/10/index.html","f6d882013115cf3af01f5c0fc53288c5"],["/archives/2020/11/index.html","e2fb63c90a3ee2a46254ff978ea1cf4f"],["/archives/2020/index.html","a6d4925ce5f089ac98efba935a43d4b2"],["/archives/2020/page/2/index.html","f5f1db712c92a29782bb330b19b7a72a"],["/archives/2020/page/3/index.html","ff5d78a5cc69db75d3465b55a05b5a33"],["/archives/2020/page/4/index.html","5ec211b3181006ece128a6f84bd7a45a"],["/archives/2021/01/index.html","2cd0bb168a4bd0d83843bccceacb392c"],["/archives/2021/index.html","e67f052c6dfddecd773b51cb70a25265"],["/archives/index.html","279f31d039fe70dc1bd07db5234a8f7f"],["/archives/page/2/index.html","1e3846df49bdc80041a91909817a8803"],["/archives/page/3/index.html","ad5b83de9c7bec29040a748becabc159"],["/archives/page/4/index.html","6846e68f2ea44bb29814fa094e59b47d"],["/archives/page/5/index.html","1b2cafbefab085fe4705d4601405221e"],["/bangumis/index.html","f39cbba048e17cd518e87c318ec3ce5e"],["/books/index.html","849959b2b2ba39264f78875bb90590c4"],["/categories/Github/index.html","3d97631a1f06364bc97d3f09f136623c"],["/categories/Gitlab/index.html","b6c3e7e4db71de830622e04a9f0d85da"],["/categories/Kubernetes/index.html","d5ec4e31aa04ba45f99543fcc60ebfeb"],["/categories/Mysql/index.html","de7e944d9a223b7868f3cadae18862b8"],["/categories/Nginx/Jenkins/index.html","7ffae5ce68f11ad51e9114c114d2ca4a"],["/categories/Nginx/index.html","9cbccd0af866b2eee4da1fbf06c789e8"],["/categories/Nginx/linux/index.html","8cc813dd2e6b45b624a4d5a4f34cd40e"],["/categories/OpenSSH/index.html","162b4fffb2e7da70fafd26940b3cebf5"],["/categories/hexo/index.html","30e27f822a33d0d455815e687bc6ec89"],["/categories/hexo/page/2/index.html","213ca00efb0e98f54602c75921cd1d5c"],["/categories/index.html","5acb1378ad45b529370bf681f84da710"],["/categories/link/index.html","458278d5e24eb321fc704411e855f1fa"],["/categories/linux/index.html","5064924cef1272065a80e0b8aba2a79d"],["/categories/oh-my-zsh/index.html","6f36ca597f467718b6f1918c5e70916c"],["/categories/python/index.html","be683e8ab2efdc8a1336a006dfbf5c59"],["/categories/script/index.html","cbebc2cd9ccbfd320cd776f73a3d351b"],["/categories/tools/index.html","b5f62894dcea2c1abb6423f3fa4be283"],["/categories/奇怪的知识点/index.html","a2afe53967cdc67afac3d71e2ccc3f6c"],["/contact/index.html","16e3ccb8ec7df5c65348b1a0eb7b5f3d"],["/css/index.css","82fe22eac66086e62151a830fa2b7466"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/veditor.css","dfdd72cff082165c84adf3583d2d978b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","5bc2191d80f9b5d92766beb2ed87e431"],["/img/favicon.png","1a78e0a1cff514fae5aaa31a4ed3cfbb"],["/img/favicon1.png","297d399a510bda5d296e41b053b5784a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","3eeacd4a85ba8b4d9f58cccdcda394e4"],["/js/calendar.js","b29f482b4d7a669c51e7615993c544dc"],["/js/crash_cheat.js","4979c32f5c6c3ed5b491580fd75c63f1"],["/js/languages.js","13f02f1612f2a9c6bf4932ece42bbfe0"],["/js/main.js","790cd2f28594f8affbd4a450037c48ff"],["/js/sakura.js","ff54797f9e6a6ce1f165f1178bdfb226"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tianqi.js","5137afba502932bfe3ec73070a6e2c1e"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/js/veditor.js","fd03de0311ebd3c5c7c3e4f7f1b8d5bc"],["/link/index.html","e4d6f2f3504c60e0aced5a12ebe1f105"],["/movies/index.html","6a9db4add77776efdf55691479642ef6"],["/music/index.html","10a4abad1b2ea0c8e75588c80c168aad"],["/navi/about/index.html","23e5db7c808edb60e3c139a77f06d27e"],["/navi/blog.ansheng.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/re.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/urllib.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/index.html","173d362807e679df6fb42a4529953c2b"],["/navi/sm.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/ww2.mathworks.cn/help/matlab/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.chuyu.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.dotcpp.com/oj/contest.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.php.net/manual/zh/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.r-project.org/other-docs.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/p/12130977/index.html","3aa808b54031656cb2b2c387e94ef6fa"],["/p/12223247/index.html","5ffbe09f27752a2347229dc128c1735d"],["/p/1b825486/index.html","0a2d0ad295d40339ad758ac98dd95d1d"],["/p/1f7c743b/index.html","4e9373d56c76957720ed0e5442565956"],["/p/22d30f17/index.html","feeb998bd31023374fa8a8d891181ba2"],["/p/2651b0bd/index.html","16030c7abbaa7579fcca9f96ddf8505e"],["/p/292fbf59/index.html","4129f2a204b1f7dd8faf090659b48b6b"],["/p/2c54d1ec/index.html","76860b617488e63c93dcb05886026a49"],["/p/31397f6f/index.html","7ec8b71d25e67d2ac706df490031f43a"],["/p/328665dd/index.html","6ae6028bb3f8a9905a66d5226b7e6507"],["/p/32e6fc54/index.html","1f1a541c3bee4c6828a617ddc20bb130"],["/p/36a8252d/index.html","d69110e73681e8f4f6d8de4ba9848377"],["/p/37369/index.html","bf2d32f0c6be2a97d77eb8cf44521d72"],["/p/3d65889c/index.html","ecba24a225be030bc8bfe67821283871"],["/p/492994d9/index.html","4121eb61efb1140f3ca0d055ceb22657"],["/p/4b638dc2/index.html","a9f887f5a631a1bc8b7c8f1c44e126be"],["/p/5851b21/index.html","9457a95d27cf0db11b9722d5427b3b4b"],["/p/59ce9c6a/index.html","25633fcce95e92dad6223acbf02a3e07"],["/p/5e94d2a7/index.html","ce46c365349f6749000fc8e96f921665"],["/p/65008a24/index.html","86846108b0521c9e4330e27a2ae15450"],["/p/69df4022/index.html","6f30f25063d212fdf4839cd4928f2ec1"],["/p/6b915d25/index.html","3deb6f15771e1f1230beaaae55c558e6"],["/p/6ea05e36/index.html","0c5850b7800d93271f06c222674cd6a1"],["/p/761d0096/index.html","61a87fa463fe67f34cb98e80dc25feea"],["/p/7fa69db0/index.html","7d0eb49faf2dc4b5e7940915b5e2adfa"],["/p/8422e92e/index.html","93e04ddc14723bc1c29674a21e1e0b5f"],["/p/8a11f10a/index.html","a19beb7ca4ad3765bccb0a0bbbb4edfd"],["/p/8b346831/index.html","8c6acc6bb418500081738212c1159111"],["/p/8cad5570/index.html","c13b412a790c2a708ccd5dd160630e4e"],["/p/8eb47741/index.html","9ba1fb522b504170583b44af7f49fd5d"],["/p/a564d3b/index.html","c5136178de58c8167171da7a0fde4f75"],["/p/b0225828/index.html","e8006e8db9df057fce5b198e1a9fbded"],["/p/ba1e0fab/index.html","885c29a92fbf3ccc960537c867b1201c"],["/p/bb2a8a2e/index.html","b21fc0aacd07a76cca111d5baeef791a"],["/p/c2e90d73/index.html","39b25a7babecdc6c844d9de71b3af5dc"],["/p/c4492888/index.html","ee4852f6453cac2af030065ab1c9584c"],["/p/cb1e6c4f/index.html","8ae9fdef8a2f09f698ab4e530c8b3f02"],["/p/cc5f8722/index.html","70fcb07a8865f4ce25f62fe173d98bea"],["/p/d64778f7/index.html","d5cfd98a47213948daa1d9c579e75a65"],["/p/d881e309/index.html","4e4e66858e14ef549617bc9e68925e7f"],["/p/d9a940f3/index.html","e468e7a1a6b4cc4fb27dbec84a0b7b99"],["/p/eee93e1e/index.html","9cc08c73488363bfe814d104eee0713e"],["/p/f700fae8/index.html","e4b7e40606156905493316cd9e884818"],["/p/ffb5990d/index.html","fec8014121c31533d257d501a45a2f00"],["/p/fffbf386/index.html","60a29729bbc263de2dcfa646d142b178"],["/page/2/index.html","c9f2aa6264b8f123c61eafdc018eac9e"],["/page/3/index.html","b49166be643a213fae187ed1e0a11cc2"],["/page/4/index.html","4dcde5b0ee721b0e462b74c7b505bd8a"],["/page/5/index.html","cb7afea984663496cc2fa84e0f634805"],["/tags/CDN/index.html","da1a1c88721da4e6925a4a6444007eeb"],["/tags/Github/index.html","de5b49551e38ee081ba315d7d6055d67"],["/tags/Gitlab/index.html","47f3d2a8f1873b5d46a50dba02fe10f3"],["/tags/HTTrack/index.html","508ed8985bfc2d8fafc085ae2426c221"],["/tags/Jenkins/index.html","17bc8a3cc3bb14696e2ad40b11462329"],["/tags/Kubernetes/index.html","4c0c7ff08a358dbae564f0c92a8ee5a6"],["/tags/Netgear网件/index.html","f3c5ef6b2f487940c485cad987069e21"],["/tags/OpenSSh/index.html","46e3f89c0a7280e2a01015ea378ea80c"],["/tags/R7000/index.html","d1c3bcb7f8522cd20041fe8e996166d8"],["/tags/abbrlink/index.html","3995675d2d19262f0535a38d0290ec2e"],["/tags/aplayer/index.html","6c66b5de598fc68eda14a3a451c73e62"],["/tags/authenticator/index.html","7f019c1abce16bf7db797f52ab64d1d8"],["/tags/awk/index.html","94788fb78d86ee71800b480c59746bbc"],["/tags/bilibili/index.html","7dbb3fcaf0e50c69a7ce7185f3f9d898"],["/tags/butterfly/index.html","0216c943f3e89c817c0da5aa3b4ef510"],["/tags/docker/index.html","06df66848d5d5f86fc28c8866c8acccc"],["/tags/douban/index.html","5172406f88deaf13c9e7792fcd8204e3"],["/tags/expires/index.html","fdec8a79b476b5eb08398082051533d5"],["/tags/google/index.html","e783bad7c5307d3a738cb753759303ab"],["/tags/hexo/index.html","d3a2fa53d8961169143f5f07a85418a1"],["/tags/hexo/page/2/index.html","9c1609ea3feb973285130cead7620afe"],["/tags/https/index.html","f941dfd92d9becc004b56657600206d9"],["/tags/index.html","c576bb43ed0a5d5fbcf661553a8486b7"],["/tags/jsDelivr/index.html","757e27f83a6c04705a65bf9a6893abf6"],["/tags/link/index.html","ea85aaac442c4dfcd8ed12c3f3dcd9ea"],["/tags/linux/index.html","fd44ea390caffbd27090901e1fc419b7"],["/tags/location/index.html","a08b079393eb283d2d2c938124099c4a"],["/tags/mycat/index.html","d272919f5d2f43c124c36b2998159d4f"],["/tags/mysql/index.html","d54b7de67502ac11ca198be2ad96fde3"],["/tags/nginx/index.html","63a2abe946134a1bbe2970804723c24a"],["/tags/nodeAffinity/index.html","88b85086aff28c65ec326fd20015d793"],["/tags/nodeName/index.html","fc946e09a9601e700db352e0e2a1ba46"],["/tags/nodeSelector/index.html","49d765a0c645d9f16681af8cfc1a1ce4"],["/tags/nslookup/index.html","0ba9a26b439db04baf6791216a7d56cf"],["/tags/oh-my-zsh/index.html","c7c6ecb1ce8c5e633677158f38846bc6"],["/tags/podAffinity/index.html","fd5f682905ab4edec4f89eeb80d04210"],["/tags/podAntiAffinity/index.html","fa3e17cad4ad577b8c03424ca264d39f"],["/tags/proxy-pass/index.html","b9e80b7ee91b5fd7259e816dcd6efad7"],["/tags/python/index.html","6d0746ef25db6a168c457c9486466b35"],["/tags/qiniu/index.html","b3d28a57dc9ac685f67bcc856cde4e27"],["/tags/rewrite/index.html","71e856a7803d75a511d0fc62e4370c19"],["/tags/sed/index.html","227d3e6acb470c2b4a67bb39a4bfb901"],["/tags/shell/index.html","cb39cf91f1143ba263b826908c8e091d"],["/tags/valine/index.html","e8fc47f393cd7d37314a3fe8520d0e50"],["/tags/返回码/index.html","9cb56481561529ddab2ba11790c9602b"],["/tags/重定向/index.html","0509e6c5c97fa16d131ba922bde74fb0"]];
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




