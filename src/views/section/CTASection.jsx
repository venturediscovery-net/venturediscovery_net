import { Box, Typography, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import React from 'react'
import _signUpBlack from '../buttons/signUpBlack';

const CTASection = () => {

    // const path = '/login';
    const [value, setValue] = React.useState('female');

    const [p_value, setPValue] = React.useState('female');


    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handlePChange = (event) => {
        setPValue(event.target.p_value);
    };
    return (
        <Box sx={{
            background: "linear-gradient(262.34deg, #828BB9 -26.28%, #AFE9FF 38.19%, #9CA8E7 119.38%)",
            borderRadius: "30px",
            marginInline: { md: "3rem", xs: "2vw" },
            marginBlock: { xs: "1rem", md: "3rem" },
            padding: { md: "5rem", xs: "1rem", },
            display: "Flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Typography
                variant='h6'
                sx={{
                    textAlign: "center",
                    fontSize: { xs: '1.5rem', md: "2.5rem" },
                    fontFamily: 'Frank Ruhl Libre'
                }}>
                We’re in process of creating a community
            </Typography>
            <Typography
                variant='body1'
                sx={{
                    textAlign: "center",
                    paddingInline: { md: "2rem", xs: "1rem", },
                    paddingBottom: { md: "2rem", xs: "1rem", },
                    borderBottom: "1px solid black",
                    fontFamily: 'Inter',
                    lineHeight: '1.25rem'
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nibh duis id ipsum non phasellus cum volutpat, dapibus. Purus nulla odio venenatis egestas velit tempor. Ac.
            </Typography>
            <Typography
                variant='h6'
                sx={{
                    paddingTop: "2rem",
                    textAlign: "center",
                    fontSize: { xs: '1.5rem', md: "2.5rem" },
                    fontFamily: 'Frank Ruhl Libre',
                    lineHeight: "2.75rem"
            }}>
                Be the 1st to know Beta User Community launch. Register today!
            </Typography>
            <ol>
                <li style={{ margin: "10px", }}>I am a -</li>
                <Box sx={{ display: "flex" }}>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Tech Student" />
                            <FormControlLabel value="male" control={<Radio />} label="User Only" />
                            <FormControlLabel value="other" control={<Radio />} label="Both" />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <li style={{ margin: "10px", }}>Would love to participate as a -</li>
                <Box>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="rowradio-buttons-group"
                        value={p_value}
                        onChange={handlePChange}>
                        <FormControlLabel p_value="female" control={<Radio />} label="Tech Student" />
                        <FormControlLabel p_value="male" control={<Radio />} label="User Only" />
                        <FormControlLabel p_value="other" control={<Radio />} label="Both" />
                    </RadioGroup>
                    {/* <Button variant="outlined" sx={{margin:"10px", width:"6rem"}}>Tech Student</Button>
                    <Button variant="outlined" sx={{margin:"10px", width:"6rem"}}>User Only</Button>
                    <Button variant="outlined" sx={{margin:"10px", width:"6rem"}}>Both</Button> */}
                </Box>
            </ol>
            <div>
                <_signUpBlack ></_signUpBlack>
            </div>
        </Box>
    )
}

export default CTASection;