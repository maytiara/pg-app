import React from "react";
import Footer from "../components/Footer/Footer";
import css from "./NoMatch.module.css";

import { Box, Stack, Typography } from "@mui/material";
import NavBar from "../components/Buttons/NavBar";
import LocalDiningIcon from '@mui/icons-material/LocalDining';


// this is 404 page
const AboutUs = () => {
	return (
    <div>
      <Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
      <NavBar />
			<Box style={{ opacity: "20%" }} className={css.heroImg} />
			<Stack
				alignContent="center"
				sx={{
					mt: "auto",
					display: "inline",
					justifyContent: "center",
				}}
			>
        <LocalDiningIcon sx={{ fontSize: "4rem", mt: 2}}/>
			</Stack>
       
			<Typography variant="h5" sx={{ fontWeight: 300, margin: 8 }}>
      ...Looking for a unique and special culinary experience? Look no further than <b>Private Chef</b> Reservation App! We'll help you find the perfect chef for your needs, and book them right away so you can focus on what's important"
			</Typography>
			<Box
				components="footer"
				sx={{
					mt: "auto",
				}}
			>
				<Footer />
			</Box>
		</Box>
    </div>
		
	);
};

export default AboutUs;
