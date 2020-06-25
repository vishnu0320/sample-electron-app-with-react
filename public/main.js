const { app, BrowserWindow } = require('electron');

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.maximize();
  win.loadURL('http://localhost:3000/');
  win.on('closed', function () {
    win = null;
  });
}
app.on('ready', createWindow);
