import * as React from 'react';
import Card from '@mui/material/Card';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ClickAwayListener, FormControlLabel, TextField, Typography, Radio, RadioGroup } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { questionSelected, questionDeSelected } from '../../misc/MiscellaneousFunctions';
import '../../styles/question.css';

let theme = createTheme({
    components: {
		MuiCard: {
			styleOverrides: {
				root: {
                    minWidth: 275,
			        height: 'fit-content', 
			        width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
					borderRadius: 8,
					marginTop: '1.2rem',
                    boxShadow: 'none',
                    background: 'none',
                    transition: '0.2s',
					'@media (min-width:600px)': {
						marginTop: '2rem',
					},
				},
			},
	  	},
        MuiTypography: {
			styleOverrides: {
				root: {
					fontFamily: 'Inter',
				},
				h5: {
					fontSize: '1rem',
					'@media (min-width:600px)': {
						fontSize: '1.5rem',
					},
				},
				subtitle1: {
					lineHeight: 1.3,
					fontSize: '1rem',
					'@media (min-width:600px)': {
						fontSize: '1.5rem',
					},
				},
			},
		},
        MuiRadio: {
            styleOverrides: {
                root: {
                    opacity: 0,
                    position: 'absolute',
                    width: '100%',
                    height: '2.449375rem',
                    cursor: 'pointer',
                    margin: 0,
                }
            }
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    margin: 0,
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    '&:after': {
                        borderBottom: '2px solid #6C6C6C',
                    },
                    '@media (max-width:600px)': {
                        fontSize: '0.9rem'
                    },
                    '@media (min-width:600px)': {
                        fontSize: '1.15rem'
                    },
                    fontFamily: 'Inter',
                },
            }
        }
    },
});

const MultipleChoiceQCard = (props) => {
    let qID = props.id;
    
    const otherOptionHandler = (event) => {
        event.target.parentElement.parentElement.parentElement.previousSibling.previousSibling.checked = true;
    }

    const handleOptionChange = (event) => {
        if (event.target.type == "radio") {
            if (event.target.nextSibling.nextSibling.innerText.includes("Other:")) {
                event.target.nextSibling.nextSibling.childNodes[1].childNodes[0].childNodes[0].focus();
            } else if (event.target.checked) {
                if (event.target.parentElement.parentElement.lastChild.childNodes[2].childNodes.length == 2) {
                    if (event.target.parentElement.parentElement.lastChild.childNodes[2].childNodes[1].childNodes[0].childNodes[0].value != "") {
                        event.target.parentElement.parentElement.lastChild.childNodes[2].childNodes[1].childNodes[0].childNodes[0].value = "";
                    }
                }
                props.setMarkedAnswers({
                    ...props.markedAnswers,
                    [qID]: event.target.nextSibling.nextSibling.innerText,
                });
            }
        } else if (event.target.type == "text") {
            if (event.target.value != "") {
                props.setMarkedAnswers({
                    ...props.markedAnswers,
                    [qID]: event.target.value,
                });
            }
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <ClickAwayListener onClickAway={() => questionDeSelected(qID)}>    
                <Card
                    sx = {{
                        paddingInline: { xs: '15px', sm: '30px' },
                        paddingTop: { xs: '15px', sm: '25px' },
                        paddingBottom: { xs: '20px', sm: '30px' },
                    }} 
                    className={"qcard" + qID} 
                    onClick={() => questionSelected(qID)}>
                    
                    <Box>
                        <Typography variant='subtitle1' color="#101828">{qID? "Q" + qID : ""}</Typography>
                    </Box>
                    <Box sx={{ ml: {xs: 1.5, sm: 2.5}, width: '100%' }}>
                        <Typography variant='h5' color="#101828" sx={{ mb: {xs: 1.75, sm: 3} }}>{props.qText} *</Typography>
                        {props.qOptions.map((option, index) => {
                            return (    
                                <Box 
                                    className={"qcard" + qID + "McqOption" + (index + 1)} 
                                    key={index} 
                                    sx = {{ 
                                        width: '100%', 
                                        display: 'flex', 
                                        flexDirection: 'row', 
                                        position: 'relative', 
                                        alignItems: 'center', 
                                        mb: 1.5
                                    }}
                                >
                                    <input type="radio" name={"mcqOption" + qID} value={option} onChange={handleOptionChange} />
                                    <Box
                                        className = {"mcqOptionNumber"}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: '#F9FAFB',
                                            border: '0.1rem solid #D0D5DD',
                                            borderRadius: '0.4rem',
                                            width: {xs: '2rem', sm: '2.25rem'},
                                            height: {xs: '2rem', sm: '2.25rem'},
                                            mr: 2,
                                            transition: '0.1s',
                                        }}
                                    >
                                        <Typography sx={{ fontSize: {xs: '0.9rem', sm: '1.15rem'}, color: '#344054', transition: '.1s' }}>{index + 1}</Typography>
                                    </Box>
                                    {   
                                        option == "Other" 
                                        ? 
                                        <Typography 
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: { xs: '80%',  sm: '90%' }, 
                                                fontSize: {xs: '0.9rem', sm: '1.15rem'}, 
                                                color: '#344054' 
                                            }}>
                                                Other: <TextField onBlur={handleOptionChange} onFocus={otherOptionHandler} variant='standard' sx={{ fontSize: {xs: '0.9rem', sm: '1.15rem'}, width: { xs: '70%', sm: '50%' }, ml: {xs: 1, sm: 1.5} }}/>
                                        </Typography>
                                        : 
                                        <Typography 
                                            sx={{ 
                                                width: { xs: '80%', sm: '90%' }, 
                                                fontSize: {xs: '0.9rem', sm: '1.15rem'},
                                                lineHeight: {xs: 1.2, sm: 1.2}, 
                                                color: '#344054' 
                                            }}>
                                                {option}
                                        </Typography>
                                    }    
                                </Box>
                            )
                        })}
                    </Box>
                </Card>
            </ClickAwayListener>
        </ThemeProvider>
    )
}

export default MultipleChoiceQCard;