import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

import Chefs from "../pages/Chefs";

import css from "./Signup.module.css";
import { Container, Box, Paper, TextField, Typography } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/Theme';

import Footer from "../components/Footer/Footer";
import NavBar from "../components/Buttons/NavBar";
import { RoundedButton } from "../styles/StyledButton";

function Login () {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);

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

    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });

      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
		// clear form values
    setFormState({
      email: '',
      password: '',
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
							marginTop: 8,
							padding: "1rem",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						{data ? (
                <Link to="/chefs" component={Chefs}></Link>
            ) : (

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
							<Typography>Welcome</Typography>
							{/* Email address */}
							<TextField
								margin="normal"
								required={true}
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
								required={true}
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

							{error ? (
								<div>
									<p className="error-text" style={{ color: "red" }}>
										The provided credentials are incorrect
									</p>
								</div>
							) : null}

							<ThemeProvider theme={theme}>
								<RoundedButton
									type="submit"
									color="secondary"
									variant="contained"
									sx={{ opacity: "90%" }}
									onClick={handleFormSubmit}
								>
									<Typography
										sx={{ fontSize: "1.15rem", fontWeight: 300, textTransform: "none" }}
									>
										<Link style={{ textDecoration: "none", color: "#0c0c0c" }}>
											Sign in to your account
										</Link>
									</Typography>
								</RoundedButton>
							</ThemeProvider>
						</Box>
						)}

					</Paper>
				</Container>

				<Box components="footer" sx={{ mt: "auto" }}>
					<Footer />
				</Box>
			</div>
		);
}
  

export default Login;