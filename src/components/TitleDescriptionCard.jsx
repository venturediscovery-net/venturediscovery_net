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
					'@media (min-width:600px)': {
						marginTop: '2.5rem',
					},
				},
			},
	  	},
		MuiTypography: {
			styleOverrides: {
				root: {
					fontFamily: ['Inter']
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

const TitleDescriptionCard = () => {
	return (
		<ThemeProvider theme={theme}>
			<Card sx={{ 
				minWidth: 275,
				height: 'fit-content', 
				width: 'fit-content',
			}}>
				<CardContent sx={{ display: 'flex', flexDirection: 'column'}}>
					<Typography variant='h5' sx={{ fontWeight: 'bold' }} color="#484848" gutterBottom>
						Is user feedback on your web/app dev actionable?
					</Typography>
					<Typography variant='subtitle1' color="#6B6B6B">
						We are curious to know how do you/your friends test the practical application, 
						of theory lectures received in the college/institute regarding any new software development (web/app dev). 
						(It's a 2 min survey)
					</Typography>
					<Typography variant='subtitle1' color="#6B6B6B" sx={{ my: 1.5 }}>
						Also, at the end of the survey, there's a surprise for you :)
					</Typography>
					<Typography variant='subtitle1' color="#6B6B6B">
						This survey is being conducted by Venture Discovery which is building a platform 
						to strengthen the startup eco-system in India. Please note, your filling this form 
						would be considered as your consent to use the data for Venture Discovery's analysis. 
						At the end of the survey, we would be happy to share some of the anonymized survey 
						learnings/analytics which could help you in building and testing your software dev 
						projects more efficiently.
					</Typography>
				</CardContent>
			</Card>
		</ThemeProvider>
	)
}

export default TitleDescriptionCard;