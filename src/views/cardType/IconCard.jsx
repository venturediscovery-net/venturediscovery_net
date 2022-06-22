import { Card, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";


 const  IconCard = (props) => {
    return(
    <>
        {props.details.map((detail,index) => 
            <Box key = {index}> 

                <Box sx={{ display: "flex", backgroundColor:detail.iconbg , borderRadius: "10px", width: '40px', height: '40px', transform: "translate(30px,30px)", padding: "10px" }}>
                    <CardMedia
                        component="img"
                        // sx={{ width: 0 }}
                        image={detail.icon}
                        alt="User" />
                </Box>
                <Card sx={{ width: 255, padding: 3 }}>
                    <Typography variant="h4" sx={{ textAlign: "right", fontWight: "" }}>{detail.title}</Typography>
                    <p style={{ textAlign: "right" }}>You have built a web /mobile app but unable to test with real users</p>
                </Card>
            </Box>
        )};     
    </>

    )
}
export default IconCard;