import React from 'react';
// import { ThemeProvider } from '@mui/private-theming';
import Content from '../components/Content.jsx';
import Footer from '../components/Footer.jsx';
import HeaderNav from '../components/HeaderNav.jsx';
import { Box } from '@mui/material';

const DefaultLayout = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', background: 'linear-gradient(311.76deg, #D4E7FE -15.24%, #FFFFFF 78.85%)'}}>
            <HeaderNav />
            <Content />
            <Footer />
        </Box>
    )
}

export default DefaultLayout;