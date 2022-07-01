import { Telegram, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { AppBar, Box, Button, CardMedia, IconButton } from '@mui/material';
import React from 'react'
import Discord from '../assets/icon/Discord.jsx';

const _socialMedia = [
	[<Twitter />],
	[<Instagram />],
	[<Telegram />],
	[<LinkedIn />],

]

const styleBox = {
	height: { xs: "28px", md: "38px" },
	width: { xs: "28px", md: "38px" },
	// padding: 0,
	display: "inline",
	margin: "0.5rem",
	display:"flex",
	flexDirection:"column",
	// borderRadius: "50%",
	// boxShadow: "0px 11px 11px -6px rgba(0, 0, 0, 0.25)"
}
const style = {
	height: { xs: "20px", md: "30px" },
	width: { xs: "20px", md: "30px" },
	color: "black",
	padding: "0.2rem",
	
	fontSize: { xs: 30, md: 40 },
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
			<Box sx={{display:"flex"}}>
				<IconButton href="https://twitter.com/VentureDis_net" target="_blank" sx={styleBox}>
					<Twitter sx={style} />
				</IconButton>
				<IconButton href="https://t.me/venturediscovery" target="_blank" sx={styleBox}>
					<Telegram sx={style} />
				</IconButton>
				<IconButton href="https://discordapp.com/users/venturediscovery_net#4413" target="_blank" sx={styleBox}>
					<Discord sx={style} />
				</IconButton>
				<IconButton href="https://www.linkedin.com/in/venture-discovery-b8095a242/" target="_blank" sx={styleBox}>
					<LinkedIn sx={style} />
				</IconButton>
				<IconButton href="https://twitter.com/VentureDis_net" target="_blank" sx={styleBox}>
					<Instagram sx={style} />
				</IconButton>
				<Box  >
				</Box>
			</Box>
		</Box>
	)
}

export default Footer;