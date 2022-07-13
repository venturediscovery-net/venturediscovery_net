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
					fontSize: '1.2rem',
					'@media (min-width:600px)': {
						fontSize: '1.5rem',
					},
				},
			},
		},
        MuiTextField: {
            styleOverrides: {
                root: {
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
    let qID = props.id;

    const handleTextFieldAnswer = (event) => {
        if (event.target.value != "") {
            props.setMarkedAnswers({
                ...props.markedAnswers,
                [qID]: event.target.value,
            });
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <ClickAwayListener onClickAway={() => questionDeSelected(qID)}>    
                <Card 
                    className={"qcard" + qID}
                    sx={{ 
                        paddingInline: { xs: '15px', sm: '25px' },
                        paddingTop: { xs: '15px', sm: '20px' },
                        paddingBottom: { xs: '25px', sm: '30px' },
			        	minWidth: 275,
			        	height: 'fit-content', 
			        	width: '100%',
                        display: 'flex',
                        flexDirection: 'row'
			        }}
                    onClick={() => questionSelected(qID)}
                >
                    <Box>
                        <Typography variant='subtitle1' color="#101828">Q{qID}</Typography>
                    </Box>
                    <Box sx={{ ml: {xs: 1.5, sm: 2}, width: '100%' }}>    
                        <Typography sx = {{ mb: { xs: '8px' } }} variant='h5' color="#101828">{props.qText} *</Typography>
                        <TextField onBlur={handleTextFieldAnswer} sx = {{ width: {xs: '80%', sm: '60%'} }} variant='standard' placeholder='Type your answer…'></TextField>
                    </Box>
                </Card>
            </ClickAwayListener>
        </ThemeProvider>
    )
}

export default ShortAnswerTextQCard;