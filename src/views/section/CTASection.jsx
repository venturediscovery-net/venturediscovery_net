import { Box, Typography } from '@mui/material';
import React from 'react'
import _signUpBlack  from '../buttons/signUpBlack';

const CTASection = () => {
  return (
    <Box sx={{background:"linear-gradient(262.34deg, #828BB9 -26.28%, #AFE9FF 38.19%, #9CA8E7 119.38%)", borderRadius: "30px",marginInline:{md:"7rem", sm:"4rem", sx:"2rem"},marginBlock:{sx:"2rem" , md:"3rem"}, padding:  { md:"5rem",xs:"1rem",} ,display:"Flex",flexDirection:"column", alignItems:"center"}}>
        <Typography 
            variant='h3' 
            sx={{textAlign:"center", 
                fontSize: {xs: '26px',md:"40px"},
				padding:  { md:"2rem",xs:"1rem",}}}>
            We’re in process of creating a community
        </Typography>
        <Typography 
            variant='body1' 
            sx={{textAlign:"center", 
                paddingInline:{ md:"2rem",xs:"1rem",}}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nibh duis id ipsum non phasellus cum volutpat, dapibus. Purus nulla odio venenatis egestas velit tempor. Ac.
        </Typography>
        <div>
        <_signUpBlack></_signUpBlack></div>
    </Box>
  )
}

export default CTASection;