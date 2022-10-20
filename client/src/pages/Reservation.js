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

import moment from "moment";

import {
	Box,
	Container,
	Typography,
	TextField,
	Paper,
	Divider,
	MenuItem,
	InputLabel,
	Select
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { RoundedButton } from "../styles/StyledButton";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const chefNames = [
	"Chef Alex Yu",
	"Chef Moriah McGrath",
	"Chef Oli Buenviaje",
	"And many more...",
];

function Reservation() {
	// Chef selection
	const [personName, setPersonName] = useState();

	const handleChefName = (event) => {
		const {
			target: { value },
		} = event;
		setPersonName(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};

	// Date Picker
	const [selectedDate, setSelectedDate] = useState(
		moment().format("DD-MM-YYYY")
	);

	const handleDateChange = (date) => {
		console.log(date);
		setSelectedDate(date);
	};

	// For all the Input fields
	const [formState, setFormState] = useState({
		eventDate: "",
		email: "",
		contact: "",
		numOfPeople: "",
		budget: "",
		dietary: "",
		description: "",
		chefId: "",
	});

	const [addReservation] = useMutation(ADD_RESERVATION);

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

							{/* Date Picker */}
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									label="Select the date"
									name="eventDate"
									id="eventDate"
									views={["year", "month", "day"]}
									format={(date) => moment(date).toString("dddd, MMMM Do YYYY")}
									value={selectedDate}
									onChange={handleDateChange}
									renderInput={(params) => (
										<TextField {...params} helperText="dd/mm/yyyy" />
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
							<Divider />
							<InputLabel id="chefId">Select your Private Chef</InputLabel>
							<Select
								labelId="chefId"
								id="chefId"
								name="chefId"
								value={personName}
								onChange={handleChefName}
								MenuProps={MenuProps}
							>
								{chefNames.map((chefNames) => (
									<MenuItem key={chefNames} value={chefNames}>
										{chefNames}
									</MenuItem>
								))}
							</Select>

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
									onClick={handleFormSubmit}
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
