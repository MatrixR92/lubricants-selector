self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('app-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png',
		'/icon-180.png',
		'/app.js',
		'/style.css',
		'/img/circuiti.svg',
		'/img/de.png',
		'/img/en.png',
		'/img/es.png',
		'/img/fr.png',
		'/img/grasso.svg',
		'/img/home.svg',
		'/img/it.png',
		'/img/logo.svg',
		'/img/logo-piccolo.png',
		'/img/riduttori-hp.svg',
		'/img/riduttori-standard.svg',
		'/img/vasche.svg',
		'/img/loghi/pakelo.png',
		'/img/loghi/petronas.png',
		'/img/loghi/shell.png',
		'/img/loghi/total.png',
		'/img/loghi/castrol.png',
		'/img/loghi/eni.png',
		'/img/loghi/fuchs.png',
		'/img/loghi/loghi.ai',
		'/img/loghi/mobil.png',
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
