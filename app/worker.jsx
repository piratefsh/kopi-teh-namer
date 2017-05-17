self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open('v1').then(function(cache) {
      fetch('manifest.json')
      .then((response) => response.json())
      .then((assetMap) => {
        const assets = [];
        for(let k in assetMap){
          assets.push('/' + assetMap[k])
        }
        assets.push('/')
        return cache.addAll(assets)
      })
    })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).catch(function() {
      return fetch(event.request);
    }).then(function(response) {
      caches.open('v1').then(function(cache) {
        console.log(event.request, response);
        cache.put(event.request, response);
      });
      return response.clone();
    }).catch(function() {
      // return caches.match('/sw-test/gallery/myLittleVader.jpg');
    }));
});