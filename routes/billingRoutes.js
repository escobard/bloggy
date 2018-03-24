const passport = require("passport");

const { stripe } = require("../constants/routes");

module.exports = function(app) {
	app.get(stripe, (req, res) => {});
};
