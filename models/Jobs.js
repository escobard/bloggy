const mongoose = require("mongoose")

const { Schema } = mongoose

const jobsSchema = new Schema({
		title: String,
		subject: String,
		body: String,

		// this is how you create nested data types within mongoose
		// this block of data is responsible for handling
		// the job post application description, and a boolean
		// which optionally allows the user to apply with their profile (implemented in the future)
		apply: {
			description: String,
			applyWithProfile: { type: Boolean, default:  false},
		},
		recipients: [String]

})

mongoose.model("jobs", jobsSchema)
