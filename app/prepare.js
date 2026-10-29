// Copia la app web (carpeta de arriba) a app/www para empaquetarla en Windows y Android.
const fs = require('fs'), path = require('path');
const src = path.join(__dirname, '..'), dst = path.join(__dirname, 'www');
const items = ['index.html', 'minuta.html', 'prueba.html', 'manifest.webmanifest', 'vendor', 'icons', 'fonts'];
fs.rmSync(dst, { recursive: true, force: true });
fs.mkdirSync(dst, { recursive: true });
for (const it of items) fs.cpSync(path.join(src, it), path.join(dst, it), { recursive: true });
console.log('Web copiada a', dst);
