import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box,Button } from '@mui/material';
import React from 'react'

const _socialMedia = [
 [ <Twitter/>],
    [<Instagram/>],
    [<Facebook/>],
    [,<LinkedIn/>],

]

const style = {color:"black", fontSize:25, padding:"5px", margin:"5px",borderRadius:"50%", boxShadow: "0px 11px 11px -6px rgba(0, 0, 0, 0.25)"}
const Footer = () => {
  return (
    <footer style={{ display:"flex",
                    flexDirection:{xs: "column", md:"row"},
                    justifyContent:"space-between", 
                    alignItems:"center", 
                    width:"100vw", 
                    background: "#FFFFFF", color: "gray",
                    }}>
        
        <Box sx={{margin:"20px" ,paddingLeft: {xs:"7vw"}}}>Copyright © 2022 Venture Discovery</Box>
        <Box sx={{paddingRight: {xs:"7vw"}}}>
            <Twitter sx={style}/>
            <Instagram sx={style}/>
            <Facebook sx={style}/>
            <LinkedIn sx={style}/>
        </Box>
    </footer>
  )
}

export default Footer;