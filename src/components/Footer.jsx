import { Telegram, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { AppBar, Box, Button, CardMedia } from '@mui/material';
import React from 'react'
import Discord from '../assets/icon/Discord.jsx';

const _socialMedia = [
	[<Twitter />],
	[<Instagram />],
	[<Telegram />],
	[<LinkedIn />],

]

const style = {
	height: { xs: "20px", md: "30px" },
	width: { xs: "20px", md: "30px" },
	color: "black",
	display: "inline",
	fontSize: { xs: 30, md: 40 },
	padding: { xs: "0.3rem", md: "0.4rem" },
	margin: "0.5rem",
	borderRadius: "50%",
	boxShadow: "0px 11px 11px -6px rgba(0, 0, 0, 0.25)"
}
const Footer = () => {
	return (
		<Box sx={{
			positiom: "relative",
			display: "flex",
			flexDirection: { xs: "column-reverse", md: "row" },
			justifyContent: { xs: "center", md: "space-between" },
			alignItems: "center",
			width: "100vw",
			background: "#FFFFFF", color: "gray",
			top: 'auto',
			paddingInline: { xs: "1vw", md: "6vw" },
			bottom: 0,
			boxSizing: "border-box",
			borderTop: "0.1px solid gray"
		}}>

			<Box sx={{ margin: { xs: "0.4rem", md: "1rem", } }}>Copyright © 2022 Venture Discovery</Box>
			<Box >
				<Twitter sx={style} />
				<Box sx={style} >
					<Discord />
				</Box>
				<Telegram sx={style} />
				<LinkedIn sx={style} />
				<Instagram sx={style} />
			</Box>
		</Box>
	)
}

export default Footer;