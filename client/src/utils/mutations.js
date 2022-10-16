import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// export const ADD_RESERVATION = gql`
//   mutation addReservation($products: [ID]!) {
//     addOrder(products: $products) {
//       purchaseDate
//       products {
//         _id
//         name
//         description
//         price
//         quantity
//         category {
//           name
//         }
//       }
//     }
//   }
// `;

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
      }
    }
  }
`;