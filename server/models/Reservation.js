const { Schema, model } = require("mongoose");
const User = require("./User");

const reservationSchema = new Schema(
	{
		numOfPeople: {
			type: Number, // because its an integer
			required: true,
		},
		defineExp: {
			type: String,
			required: "Must explain your fine dining experience",
			minlength: 1, // user can type paragraph of this section
			trim: true,
		},
		budget: {
			type: String, // for dropdown selection
			required: true,
		},
		dietary: {
			type: String, // for dropdown selection
		},
		chefId: {
			type: Schema.Types.ObjectId,
			ref: User,
		},
		eventDate: {
			type: Date,
			require: true,
		},
	},
	{
		timestamps: true, //this createdAt
	},
);

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
