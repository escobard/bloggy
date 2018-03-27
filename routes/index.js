const authRoutes = require("./authRoutes");
const billingRoutes = require("./billingRoutes");

module.exports = function(app) {

	authRoutes(app);
	billingRoutes(app);
};
