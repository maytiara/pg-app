const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
	username: {
		// user may have the same name
		type: String,
		required: true,
		trim: true,
	},
	address: {
		// user may have the same add
		type: String,
		required: true,
		minlength: 1,
		maxlength: 280,
		trim: true,
	},
	company: {
		// user may work in the same company & this could be null
		type: String,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
    trim: true, //to avoid spacing from start and end of the string
		match: [/.+@.+\..+/, "Must match an email address!"],
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
	},
	isChef: {
		type: Boolean,
		default: false,
		// findAll --> isTrue ; user || chef role
	},
	reservations: [
		{
			type: Schema.Types.ObjectId,
			ref: "Reservation",
		},
	],
});

// compare the incoming password with the hashed password
userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
