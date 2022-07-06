import { Box, Typography, Container } from '@mui/material';
import React from 'react'
// import theme from '../../theme';
import iconCardData from "../../assets/data/iconCardData";
import getString from '../../assets/data/getString';
import IconCard from '../cardType/IconCard';

const WhomSection = () => {
  return (
    <Box sx={{color:"#383838",  paddingBlock: "2.5rem",}} >
		<Box sx={{ display: 'flex', alignItems:"center" }}>
			<Typography variant='h4' sx= {{fontWeight:"400", fontSize: {xs: '1.5rem',md:"3rem"}}}>&nbsp; For &nbsp;</Typography>
			<Typography variant='h4' sx={{color:"LightSkyBlue",fontSize: {xs: '1.5rem',md:"3.5rem"},fontWeight:"600", }}>whom:</Typography>
		</Box>
        <Box sx={{ display: "flex", justifyContent:"space-around" , flexWrap:"wrap", flexDirection: {md:"row"}}}>
            <IconCard  details ={iconCardData} />
        </Box>
    </Box>
  )
}

export default WhomSection;