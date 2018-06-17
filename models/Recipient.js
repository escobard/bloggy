const mongoose = require('mongoose');
const { Schema } = mongoose;

// each model instance can contain a total max of 4mb of data with mongoDB
// this means that in cases where we expect a model class to scale, it's usually
// best to separate that into its own class, rather than create a subdocument collection
// this is the argument on this schema being added as a subdocument property of the userSchema
// it won't scale as well

// this creates our SUBDOCUMENT collection - notice slight differences from a model class
// this schema is not added to the mongoose runtime as a model, instead it's simply exported
// into the Jobs model to complete the subdocument collection setup
const recipientSchema = new Schema({
	email: String,
	responded: { type: Boolean, default: false },

	// added an extra field to store the users individual answer for later use.
	answer: String
})

module.exports = recipientSchema;