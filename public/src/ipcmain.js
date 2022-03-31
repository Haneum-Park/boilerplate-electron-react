const { app, BrowserWindow, ipcMain } = require('electron');

// const Store = require('electorn-store');
// const store = new Store();

function init(mainWindow ) {
  console.log(mainWindow);
  // mainWindow.loadURL('https://ql.gl');
}

module.exports = init;
