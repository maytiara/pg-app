const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    address: String
    company: String
    email: String
    password: String
    isChef: Boolean
    reservations: [Reservation]!
  }

  type Reservation {
    _id: ID
    numOfPeople: Int!
    description: String
    budget: String
    dietary: String
    createdAt: String
    chefId: ID
    eventDate: String! #added for the selection date
    // TODO this comment after the review
  }

  type Auth {
    token: ID!
    user: User
  }

  #see resolvers to match the argument
  type Query { 
    users: [User]
    user(username: String!): User
    
    #added this logic for every user it can be chef or user only
    #for every User there will have a set of chefs
    // TODO this comment after the review
    chef(userId: ID!): User

    reservations(chefId: ID!): [Reservation]

    #-- for optional usage
    // TODO this comment after the review
    reservation(reservationId: ID!): Reservation

    me: User
  }

  type Mutation {

    #required for login&signup
    addUser(username: String!, email: String!, password: String!, company: String, address: String!, isChef: Boolean): Auth

    #--added to check/update the User info
    updateUser(username: String, email: String, password: String, company: String, address: String, isChef: Boolean): User

    login(email: String!, password: String!): Auth

    addReservation (eventDate: String!, numOfPeople: Int!, defineExp: String!, budget: String!, dietary: String, chefId: ID!): Reservation

    #-- added to check/update reservations
    updateReservation (reservationId: ID!): Reservation
  }
`;

module.exports = typeDefs;