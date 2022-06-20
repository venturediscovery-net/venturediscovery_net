import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// import Home from './views/tabs/Home';

import routes from '../routes.js';

const Content = () => {
  return (
    <div>
      <Suspense>
        <Routes>
          {console.log(routes)};
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="Home" replace />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default Content;