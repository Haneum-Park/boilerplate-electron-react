const { contextBridge, ipcRenderer } = require('electron');

window.ipcRenderer = ipcRenderer;
contextBridge.exposeInMainWorld('ipcRenderer', {
  ...ipcRenderer,
  on: (channel, func) => {
    const subscription = (_event, ...args) => func(_event, ...args);
    ipcRenderer.on(channel, subscription);

    return () => ipcRenderer.removeListener(channel, subscription);
  },
});
