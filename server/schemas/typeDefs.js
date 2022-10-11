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
    defineExp: String
    budget: String
    dietary: String
    createdAt: String
    chefId: ID
    eventDate: String! #added for the selection date
  }

  type Auth {
    token: ID!
    user: User
  }

  #see resolvers to match the argument
  type Query { 
    users: [User]
    
    #added this logic for every user it can be chef or user only
    #for every User there will have a set of chefs
    chefs: [User]

    #
    reservations(chefId: ID!): [Reservation]

    #
    me: User
  }

  type Mutation {

    #required for login&signup
    addUser(username: String!, email: String!, password: String!, company: String, address: String!, isChef: Boolean): Auth

    login(email: String!, password: String!): Auth

    addReservation (eventDate: String!, numOfPeople: Int!, defineExp: String!, budget: String!, dietary: String, chefId: ID!)
  }
`;

module.exports = typeDefs;