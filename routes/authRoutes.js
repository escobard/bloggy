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

	app.get(
		googleAuthCallback,

		// this is a middleware, with the google authentication passport strategy
		// middlewares can be added to each route as the SECOND argument of route functions
		passport.authenticate("google"),

		(req, res) => {
			// using the .redirect() function of express, redirects the user to the established URL
			// this redirects with the response
			res.redirect("/dashboard");
		}
	);

	app.get(logout, (req, res) => {
		req.logout();
	});

	app.get(authenticatedUser, (req, res) => {
		console.log("USERDATA", req.user);
		res.send(req.user);
	});
};
