import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

import css from "./Signup.module.css";
import { Container, Box, Paper, TextField, Typography } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/Theme';

import Footer from "../components/Footer/Footer";
import NavBar from "../components/Buttons/NavBar";
import { RoundedButton } from "../styles/StyledButton";

function Signup(props) {
	const [formState, setFormState] = useState({ 
    username: "",
    email: "",
    password: "",
    company: "",
    address: ""
  });
	const [addUser, { error, data }] = useMutation(ADD_USER);

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		const mutationResponse = await addUser({
			variables:  {...formState }
				// isChef
		});
		const token = mutationResponse.data.addUser.token;
		Auth.login(token);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	return (
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
						sx={{ "& > :not(style)": { m: 1, width: "35ch" } }}
						autoComplete="off"
						display="inline"
						justifyContent="center"
						maxWidth="50vh"
					>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : ('') }
              
						{/* Username */}
						<TextField
							margin="normal"
							required
							fullWidth
							id="username"
							label="First Name & Last Name"
							type="username"
							name="username"
							helperText="This field is required"
							variant="standard"
							sx={{ width: "15rem" }}
              value={formState.username}
							onChange={handleChange}
						/>
						<></>
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

						{/* Password */}
						<TextField
							margin="normal"
							required
							fullWidth
							id="password"
							label="Password"
							type="password"
							name="password"
							helperText="This field is required"
							variant="standard"
							sx={{ width: "15rem" }}
              value={formState.password}
							onChange={handleChange}
						/>

						{/* Company */}
						<TextField
							margin="normal"
							required
							fullWidth
							id="company"
							label="Company"
							type="company"
							name="company"
							variant="standard"
							sx={{ width: "15rem" }}
              value={formState.company}
							onChange={handleChange}
						/>

						{/* Address */}
						<TextField
							margin="normal"
							required
							fullWidth
							id="address"
							label="Address"
							type="address"
							name="address"
							helperText="This field is required"
							variant="standard"
							sx={{ width: "15rem" }}
              value={formState.address}
							onChange={handleChange}
						/>

						<ThemeProvider theme={theme}>
							<RoundedButton
								color="secondary"
								variant="contained"
								sx={{ opacity: "90%" }}
							>
								<Typography
									sx={{ fontSize: "1.15rem", fontWeight: 300, textTransform: "none" }}
								>
									<Link style={{ textDecoration: "none", color: "#0c0c0c" }}>
										Create Account
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
	);
}

export default Signup;
