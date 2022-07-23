import React from 'react';

// import Tabs
const Home = React.lazy(() => import('./views/tabs/Home'));
const Survey = React.lazy(() => import('./views/tabs/Survey'));
const BetaCommunity = React.lazy(() => import('./views/tabs/BetaCommunity'));
const Faq = React.lazy(() => import('./views/tabs/Faq'));

const routes = [
  { path: '/Home',exact: true, name: 'Home', element:Home },
  { path: '/Survey', name: 'Survey', element: Survey },
  // { path: '/BetaCommunity', name: 'BetaCommunity', element: BetaCommunity },
  { path: '/Faq', name: 'Faq', element: Faq },
];

export default routes;