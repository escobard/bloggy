// not sure how necessary this import is - sometimes testing frameworks give routes issues if you import
// models multiple times so we are loading the jobs scheme prior to the route callback
const mongoose = require("mongoose"),
{ jobs, jobsThanks } = require("../constants/routes"),
requireLogin = require("../middlewares/requireLogin"),
requireCredits = require("../middlewares/requireCredits"),
Mailer = require("../services/Mailer"),
jobTemplate = require("../services/Mailer/emailTemplates/jobTemplate"),
Job = mongoose.model("jobs")

module.exports = app => {

	// sets up our route to return some data to the user after they have clicked on a job link
	app.get(jobsThanks, (req, res) =>{
		res.send('Thanks for voting!')
	})

	// we can add as many middlewares as we want to a route handl er
	// the only gotcha is that the middlewares MUST be added in the order
	// we want the middlewares to run
	app.post(jobs, requireLogin, requireCredits, async (req, res) => {
		// grabs the properties we need to store within mongo from the request
		const { title, subject, body, recipients } = req.body;

		// sets the properties of our new job instance
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

		// creates error handling for our requests to sendgrid / mongodb
		try{

			// sends the email off to sendGrid which sends the email to the user and sets up our custom links
			await mailer.send()

			// saves the job instance to our mongoDB 
			await job.save()

			// removes a credit from the user once the job post has been sent
			req.user.credits -= 1;

			// saves the new user instance to our DB
			const user = await req.user.save()


			// sends back the user data to the front end, updating the new credit score
			res.send(user);
		}

		catch(err){
			res.status(422).send(err)
		}

	});
};