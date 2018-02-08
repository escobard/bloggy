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
passport.use(new GoogleStrategy({
		clientID: constants.googleClientID,
		clientSecret: constants.googleClientSecret,
		callbackURL: constants.googleCallbackURL
	}, (acessToken) => {
		console.log(accessToken)
	})
);

module.exports = function(app){
	app.get('/', (req, res) => {

		console.log('headers: ', req.headers)
		// sends the json object below to the route specified
		res.send({ hi: 'there' });

	})
};
