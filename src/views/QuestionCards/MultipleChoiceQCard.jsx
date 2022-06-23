import * as React from 'react';
import Card from '@mui/material/Card';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ClickAwayListener, FormControlLabel, TextField, Typography, Checkbox, Radio, RadioGroup } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

let theme = createTheme({
    components: {
		MuiCard: {
			styleOverrides: {
				root: {
                    minWidth: 275,
			        height: 'fit-content', 
			        width: '75%',
                    display: 'flex',
                    flexDirection: 'row',
					borderRadius: 8,
					marginTop: '1.2rem',
                    boxShadow: 'none',
                    paddingInline: 30,
                    paddingTop: 25,
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
                    fontFamily: 'Inter',
                },
            }
        }
    },
});

const MultipleChoiceQCard = (props) => {
    const [ans, setAns] = useState('');

    const questionSelected = () => {
        let questionCard = document.querySelector(".multiple_choice_qcard");
        questionCard.style.background = 'white';
        questionCard.style.boxShadow = '0px 30px 56px rgba(0, 0, 0, 0.08)';
    }

    const questionDeSelected =() => {
        let questionCard = document.querySelector(".multiple_choice_qcard");
        questionCard.style.background = 'none';
        questionCard.style.boxShadow = 'none';
    }

    let qID = props.id;
    // setAns(e.target.value);

    return (
        <ThemeProvider theme={theme}>
            <ClickAwayListener onClickAway={questionDeSelected}>    
                <Card className={"multiple_choice_qcard" + qID} onClick={questionSelected}>
                    <Box sx={{ mt: 1.25 }}>
                        <Typography variant='subtitle1' color="#101828">{qID? "Q" + qID : ""}</Typography>
                    </Box>
                    <Box sx={{ ml: 2.5, width: '100%' }}>
                        <Typography variant='h4' color="#101828" sx={{ mb: 3 }}>{props.qText} *</Typography>
                        <RadioGroup value={ans} onChange={(e) => { props.setSurveyAnswers({ qID: e.target.value }) }}> 
                            {props.qOptions.map((option, index) => {
                                // console.log(option);
                                return (    
                                    <Box key={index} sx = {{ width: '100%', display: 'flex', flexDirection: 'row',  position: 'relative', alignItems: 'center', mb: 1.5 }}>
                                        <FormControlLabel value={"Student"} control={<Radio />} />
                                        <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                background: '#F9FAFB',
                                                border: '0.1rem solid #D0D5DD',
                                                borderRadius: '0.4rem',
                                                width: '2.25rem',
                                                height: '2.25rem',
                                                mr: 2,
                                                '&:hover': {
                                                    border: '0.1rem solid #475467',
                                                }
                                            }}>
                                            <Typography sx={{ fontSize: '1.15rem', color: '#344054' }}>{index + 1}</Typography>
                                        </Box>
                                        <Typography sx={{ fontSize: '1.15rem', color: '#344054' }}>{option}</Typography>
                                        {option == "Other" ? <TextField variant='standard' sx={{ ml: 2 }}/> : ""}    
                                    </Box>
                                )
                            })}
                            
                            {/* <Box clasNames="opt_child" sx = {{ width: '100%', display: 'flex', flexDirection: 'row',  position: 'relative', alignItems: 'center', mb: 1.5 }}>
                                <FormControlLabel value={"Student"} control={<Radio />} />
                                <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: '#F9FAFB',
                                        border: '0.1rem solid #D0D5DD',
                                        borderRadius: '0.4rem',
                                        width: '2.25rem',
                                        height: '2.25rem',
                                        mr: 2,
                                        '&:hover': {
                                            border: '0.1rem solid #475467',
                                        }
                                    }}>
                                    <Typography sx={{ fontSize: '1.15rem', color: '#344054' }}>A</Typography>
                                </Box>
                                <Typography sx={{ fontSize: '1.15rem', color: '#344054' }}>Student</Typography>
                            </Box>
                            <Box clasNames="opt_child" sx = {{ width: '100%', display: 'flex', flexDirection: 'row',  position: 'relative', alignItems: 'center', mb: 1.5 }}>
                                <FormControlLabel value="Qualified" control={<Radio />} />
                                <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: '#F9FAFB',
                                        border: '0.1rem solid #D0D5DD',
                                        borderRadius: '0.4rem',
                                        width: '2.25rem',
                                        height: '2.25rem',
                                        mr: 2,
                                        '&:hover': {
                                            border: '0.1rem solid #475467',
                                        }
                                    }}>
                                    <Typography sx={{ fontSize: '1.15rem', color: '#344054' }}>B</Typography>
                                </Box>
                                <Typography sx={{ fontSize: '1.15rem', color: '#344054' }}>Qualified</Typography>
                            </Box>
                            <Box clasNames="opt_child" sx = {{ width: '100%', display: 'flex', flexDirection: 'row',  position: 'relative', alignItems: 'center', mb: 1.5 }}>
                                <FormControlLabel value="Other" control={<Radio />} />
                                <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: '#F9FAFB',
                                        border: '0.1rem solid #D0D5DD',
                                        borderRadius: '0.4rem',
                                        width: '2.25rem',
                                        height: '2.25rem',
                                        mr: 2,
                                    }}>
                                    <Typography sx={{ fontSize: '1.15rem', color: '#344054' }}>C</Typography>
                                </Box>
                                <Typography sx={{ fontSize: '1.15rem', color: '#344054' }}>Other: </Typography>
                                <TextField variant='standard' sx={{ ml: 2 }}/>
                            </Box> */}
                        </RadioGroup>
                    </Box>
                </Card>
            </ClickAwayListener>
        </ThemeProvider>
    )
}

export default MultipleChoiceQCard;