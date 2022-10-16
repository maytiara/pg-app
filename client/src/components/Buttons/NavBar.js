import React, { useState } from "react";
import { Link } from "react-router-dom";
import theme from "../../styles/Theme";
import { ThemeProvider } from "@mui/material/styles";

import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, MenuItem } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";


const drawerWidth = 240;
const navItems = ["Home", "Who we are", "Meet your Chef", "Logout"];

export default function NavBar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				Private Gourmet
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<ThemeProvider theme={theme}>
				<AppBar
					position="sticky"
					color="primary"
					elevation={0}
					sx={{ borderBottom: (theme) => `1px solid ${theme.palette.primary.main}` }}
				>
					<Toolbar sx={{ flexWrap: "wrap" }}>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: "none" } }}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1, justify: "space-between", display: { sm: "block" } }}
						>
            </Typography>
						<Box sx={{ display: { xs: "none", sm: "inherit", md: 'flex'}}}>
              
              {/* Menu Items */}
              <MenuItem
								sx={{
									"&:hover": {
										backgroundColor: '#C5B044',
                    color: '#303030',
                    fontWeight: 400,
									},
								}}
								linkButton={true} component={Link} to="/"
							>
								Home
							</MenuItem>
              <MenuItem
								sx={{
									"&:hover": {
										backgroundColor: '#C5B044',
                    color: '#303030',
                    fontWeight: 400
									},
								}}
								linkButton={true} component={Link} to="/about-us"
							>
								Who We Are
							</MenuItem>
              <MenuItem
								sx={{
									"&:hover": {
										backgroundColor: '#C5B044',
                    color: '#303030',
                    fontWeight: 400
									},
								}}
								linkButton={true} component={Link} to="/chefs"
							>
								Meet Your Chef
							</MenuItem>
              <MenuItem
								sx={{
									"&:hover": {
										backgroundColor: '#C5B044',
                    color: '#303030',
                    fontWeight: 400
									},
								}}
								linkButton={true} component={Link} to="/chefs"
							>
								Logout
							</MenuItem>
							
						</Box>
					</Toolbar>
				</AppBar>
				<Box component="nav">
					<Drawer
						container={container}
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: { xs: "block", sm: "none" },
							"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
						}}
					>
						{drawer}
					</Drawer>
				</Box>
			</ThemeProvider>
		</Box>
	);
}
