const passport = require('passport');

// this loads our strategy, in this case Google
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const constants = require('./constants');

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
		clientID: constants.googleClientID,
		clientSecret: constants.googleClientSecret,
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

module.exports = function(app){
	app.get('/', (req, res) => {

		console.log('headers: ', req.headers)
		// sends the json object below to the route specified
		res.send({ hi: 'there' });

	})

	// this should be refactored into its own file module or improved syntax structure
	// this re-directs the user to the google signin application
	app.get(
		// route
		'/auth/google', 

		// middleware used between the request and the response
		// passport callback asking the request to be authenticated with the google strategy
		// this strategy was created above with the passport.use callback
		// the entire purpose of this method is to send the authentication request to google
		// then when the user signs in send them back to the callbackURL with the access code
		// which contains the user profile and email data identifiers
		passport.authenticate('google', {
			
			// requesting the profile, and email information from the users account
			scope: ['profile', 'email']
		})
	)

	// this will handle the route for when the user gets to the 'auth/google/callback' URL
	app.get('/auth/google/callback', 

		// uses our strategy created before, since it's already been utilized 
		// this returns the SECOND callback of the strategy which at the moment 
		// consol logs a token
		passport.authenticate('google')
	)
};
