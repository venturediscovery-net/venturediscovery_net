import * as React from 'react';
import Box from '@mui/material/Box';
import TitleDescriptionCard from '../../components/TitleDescriptionCard';

const Survey = () => {
  	return (
		<Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', paddingInline: 20 }}>
			<TitleDescriptionCard />
		</Box>
  	)
}

export default Survey;