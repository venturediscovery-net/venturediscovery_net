import React from 'react';

// import Home from './views/tabs/Home';
// import Survey from './views/tabs/Survey';


const Home = React.lazy(() => import('./views/tabs/Home'));
const Survey = React.lazy(() => import('./views/tabs/Survey'));


const routes = [
  { path: '/Home',exact: true, name: 'Home', element:Home },
  { path: '/Survey', name: 'Survey', element: Survey },
];

export default routes;