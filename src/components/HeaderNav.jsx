import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/brand/Logo.svg';
import Logo_txt from '../assets/brand/Logo_txt.svg';
import { ThemeProvider } from '@mui/private-theming';
import theme from '../theme.js';
import ScrollToColor from '../misc/ScrollToColor';
import navLogo from '../assets/brand/navLogo.svg';
import Stack from '@mui/material/Stack';
 



const tabs = [['Home',"/home"], ['Survey','/survey'], ['Community',"/commumity"],[ 'FAQ',"/faq"]];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const HeaderNav = () => {


  	const [anchorElNav, setAnchorElNav] = React.useState(null);
  	const [anchorElUser, setAnchorElUser] = React.useState(null);

  	const handleOpenNavMenu = (event) => {
  	  	setAnchorElNav(event.currentTarget);
  	};
  	const handleOpenUserMenu = (event) => {
  	  	setAnchorElUser(event.currentTarget);
  	};

  	const handleCloseNavMenu = () => {
  	  	setAnchorElNav(null);
  	};

  	const handleCloseUserMenu = () => {
  	  	setAnchorElUser(null);
  	};
	const navigate = useNavigate();

	const navigateTo = (location) => {
		navigate(location);
	};

  	return (
  	  	<ThemeProvider theme={theme}>
			<ScrollToColor>
  	    		<AppBar sx = {{ boxShadow: 'none', background: 'rgba(255, 255, 255, 0)', borderBottom: '1px solid #E9F2FE' }}  position="fixed">
					<Container maxWidth="xl">
						<Toolbar disableGutters>

						{/* HAMBURGER */}
						<Box sx={{ justifyContent: 'start', display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								sx = {{color: "txtDark",}}
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
							{tabs.map((tab) => (
								<MenuItem key={tab[0]} onClick={() => navigateTo(tab[1])} >
									<Typography textAlign="center">{tab[0]}</Typography>
								</MenuItem>
							))}
							</Menu>
						</Box>


						{/* LOGO */}
						<Toolbar sx={{ flexGrow: 1,    justifyContent: "center",  display: { xs: 'flex', md: 'none' } }}>

						{/* <CardMedia
							component="img"
							sx={{ width: 40 }}
							image={navLogo}
							alt="Logo"
						/> */}
						<CardMedia
							component="img"
							sx={{ width: 200 }}
							image={navLogo}
							alt="Logo"
						/>
						</Toolbar >

					<Toolbar sx={{ mr:5, display: { xs: 'none', md: 'flex' } }}>

						{/* <CardMedia
							component="img"
							sx={{ width: 50 }}
							image={Logo}
							alt="Logo"
						/> */}
						<CardMedia
							component="img"
							sx={{ ml: 1, width: 290 }}
							image={navLogo}
							alt="Logo"
						/>
						</Toolbar >

						{/* TAB LINKS */}
						<Box sx={{ mr:5, justifyContent: "flex-end", flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							{tabs.map((tab) => (
							<Button
								key={tab[0]}
								onClick={() => navigateTo(tab[1])}
								sx={{ my: 2, color: '#656464', display: 'block', fontFamily: 'Inter', '&:hover': { color: '#2B2B39' }, paddingInline: 2 }}
							>
								{tab[0]}
							</Button>
							))}
						</Box>
							
						{/* AVATAR */}
						<Box sx={{ flexGrow: 0 , display:"none"}}>
							<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
							</Tooltip>
							<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
							>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
								<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
							</Menu>
						</Box>

						<Stack sx = {{display: { xs: 'flex' } }} spacing={2} direction="row" onClick={() => navigateTo("/register")}>
							<Button variant="contained">Sign Up</Button>
						</Stack>

						</Toolbar>
					</Container>
  	    		</AppBar>
			</ScrollToColor>
  	  	</ThemeProvider>
  	);
};
export default HeaderNav;
