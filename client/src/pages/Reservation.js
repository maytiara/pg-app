import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { ADD_RESERVATION } from "../utils/mutations";
import Auth from "../utils/auth";

import NavBar from "../components/Buttons/NavBar";
import Footer from "../components/Footer/Footer";
import css from "./Reservation.module.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/Theme";

import { Box, Container, Typography, TextField, Paper, Divider, InputLabel } from "@mui/material";

import { RoundedButton } from "../styles/StyledButton";
import DatePickerField from "../components/Forms/DatePickerField";
import ChefSelection from "../components/Forms/ChefSelection";

function Reservation() {

	// Mutation to add reservation
	const [addReservation] = useMutation(ADD_RESERVATION);
	
	// For all the Input fields
	const [formState, setFormState] = useState({
		eventDate: "", //have to pass a values
		email: "",
		contact: "",
		numOfPeople: "",
		budget: "",
		dietary: "",
		description: "",
		chefId: "", // have to pass an array of value
	});

	// update state based on form input changes
	const handleChange = (event) => {
		const { id, value } = event.target;
		setFormState({
			...formState,
			[id]: value,
		});
	};

	// submit form
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		const mutationResponse = await addReservation({
			variables: { ...formState },
		});
		const token = mutationResponse.data.addReservation.token;
		Auth.login(token);
	};

	return (
		<>
			<div
				style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
				className={css.heroImg}
			>
				<NavBar />
				<Container
					sx={{
						minwidth: "20vh",
						maxWidth: "40vh",
						display: "flex",
						justifyContent: "center",
						direction: "column",
					}}
				>
					<Paper
						sx={{
							marginTop: 2.5,
							padding: "1rem",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						{Auth.loggedIn() ? (
						<Box
							component="form"
							onSubmit={handleFormSubmit}
							noValidate
							sx={{ "& > :not(style)": { m: 1, width: "38ch" } }}
							autoComplete="off"
							display="inline"
							justifyContent="center"
							maxWidth="50vh"
						>
							<Box display="inline" justifyContent="center">
								<Typography sx={{ mb: 2, fontWeight: "bold" }}>RESERVATIONS</Typography>
								<Divider />
							</Box>

							<div style={{ margin: 2 }}></div>
							<Box display="inline" justifyContent="center" >
							<DatePickerField
								fullWidth
								id="eventDate"
								type="select"
								name="eventDate"
								value={formState.eventDate}
								onChange={handleChange}
							/>
							</Box>

							{/* Email address */}
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								type="email"
								name="email"
								helperText="This field is required"
								variant="standard"
								sx={{ width: "15rem" }}
								value={formState.email}
								onChange={handleChange}
							/>

							{/* Contact No. */}
							<TextField
								margin="normal"
								required
								fullWidth
								id="contact"
								label="Contact No."
								type="contact"
								name="contact"
								variant="standard"
								sx={{ width: "15rem" }}
								value={formState.contact}
								onChange={handleChange}
							/>

							{/* Number of People */}
							<TextField
								margin="normal"
								required
								fullWidth
								id="numOfPeople"
								label="For how many people?"
								type="numOfPeople"
								name="numOfPeople"
								variant="standard"
								helperText="For reservation of 10 or more and event booking. Please email us at enquiries@privategourmet.com.au"
								sx={{ width: "15rem" }}
								value={formState.numOfPeople}
								onChange={handleChange}
							/>

							<div style={{ margin: 5 }}></div>

							{/* Budget */}
							<TextField
								margin="normal"
								required
								fullWidth
								id="budget"
								label="Estimated budget per person"
								type="budget"
								name="budget"
								helperText="(e.g. 100+ pp)"
								multiline
								maxRows={1}
								sx={{ width: "15rem" }}
								value={formState.budget}
								onChange={handleChange}
							/>

							{/* Dietary */}
							<TextField
								margin="normal"
								required
								fullWidth
								id="dietary"
								label="Special diet or food allergens?"
								type="dietary"
								name="dietary"
								helperText=""
								multiline
								maxRows={2}
								sx={{ width: "15rem" }}
								value={formState.dietary}
								onChange={handleChange}
							/>

							{/* Chef selection*/} 
							<Box display="inline" justifyContent="center">
							<Divider  sx={{mt:2}}/>
							<InputLabel id="chefId" sx={{mt:2}}>Select your Private Chef</InputLabel>
							<ChefSelection 
								fullWidth
								id="chefId"
								type="chefId"
								name="chefId"
								value={formState.chefId}
								onChange={handleChange}
								sx={{mt:2, width: "15rem" }}
								/>
							</Box>

							{/* Description */}
							<Box display="inline" justifyContent="center">
								<Divider />
								<Typography sx={{ mt: 2, fontWeight: "italic" }}>
									How would you like your fine dining experience?
								</Typography>
							</Box>
							<TextField
								margin="normal"
								required
								fullWidth
								id="description"
								type="description"
								name="description"
								helperText="This field is required"
								multiline
								maxRows={4}
								sx={{ width: "15rem" }}
								value={formState.description}
								onChange={handleChange}
							/>

							<ThemeProvider theme={theme}>
								<RoundedButton
									type="submit"
									onClick={handleFormSubmit}
									cursor='pointer'
									color="secondary"
									variant="contained"
									sx={{ opacity: "90%" }}
								>
									<Typography
										sx={{ fontSize: "1.15rem", fontWeight: 300, textTransform: "none" }}
									>
										<Link to="/chefs" style={{ textDecoration: "none", color: "#0c0c0c" }}>
											Submit form
										</Link>
									</Typography>
								</RoundedButton>
							</ThemeProvider>
						</Box>

						) : (
        <p>
          You need to be logged in to endorse skills. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
					</Paper>
				</Container>
				<Box components="footer" sx={{ mt: "auto" }}>
					<Footer />
				</Box>
			</div>
		</>
	);
}

export default Reservation;
