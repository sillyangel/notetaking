const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const ipc = ipcMain;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// eslint-disable-next-line global-require
if (require('electron-squirrel-startup')) {
  app.quit();
}




function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 680,
    icon: './icons/icon.png',
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: false,
      preload: path.join(__dirname, 'preload.js'),
    }
})

  ipc.on('minimizeapp', function (event) {
    mainWindow.minimize();
  });
  ipc.on('maximizeapp', function (event) {
    if (mainWindow.isMaximized()) {
      mainWindow.restore();
    } else {
      mainWindow.maximize();
    }
  });
  ipc.on('closeapp', function (event) {
    mainWindow.close();
  });
  mainWindow.loadFile(path.join(__dirname, 'public/index.html'));
}


app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

});