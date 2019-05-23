importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('material-solutions').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/main.css',
       '/webgl-bundle.min.js',
       '/smiles-drawer.min.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);
});

