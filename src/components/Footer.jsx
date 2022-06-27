import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { AppBar, Box, Button } from '@mui/material';
import React from 'react'

const _socialMedia = [
	[<Twitter />],
	[<Instagram />],
	[<Facebook />],
	[, <LinkedIn />],

]

const style = { color: "black", fontSize: 25, padding: "5px", margin: "5px", borderRadius: "50%", boxShadow: "0px 11px 11px -6px rgba(0, 0, 0, 0.25)" }
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
			boxSizing: "border-box"
		}}>

			<Box sx={{ margin: "20px", }}>Copyright © 2022 Venture Discovery</Box>
			<Box >
				<Twitter sx={style} />
				<Instagram sx={style} />
				<Facebook sx={style} />
				<LinkedIn sx={style} />
			</Box>
		</Box>
	)
}

export default Footer;