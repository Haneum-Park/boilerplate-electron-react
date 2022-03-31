import React, { useEffect, memo } from 'react';

const { ipcRenderer } = window;

const Main = () => {
  useEffect(() => {
    // window.ipcRenderer.on('test', (data) => {
    //   console.log('data', data);
    // });
    console.log(ipcRenderer);
  }, []);

  return <div>Main</div>;
};

export default memo(Main);
