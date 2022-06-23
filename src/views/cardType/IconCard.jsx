import { Card, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";


 const  IconCard = (props) => {
    return(
    <>
        {props.details.map((detail,index) => 
            <Box key = {index} sx={{display:"flex", flexDirection:"column", alignItems:"center", }}> 
                <CardMedia
                        sx={{ display: "flex", backgroundColor:detail.iconbg , borderRadius: "10px", width: '40px', height: '40px', transform: "translate(-6rem,30px)", padding: "10px" }}
                        component="img"
                        image={detail.icon}
                        alt="User" />
                    <Card sx={{ width: 235, padding: 3 }}>
                    
                    <Typography variant="h4" sx={{ textAlign: "right", fontWight: "" }}>{detail.title}</Typography>
                    <p style={{ textAlign: "right", margin:0 }}>You have built a web /mobile app but unable to test with real users</p>
                </Card>
            </Box>
        )}
    </>

    )
}
export default IconCard;