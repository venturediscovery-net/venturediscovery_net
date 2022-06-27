import { Card, CardMedia, responsiveFontSizes, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

// responsiveFontSizes
// const p_css = fontSize:{sx:"2rem", sm:"4vw", }

 const  IconCard = (props) => {
    return(
    <>
        {props.details.map((detail,index) => 
            <Box key = {index} sx={{display:"flex", flexDirection:"column", alignItems:"center", }}> 
                <CardMedia
                        sx={{ display: "flex", backgroundColor:detail.iconbg , borderRadius: "10px", width: '40px', height: '40px', transform: "translate(-5.5rem,30px)", padding: "10px" }}
                        component="img"
                        image={detail.icon}
                        alt="User" />
                <Card sx={{ width: 235,height:120, padding: 3,borderRadius: "15px", boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.19)"}}>
                    
                    <Typography variant="h4" sx={{ textAlign: "right", fontWight: "500" , borderBottom:"0.5px solid gray", transform: "translate(0,-1rem)"}}>{detail.title}</Typography>
                    <p style={{ textAlign: "right", margin:5 }}>{detail.desc}</p>
                </Card>
            </Box>
        )}
    </>

    )
}
export default IconCard;