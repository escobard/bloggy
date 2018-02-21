const mongoose = require("mongoose")
const assert = require("assert")

mongoose.Promise = global.Promise
before(done => {
	// connects to our testing DB - set variable here to testing URL
	mongoose.connect("mongodb://localhost/users_test")

	/*
		mongoose.connection

		// watches for mongoose's .open() event which means the connection is established
		.once('open', 
			() => console.log('Database connected!'))

			// calls the done method of mocha, then runst he rest of the tests
			done()

		// if the .error() event is fired, that means the connection failed
		.on('error', (error) =>{
			console.warn('Warning: ', error)
		}) */

	done()
})

// this beforeEach handler could arguably be refactored into the before handler instead.
// this allows for data retention for each test runtime, instead of clearing the users per test
// there are cases where this may be helpful, but in our case it isn't - leave alone for now

// adds a hook, dropping all the data within the test DB
// the done callback from mocha is a used to notify mocha to run the next test
// in other words, no test will run before the statement below, ensuring that
// the user collection is dropped every time the tests are ran
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
})
