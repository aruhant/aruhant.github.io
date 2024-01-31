'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0f2287a3e8a0b57cc0cadf95fc076fc7",
"index.html": "932db3313b1293ec8cf4e223ed0a4210",
"/": "932db3313b1293ec8cf4e223ed0a4210",
"main.dart.js": "d4d1a643154e09476af50f89026a23ac",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "f46256d664516d5bae10d5ff56e5770f",
"icons/Icon-192.png": "7e74eec73a3a22106783f9b29485129a",
"icons/Icon-maskable-192.png": "7e74eec73a3a22106783f9b29485129a",
"icons/Icon-maskable-512.png": "53d7a0377190487b2b3748caa87774fd",
"icons/Icon-512.png": "53d7a0377190487b2b3748caa87774fd",
"manifest.json": "8e666c4e6d0279b6e1e7b7b9975b5e96",
"assets/AssetManifest.json": "ea89bb690b7ccb080af81251cfe0ff13",
"assets/NOTICES": "82bb5f60d3270dd8a064771920cf04af",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "80757f3c2201b3086074a7672c45d00b",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "094a5127883d08ba5648db5524de45d6",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/maps/image_bg.jpeg": "b6038aef04fb01b9b584b15920200278",
"assets/assets/images/maps/platform.tsj": "f323e67447a35792b67ab02a3b46dd52",
"assets/assets/images/maps/walls.png": "79c23f56fd5cb3253fdac54935c31f7a",
"assets/assets/images/maps/platform.png": "3c3a05f02d5ae1b1cf768978e2421d38",
"assets/assets/images/maps/walls.tsj": "cfeef6f346d33e98f96b2ed6e9967962",
"assets/assets/images/maps/lanka_map.tmj": "1306f9347a3744182da03b44282da2fa",
"assets/assets/images/maps/tileset.png": "db1342e18dd58977563f7d3691700f30",
"assets/assets/images/maps/props.tsj": "1e026bdc8826caa8fab6667eaa92bab2",
"assets/assets/images/maps/tileset.tsj": "32c242bb189025b0667e7ed810ed56c3",
"assets/assets/images/maps/lanka_map1.tmj": "7af02edc1e27240c8ece2287b5890e6c",
"assets/assets/images/maps/props.png": "a18949e323b1767f90798403bfa9fa27",
"assets/assets/images/jewellry.png": "70e23fbf756842d2f5a13d4815a3e89e",
"assets/assets/images/joystick_attack_range.png": "8994f23fc67442c8361432f0cc9a2fa1",
"assets/assets/images/joystick_background.png": "8c9aa78348b48e03f06bb97f74b819c9",
"assets/assets/images/OIG._cX48tfe2zvDo.jpg": "2fbc66d6da262f6c8732b71aef628a0f",
"assets/assets/images/floor2.jpeg": "a8bab2633a5b97c5d1ede2cf70e3a8be",
"assets/assets/images/platform/hanuman/hanuman-idle.png": "a57d0f48374bc6305c4b81647c560888",
"assets/assets/images/platform/hanuman/hanuman-jump.png": "026592e70c82af32af63381bf645541c",
"assets/assets/images/platform/hanuman/hanuman-run-.png": "b074235e52b4d7ee7237adff1a91f706",
"assets/assets/images/platform/hanuman/hanuman-run.png": "dd194b6997f4094c0c03e5c2defe28cd",
"assets/assets/images/platform/hanuman/hanuman.png": "ad1f69fa81f5786c4fec83a529fba199",
"assets/assets/images/platform/explosion_fire.png": "81a3691935a18a30572870b759ad1683",
"assets/assets/images/platform/fire.png": "7c910034cd482f6beb2d050404634a5f",
"assets/assets/images/platform/item-feedback.png": "399bd58d97151076d86ed315898335ce",
"assets/assets/images/platform/jewel.png": "799a94e11de0d0e9bc016d000ab79a5d",
"assets/assets/images/platform/fireball_right.png": "8ca20432af42dba26510b41d5a3bb195",
"assets/assets/images/platform/rakshasa/rakshasa-idle.png": "c4822e4a176a4143493cee5a13e31bb4",
"assets/assets/images/platform/rakshasa/rakshasa-jump.png": "f9ab0d36f164d24619bdcad23ed833b3",
"assets/assets/images/platform/rakshasa/rakshasa-idle%2520copy.png": "1ade73debb8977e39ac3d0d096f3df81",
"assets/assets/images/platform/enemy-death.png": "ac815579fcdbf6113666bb0f97564420",
"assets/assets/images/platform/middle.png": "2d7dac09c16985539aa88e6c7783aaa9",
"assets/assets/images/platform/back.png": "d7678242fcc92af2b001aed53dc42863",
"assets/assets/images/walls.png": "a6a987a23c2a94dfc2dd98a2467e1640",
"assets/assets/images/jewel.png": "799a94e11de0d0e9bc016d000ab79a5d",
"assets/assets/images/platform.png": "04ebfc72638e0d9125a4a367d5f39684",
"assets/assets/images/repeatable_background.png": "9df0d1e4d448be9922a9859cfbefb543",
"assets/assets/images/hanuman.png": "ad1f69fa81f5786c4fec83a529fba199",
"assets/assets/images/direction_attack.png": "04fa54924d587beff5005965f2caa4b8",
"assets/assets/audio/enemy_die.mp3": "0941cc16a67476c6835c77f7681d560f",
"assets/assets/audio/bgm.m4a": "5f5733ab99f48fe7c8a1e90c2080b167",
"assets/assets/audio/fire.wav": "0502bf4e41d1e7dddcd6fdec8a95a39e",
"assets/assets/audio/die.mp3": "a38cc0af27384572142be04f93090c9e",
"assets/assets/audio/jump.mp3": "a53e70220efaf196151addcad26cdf73",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
