import { Typography, CardMedia } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import thumbnail from '../../assets/images/thumbnail.svg';
import getString from '../../assets/data/getString';


const VideoSection = () => {

	return (
		<Box sx={{
			color: "#383838",
			display: { xs: "flex" },
			paddingBlock: { xs: "3vh", md: "9%" },
			flexDirection: { xs: "column", md: "row" },
			justifyContent: "space-between",
			alignItems: {xs:"center", md:"left"},
			zIndex: "-10",
			background: "GhostWhite",
		}} >

			<Box sx={{ flexGrow: 1, textAlign:  {xs:"center", md:"left"}, justifyContent: "center", }}>
				<Typography
					variant="h2"
					component="h1"
					sx={{
						fontSize: { xs: '2rem', md: "4vw", xl: "4rem" },
						fontWeight: "400",
					}}
				>
					Have an Unsolved Problem / Unserved Need?
				</Typography>

				<Typography variant='h3'
					mt={3}
					mb={5}
					sx={{
						fontSize: { xs: '1.5rem', md: "3vw", xl: "3.5rem" },
						fontWeight: "500",
					}} >
					Be a part of the <b>Solution!</b>
				</Typography>
			</Box>

			<Box sx={{ flexGrow: 2, paddingInline: "2rem", width: "80%" }} >

				{/* <video poster={thumbnail} controls sx={{ maxWidth: "100%", height:"auto"}}  src=""> <source src="" type="video/mp4"/></video> */}
				{/* <iframe  poster={thumbnail} width="560" height="315" src="https://www.youtube.com/embed/e8RCnG2ibJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
				<CardMedia
					sx={{ marginBottom: "2rem", display: "flex", borderRadius: "10px", maxWidth: '100vw', height: 'auto' }}
					component="video"
					allowFullScreen
					video="https://www.youtube.com/embed/e8RCnG2ibJk"
					title="YouTube video player"
					frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					// src="https://www.youtube.com/embed/e8RCnG2ibJk"
					poster={thumbnail}
					alt="User" />
				<Typography variant='p'><i>"(watch the video above see what some of the college students thinks!)"</i></Typography>

			</Box>
		</Box>

	)
}

export default VideoSection;