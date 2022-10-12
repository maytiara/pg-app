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

    // --check this one carefully
    //chefs(userId: ID!): User
    chefs: async (parent, { id }, context) => {
      if (context.user) {
        const isChef = await User.findAll(context.user.id).populate({
          path: 'users.reservations',
          populate: 'isChef',
        });

        return isChef.users.id(id);
      }

      throw new AuthenticationError ('Not logged in');
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
    },
  },

  // this have to match the typeDefs Mutation
  Mutation: {
    
    // getting all the User fields
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // Mutation: typeDefs
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true});
      }
      throw new AuthenticationError('Sorry, Please logged in');
    },
    // Mutation: typeDefs
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    // Mutation: typeDefs
    addReservation: async (parent, { reservations }, context) => {
      console.log(context);
      if (context.user) {
        const reservation = new Reservation({ reservations });

        await Reservation.findByIdAndUpdate(context.user._id, { $push: { reservations: reservation } });

        return reservation;
      }

      throw new AuthenticationError('Not logged in');
    },
    // Mutation: typeDefs
    updateReservation: async (parent, args, context) => {
      if (context.reservation) {
        return await Reservation.findByIdAndUpdate(context.reservation._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    }
  }

};

module.exports = resolvers;