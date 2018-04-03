const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

module.exports = app => {

	// we can add as many middlewares as we want to a route handler
	// the only gotcha is that the middlewares MUST be added in the order 
	// we want the middlewares to run
	app.post('/api/jobs', requireLogin, requireCredits, (req, res) =>{

	})
}