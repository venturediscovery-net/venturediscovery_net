import React from 'react'
import { Grid, Paper, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import getString from '../../assets/data/getString';
import CheckIcon from '@mui/icons-material/Check';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const why_list = [
	"Test your classroom learnings & model with real world beta users.",
	"Add credibility to your development & coding capabilities could help meaningfully in job placement.",
	"Collect feedback on your startup idea could also help in fund raising!",
	"Not a coder? Lend a helping hand to a friend & community could help in job or startup venture by joining our Beta user community!",
]

let theme = createTheme({
	components: {
		MuiTypography: {
			styleOverrides: {
				root: {
					'@media (min-width:900px)': {
						fontSize: "1.5rem",
					}
				}
			}
		}
	}
});


// function ListItem(props) {
// 	return <li style={{ padding: "1rem", fontSize: { xs: '1.5rem', md: "3rem" } }}>{props.value}</li>;
// }

const WhySection = () => {

	const Link = 'url("./assets/icon/circle.svg")';

	const listItems = why_list.map((item, index) =>
		<ListItem key={index}>
			<ListItemIcon sx={{ minWidth: 'auto', mr: { xs: 1.5, md: 2.5 } }}>
				<CheckIcon
					sx={{
						'@media (min-width:900px)': {
							fontSize: "2rem",
						},
						color: "lightSkyBlue",
						stroke: "lightSkyBlue",
						strokeWidth: 1
					}} />
			</ListItemIcon>
			<ThemeProvider theme={theme}>
				<ListItemText primary={item} sx={{ fontSize: "2rem" }} />
			</ThemeProvider>
		</ListItem>
	);

	return (
		<Paper elevation={3}
			sx={{
				marginInline: { md: "3rem", xs: "2vw" },
				marginBlock: { md: "3rem", xs: "1rem" },
				padding: { md: "2.5rem", xs: "1rem", },
			}}>
			<Box sx={{ display: 'flex', alignItems: "center" }} >
				<Typography
					variant='h4'
					sx={{
						fontSize: { xs: '1.5rem', md: "3.5rem" },
						padding: { md: "1rem", xs: "1rem", },
						fontWeight: "400",
						color: "LightSkyBlue",
					}}>
					<b>Why?</b>
				</Typography>
			</Box>
			<List sx={{ listStyleImage: Link }}>
				{listItems}
			</List>
		</Paper>
	)
}

export default WhySection;