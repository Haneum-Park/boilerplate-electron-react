import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@store/index';

import Router from '@router/index';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
);
