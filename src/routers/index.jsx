import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import routers from './index.router';

const Router = () => (
  <BrowserRouter>
    <Routes>
      {routers.map(({ key, path, component: Component, child }) => (
        <Route key={key} path={path} element={<Component />}>
          {child &&
            child.length > 0 &&
            child.map(({ childKey, childPath, childComp: ChildComp }) => (
              <Route key={childKey} path={childPath} element={<ChildComp />} />
            ))}
        </Route>
      ))}
    </Routes>
  </BrowserRouter>
);

export default Router;
