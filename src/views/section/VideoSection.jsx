import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import thumbnail from '../../assets/images/thumbnail.svg';
import getString from '../../assets/data/getString';


const VideoSection = () => {

  return (
    <Box sx={{ display:"flex",  flexDirection: "column", alignItems: "center", zIndex:"-10", width: "100vw", background: "linear-gradient(311.76deg, #D4E7FE -15.24%, #FFFFFF 78.85%)",}} >
      <Typography variant="h1" sx={{ paddingBlock: "2.5rem", fontSize: {xs: '20px',md:"40px"}, alignItems: "center", textAlign: "center",}} dangerouslySetInnerHTML={getString('title')} >
        
      </Typography>
      <video poster={thumbnail} controls sx={{ width: {xs:'70vw', md:'40vw'}}} style={{ marginBottom: "4rem"}} src=""> <source src="" type="video/mp4"/></video>
    </Box>
        
  )
}

export default VideoSection;