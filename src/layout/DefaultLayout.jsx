import React from 'react';
import { ThemeProvider } from '@mui/private-theming';
import Content from '../components/Content.jsx';
import Footer from '../components/Footer.jsx';
import HeaderNav from '../components/HeaderNav.jsx';

const DefaultLayout = () => {
  return (<>
            <HeaderNav/>
            <Content/>
            <Footer/>
          </>
  )
}

export default DefaultLayout;