import { gql } from "@apollo/client";

//user(username: String!): User
export const QUERY_USER = gql`
	query user($username: String!) {
		user(username: $username) {
			_id
			username
			email
			company
			address
			reservations {
				_id
				contact
				contactName
				numOfPeople
				description
				budget
				dietary
				chefName
				eventDate
			}
		}
	}
`;

//reservations
export const QUERY_RESERVATIONS = gql`
	query getReservations {
		reservations {
			_id
			contact
			contactName
			numOfPeople
			description
			budget
			dietary
			chefName
			eventDate
		}
	}
`;

//reservation
export const QUERY_SINGLE_RESERVATION = gql`
	query reservation($reservationId: ID!) {
		reservation(reservationId: $reservationId) {
			_id
			contact
			email
			numOfPeople
			description
			budget
			dietary
			chefName
			eventDate
		}
	}
`;

// me: User
export const QUERY_ME = gql`
	query me {
		me {
			_id
			username
			email
			company
			address
			reservations {
				_id
				contact
				contactName
				numOfPeople
				description
				budget
				dietary
				chefName
				eventDate
			}
		}
	}
`;
