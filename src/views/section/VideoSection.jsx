import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import thumbnail from '../../assets/images/thumbnail.svg';
import getString from '../../assets/data/getString';


const VideoSection = () => {

  return (
    <Box sx={{ display:{xs:"none", md:"flex"},  flexDirection: "column", alignItems: "center", zIndex:"-10", width: "100vw", background: "linear-gradient(311.76deg, #D4E7FE -15.24%, #FFFFFF 78.85%)",}} >
        <Typography variant="h1" sx={{ paddingBlock: "2.5rem", fontSize: {xs: '20px',md:"40px"}, alignItems: "center", textAlign: "center",}} dangerouslySetInnerHTML={getString('title')} >
            
        </Typography>
<Typography variant='p'><i>"(watch the video below see what some of the college students thinks!)"</i></Typography>

        {/* <video poster={thumbnail} controls sx={{ width: {xs:'70vw', md:'40vw'}}} style={{ marginBottom: "4rem"}} src=""> <source src="" type="video/mp4"/></video> */}
       <Box><iframe  poster={thumbnail} width="560" height="315" src="https://www.youtube.com/embed/e8RCnG2ibJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Box> </Box>
        
  )
}

export default VideoSection;