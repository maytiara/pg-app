const { AuthenticationError } = require('apollo-server-express');
const { User, Reservation } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

  // this Query have to match the typeDefs Query
  // TODO Remove comments before the queries below after the review
  Query: {

    //users: [User]
    users: async () => {
      return User.find().populate('reservations');
    },
    //user(username: String!): User
    user: async (parent, {username}) => {
      return User.findOne({ username }).populate('reservations');
    },
    //chef(userId: ID!): User
    chef: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    //reservations(chefId: ID!): [Reservation]
    reservations: async (parent, { chefId }) => {
      return Reservation.findAll({ _id: chefId });
    },
    //reservation(reservationId: ID!): Reservation
    reservation: async (parent, { reservationId }) => {
      return Reservation.findOne({ _id: reservationId });
    },
    //me: User
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate ('reservations');
      }
      throw new AuthenticationError('Sorry, Please logged in');
    }

  }

}

module.exports = resolvers;