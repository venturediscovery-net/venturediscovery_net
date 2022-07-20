import { Typography, CardMedia } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import thumbnail from '../../assets/images/thumbnail.svg';
import getString from '../../assets/data/getString';
import _signUpBlack from '../buttons/signUpBlack';

const VideoSection = () => {

	return (
		<Box sx={{
			color: "#383838",
			display: { xs: "flex" },
			paddingBlock: { xs: "3vh", md: "5vh" },
			flexDirection: { xs: "column", md: "row" },
			justifyContent: "space-between",
			alignItems: { xs: "center", md: "left" },
			zIndex: "-10",
			background: "#ECF5F7",
			height: "90%"
		}} >

			<Box sx={{ marginLeft: "10vw", flexGrow: 1, textAlign: { xs: "center", md: "left" }, justifyContent: "center", }}>
				<Typography
					variant="h2"
					component="h1"
					sx={{
						fontSize: { xs: '2rem', md: "4vw", xl: "4rem" },
						fontWeight: "400",
					}}
				>
					Are you a tech student? <br /> Not being able to test your app / web project?
				</Typography>

				<Box sx={{ display: { xs: "none", md: "block" }, }} >
					<_signUpBlack></_signUpBlack><br />
					<Typography variant='p'>Register to know more about us!</Typography>
				</Box>
			</Box>

			<Box sx={{ flexGrow: 2, paddingInline: "2rem", width: "80%" }} >

				<Typography variant='h3'
					mt={3}
					mb={5}
					sx={{
						textAlign: "center",
						fontSize: { xs: '1.5rem', md: "3vw", xl: "3.5rem" },
						fontWeight: "500",
					}} >
					Be a part of the <b>Solution!</b>
				</Typography>
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
				<Typography variant='p'><i>"(Watch the video above to see what college students think!!)"</i></Typography>

			</Box>
		</Box>

	)
}

export default VideoSection;