const sendgrid = require("sendgrid"),
	{sendGrid} = require("../../constants/config"),
	// creates a helper from the sendgrid lib
	helper = sendgrid.mail;

class Mailer extends helper.Mail {
	constructor(
		// deconstructs the data from our mongoose instance
		{ subject, recipients },
		// grabs the data from the HTML template
		content
	) {
		super();

		// sets up the connection to the API with our private key
		this.sgApi = sendgrid(sendGrid)

		// sets the from field, helper function of sendgrid
		this.from_email = new helper.Email("no-reply@engbook.ca");
		this.subject = subject;
		this.body = new helper.Content(
			// sets up the meta tag for the html content
			"text/html",
			// grabs the content string from the HTML template
			content
		);
		this.recipients = this.formatAddresses(recipients);

		// adds the HTML content of the body to the body of the email
		// this.addContent is a helper function of the sengrid.mail class
		this.addContent(this.body)

		this.addClickTracking()

		// adds the array of emails created by formatAddresses to the sengrid.mail.addRecipients
		this.addRecipients(recipients)
	}

	formatAddresses(recipients) {
		// grabbing only the email property of each recipient object
		return recipients.map(({ email }) => {
			// this cleans up the email string, removing extra spaces and formatting it for sendgrid
			return new helper.Email(email);
		});
	}

	addClickTracking(){
		//sets up our click tracking for the email links (yes or no)
		// this is copied from the sendGrid documentation
		const trackingSettings = new helper.TrackingSettings();
		const clickTracking = new helper.ClickTracking(true, true)

		trackingSettings.setClickTracking(clickTracking)
		this.addTrackingSettings(trackingSettings)
	}

	addRecipients(recipients){
		// defines the personalize helper 
		const personalize = new helper.Personalization()

		// maps through each email in the array
		this.recipients.forEach(recipient =>{
			personalize.addTo(recipient)
		})

		// ads the new array of recipients to our mailer class, via the sendgrid.mail.addPersonalization() function
		this.addPersonalization(personalize)
	}

	async send(){

		// this sends the data to sendgrid
		const request = this.sgApi.emptyRequest({
			method: 'POST',
			path: '/v3/mail/send',
			body: this.toJSON()
		})

		const response = await this.sgApi.API(request);
		return response;
	}
}

module.exports = Mailer;