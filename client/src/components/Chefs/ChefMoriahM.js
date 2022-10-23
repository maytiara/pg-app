import React from "react";
import Footer from "../Footer/Footer";
import theme from "../../styles/Theme";
import { ThemeProvider } from "@mui/material/styles";

import css from "../../styles/HeaderImage.module.css";

import {
	Container,
	AppBar,
	Fab,
	CardActions,
	Box,
	Typography,
	ImageListItemBar,
	Paper,
	Divider
} from "@mui/material";

import LocalDiningIcon from '@mui/icons-material/LocalDining';
import TapasIcon from '@mui/icons-material/Tapas';
import Groups2Icon from '@mui/icons-material/Groups2';

import { Link } from "react-router-dom";
import NavBar from "../Buttons/NavBar";

export default function ChefMoriahMcgrath() {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<NavBar />
			<ThemeProvider theme={theme}>
				<AppBar
					position="sticky"
					className={css.heroHeader}
					sx={{ height: "30vh" }}
				>
					<Container sx={{ display: "flex", justifyContent: "center", mt: 0 }}>
						<ImageListItemBar
							title={
								<Typography
									variant="h4"
									sx={{
										color: "#ffffff",
										fontWeight: 300,
										textAlign: "left",
										paddingLeft: "2rem",
									}}
								>
									Chef Moriah Mcgrath
								</Typography>
							}
							subtitle={
								<Typography
									sx={{ color: "#c5b044", textAlign: "left", paddingLeft: "2rem" }}
								>
									Perth, WA
								</Typography>
							}
						/>
					</Container>
				</AppBar>

				<Container position="static">
					<CardActions sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
						<Fab
							size="large"
							variant="extended"
							to="/reservation"
							component={Link}
							sx={{ backgroundColor: "#c5b044" }}
						>
							<Typography sx={{ width: "40rem", color: "#0c0c0c", fontWeight: 400 }}>
								BOOK FOR A RESERVATION
							</Typography>
						</Fab>
					</CardActions>
				</Container>
				<Paper sx={{ backgroundColor: "#0c0c0c", mt: 3 }}>
					<Typography sx={{ color: "#c5b044", fontWeight: 300 }}>
						Business Name: Food for the Soul
					</Typography>
					<Typography sx={{ color: "#f1ecd7", fontWeight: 300, mb: 3 }}>
						Contact: enquiries@chefmoriah-privatechef.com.au
					</Typography>
					<Divider
						sx={{
							backgroundColor: "#303030",
							marginLeft: "5rem",
							marginRight: "5rem",
						}}
					/>
					<Typography sx={{ color: "#f1ecd7", fontWeight: 300, mt: 1, mb: 2 }}>
						<LocalDiningIcon />
						&nbsp;PRIVATE CHEF
						<br />
						<TapasIcon />
						&nbsp;DEGUSTATION
						<br />
						<Groups2Icon /> &nbsp;CORPORATE & SOCIAL EVENTS
					</Typography>
				</Paper>
				<Container>
					<Typography sx={{ fontWeight: 300, mt: 1 }}>
						For group or event bookings larger than 10 patrons please email us:
						enquiries@chefmoriah-privatechef.com.au
					</Typography>
				</Container>
			</ThemeProvider>
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
					minHeight: "50vh",
					maxHeight: "100vh",
				}}
			>
				<Box components="footer" sx={{ mt: "auto" }}>
					<Footer />
				</Box>
			</Container>
		</div>
	);
}