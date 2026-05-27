const { app, BrowserWindow, globalShortcut, Tray, Menu, nativeImage } = require('electron');
const path = require('path');
const fs = require('fs');

let win = null;

function createWindow() {
  const { screen } = require('electron');
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    x: 0, y: 0, width, height,
    frame: false,
    transparent: true,
    skipTaskbar: true,
    resizable: false,
    type: 'toolbar',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile(path.join(__dirname, '..', 'sticky-notes.html'));

  win.setIgnoreMouseEvents(true, { forward: true });
  win.setAlwaysOnTop(false, 'normal');

  globalShortcut.register('CommandOrControl+Shift+Q', () => app.quit());
}

app.whenReady().then(() => {
  createWindow();

  const iconPath = path.join(__dirname, 'icon.png');
  let trayIcon;
  if (fs.existsSync(iconPath)) {
    trayIcon = nativeImage.createFromPath(iconPath);
  } else {
    trayIcon = nativeImage.createEmpty();
  }
  const tray = new Tray(trayIcon);
  tray.setToolTip('桌面便利贴');
  tray.setContextMenu(Menu.buildFromTemplate([
    {
      label: '新建便利贴',
      click: () => win && win.webContents.executeJavaScript("document.getElementById('btn-add').click();"),
    },
    { type: 'separator' },
    { label: '退出 (Ctrl+Shift+Q)', click: () => app.quit() },
  ]));
});

app.on('will-quit', () => globalShortcut.unregisterAll());
