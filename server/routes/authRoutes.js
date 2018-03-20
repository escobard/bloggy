const passport = require("passport");

const {
	googleAuth,
	googleAuthCallback,
	authenticatedUser,
	logout
} = require("../constants/routes");

module.exports = function(app) {
	app.get(
		googleAuth,
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);

	app.get(googleAuthCallback, passport.authenticate("google"));

	app.get(logout, (req, res) => {
		req.logout();
		res.send(req.user);
	});

	app.get(authenticatedUser, (req, res) => {
		console.log("USERDATA", req.user);
		res.send(req.user);
	});
};

/* 
const passport = require('passport');

const googleAuth = require('../constants/routes').googleAuth
const googleAuthCallback = require('../constants/routes').googleAuthCallback

module.exports = function(app) {
	// this should be refactored into its own file module or improved syntax structure
	// this re-directs the user to the google signin application
	app.get(
		// route
		googleAuth, 

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
	app.get(googleAuthCallback, 

		// uses our strategy created before, since it's already been utilized 
		// this returns the SECOND callback of the strategy which at the moment 
		// consol logs a token
		passport.authenticate('google')
	)
};



*/
