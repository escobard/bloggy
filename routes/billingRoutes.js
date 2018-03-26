const passport = require("passport");

const { stripeRoute } = require("../constants/routes");
const { stripeSecret } = require("../constants/config-dev");

// this package handles stripe usage with node.js
// HUGE amount of helpful documentation (thank gawd) for developers
// https://www.npmjs.com/package/stripe

// requires the secretKey to call stripe
const stripe = require("stripe")(stripeSecret);

module.exports = function(app) {

	// since we are using the bodyParser library, we can call json objects for the 
	// POST request with req.body
	app.post(stripeRoute, (req, res) => {
		console.log(req.body)
	});
};

