const shell = require('electron').shell;
const { app, BrowserWindow, ipcMain } = require('electron');

ipcMain.on('test', (_event, data) => {
  console.log(data);
  shell.openExternal('https://www.naver.com');
});
