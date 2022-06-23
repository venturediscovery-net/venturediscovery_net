import React from 'react';
import {Button} from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';


const _signUpBlack = () => {
  return(
          <Button 
                sx={{backgroundColor:"Black", 
                    borderRadius:"30px", height:{md:"50px"}, 
                    width:{md:"180px"},
                margin:{ md:"2rem",xs:"2rem",}}} 
                variant="contained" 
                endIcon={<ArrowCircleRightOutlinedIcon />}>
            SignUp
          </Button>
  )

}
export default _signUpBlack;