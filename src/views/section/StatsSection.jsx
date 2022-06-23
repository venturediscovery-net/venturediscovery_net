import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { React} from 'react';

const socialMediaNumbers =[
   [ 'twitter', "5000+",<Twitter sx={{ fontSize: 40 , padding:{xs:"0", md:"20px"}}}/>],
    ['instagram', "5000+",<Instagram sx={{ fontSize: 40  , padding:{xs:"0", md:"20px"}}}/>],
    ['facebook',    "5000+",<Facebook sx={{ fontSize: 40  , padding:{xs:"0", md:"20px"}}}/>],
    ['linkedIn', "5000+",<LinkedIn sx={{ fontSize: 40  , padding:{xs:"0", md:"20px"}}}/>],

]

const StatsSection = () => {


  return (
    <Grid 
        position = "alternate"
        spacing={3} 
        container 
        justifyContent="center" 
        alignContent="center"
        alignItems="center"
        sx={{ flexDirection: { xs:"column", md: "row", lg: "row"},
            marginBlock:  { md:"2.5rem",xs:"1rem"}}}>

    {socialMediaNumbers.map((socialMedia,Index) => 

        <Grid item xs={3}  key={Index}>
            <Card  sx={{display:"flex", justifyContent:"center", width:{sm:"150px", md:"200px"}, 
                    height:{sm:"150px", md:"200px"}, 
                    // marginleft:  { md:"2.5rem",xs:"1rem",},
                    border: "4px solid #A5CDF1",
                    borderRadius: "20px"}}
            >
                <CardContent sx={{textAlign:"center"}}>
                    <Typography variant="h3">{socialMedia[1]}</Typography>
                    <Typography variant="h5">{socialMedia[0]}</Typography>
                    {socialMedia[2]}
                </CardContent>
            </Card>
        </Grid>
 
    )}

    </Grid>
  )
}

export default StatsSection;
 {/* sx={{
                flexDirection:{ md:"row",sx:"column",}, 
                justifyContent:"space-between",
                marginInline:{md:"7rem", sm:"4rem", sx:"2rem"},
                marginBlock:{sx:"1rem" , md:"3rem"}, 
                padding:  { md:"2.5rem",xs:"1rem",},}} */}

