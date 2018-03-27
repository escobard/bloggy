const passport = require("passport");

const { stripeRoute } = require("../constants/routes");
const { stripeSecret } = require("../constants/config-dev");
const requireLogin = require("../middlewares/requireLogin");

// this package handles stripe usage with node.js
// HUGE amount of helpful documentation (thank gawd) for developers
// https://www.npmjs.com/package/stripe

// requires the secretKey to call stripe
const stripe = require("stripe")(stripeSecret);

module.exports = function(app) {
	// since we are using the bodyParser library, we can call parse objects for the
	// POST request into req.body - this isn't a default function of express
	// in other words, this turns the REQUEST object from the client, into a JSON object that the server
	// can then utilize

	// the second argument here, requireLogin, is our middleware checking the routes
	// this is how you apply middlewares to express routes
	app.post(stripeRoute, requireLogin, async (req, res) => {
		// this should return the stripe API payment token, which contains all the necessary client data
		// if the request came as a POST request from the client side
		console.log(req.body);

		/* more on how charges with stripe work here: https://stripe.com/docs/api/node#create_charge 
		*/
		const charge = await stripe.charges.create({
			// amount - the amount of money in cents that the transaction
			// is expected to charge the user in CENTS

			// declared again from the front end to double check the amount between the client / server sides
			// before sending off to the stripe authentication API
			amount: 500,

			// default currency is again USD, but can be set to pretty much anything else
			currency: "usd",
			description: "$5 for 5 credits",

			// this is the TOKEN that we received from the client side request to the stripe API
			source: req.body.id
		});

		// returns the charge response from the API
		// console.log(charge)

		// since we already set up passport, if our USER is authenticated within the API, the user object
		// containing our user's data is attached to the req.user object for all routes
		// this attaches the user MODEL, so the mongoose object with all its child properties
		// more on how this is set up with passport on ./services/passport.notes.js

		// with that continuity in mind, we can simply add more credits to the user model instance, like so:
		req.user.credits += 5;

		// this uses the .save() method of the user MODEL to save our instance with the new credit data,
		// and saves the response to the a local user constant
		const user = await req.user.save();

		// returns a response back to the client side with the updated user model instance
		res.send(user);
	});
};
