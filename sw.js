self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('my-cache-name').then(function (cache) {
      return cache.addAll([
        '/index.html',
        '/style.css',
        '/script.js',
        '/assets/image.png',
        // Daftar sumber daya lain yang ingin Anda cache
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
