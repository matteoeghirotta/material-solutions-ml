self.addEventListener('install', function(e) {
    e.waitUntil(
	caches.open('material-solutions').then(function(cache) {
	    return cache.addAll([
		'/',
		'/index.html',
		'/main.css',
		'/webgl-bundle.min.js',
		'/smiles-drawer.min.js',
		'/a-npd.xyz'
	    ]);
	})
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    console.log(event.request.url);
    event.respondWith(
	caches.open(cacheName)
	    .then(cache => cache.match(event.request, {ignoreSearch: true}))
	    .then(response => {
		return response || fetch(event.request);
	    })
    );
});

