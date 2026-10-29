// Cambia VERSION cada vez que subas cambios, para que los equipos descarguen la versión nueva.
const VERSION = 'formatos-v5';
const SHELL = [
  './', 'index.html', 'minuta.html', 'prueba.html', 'manifest.webmanifest',
  'vendor/jspdf.umd.min.js', 'vendor/jszip.min.js', 'vendor/jspdf.plugin.autotable.min.js', 'vendor/docx.umd.js',
  'icons/icon-192.png', 'fonts/archivo-latin-400-italic.woff2', 'fonts/archivo-latin-400-normal.woff2', 'fonts/archivo-latin-500-normal.woff2', 'fonts/archivo-latin-600-normal.woff2', 'fonts/archivo-latin-700-italic.woff2', 'fonts/archivo-latin-700-normal.woff2', 'fonts/archivo-latin-800-normal.woff2', 'fonts/fonts.css', 'fonts/ibm-plex-mono-latin-400-normal.woff2', 'fonts/ibm-plex-mono-latin-500-normal.woff2', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Primero la red (para tener siempre la última versión) y, sin conexión, lo guardado.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(r => {
        if (r && (r.ok || r.type === 'opaque')) {
          const copy = r.clone();
          caches.open(VERSION).then(c => c.put(e.request, copy));
        }
        return r;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(hit => hit || caches.match('index.html')))
  );
});
