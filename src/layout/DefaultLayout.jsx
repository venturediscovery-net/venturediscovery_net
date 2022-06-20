import React from 'react';
import { ThemeProvider } from '@mui/private-theming';
import Content from '../components/Content.jsx';
import Footer from '../components/Footer.jsx';
import HeaderNav from '../components/HeaderNav.jsx';
import { Box } from '@mui/material';

const DefaultLayout = () => {
  return (<>
            <HeaderNav/>
            <Content  />
            <Footer/>
          </>
  )
}

export default DefaultLayout;