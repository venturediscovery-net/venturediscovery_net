import React from 'react';
import {MenuItem, Grid, Paper,CardMedia, Typography , Box} from '@mui/material';
import getString from '../../assets/data/getString';
import {Timeline,TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent,TimelineOppositeContent,TimelineDot} from '@mui/lab';


const HowSection = () => {
  return (
    <Paper elevation={0}  sx={{ marginInline:{md:"7rem", sm:"4rem", sx:"2rem"},marginBlock:{md  :"3rem", sx:"1rem"  }, padding:  { md:"2.5rem",xs:"1rem",},}}>
     <Typography variant='h4' sx= {{fontSize: {xs: '20px',md:"40px"},}} dangerouslySetInnerHTML={getString('whyTitle')}></Typography>
    <Timeline position="alternate">
        <TimelineItem>
            <TimelineSeparator>
                    <TimelineDot>
                    </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">Step 01</Typography>
                <Typography>Register yourself as a Beta user, create your online persona.</Typography>
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector />
                    <TimelineDot color="primary"></TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">Step 02</Typography>
                <Typography>List problems you yourself are seeking solution to.</Typography>
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined"></TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">Step 03</Typography>
                <Typography>Write feedback for apps by other students and collect credit points.</Typography>
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot color="secondary"></TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">Step 04</Typography>
                <Typography>Use the credits to run survey for your own product, for free.</Typography>
            </TimelineContent>
        </TimelineItem>
    </Timeline> 
    </Paper>

  )
}

export default HowSection;
