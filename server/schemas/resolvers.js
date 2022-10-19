const { AuthenticationError } = require('apollo-server-express');
const { User, Reservation } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

  // this Query have to match the typeDefs Query
  Query: {

    users: async () => {
      return await User.find({}).populate('reservations');
    },

    user: async (parent, {username}) => {
      return await User.findOne({ username }).populate('reservations');
    },

    // find the chef by id
    chef: async (parent, args ) => {
      const chefId = await User.findAll(id.id);
      return chefId;
    },
    //reservations(chefId: ID!): [Reservation]
    reservations: async () => {
      // fix: removed ChefId
      return await Reservation.findAll.populate('users'); 
    },
    //reservation(reservationId: ID!): Reservation
    reservation: async (parent, { reservationId }) => {
      return Reservation.findOne({ _id: reservationId });
    },
    //me: User
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('Sorry, Please logged in');
    },
  },

  // this have to match the typeDefs Mutation
  Mutation: {
    
    // getting all the User fields
    addUser: async (parent, { username, email, password, company, address, isChef }) => {
      const user = await User.create({ username, email, password, company, address, isChef });
      const token = signToken(user);

      return { token, user };
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
    addReservation: async (parent, { email, eventDate, numOfPeople, description, budget, dietary }, context ) => {
      if (context.user) {
        const reservation = await Reservation.create({
          email,
          eventDate,
          numOfPeople,
          description,
          budget,
          dietary,
          chefId: context.user.username
      });

      await User.findOneAndUpdate(
        { _id: context.user._id }, 
        { $addToSet: { reservations: reservation._id } });
      
      return reservation;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

};

module.exports = resolvers;