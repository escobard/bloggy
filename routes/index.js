const authRoutes = require("./authRoutes");
const billingRoutes = require("./billingRoutes");

module.exports = function(app) {

	// this code tells express to route any requests outside of the routes it handles to the front end
	// to be handled by react-router-dom - should be refactored into a helper file
	if(process.env.NODE_ENV === 'production'){

		// express will serve up production assets within client/bundle

		// this looks for any files that the request requires, within the client/build directory 
		// depending on the route - if the file requested is within the build directory, serve it
		app.use(express.static('client/build'))

		// express will serve up the index.html file if it doesn't recognize the route
		const path = require('path');

		// this is the wild card handler for any route that is NOT already defined "*"
		app.get("*", (req, res) =>{

			// sends the index.html file from our client/build directory if the route is not recognized
			res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
		})
	}
	
	app.get("/", (req, res) => {
		console.log("headers: ", req.headers);
		// sends the json object below to the route specified
		res.send({ hi: "there" });
	});

	authRoutes(app);
	billingRoutes(app);
};
