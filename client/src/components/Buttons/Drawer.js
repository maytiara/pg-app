import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

function DrawerList() {
	// Auth route for logout
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};

	return (
		<>
			<List>
				<ListItem disablePadding sx={{ display: "inline" }}>
					<ListItemButton
						sx={{ textAlign: "center" }}
						linkButton={true}
						component={Link}
						to="/"
					>
						<ListItemText>Home</ListItemText>
					</ListItemButton>
					<ListItemButton
						sx={{ textAlign: "center" }}
						linkButton={true}
						component={Link}
						to="/about-us"
					>
						<ListItemText>Who We Are</ListItemText>
					</ListItemButton>
					<ListItemButton
						sx={{ textAlign: "center" }}
						linkButton={true}
						component={Link}
						to="/chefs"
					>
						<ListItemText>Meet Your Chef</ListItemText>
					</ListItemButton>

					{/* Auth, once the user able to logged in the logout will be visible*/}
					{Auth.loggedIn() ? (
						<ListItemButton
							sx={{ textAlign: "center" }}
							linkButton={true}
							component={Link}
							onClick={logout}
							to="/"
						>
							<ListItemText>Logout</ListItemText>
						</ListItemButton>
					) : (
						<></>
					)}
					{/* Auth*/}
				</ListItem>
			</List>
		</>
	);
}

export default DrawerList;
