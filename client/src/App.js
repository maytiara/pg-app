import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
//import PrivateRoute from './private/PrivateRoute';

// have to import the ./pages/<filename>
import Home from "./pages/Home";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup";
import Chefs from "./pages/Chefs";
import ChefDetails from "./pages/ChefDetails";
import Reservation from "./pages/Reservation";
import AboutUs from "./pages/AboutUs";
import NoMatch from "./pages/NoMatch";

import ChefAxelYu from "./components/Chefs/ChefAxelY";
import ChefMoriahMcgrath from "./components/Chefs/ChefMoriahM";
import ChefNancyCastillo from "./components/Chefs/ChefNancyC";
import ChefOliBuenviaje from "./components/Chefs/ChefOliB";
import ChefWestinPace from "./components/Chefs/ChefWestinP";

// to linked our Apollo Sandbox
const httpLink = createHttpLink({
	uri: "http://localhost:3001/graphql",
});

// the authorization to pass on our header (Apollo)
const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("id_token");
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink), // to add the link together
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div className="App">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/chefs" element={<Chefs />} />

            {/* Chefs route */}
						<Route path="/chefs/chef-axel-yu" element={<ChefAxelYu />} />
						<Route
							path="/chefs/chef-moriah-mcgrath"
							element={<ChefMoriahMcgrath />}
						/>
						<Route
							path="/chefs/chef-nancy-castillo"
							element={<ChefNancyCastillo />}
						/>
						<Route path="/chefs/chef-oli-buenviaje" element={<ChefOliBuenviaje />} />
						<Route path="/chefs/chef-westin-pace" element={<ChefWestinPace />} />

						{/* or /reservation */}
						<Route path="/chefs/:username/reservation" element={<Reservation />} />
						<Route path="/about-us" element={<AboutUs />} />
						<Route path="*" element={<NoMatch />} />
					</Routes>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
