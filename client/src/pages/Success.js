import React from "react";
import Footer from "../components/Footer/Footer";
import css from "./NoMatch.module.css";

import { Box, Stack, Typography } from "@mui/material";

import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import { Link } from "react-router-dom";

// this is 404 page
const NoMatch = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			<Box style={{ opacity: "20%" }} className={css.heroImg} />
			<Stack
				alignContent="center"
				sx={{
					mt: "auto",
					display: "inline",
					justifyContent: "center",
				}}
			>
			</Stack>
			<Typography variant="h5" sx={{ fontWeight: 300 }}>
				Thank you for submitting your reservation. <br />
				We will get in touch with you shortly.
			</Typography>
			<Typography
				sx={{ mt: 6, fontSize: "1.15rem", fontWeight: 300, textTransform: "none" }}
			>
				<Link
					to="/chefs"
					style={{ textDecoration: "none", color: "#f1ecd7", cursor: "pointer" }}
				>
					<TransferWithinAStationIcon /> Go back to /homepage
				</Link>
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
	);
};

export default NoMatch;
