import React from "react";
import NavBar from "../components/Buttons/NavBar";
import SearchField from "../components/Search/SearchField";
import Footer from "../components/Footer/Footer";

import Auth from '../utils/auth';
import { Box } from "@mui/material";

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
							<p> Welcome {Auth.getProfile().data.username} </p>
						</span>
					</>
				) : (
					<>
						<p> You need to be logged in to make a booking. </p>
					</>
				)}
			</div>
			<div style={{ marginTop: 50 }}></div>

			<div>
				<Link to={`${url}/chef-axel-yu`}>hfgh</Link>
			</div>
			<div>
				<Link to={`${url}/chef-moriah-mcgrath`}>ghgxg</Link>
			</div>
			<div>
				<Link to={`${url}/chef-nancy-castillo`}>fjhj</Link>
			</div>
			<div>
				<Link to={`${url}/chef-oli-buenviaje`}>fdhgf</Link>
			</div>
			<div>
				<Link to={`${url}/chef-westin-pace`}>fghf</Link>
			</div>

			<Box
				components="footer"
				sx={{
					mt: "auto",
				}}
			>
				<Footer />
			</Box>
		</div>
	);
}

export default Chefs;
