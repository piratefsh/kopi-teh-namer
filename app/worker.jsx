console.log('hi from worker')
self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/bundle.js',
        '/styles.css',
        ])
    })
  )
})

self.addEventListener('fetch', function(e) {
  console.log('fetching', e.request)
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request)
    }))
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).catch(function() {
      return fetch(event.request);
    }).then(function(response) {
      caches.open('v1').then(function(cache) {
        cache.put(event.request, response);
      });
      return response.clone();
    }).catch(function() {
      // return caches.match('/sw-test/gallery/myLittleVader.jpg');
    }));
});