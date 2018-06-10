module.exports = function(app) {
	require("./authRoutes")(app)
	require("./billingRoutes")(app)
	require("./jobRoutes")(app)
	require("./profileRoutes")(app)
};
