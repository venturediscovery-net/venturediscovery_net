import React from 'react'
import {  Grid, Paper, Typography } from '@mui/material';
import getString from '../../assets/data/getString';
// import circle from "../../assets/icon/circle.svg"

const why_list = [
        "Add credibility to your development / coding capability. Could help meaningfully in placements",
	"Test your classroom / theory learnings with real world Beta Users", 
        "Make a big difference in the development career / startup journey of a fellow student/entrepreneur",
        "Be a part of the solution",
        "Collect feedback for your startup idea / venture - could help in raising funding",

]

function ListItem(props) {
  return <Grid container item  md={6}><li style={{padding:"1rem"}}>{props.value}</li></Grid>;
}

const WhySection = () => {

	const Link = 'url("./assets/icon/circle.svg")';
	const listItems = why_list.map((item, index) =>
		<ListItem key={index} value={item} />
	);

  	return (
  		<Paper elevation={0}  sx={{ marginInline:{md:"7rem", sm:"4rem", sx:"2rem"},marginBlock:{sx:"1rem" , md:"3rem"}, padding:  { md:"2.5rem",xs:"1rem",},}}>
        	<Typography 
				variant='h4' 
				sx= {{fontSize: {xs: '20px',md:"40px"},
					padding:  { md:"2rem",xs:"1rem",}}} 
				dangerouslySetInnerHTML={getString('whyTitle')}>
			</Typography>
			<ul style={{ listStyleImage:Link}}>
				<Grid container spacing={2}>
					{listItems}
				</Grid>
			</ul>
		</Paper>
  	)
}

export default WhySection;