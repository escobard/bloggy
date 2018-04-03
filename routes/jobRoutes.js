// not sure how necessary this import is - sometimes testing frameworks give routes issues if you import
// models multiple times so we are loading the jobs scheme prior to the route callback
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const Job = mongoose.model("jobs");

module.exports = app => {
	// we can add as many middlewares as we want to a route handler
	// the only gotcha is that the middlewares MUST be added in the order
	// we want the middlewares to run
	app.post("/api/jobs", requireLogin, requireCredits, (req, res) => {
		// grabs the properties we need to store within mongo from the request
		const { title, subject, body, recipients } = req.body;

		// sets the properties of our new survey instance
		const job = new Job({
			title,
			subject,
			body
		});
	});
};
