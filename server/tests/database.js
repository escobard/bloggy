const mongoose = require("mongoose")
const assert = require("assert")
require("../models/Users")

const User = mongoose.model("users")
const testDB = require("./config").testDB

mongoose.Promise = global.Promise
before(done => {
	// connects to our testing DB - set variable here to testing URL
	mongoose.connect(testDB)
	done()
})

beforeEach(done => {
	// this grabs our users collection within the DB
	mongoose.connection.collections.users
		// this drops the collection every time
		.drop(() => {
			done()
		})
})

// refactor this to another file in the future
describe("Tests database connection and collections", () => {
	it("Connection is open", done => {
		mongoose.connection.on("open", () => {})
		done()
	})
	it("Users collection exists", done => {
		assert(mongoose.connection.collections.users)
		done()
	})
	it("saves a user", done => {
		// expects an assertion, checking something
		// assert( 1 + 1 === 2)

		/* expects an assertion, checking something - meant to fail
		assert( 1 + 1 === 3) */

		// creates a new user with a name to test a user instance
		const joe = new User({ name: "Joe" })

		// saves joe using the .save() method of mongoose
		joe
			.save()
			.then(() => {
				// has joe been saved succesfully?

				// if joe has NOT been saved to MongoDB but exsists in mongoose, joe.isNew === true
				// if joe HAS been saved to MongoDB then joe.isNew === false

				// this assertion ensures that the user schema has been saved to the database
				// therefore joe.isNew === false
				assert(!joe.isNew)

				// tells mocha that we are done after the user has been saved
				done()
			})
			.catch(error => console.log("Error creating user: ", error))
	})
})
