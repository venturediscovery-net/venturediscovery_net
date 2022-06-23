import * as React from 'react';
import Card from '@mui/material/Card';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ClickAwayListener, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

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
					fontFamily: 'Inter'
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
                    fontFamily: 'Inter',
                },
            }
        }
    },
});

const ShortAnswerTextQCard = (props) => {

    const questionSelected = () => {
        let questionCard = document.querySelector(".short_answer_text_qcard");
        questionCard.style.background = 'white';
        questionCard.style.boxShadow = '0px 30px 56px rgba(0, 0, 0, 0.08)';
    }

    const questionDeSelected =() => {
        let questionCard = document.querySelector(".short_answer_text_qcard");
        questionCard.style.background = 'none';
        questionCard.style.boxShadow = 'none';
    }

    return (
        <ThemeProvider theme={theme}>
            <ClickAwayListener onClickAway={questionDeSelected}>    
                <Card 
                    className="short_answer_text_qcard"
                    sx={{ 
			        	minWidth: 275,
			        	height: 'fit-content', 
			        	width: '75%',
                        display: 'flex',
                        flexDirection: 'row'
			        }}
                    onClick={questionSelected}
                >
                    <Box sx={{ mt: 1.25 }}>
                        <Typography variant='subtitle2' color="#101828">Q{props.id}</Typography>
                    </Box>
                    <Box sx={{ ml: 2, width: '100%' }}>    
                        <Typography variant='h4' color="#101828">{props.qText} *</Typography>
                        <TextField variant='standard' placeholder='Type your answer…'></TextField>
                    </Box>
                </Card>
            </ClickAwayListener>
        </ThemeProvider>
    )
}

export default ShortAnswerTextQCard;