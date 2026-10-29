// App de escritorio: abre los formatos desde los archivos incluidos, sin internet.
const { app, BrowserWindow, shell, Menu } = require('electron');
const path = require('path');

function crear() {
  const win = new BrowserWindow({
    width: 1280, height: 900, minWidth: 420,
    title: 'Formatos Soporte',
    icon: path.join(__dirname, '..', 'www', 'icons', 'icon-512.png'),
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, sandbox: true, spellcheck: true }
  });
  win.webContents.session.setSpellCheckerLanguages(['es-MX', 'es']);
  win.loadFile(path.join(__dirname, '..', 'www', 'index.html'));
  // Los enlaces a internet se abren en el navegador; los archivos generados, dentro de la app.
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:/i.test(url)) { shell.openExternal(url); return { action: 'deny' }; }
    return { action: 'allow' };
  });
  // Al descargar, siempre preguntar dónde guardar.
  win.webContents.session.on('will-download', (_e, item) => { item.setSaveDialogOptions({ title: 'Guardar archivo' }); });
}

Menu.setApplicationMenu(null);
app.whenReady().then(crear);
app.on('window-all-closed', () => app.quit());
