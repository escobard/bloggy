const passport = require("passport")

const GoogleStrategy = require("passport-google-oauth20").Strategy

const mongoose = require("mongoose")

const keys = require("../constants/config")
const googleAuthCallback = require("../constants/routes").googleAuthCallback

const User = mongoose.model("users")

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,

			// a relative path here causes issues on production servers, since it doesn't specify
			// the need to utilize HTTPS requests - relative paths are better for development versions

			// we could just specify the heroku URL, but instead we could use a more scalable solution
			callbackURL: googleAuthCallback,

			// this tells google TRUST the heroku servers, and send over HTTPS requests instead of HTTP
			//
			proxy: true
		},

		async (accessToken, refreshToken, profile, done) => {
			/* 
			TURN THESE NOTES INTO THE PROMISE BELOW - USE THE NOTE WRITTEN
			const fetchAlbums = async () =>{
			 	// for ES2017, we use async / await instead of traditional promises.

			 	// this establishes the object as a PROMISE, when called will not return the response until the
			 	// request is finished
			 	// the expected returned object here is the RESPONSE from the promise, therefore the response
			 	// from the promise is assigned to the res variable
			 	const res = await fetch('url')

			 		// with ES2017, then() statements are unecessary if you use await
			 		// as always, each promise returns a res / req object - it's no longer necessary
			 		// to declare this object with ES201

			 		//just as above, the callback will WAIT for the request to finish before returning the response
			 		const promiseComplete = await res.json()
			 		
			 		// you can then just call the responses with the given identifiers
			 		console.log(json)
			 } 

			 fetchAlbums()asdf

			*/
			let existingUser = await User.findOne({
				email: profile.emails[0].value
			})
			
			if (existingUser) {
				// checks again to ensure the account's googleId doesn't already exist
				// for cases when the user changes their email within their google account
				// I should test this scenario on production
				let googleUser = await User.findOne({
					googleId: profile.id
				})
				if (googleUser) {
					// if the account already has a googleId, end the loop
					// done here closes the loop, expects two arguments:
					// first is an error, in this case null since its a succesful promise
					// second is the response object, which in this case is our found user
					// here either googleUser or existingUser return the same object
					done(null, existingUser)
					return
				}
				// if the account does not, we have to add the googleId to the user
				// then handle conditional routing logic for these cases here - I envision this area
				// containing a message to the user, encouraging them to log in again with
				// google auth, then route then to a screen to add a password to their account
			} 
				
			// if no user exists, create a new User instance
			let foundUser = await new User({
				googleId: profile.id,
				email: profile.emails[0].value
			})
			.save()
			.done(null, foundUser)
		}
	)
)

// this function will create our cookie, from the user data
// the first argument can be called anything, but is the returned response from the .use() method below
// in this case, once the .done() method is called, it passes the response into passport,
// and here is where we fetch it
passport.serializeUser((user, done) => {
	// first argument here is the error handler
	// second argument is the IDENTIFYING piece of information within the user instance
	// we will be using the user.id value created automatically by MongoDB for each instance, for consistency
	done(null, user.id)
})

// this function decodes the cookie, and returns the user instance
// first argument is the response object from .serializeUser(), in this case our user.id
passport.deserializeUser((id, done) => {
	// this searches through the User collection, and finds users by id
	User.findById(id).then(user => {
		// then returns the user as the response with .done()
		done(null, user)
	})
})

/*
const passport = require("passport")

// this loads our strategy, in this case Google
const GoogleStrategy = require("passport-google-oauth20").Strategy

// calls in mongoose to create a new model instance when the user is authenticated
// by the google strategy
const mongoose = require("mongoose")

// creates an instance of our model class to save the google auth profile data into
// this calls the model class, so in other words calls the COLLECTION from mongoose under the name 'users'
const User = mongoose.model('users');

const keys = require("../constants/config")
const googleAuthCallback = require("../constants/routes").googleAuthCallback
const keys = require("../constants/config")
const googleAuthCallback = require("../constants/routes").googleAuthCallback

// tells passport to use a NEW GoogleStrategy method every time

// documentation - add API documentation for oauth

	create API key here : https://console.developers.google.com -
	search for the oauth api


// takes the clientID and clientSecret arguments to handle the google strategy
// callbackURL to direct the user to a specific URL to handle the
// authenticated response from the google server
passport.use(
	// essentially what happens here is a new strategy is created, which is called 'google'
	// this is the identifier called upon with the passport.authenticate callback within the
	// route handler module
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: googleAuthCallback
		},

		// this RETURNS a function after the strategy is in place, triggered during the second
		// strategy callback for google, more explanation below
		(accessToken, refreshToken, profile, done) => {
			/* this allows us to modify the users account on their behalf
			console.log("access token", accessToken)

			// refreshes the access token
			console.log("refresh token", refreshToken)

			// returns the user profile information, to store in MongoDB
			console.log("profile", profile)

			//to create an INSTANCE of a model class, we invoke a new User, the model class loaded above
			// this creates a new instance of a user, and assigns the profile.id value to the googleId key
			// of the schema
			// since we haven't saved the model yet, it's just sitting inside of the API
			// not at the server yet
			// the lesson specifies the google ID as the identifier, but we will change this to email later
			// in preparation for other auth stratgies
			new User({googleId: profile.id, email: profile.emails[0].value})

			// we then SAVE the model class to our database's collection, we need to use the .save command
			new User({googleId: profile.id, email: profile.emails[0].value}).save() 

			
			//the .findOne method queries the data for the specified collection, in this case User
			User.findOne({
				// in the lesson we use the googlId as the query point for the user account
				// since I'll be utilizing multiple auth methods, we will use the email value
				email: profile.emails[0].value
			})
				// most of the server logic is handled with promises via async requests, remember that
				// most of these functions expect a .then() to handle the promise response
				// for the course, we will first use promises but then utilize 2017 handlers to improve
				// the syntax
				.then(existingUser => {
					if (existingUser) {
						// checks again to ensure the account's googleId doesn't already exist
						// for cases when the user changes their email within their google account
						// I should test this scenario on production
						User.findOne({
							googleId: profile.id
						}).then(googleUser => {
							if (googleUser) {
								// if the account already has a googleId, end the loop

								// done here closes the loop, expects two arguments:
								// first is an error, in this case null since its a succesful promise
								// second is the response object, which in this case is our found user
								// here either googleUser or existingUser return the same object
								done(null, existingUser)
							} else {
								// if the account does not, we have to add the googleId to the user
								// then handle conditional routing logic for these cases here - I envision this area
								// containing a message to the user, encouraging them to log in again with
								// google auth, then route then to a screen to add a password to their account
							}
						})
					} else {
						// if no user exists, create a new User instance
						new User({
							googleId: profile.id,
							email: profile.emails[0].value
						})
							.save()
							// after the record is saved, end the strategy, returning the user record
							.then(user => done(null, user))
					}
				})
		}
	)
)

 */
