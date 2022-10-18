import React from 'react'
import theme from "../../styles/Theme";
import { ThemeProvider } from "@mui/material/styles";

//import ChefA from "../components/isChef/ChefA";

import {
	Container,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Button,
	CardActionArea,
	CardActions,
} from "@mui/material";

import { useParams } from "react-router-dom";
import NavBar from '../Buttons/NavBar';

export default function ChefAxelYu() {

  const { username } = useParams();

	return (
		<div>
			<NavBar />
			<ThemeProvider theme={theme}>
			<Container>
				<Card sx={{ maxWidth: 345 }}>
					<CardActionArea >
						<CardMedia
							component="img"
							height="300px"
							image="/static/images/cards/contemplative-reptile.jpg"
							alt="Chef Axel Yu"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="h5"
								color="secondary.main"
								textAlign="left"
							>
								{ username }
							</Typography>
							<Typography variant="body2" color="primary.dark" textAlign="left">
								Services: Private Chef, Degustation, Corporate & Social Events
							</Typography>
						</CardContent>
					</CardActionArea>

					<CardActions>
						<Button size="small" color="primary">
							VIEW DETAILS
						</Button>
					</CardActions>
				</Card>
			</Container>
		</ThemeProvider>
		</div>
		
	);


}