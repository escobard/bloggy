const mongoose = require("mongoose")

const { Schema } = mongoose

const userSchema = new Schema({

	googleId: String,
	email: String,
	name: String,
	// adds the credit property to the model, to handle user currency
	credits: {
		// when assigning a more complex data type, we pass in an object with properties
		// sets the data type
		type: Number,

		// sets the default value of the credits
		default: 0
	}

})

mongoose.model("users", userSchema)
