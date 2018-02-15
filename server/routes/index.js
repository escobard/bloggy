const authRoutes = require('./authRoutes')

module.exports = function(app) {
	app.get("/", (req, res) => {
		console.log("headers: ", req.headers);
		// sends the json object below to the route specified
		res.send({ hi: "there" });
	});

	// handles authentication routes, will need to fragment in the future
	authRoutes(app)
};