const sendgrid = require('sendgrid'),
sendGrid = require('../../constants/config'),
// creates a helper from the sendgrid lib
helper = sendgrid.mail;

class Mailer extends helper.Mail{
	constructor(
		// deconstructs the data from our mongoose instance
		{ subject, recipients },

		// grabs the data from the HTML template
		content){
		super();

		// sets the from field, helper function of sendgrid
		this.from_email = new helper.Email('no-reply@engbook.ca')
		this.subject = subject;
		this.body = new helper.Content(
			// sets up the meta tag for the html content
			'text/html', 
			// grabs the content string from the HTML template
			content
		)
		this.recipients = this.formatAddresses(recipients)
	}
	formatAddresses(recipients){

		// grabbing only the email property of each recipient object
		return recipients.map(({email}) =>{

			// this cleans up the email string, removing extra spaces and formatting it for sendgrid
			return new helper.Email(email)
		})
	}
}

module.exports = Mailer;