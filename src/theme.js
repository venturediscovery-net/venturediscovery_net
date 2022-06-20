import { createTheme } from '@mui/material/styles';

let theme = createTheme({
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
  	  	  	main: '#3A3A3A',
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
  	},
	components: {
		MuiTypography: {
			styleOverrides: {
				root: {
					fontFamily: ['Inter']
				},
			}
		}
	}
});

export default theme;