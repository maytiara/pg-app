const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reservationSchema = new Schema({
  numPerson: {
    type: Number, // because its an integer
    required: true,
  },
  defineExp: {
    type: String,
    required: 'Must explain your fine dining experience',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  budget: {
    type: String, // for dropdown selection
    required: true,
  },
  dietary: {
    type: String, // for dropdown selection
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  chefId: {
    type: String,
    require: true,
  }
});

const Reservation = mongoose.model('Order', orderSchema);

module.exports = Reservation;
