const mongoose = require("mongoose")

// destructuring for es2015 works in express environments
// const { Schema } = mongoose

// this defines the PROPERTIES of each collection
const { Schema } = mongoose

// creates the properties of the userSchema data collection
const userSchema = new Schema({
	// as this is an object, we want a key and a value
	// the key can be anything, should be consistent
	// the value's data type MUST be declared
	googleId: String,

	// adding an email field in preparation for multiple auths
	email: String,

	name: String
})

// this creates the new collection (mongoDB term) by using the model (mongoose term) callback of
// mongoose

// this will not overwrite exsisting collections, only add new schemas to it
// or create a new one if it deosnt exsist
// first argument is the name of the collection, in this case 'users' for our users
// second argument is the schema to attach it to this collection
mongoose.model("users", userSchema)
