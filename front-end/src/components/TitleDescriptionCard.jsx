import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					boxShadow: '0px 30px 56px rgba(0, 0, 0, 0.08)',
					marginTop: '1.2rem',
					// width: '100%',
					'@media (min-width:600px)': {
						marginTop: '2.5rem',
					},
				},
			},
	  	},
		MuiTypography: {
			styleOverrides: {
				root: {
					fontFamily: 'Segoe UI'
				},
				h5: {
					fontSize: '1.2rem',
					'@media (min-width:600px)': {
						fontSize: '1.5rem',
					},
				},
				subtitle1: {
					lineHeight: 1.3,
					fontSize: '0.8rem',
					'@media (min-width:600px)': {
						fontSize: '1rem',
					},
				}
			},
		}
	},
});

const TitleDescriptionCard = (props) => {
	return (
		<ThemeProvider theme={theme}>
			<Card sx={{ 
				minWidth: 275,
				height: 'fit-content', 
				width: 'fit-content',
			}}>
				<CardContent sx={{ display: 'flex', flexDirection: 'column'}}>
					<Typography variant='h5' sx={{ fontWeight: '600' }} color="#484848" gutterBottom>
						{props.title}
					</Typography>
					{props.description.map((desc, index) => {
						if (index % 2 == 0) {
							return <Typography variant='subtitle1' color="#6B6B6B" key={index}>{desc}</Typography>
						} else {
							return <Typography variant='subtitle1' color="#6B6B6B" sx={{ my: 1.5 }} key={index}>{desc}</Typography>
						}
					})}
				</CardContent>
			</Card>
		</ThemeProvider>
	)
}

export default TitleDescriptionCard;