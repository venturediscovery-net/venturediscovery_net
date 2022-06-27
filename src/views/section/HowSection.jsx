import React from 'react';
import { MenuItem, Paper, CardMedia, Typography, Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import getString from '../../assets/data/getString';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import RateReviewIcon from '@mui/icons-material/RateReview';
import PollIcon from '@mui/icons-material/Poll';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@mui/lab';

const style = makeStyles({
    // TimelineItemCls: {
    //     "&:before": {
    //         content: "none",
    //     }
    // }
})


const HowSection = () => {
    const classes = style();
    return (
        <Paper elevation={3}
            sx={{
                marginInline: { md: "3rem", xs: "2vw" },
                marginBlock: { md: "3rem", xs: "1rem" },
                padding: { md: "2.5rem", xs: "1rem", },
                border: "1px solid #D3D3D3"
            }}>
            <Box sx={{ display: 'flex', alignItems: "center" }} >
                <Typography
                    varient="h2"
                    sx={{
                        color: "RosyBrown",
                        fontSize: { xs: '1.5rem', md: "3.5rem" },
                        fontWeight: "600",
                    }} >
                    How&nbsp;
                </Typography>
                <Typography
                    varient="h2"
                    sx={{
                        color: "#383838",
                        fontSize: { xs: '1.5rem', md: "3.5rem" },
                        fontWeight: "400",
                    }}>
                    does it work?
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexGrow: "1", justifyContent: "center", alignItem: "center", flexDirection: { xs: "column-reverse", md: "row" } }} >
                {/* <Button variant="contained" sx={{ top: "50%", flexGrow: "5", width: "30%", maxWidth: "100px", height: "20%", margin: "10%" }}>SignUp</Button> */}
                <Timeline position="alternate" content="none" sx={{ flexGrow: "1", maxWidth: "35rem" }}>
                    <TimelineItem className={classes.TimelineItemCls}>
                        <TimelineSeparator>
                            <TimelineDot>
                                <HowToRegIcon fontSize='large' />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: { xs: '1.5rem', md: "2rem" },
                                }}>
                                Step 01
                            </Typography>
                            <Typography>Register yourself as a Beta user, create your online persona.</Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem className={classes.TimelineItemCls}>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <PlaylistAddCheckIcon fontSize='large' />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: { xs: '1.5rem', md: "2rem" },
                                }}>Step 02</Typography>
                            <Typography>List problems you yourself are seeking solution to.</Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem className={classes.TimelineItemCls}>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined">
                                <RateReviewIcon fontSize='large' />
                            </TimelineDot>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: { xs: '1.5rem', md: "2rem" },
                                }}>Step 03</Typography>
                            <Typography>Write feedback for apps by other students and collect credit points.</Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem className={classes.TimelineItemCls}>
                        <TimelineSeparator>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            <TimelineDot color="secondary">
                                <PollIcon fontSize='large' />
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: { xs: '1.5rem', md: "2rem" },
                                }}>Step 04</Typography>
                            <Typography>Use the credits to run survey for your own product, for free.</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>
        </Paper>
    )
}

export default HowSection;
