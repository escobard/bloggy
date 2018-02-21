const mongoose = require("mongoose")
const assert = require("assert")
require("../models/Users")

const User = mongoose.model("users")
const testDB = require("./config").testDB

mongoose.Promise = global.Promise
before(done => {
	// connects to our testing DB - set variable here to testing URL
	mongoose.connect(testDB)
	// this grabs our users collection within the DB
	mongoose.connection.collections.users
		// this drops the collection every time
		.drop(() => {})
	done()
})

// refactor this to another file in the future
describe("Tests database connection and collections", () => {
	const joe = new User({
		name: "Joe",
		email: "test@test.com",
		googleId: "random-chars"
	})

	it("Connection is open", done => {
		mongoose.connection.on("open", () => {})
		done()
	})
	it("Users collection exists", done => {
		assert(mongoose.connection.collections.users)
		done()
	})
	it("saves a user ", done => {
		joe
			.save()
			.then(() => {
				assert(!joe.isNew)
				done()
			})
			.catch(error => console.log("Error creating user: ", error))
	})
	it("user id matches", done => {
		User.findOne({ _id: joe.id })
			.then(user => {
				assert(user.name === "Joe")
				done()
			})
			.catch(error => console.log("Error creating user: ", error))
	})
})
