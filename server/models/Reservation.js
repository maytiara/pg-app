const { Schema, model } = require("mongoose");
const User = require("./User");

const reservationSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true, //to avoid spacing from start and end of the string
			match: [/.+@.+\..+/, "Must match an email address!"],
		},
		numOfPeople: {
			type: Number, // because its an integer
			required: true,
		},
		description: { // Define fine dining experience content
			type: String,
			required: "Must explain your fine dining experience",
			minlength: 1, // user can type paragraph of this section
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

const Reservation = model("Reservation", reservationSchema);

module.exports = Reservation;
