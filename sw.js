self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('app-cache-v2').then(cache => {
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
		'/img/De.svg',
		'/img/En.svg',
		'/img/Es.svg',
		'/img/Fr.svg',
		'/img/grasso.svg',
		'/img/home.svg',
		'/img/It.svg',
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

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== 'app-cache-v2').map(k => caches.delete(k)))
    )
  );
});
