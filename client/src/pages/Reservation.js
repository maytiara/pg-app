import React, { useState } from "react";
import NavBar from "../components/Buttons/NavBar";
import Footer from "../components/Footer/Footer";
import css from "./Reservation.module.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/Theme";

import { Box, Container, Typography, TextField, Paper, Divider, MenuItem, InputLabel } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { Link } from "react-router-dom";

import { RoundedButton } from "../styles/StyledButton";

function Reservation() {

  // Datepicker field
  const [value, setValue] = useState();

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
						<Box
							component="form"
							onSubmit
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

							{/* Date Picker */}
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									label="Select the date"
									id="eventDate"
									name="eventDate"
									value={value}
									onChange={(newValue) => {
										setValue(newValue);
									}}
									renderInput={(params) => (
										<TextField {...params} helperText={params?.inputProps?.placeholder} />
									)}
								/>
							</LocalizationProvider>

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
							/>

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
							/>

              {/* Chef selection*/}
              <Divider />
              <InputLabel id="chefId">Select your Private Chef</InputLabel>
							<TextField
								margin="normal"
								required
								fullWidth
								id="chefId"
								type="chefId"
								name="chefId"
								helperText="This field is required"
                select
								sx={{ width: "15rem" }}
							>
                <MenuItem value="chefId1">Chef Alex Yu</MenuItem>
                <MenuItem value="chefId2">Chef Moriah McGrath</MenuItem>
                <MenuItem value="chefId3">Chef Oli Buenviaje</MenuItem>
                <MenuItem value="chefId4">And more..</MenuItem>
              </TextField>

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
							/>

							<ThemeProvider theme={theme}>
								<RoundedButton
									type="submit"
									onClick
									color="secondary"
									variant="contained"
									sx={{ opacity: "90%" }}
								>
									<Typography
										sx={{ fontSize: "1.15rem", fontWeight: 300, textTransform: "none" }}
									>
										<Link style={{ textDecoration: "none", color: "#0c0c0c" }}>
											Submit form
										</Link>
									</Typography>
								</RoundedButton>
							</ThemeProvider>
						</Box>
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
