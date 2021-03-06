import { Box } from '@mui/material';
import React from 'react'
import CTASection from '../section/CTASection';
import HowSection from '../section/HowSection';
import StatsSection from '../section/StatsSection';
import VideoSection from '../section/VideoSection';
import WhomSection from '../section/WhomSection';
import WhySection from '../section/WhySection';
import { ThemeProvider } from '@mui/private-theming';
import theme from '../../theme';

const heading = {
  title: "Have an Unsolved Problem / Unserved Need ?<br/> Be a part of the Solution!",
  whomTitle: "For <span style={{color:\"SkyBlue\"}} > whom?</span>",
  whyTitle: "Benefits:",
  howTitle: "<span style={{color:\"RosyBrown\"}} >HOW</span> DOES IT WORK?",

}
const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <VideoSection></VideoSection>
        <Box sx={{ boxSizing: "border-box", backgroundColor: "#F6F6F6", paddingInline: { xs: "5%", md: "10%", }, paddingBottom: { xs: "2%", md: "5%", } }}>
          <WhomSection></WhomSection>
          <WhySection></WhySection>
          <HowSection></HowSection>
          <CTASection></CTASection>
          {/* <StatsSection></StatsSection> */}
        </Box></Box>
    </ThemeProvider>
  )
}

export default Home;