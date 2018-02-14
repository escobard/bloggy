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
			callbackURL: googleAuthCallback
		},
		(accessToken, refreshToken, profile, done) => {
			new User({
				googleId: profile.id,
				email: profile.emails[0].value
			}).save()
		}
	)
)

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
			// this allows us to modify the users account on their behalf
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
		}
	)
)

 */
