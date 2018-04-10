// not sure how necessary this import is - sometimes testing frameworks give routes issues if you import
// models multiple times so we are loading the jobs scheme prior to the route callback
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const jobTemplate = require("../services/Mailer/emailTemplates/jobTemplate");

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
			body,

			// unecessarily complicated to handle this within the BE
			// we could easily have each recipient passed as an OBJECT within an ARRAY
			// within the front end instead of parsing the data as strings in the API
			// for the purposes of learning though we will go with the instructors solution
			recipients:
				// creates an array of strings from the front end data
				recipients
					.split(",")

					// maps through the array
					// un-abbreviated = .map(email =>{
					// returns each string within the array as an object containing a string, satisfying the
					// user schema data types for the RecipientSchema
					//return {email:
					// removes any trailing spaces
					// email.trim()}})
					.map(email => ({ email: email.trim() })),

			// grabs the user id from the request, and adds it to the schema
			// this will always exsist because of our middlewares which verify authentication + credits before
			// running the route handler
			_user: req.user.id,

			// creates our date for when the job request was received
			dateSent: Date.now()
		});

		//we will set up our mailer class to send to sendGrid here
		const mailer = new Mailer(
			// passes our new job mongoose schema to the mailer class
			job,

			// passes the HTML of the body
			jobTemplate(job)
		);
	});
};