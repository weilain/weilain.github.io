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

var precacheConfig = [["/404.html","6176457ac50688581d6f17cbe603bb29"],["/archives/2018/10/index.html","e53ca4174658a1ff3d506886bf28e0d6"],["/archives/2018/12/index.html","3fab5a4ef432f97bf4f2ad29dc134eb3"],["/archives/2018/index.html","e450fab884d1113c4a8370c8edff09c7"],["/archives/2019/05/index.html","1bf75bfd7291b95e0dd0f880c7ad6593"],["/archives/2019/07/index.html","e90e8f77b801015119fa65529683560d"],["/archives/2019/index.html","1024e348869373ea84e7154780302618"],["/archives/2020/07/index.html","46ccd3af2d1eb0436ab2398d4ca71c91"],["/archives/2020/07/page/2/index.html","09bad98895acde2430213ed23a330ac1"],["/archives/2020/08/index.html","48ada5325eadcdd8197094fc4e2619b4"],["/archives/2020/08/page/2/index.html","c99249b083ed40d70cfcb7c072b791ca"],["/archives/2020/09/index.html","14c70f7b14d4b2eb3677326b002a7d79"],["/archives/2020/10/index.html","972c6187ff9523d39a37f4bd39c0f664"],["/archives/2020/11/index.html","7f1c475611a9aeac4f8a0218fec91e04"],["/archives/2020/index.html","091ca465f3ff45de620308baac572dd7"],["/archives/2020/page/2/index.html","70a37f57881869d234d1c75f7ae2b2fd"],["/archives/2020/page/3/index.html","d06b534a8a6e96ace09b33ba610ac967"],["/archives/2020/page/4/index.html","0ba3afbb21c3ca529ab0b59892645ae3"],["/archives/2021/01/index.html","49d89cc73d0053a301d0575ce88bbce4"],["/archives/2021/index.html","6546f109dd8216543c4daf8cb19ae00c"],["/archives/index.html","5a80b94707749cec961fb86e0f44f584"],["/archives/page/2/index.html","0194a904a8b1e89db6d3a70dbea6d472"],["/archives/page/3/index.html","0acbe047c4b5831500398b2d6e2ec937"],["/archives/page/4/index.html","864c3bff7a9fd6bd05fc1a93f66a1a60"],["/archives/page/5/index.html","5468811566b1f69fccc2d4bd9fd601f1"],["/bangumis/index.html","b2faaea27bfe530f8817541d5b40e8f3"],["/books/index.html","a8592ab32666c7faad58da0313d359fa"],["/categories/Github/index.html","e28d555135983d3043eb8199bcabeb75"],["/categories/Gitlab/index.html","413f2f5dbff7256e5f68c578190ac71e"],["/categories/Kubernetes/index.html","099168833c988884b56a74ab57149767"],["/categories/Mysql/index.html","eb69a003398bc51e4953939bda3bff51"],["/categories/Nginx/Jenkins/index.html","db41d34aabec3a1ce824b16cc7fd3105"],["/categories/Nginx/index.html","993b21f6f164802cb361c76a61944f7a"],["/categories/Nginx/linux/index.html","f8884b7bca242c3808218df802269a3e"],["/categories/OpenSSH/index.html","102efdccffc743126bf99837138eda5f"],["/categories/hexo/index.html","61668f39c5db4d0ef391e2464657b266"],["/categories/hexo/page/2/index.html","dc3fcc5691ed7f876bd5278b94109036"],["/categories/index.html","00231c101cdbb14dee358f5ae5bf518e"],["/categories/link/index.html","37c4ef5900afb0dad03270cac781c3e5"],["/categories/linux/index.html","98335220447b62b5e30f0bdcb15ed6a2"],["/categories/oh-my-zsh/index.html","9c8546867376d4310f37387cbc2a585c"],["/categories/python/index.html","d47e888e8546812e1b75bfa642822e1c"],["/categories/script/index.html","aefeccaf9e239c1338b1ae98f2e23b19"],["/categories/tools/index.html","ddaaa79566f7d158500490e36128d468"],["/categories/奇怪的知识点/index.html","b57bfd4628ded9b30bb914a4cc2f2e5b"],["/contact/index.html","541902597e3db5d85a119bdca4e22ebb"],["/css/index.css","571262812db51426401e5ec7ead7f704"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/veditor.css","dfdd72cff082165c84adf3583d2d978b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","5bc2191d80f9b5d92766beb2ed87e431"],["/img/favicon.png","1a78e0a1cff514fae5aaa31a4ed3cfbb"],["/img/favicon1.png","297d399a510bda5d296e41b053b5784a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","a5337d3ec8e0ebde132bf3c78bf85799"],["/js/calendar.js","b29f482b4d7a669c51e7615993c544dc"],["/js/crash_cheat.js","4979c32f5c6c3ed5b491580fd75c63f1"],["/js/languages.js","13f02f1612f2a9c6bf4932ece42bbfe0"],["/js/main.js","790cd2f28594f8affbd4a450037c48ff"],["/js/sakura.js","ff54797f9e6a6ce1f165f1178bdfb226"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tianqi.js","5137afba502932bfe3ec73070a6e2c1e"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/js/veditor.js","fd03de0311ebd3c5c7c3e4f7f1b8d5bc"],["/link/index.html","b13ac73eb35b2ccc3e79cbc5fca6ec8b"],["/movies/index.html","c92cb60467e6793d2163cfc5e29eb487"],["/music/index.html","47f51c2a62afaeceed3fdb1b3d53c2ba"],["/navi/about/index.html","a1d68115eba590b5c6256b3c874e5e21"],["/navi/blog.ansheng.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/re.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/docs.python.org/zh-cn/3/library/urllib.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/index.html","9957a883e436bcf8ab1d5b7f0afd10dc"],["/navi/sm.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/ww2.mathworks.cn/help/matlab/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.chuyu.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.dotcpp.com/oj/contest.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.php.net/manual/zh/index.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/navi/www.r-project.org/other-docs.html","f767c6ee9b28e43b777e8326cc8c59fc"],["/p/12130977/index.html","b317b2619eb6810fc5b0c2265b0b7f53"],["/p/12223247/index.html","4dcce9af824788ab11f066336e1f2bf5"],["/p/1b825486/index.html","50760853d75401ec5ac7bf84f3fea039"],["/p/1f7c743b/index.html","9a426d62a9d03022d232ca5c82138b23"],["/p/22d30f17/index.html","ea615817c7e46ff29f8d9fdf66bfa33f"],["/p/2651b0bd/index.html","5d40d4d6e3cd07e93e0d93e93d915ff3"],["/p/292fbf59/index.html","84f2e72ae759d062bfe7fd2c75ec6e06"],["/p/2c54d1ec/index.html","5eca1d5c860c55d10f696f69f139e34c"],["/p/31397f6f/index.html","0b1f3b3f186a712278ef85c15a345d6c"],["/p/328665dd/index.html","a30a58cbfae53811218c128dc96d02eb"],["/p/32e6fc54/index.html","773dab6d9d0086a7eb6284e4c7090e1e"],["/p/36a8252d/index.html","f7b72f3fc014030bc81c8d508c6f1f36"],["/p/37369/index.html","02facf9698a777f3a0cfc7a61616ad68"],["/p/3d65889c/index.html","c2f06f03b884f78742fecec713de3384"],["/p/492994d9/index.html","b67e265949947b014d8197b1af75ddd8"],["/p/4b638dc2/index.html","10a8c337f06ca5cb6ddbc5fa4fb12da0"],["/p/5851b21/index.html","c118d70e9927b642451f183ee77a071b"],["/p/59ce9c6a/index.html","eeeafe6f992f7c57fff5e57d235ecaf0"],["/p/5e94d2a7/index.html","44cbcae74bea088bccb44635ffd91d8e"],["/p/65008a24/index.html","483be85d3c761705e51c405ab4be94da"],["/p/69df4022/index.html","25d63cc610cc4538d0f14553dcedf69a"],["/p/6b915d25/index.html","bc2356240eb77e9f549d0e68f9854719"],["/p/6ea05e36/index.html","f9a14d8e0a0c83c4a44366eb4ac355d6"],["/p/761d0096/index.html","de1d825a9a239cf02545c3c3d7512e2d"],["/p/7fa69db0/index.html","733920b0105ee9c570661a2b4c7c3613"],["/p/8422e92e/index.html","d5f78d5f68785672090a7693321b0b75"],["/p/8a11f10a/index.html","8584191df9a2516bced8e77d779433b5"],["/p/8b346831/index.html","343ce0f8169971635b1553c3fc231545"],["/p/8cad5570/index.html","8d0de7f3ae8e6a89e0b6452760655eaf"],["/p/8eb47741/index.html","1eb50ec1a4bf7e327286eb2ef8be0a2c"],["/p/a564d3b/index.html","0faac127793fac9df1193a3c1e989a33"],["/p/b0225828/index.html","2a5437cd59c980951289c3d17afb36a4"],["/p/ba1e0fab/index.html","a3c8c561fda7be804fe5346c22b3d536"],["/p/bb2a8a2e/index.html","8015c643cdc0d39faba84236b9799f24"],["/p/c2e90d73/index.html","8a9ef9e36b83ea6af90b530003124585"],["/p/c4492888/index.html","9c5d2226f7388a1509bd4157f0e64928"],["/p/cb1e6c4f/index.html","d5cbd5ac505af93b4bde7b3cc7540daa"],["/p/cc5f8722/index.html","b8668026ab5ec882776e1dec9f84d3cb"],["/p/d64778f7/index.html","7111df1a03558de7a8bc03ad84774d9c"],["/p/d881e309/index.html","aca20035f2616288d03deb95800b9f72"],["/p/d9a940f3/index.html","dc58d6f9226597c9c358ba9fff70ced0"],["/p/eee93e1e/index.html","d5acb62ded4cf82de179f321a8d99a43"],["/p/f700fae8/index.html","c5e84bcce060b9786da1d5a9bedc3f78"],["/p/ffb5990d/index.html","f64d2d14575a1144ca4ca8a3aabee792"],["/p/fffbf386/index.html","fe049ff59dfbf7e86648be24d136b912"],["/page/2/index.html","a425ca636d6d4c91c17b9f19ac1fa54c"],["/page/3/index.html","ce6cc29691f62013d117ed11372ddf1f"],["/page/4/index.html","d35bfaad250168f9dadfad64db38edb3"],["/page/5/index.html","2bff5c0f7d9573c94e9d01040adca702"],["/tags/CDN/index.html","332bd8e04b4b8e5d2ebfe4f5e7b10cd2"],["/tags/Github/index.html","1048e851adc9f70b5848a1be9445e061"],["/tags/Gitlab/index.html","73f9b6c1a6ac1ed3a0a0ac5925187154"],["/tags/HTTrack/index.html","d84bb92145d00388b0ad80284411c4c4"],["/tags/Jenkins/index.html","10f43b91e46ff0742eb00049ecb69ec3"],["/tags/Kubernetes/index.html","9444aad430e99565c53edf8c07cbb692"],["/tags/Netgear网件/index.html","e1246f2186bf0bd43d490a8ef48dd39b"],["/tags/OpenSSh/index.html","d53aae8a2e5188d192c4f6709a14aa97"],["/tags/R7000/index.html","28ef3224da13360028bc6982fb4401cd"],["/tags/abbrlink/index.html","11acad91b025d614c5cf7ca42d5178d3"],["/tags/aplayer/index.html","947747bca4e6ca6b6bc5fd3897987742"],["/tags/authenticator/index.html","bd6cd53472f875ddb5299d3d92cc764d"],["/tags/awk/index.html","5432dcbd55e891aef462b11fdddecc2f"],["/tags/bilibili/index.html","645a61649747dee15b9d09bff8109f0d"],["/tags/butterfly/index.html","e0331caff96075e8ea6548d8d2171d58"],["/tags/docker/index.html","8054b8f3eafa5f3cb18aafa8bc017616"],["/tags/douban/index.html","2fada787a6bbfa4284c36b3fd262acb9"],["/tags/expires/index.html","b06e91917cc3b5afdeee2eb173f02662"],["/tags/google/index.html","0aa9b3f7221afdc22f9b71abf9dae35c"],["/tags/hexo/index.html","2e0d948e5552c3b6b14e94935e0c72ae"],["/tags/hexo/page/2/index.html","7c384f5e788c8196f159857d0517adef"],["/tags/https/index.html","6b031524d90b0e33b1423b5d4cc9aa69"],["/tags/index.html","b70b3300f9159a98f450e44a447a9ddb"],["/tags/jsDelivr/index.html","3876b9e35b5e0e258c36bd16abe8e469"],["/tags/link/index.html","1438af780d4875a9d43034f6f3a86e25"],["/tags/linux/index.html","41f0d9292e675fdb84b039c15ccebe47"],["/tags/location/index.html","ec5e33c3f7b62ceb1d6e76b5d1dd3bb7"],["/tags/mycat/index.html","c8b98d646b55a393872a26f722034d6a"],["/tags/mysql/index.html","e8041b8eeb418cb2782a7303f2b7411d"],["/tags/nginx/index.html","eba4e59f9f400b188ec5fab3b345cc9a"],["/tags/nodeAffinity/index.html","28336e95979ebd6de9a7cad4f179ca8f"],["/tags/nodeName/index.html","7a54d01d12793d75ad6d4f4155585857"],["/tags/nodeSelector/index.html","80499c47a9c4ca3e3289adbb0cabc43a"],["/tags/nslookup/index.html","a83b21ad839a8528d55e15e2677f81c4"],["/tags/oh-my-zsh/index.html","92f833ef9e10ab20b63517a968a66e05"],["/tags/podAffinity/index.html","0145dcd481267643b0afcea3cda7b960"],["/tags/podAntiAffinity/index.html","082e65d76935d2613b220d67301d7736"],["/tags/proxy-pass/index.html","0355ca6cf561b42c52b9c57143a55f0c"],["/tags/python/index.html","e41610c9fe91d46fff4dae6f14fd86b5"],["/tags/qiniu/index.html","4ed92466da04fad0a1daa7568db41470"],["/tags/rewrite/index.html","60657e7e68db0ade9956cc12b110c1e5"],["/tags/sed/index.html","9cde52c8e94de4db98604469fe3c8859"],["/tags/shell/index.html","55cca364056ecefe5e17da7e11e16777"],["/tags/valine/index.html","d2c37d1328545750c5426f28c1e0cc9a"],["/tags/返回码/index.html","80001f5e67e45c9724d1f5983b8058e3"],["/tags/重定向/index.html","0f09b484b14384422b6279e39442ed45"]];
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




