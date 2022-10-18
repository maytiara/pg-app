import React from "react";
import NavBar from "../components/Buttons/NavBar";
import SearchField from "../components/Search/SearchField";
import ChefsDetails from "./ChefDetails";

import Auth from '../utils/auth';

function Chefs(props) {
	return (
		<>
			
			<NavBar />
			<SearchField />
			<div>
				{Auth.loggedIn() ? (
					<>
					<span>
						<p> Welcome {Auth.getProfile().data.username} </p>
					</span>
					</>
					) :(
						<>
							<p> You need to be logged in to make a booking. </p>
						</>
					)}
			</div>
			<div style={{ marginTop: 50 }}></div>
			<ChefsDetails />
		</>
	);
}

export default Chefs;
