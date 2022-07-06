import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

const theme = createTheme({
	palette: {
		frenchSkyBlue: {
			main: '#FFC480',
		},
		ruddyPink: {
			main: '#E18D96',
		},
		ceil: {
			main: '#979EDF',
		}, 
		txtLight: {
			main: '#E18D96',
		}, 
		txtDark: {
			main: '#FFC480',
		},
		emerald: {
			main: '#62CD8D',
		},
		metalicGrad: {
		  main: 'rgba(130, 139, 185, 1)',
		},
		bodycolor:{
		  main: '#FCFDFF',
		},
		white:{
		  main: '#FFFFFF',
		},
		blue:{
		  main: '#217BF4',
		},
		testColor: {
			main: deepOrange[500],
		},
		xyzColor: {
			main: '#62CD8D',
		}
	},
});


const BetaCommunity = () => {
  	return (
		<ThemeProvider theme={theme}>
  	  		<Box sx = {{ background:'txtDark.main' }}>
  	  		    <Typography sx = {{ color:'txtDark.main' }}>BetaCommunity</Typography>
  	  		</Box>
		</ThemeProvider>
  	)
}

export default BetaCommunity;