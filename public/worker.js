'use strict';

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open('v1').then(function (cache) {
    fetch('manifest.json').then(function (response) {
      return response.json();
    }).then(function (assetMap) {
      var assets = [];
      for (var k in assetMap) {
        assets.push('/' + assetMap[k]);
      }
      assets.push('/kopi-teh-namer/public/');
      return cache.addAll(assets);
    });
  }));
});

self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function (resp) {
    return resp || fetch(event.request);
  }).then(function (response) {
    caches.open('v1').then(function (cache) {
      if (response) {
        cache.put(event.request, response);
      }
      console.log(event.request, response);
    });
    return response.clone();
  })['catch'](function () {
    // return caches.match('/sw-test/gallery/myLittleVader.jpg');
  }));
});