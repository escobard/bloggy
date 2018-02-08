const passport = require('passport');

// this loads our strategy, in this case Google
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const config = require('../constants/config');


// tells passport to use a NEW GoogleStrategy method every time
/*
/ documentation - add API documentation for oauth

	create API key here : https://console.developers.google.com -
	search for the oauth api
*/

// takes the clientID and clientSecret arguments to handle the google strategy
// callbackURL to direct the user to a specific URL to handle the 
// authenticated response from the google server
passport.use(
	// essentially what happens here is a new strategy is created, which is called 'google'
	// this is the identifier called upon with the passport.authenticate callback within the
	// route handler module
	new GoogleStrategy({
		clientID: config.googleClientID,
		clientSecret: config.googleClientSecret,
		callbackURL: '/auth/google/callback'
	}, 

	// this RETURNS a function after the strategy is in place, triggered during the second 
	// strategy callback for google, more explanation below
	(accessToken, refreshToken, profile, done) => {

		// this allows us to modify the users account on their behalf
		console.log('access token', accessToken);

		// refreshes the access token 
		console.log('refresh token', refreshToken);

		// returns the user profile information, to store in MongoDB
		console.log('profile', profile);
	})
);