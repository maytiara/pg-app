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
    email: String!
    numOfPeople: Int!
    description: String
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

  #see resolvers to match the argument ; read | get
  type Query { 
    users: [User]
    user(username: String!): User
    
    #added this logic for every user it can be chef or user only
    #for every User there will have a set of chefs
    #FindAll the Chef & populate the meet your chef
    chef(id: ID): User

    reservations: [Reservation]

    reservation(reservationId: ID!): Reservation

    me: User
  }

  #delete | put | post
  type Mutation {

    #required for &signup
    addUser(username: String!, email: String!, password: String!, company: String, address: String!, isChef: Boolean): Auth

    #removed password (!)
    login(email: String!, password: String!): Auth 

    addReservation (email: String!, eventDate: String!, numOfPeople: Int!, description: String!, budget: String!, dietary: String, chefId: ID!): Reservation

  }
`;

module.exports = typeDefs;