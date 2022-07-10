import React, { Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';

// var theme = createTheme();
// theme = responsiveFontSizes(theme);
// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// )

// Containers
const DefaultLayout = React.lazy(() => import('../layout/DefaultLayout.jsx'))

// Pages
const Login = React.lazy(() => import('../views/pages/login/Login.jsx'))
const Register = React.lazy(() => import('../views/pages/register/Register.jsx'))
const ContactConsent = React.lazy(() => import('../views/pages/contactConsent/ContactConsent.jsx'))
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))


function App() {
	return (
		// <ThemeProvider>
		<HashRouter>
			<Suspense >
				<Routes>
					<Route exact path="/login" name="Login Page" element={<Login />} />
					<Route exact path="/register" name="Register Page" element={<Register />} />
					<Route exact path="/contactConsent" name="Contact Consent Page" element={<ContactConsent />} />
					{/* <Route exact path="/404" name="Page 404" element={<Page404 />} /> */}
					{/* <Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
					<Route path="*" name="Home" element={<DefaultLayout />} />
				</Routes>
			</Suspense>
		</HashRouter>
		// </ThemeProvider>
	)
}

export default App;

