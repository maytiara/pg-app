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

export default function ChefMoriahMcgrath(children) {

  const { username } = useParams();

	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Card sx={{ maxWidth: 345 }}>
					<CardActionArea >
						<CardMedia
							component="img"
							height="300px"
							image="/static/images/cards/contemplative-reptile.jpg"
							alt="Chef Moriah Mcgrath"
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
	);
}