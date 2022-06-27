import React from 'react';
import {MenuItem, Paper,CardMedia, Typography , Box, Button} from '@mui/material';
import { makeStyles } from '@mui/styles';
import getString from '../../assets/data/getString';
import {Timeline,TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent,TimelineOppositeContent,TimelineDot} from '@mui/lab';

const style = makeStyles({
TimelineItemCls: {
    "&:before":{
    content: "none",}
}})


const HowSection = () => {
 const classes = style();
  return (
    <Paper elevation={3}  sx={{ marginInline:{md:"7rem", sm:"4rem", sx:"2rem"},marginBlock:{md  :"3rem", sx:"1rem"  }, padding:  { md:"2.5rem",xs:"1rem",},border: "1px solid #D3D3D3"}}>
        
        <div styles={{display:"flex",
                    alignContent:"center",
                    flexDirection:"row"}} >
            <Typography 
                varient="h2" 
                sx= {{ 
                    color:"RosyBrown",
                    fontSize: {xs: '20px',md:"40px"},}} >
                How
            </Typography>
            <Typography
                varient="h2" 
                sx= {{
                    fontSize: {xs: '20px',md:"40px"},}}>
                does it work?
            </Typography>
        </div>
        <Box sx={{display:"flex",flexGrow:"1",justifyContent:"center",alignItem:"center", flexDirection:{xs:"column-reverse", md:"row"}}} >
            <Button variant="contained" sx={{top:"50%",flexGrow:"5", width:"30%",maxWidth:"100px", height:"20%",margin:"10%"}}>SignUp</Button>
            <Timeline  content="none"  sx={{flexGrow:"1"}}>
                <TimelineItem className={classes.TimelineItemCls}>
                    <TimelineSeparator>
                            <TimelineDot>
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">Step 01</Typography>
                        <Typography> <a href = "link">Register yourself as a Beta user, create your online persona.</a></Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem className={classes.TimelineItemCls}>
                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot color="primary"></TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">Step 02</Typography>
                        <Typography><a href = "link">List problems you yourself are seeking solution to.</a></Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem  className={classes.TimelineItemCls}>
                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined"></TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">Step 03</Typography>
                        <Typography><a href = "link">Write feedback for apps by other students and collect credit points.</a></Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem  className={classes.TimelineItemCls}>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            <TimelineDot color="secondary"></TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">Step 04</Typography>
                        <Typography><a href = "link">Use the credits to run survey for your own product, for free.</a></Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline> 
        </Box>
    </Paper>
  )
}

export default HowSection;
