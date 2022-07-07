import React from 'react';
import { Button } from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { useNavigate } from 'react-router-dom';



const _signUpBlack = () => {

	const navigate = useNavigate();

	function navigateTo() {
		navigate("/contactConsent");
	}
	return (
		<Button
			onClick={navigateTo}
			sx={{
				backgroundColor: "Black",
				borderRadius: "30px",
				height: { md: "50px" },
				width: { md: "180px" },
				margin: { md: "2rem", xs: "2rem", }
			}}
			variant="contained"
			endIcon={<ArrowCircleRightOutlinedIcon />}>
			Register
		</Button>
	)

}
export default _signUpBlack;