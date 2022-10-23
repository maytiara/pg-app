import React from "react";
import NavBar from "../components/Buttons/NavBar";
import SearchField from "../components/Search/SearchField";
import Footer from "../components/Footer/Footer";
import ChefAxelImg from "../images/chef-axel.jpg";
import ChefMoriahImg from "../images/chef-moriah.jpg";
import ChefOliImg from "../images/chef-oli.jpg";

import Auth from "../utils/auth";

import theme from "../styles/Theme";
import { ThemeProvider } from "@mui/material/styles";
import {
	Box,
	CardActionArea,
	CardMedia,
	CardContent,
	CardActions,
	Container,
	Typography,
	Card,
	Stack,
	Fab,
} from "@mui/material";

import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";

import { Link } from "react-router-dom";

function Chefs() {
	const url = "/chefs";

	return (
		<div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
			<NavBar />
			<SearchField />
			<div>
				{Auth.loggedIn() ? (
					<>
						<span>
							<h2 style={{ fontWeight: 200 }}>
								{" "}
								Welcome {Auth.getProfile().data.username}
								{","}{" "}
							</h2>
						</span>
					</>
				) : (
					<>
						<Fab
							size="large"
							variant="extended"
							to="/login"
							component={Link}
							sx={{ backgroundColor: "#c5b044", mt: 2 }}
						>
							<Typography sx={{ width: "20rem", color: "#0c0c0c", fontWeight: 400 }}>
								Please log-in for reservation
							</Typography>
						</Fab>
					</>
				)}
			</div>
			<Typography variant="h4" sx={{ m: 2, color: "#FFFFFF", fontWeight: 300 }}>
				Meet your local Private Chefs
			</Typography>

			<div style={{ display: "flex", justifyContent: "center" }}>
				<Stack
					direction={{ xs: "column", sm: "row" }}
					spacing={{ xs: 6, sm: 2, md: 1 }}
				>
					{/* Starts of cards section */}
					<div>
						<ThemeProvider theme={theme}>
							<Container style={{ display: "flex", justifyContent: "center" }}>
								<Card sx={{ maxWidth: 345, minHeight: 480 }}>
									<CardActionArea>
										<CardMedia
											component="img"
											height="300px"
											src={ChefAxelImg}
											alt="Chef Axel Yu"
										/>
										<CardContent>
											<Typography
												gutterBottom
												variant="h5"
												component="h5"
												color="secondary.main"
												textAlign="left"
											></Typography>
											<h1
												style={{ marginTop: "-1rem", fontWeight: 500, textAlign: "left" }}
											>
												Chef Axel Yu
											</h1>
											<Typography
												variant="body2"
												color="primary.dark"
												textAlign="left"
												mt={1}
											>
												Services: Private Chef, Degustation, Corporate & Social Events{" "}
												<RestaurantMenuRoundedIcon />
											</Typography>
										</CardContent>
									</CardActionArea>

									<CardActions>
										<Fab
											variant="extended"
											size="small"
											color="primary.dark"
											sx={{ shadow: "none" }}
											component={Link}
											to={`${url}/chef-axel-yu`}
										>
											<Typography
												sx={{ width: "10rem", color: "#0c0c0c", fontWeight: 400 }}
											>
												VIEW DETAILS
											</Typography>
										</Fab>
									</CardActions>
								</Card>
							</Container>
						</ThemeProvider>
					</div>
					<div>
						<ThemeProvider theme={theme}>
							<Container style={{ display: "flex", justifyContent: "center" }}>
								<Card sx={{ maxWidth: 345, minHeight: 480 }}>
									<CardActionArea>
										<CardMedia
											component="img"
											height="300px"
											src={ChefMoriahImg}
											alt="Chef Axel Yu"
										/>
										<CardContent>
											<Typography
												gutterBottom
												variant="h5"
												component="h5"
												color="secondary.main"
												textAlign="left"
											></Typography>
											<h1
												style={{ marginTop: "-1rem", fontWeight: 500, textAlign: "left" }}
											>
												Chef Moriah McGrath
											</h1>
											<Typography
												variant="body2"
												color="primary.dark"
												textAlign="left"
												mt={1}
											>
												Services: Private Chef, Degustation, Corporate & Social Events{" "}
												<RestaurantMenuRoundedIcon />
											</Typography>
										</CardContent>
									</CardActionArea>

									<CardActions>
										<Fab
											variant="extended"
											size="small"
											color="primary.dark"
											sx={{ shadow: "none" }}
											component={Link}
											to={`${url}/chef-moriah-mcgrath`}
										>
											<Typography
												sx={{ width: "10rem", color: "#0c0c0c", fontWeight: 400 }}
											>
												VIEW DETAILS
											</Typography>
										</Fab>
									</CardActions>
								</Card>
							</Container>
						</ThemeProvider>
					</div>
					<div>
						<ThemeProvider theme={theme}>
							<Container style={{ display: "flex", justifyContent: "center" }}>
								<Card sx={{ maxWidth: 345, minHeight: 480 }}>
									<CardActionArea>
										<CardMedia
											component="img"
											height="300px"
											src={ChefOliImg}
											alt="Chef Axel Yu"
										/>
										<CardContent>
											<Typography
												gutterBottom
												variant="h5"
												component="h5"
												color="secondary.main"
												textAlign="left"
											></Typography>
											<h1
												style={{ marginTop: "-1rem", fontWeight: 500, textAlign: "left" }}
											>
												Chef Oli Buenviaje
											</h1>
											<Typography
												variant="body2"
												color="primary.dark"
												textAlign="left"
												mt={1}
											>
												Services: Private Chef, Degustation, Corporate & Social Events{" "}
												<RestaurantMenuRoundedIcon />
											</Typography>
										</CardContent>
									</CardActionArea>

									<CardActions>
										<Fab
											variant="extended"
											size="small"
											color="primary.dark"
											sx={{ shadow: "none" }}
											component={Link}
											to={`${url}/chef-oli-buenviaje`}
										>
											<Typography
												sx={{ width: "10rem", color: "#0c0c0c", fontWeight: 400 }}
											>
												VIEW DETAILS
											</Typography>
										</Fab>
									</CardActions>
								</Card>
							</Container>
						</ThemeProvider>
					</div>
				</Stack>
			</div>

			<Box components="footer" sx={{ mt: 0 }}>
				<Footer />
			</Box>
		</div>
	);
}

export default Chefs;
