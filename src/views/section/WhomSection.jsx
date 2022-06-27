import { Box, Typography, Container } from '@mui/material';
import React from 'react'
// import theme from '../../theme';
import iconCardData from "../../assets/data/iconCardData";
import getString from '../../assets/data/getString';
import IconCard from '../cardType/IconCard';

const WhomSection = () => {
  return (
    <Box sx={{ marginInline:{md:"7rem", sm:"4rem", sx:"2rem"}, paddingBlock: "2.5rem",}} >
        <Typography variant='h4' sx= {{color:"LightSkyBlue", fontSize: {xs: '20px',md:"40px"},}}>For </Typography><Typography variant='h4'>whom:</Typography>
        <Container sx={{ display: "flex", justifyContent:"space-around" , flexWrap:"wrap", flexDirection: {md:"row"}}}>
            <IconCard  details ={iconCardData} />
        </Container>
    </Box>
  )
}

export default WhomSection;