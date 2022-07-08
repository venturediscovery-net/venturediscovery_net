import { Box, Typography } from '@mui/material';
import React from 'react'
import _signUpBlack from '../buttons/signUpBlack';

const CTASection = () => {

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
                    fontSize: { xs: '1.5em', md: "2.5em" },
                    fontFamily: 'Inter',
                    lineHeight: "1.2em",
                    margin: "1rem"
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
                    lineHeight: '1.75rem',
                    fontWeight: '500',
                    '@media (min-width:900px)': {
                        fontSize: "1.25rem",
                    },
                    color: '#000000'
                }}>
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nibh duis id ipsum non phasellus cum volutpat, dapibus. Purus nulla odio venenatis egestas velit tempor. Ac.
                 */}
                We're building a platform for the startups to provide them with feedback from the beta users! 
                All you've to do is build your persona, create a survey to get feedback for your product (web / app) 
                from the beta user community on our platform. You can use the analytics which we provide to make 
                better decisions for the growth of your product. 

            </Typography>
            <Typography
                variant='h6'
                sx={{
                    paddingTop: "2rem",
                    textAlign: "center",
                    fontSize: { xs: '1.5rem', md: "2.5rem" },
                    fontFamily: 'Inter',
                    lineHeight: "2.75rem"
                }}>
                Be the 1st to know Beta User Community launch. Register today!
            </Typography>
            <_signUpBlack ></_signUpBlack>
        </Box>
    )
}

export default CTASection;