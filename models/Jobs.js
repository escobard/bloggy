const mongoose = require("mongoose")

const { Schema } = mongoose
const RecipientSchema = require('./Recipient')

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
		// this expects an array of strings to be passed into this piece of schema
		// recipients: [String]
		// when there is a collection of data instances within any specific model instance, 
		// this is called a subdocument collection - used to store incremental data
		// that is UNIQUE to the model instance, and will not be utilized elsewhere
		// otherwise, we create a new model class instead of a subdocument collection
		// if we want other model instances to interact with the data
		recipients: [
			// this essentially creates an ARRAY that contains instances of the RecipientSchema object
			RecipientSchema
		],

		// although optional, the underscore is utilized as a prefix to RELATIONAL DATA
		// this is the property that grabs our user.id
		_user: { 
			
			// this looks for the ObjectID property, which is automatically assigned to user.id
			// when the user schema is created
			type: Schema.Types.ObjectId, 
			ref: 'User' },

		// this is recording the date that it was sent
		dateSent: Date,

		// this records the latest time someone responded to the survey
		lastResponded: Date

})

mongoose.model("jobs", jobsSchema)
