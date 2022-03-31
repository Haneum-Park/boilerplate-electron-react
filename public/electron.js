const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');
const isDev = require('electron-is-dev');
const path = require('path');
const PORT = process.env.PORT || 8000;

require('electron-debug')();

let mainWindow;
let updateWindow;
let updateWindowSender;

const browserWindowOpts = {
  width: 500,
  height: 300,
  center: true,
  resizable: true,
  alwaysOnTop: false,
  webPreferences: {
    nodeIntegration: true,
    nodeIntegrationInWorker: true,
    webviewTag: true,
    webSecurity: false,
    alwaysOnTop: false,
    // contextIsolation: false,
    preload: path.join(__dirname, './preload.js'),
  },
};

// function openUpdateWindow() {
//   updateWindow = new BrowserWindow({
//     ...browserWindowOpts,
//     resizable: false,
//     webPreferences: {
//       webSecurity: false,
//     },
//   });

//   updateWindow.on('closed', () => {
//     updateWindow = null;
//   });

//   if (isDev) {
//     console.log('[MODE] DEVELOPMENT');
//     updateWindow.loadURL(`http://localhost:${PORT}/#update`);
//   } else {
//     console.log('[MODE] PRODUCTION');
//     updateWindow.removeMenu();
//     updateWindow.loadURL(`file://${path.join(__dirname, './update.html')}#update`);
//   }
// }

// ipcMain.on('register_updateWindow', (event, _data) => {
//   console.log('[UPDATE] Register update window');
//   updateWindowSender = event.sender;
// });

// if (process.env.NODE_ENV === 'development') {
//   // ! If dev-env, Accure error because of config file.
//   autoUpdater.updateConfigPath = path.join(__dirname, './dev-app-update.yml');
// }

app.on('ready', () => {
  // autoUpdater.checkForUpdates();
});

// autoUpdater.on('checking-for-update', () => {
//   console.log('[UPDATE] Checking for update..');
// });

// autoUpdater.on('error', (err) => {
//   console.error(`[ERROR] ${err}`);
// });

// autoUpdater.on('download-progress', (progressObj) => {
//   let logMsg = `[DOWNLOAD] ${progressObj.bytesPerSecond} ${logMsg} ${progressObj.precent}% downloading.. (${progressObj.transferred}/${progressObj.total})`;
//   mainWindow.setProgressBar(progressObj.precent / 100);

//   console.log(logMsg);
//   if (!!updateWindowSender)
//     updateWindowSender.send('updateProgressPercentage', progressObj.percent);
//   if (progressObj.precent >= 100) {
//     console.log('[DOWNLOAD] Done');
//     if (!!updateWindow) updateWindow.close();
//   }
// });

// autoUpdater.on('update-downloaded', (_event, releaseNotes, releaseName) => {
//   if (!!updateWindow) updateWindow.close();
//   mainWindow.setProgressBar(-1);
//   console.log('[UPDATE] DOWNLOAD DONE');
//   const dialogOpts = {
//     type: 'info',
//     buttons: ['Install and Relaunch', 'Quit'],
//     defaultId: 0,
//     cancelId: 1,
//     title: 'Krill Updater',
//     message: process.platform === 'win32' ? releaseNotes : releaseName,
//     detail: '새로운 버전이 릴리스 되었습니다. 재시작 버튼을 눌러 업데이트를 적용해주세요.',
//   };
//   dialog
//     .showMessageBox(dialogOpts)
//     .then((res) => {
//       if (res.response === 0) {
//         autoUpdater.quitAndInstall();
//       } else {
//         app.quit();
//         app.exit();
//       }
//     })
//     .catch((err) => {
//       console.log(`[ERROR] ${err}`);
//     });
// });

// //신규 업로드가 있을경우 === 구버전
// autoUpdater.on('update-available', function (info) {
//   console.log('[UPDATE] Update is available');
//   openupdateWindowdow();
// });

// //신규 업로드가 없을경우 === 최신버전
// autoUpdater.on('update-not-available', function () {
//   console.log('[UPDATE] Update is unavailable');
// });

function createWindow() {
  mainWindow = new BrowserWindow({
    ...browserWindowOpts,
    width: 800,
    height: 900,
  });

  if (isDev) {
    console.log('[MODE] DEVELOPMENT');
    mainWindow.loadURL(`http://localhost:${PORT}`);
    mainWindow.webContents.openDevTools();
  } else {
    console.log('[MODE] PRODUCTION');
    mainWindow.loadFile(path.join(__dirname, '../build/index.html'));
    mainWindow.removeMenu();
  }

  require('./src/ipcmain')(mainWindow);

  mainWindow.on('closed', () => {
    app.quit();
  });
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.whenReady().then(createWindow);

console.log('[INFO] App is ready');

console.log(`The tmp PATH is: ${app.getAppPath('temp')}`);

console.log('[INFO] IpcMain is LoadDone');

