import * as React from 'react';
import Card from '@mui/material/Card';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ClickAwayListener, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { questionSelected, questionDeSelected } from '../../misc/MiscellaneousFunctions';

let theme = createTheme({
    components: {
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					marginTop: '1.2rem',
                    boxShadow: 'none',
                    paddingInline: 25,
                    paddingTop: 20,
                    paddingBottom: 30,
                    background: 'none',
                    transition: '0.2s',
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
				},
			},
		},
        MuiTextField: {
            styleOverrides: {
                root: {
                    width: '60%',
                    marginTop: '0.5rem',
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    '&:after': {
                        borderBottom: '2px solid #6C6C6C',
                    },
                    fontFamily: 'Segoe UI',
                },
            }
        }
    },
});

const ShortAnswerTextQCard = (props) => {

    return (
        <ThemeProvider theme={theme}>
            <ClickAwayListener onClickAway={() => questionDeSelected(props.id)}>    
                <Card 
                    className={"qcard" + props.id}
                    sx={{ 
			        	minWidth: 275,
			        	height: 'fit-content', 
			        	width: '100%',
                        display: 'flex',
                        flexDirection: 'row'
			        }}
                    onClick={() => questionSelected(props.id)}
                >
                    <Box sx={{ mt: 0.5 }}>
                        <Typography variant='subtitle2' color="#101828">Q{props.id}</Typography>
                    </Box>
                    <Box sx={{ ml: 2, width: '100%' }}>    
                        <Typography variant='h5' color="#101828">{props.qText} *</Typography>
                        <TextField variant='standard' placeholder='Type your answer…'></TextField>
                    </Box>
                </Card>
            </ClickAwayListener>
        </ThemeProvider>
    )
}

export default ShortAnswerTextQCard;