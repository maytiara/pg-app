import { gql } from '@apollo/client';


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
        numOfPeople
        description
        budget
        dietary
        chefId
        eventDate
      }
    }
  }
`;

//reservations

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
        numOfPeople
        description
        budget
        dietary
        chefId
        eventDate
      }
    }
  }
`;