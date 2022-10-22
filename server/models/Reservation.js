const { Schema, model } = require("mongoose");

const reservationSchema = new Schema(
	{
		contactName: {
			type: String,
			required: true,
		},
		numOfPeople: {
			type: String, // because its an integer
			required: true,
		},
		contact: {
			type: String,
			minlenth: 1,
			maxlength: 16,
		},
		description: {
			// Define fine dining experience content
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
		chefName: {
			//replaced the chefId
			type: [String],
			default: undefined,
			select: true,
		},
		eventDate: {
			type: String,
		},
	},
	{
		timestamps: true, //this createdAt
	}
);

const Reservation = model("Reservation", reservationSchema);

module.exports = Reservation;
