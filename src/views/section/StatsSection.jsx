import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { React} from 'react';

const socialMediaNumbers =[
   [ 'Users', "5000+",<Twitter sx={{ fontSize: 40 , padding:{xs:"0", md:"20px"}}}/>],
    ['Students', "5000+",<Instagram sx={{ fontSize: 40  , padding:{xs:"0", md:"20px"}}}/>],
    // ['facebook',    "5000+",<Facebook sx={{ fontSize: 40  , padding:{xs:"0", md:"20px"}}}/>],
    ['Developers', "5000+",<LinkedIn sx={{ fontSize: 40  , padding:{xs:"0", md:"20px"}}}/>],

]

const StatsSection = () => {


  return (
    <Box sx={{
                marginInline:{md:"7rem", sm:"4rem", sx:"2rem"},
                marginBlock:{sx:"1rem" , md:"3rem"}, 
                padding:  { md:"2.5rem",xs:"1rem",},}}>
    <Typography variant="h3">We are a community of:"</Typography>
    <Box
        sx={{   display:"flex",
                flexDirection:"row", 
                justifyContent:"space-between", 
                flexWrap:"wrap",}}>

    {socialMediaNumbers.map((socialMedia,Index) => 

            <Card key={Index}  
                    sx={{display:"flex",
                        flexDirection:"column", 
                        justifyContent:"center",  
                        width:{xs:"150px", md:"200px"}, 
                        height:{xs:"150px", md:"200px"}, 
                        margin:  { md:"2.5rem",xs:"1rem",},
                        border: "4px solid #A5CDF1",
                        textAlign:"center",
                        borderRadius: "20px"}}
            >
                    <Typography variant="h3">{socialMedia[1]}</Typography>
                    <Typography variant="h5">{socialMedia[0]}</Typography>
                    {/* {socialMedia[2]} */}
            </Card>
 
    )}

    </Box>
    </Box>
  )
}

export default StatsSection;
 {/* sx={{
                flexDirection:{ md:"row",sx:"column",}, 
                justifyContent:"space-between",
                marginInline:{md:"7rem", sm:"4rem", sx:"2rem"},
                marginBlock:{sx:"1rem" , md:"3rem"}, 
                padding:  { md:"2.5rem",xs:"1rem",},}} */}

