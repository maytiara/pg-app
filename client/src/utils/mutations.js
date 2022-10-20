import { gql } from "@apollo/client";

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const ADD_RESERVATION = gql`
	mutation addReservation(
		$email: String!
		$contact: String
		$eventDate: String
		$numOfPeople: String!
		$description: String!
		$budget: String!
		$dietary: String
		$chefId: String
	) {
		addReservation(
			email: $email
			contact: $contact
			eventDate: $eventDate
			numOfPeople: $numOfPeople
			description: $description
			budget: $budget
			dietary: $dietary
			chefId: $chefId
		) {
			_id
			contact
			email
			numOfPeople
			description
			budget
			dietary
			chefId
			eventDate
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser(
		$username: String!
		$email: String!
		$password: String!
		$company: String
		$address: String!
		$isChef: Boolean
	) {
		addUser(
			username: $username
			email: $email
			password: $password
			company: $company
			address: $address
			isChef: $isChef
		) {
			token
			user {
				_id
				username
			}
		}
	}
`;
