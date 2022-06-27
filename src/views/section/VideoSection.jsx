import { Typography, CardMedia } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import thumbnail from '../../assets/images/thumbnail.svg';
import getString from '../../assets/data/getString';


const VideoSection = () => {

  return (
    <Box sx={{ display:{xs:"flex", md:"flex"},  flexDirection: "column", alignItems: "center", zIndex:"-10", width: "100vw", background: "GhostWhite",}} >

    <Box sx={{ paddingBlock: "1.5rem",alignItems: "center", textAlign: "center",}}>
        <h1 
          variant="h1" style={{ fontSize: {xs: '2rem',md:"3.5rem"}, }}  >Have an Unsolved Problem / Unserved Need ?</h1>
        <h1 variant='h4'style={{ fontSize: {xs: '2rem',md:"3.5rem"}, }}> Be a part of the Solution!</h1>
    </Box>
        <Typography variant='p'><i>"(watch the video below see what some of the college students thinks!)"</i></Typography>

        <Box >
            {/* <video poster={thumbnail} controls sx={{ maxWidth: "100%", height:"auto"}}  src=""> <source src="" type="video/mp4"/></video> */}
                {/* <iframe  poster={thumbnail} width="560" height="315" src="https://www.youtube.com/embed/e8RCnG2ibJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <CardMedia
                            sx={{marginBlock:"2rem", display: "flex",  borderRadius: "10px", maxWidth: '100vw', height: 'auto' }}
                            component="video"
                            allowFullScreen
                            video="https://www.youtube.com/embed/e8RCnG2ibJk"
                            title="YouTube video player"
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            // src="https://www.youtube.com/embed/e8RCnG2ibJk"
                            poster={thumbnail}
                            alt="User" />
        </Box> 
    </Box>
        
  )
}

export default VideoSection;