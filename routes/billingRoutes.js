const passport = require("passport");

const { stripeRoute } = require("../constants/routes");
const { stripeSecret } = require("../constants/config-dev");

// this package handles stripe usage with node.js
// HUGE amount of helpful documentation (thank gawd) for developers
// https://www.npmjs.com/package/stripe

// requires the secretKey to call stripe
const stripe = require("stripe")(stripeSecret);

module.exports = function(app) {

	// since we are using the bodyParser library, we can call parse objects for the 
	// POST request into req.body - this isn't a default function of express
	app.post(stripeRoute, (req, res) => {

		// this should return the stripe API payment token, which contains all the necessary client data
		console.log(req.body)

		/* more on how charges with stripe work here: https://stripe.com/docs/api/node#create_charge 
		*/
		stripe.charges.create({
			// amount - the amount of money in cents that the transaction
			// is expected to charge the user in CENTS

			// declared again from the front end to double check the amount between the client / server sides
			// before sending off to the stripe authentication API
			amount: 500,

			// default currency is again USD, but can be set to pretty much anything else 
			currency: 'usd',
			description: '$5 for 5 credits',

			// this is the TOKEN that we received from the client side request to the stripe API
			source: req.body.id
		})
	});
};

