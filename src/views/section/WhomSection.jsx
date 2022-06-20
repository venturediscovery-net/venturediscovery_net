import { Box, Typography } from '@mui/material';
import React from 'react'
import theme from '../../theme';

const WhomSection = () => {
  return (
    <Box sx={{ paddingInline:"7rem", paddingBlock: "2.5rem",}} >
        <Typography variant='h4' sx= {{fontSize: {xs: '20px',md:"40px"},}}>FOR WHOM IS THIS PLATFORM MEANT FOR ?</Typography>
    </Box>
  )
}

export default WhomSection;