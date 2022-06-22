import { Box } from '@mui/material';
import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import routes from '../routes.js';

const Content = () => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', mt: '70px' }}>
			<Suspense>
				<Routes>
				{console.log(routes)};
				{routes.map((route, idx) => {
					return (
					route.element && (
						<Route
						key={idx}
						path={route.path}
						exact={route.exact}
						name={route.name}
						element={<route.element />}
						/>
					)
					)
				})}
				<Route path="/" element={<Navigate to="Home" replace />} />
				</Routes>
			</Suspense>
		</Box>
	)
}

export default Content;